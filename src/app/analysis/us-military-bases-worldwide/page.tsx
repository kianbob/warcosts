import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: '750 US Military Bases in 80 Countries: The Empire Map | WarCosts.org',
  description: 'The US maintains roughly 750 military bases across 80 countries — more than any empire in history. Annual cost: $55 billion+. Here\'s the complete picture.',
  openGraph: {
    title: '750 US Military Bases in 80 Countries: The Empire Map',
    description: '750 bases. 80 countries. $55B/year. No other nation comes close. The map of American military power.',
    url: 'https://www.warcosts.org/analysis/us-military-bases-worldwide',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/us-military-bases-worldwide',
  },
}

const topCountries = [
  { country: '🇯🇵 Japan', bases: 120, personnel: 56000, note: 'Largest overseas presence; Okinawa has 31 bases on an island the size of LA' },
  { country: '🇩🇪 Germany', bases: 119, personnel: 35000, note: 'Legacy of WWII occupation and Cold War; Ramstein is hub for Europe/Middle East' },
  { country: '🇰🇷 South Korea', bases: 73, personnel: 28500, note: '70+ years after Korean War armistice; largest base: Camp Humphreys' },
  { country: '🇮🇹 Italy', bases: 44, personnel: 12000, note: 'Naval Station Naples; Aviano Air Base; key Mediterranean hub' },
  { country: '🇬🇧 United Kingdom', bases: 25, personnel: 9500, note: 'RAF Lakenheath, RAF Mildenhall; "special relationship" basing' },
  { country: '🇧🇭 Bahrain', bases: 5, personnel: 9000, note: 'Naval Support Activity Bahrain — HQ of US 5th Fleet' },
  { country: '🇶🇦 Qatar', bases: 3, personnel: 8000, note: 'Al Udeid Air Base — largest US base in Middle East; CENTCOM forward HQ' },
  { country: '🇦🇺 Australia', bases: 7, personnel: 2500, note: 'Pine Gap intelligence facility; growing presence for China containment' },
  { country: '🇹🇷 Turkey', bases: 5, personnel: 1700, note: 'Incirlik Air Base — houses US nuclear weapons' },
  { country: '🇩🇯 Djibouti', bases: 1, personnel: 4500, note: 'Camp Lemonnier — only permanent US base in Africa; $70M/year in rent' },
]

const historicalGrowth = [
  { era: 'Pre-WWII (before 1941)', bases: '~30', note: 'Philippines, Panama Canal Zone, a few Pacific islands' },
  { era: 'World War II Peak (1945)', bases: '~2,000+', note: 'Bases in 100+ countries; occupying Germany, Japan, Italy, Pacific islands' },
  { era: 'Early Cold War (1955)', bases: '~900', note: 'Massive buildup against Soviet Union; NATO infrastructure, Korean bases' },
  { era: 'Vietnam Era (1968)', bases: '~800', note: 'Southeast Asia buildup; maintained Cold War global network' },
  { era: 'End of Cold War (1991)', bases: '~800', note: 'Expected "peace dividend" drawdown that largely never came' },
  { era: 'Post-9/11 Peak (2005)', bases: '~900+', note: 'Massive expansion into Middle East, Central Asia, Africa' },
  { era: 'Current (2024)', bases: '~750', note: 'Still more bases than any empire in history; shifting toward Pacific' },
]

const comparisonOther = [
  { country: '🇺🇸 United States', overseasBases: '~750', countries: 80 },
  { country: '🇬🇧 United Kingdom', overseasBases: '~16', countries: 7 },
  { country: '🇫🇷 France', overseasBases: '~10', countries: 6 },
  { country: '🇷🇺 Russia', overseasBases: '~9', countries: 6 },
  { country: '🇨🇳 China', overseasBases: '~1', countries: 1 },
  { country: '🇹🇷 Turkey', overseasBases: '~6', countries: 3 },
  { country: '🇮🇳 India', overseasBases: '~0', countries: 0 },
]

export default function USMilitaryBasesWorldwidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '750 US Military Bases in 80 Countries: The Empire Map',
        description: 'The US maintains roughly 750 military bases across 80 countries — more than any empire in history.',
        url: 'https://www.warcosts.org/analysis/us-military-bases-worldwide',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-28',
        dateModified: '2026-03-28',
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'US Military Bases Worldwide' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Global Footprint</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          750 US Military Bases in 80 Countries
        </h1>
        <p className="text-xl text-stone-300 mb-4">
          The largest military footprint in the history of the world. $55 billion per year to maintain.
        </p>
        <p className="text-stone-400 text-lg">
          The United States maintains approximately 750 military bases in at least 80 countries and territories
          outside the US. For comparison, Britain, France, and Russia combined have roughly 35 overseas bases.
          China has one. No empire in human history — not Rome, not Britain, not the Mongols — has maintained
          a military presence in as many places as the United States does right now.
        </p>
      </div>

      <ShareButtons title="750 US Military Bases in 80 Countries: The Empire Map" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '~750', label: 'Overseas Bases', sub: 'DoD Base Structure Report' },
          { val: '80+', label: 'Countries', sub: 'Every continent except Antarctica' },
          { val: '$55B+', label: 'Annual Cost', sub: 'RAND Corporation estimate' },
          { val: '250K+', label: 'Troops Deployed', sub: 'Stationed outside the US' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Top countries */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Where the Bases Are: Top 10 Host Countries</h2>
        <div className="space-y-3">
          {topCountries.map(c => (
            <div key={c.country} className="bg-white border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-stone-900">{c.country}</h3>
                <div className="text-right">
                  <span className="text-red-700 font-bold">{c.bases} bases</span>
                  <span className="text-stone-400 text-sm ml-2">({c.personnel.toLocaleString()} troops)</span>
                </div>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2 mb-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: `${(c.bases / 120) * 100}%` }} />
              </div>
              <p className="text-sm text-stone-600">{c.note}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3">Sources: DoD Base Structure Report FY2024; David Vine, <em>Base Nation</em>; Congressional Research Service</p>
      </section>

      {/* No one else comes close */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">No Other Country Comes Close</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 font-semibold">Country</th>
                <th className="text-right p-3 font-semibold">Overseas Bases</th>
                <th className="text-right p-3 font-semibold">Countries</th>
              </tr>
            </thead>
            <tbody>
              {comparisonOther.map((c, i) => (
                <tr key={c.country} className={i === 0 ? 'bg-red-50 font-semibold' : 'border-t'}>
                  <td className="p-3">{c.country}</td>
                  <td className="p-3 text-right font-mono">{c.overseasBases}</td>
                  <td className="p-3 text-right">{c.countries}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-stone-600 mt-4">
          The US has roughly <strong>20 times more overseas bases</strong> than every other country on Earth combined.
          This is historically unprecedented. Even the British Empire at its peak in the early 1900s — which ruled
          a quarter of the world&apos;s landmass — did not have this many permanent foreign military installations.
        </p>
      </section>

      {/* Historical growth */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How We Got Here: A Brief History</h2>
        <div className="space-y-3">
          {historicalGrowth.map(era => (
            <div key={era.era} className="flex items-start gap-4 bg-stone-50 border rounded-lg p-4">
              <span className="text-red-700 font-bold whitespace-nowrap">{era.bases}</span>
              <div>
                <h3 className="font-semibold text-stone-900">{era.era}</h3>
                <p className="text-sm text-stone-600">{era.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost */}
      <section className="mb-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Cost of Empire</h2>
          <p className="text-stone-300 mb-6">
            Maintaining 750 bases in 80 countries doesn&apos;t come cheap. The RAND Corporation estimates the
            annual cost at $55 billion or more — though the true figure is hard to pin down because military
            accounting spreads base costs across multiple budget lines.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { item: 'Personnel costs (overseas)', cost: '$25B+', note: 'Pay, housing, family support for 250K+ troops and dependents' },
              { item: 'Base operations & maintenance', cost: '$15B+', note: 'Utilities, repairs, contractors, local staff' },
              { item: 'Construction & upgrades', cost: '$8B+', note: 'New facilities, base expansions, housing construction' },
              { item: 'Host nation support', cost: '$3B+', note: 'Payments to host countries (some, like Japan, pay the US)' },
              { item: 'Environmental remediation', cost: '$2B+', note: 'Cleanup of contamination, PFAS, unexploded ordnance' },
              { item: 'Transportation & logistics', cost: '$2B+', note: 'Moving personnel, equipment, supplies globally' },
            ].map(item => (
              <div key={item.item} className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <span className="text-white font-semibold text-sm">{item.item}</span>
                  <span className="text-red-400 font-bold">{item.cost}</span>
                </div>
                <p className="text-stone-400 text-xs mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Okinawa spotlight */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Spotlight: Okinawa — An Island Occupied</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <p className="text-stone-700 mb-3">
            The Japanese island of Okinawa is the most vivid example of what American military basing looks like
            for the people who live alongside it. The island — roughly the size of Los Angeles — hosts
            <strong> 31 US military installations</strong> that occupy 15% of the island&apos;s land area.
          </p>
          <p className="text-stone-700 mb-3">
            For 80 years, Okinawans have lived with jet noise, military accidents, environmental contamination,
            and crimes committed by US personnel. In repeated referendums and protests — including a 2019
            referendum where 72% voted against a new base — Okinawans have asked the US to leave or reduce
            its presence. The bases remain.
          </p>
          <p className="text-stone-700">
            Okinawa represents just 0.6% of Japan&apos;s land area but hosts 70% of US military facilities in Japan.
            The Okinawan governor has called it &ldquo;an unfair burden that no other community in the democratic
            world is asked to bear.&rdquo;
          </p>
        </div>
      </section>

      {/* Why does the US have so many bases */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Why Does the US Have So Many Bases?</h2>
        <div className="space-y-4">
          {[
            { title: 'WWII & Cold War Legacy', description: 'Most bases trace their origins to WWII occupation (Germany, Japan, Italy) or Cold War containment of the Soviet Union. After these threats diminished, the bases stayed.' },
            { title: 'Force Projection Doctrine', description: 'US military doctrine requires the ability to project power anywhere on Earth within hours. Forward-deployed bases make this possible — a carrier in Bahrain can reach the Persian Gulf in minutes, not weeks.' },
            { title: 'Bureaucratic Inertia', description: 'Closing bases faces fierce resistance from the Pentagon, defense contractors who service them, host nation governments who depend on the economic activity, and members of Congress. No one benefits from closing a base, so they stay open.' },
            { title: 'Alliance Obligations', description: 'NATO, US-Japan Security Treaty, US-ROK Alliance, and dozens of bilateral agreements require or encourage US basing. Allies often prefer US bases as a security guarantee (even when their populations don\'t).' },
          ].map(item => (
            <div key={item.title} className="bg-white border rounded-lg p-4">
              <h3 className="font-semibold text-stone-900 mb-1">{item.title}</h3>
              <p className="text-sm text-stone-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <div className="bg-stone-100 border rounded-xl p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">Empire by Another Name</h2>
          <p className="text-stone-700 mb-3">
            The United States doesn&apos;t call it an empire. But 750 military installations in 80 countries,
            maintained by a quarter million troops at a cost of $55 billion per year, is the definition of
            imperial infrastructure. No other nation in history has maintained this kind of global military
            presence.
          </p>
          <p className="text-stone-700">
            The question is not whether this constitutes an empire — it clearly does. The question is whether
            this empire makes Americans safer, whether it&apos;s sustainable, and whether the $55 billion
            spent annually on overseas bases could be better spent at home.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources & Citations</h2>
        <ul className="text-sm text-stone-600 space-y-1 list-disc pl-5">
          <li>Department of Defense, <em>Base Structure Report — Fiscal Year 2024 Baseline</em></li>
          <li>David Vine, <em>Base Nation: How U.S. Military Bases Abroad Harm America and the World</em> (Metropolitan Books, 2015)</li>
          <li>David Vine, <em>The United States of War</em> (University of California Press, 2020)</li>
          <li>RAND Corporation, &ldquo;Overseas Basing of U.S. Military Forces,&rdquo; 2023</li>
          <li>Congressional Research Service, &ldquo;U.S. Military Presence in the Indo-Pacific Region,&rdquo; updated 2024</li>
          <li>SIPRI, <em>Foreign Military Bases and Installations</em>, database</li>
          <li>Okinawa Prefectural Government, &ldquo;US Military Bases in Okinawa,&rdquo; official statistics</li>
          <li>Government Accountability Office, &ldquo;Overseas Military Presence: DOD Should Improve Cost Estimates,&rdquo; 2023</li>
        </ul>
      </section>

      <div className="text-center text-sm text-stone-500 mb-8">
        <p>Last updated: March 2026</p>
        <Link href="/analysis" className="text-red-700 hover:underline">← Back to All Analysis</Link>
      </div>

      <BackToTop />
    </div>
  )
}
