import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import WarMapClient from './WarMapClient'

export const metadata: Metadata = {
  title: 'Global War Map — Interactive Map of U.S. Military Operations Worldwide',
  description: 'Interactive map showing all current U.S. military operations, 750+ overseas bases, carrier strike groups, and covert operations across the globe. 6 active wars, 170,000+ troops deployed, $886B annual budget.',
  openGraph: {
    title: 'Global War Map — Every U.S. Military Operation on One Map',
    description: 'Interactive map of America\'s global military footprint: active combat zones, 750+ bases in 80+ countries, naval deployments, and covert operations. See where your tax dollars go.',
    url: 'https://www.warcosts.org/war-map',
    siteName: 'WarCosts',
    type: 'website',
  },
  alternates: { canonical: 'https://www.warcosts.org/war-map' },
  twitter: {
    card: 'summary_large_image',
    title: 'Global War Map — Every U.S. Military Operation Worldwide',
    description: '6 active wars. 750+ bases. 170,000+ troops. $886B budget. See it all on one interactive map.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Global War Map — U.S. Military Operations Worldwide',
  description: 'Interactive map showing all current U.S. military operations, bases, naval deployments, and covert operations globally.',
  url: 'https://www.warcosts.org/war-map',
  isPartOf: { '@type': 'WebSite', name: 'WarCosts', url: 'https://www.warcosts.org' },
  about: {
    '@type': 'Thing',
    name: 'United States military operations',
    description: 'Active combat zones, overseas military bases, naval deployments, and covert operations conducted by the U.S. military worldwide.',
  },
}

export default function WarMapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-stone-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Breadcrumbs items={[{ label: 'Global War Map' }]} dark />
          <BreadcrumbSchema items={[{ label: 'Global War Map', href: '/war-map' }]} />
        </div>
        <WarMapClient />
      </div>
    </>
  )
}
