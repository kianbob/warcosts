'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

interface WarDeaths {
  name: string
  deaths: number
}

export default function DeathsByWarChart({ data }: { data: WarDeaths[] }) {
  return (
    <div className="relative w-full h-screen min-h-[400px] bg-white p-4">
      <h2 className="text-lg font-bold text-gray-900 mb-2 text-center">US Deaths by War (Top 10)</h2>
      <p className="text-xs text-gray-500 text-center mb-4">Total US military deaths</p>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 120, bottom: 5 }}>
          <XAxis type="number" tick={{ fontSize: 11, fill: '#6b7280' }} tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v)} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#374151' }} width={110} />
          <Tooltip formatter={(value: any) => [value.toLocaleString(), 'Deaths']} />
          <Bar dataKey="deaths" radius={[0, 4, 4, 0]}>
            {data.map((_, i) => (
              <Cell key={i} fill="#991b1b" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="absolute bottom-2 right-4 text-[10px] text-gray-400">warcosts.org</p>
    </div>
  )
}
