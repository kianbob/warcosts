'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

type View = 'first-month' | 'projected'

interface Stat {
  label: string
  iran: string
  iraq: string
  iranProjected?: string
  iraqTotal?: string
}

const stats: Stat[] = [
  { label: 'Cost', iran: '$50B+', iraq: '$5B', iranProjected: '$300B+ (est. 1yr)', iraqTotal: '$1.1 Trillion' },
  { label: 'US Deaths', iran: '15', iraq: '139', iranProjected: '500–2,000 (est.)', iraqTotal: '4,431' },
  { label: 'US Wounded', iran: '303', iraq: '~500', iranProjected: '3,000+ (est.)', iraqTotal: '31,994' },
  { label: 'Civilian Deaths', iran: '3,300+', iraq: '~7,000', iranProjected: '50,000+ (est.)', iraqTotal: '200,000+' },
  { label: 'Countries Involved', iran: '12+', iraq: '39-nation coalition', iranProjected: '12+', iraqTotal: '39' },
  { label: 'Congressional Vote', iran: 'NO vote', iraq: '296-133 (H) / 77-23 (S)', iranProjected: 'NO vote', iraqTotal: '296-133 / 77-23' },
  { label: 'Coalition', iran: 'No formal coalition', iraq: '39-nation "Coalition of the Willing"', iranProjected: 'None', iraqTotal: '39 nations' },
  { label: 'Oil Price Impact', iran: '$60 → $108', iraq: '$25 → $37', iranProjected: '$60 → $150+ (est.)', iraqTotal: '$25 → $140 (peak 2008)' },
  { label: 'Public Support', iran: '56% oppose', iraq: '72% support', iranProjected: '60%+ oppose (est.)', iraqTotal: '~55% opposed by 2005' },
]

const chartDataFirstMonth = [
  { category: 'Cost ($B)', Iran: 50, Iraq: 5 },
  { category: 'US Deaths', Iran: 15, Iraq: 139 },
  { category: 'US Wounded', Iran: 303, Iraq: 500 },
  { category: 'Civilian Deaths', Iran: 3300, Iraq: 7000 },
]

const chartDataTotal = [
  { category: 'Cost ($B)', Iran: 300, Iraq: 1100 },
  { category: 'US Deaths', Iran: 1000, Iraq: 4431 },
  { category: 'US Wounded', Iran: 3000, Iraq: 31994 },
  { category: 'Civilian Deaths', Iran: 50000, Iraq: 200000 },
]

export default function CompareClient() {
  const [view, setView] = useState<View>('first-month')
  const isFirst = view === 'first-month'
  const chartData = isFirst ? chartDataFirstMonth : chartDataTotal

  return (
    <div className="space-y-8">
      {/* Toggle */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setView('first-month')}
          className={`px-5 py-2.5 rounded-lg font-semibold transition ${
            isFirst ? 'bg-red-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          First Month
        </button>
        <button
          onClick={() => setView('projected')}
          className={`px-5 py-2.5 rounded-lg font-semibold transition ${
            !isFirst ? 'bg-blue-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          Projected Total
        </button>
      </div>

      {/* Comparison table */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="grid grid-cols-3 bg-stone-50 border-b font-bold text-sm">
          <div className="p-4">Category</div>
          <div className="p-4 text-center text-red-700">🇮🇷 Iran War (2026)</div>
          <div className="p-4 text-center text-blue-900">🇮🇶 Iraq War (2003)</div>
        </div>
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`grid grid-cols-3 border-b last:border-b-0 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}`}
          >
            <div className="p-4 font-medium text-sm text-stone-700">{s.label}</div>
            <div className="p-4 text-center font-bold text-red-800 font-[family-name:var(--font-heading)]">
              {isFirst ? s.iran : (s.iranProjected || s.iran)}
            </div>
            <div className="p-4 text-center font-bold text-blue-900 font-[family-name:var(--font-heading)]">
              {isFirst ? s.iraq : (s.iraqTotal || s.iraq)}
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl border p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
          {isFirst ? 'First Month' : 'Projected Total'} — Key Metrics
        </h3>
        {chartData.map(row => (
          <div key={row.category} className="mb-6">
            <p className="text-sm font-medium text-stone-600 mb-2">{row.category}</p>
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <div className="text-xs text-red-700 mb-1">Iran: {row.Iran.toLocaleString()}</div>
                <div
                  className="bg-red-700 h-6 rounded-r-md transition-all duration-700"
                  style={{ width: `${Math.max(5, (row.Iran / Math.max(row.Iran, row.Iraq)) * 100)}%` }}
                />
              </div>
              <div className="flex-1">
                <div className="text-xs text-blue-900 mb-1">Iraq: {row.Iraq.toLocaleString()}</div>
                <div
                  className="bg-blue-900 h-6 rounded-r-md transition-all duration-700"
                  style={{ width: `${Math.max(5, (row.Iraq / Math.max(row.Iran, row.Iraq)) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key takeaways */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h4 className="font-[family-name:var(--font-heading)] font-bold text-red-800 text-lg mb-2">
            🇮🇷 Iran War — Key Differences
          </h4>
          <ul className="text-sm text-stone-700 space-y-1.5">
            <li>• No congressional authorization</li>
            <li>• No international coalition</li>
            <li>• 10× higher first-month cost than Iraq</li>
            <li>• Majority of Americans opposed from day one</li>
            <li>• Oil prices nearly doubled immediately</li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-[family-name:var(--font-heading)] font-bold text-blue-900 text-lg mb-2">
            🇮🇶 Iraq War — For Context
          </h4>
          <ul className="text-sm text-stone-700 space-y-1.5">
            <li>• Congressional vote: bipartisan support</li>
            <li>• 39-nation coalition at launch</li>
            <li>• 72% public approval initially</li>
            <li>• Lasted 8.5 years, cost $1.1 trillion</li>
            <li>• Support collapsed to ~30% by 2007</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
