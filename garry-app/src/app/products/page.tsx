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

import React, { useState } from 'react';
import Link from 'next/link';
import { Cards } from '../Cards/page';

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

  return (
    <main className='main'>
      <div className='container'>
        <Link href='/create-product'>create hero</Link>
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
            count={10}
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
      </div>
    </main>
  );
}
