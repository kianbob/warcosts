import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

interface ByPresident { president: string; strikes: number; minKilled: number; maxKilled: number }
interface ByYear { year: number; strikes: number }
interface Country {
  country: string; slug: string; years: string; totalStrikes: number
  minKilled: number; maxKilled: number; minCivilians: number; maxCivilians: number
  minChildren: number; maxChildren: number; minInjured: number; maxInjured: number
  byPresident: ByPresident[]; byYear: ByYear[]
  notes?: string; controversies?: string
}

interface DroneData { countries: Country[]; totals: any }

export async function generateStaticParams() {
  const data: DroneData = loadData('drone-strikes.json')
  return data.countries.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data: DroneData = loadData('drone-strikes.json')
  const country = data.countries.find(c => c.slug === slug)
  if (!country) return { title: 'Not Found' }
  return {
    title: `US Drone Strikes in ${country.country} — ${fmt(country.totalStrikes)} Strikes`,
    description: `${fmt(country.totalStrikes)} US drone strikes in ${country.country} (${country.years}). ${fmt(country.minCivilians)}–${fmt(country.maxCivilians)} civilians killed.`,
  }
}

export default async function DroneStrikeCountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data: DroneData = loadData('drone-strikes.json')
  const country = data.countries.find(c => c.slug === slug)
  if (!country) notFound()

  const maxYearStrikes = Math.max(...country.byYear.map(y => y.strikes))

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Drone Strikes', href: '/drone-strikes' }, { label: country.country }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold">
          Drone Strikes: {country.country}
        </h1>
        <p className="text-stone-500 mt-2">{country.years} · {fmt(country.totalStrikes)} confirmed strikes</p>
      </div>

      <ShareButtons title={`US Drone Strikes in ${country.country}`} />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(country.totalStrikes)}</p>
          <p className="text-xs text-stone-500">Total Strikes</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(country.minKilled)}–{fmt(country.maxKilled)}</p>
          <p className="text-xs text-stone-500">Total Killed</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(country.minCivilians)}–{fmt(country.maxCivilians)}</p>
          <p className="text-xs text-stone-500">Civilians Killed</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(country.minChildren)}–{fmt(country.maxChildren)}</p>
          <p className="text-xs text-stone-500">Children Killed</p>
        </div>
      </div>

      {/* By President */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">🏛️ By President</h2>
      <div className="space-y-3 mb-10">
        {country.byPresident.map(p => {
          const pct = ((p.strikes / country.totalStrikes) * 100).toFixed(1)
          return (
            <div key={p.president} className="bg-stone-800 border border-stone-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-white">{p.president}</span>
                <span className="text-red-700 font-bold">{fmt(p.strikes)} strikes ({pct}%)</span>
              </div>
              <div className="w-full bg-stone-700 rounded-full h-2 mb-1">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: `${pct}%` }} />
              </div>
              <p className="text-sm text-stone-500">{fmt(p.minKilled)}–{fmt(p.maxKilled)} killed</p>
            </div>
          )
        })}
      </div>

      {/* Year-by-Year */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">📊 Year-by-Year Breakdown</h2>
      <div className="bg-stone-800 border border-stone-200 rounded-lg p-5 mb-10">
        <div className="space-y-2">
          {country.byYear.map(y => (
            <div key={y.year} className="flex items-center gap-3">
              <span className="text-stone-500 text-sm w-12">{y.year}</span>
              <div className="flex-1 bg-stone-700 rounded-full h-4">
                <div
                  className="bg-red-600 h-4 rounded-full flex items-center justify-end pr-2"
                  style={{ width: `${Math.max((y.strikes / maxYearStrikes) * 100, 3)}%` }}
                >
                  {y.strikes > maxYearStrikes * 0.15 && (
                    <span className="text-white text-xs font-bold">{y.strikes}</span>
                  )}
                </div>
              </div>
              <span className="text-stone-600 text-sm w-10 text-right">{y.strikes}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Civilian Casualties */}
      <div className="bg-red-950 border border-red-900 rounded-lg p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-700 mb-3">⚠️ Civilian Casualties</h2>
        <p className="text-stone-600 leading-relaxed">
          Independent monitoring organizations estimate that {fmt(country.minCivilians)}–{fmt(country.maxCivilians)} civilians were killed by US drone strikes in {country.country}, including {fmt(country.minChildren)}–{fmt(country.maxChildren)} children. An additional {fmt(country.minInjured)}–{fmt(country.maxInjured)} people were injured. Official US government figures are consistently lower than independent estimates.
        </p>
      </div>

      {/* Notes & Controversies */}
      {country.notes && (
        <div className="bg-stone-800 border border-stone-200 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">📝 Notes</h2>
          <p className="text-stone-600 leading-relaxed">{country.notes}</p>
        </div>
      )}

      {country.controversies && (
        <div className="bg-stone-800 border border-stone-200 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">🔥 Controversies</h2>
          <p className="text-stone-600 leading-relaxed">{country.controversies}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex flex-wrap gap-3 mb-8">
        {data.countries.filter(c => c.slug !== slug).map(c => (
          <Link key={c.slug} href={`/drone-strikes/${c.slug}`} className="bg-stone-800 border border-stone-200 rounded-lg px-4 py-2 text-stone-600 hover:border-red-300 hover:shadow-md hover:text-white transition text-sm">
            {c.country} ({fmt(c.totalStrikes)})
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/drone-strikes" className="text-red-700 hover:text-red-600 text-sm">← Back to All Drone Strike Data</Link>
      </div>

      <BackToTop />
    </div>
  )
}
