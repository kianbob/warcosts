import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'US Nuclear Arsenal: $756B Over the Next Decade',
  description: '$756B over 10 years. $1.7T over 30 years. 5,044 warheads. New ICBMs, subs, and bombers. The full nuclear accounting.',
  openGraph: {
    title: 'The US Nuclear Arsenal: $756 Billion Over the Next Decade',
    description: '$756B over 10 years. $1.7T over 30 years. 5,044 warheads. Each one costs $3M/year to maintain. The price of nuclear deterrence.',
    url: 'https://www.warcosts.org/analysis/nuclear-weapons-cost',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/nuclear-weapons-cost',
  },
}

const modernizationPrograms = [
  { name: 'B-21 Raider (bomber)', cost: 203, contractor: 'Northrop Grumman', timeline: '2023–2050s', units: '100+', note: 'Replacing B-2 Spirit. Stealth long-range bomber capable of carrying nuclear cruise missiles. $700M+ per aircraft.' },
  { name: 'Sentinel ICBM (LGM-35A)', cost: 131, contractor: 'Northrop Grumman', timeline: '2029–2075', units: '400+', note: 'Replacing Minuteman III ICBMs, deployed since 1970. Already 81% over initial budget estimate. GAO has flagged as "Nunn-McCurdy breach."' },
  { name: 'Columbia-class SSBN (submarine)', cost: 128, contractor: 'General Dynamics', timeline: '2027–2042', units: '12', note: 'Replacing Ohio-class boomers. Each sub carries 16 Trident II missiles with multiple warheads. $15B+ per submarine.' },
  { name: 'Long-Range Standoff Weapon (LRSO)', cost: 14, contractor: 'Raytheon/RTX', timeline: '2027–2040s', units: '1,000+', note: 'Nuclear-armed cruise missile for B-21 and B-52 bombers. Replaces AGM-86B.' },
  { name: 'Trident II D5LE (missile life extension)', cost: 28, contractor: 'Lockheed Martin', timeline: 'Ongoing', units: '~400', note: 'Extending life of submarine-launched ballistic missiles through 2040s.' },
  { name: 'W87-1 Warhead (for Sentinel)', cost: 15, contractor: 'NNSA/Los Alamos', timeline: '2030+', units: '~400', note: 'New warhead designed for the Sentinel ICBM. First new warhead design in decades.' },
  { name: 'W80-4 Warhead (for LRSO)', cost: 12, contractor: 'NNSA/Lawrence Livermore', timeline: '2027+', units: '~1,000', note: 'Refurbished warhead for the new cruise missile.' },
  { name: 'Nuclear Command & Control (NC3)', cost: 25, contractor: 'Multiple', timeline: 'Ongoing', units: 'N/A', note: 'Modernizing the communication systems that enable nuclear launch orders. Includes satellites, ground systems, and aircraft.' },
]

const arsenalBreakdown = [
  { category: 'Total Warheads', count: 5044, note: 'Includes active, reserve, and retired awaiting dismantlement' },
  { category: 'Deployed Strategic', count: 1419, note: 'On ICBMs, submarines, and bomber bases — ready to launch' },
  { category: 'Reserve/Hedge', count: 2000, note: 'Stored but could be deployed; serves as backup stockpile' },
  { category: 'Retired (awaiting dismantlement)', count: 1625, note: 'Removed from service but not yet physically dismantled' },
  { category: 'Deployed on ICBMs', count: 400, note: '400 Minuteman III missiles in MT, ND, WY, CO, NE — 1 warhead each' },
  { category: 'Deployed on Submarines', count: 900, note: '14 Ohio-class SSBNs; each carries ~20 Trident II missiles' },
  { category: 'Deployed for Bombers', count: 119, note: 'B-52H and B-2 Spirit bombers; gravity bombs and cruise missiles' },
]

const globalArsenals = [
  { country: '🇷🇺 Russia', total: 5580, deployed: 1549 },
  { country: '🇺🇸 United States', total: 5044, deployed: 1419 },
  { country: '🇨🇳 China', total: 500, deployed: 'Unknown' },
  { country: '🇫🇷 France', total: 290, deployed: 280 },
  { country: '🇬🇧 United Kingdom', total: 225, deployed: 120 },
  { country: '🇮🇳 India', total: 172, deployed: 'Unknown' },
  { country: '🇵🇰 Pakistan', total: 170, deployed: 'Unknown' },
  { country: '🇮🇱 Israel', total: 90, deployed: 'Unknown' },
  { country: '🇰🇵 North Korea', total: 50, deployed: 'Unknown' },
]

export default function NuclearWeaponsCostPage() {
  const totalModernization = modernizationPrograms.reduce((sum, p) => sum + p.cost, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The US Nuclear Arsenal: $756 Billion Over the Next Decade',
        description: 'The US plans to spend $756 billion on nuclear weapons over the next decade and $1.7 trillion over 30 years. A full accounting of America\'s nuclear modernization.',
        url: 'https://www.warcosts.org/analysis/nuclear-weapons-cost',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-28',
        dateModified: '2026-03-28',
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Nuclear Weapons Cost' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Nuclear Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          The US Nuclear Arsenal: $756 Billion Over the Next Decade
        </h1>
        <p className="text-xl text-stone-300 mb-4">
          5,044 warheads. $1.7 trillion over 30 years. $3 million per warhead per year. New ICBMs, new submarines, new bombers — all at once.
        </p>
        <p className="text-stone-400 text-lg">
          The United States is in the middle of the most expensive nuclear weapons modernization program in
          history — replacing all three legs of the nuclear triad simultaneously. New ICBMs, new submarines,
          new bombers, new warheads, new cruise missiles, and new command-and-control systems. The Congressional
          Budget Office projects $756 billion over the next decade and $1.7 trillion over 30 years. It is the
          single largest weapons program in human history, and almost nobody is talking about it.
        </p>
      </div>

      <ShareButtons title="The US Nuclear Arsenal: $756 Billion Over the Next Decade" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '$756B', label: '10-Year Cost', sub: 'CBO estimate, 2023–2032' },
          { val: '$1.7T', label: '30-Year Cost', sub: 'Full lifecycle modernization' },
          { val: '5,044', label: 'Total Warheads', sub: '1,419 deployed and ready' },
          { val: '$3M', label: 'Per Warhead/Year', sub: 'Average maintenance cost' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Current arsenal */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Current Arsenal: 5,044 Warheads</h2>
        <p className="text-stone-700 mb-6">
          The US nuclear stockpile consists of approximately 5,044 warheads — down from a Cold War peak of
          31,255 in 1967, but still enough to destroy civilization many times over. A single Ohio-class submarine
          carries enough nuclear firepower to destroy every major city in any country on Earth.
        </p>
        <div className="space-y-3">
          {arsenalBreakdown.map(item => (
            <div key={item.category} className="flex justify-between items-start bg-white border rounded-lg p-3">
              <div>
                <span className="font-semibold text-stone-900">{item.category}</span>
                <p className="text-xs text-stone-500">{item.note}</p>
              </div>
              <span className="text-red-700 font-bold whitespace-nowrap ml-4">{item.count.toLocaleString()}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3">Source: Federation of American Scientists, <em>Status of World Nuclear Forces</em>, updated 2024; Hans Kristensen & Matt Korda</p>
      </section>

      {/* Modernization programs */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Modernization: Everything at Once</h2>
        <p className="text-stone-700 mb-6">
          For the first time since the Cold War, the US is replacing all three legs of the nuclear triad
          simultaneously — new ICBMs, new submarines, and new bombers — plus new warheads, new cruise missiles,
          and upgraded command systems. Total estimated cost: ${totalModernization}B+ across all programs.
        </p>
        <div className="space-y-4">
          {modernizationPrograms.map(p => (
            <div key={p.name} className="bg-white border rounded-lg p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-stone-900">{p.name}</h3>
                  <span className="text-stone-400 text-sm">{p.contractor} | {p.timeline} | {p.units} units</span>
                </div>
                <span className="text-red-700 font-bold text-lg">${p.cost}B</span>
              </div>
              <p className="text-sm text-stone-600">{p.note}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 mt-4">
          <p className="text-red-900 font-bold">Total modernization programs: ~${totalModernization}B</p>
          <p className="text-sm text-red-800 mt-1">
            This does not include ongoing maintenance, personnel costs, or inevitable cost overruns.
            GAO reports that major nuclear programs are already exceeding budgets by 20-80%.
          </p>
        </div>
        <p className="text-xs text-stone-400 mt-3">Sources: Congressional Budget Office, &ldquo;Projected Costs of U.S. Nuclear Forces, 2023–2032&rdquo;; GAO nuclear weapons reports</p>
      </section>

      {/* Global comparison */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Global Nuclear Arsenals</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 font-semibold">Country</th>
                <th className="text-right p-3 font-semibold">Total Warheads</th>
                <th className="text-right p-3 font-semibold">Deployed</th>
              </tr>
            </thead>
            <tbody>
              {globalArsenals.map((c, i) => (
                <tr key={c.country} className={i === 1 ? 'bg-red-50 font-semibold' : 'border-t'}>
                  <td className="p-3">{c.country}</td>
                  <td className="p-3 text-right font-mono">{c.total.toLocaleString()}</td>
                  <td className="p-3 text-right font-mono">{typeof c.deployed === 'number' ? c.deployed.toLocaleString() : c.deployed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-stone-700 text-sm mt-4">
          Nine countries possess approximately 12,100 nuclear warheads. The US and Russia hold 88% of them.
          China is rapidly expanding — from ~350 warheads in 2023 to a projected 1,000+ by 2030, which is
          driving much of the US modernization urgency.
        </p>
        <p className="text-xs text-stone-400 mt-3">Source: Federation of American Scientists; SIPRI Yearbook 2024; Arms Control Association</p>
      </section>

      {/* Cost comparison */}
      <section className="mb-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What $756 Billion Could Buy Instead</h2>
          <p className="text-stone-300 mb-6">
            The 10-year nuclear modernization budget ($756B) is nearly 10 times the entire Department of
            Education budget ($79B). Here&apos;s what else that money could fund:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { item: 'Free college for every American', years: '9+ years', note: '$79B/year for free public universities' },
              { item: 'Universal healthcare transition', years: 'Complete', note: 'Estimated $700B–$2T for full transition' },
              { item: 'Solve US homelessness', years: '37+ years', note: 'HUD estimates $20B/year to end homelessness' },
              { item: 'Repair all US infrastructure', years: '3+ years', note: 'ASCE estimates $2.6T infrastructure gap over 10 years' },
              { item: 'Double NIH research budget', years: '16 years', note: 'NIH budget: $47B/year' },
              { item: 'Clean energy transition', years: 'Major progress', note: '$756B = significant investment in renewables' },
            ].map(item => (
              <div key={item.item} className="bg-white/10 rounded-lg p-3">
                <h3 className="text-white font-semibold text-sm">{item.item}</h3>
                <p className="text-green-400 text-sm">{item.years}</p>
                <p className="text-stone-500 text-xs mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Sentinel problem */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Spotlight: The Sentinel ICBM — Already Over Budget</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <p className="text-stone-700 mb-3">
            The Sentinel ICBM program, intended to replace the 54-year-old Minuteman III missiles, is already
            one of the most troubled defense programs in history. Originally estimated at $78 billion, it has
            ballooned to $131 billion — an <strong>81% cost overrun</strong> before a single missile has been deployed.
          </p>
          <p className="text-stone-700 mb-3">
            In January 2024, the program triggered a &ldquo;Nunn-McCurdy breach&rdquo; — a formal notification to
            Congress that costs have exceeded thresholds by more than 25%. Despite this, the Pentagon certified
            the program as essential and continued funding. No alternatives were seriously considered.
          </p>
          <p className="text-stone-700">
            Critics argue the US could extend the life of Minuteman III missiles for a fraction of the cost,
            or shift to a submarine-only nuclear deterrent that would be more survivable and less expensive.
            The Air Force and Northrop Grumman have successfully argued that replacement is the only option.
          </p>
        </div>
      </section>

      {/* The deterrence question */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How Many Nukes Do We Actually Need?</h2>
        <div className="space-y-4">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-stone-900 mb-1">The Pentagon&apos;s Answer: All of Them</h3>
            <p className="text-sm text-stone-600">
              US nuclear doctrine holds that deterrence requires the ability to survive a first strike and
              retaliate with devastating force. This requires a &ldquo;triad&rdquo; — land-based ICBMs,
              submarine-launched missiles, and bomber-delivered weapons — so that no single attack could
              eliminate America&apos;s nuclear capability.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-stone-900 mb-1">The Scientist&apos;s Answer: Far Fewer</h3>
            <p className="text-sm text-stone-600">
              Nuclear weapons researchers estimate that as few as 100 nuclear detonations could trigger a
              &ldquo;nuclear winter&rdquo; that would collapse global agriculture and kill billions through
              famine. The US has 1,419 warheads deployed — more than 14 times that threshold. Many arms
              control experts argue that 300-500 warheads would provide more than sufficient deterrence.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-stone-900 mb-1">The Cost-Effective Answer: Submarines Only</h3>
            <p className="text-sm text-stone-600">
              A single Ohio-class submarine carries enough nuclear firepower to destroy any country on Earth.
              The US has 14 of them. Submarines are virtually undetectable and provide the most survivable leg
              of the triad. Some strategists argue the US could maintain deterrence with submarines alone,
              saving hundreds of billions by canceling new ICBMs and reducing the bomber fleet.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <div className="bg-stone-100 border rounded-xl p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">$1.7 Trillion for Weapons We Can Never Use</h2>
          <p className="text-stone-700 mb-3">
            Nuclear weapons exist to never be used. That is their purpose — deterrence through the threat of
            mutual annihilation. The question is whether $1.7 trillion over 30 years is the right price to
            pay for weapons whose use would end civilization.
          </p>
          <p className="text-stone-700 mb-3">
            Each warhead in the US arsenal costs approximately $3 million per year to maintain. The entire
            nuclear modernization program costs more than the annual budget of the Department of Education
            every single year for three decades. And it&apos;s already over budget.
          </p>
          <p className="text-stone-700">
            The nuclear arsenal is the ultimate expression of America&apos;s military spending priorities:
            virtually unlimited budgets for weapons of mass destruction, while schools crumble, veterans
            go untreated, and infrastructure decays. We are building weapons to prevent the end of the
            world while failing to invest in the world we have.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources & Citations</h2>
        <ul className="text-sm text-stone-600 space-y-1 list-disc pl-5">
          <li>Congressional Budget Office, &ldquo;Projected Costs of U.S. Nuclear Forces, 2023 to 2032,&rdquo; July 2023</li>
          <li>Federation of American Scientists, &ldquo;Status of World Nuclear Forces,&rdquo; Hans Kristensen & Matt Korda, updated 2024</li>
          <li>Government Accountability Office, &ldquo;Nuclear Weapons: NNSA Should Further Develop Cost, Schedule, and Risk Information for the W87-1 Warhead Program,&rdquo; 2024</li>
          <li>Arms Control Association, &ldquo;U.S. Nuclear Modernization Programs,&rdquo; fact sheet, updated 2024</li>
          <li>SIPRI Yearbook 2024, <em>Stockholm International Peace Research Institute</em></li>
          <li>Department of Defense, <em>Nuclear Posture Review</em>, 2022</li>
          <li>Congressional Research Service, &ldquo;U.S. Nuclear Weapons: First Strike Options,&rdquo; updated 2024</li>
          <li>Union of Concerned Scientists, &ldquo;The Trillion Dollar Triad,&rdquo; 2023</li>
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
