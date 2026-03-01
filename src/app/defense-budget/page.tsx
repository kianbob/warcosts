import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Defense Budget Breakdown — $886B in FY2024 | WarCosts',
  description: 'Where every dollar of the $886 billion defense budget goes. Service branch shares, black budget, nuclear weapons, intelligence ($90B+), VA ($325B+), total national security cost ($1.4T+). How the budget process works, NDAA explained.',
  keywords: ['defense budget', 'us defense budget', 'pentagon budget', 'military budget 2024', 'defense spending breakdown', 'NDAA', 'defense budget 2025'],
  openGraph: {
    title: 'The Defense Budget — $886B in FY2024',
    description: 'Never audited. Always growing. Here\'s where every dollar goes.',
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

const serviceBranches = [
  { branch: 'Department of the Army', amount: 185e9, personnel: '485,000 active', pct: 21, note: 'Ground forces, armor, artillery, helicopters, missile defense' },
  { branch: 'Department of the Navy (incl. Marines)', amount: 222e9, personnel: '347,000 Navy + 177,000 Marines', pct: 25, note: 'Aircraft carriers, submarines, amphibious warfare, Marine Corps' },
  { branch: 'Department of the Air Force (incl. Space Force)', amount: 217e9, personnel: '325,000 AF + 16,000 SF', pct: 24, note: 'Fighter jets, bombers, ICBMs, satellites, GPS, space domain' },
  { branch: 'Defense-Wide / Agencies', amount: 145e9, personnel: 'Various', pct: 16, note: 'DARPA, NSA, DIA, MDA, DISA, SOCOM, and other defense agencies' },
  { branch: 'Defense Health Program', amount: 38e9, personnel: '9.6M beneficiaries', pct: 4, note: 'TRICARE military healthcare system' },
  { branch: 'Classified / Black Budget', amount: 79e9, personnel: 'Unknown', pct: 9, note: 'Estimated classified programs across all branches + intelligence' },
]

const topWeapons = [
  { name: 'F-35 Joint Strike Fighter', cost: '$1.7 trillion', type: 'Lifetime', status: 'In production — plagued by delays and 800+ known deficiencies', contractor: 'Lockheed Martin' },
  { name: 'Columbia-class Submarine', cost: '$128 billion', type: '12 subs', status: 'Under construction — nuclear ballistic missile sub, replacing Ohio-class', contractor: 'General Dynamics' },
  { name: 'Sentinel (GBSD) ICBM', cost: '$96+ billion', type: 'Program', status: '85% over initial estimate; under Nunn-McCurdy breach review', contractor: 'Northrop Grumman' },
  { name: 'B-21 Raider Bomber', cost: '$80+ billion', type: '100 aircraft', status: 'In development — next-gen stealth bomber, all details classified', contractor: 'Northrop Grumman' },
  { name: 'Gerald R. Ford Carrier', cost: '$13.3 billion each', type: 'Per ship', status: 'First deployed 2023 — $2.4B over budget, 4 years late', contractor: 'HII' },
  { name: 'Virginia-class Submarine', cost: '$3.4 billion each', type: 'Per sub', status: 'In production — nuclear attack submarine, 2+ years behind schedule', contractor: 'GD / HII' },
  { name: 'DDG(X) Destroyer', cost: '$25+ billion', type: 'Program', status: 'In development — next-gen surface combatant to replace Arleigh Burke', contractor: 'TBD' },
  { name: 'CH-53K King Stallion', cost: '$36+ billion', type: 'Program', status: 'Delayed, over budget — heavy-lift helicopter for Marine Corps', contractor: 'Sikorsky/Lockheed' },
  { name: 'IVAS (HoloLens)', cost: '$22 billion', type: '10-year', status: 'AR combat goggles — soldiers report nausea, headaches, neck strain', contractor: 'Microsoft' },
  { name: 'MQ-25 Stingray', cost: '$13+ billion', type: 'Program', status: 'Carrier-based autonomous refueling drone — behind schedule', contractor: 'Boeing' },
]

const auditTimeline = [
  { year: '1990', event: 'Congress requires all federal agencies to produce auditable financial statements (CFO Act)' },
  { year: '1990–2017', event: 'Pentagon ignores the requirement for 27 years. No other federal agency fails to comply.' },
  { year: '2018', event: 'First-ever DOD audit attempted with 1,200 auditors — FAILS across all major areas' },
  { year: '2019', event: 'Second audit — FAILS. Pentagon says it expected to fail.' },
  { year: '2020', event: 'Third audit — FAILS. COVID provides convenient excuse for delays.' },
  { year: '2021', event: 'Fourth audit — FAILS. Only 7 of 27 sub-audits pass. $3.5T in assets unaccounted for.' },
  { year: '2022', event: 'Fifth audit — FAILS. Comptroller says "meaningful progress" despite failing every year.' },
  { year: '2023', event: 'Sixth audit — FAILS. Still cannot account for $3.8T in assets. 7 of 29 sub-audits pass.' },
  { year: '2024', event: 'Seventh audit — FAILS. Pentagon says "full clean audit" may take until 2028 at earliest.' },
]

const totalNationalSecurity = [
  { category: 'DOD Base Budget', amount: 886e9, note: 'The official "defense budget" number' },
  { category: 'Veterans Affairs', amount: 325e9, note: 'Healthcare, disability, pensions for 18M veterans' },
  { category: 'Intelligence Community', amount: 90e9, note: 'CIA ($15B), NSA ($12B), NRO ($18B), NGA, DIA, FBI CT, 11 others' },
  { category: 'Homeland Security', amount: 62e9, note: 'TSA, CBP, ICE, Coast Guard, FEMA (post-9/11 creation)' },
  { category: 'Nuclear Weapons (DOE/NNSA)', amount: 50e9, note: 'Warhead production, maintenance, testing, cleanup' },
  { category: 'Interest on War Debt', amount: 100e9, note: 'Estimated annual interest on military-related borrowing' },
  { category: 'State Dept Military Programs', amount: 18e9, note: 'Foreign military financing, IMET, peacekeeping' },
  { category: 'Other (NASA defense, FBI CT, etc.)', amount: 10e9, note: 'Classified space payloads, domestic counterterrorism' },
]

const ndaaHistory = [
  { year: 'FY2020', requested: '$718B', authorized: '$738B', delta: '+$20B', note: 'Space Force created' },
  { year: 'FY2021', requested: '$740B', authorized: '$740B', delta: '$0', note: 'Trump veto overridden' },
  { year: 'FY2022', requested: '$715B', authorized: '$770B', delta: '+$55B', note: 'Largest increase ever ($25B above request)' },
  { year: 'FY2023', requested: '$813B', authorized: '$858B', delta: '+$45B', note: 'Inflation + Ukraine used to justify increase' },
  { year: 'FY2024', requested: '$842B', authorized: '$886B', delta: '+$44B', note: 'Congress added $44B more than Biden asked' },
  { year: 'FY2025', requested: '$895B', authorized: 'TBD', delta: 'TBD', note: 'Expected to exceed $900B' },
]

const budgetProcess = [
  { step: '1. DOD Internal Review', timing: 'Jan–Aug (18 months before FY)', desc: 'Services submit wish lists. OSD reviews. PPBE (Planning, Programming, Budgeting, and Execution) process produces the Pentagon\'s request.' },
  { step: '2. President\'s Budget', timing: 'February', desc: 'OMB reviews DOD request, makes cuts. President submits unified budget to Congress. This is the "requested" number.' },
  { step: '3. Unfunded Priorities Lists', timing: 'March', desc: 'Service chiefs submit separate "wish lists" of items the President cut. Congress uses these to justify adding money back.' },
  { step: '4. HASC & SASC Markup', timing: 'April–June', desc: 'House and Senate Armed Services Committees review, hold hearings, and mark up their versions. They almost always ADD money.' },
  { step: '5. Floor Votes', timing: 'June–September', desc: 'Full House and Senate debate and pass their versions. Bipartisan supermajorities are standard — voting against defense is political suicide.' },
  { step: '6. Conference Committee', timing: 'October–December', desc: 'Differences resolved between House and Senate. In practice, they almost always choose the higher number for contested items.' },
  { step: '7. NDAA Signed', timing: 'December–January', desc: 'President signs the National Defense Authorization Act. The NDAA has been signed every year since 1961 — 63 straight years.' },
  { step: '8. Appropriations', timing: 'Ideally by Oct 1', desc: 'Authorization ≠ appropriation. Actual funding comes in defense appropriations bills. Often delayed by CRs (continuing resolutions).' },
]

const continuingResolutions = [
  { period: 'FY2011–FY2024', crDays: '1,400+', note: 'Over the past 14 fiscal years, DOD operated under continuing resolutions for over 1,400 days — roughly 4 of every 14 years.' },
  { detail: 'What CRs do', impact: 'Freeze spending at prior-year levels. No new programs can start. No production rate increases. Estimated cost to DOD: $5–10B per year in inefficiency.' },
  { detail: 'Why they happen', impact: 'Congress can\'t agree on spending bills by Oct 1. Defense is held hostage in broader budget fights. Both parties use it as leverage.' },
  { detail: 'Who benefits', impact: 'Ironically, CRs benefit the defense establishment: they lock in current spending levels and prevent any cuts. The "crisis" of a CR actually maintains the status quo.' },
]

export default function DefenseBudgetPage() {
  const stats = loadData('stats.json')

  const totalNatSec = totalNationalSecurity.reduce((s, c) => s + c.amount, 0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Defense Budget Breakdown — $886 Billion in FY2024',
    description: 'Where every dollar goes in the US defense budget. Service branches, weapons programs, black budget, and the total national security state cost.',
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
        When all military-related spending is counted, the true national security budget exceeds
        <strong className="text-stone-800"> {fmtMoney(totalNatSec)}</strong>.
      </p>
      <ShareButtons title="Defense Budget — $886 Billion in FY2024" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {[
          { value: fmtMoney(stats.currentAnnualBudget), label: 'FY2024 DOD Budget' },
          { value: '0', label: 'Audits Passed (Ever)' },
          { value: fmtMoney(stats.costPerDay), label: 'Cost Per Day' },
          { value: fmtMoney(totalNatSec), label: 'True National Security Cost' },
          { value: `${stats.counterterrorCountries}`, label: 'Countries with CT operations' },
          { value: fmtMoney(stats.f35LifetimeCost), label: 'F-35 Lifetime Cost' },
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

      {/* Service Branch Breakdown */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-6">Budget by Service Branch</h2>
      <div className="space-y-4">
        {serviceBranches.map(s => (
          <div key={s.branch} className="bg-white rounded-lg border p-5">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold">{s.branch}</h3>
                <p className="text-stone-500 text-sm">{s.personnel}</p>
              </div>
              <div className="text-right">
                <p className="text-red-800 font-bold text-xl font-[family-name:var(--font-heading)]">{fmtMoney(s.amount)}</p>
                <p className="text-stone-500 text-xs">{s.pct}% of DOD budget</p>
              </div>
            </div>
            <p className="text-stone-500 text-xs">{s.note}</p>
            <div className="h-2 bg-stone-200 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-red-800 rounded-full" style={{ width: `${s.pct * 4}%` }} />
            </div>
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
            per person than uniformed service members. The top 5 defense contractors received more from the
            Pentagon in FY2024 than the budgets of the State Department, EPA, and NASA <em>combined</em>.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The Total National Security Budget: ${(totalNatSec / 1e12).toFixed(1)} Trillion</h2>
        <p>
          The official &ldquo;defense budget&rdquo; of $886 billion is only the DOD portion. The true cost of
          America&apos;s national security apparatus spans multiple agencies and includes costs the Pentagon
          would prefer you not think about:
        </p>
      </div>

      <div className="space-y-3 my-8">
        {totalNationalSecurity.map(t => (
          <div key={t.category} className="bg-white rounded-lg border p-4 flex flex-wrap justify-between items-center gap-2">
            <div>
              <span className="font-medium">{t.category}</span>
              <p className="text-stone-500 text-xs">{t.note}</p>
            </div>
            <span className="text-red-800 font-bold font-[family-name:var(--font-heading)] text-lg">{fmtMoney(t.amount)}</span>
          </div>
        ))}
        <div className="bg-red-50 rounded-lg border border-red-200 p-4 flex justify-between items-center">
          <span className="font-bold text-lg">TOTAL National Security Spending</span>
          <span className="text-red-800 font-bold font-[family-name:var(--font-heading)] text-2xl">{fmtMoney(totalNatSec)}</span>
        </div>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Intelligence Community: $90+ Billion in the Shadows</h2>
        <p>
          The US intelligence community comprises <strong>18 agencies</strong> with a combined budget estimated
          at over <strong>$90 billion per year</strong>. This includes:
        </p>
        <ul>
          <li><strong>CIA:</strong> ~$15 billion — Covert operations, human intelligence (HUMINT), paramilitary</li>
          <li><strong>NSA:</strong> ~$12 billion — Signals intelligence (SIGINT), mass surveillance, cyber operations</li>
          <li><strong>NRO:</strong> ~$18 billion — Spy satellites and overhead reconnaissance</li>
          <li><strong>NGA:</strong> ~$5 billion — Geospatial intelligence, mapping, imagery analysis</li>
          <li><strong>DIA:</strong> ~$4 billion — Military intelligence analysis</li>
          <li><strong>FBI (National Security):</strong> ~$3 billion — Domestic counterterrorism and counterintelligence</li>
          <li><strong>12 Other Agencies:</strong> ~$33 billion — Including service intelligence branches, Treasury intelligence, DEA intelligence, etc.</li>
        </ul>
        <p>
          The intelligence budget was first officially disclosed in 2007 ($43.5 billion for the National Intelligence
          Program alone). The Snowden leaks in 2013 revealed the &ldquo;black budget&rdquo; in detail for the first time,
          showing $52.6 billion across 16 agencies. By 2024, the NIP alone exceeded $72 billion, with the Military
          Intelligence Program adding another $25+ billion. Combined intelligence spending has roughly doubled since
          2007 — while the threats it monitors have, by most measures, not doubled.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Nuclear Weapons: The DOE&apos;s $50 Billion Shadow Military Budget</h2>
        <p>
          America&apos;s nuclear weapons are not maintained by the Pentagon. They are maintained by the
          <strong> Department of Energy&apos;s National Nuclear Security Administration (NNSA)</strong>, which
          operates a vast complex of weapons laboratories, production facilities, and testing sites. The NNSA
          budget for FY2024 is approximately <strong>$23 billion</strong>, with additional nuclear delivery system
          costs (missiles, submarines, bombers) in the DOD budget totaling another <strong>$27+ billion</strong>.
        </p>
        <p>
          The US maintains approximately <strong>5,500 nuclear warheads</strong> (1,700 deployed, 3,800 in reserve
          or awaiting dismantlement). The current modernization plan — replacing every leg of the nuclear triad
          (ICBMs, submarine-launched missiles, and bombers) simultaneously — is estimated to cost
          <strong> $1.5–2 trillion over 30 years</strong>. The Sentinel ICBM program alone has already exceeded
          its budget by 85%, triggering a Nunn-McCurdy breach review.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Veterans Affairs: $325 Billion — The Cost of Breaking People</h2>
        <p>
          The VA budget of <strong>$325 billion per year</strong> is the deferred cost of war — healthcare,
          disability compensation, and support for 18 million living veterans. This is not counted in the
          &ldquo;defense budget&rdquo; but it is unmistakably a military cost. Without wars, the VA would be a
          fraction of its current size.
        </p>
        <p>
          The VA currently processes <strong>2 million+ disability claims per year</strong>. Average wait time:
          150+ days. The backlog periodically exceeds 500,000 pending claims. The PACT Act (2022) expanded
          eligibility for 3.5 million burn pit-exposed veterans, adding an estimated $280 billion in new costs
          over 10 years. The Brown University Costs of War Project estimates total future veteran care costs
          from post-9/11 wars will reach <strong>{fmtMoney(stats.veteranCareFutureCost)}</strong> through 2050.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Top 10 Most Expensive Weapons Programs</h2>
        <p>
          The defense budget is dominated by enormous weapons programs, many of which are over
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
          system (ALIS/ODIN) doesn&apos;t work properly. Mission-capable rates hover around 55% — meaning
          nearly half the fleet is grounded at any given time.
        </p>
        <p>
          And yet production continues, because the program supports <strong>254,000 jobs across 45 states</strong> —
          making it politically untouchable. This is the genius of modern defense contracting: distribute the
          work across enough districts that no member of Congress can afford to vote against it.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The F-35 is a piece of — I can&apos;t say it in public. It&apos;s a disaster. The program
          should have been killed years ago.&rdquo;
          <br />— Dan Grazier, Project on Government Oversight, 2023
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">How the Defense Budget Process Works (And Why It Only Goes Up)</h2>
        <p>
          Understanding why the defense budget always grows requires understanding the process that produces it.
          The system is designed — deliberately — to produce growth:
        </p>
      </div>

      {/* Budget process steps */}
      <div className="max-w-3xl mx-auto my-8 space-y-3">
        {budgetProcess.map(s => (
          <div key={s.step} className="bg-white rounded-lg border p-4">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm">{s.step}</h3>
              <span className="text-stone-500 text-xs bg-stone-100 px-2 py-1 rounded">{s.timing}</span>
            </div>
            <p className="text-stone-500 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The NDAA: 63 Years and Counting</h2>
        <p>
          The <strong>National Defense Authorization Act (NDAA)</strong> has been signed into law every year
          since 1961 — <strong>63 consecutive years</strong> without a single miss. No other piece of legislation
          has this record. The NDAA authorizes (but does not appropriate) defense spending and sets policy for
          the DOD. It is the legislative vehicle through which Congress shapes military policy.
        </p>
        <p>
          The NDAA also serves as a &ldquo;must-pass&rdquo; bill that both parties use to attach unrelated
          provisions. In recent years, NDAAs have included sanctions, trade provisions, construction projects,
          and social policy amendments. The &ldquo;defense bill&rdquo; has become a general-purpose legislative
          vehicle precisely because it is the one bill that will always pass.
        </p>
        <p>
          Recent NDAA history shows the relentless upward trajectory:
        </p>
      </div>

      <div className="overflow-x-auto my-8 max-w-3xl mx-auto">
        <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
          <thead className="bg-stone-100">
            <tr>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Year</th>
              <th className="text-right p-3 font-[family-name:var(--font-heading)]">Requested</th>
              <th className="text-right p-3 font-[family-name:var(--font-heading)]">Authorized</th>
              <th className="text-right p-3 font-[family-name:var(--font-heading)]">Delta</th>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Note</th>
            </tr>
          </thead>
          <tbody>
            {ndaaHistory.map(n => (
              <tr key={n.year} className="border-t border-stone-200">
                <td className="p-3 font-medium">{n.year}</td>
                <td className="p-3 text-right">{n.requested}</td>
                <td className="p-3 text-red-800 font-semibold text-right">{n.authorized}</td>
                <td className="p-3 text-right font-medium">{n.delta}</td>
                <td className="p-3 text-stone-500 text-xs">{n.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Continuing Resolutions: Government by Autopilot</h2>
        <p>
          When Congress fails to pass appropriations bills by October 1 (the start of the fiscal year), the
          government operates under a <strong>continuing resolution (CR)</strong> — which freezes spending at
          the prior year&apos;s level. This happens <em>routinely</em>:
        </p>
        <ul>
          <li>Over the past 14 fiscal years, DOD operated under CRs for <strong>1,400+ days</strong></li>
          <li>CRs prevent new programs from starting and cost an estimated <strong>$5–10 billion per year</strong> in inefficiency</li>
          <li>Despite constant complaints about CRs, they actually <strong>benefit</strong> the defense establishment by locking in current spending levels and preventing any cuts</li>
          <li>The &ldquo;crisis&rdquo; of a CR is used to justify even larger budgets when the appropriations bill finally passes</li>
        </ul>

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

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            In 2016, the DOD Inspector General found that the Army made <strong>$6.5 trillion in accounting
            adjustments</strong> in a single year — more than the entire federal budget. These weren&apos;t
            actual transactions but journal voucher adjustments to make the books &ldquo;balance&rdquo; — essentially,
            plug numbers with no supporting documentation. If a private company did this, the SEC would shut it down.
          </p>
        </div>

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
          <li><strong>National Science Foundation:</strong> $9.5B (93× less)</li>
          <li><strong>CDC:</strong> $9.2B (96× less)</li>
        </ul>
        <p>
          America spends 73 times more on weapons than on protecting the environment. 19 times more on the
          military than on curing disease. 96 times more on war than on the CDC. 11 times more on the Pentagon
          than on education. These are not accidents — they are choices. And they are made every year, by both
          parties, with overwhelming majorities.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Black Budget: What We Can&apos;t See</h2>
        <p>
          An estimated <strong>$79+ billion</strong> of the defense budget goes to classified programs that
          are invisible to the public and to most members of Congress. Only members of the intelligence and
          armed services committees are briefed on these programs — and even they may not know the full scope.
        </p>
        <p>
          Classified programs include:
        </p>
        <ul>
          <li><strong>Special Access Programs (SAPs):</strong> The most secret military programs, accessible to
          only a handful of people. The B-21 Raider was a SAP before its existence was acknowledged.</li>
          <li><strong>Waived SAPs:</strong> Programs so secret that even congressional oversight committees are
          not fully briefed. Their existence is known to perhaps 20 people in the entire government.</li>
          <li><strong>Intelligence programs:</strong> The National Intelligence Program ($72B+) and Military
          Intelligence Program ($25B+) are partially classified.</li>
          <li><strong>Cyber operations:</strong> Offensive cyber capabilities, which the US has acknowledged using
          but whose budgets remain classified.</li>
        </ul>

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

        <blockquote className="border-l-4 border-red-800">
          &ldquo;Of all the enemies to public liberty, war is, perhaps, the most to be dreaded, because it
          comprises and develops the germ of every other. War is the parent of armies; from these proceed debts
          and taxes.&rdquo;
          <br />— James Madison, 1795
        </blockquote>
      </div>

      <div className="text-center my-8 flex flex-wrap justify-center gap-4">
        <Link href="/war-clock" className="inline-block bg-red-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition">
          Watch It Tick → War Clock
        </Link>
        <Link href="/tools/tax-receipt" className="inline-block bg-stone-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-stone-700 transition">
          Your Military Tax Receipt →
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
          <li><Link href="/tools/jobs-calculator" className="text-red-800 hover:underline">→ Jobs Calculator — Military vs civilian spending</Link></li>
          <li><Link href="/cost-of-war" className="text-red-800 hover:underline">→ Cost of War — $11.3 trillion and counting</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
