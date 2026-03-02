// @ts-nocheck
'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const AXIS_TICK = { fontSize: 11 }

export function WarPowersTimeline({ data }: { data: { name: string; year: number; type: string }[] }) {
  if (!data?.length) return null
  const mapped = data.map(d => ({
    ...d,
    value: 1,
    color: d.type === 'declared' ? '#16a34a' : d.type === 'aumf' ? '#d97706' : '#991b1b',
  }))
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={mapped} margin={{ top: 5, right: 20, bottom: 60, left: 10 }}>
        <XAxis dataKey="year" tick={AXIS_TICK} angle={-45} textAnchor="end" />
        <YAxis hide />
        <Tooltip
          contentStyle={{ backgroundColor: '#fff', border: '1px solid #e7e5e4', borderRadius: '8px', padding: '8px 12px', fontSize: '13px' }}
          formatter={(v) => ''}
          labelFormatter={(label) => {
            const item = mapped.find(d => d.year === label)
            return item ? `${item.name} (${item.year}) — ${item.type}` : String(label)
          }}
        />
        <Bar dataKey="value">
          {mapped.map((entry, i) => (
            <Cell key={i} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
