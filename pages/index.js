import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Themis App</title>
        <meta name="description" content="Generated by Themis app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to your new <strong className={styles.themis}>Themis</strong>{" "}
          project
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <span>Fabricio Borgobello</span>
      </footer>
    </div>
  );
}