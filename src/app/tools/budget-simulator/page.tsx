import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import BudgetSimClient from './BudgetSimClient'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"What Would You Cut?" — Defense Budget Simulator | WarCosts',
  description: 'You have $886 billion. Drag sliders to cut military spending and reallocate to education, healthcare, housing, climate, and more. See real equivalents — what your money could actually buy.',
  keywords: ['defense budget simulator', 'military spending', 'budget reallocation', 'what would you cut', 'military vs education spending', 'war costs budget tool'],
  openGraph: {
    title: '"What Would You Cut?" — Defense Budget Simulator',
    description: 'You have $886B in defense spending. Cut it. Reallocate it. See what America could afford instead.',
    url: 'https://warcosts.org/tools/budget-simulator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '"What Would You Cut?" — Defense Budget Simulator',
    description: 'You have $886B in defense spending. Cut it. Reallocate it. See what America could afford instead.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Defense Budget Simulator — What Would You Cut?',
  description: 'Interactive tool to reallocate the $886B US defense budget to domestic priorities like education, healthcare, and housing.',
  url: 'https://warcosts.org/tools/budget-simulator',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function BudgetSimulatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-stone-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }, { label: 'Budget Simulator' }]} dark />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
            What Would You <span className="text-red-500">Cut?</span>
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl">
            The US defense budget is <strong className="text-white">$886 billion</strong>.
            You control the sliders. Cut what you want, fund what matters, and see what America could actually afford.
          </p>
          <ShareButtons title="What Would You Cut? — Defense Budget Simulator" />
        </div>
      </section>

      {/* Interactive content */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <BudgetSimClient />

        {/* Related */}
        <div className="mt-12 bg-stone-50 rounded-lg p-6 border">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Tools</h3>
          <ul className="space-y-2">
            <li><Link href="/tools/tax-receipt" className="text-red-800 hover:underline">→ Your Military Tax Receipt — How much of YOUR taxes fund the military?</Link></li>
            <li><Link href="/tools/jobs-calculator" className="text-red-800 hover:underline">→ Jobs Calculator — Military vs civilian job creation</Link></li>
            <li><Link href="/tools/inflation-calculator" className="text-red-800 hover:underline">→ War Cost Inflation Calculator — What did past wars really cost?</Link></li>
            <li><Link href="/opportunity-cost" className="text-red-800 hover:underline">→ Opportunity Cost — What else your taxes could fund</Link></li>
          </ul>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
