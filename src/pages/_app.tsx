import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { workSans, raleway } from '@/utils/fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/Background';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${workSans.variable} ${raleway.variable} min-h-screen relative`}>
      <Background />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
