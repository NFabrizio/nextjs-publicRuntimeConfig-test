import getConfig from 'next/config';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const { publicRuntimeConfig = {} } = getConfig();

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>publicRuntimeConfig Test</title>
        <meta name="description" content="publicRuntimeConfig Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js publicRuntimeConfig Test
        </h1>

        <h2>publicRuntimeConfig.env value = {publicRuntimeConfig.env}</h2>
      </main>
    </div>
  )
}
