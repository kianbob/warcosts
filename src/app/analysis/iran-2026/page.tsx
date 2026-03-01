import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Whose War Is This? The Iran Conflict Nobody Asked For | WarCosts',
  description: 'Operation Epic Fury launched without congressional approval. Who benefits from war with Iran? Not the American people. A data-driven analysis of objectives, history, costs, and consequences.',
  openGraph: {
    title: 'Whose War Is This? The Iran Conflict Nobody Asked For',
    description: 'Operation Epic Fury launched without congressional approval. Who benefits? Not the American people.',
    url: 'https://www.warcosts.org/analysis/iran-2026',
  },
}

const timeline = [
  { date: 'Oct 2023', event: 'Hamas attacks Israel on October 7. Israel begins devastating campaign in Gaza, killing 40,000+ Palestinians.' },
  { date: '2024', event: 'Israel systematically dismantles Hezbollah leadership and Hamas command structure with US intelligence support.' },
  { date: 'Jan 2025', event: 'Trump returns to office. Names Israel a "model ally" in 2026 National Defense Strategy.' },
  { date: 'Jan 2026', event: 'Iranian protests erupt. Trump tweets "keep protesting" and "take over your country." US repositions carrier strike groups.' },
  { date: 'Feb 3', event: 'IRGC Navy attempts to board US-flagged tanker M/V Stena Imperative in Strait of Hormuz.' },
  { date: 'Feb 2026', event: 'Oman\'s foreign minister makes urgent trip to Washington, pleading with Vance for more time for diplomacy. Rejected.' },
  { date: 'Feb 24', event: 'Witkoff speaks at AIPAC conference. US ambassador in Israel tells staff to leave the country.' },
  { date: 'Feb 28', event: 'Operation Epic Fury begins. Joint US-Israeli strikes across Iran. Khamenei assassinated. No congressional vote.' },
  { date: 'Feb 28', event: 'Iran retaliates — fires missiles at Israel and US bases in Bahrain, Kuwait, Jordan, Qatar, and UAE.' },
  { date: 'Mar 2026', event: 'Congress demands War Powers vote. Trump says bombing will continue "as long as necessary." No exit strategy.' },
]

const regimeChangeHistory = [
  { country: 'Iran', year: '1953', method: 'CIA coup (Operation Ajax)', result: 'Installed Shah → 1979 revolution → 45 years of hostility → current conflict', success: false },
  { country: 'Guatemala', year: '1954', method: 'CIA coup (Operation PBSUCCESS)', result: '36-year civil war, 200,000 dead, ongoing instability', success: false },
  { country: 'Chile', year: '1973', method: 'CIA-backed military coup', result: '17-year Pinochet dictatorship, 3,000+ killed, 30,000 tortured', success: false },
  { country: 'Iraq', year: '2003', method: 'Full military invasion', result: '$2.4T cost, 300,000+ dead, created ISIS, Iran gained influence', success: false },
  { country: 'Libya', year: '2011', method: 'NATO air campaign + rebels', result: 'Failed state, civil war, open slave markets, weapons flood Sahel', success: false },
  { country: 'Syria', year: '2011–present', method: 'Armed rebel support', result: '500,000 dead, millions displaced, Russia/Iran gained ground', success: false },
]

const whoBenefits = [
  {
    who: '🇮🇱 Israel / Netanyahu',
    benefit: 'Eliminates existential rival. Netanyahu called it "historic." Buys political relief from domestic legal troubles and Gaza criticism. Israel named Iran its #1 threat and has lobbied for this for decades.',
    americanBenefit: false,
  },
  {
    who: '🏭 Defense Contractors',
    benefit: 'Lockheed Martin, RTX/Raytheon, Boeing, Northrop Grumman. Every Tomahawk missile costs $2M. Every F-35 sortie costs $42,000/hr. War is their business model. Stock prices surge on conflict.',
    americanBenefit: false,
  },
  {
    who: '🛢️ Oil Speculators',
    benefit: 'Oil jumps to $80-100/barrel. War-risk premiums triple. Energy traders make billions on volatility. Meanwhile, American families pay more at the pump.',
    americanBenefit: false,
  },
  {
    who: '🇸🇦 Saudi Arabia / Gulf States',
    benefit: 'Rival Iran weakened. Ironic: Iran is retaliating by firing missiles at the very Gulf states hosting US bases — Bahrain, Kuwait, Qatar, UAE. They\'re taking hits for a war they didn\'t start.',
    americanBenefit: false,
  },
  {
    who: '🇨🇳 China / 🇷🇺 Russia',
    benefit: 'US distracted from Indo-Pacific strategy (again). Every president has tried to pivot away from the Middle East. None has succeeded. China fills the vacuum. Russia sells weapons.',
    americanBenefit: false,
  },
]

const whoLoses = [
  { who: 'American Taxpayers', how: 'Operation Midnight Hammer (2025 strikes) cost $2.25B for 37 hours. Epic Fury is an open-ended campaign. Iraq cost $2.4T. Afghanistan cost $2.3T. Iran is bigger than both.' },
  { who: 'American Troops', how: 'US bases in Bahrain, Kuwait, Jordan, Qatar, and UAE are already under Iranian missile fire. Service members are in harm\'s way for a war Congress never authorized.' },
  { who: 'Iranian Civilians', how: 'Iran\'s foreign ministry says strikes hit "non-military sites in various cities." 88 million people live there. The Iranian people — many of whom were already protesting their own government — now face bombs from ours.' },
  { who: 'Gulf State Civilians', how: '5 countries hosting US bases have been hit by Iranian retaliation. Bahrain, Kuwait, Jordan, Qatar, and UAE — all collateral damage in someone else\'s war.' },
  { who: 'The US Economy', how: 'Oil at $80-100/barrel means higher gas prices, higher inflation, higher interest rates. The national debt is $38T. We\'re paying $1T/year just in interest. We can\'t afford this.' },
  { who: 'The Constitution', how: 'Another war launched without congressional authorization. Article I, Section 8 is clear: Congress declares war. Not the president. Not Israel.' },
]

export default function Iran2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Iran 2026' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● ACTIVE CONFLICT</span>
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Analysis</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Whose War Is This?
        </h1>
        <p className="text-xl text-stone-300 mb-2">The Iran Conflict Nobody Asked For</p>
        <p className="text-stone-400 text-lg">
          On February 28, 2026, the United States and Israel launched &ldquo;Operation Epic Fury&rdquo; — a massive
          strike campaign against Iran aimed at regime change. No congressional vote. No declaration of war.
          No exit strategy. No clear American interest. The only question that matters: <em>whose war is this?</em>
        </p>
      </div>

      <ShareButtons title="Whose War Is This? The Iran Conflict Nobody Asked For" />

      {/* Pull quote */}
      <blockquote className="border-l-4 border-red-700 pl-6 my-8 text-xl text-stone-600 italic">
        &ldquo;The constitution is clear: Congress has the sole authority to declare war. The president&apos;s
        announcement today that the US has conducted military strikes in Iran without congressional approval
        is yet another flagrant abuse of power.&rdquo;
        <span className="block text-sm text-stone-500 mt-2 not-italic">— Project on Government Oversight (POGO), February 28, 2026</span>
      </blockquote>

      {/* Cost comparison */}
      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Iraq War (8 years)</p>
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(2.4e12)}</p>
          <p className="text-xs text-stone-500">Population: 26M</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Afghanistan (20 years)</p>
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(2.3e12)}</p>
          <p className="text-xs text-stone-500">Population: 38M</p>
        </div>
        <div className="bg-red-50 border-red-200 rounded-lg p-6 border text-center">
          <p className="text-sm text-red-700 mb-1">Iran could cost</p>
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(3e12)}+</p>
          <p className="text-xs text-red-600">Population: 88M — 2.5x Iraq</p>
        </div>
      </div>

      {/* Section: What is the objective? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What Is the Objective?</h2>
        <p className="text-stone-700 mb-4">
          The stated objectives have already shifted multiple times in the first 48 hours:
        </p>
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold shrink-0">1.</span>
            <div>
              <p className="font-semibold">Trump:</p>
              <p className="text-stone-600">&ldquo;Defend the American people by eliminating imminent threats from the Iranian regime.&rdquo;</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold shrink-0">2.</span>
            <div>
              <p className="font-semibold">Also Trump:</p>
              <p className="text-stone-600">&ldquo;Take back your country&rdquo; — calling on Iranians to overthrow the regime. That&apos;s regime change.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold shrink-0">3.</span>
            <div>
              <p className="font-semibold">Netanyahu:</p>
              <p className="text-stone-600">&ldquo;Seize the opportunity&rdquo; to topple the regime. &ldquo;Eliminate the existential threat.&rdquo;</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold shrink-0">4.</span>
            <div>
              <p className="font-semibold">Pentagon:</p>
              <p className="text-stone-600">Suppress air defenses, degrade retaliatory capabilities, disrupt command-and-control.</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-amber-800 font-semibold mb-1">🚩 The red flag</p>
          <p className="text-stone-700">
            As the Council on Foreign Relations noted: <em>&ldquo;The fall of the regime has long been wished for,
            but it has never been the objective of a joint military campaign.&rdquo;</em> This is unprecedented.
            And as The Atlantic pointed out: Iran is 2.5x the size of Iraq, has no armed rebel force,
            no coalition is assembling to march into Tehran, and America has exactly one openly declared ally in this.
          </p>
        </div>
      </div>

      {/* Section: Has this ever worked? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Has US Regime Change Ever Worked?</h2>
        <p className="text-stone-700 mb-4">
          The United States has attempted regime change dozens of times. The track record is catastrophic.
          Not a single post-WWII regime change has produced a stable, democratic, pro-American government
          without decades of occupation.
        </p>
        <div className="space-y-4">
          {regimeChangeHistory.map((r, i) => (
            <div key={i} className="border-l-4 border-red-200 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-primary">{r.country}</span>
                <span className="text-stone-500 text-sm">({r.year})</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">Failed</span>
              </div>
              <p className="text-sm text-stone-500 mb-1"><strong>Method:</strong> {r.method}</p>
              <p className="text-sm text-stone-700"><strong>Result:</strong> {r.result}</p>
            </div>
          ))}
        </div>
        <div className="bg-stone-100 rounded-lg p-4 mt-6">
          <p className="text-stone-700">
            <strong>The pattern is clear:</strong> Topple the government → power vacuum → civil war or worse →
            spend trillions → leave → region is more unstable than before. Air strikes alone have
            <em> never</em> toppled a government. The BBC notes there is &ldquo;no precedent for regime
            change happening just because of air strikes.&rdquo; Saddam required 150,000 ground troops.
            Gaddafi required NATO + armed rebels. Iran has 88 million people, a real military,
            and mountainous terrain three times the size of France.
          </p>
        </div>
      </div>

      {/* The irony section */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">The Supreme Irony</h2>
        <p className="text-stone-700 mb-3">
          The current Iranian regime exists <strong>because of the last time America tried regime change in Iran</strong>.
        </p>
        <p className="text-stone-700 mb-3">
          In 1953, the CIA overthrew Iran&apos;s democratically elected Prime Minister Mossadegh and installed the Shah.
          The Shah&apos;s 26-year authoritarian rule created the conditions for the 1979 Islamic Revolution.
          That revolution produced the very regime we&apos;re now spending billions to destroy.
        </p>
        <p className="text-stone-700 font-semibold">
          We created this enemy. And we&apos;re responding to the blowback from the last intervention
          with another intervention that will produce its own blowback. This is the cycle.
        </p>
      </div>

      {/* Section: Who benefits? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Who Benefits?</h2>
        <p className="text-stone-700 mb-6">
          Follow the money and the motives. Who actually gains from a war with Iran?
        </p>
        <div className="space-y-6">
          {whoBenefits.map((b, i) => (
            <div key={i} className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">{b.who}</h3>
              <p className="text-stone-700">{b.benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Who loses? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Who Loses?</h2>
        <div className="space-y-4">
          {whoLoses.map((l, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-red-600 text-xl">✕</span>
              <div>
                <p className="font-semibold">{l.who}</p>
                <p className="text-stone-600 text-sm">{l.how}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Israel's role */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Did Israel Drag Us Into This?</h2>
        <p className="text-stone-700 mb-4">
          The evidence is hard to ignore:
        </p>
        <ul className="space-y-3 text-stone-700 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>Israel <strong>strongly opposed</strong> the US-Iran negotiations, lobbying against diplomatic efforts and threatening unilateral military action if the US didn&apos;t act.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>AIPAC spent <strong>$20 million</strong> opposing the 2015 JCPOA nuclear deal — the last diplomatic solution that was actually working. Trump withdrew from it in 2018.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>Trump&apos;s special envoy Witkoff spoke at the <strong>AIPAC conference</strong> just days before the strikes began.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>Israel&apos;s 2026 National Defense Strategy names Iran as its #1 existential threat. The US named Israel a <strong>&ldquo;model ally.&rdquo;</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>Netanyahu thanked Trump for his &ldquo;historic leadership&rdquo; and called the operation an effort to &ldquo;eliminate the existential threat&rdquo; — <strong>Israel&apos;s</strong> existential threat, not America&apos;s.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>The operation is codenamed <strong>&ldquo;Roaring Lion&rdquo;</strong> by Israel. They planned this. We&apos;re executing it.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>Oman&apos;s foreign minister made an <strong>urgent last-minute trip</strong> to Washington to beg for more time for diplomacy. He was turned away.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>Even Israeli analysts admit Netanyahu is using the war for <strong>political relief</strong> from domestic troubles — the same pattern as his Gaza campaign.</span>
          </li>
        </ul>
        <div className="bg-stone-100 rounded-lg p-4">
          <p className="text-stone-700">
            <strong>The question isn&apos;t whether Israel influenced this decision.</strong> The question is whether
            there is any American interest being served that couldn&apos;t have been achieved through the
            diplomatic channels that were <em>actively sabotaged</em>. Iran was at the negotiating table.
            Witkoff and Kushner reportedly told Trump it would be &ldquo;difficult, if not impossible&rdquo;
            to reach a deal. Was that an honest assessment — or the desired outcome?
          </p>
        </div>
      </div>

      {/* How does this benefit America? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How Does This Benefit America?</h2>
        <p className="text-stone-700 mb-4">
          Let&apos;s examine every claimed benefit:
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-stone-300 pl-4">
            <p className="font-semibold">&ldquo;Prevent Iran from getting nuclear weapons&rdquo;</p>
            <p className="text-stone-600 text-sm">
              The JCPOA was doing that. Trump withdrew from it in 2018. Iran was in compliance.
              Since withdrawal, Iran has enriched uranium to 60% — closer to weapons-grade than ever.
              We had a solution. We destroyed it. Now we&apos;re bombing them for the problem we created.
            </p>
          </div>
          <div className="border-l-4 border-stone-300 pl-4">
            <p className="font-semibold">&ldquo;Eliminate threats to American forces&rdquo;</p>
            <p className="text-stone-600 text-sm">
              American forces are in the region because of previous interventions. Iran is now firing
              missiles at US bases in 5 countries. Our troops are <em>less</em> safe than before the strikes.
              The threat was escalated, not eliminated.
            </p>
          </div>
          <div className="border-l-4 border-stone-300 pl-4">
            <p className="font-semibold">&ldquo;Free the Iranian people&rdquo;</p>
            <p className="text-stone-600 text-sm">
              Iranians were already protesting — thousands killed by their own government. Bombing their
              country historically rallies populations <em>around</em> their government, not against it.
              Nothing unites a nation like foreign bombs. Ask any historian about the London Blitz.
            </p>
          </div>
          <div className="border-l-4 border-stone-300 pl-4">
            <p className="font-semibold">&ldquo;Stabilize the Middle East&rdquo;</p>
            <p className="text-stone-600 text-sm">
              Five US-allied Gulf states are already under missile attack. Oil prices are surging toward
              $100/barrel. The Strait of Hormuz — through which 20% of global oil flows — is in a war
              zone. This is the opposite of stability.
            </p>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
          <p className="text-red-800 font-semibold">
            There is no honest case for how this war benefits ordinary Americans. Gas prices will rise.
            Taxes will rise. Debt will rise. American troops are in danger. And when it&apos;s over,
            history tells us the region will be <em>more</em> unstable, not less.
          </p>
        </div>
      </div>

      {/* Escalation timeline */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Timeline: From Diplomacy to Bombs</h2>
        <p className="text-stone-500 mb-4 text-sm">How a negotiation became a war in less than 6 months.</p>
        <div className="space-y-4">
          {timeline.map((t, i) => (
            <div key={i} className="flex items-start gap-4 border-l-2 border-red-200 pl-4">
              <span className="text-red-700 font-bold font-[family-name:var(--font-heading)] shrink-0 w-20 text-sm">{t.date}</span>
              <p className="text-stone-700">{t.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Constitution */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Constitution Is Clear</h2>
        <blockquote className="border-l-4 border-red-500 pl-4 mb-4 text-stone-300 italic">
          &ldquo;The Congress shall have Power To ... declare War.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Article I, Section 8, United States Constitution</span>
        </blockquote>
        <p className="text-stone-300 mb-4">
          Congress was not consulted before Operation Epic Fury. Members of Congress from both parties
          are demanding a War Powers vote. NPR reports the strikes were &ldquo;launched without
          congressional authorization.&rdquo;
        </p>
        <p className="text-stone-300 mb-4">
          As constitutional law experts noted to TIME: <em>&ldquo;If Congress did nothing, that would be
          a sign that Congress didn&apos;t approve an act of war, and so it would be illegal.&rdquo;</em>
        </p>
        <p className="text-stone-300">
          Trump ran on ending forever wars. He promised to bring troops home. Instead, he launched the
          most significant US military campaign since the 2003 invasion of Iraq — without asking the
          American people&apos;s representatives for permission.
        </p>
      </div>

      {/* Long-term effects */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Long-Term Consequences</h2>
        <p className="text-stone-700 mb-4">
          History doesn&apos;t just rhyme here — it repeats verbatim. Here&apos;s what comes next:
        </p>
        <div className="space-y-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">💰 Financial Black Hole</h3>
            <p className="text-stone-700 text-sm">
              Iraq was supposed to be quick. It lasted 8 years and cost $2.4 trillion. Afghanistan lasted
              20 years and cost $2.3 trillion. Iran is bigger, more sophisticated, and more capable than
              either. The Stimson Center warns: &ldquo;Iran in 2026 is likely to emerge battered but not
              broken — a costly example of American hubris and the limits of airpower.&rdquo;
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">🔥 Regional Conflagration</h3>
            <p className="text-stone-700 text-sm">
              Iran has already fired missiles at 5 US-allied countries. Hezbollah is watching. The Houthis
              are watching. Iraq&apos;s Shia militias are watching. This could become a multi-front regional
              war dragging in Lebanon, Iraq, Yemen, and the entire Gulf.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">⛽ Energy Crisis</h3>
            <p className="text-stone-700 text-sm">
              Iran can threaten the Strait of Hormuz, through which 20% of global oil transits. Analysts
              project oil at $80-100/barrel. If Hormuz is blocked, we&apos;re looking at $150+. American
              families pay the price at every gas pump.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">🔄 More Blowback</h3>
            <p className="text-stone-700 text-sm">
              Every bomb creates enemies. The 1953 coup produced 1979. The Iraq War produced ISIS.
              What will bombing 88 million people produce? A generation of Iranians who were
              protesting their own government will now blame America for their destruction.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">🌏 Strategic Distraction</h3>
            <p className="text-stone-700 text-sm">
              As Chatham House noted: &ldquo;Every recent US president has tried to redirect attention
              beyond the Middle East. To Asia. To the Western Hemisphere. None has succeeded.&rdquo;
              While we&apos;re bombing Iran, China grows. The $38 trillion debt grows. Infrastructure
              crumbles. The actual problems facing Americans go unsolved.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">🪖 No Exit Strategy</h3>
            <p className="text-stone-700 text-sm">
              &ldquo;Tell me how this ends,&rdquo; General Petraeus asked at the start of the Iraq War.
              Nobody could answer then. Nobody can answer now. Regime change with no ground force,
              no coalition, no rebel army, and no plan for what comes after.
            </p>
          </div>
        </div>
      </div>

      {/* Does it make sense? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Does Any of This Make Sense?</h2>
        <div className="space-y-4 text-stone-700">
          <p>
            We withdrew from a working nuclear deal. Iran enriched uranium. We call that a threat.
            We bomb them for the threat we created by withdrawing from the deal that was preventing
            the threat. And we do it without asking Congress.
          </p>
          <p>
            We spent $8 trillion on the War on Terror. It produced ISIS, failed states across the
            Middle East, 900,000+ dead, and no measurable increase in American security. Now we&apos;re
            doing it again — in a country three times the size of Iraq, with a real military,
            real ballistic missiles, and real allies.
          </p>
          <p>
            The American people were never consulted. Their representatives were never consulted.
            The diplomats trying to negotiate were sabotaged. And the primary beneficiary is a
            foreign government whose leader used the word &ldquo;historic&rdquo; to describe a war
            that will cost American lives and American treasure.
          </p>
        </div>
      </div>

      {/* Closing */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <blockquote className="border-l-4 border-red-500 pl-4 mb-6 text-stone-300 italic">
          &ldquo;Of all the enemies to public liberty, war is, perhaps, the most to be dreaded,
          because it comprises and develops the germ of every other.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— James Madison, 1795</span>
        </blockquote>
        <p className="text-stone-300 mb-4">
          This is not America&apos;s war. This is a war fought for Israel&apos;s security priorities, the
          defense industry&apos;s profit margins, and the political survival of leaders in both countries.
          The American people will pay for it in blood, treasure, and blowback for decades to come —
          just like they&apos;re still paying for Iraq, Afghanistan, Libya, and every other intervention
          that was sold as quick, necessary, and in our interest.
        </p>
        <p className="text-stone-300 font-semibold">
          It wasn&apos;t true then. It isn&apos;t true now.
        </p>
      </div>

      {/* Cross-links */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/conflicts/iran-2026" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 2026 — Conflict Data →</h3>
          <p className="text-stone-500 text-sm">Costs, casualties, and key events</p>
        </Link>
        <Link href="/conflicts/iran-1953" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 1953 — The Original Sin →</h3>
          <p className="text-stone-500 text-sm">CIA overthrow of Mossadegh started all of this</p>
        </Link>
        <Link href="/analysis/blowback" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Blowback →</h3>
          <p className="text-stone-500 text-sm">How interventions create the next generation of enemies</p>
        </Link>
        <Link href="/analysis/forever-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Forever Wars →</h3>
          <p className="text-stone-500 text-sm">How 60 words enabled 25 years of undeclared war</p>
        </Link>
        <Link href="/analysis/congressional-authority" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Who Decides? →</h3>
          <p className="text-stone-500 text-sm">The erosion of congressional war powers</p>
        </Link>
        <Link href="/analysis/military-industrial-complex" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Military-Industrial Complex →</h3>
          <p className="text-stone-500 text-sm">Who profits from permanent war</p>
        </Link>
      </div>

      <BackToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Whose War Is This? The Iran Conflict Nobody Asked For',
            description: 'Operation Epic Fury launched without congressional approval. Who benefits from war with Iran? Not the American people.',
            datePublished: '2026-03-01',
            dateModified: '2026-03-01',
            publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            mainEntityOfPage: 'https://www.warcosts.org/analysis/iran-2026',
          }),
        }}
      />
    </div>
  )
}
