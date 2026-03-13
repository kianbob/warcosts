import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Jobs vs War — Military Spending Creates the Fewest Jobs',
  description: 'Military spending creates 5 jobs per $1 million — fewer than education (13), healthcare (9), or clean energy (8). The UMass Amherst study, BRAC politics, and the opportunity cost of empire.',
  keywords: ['military spending jobs', 'defense spending employment', 'jobs per million military', 'BRAC base closure', 'military industrial complex jobs', 'opportunity cost defense'],
  openGraph: {
    title: 'Jobs vs War — Military Spending Creates the Fewest Jobs',
    description: '$1M in military spending creates 5 jobs. Education creates 13. The math is devastating.',
    url: 'https://warcosts.org/analysis/jobs-vs-war',
    type: 'article',
  },
}

const sectorData = [
  { sector: 'Education', jobs: 13, color: 'bg-green-600', lightColor: 'bg-green-100 text-green-800', desc: 'Teachers, aides, counselors, administrators, support staff' },
  { sector: 'Healthcare', jobs: 11, color: 'bg-blue-600', lightColor: 'bg-blue-100 text-blue-800', desc: 'Nurses, doctors, technicians, home health aides, admin' },
  { sector: 'Clean Energy', jobs: 9, color: 'bg-yellow-600', lightColor: 'bg-yellow-100 text-yellow-800', desc: 'Solar installers, wind technicians, grid workers, engineers' },
  { sector: 'Infrastructure', jobs: 8, color: 'bg-purple-600', lightColor: 'bg-purple-100 text-purple-800', desc: 'Construction workers, engineers, planners, maintenance' },
  { sector: 'Tax Cuts (Consumer)', jobs: 6, color: 'bg-stone-500', lightColor: 'bg-stone-100 text-stone-800', desc: 'Indirect stimulus through consumer spending' },
  { sector: 'Military', jobs: 5, color: 'bg-red-600', lightColor: 'bg-red-100 text-red-800', desc: 'Soldiers, engineers, contractors, support' },
]

const bracRounds = [
  { year: '1988', bases: 86, savings: '$2.7B/year', note: 'First round under Carlucci commission' },
  { year: '1991', bases: 26, savings: '$1.5B/year', note: 'Post-Cold War drawdown begins' },
  { year: '1993', bases: 35, savings: '$2.3B/year', note: 'Largest facilities affected' },
  { year: '1995', bases: 79, savings: '$3.1B/year', note: 'Final Clinton-era round' },
  { year: '2005', bases: 22, savings: '$4.2B/year', note: 'Most recent round — Pentagon wants more' },
  { year: '2012–2025', bases: 0, savings: '$0', note: 'Congress has blocked every request for a new round' },
]

const f35Jobs = [
  { state: 'Texas', jobs: 48500, note: 'Final assembly at Fort Worth' },
  { state: 'California', jobs: 22000, note: 'Software, avionics, sensors' },
  { state: 'Florida', jobs: 15000, note: 'Training, maintenance, simulation' },
  { state: 'Connecticut', jobs: 12000, note: 'Pratt & Whitney engines' },
  { state: 'Maryland', jobs: 8500, note: 'Electronics, testing' },
  { state: 'Georgia', jobs: 7200, note: 'Components, assemblies' },
  { state: 'Other (39 states)', jobs: 41800, note: 'Spread across 375 congressional districts' },
]

const conversionExamples = [
  { name: 'Mare Island Naval Shipyard', location: 'Vallejo, CA', closed: '1996', before: 'Navy shipbuilding, 9,000 jobs', after: 'Touro University, ferry terminal, mixed-use development, 5,000+ jobs recovered by 2015. City struggled for 15 years but ultimately diversified.' },
  { name: 'Fort Ord', location: 'Monterey, CA', closed: '1994', before: 'Army training base, 15,000 military + 11,000 civilian jobs', after: 'Cal State University Monterey Bay, Veterans Transition Center, nature preserve. Took 20 years but now a net positive for the community.' },
  { name: 'Lowry Air Force Base', location: 'Denver, CO', closed: '1994', before: 'Technical training center, 7,000 jobs', after: 'One of Denver\'s most successful redevelopments — 4,500 housing units, community college campus, parks. Property values soared.' },
  { name: 'Pease Air Force Base', location: 'Portsmouth, NH', closed: '1991', before: 'Strategic Air Command base, 3,000 jobs', after: 'Pease International Tradeport — 250+ businesses, 9,500 jobs. More than tripled the original employment.' },
  { name: 'Philadelphia Naval Shipyard', location: 'Philadelphia, PA', closed: '1996', before: 'Shipbuilding, 7,000 jobs', after: 'The Navy Yard — now hosts 170+ companies, 15,000 employees including Urban Outfitters HQ. One of the most successful BRAC conversions.' },
  { name: 'Chanute Air Force Base', location: 'Rantoul, IL', closed: '1993', before: 'Technical training, 5,000 jobs', after: 'Struggled for decades. Rural communities without economic diversity suffered most. Lost 25% of population by 2010.' },
]

const ceoCompensation = [
  { name: 'James Taiclet', company: 'Lockheed Martin', comp: '$28.6M', note: 'FY2023 total compensation' },
  { name: 'Greg Hayes', company: 'RTX (Raytheon)', comp: '$22.3M', note: 'Before retirement in 2024' },
  { name: 'Kathy Warden', company: 'Northrop Grumman', comp: '$23.5M', note: 'FY2023 total compensation' },
  { name: 'Phebe Novakovic', company: 'General Dynamics', comp: '$22.6M', note: 'FY2023 total compensation' },
  { name: 'David Calhoun', company: 'Boeing', comp: '$32.8M', note: 'FY2023 (including stock awards)' },
]

export default function JobsVsWarPage() {
  const totalF35Jobs = f35Jobs.reduce((a, b) => a + b.jobs, 0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Jobs vs War — Military Spending Creates the Fewest Jobs',
    description: 'Military spending creates 5 jobs per $1 million — fewer than education, healthcare, clean energy, or infrastructure.',
    author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-01-20',
    dateModified: '2026-03-01',
    mainEntityOfPage: 'https://warcosts.org/analysis/jobs-vs-war',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Jobs vs War' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Jobs vs. War
        </h1>
        <p className="text-stone-400 text-lg">
          The most common defense of military spending is &ldquo;jobs.&rdquo; It&apos;s the one argument
          that cuts across party lines, silences critics, and makes base closures politically impossible.
          There&apos;s just one problem: <strong className="text-white">it&apos;s wrong</strong>. Military
          spending creates fewer jobs per dollar than virtually every other form of government spending.
        </p>
      </div>

      <ShareButtons title="Jobs vs War — Military Spending Creates the Fewest Jobs" />

      {/* Core stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { value: '5', label: 'Military jobs per $1M' },
          { value: '13', label: 'Education jobs per $1M' },
          { value: '160%', label: 'More jobs in education' },
          { value: '$886B', label: 'FY2024 defense budget' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-600 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* The visual comparison */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Jobs Created per $1 Million Spent</h2>
        <p className="text-muted mb-6 text-sm">Source: Political Economy Research Institute (PERI), University of Massachusetts Amherst. Includes direct, indirect, and induced employment effects.</p>
        <div className="space-y-4">
          {sectorData.map((s) => (
            <div key={s.sector} className="flex items-center gap-4">
              <span className="text-sm font-semibold w-28 shrink-0">{s.sector}</span>
              <div className="flex-1">
                <div className="bg-stone-100 rounded-full h-8 relative overflow-hidden">
                  <div
                    className={`${s.color} h-full rounded-full flex items-center pl-3`}
                    style={{ width: `${(s.jobs / 14) * 100}%` }}
                  >
                    <span className="text-white text-sm font-bold">{s.jobs}</span>
                  </div>
                </div>
                <p className="text-xs text-muted mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted text-sm mt-6">
          The military ranks <strong>dead last</strong>. Every other category of government spending —
          education, healthcare, clean energy, infrastructure, even generic tax cuts — creates more jobs
          per dollar than the Pentagon.
        </p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The UMass Amherst Research</h2>
        <p>
          The foundational research comes from economists at the <strong>Political Economy Research Institute
          (PERI)</strong> at UMass Amherst, led by Robert Pollin and Heidi Garrett-Peltier. Their work has been
          published in peer-reviewed journals and cited by the Congressional Budget Office, the Government
          Accountability Office, and numerous policy organizations. The methodology is rigorous and reproducible:
        </p>
        <ul>
          <li>They use Bureau of Economic Analysis (BEA) input-output models to calculate employment effects across three categories</li>
          <li><strong>Direct jobs:</strong> People employed directly by the spending (soldiers, teachers, nurses)</li>
          <li><strong>Indirect jobs:</strong> Supply chain employment (parts manufacturers, food suppliers, logistics)</li>
          <li><strong>Induced jobs:</strong> Jobs created when workers spend their wages in the local economy (restaurants, retail, housing)</li>
        </ul>
        <p>
          The finding is consistent across multiple studies spanning 2007 to 2024: military spending is the
          <strong> least efficient job creator</strong> of any major government spending category. This isn&apos;t
          about waste or fraud — it&apos;s about the fundamental <em>structure</em> of the spending.
        </p>
        <p>
          Their 2011 paper &ldquo;The U.S. Employment Effects of Military and Domestic Spending Priorities&rdquo;
          found that <strong>$1 billion in military spending creates approximately 11,200 jobs</strong>, while the
          same $1 billion in education creates approximately <strong>26,700 jobs</strong>. The 2017 update, accounting
          for changes in military technology and procurement, found the gap had <em>widened</em> — modern weapons
          systems are even more capital-intensive and less labor-intensive than their predecessors.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Why Military Spending Creates Fewer Jobs</h2>
        <p>
          The structural reasons are straightforward and well-documented:
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">1. Capital Intensity</h3>
        <p>
          Military spending is overwhelmingly <strong>capital-intensive, not labor-intensive</strong>. An F-35
          Lightning II costs $80 million. A Virginia-class submarine costs $3.4 billion. A Gerald R. Ford-class
          aircraft carrier costs $13.3 billion. These are among the most expensive individual objects ever
          constructed by human beings. The money goes to advanced materials, precision manufacturing, and
          highly specialized engineering — not to large numbers of workers.
        </p>
        <p>
          Compare this to education: $80 million in education spending pays the salaries of approximately
          <strong>1,270 public school teachers for a year</strong>. Each of those teachers educates 25-30
          students, buys supplies, eats at local restaurants, shops at local stores, and pays local property
          taxes. The money circulates through the community.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">2. Profit Concentration</h3>
        <p>
          Defense contractors have profit margins of 10-15% — significantly higher than most industries.
          Executive compensation at the top five defense contractors averages <strong>$20-30 million per year</strong>.
          These profits and executive payouts represent dollars that could otherwise employ workers.
        </p>
      </div>

      {/* CEO compensation table */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Defense Contractor CEO Compensation (FY2023)</h3>
        <div className="space-y-3">
          {ceoCompensation.map((c) => (
            <div key={c.name} className="flex items-center justify-between border-b border-stone-100 pb-2">
              <div>
                <p className="font-semibold">{c.name}</p>
                <p className="text-muted text-xs">{c.company}</p>
              </div>
              <div className="text-right">
                <p className="text-red-700 font-bold font-[family-name:var(--font-heading)]">{c.comp}</p>
                <p className="text-muted text-xs">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted text-sm mt-4">
          The five highest-paid defense contractor CEOs earned a combined <strong>$129.8 million</strong> in FY2023.
          A deployed E-5 sergeant with 6 years of service earns approximately $42,000/year base pay.
          These five CEOs earned as much as <strong>3,090 deployed sergeants</strong>.
        </p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <h3 className="font-[family-name:var(--font-heading)]">3. Leakage to Overhead and R&amp;D</h3>
        <p>
          A significant portion of defense spending goes to research and development, testing, and
          administrative overhead — not to production or employment. The Pentagon spent <strong>$140 billion
          on R&amp;D in FY2024</strong> alone, much of it on programs that employ relatively few people per
          dollar (classified research, computer modeling, laboratory work).
        </p>
        <p>
          By contrast, education spending is almost entirely labor costs. Approximately 80% of K-12
          education budgets go directly to salaries and benefits — meaning the money immediately becomes
          income for workers who spend it in their communities.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">4. Geographic Concentration</h3>
        <p>
          While defense contractors deliberately spread subcontracts widely for political protection,
          the actual high-value work is concentrated in a handful of metropolitan areas: the D.C. suburbs
          (Northern Virginia, Maryland), Dallas-Fort Worth, Los Angeles, San Diego, and a few others.
          Communities outside these hubs see relatively little economic benefit from defense spending.
        </p>
        <p>
          Education and healthcare spending, by contrast, is distributed wherever people live. Every
          community has schools and hospitals. Shifting $100 billion from defense to education would
          create jobs in every congressional district in America — not just the ones with Lockheed Martin
          facilities.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Opportunity Cost: What $886 Billion Could Buy</h2>
        <p>
          The FY2024 defense budget was <strong>$886 billion</strong>. At 5 jobs per million dollars, that
          creates approximately <strong>4.43 million jobs</strong>. If the same $886 billion were spent on
          education, it would create approximately <strong>11.5 million jobs</strong> — a net gain of over
          7 million jobs. Here&apos;s what specific shifts would mean:
        </p>
      </div>

      {/* Shift scenarios */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">What If We Shifted Just $200 Billion?</h2>
        <p className="text-stone-400 mb-6">
          Nobody is proposing eliminating the military. But what if we redirected just <strong>$200 billion</strong> —
          roughly 23% of the defense budget — to other priorities? The defense budget would still be
          <strong> $686 billion</strong>, more than the next 5 countries combined.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-stone-800 rounded-lg p-5 border border-stone-700">
            <p className="text-green-400 font-bold font-[family-name:var(--font-heading)] text-2xl">+1.6M</p>
            <p className="text-stone-300 font-semibold">Net jobs gained</p>
            <p className="text-stone-500 text-sm mt-1">Lose 1M military jobs, gain 2.6M education jobs</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-5 border border-stone-700">
            <p className="text-green-400 font-bold font-[family-name:var(--font-heading)] text-2xl">3.2M</p>
            <p className="text-stone-300 font-semibold">Teachers that $200B pays</p>
            <p className="text-stone-500 text-sm mt-1">At average salary of $63K including benefits</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-5 border border-stone-700">
            <p className="text-green-400 font-bold font-[family-name:var(--font-heading)] text-2xl">2.5M</p>
            <p className="text-stone-300 font-semibold">Homes that $200B builds</p>
            <p className="text-stone-500 text-sm mt-1">At median construction cost of $80K land + $320K build (multi-family)</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-5 border border-stone-700">
            <p className="text-green-400 font-bold font-[family-name:var(--font-heading)] text-2xl">100%</p>
            <p className="text-stone-300 font-semibold">US lead pipe replacement</p>
            <p className="text-stone-500 text-sm mt-1">EPA estimates $45B to replace all lead service lines. One year of savings covers it 4×.</p>
          </div>
        </div>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Political Economy of Base Closures</h2>
        <p>
          If military spending is such a poor job creator, why does it persist? The answer isn&apos;t
          economic — it&apos;s political. The defense industry has built the most sophisticated political
          protection system in American history, centered on two mechanisms: <strong>subcontract distribution</strong> and
          <strong> base closure politics (BRAC)</strong>.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">The F-35 Strategy: Jobs in Every District</h3>
        <p>
          The F-35 Joint Strike Fighter is the most expensive weapons program in history — projected to cost
          <strong> $1.7 trillion over its lifetime</strong>. It has been plagued by cost overruns, schedule delays,
          and persistent technical problems. The Pentagon&apos;s own testing office has documented over 800
          unresolved deficiencies. Yet Congress continues to fund it enthusiastically, often adding planes
          the Pentagon didn&apos;t ask for.
        </p>
        <p>
          Why? Because Lockheed Martin has strategically placed F-35 suppliers in <strong>45 states and 375
          of 435 congressional districts</strong>. An estimated {totalF35Jobs.toLocaleString()} jobs are linked
          to the program:
        </p>
      </div>

      {/* F-35 jobs by state */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">F-35 Program Jobs by State</h3>
        <div className="space-y-2">
          {f35Jobs.map((s) => (
            <div key={s.state} className="flex items-center gap-4">
              <span className="text-sm font-semibold w-36 shrink-0">{s.state}</span>
              <div className="flex-1 bg-stone-100 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-red-700 h-full rounded-full flex items-center justify-end pr-2"
                  style={{ width: `${(s.jobs / 50000) * 100}%` }}
                >
                  <span className="text-white text-xs font-bold">{s.jobs.toLocaleString()}</span>
                </div>
              </div>
              <span className="text-xs text-muted w-40 shrink-0">{s.note}</span>
            </div>
          ))}
        </div>
        <p className="text-muted text-sm mt-4">
          Total estimated jobs: <strong>{totalF35Jobs.toLocaleString()}</strong> across 45 states. This is by
          design. Every member of Congress has constituents whose jobs depend on the F-35 continuing.
          Voting against F-35 funding means voting against jobs in your district.
        </p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <h3 className="font-[family-name:var(--font-heading)]">BRAC: The Third Rail of Defense Politics</h3>
        <p>
          The Base Realignment and Closure (BRAC) process was created in 1988 to depoliticize base closures.
          An independent commission identifies bases for closure, and Congress votes on the entire package —
          no amendments, no cherry-picking. The idea was to prevent individual members from protecting their
          own bases while voting to close others.
        </p>
        <p>
          It worked — sort of. Five rounds of BRAC between 1988 and 2005 closed or realigned <strong>350+
          installations</strong>, saving an estimated <strong>$12+ billion per year</strong>. But Congress has
          blocked every Pentagon request for a new BRAC round since 2005 — for 20 years and counting.
        </p>
      </div>

      {/* BRAC rounds table */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">BRAC Rounds: 1988–Present</h3>
        <div className="space-y-3">
          {bracRounds.map((r) => (
            <div key={r.year} className="flex items-center justify-between border-b border-stone-100 pb-2">
              <div>
                <p className="font-semibold">{r.year}</p>
                <p className="text-muted text-xs">{r.note}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">{r.bases} bases</p>
                <p className="text-muted text-xs">{r.savings} savings</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted text-sm mt-4">
          The Pentagon has estimated that a new BRAC round could save <strong>$2-5 billion per year</strong>.
          Congress refuses to authorize one because no member wants to lose a base in their district — even
          if the base serves no military purpose. The result: the taxpayer funds facilities the Pentagon
          doesn&apos;t want and can&apos;t use.
        </p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">Historical Precedent: Post-WWII Conversion</h2>
        <p>
          The most powerful argument against military spending as a jobs program comes from history. After
          World War II, the United States demobilized the largest military in history — and the economy boomed.
        </p>
        <p>
          The numbers are staggering:
        </p>
        <ul>
          <li>Active military personnel: <strong>12 million → 1.5 million</strong> (88% reduction in 2 years)</li>
          <li>Military spending as % of GDP: <strong>41.9% → 4.7%</strong></li>
          <li>Defense industry employment: <strong>~17 million → ~3 million</strong></li>
          <li>The result: not depression, but the greatest sustained economic boom in American history</li>
        </ul>
        <p>
          How did this work? The government invested aggressively in conversion:
        </p>
        <ul>
          <li><strong>The GI Bill (1944):</strong> Sent 7.8 million veterans to college or vocational training.
          Created an educated workforce that drove innovation for decades. The VA estimates every dollar spent
          on the GI Bill generated $7 in economic output.</li>
          <li><strong>FHA Housing:</strong> Low-interest mortgages helped 5 million veterans buy homes, creating
          the suburban housing boom and all the jobs that came with it — construction, appliances, furniture,
          roads, schools.</li>
          <li><strong>Industrial conversion:</strong> Factories that built tanks started building cars. Shipyards
          that built destroyers built commercial vessels. Aircraft manufacturers pivoted to civilian aviation.
          Ford&apos;s Willow Run plant, which built B-24 bombers, became a General Motors auto plant.</li>
          <li><strong>Interstate Highway System (1956):</strong> Eisenhower&apos;s $25 billion investment
          ($300 billion in 2025 dollars) created millions of jobs and transformed the economy.</li>
        </ul>
        <p>
          The post-WWII conversion proves a fundamental point: <strong>economic prosperity doesn&apos;t require
          military spending</strong>. In fact, the greatest period of American economic growth occurred precisely
          when military spending was being slashed. The &ldquo;jobs&rdquo; argument for defense spending is not
          just economically wrong — it&apos;s historically backwards.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Base Closure Case Studies: What Actually Happens</h2>
        <p>
          The fear that base closures devastate communities is understandable but often overstated. Research
          by the Department of Defense Office of Economic Adjustment shows that <strong>most communities
          that lost bases ultimately recovered and often exceeded their previous employment levels</strong>.
          The transition period is painful — typically 5-15 years — but the long-term outcomes are frequently
          positive.
        </p>
      </div>

      {/* Conversion case studies */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Base Closure Outcomes</h3>
        <div className="space-y-4">
          {conversionExamples.map((c) => (
            <div key={c.name} className="border-l-4 border-stone-300 pl-4">
              <p className="font-bold">{c.name} <span className="text-muted font-normal text-sm">— {c.location}</span></p>
              <p className="text-muted text-xs mb-1">Closed: {c.closed}</p>
              <p className="text-sm"><strong>Before:</strong> {c.before}</p>
              <p className="text-sm"><strong>After:</strong> {c.after}</p>
            </div>
          ))}
        </div>
        <p className="text-muted text-sm mt-4">
          The pattern: urban and suburban bases near economic centers converted successfully, often exceeding
          original employment. Rural and isolated bases struggled more. The lesson is not &ldquo;never close
          bases&rdquo; — it&apos;s &ldquo;invest in transition support for affected communities.&rdquo;
        </p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Cold War Drawdown: Another Success Story</h2>
        <p>
          After the Cold War ended in 1991, the US reduced military spending from <strong>5.2% of GDP to 3.0%
          of GDP</strong> by 2000 — a &ldquo;peace dividend&rdquo; worth roughly $100-150 billion per year
          in reduced spending. Active duty military fell from <strong>2.07 million to 1.38 million</strong>.
          Hundreds of bases closed.
        </p>
        <p>
          The result? The 1990s saw the longest peacetime economic expansion in American history. Unemployment
          fell from 7.5% to 4.0%. The federal budget went from a $290 billion deficit to a $236 billion
          surplus. The tech boom, fueled partly by defense engineers moving to Silicon Valley, created
          millions of high-paying jobs.
        </p>
        <p>
          Again, the empirical evidence is clear: <strong>reducing military spending correlates with stronger
          economic performance</strong>, not weaker. The &ldquo;jobs&rdquo; argument for military spending
          isn&apos;t supported by any period of American economic history.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Multiplier Effect</h2>
        <p>
          Economists measure the &ldquo;multiplier effect&rdquo; of government spending — how many times
          each dollar circulates through the economy before being saved or taxed. Military spending has a
          relatively <strong>low multiplier (approximately 1.0-1.2)</strong> because so much of it goes to
          specialized equipment and concentrated corporate profits that don&apos;t circulate widely.
        </p>
        <p>
          By comparison:
        </p>
        <ul>
          <li><strong>Education spending:</strong> Multiplier of 1.5-2.0. Teacher salaries are spent almost
          entirely in local communities — rent, groceries, restaurants, childcare.</li>
          <li><strong>Infrastructure spending:</strong> Multiplier of 1.5-1.7. Construction workers spend
          locally, and the completed infrastructure (roads, bridges, broadband) enables further economic
          activity.</li>
          <li><strong>Healthcare spending:</strong> Multiplier of 1.3-1.7. Health workers are employed in
          every community, and healthier populations are more productive.</li>
          <li><strong>SNAP/food assistance:</strong> Multiplier of 1.7-1.8. Low-income recipients spend
          virtually every dollar immediately, circulating it through grocery stores and local businesses.</li>
        </ul>
        <p>
          A dollar spent on military hardware that sits in a warehouse has a multiplier near zero. A dollar
          spent on a teacher&apos;s salary multiplies through the local economy 1.5-2.0 times. The
          difference, scaled to $886 billion, represents hundreds of billions of dollars in lost economic
          activity.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Defense Industry Lobbying: Protecting the Status Quo</h2>
        <p>
          The defense industry spent <strong>$144 million on lobbying in 2023</strong> alone — more than any
          other sector except pharmaceuticals and technology. Over the past decade, defense lobbying has
          totaled over <strong>$1.3 billion</strong>. The industry also contributed <strong>$51 million to
          congressional campaigns</strong> in the 2024 election cycle.
        </p>
        <p>
          This spending is extraordinarily effective. Every year, Congress adds billions to the defense budget
          that the Pentagon didn&apos;t request — planes, ships, and vehicles the military says it doesn&apos;t
          need. In FY2024, Congress added approximately <strong>$28 billion above the Pentagon&apos;s request</strong>.
          The additions correlate precisely with lobbying spending and campaign contributions.
        </p>
        <p>
          The return on investment for defense lobbying is remarkable: the industry spends roughly $150 million
          per year on lobbying and campaign contributions, and receives roughly $886 billion in contracts.
          That&apos;s a return of approximately <strong>5,900:1</strong>. No other investment in America offers
          that kind of return.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The International Comparison</h2>
        <p>
          The United States spends more on defense than the next <strong>10 countries combined</strong>.
          America&apos;s defense budget ($886 billion) exceeds the combined total of China ($292 billion),
          Russia ($109 billion), India ($83 billion), Saudi Arabia ($75 billion), the UK ($75 billion),
          Germany ($68 billion), France ($61 billion), South Korea ($47 billion), Japan ($50 billion), and
          Australia ($32 billion).
        </p>
        <p>
          Countries that spend less on defense relative to GDP — like Germany, Japan, and the Nordic nations —
          consistently outperform the US on virtually every measure of social well-being: life expectancy,
          infant mortality, educational achievement, income equality, infrastructure quality, and
          healthcare access. They invest in their people. We invest in weapons.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Libertarian Case: Free Markets Don&apos;t Need Military Keynesianism</h2>
        <p>
          There is a deep irony in conservative politicians defending military spending as a jobs program.
          The same lawmakers who oppose government spending on education, healthcare, and infrastructure —
          arguing that the free market creates jobs more efficiently — turn around and defend the most
          inefficient form of government spending imaginable as an employment program.
        </p>
        <p>
          This is <strong>military Keynesianism</strong> — the use of defense spending as economic stimulus —
          and it contradicts every principle of limited government and fiscal conservatism. As libertarian
          economists from Murray Rothbard to Robert Higgs have argued, military spending represents the
          most distortionary form of government intervention in the economy:
        </p>
        <ul>
          <li>It diverts resources from productive private-sector uses to destructive public-sector uses</li>
          <li>It creates artificial demand that distorts labor markets and suppresses wages in civilian sectors</li>
          <li>It concentrates wealth in politically connected firms rather than market-competitive ones</li>
          <li>It requires taxation or borrowing that crowds out private investment</li>
          <li>The products it creates (weapons, munitions) have no civilian economic value and are often
          literally consumed in destruction</li>
        </ul>
        <p>
          As Frédéric Bastiat observed in 1850 with his &ldquo;broken window fallacy,&rdquo; the jobs
          <em> created</em> by military spending are visible, but the jobs <em>destroyed</em> — by the
          taxation, borrowing, and resource diversion required to fund it — are invisible. Military
          spending doesn&apos;t create wealth. It redistributes it — from taxpayers to defense contractors,
          from communities to corporate headquarters, from productive investment to weapons that will
          either sit in warehouses or be used to destroy other people&apos;s wealth.
        </p>
      </div>

      <div className="bg-stone-100 rounded-xl p-6 my-8 border">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700">
          &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the
          final sense, a theft from those who hunger and are not fed, those who are cold and are not clothed.&rdquo;
        </blockquote>
        <p className="text-muted mt-3">— Dwight D. Eisenhower, &ldquo;Chance for Peace&rdquo; speech, April 16, 1953</p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Transition Plan: How to Do It</h2>
        <p>
          Economic conversion from military to civilian spending is not a fantasy — it has been done
          repeatedly and successfully. The key principles, based on historical experience and economic
          research:
        </p>
        <h3 className="font-[family-name:var(--font-heading)]">1. Gradual Phase-Down (5-10 Years)</h3>
        <p>
          Shift spending gradually — not overnight. A reduction of $20-40 billion per year over a decade
          would bring the defense budget to approximately $500-600 billion — still the world&apos;s largest
          by far — while freeing $200-400 billion for reinvestment.
        </p>
        <h3 className="font-[family-name:var(--font-heading)]">2. Worker Transition Programs</h3>
        <p>
          Fund robust retraining for defense industry workers. Many defense skills transfer directly to
          civilian sectors: aerospace engineers can design commercial aircraft or spacecraft. Cybersecurity
          specialists are in massive demand in the private sector. Electronics technicians, logistics
          managers, and project managers are needed everywhere. The GI Bill model — education and training
          funded by the savings — is the proven template.
        </p>
        <h3 className="font-[family-name:var(--font-heading)]">3. Community Investment</h3>
        <p>
          Direct economic development funds to defense-dependent communities, modeled on the Office of
          Economic Adjustment&apos;s successful BRAC support programs. The key is investing <em>before</em>
          cuts take effect — not waiting for communities to struggle.
        </p>
        <h3 className="font-[family-name:var(--font-heading)]">4. Targeted Reinvestment</h3>
        <p>
          Reinvest savings in the same regions affected by cuts. If a military base closes in a rural
          area, that area should be first in line for infrastructure investment, broadband expansion,
          renewable energy projects, or federal research facilities. The savings from defense cuts should
          create <em>more</em> jobs in the same communities — not fewer.
        </p>
        <h3 className="font-[family-name:var(--font-heading)]">5. Industrial Diversification Requirements</h3>
        <p>
          Require defense contractors to develop civilian product lines as a condition of major contracts.
          Companies that receive hundreds of billions in taxpayer money should be required to maintain the
          capability to pivot to civilian production — as they did successfully after WWII.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Net Effect</h2>
        <p>
          The economics are unambiguous. Shifting $200 billion from defense to a mix of education,
          healthcare, clean energy, and infrastructure would:
        </p>
        <ul>
          <li>Create approximately <strong>800,000 to 1.6 million net new jobs</strong></li>
          <li>Distribute employment more broadly across all 50 states (not concentrated in defense hubs)</li>
          <li>Produce <strong>higher-multiplier economic activity</strong> that benefits more communities</li>
          <li>Invest in human capital (education, health) that generates returns for decades</li>
          <li>Reduce the federal deficit or fund other priorities</li>
          <li>Still leave the US with the world&apos;s largest military by a wide margin</li>
        </ul>
        <p>
          The only losers are defense contractor shareholders and executives — the people who have spent
          $1.3 billion on lobbying over the past decade to ensure this conversation never happens.
        </p>
      </div>

      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <blockquote className="italic text-stone-700 text-lg">
          &ldquo;War is a racket. It always has been. A few profit — and the many pay. But there is a
          way to stop it. You can&apos;t end it by disarmament conferences. You can&apos;t eliminate it by
          peace parleys at Geneva... It can be smashed effectively only by taking the profit out of war.&rdquo;
        </blockquote>
        <p className="text-muted text-sm mt-2">— Major General Smedley Butler, USMC, two-time Medal of Honor recipient, <em>War Is a Racket</em>, 1935</p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The Pentagon is the world&apos;s <strong>largest employer</strong> with 3.2 million employees — but it creates fewer jobs per dollar than almost any alternative.</li>
          <li>• Defense contractor CEO compensation averages <strong>$20-30M/year</strong> — roughly 300-700× what a deployed soldier earns.</li>
          <li>• After WWII, military employment dropped by <strong>88%</strong> and the economy boomed for 25 years.</li>
          <li>• The F-35 program spreads suppliers across <strong>375 of 435 congressional districts</strong> — making it politically impossible to cut.</li>
          <li>• The Philadelphia Naval Shipyard, closed in 1996, now hosts <strong>15,000 employees</strong> — more than double the original workforce.</li>
          <li>• Congress has <strong>blocked every BRAC request since 2005</strong> — 20 years of refusing to close bases the Pentagon says it doesn&apos;t need.</li>
          <li>• The defense industry&apos;s lobbying return on investment is approximately <strong>5,900:1</strong> — $150M in lobbying yields $886B in contracts.</li>
          <li>• The 1990s peace dividend — reducing defense spending from 5.2% to 3.0% of GDP — produced the <strong>longest peacetime economic expansion in US history</strong>.</li>
          <li>• Eisenhower, the general who won WWII, warned that military spending was &ldquo;a theft from those who hunger.&rdquo;</li>
          <li>• A single aircraft carrier ($13.3B) costs the equivalent of <strong>206,000 teachers&apos; salaries</strong> for one year.</li>
        </ul>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources &amp; Further Reading</h2>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>• Pollin, Robert &amp; Garrett-Peltier, Heidi. &ldquo;The U.S. Employment Effects of Military and Domestic Spending Priorities.&rdquo; PERI, UMass Amherst (2011, updated 2017)</li>
          <li>• Congressional Budget Office. &ldquo;The Economic Effects of Reducing Federal Spending on Defense.&rdquo; (2022)</li>
          <li>• Government Accountability Office. &ldquo;Defense Infrastructure: DOD Should Better Manage Risks and Costs of Its Excess Facility Reduction Efforts.&rdquo; GAO-23-105552 (2023)</li>
          <li>• DOD Office of Economic Adjustment. &ldquo;Community Guide to BRAC.&rdquo; Multiple editions (1988-2005)</li>
          <li>• Stockholm International Peace Research Institute (SIPRI). Military Expenditure Database (2024)</li>
          <li>• OpenSecrets.org. Defense industry lobbying and campaign contribution data (2014-2024)</li>
          <li>• Higgs, Robert. &ldquo;Depression, War, and Cold War.&rdquo; Oxford University Press (2006)</li>
          <li>• Melman, Seymour. &ldquo;The Permanent War Economy.&rdquo; Simon &amp; Schuster (1974)</li>
          <li>• Bastiat, Frédéric. &ldquo;That Which is Seen, and That Which is Not Seen.&rdquo; (1850)</li>
          <li>• Brown University Costs of War Project. &ldquo;Economic Costs of Post-9/11 Wars.&rdquo; (2023)</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <Link href="/tools/jobs-calculator" className="text-red-800 hover:underline block">→ Jobs Calculator — model the shift yourself</Link>
          <Link href="/opportunity-cost" className="text-red-800 hover:underline block">→ What else could $8 trillion buy?</Link>
          <Link href="/contractors" className="text-red-800 hover:underline block">→ Defense Contractors — who profits</Link>
          <Link href="/defense-budget" className="text-red-800 hover:underline block">→ The $886B Defense Budget</Link>
          <Link href="/analysis/military-industrial-complex" className="text-red-800 hover:underline block">→ The Military-Industrial Complex</Link>
          <Link href="/analysis/the-469" className="text-red-800 hover:underline block">→ 469 Military Interventions</Link>
          <Link href="/analysis/cost-per-life" className="text-red-800 hover:underline block">→ The Price of a Life — cost per death</Link>
          <Link href="/analysis/iran-2026" className="text-red-800 hover:underline block">→ Iran 2026 — the latest war nobody asked for</Link>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
