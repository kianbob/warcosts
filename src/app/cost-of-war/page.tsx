import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cost of War — $11.3 Trillion and Counting | WarCosts',
  description: 'The total cost of all US wars since 1776: $11.3 trillion (inflation-adjusted). Over 1 million American deaths. Over 5 million civilian casualties.',
  keywords: ['cost of war', 'how much do wars cost', 'us war spending', 'war costs'],
}

export default function CostOfWarPage() {
  const stats = loadData('stats.json')
  const conflicts = loadData('conflicts.json')

  const featured = conflicts
    .filter((c: any) => c.costInflationAdjusted > 100000000000)
    .sort((a: any, b: any) => b.costInflationAdjusted - a.costInflationAdjusted)
    .slice(0, 8)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Cost of War' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">The Cost of War</h1>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        Since 1776, the United States has spent <strong className="text-stone-800">{fmtMoney(stats.totalCostInflationAdjusted)}</strong> on
        war — and counting. That figure grows by <strong className="text-stone-800">{fmtMoney(stats.costPerSecond)}</strong> every second.
      </p>
      <ShareButtons title="Cost of War — $11.3 Trillion and Counting" />

      <div className="grid md:grid-cols-4 gap-4 my-8">
        {[
          { label: 'Total War Cost', value: fmtMoney(stats.totalCostInflationAdjusted) },
          { label: 'US Military Deaths', value: fmt(stats.totalUSDeaths) },
          { label: 'Civilian Deaths', value: fmt(stats.totalCivilianDeaths) },
          { label: 'Total Interventions', value: fmt(stats.totalInterventions) },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-6">Most Expensive Conflicts</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {featured.map((c: any) => (
          <Link key={c.id} href={`/conflicts/${c.id}`}
            className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">{c.name}</h3>
            <p className="text-red-800 font-bold text-xl">{fmtMoney(c.costInflationAdjusted)}</p>
            <p className="text-stone-500 text-sm">{fmt(c.usDeaths)} US deaths · {c.years}</p>
          </Link>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The True Cost Goes Beyond Dollars</h2>
        <p>
          War costs don&apos;t end when the fighting stops. The US will spend an estimated
          <strong> {fmtMoney(stats.veteranCareFutureCost)}</strong> on veteran care through 2050.
          {stats.veteranSuicidePerDay} veterans take their own lives every day. 38 million people
          have been displaced by the War on Terror alone.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;War is the health of the State.&rdquo;
          <br />— Randolph Bourne, 1918
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">Explore More</h2>
        <ul>
          <li><Link href="/war-clock">War Clock</Link> — Watch spending tick in real time</li>
          <li><Link href="/cost-per-life">Cost Per Life</Link> — How much each death costs</li>
          <li><Link href="/conflicts">All Conflicts</Link> — Browse all 28 major wars</li>
          <li><Link href="/tools/tax-receipt">Tax Receipt</Link> — Your personal military tax bill</li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
