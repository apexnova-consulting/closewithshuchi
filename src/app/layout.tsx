import '@/styles/globals.css';
import { Inter, Poppins } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Close With Shuchi | Real Estate, Title & Notary Expert in New Jersey',
  description: 'Whether you\'re buying, selling, closing a deal, or notarizing documents — Shuchi Alam makes it seamless.',
  keywords: 'real estate, title insurance, notary public, New Jersey realtor, property closing',
  authors: [{ name: 'Shuchi Alam' }],
  metadataBase: new URL('https://www.closewithshuchi.com'),
  openGraph: {
    title: 'Close With Shuchi | Your All-In-One Real Estate Expert',
    description: 'Real Estate, Title Insurance and Notary Services in New Jersey',
    url: 'https://www.closewithshuchi.com',
    siteName: 'Close With Shuchi',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
} 