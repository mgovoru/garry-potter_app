'use client';
import { Fontdiner_Swanky, Montserrat } from 'next/font/google';
import './globals.css';
import './page.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <html lang='en'>
          <body className={`${swankyFont.variable} ${montserratFont.variable}`}>
            {children}
          </body>
        </html>
      </Provider>
    </ThemeProvider>
  );
}
