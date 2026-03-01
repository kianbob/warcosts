import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import './globals.css'

const heading = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', display: 'swap' })
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'WarCosts — The Price of American Empire', template: '%s | WarCosts' },
  description: 'Every US war, intervention, and military action — the cost in dollars, lives, and liberty. Data-driven analysis of American foreign policy.',
  metadataBase: new URL('https://www.warcosts.org'),
  openGraph: {
    type: 'website',
    siteName: 'WarCosts',
    title: 'WarCosts — The Cost of American Empire',
    description: 'Every US war, intervention, and military action — the cost in dollars, lives, and liberty.',
  },
  twitter: { card: 'summary_large_image' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'WarCosts',
  url: 'https://www.warcosts.org',
  description: 'Every US war, intervention, and military action — the cost in dollars, lives, and liberty.',
  publisher: {
    '@type': 'Organization',
    name: 'TheDataProject.ai',
    url: 'https://thedataproject.ai',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.warcosts.org/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-[family-name:var(--font-body)] bg-stone-50 text-stone-900 antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
