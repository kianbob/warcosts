import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

interface Weapon {
  name: string; slug: string; category: string; service?: string; contractor?: string; manufacturer?: string;
  unitCost: number | null; totalCost: number | null; costOverrun: number | null;
  units: number | null; delivered: number | null; description: string; lifetimeCost?: string;
  status: string; startYear: number; iocYear: number | null; notes: string;
  costBillions: number | null; unitCostLabel?: string; costOverrunLabel?: string;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const weapons = loadData('weapons.json') as Weapon[]
  const w = weapons.find(x => x.slug === slug)
  if (!w) return { title: 'Weapon Not Found — WarCosts' }
  return {
    title: `${w.name} — ${w.costBillions ? '$' + w.costBillions + 'B' : ''} ${w.category} | WarCosts`,
    description: w.description,
    alternates: { canonical: `https://www.warcosts.org/weapons/${slug}` },
  }
}

export function generateStaticParams() {
  return []
}

const statusColors: Record<string, string> = {
  'Active': 'text-green-400', 'In Production': 'text-blue-400', 'Development': 'text-yellow-400',
  'Cancelled': 'text-red-500', 'Active (Retiring)': 'text-orange-400', 'Active/Upgrading': 'text-green-400',
  'Active (Decommissioning)': 'text-orange-400', 'Grounded (2024)': 'text-red-400', 'Low-Rate Production': 'text-blue-300',
}

export default async function WeaponDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const weapons = loadData('weapons.json') as Weapon[]
  const w = weapons.find(x => x.slug === slug)
  if (!w) notFound()

  const devYears = w.startYear ? (w.iocYear ? w.iocYear - w.startYear : new Date().getFullYear() - w.startYear) : null
  const deliveryPct = w.units && w.delivered ? Math.round((w.delivered / w.units) * 100) : null
  const related = weapons.filter(x => x.slug !== slug && (x.category === w.category || x.contractor === w.contractor)).slice(0, 6)

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Weapons', href: '/weapons' }, { label: w.name }]} />

      <div className="flex items-start justify-between mt-4 mb-2">
        <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
          {w.name}
        </h1>
        <span className={`text-sm font-bold px-3 py-1 rounded-full border ${w.status === 'Cancelled' ? 'bg-red-900/30 border-red-700 text-red-400' : 'bg-stone-800 border-stone-700 ' + (statusColors[w.status] || 'text-white')}`}>
          {w.status}
        </span>
      </div>

      <p className="text-stone-400 text-lg mb-6">{w.category} · {w.service || "Multiple"} · {w.contractor || w.manufacturer || "Unknown"}</p>

      <p className="text-stone-300 leading-relaxed text-lg mb-6">{w.description}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {w.totalCost && (
          <div className="bg-stone-800 border border-stone-700 rounded-lg p-4">
            <div className="text-xs text-stone-400 uppercase tracking-wider">Total Cost</div>
            <div className="text-2xl font-bold text-red-400">{w.lifetimeCost || fmtMoney(w.totalCost * 1e6)}</div>
          </div>
        )}
        {w.unitCostLabel && (
          <div className="bg-stone-800 border border-stone-700 rounded-lg p-4">
            <div className="text-xs text-stone-400 uppercase tracking-wider">Unit Cost</div>
            <div className="text-2xl font-bold text-white">{w.unitCostLabel}</div>
          </div>
        )}
        {w.costOverrun && (
          <div className="bg-stone-800 border border-stone-700 rounded-lg p-4">
            <div className="text-xs text-stone-400 uppercase tracking-wider">Cost Overrun</div>
            <div className="text-2xl font-bold text-yellow-400">+{w.costOverrun}%</div>
          </div>
        )}
        {devYears != null && (
          <div className="bg-stone-800 border border-stone-700 rounded-lg p-4">
            <div className="text-xs text-stone-400 uppercase tracking-wider">Development</div>
            <div className="text-2xl font-bold text-white">{devYears} years</div>
          </div>
        )}
        {w.units && (
          <div className="bg-stone-800 border border-stone-700 rounded-lg p-4">
            <div className="text-xs text-stone-400 uppercase tracking-wider">Planned Units</div>
            <div className="text-2xl font-bold text-white">{fmt(w.units)}</div>
          </div>
        )}
        {w.delivered != null && (
          <div className="bg-stone-800 border border-stone-700 rounded-lg p-4">
            <div className="text-xs text-stone-400 uppercase tracking-wider">Delivered</div>
            <div className="text-2xl font-bold text-green-400">{fmt(w.delivered)}</div>
          </div>
        )}
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4">
          <div className="text-xs text-stone-400 uppercase tracking-wider">Start Year</div>
          <div className="text-2xl font-bold text-white">{w.startYear}</div>
        </div>
        {w.iocYear && (
          <div className="bg-stone-800 border border-stone-700 rounded-lg p-4">
            <div className="text-xs text-stone-400 uppercase tracking-wider">IOC Year</div>
            <div className="text-2xl font-bold text-white">{w.iocYear}</div>
          </div>
        )}
      </div>

      {deliveryPct !== null && (
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-stone-400">Delivery Progress</span>
            <span className="text-white">{deliveryPct}% ({fmt(w.delivered!)} / {fmt(w.units!)})</span>
          </div>
          <div className="bg-stone-800 rounded-full h-4 overflow-hidden">
            <div className="bg-red-600 h-full rounded-full transition-all" style={{ width: `${deliveryPct}%` }} />
          </div>
        </div>
      )}

      {w.notes && (
        <div className="bg-stone-800/50 border border-stone-700 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-2">Key Details</h2>
          <p className="text-stone-300 leading-relaxed">{w.notes}</p>
        </div>
      )}

      {w.costOverrun && w.costOverrun > 50 && (
        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-red-400 mb-2">💸 Taxpayer Alert: {w.costOverrun}% Over Budget</h2>
          <p className="text-stone-300 leading-relaxed">
            The {w.name} program has exceeded its original budget by {w.costOverrun}%.
            {w.totalCost && ` At ${fmtMoney(w.totalCost * 1e6)}, this represents billions in cost growth that could have funded schools, healthcare, or infrastructure.`}
            {' '}This is a pattern across Pentagon weapons programs — the military-industrial complex has little incentive to control costs.
          </p>
          <Link href="/analysis/military-industrial-complex" className="text-red-400 hover:text-red-300 text-sm underline mt-2 inline-block">
            Why Does This Keep Happening? →
          </Link>
        </div>
      )}

      {w.status === 'Cancelled' && (
        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-red-400 mb-2">🗑️ Cancelled Program</h2>
          <p className="text-stone-300 leading-relaxed">
            The {w.name} was cancelled after {w.totalCost ? fmtMoney(w.totalCost * 1e6) : 'billions'} in taxpayer money was spent.
            {w.delivered === 0 && ' Not a single operational unit was delivered.'}
            {' '}This money is gone — it cannot be recovered. The Pentagon has a long history of starting ambitious weapons programs
            that never deliver, enriching contractors while delivering nothing to the warfighter.
          </p>
        </div>
      )}

      {/* Opportunity Cost */}
      {w.totalCost && (
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">What Else Could {fmtMoney(w.totalCost * 1e6)} Buy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="text-stone-300">🏫 {fmt(Math.round(w.totalCost / 15))} new public schools</div>
            <div className="text-stone-300">🏥 {fmt(Math.round(w.totalCost / 500))} community hospitals</div>
            <div className="text-stone-300">🎓 {fmt(Math.round(w.totalCost * 1e6 / 35000))} four-year college scholarships</div>
            <div className="text-stone-300">🌉 {fmt(Math.round(w.totalCost / 300))} bridge replacements</div>
          </div>
          <Link href="/opportunity-cost" className="text-red-400 hover:text-red-300 text-sm underline mt-3 inline-block">
            Explore Full Opportunity Cost →
          </Link>
        </div>
      )}

      {related.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Related Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {related.map(r => (
              <Link key={r.slug} href={`/weapons/${r.slug}`} className="bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-lg p-3 transition-colors">
                <div className="text-white font-medium">{r.name}</div>
                <div className="text-stone-400 text-sm">{r.category} · {r.contractor || r.manufacturer || "Unknown"} · {r.costBillions ? `$${r.costBillions}B` : '—'}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3 mb-8 text-sm">
        <Link href="/weapons" className="text-red-400 hover:text-red-300">← All Weapons Systems</Link>
        <Link href="/contractors" className="text-red-400 hover:text-red-300">Defense Contractors</Link>
        <Link href="/spending" className="text-red-400 hover:text-red-300">Military Spending</Link>
        <Link href="/analysis/military-industrial-complex" className="text-red-400 hover:text-red-300">Military-Industrial Complex</Link>
      </div>

      <ShareButtons title={`${w.name} — ${w.costBillions ? '$' + w.costBillions + 'B' : ''} Weapons Program`} />
      <BackToTop />
    </main>
  )
}
