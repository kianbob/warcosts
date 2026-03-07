import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleSchema from '@/components/ArticleSchema'

export const metadata: Metadata = {
  title: 'Follow the Money: How AIPAC Shaped the Path to War with Iran',
  description: 'AIPAC spent $221 million on US political campaigns since 2021. $45.2M to defeat anti-war candidates. $20M to kill the Iran nuclear deal. Then the bombs fell. Follow the money.',
  openGraph: {
    title: 'Follow the Money: How AIPAC Shaped the Path to War with Iran',
    description: '$221M in political spending. Anti-war candidates crushed. Nuclear deal killed. Then the bombs fell.',
    url: 'https://www.warcosts.org/analysis/aipac-war-machine',
  },
}

const aipacSpending = [
  { cycle: '2021–2022', amount: '$27M', keyRaces: 'Launch of United Democracy Project (UDP) super PAC', outcome: 'Established massive war chest for 2024' },
  { cycle: '2023–2024', amount: '$100M+', keyRaces: 'Bowman (NY-16): $14.5M against. Bush (MO-1): $8.5M against. Multiple Senate/House races.', outcome: 'Both Bowman and Bush defeated. AIPAC went 48/48 in candidate endorsements.' },
  { cycle: '2024 (JCPOA)', amount: '$20M+', keyRaces: 'Campaign to kill the Iran nuclear deal (JCPOA)', outcome: 'Deal effectively dead. Diplomatic path to preventing Iranian nuclear weapons destroyed.' },
  { cycle: '2025–2026', amount: '$74M+ (and counting)', keyRaces: 'Senate and House races, War Powers vote lobbying', outcome: 'Every AIPAC-backed senator voted against Kaine-Paul War Powers Resolution (53-47)' },
  { cycle: 'Total since 2021', amount: '$221M+', keyRaces: 'Across 150+ federal races and issue campaigns', outcome: 'Most expensive foreign-policy lobbying campaign in American history' },
]

const lobbyComparisons = [
  { lobby: 'AIPAC (pro-Israel)', spent: '$221M', period: '2021–2026 (5 years)', foreignPolicy: 'Yes — directly advances Israeli government priorities' },
  { lobby: 'NRA (guns)', spent: '$16M', period: '2020 cycle', foreignPolicy: 'No — domestic policy' },
  { lobby: 'Pharmaceutical industry', spent: '$374M', period: '2022 (lobbying only)', foreignPolicy: 'No — domestic policy' },
  { lobby: 'Oil & Gas industry', spent: '$125M', period: '2022 (lobbying only)', foreignPolicy: 'Partially — energy policy has foreign implications' },
  { lobby: 'Saudi Arabia lobby', spent: '$18M', period: '2016–2022 (FARA filings)', foreignPolicy: 'Yes — registered as foreign agent' },
]

const warPowersVote = {
  date: 'March 1, 2026',
  resolution: 'Kaine-Paul War Powers Resolution',
  result: '53-47 AGAINST (war continues)',
  onlyRepublicanYes: 'Rand Paul (KY)',
  aipacBacked: 'Every senator who received AIPAC-affiliated contributions in 2024 voted AGAINST the resolution',
  topRecipients: [
    { name: 'Sen. John Fetterman (D-PA)', amount: '$1.1M', vote: 'Against (pro-war)' },
    { name: 'Sen. Ruben Gallego (D-AZ)', amount: '$4.9M', vote: 'Against (pro-war)' },
    { name: 'Sen. Elissa Slotkin (D-MI)', amount: '$3.2M', vote: 'Against (pro-war)' },
    { name: 'Sen. Bob Casey (D-PA)', amount: '$1.8M', vote: 'Against (pro-war)' },
    { name: 'Sen. Jacky Rosen (D-NV)', amount: '$3.8M', vote: 'Against (pro-war)' },
  ],
}

const cleanBreakTimeline = [
  { year: '1996', event: 'Clean Break memo', details: '"A Clean Break: A New Strategy for Securing the Realm" — authored by Richard Perle, Douglas Feith, and David Wurmser for incoming Israeli PM Netanyahu. Recommended Israel "roll back" Syria, Iraq, and ultimately Iran. Called for "removing Saddam Hussein from power in Iraq" seven years before the US invasion.' },
  { year: '1997', event: 'PNAC founded', details: 'Project for a New American Century founded by William Kristol and Robert Kagan. Many Clean Break authors joined. Advocated for American military dominance in the Middle East.' },
  { year: '1998', event: 'PNAC letter to Clinton', details: 'Signed by Rumsfeld, Wolfowitz, Bolton, and others urging regime change in Iraq. Many signers became Bush administration officials.' },
  { year: '2002', event: 'Iraq war drumbeat', details: 'Clean Break co-author Douglas Feith, now #3 at Pentagon, creates Office of Special Plans — the intelligence shop that manufactured the case for Iraq WMDs.' },
  { year: '2003', event: 'Iraq invasion', details: 'The US invades Iraq — exactly as Clean Break recommended seven years earlier. Cost: $2.4 trillion. Result: Iran gained regional influence.' },
  { year: '2012', event: 'Netanyahu\'s "red line" speech', details: 'Netanyahu addresses UN General Assembly with a cartoon bomb diagram, claiming Iran is months from nuclear weapons. Demands US military action. Sound familiar?' },
  { year: '2015', event: 'JCPOA signed', details: 'Iran nuclear deal limits enrichment to 3.67%. Netanyahu calls it "a historic mistake." AIPAC spends $20M+ campaigning against it.' },
  { year: '2018', event: 'Trump withdraws from JCPOA', details: 'Netanyahu presents "Iran Atomic Archive" to Trump. US withdraws from deal. Iran resumes enrichment — eventually reaching 60%.' },
  { year: '2024', event: 'AIPAC conference', details: 'AIPAC annual conference. Standing ovation for calls to confront Iran. $100M+ deployed in election spending.' },
  { year: 'Feb 24, 2026', event: 'Witkoff at AIPAC', details: 'Trump envoy Steve Witkoff speaks at AIPAC conference — 4 days before bombs fall on Tehran. "The US and Israel are united in purpose."' },
  { year: 'Feb 28, 2026', event: 'Operation Epic Fury', details: 'The US and Israel launch joint strikes on Iran. The 30-year campaign that began with Clean Break reaches its culmination.' },
]

export default function AIPACWarMachinePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'AIPAC & the Path to War' }]} />
      <ArticleSchema title="Follow the Money: How AIPAC Shaped the Path to War with Iran" description="AIPAC spent $221 million on US political campaigns since 2021. $45.2M to defeat anti-war candidates. $20M to kill the Iran nuclear deal. Then the bombs fell. Fo" url="/analysis/aipac-war-machine" />
      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Follow the Money</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          How AIPAC Shaped the Path to War with Iran
        </h1>
        <p className="text-xl text-stone-300 mb-4">{fmtMoney(221_000_000)} in political spending. A 30-year strategy. One outcome.</p>
        <p className="text-stone-400 text-lg">
          This is not about religion. This is not about antisemitism. This is about money, power, and the systematic
          capture of American foreign policy by a lobbying operation that spent more in three years than the NRA has
          spent in a decade. When the bombs fell on February 28, they fell along a path paved with campaign
          contributions, defeated anti-war candidates, and a killed nuclear deal. Follow the money.
        </p>
      </div>

      <ShareButtons title="How AIPAC Shaped the Path to War" />

      {/* AI Overview */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">AI Overview — Key Data</h2>
        </div>
        <ul className="space-y-2 text-stone-300">
          <li>📊 AIPAC and affiliated PACs spent <strong className="text-white">{fmtMoney(221_000_000)}</strong> on US political campaigns since 2021 — more than the NRA spent in a decade</li>
          <li>📊 <strong className="text-white">$45.2M</strong> deployed to defeat Jamaal Bowman and Cori Bush — two vocal critics of Israeli policy — in 2024 primaries</li>
          <li>📊 <strong className="text-white">$20M+</strong> spent campaigning against the JCPOA (Iran nuclear deal), destroying the diplomatic alternative to war</li>
          <li>📊 War Powers vote: <strong className="text-white">53-47 against</strong> — every AIPAC-backed senator voted to continue the unauthorized war</li>
          <li>📊 The &ldquo;Clean Break&rdquo; memo (1996) called for removing Saddam and confronting Iran — <strong className="text-white">30 years later, both happened</strong></li>
        </ul>
      </div>

      {/* Spending Table */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">AIPAC Political Spending (2021–2026)</h2>
        <div className="space-y-4">
          {aipacSpending.map(s => (
            <div key={s.cycle} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{s.cycle}</h3>
                <span className="text-red-400 font-bold text-xl">{s.amount}</span>
              </div>
              <p className="text-stone-300 mt-1">{s.keyRaces}</p>
              <p className="text-stone-400 text-sm mt-1"><em>{s.outcome}</em></p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">A Note on What This Is — and What It Isn&apos;t</h2>
        <p>
          Let&apos;s be direct: criticizing AIPAC is not antisemitism. AIPAC is a political lobbying organization — the
          most powerful foreign-policy lobby in American history. Criticizing its influence is no different from
          criticizing the NRA, the pharmaceutical lobby, or the oil industry. In fact, many Jewish Americans and
          Jewish organizations — including J Street, Jewish Voice for Peace, and IfNotNow — are vocal critics of
          AIPAC and its hawkish approach to Middle East policy.
        </p>
        <p>
          This analysis is about one thing: <strong>money in politics and its consequences for American foreign policy</strong>.
          The libertarian position is simple — foreign lobbying influence that leads America into wars it wouldn&apos;t
          otherwise fight is a problem regardless of which country is doing the lobbying. If Saudi Arabia or China
          spent $221 million shaping American military policy, we&apos;d call it what it is.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">$45.2 Million to Silence Dissent</h2>
        <p>
          In the 2024 Democratic primaries, AIPAC&apos;s super PAC — the United Democracy Project (UDP) — spent $14.5 million
          to defeat Representative Jamaal Bowman in New York&apos;s 16th district and $8.5 million to defeat Representative
          Cori Bush in Missouri&apos;s 1st district. Combined with affiliated spending, the total exceeded $45 million
          across races targeting candidates who had criticized Israeli military operations.
        </p>
        <p>
          The spending was unprecedented. In Bowman&apos;s race, AIPAC-affiliated groups outspent all other outside groups
          combined by a factor of 10. In Bush&apos;s race, it was a factor of 8. Both incumbents lost.
        </p>
        <p>
          The message to every member of Congress was unmistakable: criticize Israeli policy, and we will spend whatever
          it takes to end your career. In the 2024 cycle, AIPAC went 48 for 48 in candidate endorsements. Not a single
          AIPAC-backed candidate lost.
        </p>
        <p>
          By the time the War Powers vote came in March 2026, the chilling effect was complete. Senators who might have
          questioned an unauthorized war on Iran knew exactly what would happen to their re-election campaigns if they
          voted the wrong way.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Killing the Nuclear Deal: $20 Million to Close the Diplomatic Door</h2>
        <p>
          The Joint Comprehensive Plan of Action (JCPOA) — the Iran nuclear deal signed in 2015 — was the diplomatic
          alternative to war. It limited Iran&apos;s uranium enrichment to 3.67%, reduced centrifuges by two-thirds, and
          established the most intrusive nuclear inspections regime in history. Iran was in compliance. The IAEA
          confirmed it repeatedly.
        </p>
        <p>
          AIPAC spent an estimated $20 million campaigning against the deal. Netanyahu called it &ldquo;a historic mistake&rdquo;
          and addressed Congress — without White House invitation — to lobby against it. The campaign was relentless:
          TV ads, grassroots pressure, direct lobbying of every senator.
        </p>
        <p>
          In 2018, Trump withdrew from the JCPOA. Iran resumed enrichment — eventually reaching 60%, a short step
          from weapons-grade. The diplomatic guardrails that prevented an Iranian bomb were removed, creating the
          very crisis that was then used to justify military strikes.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;They spent $20 million to kill the deal that prevented Iran from getting nuclear weapons.
          Then they spent $100 million electing politicians who would bomb Iran for pursuing nuclear weapons.
          The circularity is the point.&rdquo;</p>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Clean Break Memo: 30 Years in the Making</h2>
        <p>
          To understand how we got here, you have to go back to 1996. A group of American neoconservatives — led by
          Richard Perle, Douglas Feith, and David Wurmser — authored a strategy paper for incoming Israeli Prime
          Minister Benjamin Netanyahu titled <em>&ldquo;A Clean Break: A New Strategy for Securing the Realm.&rdquo;</em>
        </p>
        <p>
          The memo recommended that Israel &ldquo;roll back&rdquo; hostile regimes in the region, starting with Iraq and
          ultimately confronting Iran. It called for &ldquo;removing Saddam Hussein from power in Iraq&rdquo; — seven years
          before the US invaded. It envisioned reshaping the entire Middle East to secure Israeli strategic dominance.
        </p>
        <p>
          What makes Clean Break remarkable is not just its prescience but its authors. Many of them went on to serve
          in the George W. Bush administration and played central roles in the Iraq War:
        </p>
        <ul>
          <li><strong>Richard Perle:</strong> Chairman of the Defense Policy Board (2001-2003)</li>
          <li><strong>Douglas Feith:</strong> Under Secretary of Defense for Policy (#3 at Pentagon) — created the Office of Special Plans that manufactured intelligence on Iraq WMDs</li>
          <li><strong>David Wurmser:</strong> Middle East advisor to Vice President Cheney</li>
        </ul>
        <p>
          A strategy paper written for the Israeli prime minister became American foreign policy within five years.
          Iraq — as recommended — was invaded in 2003. Iran — as recommended — was struck in 2026. The 30-year
          arc from Clean Break to Operation Epic Fury is one of the most consequential foreign influence campaigns
          in American history.
        </p>
      </div>

      {/* Clean Break Timeline */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">From Clean Break to Epic Fury: 30-Year Timeline</h2>
        <div className="space-y-4">
          {cleanBreakTimeline.map(t => (
            <div key={t.year} className="border-l-2 border-red-600 pl-4">
              <div className="flex items-center gap-2">
                <span className="text-red-400 font-bold">{t.year}</span>
                <span className="text-white font-semibold">{t.event}</span>
              </div>
              <p className="text-stone-400 text-sm mt-1">{t.details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The War Powers Vote: Money Talks, Congress Listens</h2>
        <p>
          On March 1, 2026 — one day after Operation Epic Fury launched — Senators Tim Kaine (D-VA) and Rand Paul (R-KY)
          forced a vote on a War Powers Resolution to halt the unauthorized military action against Iran. The vote
          failed 53-47.
        </p>
        <p>
          Rand Paul was the only Republican to vote yes. Every single senator who received significant AIPAC-affiliated
          contributions in the 2024 cycle voted against the resolution — voting to continue an unauthorized war.
        </p>
      </div>

      {/* War Powers Vote */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">War Powers Vote: Top AIPAC Recipients</h2>
        <p className="text-stone-400 mb-4">Kaine-Paul War Powers Resolution — March 1, 2026 — Failed 53-47</p>
        <div className="space-y-3">
          {warPowersVote.topRecipients.map(r => (
            <div key={r.name} className="flex justify-between items-center border-b border-stone-700 pb-2">
              <div>
                <span className="text-white font-semibold">{r.name}</span>
                <span className="text-stone-400 text-sm ml-2">AIPAC-affiliated: {r.amount}</span>
              </div>
              <span className="text-red-400 font-bold">{r.vote}</span>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4">
          Correlation is not causation — but {fmtMoney(221_000_000)} in spending followed by a 100% voting alignment
          is not a coincidence either.
        </p>
      </div>

      {/* Lobby Comparisons */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Lobbying Spending Comparison</h2>
        <div className="space-y-3">
          {lobbyComparisons.map(l => (
            <div key={l.lobby} className="flex justify-between items-center border-b border-stone-700 pb-2">
              <div>
                <span className="text-white font-semibold">{l.lobby}</span>
                <span className="text-stone-400 text-sm ml-2">({l.period})</span>
              </div>
              <div className="text-right">
                <span className={`font-bold ${l.lobby.includes('AIPAC') ? 'text-red-400' : 'text-stone-300'}`}>{l.spent}</span>
                {l.foreignPolicy === 'Yes' && <span className="text-red-400 text-xs ml-2">⚠ Foreign policy</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Witkoff at AIPAC: 4 Days Before the Bombs</h2>
        <p>
          On February 24, 2026 — four days before Operation Epic Fury launched — Trump envoy Steve Witkoff delivered a
          keynote address at the AIPAC policy conference. He spoke of the &ldquo;unbreakable bond&rdquo; between the United States
          and Israel and affirmed that both nations were &ldquo;united in purpose&rdquo; regarding Iran.
        </p>
        <p>
          At the time, Witkoff was supposedly in the middle of peace negotiations with Iran. He had met with the
          Iranian delegation in Geneva just days earlier. Oman&apos;s foreign ministry said &ldquo;good progress&rdquo; was being made.
          A second round of talks was scheduled.
        </p>
        <p>
          Instead, Witkoff spoke at AIPAC. Then the bombs fell. The negotiations were a performance. The decision had
          already been made. And the organization that spent $221 million shaping that decision got a front-row seat
          to the announcement.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Libertarian Case Against Foreign Lobbying</h2>
        <p>
          This is not a left-wing argument. It&apos;s not a right-wing argument. It&apos;s a libertarian argument rooted in
          the most basic principle of self-governance: <strong>Americans should decide American foreign policy</strong>.
        </p>
        <p>
          When a lobbying organization — funded substantially by those with dual loyalties or foreign policy
          objectives aligned with another nation — spends $221 million to shape who represents Americans in Congress,
          kills a nuclear deal that served American interests, defeats candidates who questioned foreign entanglements,
          and then celebrates as American bombs fall on a country that posed no imminent threat to the homeland, that
          is a corruption of the democratic process.
        </p>
        <p>
          Saudi Arabia, when it lobbies the US government, is required to register under the Foreign Agents Registration
          Act (FARA). China, Russia, and other nations face the same requirement. AIPAC — despite advancing the policy
          priorities of a foreign government more effectively than any registered foreign agent — operates as a domestic
          lobby. The distinction is legal. The effect is identical.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;I believe there is no more important issue in this country than campaign finance reform, because
          every other issue — from healthcare to education to war and peace — is downstream of who funds our elections.&rdquo;</p>
          <footer>— Senator Rand Paul, floor speech on War Powers Resolution, March 1, 2026</footer>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Bottom Line</h2>
        <p>
          AIPAC spent $221 million to shape the political environment that made this war possible. They defeated
          anti-war candidates. They killed the nuclear deal. They ensured that when the War Powers vote came, there
          were enough votes to continue an unauthorized war. And four days before the bombs fell, the president&apos;s
          envoy stood on their stage and told them it was coming.
        </p>
        <p>
          This isn&apos;t about Israel. Many Israelis oppose this war. This isn&apos;t about Jewish Americans. Many Jewish
          Americans are horrified by it. This is about a lobbying organization that spent more money in three years than
          the NRA has spent in a decade, and used that money to help drag America into a war that serves another
          country&apos;s strategic interests at the expense of American blood and treasure.
        </p>
        <p>
          Follow the money. It always leads to the war.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/israel-lobby">The Israel Lobby: How One Country Captured US Foreign Policy</Link></li>
          <li><Link href="/analysis/iran-2026">Iran 2026: Another Undeclared War?</Link></li>
          <li><Link href="/analysis/congressional-authority">19 Wars Without Congress</Link></li>
          <li><Link href="/analysis/war-profiteering">War Is a Racket: Who Gets Rich</Link></li>
          <li><Link href="/analysis/military-industrial-complex">The Military-Industrial Complex</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
