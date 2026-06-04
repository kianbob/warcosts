// @ts-nocheck
'use client'
import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Breadcrumbs from '@/components/Breadcrumbs'
import { fmtMoney, fmt } from '@/lib/utils'
import FaqJsonLd from '@/components/FaqJsonLd'

export default function CostPerLifePage() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    document.title = 'The Price of a Life — Cost Per Death by Conflict'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'How much does each American death "cost" per conflict? From $96K in WWII to $935M in Afghanistan. The economics of human life in wartime.')
    if (!document.querySelector('meta[name="description"]')) {
      const meta = document.createElement('meta'); meta.name = 'description'; meta.content = 'How much does each American death cost per conflict? From $96K in WWII to $935M in Afghanistan.'; document.head.appendChild(meta);
    }
    fetch('/data/cost-per-life.json').then(r => r.json()).then(setData)
  }, [])

  const top12 = data.slice(0, 12).map(d => ({
    ...d,
    costPerUSdeathM: d.costPerUSdeath / 1e6,
  }))

  return (
    <>
      <FaqJsonLd faqs={[
        { q: 'How much does each American military death cost by war?', a: 'The cost per US death has skyrocketed: $12 million in WWII, $89 million in Vietnam, and $935 million in Afghanistan.' },
        { q: 'Why does each military death cost more in modern wars?', a: 'Modern wars cost more per death due to advanced body armor, medevac helicopters, battlefield medicine, and massive support infrastructure. The wounded-to-killed ratio went from 1.7:1 in WWII to 8:1 in Iraq/Afghanistan.' },
        { q: 'How much did each American death cost in Afghanistan?', a: 'Each American death in Afghanistan cost approximately $935 million — the total $2.3 trillion war cost divided by 2,461 US deaths.' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","name":"The Price of a Life — Cost Per Death by Conflict","description":"How much does each American death cost per conflict? From $96K in WWII to $935M in Afghanistan.","url":"https://www.warcosts.org/cost-per-life","publisher":{"@type":"Organization","name":"WarCosts","url":"https://www.warcosts.org"}}) }} />      <div className="max-w-7xl mx-auto px-4 py-8">
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
                  <td className="py-3 pr-4 text-right">{fmt(d.usDeaths || 0)}</td>
                  <td className="py-3 pr-4 text-right font-bold text-red-800">{fmtMoney(d.costPerUSdeath)}</td>
                  <td className="py-3 pr-4 text-right">{fmt(d.civilianDeaths || 0)}</td>
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

        {/* Methodology */}
        <section className="my-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">📐 How We Calculate "Cost Per Life"</h2>
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 space-y-4">
            <p className="text-stone-700 leading-relaxed">
              The cost-per-life figure divides the total inflation-adjusted cost of a conflict by the number of US military deaths. This is a deliberately provocative metric — it doesn't mean the government "paid" for each death, but rather how much national treasure was expended per life lost.
            </p>
            <div className="bg-white border border-stone-200 rounded-lg p-4">
              <h3 className="font-bold text-stone-800 mb-2">Formula</h3>
              <p className="font-mono text-sm text-red-800 bg-red-50 p-3 rounded">
                Cost Per Death = Total War Cost (2024 dollars) ÷ Total US Military Deaths
              </p>
            </div>
            <ul className="list-disc pl-5 text-sm text-stone-600 space-y-2">
              <li><strong>Total war cost</strong> includes direct military spending, veterans' care, interest on war debt, and economic costs — drawn from Congressional Research Service and Brown University's Costs of War project.</li>
              <li><strong>US military deaths</strong> include killed in action, died of wounds, and non-hostile deaths in theater — from DoD casualty records.</li>
              <li><strong>Inflation adjustment</strong> converts all figures to 2024 US dollars using BLS CPI data.</li>
              <li>Costs do <em>not</em> include long-term veteran healthcare (which would make recent wars even more expensive) or opportunity costs of deploying capital to war instead of domestic needs.</li>
            </ul>
          </div>
        </section>

        {/* What the numbers mean */}
        <section className="my-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🔍 What These Numbers Really Mean</h2>
          <div className="space-y-4">
            <div className="bg-white border border-stone-200 rounded-xl p-5">
              <h3 className="font-bold text-stone-800 mb-2">The Escalating Cost of Modern War</h3>
              <p className="text-sm text-stone-700">
                The dramatic increase in cost per death reflects several factors: advanced body armor and helmets save more lives (shifting deaths to injuries), medevac helicopters get wounded soldiers to hospitals within the "golden hour," and massive logistics and support infrastructure sustains smaller deployed forces. The wounded-to-killed ratio went from <span className="font-mono text-red-800">1.7:1</span> in WWII to <span className="font-mono text-red-800">8:1</span> in Iraq/Afghanistan.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-5">
              <h3 className="font-bold text-stone-800 mb-2">Fewer Deaths, More Injuries</h3>
              <p className="text-sm text-stone-700">
                Modern wars produce fewer deaths but more traumatic brain injuries, amputations, and PTSD cases. Over <span className="font-mono text-red-800">970,000</span> Iraq/Afghanistan veterans have filed disability claims. The "cost per death" metric understates the true human cost by not capturing the living wounded.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-5">
              <h3 className="font-bold text-stone-800 mb-2">The Hidden Costs Still Accumulating</h3>
              <p className="text-sm text-stone-700">
                Veterans' healthcare and disability costs peak 30–40 years after a war ends. The final cost of Iraq and Afghanistan wars is projected to reach <span className="font-mono text-red-800">$6.5 trillion</span> by 2050 (Brown University). This means the cost-per-death figures shown here will continue rising for decades.
              </p>
            </div>
          </div>
        </section>

        {/* Civilian vs Military */}
        <section className="my-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">⚖️ Civilian vs. Military Cost Comparison</h2>
          <p className="text-stone-500 mb-4">The US government assigns very different values to American military deaths versus foreign civilian deaths.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-stone-300 text-left">
                  <th className="py-3 pr-4">Category</th>
                  <th className="py-3 pr-4 text-right">Effective "Value" Per Death</th>
                  <th className="py-3 text-right">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="py-3 pr-4 font-medium">US Soldier (Afghanistan)</td>
                  <td className="py-3 pr-4 text-right font-mono font-bold text-red-800">$935M</td>
                  <td className="py-3 text-right text-stone-500 text-xs">Total war cost ÷ US deaths</td>
                </tr>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="py-3 pr-4 font-medium">SGLI Death Benefit (paid to family)</td>
                  <td className="py-3 pr-4 text-right font-mono font-bold text-red-800">$400K</td>
                  <td className="py-3 text-right text-stone-500 text-xs">Servicemembers' Group Life Insurance</td>
                </tr>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="py-3 pr-4 font-medium">Death Gratuity (paid to next of kin)</td>
                  <td className="py-3 pr-4 text-right font-mono font-bold text-red-800">$100K</td>
                  <td className="py-3 text-right text-stone-500 text-xs">Immediate payment upon death</td>
                </tr>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="py-3 pr-4 font-medium">Foreign Civilian (condolence payment)</td>
                  <td className="py-3 pr-4 text-right font-mono font-bold text-red-800">$2,500–$6,000</td>
                  <td className="py-3 text-right text-stone-500 text-xs">Discretionary, not guaranteed</td>
                </tr>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="py-3 pr-4 font-medium">Kunduz Hospital Victims (MSF, 2015)</td>
                  <td className="py-3 pr-4 text-right font-mono font-bold text-red-800">$6,000</td>
                  <td className="py-3 text-right text-stone-500 text-xs">42 killed, $252K total paid</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-400 mt-2">The implicit "value" of a foreign civilian life killed by the US military is roughly 150,000x less than the cost the US spends per American military death.</p>
        </section>

        {/* International Comparisons */}
        <section className="my-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🌍 International Comparisons</h2>
          <p className="text-stone-500 mb-4">How different countries value a "statistical life" in policy decisions — and what it reveals about priorities.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-stone-300 text-left">
                  <th className="py-3 pr-4">Country</th>
                  <th className="py-3 pr-4 text-right">Value of Statistical Life (VSL)</th>
                  <th className="py-3 pr-4 text-right">Military Budget / Soldier</th>
                  <th className="py-3 text-right">Active Military</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { country: '🇺🇸 United States', vsl: '$11.6M', perSoldier: '$690K', active: '1.3M' },
                  { country: '🇬🇧 United Kingdom', vsl: '$3.8M', perSoldier: '$380K', active: '149K' },
                  { country: '🇫🇷 France', vsl: '$3.5M', perSoldier: '$260K', active: '205K' },
                  { country: '🇮🇱 Israel', vsl: '$4.2M', perSoldier: '$140K', active: '170K' },
                  { country: '🇷🇺 Russia', vsl: '$0.6M', perSoldier: '$77K', active: '1.15M' },
                  { country: '🇨🇳 China', vsl: '$1.1M', perSoldier: '$143K', active: '2.0M' },
                  { country: '🇮🇳 India', vsl: '$0.5M', perSoldier: '$53K', active: '1.45M' },
                ].map(r => (
                  <tr key={r.country} className="border-b border-stone-200 hover:bg-stone-50">
                    <td className="py-3 pr-4 font-medium">{r.country}</td>
                    <td className="py-3 pr-4 text-right font-mono text-red-800">{r.vsl}</td>
                    <td className="py-3 pr-4 text-right font-mono">{r.perSoldier}</td>
                    <td className="py-3 text-right text-stone-500">{r.active}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-400 mt-2">VSL from EPA/OECD regulatory frameworks. Military budget per soldier = annual defense budget ÷ active duty personnel.</p>
        </section>

        {/* Opportunity Cost */}
        <section className="my-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">💰 What $935 Million Could Buy Instead</h2>
          <p className="text-stone-500 mb-4">The cost of a single American death in Afghanistan, applied to domestic needs:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { item: 'Full college scholarships', value: '23,375', unit: 'students', detail: 'at $40K/year for 4 years' },
              { item: 'Homes for the homeless', value: '3,117', unit: 'houses', detail: 'at $300K median home price' },
              { item: 'Annual teacher salaries', value: '14,846', unit: 'teachers', detail: 'at $63K average salary' },
              { item: 'Clean water systems', value: '935', unit: 'towns', detail: 'at $1M per small town system' },
              { item: 'Years of school lunch programs', value: '267', unit: 'years', detail: 'feeding 1,000 kids/year at $3.50/meal' },
              { item: 'Hospital beds', value: '467', unit: 'beds', detail: 'at $2M per fully-equipped bed' },
            ].map(o => (
              <div key={o.item} className="bg-stone-50 border border-stone-200 rounded-lg p-4">
                <p className="text-2xl font-bold text-red-800 font-mono">{o.value}</p>
                <p className="font-medium text-stone-800">{o.unit}</p>
                <p className="text-xs text-stone-500">{o.item} — {o.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* War-by-War Comparison */}
        <section className="my-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">📊 Why Modern Wars Cost More Per Death</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-stone-300 text-left">
                  <th className="py-3 pr-4">Factor</th>
                  <th className="py-3 pr-4 text-center">WWII</th>
                  <th className="py-3 pr-4 text-center">Vietnam</th>
                  <th className="py-3 text-center">Afghanistan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Wounded-to-Killed Ratio', wwii: '1.7:1', vietnam: '2.6:1', afghan: '8:1' },
                  { factor: 'Medevac Time (avg)', wwii: '12–18 hrs', vietnam: '1–2 hrs', afghan: '<1 hr' },
                  { factor: 'Body Armor', wwii: 'Flak jacket', vietnam: 'Fragmentation vest', afghan: 'Interceptor/IOTV' },
                  { factor: 'Troops Deployed (peak)', wwii: '12.2M', vietnam: '536K', afghan: '100K' },
                  { factor: 'Daily Cost (2024$)', wwii: '$4.1B/day', vietnam: '$520M/day', afghan: '$300M/day' },
                  { factor: 'Contractor Ratio', wwii: '—', vietnam: '~1:6', afghan: '1:1+' },
                  { factor: 'Precision Munitions', wwii: '0%', vietnam: '<5%', afghan: '>90%' },
                ].map(r => (
                  <tr key={r.factor} className="border-b border-stone-200 hover:bg-stone-50">
                    <td className="py-3 pr-4 font-medium">{r.factor}</td>
                    <td className="py-3 pr-4 text-center font-mono text-sm">{r.wwii}</td>
                    <td className="py-3 pr-4 text-center font-mono text-sm">{r.vietnam}</td>
                    <td className="py-3 text-center font-mono text-sm text-red-800">{r.afghan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <BackToTop />
      </div>
    </>
  )
}
