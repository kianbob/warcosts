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
  minKilled: number
  maxKilled: number
  minCivilians: number
  maxCivilians: number
  minChildren: number
  maxChildren: number
  minInjured: number
  maxInjured: number
  byPresident: { president: string; strikes: number; minKilled: number; maxKilled: number }[]
  byYear: { year: number; strikes: number }[]
}

interface DroneData {
  countries: Country[]
  totals: {
    totalStrikes: number
    minKilled: number
    maxKilled: number
    minCivilians: number
    maxCivilians: number
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
      byPres[p.president].strikes += p.strikes
      byPres[p.president].minKilled += p.minKilled
      byPres[p.president].maxKilled += p.maxKilled
    })
  })
  const presOrder = ['Bush', 'Obama', 'Trump', 'Biden']
  const presList = presOrder.filter(p => byPres[p]).map(p => ({ president: p, ...byPres[p] }))

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Drone Strikes' }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold">
          US Drone Strikes
        </h1>
        <p className="text-stone-400 mt-2">
          {fmt(totals.totalStrikes)} confirmed strikes across 5 countries. {fmt(totals.minCivilians)}–{fmt(totals.maxCivilians)} civilians killed, including {fmt(totals.minChildren)}–{fmt(totals.maxChildren)} children.
        </p>
      </div>

      <ShareButtons title="US Drone Strikes — Complete Data" />

      {/* Totals */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
          <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(totals.totalStrikes)}</p>
          <p className="text-xs text-stone-400">Total Strikes</p>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
          <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(totals.minKilled)}–{fmt(totals.maxKilled)}</p>
          <p className="text-xs text-stone-400">Total Killed</p>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
          <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(totals.minCivilians)}–{fmt(totals.maxCivilians)}</p>
          <p className="text-xs text-stone-400">Civilians Killed</p>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
          <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(totals.minChildren)}–{fmt(totals.maxChildren)}</p>
          <p className="text-xs text-stone-400">Children Killed</p>
        </div>
      </div>

      {/* By Country */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">🌍 By Country</h2>
      <div className="space-y-4 mb-10">
        {countries.sort((a, b) => b.totalStrikes - a.totalStrikes).map(c => {
          const pct = ((c.totalStrikes / totals.totalStrikes) * 100).toFixed(1)
          return (
            <Link key={c.slug} href={`/drone-strikes/${c.slug}`} className="block bg-stone-800 border border-stone-700 rounded-lg p-5 hover:bg-stone-700 transition">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">{c.country}</h3>
                <span className="text-red-400 font-bold">{fmt(c.totalStrikes)} strikes</span>
              </div>
              <div className="w-full bg-stone-700 rounded-full h-2 mb-3">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: `${pct}%` }} />
              </div>
              <div className="flex gap-6 text-sm text-stone-400">
                <span>{c.years}</span>
                <span>{fmt(c.minKilled)}–{fmt(c.maxKilled)} killed</span>
                <span>{fmt(c.minCivilians)}–{fmt(c.maxCivilians)} civilians</span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* By President */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">🏛️ By President</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {presList.map(p => (
          <div key={p.president} className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center">
            <p className="font-semibold text-white text-lg">{p.president}</p>
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(p.strikes)}</p>
            <p className="text-xs text-stone-400">strikes</p>
            <p className="text-sm text-stone-300 mt-1">{fmt(p.minKilled)}–{fmt(p.maxKilled)} killed</p>
          </div>
        ))}
      </div>

      {/* Context */}
      <div className="bg-stone-800 border border-stone-700 rounded-lg p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">📖 Context</h2>
        <p className="text-stone-300 leading-relaxed">
          The US drone program began under George W. Bush and expanded dramatically under Obama, who authorized 10x more strikes than his predecessor. Drone strikes are conducted under the 2001 AUMF and covert action authorities, often with no congressional oversight. Independent investigations have consistently found civilian casualty rates far higher than official Pentagon estimates. The program operates across multiple countries where the US has never declared war.
        </p>
      </div>

      <BackToTop />
    </div>
  )
}
