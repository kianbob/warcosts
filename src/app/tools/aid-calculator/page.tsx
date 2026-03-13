// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'
import { fmtMoney, fmt } from '@/lib/utils'

const FEDERAL_REVENUE = 4.4e12
const MILITARY_BUDGET = 886e9
const FOREIGN_AID_TOTAL = 55e9
const TOMAHAWK_COST = 2_000_000
const TEACHER_SALARY = 65000

const TAX_BRACKETS_2024 = [
  { min: 0, max: 11600, rate: 0.10 },
  { min: 11600, max: 47150, rate: 0.12 },
  { min: 47150, max: 100525, rate: 0.22 },
  { min: 100525, max: 191950, rate: 0.24 },
  { min: 191950, max: 243725, rate: 0.32 },
  { min: 243725, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
]

function calcFederalTax(income: number): number {
  const taxable = Math.max(0, income - 14600) // standard deduction
  let tax = 0
  for (const b of TAX_BRACKETS_2024) {
    if (taxable <= b.min) break
    tax += (Math.min(taxable, b.max) - b.min) * b.rate
  }
  return tax
}

const TOP_AID_COUNTRIES = [
  { country: 'Israel', annual: 3800e6, pct: 6.9 },
  { country: 'Ukraine', annual: 8000e6, pct: 14.5 },
  { country: 'Egypt', annual: 1500e6, pct: 2.7 },
  { country: 'Jordan', annual: 1700e6, pct: 3.1 },
  { country: 'Afghanistan', annual: 300e6, pct: 0.5 },
  { country: 'Ethiopia', annual: 1100e6, pct: 2.0 },
  { country: 'Iraq', annual: 600e6, pct: 1.1 },
  { country: 'Colombia', annual: 800e6, pct: 1.5 },
  { country: 'Pakistan', annual: 400e6, pct: 0.7 },
  { country: 'Other (165+ countries)', annual: 36800e6, pct: 66.9 },
]

export default function AidCalculatorPage() {
  const [income, setIncome] = useState(75000)
  const [submitted, setSubmitted] = useState(false)

  const tax = calcFederalTax(income)
  const militaryShare = tax * (MILITARY_BUDGET / FEDERAL_REVENUE)
  const aidShare = tax * (FOREIGN_AID_TOTAL / FEDERAL_REVENUE)
  const aidBreakdown = TOP_AID_COUNTRIES.map(c => ({
    ...c,
    yourShare: aidShare * (c.pct / 100),
  }))

  const tomahawks = militaryShare / TOMAHAWK_COST
  const teachers = militaryShare / TEACHER_SALARY

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }, { label: 'Aid Calculator' }]} />

        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-2">Where Do Your Tax Dollars Go?</h1>
        <p className="text-stone-500 mb-8 max-w-2xl">Enter your annual income to see how much of your federal taxes fund the military and foreign aid — broken down by country.</p>

        {/* Input */}
        <div className="bg-stone-800 rounded-xl border border-stone-200 p-6 mb-8">
          <label className="text-stone-500 text-sm block mb-2">Annual Income (before tax)</label>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500">$</span>
              <input type="number" value={income} onChange={e => setIncome(Number(e.target.value))}
                className="w-full bg-stone-700 border border-stone-200 rounded-lg pl-8 pr-4 py-3 text-white text-lg font-mono" />
            </div>
            <button onClick={() => setSubmitted(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              Calculate
            </button>
          </div>
          <div className="flex gap-2 mt-3">
            {[50000, 75000, 100000, 150000, 250000].map(v => (
              <button key={v} onClick={() => { setIncome(v); setSubmitted(true) }}
                className="px-3 py-1 text-xs bg-stone-700 hover:bg-stone-600 rounded-lg text-stone-600 transition">
                {fmtMoney(v)}
              </button>
            ))}
          </div>
        </div>

        {(submitted || income > 0) && (
          <>
            {/* Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-stone-800 rounded-xl border border-stone-200 p-6">
                <p className="text-2xl font-bold text-stone-600 font-[family-name:var(--font-heading)]">{fmtMoney(tax)}</p>
                <p className="text-xs text-stone-500">Federal Income Tax</p>
              </div>
              <div className="bg-stone-800 rounded-xl border border-stone-200 p-6">
                <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(militaryShare)}</p>
                <p className="text-xs text-stone-500">→ Military Spending</p>
              </div>
              <div className="bg-stone-800 rounded-xl border border-stone-200 p-6">
                <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(aidShare)}</p>
                <p className="text-xs text-stone-500">→ Foreign Aid</p>
              </div>
              <div className="bg-stone-800 rounded-xl border border-stone-200 p-6">
                <p className="text-2xl font-bold text-stone-600 font-[family-name:var(--font-heading)]">{fmtMoney(tax - militaryShare - aidShare)}</p>
                <p className="text-xs text-stone-500">→ Everything Else</p>
              </div>
            </div>

            {/* What Your Military Taxes Buy */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-700 mb-3">Your Military Taxes Could Buy</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-700">{tomahawks.toFixed(1)}</p>
                  <p className="text-stone-500 text-sm">Tomahawk Cruise Missiles</p>
                  <p className="text-stone-500 text-xs">($2M each)</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-700">{teachers.toFixed(1)}</p>
                  <p className="text-stone-500 text-sm">Teacher Salaries</p>
                  <p className="text-stone-500 text-xs">($65K/year each)</p>
                </div>
              </div>
            </div>

            {/* Aid by Country */}
            <div className="bg-stone-800 rounded-xl border border-stone-200 p-6">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">Your Foreign Aid by Country</h2>
              <div className="space-y-3">
                {aidBreakdown.map(c => (
                  <div key={c.country} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-stone-600">{c.country}</span>
                        <span className="text-red-700 font-mono">{fmtMoney(c.yourShare)}</span>
                      </div>
                      <div className="h-2 bg-stone-700 rounded-full overflow-hidden">
                        <div className="h-full bg-red-600 rounded-full" style={{ width: `${c.pct}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-stone-500 text-xs mt-4">Based on FY2024 allocations. Percentages of total US foreign aid budget (~$55B).</p>
            </div>
          </>
        )}

        <BackToTop />
      </div>
    </div>
  )
}
