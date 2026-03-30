'use client'

import { useState, useMemo, useCallback } from 'react'

/* ── data ── */
const MILITARY_CATEGORIES = [
  { id: 'nuclear', label: 'Nuclear Weapons', budget: 52, icon: '☢️' },
  { id: 'bases', label: 'Overseas Bases', budget: 55, icon: '🌍' },
  { id: 'aircraft', label: 'Aircraft & Navy', budget: 180, icon: '✈️' },
  { id: 'personnel', label: 'Personnel & Pay', budget: 165, icon: '🎖️' },
  { id: 'rnd', label: 'R&D / Weapons Dev', budget: 140, icon: '🔬' },
  { id: 'operations', label: 'Operations (Active Wars)', budget: 120, icon: '💣' },
  { id: 'intel', label: 'Intelligence & Cyber', budget: 85, icon: '🕵️' },
  { id: 'veterans', label: 'Veterans Affairs', budget: 325, icon: '🏥', separate: true },
  { id: 'misc', label: 'Miscellaneous / Admin', budget: 89, icon: '📋' },
]

const DOMESTIC_CATEGORIES = [
  { id: 'education', label: 'Education', icon: '📚', color: 'bg-blue-500' },
  { id: 'healthcare', label: 'Healthcare', icon: '🏥', color: 'bg-emerald-500' },
  { id: 'infrastructure', label: 'Infrastructure', icon: '🏗️', color: 'bg-amber-500' },
  { id: 'housing', label: 'Housing', icon: '🏠', color: 'bg-purple-500' },
  { id: 'climate', label: 'Climate', icon: '🌱', color: 'bg-green-500' },
  { id: 'debt', label: 'Debt Reduction', icon: '💰', color: 'bg-stone-500' },
  { id: 'taxcuts', label: 'Tax Cuts', icon: '💵', color: 'bg-teal-500' },
  { id: 'socialsecurity', label: 'Social Security', icon: '👴', color: 'bg-orange-500' },
]

const EQUIVALENTS: Record<string, { per10B: string }[]> = {
  education: [{ per10B: '150,000 teachers' }, { per10B: '2M college scholarships' }, { per10B: '500 new schools' }],
  healthcare: [{ per10B: '1M people insured' }, { per10B: '20 new hospitals' }],
  infrastructure: [{ per10B: '3,000 bridges repaired' }, { per10B: '2,000 miles of road' }],
  housing: [{ per10B: '40,000 homes built' }, { per10B: '100,000 rent vouchers' }],
  climate: [{ per10B: '5GW solar capacity' }, { per10B: '10,000 EV chargers' }],
  debt: [{ per10B: '$10B less national debt' }],
  taxcuts: [{ per10B: '$75 back per taxpayer' }],
  socialsecurity: [{ per10B: '$600/yr more per retiree' }],
}

function fmtB(n: number) {
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}T`
  return `$${n.toFixed(0)}B`
}

export default function BudgetSimClient() {
  // Military slider values: 0-100 (% of current budget)
  const [milSliders, setMilSliders] = useState<Record<string, number>>(
    Object.fromEntries(MILITARY_CATEGORIES.map(c => [c.id, 100]))
  )
  // Domestic allocation weights
  const [domWeights, setDomWeights] = useState<Record<string, number>>(
    Object.fromEntries(DOMESTIC_CATEGORIES.map(c => [c.id, 1]))
  )

  const totalDefenseBudget = MILITARY_CATEGORIES.filter(c => !c.separate).reduce((s, c) => s + c.budget, 0)

  const totalCut = useMemo(() => {
    return MILITARY_CATEGORIES.filter(c => !c.separate).reduce((s, c) => {
      return s + c.budget * (1 - milSliders[c.id] / 100)
    }, 0)
  }, [milSliders])

  const vetCut = MILITARY_CATEGORIES.find(c => c.id === 'veterans')!.budget * (1 - milSliders.veterans / 100)
  const freedMoney = totalCut + vetCut

  // Distribute freed money by weights
  const totalWeight = useMemo(() => Object.values(domWeights).reduce((s, w) => s + w, 0), [domWeights])
  const domesticAllocations = useMemo(() => {
    if (freedMoney <= 0 || totalWeight <= 0) return Object.fromEntries(DOMESTIC_CATEGORIES.map(c => [c.id, 0]))
    return Object.fromEntries(DOMESTIC_CATEGORIES.map(c => [c.id, (domWeights[c.id] / totalWeight) * freedMoney]))
  }, [freedMoney, domWeights, totalWeight])

  const handleMilSlider = useCallback((id: string, val: number) => {
    setMilSliders(prev => ({ ...prev, [id]: val }))
  }, [])

  const handleDomWeight = useCallback((id: string, val: number) => {
    setDomWeights(prev => ({ ...prev, [id]: val }))
  }, [])

  const resetAll = () => {
    setMilSliders(Object.fromEntries(MILITARY_CATEGORIES.map(c => [c.id, 100])))
    setDomWeights(Object.fromEntries(DOMESTIC_CATEGORIES.map(c => [c.id, 1])))
  }

  // Shareable summary
  const topDomestic = DOMESTIC_CATEGORIES
    .filter(c => domesticAllocations[c.id] > 0.5)
    .sort((a, b) => domesticAllocations[b.id] - domesticAllocations[a.id])
    .slice(0, 3)
    .map(c => c.label)
    .join(', ')

  const shareText = `I'd cut ${fmtB(freedMoney)} from defense and fund ${topDomestic || 'nothing'} instead. What would YOU cut?`

  return (
    <div>
      {/* Status banner */}
      <div className={`rounded-xl border p-5 mb-8 ${
        freedMoney > 0 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-stone-100 border-stone-200'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-stone-500 text-sm">Money freed from defense</p>
            <p className="text-3xl font-bold text-stone-900">{fmtB(freedMoney)}</p>
            <p className="text-stone-500 text-xs mt-1">
              Remaining defense: {fmtB(totalDefenseBudget - totalCut)} of {fmtB(totalDefenseBudget)}
            </p>
          </div>
          <button onClick={resetAll} className="text-sm px-4 py-2 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 text-stone-600 transition self-start">
            Reset All
          </button>
        </div>
      </div>

      {/* Military sliders */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">
        Step 1: Cut the <span className="text-red-600">Defense Budget</span>
      </h2>
      <p className="text-stone-500 text-sm mb-6">Drag each slider to reduce spending. 100% = keep current level. 0% = eliminate entirely.</p>

      <div className="space-y-5 mb-12">
        {MILITARY_CATEGORIES.map(cat => {
          const pct = milSliders[cat.id]
          const kept = cat.budget * pct / 100
          const cut = cat.budget - kept
          return (
            <div key={cat.id} className={`rounded-lg border p-4 ${cat.separate ? 'border-amber-300 bg-amber-50' : 'border-stone-200 bg-white'}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{cat.icon}</span>
                  <span className="font-semibold text-stone-900 text-sm">{cat.label}</span>
                  {cat.separate && <span className="text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">Separate budget</span>}
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-stone-900">{fmtB(kept)}</span>
                  <span className="text-stone-400 text-xs ml-1">/ {fmtB(cat.budget)}</span>
                  {cut > 0.5 && <span className="text-red-600 text-xs ml-2 font-mono">-{fmtB(cut)}</span>}
                </div>
              </div>
              <input
                type="range" min={0} max={100} step={1} value={pct}
                onChange={e => handleMilSlider(cat.id, Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-red-600"
                style={{ background: `linear-gradient(to right, #dc2626 ${pct}%, #e7e5e4 ${pct}%)` }}
              />
              <div className="flex justify-between text-xs text-stone-400 mt-1">
                <span>Eliminate</span>
                <span>{pct}%</span>
                <span>Keep all</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Domestic allocation */}
      {freedMoney > 0.5 && (
        <>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">
            Step 2: Fund <span className="text-emerald-600">What Matters</span>
          </h2>
          <p className="text-stone-500 text-sm mb-6">
            You freed {fmtB(freedMoney)}. Adjust the sliders to prioritize where it goes.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {DOMESTIC_CATEGORIES.map(cat => {
              const alloc = domesticAllocations[cat.id]
              const w = domWeights[cat.id]
              return (
                <div key={cat.id} className="rounded-lg border border-stone-200 bg-white p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span>{cat.icon}</span>
                      <span className="font-semibold text-stone-900 text-sm">{cat.label}</span>
                    </div>
                    <span className="font-mono font-bold text-emerald-700">{fmtB(alloc)}</span>
                  </div>
                  <input
                    type="range" min={0} max={10} step={1} value={w}
                    onChange={e => handleDomWeight(cat.id, Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer accent-emerald-600"
                    style={{ background: `linear-gradient(to right, #059669 ${w * 10}%, #e7e5e4 ${w * 10}%)` }}
                  />
                  {/* Equivalents */}
                  {alloc > 0.5 && EQUIVALENTS[cat.id] && (
                    <div className="mt-2 space-y-1">
                      {EQUIVALENTS[cat.id].map((eq, i) => (
                        <p key={i} className="text-xs text-stone-500">
                          ≈ <strong className="text-stone-700">
                            {(() => {
                              const mult = alloc / 10
                              const base = eq.per10B
                              const numMatch = base.match(/^([\d,.]+)/)
                              if (!numMatch) return `${fmtB(alloc)} → ${base}`
                              const num = parseFloat(numMatch[1].replace(/,/g, ''))
                              const scaled = num * mult
                              const suffix = base.replace(numMatch[0], '').trim()
                              if (scaled >= 1_000_000) return `${(scaled / 1_000_000).toFixed(1)}M ${suffix}`
                              if (scaled >= 1_000) return `${(scaled / 1_000).toFixed(0)}K ${suffix}`
                              return `${scaled.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ${suffix}`
                            })()}
                          </strong>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </>
      )}

      {/* Shareable result card */}
      {freedMoney > 0.5 && (
        <div className="bg-stone-900 rounded-2xl p-6 mb-10 text-center">
          <p className="text-stone-400 text-sm mb-2">Your Budget Plan</p>
          <p className="text-2xl font-bold text-white mb-1">I&apos;d cut {fmtB(freedMoney)} from defense</p>
          <p className="text-stone-300 mb-4">and fund {topDomestic || 'domestic priorities'} instead</p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {DOMESTIC_CATEGORIES.filter(c => domesticAllocations[c.id] > 0.5).map(c => (
              <span key={c.id} className={`${c.color} text-white text-xs px-3 py-1 rounded-full`}>
                {c.icon} {c.label}: {fmtB(domesticAllocations[c.id])}
              </span>
            ))}
          </div>

          {/* Share buttons */}
          <div className="flex justify-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent('https://warcosts.org/tools/budget-simulator')}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Share on 𝕏
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://warcosts.org/tools/budget-simulator')}&quote=${encodeURIComponent(shareText)}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Share on Facebook
            </a>
            <button
              onClick={() => navigator.clipboard?.writeText(shareText + ' https://warcosts.org/tools/budget-simulator')}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              📋 Copy
            </button>
          </div>
        </div>
      )}

      {/* Context box */}
      <div className="bg-stone-100 rounded-xl border border-stone-200 p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">For Context</h3>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li>• The total defense budget is <strong className="text-stone-900">$886 billion</strong> — more than the next 10 countries combined</li>
          <li>• Universal pre-K for all American children: ~<strong className="text-stone-900">$30B/year</strong></li>
          <li>• End homelessness in America: ~<strong className="text-stone-900">$20B/year</strong></li>
          <li>• Free community college for all: ~<strong className="text-stone-900">$10B/year</strong></li>
          <li>• Clean water for every human on Earth: ~<strong className="text-stone-900">$150B total</strong></li>
          <li>• The F-35 program alone: <strong className="text-stone-900">$1.7T lifetime</strong></li>
        </ul>
      </div>
    </div>
  )
}
