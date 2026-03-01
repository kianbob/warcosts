import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'The Forever Wars — America\'s 21st Century Military Operations',
  description: 'Since 1995, the US has launched 15 military operations costing trillions of dollars. Most were never authorized by Congress. Many have no end in sight.',
}

export default function ModernWarsPage() {
  const conflicts = loadData('conflicts.json')
  const stats = loadData('stats.json')

  const modern = conflicts
    .filter((c: any) => c.startYear >= 1995)
    .sort((a: any, b: any) => b.startYear - a.startYear)

  const totalCost = modern.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const totalUSDeaths = modern.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)
  const totalCivDeaths = modern.reduce((s: number, c: any) => s + (c.civilianDeaths || 0), 0)
  const ongoingCount = modern.filter((c: any) => !c.endYear).length
  const countriesSet = new Set<string>()
  modern.forEach((c: any) => c.countries?.forEach((x: string) => countriesSet.add(x)))
  const noAuth = modern.filter((c: any) => !c.congressionalAuth).length

  return (
    <div>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-red-500 font-semibold tracking-wide uppercase text-sm mb-4">1995 – Present</p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            The Forever Wars
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-3xl mx-auto mb-4">
            America&apos;s 21st Century Military Operations
          </p>
          <p className="text-stone-500 max-w-2xl mx-auto mb-12">
            Since 1995, the United States has launched {modern.length} military operations across {countriesSet.size} countries.
            {ongoingCount} are still ongoing with no end in sight. {noAuth} were never authorized by Congress.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</p>
              <p className="text-stone-400 text-sm mt-1">Total Cost Since 1995</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{fmt(totalUSDeaths + totalCivDeaths)}</p>
              <p className="text-stone-400 text-sm mt-1">Total Deaths</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{ongoingCount}</p>
              <p className="text-stone-400 text-sm mt-1">Ongoing Operations</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{countriesSet.size}</p>
              <p className="text-stone-400 text-sm mt-1">Countries Involved</p>
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-800 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-red-400 font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">
              {stats.undeclaredWars} of {stats.totalConflicts} US wars were never declared by Congress
            </p>
            <p className="text-stone-400 text-sm">
              The Constitution requires congressional authorization. Presidents have ignored this requirement for nearly every conflict since World War II.
            </p>
          </div>
        </div>
      </section>

      {/* War on Terror callout */}
      <section className="bg-red-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-3">
            Since September 11, 2001
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">{fmtMoney(stats.warOnTerrorCost)}</p>
              <p className="text-red-200 text-sm">War on Terror cost</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">{fmt(stats.warOnTerrorDeaths)}</p>
              <p className="text-red-200 text-sm">Directly killed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">{stats.counterterrorCountries}</p>
              <p className="text-red-200 text-sm">Countries with operations</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">{(stats.warOnTerrorDisplaced / 1e6).toFixed(0)}M</p>
              <p className="text-red-200 text-sm">People displaced</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/analysis/war-on-terror" className="text-red-200 hover:text-white underline text-sm">Full War on Terror Analysis →</Link>
            <Link href="/analysis/forever-wars" className="text-red-200 hover:text-white underline text-sm">How 60 Words Enabled It All →</Link>
          </div>
        </div>
      </section>

      {/* Conflicts list */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <Breadcrumbs items={[{ label: 'Modern Wars' }]} />
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">All Post-1995 Operations</h2>

        <div className="space-y-6">
          {modern.map((c: any) => {
            const isOngoing = !c.endYear
            return (
              <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-xl border hover:shadow-lg transition p-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  {isOngoing && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold animate-pulse">● ONGOING</span>
                  )}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    c.congressionalAuth ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>{c.congressionalAuth ? 'Authorized' : 'No Authorization'}</span>
                  <span className="text-xs text-stone-500">{c.type?.replace(/_/g, ' ')}</span>
                </div>
                <div className="md:flex md:justify-between md:items-start">
                  <div className="mb-3 md:mb-0">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">{c.name}</h3>
                    <p className="text-stone-500 text-sm">{c.startYear}–{c.endYear || 'Present'} · {c.region} · {c.countries?.join(', ')}</p>
                    <p className="text-muted text-sm mt-1 max-w-2xl">{c.description?.slice(0, 200)}...</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center shrink-0">
                    <div>
                      <p className="font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(c.costInflationAdjusted)}</p>
                      <p className="text-xs text-muted">Cost</p>
                    </div>
                    <div>
                      <p className="font-bold text-primary font-[family-name:var(--font-heading)]">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) : '—'}</p>
                      <p className="text-xs text-muted">US Deaths</p>
                    </div>
                    <div>
                      <p className="font-bold text-primary font-[family-name:var(--font-heading)]">{c.civilianDeaths ? fmt(c.civilianDeaths) : '—'}</p>
                      <p className="text-xs text-muted">Civilians</p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">The wars continue. The costs grow.</h2>
          <p className="text-stone-400 mb-8">
            At {fmtMoney(stats.costPerSecond)} per second, every minute you spend on this page costs taxpayers {fmtMoney(stats.costPerMinute)}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tools/cost-calculator" className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Calculate Your Personal War Cost →
            </Link>
            <Link href="/analysis/forever-wars" className="border border-stone-600 hover:border-stone-400 text-white px-6 py-3 rounded-lg font-semibold transition">
              How 60 Words Changed Everything →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
