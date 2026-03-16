// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell,
} from 'recharts'

export function CostOverrunChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white rounded-xl border p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Original Budget vs Actual Cost (Top Programs)</h3>
      <p className="text-stone-500 text-sm mb-4">Pentagon weapons programs routinely exceed original estimates by 50-600%.</p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} layout="vertical" margin={{ left: 120 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v: number) => v >= 1000 ? `$${(v / 1000).toFixed(0)}T` : `$${v}B`} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={120} />
          <Tooltip formatter={(v: number) => [`$${v}B`, '']} />
          <Legend />
          <Bar dataKey="originalBudgetBillions" name="Original Estimate" fill="#78716c" />
          <Bar dataKey="currentCostBillions" name="Current Cost" fill="#dc2626" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-xs mt-2">Source: GAO Selected Acquisition Reports, CBO, DOD budget documents</p>
    </div>
  )
}

export function OverrunPercentChart({ data }: { data: any[] }) {
  const sorted = [...data].filter(d => d.costOverrunPct).sort((a, b) => b.costOverrunPct - a.costOverrunPct)
  return (
    <div className="bg-white rounded-xl border p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Cost Overrun Percentage</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={sorted} layout="vertical" margin={{ left: 140 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v: number) => `${v}%`} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={140} />
          <Tooltip formatter={(v: number) => [`${v}%`, 'Cost Overrun']} />
          <Bar dataKey="costOverrunPct" fill="#dc2626">
            {sorted.map((entry, i) => (
              <Cell key={i} fill={entry.costOverrunPct > 100 ? '#dc2626' : entry.costOverrunPct > 50 ? '#ea580c' : '#f59e0b'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
