import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Military Bases by State — 824 Domestic Installations | WarCosts',
  description: 'Browse 824 US military installations across 54 states and territories. See how many bases, camps, and training areas are in each state.',
  alternates: { canonical: 'https://www.warcosts.org/bases/states' },
}

interface StateSummary { state: string; code: string; slug: string; total: number; byComponent: Record<string, number> }

export default function BaseStatesPage() {
  const states = loadData('base-states.json') as StateSummary[]

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Bases', href: '/bases' }, { label: 'By State' }]} />

      <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mt-4 mb-2">
        Military Bases by State
      </h1>
      <p className="text-stone-400 text-lg mb-6">{fmt(states.reduce((s, x) => s + x.total, 0))} installations across {states.length} states &amp; territories</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {states.map((s, i) => (
          <Link key={s.slug} href={`/bases/states/${s.code?.toLowerCase() || s.slug}`} className="bg-white border border-stone-200 hover:bg-stone-700 border border-stone-700 rounded-lg p-4 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-stone-500 text-xs mr-2">#{i + 1}</span>
                <span className="text-white font-medium">{s.state}</span>
              </div>
              <span className="text-red-400 font-bold">{s.total}</span>
            </div>
            <div className="text-stone-400 text-xs mt-1">
              {Object.entries(s.byComponent).sort((a, b) => b[1] - a[1]).slice(0, 2).map(([c, n]) => `${c}: ${n}`).join(' · ')}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
