// @ts-nocheck
'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, ZAxis, Cell, PieChart, Pie, Legend } from 'recharts'

const COLORS = ['#991b1b', '#dc2626', '#ef4444', '#f87171', '#fca5a5', '#7f1d1d', '#b91c1c', '#450a0a', '#292524', '#57534e']

export function WarCostRankChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tickFormatter={v => `$${v}T`} />
        <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
        <Tooltip formatter={v => `$${Number(v).toFixed(2)}T`} />
        <Bar dataKey="costT" fill="#991b1b" name="War Cost (2024$ Trillions)" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function CasualtiesRankChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : v} />
        <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
        <Tooltip formatter={v => Number(v).toLocaleString()} />
        <Bar dataKey="deaths" fill="#dc2626" name="US Military Deaths" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function ConflictsCountChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
        <Tooltip />
        <Bar dataKey="count" fill="#292524" name="Number of Conflicts" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function WarPeacePieChart({ wartime, peacetime }: { wartime: number; peacetime: number }) {
  const data = [
    { name: 'Wartime Presidents', value: wartime },
    { name: 'Peacetime Presidents', value: peacetime },
  ]
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
          <Cell fill="#991b1b" />
          <Cell fill="#16a34a" />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export function SpendingBubbleChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="conflicts" name="Conflicts" />
        <YAxis type="number" dataKey="costT" name="Cost ($T)" tickFormatter={v => `$${v}T`} />
        <ZAxis type="number" dataKey="deaths" range={[50, 1000]} name="Deaths" />
        <Tooltip
          formatter={(v: any, name: string) => {
            if (name === 'Cost ($T)') return `$${Number(v).toFixed(2)}T`
            if (name === 'Deaths') return Number(v).toLocaleString()
            return v
          }}
        />
        <Scatter data={data} fill="#dc2626" name="Presidents">
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  )
}
