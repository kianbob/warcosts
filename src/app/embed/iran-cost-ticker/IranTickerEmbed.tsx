'use client'

import { useEffect, useState } from 'react'

const WAR_START = new Date('2026-02-28T05:15:00Z')
const COST_PER_SECOND = 21759

function fmtMoney(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
  return `$${n.toLocaleString()}`
}

export default function IranTickerEmbed() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!now) return <div className="w-full h-screen bg-gray-950" />

  const elapsed = now.getTime() - WAR_START.getTime()
  const days = Math.floor(elapsed / 86_400_000)
  const hours = Math.floor((elapsed % 86_400_000) / 3_600_000)
  const minutes = Math.floor((elapsed % 3_600_000) / 60_000)
  const seconds = Math.floor((elapsed % 60_000) / 1000)
  const totalCost = Math.floor((elapsed / 1000) * COST_PER_SECOND)

  return (
    <div className="w-full h-screen bg-gray-950 flex flex-col items-center justify-center gap-6 p-4 relative">
      <p className="text-gray-400 text-sm uppercase tracking-widest">Iran War Cost — Live</p>
      <p className="text-red-500 text-5xl md:text-7xl font-bold tabular-nums tracking-tight">{fmtMoney(totalCost)}</p>
      <div className="flex gap-6 text-gray-300 text-lg">
        <span><strong className="text-white">{days}</strong> days</span>
        <span>{hours}h {minutes}m {seconds}s</span>
      </div>
      <p className="text-gray-500 text-sm">${COST_PER_SECOND.toLocaleString()} per second</p>
      <p className="absolute bottom-3 right-4 text-[10px] text-gray-600">warcosts.org</p>
    </div>
  )
}
