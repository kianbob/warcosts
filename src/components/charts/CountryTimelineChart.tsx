// @ts-nocheck
'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function CountryTimelineChart({ conflicts }: { conflicts: any[] }) {
  if (!conflicts.length) return null
  const data = conflicts.map(c => ({
    name: c.shortName || c.name,
    start: c.startYear,
    duration: c.endYear - c.startYear || 1,
    cost: c.costInflationAdjusted / 1e9,
  }))
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">US Conflicts Involving This Country</h3>
      <ResponsiveContainer width="100%" height={Math.max(200, conflicts.length * 60)}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickFormatter={v => `$${Number(v).toFixed(1)}B`} />
          <YAxis dataKey="name" type="category" width={160} tick={{ fontSize: 12 }} />
          <Tooltip formatter={v => `$${Number(v).toFixed(1)}B`} />
          <Bar dataKey="cost" fill="#991b1b" name="Cost ($B)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
