import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Lebanon Under Fire Again: The 2026 War Nobody Asked For | WarCosts',
  description: 'Israel escalates against Hezbollah starting March 2, 2026, as part of the wider Iran conflict. 1,100+ killed in Lebanon, 3,100+ wounded, 1M+ displaced. Another open-ended commitment with no exit strategy.',
  openGraph: {
    title: 'Lebanon Under Fire Again: The 2026 War Nobody Asked For',
    description: '1,100+ killed. 3,100+ wounded. 1M+ displaced. Israel\'s third Lebanon war in 20 years — and American taxpayers are paying for it.',
    url: 'https://www.warcosts.org/analysis/lebanon-war-2026',
  },
}

const timeline2026 = [
  { date: 'Feb 28', event: 'US and Israel launch Operation Epic Fury against Iran. Supreme Leader Khamenei killed in decapitation strike. Iran retaliates across the region.' },
  { date: 'Mar 2', event: 'Hezbollah launches attacks on Israel in retaliation for Khamenei killing, citing 15 months of Israeli ceasefire violations. Israel responds with massive strikes — 52 killed in Lebanon on the first day, 30,000+ displaced immediately.' },
  { date: 'Mar 2', event: 'Lebanese government bans Hezbollah military activities, trying to avoid being dragged in. Israel strikes anyway.' },
  { date: 'Mar 3', event: 'Netanyahu and Katz approve Israeli GROUND INCURSION into southern Lebanon. Israel issues evacuation orders for 59 areas. IDF says "all options on table."' },
  { date: 'Mar 5', event: 'IDF strikes Beirut\'s southern suburbs (Dahiyeh) and Beqaa Valley. 80,000+ displaced. IDF chief says forces will "push deeper into Lebanon."' },
  { date: 'Mar 7', event: 'Father Pierre al-Rahi, a Maronite priest, killed in a double-tap strike on Al-Qlayaa. 3 UNIFIL peacekeepers injured.' },
  { date: 'Mar 10', event: 'Nabi Chit strike kills 41 — Israel was reportedly searching for Ron Arad, a pilot missing since 1986. Ramada hotel, Beirut: 5 IRGC Quds Force commanders killed.' },
  { date: 'Mar 12', event: 'Lebanon death toll hits 687 killed (98 children). 700,000-750,000 displaced. White phosphorus deployed on Yohmor, a residential village.' },
  { date: 'Mar 13', event: 'Israeli strike on village of Arki near Sidon kills 9 including 5 children. Lebanon: 687+ killed, 700,000-750,000 displaced.' },
  { date: 'Mar 16', event: 'IDF announces "targeted ground operation" to EXPAND buffer zone in southern Lebanon — pushing deeper despite 850+ killed. Turkey condemns Israel\'s "genocidal" ground operation.' },
  { date: 'Mar 17', event: 'Lebanon: 886+ killed (67 women, 111 children), 2,141 wounded, 1 MILLION+ displaced. German Chancellor Merz calls Israel\'s ground offensive an "error."' },
  { date: 'Mar 18', event: 'Israel strikes central Beirut (Zuqaq al-Blat and Basta areas) WITHOUT WARNING — at least 10 killed, 27 injured. Health officials: 900+ killed.' },
  { date: 'Mar 19', event: 'Lebanese Health Ministry: 1,001 killed since Mar 2 (79 women, 118 children, 40 healthcare workers), 2,584 wounded. Lebanon crosses 1,000 dead.' },
  { date: 'Mar 22', event: 'IDF kills 4 Hezbollah fighters overnight. Fresh evacuation warnings for 7 areas of southern Beirut. Clashes in strategic town of Khiam near Israeli border.' },
  { date: 'Mar 24', event: 'Lebanon EXPELS Iranian ambassador, recalls own ambassador from Tehran. Defense Minister Katz announces Israel will control "security zone" to the Litani River — 30km deep.' },
  { date: 'Mar 25', event: 'Lebanon: 1,072+ killed, 2,966 wounded, 1M+ displaced (Al Jazeera).' },
  { date: 'Mar 26', event: 'Israeli strikes kill at least 5 in Lebanon. Lebanon: 1,094 killed (121 children), 3,119 wounded, 1M+ displaced.' },
  { date: 'Mar 27', event: 'Israel issues new evacuation orders for southern Beirut suburbs. Lebanon: 1,110+ killed.' },
]

const historicalComparison = [
  { war: '2006 Lebanon War', duration: '34 days', lebaneseKilled: '~1,191', displaced: '~1,000,000', israeliKilled: '165', usCost: '$230M in emergency aid to Israel' },
  { war: '2023-2024 Escalation', duration: '13 months', lebaneseKilled: '4,047+', displaced: '1,200,000', israeliKilled: '~80', usCost: '$21.7B in military aid to Israel' },
  { war: '2026 (ongoing)', duration: '27+ days', lebaneseKilled: '1,110+', displaced: '1,000,000+', israeliKilled: '19', usCost: 'Part of $200B Pentagon war request' },
]

export default function LebanonWar2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Lebanon Under Fire Again: The 2026 War Nobody Asked For',
        description: 'Israel escalates against Hezbollah starting March 2, 2026. 1,100+ killed, 3,100+ wounded, 1M+ displaced.',
        url: 'https://www.warcosts.org/analysis/lebanon-war-2026',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-29',
        dateModified: '2026-03-29'
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Lebanon War 2026' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● ACTIVE CONFLICT</span>
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
          <span className="text-xs px-2 py-1 rounded-full bg-stone-700 text-stone-300">Updated Mar 29, 2026 — Day 30</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Lebanon Under Fire Again
        </h1>
        <p className="text-xl text-stone-300 mb-4">The 2026 War Nobody Asked For</p>
        <p className="text-stone-400 text-lg mb-4">
          For the third time in 20 years, Israel has launched a full-scale military operation against Lebanon.
          This time it&apos;s part of the broader Iran war — Operation Epic Fury — and the Lebanese people
          are once again caught in the crossfire between Hezbollah and the Israeli military. In just 27 days,
          <strong className="text-red-400"> 1,110+ Lebanese have been killed</strong>, including 121 children.
          Over <strong className="text-red-400">1 million people</strong> have been displaced. And the
          Lebanese government — which tried everything in its power to stay out of this war — has been
          powerless to stop it.
        </p>
        <p className="text-stone-400 text-lg">
          The question that nobody in Washington will answer: what is the American exit strategy
          for Lebanon? There isn&apos;t one. There never is.
        </p>
      </div>

      <ShareButtons title="Lebanon Under Fire Again: The 2026 War Nobody Asked For" />

      {/* Opening Quote */}
      <blockquote className="border-l-4 border-red-700 pl-6 my-8 text-xl text-stone-600 italic">
        &ldquo;We did everything we could. We banned Hezbollah&apos;s military activities. We arrested their members.
        We expelled Iranian nationals. And they bombed us anyway.&rdquo;
        <span className="block text-sm text-stone-500 mt-2 not-italic">— Lebanese government official, March 2026</span>
      </blockquote>

      {/* Key Numbers */}
      <div className="grid md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Killed in Lebanon</p>
          <p className="text-2xl font-bold text-[#dc2626] font-[family-name:var(--font-heading)]">1,110+</p>
          <p className="text-xs text-stone-500">121 children</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Wounded</p>
          <p className="text-2xl font-bold text-[#dc2626] font-[family-name:var(--font-heading)]">3,119+</p>
          <p className="text-xs text-stone-500">Since Mar 2, 2026</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Displaced</p>
          <p className="text-2xl font-bold text-[#dc2626] font-[family-name:var(--font-heading)]">1M+</p>
          <p className="text-xs text-stone-500">~20% of population</p>
        </div>
        <div className="bg-red-50 border-red-200 rounded-lg p-5 border text-center">
          <p className="text-sm text-red-700 mb-1">Hezbollah Fighters Killed</p>
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">400+</p>
          <p className="text-xs text-red-600">Reuters estimate</p>
        </div>
      </div>

      {/* Section 1: How It Started */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How Lebanon Got Dragged In — Again</h2>
        <div className="space-y-4 text-stone-700">
          <p>
            Lebanon didn&apos;t start this war. Lebanon didn&apos;t want this war. The Lebanese government did
            everything a sovereign nation could reasonably do to avoid being drawn into the broader Iran
            conflict — and it made no difference whatsoever.
          </p>
          <p>
            When the US and Israel launched Operation Epic Fury against Iran on February 28, 2026, the Lebanese
            government immediately recognized the danger. Hezbollah — which operates as both a political party
            and a military organization within Lebanon — had deep ties to Iran and would inevitably be drawn into
            any regional conflict.
          </p>
          <p>
            The government acted swiftly. They <strong>banned Hezbollah military activities</strong>. They
            <strong> arrested 12 Hezbollah members</strong> attempting to launch attacks. They <strong>expelled
            150+ Iranian nationals</strong> suspected of IRGC ties. They recalled their ambassador from Tehran.
            By March 24, they had <strong>expelled the Iranian ambassador</strong> himself — the most dramatic
            diplomatic break between Lebanon and Iran in modern history.
          </p>
          <p>
            None of it mattered. On March 2, Hezbollah launched retaliatory strikes into Israel — citing both the
            assassination of Supreme Leader Khamenei and <strong>15 months of daily Israeli ceasefire violations</strong>
            {' '}since the November 2024 agreement. Israel responded with overwhelming force, killing 52 people in
            Lebanon on the first day alone and displacing 30,000+.
          </p>
          <p>
            The pattern is grimly familiar. In 2006, Hezbollah&apos;s cross-border raid killed 8 Israeli soldiers and
            captured 2 more. Israel responded with a 34-day war that killed 1,191 Lebanese people and displaced a
            million. In 2023-2024, Hezbollah&apos;s solidarity front with Gaza led to a 13-month escalation that
            killed 4,047 Lebanese and displaced 1.2 million. Now, in 2026, the same cycle repeats — and the same
            people pay the price.
          </p>
        </div>
      </div>

      {/* Section 2: Timeline */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Timeline: 27 Days of Destruction</h2>
        <div className="space-y-3">
          {timeline2026.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="text-sm font-mono text-red-600 shrink-0 w-20">{item.date}</div>
              <div className="text-stone-700 text-sm">{item.event}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: The Civilian Cost */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">
          The Civilian Cost
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The numbers tell a devastating story. According to the Lebanese Health Ministry and Al Jazeera&apos;s
            tracker, as of Day 27 of the conflict:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">•</span>
              <strong>1,110+ killed</strong> — including 121 children, 67+ women, and 40+ healthcare workers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">•</span>
              <strong>3,119+ wounded</strong> — overwhelming Lebanon&apos;s already-collapsed healthcare system
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">•</span>
              <strong>1,000,000+ displaced</strong> — roughly 20% of Lebanon&apos;s entire population
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">•</span>
              <strong>Bridges demolished</strong> — IDF systematically destroying infrastructure in the south
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">•</span>
              <strong>Homes leveled</strong> — Katz ordered accelerated demolition of Lebanese homes near the border
            </li>
          </ul>
          <p>
            Israel claims 400+ Hezbollah fighters have been killed (per Reuters). Even accepting this number at
            face value, it means the majority of casualties are <strong>civilians</strong>. The ratio — roughly
            2 civilians for every 1 combatant — is consistent with the 2024 phase and with urban warfare patterns
            that international law experts have called disproportionate.
          </p>
          <p>
            The strikes have been indiscriminate in their geographic scope. Beirut&apos;s southern suburbs (Dahiyeh),
            central Beirut neighborhoods like Zuqaq al-Blat and Basta, the Beqaa Valley, southern Lebanon villages —
            nowhere has been safe. Strikes on central Beirut have come <strong>without warning</strong>, a violation
            of international humanitarian law that has drawn condemnation from the UN and European governments.
          </p>
        </div>
      </div>

      {/* Section 4: The Permanent Occupation */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The &ldquo;Security Zone&rdquo;: Permanent Occupation by Another Name</h2>
        <div className="space-y-4 text-stone-700">
          <p>
            On March 24, Israeli Defense Minister Israel Katz announced that Israel would control a
            &ldquo;security zone&rdquo; in southern Lebanon <strong>up to the Litani River</strong> —
            approximately 30 kilometers deep — until the Hezbollah threat is &ldquo;removed.&rdquo;
          </p>
          <p>
            This is not a new idea. Israel maintained a &ldquo;security zone&rdquo; in southern Lebanon
            from 1985 to 2000 — a 15-year occupation that killed thousands of Lebanese, fueled Hezbollah&apos;s
            rise, and ultimately ended in an Israeli withdrawal that was widely regarded as a strategic defeat.
            The occupation didn&apos;t eliminate Hezbollah — it <strong>created</strong> Hezbollah as we know it.
          </p>
          <p>
            Now Israel plans to do the same thing again. Hundreds of thousands of Lebanese civilians living
            south of the Litani River will be blocked from returning to their homes. Their houses are being
            systematically demolished. Their bridges are being destroyed. Their land is being rendered
            uninhabitable.
          </p>
          <p>
            France has criticized the plan. The UN has condemned it. Even Germany&apos;s Chancellor Merz —
            typically a reliable Israel ally — called the ground offensive an &ldquo;error.&rdquo; Turkey
            called it &ldquo;genocidal.&rdquo;
          </p>
          <p>
            The question Americans should ask: <strong>how does this end?</strong> The 1985-2000 security zone
            lasted 15 years and created the very enemy Israel is now fighting. What makes anyone believe that
            a 2026 security zone will produce a different result?
          </p>
        </div>
      </div>

      {/* Section 5: Historical Comparison */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Three Wars, Same Story</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300">
                <th className="text-left py-3 pr-4 font-semibold text-stone-600">Conflict</th>
                <th className="text-left py-3 pr-4 font-semibold text-stone-600">Duration</th>
                <th className="text-left py-3 pr-4 font-semibold text-stone-600">Lebanese Killed</th>
                <th className="text-left py-3 pr-4 font-semibold text-stone-600">Displaced</th>
                <th className="text-left py-3 pr-4 font-semibold text-stone-600">US Cost</th>
              </tr>
            </thead>
            <tbody>
              {historicalComparison.map((row, i) => (
                <tr key={i} className="border-b border-stone-200">
                  <td className="py-3 pr-4 font-medium">{row.war}</td>
                  <td className="py-3 pr-4">{row.duration}</td>
                  <td className="py-3 pr-4 text-[#dc2626] font-bold">{row.lebaneseKilled}</td>
                  <td className="py-3 pr-4">{row.displaced}</td>
                  <td className="py-3 pr-4 text-sm">{row.usCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 space-y-4 text-stone-700">
          <p>
            The pattern is unmistakable. Every 8-10 years, Israel launches a major military operation against
            Lebanon. Each one displaces a million people. Each one kills over a thousand. Each one is supposed
            to be the war that finally eliminates Hezbollah. And each one creates the conditions for the next one.
          </p>
          <p>
            <strong>2006:</strong> Israel launched a 34-day war after Hezbollah captured two soldiers. Result:
            1,191 Lebanese killed, a million displaced, Hezbollah emerged stronger and more popular than before.
            The UN brokered Resolution 1701 — which both sides immediately began violating.
          </p>
          <p>
            <strong>2023-2024:</strong> Hezbollah opened a solidarity front with Gaza after October 7. Israel
            responded with the pager bombings (42 killed, 3,500 injured), assassinated Nasrallah, and launched
            a ground invasion. 4,047 killed, 1.2 million displaced, ceasefire reached in November 2024 — which
            Israel violated daily for the next 15 months.
          </p>
          <p>
            <strong>2026:</strong> The broader Iran war gives Israel the cover to launch its most ambitious
            Lebanon operation yet — a ground incursion with an open-ended &ldquo;security zone&rdquo; that
            amounts to a permanent occupation. The IDF chief says the campaign has &ldquo;only just begun.&rdquo;
          </p>
          <p>
            Each war is larger than the last. Each displacement is more catastrophic. Each &ldquo;solution&rdquo;
            breeds the next crisis. And the United States funds every cycle.
          </p>
        </div>
      </div>

      {/* Section 6: Lebanon's Impossible Position */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Lebanon&apos;s Impossible Position
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            Lebanon is not a normal country. It&apos;s a patchwork of 18 recognized religious sects, a
            parliamentary system designed around sectarian power-sharing, and a state that has been in some
            form of crisis since the 1975-1990 civil war. The Beirut port explosion of 2020 destroyed half the
            capital. The currency lost 98% of its value. The banking system collapsed. GDP fell from $55 billion
            to $18 billion.
          </p>
          <p>
            Into this already-broken state, Hezbollah operates as a state within a state — with its own army,
            its own social services, and its own foreign policy aligned with Iran. The Lebanese Armed Forces (LAF)
            are weaker than Hezbollah&apos;s military wing. The government cannot disarm Hezbollah. It cannot
            prevent Hezbollah from launching attacks. And it cannot prevent Israel from retaliating against the
            entire country.
          </p>
          <p>
            The Lebanese people are trapped. If Hezbollah attacks Israel, Israel bombs Lebanon. If the government
            tries to stop Hezbollah, it risks civil war. If they do nothing, they get bombed anyway because
            Hezbollah acts regardless. There is no path to safety.
          </p>
          <p>
            This is the fundamental injustice that gets lost in Washington&apos;s policy debates. When American
            officials talk about &ldquo;degrading Hezbollah,&rdquo; they&apos;re talking about bombing a country
            whose civilians have no control over the militia that operates from their soil. The farmer in the
            Beqaa Valley didn&apos;t choose to host rocket launchers. The family in Dahiyeh didn&apos;t vote for
            missile strikes on Israel. But they&apos;re the ones who die.
          </p>
        </div>
      </div>

      {/* Section 7: Beirut Under Fire */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Beirut Under Fire
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The Israeli air campaign has been relentless. Beirut&apos;s southern suburbs — Dahiyeh — have been
            pounded repeatedly, just as they were in 2006 and 2024. But in 2026, the strikes have expanded
            into areas that were previously considered off-limits.
          </p>
          <p>
            On March 18, Israeli jets struck <strong>central Beirut</strong> — the neighborhoods of Zuqaq al-Blat
            and Basta — <strong>without warning</strong>. At least 10 were killed and 27 injured. These are
            densely populated residential areas in the heart of the capital, far from any Hezbollah stronghold.
            A second strike hit Zuqaq al-Blat again later the same day.
          </p>
          <p>
            The Nabi Chit strike killed 41 people. Israel was reportedly searching for Ron Arad — an Israeli
            navigator whose plane was shot down over Lebanon in <strong>1986</strong>, forty years ago. Forty-one
            people died in 2026 in the search for a pilot from 1986.
          </p>
          <p>
            The strikes on the Ramada hotel in Beirut killed 5 IRGC Quds Force commanders — a legitimate
            military target by any measure. But the strike was in a populated area of the capital, and the
            message was clear: nowhere in Lebanon is safe.
          </p>
          <p>
            White phosphorus has been deployed on Yohmor, a residential village. Cluster munitions have been
            used in coordinated strikes. Three UNIFIL peacekeepers have been injured. Father Pierre al-Rahi,
            a Maronite priest, was killed in a double-tap strike on Al-Qlayaa — the kind of attack where a
            second munition hits the same location after first responders arrive.
          </p>
        </div>
      </div>

      {/* Section 8: Southern Lebanon */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Southern Lebanon: Scorched Earth
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The ground operation in southern Lebanon has followed a familiar Israeli pattern: issue evacuation
            orders, then destroy everything. Defense Minister Katz ordered the military to <strong>step up
            destruction of bridges and houses</strong> — not because they harbored militants, but to create
            a depopulated buffer zone that Lebanese civilians can never return to.
          </p>
          <p>
            By Day 24, Israel had issued evacuation orders for 59+ areas in Lebanon. The IDF chief said
            the campaign had &ldquo;only just begun&rdquo; and forces were preparing to &ldquo;push deeper.&rdquo;
            Israeli soldiers and tanks engaged in ground combat in the strategic town of Khiam, near the
            border — the same town that hosted Israel&apos;s notorious detention facility during the
            1985-2000 occupation.
          </p>
          <p>
            The infrastructure destruction is systematic. Bridges connecting southern villages are being
            demolished. Roads are being cratered. Agricultural land — olive groves, tobacco fields, orchards
            that families have tended for generations — is being bulldozed to clear sightlines. The message
            is unmistakable: <strong>you cannot come back</strong>.
          </p>
          <p>
            This is what a &ldquo;security zone&rdquo; looks like in practice. It&apos;s not a defensive
            perimeter. It&apos;s ethnic cleansing by infrastructure destruction — making an area so
            uninhabitable that its population has no choice but to leave permanently.
          </p>
        </div>
      </div>

      {/* Section 9: The American Angle */}
      <div className="bg-stone-100 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The American Angle: Another Open-Ended Commitment
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The United States has no direct military presence in Lebanon (beyond a small embassy security
            detail). But it is funding every bomb that falls on the country through its military aid to
            Israel — which has totaled <strong>$21.7 billion since October 2023</strong> and is now part
            of the Pentagon&apos;s <strong>$200 billion supplemental request</strong> for the broader Iran war.
          </p>
          <p>
            American taxpayers are paying for the destruction of Lebanon without any say in the matter.
            Congress never debated whether US weapons should be used for a ground invasion of Lebanon.
            No War Powers Resolution has been introduced for the Lebanon front specifically. The entire
            campaign exists in a legal gray zone — Israel is technically using its own military, but with
            American weapons, American intelligence, and American diplomatic cover.
          </p>
          <p>
            From a libertarian perspective, this is the worst kind of foreign entanglement: an open-ended
            commitment with no defined objectives, no exit strategy, and no accountability. The 1985-2000
            occupation lasted 15 years. The post-2006 UNIFIL deployment is now in its 20th year. Israel&apos;s
            new &ldquo;security zone&rdquo; has no expiration date.
          </p>
          <p>
            The Founding Fathers warned against exactly this. George Washington&apos;s Farewell Address
            cautioned against &ldquo;permanent alliances with any portion of the foreign world&rdquo; and
            the dangers of a &ldquo;passionate attachment&rdquo; to another nation that leads one country
            to &ldquo;participate in the quarrels and wars of the other without adequate inducement or
            justification.&rdquo;
          </p>
          <p>
            What is America&apos;s inducement for destroying Lebanon? What is the justification for funding
            an occupation that has failed twice before? What is the exit strategy?
          </p>
          <p className="font-semibold text-red-800">
            There isn&apos;t one. There never is.
          </p>
        </div>
      </div>

      {/* Section 10: The Cycle */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Cycle That Never Breaks
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            Here is the fundamental problem with the Lebanon wars, stated as plainly as possible:
          </p>
          <p>
            <strong>Bombing Lebanon does not eliminate Hezbollah.</strong> It never has. The 2006 war made
            Hezbollah more popular, not less. The 2024 campaign killed Nasrallah and much of the senior
            leadership — and Hezbollah still launched attacks within months. Destroying infrastructure and
            displacing civilians creates anger, desperation, and recruitment opportunities for the very
            organization Israel is trying to destroy.
          </p>
          <p>
            <strong>Occupying southern Lebanon does not create security.</strong> The 1985-2000 occupation
            didn&apos;t prevent rocket attacks — it incentivized them. The South Lebanon Army, Israel&apos;s
            proxy militia during the occupation, collapsed the day Israel withdrew. The &ldquo;security
            zone&rdquo; became a recruitment factory for Hezbollah fighters motivated by personal experience
            of occupation.
          </p>
          <p>
            <strong>Diplomatic agreements without enforcement don&apos;t hold.</strong> UN Resolution 1701
            was supposed to keep Hezbollah north of the Litani and Israel south of the Blue Line. Both sides
            violated it from day one. The November 2024 ceasefire was supposed to end the fighting — Israel
            violated it daily for 15 months.
          </p>
          <p>
            The definition of insanity is doing the same thing over and over and expecting different results.
            Israel has now launched three major wars against Lebanon in 20 years. Each one was supposed to be
            the last. Each one made the next one inevitable.
          </p>
          <p>
            And the United States pays for every cycle — in money, in diplomatic capital, and in the moral
            authority it claims to stand for.
          </p>
        </div>
      </div>

      {/* Section 11: What Would a Real Solution Look Like? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          What Would a Real Solution Look Like?
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            A real solution to the Lebanon problem would require things that neither Israel nor the United
            States is willing to do:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">1.</span>
              <span><strong>Strengthen the Lebanese state, not weaken it.</strong> Every bomb dropped on
              Lebanon makes the central government weaker and Hezbollah relatively stronger. A strong Lebanese
              Armed Forces capable of asserting sovereignty over southern Lebanon is the only path to a
              post-Hezbollah reality — and it requires investment, not destruction.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">2.</span>
              <span><strong>Address the root causes.</strong> Hezbollah exists because of the 1982 Israeli
              invasion. It grew because of the 1985-2000 occupation. It recruited because of the 2006 war.
              Each military operation creates the next generation of fighters. Breaking the cycle requires
              addressing the underlying grievances — displaced populations, occupied territory, lack of
              economic opportunity.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">3.</span>
              <span><strong>Enforce agreements equally.</strong> If Israel violates a ceasefire daily for
              15 months without consequence, why would any Lebanese faction take the next agreement seriously?
              International agreements require international enforcement — against both sides.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">4.</span>
              <span><strong>Stop funding the cycle.</strong> The simplest step the United States could take
              is to condition military aid on compliance with international law and ceasefire agreements.
              Not as a punishment — as basic accountability for how American taxpayer money is spent.</span>
            </li>
          </ul>
          <p>
            None of this will happen. AIPAC has spent $221 million on US political campaigns since 2021. The
            defense industry profits from every munition expended. And the cycle continues.
          </p>
        </div>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Sources &amp; Citations</h2>
        <ul className="space-y-2 text-sm text-stone-600">
          <li>• Lebanese Health Ministry — Daily casualty reports via Al Jazeera tracker</li>
          <li>• Reuters — Hezbollah fighter casualty estimates (400+)</li>
          <li>• Al Jazeera — Live tracker: Lebanon casualties since March 2, 2026</li>
          <li>• Haaretz — Defense Minister Katz security zone announcement (Mar 24)</li>
          <li>• AP/Al Jazeera — Lebanon expels Iranian ambassador (Mar 24)</li>
          <li>• NYT — Israel evacuation orders and ground operations timeline</li>
          <li>• UN OCHA — Displacement figures for southern Lebanon</li>
          <li>• UNIFIL — Reports of peacekeeper injuries</li>
          <li>• World Bank — Rapid Damage and Needs Assessment 2025 ($14B damage estimate)</li>
          <li>• Brown University Costs of War Project — US military aid figures</li>
          <li>• Quincy Institute — Analysis of US-Israel military aid flows</li>
          <li>• CENTCOM — Pentagon supplemental request ($200B)</li>
          <li>• German government — Chancellor Merz statement on ground offensive</li>
          <li>• Turkey Foreign Ministry — Statement condemning &ldquo;genocidal&rdquo; operations</li>
          <li>• France Foreign Ministry — Criticism of Litani security zone plan</li>
        </ul>
      </div>

      {/* Bottom Line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-400">The Bottom Line</h2>
        <div className="space-y-4 text-stone-300">
          <p>
            Lebanon is being destroyed for the third time in 20 years. The same country. The same people.
            The same American weapons. The same promises that this time will be different.
          </p>
          <p>
            1,110+ people are dead. 121 of them were children. A million people are homeless. A priest was
            killed in a double-tap strike. White phosphorus fell on residential villages. Bridges and homes
            are being systematically demolished to create a permanent occupation zone.
          </p>
          <p>
            And in Washington, nobody is asking the question that matters: <strong className="text-white">
            how does this end?</strong>
          </p>
          <p>
            Because the answer — the honest answer — is that it doesn&apos;t. Not until someone breaks the cycle.
            And right now, breaking the cycle isn&apos;t in anyone&apos;s political interest.
          </p>
        </div>
      </div>

      <RelatedArticles
        articles={[
          { slug: 'lebanon-burns', title: 'While Lebanon Burns: America\'s $22 Billion Blank Check' },
          { slug: 'iran-2026', title: 'Whose War Is This? The Iran Conflict Nobody Asked For' },
          { slug: 'civilian-toll-iran-2026', title: '3,461 Dead in 30 Days: The Human Cost' },
          { slug: 'blowback', title: 'Blowback: When American Foreign Policy Comes Home' },
        ]}
      />

      <BackToTop />
    </div>
  )
}
