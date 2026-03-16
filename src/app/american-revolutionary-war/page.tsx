import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { WarCostByYear, ContinentalDollarChart, CostComparisonChart, BattleCasualtiesChart } from './charts'

export const metadata: Metadata = {
  title: 'American Revolutionary War — The Cost of Liberty (1775-1783) | WarCosts',
  description: 'The American Revolutionary War cost ~$2.4 billion in 2026 dollars and ~25,000 American lives. 13 colonies became a free nation. The full cost, battles, figures, and financial analysis of American independence.',
  keywords: ['Revolutionary War cost', 'American Revolution', 'cost of independence', 'Revolutionary War casualties', 'founding fathers', 'Continental Army', 'Declaration of Independence'],
  openGraph: {
    title: 'The American Revolutionary War — What Liberty Cost',
    description: '~$2.4B in 2026 dollars. ~25,000 American dead. 13 colonies became the United States. The war that changed the world.',
    url: 'https://warcosts.org/american-revolutionary-war',
    type: 'article',
  },
}

const keyStats = [
  { label: 'Duration', value: '1775–1783' },
  { label: 'Total Cost (2026$)', value: '~$2.4 Billion' },
  { label: 'American Deaths', value: '~25,000' },
  { label: 'British Deaths', value: '~24,000' },
  { label: 'Outcome', value: 'Independence' },
  { label: 'Result', value: '13 Colonies → Free Nation' },
]

const warCostByYear = [
  { year: 1775, amount: 5 },
  { year: 1776, amount: 20 },
  { year: 1777, amount: 26 },
  { year: 1778, amount: 30 },
  { year: 1779, amount: 37 },
  { year: 1780, amount: 50 },
  { year: 1781, amount: 38 },
  { year: 1782, amount: 15 },
  { year: 1783, amount: 5 },
]

const continentalDollar = [
  { year: 1775, value: 1.00 },
  { year: 1776, value: 1.00 },
  { year: 1777, value: 0.34 },
  { year: 1778, value: 0.17 },
  { year: 1779, value: 0.03 },
  { year: 1780, value: 0.025 },
  { year: 1781, value: 0.01 },
]

const costComparison = [
  { war: 'Revolutionary War', cost: 2.4 },
  { war: 'Civil War', cost: 80 },
  { war: 'World War I', cost: 380 },
  { war: 'World War II', cost: 4700 },
  { war: 'Korean War', cost: 400 },
  { war: 'Vietnam War', cost: 1000 },
  { war: 'War on Terror', cost: 8000 },
]

const keyBattles = [
  { name: 'Lexington & Concord', american: 93, british: 273 },
  { name: 'Bunker Hill', american: 450, british: 1054 },
  { name: 'Long Island', american: 2000, british: 400 },
  { name: 'Trenton', american: 5, british: 918 },
  { name: 'Saratoga', american: 800, british: 1500 },
  { name: 'Cowpens', american: 124, british: 839 },
  { name: 'Yorktown', american: 389, british: 7685 },
]

const timeline = [
  { year: '1765', event: 'Stamp Act — "No taxation without representation"' },
  { year: '1770', event: 'Boston Massacre — 5 colonists killed' },
  { year: '1773', event: 'Boston Tea Party — 342 chests dumped' },
  { year: 'Apr 1775', event: 'Lexington & Concord — War begins' },
  { year: 'Jun 1775', event: 'Bunker Hill — Costly British "victory"' },
  { year: 'Jan 1776', event: 'Common Sense — Paine makes the case' },
  { year: 'Jul 4, 1776', event: 'Declaration of Independence signed' },
  { year: 'Dec 1776', event: 'Crossing the Delaware — Trenton victory' },
  { year: 'Oct 1777', event: 'Saratoga — The turning point' },
  { year: '1777-78', event: 'Valley Forge — The crucible' },
  { year: 'Feb 1778', event: 'Franco-American Alliance' },
  { year: 'Oct 1781', event: 'Yorktown — Cornwallis surrenders' },
  { year: 'Sep 1783', event: 'Treaty of Paris — Independence recognized' },
  { year: 'Dec 1783', event: 'Washington resigns his commission' },
]

const founders = [
  { name: 'George Washington', role: 'Commander-in-Chief', desc: 'Held the army together for 8 years. Voluntarily resigned power.' },
  { name: 'Thomas Jefferson', role: 'Declaration Author', desc: 'At 33, wrote the most consequential political document in history.' },
  { name: 'Benjamin Franklin', role: 'Diplomat', desc: 'At 70, secured the French alliance that made victory possible.' },
  { name: 'John Adams', role: 'Political Philosopher', desc: 'Champion of independence in Congress. Secured Dutch recognition.' },
  { name: 'Alexander Hamilton', role: 'Chief of Staff & Officer', desc: 'Led the charge at Yorktown. Later built the financial system.' },
  { name: 'Thomas Paine', role: 'Revolutionary Writer', desc: 'Common Sense sold 500,000 copies. Made revolution popular.' },
]

export default function AmericanRevolutionaryWarPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'American Revolutionary War' }]} dark />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold mt-6 mb-4">
            The American Revolutionary War
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-2">1775–1783 · The Cost of Liberty</p>
          <p className="text-lg text-stone-400 max-w-3xl mx-auto mb-10">
            Thirteen colonies challenged the most powerful empire on Earth — and won. The war that created the United States, established self-governance as a human right, and changed the course of history.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyStats.map(s => (
              <div key={s.label} className="bg-stone-800 rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-red-500">{s.value}</div>
                <div className="text-sm text-stone-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-page Navigation */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-wrap gap-3 justify-center">
          {[
            { href: '/american-revolutionary-war/battles', label: '⚔️ Battle Database' },
            { href: '/american-revolutionary-war/founding-fathers', label: '🏛️ Founding Fathers' },
            { href: '/american-revolutionary-war/declaration-of-independence', label: '📜 Declaration of Independence' },
            { href: '/american-revolutionary-war/costs', label: '💰 Financial Analysis' },
            { href: '/analysis/price-of-liberty', label: '📖 Price of Liberty' },
            { href: '/analysis/founding-fathers-at-war', label: '📖 Founders at War' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="bg-stone-100 hover:bg-red-50 hover:text-red-700 text-stone-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Timeline */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">Timeline of the Revolution</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-red-200" />
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold shrink-0 relative z-10">
                    {i + 1}
                  </div>
                  <div>
                    <span className="font-bold text-red-700">{t.year}</span>
                    <span className="text-stone-600 ml-2">{t.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Battles Chart */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">Key Battles — Casualties Compared</h2>
          <p className="text-stone-500 mb-6">American vs British casualties at major engagements. <Link href="/american-revolutionary-war/battles" className="text-red-600 hover:underline">See all 17 battles →</Link></p>
          <BattleCasualtiesChart data={keyBattles} />
        </section>

        {/* Founding Fathers */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">The Founding Fathers</h2>
          <p className="text-stone-500 mb-6">The men who risked everything. <Link href="/american-revolutionary-war/founding-fathers" className="text-red-600 hover:underline">Full profiles →</Link></p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map(f => (
              <div key={f.name} className="bg-white border border-stone-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">{f.name}</h3>
                <p className="text-red-600 text-sm font-medium mb-2">{f.role}</p>
                <p className="text-stone-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Financial Cost */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">How the War Was Funded</h2>
          <p className="text-stone-500 mb-6">
            <Link href="/american-revolutionary-war/costs" className="text-red-600 hover:underline">Deep financial analysis →</Link>
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">War Spending by Year (Nominal $M)</h3>
              <WarCostByYear data={warCostByYear} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Continental Dollar Collapse</h3>
              <ContinentalDollarChart data={continentalDollar} />
            </div>
          </div>
          <div className="bg-stone-100 rounded-xl p-6 space-y-3">
            <h3 className="font-bold text-lg">Funding Sources</h3>
            <ul className="space-y-2 text-stone-700">
              <li><strong className="text-red-700">Continental Currency:</strong> Congress printed $241 million in paper money — which collapsed to 1¢ on the dollar by 1781. "Not worth a Continental."</li>
              <li><strong className="text-red-700">French Loans & Gifts:</strong> $9.6 million (over $300M in today&apos;s dollars). France&apos;s support was the financial lifeline.</li>
              <li><strong className="text-red-700">State Debts:</strong> States raised $114 million through their own taxes and bonds.</li>
              <li><strong className="text-red-700">Dutch Loans:</strong> John Adams secured crucial loans from Dutch bankers totaling $3.6 million.</li>
              <li><strong className="text-red-700">War Bonds:</strong> Robert Morris and Haym Salomon organized loans from wealthy patriots.</li>
            </ul>
          </div>
        </section>

        {/* Cost Comparison */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">Independence vs Empire: Cost Comparison</h2>
          <p className="text-stone-500 mb-6">The Revolutionary War cost a fraction of what America later spent on foreign interventions.</p>
          <CostComparisonChart data={costComparison} />
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
            <h3 className="font-bold text-lg mb-2">💡 Perspective</h3>
            <p className="text-stone-700">
              The entire Revolutionary War — 8 years, the birth of a nation — cost less in real dollars than <strong>one week</strong> of the War on Terror. The war that won independence cost roughly what the Pentagon spends in a single day in 2026. Every dollar spent on the Revolution purchased liberty. Can the same be said for $8 trillion spent on the War on Terror?
            </p>
          </div>
        </section>

        {/* The Cost of Liberty Editorial */}
        <section className="bg-stone-900 text-white rounded-2xl p-8 md:p-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-6">The Cost of Liberty</h2>
          <div className="prose prose-invert prose-lg max-w-none space-y-4">
            <p>
              Every war has a cost. Most wars are measured by what they destroyed. The American Revolution is measured by what it created.
            </p>
            <p>
              Twenty-five thousand Americans died — roughly 1% of the colonial population. They died of battle wounds, disease, starvation, and exposure. Thousands more suffered in British prison ships anchored in New York Harbor, where more Americans died than in all the war&apos;s battles combined.
            </p>
            <p>
              The financial cost was staggering for the young nation. The Continental dollar became worthless. Soldiers went unpaid for years. Veterans returned to farms seized for debt. The war left America drowning in obligations it could barely service.
            </p>
            <p>
              And yet — what was purchased with that suffering?
            </p>
            <p>
              The Declaration of Independence established, for the first time in history, that governments derive their just powers from the consent of the governed. That individuals possess rights no government can legitimately take away. That when a government becomes destructive of these ends, the people have the right to alter or abolish it.
            </p>
            <p>
              These were not just words. They were a revolution in human thought — ideas that toppled monarchies, inspired movements for self-determination on every continent, and remain the foundation of liberty today.
            </p>
            <p>
              The men who signed the Declaration pledged their lives, their fortunes, and their sacred honor. Many lost the first two. None lost the third.
            </p>
            <p className="text-red-400 font-bold text-xl">
              The Revolution was the one American war where the cost was justified — because what was gained was irreplaceable.
            </p>
          </div>
        </section>

        <ShareButtons title="American Revolutionary War — The Cost of Liberty" />
      </main>
    </>
  )
}
