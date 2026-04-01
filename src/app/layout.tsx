import { type Metadata } from 'next'
import { DM_Sans, Inter, Space_Grotesk } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import 'leaflet/dist/leaflet.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Google CodeLabs',
    default: 'Google CodeLabs',
  },
  description:
    "Una giornata dedicata all'integrazione di intelligenza artificiale generativa in JavaScript con Google Gemini. ",
  openGraph: {
    title: 'Google CodeLabs #1 - Gemini Workshop con Fabio Biondi e i GDG',
    description:
      "Una giornata dedicata all'integrazione di intelligenza artificiale generativa in JavaScript con Google Gemini.",
    url: 'https://codelabs.developers.google.com', // Assuming URL, user didn't specify.
    siteName: 'Google CodeLabs #1',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Google CodeLabs Gemini Workshop',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google CodeLabs #1 - Gemini Workshop con Fabio Biondi e i GDG',
    description:
      "Una giornata dedicata all'integrazione di intelligenza artificiale generativa in JavaScript con Google Gemini.",
    images: ['/opengraph-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="it"
      className={clsx(
        'h-full bg-black antialiased',
        inter.variable,
        dmSans.variable,
        spaceGrotesk.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
