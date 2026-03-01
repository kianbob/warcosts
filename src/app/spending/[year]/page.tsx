import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

interface YearData {
  year: number
  amount: number
  amountBillions?: number
  gdpPct?: number
  president: string
  war?: string
}

const opportunityCosts = [
  { label: 'Teachers\' salaries (avg $65K)', perUnit: 65000 },
  { label: 'Affordable homes built', perUnit: 250000 },
  { label: 'Full college scholarships', perUnit: 50000 },
  { label: 'Years of healthcare for families', perUnit: 28000 },
  { label: 'Clean water systems for towns', perUnit: 1000000 },
]

export async function generateStaticParams() {
  const data: YearData[] = loadData('yearly-spending.json')
  return data.map(d => ({ year: String(d.year) }))
}

export async function generateMetadata({ params }: { params: Promise<{ year: string }> }): Promise<Metadata> {
  const { year } = await params
  return {
    title: `US Military Spending in ${year} — WarCosts`,
    description: `How much did the US spend on its military in ${year}? Full breakdown with GDP percentage, president, active wars, and what else that money could have bought.`,
  }
}

export default async function YearSpendingPage({ params }: { params: Promise<{ year: string }> }) {
  const { year: yearStr } = await params
  const yearNum = parseInt(yearStr)

  const data: YearData[] = loadData('yearly-spending.json')
  const entry = data.find(d => d.year === yearNum)
  if (!entry) notFound()

  const idx = data.indexOf(entry)
  const prev = idx > 0 ? data[idx - 1] : null
  const next = idx < data.length - 1 ? data[idx + 1] : null

  const amountMillions = entry.amount
  const amountBillions = entry.amountBillions ?? amountMillions / 1000
  const change = prev ? ((amountMillions - prev.amount) / prev.amount) * 100 : null
  const changeAbs = prev ? amountMillions - prev.amount : null

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Spending', href: '/spending' }, { label: String(entry.year) }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold">
          US Military Spending: {entry.year}
        </h1>
        <p className="text-4xl md:text-5xl font-bold text-red-400 mt-4">
          {fmtMoney(amountMillions * 1e6)}
        </p>
        <p className="text-stone-400 mt-2">
          {amountBillions.toFixed(1)} billion in 2024 inflation-adjusted dollars
        </p>
      </div>

      <ShareButtons title={`US Military Spending in ${entry.year}`} />

      {/* Key Facts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
          <p className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">${amountBillions.toFixed(1)}B</p>
          <p className="text-xs text-stone-400">Total Budget</p>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
          <p className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
            {entry.gdpPct ? `${entry.gdpPct}%` : '—'}
          </p>
          <p className="text-xs text-stone-400">% of GDP</p>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
          <p className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">{entry.president}</p>
          <p className="text-xs text-stone-400">President</p>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
          <p className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
            {entry.war || 'None'}
          </p>
          <p className="text-xs text-stone-400">Active War</p>
        </div>
      </div>

      {/* Year-over-Year Change */}
      {change !== null && prev && (
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">
            📊 Compared to {prev.year}
          </h2>
          <div className="flex items-center gap-4">
            <span className={`text-3xl font-bold ${change >= 0 ? 'text-red-400' : 'text-green-400'}`}>
              {change >= 0 ? '▲' : '▼'} {Math.abs(change).toFixed(1)}%
            </span>
            <span className="text-stone-300">
              {change >= 0 ? 'Increase' : 'Decrease'} of {fmtMoney(Math.abs(changeAbs!) * 1e6)} from ${(prev.amountBillions ?? prev.amount / 1000).toFixed(1)}B
            </span>
          </div>
          {Math.abs(change) > 20 && (
            <p className="text-stone-400 text-sm mt-2">
              {change > 20
                ? '⚠️ A surge of this magnitude typically indicates wartime mobilization or a major military buildup.'
                : '📉 A drop this large typically reflects the end of a war or a deliberate drawdown.'}
            </p>
          )}
        </div>
      )}

      {/* What Else Could This Buy */}
      <div className="bg-stone-800 border border-stone-700 rounded-lg p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">
          💰 What ${amountBillions.toFixed(0)}B Could Have Bought Instead
        </h2>
        <div className="space-y-3">
          {opportunityCosts.map(item => {
            const count = Math.floor((amountMillions * 1e6) / item.perUnit)
            return (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-stone-300">{item.label}</span>
                <span className="text-red-400 font-bold font-[family-name:var(--font-heading)]">{fmt(count)}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Context */}
      <div className="bg-stone-800 border border-stone-700 rounded-lg p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">
          🏛️ Historical Context
        </h2>
        <p className="text-stone-300 leading-relaxed">
          In {entry.year}, under President {entry.president}, the United States spent approximately ${amountBillions.toFixed(1)} billion on its military
          {entry.gdpPct ? `, representing ${entry.gdpPct}% of GDP` : ''}.
          {entry.war ? ` The ${entry.war} was actively underway, driving elevated defense expenditures.` : ' No major declared war was in progress.'}
          {change !== null && change > 10 ? ` Spending surged ${change.toFixed(1)}% from the previous year.` : ''}
          {change !== null && change < -10 ? ` Spending fell ${Math.abs(change).toFixed(1)}% from the previous year.` : ''}
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8 mb-8">
        {prev ? (
          <Link href={`/spending/${prev.year}`} className="bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 hover:bg-stone-700 transition">
            <p className="text-xs text-stone-400">← Previous</p>
            <p className="font-semibold text-white">{prev.year} · ${(prev.amountBillions ?? prev.amount / 1000).toFixed(0)}B</p>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/spending/${next.year}`} className="bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 hover:bg-stone-700 transition text-right">
            <p className="text-xs text-stone-400">Next →</p>
            <p className="font-semibold text-white">{next.year} · ${(next.amountBillions ?? next.amount / 1000).toFixed(0)}B</p>
          </Link>
        ) : <div />}
      </div>

      <div className="text-center">
        <Link href="/spending" className="text-red-400 hover:text-red-300 text-sm">
          ← Back to All Spending Data
        </Link>
        {' · '}
        <Link href="/global-spending" className="text-red-400 hover:text-red-300 text-sm">
          Global Comparison →
        </Link>
      </div>

      <BackToTop />
    </div>
  )
}
