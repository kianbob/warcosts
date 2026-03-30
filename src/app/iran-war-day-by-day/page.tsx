import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import DayByDayClient from './DayByDayClient'

export const metadata: Metadata = {
  title: 'Day by Day: The Iran War — 30 Days of Operation Epic Fury | WarCosts',
  description:
    'A scrollable day-by-day chronicle of the US war on Iran. February 28 – March 29, 2026. Every day, every dollar, every life lost. Cost, casualties, oil prices, and key events.',
  keywords: [
    'Iran war timeline',
    'Iran war day by day',
    'Operation Epic Fury timeline',
    'Iran war 2026 daily',
    'Iran war cost per day',
    'Iran war casualties daily',
    'Iran conflict chronicle',
    'US Iran war diary',
  ],
  openGraph: {
    title: 'Day by Day: 30 Days of the Iran War',
    description:
      'A daily chronicle of Operation Epic Fury. 3,461 killed. $114.8B spent. Oil at $116. Every day documented.',
    url: 'https://www.warcosts.org/iran-war-day-by-day',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day by Day: 30 Days of the Iran War',
    description: '3,461 killed. $114.8B spent. Oil at $116/barrel. A daily chronicle of Operation Epic Fury.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/iran-war-day-by-day',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Day by Day: The Iran War — 30 Days of Operation Epic Fury',
  description:
    'A scrollable day-by-day chronicle of the US war on Iran, February 28 – March 29, 2026.',
  url: 'https://www.warcosts.org/iran-war-day-by-day',
  datePublished: '2026-03-29',
  dateModified: '2026-03-30',
  publisher: {
    '@type': 'Organization',
    name: 'WarCosts',
    url: 'https://www.warcosts.org',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.warcosts.org/iran-war-day-by-day',
  },
  about: {
    '@type': 'Event',
    name: 'Operation Epic Fury',
    startDate: '2026-02-28',
    location: { '@type': 'Place', name: 'Iran' },
  },
}

export default function IranWarDayByDayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Iran War 2026', href: '/iran-war-2026' },
              { label: 'Day by Day' },
            ]}
          />
        </div>
        <DayByDayClient />
      </div>
    </>
  )
}
