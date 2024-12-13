import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './heroesSlice';

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
