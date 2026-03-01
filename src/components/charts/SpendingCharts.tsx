// @ts-nocheck
'use client'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export function SpendingAreaChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis tickFormatter={v => `$${v}B`} />
        <Tooltip formatter={(v: number) => [`$${v}B`, 'Spending']} />
        <Area type="monotone" dataKey="amount" stroke="#991b1b" fill="#991b1b" fillOpacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function GdpChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis tickFormatter={v => `${v}%`} />
        <Tooltip formatter={(v: number) => [`${v}%`, '% of GDP']} />
        <Area type="monotone" dataKey="pctGdp" stroke="#b91c1c" fill="#b91c1c" fillOpacity={0.2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function CostByConflictChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} layout="vertical" margin={{ left: 120 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tickFormatter={v => `$${(v/1e9).toFixed(0)}B`} />
        <YAxis type="category" dataKey="name" width={110} tick={{ fontSize: 11 }} />
        <Tooltip formatter={(v: number) => [`$${(v/1e9).toFixed(1)}B`, 'Cost']} />
        <Bar dataKey="cost" fill="#991b1b" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function DeathsByConflictChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} layout="vertical" margin={{ left: 120 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tickFormatter={v => v >= 1000 ? `${(v/1000).toFixed(0)}K` : v} />
        <YAxis type="category" dataKey="name" width={110} tick={{ fontSize: 11 }} />
        <Tooltip />
        <Bar dataKey="usDeaths" fill="#991b1b" name="US Deaths" />
        <Bar dataKey="civilianDeaths" fill="#78716c" name="Civilian Deaths" />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function ForeignAidChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical" margin={{ left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tickFormatter={v => `$${v}B`} />
        <YAxis type="category" dataKey="country" width={90} tick={{ fontSize: 12 }} />
        <Tooltip formatter={(v: number) => [`$${v}B`, 'Total Since 2001']} />
        <Bar dataKey="amount" fill="#991b1b" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function ArmsSalesChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical" margin={{ left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tickFormatter={v => `$${v}B`} />
        <YAxis type="category" dataKey="country" width={90} tick={{ fontSize: 12 }} />
        <Tooltip formatter={(v: number) => [`$${v}B`, 'Total Sales']} />
        <Bar dataKey="amount" fill="#b91c1c" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function BasesChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical" margin={{ left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="country" width={90} tick={{ fontSize: 12 }} />
        <Tooltip />
        <Bar dataKey="bases" fill="#991b1b" name="Bases" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function TroopsChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical" margin={{ left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tickFormatter={v => v >= 1000 ? `${(v/1000).toFixed(0)}K` : v} />
        <YAxis type="category" dataKey="country" width={90} tick={{ fontSize: 12 }} />
        <Tooltip />
        <Bar dataKey="troops" fill="#b91c1c" name="Troops" />
      </BarChart>
    </ResponsiveContainer>
  )
}
