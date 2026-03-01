// @ts-nocheck
'use client'
import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Footer from '@/components/Footer'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Breadcrumbs from '@/components/Breadcrumbs'
import { fmtMoney, fmt, slugify } from '@/lib/utils'

const PARTIES: Record<string, string> = {
  'Washington': 'Independent', 'Adams': 'Federalist', 'Jefferson': 'Dem-Rep',
  'Madison': 'Dem-Rep', 'Polk': 'Democrat', 'Lincoln': 'Republican',
  'McKinley': 'Republican', 'Roosevelt': 'Democrat', 'Wilson': 'Democrat',
  'Truman': 'Democrat', 'Eisenhower': 'Republican', 'Kennedy': 'Democrat',
  'Johnson': 'Democrat', 'Nixon': 'Republican', 'Reagan': 'Republican',
  'Bush Sr.': 'Republican', 'Clinton': 'Democrat', 'Bush Jr.': 'Republican',
  'Obama': 'Democrat', 'Trump': 'Republican', 'Biden': 'Democrat',
  'Continental Congress': '—',
}

export default function PresidentsPage() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    document.title = 'Presidents at War — Who Spent the Most? | WarCosts'
    fetch('/data/presidents.json').then(r => r.json()).then(setData)
  }, [])

  const chartData = data.slice(0, 10).map(d => ({
    name: d.name,
    costB: d.totalCost / 1e9,
  }))

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Presidents at War' }]} />
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Presidents at War</h1>
        <p className="text-stone-500 mb-2 max-w-3xl">
          Which presidents waged the most wars? Who spent the most? A war scorecard
          for every commander-in-chief who sent Americans into conflict.
        </p>
        <ShareButtons title="Presidents at War — War Scorecard" />

        {chartData.length > 0 && (
          <div className="bg-white rounded-xl border p-6 my-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Total War Cost by President (Billions)</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={v => `$${v}B`} />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip formatter={v => `$${Number(v).toFixed(0)}B`} />
                <Bar dataKey="costB" fill="#991b1b" name="Total Cost" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="overflow-x-auto my-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-3 pr-4">President</th>
                <th className="py-3 pr-4">Party</th>
                <th className="py-3 pr-4">Conflicts</th>
                <th className="py-3 pr-4 text-right">Total Cost</th>
                <th className="py-3 text-right">US Deaths</th>
              </tr>
            </thead>
            <tbody>
              {data.map(d => (
                <tr key={d.name} className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="py-3 pr-4 font-medium"><a href={`/presidents/${slugify(d.name)}`} className="text-primary hover:underline">{d.name}</a></td>
                  <td className="py-3 pr-4 text-stone-500">{PARTIES[d.name] || '—'}</td>
                  <td className="py-3 pr-4">{d.conflicts.join(', ')}</td>
                  <td className="py-3 pr-4 text-right font-bold text-red-800">{fmtMoney(d.totalCost)}</td>
                  <td className="py-3 text-right">{fmt(d.totalUSDeaths)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <blockquote className="border-l-4 border-red-800 pl-4 italic text-stone-400 my-8">
          &ldquo;The executive has no right, in any case, to decide the question, whether there is or is not
          cause for declaring war.&rdquo;
          <br /><span className="not-italic text-stone-500">— James Madison</span>
        </blockquote>

        <BackToTop />
      </div>
      <Footer />
    </>
  )
}
