import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'US Sanctions Regimes — Economic Warfare',
  description: 'Overview of 8 major US sanctions programs targeting Iran, Russia, China, North Korea, Cuba, Venezuela, Syria, and Myanmar. Costs, impacts, and effectiveness.',
  openGraph: {
    title: 'US Sanctions Regimes — Economic Warfare',
    description: '8 US sanctions programs: the costs, impacts, and unintended consequences of economic warfare.',
  },
}

interface Sanction {
  name: string
  slug: string
  target: string
  startYear: number
  status: string
  estimatedCost: number
  description: string
  impact: string
  keyFact: string
}

export default function SanctionsPage() {
  const sanctions: Sanction[] = loadData('sanctions.json')
  const totalCost = sanctions.reduce((s, r) => s + r.estimatedCost, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'US Sanctions' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Sanctions Regimes</h1>
      <p className="text-stone-300 mb-6">Economic warfare as foreign policy. {sanctions.length} active sanctions programs costing an estimated {fmtMoney(totalCost * 1_000_000)} in economic impact — with mixed results.</p>
      <ShareButtons title="US Sanctions Regimes — Economic Warfare" />

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        <div className="bg-stone-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{sanctions.length}</div>
          <div className="text-stone-400 text-sm">Sanctions Programs</div>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{fmtMoney(totalCost * 1_000_000)}</div>
          <div className="text-stone-400 text-sm">Est. Economic Impact</div>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{Math.max(...sanctions.map(s => new Date().getFullYear() - s.startYear))}+</div>
          <div className="text-stone-400 text-sm">Longest Active (Years)</div>
        </div>
      </div>

      {/* Sanctions cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {sanctions.map((s) => (
          <Link key={s.slug} href={`/sanctions/${s.slug}`} className="group block">
            <div className="bg-stone-800 rounded-lg p-5 hover:bg-stone-700 transition-colors h-full">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold group-hover:text-red-400 transition-colors">{s.name}</h2>
                <span className="text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded">{s.status}</span>
              </div>
              <div className="flex gap-4 text-sm text-stone-400 mb-3">
                <span>Target: {s.target}</span>
                <span>Since {s.startYear}</span>
                <span>~{fmtMoney(s.estimatedCost * 1_000_000)} impact</span>
              </div>
              <p className="text-stone-300 text-sm line-clamp-3">{s.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <BackToTop />
    </div>
  )
}
