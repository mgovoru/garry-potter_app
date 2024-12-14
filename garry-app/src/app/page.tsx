'use client';
import React from 'react';
import { useEffect } from 'react';
import CardHero from './components/Card/page';
import styles from './page.module.css';
import axios from 'axios';
import { store } from './store';
import { setHeroes } from './heroesSlice';
import { Character, InitialStore } from './types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useSelector } from 'react-redux';

const BootstrapInput = styled(InputBase)(({}) => ({
  '& .MuiInputBase-input': {
    padding: '10px 26px 10px 12px',
    border: '1px solid #ced4da',
    color: 'white',
    fontFamily: 'var(--font-fontdiner-sans)',
    '&:focus': {
      borderColor: 'yellow',
      color: 'red',
    },
  },
}));

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const [favorite, setFavorite] = React.useState('all');

  const stateHeroes = useSelector(
    (state: InitialStore) => state.heroes
  );

  const handleChange = (event: SelectChangeEvent) => {
    setFavorite(event.target.value as string);
  };

  useEffect(() => {
    async function getHeroes() {
      try {
        const response = await axios.get(
          'https://hp-api.onrender.com/api/characters'
        );
        store.dispatch(setHeroes(response.data.slice(0, 20) as Character[]));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getHeroes();
  }, []);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <FormControl fullWidth>
            <InputLabel
              id='demo-simple-select-label'
              sx={{
                color: 'white',
                fontFamily: 'var(--font-fontdiner-sans)',
                '&.Mui-focused': { color: 'red' },
              }}
            >
              Choose heroes
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={favorite}
              label='Age'
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem
                value={'all'}
                sx={{
                  fontFamily: 'var(--font-fontdiner-sans)',
                }}
              >
                All
              </MenuItem>
              <MenuItem
                value={'favorite'}
                sx={{
                  fontFamily: 'var(--font-fontdiner-sans)',
                }}
              >
                Favorite
              </MenuItem>
            </Select>
          </FormControl>
          {!loading &&
            (favorite !== 'favorite'
              ? stateHeroes.map((hero) => {
                  return <CardHero hero={hero} key={hero.id} />;
                })
              : stateHeroes
                  .filter(
                    (hero) => store.getState().favorite.indexOf(hero.id) !== -1
                  )
                  .map((hero) => {
                    return <CardHero hero={hero} key={hero.id} />;
                  }))}
        </div>
      </main>
    </div>
  );
}
