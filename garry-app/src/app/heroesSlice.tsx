import { createSlice } from '@reduxjs/toolkit';
import { InitialStore } from './types';

const initialState: InitialStore = { heroes: [], favorite: [] };

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    addFavoriteHero: (state, action) => {
      state.favorite = [...state.favorite, action.payload];
    },
    addHero: (state, action) => {
      console.log(state.heroes);
      console.log(action.payload);
      state.heroes = [...state.heroes, action.payload];
    },
    setHeroes: (state, action) => {
      state.heroes = action.payload;
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

export const {
  addFavoriteHero,
  setHeroes,
  removeFavoriteHero,
  removeHero,
  addHero,
} = heroesSlice.actions;

export default heroesSlice.reducer;
