import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'What Else Could $8 Trillion Buy? — The Opportunity Cost of War',
  description: 'The War on Terror cost $8 trillion. Here\'s what that money could have funded: free college, clean water, ending homelessness, and more.',
}

const extraExamples = [
  { item: 'New affordable homes ($250K each)', units: 32000000, unitCost: 250000, description: '32 million new homes — enough to end the housing crisis entirely and house every homeless person 800 times over.' },
  { item: 'Hospital beds ($1.5M each to build/equip)', units: 5333333, unitCost: 1500000, description: '5.3 million new hospital beds — 5× the current US total. COVID exposed the danger of our depleted healthcare capacity.' },
  { item: 'Teacher salaries for a year ($63K)', units: 126984127, unitCost: 63000, description: '127 million teacher-years of employment. Currently, there are only 3.7M teachers in the US.' },
  { item: 'Total US student loan debt forgiven', units: 4.7, unitCost: 1700000000000, description: 'Could wipe out all $1.7T in student debt 4.7 times over. An entire generation freed from debt bondage.' },
  { item: 'Years of universal healthcare ($3.5T/yr)', units: 2.3, unitCost: 3500000000000, description: 'Over 2 years of healthcare for every American — or 20 years of the gap between current spending and universal coverage.' },
  { item: 'Lead pipe replacement for every US city', units: 160, unitCost: 50000000000, description: 'Replace all lead pipes in America 160 times over. Flint, Michigan\'s water crisis could have been fixed 8,000 times.' },
]

const perConflictTradeoffs = [
  {
    conflict: 'Afghanistan War ($2.3 Trillion)',
    tradeoffs: [
      { instead: 'Free public college for all Americans', duration: '29 years', math: '$79B/yr × 29 = $2.3T' },
      { instead: 'End homelessness in America', duration: '115 years', math: '$20B/yr × 115 = $2.3T' },
      { instead: 'Fund NASA at current levels', duration: '92 years', math: '$25B/yr × 92 = $2.3T' },
      { instead: 'Clean energy transition (100% renewable grid)', duration: 'Done', math: 'Estimated cost: $2T' },
      { instead: 'Double the NIH research budget', duration: '48 years', math: '$48B/yr × 48 = $2.3T' },
    ],
  },
  {
    conflict: 'Iraq War ($2.0 Trillion)',
    tradeoffs: [
      { instead: 'Universal pre-K for all American children', duration: '222 years', math: '$9B/yr × 222 = $2.0T' },
      { instead: 'Rebuild every bridge in America (45,000 structurally deficient)', duration: '8 times over', math: '$260B estimated cost × 7.7 = $2.0T' },
      { instead: 'Fund SNAP (food stamps) at current levels', duration: '26 years', math: '$77B/yr × 26 = $2.0T' },
      { instead: 'Triple the EPA budget', duration: '74 years', math: '$27B/yr × 74 = $2.0T' },
    ],
  },
  {
    conflict: 'Total War on Terror ($8 Trillion)',
    tradeoffs: [
      { instead: 'Free college for all Americans', duration: '101 years', math: '$79B/yr × 101 = $8T' },
      { instead: 'End world hunger', duration: '228 years', math: '$35B/yr × 228 = $8T' },
      { instead: 'Clean drinking water for the entire planet', duration: '400 years', math: '$20B/yr × 400 = $8T' },
      { instead: 'Eliminate all US student loan debt', duration: '4.7 times over', math: '$1.7T × 4.7 = $8T' },
      { instead: 'Fund global climate change mitigation', duration: '8 years at needed levels', math: '$1T/yr × 8 = $8T' },
      { instead: 'Forgive all medical debt in America', duration: '56 times over', math: '$140B × 57 = $8T' },
    ],
  },
]

const annualBudgetTradeoffs = [
  { military: 'One F-35 fighter jet ($80M)', alternative: '1,270 teachers for a year ($63K each)' },
  { military: 'One aircraft carrier ($13B)', alternative: '163,000 teachers for a year, or 52,000 affordable homes' },
  { military: 'One Virginia-class submarine ($3.4B)', alternative: 'Annual budget of the Consumer Product Safety Commission (17×)' },
  { military: 'Annual overseas base cost ($55B)', alternative: 'Triple EPA budget + double NASA budget + fund Amtrak for 10 years' },
  { military: 'One Tomahawk cruise missile ($1.8M)', alternative: '28 teachers for a year, or 7 affordable homes' },
  { military: 'Daily Pentagon spending ($2.4B)', alternative: 'Annual Amtrak subsidy ($2.6B)' },
  { military: 'Pentagon lobbying ($130M/yr)', alternative: 'Annual budget for National Endowment for the Arts' },
  { military: 'F-35 program lifetime ($1.7T)', alternative: 'Free college for every American for 21 years' },
  { military: 'One B-21 Raider bomber ($750M)', alternative: '3,000 affordable homes or 12,000 teachers for a year' },
  { military: 'Nuclear weapons maintenance ($51B/yr)', alternative: 'Clean up every Superfund toxic waste site in America (2×)' },
]

const perHouseholdBreakdown = [
  { category: 'Pentagon (official)', amount: '$6,650', pct: '57%' },
  { category: 'Veterans Affairs', amount: '$2,260', pct: '19%' },
  { category: 'Interest on war debt', amount: '$1,090', pct: '9%' },
  { category: 'Intelligence agencies', amount: '$530', pct: '5%' },
  { category: 'Homeland Security', amount: '$465', pct: '4%' },
  { category: 'Nuclear weapons (DOE)', amount: '$380', pct: '3%' },
  { category: 'State Dept (military)', amount: '$210', pct: '2%' },
  { category: 'TOTAL', amount: '$11,585', pct: '100%' },
]

const infrastructureGrades = [
  { category: 'Bridges', grade: 'C', cost: '$260B needed', note: '45,000 structurally deficient. Average age: 44 years.' },
  { category: 'Roads', grade: 'D', cost: '$420B needed', note: '43% of roads in poor or mediocre condition.' },
  { category: 'Water Systems', grade: 'C-', cost: '$434B needed', note: '6B gallons of treated water lost daily to leaks.' },
  { category: 'Schools', grade: 'D+', cost: '$380B needed', note: '53% of schools need repairs. Average age: 50+ years.' },
  { category: 'Airports', grade: 'D+', cost: '$175B needed', note: 'Congestion costs $28B/yr in lost productivity.' },
  { category: 'Rail', grade: 'D+', cost: '$100B needed', note: 'US has zero true high-speed rail. China has 25,000 miles.' },
  { category: 'Broadband', grade: 'C+', cost: '$65B needed', note: '21 million Americans lack broadband access.' },
  { category: 'Dams', grade: 'D', cost: '$76B needed', note: '2,300 high-hazard dams. Average age: 57 years.' },
  { category: 'TOTAL INFRASTRUCTURE GAP', grade: 'C-', cost: '$2.6T', note: 'ASCE estimate. The War on Terror cost 3× this amount.' },
]

export default function OpportunityCostPage() {
  const data = loadData('opportunity-costs.json')

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'What Else Could This Buy?' }]} />

      <div className="text-center mb-12">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
          What Else Could <span className="text-red-600">{fmtMoney(data.warOnTerrorTotal)}</span> Buy?
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          The War on Terror alone cost {fmtMoney(data.warOnTerrorTotal)}. That money is gone — spent on wars that killed 929,000 people and destabilized four countries. Here&apos;s what it could have done instead.
        </p>
      </div>

      <ShareButtons title="What Else Could $8 Trillion Buy?" />

      {/* Your Tax Dollars framing */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-800 mb-2">Your Tax Dollars at Work</h2>
        <p className="text-sm text-stone-600 max-w-2xl mx-auto">Every dollar listed below came from American taxpayers. The average household contributed roughly <strong>$60,000</strong> to the War on Terror. What could your family&apos;s share have bought?</p>
        <Link href="/tools/tax-receipt" className="inline-block mt-4 text-red-800 font-semibold hover:underline text-sm">→ Calculate your personal war tax receipt</Link>
      </div>

      {/* Per Household Breakdown */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What Your Household Pays (Annual True National Security Cost)</h2>
        <div className="space-y-2">
          {perHouseholdBreakdown.map(h => (
            <div key={h.category} className={`flex items-center gap-3 rounded-lg p-3 border text-sm ${h.category === 'TOTAL' ? 'bg-red-100 border-red-300' : 'bg-white'}`}>
              <span className="w-44 font-medium">{h.category}</span>
              <div className="flex-1 bg-stone-100 rounded-full h-4 overflow-hidden">
                <div className="h-full bg-red-500 rounded-full" style={{ width: h.pct }} />
              </div>
              <span className={`w-24 text-right font-bold ${h.category === 'TOTAL' ? 'text-red-700 text-lg' : 'text-primary'}`}>{h.amount}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-4 text-center">Based on ~133 million US households. True national security spending: ~$1.54T/yr ÷ 133M = ~$11,585/household.</p>
      </div>

      {/* Main examples from data */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What $8 Trillion Could Buy</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {data.examples.map((e: any) => (
          <div key={e.item} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition">
            <p className="text-4xl font-bold text-red-600 font-[family-name:var(--font-heading)] mb-2">
              {e.units >= 1e9 ? `${(e.units/1e9).toFixed(1)}B` : e.units >= 1e6 ? `${Math.round(e.units/1e6)}M` : typeof e.units === 'number' && e.units < 100 ? e.units.toFixed(0) : fmt(e.units)}×
            </p>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">{e.item}</h3>
            <p className="text-muted">{e.description}</p>
            <p className="text-xs text-muted mt-2">Unit cost: {fmtMoney(e.unitCost)}</p>
          </div>
        ))}
      </div>

      {/* Per-Conflict Tradeoffs */}
      <div className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">War vs. Investment: Conflict by Conflict</h2>
        {perConflictTradeoffs.map(p => (
          <div key={p.conflict} className="bg-stone-50 rounded-xl p-8 mb-8 border">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-red-800">{p.conflict}</h3>
            <div className="space-y-3">
              {p.tradeoffs.map(t => (
                <div key={t.instead} className="grid md:grid-cols-3 gap-3 items-center">
                  <div className="bg-green-100 rounded-lg p-3 border border-green-200 md:col-span-2">
                    <p className="font-bold text-green-800">{t.instead}</p>
                    <p className="text-xs text-green-600">{t.duration}</p>
                  </div>
                  <div className="text-xs text-muted text-right">{t.math}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Side-by-side comparison */}
      <div className="bg-stone-100 rounded-xl p-8 my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 text-center">Side-by-Side: War vs. Investment</h2>
        <div className="space-y-6">
          {[
            { war: '$2.3T Afghanistan War (20 years)', alt: 'Free college for all Americans for 29 years', altCost: '$79B/yr × 29' },
            { war: '$2.0T Iraq War', alt: 'End homelessness in America for 100 years', altCost: '$20B/yr × 100' },
            { war: '$8T War on Terror (total)', alt: 'Clean drinking water for the entire world for 400 years', altCost: '$20B/yr × 400' },
            { war: '$886B annual defense budget', alt: '14 million new teachers\' salaries per year', altCost: '$63K × 14M' },
            { war: '$55B/yr overseas bases', alt: 'Triple the EPA budget + double NASA\'s budget', altCost: '$24B EPA + $28B NASA' },
          ].map(c => (
            <div key={c.war} className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-100 rounded-lg p-4 border border-red-200">
                <p className="text-xs font-semibold text-red-600 uppercase mb-1">What We Spent</p>
                <p className="font-bold text-stone-800">{c.war}</p>
              </div>
              <div className="bg-green-100 rounded-lg p-4 border border-green-200">
                <p className="text-xs font-semibold text-green-600 uppercase mb-1">What We Could Have Had</p>
                <p className="font-bold text-stone-800">{c.alt}</p>
                <p className="text-xs text-muted mt-1">{c.altCost}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Annual Budget Weapon-for-Weapon */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Weapon-for-Investment Trades</h2>
        <p className="text-sm text-muted mb-4">What could individual weapons systems buy instead?</p>
        <div className="space-y-2">
          {annualBudgetTradeoffs.map((t, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-2">
              <div className="bg-red-50 rounded-lg p-3 border border-red-200 text-sm">
                <span className="text-red-700">🔴</span> {t.military}
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200 text-sm">
                <span className="text-green-700">🟢</span> {t.alternative}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infrastructure Comparison */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">🏗️ America&apos;s Infrastructure Report Card</h2>
        <p className="text-sm text-stone-600 mb-4">The American Society of Civil Engineers (ASCE) gives US infrastructure an overall grade of C-. The total investment needed: <strong>$2.6 trillion</strong>. The War on Terror cost more than 3× that amount.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-amber-300 text-left">
                <th className="py-2 px-3">Category</th>
                <th className="py-2 px-3 text-center">Grade</th>
                <th className="py-2 px-3 text-right">Investment Needed</th>
                <th className="py-2 px-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {infrastructureGrades.map(g => (
                <tr key={g.category} className={`border-b border-amber-200 ${g.category.includes('TOTAL') ? 'bg-amber-100 font-bold' : ''}`}>
                  <td className="py-2 px-3 font-semibold">{g.category}</td>
                  <td className="py-2 px-3 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
                      g.grade.startsWith('D') ? 'bg-red-200 text-red-800' :
                      g.grade.startsWith('C') ? 'bg-yellow-200 text-yellow-800' :
                      'bg-green-200 text-green-800'
                    }`}>{g.grade}</span>
                  </td>
                  <td className="py-2 px-3 text-right text-primary font-bold">{g.cost}</td>
                  <td className="py-2 px-3 text-muted text-xs">{g.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* R&D Comparison */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">R&D: Where the Money Goes</h2>
        <p className="text-sm text-muted mb-4">The US spends $97B/yr on military R&D — developing weapons to kill people more efficiently. Here&apos;s how that compares to research aimed at saving lives and improving them:</p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { item: 'Pentagon R&D', amount: '$97B/yr', icon: '💣', note: 'Hypersonic weapons, AI-guided munitions, space warfare, next-gen nuclear warheads' },
            { item: 'NIH (All health research)', amount: '$48B/yr', icon: '🏥', note: 'Cancer, heart disease, Alzheimer\'s, infectious diseases, mental health — combined' },
            { item: 'NSF (All science)', amount: '$9.5B/yr', icon: '🔬', note: 'Physics, chemistry, biology, math, social science, engineering — combined' },
            { item: 'DOE Clean Energy R&D', amount: '$8B/yr', icon: '⚡', note: 'Solar, wind, battery storage, grid modernization, fusion research' },
            { item: 'NASA', amount: '$25B/yr', icon: '🚀', note: 'Space exploration, Earth science, aeronautics research' },
            { item: 'NOAA (Climate/weather)', amount: '$6.5B/yr', icon: '🌊', note: 'Climate research, weather forecasting, ocean science' },
          ].map(r => (
            <div key={r.item} className="bg-white rounded-lg p-4 border">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{r.icon}</span>
                <h4 className="font-bold">{r.item}</h4>
                <span className="ml-auto text-primary font-bold">{r.amount}</span>
              </div>
              <p className="text-muted text-xs">{r.note}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-stone-600 mt-4 text-center">The Pentagon spends more on R&D than NIH, NSF, DOE clean energy, NASA, and NOAA <strong>combined</strong> ($97B vs $97B). America invests equally in killing and healing — but the killing budget is growing while health research budgets stagnate.</p>
      </div>

      {/* Additional examples */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">More Perspectives</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {extraExamples.map((e) => (
          <div key={e.item} className="bg-white rounded-xl p-6 shadow-sm border">
            <p className="text-3xl font-bold text-red-600 font-[family-name:var(--font-heading)] mb-2">
              {e.units >= 1e6 ? `${Math.round(e.units/1e6)}M` : typeof e.units === 'number' && e.units < 100 ? e.units.toFixed(1) : fmt(e.units)}
            </p>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">{e.item}</h3>
            <p className="text-muted text-sm">{e.description}</p>
          </div>
        ))}
      </div>

      {/* Global Comparison */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What Other Countries Do Instead</h2>
        <p className="text-sm text-muted mb-4">Countries that spend less on military invest more in their people:</p>
        <div className="space-y-3 text-sm">
          {[
            { country: '🇩🇰 Denmark', militaryPct: '1.4% GDP', gets: 'Free healthcare, free college, paid parental leave, one of the happiest countries on earth' },
            { country: '🇯🇵 Japan', militaryPct: '1.6% GDP', gets: 'World\'s best rail system, universal healthcare, highest life expectancy, 99% literacy' },
            { country: '🇫🇮 Finland', militaryPct: '2.4% GDP', gets: 'Best education system in the world, free college, universal healthcare, near-zero homelessness' },
            { country: '🇨🇦 Canada', militaryPct: '1.3% GDP', gets: 'Universal healthcare, generous parental leave, one of the highest quality-of-life rankings' },
            { country: '🇺🇸 United States', militaryPct: '3.4% GDP (official)', gets: '$1.7T student debt, 37,000 homeless veterans, crumbling infrastructure (grade: C-), no universal healthcare, 38M in poverty' },
          ].map(c => (
            <div key={c.country} className={`rounded-lg p-4 border ${c.country.includes('United States') ? 'bg-red-50 border-red-200' : 'bg-white'}`}>
              <div className="flex justify-between items-start">
                <h4 className="font-bold">{c.country}</h4>
                <span className="text-muted text-xs">{c.militaryPct} on military</span>
              </div>
              <p className="text-muted text-xs mt-1">{c.gets}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Eisenhower Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mt-12 text-center">
        <blockquote className="font-[family-name:var(--font-heading)] text-2xl italic">
          &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense, a theft from those who hunger and are not fed, those who are cold and are not clothed.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-4">— Dwight D. Eisenhower, &ldquo;The Chance for Peace&rdquo; speech, 1953</p>
        <p className="text-stone-500 text-sm mt-3">Eisenhower continued: &ldquo;This world in arms is not spending money alone. It is spending the sweat of its laborers, the genius of its scientists, the hopes of its children.&rdquo;</p>
      </div>

      {/* Physical Scale */}
      <div className="bg-blue-50 rounded-xl p-8 my-8 border border-blue-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-blue-800">📏 Visualizing $8 Trillion</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            { measure: 'In $100 bills, stacked', result: '5,400 miles high — past the International Space Station (254 mi) and 1/50th of the way to the Moon' },
            { measure: 'In $1 bills, laid end-to-end', result: '776 million miles — past Mars and Jupiter, reaching Saturn' },
            { measure: 'Spending $1 per second', result: 'Would take 253,678 years to spend $8 trillion' },
            { measure: 'In time', result: 'If you earned $1 million per day since the birth of Christ, you\'d have $740 billion — still less than one year\'s defense budget' },
            { measure: 'Per person', result: '$24,000 per American man, woman, and child. A family of four paid $96,000 for the War on Terror.' },
            { measure: 'In weight', result: '$8 trillion in $100 bills would weigh 80,000 metric tons — the weight of an aircraft carrier' },
          ].map(v => (
            <div key={v.measure} className="bg-white rounded-lg p-4 border">
              <h4 className="font-bold text-blue-800">{v.measure}</h4>
              <p className="text-muted text-xs">{v.result}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The US spends more on its military than the next <strong>10 countries combined</strong>.</li>
          <li>• The War on Terror cost roughly <strong>$60,000 per US household</strong>.</li>
          <li>• $8 trillion in $100 bills, stacked, would reach <strong>5,400 miles high</strong> — past the International Space Station.</li>
          <li>• The cost of one F-35 fighter jet ($80M) could fund <strong>1,270 teacher salaries</strong> for a year.</li>
          <li>• At $886B/yr, the US spends <strong>$28,095 per second</strong> on defense.</li>
          <li>• The entire US infrastructure gap (bridges, roads, water, schools) is <strong>$2.6 trillion</strong> — less than the cost of the Afghanistan War alone.</li>
          <li>• $8 trillion could have provided <strong>clean drinking water for the entire planet for 400 years</strong>.</li>
          <li>• If you earned $1 million per day since the birth of Christ, you&apos;d still have less than one year&apos;s defense budget.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/tools/tax-receipt" className="text-red-800 hover:underline">→ Your Personal War Tax Receipt</Link></li>
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Military Spending — $886B/yr</Link></li>
          <li><Link href="/analysis/jobs-vs-war" className="text-red-800 hover:underline">→ Jobs vs. War — military spending creates the fewest jobs</Link></li>
          <li><Link href="/contractors" className="text-red-800 hover:underline">→ Defense Contractors — who profits</Link></li>
        </ul>
      </div>
    </div>
  )
}
