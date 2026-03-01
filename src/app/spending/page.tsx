import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { SpendingAreaChart, GdpChart } from '@/components/charts/SpendingCharts'

export const metadata: Metadata = {
  title: 'US Military Spending Over Time',
  description: 'Track US military spending from WWII to today. Currently $886 billion per year — more than the next 10 countries combined.',
}

export default function SpendingPage() {
  const spending = loadData('military-spending.json')
  const stats = loadData('stats.json')

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Military Spending' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Military Spending</h1>
      <p className="text-muted mb-6 max-w-3xl">
        The United States spends {fmtMoney(stats.currentAnnualBudget)} per year on defense — {stats.pctGdp}% of GDP and more than the next 10 countries combined.
      </p>
      <ShareButtons title="US Military Spending Over Time" />

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(stats.currentAnnualBudget)}</p>
          <p className="text-muted text-sm">Annual Budget (2024)</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{stats.pctGdp}%</p>
          <p className="text-muted text-sm">Percentage of GDP</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">#1</p>
          <p className="text-muted text-sm">Global Military Spender</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Military Spending (Billions $)</h2>
        <SpendingAreaChart data={spending} />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Spending as % of GDP</h2>
        <GdpChart data={spending} />
      </div>

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Dwight D. Eisenhower, Farewell Address, 1961</p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Context</h2>
        <ul className="space-y-3 text-muted">
          <li>• The US spends more on defense than China, Russia, India, Saudi Arabia, UK, Germany, France, Japan, South Korea, and Australia <strong>combined</strong>.</li>
          <li>• WWII peak: $1 trillion+ in today&apos;s dollars (over 40% of GDP).</li>
          <li>• Post-9/11 spending surge added approximately $2 trillion beyond baseline budgets.</li>
          <li>• Pentagon is the world&apos;s largest employer with 3.2 million employees.</li>
          <li>• The US has never passed an independent audit of the Department of Defense.</li>
        </ul>
      </div>
    </div>
  )
}
