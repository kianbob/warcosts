// @ts-nocheck
'use client'
import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Breadcrumbs from '@/components/Breadcrumbs'
import { fmtMoney, fmt, slugify } from '@/lib/utils'

export default function PresidentsPage() {
  const [data, setData] = useState<any[]>([])
  const [filter, setFilter] = useState<'all' | 'wartime' | 'peacetime'>('all')

  useEffect(() => {
    document.title = 'Presidents at War — Every Commander-in-Chief Ranked'
    if (!document.querySelector('meta[name="description"]')) { const m = document.createElement('meta'); m.name = 'description'; m.content = 'All 46 presidents ranked by wars, military spending, casualties, and war cost. From Washington to the present — who spent the most on war?'; document.head.appendChild(m); }
    fetch('/data/presidents.json').then(r => r.json()).then(setData)
  }, [])

  const filtered = data.filter(d => {
    if (filter === 'wartime') return d.conflicts.length > 0
    if (filter === 'peacetime') return d.conflicts.length === 0
    return true
  })

  const chartData = [...data]
    .filter(d => d.totalCost > 0)
    .sort((a, b) => b.warCostAdjusted2024 - a.warCostAdjusted2024)
    .slice(0, 12)
    .map(d => ({
      name: d.name,
      costB: (d.warCostAdjusted2024 || d.totalCost) / 1e9,
    }))

  const totalDeaths = data.reduce((s, d) => s + d.totalUSDeaths, 0)
  const totalCost = data.reduce((s, d) => s + (d.warCostAdjusted2024 || d.totalCost), 0)
  const wartimePresidents = data.filter(d => d.conflicts.length > 0).length
  const peacetimePresidents = data.filter(d => d.conflicts.length === 0).length

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Presidents at War' }]} />
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Presidents at War</h1>
        <p className="text-stone-500 mb-2 max-w-3xl">
          Every commander-in-chief from Washington to the present — ranked by wars fought,
          money spent, and American lives lost. Who kept the peace, and who chose war?
        </p>
        <ShareButtons title="Presidents at War — Every Commander-in-Chief Ranked" />

        {/* Summary Stats */}
        {data.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{wartimePresidents}</p>
              <p className="text-xs text-stone-500">Wartime Presidents</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <p className="text-2xl font-bold text-green-700 font-[family-name:var(--font-heading)]">{peacetimePresidents}</p>
              <p className="text-xs text-stone-500">Peacetime Presidents</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(totalDeaths)}</p>
              <p className="text-xs text-stone-500">Total US War Deaths</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</p>
              <p className="text-xs text-stone-500">Total War Cost (2024$)</p>
            </div>
          </div>
        )}

        {chartData.length > 0 && (
          <div className="bg-white rounded-xl border p-6 my-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">War Cost by President — Inflation-Adjusted (2024 Billions)</h2>
            <ResponsiveContainer width="100%" height={450}>
              <BarChart data={chartData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={v => `$${v}B`} />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip formatter={v => `$${Number(v).toLocaleString()}B`} />
                <Bar dataKey="costB" fill="#991b1b" name="War Cost (2024$)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex gap-2 my-6">
          {(['all', 'wartime', 'peacetime'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === f ? 'bg-stone-900 text-white' : 'bg-white border text-stone-600 hover:bg-stone-100'
              }`}
            >
              {f === 'all' ? `All (${data.length})` : f === 'wartime' ? `Wartime (${wartimePresidents})` : `Peacetime (${peacetimePresidents})`}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-3 pr-2 w-8">#</th>
                <th className="py-3 pr-4">President</th>
                <th className="py-3 pr-4">Party</th>
                <th className="py-3 pr-4">Years</th>
                <th className="py-3 pr-4">Conflicts</th>
                <th className="py-3 pr-4 text-right">War Cost (2024$)</th>
                <th className="py-3 text-right">US Deaths</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(d => (
                <tr key={d.name} className={`border-b border-stone-200 hover:bg-stone-50 ${d.conflicts.length === 0 ? 'text-stone-400' : ''}`}>
                  <td className="py-3 pr-2 text-stone-400 text-xs">{d.number || '—'}</td>
                  <td className="py-3 pr-4 font-medium">
                    <a href={`/presidents/${slugify(d.name)}`} className="text-primary hover:underline">{d.fullName || d.name}</a>
                  </td>
                  <td className="py-3 pr-4 text-stone-500">{d.party || '—'}</td>
                  <td className="py-3 pr-4 text-stone-500 text-xs">{d.years || '—'}</td>
                  <td className="py-3 pr-4">{d.conflicts.length > 0 ? d.conflicts.join(', ') : <span className="text-green-600 text-xs">No major conflicts</span>}</td>
                  <td className="py-3 pr-4 text-right font-bold text-red-800">{d.warCostAdjusted2024 ? fmtMoney(d.warCostAdjusted2024) : d.totalCost > 0 ? fmtMoney(d.totalCost) : '—'}</td>
                  <td className="py-3 text-right">{d.totalUSDeaths > 0 ? fmt(d.totalUSDeaths) : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Analysis Link */}
        <div className="bg-stone-900 text-white rounded-xl p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">📊 Deep Analysis: Presidents &amp; War</h2>
          <p className="text-stone-400 mb-4">Which presidents expanded conflict vs. kept the peace? Ranked by wars started, military spending, casualties, and executive war powers used.</p>
          <a href="/analysis/presidents-war-record" className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg font-medium transition">Read the Full Analysis →</a>
        </div>

        <blockquote className="border-l-4 border-red-800 pl-4 italic text-stone-400 my-8">
          &ldquo;The executive has no right, in any case, to decide the question, whether there is or is not
          cause for declaring war.&rdquo;
          <br /><span className="not-italic text-stone-500">— James Madison</span>
        </blockquote>

        <BackToTop />
      </div>
    </>
  )
}
