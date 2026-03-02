'use client'
import { useState, useMemo } from 'react'
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts'
import Link from 'next/link'

const AXIS_TICK = { fontSize: 13 }
const tooltipStyle = {
  backgroundColor: '#fff',
  border: '1px solid #e7e5e4',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}

function Top10Bar({ data }: { data: { name: string; amount: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-30} textAnchor="end" height={70} />
        <YAxis tickFormatter={(v) => `$${v}B`} tick={AXIS_TICK} width={65} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`$${v}B`, 'Military Spending']} />
        <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
          {data.map((entry, i) => (
            <Cell key={entry.name} fill={i === 0 ? '#991b1b' : '#d6d3d1'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

function GlobalTrends({ data }: { data: { year: number; global: number; us: number; china: number; russia: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis dataKey="year" tick={AXIS_TICK} />
        <YAxis tickFormatter={(v) => `$${v}B`} tick={AXIS_TICK} width={65} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`$${v}B`, '']} />
        <Legend />
        <Area type="monotone" dataKey="global" name="World Total" stroke="#78716c" fill="#78716c" fillOpacity={0.1} strokeWidth={2} />
        <Area type="monotone" dataKey="us" name="United States" stroke="#991b1b" fill="#991b1b" fillOpacity={0.2} strokeWidth={2} />
        <Area type="monotone" dataKey="china" name="China" stroke="#b91c1c" fill="#b91c1c" fillOpacity={0.1} strokeWidth={2} strokeDasharray="5 5" />
        <Area type="monotone" dataKey="russia" name="Russia" stroke="#a8a29e" fill="#a8a29e" fillOpacity={0.1} strokeWidth={2} strokeDasharray="5 5" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

type CountryRow = {
  rank: number
  name: string
  slug: string
  amountBillions: number
  pctWorld: number | null
  trend10yr: number | null
  usBases: number
}

type SortKey = 'rank' | 'name' | 'amountBillions' | 'pctWorld' | 'trend10yr' | 'usBases'

export function SortableCountryTable({ data }: { data: CountryRow[] }) {
  const [sortKey, setSortKey] = useState<SortKey>('rank')
  const [sortAsc, setSortAsc] = useState(true)

  const sorted = useMemo(() => {
    const copy = [...data]
    copy.sort((a, b) => {
      const av = a[sortKey] ?? -Infinity
      const bv = b[sortKey] ?? -Infinity
      if (sortKey === 'name') return sortAsc ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av))
      return sortAsc ? (av as number) - (bv as number) : (bv as number) - (av as number)
    })
    return copy
  }, [data, sortKey, sortAsc])

  function handleSort(key: SortKey) {
    if (sortKey === key) setSortAsc(!sortAsc)
    else { setSortKey(key); setSortAsc(key === 'rank' || key === 'name') }
  }

  const arrow = (key: SortKey) => sortKey === key ? (sortAsc ? ' ↑' : ' ↓') : ''

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-stone-300">
            {([
              ['rank', '#'],
              ['name', 'Country'],
              ['amountBillions', 'Spending ($B)'],
              ['pctWorld', '% World'],
              ['trend10yr', '10yr Trend'],
              ['usBases', 'US Bases'],
            ] as [SortKey, string][]).map(([key, label]) => (
              <th
                key={key}
                onClick={() => handleSort(key)}
                className="py-2 font-semibold text-stone-800 cursor-pointer hover:text-[#991b1b] select-none text-left"
              >
                {label}{arrow(key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((c) => (
            <tr key={c.slug} className="border-b border-stone-100 hover:bg-stone-50">
              <td className="py-2 text-stone-400 w-8">{c.rank}</td>
              <td className="py-2">
                <Link href={`/countries/${c.slug}`} className="text-stone-700 hover:text-[#991b1b]">
                  {c.name}
                </Link>
              </td>
              <td className="py-2 font-mono text-[#991b1b]">${c.amountBillions.toFixed(1)}</td>
              <td className="py-2 text-stone-600">{c.pctWorld != null ? `${c.pctWorld}%` : '—'}</td>
              <td className="py-2">
                {c.trend10yr != null ? (
                  <span className={c.trend10yr > 0 ? 'text-red-700' : 'text-green-700'}>
                    {c.trend10yr > 0 ? '+' : ''}{c.trend10yr}%
                  </span>
                ) : '—'}
              </td>
              <td className="py-2 text-stone-600">{c.usBases > 0 ? c.usBases : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const SpendingByCountryCharts = { Top10Bar, GlobalTrends }
