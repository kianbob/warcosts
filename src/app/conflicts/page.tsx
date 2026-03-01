import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'All US Wars & Military Conflicts',
  description: 'Complete database of every American war, military intervention, and covert operation from 1775 to present. Costs, casualties, and outcomes.',
}

export default function ConflictsPage() {
  const conflicts = loadData('conflicts.json')

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'All Conflicts' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">All US Wars & Conflicts</h1>
      <p className="text-muted mb-6">28 conflicts spanning 248 years of American military history.</p>
      <ShareButtons title="All US Wars & Military Conflicts" />

      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-stone-300 text-left">
              <th className="py-3 pr-4">Conflict</th>
              <th className="py-3 pr-4">Years</th>
              <th className="py-3 pr-4">Era</th>
              <th className="py-3 pr-4 text-right">Cost (2023 $)</th>
              <th className="py-3 pr-4 text-right">US Deaths</th>
              <th className="py-3 pr-4 text-right">Civilian Deaths</th>
              <th className="py-3 pr-4">Outcome</th>
              <th className="py-3">Auth?</th>
            </tr>
          </thead>
          <tbody>
            {conflicts.map((c: any) => (
              <tr key={c.id} className="border-b border-stone-200 hover:bg-stone-50">
                <td className="py-3 pr-4">
                  <Link href={`/conflicts/${c.id}`} className="text-primary font-semibold hover:underline">
                    {c.shortName || c.name}
                  </Link>
                </td>
                <td className="py-3 pr-4 text-muted font-mono text-xs">{c.startYear}–{c.endYear}</td>
                <td className="py-3 pr-4 text-muted text-xs">{c.era}</td>
                <td className="py-3 pr-4 text-right font-semibold">{fmtMoney(c.costInflationAdjusted)}</td>
                <td className="py-3 pr-4 text-right">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) : '—'}</td>
                <td className="py-3 pr-4 text-right">{c.civilianDeaths ? fmt(c.civilianDeaths) : '—'}</td>
                <td className="py-3 pr-4">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    c.outcome?.includes('Victory') ? 'bg-green-100 text-green-700' :
                    c.outcome?.includes('Defeat') ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>{c.outcome}</span>
                </td>
                <td className="py-3">{c.congressionalAuth ? '✅' : '❌'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
