// @ts-nocheck
'use client'

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'

interface ArsenalEntry {
  year: number
  us: number
  ussr: number
  total: number
}

export function NuclearTimeline({ arsenalData }: { arsenalData: ArsenalEntry[] }) {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Global Nuclear Arsenal (1945–Present)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Peak: 63,476 warheads in 1986. Still ~12,500 today — enough to destroy civilization multiple times over.
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={arsenalData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : `${v}`} tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v: number) => [v.toLocaleString(), '']}
            labelFormatter={(l: string) => `Year: ${l}`}
          />
          <Legend />
          <Area type="monotone" dataKey="us" name="United States" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} stackId="1" />
          <Area type="monotone" dataKey="ussr" name="Soviet Union / Russia" stroke="#991b1b" fill="#991b1b" fillOpacity={0.3} stackId="1" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
