import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Defense Budget Breakdown — $886B in FY2024 | WarCosts',
  description: 'Where every dollar of the $886 billion defense budget goes. Top weapons programs, audit failures, the OCO slush fund, and how the budget process ensures it always grows.',
  keywords: ['defense budget', 'us defense budget', 'pentagon budget', 'military budget 2024', 'defense spending breakdown'],
  openGraph: {
    title: 'The Defense Budget — $886B in FY2024',
    description: 'Never audited. Always growing.',
    url: 'https://warcosts.org/defense-budget',
    type: 'article',
  },
}

const breakdown = [
  { label: 'Operations & Maintenance', amount: 290e9, pct: 33, desc: 'The largest category: day-to-day operations, fuel, supplies, maintenance, contractor services, base operations' },
  { label: 'Military Personnel', amount: 170e9, pct: 19, desc: 'Pay, housing, food, healthcare for 1.3M active duty, 800K reserves, and 750K civilians' },
  { label: 'Procurement', amount: 150e9, pct: 17, desc: 'Buying weapons, ships, aircraft, vehicles, ammunition, and equipment' },
  { label: 'Research & Development', amount: 140e9, pct: 16, desc: 'Next-gen weapons: hypersonics, directed energy, AI, space systems, quantum computing' },
  { label: 'Military Construction', amount: 15e9, pct: 2, desc: 'Building and maintaining bases, family housing, and facilities' },
  { label: 'Other / Classified', amount: 121e9, pct: 13, desc: 'Black budget, revolving funds, defense-wide activities, classified programs' },
]

const topWeapons = [
  { name: 'F-35 Joint Strike Fighter', cost: '$1.7 trillion', type: 'Lifetime', status: 'In production — plagued by delays and failures', contractor: 'Lockheed Martin' },
  { name: 'Columbia-class Submarine', cost: '$128 billion', type: '12 subs', status: 'Under construction — nuclear ballistic missile sub', contractor: 'General Dynamics' },
  { name: 'B-21 Raider Bomber', cost: '$80+ billion', type: '100 aircraft', status: 'In development — next-gen stealth bomber', contractor: 'Northrop Grumman' },
  { name: 'Gerald R. Ford Carrier', cost: '$13.3 billion each', type: 'Per ship', status: 'First deployed 2023 — $2.4B over budget', contractor: 'HII' },
  { name: 'Sentinel (GBSD) ICBM', cost: '$96+ billion', type: 'Program', status: '85% over initial estimate; under review', contractor: 'Northrop Grumman' },
  { name: 'Virginia-class Submarine', cost: '$3.4 billion each', type: 'Per sub', status: 'In production — attack submarine', contractor: 'GD / HII' },
  { name: 'CH-53K King Stallion', cost: '$36+ billion', type: 'Program', status: 'Delayed, over budget — heavy-lift helicopter', contractor: 'Sikorsky/Lockheed' },
  { name: 'DDG(X) Destroyer', cost: '$25+ billion', type: 'Program', status: 'In development — next-gen surface combatant', contractor: 'TBD' },
  { name: 'IVAS (HoloLens)', cost: '$22 billion', type: '10-year', status: 'AR combat goggles — soldiers report nausea', contractor: 'Microsoft' },
  { name: 'MQ-25 Stingray', cost: '$13+ billion', type: 'Program', status: 'Carrier-based refueling drone', contractor: 'Boeing' },
]

const auditTimeline = [
  { year: '1990', event: 'Congress requires all federal agencies to produce auditable financial statements' },
  { year: '1990–2017', event: 'Pentagon ignores the requirement for 27 years' },
  { year: '2018', event: 'First-ever DOD audit attempted — FAILS' },
  { year: '2019', event: 'Second audit — FAILS' },
  { year: '2020', event: 'Third audit — FAILS' },
  { year: '2021', event: 'Fourth audit — FAILS (only 7 of 27 sub-audits pass)' },
  { year: '2022', event: 'Fifth audit — FAILS' },
  { year: '2023', event: 'Sixth audit — FAILS (still cannot account for $3.8T in assets)' },
  { year: '2024', event: 'Seventh audit — FAILS. Pentagon says "full clean audit" may take until 2028' },
]

export default function DefenseBudgetPage() {
  const stats = loadData('stats.json')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Defense Budget Breakdown — $886 Billion in FY2024',
    description: 'Where every dollar goes in the US defense budget.',
    url: 'https://warcosts.org/defense-budget',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-01-01',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Defense Budget' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">The Defense Budget</h1>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        FY2024: <strong className="text-stone-800">{fmtMoney(stats.currentAnnualBudget)}</strong>.
        More than the next 10 countries combined. Never passed a full audit.
        Congress gives the Pentagon more than it asks for — every single year.
      </p>
      <ShareButtons title="Defense Budget — $886 Billion in FY2024" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {[
          { value: fmtMoney(stats.currentAnnualBudget), label: 'FY2024 Budget' },
          { value: '0', label: 'Audits Passed (Ever)' },
          { value: fmtMoney(stats.costPerDay), label: 'Cost Per Day' },
          { value: fmtMoney(stats.f35LifetimeCost), label: 'F-35 Lifetime Cost' },
          { value: `${stats.counterterrorCountries}`, label: 'Countries with CT operations' },
          { value: fmtMoney(stats.defenseContractorSpending), label: 'Contractor spending (2020–24)' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Budget breakdown bars */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-6">Where Every Dollar Goes</h2>
      <div className="space-y-5">
        {breakdown.map(b => (
          <div key={b.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">{b.label}</span>
              <span className="font-medium">{fmtMoney(b.amount)} ({b.pct}%)</span>
            </div>
            <div className="h-4 bg-stone-200 rounded-full overflow-hidden">
              <div className="h-full bg-red-800 rounded-full" style={{ width: `${b.pct}%` }} />
            </div>
            <p className="text-stone-500 text-xs mt-1">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The &ldquo;Operations & Maintenance&rdquo; category — the largest at $290 billion — includes
            <strong> contractor services</strong> that now exceed spending on military personnel. The Pentagon
            employs roughly as many private contractors as active-duty troops. These contractors cost 2–3x more
            per person than uniformed service members.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Top 10 Most Expensive Weapons Programs</h2>
        <p>
          The defense budget is dominated by a handful of enormous weapons programs, many of which are over
          budget, behind schedule, and plagued by performance issues. Yet they continue because the jobs and
          contracts are distributed across enough congressional districts to make cancellation politically impossible.
        </p>
      </div>

      <div className="space-y-4 my-8">
        {topWeapons.map((w, i) => (
          <div key={w.name} className="bg-white rounded-lg border p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-stone-400 text-sm font-mono">#{i + 1}</span>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">{w.name}</h3>
              </div>
              <p className="text-stone-500 text-sm">{w.status}</p>
              <p className="text-stone-400 text-xs">Prime contractor: {w.contractor}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-red-800 font-bold text-xl font-[family-name:var(--font-heading)]">{w.cost}</p>
              <p className="text-stone-500 text-xs">{w.type}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The F-35: A Case Study in Failure</h2>
        <p>
          The F-35 Joint Strike Fighter is the most expensive weapons program in human history — a projected
          <strong> {fmtMoney(stats.f35LifetimeCost)}</strong> over its lifetime. Originally planned to cost
          $233 billion for development and procurement, the program has nearly tripled in cost while delivering
          an aircraft plagued by over 800 known deficiencies.
        </p>
        <p>
          The F-35 cannot fly in lightning storms. Its gun doesn&apos;t shoot straight. Its stealth coating
          blisters in the sun. It costs <strong>$36,000 per flight hour</strong> to operate — compared to
          $22,000 for the F-16 it was meant to replace. Its ejection seat can kill lighter pilots. Its logistics
          system doesn&apos;t work properly. And yet production continues, because the program supports
          <strong> 254,000 jobs across 45 states</strong> — making it politically untouchable.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The F-35 is a piece of — I can&apos;t say it in public. It&apos;s a disaster. The program
          should have been killed years ago.&rdquo;
          <br />— Dan Grazier, Project on Government Oversight, 2023
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">OCO: The War Slush Fund</h2>
        <p>
          For years, the Pentagon maintained a separate funding stream called <strong>Overseas Contingency
          Operations (OCO)</strong> — ostensibly for war costs that couldn&apos;t be predicted. In practice,
          OCO became a slush fund that allowed the Pentagon to circumvent budget caps.
        </p>
        <p>
          Because OCO was classified as &ldquo;emergency&rdquo; spending, it didn&apos;t count against the
          Budget Control Act spending caps established in 2011. The Pentagon routinely stuffed non-war base
          budget items into OCO to get around the limits. At its peak, OCO added <strong>$160+ billion per year</strong> on
          top of the base budget — essentially a second defense budget with no caps and minimal oversight.
        </p>
        <p>
          OCO was formally eliminated in FY2022 when the spending caps expired. The Pentagon simply absorbed
          those costs into the base budget — which promptly surged past $800 billion. The slush fund disappeared;
          the spending didn&apos;t.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Audit Catastrophe</h2>
        <p>
          The Pentagon is the only federal agency that has <strong>never passed a comprehensive financial
          audit</strong> — despite being required by law since 1990.
        </p>
      </div>

      {/* Audit timeline */}
      <div className="max-w-3xl mx-auto my-8 bg-white rounded-xl border p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">The Audit Timeline</h3>
        <div className="space-y-3">
          {auditTimeline.map(a => (
            <div key={a.year} className="flex gap-4 border-l-2 border-red-200 pl-4">
              <span className="text-red-800 font-bold font-[family-name:var(--font-heading)] shrink-0 w-24">{a.year}</span>
              <p className="text-stone-600 text-sm">{a.event}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <p>
          The Pentagon manages <strong>$3.8 trillion in assets</strong> and cannot account for a significant
          portion of them. It doesn&apos;t know how many buildings it has. It doesn&apos;t know where much of
          its equipment is. Its financial systems are a patchwork of 2,300+ software systems, many of which
          cannot communicate with each other and some of which date to the 1960s.
        </p>
        <p>
          If any private corporation failed an audit seven times in a row, its executives would face criminal
          prosecution and its stock would be worthless. The Pentagon gets a raise.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            In 2016, the DOD Inspector General found that the Army made <strong>$6.5 trillion in accounting
            adjustments</strong> in a single year — more than the entire federal budget. These weren&apos;t
            actual transactions but journal voucher adjustments to make the books &ldquo;balance&rdquo; — essentially,
            plug numbers with no supporting documentation.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">How the Budget Process Works (And Why It Only Goes Up)</h2>
        <p>
          The defense budget process is designed to produce growth:
        </p>
        <ol>
          <li><strong>DOD submits request:</strong> The Pentagon asks for what it wants, padding estimates</li>
          <li><strong>President&apos;s budget:</strong> The White House reviews and typically trims slightly</li>
          <li><strong>HASC &amp; SASC markup:</strong> The Armed Services Committees in both chambers review — and almost always <em>add</em> money, often for weapons the Pentagon didn&apos;t request</li>
          <li><strong>Floor votes:</strong> Both chambers pass their versions, typically with bipartisan supermajorities</li>
          <li><strong>Conference:</strong> Differences are resolved — almost always by choosing the higher number</li>
          <li><strong>President signs:</strong> The NDAA passes, always for more than originally requested</li>
        </ol>
        <p>
          In FY2024, President Biden requested $842 billion. Congress authorized $886 billion — <strong>$44 billion
          more than asked</strong>. This pattern repeats every year. Members of Congress from districts with military
          bases and defense contractors vote for higher spending regardless of party — because the spending
          equals jobs in their districts.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Comparison to Other National Priorities</h2>
        <p>
          The $886B defense budget dwarfs every other discretionary investment the federal government makes:
        </p>
        <ul>
          <li><strong>Education:</strong> $79B (11× less than defense)</li>
          <li><strong>Veterans Affairs:</strong> $325B (healthcare for the people defense breaks)</li>
          <li><strong>Transportation:</strong> $27B (32× less)</li>
          <li><strong>EPA:</strong> $12.1B (73× less)</li>
          <li><strong>NASA:</strong> $25.4B (35× less)</li>
          <li><strong>NIH (medical research):</strong> $47B (19× less)</li>
          <li><strong>FEMA:</strong> $29B (31× less)</li>
          <li><strong>State Department:</strong> $58B (15× less)</li>
        </ul>
        <p>
          America spends 73 times more on weapons than on protecting the environment. 19 times more on the
          military than on curing disease. 11 times more on war than on education. These are not accidents —
          they are choices. And they are made every year, by both parties, with overwhelming majorities.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense,
          a theft from those who hunger and are not fed, those who are cold and are not clothed.&rdquo;
          <br />— Dwight D. Eisenhower, 1953
        </blockquote>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The Pentagon cannot account for trillions. If any private company failed an audit this badly,
          its executives would be in prison.&rdquo;
          <br />— Senator Bernie Sanders
        </blockquote>
      </div>

      <div className="text-center my-8">
        <Link href="/war-clock" className="inline-block bg-red-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition">
          Watch It Tick → War Clock
        </Link>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border max-w-3xl mx-auto">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/us-military-spending" className="text-red-800 hover:underline">→ US Military Spending — The big picture</Link></li>
          <li><Link href="/analysis/military-industrial-complex" className="text-red-800 hover:underline">→ The Military-Industrial Complex</Link></li>
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Historical Military Spending</Link></li>
          <li><Link href="/contractors" className="text-red-800 hover:underline">→ Top Defense Contractors</Link></li>
          <li><Link href="/analysis/pentagon-climate" className="text-red-800 hover:underline">→ The Pentagon&apos;s Carbon Bootprint</Link></li>
          <li><Link href="/analysis/silicon-valley-pentagon" className="text-red-800 hover:underline">→ Silicon Valley &amp; the Pentagon</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
