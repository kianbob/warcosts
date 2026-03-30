import { Metadata } from 'next'
import LiveComparisonClient from './LiveComparisonClient'

const title = 'Iran War Cost vs. Domestic Spending — Live Counter | WarCosts'
const description = 'Watch the cost of the Iran war tick up in real-time alongside what that money could buy: school lunches, teacher salaries, homes, healthcare. $21,759 per second.'
const url = 'https://warcosts.org/iran-war-vs-spending'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: 'Iran War: $21,759/Second — What Else Could That Buy?',
    description,
    url,
    type: 'website',
    siteName: 'WarCosts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iran War: $21,759/Second — What Else Could That Buy?',
    description,
  },
  alternates: { canonical: url },
}

export default function IranWarVsSpendingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'WarCosts',
      url: 'https://warcosts.org',
    },
    mainEntity: {
      '@type': 'Dataset',
      name: 'Iran War Cost vs Domestic Spending Equivalents',
      description: 'Real-time comparison of Iran war expenditure against domestic spending alternatives',
      temporalCoverage: '2026-02-28/..',
      creator: { '@type': 'Organization', name: 'WarCosts' },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LiveComparisonClient />
    </>
  )
}
