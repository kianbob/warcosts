'use client'

import { useEffect, useState } from 'react'

const WAR_START = new Date('2026-02-28T05:15:00Z')
const COST_PER_SECOND = 21759

function fmtMoney(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(3)}T`
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`
  return `$${(n / 1e6).toFixed(0)}M`
}

export default function WarCostTickerEmbed() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!now) return <div className="w-full h-[60px] bg-[#1c1917]" />

  const elapsed = Math.max(0, now.getTime() - WAR_START.getTime())
  const totalCost = Math.floor((elapsed / 1000) * COST_PER_SECOND)
  const days = Math.floor(elapsed / 86_400_000)

  return (
    <div className="w-full h-[60px] bg-[#1c1917] flex items-center justify-between px-4 font-sans relative overflow-hidden">
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-stone-500 text-xs uppercase tracking-wider shrink-0">Iran War</span>
        <span className="text-red-500 text-xl md:text-2xl font-bold tabular-nums tracking-tight">{fmtMoney(totalCost)}</span>
        <span className="text-stone-600 text-xs shrink-0">Day {days}</span>
      </div>
      <a
        href="https://www.warcosts.org"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] text-stone-600 hover:text-stone-400 transition-colors shrink-0 ml-2"
      >
        WarCosts.org
      </a>
    </div>
  )
}
