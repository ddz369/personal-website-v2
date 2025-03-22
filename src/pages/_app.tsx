import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { workSans, raleway } from '@/utils/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${workSans.variable} ${raleway.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
