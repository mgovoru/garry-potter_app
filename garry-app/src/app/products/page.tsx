'use client';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputBase,
  styled,
  Stack,
  Pagination,
} from '@mui/material';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cards } from '../Cards/page';
import { useSelector } from 'react-redux';
import { InitialStore } from '../types';

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
  const [favorite, setFavorite] = useState('all');

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setFavorite(event.target.value as string);
  };

  const heroesLength = useSelector(
    (state: InitialStore) => state.heroes.length
  );

  const heroesFavoriteLength = useSelector(
    (state: InitialStore) => state.favorite.length
  );

  const [count, setCount] = useState(
    favorite === 'all'
      ? Math.ceil(heroesLength / 20)
      : Math.ceil(heroesFavoriteLength / 20)
  );

  useEffect(() => {
    setCount(
      favorite === 'all'
        ? Math.ceil(heroesLength / 20)
        : Math.ceil(heroesFavoriteLength / 20)
    );
  }, [favorite, heroesLength, heroesFavoriteLength]);

  return (
    <>
      <Link href='/create-product' className='link'>create hero</Link>
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
      <Stack
        spacing={2}
        sx={{ marginBottom: '20px', display: 'flex', width: '100%' }}
      >
        <Pagination
          count={count}
          shape='rounded'
          onChange={handlePageChange}
          page={currentPage}
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'white',
              fontFamily: 'var(--font-fontdiner-sans)',
            },
          }}
        />
      </Stack>
      <Cards favorite={favorite} numberPage={currentPage} />
    </>
  );
}
