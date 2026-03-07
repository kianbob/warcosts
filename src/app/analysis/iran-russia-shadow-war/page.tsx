import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Russia\'s Shadow War: Moscow Is Helping Iran Kill Americans | WarCosts',
  description: 'Putin-Pezeshkian calls. Intelligence sharing. Providing US military asset locations to Iran. The Russia-Iran alliance is no longer a background concern — it\'s actively getting Americans killed.',
  openGraph: {
    title: 'Russia\'s Shadow War: Moscow Is Helping Iran Kill Americans',
    description: 'Russia is sharing intelligence on US military positions with Iran during Operation Epic Fury. This is how shadow wars work.',
    url: 'https://www.warcosts.org/analysis/iran-russia-shadow-war',
  },
}

const timeline = [
  { year: '1828', event: 'Treaty of Turkmenchay — Russia takes Iran\'s Caucasus territories. Relationship begins with mutual suspicion.' },
  { year: '1941–1946', event: 'Soviet Union occupies northern Iran during WWII. Attempts to establish puppet states in Azerbaijan and Kurdistan.' },
  { year: '1979', event: 'Iranian Revolution. Initially hostile to both superpowers. But US hostage crisis pushes Iran toward Soviet orbit over time.' },
  { year: '1995', event: 'Russia signs contract to complete Iran\'s Bushehr nuclear reactor. Beginning of nuclear cooperation despite Western objections.' },
  { year: '2007', event: 'Russia delivers TOR-M1 air defense systems to Iran despite US pressure. First significant arms deal.' },
  { year: '2015', event: 'Iran nuclear deal (JCPOA) temporarily aligns US-Russia interests. Both support the agreement.' },
  { year: '2016', event: 'Russia uses Iranian Shahid Nojeh airbase to launch Syria bombing sorties. First foreign military use of Iranian soil since WWII.' },
  { year: '2018', event: 'Trump withdraws from JCPOA. Russia-Iran interests realign against the US.' },
  { year: '2022', event: 'Iran provides Shahed-136 drones to Russia for use in Ukraine. Military technology transfer accelerates dramatically.' },
  { year: '2023', event: 'Iran reportedly provides ballistic missiles to Russia. Relationship deepens from transactional to strategic.' },
  { year: '2024', event: 'Russia and Iran sign comprehensive strategic partnership agreement. Includes defense cooperation and intelligence sharing provisions.' },
  { year: 'Jan 2026', event: 'As US "armada" deploys to Middle East, Russian satellite intelligence reportedly shared with Iran tracking US naval movements.' },
  { year: 'Feb 28, 2026', event: 'Hours after US strikes begin, Putin calls Pezeshkian. Content of call not disclosed. Russia issues statement condemning "unprovoked American aggression."' },
  { year: 'Mar 1–6', event: 'Multiple reports (ISW, Western intelligence officials) that Russia is providing Iran with real-time intelligence on US military asset positions. Iran\'s retaliatory salvos appear to be using this intelligence to target specific US facilities.' },
]

const intelligenceTypes = [
  {
    type: 'Satellite Imagery',
    description: 'Russia operates GLONASS (GPS equivalent) and a constellation of military reconnaissance satellites. These can provide real-time imagery of US carrier strike group positions, base activities, and aircraft deployments.',
    impact: 'Iran\'s ballistic missile targeting of specific US facilities — rather than area bombardment — suggests access to precise location data that Iran\'s own reconnaissance capabilities cannot provide.',
  },
  {
    type: 'Signals Intelligence (SIGINT)',
    description: 'Russia maintains extensive SIGINT capabilities from facilities in Syria (Khmeimim and Tartus) and from naval vessels in the Eastern Mediterranean and Persian Gulf.',
    impact: 'Interception of US military communications could reveal operational timing, force movements, and defensive gaps. This intelligence is most dangerous when provided in near-real-time.',
  },
  {
    type: 'Electronic Order of Battle',
    description: 'Russia has detailed knowledge of US military electronic signatures — radar frequencies, communication protocols, IFF codes — from years of close encounters in Syria and elsewhere.',
    impact: 'This data helps Iran\'s air defenses distinguish between different types of US aircraft and prioritize high-value targets. It also helps Iranian electronic warfare systems jam or spoof US communications.',
  },
  {
    type: 'Cyber Warfare Support',
    description: 'Russia\'s GRU (military intelligence) and FSB operate some of the world\'s most sophisticated cyber capabilities. Russia may be providing cyber tools or conducting cyber operations alongside Iran.',
    impact: 'Combined Russian-Iranian cyber operations against US military networks, allied communications, and critical infrastructure would be significantly more capable than either acting alone.',
  },
]

export default function IranRussiaShadowWarPage() {
  const crumbs = [
    { label: 'Analysis', href: '/analysis' },
    { label: 'Russia\'s Shadow War', href: '/analysis/iran-russia-shadow-war' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={crumbs} />

      <div className="mb-6 flex items-center gap-3">
        <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● LIVE CONFLICT</span>
        <span className="text-sm text-stone-500">Updated March 6, 2026</span>
      </div>

      <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
        Russia&apos;s Shadow War
      </h1>
      <p className="text-xl text-stone-600 mb-2">Moscow Is Helping Iran Kill Americans</p>
      <p className="text-stone-500 mb-8">
        Russia is reportedly providing Iran with real-time intelligence on US military positions during Operation Epic Fury.
        Iran&apos;s precision targeting of US bases suggests access to data that Iran&apos;s own capabilities cannot produce.
        This is what a shadow war looks like.
      </p>

      <ShareButtons title="Russia's Shadow War: Moscow Is Helping Iran Kill Americans" />

      {/* Key Claim */}
      <section className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-center">The Core Allegation</h2>
        <p className="text-stone-300 text-center text-lg mb-4">
          Multiple Western intelligence officials and open-source analysts (ISW, Roan Capital) report that Russia is providing Iran
          with real-time intelligence on US military asset locations — and that Iran is using this intelligence to target American service members.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-red-500">6</div>
            <div className="text-stone-400 text-sm">US troops killed so far</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">27+</div>
            <div className="text-stone-400 text-sm">US bases targeted by Iran</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">?</div>
            <div className="text-stone-400 text-sm">How many targeted using Russian intel?</div>
          </div>
        </div>
      </section>

      {/* Evidence Assessment */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-amber-900">
          <strong>Evidence assessment:</strong> The claim that Russia is providing intelligence to Iran during Operation Epic Fury comes from
          multiple credible sources but remains largely unconfirmed by official US government statements. The analysis below presents what is
          known, what is assessed, and what remains uncertain. We rate this claim as <strong>highly likely but not definitively proven</strong> based
          on available open-source evidence. Sources include ISW daily reports, Roan Capital situation reports, and statements from unnamed
          Western intelligence officials to Reuters and the Financial Times.
        </p>
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">The Evidence</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">1. Iran&apos;s Targeting Precision Has Improved Dramatically</h3>
          <p className="text-sm text-stone-600">
            Iran&apos;s January 2020 missile strike on Al Asad Air Base (retaliation for Soleimani killing) was relatively imprecise —
            many missiles missed their targets, and US forces survived because of early warning from intelligence allies.
            Iran&apos;s February-March 2026 strikes are markedly more accurate. Missiles are hitting specific buildings within US base
            complexes, not just general base areas. This precision improvement cannot be fully explained by Iran&apos;s own technological
            development in six years.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">2. Putin-Pezeshkian Calls</h3>
          <p className="text-sm text-stone-600">
            Putin called Iranian President Pezeshkian within hours of the first US strikes. Additional calls have been reported
            throughout the first week. While the official readouts describe expressions of &quot;concern&quot; and &quot;solidarity,&quot;
            intelligence analysts assess that operational intelligence sharing likely occurs through military-to-military channels
            outside the leader-level calls.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">3. The 2024 Strategic Partnership Agreement</h3>
          <p className="text-sm text-stone-600">
            Russia and Iran signed a comprehensive strategic partnership agreement in 2024 that includes provisions for defense
            cooperation and intelligence sharing. The agreement was widely interpreted as a formalization of the deepening military
            relationship that began with Iran&apos;s provision of Shahed drones to Russia in 2022. This agreement provides the legal
            and institutional framework for the kind of intelligence sharing now being reported.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">4. Russian Military Assets in the Region</h3>
          <p className="text-sm text-stone-600">
            Russia maintains significant military and intelligence infrastructure within range of the conflict zone:
            Khmeimim Air Base (Syria) with Su-35s and A-50 AWACS aircraft; Tartus Naval Facility (Syria) with intelligence-gathering vessels;
            spy ships operating in the Eastern Mediterranean and Indian Ocean. These assets are positioned to observe US military operations
            and relay information to Iran.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">5. Historical Precedent</h3>
          <p className="text-sm text-stone-600">
            During the Korean War, Soviet radar operators and MiG pilots directly participated in combat against US forces — a fact
            not fully acknowledged until after the Cold War ended. During the Vietnam War, Soviet advisors operated SAM systems that
            shot down American aircraft. Russia providing intelligence to Iran during active hostilities follows a decades-old pattern.
          </p>
        </div>
      </div>

      {/* Intelligence Types */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">What Russia Can Provide</h2>
      <p className="mb-4">
        Russia possesses several categories of intelligence that would be militarily significant to Iran:
      </p>

      <div className="space-y-4 mb-8">
        {intelligenceTypes.map((intel, i) => (
          <div key={i} className="bg-white border rounded-lg p-4">
            <h3 className="font-bold mb-1">{intel.type}</h3>
            <p className="text-sm text-stone-600 mb-2">{intel.description}</p>
            <div className="bg-red-50 rounded p-2">
              <p className="text-xs text-red-800"><strong>Impact on US forces:</strong> {intel.impact}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Russia's Motivation */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Why Russia Helps: The Strategic Logic</h2>
      <p className="mb-4">Russia has multiple strategic incentives to support Iran during this conflict:</p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left p-3 border-b font-semibold">Motivation</th>
              <th className="text-left p-3 border-b font-semibold">Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Ukraine pressure relief</td>
              <td className="p-3 border-b text-stone-600">Every US dollar, weapon, and unit of attention directed at Iran is one not directed at Ukraine. A protracted US-Iran conflict is the best thing that could happen for Russian operations in Ukraine.</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Oil prices</td>
              <td className="p-3 border-b text-stone-600">Russia is a major oil exporter. The Hormuz closure has pushed prices above $130/barrel. Every dollar increase generates billions in Russian oil revenue that funds the war in Ukraine and props up the Russian economy.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Weakening US credibility</td>
              <td className="p-3 border-b text-stone-600">A botched or protracted US campaign in Iran weakens American credibility globally — particularly with allies who are already questioning US reliability after Afghanistan withdrawal and Ukraine policy shifts.</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Quid pro quo</td>
              <td className="p-3 border-b text-stone-600">Iran provided thousands of Shahed drones and reportedly ballistic missiles to Russia for use in Ukraine. Providing intelligence in return is both reciprocal and relationship-deepening.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Multipolar world order</td>
              <td className="p-3 border-b text-stone-600">Both Russia and Iran seek to displace US hegemony. A regional war that bleeds American military resources, erodes alliances, and demonstrates the costs of empire serves the shared goal of a post-American world order.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Historical Context Timeline */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Russia-Iran Relations: A Timeline</h2>
      <div className="space-y-2 mb-8">
        {timeline.map((t, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="min-w-[80px] text-right">
              <span className="text-xs font-mono font-bold text-stone-500">{t.year}</span>
            </div>
            <div className="w-px bg-stone-300 shrink-0" />
            <p className="text-sm text-stone-700 pb-2">{t.event}</p>
          </div>
        ))}
      </div>

      {/* The Drone Connection */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">The Drone-for-Intel Pipeline</h2>
      <p className="mb-4">
        The Russia-Iran military relationship is often described as an alliance of convenience. But it has become something more:
        a genuine military-industrial partnership with tangible two-way flows.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-2 text-center">Iran → Russia</h3>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>• Shahed-136 drones (1,000+ delivered for Ukraine war)</li>
            <li>• Mohajer-6 drones (surveillance/strike)</li>
            <li>• Reportedly Fateh-110 ballistic missiles</li>
            <li>• Drone manufacturing technology transfer (Russia building Shahed variants domestically)</li>
            <li>• Estimated value: $1–2 billion</li>
          </ul>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-2 text-center">Russia → Iran</h3>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>• Su-35 fighter jets (delivery confirmed 2025)</li>
            <li>• S-400 air defense system (reported, unconfirmed)</li>
            <li>• Satellite intelligence on US fleet positions</li>
            <li>• SIGINT from Syria-based collection assets</li>
            <li>• Cyber warfare capabilities and tools</li>
            <li>• Real-time intelligence during Operation Epic Fury (assessed)</li>
          </ul>
        </div>
      </div>

      {/* Implications */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">What This Means</h2>
      <p className="mb-4">
        If Russia is indeed providing Iran with real-time intelligence on US military positions — and the evidence strongly suggests it is —
        the implications extend far beyond this conflict:
      </p>

      <div className="space-y-3 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-900 mb-1">American troops are being killed with Russian help</h3>
          <p className="text-sm text-red-800">
            If Iranian missiles are hitting US bases with enhanced accuracy due to Russian intelligence, then Russia bears direct
            responsibility for American casualties. This is not a metaphor. This is causation.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">The US is fighting a two-front proxy war against Russia</h3>
          <p className="text-sm text-stone-600">
            The US is supporting Ukraine against Russia in Europe while simultaneously fighting Iran — Russia&apos;s partner — in the Middle East.
            Russia benefits from both conflicts: Ukraine aid is diverted, oil prices rise, and US military resources are stretched thin.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">Escalation risk is non-trivial</h3>
          <p className="text-sm text-stone-600">
            If definitive evidence of Russian intelligence sharing emerges and leads to significant US casualties, political pressure
            to &quot;respond to Russia&quot; could push the US toward direct confrontation with a nuclear power. This was always the nightmare
            scenario of the Ukraine conflict — and it may arrive via the Middle East instead.
          </p>
        </div>
      </div>

      {/* Sources */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mt-12 mb-4">Sources</h2>
      <div className="bg-stone-50 rounded-lg p-4 mb-8 text-sm text-stone-600">
        <ul className="space-y-1 list-disc list-inside">
          <li>ISW (Institute for the Study of War) — daily Iran-Israel war reports (Feb 28 – Mar 6, 2026)</li>
          <li>Roan Capital Partners — Situation Report: Epic Fury (Mar 6, 2026)</li>
          <li>Reuters — reports on Russian intelligence sharing with Iran (multiple unnamed officials)</li>
          <li>Financial Times — Russia-Iran strategic partnership analysis</li>
          <li>CRS — Russia-Iran Military Cooperation (2024 report)</li>
          <li>IISS Strategic Survey 2025 — Russia-Iran defense relationship</li>
          <li>Putin-Pezeshkian call readouts — Kremlin.ru, Iranian presidency</li>
          <li>OSINT community — satellite tracking of Russian naval movements in Eastern Med</li>
          <li>Iran Watch — Comprehensive Iran-Russia military cooperation database</li>
          <li>Stockholm International Peace Research Institute (SIPRI) — Arms transfers database</li>
        </ul>
      </div>

      {/* Cross-links */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/analysis/iran-2026" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 2026: The Full Story →</h3>
          <p className="text-stone-500 text-sm">Day-by-day account of Operation Epic Fury</p>
        </Link>
        <Link href="/analysis/iran-regional-war" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">11 Countries, 7 Days →</h3>
          <p className="text-stone-500 text-sm">How the war spread across the region</p>
        </Link>
        <Link href="/analysis/iran-cost-per-second" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The $28,095-Per-Second War →</h3>
          <p className="text-stone-500 text-sm">What every bomb and missile costs</p>
        </Link>
        <Link href="/analysis/iran-civilian-cost" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Civilian Cost →</h3>
          <p className="text-stone-500 text-sm">Schools, hospitals, and the Grand Bazaar</p>
        </Link>
        <Link href="/analysis/hormuz-crisis" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Hormuz: The $80 Billion Chokepoint →</h3>
          <p className="text-stone-500 text-sm">The economic weapon Iran is wielding</p>
        </Link>
        <Link href="/analysis/allies-and-enemies" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">America&apos;s Allies & Enemies →</h3>
          <p className="text-stone-500 text-sm">The shifting map of global alliances</p>
        </Link>
      </div>

      <BackToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Russia\'s Shadow War: Moscow Is Helping Iran Kill Americans',
            description: 'Russia is sharing intelligence on US military positions with Iran during Operation Epic Fury.',
            datePublished: '2026-03-06',
            dateModified: '2026-03-06',
            publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            mainEntityOfPage: 'https://www.warcosts.org/analysis/iran-russia-shadow-war',
          }),
        }}
      />
    </div>
  )
}
