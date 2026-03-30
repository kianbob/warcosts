'use client'

import { useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, Cell,
} from 'recharts'

type Company = {
  name: string; ticker: string; preWarPrice: number; currentPrice: number;
  percentChange: number; marketCapGain: number; ceo: string; ceoComp: number;
  lobbying2025: number; revolvingDoorHires: number; topProducts: string[];
  iranWarContracts: string; ceoStockGain?: number; sharesOutstanding: number;
}

type Props = {
  data: {
    companies: Company[]
    chartData: { date: string; defense: number; sp500: number }[]
    historicalPattern: { conflict: string; defenseStockReturn: string; sp500Return: string; topPerformer: string }[]
    shareholderAnalysis: {
      topInstitutional: { name: string; defenseHoldings: string; note: string }[]
      pensionFunds: { name: string; defenseHoldings: string; note: string }[]
      congressMembers: { name: string; party: string; holdings: string; note: string }[]
    }
    followTheMoney: Record<string, string>
    summary: Record<string, number>
  }
}

function fmtB(n: number) {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
  return `$${(n / 1e3).toFixed(0)}K`
}

function fmtM(n: number) {
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`
  return `$${n}`
}

export default function ProfiteersClient({ data }: Props) {
  const [sortKey, setSortKey] = useState<'percentChange' | 'marketCapGain' | 'ceoComp'>('percentChange')
  const [expanded, setExpanded] = useState<string | null>(null)

  const sorted = [...data.companies].sort((a, b) => (b[sortKey] as number) - (a[sortKey] as number))

  const barData = sorted.map(c => ({
    name: c.ticker,
    gain: c.percentChange,
  }))

  return (
    <div className="bg-stone-950 text-stone-200">
      {/* Performance Chart */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Defense Stocks vs S&P 500</h2>
        <p className="text-stone-400 mb-8">Indexed to 100 on Feb 28, 2026 — the day the war began</p>
        <div className="bg-stone-900 border border-stone-800 rounded-xl p-4 md:p-6">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data.chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
              <XAxis dataKey="date" stroke="#a8a29e" fontSize={12} />
              <YAxis stroke="#a8a29e" fontSize={12} domain={[85, 135]} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }}
                labelStyle={{ color: '#a8a29e' }}
              />
              <Legend />
              <Line type="monotone" dataKey="defense" name="Defense Index" stroke="#4ade80" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="sp500" name="S&P 500" stroke="#f87171" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-stone-500 text-xs mt-4 text-center">
            While American soldiers die and Iranian civilians are killed, defense shareholders celebrate record gains.
          </p>
        </div>
      </section>

      {/* Stock Table */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-stone-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">The War Profiteers</h2>
            <p className="text-stone-400">Top 15 defense contractors ranked by stock performance since Feb 28, 2026</p>
          </div>
          <div className="flex gap-2">
            {([['percentChange', '% Change'], ['marketCapGain', 'Cap Gain'], ['ceoComp', 'CEO Pay']] as const).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSortKey(key)}
                className={`px-3 py-1.5 text-xs rounded-lg border transition ${
                  sortKey === key
                    ? 'bg-green-400/20 border-green-400/50 text-green-400'
                    : 'bg-stone-900 border-stone-700 text-stone-400 hover:border-stone-500'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Bar chart */}
        <div className="bg-stone-900 border border-stone-800 rounded-xl p-4 md:p-6 mb-8">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
              <XAxis dataKey="name" stroke="#a8a29e" fontSize={11} />
              <YAxis stroke="#a8a29e" fontSize={12} tickFormatter={v => `${v}%`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }}
                formatter={(v: number | undefined) => [`+${(v ?? 0).toFixed(1)}%`, 'Stock Gain']}
              />
              <Bar dataKey="gain" radius={[4, 4, 0, 0]}>
                {barData.map((_, i) => (
                  <Cell key={i} fill={i < 3 ? '#22c55e' : i < 8 ? '#4ade80' : '#86efac'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-stone-500 border-b border-stone-800 text-left">
                <th className="py-3 px-2">#</th>
                <th className="py-3 px-2">Company</th>
                <th className="py-3 px-2 text-right">Pre-War</th>
                <th className="py-3 px-2 text-right">Current</th>
                <th className="py-3 px-2 text-right">Change</th>
                <th className="py-3 px-2 text-right hidden md:table-cell">Cap Gain</th>
                <th className="py-3 px-2 text-right hidden lg:table-cell">CEO Comp</th>
                <th className="py-3 px-2 text-right hidden lg:table-cell">Lobbying</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((c, i) => (
                <tr
                  key={c.ticker}
                  className="border-b border-stone-800/50 hover:bg-stone-900/50 cursor-pointer transition"
                  onClick={() => setExpanded(expanded === c.ticker ? null : c.ticker)}
                >
                  <td className="py-3 px-2 text-stone-500">{i + 1}</td>
                  <td className="py-3 px-2">
                    <div className="font-bold text-white">{c.name}</div>
                    <div className="text-stone-500 text-xs font-mono">{c.ticker}</div>
                  </td>
                  <td className="py-3 px-2 text-right text-stone-400 font-mono">${c.preWarPrice}</td>
                  <td className="py-3 px-2 text-right text-green-400 font-mono font-bold">${c.currentPrice}</td>
                  <td className="py-3 px-2 text-right">
                    <span className="text-green-400 font-bold font-mono">+{c.percentChange.toFixed(1)}%</span>
                  </td>
                  <td className="py-3 px-2 text-right text-green-400 font-mono hidden md:table-cell">{fmtB(c.marketCapGain)}</td>
                  <td className="py-3 px-2 text-right text-stone-300 font-mono hidden lg:table-cell">{fmtM(c.ceoComp)}</td>
                  <td className="py-3 px-2 text-right text-stone-400 font-mono hidden lg:table-cell">{fmtM(c.lobbying2025)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-green-400/30 text-green-400 font-bold">
                <td className="py-3 px-2" colSpan={4}></td>
                <td className="py-3 px-2 text-right font-mono">
                  +{(data.companies.reduce((s, c) => s + c.percentChange, 0) / data.companies.length).toFixed(1)}% avg
                </td>
                <td className="py-3 px-2 text-right font-mono hidden md:table-cell">
                  {fmtB(data.companies.reduce((s, c) => s + c.marketCapGain, 0))}
                </td>
                <td className="py-3 px-2 text-right font-mono hidden lg:table-cell">
                  {fmtM(data.companies.reduce((s, c) => s + c.ceoComp, 0))}
                </td>
                <td className="py-3 px-2 text-right font-mono hidden lg:table-cell">
                  {fmtM(data.companies.reduce((s, c) => s + c.lobbying2025, 0))}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Expanded detail */}
        {expanded && (() => {
          const c = data.companies.find(x => x.ticker === expanded)
          if (!c) return null
          return (
            <div className="mt-4 bg-stone-900 border border-stone-800 rounded-xl p-6 animate-in fade-in">
              <h3 className="text-lg font-bold text-white mb-3">{c.name} ({c.ticker})</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-stone-500 mb-1">Key Products</div>
                  <div className="text-stone-300">{c.topProducts.join(', ')}</div>
                </div>
                <div>
                  <div className="text-stone-500 mb-1">Iran War Role</div>
                  <div className="text-stone-300">{c.iranWarContracts}</div>
                </div>
                <div>
                  <div className="text-stone-500 mb-1">Revolving Door</div>
                  <div className="text-stone-300">{c.revolvingDoorHires} former government officials employed</div>
                </div>
                <div>
                  <div className="text-stone-500 mb-1">CEO: {c.ceo}</div>
                  <div className="text-green-400 font-mono">{fmtM(c.ceoComp)}/yr compensation</div>
                  {c.ceoStockGain && <div className="text-green-400 font-mono text-xs">+{fmtM(c.ceoStockGain)} stock gain from war</div>}
                </div>
              </div>
            </div>
          )
        })()}

        <p className="text-stone-600 text-xs mt-6">
          Click any row for details. Prices estimated based on historical defense stock behavior during military conflicts.
          CEO compensation from latest SEC proxy filings. Lobbying data from OpenSecrets.org.
        </p>
      </section>

      {/* Follow the Money */}
      <section className="border-t border-stone-800 bg-stone-900">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Follow the Money</h2>
          <p className="text-stone-400 mb-8">Where war profits flow</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Total Market Cap Gained', value: data.followTheMoney.totalMarketCapGain, color: 'green' },
              { label: 'CEO Compensation (Top 15)', value: data.followTheMoney.totalCeoComp, color: 'green' },
              { label: 'Industry Lobbying (2025)', value: data.followTheMoney.totalLobbying2025, color: 'yellow' },
              { label: 'Campaign Contributions (2024)', value: data.followTheMoney.campaignContributions, color: 'yellow' },
              { label: 'Stock Buybacks (2025)', value: data.followTheMoney.stockBuybacks, color: 'green' },
              { label: 'Revolving Door', value: data.followTheMoney.revolvingDoor, color: 'red' },
            ].map(item => (
              <div key={item.label} className="bg-stone-950 border border-stone-800 rounded-xl p-6">
                <div className="text-stone-500 text-sm mb-2">{item.label}</div>
                <div className={`text-lg font-bold ${
                  item.color === 'green' ? 'text-green-400' : item.color === 'yellow' ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-stone-950 border border-red-900/50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💀</div>
              <div>
                <div className="text-white font-bold text-lg mb-1">The Human Cost vs. Shareholder Value</div>
                <p className="text-stone-400">
                  For every US service member deployed to the Iran theater, defense shareholders gained
                  <span className="text-green-400 font-bold"> {data.followTheMoney.perSoldierProfit}</span> in market value.
                  For every civilian killed, shareholders celebrate another earnings beat.
                  The system works exactly as designed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pattern */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-stone-800">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">The Pattern</h2>
        <p className="text-stone-400 mb-8">Defense stocks outperform during every single conflict. It&apos;s not a coincidence — it&apos;s the business model.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-stone-500 border-b border-stone-800 text-left">
                <th className="py-3 px-3">Conflict</th>
                <th className="py-3 px-3 text-right">Defense Stocks</th>
                <th className="py-3 px-3 text-right">S&P 500</th>
                <th className="py-3 px-3 text-right hidden md:table-cell">Top Performer</th>
              </tr>
            </thead>
            <tbody>
              {data.historicalPattern.map(row => (
                <tr key={row.conflict} className="border-b border-stone-800/50 hover:bg-stone-900/50">
                  <td className="py-3 px-3 text-white font-medium">{row.conflict}</td>
                  <td className="py-3 px-3 text-right text-green-400 font-mono font-bold">{row.defenseStockReturn}</td>
                  <td className="py-3 px-3 text-right font-mono">
                    <span className={row.sp500Return.startsWith('-') ? 'text-red-400' : 'text-stone-300'}>
                      {row.sp500Return}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right text-green-400 font-mono text-xs hidden md:table-cell">{row.topPerformer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-stone-600 text-xs mt-4">
          Returns measured from conflict start to peak. Sources: S&P Capital IQ, CRSP, Yahoo Finance historical data.
        </p>
      </section>

      {/* Shareholder Analysis */}
      <section className="border-t border-stone-800 bg-stone-900">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Who Owns the War Machine?</h2>
          <p className="text-stone-400 mb-8">
            If you have a 401(k), you probably profit from war too. That&apos;s by design.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Institutional */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Top Institutional Holders</h3>
              <div className="space-y-3">
                {data.shareholderAnalysis.topInstitutional.map(h => (
                  <div key={h.name} className="bg-stone-950 border border-stone-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-bold">{h.name}</span>
                      <span className="text-green-400 font-mono font-bold">{h.defenseHoldings}</span>
                    </div>
                    <p className="text-stone-500 text-xs">{h.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pension Funds */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Your Pension Profits from War</h3>
              <div className="space-y-3">
                {data.shareholderAnalysis.pensionFunds.map(h => (
                  <div key={h.name} className="bg-stone-950 border border-stone-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-bold">{h.name}</span>
                      <span className="text-green-400 font-mono font-bold">{h.defenseHoldings}</span>
                    </div>
                    <p className="text-stone-500 text-xs">{h.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-stone-950 border border-yellow-900/50 rounded-lg p-4">
                <h4 className="text-yellow-400 font-bold mb-2">Congress Members with Defense Holdings</h4>
                <p className="text-stone-400 text-sm">
                  {data.shareholderAnalysis.congressMembers[0].holdings}.{' '}
                  <span className="text-yellow-400">{data.shareholderAnalysis.congressMembers[0].note}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-stone-950 border border-stone-800 rounded-xl p-6 text-center">
            <p className="text-stone-400 text-lg">
              &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence,
              whether sought or unsought, by the military-industrial complex.&rdquo;
            </p>
            <p className="text-stone-600 mt-2">— President Dwight D. Eisenhower, Farewell Address, 1961</p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-stone-800">
        <h2 className="text-lg font-bold text-white mb-4">Methodology & Sources</h2>
        <div className="text-stone-500 text-sm space-y-2">
          <p>
            Pre-war prices reflect market close on February 27, 2026. Current prices are estimated based on
            historical defense stock performance during military conflicts and real-time market data.
            Market cap gains calculated from shares outstanding × price change.
          </p>
          <p>
            CEO compensation data from latest SEC proxy filings (DEF 14A). Lobbying data from OpenSecrets.org.
            Revolving door figures from the Project on Government Oversight (POGO). Historical returns from
            S&P Capital IQ and CRSP databases. Shareholder data from SEC 13F filings.
          </p>
          <p>
            This page uses estimated data for illustrative purposes. Actual returns may vary.
            Not financial advice. The point isn&apos;t the exact numbers — it&apos;s the pattern.
          </p>
        </div>
      </section>
    </div>
  )
}
