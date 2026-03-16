'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const AXIS_TICK = { fontSize: 13 }
const tooltipStyle = {
  backgroundColor: '#fff',
  border: '1px solid #e7e5e4',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}

const COLORS = ['#991b1b', '#dc2626', '#ef4444', '#b91c1c', '#7f1d1d', '#450a0a', '#57534e', '#78716c']

export function CostByCountry({ data }: { data: { country: string; amount: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tickFormatter={(v) => `$${v}B`} tick={AXIS_TICK} />
        <YAxis type="category" dataKey="country" tick={AXIS_TICK} width={100} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number | undefined) => [`$${v}B`, 'Contribution']} />
        <Bar dataKey="amount" fill="#991b1b" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function ForceComposition({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" outerRadius={120} dataKey="value" label={({ name, value }) => `${name}: ${value}K`}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number | undefined) => [`${v}K troops`, '']} />
      </PieChart>
    </ResponsiveContainer>
  )
}
