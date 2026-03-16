import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { WarCostByYear, ContinentalDollarChart } from '../charts'

export const metadata: Metadata = {
  title: 'Financial Cost of the Revolutionary War — Debt, Currency & Hamilton\'s Plan | WarCosts',
  description: 'How America financed its independence: Continental currency collapse, French loans, state debts, war bonds, and Hamilton\'s brilliant plan to make the new nation creditworthy.',
  keywords: ['Revolutionary War cost', 'Continental currency', 'French loans', 'Hamilton debt plan', 'war finance', 'Continental dollar'],
  openGraph: {
    title: 'How America Paid for Independence — The Financial Cost of the Revolution',
    description: 'From worthless Continental dollars to Hamilton\'s financial miracle: the full financial story of American independence.',
    url: 'https://warcosts.org/american-revolutionary-war/costs',
  },
}

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

const fundingSources = [
  { source: 'Continental Currency', amount: '$241M printed', detail: 'Congress had no taxing power, so it printed money. By 1781, $241 million in Continentals had been issued — and they were worth about 1¢ on the dollar. "Not worth a Continental" entered the American lexicon. Soldiers paid in this worthless paper suffered the most.', pctOfTotal: 65 },
  { source: 'State Contributions', amount: '$114M raised', detail: 'Individual states levied taxes, issued their own bonds, and requisitioned supplies. Compliance was uneven — some states contributed generously, others barely at all. The Articles of Confederation had no mechanism to compel payment.', pctOfTotal: 20 },
  { source: 'French Loans & Gifts', amount: '$9.6M', detail: 'France provided $6.35M in loans and $3.26M in outright gifts — over $300M in today\'s dollars. Without French financial support, the Continental Army could not have been supplied for the Yorktown campaign. Benjamin Franklin\'s diplomacy secured these funds.', pctOfTotal: 8 },
  { source: 'Dutch Loans', amount: '$3.6M', detail: 'John Adams spent years in the Netherlands negotiating loans from Dutch bankers. The Dutch, eager to undermine British commercial dominance, eventually provided crucial credit.', pctOfTotal: 4 },
  { source: 'Domestic Bonds & Loans', amount: '$11.5M', detail: 'Robert Morris (Superintendent of Finance) and Haym Salomon organized loans from wealthy patriots. Morris personally pledged his own credit to keep the army supplied during the critical Yorktown campaign.', pctOfTotal: 3 },
]

const debtFacts = [
  { label: 'National Debt (1783)', value: '$43 Million', note: 'Roughly $1.4 billion in 2026 dollars' },
  { label: 'State War Debts', value: '$25 Million', note: 'Assumed by federal government under Hamilton\'s plan' },
  { label: 'French Debt', value: '$6.35 Million', note: 'Not fully repaid until 1795' },
  { label: 'Dutch Debt', value: '$3.6 Million', note: 'Repaid over decades' },
  { label: 'Soldiers\' Back Pay', value: 'Years Owed', note: 'Many veterans sold their pay certificates to speculators for pennies' },
  { label: 'Total Cost (2026$)', value: '~$2.4 Billion', note: 'Less than the Pentagon spends in a single day today' },
]

export default function CostsPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Revolutionary War', href: '/american-revolutionary-war' }, { label: 'Financial Analysis' }]} dark />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold mt-6 mb-4">
            How America Paid for Independence
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            The new nation had no treasury, no taxing power, and no credit. It fought the world&apos;s richest empire with printed money, foreign loans, and sheer determination.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Key Stats */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The War Debt</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {debtFacts.map((d, i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="text-sm text-stone-400 uppercase tracking-wide">{d.label}</div>
                <div className="text-2xl font-bold text-red-700 mt-1">{d.value}</div>
                <div className="text-sm text-stone-500 mt-1">{d.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Charts */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">War Spending by Year (Nominal $M)</h3>
            <WarCostByYear data={warCostByYear} />
            <p className="text-sm text-stone-500 mt-2">Spending peaked in 1780 during the Southern Campaign. The war cost roughly $226M in nominal dollars.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Continental Dollar Collapse</h3>
            <ContinentalDollarChart data={continentalDollar} />
            <p className="text-sm text-stone-500 mt-2">From $1.00 face value to $0.01 in six years — a 99% loss. The first American inflation crisis.</p>
          </div>
        </section>

        {/* Funding Sources */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">How the War Was Funded</h2>
          <div className="space-y-6">
            {fundingSources.map((f, i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg">{f.source}</h3>
                  <span className="text-red-700 font-bold">{f.amount}</span>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-3 mb-3">
                  <div className="bg-red-600 h-3 rounded-full" style={{ width: `${f.pctOfTotal}%` }} />
                </div>
                <p className="text-stone-600 text-sm">{f.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Continental Currency Deep Dive */}
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">&ldquo;Not Worth a Continental&rdquo;</h2>
          <div className="space-y-3 text-stone-700">
            <p>The Continental Congress faced an impossible problem: it needed to fund a war but had no power to tax. The Articles of Confederation gave Congress no revenue authority — it could only request money from the states, which often didn&apos;t pay.</p>
            <p>The solution was the printing press. Between 1775 and 1779, Congress issued $241 million in Continental currency — backed by nothing more than the promise of a government that didn&apos;t yet exist.</p>
            <p>The result was inevitable hyperinflation. A pair of shoes that cost $8 in 1777 cost $5,000 by 1781. Soldiers were paid in paper that couldn&apos;t buy a meal. The phrase &ldquo;not worth a Continental&rdquo; became a lasting American expression for worthlessness.</p>
            <p className="font-bold">This experience burned itself into the American psyche. It&apos;s why the Constitution explicitly gives Congress — and only Congress — the power to coin money and regulate its value. The founders had lived through monetary disaster and made sure to prevent it from happening again.</p>
          </div>
        </section>

        {/* The French Lifeline */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">The French Lifeline</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-lg text-red-700">Financial Support</h3>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li><strong>Loans:</strong> $6.35 million (at low interest)</li>
                <li><strong>Gifts:</strong> $3.26 million (no repayment required)</li>
                <li><strong>Total:</strong> $9.6 million (~$300M in 2026 dollars)</li>
                <li><strong>Military supplies:</strong> Thousands of muskets, cannons, uniforms, and gunpowder shipped before the formal alliance</li>
              </ul>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-lg text-red-700">Military Support</h3>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li><strong>Troops:</strong> 12,000 French soldiers under Rochambeau</li>
                <li><strong>Navy:</strong> Admiral de Grasse&apos;s fleet — decisive at Yorktown</li>
                <li><strong>Officers:</strong> Lafayette, Rochambeau, de Grasse, von Steuben (via French connection)</li>
                <li><strong>Cost to France:</strong> ~1.3 billion livres — a major factor in France&apos;s own financial crisis and the French Revolution</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-500 text-sm mt-4">Without French support, American independence was almost certainly impossible. France&apos;s investment in American liberty ultimately cost France its own monarchy.</p>
        </section>

        {/* Hamilton's Plan */}
        <section className="bg-stone-900 text-white rounded-2xl p-8 md:p-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-6">Hamilton&apos;s Financial Miracle</h2>
          <div className="space-y-4 text-stone-300 text-lg">
            <p>By 1789, the new nation was drowning in debt. The national government owed $54 million. The states owed $25 million more. Foreign creditors doubted America would ever pay. Domestic creditors — including thousands of unpaid veterans — were desperate.</p>
            <p>Enter Alexander Hamilton, the 34-year-old first Secretary of the Treasury. His plan was audacious:</p>
            <ul className="space-y-2 ml-4">
              <li><strong className="text-red-400">Fund the national debt at face value</strong> — paying bondholders what they were owed, not the pennies their notes traded for on the secondary market. This established American creditworthiness.</li>
              <li><strong className="text-red-400">Assume state war debts</strong> — the federal government would take on all $25M in state debts. This bound the states to the national government and created a unified credit system.</li>
              <li><strong className="text-red-400">Create a national bank</strong> — the Bank of the United States would manage federal finances, issue stable currency, and make loans to growing businesses.</li>
              <li><strong className="text-red-400">Establish customs duties and excise taxes</strong> — giving the federal government reliable revenue streams for the first time.</li>
            </ul>
            <p>The plan was bitterly opposed — Jefferson and Madison fought it for months. The compromise: Hamilton got his financial system; Jefferson got the national capital on the Potomac (Washington, D.C.).</p>
            <p className="text-red-400 font-bold text-xl">Within five years, American bonds went from junk to the most sought-after securities in Europe. Hamilton turned a bankrupt revolutionary government into a financially viable nation. It was the economic equivalent of Yorktown.</p>
          </div>
        </section>

        {/* Perspective */}
        <section className="bg-white border border-stone-200 rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">💡 Putting It in Perspective</h2>
          <div className="space-y-3 text-stone-700">
            <p>The entire Revolutionary War — 8 years, the birth of a nation — cost approximately <strong>$2.4 billion in 2026 dollars</strong>.</p>
            <p>For comparison:</p>
            <ul className="space-y-1 ml-4">
              <li>• The War on Terror has cost over <strong>$8 trillion</strong> — 3,300 times more</li>
              <li>• The Pentagon&apos;s 2026 budget is roughly <strong>$886 billion</strong> — 370 times the entire Revolutionary War</li>
              <li>• A single B-2 bomber costs <strong>$2.1 billion</strong> — nearly as much as the entire war for independence</li>
              <li>• The F-35 program will cost <strong>$1.7 trillion</strong> — 708 times the Revolution</li>
            </ul>
            <p className="font-bold text-red-700 mt-4">The war that purchased liberty for a nation cost less than what America now spends on defense in a single day. The question is whether any dollar spent since has purchased anything half as valuable.</p>
          </div>
        </section>

        <div className="flex gap-4 flex-wrap">
          <Link href="/american-revolutionary-war" className="text-red-600 hover:underline">← Back to Revolutionary War</Link>
          <Link href="/analysis/price-of-liberty" className="text-red-600 hover:underline">The Price of Liberty →</Link>
        </div>

        <ShareButtons title="How America Paid for Independence" />
      </main>
    </>
  )
}
