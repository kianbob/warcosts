import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import AidCountriesFilter from './AidCountriesFilter'

export const metadata: Metadata = {
  title: 'US Foreign Aid by Country — 25 Largest Recipients | WarCosts',
  description: 'Ranked directory of the 25 largest US foreign aid recipients since 2001. See total aid, annual amounts, military vs economic split, and per-capita figures.',
  alternates: { canonical: 'https://www.warcosts.org/foreign-aid/countries' },
}

export default async function AidCountriesPage() {
  const countries = loadData('aid-countries-index.json') as any[]

  const totalAid = countries.reduce((s: number, c: any) => s + c.totalSince2001, 0)
  const totalAnnual = countries.reduce((s: number, c: any) => s + c.annual2024, 0)
  const avgMilPct = countries.reduce((s: number, c: any) => s + c.militaryPct, 0) / countries.length

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Foreign Aid', href: '/foreign-aid' }, { label: 'By Country' }]} />

        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-2">US Foreign Aid by Country</h1>
        <p className="text-stone-500 mb-8 max-w-3xl">The 25 largest recipients of US foreign aid since 2001, ranked by total aid received.</p>

        <ShareButtons title="US Foreign Aid by Country — WarCosts" />

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-8">
          <div className="bg-white border border-stone-200 rounded-xl border border-stone-200 p-6">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(totalAid * 1e6)}</p>
            <p className="text-xs text-stone-500">Total US Aid (Top 25)</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-xl border border-stone-200 p-6">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(totalAnnual * 1e6)}</p>
            <p className="text-xs text-stone-500">Annual Aid (2024)</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-xl border border-stone-200 p-6">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(countries.length)}</p>
            <p className="text-xs text-stone-500">Top Recipients</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-xl border border-stone-200 p-6">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{avgMilPct.toFixed(0)}%</p>
            <p className="text-xs text-stone-500">Avg Military Share</p>
          </div>
        </div>

        <AidCountriesFilter countries={countries} />

        <BackToTop />
      </div>
    </div>
  )
}
