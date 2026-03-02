'use client'
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const AXIS_TICK = { fontSize: 13 }
const tooltipStyle = {
  backgroundColor: '#fff',
  border: '1px solid #e7e5e4',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}

function DoDBreakdown({ data }: { data: { label: string; amount: number; pct: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 130 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tickFormatter={(v) => `$${v}B`} tick={AXIS_TICK} />
        <YAxis type="category" dataKey="label" tick={AXIS_TICK} width={120} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`$${v}B`, 'Amount']} />
        <Bar dataKey="amount" fill="#991b1b" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

function HistoricalTrend({ data }: { data: { year: number; amount: number; label: string }[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="year" tick={AXIS_TICK} />
        <YAxis tickFormatter={(v) => `$${v}B`} tick={AXIS_TICK} width={65} />
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(v) => [`$${v}B (2024$)`, 'Military Spending']}
          labelFormatter={(label) => `Year: ${label}`}
        />
        <Area type="monotone" dataKey="amount" stroke="#991b1b" fill="#991b1b" fillOpacity={0.3} strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

function GlobalComparison({ data }: { data: { country: string; amount: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="country" tick={{ fontSize: 11 }} angle={-30} textAnchor="end" height={70} />
        <YAxis tickFormatter={(v) => `$${v}B`} tick={AXIS_TICK} width={65} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`$${v}B`, 'Military Spending']} />
        <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
          {data.map((entry, i) => (
            <Cell key={entry.country} fill={i === 0 ? '#991b1b' : '#d6d3d1'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export const USMilitaryBudgetCharts = { DoDBreakdown, HistoricalTrend, GlobalComparison }
