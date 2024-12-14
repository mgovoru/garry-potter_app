'use client';
import { Fontdiner_Swanky, Montserrat } from 'next/font/google';
import './globals.css';
import { Provider } from 'react-redux';
import { store } from './store';

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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={ store }>
      <html lang='en'>
        <body className={`${swankyFont.variable} ${montserratFont.variable}`}>
          {children}
        </body>
      </html>
    </Provider>
  );
}
