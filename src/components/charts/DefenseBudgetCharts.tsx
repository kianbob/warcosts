// @ts-nocheck
'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

const TT_STYLE = { backgroundColor: '#fff', border: '1px solid #e7e5e4', borderRadius: '8px', padding: '8px 12px', fontSize: '13px' }
const AXIS_TICK = { fontSize: 12 }

const COLORS = ['#991b1b', '#b91c1c', '#dc2626', '#ef4444', '#f87171', '#450a0a', '#78716c', '#a8a29e']

function fmtB(v) {
  if (v >= 1000) return `$${(v / 1000).toFixed(1).replace(/\.0$/, '')}T`
  return `$${v}B`
}

export function BudgetBreakdownPie({ data }: { data: { name: string; value: number }[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={420}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" outerRadius={150} dataKey="value" label={({ name, value }) => `${name}: ${fmtB(value)}`}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={TT_STYLE} formatter={(v) => fmtB(v)} />
      </PieChart>
    </ResponsiveContainer>
  )
}

export function BudgetComparisonChart({ data }: { data: { category: string; amount: number }[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="category" tick={AXIS_TICK} angle={-25} textAnchor="end" height={80} />
        <YAxis tickFormatter={(v) => fmtB(v)} tick={AXIS_TICK} width={60} />
        <Tooltip contentStyle={TT_STYLE} formatter={(v) => fmtB(v)} />
        <Bar dataKey="amount" fill="#991b1b" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
