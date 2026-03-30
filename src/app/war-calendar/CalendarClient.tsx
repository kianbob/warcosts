// @ts-nocheck
'use client'
import { useState } from 'react'

function getColor(count: number) {
  if (count === 0) return 'bg-stone-200'
  if (count === 1) return 'bg-red-300'
  if (count <= 3) return 'bg-red-500'
  return 'bg-red-800'
}

function getTextColor(count: number) {
  if (count === 0) return 'text-stone-500'
  if (count === 1) return 'text-red-900'
  return 'text-white'
}

export function CalendarClient({ data }: { data: Record<string, string[]> }) {
  const [selected, setSelected] = useState<string | null>(null)
  const years = Object.entries(data).sort(([a], [b]) => Number(a) - Number(b))

  return (
    <div>
      {/* Legend */}
      <div className="flex items-center gap-4 mb-4 text-sm text-stone-500">
        <div className="flex items-center gap-1"><span className="w-4 h-4 rounded bg-stone-200 inline-block" /> Peace</div>
        <div className="flex items-center gap-1"><span className="w-4 h-4 rounded bg-red-300 inline-block" /> 1 conflict</div>
        <div className="flex items-center gap-1"><span className="w-4 h-4 rounded bg-red-500 inline-block" /> 2–3 conflicts</div>
        <div className="flex items-center gap-1"><span className="w-4 h-4 rounded bg-red-800 inline-block" /> 4+ conflicts</div>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap gap-[3px]">
        {years.map(([year, conflicts]) => {
          const count = conflicts.length
          return (
            <button
              key={year}
              onClick={() => setSelected(selected === year ? null : year)}
              className={`w-[38px] h-[28px] rounded text-[10px] font-mono font-bold ${getColor(count)} ${getTextColor(count)} hover:ring-2 hover:ring-red-400 transition-all ${selected === year ? 'ring-2 ring-red-600 scale-110 z-10' : ''}`}
              title={`${year}: ${count} conflict${count !== 1 ? 's' : ''}`}
            >
              {year.slice(-2)}
            </button>
          )
        })}
      </div>

      {/* Selected detail */}
      {selected && data[selected] && (
        <div className="mt-6 bg-white rounded-xl border border-red-200 p-6 animate-in fade-in">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-2">
            {selected}
            {data[selected].length === 0 ? (
              <span className="text-green-700 text-base ml-2">— Peace</span>
            ) : (
              <span className="text-red-800 text-base ml-2">— {data[selected].length} active conflict{data[selected].length !== 1 ? 's' : ''}</span>
            )}
          </h3>
          {data[selected].length > 0 ? (
            <ul className="list-disc list-inside text-stone-600 space-y-1">
              {data[selected].map(c => <li key={c}>{c}</li>)}
            </ul>
          ) : (
            <p className="text-stone-500 italic">One of the rare years of peace in American history.</p>
          )}
        </div>
      )}
    </div>
  )
}
