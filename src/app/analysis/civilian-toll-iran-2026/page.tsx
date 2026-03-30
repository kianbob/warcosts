import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: '3,461 Dead in 30 Days: The Human Cost of the Iran War | WarCosts',
  description: 'HRANA data: 3,461 killed in Iran including 1,551 civilians and 228+ children. The Minab school attack killed 168. Infrastructure systematically targeted. The human cost of Operation Epic Fury.',
  openGraph: {
    title: '3,461 Dead in 30 Days: The Human Cost of the Iran War',
    description: '1,551 civilians. 228+ children. 168 schoolgirls at Minab. 1M+ displaced. This is what "precision strikes" look like.',
    url: 'https://www.warcosts.org/analysis/civilian-toll-iran-2026',
  },
}

const casualtyComparison = [
  { war: 'Gulf War (1991)', duration: 'First 30 days', civilianDeaths: '~2,000-3,000', source: 'Various estimates' },
  { war: 'Afghanistan (2001)', duration: 'First 30 days', civilianDeaths: '~1,000-1,300', source: 'Marc Herold / AP' },
  { war: 'Iraq (2003)', duration: 'First 30 days', civilianDeaths: '~5,000-7,000', source: 'Iraq Body Count / Lancet' },
  { war: 'Libya (2011)', duration: 'First 30 days of NATO campaign', civilianDeaths: '~60-70', source: 'HRW / NYT' },
  { war: 'Gaza (2023-24)', duration: 'First 30 days', civilianDeaths: '~10,000+', source: 'Gaza Health Ministry' },
  { war: 'Iran (2026)', duration: 'First 30 days', civilianDeaths: '1,551+', source: 'HRANA' },
]

const infrastructureTargets = [
  { category: 'Water & Utilities', targets: 'Water reservoirs, power plants, electrical grid infrastructure. Trump issued ultimatum to destroy power grid (extended to April 6).' },
  { category: 'Industrial', targets: 'Isfahan Steel Complex, Mobarakeh Steel Company, petrochemical plants, Shahed Aviation Industries drone factory.' },
  { category: 'Education', targets: 'Shajareh Tayyebeh girls\' elementary school (Minab — 168 killed). Universities damaged across multiple cities.' },
  { category: 'Healthcare', targets: '25 hospitals damaged, 9 out of service. 36 ambulances damaged. 55 healthcare workers wounded, 11 killed.' },
  { category: 'Cultural Heritage', targets: 'Golestan Palace (UNESCO World Heritage Site) damaged. Ferdowsi Square area hit during Quds Day rally. House of filmmaker Abbas Kiarostami reportedly damaged.' },
  { category: 'Media & Communications', targets: 'IRIB (state broadcaster) complex struck. Internet blackout for 24+ days. Complete information isolation.' },
  { category: 'Sports & Civilian', targets: 'Sports complexes, residential buildings across Tehran, Karaj, Tabriz, Isfahan, Shiraz, Khorramabad, Kermanshah.' },
  { category: 'Energy', targets: 'Tondgouyan Oil Refinery, Shahran Oil Refinery, South Pars gas field, Kharg Island (90% of oil exports), oil storage facilities.' },
  { category: 'Nuclear', targets: 'Natanz enrichment facility, Arak nuclear facility, Iranian Space Agency. IAEA confirms no radioactive leakage.' },
  { category: 'Transportation', targets: 'Mehrabad Airport area struck. Roads, bridges, and logistics networks across the country.' },
]

export default function CivilianTollPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '3,461 Dead in 30 Days: The Human Cost of the Iran War',
        description: 'HRANA data: 3,461 killed including 1,551 civilians and 228+ children. The human cost of Operation Epic Fury.',
        url: 'https://www.warcosts.org/analysis/civilian-toll-iran-2026',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-29',
        dateModified: '2026-03-29'
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Civilian Toll' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● ACTIVE CONFLICT</span>
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
          <span className="text-xs px-2 py-1 rounded-full bg-stone-700 text-stone-300">Updated Mar 29, 2026 — Day 30</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          3,461 Dead in 30 Days
        </h1>
        <p className="text-xl text-stone-300 mb-4">The Human Cost of the Iran War</p>
        <p className="text-stone-400 text-lg mb-4">
          The Pentagon calls them &ldquo;precision strikes.&rdquo; The White House says the campaign is
          &ldquo;going very well.&rdquo; The numbers tell a different story. According to HRANA (Human Rights
          Activists in Iran), <strong className="text-red-400">3,461 people have been killed</strong> in
          Iran in the first 30 days of Operation Epic Fury. Of those, <strong className="text-red-400">1,551
          were civilians</strong> — including <strong className="text-red-400">228+ children</strong>.
          Over <strong className="text-red-400">3,229 have been wounded</strong>.
          More than <strong className="text-red-400">1 million people</strong> have been displaced.
        </p>
        <p className="text-stone-400 text-lg">
          This is what &ldquo;precision&rdquo; looks like at scale. When you drop 9,000+ munitions on a country
          of 88 million people — including its schools, hospitals, power grid, and cultural heritage sites —
          the word &ldquo;precision&rdquo; becomes a lie.
        </p>
      </div>

      <ShareButtons title="3,461 Dead in 30 Days: The Human Cost of the Iran War" />

      {/* Opening Quote */}
      <blockquote className="border-l-4 border-red-700 pl-6 my-8 text-xl text-stone-600 italic">
        &ldquo;158 students ages 7-12 were attending morning classes when the missile struck. The IRGC base
        nearby may have been the target. The children were not.&rdquo;
        <span className="block text-sm text-stone-500 mt-2 not-italic">— Amnesty International report on the Minab school attack, March 17, 2026</span>
      </blockquote>

      {/* Key Numbers */}
      <div className="grid md:grid-cols-5 gap-4 my-8">
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Total Killed</p>
          <p className="text-2xl font-bold text-[#dc2626] font-[family-name:var(--font-heading)]">3,461</p>
          <p className="text-xs text-stone-500">HRANA data</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Civilians</p>
          <p className="text-2xl font-bold text-[#dc2626] font-[family-name:var(--font-heading)]">1,551</p>
          <p className="text-xs text-stone-500">45% of total</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Children</p>
          <p className="text-2xl font-bold text-[#dc2626] font-[family-name:var(--font-heading)]">228+</p>
          <p className="text-xs text-stone-500">Ages 8 months to 17</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Wounded</p>
          <p className="text-2xl font-bold text-[#dc2626] font-[family-name:var(--font-heading)]">3,229+</p>
          <p className="text-xs text-stone-500">24,800 per Iran govt</p>
        </div>
        <div className="bg-red-50 border-red-200 rounded-lg p-5 border text-center">
          <p className="text-sm text-red-700 mb-1">Displaced</p>
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">1M+</p>
          <p className="text-xs text-red-600">UNHCR: 3.2M</p>
        </div>
      </div>

      {/* Section 1: The Minab School Attack */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">
          The Minab School Attack: 168 Dead
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            On the morning of February 28, 2026 — the first day of the war — a missile struck the
            <strong> Shajareh Tayyebeh girls&apos; elementary school</strong> in Minab, Hormozgan province.
            158 students between the ages of 7 and 12 were in their morning classes when the strike hit.
          </p>
          <p>
            The initial death toll was reported at 108. It was later revised upward to <strong className="text-[#dc2626]">168</strong>.
          </p>
          <p>
            An IRGC military base was located nearby and may have been the intended target. But the strike
            came at <strong>9:15 AM local time</strong> — after workers had arrived at their desks and
            children had arrived at school. This was not an accident of timing. The entire first wave of
            Operation Epic Fury was deliberately timed for a weekday morning to maximize the decapitation
            effect against government officials. The children were collateral.
          </p>
          <p>
            On March 17, <strong>Amnesty International confirmed</strong> that the United States was
            responsible for the Minab school attack — not Israel. American weapons. American targeting.
            American responsibility.
          </p>
          <p>
            For context: the Minab school attack alone killed more civilians than the entire first month
            of the 2011 NATO Libya campaign. One strike. One school. 168 lives.
          </p>
        </div>
      </div>

      {/* Section 2: Who Is Counting? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Who Is Counting the Dead?</h2>
        <div className="space-y-4 text-stone-700">
          <p>
            One of the most difficult aspects of this war is the gap between official counts. Multiple
            organizations are tracking casualties, and their numbers diverge significantly:
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            <div className="bg-stone-50 rounded-lg p-4">
              <p className="font-semibold text-stone-800 mb-2">HRANA (Human Rights Activists in Iran)</p>
              <p className="text-sm">Norway-based independent human rights organization. Reports <strong>3,461 killed</strong> —
              1,551 civilians (including 228+ children), remainder military/security forces. Considered the most
              reliable independent source, though access is limited by Iran&apos;s internet blackout.</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4">
              <p className="font-semibold text-stone-800 mb-2">Iranian Red Crescent / Health Ministry</p>
              <p className="text-sm">Official Iranian government figures: <strong>1,937 killed, 24,800 injured</strong> (as of Day 26).
              Government figures tend to undercount total dead while inflating injury numbers. They also combine
              war casualties with protest victims.</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4">
              <p className="font-semibold text-stone-800 mb-2">CENTCOM / Pentagon</p>
              <p className="text-sm">The US military does not track or report Iranian civilian casualties. Period.
              They report <strong>targets struck</strong> (9,000+), <strong>ships sunk</strong> (130+), and
              <strong> combat flights</strong> (8,000+). The humans who die are not part of the accounting.</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4">
              <p className="font-semibold text-stone-800 mb-2">Al Jazeera Tracker</p>
              <p className="text-sm">Compiles data from multiple sources. Reports <strong>1,937 killed, 24,800 injured</strong>
              (using Iranian government baseline). Provides the most accessible running tally but relies heavily
              on official Iranian figures.</p>
            </div>
          </div>
          <p>
            The true number is almost certainly higher than any of these counts. Iran has been under a
            near-total <strong>internet blackout for 24+ days</strong>. Hospitals are overwhelmed — 25 damaged,
            9 out of service. Many casualties in remote areas go unreported. Bodies buried under rubble
            may not be recovered for weeks or months.
          </p>
          <p>
            History suggests that initial wartime counts dramatically underestimate actual deaths. The Iraq
            Body Count project initially tracked ~100,000 violent deaths in Iraq by 2006; the Lancet study
            estimated 655,000 excess deaths in the same period. The true toll of the Iran war will not be
            known for years.
          </p>
        </div>
      </div>

      {/* Section 3: The Civilian Breakdown */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Who Are the Victims?</h2>
        <div className="space-y-4 text-stone-700">
          <p>
            HRANA&apos;s data provides the most detailed breakdown of who has died in this war:
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-red-600">
              <p className="text-3xl font-bold text-[#dc2626] font-[family-name:var(--font-heading)]">1,551</p>
              <p className="font-semibold">Civilians killed</p>
              <p className="text-sm text-stone-500 mt-1">Including 228+ children. Victims range from
              8 months old to 88 years old. A three-day-old infant and her 2-year-old sister were killed
              in a US-Israeli strike on their home in Arak.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-stone-400">
              <p className="text-3xl font-bold text-stone-700 font-[family-name:var(--font-heading)]">1,910</p>
              <p className="font-semibold">Military/Security killed</p>
              <p className="text-sm text-stone-500 mt-1">IRGC, Basij, regular military, and security
              personnel. Includes senior officials: Larijani, Basij commander Soleimani, intelligence
              minister Khatib, defense minister Nasirzadeh.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500">
              <p className="text-3xl font-bold text-amber-700 font-[family-name:var(--font-heading)]">55+</p>
              <p className="font-semibold">Healthcare workers wounded</p>
              <p className="text-sm text-stone-500 mt-1">11 killed. 36 ambulances damaged. 25 hospitals
              damaged, 9 completely out of service. Attacking healthcare infrastructure is a war crime
              under the Geneva Conventions.</p>
            </div>
          </div>
          <p>
            The civilian-to-combatant ratio — roughly 45% civilian deaths — is comparable to other
            modern air campaigns but remarkable given the Pentagon&apos;s claims of &ldquo;precision
            strikes.&rdquo; When you strike 9,000+ targets in 30 days, even a 5% civilian error rate
            produces hundreds of dead innocents. At 45%, the word &ldquo;precision&rdquo; is meaningless.
          </p>
        </div>
      </div>

      {/* Section 4: Infrastructure Destruction */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Infrastructure Under Fire
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The air campaign has systematically targeted Iran&apos;s civilian infrastructure alongside
            military sites. While the Pentagon frames these as strikes on &ldquo;dual-use&rdquo; or
            &ldquo;defense-related&rdquo; facilities, the scope of destruction extends far beyond
            legitimate military objectives.
          </p>
          <div className="space-y-3 my-4">
            {infrastructureTargets.map((item, i) => (
              <div key={i} className="bg-stone-50 rounded-lg p-4">
                <p className="font-semibold text-stone-800 text-sm">{item.category}</p>
                <p className="text-sm text-stone-600 mt-1">{item.targets}</p>
              </div>
            ))}
          </div>
          <p>
            The targeting of water reservoirs, power plants, and hospitals is particularly concerning
            under international humanitarian law. Article 54 of the Geneva Conventions Protocol I
            prohibits attacks on &ldquo;objects indispensable to the survival of the civilian population,&rdquo;
            including &ldquo;drinking water installations and supplies.&rdquo; Article 18 of the Fourth
            Geneva Convention protects hospitals. These are not gray areas — they are clear prohibitions.
          </p>
        </div>
      </div>

      {/* Section 5: Cultural Heritage */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Cultural Heritage Destroyed
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            Iran is home to one of the world&apos;s oldest continuous civilizations — 7,000+ years of
            history, 27 UNESCO World Heritage Sites, and cultural treasures that belong to all of humanity.
            The war has already damaged some of these irreplaceable sites.
          </p>
          <p>
            <strong>Golestan Palace</strong>, a UNESCO World Heritage Site in central Tehran and one of the
            oldest historic monuments in the capital, was damaged in strikes on March 3. Built in the 16th
            century and expanded under the Qajar dynasty, Golestan Palace is to Iran what the Smithsonian
            is to America — a repository of national memory and identity.
          </p>
          <p>
            The <strong>IRIB (state broadcaster) complex</strong> in Tehran was struck on the same day.
            While state media is a legitimate propaganda tool, the physical destruction of broadcasting
            infrastructure contributed to the information blackout that has left 88 million Iranians
            cut off from the outside world for a month.
          </p>
          <p>
            Ferdowsi Square — named after the poet who wrote Iran&apos;s national epic, the <em>Shahnameh</em> —
            was the site of an explosion during a Quds Day rally on March 14. The house of acclaimed
            filmmaker <strong>Abbas Kiarostami</strong>, one of the most celebrated filmmakers in cinema
            history, was reportedly damaged in strikes on March 25.
          </p>
          <p>
            In 2020, Trump threatened to target Iranian cultural sites and was widely condemned — even by
            his own Pentagon, which said it would be a war crime. In 2026, cultural sites are being damaged
            as &ldquo;collateral&rdquo; rather than as explicit targets. The legal distinction matters. The
            practical result is the same.
          </p>
        </div>
      </div>

      {/* Section 6: Iran's Own Massacres */}
      <div className="bg-stone-100 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Other 3,117: Iran&apos;s Massacre of Its Own People
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            Any honest accounting of the human cost must include what the Iranian government did to its
            own people <em>before</em> the first American bomb fell.
          </p>
          <p>
            In late December 2025 and early January 2026, massive anti-government protests erupted across
            100+ Iranian cities — the largest since the 1979 revolution. Driven by economic collapse and the
            rial&apos;s crash, millions took to the streets demanding change.
          </p>
          <p>
            The regime&apos;s response was medieval. Between January 8-10, 2026, the IRGC and Basij deployed
            <strong> live ammunition, mounted machine guns, and drones</strong> against civilian protesters.
            The death toll estimates vary wildly:
          </p>
          <ul className="space-y-2 ml-4">
            <li><strong>Iranian government:</strong> 3,117 killed (their own admission)</li>
            <li><strong>HRANA:</strong> ~7,000 killed</li>
            <li><strong>Trump administration:</strong> 32,000 killed</li>
            <li><strong>International Centre for Human Rights:</strong> 43,000 killed</li>
            <li><strong>Detained:</strong> At least 26,541 people arrested</li>
          </ul>
          <p>
            This context matters for two reasons. First, it demonstrates that the Iranian regime was already
            a mass murderer of its own citizens — the people Trump claimed to be &ldquo;liberating.&rdquo;
            Second, it reveals the tragic irony of Operation Epic Fury: many of the Iranians killed by
            American bombs were the same people who had been protesting against their government just weeks
            earlier. They were potential allies. Now they&apos;re dead.
          </p>
          <p>
            The war has had the opposite of its stated effect on Iranian domestic politics. Rather than
            empowering reformers, the bombing has <strong>rallied the population behind the regime</strong>.
            Former IRGC commander Mohammad Bagher Zolghadr — a hardliner — has been named the new top
            security official. Mojtaba Khamenei, the son of the assassinated Supreme Leader, has consolidated
            power with IRGC backing. Experts say the war has &ldquo;expedited and accelerated&rdquo; IRGC
            control of Iran — the exact opposite of what the strikes were supposed to achieve.
          </p>
        </div>
      </div>

      {/* Section 7: Comparison Table */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          How Does This Compare?
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The civilian death rate in the Iran war&apos;s first month compared to other US military
            campaigns at the same stage:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-stone-300">
                  <th className="text-left py-3 pr-4 font-semibold text-stone-600">Conflict</th>
                  <th className="text-left py-3 pr-4 font-semibold text-stone-600">Period</th>
                  <th className="text-left py-3 pr-4 font-semibold text-stone-600">Civilian Deaths</th>
                  <th className="text-left py-3 pr-4 font-semibold text-stone-600">Source</th>
                </tr>
              </thead>
              <tbody>
                {casualtyComparison.map((row, i) => (
                  <tr key={i} className={`border-b border-stone-200 ${row.war === 'Iran (2026)' ? 'bg-red-50 font-semibold' : ''}`}>
                    <td className="py-3 pr-4">{row.war}</td>
                    <td className="py-3 pr-4">{row.duration}</td>
                    <td className="py-3 pr-4 text-[#dc2626] font-bold">{row.civilianDeaths}</td>
                    <td className="py-3 pr-4 text-xs">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone-500 mt-2">
            Note: All historical figures are estimates and vary significantly by source. Iran 2026 figures from HRANA
            are likely undercounts given the internet blackout and overwhelmed healthcare system.
          </p>
          <p>
            The Iran war&apos;s civilian death rate in the first 30 days is lower than the catastrophic Iraq
            2003 invasion — but that campaign involved 150,000 ground troops invading a country. Operation Epic
            Fury is supposedly an air campaign only. The fact that an air campaign has produced 1,551+ documented
            civilian deaths in 30 days — with the true toll likely much higher — challenges the fundamental
            premise that air power can achieve strategic objectives without massive civilian casualties.
          </p>
        </div>
      </div>

      {/* Section 8: Can Air Campaigns Avoid Civilians? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Can Air Campaigns Avoid Civilians at This Scale?
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The honest answer is <strong>no</strong>.
          </p>
          <p>
            The Pentagon has struck 9,000+ targets in Iran in 30 days. Israel has conducted 2,500+ strikes
            with 6,000+ weapons. Combined, the US and Israel have flown 8,000+ combat missions. At this
            intensity and scale, civilian casualties are not an aberration — they are a mathematical certainty.
          </p>
          <p>
            Modern &ldquo;precision-guided munitions&rdquo; have a CEP (Circular Error Probable) of
            3-13 meters — meaning half of all bombs land within that radius of the aim point. That sounds
            precise until you realize that a 2,000-lb bomb has a lethal blast radius of <strong>35 meters</strong>
            {' '}and can cause injuries at 365 meters. &ldquo;Precision&rdquo; refers to where the bomb lands,
            not what it destroys.
          </p>
          <p>
            When targets are located in urban areas — as most Iranian military and government facilities are —
            the blast radius extends into civilian structures, apartment buildings, schools, and hospitals.
            Tehran is a city of 9 million people. Isfahan has 2 million. You cannot bomb these cities
            9,000 times and claim you&apos;re only hitting military targets.
          </p>
          <p>
            The deliberate timing of the first strikes — <strong>9:15 AM on a weekday</strong> — was chosen
            to maximize the decapitation effect against government officials who would be at their desks.
            But 9:15 AM on a weekday is also when children are in school. When workers are in factories.
            When civilians are in markets. The Minab school attack was not a mistake — it was a predictable
            consequence of a targeting decision that valued killing officials over protecting children.
          </p>
          <p>
            The B-2 bomber strikes using 5,000-lb penetrator weapons — the largest conventional munitions in
            the US arsenal — target underground facilities. These bunker-busters create seismic shocks that
            damage structures for hundreds of meters around the impact point. When used in or near populated
            areas, they are weapons of mass destruction in all but name.
          </p>
        </div>
      </div>

      {/* Section 9: The Displacement Crisis */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          1 Million+ Displaced: The Invisible Crisis
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            UNHCR reported 3.2 million Iranians displaced by Day 15 of the war. By Day 30, the true
            number is almost certainly higher. These are people who have lost their homes, their
            livelihoods, and their communities — and they have nowhere to go.
          </p>
          <p>
            Iran&apos;s neighbors are in no position to absorb refugees. Iraq is unstable and itself under
            attack (Iraqi airports and US embassy struck, Iraqi ports shut down). Afghanistan is under
            Taliban control. Pakistan is overwhelmed by existing refugee populations. Turkey has been
            tightening border controls. Turkmenistan and Azerbaijan have limited capacity and political will.
          </p>
          <p>
            Inside Iran, the displacement crisis is compounded by the destruction of infrastructure.
            25 hospitals damaged. Power grid under threat (Trump&apos;s ultimatum to destroy power plants
            was extended, not cancelled). Water reservoirs targeted. Food distribution disrupted.
            Internet blackout for a month. The conditions for a humanitarian catastrophe are already in place.
          </p>
          <p>
            And yet the humanitarian situation in Iran receives almost no coverage in Western media —
            partly because of the internet blackout, partly because Iran is the &ldquo;enemy,&rdquo; and
            partly because the sheer scale of the broader regional war (12+ countries under fire) has
            overwhelmed journalistic capacity.
          </p>
        </div>
      </div>

      {/* Section 10: The Moral Question */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-400">
          The Moral Question
        </h2>
        <div className="space-y-4 text-stone-300">
          <p>
            There is a question that American citizens need to confront honestly:
          </p>
          <p className="text-white text-lg font-semibold">
            Is the destruction of Iran&apos;s nuclear program worth 1,551+ civilian lives, 228+ children,
            and the displacement of millions?
          </p>
          <p>
            The Iranian government is brutal. It massacred 3,117+ of its own citizens in January 2026.
            Its nuclear ambitions are real. Hezbollah, Hamas, and the Houthis are dangerous. These facts
            are not in dispute.
          </p>
          <p>
            But the question is not whether Iran is bad. The question is whether bombing Iran makes things
            better. The evidence from 30 days of war says it doesn&apos;t. The regime has consolidated
            power. Hardliners have replaced moderates. The population has rallied behind the flag. The
            nuclear program&apos;s knowledge base is intact even if facilities are damaged. And 1,551+
            civilians — many of whom were protesting against their government weeks ago — are dead.
          </p>
          <p>
            168 schoolgirls in Minab didn&apos;t threaten the United States. A three-day-old infant in
            Arak didn&apos;t enrich uranium. The elderly couple who couldn&apos;t make it to their safe
            room in time weren&apos;t developing ballistic missiles.
          </p>
          <p>
            These are the people who pay the price for decisions made in Washington and Jerusalem. They
            always are.
          </p>
        </div>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Sources &amp; Citations</h2>
        <ul className="space-y-2 text-sm text-stone-600">
          <li>• <strong>HRANA (Human Rights Activists in Iran)</strong> — Primary casualty data: 3,461 killed, 1,551 civilians, 228+ children</li>
          <li>• <strong>Al Jazeera</strong> — Live casualty tracker for Iran, Lebanon, Israel, and Gulf states</li>
          <li>• <strong>Reuters</strong> — Military casualty estimates and operational updates</li>
          <li>• <strong>Amnesty International</strong> — Confirmed US responsibility for Minab school attack (Mar 17)</li>
          <li>• <strong>Iranian Red Crescent / Health Ministry</strong> — Official Iranian casualty figures (1,937 killed, 24,800 injured)</li>
          <li>• <strong>CENTCOM</strong> — Strike counts (9,000+ targets), combat flights (8,000+), operational updates</li>
          <li>• <strong>UNHCR</strong> — Displacement figure (3.2 million by Day 15)</li>
          <li>• <strong>IAEA</strong> — Nuclear facility damage assessments</li>
          <li>• <strong>UNESCO</strong> — Golestan Palace World Heritage status</li>
          <li>• <strong>Modern Diplomacy</strong> — Analysis of civilian infrastructure targeting</li>
          <li>• <strong>Geneva Conventions</strong> — Protocol I, Articles 18 and 54 on protected infrastructure</li>
          <li>• <strong>Brown University Costs of War Project</strong> — Historical civilian casualty comparisons</li>
          <li>• <strong>Iraq Body Count / Lancet</strong> — Iraq War civilian death estimates (for comparison)</li>
          <li>• <strong>International Centre for Human Rights in Iran</strong> — January 2026 protest massacre figures</li>
        </ul>
      </div>

      <RelatedArticles
        articles={[
          { slug: 'iran-2026', title: 'Whose War Is This? The Iran Conflict Nobody Asked For', desc: '' },
          { slug: 'lebanon-war-2026', title: 'Lebanon Under Fire Again: The 2026 War Nobody Asked For', desc: '' },
          { slug: 'oil-price-shock-2026', title: '$116 Oil and Counting: How the Iran War Is Hitting Your Wallet', desc: '' },
          { slug: 'iran-civilian-cost', title: 'The Civilian Cost of the Iran War', desc: '' },
        ]}
      />

      <BackToTop />
    </div>
  )
}
