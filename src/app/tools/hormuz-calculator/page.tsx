import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import HormuzClient from './HormuzClient'

export const metadata: Metadata = {
  title: 'Strait of Hormuz Economic Impact Calculator — What Happens If Hormuz Closes?',
  description: 'Calculate the global economic impact of a Strait of Hormuz closure. See projected oil prices, GDP losses, gas price spikes, and shipping cost increases day by day.',
  keywords: ['strait of hormuz calculator', 'hormuz oil impact', 'hormuz closure economic impact', 'oil price strait of hormuz', 'iran war oil prices'],
  alternates: { canonical: 'https://www.warcosts.org/tools/hormuz-calculator' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Strait of Hormuz Economic Impact Calculator',
  url: 'https://www.warcosts.org/tools/hormuz-calculator',
  description: 'Calculate the global economic impact if the Strait of Hormuz is closed. Projected oil prices, GDP loss, and gas price increases.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function HormuzCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }, { label: 'Hormuz Calculator' }]} />

      <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10 text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
          Strait of Hormuz <span className="text-red-400">Economic Impact</span> Calculator
        </h1>
        <p className="text-stone-300 text-lg max-w-2xl mx-auto">
          20% of the world&apos;s oil — 21 million barrels per day — flows through the Strait of Hormuz.
          What happens to the global economy if Iran shuts it down?
        </p>
        <ShareButtons title="Strait of Hormuz Economic Impact Calculator — WarCosts" />
      </div>

      <HormuzClient />

      <div className="mt-12 prose max-w-2xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Methodology</h2>
        <p>
          This calculator uses conservative estimates based on publicly available data. Approximately 21 million
          barrels of oil transit the Strait of Hormuz daily — roughly 20% of global supply. Pre-war oil prices
          were approximately $60/barrel; they surged to $108 after the Iran conflict began.
        </p>
        <p>
          The GDP loss estimate of $3.5 billion per day is a midpoint of the $2–5 billion range cited by
          energy economists. Oil price projections assume approximately $0.50 per barrel increase per day of
          closure, and US gas prices rise roughly $0.02 per gallon per day. Actual impacts would depend on
          strategic reserves, alternative routes, and market panic factors.
        </p>
      </div>

      <BackToTop />
    </div>
  )
}
