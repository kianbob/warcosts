// @ts-nocheck
'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const AXIS_TICK = { fontSize: 12 }
const TT_STYLE = { backgroundColor: '#fff', border: '1px solid #e7e5e4', borderRadius: '8px', padding: '8px 12px', fontSize: '13px' }

function fmtB(v) {
  if (v >= 1e9) return `$${(v / 1e9).toFixed(1).replace(/\.0$/, '')}B`
  if (v >= 1e6) return `$${(v / 1e6).toFixed(0)}M`
  return `$${v}`
}

export function AidRecipientsChart({ data }: { data: { country: string; annual: number }[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tickFormatter={(v) => fmtB(v)} tick={AXIS_TICK} />
        <YAxis type="category" dataKey="country" tick={AXIS_TICK} width={90} />
        <Tooltip contentStyle={TT_STYLE} formatter={(v) => fmtB(v)} />
        <Bar dataKey="annual" fill="#991b1b" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function CumulativeAidChart({ data }: { data: { country: string; total: number }[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis type="number" tickFormatter={(v) => fmtB(v)} tick={AXIS_TICK} />
        <YAxis type="category" dataKey="country" tick={AXIS_TICK} width={90} />
        <Tooltip contentStyle={TT_STYLE} formatter={(v) => fmtB(v)} />
        <Bar dataKey="total" fill="#b91c1c" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
