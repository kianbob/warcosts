'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

interface Conflict {
  name: string
  shortName?: string
  costInflationAdjusted: number
  usCasualties: { deaths: number }
  civilianDeaths: number | null
  startYear: number
  endYear: number | null
  computed: { durationYears: number }
}

export function AmericasWarsCharts({ conflicts }: { conflicts: Conflict[] }) {
  const topBySpending = [...conflicts]
    .filter(c => c.costInflationAdjusted > 0)
    .sort((a, b) => b.costInflationAdjusted - a.costInflationAdjusted)
    .slice(0, 15)
    .map(c => ({
      name: c.shortName || c.name,
      cost: Math.round(c.costInflationAdjusted / 1e9),
    }))

  const topByDeaths = [...conflicts]
    .filter(c => c.usCasualties.deaths > 0)
    .sort((a, b) => b.usCasualties.deaths - a.usCasualties.deaths)
    .slice(0, 15)
    .map(c => ({
      name: c.shortName || c.name,
      deaths: c.usCasualties.deaths,
    }))

  const fmt = (v: number) => {
    if (v >= 1000) return `${(v / 1000).toFixed(0)}K`
    return v.toLocaleString()
  }

  const fmtCost = (v: number) => `$${v}B`

  return (
    <div className="space-y-10 my-8">
      <div className="bg-stone-800 rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">
          Spending by Conflict (Inflation-Adjusted, $B)
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={topBySpending} layout="vertical" margin={{ left: 120, right: 20 }}>
            <XAxis type="number" tickFormatter={fmtCost} tick={{ fill: '#a8a29e', fontSize: 12 }} />
            <YAxis type="category" dataKey="name" tick={{ fill: '#d6d3d1', fontSize: 11 }} width={110} />
            <Tooltip formatter={(v) => [`$${v}B`, 'Cost']} contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c' }} />
            <Bar dataKey="cost" radius={[0, 4, 4, 0]}>
              {topBySpending.map((_, i) => (
                <Cell key={i} fill={i === 0 ? '#b91c1b' : '#991b1b'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-stone-800 rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">
          US Deaths by Conflict
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={topByDeaths} layout="vertical" margin={{ left: 120, right: 20 }}>
            <XAxis type="number" tickFormatter={fmt} tick={{ fill: '#a8a29e', fontSize: 12 }} />
            <YAxis type="category" dataKey="name" tick={{ fill: '#d6d3d1', fontSize: 11 }} width={110} />
            <Tooltip formatter={(v) => [Number(v).toLocaleString(), 'Deaths']} contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c' }} />
            <Bar dataKey="deaths" radius={[0, 4, 4, 0]}>
              {topByDeaths.map((_, i) => (
                <Cell key={i} fill={i === 0 ? '#dc2626' : '#991b1b'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
