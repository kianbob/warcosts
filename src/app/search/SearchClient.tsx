'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { fmtMoney, fmt } from '@/lib/utils'

export default function SearchClient() {
  const [query, setQuery] = useState('')
  const [conflicts, setConflicts] = useState<any[]>([])

  useEffect(() => {
    fetch('/data/conflicts.json').then(r => r.json()).then(setConflicts)
  }, [])

  const q = query.toLowerCase()
  const results = q ? conflicts.filter(c =>
    c.name.toLowerCase().includes(q) ||
    (c.shortName || '').toLowerCase().includes(q) ||
    c.era.toLowerCase().includes(q) ||
    (c.countries || []).some((co: string) => co.toLowerCase().includes(q)) ||
    c.region.toLowerCase().includes(q)
  ) : []

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search by name, country, region, or era..."
        className="w-full p-4 border rounded-lg text-lg mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {query && <p className="text-muted mb-4">{results.length} result{results.length !== 1 ? 's' : ''}</p>}
      <div className="space-y-4">
        {results.map(c => (
          <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-lg border p-4 hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-lg">{c.shortName || c.name}</h2>
                <p className="text-muted text-sm">{c.startYear}–{c.endYear} · {c.era} · {c.region}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">{fmtMoney(c.costInflationAdjusted)}</p>
                <p className="text-muted text-sm">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) + ' deaths' : c.type.replace(/_/g, ' ')}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
