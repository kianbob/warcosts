'use client'

import { useEffect, useState } from 'react'

const WAR_START = new Date('2026-02-28T05:15:00Z') // 9:15am Tehran = 5:15 UTC
const COST_PER_SECOND = 3968 // ~$342M/day

export default function IranWarDashboard() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (!now) return null

  const elapsedMs = now.getTime() - WAR_START.getTime()
  const days = Math.floor(elapsedMs / 86_400_000)
  const hours = Math.floor((elapsedMs % 86_400_000) / 3_600_000)
  const minutes = Math.floor((elapsedMs % 3_600_000) / 60_000)
  const seconds = Math.floor((elapsedMs % 60_000) / 1000)
  const totalCost = Math.floor((elapsedMs / 1000) * COST_PER_SECOND)

  const fmtCost = totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 my-6">
      <StatCard label="War Duration" value={`Day ${days + 1}`} sub={`${hours}h ${minutes}m ${seconds}s`} pulse />
      <StatCard label="Estimated Cost" value={fmtCost} sub={`$${COST_PER_SECOND.toLocaleString()}/sec`} pulse />
      <StatCard label="US Troops Killed" value="6" sub="5+ seriously wounded" />
      <StatCard label="Iranian Casualties" value="1,332+" sub="incl. 180 schoolgirls" />
      <StatCard label="Countries Under Fire" value="11+" sub="8 hit by Iran retaliation" />
      <StatCard label="Oil Price" value="$130+" sub="Hormuz closed" />
    </div>
  )
}

function StatCard({ label, value, sub, pulse }: { label: string; value: string; sub?: string; pulse?: boolean }) {
  return (
    <div className="bg-stone-800/80 backdrop-blur rounded-lg p-4 text-center border border-stone-700">
      <p className={`text-xl md:text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)] tabular-nums ${pulse ? 'animate-pulse' : ''}`}>
        {value}
      </p>
      <p className="text-stone-400 text-xs mt-1">{label}</p>
      {sub && <p className="text-stone-500 text-[10px] mt-0.5">{sub}</p>}
    </div>
  )
}
