import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'US Military Bases by Country — 113 Countries | WarCosts',
  description: 'The US maintains military installations in 113 countries worldwide. Browse every country with US military presence, from Japan (87 bases) to tiny lily pads across Africa.',
  alternates: { canonical: 'https://www.warcosts.org/bases/countries' },
}

interface CountrySummary { country: string; slug: string; bases: number; lilyPads: number; usFunded: number; domestic: number; total: number }

export default function BaseCountriesPage() {
  const countries = loadData('base-countries.json') as CountrySummary[]
  const overseas = countries.filter(c => c.country !== 'United States')
  const totalOverseas = overseas.reduce((s, c) => s + c.total, 0)

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Bases', href: '/bases' }, { label: 'By Country' }]} />

      <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mt-4 mb-2">
        US Military Bases by Country
      </h1>
      <p className="text-stone-400 text-lg mb-6">
        {fmt(totalOverseas)} installations across {overseas.length} countries and territories
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-stone-200 border border-stone-700 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-red-400">{overseas.length}</div><div className="text-xs text-stone-400">Countries</div></div>
        <div className="bg-white border border-stone-200 border border-stone-700 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-white">{fmt(totalOverseas)}</div><div className="text-xs text-stone-400">Overseas Installations</div></div>
        <div className="bg-white border border-stone-200 border border-stone-700 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-yellow-400">{fmt(overseas.reduce((s, c) => s + c.bases, 0))}</div><div className="text-xs text-stone-400">Major Bases</div></div>
        <div className="bg-white border border-stone-200 border border-stone-700 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-stone-400">{fmt(overseas.reduce((s, c) => s + c.lilyPads, 0))}</div><div className="text-xs text-stone-400">Lily Pads</div></div>
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-stone-400 border-b border-stone-700">
              <th className="py-2 pr-4">#</th>
              <th className="py-2 pr-4">Country</th>
              <th className="py-2 pr-4 text-right">Bases</th>
              <th className="py-2 pr-4 text-right">Lily Pads</th>
              <th className="py-2 pr-4 text-right">US-Funded</th>
              <th className="py-2 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {overseas.map((c, i) => (
              <tr key={c.slug} className="border-b border-stone-800 hover:bg-slate-800">
                <td className="py-2 pr-4 text-stone-500">{i + 1}</td>
                <td className="py-2 pr-4"><Link href={`/bases/countries/${c.slug}`} className="text-red-400 hover:text-red-300">{c.country}</Link></td>
                <td className="py-2 pr-4 text-right text-white">{c.bases || '—'}</td>
                <td className="py-2 pr-4 text-right text-stone-300">{c.lilyPads || '—'}</td>
                <td className="py-2 pr-4 text-right text-stone-300">{c.usFunded || '—'}</td>
                <td className="py-2 text-right font-bold text-white">{c.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <BackToTop />
    </main>
  )
}
