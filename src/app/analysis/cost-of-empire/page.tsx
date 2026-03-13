import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { TrueCostChart, BasesChart, VsWorldChart, OpportunityCostChart, EmpireGrowthChart } from './EmpireCharts'

export const metadata: Metadata = {
  title: 'The Cost of Empire: $1.3 Trillion/Year for Global Military Dominance | WarCosts',
  description: '750+ overseas bases. $1.3 trillion per year in true military spending. More than the next 15 nations combined. The price of American empire — and what it costs at home.',
  openGraph: {
    title: 'The Cost of Empire: $1.3 Trillion/Year',
    description: '750+ bases, $1.3T/year true cost, more than the next 15 nations combined. The total price of global military dominance.',
    url: 'https://www.warcosts.org/analysis/cost-of-empire',
    type: 'article',
  },
}

const empireStats = [
  { stat: '750+', label: 'US military bases in 80+ countries — more than any empire in history', source: 'David Vine, American University' },
  { stat: '$1.35T', label: 'True annual military spending when all related costs are included', source: 'War Resisters League / POGO analysis' },
  { stat: '250,000', label: 'US troops deployed overseas at any given time', source: 'DoD Manpower Data Center' },
  { stat: '$55B', label: 'Annual cost of overseas bases alone', source: 'RAND Corporation' },
  { stat: '4.6%', label: 'Of GDP spent on true military costs — more than education and healthcare infrastructure combined', source: 'OMB / BEA analysis' },
  { stat: '6', label: 'Consecutive failed Pentagon audits — trillions unaccounted for', source: 'DoD Inspector General' },
]

export default function CostOfEmpirePage() {
  const spending = loadData('yearly-spending.json')
  const globalSpending = loadData('global-spending.json')
  const latestYear = spending[spending.length - 1]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Cost of Empire' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Cost of Empire
        </h1>
        <p className="text-xl text-stone-300 mb-4">$1.3 Trillion Per Year for Global Military Dominance</p>
        <p className="text-stone-400 text-lg">
          The official Department of Defense budget for FY2024 is {fmtMoney(latestYear?.amount || 886000)}. 
          But that number is a lie of omission. When you add nuclear weapons (DOE), veterans&apos; care, 
          Homeland Security, the intelligence community, military retirement, and the share of debt 
          interest attributable to military spending, the true cost exceeds $1.35 trillion per year. 
          The United States maintains 750+ military bases in 80+ countries — more than every other 
          nation on Earth combined. This is not defense. This is empire. And empire has a price.
        </p>
      </div>

      <ShareButtons title="The Cost of Empire: $1.3 Trillion/Year for Global Military Dominance" />

      {/* Key Numbers */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="text-red-400 font-bold text-lg mb-4">The Empire by the Numbers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {empireStats.map((item) => (
            <div key={item.label} className="flex gap-3">
              <span className="text-2xl font-bold text-white whitespace-nowrap">{item.stat}</span>
              <div>
                <p className="text-stone-300 text-sm">{item.label}</p>
                <p className="text-stone-500 text-xs">{item.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TrueCostChart />

      {/* The Hidden Budget */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Hidden Budget: How They Hide $1.35 Trillion</h2>
        <p className="text-stone-600 mb-4">
          Congress and the media report the DoD &ldquo;topline&rdquo; number — currently $886 billion — as 
          if it represents total military spending. It doesn&apos;t. Significant military costs are 
          deliberately scattered across other agencies to make the total look smaller. This isn&apos;t 
          accidental. It&apos;s budget gimmickry designed to hide the true cost of empire from the American people:
        </p>

        <div className="space-y-4 my-6">
          {[
            { 
              name: 'Nuclear Weapons (Dept. of Energy)', 
              amount: '$37B', 
              desc: 'The entire nuclear arsenal — 3,700+ warheads, maintenance, modernization, uranium enrichment, tritium production, weapons labs — is budgeted under the Department of Energy, not the DoD. The DoE\'s weapons budget has grown 31% since 2010.',
              breakdown: 'Warhead maintenance: $15B • Nuclear modernization: $12B • Weapons labs (LANL, LLNL, SNL): $8B • Uranium/tritium: $2B'
            },
            { 
              name: 'Veterans Affairs', 
              amount: '$325B', 
              desc: 'The cost of caring for those broken by war. This is a direct military cost — there would be no VA without wars — but it\'s budgeted separately. The VA budget has tripled since 2001, driven entirely by post-9/11 veterans.',
              breakdown: 'Medical care: $106B • Disability compensation: $127B • Education (GI Bill): $12.1B • Housing loans: $2.8B • Pensions: $5.6B'
            },
            { 
              name: 'Homeland Security', 
              amount: '$62B', 
              desc: 'Created after 9/11 as a direct response to the War on Terror. TSA, border security, Coast Guard, FEMA, Secret Service — all military-adjacent agencies created or expanded because of the military\'s failures on 9/11.',
              breakdown: 'TSA: $8.9B • CBP: $15.3B • Coast Guard: $12.6B • Secret Service: $3.1B • FEMA: $20.2B • Cybersecurity: $2.6B'
            },
            { 
              name: 'Intelligence Community', 
              amount: '$90B+', 
              desc: 'The CIA, NSA, NRO, DIA, and 15 other agencies. Much of the budget is classified — the $90B figure is conservative. The "black budget" has grown 250% since 9/11 and now exceeds the State Department by 18:1.',
              breakdown: 'CIA: ~$15B • NSA: ~$12B • NRO: ~$8B • Military intelligence: ~$30B • Other agencies: ~$25B (estimates - much classified)'
            },
            { 
              name: 'Military Retirement', 
              amount: '$48B', 
              desc: 'Pensions and benefits for retired military personnel — a deferred cost of military service. This doesn\'t include VA disability, which is counted separately. Average military retiree: $40,000/year for life.',
              breakdown: 'Officer pensions: $28B • Enlisted pensions: $15B • Survivor benefits: $3.2B • Thrift Savings Plan matching: $1.8B'
            },
            { 
              name: 'Military Share of Debt Interest', 
              amount: '$156B', 
              desc: 'The US has borrowed $8+ trillion for wars since 2001. Interest on that debt is a military cost. Using the military\'s share of total spending (22%), military-attributable debt service is $156B annually — and growing.',
              breakdown: 'Iraq War debt interest: ~$45B • Afghanistan debt interest: ~$42B • General military deficit spending: ~$69B'
            },
            { 
              name: 'Military Construction & Family Housing', 
              amount: '$15B', 
              desc: 'Military housing, barracks, facilities maintenance. Technically part of DoD but often counted separately in budget discussions.',
              breakdown: 'New construction: $8.2B • Family housing: $3.1B • Facilities sustainment: $3.7B'
            },
            { 
              name: 'Defense-Related Activities', 
              amount: '$12B', 
              desc: 'Selective Service, Armed Forces Retirement Home, military tribunals, defense nuclear facilities cleanup — military costs not technically in the DoD budget.',
              breakdown: 'Nuclear cleanup: $8.5B • Selective Service: $25M • Military tribunals: $250M • Other: $3.2B'
            },
          ].map(item => (
            <div key={item.name} className="bg-stone-50 rounded-lg p-5">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold">{item.name}</h3>
                <span className="text-red-800 font-bold whitespace-nowrap">{item.amount}</span>
              </div>
              <p className="text-stone-600 text-sm mb-2">{item.desc}</p>
              <div className="bg-stone-100 rounded p-2">
                <p className="text-stone-500 text-xs"><strong>Breakdown:</strong> {item.breakdown}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-6">
          <h3 className="text-red-400 font-bold text-lg mb-3">The True Military Budget: $1.35 Trillion</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center border-b border-stone-400 pb-1">
                <span className="text-stone-600 text-sm">Official DoD Budget:</span>
                <span className="text-white font-bold">$886B</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-400 pb-1">
                <span className="text-stone-600 text-sm">Nuclear weapons (DOE):</span>
                <span className="text-white font-bold">+$37B</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-400 pb-1">
                <span className="text-stone-600 text-sm">Veterans Affairs:</span>
                <span className="text-white font-bold">+$325B</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-400 pb-1">
                <span className="text-stone-600 text-sm">Intelligence agencies:</span>
                <span className="text-white font-bold">+$90B</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center border-b border-stone-400 pb-1">
                <span className="text-stone-600 text-sm">Homeland Security:</span>
                <span className="text-white font-bold">+$62B</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-400 pb-1">
                <span className="text-stone-600 text-sm">Military retirement:</span>
                <span className="text-white font-bold">+$48B</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-400 pb-1">
                <span className="text-stone-600 text-sm">Military debt interest:</span>
                <span className="text-white font-bold">+$156B</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t-2 border-red-800">
                <span className="text-white font-bold">TRUE TOTAL:</span>
                <span className="text-red-400 font-bold text-xl">$1.35T</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-stone-600 mb-4">
          This budget accounting is deliberate deception. Imagine if General Motors reported only the cost 
          of assembling cars, but put the cost of steel, labor, R&D, and debt service in separate budgets 
          managed by other divisions. Investors would call it fraud. When the Pentagon does it, Congress 
          calls it "budget structure."
        </p>
      </section>

      {/* Pentagon Audit Failures */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Pentagon Has Never Passed an Audit</h2>
        <p className="text-stone-600 mb-4">
          Since 1990, federal law has required all government agencies to undergo annual audits. The Pentagon 
          has never passed one. After decades of "we can&apos;t audit because we&apos;re too complex," the DoD 
          finally attempted its first department-wide audit in 2018. It failed. It has failed every year since.
        </p>
        <p className="text-stone-600 mb-4">
          This isn&apos;t a technicality. The Pentagon cannot account for trillions of dollars. It doesn&apos;t 
          know how many contractors it employs. It can&apos;t track weapons shipments. It has lost entire bases 
          in its accounting. Equipment worth hundreds of billions has simply vanished from the books.
        </p>

        <div className="bg-stone-800 rounded-lg p-6 my-6">
          <h3 className="text-white font-bold text-lg mb-3">Pentagon Audit Results (2018-2024)</h3>
          <div className="space-y-4">
            {[
              { 
                year: '2024', 
                result: 'FAILED', 
                score: 'Disclaimer of opinion (worst possible)',
                problems: '1,652 audit findings • $824B in transactions not properly supported • 28% of sampled transactions had "material" errors',
                quote: '"We continue to fail to get the information we need to do our audits effectively." — DoD Inspector General Robert Storch'
              },
              { 
                year: '2023', 
                result: 'FAILED', 
                score: 'Disclaimer of opinion',
                problems: '1,635 audit findings • $1.7T in "unsupported" transactions • Army lost track of $1.2B in equipment',
                quote: '"The Department continues to face significant financial management and business process deficiencies." — DoD IG'
              },
              { 
                year: '2022', 
                result: 'FAILED', 
                score: 'Disclaimer of opinion',
                problems: '1,849 audit findings • Navy had $204B in "unmatched transactions" • Air Force inventory records "unreliable"',
                quote: '"We could not express an opinion on the DoD financial statements due to the extent and pervasiveness of limitations." — EY (contractor)'
              },
              { 
                year: '2021', 
                result: 'FAILED', 
                score: 'Disclaimer of opinion',
                problems: '1,900+ audit findings • $2.8T in "unsupported accounting entries" • Marine Corps admitted it had been reporting false data for years',
                quote: '"The financial statements do not fairly present the financial position." — Independent auditors'
              },
              { 
                year: '2020', 
                result: 'FAILED', 
                score: 'Disclaimer of opinion',
                problems: '1,800+ audit findings • $35B in F-35 parts missing from inventory • Navy couldn\'t account for 4 submarines',
                quote: '"Material weaknesses and significant deficiencies in internal control." — DoD IG'
              },
              { 
                year: '2019', 
                result: 'FAILED', 
                score: 'Disclaimer of opinion',
                problems: '1,300+ audit findings • Pentagon admitted it had been using "plug numbers" (made-up figures) for decades',
                quote: '"We failed the audit, but we never expected to pass it." — Deputy Secretary Pat Shanahan'
              },
              { 
                year: '2018', 
                result: 'FAILED', 
                score: 'Disclaimer of opinion',
                problems: '1,200+ audit findings • $21T in "accounting adjustments" over 17 years • First audit attempt after 27 years of delays',
                quote: '"We never expected to pass our first audit." — Deputy Secretary David Norquist'
              }
            ].map(audit => (
              <div key={audit.year} className="border border-stone-700 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-bold text-lg">{audit.year} Audit</h4>
                  <div className="text-right">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">{audit.result}</span>
                    <p className="text-red-400 text-xs mt-1">{audit.score}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-stone-300 text-sm">{audit.problems}</p>
                  <blockquote className="border-l-2 border-red-600 pl-2 italic text-stone-400 text-sm">
                    {audit.quote}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-stone-600 mb-4">
          For comparison: Walmart — a company with $648 billion in annual revenue, 2.1 million employees, 
          and 10,500+ stores in 19 countries — passes its audit every year. The Pentagon, with a smaller 
          budget, fewer employees, and operations in the same countries, cannot account for its money 
          after 7 attempts and $280 million spent on auditors.
        </p>

        <div className="bg-yellow-950/20 border border-yellow-900/30 rounded-lg p-6 my-6">
          <h3 className="text-yellow-400 font-bold text-lg mb-3">What "Disclaimer of Opinion" Means</h3>
          <p className="text-stone-300 text-sm mb-2">
            When auditors issue a "disclaimer of opinion," they&apos;re saying the organization&apos;s records 
            are so bad they can&apos;t even form an opinion about whether the financial statements are accurate. 
            It&apos;s the auditing equivalent of "this is hopeless."
          </p>
          <p className="text-stone-300 text-sm">
            If a public company received a disclaimer of opinion, trading would be suspended immediately. 
            The CEO would be fired. The board would be replaced. Criminal investigations would begin. 
            When the Pentagon gets a disclaimer of opinion, Congress increases its budget.
          </p>
        </div>
      </section>

      <VsWorldChart />

      {/* Empire of Bases */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Base Empire</h2>
        <p className="text-stone-600 mb-4">
          The United States maintains approximately 750 military bases in at least 80 countries. By 
          comparison, the UK, France, and Russia combined have approximately 30 overseas bases. China 
          has 1 (in Djibouti). The US base network is unprecedented in human history — larger than the 
          British Empire at its peak, more extensive than Rome&apos;s, and more expensive than any 
          military infrastructure ever constructed.
        </p>
        <p className="text-stone-600 mb-4">
          These bases cost approximately $55 billion per year to operate — a figure that doesn&apos;t 
          include the environmental remediation costs (contaminated water, toxic waste), the social costs 
          (crime, sexual assault, cultural disruption in host communities), or the strategic costs 
          (bases provoke the very hostility they claim to deter).
        </p>

        <div className="bg-stone-900 rounded-lg p-6 my-6">
          <h3 className="text-white font-bold text-lg mb-3">The Base Network at a Glance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">750+</p>
              <p className="text-stone-400 text-sm">Overseas Bases</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">80+</p>
              <p className="text-stone-400 text-sm">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">250K</p>
              <p className="text-stone-400 text-sm">Troops Abroad</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">$55B</p>
              <p className="text-stone-400 text-sm">Annual Base Cost</p>
            </div>
          </div>
        </div>
      </section>

      <BasesChart />

      {/* Opportunity Cost */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">What We Can&apos;t Afford Because of What We Spend</h2>
        <p className="text-stone-600 mb-4">
          Every dollar spent on empire is a dollar not spent at home. The $1.35 trillion annual military 
          budget represents choices — choices to fund aircraft carriers instead of hospitals, bases instead 
          of schools, bombs instead of bridges. The opportunity cost is staggering:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            { item: 'Free public college for all', cost: '$80B/year', note: '6% of true military spending' },
            { item: 'End homelessness permanently', cost: '$20B/year', note: '1.5% of true military spending' },
            { item: 'Universal pre-kindergarten', cost: '$35B/year', note: '2.6% of true military spending' },
            { item: 'Clean water for every American', cost: '$45B/year', note: '3.3% of true military spending' },
            { item: 'Universal broadband', cost: '$65B/year', note: '4.8% of true military spending' },
            { item: 'Double cancer research funding', cost: '$7B/year', note: '0.5% of true military spending' },
          ].map(item => (
            <div key={item.item} className="bg-green-950/20 border border-green-900/30 rounded-lg p-4">
              <h3 className="font-bold text-green-400 mb-1">{item.item}</h3>
              <p className="text-white font-bold">{item.cost}</p>
              <p className="text-stone-400 text-xs">{item.note}</p>
            </div>
          ))}
        </div>

        <p className="text-stone-600 mb-4">
          All six programs combined — free college, ending homelessness, universal pre-K, clean water, 
          broadband, and doubling cancer research — would cost $252 billion per year. That&apos;s less 
          than the VA budget alone. Less than 19% of true military spending. The United States doesn&apos;t 
          lack the resources for these programs. It lacks the political will to redirect military spending.
        </p>
      </section>

      <OpportunityCostChart />

      {/* Historical Empire Comparison */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Unprecedented in Human History</h2>
        <p className="text-stone-600 mb-4">
          No empire in human history has maintained as extensive a military presence as the United States. 
          At its peak, the British Empire — the largest empire ever — had perhaps 100 military installations 
          outside the home islands. Rome, at its zenith, maintained roughly 150 permanent military bases 
          across the Mediterranean and Europe. The United States has 750+ bases in 80+ countries — five 
          times more than Rome and Britain combined.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 font-bold">Empire</th>
                <th className="text-left p-3 font-bold">Peak Years</th>
                <th className="text-left p-3 font-bold">Military Bases</th>
                <th className="text-left p-3 font-bold">Territory Controlled</th>
                <th className="text-left p-3 font-bold">Military Spending (% GDP)</th>
                <th className="text-left p-3 font-bold">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {[
                { empire: 'Roman Empire', years: '27 BC - 476 AD', bases: '~150 permanent forts', territory: '5M sq km', spending: '6-8%', outcome: 'Collapsed under military costs' },
                { empire: 'British Empire', years: '1815-1914', bases: '~100 naval/military bases', territory: '35M sq km', spending: '2.5-4%', outcome: 'Bankrupted by two world wars' },
                { empire: 'Spanish Empire', years: '1580-1640', bases: '~75 fortified ports', territory: '20M sq km', spending: '4-6%', outcome: 'Military spending caused bankruptcy (1596, 1607, 1627, 1647)' },
                { empire: 'French Empire (Napoleon)', years: '1804-1815', bases: '~60 garrison towns', territory: '2M sq km', spending: '8-12%', outcome: 'Military overreach led to defeat' },
                { empire: 'Soviet Union', years: '1945-1989', bases: '~50 outside USSR', territory: '22M sq km', spending: '8-15%', outcome: 'Collapsed under military spending burden' },
                { empire: 'United States', years: '1991-present', bases: '750+ confirmed', territory: '9.8M sq km', spending: '4.6% (true cost)', outcome: 'TBD' },
              ].map(e => (
                <tr key={e.empire} className={`border-b border-stone-200 ${e.empire === 'United States' ? 'bg-red-50 font-semibold' : ''}`}>
                  <td className="p-3">{e.empire}</td>
                  <td className="p-3">{e.years}</td>
                  <td className="p-3">{e.bases}</td>
                  <td className="p-3">{e.territory}</td>
                  <td className="p-3">{e.spending}</td>
                  <td className="p-3">{e.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-stone-600 mb-4">
          The pattern across history is consistent: empires that spend more than 6-8% of GDP on military 
          power eventually collapse under the fiscal burden. The United States is already at 4.6% and 
          growing. Unlike previous empires, which at least conquered territory and extracted wealth, 
          the US base empire generates no revenue — it only costs money.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="text-stone-800 font-bold text-lg mb-3">The Roman Comparison</h3>
          <p className="text-stone-600 text-sm mb-3">
            Roman military historian Vegetius wrote in 390 AD: "If you want peace, prepare for war" (<em>Si vis pacem, para bellum</em>). 
            But Rome&apos;s preparation for war became so expensive that it bankrupted the empire. The parallel is instructive:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-stone-800 mb-2">Rome (378 AD)</h4>
              <ul className="text-stone-600 text-sm space-y-1">
                <li>• Military consumed 75% of imperial budget</li>
                <li>• 400,000+ troops across the empire</li>
                <li>• Debased currency to pay army</li>
                <li>• Heavy taxation to fund military</li>
                <li>• Infrastructure neglected for army</li>
                <li>• Recruited barbarians to fill ranks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-stone-800 mb-2">United States (2025 AD)</h4>
              <ul className="text-stone-600 text-sm space-y-1">
                <li>• Military consumes 60% of discretionary budget</li>
                <li>• 1.4M troops; 250,000+ overseas</li>
                <li>• Record federal debt ($34T)</li>
                <li>• Military spending exempt from cuts</li>
                <li>• Infrastructure rated C- by engineers</li>
                <li>• Recruiting crisis; considering foreign recruits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Weapons Boondoggles */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The $1.7 Trillion F-35 and Other Boondoggles</h2>
        <p className="text-stone-600 mb-4">
          Military contractors have perfected the art of extracting maximum money for minimum capability. 
          The result: weapons systems that cost more than NASA&apos;s entire budget but often don&apos;t work. 
          Here are the most expensive failures in Pentagon history:
        </p>

        <div className="space-y-4 my-6">
          {[
            {
              system: 'F-35 Lightning II',
              cost: '$1.7 trillion (lifetime)',
              problems: 'Can\'t fly in lightning. Can\'t fire its gun accurately. Software crashes constantly. 30% mission-ready rate. Most expensive weapon system in history.',
              status: 'ONGOING DISASTER',
              delivered: '2006-present: 950+ aircraft delivered, none fully mission-capable'
            },
            {
              system: 'Littoral Combat Ship (LCS)',
              cost: '$60 billion (35 ships)',
              problems: 'Engines break constantly. Can\'t survive in combat. Mission modules don\'t work. Navy wants to retire newest ships early.',
              status: 'CANCELLED 2020',
              delivered: '2008-2023: 35 ships, most being retired early'
            },
            {
              system: 'Gerald R. Ford Aircraft Carrier',
              cost: '$13.3 billion (one ship)',
              problems: 'Elevators don\'t work. Catapults break. Arresting gear fails. $2B over budget. 4 years behind schedule.',
              status: 'PARTIALLY OPERATIONAL',
              delivered: '2017: Commissioned but still not fully operational'
            },
            {
              system: 'KC-46 Pegasus Tanker',
              cost: '$49 billion (179 aircraft)',
              problems: 'Remote vision system doesn\'t work. Fuel system leaks. Can\'t refuel A-10s safely. Foreign objects damage (tools left inside aircraft).',
              status: 'LIMITED OPERATIONS',
              delivered: '2019-present: 89 aircraft, restricted operations'
            },
            {
              system: 'Ground-based Midcourse Defense',
              cost: '$78 billion',
              problems: 'Intercept rate: 55% in tests (under ideal conditions). Has never been tested against realistic threats. Decoys defeat it easily.',
              status: 'QUESTIONABLE',
              delivered: '2004-present: 44 interceptors, dubious capability'
            },
            {
              system: 'Zumwalt-class Destroyer',
              cost: '$22.5 billion (3 ships)',
              problems: 'Main guns don\'t work. Ammo costs $800,000 per round. Too expensive to build more than 3 ships.',
              status: 'WHITE ELEPHANT',
              delivered: '2016-2023: 3 ships, main weapons removed'
            },
            {
              system: 'Future Combat Systems',
              cost: '$18.1 billion (cancelled)',
              problems: 'Networked army vehicles. None worked. Program cancelled after 8 years and $18B spent. Zero operational systems delivered.',
              status: 'TOTAL FAILURE',
              delivered: '2003-2009: $18B spent, nothing delivered'
            },
            {
              system: 'Expeditionary Fighting Vehicle',
              cost: '$3.2 billion (cancelled)',
              problems: 'Amphibious assault vehicle. Caught fire during tests. Too heavy, too slow, too unreliable. Cancelled after 15 years.',
              status: 'CANCELLED 2011',
              delivered: '1996-2011: $3.2B spent, zero vehicles delivered'
            }
          ].map(weapon => (
            <div key={weapon.system} className="bg-stone-50 rounded-lg p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{weapon.system}</h3>
                <div className="text-right">
                  <span className="text-red-800 font-bold">{weapon.cost}</span>
                  <p className={`text-xs font-bold mt-1 ${
                    weapon.status.includes('FAILURE') || weapon.status.includes('DISASTER') ? 'text-red-600' :
                    weapon.status.includes('CANCELLED') ? 'text-orange-600' :
                    'text-yellow-600'
                  }`}>{weapon.status}</p>
                </div>
              </div>
              <p className="text-stone-600 text-sm mb-2">{weapon.problems}</p>
              <p className="text-stone-500 text-xs">{weapon.delivered}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-6">
          <h3 className="text-red-400 font-bold text-lg mb-3">The Boondoggle Math</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-white font-bold mb-2">Total Waste on Failed Systems</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-300">F-35 problems + overruns:</span>
                  <span className="text-red-400">$400B+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300">LCS overruns + early retirement:</span>
                  <span className="text-red-400">$20B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300">Ford carrier problems:</span>
                  <span className="text-red-400">$3B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300">Cancelled programs (total loss):</span>
                  <span className="text-red-400">$21B</span>
                </div>
                <div className="flex justify-between border-t border-red-800 pt-1 font-bold">
                  <span className="text-white">Conservative total:</span>
                  <span className="text-red-400">$444B+</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">What $444 Billion Could Buy Instead</h4>
              <div className="space-y-1 text-sm text-stone-300">
                <p>• Free college tuition for 5.5 years (all students)</p>
                <p>• End homelessness for 22 years</p>
                <p>• 74,000 new elementary schools</p>
                <p>• Universal broadband for 6.8 years</p>
                <p>• Double the NIH budget for 11 years</p>
                <p>• Repair every bridge in America (3x over)</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-stone-600 mb-4">
          This pattern isn&apos;t accidental. Defense contractors have a perverse incentive: the more a 
          weapon costs and the longer it takes to build, the more money they make. Cost overruns aren&apos;t 
          bugs — they&apos;re features. The Pentagon-contractor revolving door ensures that the people 
          who approve these contracts often go to work for the companies that benefit from them.
        </p>
      </section>

      {/* Imperial Overstretch */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Imperial Overstretch: The Kennedy Thesis Vindicated</h2>
        <p className="text-stone-600 mb-4">
          In 1987, historian Paul Kennedy published <em>The Rise and Fall of the Great Powers</em>, arguing 
          that empires decline when military spending outpaces economic growth — a phenomenon he called 
          &ldquo;imperial overstretch.&rdquo; The pattern is consistent across history: Spain, the 
          Netherlands, France, Britain, the Soviet Union — all spent themselves into decline trying to 
          maintain global military dominance.
        </p>
        <p className="text-stone-600 mb-4">
          Kennedy&apos;s thesis was controversial when applied to the United States in 1987. It looks 
          prescient in 2025. The US share of global GDP has declined from 40% in 1960 to 24% today, 
          while military spending has increased in real terms. Infrastructure crumbles. Healthcare costs 
          bankrupt families. Education outcomes decline. Life expectancy has fallen. The empire abroad 
          is funded by decay at home.
        </p>

        <div className="bg-amber-950/20 border border-amber-900/30 rounded-lg p-6 my-6">
          <h3 className="text-amber-400 font-bold text-lg mb-3">Signs of Overstretch (2025)</h3>
          <div className="space-y-3">
            {[
              { sign: 'Military spending rising as economic dominance falls', data: 'US military spending: +73% since 2001 (real terms). US share of global GDP: 40% (1960) → 24% (2025)' },
              { sign: 'Infrastructure collapse', data: 'ASCE grade: C- (2021). $2.6T repair backlog. 45,000 structurally deficient bridges. Flint still doesn\'t have clean water.' },
              { sign: 'Declining life expectancy (like USSR in 1980s)', data: 'US life expectancy: 78.9 (2019) → 76.4 (2023). First sustained decline since 1918 flu pandemic.' },
              { sign: 'Educational decline', data: 'US students rank 38th in math, 24th in science globally. Student debt: $1.7T. Teachers leaving profession in record numbers.' },
              { sign: 'Military recruitment crisis', data: 'Army missed 2022 goal by 25%. Navy by 20%. Air Force by 23%. Lowest propensity to serve since Vietnam.' },
              { sign: 'Allies hedging bets / seeking alternatives', data: 'Saudi-China oil deals. BRICS expansion. France calls for "strategic autonomy." 108 countries exploring dollar alternatives.' },
              { sign: 'Domestic political breakdown', data: 'January 6th insurrection. 40% of Americans believe 2020 election was "stolen." Trust in institutions at historic lows.' }
            ].map(item => (
              <div key={item.sign} className="border-l-2 border-amber-600 pl-4">
                <p className="font-bold text-sm text-amber-200">{item.sign}</p>
                <p className="text-stone-300 text-sm">{item.data}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="text-stone-800 font-bold text-lg mb-3">The Soviet Parallel</h3>
          <p className="text-stone-600 text-sm mb-3">
            Paul Kennedy wrote <em>Rise and Fall</em> in 1987, just before the Soviet Union collapsed. 
            His analysis of Soviet overstretch reads like a preview of America today:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-stone-800 mb-2">USSR (1985-1991)</h4>
              <ul className="text-stone-600 text-sm space-y-1">
                <li>• Military spending: 8-15% of GDP</li>
                <li>• Global military commitments beyond economic base</li>
                <li>• Infrastructure neglect for military priorities</li>
                <li>• Declining life expectancy (male: 64.2 years in 1980)</li>
                <li>• Technological lag in consumer sectors</li>
                <li>• Unsustainable debt burden</li>
                <li>• Loss of ideological legitimacy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-stone-800 mb-2">USA (2015-2025)</h4>
              <ul className="text-stone-600 text-sm space-y-1">
                <li>• Military spending: 4.6% of GDP (true cost)</li>
                <li>• 750 bases beyond economic justification</li>
                <li>• $2.6T infrastructure repair backlog</li>
                <li>• Declining life expectancy (76.4 years in 2023)</li>
                <li>• Falling behind in semiconductors, batteries, solar</li>
                <li>• $34T national debt (120% of GDP)</li>
                <li>• 40% believe elections are illegitimate</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-600 text-sm mt-3 italic">
            "The task facing American statesmen over the next decades is to recognize that broad trends 
            are under way, and that there is a need to 'manage' affairs so that the relative erosion 
            of the United States' position takes place slowly and smoothly." — Paul Kennedy, 1987
          </p>
        </div>
      </section>

      <EmpireGrowthChart />

      {/* The Comparison */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Comparison They Don&apos;t Want You to Make</h2>
        <p className="text-stone-600 mb-4">
          When politicians justify the military budget, they compare it to China and Russia. But the 
          comparison is misleading in both directions. First, the US spends more than the next 10 
          countries combined. Second, and more importantly, other developed nations achieve security 
          at a fraction of the cost — and use the savings to invest in their citizens:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 font-bold">Country</th>
                <th className="text-left p-3 font-bold">Military (% GDP)</th>
                <th className="text-left p-3 font-bold">Healthcare</th>
                <th className="text-left p-3 font-bold">Life Expectancy</th>
                <th className="text-left p-3 font-bold">College Cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                { country: 'United States', military: '3.5% (official) / 4.6% (true)', healthcare: 'Not universal', life: '77.5 years', college: '$28,000/year avg' },
                { country: 'Germany', military: '1.6%', healthcare: 'Universal', life: '81.7 years', college: 'Free' },
                { country: 'Japan', military: '1.2%', healthcare: 'Universal', life: '84.8 years', college: '$5,000/year' },
                { country: 'Norway', military: '1.8%', healthcare: 'Universal', life: '83.3 years', college: 'Free' },
                { country: 'South Korea', military: '2.7%', healthcare: 'Universal', life: '83.7 years', college: '$5,000/year' },
              ].map(c => (
                <tr key={c.country} className="border-b border-stone-200">
                  <td className="p-3 font-bold">{c.country}</td>
                  <td className="p-3">{c.military}</td>
                  <td className="p-3">{c.healthcare}</td>
                  <td className="p-3">{c.life}</td>
                  <td className="p-3">{c.college}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-stone-600">
          Every nation on this list is secure. None faces an existential military threat. But their citizens 
          live longer, pay less for healthcare and education, and enjoy higher quality of life — because 
          their governments chose to invest in people instead of empire.
        </p>
      </section>

      {/* Quote */}
      <blockquote className="border-l-4 border-red-800 pl-6 my-8 italic text-stone-600 text-lg">
        &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final 
        sense, a theft from those who hunger and are not fed, those who are cold and are not clothed.&rdquo;
        <span className="block text-sm not-italic text-stone-500 mt-2">
          — President Dwight D. Eisenhower, 1953 (a five-star general)
        </span>
      </blockquote>

      {/* Conclusion */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Choice</h2>
        <p className="text-stone-600 mb-4">
          The United States doesn&apos;t have a defense budget. It has an empire budget. The distinction 
          matters because defense — protecting the homeland from genuine threats — would cost a fraction 
          of what the US currently spends. The nuclear arsenal alone provides an effective deterrent 
          against any state actor. The two oceans provide geographic security that no base in Djibouti 
          can improve.
        </p>
        <p className="text-stone-600 mb-4">
          What the $1.35 trillion buys is not security but global dominance — the ability to project 
          military force anywhere on Earth within hours, to maintain military superiority over every 
          other nation simultaneously, and to sustain a network of bases and alliances that would be 
          recognizable to any Roman emperor.
        </p>
        <p className="text-stone-600 font-semibold">
          The question America refuses to ask: is empire worth it? Is global military dominance worth 
          crumbling schools, unaffordable healthcare, declining life expectancy, and a generation 
          drowning in student debt? Every other developed nation has answered that question — and 
          chosen differently.
        </p>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <div className="bg-stone-50 rounded-lg p-6 text-sm text-stone-600 space-y-2">
          <p>• <strong>True military spending:</strong> War Resisters League; Project on Government Oversight (POGO); Mandy Smithberger analysis</p>
          <p>• <strong>Base count:</strong> Vine, David. <em>Base Nation</em>; DoD Base Structure Report</p>
          <p>• <strong>Global spending comparison:</strong> Stockholm International Peace Research Institute (SIPRI) 2024</p>
          <p>• <strong>Opportunity costs:</strong> National Priorities Project; Congressional Budget Office</p>
          <p>• <strong>Imperial overstretch:</strong> Kennedy, Paul. <em>The Rise and Fall of the Great Powers</em></p>
          <p>• <strong>Infrastructure grade:</strong> American Society of Civil Engineers, 2021 Report Card</p>
          <p>• <strong>Yearly spending data:</strong> Office of Management and Budget historical tables</p>
          <p>• <strong>Pentagon audit failures:</strong> DoD Inspector General; Government Accountability Office</p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/empire-of-bases" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Empire of Bases</h3>
            <p className="text-stone-500 text-sm">750 military bases in 80 countries — the physical footprint of empire.</p>
          </Link>
          <Link href="/analysis/pentagon-waste" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Pentagon Waste</h3>
            <p className="text-stone-500 text-sm">6 failed audits. $1.7T F-35. Trillions unaccounted for.</p>
          </Link>
          <Link href="/analysis/what-could-we-buy" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">What $11.6 Trillion Could Buy</h3>
            <p className="text-stone-500 text-sm">Universal healthcare, free college — cheaper than war.</p>
          </Link>
          <Link href="/analysis/jobs-vs-war" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Jobs vs. War</h3>
            <p className="text-stone-500 text-sm">Military spending creates fewer jobs per dollar than any alternative.</p>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
