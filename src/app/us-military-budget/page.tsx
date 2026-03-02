import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'
import { DoDBreakdown, HistoricalTrend, GlobalComparison } from "./charts"

export const metadata: Metadata = {
  title: 'US Military Budget 2025 — $886B Official, $1.4T Real | WarCosts',
  description: 'How much does the US spend on military? The official 2025 Pentagon budget is $886 billion — but the real cost exceeds $1.4 trillion when you include veterans, nuclear weapons, intelligence, and homeland security. Full breakdown with charts.',
  keywords: ['US military budget 2025', 'how much does the US spend on military', 'defense budget breakdown', 'pentagon budget', 'military spending 2025', 'DoD budget', 'US defense spending'],
  openGraph: {
    title: 'US Military Budget 2025 — $886B Official, $1.4T Real',
    description: 'The Pentagon says $886B. The real number is $1.4T+. Here\'s where every dollar goes.',
    url: 'https://warcosts.org/us-military-budget',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const fullBudgetBreakdown = [
  { category: 'DoD Base Budget', amount: 842e9, desc: 'Core Pentagon operations, personnel, procurement, R&D' },
  { category: 'Overseas Contingency Operations (OCO)', amount: 44e9, desc: 'War funding — a slush fund that bypasses budget caps' },
  { category: 'Department of Energy (Nuclear)', amount: 51e9, desc: 'Nuclear warhead maintenance, modernization, cleanup' },
  { category: 'Veterans Affairs', amount: 325e9, desc: 'Healthcare, disability compensation, pensions for 18M vets' },
  { category: 'Intelligence Community', amount: 90e9, desc: 'CIA, NSA, NRO, DIA, and 14 other agencies' },
  { category: 'Homeland Security (Military)', amount: 28e9, desc: 'Coast Guard, CBP tactical, border militarization' },
  { category: 'State Dept Military Programs', amount: 18e9, desc: 'Foreign military financing, IMET, peacekeeping' },
  { category: 'Interest on War Debt', amount: 100e9, desc: 'Accumulated interest from borrowing to fund wars since 2001' },
]

const dodBreakdown = [
  { label: 'Operations & Maintenance', amount: 290, pct: 33 },
  { label: 'Military Personnel', amount: 170, pct: 19 },
  { label: 'Procurement', amount: 150, pct: 17 },
  { label: 'Research & Development', amount: 140, pct: 16 },
  { label: 'Military Construction', amount: 15, pct: 2 },
  { label: 'Other / Classified', amount: 121, pct: 13 },
]

const historicalBudget = [
  { year: 1950, amount: 150, label: 'Korean War buildup' },
  { year: 1955, amount: 350, label: 'Peak Korea / early Cold War' },
  { year: 1960, amount: 320, label: 'Eisenhower era' },
  { year: 1965, amount: 310, label: 'Vietnam escalation begins' },
  { year: 1968, amount: 500, label: 'Peak Vietnam' },
  { year: 1975, amount: 310, label: 'Post-Vietnam drawdown' },
  { year: 1980, amount: 330, label: 'Carter buildup begins' },
  { year: 1985, amount: 530, label: 'Reagan peak' },
  { year: 1990, amount: 480, label: 'End of Cold War' },
  { year: 1995, amount: 370, label: 'Peace dividend' },
  { year: 2000, amount: 390, label: 'Pre-9/11 baseline' },
  { year: 2005, amount: 610, label: 'Iraq War surge' },
  { year: 2010, amount: 750, label: 'Peak War on Terror' },
  { year: 2015, amount: 610, label: 'Sequestration era' },
  { year: 2020, amount: 740, label: 'Great power competition' },
  { year: 2024, amount: 886, label: 'Current budget' },
]

const globalComparison = [
  { country: 'United States', amount: 886 },
  { country: 'China', amount: 293 },
  { country: 'Russia', amount: 109 },
  { country: 'India', amount: 84 },
  { country: 'Saudi Arabia', amount: 75 },
  { country: 'United Kingdom', amount: 69 },
  { country: 'Germany', amount: 56 },
  { country: 'France', amount: 54 },
  { country: 'Japan', amount: 50 },
  { country: 'South Korea', amount: 46 },
]

const faqs = [
  {
    q: 'How much does the US spend on military in 2025?',
    a: 'The official Department of Defense budget for FY2025 is approximately $886 billion. However, when you include Veterans Affairs ($325B), nuclear weapons via the Department of Energy ($51B), intelligence agencies ($90B+), Homeland Security ($28B), and interest on war debt ($100B+), the true national security budget exceeds $1.4 trillion annually.',
  },
  {
    q: 'How does US military spending compare to other countries?',
    a: 'The United States spends more on its military than the next 10 countries combined. US defense spending accounts for roughly 37-40% of global military expenditure. China, the second-largest spender, allocates approximately $293 billion — about one-third of the US budget.',
  },
  {
    q: 'What percentage of the federal budget goes to the military?',
    a: 'The Pentagon\'s $886 billion accounts for approximately 53% of all federal discretionary spending — the portion Congress votes on each year. When mandatory military-related spending (like VA benefits) is included, national security consumes roughly 25% of the entire federal budget.',
  },
  {
    q: 'What is the Overseas Contingency Operations (OCO) fund?',
    a: 'OCO was a separate funding stream created after 9/11, ostensibly for war costs. In practice, it became a Pentagon slush fund that bypassed spending caps imposed by the Budget Control Act. Both parties used it to funnel money to the Pentagon without it counting against deficit targets. It has been partially reformed but the practice continues in different forms.',
  },
  {
    q: 'Why doesn\'t the Pentagon count nuclear weapons in its budget?',
    a: 'Nuclear warhead design, production, and maintenance are handled by the Department of Energy\'s National Nuclear Security Administration (NNSA), not the Pentagon. This bureaucratic split — dating to the Manhattan Project — conveniently keeps ~$51 billion in nuclear weapons costs off the DoD budget line, making the defense budget appear smaller than it really is.',
  },
  {
    q: 'Has the Pentagon ever passed an audit?',
    a: 'No. The Pentagon has failed every single audit since Congress first required them in 2018. The DoD is the only federal agency that has never passed an audit. In the most recent audit, auditors could not account for over $3.8 trillion in assets. Despite this, Congress continues to increase the budget each year.',
  },
  {
    q: 'How much does the US spend on military per person?',
    a: 'Based on the $886 billion DoD budget alone, the US spends approximately $2,640 per person. Including all national security spending (~$1.4T), the cost is over $4,200 per American — or roughly $10,700 per household annually.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function USMilitaryBudgetPage() {
  const totalReal = fullBudgetBreakdown.reduce((s, r) => s + r.amount, 0)

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'US Military Budget' }]} />
        <ShareButtons title="US Military Budget 2025 — $886B Official, $1.4T Real" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            US Military Budget 2025
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            The Pentagon says it costs <strong className="text-[#991b1b]">$886 billion</strong>. The real number — including
            veterans, nuclear weapons, intelligence, and war debt — exceeds{' '}
            <strong className="text-[#991b1b]">$1.4 trillion</strong> per year.
          </p>
        </header>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Official DoD Budget', value: '$886B' },
            { label: 'True National Security', value: `$${(totalReal / 1e9).toFixed(0)}B+` },
            { label: '% of Discretionary', value: '53%' },
            { label: 'Per Household', value: '$10,700' },
          ].map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-2xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* The Real Budget */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Real US Military Budget
          </h2>
          <p className="text-stone-700 mb-6">
            When politicians cite the &ldquo;defense budget,&rdquo; they mean the Department of Defense line item.
            But national security spending is spread across dozens of agencies, carefully structured to obscure its true size.
            Here is the complete picture:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800 hidden md:table-cell">Description</th>
                </tr>
              </thead>
              <tbody>
                {fullBudgetBreakdown.map((r) => (
                  <tr key={r.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">
                      ${(r.amount / 1e9).toFixed(0)}B
                    </td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-stone-400 font-bold">
                  <td className="py-2 text-stone-900">Total National Security</td>
                  <td className="py-2 text-right font-mono text-[#991b1b]">${(totalReal / 1e9).toFixed(0)}B+</td>
                  <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">The real cost of American &ldquo;defense&rdquo;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* DoD Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Inside the Pentagon&apos;s $886 Billion
          </h2>
          <p className="text-stone-700 mb-6">
            Even the &ldquo;official&rdquo; budget reveals distorted priorities. One-third goes to operations and maintenance —
            the day-to-day cost of maintaining 750+ overseas bases and a global military footprint.
          </p>
          <DoDBreakdown data={dodBreakdown} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            {dodBreakdown.map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-stone-50 rounded-lg p-3 border border-stone-200">
                <div className="text-lg font-bold text-[#991b1b] w-12 text-right">{item.pct}%</div>
                <div>
                  <div className="text-sm font-semibold text-stone-800">{item.label}</div>
                  <div className="text-xs text-stone-500">${item.amount}B</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Historical Trend */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Historical Military Spending (1950–2024)
          </h2>
          <p className="text-stone-700 mb-6">
            US military spending has never returned to pre-9/11 levels. Each war creates a new, higher baseline
            that persists long after the conflict ends — the &ldquo;ratchet effect&rdquo; that Eisenhower warned about.
            All figures in 2024 dollars.
          </p>
          <HistoricalTrend data={historicalBudget} />
        </section>

        {/* Global Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            US vs. The World
          </h2>
          <p className="text-stone-700 mb-6">
            The United States spends more on its military than the next <strong>10 countries combined</strong>.
            This isn&apos;t defense — it&apos;s the infrastructure of global empire.
          </p>
          <GlobalComparison data={globalComparison} />
          <p className="text-sm text-stone-500 mt-3">
            Source: SIPRI Military Expenditure Database, 2024. China figures are estimates; actual spending may be higher.
          </p>
        </section>

        {/* The Audit Problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Pentagon Has Never Passed an Audit
          </h2>
          <p className="text-stone-700 mb-4">
            The Department of Defense is the only federal agency that has <strong>never passed an audit</strong>.
            Congress first mandated annual audits in 1990. The Pentagon didn&apos;t even attempt one until 2018 — and has failed
            every year since.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 font-semibold mb-1">$3.8 trillion unaccounted for</p>
            <p className="text-stone-600 text-sm">
              In its most recent audit, the Pentagon could not account for $3.8 trillion in assets.
              That&apos;s more than the entire federal budget of most countries.
            </p>
          </div>
          <p className="text-stone-700">
            Despite this, Congress increases the Pentagon&apos;s budget virtually every year — often approving more
            than the DoD itself requests. In FY2024, Congress added $28 billion above the Pentagon&apos;s own request.
          </p>
        </section>

        {/* What $886B Could Buy */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            What $886 Billion Could Buy Instead
          </h2>
          <p className="text-stone-700 mb-6">
            The military budget isn&apos;t just money spent — it&apos;s money not spent on everything else.
            Here&apos;s what one year of Pentagon spending could fund:
          </p>
          <div className="space-y-3">
            {[
              { item: 'Eliminate all US medical debt', cost: '$195B' },
              { item: 'Make all public universities free for one year', cost: '$79B' },
              { item: 'End homelessness permanently', cost: '$20B' },
              { item: 'Repair every deficient US bridge', cost: '$125B' },
              { item: 'Universal pre-K for all 3-4 year olds', cost: '$34B' },
              { item: 'Triple the NIH research budget', cost: '$94B' },
              { item: 'Provide clean water to every American', cost: '$45B' },
              { item: 'Double the EPA budget', cost: '$12B' },
            ].map((alt) => (
              <div key={alt.item} className="flex items-center justify-between bg-stone-50 rounded-lg px-4 py-3 border border-stone-200">
                <span className="text-stone-700">{alt.item}</span>
                <span className="font-mono text-sm text-[#991b1b] font-semibold ml-4">{alt.cost}</span>
              </div>
            ))}
            <div className="flex items-center justify-between bg-[#991b1b]/5 rounded-lg px-4 py-3 border border-[#991b1b]/20">
              <span className="text-stone-800 font-semibold">All of the above combined</span>
              <span className="font-mono text-sm text-[#991b1b] font-bold ml-4">$604B</span>
            </div>
            <p className="text-sm text-stone-500">
              You could fund every item on this list and still have <strong>$282 billion left over</strong> — more than
              China&apos;s entire military budget.
            </p>
          </div>
        </section>

        {/* The Military-Industrial Complex */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Why the Budget Never Shrinks
          </h2>
          <p className="text-stone-700 mb-4">
            In 1961, President Eisenhower — a five-star general — warned of the &ldquo;military-industrial complex&rdquo;:
            the alliance of defense contractors, Pentagon bureaucrats, and members of Congress whose districts depend on
            military spending. Today, this complex is more powerful than ever.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Contractor Lobbying', stat: '$247M/year', desc: 'Top 5 defense contractors spend $247M annually lobbying Congress. ROI: $800 for every $1 spent.' },
              { title: 'Revolving Door', stat: '80%', desc: 'Of senior Pentagon officials who leave government join defense contractors within 2 years.' },
              { title: 'Jobs in 50 States', stat: '435 Districts', desc: 'The Pentagon distributes contracts in every single congressional district — by design.' },
            ].map((card) => (
              <div key={card.title} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="text-lg font-bold text-[#991b1b] mb-1">{card.stat}</div>
                <div className="text-sm font-semibold text-stone-800 mb-1">{card.title}</div>
                <div className="text-xs text-stone-500">{card.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Nuclear Budget */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Hidden Nuclear Budget
          </h2>
          <p className="text-stone-700 mb-4">
            The US is currently in the midst of a <strong>$2 trillion nuclear modernization</strong> program —
            replacing every leg of the nuclear triad (ICBMs, submarines, bombers) simultaneously. This cost is
            largely hidden in the Department of Energy budget, not the Pentagon&apos;s.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Program</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Lifetime Cost</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { program: 'Sentinel ICBM (GBSD)', cost: '$264B', status: 'Over budget, may be cancelled' },
                  { program: 'Columbia-class Submarines', cost: '$128B', status: '12 subs replacing Ohio class' },
                  { program: 'B-21 Raider Bomber', cost: '$203B', status: 'In production, Northrop Grumman' },
                  { program: 'W93 Warhead', cost: '$15B+', status: 'New warhead for submarine missiles' },
                  { program: 'Long-Range Standoff Weapon', cost: '$20B', status: 'Nuclear cruise missile' },
                  { program: 'Nuclear Command & Control', cost: '$77B', status: 'Upgrading Cold War-era systems' },
                ].map((p) => (
                  <tr key={p.program} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{p.program}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b]">{p.cost}</td>
                    <td className="py-2 pl-4 text-stone-500">{p.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ with JSON-LD */}
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }),
            }}
          />
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Related Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/us-military-spending', label: 'US Military Spending — Full Analysis' },
              { href: '/military-spending-by-country', label: 'Military Spending by Country' },
              { href: '/cost-of-war', label: 'Total Cost of US Wars' },
              { href: '/analysis/pentagon-waste', label: 'Pentagon Waste & Fraud' },
              { href: '/analysis/military-industrial-complex', label: 'The Military-Industrial Complex' },
              { href: '/defense-budget-explained', label: 'Defense Budget Explained' },
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
            <li>Department of Defense FY2025 Budget Request</li>
            <li>Congressional Budget Office — The Federal Budget in Fiscal Year 2024</li>
            <li>Stockholm International Peace Research Institute (SIPRI) Military Expenditure Database</li>
            <li>Costs of War Project, Watson Institute, Brown University</li>
            <li>Government Accountability Office — DoD Financial Management audit reports</li>
            <li>Congressional Research Service — Defense Budget Overview</li>
            <li>National Priorities Project — Federal Spending Analysis</li>
          </ul>
        </section>

        <BackToTop />
      </div>
    </main>
  )
}
