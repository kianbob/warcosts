import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import './globals.css'

const heading = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', display: 'swap' })
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'OpenWar — The Cost of American Empire', template: '%s | OpenWar' },
  description: 'Every US war, intervention, and military action — the cost in dollars, lives, and liberty. Data-driven analysis of American foreign policy.',
  metadataBase: new URL('https://www.openwar.us'),
  openGraph: {
    type: 'website',
    siteName: 'OpenWar',
    title: 'OpenWar — The Cost of American Empire',
    description: 'Every US war, intervention, and military action — the cost in dollars, lives, and liberty.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-[family-name:var(--font-body)] bg-stone-50 text-stone-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
