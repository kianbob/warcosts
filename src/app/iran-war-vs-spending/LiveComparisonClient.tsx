'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

const WAR_START = new Date('2026-02-28T05:15:00Z')
const COST_PER_SECOND = 21759
const US_POPULATION = 330_000_000

interface SpendingItem {
  label: string
  cost: number
  unit: string
  emoji: string
}

const SPENDING_ITEMS: SpendingItem[] = [
  { label: 'School Lunches', cost: 3.81, unit: 'meals', emoji: '🍎' },
  { label: 'Teacher Salaries', cost: 65_000, unit: 'teachers paid for a year', emoji: '👩‍🏫' },
  { label: 'Pell Grants', cost: 7_395, unit: 'students funded', emoji: '🎓' },
  { label: 'Homes at Median Price', cost: 405_000, unit: 'homes', emoji: '🏠' },
  { label: 'Years of Medicare for All', cost: 350_000_000_000, unit: 'years', emoji: '🏥' },
  { label: 'VA Healthcare Appointments', cost: 350, unit: 'appointments', emoji: '🎖️' },
  { label: 'Miles of Highway', cost: 6_500_000, unit: 'miles', emoji: '🛣️' },
  { label: 'Clean Water Systems (Flint-sized)', cost: 55_000_000, unit: 'cities', emoji: '💧' },
]

function formatCurrency(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(3)}T`
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`
  return `$${n.toFixed(2)}`
}

function formatCount(n: number): string {
  if (n >= 1e9) return `${(n / 1e9).toFixed(2)}B`
  if (n >= 1e6) return `${(n / 1e6).toFixed(2)}M`
  if (n >= 1e3) return `${(n / 1e3).toLocaleString('en-US', { maximumFractionDigits: 0 })}`
  return n.toFixed(n < 10 ? 4 : 0)
}

function formatBigCurrency(n: number): string {
  if (n >= 1e12) return (n / 1e12).toFixed(6)
  if (n >= 1e9) return (n / 1e9).toFixed(4)
  if (n >= 1e6) return (n / 1e6).toFixed(2)
  return n.toLocaleString('en-US', { maximumFractionDigits: 2 })
}

function getSuffix(n: number): string {
  if (n >= 1e12) return 'TRILLION'
  if (n >= 1e9) return 'BILLION'
  if (n >= 1e6) return 'MILLION'
  return ''
}

function EquivalentRow({ item, totalCost, animate }: { item: SpendingItem; totalCost: number; animate?: boolean }) {
  const count = totalCost / item.cost
  return (
    <div className={`flex items-center justify-between py-3 px-4 rounded-lg bg-stone-800/50 border border-stone-700/50 ${animate ? 'hover:border-teal-500/30 transition-colors' : ''}`}>
      <div className="flex items-center gap-3">
        <span className="text-2xl">{item.emoji}</span>
        <div>
          <div className="text-stone-300 text-sm">{item.label}</div>
          <div className="text-stone-500 text-xs">{formatCurrency(item.cost)} each</div>
        </div>
      </div>
      <div className="text-right">
        <span className="text-teal-400 font-mono text-lg font-bold tabular-nums">
          {formatCount(count)}
        </span>
        <div className="text-stone-500 text-xs">{item.unit}</div>
      </div>
    </div>
  )
}

export default function LiveComparisonClient() {
  const [totalCost, setTotalCost] = useState(0)
  const [sessionCost, setSessionCost] = useState(0)
  const sessionStart = useRef(Date.now())
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      const secsSinceWar = Math.max(0, (now - WAR_START.getTime()) / 1000)
      const secsSinceVisit = Math.max(0, (now - sessionStart.current) / 1000)
      setTotalCost(secsSinceWar * COST_PER_SECOND)
      setSessionCost(secsSinceVisit * COST_PER_SECOND)
    }
    tick()
    const id = setInterval(tick, 50)
    return () => clearInterval(id)
  }, [])

  const personalShare = totalCost / US_POPULATION
  const daysSinceStart = Math.max(0, (Date.now() - WAR_START.getTime()) / 86400000)

  const shareText = useCallback(() => {
    const text = `The Iran war has cost ${formatCurrency(totalCost)} since Feb 28 — that's ${formatCount(totalCost / 3.81)} school lunches, ${formatCount(totalCost / 65000)} teacher salaries, or ${formatCount(totalCost / 405000)} homes. Your personal share: ${formatCurrency(personalShare)}. See it live: https://warcosts.org/iran-war-vs-spending`
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [totalCost, personalShare])

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100">
      {/* Header */}
      <header className="border-b border-stone-800 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-stone-400 hover:text-stone-200 text-sm transition-colors">
            ← WarCosts.org
          </Link>
          <span className="text-stone-600 text-xs font-mono">LIVE · Updated every 50ms</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-stone-100 mb-3">
            Every Dollar Spent on War
          </h1>
          <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-stone-400 italic">
            Is a Dollar Not Spent on Americans
          </p>
          <p className="text-stone-500 text-sm mt-4">
            Since February 28, 2026 · Day {Math.floor(daysSinceStart)} of the Iran War
          </p>
        </div>

        {/* Split Screen */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {/* Left: War Cost */}
          <div className="bg-stone-800/60 border border-red-900/30 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center">
            <div className="text-stone-500 uppercase tracking-widest text-xs mb-4">Total War Cost</div>
            <div className="text-center">
              <span className="text-red-500 font-mono text-4xl md:text-6xl font-black tabular-nums tracking-tight">
                ${formatBigCurrency(totalCost)}
              </span>
              <div className="text-red-400/70 font-mono text-lg md:text-xl mt-1 tracking-widest">
                {getSuffix(totalCost)}
              </div>
            </div>
            <div className="mt-6 text-stone-500 text-sm text-center">
              <span className="text-red-400 font-mono font-bold">${COST_PER_SECOND.toLocaleString()}</span> per second
            </div>
            <div className="mt-2 text-stone-600 text-xs">
              $1.88B per day · $56.3B per month
            </div>
          </div>

          {/* Right: Equivalents */}
          <div className="bg-stone-800/60 border border-teal-900/30 rounded-2xl p-6 md:p-8">
            <div className="text-stone-500 uppercase tracking-widest text-xs mb-4 text-center">
              What That Money Could Buy Instead
            </div>
            <div className="space-y-2">
              {SPENDING_ITEMS.map((item) => (
                <EquivalentRow key={item.label} item={item} totalCost={totalCost} animate />
              ))}
            </div>
          </div>
        </div>

        {/* Since You Opened This Page */}
        <div className="bg-gradient-to-b from-stone-800/80 to-stone-800/40 border border-stone-700/50 rounded-2xl p-6 md:p-10 mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-center mb-2">
            Since You Opened This Page
          </h2>
          <p className="text-stone-500 text-sm text-center mb-8">The war has cost an additional:</p>

          <div className="text-center mb-8">
            <span className="text-red-400 font-mono text-3xl md:text-5xl font-black tabular-nums">
              {formatCurrency(sessionCost)}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SPENDING_ITEMS.slice(0, 4).map((item) => (
              <div key={item.label} className="bg-stone-900/60 rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">{item.emoji}</div>
                <div className="text-teal-400 font-mono font-bold tabular-nums">
                  {formatCount(sessionCost / item.cost)}
                </div>
                <div className="text-stone-500 text-xs mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Personal Share */}
        <div className="bg-stone-800/60 border border-amber-900/30 rounded-2xl p-6 md:p-10 mb-16 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold mb-2">
            Your Personal Share
          </h2>
          <p className="text-stone-500 text-sm mb-6">
            Total war cost ÷ 330 million Americans
          </p>
          <div className="text-amber-400 font-mono text-4xl md:text-6xl font-black tabular-nums mb-4">
            {formatCurrency(personalShare)}
          </div>
          <p className="text-stone-500 text-sm">
            Every man, woman, and child in America owes this much — and counting.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-lg mx-auto text-sm">
            <div className="bg-stone-900/60 rounded-lg p-3">
              <div className="text-stone-400">Per household</div>
              <div className="text-amber-400 font-mono font-bold">{formatCurrency(personalShare * 2.5)}</div>
            </div>
            <div className="bg-stone-900/60 rounded-lg p-3">
              <div className="text-stone-400">Per taxpayer</div>
              <div className="text-amber-400 font-mono font-bold">{formatCurrency(totalCost / 150_000_000)}</div>
            </div>
            <div className="bg-stone-900/60 rounded-lg p-3 col-span-2 md:col-span-1">
              <div className="text-stone-400">Per day/person</div>
              <div className="text-amber-400 font-mono font-bold">{formatCurrency((COST_PER_SECOND * 86400) / US_POPULATION)}</div>
            </div>
          </div>
        </div>

        {/* Shareable Card */}
        <div className="bg-stone-950 border border-stone-700 rounded-2xl p-8 md:p-10 mb-16">
          <div className="text-center mb-6">
            <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold mb-1">Share This</h2>
            <p className="text-stone-500 text-xs">Copy the stats below</p>
          </div>
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-stone-500 text-xs uppercase tracking-widest mb-2">Iran War · Day {Math.floor(daysSinceStart)}</div>
              <div className="text-red-500 font-mono text-3xl font-black mb-4">{formatCurrency(totalCost)}</div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-left max-w-sm mx-auto">
                <div className="text-stone-400">🍎 School lunches</div>
                <div className="text-teal-400 font-mono text-right">{formatCount(totalCost / 3.81)}</div>
                <div className="text-stone-400">👩‍🏫 Teachers</div>
                <div className="text-teal-400 font-mono text-right">{formatCount(totalCost / 65000)}</div>
                <div className="text-stone-400">🏠 Homes</div>
                <div className="text-teal-400 font-mono text-right">{formatCount(totalCost / 405000)}</div>
                <div className="text-stone-400">🎖️ VA appointments</div>
                <div className="text-teal-400 font-mono text-right">{formatCount(totalCost / 350)}</div>
              </div>
              <div className="mt-4 pt-4 border-t border-stone-800 text-stone-600 text-xs">
                warcosts.org/iran-war-vs-spending
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={shareText}
              className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {copied ? '✓ Copied!' : '📋 Copy Stats to Clipboard'}
            </button>
          </div>
        </div>

        {/* Sources */}
        <div className="text-center text-stone-600 text-xs space-y-1 pb-8">
          <p>Cost estimate: $1.88B/day based on projected Pentagon spending, Brown University Costs of War methodology.</p>
          <p>Domestic costs: USDA (school lunch), BLS (teacher salary), Dept. of Ed (Pell Grants), Census (median home), CBO (Medicare for All), VA, FHWA, EPA.</p>
          <p className="pt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-300 transition-colors">
              WarCosts.org
            </Link>
            {' · '}
            <Link href="/iran-war" className="text-stone-500 hover:text-stone-300 transition-colors">
              Iran War Dashboard
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
