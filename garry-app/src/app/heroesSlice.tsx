import { createSlice } from '@reduxjs/toolkit';
import { InitialStore } from './types';

const initialState: InitialStore = { heroes: [], favorite: [] };

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    addFavoriteHero: (state, action) => {
      state.favorite.push(action.payload);
    },
    setHeroes: (state, action) => {
      state.heroes.push(...action.payload);
    },
    removeFavoriteHero: (state, action) => {
       state.favorite = state.favorite.filter(
         (element) => element !== action.payload
       );
    },
    removeHero: (state, action) => {
       state.heroes = state.heroes.filter(
         (element) => element.id !== action.payload
       );
    },
  },
});

export const { addFavoriteHero, setHeroes, removeFavoriteHero, removeHero } =
  heroesSlice.actions;

export default heroesSlice.reducer;
