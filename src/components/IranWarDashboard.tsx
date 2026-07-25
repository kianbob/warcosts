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
      <StatCard label="War Duration" value="148+ Days" sub="Feb 28, 2026 – ongoing (MOU collapsed Jul 8)" />
      <StatCard label="Total Cost" value="$113B+" sub="Pentagon: $37.5B direct (Hegseth Jul 21) | Independent: $113B" />
      <StatCard label="Status" value="⚠️ ACTIVE HOSTILITIES" sub="MOU signed Jun 19, collapsed Jul 8. Renewed strikes. Houthis blockade Saudi Arabia Jul 20. Oil above $100/bbl." />
      <StatCard label="Total Killed" value="~8,080" sub="Wikipedia casualty tracker — 49,241 injured — across all sides" />
      <StatCard label="Iranian Deaths" value="3,636+" sub="HRANA (3,468 Foundation of Martyrs) — US/Israel est. 6,000+ — 27,000 injured" />
      <StatCard label="US Troops" value="20+ KIA" sub="Pentagon removed 4 from count. 553+ wounded. 42 aircraft lost. THAAD depleted ~40%." />
      <StatCard label="Oil Impact" value="$100+/bbl" sub="Back above $100 Jul 23. Was $83 after MOU. Hormuz ~10 transits/day vs 90-100 pre-war." />
      <StatCard label="Lebanon" value="4,324+ killed" sub="12,221 wounded. Hezbollah REJECTED Jul 19 ceasefire. Houthis blockade Saudi Arabia." />
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
