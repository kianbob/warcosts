import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The Civilian Cost: Schools, Hospitals, and the Grand Bazaar | WarCosts',
  description: '1,348 killed, 17,000 injured. 168 schoolchildren killed in Minab. 200 women dead. 55 healthcare workers wounded, 11 killed. Grand Bazaar destroyed. Golestan Palace damaged. This is what "precision strikes" look like. Updated March 12, 2026 (Day 13).',
  openGraph: {
    title: 'The Civilian Cost: Schools, Hospitals, and the Grand Bazaar',
    description: '1,348 killed. 17,000 injured. 168 schoolchildren. 200 women. 55 healthcare workers wounded. Updated Day 13.',
    url: 'https://www.warcosts.org/analysis/iran-civilian-cost',
  },
}

const civilianSites = [
  {
    name: 'Shajareh Tayyebeh Girls\' Elementary School, Minab',
    date: 'February 28, 2026',
    casualties: '168 killed (158 students ages 7–12, 10 staff)',
    details: 'Israeli strike hit the school at approximately 10:30 AM local time during morning classes. Initial reports said 108 dead; revised to 168 as bodies were recovered from rubble over subsequent days. An IRGC military facility was located nearby and may have been the intended target. The school was not on any known target list shared between US and Israeli forces.',
    response: 'Israel has not acknowledged the strike. The US described it as "under review." Iran\'s Red Crescent reported the death toll. International condemnation was immediate — UN Secretary-General called it "unconscionable." Comparisons drawn to the 2024 Tabeen school strike in Gaza (93 killed).',
    category: 'School',
  },
  {
    name: 'Tehran Grand Bazaar',
    date: 'March 2–3, 2026',
    casualties: 'Unknown — estimated dozens to hundreds',
    details: 'The Grand Bazaar of Tehran, one of the largest covered markets in the world and a center of Iranian commerce since the 15th century, sustained severe damage during strikes targeting nearby government buildings in central Tehran. The bazaar complex spans 10 km of covered passages and hundreds of shops. Fires spread through sections of the bazaar after nearby strikes ignited gas lines. Images showed entire wings reduced to rubble.',
    response: 'Iran accused the US and Israel of deliberately targeting cultural heritage. The bazaar was not a military target. Damage appears to be collateral from strikes on the nearby government district along Pasteur Street.',
    category: 'Cultural Heritage / Commercial',
  },
  {
    name: 'Golestan Palace, Tehran',
    date: 'February 28 – March 1, 2026',
    casualties: 'Unknown (area was active government district)',
    details: 'Golestan Palace, a UNESCO World Heritage Site since 2013 and the former seat of the Qajar dynasty, was damaged during strikes on Tehran\'s government quarter. The palace complex includes the Marble Throne, the Mirror Hall, and the Diamond Hall — irreplaceable 18th and 19th century art and architecture. Satellite imagery shows structural damage to at least two pavilions.',
    response: 'UNESCO issued a statement calling for protection of cultural heritage under the 1954 Hague Convention. Destruction of cultural heritage sites during armed conflict can constitute a war crime under the Rome Statute of the ICC.',
    category: 'UNESCO World Heritage Site',
  },
  {
    name: 'Khamenei Compound / Pasteur Street Government Zone, Tehran',
    date: 'February 28, 2026',
    casualties: 'Unknown — area included civilian workers, staff, maintenance personnel',
    details: 'The decapitation strike on Tehran\'s government district was launched at 9:15 AM local time — after government workers, cleaners, and administrative staff had arrived for work. The strike was deliberately timed for maximum leadership presence, but this also guaranteed maximum civilian staff casualties. Satellite photos showed the compound as a "dark grey mess of dust and ash."',
    response: 'Launching a decapitation strike during business hours rather than at night was a calculated decision. It increased the probability of killing leadership — but also guaranteed deaths among hundreds of civilian government employees.',
    category: 'Government / Civilian Workers',
  },
  {
    name: 'Hospital capacity across Iran',
    date: 'Ongoing since February 28',
    casualties: 'Indirect — thousands unable to receive care',
    details: 'Iran\'s hospital system, already strained by years of sanctions, has been overwhelmed by mass casualty events. Reports from Iranian Red Crescent indicate: blood supplies depleted in Tehran, Isfahan, and Shiraz within 24 hours; surgical teams working 20+ hour shifts; lack of anesthetics forcing field amputations; multiple hospitals damaged by strikes or running on emergency generators after power grid damage.',
    response: 'WHO called for humanitarian corridors. MSF (Doctors Without Borders) requested access. Both requests have gone unanswered as of March 6.',
    category: 'Medical Infrastructure',
  },
  {
    name: 'Isfahan — residential neighborhoods near nuclear facilities',
    date: 'February 28 – March 2',
    casualties: 'Estimated 50–100+ civilian dead',
    details: 'Iran\'s nuclear facilities at Isfahan (uranium conversion) are located near the city of 2.2 million people. Strikes against nuclear targets caused collateral damage to nearby residential areas. Reports of contamination fears led to mass civilian displacement — an estimated 500,000 people fled Isfahan in the first 48 hours.',
    response: 'IAEA expressed "grave concern" about potential radiological contamination from strikes on nuclear facilities. Environmental monitoring is impossible during active hostilities.',
    category: 'Residential / Nuclear Proximity',
  },
  {
    name: 'Iranian civilian infrastructure (power, water, communications)',
    date: 'Ongoing',
    casualties: 'Indirect — millions affected',
    details: 'US cyber operations and kinetic strikes have degraded Iran\'s electrical grid, communications networks, and water treatment facilities. While these may serve dual military-civilian purposes, their destruction affects 88 million Iranian civilians. Reports indicate rolling blackouts across most of the country, disrupted water supply in several cities, and near-total internet shutdown.',
    response: 'Targeting dual-use infrastructure is legal under international humanitarian law if proportionate to the military advantage gained. Whether the wholesale degradation of civilian infrastructure serving 88 million people meets the proportionality test is a question international courts may eventually address.',
    category: 'Critical Infrastructure',
  },
  {
    name: 'Dubai — Fairmont Hotel, Palm Jumeirah',
    date: 'February 28, 2026',
    casualties: 'Unknown — fire reported, guests evacuated',
    details: 'Iranian retaliatory missiles struck across the Gulf region including Dubai. The Fairmont Hotel on Palm Jumeirah was set ablaze. Dubai and Abu Dhabi airports were hit or forced to close. These strikes killed foreign nationals — civilians from dozens of countries who had nothing to do with the conflict.',
    response: 'UAE reported 186 missiles and 812 drones targeting the country in the first days of the war. This is collective punishment of an entire region for the actions of two states.',
    category: 'Third-Country Civilians',
  },
  {
    name: 'Beit Shemesh, Israel',
    date: 'March 1, 2026',
    casualties: '9 killed, 3 injured',
    details: 'Iranian ballistic missile struck the residential city of Beit Shemesh (population ~130,000), roughly 20 miles west of Jerusalem. Nine Israeli civilians killed. Iron Dome and David\'s Sling intercepted most incoming missiles, but the sheer volume of Iran\'s salvo overwhelmed defenses in several locations.',
    response: 'Israeli civilian casualties from Iranian missiles remain relatively low compared to Iranian civilian casualties from Israeli strikes — reflecting the massive asymmetry in defensive capabilities between the two countries.',
    category: 'Israeli Civilian',
  },
]

/* ── Civilian casualty comparison ── */
const civilianRatios = [
  { conflict: 'World War II (Allied bombing of Germany)', ratio: '~50% civilian', total: '~600,000 German civilians killed by bombing', note: 'Area bombing of cities. No precision munitions.' },
  { conflict: 'Korean War', ratio: '~70% civilian', total: '~2–3 million civilian deaths (both sides)', note: 'Carpet bombing of North Korea destroyed 85% of all buildings.' },
  { conflict: 'Vietnam War', ratio: '~65% civilian', total: '~2 million Vietnamese civilians', note: 'Napalm, Agent Orange, B-52 carpet bombing.' },
  { conflict: 'Gulf War (1991)', ratio: '~25% civilian', total: '~3,500 Iraqi civilians (direct)', note: 'First "precision" war. Still significant collateral damage.' },
  { conflict: 'Iraq War (2003–2011)', ratio: '~77% civilian', total: '~200,000+ Iraqi civilians (Iraq Body Count)', note: '"Shock and Awe" + 8 years of occupation, insurgency, sectarian violence.' },
  { conflict: 'Afghanistan (2001–2021)', ratio: '~70% civilian', total: '~47,000+ Afghan civilians killed directly', note: '20-year war. Drone strikes, night raids, airstrikes on weddings/hospitals.' },
  { conflict: 'Gaza (2023–2025)', ratio: '~90% civilian', total: '~40,000+ Palestinian civilians', note: 'One of the highest civilian-to-combatant ratios in modern warfare.' },
  { conflict: 'Iran (Epic Fury, Days 1-13)', ratio: 'TBD — early estimates ~70–85%', total: '1,348 Iranians killed, 17,000 injured (Day 13)', note: 'Decapitation + infrastructure + oil/security strikes. 168 schoolchildren, 200 women, 11 healthcare workers killed.' },
]

export default function IranCivilianCostPage() {
  const crumbs = [
    { label: 'Analysis', href: '/analysis' },
    { label: 'Iran: Civilian Cost', href: '/analysis/iran-civilian-cost' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={crumbs} />

      <div className="mb-6 flex items-center gap-3">
        <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● LIVE CONFLICT</span>
        <span className="text-sm text-stone-500">Updated March 12, 2026 (Day 13)</span>
      </div>

      <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
        The Civilian Cost
      </h1>
      <p className="text-xl text-stone-600 mb-2">Schools, Hospitals, and the Grand Bazaar</p>
      <p className="text-stone-500 mb-8">
        Operation Epic Fury was sold as a &quot;precision&quot; campaign targeting military and nuclear facilities. Seven days in, the civilian toll tells a different story.
      </p>

      <ShareButtons title="The Civilian Cost: Schools, Hospitals, and the Grand Bazaar" />

      {/* The Numbers */}
      <section className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 text-center">By the Numbers: Day 13 (March 12)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-red-500">1,348</div>
            <div className="text-stone-400 text-sm">Iranians killed (Iran UN rep)</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">17,000</div>
            <div className="text-stone-400 text-sm">Iranians injured</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">5,000+</div>
            <div className="text-stone-400 text-sm">Targets struck (US + Israel)</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">168</div>
            <div className="text-stone-400 text-sm">Children killed (Minab school)</div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-4">
          <div>
            <div className="text-2xl font-bold text-red-400">200</div>
            <div className="text-stone-400 text-sm">Women killed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-400">55</div>
            <div className="text-stone-400 text-sm">Healthcare workers wounded</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-400">11</div>
            <div className="text-stone-400 text-sm">Healthcare workers killed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-400">687</div>
            <div className="text-stone-400 text-sm">Killed in Lebanon (98 children)</div>
          </div>
        </div>
        <p className="text-stone-500 text-sm mt-6 text-center">
          Iran UN representative figures as of March 12. True toll likely higher due to ongoing communication blackouts and rubble removal. Lebanese figures per Lebanese government sources.
        </p>
      </section>

      {/* Warning */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-amber-900">
          <strong>Content warning:</strong> This article documents civilian casualties and destruction of civilian sites during armed conflict.
          Every effort has been made to verify information through multiple sources. Where numbers are uncertain, ranges are given.
          Fog of war makes real-time verification extremely difficult — all figures should be treated as preliminary estimates subject to revision.
        </p>
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-8 mb-2">The Precision Myth</h2>
      <p className="mb-4">
        &quot;Precision strikes&quot; has become the euphemism of choice for modern air warfare. It implies surgical accuracy — the bomb hits the
        military target, and nothing else. The reality is more complicated.
      </p>
      <p className="mb-4">
        The US and Israel have used genuinely precise munitions: GPS-guided JDAMs (circular error probable of ~5 meters), laser-guided Paveway bombs,
        and Tomahawk cruise missiles with terminal guidance. In a technical sense, these weapons hit what they aim at.
      </p>
      <p className="mb-4">
        But precision of the weapon is not precision of the decision. When you aim a precise bomb at a government compound at 9:15 AM
        — when civilian staff are at their desks — the weapon is precise, but the outcome is not. When you strike a military facility
        adjacent to a girls&apos; elementary school, the JDAM hits its target perfectly. The 168 children are just as dead.
      </p>
      <p className="mb-8">
        The key legal and moral questions are not about weapon accuracy but about <strong>targeting decisions</strong>: Was the military
        advantage proportionate to the expected civilian harm? Were less destructive alternatives available? Was there adequate
        warning to civilians? In the case of Operation Epic Fury, the decapitation-first strategy virtually guaranteed high civilian casualties
        by prioritizing surprise over civilian protection.
      </p>

      {/* Individual Sites */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Known Civilian Sites Hit or Damaged</h2>

      <div className="space-y-6 mb-8">
        {civilianSites.map((site, i) => (
          <div key={i} className="bg-white border rounded-lg overflow-hidden">
            <div className="bg-stone-100 px-4 py-3 flex items-center justify-between">
              <div>
                <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 font-semibold mr-2">{site.category}</span>
                <span className="text-xs text-stone-500">{site.date}</span>
              </div>
              {site.casualties !== 'Unknown' && (
                <span className="text-sm font-bold text-red-700">{site.casualties.split('(')[0].trim()}</span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{site.name}</h3>
              <p className="text-sm text-stone-700 mb-3">{site.details}</p>
              <div className="bg-stone-50 rounded p-3">
                <p className="text-xs text-stone-600"><strong>Response/Context:</strong> {site.response}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Minab Deep Dive */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Minab: The Strike That Changed the Narrative</h2>
      <p className="mb-4">
        Of all the civilian sites hit in the first week of Operation Epic Fury, the Shajareh Tayyebeh girls&apos; elementary school in Minab
        has become the defining image — and the defining moral question — of this war.
      </p>
      <p className="mb-4">
        Minab is a city of roughly 75,000 people in Hormozgan Province, southern Iran. The school was located approximately 800 meters from
        an IRGC facility — close enough that it fell within the blast radius of the strike, but far enough that it was clearly a separate structure.
        170 girls between the ages of 7 and 12 were in morning classes when the strike hit at approximately 10:30 AM local time on February 28.
      </p>
      <p className="mb-4">
        The initial death toll was reported at 108. As rescue workers pulled more bodies from the collapsed structure over the following days,
        the count rose to 168 — including 158 students and 10 teachers and staff.
      </p>
      <p className="mb-4">
        The strike was conducted by Israeli forces, not US forces, according to available reporting. However, the distinction may be legally
        and morally immaterial: the US provided the intelligence infrastructure, the satellite imagery, the aerial refueling for Israeli jets,
        and the overall campaign plan under which the strikes were conducted. Under international humanitarian law, parties that plan, direct,
        or assist in an attack share responsibility for its consequences.
      </p>
      <p className="mb-8">
        To date, neither the US nor Israel has issued an apology or acknowledged the Minab school strike. Israel has not confirmed or denied
        conducting the specific strike. The US State Department described it as &quot;under review.&quot;
      </p>

      {/* Historical Comparison */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Civilian Casualties in Context: Historical Comparison</h2>
      <p className="mb-4">
        How does Operation Epic Fury&apos;s civilian toll compare to other US military operations? It&apos;s too early for definitive numbers,
        but preliminary indicators suggest a familiar pattern.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left p-3 border-b font-semibold">Conflict</th>
              <th className="text-center p-3 border-b font-semibold">Civilian %</th>
              <th className="text-right p-3 border-b font-semibold">Civilian Deaths</th>
              <th className="text-left p-3 border-b font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {civilianRatios.map((c, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                <td className="p-3 border-b font-medium">{c.conflict}</td>
                <td className="p-3 border-b text-center font-mono">{c.ratio}</td>
                <td className="p-3 border-b text-right text-sm">{c.total}</td>
                <td className="p-3 border-b text-xs text-stone-500">{c.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-8">
        The pattern is consistent across 80 years of American air campaigns: civilian casualties constitute the majority of deaths.
        The introduction of precision-guided munitions reduced the number of bombs needed to destroy a target — but it did not
        reduce the political willingness to bomb in populated areas. If anything, the illusion of precision has made decision-makers
        more willing to strike urban targets, not less.
      </p>

      {/* International Law */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Legal Framework: What International Law Says</h2>
      <div className="space-y-4 mb-8">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">Distinction (IHL Protocol I, Art. 48)</h3>
          <p className="text-sm text-stone-600">
            Parties must distinguish between civilian objects and military objectives at all times. Attacks must be directed solely
            at military objectives. Striking a school because an IRGC base is nearby violates this principle unless the school itself
            was being used for military purposes (no evidence of this).
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">Proportionality (IHL Protocol I, Art. 51(5)(b))</h3>
          <p className="text-sm text-stone-600">
            An attack is prohibited if the expected civilian harm is excessive in relation to the concrete and direct military advantage
            anticipated. Was the destruction of a nearby IRGC facility worth the lives of 168 schoolchildren? Proportionality analysis
            requires this question be answered before the strike, not after.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">Precaution (IHL Protocol I, Art. 57)</h3>
          <p className="text-sm text-stone-600">
            Those who plan or decide upon an attack must take all feasible precautions to minimize civilian harm. This includes choosing
            timing and weapons to reduce collateral damage. The choice to strike at 9:15 AM — prime school hours — raises serious questions
            about whether precautionary obligations were met.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">Cultural Property (1954 Hague Convention)</h3>
          <p className="text-sm text-stone-600">
            Cultural property must be safeguarded during armed conflict. The damage to Golestan Palace (UNESCO World Heritage) and the
            Grand Bazaar of Tehran raises potential violations. The US ratified the Hague Convention in 2009.
          </p>
        </div>
      </div>

      {/* The Question */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-center">The Question Nobody in Washington Is Asking</h2>
        <p className="text-stone-300 text-center text-lg">
          If the US had intelligence showing 170 American elementary school students would die as collateral damage from an Iranian strike on a nearby military base —
          would anyone call that &quot;proportionate&quot;?
        </p>
        <p className="text-stone-500 text-sm text-center mt-4">
          The legal and moral standards we demand of others must be the standards we hold ourselves to. Otherwise they are not standards at all.
        </p>
      </div>

      {/* Sources */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mt-12 mb-4">Sources</h2>
      <div className="bg-stone-50 rounded-lg p-4 mb-8 text-sm text-stone-600">
        <ul className="space-y-1 list-disc list-inside">
          <li>Iranian Red Crescent — casualty reports (via Al Jazeera, Reuters)</li>
          <li>Hengaw Human Rights Organization — daily casualty tracking</li>
          <li>CENTCOM press briefings — target counts and operational updates</li>
          <li>UNESCO — statement on cultural heritage protection</li>
          <li>International Committee of the Red Cross — IHL reference documents</li>
          <li>Satellite imagery analysis — various OSINT analysts (confirmed by Reuters, AP)</li>
          <li>WHO — hospital capacity reports for Iran</li>
          <li>Iraq Body Count methodology — adapted for casualty estimation framework</li>
          <li>Geneva Conventions, Additional Protocol I (1977) — legal framework</li>
          <li>1954 Hague Convention for the Protection of Cultural Property</li>
          <li>Rome Statute of the International Criminal Court, Art. 8</li>
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
          <p className="text-stone-500 text-sm">What every bomb and missile actually costs</p>
        </Link>
        <Link href="/analysis/iran-regional-war" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">11 Countries, 7 Days →</h3>
          <p className="text-stone-500 text-sm">How the war spread across the Middle East</p>
        </Link>
        <Link href="/analysis/hormuz-crisis" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Hormuz: The $80 Billion Chokepoint →</h3>
          <p className="text-stone-500 text-sm">Economic devastation from the strait closure</p>
        </Link>
        <Link href="/analysis/cost-per-life" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Price of a Life →</h3>
          <p className="text-stone-500 text-sm">What each death costs in every US war</p>
        </Link>
        <Link href="/analysis/human-cost" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Human Cost of War →</h3>
          <p className="text-stone-500 text-sm">Across all American wars — the full toll</p>
        </Link>
      </div>

      <BackToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Civilian Cost: Schools, Hospitals, and the Grand Bazaar',
            description: '168 schoolchildren killed in Minab. Grand Bazaar destroyed. Golestan Palace damaged. The civilian toll of Operation Epic Fury.',
            datePublished: '2026-03-06',
            dateModified: '2026-03-12',
            publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            mainEntityOfPage: 'https://www.warcosts.org/analysis/iran-civilian-cost',
          }),
        }}
      />
    </div>
  )
}
