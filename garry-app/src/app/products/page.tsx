'use client';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, InputBase, styled } from "@mui/material";
import CardHero from "../components/Card/page";
import React from "react";
import { useSelector } from "react-redux";
import { InitialStore } from "../types";
import styles from './page.module.css';


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



export default function Products() {
	

	 const [favorite, setFavorite] = React.useState('all');

	const stateHeroes = useSelector((state: InitialStore) => state.heroes);

	const stateFavorite = useSelector((state: InitialStore) => state.favorite);

   const handleChange = (event: SelectChangeEvent) => {
     setFavorite(event.target.value as string);
   };

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
          {favorite !== 'favorite'
            ? stateHeroes.map((hero, index) => {
                return <CardHero hero={hero} key={index} />;
              })
            : stateHeroes
                .filter((hero) => stateFavorite.indexOf(hero.id) !== -1)
                .map((hero, index) => {
                  return <CardHero hero={hero} key={index} />;
                })}
        </div>
      </main>
    </div>
  );
} 
