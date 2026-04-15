import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'

import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Nama Sands Safari Reserve | Private Luxury Villa',
    template: '%s | Nama Sands',
  },
  description:
    'Nama Sands — a private luxury villa and conservation reserve in the Western Cape, South Africa. Experience untamed wilderness and private luxury.',

  // ✅ ADD THIS BLOCK
  verification: {
    google: '9ps_L5MjTdH4AxOcAkzZLmzD5mKNcSC3YuQndI7ogjw',
  },

  keywords: [
    'luxury villa',
    'safari reserve',
    'Western Cape',
    'South Africa',
    'private villa',
    'conservation reserve',
    'wildlife',
    'nature escape',
    'luxury accommodation',
    'Hopefield',
  ],
  authors: [{ name: 'Nama Sands' }],
  creator: 'Nama Sands',
  publisher: 'Nama Sands',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://namasands.co.za'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nama Sands Safari Reserve | Private Luxury Villa',
    description:
      'Experience untamed wilderness and private luxury at Nama Sands, a private villa in the Western Cape.',
    url: 'https://namasands.co.za',
    siteName: 'Nama Sands',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nama Sands Safari Reserve',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nama Sands Safari Reserve | Private Luxury Villa',
    description:
      'Experience untamed wilderness and private luxury at Nama Sands, a private villa in the Western Cape.',
    images: ['/images/og-image.jpg'],
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
}

export const viewport: Viewport = {
  themeColor: '#3d3424',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  )
}