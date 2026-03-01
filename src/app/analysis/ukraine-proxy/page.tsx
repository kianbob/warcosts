import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: '$66.9 Billion: America\'s Proxy War in Ukraine',
  description: 'The US has sent $66.9 billion in military aid to Ukraine — the largest military aid package since WWII Lend-Lease. What could that money buy at home?',
}

const aidPackages = [
  { date: 'Feb 2022', amount: 350e6, desc: 'Initial emergency drawdown — Javelins, Stingers' },
  { date: 'Mar 2022', amount: 13.6e9, desc: 'First supplemental appropriation' },
  { date: 'May 2022', amount: 40.1e9, desc: 'Ukraine Supplemental Appropriations Act' },
  { date: 'Dec 2022', amount: 45e9, desc: 'Consolidated Appropriations Act provisions' },
  { date: '2023', amount: 24.3e9, desc: 'Multiple drawdown and USAI packages' },
  { date: 'Apr 2024', amount: 60.8e9, desc: 'National Security Supplemental (after 6-month delay)' },
]

const domesticAlternatives = [
  { item: 'Fully fund VA healthcare for 10 years', cost: 66.9e9 },
  { item: 'Provide clean water to every US city', cost: 55e9 },
  { item: 'Fund 1 million teachers for a year', cost: 65e9 },
  { item: 'End veteran homelessness', cost: 20e9 },
  { item: 'Rebuild every structurally deficient bridge', cost: 40e9 },
  { item: 'Free community college for every American for 5 years', cost: 60e9 },
]

export default function UkraineProxyPage() {
  const totalAid = 66.9e9

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Ukraine Proxy War' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          {fmtMoney(totalAid)}: America&apos;s Proxy War in Ukraine
        </h1>
        <p className="text-stone-400 text-lg">
          The largest military aid package since World War II Lend-Lease.
          No American soldiers on the ground — but American taxpayers on the hook.
        </p>
      </div>

      <ShareButtons title="$66.9 Billion: America's Proxy War in Ukraine" />

      {/* Key stat */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center my-8">
        <p className="text-5xl md:text-7xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(totalAid)}</p>
        <p className="text-stone-600 mt-2">Total US military and economic aid to Ukraine (2022–2024)</p>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Timeline of Aid Packages</h2>
        <div className="space-y-4">
          {aidPackages.map((p, i) => (
            <div key={i} className="flex items-start gap-4 border-l-2 border-red-200 pl-4">
              <span className="text-red-700 font-bold font-[family-name:var(--font-heading)] shrink-0 w-20">{p.date}</span>
              <div>
                <p className="font-semibold">{fmtMoney(p.amount)}</p>
                <p className="text-muted text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What it could buy */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">What {fmtMoney(totalAid)} Could Buy at Home</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {domesticAlternatives.map((a, i) => (
            <div key={i} className="bg-stone-50 rounded-lg p-4">
              <p className="font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(a.cost)}</p>
              <p className="text-muted text-sm">{a.item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lend-Lease comparison */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Lend-Lease Comparison</h2>
        <div className="space-y-3 text-stone-700">
          <p>
            The Ukraine aid package is frequently compared to WWII Lend-Lease — and for good reason.
            In inflation-adjusted terms, Lend-Lease sent approximately $700 billion to Allied nations.
            Ukraine aid represents about 10% of that, but in a conflict where the US has no troops on the ground
            and no formal alliance obligations.
          </p>
          <p>
            Unlike WWII, where the US faced an existential threat from Axis powers, Russia&apos;s invasion of Ukraine
            poses no direct military threat to the United States. The argument for aid rests on maintaining
            the &ldquo;rules-based international order&rdquo; — a framework the US itself has violated repeatedly.
          </p>
        </div>
      </div>

      {/* Libertarian perspective */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Perspective</h2>
        <p className="text-stone-300 italic">
          European security should be Europe&apos;s responsibility. NATO&apos;s European members have a combined GDP
          of over $18 trillion and a combined military budget exceeding $300 billion. They are more than capable
          of containing Russia without American taxpayer subsidies. The US has spent 80 years defending Europe
          while Europe builds generous welfare states. This isn&apos;t an alliance — it&apos;s a subsidy.
          Meanwhile, {fmtMoney(totalAid)} is extracted from Americans who can&apos;t afford healthcare to fund
          a proxy war 5,000 miles away.
        </p>
      </div>

      {/* Cross-links */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/conflicts/ukraine-support" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Ukraine Support — Conflict Details →</h3>
          <p className="text-muted text-sm">Full data on costs and casualties</p>
        </Link>
        <Link href="/foreign-aid" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">US Foreign Aid Data →</h3>
          <p className="text-muted text-sm">Where US aid money goes</p>
        </Link>
        <Link href="/opportunity-cost" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Opportunity Cost →</h3>
          <p className="text-muted text-sm">What war spending could buy instead</p>
        </Link>
        <Link href="/modern-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">All Modern Wars →</h3>
          <p className="text-muted text-sm">Every post-1995 military operation</p>
        </Link>
      </div>
    </div>
  )
}
