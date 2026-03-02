'use client'
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const AXIS_TICK = { fontSize: 13 }
const tooltipStyle = {
  backgroundColor: '#fff',
  border: '1px solid #e7e5e4',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}

function YearlySpending({ data }: { data: { year: number; amount: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="year" tick={AXIS_TICK} />
        <YAxis tickFormatter={(v) => `$${v}B`} tick={AXIS_TICK} width={65} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`$${v}B`, 'Iraq War Spending']} />
        <Bar dataKey="amount" fill="#991b1b" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

function CasualtiesByYear({ data }: { data: { year: number; us: number; iraqi: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="year" tick={AXIS_TICK} />
        <YAxis tickFormatter={(v) => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v)} tick={AXIS_TICK} width={50} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v) => [Number(v).toLocaleString(), '']} />
        <Legend />
        <Bar dataKey="us" name="US Military Deaths" fill="#991b1b" radius={[4, 4, 0, 0]} />
        <Bar dataKey="iraqi" name="Iraqi Civilian Deaths (est.)" fill="#d6d3d1" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export { YearlySpending, CasualtiesByYear }
