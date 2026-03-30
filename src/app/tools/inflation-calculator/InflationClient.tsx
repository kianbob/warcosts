'use client'

import { useState, useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

/* ── War data ── */
interface WarData {
  name: string
  shortName: string
  years: string
  originalCost: number      // billions, nominal
  adjustedCost: number       // billions, 2026 dollars
  perCapitaThen: number      // dollars
  perCapitaNow: number       // 2026 dollars
  gdpPctThen: number         // % of GDP during war
  gdpEquivNow: number        // what that % of 2026 GDP would be, in $B
  usDead: number
  note?: string
}

const WARS: WarData[] = [
  { name: 'Revolutionary War', shortName: 'Revolution', years: '1775–1783', originalCost: 2.4, adjustedCost: 101, perCapitaThen: 1, perCapitaNow: 297, gdpPctThen: 63, gdpEquivNow: 18270, usDead: 25000 },
  { name: 'War of 1812', shortName: '1812', years: '1812–1815', originalCost: 1.6, adjustedCost: 45, perCapitaThen: 0.2, perCapitaNow: 132, gdpPctThen: 13, gdpEquivNow: 3770, usDead: 15000 },
  { name: 'Civil War (Union)', shortName: 'Civil War', years: '1861–1865', originalCost: 5.2, adjustedCost: 130, perCapitaThen: 165, perCapitaNow: 382, gdpPctThen: 104, gdpEquivNow: 30160, usDead: 364511 },
  { name: 'World War I', shortName: 'WWI', years: '1917–1918', originalCost: 334, adjustedCost: 5500, perCapitaThen: 3200, perCapitaNow: 16176, gdpPctThen: 52, gdpEquivNow: 15080, usDead: 116516 },
  { name: 'World War II', shortName: 'WWII', years: '1941–1945', originalCost: 4100, adjustedCost: 6200, perCapitaThen: 30000, perCapitaNow: 18235, gdpPctThen: 181, gdpEquivNow: 52490, usDead: 405399 },
  { name: 'Korean War', shortName: 'Korea', years: '1950–1953', originalCost: 341, adjustedCost: 4100, perCapitaThen: 2200, perCapitaNow: 12059, gdpPctThen: 14.1, gdpEquivNow: 4089, usDead: 36574 },
  { name: 'Vietnam War', shortName: 'Vietnam', years: '1955–1975', originalCost: 844, adjustedCost: 5200, perCapitaThen: 4100, perCapitaNow: 15294, gdpPctThen: 12, gdpEquivNow: 3480, usDead: 58220 },
  { name: 'Gulf War', shortName: 'Gulf', years: '1990–1991', originalCost: 102, adjustedCost: 250, perCapitaThen: 410, perCapitaNow: 735, gdpPctThen: 1.7, gdpEquivNow: 493, usDead: 383 },
  { name: 'War in Afghanistan', shortName: 'Afghanistan', years: '2001–2021', originalCost: 2300, adjustedCost: 2300, perCapitaThen: 7000, perCapitaNow: 6765, gdpPctThen: 1.0, gdpEquivNow: 290, usDead: 2461, note: 'Already in near-2026 dollars' },
  { name: 'Iraq War', shortName: 'Iraq', years: '2003–2011', originalCost: 1900, adjustedCost: 1900, perCapitaThen: 6300, perCapitaNow: 5588, gdpPctThen: 1.0, gdpEquivNow: 290, usDead: 4431, note: 'Already in near-2026 dollars' },
  { name: 'Iran (2026–)', shortName: 'Iran', years: '2026–', originalCost: 18, adjustedCost: 18, perCapitaThen: 53, perCapitaNow: 53, gdpPctThen: 0.06, gdpEquivNow: 18, usDead: 0, note: '$18B+ and counting' },
]

const COLORS = ['#991b1b', '#dc2626', '#ef4444', '#f87171', '#b91c1c', '#7f1d1d', '#c2410c', '#ea580c', '#d97706', '#f59e0b', '#a16207']

/* ── Custom inflation calc ── */
// Simple CPI-based: CPI 2026 ≈ 320, base 1913=10
const CPI_ANCHORS: Record<number, number> = {
  1775: 0.53, 1800: 0.61, 1812: 0.62, 1850: 0.55, 1860: 0.56, 1865: 0.95,
  1900: 0.85, 1913: 1.0, 1917: 1.2, 1920: 2.0, 1930: 1.7, 1940: 1.4,
  1945: 1.8, 1950: 2.4, 1960: 2.9, 1970: 3.9, 1975: 5.4, 1980: 8.2,
  1985: 10.8, 1990: 13.1, 1995: 15.2, 2000: 17.2, 2005: 19.5, 2010: 21.8,
  2015: 23.7, 2020: 25.9, 2024: 31.4, 2025: 32.0, 2026: 32.5,
}

function getCPI(year: number): number {
  if (year in CPI_ANCHORS) return CPI_ANCHORS[year]
  const years = Object.keys(CPI_ANCHORS).map(Number).sort((a, b) => a - b)
  if (year < years[0]) return CPI_ANCHORS[years[0]]
  if (year > years[years.length - 1]) return CPI_ANCHORS[years[years.length - 1]]
  const lo = years.filter(y => y <= year).pop()!
  const hi = years.find(y => y >= year)!
  if (lo === hi) return CPI_ANCHORS[lo]
  const frac = (year - lo) / (hi - lo)
  return CPI_ANCHORS[lo] + frac * (CPI_ANCHORS[hi] - CPI_ANCHORS[lo])
}

function inflationAdjust(amount: number, fromYear: number): number {
  return amount * (getCPI(2026) / getCPI(fromYear))
}

function fmtMoney(n: number): string {
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}T`
  if (n >= 1) return `$${n.toFixed(1)}B`
  if (n >= 0.001) return `$${(n * 1000).toFixed(0)}M`
  return `$${(n * 1_000_000).toFixed(0)}K`
}

function fmtDollars(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)}B`
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}K`
  return `$${n.toFixed(2)}`
}

export default function InflationClient() {
  const [selectedWar, setSelectedWar] = useState<string>(WARS[4].name) // WWII default
  const [calcAmount, setCalcAmount] = useState<string>('1000')
  const [calcYear, setCalcYear] = useState<string>('1945')

  const war = WARS.find(w => w.name === selectedWar)!

  const calcResult = useMemo(() => {
    const amt = parseFloat(calcAmount)
    const yr = parseInt(calcYear)
    if (isNaN(amt) || isNaN(yr) || yr < 1775 || yr > 2026) return null
    return inflationAdjust(amt, yr)
  }, [calcAmount, calcYear])

  const chartData = WARS.map(w => ({ name: w.shortName, cost: w.adjustedCost, years: w.years }))

  return (
    <div>
      {/* War selector */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-stone-700 mb-2">Select a war:</label>
        <select
          value={selectedWar}
          onChange={e => setSelectedWar(e.target.value)}
          className="w-full md:w-96 border border-stone-300 rounded-lg px-4 py-3 text-stone-900 bg-white text-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
        >
          {WARS.map(w => (
            <option key={w.name} value={w.name}>{w.name} ({w.years})</option>
          ))}
        </select>
      </div>

      {/* War detail card */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-1 text-stone-900">{war.name}</h3>
        <p className="text-stone-500 text-sm mb-6">{war.years} · {war.usDead.toLocaleString()} US deaths</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <p className="text-stone-500 text-xs uppercase tracking-wide mb-1">Original Cost</p>
            <p className="text-2xl font-bold text-stone-900">{fmtMoney(war.originalCost)}</p>
            <p className="text-stone-400 text-xs mt-1">nominal dollars</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-100">
            <p className="text-red-800 text-xs uppercase tracking-wide mb-1">2026 Adjusted</p>
            <p className="text-2xl font-bold text-red-900">{fmtMoney(war.adjustedCost)}</p>
            <p className="text-red-400 text-xs mt-1">{war.adjustedCost > war.originalCost ? `${(war.adjustedCost / war.originalCost).toFixed(0)}× more` : 'current dollars'}</p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <p className="text-stone-500 text-xs uppercase tracking-wide mb-1">Per Capita (then)</p>
            <p className="text-2xl font-bold text-stone-900">${war.perCapitaThen.toLocaleString()}</p>
            <p className="text-stone-400 text-xs mt-1">per person in era</p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <p className="text-stone-500 text-xs uppercase tracking-wide mb-1">Per Capita (2026 $)</p>
            <p className="text-2xl font-bold text-stone-900">${war.perCapitaNow.toLocaleString()}</p>
            <p className="text-stone-400 text-xs mt-1">inflation-adjusted</p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <p className="text-stone-500 text-xs uppercase tracking-wide mb-1">% of GDP (then)</p>
            <p className="text-2xl font-bold text-stone-900">{war.gdpPctThen}%</p>
            <p className="text-stone-400 text-xs mt-1">of GDP during conflict</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
            <p className="text-amber-800 text-xs uppercase tracking-wide mb-1">GDP Equivalent Now</p>
            <p className="text-2xl font-bold text-amber-900">{fmtMoney(war.gdpEquivNow)}</p>
            <p className="text-amber-600 text-xs mt-1">{war.gdpPctThen}% of 2026 GDP</p>
          </div>
        </div>

        {war.note && (
          <p className="text-stone-500 text-sm mt-4 italic">Note: {war.note}</p>
        )}
      </div>

      {/* Bar chart */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
        All US Wars in <span className="text-red-600">2026 Dollars</span>
      </h2>

      <div className="bg-white rounded-xl border border-stone-200 p-4 mb-10" style={{ height: 420 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, bottom: 40, left: 10 }}>
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#78716c' }} angle={-35} textAnchor="end" height={60} />
            <YAxis tick={{ fontSize: 11, fill: '#78716c' }} tickFormatter={v => v >= 1000 ? `$${(v / 1000).toFixed(0)}T` : `$${v}B`} />
            <Tooltip
              formatter={(value: any) => [fmtMoney(value), '2026 Cost']}
              labelFormatter={(label: any) => {
                const w = WARS.find(w => w.shortName === label)
                return w ? `${w.name} (${w.years})` : label
              }}
              contentStyle={{ backgroundColor: '#1c1917', border: 'none', borderRadius: 8, color: '#fff' }}
              itemStyle={{ color: '#fca5a5' }}
              labelStyle={{ color: '#fff', fontWeight: 'bold' }}
            />
            <Bar dataKey="cost" radius={[4, 4, 0, 0]}>
              {chartData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Custom calculator */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
        Inflation <span className="text-red-600">Calculator</span>
      </h2>
      <p className="text-stone-500 text-sm mb-6">Enter any dollar amount and year to see its 2026 equivalent.</p>

      <div className="bg-white rounded-xl border border-stone-200 p-6 mb-10">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm text-stone-600 mb-1">Amount ($)</label>
            <input
              type="number" value={calcAmount}
              onChange={e => setCalcAmount(e.target.value)}
              className="w-full border border-stone-300 rounded-lg px-4 py-3 text-stone-900 text-lg"
              placeholder="1000"
            />
          </div>
          <div className="w-32">
            <label className="block text-sm text-stone-600 mb-1">Year</label>
            <input
              type="number" value={calcYear} min={1775} max={2026}
              onChange={e => setCalcYear(e.target.value)}
              className="w-full border border-stone-300 rounded-lg px-4 py-3 text-stone-900 text-lg"
              placeholder="1945"
            />
          </div>
        </div>

        {calcResult !== null && (
          <div className="bg-red-50 border border-red-100 rounded-lg p-5">
            <p className="text-stone-600 text-sm">
              <strong className="text-stone-900">${parseFloat(calcAmount).toLocaleString()}</strong> in {calcYear} =
            </p>
            <p className="text-3xl font-bold text-red-900 mt-1">
              {fmtDollars(calcResult)}
            </p>
            <p className="text-stone-500 text-xs mt-2">
              in 2026 dollars ({(calcResult / parseFloat(calcAmount)).toFixed(1)}× multiplier)
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
