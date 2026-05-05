import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'US Military Budget Explained: Where $886B Goes',
  description: '$886B defense budget broken down: personnel, operations, procurement, R&D. More than the next 10 countries combined.',
  openGraph: {
    title: 'The US Military Budget Explained: Where $886 Billion Goes',
    description: '$886 billion. $28,095 per second. More than the next 10 countries combined. Here\'s where every dollar goes.',
    url: 'https://www.warcosts.org/analysis/us-military-budget-explained',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/us-military-budget-explained',
  },
}

const budgetBreakdown = [
  { category: 'Operations & Maintenance', amount: 248e9, pct: 28, description: 'Day-to-day costs of running the military: fuel, equipment repairs, base operations, training exercises, civilian salaries, and contractor support.' },
  { category: 'Procurement', amount: 230e9, pct: 26, description: 'Buying weapons and equipment: F-35 fighters ($80M each), Virginia-class submarines ($3.4B each), Abrams tanks, missiles, ammunition, and vehicles.' },
  { category: 'Military Personnel', amount: 221e9, pct: 25, description: 'Pay and benefits for 1.3 million active-duty troops and 800,000 reserve/guard members. Average enlisted pay: $40,000–$58,000/year.' },
  { category: 'Research & Development', amount: 124e9, pct: 14, description: 'Developing next-generation weapons: hypersonic missiles, AI warfare systems, directed energy weapons, space technologies, and cyber capabilities.' },
  { category: 'Military Construction & Other', amount: 63e9, pct: 7, description: 'Building and maintaining 4,800+ facilities worldwide, military housing, family support programs, and nuclear weapons activities.' },
]

const historicalBudgets = [
  { year: 1950, nominal: 14.5, real2024: 184, note: 'Pre-Korean War baseline' },
  { year: 1953, nominal: 52.8, real2024: 601, note: 'Korean War peak' },
  { year: 1960, nominal: 48.1, real2024: 496, note: 'Eisenhower\'s "military-industrial complex" era' },
  { year: 1968, nominal: 81.9, real2024: 717, note: 'Vietnam War peak' },
  { year: 1975, nominal: 86.5, real2024: 490, note: 'Post-Vietnam drawdown' },
  { year: 1985, nominal: 252.7, real2024: 716, note: 'Reagan buildup peak' },
  { year: 1998, nominal: 268.2, real2024: 502, note: 'Post-Cold War "peace dividend" low' },
  { year: 2001, nominal: 304.7, real2024: 524, note: 'Pre-9/11 baseline' },
  { year: 2008, nominal: 594.6, real2024: 842, note: 'Iraq/Afghanistan surge + War on Terror peak' },
  { year: 2013, nominal: 495.5, real2024: 648, note: 'Sequestration cuts' },
  { year: 2020, nominal: 714.0, real2024: 1002, note: 'Trump-era rebuild' },
  { year: 2024, nominal: 886.0, real2024: 886, note: 'Current budget — highest nominal ever' },
]

const globalComparison = [
  { country: '🇺🇸 United States', spending: 886, pctGdp: 3.4 },
  { country: '🇨🇳 China', spending: 296, pctGdp: 1.7 },
  { country: '🇷🇺 Russia', spending: 109, pctGdp: 5.9 },
  { country: '🇮🇳 India', spending: 83, pctGdp: 2.4 },
  { country: '🇸🇦 Saudi Arabia', spending: 76, pctGdp: 7.1 },
  { country: '🇬🇧 United Kingdom', spending: 75, pctGdp: 2.3 },
  { country: '🇩🇪 Germany', spending: 68, pctGdp: 1.6 },
  { country: '🇫🇷 France', spending: 61, pctGdp: 2.1 },
  { country: '🇯🇵 Japan', spending: 50, pctGdp: 1.2 },
  { country: '🇰🇷 South Korea', spending: 47, pctGdp: 2.8 },
  { country: '🇮🇹 Italy', spending: 35, pctGdp: 1.5 },
]

const perSecondComparisons = [
  { item: 'US military spending', perSecond: '$28,095', note: '$886B ÷ 365 days ÷ 24 hours ÷ 60 min ÷ 60 sec' },
  { item: 'US education spending', perSecond: '$2,505', note: 'Dept of Education: $79B/year' },
  { item: 'Median US income earned', perSecond: '$0.0018', note: 'Median household income: $56,000/year' },
  { item: 'Pentagon spending per taxpayer', perSecond: '$0.22', note: '$6,800/year ÷ 365 ÷ 24 ÷ 60 ÷ 60' },
]

export default function USMilitaryBudgetExplainedPage() {
  const totalComparison = globalComparison.slice(1).reduce((sum, c) => sum + c.spending, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The US Military Budget Explained: Where $886 Billion Goes',
        description: 'A complete breakdown of the $886 billion US defense budget — where every dollar goes, how it compares globally, and what it means per taxpayer.',
        url: 'https://www.warcosts.org/analysis/us-military-budget-explained',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-28',
        dateModified: '2026-03-28',
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'US Military Budget Explained' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Budget Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          The US Military Budget Explained: Where $886 Billion Goes
        </h1>
        <p className="text-xl text-stone-300 mb-4">
          $28,095 per second. $6,800 per taxpayer. More than the next 10 countries combined.
        </p>
        <p className="text-stone-400 text-lg">
          The United States spends $886 billion per year on defense — the highest nominal military budget
          in human history. That&apos;s more than China, Russia, India, Saudi Arabia, the UK, Germany, France,
          Japan, South Korea, and Italy <em>combined</em>. But where does all that money actually go?
          Who benefits? And what does it mean for every American?
        </p>
      </div>

      <ShareButtons title="The US Military Budget Explained: Where $886 Billion Goes" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '$886B', label: 'FY2024 Budget', sub: 'National Defense Authorization Act' },
          { val: '$28,095', label: 'Per Second', sub: '$886B ÷ 31.5M seconds/year' },
          { val: '$6,800', label: 'Per Taxpayer', sub: '130M taxpayers share the cost' },
          { val: '10+', label: 'Countries Combined', sub: 'US outspends next 10 nations' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Budget Breakdown */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Where the Money Goes: The Five Categories</h2>
        <p className="text-stone-700 mb-6">
          The Pentagon&apos;s budget is divided into five major categories. Each one is larger than the entire
          government budget of most countries.
        </p>
        <div className="space-y-4">
          {budgetBreakdown.map(item => (
            <div key={item.category} className="bg-white border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-stone-900">{item.category}</h3>
                <div className="text-right">
                  <span className="text-red-700 font-bold">${(item.amount / 1e9).toFixed(0)}B</span>
                  <span className="text-stone-400 text-sm ml-2">({item.pct}%)</span>
                </div>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-3 mb-2">
                <div className="bg-red-600 h-3 rounded-full" style={{ width: `${item.pct}%` }} />
              </div>
              <p className="text-sm text-stone-600">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3">Source: Department of Defense FY2024 Budget Request; Congressional Budget Office analysis</p>
      </section>

      {/* Global comparison */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">US vs. the World: More Than the Next 10 Combined</h2>
        <p className="text-stone-700 mb-6">
          The United States spends ${globalComparison[0].spending}B on defense. The next 10 highest-spending
          countries spend ${totalComparison}B combined. America accounts for roughly 40% of all military
          spending on Earth.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 font-semibold">Country</th>
                <th className="text-right p-3 font-semibold">Spending (B)</th>
                <th className="text-right p-3 font-semibold">% of GDP</th>
                <th className="text-right p-3 font-semibold">vs. US</th>
              </tr>
            </thead>
            <tbody>
              {globalComparison.map((c, i) => (
                <tr key={c.country} className={i === 0 ? 'bg-red-50 font-semibold' : 'border-t'}>
                  <td className="p-3">{c.country}</td>
                  <td className="p-3 text-right">${c.spending}B</td>
                  <td className="p-3 text-right">{c.pctGdp}%</td>
                  <td className="p-3 text-right">{i === 0 ? '—' : `${((c.spending / 886) * 100).toFixed(1)}%`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400 mt-3">Source: SIPRI Military Expenditure Database, 2024 figures; China figures are SIPRI estimates (actual spending may be 30-50% higher)</p>
      </section>

      {/* Historical trends */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Historical Trends: 75 Years of Defense Spending</h2>
        <p className="text-stone-700 mb-6">
          In nominal dollars, the current $886B budget is the highest in US history. But adjusted for inflation,
          it&apos;s comparable to peak spending during the Korean War, Vietnam War, and Reagan buildup. The difference:
          those were spikes during crises. Today&apos;s spending is the <em>baseline</em>.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 font-semibold">Year</th>
                <th className="text-right p-3 font-semibold">Nominal ($B)</th>
                <th className="text-right p-3 font-semibold">2024 Dollars ($B)</th>
                <th className="text-left p-3 font-semibold">Context</th>
              </tr>
            </thead>
            <tbody>
              {historicalBudgets.map(b => (
                <tr key={b.year} className="border-t">
                  <td className="p-3 font-mono">{b.year}</td>
                  <td className="p-3 text-right">${b.nominal}B</td>
                  <td className="p-3 text-right font-semibold">${b.real2024}B</td>
                  <td className="p-3 text-stone-600">{b.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400 mt-3">Source: Office of Management and Budget Historical Tables; inflation adjustment via BLS CPI calculator</p>
      </section>

      {/* Per second */}
      <section className="mb-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What $886 Billion Looks Like</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-red-400 font-semibold mb-3">Per Unit of Time</h3>
              <ul className="space-y-2 text-stone-300">
                <li><strong className="text-white">Per second:</strong> $28,095</li>
                <li><strong className="text-white">Per minute:</strong> $1,685,692</li>
                <li><strong className="text-white">Per hour:</strong> $101,141,553</li>
                <li><strong className="text-white">Per day:</strong> $2,427,397,260</li>
                <li><strong className="text-white">Per month:</strong> $73,833,333,333</li>
              </ul>
            </div>
            <div>
              <h3 className="text-red-400 font-semibold mb-3">Per Person</h3>
              <ul className="space-y-2 text-stone-300">
                <li><strong className="text-white">Per US resident:</strong> $2,653 (335M people)</li>
                <li><strong className="text-white">Per taxpayer:</strong> $6,800 (130M filers)</li>
                <li><strong className="text-white">Per household:</strong> $6,800 (130M households)</li>
                <li><strong className="text-white">Per active-duty troop:</strong> $681,538 (1.3M troops)</li>
                <li><strong className="text-white">Per human on Earth:</strong> $110 (8B people)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's NOT included */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What the $886B Doesn&apos;t Include</h2>
        <p className="text-stone-700 mb-4">
          The headline $886B figure is already massive — but it&apos;s not the full picture. Significant military-related
          spending is scattered across other parts of the federal budget:
        </p>
        <div className="space-y-3">
          {[
            { item: 'Veterans Affairs', amount: '$325B', note: 'Healthcare, disability benefits, education for 18M+ veterans' },
            { item: 'Nuclear Weapons (DOE)', amount: '$38B', note: 'Maintained by Dept of Energy, not Pentagon' },
            { item: 'Homeland Security', amount: '$62B', note: 'Border security, TSA, Coast Guard, FEMA' },
            { item: 'Intelligence Community', amount: '$100B+ (est.)', note: 'CIA, NSA, NRO — much is classified ("black budget")' },
            { item: 'Interest on War Debt', amount: '$135B+', note: 'Interest on $8T+ borrowed for post-9/11 wars' },
            { item: 'State Dept Military Aid', amount: '$20B+', note: 'Foreign military financing, arms sales support' },
          ].map(item => (
            <div key={item.item} className="flex justify-between items-start bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div>
                <span className="font-semibold text-stone-900">{item.item}</span>
                <p className="text-xs text-stone-500">{item.note}</p>
              </div>
              <span className="text-amber-800 font-bold whitespace-nowrap ml-4">{item.amount}</span>
            </div>
          ))}
        </div>
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 mt-4">
          <p className="text-red-900 font-semibold">
            True national security spending: approximately $1.4–1.5 trillion per year
          </p>
          <p className="text-sm text-red-800 mt-1">
            When you include VA, nuclear weapons, homeland security, intelligence, and war debt interest,
            the actual cost of America&apos;s military apparatus is roughly 60-70% higher than the headline Pentagon budget.
          </p>
        </div>
        <p className="text-xs text-stone-400 mt-3">Source: Congressional Research Service; National Priorities Project; Costs of War Project at Brown University</p>
      </section>

      {/* What could it buy */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What Else Could $886 Billion Buy?</h2>
        <p className="text-stone-700 mb-4">
          The defense budget is so large it&apos;s hard to comprehend. Here&apos;s what the same amount of money could fund instead — every single year:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { item: 'Free public college for all', cost: '$79B/year', note: '11 years of free college for every American student' },
            { item: 'Eliminate child poverty in the US', cost: '$70B/year', note: '12+ years of lifting every child above the poverty line' },
            { item: 'Universal Pre-K', cost: '$20B/year', note: '44 years of Pre-K for every 3-4 year old' },
            { item: 'Clean water globally', cost: '$15B/year', note: '59 years of clean water for every human on Earth (WHO estimate)' },
            { item: 'Double NIH medical research', cost: '$47B/year', note: '18+ years of doubled cancer, Alzheimer\'s, and disease research' },
            { item: 'Rebuild US infrastructure', cost: '$110B/year', note: '8 years of fixing every bridge, road, and water system (ASCE)' },
          ].map(item => (
            <div key={item.item} className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900">{item.item}</h3>
              <p className="text-green-700 text-sm">{item.cost}</p>
              <p className="text-xs text-stone-500 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The political reality */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Why the Budget Never Goes Down</h2>
        <p className="text-stone-700 mb-4">
          Despite the end of major wars, the defense budget continues to climb. Several structural forces make cuts
          nearly impossible:
        </p>
        <div className="space-y-4">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-stone-900">🏭 Jobs in Every District</h3>
            <p className="text-sm text-stone-600">
              The F-35 program alone involves 1,800+ suppliers across 46 states. The Pentagon and defense contractors
              have deliberately spread production across as many congressional districts as possible, making every
              member of Congress a stakeholder in military spending. Cutting the defense budget means cutting jobs in
              <em>their</em> district.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-stone-900">💰 Lobbying Power</h3>
            <p className="text-sm text-stone-600">
              The defense industry spends $120M+ per year on lobbying and employs 700+ registered lobbyists —
              more than one for every member of Congress. Top contractors donate millions to the congressional
              committees that approve their contracts. In the 2022 cycle, defense PACs gave $35M+ to candidates.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-stone-900">🚪 The Revolving Door</h3>
            <p className="text-sm text-stone-600">
              Since 2001, over 80% of retiring 4-star generals and admirals have taken positions with defense
              contractors or consulting firms. Pentagon officials approve contracts, then retire to work for the
              companies they funded. It&apos;s not corruption by law — it&apos;s the system working as designed.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-stone-900">🏳️ The "Weak on Defense" Attack</h3>
            <p className="text-sm text-stone-600">
              Any politician who proposes cutting military spending faces the inevitable accusation of being
              &ldquo;weak on defense&rdquo; or &ldquo;not supporting the troops.&rdquo; This political dynamic
              means the budget can only go up. Even modest proposals to slow growth — not cut, just grow more
              slowly — face bipartisan opposition.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <div className="bg-stone-100 border rounded-xl p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">The Bottom Line</h2>
          <p className="text-stone-700 mb-3">
            The $886 billion defense budget is not just a number — it&apos;s a statement of national priorities.
            It&apos;s a choice to spend more on weapons than on education, infrastructure, healthcare, and scientific
            research combined. It&apos;s a choice to maintain 750 military bases in 80 countries while bridges
            crumble at home.
          </p>
          <p className="text-stone-700 mb-3">
            The question isn&apos;t whether America needs a strong military. It does. The question is whether
            $886 billion — more than the next 10 countries combined — is the right amount, and whether
            that money is being spent wisely.
          </p>
          <p className="text-stone-700">
            The Pentagon has never passed a full financial audit. In its first-ever audit in 2018, it failed.
            It has failed every audit since. We spend more on defense than any nation in history, and we
            can&apos;t account for where it all goes.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources & Citations</h2>
        <ul className="text-sm text-stone-600 space-y-1 list-disc pl-5">
          <li>Department of Defense FY2024 Budget Request, <em>Office of the Under Secretary of Defense (Comptroller)</em>, March 2023</li>
          <li>SIPRI Military Expenditure Database 2024, <em>Stockholm International Peace Research Institute</em></li>
          <li>Congressional Budget Office, <em>Long-Term Costs of the Administration&apos;s 2024 Defense Budget</em></li>
          <li>&ldquo;The Costs of War,&rdquo; Watson Institute, Brown University, 2024 update</li>
          <li>National Priorities Project, <em>Federal Budget Analysis</em>, Institute for Policy Studies</li>
          <li>Office of Management and Budget, <em>Historical Tables</em>, Table 3.1 — Outlays by Superfunction</li>
          <li>Government Accountability Office, <em>DoD Financial Audit Results</em>, 2023</li>
          <li>Congressional Research Service, <em>Defense Spending: Background and Issues</em>, updated 2024</li>
        </ul>
      </section>

      <div className="text-center text-sm text-stone-500 mb-8">
        <p>Last updated: March 2026</p>
        <Link href="/analysis" className="text-red-700 hover:underline">← Back to All Analysis</Link>
      </div>

      <BackToTop />
    </div>
  )
}
