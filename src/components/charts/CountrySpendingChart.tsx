// @ts-nocheck
'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function CountrySpendingChart({ spending }: { spending: { year: number; amountBillions: number }[] }) {
  if (!spending?.length) return null
  return (
    <div className="bg-stone-800 rounded-xl border border-stone-700 p-6">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-white">Military Spending Over Time</h3>
      <p className="text-stone-400 text-sm mb-4">Constant 2023 USD (billions)</p>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={spending}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} tickFormatter={v => `$${v}B`} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', borderRadius: 8, color: '#fff' }}
            formatter={(v: number) => [`$${v.toFixed(1)}B`, 'Spending']}
            labelStyle={{ color: '#a8a29e' }}
          />
          <Line type="monotone" dataKey="amountBillions" stroke="#f87171" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function CountryGdpChart({ gdp }: { gdp: { year: number; pct: number }[] }) {
  if (!gdp?.length) return null
  return (
    <div className="bg-stone-800 rounded-xl border border-stone-700 p-6 mt-6">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-white">Military Spending as % of GDP</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={gdp}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} tickFormatter={v => `${v}%`} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', borderRadius: 8, color: '#fff' }}
            formatter={(v: number) => [`${v.toFixed(1)}%`, '% of GDP']}
            labelStyle={{ color: '#a8a29e' }}
          />
          <Line type="monotone" dataKey="pct" stroke="#dc2626" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
