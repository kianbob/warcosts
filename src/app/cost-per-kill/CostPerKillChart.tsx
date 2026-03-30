// @ts-nocheck
'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const AXIS_TICK = { fontSize: 11 }
const TT_STYLE = { backgroundColor: '#fff', border: '1px solid #e7e5e4', borderRadius: '8px', padding: '8px 12px', fontSize: '13px' }

function fmtMoney(v: number) {
  if (v >= 1e6) return `$${(v / 1e6).toFixed(1)}M`
  if (v >= 1e3) return `$${(v / 1e3).toFixed(0)}K`
  return `$${v}`
}

export function CostPerKillChart({ data }: { data: { war: string; costPerKill: number }[] }) {
  return (
    <div className="bg-white rounded-xl border p-4 my-6">
      <ResponsiveContainer width="100%" height={420}>
        <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis dataKey="war" tick={AXIS_TICK} angle={-35} textAnchor="end" height={100} />
          <YAxis tickFormatter={fmtMoney} tick={AXIS_TICK} width={70} />
          <Tooltip contentStyle={TT_STYLE} formatter={(v: number) => fmtMoney(v)} labelStyle={{ fontWeight: 'bold' }} />
          <Bar dataKey="costPerKill" name="Cost Per Kill" fill="#dc2626" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
