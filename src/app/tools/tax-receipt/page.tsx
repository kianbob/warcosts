import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import TaxReceiptClient from './TaxReceiptClient'

export const metadata: Metadata = {
  title: 'Your Military Tax Receipt — See Where Your Tax Dollars Go',
  description: 'Enter your income and see exactly how much of your federal taxes fund the military. ~24% of income tax goes to defense spending. See the breakdown: Pentagon, veterans, nuclear weapons, war debt interest.',
  keywords: ['military tax receipt', 'how much of my taxes go to military', 'defense spending taxes', 'war tax', 'federal tax breakdown'],
}

const breakdownExplanation = [
  { category: 'Pentagon Base Budget (52%)', amount: 'Largest share', desc: 'Operations, personnel, weapons procurement, R&D. The $886B DOD budget.' },
  { category: 'Veteran Care & Benefits (18%)', amount: 'Growing fast', desc: 'Healthcare, disability compensation, pensions for 18M veterans. Will grow as post-9/11 veterans age.' },
  { category: 'Interest on War Debt (12%)', amount: 'Compounding', desc: 'Every post-9/11 war was funded by borrowing. You\'re paying interest on wars that ended years ago.' },
  { category: 'Nuclear Weapons / DOE (8%)', amount: '$50B/year', desc: 'Warhead production and maintenance by the Department of Energy\'s NNSA. Not in the DOD budget.' },
  { category: 'Homeland Security (6%)', amount: '$62B/year', desc: 'TSA, CBP, Coast Guard — created after 9/11 as part of the national security apparatus.' },
  { category: 'Foreign Military Aid (4%)', amount: '$18B/year', desc: 'Weapons and military training provided to foreign governments. Israel, Egypt, Jordan, Ukraine.' },
]

const didYouKnow = [
  'The average American household pays approximately $6,750 per year in military-related taxes — more than they spend on groceries for two months.',
  'If you earn $75,000/year, roughly $3,600 of your federal income tax goes to military spending. That\'s $300/month — enough for a car payment.',
  'The US spends more on its military per capita ($2,640/person) than any other country. The average Chinese citizen\'s share: $200.',
  'Since 9/11, each American taxpayer has paid approximately $70,000 for the War on Terror — mostly through debt that continues to accrue interest.',
  'The Pentagon has never passed an audit. You are required by law to account for every dollar on your tax return. The Pentagon is not.',
  'Military spending is 53% of federal discretionary spending. Education is 5%. You pay 10× more for bombs than for schools.',
  'The F-35 fighter jet program will cost $1.7 trillion over its lifetime — approximately $5,100 per American, including children.',
]

export default function TaxReceiptPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }, { label: 'Tax Receipt' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Your Military Tax Receipt</h1>
      <p className="text-stone-500 mb-2 max-w-2xl text-lg">
        How much of <em>your</em> money funds the war machine? Enter your income below to find out.
        Approximately <strong>24 cents of every federal income tax dollar</strong> goes to military
        spending — and that figure understates the true amount by excluding war debt interest, VA costs,
        and nuclear weapons.
      </p>
      <ShareButtons title="Your Military Tax Receipt — WarCosts" />

      <TaxReceiptClient />

      {/* How it breaks down */}
      <div className="mt-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Where Your Military Tax Dollar Goes</h2>
        <div className="space-y-3">
          {breakdownExplanation.map(b => (
            <div key={b.category} className="bg-white rounded-lg border p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm">{b.category}</h3>
                <span className="text-red-800 text-sm font-semibold">{b.amount}</span>
              </div>
              <p className="text-stone-500 text-xs mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology */}
      <div className="mt-12 prose max-w-2xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Methodology</h2>
        <p>
          We calculate your estimated federal income tax using <strong>2024 tax brackets</strong> (single
          filer, standard deduction of $14,600). We then apply the military share based on analysis of
          how federal revenue is allocated across discretionary and mandatory spending:
        </p>
        <ul>
          <li><strong>Discretionary spending analysis:</strong> Military spending is ~53% of discretionary spending (National Priorities Project)</li>
          <li><strong>Total budget analysis:</strong> When including mandatory spending, military-related costs are ~24% of the total federal budget (War Resisters League methodology)</li>
          <li><strong>True cost analysis:</strong> Including hidden costs (VA, DOE nuclear, intelligence, war debt interest), the share rises to ~30%+ of federal spending</li>
        </ul>
        <p>
          We use the 24% figure as a conservative baseline. The true military share of your taxes is likely
          higher when all related spending is included. Different methodologies produce different results —
          the National Priorities Project, War Resisters League, and Friends Committee on National Legislation
          all calculate slightly different shares based on what they include.
        </p>
        <p>
          Note: This calculator shows federal income tax only. It does not include state taxes, FICA
          (Social Security/Medicare), or other federal taxes. Federal income tax is the primary source of
          discretionary spending, which is where most military spending lives.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Context: What You&apos;re Paying For</h2>
        <p>
          Your military tax dollars fund the largest military apparatus in human history:
        </p>
        <ul>
          <li>1.3 million active-duty troops + 800,000 reserves + 750,000 civilian employees</li>
          <li>750+ overseas military bases in 80 countries</li>
          <li>11 nuclear-powered aircraft carriers (no other country has more than 2)</li>
          <li>5,500 nuclear warheads</li>
          <li>Counterterrorism operations in 78+ countries</li>
          <li>The F-35 program: $1.7 trillion lifetime cost</li>
          <li>An organization that has never passed a financial audit</li>
        </ul>
      </div>

      {/* Did you know */}
      <div className="mt-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">💡 Did You Know?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {didYouKnow.map((fact, i) => (
            <div key={i} className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-900 text-sm">{fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related tools */}
      <div className="mt-12 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Tools & Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/tools/cost-calculator" className="text-red-800 hover:underline">→ Your Personal War Cost — Lifetime military spending in your name</Link></li>
          <li><Link href="/tools/jobs-calculator" className="text-red-800 hover:underline">→ Jobs Calculator — What if we spent it on education instead?</Link></li>
          <li><Link href="/us-military-spending" className="text-red-800 hover:underline">→ US Military Spending — The full $886B breakdown</Link></li>
          <li><Link href="/defense-budget" className="text-red-800 hover:underline">→ Defense Budget — Where every dollar goes</Link></li>
          <li><Link href="/opportunity-cost" className="text-red-800 hover:underline">→ Opportunity Cost — What else your taxes could fund</Link></li>
        </ul>
      </div>

      <div className="mt-8 text-stone-400 text-sm italic max-w-2xl">
        <blockquote className="border-l-4 border-red-800 pl-4">
          &ldquo;Taxation without representation is tyranny. Taxation for wars of choice is something worse.&rdquo;
        </blockquote>
      </div>

      <BackToTop />
    </div>
  )
}
