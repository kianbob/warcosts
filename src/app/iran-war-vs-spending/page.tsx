import { Metadata } from 'next'
import LiveComparisonClient from './LiveComparisonClient'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'

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
      <FaqJsonLd faqs={[
        { q: 'How much does the Iran War cost per second?', a: 'The Iran War costs approximately $21,759 per second based on total expenditure divided by elapsed time. This rate includes direct military operations, munitions, fuel, personnel costs, and logistics.' },
        { q: 'What could Iran War spending buy instead?', a: 'Every second of Iran War spending ($21,759) could fund: one year of school lunches for 7 children, half a teacher\'s annual salary, or 87 meals at a food bank. Every hour could fund a community health clinic for a year.' },
        { q: 'How much has the Iran War 2026 cost in total?', a: 'As of the peace deal signing on June 14, 2026, the Iran War cost over $42 billion in direct military spending over 108 days of operations. Long-term costs including veteran care and interest on debt will significantly exceed this figure.' },
      ]} />
      <ShareButtons title="Iran War Cost vs. Domestic Spending" />
      <LiveComparisonClient />
    </>
  )
}
