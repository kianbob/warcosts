'use client'

import { useEffect, useState } from 'react'

// Baseline: ~3,461 killed as of Mar 29 2026
// Estimated daily rate: ~115/day
const BASELINE_DATE = new Date('2026-03-29T00:00:00Z')
const BASELINE_KILLED = 3461
const DAILY_RATE = 115
const INJURED_RATIO = 2.8 // rough injured-to-killed

export default function IranCasualtiesEmbed() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 3000)
    return () => clearInterval(id)
  }, [])

  if (!now) return <div className="w-full h-full min-h-[200px] bg-[#1c1917]" />

  const daysSinceBaseline = (now.getTime() - BASELINE_DATE.getTime()) / 86_400_000
  const killed = Math.floor(BASELINE_KILLED + Math.max(0, daysSinceBaseline) * DAILY_RATE)
  const injured = Math.floor(killed * INJURED_RATIO)

  return (
    <div className="w-full min-h-[200px] h-screen bg-[#1c1917] flex flex-col items-center justify-center gap-4 p-4 font-sans relative">
      <p className="text-stone-500 text-xs uppercase tracking-[0.2em]">Iran War — Estimated Casualties</p>

      <div className="flex items-center gap-8">
        <div className="text-center">
          <p className="text-red-500 text-4xl md:text-6xl font-bold tabular-nums">{killed.toLocaleString()}+</p>
          <p className="text-red-400/70 text-sm mt-1">Killed</p>
        </div>
        <div className="w-px h-16 bg-stone-700" />
        <div className="text-center">
          <p className="text-amber-500 text-3xl md:text-5xl font-bold tabular-nums">{injured.toLocaleString()}+</p>
          <p className="text-amber-400/70 text-sm mt-1">Injured</p>
        </div>
      </div>

      <p className="text-stone-600 text-xs">~{DAILY_RATE} killed per day</p>

      <a
        href="https://www.warcosts.org"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-3 text-[10px] text-stone-600 hover:text-stone-400 transition-colors"
      >
        Data: WarCosts.org
      </a>
    </div>
  )
}
