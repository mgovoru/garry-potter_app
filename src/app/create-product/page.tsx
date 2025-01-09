'use client';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHero } from '../heroesSlice';
import Link from 'next/link';
import { Box, Button, Typography } from '@mui/material';
import FormFields from '../components/Form/FormFields';
import { useFormik } from 'formik';
import { validationSchema } from '../components/Form/validation';

export default function CreateProduct() {
  const [heroDone, setHeroDane] = useState(false);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      image: '',
      name: '',
      species: '',
      house: '',
      hairColour: '',
      patronus: '',
      eyeColour: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {addHeroBase();},
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    formik.handleChange(event);
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addHeroBase = () => {
    dispatch(addHero(formData));
    setHeroDane(true);
  };

  const [formData, setFormData] = useState({
    id: Math.random().toString(),
    name: '',
    alternate_names: [],
    species: '',
    gender: '',
    house: '',
    dateOfBirth: '',
    yearOfBirth: null,
    wizard: false,
    ancestry: '',
    eyeColour: '',
    hairColour: '',
    hairColor: '',
    wand: {
      wood: '',
      core: '',
      length: null,
    },
    patronus: '',
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: '',
    alternate_actors: [],
    alive: false,
    image: '',
  });

  return (
    <>
      <h3 className='title-page'>Create hero</h3>
      <Box
        component='form'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          minWidth: 345,
          '& .MuiInputBase-input': {
            fontSize: '18px',
            color: 'white',
          },
        }}
        noValidate
        autoComplete='off'
        onSubmit={formik.handleSubmit}
      >
        <FormFields values={formData} onInputChange={handleInputChange} formik={formik}/>
        <Button
          type='submit'
          variant='contained'
          sx={{
            backgroundColor: 'yellow',
            color: 'red',
            '&: hover': {
              color: 'white',
              backgroundColor: 'red',
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'var(--font-fontdiner-sans)',
              fontSize: '18px',
              fontWeight: '600',
            }}
          >
            {heroDone ? 'Hero Done' : 'Add Hero'}
          </Typography>
        </Button>
      </Box>
      <Link href='/products' className='link'>
        to students
      </Link>
    </>
  );
}
