'use client';

import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <p className='textWhite'>
        The requested page has slipped away. Perhaps it has moved or there is a
        typo in the address. I suggest you return to the main page.
      </p>
      <Link href='/products' className='link'>
        to students
      </Link>
    </>
  );
}
