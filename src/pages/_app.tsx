import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { workSans, raleway } from '@/utils/fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/Background';
import dynamic from 'next/dynamic';
import { LoadingProvider } from '@/utils/loadingContext';

const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <main
        className={`${workSans.variable} ${raleway.variable} min-h-screen relative overflow-x-hidden w-full`}
      >
        <LoadingScreen minimumLoadingTime={1500} />
        <Background />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </LoadingProvider>
  );
}
