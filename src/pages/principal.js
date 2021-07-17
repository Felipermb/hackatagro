import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Otimaplica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>Logado</main>
    </div>
  );
}
