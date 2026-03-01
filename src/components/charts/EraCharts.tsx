// @ts-nocheck
'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export function EraCharts({ conflicts }: { conflicts: any[] }) {
  const costData = conflicts.map(c => ({
    name: c.shortName || c.name,
    cost: c.costInflationAdjusted / 1e9,
  }))

  const deathData = conflicts.map(c => ({
    name: c.shortName || c.name,
    usDeaths: c.usCasualties?.deaths || 0,
    civilianDeaths: c.civilianDeaths || 0,
  }))

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl border p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Cost by Conflict (Billions, 2023 $)</h3>
        <ResponsiveContainer width="100%" height={Math.max(300, conflicts.length * 50)}>
          <BarChart data={costData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tickFormatter={v => `$${v}B`} />
            <YAxis dataKey="name" type="category" width={140} tick={{ fontSize: 12 }} />
            <Tooltip formatter={v => `$${Number(v).toFixed(1)}B`} />
            <Bar dataKey="cost" fill="#991b1b" name="Cost" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl border p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Deaths by Conflict</h3>
        <ResponsiveContainer width="100%" height={Math.max(300, conflicts.length * 50)}>
          <BarChart data={deathData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tickFormatter={v => v >= 1e6 ? `${(v/1e6).toFixed(1)}M` : v >= 1e3 ? `${(v/1e3).toFixed(0)}K` : v} />
            <YAxis dataKey="name" type="category" width={140} tick={{ fontSize: 12 }} />
            <Tooltip formatter={v => Number(v).toLocaleString()} />
            <Legend />
            <Bar dataKey="usDeaths" fill="#991b1b" name="US Deaths" />
            <Bar dataKey="civilianDeaths" fill="#78716c" name="Civilian Deaths" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
