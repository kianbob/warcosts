import { SpendingAreaChart, CostByConflictChart, DeathsByConflictChart, BasesChart } from '@/components/charts/SpendingCharts'
import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import LastUpdated from '@/components/LastUpdated'

export const metadata: Metadata = {
  title: 'Dashboard — The State of the American Empire',
  description: 'Visual overview of US military data: $11.6T total cost, 1M+ Americans killed, 5.2M civilians, 750 overseas bases, $886B annual budget, 17 veteran suicides per day. The full picture at a glance.',
  openGraph: {
    title: 'Dashboard — The State of the American Empire',
    description: 'Visual overview: $11.5T total cost, 1M+ Americans killed, 5.2M civilians, 750 overseas bases, $886B annual budget, 17 veteran suicides per day.',
    url: 'https://www.warcosts.org',
    siteName: 'WarCosts',
    type: 'website',
  },
  alternates: { canonical: 'https://www.warcosts.org/dashboard' },
}

export default function DashboardPage() {
  const stats = loadData('stats.json')
  const spending = loadData('military-spending.json')
  const conflicts = loadData('conflicts.json')
  const presence = loadData('overseas-presence.json')

  const costData = conflicts.sort((a: any, b: any) => b.costInflationAdjusted - a.costInflationAdjusted).slice(0, 12).map((c: any) => ({ name: c.shortName || c.name, cost: c.costInflationAdjusted }))
  const deathData = conflicts.filter((c: any) => (c.usCasualties?.deaths || 0) > 100).sort((a: any, b: any) => b.usCasualties.deaths - a.usCasualties.deaths).map((c: any) => ({ name: c.shortName || c.name, usDeaths: c.usCasualties.deaths, civilianDeaths: c.civilianDeaths || 0 }))
  const basesData = presence.topDeployments.map((d: any) => ({ country: d.country, bases: d.bases }))
  const ongoing = conflicts.filter((c: any) => !c.endYear)

  const recentConflicts = conflicts
    .filter((c: any) => c.startYear >= 2001)
    .sort((a: any, b: any) => b.startYear - a.startYear)
    .slice(0, 6)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Dashboard' }]} />
      <LastUpdated />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-2">The State of the Empire</h1>
      <p className="text-muted mb-4 max-w-3xl">A comprehensive overview of America&apos;s military footprint — spending, casualties, overseas presence, and the true cost of 249 years of war.</p>
      <ShareButtons title="Dashboard — The State of the American Empire" />

      {/* AI Overview */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-blue-900 mb-3">🧠 Key Insights</h3>
        <ul className="space-y-2 text-sm text-blue-900">
          <li>• <strong>The US has been at war for ~229 of its 249 years</strong> — spending {fmtMoney(stats.totalCostInflationAdjusted)} total, with {stats.undeclaredWars} conflicts waged without congressional authorization.</li>
          <li>• <strong>The defense budget has grown 51% since 2015 ($586B → $886B)</strong> — Congress consistently appropriates more than the President requests, and the Pentagon has failed 7 consecutive audits.</li>
          <li>• <strong>17 veterans commit suicide daily while 38 million people have been displaced by the War on Terror</strong> — the human cost is staggering and ongoing, even as new conflicts emerge.</li>
          <li>• <strong>The true annual national security cost exceeds $1.4 trillion</strong> — when you include VA, intelligence, homeland security, nuclear weapons, and war debt interest. That&apos;s ${fmt(stats.costPerSecond)}/second.</li>
        </ul>
      </div>

      {/* Primary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[
          { val: fmtMoney(stats.totalCostInflationAdjusted), label: 'Total Cost (All Wars)' },
          { val: fmt(stats.totalUSDeaths), label: 'US Deaths' },
          { val: `${(stats.totalCivilianDeaths/1e6).toFixed(1)}M+`, label: 'Civilian Deaths' },
          { val: fmt(stats.overseasBases), label: 'Overseas Bases' },
          { val: fmtMoney(stats.currentAnnualBudget) + '/yr', label: 'DoD Budget (FY2024)' },
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

      {/* Key Trend Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Budget Trend', value: '↑ 51%', detail: 'From $586B (2015) to $886B (2024)', color: 'text-red-600' },
          { label: 'Active Conflicts', value: `${stats.ongoing}`, detail: 'Syria, Somalia, Yemen, Iraq, War on Terror', color: 'text-red-600' },
          { label: 'Vet Suicide Trend', value: '↓ slightly', detail: 'From 22/day (2012) to 17/day (2021)', color: 'text-yellow-600' },
          { label: 'Audit Status', value: 'FAILED ×7', detail: 'Never passed since first attempt in 2018', color: 'text-red-600' },
        ].map(t => (
          <div key={t.label} className="bg-white rounded-lg p-4 border">
            <p className="text-muted text-xs uppercase font-semibold">{t.label}</p>
            <p className={`text-2xl font-bold font-[family-name:var(--font-heading)] ${t.color}`}>{t.value}</p>
            <p className="text-muted text-xs mt-1">{t.detail}</p>
          </div>
        ))}
      </div>

      {/* Narrative */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">249 Years at War</h2>
        <p className="text-stone-300 mb-4">The United States has been at war for roughly 229 of its 249 years. Since WWII, {stats.undeclaredWars} of its conflicts have been fought without a formal declaration of war. The War on Terror alone — triggered by an attack carried out by 19 men — expanded to {stats.counterterrorCountries} countries, cost {fmtMoney(stats.warOnTerrorCost)}, killed an estimated {fmt(stats.warOnTerrorDeaths)}+ people, and displaced 38 million.</p>
        <p className="text-stone-300 mb-4">Today, {fmt(stats.overseasTroops)} American troops are stationed in {stats.overseasCountries} countries. The military burns {fmtMoney(stats.currentAnnualBudget)} per year — {fmtMoney(stats.costPerDay)} per day, ${fmt(stats.costPerSecond)} per second. The Pentagon has never passed an audit.</p>
        <p className="text-stone-400 text-sm">The defense budget has grown every year regardless of party. Congress consistently appropriates more than the President requests. The F-35 program alone will cost {fmtMoney(stats.f35LifetimeCost)} over its lifetime. {fmt(stats.revolvingDoorOfficials)}+ former Pentagon officials work for defense contractors.</p>
      </div>

      {/* Recent Developments */}
      <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-red-800">Recent Developments</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Iran 2026', desc: 'US launches military strikes on Iranian nuclear and military facilities without congressional vote', link: '/analysis/iran-2026' },
            { title: 'FY2025 Budget', desc: `$895B requested — expected to exceed $900B after Congress adds to it`, link: '/defense-budget' },
            { title: 'Red Sea Operations', desc: 'Ongoing strikes against Houthi targets in Yemen — $1B+ in missiles expended', link: '/conflicts/red-sea-crisis' },
            { title: 'Pentagon Audit #7', desc: 'Failed again in 2024. $3.8 trillion in assets unaccounted for.', link: '/defense-budget' },
          ].map(d => (
            <Link key={d.title} href={d.link} className="bg-white rounded-lg p-4 border hover:shadow-md transition">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-red-800">{d.title}</h3>
              <p className="text-stone-500 text-sm">{d.desc}</p>
            </Link>
          ))}
        </div>
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

      {/* Ongoing Operations */}
      {ongoing.length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700 font-semibold animate-pulse">● LIVE</span>
            Ongoing Operations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ongoing.map((c: any) => (
              <Link key={c.id} href={`/conflicts/${c.id}`} className="bg-white rounded-lg border border-red-200 p-4 hover:shadow-md transition">
                <h3 className="font-[family-name:var(--font-heading)] font-bold">{c.name}</h3>
                <p className="text-muted text-sm">{c.startYear}–Present · {c.region}</p>
                <div className="flex gap-4 mt-2">
                  <span className="text-red-800 font-bold text-sm">{fmtMoney(c.costInflationAdjusted)}</span>
                  {c.usCasualties?.deaths > 0 && <span className="text-stone-500 text-sm">{fmt(c.usCasualties.deaths)} US dead</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* The Human Cost Box */}
      <div className="bg-stone-50 rounded-xl p-8 border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Human Cost</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{stats.veteranSuicidePerDay}/day</p>
            <p className="text-stone-600 font-medium">Veteran Suicides</p>
            <p className="text-stone-500 text-xs">130,000+ since 2001</p>
            <Link href="/veteran-suicide" className="text-red-800 text-sm hover:underline">Learn more →</Link>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{stats.veteranPTSDrateIraqAfghan}%</p>
            <p className="text-stone-600 font-medium">Post-9/11 PTSD Rate</p>
            <p className="text-stone-500 text-xs">430,000+ TBI diagnoses</p>
            <Link href="/veteran-suicide" className="text-red-800 text-sm hover:underline">Learn more →</Link>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">38M</p>
            <p className="text-stone-600 font-medium">People Displaced</p>
            <p className="text-stone-500 text-xs">War on Terror, per Brown University</p>
            <Link href="/analysis/human-cost" className="text-red-800 text-sm hover:underline">Learn more →</Link>
          </div>
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
            { href: '/us-military-spending', icon: '💰', label: 'Spending' },
            { href: '/us-wars-list', icon: '⚔️', label: 'Wars List' },
            { href: '/cost-of-war', icon: '📊', label: 'Cost of War' },
            { href: '/veteran-suicide', icon: '🎗️', label: 'Vet Suicide' },
            { href: '/defense-budget', icon: '🏛️', label: 'Budget' },
            { href: '/analysis', icon: '📝', label: 'Analysis' },
            { href: '/tools', icon: '🧮', label: 'Tools' },
            { href: '/presidents', icon: '👤', label: 'Presidents' },
            { href: '/downloads', icon: '💾', label: 'Downloads' },
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
            <li>• <strong>{stats.totalInterventions} foreign interventions</strong> since 1798</li>
            <li>• <strong>$1.4T+ true annual</strong> national security cost</li>
          </ul>
          <ul className="space-y-2">
            <li>• <strong>17 veteran suicides</strong> per day</li>
            <li>• <strong>{stats.overseasBases} bases</strong> in {stats.overseasCountries} countries</li>
            <li>• Pentagon CO₂ footprint exceeds <strong>{stats.pentagonCO2Rank} countries</strong></li>
            <li>• F-35 lifetime cost: <strong>{fmtMoney(stats.f35LifetimeCost)}</strong></li>
            <li>• <strong>0 audits passed</strong> (7 consecutive failures)</li>
          </ul>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
