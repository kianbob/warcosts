import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import dynamic from 'next/dynamic'

const SpendingAreaChart = dynamic(
  () => import('@/components/charts/SpendingCharts').then(mod => mod.SpendingAreaChart),
  { ssr: false, loading: () => <div style={{ height: 400 }} /> }
)
const CostByConflictChart = dynamic(
  () => import('@/components/charts/SpendingCharts').then(mod => mod.CostByConflictChart),
  { ssr: false, loading: () => <div style={{ height: 500 }} /> }
)
const DeathsByConflictChart = dynamic(
  () => import('@/components/charts/SpendingCharts').then(mod => mod.DeathsByConflictChart),
  { ssr: false, loading: () => <div style={{ height: 500 }} /> }
)
const BasesChart = dynamic(
  () => import('@/components/charts/SpendingCharts').then(mod => mod.BasesChart),
  { ssr: false, loading: () => <div style={{ height: 400 }} /> }
)

export const metadata: Metadata = {
  title: 'Dashboard — The State of the American Empire | WarCosts',
  description: 'Visual overview of US military data: $11.6T total cost, 1M+ Americans killed, 5.2M civilians, 750 overseas bases. The full picture.',
}

export default function DashboardPage() {
  const stats = loadData('stats.json')
  const spending = loadData('military-spending.json')
  const conflicts = loadData('conflicts.json')
  const presence = loadData('overseas-presence.json')

  const costData = conflicts.sort((a: any, b: any) => b.costInflationAdjusted - a.costInflationAdjusted).slice(0, 12).map((c: any) => ({ name: c.shortName || c.name, cost: c.costInflationAdjusted }))
  const deathData = conflicts.filter((c: any) => (c.usCasualties?.deaths || 0) > 100).sort((a: any, b: any) => b.usCasualties.deaths - a.usCasualties.deaths).map((c: any) => ({ name: c.shortName || c.name, usDeaths: c.usCasualties.deaths, civilianDeaths: c.civilianDeaths || 0 }))
  const basesData = presence.topDeployments.map((d: any) => ({ country: d.country, bases: d.bases }))
  const ongoing = conflicts.filter((c: any) => c.outcome === 'Ongoing' || (c.endYear && c.endYear >= 2024))

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Dashboard' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-2">The State of the Empire</h1>
      <p className="text-muted mb-4 max-w-3xl">A high-level overview of America&apos;s military footprint — spending, casualties, overseas presence, and the true cost of 248 years of war.</p>
      <ShareButtons title="Dashboard — The State of the American Empire" />

      {/* Primary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[
          { val: fmtMoney(stats.totalCostInflationAdjusted), label: 'Total Cost (All Wars)' },
          { val: fmt(stats.totalUSDeaths), label: 'US Deaths' },
          { val: `${(stats.totalCivilianDeaths/1e6).toFixed(1)}M+`, label: 'Civilian Deaths' },
          { val: fmt(stats.overseasBases), label: 'Overseas Bases' },
          { val: fmtMoney(stats.currentAnnualBudget) + '/yr', label: 'Annual Budget' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-4 shadow-sm border text-center">
            <p className="text-xl md:text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8">
        {[
          { val: String(stats.totalConflicts), label: 'Conflicts' },
          { val: String(stats.undeclaredWars), label: 'Undeclared Wars' },
          { val: String(stats.ongoing), label: 'Ongoing' },
          { val: '17/day', label: 'Veteran Suicides' },
          { val: fmtMoney(stats.warOnTerrorCost), label: 'War on Terror Cost' },
          { val: '38M', label: 'People Displaced' },
        ].map(s => (
          <div key={s.label} className="bg-stone-50 rounded-lg p-3 border text-center">
            <p className="text-lg font-bold text-stone-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Narrative */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">248 Years at War</h2>
        <p className="text-stone-300 mb-4">The United States has been at war for roughly 225 of its 248 years. Since WWII, {stats.undeclaredWars} of its conflicts have been fought without a formal declaration of war. The War on Terror alone — triggered by an attack carried out by 19 men — expanded to {stats.counterterrorCountries} countries, cost {fmtMoney(stats.warOnTerrorCost)}, killed an estimated {fmt(stats.warOnTerrorDeaths)}+ people, and displaced 38 million.</p>
        <p className="text-stone-300">Today, {fmt(stats.overseasTroops)} American troops are stationed in {stats.overseasCountries} countries. The military burns {fmtMoney(stats.currentAnnualBudget)} per year — {fmtMoney(stats.costPerDay)} per day, ${fmt(stats.costPerSecond)} per second. The Pentagon has never passed an audit.</p>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Military Spending (Billions $)</h2>
          <SpendingAreaChart data={spending} />
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Overseas Bases by Country</h2>
          <BasesChart data={basesData} />
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Cost by Conflict</h2>
          <CostByConflictChart data={costData} />
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Deaths by Conflict</h2>
          <DeathsByConflictChart data={deathData} />
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-stone-50 rounded-xl p-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Explore the Data</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { href: '/conflicts', label: 'All Conflicts', desc: `${stats.totalConflicts} wars & interventions` },
            { href: '/timeline', label: 'Timeline', desc: '1775 to present' },
            { href: '/spending', label: 'Military Spending', desc: `${fmtMoney(stats.currentAnnualBudget)}/yr budget` },
            { href: '/casualties', label: 'Casualties', desc: `${fmt(stats.totalUSDeaths)} Americans killed` },
            { href: '/bases', label: 'Overseas Bases', desc: `${fmt(stats.overseasBases)} bases in ${stats.overseasCountries} countries` },
            { href: '/contractors', label: 'Defense Contractors', desc: 'Who profits from war' },
            { href: '/arms-sales', label: 'Arms Sales', desc: '$238B/yr in weapons' },
            { href: '/foreign-aid', label: 'Foreign Aid', desc: `${fmtMoney(stats.foreignAidAnnual)}/yr` },
            { href: '/opportunity-cost', label: 'Opportunity Cost', desc: 'What else $8T could buy' },
            { href: '/covert', label: 'Covert Operations', desc: 'CIA coups & secret wars' },
            { href: '/analysis', label: 'Analysis', desc: 'Deep dives & essays' },
            { href: '/tools/tax-receipt', label: 'Your Tax Receipt', desc: 'Your personal war cost' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="bg-white rounded-lg p-4 border hover:shadow-md transition block">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-primary">{link.label}</h3>
              <p className="text-muted text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mt-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">⚡ Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            { href: '/war-clock', icon: '⏱️', label: 'War Clock' },
            { href: '/modern-wars', icon: '🔥', label: 'Modern Wars' },
            { href: '/analysis', icon: '📊', label: 'Analysis' },
            { href: '/tools', icon: '🧮', label: 'Tools' },
            { href: '/presidents', icon: '🏛️', label: 'Presidents' },
            { href: '/countries', icon: '🌍', label: 'Countries' },
            { href: '/eras', icon: '📅', label: 'By Era' },
            { href: '/decades', icon: '🗓️', label: 'By Decade' },
            { href: '/regime-changes', icon: '🔄', label: 'Regime Changes' },
            { href: '/downloads', icon: '💾', label: 'Downloads' },
            { href: '/search', icon: '🔍', label: 'Search' },
            { href: '/faq', icon: '❓', label: 'FAQ' },
          ].map(n => (
            <Link key={n.href} href={n.href} className="bg-white/10 hover:bg-white/20 rounded-lg p-3 text-center transition block">
              <span className="text-2xl block mb-1">{n.icon}</span>
              <span className="text-sm font-medium">{n.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 By the Numbers</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-stone-700">
          <ul className="space-y-2">
            <li>• <strong>${fmt(stats.costPerSecond)}/second</strong> on defense</li>
            <li>• <strong>{stats.totalConflicts} conflicts</strong> since 1775</li>
            <li>• <strong>{stats.undeclaredWars} undeclared wars</strong> (no congressional authorization)</li>
            <li>• <strong>{stats.totalInterventions} foreign interventions</strong> since WWII</li>
          </ul>
          <ul className="space-y-2">
            <li>• <strong>17 veteran suicides</strong> per day</li>
            <li>• <strong>{stats.overseasBases} bases</strong> in {stats.overseasCountries} countries</li>
            <li>• Pentagon CO₂ footprint exceeds <strong>{stats.pentagonCO2Rank} countries</strong></li>
            <li>• F-35 lifetime cost: <strong>{fmtMoney(stats.f35LifetimeCost)}</strong></li>
          </ul>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
