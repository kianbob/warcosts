import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import DayByDayClient from './DayByDayClient'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'

export const metadata: Metadata = {
  title: 'Day by Day: The Iran War — 108 Days of Operation Epic Fury | WarCosts',
  description:
    'A scrollable day-by-day chronicle of the US war on Iran. February 28 – June 14, 2026. 108 days from first bombs to peace deal. $42B+ spent. 3,461+ killed in Iran. Every day documented.',
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
    title: 'Day by Day: 108 Days of the Iran War — Peace Deal Signed',
    description:
      'A daily chronicle of Operation Epic Fury. Feb 28 – Jun 14, 2026. $42B+ spent. 3,461+ killed in Iran. 15 US KIA. Peace deal signed Day 108.',
    url: 'https://www.warcosts.org/iran-war-day-by-day',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day by Day: 108 Days of the Iran War — Peace Deal Signed',
    description: '$42B+ spent. 3,461+ killed in Iran. 15 US KIA. Feb 28 – Jun 14, 2026. A daily chronicle of Operation Epic Fury.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/iran-war-day-by-day',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Day by Day: The Iran War — 108 Days of Operation Epic Fury',
  description:
    'A scrollable day-by-day chronicle of the US war on Iran, February 28 – June 14, 2026. From first bombs to peace deal.',
  url: 'https://www.warcosts.org/iran-war-day-by-day',
  datePublished: '2026-03-29',
  dateModified: '2026-07-10',
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
      <FaqJsonLd faqs={[
        { q: 'How long did the Iran War last?', a: 'The Iran War (Operation Epic Fury) lasted 108 days, from February 28 to June 14, 2026, when a peace deal was signed. The conflict began with US air and missile strikes on Iranian nuclear and military facilities.' },
        { q: 'How much did the Iran War cost?', a: 'The Iran War cost over $42 billion in direct military spending over 108 days. This does not include long-term costs like veteran care, equipment replacement, or economic disruption from oil market volatility.' },
        { q: 'How many casualties occurred in the Iran War?', a: 'Over the 108 days of Operation Epic Fury, 3,461+ people were killed in Iran (military and civilian) and 15 US service members were killed in action. Actual casualty figures may be higher due to limited access and reporting restrictions.' },
        { q: 'What was Operation Epic Fury?', a: 'Operation Epic Fury was the US military codename for the 2026 war against Iran. It began February 28, 2026, with strikes on Iranian nuclear facilities and military infrastructure, and concluded with a peace deal signed June 14, 2026.' },
      ]} />
      <div className="min-h-screen bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <Breadcrumbs
            items={[
              
              { label: 'Iran War 2026', href: '/iran-war-2026' },
              { label: 'Day by Day' },
            ]}
          />
          <ShareButtons title="Day by Day: The Iran War" />
        </div>
        <DayByDayClient />
      </div>
    </>
  )
}
