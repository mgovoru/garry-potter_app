'use client';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { Character, InitialStore, propsHero } from '@/app/types';
import Image from 'next/image';
import { useEffect } from 'react';
import {
  addFavoriteHero,
  editHero,
  removeFavoriteHero,
  removeHero,
} from '@/app/heroesSlice';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Drawer } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import FormFields from '../Form/FormFields';
import { useFormik } from 'formik';
import { validationSchema } from '../Form/validation';
import {
  cardTexts,
  formTexts,
  statusTexts,
  genderTexts,
} from '@/app/constants/texts';

export default function CardHero(props: propsHero) {
  const [color, setColor] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const [colorIcon, setColorIcon] = React.useState(false);

  const [imageSrc, setimageSrc] = React.useState('/');

  const stateFavorite = useSelector(
    (state: InitialStore) => state.heroes.favorite
  );

  const dispatch = useDispatch();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const openDrawer = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    toggleDrawer(true)();
  };
  const closeDrawer = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    toggleDrawer(false)();
  };
  const formik = useFormik({
    initialValues: {
      image: props.hero.image || 'no',
      name: props.hero.name || 'unknown',
      species: props.hero.species || 'unknown',
      house: props.hero.house || 'unknown',
      hairColour: props.hero.hairColour || 'unknown',
      patronus: props.hero.patronus || 'unknown',
      eyeColour: props.hero.eyeColour || 'unknown',
      dateOfBirth: props.hero.dateOfBirth || '2000-01-01',
      hogwartsStudent: props.hero.hogwartsStudent,
      wizard: props.hero.wizard,
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      console.log(formDataHero);
      editHeroBase();
    },
  });

  const heroes = useSelector((state: InitialStore) => state.heroes.heroes);

  const dataHero = heroes.find((el) => el.id === props.hero.id) as Character;

  const [formDataHero, setFormDataHero] = useState(dataHero);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    formik.handleChange(event);
    const { name, value } = event.target;

    setFormDataHero({
      ...formDataHero,
      [name]: value,
    });
  };

  const editHeroBase = () => {
    dispatch(editHero(formDataHero));
  };

  const DrawerList = (
    <Box
      role='presentation'
      component='form'
      sx={{
        padding: '24px 16px 16px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: 355,
        '& .MuiInputBase-input': {
          borderBottom: '1px solid black',
          boxShadow: '0 2px 3px rgba(0, 0, 0)',
          fontSize: '14px',
          color: 'black',
          fontFamily: 'var(--font-montserrat-sans) !important',
        },
        '& .MuiInputLabel-root': {
          color: 'green !important',
          textShadow: '1px 1px black',
          fontSize: '18px',
          fontFamily: 'var(--font-montserrat-sans)',
        },
        '& .MuiOutlinedInput-root fieldset': {
          border: 'none',
        },
      }}
      noValidate
      autoComplete='off'
      onSubmit={formik.handleSubmit}
    >
      <FormFields
        values={dataHero}
        onInputChange={handleInputChange}
        onBlur={formik.handleBlur}
        formik={formik}
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
          {'Edit Hero'}
        </Typography>
      </Button>
    </Box>
  );

  const addRemoveFavorite = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    if (stateFavorite.includes(props.hero.id)) {
      dispatch(removeFavoriteHero(props.hero.id));
      setColorIcon(false);
    } else {
      dispatch(addFavoriteHero(props.hero.id));
      setColorIcon(true);
    }
  };

  const heroRemove = (event: React.MouseEvent) => {
    event?.preventDefault();
    dispatch(removeHero(props.hero.id));
  };

  useEffect(() => {
    function colorSrc(str: string) {
      switch (str) {
        case 'Gryffindor':
          setColor('red');
          setimageSrc('./gryffindor.svg');
          break;
        case 'Hufflepuff':
          setColor('yellow');
          setimageSrc('./hufflepuff.svg');
          break;
        case 'Ravenclaw':
          setColor('blue');
          setimageSrc('./ravenclaw.svg');
          break;
        case 'Slytherin':
          setColor('green');
          setimageSrc('./slytherin.svg');
          break;
        default:
          setColor('white');
          setimageSrc('./hogwarts.svg');
          break;
      }
    }
    colorSrc(props.hero.house);
    setColorIcon(!stateFavorite.includes(props.hero.id) ? false : true);
  }, [props.hero.house, props.hero.id, stateFavorite]);

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: '#1a1a1a',
        color: 'white',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.2s ease-in-out',
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: color }}
            aria-label='recipe'
            src={props.hero.image}
          />
        }
        title={props.hero.name}
        subheader={props.hero.species}
      />
      <CardMedia
        component='img'
        height='194'
        image={imageSrc}
        alt={props.hero.name}
        onError={() => setimageSrc('/error-image.jpg')}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {cardTexts.status}:{' '}
          {statusTexts[props.hero.status as keyof typeof statusTexts]}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {formTexts.gender}:{' '}
          {genderTexts[props.hero.gender as keyof typeof genderTexts]}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {formTexts.origin}: {props.hero.origin?.name || 'Неизвестно'}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {formTexts.location}: {props.hero.location?.name || 'Неизвестно'}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {formTexts.house}: {props.hero.house || 'Неизвестно'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label='add to favorites'
          onClick={addRemoveFavorite}
          sx={{ color: colorIcon ? 'red' : 'white' }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton
          aria-label='edit'
          onClick={openDrawer}
          sx={{ color: 'white' }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label='delete'
          onClick={heroRemove}
          sx={{ color: 'white' }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
      <Drawer
        anchor='right'
        open={open}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            backgroundColor: '#1a1a1a',
            color: 'white',
            width: '100%',
            maxWidth: '400px',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant='h6' sx={{ mb: 2, color: 'white' }}>
            {formTexts.title}
          </Typography>
          <FormFields
            values={dataHero}
            onInputChange={handleInputChange}
            onBlur={formik.handleBlur}
            formik={formik}
          />
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button
              variant='contained'
              onClick={formik.handleSubmit}
              sx={{ bgcolor: '#6b46c1', '&:hover': { bgcolor: '#553c9a' } }}
            >
              {formTexts.saveButton}
            </Button>
            <Button
              variant='outlined'
              onClick={closeDrawer}
              sx={{ color: 'white', borderColor: 'white' }}
            >
              {formTexts.cancelButton}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Card>
  );
}
