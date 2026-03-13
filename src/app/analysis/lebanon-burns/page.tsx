import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'While Lebanon Burns: America\'s $22 Billion Blank Check | WarCosts',
  description: '$21.7B in US military aid funded the destruction of a country already in economic collapse. 4,047+ killed. $14B in damage. No American troops. No American security interest. Just American weapons.',
  openGraph: {
    title: 'While Lebanon Burns: America\'s $22 Billion Blank Check',
    description: 'US taxpayers funded $14 billion in destruction to a country with an $18 billion GDP. The Lebanon front of America\'s proxy wars.',
    url: 'https://www.warcosts.org/analysis/lebanon-burns',
  },
}

export default function LebanonBurnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'While Lebanon Burns' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● ACTIVE CONFLICT</span>
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
          <span className="text-xs px-2 py-1 rounded-full bg-stone-700 text-stone-300">Updated Mar 12, 2026</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          While Lebanon Burns
        </h1>
        <p className="text-xl text-stone-300 mb-4">America&apos;s $22 Billion Blank Check</p>
        <p className="text-stone-400 text-lg mb-4">
          No American soldier set foot in Lebanon. No American life was at stake. No American security interest
          was threatened. But {fmtMoney(21.7e9)} in American military aid to Israel since October 2023
          funded the destruction of a country that was already on its knees — a country with a GDP of just
          {fmtMoney(18e9)}. The World Bank says the damage totals {fmtMoney(14e9)}. That&apos;s 78% of the
          entire economy, destroyed with American weapons.
        </p>
        <p className="text-stone-400 text-lg">
          4,047+ killed in the first phase. 634+ more in 2026. 816,000 displaced. White phosphorus on
          residential areas. Cluster munitions. UNIFIL peacekeepers attacked. A Maronite priest killed in a
          double-tap strike. And the American taxpayer paid for every bomb.
        </p>
      </div>

      <ShareButtons title="While Lebanon Burns: America's $22 Billion Blank Check" />

      {/* Quote */}
      <blockquote className="border-l-4 border-red-700 pl-6 my-8 text-xl text-stone-600 italic">
        &ldquo;You have funded the destruction of a country that was already on its knees.
        American weapons, American money, Lebanese blood.&rdquo;
        <span className="block text-sm text-stone-500 mt-2 not-italic">— Lebanese civil society organizations&apos; open letter to the US Congress, November 2024</span>
      </blockquote>

      {/* Cost comparison cards */}
      <div className="grid md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">US Military Aid to Israel</p>
          <p className="text-xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(21.7e9)}</p>
          <p className="text-xs text-stone-500">Since Oct 7, 2023</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Damage to Lebanon</p>
          <p className="text-xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(14e9)}</p>
          <p className="text-xs text-stone-500">World Bank RDNA 2025</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Lebanon&apos;s GDP</p>
          <p className="text-xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(18e9)}</p>
          <p className="text-xs text-stone-500">78% destroyed</p>
        </div>
        <div className="bg-red-50 border-red-200 rounded-lg p-5 border text-center">
          <p className="text-sm text-red-700 mb-1">AIPAC Spending</p>
          <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$221M</p>
          <p className="text-xs text-red-600">Political campaigns since 2021</p>
        </div>
      </div>

      {/* Section 1: The Price Tag */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Price Tag</h2>
        <div className="space-y-4 text-stone-700">
          <p>
            Since October 7, 2023, the United States has provided <strong>{fmtMoney(21.7e9)}+</strong> in
            military aid to Israel, according to Brown University&apos;s Costs of War Project and the Quincy
            Institute. This includes the <strong>{fmtMoney(8.7e9)} supplemental</strong> approved in April 2024
            that funded Iron Dome replenishment, David&apos;s Sling interceptors, and the precision munitions
            used to devastate Lebanon.
          </p>
          <p>
            The World Bank&apos;s 2025 Rapid Damage and Needs Assessment put Lebanon&apos;s losses at
            <strong> {fmtMoney(14e9)}</strong> — {fmtMoney(6.8e9)} in physical destruction (housing,
            infrastructure, agriculture, industry) and {fmtMoney(7.2e9)} in economic losses (tourism collapse,
            trade disruption, displacement costs).
          </p>
          <p>
            To put this in perspective: Lebanon&apos;s entire GDP is approximately {fmtMoney(18e9)}. American
            taxpayers funded the equivalent of <strong>78% of the country&apos;s economic output</strong> in
            destruction. This is a country of 5.5 million people — roughly the population of Minnesota —
            that posed zero direct threat to the United States.
          </p>
        </div>
      </div>

      {/* Section 2: Timeline */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Timeline of Escalation</h2>
        <div className="space-y-4">
          {[
            { date: 'Oct 8, 2023', event: 'Hezbollah opens cross-border solidarity front with Gaza. Tit-for-tat exchanges begin. Tens of thousands displaced on both sides.' },
            { date: 'Apr 2024', event: 'US Congress approves $8.7B supplemental for Israel — Iron Dome, David\'s Sling, precision munitions. No debate on whether these weapons should be used in Lebanon.' },
            { date: 'Sep 17-18, 2024', event: 'Pager and walkie-talkie bombings: thousands of communication devices rigged with explosives detonate simultaneously across Lebanon. 42 killed, 3,500+ injured — the most audacious intelligence operation in modern history.' },
            { date: 'Sep 27, 2024', event: 'Hassan Nasrallah assassinated in massive Israeli airstrike on Beirut\'s Dahiyeh suburbs. An entire city block leveled. 32 years of Hezbollah leadership ended in seconds.' },
            { date: 'Oct 1, 2024', event: 'Israeli ground invasion begins. White phosphorus on residential areas. UNIFIL positions attacked. 7+ journalists killed. 1.2 million displaced. Entire villages destroyed.' },
            { date: 'Nov 27, 2024', event: 'Ceasefire reached. By this point: 4,047+ killed, 16,638 injured in Lebanon.' },
            { date: '2025', event: 'Daily Israeli ceasefire violations — reconnaissance flights, ground incursions, targeted killings. Southern Lebanon remains effectively occupied. Reconstruction stalled.' },
            { date: 'Mar 2, 2026', event: 'Hezbollah retaliates for Khamenei killing, also citing 15 months of ceasefire violations. War resumes as part of broader Iran conflict.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="text-sm font-mono text-red-600 shrink-0 w-32">{item.date}</div>
              <div className="text-stone-700">{item.event}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: The 2024 Invasion */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The 2024 Invasion</h2>
        <div className="space-y-4 text-stone-700">
          <p>
            On October 1, 2024, Israeli ground forces crossed into southern Lebanon. What followed was
            a devastating military campaign that treated the entire region south of the Litani River as a
            free-fire zone.
          </p>
          <p>
            <strong>White phosphorus</strong> — which burns at 1,500°F and cannot be extinguished with water —
            was deployed on residential areas. <strong>UNIFIL peacekeeping positions</strong> were attacked,
            injuring UN peacekeepers from multiple countries and creating diplomatic crises with European allies.
            At least <strong>7 journalists</strong> were killed covering the conflict. <strong>1.2 million
            people</strong> — more than a fifth of Lebanon&apos;s population — were displaced.
          </p>
          <p>
            Entire villages in south Lebanon were reduced to rubble. Agricultural land was destroyed.
            Infrastructure that had survived the 2006 war was obliterated. By the November ceasefire,
            Lebanon had lost 4,047 lives and sustained injuries to 16,638 more — all within 8 weeks.
          </p>
          <p>
            Every bomb was American-made. Every missile was American-funded. Every dollar came from
            American taxpayers who were never asked whether their money should be used to invade a
            country that posed no threat to the United States.
          </p>
        </div>
      </div>

      {/* Section 4: 2026 */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">2026: The War Nobody Wanted</h2>
        <div className="space-y-4 text-stone-700">
          <p>
            When the broader Iran war erupted on February 28, 2026, Hezbollah launched retaliatory strikes
            into Israel — citing both the assassination of Khamenei and <strong>15 months of daily Israeli
            ceasefire violations</strong> since November 2024.
          </p>
          <p>
            The Lebanese government tried desperately to stay out of it. They <strong>banned Hezbollah
            military activities</strong>. They <strong>arrested 12 Hezbollah members</strong>. They
            <strong> expelled 150+ Iranian nationals</strong>. They did everything a sovereign government
            could do to prevent their country from being dragged into another war.
          </p>
          <p>
            <strong>Israel struck anyway.</strong>
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">💥</span> <strong>Beirut residential areas</strong> — strikes on populated neighborhoods</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">💥</span> <strong>Nabi Chit</strong> — 41 killed in a strike searching for Ron Arad, an Israeli pilot missing since 1986</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">💥</span> <strong>Ramada hotel, Beirut</strong> — 5 IRGC Quds Force commanders killed</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">💥</span> <strong>Cluster munitions</strong> — coordinated with the broader Iran campaign</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">💥</span> <strong>White phosphorus on Yohmor</strong> — residential village</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">💥</span> <strong>3 UNIFIL peacekeepers injured</strong> — attacks on international forces</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">💥</span> <strong>Father Pierre al-Rahi</strong> — Maronite priest killed in double-tap strike on Al-Qlayaa</li>
          </ul>
          <p className="mt-4">
            Israel claimed 200+ Hezbollah fighters killed. The full toll: <strong>634 killed, 1,586 injured,
            816,000 displaced</strong> — in the 2026 phase alone.
          </p>
        </div>
      </div>

      {/* Section 5: Lebanon's Collapse */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Lebanon&apos;s Collapse</h2>
        <div className="space-y-4 text-stone-700">
          <p>
            Lebanon was already a failed state before the first bomb fell.
          </p>
          <p>
            In <strong>August 2020</strong>, the Beirut port explosion killed 218 people, injured 7,000, and
            destroyed half the capital&apos;s infrastructure — the largest non-nuclear explosion in modern history.
            The Lebanese government did nothing. Nobody was held accountable.
          </p>
          <p>
            The <strong>banking system collapsed</strong>, wiping out the savings of an entire nation. Depositors
            lost access to $100+ billion in savings. The <strong>currency crashed 90%</strong> — the Lebanese pound
            went from 1,500 to 90,000+ per dollar. Hyperinflation destroyed purchasing power. The middle class
            was annihilated overnight.
          </p>
          <p>
            <strong>GDP contracted 5.7% in 2024</strong> — on top of years of prior contraction. Unemployment
            soared. Electricity was available for a few hours per day. Hospitals ran on generators. Medicine
            was unavailable.
          </p>
          <p>
            Into this — a country already on life support — Israel&apos;s US-funded military campaign added
            <strong> {fmtMoney(14e9)} in new damage</strong>. That&apos;s not just destruction. That&apos;s
            a death sentence for a generation of Lebanese who will grow up in ruins, with no economy, no
            infrastructure, and no hope — courtesy of the American taxpayer.
          </p>
        </div>
      </div>

      {/* Section 6: The US Connection */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The US Connection</h2>
        <div className="space-y-4 text-stone-300">
          <p>
            No American troops were directly involved in Lebanon. But the American role was decisive:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-red-500 shrink-0 font-bold">$21.7B</span>
              <span>in military aid to Israel since Oct 2023 — the weapons that made the invasion possible (Brown University Costs of War)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 shrink-0 font-bold">$8.7B</span>
              <span>supplemental approved April 2024 — Iron Dome, David&apos;s Sling, precision munitions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 shrink-0 font-bold">VETOES</span>
              <span>US vetoed UN Security Council resolutions calling for ceasefire in Lebanon</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 shrink-0 font-bold">INTEL</span>
              <span>US provided intelligence and diplomatic cover throughout the campaign</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 shrink-0 font-bold">$221M</span>
              <span>AIPAC spending on US political campaigns since 2021 — ensuring no politician questioned the arrangement</span>
            </li>
          </ul>
          <p className="mt-4">
            The US didn&apos;t pull the trigger. But it bought the gun, loaded the magazine, pointed at the
            target, and blocked anyone who tried to intervene. In any legal framework, that makes you an
            accomplice.
          </p>
        </div>
      </div>

      {/* Section 7: Civilian Cost */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">The Civilian Cost</h2>
        <div className="space-y-4 text-stone-700">
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white rounded-lg p-4 text-center border border-red-200">
              <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">4,047+</p>
              <p className="text-sm text-stone-500">Killed Oct 2023–Nov 2024</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-red-200">
              <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">634+</p>
              <p className="text-sm text-stone-500">Killed in 2026 phase</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-red-200">
              <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">816,000</p>
              <p className="text-sm text-stone-500">Displaced in 2026 alone</p>
            </div>
          </div>
          <p>
            The numbers tell part of the story. The names tell the rest.
          </p>
          <p>
            <strong>Father Pierre al-Rahi</strong>, a Maronite Christian priest, was killed in a double-tap
            Israeli strike on Al-Qlayaa. The first strike hit. Then, when rescuers arrived, a second strike
            killed them too. A priest — in a Christian village — killed by weapons paid for by a country
            that claims to champion religious freedom.
          </p>
          <p>
            White phosphorus was used on residential areas in southern Lebanon and on the village of
            <strong> Yohmor</strong>. Schools were struck. Hospitals were damaged. Media offices were targeted.
            Seven or more journalists were killed covering the conflict — the deadliest press toll in Lebanon
            since the civil war.
          </p>
          <p>
            The Lebanese Health Ministry documented <strong>16,638 injuries</strong> in the first phase alone.
            In the 2026 phase: <strong>1,586 more injured</strong>. These are people with burns from
            white phosphorus that don&apos;t heal, with shrapnel wounds from cluster munitions, with
            crushed limbs from collapsed buildings — treated in hospitals that barely have electricity.
          </p>
        </div>
      </div>

      {/* Section 8: The Pattern */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Pattern</h2>
        <div className="space-y-4 text-stone-300">
          <p>
            Lebanon fits the pattern perfectly. It&apos;s the same pattern WarCosts documents across every
            American conflict:
          </p>
          <ul className="space-y-3 ml-4">
            <li><strong className="text-white">The US enables.</strong> Money, weapons, intelligence, diplomatic cover. Always enough to destroy, never enough to rebuild.</li>
            <li><strong className="text-white">Civilians pay.</strong> 4,681+ dead. 18,224+ injured. 2 million+ displaced. Zero American casualties. The ratio tells the story.</li>
            <li><strong className="text-white">No accountability.</strong> White phosphorus on residential areas. Cluster munitions. Attacks on UN peacekeepers. Attacks on journalists. No investigation. No consequences.</li>
            <li><strong className="text-white">No exit strategy.</strong> The ceasefire was violated daily for 15 months. The 2026 resumption was predictable. Nobody planned for it.</li>
            <li><strong className="text-white">Mission creep.</strong> From &ldquo;self-defense&rdquo; to invasion to regime decapitation to regional war. The Lebanon front went from cross-border skirmishes to ground invasion to cluster bombs and white phosphorus in 12 months.</li>
            <li><strong className="text-white">Someone profits.</strong> Defense contractors, weapons manufacturers, and AIPAC — which spent $221M to ensure the money kept flowing. The American taxpayer pays. Lebanese civilians die.</li>
          </ul>
          <p className="mt-4">
            This is what a proxy war looks like. Someone else fights. Someone else dies. And the American
            taxpayer pays the bill — {fmtMoney(21.7e9)} and counting — for a war that serves no American
            interest, protects no American citizen, and makes no American safer.
          </p>
        </div>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources</h2>
        <p className="text-stone-500 text-sm mb-3">All facts sourced from mainstream outlets and institutional reports:</p>
        <ul className="text-sm text-stone-600 space-y-1 columns-1 md:columns-2">
          <li>Brown University Costs of War Project — US military aid to Israel ($21.7B+)</li>
          <li>Quincy Institute — Military aid tracking</li>
          <li>World Bank RDNA 2025 — Lebanon damage assessment ($14B)</li>
          <li>Lebanese Health Ministry — Casualty figures (4,047 killed, 16,638 injured)</li>
          <li>FEC filings via AP — AIPAC spending ($221M)</li>
          <li>Congressional Research Service — Supplemental appropriations ($8.7B)</li>
          <li>The Guardian — Invasion timeline, white phosphorus reports</li>
          <li>BBC — Nasrallah assassination, pager bombings</li>
          <li>Al Jazeera — 2026 resumption, civilian casualties</li>
          <li>Reuters — Ceasefire violations, UNIFIL attacks</li>
          <li>Human Rights Watch — White phosphorus documentation</li>
          <li>Committee to Protect Journalists — Journalist deaths</li>
          <li>UNHCR — Displacement figures</li>
        </ul>
      </div>

      {/* Cross-links */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/analysis/iran-2026" className="bg-red-50 rounded-lg border border-red-200 p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 2026: The Full Story →</h3>
          <p className="text-stone-500 text-sm">The broader war that reignited the Lebanon front</p>
        </Link>
        <Link href="/analysis/iran-regional-war" className="bg-red-50 rounded-lg border border-red-200 p-4 hover:shadow-md transition">
          <h3 className="font-semibold">12+ Countries, 13 Days →</h3>
          <p className="text-stone-500 text-sm">How the Iran war became a regional catastrophe</p>
        </Link>
        <Link href="/analysis/israel-lobby" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Israel Lobby →</h3>
          <p className="text-stone-500 text-sm">$310B+ in aid, $221M in lobbying, wars fought on their behalf</p>
        </Link>
        <Link href="/analysis/cost-of-iran" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">What Will Iran Cost? →</h3>
          <p className="text-stone-500 text-sm">Projecting the price of Operation Epic Fury</p>
        </Link>
        <Link href="/analysis/human-cost" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Human Cost →</h3>
          <p className="text-stone-500 text-sm">Beyond statistics: the lives destroyed by war</p>
        </Link>
        <Link href="/conflicts/lebanon-hezbollah-2023" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Lebanon Conflict — Raw Data →</h3>
          <p className="text-stone-500 text-sm">Costs, casualties, key events timeline</p>
        </Link>
      </div>

      <RelatedArticles articles={[
        { slug: 'iran-2026', title: 'Iran 2026: Whose War Is This?', desc: 'The broader conflict that reignited Lebanon.' },
        { slug: 'iran-regional-war', title: '12+ Countries, 13 Days', desc: 'How Iran became a regional war.' },
        { slug: 'israel-lobby', title: 'The Israel Lobby', desc: '$310B in aid. $221M in lobbying.' },
        { slug: 'human-cost', title: 'The Human Cost', desc: 'The lives destroyed by war.' },
      ]} />

      <BackToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'While Lebanon Burns: America\'s $22 Billion Blank Check',
            description: '$21.7B in US military aid funded the destruction of Lebanon. 4,047+ killed. $14B in damage. No American troops. No American security interest.',
            datePublished: '2026-03-12',
            dateModified: '2026-03-12',
            publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            mainEntityOfPage: 'https://www.warcosts.org/analysis/lebanon-burns',
          }),
        }}
      />
    </div>
  )
}
