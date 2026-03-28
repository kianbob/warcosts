'use client'

import { useState, useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const BASE_OIL = 108 // current price post-war
const OIL_PER_DAY = 0.5
const GDP_PER_DAY = 3.5 // billion
const GAS_BASE = 3.80 // current US avg
const GAS_PER_DAY = 0.02
const SHIPPING_BASE_INCREASE = 15 // % base increase, scales with days

const comparisons = [
  { label: 'public schools built', cost: 40, unit: 'M', icon: '🏫' },
  { label: 'hospitals funded for a year', cost: 200, unit: 'M', icon: '🏥' },
  { label: 'homes built', cost: 0.35, unit: 'M', icon: '🏠' },
  { label: 'teachers paid for a year', cost: 0.065, unit: 'M', icon: '👩‍🏫' },
  { label: 'four-year college scholarships', cost: 0.1, unit: 'M', icon: '🎓' },
]

function fmt(n: number, decimals = 1): string {
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}T`
  return `$${n.toFixed(decimals)}B`
}

export default function HormuzClient() {
  const [days, setDays] = useState(30)

  const gdpLoss = days * GDP_PER_DAY
  const oilPrice = BASE_OIL + days * OIL_PER_DAY
  const gasPrice = GAS_BASE + days * GAS_PER_DAY
  const shippingIncrease = SHIPPING_BASE_INCREASE + days * 0.5

  const chartData = useMemo(() => {
    const pts = []
    for (let d = 0; d <= days; d += Math.max(1, Math.floor(days / 30))) {
      pts.push({
        day: d,
        price: +(BASE_OIL + d * OIL_PER_DAY).toFixed(1),
      })
    }
    // ensure last day included
    if (pts[pts.length - 1]?.day !== days) {
      pts.push({ day: days, price: +(BASE_OIL + days * OIL_PER_DAY).toFixed(1) })
    }
    return pts
  }, [days])

  const compCards = comparisons.map(c => {
    const gdpInUnit = gdpLoss * 1000 // convert to millions
    const count = Math.floor(gdpInUnit / c.cost)
    return { ...c, count }
  })

  return (
    <div className="space-y-8">
      {/* Slider */}
      <div className="bg-white rounded-xl border p-6">
        <label className="block text-lg font-bold mb-2 font-[family-name:var(--font-heading)]">
          Days Hormuz Stays Closed
        </label>
        <input
          type="range"
          min={1}
          max={180}
          value={days}
          onChange={e => setDays(+e.target.value)}
          className="w-full h-3 rounded-lg appearance-none cursor-pointer accent-red-700"
        />
        <div className="flex justify-between text-sm text-stone-500 mt-1">
          <span>1 day</span>
          <span className="text-2xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{days} days</span>
          <span>180 days</span>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Global GDP Loss" value={fmt(gdpLoss)} sub={`${days} × $3.5B/day`} color="text-red-800" />
        <StatCard label="Oil Price" value={`$${oilPrice.toFixed(0)}/bbl`} sub={`Was $60 pre-war`} color="text-amber-800" />
        <StatCard label="US Gas Price" value={`$${gasPrice.toFixed(2)}/gal`} sub={`+$${(gasPrice - GAS_BASE).toFixed(2)} from today`} color="text-orange-800" />
        <StatCard label="Shipping Costs" value={`+${shippingIncrease.toFixed(0)}%`} sub="Global freight rates" color="text-blue-800" />
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl border p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
          Projected Oil Price Over {days} Days
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" label={{ value: 'Days Closed', position: 'insideBottom', offset: -5 }} />
            <YAxis domain={['auto', 'auto']} label={{ value: '$/barrel', angle: -90, position: 'insideLeft' }} />
            <Tooltip formatter={(v) => [`$${v}/bbl`, 'Oil Price']} />
            <Line type="monotone" dataKey="price" stroke="#991b1b" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Comparison cards */}
      <div>
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
          {days} Days of Hormuz Closure ({fmt(gdpLoss)}) Could Instead Pay For:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {compCards.map(c => (
            <div key={c.label} className="bg-white border rounded-xl p-5 text-center">
              <span className="text-4xl block mb-2">{c.icon}</span>
              <span className="text-2xl font-bold text-red-800 font-[family-name:var(--font-heading)] block">
                {c.count.toLocaleString()}
              </span>
              <span className="text-stone-600 text-sm">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div className="bg-white rounded-xl border p-5 text-center">
      <p className="text-stone-500 text-sm mb-1">{label}</p>
      <p className={`text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] ${color}`}>{value}</p>
      <p className="text-stone-400 text-xs mt-1">{sub}</p>
    </div>
  )
}
