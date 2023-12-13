import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import rootReducer from './rootReducer';
import { apiService } from 'services/apiService';

const storeUser = createWhitelistFilter('user', ['accessToken', 'refreshToken', 'user']);

const persistConfig = {
  key: 'root:demo',
  storage,
  transforms: [storeUser]
};

const middlewares: any = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares).concat(apiService.middleware)
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
