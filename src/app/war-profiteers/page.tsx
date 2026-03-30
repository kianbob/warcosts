import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProfiteersClient from './ProfiteersClient'
import data from '../../../public/data/war-profiteers.json'

export const metadata: Metadata = {
  title: 'War Profiteers Stock Tracker — Who\'s Getting Rich from the Iran War | WarCosts',
  description: `Defense stocks surged ${data.summary.defenseIndexChange}% while the S&P 500 dropped ${Math.abs(data.summary.sp500Change)}% since the Iran War began. $${Math.round(data.summary.totalMarketCapGain / 1e9)}B+ in market cap gained. Track who profits from war.`,
  alternates: { canonical: 'https://www.warcosts.org/war-profiteers' },
  openGraph: {
    title: 'War Is Good Business — Defense Stocks Up 30% Since Iran War',
    description: `$258B+ in market cap gained. 15 defense contractors tracked. CEO compensation exposed. The military-industrial complex is having a great war.`,
    url: 'https://www.warcosts.org/war-profiteers',
    type: 'article',
    siteName: 'WarCosts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'War Profiteers: Defense Stocks +30%, S&P 500 -8%',
    description: '$258B in market cap gained in 30 days of war. Track which companies profit from the Iran conflict.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'War Profiteers Stock Tracker — Who\'s Getting Rich from the Iran War',
  description: metadata.description,
  url: 'https://www.warcosts.org/war-profiteers',
  datePublished: '2026-03-29',
  dateModified: data.meta.lastUpdated,
  author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.warcosts.org' },
    { '@type': 'ListItem', position: 2, name: 'War Profiteers', item: 'https://www.warcosts.org/war-profiteers' },
  ],
}

export default function WarProfiteersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <section className="bg-stone-950 border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
          <Breadcrumbs items={[{ label: 'War Profiteers' }]} dark />
          <p className="text-green-400 font-mono text-sm tracking-widest uppercase mb-4">
            Defense Sector +{data.summary.defenseIndexChange}% &nbsp;|&nbsp; S&P 500 {data.summary.sp500Change}%
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            War Is Good <span className="text-green-400">Business</span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Since the Iran War began on February 28, 2026, defense contractor stocks have surged
            an average of <span className="text-green-400 font-bold">+{data.summary.defenseIndexChange}%</span> while
            the S&P 500 has fallen <span className="text-red-400 font-bold">{data.summary.sp500Change}%</span>.
            Over <span className="text-green-400 font-bold">${Math.round(data.summary.totalMarketCapGain / 1e9)}B</span> in
            shareholder value created. In {data.summary.daysOfWar} days.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-stone-900 border border-stone-700 rounded-lg p-4">
              <div className="text-green-400 text-2xl md:text-3xl font-black">${Math.round(data.summary.totalMarketCapGain / 1e9)}B+</div>
              <div className="text-stone-500 text-xs mt-1">Market Cap Gained</div>
            </div>
            <div className="bg-stone-900 border border-stone-700 rounded-lg p-4">
              <div className="text-green-400 text-2xl md:text-3xl font-black">+{data.summary.defenseIndexChange}%</div>
              <div className="text-stone-500 text-xs mt-1">Defense Index</div>
            </div>
            <div className="bg-stone-900 border border-stone-700 rounded-lg p-4">
              <div className="text-red-400 text-2xl md:text-3xl font-black">{data.summary.sp500Change}%</div>
              <div className="text-stone-500 text-xs mt-1">S&P 500</div>
            </div>
            <div className="bg-stone-900 border border-stone-700 rounded-lg p-4">
              <div className="text-red-400 text-2xl md:text-3xl font-black">{data.summary.congressMembersWithHoldings}</div>
              <div className="text-stone-500 text-xs mt-1">Congress Members w/ Holdings</div>
            </div>
          </div>
        </div>
      </section>

      <ProfiteersClient data={data} />
    </>
  )
}
