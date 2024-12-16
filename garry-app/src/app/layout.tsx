'use client';
import { Fontdiner_Swanky, Montserrat } from 'next/font/google';
import './globals.css';
import './page.scss';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useEffect } from 'react';
import { setHeroes } from './heroesSlice';
import { Character } from './types';

const swankyFont = Fontdiner_Swanky({
  variable: '--font-fontdiner-sans',
  subsets: ['latin'],
  weight: '400',
});

const montserratFont = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin'],
  weight: '600',
});

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'yellow',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'yellow',
          },
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          '& > *': {
            fontFamily: 'var(--font-montserrat-sans)',
          },
        },
      },
    },
  },
});

function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getHeroes() {
      try {
        const response = await axios.get(
          'https://hp-api.onrender.com/api/characters'
        );
        dispatch(setHeroes(response.data as Character[]));
      } catch (error) {
        console.error(error);
      }
    }
    getHeroes();
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <html lang='en'>
        <body className={`${swankyFont.variable} ${montserratFont.variable}`}>
          {' '}
          <main className='main'>
            <div className='container'>{children}</div>
          </main>
        </body>
      </html>
    </ThemeProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <InnerLayout>{children}</InnerLayout>
    </Provider>
  );
}
