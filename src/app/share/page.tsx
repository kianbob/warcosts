import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shareable War Stats — Screenshot & Share | WarCosts',
  description: 'Pre-designed stat cards about US war spending, veteran suicide, and military waste. Screenshot and share on social media.',
  alternates: { canonical: 'https://www.warcosts.org/share' },
}

const stats = [
  {
    headline: '$8.1 Trillion',
    subtext: 'spent on war since 9/11',
    detail: 'That\'s $24,000 per American — for wars most Americans opposed.',
    source: 'Brown University Costs of War Project, 2024',
    color: 'from-red-900 to-red-700',
  },
  {
    headline: '22 Veterans',
    subtext: 'die by suicide every day',
    detail: 'More veterans have died by suicide since 9/11 than in all post-9/11 combat combined.',
    source: 'VA National Suicide Data Report, 2023',
    color: 'from-stone-900 to-stone-700',
  },
  {
    headline: '$1.7 Trillion',
    subtext: 'F-35 program lifetime cost',
    detail: 'More than Australia\'s entire GDP. For one fighter jet program that still can\'t fly in the rain.',
    source: 'GAO Selected Acquisition Report, 2024',
    color: 'from-red-800 to-orange-700',
  },
  {
    headline: '750+ Bases',
    subtext: 'in 80 countries worldwide',
    detail: 'The US has more foreign military bases than all other nations combined.',
    source: 'David Vine, "Base Nation" / DoD Base Structure Report',
    color: 'from-stone-800 to-stone-600',
  },
  {
    headline: '0 Audits Passed',
    subtext: 'by the Pentagon — ever',
    detail: 'The Department of Defense has failed every audit since they began in 2018. $3.8 trillion in assets unaccounted for.',
    source: 'DoD Office of Inspector General, 2024',
    color: 'from-red-900 to-stone-800',
  },
  {
    headline: '929,000 Dead',
    subtext: 'in post-9/11 war zones',
    detail: 'Including 387,000+ civilians. In wars launched to "protect" civilians.',
    source: 'Brown University Costs of War Project, 2024',
    color: 'from-stone-900 to-red-900',
  },
]

export default function SharePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-stone-900 mb-3">
        Share the Truth
      </h1>
      <p className="text-stone-500 text-lg mb-2 max-w-2xl">
        Screenshot any card below and share it. No permission needed. The more people know, the harder it is to ignore.
      </p>
      <p className="text-stone-400 text-sm mb-10">
        Right-click → Save image, or just screenshot. All stats are sourced.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${stat.color} text-white rounded-2xl p-8 md:p-10 shadow-xl aspect-[4/3] flex flex-col justify-between`}
          >
            <div>
              <p className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {stat.headline}
              </p>
              <p className="text-xl md:text-2xl font-medium mt-1 text-white/80">
                {stat.subtext}
              </p>
              <p className="text-base mt-4 text-white/70 leading-relaxed max-w-md">
                {stat.detail}
              </p>
            </div>
            <div className="flex justify-between items-end mt-6">
              <p className="text-xs text-white/40 max-w-[60%]">
                Source: {stat.source}
              </p>
              <p className="text-sm font-bold text-white/50 tracking-wider">
                WARCOSTS.ORG
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-stone-500 mb-4">Want to help spread awareness?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="text-red-600 font-semibold hover:underline">← Back to Home</Link>
          <Link href="/analysis" className="text-red-600 font-semibold hover:underline">Read Analysis →</Link>
        </div>
      </div>
    </main>
  )
}
