'use client'

import { useEffect, useState } from 'react'

export function LiveCostCounter({ costPerSecond, label }: { costPerSecond: number; label?: string }) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const interval = setInterval(() => {
      setElapsed((Date.now() - start) / 1000)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const todaySoFar = (() => {
    const now = new Date()
    const secondsToday = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()
    return (secondsToday + elapsed) * costPerSecond
  })()

  const formatted = todaySoFar.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })

  return (
    <div className="bg-black/30 backdrop-blur rounded-lg p-4 text-center border border-red-500/30">
      <p className="text-3xl md:text-4xl font-bold text-red-400 font-[family-name:var(--font-heading)] tabular-nums">
        {formatted}
      </p>
      <p className="text-stone-400 text-sm mt-1">{label || 'Spent on defense today (live)'}</p>
      <p className="text-stone-500 text-xs mt-1">${costPerSecond.toLocaleString()}/second</p>
    </div>
  )
}
