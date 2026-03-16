import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Syria Intervention Cost — $14.3 Billion, Red Lines, ISIS Campaign, Endless Occupation | WarCosts',
  description: 'US intervention in Syria cost $14.3 billion, involved red lines that weren\'t enforced, a massive ISIS bombing campaign, SDF partnership, Turkish complications, and an ongoing military presence with no exit strategy. Another forever war.',
  keywords: ['Syria intervention cost', 'Syria war cost', 'Obama red line Syria', 'ISIS campaign Syria', 'SDF Syria', 'US troops Syria', 'Operation Inherent Resolve Syria'],
  openGraph: {
    title: 'Syria Intervention — $14.3B, Red Lines Crossed, ISIS Bombed, Still There',
    description: 'Red lines that vanished, an air war against ISIS, a Kurdish alliance betrayed by Turkey, and US troops still on the ground with no mission and no exit.',
    url: 'https://warcosts.org/syria-intervention',
    type: 'article',
  },
}

const keyStats = [
  { label: 'US Cost (est.)', value: '$14.3 Billion' },
  { label: 'US Troops (peak)', value: '~2,000' },
  { label: 'US Military Deaths', value: '~20' },
  { label: 'Syrian War Dead (total)', value: '500,000+' },
  { label: 'Refugees Created', value: '13+ Million' },
  { label: 'Duration', value: '2014-Present' },
]

const costBreakdown = [
  { category: 'Operation Inherent Resolve (Syria portion)', amount: '$8.5B', desc: 'Air campaign against ISIS: 34,000+ airstrikes and munitions' },
  { category: 'Train & Equip Programs', amount: '$2.2B', desc: 'CIA Timber Sycamore ($1B+) and DoD train-and-equip ($500M failure)' },
  { category: 'SDF Support & Ground Operations', amount: '$2.1B', desc: 'Arming, advising, and supporting Syrian Democratic Forces' },
  { category: 'Humanitarian Aid', amount: '$1.5B', desc: 'US contribution to Syria humanitarian response (fraction of total need)' },
]

const timeline = [
  { year: 'Mar 2011', title: 'Syrian Civil War Begins', desc: 'Arab Spring protests against Assad are met with military force. Peaceful protests become armed rebellion. The conflict rapidly fragments: Assad regime, Free Syrian Army, jihadist groups, Kurdish forces, and eventually ISIS all compete for territory.' },
  { year: 'Aug 20, 2012', title: 'Obama\'s Red Line', desc: 'President Obama declares that the use of chemical weapons would be a "red line" that would change his "calculus" on intervention. It is one of the most consequential off-the-cuff remarks in modern foreign policy — a commitment the US will fail to enforce.' },
  { year: 'Aug 21, 2013', title: 'Ghouta Chemical Attack', desc: 'Assad regime launches a sarin gas attack on the Damascus suburb of Ghouta, killing 1,400+ civilians. The red line is crossed. Obama prepares military strikes — then pivots to seeking Congressional authorization (which he knows he won\'t get), then accepts a Russian-brokered deal for Assad to surrender chemical weapons. The strike never comes.' },
  { year: 'Sep 2013', title: 'Red Line Erased', desc: 'The failure to enforce the red line becomes a defining moment. Supporters argue Obama avoided another Middle Eastern war. Critics argue it destroyed US credibility and emboldened Assad, Russia, and Iran. Assad continues using chemical weapons (chlorine, barrel bombs) with impunity. The red line becomes a punchline.' },
  { year: '2013-2014', title: 'CIA Program: Timber Sycamore', desc: 'The CIA launches Timber Sycamore — a covert program to arm and train "moderate" Syrian rebels. Cost: over $1 billion. Problem: many weapons end up with jihadist groups, including al-Nusra (al-Qaeda\'s Syrian affiliate). Some CIA-armed groups fight DoD-armed groups. The program is a case study in the futility of proxy war.' },
  { year: 'Jun 2014', title: 'ISIS Declares Caliphate', desc: 'ISIS captures Mosul, Iraq, and declares a caliphate spanning Iraq and Syria. The group controls territory the size of the UK, with 8 million people under its rule. It is the direct consequence of the Iraq War\'s destruction of the Iraqi state and the Syrian civil war\'s power vacuum.' },
  { year: 'Sep 22, 2014', title: 'US Begins Bombing Syria', desc: 'The US launches airstrikes against ISIS in Syria under Operation Inherent Resolve. No Congressional authorization. No UN resolution. The legal basis: the 2001 AUMF passed after 9/11 — used to justify bombing a group that didn\'t exist in 2001, in a country the AUMF never mentioned.' },
  { year: '2015', title: 'Russia Intervenes', desc: 'Russia begins airstrikes in Syria — ostensibly against ISIS but primarily targeting anti-Assad rebels. Russia\'s intervention saves the Assad regime and establishes Russia as the dominant external power in Syria. The US is marginalized. Putin demonstrates that Russia can project power while the US dithers.' },
  { year: '2015-2019', title: 'SDF Partnership & ISIS Campaign', desc: 'The US partners with the Syrian Democratic Forces (SDF), dominated by Kurdish YPG fighters. The SDF does the ground fighting; the US provides airstrikes, special forces advisors, and weapons. The campaign is effective — ISIS loses its territory. But Turkey considers the YPG a terrorist organization, creating an impossible contradiction.' },
  { year: 'Apr 2017', title: 'Trump Strikes Assad', desc: 'After another Assad chemical attack (Khan Shaykhun), Trump launches 59 Tomahawk missiles at a Syrian airbase. The base is operational again within hours. A second strike follows in April 2018 after the Douma chemical attack. Neither changes anything. Assad continues to use chemical weapons.' },
  { year: 'Oct 2019', title: 'Turkey Invades, US Abandons Kurds', desc: 'Trump abruptly withdraws US forces from the Turkish border. Turkey invades northeastern Syria, attacking SDF/Kurdish forces — America\'s allies who lost 11,000 fighters defeating ISIS. Kurdish fighters are killed, civilians displaced. The betrayal is bipartisan in its condemnation — and utterly predictable.' },
  { year: '2020-Present', title: 'Frozen Conflict', desc: 'Approximately 900 US troops remain in eastern Syria, guarding oil fields and maintaining the SDF partnership. Their mission is undefined. Their legal authority is questionable. They face occasional attacks from Iranian-backed militias. Another forever war with no end state.' },
]

const playerMap = [
  { player: 'Assad Regime', backedBy: 'Russia, Iran, Hezbollah', goal: 'Regime survival and territorial reconquest' },
  { player: 'ISIS', backedBy: 'Self-funded (oil, looting, taxes)', goal: 'Islamic caliphate (destroyed as territorial entity by 2019)' },
  { player: 'SDF/YPG (Kurds)', backedBy: 'United States', goal: 'Kurdish autonomy in northeastern Syria' },
  { player: 'Turkey', backedBy: 'NATO ally (nominal)', goal: 'Destroy Kurdish autonomy, create buffer zone, resettle refugees' },
  { player: 'Free Syrian Army (remnants)', backedBy: 'CIA, Gulf states, Turkey', goal: 'Originally: Assad overthrow. Now: Turkish proxy force' },
  { player: 'Al-Nusra/HTS', backedBy: 'Gulf donors, captured CIA weapons', goal: 'Islamist governance in Idlib province' },
  { player: 'Iran/Hezbollah', backedBy: 'Iran', goal: 'Maintain land corridor from Tehran to Mediterranean' },
  { player: 'Russia', backedBy: 'Self', goal: 'Naval base at Tartus, air base at Khmeimim, power projection' },
]

const keyFigures = [
  { name: 'Barack Obama', role: 'President (2011-2017)', desc: 'Drew a red line, then erased it. Launched the CIA proxy war and the anti-ISIS air campaign. Avoided the full-scale intervention hawks demanded but created a half-in, half-out commitment that satisfied no one.' },
  { name: 'Donald Trump', role: 'President (2017-2021)', desc: 'Struck Assad twice (changed nothing), ended the CIA rebel program, and then betrayed the Kurds by greenlighting Turkey\'s invasion. Simultaneously maintained troops in Syria to "keep the oil" — a remarkably honest statement of imperial resource extraction.' },
  { name: 'Bashar al-Assad', role: 'Syrian President', desc: 'Survived the civil war with Russian and Iranian help. Used chemical weapons multiple times with minimal consequences. His regime\'s barrel bombs and siege warfare killed far more civilians than ISIS.' },
  { name: 'General Mazloum Abdi', role: 'SDF Commander', desc: 'Kurdish military leader who partnered with the US to defeat ISIS. Lost 11,000 SDF fighters in the campaign. Then watched the US abandon his forces to Turkish invasion. The human face of American betrayal.' },
  { name: 'Abu Bakr al-Baghdadi', role: 'ISIS Leader', desc: 'Declared the caliphate in 2014. Killed in a US raid in 2019. A product of the Iraq War — he was radicalized in US detention at Camp Bucca. The ultimate blowback.' },
]

const faqs = [
  {
    q: 'How much has the US spent on Syria?',
    a: 'US military operations in Syria have cost approximately $14.3 billion since 2014, including $8.5 billion for the anti-ISIS air campaign, $2.2 billion for train-and-equip programs, $2.1 billion for SDF support, and $1.5 billion in humanitarian aid. The CIA\'s Timber Sycamore program cost over $1 billion before being shut down. Costs continue with ~900 US troops still deployed.',
  },
  {
    q: 'Why did Obama not enforce the red line?',
    a: 'After Assad\'s Ghouta chemical attack in August 2013, Obama prepared military strikes but then sought Congressional authorization (knowing Congress would likely reject it), then accepted Russia\'s offer to broker Assad\'s chemical weapons surrender. The reasons: war-weary public, Congressional opposition, no UN authorization, and the Libya aftermath demonstrating the dangers of intervention. The result: a credibility crisis and continued chemical attacks.',
  },
  {
    q: 'What happened to the Syrian Kurds?',
    a: 'The Syrian Kurds (SDF/YPG) were America\'s most effective ground partner against ISIS, losing 11,000 fighters in the campaign. In October 2019, Trump withdrew US forces from the Turkish border, enabling Turkey to invade Kurdish-held territory. Kurdish fighters were killed, 300,000 civilians displaced, and ISIS prisoners nearly escaped. It was a betrayal that even Republican hawks condemned.',
  },
  {
    q: 'Are US troops still in Syria?',
    a: 'Yes. Approximately 900 US troops remain in eastern Syria, primarily at the al-Tanf garrison and in the SDF-controlled northeast. Their stated mission includes counter-ISIS operations, protecting oil fields, and supporting the SDF. Their legal authority is the 2001 AUMF — a law passed to fight al-Qaeda that is now used to justify indefinite presence in a country facing completely different threats. No exit strategy exists.',
  },
  {
    q: 'How many people died in the Syrian Civil War?',
    a: 'Over 500,000 people have been killed in the Syrian Civil War since 2011, according to the Syrian Observatory for Human Rights. The conflict has created 6.8 million refugees (the largest refugee population in the world) and 6.9 million internally displaced persons. Half the pre-war population of 22 million has been displaced. The Assad regime is responsible for the majority of civilian deaths, primarily through barrel bombs, siege warfare, and chemical weapons.',
  },
]

export default function SyriaInterventionPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Syria Intervention' }]} />
        <ShareButtons title="Syria Intervention — $14.3B, Red Lines, ISIS Bombed, Still There" />

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Syria Intervention
          </h1>
          <p className="text-lg text-stone-500 mb-2">2014–Present · Red Lines, ISIS, and Another Forever War</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            <strong className="text-[#991b1b]">$14.3 billion</strong> spent. A red line drawn and erased.
            A CIA proxy war where US-armed groups fought each other. An air campaign that dropped{' '}
            <strong className="text-[#991b1b]">34,000+ bombs</strong> on ISIS. Kurdish allies who lost{' '}
            <strong className="text-[#991b1b]">11,000 fighters</strong> then were abandoned to Turkey.
            And <strong className="text-[#991b1b]">~900 US troops</strong> still there, with no mission,
            no authorization, and no exit. Half a million Syrians dead. Thirteen million displaced.
            Nobody won.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {keyStats.map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl md:text-2xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Cost: $14.3 Billion and Counting
          </h2>
          <p className="text-stone-700 mb-6">
            Syria represents the new model of American warfare: relatively cheap in dollars, catastrophic in
            consequences, and indefinite in duration. No declaration of war, no defined mission, no exit criteria.
            Just an open-ended commitment justified by a 2001 law passed to fight an entirely different enemy.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((r) => (
                  <tr key={r.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">{r.amount}</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline: Red Lines to Forever War
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200" />
            <div className="space-y-6">
              {timeline.map((event) => (
                <div key={event.year} className="relative pl-10">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#991b1b]" />
                  <div className="text-sm font-mono text-[#991b1b] mb-1">{event.year}</div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-1">{event.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Players: Everyone Against Everyone
          </h2>
          <p className="text-stone-700 mb-6">
            Syria became the most complex proxy war of the 21st century. At various points, the US was
            simultaneously fighting ISIS, supporting the Kurds (whom Turkey was fighting), arming rebels
            (some of whom fought other US-armed rebels), and avoiding conflict with Russia (which was
            bombing US-backed groups). It was chaos with a budget.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Player</th>
                  <th className="text-left py-2 font-semibold text-stone-800">Backed By</th>
                  <th className="text-left py-2 font-semibold text-stone-800 hidden md:table-cell">Goal</th>
                </tr>
              </thead>
              <tbody>
                {playerMap.map((p) => (
                  <tr key={p.player} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700 font-semibold">{p.player}</td>
                    <td className="py-2 text-stone-600">{p.backedBy}</td>
                    <td className="py-2 text-stone-500 hidden md:table-cell">{p.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Key Figures</h2>
          <div className="space-y-4">
            {keyFigures.map((f) => (
              <div key={f.name} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="font-semibold text-stone-800">{f.name} <span className="text-sm text-stone-500 font-normal">— {f.role}</span></div>
                <p className="text-sm text-stone-600 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Editorial: The War Nobody Voted For
          </h2>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-700 text-sm">
              The US intervention in Syria was never authorized by Congress, never approved by the UN Security Council,
              and operates under a 2001 law that authorized force against the perpetrators of 9/11 — an event that
              preceded ISIS by over a decade. The legal basis for American presence in Syria is, to put it charitably,
              creative fiction.
            </p>
          </div>
          <p className="text-stone-700 mb-4">
            Syria represents the final evolution of the forever war model. No declaration. No debate. No vote.
            No defined objective. No exit criteria. Just an open-ended military commitment that Congress prefers
            not to discuss because discussing it would require taking responsibility for it.
          </p>
          <p className="text-stone-700 mb-4">
            The CIA&apos;s Timber Sycamore program was perhaps the most absurd chapter: the CIA armed one set of
            rebels while the Pentagon armed another set, and the two groups fought each other. American taxpayers
            funded both sides of firefights in which no American interest was served. The program was eventually
            shut down — not because it was wasteful and counterproductive, but because Trump wanted to please Putin.
          </p>
          <p className="text-stone-700">
            The betrayal of the Kurds — who lost 11,000 fighters defeating ISIS on America&apos;s behalf — was the
            most predictable tragedy. The Kurds have been betrayed by the US in 1975 (Iraq), 1991 (Iraq again),
            and 2019 (Syria). Henry Kissinger explained the pattern decades ago: &ldquo;Covert action should not
            be confused with missionary work.&rdquo; American allies are tools, not partners. When their usefulness
            ends, so does American loyalty.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-stone-200 pb-4">
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }),
            }}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/libya-intervention', label: 'Libya — The Previous "Humanitarian" Disaster' },
              { href: '/iraq-war', label: 'Iraq War — Where ISIS Came From' },
              { href: '/analysis/forever-wars', label: 'Forever Wars — Why They Never End' },
              { href: '/analysis/undeclared-wars', label: 'Undeclared Wars — Fighting Without Authorization' },
              { href: '/drone-strikes', label: 'Drone Strikes in Syria and Iraq' },
              { href: '/analysis/refugee-crisis', label: 'The Refugee Crisis We Created' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-stone-50 hover:bg-stone-100 rounded-lg p-3 border border-stone-200 text-stone-700 hover:text-[#991b1b] transition-colors text-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Sources</h2>
          <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
            <li>Department of Defense — Operation Inherent Resolve Cost Reports</li>
            <li>Congressional Research Service — Armed Conflict in Syria (2023)</li>
            <li>Syrian Observatory for Human Rights — Casualty Reports</li>
            <li>UNHCR — Syria Refugee Crisis Data</li>
            <li>The New York Times — &ldquo;CIA Arms for Syrian Rebels&rdquo; Investigation (2017)</li>
            <li>Inspector General — Operation Inherent Resolve Quarterly Reports</li>
            <li>The Atlantic — &ldquo;The Obama Doctrine&rdquo; (2016)</li>
          </ul>
        </section>

        <BackToTop />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Syria Intervention: $14.3 Billion, Red Lines, ISIS, and Forever War',
            description: 'Comprehensive analysis of US intervention in Syria — costs, red lines, ISIS campaign, Kurdish betrayal, and the ongoing occupation.',
            url: 'https://warcosts.org/syria-intervention',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-15',
            dateModified: '2025-03-15',
          }),
        }}
      />
    </main>
  )
}
