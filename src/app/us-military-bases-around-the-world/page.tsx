import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import LastUpdated from '@/components/LastUpdated'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Military Bases Around the World — 750+ Bases in 80+ Countries',
  description:
    'The United States operates over 750 military bases in more than 80 countries, plus 800+ domestic installations. Annual overseas cost: $55 billion. Interactive data on every base, country, and region.',
  keywords: [
    'US military bases around the world',
    'US overseas military bases',
    'how many military bases does the US have',
    'US bases map',
    'American military bases abroad',
  ],
  openGraph: {
    title: 'US Military Bases Around the World — 750+ in 80+ Countries',
    description: 'More overseas bases than any empire in history. $55 billion per year to maintain. Full country-by-country data.',
    url: 'https://www.warcosts.org/us-military-bases-around-the-world',
    type: 'article',
  },
}

export default function USMilitaryBasesAroundTheWorld() {
  const baseStats = loadData('base-stats.json') as {
    totalBases: number; domesticBases: number; overseasBases: number;
    lilyPads: number; usFunded: number; countries: number; states: number
  }
  const baseCountries = loadData('base-countries.json') as {
    country: string; slug: string; bases: number; lilyPads: number; usFunded: number; domestic: number; total: number
  }[]

  const overseas = baseCountries.filter((c) => c.domestic === 0 && c.total > 0)
  const topCountries = overseas.slice(0, 15)
  const totalOverseas = overseas.reduce((s, c) => s + c.total, 0)
  const totalCountries = overseas.length

  return (
    <div className="bg-stone-900 min-h-screen text-stone-300 -mt-4 -mx-4 px-4 pt-4">
      <div className="max-w-5xl mx-auto py-8">
        <FaqJsonLd faqs={[
          { q: 'How many military bases does the US have around the world?', a: 'The US operates over 750 military bases and installations in more than 80 countries and territories worldwide, plus approximately 800 domestic bases. This is the largest network of foreign military bases in world history.' },
          { q: 'How much do US overseas military bases cost?', a: 'US overseas military bases cost approximately $55 billion per year to maintain — more than the entire budget of the Department of Education.' },
          { q: 'Which country has the most US military bases?', a: 'Japan hosts the most US military bases with over 120 installations, followed by Germany with approximately 119, and South Korea with around 73.' },
          { q: 'Why does the US have so many overseas bases?', a: 'Most were established during WWII and the Cold War to contain the Soviet Union. Despite the Cold War ending 34 years ago, the base network has largely persisted due to alliance commitments, force projection doctrine, and congressional resistance to base closures.' },
        ]} />
        <Breadcrumbs items={[{ label: 'Bases', href: '/bases' }, { label: 'US Military Bases Around the World' }]} />
        <LastUpdated />

        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-4">
          US Military Bases Around the World
        </h1>

        <p className="text-lg text-stone-300 max-w-3xl mb-4">
          The United States maintains the largest network of foreign military bases in world history —
          over <strong className="text-red-400">{fmt(totalOverseas)} overseas installations</strong> across{' '}
          <strong className="text-white">{totalCountries} countries and territories</strong>, plus{' '}
          <strong className="text-white">{fmt(baseStats.domesticBases)}</strong> domestic bases across all 50 states.
          No other country comes close. The UK has 16 overseas bases. France has 11. Russia has about 20. China has 1.
        </p>

        <ShareButtons title="US Military Bases Around the World — 750+ in 80+ Countries" />

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          {[
            { label: 'Overseas Installations', value: fmt(totalOverseas) },
            { label: 'Countries & Territories', value: fmt(totalCountries) },
            { label: 'Domestic Bases', value: fmt(baseStats.domesticBases) },
            { label: 'Annual Overseas Cost', value: '$55B' },
          ].map((s) => (
            <div key={s.label} className="bg-stone-800 rounded-lg p-5 text-center border border-stone-700">
              <p className="text-2xl md:text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{s.value}</p>
              <p className="text-stone-400 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Explainer */}
        <div className="bg-stone-800 border border-red-600/30 rounded-xl p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">
            What Counts as a &ldquo;Base&rdquo;?
          </h2>
          <p className="text-stone-300 mb-3">
            The Pentagon uses various terms to obscure the true scale. Major bases, &ldquo;lily pad&rdquo; outposts,
            cooperative security locations, forward operating sites, and US-funded installations in allied countries
            all form the network. David Vine&apos;s research at American University documented{' '}
            <strong className="text-white">750+ sites</strong> across 80+ countries — and the true number may be higher
            due to classified facilities and secret agreements.
          </p>
          <ul className="text-stone-400 text-sm space-y-1">
            <li>• <strong className="text-stone-300">Major bases:</strong> {fmt(baseStats.overseasBases)} large installations with permanent personnel</li>
            <li>• <strong className="text-stone-300">Lily pads:</strong> {fmt(baseStats.lilyPads)} smaller outposts for rapid deployment</li>
            <li>• <strong className="text-stone-300">US-funded sites:</strong> {fmt(baseStats.usFunded)} installations in allied nations paid for by US taxpayers</li>
          </ul>
        </div>

        {/* Top countries table */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-12 mb-6">
          Top Countries by US Base Count
        </h2>
        <div className="space-y-3 mb-8">
          {topCountries.map((c, i) => {
            const maxTotal = topCountries[0].total
            const widthPct = Math.max((c.total / maxTotal) * 100, 3)
            return (
              <div key={c.slug}>
                <div className="flex justify-between text-sm mb-1">
                  <Link href={`/bases/countries/${c.slug}`} className="text-stone-300 hover:text-red-400">
                    <span className="text-stone-500 font-mono mr-2">#{i + 1}</span>
                    {c.country}
                  </Link>
                  <span className="font-medium text-white">
                    {c.total} {c.total === 1 ? 'base' : 'bases'}
                  </span>
                </div>
                <div className="h-3 bg-stone-700 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${i < 3 ? 'bg-red-600' : 'bg-red-400/60'}`} style={{ width: `${widthPct}%` }} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Cost section */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-12 mb-6">
          What Does This Cost?
        </h2>
        <div className="bg-stone-800 rounded-lg p-6 border border-stone-700 mb-8">
          <p className="text-stone-300 mb-4">
            Maintaining the US overseas base network costs approximately <strong className="text-red-400">$55 billion per
            year</strong> — a figure that includes construction, operations, personnel, and logistics but likely
            understates the true cost due to classified facilities and indirect expenses.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Annual Overseas Base Cost', value: '$55B' },
              { label: 'Camp Humphreys, S. Korea', value: '$10.7B build' },
              { label: 'Djibouti Rent Alone', value: '$70M/yr' },
              { label: 'Japan "Sympathy Budget"', value: '$1.8B/yr' },
              { label: 'Niger Drone Base (expelled)', value: '$110M' },
              { label: 'Personnel Overseas', value: '173,000+' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{s.value}</p>
                <p className="text-stone-500 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why it matters */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-12 mb-6">
          Why Does the US Have So Many Overseas Bases?
        </h2>
        <div className="space-y-4 text-stone-300 mb-8">
          <p>
            The modern base network emerged from World War II and the Cold War. After defeating Germany and Japan,
            the US never fully withdrew — bases built to fight fascism became bases to contain communism. After the
            Cold War ended, the bases stayed. After 9/11, the network expanded dramatically into the Middle East and
            Africa. Each new conflict adds bases; none are ever closed.
          </p>
          <p>
            The base network serves multiple purposes: power projection, reassurance of allies, deterrence of
            adversaries, and — critically — sustaining the defense industry. Every base needs supplies, maintenance,
            and equipment. <Link href="/contractors" className="text-red-400 hover:underline">Defense contractors</Link> earn
            billions annually from overseas base operations. The Pentagon has resisted every round of Base Realignment
            and Closure (BRAC) since 2005.
          </p>
          <p>
            Critics argue that the base network provokes the very threats it claims to deter. Osama bin Laden cited
            US bases in Saudi Arabia as a primary motivation for the 9/11 attacks. Local populations from Okinawa to
            Djibouti to Germany have protested US military presence for decades, citing noise, environmental
            contamination, and crimes committed by US personnel.
          </p>
        </div>

        {/* Environmental and social impact */}
        <div className="bg-stone-800 border border-stone-700 rounded-xl p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-white mb-3">
            💡 The Hidden Costs of Overseas Bases
          </h3>
          <ul className="space-y-2 text-stone-300 text-sm">
            <li>• <strong className="text-white">Environmental damage:</strong> PFAS contamination in Okinawa, toxic waste at Clark Air Base (Philippines), depleted uranium in Vieques (Puerto Rico)</li>
            <li>• <strong className="text-white">Forced displacement:</strong> The entire Chagossian population was removed from Diego Garcia to build a US base. They&apos;ve fought 50+ years to return.</li>
            <li>• <strong className="text-white">Host nation tension:</strong> Okinawans have protested since 1945. South Korea has seen massive rallies against THAAD deployment.</li>
            <li>• <strong className="text-white">Status of Forces Agreements:</strong> US personnel often enjoy immunity from local law, fueling resentment</li>
          </ul>
        </div>

        {/* Related links */}
        <div className="bg-stone-800 rounded-lg p-6 border border-stone-700 mt-12">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">Explore More</h3>
          <ul className="space-y-2">
            <li><Link href="/bases" className="text-red-400 hover:underline">→ All US Military Bases — Complete Database</Link></li>
            <li><Link href="/bases/countries" className="text-red-400 hover:underline">→ Bases by Country — Full List</Link></li>
            <li><Link href="/bases/states" className="text-red-400 hover:underline">→ Domestic Military Bases by State</Link></li>
            <li><Link href="/global-spending" className="text-red-400 hover:underline">→ Global Military Spending Comparison</Link></li>
            <li><Link href="/spending" className="text-red-400 hover:underline">→ Historical US Military Spending</Link></li>
          </ul>
        </div>

        <BackToTop />
      </div>
    </div>
  )
}
