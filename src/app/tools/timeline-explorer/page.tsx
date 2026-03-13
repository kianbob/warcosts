'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import Link from 'next/link'

type TimelineItem = {
  id: string
  name: string
  year: number
  type: 'operation' | 'conflict' | 'vote'
  description: string
  detail?: string
}

const TYPE_COLORS = {
  operation: { dot: 'bg-red-500', label: 'text-red-700', bg: 'bg-red-500/10 border-red-500/30' },
  conflict: { dot: 'bg-amber-500', label: 'text-amber-700', bg: 'bg-amber-500/10 border-amber-500/30' },
  vote: { dot: 'bg-blue-500', label: 'text-blue-700', bg: 'bg-blue-500/10 border-blue-500/30' },
}

export default function TimelineExplorerPage() {
  const [operations, setOperations] = useState<any[]>([])
  const [conflicts, setConflicts] = useState<any[]>([])
  const [votes, setVotes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<TimelineItem | null>(null)
  const [filters, setFilters] = useState({ operation: true, conflict: true, vote: true })
  const [rangeStart, setRangeStart] = useState(1776)
  const [rangeEnd, setRangeEnd] = useState(2026)

  useEffect(() => {
    Promise.all([
      fetch('/data/operations.json').then(r => r.json()),
      fetch('/data/conflicts.json').then(r => r.json()),
      fetch('/data/war-votes.json').then(r => r.json()),
    ]).then(([ops, con, vot]) => {
      setOperations(ops)
      setConflicts(con)
      setVotes(vot)
      setLoading(false)
    })
  }, [])

  const items: TimelineItem[] = useMemo(() => {
    const all: TimelineItem[] = []

    if (filters.operation) {
      operations.forEach(o => all.push({
        id: `op-${o.slug}`,
        name: o.name,
        year: o.year,
        type: 'operation',
        description: o.description || '',
        detail: o.outcome || o.keyFact || '',
      }))
    }

    if (filters.conflict) {
      conflicts.forEach(c => all.push({
        id: `con-${c.id}`,
        name: c.name,
        year: c.startYear,
        type: 'conflict',
        description: c.description || '',
        detail: c.endYear ? `${c.startYear}–${c.endYear}` : `${c.startYear}–present`,
      }))
    }

    if (filters.vote) {
      votes.forEach(v => all.push({
        id: `vote-${v.slug}`,
        name: v.name,
        year: v.year,
        type: 'vote',
        description: v.notes || '',
        detail: [v.houseVote && `House: ${v.houseVote}`, v.senateVote && `Senate: ${v.senateVote}`, v.result].filter(Boolean).join(' · '),
      }))
    }

    return all
      .filter(i => i.year >= rangeStart && i.year <= rangeEnd)
      .sort((a, b) => a.year - b.year)
  }, [operations, conflicts, votes, filters, rangeStart, rangeEnd])

  const decades = useMemo(() => {
    const d: number[] = []
    for (let y = Math.floor(rangeStart / 10) * 10; y <= rangeEnd; y += 10) d.push(y)
    return d
  }, [rangeStart, rangeEnd])

  const getPosition = useCallback((year: number) => {
    return ((year - rangeStart) / (rangeEnd - rangeStart)) * 100
  }, [rangeStart, rangeEnd])

  // Group items by year to handle overlaps
  const groupedByYear = useMemo(() => {
    const map = new Map<number, TimelineItem[]>()
    items.forEach(item => {
      const arr = map.get(item.year) || []
      arr.push(item)
      map.set(item.year, arr)
    })
    return map
  }, [items])

  const toggleFilter = (type: 'operation' | 'conflict' | 'vote') => {
    setFilters(f => ({ ...f, [type]: !f[type] }))
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-stone-800 rounded w-1/3" />
          <div className="h-64 bg-stone-800 rounded" />
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-stone-500 mb-4">
        <Link href="/" className="hover:text-stone-900">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/tools" className="hover:text-stone-900">Tools</Link>
        <span className="mx-2">›</span>
        <span className="text-stone-900 font-medium">Timeline Explorer</span>
      </nav>

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
        Timeline <span className="text-red-700">Explorer</span>
      </h1>
      <p className="text-stone-600 text-lg mb-8 max-w-3xl">
        250 years of American military history on a single timeline. Every war, operation, and congressional vote — visualized.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        {(['operation', 'conflict', 'vote'] as const).map(type => (
          <button
            key={type}
            onClick={() => toggleFilter(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              filters[type]
                ? `${TYPE_COLORS[type].bg} ${TYPE_COLORS[type].label} border-current`
                : 'bg-stone-800 text-stone-500 border-stone-200'
            }`}
          >
            <span className={`inline-block w-2.5 h-2.5 rounded-full mr-2 ${filters[type] ? TYPE_COLORS[type].dot : 'bg-stone-600'}`} />
            {type === 'operation' ? 'Operations' : type === 'conflict' ? 'Conflicts' : 'Congressional Votes'}
            <span className="ml-2 text-xs opacity-70">
              ({type === 'operation' ? operations.length : type === 'conflict' ? conflicts.length : votes.length})
            </span>
          </button>
        ))}
      </div>

      {/* Range sliders */}
      <div className="flex flex-wrap gap-4 items-center mb-8 text-sm text-stone-500">
        <label className="flex items-center gap-2">
          From:
          <input type="number" min={1776} max={rangeEnd - 1} value={rangeStart}
            onChange={e => setRangeStart(Number(e.target.value))}
            className="bg-stone-100 border border-stone-300 rounded px-2 py-1 w-20 text-stone-900" />
        </label>
        <label className="flex items-center gap-2">
          To:
          <input type="number" min={rangeStart + 1} max={2026} value={rangeEnd}
            onChange={e => setRangeEnd(Number(e.target.value))}
            className="bg-stone-100 border border-stone-300 rounded px-2 py-1 w-20 text-stone-900" />
        </label>
        <span className="text-stone-500">
          Showing {items.length} events
        </span>
      </div>

      {/* Timeline */}
      <div className="relative mb-8">
        {/* Decade markers */}
        <div className="relative h-8 mb-2">
          {decades.map(d => (
            <span key={d} className="absolute text-xs text-stone-500 -translate-x-1/2"
              style={{ left: `${getPosition(d)}%` }}>
              {d}
            </span>
          ))}
        </div>

        {/* The line */}
        <div className="relative h-2 bg-stone-800 rounded-full">
          {decades.map(d => (
            <div key={d} className="absolute top-0 w-px h-2 bg-stone-700"
              style={{ left: `${getPosition(d)}%` }} />
          ))}
        </div>

        {/* Dots */}
        <div className="relative h-16 mt-1">
          {Array.from(groupedByYear.entries()).map(([year, yearItems]) => (
            <div key={year} className="absolute" style={{ left: `${getPosition(year)}%` }}>
              {yearItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(selected?.id === item.id ? null : item)}
                  className={`absolute w-3 h-3 rounded-full ${TYPE_COLORS[item.type].dot} hover:scale-150 transition-transform cursor-pointer ${
                    selected?.id === item.id ? 'ring-2 ring-white scale-150' : ''
                  }`}
                  style={{ top: `${idx * 14}px`, transform: 'translateX(-50%)' }}
                  title={`${item.name} (${item.year})`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Selected detail */}
      {selected && (
        <div className={`border rounded-xl p-6 mb-8 ${TYPE_COLORS[selected.type].bg}`}>
          <div className="flex items-start justify-between">
            <div>
              <span className={`text-xs font-semibold uppercase tracking-wider ${TYPE_COLORS[selected.type].label}`}>
                {selected.type} · {selected.year}
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mt-1">
                {selected.name}
              </h2>
            </div>
            <button onClick={() => setSelected(null)} className="text-stone-500 hover:text-white text-2xl leading-none">×</button>
          </div>
          {selected.detail && (
            <p className="text-stone-600 mt-2 text-sm font-mono">{selected.detail}</p>
          )}
          {selected.description && (
            <p className="text-stone-600 mt-3">{selected.description}</p>
          )}
        </div>
      )}

      {/* Event list */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">All Events ({items.length})</h2>
      <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className={`w-full text-left p-3 rounded-lg border transition hover:bg-slate-800 ${
              selected?.id === item.id ? TYPE_COLORS[item.type].bg : 'bg-stone-900 border-stone-800'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${TYPE_COLORS[item.type].dot}`} />
              <span className="text-stone-500 font-mono text-sm w-12">{item.year}</span>
              <span className="text-white font-medium">{item.name}</span>
              <span className={`text-xs uppercase ml-auto ${TYPE_COLORS[item.type].label}`}>{item.type}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Related Tools */}
      <div className="mt-12 pt-8 border-t border-stone-800">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">More Tools</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/tools/compare-wars" className="bg-stone-900 border border-stone-800 rounded-lg p-4 hover:bg-stone-800 transition">
            <p className="font-bold text-stone-900">📊 Compare Wars</p>
            <p className="text-stone-500 text-sm">Side-by-side conflict data</p>
          </Link>
          <Link href="/tools/war-quiz" className="bg-stone-900 border border-stone-800 rounded-lg p-4 hover:bg-stone-800 transition">
            <p className="font-bold text-stone-900">❓ War Quiz</p>
            <p className="text-stone-500 text-sm">Test your knowledge</p>
          </Link>
          <Link href="/tools/budget-simulator" className="bg-stone-900 border border-stone-800 rounded-lg p-4 hover:bg-stone-800 transition">
            <p className="font-bold text-stone-900">💰 Budget Simulator</p>
            <p className="text-stone-500 text-sm">Redesign the federal budget</p>
          </Link>
        </div>
      </div>

      {/* Back to top */}
      <div className="mt-12 text-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-stone-500 hover:text-white transition">
          ↑ Back to top
        </button>
      </div>
    </div>
  )
}
