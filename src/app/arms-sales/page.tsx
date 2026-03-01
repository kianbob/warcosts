import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { ArmsSalesChart } from '@/components/charts/SpendingCharts'

export const metadata: Metadata = {
  title: 'US Arms Sales — $238B/Year, World\'s Largest Weapons Dealer | WarCosts',
  description: '$238 billion per year in arms sales. The US is the world\'s largest weapons dealer. See who buys, where weapons end up, and who profits.',
}

const buyerProfiles: Record<string, { flag: string, details: string }> = {
  'Saudi Arabia': { flag: '🇸🇦', details: 'Largest single buyer of US weapons. Saudi forces have used American-made bombs, jets, and missiles in the Yemen war, creating the world\'s worst humanitarian crisis. A Raytheon MK-82 bomb killed 40 children on a school bus in 2018. Despite this, arms sales continued under every administration.' },
  'Japan': { flag: '🇯🇵', details: 'Purchasing F-35s and advanced missile defense as China tensions escalate. Japan is rearming at the fastest rate since WWII, with US encouragement and weapons.' },
  'Australia': { flag: '🇦🇺', details: 'The AUKUS deal includes nuclear-powered submarines worth $368B over 30 years — the largest defense procurement in Australian history, and a massive windfall for US contractors.' },
  'UAE': { flag: '🇦🇪', details: 'Used US weapons in Yemen and Libya. The UAE has built a regional military empire using American hardware, including deploying F-16s and Apache helicopters in conflicts across the Middle East and Africa.' },
  'Israel': { flag: '🇮🇱', details: 'Receives $3.8B/yr in free US military aid on top of arms purchases. American weapons are used in operations in Gaza and the West Bank. Israel is also a major re-exporter of modified US military technology.' },
  'South Korea': { flag: '🇰🇷', details: 'Major buyer of missile defense systems and fighter jets. South Korea hosts 28,500 US troops and serves as a key market for THAAD and F-35 aircraft.' },
  'Taiwan': { flag: '🇹🇼', details: 'Arms sales rapidly increasing amid China tensions. Every sale triggers diplomatic protests from Beijing. Taiwan is stockpiling Javelin missiles and F-16V fighters.' },
  'Poland': { flag: '🇵🇱', details: 'Spending surged after Russia\'s 2022 invasion of Ukraine. Poland is now buying Abrams tanks, HIMARS, Apache helicopters, and F-35s in the largest European arms buildup since the Cold War.' },
  'Qatar': { flag: '🇶🇦', details: 'Bought $12B in F-15 fighter jets and Apache helicopters. Qatar hosts Al Udeid Air Base, the largest US military facility in the Middle East.' },
  'UK': { flag: '🇬🇧', details: 'Longstanding "special relationship" includes deep weapons integration. The UK is a partner on the F-35 program and buys extensively from US defense firms.' },
}

export default function ArmsSalesPage() {
  const arms = loadData('arms-sales.json')
  const stats = loadData('stats.json')
  const chartData = arms.topBuyers.map((b: any) => ({ country: b.country, amount: b.total / 1e9 }))
  const totalTopBuyers = arms.topBuyers.reduce((s: number, b: any) => s + b.total, 0)

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Arms Sales' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Arms Sales</h1>
      <p className="text-muted mb-6 max-w-3xl">The United States is the world&apos;s largest arms dealer, selling {fmtMoney(arms.totalAnnual)} per year in weapons to foreign governments. American bombs, missiles, jets, and tanks are used in conflicts across the globe — many of them against civilians.</p>
      <ShareButtons title="US Arms Sales — Who Buys American Weapons" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmtMoney(arms.totalAnnual) + '/yr', label: 'Annual Arms Sales' },
          { val: '40%', label: 'Global Market Share' },
          { val: String(arms.topBuyers.length) + '+', label: 'Buyer Countries' },
          { val: fmtMoney(totalTopBuyers), label: 'Top 10 Buyer Total' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;We sell weapons to both sides in a conflict, then send our troops to clean up the mess. That&apos;s not foreign policy — it&apos;s a business model.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Andrew Bacevich, retired US Army Colonel and historian</p>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Top Buyers</h2>
        <ArmsSalesChart data={chartData} />
      </div>

      {/* Rich Buyer Profiles */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Buyer Profiles</h2>
      <div className="space-y-4 mb-8">
        {arms.topBuyers.map((b: any) => {
          const profile = buyerProfiles[b.country]
          return (
            <div key={b.country} className="bg-white rounded-lg border p-6 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{profile?.flag || '🌍'}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">{b.country}</h3>
                    <p className="text-sm text-muted">Since {b.since}</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(b.total)}</p>
              </div>
              <p className="text-sm text-muted mb-2">{b.note}</p>
              {profile && <p className="text-sm text-stone-600">{profile.details}</p>}
            </div>
          )
        })}
      </div>

      {/* How Arms Sales Perpetuate Conflict */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">How Arms Sales Perpetuate Conflict</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>The arms trade creates a self-reinforcing cycle. The US sells weapons to Country A. Country A&apos;s neighbors feel threatened and buy weapons too. Regional arms races escalate tensions. Conflicts erupt. The US sells more weapons — and sometimes intervenes militarily, using the very instability it helped create as justification.</p>
          <p><strong>The Yemen case study:</strong> The US sold Saudi Arabia $110B in weapons. Saudi Arabia used those weapons to bomb Yemen, creating the world&apos;s worst humanitarian crisis — 377,000+ dead, 23 million people in need of aid. The US then provided humanitarian aid to Yemen. American taxpayers funded both the bombs and the bandages.</p>
          <p><strong>The revolving door:</strong> The same defense contractors who lobby for arms sales also employ former Pentagon officials who approved those sales. Lloyd Austin went from Raytheon&apos;s board to Secretary of Defense. The line between government policy and corporate profit is invisible.</p>
        </div>
      </div>

      {/* Weapons Types */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What America Sells</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            { type: 'Fighter Jets', examples: 'F-35 ($80M each), F-16, F/A-18, F-15EX', note: 'Deployed in conflicts across the Middle East' },
            { type: 'Missiles & Bombs', examples: 'Javelin ($178K), Patriot ($4M each), JDAM, Hellfire', note: 'Raytheon & Lockheed\'s bread and butter' },
            { type: 'Attack Helicopters', examples: 'Apache ($35M), Black Hawk ($22M)', note: 'Used in Yemen, Syria, Iraq, Libya' },
            { type: 'Tanks & Vehicles', examples: 'Abrams ($10M), Stryker ($5M), MRAP', note: 'Many end up abandoned or captured' },
            { type: 'Naval Vessels', examples: 'Littoral combat ships, frigates, submarines', note: 'AUKUS submarine deal: $368B' },
            { type: 'Air Defense', examples: 'THAAD, Patriot batteries, Iron Dome components', note: 'Driving a global air defense arms race' },
          ].map(w => (
            <div key={w.type} className="bg-white rounded-lg p-4 border">
              <h4 className="font-bold">{w.type}</h4>
              <p className="text-muted">{w.examples}</p>
              <p className="text-xs text-stone-500 mt-1">{w.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The US controls <strong>40% of the global arms market</strong> — more than Russia, China, France, and Germany combined.</li>
          <li>• American weapons have been found on <strong>both sides</strong> of multiple conflicts, including Libya and Syria.</li>
          <li>• The State Department approved <strong>$80.9B</strong> in arms sales in 2023 alone — a 56% increase from the prior year.</li>
          <li>• US-made weapons have been documented in <strong>at least 12 countries</strong> experiencing active conflict or humanitarian crisis.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/military-industrial-complex" className="text-red-800 hover:underline">→ The Military-Industrial Complex</Link></li>
          <li><Link href="/contractors" className="text-red-800 hover:underline">→ Top Defense Contractors — who profits</Link></li>
          <li><Link href="/foreign-aid" className="text-red-800 hover:underline">→ Foreign Aid — the other side of the coin</Link></li>
        </ul>
      </div>
    </div>
  )
}
