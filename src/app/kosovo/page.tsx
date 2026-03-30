import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kosovo War — Operation Allied Force, $5B Cost, 78 Days of Bombing, 0 US Combat Deaths, No UN Authorization | WarCosts',
  description: 'Operation Allied Force: Clinton bombed Yugoslavia for 78 days in 1999. NATO dropped 23,000 bombs. 500+ Yugoslav civilians killed including Chinese embassy strike. $5 billion cost. No UN authorization. No congressional vote. Set the precedent for "humanitarian intervention."',
  keywords: ['Kosovo war cost', 'Operation Allied Force', 'NATO bombing Yugoslavia', 'Kosovo 1999', 'Clinton Kosovo', 'humanitarian intervention', 'Chinese embassy bombing Belgrade'],
  openGraph: {
    title: 'Operation Allied Force: 78 Days of Bombing',
    description: '78 days of NATO bombing. 500+ civilians killed. Chinese embassy hit. No UN vote. No Congressional vote. $5 billion. Zero US combat deaths. The template for "humanitarian" war.',
    url: 'https://warcosts.org/kosovo',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Duration', value: '78 Days' },
  { label: 'US/NATO Cost', value: '~$5 Billion' },
  { label: 'US Combat Deaths', value: '0' },
  { label: 'Yugoslav Civilians Killed (NATO)', value: '500+' },
  { label: 'Serbian Military Killed', value: '1,000-2,000' },
  { label: 'Sorties Flown', value: '38,000' },
]

const costBreakdown = [
  { category: 'Air Campaign Operations', amount: '$3.0B', desc: '38,000 sorties, 23,000+ bombs/missiles dropped over 78 days by 13 NATO nations' },
  { category: 'Cruise Missiles (Tomahawks)', amount: '$500M', desc: '218 Tomahawk cruise missiles at ~$1.5M each, plus conventional air-launched cruise missiles' },
  { category: 'Precision-Guided Munitions', amount: '$400M', desc: '35% of munitions were PGMs — a massive increase over Desert Storm\'s 7%' },
  { category: 'KFOR Peacekeeping (Year 1)', amount: '$800M', desc: '50,000 NATO troops deployed to Kosovo as peacekeepers after the bombing ended' },
  { category: 'Humanitarian & Reconstruction', amount: '$300M', desc: 'US contribution to refugee relief and post-war reconstruction in Kosovo' },
  { category: 'Total US/NATO Cost', amount: '~$5B', desc: 'Direct military and immediate post-conflict costs' },
]

const casualties = [
  { group: 'US Combat Deaths', count: '0', note: 'All bombing conducted above 15,000 feet to avoid anti-aircraft fire' },
  { group: 'US Non-Combat Deaths', count: '2', note: 'Apache helicopter training crash in Albania' },
  { group: 'NATO Military Deaths', count: '0', note: 'No NATO combat fatalities during the air campaign' },
  { group: 'Yugoslav Civilians Killed (by NATO)', count: '489-528', note: 'Human Rights Watch confirmed count; Serbian claims higher (~2,500)' },
  { group: 'Serbian/Yugoslav Military Killed', count: '1,000-2,000', note: 'NATO initially claimed 10,000; actual number far lower' },
  { group: 'Kosovo Albanian Civilians Killed (by Serbs)', count: '8,000-10,000', note: 'Ethnic cleansing before and during the bombing' },
  { group: 'Kosovo Albanian Refugees', count: '1.5 Million', note: '850,000 fled Kosovo; 500,000+ internally displaced' },
]

const timeline = [
  { year: '1989', title: 'Milošević Revokes Kosovo Autonomy', desc: 'Serbian President Slobodan Milošević strips Kosovo of its autonomous status within Yugoslavia. Kosovo is 90% ethnic Albanian but considered the historical heartland of Serbian identity. Milošević rides Serbian nationalism to power. Kosovo Albanians are fired from government jobs, schools are closed, and a decade of repression begins.' },
  { year: '1991-1995', title: 'Yugoslavia Disintegrates', desc: 'Yugoslavia breaks apart in a series of wars. Slovenia, Croatia, Bosnia, and Macedonia declare independence. The Bosnian War (1992-95) kills 100,000 and produces the Srebrenica massacre — 8,000 Bosniak men and boys murdered by Serb forces while UN "peacekeepers" watched. The lesson of Srebrenica haunts Western policymakers: inaction has consequences too.' },
  { year: '1996-1998', title: 'Kosovo Liberation Army (KLA) Rises', desc: 'The Kosovo Liberation Army begins an armed insurgency against Serbian rule. The KLA is designated a terrorist organization by the US in 1998 — then reclassified as "freedom fighters" when NATO needs a local partner. The KLA is funded partly by heroin trafficking and diaspora contributions. Serbia responds with brutal counterinsurgency operations targeting civilians.' },
  { year: 'Jan 15, 1999', title: 'Račak Massacre', desc: '45 Kosovo Albanian civilians are killed by Serbian security forces in the village of Račak. The head of the OSCE monitoring mission, William Walker, calls it a "crime against humanity." Serbia claims the dead were KLA fighters. The incident galvanizes Western public opinion and gives NATO the cassus belli it needs.' },
  { year: 'Feb-Mar 1999', title: 'Rambouillet "Negotiations"', desc: 'NATO presents Serbia with the Rambouillet Accords — which demand NATO military occupation of all of Yugoslavia (not just Kosovo) with complete legal immunity. The terms are deliberately unacceptable. Henry Kissinger later calls it "a provocation, an excuse to start bombing." Serbia rejects the terms. NATO begins preparing airstrikes. Diplomacy was never the goal.' },
  { year: 'Mar 24, 1999', title: 'NATO Begins Bombing', desc: 'Without UN Security Council authorization (Russia and China would veto) and without a Congressional vote, NATO begins bombing Yugoslavia. Clinton promises it will be over in days. It lasts 78. The campaign begins with cruise missile strikes on Serbian air defenses, military installations, and government buildings. Clinton rules out ground troops from the start — revealing NATO\'s hand and allowing Milošević to calculate his options.' },
  { year: 'Mar-Jun 1999', title: 'Serbian Ethnic Cleansing Accelerates', desc: 'Rather than stopping ethnic cleansing, the bombing accelerates it. Serbian forces launch Operation Horseshoe — a systematic campaign to expel Kosovo Albanians. 850,000 refugees flee to Albania, Macedonia, and Montenegro. Thousands are killed. The bombing that was supposed to prevent a humanitarian catastrophe makes it worse in the short term.' },
  { year: 'Apr 12, 1999', title: 'Grdelica Train Attack', desc: 'NATO bombs a passenger train crossing the Grdelica bridge, killing at least 20 civilians. NATO releases cockpit video that appears to show the train entering the frame after the bomb was released. Subsequent analysis reveals the video was played at triple speed to make the train appear faster. The cover-up is as damaging as the strike.' },
  { year: 'Apr 23, 1999', title: 'RTS Television Building Bombed', desc: 'NATO bombs the Radio Television of Serbia (RTS) building in Belgrade, killing 16 media workers. NATO calls the station a "propaganda outlet" and therefore a legitimate military target. The bombing of a television station — even a state propaganda organ — sets a dangerous precedent for treating media as military targets.' },
  { year: 'May 7, 1999', title: 'Chinese Embassy Bombing', desc: 'US B-2 stealth bombers drop five JDAM bombs on the Chinese embassy in Belgrade, killing 3 Chinese journalists and injuring 20. The US claims it was an accident caused by outdated maps — the embassy had been at that location for years. China doesn\'t believe it (nor do many analysts). The incident nearly derails US-China relations and sparks massive protests in Beijing. The CIA officer responsible is "reprimanded." No one is fired.' },
  { year: 'May 14, 1999', title: 'Koriša Attack', desc: 'NATO bombs a refugee column near Koriša, killing 87 Kosovo Albanian civilians — the very people the intervention was supposed to protect. NATO initially denies responsibility, then claims Serbian forces used refugees as human shields. The incident encapsulates the moral contradiction of the campaign.' },
  { year: 'Jun 3, 1999', title: 'Milošević Accepts Terms', desc: 'After 78 days of bombing, Milošević agrees to withdraw Serbian forces from Kosovo. The key factor: Russia, Serbia\'s traditional ally, signals it won\'t intervene. Without Russian support, Serbia cannot hold. NATO claims victory. But the terms Milošević accepts are actually less demanding than the Rambouillet ultimatum — suggesting earlier diplomacy might have worked without 78 days of bombing.' },
  { year: 'Jun 12, 1999', title: 'KFOR Deploys', desc: '50,000 NATO troops enter Kosovo as peacekeepers (KFOR). They find a devastated province. Serbian forces withdraw; Kosovo Albanians return. Almost immediately, reverse ethnic cleansing begins: Serbs, Roma, and other minorities are attacked, their homes burned, their churches destroyed. NATO does little to stop it. 200,000 Serbs flee Kosovo.' },
  { year: '2008', title: 'Kosovo Declares Independence', desc: 'Kosovo unilaterally declares independence from Serbia. The US and most Western nations recognize it. Russia, China, and Serbia do not. As of 2026, Kosovo is recognized by 104 UN member states but is not a UN member. Serbia still considers Kosovo its territory. The conflict is frozen, not resolved.' },
]

const keyFigures = [
  { name: 'Bill Clinton', role: 'President', desc: 'Launched the bombing without Congressional authorization or UN approval. Argued that humanitarian necessity overrode legal requirements. Promised a quick campaign — it lasted 78 days. Ruled out ground troops from the start, removing NATO\'s most credible threat and extending the air campaign. The Kosovo intervention is Clinton\'s most contested foreign policy legacy: lauded by interventionists, damned by anti-war voices and international lawyers alike.' },
  { name: 'Slobodan Milošević', role: 'President of Yugoslavia', desc: 'Architect of Serbian ethnic cleansing in Kosovo (and earlier in Bosnia and Croatia). Milošević weaponized Serbian nationalism to maintain power. Indicted by the International Criminal Tribunal in 1999 — the first sitting head of state charged with war crimes. Overthrown in 2000. Died in his cell at The Hague in 2006 before his trial concluded.' },
  { name: 'Madeleine Albright', role: 'Secretary of State', desc: 'The most hawkish voice in Clinton\'s cabinet. Albright pushed for intervention from the start, arguing that Srebrenica must not be repeated. She reportedly told Colin Powell: "What\'s the point of having this superb military you\'re always talking about if we can\'t use it?" The Rambouillet ultimatum — designed to be rejected — was largely her creation.' },
  { name: 'Wesley Clark', role: 'NATO Supreme Allied Commander', desc: 'Commanded the air campaign. Clark pushed for ground troops — Clinton refused. Clark\'s aggressive posture nearly caused a confrontation with Russian forces at Pristina Airport when he ordered British troops to block the Russian advance. British General Mike Jackson reportedly refused, saying "I\'m not going to start World War III for you." Clark was relieved of command in 2000.' },
  { name: 'Hashim Thaçi', role: 'KLA Political Leader', desc: 'Led the Kosovo Liberation Army\'s political wing. Became Kosovo\'s first Foreign Minister and later President. In 2020, indicted by the Kosovo Specialist Chambers for war crimes and crimes against humanity — including murder, enforced disappearances, and persecution of Serbs and political rivals. Currently on trial in The Hague. The "freedom fighter" the US supported was allegedly a war criminal.' },
]

const whatWeGot = [
  { label: 'Ethnic Cleansing Stopped', value: 'Eventually', desc: 'Serbian ethnic cleansing of Albanians ended — but accelerated during the 78-day bombing. Then reverse ethnic cleansing of Serbs began. 200,000 Serbs fled Kosovo.' },
  { label: 'Zero US Combat Deaths', value: 'Yes', desc: 'The altitude restriction (15,000 ft minimum) protected pilots but reduced accuracy and increased civilian casualties. A war with zero risk to the attacker.' },
  { label: 'Kosovo Independence', value: 'Partial', desc: 'Kosovo declared independence in 2008. Recognized by 104 nations but not by Russia, China, or Serbia. Not a UN member. Sovereignty remains contested.' },
  { label: 'Legal Precedent', value: 'Dangerous', desc: 'Established that NATO can wage war without UN authorization. Russia later cited Kosovo when annexing Crimea. The precedent cuts both ways.' },
  { label: 'Humanitarian Norm', value: 'Double-Edged', desc: 'Created the "Responsibility to Protect" (R2P) doctrine. Used to justify Libya intervention (2011). Discredited by Libya\'s aftermath. Selectively applied.' },
  { label: 'Milošević Removed', value: 'Indirectly', desc: 'Milošević fell in 2000 due to domestic opposition, not NATO bombing. He survived the 78-day campaign and used it to rally nationalist support.' },
]

const domesticComparison = [
  { item: 'Fund CHIP (Children\'s Health Insurance) for 5 years', cost: '$5B', note: 'Clinton signed CHIP in 1997 — then spent the same amount bombing Yugoslavia' },
  { item: 'Build 50,000 affordable housing units', cost: '$5B', note: 'At 1999 construction costs' },
  { item: 'Fund Head Start for 1 million children', cost: '$5B', note: 'One full year of the Head Start program' },
  { item: 'Rebuild every bridge rated "structurally deficient" in 5 states', cost: '$5B', note: 'US infrastructure was already crumbling' },
]

const faqs = [
  {
    q: 'Was the Kosovo bombing legal?',
    a: 'No, by conventional international law standards. The UN Charter permits military force only in self-defense (Article 51) or with Security Council authorization (Chapter VII). NATO had neither. Russia and China would have vetoed any Security Council resolution. The US argued that humanitarian necessity created an exception — a theory that has no basis in the UN Charter. The International Court of Justice later ruled that Kosovo\'s declaration of independence was legal, but never addressed the legality of the bombing campaign itself.',
  },
  {
    q: 'Did Congress authorize the Kosovo war?',
    a: 'No. Clinton never sought or received Congressional authorization. The House voted 213-213 on a resolution to authorize the air war — a tie that meant defeat. The House also voted against a declaration of war 427-2. Congress effectively said "no" twice, and Clinton bombed anyway. When Representative Tom Campbell sued under the War Powers Act, the courts dismissed the case on standing grounds. The Constitution\'s war powers clause was treated as advisory.',
  },
  {
    q: 'Was the Chinese embassy bombing really an accident?',
    a: 'Officially, yes — the CIA used outdated maps and misidentified the target. Unofficially, many analysts are skeptical. The embassy had been at that location for years. The CIA\'s explanation required believing that four separate intelligence agencies all had the wrong address. Some analysts believe the embassy was deliberately targeted because it was being used to relay Yugoslav military communications. The CIA officer responsible was given a reprimand. Three Chinese journalists were killed.',
  },
  {
    q: 'How many civilians did NATO kill?',
    a: 'Human Rights Watch confirmed 489-528 Yugoslav civilian deaths from NATO bombing across 90 separate incidents. Serbian authorities claim approximately 2,500 civilians were killed. The most notorious incidents include the Grdelica train attack (~20 killed), the RTS television building (16 killed), the Chinese embassy (3 killed), the Koriša refugee column (87 killed), and the Niš cluster bombing (15 killed). The 15,000-foot altitude floor — designed to protect NATO pilots — significantly increased the risk to civilians below.',
  },
  {
    q: 'What is the situation in Kosovo today?',
    a: 'Kosovo declared independence in 2008 and is recognized by 104 nations, including the US and most EU members. However, Serbia does not recognize Kosovo\'s independence, and Russia and China block its UN membership. Northern Kosovo remains majority Serb and effectively under Serbian control. Tensions flare regularly — most recently in 2023 when clashes injured NATO peacekeepers. KFOR troops remain deployed 25+ years later. The conflict is managed, not resolved.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function KosovoPage() {
  return (
    <main className="min-h-screen">
      {/* ── Dark Hero ─────────────────────────────────────────── */}
      <section className="bg-stone-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'US Wars', href: '/us-wars-list' }, { label: 'Kosovo' }]} />
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] mt-6 mb-4 leading-tight">
            Operation Allied Force:<br />
            <span className="text-[#dc2626]">78 Days of Bombing</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-3xl">
            In 1999, Bill Clinton bombed Yugoslavia for <strong className="text-[#dc2626]">78 days</strong> without
            UN authorization, without a Congressional vote, and without a single US combat death. NATO flew{' '}
            <strong className="text-white">38,000 sorties</strong> and dropped{' '}
            <strong className="text-[#dc2626]">23,000 bombs</strong>. They killed{' '}
            <strong className="text-[#dc2626]">500+ Yugoslav civilians</strong>,{' '}
            &ldquo;accidentally&rdquo; hit the Chinese embassy, and bombed a refugee column of the very people
            they were trying to save. Cost: <strong className="text-[#dc2626]">~$5 billion</strong>. Russia
            later cited Kosovo when it annexed Crimea. Every precedent has consequences.
          </p>
          <ShareButtons title="Operation Allied Force: 78 Days of Bombing — Kosovo War" />

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
              The Cost: $5 Billion for a War That Wasn&apos;t a War
            </h2>
            <p className="text-stone-600 mb-6">
              Clinton called it a &ldquo;humanitarian intervention.&rdquo; It cost $5 billion and required
              78 days of bombing. The intervention that was supposed to be over in days became the longest
              sustained bombing campaign in NATO history.
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
              The Human Cost
            </h2>
            <p className="text-stone-600 mb-6">
              Zero US combat deaths. Zero NATO combat deaths. But 500+ Yugoslav civilians killed
              by NATO bombs, 8,000-10,000 Kosovo Albanians killed by Serbs, and 1.5 million refugees.
              War from 15,000 feet: lethal for those below, safe for those above.
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
              Timeline: From Ethnic Cleansing to Frozen Conflict
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
              A frozen conflict, a partially-recognized state, NATO troops still there 25+ years later,
              and a precedent that Russia used to justify its own territorial aggression.
            </p>
            <div className="space-y-4">
              {whatWeGot.map((item) => (
                <div key={item.label} className="bg-white rounded-lg p-5 border border-stone-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-stone-800">{item.label}</span>
                    <span className={`text-sm font-mono px-2 py-0.5 rounded ${
                      item.value === 'Dangerous' || item.value === 'Double-Edged' ? 'bg-red-100 text-[#dc2626]' :
                      item.value === 'Eventually' || item.value === 'Partial' || item.value === 'Indirectly' ? 'bg-amber-100 text-amber-700' :
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
              What $5 Billion Could Have Bought Instead
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
                Kosovo established that NATO could wage war without UN Security Council authorization.
                This precedent destroyed the post-WWII international legal order — and Russia noticed.
              </p>
            </div>
            <div className="space-y-4 text-stone-700">
              <p>
                <strong className="text-stone-900">1. The end of the UN Security Council monopoly on force.</strong>{' '}
                The UN Charter is clear: military force requires Security Council authorization unless in self-defense.
                Kosovo violated this. NATO argued humanitarian necessity trumped legal requirements. But once one alliance
                can bypass the Security Council for &ldquo;good reasons,&rdquo; any country can claim good reasons.
                Russia cited Kosovo when recognizing Abkhazia and South Ossetia (2008), annexing Crimea (2014), and
                invading Ukraine (2022). The precedent doesn&apos;t stay in Western hands.
              </p>
              <p>
                <strong className="text-stone-900">2. Congress is irrelevant to war decisions.</strong>{' '}
                The House voted 213-213 against authorizing the air war and 427-2 against declaring war. Clinton
                bombed anyway. When sued under the War Powers Act, courts dismissed the case. Kosovo proved that
                the Constitution&apos;s war powers clause is a dead letter. If Congress can&apos;t stop a 78-day
                bombing campaign it explicitly voted against, what can it stop?
              </p>
              <p>
                <strong className="text-stone-900">3. &ldquo;Humanitarian intervention&rdquo; is selectively applied.</strong>{' '}
                Kosovo established the &ldquo;Responsibility to Protect&rdquo; (R2P) norm — the idea that the
                international community can intervene to prevent mass atrocities. But R2P has been applied selectively:
                Kosovo (yes), Libya (yes), Rwanda (no), Sudan (no), Myanmar (no), Yemen (no). The pattern: humanitarian
                intervention happens when great powers have strategic interests. When they don&apos;t, atrocities proceed.
              </p>
              <p>
                <strong className="text-stone-900">4. War from 15,000 feet creates moral hazard.</strong>{' '}
                Zero NATO combat deaths sounds like success. But the altitude restriction — designed to protect pilots —
                increased civilian casualties on the ground. When war carries no risk for the attacker, the threshold
                for starting wars drops. Kosovo made bombing feel cost-free, encouraging the Libya intervention (2011),
                which felt cost-free until the country collapsed into a failed state.
              </p>
              <p>
                <strong className="text-stone-900">5. Kosovo is still not resolved.</strong>{' '}
                Twenty-five years later, 4,000 NATO troops remain. Kosovo is recognized by 104 nations but not by
                the UN. Northern Kosovo is effectively under Serbian control. Tensions regularly flare into violence.
                The &ldquo;successful&rdquo; intervention created a frozen conflict that shows no signs of thawing.
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
                { href: '/libya-2011', label: 'Libya 2011 — Kosovo\'s Template Applied Again' },
                { href: '/panama', label: 'Panama — The Previous Regime Change' },
                { href: '/congress-and-war', label: 'Congress & War — The Vote They Ignored' },
                { href: '/us-wars-list', label: 'Complete List of US Wars' },
                { href: '/analysis/humanitarian-intervention', label: 'Humanitarian Intervention — Selective Compassion' },
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
              <li>Human Rights Watch — &ldquo;Civilian Deaths in the NATO Air Campaign&rdquo; (2000)</li>
              <li>Congressional Research Service — &ldquo;Kosovo: International Responses to the Crisis&rdquo; (1999)</li>
              <li>Independent International Commission on Kosovo — &ldquo;The Kosovo Report&rdquo; (2000)</li>
              <li>NATO — Operation Allied Force After-Action Report (1999)</li>
              <li>Amnesty International — &ldquo;Collateral Damage or Unlawful Killings?&rdquo; (2000)</li>
              <li>Wesley Clark, &ldquo;Waging Modern War&rdquo; (2001)</li>
              <li>International Court of Justice — Advisory Opinion on Kosovo Independence (2010)</li>
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
            headline: 'Operation Allied Force: 78 Days of Bombing — Kosovo War Cost & Consequences',
            description: 'NATO bombed Yugoslavia for 78 days in 1999. 500+ civilians killed. $5 billion cost. No UN authorization. Set the precedent for humanitarian intervention.',
            url: 'https://warcosts.org/kosovo',
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
              { '@type': 'ListItem', position: 3, name: 'Kosovo', item: 'https://warcosts.org/kosovo' },
            ],
          }),
        }}
      />
    </main>
  )
}
