import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Total Cost of US Wars Since 2001 — $8+ Trillion and Rising | WarCosts',
  description: 'The total cost of US wars since 2001 exceeds $8 trillion. Afghanistan, Iraq, Syria, and the broader War on Terror have cost every American household over $100,000. Complete breakdown with sources.',
  keywords: ['total cost of US wars since 2001', 'cost of war on terror', 'how much did the war on terror cost', 'post 9/11 war spending', 'cost of iraq and afghanistan wars', 'US war spending since 2001', 'war on terror total cost'],
  openGraph: {
    title: 'Total Cost of US Wars Since 2001 — $8+ Trillion',
    description: 'Every dollar, every conflict, every hidden cost. The complete accounting of America\'s post-9/11 wars.',
    url: 'https://warcosts.org/total-cost-of-us-wars-since-2001',
    type: 'article',
  },
}

/* ── Static data ─────────────────────────────────────────────── */

const directWarCosts = [
  { conflict: 'Afghanistan (2001–2021)', dodBudget: 933, stateDept: 59, medicalVet: 296, total: 1288, deaths: 2461, usTroopsDeployed: '775,000+' },
  { conflict: 'Iraq (2003–2011+)', dodBudget: 849, stateDept: 72, medicalVet: 388, total: 1309, deaths: 4599, usTroopsDeployed: '1,500,000+' },
  { conflict: 'Syria/ISIS (2014–present)', dodBudget: 120, stateDept: 16, medicalVet: 22, total: 158, deaths: 65, usTroopsDeployed: '30,000+' },
  { conflict: 'Africa Operations (2001–present)', dodBudget: 45, stateDept: 8, medicalVet: 5, total: 58, deaths: 52, usTroopsDeployed: '15,000+' },
  { conflict: 'Pakistan/Yemen/Somalia (2001–present)', dodBudget: 85, stateDept: 21, medicalVet: 12, total: 118, deaths: 18, usTroopsDeployed: '10,000+' },
  { conflict: 'Other War on Terror Operations', dodBudget: 180, stateDept: 25, medicalVet: 40, total: 245, deaths: 0, usTroopsDeployed: 'Various' },
]

const hiddenAndFutureCosts = [
  { category: 'Direct War Spending (OCO budgets)', amount: '$2.1 trillion', timeframe: '2001–2024', status: 'Spent', source: 'Congressional Research Service' },
  { category: 'DOD Base Budget Increases', amount: '$900+ billion', timeframe: '2001–2024', status: 'Spent', source: 'SIPRI / DOD Comptroller' },
  { category: 'Veteran Medical & Disability Care', amount: '$465 billion (spent) + $1.7–2.2T (future)', timeframe: 'Through 2050+', status: 'Ongoing', source: 'Costs of War Project' },
  { category: 'Interest on War Debt', amount: '$1.1 trillion (to date) + $2–3T (projected)', timeframe: 'Through 2050+', status: 'Compounding', source: 'Costs of War Project' },
  { category: 'Homeland Security (post-9/11)', amount: '$1.2+ trillion', timeframe: '2001–2024', status: 'Spent', source: 'DHS Budget History' },
  { category: 'State Department War Costs', amount: '$220+ billion', timeframe: '2001–2024', status: 'Spent', source: 'State Dept / CRS' },
  { category: 'Intelligence Community Expansion', amount: '$500+ billion', timeframe: '2001–2024', status: 'Spent', source: 'DNI / ODNI disclosures' },
]

const yearByYearSpending = [
  { year: '2001', amount: 20, note: 'War begins October. Initial Afghanistan operations.' },
  { year: '2002', amount: 37, note: 'Afghan operations ramp up. Guantánamo Bay opens.' },
  { year: '2003', amount: 76, note: 'Iraq invasion begins March 2003. Two-front war.' },
  { year: '2004', amount: 94, note: 'Iraqi insurgency escalates. Abu Ghraib scandal.' },
  { year: '2005', amount: 105, note: 'Deadliest year in Iraq (846 US deaths).' },
  { year: '2006', amount: 120, note: 'Iraqi civil war. Afghan Taliban resurgence.' },
  { year: '2007', amount: 170, note: 'Iraq surge — 30,000 additional troops deployed.' },
  { year: '2008', amount: 186, note: 'Peak Iraq spending. SOFA agreement signed.' },
  { year: '2009', amount: 150, note: 'Obama takes office. Afghanistan troop surge begins.' },
  { year: '2010', amount: 163, note: '100,000 US troops in Afghanistan. Peak deployment.' },
  { year: '2011', amount: 159, note: 'Bin Laden killed. Iraq withdrawal begins December.' },
  { year: '2012', amount: 115, note: 'Afghan drawdown begins. Sequestration debates.' },
  { year: '2013', amount: 95, note: 'Continued Afghan withdrawal. Sequestration hits.' },
  { year: '2014', amount: 85, note: 'ISIS emerges. New operations in Iraq and Syria.' },
  { year: '2015', amount: 73, note: 'Anti-ISIS campaign escalates. 10,000 troops in Afghanistan.' },
  { year: '2016', amount: 68, note: 'ISIS territory shrinks. Afghan mission continues.' },
  { year: '2017', amount: 76, note: 'Trump increases Afghan deployment. MOAB dropped.' },
  { year: '2018', amount: 69, note: 'ISIS largely defeated territorially.' },
  { year: '2019', amount: 68, note: 'Trump-Taliban negotiations begin.' },
  { year: '2020', amount: 65, note: 'Doha Agreement signed. Drawdown accelerates.' },
  { year: '2021', amount: 50, note: 'Chaotic Afghanistan withdrawal. August 2021 evacuation.' },
  { year: '2022', amount: 32, note: 'Residual operations. Counterterrorism missions continue.' },
  { year: '2023', amount: 28, note: 'Ongoing counterterrorism. Veteran care costs rising.' },
  { year: '2024', amount: 25, note: 'Operations in Syria, Africa. Long-term costs accelerate.' },
]

const humanCost = [
  { metric: 'US Military Deaths', value: '7,074', note: 'All post-9/11 operations combined' },
  { metric: 'US Military Wounded', value: '53,000+', note: 'Officially documented physical injuries' },
  { metric: 'US Contractor Deaths', value: '8,189', note: 'Private military and civilian contractors' },
  { metric: 'Veteran Suicides (post-9/11)', value: '30,000+', note: 'Estimated post-9/11 veteran suicides through 2024' },
  { metric: 'Traumatic Brain Injuries', value: '450,000+', note: 'Signature wound of post-9/11 wars' },
  { metric: 'Afghan/Iraq/Syria Civilian Deaths', value: '387,000–929,000+', note: 'Direct and indirect deaths (Brown University est.)' },
  { metric: 'Refugees and Displaced People', value: '38 million+', note: 'Across all post-9/11 war zones' },
  { metric: 'Veterans with PTSD', value: '500,000+', note: 'Diagnosed cases; actual numbers likely higher' },
  { metric: 'Veterans with Burn Pit Exposure', value: '3.5 million', note: 'PACT Act expanded coverage in 2022' },
]

const perHousehold = [
  { description: 'Direct war spending per household', amount: '$16,000', calculation: '$2.1T ÷ 131M households' },
  { description: 'Total war costs per household (to date)', amount: '$50,000', calculation: '$6.5T ÷ 131M households' },
  { description: 'Projected total per household (through 2050)', amount: '$100,000–$130,000', calculation: 'Including veteran care + interest' },
  { description: 'Annual military spending per household', amount: '$6,750', calculation: '$886B ÷ 131M households' },
  { description: 'Total "national security" per household', amount: '$11,500', calculation: '$1.5T ÷ 131M households' },
]

const opportunityCost = [
  { item: 'Free public university for all Americans (4 years)', cost: '$800 billion', warEquiv: 'Less than 1 year of peak War on Terror spending' },
  { item: 'Universal pre-K for every child', cost: '$200 billion/decade', warEquiv: '2.5% of total war costs' },
  { item: 'US infrastructure repair backlog', cost: '$2.6 trillion', warEquiv: 'Roughly equal to direct war spending' },
  { item: 'Clean water for every person on Earth', cost: '$150 billion', warEquiv: 'Less than 2% of total war costs' },
  { item: 'End homelessness in America', cost: '$20 billion/year', warEquiv: '0.25% of total war costs' },
  { item: 'Eliminate US student debt', cost: '$1.7 trillion', warEquiv: 'About 21% of total war costs' },
  { item: 'Double NIH funding for 20 years', cost: '$900 billion', warEquiv: '11% of total war costs' },
  { item: 'Rebuild every deficient US bridge', cost: '$125 billion', warEquiv: '1.5% of total war costs' },
]

const warDebtTimeline = [
  { period: '2001–2010', interestPaid: '$260B', cumulativeDebt: '$1.5T', avgRate: '4.2%' },
  { period: '2011–2015', interestPaid: '$220B', cumulativeDebt: '$1.8T', avgRate: '2.8%' },
  { period: '2016–2020', interestPaid: '$280B', cumulativeDebt: '$2.0T', avgRate: '2.3%' },
  { period: '2021–2024', interestPaid: '$340B', cumulativeDebt: '$2.1T', avgRate: '3.5%' },
  { period: '2025–2030 (est.)', interestPaid: '$400B+', cumulativeDebt: '$2.1T', avgRate: '4.0%+' },
  { period: '2031–2050 (est.)', interestPaid: '$1.5T+', cumulativeDebt: '$2.1T', avgRate: 'Variable' },
]

const faqs = [
  {
    q: 'What is the total cost of US wars since 2001?',
    a: 'The total cost of US wars since 2001 is estimated at $8 trillion or more. This includes direct military spending ($2.1 trillion in Overseas Contingency Operations budgets), DOD base budget increases ($900+ billion), homeland security ($1.2+ trillion), veteran care ($465 billion spent, plus $1.7–2.2 trillion in future obligations), and interest on war debt ($1.1 trillion to date, projected to reach $3+ trillion by 2050). Brown University\'s Costs of War Project provides the most comprehensive estimates.',
  },
  {
    q: 'How much did the Afghanistan war cost?',
    a: 'The Afghanistan war (2001–2021) cost approximately $2.3 trillion when including direct military spending, State Department costs, veteran medical care, and interest on borrowing. The direct DOD spending was $933 billion. Future veteran care costs will push the total higher as peak medical costs aren\'t expected until the 2040s.',
  },
  {
    q: 'How much did the Iraq war cost?',
    a: 'The Iraq war cost approximately $2.4 trillion when including all direct and indirect costs. Direct DOD spending was $849 billion, but State Department reconstruction, veteran care ($388 billion), and interest on war debt push the total well above $2 trillion. Some estimates place the full long-term cost above $3 trillion.',
  },
  {
    q: 'How much has the War on Terror cost per American household?',
    a: 'The War on Terror has cost approximately $50,000 per American household to date (based on 131 million households). When projected future costs for veteran care and interest are included, the total is estimated at $100,000–$130,000 per household through 2050.',
  },
  {
    q: 'How were the post-9/11 wars financed?',
    a: 'Unlike previous wars, the post-9/11 wars were almost entirely financed through borrowing rather than tax increases. In fact, taxes were cut in 2001 and 2003 during wartime — unprecedented in American history. This means the costs are being transferred to future generations through debt and compounding interest, which could total $3+ trillion by 2050.',
  },
  {
    q: 'Are the costs of the War on Terror still growing?',
    a: 'Yes. Even though major combat operations in Afghanistan ended in 2021, costs continue to grow significantly. Veteran medical and disability costs are projected to peak in the 2040s as veterans age. Interest on war debt compounds annually. The PACT Act (2022) expanded burn pit coverage to 3.5 million veterans. Total costs are projected to reach $10–14 trillion by 2050.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function TotalCostSince2001Page() {
  const totalOCO = yearByYearSpending.reduce((s, y) => s + y.amount, 0)

  return (
    <main className="min-h-screen bg-white">
      <FaqJsonLd faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Cost of War', href: '/cost-of-war' }, { label: 'Total Cost Since 2001' }]} />
        <ShareButtons title="Total Cost of US Wars Since 2001 — $8+ Trillion" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            Total Cost of US Wars Since 2001
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Since September 11, 2001, the United States has spent more than{' '}
            <strong className="text-[#991b1b]">$8 trillion</strong> on wars and military operations
            across at least 85 countries. That&apos;s over{' '}
            <strong className="text-[#991b1b]">$100,000 per American household</strong> when projected
            through 2050 — for wars that most Americans have stopped thinking about.
          </p>
        </header>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Total Cost (est.)', value: '$8T+' },
            { label: 'US Deaths', value: '7,074' },
            { label: 'Per Household', value: '$50K+' },
            { label: 'Countries Involved', value: '85+' },
          ].map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* The $8 Trillion Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Where the $8 Trillion Went
          </h2>
          <p className="text-stone-700 mb-6">
            The headline number — $8 trillion — is not a single line item. It&apos;s spread across multiple
            government agencies, hidden in baseline budget increases, and compounding through decades of debt.
            The Pentagon&apos;s own accounting is so poor that it has{' '}
            <Link href="/pentagon-audit" className="text-[#991b1b] hover:underline">failed every audit since 2018</Link>.
            Here&apos;s what we can trace:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Cost Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount</th>
                  <th className="text-left py-2 font-semibold text-stone-800">Timeframe</th>
                  <th className="text-left py-2 font-semibold text-stone-800">Status</th>
                </tr>
              </thead>
              <tbody>
                {hiddenAndFutureCosts.map((c) => (
                  <tr key={c.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{c.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b]">{c.amount}</td>
                    <td className="py-2 text-stone-500 text-xs">{c.timeframe}</td>
                    <td className="py-2 text-stone-500 text-xs">{c.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone-500">
            Sources: Brown University Costs of War Project, Congressional Research Service, DOD Comptroller, DHS Budget History.
          </p>
        </section>

        {/* Conflict-by-Conflict */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Cost by Conflict
          </h2>
          <p className="text-stone-700 mb-6">
            The War on Terror is not one war — it&apos;s a constellation of military operations spanning
            multiple continents. Afghanistan and Iraq account for the bulk of spending, but significant costs
            have accumulated across Syria, Africa, Pakistan, Yemen, and Somalia.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Conflict</th>
                  <th className="text-right py-2 font-semibold text-stone-800">DOD</th>
                  <th className="text-right py-2 font-semibold text-stone-800">State Dept</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Vet Care</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Total</th>
                  <th className="text-right py-2 font-semibold text-stone-800">US Deaths</th>
                </tr>
              </thead>
              <tbody>
                {directWarCosts.map((c) => (
                  <tr key={c.conflict} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700 text-xs">{c.conflict}</td>
                    <td className="py-2 text-right font-mono text-stone-600">${c.dodBudget}B</td>
                    <td className="py-2 text-right font-mono text-stone-600">${c.stateDept}B</td>
                    <td className="py-2 text-right font-mono text-stone-600">${c.medicalVet}B</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">${c.total}B</td>
                    <td className="py-2 text-right font-mono text-stone-600">{c.deaths.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-stone-300 font-semibold">
                  <td className="py-2 text-stone-800">Total (Direct)</td>
                  <td className="py-2 text-right font-mono text-stone-700">
                    ${directWarCosts.reduce((s, c) => s + c.dodBudget, 0).toLocaleString()}B
                  </td>
                  <td className="py-2 text-right font-mono text-stone-700">
                    ${directWarCosts.reduce((s, c) => s + c.stateDept, 0)}B
                  </td>
                  <td className="py-2 text-right font-mono text-stone-700">
                    ${directWarCosts.reduce((s, c) => s + c.medicalVet, 0)}B
                  </td>
                  <td className="py-2 text-right font-mono text-[#991b1b]">
                    ${(directWarCosts.reduce((s, c) => s + c.total, 0) / 1000).toFixed(1)}T
                  </td>
                  <td className="py-2 text-right font-mono text-stone-700">
                    {directWarCosts.reduce((s, c) => s + c.deaths, 0).toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone-500">
            All figures in billions USD. Includes direct appropriations and estimated veteran medical costs.
            Source: CRS, DOD Comptroller, Costs of War Project.
          </p>
        </section>

        {/* Year-by-Year */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Year-by-Year War Spending (2001–2024)
          </h2>
          <p className="text-stone-700 mb-6">
            Overseas Contingency Operations (OCO) — the Pentagon&apos;s special war budget — peaked in 2008
            at $186 billion during the Iraq surge. Total OCO spending from 2001 to 2024: approximately{' '}
            <strong className="text-[#991b1b]">${(totalOCO / 1000).toFixed(1)} trillion</strong>. And that&apos;s
            just the directly labeled war spending — it excludes base budget increases, homeland security, and interest.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Year</th>
                  <th className="text-right py-2 font-semibold text-stone-800">OCO Spending</th>
                  <th className="text-left py-2 font-semibold text-stone-800 pl-4">Context</th>
                </tr>
              </thead>
              <tbody>
                {yearByYearSpending.map((y) => (
                  <tr key={y.year} className="border-b border-stone-100">
                    <td className="py-1.5 text-stone-700 font-mono">{y.year}</td>
                    <td className="py-1.5 text-right font-mono text-[#991b1b]">${y.amount}B</td>
                    <td className="py-1.5 text-stone-500 text-xs pl-4">{y.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Human Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Human Cost
          </h2>
          <p className="text-stone-700 mb-6">
            Behind every dollar is a human being. The post-9/11 wars have killed over 7,000 US service members,
            wounded 53,000 more, and contributed to an estimated 30,000+ veteran suicides. The toll on civilians
            in war zones is staggering — up to 929,000 deaths, with 38 million people displaced from their homes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {humanCost.map((h) => (
              <div key={h.metric} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="text-lg font-bold text-[#991b1b]">{h.value}</div>
                <div className="text-sm font-semibold text-stone-700">{h.metric}</div>
                <div className="text-xs text-stone-500 mt-1">{h.note}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone-500">
            Sources: DOD Casualty Status Report, Brown University Costs of War Project, VA statistics.
          </p>
        </section>

        {/* Cost Per Household */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            What It Costs Your Household
          </h2>
          <p className="text-stone-700 mb-6">
            These aren&apos;t abstract numbers. They come from your paycheck, your children&apos;s future tax
            obligations, and the national debt your grandchildren will service. Here&apos;s what the post-9/11
            wars cost at the household level:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Description</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount</th>
                  <th className="text-left py-2 font-semibold text-stone-800 pl-4">How Calculated</th>
                </tr>
              </thead>
              <tbody>
                {perHousehold.map((p) => (
                  <tr key={p.description} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{p.description}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">{p.amount}</td>
                    <td className="py-2 text-stone-500 text-xs pl-4">{p.calculation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Interest on War Debt */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Interest on War Debt: The Cost That Never Stops
          </h2>
          <p className="text-stone-700 mb-6">
            Here&apos;s what makes post-9/11 war costs unique in American history: they were almost entirely
            financed by borrowing. No war bonds. No tax increases. In fact, Congress{' '}
            <em>cut</em> taxes in 2001 and 2003 while launching two major wars — something that had never
            happened before. The result is a compounding debt bomb:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Period</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Interest Paid</th>
                  <th className="text-right py-2 font-semibold text-stone-800">War Debt</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Avg Rate</th>
                </tr>
              </thead>
              <tbody>
                {warDebtTimeline.map((d) => (
                  <tr key={d.period} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{d.period}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b]">{d.interestPaid}</td>
                    <td className="py-2 text-right font-mono text-stone-600">{d.cumulativeDebt}</td>
                    <td className="py-2 text-right font-mono text-stone-600">{d.avgRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 mb-4">
            By 2050, interest alone could exceed{' '}
            <strong className="text-[#991b1b]">$3 trillion</strong> — more than the original direct
            war spending. The wars may be &quot;over,&quot; but the bills keep coming.
          </p>
        </section>

        {/* Veteran Care */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Veteran Care: The Largest Hidden Cost
          </h2>
          <p className="text-stone-700 mb-4">
            Veteran medical and disability care is the single largest &quot;hidden&quot; cost of the post-9/11 wars.
            The pattern is well-established from prior conflicts: veteran care costs peak 30–40 years after
            a war ends. For Vietnam, peak costs didn&apos;t arrive until the 2010s. For the War on Terror,
            that peak will come in the <strong>2040s and 2050s</strong>.
          </p>
          <ul className="list-disc pl-6 text-stone-700 space-y-2 mb-4">
            <li><strong>$465 billion</strong> already spent on post-9/11 veteran medical and disability care</li>
            <li><strong>$1.7–2.2 trillion</strong> in projected future costs through 2050</li>
            <li><strong>3.5 million</strong> veterans covered under the PACT Act (2022) for burn pit exposure</li>
            <li><strong>450,000+</strong> traumatic brain injuries — the &quot;signature wound&quot; of these wars</li>
            <li><strong>500,000+</strong> diagnosed PTSD cases; actual numbers likely far higher</li>
            <li>VA budget has grown from <strong>$48 billion (2001)</strong> to <strong>$325 billion (2025)</strong></li>
          </ul>
          <p className="text-stone-700">
            The youngest veterans of the Afghanistan war are in their early 20s. Their healthcare costs
            will extend into the 2080s.
          </p>
        </section>

        {/* Opportunity Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            What $8 Trillion Could Have Bought
          </h2>
          <p className="text-stone-700 mb-6">
            Numbers this large are hard to comprehend. Here&apos;s what the same money could have
            funded — not instead of national security, but to illustrate the sheer scale:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Alternative Investment</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Cost</th>
                  <th className="text-left py-2 font-semibold text-stone-800 pl-4">War Equivalent</th>
                </tr>
              </thead>
              <tbody>
                {opportunityCost.map((o) => (
                  <tr key={o.item} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{o.item}</td>
                    <td className="py-2 text-right font-mono text-stone-600 whitespace-nowrap">{o.cost}</td>
                    <td className="py-2 text-stone-500 text-xs pl-4">{o.warEquiv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How the Money Was Hidden */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            How War Spending Was Hidden From the Public
          </h2>
          <p className="text-stone-700 mb-4">
            The true cost of post-9/11 wars was systematically obscured through several mechanisms:
          </p>
          <div className="space-y-4 mb-4">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-1">Overseas Contingency Operations (OCO)</h3>
              <p className="text-sm text-stone-600">
                War spending was classified as &quot;emergency&quot; supplemental funding, exempt from budget caps.
                This allowed Congress to spend on wars without counting it against the deficit — a budgetary
                sleight of hand that lasted 20 years. The OCO slush fund was also used to hide non-war Pentagon
                spending that couldn&apos;t fit under sequestration caps.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-1">No Tax Increase</h3>
              <p className="text-sm text-stone-600">
                Every previous major American war included tax increases to help finance the effort. After 9/11,
                taxes were <em>cut</em>. With no direct financial sacrifice asked of citizens, there was no
                natural political check on war spending. Voters didn&apos;t feel the cost in real time.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-1">Deferred Veteran Costs</h3>
              <p className="text-sm text-stone-600">
                When wars were authorized, no one budgeted for decades of veteran healthcare. These costs were
                deferred to future Congresses and future taxpayers. The 2022 PACT Act alone added $280 billion
                in new obligations — 20 years after the wars began.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-1">Base Budget Inflation</h3>
              <p className="text-sm text-stone-600">
                The War on Terror permanently inflated the Pentagon&apos;s baseline budget. Pre-9/11, the defense
                budget was ~$300 billion. It rose to $886 billion by 2024 and has never returned to pre-war
                levels. These increases are not counted as &quot;war costs&quot; but are a direct consequence of them.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison to Other Wars */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Post-9/11 Wars vs. Every Other American War
          </h2>
          <p className="text-stone-700 mb-4">
            In inflation-adjusted terms, the post-9/11 wars are the most expensive in American history
            after World War II. But unlike WWII — which lasted 4 years and involved clear existential stakes —
            the War on Terror has stretched across 23 years with ambiguous objectives and no clear endpoint.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">War</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Cost (2024$)</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Duration</th>
                  <th className="text-right py-2 font-semibold text-stone-800">US Deaths</th>
                  <th className="text-right py-2 font-semibold text-stone-800">$/Year</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { war: 'World War II', cost: '$4.7T', duration: '4 years', deaths: '405,399', perYear: '$1.2T/yr' },
                  { war: 'War on Terror', cost: '$8T+', duration: '23+ years', deaths: '7,074', perYear: '$350B/yr' },
                  { war: 'Vietnam War', cost: '$843B', duration: '20 years', deaths: '58,220', perYear: '$42B/yr' },
                  { war: 'Korean War', cost: '$341B', duration: '3 years', deaths: '36,574', perYear: '$114B/yr' },
                  { war: 'World War I', cost: '$334B', duration: '2 years', deaths: '116,516', perYear: '$167B/yr' },
                  { war: 'Civil War', cost: '$80B', duration: '4 years', deaths: '750,000', perYear: '$20B/yr' },
                ].map((w) => (
                  <tr key={w.war} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{w.war}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b]">{w.cost}</td>
                    <td className="py-2 text-right font-mono text-stone-600">{w.duration}</td>
                    <td className="py-2 text-right font-mono text-stone-600">{w.deaths}</td>
                    <td className="py-2 text-right font-mono text-stone-600">{w.perYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-700">
            The War on Terror costs less per year than WWII but has gone on <strong>6x longer</strong> and
            has been financed entirely by debt, making its total economic impact potentially larger when
            interest costs are included.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-stone-200 pb-4">
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/cost-of-war', label: 'Cost of War — Every Conflict Since 1776' },
              { href: '/cost-of-war-on-terror', label: 'Cost of the War on Terror' },
              { href: '/how-much-did-the-iraq-war-cost', label: 'How Much Did the Iraq War Cost?' },
              { href: '/how-much-did-the-afghanistan-war-cost', label: 'How Much Did the Afghanistan War Cost?' },
              { href: '/opportunity-cost', label: 'What $8 Trillion Could Have Built' },
              { href: '/pentagon-audit', label: 'The Pentagon Has Never Passed an Audit' },
              { href: '/veterans', label: 'Veterans — The Long-Term Cost' },
              { href: '/cost-of-war-by-president', label: 'War Spending by President' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-stone-50 hover:bg-stone-100 rounded-lg p-3 border border-stone-200 text-stone-700 hover:text-[#991b1b] transition-colors text-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Sources</h2>
          <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
            <li>Brown University Watson Institute — Costs of War Project (2024 update)</li>
            <li>Congressional Research Service — &quot;Costs of Major U.S. Wars&quot; (2024)</li>
            <li>Department of Defense Comptroller — Overseas Contingency Operations Budget</li>
            <li>Stockholm International Peace Research Institute (SIPRI) Military Expenditure Database</li>
            <li>Department of Veterans Affairs — Budget and expenditure reports</li>
            <li>Government Accountability Office (GAO) — Pentagon financial audit reports</li>
            <li>National Priorities Project — Federal spending analysis</li>
            <li>U.S. Census Bureau — Household statistics (131 million households, 2024)</li>
          </ul>
        </section>

        <BackToTop />
      </div>
    </main>
  )
}
