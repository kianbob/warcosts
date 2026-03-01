import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { SpendingAreaChart, GdpChart } from '@/components/charts/SpendingCharts'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Military Spending — $886 Billion Per Year | WarCosts',
  description: 'The United States spends $886 billion per year on defense — more than the next 10 countries combined. Comprehensive breakdown with charts and historical trends.',
  keywords: ['us military spending', 'defense spending', 'military budget', 'pentagon budget'],
}

export default function USMilitarySpendingPage() {
  const stats = loadData('stats.json')
  const spending = loadData('military-spending.json')

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'US Military Spending' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">US Military Spending</h1>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        The United States spends <strong className="text-stone-800">{fmtMoney(stats.currentAnnualBudget)}</strong> per year
        on its military — {stats.pctGdp}% of GDP and more than the next 10 countries combined.
        That&apos;s <strong className="text-stone-800">{fmtMoney(stats.costPerSecond)}</strong> every second.
      </p>
      <ShareButtons title="US Military Spending — $886 Billion Per Year" />

      <div className="grid md:grid-cols-4 gap-4 my-8">
        {[
          { label: 'Annual Budget (2024)', value: fmtMoney(stats.currentAnnualBudget) },
          { label: '% of GDP', value: `${stats.pctGdp}%` },
          { label: 'Per Second', value: fmtMoney(stats.costPerSecond) },
          { label: 'Per Day', value: fmtMoney(stats.costPerDay) },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <SpendingAreaChart data={spending} />

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">More Than the Next 10 Countries Combined</h2>
        <p>
          US military spending exceeds that of China, Russia, India, Saudi Arabia, the United Kingdom,
          Germany, France, Japan, South Korea, and Australia — combined. The Pentagon has never passed a full audit,
          despite being required by law since 1990.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Where the Money Goes</h2>
        <ul>
          <li><strong>Operations & Maintenance:</strong> ~$290B — Day-to-day running costs</li>
          <li><strong>Military Personnel:</strong> ~$170B — Pay and benefits for 1.3M active duty</li>
          <li><strong>Procurement:</strong> ~$150B — Weapons, vehicles, equipment</li>
          <li><strong>R&D:</strong> ~$140B — Next-generation weapons systems</li>
          <li><strong>Military Construction:</strong> ~$15B — Bases and facilities</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">The Hidden Costs</h2>
        <p>
          The $886B figure understates true military spending. Add in: Veterans Affairs ({fmtMoney(stats.veteranCareFutureCost)} projected through 2050),
          nuclear weapons maintained by the DOE, Homeland Security, intelligence agencies,
          and interest on war debt — and the real figure exceeds <strong>$1.4 trillion per year</strong>.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence,
          whether sought or unsought, by the military-industrial complex.&rdquo;
          <br />— Dwight D. Eisenhower, Farewell Address, 1961
        </blockquote>
      </div>

      <div className="text-center my-8">
        <Link href="/war-clock" className="inline-block bg-red-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition">
          Watch It Tick → War Clock
        </Link>
      </div>

      <BackToTop />
    </div>
  )
}
