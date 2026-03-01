// @ts-nocheck
'use client'

export function AftermathCards() {
  const cards = [
    { value: '$2.5T', label: 'Future Veteran Care', sub: 'Projected cost through 2050' },
    { value: '38M', label: 'People Displaced', sub: 'By the War on Terror alone' },
    { value: '3.8M', label: 'Indirect Deaths', sub: 'From disease, displacement, loss of infrastructure' },
    { value: '17/day', label: 'Veteran Suicides', sub: 'More than combat deaths since 9/11' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {cards.map(c => (
        <div key={c.label} className="bg-red-50 rounded-xl p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{c.value}</p>
          <p className="text-stone-700 text-sm font-semibold mt-1">{c.label}</p>
          <p className="text-stone-400 text-xs mt-1">{c.sub}</p>
        </div>
      ))}
    </div>
  )
}
