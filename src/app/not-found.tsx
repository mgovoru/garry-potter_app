'use client';

import Link from 'next/link';
import { notFoundTexts } from './constants/texts';

export default function Custom404() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4 p-4'>
      <h1 className='text-2xl font-bold text-white'>{notFoundTexts.title}</h1>
      <p className='text-white text-center max-w-md'>
        {notFoundTexts.description}
      </p>
      <Link
        href='/heroes'
        className='px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200'
      >
        {notFoundTexts.returnButton}
      </Link>
    </div>
  );
}
