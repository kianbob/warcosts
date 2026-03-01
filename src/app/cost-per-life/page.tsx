// @ts-nocheck
'use client'
import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Breadcrumbs from '@/components/Breadcrumbs'
import { fmtMoney } from '@/lib/utils'

export default function CostPerLifePage() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    document.title = 'The Price of a Life — Cost Per Death by Conflict | WarCosts'
    fetch('/data/cost-per-life.json').then(r => r.json()).then(setData)
  }, [])

  const top12 = data.slice(0, 12).map(d => ({
    ...d,
    costPerUSdeathM: d.costPerUSdeath / 1e6,
  }))

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Cost Per Life' }]} />
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">The Price of a Life</h1>
        <p className="text-stone-500 mb-2 max-w-3xl">
          How much does America spend for each life lost in war? The answer has skyrocketed.
          A single American death in Afghanistan cost <strong>$935 million</strong>. In WWII, it was $12 million.
        </p>
        <ShareButtons title="The Price of a Life — Cost Per Death by Conflict" />

        {top12.length > 0 && (
          <div className="bg-white rounded-xl border p-6 my-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Cost Per US Death (Millions)</h2>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={top12} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={v => `$${v}M`} />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip formatter={v => `$${Number(v).toFixed(0)}M`} />
                <Bar dataKey="costPerUSdeathM" fill="#991b1b" name="Cost per US Death" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="overflow-x-auto my-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-3 pr-4">Conflict</th>
                <th className="py-3 pr-4 text-right">Total Cost</th>
                <th className="py-3 pr-4 text-right">US Deaths</th>
                <th className="py-3 pr-4 text-right">Cost Per US Death</th>
                <th className="py-3 pr-4 text-right">Civilian Deaths</th>
                <th className="py-3 text-right">Cost Per Civilian Death</th>
              </tr>
            </thead>
            <tbody>
              {data.map(d => (
                <tr key={d.id} className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="py-3 pr-4 font-medium">{d.name}</td>
                  <td className="py-3 pr-4 text-right">{fmtMoney(d.cost)}</td>
                  <td className="py-3 pr-4 text-right">{d.usDeaths.toLocaleString()}</td>
                  <td className="py-3 pr-4 text-right font-bold text-red-800">{fmtMoney(d.costPerUSdeath)}</td>
                  <td className="py-3 pr-4 text-right">{d.civilianDeaths.toLocaleString()}</td>
                  <td className="py-3 text-right">{d.costPerCivilianDeath > 0 ? fmtMoney(d.costPerCivilianDeath) : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <blockquote className="border-l-4 border-red-800 pl-4 italic text-stone-400 my-8">
          &ldquo;The death of one man is a tragedy, the death of millions is a statistic.&rdquo;
          <br /><span className="not-italic text-stone-500">— Often attributed to Joseph Stalin</span>
        </blockquote>

        <BackToTop />
      </div>
      <Footer />
    </>
  )
}
