import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import LastUpdated from '@/components/LastUpdated'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Military Budget History — Defense Spending from WWII to 2025',
  description: 'Track the US military budget from World War II to today. Defense spending as % of GDP, inflation-adjusted totals, Cold War peaks, post-9/11 surges, and how the Pentagon became the world\'s largest bureaucracy.',
  keywords: ['us military budget history', 'defense spending by year', 'military spending as percent of gdp', 'pentagon budget history', 'us defense budget over time', 'military spending trends'],
  openGraph: {
    title: 'US Military Budget History — From WWII to $886 Billion',
    description: 'How the Pentagon went from a wartime agency to a permanent trillion-dollar institution. Every year, every dollar, every era.',
    url: 'https://warcosts.org/military-budget-history',
    type: 'article',
  },
}

const budgetByEra = [
  { era: 'World War II Peak (1945)', nominal: '$83B', adjusted: '$1.4 trillion', pctGdp: '37.5%', note: 'The highest share of GDP ever devoted to defense' },
  { era: 'Post-WWII Drawdown (1948)', nominal: '$9.1B', adjusted: '$116 billion', pctGdp: '3.5%', note: 'Rapid demobilization before the Cold War began' },
  { era: 'Korean War Peak (1953)', nominal: '$52.8B', adjusted: '$603 billion', pctGdp: '14.2%', note: 'Cold War rearmament plus active combat' },
  { era: 'Vietnam War Peak (1968)', nominal: '$81.9B', adjusted: '$717 billion', pctGdp: '9.4%', note: 'Peak troop deployment of 536,000 in Vietnam' },
  { era: 'Post-Vietnam Low (1979)', nominal: '$116B', adjusted: '$487 billion', pctGdp: '4.6%', note: 'Carter-era restraint before the Reagan buildup' },
  { era: 'Reagan Buildup Peak (1987)', nominal: '$282B', adjusted: '$757 billion', pctGdp: '6.1%', note: '"Peace through strength" — 600-ship Navy, SDI' },
  { era: 'Post-Cold War Low (1999)', nominal: '$274B', adjusted: '$502 billion', pctGdp: '2.9%', note: 'The "peace dividend" — lowest % of GDP since 1940' },
  { era: 'Post-9/11 Surge (2008)', nominal: '$616B', adjusted: '$872 billion', pctGdp: '4.2%', note: 'Iraq surge + Afghanistan escalation + base budget growth' },
  { era: 'Sequester Low (2015)', nominal: '$562B', adjusted: '$724 billion', pctGdp: '3.1%', note: 'Budget Control Act caps briefly constrained growth' },
  { era: 'Trump Era (2020)', nominal: '$714B', adjusted: '$842 billion', pctGdp: '3.4%', note: 'Bipartisan agreement to lift sequester caps' },
  { era: 'Biden FY2024', nominal: '$886B', adjusted: '$886 billion', pctGdp: '3.4%', note: 'Largest nominal defense budget in history' },
  { era: 'FY2025 Request', nominal: '$895B', adjusted: '$895 billion', pctGdp: '3.3%', note: 'Continued growth despite no major active war' },
]

const spendingComparisons = [
  { item: 'US Military Budget (FY2024)', amount: '$886 billion', context: 'More than the next 10 countries combined' },
  { item: 'China (estimated, 2024)', amount: '$296 billion', context: 'Second-largest military spender globally' },
  { item: 'Russia (estimated, 2024)', amount: '$109 billion', context: 'Third-largest — significantly boosted by Ukraine war' },
  { item: 'Total NATO (excluding US)', amount: '$380 billion', context: 'All 31 US allies spend less than the US alone' },
  { item: 'US Education Spending (federal)', amount: '$79 billion', context: 'Pentagon gets 11x more than the Department of Education' },
  { item: 'US Infrastructure (IIJA annual)', amount: '$110 billion', context: 'The entire infrastructure law is ~12% of one year\'s defense budget' },
  { item: 'NASA', amount: '$25 billion', context: 'Pentagon spends NASA\'s entire budget roughly every 10 days' },
  { item: 'NIH (medical research)', amount: '$48 billion', context: 'Military spending is 18x all federal medical research' },
]

const trueMilitarySpending = [
  { category: 'DOD Base Budget', amount: '$886B', note: 'The "official" defense budget number politicians cite' },
  { category: 'Nuclear Weapons (DOE/NNSA)', amount: '$25B', note: 'Nuclear warhead maintenance and production — housed in the Energy Department, not DOD' },
  { category: 'Veterans Affairs', amount: '$325B', note: 'VA budget — direct consequence of military operations' },
  { category: 'Homeland Security', amount: '$62B', note: 'Created after 9/11 as a direct military/security response' },
  { category: 'Intelligence Community', amount: '$72B', note: 'CIA, NSA, NRO — classified budget revealed through leaks and partial disclosures' },
  { category: 'International Military Aid', amount: '$18B', note: 'State Department military assistance, arms sales support' },
  { category: 'War-Related Interest', amount: '$100B+', note: 'Annual interest on war debt (estimated)' },
  { category: 'Total "True" Military Spending', amount: '$1.4–1.5 trillion', note: 'The real cost of the national security state, annually' },
]

const gdpTrend = [
  { decade: '1940s', avgPctGdp: '22.2%', context: 'WWII — nearly a quarter of the entire economy devoted to war' },
  { decade: '1950s', avgPctGdp: '10.0%', context: 'Korean War + Cold War buildup. Permanent peacetime military established.' },
  { decade: '1960s', avgPctGdp: '8.5%', context: 'Vietnam escalation + nuclear arms race + space race' },
  { decade: '1970s', avgPctGdp: '5.5%', context: 'Post-Vietnam drawdown. All-volunteer force replaces draft (1973).' },
  { decade: '1980s', avgPctGdp: '5.8%', context: 'Reagan buildup: 600-ship Navy, SDI, B-2 bomber, massive procurement' },
  { decade: '1990s', avgPctGdp: '3.7%', context: '"Peace dividend" — base closures, force reductions, budget cuts' },
  { decade: '2000s', avgPctGdp: '3.8%', context: '9/11 reversed the peace dividend. Two wars, DHS creation, intel expansion.' },
  { decade: '2010s', avgPctGdp: '3.4%', context: 'Sequester briefly constrained growth. Spending still exceeded Cold War average in real dollars.' },
  { decade: '2020s', avgPctGdp: '3.4%', context: 'No major war, yet spending at historic nominal highs. Great power competition rationale.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'US Military Budget History — Defense Spending from WWII to 2025',
  description: 'Track the US military budget from World War II to today. Defense spending as % of GDP, inflation-adjusted totals, and how the Pentagon became a permanent institution.',
  url: 'https://warcosts.org/military-budget-history',
  publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  datePublished: '2025-07-27',
  dateModified: '2025-07-27',
}

export default function MilitaryBudgetHistoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FaqJsonLd faqs={[
        { q: 'What is the current US military budget?', a: 'The FY2024 US defense budget is $886 billion — the largest nominal military budget in American history. When you include veterans affairs, intelligence, nuclear weapons, and war-related interest, true national security spending exceeds $1.4 trillion annually.' },
        { q: 'What percentage of GDP does the US spend on the military?', a: 'The US currently spends about 3.4% of GDP on defense (DOD budget only). This is down from Cold War peaks of 10-14% and WWII\'s 37.5%, but in inflation-adjusted dollars, current spending exceeds every era except WWII.' },
        { q: 'How does US military spending compare to other countries?', a: 'The US spends more on its military than the next 10 countries combined. The US defense budget ($886B) exceeds the combined military spending of China ($296B), Russia ($109B), India ($83B), Saudi Arabia ($76B), the UK ($75B), Germany ($68B), France ($61B), South Korea ($48B), Japan ($46B), and Australia ($32B).' },
        { q: 'When was the US military budget the highest?', a: 'As a percentage of GDP, the peak was 1945 at 37.5% during WWII. In inflation-adjusted dollars, the current budget ($886B) is the highest ever in non-wartime. The Reagan-era peak was about $757B in today\'s dollars.' },
        { q: 'What is the "true" cost of US military spending?', a: 'The $886B DOD budget understates actual military spending by roughly 40-70%. Adding nuclear weapons (DOE), veterans affairs, homeland security, intelligence, military aid, and war-debt interest brings the true total to approximately $1.4-1.5 trillion annually.' },
      ]} />
      <Breadcrumbs items={[{ label: 'Military Budget History' }]} />
      <LastUpdated />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">US Military Budget History</h1>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        From <strong className="text-stone-800">37.5% of GDP</strong> during WWII to <strong className="text-stone-800">$886 billion</strong> today,
        the US military budget tells the story of how a temporary wartime mobilization became a permanent institution.
        America now spends more on defense than the <strong className="text-stone-800">next 10 countries combined</strong> —
        and the official number understates the true cost by nearly half.
      </p>
      <ShareButtons title="US Military Budget History — From WWII to $886 Billion" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { label: 'FY2024 Defense Budget', value: '$886B' },
          { label: '"True" Military Spending', value: '$1.4T+' },
          { label: 'Share of Federal Budget', value: '~13%' },
          { label: 'More Than Next', value: '10 Countries' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl md:text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <p className="text-lg">
          The US military budget has undergone dramatic swings over the past 80 years — surging during wars and
          the Cold War, briefly declining during &ldquo;peace dividends,&rdquo; then ratcheting back up and never
          returning to pre-war levels. The result is a <strong>one-way ratchet</strong>: each crisis permanently
          raises the baseline. Today&apos;s &ldquo;peacetime&rdquo; budget exceeds the Cold War average in real dollars.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Ratchet Effect: Spending Never Goes Back Down</h2>
        <p>
          Every major conflict or security crisis produces a surge in military spending. When the crisis ends,
          spending declines — but never to its pre-crisis level. This &ldquo;ratchet effect&rdquo; has operated
          consistently since World War II:
        </p>
        <ul>
          <li><strong>Pre-WWII (1940):</strong> Defense was 1.7% of GDP, ~$20B in today&apos;s dollars</li>
          <li><strong>Post-WWII floor (1948):</strong> Dropped to 3.5% — but never returned to 1.7%</li>
          <li><strong>Post-Korea floor (1955):</strong> Settled at ~10% — triple the pre-WWII level</li>
          <li><strong>Post-Vietnam floor (1979):</strong> Dropped to 4.6% — but not to pre-Korea levels</li>
          <li><strong>Post-Cold War floor (1999):</strong> Hit 2.9% — the lowest since 1940, but still $500B+ in real dollars</li>
          <li><strong>Post-9/11:</strong> Has not meaningfully declined. No war, yet $886B and rising.</li>
        </ul>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 The Permanent War Economy</p>
          <p className="text-amber-800">
            President Eisenhower warned about the &ldquo;military-industrial complex&rdquo; in 1961. At the time,
            defense was 9.4% of GDP. Today it&apos;s 3.4% — but in <strong>real dollars</strong>, the US spends
            more now than it did during the Korean War, the Vietnam War, or most of the Cold War. The percentage
            dropped because the economy grew, not because military spending was restrained.
          </p>
        </div>
      </div>

      {/* Budget by Era table */}
      <div className="max-w-4xl mx-auto my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Defense Budget by Era</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-stone-300">
                <th className="text-left py-3 px-2 font-[family-name:var(--font-heading)]">Era</th>
                <th className="text-right py-3 px-2 font-[family-name:var(--font-heading)]">Nominal</th>
                <th className="text-right py-3 px-2 font-[family-name:var(--font-heading)]">2024 Dollars</th>
                <th className="text-right py-3 px-2 font-[family-name:var(--font-heading)]">% of GDP</th>
                <th className="text-left py-3 px-2 font-[family-name:var(--font-heading)]">Note</th>
              </tr>
            </thead>
            <tbody>
              {budgetByEra.map((row, i) => (
                <tr key={row.era} className={`border-b border-stone-200 ${i % 2 === 0 ? 'bg-stone-50' : ''}`}>
                  <td className="py-3 px-2 font-medium">{row.era}</td>
                  <td className="py-3 px-2 text-right text-stone-500">{row.nominal}</td>
                  <td className="py-3 px-2 text-right font-bold text-red-800">{row.adjusted}</td>
                  <td className="py-3 px-2 text-right font-bold">{row.pctGdp}</td>
                  <td className="py-3 px-2 text-stone-500 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* GDP trend by decade */}
      <div className="max-w-3xl mx-auto my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Defense Spending as % of GDP by Decade</h2>
        <div className="space-y-3">
          {gdpTrend.map(d => (
            <div key={d.decade} className="bg-white rounded-lg border p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium font-[family-name:var(--font-heading)]">{d.decade}</span>
                <span className="text-red-800 font-bold text-xl font-[family-name:var(--font-heading)]">{d.avgPctGdp}</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-3 mb-2">
                <div
                  className="bg-red-800 h-3 rounded-full"
                  style={{ width: `${Math.min(parseFloat(d.avgPctGdp) / 25 * 100, 100)}%` }}
                />
              </div>
              <p className="text-stone-500 text-xs">{d.context}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The &ldquo;True&rdquo; Military Budget: $1.4 Trillion</h2>
        <p>
          The $886 billion DOD budget is the number politicians cite and media report. But it dramatically
          understates actual military-related spending. Significant military costs are scattered across other
          departments — nuclear weapons at the Department of Energy, veterans&apos; care at the VA, intelligence
          in classified budgets, and interest on war debt throughout the federal budget.
        </p>
        <p>
          When you add it all up, the United States spends approximately <strong>$1.4 to $1.5 trillion per year</strong> on
          national security — roughly <strong>$11,500 per household</strong>, or <strong>$31 million per minute</strong>.
        </p>
      </div>

      {/* True military spending breakdown */}
      <div className="max-w-3xl mx-auto my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">True National Security Spending</h2>
        <div className="space-y-3">
          {trueMilitarySpending.map(row => (
            <div key={row.category} className={`rounded-lg border p-4 flex justify-between items-center ${row.category.includes('Total') ? 'bg-red-50 border-red-200' : 'bg-white'}`}>
              <div>
                <span className={`font-medium text-sm ${row.category.includes('Total') ? 'text-red-900 font-bold' : ''}`}>{row.category}</span>
                <p className="text-stone-500 text-xs">{row.note}</p>
              </div>
              <span className={`font-bold font-[family-name:var(--font-heading)] text-xl ${row.category.includes('Total') ? 'text-red-900' : 'text-red-800'}`}>{row.amount}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">US vs. the World</h2>
        <p>
          The United States spends more on its military than the next 10 countries combined. This isn&apos;t
          because the US faces 10 times as many threats — it&apos;s because the military-industrial complex
          has created self-sustaining demand for weapons systems, bases, and personnel that serves institutional
          interests as much as national security.
        </p>
      </div>

      {/* Global comparisons */}
      <div className="max-w-3xl mx-auto my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Global Military Spending Comparison</h2>
        <div className="space-y-3">
          {spendingComparisons.map(row => (
            <div key={row.item} className="bg-white rounded-lg border p-4 flex justify-between items-center">
              <div>
                <span className="font-medium text-sm">{row.item}</span>
                <p className="text-stone-500 text-xs">{row.context}</p>
              </div>
              <span className="text-red-800 font-bold font-[family-name:var(--font-heading)] text-xl">{row.amount}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Base Closure Myth</h2>
        <p>
          The US maintains approximately <strong>750 military bases in 80 countries</strong> — a global footprint
          that no other nation comes close to matching. Many of these bases were established during the Cold War
          to contain Soviet expansion. The Soviet Union collapsed in 1991. Most of the bases remain.
        </p>
        <p>
          Congress has not authorized a Base Realignment and Closure (BRAC) round since 2005. The Pentagon has
          repeatedly requested one, estimating it could save $2-4 billion annually. Congress refuses because
          base closures affect jobs in congressional districts — a textbook example of how military spending
          becomes entrenched through political incentives rather than strategic necessity.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What Could the Money Buy Instead?</h2>
        <p>
          The $886 billion annual defense budget is an abstract number. Here&apos;s what it could fund if
          redirected:
        </p>
        <ul>
          <li><strong>Universal Pre-K for every American child:</strong> ~$30B/year (3.4% of defense budget)</li>
          <li><strong>Eliminate all student loan debt:</strong> $1.6T total (~2 years of defense spending)</li>
          <li><strong>Clean water infrastructure nationwide:</strong> ~$45B/year (5% of defense budget)</li>
          <li><strong>Double NIH medical research:</strong> ~$48B/year (5.4% of defense budget)</li>
          <li><strong>Triple NASA&apos;s budget:</strong> ~$50B/year (5.6% of defense budget)</li>
          <li><strong>End homelessness:</strong> ~$20B/year (2.3% of defense budget)</li>
        </ul>
        <p>
          This isn&apos;t an argument for zero defense spending — it&apos;s context for understanding the
          trade-offs Americans make every year without ever being asked to vote on them.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final
          sense, a theft from those who hunger and are not fed, those who are cold and are not clothed.&rdquo;
          <br />— President Dwight D. Eisenhower, 1953
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Audit Problem</h2>
        <p>
          The Department of Defense is the only federal agency that has <strong>never passed an audit</strong>.
          Despite being legally required to submit to audits since 1990, the Pentagon didn&apos;t attempt one
          until 2018. It has failed every year since. In its most recent audit, the DOD could not account for
          over <strong>$3.8 trillion in assets</strong>.
        </p>
        <p>
          No private company could survive this level of financial mismanagement. No other government agency
          would be rewarded with budget increases after failing to account for trillions. Yet every year,
          Congress increases the Pentagon&apos;s budget — often adding tens of billions more than the Pentagon
          itself requests.
        </p>
      </div>

      {/* Related pages */}
      <div className="max-w-3xl mx-auto my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/cost-of-war', label: 'Cost of War', desc: '$11.3 trillion spent on war since 1776' },
            { href: '/war-profiteering', label: 'War Profiteering', desc: 'Who profits from military spending' },
            { href: '/defense-contractors', label: 'Defense Contractors', desc: 'The companies that build the weapons' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="bg-white rounded-lg border p-4 hover:border-red-300 hover:shadow-sm transition-all no-underline">
              <p className="font-medium text-red-800 font-[family-name:var(--font-heading)]">{link.label}</p>
              <p className="text-stone-500 text-xs">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
