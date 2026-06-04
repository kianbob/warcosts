import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import FaqJsonLd from '@/components/FaqJsonLd'

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
      <FaqJsonLd faqs={[
        { q: 'How much does the US spend on military compared to other countries?', a: 'The US spends more on its military than the next 10 countries combined, accounting for approximately 38% of global military expenditure.' },
        { q: 'What is total global military spending?', a: 'Global military spending exceeds $2.4 trillion per year. The United States leads at over $900 billion, followed by China (~$290 billion) and Russia (~$109 billion).' },
        { q: 'How much does China spend on its military?', a: 'China\'s official military budget is approximately $290 billion per year, though actual spending may be higher. This is still roughly one-third of US military spending.' },
        { q: 'Why does the US spend so much on its military?', a: 'The US maintains 750+ military bases in 80 countries, 11 aircraft carrier groups, a nuclear triad, and the world\'s most advanced weapons systems.' },
      ]} />
      <Breadcrumbs items={[{ label: 'Spending', href: '/spending' }, { label: 'Global Comparison' }]} />

      <div className="bg-stone-50 text-stone-900 rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold">
          Global Military Spending
        </h1>
        <p className="text-stone-500 mt-2">
          The world spent {fmtMoney(totalGlobal * 1e6)} on military in {top15[0]?.year || 2024}. The US accounts for {usPct}%.
        </p>
      </div>

      <ShareButtons title="Global Military Spending Comparison" />

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(usAmount * 1e6)}</p>
          <p className="text-xs text-stone-500">US Spending</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-stone-900 font-[family-name:var(--font-heading)]">{fmtMoney(totalGlobal * 1e6)}</p>
          <p className="text-xs text-stone-500">World Total</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{usPct}%</p>
          <p className="text-xs text-stone-500">US Share</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-stone-900 font-[family-name:var(--font-heading)]">{fmtMoney(next10Total * 1e6)}</p>
          <p className="text-xs text-stone-500">Next 10 Combined</p>
        </div>
      </div>

      {/* US > Next 10 callout */}
      {usAmount > next10Total && (
        <div className="bg-red-950 border border-red-900 rounded-lg p-6 mb-8 text-center">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">
            The US spends more than the next 10 countries combined
          </p>
          <p className="text-stone-500 mt-1">{fmtMoney(usAmount * 1e6)} vs {fmtMoney(next10Total * 1e6)}</p>
        </div>
      )}

      {/* Top 15 Bar Chart */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">🌍 Top 15 Military Spenders</h2>
      <div className="bg-white border border-stone-200 rounded-lg p-5 mb-10">
        <div className="space-y-3">
          {top15.map((e, i) => {
            const pct = (e.amount / usAmount) * 100
            const isUS = i === 0
            return (
              <div key={e.country}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm ${isUS ? 'text-red-700 font-bold' : 'text-stone-600'}`}>
                    {flagMap[e.country] || ''} #{i + 1} {e.country}
                  </span>
                  <span className={`text-sm font-bold ${isUS ? 'text-red-700' : 'text-stone-600'}`}>
                    {fmtMoney(e.amount * 1e6)}
                  </span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-3">
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
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">📈 Historical Trends (Top 5)</h2>
          <div className="space-y-6 mb-10">
            {trendCountries.map(country => {
              const entries = history[country]
              if (!entries || entries.length === 0) return null
              const recent = entries.slice(-10)
              const maxAmt = Math.max(...recent.map(e => e.amount))
              return (
                <div key={country} className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-stone-900 mb-3">{flagMap[country] || ''} {country}</h3>
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
                  <div className="flex justify-between text-xs text-stone-500 mt-2">
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
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">📋 All {latest.length} Countries</h2>
      <div className="bg-white border border-stone-200 rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-200">
              <th className="text-left px-4 py-2 text-stone-500">#</th>
              <th className="text-left px-4 py-2 text-stone-500">Country</th>
              <th className="text-right px-4 py-2 text-stone-500">Amount</th>
              <th className="text-right px-4 py-2 text-stone-500">% of World</th>
            </tr>
          </thead>
          <tbody>
            {latest.slice(0, 30).map((e, i) => (
              <tr key={e.country} className={`border-b border-stone-200/50 ${i === 0 ? 'bg-slate-800' : ''}`}>
                <td className="px-4 py-2 text-stone-500">{i + 1}</td>
                <td className={`px-4 py-2 ${i === 0 ? 'text-red-700 font-bold' : 'text-stone-600'}`}>
                  {flagMap[e.country] || ''} {e.country}
                </td>
                <td className={`px-4 py-2 text-right ${i === 0 ? 'text-red-700 font-bold' : 'text-stone-600'}`}>
                  {fmtMoney(e.amount * 1e6)}
                </td>
                <td className="px-4 py-2 text-right text-stone-500">
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

      {/* Per Capita Spending */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">👤 Military Spending Per Capita</h2>
      <p className="text-stone-500 mb-4">How much each citizen effectively "pays" for their country's military — reveals different priorities than raw totals.</p>
      <div className="bg-white border border-stone-200 rounded-lg p-5 mb-10">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-3 pr-4">Country</th>
                <th className="py-3 pr-4 text-right">Total Spending</th>
                <th className="py-3 pr-4 text-right">Population</th>
                <th className="py-3 pr-4 text-right">Per Capita</th>
                <th className="py-3 text-right">% of GDP</th>
              </tr>
            </thead>
            <tbody>
              {[
                { country: '🇺🇸 United States', total: '$916B', pop: '336M', perCap: '$2,726', gdp: '3.4%' },
                { country: '🇮🇱 Israel', total: '$24B', pop: '9.8M', perCap: '$2,449', gdp: '5.3%' },
                { country: '🇸🇦 Saudi Arabia', total: '$75B', pop: '36M', perCap: '$2,083', gdp: '7.1%' },
                { country: '🇦🇺 Australia', total: '$32B', pop: '26M', perCap: '$1,231', gdp: '2.0%' },
                { country: '🇬🇧 United Kingdom', total: '$75B', pop: '68M', perCap: '$1,103', gdp: '2.3%' },
                { country: '🇷🇺 Russia', total: '$109B', pop: '144M', perCap: '$757', gdp: '5.9%' },
                { country: '🇨🇳 China', total: '$296B', pop: '1.4B', perCap: '$211', gdp: '1.7%' },
                { country: '🇮🇳 India', total: '$84B', pop: '1.4B', perCap: '$60', gdp: '2.4%' },
              ].map(r => (
                <tr key={r.country} className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="py-3 pr-4 font-medium">{r.country}</td>
                  <td className="py-3 pr-4 text-right font-mono">{r.total}</td>
                  <td className="py-3 pr-4 text-right text-stone-500">{r.pop}</td>
                  <td className="py-3 pr-4 text-right font-mono font-bold text-red-700">{r.perCap}</td>
                  <td className="py-3 text-right font-mono">{r.gdp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400 mt-2">Sources: SIPRI 2024, World Bank. Per capita = total military spending ÷ population.</p>
      </div>

      {/* Regional Breakdown */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">🌍 Regional Military Spending</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          { region: 'North America', amount: '$948B', pct: '39%', note: 'US + Canada. Dominated by US at 97%' },
          { region: 'East Asia & Oceania', amount: '$446B', pct: '18%', note: 'China, Japan, South Korea, Australia, Taiwan' },
          { region: 'Europe', amount: '$418B', pct: '17%', note: 'NATO rearmament driving 10%+ annual growth' },
          { region: 'Middle East', amount: '$200B', pct: '8%', note: 'Saudi Arabia, Israel, Iran, UAE, Turkey' },
          { region: 'South Asia', amount: '$105B', pct: '4%', note: 'India + Pakistan nuclear rivalry' },
          { region: 'Rest of World', amount: '$283B', pct: '12%', note: 'Africa, Latin America, Central Asia' },
        ].map(r => (
          <div key={r.region} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-stone-800">{r.region}</h3>
              <span className="text-red-700 font-bold font-mono">{r.amount}</span>
            </div>
            <div className="w-full bg-stone-200 rounded-full h-2 mb-2">
              <div className="bg-red-600 h-2 rounded-full" style={{ width: r.pct }} />
            </div>
            <p className="text-xs text-stone-500">{r.pct} of global total — {r.note}</p>
          </div>
        ))}
      </div>

      {/* Opportunity Cost */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">💰 What $916 Billion Could Fund Instead</h2>
      <p className="text-stone-500 mb-4">The annual US military budget compared to domestic needs:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          { item: 'End US homelessness', cost: '$20B/year', times: '45x over', icon: '🏠' },
          { item: 'Free public college (all students)', cost: '$79B/year', times: '11x over', icon: '🎓' },
          { item: 'Clean water for every human on Earth', cost: '$28B one-time', times: '32x over', icon: '💧' },
          { item: 'End world hunger', cost: '$45B/year (UN est.)', times: '20x over', icon: '🍞' },
          { item: 'Universal pre-K (US)', cost: '$26B/year', times: '35x over', icon: '👶' },
          { item: 'NASA\'s entire budget', cost: '$25B/year', times: '36x over', icon: '🚀' },
        ].map(o => (
          <div key={o.item} className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <p className="text-3xl mb-1">{o.icon}</p>
            <p className="font-medium text-stone-800 text-sm">{o.item}</p>
            <p className="font-mono text-xs text-stone-500">{o.cost}</p>
            <p className="font-bold text-red-700 font-mono mt-1">{o.times}</p>
          </div>
        ))}
      </div>

      {/* Historical Context */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">📅 Historical Context</h2>
      <div className="bg-white border border-stone-200 rounded-lg p-6 mb-10">
        <ul className="space-y-3 text-sm text-stone-700">
          <li className="flex gap-3"><span className="font-mono text-red-700 min-w-[4rem]">1945</span> US military spending was 37% of GDP at WWII peak</li>
          <li className="flex gap-3"><span className="font-mono text-red-700 min-w-[4rem]">1953</span> Korean War spending hit 14.2% of GDP</li>
          <li className="flex gap-3"><span className="font-mono text-red-700 min-w-[4rem]">1968</span> Vietnam War peak: 9.5% of GDP</li>
          <li className="flex gap-3"><span className="font-mono text-red-700 min-w-[4rem]">1989</span> Cold War ends. "Peace dividend" briefly cuts spending to 5.2% GDP</li>
          <li className="flex gap-3"><span className="font-mono text-red-700 min-w-[4rem]">2001</span> 9/11 launches War on Terror. Budget doubles in a decade</li>
          <li className="flex gap-3"><span className="font-mono text-red-700 min-w-[4rem]">2010</span> Peak War on Terror spending: $849B (2024$)</li>
          <li className="flex gap-3"><span className="font-mono text-red-700 min-w-[4rem]">2024</span> $916B — highest in inflation-adjusted dollars since WWII</li>
        </ul>
        <p className="text-xs text-stone-400 mt-4">Despite the "peace dividend" promise after the Cold War, US military spending has only increased. The 2024 budget is higher in real terms than any point during the Cold War, Vietnam, or Korean Wars.</p>
      </div>

      <div className="text-center">
        <Link href="/spending" className="text-red-700 hover:text-red-600 text-sm">← US Spending Detail</Link>
        {' · '}
        <Link href="/spending/2024" className="text-red-700 hover:text-red-600 text-sm">2024 Spending →</Link>
      </div>

      <BackToTop />
    </div>
  )
}
