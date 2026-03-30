import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'
import { CostByCountry, ForceComposition } from './charts'

export const metadata: Metadata = {
  title: 'Gulf War Cost — $102 Billion, 100-Hour Ground War, Highway of Death | WarCosts',
  description: 'The Gulf War (1990-1991) cost $102 billion, killed 383 US troops and 20,000-35,000 Iraqi soldiers. Operation Desert Shield/Storm expelled Iraq from Kuwait in 100 hours. Complete cost breakdown, timeline, and consequences.',
  keywords: ['Gulf war cost', 'Desert Storm', 'Desert Shield', 'Highway of Death', 'Gulf War syndrome', 'Kuwait invasion', 'Norman Schwarzkopf', '100 hour war'],
  openGraph: {
    title: 'The Gulf War — $102 Billion, 100 Hours, and the Seeds of Future Wars',
    description: 'The quick victory that created decades of blowback. Every dollar. Every consequence.',
    url: 'https://warcosts.org/gulf-war',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Duration', value: '43 Days (combat)' },
  { label: 'Total Cost (2023 $)', value: '$102 Billion' },
  { label: 'US Military Deaths', value: '383' },
  { label: 'Iraqi Military Deaths', value: '20,000–35,000' },
  { label: 'Iraqi Civilian Dead', value: '3,500+' },
  { label: 'Troops Deployed', value: '697,000' },
]

const costBreakdown = [
  { category: 'US Direct Military Cost', amount: 61, desc: 'Pentagon operations, logistics, munitions for Desert Shield/Storm' },
  { category: 'Allied Contributions', amount: 36, desc: 'Saudi Arabia ($16B), Kuwait ($16B), Japan ($10B), Germany ($6.6B), UAE ($4B)' },
  { category: 'Veterans Healthcare / Gulf War Illness', amount: 3.5, desc: 'Long-term care for 250,000+ veterans with Gulf War Syndrome' },
  { category: 'Infrastructure (Saudi basing)', amount: 1.5, desc: 'Construction of bases and facilities in Saudi Arabia' },
]

const alliedContributions = [
  { country: 'Saudi Arabia', amount: 16 },
  { country: 'Kuwait', amount: 16 },
  { country: 'Japan', amount: 10 },
  { country: 'Germany', amount: 6.6 },
  { country: 'UAE', amount: 4 },
  { country: 'South Korea', amount: 0.4 },
]

const forceComposition = [
  { name: 'US Army', value: 245 },
  { name: 'US Marines', value: 92 },
  { name: 'US Air Force', value: 60 },
  { name: 'US Navy', value: 75 },
  { name: 'Saudi Arabia', value: 100 },
  { name: 'UK', value: 53 },
  { name: 'Egypt', value: 40 },
  { name: 'Other Coalition', value: 32 },
]

const timeline = [
  { year: 'Aug 2, 1990', title: 'Iraq Invades Kuwait', desc: 'Saddam Hussein sends 100,000 troops into Kuwait, conquering the tiny nation in less than 12 hours. Iraq claims Kuwait is historically Iraqi territory and accuses Kuwait of slant-drilling into Iraqi oil fields. The real motivation: Iraq is $80 billion in debt from the Iran-Iraq War and Kuwait\'s oil wealth is irresistible.' },
  { year: 'Aug 6, 1990', title: 'Operation Desert Shield Begins', desc: 'Bush deploys US forces to Saudi Arabia to deter an Iraqi invasion of the Saudi oil fields. The deployment is initially defensive. Over the next five months, the US builds up a force of 697,000 troops in Saudi Arabia — a massive logistical achievement. Bin Laden offers to defend Saudi Arabia with his mujahideen instead; the Saudi royals choose America. This perceived insult to Islam will drive bin Laden\'s jihad against the US.' },
  { year: 'Aug–Nov 1990', title: 'Diplomatic Maneuvering', desc: 'The UN passes 12 resolutions demanding Iraqi withdrawal. Economic sanctions are imposed. Bush assembles a 35-nation coalition. Congress debates authorization — it passes narrowly (52-47 in the Senate). The April Glaspie controversy: the US ambassador to Iraq appeared to signal American indifference to an Iraqi invasion just days before it happened.' },
  { year: 'Nov 29, 1990', title: 'UN Deadline Set', desc: 'UN Resolution 678 authorizes "all necessary means" to expel Iraq from Kuwait if it doesn\'t withdraw by January 15, 1991. Saddam refuses. The largest military mobilization since Vietnam continues.' },
  { year: 'Jan 17, 1991', title: 'Desert Storm: Air War Begins', desc: 'The coalition launches the most intensive air campaign in history. 2,780 sorties on the first day alone. Stealth aircraft, cruise missiles, precision-guided munitions — many used in combat for the first time. The air campaign continues for 38 days, destroying Iraq\'s air force, air defenses, communications, bridges, and military infrastructure. Iraqi soldiers are bombed relentlessly in their positions.' },
  { year: 'Jan 18, 1991', title: 'Scud Missile Attacks', desc: 'Iraq launches Scud missiles at Israel and Saudi Arabia, attempting to draw Israel into the war and fracture the Arab coalition. The US deploys Patriot missile batteries (later revealed to be far less effective than claimed). Israel is pressured not to retaliate. 28 US soldiers die in a single Scud strike on a barracks in Dhahran.' },
  { year: 'Jan 25, 1991', title: 'Oil Spill and Oil Fires', desc: 'Iraq deliberately releases 400 million gallons of oil into the Persian Gulf — the largest deliberate oil spill in history. Iraqi forces later set fire to 600+ Kuwaiti oil wells. The fires burn for months, creating an environmental catastrophe. Cleanup costs exceed $1.5 billion.' },
  { year: 'Feb 13, 1991', title: 'Amiriyah Shelter Bombing', desc: 'US stealth bombers strike the Amiriyah shelter in Baghdad with two laser-guided bombs. Intelligence says it\'s a military command bunker. It\'s filled with civilians — 408 people, mostly women and children, are incinerated. The US calls it a tragic mistake. It remains one of the most controversial incidents of the war.' },
  { year: 'Feb 24, 1991', title: 'Ground War Begins', desc: 'Coalition ground forces launch a massive flanking attack through the Iraqi desert — the famous "left hook." Marines push directly into Kuwait. The Iraqi army, demoralized by 38 days of bombing, collapses. Many units surrender en masse. Some Iraqi soldiers surrender to drones and journalists.' },
  { year: 'Feb 26-27, 1991', title: 'Highway of Death', desc: 'Iraqi forces retreat from Kuwait City along Highway 80. Coalition aircraft attack the retreating columns for hours, destroying thousands of vehicles and killing unknown numbers of Iraqi soldiers and civilians. The images of the "Highway of Death" — miles of burned vehicles and charred bodies — shock the world and contribute to Bush\'s decision to end the war.' },
  { year: 'Feb 28, 1991', title: 'Ceasefire Declared', desc: 'After exactly 100 hours of ground combat, Bush declares a ceasefire. Kuwait is liberated. The Iraqi army is devastated — but Saddam Hussein remains in power. The Republican Guard, his elite force, largely escapes. Bush chooses not to march on Baghdad. This decision will be debated for decades — and "corrected" by his son in 2003 with catastrophic results.' },
  { year: 'Mar 1991', title: 'Uprisings Crushed', desc: 'Encouraged by Bush\'s call for Iraqis to overthrow Saddam, Shia in the south and Kurds in the north rise up. The US stands by as Saddam crushes both rebellions with helicopter gunships that the ceasefire agreement allows. Tens of thousands are massacred. The betrayal poisons US-Iraqi relations for a generation.' },
]

const keyFigures = [
  { name: 'George H.W. Bush', role: 'US President', desc: 'Built a genuine international coalition and managed the war effectively. His decision to stop at Kuwait\'s liberation (rather than marching to Baghdad) was wise at the time but haunted his legacy when his son "finished the job."' },
  { name: 'Norman Schwarzkopf', role: 'Coalition Commander', desc: 'Designed and executed the "left hook" flanking maneuver that routed the Iraqi army in 100 hours. Became a national hero. Later expressed regret that the ceasefire allowed the Republican Guard to escape.' },
  { name: 'Colin Powell', role: 'Chairman, Joint Chiefs', desc: 'Architect of the "Powell Doctrine" — overwhelming force, clear objectives, exit strategy. The Gulf War was its vindication. He would later violate his own doctrine at the UN in 2003, selling the Iraq War.' },
  { name: 'Dick Cheney', role: 'Secretary of Defense', desc: 'Managed the Pentagon during Desert Storm. Argued against marching to Baghdad in 1991, warning it would create a "quagmire." As Vice President in 2003, he championed exactly that quagmire.' },
  { name: 'Saddam Hussein', role: 'Iraqi Dictator', desc: 'Miscalculated spectacularly by invading Kuwait. Survived the war, crushed internal uprisings, and remained in power for 12 more years — until the 2003 invasion finally removed him.' },
  { name: 'April Glaspie', role: 'US Ambassador to Iraq', desc: 'Met with Saddam days before the invasion. Her statement that the US had "no opinion" on Arab-Arab disputes was interpreted as a green light. The controversy over whether the US inadvertently encouraged the invasion has never been fully resolved.' },
]

const faqs = [
  {
    q: 'How much did the Gulf War cost?',
    a: 'The Gulf War cost approximately $61 billion for direct US military operations, but allied nations — primarily Saudi Arabia, Kuwait, Japan, and Germany — reimbursed about $36 billion, making it the most heavily subsidized war in American history. The net US cost was roughly $25 billion. However, long-term costs including Gulf War Illness treatment for 250,000+ affected veterans add billions more.',
  },
  {
    q: 'How many people died in the Gulf War?',
    a: '383 US military personnel died (147 in combat, 236 from accidents and other causes). Iraqi military deaths are estimated at 20,000-35,000, though some estimates range much higher. An estimated 3,500+ Iraqi civilians were killed during the air campaign and ground war. The subsequent sanctions regime killed far more — estimates range from 100,000 to 500,000 Iraqi children died from sanctions-related malnutrition and disease in the 1990s.',
  },
  {
    q: 'What is Gulf War Syndrome?',
    a: 'Gulf War Illness (also called Gulf War Syndrome) affects an estimated 250,000 of the 697,000 US troops deployed — over one-third. Symptoms include chronic fatigue, muscle pain, cognitive difficulties, and neurological problems. Likely causes include exposure to depleted uranium munitions, oil well fire smoke, nerve agent exposure from the Khamisiyah demolition, and/or experimental anti-nerve agent pills (pyridostigmine bromide) given to troops. The VA denied the condition existed for years.',
  },
  {
    q: 'Why didn\'t the US remove Saddam Hussein in 1991?',
    a: 'Bush, Powell, and Cheney all argued that marching on Baghdad would fracture the coalition, turn a liberation into an occupation, and create a power vacuum in Iraq. They were exactly right — as the 2003 invasion proved. Dick Cheney specifically warned in 1991 that occupying Iraq would be a "quagmire." He championed exactly that quagmire 12 years later as Vice President.',
  },
  {
    q: 'What was the Highway of Death?',
    a: 'On February 26-27, 1991, Iraqi forces retreating from Kuwait along Highway 80 were attacked by coalition aircraft for hours. Thousands of vehicles — military and civilian — were destroyed. The exact death toll is unknown (estimates range from 200 to 10,000+). The images of charred vehicles and bodies stretching for miles shocked the world and contributed to Bush\'s decision to declare a ceasefire.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function GulfWarPage() {
  const totalCost = costBreakdown.reduce((s, r) => s + r.amount, 0)

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Gulf War' }]} />
        <ShareButtons title="Gulf War — $102B, 100 Hours, Seeds of Future Wars" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Gulf War
          </h1>
          <p className="text-lg text-stone-500 mb-2">1990–1991 · Operation Desert Shield / Desert Storm</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            The <strong className="text-[#991b1b]">100-hour ground war</strong> that expelled Iraq from Kuwait,
            cost <strong className="text-[#991b1b]">$102 billion</strong>, and planted the seeds for{' '}
            <strong className="text-[#991b1b]">three decades</strong> of Middle East intervention.
            The &ldquo;quick victory&rdquo; that never ended.
          </p>
        </header>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {keyStats.map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl md:text-2xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The War That Changed Everything
          </h2>
          <p className="text-stone-700 mb-4">
            The Gulf War was sold as a clean, quick, justified war — the anti-Vietnam. And in narrow military terms,
            it was spectacularly successful: a 43-day air campaign followed by a 100-hour ground war that liberated
            Kuwait and destroyed the Iraqi military. American casualties were remarkably low.
          </p>
          <p className="text-stone-700 mb-4">
            But the consequences were catastrophic. The permanent basing of US troops in Saudi Arabia — the land of
            Mecca and Medina — radicalized Osama bin Laden and became a primary motivation for the 9/11 attacks.
            The post-war sanctions regime killed hundreds of thousands of Iraqi civilians. The decision to leave
            Saddam in power created the &ldquo;unfinished business&rdquo; that led to the 2003 invasion.
            And the seductive myth of easy, low-cost American military dominance made every subsequent war seem
            achievable.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
            <p className="text-stone-800 italic mb-2">
              &ldquo;By God, we&apos;ve kicked the Vietnam syndrome once and for all.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— President George H.W. Bush, March 1, 1991</p>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Cost Breakdown
          </h2>
          <p className="text-stone-700 mb-6">
            The Gulf War was unique in that allied nations reimbursed most of the cost. Saudi Arabia and Kuwait each
            contributed $16 billion, Japan $10 billion, Germany $6.6 billion. The net cost to US taxpayers was
            roughly $25 billion for the war itself — though Gulf War Illness has added billions in ongoing healthcare costs.
          </p>
          <div className="overflow-x-auto mb-6">
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
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">${r.amount}B</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-stone-400 font-bold">
                  <td className="py-2 text-stone-900">Total</td>
                  <td className="py-2 text-right font-mono text-[#991b1b]">${totalCost}B</td>
                  <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">Most heavily subsidized war in US history</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-semibold text-stone-800 mb-3">Allied Contributions</h3>
          <CostByCountry data={alliedContributions} />
        </section>

        {/* Force Composition */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Coalition Force Composition
          </h2>
          <p className="text-stone-700 mb-4">
            The Gulf War coalition included 35 nations — the broadest military coalition since World War II.
            697,000 US personnel deployed alongside 254,000 allied troops.
          </p>
          <ForceComposition data={forceComposition} />
        </section>

        {/* Casualties */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Human Cost
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">Coalition Losses</h3>
              <ul className="text-sm text-stone-600 space-y-2">
                <li><strong className="text-[#991b1b]">383</strong> US military killed (147 combat)</li>
                <li><strong className="text-[#991b1b]">467</strong> US military wounded</li>
                <li><strong className="text-[#991b1b]">145</strong> non-US coalition killed</li>
                <li><strong className="text-[#991b1b]">250,000+</strong> US veterans with Gulf War Illness</li>
                <li><strong className="text-[#991b1b]">37</strong> US killed by friendly fire</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">Iraqi Losses</h3>
              <ul className="text-sm text-stone-600 space-y-2">
                <li><strong className="text-[#991b1b]">20,000–35,000</strong> Iraqi soldiers killed</li>
                <li><strong className="text-[#991b1b]">75,000</strong> Iraqi soldiers wounded</li>
                <li><strong className="text-[#991b1b]">80,000+</strong> Iraqi POWs</li>
                <li><strong className="text-[#991b1b]">3,500+</strong> Iraqi civilians killed in bombing</li>
                <li><strong className="text-[#991b1b]">100,000+</strong> Shia/Kurdish civilians killed in post-war uprisings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline
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

        {/* Highway of Death */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Highway of Death
          </h2>
          <p className="text-stone-700 mb-4">
            On the night of February 26-27, 1991, Iraqi forces fleeing Kuwait City along Highway 80 were
            attacked by coalition aircraft for hours. F-15Es, A-10s, and Navy aircraft struck the retreating
            columns with cluster bombs, Maverick missiles, and cannon fire.
          </p>
          <p className="text-stone-700 mb-4">
            The resulting images — miles of destroyed vehicles, charred remains, personal belongings scattered
            across the desert — became the defining imagery of the war. The column included not just military
            vehicles but stolen civilian cars, buses, and trucks carrying Iraqi soldiers, Palestinian workers,
            and Kuwaiti hostages.
          </p>
          <p className="text-stone-700">
            The Highway of Death raised profound questions about proportionality and the laws of war.
            Were the retreating forces legitimate military targets or a surrendering army? The distinction matters
            under international law. The images were so disturbing that they contributed to Bush&apos;s decision
            to halt the ground war at 100 hours — before the Republican Guard was fully destroyed.
          </p>
        </section>

        {/* Gulf War Syndrome */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Gulf War Illness: The Invisible Casualties
          </h2>
          <p className="text-stone-700 mb-4">
            Of the 697,000 US troops who served in the Gulf War, an estimated 250,000 — more than one-third —
            developed Gulf War Illness. Symptoms include chronic fatigue, widespread pain, cognitive dysfunction,
            gastrointestinal problems, and respiratory issues.
          </p>
          <p className="text-stone-700 mb-4">
            For years, the Pentagon and VA dismissed the condition as stress-related or psychosomatic.
            Veterans were told their symptoms were &ldquo;all in their heads.&rdquo; Research eventually identified
            likely causes: exposure to nerve agents released during the Khamisiyah ammunition depot demolition (which
            the Pentagon initially denied), depleted uranium dust from munitions, oil well fire smoke, and
            pyridostigmine bromide pills given to troops as a nerve agent prophylactic.
          </p>
          <p className="text-stone-700">
            The Gulf War Illness saga is a textbook case of the government&apos;s failure to care for its veterans —
            deny, delay, and wait for them to die. Many affected veterans waited decades for recognition and compensation.
          </p>
        </section>

        {/* Key Figures */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Key Figures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFigures.map((fig) => (
              <div key={fig.name} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <h3 className="font-semibold text-stone-800">{fig.name}</h3>
                <p className="text-xs text-[#991b1b] mb-2">{fig.role}</p>
                <p className="text-sm text-stone-600">{fig.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy: The War That Never Ended
          </h2>
          <div className="space-y-4">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">US Troops in Saudi Arabia → 9/11</h3>
              <p className="text-sm text-stone-600">
                The permanent stationing of US troops in Saudi Arabia after the Gulf War was Osama bin Laden&apos;s
                primary grievance against the United States. He cited it repeatedly as justification for the 9/11
                attacks. The Gulf War didn&apos;t just fail to bring stability — it directly caused the worst
                terrorist attack in American history.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">Sanctions Kill Hundreds of Thousands</h3>
              <p className="text-sm text-stone-600">
                Post-war sanctions devastated Iraqi civilians while barely affecting Saddam&apos;s regime. UNICEF
                estimated 500,000 excess child deaths from sanctions. Secretary of State Madeleine Albright,
                asked if the price was worth it, answered: &ldquo;We think the price is worth it.&rdquo;
                The sanctions radicalized a generation of Iraqis against the United States.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The Myth of Easy Victory</h3>
              <p className="text-sm text-stone-600">
                The Gulf War created the dangerous illusion that American military power could quickly solve
                complex geopolitical problems at low cost. This myth directly enabled the decision to invade Iraq
                in 2003 — Rumsfeld and Wolfowitz assumed it would be another quick victory.
                It was a $3 trillion, decade-long catastrophe instead.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The 2003 Invasion</h3>
              <p className="text-sm text-stone-600">
                The decision to leave Saddam in power created the &ldquo;unfinished business&rdquo; narrative that
                George W. Bush, Cheney, and the neoconservatives exploited to justify the 2003 invasion.
                The Gulf War&apos;s restraint — its single genuine strategic success — became the pretext for its
                catastrophic sequel.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/iraq-war', label: 'Iraq War (2003) — The Catastrophic Sequel' },
              { href: '/war-on-terror', label: 'War on Terror — Born from Gulf War Blowback' },
              { href: '/cost-of-war', label: 'Total Cost of US Wars' },
              { href: '/analysis/oil-and-war', label: 'Oil and War' },
              { href: '/analysis/lies-that-started-wars', label: 'Lies That Started Wars' },
              { href: '/veterans', label: 'Veterans — Gulf War Illness' },
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

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Sources</h2>
          <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
            <li>Congressional Research Service — Costs of Major U.S. Wars</li>
            <li>Department of Defense — Gulf War Casualty Statistics</li>
            <li>Research Advisory Committee on Gulf War Veterans&apos; Illnesses — Final Report (2008)</li>
            <li>Rick Atkinson — <em>Crusade: The Untold Story of the Persian Gulf War</em></li>
            <li>Michael Gordon & Bernard Trainor — <em>The Generals&apos; War</em></li>
            <li>Government Accountability Office — Operation Desert Storm reports</li>
          </ul>
        </section>

        <BackToTop />
      </div>
    </main>
  )
}
