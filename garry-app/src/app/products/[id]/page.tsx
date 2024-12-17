'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { notFound } from 'next/navigation';
import { useSelector } from 'react-redux';
import { Character, InitialStore } from '@/app/types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function PageCard({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  const heroes = useSelector((state: InitialStore) => state.heroes);

  if (!heroes.length) {
    return <div>Данные загружаются...</div>;
  }

  const dataHero = heroes.find((el) => el.id === id) as Character;

  if (!dataHero) {
    notFound();
  }

  return (
    <Card sx={{ maxWidth: 545, minWidth: 345, paddingTop: '20px' }} key={id}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='200'
          image={dataHero.image}
          alt={dataHero.name}
          sx={{
            objectFit: 'contain',
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{ fontFamily: 'var(--font-fontdiner-sans)' }}
          >
            {dataHero.name}
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Stack
                spacing={2}
                sx={{
                  '& > *': { fontFamily: 'var(--font-montserrat-sans)' },
                }}
              >
                <Item>
                  {'house: '}
                  {dataHero?.house || 'unknown'}
                </Item>
                <Item>
                  {'species: '}
                  {dataHero?.species || 'unknown'}
                </Item>
                <Item>
                  {'hair colour: '}
                  {dataHero?.hairColour || 'unknown'}
                </Item>
                <Item>
                  {'staff: '}
                  {dataHero?.hogwartsStaff || 'unknown'}
                </Item>
                <Item>
                  {'student: '}
                  {dataHero?.hogwartsStudent || 'unknown'}
                </Item>
                <Item>
                  {'patronus: '}
                  {dataHero?.patronus || 'unknown'}
                </Item>
                <Item>
                  {'eye colour: '}
                  {dataHero?.eyeColour || 'unknown'}
                </Item>
                <Item>
                  {'date of birth: '}
                  {dataHero?.dateOfBirth || 'unknown'}
                </Item>
                <Item>
                  {'wizard: '}
                  {dataHero?.wizard || 'unknown'}
                </Item>
                <Item>
                  {'wand wood: '}
                  {dataHero?.wand?.wood || 'unknown'}
                </Item>
                <Item>
                  {'wand core: '}
                  {dataHero?.wand?.core || 'unknown'}
                </Item>
                <Item>
                  {'wand length: '}
                  {dataHero?.wand?.length || 'unknown'}
                </Item>
              </Stack>
            </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href='/products'>to students</Link>
      </CardActions>
    </Card>
  );
}
