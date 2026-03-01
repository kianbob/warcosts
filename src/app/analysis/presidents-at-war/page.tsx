import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Presidents at War — Ranking Every War President by Cost & Deaths | WarCosts',
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
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
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

      {/* The Peace Presidents myth */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
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

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <Link href="/presidents" className="text-red-800 hover:underline block">→ Full Presidential War Scorecard</Link>
          <Link href="/analysis/congressional-authority" className="text-red-800 hover:underline block">→ Wars Without Congress</Link>
          <Link href="/conflicts" className="text-red-800 hover:underline block">→ All Conflicts with Cost Data</Link>
          <Link href="/analysis/forever-wars" className="text-red-800 hover:underline block">→ The Forever Wars</Link>
          <Link href="/analysis/the-469" className="text-red-800 hover:underline block">→ 469 Military Interventions</Link>
          <Link href="/analysis/iran-2026" className="text-red-800 hover:underline block">→ Iran 2026</Link>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}

