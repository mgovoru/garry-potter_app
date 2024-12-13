'use client'
import { useEffect } from "react";
import CardHero from "./components/Card/page";
import styles from "./page.module.css";
import axios from "axios";
import { store } from "./store";
import { addheroes } from "./heroesSlice";
import { Character } from "./types";
import React from "react";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    async function getHeroes() {
      try {
        const response = await axios.get('https://hp-api.onrender.com/api/characters');
        store.dispatch(addheroes(response.data.slice(0, 20) as Character[]));
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
        <div className={styles.container}>
          {!loading && store.getState().map((hero) => { return <CardHero hero={hero} key={hero.id} /> })}
          </div>
      </main>
    </div>
  );
}
