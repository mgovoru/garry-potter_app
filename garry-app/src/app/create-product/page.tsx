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

const validationSchema = yup.object({
  image: yup.string().url('Please enter a valid URL')
  .required('This field is required'),
});



export default function CreateProduct() {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      image: '',
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
    image: ''
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
    <main className='main'>
      <div className='container'>
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
          />
          <TextField
            id='outlined-basic'
            name='image'
            label='url image'
            variant='outlined'
            value={formik.values.image}
            error={formik.touched.image && Boolean(formik.errors.image)}
            required
            onChange={handleInputChange}
            helperText={formik.touched.image && formik.errors.image}
          />
          <TextField
            id='outlined-basic'
            name='species'
            label='species'
            variant='outlined'
            onChange={handleInputChange}
          />
          <TextField
            id='outlined-basic'
            name='house'
            label='house'
            variant='outlined'
            onChange={handleInputChange}
          />
          <TextField
            id='outlined-basic'
            name='hairColour'
            label='hair colour'
            variant='outlined'
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
          />
          <TextField
            id='outlined-basic'
            name='eyeColour'
            label='eye colour'
            variant='outlined'
            onChange={handleInputChange}
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
          {/* <TextField
            id='outlined-basic'
            name='wandWood'
            label='wand wood'
            variant='outlined'
            onChange={handleInputChange}
          />
          <TextField
            id='outlined-basic'
            name='wandCore'
            label='wand core'
            variant='outlined'
            onChange={handleInputChange}
          />
          <TextField
            id='outlined-basic'
            name='wandLength'
            label='wand length'
            variant='outlined'
            onChange={handleInputChange}
          /> */}
          <Button
            type='submit'
            variant='contained'
            sx={{ backgroundColor: 'yellow', color: 'red' }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-fontdiner-sans)',
                fontSize: '18px',
                fontWeight: '600',
                color: 'red',
              }}
            >
              Add Hero
            </Typography>
          </Button>
        </Box>
        <Link href='/products'>to students</Link>
      </div>
    </main>
  );
}
