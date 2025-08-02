import '@/styles/globals.css';
import { Playfair_Display, Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'Close With Shuchi | Real Estate, Title & Notary Expert in New Jersey',
    template: '%s | Close With Shuchi',
  },
  description: 'Whether you\'re buying, selling, closing a deal, or notarizing documents — Shuchi Alam makes it seamless.',
  keywords: 'real estate agent, title insurance producer, notary public, New Jersey realtor, property closing, NJ real estate services',
  authors: [{ name: 'Shuchi Alam' }],
  metadataBase: new URL('https://www.closewithshuchi.com'),
  openGraph: {
    title: 'Close With Shuchi | Your All-In-One Real Estate Expert',
    description: 'Real Estate, Title Insurance and Notary Services in New Jersey',
    url: 'https://www.closewithshuchi.com',
    siteName: 'Close With Shuchi',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/shuchi-portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Shuchi Alam - NJ Real Estate, Title & Notary Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Close With Shuchi | Real Estate, Title & Notary Expert in NJ',
    description: 'Your trusted partner for real estate, title insurance, and notary services in New Jersey.',
    images: ['/images/shuchi-portrait.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
} 