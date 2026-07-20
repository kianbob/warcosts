'use client'

import { useEffect, useState } from 'react'

const WAR_START = new Date('2026-02-28T05:15:00Z') // 9:15am Tehran = 5:15 UTC
const WAR_END = new Date('2026-06-14T23:59:00Z') // Peace deal reached June 14, 2026
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

  // War ended June 14 — cap the counter
  const endTime = WAR_END.getTime()
  const elapsedMs = Math.min(now.getTime(), endTime) - WAR_START.getTime()
  const days = Math.floor(elapsedMs / 86_400_000)
  const hours = Math.floor((elapsedMs % 86_400_000) / 3_600_000)
  const minutes = Math.floor((elapsedMs % 3_600_000) / 60_000)
  const seconds = Math.floor((elapsedMs % 60_000) / 1000)
  const totalCost = 113_000_000_000 // Updated: $113B+ through Jul 2026
  const warOver = now.getTime() >= endTime

  const fmtCost = fmtCompact(totalCost)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 my-6">
      <StatCard label="War Duration" value="143+ Days" sub="Feb 28, 2026 – ongoing (MOU collapsed)" />
      <StatCard label="Total Cost" value="$113B+" sub="Pentagon: $29B direct | True cost: $103-113B" />
      <StatCard label="Status" value="⚠️ MOU COLLAPSED" sub="14-point MOU signed Jun 19 — collapsed Jul 7 — 9 consecutive nights of US strikes Jul 11-19 — expanding to Tabriz — Darkhovin nuclear plant hit" />
      <StatCard label="Total Killed" value="5,000+" sub="Reuters — across nearly a dozen countries" />
      <StatCard label="Iranian Civilians" value="1,701+" sub="HRANA — 254 children — 3,461+ total killed" />
      <StatCard label="US Troops" value="17 KIA" sub="1 missing, 553+ wounded — 42 aircraft lost/damaged" />
      <StatCard label="Oil Impact" value="Peak $126/bbl" sub="Hormuz closed 108 days — worst energy crisis since 1973 — reopening per peace deal terms" />
      <StatCard label="Lebanon" value="4,321+ killed" sub="Health ministry — Israel-Hezbollah ceasefire agreed Jul 19 — IDF withdrawal TBD" />
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
