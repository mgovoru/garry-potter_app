'use client';
import * as React from 'react';
// import { styled } from '@mui/material/styles';
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
import { propsHero } from '@/app/types';
import Image from 'next/image';
import { useEffect } from 'react';

export default function CardHero(props: propsHero) {
	const [color, setColor] = React.useState('');

	const [imageSrc, setimageSrc] = React.useState('');

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
					break;
			}
		}
		colorSrc(props.hero.house);
	});	

  return (
    <Card sx={{ maxWidth: 345, fontFamily: 'var(--font-fontdiner-sans)' }}>
      <CardHeader
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
        sx={{
          fontFamily: 'var(--font-fontdiner-sans)',
        }}
      />
      <CardMedia
        component='img'
        height='194'
        image={props.hero.image}
        alt={props.hero.name}
        sx={{
          objectFit: 'contain',
        }}
      />
      <CardContent>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {props.hero.patronus}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
