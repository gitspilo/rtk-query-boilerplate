import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import  { AxiosError, AxiosRequestConfig } from 'axios';
import { client } from './axiosClient';

const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      if (method === 'POST') {
        const result = await client.post(url, data);
        return { data: result };
      }

      const result = await client.get(url);
      return { data: result };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          message: err.response?.data
        }
      };
    }
  };

export const apiService = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: 'demoapi',
  tagTypes: ['User'],
  refetchOnReconnect: true,
  endpoints: () => ({})
});
