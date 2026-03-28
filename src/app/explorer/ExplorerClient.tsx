'use client'

import { useState, useMemo } from 'react'

interface Conflict {
  id: string
  name: string
  startYear: number
  endYear: number | null
  era: string
  type: string
  costInflationAdjusted: number | null
  usCasualties: { deaths: number; wounded?: number } | null
  civilianDeaths: number | null
  outcome: string
}

type SortKey = 'name' | 'startYear' | 'duration' | 'cost' | 'deaths' | 'civilianDeaths' | 'outcome'

function fmt(n: number | null | undefined): string {
  if (n == null) return '—'
  if (n >= 1e12) return `$${(n / 1e12).toFixed(1)}T`
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`
  return `$${n.toLocaleString()}`
}

function numFmt(n: number | null | undefined): string {
  if (n == null) return '—'
  return n.toLocaleString()
}

export default function ExplorerClient({ conflicts }: { conflicts: Conflict[] }) {
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('startYear')
  const [sortAsc, setSortAsc] = useState(false)
  const [eraFilter, setEraFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [outcomeFilter, setOutcomeFilter] = useState('')

  const eras = useMemo(() => [...new Set(conflicts.map((c) => c.era))].sort(), [conflicts])
  const types = useMemo(() => [...new Set(conflicts.map((c) => c.type))].sort(), [conflicts])
  const outcomes = useMemo(() => [...new Set(conflicts.map((c) => c.outcome))].sort(), [conflicts])

  const filtered = useMemo(() => {
    let list = conflicts
    if (search) {
      const q = search.toLowerCase()
      list = list.filter((c) => c.name.toLowerCase().includes(q))
    }
    if (eraFilter) list = list.filter((c) => c.era === eraFilter)
    if (typeFilter) list = list.filter((c) => c.type === typeFilter)
    if (outcomeFilter) list = list.filter((c) => c.outcome === outcomeFilter)
    return list
  }, [conflicts, search, eraFilter, typeFilter, outcomeFilter])

  const sorted = useMemo(() => {
    const getVal = (c: Conflict): number | string => {
      switch (sortKey) {
        case 'name': return c.name
        case 'startYear': return c.startYear
        case 'duration': return (c.endYear ?? 2026) - c.startYear
        case 'cost': return c.costInflationAdjusted ?? 0
        case 'deaths': return c.usCasualties?.deaths ?? 0
        case 'civilianDeaths': return c.civilianDeaths ?? 0
        case 'outcome': return c.outcome
      }
    }
    return [...filtered].sort((a, b) => {
      const va = getVal(a), vb = getVal(b)
      const cmp = typeof va === 'string' ? va.localeCompare(vb as string) : (va as number) - (vb as number)
      return sortAsc ? cmp : -cmp
    })
  }, [filtered, sortKey, sortAsc])

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc)
    else { setSortKey(key); setSortAsc(false) }
  }

  const hdr = (label: string, key: SortKey) => (
    <th
      className="px-3 py-2 text-left text-xs font-medium text-stone-400 uppercase tracking-wider cursor-pointer hover:text-stone-200 select-none whitespace-nowrap"
      onClick={() => toggleSort(key)}
    >
      {label} {sortKey === key ? (sortAsc ? '↑' : '↓') : ''}
    </th>
  )

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="Search conflicts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-stone-800 border border-stone-700 rounded px-3 py-2 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-red-500 w-64"
        />
        <select value={eraFilter} onChange={(e) => setEraFilter(e.target.value)} className="bg-stone-800 border border-stone-700 rounded px-3 py-2 text-sm text-stone-200">
          <option value="">All Eras</option>
          {eras.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="bg-stone-800 border border-stone-700 rounded px-3 py-2 text-sm text-stone-200">
          <option value="">All Types</option>
          {types.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <select value={outcomeFilter} onChange={(e) => setOutcomeFilter(e.target.value)} className="bg-stone-800 border border-stone-700 rounded px-3 py-2 text-sm text-stone-200">
          <option value="">All Outcomes</option>
          {outcomes.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <p className="text-stone-500 text-sm mb-3">{sorted.length} conflicts</p>

      <div className="overflow-x-auto rounded-lg border border-stone-700">
        <table className="w-full text-sm">
          <thead className="bg-stone-800/80">
            <tr>
              {hdr('Name', 'name')}
              {hdr('Years', 'startYear')}
              {hdr('Duration', 'duration')}
              {hdr('Cost (adj.)', 'cost')}
              {hdr('US Deaths', 'deaths')}
              {hdr('Civilian Deaths', 'civilianDeaths')}
              {hdr('Outcome', 'outcome')}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            {sorted.map((c) => (
              <tr key={c.id} className="hover:bg-stone-800/40 transition-colors">
                <td className="px-3 py-2 text-stone-200 font-medium whitespace-nowrap">
                  <a href={`/${c.id}`} className="hover:text-red-400 transition-colors">{c.name}</a>
                </td>
                <td className="px-3 py-2 text-stone-400 whitespace-nowrap">{c.startYear}–{c.endYear ?? 'present'}</td>
                <td className="px-3 py-2 text-stone-400">{(c.endYear ?? 2026) - c.startYear}y</td>
                <td className="px-3 py-2 text-stone-300 tabular-nums">{fmt(c.costInflationAdjusted)}</td>
                <td className="px-3 py-2 text-stone-300 tabular-nums">{numFmt(c.usCasualties?.deaths)}</td>
                <td className="px-3 py-2 text-stone-300 tabular-nums">{numFmt(c.civilianDeaths)}</td>
                <td className="px-3 py-2 text-stone-400">{c.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
