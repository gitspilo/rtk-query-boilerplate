import axios from 'axios';

let failedQueue: any = [];
let isRefreshing = false;

const processQueue = (error: any) => {
  failedQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });

  failedQueue = [];
};

export const createAxiosClient = ({
  options,
  getCurrentAccessToken,
  getCurrentRefreshToken,
  refreshTokenUrl,
  logout,
  setRefreshedTokens
}: any) => {
  const client = axios.create(options);

  client.interceptors.request.use(
    (config: any) => {
      if (config.authorization !== false) {
        const token = getCurrentAccessToken();

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  client.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      // In "axios": "^1.1.3" there is an issue with headers, and this is the workaround.
      originalRequest.headers = JSON.parse(JSON.stringify(originalRequest.headers || {}));

      const refreshToken = getCurrentRefreshToken();

      // If error, process all the requests in the queue and logout the user.
      const handleError = (error: any) => {
        processQueue(error);
        logout();
        return Promise.reject(error);
      };

      // Refresh token conditions
      if (
        refreshToken &&
        error.response?.status === 401 &&
        error.response.data.message === 'TokenExpiredError' &&
        originalRequest?.url !== refreshTokenUrl &&
        // eslint-disable-next-line
        originalRequest?._retry !== true
      ) {
        if (isRefreshing) {
          try {
            await new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            });
            return await client(originalRequest);
          } catch (err) {
            return Promise.reject(err);
          }
        }

        isRefreshing = true;
        // eslint-disable-next-line
        originalRequest._retry = true;
        return client
          .post(refreshTokenUrl, {
            refreshToken
          })
          .then((res) => {
            const tokens = {
              accessToken: res.data?.token,
              refreshToken: null
            };
            setRefreshedTokens(tokens);
            processQueue(null);

            return client(originalRequest);
          }, handleError)
          .finally(() => {
            isRefreshing = false;
          });
      }

      // Refresh token missing or expired => logout user...
      if (error.response?.status === 401 && error.response?.data?.message === 'TokenExpiredError') {
        return handleError(error);
      }

      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return client;
};
