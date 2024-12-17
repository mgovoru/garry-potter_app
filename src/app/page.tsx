'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
        <Link href='/products' className='link'>
          <h1>
            Harry Potter Heroes <br /> Press me!
          </h1>
        </Link>
  );
}
