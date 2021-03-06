import Head from "next/head";

import styles from "@/styles/pages/index.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Themis App - Home</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to your new <strong className={styles.themis}>Themis</strong>{" "}
          project
        </h1>

        {data && (
          <div className={styles.serverSideContainer}>
            <h2 className={styles.serverSideTitle}>Server-side props:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}

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
export async function getServerSideProps(context) {
  // Change the status code to 4** or 5** to see the error page.
  const STATUS_CODE = 200;
  const res = await fetch(`https://mock.codes/${STATUS_CODE}`);
  const json = await res.json();
  const error = res.ok ? null : json;

  /* This will be passed to the page component as props.
   * If there is an error, it will be caught by the Error component. */
  return { props: { error, data: json } };
}
