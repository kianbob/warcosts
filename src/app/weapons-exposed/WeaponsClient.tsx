'use client'

import { useState, useMemo } from 'react'
import weaponsData from '../../../public/data/weapons-used-iran.json'

type Weapon = typeof weaponsData[number] & { flightHourCost?: number }

const TYPE_LABELS: Record<string, string> = {
  all: 'All',
  missile: 'Missiles',
  aircraft: 'Aircraft',
  drone: 'Drones',
  interceptor: 'Interceptors',
  bomb: 'Bombs',
  naval: 'Naval',
}

const TYPE_ICONS: Record<string, string> = {
  missile: '🚀',
  aircraft: '✈️',
  drone: '🛸',
  interceptor: '🛡️',
  bomb: '💣',
  naval: '🚢',
}

type SortKey = 'totalCost' | 'unitCost' | 'estimatedUsed'

const SORT_LABELS: Record<SortKey, string> = {
  totalCost: 'Total Cost',
  unitCost: 'Unit Cost',
  estimatedUsed: 'Quantity Used',
}

function fmtMoney(n: number): string {
  if (n >= 1e9) {
    const v = n / 1e9
    return `$${v % 1 === 0 ? v.toFixed(0) : v.toFixed(1)}B`
  }
  if (n >= 1e6) {
    const v = n / 1e6
    return `$${v % 1 === 0 ? v.toFixed(0) : v.toFixed(1)}M`
  }
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`
  return `$${n.toFixed(0)}`
}

function fmt(n: number): string {
  return n.toLocaleString()
}

// "Real cost" comparisons
const TEACHER_SALARY = 76000
const SCHOOL_LUNCH_YEAR = 7500 // ~$7.5K per child per year of school lunches

const realCostComparisons = [
  { weapon: 'Tomahawk', cost: 2000000, equiv: `${Math.round(2000000 / TEACHER_SALARY)} teacher salaries`, icon: '👩‍🏫' },
  { weapon: 'JDAM', cost: 25000, equiv: `a year of school lunches for ${Math.round(25000 / (SCHOOL_LUNCH_YEAR / 3))} kids`, icon: '🍎' },
  { weapon: 'F-35 (1 hour)', cost: 36000, equiv: `a year of insulin for 12 diabetics`, icon: '💉' },
  { weapon: 'THAAD Interceptor', cost: 12000000, equiv: `240 affordable homes`, icon: '🏠' },
  { weapon: 'B-2 Sortie', cost: 130000, equiv: `a 4-year state university degree`, icon: '🎓' },
  { weapon: 'SM-3 Interceptor', cost: 15000000, equiv: `3 fully-equipped elementary schools`, icon: '🏫' },
  { weapon: 'Patriot PAC-3', cost: 4000000, equiv: `80 Americans\' annual healthcare`, icon: '🏥' },
  { weapon: 'MQ-9 Reaper', cost: 32000000, equiv: `640 years of median US salary`, icon: '💰' },
]

// Domestic comparisons for the chart
const domesticComparisons = [
  { label: 'Total weapons fired', value: 0, color: 'bg-red-600' }, // computed
  { label: 'End homelessness (1 yr)', value: 20000000000, color: 'bg-emerald-600' },
  { label: 'Free school lunch (all US kids, 1 yr)', value: 14000000000, color: 'bg-blue-600' },
  { label: 'Clean water for Flint, MI (10 yrs)', value: 600000000, color: 'bg-cyan-600' },
  { label: 'Rebuild every US bridge rated "poor"', value: 26000000000, color: 'bg-amber-600' },
]

export default function WeaponsClient() {
  const [filter, setFilter] = useState<string>('all')
  const [sort, setSort] = useState<SortKey>('totalCost')

  const weapons = weaponsData as Weapon[]

  const totalWeaponsCost = useMemo(
    () => weapons.reduce((s, w) => s + w.totalCost, 0),
    [weapons]
  )
  const totalMunitions = useMemo(
    () => weapons.reduce((s, w) => s + w.estimatedUsed, 0),
    [weapons]
  )

  const filtered = useMemo(() => {
    let list = filter === 'all' ? [...weapons] : weapons.filter(w => w.type === filter)
    list.sort((a, b) => (b as any)[sort] - (a as any)[sort])
    return list
  }, [weapons, filter, sort])

  const comparisons = useMemo(() => {
    const c = [...domesticComparisons]
    c[0].value = totalWeaponsCost
    return c
  }, [totalWeaponsCost])

  const maxCompVal = Math.max(...comparisons.map(c => c.value))

  return (
    <div className="space-y-10">
      {/* Running total banner */}
      <div className="bg-gradient-to-r from-red-950/80 to-stone-900 border border-red-900/50 rounded-xl p-6 text-center">
        <div className="text-sm text-red-400 uppercase tracking-widest mb-1">Estimated Weapons Cost</div>
        <div className="text-4xl md:text-5xl font-black text-red-500">
          {fmtMoney(totalWeaponsCost)}
        </div>
        <div className="text-stone-400 mt-2">
          across <span className="text-white font-bold">{fmt(totalMunitions)}+</span> munitions &amp; platforms deployed
        </div>
        <div className="text-xs text-stone-500 mt-2">
          {weapons.length} weapons systems profiled • Costs from Pentagon budget documents, CBO, and manufacturer reports
        </div>
      </div>

      {/* Filters & Sort */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex flex-wrap gap-2">
          {Object.entries(TYPE_LABELS).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === key
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200'
              }`}
            >
              {key !== 'all' && TYPE_ICONS[key]} {label}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs text-stone-500">Sort:</span>
          {Object.entries(SORT_LABELS).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSort(key as SortKey)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                sort === key
                  ? 'bg-stone-600 text-white'
                  : 'bg-stone-800 text-stone-500 hover:bg-stone-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Weapons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((w) => (
          <div
            key={w.name}
            className="bg-stone-800 border border-stone-700 rounded-xl overflow-hidden hover:border-amber-700/50 transition-colors"
          >
            {/* Image placeholder */}
            <div className="h-40 bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center">
              <span className="text-5xl">{TYPE_ICONS[w.type] || '💥'}</span>
            </div>

            <div className="p-5 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-amber-400 leading-tight">{w.name}</h3>
                <span className="text-xs px-2 py-0.5 bg-stone-700 text-stone-300 rounded-full whitespace-nowrap">
                  {TYPE_LABELS[w.type] || w.type}
                </span>
              </div>

              <p className="text-sm text-stone-400 leading-relaxed">{w.description}</p>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-stone-900 rounded-lg p-2">
                  <div className="text-xs text-stone-500">Unit Cost</div>
                  <div className="text-sm font-bold text-white">{fmtMoney(w.unitCost)}</div>
                </div>
                <div className="bg-stone-900 rounded-lg p-2">
                  <div className="text-xs text-stone-500">Used</div>
                  <div className="text-sm font-bold text-white">{fmt(w.estimatedUsed)}</div>
                </div>
                <div className="bg-stone-900 rounded-lg p-2">
                  <div className="text-xs text-stone-500">Total</div>
                  <div className="text-sm font-bold text-red-400">{fmtMoney(w.totalCost)}</div>
                </div>
              </div>

              {/* Specs */}
              <div className="text-xs text-stone-500 space-y-0.5">
                <div><span className="text-stone-400">Range:</span> {w.specs.range}</div>
                <div><span className="text-stone-400">Warhead:</span> {w.specs.warhead}</div>
                <div><span className="text-stone-400">Speed:</span> {w.specs.speed}</div>
              </div>

              {/* Manufacturer badge */}
              <div className="flex items-center justify-between bg-stone-900 rounded-lg p-3">
                <div>
                  <div className="text-xs text-stone-500">Manufacturer</div>
                  <div className="text-sm font-medium text-stone-200">{w.manufacturer}</div>
                </div>
                {w.manufacturerTicker !== 'Private' && (
                  <div className="text-right">
                    <div className="text-xs text-stone-500">{w.manufacturerTicker}</div>
                    <div className={`text-sm font-bold ${w.stockChange > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {w.stockChange > 0 ? '↑' : '↓'} {Math.abs(w.stockChange)}%
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The Real Cost section */}
      <div className="bg-stone-900 border border-amber-900/30 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-black text-amber-500 mb-6">
          💸 The Real Cost
        </h2>
        <p className="text-stone-400 mb-6 max-w-2xl">
          Every weapon fired has an opportunity cost. Here&apos;s what that money could have bought instead.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {realCostComparisons.map((c) => (
            <div key={c.weapon} className="bg-stone-800 rounded-lg p-4 border border-stone-700">
              <div className="text-2xl mb-2">{c.icon}</div>
              <div className="text-sm text-amber-400 font-bold">1 {c.weapon}</div>
              <div className="text-xs text-stone-500 mb-2">{fmtMoney(c.cost)}</div>
              <div className="text-sm text-stone-200">= {c.equiv}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison chart */}
      <div className="bg-stone-900 border border-stone-700 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-black text-amber-500 mb-6">
          📊 Weapons Spending vs. Domestic Needs
        </h2>
        <div className="space-y-4">
          {comparisons.map((c) => (
            <div key={c.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className={c.label === 'Total weapons fired' ? 'text-red-400 font-bold' : 'text-stone-300'}>
                  {c.label}
                </span>
                <span className="text-stone-400 font-mono">{fmtMoney(c.value)}</span>
              </div>
              <div className="w-full bg-stone-800 rounded-full h-6 overflow-hidden">
                <div
                  className={`h-full rounded-full ${c.color} transition-all duration-700`}
                  style={{ width: `${Math.max((c.value / maxCompVal) * 100, 2)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-500 mt-4">
          Sources: HUD, USDA, EPA, ASCE infrastructure reports. Weapons costs from Pentagon budget requests and CBO estimates.
        </p>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-stone-600 py-4">
        Data compiled from Pentagon budget documents, Congressional Budget Office, manufacturer SEC filings, and SIPRI.
        Stock changes measured from war start date. Estimates are conservative.
      </div>
    </div>
  )
}
