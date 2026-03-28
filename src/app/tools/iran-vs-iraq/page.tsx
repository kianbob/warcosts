import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import CompareClient from './CompareClient'

export const metadata: Metadata = {
  title: 'Iran War vs Iraq War — Interactive Side-by-Side Comparison',
  description: 'Compare the Iran war and Iraq war side by side: costs, casualties, congressional votes, coalition sizes, oil prices, and public support. Interactive charts and data.',
  keywords: ['iran war vs iraq war comparison', 'iran iraq war comparison', 'iran war cost', 'iraq war cost comparison', 'iran war casualties'],
  alternates: { canonical: 'https://www.warcosts.org/tools/iran-vs-iraq' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Iran War vs Iraq War: Interactive Comparison',
  url: 'https://www.warcosts.org/tools/iran-vs-iraq',
  description: 'Side-by-side comparison of the Iran and Iraq wars with interactive charts.',
  applicationCategory: 'ReferenceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function IranVsIraqPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }, { label: 'Iran vs Iraq' }]} />

      <div className="text-center mb-10">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
          <span className="text-red-700">Iran War</span> vs <span className="text-blue-900">Iraq War</span>
        </h1>
        <p className="text-stone-500 text-lg max-w-2xl mx-auto">
          Two wars. Two eras. Dramatically different paths. Compare the costs, casualties,
          politics, and economic impact side by side.
        </p>
        <ShareButtons title="Iran War vs Iraq War Comparison — WarCosts" />
      </div>

      <CompareClient />

      <div className="mt-12 prose max-w-2xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Sources &amp; Notes</h2>
        <p>
          Iran war data reflects the first month of the 2026 conflict. Iraq war data covers
          the 2003–2011 conflict. Cost figures include direct military spending only (not
          long-term veteran care or interest). Civilian casualty figures are conservative
          estimates from credible sources including the Watson Institute, Iraq Body Count,
          and Department of Defense records.
        </p>
      </div>

      <BackToTop />
    </div>
  )
}
