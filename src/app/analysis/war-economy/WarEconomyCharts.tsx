'use client'

import { useEffect, useState } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend,
} from 'recharts'

interface SpendingEntry {
  year: number
  amount: number
  pctGdp: number
  president: string
}

export function WarEconomyCharts() {
  const [data, setData] = useState<SpendingEntry[]>([])

  useEffect(() => {
    fetch('/data/military-spending.json')
      .then(r => r.json())
      .then(setData)
      .catch(() => {})
  }, [])

  if (data.length === 0) return null

  const jobsData = [
    { sector: 'Education', jobs: 26700, fill: '#166534' },
    { sector: 'Healthcare', jobs: 17200, fill: '#1e40af' },
    { sector: 'Clean Energy', jobs: 16800, fill: '#15803d' },
    { sector: 'Infrastructure', jobs: 17000, fill: '#854d0e' },
    { sector: 'Military', jobs: 11200, fill: '#991b1b' },
  ]

  return (
    <div className="space-y-8 my-8">
      {/* Spending over time */}
      <div className="bg-stone-800 rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
          US Military Spending (1940–Present)
        </h3>
        <p className="text-stone-400 text-sm mb-4">Billions of 2023 dollars. Every spike = a war. The baseline never returns to pre-war levels.</p>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
            <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
            <YAxis stroke="#a8a29e" tickFormatter={(v: number) => `$${v}B`} tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
              formatter={(v: number) => [`$${v}B`, 'Spending']}
              labelFormatter={(l: string) => `Year: ${l}`}
            />
            <Area type="monotone" dataKey="amount" stroke="#991b1b" fill="#991b1b" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* % of GDP */}
      <div className="bg-stone-800 rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
          Military Spending as % of GDP
        </h3>
        <p className="text-stone-400 text-sm mb-4">WW2 peaked at 42% of GDP. The permanent war economy keeps it at 3–6% — orders of magnitude above pre-WW2 levels.</p>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
            <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
            <YAxis stroke="#a8a29e" tickFormatter={(v: number) => `${v}%`} tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
              formatter={(v: number) => [`${v}%`, '% of GDP']}
              labelFormatter={(l: string) => `Year: ${l}`}
            />
            <Area type="monotone" dataKey="pctGdp" stroke="#b91c1c" fill="#b91c1c" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Jobs per $1B */}
      <div className="bg-stone-800 rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
          Jobs Created per $1 Billion in Spending
        </h3>
        <p className="text-stone-400 text-sm mb-4">Military spending creates the fewest jobs per dollar of any major category of government spending. Source: UMass Amherst PERI.</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={jobsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
            <XAxis dataKey="sector" stroke="#a8a29e" tick={{ fontSize: 12 }} />
            <YAxis stroke="#a8a29e" tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
              formatter={(v: number) => [v.toLocaleString(), 'Jobs per $1B']}
            />
            <Bar dataKey="jobs" name="Jobs per $1B">
              {jobsData.map((entry, index) => (
                <rect key={index} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
