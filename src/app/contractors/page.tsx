import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Top Defense Contractors — Who Profits from War',
  description: 'The top 5 defense contractors receive hundreds of billions in government contracts. Lockheed Martin, Boeing, Raytheon, and more.',
}

const contractors = [
  { name: 'Lockheed Martin', revenue: '$65.4B', govPct: 74, contracts: '$75B+', products: 'F-35, missiles, satellite systems', employees: '122,000', note: 'World\'s largest defense contractor. F-35 program alone: $1.7 trillion lifetime cost.' },
  { name: 'RTX (Raytheon)', revenue: '$68.9B', govPct: 52, contracts: '$36B+', products: 'Missiles, radar, Patriot systems', employees: '185,000', note: 'Merged with United Technologies in 2020. Makes the missiles that other countries buy from us.' },
  { name: 'Boeing', revenue: '$66.5B', govPct: 37, contracts: '$28B+', products: 'Fighter jets, tankers, satellites', employees: '171,000', note: 'B-21 bomber, F/A-18, KC-46 tanker. Also makes commercial planes — when they\'re not falling apart.' },
  { name: 'Northrop Grumman', revenue: '$39.3B', govPct: 83, contracts: '$32B+', products: 'B-21 bomber, Global Hawk, cyber', employees: '100,000', note: '83% of revenue from government. Built the B-2 stealth bomber ($2.1B each).' },
  { name: 'General Dynamics', revenue: '$42.3B', govPct: 62, contracts: '$26B+', products: 'Submarines, tanks, IT systems', employees: '106,000', note: 'Builds nuclear submarines ($3.4B each) and Abrams tanks ($10M each).' },
]

export default function ContractorsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Defense Contractors' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Who Profits from War</h1>
      <p className="text-muted mb-6">These five companies receive over $200 billion per year in government defense contracts. Their profits depend on conflict.</p>
      <ShareButtons title="Top Defense Contractors" />

      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise of misplaced power exists and will persist.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— President Dwight D. Eisenhower, Farewell Address, January 17, 1961</p>
      </div>

      <div className="space-y-6">
        {contractors.map((c, i) => (
          <div key={c.name} className="bg-white rounded-lg border p-6 shadow-sm">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">#{i+1}</span>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{c.name}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
              <div><p className="font-bold text-primary">{c.revenue}</p><p className="text-muted">Annual Revenue</p></div>
              <div><p className="font-bold text-primary">{c.govPct}%</p><p className="text-muted">From Government</p></div>
              <div><p className="font-bold text-primary">{c.contracts}</p><p className="text-muted">Gov Contracts</p></div>
              <div><p className="font-bold text-primary">{c.employees}</p><p className="text-muted">Employees</p></div>
            </div>
            <p className="text-sm"><strong>Products:</strong> {c.products}</p>
            <p className="text-muted text-sm mt-2">{c.note}</p>
          </div>
        ))}
      </div>

      <div className="bg-stone-50 rounded-lg p-6 mt-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Revolving Door</h2>
        <p className="text-muted">Former Pentagon officials routinely join defense contractor boards, and former industry executives take government positions. This revolving door ensures that the interests of the military-industrial complex are represented at every level of government decision-making.</p>
        <p className="text-muted mt-3">Between 2004 and 2008, 80% of retiring three- and four-star generals went to work for defense contractors or consultants.</p>
      </div>
    </div>
  )
}
