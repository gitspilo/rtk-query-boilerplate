import { createSlice } from '@reduxjs/toolkit';
import { getStorageValue } from 'services/axiosClient';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'constants/common.constant';
import { UserState } from './types';

const initialState: UserState = {
  users: [],
  accessToken: getStorageValue(ACCESS_TOKEN) || null,
  refreshToken: getStorageValue(REFRESH_TOKEN) || null,
  user: null
};



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    }
  }
});
