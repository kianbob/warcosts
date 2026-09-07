'use client'

import { useEffect, useState } from 'react'

const WAR_START = new Date('2026-02-28T05:15:00Z') // 9:15am Tehran = 5:15 UTC
const WAR_END = new Date('2027-02-28T23:59:00Z') // War ongoing — no end date
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
  const totalCost = 115_000_000_000 // Updated: $40B+ direct military, $100B+ total economic through Aug 2026
  const warOver = now.getTime() >= endTime

  const fmtCost = fmtCompact(totalCost)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 my-6">
      <StatCard label="War Duration" value="192 Days" sub="Feb 28, 2026 – ongoing. Renewed hostilities Sep 1. Kuhestak wedding strike." />
      <StatCard label="Total Cost" value="$115B+ total" sub="$37.5B direct military (Hegseth) | $100B+ consumer energy cost (Axios/Brown)" />
      <StatCard label="Status" value="⚠️ ACTIVE COMBAT" sub="Renewed hostilities Sep 1. US strikes 3 tankers. Iran fires at carrier. Rezaei declares restricted zone." />
      <StatCard label="Total Killed" value="~9,000+" sub="Across all sides — Iran, Lebanon, US, Israel, Gulf states" />
      <StatCard label="Iranian Deaths" value="3,636+" sub="HRANA — JINSA: 3,720+ — 27,000-33,000+ wounded" />
      <StatCard label="US Troops" value="18 KIA" sub="790+ wounded (Stars and Stripes Sep 5). 42 aircraft lost. THAAD depleted ~40%." />
      <StatCard label="Oil Impact" value="$97/bbl" sub="Brent crude. Diesel $5.85/gal record. Hormuz: ~6-10 ships/day vs 85 normal." />
      <StatCard label="Lebanon" value="2,659+ killed" sub="Israel strikes Kfar Rumman — 11 killed incl children & medics. Ali Taher ridge seized." />
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
