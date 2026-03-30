import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Syria Intervention — $14.3 Billion, Red Lines, ISIS Campaign, Kurdish Betrayal, Endless Occupation | WarCosts',
  description: 'US intervention in Syria: $14.3 billion, red lines erased, 34,000+ bombs dropped on ISIS, CIA-armed rebels fought Pentagon-armed rebels, Kurds betrayed, 900 troops still there. No authorization. No exit. No plan.',
  keywords: ['Syria intervention cost', 'Syria war cost', 'Obama red line Syria', 'ISIS campaign Syria', 'SDF Syria', 'US troops Syria', 'Operation Inherent Resolve Syria', 'Kurdish betrayal Syria', 'Timber Sycamore'],
  openGraph: {
    title: 'The Syria Intervention — $14.3B, Red Lines Crossed, ISIS Bombed, Kurds Betrayed, Still There',
    description: 'Red lines erased. CIA and Pentagon rebels fought each other. 11,000 Kurdish allies killed fighting ISIS, then abandoned to Turkey. 900 US troops still there. $14.3 billion. No exit.',
    url: 'https://warcosts.org/syria-intervention',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'US Cost (est.)', value: '$14.3 Billion' },
  { label: 'US Troops (current)', value: '~900' },
  { label: 'US Military Deaths', value: '~20' },
  { label: 'Syrian War Dead (total)', value: '500,000+' },
  { label: 'Refugees Created', value: '13+ Million' },
  { label: 'Duration', value: '2014-Present' },
]

const costBreakdown = [
  { category: 'Operation Inherent Resolve (Syria)', amount: '$8.5B', desc: 'Air campaign against ISIS: 34,000+ airstrikes and munitions' },
  { category: 'CIA Timber Sycamore + DoD Train/Equip', amount: '$2.2B', desc: 'CIA rebel program ($1B+) and Pentagon train-and-equip ($500M failure)' },
  { category: 'SDF Support & Ground Operations', amount: '$2.1B', desc: 'Arming, advising, and supporting Syrian Democratic Forces' },
  { category: 'Humanitarian Aid', amount: '$1.5B', desc: 'US contribution to Syria humanitarian response (fraction of total need)' },
  { category: 'Total', amount: '$14.3B', desc: 'Estimated total through 2026; costs continue with ~900 troops deployed' },
]

const casualties = [
  { group: 'US Military Deaths', count: '~20', note: 'Including 4 killed in Manbij suicide bombing (Jan 2019)' },
  { group: 'SDF/Kurdish Fighters Killed', count: '11,000', note: 'America\'s ground proxy against ISIS — then abandoned to Turkey' },
  { group: 'ISIS Fighters Killed', count: '60,000-70,000', note: 'Estimated killed by coalition strikes and SDF ground operations' },
  { group: 'Syrian Civilians Killed (total war)', count: '500,000+', note: 'All parties; Assad regime responsible for majority' },
  { group: 'Syrian Refugees', count: '6.8 Million', note: 'Largest refugee population in the world' },
  { group: 'Internally Displaced', count: '6.9 Million', note: 'Half of Syria\'s pre-war population displaced' },
]

const playerMap = [
  { player: 'Assad Regime', backedBy: 'Russia, Iran, Hezbollah', goal: 'Regime survival and territorial reconquest' },
  { player: 'ISIS', backedBy: 'Self-funded (oil, looting, taxes)', goal: 'Caliphate (destroyed as territory by 2019)' },
  { player: 'SDF/YPG (Kurds)', backedBy: 'United States', goal: 'Kurdish autonomy in northeast Syria' },
  { player: 'Turkey', backedBy: 'NATO ally (nominal)', goal: 'Destroy Kurdish autonomy, resettle refugees' },
  { player: 'Free Syrian Army', backedBy: 'CIA, Gulf states, Turkey', goal: 'Originally: Assad overthrow. Now: Turkish proxy' },
  { player: 'Al-Nusra/HTS', backedBy: 'Gulf donors, captured CIA weapons', goal: 'Islamist governance in Idlib' },
  { player: 'Iran/Hezbollah', backedBy: 'Iran', goal: 'Land corridor Tehran to Mediterranean' },
  { player: 'Russia', backedBy: 'Self', goal: 'Naval base, air base, power projection' },
]

const timeline = [
  { year: 'Mar 2011', title: 'Syrian Civil War Begins', desc: 'Arab Spring protests against Assad met with military force. Peaceful protests become armed rebellion. The conflict fragments: Assad, FSA, jihadists, Kurds, and eventually ISIS all compete for territory.' },
  { year: 'Aug 2012', title: 'Obama\'s Red Line', desc: 'Obama declares chemical weapons use would be a "red line" changing his "calculus." One of the most consequential off-the-cuff remarks in modern foreign policy — a commitment the US will fail to enforce.' },
  { year: 'Aug 2013', title: 'Ghouta Chemical Attack', desc: 'Assad launches a sarin attack on Ghouta, killing 1,400+. The red line is crossed. Obama prepares strikes — then pivots to Congressional authorization (which he knows he won\'t get), then accepts Russia\'s chemical weapons surrender deal. The strike never comes.' },
  { year: 'Sep 2013', title: 'Red Line Erased', desc: 'The failure to enforce the red line becomes defining. Critics argue it destroyed US credibility and emboldened Assad, Russia, and Iran. Assad continues using chemical weapons with impunity. The red line becomes a punchline.' },
  { year: '2013-2014', title: 'CIA Timber Sycamore', desc: 'The CIA launches a $1 billion+ covert program to arm "moderate" rebels. Problem: weapons end up with jihadists. Some CIA-armed groups fight DoD-armed groups. A case study in the futility of proxy war.' },
  { year: 'Jun 2014', title: 'ISIS Declares Caliphate', desc: 'ISIS captures Mosul and declares a caliphate spanning Iraq and Syria. Territory the size of the UK, 8 million under its rule. The direct consequence of Iraq War destruction and Syria\'s power vacuum.' },
  { year: 'Sep 2014', title: 'US Begins Bombing Syria', desc: 'Airstrikes under Operation Inherent Resolve begin. No Congressional authorization. Legal basis: the 2001 AUMF — used to bomb a group that didn\'t exist in 2001, in a country it never mentioned.' },
  { year: '2015', title: 'Russia Intervenes', desc: 'Russia begins airstrikes — ostensibly against ISIS but primarily targeting anti-Assad rebels. Russia saves the Assad regime and becomes the dominant external power. Putin demonstrates power projection while the US dithers.' },
  { year: '2015-2019', title: 'SDF Partnership & ISIS Campaign', desc: 'The US partners with Kurdish-led SDF. The SDF does the ground fighting; the US provides airstrikes and advisors. Effective against ISIS — but Turkey considers the YPG a terrorist organization. An impossible contradiction.' },
  { year: 'Apr 2017', title: 'Trump Strikes Assad (Round 1)', desc: 'After Khan Shaykhun chemical attack, Trump launches 59 Tomahawk missiles at a Syrian airbase. The base is operational within hours. Cost: ~$90 million in missiles. Impact: near zero.' },
  { year: 'Apr 2018', title: 'Trump Strikes Assad (Round 2)', desc: 'After Douma chemical attack, US/UK/France launch 105 missiles at Syrian chemical weapons facilities. Assad continues using chemical weapons. Neither strike changes anything.' },
  { year: 'Oct 2019', title: 'Turkey Invades, Kurds Abandoned', desc: 'Trump withdraws from the Turkish border. Turkey invades, attacking SDF/Kurdish forces — America\'s allies who lost 11,000 fighters defeating ISIS. Kurdish fighters killed, civilians displaced. The betrayal is bipartisan in condemnation and utterly predictable.' },
  { year: '2020-Present', title: 'Frozen Forever War', desc: '~900 US troops remain in eastern Syria, guarding oil fields and maintaining the SDF partnership. Mission undefined. Legal authority questionable. Occasional attacks from Iranian-backed militias. Another forever war with no end state.' },
]

const keyFigures = [
  { name: 'Barack Obama', role: 'President (2011-2017)', desc: 'Drew a red line, then erased it. Launched the CIA proxy war and anti-ISIS campaign. Avoided the full-scale intervention hawks demanded but created a half-in commitment that satisfied no one.' },
  { name: 'Donald Trump', role: 'President (2017-2021)', desc: 'Struck Assad twice (changed nothing). Ended the CIA rebel program. Betrayed the Kurds by greenlighting Turkey\'s invasion. Simultaneously maintained troops to "keep the oil" — a remarkably honest statement of imperial resource extraction.' },
  { name: 'Joe Biden', role: 'President (2021-2025)', desc: 'Maintained the ~900 troops with no change in mission, no new authorization, and no exit plan. Ordered retaliatory strikes against Iranian-backed militias. The forever war on autopilot.' },
  { name: 'General Mazloum Abdi', role: 'SDF Commander', desc: 'Led Kurdish forces that lost 11,000 fighters defeating ISIS for America. Then watched the US abandon his forces to Turkey. The human face of American betrayal. The Kurds have been betrayed by the US in 1975, 1991, and 2019.' },
  { name: 'Abu Bakr al-Baghdadi', role: 'ISIS Leader (killed 2019)', desc: 'Declared the caliphate in 2014. Killed in US raid in 2019. A product of the Iraq War — radicalized in US detention at Camp Bucca. The ultimate blowback.' },
]

const whatWeGot = [
  { label: 'ISIS Territorial Defeat', value: 'Yes', desc: 'The caliphate was destroyed as a territorial entity by 2019. Genuine achievement. But ISIS persists as an insurgency with 10,000+ fighters in Iraq/Syria.' },
  { label: 'Assad Removed', value: 'No', desc: 'Assad won. With Russian and Iranian help, he recontrols ~70% of Syria. The regime the US spent billions trying to undermine survived.' },
  { label: 'Chemical Weapons Stopped', value: 'No', desc: 'Assad used chemical weapons repeatedly after the "red line," after the Russian deal, and after Trump\'s missile strikes. None of it worked.' },
  { label: 'Kurdish Autonomy', value: 'Fragile', desc: 'The SDF controls northeast Syria — for now. Turkey wants to destroy it. The US provides uncertain protection. One presidential decision could end it.' },
  { label: 'Regional Stability', value: 'Worse', desc: 'Iran has a land corridor to the Mediterranean. Russia has permanent bases. Turkey occupies Syrian territory. The region is less stable than before.' },
  { label: 'Constitutional Process', value: 'Ignored', desc: 'No declaration of war. No AUMF for Syria. The 2001 AUMF for 9/11 perpetrators is used to justify bombing a group that didn\'t exist in 2001.' },
]

const domesticComparison = [
  { item: 'Rebuild every lead pipe in America', cost: '$14.3B', note: 'EPA estimates $12.3B needed for lead pipe replacement' },
  { item: 'Fund free community college for 2.8 million students', cost: '$14.3B', note: 'At ~$5,000 per student per year' },
  { item: 'Build 143,000 affordable housing units', cost: '$14.3B', note: 'At ~$100K per unit average' },
  { item: 'Fund the VA mental health budget for 7 years', cost: '$14.3B', note: 'For veterans of... the previous wars' },
]

const faqs = [
  {
    q: 'How much has the US spent on Syria?',
    a: 'Approximately $14.3 billion since 2014: $8.5 billion for the anti-ISIS air campaign, $2.2 billion for train-and-equip programs (including the CIA\'s $1 billion+ Timber Sycamore), $2.1 billion for SDF support, and $1.5 billion in humanitarian aid. Costs continue with ~900 troops deployed.',
  },
  {
    q: 'Why did Obama not enforce the red line?',
    a: 'After Assad\'s Ghouta sarin attack (August 2013), Obama prepared strikes but sought Congressional authorization (knowing Congress would reject it), then accepted Russia\'s chemical weapons surrender deal. Reasons: war-weary public, Congressional opposition, no UN authorization, and the Libya aftermath. The result: a credibility crisis and continued chemical attacks.',
  },
  {
    q: 'What happened to the Syrian Kurds?',
    a: 'The SDF/YPG were America\'s most effective partner against ISIS, losing 11,000 fighters. In October 2019, Trump withdrew from the Turkish border, enabling Turkey to invade Kurdish-held territory. Fighters killed, 300,000 civilians displaced, ISIS prisoners nearly escaped. A betrayal condemned by both parties — and the third time the US abandoned the Kurds (after 1975 and 1991).',
  },
  {
    q: 'Are US troops still in Syria?',
    a: 'Yes. ~900 troops remain in eastern Syria at al-Tanf garrison and northeast bases. Stated mission: counter-ISIS, protect oil fields, support SDF. Legal authority: the 2001 AUMF for 9/11 perpetrators — used to justify indefinite presence against threats that didn\'t exist in 2001. No exit strategy exists.',
  },
  {
    q: 'Did CIA and Pentagon rebels fight each other?',
    a: 'Yes. The CIA\'s Timber Sycamore program armed one set of "moderate" rebels while the Pentagon\'s train-and-equip program armed another. The two groups clashed in northern Syria. American taxpayers funded both sides of firefights in which no American interest was served. The CIA program was eventually shut down in 2017.',
  },
  {
    q: 'How many people have died in the Syrian war?',
    a: 'Over 500,000 killed since 2011. 6.8 million refugees (world\'s largest), 6.9 million internally displaced. Half the pre-war population of 22 million displaced. The Assad regime is responsible for the majority of civilian deaths through barrel bombs, siege warfare, and chemical weapons.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function SyriaInterventionPage() {
  return (
    <main className="min-h-screen">
      {/* ── Dark Hero ─────────────────────────────────────────── */}
      <section className="bg-stone-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'US Wars', href: '/us-wars-list' }, { label: 'Syria Intervention' }]} />
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] mt-6 mb-4 leading-tight">
            The Syria Intervention:<br />
            <span className="text-[#dc2626]">Red Lines, Betrayal, Forever War</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-3xl">
            <strong className="text-[#dc2626]">$14.3 billion</strong> spent. A red line drawn and erased.
            A CIA proxy war where <strong className="text-white">US-armed groups fought each other</strong>.
            An air campaign that dropped <strong className="text-[#dc2626]">34,000+ bombs</strong> on ISIS.
            Kurdish allies who lost <strong className="text-[#dc2626]">11,000 fighters</strong> then were
            abandoned to Turkey. Trump launched <strong className="text-white">164 cruise missiles</strong> at
            Assad — who kept using chemical weapons anyway. And{' '}
            <strong className="text-[#dc2626]">~900 US troops</strong> are still there, guarding oil fields,
            with no mission, no authorization, and no exit. Half a million Syrians dead. Thirteen million
            displaced. Nobody won.
          </p>
          <ShareButtons title="Syria Intervention — $14.3B, Red Lines, ISIS, Kurdish Betrayal, Still There" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {keyStats.map((s) => (
              <div key={s.label} className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
                <div className="text-xl md:text-2xl font-bold text-[#dc2626]">{s.value}</div>
                <div className="text-xs text-stone-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Light Content ─────────────────────────────────────── */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-4xl mx-auto px-4">

          {/* Cost Breakdown */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-2">
              The Cost: $14.3 Billion and Counting
            </h2>
            <p className="text-stone-600 mb-6">
              Syria is the new model of American warfare: relatively cheap in dollars, catastrophic in
              consequences, and indefinite in duration. No declaration of war, no defined mission, no exit.
              Just an open-ended commitment justified by a 2001 law passed for an entirely different enemy.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-stone-300">
                    <th className="text-left py-3 font-semibold text-stone-800">Category</th>
                    <th className="text-right py-3 font-semibold text-stone-800">Amount</th>
                    <th className="text-left py-3 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((r) => (
                    <tr key={r.category} className="border-b border-stone-200">
                      <td className="py-3 text-stone-700">{r.category}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626] font-semibold">{r.amount}</td>
                      <td className="py-3 pl-4 text-stone-500 hidden md:table-cell text-xs">{r.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Casualty Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-2">
              The Human Cost
            </h2>
            <p className="text-stone-600 mb-6">
              Half a million dead. Thirteen million displaced. The worst refugee crisis since World War II.
              And the US contribution — while dwarfed by Assad and Russia — includes its own moral failures.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-stone-300">
                    <th className="text-left py-3 font-semibold text-stone-800">Group</th>
                    <th className="text-right py-3 font-semibold text-stone-800">Count</th>
                    <th className="text-left py-3 pl-4 font-semibold text-stone-800 hidden md:table-cell">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {casualties.map((c) => (
                    <tr key={c.group} className="border-b border-stone-200">
                      <td className="py-3 text-stone-700">{c.group}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626] font-semibold">{c.count}</td>
                      <td className="py-3 pl-4 text-stone-500 hidden md:table-cell text-xs">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Players */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-2">
              The Players: Everyone Against Everyone
            </h2>
            <p className="text-stone-600 mb-6">
              The most complex proxy war of the 21st century. At various points, the US was simultaneously
              fighting ISIS, supporting Kurds (whom Turkey was fighting), arming rebels (some of whom fought
              other US-armed rebels), and avoiding Russia (which was bombing US-backed groups). Chaos with a budget.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-stone-300">
                    <th className="text-left py-3 font-semibold text-stone-800">Player</th>
                    <th className="text-left py-3 font-semibold text-stone-800">Backed By</th>
                    <th className="text-left py-3 font-semibold text-stone-800 hidden md:table-cell">Goal</th>
                  </tr>
                </thead>
                <tbody>
                  {playerMap.map((p) => (
                    <tr key={p.player} className="border-b border-stone-200">
                      <td className="py-3 text-stone-700 font-semibold">{p.player}</td>
                      <td className="py-3 text-stone-600">{p.backedBy}</td>
                      <td className="py-3 text-stone-500 hidden md:table-cell text-xs">{p.goal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-6">
              Timeline: Red Lines to Forever War
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-300" />
              <div className="space-y-8">
                {timeline.map((event) => (
                  <div key={event.year} className="relative pl-10">
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-[#dc2626]" />
                    <div className="text-sm font-mono text-[#dc2626] mb-1">{event.year}</div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-1">{event.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Figures */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-6">Key Figures</h2>
            <div className="space-y-4">
              {keyFigures.map((f) => (
                <div key={f.name} className="bg-white rounded-lg p-5 border border-stone-200 shadow-sm">
                  <div className="font-semibold text-stone-800">{f.name} <span className="text-sm text-stone-500 font-normal">— {f.role}</span></div>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Got */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-2">
              What We Got
            </h2>
            <p className="text-stone-600 mb-6">
              ISIS defeated as a territory. Assad still in power. Chemical weapons still used.
              Kurds betrayed. 900 troops still there. $14.3 billion spent. Nobody can articulate
              what victory looks like.
            </p>
            <div className="space-y-4">
              {whatWeGot.map((item) => (
                <div key={item.label} className="bg-white rounded-lg p-5 border border-stone-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-stone-800">{item.label}</span>
                    <span className={`text-sm font-mono px-2 py-0.5 rounded ${
                      item.value === 'No' || item.value === 'Worse' || item.value === 'Ignored' ? 'bg-red-100 text-[#dc2626]' :
                      item.value === 'Fragile' || item.value === 'Yes' ? 'bg-amber-100 text-amber-700' :
                      'bg-green-100 text-green-700'
                    }`}>{item.value}</span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Domestic Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-2">
              What $14.3 Billion Could Have Bought Instead
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {domesticComparison.map((item) => (
                <div key={item.item} className="bg-white rounded-lg p-4 border border-stone-200 shadow-sm">
                  <div className="text-lg font-bold text-[#dc2626]">{item.cost}</div>
                  <div className="text-sm font-semibold text-stone-800 mt-1">{item.item}</div>
                  <div className="text-xs text-stone-500 mt-1">{item.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lasting Consequences */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-4">
              Lasting Consequences
            </h2>
            <div className="bg-[#dc2626]/5 border-l-4 border-[#dc2626] p-5 rounded-r-lg mb-6">
              <p className="text-stone-700 text-sm leading-relaxed">
                Syria is the war that embodies every failure of post-9/11 American foreign policy: unauthorized
                force, contradictory objectives, betrayed allies, and indefinite commitment with no definition
                of victory.
              </p>
            </div>
            <div className="space-y-4 text-stone-700">
              <p>
                <strong className="text-stone-900">1. The red line that destroyed credibility.</strong>{' '}
                Obama&apos;s failure to enforce his chemical weapons red line is one of the most consequential
                moments in 21st-century foreign policy. It signaled to adversaries — Russia, China, Iran, North
                Korea — that American threats are hollow. Putin intervened in Syria months later, confident the US
                wouldn&apos;t respond. The Crimea annexation followed the same logic. The red line didn&apos;t just
                fail in Syria; it failed globally.
              </p>
              <p>
                <strong className="text-stone-900">2. CIA vs. Pentagon: funding both sides.</strong>{' '}
                The CIA&apos;s Timber Sycamore program armed one set of &ldquo;moderate&rdquo; rebels. The
                Pentagon&apos;s $500 million train-and-equip program armed another. The two groups fought each
                other in northern Syria. American taxpayers funded both sides of firefights. It is perhaps the
                most absurd waste of money in the history of US covert operations — which is saying something.
              </p>
              <p>
                <strong className="text-stone-900">3. The Kurdish betrayal.</strong>{' '}
                The SDF lost 11,000 fighters defeating ISIS on America&apos;s behalf. In October 2019, Trump
                withdrew US forces and greenlighted Turkey&apos;s invasion of Kurdish territory. The betrayal was
                bipartisan in condemnation — and utterly predictable. The Kurds have been betrayed by the US in
                1975 (Iraq), 1991 (Iraq again), and 2019 (Syria). As Kissinger explained: &ldquo;Covert action
                should not be confused with missionary work.&rdquo;
              </p>
              <p>
                <strong className="text-stone-900">4. The forever war template.</strong>{' '}
                900 troops in Syria with no mission, no authorization, no exit plan. They face occasional attacks
                from Iranian-backed militias. They guard oil fields. They maintain a relationship with the SDF.
                No one can articulate what victory looks like or when they come home. It is the purest expression
                of the forever war: not large enough to generate political opposition, not important enough to
                resolve, and not costly enough (in American lives) to end.
              </p>
              <p>
                <strong className="text-stone-900">5. The 2001 AUMF as blank check.</strong>{' '}
                The legal basis for US operations in Syria is the Authorization for Use of Military Force passed
                on September 14, 2001 — three days after 9/11, targeting the perpetrators of those attacks. ISIS
                didn&apos;t exist in 2001. Syria wasn&apos;t mentioned. Yet this single law has been used to
                justify military operations in at least 22 countries across 4 administrations. It is the most
                abused piece of legislation in American history.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-6">
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
          </div>

          {/* Related Pages */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-4">Related Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { href: '/libya-2011', label: 'Libya 2011 — The Intervention That Killed R2P' },
                { href: '/iraq-war', label: 'Iraq War — Where ISIS Came From' },
                { href: '/kosovo', label: 'Kosovo — The Earlier "Humanitarian" Bombing' },
                { href: '/congress-and-war', label: 'Congress & War — The Vote That Never Happened' },
                { href: '/us-wars-list', label: 'Complete List of US Wars' },
                { href: '/analysis/undeclared-wars', label: 'Undeclared Wars — The 2001 AUMF Problem' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white hover:bg-stone-100 rounded-lg p-3 border border-stone-200 text-stone-700 hover:text-[#dc2626] transition-colors text-sm shadow-sm"
                >
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Sources */}
          <div className="mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-4">Sources</h2>
            <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
              <li>Department of Defense — Operation Inherent Resolve Cost Reports</li>
              <li>Congressional Research Service — &ldquo;Armed Conflict in Syria&rdquo; (2024)</li>
              <li>Syrian Observatory for Human Rights — Casualty Reports</li>
              <li>UNHCR — Syria Refugee Crisis Data</li>
              <li>The New York Times — &ldquo;CIA Arms for Syrian Rebels&rdquo; Investigation (2017)</li>
              <li>Inspector General — Operation Inherent Resolve Quarterly Reports</li>
              <li>The Atlantic — &ldquo;The Obama Doctrine&rdquo; by Jeffrey Goldberg (2016)</li>
            </ul>
          </div>

          <BackToTop />
        </div>
      </section>

      {/* ── JSON-LD ───────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Syria Intervention: $14.3 Billion, Red Lines, ISIS, Kurdish Betrayal, and Forever War',
            description: 'Comprehensive analysis of US intervention in Syria — costs, red lines, ISIS campaign, Kurdish betrayal, and the ongoing occupation.',
            url: 'https://warcosts.org/syria-intervention',
            datePublished: '2025-03-15',
            dateModified: '2026-03-30',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            author: { '@type': 'Organization', name: 'WarCosts.org' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://warcosts.org' },
              { '@type': 'ListItem', position: 2, name: 'US Wars', item: 'https://warcosts.org/us-wars-list' },
              { '@type': 'ListItem', position: 3, name: 'Syria Intervention', item: 'https://warcosts.org/syria-intervention' },
            ],
          }),
        }}
      />
    </main>
  )
}
