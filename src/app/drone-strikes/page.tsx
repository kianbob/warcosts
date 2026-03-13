import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'US Drone Strikes — 14,000+ Strikes, Thousands of Civilian Deaths',
  description: 'Complete data on US drone strikes across Pakistan, Yemen, Somalia, Afghanistan, and Libya. By country, by president, civilian casualties exposed.',
}

interface Country {
  country: string
  slug: string
  years: string
  totalStrikes: number
  minKilled: number | null
  maxKilled: number | null
  minCivilians: number | null
  maxCivilians: number | null
  minChildren: number
  maxChildren: number
  minInjured: number
  maxInjured: number
  byPresident: { president: string; strikes: number; minKilled: number | null; maxKilled: number | null }[]
  byYear: { year: number; strikes: number }[]
}

interface DroneData {
  countries: Country[]
  totals: {
    totalStrikes: number
    minKilled: number | null
    maxKilled: number | null
    minCivilians: number | null
    maxCivilians: number | null
    minChildren: number
    maxChildren: number
  }
}

export default function DroneStrikesPage() {
  const data: DroneData = loadData('drone-strikes.json')
  const { countries, totals } = data

  // Aggregate by president
  const byPres: Record<string, { strikes: number; minKilled: number; maxKilled: number }> = {}
  countries.forEach(c => {
    c.byPresident.forEach(p => {
      if (!byPres[p.president]) byPres[p.president] = { strikes: 0, minKilled: 0, maxKilled: 0 }
      const bp = byPres[p.president]
      if (bp) { bp.strikes += p.strikes; bp.minKilled += (p.minKilled || 0); bp.maxKilled += (p.maxKilled || 0) }
    })
  })
  const presOrder = ['Bush', 'Obama', 'Trump', 'Biden']
  const presList = presOrder.filter(p => byPres[p]).map(p => ({ president: p, ...byPres[p] }))

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Drone Strikes' }]} />

      <div className="bg-stone-900 text-stone-900 rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold">
          US Drone Strikes
        </h1>
        <p className="text-stone-500 mt-2">
          {fmt(totals.totalStrikes)} confirmed strikes across 5 countries. {fmt(totals.minCivilians || 0)}–{fmt(totals.maxCivilians || 0)} civilians killed, including {fmt(totals.minChildren || 0)}–{fmt(totals.maxChildren || 0)} children.
        </p>
      </div>

      <ShareButtons title="US Drone Strikes — Complete Data" />

      {/* Totals */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(totals.totalStrikes)}</p>
          <p className="text-xs text-stone-500">Total Strikes</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(totals.minKilled || 0)}–{fmt(totals.maxKilled || 0)}</p>
          <p className="text-xs text-stone-500">Total Killed</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(totals.minCivilians || 0)}–{fmt(totals.maxCivilians || 0)}</p>
          <p className="text-xs text-stone-500">Civilians Killed</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(totals.minChildren || 0)}–{fmt(totals.maxChildren || 0)}</p>
          <p className="text-xs text-stone-500">Children Killed</p>
        </div>
      </div>

      {/* By Country */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">🌍 By Country</h2>
      <div className="space-y-4 mb-10">
        {countries.sort((a, b) => b.totalStrikes - a.totalStrikes).map(c => {
          const pct = ((c.totalStrikes / totals.totalStrikes) * 100).toFixed(1)
          return (
            <Link key={c.slug} href={`/drone-strikes/${c.slug}`} className="block bg-white border border-stone-200 rounded-lg p-5 hover:border-red-300 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-stone-900">{c.country}</h3>
                <span className="text-red-700 font-bold">{fmt(c.totalStrikes)} strikes</span>
              </div>
              <div className="w-full bg-stone-200 rounded-full h-2 mb-3">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: `${pct}%` }} />
              </div>
              <div className="flex gap-6 text-sm text-stone-500">
                <span>{c.years}</span>
                <span>{c.minKilled != null ? `${fmt(c.minKilled || 0)}–${fmt(c.maxKilled || 0)} killed` : 'Casualties unknown'}</span>
                <span>{c.minCivilians != null ? `${fmt(c.minCivilians || 0)}–${fmt(c.maxCivilians || 0)} civilians` : ''}</span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* By President */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">🏛️ By President</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {presList.map(p => (
          <div key={p.president} className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <p className="font-semibold text-stone-900 text-lg">{p.president}</p>
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(p.strikes)}</p>
            <p className="text-xs text-stone-500">strikes</p>
            <p className="text-sm text-stone-600 mt-1">{fmt(p.minKilled || 0)}–{fmt(p.maxKilled || 0)} killed</p>
          </div>
        ))}
      </div>

      {/* Context */}
      <div className="bg-white border border-stone-200 rounded-lg p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">📖 Context</h2>
        <p className="text-stone-600 leading-relaxed">
          The US drone program began under George W. Bush and expanded dramatically under Obama, who authorized 10x more strikes than his predecessor. Drone strikes are conducted under the 2001 AUMF and covert action authorities, often with no congressional oversight. Independent investigations have consistently found civilian casualty rates far higher than official Pentagon estimates. The program operates across multiple countries where the US has never declared war.
        </p>
      </div>

      <BackToTop />
    </div>
  )
}
