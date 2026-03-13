import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Top Defense Contractors — Who Profits from War',
  description: 'The top 5 defense contractors receive hundreds of billions in government contracts. Lockheed Martin, Boeing, Raytheon — the military-industrial complex exposed.',
  alternates: { canonical: 'https://www.warcosts.org/contractors' },
}

const contractors = [
  {
    name: 'Lockheed Martin', revenue: '$65.4B', govPct: 74, contracts: '$75B+',
    products: 'F-35, F-22, THAAD, Javelin missiles, Sikorsky helicopters, satellite systems',
    employees: '122,000', lobbying: '$12.5M/yr', revolvingDoor: 645,
    biggestProgram: 'F-35 Joint Strike Fighter — $1.7 trillion lifetime cost',
    ceoComp: '$25.2M', stockReturn: '+1,236% since 9/11',
    note: 'World\'s largest defense contractor. Receives more federal contract dollars than any company on earth. CEO compensation: $25M/yr. Has employed more former Pentagon officials than any other contractor.',
    details: 'In 2023, Lockheed received $46B in direct DoD contracts — roughly $126M per day. The company spent $12.5M on lobbying and contributed $6.2M to political campaigns. 74% of its revenue comes directly from US government contracts. F-35 parts are manufactured in 45 states and 375 congressional districts — by design, ensuring every member of Congress has a financial interest in the program.'
  },
  {
    name: 'RTX (Raytheon)', revenue: '$68.9B', govPct: 52, contracts: '$36B+',
    products: 'Patriot missiles, Tomahawk cruise missiles, Stinger MANPADS, radar systems, Pratt & Whitney engines',
    employees: '185,000', lobbying: '$8.7M/yr', revolvingDoor: 280,
    biggestProgram: 'Patriot Air Defense System — deployed in 18 countries',
    ceoComp: '$22.4M', stockReturn: '+800% since 9/11',
    note: 'Merged with United Technologies in 2020. Former Secretary of Defense Lloyd Austin sat on Raytheon\'s board before joining the Biden administration. Makes the missiles that Saudi Arabia drops on Yemen.',
    details: 'Raytheon weapons have been identified in strikes on Yemeni civilians, including a 2018 school bus bombing that killed 40 children. The bomb was a Raytheon MK-82. The company\'s stock price rose 60% during the first year of the Ukraine war. Former CEO Thomas Kennedy earned $26.4M in 2019 while the company\'s products were killing children in Yemen.'
  },
  {
    name: 'Boeing', revenue: '$66.5B', govPct: 37, contracts: '$28B+',
    products: 'F/A-18, F-15EX, KC-46 tanker, Apache helicopters, P-8 Poseidon, satellites',
    employees: '171,000', lobbying: '$11.8M/yr', revolvingDoor: 310,
    biggestProgram: 'KC-46 Pegasus Tanker — $44B program, years behind schedule',
    ceoComp: '$22.6M', stockReturn: '+290% since 9/11',
    note: 'Also makes commercial planes that keep losing doors mid-flight. The KC-46 tanker is years behind schedule and billions over budget. Boeing merged with McDonnell Douglas in 1997 — critics say the merger\'s cost-cutting culture led to both military and civilian quality failures.',
    details: 'Boeing has paid over $2.5B in fines and settlements for fraud, safety violations, and contract disputes since 2006. The company spent $11.8M on lobbying in 2023 and $7.3M on campaign contributions. Quality control issues have plagued both its commercial and military divisions. Two 737 MAX crashes killed 346 people due to Boeing\'s cost-cutting culture.'
  },
  {
    name: 'Northrop Grumman', revenue: '$39.3B', govPct: 83, contracts: '$32B+',
    products: 'B-21 Raider stealth bomber, Global Hawk drone, James Webb Telescope, cyber warfare systems',
    employees: '100,000', lobbying: '$13.1M/yr', revolvingDoor: 195,
    biggestProgram: 'B-21 Raider — next-gen stealth bomber, ~$750M per plane',
    ceoComp: '$23.6M', stockReturn: '+1,450% since 9/11',
    note: '83% of revenue from government — essentially a government entity with private profits. Built the B-2 stealth bomber at $2.1B each (only 21 built). Now building the B-21 at an estimated $750M each.',
    details: 'Northrop is the most government-dependent of the Big Five. The B-2 program\'s original estimate was $35B for 132 planes; final cost was $45B for 21 planes — a 600% per-unit cost overrun. The company spent $13.1M on lobbying in 2023, the most of any defense contractor. Its stock has returned 1,450% since 9/11 — turning $10,000 into $155,000.'
  },
  {
    name: 'General Dynamics', revenue: '$42.3B', govPct: 62, contracts: '$26B+',
    products: 'Virginia-class submarines, Abrams tanks, Stryker vehicles, Gulfstream jets, IT systems',
    employees: '106,000', lobbying: '$9.2M/yr', revolvingDoor: 175,
    biggestProgram: 'Columbia-class Nuclear Submarine — $128B program',
    ceoComp: '$22.3M', stockReturn: '+1,100% since 9/11',
    note: 'Builds nuclear submarines at $3.4B each and Abrams tanks at $10M each. Also owns Gulfstream — so they profit from war AND sell luxury jets to the executives who profit from war.',
    details: 'The Columbia-class submarine program is the Navy\'s #1 priority at $128B for 12 boats. General Dynamics also runs a massive IT business handling classified government systems. CEO compensation: $22M/yr. The company that builds weapons of mass destruction also makes the luxury jets that defense executives fly to lobbying meetings.'
  },
]

const additionalContractors = [
  { name: 'L3Harris Technologies', revenue: '$18.4B', focus: 'Communications, surveillance, electronic warfare', note: 'Formed from 2019 merger. Major supplier of ISR (intelligence, surveillance, reconnaissance) systems.' },
  { name: 'Leidos', revenue: '$15.4B', focus: 'IT, cybersecurity, intelligence analysis', note: 'Formerly SAIC. Largest IT services provider to the US government.' },
  { name: 'Huntington Ingalls', revenue: '$11.4B', focus: 'Aircraft carriers ($13B each), submarines, destroyers', note: 'The only company that builds US aircraft carriers. Monopoly supplier.' },
  { name: 'BAE Systems (US)', revenue: '$26.4B', focus: 'Armored vehicles, electronic warfare, munitions', note: 'UK-based but major US defense contractor. Makes the Bradley Fighting Vehicle.' },
  { name: 'SAIC', revenue: '$7.4B', focus: 'IT services, training, simulation', note: 'Major intelligence community contractor. Provides analysis services across multiple agencies.' },
]

const fraudCases = [
  { company: 'Halliburton/KBR', amount: '$40B+ in Iraq contracts', details: 'Dick Cheney was Halliburton\'s CEO from 1995-2000, then became Vice President and helped start the Iraq War. Halliburton\'s subsidiary KBR received $39.5B in Iraq contracts — many no-bid or cost-plus. KBR charged $45 per case of soda. Overcharged $61M for fuel. Billed $100M for meals never served. KBR\'s shoddy electrical work in Iraq electrocuted at least 18 US soldiers in showers and pools due to faulty wiring.' },
  { company: 'Boeing', amount: '$2.5B in fines/settlements', details: 'Paid $615M to settle fraud charges (2006). Agreed to $2.5B settlement over 737 MAX crashes that killed 346 people (2021). Charged with defrauding the government on multiple military contracts. KC-46 tanker billions over budget.' },
  { company: 'Lockheed Martin', amount: '$200M+ settlements', details: 'Paid $10.5M for overcharging on contracts (2008). Settled false claims cases repeatedly. F-35 program has over 800 unresolved defects despite $400B+ in spending.' },
  { company: 'Blackwater/Academi', amount: 'Multiple criminal cases', details: 'Blackwater contractors massacred 17 Iraqi civilians at Nisour Square in 2007. Four were convicted of murder (later pardoned by Trump). The company rebranded twice to escape its reputation. Founder Erik Prince now provides mercenary services to the UAE and China.' },
  { company: 'DynCorp', amount: 'Trafficking allegations', details: 'Employees were involved in sex trafficking in Bosnia (1999). Employees ran a sex slave ring involving minors in Afghanistan. The company continued receiving billions in government contracts. Whistleblower Kathryn Bolkovac was fired for reporting the crimes.' },
  { company: 'CACI International', amount: 'Abu Ghraib involvement', details: 'CACI contractors were among those who tortured prisoners at Abu Ghraib, Iraq. Despite documented involvement in the abuse, CACI continues to receive government contracts worth billions.' },
]

const revolvingDoorExamples = [
  { name: 'Lloyd Austin', from: 'Raytheon Board of Directors', to: 'Secretary of Defense (Biden)', note: 'Went from a $1.4M/yr Raytheon board position to overseeing Raytheon\'s largest customer. Received a waiver from the 7-year cooling-off requirement.' },
  { name: 'Mark Esper', from: 'Raytheon VP, Government Relations', to: 'Secretary of Defense (Trump)', note: 'Spent 7 years as Raytheon\'s top lobbyist before becoming Defense Secretary. Now works at private equity firms with defense investments.' },
  { name: 'James Mattis', from: 'General Dynamics Board', to: 'Secretary of Defense (Trump)', note: 'Also sat on the boards of other defense companies. Returned to private sector after leaving government.' },
  { name: 'Patrick Shanahan', from: 'Boeing VP (31 years)', to: 'Acting Secretary of Defense (Trump)', note: 'Investigated for using his position to promote Boeing. Resigned before confirmation hearing. Returned to the private sector.' },
  { name: 'Ash Carter', from: 'Secretary of Defense (Obama)', to: 'Board roles at defense firms, MIT consulting', note: 'Wrote the nuclear posture review while in government; advised nuclear weapons contractors afterward.' },
  { name: 'Leon Panetta', from: 'CIA Director / Sec Defense (Obama)', to: 'Consulting for defense companies', note: 'Founded a consulting firm that advises defense contractors on government procurement.' },
  { name: 'Mike Rogers', from: 'House Intelligence Committee Chair', to: 'Defense contractor boards, CNN commentator', note: 'Advocated for surveillance expansion while in Congress; profits from surveillance industry after.' },
]

const contractorCasualties = [
  { war: 'Iraq (2003-2011)', deaths: '~3,500', injured: '~50,000+', note: 'At peak, more contractors than US troops in Iraq. Their deaths are tracked by Dept of Labor, not DoD.' },
  { war: 'Afghanistan (2001-2021)', deaths: '~4,000', injured: '~40,000+', note: 'Contractor deaths exceeded military deaths in several years. Most were non-US nationals.' },
  { war: 'Other operations', deaths: '~500+', injured: 'Unknown', note: 'Contractors killed in Syria, Africa, and elsewhere are largely untracked.' },
]

export default function ContractorsPage() {
  const stats = loadData('stats.json')

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Defense Contractors' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Who Profits from War</h1>
      <p className="text-muted mb-6 max-w-3xl">These five companies receive over $200 billion per year in government defense contracts. Their profits depend on conflict. Their lobbyists write the laws. Their former executives run the Pentagon. Their stock prices soar when wars begin. This is the military-industrial complex that Eisenhower warned about — and it has won.</p>
      <ShareButtons title="Top Defense Contractors — Who Profits from War" />

      {/* AI Overview */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-blue-900 mb-3">🧠 Key Insights</h3>
        <ul className="space-y-2 text-sm text-blue-900">
          <li>• <strong>Defense stocks returned 800–1,450% since 9/11 vs. ~450% for the S&P 500</strong> — $10,000 invested in Northrop Grumman on September 10, 2001 would be worth $155,000 today. War is the best investment in America.</li>
          <li>• <strong>Defense CEOs earn ~$23M/yr — roughly 400× what a deployed soldier earns</strong> — while 80% of retiring 3- and 4-star generals go to work for the contractors they oversaw.</li>
          <li>• <strong>The F-35 has parts in 375 congressional districts</strong> — by design, ensuring political invincibility. The $1.7 trillion lifetime program has 800+ unresolved defects after 25 years of development.</li>
          <li>• <strong>Cost-plus contracts create a perverse incentive: the more a contractor spends, the more profit they make</strong> — explaining why virtually every major defense program goes over budget (B-2: 600% per-unit overrun).</li>
          <li>• <strong>Halliburton&apos;s CEO became Vice President, then his company got $39.5B in no-bid contracts</strong> in the war he helped start — KBR&apos;s shoddy work electrocuted 18 US soldiers in Iraq showers.</li>
        </ul>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8">
        {[
          { val: fmtMoney(stats.pentagonContractors2020_2024), label: 'Contractor Spending (2020-2024)' },
          { val: fmt(stats.revolvingDoorOfficials) + '+', label: 'Revolving Door Officials' },
          { val: fmtMoney(stats.defenseLobbying2023), label: 'Defense Lobbying (2023)' },
          { val: fmtMoney(stats.campaignContributions), label: 'Campaign Contributions' },
          { val: fmtMoney(stats.f35LifetimeCost), label: 'F-35 Lifetime Cost' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-4 shadow-sm border text-center">
            <p className="text-xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Eisenhower Quote */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise of misplaced power exists and will persist.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— President Dwight D. Eisenhower, Farewell Address, January 17, 1961</p>
      </div>

      {/* Stock Performance */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">📈 War Is Good for Business</h2>
        <p className="text-sm text-stone-600 mb-4">If you had invested $10,000 in each of these companies on September 10, 2001 — the day before 9/11 — here&apos;s what you&apos;d have today:</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {contractors.map(c => (
            <div key={c.name} className="bg-white rounded-lg p-3 border">
              <p className="font-bold text-sm">{c.name.split(' ')[0]}</p>
              <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{c.stockReturn}</p>
              <p className="text-xs text-muted">since 9/11/2001</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-600 mt-4 text-center">During the same period, the S&P 500 returned ~450%. Soldier pay increased ~80% (barely above inflation). CEO pay at these firms averages <strong>$23M/yr — roughly 400× what a deployed soldier earns</strong>.</p>
      </div>

      {/* Contractor Profiles */}
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Big Five</h2>
      <div className="space-y-8">
        {contractors.map((c, i) => (
          <div key={c.name} className="bg-white rounded-lg border p-6 shadow-sm">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">#{i+1}</span>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{c.name}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4 text-sm">
              <div><p className="font-bold text-primary">{c.revenue}</p><p className="text-muted">Annual Revenue</p></div>
              <div><p className="font-bold text-primary">{c.govPct}%</p><p className="text-muted">From Government</p></div>
              <div><p className="font-bold text-primary">{c.contracts}</p><p className="text-muted">Gov Contracts</p></div>
              <div><p className="font-bold text-primary">{c.ceoComp}</p><p className="text-muted">CEO Compensation</p></div>
              <div><p className="font-bold text-primary">{c.employees}</p><p className="text-muted">Employees</p></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-sm">
              <div><p className="font-bold text-accent">{c.lobbying}</p><p className="text-muted">Lobbying Spend</p></div>
              <div><p className="font-bold text-accent">{c.revolvingDoor}</p><p className="text-muted">Revolving Door Officials</p></div>
              <div className="col-span-2 md:col-span-1"><p className="font-bold text-accent text-xs">{c.biggestProgram}</p><p className="text-muted">Biggest Program</p></div>
            </div>
            <p className="text-sm"><strong>Products:</strong> {c.products}</p>
            <p className="text-muted text-sm mt-2">{c.note}</p>
            <p className="text-muted text-sm mt-2">{c.details}</p>
            <Link href={`/contractors/${c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '').replace('rtx-raytheon-', 'rtx-corporation')}`} className="inline-block mt-3 text-sm text-primary hover:underline font-medium">
              View full profile with USAspending data →
            </Link>
          </div>
        ))}
      </div>

      {/* Additional Contractors */}
      <div className="bg-stone-50 rounded-xl p-8 mt-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Next Five</h2>
        <div className="space-y-3">
          {additionalContractors.map(c => (
            <div key={c.name} className="bg-white rounded-lg p-4 border">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">{c.name}</h4>
                  <p className="text-xs text-muted">{c.focus}</p>
                </div>
                <span className="text-primary font-bold">{c.revenue}</span>
              </div>
              <p className="text-xs text-stone-500 mt-1">{c.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cost-Plus Contracts */}
      <div className="bg-amber-50 rounded-xl p-8 mt-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">💰 Cost-Plus Contracts: The Perverse Incentive</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>Many defense contracts are structured as &ldquo;cost-plus&rdquo; — the government pays the contractor&apos;s actual costs plus a guaranteed profit percentage (typically 10-15%). This creates a perverse incentive: <strong>the more a contractor spends, the more profit they make</strong>.</p>
          <p>Under cost-plus, there is zero incentive to be efficient, innovate, or deliver on time. In fact, cost overruns <em>increase</em> profits. This explains why virtually every major defense program goes over budget:</p>
          <ul>
            <li><strong>F-35:</strong> Original estimate $233B → current $400B+ acquisition, $1.7T lifetime</li>
            <li><strong>B-2 bomber:</strong> Estimated $35B for 132 planes → actual $45B for 21 planes</li>
            <li><strong>Gerald Ford aircraft carrier:</strong> Estimated $10.5B → actual $13.3B+</li>
            <li><strong>KC-46 tanker:</strong> Years behind schedule, billions over budget</li>
            <li><strong>Littoral Combat Ship:</strong> $220M each → $500M+ each; many combat-ineffective</li>
            <li><strong>Zumwalt destroyer:</strong> Planned 32 ships at $1.3B each → built 3 at $8.2B each</li>
          </ul>
          <p>In the private sector, a company that delivered products years late and billions over budget would lose its contracts. In defense, it gets more contracts. Because there are only 2-3 companies capable of building most weapons systems, they have monopoly or oligopoly power. The Pentagon is a captive customer.</p>
        </div>
      </div>

      {/* Fraud Cases */}
      <div className="bg-red-50 rounded-xl p-8 mt-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">⚖️ Contractor Fraud & Scandals</h2>
        <div className="space-y-4">
          {fraudCases.map(f => (
            <div key={f.company} className="bg-white rounded-lg p-4 border">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-red-700">{f.company}</h4>
                <span className="text-xs text-red-600 font-semibold">{f.amount}</span>
              </div>
              <p className="text-sm text-stone-600">{f.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contractor Casualties */}
      <div className="bg-stone-50 rounded-xl p-8 mt-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">⚠️ Contractor Casualties: The Hidden Deaths</h2>
        <p className="text-sm text-muted mb-4">An estimated 8,000 private military contractors died in Iraq and Afghanistan — tracked by the Department of Labor, not the Pentagon, keeping them out of official casualty counts.</p>
        <div className="space-y-3">
          {contractorCasualties.map(c => (
            <div key={c.war} className="bg-white rounded-lg p-4 border">
              <h4 className="font-bold">{c.war}</h4>
              <div className="flex gap-4 text-sm mt-1">
                <span className="text-red-600 font-bold">{c.deaths} killed</span>
                <span className="text-amber-600 font-bold">{c.injured} injured</span>
              </div>
              <p className="text-xs text-muted mt-1">{c.note}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-4">Many contractor casualties were non-US nationals — Iraqis, Afghans, Filipinos, and others hired for dangerous work at a fraction of American wages. Their deaths receive no public attention and minimal compensation.</p>
      </div>

      {/* Revolving Door */}
      <div className="bg-stone-50 rounded-lg p-8 mt-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🚪 The Revolving Door: Names and Positions</h2>
        <div className="prose prose-stone max-w-none text-sm mb-6">
          <p>Over {fmt(stats.revolvingDoorOfficials)} former senior Pentagon officials and military officers now work as lobbyists, board members, or executives for defense contractors. Here are the most prominent examples:</p>
        </div>
        <div className="space-y-3">
          {revolvingDoorExamples.map(r => (
            <div key={r.name} className="bg-white rounded-lg p-4 border">
              <h4 className="font-bold">{r.name}</h4>
              <div className="flex gap-2 items-center text-sm mt-1">
                <span className="bg-stone-100 px-2 py-0.5 rounded text-xs">{r.from}</span>
                <span className="text-muted">→</span>
                <span className="bg-red-100 px-2 py-0.5 rounded text-xs text-red-700">{r.to}</span>
              </div>
              <p className="text-xs text-muted mt-2">{r.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 prose prose-stone max-w-none text-sm">
          <p>Between 2004 and 2008, <strong>80% of retiring three- and four-star generals</strong> went to work for defense contractors or consultants. The revolving door ensures that the people deciding how to spend defense dollars are the same people who profit from those decisions — before, during, or after their government service.</p>
          <p className="font-semibold">&ldquo;It is difficult to get a man to understand something when his salary depends upon his not understanding it.&rdquo; — Upton Sinclair</p>
        </div>
      </div>

      {/* F-35 Case Study */}
      <div className="bg-red-50 rounded-xl p-8 mt-12 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">🛩️ Case Study: The F-35 Joint Strike Fighter</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$1.7T</p>
            <p className="text-muted text-sm">Lifetime Program Cost</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">800+</p>
            <p className="text-muted text-sm">Unresolved Defects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">25+ Years</p>
            <p className="text-muted text-sm">In Development</p>
          </div>
        </div>
        <div className="prose prose-stone max-w-none text-sm">
          <p>The F-35 is the most expensive weapons program in human history. Originally estimated at $233B, the program has ballooned to over $400B in acquisition costs alone, with lifetime operating costs pushing the total to $1.7 trillion. The plane was supposed to be operational by 2012 — it&apos;s still not fully combat-ready.</p>
          <p>A 2021 Pentagon testing office report identified over 800 unresolved defects. The plane&apos;s software alone required 8.6 million lines of code — more than the Space Shuttle, an aircraft carrier, and an Aegis destroyer combined. Yet Lockheed Martin continues to receive tens of billions per year for the program.</p>
          <p>Why does it continue? Because Lockheed strategically placed F-35 suppliers in <strong>45 states and 375 congressional districts</strong>. Cutting the program means cutting jobs in nearly every member of Congress&apos;s district. This is the military-industrial complex by design.</p>
        </div>
      </div>

      {/* Pentagon Audit Failures */}
      <div className="bg-amber-50 rounded-xl p-8 mt-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">📊 The Pentagon Has Never Passed an Audit</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>The Department of Defense is the only federal agency that has <strong>never passed a comprehensive financial audit</strong>. It has failed every year since audits became mandatory in 2018 — seven consecutive failures.</p>
          <p>The Pentagon manages $3.8 trillion in assets and spends $886B per year, yet cannot account for where the money goes. In 2023, auditors found $1.9 trillion in accounting adjustments — entries that didn&apos;t match any transaction. The DoD Inspector General has identified over $220B in &ldquo;unsupported adjustments&rdquo; in a single year.</p>
          <p>If a private company failed an audit seven years in a row, its executives would face criminal prosecution. The Pentagon gets a budget increase. If a defense contractor defrauded the government, it would lose future contracts — except in defense, where fraud results in settlement payments that amount to a fraction of profits, and contracts continue uninterrupted.</p>
        </div>
      </div>

      {/* Did You Know? */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The top 5 defense contractors spend a combined <strong>$55M+ per year</strong> on lobbying Congress.</li>
          <li>• Defense contractor CEOs earn an average of <strong>$20-25M per year</strong> — roughly 400× what a deployed soldier earns.</li>
          <li>• The defense industry employs more <strong>registered lobbyists than there are members of Congress</strong>.</li>
          <li>• During the 20-year War on Terror, defense contractor stock prices increased by <strong>1,000%+</strong> while troop wages grew less than inflation.</li>
          <li>• Lockheed Martin&apos;s annual revenue exceeds the GDP of <strong>100+ countries</strong>.</li>
          <li>• Halliburton&apos;s CEO became Vice President, then his old company got <strong>$39.5B in no-bid contracts</strong> in the war he helped start.</li>
          <li>• KBR&apos;s shoddy electrical work <strong>electrocuted 18 US soldiers</strong> in Iraq showers and pools.</li>
          <li>• Blackwater contractors <strong>massacred 17 Iraqi civilians</strong> at Nisour Square. They were later pardoned by President Trump.</li>
          <li>• <strong>80% of retiring 3- and 4-star generals</strong> go to work for defense contractors.</li>
          <li>• The F-35 has parts in <strong>375 congressional districts</strong> — ensuring political invincibility.</li>
        </ul>
      </div>

      {/* Related Links */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/military-industrial-complex" className="text-red-800 hover:underline">→ The Military-Industrial Complex — deep dive</Link></li>
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Military Spending — $886B/yr and counting</Link></li>
          <li><Link href="/arms-sales" className="text-red-800 hover:underline">→ Arms Sales — who buys American weapons</Link></li>
          <li><Link href="/analysis/jobs-vs-war" className="text-red-800 hover:underline">→ Jobs vs. War — military spending creates the fewest jobs</Link></li>
          <li><Link href="/analysis/silicon-valley-pentagon" className="text-red-800 hover:underline">→ Silicon Valley & the Pentagon — the new military-tech complex</Link></li>
          <li><Link href="/weapons" className="text-red-800 hover:underline">→ Weapons Systems — $3T in programs, massive overruns</Link></li>
          <li><Link href="/contractors/directory" className="text-red-800 hover:underline">→ Full Contractor Directory — 62 companies with USAspending data</Link></li>
        </ul>
      </div>

      {/* Full USAspending Directory */}
      <div className="mt-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">All DoD Contractors (FY2024 USAspending Data)</h2>
        <p className="text-muted text-sm mb-4">Contract award data from <a href="https://www.usaspending.gov" target="_blank" rel="noopener noreferrer" className="underline">USAspending.gov</a>. Subsidiaries consolidated under parent companies.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead><tr className="bg-stone-100 text-left"><th className="p-2">#</th><th className="p-2">Contractor</th><th className="p-2 text-right">FY2024 Awards</th></tr></thead>
            <tbody>
              {(loadData('contractors.json') as { name: string; slug: string; amount: number; rank: number }[]).slice(0, 30).map(c => (
                <tr key={c.slug} className="border-t hover:bg-stone-50">
                  <td className="p-2 text-muted">{c.rank}</td>
                  <td className="p-2"><Link href={`/contractors/${c.slug}`} className="text-primary hover:underline font-medium">{c.name}</Link></td>
                  <td className="p-2 text-right font-mono">{fmtMoney(c.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center mt-4"><Link href="/contractors/directory" className="text-primary hover:underline font-medium">View all 62 contractors →</Link></p>
      </div>
    </div>
  )
}
