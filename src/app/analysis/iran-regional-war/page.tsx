import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: '11 Countries, 7 Days: How a Two-Country War Became a Regional Catastrophe | WarCosts',
  description: 'Iran, Israel, US, Lebanon, Bahrain, Kuwait, UAE, Qatar, Oman, Cyprus, Azerbaijan, Saudi Arabia, Iraq — every country drawn into Operation Epic Fury and what each has suffered.',
  openGraph: {
    title: '11 Countries, 7 Days: How a Two-Country War Became a Regional Catastrophe',
    description: 'A US-Iran conflict that was supposed to be contained has engulfed the entire Middle East in 7 days.',
    url: 'https://www.warcosts.org/analysis/iran-regional-war',
  },
}

const countries = [
  {
    name: 'Iran',
    flag: '🇮🇷',
    role: 'Primary target',
    casualties: '1,230–1,332+ killed (Day 7 estimates)',
    keyEvents: [
      'Supreme Leader Khamenei killed in February 28 decapitation strike',
      '2,500+ targets struck by US and Israeli forces',
      'Nuclear facilities at Natanz, Fordow, Isfahan hit with B-2 bombers and Tomahawks',
      '30+ naval vessels sunk; IRGC Navy largely destroyed',
      'Strait of Hormuz closed by Iran in retaliation',
      '180 schoolgirls killed at Minab elementary school',
      'Grand Bazaar and Golestan Palace damaged in Tehran',
      'Power grid degraded by cyber attacks; rolling blackouts nationwide',
      'Retaliating with missile and drone salvos against 27+ US bases and Israel',
      'Trump demands unconditional surrender; Iran refuses',
    ],
    economicImpact: 'Economy shattered. Rial in freefall. Oil exports halted. Banking system disrupted. Estimated GDP loss: 30-50% annualized.',
  },
  {
    name: 'Israel',
    flag: '🇮🇱',
    role: 'Co-belligerent (leading strike partner)',
    casualties: '12+ killed (Beit Shemesh + other missile impacts)',
    keyEvents: [
      'Conducted 2,500+ strikes on Iran alongside US forces',
      'Struck the Minab school (IRGC facility nearby was target)',
      'Facing massive Iranian missile and drone retaliation',
      'Iron Dome, David\'s Sling, Arrow 3 intercepting hundreds of incoming',
      'Approved ground incursion into Lebanon after Hezbollah joins war',
      'Beit Shemesh hit — 9 killed, 3 injured',
      'Ben Gurion Airport closed intermittently',
      'Mossad posted Farsi message calling Iranians to revolt',
    ],
    economicImpact: 'Tourism collapsed. Reservist call-up straining economy. Tel Aviv Stock Exchange down 15%+ since Feb 28.',
  },
  {
    name: 'United States',
    flag: '🇺🇸',
    role: 'Co-belligerent (initiated strikes)',
    casualties: '6 killed, 18+ wounded',
    keyEvents: [
      'Launched Operation Epic Fury Feb 28 without congressional authorization',
      'Two carrier strike groups deployed (Ford + Lincoln)',
      'B-2 bombers flying 30+ hour missions from Whiteman AFB, Missouri',
      'Senate voted 53-47 against War Powers Resolution (only Rand Paul crossed party)',
      'Trump posting Truth Social videos at 2:30 AM announcing operations',
      'CENTCOM reporting 1,000+ targets destroyed',
      '3 service members killed Day 3; total risen to 6 by Day 7',
      'Estimated $3.6 billion in direct costs (Week 1)',
    ],
    economicImpact: 'Gas prices surging. Stock market volatile. Defense stocks rallying. Consumer confidence plummeting.',
  },
  {
    name: 'Lebanon',
    flag: '🇱🇧',
    role: 'Drawn in via Hezbollah',
    casualties: '52+ killed',
    keyEvents: [
      'Hezbollah launched rockets into northern Israel within hours of US strikes on Iran',
      'Israel conducting retaliatory strikes in southern Lebanon and Beirut suburbs',
      'IDF approved ground incursion — echoing 2006 Lebanon War',
      'Lebanese Army staying out of fighting; Hezbollah operating independently',
      'Civilian displacement from southern Lebanon — hundreds of thousands flee north',
      '52 killed in first week across Lebanon',
    ],
    economicImpact: 'Already in economic collapse since 2019. New war devastating what remained of tourism and commerce. Beirut port still not rebuilt from 2020 explosion.',
  },
  {
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    role: 'Targeted by Iranian retaliation',
    casualties: 'Unknown — reports of injuries from missile/drone strikes',
    keyEvents: [
      'Iran targeted UAE with 186 missiles and 812 drones (per UAE reports)',
      'Dubai Fairmont Hotel on Palm Jumeirah set ablaze',
      'Dubai and Abu Dhabi airports hit or forced to close',
      'Al Dhafra Air Base (US F-35s stationed here) targeted',
      'UAE did not participate in strikes but hosts US forces — became target by association',
    ],
    economicImpact: 'Dubai real estate market freezing. Foreign companies reconsidering regional HQs. Emirates/Etihad cancelling flights. Insurance costs skyrocketing.',
  },
  {
    name: 'Qatar',
    flag: '🇶🇦',
    role: 'Struck by Iran → then struck back',
    casualties: 'Unknown',
    keyEvents: [
      'Al Udeid Air Base (largest US base in Middle East, 10,000+ personnel) hit by Iranian missiles',
      'Qatar retaliated with strikes against Iran — first Qatari offensive military action in modern history',
      'Hosts US CENTCOM forward HQ — making it automatic target',
      'Had been mediating between US and Iran prior to war',
    ],
    economicImpact: 'LNG exports (Qatar is world\'s largest exporter) completely halted by Hormuz closure. Hundreds of billions in lost revenue projected.',
  },
  {
    name: 'Bahrain',
    flag: '🇧🇭',
    role: 'Targeted by Iranian retaliation',
    casualties: 'Unknown',
    keyEvents: [
      'US 5th Fleet HQ located in Bahrain — primary target',
      'Iranian missiles and drones targeted naval facilities',
      'Bahrain\'s Shia majority population creates internal tension',
      'History of Iranian-backed protest movements (2011 uprising)',
    ],
    economicImpact: 'Small island economy completely disrupted. Oil refinery operations affected.',
  },
  {
    name: 'Kuwait',
    flag: '🇰🇼',
    role: 'Targeted by Iranian retaliation',
    casualties: 'Unknown',
    keyEvents: [
      'Multiple US military facilities in Kuwait targeted',
      'Camp Arifjan (largest US Army base in Middle East) struck',
      'Kuwait unable to export oil — 100% dependent on Hormuz',
    ],
    economicImpact: 'Oil exports completely halted. Kuwait\'s entire economy depends on oil. Facing fiscal crisis within weeks.',
  },
  {
    name: 'Iraq',
    flag: '🇮🇶',
    role: 'Caught between US and Iranian-backed militias',
    casualties: 'Unknown',
    keyEvents: [
      'Iranian-backed militias in Iraq activating against US bases',
      'Erbil (Kurdistan) hit by Iranian missiles targeting US consulate area',
      'Al Asad Air Base targeted (scene of 2020 Iranian missile strike)',
      'Iraqi government called for "restraint" — powerless to influence events',
      'Iraq\'s southern oil exports through Hormuz halted',
    ],
    economicImpact: 'Oil exports (95% dependent on Hormuz) halted. Budget crisis imminent. Dinar under pressure.',
  },
  {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    role: 'Targeted by Iranian retaliation',
    casualties: 'Unknown',
    keyEvents: [
      'Iranian missiles targeted Saudi oil infrastructure and US bases',
      'Saudi Arabia notably not participating in strikes against Iran',
      'Attempting to stay neutral while hosting US military assets',
      'Oil exports through Hormuz disrupted (East-West pipeline provides partial bypass)',
    ],
    economicImpact: 'Oil exports partially disrupted. East-West pipeline handling 5M bbl/day but cannot replace full 7.4M bbl/day exports.',
  },
  {
    name: 'Cyprus',
    flag: '🇨🇾',
    role: 'British bases targeted',
    casualties: 'Unknown',
    keyEvents: [
      'RAF Akrotiri (British sovereign base) targeted by Iranian missiles/drones',
      'British bases used for intelligence gathering and potential staging',
      'Cyprus is EU territory — Iranian strikes on EU soil escalate the conflict\'s legal dimension',
      'First attack on European sovereign territory by a Middle Eastern state in decades',
    ],
    economicImpact: 'Tourism sector disrupted. Flight cancellations to Eastern Mediterranean.',
  },
  {
    name: 'Azerbaijan',
    flag: '🇦🇿',
    role: 'Iranian intelligence operations foiled',
    casualties: 'None reported',
    keyEvents: [
      'Iranian intelligence plots foiled in Azerbaijan',
      'Azerbaijan has close relationship with Israel (arms purchases, intelligence sharing)',
      'Iran has historically viewed Azerbaijan\'s Israel ties with suspicion',
      'Potential northern front if conflict escalates',
    ],
    economicImpact: 'Oil exports via non-Hormuz routes relatively unaffected. Regional instability threatening investment.',
  },
]

export default function IranRegionalWarPage() {
  const crumbs = [
    { label: 'Analysis', href: '/analysis' },
    { label: 'Iran: Regional War', href: '/analysis/iran-regional-war' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={crumbs} />

      <div className="mb-6 flex items-center gap-3">
        <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● LIVE CONFLICT</span>
        <span className="text-sm text-stone-500">Updated March 6, 2026</span>
      </div>

      <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
        11 Countries, 7 Days
      </h1>
      <p className="text-xl text-stone-600 mb-2">How a Two-Country War Became a Regional Catastrophe</p>
      <p className="text-stone-500 mb-8">
        Operation Epic Fury was launched against Iran. Within hours, missiles were falling on a dozen countries.
        By Day 7, the conflict had drawn in — willingly or not — at least 11 sovereign nations across three continents.
      </p>

      <ShareButtons title="11 Countries, 7 Days: How a Two-Country War Became a Regional Catastrophe" />

      {/* Overview Map Stats */}
      <section className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 text-center">The Spread: Day 7</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-red-500">12+</div>
            <div className="text-stone-400 text-sm">Countries under fire</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">27+</div>
            <div className="text-stone-400 text-sm">US bases targeted by Iran</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">3</div>
            <div className="text-stone-400 text-sm">Continents affected</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">1,300+</div>
            <div className="text-stone-400 text-sm">Total dead (all countries)</div>
          </div>
        </div>
      </section>

      {/* The Escalation Logic */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">How Wars Spread: The Escalation Logic</h2>
      <p className="mb-4">
        This war did not spread accidentally. It spread because of three structural features of American military posture in the Middle East:
      </p>
      <div className="space-y-3 mb-8">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">1. The Base Network</h3>
          <p className="text-sm text-stone-600">
            The US operates military facilities in at least 11 Middle Eastern countries. When you attack Iran, Iran doesn&apos;t need to reach
            the US mainland to hit America — it just needs to hit the nearest US base. Every base host country becomes a battlefield.
            This is the structural vulnerability of &quot;forward deployment&quot;: your military footprint determines your attack surface.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">2. The Proxy Network</h3>
          <p className="text-sm text-stone-600">
            Iran&apos;s &quot;Axis of Resistance&quot; — Hezbollah (Lebanon), various Iraqi militias, the Houthis (Yemen), and Hamas — provides
            Iran with retaliatory capacity across the entire region. An attack on Iran activates this entire network simultaneously.
            This was entirely predictable; it was predicted, publicly, by every serious analyst. And it was ignored.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">3. The Economic Chokepoint</h3>
          <p className="text-sm text-stone-600">
            The Strait of Hormuz closure doesn&apos;t just affect Iran — it affects every country that depends on Gulf oil and LNG.
            That&apos;s virtually the entire global economy. Countries that had nothing to do with the US-Iran conflict —
            Japan, South Korea, India, China, the EU — are now suffering severe economic consequences.
            See: <Link href="/analysis/hormuz-crisis" className="text-red-600 hover:underline">Hormuz: The $80 Billion Chokepoint</Link>
          </p>
        </div>
      </div>

      {/* Country-by-Country */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Country by Country</h2>

      <div className="space-y-6 mb-8">
        {countries.map((c, i) => (
          <div key={i} className="bg-white border rounded-lg overflow-hidden" id={c.name.toLowerCase().replace(/\s+/g, '-')}>
            <div className="bg-stone-100 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{c.flag}</span>
                <span className="font-bold text-lg">{c.name}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-stone-200 text-stone-600">{c.role}</span>
              </div>
              <span className="text-sm text-red-700 font-semibold">{c.casualties}</span>
            </div>
            <div className="p-4">
              <ul className="space-y-1 mb-3">
                {c.keyEvents.map((e, j) => (
                  <li key={j} className="text-sm text-stone-700 flex gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-stone-50 rounded p-3">
                <p className="text-xs text-stone-600"><strong>Economic Impact:</strong> {c.economicImpact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Historical Comparison */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Historical Parallels</h2>
      <div className="space-y-4 mb-8">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">World War I: How Alliances Drag Nations In</h3>
          <p className="text-sm text-stone-600">
            The assassination of Archduke Franz Ferdinand in Sarajevo was supposed to be a localized Austro-Serbian crisis.
            Within weeks, alliance obligations and mobilization timetables had drawn in Russia, Germany, France, Britain, and the Ottoman Empire.
            The lesson: in a region with interlocking alliances and obligations, no conflict stays contained.
            The Middle East in 2026 is structurally similar — a web of alliances, base-hosting agreements, and proxy relationships
            that transform any bilateral conflict into a regional one.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">Iraq 2003: The Promised Quick War</h3>
          <p className="text-sm text-stone-600">
            Dick Cheney told Meet the Press the Iraq invasion would take &quot;weeks rather than months.&quot; Donald Rumsfeld said troops
            would be home by Christmas. The war lasted 8 years, cost $3 trillion, killed 4,500 Americans and 200,000+ Iraqis,
            destabilized the entire region, and created ISIS. Trump has promised this campaign will take &quot;four weeks or less.&quot;
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">The 1980s Tanker War: Hormuz Has Been Here Before</h3>
          <p className="text-sm text-stone-600">
            During the Iran-Iraq War, both sides attacked 451 tankers and merchant ships in the Persian Gulf.
            The US launched Operation Earnest Will to escort Kuwaiti tankers. USS Stark was hit by an Iraqi missile (37 killed).
            USS Samuel B. Roberts hit an Iranian mine. The US responded with Operation Praying Mantis — the largest US naval battle since WWII.
            A localized war escalated step by step into direct US-Iran naval combat. The pattern is repeating.
          </p>
        </div>
      </div>

      {/* The Question of Containment */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Can This Be Contained?</h2>
      <p className="mb-4">
        As of Day 7, the war shows no signs of de-escalation. Iran&apos;s Supreme Leader is dead, but no successor has been named.
        Iran continues missile and drone attacks. Hezbollah has opened a second front in Lebanon. Israel has approved a ground
        incursion. The Houthis have resumed Red Sea attacks. Oil prices are surging. Trump is demanding unconditional surrender.
      </p>
      <p className="mb-4">
        Every escalation makes de-escalation harder. Every country drawn in creates new grievances and new domestic political
        pressures to retaliate. Every civilian killed creates new recruits for resistance movements. This is the escalation spiral
        that every military strategist warned about — and every political leader ignored.
      </p>
      <p className="mb-8">
        The question is no longer whether this war will spread. It has already spread. The question is whether anyone has the
        political will and diplomatic skill to stop it before it consumes the entire region.
      </p>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <h3 className="font-bold text-red-900 mb-2">What Comes Next?</h3>
        <p className="text-sm text-red-800">
          If current trajectories hold, the conflict is likely to expand further. Potential escalation pathways include:
          (1) Israeli ground invasion of Lebanon triggering a full Hezbollah war,
          (2) Iranian mining of the Strait of Hormuz requiring US minesweeping operations under fire,
          (3) Houthi attacks on commercial shipping requiring renewed naval operations in the Red Sea,
          (4) Iranian-backed militia attacks on US forces in Iraq and Syria,
          (5) Russian provision of advanced weapons systems to Iran (S-400, anti-ship missiles).
          Each pathway draws in additional countries and resources. Each makes the exit harder to find.
        </p>
      </div>

      {/* Sources */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mt-12 mb-4">Sources</h2>
      <div className="bg-stone-50 rounded-lg p-4 mb-8 text-sm text-stone-600">
        <ul className="space-y-1 list-disc list-inside">
          <li>CENTCOM press briefings (Feb 28 – Mar 6, 2026)</li>
          <li>ISW (Institute for the Study of War) — daily Iran-Israel special reports</li>
          <li>Alma Research Center — daily war situation reports</li>
          <li>Reuters, AP, Al Jazeera — country-specific reporting</li>
          <li>UAE Ministry of Defense — statement on missile/drone attacks (186 missiles, 812 drones)</li>
          <li>Roan Capital Partners — Situation Report: Epic Fury (Mar 6)</li>
          <li>Richard Haass (Substack) — "The War at One Week"</li>
          <li>Chatham House — "How will the Iran war affect the global economy?"</li>
          <li>Congressional Research Service — US Military Facilities in the Middle East (2024)</li>
        </ul>
      </div>

      {/* Cross-links */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/analysis/iran-2026" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 2026: The Full Story →</h3>
          <p className="text-stone-500 text-sm">Day-by-day account of Operation Epic Fury</p>
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
          <p className="text-stone-500 text-sm">What the strait closure means globally</p>
        </Link>
        <Link href="/analysis/iran-russia-shadow-war" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Russia&apos;s Shadow War →</h3>
          <p className="text-stone-500 text-sm">Moscow is helping Iran kill Americans</p>
        </Link>
        <Link href="/us-military-bases-around-the-world" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">US Military Bases Worldwide →</h3>
          <p className="text-stone-500 text-sm">750+ bases that define America&apos;s attack surface</p>
        </Link>
      </div>

      <BackToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '11 Countries, 7 Days: How a Two-Country War Became a Regional Catastrophe',
            description: 'Every country drawn into Operation Epic Fury — what each has suffered and why containment has failed.',
            datePublished: '2026-03-06',
            dateModified: '2026-03-06',
            publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            mainEntityOfPage: 'https://www.warcosts.org/analysis/iran-regional-war',
          }),
        }}
      />
    </div>
  )
}
