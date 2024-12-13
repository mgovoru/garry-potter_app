import { createSlice } from '@reduxjs/toolkit';
import { Character } from './types';

const initialState: Character[] = [];

export const counterSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    addhero: (state, action) => {
      state.push(action.payload)
    },
    removehero: (state, action) => {
      state.filter(element => element.id !== action.payload.id)
    },
  },
});

export const { addhero, removehero } = counterSlice.actions;

export default counterSlice.reducer;
