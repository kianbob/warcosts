import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { BudgetBreakdownPie, BudgetComparisonChart } from '@/components/charts/DefenseBudgetCharts'

export const metadata: Metadata = {
  title: 'Defense Budget Breakdown — The True Cost Is $1.3 Trillion | WarCosts',
  description: 'How to read the US defense budget: base budget ($886B), OCO slush fund, black budget, DoE nuclear weapons, VA costs, intelligence community. The real national security spending is ~$1.3 trillion.',
  keywords: ['defense budget breakdown', 'military spending', 'pentagon budget', 'defense budget explained', 'US military budget', 'national security spending'],
  openGraph: {
    title: 'Defense Budget Breakdown — The True Cost Is $1.3 Trillion',
    description: 'The Pentagon says $886B. The real number is $1.3 trillion. Here\'s what they hide.',
    url: 'https://warcosts.org/defense-budget-explained',
    type: 'article',
  },
}

const officialBudget = [
  { name: 'DoD Base Budget', value: 886, description: 'The "official" defense budget. What gets reported in headlines. Covers personnel, operations, procurement, R&D, and construction.' },
  { name: 'VA (Veterans Affairs)', value: 325, description: 'Healthcare, disability compensation, education benefits, and housing for 18 million veterans. This is a deferred cost of war — it should be counted as military spending, but never is.' },
  { name: 'Intelligence Community', value: 72, description: 'CIA, NSA, NRO, DIA, NGA, and 12 other agencies. The "National Intelligence Program" ($67B) plus "Military Intelligence Program" ($28B). Parts are classified — the true number is unknown.' },
  { name: 'DoE Nuclear Weapons', value: 51, description: 'The Department of Energy maintains and modernizes ~5,500 nuclear warheads through the National Nuclear Security Administration (NNSA). This is military spending housed in a civilian department.' },
  { name: 'Homeland Security (military)', value: 62, description: 'Coast Guard, Customs and Border Protection, cybersecurity, and other DHS functions that are functionally military.' },
  { name: 'State Dept (military aid)', value: 20, description: 'Foreign Military Financing, International Military Education, peacekeeping operations. Military spending routed through the State Department.' },
  { name: 'Interest on War Debt', value: 80, description: 'The post-9/11 wars were financed entirely on borrowed money. Interest payments on ~$2.2 trillion in war-specific debt now cost ~$80B/year and growing.' },
]

const totalTrue = officialBudget.reduce((s, b) => s + b.value, 0)

const comparisonData = [
  { category: 'True US National Security', amount: 1300 },
  { category: 'China (official)', amount: 296 },
  { category: 'Russia', amount: 109 },
  { category: 'India', amount: 84 },
  { category: 'Saudi Arabia', amount: 76 },
  { category: 'UK', amount: 75 },
  { category: 'Germany', amount: 68 },
  { category: 'France', amount: 61 },
  { category: 'Next 9 combined', amount: 350 },
]

const budgetGimmicks = [
  { gimmick: 'Overseas Contingency Operations (OCO)', details: 'Created after 9/11 as an "emergency" war fund. Became a permanent slush fund exempt from budget caps. At its peak, $187B/year flowed through OCO with minimal oversight. "Ended" in FY2022 but the spending was simply moved to the base budget.' },
  { gimmick: 'Black Budget', details: 'Classified programs hidden within the larger budget. The "Special Access Programs" (SAPs) have no public oversight. Estimated at $50-80B annually. Congress members who sit on intelligence committees are briefed — but can\'t tell anyone what they learn.' },
  { gimmick: 'Unfunded Priorities Lists', details: 'Each service branch submits a "wish list" of programs not in the official budget request. Congress routinely funds them anyway, adding $20-30B above the president\'s request. It\'s a shell game: the Pentagon asks for less than it wants, knowing Congress will add more.' },
  { gimmick: 'Splitting Across Departments', details: 'Nuclear weapons → DoE. Military aid → State. Veterans → VA. Intelligence → DNI. Coast Guard → DHS. By splitting military spending across departments, the "defense budget" appears smaller than it is.' },
  { gimmick: 'Deferred Costs', details: 'The true cost of war includes veteran healthcare for decades after. Iraq/Afghanistan veterans will cost an estimated $2.2 trillion in VA benefits through 2050. These costs aren\'t in the "defense budget" — they\'re in the future.' },
  { gimmick: '"Continuing Resolutions"', details: 'Congress hasn\'t passed all appropriations bills on time since 1996. CRs freeze spending at prior-year levels — but the Pentagon always gets supplemental funding. The dysfunction is the feature: it prevents meaningful debate about spending levels.' },
]

const whatItBuys = [
  { item: '11 aircraft carriers', cost: '$13B each to build, $2.5B/year to operate', note: 'The rest of the world has 12 total (mostly small). The US has 11 supercarriers.' },
  { item: '750+ overseas bases', cost: '$55B/year to maintain', note: 'In 80+ countries. More than any empire in history.' },
  { item: '1.3M active troops', cost: '$180B/year (personnel)', note: 'Plus 800K reserves and 750K+ civilian DoD employees.' },
  { item: 'F-35 program', cost: '$1.7 trillion lifetime cost', note: 'The most expensive weapons program in human history. Still plagued by 871 unresolved deficiencies.' },
  { item: 'Nuclear triad modernization', cost: '$1.5 trillion over 30 years', note: 'New ICBMs (Sentinel), new subs (Columbia-class), new bombers (B-21). All three legs being replaced simultaneously.' },
  { item: '~5,500 nuclear warheads', cost: '$51B/year (NNSA)', note: 'Enough to destroy civilization several times over.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Defense Budget Breakdown — The True Cost Is $1.3 Trillion',
  description: 'How to read the US defense budget. Base budget, OCO, black budget, VA, nuclear weapons, and the true national security spending.',
  author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  datePublished: '2026-03-01',
  mainEntityOfPage: 'https://warcosts.org/defense-budget-explained',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the US defense budget?', acceptedAnswer: { '@type': 'Answer', text: 'The official DoD budget is $886 billion (FY2025). But total national security spending — including VA, intelligence, nuclear weapons, military aid, and war debt interest — is approximately $1.3 trillion.' } },
    { '@type': 'Question', name: 'What is the black budget?', acceptedAnswer: { '@type': 'Answer', text: 'The "black budget" refers to classified military and intelligence programs, estimated at $50-80 billion annually. These programs have no public oversight and are hidden within larger budget line items.' } },
    { '@type': 'Question', name: 'What is OCO spending?', acceptedAnswer: { '@type': 'Answer', text: 'Overseas Contingency Operations (OCO) was an "emergency" war fund created after 9/11 that became a permanent slush fund exempt from budget caps. At its peak it was $187B/year. It was formally ended in FY2022 but the spending was absorbed into the base budget.' } },
    { '@type': 'Question', name: 'How much does the US spend on nuclear weapons?', acceptedAnswer: { '@type': 'Answer', text: 'The Department of Energy\'s National Nuclear Security Administration (NNSA) spends approximately $51 billion per year maintaining and modernizing ~5,500 nuclear warheads. The 30-year nuclear modernization plan costs $1.5 trillion.' } },
  ],
}

export default function DefenseBudgetExplainedPage() {
  const pieData = officialBudget.map(b => ({ name: b.name, value: b.value }))

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Defense Budget Explained' }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Follow the Money</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          How to Read the Defense Budget
        </h1>
        <p className="text-stone-400 text-lg">
          The Pentagon says the defense budget is $886 billion. The real number — including veterans, nukes,
          intelligence, and war debt — is approximately <strong className="text-white">${(totalTrue / 1000).toFixed(1)} trillion</strong>.
          Here&apos;s what they hide and how they hide it.
        </p>
      </div>

      <ShareButtons title="Defense Budget Breakdown — The True Cost Is $1.3 Trillion" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$886B</p>
          <p className="text-sm text-stone-500">Official DoD Budget</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">~${(totalTrue / 1000).toFixed(1)}T</p>
          <p className="text-sm text-stone-500">True National Security</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">53%</p>
          <p className="text-sm text-stone-500">Of Discretionary Budget</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">&gt;Next 10</p>
          <p className="text-sm text-stone-500">Countries Combined</p>
        </div>
      </div>

      {/* Pie Chart */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Real Defense Budget Breakdown</h2>
        <p className="text-stone-600 text-sm mb-4">Total: ~${(totalTrue / 1000).toFixed(1)} trillion when all national security spending is included.</p>
        <BudgetBreakdownPie data={pieData} />
      </section>

      {/* Component Details */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Where the Money Goes</h2>
        <div className="space-y-4">
          {officialBudget.map(b => (
            <div key={b.name} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-bold text-stone-800">{b.name}</h3>
                <span className="ml-auto text-red-700 font-bold text-lg">${b.value}B</span>
              </div>
              <p className="text-sm text-stone-600">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Chart */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">US vs. The World</h2>
        <BudgetComparisonChart data={comparisonData} />
      </section>

      {/* Budget Gimmicks */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Budget Gimmicks — How They Hide the Numbers</h2>
        <div className="space-y-4">
          {budgetGimmicks.map(g => (
            <div key={g.gimmick} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-bold text-amber-800 mb-1">{g.gimmick}</h3>
              <p className="text-sm text-stone-700">{g.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What It Buys */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">What $1.3 Trillion Buys</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {whatItBuys.map(w => (
            <div key={w.item} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
              <h3 className="font-bold text-stone-800 mb-1">{w.item}</h3>
              <p className="text-red-700 text-sm font-medium mb-1">{w.cost}</p>
              <p className="text-xs text-stone-500">{w.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="my-12 bg-stone-900 text-white rounded-xl p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqJsonLd.mainEntity.map((q, i) => (
            <div key={i}>
              <h3 className="font-bold text-white mb-2">{q.name}</h3>
              <p className="text-stone-300 text-sm">{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/spending" className="text-red-700 hover:underline">→ Historical Spending Data</Link>
        <Link href="/defense-budget" className="text-red-700 hover:underline">→ Defense Budget Overview</Link>
        <Link href="/analysis/pentagon-waste" className="text-red-700 hover:underline">→ Pentagon Waste Analysis</Link>
        <Link href="/analysis/what-could-we-buy" className="text-red-700 hover:underline">→ What Could We Buy Instead?</Link>
      </div>

      <BackToTop />
    </div>
  )
}
