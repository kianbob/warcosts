import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Global Military Spending — US Spends More Than Next 10 Combined',
  description: 'Compare military spending of every country. The US spends more than the next 10 countries combined. Full data for 143 countries with historical trends.',
}

interface SpendingEntry { country: string; amount: number; year: number }
interface HistoryEntry { year: number; amount: number }

export default function GlobalSpendingPage() {
  const data: { latest: SpendingEntry[]; history: Record<string, HistoryEntry[]> } = loadData('global-spending.json')
  const { latest, history } = data

  const top15 = latest.slice(0, 15)
  const usAmount = top15[0]?.amount || 0
  const totalGlobal = latest.reduce((s, e) => s + e.amount, 0)
  const next10Total = top15.slice(1, 11).reduce((s, e) => s + e.amount, 0)
  const usPct = ((usAmount / totalGlobal) * 100).toFixed(1)

  const flagMap: Record<string, string> = {
    'United States of America': '🇺🇸', 'China': '🇨🇳', 'Russia': '🇷🇺', 'Germany': '🇩🇪',
    'India': '🇮🇳', 'Saudi Arabia': '🇸🇦', 'United Kingdom': '🇬🇧', 'Ukraine': '🇺🇦',
    'France': '🇫🇷', 'Japan': '🇯🇵', 'South Korea': '🇰🇷', 'Italy': '🇮🇹',
    'Australia': '🇦🇺', 'Poland': '🇵🇱', 'Israel': '🇮🇱', 'Turkey': '🇹🇷',
    'Canada': '🇨🇦', 'Brazil': '🇧🇷', 'Iran': '🇮🇷', 'Taiwan': '🇹🇼',
  }

  // Historical trend for top 5
  const trendCountries = Object.keys(history).slice(0, 5)

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Spending', href: '/spending' }, { label: 'Global Comparison' }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold">
          Global Military Spending
        </h1>
        <p className="text-stone-400 mt-2">
          The world spent {fmtMoney(totalGlobal * 1e6)} on military in {top15[0]?.year || 2024}. The US accounts for {usPct}%.
        </p>
      </div>

      <ShareButtons title="Global Military Spending Comparison" />

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
          <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmtMoney(usAmount * 1e6)}</p>
          <p className="text-xs text-stone-400">US Spending</p>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
          <p className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">{fmtMoney(totalGlobal * 1e6)}</p>
          <p className="text-xs text-stone-400">World Total</p>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
          <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{usPct}%</p>
          <p className="text-xs text-stone-400">US Share</p>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
          <p className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">{fmtMoney(next10Total * 1e6)}</p>
          <p className="text-xs text-stone-400">Next 10 Combined</p>
        </div>
      </div>

      {/* US > Next 10 callout */}
      {usAmount > next10Total && (
        <div className="bg-red-950 border border-red-900 rounded-lg p-6 mb-8 text-center">
          <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">
            The US spends more than the next 10 countries combined
          </p>
          <p className="text-stone-400 mt-1">{fmtMoney(usAmount * 1e6)} vs {fmtMoney(next10Total * 1e6)}</p>
        </div>
      )}

      {/* Top 15 Bar Chart */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">🌍 Top 15 Military Spenders</h2>
      <div className="bg-stone-800 border border-stone-700 rounded-lg p-5 mb-10">
        <div className="space-y-3">
          {top15.map((e, i) => {
            const pct = (e.amount / usAmount) * 100
            const isUS = i === 0
            return (
              <div key={e.country}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm ${isUS ? 'text-red-400 font-bold' : 'text-stone-300'}`}>
                    {flagMap[e.country] || ''} #{i + 1} {e.country}
                  </span>
                  <span className={`text-sm font-bold ${isUS ? 'text-red-400' : 'text-stone-300'}`}>
                    {fmtMoney(e.amount * 1e6)}
                  </span>
                </div>
                <div className="w-full bg-stone-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${isUS ? 'bg-red-600' : 'bg-stone-500'}`}
                    style={{ width: `${Math.max(pct, 2)}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Historical Trends */}
      {trendCountries.length > 0 && (
        <>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">📈 Historical Trends (Top 5)</h2>
          <div className="space-y-6 mb-10">
            {trendCountries.map(country => {
              const entries = history[country]
              if (!entries || entries.length === 0) return null
              const recent = entries.slice(-10)
              const maxAmt = Math.max(...recent.map(e => e.amount))
              return (
                <div key={country} className="bg-stone-800 border border-stone-700 rounded-lg p-5">
                  <h3 className="font-semibold text-white mb-3">{flagMap[country] || ''} {country}</h3>
                  <div className="flex items-end gap-1 h-20">
                    {recent.map(e => (
                      <div key={e.year} className="flex-1 flex flex-col items-center">
                        <div
                          className={`w-full rounded-t ${country.includes('United States') ? 'bg-red-600' : 'bg-stone-500'}`}
                          style={{ height: `${(e.amount / maxAmt) * 100}%` }}
                        />
                        <span className="text-[9px] text-stone-500 mt-1">{String(e.year).slice(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-stone-400 mt-2">
                    <span>{fmtMoney(recent[0].amount * 1e6)} ({recent[0].year})</span>
                    <span>{fmtMoney(recent[recent.length - 1].amount * 1e6)} ({recent[recent.length - 1].year})</span>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}

      {/* All Countries Table */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">📋 All {latest.length} Countries</h2>
      <div className="bg-stone-800 border border-stone-700 rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-700">
              <th className="text-left px-4 py-2 text-stone-400">#</th>
              <th className="text-left px-4 py-2 text-stone-400">Country</th>
              <th className="text-right px-4 py-2 text-stone-400">Amount</th>
              <th className="text-right px-4 py-2 text-stone-400">% of World</th>
            </tr>
          </thead>
          <tbody>
            {latest.slice(0, 30).map((e, i) => (
              <tr key={e.country} className={`border-b border-stone-700/50 ${i === 0 ? 'bg-slate-800' : ''}`}>
                <td className="px-4 py-2 text-stone-400">{i + 1}</td>
                <td className={`px-4 py-2 ${i === 0 ? 'text-red-400 font-bold' : 'text-stone-300'}`}>
                  {flagMap[e.country] || ''} {e.country}
                </td>
                <td className={`px-4 py-2 text-right ${i === 0 ? 'text-red-400 font-bold' : 'text-stone-300'}`}>
                  {fmtMoney(e.amount * 1e6)}
                </td>
                <td className="px-4 py-2 text-right text-stone-400">
                  {((e.amount / totalGlobal) * 100).toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {latest.length > 30 && (
          <p className="px-4 py-3 text-stone-500 text-sm text-center">
            + {latest.length - 30} more countries
          </p>
        )}
      </div>

      <div className="text-center">
        <Link href="/spending" className="text-red-400 hover:text-red-300 text-sm">← US Spending Detail</Link>
        {' · '}
        <Link href="/spending/2024" className="text-red-400 hover:text-red-300 text-sm">2024 Spending →</Link>
      </div>

      <BackToTop />
    </div>
  )
}
