import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { AllyEnemyTimelineChart, BlowbackCostChart, PatternChart, ArmsSalesChart } from './AlliesCharts'

export const metadata: Metadata = {
  title: 'Allies & Enemies: How America Arms Its Future Wars | WarCosts',
  description: 'Saddam was a CIA asset. Bin Laden was funded by the US. Noriega was on the CIA payroll. The Taliban were armed against the Soviets. The pattern: America arms today\'s ally, fights tomorrow\'s enemy.',
  openGraph: {
    title: 'Allies & Enemies: How America Arms Its Future Wars',
    description: 'The pattern of arming allies who become enemies — Saddam, Bin Laden, Noriega, Taliban, and more.',
    url: 'https://www.warcosts.org/analysis/allies-and-enemies',
    type: 'article',
  },
}

const caseStudies = [
  {
    name: 'Iran: The Shah',
    period: '1953–1979',
    allyPhase: 'In 1953, the CIA and MI6 overthrew Iran\'s democratically elected Prime Minister Mohammad Mosaddegh in Operation Ajax. The crime? He nationalized Iran\'s oil. The US installed Shah Mohammad Reza Pahlavi, armed his secret police (SAVAK), and trained them in torture techniques. For 26 years, Iran was America\'s closest ally in the Middle East.',
    enemyPhase: 'In 1979, the Iranian Revolution overthrew the Shah. The new Islamic Republic took 52 American hostages for 444 days. Iran has been America\'s primary Middle Eastern adversary ever since — 46 years and counting. The US has imposed crushing sanctions, nearly gone to war multiple times, and in 2026 launched strikes against Iranian nuclear facilities.',
    lesson: 'Installing a dictator to protect oil interests created a 46-year adversary and counting.',
    aidGiven: '$28B in military aid and weapons sales to the Shah',
    costToFight: 'Decades of sanctions, frozen assets, naval confrontations, and the 2026 strikes',
  },
  {
    name: 'Saddam Hussein',
    period: '1980–2003',
    allyPhase: 'During the Iran-Iraq War (1980–1988), the Reagan administration provided Saddam Hussein with intelligence, weapons, agricultural credits (diverted to arms), and diplomatic cover. Donald Rumsfeld personally shook Saddam\'s hand in 1983. The US knew Saddam was using chemical weapons against Iran and the Kurds — and continued support anyway. The famous photo of Rumsfeld smiling with Saddam remains one of the most damning images in American foreign policy.',
    enemyPhase: 'When Saddam invaded Kuwait in 1990, he became America\'s top enemy overnight. The Gulf War (1991) was followed by 12 years of sanctions that killed an estimated 500,000 Iraqi children. Then came the 2003 invasion based on fabricated WMD intelligence. The Iraq War cost $3 trillion, killed 300,000+ Iraqis, destabilized the entire region, and created ISIS.',
    lesson: 'The US armed Saddam against Iran, then spent $3 trillion fighting him and dealing with the aftermath.',
    aidGiven: '$5.1B in credits, intelligence, and dual-use technology',
    costToFight: '$1.1 trillion direct costs; $3T+ total including long-term veteran care and interest',
  },
  {
    name: 'Osama bin Laden & the Mujahideen',
    period: '1979–2011',
    allyPhase: 'Operation Cyclone was the CIA\'s covert program to arm and fund the Afghan mujahideen fighting the Soviet Union. Between 1979 and 1989, the US funneled $3.3 billion through Pakistan\'s ISI to various rebel groups — including Arab fighters who would later form al-Qaeda. The CIA provided Stinger missiles, training, and logistics. Osama bin Laden, a wealthy Saudi, was among those who benefited from this pipeline. Zbigniew Brzezinski bragged about "giving the Soviets their Vietnam."',
    enemyPhase: 'On September 11, 2001, al-Qaeda killed 2,977 Americans using the organizational infrastructure and combat experience developed during the anti-Soviet jihad. The resulting War on Terror has cost $8 trillion, killed 929,000 people, displaced 38 million, and spanned operations in 85 countries over 24 years. The weapons, training, and ideology the US helped cultivate came back with catastrophic force.',
    lesson: 'The $3.3B invested in the mujahideen generated the $8 trillion War on Terror — history\'s worst ROI.',
    aidGiven: '$3.3B in weapons, training, and funding via Operation Cyclone',
    costToFight: '$5.8 trillion in War on Terror costs (Brown University Costs of War Project)',
  },
  {
    name: 'Manuel Noriega',
    period: '1966–1989',
    allyPhase: 'Manuel Noriega was on the CIA payroll from 1966. He was recruited as an intelligence asset while still a military cadet. As he rose through Panama\'s ranks, the CIA increased his salary — eventually paying him $200,000/year. He provided intelligence on Cuba, helped funnel arms to the Contras, and allowed the US to use Panama as a base for covert operations. The DEA knew he was trafficking drugs. The CIA didn\'t care.',
    enemyPhase: 'By 1988, Noriega had become inconvenient. He was indicted on drug trafficking charges, and in December 1989, the US invaded Panama in Operation Just Cause — killing an estimated 500-4,000 Panamanians (the US claimed 200 civilian deaths; independent investigators found far more). US troops blasted heavy metal music at the Vatican embassy where Noriega had taken refuge. He surrendered after 10 days and served 17 years in US prison.',
    lesson: 'The CIA paid Noriega for 23 years, overlooked his drug trafficking, then invaded his country to remove him.',
    aidGiven: '$320K+/year CIA salary, plus military aid to Panama',
    costToFight: '$1.5B for Operation Just Cause; 23 US soldiers killed; 500-4,000 Panamanian civilians killed',
  },
  {
    name: 'The Taliban',
    period: '1994–2021',
    allyPhase: 'After the Soviet withdrawal from Afghanistan in 1989, the country descended into civil war. Pakistan\'s ISI — with tacit US approval — helped create and arm the Taliban in 1994 as a stabilizing force. The US initially viewed the Taliban favorably: they were anti-Iranian, anti-communist, and the oil company Unocal was negotiating a pipeline deal through Taliban territory. A Taliban delegation visited Texas in 1997. The US gave $43 million in aid to Afghanistan in May 2001 — just four months before 9/11.',
    enemyPhase: 'After 9/11, the Taliban refused to hand over bin Laden (they offered to try him in an Islamic court, which the US rejected). The US invaded in October 2001. Twenty years, $2.3 trillion, 2,461 US soldiers killed, and 176,000 total deaths later, the Taliban recaptured Kabul in August 2021 as the US withdrew in chaos. The Taliban now governs Afghanistan with American military equipment left behind — including Black Hawk helicopters and armored vehicles.',
    lesson: 'The US tacitly supported Taliban creation, fought them for 20 years, spent $2.3 trillion, and they won anyway.',
    aidGiven: '$43M in aid (2001); indirect support through Pakistan ISI',
    costToFight: '$2.3 trillion over 20 years; 2,461 US soldiers; 176,000 total killed',
  },
  {
    name: 'Muammar Gaddafi',
    period: '2003–2011',
    allyPhase: 'After decades as a pariah, Gaddafi cut a deal in 2003: he gave up his nuclear weapons program and opened Libya\'s oil to Western companies. In exchange, sanctions were lifted. Tony Blair visited Tripoli. Condoleezza Rice met Gaddafi. The CIA established a joint intelligence program. Libya became a key partner in the War on Terror, hosting CIA black sites and rendition flights. Gaddafi was rehabilitated — proof that "diplomacy works."',
    enemyPhase: 'In 2011, during the Arab Spring, NATO intervened in Libya\'s civil war. The US led the bombing campaign that helped rebels capture and brutally kill Gaddafi. Hillary Clinton laughed on camera: "We came, we saw, he died." Libya collapsed into a failed state with open-air slave markets, multiple competing governments, and ongoing civil war. The lesson every dictator learned: giving up your weapons gets you killed.',
    lesson: 'Gaddafi gave up his WMDs in exchange for normalized relations. NATO bombed him anyway. North Korea took notes.',
    aidGiven: 'Diplomatic normalization, sanctions relief, intelligence cooperation',
    costToFight: '$2.2B in military operations; Libya became a failed state',
  },
]

const thePattern = [
  { step: '1', title: 'Identify a Useful Strongman', desc: 'Find a leader or group who opposes whoever America currently opposes. Ideological alignment is irrelevant — only strategic utility matters.' },
  { step: '2', title: 'Arm, Fund, Train', desc: 'Provide weapons, money, intelligence, and diplomatic cover. Overlook human rights abuses, drug trafficking, or authoritarianism. "He\'s a son of a bitch, but he\'s our son of a bitch."' },
  { step: '3', title: 'Strategic Realignment', desc: 'Geopolitics shifts. The former ally is no longer useful, becomes inconvenient, or starts acting independently. Yesterday\'s freedom fighter becomes today\'s terrorist.' },
  { step: '4', title: 'Demonize', desc: 'The media campaign begins. The ally\'s crimes — previously ignored — are now front-page news. Intelligence is cherry-picked or fabricated. The public is prepared for war.' },
  { step: '5', title: 'Invade, Sanction, or Overthrow', desc: 'Military action follows. The cost in lives and treasure dwarfs the original investment. The resulting instability creates new enemies, and the cycle begins again.' },
]

export default function AlliesAndEnemiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Allies & Enemies' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Allies &amp; Enemies
        </h1>
        <p className="text-xl text-stone-300 mb-4">How America Arms Today&apos;s Ally and Fights Tomorrow&apos;s Enemy</p>
        <p className="text-stone-400 text-lg">
          The United States has a pattern so consistent it should be studied in every political science class: 
          identify a useful strongman, arm him to the teeth, overlook his crimes while he serves American interests, 
          then spend trillions fighting him when the relationship sours. Saddam Hussein shook hands with Donald 
          Rumsfeld. Osama bin Laden was funded by CIA money. Manuel Noriega was on the CIA payroll. The Taliban 
          were America&apos;s proxy warriors. This isn&apos;t conspiracy theory — it&apos;s documented history, 
          exposed by congressional investigations, declassified documents, and the participants themselves.
        </p>
      </div>

      <ShareButtons title="Allies & Enemies: How America Arms Its Future Wars" />

      {/* The Pattern */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Five-Step Pattern</h2>
        <p className="text-stone-600 mb-6">
          Every case follows the same playbook. Once you see the pattern, you can&apos;t unsee it:
        </p>
        <div className="space-y-4">
          {thePattern.map((p) => (
            <div key={p.step} className="flex gap-4 items-start bg-red-950/20 border border-red-900/30 rounded-lg p-5">
              <span className="bg-red-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">{p.step}</span>
              <div>
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-stone-600 mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AllyEnemyTimelineChart />
      <BlowbackCostChart />

      {/* Case Studies */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Case Studies</h2>

        {caseStudies.map((cs, i) => (
          <div key={cs.name} className="mb-12">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-1">{cs.name}</h3>
            <p className="text-stone-500 text-sm mb-4">{cs.period}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-950/20 border border-green-900/30 rounded-lg p-5">
                <h4 className="text-green-400 font-bold mb-2">🤝 The Alliance Phase</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{cs.allyPhase}</p>
                <p className="text-green-400 text-xs mt-3 font-semibold">{cs.aidGiven}</p>
              </div>
              <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-5">
                <h4 className="text-red-400 font-bold mb-2">💥 The Enemy Phase</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{cs.enemyPhase}</p>
                <p className="text-red-400 text-xs mt-3 font-semibold">{cs.costToFight}</p>
              </div>
            </div>

            <div className="bg-stone-100 rounded-lg p-4">
              <p className="text-stone-700 text-sm"><strong>The Lesson:</strong> {cs.lesson}</p>
            </div>

            {i < caseStudies.length - 1 && <hr className="my-8 border-stone-200" />}
          </div>
        ))}
      </section>

      <PatternChart />
      <ArmsSalesChart />

      {/* Who's Next? */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Who&apos;s Next?</h2>
        <p className="text-stone-600 mb-4">
          If the pattern holds, the question isn&apos;t <em>whether</em> a current US ally will become an enemy — 
          it&apos;s <em>which one</em>. Consider today&apos;s relationships through the lens of history:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-amber-950/20 border border-amber-900/30 rounded-lg p-5">
            <h3 className="font-bold text-amber-400 mb-2">🇸🇦 Saudi Arabia</h3>
            <p className="text-stone-600 text-sm">
              The US has sold $110B+ in weapons to Saudi Arabia. 15 of the 19 9/11 hijackers were Saudi citizens. 
              Saudi Arabia exports Wahhabist ideology globally, dismembers journalists, and conducts a devastating 
              war in Yemen with American weapons. The alliance is built on oil and arms sales — the same transactional 
              foundation that defined every ally-turned-enemy.
            </p>
          </div>
          <div className="bg-amber-950/20 border border-amber-900/30 rounded-lg p-5">
            <h3 className="font-bold text-amber-400 mb-2">🇵🇰 Pakistan</h3>
            <p className="text-stone-600 text-sm">
              Pakistan received $33B in US aid since 2001 while sheltering Osama bin Laden (found 1 mile from 
              Pakistan&apos;s military academy), supporting the Taliban through the ISI, and proliferating nuclear 
              technology through the A.Q. Khan network. The alliance is one strategic realignment away from becoming 
              the next adversarial relationship.
            </p>
          </div>
          <div className="bg-amber-950/20 border border-amber-900/30 rounded-lg p-5">
            <h3 className="font-bold text-amber-400 mb-2">🇪🇬 Egypt</h3>
            <p className="text-stone-600 text-sm">
              The US provides $1.3B/year in military aid to Egypt&apos;s military dictatorship — making it the 
              second-largest recipient after Israel. The Sisi regime has imprisoned 60,000+ political prisoners, 
              massacred 1,000 protesters at Rabaa, and crushes all dissent. History suggests propping up authoritarian 
              regimes creates eventual blowback.
            </p>
          </div>
          <div className="bg-amber-950/20 border border-amber-900/30 rounded-lg p-5">
            <h3 className="font-bold text-amber-400 mb-2">🇦🇪 UAE</h3>
            <p className="text-stone-600 text-sm">
              The UAE has received $23B in US weapons, hosts 5,000 US troops, and is America&apos;s key Middle Eastern 
              partner. But the UAE also uses American surveillance technology for domestic repression, hired former NSA 
              hackers for Project Raven, and has been accused of war crimes in Yemen and Libya. Sound familiar?
            </p>
          </div>
        </div>
      </section>

      {/* The Revolving Door */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Economics of Enemy-Making</h2>
        <p className="text-stone-600 mb-4">
          There&apos;s a perverse economic logic to the ally-to-enemy pipeline. Defense contractors profit twice: 
          first from arming the ally, then from fighting the enemy. The same companies that sold weapons to Iraq 
          in the 1980s won contracts to fight Iraq in the 2000s. Lockheed Martin, Raytheon, and Boeing don&apos;t 
          care which side they&apos;re supplying — only that there&apos;s a side to supply.
        </p>

        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-6">
          <h3 className="text-red-400 font-bold text-lg mb-3">The Numbers Don&apos;t Lie</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-bold text-white">$36.7B</p>
              <p className="text-stone-400 text-sm">Total aid given to allies who became enemies</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">$11.5T+</p>
              <p className="text-stone-400 text-sm">Total cost to fight those same enemies</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">313x</p>
              <p className="text-stone-400 text-sm">Average cost multiplier (aid given → cost to fight)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Keeps Happening */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Why It Keeps Happening</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl mb-2">Short-Term Thinking</h3>
            <p className="text-stone-600">
              Presidents serve 4-8 years. The consequences of arming a dictator take 10-30 years to materialize. 
              No president has ever been held accountable for creating a future enemy — the blowback always arrives 
              on someone else&apos;s watch. Reagan armed the mujahideen; Bush II dealt with al-Qaeda. Carter installed 
              the Shah; Carter also dealt with the hostage crisis — but that was the exception, not the rule.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">Institutional Incentives</h3>
            <p className="text-stone-600">
              The CIA needs assets. The Pentagon needs bases. Defense contractors need customers. The State Department 
              needs allies. Every institution in the national security apparatus benefits from relationships with 
              strongmen — and none bears the cost when those relationships collapse. The benefits are concentrated 
              and immediate; the costs are diffuse and delayed.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">Historical Amnesia</h3>
            <p className="text-stone-600">
              Americans don&apos;t learn this history. The Rumsfeld-Saddam handshake isn&apos;t in most textbooks. 
              Operation Cyclone isn&apos;t taught in high schools. The CIA-Noriega relationship isn&apos;t common 
              knowledge. Without historical memory, the public can&apos;t recognize the pattern — and each new 
              alliance with a dictator seems like a fresh, reasonable decision rather than the latest iteration 
              of a proven failure.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">The &ldquo;Enemy of My Enemy&rdquo; Fallacy</h3>
            <p className="text-stone-600">
              Every one of these alliances was justified by the same logic: the enemy of my enemy is my friend. 
              Saddam fights Iran? Arm him. Mujahideen fight the Soviets? Fund them. Noriega opposes the Sandinistas? 
              Pay him. The logic is seductive and consistently catastrophic. The enemy of your enemy is not your 
              friend — he&apos;s someone who happens to share one adversary right now.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <blockquote className="border-l-4 border-red-800 pl-6 my-8 italic text-stone-600 text-lg">
        &ldquo;He may be a son of a bitch, but he&apos;s our son of a bitch.&rdquo;
        <span className="block text-sm not-italic text-stone-500 mt-2">
          — Attributed to FDR (about Nicaraguan dictator Anastasio Somoza), a phrase that has defined US foreign policy for 80 years
        </span>
      </blockquote>

      {/* Conclusion */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Cycle Continues</h2>
        <p className="text-stone-600 mb-4">
          As of 2025, the United States maintains military partnerships with 73 countries, sells weapons to 
          96 nations, and operates in the shadows through CIA relationships that remain classified. Somewhere 
          in that web of alliances is the next Saddam, the next bin Laden, the next Noriega — a useful asset 
          today who will become tomorrow&apos;s justification for a trillion-dollar war.
        </p>
        <p className="text-stone-600 mb-4">
          The pattern is not a bug. It&apos;s a feature of a system designed to sustain perpetual conflict. 
          Defense contractors need enemies. Intelligence agencies need assets. Politicians need threats. And the 
          cycle of arming allies who become enemies provides all three — at a cost measured in trillions of 
          dollars and millions of lives.
        </p>
        <p className="text-stone-600 font-semibold">
          We armed them. We trained them. We looked the other way. And then we acted surprised when they 
          turned those weapons on us. Every single time.
        </p>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <div className="bg-stone-50 rounded-lg p-6 text-sm text-stone-600 space-y-2">
          <p>• <strong>Operation Ajax:</strong> CIA declassified documents (2013); Kinzer, Stephen. <em>All the Shah&apos;s Men</em></p>
          <p>• <strong>Saddam-US relationship:</strong> National Security Archive, George Washington University; Rumsfeld-Saddam meeting cables (declassified)</p>
          <p>• <strong>Operation Cyclone:</strong> Coll, Steve. <em>Ghost Wars</em>; Congressional Research Service reports on Afghan aid</p>
          <p>• <strong>Noriega-CIA:</strong> Senate Foreign Relations Committee, Subcommittee on Terrorism, Narcotics, and International Operations (Kerry Committee, 1989)</p>
          <p>• <strong>Taliban origins:</strong> Rashid, Ahmed. <em>Taliban</em>; 9/11 Commission Report</p>
          <p>• <strong>Libya intervention:</strong> House Foreign Affairs Committee; UK Parliament Libya Report (2016)</p>
          <p>• <strong>War on Terror costs:</strong> Brown University Costs of War Project (2023)</p>
          <p>• <strong>Arms sales data:</strong> Stockholm International Peace Research Institute (SIPRI); Defense Security Cooperation Agency</p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/blowback" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Blowback</h3>
            <p className="text-stone-500 text-sm">The CIA&apos;s term for unintended consequences of covert operations.</p>
          </Link>
          <Link href="/analysis/shadow-wars" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Shadow Wars</h3>
            <p className="text-stone-500 text-sm">America&apos;s secret wars in 134+ countries.</p>
          </Link>
          <Link href="/analysis/war-on-terror" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">The War on Terror</h3>
            <p className="text-stone-500 text-sm">$8 trillion and 929,000 dead — the ultimate blowback.</p>
          </Link>
          <Link href="/analysis/war-profiteering" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">War Profiteering</h3>
            <p className="text-stone-500 text-sm">Defense stocks up 1,200%+ since 9/11.</p>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
