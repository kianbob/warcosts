import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Ceasefire Collapse: What Went Wrong — Iran War Analysis',
  description: 'The Iran ceasefire MOU was signed June 19 and collapsed by July 8. A timeline of 19 days that could have ended the war — and why they didn\'t.',
  keywords: ['iran ceasefire', 'ceasefire collapse', 'iran MOU', 'iran war ceasefire', 'khamenei funeral', 'hormuz ceasefire'],
  openGraph: {
    title: 'Ceasefire Collapse: What Went Wrong',
    description: 'Signed June 19. Collapsed July 8. The 19 days that could have ended the Iran war.',
    url: 'https://www.warcosts.org/analysis/ceasefire-collapse',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ceasefire Collapse: What Went Wrong',
    description: 'A 14-point MOU, 19 days of hope, and a return to war. The full timeline.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/ceasefire-collapse',
  },
}

const timeline = [
  { date: 'Jun 14', event: 'Oman mediates back-channel talks between US and Iran', category: 'diplomacy' },
  { date: 'Jun 17', event: 'Draft MOU circulated — 14 points covering Hormuz, nuclear talks, and frozen assets', category: 'diplomacy' },
  { date: 'Jun 19', event: 'MOU signed in Muscat — ceasefire takes effect at midnight UTC', category: 'milestone' },
  { date: 'Jun 20', event: 'Hormuz reopens to limited commercial traffic — oil drops $8/bbl within hours', category: 'economic' },
  { date: 'Jun 22', event: 'First humanitarian aid shipment reaches Iranian port of Bandar Abbas', category: 'humanitarian' },
  { date: 'Jun 25', event: 'US begins partial drawdown of carrier group — USS Eisenhower moves to Gulf of Oman', category: 'military' },
  { date: 'Jun 28', event: 'Israel conducts airstrikes in southern Lebanon despite ceasefire — Hezbollah condemns', category: 'violation' },
  { date: 'Jun 30', event: 'Iran protests Israeli strikes as MOU violation — US says Israel "not a party" to deal', category: 'diplomatic' },
  { date: 'Jul 1', event: 'Supreme Leader Khamenei dies — 5-day national funeral period declared', category: 'milestone' },
  { date: 'Jul 3', event: 'IRGC hardliners gain influence during power vacuum', category: 'political' },
  { date: 'Jul 5', event: 'Iranian fast boats attack commercial vessel near Hormuz — first violation', category: 'violation' },
  { date: 'Jul 6', event: 'Second ship attacked — US issues ultimatum', category: 'violation' },
  { date: 'Jul 7', event: 'Third ship attacked during Khamenei funeral ceremonies — international condemnation', category: 'violation' },
  { date: 'Jul 8', event: 'US declares MOU "null and void" — Iran re-closes Strait of Hormuz', category: 'milestone' },
  { date: 'Jul 9', event: 'Oil surges $18/bbl in single trading session', category: 'economic' },
  { date: 'Jul 11', event: 'US resumes strikes — first of 9 consecutive nights of bombardment', category: 'military' },
  { date: 'Jul 19', event: 'Ninth night of strikes — over 800 targets hit in 9-day campaign', category: 'military' },
  { date: 'Jul 20', event: 'Houthis begin blockade of Saudi Arabian ports', category: 'escalation' },
  { date: 'Jul 23', event: 'Trump: "not ready" to negotiate new ceasefire', category: 'diplomacy' },
]

export default function CeasefireCollapsePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Ceasefire Collapse: What Went Wrong',
            description: 'The Iran ceasefire MOU was signed June 19 and collapsed by July 8. A complete timeline and analysis.',
            datePublished: '2026-07-25T00:00:00Z',
            dateModified: '2026-07-25T00:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/ceasefire-collapse' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Ceasefire Collapse' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Analysis — July 25, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Ceasefire Collapse: What Went Wrong
        </h1>
        <p className="text-xl text-stone-300 mb-4">19 Days That Could Have Ended the War</p>
        <p className="text-stone-400 text-lg">
          On June 19, the United States and Iran signed a 14-point memorandum of understanding that was supposed to
          end the fighting. Oil prices dropped. Hormuz reopened. For 19 days, it looked like the war might be over.
          Then everything fell apart.
        </p>
      </div>

      <ShareButtons title="Ceasefire Collapse: What Went Wrong" />

      {/* Key Numbers */}
      <div className="bg-stone-900 border border-red-900/60 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3 mb-5">
          <span className="text-2xl">📋</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">The Failed Ceasefire</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">19</div>
            <div className="text-stone-400 text-sm">Days It Lasted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">14</div>
            <div className="text-stone-400 text-sm">Points in MOU</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">3</div>
            <div className="text-stone-400 text-sm">Ships Attacked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">9</div>
            <div className="text-stone-400 text-sm">Nights of Strikes After</div>
          </div>
        </div>
      </div>

      {/* The 14 Points */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The 14-Point MOU: What Was Agreed
        </h2>
        <p className="text-stone-600 mb-6">
          The Muscat MOU, mediated by Oman with support from Switzerland, was the most detailed ceasefire
          framework since the 2015 JCPOA nuclear deal. Its key provisions included:
        </p>

        <div className="space-y-3 mb-8">
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-1">🚢 Strait of Hormuz</h3>
            <p className="text-stone-600 text-sm">Full reopening to commercial traffic within 72 hours. Iran to withdraw IRGC Navy fast boats. US/UK mine-clearing operations to continue.</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-1">💰 Frozen Assets</h3>
            <p className="text-stone-600 text-sm">$24 billion in frozen Iranian assets to be released in three tranches over 90 days, contingent on compliance with all MOU terms.</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-1">☢️ Nuclear Talks</h3>
            <p className="text-stone-600 text-sm">60-day window to begin formal negotiations on a new nuclear framework. IAEA inspectors to be readmitted within 14 days.</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-1">✈️ Military De-escalation</h3>
            <p className="text-stone-600 text-sm">Mutual cessation of hostilities. US to reduce carrier presence to one strike group. Iran to halt ballistic missile launches.</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-1">🏥 Humanitarian Access</h3>
            <p className="text-stone-600 text-sm">Immediate lifting of medical supply restrictions. Red Cross/Red Crescent access to affected areas in Iran, Lebanon, and Iraq.</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-1">🇱🇧 Lebanon Provision</h3>
            <p className="text-stone-600 text-sm">Separate Israeli-Lebanese de-escalation framework to be negotiated in parallel. Hezbollah to withdraw north of the Litani River.</p>
          </div>
        </div>

        <p className="text-stone-600 mb-4">
          The deal was immediately fragile. It depended on multiple actors — the US, Iran, Israel, and
          Hezbollah — all complying simultaneously. Israel was not a signatory but was expected to honor the
          Lebanese provisions. That ambiguity would prove fatal.
        </p>
      </section>

      {/* The Timeline */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          19 Days: The Complete Timeline
        </h2>
        <div className="space-y-4">
          {timeline.map((item, i) => (
            <div key={i} className={`flex gap-4 p-4 rounded-lg border ${
              item.category === 'milestone' ? 'bg-red-50 border-red-200' :
              item.category === 'violation' ? 'bg-amber-50 border-amber-200' :
              item.category === 'escalation' ? 'bg-orange-50 border-orange-200' :
              'bg-white border-stone-200'
            }`}>
              <div className="flex-shrink-0 w-16 text-sm font-bold text-stone-500">{item.date}</div>
              <div className="flex-1">
                <p className={`text-sm ${
                  item.category === 'milestone' ? 'text-red-800 font-semibold' :
                  item.category === 'violation' ? 'text-amber-800 font-semibold' :
                  item.category === 'escalation' ? 'text-orange-800 font-semibold' :
                  'text-stone-700'
                }`}>{item.event}</p>
              </div>
              <div className="flex-shrink-0">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.category === 'milestone' ? 'bg-red-100 text-red-700' :
                  item.category === 'violation' ? 'bg-amber-100 text-amber-700' :
                  item.category === 'escalation' ? 'bg-orange-100 text-orange-700' :
                  item.category === 'diplomacy' ? 'bg-blue-100 text-blue-700' :
                  item.category === 'economic' ? 'bg-green-100 text-green-700' :
                  item.category === 'military' ? 'bg-purple-100 text-purple-700' :
                  item.category === 'humanitarian' ? 'bg-teal-100 text-teal-700' :
                  'bg-stone-100 text-stone-700'
                }`}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why It Fell Apart */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Why It Fell Apart
        </h2>
        <p className="text-stone-600 mb-4">
          The ceasefire didn&apos;t collapse because of a single event. It collapsed because of three simultaneous
          failures — any one of which might have been survivable, but together proved fatal.
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-white border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-stone-900 text-lg mb-2">1. The Khamenei Power Vacuum</h3>
            <p className="text-stone-600 text-sm mb-2">
              Supreme Leader Khamenei&apos;s death on July 1 created a power vacuum at the worst possible moment.
              The IRGC, which had reluctantly accepted the MOU, saw an opportunity to reassert control. Hardline
              commanders — particularly in the IRGC Navy — viewed the ceasefire as capitulation. With no supreme
              leader to enforce compliance, the chain of command fractured.
            </p>
            <p className="text-stone-600 text-sm">
              The three ship attacks on July 5-7 bear the hallmarks of IRGC Navy operations conducted without
              full government authorization — fast boat swarm tactics identical to those used in the opening weeks
              of the war.
            </p>
          </div>

          <div className="bg-white border-l-4 border-amber-500 p-6">
            <h3 className="font-bold text-stone-900 text-lg mb-2">2. Israeli Strikes in Lebanon</h3>
            <p className="text-stone-600 text-sm mb-2">
              Israel continued conducting airstrikes in southern Lebanon throughout the ceasefire period, arguing
              that its operations against Hezbollah were separate from the US-Iran MOU. Iran viewed this differently:
              from Tehran&apos;s perspective, Hezbollah was part of the &quot;resistance axis&quot; and Israeli strikes
              constituted a violation of the ceasefire&apos;s spirit, if not its letter.
            </p>
            <p className="text-stone-600 text-sm">
              When Iran re-closed the Strait of Hormuz on July 8, it explicitly cited Israeli strikes in Lebanon as
              justification, calling them &quot;a material breach of the MOU&apos;s de-escalation framework.&quot;
            </p>
          </div>

          <div className="bg-white border-l-4 border-stone-500 p-6">
            <h3 className="font-bold text-stone-900 text-lg mb-2">3. The Ambiguity Problem</h3>
            <p className="text-stone-600 text-sm">
              The MOU was deliberately vague on the Israel-Lebanon question to get both sides to sign. That
              ambiguity created a loophole large enough to drive a war through. The US position — that Israel was
              &quot;not a party&quot; to the deal — was technically correct but diplomatically naive. Any ceasefire
              framework that doesn&apos;t account for all active fronts in a multi-front war is built on sand.
            </p>
          </div>
        </div>
      </section>

      {/* The Aftermath */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Aftermath: Worse Than Before
        </h2>
        <p className="text-stone-600 mb-4">
          The ceasefire&apos;s collapse didn&apos;t just return the conflict to its pre-MOU state — it made things
          worse. The 9 consecutive nights of US strikes from July 11-19 were among the most intense of the entire
          war, with over 800 targets hit in the campaign.
        </p>
        <p className="text-stone-600 mb-4">
          Oil prices, which had dropped from $126 to $83 during the ceasefire window, surged $18 in a single
          trading session when the MOU collapsed. They haven&apos;t come back down. The market had priced in peace;
          the reversal created a{' '}
          <Link href="/analysis/hormuz-global-economy" className="text-red-600 hover:text-red-800 underline">far more severe economic shock</Link>{' '}
          than if the ceasefire had never happened at all.
        </p>
        <p className="text-stone-600 mb-4">
          Most critically, the Houthi escalation on July 20 — a blockade of Saudi Arabian ports — opened an entirely
          new front that hadn&apos;t existed before the ceasefire. The Houthis interpreted the MOU&apos;s collapse as
          proof that diplomacy was dead, and acted accordingly.
        </p>
        <p className="text-stone-600 mb-6">
          On July 23, President Trump told reporters he was &quot;not ready&quot; to negotiate a new ceasefire.
          As of this writing, no diplomatic track is active.
        </p>
      </section>

      {/* Historical Parallels */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Historical Parallels: Failed Ceasefires
        </h2>
        <p className="text-stone-600 mb-4">
          The Iran MOU collapse follows a depressingly familiar pattern. Throughout the history of modern warfare,
          ceasefires have often failed for the same reasons:
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Korean War (1951-1953)</h3>
            <p className="text-stone-600 text-sm">
              Armistice negotiations took two years while fighting continued. The lesson: ceasefires without
              enforcement mechanisms are just pauses, not peace. The Iran MOU had no enforcement mechanism beyond
              mutual goodwill.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Bosnian War (1992-1995)</h3>
            <p className="text-stone-600 text-sm">
              Multiple ceasefires collapsed because spoiler factions — groups who benefited from continued
              conflict — undermined them. In the Iran case, IRGC hardliners played the spoiler role,
              particularly during the Khamenei power vacuum.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Syria (2016)</h3>
            <p className="text-stone-600 text-sm">
              The US-Russia brokered ceasefire collapsed within a week, in part because non-signatory parties
              (opposition groups, Iran-backed militias) continued fighting. Multi-party conflicts require
              multi-party agreements — exactly the gap that doomed the Iran MOU.
            </p>
          </div>
        </div>
      </section>

      {/* The Cost of the Collapse */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Cost of Collapse
        </h2>
        <p className="text-stone-600 mb-4">
          The ceasefire&apos;s collapse didn&apos;t just resume the war — it made ending it harder. Each failed
          diplomatic effort reduces the credibility of the next one. Negotiators on both sides now face a trust
          deficit that didn&apos;t exist before June 19.
        </p>
        <p className="text-stone-600 mb-4">
          The economic cost was immediate and severe. Markets had begun pricing in peace: shipping companies
          were reducing war-risk premiums, insurers were cautiously reopening Gulf coverage, and energy traders
          were unwinding long positions. The reversal caught all of them exposed.
        </p>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center bg-white border border-stone-200 rounded-lg p-4">
            <span className="text-stone-700 font-medium">Oil price swing (MOU collapse day)</span>
            <span className="text-red-600 font-bold">+$18/bbl</span>
          </div>
          <div className="flex justify-between items-center bg-white border border-stone-200 rounded-lg p-4">
            <span className="text-stone-700 font-medium">War-risk insurance re-pricing</span>
            <span className="text-red-600 font-bold">+300%</span>
          </div>
          <div className="flex justify-between items-center bg-white border border-stone-200 rounded-lg p-4">
            <span className="text-stone-700 font-medium">Container shipping rate spike</span>
            <span className="text-red-600 font-bold">+45%</span>
          </div>
          <div className="flex justify-between items-center bg-white border border-stone-200 rounded-lg p-4">
            <span className="text-stone-700 font-medium">Humanitarian aid shipments halted</span>
            <span className="text-red-600 font-bold">All suspended</span>
          </div>
        </div>
        <p className="text-stone-600 mb-6">
          The human cost was equally stark. Humanitarian aid shipments that had begun flowing to Iranian ports
          were immediately suspended. The Red Cross reported that medical supplies delivered during the ceasefire
          window were &quot;barely a fraction&quot; of what was needed, and that the window&apos;s closure left
          hospitals in worse condition than before — they had begun using the supplies without the ability to
          restock.
        </p>
      </section>

      {/* Lessons */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Lessons for the Next Attempt
        </h2>
        <p className="text-stone-600 mb-4">
          If another ceasefire is attempted — and eventually one will be — the Muscat MOU offers five clear
          lessons:
        </p>
        <ol className="list-decimal pl-6 text-stone-600 space-y-3 mb-6">
          <li><strong>Include all belligerents.</strong> A ceasefire that doesn&apos;t bind Israel, Hezbollah,
            and the Houthis is a ceasefire in name only.</li>
          <li><strong>Build in enforcement.</strong> Mutual goodwill isn&apos;t a mechanism. International monitors,
            automatic penalties for violations, and clear escalation procedures are essential.</li>
          <li><strong>Account for leadership transitions.</strong> Khamenei&apos;s death was predictable —
            he was 86 and in poor health. Any deal should have included succession contingencies.</li>
          <li><strong>Don&apos;t let markets front-run.</strong> The economic whiplash from pricing in peace
            and then losing it was more damaging than if the ceasefire had never happened.</li>
          <li><strong>Humanitarian access must be unconditional.</strong> Tying aid to compliance creates
            hostages of the most vulnerable populations.</li>
        </ol>
      </section>

      {/* What Comes Next */}
      <section className="my-12">
        <div className="bg-red-950 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What Comes Next?</h2>
          <p className="text-stone-300 mb-4">
            With no diplomatic track active, the war continues to escalate. The Houthi blockade of Saudi Arabia
            has added a new dimension. Iran&apos;s leadership succession remains unresolved. Israel shows no
            sign of curtailing operations in Lebanon.
          </p>
          <p className="text-stone-300 mb-4">
            Any future ceasefire framework will need to address the failures of the Muscat MOU: it must include
            all belligerents (especially Israel), have concrete enforcement mechanisms, and account for internal
            political dynamics on both sides.
          </p>
          <p className="text-stone-300">
            For now, the 19 days of the Muscat MOU stand as the war&apos;s great what-if — the closest anyone
            came to ending a conflict that has killed over 8,000 people and cost more than $113 billion.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">Sources</h2>
        <ul className="text-stone-500 text-sm space-y-2">
          <li>Muscat MOU framework document (leaked draft), June 17, 2026</li>
          <li>US State Department press briefing on ceasefire, June 19, 2026</li>
          <li>IRGC Navy incident reports, July 5-7, 2026 (via US Central Command)</li>
          <li>Iranian Foreign Ministry statement on MOU violation, July 8, 2026</li>
          <li>US Central Command operational summary, July 11-19, 2026</li>
          <li>Reuters, &quot;Oil surges $18 as Iran ceasefire collapses,&quot; July 9, 2026</li>
          <li>White House press conference, July 23, 2026</li>
          <li>International Crisis Group, &quot;The Muscat MOU: Anatomy of a Failed Ceasefire,&quot; July 2026</li>
        </ul>
      </section>

      <RelatedArticles
        articles={[
          { href: '/iran-war-2026', title: 'Iran War 2026', description: 'Complete overview of the conflict' },
          { href: '/analysis/hormuz-global-economy', title: 'Hormuz and the Global Economy', description: 'The economic fallout from the strait closure' },
          { href: '/analysis/113-billion-war', title: 'The $113 Billion War', description: 'Full cost analysis of the conflict' },
          { href: '/analysis/iran-war-human-cost', title: 'The Human Cost', description: 'Casualties and displacement across all sides' },
          { href: '/analysis/hormuz-crisis', title: 'Hormuz Crisis', description: 'The strait that holds the global economy hostage' },
        ]}
      />

      <BackToTop />
    </div>
  )
}
