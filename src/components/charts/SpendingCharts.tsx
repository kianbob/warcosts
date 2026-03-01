// @ts-nocheck
'use client'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const AXIS_TICK = { fontSize: 13 }
const AXIS_LABEL_STYLE = { fontSize: 12, fill: '#78716c' }

function fmtDollarB(v: number): string {
  if (v == null || isNaN(v)) return '$0'
  const abs = Math.abs(v)
  if (abs >= 1e12) return `$${(v / 1e12).toFixed(1).replace(/\.0$/, '')}T`
  if (abs >= 1e9) return `$${(v / 1e9).toFixed(1).replace(/\.0$/, '')}B`
  if (abs >= 1e6) return `$${(v / 1e6).toFixed(1).replace(/\.0$/, '')}M`
  return `$${v.toFixed(0)}`
}

function fmtCount(v: number): string {
  if (v == null || isNaN(v)) return '0'
  if (v >= 1e6) return `${(v / 1e6).toFixed(1).replace(/\.0$/, '')}M`
  if (v >= 1e3) return `${(v / 1e3).toFixed(0)}K`
  return String(v)
}

const CustomTooltipStyle = {
  backgroundColor: '#fff',
  border: '1px solid #e7e5e4',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}

export function SpendingAreaChart({ data }: { data: any[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="year" tick={AXIS_TICK} />
        <YAxis tickFormatter={v => `$${v}B`} tick={AXIS_TICK} width={65} />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number) => [`$${Number(v).toFixed(1)}B`, 'Military Spending']}
          labelFormatter={(label) => `Year: ${label}`}
        />
        <Area type="monotone" dataKey="amount" stroke="#991b1b" fill="#991b1b" fillOpacity={0.3} strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function GdpChart({ data }: { data: any[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="year" tick={AXIS_TICK} />
        <YAxis tickFormatter={v => `${v}%`} tick={AXIS_TICK} width={50} />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number) => [`${Number(v).toFixed(1)}%`, '% of GDP']}
          labelFormatter={(label) => `Year: ${label}`}
        />
        <Area type="monotone" dataKey="pctGdp" stroke="#b91c1c" fill="#b91c1c" fillOpacity={0.2} strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function CostByConflictChart({ data }: { data: any[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tickFormatter={v => fmtDollarB(v)} tick={AXIS_TICK} />
        <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 13 }} />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number) => [fmtDollarB(v), 'Cost (2023 $)']}
        />
        <Bar dataKey="cost" fill="#991b1b" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function DeathsByConflictChart({ data }: { data: any[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tickFormatter={fmtCount} tick={AXIS_TICK} />
        <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 13 }} />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number, name: string) => [
            v?.toLocaleString() ?? '0',
            name === 'usDeaths' ? 'US Deaths' : 'Civilian Deaths'
          ]}
        />
        <Bar dataKey="usDeaths" fill="#991b1b" name="US Deaths" radius={[0, 4, 4, 0]} />
        <Bar dataKey="civilianDeaths" fill="#78716c" name="Civilian Deaths" radius={[0, 4, 4, 0]} />
        <Legend wrapperStyle={{ fontSize: 13, paddingTop: 12 }} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function ForeignAidChart({ data }: { data: any[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tickFormatter={v => `$${v}B`} tick={AXIS_TICK} />
        <YAxis type="category" dataKey="country" width={100} tick={{ fontSize: 13 }} />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number) => [`$${Number(v).toFixed(1)}B`, 'Total Since 2001']}
        />
        <Bar dataKey="amount" fill="#991b1b" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function ArmsSalesChart({ data }: { data: any[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tickFormatter={v => `$${v}B`} tick={AXIS_TICK} />
        <YAxis type="category" dataKey="country" width={100} tick={{ fontSize: 13 }} />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number) => [`$${Number(v).toFixed(1)}B`, 'Total Sales']}
        />
        <Bar dataKey="amount" fill="#b91c1c" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function BasesChart({ data }: { data: any[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tick={AXIS_TICK} />
        <YAxis type="category" dataKey="country" width={100} tick={{ fontSize: 13 }} />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number) => [v, 'Military Bases']}
        />
        <Bar dataKey="bases" fill="#991b1b" name="Bases" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function TroopsChart({ data }: { data: any[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tickFormatter={fmtCount} tick={AXIS_TICK} />
        <YAxis type="category" dataKey="country" width={100} tick={{ fontSize: 13 }} />
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number) => [v?.toLocaleString() ?? '0', 'Troops Deployed']}
        />
        <Bar dataKey="troops" fill="#b91c1c" name="Troops" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
