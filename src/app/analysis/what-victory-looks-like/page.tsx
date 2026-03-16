import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { WarOutcomesChart, ISISTimelineChart, BeforeAfterChart, SpendingOutcomeChart } from './VictoryCharts'

export const metadata: Metadata = {
  title: 'What Victory Looks Like: Iraq, Afghanistan, Libya, Vietnam — What Did Any of It Achieve?',
  description: 'Iraq: ISIS emerged, 500K dead, Iran empowered. Afghanistan: Taliban back after 20 years. Libya: slave markets. Vietnam: communist anyway. Korea: 70-year frozen conflict. Examining America\'s "victories."',
  openGraph: {
    title: 'What Victory Looks Like: Examining America\'s Wars',
    description: 'Iraq created ISIS. Afghanistan returned to the Taliban. Libya has slave markets. Vietnam unified under communism. What did $8 trillion achieve?',
    url: 'https://www.warcosts.org/analysis/what-victory-looks-like',
    type: 'article',
  },
}

const keyStats = [
  { stat: '$8T+', label: 'Total cost of post-9/11 wars — with nothing to show for it', source: 'Brown University Costs of War' },
  { stat: '11 days', label: 'Time for Taliban to retake Afghanistan after 20 years and $2.3T of US effort', source: 'DoD timeline' },
  { stat: '0', label: 'Wars since WWII that achieved their stated objectives', source: 'Historical analysis' },
  { stat: '500,000+', label: 'Dead in Iraq — which is now an Iranian ally', source: 'Brown University/Lancet' },
  { stat: '38M', label: 'People displaced by the War on Terror across 8 countries', source: 'Brown University' },
  { stat: '7', label: 'Countries destabilized by US military intervention since 2001', source: 'CRS/Brown University' },
]

const victories = [
  {
    war: 'Iraq: The War That Created ISIS',
    years: '2003–2011 (combat), ongoing instability',
    cost: '$3 trillion+',
    usDead: '4,600 military + 8,000+ contractors',
    totalDead: '500,000+ (Lancet/Brown estimates)',
    statedGoal: 'Remove WMDs, build democracy, fight terrorism',
    whatActuallyHappened: [
      'There were no WMDs. The entire premise was false.',
      'De-Baathification disbanded the Iraqi army, creating 400,000 armed, unemployed, angry Sunnis — the recruitment base for ISIS.',
      'ISIS — which did not exist before the invasion — declared a caliphate across Iraq and Syria in 2014, requiring a second US military intervention.',
      'Iran became the dominant power in Iraq. The US removed Iran\'s greatest rival (Saddam) and installed a Shia-majority government aligned with Tehran.',
      'Iraq\'s infrastructure was destroyed. Electricity, water, and healthcare systems remain below pre-invasion levels in many areas.',
      '5 million Iraqis became refugees — the largest displacement in the Middle East since 1948.',
      'Sectarian violence killed tens of thousands annually for a decade.',
      'As of 2025, Iraq ranks 157th of 167 countries on the Democracy Index.',
    ],
  },
  {
    war: 'Afghanistan: 20 Years, $2.3 Trillion, Back to Square One',
    years: '2001–2021',
    cost: '$2.3 trillion',
    usDead: '2,461 military + 3,846 contractors',
    totalDead: '176,000+ (direct war deaths)',
    statedGoal: 'Defeat the Taliban, destroy al-Qaeda, build democracy',
    whatActuallyHappened: [
      'The Taliban retook the entire country in 11 days in August 2021, as the US-trained Afghan army collapsed without a fight.',
      '$83 billion in US-supplied military equipment was captured by the Taliban — including Black Hawk helicopters, armored vehicles, and small arms.',
      'Al-Qaeda was degraded but not destroyed. Bin Laden was killed in Pakistan, not Afghanistan. The war didn\'t require 20 years of occupation.',
      'The Afghan government the US built was spectacularly corrupt. Ashraf Ghani fled the country with an estimated $169 million in cash.',
      'Women and girls — whose rights were a primary justification for continued occupation — lost virtually all rights under Taliban rule. Girls cannot attend school past 6th grade.',
      '2.6 million Afghans became refugees during the war. Millions more were internally displaced.',
      'Opium production — which the Taliban had nearly eliminated before the invasion — surged to record levels during US occupation, fueling the global heroin trade.',
      'The final image: Afghans clinging to departing US aircraft, falling to their deaths. That is what 20 years of "nation-building" produced.',
    ],
  },
  {
    war: 'Libya: From Africa\'s Richest Country to Slave Markets',
    years: '2011 intervention, ongoing chaos',
    cost: '$2 billion (direct US cost)',
    usDead: '0 (combat)',
    totalDead: '30,000+ in civil war',
    statedGoal: 'Protect civilians (R2P), remove Gaddafi',
    whatActuallyHappened: [
      'Gaddafi was removed — sodomized with a bayonet and killed by rebels, with Hillary Clinton joking: "We came, we saw, he died."',
      'Libya collapsed into a failed state with two rival governments and dozens of armed militias.',
      'Open-air slave markets appeared in Libya — African migrants being sold as property. In 2017, CNN filmed a slave auction.',
      'Libya became a transit hub for human trafficking into Europe, triggering the European migrant crisis.',
      'An ISIS affiliate established itself in Sirte, requiring a second US military intervention in 2016.',
      'Libya\'s oil production collapsed from 1.6 million to 200,000 barrels/day before partially recovering.',
      'Weapons from Gaddafi\'s arsenals flooded across North Africa and the Sahel, fueling conflicts in Mali, Niger, Nigeria, and beyond.',
      'President Obama later called Libya his "worst mistake." He didn\'t call it a crime.',
    ],
  },
  {
    war: 'Vietnam: 58,220 Dead to Prevent What Happened Anyway',
    years: '1955–1975',
    cost: '$1 trillion (adjusted)',
    usDead: '58,220',
    totalDead: '2–3.4 million (all sides)',
    statedGoal: 'Prevent communist takeover of South Vietnam (domino theory)',
    whatActuallyHappened: [
      'Vietnam unified under communist rule in 1975 — exactly what the US spent 20 years and 58,220 lives trying to prevent.',
      'The dominoes did not fall. Thailand, Malaysia, Singapore, Indonesia, and the Philippines did not become communist.',
      'Vietnam is now a US trading partner with a market economy. Nike, Intel, and Samsung have major manufacturing there. The country the US tried to bomb into submission is now an ally against China.',
      '2.7 million tons of bombs were dropped on Vietnam — more than all of WWII. 7.5 million tons of bombs were dropped on Indochina overall.',
      'Agent Orange contaminated 4.8 million acres. Birth defects continue in the third generation. The US didn\'t begin compensation until 2019.',
      'The secret bombing of Cambodia destabilized the country and helped create the conditions for the Khmer Rouge genocide (1.5–2 million dead).',
      'Laos was subjected to 2.5 million tons of bombs — becoming the most heavily bombed country per capita in history. 80 million unexploded bombs remain.',
      'The war divided American society, destroyed trust in government, and created a generation of traumatized veterans — 17% of whom developed PTSD.',
    ],
  },
  {
    war: 'Korea: The 70-Year Frozen Conflict',
    years: '1950–1953 (hot war), 1953–present (frozen)',
    cost: '$341 billion (adjusted) for the hot war; ongoing costs of 28,500 troops',
    usDead: '36,574',
    totalDead: '2–3 million (all sides)',
    statedGoal: 'Unify Korea under non-communist government',
    whatActuallyHappened: [
      'Korea was not unified. The border is almost exactly where it was before the war began.',
      'North Korea developed nuclear weapons — the very outcome the war was supposed to prevent.',
      'The DMZ is the most heavily militarized border on Earth, 70+ years later.',
      '28,500 US troops remain in South Korea as of 2025 — at an annual cost of $3.5 billion.',
      'South Korea became a democratic, prosperous economy — arguably the war\'s only genuine success. But this happened despite the war, through decades of economic policy, not because of military action.',
      'North Korea became one of the most repressive regimes on Earth — a nuclear-armed state that routinely threatens regional stability.',
      'Three million Korean civilians died. The war destroyed virtually every city in both North and South Korea.',
      'The war never officially ended — there is no peace treaty. Just an armistice. The US is technically still at war in Korea.',
    ],
  },
]

export default function WhatVictoryLooksLikePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'What Victory Looks Like' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          What Victory Looks Like
        </h1>
        <p className="text-xl text-stone-300 mb-4">Iraq. Afghanistan. Libya. Vietnam. Korea. What Did Any of It Achieve?</p>
        <p className="text-stone-400 text-lg">
          The United States has spent over <strong className="text-red-400">$8 trillion</strong> on wars 
          since 9/11. It has deployed millions of troops, dropped millions of tons of bombs, and killed 
          hundreds of thousands of people — in the name of democracy, freedom, and security. So let&apos;s 
          look at the results. Iraq: ISIS emerged, 500,000 dead, Iran is now the dominant power. Afghanistan: 
          the Taliban took the country back in 11 days. Libya: open-air slave markets. Vietnam: unified 
          under communism — exactly what we were fighting to prevent. Korea: a 70-year frozen conflict 
          with a nuclear-armed North Korea. This is what victory looks like.
        </p>
      </div>

      <ShareButtons title="What Victory Looks Like: Iraq, Afghanistan, Libya, Vietnam & Korea" />

      {/* Key Numbers */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">By the Numbers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {keyStats.map((item) => (
            <div key={item.label} className="flex gap-3">
              <span className="text-2xl font-bold text-white whitespace-nowrap">{item.stat}</span>
              <div>
                <p className="text-stone-300 text-sm">{item.label}</p>
                <p className="text-stone-500 text-xs">{item.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WarOutcomesChart />

      {/* Each War */}
      {victories.map((v) => (
        <section key={v.war} className="my-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
            {v.war}
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-stone-100 rounded-lg p-4">
              <p className="text-stone-500 text-sm">Years</p>
              <p className="font-bold text-stone-900">{v.years}</p>
            </div>
            <div className="bg-stone-100 rounded-lg p-4">
              <p className="text-stone-500 text-sm">Cost</p>
              <p className="font-bold text-stone-900">{v.cost}</p>
            </div>
            <div className="bg-stone-100 rounded-lg p-4">
              <p className="text-stone-500 text-sm">US Dead</p>
              <p className="font-bold text-stone-900">{v.usDead}</p>
            </div>
            <div className="bg-stone-100 rounded-lg p-4">
              <p className="text-stone-500 text-sm">Total Dead</p>
              <p className="font-bold text-red-900">{v.totalDead}</p>
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
            <p className="text-red-400 font-bold mb-1">Stated Goal</p>
            <p className="text-stone-300">{v.statedGoal}</p>
          </div>

          <div className="bg-stone-900 rounded-lg p-6">
            <p className="text-white font-bold mb-3">What Actually Happened</p>
            <ul className="space-y-3">
              {v.whatActuallyHappened.map((item, i) => (
                <li key={i} className="flex gap-3 text-stone-300">
                  <span className="text-red-500 mt-1">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {v.war.includes('Iraq') && <ISISTimelineChart />}
        </section>
      ))}

      <BeforeAfterChart />
      <SpendingOutcomeChart />

      {/* Section: The Pattern */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Pattern: Invade, Destroy, Declare Victory, Leave, Watch It Collapse
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The pattern is identical in every case:
        </p>
        <div className="space-y-4 my-6">
          <div className="flex gap-4 bg-stone-100 rounded-lg p-4">
            <span className="text-red-800 font-bold text-2xl">1</span>
            <div>
              <h3 className="font-bold text-stone-900">Declare a Threat</h3>
              <p className="text-stone-700 text-sm">WMDs, communism, terrorism, humanitarian crisis — the justification changes, the playbook doesn&apos;t.</p>
            </div>
          </div>
          <div className="flex gap-4 bg-stone-100 rounded-lg p-4">
            <span className="text-red-800 font-bold text-2xl">2</span>
            <div>
              <h3 className="font-bold text-stone-900">Invade with Overwhelming Force</h3>
              <p className="text-stone-700 text-sm">The US military can destroy any army on Earth in weeks. This is the easy part. It is also the irrelevant part.</p>
            </div>
          </div>
          <div className="flex gap-4 bg-stone-100 rounded-lg p-4">
            <span className="text-red-800 font-bold text-2xl">3</span>
            <div>
              <h3 className="font-bold text-stone-900">Declare &ldquo;Mission Accomplished&rdquo;</h3>
              <p className="text-stone-700 text-sm">Bush on an aircraft carrier, 2003. Obama on bin Laden, 2011. The photo op always comes before the reality.</p>
            </div>
          </div>
          <div className="flex gap-4 bg-stone-100 rounded-lg p-4">
            <span className="text-red-800 font-bold text-2xl">4</span>
            <div>
              <h3 className="font-bold text-stone-900">Discover That Winning Wars ≠ Winning Peace</h3>
              <p className="text-stone-700 text-sm">Insurgencies, sectarian violence, corruption, failed institutions. The US can topple governments but cannot build them.</p>
            </div>
          </div>
          <div className="flex gap-4 bg-stone-100 rounded-lg p-4">
            <span className="text-red-800 font-bold text-2xl">5</span>
            <div>
              <h3 className="font-bold text-stone-900">Spend a Decade Fighting the Consequences</h3>
              <p className="text-stone-700 text-sm">The &ldquo;surge,&rdquo; the counterinsurgency, the drone strikes, the endless deployments. Fighting the fire you started.</p>
            </div>
          </div>
          <div className="flex gap-4 bg-stone-100 rounded-lg p-4">
            <span className="text-red-800 font-bold text-2xl">6</span>
            <div>
              <h3 className="font-bold text-stone-900">Leave</h3>
              <p className="text-stone-700 text-sm">When the political will runs out, the troops go home. The country is left in worse condition than before the invasion.</p>
            </div>
          </div>
          <div className="flex gap-4 bg-stone-100 rounded-lg p-4">
            <span className="text-red-800 font-bold text-2xl">7</span>
            <div>
              <h3 className="font-bold text-stone-900">Watch It Collapse</h3>
              <p className="text-stone-700 text-sm">Taliban retakes Afghanistan. ISIS fills the vacuum in Iraq. Libya becomes a failed state. Everything reverts — except the dead stay dead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Who Won */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          If Nobody Won the War, Who Won?
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The wars failed by every stated objective. But they succeeded spectacularly for certain interests:
        </p>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-6">
          <div className="space-y-4">
            <div className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Defense contractors:</strong> Lockheed Martin stock: $40 (2001) → $480 (2024). Raytheon, Northrop, Boeing — all hit record revenues. The <Link href="/analysis/war-profiteering" className="text-red-400 hover:underline">military-industrial complex</Link> made trillions.</span>
            </div>
            <div className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Private military contractors:</strong> <Link href="/analysis/private-military" className="text-red-400 hover:underline">207,000 contractors</Link> in Iraq/Afghanistan at peak. KBR got $39.5B. Blackwater got billions. Erik Prince got a fortune.</span>
            </div>
            <div className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Intelligence agencies:</strong> The CIA&apos;s budget tripled after 9/11. The NSA built a mass surveillance apparatus. 17 intelligence agencies expanded their reach and their budgets.</span>
            </div>
            <div className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Iran:</strong> The biggest strategic winner of the Iraq War. The US removed Iran&apos;s rival (Saddam), installed a Shia government, and empowered Iranian-backed militias. Iran didn&apos;t fire a shot.</span>
            </div>
            <div className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">China:</strong> While the US spent $8 trillion and 20 years in the Middle East, China built the world&apos;s second-largest economy, modernized its military, and expanded across Asia, Africa, and Latin America.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Human Wreckage */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Human Wreckage
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Behind the strategy and the statistics are people. The 22-year-old Marine who lost both legs 
          in Helmand Province for a country that the Taliban retook before he turned 40. The Iraqi 
          family whose house was destroyed in a night raid looking for weapons that didn&apos;t exist. The 
          Libyan teenager sold in a slave market that exists because NATO destroyed the government. The 
          Afghan girl who will never attend school because the democracy America promised lasted exactly 
          20 years.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <strong>38 million people</strong> were displaced by the War on Terror. That&apos;s more than 
          any conflict since World War II. Millions of refugees scattered across the Middle East, Europe, 
          and beyond — creating the very instability and radicalization that the wars were supposed to prevent.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <Link href="/analysis/veterans-betrayed" className="text-red-800 hover:underline">17 veterans</Link> kill 
          themselves every day. 37,000 are homeless. The VA denies disability claims for decades. The 
          people who fought these wars — who believed the lies, who did their duty — are the ones who 
          pay the price. The architects are on cable news.
        </p>
      </section>

      {/* Section: The Definition Problem */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Definition Problem: What Does &ldquo;Winning&rdquo; Even Mean?
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Part of the reason the US never &ldquo;wins&rdquo; its wars is that it never defines what
          winning means. Objectives shift continuously — from WMDs to democracy-building to
          counterterrorism to &ldquo;conditions-based withdrawal.&rdquo; When the goalposts move
          constantly, failure is impossible to measure and success is impossible to achieve.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-stone-100 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">Afghanistan&apos;s Shifting Goals</h3>
            <ul className="space-y-1 text-stone-700 text-sm">
              <li>• <strong>2001:</strong> Destroy al-Qaeda, capture bin Laden</li>
              <li>• <strong>2003:</strong> Defeat the Taliban, establish democracy</li>
              <li>• <strong>2009:</strong> Counterinsurgency, protect the population</li>
              <li>• <strong>2014:</strong> Train Afghan forces to stand on their own</li>
              <li>• <strong>2017:</strong> &ldquo;Conditions-based&rdquo; — no timeline, no metric</li>
              <li>• <strong>2020:</strong> &ldquo;Peace deal&rdquo; with the Taliban (the enemy)</li>
              <li>• <strong>2021:</strong> Leave and hope for the best</li>
            </ul>
          </div>
          <div className="bg-stone-100 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">Iraq&apos;s Shifting Goals</h3>
            <ul className="space-y-1 text-stone-700 text-sm">
              <li>• <strong>2002:</strong> Disarm WMDs (didn&apos;t exist)</li>
              <li>• <strong>2003:</strong> Regime change, install democracy</li>
              <li>• <strong>2004:</strong> Fight the insurgency we created</li>
              <li>• <strong>2006:</strong> Prevent civil war (failed — 34,000 civilians dead that year)</li>
              <li>• <strong>2007:</strong> &ldquo;The Surge&rdquo; — reduce violence enough to leave</li>
              <li>• <strong>2011:</strong> Withdraw and declare victory</li>
              <li>• <strong>2014:</strong> Return to fight ISIS (which the invasion created)</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700 text-lg">
          Compare this with World War II, where victory was clearly defined: unconditional surrender of
          Germany and Japan. The military knew what it was fighting for. The public knew what it was
          sacrificing for. The endpoint was measurable. Since then, the US has fought wars with vague,
          shifting, and ultimately unachievable objectives — because achieving the objective would mean
          the contracts end, the budgets shrink, and the gravy train stops.
        </p>
      </section>

      {/* The Counterfactual */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Counterfactual: What If We Hadn&apos;t Invaded?
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The strongest argument for these wars is the counterfactual: &ldquo;It would have been worse
          if we hadn&apos;t intervened.&rdquo; This is unfalsifiable — you can&apos;t prove what would
          have happened. But in every case where we have partial evidence, non-intervention appears
          to have been the better option:
        </p>
        <div className="space-y-4">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-bold mb-1">Iraq Without Invasion</h3>
            <p className="text-stone-300 text-sm">
              Saddam Hussein was a brutal dictator — but Iraq had no WMDs, no connection to 9/11,
              and was contained by sanctions and no-fly zones. The UN weapons inspectors (UNMOVIC)
              were finding nothing. Without invasion: no ISIS, no 500,000 dead, no $3 trillion spent,
              no Iranian dominance of Iraq, no European refugee crisis fed by Iraqi displacement.
              Saddam would have eventually fallen to internal dynamics — as happened to every other
              aging dictator in the region.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-bold mb-1">Afghanistan: Targeted Strike vs. 20-Year Occupation</h3>
            <p className="text-stone-300 text-sm">
              The initial invasion — Special Forces, CIA, and Northern Alliance — toppled the Taliban
              in weeks at a cost of $1-2 billion. Everything after that was mission creep. Bin Laden
              was killed by a targeted operation in Pakistan, not by occupying Afghanistan. A focused
              counterterrorism campaign without nation-building would have cost 1% of what was spent
              and likely achieved the same result — because the Taliban returning to power was always
              the most probable outcome once the US left, whether in 2004 or 2021.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-bold mb-1">Libya: Containment Was Working</h3>
            <p className="text-stone-300 text-sm">
              Gaddafi had abandoned his nuclear program in 2003, was cooperating on counterterrorism,
              and was containing migration flows from sub-Saharan Africa. Post-intervention Libya
              became the primary gateway for irregular migration to Europe. The &ldquo;humanitarian
              intervention&rdquo; created a humanitarian catastrophe worse than the one it was
              supposed to prevent.
            </p>
          </div>
        </div>
      </section>

      {/* Sunk Cost Fallacy */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Sunk Cost Trap: &ldquo;We Can&apos;t Leave Now&rdquo;
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Every war reaches a point where the primary argument for continuing is the investment already
          made. &ldquo;We can&apos;t let their sacrifices be in vain.&rdquo; &ldquo;If we leave now,
          we&apos;ll have wasted everything.&rdquo; This is the sunk cost fallacy applied to human
          lives — the most dangerous form of irrational decision-making.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          In Afghanistan, this argument kept the war going for at least a decade beyond any reasonable
          strategic purpose. By 2006, most analysts knew the Afghan government was corrupt and the
          Taliban would return. But admitting failure meant admitting that 2,000+ Americans (at that
          point) had died for nothing. So more were sent to die — to justify the deaths that came
          before. By the end, 2,461 Americans were dead. The Taliban still won.
        </p>
        <blockquote className="border-l-4 border-red-600 pl-4 my-6">
          <p className="text-stone-700 italic text-lg">
            &ldquo;How do you ask a man to be the last man to die for a mistake?&rdquo;
          </p>
          <p className="text-stone-500 text-sm mt-2">— John Kerry, testimony before the Senate Foreign Relations Committee, 1971 (regarding Vietnam)</p>
        </blockquote>
        <p className="text-stone-700 text-lg">
          The answer, 50 years later, is the same: you don&apos;t ask. You just keep sending them
          until the political will runs out. The last American soldier killed in Afghanistan died on
          August 26, 2021 — 13 Marines at Abbey Gate. Their sacrifice was no more strategically
          meaningful than the first. The only honest tribute to the dead is to stop creating more of them.
        </p>
      </section>

      {/* Bottom Line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-400">The Bottom Line</h2>
        <p className="text-stone-300 text-lg mb-4">
          Name a war since 1945 that achieved its stated objectives. Korea? It&apos;s still divided, 
          now with nukes. Vietnam? Communist anyway. Iraq? ISIS and Iranian dominance. Afghanistan? 
          Taliban in power. Libya? Failed state. The United States has the most powerful military in 
          human history. It can destroy anything. It cannot build anything. And it keeps trying — 
          because the people who profit from war don&apos;t measure success by outcomes. They measure 
          it by contracts.
        </p>
        <p className="text-stone-300 text-lg">
          $8 trillion. Millions dead. Entire countries destroyed. And the only question anyone 
          should be asking is: <strong className="text-red-400">what did any of it achieve?</strong> The 
          answer — when you strip away the flags, the speeches, the &ldquo;thank you for your 
          service&rdquo; — is nothing. Nothing that couldn&apos;t have been achieved without the 
          wars. Nothing that justified the cost. Nothing that will be remembered as anything other 
          than a catastrophic, bloody, expensive failure. This is what victory looks like.
        </p>
      </div>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li>• Brown University Costs of War Project — all post-9/11 war cost and casualty estimates</li>
          <li>• Special Inspector General for Iraq Reconstruction (SIGIR), Final Report</li>
          <li>• Special Inspector General for Afghanistan Reconstruction (SIGAR), &ldquo;What We Need to Learn&rdquo; (2021)</li>
          <li>• Congressional Research Service, war cost and troop level reports</li>
          <li>• Iraq Survey Group (Duelfer Report) on WMDs</li>
          <li>• UN Panel of Experts on Libya</li>
          <li>• The Economist Democracy Index (Iraq ranking)</li>
          <li>• UNHCR Global Displacement Reports</li>
          <li>• Bacevich, Andrew. &ldquo;The Age of Illusions: How America Squandered Its Cold War Victory&rdquo;</li>
          <li>• Whitlock, Craig. &ldquo;The Afghanistan Papers&rdquo; (Washington Post investigation)</li>
        </ul>
      </section>

      {/* Related */}
      <div className="bg-stone-100 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/war-on-terror" className="text-red-800 hover:text-red-600 font-medium">
            → The War on Terror: $8 Trillion Later
          </Link>
          <Link href="/analysis/lies-that-started-wars" className="text-red-800 hover:text-red-600 font-medium">
            → Lies That Started Wars
          </Link>
          <Link href="/analysis/blowback" className="text-red-800 hover:text-red-600 font-medium">
            → Blowback: How Interventions Create Enemies
          </Link>
          <Link href="/analysis/veterans-betrayed" className="text-red-800 hover:text-red-600 font-medium">
            → Veterans Betrayed
          </Link>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
