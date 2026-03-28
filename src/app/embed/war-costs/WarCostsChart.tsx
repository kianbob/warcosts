'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

interface ConflictCost {
  name: string
  cost: number
}

export default function WarCostsChart({ data }: { data: ConflictCost[] }) {
  return (
    <div className="relative w-full h-screen min-h-[400px] bg-white p-4">
      <h2 className="text-lg font-bold text-gray-900 mb-2 text-center">Top 10 Costliest US Wars</h2>
      <p className="text-xs text-gray-500 text-center mb-4">Inflation-adjusted cost in billions (2023 dollars)</p>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 120, bottom: 5 }}>
          <XAxis type="number" tick={{ fontSize: 11, fill: '#6b7280' }} tickFormatter={(v: number) => `$${(v / 1e9).toFixed(0)}B`} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#374151' }} width={110} />
          <Tooltip formatter={(value: any) => [`$${(value / 1e9).toFixed(1)}B`, 'Cost']} />
          <Bar dataKey="cost" radius={[0, 4, 4, 0]}>
            {data.map((_, i) => (
              <Cell key={i} fill="#dc2626" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="absolute bottom-2 right-4 text-[10px] text-gray-400">warcosts.org</p>
    </div>
  )
}
