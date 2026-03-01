import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import CostCalcClient from './CostCalcClient'

export const metadata: Metadata = {
  title: 'Your Personal War Cost — How Much Has the US Spent on War During Your Lifetime? | WarCosts',
  description: 'Enter your birth year and state to see how much the US has spent on wars and military operations during your lifetime. Includes per-capita share, total military spending, and what else it could have funded.',
  keywords: ['personal war cost', 'how much war costs me', 'lifetime military spending', 'war cost per person', 'military spending per capita'],
}

const context = [
  { label: 'Born in 1960', cost: '$8.2 trillion', note: 'Lived through Vietnam, Cold War, Gulf War, War on Terror. Your share: ~$24,000+' },
  { label: 'Born in 1980', cost: '$6.5 trillion', note: 'Reagan buildup, Gulf War, War on Terror. Your share: ~$19,500+' },
  { label: 'Born in 1990', cost: '$5.8 trillion', note: 'Gulf War through War on Terror. Your share: ~$17,400+' },
  { label: 'Born in 2000', cost: '$4.2 trillion', note: 'Entire life during War on Terror era. Your share: ~$12,600+' },
  { label: 'Born in 2010', cost: '$2.1 trillion', note: 'Post-surge Afghanistan, ISIS, Ukraine, Iran. Your share: ~$6,300+' },
]

export default function CostCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }, { label: 'Cost Calculator' }]} />

      <div className="text-center mb-12">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
          Your Personal <span className="text-red-700">War Cost</span>
        </h1>
        <p className="text-stone-500 text-lg max-w-2xl mx-auto">
          How much has the United States spent on wars and military operations during your lifetime?
          Enter your state and birth year to find out. The numbers may surprise you — or they may confirm
          what you already suspected.
        </p>
        <ShareButtons title="Your Personal War Cost — WarCosts Calculator" />
      </div>

      <CostCalcClient />

      {/* Context section */}
      <div className="mt-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Sample Lifetime War Costs</h2>
        <div className="space-y-3">
          {context.map(c => (
            <div key={c.label} className="bg-white rounded-lg border p-4 flex flex-wrap justify-between items-center gap-2">
              <div>
                <span className="font-medium">{c.label}</span>
                <p className="text-stone-500 text-xs">{c.note}</p>
              </div>
              <span className="text-red-800 font-bold font-[family-name:var(--font-heading)] text-xl">{c.cost}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology */}
      <div className="mt-12 prose max-w-2xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Methodology</h2>
        <p>
          This calculator uses annual US military spending data from SIPRI and OMB historical tables,
          adjusted to 2024 dollars using BLS CPI-U. Your personal share is calculated by dividing total
          spending by the US population for each year of your life.
        </p>
        <p>
          State-level adjustments reflect per-capita federal tax burden variations — residents of higher-income
          states (California, New York, Connecticut) pay a larger share of federal taxes and therefore bear
          a disproportionate share of military costs. Residents of states with large military installations
          also &ldquo;receive&rdquo; more military spending in the form of local economic activity.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What the Numbers Mean</h2>
        <p>
          Your &ldquo;personal war cost&rdquo; represents the amount of military spending that occurred during
          your lifetime, divided by the population. It is <strong>not</strong> the amount you personally paid
          in taxes — because most war spending was financed through borrowing, not taxation. You are paying for
          these wars through:
        </p>
        <ul>
          <li><strong>Federal income taxes:</strong> ~24% of your income tax goes to military spending</li>
          <li><strong>National debt:</strong> War borrowing increases the debt, which suppresses future government services or requires higher future taxes</li>
          <li><strong>Opportunity cost:</strong> Money spent on wars could have funded education, healthcare, infrastructure, or tax cuts</li>
          <li><strong>Inflation:</strong> Massive government spending contributes to inflation, reducing your purchasing power</li>
        </ul>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            A child born on September 12, 2001 — the day after 9/11 — has lived their entire life during
            the War on Terror. By their 25th birthday in 2026, the US will have spent over <strong>$8 trillion</strong> on
            post-9/11 wars. Their per-capita share: approximately <strong>$24,000</strong>. They were never
            asked if they wanted these wars. They will be paying for them until they retire.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-stone-50 rounded-lg p-6 border max-w-2xl">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Tools & Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/tools/tax-receipt" className="text-red-800 hover:underline">→ Your Military Tax Receipt — Annual tax breakdown</Link></li>
          <li><Link href="/tools/jobs-calculator" className="text-red-800 hover:underline">→ Jobs Calculator — Military vs civilian job creation</Link></li>
          <li><Link href="/cost-of-war" className="text-red-800 hover:underline">→ Cost of War — $11.3 trillion total</Link></li>
          <li><Link href="/us-military-spending" className="text-red-800 hover:underline">→ US Military Spending — The full breakdown</Link></li>
          <li><Link href="/war-clock" className="text-red-800 hover:underline">→ War Clock — Watch spending in real time</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
