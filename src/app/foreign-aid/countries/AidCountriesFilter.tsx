// @ts-nocheck
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { fmtMoney } from '@/lib/utils'

export default function AidCountriesFilter({ countries }: { countries: any[] }) {
  const regions = ['All', ...Array.from(new Set(countries.map(c => c.region))).sort()]
  const [region, setRegion] = useState('All')

  const filtered = region === 'All' ? countries : countries.filter(c => c.region === region)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {regions.map(r => (
          <button key={r} onClick={() => setRegion(r)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${region === r ? 'bg-red-600 text-white' : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'}`}>
            {r}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-700 text-stone-400 text-left">
              <th className="py-3 pr-4">#</th>
              <th className="py-3 pr-4">Country</th>
              <th className="py-3 pr-4">Region</th>
              <th className="py-3 pr-4 text-right">Total Since 2001</th>
              <th className="py-3 pr-4 text-right">Annual (2024)</th>
              <th className="py-3 pr-4 text-right">Military %</th>
              <th className="py-3 text-right">Population</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => (
              <tr key={c.slug} className="border-b border-stone-800 hover:bg-slate-800 transition">
                <td className="py-3 pr-4 text-stone-500">{i + 1}</td>
                <td className="py-3 pr-4">
                  <Link href={`/foreign-aid/${c.slug}`} className="text-red-400 hover:text-red-300 font-medium">
                    {c.country}
                  </Link>
                </td>
                <td className="py-3 pr-4 text-stone-400">{c.region}</td>
                <td className="py-3 pr-4 text-right font-mono text-stone-300">{fmtMoney(c.totalSince2001 * 1e6)}</td>
                <td className="py-3 pr-4 text-right font-mono text-stone-300">{fmtMoney(c.annual2024 * 1e6)}</td>
                <td className="py-3 pr-4 text-right">
                  <span className={c.militaryPct >= 70 ? 'text-red-400' : 'text-stone-300'}>{c.militaryPct}%</span>
                </td>
                <td className="py-3 text-right text-stone-400">{c.population}M</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
