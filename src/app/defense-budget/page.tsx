import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Defense Budget — $886 Billion in FY2024 | WarCosts',
  description: 'The US defense budget for FY2024 is $886 billion — more than the next 10 countries combined. The Pentagon has never passed a full audit.',
  keywords: ['defense budget', 'us defense budget', 'pentagon budget', 'military budget 2024'],
}

export default function DefenseBudgetPage() {
  const stats = loadData('stats.json')

  const breakdown = [
    { label: 'Operations & Maintenance', amount: 290e9, pct: 33 },
    { label: 'Military Personnel', amount: 170e9, pct: 19 },
    { label: 'Procurement', amount: 150e9, pct: 17 },
    { label: 'Research & Development', amount: 140e9, pct: 16 },
    { label: 'Military Construction', amount: 15e9, pct: 2 },
    { label: 'Other / Classified', amount: 121e9, pct: 13 },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Defense Budget' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">The Defense Budget</h1>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        FY2024: <strong className="text-stone-800">{fmtMoney(stats.currentAnnualBudget)}</strong>.
        More than the next 10 countries combined. Never passed a full audit.
      </p>
      <ShareButtons title="Defense Budget — $886 Billion in FY2024" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{fmtMoney(stats.currentAnnualBudget)}</p>
          <p className="text-stone-500 text-sm">FY2024 Budget</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">0</p>
          <p className="text-stone-500 text-sm">Audits Passed (Ever)</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{fmtMoney(stats.costPerDay)}</p>
          <p className="text-stone-500 text-sm">Cost Per Day</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{fmtMoney(stats.f35LifetimeCost)}</p>
          <p className="text-stone-500 text-sm">F-35 Lifetime Cost</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{stats.counterterrorCountries}</p>
          <p className="text-stone-500 text-sm">Countries with CT operations</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{fmtMoney(stats.defenseContractorSpending)}</p>
          <p className="text-stone-500 text-sm">Contractor spending (2020–24)</p>
        </div>
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-6">Where the Money Goes</h2>
      <div className="space-y-4">
        {breakdown.map(b => (
          <div key={b.label}>
            <div className="flex justify-between text-sm mb-1">
              <span>{b.label}</span>
              <span className="font-medium">{fmtMoney(b.amount)} ({b.pct}%)</span>
            </div>
            <div className="h-4 bg-stone-200 rounded-full overflow-hidden">
              <div className="h-full bg-red-800 rounded-full" style={{ width: `${b.pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Audit Problem</h2>
        <p>
          The Pentagon is the only federal agency that has <strong>never passed a comprehensive audit</strong>.
          Required by law since 1990, the DOD first attempted an audit in 2018 — and failed.
          It has failed every year since. Trillions of dollars remain unaccounted for.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Global Comparison</h2>
        <p>
          The US spends more on its military than China ($292B), India ($83B), Russia ($86B),
          Saudi Arabia ($75B), the UK ($69B), Germany ($56B), France ($54B), Japan ($50B),
          South Korea ($46B), and Australia ($32B) — combined.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The F-35: A Case Study</h2>
        <p>
          The F-35 Joint Strike Fighter program will cost an estimated <strong>{fmtMoney(stats.f35LifetimeCost)}</strong> over
          its lifetime — the most expensive weapons system in human history. The program has been plagued
          by delays, cost overruns, and performance failures since its inception.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The Pentagon cannot account for trillions. If any private company failed an audit this badly,
          its executives would be in prison.&rdquo;
        </blockquote>
      </div>

      <div className="text-center my-8">
        <Link href="/war-clock" className="inline-block bg-red-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition">
          Watch It Tick → War Clock
        </Link>
      </div>

      <div className="mt-8 bg-stone-50 rounded-lg p-6 border max-w-3xl mx-auto">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/military-industrial-complex" className="text-red-800 hover:underline">→ The Military-Industrial Complex</Link></li>
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Historical Military Spending</Link></li>
          <li><Link href="/analysis/pentagon-climate" className="text-red-800 hover:underline">→ The Pentagon&apos;s Carbon Bootprint</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
