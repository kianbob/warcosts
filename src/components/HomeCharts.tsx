// @ts-nocheck
'use client'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const CustomTooltipStyle = {
  backgroundColor: '#fff',
  border: '1px solid #e7e5e4',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}

export function HomeSpendingChart({ data }: { data: any[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <defs>
          <linearGradient id="homeSpendGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#dc2626" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#dc2626" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#9ca3af' }} />
        <YAxis tickFormatter={v => `$${v}B`} tick={{ fontSize: 12, fill: '#9ca3af' }} width={65} />
        <Tooltip
          contentStyle={{ ...CustomTooltipStyle, backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#e7e5e4' }}
          formatter={(v: number) => [`$${Number(v).toFixed(1)}B`, 'Military Spending']}
          labelFormatter={(label) => `Year: ${label}`}
        />
        <Area type="monotone" dataKey="amountBillions" stroke="#dc2626" fill="url(#homeSpendGrad)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}
