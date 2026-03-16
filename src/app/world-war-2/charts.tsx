'use client'
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const AXIS_TICK = { fontSize: 13 }
const tooltipStyle = {
  backgroundColor: '#fff',
  border: '1px solid #e7e5e4',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}

export function YearlySpending({ data }: { data: { year: number; amount: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="year" tick={AXIS_TICK} />
        <YAxis tickFormatter={(v) => `$${v}B`} tick={AXIS_TICK} width={65} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v}B`, 'WWII Spending (2023 $)']} />
        <Bar dataKey="amount" fill="#991b1b" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function TroopLevels({ data }: { data: { year: number; troops: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="year" tick={AXIS_TICK} />
        <YAxis tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} tick={AXIS_TICK} width={65} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [(v / 1000000).toFixed(2) + 'M', 'Active Military']} />
        <Area type="monotone" dataKey="troops" stroke="#991b1b" fill="#991b1b" fillOpacity={0.2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function CasualtiesByTheater({ data }: { data: { theater: string; deaths: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tickFormatter={(v) => `${v}K`} tick={AXIS_TICK} />
        <YAxis type="category" dataKey="theater" tick={AXIS_TICK} width={100} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}K deaths`, '']} />
        <Bar dataKey="deaths" fill="#991b1b" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
