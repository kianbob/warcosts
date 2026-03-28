import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import BackToTop from '@/components/BackToTop'
import { CostOverrunChart, OverrunPercentChart } from './WeaponsCharts'

export const metadata: Metadata = {
  title: 'US Weapons Systems — $3 Trillion in Programs | WarCosts',
  description: 'The Pentagon\'s major weapons programs represent over $3 trillion in spending. From the $1.7T F-35 to cancelled boondoggles, explore every major system.',
  openGraph: {
    title: 'US Weapons Systems — 48 Major Programs',
    description: 'Every major US weapons system: F-35, B-21, Ford-class carriers, hypersonics. Costs, overruns, contractors, and delivery status.',
    url: 'https://www.warcosts.org/weapons',
    siteName: 'WarCosts',
    type: 'website',
  },
  alternates: { canonical: 'https://www.warcosts.org/weapons' },
}

interface Weapon { name: string; slug: string; category: string; service: string; contractor: string; unitCost: number | null; totalCost: number | null; costOverrun: number | null; units: number | null; delivered: number | null; description: string; status: string; costBillions: number | null; costNote?: string }

const CATEGORY_GROUPS: Record<string, { label: string; icon: string; cats: string[] }> = {
  aircraft: { label: 'Aircraft', icon: '✈️', cats: ['Fighter Aircraft', 'Bomber', 'Attack Aircraft', 'Tiltrotor', 'Tanker', 'Early Warning', 'Helicopter', 'Drone'] },
  naval: { label: 'Naval', icon: '🚢', cats: ['Aircraft Carrier', 'Submarine', 'Nuclear Submarine', 'Surface Ship', 'Destroyer', 'Frigate', 'Cruiser', 'Amphibious'] },
  missiles: { label: 'Missiles & Defense', icon: '🚀', cats: ['Missile Defense', 'ICBM', 'Cruise Missile', 'Naval Missile Defense', 'Air Defense', 'Rocket Artillery'] },
  ground: { label: 'Ground Systems', icon: '🛡️', cats: ['Main Battle Tank', 'Infantry Vehicle', 'Tactical Vehicle'] },
  strategic: { label: 'Strategic & Space', icon: '🛰️', cats: ['Space', 'Nuclear Weapon'] },
}

export default function WeaponsPage() {
  const weapons = loadData('weapons.json') as Weapon[]
  const weaponsDetail = loadData('weapons-detail.json') as any[]
  const totalCost = weapons.reduce((s, w) => s + (w.totalCost || 0), 0) * 1e6
  const totalUnits = weapons.reduce((s, w) => s + (w.units || 0), 0)
  const overruns = weapons.filter(w => w.costOverrun && w.costOverrun > 0)
  const avgOverrun = overruns.length > 0 ? Math.round(overruns.reduce((s, w) => s + (w.costOverrun || 0), 0) / overruns.length) : 0
  const cancelled = weapons.filter(w => w.status === 'Cancelled')
  const cancelledCost = cancelled.reduce((s, w) => s + (w.totalCost || 0), 0) * 1e6

  const costliest = [...weapons].sort((a, b) => (b.totalCost || 0) - (a.totalCost || 0)).slice(0, 5)
  const maxCost = costliest[0]?.totalCost || 1
  const biggestOverruns = [...weapons].filter(w => w.costOverrun).sort((a, b) => (b.costOverrun || 0) - (a.costOverrun || 0)).slice(0, 5)
  const maxOverrun = biggestOverruns[0]?.costOverrun || 1

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Weapons Systems' }]} />
      <BreadcrumbSchema items={[{ label: "Weapons Systems" }]} />

      {/* Dark Hero */}
      <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10 mt-4">
        <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
          The Pentagon&apos;s Arsenal
        </h1>
        <p className="text-stone-400 text-lg max-w-3xl mb-8">
          {weapons.length} major weapons programs spanning fighters, carriers, missiles, and satellites.
          Average cost overrun: {avgOverrun}%. The most expensive machine in history — the F-35 — will cost
          $1.7 trillion over its lifetime. That&apos;s more than the GDP of Canada.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{weapons.length}</div>
            <div className="text-stone-400 text-sm mt-1">Major Programs</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</div>
            <div className="text-stone-400 text-sm mt-1">Total Program Cost</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-yellow-400 font-[family-name:var(--font-heading)]">{avgOverrun}%</div>
            <div className="text-stone-400 text-sm mt-1">Avg Cost Overrun</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(totalUnits)}</div>
            <div className="text-stone-400 text-sm mt-1">Total Units Planned</div>
          </div>
        </div>
      </div>

      {/* Rankings side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Most Expensive */}
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">💰 Most Expensive Programs</h2>
          <div className="space-y-3">
            {costliest.map((w, i) => {
              const pct = ((w.totalCost || 0) / maxCost) * 100
              return (
                <Link key={w.slug} href={`/weapons/${w.slug}`} className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-stone-400 font-mono text-lg w-8">#{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-stone-900 group-hover:text-red-700 transition-colors">{w.name}</span>
                      <span className="text-stone-400 text-sm ml-2">{w.contractor}</span>
                    </div>
                    <span className="text-red-700 font-bold whitespace-nowrap">{w.costBillions ? `$${w.costBillions}B` : '—'}</span>
                  </div>
                  <div className="ml-11 bg-stone-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-red-700 h-full rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Biggest Overruns */}
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">📈 Biggest Cost Overruns</h2>
          <div className="space-y-3">
            {biggestOverruns.map((w, i) => {
              const pct = ((w.costOverrun || 0) / maxOverrun) * 100
              return (
                <Link key={w.slug} href={`/weapons/${w.slug}`} className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-stone-400 font-mono text-lg w-8">#{i + 1}</span>
                    <span className="font-medium text-stone-900 group-hover:text-red-700 transition-colors flex-1">{w.name}</span>
                    <span className="text-yellow-600 font-bold">+{w.costOverrun}%</span>
                  </div>
                  <div className="ml-11 bg-stone-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-yellow-500 h-full rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Cancelled Programs */}
      {cancelled.length > 0 && (
        <div className="bg-red-950/30 border border-red-800/40 rounded-xl p-6 mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-1">
            🗑️ Cancelled Programs — {fmtMoney(cancelledCost)} Wasted
          </h2>
          <p className="text-stone-500 text-sm mb-4">
            Programs killed after billions were spent. The money is gone. Nothing was delivered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {cancelled.map(w => (
              <Link key={w.slug} href={`/weapons/${w.slug}`}
                className="bg-white border border-stone-200 rounded-lg p-4 hover:bg-stone-50 transition-colors">
                <div className="font-medium text-stone-900">{w.name}</div>
                <div className="text-stone-500 text-sm">{w.contractor} · {w.category}</div>
                <div className="text-red-700 font-bold text-sm mt-1">
                  {w.costBillions ? `$${w.costBillions}B spent` : (w.costNote || '—')}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Category Breakdown */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">By Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {Object.values(CATEGORY_GROUPS).map(group => {
          const catWeapons = weapons.filter(w => group.cats.includes(w.category))
          if (catWeapons.length === 0) return null
          const catCost = catWeapons.reduce((s, w) => s + (w.totalCost || 0), 0) * 1e6
          return (
            <div key={group.label} className="bg-white border border-stone-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{group.icon}</span>
                <div>
                  <h3 className="font-bold text-stone-900">{group.label}</h3>
                  <div className="text-stone-500 text-sm">{catWeapons.length} programs · {fmtMoney(catCost)}</div>
                </div>
              </div>
              <div className="space-y-1">
                {catWeapons.sort((a, b) => (b.totalCost || 0) - (a.totalCost || 0)).slice(0, 5).map(w => (
                  <Link key={w.slug} href={`/weapons/${w.slug}`} className="flex justify-between text-sm hover:text-red-700 transition-colors">
                    <span className="text-stone-600 truncate mr-2">{w.name}</span>
                    <span className="text-red-700 whitespace-nowrap">{w.costBillions ? `$${w.costBillions}B` : (w.costNote || '—')}</span>
                  </Link>
                ))}
                {catWeapons.length > 5 && (
                  <div className="text-xs text-stone-400 pt-1">+{catWeapons.length - 5} more</div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts */}
      <CostOverrunChart data={weaponsDetail.filter(w => w.status !== 'Cancelled (2009)').slice(0, 8)} />
      <OverrunPercentChart data={weaponsDetail} />

      {/* Full List */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">All {weapons.length} Programs</h2>
      <div className="space-y-2 mb-8">
        {[...weapons].sort((a, b) => (b.totalCost || 0) - (a.totalCost || 0)).map((w, i) => (
          <Link key={w.slug} href={`/weapons/${w.slug}`} className="flex items-center gap-4 bg-white border border-stone-200 hover:bg-stone-50 rounded-lg p-4 transition-colors">
            <span className="text-stone-500 text-lg font-mono w-8">#{i + 1}</span>
            <div className="flex-1 min-w-0">
              <div className="text-stone-900 font-medium">{w.name}</div>
              <div className="text-stone-400 text-sm">{w.category} · {w.contractor} · {w.status}</div>
            </div>
            <div className="text-right">
              <div className="text-red-700 font-bold">{w.costBillions ? `$${w.costBillions}B` : (w.costNote || '—')}</div>
              {w.costOverrun && <div className="text-yellow-600 text-xs">+{w.costOverrun}% overrun</div>}
            </div>
          </Link>
        ))}
      </div>

      {/* Callout */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">🏭 The Procurement Machine</h2>
        <p className="text-stone-400 leading-relaxed">
          The Pentagon&apos;s weapons acquisition system is designed to spend money, not save it. Programs routinely exceed budgets by 50–200%,
          take decades longer than planned, and sometimes get cancelled after billions are spent. The military-industrial complex
          Eisenhower warned about has only grown more powerful.
        </p>
        <div className="flex gap-3 mt-4 flex-wrap">
          <Link href="/analysis/military-industrial-complex" className="text-red-400 hover:text-red-300 text-sm underline">Military-Industrial Complex →</Link>
          <Link href="/analysis/pentagon-waste" className="text-red-400 hover:text-red-300 text-sm underline">Pentagon Waste →</Link>
          <Link href="/analysis/silicon-valley-pentagon" className="text-red-400 hover:text-red-300 text-sm underline">Silicon Valley & Pentagon →</Link>
          <Link href="/contractors" className="text-red-400 hover:text-red-300 text-sm underline">Defense Contractors →</Link>
        </div>
      </div>

      <BackToTop />
    </main>
  )
}
