'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { fmtMoney, fmt } from '@/lib/utils'

type Conflict = {
  id: string; name: string; shortName?: string; startYear: number; endYear?: number;
  era: string; type: string; region: string; outcome?: string; congressionalAuth?: boolean;
  costInflationAdjusted: number; usCasualties?: { deaths?: number }; civilianDeaths?: number;
}

const ERAS = ['All', 'Revolutionary & Early Republic', 'Civil War & Reconstruction', 'Expansion & Empire', 'World Wars', 'Cold War', 'Post-Cold War', 'War on Terror']
const TYPES = ['All', 'war', 'intervention', 'covert']
const OUTCOMES = ['All', 'Victory', 'Defeat', 'Inconclusive', 'Ongoing']
const SORTS = [
  { label: 'Year (newest)', fn: (a: Conflict, b: Conflict) => b.startYear - a.startYear },
  { label: 'Year (oldest)', fn: (a: Conflict, b: Conflict) => a.startYear - b.startYear },
  { label: 'Cost (highest)', fn: (a: Conflict, b: Conflict) => b.costInflationAdjusted - a.costInflationAdjusted },
  { label: 'Deaths (highest)', fn: (a: Conflict, b: Conflict) => (b.usCasualties?.deaths || 0) - (a.usCasualties?.deaths || 0) },
]

export default function ConflictsClient({ conflicts }: { conflicts: Conflict[] }) {
  const [era, setEra] = useState('All')
  const [type, setType] = useState('All')
  const [outcome, setOutcome] = useState('All')
  const [ongoingOnly, setOngoingOnly] = useState(false)
  const [sortIdx, setSortIdx] = useState(0)

  const filtered = useMemo(() => {
    let r = [...conflicts]
    if (era !== 'All') r = r.filter(c => c.era === era)
    if (type !== 'All') r = r.filter(c => c.type?.toLowerCase().includes(type))
    if (outcome !== 'All') r = r.filter(c => (c.outcome || '').includes(outcome))
    if (ongoingOnly) r = r.filter(c => !c.endYear)
    r.sort(SORTS[sortIdx].fn)
    return r
  }, [conflicts, era, type, outcome, ongoingOnly, sortIdx])

  const totalCost = filtered.reduce((s, c) => s + c.costInflationAdjusted, 0)
  const totalDeaths = filtered.reduce((s, c) => s + (c.usCasualties?.deaths || 0), 0)
  const ongoingCount = filtered.filter(c => !c.endYear).length

  return (
    <>
      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{filtered.length}</p>
          <p className="text-muted text-xs">Conflicts</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</p>
          <p className="text-muted text-xs">Total Cost</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmt(totalDeaths)}</p>
          <p className="text-muted text-xs">US Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{ongoingCount}</p>
          <p className="text-muted text-xs">Ongoing</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border p-4 mb-6 space-y-3">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-semibold text-stone-700 mr-1">Era:</span>
          {ERAS.map(e => (
            <button key={e} onClick={() => setEra(e)}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${era === e ? 'bg-primary text-stone-900 border-primary' : 'bg-stone-50 hover:bg-stone-100 border-stone-200'}`}>
              {e}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-semibold text-stone-700 mr-1">Type:</span>
          {TYPES.map(t => (
            <button key={t} onClick={() => setType(t)}
              className={`text-xs px-3 py-1.5 rounded-full border transition capitalize ${type === t ? 'bg-primary text-stone-900 border-primary' : 'bg-stone-50 hover:bg-stone-100 border-stone-200'}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-semibold text-stone-700 mr-1">Outcome:</span>
          {OUTCOMES.map(o => (
            <button key={o} onClick={() => setOutcome(o)}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${outcome === o ? 'bg-primary text-stone-900 border-primary' : 'bg-stone-50 hover:bg-stone-100 border-stone-200'}`}>
              {o}
            </button>
          ))}
          <label className="flex items-center gap-1.5 text-xs ml-2 cursor-pointer">
            <input type="checkbox" checked={ongoingOnly} onChange={e => setOngoingOnly(e.target.checked)} className="rounded" />
            Ongoing only
          </label>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-stone-700">Sort:</span>
          <select value={sortIdx} onChange={e => setSortIdx(Number(e.target.value))} className="text-sm border rounded px-2 py-1">
            {SORTS.map((s, i) => <option key={i} value={i}>{s.label}</option>)}
          </select>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-3 text-xs">
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-full bg-green-100 border border-green-300"></span> Victory</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-full bg-red-100 border border-red-300"></span> Defeat</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-full bg-yellow-100 border border-yellow-300"></span> Ongoing/Inconclusive</span>
        <span className="flex items-center gap-1">✅ Congressional authorization</span>
        <span className="flex items-center gap-1">❌ No authorization</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-stone-300 text-left">
              <th className="py-3 pr-4">Conflict</th>
              <th className="py-3 pr-4">Years</th>
              <th className="py-3 pr-4">Era</th>
              <th className="py-3 pr-4 text-right">Cost (2023 $)</th>
              <th className="py-3 pr-4 text-right">US Deaths</th>
              <th className="py-3 pr-4 text-right">Civilian Deaths</th>
              <th className="py-3 pr-4">Outcome</th>
              <th className="py-3" title="Congressional Authorization under Article I, Section 8">Congress?</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className={`border-b border-stone-200 hover:bg-stone-50 ${filtered.indexOf(c) % 2 === 1 ? 'bg-stone-50/50' : ''}`}>
                <td className="py-3 pr-4">
                  <Link href={`/conflicts/${c.id}`} className="text-primary font-semibold hover:underline">
                    {c.shortName || c.name}
                  </Link>
                </td>
                <td className="py-3 pr-4 text-muted font-mono text-xs">{c.startYear}–{c.endYear || 'Present'}</td>
                <td className="py-3 pr-4 text-muted text-xs">{c.era}</td>
                <td className="py-3 pr-4 text-right font-semibold">{fmtMoney(c.costInflationAdjusted)}</td>
                <td className="py-3 pr-4 text-right">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) : '—'}</td>
                <td className="py-3 pr-4 text-right">{c.civilianDeaths ? fmt(c.civilianDeaths) : '—'}</td>
                <td className="py-3 pr-4">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    c.outcome?.includes('Victory') ? 'bg-green-100 text-green-700' :
                    c.outcome?.includes('Defeat') ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>{c.outcome}</span>
                </td>
                <td className="py-3">{c.congressionalAuth ? '✅' : '❌'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filtered.length === 0 && <p className="text-center text-muted py-8">No conflicts match your filters.</p>}
    </>
  )
}
