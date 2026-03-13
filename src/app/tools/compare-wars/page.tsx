'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import ShareButtons from '@/components/ShareButtons'

interface Conflict {
  id: string
  shortName: string
  costInflationAdjusted: number
  usCasualties: { deaths: number }
  civilianDeaths: number | null
  computed: {
    durationDays: number
    costPerDay: number
    costPerUSdeath: number
  }
  startYear: number
  endYear: number | string
}

const COLORS = ['#991b1b', '#b91c1c', '#dc2626', '#ef4444']

function fmt(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(1)}T`
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`
  return `$${n.toLocaleString()}`
}

function fmtNum(n: number): string {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `${(n / 1e3).toFixed(0)}K`
  return n.toLocaleString()
}

export default function CompareWarsPage() {
  const [allConflicts, setAllConflicts] = useState<Conflict[]>([])
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    fetch('/data/conflicts.json')
      .then(r => r.json())
      .then((data: Conflict[]) => {
        setAllConflicts(data)
        setSelected(['world-war-ii', 'vietnam-war', 'iraq-war', 'afghanistan'])
      })
  }, [])

  function toggle(id: string) {
    setSelected(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id)
      if (prev.length >= 4) return prev
      return [...prev, id]
    })
  }

  const wars = selected.map(id => allConflicts.find(c => c.id === id)).filter(Boolean) as Conflict[]

  const costData = wars.map(w => ({ name: w.shortName, Cost: w.costInflationAdjusted }))
  const deathData = wars.map(w => ({ name: w.shortName, 'US Deaths': w.usCasualties?.deaths || 0, 'Civilian Deaths': w.civilianDeaths || 0 }))
  const durationData = wars.map(w => ({ name: w.shortName, 'Days': w.computed?.durationDays || 0 }))
  const costPerDayData = wars.map(w => ({ name: w.shortName, '$/Day': w.computed?.costPerDay || 0 }))
  const costPerLifeData = wars.map(w => ({ name: w.shortName, '$/Life': w.computed?.costPerUSdeath || 0 }))

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/tools" className="text-stone-400 hover:text-red-700 text-sm">← Back to Tools</Link>
      </div>

      <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-2">
        Compare Wars Side by Side
      </h1>
      <p className="text-stone-400 mb-6">Select 2–4 conflicts to compare costs, casualties, and duration.</p>

      {/* Selector */}
      <div className="bg-stone-900 rounded-xl p-4 mb-8 max-h-60 overflow-y-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {allConflicts.map(c => (
            <button
              key={c.id}
              onClick={() => toggle(c.id)}
              className={`text-left text-sm px-3 py-2 rounded-lg transition ${
                selected.includes(c.id)
                  ? 'bg-red-900/60 border border-red-700 text-stone-900'
                  : 'bg-white border border-stone-200 text-stone-400 hover:border-stone-500'
              } ${!selected.includes(c.id) && selected.length >= 4 ? 'opacity-40 cursor-not-allowed' : ''}`}
              disabled={!selected.includes(c.id) && selected.length >= 4}
            >
              {c.shortName} <span className="text-stone-500">({c.startYear})</span>
            </button>
          ))}
        </div>
      </div>

      {wars.length >= 2 && (
        <div className="space-y-8">
          {/* Summary table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-700">
                  <th className="text-left text-stone-400 py-2">Metric</th>
                  {wars.map(w => <th key={w.id} className="text-right text-stone-300 py-2 px-3">{w.shortName}</th>)}
                </tr>
              </thead>
              <tbody className="text-stone-300">
                <tr className="border-b border-stone-200">
                  <td className="py-2 text-stone-400">Total Cost</td>
                  {wars.map(w => <td key={w.id} className="text-right px-3 font-mono">{fmt(w.costInflationAdjusted)}</td>)}
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-2 text-stone-400">US Deaths</td>
                  {wars.map(w => <td key={w.id} className="text-right px-3 font-mono">{(w.usCasualties?.deaths || 0).toLocaleString()}</td>)}
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-2 text-stone-400">Civilian Deaths</td>
                  {wars.map(w => <td key={w.id} className="text-right px-3 font-mono">{w.civilianDeaths ? w.civilianDeaths.toLocaleString() : 'N/A'}</td>)}
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-2 text-stone-400">Duration (days)</td>
                  {wars.map(w => <td key={w.id} className="text-right px-3 font-mono">{(w.computed?.durationDays || 0).toLocaleString()}</td>)}
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-2 text-stone-400">Cost/Day</td>
                  {wars.map(w => <td key={w.id} className="text-right px-3 font-mono">{fmt(w.computed?.costPerDay || 0)}</td>)}
                </tr>
                <tr>
                  <td className="py-2 text-stone-400">Cost/US Death</td>
                  {wars.map(w => <td key={w.id} className="text-right px-3 font-mono">{fmt(w.computed?.costPerUSdeath || 0)}</td>)}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ChartCard title="Total Cost (inflation-adjusted)">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={costData}>
                  <XAxis dataKey="name" tick={{ fill: '#a8a29e', fontSize: 11 }} />
                  <YAxis tick={{ fill: '#a8a29e', fontSize: 11 }} tickFormatter={(v) => fmt(v)} />
                  <Tooltip formatter={(v) => fmt(v as number)} contentStyle={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }} />
                  <Bar dataKey="Cost" fill="#991b1b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Deaths">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={deathData}>
                  <XAxis dataKey="name" tick={{ fill: '#a8a29e', fontSize: 11 }} />
                  <YAxis tick={{ fill: '#a8a29e', fontSize: 11 }} tickFormatter={(v) => fmtNum(v)} />
                  <Tooltip formatter={(v) => (v as number).toLocaleString()} contentStyle={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }} />
                  <Legend />
                  <Bar dataKey="US Deaths" fill="#991b1b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Civilian Deaths" fill="#b91c1c" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Duration (days)">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={durationData}>
                  <XAxis dataKey="name" tick={{ fill: '#a8a29e', fontSize: 11 }} />
                  <YAxis tick={{ fill: '#a8a29e', fontSize: 11 }} />
                  <Tooltip formatter={(v) => `${(v as number).toLocaleString()} days`} contentStyle={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }} />
                  <Bar dataKey="Days" fill="#991b1b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Cost per US Death">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={costPerLifeData}>
                  <XAxis dataKey="name" tick={{ fill: '#a8a29e', fontSize: 11 }} />
                  <YAxis tick={{ fill: '#a8a29e', fontSize: 11 }} tickFormatter={(v) => fmt(v)} />
                  <Tooltip formatter={(v) => fmt(v as number)} contentStyle={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }} />
                  <Bar dataKey="$/Life" fill="#b91c1c" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <ShareButtons title="Compare America's wars side by side — costs, casualties, and duration at WarCosts.org" />
        </div>
      )}

      {wars.length < 2 && (
        <div className="text-center text-stone-500 py-12">
          Select at least 2 conflicts above to compare.
        </div>
      )}

      {/* Related Tools */}
      <div className="mt-12 pt-8 border-t border-stone-800">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">More Tools</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/tools/casualty-calculator" className="bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 hover:shadow-md transition">
            <p className="font-bold text-stone-900">🏙️ Casualty Calculator</p>
            <p className="text-stone-400 text-sm">War casualties in your city</p>
          </Link>
          <Link href="/tools/budget-simulator" className="bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 hover:shadow-md transition">
            <p className="font-bold text-stone-900">💰 Budget Simulator</p>
            <p className="text-stone-400 text-sm">Redesign the federal budget</p>
          </Link>
          <Link href="/tools/compare-countries" className="bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 hover:shadow-md transition">
            <p className="font-bold text-stone-900">⚖️ Compare Countries</p>
            <p className="text-stone-400 text-sm">Military spending face-off</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-stone-900 rounded-xl p-4">
      <h3 className="text-sm font-semibold text-stone-300 mb-3">{title}</h3>
      {children}
    </div>
  )
}
