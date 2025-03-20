import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Personal Website v2',
  description:
    'A modern, statically generated personal website built with Next.js and Tailwind CSS',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Static Site'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Personal Website v2',
    description:
      'A modern, statically generated personal website built with Next.js and Tailwind CSS',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
