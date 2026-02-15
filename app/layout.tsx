import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'

import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
1
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
  title: 'Nama Sands | Wild Horizons. Private Luxury.',
  description:
    'Nama Sands — a private luxury villa and conservation reserve in the Western Cape, South Africa. Experience untamed wilderness and private luxury.',
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
      <Navigation />
      <body className="font-sans antialiased">{children}</body>
      <Footer />
    </html>
  )
}
