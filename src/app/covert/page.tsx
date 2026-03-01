import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'US Covert Operations & Regime Changes',
  description: 'CIA coups, covert operations, and secret wars — from Iran 1953 to the global drone campaign. The hidden costs of empire.',
}

export default function CovertPage() {
  const conflicts = loadData('conflicts.json')
  const covert = conflicts.filter((c: any) => c.type === 'covert_operation' || c.type === 'coup')

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Covert Operations' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Covert Operations</h1>
      <p className="text-muted mb-6">Secret wars, CIA coups, and covert campaigns — none authorized by Congress, most hidden from the American public.</p>
      <ShareButtons title="US Covert Operations" />

      <div className="space-y-6 mt-8">
        {covert.map((c: any) => (
          <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-lg border p-6 hover:shadow-md transition">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">{c.name}</h2>
              <span className="text-sm text-muted">{c.startYear}{c.endYear !== c.startYear ? `–${c.endYear}` : ''}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">No Authorization</span>
            </div>
            <p className="text-muted mb-3">{c.description}</p>
            <div className="flex gap-6 text-sm">
              <span><strong className="text-primary">{fmtMoney(c.costInflationAdjusted)}</strong> cost</span>
              {c.civilianDeaths > 0 && <span><strong className="text-primary">{fmt(c.civilianDeaths)}</strong> civilian deaths</span>}
              <span>Outcome: <strong>{c.outcome}</strong></span>
            </div>
            {c.libertarianNote && <p className="text-sm italic text-muted mt-3">{c.libertarianNote}</p>}
          </Link>
        ))}
      </div>
    </div>
  )
}
