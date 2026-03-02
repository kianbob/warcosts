import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'
import { YearlySpending, TroopLevels } from './charts'

export const metadata: Metadata = {
  title: 'Afghanistan War Cost — $2.3 Trillion, 20 Years, Taliban Wins | WarCosts',
  description: 'The Afghanistan War (2001-2021) was the longest war in US history. $2.3 trillion spent, 2,461 US soldiers killed, 70,000+ Afghan civilians dead. After 20 years, the Taliban retook power in 11 days. Complete timeline, costs, and casualties.',
  keywords: ['Afghanistan war cost', 'longest war in US history', 'Afghanistan war casualties', 'Afghanistan war timeline', 'Kabul airport', 'Afghanistan Papers', 'Taliban', 'cost of Afghanistan war'],
  openGraph: {
    title: 'The Afghanistan War — 20 Years, $2.3 Trillion, Right Back to Taliban',
    description: 'The longest war in American history ended exactly where it started. Every dollar. Every death. Every lie.',
    url: 'https://warcosts.org/afghanistan-war',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Duration', value: '20 Years' },
  { label: 'Total Cost', value: '$2.3 Trillion' },
  { label: 'US Military Deaths', value: '2,461' },
  { label: 'US Wounded', value: '20,752' },
  { label: 'Afghan Civilian Dead', value: '70,000+' },
  { label: 'Outcome', value: 'Taliban Wins' },
]

const costBreakdown = [
  { category: 'Direct War Spending (DoD)', amount: 933, desc: 'Congressional appropriations for military operations 2001-2021' },
  { category: 'Veterans Healthcare (projected)', amount: 500, desc: 'Long-term care for 800K+ Afghanistan veterans through 2050' },
  { category: 'Veterans Disability', amount: 250, desc: 'Disability compensation for wounded and PTSD-affected veterans' },
  { category: 'Interest on War Debt', amount: 400, desc: 'War was financed entirely by borrowing; interest still compounding' },
  { category: 'State Dept & USAID', amount: 59, desc: 'Reconstruction, governance, development programs — most failed' },
  { category: 'Pentagon Base Budget Increase', amount: 100, desc: 'Permanent baseline increases attributed to Afghanistan operations' },
  { category: 'Intelligence Operations', amount: 58, desc: 'CIA, NSA, and other intelligence agency operations in Afghanistan' },
]

const yearlySpending = [
  { year: 2001, amount: 20 },
  { year: 2002, amount: 20 },
  { year: 2003, amount: 15 },
  { year: 2004, amount: 15 },
  { year: 2005, amount: 20 },
  { year: 2006, amount: 19 },
  { year: 2007, amount: 37 },
  { year: 2008, amount: 43 },
  { year: 2009, amount: 59 },
  { year: 2010, amount: 105 },
  { year: 2011, amount: 107 },
  { year: 2012, amount: 98 },
  { year: 2013, amount: 81 },
  { year: 2014, amount: 73 },
  { year: 2015, amount: 52 },
  { year: 2016, amount: 45 },
  { year: 2017, amount: 45 },
  { year: 2018, amount: 45 },
  { year: 2019, amount: 52 },
  { year: 2020, amount: 36 },
  { year: 2021, amount: 24 },
]

const troopLevels = [
  { year: 2001, troops: 2500 },
  { year: 2002, troops: 9700 },
  { year: 2003, troops: 10400 },
  { year: 2004, troops: 15800 },
  { year: 2005, troops: 19100 },
  { year: 2006, troops: 20400 },
  { year: 2007, troops: 23700 },
  { year: 2008, troops: 30100 },
  { year: 2009, troops: 68000 },
  { year: 2010, troops: 100000 },
  { year: 2011, troops: 97000 },
  { year: 2012, troops: 68000 },
  { year: 2013, troops: 46000 },
  { year: 2014, troops: 9800 },
  { year: 2015, troops: 9800 },
  { year: 2016, troops: 8400 },
  { year: 2017, troops: 8400 },
  { year: 2018, troops: 14000 },
  { year: 2019, troops: 13000 },
  { year: 2020, troops: 4500 },
  { year: 2021, troops: 0 },
]

const timeline = [
  { year: 'Oct 2001', title: 'Invasion', desc: 'After 9/11, the US invades Afghanistan to destroy al-Qaeda and remove the Taliban for harboring Osama bin Laden. Initial operation relies on CIA teams, Special Forces, and Northern Alliance fighters. Taliban collapses quickly.' },
  { year: 'Dec 2001', title: 'Tora Bora', desc: 'Bin Laden is cornered at Tora Bora in the White Mountains. The US relies on Afghan militias instead of deploying adequate US forces. Bin Laden escapes to Pakistan. He won\'t be found for nearly a decade.' },
  { year: '2002', title: 'Nation Building Begins', desc: 'Hamid Karzai installed as leader. US shifts focus to Iraq. Afghanistan gets minimal attention and resources. CIA begins paying Afghan warlords — many of them drug traffickers and human rights abusers — to serve as "allies."' },
  { year: '2003-05', title: 'The Forgotten War', desc: 'Iraq War consumes US attention and resources. Taliban regroups in Pakistan\'s tribal areas. Insurgency begins growing. US military presence remains small. The window for stabilization closes.' },
  { year: '2006-08', title: 'Taliban Resurgence', desc: 'Taliban launches major offensives across southern Afghanistan. Suicide bombings become routine. Opium production soars to record levels — funding the insurgency. US and NATO forces struggle to hold ground.' },
  { year: '2009', title: 'Obama\'s Surge', desc: 'Obama sends 30,000 additional troops, bringing total to 100,000. Sets a withdrawal timeline. The surge briefly reduces Taliban control but fails to build lasting Afghan government capacity. COIN strategy requires decades; the public has months of patience.' },
  { year: '2010-12', title: 'Peak and Drawdown', desc: '2010 is the deadliest year for US forces (499 killed). Bin Laden killed in Pakistan (May 2011) — undermining the rationale for staying. Drawdown begins. Green-on-blue attacks (Afghan forces killing US trainers) erode trust.' },
  { year: '2013-18', title: 'The "Afghan Papers" Era', desc: 'US shifts to advisory role. Afghan government and army remain corrupt and ineffective. Generals tell Congress the war is going well. Internal documents (later leaked as "The Afghanistan Papers") show officials knew they were losing and lied about it for years.' },
  { year: '2019', title: 'Trump-Taliban Deal', desc: 'Trump administration negotiates directly with the Taliban — excluding the Afghan government. Agreement to withdraw all US forces by May 2021. Taliban commits to not attacking US forces but continues fighting Afghan government. Deal legitimizes the Taliban.' },
  { year: 'Aug 2021', title: 'The Collapse', desc: 'Taliban sweeps through Afghanistan in 11 days, taking every provincial capital. The Afghan army — 300,000 on paper, largely ghost soldiers — collapses without firing a shot. President Ghani flees with suitcases of cash. Kabul falls August 15.' },
  { year: 'Aug 26, 2021', title: 'Abbey Gate', desc: 'Desperate evacuation from Kabul airport. ISIS-K suicide bomber kills 13 US service members and 170+ Afghan civilians at Abbey Gate. Chaotic airlift evacuates 124,000 people. Thousands of Afghan allies left behind.' },
]

const afghanistanPapers = [
  { quote: 'We were devoid of a fundamental understanding of Afghanistan — we didn\'t know what we were doing.', author: 'Douglas Lute, 3-star general, White House war czar' },
  { quote: 'Every data point was altered to present the best picture possible.', author: 'Bob Crowley, Army Colonel, senior counterinsurgency adviser' },
  { quote: 'The American people have constantly been lied to.', author: 'John Sopko, Special Inspector General for Afghanistan Reconstruction' },
]

const wastedMoney = [
  { item: 'Afghan National Defense & Security Forces', amount: '$88.6B', outcome: 'Collapsed in 11 days. Many units were "ghost soldiers" — existing only on payrolls.' },
  { item: 'Governance & Development Programs', amount: '$36B', outcome: 'Funded corruption, empowered warlords, enriched contractors. Most gains reversed by 2022.' },
  { item: 'Counter-narcotics Programs', amount: '$9.6B', outcome: 'Afghanistan became the world\'s largest opium producer. Produced 90% of global supply at peak.' },
  { item: 'Reconstruction Projects', amount: '$7.8B', outcome: 'Many never completed, never used, or immediately deteriorated. Schools with no teachers, roads to nowhere.' },
  { item: 'Afghan Highway Projects', amount: '$2.8B', outcome: 'Many destroyed by IEDs or deteriorated. Highways became Taliban ambush corridors.' },
  { item: 'Commander\'s Emergency Response Program', amount: '$3.6B', outcome: 'Cash handouts with minimal oversight. Inspector General found widespread fraud.' },
]

const faqs = [
  {
    q: 'How much did the Afghanistan War cost?',
    a: 'The Afghanistan War cost approximately $2.3 trillion, including $933 billion in direct military spending, $500+ billion in projected veteran healthcare, $400+ billion in interest on war debt, and tens of billions in reconstruction and State Department costs. This works out to approximately $300 million per day for 20 years.',
  },
  {
    q: 'How many people died in the Afghanistan War?',
    a: '2,461 US military personnel were killed, along with 3,846 US contractors. Over 70,000 Afghan civilians were killed, along with 66,000+ Afghan military and police. On the other side, approximately 53,000 Taliban fighters were killed. Total estimated deaths from the war exceed 176,000.',
  },
  {
    q: 'Why is Afghanistan called the longest war in US history?',
    a: 'The Afghanistan War lasted from October 7, 2001 to August 30, 2021 — nearly 20 years. This exceeds the Vietnam War (direct US involvement 1965-1973, 8 years of major combat), the American Revolution (8 years), and every other US conflict. It spanned four presidential administrations.',
  },
  {
    q: 'What are the Afghanistan Papers?',
    a: 'The Afghanistan Papers are a collection of internal government documents obtained by The Washington Post through FOIA litigation in 2019. They revealed that senior US officials, across multiple administrations, systematically lied to the public about the progress of the war. Officials privately acknowledged the war was unwinnable while publicly claiming success.',
  },
  {
    q: 'Why did the Afghan army collapse so quickly?',
    a: 'The Afghan army collapsed in 11 days because it was hollowed out by corruption, including "ghost soldiers" (soldiers existing only on payrolls so commanders could pocket their salaries), lack of morale, dependence on US air support and logistics, and ethnic/tribal divisions. When the US withdrew air support and maintenance contractors, the army could not function.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function AfghanistanWarPage() {
  const totalCost = costBreakdown.reduce((s, r) => s + r.amount, 0)

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Afghanistan War' }]} />
        <ShareButtons title="Afghanistan War — 20 Years, $2.3 Trillion, Taliban Wins" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Afghanistan War
          </h1>
          <p className="text-lg text-stone-500 mb-2">2001–2021 · The Longest War in American History</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            Twenty years. <strong className="text-[#991b1b]">$2.3 trillion</strong>.{' '}
            <strong className="text-[#991b1b]">176,000+ dead</strong>. And after all of it, the Taliban took the country
            back in <strong className="text-[#991b1b]">eleven days</strong>.
          </p>
        </header>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {keyStats.map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl md:text-2xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            $2.3 Trillion — $300 Million Per Day
          </h2>
          <p className="text-stone-700 mb-6">
            The war cost roughly <strong>$300 million per day</strong> for 7,300 days. At peak in 2010-2011,
            the US was spending over <strong>$100 billion per year</strong> — more than Afghanistan&apos;s entire GDP.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((r) => (
                  <tr key={r.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">${r.amount}B</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-stone-400 font-bold">
                  <td className="py-2 text-stone-900">Total</td>
                  <td className="py-2 text-right font-mono text-[#991b1b]">${totalCost}B+</td>
                  <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">$2.3 trillion and still growing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <YearlySpending data={yearlySpending} />
        </section>

        {/* Troop Levels */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Troop Levels: The Surge and Collapse
          </h2>
          <p className="text-stone-700 mb-6">
            The war followed a pattern of escalation and withdrawal that satisfied no strategy.
            Too few troops for too long, then a surge that came a decade too late, followed by a withdrawal
            that left allies stranded.
          </p>
          <TroopLevels data={troopLevels} />
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            20-Year Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200" />
            <div className="space-y-6">
              {timeline.map((event) => (
                <div key={event.year} className="relative pl-10">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#991b1b]" />
                  <div className="text-sm font-mono text-[#991b1b] mb-1">{event.year}</div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-1">{event.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Afghanistan Papers */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Afghanistan Papers: &ldquo;We Didn&apos;t Know What We Were Doing&rdquo;
          </h2>
          <p className="text-stone-700 mb-4">
            In December 2019, The Washington Post published the &ldquo;Afghanistan Papers&rdquo; — internal government
            documents revealing that senior officials across three administrations systematically lied about the war&apos;s
            progress. The documents, obtained through years of FOIA litigation, showed officials knew the war was
            unwinnable while telling the public the opposite.
          </p>
          <div className="space-y-4 mb-4">
            {afghanistanPapers.map((q) => (
              <div key={q.author} className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
                <p className="text-stone-800 italic mb-1">&ldquo;{q.quote}&rdquo;</p>
                <p className="text-stone-500 text-sm">— {q.author}</p>
              </div>
            ))}
          </div>
          <p className="text-stone-700">
            The parallels to the Pentagon Papers of the Vietnam era are unmistakable. In both cases,
            senior officials knew the war was failing and lied about it — for years, across administrations, to Congress
            and the American people.
          </p>
        </section>

        {/* Wasted Money */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Where the Money Went (and Didn&apos;t Work)
          </h2>
          <p className="text-stone-700 mb-6">
            The Special Inspector General for Afghanistan Reconstruction (SIGAR) documented billions in waste, fraud,
            and programs that achieved nothing. Here are some of the most notable failures:
          </p>
          <div className="space-y-4">
            {wastedMoney.map((w) => (
              <div key={w.item} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-stone-800">{w.item}</h3>
                  <span className="font-mono text-[#991b1b] font-semibold ml-4 shrink-0">{w.amount}</span>
                </div>
                <p className="text-sm text-stone-500">{w.outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Collapse */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Fall of Kabul: 11 Days
          </h2>
          <p className="text-stone-700 mb-4">
            On August 15, 2021, the Taliban entered Kabul. President Ghani fled the country — reportedly with
            suitcases full of cash. The Afghan National Army, trained and equipped by the US at a cost of $88.6 billion,
            dissolved without meaningful resistance.
          </p>
          <p className="text-stone-700 mb-4">
            The 300,000-strong army existed largely on paper. &ldquo;Ghost soldiers&rdquo; — fictitious personnel whose
            salaries were pocketed by commanders — may have accounted for tens of thousands. Units lacked ammunition,
            food, and fuel. When US contractors withdrew, the Afghan Air Force couldn&apos;t maintain its aircraft.
          </p>
          <p className="text-stone-700 mb-4">
            The chaotic evacuation from Hamid Karzai International Airport became the defining image of the war&apos;s end.
            Afghans clung to departing aircraft. Families were separated. On August 26, an ISIS-K suicide bomber killed
            13 US service members and 170+ Afghan civilians at Abbey Gate.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
            <p className="text-stone-700 text-sm">
              The US airlift evacuated 124,000 people in 17 days — a logistical achievement. But tens of thousands
              of Afghan allies — interpreters, drivers, intelligence sources — were left behind.
              Many have since been hunted by the Taliban.
            </p>
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
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/iraq-war', label: 'Iraq War — $3 Trillion, Zero WMDs' },
              { href: '/cost-of-war', label: 'Total Cost of US Wars' },
              { href: '/analysis/war-on-terror', label: 'The War on Terror' },
              { href: '/analysis/forever-wars', label: 'Forever Wars' },
              { href: '/vietnam-war', label: 'Vietnam War — The First Quagmire' },
              { href: '/veterans', label: 'Veterans — The Aftermath' },
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
            <li>Costs of War Project, Watson Institute, Brown University</li>
            <li>The Afghanistan Papers — The Washington Post (2019)</li>
            <li>Special Inspector General for Afghanistan Reconstruction (SIGAR) Reports</li>
            <li>Congressional Research Service — Costs of Major US Wars</li>
            <li>Department of Defense — Casualty Statistics</li>
            <li>United Nations Assistance Mission in Afghanistan (UNAMA) Reports</li>
            <li>Congressional Budget Office — The Budget and Economic Outlook</li>
          </ul>
        </section>

        <BackToTop />
      </div>
    </main>
  )
}
