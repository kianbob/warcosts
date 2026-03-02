// @ts-nocheck
'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts'

const AXIS_TICK = { fontSize: 12 }
const TT_STYLE = { backgroundColor: '#fff', border: '1px solid #e7e5e4', borderRadius: '8px', padding: '8px 12px', fontSize: '13px' }

function fmtK(v) {
  if (v >= 1e6) return `${(v / 1e6).toFixed(1).replace(/\.0$/, '')}M`
  if (v >= 1e3) return `${(v / 1e3).toFixed(0)}K`
  return String(v)
}

export function CiviliansByConflictChart({ data }: { data: { conflict: string; lowEstimate: number; highEstimate: number }[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="conflict" tick={AXIS_TICK} angle={-30} textAnchor="end" height={80} />
        <YAxis tickFormatter={(v) => fmtK(v)} tick={AXIS_TICK} width={60} />
        <Tooltip contentStyle={TT_STYLE} formatter={(v) => fmtK(v)} />
        <Legend />
        <Bar dataKey="lowEstimate" name="Low Estimate" fill="#991b1b" />
        <Bar dataKey="highEstimate" name="High Estimate" fill="#450a0a" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function DroneStrikesChart({ data }: { data: { country: string; strikes: number; civilianDeaths: number }[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="country" tick={AXIS_TICK} />
        <YAxis tickFormatter={(v) => fmtK(v)} tick={AXIS_TICK} width={60} />
        <Tooltip contentStyle={TT_STYLE} formatter={(v) => fmtK(v)} />
        <Legend />
        <Bar dataKey="strikes" name="Total Strikes" fill="#78716c" />
        <Bar dataKey="civilianDeaths" name="Civilian Deaths" fill="#991b1b" />
      </BarChart>
    </ResponsiveContainer>
  )
}
