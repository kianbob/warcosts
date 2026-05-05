import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Iran War vs Iraq War: Side-by-Side Comparison',
  description: 'Iran is 4x the size of Iraq with 3x the population. The war is already 5x more expensive per day. A complete comparison.',
  keywords: ['iran war vs iraq war', 'iran iraq comparison', 'iran iraq war differences', 'operation epic fury vs operation iraqi freedom'],
  openGraph: {
    title: 'Iran War vs Iraq War: A Side-by-Side Comparison',
    description: 'Iran is 4x the size of Iraq with 3x the population. The war is already 5x more expensive per day. A complete comparison.',
    url: 'https://www.warcosts.org/analysis/iran-vs-iraq-war',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iran War vs Iraq War: Side-by-Side',
    description: '$50B+ in one month vs $1.1T over 8 years. No coalition. No congressional vote. No exit strategy.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/iran-vs-iraq-war',
  },
}

export default function IranVsIraqWarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Iran War vs Iraq War: A Side-by-Side Comparison',
            description: 'A comprehensive comparison of the Iran and Iraq wars across cost, casualties, authorization, and global impact.',
            datePublished: '2026-03-15T00:00:00Z',
            dateModified: '2026-03-27T22:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/iran-vs-iraq-war' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Iran War vs Iraq War' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Comparative Analysis — Updated March 27, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Iran War vs Iraq War
        </h1>
        <p className="text-xl text-stone-300 mb-4">A Side-by-Side Comparison of America&apos;s Two Biggest Middle East Wars</p>
        <p className="text-stone-400 text-lg">
          In 2003, the US invaded Iraq with a 39-nation coalition, congressional authorization, and a ground force
          of 177,000 troops. In 2026, the US attacked Iran with no coalition, no congressional vote, and no ground troops.
          One month in, the Iran war is already 5x more expensive per day. Here&apos;s how they compare.
        </p>
      </div>

      <ShareButtons title="Iran War vs Iraq War: A Side-by-Side Comparison" />

      {/* Master Comparison Table */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Complete Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-stone-200 rounded-lg overflow-hidden text-sm">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="text-left p-3">Category</th>
                <th className="text-left p-3">🇮🇷 Iran (2026)</th>
                <th className="text-left p-3">🇮🇶 Iraq (2003)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="p-3 font-medium text-stone-900">Operation Name</td>
                <td className="p-3 text-red-600 font-bold">Operation Epic Fury</td>
                <td className="p-3 text-stone-600">Operation Iraqi Freedom</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Start Date</td>
                <td className="p-3 text-stone-700">February 28, 2026</td>
                <td className="p-3 text-stone-600">March 20, 2003</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">Congressional Authorization</td>
                <td className="p-3 text-red-600 font-bold">None</td>
                <td className="p-3 text-stone-600">Yes — 296-133 (House), 77-23 (Senate)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Coalition Size</td>
                <td className="p-3 text-red-600 font-bold">US + Israel + Gulf states (ad hoc)</td>
                <td className="p-3 text-stone-600">39 nations (&quot;Coalition of the Willing&quot;)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">UN Authorization</td>
                <td className="p-3 text-red-600 font-bold">None</td>
                <td className="p-3 text-stone-600">None (but cited UNSCR 1441)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Ground Troops Deployed</td>
                <td className="p-3 text-red-600 font-bold">0 (air/naval only — so far)</td>
                <td className="p-3 text-stone-600">177,000 (peak: 170,000 US)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">Cost (First Month)</td>
                <td className="p-3 text-red-600 font-bold">$50B+ (est.)</td>
                <td className="p-3 text-stone-600">~$9B</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Cost (Total/Projected)</td>
                <td className="p-3 text-red-600 font-bold">$200B requested; $500B-$3T projected</td>
                <td className="p-3 text-stone-600">$1.1T direct; $3T with long-term costs</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">Daily Burn Rate</td>
                <td className="p-3 text-red-600 font-bold">$1.88B/day</td>
                <td className="p-3 text-stone-600">~$300M/day (peak)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">US Deaths (First Month)</td>
                <td className="p-3 text-red-600 font-bold">15 (13 KIA + 2 non-combat)</td>
                <td className="p-3 text-stone-600">65 KIA</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">US Deaths (Total)</td>
                <td className="p-3 text-red-600 font-bold">15 (ongoing)</td>
                <td className="p-3 text-stone-600">4,431 (over 8 years)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">US Wounded</td>
                <td className="p-3 text-red-600 font-bold">303</td>
                <td className="p-3 text-stone-600">31,994 (total)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">Civilian Deaths (First Month)</td>
                <td className="p-3 text-red-600 font-bold">1,492+ (HRANA)</td>
                <td className="p-3 text-stone-600">~7,186 (Iraq Body Count)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Enemy Country Size</td>
                <td className="p-3 text-red-600 font-bold">636,372 sq mi (4x Iraq)</td>
                <td className="p-3 text-stone-600">169,235 sq mi</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">Enemy Population</td>
                <td className="p-3 text-red-600 font-bold">88.6 million (3x Iraq)</td>
                <td className="p-3 text-stone-600">26.1 million (2003)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Enemy Military Size</td>
                <td className="p-3 text-red-600 font-bold">610,000 active + 350,000 IRGC + Basij</td>
                <td className="p-3 text-stone-600">389,000 active (pre-war)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">Oil Price at Start</td>
                <td className="p-3 text-red-600 font-bold">~$60/barrel</td>
                <td className="p-3 text-stone-600">~$28/barrel</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Oil Price After 1 Month</td>
                <td className="p-3 text-red-600 font-bold">$108+/barrel (+80%)</td>
                <td className="p-3 text-stone-600">$37/barrel (+32%)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">Public Support (Start)</td>
                <td className="p-3 text-red-600 font-bold">~42% (CBS/YouGov)</td>
                <td className="p-3 text-stone-600">72% (Gallup)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Stated Goal</td>
                <td className="p-3 text-red-600 font-bold">&quot;Eliminate nuclear threat&quot;</td>
                <td className="p-3 text-stone-600">&quot;Disarm WMDs, regime change&quot;</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">WMDs Found</td>
                <td className="p-3 text-red-600 font-bold">TBD</td>
                <td className="p-3 text-stone-600">None</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Exit Strategy</td>
                <td className="p-3 text-red-600 font-bold">None stated</td>
                <td className="p-3 text-stone-600">&quot;Mission Accomplished&quot; (41 days in)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">Duration</td>
                <td className="p-3 text-red-600 font-bold">28 days (ongoing)</td>
                <td className="p-3 text-stone-600">8 years, 8 months</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-stone-500 text-xs mt-3">
          Sources: CBO war cost reports; Pentagon press briefings; CSIS analysis; Iraq Body Count; HRANA;
          Gallup/CBS polling; EIA oil price data; IISS Military Balance 2026.
        </p>
      </section>

      {/* The Scale Problem */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Scale Problem: Iran Is Not Iraq
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <h3 className="font-bold text-stone-900 text-lg mb-3">🗺️ Geography</h3>
            <p className="text-stone-600 mb-4">
              Iran is <strong>636,372 square miles</strong> — nearly four times the size of Iraq (169,235 sq mi).
              It&apos;s roughly the size of Alaska. The terrain includes the Zagros and Alborz mountain ranges,
              vast deserts, and 1,500 miles of coastline along the Persian Gulf and Gulf of Oman. Iraq was
              mostly flat desert that coalition forces crossed in 3 weeks. Iran&apos;s terrain is designed by
              nature for defense.
            </p>
            <p className="text-stone-500 text-xs">Source: CIA World Factbook</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <h3 className="font-bold text-stone-900 text-lg mb-3">👥 Population</h3>
            <p className="text-stone-600 mb-4">
              Iran has <strong>88.6 million people</strong> — more than 3x Iraq&apos;s 2003 population of 26.1 million.
              It&apos;s a young, educated, nationalistic population. Even Iranians who oppose the regime have rallied
              around the flag in response to US strikes on civilian infrastructure. The US military&apos;s own
              planning documents estimated a ground occupation of Iran would require <strong>1.6 million troops</strong>.
            </p>
            <p className="text-stone-500 text-xs">Source: UN Population Division; RAND Corporation force-sizing studies</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <h3 className="font-bold text-stone-900 text-lg mb-3">⚔️ Military Capability</h3>
            <p className="text-stone-600 mb-4">
              Saddam&apos;s military in 2003 was a hollowed-out shell after 12 years of sanctions and the 1991 Gulf War.
              Iran&apos;s military is <strong>the largest in the Middle East</strong>: 610,000 active duty, 350,000 IRGC,
              and millions of Basij militia. Iran has 3,000+ ballistic missiles, a sophisticated drone program
              (Shahed series), advanced air defenses (Russian S-300), and proxy forces across the region.
            </p>
            <p className="text-stone-500 text-xs">Source: IISS Military Balance 2026; DIA Iran Military Power report</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <h3 className="font-bold text-stone-900 text-lg mb-3">🌊 The Hormuz Factor</h3>
            <p className="text-stone-600 mb-4">
              Iraq had no ability to disrupt global energy markets. Iran controls the Strait of Hormuz —
              <strong>21 miles wide, carrying 20% of the world&apos;s oil</strong>. Closing Hormuz sent oil from
              $60 to $108+ in weeks. Iraq&apos;s oil impact was a 32% price increase. Iran&apos;s is 80% and climbing.
              This is the fundamental asymmetry that makes Iran categorically different from Iraq.
            </p>
            <p className="text-stone-500 text-xs">Source: EIA; IEA World Energy Outlook; Lloyd&apos;s List shipping data</p>
          </div>
        </div>
      </section>

      {/* Cost Trajectory */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Cost Trajectory: A War on Fast-Forward
        </h2>

        <div className="bg-white border border-stone-200 rounded-lg p-6 mb-6">
          <p className="text-stone-700 mb-4">
            The Iraq War&apos;s first month cost approximately <strong>$9 billion</strong>. The Iran War&apos;s first month
            cost <strong>$50 billion+</strong>. That&apos;s a 5.5x increase in daily spending — and it&apos;s not hard to
            see why:
          </p>
          <ul className="space-y-3 text-stone-600">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1 font-bold">1.</span>
              <span><strong>Precision munitions are expensive.</strong> In 2003, the US used a mix of precision
              and &quot;dumb&quot; bombs. In 2026, virtually every weapon is precision-guided, at 10-50x the cost per unit.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1 font-bold">2.</span>
              <span><strong>Air defense suppression costs a fortune.</strong> Iran&apos;s S-300 systems, indigenous Bavar-373,
              and distributed air defenses require expensive SEAD missions. Iraq&apos;s air defenses collapsed in hours.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1 font-bold">3.</span>
              <span><strong>Missile defense is the ultimate money pit.</strong> Every Iranian ballistic missile costs
              ~$500,000 to build. Every SM-3 interceptor costs $36 million. Iran can fire 70 missiles for the cost
              of one US interceptor. This is the &quot;cost exchange ratio&quot; nightmare.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1 font-bold">4.</span>
              <span><strong>Multi-front war multiplies everything.</strong> The US is simultaneously fighting Iran,
              countering Hezbollah (via Israel), suppressing Houthi Red Sea attacks, and defending Gulf allies.
              Iraq was a single-theater conflict.</span>
            </li>
          </ul>
        </div>

        <div className="bg-red-950 text-white rounded-xl p-6">
          <h3 className="font-bold text-lg mb-3">The Iraq War Took 8 Years to Cost $1.1 Trillion</h3>
          <p className="text-stone-300">
            At the current burn rate of $1.88 billion per day, the Iran War would hit $1.1 trillion in
            <strong className="text-red-400"> 585 days — roughly 19 months</strong>. And that&apos;s without
            ground troops, without an occupation, and without the long-term veterans&apos; care costs that
            doubled the true price of Iraq. If Iran follows the Iraq pattern, the total bill including
            veterans&apos; care and debt interest could reach <strong className="text-red-400">$5-6 trillion</strong>.
          </p>
          <p className="text-stone-500 text-xs mt-3">Source: CBO cost projections; Brown University Costs of War methodology applied to current burn rate</p>
        </div>
      </section>

      {/* The Authorization Gap */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Authorization Gap
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-stone-300 rounded-lg p-6">
            <h3 className="font-bold text-stone-900 text-lg mb-3">🇮🇶 Iraq (2003)</h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>✅ Congressional vote: House 296-133, Senate 77-23</li>
              <li>✅ Bipartisan support (though contested)</li>
              <li>✅ Months of public debate</li>
              <li>✅ Powell UN presentation (Feb 2003)</li>
              <li>✅ 39-nation coalition assembled</li>
              <li>✅ CIA intelligence assessment (flawed, but provided)</li>
              <li>✅ Estimated cost presented to Congress ($50-60B — wildly wrong)</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-red-300 rounded-lg p-6">
            <h3 className="font-bold text-red-600 text-lg mb-3">🇮🇷 Iran (2026)</h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>❌ No congressional vote</li>
              <li>❌ Announced via Truth Social at 2:30 AM</li>
              <li>❌ No public debate</li>
              <li>❌ No intelligence presented to Congress</li>
              <li>❌ No formal coalition</li>
              <li>❌ War Powers Resolution voted down 53-47</li>
              <li>❌ No cost estimate provided before strikes began</li>
            </ul>
          </div>
        </div>

        <p className="text-stone-600 mt-6">
          The Iraq War authorization was deeply flawed — built on false claims about WMDs. But at least there
          <em>was</em> an authorization. At least Congress voted. At least there was a public debate. The Iran War
          skipped all of that. A $200 billion war was launched by one person, announced on social media, in the
          middle of the night, without the constitutionally required approval of Congress.
        </p>
        <p className="text-stone-500 text-xs mt-2">
          Source: Congressional Record; War Powers Resolution of 1973 (50 U.S.C. §§ 1541–1548);
          Senate vote record on S.J.Res. 12 (Kaine-Paul War Powers Resolution)
        </p>
      </section>

      {/* The Oil Shock */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Oil Shock: Then and Now
        </h2>

        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div>
              <div className="text-sm text-stone-500 mb-1">Iraq War (2003)</div>
              <div className="text-2xl font-bold text-stone-900">+32%</div>
              <div className="text-sm text-stone-500">$28 → $37/barrel</div>
            </div>
            <div>
              <div className="text-sm text-stone-500 mb-1">Iran War (2026)</div>
              <div className="text-2xl font-bold text-red-600">+80%</div>
              <div className="text-sm text-stone-500">$60 → $108/barrel</div>
            </div>
            <div>
              <div className="text-sm text-stone-500 mb-1">Difference</div>
              <div className="text-2xl font-bold text-red-600">2.5x worse</div>
              <div className="text-sm text-stone-500">Higher base + bigger spike</div>
            </div>
          </div>

          <p className="text-stone-600">
            Iraq produced 2.5 million barrels per day in 2003 — significant, but the market had Saudi spare
            capacity to compensate. Iran&apos;s closure of the Strait of Hormuz threatens <strong>20% of global
            oil supply</strong> — there is no spare capacity large enough to replace that. The IEA chief called
            it &quot;worse than 1973 and 1979 combined.&quot; Gas prices in California have passed $5/gallon and
            the national average is climbing weekly.
          </p>
          <p className="text-stone-500 text-xs mt-3">Source: EIA; IEA; AAA gas price tracker; OPEC production data</p>
        </div>
      </section>

      {/* Casualties Context */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Casualties in Context
        </h2>

        <p className="text-stone-600 mb-6">
          The Iran War has produced fewer US casualties than Iraq&apos;s first month (15 vs 65 KIA) — largely
          because there are no ground troops. But the civilian toll is devastating, and the war is only 28 days old.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Iranian Civilian Deaths</h3>
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Iran first month: 1,492+ civilians (HRANA), including 210+ children</span>
              <span className="text-red-600 font-bold">1,492+</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-stone-600">Iraq first month: ~7,186 (Iraq Body Count)</span>
              <span className="text-stone-500">7,186</span>
            </div>
            <p className="text-stone-500 text-sm mt-3">
              Lower civilian deaths reflect the air-only campaign — but the Minab school massacre (168 children)
              shows precision weapons don&apos;t prevent atrocities. And Iran&apos;s reporting infrastructure is degraded,
              meaning true numbers are likely much higher.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Displacement</h3>
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Iran: 3.2 million displaced in 28 days</span>
              <span className="text-red-600 font-bold">3.2M</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-stone-600">Iraq: ~1 million in first month (UNHCR)</span>
              <span className="text-stone-500">1M</span>
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Infrastructure Destroyed</h3>
            <p className="text-stone-600">
              In 28 days, US strikes have damaged or destroyed <strong>70,000 homes, 300 health facilities,
              600 schools, and 120 cultural sites</strong> in Iran. For comparison, Iraq&apos;s &quot;Shock and Awe&quot;
              campaign — widely criticized at the time — struck approximately 1,700 targets in the first month.
              Operation Epic Fury has struck <strong>10,000+</strong>.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: HRANA damage reports; Iraq Body Count; CENTCOM target data</p>
          </div>
        </div>
      </section>

      {/* Public Opinion */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Public Opinion: A Tale of Two Wars
        </h2>

        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-stone-900 mb-3">Iraq (March 2003)</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-600">Support for war</span>
                  <span className="font-bold text-stone-900">72%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-3">
                  <div className="bg-stone-600 h-3 rounded-full" style={{ width: '72%' }}></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Oppose</span>
                  <span className="font-bold text-stone-900">25%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-3">
                  <div className="bg-stone-400 h-3 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              <p className="text-stone-500 text-xs mt-2">Source: Gallup, March 2003</p>
            </div>

            <div>
              <h3 className="font-bold text-red-600 mb-3">Iran (March 2026)</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-600">Support for war</span>
                  <span className="font-bold text-red-600">42%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-3">
                  <div className="bg-red-600 h-3 rounded-full" style={{ width: '42%' }}></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Oppose</span>
                  <span className="font-bold text-red-600">51%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-3">
                  <div className="bg-red-400 h-3 rounded-full" style={{ width: '51%' }}></div>
                </div>
              </div>
              <p className="text-stone-500 text-xs mt-2">Source: CBS News/YouGov, March 2026</p>
            </div>
          </div>

          <p className="text-stone-600 mt-6">
            The Iraq War started with strong public support that eroded over years. The Iran War started
            with majority opposition. A CBS poll found that most Americans consider it a &quot;war of choice&quot;
            rather than a &quot;war of necessity.&quot; Iraq support didn&apos;t drop below 50% until late 2004 — Iran
            started there.
          </p>
        </div>
      </section>

      {/* Lessons Learned (Or Not) */}
      <section className="my-12">
        <div className="bg-stone-100 border-l-4 border-red-600 rounded-r-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">
            Did We Learn Anything From Iraq?
          </h2>
          <p className="text-stone-700 mb-4">
            The Iraq War taught the American public several hard lessons: don&apos;t trust intelligence claims
            without verification. Don&apos;t start wars without exit strategies. Don&apos;t underestimate the cost.
            Don&apos;t assume the enemy will collapse quickly. Don&apos;t ignore regional consequences.
          </p>
          <p className="text-stone-700">
            The Iran War violates every single one of these lessons. No verified intelligence was presented
            before strikes. There is no exit strategy. The cost was not estimated. Iran has not collapsed.
            And the regional consequences — Hormuz closure, oil shock, multi-front war — are worse than
            anything Iraq produced. The question is no longer whether we learned from Iraq. It&apos;s whether
            we&apos;re capable of learning at all.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/iran-war-cost-breakdown" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran War Cost Breakdown →</div>
            <div className="text-stone-500 text-sm">Day-by-day spending tracker for Operation Epic Fury</div>
          </Link>
          <Link href="/analysis/iran-war-casualties" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran War Casualties →</div>
            <div className="text-stone-500 text-sm">Complete death toll tracker across all countries</div>
          </Link>
          <Link href="/analysis/hormuz-economic-impact" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Strait of Hormuz Crisis →</div>
            <div className="text-stone-500 text-sm">How Hormuz closure is reshaping the global economy</div>
          </Link>
          <Link href="/analysis/iran-war-no-authorization" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">The War Congress Never Authorized →</div>
            <div className="text-stone-500 text-sm">Constitutional crisis of Operation Epic Fury</div>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
