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

export function CumulativeCost({ data }: { data: { year: number; cumulative: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="year" tick={AXIS_TICK} />
        <YAxis tickFormatter={(v) => `$${v}T`} tick={AXIS_TICK} width={65} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v}T`, 'Cumulative Cost']} />
        <Area type="monotone" dataKey="cumulative" stroke="#991b1b" fill="#991b1b" fillOpacity={0.2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function CostByConflict({ data }: { data: { conflict: string; cost: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tickFormatter={(v) => `$${v}T`} tick={AXIS_TICK} />
        <YAxis type="category" dataKey="conflict" tick={AXIS_TICK} width={120} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v}T`, 'Total Cost']} />
        <Bar dataKey="cost" fill="#991b1b" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function AnnualSpending({ data }: { data: { year: number; afghanistan: number; iraq: number; other: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="year" tick={AXIS_TICK} />
        <YAxis tickFormatter={(v) => `$${v}B`} tick={AXIS_TICK} width={65} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v}B`, '']} />
        <Legend />
        <Bar dataKey="afghanistan" fill="#991b1b" name="Afghanistan" stackId="a" />
        <Bar dataKey="iraq" fill="#dc2626" name="Iraq" stackId="a" />
        <Bar dataKey="other" fill="#57534e" name="Other GWOT" stackId="a" />
      </BarChart>
    </ResponsiveContainer>
  )
}
