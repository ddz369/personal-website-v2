import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { workSans, raleway } from '@/utils/fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${workSans.variable} ${raleway.variable}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
