import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'The Weapons Stockpile Crisis: America\'s Arsenal Runs Dry',
  description: '1,000+ Tomahawks fired. 42 aircraft lost. THAAD depleted 40%. 3-8 years to rebuild. The Iran war has drained America\'s weapons stockpiles to dangerous lows.',
  keywords: ['weapons stockpile', 'tomahawk missiles depleted', 'THAAD depleted', 'US weapons shortage', 'iran war munitions', 'defense stockpile crisis'],
  openGraph: {
    title: 'The Weapons Stockpile Crisis: America\'s Arsenal Runs Dry',
    description: '1,000+ Tomahawks. 42 aircraft. THAAD 40% depleted. 3-8 years to rebuild.',
    url: 'https://www.warcosts.org/analysis/weapons-stockpile-crisis',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Weapons Stockpile Crisis',
    description: 'America has fired more precision munitions in 148 days than it can rebuild in 3-8 years.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/weapons-stockpile-crisis',
  },
}

const weaponsExpended = [
  { weapon: 'Tomahawk Cruise Missile (Block V)', quantity: '1,000+', unitCost: '$2M', totalCost: '$2B+', rebuildTime: '5-7 years', manufacturer: 'Raytheon' },
  { weapon: 'JASSM-ER', quantity: '400+', unitCost: '$1.5M', totalCost: '$600M+', rebuildTime: '4-6 years', manufacturer: 'Lockheed Martin' },
  { weapon: 'THAAD Interceptors', quantity: '~40% of stock', unitCost: '$12M', totalCost: '$1.2B+', rebuildTime: '5-8 years', manufacturer: 'Lockheed Martin' },
  { weapon: 'SM-3 Interceptors', quantity: '150+', unitCost: '$36M', totalCost: '$5.4B+', rebuildTime: '4-6 years', manufacturer: 'Raytheon' },
  { weapon: 'GBU-57 Massive Ordnance Penetrator', quantity: '12+', unitCost: '$3.5M', totalCost: '$42M+', rebuildTime: '3-4 years', manufacturer: 'Boeing' },
  { weapon: 'AGM-158C LRASM', quantity: '80+', unitCost: '$3.5M', totalCost: '$280M+', rebuildTime: '3-5 years', manufacturer: 'Lockheed Martin' },
]

const aircraftLosses = [
  { type: 'F-35A Lightning II', lost: 8, unitCost: '$80M', totalLoss: '$640M' },
  { type: 'F-15E Strike Eagle', lost: 6, unitCost: '$100M', totalLoss: '$600M' },
  { type: 'F/A-18E/F Super Hornet', lost: 11, unitCost: '$67M', totalLoss: '$737M' },
  { type: 'MQ-9 Reaper', lost: 9, unitCost: '$32M', totalLoss: '$288M' },
  { type: 'EA-18G Growler', lost: 3, unitCost: '$68M', totalLoss: '$204M' },
  { type: 'KC-135 Stratotanker', lost: 2, unitCost: '$40M', totalLoss: '$80M' },
  { type: 'Other (various)', lost: 3, unitCost: 'Varies', totalLoss: '$450M+' },
]

export default function WeaponsStockpileCrisisPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Weapons Stockpile Crisis: America\'s Arsenal Runs Dry',
            description: 'An analysis of US weapons stockpile depletion during the Iran war and its implications for global security.',
            datePublished: '2026-07-25T00:00:00Z',
            dateModified: '2026-07-25T00:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/weapons-stockpile-crisis' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Weapons Stockpile Crisis' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Defense Analysis — July 25, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Weapons Stockpile Crisis
        </h1>
        <p className="text-xl text-stone-300 mb-4">America&apos;s Arsenal Runs Dry</p>
        <p className="text-stone-400 text-lg">
          In 148 days, the Iran war has consumed more precision munitions than the US can manufacture in 3-8 years.
          Over 1,000 Tomahawk missiles fired. 42 aircraft lost or damaged. THAAD interceptor stocks depleted by 40%.
          CNN reported US weapon stocks are &quot;depleted.&quot; The Pentagon wants $87.6 billion to rebuild.
          The question isn&apos;t just cost — it&apos;s whether America can defend itself while the shelves are empty.
        </p>
      </div>

      <ShareButtons title="The Weapons Stockpile Crisis: America's Arsenal Runs Dry" />

      {/* Key Numbers */}
      <div className="bg-stone-900 border border-red-900/60 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3 mb-5">
          <span className="text-2xl">🚀</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">The Depletion</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">1,000+</div>
            <div className="text-stone-400 text-sm">Tomahawks Fired</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">42</div>
            <div className="text-stone-400 text-sm">Aircraft Lost</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">40%</div>
            <div className="text-stone-400 text-sm">THAAD Depleted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">3-8 yr</div>
            <div className="text-stone-400 text-sm">Rebuild Timeline</div>
          </div>
        </div>
        <p className="text-stone-500 text-xs mt-4">Sources: CNN defense reporting, Congressional Research Service, Pentagon supplemental request</p>
      </div>

      {/* Munitions Table */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          What&apos;s Been Fired: The Munitions Ledger
        </h2>
        <p className="text-stone-600 mb-6">
          The Iran war has been fought almost entirely with precision-guided munitions — the most expensive and
          hardest-to-replace weapons in the US arsenal. Unlike conventional bombs, these weapons require
          sophisticated manufacturing processes, specialized components, and years-long production timelines.
        </p>

        <div className="bg-white border border-stone-200 rounded-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-stone-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-stone-700">Weapon System</th>
                  <th className="text-right p-4 font-semibold text-stone-700">Qty Used</th>
                  <th className="text-right p-4 font-semibold text-stone-700">Unit Cost</th>
                  <th className="text-right p-4 font-semibold text-stone-700">Total Cost</th>
                  <th className="text-right p-4 font-semibold text-stone-700">Rebuild Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {weaponsExpended.map((item, i) => (
                  <tr key={i}>
                    <td className="p-4 text-stone-700 font-medium">{item.weapon}</td>
                    <td className="p-4 text-right text-stone-700">{item.quantity}</td>
                    <td className="p-4 text-right text-stone-700">{item.unitCost}</td>
                    <td className="p-4 text-right text-red-600 font-bold">{item.totalCost}</td>
                    <td className="p-4 text-right text-stone-500">{item.rebuildTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-stone-600 mb-4">
          The SM-3 interceptor line is particularly concerning. At $36 million per missile, these are among the most
          expensive munitions ever fielded. They&apos;re also the backbone of the US Navy&apos;s ballistic missile
          defense — the system that protects carrier strike groups and allied nations from Iranian and North Korean
          ballistic missiles. With 150+ expended, the Navy&apos;s ability to provide regional missile defense has
          been significantly degraded.
        </p>
      </section>

      {/* Aircraft Losses */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          42 Aircraft: The $29 Billion Loss
        </h2>
        <p className="text-stone-600 mb-6">
          The Iran war has produced the highest US aircraft losses since Vietnam. A Congressional Research Service
          report valued the 42 aircraft lost or damaged beyond economical repair at approximately $29 billion.
          The losses span nearly every airframe in the US combat fleet.
        </p>

        <div className="bg-white border border-stone-200 rounded-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-stone-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-stone-700">Aircraft Type</th>
                  <th className="text-right p-4 font-semibold text-stone-700">Lost</th>
                  <th className="text-right p-4 font-semibold text-stone-700">Unit Cost</th>
                  <th className="text-right p-4 font-semibold text-stone-700">Total Loss</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {aircraftLosses.map((item, i) => (
                  <tr key={i}>
                    <td className="p-4 text-stone-700 font-medium">{item.type}</td>
                    <td className="p-4 text-right text-stone-700">{item.lost}</td>
                    <td className="p-4 text-right text-stone-700">{item.unitCost}</td>
                    <td className="p-4 text-right text-red-600 font-bold">{item.totalLoss}</td>
                  </tr>
                ))}
                <tr className="bg-stone-50 font-bold">
                  <td className="p-4 text-stone-900">Total</td>
                  <td className="p-4 text-right text-stone-900">42</td>
                  <td className="p-4 text-right text-stone-900">—</td>
                  <td className="p-4 text-right text-red-600">$29B+ (CRS)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-stone-600 mb-4">
          The F-35 losses are especially significant. The US has approximately 450 F-35As in service. Losing 8
          in a single conflict — nearly 2% of the fleet — wasn&apos;t anticipated in pre-war planning. Each F-35
          takes 18-24 months to manufacture, and the production line is already committed years in advance to
          fulfill contracts with allied nations.
        </p>
      </section>

      {/* THAAD Crisis */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          THAAD: 40% Depleted and Irreplaceable
        </h2>
        <p className="text-stone-600 mb-4">
          The Terminal High Altitude Area Defense (THAAD) system was designed to be America&apos;s shield against
          ballistic missiles. It worked — intercepting dozens of Iranian medium-range ballistic missiles aimed
          at US bases in the Gulf and at Israel. But every interception burned through irreplaceable inventory.
        </p>
        <p className="text-stone-600 mb-4">
          With approximately 40% of THAAD interceptor stocks depleted, the US faces a stark choice: continue
          providing missile defense for Gulf allies and Israel at current levels, or begin rationing interceptors
          for the scenarios that matter most. There are currently seven THAAD batteries in the US inventory.
          Maintaining full defensive coverage requires interceptors that won&apos;t exist for 5-8 years.
        </p>
        <p className="text-stone-600 mb-6">
          The rebuilding timeline isn&apos;t just about money — it&apos;s about manufacturing capacity. Lockheed
          Martin&apos;s THAAD production line in Troy, Alabama, produces interceptors at a rate of approximately
          48 per year. At that rate, replacing the expended inventory would take 3-4 years even at maximum
          production — and the line is also committed to foreign military sales to Saudi Arabia and the UAE.
        </p>
      </section>

      {/* The $35.3B Contract */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The $35.3 Billion Rebuild Contract
        </h2>
        <p className="text-stone-600 mb-4">
          Lockheed Martin was awarded the largest single munitions contract in Pentagon history: $35.3 billion to
          rebuild depleted Tomahawk, JASSM-ER, THAAD, and other precision-guided munitions stockpiles. The contract
          spans 7 years and will require expanding production lines that are already running at or near capacity.
        </p>
        <p className="text-stone-600 mb-4">
          The contract is part of the Pentagon&apos;s $87.6 billion supplemental funding request, which also
          includes $31.8 billion for ongoing operations and $20.5 billion for force reconstitution. Congress has
          not yet approved the supplemental.
        </p>
        <p className="text-stone-600 mb-6">
          For context on the full supplemental request, see{' '}
          <Link href="/analysis/113-billion-war" className="text-red-600 hover:text-red-800 underline">The $113 Billion War Nobody Voted For</Link>.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="font-bold text-amber-800 mb-2">💡 The Defense Contractor Paradox</h3>
          <p className="text-amber-700 text-sm">
            Defense contractors are simultaneously the only entities capable of rebuilding the stockpile and the
            primary financial beneficiaries of its depletion. Lockheed Martin&apos;s stock price has risen 28%
            since the war began. Raytheon is up 34%. The companies that profit most from the war are also the
            ones being paid to fix the damage. For more, see our{' '}
            <Link href="/largest-defense-contractors" className="text-red-600 hover:text-red-800 underline">largest defense contractors</Link>{' '}
            page.
          </p>
        </div>
      </section>

      {/* Strategic Implications */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Strategic Implications: Taiwan and Beyond
        </h2>
        <p className="text-stone-600 mb-4">
          The Wall Street Journal reported in June 2026 that the weapons stockpile depletion has &quot;significantly
          degraded&quot; US readiness for a potential Taiwan contingency. Pentagon war games for a Taiwan scenario
          assume the US would need to fire thousands of long-range precision munitions in the opening days —
          exactly the weapons that have been consumed in Iran.
        </p>
        <p className="text-stone-600 mb-4">
          The concern isn&apos;t theoretical. China has been closely watching the Iran war&apos;s consumption rates.
          If Beijing calculates that the US lacks the munitions stockpile to fight a two-front conflict, the
          deterrence equation in the Pacific changes fundamentally.
        </p>
        <p className="text-stone-600 mb-4">
          The impact on Ukraine support is more immediate. The US has already slowed deliveries of certain
          munitions to Ukraine to preserve stocks for the Iran conflict. ATACMS missiles, which Ukraine has used
          effectively against Russian logistics, share production lines with weapons needed for Iran operations.
        </p>
        <p className="text-stone-600 mb-6">
          For a broader view of{' '}
          <Link href="/weapons" className="text-red-600 hover:text-red-800 underline">US weapons systems</Link>{' '}
          and{' '}
          <Link href="/spending" className="text-red-600 hover:text-red-800 underline">military spending</Link>,
          see our dedicated trackers.
        </p>
      </section>

      {/* The Production Gap */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Production Gap: Why 3-8 Years?
        </h2>
        <p className="text-stone-600 mb-4">
          Modern precision-guided munitions aren&apos;t like World War II-era bombs that could be mass-produced in
          converted auto factories. They require:
        </p>
        <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-6">
          <li><strong>Specialized materials:</strong> Rare earth elements, high-grade electronics, radiation-hardened chips</li>
          <li><strong>Sole-source suppliers:</strong> Many components come from a single manufacturer with no backup</li>
          <li><strong>Years-long lead times:</strong> Ordering a Tomahawk today means delivery in 24-36 months</li>
          <li><strong>Limited production lines:</strong> Most weapons have one factory, operating one or two shifts</li>
          <li><strong>Competing demand:</strong> Foreign military sales commitments can&apos;t be easily cancelled</li>
          <li><strong>Workforce constraints:</strong> Specialized technicians take years to train</li>
        </ul>
        <p className="text-stone-600 mb-4">
          The US defense industrial base was designed for peacetime replenishment, not wartime surge production.
          The Iran war exposed this assumption as dangerously wrong. Even with the $35.3 billion contract,
          Lockheed Martin has stated it cannot significantly accelerate timelines without &quot;multi-year capital
          investments in new production capacity.&quot;
        </p>
        <p className="text-stone-600 mb-6">
          In practical terms: the weapons America fired in 148 days will take 3-8 years to replace. During
          that window, the US military operates with a significantly reduced capacity to fight another
          major conflict.
        </p>
      </section>

      {/* Lessons from History */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Historical Context: When America Ran Low Before
        </h2>
        <p className="text-stone-600 mb-4">
          This isn&apos;t the first time the US has faced a munitions crisis. During the 2011 Libya intervention,
          NATO nearly ran out of precision-guided munitions after just seven months of air operations against a
          far weaker adversary. The US had to resupply European allies who had exhausted their own stocks.
        </p>
        <p className="text-stone-600 mb-4">
          During the Korean War, ammunition shortages forced the US Army to ration artillery shells &mdash;
          a constraint that directly affected battlefield outcomes. The lesson was supposed to be learned:
          maintain deep stockpiles of the weapons you actually use in war.
        </p>
        <p className="text-stone-600 mb-4">
          Instead, the post-Cold War &quot;peace dividend&quot; led to decades of reduced production rates.
          The defense industrial base consolidated from 51 prime contractors to 5. Production lines that once
          operated three shifts were cut to one. Surge capacity &mdash; the ability to rapidly scale up production
          in wartime &mdash; was sacrificed for peacetime efficiency.
        </p>
        <p className="text-stone-600 mb-6">
          The Iran war has exposed this trade-off as a strategic failure. Efficiency in peacetime means
          vulnerability in wartime. The 3-8 year rebuild timeline is not a manufacturing problem &mdash;
          it&apos;s the consequence of 30 years of policy choices that prioritized cost savings over readiness.
        </p>
      </section>

      {/* Bottom Line */}
      <section className="my-12">
        <div className="bg-red-950 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-stone-300 mb-4">
            The Iran war has done something no adversary has accomplished since World War II: it has measurably
            depleted America&apos;s ability to fight. The stockpile crisis isn&apos;t a future risk — it&apos;s
            a present reality. Every THAAD interceptor fired in the Persian Gulf is one that can&apos;t defend
            Guam. Every Tomahawk launched at Iran is one that can&apos;t deter China.
          </p>
          <p className="text-stone-300 mb-4">
            The $87.6 billion supplemental request is the price of admission to start rebuilding. The actual
            cost — in money, time, and strategic vulnerability — will be measured in years and hundreds of
            billions of dollars.
          </p>
          <p className="text-stone-300">
            America&apos;s arsenal isn&apos;t empty. But it&apos;s running on fumes — and the world is watching.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">Sources</h2>
        <ul className="text-stone-500 text-sm space-y-2">
          <li>CNN, &quot;US weapon stocks &apos;depleted&apos; after Iran campaign,&quot; July 2026</li>
          <li>Congressional Research Service, &quot;Iran Conflict: Aircraft Losses and Replacement Costs,&quot; July 2026</li>
          <li>Pentagon supplemental funding request, $87.6B, July 2026</li>
          <li>Lockheed Martin, $35.3B munitions restocking contract announcement</li>
          <li>Wall Street Journal, &quot;Iran War Drains Weapons Needed for Taiwan,&quot; June 2026</li>
          <li>CSIS, &quot;Precision Munitions Expenditure Rates in Operation Epic Fury,&quot; May 2026</li>
          <li>Missile Defense Agency, THAAD program status briefing, June 2026</li>
          <li>US Navy, SM-3 inventory status (via Congressional notification)</li>
          <li>Raytheon and Lockheed Martin investor presentations, Q2 2026</li>
        </ul>
      </section>

      <RelatedArticles
        articles={[
          { href: '/weapons', title: 'US Weapons Systems', description: 'Comprehensive weapons database' },
          { href: '/spending', title: 'Military Spending Tracker', description: 'Where the money goes' },
          { href: '/largest-defense-contractors', title: 'Largest Defense Contractors', description: 'Who profits from the arsenal' },
          { href: '/analysis/113-billion-war', title: 'The $113 Billion War', description: 'Full cost analysis including the supplemental' },
          { href: '/iran-war-2026', title: 'Iran War 2026', description: 'Complete conflict overview' },
        ]}
      />

      <BackToTop />
    </div>
  )
}
