import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import IranWarBanner from '@/components/IranWarBanner'
import BackToTop from '@/components/BackToTop'
import './globals.css'

const heading = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', display: 'swap' })
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'How Much Has the US Spent on War? $8+ Trillion and Counting | WarCosts', template: '%s | WarCosts' },
  description: 'Track the true cost of every US military conflict from Iraq to Afghanistan. Explore $8+ trillion in war spending with interactive data and analysis.',
  metadataBase: new URL('https://www.warcosts.org'),
  openGraph: {
    type: 'website',
    siteName: 'WarCosts',
    title: 'How Much Has the US Spent on War? $8+ Trillion and Counting | WarCosts',
    description: 'Track the true cost of every US military conflict from Iraq to Afghanistan. Explore $8+ trillion in war spending with interactive data and analysis.',
  },
  twitter: { card: 'summary_large_image' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'WarCosts',
  url: 'https://www.warcosts.org',
  description: 'Track the true cost of every US military conflict from Iraq to Afghanistan. Explore $8+ trillion in war spending with interactive data and analysis.',
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7XG47GBJZ4" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-7XG47GBJZ4');` }} />
      </head>
      <body className="font-[family-name:var(--font-body)] bg-stone-50 text-stone-900 antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <IranWarBanner />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
