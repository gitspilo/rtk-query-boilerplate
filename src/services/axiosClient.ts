import Cookies from 'universal-cookie';
import { store } from 'store/index';
import { BASE_URL } from 'utils/apiUrls';
import { createAxiosClient } from './createAxiosClient';
import { ACCESS_TOKEN } from 'constants/common.constant';

const cookies = new Cookies();

export const Timeout = (time: number) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), time * 1000);
  return controller;
};

export const getStorageValue = (storageKey: string) => {
  const value = cookies.get(storageKey);

  return value;
};

export const setAsyncStorageValue = (key: string, value: string) => {
  document.cookie = `${key}=; Path=/; Expires=${new Date().toUTCString()};`;
  cookies.set(key, value);

  return value;
};

export const getCurrentAccessToken = () => {
  setAsyncStorageValue(ACCESS_TOKEN, store.getState().user.accessToken);
  return store.getState().user.accessToken;
};

export const getCurrentRefreshToken = () => {
  return store.getState().user.refreshToken;
};

// eslint-disable-next-line
export const setRefreshedTokens = (tokens: any) => {
  // const login = store.getState().user.setAccessToken;
  // login(tokens);
};

export const logout = async () => {
  // const logout = store.getState().user.setRefreshToken;
  cookies.remove(ACCESS_TOKEN);
  // logout();
};

export const client = createAxiosClient({
  options: {
    baseURL: BASE_URL,
    timeout: Timeout(100).signal,
    headers: {
      'Content-Type': 'application/json'
    }
  },
  getCurrentAccessToken,
  getCurrentRefreshToken,
  refreshTokenUrl: '',
  logout,
  setRefreshedTokens
});
