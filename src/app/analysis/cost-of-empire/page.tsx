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
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
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
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Hidden Budget</h2>
        <p className="text-stone-600 mb-4">
          Congress and the media report the DoD &ldquo;topline&rdquo; number — currently $886 billion — as 
          if it represents total military spending. It doesn&apos;t. Significant military costs are 
          deliberately scattered across other agencies to make the total look smaller:
        </p>

        <div className="space-y-4 my-6">
          {[
            { name: 'Nuclear Weapons (Dept. of Energy)', amount: '$37B', desc: 'The entire nuclear arsenal — warheads, maintenance, modernization — is budgeted under the Department of Energy, not the DoD.' },
            { name: 'Veterans Affairs', amount: '$325B', desc: 'The cost of caring for those broken by war. This is a direct military cost — there would be no VA without wars — but it\'s budgeted separately.' },
            { name: 'Homeland Security', amount: '$62B', desc: 'Created after 9/11 as a direct response to the War on Terror. TSA, border security, Coast Guard — all military-adjacent.' },
            { name: 'Intelligence Community', amount: '$90B+', desc: 'The CIA, NSA, NRO, and 15 other agencies. Much of the budget is classified. The $90B figure is an estimate.' },
            { name: 'Military Retirement', amount: '$48B', desc: 'Pensions and benefits for retired military personnel — a deferred cost of military service.' },
            { name: 'Debt Interest (military share)', amount: '$156B', desc: 'The US borrowed trillions for wars in Iraq, Afghanistan, and the War on Terror. The interest on that debt is a military cost.' },
          ].map(item => (
            <div key={item.name} className="bg-stone-50 rounded-lg p-5">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold">{item.name}</h3>
                <span className="text-red-800 font-bold whitespace-nowrap">{item.amount}</span>
              </div>
              <p className="text-stone-600 text-sm">{item.desc}</p>
            </div>
          ))}
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

      {/* Imperial Overstretch */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Imperial Overstretch</h2>
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
          <h3 className="text-amber-400 font-bold text-lg mb-3">Signs of Overstretch</h3>
          <div className="space-y-3">
            {[
              { sign: 'Military spending as % of GDP rising while economic share falls', data: '4.6% of GDP on military; US share of global GDP down from 40% to 24%' },
              { sign: 'Infrastructure rated as failing', data: 'American Society of Civil Engineers gives US infrastructure a C- grade; $2.6T investment gap' },
              { sign: 'Declining life expectancy', data: 'US life expectancy declined 2020-2023; now lower than Cuba, Chile, and Costa Rica' },
              { sign: 'Military recruitment crisis', data: 'Army missed 2022 recruiting goal by 25%; lowest enlistment since the end of the draft' },
              { sign: 'Allies seeking alternatives', data: 'Saudi Arabia cutting oil deals with China. France calling for "strategic autonomy." De-dollarization accelerating.' },
            ].map(item => (
              <div key={item.sign} className="border-l-2 border-amber-600 pl-4">
                <p className="font-bold text-sm">{item.sign}</p>
                <p className="text-stone-600 text-sm">{item.data}</p>
              </div>
            ))}
          </div>
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
