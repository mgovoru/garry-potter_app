'use client'
import CardHero from "./components/Card/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CardHero />
      </main>
    </div>
  );
}
