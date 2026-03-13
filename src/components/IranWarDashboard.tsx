'use client'

import { useEffect, useState } from 'react'

const WAR_START = new Date('2026-02-28T05:15:00Z') // 9:15am Tehran = 5:15 UTC
const COST_PER_SECOND = 21759 // ~$1.88B/day (Pentagon: $11.3B in 6 days)

function fmtCompact(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
  return `$${n.toLocaleString()}`
}

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

  const fmtCost = fmtCompact(totalCost)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 my-6">
      <StatCard label="War Duration" value={`Day ${days + 1}`} sub={`${hours}h ${minutes}m ${seconds}s`} pulse />
      <StatCard label="Estimated Cost" value={fmtCost} sub={`$${COST_PER_SECOND.toLocaleString()}/sec`} pulse />
      <StatCard label="US Troops Killed" value="8" sub="18+ wounded" />
      <StatCard label="Iranian Casualties" value="1,348+" sub="incl. 168 schoolchildren" />
      <StatCard label="Countries Under Fire" value="12" sub="9 hit by Iran retaliation" />
      <StatCard label="Oil Price" value="$100+" sub="Hormuz mined" />
    </div>
  )
}

function StatCard({ label, value, sub, pulse }: { label: string; value: string; sub?: string; pulse?: boolean }) {
  return (
    <div className="bg-stone-800/80 backdrop-blur rounded-lg p-4 text-center border border-stone-700">
      <p className={`text-lg md:text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)] tabular-nums leading-tight ${pulse ? 'animate-pulse' : ''}`}>
        {value}
      </p>
      <p className="text-stone-400 text-xs mt-1">{label}</p>
      {sub && <p className="text-stone-500 text-[10px] mt-0.5">{sub}</p>}
    </div>
  )
}
