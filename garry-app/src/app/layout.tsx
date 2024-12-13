'use client'
// import type { Metadata } from "next";
import { Fontdiner_Swanky } from 'next/font/google';
import "./globals.css";
import { Provider } from 'react-redux';
import { store } from './store';

const swankyFont = Fontdiner_Swanky({
  variable: '--font-fontdiner-sans',
  subsets: ['latin'],
  weight: '400',
});

// const metadata: Metadata = {
//   title: 'Garry Potter App',
//   description: 'Encyclopedia of book heroes Garry Potter',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${swankyFont.variable}`}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
