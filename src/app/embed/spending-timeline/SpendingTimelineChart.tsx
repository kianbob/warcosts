'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface YearData {
  year: number
  amountBillions: number
  war?: string
  president: string
}

export default function SpendingTimelineChart({ data }: { data: YearData[] }) {
  return (
    <div className="relative w-full h-screen min-h-[400px] bg-white p-4">
      <h2 className="text-lg font-bold text-gray-900 mb-2 text-center">US Military Spending Over Time</h2>
      <p className="text-xs text-gray-500 text-center mb-4">Inflation-adjusted, in billions (2023 dollars)</p>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#6b7280' }} />
          <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} tickFormatter={(v: number) => `$${v}B`} />
          <Tooltip
            formatter={(value: any) => [`$${value.toFixed(1)}B`, 'Spending']}
            labelFormatter={(label: any) => `Year: ${label}`}
          />
          <Area type="monotone" dataKey="amountBillions" stroke="#dc2626" fill="#1e3a5f" fillOpacity={0.7} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
      <p className="absolute bottom-2 right-4 text-[10px] text-gray-400">warcosts.org</p>
    </div>
  )
}
