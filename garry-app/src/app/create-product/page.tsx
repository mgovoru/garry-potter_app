'use client';
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHero } from '../heroesSlice';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';

const fieldsToValidate = [
  'name',
  'species',
  'house',
  'hairColour',
  'patronus',
  'eyeColour',
  'dateOfBirth',
];

const validationSchema = yup.object(
  fieldsToValidate.reduce(
    (schema: Record<string, yup.StringSchema>, field: string) => {
      schema[field] = yup
        .string()
        .matches(/^[A-Za-z\s]+$/, 'Only letters are allowed')
        .required('This field is required');
      return schema;
    },
    {
      image: yup
        .string()
        .url('Please enter a valid URL')
        .required('This field is required'),
    }
  )
);

export default function CreateProduct() {
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
      dateOfBirth: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      dispatch(addHero(formData));
    },
  });

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
        }}
        noValidate
        autoComplete='off'
        onSubmit={formik.handleSubmit}
      >
        <TextField
          id='outlined-basic'
          name='name'
          label='name'
          variant='outlined'
          required
          onChange={handleInputChange}
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          id='outlined-basic'
          name='image'
          label='url image'
          variant='outlined'
          value={formik.values.image}
          error={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
          required
          onChange={handleInputChange}
        />
        <TextField
          id='outlined-basic'
          name='species'
          label='species'
          variant='outlined'
          onChange={handleInputChange}
          value={formik.values.species}
          error={formik.touched.species && Boolean(formik.errors.species)}
          helperText={formik.touched.species && formik.errors.species}
          required
        />
        <TextField
          id='outlined-basic'
          name='house'
          label='house'
          variant='outlined'
          onChange={handleInputChange}
          value={formik.values.house}
          error={formik.touched.house && Boolean(formik.errors.house)}
          helperText={formik.touched.house && formik.errors.house}
          required
        />
        <TextField
          id='outlined-basic'
          name='hairColour'
          label='hair colour'
          variant='outlined'
          onChange={handleInputChange}
          value={formik.values.hairColour}
          error={formik.touched.hairColour && Boolean(formik.errors.hairColour)}
          helperText={formik.touched.hairColour && formik.errors.hairColour}
          required
        />
        <FormControl sx={{ color: 'white' }}>
          <FormLabel
            id='demo-controlled-radio-buttons-group'
            sx={{
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Student
          </FormLabel>
          <RadioGroup
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='controlled-radio-buttons-group'
            onChange={handleInputChange}
          >
            <FormControlLabel
              value={true}
              control={
                <Radio
                  sx={{
                    color: 'white',
                  }}
                />
              }
              label='yes'
            />
            <FormControlLabel
              value={false}
              control={
                <Radio
                  sx={{
                    color: 'white',
                  }}
                />
              }
              label='no'
            />
          </RadioGroup>
        </FormControl>
        <TextField
          id='outlined-basic'
          name='patronus'
          label='patronus'
          variant='outlined'
          onChange={handleInputChange}
          value={formik.values.patronus}
          error={formik.touched.patronus && Boolean(formik.errors.patronus)}
          helperText={formik.touched.patronus && formik.errors.patronus}
          required
        />
        <TextField
          id='outlined-basic'
          name='eyeColour'
          label='eye colour'
          variant='outlined'
          onChange={handleInputChange}
          value={formik.values.eyeColour}
          error={formik.touched.eyeColour && Boolean(formik.errors.eyeColour)}
          helperText={formik.touched.eyeColour && formik.errors.eyeColour}
          required
        />
        <FormControl sx={{ color: 'white' }}>
          <FormLabel
            id='demo-controlled-radio-buttons-group'
            sx={{
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Wizard
          </FormLabel>
          <RadioGroup
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='controlled-radio-buttons-group'
            onChange={handleInputChange}
            sx={{ display: 'flex', gap: '10px' }}
          >
            <FormControlLabel
              value={true}
              control={
                <Radio
                  sx={{
                    color: 'white',
                  }}
                />
              }
              label='yes'
            />
            <FormControlLabel
              value={false}
              control={
                <Radio
                  sx={{
                    color: 'white',
                  }}
                />
              }
              label='no'
            />
          </RadioGroup>
        </FormControl>
        <TextField
          type='date'
          id='outlined-basic'
          name='dateOfBirth'
          label='date of birth'
          variant='outlined'
          onChange={handleInputChange}
        />
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
            Add Hero
          </Typography>
        </Button>
      </Box>
      <Link href='/products' className='link'>
        to students
      </Link>
    </>
  );
}
