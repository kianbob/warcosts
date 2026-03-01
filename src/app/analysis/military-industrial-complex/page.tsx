import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'The Military-Industrial Complex — Eisenhower\'s Warning Come True | WarCosts',
  description: 'In 1961, Eisenhower warned of the military-industrial complex. Today, 5 contractors earn $282B/year, the Pentagon has never passed an audit, and the revolving door spins faster than ever.',
  openGraph: {
    title: 'The Military-Industrial Complex — Eisenhower\'s Warning Come True',
    description: '$886B/year. 5 contractors earning $282B. Pentagon never audited. The warning we ignored.',
    url: 'https://www.warcosts.org/analysis/military-industrial-complex',
  },
}

const topContractors = [
  {
    name: 'RTX Corporation (Raytheon)',
    revenue: '$69B',
    lobbying: '$13.6M (2023)',
    programs: 'Patriot missile systems, Tomahawk cruise missiles ($2M each), Stinger missiles, Pratt & Whitney jet engines, intelligence & cybersecurity',
    revolvingDoor: 'Former Secretary of Defense Mark Esper was Raytheon\'s VP for government relations. Secretary of Defense Lloyd Austin sat on Raytheon\'s board of directors before joining Biden\'s cabinet.',
    employees: '185,000',
    politicalSpend: '$5.2M in campaign contributions (2023-2024 cycle)',
  },
  {
    name: 'Lockheed Martin',
    revenue: '$65B',
    lobbying: '$12.4M (2023)',
    programs: 'F-35 ($1.7T lifetime cost), F-22, C-130, Black Hawk helicopters, THAAD missile defense, Trident missiles, Aegis combat systems',
    revolvingDoor: 'Former Rep. Norm Dicks (WA) retired from Congress and immediately joined Lockheed\'s lobbying team. Dozens of generals and admirals become Lockheed consultants.',
    employees: '122,000',
    politicalSpend: '$7.1M in campaign contributions (2023-2024 cycle)',
  },
  {
    name: 'Boeing',
    revenue: '$67B',
    lobbying: '$11.8M (2023)',
    programs: 'Apache attack helicopters, F/A-18 Super Hornets, KC-46 tanker, B-52 upgrades, JDAM bombs, Harpoon missiles, satellite systems',
    revolvingDoor: 'Former Boeing exec Patrick Shanahan served as Deputy Secretary of Defense, then Acting Secretary. Investigated for favoring Boeing in procurement decisions.',
    employees: '170,000',
    politicalSpend: '$4.8M in campaign contributions (2023-2024 cycle)',
  },
  {
    name: 'Northrop Grumman',
    revenue: '$39B',
    lobbying: '$11.2M (2023)',
    programs: 'B-21 Raider stealth bomber, B-2 Spirit, Global Hawk drones, James Webb Space Telescope, nuclear weapons modernization, cyber warfare',
    revolvingDoor: 'Multiple former Pentagon officials in leadership. CEO Kathy Warden sits on advisory boards that shape defense policy.',
    employees: '95,000',
    politicalSpend: '$3.9M in campaign contributions (2023-2024 cycle)',
  },
  {
    name: 'General Dynamics',
    revenue: '$42B',
    lobbying: '$10.1M (2023)',
    programs: 'Abrams tanks, Stryker vehicles, Virginia-class submarines, Columbia-class ballistic missile subs, Gulfstream jets, IT systems',
    revolvingDoor: 'Former Secretary of Defense James Mattis sat on General Dynamics\' board before becoming SecDef. Returned to the board after leaving government.',
    employees: '106,000',
    politicalSpend: '$3.6M in campaign contributions (2023-2024 cycle)',
  },
]

const auditFailures = [
  { year: '2018', result: 'Failed', note: 'First-ever audit. 1,200 auditors. Failed across all categories.' },
  { year: '2019', result: 'Failed', note: 'Inspector General found "material weaknesses" in every area.' },
  { year: '2020', result: 'Failed', note: 'Could not account for $35 trillion in year-end accounting adjustments.' },
  { year: '2021', result: 'Failed', note: 'Only 7 of 27 sub-audits received clean opinions.' },
  { year: '2022', result: 'Failed', note: 'Pentagon CFO called it "a journey" rather than acknowledging failure.' },
  { year: '2023', result: 'Failed', note: 'Marine Corps passed for first time. DOD overall: failed.' },
  { year: '2024', result: 'Failed', note: '7th consecutive failure. $3.8T in transactions unaccountable.' },
]

export default function MICPage() {
  const stats = loadData('stats.json')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd title="The Military-Industrial Complex — Eisenhower's Warning Come True" description="$886B/year budget. 5 contractors earning $282B. Pentagon never audited. The revolving door. The warning we ignored." slug="military-industrial-complex" />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Military-Industrial Complex' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          The Military-Industrial Complex
        </h1>
        <p className="text-xl text-stone-300 mb-4">Eisenhower&apos;s Warning Come True</p>
        <p className="text-stone-400 text-lg">
          In his farewell address on January 17, 1961, President Dwight D. Eisenhower — a five-star general
          who commanded D-Day and led the Allied forces to victory in Europe — issued the most prescient
          warning in American political history. He warned of an emerging alliance between the military
          establishment and the defense industry that would corrupt American democracy. Sixty-four years later,
          every word has come true.
        </p>
      </div>

      <ShareButtons title="The Military-Industrial Complex — Eisenhower's Warning Come True" />

      {/* The full Eisenhower quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-lg italic leading-relaxed">
          &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence,
          whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise of
          misplaced power exists and will persist. We must never let the weight of this combination endanger our
          liberties or democratic processes. We should take nothing for granted. Only an alert and knowledgeable
          citizenry can compel the proper meshing of the huge industrial and military machinery of defense with
          our peaceful methods and goals, so that security and liberty may prosper together.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-4">— President Dwight D. Eisenhower, Farewell Address, January 17, 1961</p>
        <p className="text-stone-500 text-sm mt-2">
          An early draft of the speech used the phrase &ldquo;military-industrial-<em>congressional</em> complex&rdquo;
          — Eisenhower removed &ldquo;congressional&rdquo; to avoid alienating lawmakers, but he meant it. Congress
          is the third leg of the stool.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmtMoney(stats.currentAnnualBudget), label: 'Annual Military Budget', sub: 'More than next 10 countries combined' },
          { val: fmtMoney(stats.defenseContractorSpending), label: 'Contractor Revenue (2020–24)', sub: 'Taxpayer money → private profit' },
          { val: `${stats.revolvingDoorOfficials}+`, label: 'Revolving Door Officials', sub: 'Pentagon ↔ defense industry' },
          { val: '7', label: 'Consecutive Audit Failures', sub: '$3.8T in unaccountable transactions' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* How the system works */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How the Machine Works</h2>
        <p className="text-stone-700 mb-4">
          The military-industrial complex isn&apos;t a conspiracy theory. It&apos;s a business model — documented
          by the GAO, investigated by inspectors general, and visible in every defense contractor&apos;s SEC
          filings. Here&apos;s how it operates:
        </p>
        <div className="space-y-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Step 1: Lobbying → Policy</h3>
            <p className="text-sm text-stone-700">
              The defense industry spends <strong>{fmtMoney(stats.defenseLobbying2023)}</strong> per year on lobbying (2023).
              853 lobbyists work on defense issues in Washington — more than one for every member of Congress.
              They shape threat assessments, weapons requirements, and budget priorities. The industry doesn&apos;t
              just respond to military needs — it helps define them.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Step 2: Campaign Contributions → Protection</h3>
            <p className="text-sm text-stone-700">
              Defense industry PACs and employees contributed <strong>{fmtMoney(stats.campaignContributions)}</strong> to
              political campaigns. Members of the Armed Services and Appropriations committees — who decide how much
              the Pentagon gets — are among the largest recipients. Cutting a weapons program means cutting jobs in
              a member&apos;s district. No one votes against jobs.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Step 3: Revolving Door → Capture</h3>
            <p className="text-sm text-stone-700">
              Over <strong>{stats.revolvingDoorOfficials} senior officials</strong> have moved between the Pentagon and defense
              contractors. Between 2004 and 2008, <strong>80% of retiring three- and four-star generals</strong> went to work for defense
              contractors or consulting firms. Pentagon officials who approve weapons programs later join the companies
              that build them — and vice versa. The regulator <em>becomes</em> the regulated.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Step 4: Geographic Distribution → Invincibility</h3>
            <p className="text-sm text-stone-700">
              Smart contractors spread production across as many congressional districts as possible. The F-35
              has parts manufactured in <strong>45 states</strong>. The B-21 Raider involves suppliers in <strong>40+ states</strong>.
              This means almost every member of Congress has a financial incentive to keep these programs funded —
              regardless of whether they work, are needed, or are on schedule.
            </p>
          </div>
        </div>
      </div>

      {/* The Big Five */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Big Five: $282 Billion Per Year</h2>
        <p className="text-stone-500 text-sm mb-4">
          Five companies dominate the US defense industry. Combined annual revenue: $282 billion.
          Combined lobbying: $59 million/year. Combined political contributions: $24.6 million/cycle.
        </p>
        <div className="space-y-6">
          {topContractors.map(c => (
            <div key={c.name} className="border rounded-lg p-5">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="font-bold text-lg">{c.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">{c.revenue}/yr</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">{c.employees} employees</span>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold text-muted uppercase mb-1">Key Programs</p>
                  <p className="text-sm text-stone-700">{c.programs}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted uppercase mb-1">Revolving Door</p>
                  <p className="text-sm text-stone-700">{c.revolvingDoor}</p>
                </div>
              </div>
              <div className="flex gap-4 mt-3 text-xs text-stone-500">
                <span>Lobbying: {c.lobbying}</span>
                <span>Political: {c.politicalSpend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Revolving Door */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Revolving Door</h2>
        <p className="text-stone-700 mb-4">
          The line between the Pentagon and the defense industry doesn&apos;t exist. It&apos;s a revolving door
          that spins so fast it&apos;s become a blur. Here are some of the most notable examples:
        </p>
        <div className="space-y-4">
          {[
            { name: 'Lloyd Austin', role: 'Secretary of Defense (Biden)', door: 'Sat on Raytheon\'s board of directors. Earned $1.4 million from Raytheon before becoming the Pentagon\'s top civilian — overseeing contracts with his former employer.' },
            { name: 'Mark Esper', role: 'Secretary of Defense (Trump)', door: 'Was Raytheon\'s VP for government relations — literally their chief lobbyist. Then became the person approving weapons purchases from Raytheon.' },
            { name: 'James Mattis', role: 'Secretary of Defense (Trump)', door: 'Sat on General Dynamics\' board before becoming SecDef. Returned to the defense industry after leaving government.' },
            { name: 'Patrick Shanahan', role: 'Acting Secretary of Defense (Trump)', door: 'Boeing executive for 31 years. Investigated by the Inspector General for allegedly favoring Boeing while at the Pentagon.' },
            { name: 'Mark Welsh', role: 'Air Force Chief of Staff', door: 'Retired and joined Northrop Grumman\'s board — the company building the B-21 bomber he helped greenlight.' },
            { name: 'Dick Cheney', role: 'Secretary of Defense → VP', door: 'SecDef under Bush Sr. Then CEO of Halliburton. Then VP under Bush Jr. when Halliburton\'s subsidiary KBR received $39.5B in no-bid Iraq contracts.' },
          ].map(p => (
            <div key={p.name} className="border-l-4 border-red-200 pl-4">
              <p className="font-semibold">{p.name} <span className="text-sm text-stone-500 font-normal">— {p.role}</span></p>
              <p className="text-sm text-stone-600">{p.door}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 rounded-lg p-4 mt-4 border border-blue-200">
          <p className="text-sm font-semibold text-blue-800 mb-1">💡 Did You Know?</p>
          <p className="text-sm text-stone-700">
            A POGO (Project on Government Oversight) study found that between 2008 and 2018, there were
            <strong> 645 instances</strong> of senior Pentagon officials or military officers transitioning to jobs
            at defense contractors. On average, that&apos;s one every 6 days. The cooling-off period meant to
            prevent conflicts of interest is routinely circumvented through consulting arrangements.
          </p>
        </div>
      </div>

      {/* F-35 case study */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">Case Study: The F-35 — $1.7 Trillion for a Plane That Doesn&apos;t Work</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(1.7e12)}</p>
            <p className="text-xs text-muted">Lifetime program cost</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">871</p>
            <p className="text-xs text-muted">Known defects (2024 GAO report)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">45</p>
            <p className="text-xs text-muted">States with F-35 suppliers</p>
          </div>
        </div>
        <div className="space-y-3 text-stone-700">
          <p>
            The F-35 Joint Strike Fighter is the most expensive weapons system in human history — and a masterclass
            in how the military-industrial complex ensures its own survival. The program is <strong>decades behind
            schedule</strong>, hundreds of billions over budget, and riddled with defects that make the aircraft
            unreliable and dangerous to fly.
          </p>
          <p>
            The GAO has documented <strong>871 open deficiencies</strong> as of 2024, including problems with the
            ejection seat that could kill pilots under certain conditions, a logistics system so broken that
            aircraft sit on the ground waiting for parts, and software bugs that require regular reboots mid-flight.
            The aircraft&apos;s full mission-capable rate — meaning it can perform all its intended missions — hovers
            around <strong>30%</strong>. That means on any given day, 70% of F-35s can&apos;t do what they were built to do.
          </p>
          <p>
            But the program is virtually unkillable. Lockheed Martin intentionally spread production across
            <strong> 1,500+ suppliers in 45 states</strong> and 8 countries. This means canceling the F-35 would
            eliminate jobs in almost every congressional district in America — ensuring bipartisan support regardless
            of performance. As Senator John McCain said: <em>&ldquo;The F-35 program has been both a scandal and a
            tragedy with respect to cost, schedule, and performance.&rdquo;</em> He voted to fund it anyway.
          </p>
          <p>
            At <strong>$42,000 per flight hour</strong> — compared to $27,000 for the F-16 it&apos;s replacing —
            the F-35 is so expensive to operate that the Air Force is exploring buying <em>more F-16s</em> to
            supplement the fleet it was supposed to replace.
          </p>
        </div>
      </div>

      {/* Pentagon audit */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Pentagon Has Never Passed an Audit</h2>
        <p className="text-stone-700 mb-4">
          The Department of Defense is the only federal agency that has <strong>never passed a comprehensive
          financial audit</strong>. It has failed 7 consecutive times since the first attempt in 2018. The Pentagon
          receives over <strong>half of all federal discretionary spending</strong> — and cannot account for where
          the money goes.
        </p>
        <div className="space-y-2 mb-4">
          {auditFailures.map(a => (
            <div key={a.year} className="flex items-center gap-3 border-b border-stone-100 pb-2">
              <span className="font-mono text-sm w-12">{a.year}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">FAILED</span>
              <span className="text-sm text-stone-600">{a.note}</span>
            </div>
          ))}
        </div>
        <p className="text-stone-700 mb-4">
          In 2020, the Pentagon&apos;s own Inspector General found <strong>$35 trillion in year-end accounting
          adjustments</strong> — a number larger than the entire US GDP. Not $35 billion. $35 <em>trillion</em>.
          These adjustments are essentially accounting entries that cannot be traced or verified.
        </p>
        <div className="bg-stone-900 text-white rounded-lg p-4 mt-4">
          <p className="font-semibold mb-2">Put it this way:</p>
          <p className="text-stone-300 text-sm">
            If you submitted a tax return and told the IRS you couldn&apos;t account for $3.8 trillion in
            transactions, you&apos;d go to prison. The Pentagon does it every year and gets a budget increase.
            No private company, no state government, no other federal agency could operate this way. Only the
            Pentagon — because it has 853 lobbyists and {fmtMoney(stats.campaignContributions)} in political spending
            ensuring no one asks too many questions.
          </p>
        </div>
      </div>

      {/* Bases and permanent demand */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">750 Bases in 80 Countries: Creating Permanent Demand</h2>
        <p className="text-stone-700 mb-4">
          The US maintains <strong>750 military bases in 80 countries</strong> — more than every other country
          on Earth combined. This global network serves a dual purpose: it projects American military power, and
          it creates permanent, self-sustaining demand for defense spending.
        </p>
        <p className="text-stone-700 mb-4">
          Every base needs weapons, vehicles, fuel, food, construction, maintenance, and technology. Every deployment
          needs equipment, ammunition, communications, and logistics. The base network is the defense industry&apos;s
          guaranteed customer base — 750 installations that will never close, in countries where the political cost
          of withdrawal exceeds the financial cost of staying.
        </p>
        <p className="text-stone-700">
          As political scientist David Vine documented in <em>Base Nation</em>, overseas bases create political
          constituencies in both the host country (jobs, economic activity) and in Congress (military construction
          contracts, deployment support contracts). Once built, a base almost never closes — not because the
          threat that justified it still exists, but because too many people profit from its continuation.
        </p>
        <p className="text-xs text-stone-500 mt-3"><Link href="/analysis/empire-of-bases" className="text-red-800 hover:underline">→ Empire of Bases — full analysis</Link></p>
      </div>

      {/* Boeing scandal */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Case Study: Boeing — When Quality Control Meets Shareholder Value</h2>
        <p className="text-stone-700 mb-4">
          Boeing&apos;s trajectory illustrates what happens when defense-industrial thinking invades a company.
          Once the gold standard of American aerospace engineering, Boeing has been plagued by a series of
          catastrophic failures:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">KC-46 Tanker — $7 Billion Over Budget</h3>
            <p className="text-sm text-stone-700">
              The KC-46 Pegasus aerial refueling tanker was supposed to cost $4.9 billion for 18 aircraft.
              As of 2024, Boeing has absorbed over $7 billion in cost overruns. The aircraft&apos;s remote
              vision system — essential for refueling operations — has been repeatedly redesigned after it
              was found to scratch the coatings of stealth aircraft during refueling. The Air Force has
              identified over 600 deficiencies.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Starliner — NASA&apos;s $4.2 Billion Problem</h3>
            <p className="text-sm text-stone-700">
              Boeing&apos;s CST-100 Starliner spacecraft — part of NASA&apos;s Commercial Crew Program — has
              been plagued by software errors, valve failures, and delays. The program is over $1.5 billion
              over budget. Its first crewed flight in 2024 stranded two astronauts on the ISS due to thruster
              malfunctions. SpaceX, paid roughly the same amount, has been flying crews since 2020.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">The SLS — $23 Billion for a Rocket That Flies Once a Year</h3>
            <p className="text-sm text-stone-700">
              Boeing is the prime contractor for the Space Launch System (SLS) core stage. Originally
              estimated at $10 billion, the total program cost has exceeded $23 billion. Each launch costs
              approximately $4 billion. SpaceX&apos;s Starship aims to launch for under $10 million — 400×
              cheaper. Boeing&apos;s SLS is perhaps the most expensive per-launch vehicle in spaceflight history.
            </p>
          </div>
        </div>
        <p className="text-stone-700">
          The common thread: Boeing merged with McDonnell Douglas in 1997, and McDonnell Douglas&apos;s
          management culture — prioritizing shareholder returns over engineering excellence — came to
          dominate the combined company. As former Boeing engineer and whistleblowers have testified,
          the company systematically deprioritized quality in favor of speed and cost-cutting. In defense
          contracting, this doesn&apos;t matter — the government pays regardless.
        </p>
      </div>

      {/* The Second Tier */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Beyond the Big Five: The Second Tier</h2>
        <p className="text-stone-700 mb-4">
          The defense industry extends far beyond the top 5 contractors. Hundreds of companies depend on
          military spending — and they all lobby, contribute, and hire former officials:
        </p>
        <div className="space-y-2 mb-4">
          {[
            { name: 'L3Harris Technologies', revenue: '$19B', specialty: 'Communications, surveillance, electronic warfare, night vision' },
            { name: 'BAE Systems (US)', revenue: '$13B', specialty: 'Electronic systems, armored vehicles, munitions, cybersecurity' },
            { name: 'Leidos', revenue: '$15B', specialty: 'IT, intelligence analysis, health IT, infrastructure' },
            { name: 'Huntington Ingalls', revenue: '$12B', specialty: 'Aircraft carriers, submarines — the only builder of US carriers' },
            { name: 'General Atomics', revenue: '$3B+', specialty: 'MQ-9 Reaper drones, MQ-1 Predator — monopoly on armed drones' },
            { name: 'Textron', revenue: '$14B', specialty: 'Bell helicopters, V-22 Osprey, cluster munitions, armored vehicles' },
            { name: 'Palantir', revenue: '$2.2B', specialty: 'Intelligence data analytics, battlefield AI, surveillance platforms' },
            { name: 'Booz Allen Hamilton', revenue: '$9B', specialty: 'Intelligence consulting, cyber, analytics — "the world\'s most profitable spy organization"' },
          ].map(c => (
            <div key={c.name} className="flex items-center gap-3 border-b border-stone-100 pb-2">
              <span className="w-44 text-sm font-medium shrink-0">{c.name}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 shrink-0">{c.revenue}</span>
              <span className="text-xs text-stone-500">{c.specialty}</span>
            </div>
          ))}
        </div>
        <p className="text-stone-700">
          Combined with the Big Five, the top 13 defense contractors generate over <strong>$400 billion per
          year</strong> in revenue — almost entirely from taxpayer money. Each company has its own lobbying
          operation, its own revolving door officials, and its own congressional allies. The network is vast,
          self-reinforcing, and extraordinarily difficult to reform.
        </p>
      </div>

      {/* Think tanks */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Think Tank Pipeline: Manufacturing Consensus</h2>
        <p className="text-stone-700 mb-4">
          The military-industrial complex extends beyond contractors and politicians to the think tanks
          that shape public discourse about national security. Many of Washington&apos;s most prominent
          think tanks receive significant funding from defense contractors:
        </p>
        <div className="space-y-2 mb-4">
          {[
            { tank: 'Center for a New American Security (CNAS)', note: 'Major donors include Northrop Grumman, Raytheon, Lockheed Martin. Described as a "think tank for the drone age."' },
            { tank: 'Atlantic Council', note: 'Funded by Lockheed Martin, Raytheon, Boeing. Promotes NATO expansion and increased defense spending.' },
            { tank: 'Center for Strategic & International Studies (CSIS)', note: 'Receives funding from all major defense contractors. Produces influential defense budget analysis.' },
            { tank: 'Hudson Institute', note: 'Major defense contractor funding. Consistently advocates for higher defense budgets.' },
            { tank: 'Heritage Foundation', note: 'Publishes annual "Index of U.S. Military Strength" arguing for increased spending.' },
          ].map(t => (
            <div key={t.tank} className="border-l-4 border-stone-200 pl-4">
              <p className="text-sm font-semibold">{t.tank}</p>
              <p className="text-xs text-stone-500">{t.note}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700">
          These think tanks produce reports, host events, and provide &ldquo;experts&rdquo; for media
          commentary — all promoting the need for more military spending. The experts are cited as independent
          analysts, but their organizations are funded by the companies that profit from the spending they
          recommend. It&apos;s laundering industry advocacy through the appearance of scholarly objectivity.
        </p>
      </div>

      {/* Campaign contributions detail */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Follow the Money: Campaign Contributions</h2>
        <p className="text-stone-700 mb-4">
          The defense industry doesn&apos;t just build weapons — it builds the political ecosystem that ensures
          those weapons get funded. In the 2023-2024 election cycle:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">Top Recipients</p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• Armed Services Committee members: highest recipients</li>
              <li>• Appropriations Committee members: second highest</li>
              <li>• Leadership PACs: both parties receive equally</li>
              <li>• Presidential candidates: bipartisan hedging</li>
            </ul>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">The Strategy</p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• Give to both parties → always win</li>
              <li>• Focus on committee members who control budgets</li>
              <li>• Hire members&apos; former staffers as lobbyists</li>
              <li>• Distribute contracts across max districts</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700">
          The result is bipartisan consensus on one thing: the military budget must always go up. In 2024,
          the defense authorization bill passed with overwhelming bipartisan support —  even as both parties
          claimed to disagree on everything else. The military-industrial complex is the most powerful
          bipartisan institution in Washington.
        </p>
      </div>

      {/* Smedley Butler */}
      <div className="bg-stone-100 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Smedley Butler Knew in 1935</h2>
        <p className="text-stone-700 mb-4">
          Major General Smedley Butler served 34 years in the US Marine Corps. He was the most decorated Marine
          in American history at the time of his death. He fought in the Philippines, China, Central America,
          the Caribbean, and France. And in 1935, he wrote the most devastating insider critique of American
          war profiteering ever published:
        </p>
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700 mb-4">
          &ldquo;War is a racket. It always has been. It is possibly the oldest, easily the most profitable,
          surely the most vicious. It is the only one in which the profits are reckoned in dollars and the losses
          in lives.&rdquo;
        </blockquote>
        <blockquote className="font-[family-name:var(--font-heading)] text-lg italic text-stone-600 mb-4">
          &ldquo;I spent 33 years and four months in active military service and during that period I spent most
          of my time as a high-class muscle man for Big Business, for Wall Street and the bankers. In short, I
          was a racketeer; a gangster for capitalism. I helped make Mexico safe for American oil interests in 1914.
          I helped make Haiti and Cuba a decent place for the National City Bank boys to collect revenues in.
          I helped in the raping of half a dozen Central American republics for the benefit of Wall Street.&rdquo;
        </blockquote>
        <p className="text-muted">— Major General Smedley D. Butler, USMC, <em>War Is a Racket</em>, 1935</p>
        <p className="text-sm text-stone-600 mt-3">
          Butler also testified before Congress in 1934 about a plot by wealthy industrialists to overthrow
          President Roosevelt and install a fascist government — the &ldquo;Business Plot.&rdquo; The congressional
          committee confirmed the plot was real. No one was prosecuted.
        </p>
      </div>

      {/* Littoral Combat Ship */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Case Study: The Littoral Combat Ship — $30 Billion for Ships the Navy Doesn&apos;t Want</h2>
        <p className="text-stone-700 mb-4">
          The Littoral Combat Ship (LCS) program is another masterclass in defense waste. Originally designed as a
          fast, cheap, versatile coastal warship, the LCS has become a symbol of everything wrong with Pentagon
          procurement:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-stone-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$30B+</p>
            <p className="text-xs text-muted">Total program cost</p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$220M→$500M</p>
            <p className="text-xs text-muted">Cost per ship (original → actual)</p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">9</p>
            <p className="text-xs text-muted">Ships decommissioned early</p>
          </div>
        </div>
        <p className="text-stone-700 mb-4">
          The original pitch: <strong>$220 million per ship</strong>, 52 ships planned, each capable of swapping
          &ldquo;mission modules&rdquo; to perform different tasks. The reality: costs more than doubled. The
          mission modules never worked as promised. The ships are so lightly armed they can&apos;t survive in
          contested waters. The Navy began <strong>decommissioning LCS ships that are less than 10 years old</strong>
          — some had been in service for only a few years.
        </p>
        <p className="text-stone-700 mb-4">
          The propulsion system on the Freedom-class variant (built by Lockheed Martin) suffers from a
          combining gear defect that has sidelined multiple ships. The Independence-class variant (built by
          Austal) has had structural cracking issues. A 2022 GAO report found the ships were available for
          deployment only <strong>40% of the time</strong>.
        </p>
        <p className="text-stone-700">
          But the program continues. Why? Lockheed Martin builds the Freedom class in Marinette, Wisconsin.
          Austal builds the Independence class in Mobile, Alabama. Two congressional districts. Two sets of
          jobs. Two companies. Bipartisan protection.
        </p>
      </div>

      {/* Zumwalt Destroyer */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Case Study: The Zumwalt Destroyer — $22 Billion for 3 Ships</h2>
        <p className="text-stone-700 mb-4">
          The DDG-1000 Zumwalt class was supposed to revolutionize naval warfare. Originally, the Navy planned
          to build <strong>32 ships at $1.3 billion each</strong>. The program was cut to 3 ships at
          <strong> $7.5 billion each</strong> — making them the most expensive destroyers ever built.
        </p>
        <p className="text-stone-700 mb-4">
          The Zumwalt&apos;s Advanced Gun System was designed to fire Long Range Land Attack Projectiles
          at $50,000 per round. When the fleet was cut from 32 to 3 ships, the per-round cost ballooned
          to <strong>$800,000 per shell</strong> — making each round more expensive than a Tomahawk cruise
          missile. The Navy canceled the ammunition program entirely, leaving the ships with two large guns
          that literally <strong>have no ammunition</strong>.
        </p>
        <p className="text-stone-700">
          The lead ship, USS Zumwalt, has suffered repeated engineering casualties, including propulsion
          failures during sea trials. All three ships are being converted to carry hypersonic missiles —
          an entirely different mission from their original design, at additional cost to taxpayers.
        </p>
      </div>

      {/* Stock performance */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Defense Stocks vs. the S&amp;P 500: War Is Good Business</h2>
        <p className="text-stone-700 mb-4">
          Since September 11, 2001, defense contractor stocks have massively outperformed the broader market:
        </p>
        <div className="space-y-2 mb-4">
          {[
            { name: 'Lockheed Martin (LMT)', return: '+1,800%', vs: 'vs S&P 500 +390%' },
            { name: 'Northrop Grumman (NOC)', return: '+2,100%', vs: 'vs S&P 500 +390%' },
            { name: 'General Dynamics (GD)', return: '+1,200%', vs: 'vs S&P 500 +390%' },
            { name: 'RTX/Raytheon (RTX)', return: '+800%', vs: 'vs S&P 500 +390%' },
            { name: 'L3Harris (LHX)', return: '+1,500%', vs: 'vs S&P 500 +390%' },
          ].map(s => (
            <div key={s.name} className="flex items-center gap-3 border-b border-stone-100 pb-2">
              <span className="w-48 text-sm font-medium">{s.name}</span>
              <span className="text-sm font-bold text-green-700">{s.return}</span>
              <span className="text-xs text-stone-400">{s.vs}</span>
            </div>
          ))}
        </div>
        <p className="text-stone-700 mb-4">
          If you invested <strong>$10,000</strong> in a defense contractor index on September 10, 2001, you&apos;d
          have roughly <strong>$150,000-$200,000</strong> today. The same $10,000 in the S&amp;P 500 would be
          worth ~$49,000. War on Terror investors made 3-4× the return of the broader market.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm font-semibold text-blue-800 mb-1">💡 The 9/11 Trade</p>
          <p className="text-sm text-stone-700">
            In the weeks after 9/11, defense stocks initially fell with the broader market. Then they surged.
            Investors who bought Lockheed Martin, Raytheon, and Northrop Grumman in the immediate aftermath
            of the attacks made returns of <strong>10-20× their investment</strong> over the next two decades.
            The most devastating attack on American soil became the most profitable investment thesis in
            modern defense history.
          </p>
        </div>
      </div>

      {/* Jobs program */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The World&apos;s Most Expensive Jobs Program</h2>
        <p className="text-stone-700 mb-4">
          Defense spending is often justified as a jobs program: &ldquo;These contracts create jobs in your
          district!&rdquo; But the economic research tells a different story:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Military Spending Creates Fewer Jobs Than Alternatives</h3>
            <p className="text-sm text-stone-700">
              A University of Massachusetts study found that <strong>$1 billion in military spending creates
              approximately 11,200 jobs</strong>. The same $1 billion spent on education creates 26,700 jobs.
              Healthcare: 17,200 jobs. Clean energy: 16,800 jobs. Infrastructure: 18,900 jobs. Military
              spending is literally the <em>least</em> efficient way to create employment.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">The Pentagon as a Welfare Program</h3>
            <p className="text-sm text-stone-700">
              The Department of Defense employs 3.4 million people — making it the largest employer in the
              world. Many of these jobs are in congressional districts where the military is the primary
              economic driver. Cutting defense spending in these areas would cause economic pain — which
              is exactly why it never happens. The Pentagon has become a welfare program disguised as
              national defense: too many people depend on it for employment to allow meaningful reform.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">The Abrams Tank Nobody Wants</h3>
            <p className="text-sm text-stone-700">
              The Army has repeatedly told Congress it doesn&apos;t need more Abrams tanks. Congress keeps
              funding them anyway — because the Lima Army Tank Plant in Ohio employs thousands of workers.
              In 2013, Army Chief of Staff General Ray Odierno testified that &ldquo;we don&apos;t need
              the tanks.&rdquo; Congress authorized $120 million for tanks the Army didn&apos;t want.
              The tanks sit in storage depots in the California desert.
            </p>
          </div>
        </div>
        <blockquote className="border-l-4 border-red-700 pl-4 text-stone-600 italic">
          &ldquo;The defense budget is not a jobs program. It is supposed to be based on strategy, threats,
          and military requirements — not on which congressional districts need employment.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Senator John McCain, 2015</span>
        </blockquote>
      </div>

      {/* The Libertarian Case */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-amber-800">The Libertarian Case Against the Military-Industrial Complex</h2>
        <p className="text-stone-700 mb-4">
          The military-industrial complex represents everything libertarians warn about: a permanent
          alliance between government and industry that corrupts both, enriches the connected at taxpayer
          expense, and creates self-perpetuating demand for its own expansion.
        </p>
        <blockquote className="border-l-4 border-amber-700 pl-4 text-stone-600 italic mb-4">
          &ldquo;The defense budget is the mother&apos;s milk of the military-industrial complex. You cut
          the budget, you cut the power. They will never allow it willingly.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Ron Paul</span>
        </blockquote>
        <div className="space-y-3 mb-4">
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm font-semibold text-amber-800">Corporate Welfare</p>
            <p className="text-sm text-stone-600">Defense contractors receive guaranteed profits through cost-plus contracts where the government pays all costs plus a percentage markup. There is literally no incentive to be efficient. The F-35 is $1.7 trillion over budget? Lockheed Martin still gets paid. The LCS doesn&apos;t work? The contractors still profit.</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm font-semibold text-amber-800">Crony Capitalism at Its Worst</p>
            <p className="text-sm text-stone-600">Former Pentagon officials become defense lobbyists. Former lobbyists become Pentagon officials. They write the rules, award the contracts, and profit from both sides. This isn&apos;t a free market — it&apos;s a captured market where taxpayer money flows to politically connected companies regardless of performance.</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm font-semibold text-amber-800">Threat Inflation</p>
            <p className="text-sm text-stone-600">The defense industry has a financial incentive to exaggerate threats. More threats = more spending = more profit. The &ldquo;missile gap&rdquo; was fabricated. Iraq&apos;s WMDs didn&apos;t exist. The &ldquo;War on Terror&rdquo; is fought against an ever-expanding list of enemies. Each new threat justifies the next budget increase.</p>
          </div>
        </div>
        <blockquote className="border-l-4 border-amber-700 pl-4 text-stone-600 italic">
          &ldquo;The greatest threat to our liberty today comes from the military-industrial complex that
          President Eisenhower warned us about. It has become exactly what he feared — a self-perpetuating
          alliance of government and industry that consumes our wealth and threatens our freedom.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Senator Rand Paul</span>
        </blockquote>
      </div>

      {/* Sources */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources &amp; Further Reading</h2>
        <div className="space-y-2 text-sm text-stone-600">
          <p>• Eisenhower, Dwight D. — Farewell Address, January 17, 1961. Full text and video available at the Eisenhower Presidential Library.</p>
          <p>• Butler, Smedley D. — <em>War Is a Racket</em> (1935). Available free online.</p>
          <p>• <strong>Government Accountability Office (GAO)</strong> — Annual weapons systems reports, DOD audit reports.</p>
          <p>• <strong>Project on Government Oversight (POGO)</strong> — Revolving door database, contractor misconduct database.</p>
          <p>• <strong>OpenSecrets.org</strong> — Defense industry lobbying data, campaign contribution data.</p>
          <p>• <strong>DOD Inspector General</strong> — Annual audit reports and financial management assessments.</p>
          <p>• Vine, David — <em>Base Nation</em> (2015). Comprehensive analysis of the overseas base network.</p>
          <p>• Hartung, William D. — <em>Prophets of War</em> (2011). History of Lockheed Martin and the defense industry.</p>
          <p>• University of Massachusetts — &ldquo;The U.S. Employment Effects of Military and Domestic Spending Priorities&rdquo; (2017).</p>
          <p>• Ron Paul — <em>Swords into Plowshares</em> (2015). Libertarian critique of the warfare state.</p>
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The US military budget is <strong>larger than the next 10 countries combined</strong> — China, Russia, India, Saudi Arabia, UK, Germany, France, South Korea, Japan, and Australia.</li>
          <li>• Defense contractors spent <strong>{fmtMoney(stats.defenseLobbying2023)} on lobbying in 2023</strong> — that&apos;s $346,000 per day, every day of the year.</li>
          <li>• Lockheed Martin alone receives more federal funding than the <strong>EPA, NIH, and CDC combined</strong>.</li>
          <li>• A single aircraft carrier costs <strong>$13 billion</strong> to build — more than the annual budget of the National Science Foundation.</li>
          <li>• The US spends more on its <strong>military bands</strong> ($437M/year) than the entire budget of the Corporation for Public Broadcasting ($445M).</li>
          <li>• Between 2001 and 2021, the five largest defense contractors&apos; combined stock price increased by over <strong>1,000%</strong>. The S&P 500 rose 230% in the same period.</li>
          <li>• The Pentagon&apos;s annual budget ({fmtMoney(stats.currentAnnualBudget)}) is enough to <strong>end world hunger</strong> ($45B/year, per UN) eighteen times over.</li>
        </ul>
      </div>

      {/* Bottom line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <blockquote className="border-l-4 border-red-500 pl-4 mb-4 text-stone-300 italic">
          &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense,
          a theft from those who hunger and are not fed, those who are cold and are not clothed. This world in arms
          is not spending money alone. It is spending the sweat of its laborers, the genius of its scientists, the
          hopes of its children.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— President Dwight D. Eisenhower, &ldquo;Chance for Peace&rdquo; speech, April 16, 1953</span>
        </blockquote>
        <p className="text-stone-300 mb-4">
          The military-industrial complex is not a conspiracy. It&apos;s a system — a legal, documented, publicly
          visible system in which defense contractors spend millions on lobbying and campaign contributions,
          hire former Pentagon officials, distribute contracts across maximum congressional districts, and ensure
          that the military budget always goes up, the weapons programs never get canceled, and the wars never end.
        </p>
        <p className="text-stone-300 mb-4">
          Eisenhower saw it coming in 1961. Smedley Butler saw it in 1935. The system has only grown more
          powerful, more entrenched, and more resistant to reform. The Pentagon can&apos;t pass an audit, the F-35
          doesn&apos;t work, the revolving door spins faster than ever, and the defense budget just keeps climbing.
        </p>
        <p className="text-white font-semibold text-lg">
          The question isn&apos;t whether the military-industrial complex exists. The question is whether American
          democracy can survive it.
        </p>
      </div>

      {/* Related */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/contractors" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Top Defense Contractors →</h3>
          <p className="text-stone-500 text-sm">Revenue, contracts, and lobbying data</p>
        </Link>
        <Link href="/spending" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Military Spending Data →</h3>
          <p className="text-stone-500 text-sm">{fmtMoney(stats.currentAnnualBudget)}/year and climbing</p>
        </Link>
        <Link href="/bases" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Overseas Bases →</h3>
          <p className="text-stone-500 text-sm">750 bases in 80 countries</p>
        </Link>
        <Link href="/analysis/empire-of-bases" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Empire of Bases →</h3>
          <p className="text-stone-500 text-sm">The base network that sustains permanent war</p>
        </Link>
        <Link href="/analysis/war-on-terror" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The War on Terror →</h3>
          <p className="text-stone-500 text-sm">$8 trillion and the contractors who profited</p>
        </Link>
        <Link href="/analysis/congressional-authority" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Who Decides? →</h3>
          <p className="text-stone-500 text-sm">How Congress abdicated war powers</p>
        </Link>
      </div>

      <BackToTop />
    </div>
  )
}
