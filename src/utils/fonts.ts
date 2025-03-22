import { Work_Sans, Raleway } from 'next/font/google';

export const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
