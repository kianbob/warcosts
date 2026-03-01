'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'

interface Base {
  name: string
  slug: string
  country: string
  state: string | null
  component: string | null
  type: string
  status: string
}

export default function DirectoryClient({ bases }: { bases: Base[] }) {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [countryFilter, setCountryFilter] = useState('all')
  const [componentFilter, setComponentFilter] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [page, setPage] = useState(1)
  const perPage = 50

  const countries = useMemo(() => {
    const c = new Set(bases.map(b => b.country))
    return ['all', ...Array.from(c).sort()]
  }, [bases])

  const components = useMemo(() => {
    const c = new Set(bases.filter(b => b.component).map(b => b.component!))
    return ['all', ...Array.from(c).sort()]
  }, [bases])

  const filtered = useMemo(() => {
    let result = bases
    if (search) {
      const q = search.toLowerCase()
      result = result.filter(b => b.name.toLowerCase().includes(q) || b.country.toLowerCase().includes(q) || (b.state && b.state.toLowerCase().includes(q)))
    }
    if (typeFilter !== 'all') result = result.filter(b => b.type === typeFilter)
    if (countryFilter !== 'all') result = result.filter(b => b.country === countryFilter)
    if (componentFilter !== 'all') result = result.filter(b => b.component === componentFilter)

    result.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'country') return a.country.localeCompare(b.country)
      if (sortBy === 'type') return a.type.localeCompare(b.type)
      return 0
    })
    return result
  }, [bases, search, typeFilter, countryFilter, componentFilter, sortBy])

  const totalPages = Math.ceil(filtered.length / perPage)
  const pageData = filtered.slice((page - 1) * perPage, page * perPage)

  const typeLabels: Record<string, string> = {
    domestic: 'Domestic',
    base: 'Overseas Base',
    'lily-pad': 'Lily Pad',
    'us-funded': 'US-Funded',
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="Search bases..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1) }}
          className="border border-stone-300 rounded-lg px-4 py-2 w-64 text-sm"
        />
        <select value={typeFilter} onChange={e => { setTypeFilter(e.target.value); setPage(1) }} className="border border-stone-300 rounded-lg px-3 py-2 text-sm">
          <option value="all">All Types</option>
          <option value="domestic">Domestic</option>
          <option value="base">Overseas Base</option>
          <option value="lily-pad">Lily Pad</option>
          <option value="us-funded">US-Funded</option>
        </select>
        <select value={countryFilter} onChange={e => { setCountryFilter(e.target.value); setPage(1) }} className="border border-stone-300 rounded-lg px-3 py-2 text-sm">
          {countries.map(c => <option key={c} value={c}>{c === 'all' ? 'All Countries' : c}</option>)}
        </select>
        <select value={componentFilter} onChange={e => { setComponentFilter(e.target.value); setPage(1) }} className="border border-stone-300 rounded-lg px-3 py-2 text-sm">
          {components.map(c => <option key={c} value={c}>{c === 'all' ? 'All Branches' : c}</option>)}
        </select>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border border-stone-300 rounded-lg px-3 py-2 text-sm">
          <option value="name">Sort: Name</option>
          <option value="country">Sort: Country</option>
          <option value="type">Sort: Type</option>
        </select>
      </div>

      <p className="text-sm text-stone-500 mb-4">
        Showing {((page - 1) * perPage + 1).toLocaleString()}-{Math.min(page * perPage, filtered.length).toLocaleString()} of {filtered.length.toLocaleString()} installations
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-300 text-left">
              <th className="py-2 pr-4 font-semibold text-stone-700">Name</th>
              <th className="py-2 pr-4 font-semibold text-stone-700">Country</th>
              <th className="py-2 pr-4 font-semibold text-stone-700 hidden md:table-cell">State</th>
              <th className="py-2 pr-4 font-semibold text-stone-700 hidden md:table-cell">Branch</th>
              <th className="py-2 pr-4 font-semibold text-stone-700">Type</th>
              <th className="py-2 font-semibold text-stone-700 hidden md:table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map(b => (
              <tr key={b.slug} className="border-b border-stone-100 hover:bg-stone-50">
                <td className="py-2 pr-4">
                  <Link href={`/bases/${b.slug}`} className="text-red-700 hover:text-red-900 font-medium">
                    {b.name}
                  </Link>
                </td>
                <td className="py-2 pr-4 text-stone-600">{b.country}</td>
                <td className="py-2 pr-4 text-stone-600 hidden md:table-cell">{b.state || '—'}</td>
                <td className="py-2 pr-4 text-stone-600 hidden md:table-cell">{b.component || '—'}</td>
                <td className="py-2 pr-4">
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                    b.type === 'domestic' ? 'bg-blue-100 text-blue-800' :
                    b.type === 'base' ? 'bg-red-100 text-red-800' :
                    b.type === 'lily-pad' ? 'bg-amber-100 text-amber-800' :
                    'bg-stone-100 text-stone-800'
                  }`}>
                    {typeLabels[b.type] || b.type}
                  </span>
                </td>
                <td className="py-2 text-stone-600 hidden md:table-cell">{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
            className="px-3 py-1 rounded border border-stone-300 text-sm disabled:opacity-50">← Prev</button>
          <span className="text-sm text-stone-500">Page {page} of {totalPages}</span>
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
            className="px-3 py-1 rounded border border-stone-300 text-sm disabled:opacity-50">Next →</button>
        </div>
      )}
    </div>
  )
}
