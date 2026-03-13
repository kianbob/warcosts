'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ShareButtons from '@/components/ShareButtons'

interface Conflict {
  id: string
  shortName: string
  usCasualties: { deaths: number }
  civilianDeaths: number | null
  startYear: number
  endYear: number | string
}

const presetCities = [
  { name: 'New York City', pop: 8336817 },
  { name: 'Los Angeles', pop: 3979576 },
  { name: 'Chicago', pop: 2693976 },
  { name: 'Houston', pop: 2304580 },
  { name: 'Phoenix', pop: 1608139 },
  { name: 'San Francisco', pop: 873965 },
  { name: 'Denver', pop: 715522 },
  { name: 'Portland, OR', pop: 652503 },
  { name: 'Nashville', pop: 689447 },
  { name: 'Boise', pop: 235684 },
  { name: 'Charleston, SC', pop: 150227 },
  { name: 'Small Town USA', pop: 25000 },
]

export default function CasualtyCalculatorPage() {
  const [conflicts, setConflicts] = useState<Conflict[]>([])
  const [selectedConflict, setSelectedConflict] = useState<string>('')
  const [cityName, setCityName] = useState('')
  const [population, setPopulation] = useState<number | ''>('')
  const [useCivilian, setUseCivilian] = useState(false)

  useEffect(() => {
    fetch('/data/conflicts.json')
      .then(r => r.json())
      .then((data: Conflict[]) => {
        const major = data.filter(c => (c.usCasualties?.deaths || 0) > 0 || (c.civilianDeaths || 0) > 0)
        setConflicts(major)
        if (major.length > 0) setSelectedConflict(major[0].id)
      })
  }, [])

  const conflict = conflicts.find(c => c.id === selectedConflict)
  const deaths = conflict
    ? useCivilian && conflict.civilianDeaths
      ? conflict.civilianDeaths
      : conflict.usCasualties?.deaths || 0
    : 0
  const pop = typeof population === 'number' ? population : 0
  const pct = pop > 0 ? (deaths / pop) * 100 : 0

  function selectPreset(city: typeof presetCities[0]) {
    setCityName(city.name)
    setPopulation(city.pop)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/tools" className="text-stone-400 hover:text-white text-sm">← Back to Tools</Link>
      </div>

      <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-2">
        What Would These Casualties Look Like in Your City?
      </h1>
      <p className="text-stone-400 mb-8">
        War deaths are abstract numbers until you see them in a place you know.
      </p>

      {/* Conflict selector */}
      <div className="bg-stone-900 rounded-xl p-6 mb-6">
        <label className="block text-sm font-semibold text-stone-300 mb-2">Select a Conflict</label>
        <select
          value={selectedConflict}
          onChange={e => setSelectedConflict(e.target.value)}
          className="w-full bg-stone-800 border border-stone-700 rounded-lg p-3 text-white"
        >
          {conflicts.map(c => (
            <option key={c.id} value={c.id}>
              {c.shortName} ({c.startYear}–{c.endYear}) — {(c.usCasualties?.deaths || 0).toLocaleString()} US deaths
              {c.civilianDeaths ? `, ${c.civilianDeaths.toLocaleString()} civilian` : ''}
            </option>
          ))}
        </select>

        {conflict?.civilianDeaths && conflict.civilianDeaths > 0 && (
          <label className="flex items-center gap-2 mt-3 text-stone-400 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={useCivilian}
              onChange={e => setUseCivilian(e.target.checked)}
              className="accent-red-700"
            />
            Use civilian death toll instead ({conflict.civilianDeaths.toLocaleString()})
          </label>
        )}
      </div>

      {/* City input */}
      <div className="bg-stone-900 rounded-xl p-6 mb-6">
        <label className="block text-sm font-semibold text-stone-300 mb-2">Your City</label>
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            placeholder="City name"
            value={cityName}
            onChange={e => setCityName(e.target.value)}
            className="flex-1 bg-stone-800 border border-stone-700 rounded-lg p-3 text-white"
          />
          <input
            type="number"
            placeholder="Population"
            value={population}
            onChange={e => setPopulation(e.target.value ? Number(e.target.value) : '')}
            className="w-40 bg-stone-800 border border-stone-700 rounded-lg p-3 text-white"
          />
        </div>

        <p className="text-stone-500 text-xs mb-2">Or select a preset:</p>
        <div className="flex flex-wrap gap-2">
          {presetCities.map(city => (
            <button
              key={city.name}
              onClick={() => selectPreset(city)}
              className="text-xs bg-stone-800 hover:bg-stone-700 text-stone-300 px-3 py-1.5 rounded-full transition"
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      {pop > 0 && deaths > 0 && (
        <div className="bg-stone-900 border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">
            {conflict?.shortName} casualties in {cityName || 'your city'}
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-stone-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-400">{deaths.toLocaleString()}</div>
              <div className="text-stone-400 text-sm">{useCivilian ? 'Civilian' : 'US Military'} Deaths</div>
            </div>
            <div className="bg-stone-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-400">{pct.toFixed(pct >= 1 ? 1 : 2)}%</div>
              <div className="text-stone-400 text-sm">of {cityName || 'your city'}</div>
            </div>
          </div>

          {/* Visual */}
          <div className="mb-4">
            <p className="text-stone-400 text-sm mb-2">
              That&apos;s <strong className="text-white">{pct >= 100 ? 'the entire city and more' : `${pct.toFixed(2)}% of the population`}</strong> gone.
            </p>

            {pct <= 100 && (
              <div className="w-full bg-stone-800 rounded-full h-8 overflow-hidden">
                <div
                  className="bg-red-700 h-8 rounded-full transition-all flex items-center justify-center text-xs font-bold text-white"
                  style={{ width: `${Math.max(pct, 1)}%` }}
                >
                  {pct >= 5 ? `${pct.toFixed(1)}%` : ''}
                </div>
              </div>
            )}

            {pct > 100 && (
              <div className="bg-red-900/40 border border-red-800 rounded-lg p-4 text-center">
                <p className="text-red-300 text-lg font-bold">
                  That&apos;s {(deaths / pop).toFixed(1)}x the entire population of {cityName || 'your city'}
                </p>
                <p className="text-stone-400 text-sm mt-1">
                  Every single person — gone. Then refill the city and do it {Math.floor(deaths / pop) - 1} more time{Math.floor(deaths / pop) - 1 !== 1 ? 's' : ''}.
                </p>
              </div>
            )}
          </div>

          {/* Context comparisons */}
          <div className="space-y-2 text-sm text-stone-400">
            {pct >= 0.01 && pct < 1 && (
              <p>Imagine {Math.round(deaths / 30)} school buses full of people — all dead.</p>
            )}
            {pct >= 1 && pct < 10 && (
              <p>Picture every {Math.round(100 / pct)}th person you pass on the street — gone forever.</p>
            )}
            {pct >= 10 && pct < 50 && (
              <p>Walk down any block. Roughly 1 in {Math.round(100 / pct)} houses would be empty.</p>
            )}
            {pct >= 50 && pct < 100 && (
              <p>More than half of everyone in {cityName || 'your city'} would be dead.</p>
            )}
          </div>

          <div className="mt-6">
            <ShareButtons title={`${deaths.toLocaleString()} deaths from the ${conflict?.shortName} would be ${pct.toFixed(1)}% of ${cityName || 'my city'}. See what war looks like in your city:`} />
          </div>
        </div>
      )}

      {/* Related Tools */}
      <div className="mt-12 pt-8 border-t border-stone-800">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">More Tools</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/tools/compare-wars" className="bg-stone-900 border border-stone-800 rounded-lg p-4 hover:bg-stone-800 transition">
            <p className="font-bold text-white">📊 Compare Wars</p>
            <p className="text-stone-400 text-sm">Side-by-side conflict data</p>
          </Link>
          <Link href="/tools/cost-calculator" className="bg-stone-900 border border-stone-800 rounded-lg p-4 hover:bg-stone-800 transition">
            <p className="font-bold text-white">🧮 Cost Calculator</p>
            <p className="text-stone-400 text-sm">Your state&apos;s war cost</p>
          </Link>
          <Link href="/tools/war-quiz" className="bg-stone-900 border border-stone-800 rounded-lg p-4 hover:bg-stone-800 transition">
            <p className="font-bold text-white">❓ War Quiz</p>
            <p className="text-stone-400 text-sm">Test your knowledge</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
