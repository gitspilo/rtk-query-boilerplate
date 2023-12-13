import { createSelector } from '@reduxjs/toolkit';
import { filter, isEmpty, map, uniqBy } from 'lodash';
import { RootState } from '..';
import { userSlice } from './slice';
import { User } from './types';

export const { setUsers, setAccessToken, setRefreshToken, setUser } = userSlice.actions;
export default userSlice.reducer;

const selectUsers = (state: RootState) => state.user.users;
const selectPhone = (state: RootState, phone: string | null) => phone;

export const getSelectedPhoneUsers = createSelector([selectUsers, selectPhone], (users, phone) => {
  if (!phone) return users;
  return filter(users, ['phone', phone]);
});

export const getPhoneOptions = (state: RootState) => {
  const { users } = state.user;
  const data: any[] = [];
  if (isEmpty(users)) return [];
  map(users, (user: User) => {
    return data.push({ label: user.phone, value: user.phone });
  });
  return uniqBy(data, 'value');
};
