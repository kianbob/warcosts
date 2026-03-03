// @ts-nocheck
'use client'
import { useState } from 'react'

const MILITARY_PCT = 0.24
const BREAKDOWN = [
  { label: 'Pentagon Base Budget', pct: 0.52, color: '#991b1b' },
  { label: 'Veteran Care & Benefits', pct: 0.18, color: '#b91c1c' },
  { label: 'Nuclear Weapons (DOE)', pct: 0.08, color: '#dc2626' },
  { label: 'Interest on War Debt', pct: 0.12, color: '#ef4444' },
  { label: 'Homeland Security', pct: 0.06, color: '#f87171' },
  { label: 'Foreign Military Aid', pct: 0.04, color: '#fca5a5' },
]

const COMPARISONS = [
  { label: 'months of groceries', divisor: 350 },
  { label: 'tanks of gas', divisor: 60 },
  { label: 'months of student loan payments', divisor: 400 },
  { label: 'months of health insurance', divisor: 500 },
]

function effectiveRate(income: number): number {
  // 2024 brackets for single filer with standard deduction
  const standardDeduction = 14600
  const taxableIncome = Math.max(0, income - standardDeduction)
  const brackets = [
    [11600, 0.10], [47150, 0.12], [100525, 0.22], [191950, 0.24],
    [243725, 0.32], [609350, 0.35], [Infinity, 0.37],
  ]
  let tax = 0, prev = 0
  for (const [cap, rate] of brackets) {
    const taxable = Math.min(taxableIncome, cap as number) - prev
    if (taxable <= 0) break
    tax += taxable * (rate as number)
    prev = cap as number
  }
  return tax
}

export default function TaxReceiptClient() {
  const [income, setIncome] = useState(75000)
  const tax = effectiveRate(income)
  const militaryTax = tax * MILITARY_PCT

  return (
    <div className="space-y-8">
      <div className="bg-stone-100 rounded-xl p-6 border">
        <label className="block text-sm font-medium text-stone-600 mb-2">Your Annual Income</label>
        <input
          type="range" min={20000} max={500000} step={1000} value={income}
          onChange={e => setIncome(Number(e.target.value))}
          className="w-full accent-red-800"
        />
        <div className="flex justify-between text-xs text-stone-400 mt-1">
          <span>$20K</span>
          <span>$500K</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <span className="text-stone-500 text-sm">$</span>
            <input
              type="number"
              min={20000} max={500000} step={1000} value={income}
              onChange={e => { const v = Number(e.target.value); if (v >= 20000 && v <= 500000) setIncome(v) }}
              className="w-32 border rounded px-2 py-1 text-lg font-bold font-[family-name:var(--font-heading)] focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>
          <span className="text-stone-500">Federal tax: ${Math.round(tax).toLocaleString()}</span>
        </div>
      </div>

      <div className="bg-red-950 text-white rounded-xl p-6 border border-red-900">
        <p className="text-stone-400 text-sm uppercase tracking-widest mb-1">Your Military Tax Bill</p>
        <p className="text-5xl font-bold font-[family-name:var(--font-heading)] text-red-400">
          ${Math.round(militaryTax).toLocaleString()}
        </p>
        <p className="text-stone-400 mt-1">~24% of your federal income tax goes to the military</p>
      </div>

      <div className="space-y-3">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">Where Your Military Taxes Go</h2>
        {BREAKDOWN.map(b => {
          const amount = militaryTax * b.pct
          return (
            <div key={b.label}>
              <div className="flex justify-between text-sm mb-1">
                <span>{b.label}</span>
                <span className="font-medium">${Math.round(amount).toLocaleString()}</span>
              </div>
              <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${b.pct * 100}%`, backgroundColor: b.color }} />
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-stone-50 rounded-xl p-6 border">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">What Your ${Math.round(militaryTax).toLocaleString()} Could Buy Instead</h2>
        <div className="grid grid-cols-2 gap-4">
          {COMPARISONS.map(c => (
            <div key={c.label} className="text-center p-3 bg-white rounded-lg border">
              <p className="text-2xl font-bold text-primary">{Math.floor(militaryTax / c.divisor)}</p>
              <p className="text-sm text-stone-500">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
