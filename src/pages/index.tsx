import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Website</title>
        <meta name="description" content="A minimal personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Hello World</h1>
        <p className="text-xl">Welcome to my minimal website</p>
      </main>
    </>
  );
}
