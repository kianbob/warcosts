'use client'

const wars = [
  { name: 'Iran (2026)', days: '30 days', civilians: 3461, color: 'bg-red-500', textColor: 'text-red-400', note: 'Ongoing' },
  { name: 'Iraq (2003)', days: 'First 30 days', civilians: 7186, color: 'bg-amber-500', textColor: 'text-amber-400', note: 'IBC data' },
  { name: 'Afghanistan (2001)', days: 'First 30 days', civilians: 1300, color: 'bg-stone-500', textColor: 'text-stone-400', note: 'Est. range' },
]

const maxCiv = Math.max(...wars.map((w) => w.civilians))

export default function CivilianTollEmbed() {
  return (
    <div className="w-full min-h-[280px] bg-[#1c1917] p-5 font-sans relative">
      <p className="text-stone-500 text-xs uppercase tracking-[0.15em] mb-4">
        Civilian Deaths — First 30 Days of War
      </p>

      <div className="space-y-3">
        {wars.map((w) => (
          <div key={w.name}>
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-stone-300 text-sm font-medium">{w.name}</span>
              <span className={`${w.textColor} text-sm font-bold tabular-nums`}>{w.civilians.toLocaleString()}</span>
            </div>
            <div className="w-full h-3 bg-stone-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${w.color} rounded-full transition-all`}
                style={{ width: `${(w.civilians / maxCiv) * 100}%` }}
              />
            </div>
            <p className="text-stone-600 text-[10px] mt-0.5">{w.days} · {w.note}</p>
          </div>
        ))}
      </div>

      <p className="text-stone-600 text-[10px] mt-4">
        Note: Figures are estimates from available reports. Iraq data via Iraq Body Count. Afghanistan estimates vary widely.
      </p>

      <a
        href="https://www.warcosts.org"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-3 text-[10px] text-stone-600 hover:text-stone-400 transition-colors"
      >
        Data: WarCosts.org
      </a>
    </div>
  )
}
