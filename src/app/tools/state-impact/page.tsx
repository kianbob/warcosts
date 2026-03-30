import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import StateImpactClient from './StateImpactClient'

export const metadata: Metadata = {
  title: 'State War Impact Calculator — Your State\'s Share of War Costs',
  description: 'Enter your state and see your personal share of $8 trillion in war spending, military casualties from your state, what that money could\'ve funded locally, and your state\'s defense economy.',
  keywords: ['state war costs', 'war spending by state', 'military spending per state', 'state military impact', 'war cost calculator', 'defense spending by state'],
  alternates: { canonical: 'https://www.warcosts.org/tools/state-impact' },
  openGraph: {
    title: 'State War Impact Calculator — Your State\'s Share of War Costs',
    description: 'Enter your state and see your personal share of $8 trillion in war spending, casualties, and what that money could\'ve funded locally.',
    url: 'https://www.warcosts.org/tools/state-impact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'State War Impact Calculator',
    description: 'Your state\'s share of $8 trillion in war costs. Enter your state to find out.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'State War Impact Calculator',
  description: 'Enter your state and see your personal share of war spending, military casualties, and what that money could have funded locally.',
  url: 'https://www.warcosts.org/tools/state-impact',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  creator: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
}

const didYouKnow = [
  'Virginia receives $3.92 back for every $1 its residents pay in war-related taxes — more than any state besides DC.',
  'California has lost more service members in post-9/11 wars than any other state, with over 800 deaths.',
  'Mississippi has the highest military enlistment rate in the country — nearly 2× the national average.',
  'New York pays significantly more in war taxes than it receives back in military spending — a net loss of billions.',
  'Hawaii\'s economy is more dependent on military bases than any other state, with bases generating $12.8B annually.',
  'Texas has the second-most military bases of any state and over 125,000 active duty personnel.',
]

export default function StateImpactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }, { label: 'State Impact Calculator' }]} />
        
        {/* Hero */}
        <div className="mb-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
            Your State&apos;s War Bill
          </h1>
          <p className="text-stone-500 max-w-2xl text-lg">
            The US has spent over <strong className="text-stone-800">$8 trillion</strong> on post-9/11 wars.
            How much came from <em>your</em> state? What did your neighbors sacrifice?
            And what could that money have built at home?
          </p>
        </div>

        <ShareButtons title="State War Impact Calculator — WarCosts" />

        <StateImpactClient />

        {/* Did You Know */}
        <div className="mt-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Did You Know?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {didYouKnow.map((fact, i) => (
              <div key={i} className="bg-stone-50 border border-stone-200 rounded-lg p-4">
                <p className="text-stone-600 text-sm">{fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="mt-12 prose max-w-2xl text-stone-600">
          <h2 className="font-[family-name:var(--font-heading)]">Methodology</h2>
          <p>
            State war cost shares are calculated proportionally by population using Census Bureau estimates.
            Military death estimates are based on Department of Defense casualty reports cross-referenced
            with state-level enlistment rates. Economic data uses Bureau of Labor Statistics averages
            for teacher salaries, Census median home prices, and College Board tuition figures.
          </p>
          <p>
            The &quot;war tax return rate&quot; estimates how much each state receives in defense-related
            economic activity relative to its proportional share of federal war taxes. States with large
            military bases and defense contractors tend to be net beneficiaries; states without significant
            military presence are net payers.
          </p>
          <p>
            All figures are estimates compiled from public data for educational purposes.
            Total war cost of $8 trillion is from the Brown University Costs of War Project.
          </p>
        </div>

        {/* Related Tools */}
        <div className="mt-12 pt-8 border-t">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/tools/tax-receipt" className="block bg-amber-50 border border-amber-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-sm">🧾 Tax Receipt Calculator</h3>
              <p className="text-stone-500 text-xs mt-1">See how much of your income goes to the military.</p>
            </Link>
            <Link href="/tools/cost-calculator" className="block bg-red-50 border border-red-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-sm">📊 Cost Calculator</h3>
              <p className="text-stone-500 text-xs mt-1">Explore total war costs with interactive breakdowns.</p>
            </Link>
            <Link href="/tools/jobs-calculator" className="block bg-green-50 border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-sm">👷 Jobs Calculator</h3>
              <p className="text-stone-500 text-xs mt-1">Compare military vs civilian job creation.</p>
            </Link>
          </div>
        </div>

        <BackToTop />
      </div>
    </>
  )
}
