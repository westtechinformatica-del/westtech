import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import { Toaster } from 'sonner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://westtech.com.ar'),
  title: {
    default: 'Westtech | Tecnología Premium en Argentina',
    template: '%s | Westtech',
  },
  description:
    'Tienda de tecnología en Argentina. Notebooks, iPads, TV Boxes, proyectores y accesorios. Los mejores precios con envío a todo el país.',
  keywords: [
    'tecnología argentina',
    'notebooks',
    'iPads',
    'TV boxes',
    'proyectores',
    'electrónica',
    'westtech',
    'comprar tecnología',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://westtech.com.ar',
    siteName: 'Westtech',
    title: 'Westtech | Tecnología Premium en Argentina',
    description: 'Notebooks, iPads, TV Boxes, proyectores y accesorios al mejor precio.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Westtech - Tecnología Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Westtech | Tecnología Premium en Argentina',
    description: 'Notebooks, iPads, TV Boxes y más. Envíos a todo el país.',
    images: ['/og-image.jpg'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
