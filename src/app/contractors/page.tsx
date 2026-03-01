import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Top Defense Contractors — Who Profits from War | WarCosts',
  description: 'The top 5 defense contractors receive hundreds of billions in government contracts. Lockheed Martin, Boeing, Raytheon — the military-industrial complex exposed.',
}

const contractors = [
  {
    name: 'Lockheed Martin', revenue: '$65.4B', govPct: 74, contracts: '$75B+',
    products: 'F-35, F-22, THAAD, Javelin missiles, Sikorsky helicopters, satellite systems',
    employees: '122,000', lobbying: '$12.5M/yr', revolvingDoor: 645,
    biggestProgram: 'F-35 Joint Strike Fighter — $1.7 trillion lifetime cost',
    note: 'World\'s largest defense contractor. Receives more federal contract dollars than any company on earth. CEO compensation: $25M/yr. Has employed more former Pentagon officials than any other contractor.',
    details: 'In 2023, Lockheed received $46B in direct DoD contracts — roughly $126M per day. The company spent $12.5M on lobbying and contributed $6.2M to political campaigns. 74% of its revenue comes directly from US government contracts.'
  },
  {
    name: 'RTX (Raytheon)', revenue: '$68.9B', govPct: 52, contracts: '$36B+',
    products: 'Patriot missiles, Tomahawk cruise missiles, StingerMANPADS, radar systems, Pratt & Whitney engines',
    employees: '185,000', lobbying: '$8.7M/yr', revolvingDoor: 280,
    biggestProgram: 'Patriot Air Defense System — deployed in 18 countries',
    note: 'Merged with United Technologies in 2020. Former Secretary of Defense Lloyd Austin sat on Raytheon\'s board before joining the Biden administration. Makes the missiles that Saudi Arabia drops on Yemen.',
    details: 'Raytheon weapons have been identified in strikes on Yemeni civilians, including a 2018 school bus bombing that killed 40 children. The bomb was a Raytheon MK-82. The company\'s stock price rose 60% during the first year of the Ukraine war.'
  },
  {
    name: 'Boeing', revenue: '$66.5B', govPct: 37, contracts: '$28B+',
    products: 'F/A-18, F-15EX, KC-46 tanker, Apache helicopters, P-8 Poseidon, satellites',
    employees: '171,000', lobbying: '$11.8M/yr', revolvingDoor: 310,
    biggestProgram: 'KC-46 Pegasus Tanker — $44B program, years behind schedule',
    note: 'Also makes commercial planes that keep losing doors mid-flight. The KC-46 tanker is years behind schedule and billions over budget. Boeing merged with McDonnell Douglas in 1997 — critics say the merger\'s cost-cutting culture led to both military and civilian quality failures.',
    details: 'Boeing has paid over $2.5B in fines and settlements for fraud, safety violations, and contract disputes since 2006. The company spent $11.8M on lobbying in 2023 and $7.3M on campaign contributions. Quality control issues have plagued both its commercial and military divisions.'
  },
  {
    name: 'Northrop Grumman', revenue: '$39.3B', govPct: 83, contracts: '$32B+',
    products: 'B-21 Raider stealth bomber, Global Hawk drone, James Webb Telescope, cyber warfare systems',
    employees: '100,000', lobbying: '$13.1M/yr', revolvingDoor: 195,
    biggestProgram: 'B-21 Raider — next-gen stealth bomber, ~$750M per plane',
    note: '83% of revenue from government — essentially a government entity with private profits. Built the B-2 stealth bomber at $2.1B each (only 21 built). Now building the B-21 at an estimated $750M each.',
    details: 'Northrop is the most government-dependent of the Big Five. The B-2 program\'s original estimate was $35B for 132 planes; final cost was $45B for 21 planes — a 600% per-unit cost overrun. The company spent $13.1M on lobbying in 2023, the most of any defense contractor.'
  },
  {
    name: 'General Dynamics', revenue: '$42.3B', govPct: 62, contracts: '$26B+',
    products: 'Virginia-class submarines, Abrams tanks, Stryker vehicles, Gulfstream jets, IT systems',
    employees: '106,000', lobbying: '$9.2M/yr', revolvingDoor: 175,
    biggestProgram: 'Columbia-class Nuclear Submarine — $128B program',
    note: 'Builds nuclear submarines at $3.4B each and Abrams tanks at $10M each. Also owns Gulfstream — so they profit from war AND sell luxury jets to the executives who profit from war.',
    details: 'The Columbia-class submarine program is the Navy\'s #1 priority at $128B for 12 boats. General Dynamics also runs a massive IT business handling classified government systems. CEO compensation: $22M/yr.'
  },
]

export default function ContractorsPage() {
  const stats = loadData('stats.json')

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Defense Contractors' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Who Profits from War</h1>
      <p className="text-muted mb-6 max-w-3xl">These five companies receive over $200 billion per year in government defense contracts. Their profits depend on conflict. Their lobbyists write the laws. Their former executives run the Pentagon.</p>
      <ShareButtons title="Top Defense Contractors — Who Profits from War" />

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
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise of misplaced power exists and will persist.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— President Dwight D. Eisenhower, Farewell Address, January 17, 1961</p>
      </div>

      {/* Contractor Profiles */}
      <div className="space-y-8">
        {contractors.map((c, i) => (
          <div key={c.name} className="bg-white rounded-lg border p-6 shadow-sm">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">#{i+1}</span>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{c.name}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
              <div><p className="font-bold text-primary">{c.revenue}</p><p className="text-muted">Annual Revenue</p></div>
              <div><p className="font-bold text-primary">{c.govPct}%</p><p className="text-muted">From Government</p></div>
              <div><p className="font-bold text-primary">{c.contracts}</p><p className="text-muted">Gov Contracts</p></div>
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
          </div>
        ))}
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
          <p>If a private company failed an audit seven years in a row, its executives would face criminal prosecution. The Pentagon gets a budget increase.</p>
        </div>
      </div>

      {/* Revolving Door */}
      <div className="bg-stone-50 rounded-lg p-8 mt-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🚪 The Revolving Door</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>Over {fmt(stats.revolvingDoorOfficials)} former senior Pentagon officials and military officers now work as lobbyists, board members, or executives for defense contractors. The flow goes both ways — defense industry executives regularly take senior positions in the Defense Department, then return to the private sector.</p>
          <p>Between 2004 and 2008, <strong>80% of retiring three- and four-star generals</strong> went to work for defense contractors or consultants. Former Secretary of Defense Lloyd Austin sat on Raytheon&apos;s board. Former Secretary Mark Esper was a Raytheon lobbyist. Former Secretary James Mattis sat on General Dynamics&apos; board.</p>
          <p>This revolving door ensures that the people deciding how to spend defense dollars are the same people who profit from those decisions — before, during, or after their government service.</p>
          <p className="font-semibold mt-4">&ldquo;It is difficult to get a man to understand something when his salary depends upon his not understanding it.&rdquo; — Upton Sinclair</p>
        </div>
      </div>

      {/* Did You Know? */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The top 5 defense contractors spend a combined <strong>$55M+ per year</strong> on lobbying Congress.</li>
          <li>• Defense contractor CEOs earn an average of <strong>$20-25M per year</strong> — roughly 300× what a deployed soldier earns.</li>
          <li>• The defense industry employs more <strong>registered lobbyists than there are members of Congress</strong>.</li>
          <li>• During the 20-year War on Terror, defense contractor stock prices increased by <strong>1,000%+</strong> while troop wages grew less than inflation.</li>
          <li>• Lockheed Martin&apos;s annual revenue exceeds the GDP of <strong>100+ countries</strong>.</li>
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
        </ul>
      </div>
    </div>
  )
}
