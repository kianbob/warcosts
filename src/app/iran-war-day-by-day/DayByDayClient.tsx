'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

interface DayEntry {
  day: number
  date: string
  title: string
  costToDate: string
  costRaw: number
  casualtiesIran: number
  casualtiesUS: number
  civilianDeaths: number
  oilPrice: number
  keyEvents: string[]
  significance: 'critical' | 'major' | 'escalation' | 'standard'
}

type FilterType = 'all' | 'critical' | 'civilian' | 'us-casualties' | 'economic'

const SIGNIFICANCE_STYLES: Record<string, { border: string; badge: string; badgeText: string; glow: string }> = {
  critical: {
    border: 'border-red-600',
    badge: 'bg-red-600',
    badgeText: 'CRITICAL',
    glow: 'shadow-red-900/30 shadow-lg',
  },
  major: {
    border: 'border-amber-500',
    badge: 'bg-amber-600',
    badgeText: 'MAJOR',
    glow: 'shadow-amber-900/20 shadow-md',
  },
  escalation: {
    border: 'border-orange-500',
    badge: 'bg-orange-600',
    badgeText: 'ESCALATION',
    glow: 'shadow-orange-900/20 shadow-md',
  },
  standard: {
    border: 'border-stone-600',
    badge: 'bg-stone-600',
    badgeText: '',
    glow: '',
  },
}

const FILTERS: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'All Days' },
  { key: 'critical', label: 'Critical Events' },
  { key: 'civilian', label: 'Civilian Impact' },
  { key: 'us-casualties', label: 'US Casualties' },
  { key: 'economic', label: 'Economic' },
]

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
}

function formatNumber(n: number): string {
  return n.toLocaleString('en-US')
}

function MiniOilChart({ data }: { data: DayEntry[] }) {
  const prices = data.map((d) => d.oilPrice)
  const min = Math.min(...prices) - 2
  const max = Math.max(...prices) + 2
  const w = 280
  const h = 80
  const points = prices
    .map((p, i) => {
      const x = (i / (prices.length - 1)) * w
      const y = h - ((p - min) / (max - min)) * h
      return `${x},${y}`
    })
    .join(' ')

  return (
    <div className="mt-2">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="oilGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(245 158 11)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(245 158 11)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points={`0,${h} ${points} ${w},${h}`}
          fill="url(#oilGrad)"
        />
        <polyline
          points={points}
          fill="none"
          stroke="rgb(245 158 11)"
          strokeWidth="2"
        />
      </svg>
      <div className="flex justify-between text-xs text-stone-500 mt-1">
        <span>Day 1</span>
        <span>Day 30</span>
      </div>
    </div>
  )
}

export default function DayByDayClient() {
  const [data, setData] = useState<DayEntry[]>([])
  const [filter, setFilter] = useState<FilterType>('all')
  const [currentDay, setCurrentDay] = useState<DayEntry | null>(null)
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    fetch('/data/iran-day-by-day.json')
      .then((r) => r.json())
      .then((d: DayEntry[]) => {
        setData(d)
        setCurrentDay(d[0])
      })
  }, [])

  const setCardRef = useCallback((day: number, el: HTMLDivElement | null) => {
    if (el) {
      cardRefs.current.set(day, el)
    } else {
      cardRefs.current.delete(day)
    }
  }, [])

  useEffect(() => {
    if (data.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const topEntry = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          )
          const day = parseInt(topEntry.target.getAttribute('data-day') || '1')
          const found = data.find((d) => d.day === day)
          if (found) setCurrentDay(found)
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    )

    cardRefs.current.forEach((el) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [data, filter])

  const filtered = data.filter((d) => {
    switch (filter) {
      case 'critical':
        return d.significance === 'critical'
      case 'civilian':
        return d.civilianDeaths > (data.find((p) => p.day === d.day - 1)?.civilianDeaths || 0) + 50
      case 'us-casualties':
        return d.casualtiesUS > (data.find((p) => p.day === d.day - 1)?.casualtiesUS || 0)
      case 'economic':
        return d.oilPrice >= 90 || d.significance === 'escalation'
      default:
        return true
    }
  })

  const lastDay = data[data.length - 1]

  if (data.length === 0) {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center">
        <div className="animate-pulse text-stone-400 font-mono">Loading timeline data...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100">
      {/* Sticky Header */}
      {currentDay && (
        <div className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-sm border-b border-stone-700 px-4 py-3">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-mono text-stone-400">DAY</span>
              <span className="text-2xl font-bold font-serif text-white">{currentDay.day}</span>
            </div>
            <div className="h-8 w-px bg-stone-700 hidden sm:block" />
            <div>
              <span className="text-stone-400 text-xs">COST</span>
              <div className="text-green-400 font-mono font-bold">${currentDay.costToDate}</div>
            </div>
            <div>
              <span className="text-stone-400 text-xs">KILLED IN IRAN</span>
              <div className="text-red-400 font-mono font-bold">{formatNumber(currentDay.casualtiesIran)}</div>
            </div>
            <div>
              <span className="text-stone-400 text-xs">US TROOPS</span>
              <div className="text-red-300 font-mono font-bold">{currentDay.casualtiesUS}</div>
            </div>
            <div>
              <span className="text-stone-400 text-xs">OIL $/BBL</span>
              <div className="text-amber-400 font-mono font-bold">${currentDay.oilPrice}</div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
            Day by Day: The Iran War
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            A daily chronicle of Operation Epic Fury — February 28 to March 29, 2026. 
            Every day, every dollar, every life.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f.key
                  ? 'bg-red-600 text-white'
                  : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-3 space-y-4">
            {filtered.map((entry) => {
              const style = SIGNIFICANCE_STYLES[entry.significance]
              const prevDay = data.find((d) => d.day === entry.day - 1)
              const newUSDeaths = entry.casualtiesUS - (prevDay?.casualtiesUS || 0)
              const newIranDeaths = entry.casualtiesIran - (prevDay?.casualtiesIran || 0)

              return (
                <div
                  key={entry.day}
                  ref={(el) => setCardRef(entry.day, el)}
                  data-day={entry.day}
                  className={`border-l-4 ${style.border} ${style.glow} bg-stone-800/60 rounded-r-lg p-5 transition-all hover:bg-stone-800/80`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-3xl font-bold text-white">
                          {String(entry.day).padStart(2, '0')}
                        </span>
                        {style.badgeText && (
                          <span className={`${style.badge} text-white text-xs font-bold px-2 py-0.5 rounded`}>
                            {style.badgeText}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white">{entry.title}</h3>
                      <p className="text-stone-400 text-sm">{formatDate(entry.date)}</p>
                    </div>
                    <div className="flex gap-4 text-right text-sm">
                      <div>
                        <div className="text-stone-500 text-xs">COST</div>
                        <div className="text-green-400 font-mono font-bold">${entry.costToDate}</div>
                      </div>
                      <div>
                        <div className="text-stone-500 text-xs">OIL</div>
                        <div className="text-amber-400 font-mono font-bold">${entry.oilPrice}</div>
                      </div>
                    </div>
                  </div>

                  {/* Daily toll */}
                  <div className="flex flex-wrap gap-4 mb-3 text-sm">
                    {newIranDeaths > 0 && (
                      <span className="text-red-400">
                        +{formatNumber(newIranDeaths)} killed in Iran (total: {formatNumber(entry.casualtiesIran)})
                      </span>
                    )}
                    {newUSDeaths > 0 && (
                      <span className="text-red-300">
                        +{newUSDeaths} US troops killed (total: {entry.casualtiesUS})
                      </span>
                    )}
                  </div>

                  {/* Key events */}
                  <ul className="space-y-1.5">
                    {entry.keyEvents.map((evt, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-300">
                        <span className="text-stone-600 mt-1 flex-shrink-0">▸</span>
                        <span>{evt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Running Totals */}
              <div className="bg-stone-800/80 rounded-lg p-5 border border-stone-700">
                <h2 className="font-serif text-lg font-bold text-white mb-4">30-Day Totals</h2>
                {lastDay && (
                  <div className="space-y-4">
                    <div>
                      <div className="text-stone-500 text-xs uppercase tracking-wider">Total Cost</div>
                      <div className="text-green-400 font-mono text-2xl font-bold">${lastDay.costToDate}</div>
                      <div className="text-stone-500 text-xs">~${Math.round(lastDay.costRaw / 30 / 1e9 * 100) / 100}B per day</div>
                    </div>
                    <div>
                      <div className="text-stone-500 text-xs uppercase tracking-wider">Killed in Iran</div>
                      <div className="text-red-400 font-mono text-2xl font-bold">{formatNumber(lastDay.casualtiesIran)}</div>
                      <div className="text-stone-500 text-xs">{formatNumber(lastDay.civilianDeaths)} civilians</div>
                    </div>
                    <div>
                      <div className="text-stone-500 text-xs uppercase tracking-wider">US Troops Killed</div>
                      <div className="text-red-300 font-mono text-2xl font-bold">{lastDay.casualtiesUS}</div>
                    </div>
                    <div>
                      <div className="text-stone-500 text-xs uppercase tracking-wider">Oil Price</div>
                      <div className="text-amber-400 font-mono text-2xl font-bold">${lastDay.oilPrice}/bbl</div>
                      <div className="text-stone-500 text-xs">+${lastDay.oilPrice - data[0].oilPrice} from pre-war</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Oil Price Chart */}
              <div className="bg-stone-800/80 rounded-lg p-5 border border-stone-700">
                <h2 className="font-serif text-sm font-bold text-amber-400 mb-2">Oil Price Trend</h2>
                <MiniOilChart data={data} />
                <div className="flex justify-between text-xs text-stone-500 mt-2">
                  <span>${data[0].oilPrice}</span>
                  <span className="text-amber-400">${lastDay?.oilPrice}</span>
                </div>
              </div>

              {/* Quick Nav */}
              <div className="bg-stone-800/80 rounded-lg p-5 border border-stone-700">
                <h2 className="font-serif text-sm font-bold text-stone-300 mb-3">Jump to Day</h2>
                <div className="grid grid-cols-6 gap-1">
                  {data.map((d) => {
                    const s = SIGNIFICANCE_STYLES[d.significance]
                    return (
                      <button
                        key={d.day}
                        onClick={() => {
                          cardRefs.current.get(d.day)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }}
                        className={`w-full aspect-square rounded text-xs font-mono font-bold flex items-center justify-center transition-all hover:scale-110 ${
                          d.significance === 'critical'
                            ? 'bg-red-600/30 text-red-400 hover:bg-red-600/50'
                            : d.significance === 'major'
                              ? 'bg-amber-600/20 text-amber-400 hover:bg-amber-600/40'
                              : d.significance === 'escalation'
                                ? 'bg-orange-600/20 text-orange-400 hover:bg-orange-600/40'
                                : 'bg-stone-700/50 text-stone-400 hover:bg-stone-700'
                        }`}
                        title={`Day ${d.day}: ${d.title}`}
                      >
                        {d.day}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Related Links */}
              <div className="bg-stone-800/80 rounded-lg p-5 border border-stone-700">
                <h2 className="font-serif text-sm font-bold text-stone-300 mb-3">Related</h2>
                <div className="space-y-2 text-sm">
                  <Link href="/iran-war-2026" className="block text-red-400 hover:text-red-300 transition-colors">
                    → Iran War Live Dashboard
                  </Link>
                  <Link href="/iran-war-vs-spending" className="block text-red-400 hover:text-red-300 transition-colors">
                    → War Cost vs. Spending
                  </Link>
                  <Link href="/iran-destruction" className="block text-red-400 hover:text-red-300 transition-colors">
                    → Iran Destruction Map
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
