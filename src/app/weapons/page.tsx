import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'US Weapons Systems — $3 Trillion in Programs | WarCosts',
  description: 'The Pentagon\'s major weapons programs represent over $3 trillion in spending. From the $1.7T F-35 to cancelled boondoggles, explore every major system.',
  alternates: { canonical: 'https://www.warcosts.org/weapons' },
}

interface Weapon { name: string; slug: string; category: string; service: string; contractor: string; unitCost: number | null; totalCost: number | null; costOverrun: number | null; units: number | null; delivered: number | null; description: string; status: string; costBillions: number | null }

export default function WeaponsPage() {
  const weapons = loadData('weapons.json') as Weapon[]
  const categories = [...new Set(weapons.map(w => w.category))]
  const totalCost = weapons.reduce((s, w) => s + (w.totalCost || 0), 0) * 1e6
  const cancelled = weapons.filter(w => w.status === 'Cancelled')

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Weapons Systems' }]} />

      <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mt-4 mb-2">
        US Weapons Systems
      </h1>
      <p className="text-stone-400 text-lg mb-6">
        {weapons.length} major programs · {fmtMoney(totalCost)} total cost · {cancelled.length} cancelled
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-red-400">{fmtMoney(totalCost)}</div><div className="text-xs text-stone-400">Total Program Costs</div></div>
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-white">{weapons.length}</div><div className="text-xs text-stone-400">Major Programs</div></div>
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-yellow-400">{weapons.filter(w => (w.costOverrun || 0) > 50).length}</div><div className="text-xs text-stone-400">50%+ Over Budget</div></div>
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-red-500">{cancelled.length}</div><div className="text-xs text-stone-400">Cancelled (Billions Wasted)</div></div>
      </div>

      {/* Most Expensive */}
      <h2 className="text-xl font-bold text-white mb-3">Most Expensive Programs</h2>
      <div className="space-y-2 mb-8">
        {weapons.sort((a, b) => (b.totalCost || 0) - (a.totalCost || 0)).slice(0, 10).map((w, i) => (
          <Link key={w.slug} href={`/weapons/${w.slug}`} className="flex items-center gap-4 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-lg p-4 transition-colors">
            <span className="text-stone-500 text-lg font-mono w-8">#{i + 1}</span>
            <div className="flex-1">
              <div className="text-white font-medium">{w.name}</div>
              <div className="text-stone-400 text-sm">{w.category} · {w.contractor} · {w.status}</div>
            </div>
            <div className="text-right">
              <div className="text-red-400 font-bold">{w.costBillions ? `$${w.costBillions}B` : '—'}</div>
              {w.costOverrun && <div className="text-yellow-400 text-xs">+{w.costOverrun}% overrun</div>}
            </div>
          </Link>
        ))}
      </div>

      {/* By Category */}
      <h2 className="text-xl font-bold text-white mb-3">By Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {categories.map(cat => {
          const catWeapons = weapons.filter(w => w.category === cat)
          return (
            <div key={cat} className="bg-stone-800 border border-stone-700 rounded-lg p-4">
              <h3 className="text-white font-bold mb-2">{cat} ({catWeapons.length})</h3>
              <div className="space-y-1">
                {catWeapons.map(w => (
                  <Link key={w.slug} href={`/weapons/${w.slug}`} className="flex justify-between text-sm hover:text-red-300">
                    <span className="text-stone-300">{w.name}</span>
                    <span className="text-red-400">{w.costBillions ? `$${w.costBillions}B` : '—'}</span>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold text-red-400 mb-2">The Procurement Machine</h2>
        <p className="text-stone-300 leading-relaxed">
          The Pentagon&apos;s weapons acquisition system is designed to spend money, not save it. Programs routinely exceed budgets by 50-200%,
          take decades longer than planned, and sometimes get cancelled after billions are spent. The military-industrial complex
          Eisenhower warned about has only grown more powerful.
        </p>
        <div className="flex gap-3 mt-3 flex-wrap">
          <Link href="/analysis/military-industrial-complex" className="text-red-400 hover:text-red-300 text-sm underline">Military-Industrial Complex →</Link>
          <Link href="/contractors" className="text-red-400 hover:text-red-300 text-sm underline">Defense Contractors →</Link>
          <Link href="/spending" className="text-red-400 hover:text-red-300 text-sm underline">Military Spending →</Link>
        </div>
      </div>

      <BackToTop />
    </main>
  )
}
