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

export default function CardHero(props: propsHero) {
  const [color, setColor] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const [colorIcon, setColorIcon] = React.useState(false);

  const [imageSrc, setimageSrc] = React.useState('/');

  const stateFavorite = useSelector((state: InitialStore) => state.favorite);

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

  const heroes = useSelector((state: InitialStore) => state.heroes);

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
    <Card sx={{ width: 345 }}>
      <Link href={`/heroes/${props.hero.id}`} passHref legacyBehavior>
        <div className='linkcontent'>
          <CardHeader
            sx={{
              fontFamily: 'var(--font-fontdiner-sans)',
              height: `90px`,
            }}
            avatar={
              <Avatar sx={{ bgcolor: color }} aria-label='faculty'>
                <Image
                  src={imageSrc as string}
                  alt='faculty'
                  width={35}
                  height={35}
                />
              </Avatar>
            }
            title={props.hero.name}
            titleTypographyProps={{
              sx: {
                fontFamily: 'var(--font-fontdiner-sans)',
                fontSize: '24px',
              },
            }}
          />
          <CardMedia
            component='img'
            height='194'
            image={props.hero.image ? props.hero.image : '/flag.jpg'}
            alt={props.hero.name}
            sx={{
              objectFit: 'contain',
              height: `200px`,
            }}
          />
          <CardContent>
            <Typography
              variant='body2'
              sx={{
                color: 'text.secondary',
                fontFamily: 'var(--font-montserrat-sans)',
                fontSize: '18px',
              }}
            >
              {`patronus:`} {props.hero.patronus || 'unknown'}
            </Typography>
          </CardContent>
        </div>
      </Link>
      <CardActions disableSpacing>
        <IconButton
          aria-label='add to favorites'
          onClick={addRemoveFavorite}
          sx={{ color: !colorIcon ? 'grey' : 'red' }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='delete' onClick={heroRemove}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={openDrawer} aria-label='edit'>
          <EditIcon />
        </IconButton>
        <Drawer open={open} onClose={closeDrawer}>
          {DrawerList}
        </Drawer>
      </CardActions>
    </Card>
  );
}
