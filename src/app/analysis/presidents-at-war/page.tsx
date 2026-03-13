import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Presidents at War — Ranking Every War President by Cost & Deaths',
  description: 'Which presidents started the most wars, spent the most money, and caused the most deaths? A complete ranking of every US president who waged war.',
  openGraph: {
    title: 'Presidents at War — Every War President Ranked',
    description: 'Bush Jr: $4.3 trillion. Truman: 239,000 dead. Every president promised peace. Most delivered war.',
    url: 'https://warcosts.org/analysis/presidents-at-war',
    type: 'article',
  },
}

export default function AnalysisPresidentsPage() {
  const presidents = loadData('presidents.json')
  const stats = loadData('stats.json')

  const byCost = [...presidents].sort((a: any, b: any) => b.totalCost - a.totalCost)
  const byDeaths = [...presidents].sort((a: any, b: any) => b.totalUSDeaths - a.totalUSDeaths)
  const byConflicts = [...presidents].sort((a: any, b: any) => b.conflicts.length - a.conflicts.length)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Presidents at War — Ranking Every War President',
    description: 'Which presidents started the most wars, spent the most money, and caused the most deaths?',
    author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-03-01',
    dateModified: '2026-03-01',
    mainEntityOfPage: 'https://warcosts.org/analysis/presidents-at-war',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Presidents at War' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Presidents at War
        </h1>
        <p className="text-stone-400 text-lg">
          Every president promises peace. Most deliver war. Of {presidents.length} presidents who oversaw
          major conflicts, the combined cost exceeds {fmtMoney(stats.totalCostInflationAdjusted)} and
          the death toll surpasses {fmt(stats.totalUSDeaths)} Americans — plus millions of foreign
          civilians. Here&apos;s the full accounting.
        </p>
      </div>

      <ShareButtons title="Presidents at War — Every War President Ranked" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{presidents.length}</p>
          <p className="text-muted text-sm">Presidents with wars</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">5</p>
          <p className="text-muted text-sm">Declared wars</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(byCost[0]?.totalCost)}</p>
          <p className="text-muted text-sm">Biggest spender</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(byDeaths[0]?.totalUSDeaths)}</p>
          <p className="text-muted text-sm">Most US deaths</p>
        </div>
      </div>

      {/* Ranking by cost */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">💰 Ranked by Total War Spending (Inflation-Adjusted)</h2>
        <div className="space-y-3">
          {byCost.map((p: any, i: number) => (
            <div key={p.name} className="flex items-center gap-4">
              <span className={`font-bold font-[family-name:var(--font-heading)] text-xl w-8 ${i < 3 ? 'text-red-700' : 'text-stone-400'}`}>
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold">{p.name}</span>
                  <span className="text-red-800 font-bold">{fmtMoney(p.totalCost)}</span>
                </div>
                <div className="bg-stone-100 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-red-700 h-full rounded-full"
                    style={{ width: `${(p.totalCost / byCost[0].totalCost) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted mt-1">{p.conflicts.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ranking by deaths */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">💀 Ranked by US Military Deaths</h2>
        <div className="space-y-3">
          {byDeaths.slice(0, 10).map((p: any, i: number) => (
            <div key={p.name} className="flex items-center gap-4">
              <span className={`font-bold font-[family-name:var(--font-heading)] text-xl w-8 ${i < 3 ? 'text-red-700' : 'text-stone-400'}`}>
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold">{p.name}</span>
                  <span className="text-red-800 font-bold">{fmt(p.totalUSDeaths)}</span>
                </div>
                <div className="bg-stone-100 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-red-700 h-full rounded-full"
                    style={{ width: `${(p.totalUSDeaths / byDeaths[0].totalUSDeaths) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted mt-1">{p.conflicts.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ranking by number of conflicts */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">⚔️ Ranked by Number of Conflicts</h2>
        <div className="space-y-3">
          {byConflicts.slice(0, 10).map((p: any, i: number) => (
            <div key={p.name} className="flex items-center justify-between border-b border-stone-100 pb-2">
              <div className="flex items-center gap-3">
                <span className={`font-bold font-[family-name:var(--font-heading)] text-xl w-8 ${i < 3 ? 'text-red-700' : 'text-stone-400'}`}>
                  {i + 1}
                </span>
                <span className="font-semibold">{p.name}</span>
              </div>
              <div className="text-right">
                <span className="text-red-800 font-bold">{p.conflicts.length} conflicts</span>
                <p className="text-xs text-muted">{p.conflicts.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep profiles */}
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6 mt-12">The Worst Offenders</h2>

      {/* Bush Jr */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">George W. Bush</h3>
        <p className="text-muted mb-3">2001–2009 | {fmtMoney(byCost.find((p: any) => p.name === 'Bush Jr.')?.totalCost)} | {fmt(byCost.find((p: any) => p.name === 'Bush Jr.')?.totalUSDeaths)} US deaths</p>
        <div className="prose prose-stone max-w-none">
          <p>
            The most expensive war president in American history. Bush launched two major wars — Afghanistan
            and Iraq — plus expanded counterterrorism operations across the globe. The Iraq War was launched
            on the basis of fabricated intelligence about weapons of mass destruction. No WMDs were ever found.
          </p>
          <p>
            The combined cost of Bush&apos;s wars, including long-term veteran care and interest on war debt,
            exceeds <strong>$6 trillion</strong>. Iraq alone killed 4,599 Americans and over 300,000 Iraqi
            civilians. Afghanistan became the longest war in American history (until the withdrawal in 2021).
            The 2001 AUMF that Bush used as his primary legal authority remains in effect today — 25 years later.
          </p>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 my-4 border">
          <blockquote className="italic text-stone-600">
            &ldquo;I&apos;m a war president. I make decisions here in the Oval Office in foreign policy
            matters with war on my mind.&rdquo;
          </blockquote>
          <p className="text-muted text-xs mt-2">— George W. Bush, Meet the Press, 2004</p>
        </div>
      </div>

      {/* Obama */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Barack Obama</h3>
        <p className="text-muted mb-3">2009–2017 | 7 countries bombed | {stats.droneStrikesObama} drone strikes</p>
        <div className="prose prose-stone max-w-none">
          <p>
            Obama campaigned as the anti-war candidate and won the Nobel Peace Prize in his first year.
            He then bombed seven countries: Afghanistan, Iraq, Syria, Libya, Yemen, Somalia, and Pakistan.
            He authorized <strong>{stats.droneStrikesObama} drone strikes</strong> — nearly 10× the number
            under Bush ({stats.droneStrikesBush}).
          </p>
          <p>
            Obama&apos;s Libya intervention in 2011 was conducted without any congressional authorization
            at all. When it exceeded the War Powers Resolution&apos;s 60-day limit, his administration
            argued that dropping bombs from aircraft didn&apos;t constitute &ldquo;hostilities.&rdquo;
            His own Office of Legal Counsel disagreed. He overruled them.
          </p>
          <p>
            The drone program killed an estimated {fmt(stats.droneStrikeCivilians)}+ civilians, including
            American citizens killed without trial. Obama normalized remote-control killing as a routine
            instrument of foreign policy — conducted in secret, with no congressional oversight, and no
            accountability for civilian deaths.
          </p>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 my-4 border">
          <blockquote className="italic text-stone-600">
            &ldquo;Turns out I&apos;m really good at killing people. Didn&apos;t know that was gonna
            be a strong suit of mine.&rdquo;
          </blockquote>
          <p className="text-muted text-xs mt-2">— Barack Obama, reported by Mark Halperin and John Heilemann, <em>Double Down</em>, 2013</p>
        </div>
      </div>

      {/* LBJ */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Lyndon B. Johnson</h3>
        <p className="text-muted mb-3">1963–1969 | Vietnam escalation | ~19,000 US deaths during his presidency</p>
        <div className="prose prose-stone max-w-none">
          <p>
            Johnson inherited Kennedy&apos;s advisory mission in Vietnam and turned it into a full-scale
            war. Using the Gulf of Tonkin Resolution — based on an incident that likely didn&apos;t happen —
            he escalated from 23,000 advisors to 536,000 combat troops. He bombed North Vietnam relentlessly
            in Operation Rolling Thunder, dropping more tonnage than was used in all of WWII.
          </p>
          <p>
            Johnson knew the war was unwinnable. The Pentagon Papers — leaked in 1971 — revealed that the
            administration systematically lied to Congress and the public about the war&apos;s progress.
            Johnson declined to run for re-election in 1968, broken by the war he created.
          </p>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 my-4 border">
          <blockquote className="italic text-stone-600">
            &ldquo;I knew from the start that if I left the woman I really loved — the Great Society —
            in order to get involved with that bitch of a war on the other side of the world, then I
            would lose everything at home.&rdquo;
          </blockquote>
          <p className="text-muted text-xs mt-2">— Lyndon Johnson, quoted by Doris Kearns Goodwin</p>
        </div>
      </div>

      {/* Nixon */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Richard Nixon</h3>
        <p className="text-muted mb-3">1969–1974 | Secret Cambodia bombing | Chile coup</p>
        <div className="prose prose-stone max-w-none">
          <p>
            Nixon campaigned on a &ldquo;secret plan&rdquo; to end the Vietnam War. Instead, he expanded
            it — secretly bombing Cambodia for 14 months (Operation Menu) without telling Congress.
            The bombing killed an estimated 100,000-150,000 Cambodian civilians and destabilized the
            country, contributing directly to the rise of the Khmer Rouge, whose genocide killed 2 million people.
          </p>
          <p>
            Nixon also orchestrated the 1973 CIA-backed coup in Chile that overthrew the democratically
            elected Salvador Allende and installed General Augusto Pinochet, whose 17-year dictatorship
            killed over 3,000 people and tortured tens of thousands more.
          </p>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 my-4 border">
          <blockquote className="italic text-stone-600">
            &ldquo;It&apos;s not illegal when the president does it.&rdquo;
          </blockquote>
          <p className="text-muted text-xs mt-2">— Richard Nixon, interview with David Frost, 1977</p>
        </div>
      </div>

      {/* Trump */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Donald Trump</h3>
        <p className="text-muted mb-3">2017–2021, 2025–present | Soleimani assassination | Iran 2026</p>
        <div className="prose prose-stone max-w-none">
          <p>
            Trump campaigned as the anti-interventionist candidate, criticizing the Iraq War and
            promising to bring troops home. In office, he escalated drone strikes (removing Obama-era
            transparency requirements), assassinated Iranian General Qasem Soleimani without
            congressional authorization, vetoed a congressional resolution to end US support for the
            Saudi-led war in Yemen, and dropped the largest non-nuclear bomb ever used in combat
            (the MOAB in Afghanistan).
          </p>
          <p>
            In his second term, Trump has escalated tensions with Iran into open military conflict
            without seeking new congressional authorization — citing the same 2001 and 2002 AUMFs
            that have justified every war for a quarter century. The pattern continues.
          </p>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 my-4 border">
          <blockquote className="italic text-stone-600">
            &ldquo;Great nations do not fight endless wars.&rdquo;
          </blockquote>
          <p className="text-muted text-xs mt-2">— Donald Trump, State of the Union, 2019 — before starting one</p>
        </div>
      </div>

      {/* Reagan */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Ronald Reagan</h3>
        <p className="text-muted mb-3">1981–1989 | Iran-Contra | Grenada | Libya | Lebanon</p>
        <div className="prose prose-stone max-w-none">
          <p>
            Reagan presided over the largest peacetime military buildup in American history, increasing the
            defense budget from $134 billion to $253 billion — an 89% increase. He launched military operations
            in Lebanon (1982-84, resulting in 241 Marines killed in the Beirut barracks bombing), invaded
            Grenada (1983), bombed Libya (1986), and most notoriously, ran the Iran-Contra affair.
          </p>
          <p>
            Iran-Contra was arguably the most brazen executive power grab in modern history: the Reagan
            administration secretly sold weapons to Iran — then under an arms embargo — and used the proceeds
            to illegally fund the Contras in Nicaragua, in direct violation of the Boland Amendment passed by
            Congress. When exposed, 14 administration officials were indicted. Reagan claimed he couldn&apos;t
            remember. Oliver North shredded documents. George H.W. Bush pardoned everyone.
          </p>
          <p>
            The Contra war itself killed an estimated <strong>30,000 Nicaraguans</strong>. The International
            Court of Justice ruled in 1986 that the US had violated international law by mining Nicaraguan
            harbors and supporting the Contras. The US refused to recognize the court&apos;s jurisdiction.
          </p>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 my-4 border">
          <blockquote className="italic text-stone-600">
            &ldquo;I told the American people I did not trade arms for hostages.
            My heart and my best intentions tell me that&apos;s true, but the facts and evidence tell me it is not.&rdquo;
          </blockquote>
          <p className="text-muted text-xs mt-2">— Ronald Reagan, March 4, 1987</p>
        </div>
      </div>

      {/* Clinton */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Bill Clinton</h3>
        <p className="text-muted mb-3">1993–2001 | Kosovo | Bosnia | Haiti | Iraq bombing | Sudan/Afghanistan strikes</p>
        <div className="prose prose-stone max-w-none">
          <p>
            Clinton is often remembered as a peacetime president. He wasn&apos;t. He deployed military force
            more frequently than any Cold War president, conducting airstrikes against Iraq throughout his
            presidency (Operation Desert Fox alone launched 415 cruise missiles in 1998), intervened militarily
            in Haiti (1994), Bosnia (1995), and Kosovo (1999), and launched cruise missile strikes against
            Sudan and Afghanistan (1998).
          </p>
          <p>
            The Kosovo intervention was conducted without UN Security Council authorization and without
            congressional approval. NATO bombed Serbia for 78 days, killing an estimated 500 civilians.
            Clinton&apos;s legal justification was remarkably thin — he simply asserted that the president
            had inherent authority to bomb a country that posed no threat to the United States.
          </p>
          <p>
            The 1998 cruise missile strike on the Al-Shifa pharmaceutical factory in Sudan — which the
            administration claimed was producing chemical weapons — destroyed the source of approximately
            <strong> 50% of Sudan&apos;s pharmaceutical supply</strong>. Subsequent investigations found no
            evidence of chemical weapons production. The strike may have contributed to tens of thousands of
            preventable deaths from lack of medicine. The timing — three days after Clinton testified about
            Monica Lewinsky — led to accusations of &ldquo;Wag the Dog&rdquo; distraction.
          </p>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 my-4 border">
          <blockquote className="italic text-stone-600">
            &ldquo;Our mission is clear: to demonstrate the seriousness of purpose of the United States
            and the international community.&rdquo;
          </blockquote>
          <p className="text-muted text-xs mt-2">— Bill Clinton, on bombing Kosovo without congressional approval, March 24, 1999</p>
        </div>
      </div>

      {/* Truman */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Harry Truman</h3>
        <p className="text-muted mb-3">1945–1953 | Hiroshima &amp; Nagasaki | Korea | CIA creation | NATO founding</p>
        <div className="prose prose-stone max-w-none">
          <p>
            Truman made the decision to use nuclear weapons — the only person in history to have done so.
            The atomic bombings of Hiroshima (August 6, 1945) and Nagasaki (August 9, 1945) killed an
            estimated <strong>110,000-210,000 people</strong>, the vast majority civilians. The debate
            over whether the bombings were militarily necessary continues to this day, but the revisionist
            consensus among historians — drawing on Japanese diplomatic records — suggests Japan was
            already seeking to surrender.
          </p>
          <p>
            Truman also launched the Korean War without a congressional declaration — calling it a
            &ldquo;police action&rdquo; under UN authority. The war killed <strong>36,574 Americans</strong> and
            an estimated 2-3 million Korean and Chinese soldiers and civilians. It set the precedent for
            presidential war-making without congressional approval that has been followed ever since.
          </p>
          <p>
            Truman created the CIA (1947), founded NATO (1949), and established the national security state
            architecture that would enable 75 years of global military intervention. The Truman Doctrine —
            pledging to &ldquo;support free peoples who are resisting attempted subjugation&rdquo; — became
            the template for every Cold War and post-Cold War intervention.
          </p>
        </div>
      </div>

      {/* Eisenhower */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Dwight D. Eisenhower</h3>
        <p className="text-muted mb-3">1953–1961 | Iran coup | Guatemala coup | Lebanon | MIC farewell warning</p>
        <div className="prose prose-stone max-w-none">
          <p>
            Eisenhower — the general who led D-Day — understood war better than any 20th-century president.
            He ended the Korean War, avoided military intervention in Vietnam (overruling advisors who wanted
            to use nuclear weapons at Dien Bien Phu), and spent relatively modestly on defense given the
            Cold War context.
          </p>
          <p>
            But his presidency also saw the CIA&apos;s most consequential covert operations: the 1953 coup in
            Iran (Operation Ajax) that overthrew Prime Minister Mossadegh and installed the Shah, and the 1954
            coup in Guatemala (Operation PBSUCCESS) that overthrew President Árbenz and triggered 36 years of
            civil war and 200,000 deaths. Both operations were &ldquo;successes&rdquo; by Cold War standards —
            and catastrophes by every other measure.
          </p>
          <p>
            Eisenhower&apos;s greatest contribution may have been his farewell address, in which he coined the
            term &ldquo;military-industrial complex&rdquo; and warned that its &ldquo;acquisition of unwarranted
            influence&rdquo; posed a grave threat to democratic government. Every one of his successors has
            proven him right.
          </p>
        </div>
      </div>

      {/* The Peace Presidents myth */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The &ldquo;Peace President&rdquo; Myth</h2>
        <div className="space-y-4 text-stone-300">
          <p>
            Every president in modern history has promised peace. Wilson: &ldquo;He kept us out of war&rdquo;
            (then entered WWI). FDR: &ldquo;I have said this before, but I shall say it again and again:
            your boys are not going to be sent into any foreign wars&rdquo; (then entered WWII, though
            admittedly after Pearl Harbor). Johnson: &ldquo;We are not about to send American boys 9 or
            10,000 miles away from home to do what Asian boys ought to be doing for themselves&rdquo;
            (then sent 536,000 troops to Vietnam). Obama: the anti-war candidate (bombed 7 countries).
            Trump: &ldquo;great nations do not fight endless wars&rdquo; (started one with Iran).
          </p>
          <p>
            Which presidents genuinely avoided war? The list is remarkably short. In the post-WWII era,
            arguably only <strong>Jimmy Carter</strong> completed a term without launching a significant
            military intervention (the Iran hostage rescue attempt failed, but it wasn&apos;t an act of
            war). Every other president since 1945 has used military force abroad.
          </p>
          <p>
            The lesson: the institutional incentives of the presidency push toward war regardless of
            the individual occupying the office. The military-industrial complex, the national security
            establishment, the media&apos;s rally-around-the-flag effect, the political cost of appearing
            &ldquo;weak&rdquo; — all of these forces push every president toward military action.
            Personal ideology barely matters. The machine wants war.
          </p>
        </div>
      </div>

      <div className="bg-stone-100 rounded-xl p-6 my-8 border">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700">
          &ldquo;No nation could preserve its freedom in the midst of continual warfare.&rdquo;
        </blockquote>
        <p className="text-muted mt-3">— James Madison, &ldquo;Political Observations,&rdquo; 1795</p>
      </div>

      {/* Biden */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Joe Biden</h3>
        <p className="text-muted mb-3">2021–2025 | Afghanistan withdrawal | Gaza support | Syria | Yemen | Red Sea</p>
        <div className="prose prose-stone max-w-none">
          <p>
            Biden&apos;s defining military decision — the chaotic August 2021 withdrawal from Afghanistan —
            ended America&apos;s longest war but at an enormous cost: 13 US service members killed in the
            Abbey Gate bombing, billions in abandoned military equipment, and the immediate collapse of the
            Afghan government to the Taliban, undoing 20 years of nation-building.
          </p>
          <p>
            Biden then provided unconditional military support for Israel&apos;s devastating campaign in Gaza
            following the October 7, 2023 Hamas attack — including billions in weapons, intelligence sharing,
            and diplomatic cover at the UN. Over <strong>40,000 Palestinians were killed</strong> in the
            subsequent 16-month campaign, including thousands of children. Biden continued to supply weapons
            even as his own State Department documented potential violations of international humanitarian law.
          </p>
          <p>
            He also conducted airstrikes in Syria, Iraq, Somalia, and Yemen, and launched Operation Prosperity
            Guardian in the Red Sea against Houthi militants — all without new congressional authorization.
            Biden, like every predecessor, relied on existing AUMFs and claimed inherent executive authority.
          </p>
        </div>
      </div>

      {/* The Drone Presidency */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Drone Presidency: Obama&apos;s Legacy in Numbers</h2>
        <p className="text-muted mb-4">Obama transformed drone warfare from an occasional tool to a central instrument of policy:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: 'Total drone strikes (Obama)', value: '563', note: 'vs. 57 under Bush' },
            { label: 'Countries bombed', value: '7', note: 'Afghanistan, Iraq, Syria, Libya, Yemen, Somalia, Pakistan' },
            { label: 'Bombs dropped in 2016 alone', value: '26,171', note: 'An average of 72 per day' },
            { label: 'Civilian deaths (est.)', value: '800+', note: 'Bureau of Investigative Journalism' },
            { label: 'US citizens killed by drone', value: '4', note: 'Including Anwar al-Awlaki & his 16-year-old son' },
            { label: '"Double tap" strikes', value: 'Routine', note: 'Striking rescuers who arrived to help initial victims' },
          ].map(d => (
            <div key={d.label} className="bg-stone-50 rounded-lg p-4 border">
              <p className="text-red-700 font-bold font-[family-name:var(--font-heading)] text-xl">{d.value}</p>
              <p className="text-stone-800 text-sm font-semibold">{d.label}</p>
              <p className="text-muted text-xs mt-1">{d.note}</p>
            </div>
          ))}
        </div>
        <p className="text-muted text-sm mt-4">
          The drone program killed American citizens without trial, struck weddings and funerals, and operated
          under a &ldquo;signature strike&rdquo; protocol that targeted people based on behavioral patterns
          rather than confirmed identity. The administration counted all military-age males in strike zones
          as combatants unless proven innocent after death.
        </p>
      </div>

      {/* Lies that started wars */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Lies That Started Wars</h2>
        <p className="text-stone-400 mb-6">Nearly every major American war has been preceded by deception, fabrication, or manipulation:</p>
        <div className="space-y-4">
          {[
            { war: 'Mexican-American War (1846)', lie: 'Polk claimed Mexico had "shed American blood on American soil." The "American soil" was disputed territory that the US had provoked conflict over. Whig congressman Abraham Lincoln introduced his "Spot Resolutions" demanding Polk identify the exact spot where blood was shed. Polk ignored him.' },
            { war: 'Spanish-American War (1898)', lie: 'The USS Maine exploded in Havana harbor — almost certainly from an internal coal fire — but newspapers screamed "Remember the Maine!" and blamed Spain. A 1976 investigation by Admiral Hyman Rickover concluded the explosion was internal, not a Spanish mine.' },
            { war: 'World War I (1917)', lie: 'The Lusitania was presented as an innocent civilian ship. It was secretly carrying 4.2 million rounds of ammunition. The British knew it was a target and allowed it to sail without escort. The sinking killed 1,198 passengers and pulled America toward war.' },
            { war: 'Vietnam (1964)', lie: 'The Gulf of Tonkin "attacks" — the second incident on August 4, 1964, never happened. NSA documents declassified in 2005 confirmed it. LBJ used a phantom attack to obtain congressional authorization for a war that killed 58,220 Americans.' },
            { war: 'Iraq War (2003)', lie: 'Weapons of mass destruction. Colin Powell\'s UN presentation with fabricated intelligence. "Yellowcake uranium from Niger" based on forged documents. Aluminum tubes that weren\'t for centrifuges. No WMDs were ever found. 4,599 Americans and 300,000+ Iraqis died.' },
            { war: 'Libya (2011)', lie: 'Claims of imminent massacre in Benghazi were never verified. A UK parliamentary inquiry concluded there was "no evidence that Gaddafi had threatened mass atrocities against civilians." The intervention produced a failed state.' },
          ].map((l, i) => (
            <div key={i} className="border-l-2 border-red-500 pl-4">
              <p className="font-bold text-red-400">{l.war}</p>
              <p className="text-stone-400 text-sm">{l.lie}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-sm mt-6">
          The pattern is unmistakable: presidents lie to start wars. They have done it repeatedly, across
          centuries and parties, using fabricated incidents, manipulated intelligence, and manufactured urgency.
          The Founders knew this tendency and designed the Constitution to prevent it. It hasn&apos;t worked.
        </p>
      </div>

      {/* Every president promised peace */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">Party Doesn&apos;t Matter</h2>
        <p>
          The idea that one party is the &ldquo;peace party&rdquo; is a myth. Democrats gave us Vietnam,
          Libya, Syria, Yugoslavia. Republicans gave us Iraq, Afghanistan, Grenada, Panama, Iran 2026.
          Both parties fund the $886 billion defense budget. Both parties take campaign contributions
          from defense contractors (${stats.campaignContributions}M combined). The military-industrial
          complex is the most successful bipartisan institution in America.
        </p>
      </div>

      {/* The numbers that matter */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The War President Scorecard: Key Metrics</h2>
        <p>
          Beyond the rankings, several data points illuminate the trajectory of presidential war-making:
        </p>
        <ul>
          <li><strong>Obama dropped 26,171 bombs in 2016 alone</strong> — an average of 72 bombs per day,
          3 per hour, in his final year in office. These fell on Syria, Iraq, Afghanistan, Libya, Yemen,
          Somalia, and Pakistan. The Nobel Peace Prize laureate was conducting bombing campaigns in seven
          countries simultaneously.</li>
          <li><strong>Bush&apos;s &ldquo;Mission Accomplished&rdquo; moment</strong> — On May 1, 2003, Bush
          landed on the USS Abraham Lincoln in a flight suit and declared &ldquo;major combat operations
          in Iraq have ended&rdquo; in front of a banner reading &ldquo;Mission Accomplished.&rdquo;
          The war continued for 8 more years. 4,431 more Americans died. Over 300,000 Iraqis died.
          The cost ultimately exceeded $2.4 trillion.</li>
          <li><strong>LBJ&apos;s Gulf of Tonkin deception</strong> — The August 1964 &ldquo;attack&rdquo;
          on US destroyers in the Gulf of Tonkin, which Johnson used to obtain congressional authorization
          for the Vietnam War, almost certainly didn&apos;t happen. NSA documents declassified in 2005
          confirmed that the second attack (August 4) was a phantom — there were no North Vietnamese boats
          in the area. Johnson privately admitted: &ldquo;For all I know, our Navy was shooting at whales
          out there.&rdquo;</li>
          <li><strong>Nixon sabotaged Vietnam peace talks</strong> — In October 1968, as Johnson was close
          to achieving a peace agreement, candidate Nixon secretly sent intermediaries to South Vietnam&apos;s
          President Thieu, urging him to reject the deal and wait for better terms under a Nixon
          administration. Thieu pulled out. The war continued for 7 more years. 21,000 more Americans and
          hundreds of thousands more Vietnamese died. LBJ knew about the sabotage but couldn&apos;t reveal
          it without exposing NSA wiretaps. Nixon called it treason. It was.</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">The Libertarian Case: The Imperial Presidency Must End</h2>
        <p>
          The libertarian tradition has consistently opposed presidential war-making — not just specific wars,
          but the institutional accumulation of executive war power that makes them possible. The Founders&apos;
          design was explicit: the power to initiate war belongs to Congress, the most representative branch.
          The president can command the military in wartime, but only Congress can create the state of war.
        </p>
        <p>
          This design has been systematically dismantled. Truman sent troops to Korea without asking Congress.
          Johnson fabricated an incident to get authorization for Vietnam. Nixon bombed Cambodia in secret.
          Reagan ran an illegal covert war in Nicaragua. Clinton bombed Kosovo without authorization. Bush
          used fabricated intelligence to invade Iraq. Obama bombed Libya past the War Powers deadline. Trump
          assassinated an Iranian general and launched strikes without authorization. The pattern is bipartisan,
          relentless, and unconstitutional.
        </p>
        <p>
          The libertarian solution is structural, not personal: no president — however wise or well-intentioned —
          should have the power to unilaterally take the nation to war. The war power must be returned to Congress,
          the AUMFs must be repealed, the War Powers Resolution must be enforced, and the standing military must
          be reduced to defensive proportions. As long as the tools of empire exist, presidents will use them —
          regardless of their campaign promises.
        </p>
        <p>
          Robert Higgs wrote in <em>Crisis and Leviathan</em> that wars ratchet up government power permanently —
          each crisis creates new agencies, authorities, and spending that never fully recede when the crisis ends.
          The War on Terror added the Department of Homeland Security, the TSA, mass surveillance programs, drone
          warfare, and indefinite detention. None of these have been rolled back. The presidency grows with each
          war. Liberty shrinks.
        </p>
      </div>

      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <blockquote className="italic text-stone-700 text-lg">
          &ldquo;War is the health of the state. It automatically sets in motion throughout society those
          irresistible forces for uniformity, for passionate cooperation with the Government in coercing
          into obedience the minority groups and individuals which lack the larger herd sense.&rdquo;
        </blockquote>
        <p className="text-muted text-sm mt-2">— Randolph Bourne, &ldquo;The State,&rdquo; 1918</p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• <strong>George W. Bush</strong> is the most expensive war president ever, with conflicts costing over $4.3 trillion in inflation-adjusted dollars.</li>
          <li>• <strong>Obama</strong> authorized {stats.droneStrikesObama} drone strikes — nearly 10× the {stats.droneStrikesBush} under Bush — while winning the Nobel Peace Prize.</li>
          <li>• <strong>Nixon</strong> secretly bombed Cambodia for 14 months without telling Congress, contributing to a genocide that killed 2 million people.</li>
          <li>• <strong>Jimmy Carter</strong> is the only post-WWII president who arguably didn&apos;t launch a significant military intervention.</li>
          <li>• Every president since Truman has claimed the War Powers Resolution is unconstitutional — while simultaneously violating it.</li>
          <li>• <strong>Eisenhower</strong>, the Supreme Allied Commander of WWII, warned about the &ldquo;military-industrial complex&rdquo; in his farewell address. Every successor has expanded it.</li>
          <li>• The defense industry has spent <strong>${stats.campaignContributions}M</strong> on campaign contributions, ensuring both parties remain pro-war.</li>
          <li>• Lincoln once said: &ldquo;Kings had always been involving their people in wars, pretending the good of the people was the object.&rdquo; Today&apos;s presidents do the same.</li>
        </ul>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources &amp; Further Reading</h2>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>• Bacevich, Andrew. <em>The Limits of Power: The End of American Exceptionalism</em>. Metropolitan Books (2008)</li>
          <li>• Halperin, Mark &amp; Heilemann, John. <em>Double Down</em>. Penguin Press (2013) — Obama &ldquo;good at killing people&rdquo; quote</li>
          <li>• Bureau of Investigative Journalism. Drone strike database (2010-2024)</li>
          <li>• Congressional Research Service. R42738 — Instances of Use of Armed Forces Abroad</li>
          <li>• Brown University Costs of War Project. Presidential war cost data (2023)</li>
          <li>• Goodwin, Doris Kearns. <em>Lyndon Johnson and the American Dream</em>. Harper &amp; Row (1976)</li>
          <li>• Ellsberg, Daniel. <em>Secrets: A Memoir of Vietnam and the Pentagon Papers</em>. Viking (2002)</li>
          <li>• Higgs, Robert. <em>Crisis and Leviathan</em>. Oxford University Press (1987)</li>
          <li>• Paul, Ron. <em>Swords into Plowshares</em>. Ron Paul Institute (2015)</li>
          <li>• National Security Archive. Declassified documents on presidential war-making</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <Link href="/presidents" className="text-red-800 hover:underline block">→ Full Presidential War Scorecard</Link>
          <Link href="/analysis/congressional-authority" className="text-red-800 hover:underline block">→ Wars Without Congress</Link>
          <Link href="/conflicts" className="text-red-800 hover:underline block">→ All Conflicts with Cost Data</Link>
          <Link href="/analysis/forever-wars" className="text-red-800 hover:underline block">→ The Forever Wars</Link>
          <Link href="/analysis/the-469" className="text-red-800 hover:underline block">→ 469 Military Interventions</Link>
          <Link href="/analysis/iran-2026" className="text-red-800 hover:underline block">→ Iran 2026 — the latest war</Link>
          <Link href="/analysis/cost-per-life" className="text-red-800 hover:underline block">→ The Price of a Life</Link>
          <Link href="/analysis/jobs-vs-war" className="text-red-800 hover:underline block">→ Jobs vs War</Link>
          <Link href="/analysis/silicon-valley-pentagon" className="text-red-800 hover:underline block">→ Silicon Valley &amp; the Pentagon</Link>
          <Link href="/analysis/ukraine-proxy" className="text-red-800 hover:underline block">→ Ukraine — $175B proxy war</Link>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}

