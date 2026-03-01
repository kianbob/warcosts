import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'Blowback — The Concept That Explains Everything | WarCosts',
  description: 'The CIA coined "blowback" for unintended consequences of covert operations. Iran 1953→1979. Afghanistan→9/11. Iraq→ISIS. The pattern never breaks.',
  openGraph: {
    title: 'Blowback — The Concept That Explains Everything',
    description: 'Iran 1953→1979. Afghanistan→9/11. Iraq→ISIS. Libya→Failed State. Every intervention creates the next crisis.',
    url: 'https://www.warcosts.org/analysis/blowback',
  },
}

const cases = [
  {
    title: 'Iran: 1953 → 1979 → 2026',
    slug: 'iran-1953',
    action: 'In 1953, the CIA and MI6 overthrew Iran\'s democratically elected Prime Minister Mohammad Mossadegh in Operation Ajax. Mossadegh\'s crime: nationalizing Iran\'s oil industry, which had been controlled by the Anglo-Iranian Oil Company (now BP). The US installed Shah Mohammad Reza Pahlavi, who ruled as a brutal autocrat for 26 years, backed by the SAVAK secret police (trained by the CIA and Mossad).',
    blowback: 'The Shah\'s repression — torture, political imprisonment, crushing dissent — radicalized Iranian society. In 1979, the Islamic Revolution overthrew the Shah and installed Ayatollah Khomeini\'s theocratic government. The hostage crisis followed. Then 45+ years of hostility, sanctions, proxy wars, and escalation. In 2026, the US bombed Iran — the regime that exists only because the US destroyed Iran\'s democracy in 1953.',
    lesson: 'The regime we\'re bombing exists because of the last time we did this. This is blowback in its purest form — a 73-year chain of consequences from a single covert operation.',
    links: ['/conflicts/iran-1953', '/analysis/iran-2026'],
  },
  {
    title: 'Afghanistan: 1979 → 2001 → 2021',
    slug: 'afghanistan',
    action: 'Starting in 1979, the CIA launched Operation Cyclone — the largest covert operation in CIA history at the time. The US funneled $3+ billion (plus matching Saudi funds) to arm and train the Afghan mujahideen fighting the Soviet occupation. The money flowed through Pakistan\'s ISI intelligence service, which directed much of it to the most radical Islamist factions. Among the foreign fighters drawn to the jihad: a young Saudi named Osama bin Laden.',
    blowback: 'The mujahideen defeated the Soviets in 1989. The US immediately lost interest in Afghanistan. The power vacuum produced the Taliban (students from Pakistani madrasas, many funded by Saudi money). Bin Laden established Al-Qaeda. On 9/11, Al-Qaeda — born from the networks the CIA helped build — attacked America. The US then spent 20 years and $2.3 trillion fighting in Afghanistan. The Taliban returned to power in 2021. Full circle.',
    lesson: 'The US armed and trained the people who would attack it 20 years later, then spent 20 more years and $2.3 trillion fighting them, then left — and they took power again. Three cycles of blowback from one covert operation.',
    links: ['/conflicts/afghanistan'],
  },
  {
    title: 'Iraq: 2003 → ISIS → Regional Chaos',
    slug: 'iraq-war',
    action: 'In 2003, the US invaded Iraq based on false claims about weapons of mass destruction. After toppling Saddam, the US made a catastrophic decision: L. Paul Bremer\'s Coalition Provisional Authority Order Number 2 disbanded the entire Iraqi military — 400,000 armed, trained men, sent home with no pay, no pension, and no future. This was done against the advice of the CIA, the State Department, and multiple military commanders.',
    blowback: 'Those 400,000 ex-soldiers, humiliated and destitute, became the backbone of the insurgency. Many joined Al-Qaeda in Iraq (AQI), which later became ISIS. By 2014, ISIS — led by former Iraqi military officers, driving captured American Humvees, firing captured American weapons — controlled territory the size of Great Britain across Iraq and Syria. The US then spent years and billions more fighting the terrorist organization that its own invasion created.',
    lesson: 'Every predicted consequence materialized. The CIA warned. The State Department warned. The military warned. The decision-makers ignored them all. And ISIS fighters drove American vehicles and fired American weapons.',
    links: ['/conflicts/iraq-war'],
  },
  {
    title: 'Libya: 2011 → Failed State → Sahel Crisis',
    slug: 'libya',
    action: 'In 2011, a US-led NATO coalition bombed Libya and helped rebels overthrow Muammar Gaddafi. There was no post-war plan. NATO\'s mandate was to "protect civilians" — but the actual goal was regime change. President Obama authorized the operation without congressional approval, calling it a "kinetic military action" to avoid the word "war."',
    blowback: 'Libya collapsed into a failed state. Two rival governments. Militias controlling neighborhoods. Open-air slave markets where African migrants are bought and sold. Gaddafi\'s vast weapons stockpiles — including anti-aircraft missiles, RPGs, and heavy weapons — flooded across the Sahel region. These weapons fueled insurgencies in Mali, Niger, Burkina Faso, and Nigeria. The entire Sahel destabilized. France deployed troops. The US deployed special operations forces. A new theater of the War on Terror — created entirely by the previous intervention.',
    lesson: 'Obama later called Libya the "worst mistake" of his presidency. The weapons that overthrew Gaddafi are now in the hands of insurgents across a dozen African countries. Blowback doesn\'t stay in one country.',
    links: ['/conflicts/libya'],
  },
  {
    title: 'Syria: 2011 → Refugee Crisis → European Far-Right',
    slug: 'syria',
    action: 'Starting in 2012, the CIA ran Operation Timber Sycamore — a $1+ billion covert program to arm "moderate rebels" fighting Assad. The Pentagon ran a separate program. These overlapping, uncoordinated efforts armed dozens of rebel factions. Many of the weapons ended up in the hands of jihadist groups, including Al-Qaeda\'s Syrian affiliate (Jabhat al-Nusra). At one point, CIA-backed rebels were literally fighting Pentagon-backed rebels.',
    blowback: 'Syria became a charnel house: 500,000+ dead, 13 million displaced (half the population). The power vacuum allowed ISIS to seize vast territory. Russia intervened militarily. Iran expanded its influence. Turkey invaded US-allied Kurdish areas. Millions of refugees fled to Europe, triggering the 2015 migration crisis — which fueled the rise of far-right, anti-immigrant parties across Europe. Brexit. Le Pen. AfD. Orbán. The political map of Europe was reshaped by blowback from a covert CIA operation in Syria.',
    lesson: 'The ripple effects crossed continents and reshaped the politics of an entire hemisphere. Blowback doesn\'t respect borders.',
    links: ['/conflicts/syria'],
  },
  {
    title: 'Guatemala: 1954 → Civil War → US Border Crisis',
    slug: 'guatemala-1954',
    action: 'In 1954, the CIA overthrew Guatemala\'s democratically elected President Jacobo Árbenz in Operation PBSUCCESS. Árbenz\'s crime: land reform that threatened United Fruit Company\'s profits. The CIA installed a military dictatorship.',
    blowback: 'A 36-year civil war followed. 200,000 people were killed, the vast majority indigenous Maya civilians. The UN documented genocide. Decades of military rule, death squads, and economic devastation created the conditions for the migration crisis that Americans now complain about. Central Americans showing up at the US border are, in many cases, fleeing the consequences of a 1954 CIA coup.',
    lesson: 'Americans who complain about Central American immigration are living with the blowback of their own government\'s actions 70 years ago.',
    links: ['/conflicts/guatemala-1954'],
  },
  {
    title: 'Chile: 1973 → Pinochet → Neoliberal Experiment',
    slug: 'chile-1973',
    action: 'In 1973, the CIA supported the military coup that overthrew Chile\'s democratically elected President Salvador Allende. Declassified documents show Henry Kissinger personally approved destabilization operations. General Augusto Pinochet seized power.',
    blowback: '17-year dictatorship. 3,200 murdered. 40,000 tortured. 200,000 exiled. Pinochet\'s Chile became a laboratory for radical free-market economics (the "Chicago Boys"), whose policies — privatization, deregulation, austerity — were later exported worldwide. The economic model that destroyed the Chilean middle class was presented as a "miracle" and replicated across Latin America and beyond.',
    lesson: 'Kissinger\'s fingerprints are on thousands of deaths. Declassified in the 1990s. No prosecution. No accountability.',
    links: ['/conflicts/chile-1973'],
  },
]

export default function BlowbackPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd title="Blowback — The Concept That Explains Everything" description="The CIA coined the term. Iran, Afghanistan, Iraq, Libya, Syria — every US intervention creates the next crisis. The pattern has never broken." slug="blowback" />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Blowback' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          Blowback
        </h1>
        <p className="text-xl text-stone-300 mb-4">The Concept That Explains Everything</p>
        <p className="text-stone-400 text-lg">
          The CIA coined the term &ldquo;blowback&rdquo; in a classified post-action report on the 1953 Iranian coup.
          The concept is devastatingly simple: covert actions have unintended consequences that &ldquo;blow back&rdquo;
          on the country that initiated them. Seven decades later, blowback has become the defining pattern
          of American foreign policy — a self-perpetuating cycle in which each intervention creates the crisis
          that justifies the next intervention. The US armed the mujahideen who became Al-Qaeda. Invaded Iraq
          and created ISIS. Bombed Libya and destabilized the Sahel. Armed Syrian rebels and fueled Europe&apos;s
          migration crisis. And in 2026, bombed the Iranian regime that exists because of a 1953 CIA coup.
        </p>
      </div>

      <ShareButtons title="Blowback: The Concept That Explains Everything" />

      {/* Key quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;A nation that sows the wind cannot expect to harvest calm.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Chalmers Johnson, <em>Blowback: The Costs and Consequences of American Empire</em>, 2000</p>
        <p className="text-stone-500 text-sm mt-2">
          Published one year before 9/11 proved his thesis in the most devastating way possible.
        </p>
      </div>

      {/* Chalmers Johnson */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Chalmers Johnson&apos;s Blowback Trilogy</h2>
        <p className="text-stone-700 mb-4">
          Political scientist <strong>Chalmers Johnson</strong> spent his career as a Cold War hawk — a CIA consultant,
          Asia expert, and defender of American military policy. Then he started looking at the evidence. What he found
          changed his mind entirely, and he spent the rest of his life warning America about the consequences of empire.
        </p>
        <p className="text-stone-700 mb-4">
          His three books form the most comprehensive analysis of American imperial blowback ever written:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary"><em>Blowback</em> (2000)</h3>
            <p className="text-sm text-stone-700">
              Published one year before 9/11, Johnson warned that America&apos;s global military presence and covert
              interventions were creating enemies faster than they could be killed. He predicted that blowback from
              US policies in the Middle East would eventually reach American soil. On September 11, 2001, it did.
              The book became a bestseller overnight.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary"><em>The Sorrows of Empire</em> (2004)</h3>
            <p className="text-sm text-stone-700">
              Johnson documented how the US military&apos;s global base network — 750+ installations in 80 countries —
              functions as an empire in everything but name. He showed how bases create permanent political constituencies
              for war, corrupt local politics, generate resentment, and ensure that the cycle of intervention never ends.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary"><em>Nemesis: The Last Days of the American Republic</em> (2006)</h3>
            <p className="text-sm text-stone-700">
              Johnson argued that the combination of military overreach, executive power expansion, and the
              military-industrial complex would eventually destroy American democracy itself — just as militarism
              destroyed the Roman Republic. He warned that America was choosing empire over republic, and that
              the choice was irreversible.
            </p>
          </div>
        </div>
        <blockquote className="border-l-4 border-red-700 pl-4 text-stone-600 italic">
          &ldquo;However pathological the process may seem, blowback is a legitimate and predictable consequence of
          covert operations. There is a direct line between the actions of the CIA in 1953 and the hostage crisis
          of 1979, between Operation Cyclone and 9/11, between the Iraq invasion and the rise of ISIS.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Chalmers Johnson</span>
        </blockquote>
      </div>

      {/* Ron Paul */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">Ron Paul&apos;s Famous Debate Moment (2007)</h2>
        <p className="text-stone-700 mb-4">
          On May 15, 2007, during a Republican presidential primary debate in South Carolina, Congressman Ron Paul
          explained the concept of blowback to a national audience — and was booed for it. The exchange with
          Rudy Giuliani became one of the most famous moments in modern debate history:
        </p>
        <div className="bg-white rounded-lg p-4 mb-4">
          <p className="text-sm text-stone-700 mb-3">
            <strong>Ron Paul:</strong> <em>&ldquo;They don&apos;t come here to attack us because we&apos;re rich and free.
            They come and attack us because we&apos;re over there. Have you ever read about the reasons they attacked us?
            They attack us because we&apos;ve been over there. We&apos;ve been bombing Iraq for 10 years... We&apos;ve been in
            the Middle East. I think Reagan was right. We don&apos;t understand the irrationality of Middle Eastern politics.
            Right now, we&apos;re building an embassy in Iraq that&apos;s bigger than the Vatican. We&apos;re building 14
            permanent bases. What would we say here if China was doing this in our country or in the Gulf of Mexico?
            We would be fighting tooth and nail!&rdquo;</em>
          </p>
          <p className="text-sm text-stone-700 mb-3">
            <strong>Giuliani:</strong> <em>&ldquo;That&apos;s really an extraordinary statement... that we invited the
            attack because we were attacking Iraq. I don&apos;t think I&apos;ve ever heard that before, and I&apos;ve
            heard some pretty absurd explanations for September 11th.&rdquo;</em>
          </p>
          <p className="text-sm text-stone-700">
            The audience cheered Giuliani and booed Paul. But Paul was citing the 9/11 Commission&apos;s own findings.
            Co-chair Lee Hamilton later confirmed: <em>&ldquo;That&apos;s exactly right.&rdquo;</em> Osama bin Laden
            himself had cited three specific grievances for 9/11: US troops in Saudi Arabia, US support for Israel,
            and US sanctions killing Iraqi children. All were US foreign policy choices.
          </p>
        </div>
        <p className="text-stone-700">
          Paul was booed in 2007. By 2020, both the Republican and Democratic nominees ran on ending &ldquo;forever wars.&rdquo;
          The concept of blowback had gone from heresy to mainstream — it just took 13 years and trillions more dollars.
        </p>
      </div>

      {/* Case studies */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Case Studies</h2>
      <p className="text-stone-500 text-sm mb-6">Seven decades of intervention. Seven decades of consequences. The pattern has never broken.</p>
      <div className="space-y-8 mb-8">
        {cases.map(c => (
          <div key={c.title} className="bg-white rounded-lg border p-6">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">{c.title}</h2>
            <div className="space-y-4">
              <div className="bg-stone-50 rounded p-4">
                <p className="text-xs font-semibold text-muted uppercase mb-1">The Action</p>
                <p className="text-sm text-stone-700">{c.action}</p>
              </div>
              <div className="bg-red-50 rounded p-4 border border-red-200">
                <p className="text-xs font-semibold text-red-600 uppercase mb-1">The Blowback</p>
                <p className="text-sm text-stone-700">{c.blowback}</p>
              </div>
              <div className="bg-amber-50 rounded p-4 border border-amber-200">
                <p className="text-xs font-semibold text-amber-700 uppercase mb-1">The Lesson</p>
                <p className="text-sm text-stone-700 font-medium">{c.lesson}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              {c.links.map(l => (
                <Link key={l} href={l} className="text-xs text-red-800 hover:underline">→ {l}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* The Cycle */}
      <div className="bg-amber-50 rounded-xl p-8 mb-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">The Blowback Cycle</h2>
        <p className="text-stone-700 mb-4">
          The pattern is so consistent it can be diagrammed. Every case study above follows the same steps:
        </p>
        <div className="space-y-3 mb-4">
          {[
            { step: '1', label: 'INTERVENE', desc: 'Overthrow a government, arm a faction, bomb a country. Declare a threat that requires American military action.' },
            { step: '2', label: 'DECLARE VICTORY', desc: '"Mission Accomplished." Move on to the next crisis. Stop paying attention.' },
            { step: '3', label: 'DESTABILIZE', desc: 'Power vacuum creates chaos. Extremists fill the void. Weapons disperse. Refugees flee.' },
            { step: '4', label: 'BLOWBACK ARRIVES', desc: 'Terrorism, failed states, migration crises, new enemies. The consequences of the intervention become a new "threat."' },
            { step: '5', label: 'INTERVENE AGAIN', desc: 'Use the blowback as justification for new intervention. "We must act." "They hate us." "National security."' },
            { step: '6', label: 'REPEAT', desc: 'The cycle has been running since 1953. It has never produced lasting stability. It has never been broken.' },
          ].map(s => (
            <div key={s.step} className="flex items-start gap-3">
              <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">{s.step}</span>
              <div>
                <p className="font-semibold text-amber-800">{s.label}</p>
                <p className="text-sm text-stone-700">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-stone-700 font-semibold">
          This cycle has produced: ISIS, Al-Qaeda, the Taliban, the Iranian Revolution, Central American migration crises,
          European far-right movements, and the permanent &ldquo;War on Terror.&rdquo; Each intervention creates the
          justification for the next one. The system is self-perpetuating — and self-funding.
        </p>
      </div>

      {/* Israel/Palestine */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Israel/Palestine: Blowback from Colonial Decisions</h2>
        <p className="text-stone-700 mb-4">
          The Israel-Palestine conflict is arguably the longest-running case of blowback in modern history — rooted in
          colonial-era decisions that continue to generate consequences 100+ years later.
        </p>
        <p className="text-stone-700 mb-4">
          The 1917 Balfour Declaration (Britain promising a &ldquo;national home for the Jewish people&rdquo; in
          Palestine — which Britain didn&apos;t own and where 90% of the population was Arab) set in motion a chain
          of events that has never stopped generating conflict. The creation of Israel in 1948, the displacement
          of 700,000 Palestinians (the Nakba), the 1967 occupation, the settlement project, the intifadas, the
          blockade of Gaza, and the cycles of violence that continue to this day — all flow from decisions made
          by colonial powers over the heads of the people who lived there.
        </p>
        <p className="text-stone-700 mb-4">
          US involvement deepened the blowback. $174 billion in cumulative aid to Israel. Vetoing dozens of
          UN Security Council resolutions critical of Israeli actions. Providing the weapons used in operations
          that killed thousands of civilians. Osama bin Laden explicitly cited US support for Israel as one of
          three motivations for 9/11. The October 7, 2023 Hamas attack and the devastating Israeli response
          that followed — leading ultimately to the 2026 Iran war — represent the latest iteration of a
          blowback chain that stretches back over a century.
        </p>
      </div>

      {/* Drone strikes creating enemies */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Drone Strikes: Creating Enemies Faster Than You Can Kill Them</h2>
        <p className="text-stone-700 mb-4">
          Multiple studies have documented how drone strikes generate blowback in real time:
        </p>
        <div className="space-y-3 mb-4">
          {[
            { source: 'Stimson Center (2015)', finding: 'Drone strikes in Yemen correlated with a dramatic increase in AQAP recruitment — from ~300 members pre-drone campaign to 4,000+.' },
            { source: 'General McChrystal', finding: '"For every innocent person you kill, you create 10 new enemies." — The former commander of US forces in Afghanistan.' },
            { source: 'New York University / Stanford (2012)', finding: 'The Living Under Drones report documented communities in Pakistan living in constant terror — children afraid to go to school, adults afraid to gather for funerals.' },
            { source: 'Former CIA Station Chief (Yemen)', finding: 'Robert Grenier warned that drone strikes "ichael were creating more militants than they were killing — and turning a contained threat into a regional one."' },
            { source: 'Faisal Shahzad (2010 Times Square bomber)', finding: 'Explicitly cited US drone strikes in Pakistan as his motivation. He was a naturalized US citizen radicalized by blowback.' },
            { source: 'Underwear Bomber (2009)', finding: 'Cited Yemen drone strikes. He was radicalized by Anwar al-Awlaki — himself radicalized by US foreign policy.' },
          ].map(s => (
            <div key={s.source} className="border-l-4 border-red-200 pl-4">
              <p className="text-sm font-semibold text-primary">{s.source}</p>
              <p className="text-sm text-stone-600">{s.finding}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700">
          The drone program is blowback in accelerated form: each strike that kills civilians creates grief,
          rage, and desire for revenge. That grief is exploited by terrorist recruiters. New militants join.
          More strikes are ordered. More civilians die. More militants join. The cycle continues — and each
          rotation expands the war to new territories and new populations.
        </p>
        <p className="text-xs text-stone-500 mt-3"><Link href="/analysis/drone-wars" className="text-red-800 hover:underline">→ Drone Wars — full analysis</Link></p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The term &ldquo;blowback&rdquo; was <strong>coined by the CIA itself</strong> in a classified report on the 1953 Iran coup. The agency knew the consequences were coming.</li>
          <li>• Osama bin Laden cited <strong>three specific US policy choices</strong> as grievances for 9/11: troops in Saudi Arabia, support for Israel, and sanctions killing Iraqi children.</li>
          <li>• ISIS fighters in 2014 drove <strong>American Humvees and fired American weapons</strong> captured from the Iraqi army the US built.</li>
          <li>• Weapons the CIA sent to &ldquo;moderate rebels&rdquo; in Syria ended up with <strong>Al-Qaeda affiliates</strong> — documented by the Pentagon&apos;s own inspector general.</li>
          <li>• The Libyan weapons that flooded the Sahel after 2011 included <strong>anti-aircraft missiles</strong> capable of shooting down commercial airliners.</li>
          <li>• Chalmers Johnson&apos;s <em>Blowback</em> was published in <strong>2000 — one year before 9/11</strong> proved his thesis.</li>
          <li>• Ron Paul was <strong>booed in 2007</strong> for explaining blowback. By 2020, both major party nominees ran on ending forever wars.</li>
          <li>• The US has attempted regime change in <strong>over 70 countries</strong> since WWII (Lindsey O&apos;Rourke, <em>Covert Regime Change</em>). The success rate is catastrophic.</li>
        </ul>
      </div>

      {/* Ron Paul closing quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;They don&apos;t come here to attack us because we&apos;re rich and free. They come and attack us because
          we&apos;re over there.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Ron Paul, 2007 Republican Presidential Debate</p>
        <p className="text-stone-500 text-sm mt-2">
          He was booed by the audience. 9/11 Commission co-chair Lee Hamilton later confirmed: &ldquo;That&apos;s exactly right.&rdquo;
        </p>
      </div>

      {/* Bottom line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <blockquote className="border-l-4 border-red-500 pl-4 mb-4 text-stone-300 italic">
          &ldquo;Those who cannot remember the past are condemned to repeat it.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— George Santayana</span>
        </blockquote>
        <p className="text-stone-300 mb-4">
          Blowback is not a theory. It is a documented, predictable, and repeated pattern in which American
          interventions create the very threats they claim to prevent. The 1953 Iran coup produced the 1979
          revolution. The Afghan mujahideen became Al-Qaeda. The Iraq invasion produced ISIS. The Libya
          bombing destabilized the Sahel. The Syria intervention fueled Europe&apos;s far-right. And the 2026
          Iran war is bombing a regime that exists because of the 1953 coup.
        </p>
        <p className="text-stone-300 mb-4">
          The cycle is not accidental. It is structurally embedded in a system where the military-industrial
          complex profits from conflict, where politicians gain from appearing &ldquo;tough,&rdquo; where
          media amplifies threats, and where the consequences of intervention are always borne by someone
          else — someone in another country, another generation, another hemisphere. The people who start
          the wars never pay the price. The people who pay the price never started the wars.
        </p>
        <p className="text-white font-semibold text-lg">
          Until America learns to recognize blowback before it arrives — rather than after — the cycle will
          continue. Each intervention will create the next crisis. Each crisis will justify the next
          intervention. And the bill, as always, will be paid in other people&apos;s blood.
        </p>
      </div>

      {/* Related */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/conflicts/iran-1953" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 1953 — The Original Sin →</h3>
          <p className="text-stone-500 text-sm">The CIA coup that started 73 years of blowback</p>
        </Link>
        <Link href="/analysis/iran-2026" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 2026 →</h3>
          <p className="text-stone-500 text-sm">The latest chapter: bombing the regime we created</p>
        </Link>
        <Link href="/analysis/forever-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Forever Wars →</h3>
          <p className="text-stone-500 text-sm">How blowback keeps wars going forever</p>
        </Link>
        <Link href="/analysis/drone-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Drone Wars →</h3>
          <p className="text-stone-500 text-sm">Creating more enemies than you kill</p>
        </Link>
        <Link href="/analysis/war-on-terror" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The War on Terror →</h3>
          <p className="text-stone-500 text-sm">$8 trillion spent on blowback from blowback</p>
        </Link>
        <Link href="/covert" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Covert Operations →</h3>
          <p className="text-stone-500 text-sm">The full list of interventions and their consequences</p>
        </Link>
      </div>

      <BackToTop />
    </div>
  )
}
