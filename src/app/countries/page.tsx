import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Countries — US Military Involvement Worldwide',
  description: 'Every country with US military involvement: wars, foreign aid, arms sales, and troop deployments.',
}

export default function CountriesPage() {
  const conflicts = loadData('conflicts.json')
  const aid = loadData('foreign-aid.json')
  const arms = loadData('arms-sales.json')
  const presence = loadData('overseas-presence.json')

  const countryMap: Record<string, { conflicts: number; aid: number; arms: number; troops: number }> = {}
  const ensure = (c: string) => { if (!countryMap[c]) countryMap[c] = { conflicts: 0, aid: 0, arms: 0, troops: 0 } }

  conflicts.forEach((c: any) => c.countries?.forEach((co: string) => { ensure(co); countryMap[co].conflicts++ }))
  aid.topRecipients?.forEach((r: any) => { ensure(r.country); countryMap[r.country].aid = r.totalSince2001 })
  arms.topBuyers?.forEach((b: any) => { ensure(b.country); countryMap[b.country].arms = b.total })
  presence.topDeployments?.forEach((d: any) => { ensure(d.country); countryMap[d.country].troops = d.troops })

  const sorted = Object.entries(countryMap).sort((a, b) => {
    const scoreA = a[1].conflicts * 1e12 + a[1].aid + a[1].arms + a[1].troops * 1e6
    const scoreB = b[1].conflicts * 1e12 + b[1].aid + b[1].arms + b[1].troops * 1e6
    return scoreB - scoreA
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Countries' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Military Involvement by Country</h1>
      <p className="text-stone-500 mb-8 max-w-3xl">{sorted.length} countries with documented US military involvement through wars, foreign aid, arms sales, or troop deployments.</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-stone-300 text-left">
              <th className="py-3 pr-4">Country</th>
              <th className="py-3 pr-4 text-right">Conflicts</th>
              <th className="py-3 pr-4 text-right">Aid Received</th>
              <th className="py-3 pr-4 text-right">Arms Sold</th>
              <th className="py-3 text-right">Troops</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(([country, data]) => (
              <tr key={country} className="border-b border-stone-200 hover:bg-stone-50">
                <td className="py-3 pr-4">
                  <Link href={`/countries/${slugify(country)}`} className="font-medium text-primary hover:underline">{country}</Link>
                </td>
                <td className="py-3 pr-4 text-right">{data.conflicts || '—'}</td>
                <td className="py-3 pr-4 text-right">{data.aid ? fmtMoney(data.aid) : '—'}</td>
                <td className="py-3 pr-4 text-right">{data.arms ? fmtMoney(data.arms) : '—'}</td>
                <td className="py-3 text-right">{data.troops ? fmt(data.troops) : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
