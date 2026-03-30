// @ts-nocheck
'use client'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts'

const AXIS_TICK = { fontSize: 11 }
const TT_STYLE = { backgroundColor: '#fff', border: '1px solid #e7e5e4', borderRadius: '8px', padding: '8px 12px', fontSize: '13px' }

export function TailCostChart({ data }: { data: { year: number; low: number; high: number }[] }) {
  return (
    <div className="bg-white rounded-xl border p-4 my-6">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis dataKey="year" tick={AXIS_TICK} />
          <YAxis tickFormatter={(v) => `$${v}B`} tick={AXIS_TICK} width={65} />
          <Tooltip contentStyle={TT_STYLE} formatter={(v: number) => `$${v}B/yr`} />
          <Legend />
          <Area type="monotone" dataKey="high" name="High Estimate" stroke="#991b1b" fill="#dc2626" fillOpacity={0.15} />
          <Area type="monotone" dataKey="low" name="Low Estimate" stroke="#b91c1c" fill="#ef4444" fillOpacity={0.25} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
