'use client';
import React from 'react';
import { useEffect } from 'react';
import styles from './page.module.css';
import axios from 'axios';
import { setHeroes } from './heroesSlice';
import { Character } from './types';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getHeroes() {
      try {
        const response = await axios.get(
          'https://hp-api.onrender.com/api/characters'
        );
        dispatch(setHeroes(response.data.slice(0, 20) as Character[]));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getHeroes();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Link href='/products'>Harry Potter Heroes</Link>
        )}
      </main>
    </div>
  );
}
