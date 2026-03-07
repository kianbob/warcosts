import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import IranWarDashboard from '@/components/IranWarDashboard'

export const metadata: Metadata = {
  title: 'Iran War 2026 — Operation Epic Fury: Live Tracker | WarCosts',
  description:
    'Live dashboard tracking Operation Epic Fury. Day count, casualties, cost ticker, oil prices, Strait of Hormuz status. The one page to bookmark for the Iran war.',
  keywords: [
    'Iran war 2026',
    'Operation Epic Fury',
    'Iran conflict tracker',
    'US Iran war',
    'Strait of Hormuz closed',
    'Iran war cost',
    'Iran war timeline',
    'Iran war live',
  ],
  openGraph: {
    title: 'Iran War 2026 — Live Tracker | Operation Epic Fury',
    description: 'Live cost counter, casualties, timeline, and analysis. The one page to follow the Iran war.',
    url: 'https://www.warcosts.org/iran-war-2026',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Iran War 2026 — Operation Epic Fury: Live Tracker',
  description: 'Live dashboard tracking the US war on Iran. Cost, casualties, timeline, and analysis.',
  url: 'https://www.warcosts.org/iran-war-2026',
  datePublished: '2026-02-28',
  dateModified: '2026-03-06',
  publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
}

const timeline = [
  { date: 'Feb 28, 9:15am Tehran', event: 'Bombs begin falling in broad daylight. Decapitation strikes hit Khamenei\'s compound, presidential offices, and national security HQ along Pasteur Street.' },
  { date: 'Feb 28, 10:30am', event: 'Second wave of strikes. Satellite imagery shows Khamenei\'s compound as "dark grey mess of dust and ash." Israeli strikes hit targets across Iran simultaneously.' },
  { date: 'Feb 28', event: '180 killed when Israeli strike hits Shajareh Tayyebeh girls\' elementary school in Minab. 170 students ages 7–12 were attending morning classes.' },
  { date: 'Feb 28, 2:30am DC', event: 'Trump posts 8-minute video on Truth Social announcing "major combat operations in Iran" — Operation Epic Fury. No congressional authorization.' },
  { date: 'Feb 28', event: 'Iran retaliates with massive missile and drone barrages targeting Israel, Bahrain, Kuwait, Jordan, Qatar, Iraq, Saudi Arabia, UAE, Syria, and British bases in Cyprus.' },
  { date: 'Feb 28', event: 'Iran closes the Strait of Hormuz — 20% of global oil and 20% of global LNG transit. Oil prices surge.' },
  { date: 'Mar 1', event: 'Iranian state media confirms Khamenei is dead. 40 days of mourning declared.' },
  { date: 'Mar 1', event: '1,000+ total targets hit. Trump claims 48 Iranian leaders killed and 9 naval vessels sunk.' },
  { date: 'Mar 1', event: 'Pentagon confirms 3 US service members killed in action, at least 5 seriously wounded.' },
  { date: 'Mar 1', event: 'Senate votes 53–47 AGAINST the Kaine-Paul War Powers Resolution. Rand Paul is the only Republican yes.' },
  { date: 'Mar 2', event: 'Iran\'s IRGC announces sixth wave of attacks targeting Israeli military assets and 27 US bases.' },
  { date: 'Mar 3', event: 'Oil majors suspend crude shipments through Hormuz. Insurance premiums triple. Thousands of flights cancelled.' },
  { date: 'Mar 4', event: 'Qatar strikes Iran after Al Udeid base hit — first Qatari offensive action ever. 11+ countries now under fire.' },
  { date: 'Mar 5', event: '30+ Iranian warships sunk. Iran\'s navy effectively destroyed. Oil surges past $130.' },
  { date: 'Mar 6', event: 'B-2 bombers strike buried missile launchers. Mehrabad Airport hit. Russia reportedly sharing US positions with Iran.' },
]

const costProjections = [
  { scenario: 'Air Campaign Only (4 weeks)', cost: '$8–15B', note: 'Cruise missiles, stealth bombers, naval operations. No ground troops.' },
  { scenario: 'Extended Air Campaign (3 months)', cost: '$25–50B', note: 'Including carrier group deployments, refueling, ammunition resupply.' },
  { scenario: 'Limited Ground Operation', cost: '$100–200B', note: 'Seizing ports or oil facilities. Requires 50,000+ troops.' },
  { scenario: 'Full Occupation (Iraq-style)', cost: '$1–3 trillion', note: 'Iran is 4× the size of Iraq with 3× the population.' },
  { scenario: 'Hormuz Closure (economic cost)', cost: '$50–100B/month', note: 'Global oil disruption, shipping rerouting, insurance costs, GDP impact.' },
  { scenario: 'Reconstruction (if attempted)', cost: '$500B+', note: 'Iraq reconstruction cost $220B and mostly failed. Iran would be far more expensive.' },
]

const iranArticles = [
  { href: '/analysis/iran-2026', title: 'Whose War Is This? Full Analysis', desc: 'The complete story from October 7 to Operation Epic Fury.' },
  { href: '/analysis/iran-day-by-day', title: 'Day-by-Day War Diary', desc: 'Verified casualties, costs, and events — updated daily.' },
  { href: '/analysis/iran-cost-per-second', title: 'The $28,095-Per-Second War', desc: 'Every dollar broken down: missiles, bombers, carriers, interceptors.' },
  { href: '/analysis/iran-civilian-cost', title: 'The Civilian Cost', desc: 'Schoolgirls, hospitals, neighborhoods — the human toll.' },
  { href: '/analysis/iran-regional-war', title: '11 Countries, 7 Days', desc: 'How the war spread across the entire Middle East.' },
  { href: '/analysis/iran-russia-shadow-war', title: 'Russia\'s Shadow War', desc: 'Moscow is sharing US military positions with Tehran.' },
  { href: '/analysis/hormuz-crisis', title: 'The Hormuz Crisis', desc: '21 million barrels/day halted. The global economic fallout.' },
]

export default function IranWar2026Page() {
  return (
    <div className="bg-stone-900 min-h-screen text-stone-300 -mt-4 -mx-4 px-4 pt-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto py-8">
        <Breadcrumbs items={[{ label: 'Conflicts', href: '/conflicts' }, { label: 'Iran War 2026' }]} />

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● LIVE</span>
          <span className="text-stone-500 text-sm">Last updated: March 6, 2026</span>
        </div>

        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-4">
          Iran War 2026: Operation Epic Fury
        </h1>

        <p className="text-lg text-stone-300 max-w-3xl mb-2">
          On February 28, 2026, the United States launched <strong className="text-red-400">Operation Epic Fury</strong> —
          a massive air campaign against Iran conducted without congressional authorization. Supreme Leader Khamenei
          was killed. Iran closed the Strait of Hormuz. The war continues.
        </p>

        <ShareButtons title="Iran War 2026 — Operation Epic Fury: Live Tracker" />

        {/* Live Dashboard */}
        <IranWarDashboard />

        {/* All Iran Coverage */}
        <div className="bg-stone-800 border border-red-600/30 rounded-xl p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">
            📊 Full Coverage — 7 In-Depth Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {iranArticles.map(a => (
              <Link key={a.href} href={a.href} className="bg-stone-700/50 hover:bg-stone-700 rounded-lg p-3 border border-stone-600 transition">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-white text-sm">{a.title}</h3>
                <p className="text-stone-400 text-xs mt-1">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* What Happened */}
        <div className="bg-stone-800 border border-red-600/30 rounded-xl p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">
            What Happened?
          </h2>
          <p className="text-stone-300 mb-3">
            After months of escalation — including a 37-hour strike on Iran&apos;s nuclear facilities in June 2025,
            massive Iranian protests in December 2025, and a brutal government crackdown that killed thousands —
            the US launched a full-scale air campaign against Iran&apos;s military and political leadership on
            February 28, 2026. The strikes came just one day after diplomatic talks in Geneva showed &ldquo;good
            progress,&rdquo; and hours after Oman&apos;s foreign minister pleaded with VP Vance for more time.
          </p>
          <p className="text-stone-300">
            Iran responded with retaliatory strikes across the entire Middle East, hitting targets in eight countries
            and closing the Strait of Hormuz — through which 20% of global oil flows. The Senate failed to
            invoke the War Powers Act, effectively greenlighting an undeclared war.
          </p>
        </div>

        {/* Timeline */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-12 mb-6">
          Timeline of Key Events
        </h2>
        <div className="space-y-4 mb-8">
          {timeline.map((t, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-red-600 mt-1.5 shrink-0" />
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-stone-700" />}
              </div>
              <div className="pb-4">
                <p className="text-red-400 text-sm font-semibold font-[family-name:var(--font-heading)]">{t.date}</p>
                <p className="text-stone-300 text-sm">{t.event}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hormuz impact */}
        <div className="bg-stone-800 border border-stone-700 rounded-xl p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">
            ⚠️ What&apos;s at Stake: The Strait of Hormuz
          </h2>
          <p className="text-stone-300 text-sm mb-3">
            Iran&apos;s closure of the Strait of Hormuz is potentially the most economically consequential
            event since the 2008 financial crisis. Every day the strait remains closed:
          </p>
          <ul className="space-y-2 text-stone-300 text-sm">
            <li>• <strong className="text-white">21 million barrels/day</strong> of oil cannot transit — 20% of global supply</li>
            <li>• <strong className="text-white">Oil prices</strong> projected to exceed $150+ per barrel</li>
            <li>• <strong className="text-white">LNG shipments</strong> to Asia disrupted — 20% of global supply</li>
            <li>• <strong className="text-white">Insurance premiums</strong> for tankers have tripled; major carriers suspending operations</li>
            <li>• <strong className="text-white">Global GDP impact</strong> estimated at 1–3% if closure extends beyond 30 days</li>
            <li>• <strong className="text-white">Gas prices</strong> heading toward $5–7/gallon in the US</li>
          </ul>
        </div>

        {/* Cost projections */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-12 mb-6">
          How Much Will This Cost?
        </h2>
        <div className="space-y-4 mb-8">
          {costProjections.map((c) => (
            <div key={c.scenario} className="bg-stone-800 rounded-lg p-4 border border-stone-700">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-white text-sm">{c.scenario}</h3>
                <span className="text-red-400 font-bold font-[family-name:var(--font-heading)] text-lg shrink-0 ml-4">{c.cost}</span>
              </div>
              <p className="text-stone-500 text-xs">{c.note}</p>
            </div>
          ))}
        </div>

        {/* No authorization callout */}
        <div className="bg-red-900/20 border border-red-600/40 rounded-xl p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-red-400 mb-3">
            No Congressional Authorization
          </h3>
          <p className="text-stone-300 text-sm">
            Operation Epic Fury was launched without a vote in Congress. The War Powers Resolution requires
            the president to notify Congress within 48 hours and withdraw forces within 60 days without
            authorization. When Senators Kaine and Paul introduced a War Powers resolution on March 1, the
            Senate voted it down 53–47. Rand Paul was the only Republican to vote yes.
          </p>
        </div>

        {/* Quick links */}
        <div className="bg-stone-800 rounded-lg p-6 border border-stone-700 mt-12">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">Explore More</h3>
          <ul className="space-y-2">
            <li><Link href="/conflicts/iran-2026" className="text-red-400 hover:underline">→ Iran Conflict Data Page</Link></li>
            <li><Link href="/analysis/cost-of-iran" className="text-red-400 hover:underline">→ Projected Full Cost of the Iran War</Link></li>
            <li><Link href="/analysis/aipac-war-machine" className="text-red-400 hover:underline">→ Follow the Money: AIPAC and the Path to War</Link></li>
            <li><Link href="/analysis/congressional-authority" className="text-red-400 hover:underline">→ Who Has the Power to Declare War?</Link></li>
            <li><Link href="/spending" className="text-red-400 hover:underline">→ US Military Spending Over Time</Link></li>
          </ul>
        </div>

        <BackToTop />
      </div>
    </div>
  )
}
