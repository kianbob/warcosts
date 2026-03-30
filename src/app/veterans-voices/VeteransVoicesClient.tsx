'use client'

import { useState } from 'react'

interface VeteranStory {
  id: number
  name: string
  rank: string
  branch: string
  conflict: string
  year: number
  quote: string
  source: string
  context: string
}

const conflictColors: Record<string, string> = {
  'WWII': 'bg-amber-100 text-amber-800 border-amber-300',
  'Korea': 'bg-blue-100 text-blue-800 border-blue-300',
  'Vietnam': 'bg-green-100 text-green-800 border-green-300',
  'Gulf War': 'bg-yellow-100 text-yellow-800 border-yellow-300',
  'Afghanistan': 'bg-orange-100 text-orange-800 border-orange-300',
  'Iraq': 'bg-red-100 text-red-800 border-red-300',
  'War on Terror': 'bg-purple-100 text-purple-800 border-purple-300',
  'Iran 2026': 'bg-rose-100 text-rose-800 border-rose-300',
}

export default function VeteransVoicesClient({
  stories,
  conflicts,
}: {
  stories: VeteranStory[]
  conflicts: string[]
}) {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filtered = activeFilter === 'All' ? stories : stories.filter(s => s.conflict === activeFilter)

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 sticky top-16 z-20 bg-stone-50 py-4 -mt-4">
        <button
          onClick={() => setActiveFilter('All')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
            activeFilter === 'All'
              ? 'bg-stone-800 text-white border-stone-800'
              : 'bg-white text-stone-600 border-stone-300 hover:border-stone-400'
          }`}
        >
          All Conflicts ({stories.length})
        </button>
        {conflicts.map(c => {
          const count = stories.filter(s => s.conflict === c).length
          return (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                activeFilter === c
                  ? 'bg-stone-800 text-white border-stone-800'
                  : 'bg-white text-stone-600 border-stone-300 hover:border-stone-400'
              }`}
            >
              {c} ({count})
            </button>
          )
        })}
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {filtered.map(story => (
          <article
            key={story.id}
            className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${conflictColors[story.conflict] || 'bg-stone-100 text-stone-700 border-stone-300'}`}>
                  {story.conflict}
                </span>
                <span className="text-stone-400 text-sm">{story.year}</span>
              </div>

              {/* Quote */}
              <blockquote className="relative pl-6 border-l-4 border-red-700 mb-6">
                <span className="absolute -left-1 -top-4 text-6xl text-red-200 font-serif leading-none select-none">&ldquo;</span>
                <p className="text-stone-700 text-lg leading-relaxed italic relative z-10">
                  {story.quote}
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <p className="font-playfair text-xl font-bold text-stone-900">{story.name}</p>
                  <p className="text-stone-500 text-sm">{story.rank} · {story.branch}</p>
                  <p className="text-stone-400 text-xs mt-1 italic">{story.source}</p>
                </div>
              </div>

              {/* Context */}
              <details className="mt-4 group">
                <summary className="text-sm text-red-700 cursor-pointer hover:text-red-600 font-medium">
                  Historical Context
                </summary>
                <p className="mt-2 text-stone-600 text-sm leading-relaxed bg-stone-50 p-4 rounded-lg">
                  {story.context}
                </p>
              </details>
            </div>
          </article>
        ))}
      </div>

      {/* Count */}
      <p className="text-center text-stone-400 text-sm mt-12">
        Showing {filtered.length} of {stories.length} stories
      </p>
    </>
  )
}
