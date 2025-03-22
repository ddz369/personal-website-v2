import Head from 'next/head';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Darvin Zhang Website</title>
        <meta
          name="description"
          content="Personal website of Darvin Zhang, a software engineer, full-stack developer, and web developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}
