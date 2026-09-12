import type { Metadata } from 'next';
import './globals.css';
import { businessInfo } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Revive Holistic Wellness Centre | Physiotherapy in Najafgarh, Delhi',
  description: 'Revive Holistic Wellness Centre in Najafgarh, South-West Delhi offers personalized physiotherapy, rehabilitation, sports therapy, chiropractic care, acupressure, cupping therapy and holistic wellness services.',
  metadataBase: new URL(businessInfo.domain),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'physiotherapist in Najafgarh',
    'physiotherapy clinic Najafgarh',
    'physiotherapy in Najafgarh',
    'sports rehabilitation Najafgarh',
    'orthopedic rehabilitation Najafgarh',
    'physiotherapy clinic South West Delhi',
    'acupressure therapy Najafgarh',
    'cupping therapy Najafgarh',
    'chiropractic care Najafgarh',
    'holistic wellness centre Delhi',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: businessInfo.domain,
    title: 'Revive Holistic Wellness Centre | Physiotherapy in Najafgarh, Delhi',
    description: 'Personalized physiotherapy, rehabilitation, and holistic wellness services in Najafgarh, South-West Delhi.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Revive Holistic Wellness Centre',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revive Holistic Wellness Centre | Physiotherapy in Najafgarh, Delhi',
    description: 'Personalized physiotherapy, rehabilitation, and holistic wellness services in Najafgarh, South-West Delhi.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  verification: {
    google: '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f5c107" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className="bg-white text-dark-900">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
