// @ts-nocheck
'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function PresidentSpendingChart({ data }: { data: { year: number; amount: number }[] }) {
  if (!data.length) return null
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Military Spending by Year (Billions)</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={v => `$${v}B`} />
          <Tooltip formatter={v => `$${Number(v).toFixed(1)}B`} />
          <Bar dataKey="amount" fill="#991b1b" name="Spending ($B)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
