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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { propsHero } from '@/app/types';

export default function CardHero(props: propsHero) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        // action={
        //   <IconButton aria-label='settings'>
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.hero.name}
        // subheader='September 14, 2016'
      />
      <CardMedia
        component='img'
        height='194'
        image={props.hero.image}
        alt='Paella dish'
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
