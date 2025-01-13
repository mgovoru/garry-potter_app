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
      state.heroes = [action.payload, ...state.heroes];
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
    editHero: (state, action) => {
     state.heroes = state.heroes.map((element) => {
       if (element.id === action.payload.id) {
         return { ...element, ...action.payload };
       }
       return element;
     });
    },
  },
});

export const {
  addFavoriteHero,
  setHeroes,
  removeFavoriteHero,
  removeHero,
  addHero,
  editHero,
} = heroesSlice.actions;

export default heroesSlice.reducer;
