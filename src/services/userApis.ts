import { AxiosResponse } from 'axios';
import { apiService } from './apiService';

export const userapi = apiService.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, { username: string; password: string }>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        data: body
      }),
      invalidatesTags: ['User']
    }),
    getUsers: build.query({
      query: () => ({ url: '/users', method: 'GET' }),
      providesTags: ['User'],
      transformResponse: (response: AxiosResponse) => {
        return response.data;
      }
    })
  }),

  overrideExisting: true
});

export const { useGetUsersQuery, useLoginMutation } = userapi;
