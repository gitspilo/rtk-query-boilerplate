import { combineReducers } from '@reduxjs/toolkit';

import user from './users'
import { apiService } from 'services/apiService';

const rootReducer = combineReducers({
  user,
  [apiService.reducerPath]: apiService.reducer
});

export default rootReducer;
