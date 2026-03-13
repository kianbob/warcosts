import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import { AmericasWarsCharts } from './AmericasWarsCharts'

export const metadata: Metadata = {
  title: "America's Wars By The Numbers: A Complete Statistical Breakdown",
  description: 'Every US war ranked by cost, deaths, and duration. Total statistics on American military conflicts from 1775 to 2026. The definitive data reference.',
  openGraph: {
    title: "America's Wars By The Numbers",
    description: 'Every US war ranked by cost, deaths, duration. The definitive statistical reference.',
    url: 'https://www.warcosts.org/analysis/americas-wars-by-the-numbers',
  },
}

interface Conflict {
  id: string
  name: string
  shortName?: string
  era: string
  startYear: number
  endYear: number | null
  costInflationAdjusted: number
  usCasualties: { deaths: number; wounded: number; battleDeaths: number }
  civilianDeaths: number | null
  troopsDeployed: number | null
  outcome: string
  computed: {
    durationYears: number
    costPerUSdeath: number
  }
}

// Historical war cost analysis data
const warsByEra = [
  {
    era: 'Founding Era',
    period: '1775-1815', 
    wars: ['Revolutionary War', 'Quasi-War with France', 'Barbary Wars', 'War of 1812'],
    totalCost: 45_800_000_000, // 2023 adjusted
    casualties: 35_000,
    characteristics: 'Fighting for independence and sovereignty',
    avgCostPerYear: 1_145_000_000,
    libertarianView: 'Defensive wars for independence and protecting trade - legitimate government function'
  },
  {
    era: 'Continental Expansion',
    period: '1846-1898',
    wars: ['Mexican-American War', 'Civil War', 'Indian Wars', 'Spanish-American War'],
    totalCost: 486_200_000_000,
    casualties: 681_000,
    characteristics: 'Territorial expansion and internal conflict',
    avgCostPerYear: 9_350_000_000,
    libertarianView: 'Civil War preserved Union but expanded federal power; expansion wars questionable'
  },
  {
    era: 'World Wars',
    period: '1917-1945',
    wars: ['World War I', 'World War II'],
    totalCost: 4_780_000_000_000,
    casualties: 521_000,
    characteristics: 'Global conflicts, total war mobilization',
    avgCostPerYear: 165_500_000_000,
    libertarianView: 'WWII defensive after Pearl Harbor; WWI entry more questionable'
  },
  {
    era: 'Cold War',
    period: '1950-1991',
    wars: ['Korea', 'Vietnam', 'Various interventions'],
    totalCost: 1_890_000_000_000,
    casualties: 94_000,
    characteristics: 'Proxy wars and containment strategy',
    avgCostPerYear: 46_100_000_000,
    libertarianView: 'Containment morphed into imperial overstretch and unnecessary interventions'
  },
  {
    era: 'War on Terror',
    period: '2001-present',
    wars: ['Afghanistan', 'Iraq', 'Syria', 'Libya', 'Various operations'],
    totalCost: 8_400_000_000_000,
    casualties: 7_100,
    characteristics: 'Asymmetric warfare, nation building, endless conflicts',
    avgCostPerYear: 336_000_000_000,
    libertarianView: 'Massive overreaction to 9/11, constitutional violations, imperial overstretch'
  }
]

const militarySpendingMilestones = [
  { year: 1775, event: 'Continental Army formed', spending: 12_000_000, gdpPercent: null, milestone: 'First national military budget' },
  { year: 1861, event: 'Civil War begins', spending: 474_000_000, gdpPercent: 11.2, milestone: 'First major military mobilization' },
  { year: 1917, event: 'WWI entry', spending: 12_700_000_000, gdpPercent: 15.8, milestone: 'First global war involvement' },
  { year: 1941, event: 'WWII mobilization', spending: 66_000_000_000, gdpPercent: 37.5, milestone: 'Peak wartime mobilization' },
  { year: 1950, event: 'Korean War', spending: 13_700_000_000, gdpPercent: 5.0, milestone: 'First Cold War proxy conflict' },
  { year: 1968, event: 'Vietnam War peak', spending: 81_900_000_000, gdpPercent: 8.7, milestone: 'Peak Cold War military spending' },
  { year: 1985, event: 'Reagan buildup peak', spending: 279_000_000_000, gdpPercent: 6.1, milestone: 'Peak peacetime military budget' },
  { year: 2001, event: '9/11 response', spending: 304_000_000_000, gdpPercent: 3.0, milestone: 'War on Terror begins' },
  { year: 2010, event: 'Iraq/Afghanistan peak', spending: 690_000_000_000, gdpPercent: 4.7, milestone: 'Peak post-9/11 spending' },
  { year: 2023, event: 'Current baseline', spending: 816_000_000_000, gdpPercent: 3.5, milestone: 'Sustained high peacetime spending' },
  { year: 2026, event: 'Iran War surge', spending: 1_200_000_000_000, gdpPercent: 4.8, milestone: 'New wartime peak' }
]

const costAnalysisByConflict = [
  {
    conflict: 'Revolutionary War',
    duration: '8 years',
    cost2023: '$37B',
    costPerYear: '$4.6B',
    costPerCasualty: '$1.5M',
    outcome: 'Victory - Independence achieved',
    roi: 'Infinite - created the United States',
    libertarianTakeaway: 'Worth every penny - legitimate defense of liberty'
  },
  {
    conflict: 'Civil War',
    duration: '4 years',
    cost2023: '$420B',
    costPerYear: '$105B',
    costPerCasualty: '$680K',
    outcome: 'Victory - Union preserved',
    roi: 'Preserved nation but expanded federal power',
    libertarianTakeaway: 'Necessary but created precedent for federal overreach'
  },
  {
    conflict: 'World War II',
    duration: '6 years',
    cost2023: '$4.1T',
    costPerYear: '$683B',
    costPerCasualty: '$10.2M',
    outcome: 'Victory - Fascism defeated',
    roi: 'Secured freedom for millions',
    libertarianTakeaway: 'Justified response to direct attack and genocide'
  },
  {
    conflict: 'Vietnam War',
    duration: '10 years',
    cost2023: '$738B',
    costPerYear: '$74B',
    costPerCasualty: '$12.7M',
    outcome: 'Defeat - South Vietnam fell',
    roi: 'Negative - wasted resources and lives',
    libertarianTakeaway: 'Perfect example of government failure and mission creep'
  },
  {
    conflict: 'Iraq War',
    duration: '8 years',
    cost2023: '$1.9T',
    costPerYear: '$238B',
    costPerCasualty: '$435M',
    outcome: 'Pyrrhic - Saddam removed, chaos ensued',
    roi: 'Negative - regional destabilization',
    libertarianTakeaway: 'Preventive war based on lies, constitutional violation'
  },
  {
    conflict: 'Afghanistan War',
    duration: '20 years',
    cost2023: '$2.3T',
    costPerYear: '$115B',
    costPerCasualty: '$935M',
    outcome: 'Defeat - Taliban back in power',
    roi: 'Negative - same rulers as before',
    libertarianTakeaway: 'Mission creep turned justified retaliation into nation-building disaster'
  }
]

const casualtyTrendsAnalysis = [
  {
    metric: 'Battle Death Rate',
    civilWar: '2.1% of population',
    wwi: '0.11% of population', 
    wwii: '0.28% of population',
    korea: '0.02% of population',
    vietnam: '0.03% of population',
    postNineEleven: '0.002% of population',
    trend: 'Declining due to smaller armies, better medicine'
  },
  {
    metric: 'Wounded/Death Ratio',
    civilWar: '1.5:1',
    wwi: '2.3:1',
    wwii: '2.8:1',
    korea: '4.1:1',
    vietnam: '3.6:1',
    postNineEleven: '8.3:1',
    trend: 'Rising due to body armor, faster medical evacuation'
  },
  {
    metric: 'Civilian/Military Death Ratio',
    civilWar: '0.1:1',
    wwi: '1:1',
    wwii: '2:1',
    korea: '30:1 (estimated)',
    vietnam: '28:1 (estimated)',
    postNineEleven: '150:1 (estimated)',
    trend: 'Skyrocketing as wars move to populated areas'
  },
  {
    metric: 'Cost per Death (2023$)',
    civilWar: '$680,000',
    wwi: '$2.1M',
    wwii: '$10.2M',
    korea: '$18.3M',
    vietnam: '$12.7M',
    postNineEleven: '$560M (average)',
    trend: 'Exponential increase due to technology, force protection'
  }
]

const constituionalViolations = [
  {
    war: 'Mexican-American War',
    violation: 'Undeclared war initiated by president',
    precedent: 'Presidential war powers without congressional declaration',
    consequence: 'Set pattern for executive-initiated conflicts',
    dissenter: 'Abraham Lincoln (as congressman) opposed it'
  },
  {
    war: 'Civil War',
    violation: 'Suspension of habeas corpus, military tribunals for civilians',
    precedent: 'Emergency powers during wartime',
    consequence: 'Expanded executive power during "emergencies"',
    dissenter: 'Ex parte Milligan (1866) partially rejected military tribunals'
  },
  {
    war: 'World War I',
    violation: 'Espionage Act, sedition laws, draft',
    precedent: 'Suppression of dissent during war',
    consequence: 'Normalized censorship and conscription',
    dissenter: 'Eugene Debs imprisoned for anti-war speech'
  },
  {
    war: 'Korean War',
    violation: 'War without congressional declaration',
    precedent: 'UN authorization substitute for Congress',
    consequence: 'Sidestepped constitutional war powers',
    dissenter: 'Senator Robert Taft called it illegal'
  },
  {
    war: 'Vietnam War',
    violation: 'Gulf of Tonkin Resolution based on false information',
    precedent: 'Blank check military authorization',
    consequence: 'Decade of undeclared war',
    dissenter: 'Senators Morse and Gruening voted against resolution'
  },
  {
    war: 'War on Terror',
    violation: 'AUMF 2001 interpreted as global war authority',
    precedent: 'Perpetual war authorization',
    consequence: '25+ years of conflicts worldwide',
    dissenter: 'Rep. Barbara Lee - only vote against AUMF'
  },
  {
    war: 'Libya 2011',
    violation: 'War Powers Resolution violated (60-day limit exceeded)',
    precedent: 'NATO authority supersedes Congress',
    consequence: 'Further erosion of congressional war powers',
    dissenter: 'Bipartisan congressional opposition ignored'
  },
  {
    war: 'Iran 2026',
    violation: 'Article II self-defense claim for offensive operations',
    precedent: 'Preemptive war under executive authority',
    consequence: 'Complete bypass of congressional authority',
    dissenter: 'Ongoing constitutional challenges in courts'
  }
]

const economicImpactAnalysis = [
  {
    category: 'Direct Military Spending',
    amount: '$11.6T (all wars combined)',
    percentage: '67% of total war costs',
    description: 'Personnel, equipment, operations, munitions'
  },
  {
    category: 'Veterans Care',
    amount: '$3.2T (estimated future costs)',
    percentage: '19% of total war costs',
    description: 'Healthcare, disability, education, housing benefits'
  },
  {
    category: 'Interest on War Debt',
    amount: '$1.8T (accumulated)',
    percentage: '11% of total war costs',
    description: 'Borrowing costs for deficit-financed wars'
  },
  {
    category: 'Homeland Security',
    amount: '$520B (since 2002)',
    percentage: '3% of total war costs',
    description: 'TSA, border security, intelligence expansion'
  },
  {
    category: 'Opportunity Costs',
    amount: 'Incalculable',
    percentage: 'Not included in totals',
    description: 'Infrastructure, education, research not funded'
  }
]

const internationalComparisons = [
  {
    country: 'United States',
    militarySpending2023: '$816B',
    gdpPercent: 3.5,
    conflicts2001_2023: 15,
    approach: 'Global hegemon, forward deployment',
    result: 'Declining influence, rising costs'
  },
  {
    country: 'China',
    militarySpending2023: '$292B',
    gdpPercent: 1.7,
    conflicts2001_2023: 0,
    approach: 'Economic expansion, defensive posture',
    result: 'Rising influence, trade partnerships'
  },
  {
    country: 'Russia',
    militarySpending2023: '$109B',
    gdpPercent: 4.1,
    conflicts2001_2023: 6,
    approach: 'Regional power, sphere of influence',
    result: 'Maintained regional dominance'
  },
  {
    country: 'Germany',
    militarySpending2023: '$56B',
    gdpPercent: 1.4,
    conflicts2001_2023: 2,
    approach: 'Economic power, diplomatic solutions',
    result: 'EU leadership, economic success'
  },
  {
    country: 'Japan',
    militarySpending2023: '$46B',
    gdpPercent: 1.1,
    conflicts2001_2023: 0,
    approach: 'Pacifist constitution, economic focus',
    result: 'Technological leadership, stable society'
  }
]

export default function AmericasWarsByTheNumbersPage() {
  const conflicts: Conflict[] = loadData('conflicts.json')

  const totalCost = conflicts.reduce((s, c) => s + (c.costInflationAdjusted || 0), 0)
  const totalUSDeaths = conflicts.reduce((s, c) => s + (c.usCasualties?.deaths || 0), 0)
  const totalCivilianDeaths = conflicts.reduce((s, c) => s + (c.civilianDeaths || 0), 0)
  const totalWounded = conflicts.reduce((s, c) => s + (c.usCasualties?.wounded || 0), 0)
  const totalConflicts = conflicts.length

  const bySpending = [...conflicts].filter(c => c.costInflationAdjusted > 0).sort((a, b) => b.costInflationAdjusted - a.costInflationAdjusted)
  const byDeaths = [...conflicts].filter(c => c.usCasualties?.deaths > 0).sort((a, b) => b.usCasualties.deaths - a.usCasualties.deaths)
  const byDuration = [...conflicts].filter(c => c.computed?.durationYears > 0).sort((a, b) => b.computed.durationYears - a.computed.durationYears)
  const byCostPerDeath = [...conflicts].filter(c => c.computed?.costPerUSdeath > 0).sort((a, b) => b.computed.costPerUSdeath - a.computed.costPerUSdeath)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Wars By The Numbers' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Definitive Reference</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          America&apos;s Wars By The Numbers
        </h1>
        <p className="text-xl text-stone-300 mb-4">A Complete Statistical Breakdown</p>
        <p className="text-stone-400 text-lg">
          Every US military conflict from the Revolutionary War to Iran 2026, ranked by cost,
          casualties, and duration. {totalConflicts} conflicts. {fmtMoney(totalCost)} spent.
          {' '}{fmt(totalUSDeaths)} American lives lost. The complete accounting of 250 years of American warfare.
        </p>
      </div>

      <ShareButtons title="America's Wars By The Numbers: A Complete Statistical Breakdown" />

      {/* Executive Summary Quote */}
      <blockquote className="border-l-4 border-red-700 pl-6 my-8 text-xl text-stone-400 italic">
        &ldquo;Americans have been at war for 225 of the 248 years since 1776. We&apos;ve had only 23 years of peace. 
        The United States has spent more on war than every other nation on Earth combined.&rdquo;
        <span className="block text-sm text-stone-500 mt-2 not-italic">— Veterans for Peace, 2023</span>
      </blockquote>

      {/* Enhanced Summary Stats */}
      <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">📊</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">Summary — 250 Years of American War</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">{totalConflicts}</span>
            <p className="text-stone-400 text-sm">Total Conflicts</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">{fmtMoney(totalCost)}</span>
            <p className="text-stone-400 text-sm">Total Cost (2023 $)</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">{fmt(totalUSDeaths)}</span>
            <p className="text-stone-400 text-sm">US Deaths</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">{fmt(totalCivilianDeaths)}</span>
            <p className="text-stone-400 text-sm">Civilian Deaths</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <span className="text-2xl font-bold text-yellow-400">225</span>
            <p className="text-stone-400 text-sm">Years at War</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-green-400">23</span>
            <p className="text-stone-400 text-sm">Years of Peace</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-red-400">{fmt(totalWounded)}</span>
            <p className="text-stone-400 text-sm">US Wounded</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-red-400">91%</span>
            <p className="text-stone-400 text-sm">Time Spent at War</p>
          </div>
        </div>
        <p className="text-stone-500 text-sm mt-4 italic">
          Since 1776, the United States has been at peace for only 23 years: 1796-1798, 1807-1809, 1826-1827, 
          1829-1835, 1897-1898, 1935-1940. That&apos;s a 91% wartime rate across nearly 250 years.
        </p>
      </div>

      {/* Historical Evolution */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Wars by Historical Era</h2>
        <p className="text-stone-400 mb-6">How American warfare has evolved from defensive conflicts to global interventions:</p>
        
        <div className="space-y-6">
          {warsByEra.map((era, i) => (
            <div key={i} className="bg-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-white font-bold text-lg">{era.era}</h3>
                  <p className="text-stone-400 text-sm">{era.period}</p>
                </div>
                <div className="text-right">
                  <p className="text-red-400 font-bold">{fmtMoney(era.totalCost)}</p>
                  <p className="text-stone-500 text-sm">{fmt(era.casualties)} casualties</p>
                </div>
              </div>
              <p className="text-stone-300 text-sm mb-2"><strong>Wars:</strong> {era.wars.join(', ')}</p>
              <p className="text-stone-300 text-sm mb-2"><strong>Character:</strong> {era.characteristics}</p>
              <p className="text-stone-300 text-sm mb-2"><strong>Avg cost/year:</strong> {fmtMoney(era.avgCostPerYear)}</p>
              <div className="bg-yellow-950/30 border border-yellow-900/50 rounded p-3 mt-3">
                <p className="text-yellow-400 text-sm"><strong>Libertarian Assessment:</strong> {era.libertarianView}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Military Spending Timeline */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Military Spending Milestones</h2>
        <p className="text-stone-400 mb-6">Key moments in the growth of American military expenditure:</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-600">
                <th className="text-left py-2 pr-4 text-stone-400">Year</th>
                <th className="text-left py-2 pr-4 text-stone-400">Event</th>
                <th className="text-right py-2 pr-4 text-stone-400">Spending (2023$)</th>
                <th className="text-right py-2 pr-4 text-stone-400">% of GDP</th>
                <th className="text-left py-2 text-stone-400">Milestone</th>
              </tr>
            </thead>
            <tbody>
              {militarySpendingMilestones.map((milestone, i) => (
                <tr key={i} className="border-b border-stone-700">
                  <td className="py-2 pr-4 text-red-400 font-bold">{milestone.year}</td>
                  <td className="py-2 pr-4 text-stone-300">{milestone.event}</td>
                  <td className="py-2 pr-4 text-right text-white font-mono">{fmtMoney(milestone.spending)}</td>
                  <td className="py-2 pr-4 text-right text-stone-300">{milestone.gdpPercent ? `${milestone.gdpPercent}%` : '—'}</td>
                  <td className="py-2 text-stone-400 text-xs">{milestone.milestone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-stone-500 text-sm mt-4">
          Note: 2026 Iran War figures are projected based on current operations tempo. 
          Historical figures adjusted to 2023 dollars using CPI-U.
        </p>
      </div>

      {/* Charts */}
      <AmericasWarsCharts conflicts={conflicts as any} />

      {/* Constitutional Violations Analysis */}
      <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">📜 Constitutional Violations in Wartime</h2>
        <p className="text-stone-300 mb-6">
          How wars have eroded constitutional limits on government power, from the Founders&apos; vision of limited government to today&apos;s imperial presidency:
        </p>
        
        <div className="space-y-4">
          {constituionalViolations.map((violation, i) => (
            <div key={i} className="bg-stone-800 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-red-400 font-bold">{violation.war}</h4>
                <span className="text-stone-500 text-xs">Constitutional Issue</span>
              </div>
              <p className="text-stone-300 text-sm mb-1"><strong>Violation:</strong> {violation.violation}</p>
              <p className="text-stone-400 text-sm mb-1"><strong>Precedent set:</strong> {violation.precedent}</p>
              <p className="text-stone-400 text-sm mb-1"><strong>Long-term consequence:</strong> {violation.consequence}</p>
              <p className="text-green-400 text-sm"><strong>Dissenter:</strong> {violation.dissenter}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-lg p-4 mt-6">
          <h4 className="text-yellow-400 font-bold mb-2">The Ratchet Effect</h4>
          <p className="text-stone-300 text-sm">
            Each war expands government power beyond previous limits. Powers granted &ldquo;temporarily&rdquo; for wartime 
            become permanent. The Constitution&apos;s war powers clause (giving Congress authority to declare war) has been 
            effectively nullified by decades of executive overreach. Since 1941, presidents have initiated major military 
            operations without congressional declarations of war over 200 times.
          </p>
        </div>
      </div>

      {/* Casualty Analysis */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">💀 The Evolution of War Casualties</h2>
        <p className="text-stone-400 mb-6">How the nature of war casualties has changed across American history:</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-600">
                <th className="text-left py-2 pr-4 text-stone-400">Metric</th>
                <th className="text-center py-2 pr-3 text-stone-400">Civil War</th>
                <th className="text-center py-2 pr-3 text-stone-400">WWI</th>
                <th className="text-center py-2 pr-3 text-stone-400">WWII</th>
                <th className="text-center py-2 pr-3 text-stone-400">Korea</th>
                <th className="text-center py-2 pr-3 text-stone-400">Vietnam</th>
                <th className="text-center py-2 pr-3 text-stone-400">Post-9/11</th>
                <th className="text-left py-2 text-stone-400">Trend</th>
              </tr>
            </thead>
            <tbody>
              {casualtyTrendsAnalysis.map((trend, i) => (
                <tr key={i} className="border-b border-stone-700">
                  <td className="py-2 pr-4 text-white font-medium">{trend.metric}</td>
                  <td className="py-2 pr-3 text-center text-stone-300 text-xs">{trend.civilWar}</td>
                  <td className="py-2 pr-3 text-center text-stone-300 text-xs">{trend.wwi}</td>
                  <td className="py-2 pr-3 text-center text-stone-300 text-xs">{trend.wwii}</td>
                  <td className="py-2 pr-3 text-center text-stone-300 text-xs">{trend.korea}</td>
                  <td className="py-2 pr-3 text-center text-stone-300 text-xs">{trend.vietnam}</td>
                  <td className="py-2 pr-3 text-center text-stone-300 text-xs">{trend.postNineEleven}</td>
                  <td className="py-2 text-stone-400 text-xs">{trend.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h4 className="text-red-400 font-bold mb-2">The Good News</h4>
            <ul className="text-stone-300 text-sm space-y-1">
              <li>• US military deaths as % of population steadily declining</li>
              <li>• Medical advances mean more wounded survive</li>
              <li>• All-volunteer force reduces political pressure</li>
              <li>• Precision weapons theoretically reduce collateral damage</li>
            </ul>
          </div>
          <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h4 className="text-red-400 font-bold mb-2">The Bad News</h4>
            <ul className="text-stone-300 text-sm space-y-1">
              <li>• Civilian casualties far exceed military casualties</li>
              <li>• Cost per death increasing exponentially</li>
              <li>• All-volunteer force enables endless wars</li>
              <li>• Precision weapons create false sense of surgical war</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Economic Impact Breakdown */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">💰 True Economic Cost of American Wars</h2>
        <p className="text-stone-400 mb-6">The Pentagon budget is just the tip of the iceberg. Here&apos;s the complete accounting:</p>
        
        <div className="space-y-4 mb-6">
          {economicImpactAnalysis.map((impact, i) => (
            <div key={i} className="bg-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-semibold">{impact.category}</h4>
                <span className="text-red-400 font-bold">{impact.amount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-400">{impact.description}</span>
                <span className="text-stone-500">{impact.percentage}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-lg p-4">
          <h4 className="text-yellow-400 font-bold mb-2">The Opportunity Cost Problem</h4>
          <p className="text-stone-300 text-sm mb-3">
            Economists call it &ldquo;opportunity cost&rdquo; — what we gave up to spend $11.6 trillion on wars. 
            For context, that&apos;s enough to:
          </p>
          <ul className="text-stone-300 text-sm space-y-1 list-disc list-inside">
            <li>Build high-speed rail connecting every major US city ($2T)</li>
            <li>Make college free for every American for 50 years ($3T)</li>
            <li>Rebuild every bridge, road, and water system in America ($4T)</li>
            <li>Install solar panels on every US rooftop ($1T)</li>
            <li>Still have $1.6T left over for deficit reduction</li>
          </ul>
          <p className="text-stone-400 text-sm mt-3">
            Instead, we got the Taliban back in power in Afghanistan, chaos in Iraq, 
            and Iran stronger than ever. The opportunity cost of war is peace and prosperity.
          </p>
        </div>
      </div>

      {/* International Comparison */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">🌍 How Other Powers Approach Military Spending</h2>
        <p className="text-stone-400 mb-6">
          Compare America&apos;s war-heavy approach to other major powers who focus on economic development:
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-600">
                <th className="text-left py-2 pr-4 text-stone-400">Country</th>
                <th className="text-right py-2 pr-4 text-stone-400">Military Spending</th>
                <th className="text-center py-2 pr-4 text-stone-400">% GDP</th>
                <th className="text-center py-2 pr-4 text-stone-400">Conflicts (2001-23)</th>
                <th className="text-left py-2 pr-4 text-stone-400">Approach</th>
                <th className="text-left py-2 text-stone-400">Result</th>
              </tr>
            </thead>
            <tbody>
              {internationalComparisons.map((country, i) => (
                <tr key={i} className="border-b border-stone-700">
                  <td className="py-2 pr-4 text-white font-medium">{country.country}</td>
                  <td className="py-2 pr-4 text-right text-red-400 font-mono">{country.militarySpending2023}</td>
                  <td className="py-2 pr-4 text-center text-stone-300">{country.gdpPercent}%</td>
                  <td className="py-2 pr-4 text-center text-stone-300">{country.conflicts2001_2023}</td>
                  <td className="py-2 pr-4 text-stone-400 text-xs">{country.approach}</td>
                  <td className="py-2 text-stone-400 text-xs">{country.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-green-950/30 border border-green-900/50 rounded-lg p-4">
            <h4 className="text-green-400 font-bold mb-2">Winners: Economic Focus</h4>
            <ul className="text-stone-300 text-sm space-y-1">
              <li><strong>Germany:</strong> EU&apos;s largest economy, export powerhouse</li>
              <li><strong>Japan:</strong> Technology leader, high living standards</li>
              <li><strong>China:</strong> Rising global influence through trade</li>
            </ul>
          </div>
          <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h4 className="text-red-400 font-bold mb-2">Losers: Military Focus</h4>
            <ul className="text-stone-300 text-sm space-y-1">
              <li><strong>USA:</strong> Declining infrastructure, rising inequality</li>
              <li><strong>Russia:</strong> Economic isolation, brain drain</li>
              <li><strong>Both:</strong> High military spending, limited soft power</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Individual Conflict Analysis */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">📋 Cost-Benefit Analysis by Major Conflict</h2>
        <p className="text-stone-400 mb-6">
          Ranking major US wars by return on investment — what did America get for its blood and treasure?
        </p>
        
        <div className="space-y-4">
          {costAnalysisByConflict.map((analysis, i) => (
            <div key={i} className="bg-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-white font-bold text-lg">{analysis.conflict}</h4>
                <div className="text-right">
                  <p className="text-red-400 font-bold">{analysis.cost2023}</p>
                  <p className="text-stone-500 text-sm">{analysis.duration}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm mb-3">
                <div>
                  <p className="text-stone-400">Cost per year: <span className="text-white">{analysis.costPerYear}</span></p>
                  <p className="text-stone-400">Cost per casualty: <span className="text-white">{analysis.costPerCasualty}</span></p>
                </div>
                <div>
                  <p className="text-stone-400">Outcome: <span className="text-white">{analysis.outcome}</span></p>
                  <p className="text-stone-400">ROI: <span className="text-white">{analysis.roi}</span></p>
                </div>
              </div>
              
              <div className="bg-yellow-950/30 border border-yellow-900/50 rounded p-3">
                <p className="text-yellow-400 text-sm"><strong>Libertarian takeaway:</strong> {analysis.libertarianTakeaway}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPLETE TABLE */}
      <div className="bg-stone-800 rounded-lg p-6 my-8 overflow-x-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Complete Wars Database</h2>
        <p className="text-stone-400 text-sm mb-4">All {totalConflicts} conflicts, sorted by date. Costs in 2023 inflation-adjusted dollars.</p>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-stone-700">
              <th className="py-2 pr-2 text-stone-400">Conflict</th>
              <th className="py-2 pr-2 text-stone-400">Years</th>
              <th className="py-2 pr-2 text-stone-400">Duration</th>
              <th className="py-2 pr-2 text-stone-400">Cost (2023$)</th>
              <th className="py-2 pr-2 text-stone-400">US Deaths</th>
              <th className="py-2 pr-2 text-stone-400">Civilian Deaths</th>
              <th className="py-2 text-stone-400">Cost/US Death</th>
            </tr>
          </thead>
          <tbody>
            {conflicts.map(c => (
              <tr key={c.id} className="border-b border-stone-700/50 hover:bg-stone-700/30">
                <td className="py-2 pr-2">
                  <Link href={`/conflicts/${c.id}`} className="text-red-400 hover:underline text-xs">
                    {c.shortName || c.name}
                  </Link>
                </td>
                <td className="py-2 pr-2 text-stone-300 text-xs">{c.startYear}–{c.endYear || 'present'}</td>
                <td className="py-2 pr-2 text-stone-300 text-xs">{c.computed?.durationYears || '–'}y</td>
                <td className="py-2 pr-2 text-red-400 text-xs font-mono">{c.costInflationAdjusted ? fmtMoney(c.costInflationAdjusted) : '–'}</td>
                <td className="py-2 pr-2 text-white text-xs font-mono">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) : '–'}</td>
                <td className="py-2 pr-2 text-stone-300 text-xs font-mono">{c.civilianDeaths ? fmt(c.civilianDeaths) : '–'}</td>
                <td className="py-2 text-stone-300 text-xs font-mono">{c.computed?.costPerUSdeath ? fmtMoney(c.computed.costPerUSdeath) : '–'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RANKED: Most Expensive */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">🏆 Most Expensive Wars</h2>
        <div className="space-y-2">
          {bySpending.slice(0, 10).map((c, i) => (
            <div key={c.id} className="flex justify-between items-center border-b border-stone-700/50 pb-2">
              <div className="flex items-center gap-3">
                <span className="text-red-400 font-bold w-6">{i + 1}.</span>
                <Link href={`/conflicts/${c.id}`} className="text-white hover:text-red-400">
                  {c.shortName || c.name}
                </Link>
                <span className="text-stone-500 text-xs">{c.startYear}–{c.endYear || 'present'}</span>
              </div>
              <span className="text-red-400 font-bold font-mono">{fmtMoney(c.costInflationAdjusted)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RANKED: Deadliest */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">💀 Deadliest Wars (US Deaths)</h2>
        <div className="space-y-2">
          {byDeaths.slice(0, 10).map((c, i) => (
            <div key={c.id} className="flex justify-between items-center border-b border-stone-700/50 pb-2">
              <div className="flex items-center gap-3">
                <span className="text-red-400 font-bold w-6">{i + 1}.</span>
                <Link href={`/conflicts/${c.id}`} className="text-white hover:text-red-400">
                  {c.shortName || c.name}
                </Link>
                <span className="text-stone-500 text-xs">{c.startYear}–{c.endYear || 'present'}</span>
              </div>
              <span className="text-red-400 font-bold font-mono">{fmt(c.usCasualties.deaths)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RANKED: Longest */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">⏱️ Longest Wars</h2>
        <div className="space-y-2">
          {byDuration.slice(0, 10).map((c, i) => (
            <div key={c.id} className="flex justify-between items-center border-b border-stone-700/50 pb-2">
              <div className="flex items-center gap-3">
                <span className="text-red-400 font-bold w-6">{i + 1}.</span>
                <Link href={`/conflicts/${c.id}`} className="text-white hover:text-red-400">
                  {c.shortName || c.name}
                </Link>
                <span className="text-stone-500 text-xs">{c.startYear}–{c.endYear || 'present'}</span>
              </div>
              <span className="text-red-400 font-bold font-mono">{c.computed.durationYears} years</span>
            </div>
          ))}
        </div>
      </div>

      {/* RANKED: Most Expensive Per Death */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">💰 Highest Cost Per US Death</h2>
        <p className="text-stone-400 text-sm mb-3">How much each American life &ldquo;cost&rdquo; in inflation-adjusted dollars — a grim measure of the rising price of war.</p>
        <div className="space-y-2">
          {byCostPerDeath.slice(0, 10).map((c, i) => (
            <div key={c.id} className="flex justify-between items-center border-b border-stone-700/50 pb-2">
              <div className="flex items-center gap-3">
                <span className="text-red-400 font-bold w-6">{i + 1}.</span>
                <Link href={`/conflicts/${c.id}`} className="text-white hover:text-red-400">
                  {c.shortName || c.name}
                </Link>
              </div>
              <span className="text-red-400 font-bold font-mono">{fmtMoney(c.computed.costPerUSdeath)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Key Insights */}
      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">Key Patterns in the Data</h2>

        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">Wars Are Getting More Expensive, Not Less</h3>
        <p className="text-stone-300">
          The cost per American death has risen from approximately $96,000 in the Revolutionary War to over $935 million
          in Afghanistan — a nearly 10,000× increase even after adjusting for inflation. Modern wars cost exponentially more
          per casualty because of precision-guided munitions, advanced logistics, force protection, and the long tail of
          veteran care. We spend more per death but achieve less per dollar.
        </p>

        <p className="text-stone-300">
          This trend accelerated after Vietnam. The all-volunteer force, while eliminating the political pressure of the draft,
          created moral hazard — leaders can wage war without broad societal sacrifice. When war becomes the province of a
          professional warrior class rather than citizen-soldiers, democratic constraints weaken.
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">The Civil War Remains the Deadliest</h3>
        <p className="text-stone-300">
          With over 620,000 American deaths, the Civil War killed more Americans than all other US wars combined through
          Vietnam. It remains the only US conflict where American casualties exceeded 2% of the total population. To match
          that ratio today would require over 6.6 million deaths.
        </p>

        <p className="text-stone-300">
          The Civil War also established the template for total war — civilian infrastructure as legitimate targets, 
          conscription, centralized war production, and suspension of civil liberties. Sherman&apos;s march to the sea 
          pioneered the concept of economic warfare against civilian populations, a precedent that would resurface 
          in the strategic bombing campaigns of World War II and beyond.
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">Post-9/11 Wars: Maximum Cost, Minimal Result</h3>
        <p className="text-stone-300">
          The post-9/11 wars (Afghanistan, Iraq, and related operations) represent the most expensive sustained military
          campaign in US history at over $8 trillion. Yet they achieved arguably the least: Afghanistan is back under Taliban
          control, Iraq is destabilized and Iranian-influenced, ISIS emerged from the chaos, and the global terrorist threat
          has dispersed rather than diminished.
        </p>

        <p className="text-stone-300">
          The Afghanistan War alone lasted 20 years — longer than the Revolutionary War, Civil War, and both World Wars combined.
          The Iraq War created a power vacuum that Iran filled. Libya became a failed state. Syria remains devastated. 
          Yemen suffers through a proxy war. The &ldquo;War on Terror&rdquo; created more terror.
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">Civilian Deaths Dwarf Military Deaths in Modern Wars</h3>
        <p className="text-stone-300">
          In World War I, civilians accounted for roughly 10% of deaths. By World War II, it was approximately 50%.
          In the post-9/11 wars, civilian deaths outnumber US military deaths by ratios of 100:1 or more. The Korean War
          killed an estimated 2–3 million Korean civilians. The Vietnam War killed an estimated 2 million Vietnamese civilians.
          Modern &ldquo;precision&rdquo; warfare has not solved the civilian casualty problem — it has merely made it less visible to Americans.
        </p>

        <p className="text-stone-300">
          This trend reflects the urbanization of warfare. Most conflicts now occur in populated areas rather than 
          battlefields. &ldquo;Precision&rdquo; weapons create an illusion of surgical strikes, but when you drop 
          thousands of bombs on cities, precision becomes irrelevant. The aggregate effect is mass civilian casualties.
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">The Constitutional Decay</h3>
        <p className="text-stone-300">
          The Constitution grants Congress alone the power to declare war. Yet America hasn&apos;t formally declared war since 1941,
          despite fighting in Korea, Vietnam, Iraq (twice), Afghanistan, Libya, Syria, and now Iran. The Founders&apos; vision of
          deliberative democracy before warfare has been replaced by executive unilateralism.
        </p>

        <p className="text-stone-300">
          Each war establishes precedents for the next. The 2001 Authorization for Use of Military Force — passed three days 
          after 9/11 — has been cited to justify military operations in at least 19 countries. A single congressional resolution 
          has become a blank check for global war.
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">The Military-Industrial Ratchet</h3>
        <p className="text-stone-300">
          President Eisenhower warned of the military-industrial complex in 1961. Today, defense contractors employ over 2.5 million
          Americans across all 50 states. Lockheed Martin alone has operations in 46 states. This creates powerful constituencies
          for continued military spending regardless of strategic necessity.
        </p>

        <p className="text-stone-300">
          The result is what economist Joseph Stiglitz calls &ldquo;military Keynesianism&rdquo; — using defense spending 
          to stimulate the economy rather than address genuine security threats. Bases that should close remain open. 
          Weapons systems no general wants continue production. The tail wags the dog.
        </p>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">The Opportunity Cost of 250 Years of War</h2>
        <p className="text-stone-300">
          America has spent $11.6 trillion (2023 dollars) on wars since 1775. That&apos;s enough money to:
        </p>
        
        <ul className="list-disc list-inside text-stone-300 space-y-2 mb-6">
          <li>Give every American household $89,000 in cash</li>
          <li>Fund the entire federal budget for 2.8 years</li>
          <li>Pay off 35% of the national debt</li>
          <li>Build 580 miles of high-speed rail</li>
          <li>Provide free college tuition for everyone for 37 years</li>
          <li>Install solar panels on every rooftop in America twice over</li>
        </ul>

        <p className="text-stone-300">
          Instead of this productive investment, America chose destruction. The costs compound: not just the immediate 
          expense of war, but the opportunity cost of peace and prosperity foregone. Every dollar spent on bombs is 
          a dollar not spent on bridges. Every engineer building weapons is an engineer not improving infrastructure.
        </p>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">Methodology and Data Sources</h2>
        <p className="text-stone-300">
          All cost figures are adjusted to 2023 dollars using the Bureau of Labor Statistics Consumer Price Index (CPI-U).
          This understates true costs because military inflation typically exceeds general inflation — weapons get more
          expensive faster than consumer goods.
        </p>

        <p className="text-stone-300">
          US casualty figures draw from the Department of Defense, Congressional Research Service, and National Archives.
          Civilian casualty estimates use conservative (lower-bound) figures from academic sources including the Watson Institute
          at Brown University, Iraq Body Count, and peer-reviewed studies. The true civilian toll is likely much higher.
        </p>

        <p className="text-stone-300">
          War duration is calculated from the first year of significant US military involvement to the last year of major
          operations. This sometimes differs from political or diplomatic timelines but reflects the period of active military
          expenditure and casualties.
        </p>
      </div>

      {/* Enhanced AI Overview */}
      <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-3">💡 AI Overview: Key Insights</h3>
        <ul className="space-y-2 text-sm text-stone-300">
          <li>• <strong>91% wartime rate</strong> — America at war 225 of 248 years since independence</li>
          <li>• <strong>$11.6T total cost</strong> — Enough to give every household $89,000 or fund government for 2.8 years</li>
          <li>• <strong>10,000× cost inflation</strong> — Revolutionary War: $96K/death; Afghanistan: $935M/death</li>
          <li>• <strong>620K Civil War deaths</strong> — More than all other US wars combined through Vietnam</li>
          <li>• <strong>Post-9/11: $8T spent, minimal gains</strong> — Taliban back in Afghanistan, chaos in Iraq/Libya/Syria</li>
          <li>• <strong>150:1 civilian ratio</strong> — Modern wars kill far more civilians than US soldiers</li>
          <li>• <strong>No formal war declarations since 1941</strong> — Constitution&apos;s war powers effectively nullified</li>
          <li>• <strong>2.5M defense contractor employees</strong> — Powerful constituency for perpetual military spending</li>
          <li>• <strong>$816B current budget vs China&apos;s $292B</strong> — 3:1 spending ratio, declining influence</li>
          <li>• <strong>Iran War: $1.2T projected</strong> — New wartime spending peak amid constitutional crisis</li>
        </ul>
      </div>

      {/* Enhanced Cross-links */}
      <div className="bg-stone-800 rounded-lg p-6 mt-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-3">Related Analysis</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="text-stone-300 font-semibold mb-2">Cost Analysis</h4>
            <ul className="space-y-1">
              <li><Link href="/analysis/cost-per-life" className="text-red-400 hover:text-red-300">→ The Price of a Life</Link></li>
              <li><Link href="/analysis/what-could-we-buy" className="text-red-400 hover:text-red-300">→ What $11.6 Trillion Could Have Bought</Link></li>
              <li><Link href="/analysis/cost-of-empire" className="text-red-400 hover:text-red-300">→ The True Cost of Empire</Link></li>
              <li><Link href="/analysis/war-profiteering" className="text-red-400 hover:text-red-300">→ War Profiteering: The Business of Death</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-300 font-semibold mb-2">Current Wars</h4>
            <ul className="space-y-1">
              <li><Link href="/analysis/iran-2026" className="text-red-400 hover:text-red-300">→ Iran 2026: Whose War Is This?</Link></li>
              <li><Link href="/analysis/cost-of-iran" className="text-red-400 hover:text-red-300">→ What Will Iran Cost?</Link></li>
              <li><Link href="/analysis/911-to-forever-war" className="text-red-400 hover:text-red-300">→ 9/11 to Forever War</Link></li>
              <li><Link href="/analysis/forgotten-wars" className="text-red-400 hover:text-red-300">→ The Forgotten Wars</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-stone-700">
          <h4 className="text-stone-300 font-semibold mb-2">Constitutional & Political</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/analysis/undeclared-wars" className="text-red-400 hover:text-red-300">→ Undeclared Wars: The Death of Congressional Authority</Link></li>
            <li><Link href="/analysis/war-and-civil-liberties" className="text-red-400 hover:text-red-300">→ War and Civil Liberties</Link></li>
            <li><Link href="/analysis/draft-and-inequality" className="text-red-400 hover:text-red-300">→ The Draft and Inequality</Link></li>
            <li><Link href="/analysis/military-families" className="text-red-400 hover:text-red-300">→ Military Families: The Hidden Cost</Link></li>
          </ul>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}