import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import InflationClient from './InflationClient'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'War Cost Inflation Calculator — What Did Past Wars Really Cost? | WarCosts',
  description: 'See every US war\'s cost in 2026 inflation-adjusted dollars. The Revolutionary War, Civil War, WWI, WWII, Vietnam, Iraq, Afghanistan — what they really cost in today\'s money.',
  keywords: ['war cost inflation', 'war costs adjusted for inflation', 'how much did WWII cost', 'vietnam war cost today', 'US war spending history', 'military inflation calculator'],
  openGraph: {
    title: 'War Cost Inflation Calculator — What Did Past Wars Really Cost?',
    description: 'From the Revolution to Iran: every US war\'s true cost in 2026 dollars.',
    url: 'https://warcosts.org/tools/inflation-calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'War Cost Inflation Calculator',
    description: 'From the Revolution to Iran: every US war\'s true cost in 2026 dollars.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'War Cost Inflation Calculator',
  description: 'Calculate any US war\'s cost in 2026 inflation-adjusted dollars. Compare all wars side by side.',
  url: 'https://warcosts.org/tools/inflation-calculator',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function InflationCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-stone-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }, { label: 'Inflation Calculator' }]} dark />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
            What Did Past Wars <span className="text-red-500">Really Cost?</span>
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl">
            War costs are always quoted in the dollars of their era. Adjusted for inflation, the numbers are staggering.
            See every US war in <strong className="text-white">2026 dollars</strong>.
          </p>
          <ShareButtons title="War Cost Inflation Calculator — What did past wars really cost?" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <InflationClient />

        <div className="mt-12 bg-stone-50 rounded-lg p-6 border">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Tools</h3>
          <ul className="space-y-2">
            <li><Link href="/tools/budget-simulator" className="text-red-800 hover:underline">→ Budget Simulator — Reallocate the defense budget yourself</Link></li>
            <li><Link href="/tools/cost-calculator" className="text-red-800 hover:underline">→ Personal War Cost — Your lifetime military spending</Link></li>
            <li><Link href="/tools/war-quiz-hard" className="text-red-800 hover:underline">→ Advanced War Quiz — Test your knowledge</Link></li>
          </ul>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
