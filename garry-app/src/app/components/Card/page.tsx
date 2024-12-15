'use client';
import React from 'react';
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
import { InitialStore, propsHero } from '@/app/types';
import Image from 'next/image';
import { useEffect } from 'react';
import {
  addFavoriteHero,
  removeFavoriteHero,
  removeHero,
} from '@/app/heroesSlice';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

export default function CardHero(props: propsHero) {
  const [color, setColor] = React.useState('');

  const [colorIcon, setColorIcon] = React.useState(false);

  const [imageSrc, setimageSrc] = React.useState('/');

  const stateFavorite = useSelector((state: InitialStore) => state.favorite);

  const dispatch = useDispatch();

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

  const heroRemove = () => {
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
  });

  return (
    <Link href={`/products/${props.hero.id}`} passHref legacyBehavior>
      <Card sx={{ width: 345 }} component='a'>
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
          image={props.hero.image}
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
        </CardActions>
      </Card>
    </Link>
  );
}
