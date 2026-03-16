'use client'
import { BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const AXIS_TICK = { fontSize: 13 }
const tooltipStyle = {
  backgroundColor: '#fff',
  border: '1px solid #e7e5e4',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}

export function WarCostByYear({ data }: { data: { year: number; amount: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="year" tick={AXIS_TICK} />
        <YAxis tickFormatter={(v) => `$${v}M`} tick={AXIS_TICK} width={65} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`$${v}M (nominal)`, 'War Spending']} />
        <Bar dataKey="amount" fill="#991b1b" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function ContinentalDollarChart({ data }: { data: { year: number; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="year" tick={AXIS_TICK} />
        <YAxis tickFormatter={(v) => `$${v.toFixed(2)}`} tick={AXIS_TICK} width={55} domain={[0, 1]} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`$${Number(v).toFixed(3)}`, 'Value (vs $1.00 face)']} />
        <Area type="monotone" dataKey="value" stroke="#dc2626" fill="#dc2626" fillOpacity={0.2} strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function CostComparisonChart({ data }: { data: { war: string; cost: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, bottom: 5, left: 120 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tickFormatter={(v) => `$${v >= 1000 ? `${(v/1000).toFixed(1)}T` : `${v}B`}`} tick={AXIS_TICK} />
        <YAxis type="category" dataKey="war" tick={AXIS_TICK} width={120} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`$${Number(v).toLocaleString()}B (2026$)`, 'Total Cost']} />
        <Bar dataKey="cost" fill="#991b1b" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function BattleCasualtiesChart({ data }: { data: { name: string; american: number; british: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, bottom: 5, left: 130 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tick={AXIS_TICK} />
        <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={130} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="american" name="American Casualties" fill="#1e40af" radius={[0, 4, 4, 0]} />
        <Bar dataKey="british" name="British Casualties" fill="#dc2626" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
