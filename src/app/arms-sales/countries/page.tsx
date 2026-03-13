import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'US Arms Sales by Country — Top 35 Buyers',
  description: 'Which countries buy the most US weapons? Complete breakdown of arms sales to 35 major buyer nations with systems sold and controversies.',
}

interface ArmsSaleCountry {
  country: string; slug: string; region: string; totalSince2009: number
  recentFY: number; recentAmount: number; topSystems: string[]
  note?: string; controversies?: string
}

export default function ArmsSalesCountriesPage() {
  const data: ArmsSaleCountry[] = loadData('arms-sales-countries.json')
  const total = data.reduce((s, d) => s + d.totalSince2009, 0)
  const maxAmount = Math.max(...data.map(d => d.totalSince2009))

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Arms Sales', href: '/arms-sales' }, { label: 'By Country' }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold">
          Arms Sales by Country
        </h1>
        <p className="text-stone-400 mt-2">
          {data.length} major buyer nations · {fmtMoney(total * 1e6)} in total sales since 2009
        </p>
      </div>

      <ShareButtons title="US Arms Sales by Country" />

      <div className="space-y-4 my-8">
        {data.sort((a, b) => b.totalSince2009 - a.totalSince2009).map((c, i) => (
          <Link key={c.slug} href={`/arms-sales/${c.slug}`} className="block bg-white border border-stone-200 rounded-lg p-5 hover:bg-stone-700 transition">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-stone-500 text-sm">#{i + 1}</span>
                <h3 className="text-lg font-semibold text-white">{c.country}</h3>
                <span className="text-xs text-stone-500">{c.region}</span>
              </div>
              <span className="text-red-700 font-bold">{fmtMoney(c.totalSince2009 * 1e6)}</span>
            </div>
            <div className="w-full bg-stone-700 rounded-full h-2 mb-2">
              <div className="bg-red-600 h-2 rounded-full" style={{ width: `${(c.totalSince2009 / maxAmount) * 100}%` }} />
            </div>
            <p className="text-sm text-stone-400">
              FY{c.recentFY}: {fmtMoney(c.recentAmount * 1e6)} · {c.topSystems.slice(0, 2).join(', ')}
            </p>
            {c.controversies && <p className="text-xs text-red-700/70 mt-1">⚠️ {c.controversies.substring(0, 80)}...</p>}
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/arms-sales" className="text-red-700 hover:text-red-300 text-sm">← Arms Sales Overview</Link>
      </div>

      <BackToTop />
    </div>
  )
}
