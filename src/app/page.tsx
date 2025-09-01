'use client';

import Link from 'next/link';
import { mainPageTexts } from './constants/texts';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-8 p-4 text-center'>
      <h1 className='text-4xl font-bold text-white'>{mainPageTexts.title}</h1>
      <p className='text-xl text-white max-w-2xl'>
        {mainPageTexts.description}
      </p>
      <Link
        href='/heroes'
        className='px-8 py-4 bg-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors duration-200'
      >
        {mainPageTexts.ctaButton}
      </Link>
    </div>
  );
}
