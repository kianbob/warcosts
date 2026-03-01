// @ts-nocheck
'use client'

export function ConflictStatsGrid({ computed }: { computed: any }) {
  if (!computed) return null

  const fmtMoney = (n: number) => {
    if (!n || n === 0) return '—'
    if (n >= 1e12) return `$${(n / 1e12).toFixed(1)}T`
    if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
    if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
    if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`
    return `$${n.toFixed(0)}`
  }

  const items = [
    { value: fmtMoney(computed.costPerDay), label: 'Cost Per Day' },
    { value: fmtMoney(computed.costPerUSdeath), label: 'Cost Per US Death' },
    { value: computed.civilianToMilitaryRatio != null ? `${computed.civilianToMilitaryRatio.toFixed(1)}:1` : '—', label: 'Civilian:Military Death Ratio' },
  ]

  return (
    <div className="grid grid-cols-3 gap-4 my-6">
      {items.map(i => (
        <div key={i.label} className="bg-stone-50 rounded-lg p-4 border text-center">
          <p className="text-xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{i.value}</p>
          <p className="text-xs text-stone-500 mt-1">{i.label}</p>
        </div>
      ))}
    </div>
  )
}
