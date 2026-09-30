import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Noto_Sans_Gurmukhi } from 'next/font/google'
import { biodata } from '@/lib/biodata'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
})
const gurmukhi = Noto_Sans_Gurmukhi({
  subsets: ['gurmukhi'],
  weight: ['400', '600'],
  variable: '--font-gurmukhi',
})

export const metadata: Metadata = {
  title: `${biodata.name} | Marriage Biodata`,
  description: `Marriage biodata of ${biodata.name} - ${biodata.tagline}.`,
  generator: 'v0.app',
  openGraph: {
    title: `${biodata.name} | Marriage Biodata`,
    description: biodata.tagline,
    images: ['/images/portrait.png'],
  },
  robots: { index: false, follow: false },
}

export const viewport: Viewport = {
  themeColor: '#f7f3ea',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${gurmukhi.variable}`}
    >
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
