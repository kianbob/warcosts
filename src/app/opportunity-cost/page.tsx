import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'What Else Could $8 Trillion Buy? — The Opportunity Cost of War',
  description: 'The War on Terror cost $8 trillion. Here\'s what that money could have funded: free college, clean water, ending homelessness, and more.',
}

const extraExamples = [
  { item: 'New affordable homes ($250K each)', units: 32000000, unitCost: 250000, description: '32 million new homes — enough to end the housing crisis entirely.' },
  { item: 'Hospital beds ($1.5M each to build/equip)', units: 5333333, unitCost: 1500000, description: '5.3 million new hospital beds — 5× the current US total.' },
  { item: 'Teacher salaries for a year ($63K)', units: 126984127, unitCost: 63000, description: '127 million teacher-years of employment.' },
  { item: 'Total US student loan debt forgiven', units: 4.7, unitCost: 1700000000000, description: 'Could wipe out all student debt 4.7 times over.' },
  { item: 'Years of universal healthcare ($3.5T/yr)', units: 2.3, unitCost: 3500000000000, description: 'Over 2 years of healthcare for every American.' },
  { item: 'Lead pipe replacement for every US city', units: 160, unitCost: 50000000000, description: 'Replace all lead pipes in America 160 times over.' },
]

export default function OpportunityCostPage() {
  const data = loadData('opportunity-costs.json')

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'What Else Could This Buy?' }]} />

      <div className="text-center mb-12">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
          What Else Could <span className="text-red-600">{fmtMoney(data.warOnTerrorTotal)}</span> Buy?
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          The War on Terror alone cost {fmtMoney(data.warOnTerrorTotal)}. That money is gone — spent on wars that killed 929,000 people and destabilized four countries. Here&apos;s what it could have done instead.
        </p>
      </div>

      <ShareButtons title="What Else Could $8 Trillion Buy?" />

      {/* Your Tax Dollars framing */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-800 mb-2">Your Tax Dollars at Work</h2>
        <p className="text-sm text-stone-600 max-w-2xl mx-auto">Every dollar listed below came from American taxpayers. The average household contributed roughly <strong>$60,000</strong> to the War on Terror. What could your family&apos;s share have bought?</p>
        <Link href="/tools/tax-receipt" className="inline-block mt-4 text-red-800 font-semibold hover:underline text-sm">→ Calculate your personal war tax receipt</Link>
      </div>

      {/* Main examples from data */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">From the Data</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {data.examples.map((e: any) => (
          <div key={e.item} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition">
            <p className="text-4xl font-bold text-red-600 font-[family-name:var(--font-heading)] mb-2">
              {e.units >= 1e9 ? `${(e.units/1e9).toFixed(1)}B` : e.units >= 1e6 ? `${Math.round(e.units/1e6)}M` : typeof e.units === 'number' && e.units < 100 ? e.units.toFixed(0) : fmt(e.units)}×
            </p>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">{e.item}</h3>
            <p className="text-muted">{e.description}</p>
            <p className="text-xs text-muted mt-2">Unit cost: {fmtMoney(e.unitCost)}</p>
          </div>
        ))}
      </div>

      {/* Side-by-side comparison */}
      <div className="bg-stone-100 rounded-xl p-8 my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 text-center">Side-by-Side: War vs. Investment</h2>
        <div className="space-y-6">
          {[
            { war: '$2.3T Afghanistan War (20 years)', alt: 'Free college for all Americans for 29 years', altCost: '$79B/yr × 29' },
            { war: '$2.0T Iraq War', alt: 'End homelessness in America for 100 years', altCost: '$20B/yr × 100' },
            { war: '$8T War on Terror (total)', alt: 'Clean drinking water for the entire world for 400 years', altCost: '$20B/yr × 400' },
            { war: '$886B annual defense budget', alt: '14 million new teachers\' salaries per year', altCost: '$63K × 14M' },
            { war: '$55B/yr overseas bases', alt: 'Triple the EPA budget + double NASA\'s budget', altCost: '$24B EPA + $28B NASA' },
          ].map(c => (
            <div key={c.war} className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-100 rounded-lg p-4 border border-red-200">
                <p className="text-xs font-semibold text-red-600 uppercase mb-1">What We Spent</p>
                <p className="font-bold text-stone-800">{c.war}</p>
              </div>
              <div className="bg-green-100 rounded-lg p-4 border border-green-200">
                <p className="text-xs font-semibold text-green-600 uppercase mb-1">What We Could Have Had</p>
                <p className="font-bold text-stone-800">{c.alt}</p>
                <p className="text-xs text-muted mt-1">{c.altCost}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional examples */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">More Perspectives</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {extraExamples.map((e) => (
          <div key={e.item} className="bg-white rounded-xl p-6 shadow-sm border">
            <p className="text-3xl font-bold text-red-600 font-[family-name:var(--font-heading)] mb-2">
              {e.units >= 1e6 ? `${Math.round(e.units/1e6)}M` : typeof e.units === 'number' && e.units < 100 ? e.units.toFixed(1) : fmt(e.units)}
            </p>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">{e.item}</h3>
            <p className="text-muted text-sm">{e.description}</p>
          </div>
        ))}
      </div>

      {/* Eisenhower Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mt-12 text-center">
        <blockquote className="font-[family-name:var(--font-heading)] text-2xl italic">
          &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense, a theft from those who hunger and are not fed, those who are cold and are not clothed.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-4">— Dwight D. Eisenhower, &ldquo;The Chance for Peace&rdquo; speech, 1953</p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The US spends more on its military than the next <strong>10 countries combined</strong>.</li>
          <li>• The War on Terror cost roughly <strong>$60,000 per US household</strong>.</li>
          <li>• $8 trillion in $100 bills, stacked, would reach <strong>5,400 miles high</strong> — past the International Space Station.</li>
          <li>• The cost of one F-35 fighter jet ($80M) could fund <strong>1,270 teacher salaries</strong> for a year.</li>
          <li>• At $886B/yr, the US spends <strong>$28,095 per second</strong> on defense.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/tools/tax-receipt" className="text-red-800 hover:underline">→ Your Personal War Tax Receipt</Link></li>
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Military Spending — $886B/yr</Link></li>
          <li><Link href="/analysis/jobs-vs-war" className="text-red-800 hover:underline">→ Jobs vs. War — military spending creates the fewest jobs</Link></li>
        </ul>
      </div>
    </div>
  )
}
