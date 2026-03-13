// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'
import { fmtMoney, fmt } from '@/lib/utils'

export default function CompareCountriesPage() {
  const [countries, setCountries] = useState<any[]>([])
  const [a, setA] = useState('')
  const [b, setB] = useState('')

  useEffect(() => {
    fetch('/data/country-profiles-index.json')
      .then(r => r.json())
      .then(d => { setCountries(d); if (d.length >= 2) { setA(d[0].slug); setB(d[1].slug) } })
  }, [])

  const ca = countries.find(c => c.slug === a)
  const cb = countries.find(c => c.slug === b)

  const stats = ca && cb ? [
    { label: 'Military Spending', va: `$${ca.amountBillions}B`, vb: `$${cb.amountBillions}B` },
    { label: 'Global Rank', va: `#${ca.rank}`, vb: `#${cb.rank}` },
    { label: '% of World Spending', va: ca.pctWorld ? `${ca.pctWorld}%` : 'N/A', vb: cb.pctWorld ? `${cb.pctWorld}%` : 'N/A' },
    { label: '% of GDP', va: ca.gdpPct ? `${ca.gdpPct}%` : 'N/A', vb: cb.gdpPct ? `${cb.gdpPct}%` : 'N/A' },
    { label: '10-Year Trend', va: ca.trend10yr != null ? `${ca.trend10yr >= 0 ? '+' : ''}${ca.trend10yr}%` : 'N/A', vb: cb.trend10yr != null ? `${cb.trend10yr >= 0 ? '+' : ''}${cb.trend10yr}%` : 'N/A' },
    { label: 'US Bases', va: ca.usBases != null ? fmt(ca.usBases) : 'N/A', vb: cb.usBases != null ? fmt(cb.usBases) : 'N/A' },
    { label: 'Data Years', va: fmt(ca.dataYears), vb: fmt(cb.dataYears) },
  ] : []

  const maxSpending = ca && cb ? Math.max(ca.amountBillions, cb.amountBillions) : 1

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }, { label: 'Compare Countries' }]} />

        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-2">Compare Military Spending</h1>
        <p className="text-stone-500 mb-8">Select any two countries to compare their military spending side by side.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="text-stone-500 text-sm block mb-1">Country A</label>
            <select value={a} onChange={e => setA(e.target.value)}
              className="w-full bg-stone-800 border border-stone-200 rounded-lg px-4 py-3 text-white">
              {countries.map(c => <option key={c.slug} value={c.slug}>{c.name} — #{c.rank}</option>)}
            </select>
          </div>
          <div>
            <label className="text-stone-500 text-sm block mb-1">Country B</label>
            <select value={b} onChange={e => setB(e.target.value)}
              className="w-full bg-stone-800 border border-stone-200 rounded-lg px-4 py-3 text-white">
              {countries.map(c => <option key={c.slug} value={c.slug}>{c.name} — #{c.rank}</option>)}
            </select>
          </div>
        </div>

        {ca && cb && (
          <>
            {/* Bar Chart */}
            <div className="bg-stone-800 rounded-xl border border-stone-200 p-6 mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Spending Comparison</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-stone-600">{ca.name}</span>
                    <span className="text-red-700 font-mono">${ca.amountBillions}B</span>
                  </div>
                  <div className="h-8 bg-stone-700 rounded-lg overflow-hidden">
                    <div className="h-full bg-red-600 rounded-lg transition-all duration-500"
                      style={{ width: `${(ca.amountBillions / maxSpending) * 100}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-stone-600">{cb.name}</span>
                    <span className="text-red-700 font-mono">${cb.amountBillions}B</span>
                  </div>
                  <div className="h-8 bg-stone-700 rounded-lg overflow-hidden">
                    <div className="h-full bg-red-400 rounded-lg transition-all duration-500"
                      style={{ width: `${(cb.amountBillions / maxSpending) * 100}%` }} />
                  </div>
                </div>
              </div>
              {ca.amountBillions > cb.amountBillions ? (
                <p className="text-stone-500 text-sm mt-4">{ca.name} spends <strong className="text-red-700">{(ca.amountBillions / cb.amountBillions).toFixed(1)}×</strong> more than {cb.name}</p>
              ) : (
                <p className="text-stone-500 text-sm mt-4">{cb.name} spends <strong className="text-red-700">{(cb.amountBillions / ca.amountBillions).toFixed(1)}×</strong> more than {ca.name}</p>
              )}
            </div>

            {/* Stats Table */}
            <div className="bg-stone-800 rounded-xl border border-stone-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="py-3 px-4 text-left text-stone-500">Metric</th>
                    <th className="py-3 px-4 text-right text-red-700">{ca.name}</th>
                    <th className="py-3 px-4 text-right text-red-600">{cb.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.map(s => (
                    <tr key={s.label} className="border-b border-stone-200/50">
                      <td className="py-3 px-4 text-stone-500">{s.label}</td>
                      <td className="py-3 px-4 text-right font-mono text-stone-600">{s.va}</td>
                      <td className="py-3 px-4 text-right font-mono text-stone-600">{s.vb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/countries/${a}`} className="text-red-700 hover:text-red-600 text-sm">→ {ca.name} Full Profile</Link>
              <Link href={`/countries/${b}`} className="text-red-700 hover:text-red-600 text-sm">→ {cb.name} Full Profile</Link>
            </div>
          </>
        )}

        {/* Related Tools */}
        <div className="mt-12 pt-8 border-t border-stone-200">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">More Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/tools/compare-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <p className="font-bold">📊 Compare Wars</p>
              <p className="text-stone-500 text-sm">Side-by-side conflict data</p>
            </Link>
            <Link href="/tools/aid-calculator" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <p className="font-bold">🌍 Aid Calculator</p>
              <p className="text-stone-500 text-sm">Where your tax dollars go abroad</p>
            </Link>
            <Link href="/tools/budget-simulator" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <p className="font-bold">💰 Budget Simulator</p>
              <p className="text-stone-500 text-sm">Redesign the federal budget</p>
            </Link>
          </div>
        </div>

        <BackToTop />
      </div>
    </div>
  )
}
