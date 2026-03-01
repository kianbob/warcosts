// @ts-nocheck
'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const AXIS_TICK = { fontSize: 13 }
const CustomTooltipStyle = {
  backgroundColor: '#fff',
  border: '1px solid #e7e5e4',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}

export function PresidentSpendingChart({ data }: { data: { year: number; amount: number }[] }) {
  if (!data?.length) return null
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Military Spending by Year (Billions)</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis dataKey="year" tick={AXIS_TICK} />
          <YAxis tickFormatter={v => `$${v}B`} tick={AXIS_TICK} width={65} />
          <Tooltip
            contentStyle={CustomTooltipStyle}
            formatter={(v: number) => [`$${Number(v).toFixed(1)}B`, 'Military Spending']}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Bar dataKey="amount" fill="#991b1b" name="Spending ($B)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
