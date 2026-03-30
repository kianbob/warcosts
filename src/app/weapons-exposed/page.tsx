import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import WeaponsClient from './WeaponsClient'
import weaponsData from '../../../public/data/weapons-used-iran.json'

export const metadata: Metadata = {
  title: 'Weapons Exposed — Every Missile, Bomb & Drone Used in the Iran War | WarCosts',
  description: `${weaponsData.length} weapons systems profiled. Unit costs, quantities fired, manufacturers, and stock price changes. The US has fired $33B+ in weapons at Iran — here's every single one.`,
  openGraph: {
    title: 'Weapons Exposed — $33B+ in Missiles, Bombs & Drones Fired at Iran',
    description: `${weaponsData.length} weapons systems. Unit costs, quantities deployed, who profits. Each Tomahawk = 26 teacher salaries.`,
    url: 'https://warcosts.org/weapons-exposed',
    type: 'website',
    siteName: 'WarCosts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weapons Exposed — Every Weapon Used in the Iran War',
    description: `${weaponsData.length} weapons profiled. $33B+ fired. Each Tomahawk = 26 teacher salaries.`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Weapons Exposed — Every Weapon System Used in the Iran War',
  description: metadata.description,
  url: 'https://warcosts.org/weapons-exposed',
  publisher: {
    '@type': 'Organization',
    name: 'WarCosts',
    url: 'https://warcosts.org',
  },
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
}

export default function WeaponsExposedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-stone-950 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Breadcrumbs
            items={[{ label: 'Weapons Exposed' }]}
            dark
          />

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-amber-500 mb-3">
              🎯 Weapons Exposed
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl">
              Every major weapons system being used in the Iran war. Unit cost, how many fired,
              who manufactures them, and how much their stock went up.
            </p>
          </div>

          <ShareButtons title="Weapons Exposed — Every Weapon Used in the Iran War" />

          <WeaponsClient />
        </div>
      </div>
    </>
  )
}
