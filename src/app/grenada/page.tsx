import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Invasion of Grenada — Operation Urgent Fury, $135M Cost, 19 US Killed, 4-Day War, Reagan\'s Precedent | WarCosts',
  description: 'Operation Urgent Fury: Reagan invaded Grenada in October 1983. 7,600 troops, 19 US killed, 116 wounded, 45 Grenadian civilians dead. Cost $135M ($400M in 2026 dollars). Set the precedent for unilateral presidential war.',
  keywords: ['Grenada invasion', 'Operation Urgent Fury', 'Grenada war cost', 'Reagan Grenada', 'Grenada 1983', 'War Powers Act Grenada', 'US invasion Grenada'],
  openGraph: {
    title: 'Operation Urgent Fury: The 4-Day War That Changed Everything',
    description: 'Reagan invaded Grenada with 7,600 troops over a runway and some medical students. 19 Americans died. It set the precedent for every unilateral war since.',
    url: 'https://warcosts.org/grenada',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'US Troops Deployed', value: '7,600' },
  { label: 'US Killed', value: '19' },
  { label: 'US Wounded', value: '116' },
  { label: 'Grenadian Civilians Killed', value: '45' },
  { label: 'Cuban Military Killed', value: '25' },
  { label: 'Cost (2026 Dollars)', value: '$400 Million' },
]

const costBreakdown = [
  { category: 'Combat Operations', amount: '$75M', adjusted: '$222M', desc: 'Deployment of 7,600 troops from Army Rangers, Marines, 82nd Airborne, Navy SEALs, Delta Force' },
  { category: 'Naval Operations', amount: '$30M', adjusted: '$89M', desc: 'Aircraft carrier USS Independence battle group, amphibious assault ships' },
  { category: 'Airlift & Logistics', amount: '$15M', adjusted: '$44M', desc: 'MAC airlift operations, supply chain from US bases' },
  { category: 'Post-Invasion Stabilization', amount: '$10M', adjusted: '$30M', desc: 'Garrison forces, infrastructure repair, and transition to civilian government' },
  { category: 'Equipment Losses', amount: '$5M', adjusted: '$15M', desc: '9 helicopters destroyed or damaged, vehicles, munitions expended' },
  { category: 'Total', amount: '$135M', adjusted: '$400M', desc: 'Approximate total direct military cost' },
]

const casualties = [
  { group: 'US Military Killed', count: '19', note: 'Rangers, Marines, SEALs, Army — many from friendly fire and operational accidents' },
  { group: 'US Military Wounded', count: '116', note: 'Including helicopter crash survivors and friendly fire casualties' },
  { group: 'Grenadian Military Killed', count: '45', note: 'People\'s Revolutionary Army soldiers' },
  { group: 'Grenadian Civilians Killed', count: '24-45', note: 'Including 18 killed when US bombed a mental hospital' },
  { group: 'Cuban Military Killed', count: '25', note: 'Construction workers and military advisors' },
  { group: 'Cuban Military Wounded', count: '59', note: 'Most were construction workers, not combat troops' },
  { group: 'Cuban Captured', count: '638', note: 'Repatriated to Cuba after the invasion' },
]

const timeline = [
  { year: 'Mar 13, 1979', title: 'New Jewel Movement Coup', desc: 'Maurice Bishop and the New Jewel Movement overthrow Prime Minister Eric Gairy in a bloodless coup while Gairy is at the UN. Bishop establishes a socialist government aligned with Cuba and the Soviet Union. Grenada — population 91,000, area 133 square miles — becomes a Cold War flashpoint.' },
  { year: '1979-1983', title: 'The Airport That Scared Reagan', desc: 'Cuba sends construction workers to build a 10,000-foot runway at Point Salines. The Reagan administration claims it\'s a Cuban-Soviet military base. Grenada says it\'s for tourism — the island\'s existing airport can\'t handle large jets. Both claims have merit, but Reagan uses the runway relentlessly in propaganda. A tiny island building an airport becomes a national security crisis.' },
  { year: 'Oct 13, 1983', title: 'Bishop Overthrown by Hardliners', desc: 'Deputy PM Bernard Coard and General Hudson Austin stage a coup within the revolution, placing Bishop under house arrest. The Marxist government fractures — the hardliners want closer Soviet ties, Bishop was moderating. The internal power struggle creates the instability the US will exploit.' },
  { year: 'Oct 19, 1983', title: 'Bishop Executed', desc: 'Bishop is freed by supporters but then recaptured and executed by firing squad along with several cabinet members at Fort Rupert. A 24-hour shoot-on-sight curfew is imposed. The situation is genuinely chaotic. Reagan sees his opening.' },
  { year: 'Oct 23, 1983', title: 'Beirut Barracks Bombing', desc: '241 US Marines and 58 French paratroopers are killed by a truck bomb in Beirut, Lebanon. The timing is critical: Reagan needs a military victory to distract from the Beirut disaster. Grenada is small enough to guarantee success. The Beirut bombing happens on a Sunday; invasion planning accelerates immediately.' },
  { year: 'Oct 25, 1983', title: 'D-Day: Operation Urgent Fury', desc: 'At 5:00 AM, US forces invade Grenada. Navy SEALs attempt to seize the radio station and the Governor-General\'s residence. Rangers parachute onto Point Salines airfield under fire. Marines land at Pearls Airport in the north. Almost nothing goes as planned — SEALs are pinned down, Rangers land on the wrong side of the runway, communications between services fail catastrophically.' },
  { year: 'Oct 25, 1983', title: 'The Mental Hospital Bombing', desc: 'A Navy A-7 Corsair bombs the Richmond Hill Mental Hospital, killing at least 18 patients. The intended target was Fort Frederick, several hundred yards away. The hospital is clearly marked. The bombing becomes one of the most shameful incidents of the operation but receives minimal media coverage — because Reagan has banned all journalists from the island.' },
  { year: 'Oct 25-26', title: 'Medical Students "Rescued"', desc: 'US forces reach the True Blue campus of St. George\'s University Medical School and "rescue" 224 American students. The students were never hostaged or threatened. A second campus at Grand Anse, with 233 more students, isn\'t secured until Day 2 — despite being the stated reason for the invasion. Some students later say they never felt endangered.' },
  { year: 'Oct 25-28', title: 'Cuban Resistance', desc: 'The 638 Cubans on Grenada — mostly construction workers — put up stiffer resistance than expected. They fight from the unfinished airport terminal and nearby positions. The Pentagon had told troops to expect no serious opposition. The Cubans are eventually overwhelmed but inflict casualties that embarrass the military.' },
  { year: 'Oct 28, 1983', title: 'Organized Resistance Ends', desc: 'After 4 days, organized resistance collapses. The US has committed 7,600 troops to conquer an island with a military of about 1,500 (plus 638 Cubans). The ratio is approximately 4:1 against a force with no air power, no navy, and no heavy weapons. Despite this, the operation revealed serious inter-service coordination failures.' },
  { year: 'Nov 2, 1983', title: 'UN Condemns the Invasion', desc: 'The UN General Assembly passes Resolution 38/7, condemning the invasion as "a flagrant violation of international law" by a vote of 108-9. The US vetoes a Security Council resolution. Only a handful of tiny Caribbean nations support the invasion through the Organization of Eastern Caribbean States (OECS).' },
  { year: 'Dec 1983', title: 'Last US Combat Troops Leave', desc: 'Most US forces withdraw by mid-December. A small garrison remains until 1985. Elections are held in 1984. Grenada returns to pro-Western governance. The airport is completed — by the US Army Corps of Engineers — and does indeed serve commercial tourism.' },
]

const keyFigures = [
  { name: 'Ronald Reagan', role: 'President', desc: 'Ordered the invasion two days after the Beirut barracks bombing killed 241 Marines. Reagan never sought Congressional authorization. When asked about the War Powers Act, he claimed the action would be over before the 60-day clock ran out. He was right — and the precedent was set. Every president since has cited Grenada when launching unilateral military action.' },
  { name: 'Caspar Weinberger', role: 'Secretary of Defense', desc: 'Initially opposed the invasion but executed it. The operational failures — communications breakdowns, friendly fire, wrong maps — led directly to the Goldwater-Nichols Act (1986), the most significant military reorganization since 1947. Grenada\'s failures fixed the military for the Gulf War.' },
  { name: 'Maurice Bishop', role: 'PM of Grenada (executed)', desc: 'Charismatic socialist leader who was actually moderating his positions before being overthrown and killed by hardliners in his own movement. His death created the chaos Reagan used to justify invasion. Ironically, a surviving Bishop might have prevented the very instability that triggered US intervention.' },
  { name: 'Admiral Joseph Metcalf III', role: 'Joint Task Force Commander', desc: 'Commanded the invasion from USS Guam. Dealt with catastrophic inter-service communication failures — Army, Navy, Marines, and Air Force couldn\'t talk to each other. The famous story: an Army officer on Grenada used a civilian phone and his personal credit card to call Fort Bragg to request naval gunfire support.' },
  { name: 'Sir Paul Scoon', role: 'Governor-General of Grenada', desc: 'The British-appointed figurehead who retroactively "invited" the US invasion. The invitation letter was actually drafted by US officials after the invasion began. Scoon served as the legal fig leaf for the operation — the claim that a legitimate authority had requested assistance.' },
]

const whatWeGot = [
  { label: 'Military Victory', value: 'Yes', desc: '4-day conquest of an island with 91,000 people and no real military. Overwhelming force against a non-peer adversary.' },
  { label: 'Regime Change', value: 'Achieved', desc: 'Marxist government replaced with pro-Western democracy. Elections held 1984. Grenada remains a parliamentary democracy aligned with the US.' },
  { label: 'Student Safety', value: 'Debatable', desc: 'Medical students were "rescued" but most said they were never in danger. The Grenadian government had offered safe passage. The rescue was the pretext, not the cause.' },
  { label: 'Cold War Signal', value: 'Sent', desc: 'Message to Cuba and USSR: the US would use force in its hemisphere. After years of Soviet advances (Afghanistan, Nicaragua, Angola), Reagan showed he would push back — on the easiest possible target.' },
  { label: 'Constitutional Precedent', value: 'Catastrophic', desc: 'Established that presidents can invade sovereign nations without Congressional approval. Every subsequent unauthorized military action — Panama, Kosovo, Libya — cites Grenada as precedent.' },
  { label: 'Media Precedent', value: 'Catastrophic', desc: 'First US military operation to completely ban press access. Established the template for military media control that continued through Panama and evolved into "embedded" journalism in Iraq.' },
]

const domesticComparison = [
  { item: 'Fully fund Head Start for 1 year (1983)', cost: '$135M', note: 'Reagan had just cut Head Start funding' },
  { item: 'Build 2,700 affordable housing units', cost: '$135M', note: 'At 1983 construction costs' },
  { item: 'Fund EPA Superfund cleanup for 2 years', cost: '$135M', note: 'Reagan had cut EPA budget by 30%' },
  { item: 'Provide Pell Grants for 135,000 students', cost: '$135M', note: 'At 1983 grant levels of ~$1,000' },
]

const faqs = [
  {
    q: 'Why did the US invade Grenada?',
    a: 'The stated reasons were protecting American medical students and responding to an OECS request after the coup that killed PM Maurice Bishop. The real reasons were: (1) preventing a perceived Cuban/Soviet military base, (2) demonstrating US willingness to use force after the Beirut disaster, (3) Cold War signaling, and (4) domestic political benefit for Reagan. The medical students were never in serious danger — the Grenadian government had offered them safe passage.',
  },
  {
    q: 'How much did the Grenada invasion cost?',
    a: 'Direct military costs were approximately $135 million in 1983 dollars, or roughly $400 million adjusted to 2026. This includes combat operations, naval deployment, airlift, post-invasion stabilization, and equipment losses. For context, the US spent more conquering a 133-square-mile island than Grenada\'s entire GDP.',
  },
  {
    q: 'Was the Grenada invasion legal?',
    a: 'No, by most international legal standards. The UN General Assembly condemned it 108-9 as a "flagrant violation of international law." The US vetoed a Security Council resolution. Domestically, Reagan never sought Congressional authorization under the War Powers Act, instead arguing the operation would conclude before the 60-day notification window expired. The "invitation" from Governor-General Scoon was drafted by US officials after the invasion began.',
  },
  {
    q: 'How many people died in the Grenada invasion?',
    a: '19 US military personnel were killed and 116 wounded (many from friendly fire). 45 Grenadian soldiers were killed. Between 24 and 45 Grenadian civilians died, including at least 18 patients killed when the US bombed a mental hospital. 25 Cuban military personnel/construction workers were killed, 59 wounded, and 638 captured.',
  },
  {
    q: 'What was the lasting impact of the Grenada invasion?',
    a: 'Grenada\'s most lasting impact was constitutional, not military. It established the precedent that presidents can launch invasions without Congressional approval. It pioneered total media blackouts during military operations. And the operational failures (inter-service communication breakdowns, friendly fire) led to the Goldwater-Nichols Act of 1986, which reorganized the US military and enabled the success of the 1991 Gulf War.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function GrenadaPage() {
  return (
    <main className="min-h-screen">
      {/* ── Dark Hero ─────────────────────────────────────────── */}
      <section className="bg-stone-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'US Wars', href: '/us-wars-list' }, { label: 'Grenada' }]} />
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] mt-6 mb-4 leading-tight">
            Operation Urgent Fury:<br />
            <span className="text-[#dc2626]">The 4-Day War</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-3xl">
            On October 25, 1983 — two days after 241 Marines died in Beirut — Ronald Reagan invaded
            a Caribbean island of <strong className="text-white">91,000 people</strong> with{' '}
            <strong className="text-[#dc2626]">7,600 troops</strong>. The pretext: rescuing medical
            students who weren&apos;t in danger. The real goal: a quick win to bury a catastrophe.
            It cost <strong className="text-[#dc2626]">$135 million</strong>,{' '}
            <strong className="text-[#dc2626]">19 American lives</strong>, and set the precedent
            for every unauthorized war since.
          </p>
          <ShareButtons title="Operation Urgent Fury: The 4-Day War That Changed Everything" />

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
              The Cost: $135 Million to Conquer Paradise
            </h2>
            <p className="text-stone-600 mb-6">
              The US spent more conquering Grenada than the island&apos;s entire annual GDP. In 2026
              dollars, the 4-day operation cost approximately $400 million — or $100 million per day
              to defeat an army with no air force, no navy, and no heavy weapons.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-stone-300">
                    <th className="text-left py-3 font-semibold text-stone-800">Category</th>
                    <th className="text-right py-3 font-semibold text-stone-800">1983 $</th>
                    <th className="text-right py-3 font-semibold text-stone-800">2026 $</th>
                    <th className="text-left py-3 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((r) => (
                    <tr key={r.category} className="border-b border-stone-200">
                      <td className="py-3 text-stone-700">{r.category}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626] font-semibold">{r.amount}</td>
                      <td className="py-3 text-right font-mono text-stone-500">{r.adjusted}</td>
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
              Nineteen Americans died invading an island the size of Martha&apos;s Vineyard. Many
              casualties came from friendly fire and operational chaos — the services literally
              couldn&apos;t communicate with each other.
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

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-6">
              Timeline: From Revolution to Invasion
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
              A tactical success that became a constitutional catastrophe. Grenada proved that
              presidents could wage war without asking Congress — and get away with it.
            </p>
            <div className="space-y-4">
              {whatWeGot.map((item) => (
                <div key={item.label} className="bg-white rounded-lg p-5 border border-stone-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-stone-800">{item.label}</span>
                    <span className={`text-sm font-mono px-2 py-0.5 rounded ${
                      item.value === 'Catastrophic' ? 'bg-red-100 text-[#dc2626]' :
                      item.value === 'Debatable' ? 'bg-amber-100 text-amber-700' :
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
              What $135 Million Could Have Bought Instead
            </h2>
            <p className="text-stone-600 mb-6">
              While Reagan was cutting domestic programs to fund military buildup, the Grenada invasion
              cost more than several programs he&apos;d slashed.
            </p>
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
                Grenada&apos;s military significance was negligible. Its constitutional significance
                was enormous. In 4 days, Reagan established three precedents that fundamentally
                altered the balance of war powers in America.
              </p>
            </div>
            <div className="space-y-4 text-stone-700">
              <p>
                <strong className="text-stone-900">1. Presidents don&apos;t need Congress to start wars.</strong>{' '}
                Reagan never sought authorization. He notified Congress after the troops were already on the beach.
                The War Powers Act required him to withdraw within 60 days without Congressional approval — but
                the operation was over in 4. Every president since has used this playbook: act fast, finish before
                Congress can object.
              </p>
              <p>
                <strong className="text-stone-900">2. The media can be excluded from war zones.</strong>{' '}
                Grenada was the first US military operation with a total press blackout. Reporters were physically
                prevented from reaching the island. The military controlled all information. This template evolved
                into the &ldquo;embedded journalist&rdquo; system used in Iraq — a more sophisticated form of the
                same impulse: control the narrative.
              </p>
              <p>
                <strong className="text-stone-900">3. Small wars can erase big failures.</strong>{' '}
                Reagan invaded Grenada 48 hours after 241 Marines died in Beirut. The invasion dominated the news
                cycle. Reagan&apos;s approval ratings surged. The lesson: a quick, photogenic military victory can
                distract from catastrophic policy failures. Clinton used this playbook (Sudan/Afghanistan strikes
                during Lewinsky). Trump used it (Soleimani killing during impeachment).
              </p>
              <p>
                <strong className="text-stone-900">4. The Goldwater-Nichols Act.</strong>{' '}
                The one genuinely positive consequence. Grenada&apos;s operational failures — Army units unable to
                communicate with Navy ships, Marines and Army on incompatible radio frequencies, an officer using a
                payphone and credit card to call for fire support — were so embarrassing that Congress passed the
                most significant military reorganization since 1947. Joint operations, joint commands, and unified
                communications became the standard. The Gulf War&apos;s success was built on Grenada&apos;s failures.
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
                { href: '/panama', label: 'Panama — Reagan\'s Precedent Goes Further' },
                { href: '/congress-and-war', label: 'Congress & War — Who Decides?' },
                { href: '/us-wars-list', label: 'Complete List of US Wars' },
                { href: '/cold-war', label: 'Cold War — The Context for Grenada' },
                { href: '/lebanon', label: 'Lebanon — The Disaster Grenada Distracted From' },
                { href: '/analysis/undeclared-wars', label: 'Undeclared Wars — Fighting Without Authorization' },
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
              <li>Congressional Research Service — &ldquo;The US Invasion of Grenada&rdquo; (1983)</li>
              <li>Department of Defense — After Action Report, Operation Urgent Fury</li>
              <li>Ronald Cole, &ldquo;Operation Urgent Fury: Grenada&rdquo; — Joint History Office (1997)</li>
              <li>Mark Adkin, &ldquo;Urgent Fury: The Battle for Grenada&rdquo; (1989)</li>
              <li>UN General Assembly Resolution 38/7 (November 2, 1983)</li>
              <li>Goldwater-Nichols Department of Defense Reorganization Act (1986)</li>
              <li>Gordon McDonald, &ldquo;The Grenada Documents&rdquo; — declassified NJM files</li>
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
            headline: 'Operation Urgent Fury: The 4-Day War — Grenada Invasion Cost & Consequences',
            description: 'Reagan invaded Grenada with 7,600 troops in October 1983. 19 US killed, $135M cost. Set the precedent for unilateral presidential war.',
            url: 'https://warcosts.org/grenada',
            datePublished: '2026-03-30',
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
              { '@type': 'ListItem', position: 3, name: 'Grenada', item: 'https://warcosts.org/grenada' },
            ],
          }),
        }}
      />
    </main>
  )
}
