import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { requestApi } from '../services/requestApi';
import userDataReducer from './slices/userDataSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    [requestApi.reducerPath]: requestApi.reducer,
    userObj: userDataReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(requestApi.middleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
