'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const AXIS_TICK = { fontSize: 13 }
const tooltipStyle = {
  backgroundColor: '#fff',
  border: '1px solid #e7e5e4',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}

export function CasualtiesByNation({ data }: { data: { nation: string; military: number; civilian: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tickFormatter={(v) => `${v}K`} tick={AXIS_TICK} />
        <YAxis type="category" dataKey="nation" tick={AXIS_TICK} width={80} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}K`, '']} />
        <Bar dataKey="military" fill="#991b1b" name="Military Deaths (K)" stackId="a" />
        <Bar dataKey="civilian" fill="#57534e" name="Civilian Deaths (K)" stackId="a" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function USMonthlyCasualties({ data }: { data: { month: string; casualties: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="month" tick={AXIS_TICK} />
        <YAxis tick={AXIS_TICK} width={65} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [v.toLocaleString(), 'US Deaths']} />
        <Bar dataKey="casualties" fill="#991b1b" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
