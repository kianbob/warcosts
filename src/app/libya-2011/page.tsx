import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Libya 2011 — Operation Odyssey Dawn, $1.1B Cost, Gaddafi Killed, Failed State, Slave Markets | WarCosts',
  description: 'Operation Odyssey Dawn: Obama bombed Libya in 2011 without Congressional authorization, argued it wasn\'t "hostilities." Gaddafi killed. Libya became a failed state with slave markets, ISIS, and migrant crisis. $1.1B direct US cost.',
  keywords: ['Libya war 2011', 'Operation Odyssey Dawn', 'Libya intervention cost', 'Gaddafi killed', 'Libya failed state', 'Obama Libya', 'Libya slave markets', 'NATO Libya'],
  openGraph: {
    title: 'Operation Odyssey Dawn: The War Obama Said Wasn\'t a War',
    description: 'Obama bombed Libya, killed Gaddafi, argued it wasn\'t "hostilities." Libya became a failed state with slave markets. $1.1B. The ultimate blowback.',
    url: 'https://warcosts.org/libya-2011',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Duration', value: '7 Months' },
  { label: 'Direct US Cost', value: '$1.1 Billion' },
  { label: 'US Combat Deaths', value: '0' },
  { label: 'Libyan Civilians Killed', value: '1,100+' },
  { label: 'NATO Sorties', value: '26,500' },
  { label: 'Years as Failed State', value: '14+' },
]

const costBreakdown = [
  { category: 'US Air Operations (Odyssey Dawn)', amount: '$550M', desc: 'Initial US-led phase: B-2 bombers, F-15s, F-16s, EA-18G Growlers, aerial refueling' },
  { category: 'Cruise Missiles (Tomahawks)', amount: '$270M', desc: '220+ Tomahawk cruise missiles at ~$1.2M each from US ships and submarines' },
  { category: 'NATO Support (Unified Protector)', amount: '$150M', desc: 'US share of NATO operations after handoff — ISR, refueling, logistics' },
  { category: 'Intelligence & Surveillance', amount: '$80M', desc: 'Predator drones, Global Hawk, satellite imagery, signals intelligence' },
  { category: 'Naval Operations', amount: '$50M', desc: 'Carrier group, amphibious ships, submarines in Mediterranean' },
  { category: 'Total Direct US Cost', amount: '$1.1B', desc: 'Pentagon estimate; does not include long-term consequences' },
]

const casualties = [
  { group: 'US Combat Deaths', count: '0', note: 'No US troops on the ground (officially)' },
  { group: 'NATO Military Deaths', count: '0', note: 'Air-only campaign from safe altitude' },
  { group: 'Libyan Civilians Killed (NATO)', count: '72-1,100+', note: 'NATO acknowledged 72; Libyan government claimed 1,100+' },
  { group: 'Gaddafi Forces Killed', count: '~10,000', note: 'NATO strikes and rebel forces combined' },
  { group: 'Rebel Forces Killed', count: '~4,700', note: 'Various rebel factions fighting Gaddafi' },
  { group: 'Post-Intervention Deaths (2012-2026)', count: '25,000+', note: 'Civil wars, militia fighting, migrant deaths — the aftermath dwarfs the intervention' },
]

const timeline = [
  { year: 'Feb 15, 2011', title: 'Arab Spring Reaches Libya', desc: 'Inspired by revolutions in Tunisia and Egypt, protests erupt in Benghazi against Muammar Gaddafi\'s 42-year dictatorship. Security forces fire on protesters. Gaddafi calls protesters "rats" and "cockroaches" and vows to hunt them down "house by house, alley by alley."' },
  { year: 'Feb-Mar 2011', title: 'Civil War Erupts', desc: 'Libya fractures. Eastern Libya falls to rebels in Benghazi. A National Transitional Council (NTC) forms. Gaddafi sends tanks and mercenaries east. By mid-March, his forces approach Benghazi. A massacre appears imminent — or so the interventionists argue.' },
  { year: 'Mar 17, 2011', title: 'UN Resolution 1973', desc: 'The Security Council authorizes "all necessary measures" to protect civilians. Russia and China abstain — a decision they will deeply regret. The resolution explicitly excludes "a foreign occupation force." The authorization is for civilian protection, not regime change. This distinction is ignored immediately.' },
  { year: 'Mar 19, 2011', title: 'Operation Odyssey Dawn', desc: 'French jets strike Gaddafi\'s forces outside Benghazi. US Navy launches 220+ Tomahawk cruise missiles at Libyan air defenses. B-2 stealth bombers fly 25-hour round trips from Missouri. Obama tells the nation it will be "days, not weeks." It lasts 7 months.' },
  { year: 'Mar 31, 2011', title: 'NATO Takes Over', desc: 'Command transfers to NATO as Operation Unified Protector. Obama calls this "leading from behind." In practice, the US continues providing the majority of ISR, refueling, and precision strike capabilities. NATO cannot wage war without the US; the handoff is cosmetic.' },
  { year: 'May 20, 2011', title: 'War Powers Act Deadline', desc: 'The 60-day clock expires. Obama must get Congressional authorization or withdraw. He does neither. The White House argues Libya doesn\'t constitute "hostilities" because no US troops are on the ground. Even the Pentagon\'s own lawyers disagree with this interpretation.' },
  { year: 'Jun 2011', title: 'NATO Kills Civilians', desc: 'NATO strikes increasingly hit civilian targets. On June 19, an airstrike hits a residential compound in Tripoli, killing 15 civilians including 3 children. Human Rights Watch documents at least 72 civilian deaths in 8 NATO strikes — a figure likely far below the actual total.' },
  { year: 'Aug 21-28, 2011', title: 'Battle of Tripoli', desc: 'Rebel forces, backed by British SAS, French DGSE, and Qatari special operations on the ground (despite "no occupation force"), assault Tripoli. Gaddafi\'s regime collapses. NATO bombs the Great Man-Made River — Libya\'s massive irrigation system. Tripoli descends into chaos as rival militias compete.' },
  { year: 'Oct 20, 2011', title: 'Gaddafi Killed', desc: 'Gaddafi is found in a drainage pipe near Sirte. Captured by rebels, beaten, sodomized with a bayonet, and shot. Hillary Clinton, informed on camera, quips: "We came, we saw, he died" — then laughs. The UN resolution authorized civilian protection. It produced a snuff video of a head of state being lynched.' },
  { year: 'Sep 11, 2012', title: 'Benghazi Attack', desc: 'Islamist militants attack the US consulate in Benghazi, killing Ambassador Chris Stevens and three others. The attack becomes a political weapon in US domestic politics — but the deeper question goes unasked: why was there a power vacuum in which such attacks were possible? Because the US destroyed the state and had no plan for what followed.' },
  { year: '2014-2020', title: 'Second Civil War', desc: 'Libya splits into two rival governments. The GNA in Tripoli vs. General Haftar\'s LNA in the east. Turkey backs the GNA; Russia, Egypt, and UAE back Haftar. ISIS establishes a foothold in Sirte. Gaddafi\'s weapons flood across Africa, fueling conflicts in Mali, Niger, Nigeria, and Syria.' },
  { year: '2017-Present', title: 'Slave Markets', desc: 'CNN broadcasts footage of African migrants being sold at slave auctions in Libya. State collapse has turned Libya into a hub for human trafficking. Hundreds of thousands attempt Mediterranean crossings; thousands drown. The "humanitarian intervention" created the largest humanitarian crisis in the Mediterranean.' },
]

const keyFigures = [
  { name: 'Barack Obama', role: 'President', desc: 'Authorized the intervention, later called it his "worst mistake." Pulled in by the Benghazi massacre narrative, Samantha Power\'s R2P advocacy, and Clinton\'s hawkishness. Tried to limit involvement by handing off to NATO but had no plan for post-Gaddafi Libya. In 2016: "We didn\'t have the same follow-up."' },
  { name: 'Hillary Clinton', role: 'Secretary of State', desc: 'The most forceful advocate for intervention. Saw Libya as a showcase for "smart power" and R2P. Her emails revealed she was briefed that Sarkozy had financial motives (Gaddafi\'s gold, French oil). Her "We came, we saw, he died" became the defining moment of callous interventionism.' },
  { name: 'Samantha Power', role: 'NSC Senior Director', desc: 'Author of "A Problem from Hell" arguing the US must prevent genocide. The intellectual architect of the intervention, pushing R2P. Libya was supposed to be R2P\'s proof of concept. Instead, it became R2P\'s gravestone — removing a dictator without a plan creates worse outcomes.' },
  { name: 'Muammar Gaddafi', role: 'Dictator (42 years)', desc: 'Eccentric, brutal, and strategically contained. Had voluntarily surrendered his nuclear program in 2003. Was cooperating on counterterrorism and migration control. His removal created a power vacuum no one could fill. The message to other dictators: never give up your nuclear weapons. North Korea noticed.' },
  { name: 'Nicolas Sarkozy', role: 'President of France', desc: 'France led the intervention. Motives weren\'t purely humanitarian: Clinton\'s emails revealed concerns about Gaddafi\'s gold reserves, French oil interests, and Sarkozy\'s desire for prestige. In 2018, Sarkozy was investigated for allegedly receiving €50 million in illegal campaign financing from Gaddafi — the man he helped kill.' },
]

const whatWeGot = [
  { label: 'Civilian Protection', value: 'Failed', desc: 'May have prevented a Benghazi massacre. But civil wars, militia violence, and state collapse have killed 25,000+ since — far more than Gaddafi likely would have.' },
  { label: 'Regime Change', value: 'Achieved', desc: 'Gaddafi was killed. No stable replacement emerged. 14 years of failed state, two civil wars, three rival governments.' },
  { label: 'Zero US Deaths', value: 'Temporarily', desc: 'Zero during the bombing. Ambassador Stevens and 3 others killed in Benghazi in 2012 — a direct consequence of the power vacuum.' },
  { label: 'Regional Stability', value: 'Destroyed', desc: 'Gaddafi\'s weapons arsenals flooded across Africa. The Mali coup (2012), Boko Haram\'s expansion, and the Sahel crisis are all downstream of Libya\'s collapse.' },
  { label: 'Nuclear Nonproliferation', value: 'Devastated', desc: 'Gaddafi gave up his nuclear program in 2003. He was overthrown in 2011. North Korea explicitly cited Libya as why it would never denuclearize. Iran took notes.' },
  { label: 'Human Rights', value: 'Catastrophic', desc: 'Slave markets in Libya. Thousands drowning in the Mediterranean. Africa\'s worst migrant crisis. The "humanitarian intervention" created a humanitarian catastrophe.' },
]

const domesticComparison = [
  { item: 'Fund the National Cancer Institute for 6 months', cost: '$1.1B', note: 'NCI budget was ~$5B in 2011' },
  { item: 'Provide clean water infrastructure for Flint (5x over)', cost: '$1.1B', note: 'Flint water crisis fix cost ~$200M' },
  { item: 'Build 11,000 affordable housing units', cost: '$1.1B', note: 'At 2011 construction costs' },
  { item: 'Fund 110,000 Pell Grants for a year', cost: '$1.1B', note: 'At maximum 2011 grant of ~$5,500' },
]

const faqs = [
  {
    q: 'How much did the Libya intervention cost?',
    a: 'Direct US military costs were approximately $1.1 billion, including $550 million for air operations, $270 million for Tomahawk cruise missiles, and the remainder for NATO support, intelligence, and naval operations. Total NATO costs were approximately $3.5 billion. The long-term costs — destabilization of North Africa, migrant crisis, Sahel conflicts fueled by Libyan weapons — are incalculable.',
  },
  {
    q: 'Was the Libya intervention legal?',
    a: 'UN Security Council Resolution 1973 authorized "all necessary measures" to protect civilians — but explicitly prohibited a "foreign occupation force" and was meant for civilian protection, not regime change. NATO quickly exceeded the mandate by targeting Gaddafi\'s command infrastructure and supporting rebel offensives. Domestically, Obama never received Congressional authorization and argued the War Powers Act didn\'t apply because the operation didn\'t constitute "hostilities" — an argument rejected by his own Pentagon lawyers.',
  },
  {
    q: 'Why did Obama call Libya his worst mistake?',
    a: 'In a 2016 interview, Obama called the Libya aftermath his "worst mistake" — specifically the failure to plan for post-Gaddafi governance. He blamed the UK and France for not following through but acknowledged the US share of responsibility. Libya validated the critics of humanitarian intervention: removing a dictator without a plan for what follows creates worse outcomes than the dictatorship. The lesson was clear. It was also learned too late.',
  },
  {
    q: 'What happened to Libya after Gaddafi?',
    a: 'Libya became a failed state. Hundreds of armed militias carved up the country. A second civil war erupted in 2014 between rival governments. ISIS established a presence in Sirte. Gaddafi\'s weapons flooded across Africa, fueling conflicts in Mali, Niger, and the Sahel. African migrants are sold in open slave markets. Thousands die attempting Mediterranean crossings. As of 2026, Libya has no unified government and no clear path to stability.',
  },
  {
    q: 'How did Libya affect nuclear nonproliferation?',
    a: 'Devastatingly. Gaddafi voluntarily surrendered his nuclear weapons program in 2003 in exchange for normalized relations with the West. Eight years later, NATO helped overthrow and kill him. North Korea explicitly cited Libya as proof that giving up nuclear weapons invites regime change. Kim Jong-un referenced Gaddafi by name when refusing denuclearization talks. Iran hardliners used Libya to argue against the nuclear deal. The lesson was clear: nuclear weapons are the only guarantee against American-backed regime change.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function Libya2011Page() {
  return (
    <main className="min-h-screen">
      {/* ── Dark Hero ─────────────────────────────────────────── */}
      <section className="bg-stone-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'US Wars', href: '/us-wars-list' }, { label: 'Libya 2011' }]} />
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] mt-6 mb-4 leading-tight">
            Operation Odyssey Dawn:<br />
            <span className="text-[#dc2626]">The War Obama Said Wasn&apos;t a War</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-3xl">
            In March 2011, Barack Obama launched a 7-month bombing campaign against Libya without
            Congressional authorization — then argued it wasn&apos;t &ldquo;hostilities.&rdquo;
            NATO flew <strong className="text-[#dc2626]">26,500 sorties</strong> and helped rebels
            kill Gaddafi. Cost: <strong className="text-[#dc2626]">$1.1 billion</strong>. Result:
            Libya became a <strong className="text-white">failed state</strong> with{' '}
            <strong className="text-[#dc2626]">slave markets</strong>, an ISIS foothold, and the
            worst migrant crisis in Mediterranean history. Obama later called it his{' '}
            <strong className="text-white">&ldquo;worst mistake.&rdquo;</strong> North Korea cited it
            as why they&apos;d never give up their nukes.
          </p>
          <ShareButtons title="Operation Odyssey Dawn: The War Obama Said Wasn't a War" />

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
              The Cost: $1.1 Billion to Create a Failed State
            </h2>
            <p className="text-stone-600 mb-6">
              The direct military cost was relatively modest — a bargain by Pentagon standards. But the
              true cost is measured in the 14 years of chaos, the thousands of dead, the slave markets,
              the drowned migrants, and the nuclear nonproliferation regime that was shattered.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-stone-300">
                    <th className="text-left py-3 font-semibold text-stone-800">Category</th>
                    <th className="text-right py-3 font-semibold text-stone-800">Cost</th>
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
              The Human Cost: During and After
            </h2>
            <p className="text-stone-600 mb-6">
              The intervention itself killed relatively few. The aftermath has killed tens of thousands
              and counting. The 2011 deaths are a rounding error compared to the catastrophe that followed.
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
              Timeline: From Arab Spring to Slave Markets
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
              What We Got: The Ultimate Blowback
            </h2>
            <p className="text-stone-600 mb-6">
              By every metric that matters — stability, human rights, nonproliferation, regional security —
              Libya is worse than before the intervention. Dramatically, measurably, catastrophically worse.
            </p>
            <div className="space-y-4">
              {whatWeGot.map((item) => (
                <div key={item.label} className="bg-white rounded-lg p-5 border border-stone-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-stone-800">{item.label}</span>
                    <span className={`text-sm font-mono px-2 py-0.5 rounded ${
                      item.value === 'Failed' || item.value === 'Destroyed' || item.value === 'Devastated' || item.value === 'Catastrophic' ? 'bg-red-100 text-[#dc2626]' :
                      item.value === 'Temporarily' || item.value === 'Achieved' ? 'bg-amber-100 text-amber-700' :
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
              What $1.1 Billion Could Have Bought Instead
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
                Libya is the single most powerful argument against humanitarian intervention. Every prediction
                made by intervention skeptics came true. Every promise made by intervention advocates was broken.
              </p>
            </div>
            <div className="space-y-4 text-stone-700">
              <p>
                <strong className="text-stone-900">1. The &ldquo;Pottery Barn Rule&rdquo; is real.</strong>{' '}
                Colin Powell warned about Iraq: &ldquo;You break it, you own it.&rdquo; Obama broke Libya and
                didn&apos;t own it. The result was worse than if he&apos;d never intervened. Gaddafi was a dictator,
                but he provided stability, controlled migration, and had surrendered his WMD program. Removing him
                without a plan created a vacuum filled by militias, ISIS, and slave traders.
              </p>
              <p>
                <strong className="text-stone-900">2. Nuclear nonproliferation is dead.</strong>{' '}
                Gaddafi gave up his nuclear weapons in 2003. He was overthrown and killed in 2011. Kim Jong-un said:
                &ldquo;Libya is a model of what happens when you give up nuclear weapons.&rdquo; The Libya lesson is
                the single biggest obstacle to future nonproliferation agreements. Every dictator now knows: nuclear
                weapons are the only guarantee against American-backed regime change.
              </p>
              <p>
                <strong className="text-stone-900">3. Responsibility to Protect (R2P) is discredited.</strong>{' '}
                Libya was supposed to prove that humanitarian intervention works. Instead, it proved that Western
                powers will use humanitarian language to pursue regime change, exceed their mandates, and then
                abandon the resulting chaos. Russia and China now veto any Security Council resolution that could
                enable a repeat — which is why Syria burned for a decade with no intervention.
              </p>
              <p>
                <strong className="text-stone-900">4. The weapons cascade.</strong>{' '}
                Gaddafi had the largest weapons stockpile in Africa. When the state collapsed, those weapons —
                including anti-aircraft missiles, explosives, and heavy weapons — flooded across the Sahel. The
                2012 Mali crisis, Boko Haram&apos;s escalation in Nigeria, and ongoing conflicts in Niger and
                Chad are all fueled by Libyan weapons. The intervention destabilized half of Africa.
              </p>
              <p>
                <strong className="text-stone-900">5. The Mediterranean migrant crisis.</strong>{' '}
                Gaddafi, for all his brutality, controlled Libya&apos;s Mediterranean coast and cooperated with
                Europe on migration. His removal turned Libya into the primary departure point for African migrants
                attempting to reach Europe. Thousands have drowned. Those who don&apos;t drown face detention,
                torture, and slave auctions. The &ldquo;humanitarian&rdquo; intervention created one of the worst
                humanitarian crises of the 21st century.
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
                { href: '/kosovo', label: 'Kosovo — The Template Libya Followed' },
                { href: '/syria-intervention', label: 'Syria — Where R2P Died After Libya' },
                { href: '/iraq-war', label: 'Iraq War — The Other Regime Change Disaster' },
                { href: '/us-wars-list', label: 'Complete List of US Wars' },
                { href: '/congress-and-war', label: 'Congress & War — Bypassed Again' },
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
              <li>Human Rights Watch — &ldquo;Unacknowledged Deaths: Civilian Casualties in NATO&apos;s Air Campaign in Libya&rdquo; (2012)</li>
              <li>Congressional Research Service — &ldquo;Libya: Transition and US Policy&rdquo; (2012)</li>
              <li>House of Commons Foreign Affairs Committee — &ldquo;Libya: Examination of Intervention and Collapse&rdquo; (2016)</li>
              <li>Department of Defense — Libya Operations Cost Estimates (2011)</li>
              <li>UN Security Council Resolution 1973 (March 17, 2011)</li>
              <li>The Atlantic — &ldquo;The Obama Doctrine&rdquo; by Jeffrey Goldberg (2016)</li>
              <li>Amnesty International — &ldquo;Libya: The Forgotten Victims of NATO Strikes&rdquo; (2012)</li>
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
            headline: 'Operation Odyssey Dawn: Libya 2011 — $1.1B Cost, Failed State, Slave Markets',
            description: 'Obama bombed Libya for 7 months, killed Gaddafi, created a failed state with slave markets and ISIS. $1.1B cost. The ultimate blowback.',
            url: 'https://warcosts.org/libya-2011',
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
              { '@type': 'ListItem', position: 3, name: 'Libya 2011', item: 'https://warcosts.org/libya-2011' },
            ],
          }),
        }}
      />
    </main>
  )
}
