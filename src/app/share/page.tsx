import { Metadata } from 'next'
import Link from 'next/link'
import FaqJsonLd from '@/components/FaqJsonLd'

export const metadata: Metadata = {
  title: 'Shareable War Stats — Screenshot & Share on Social Media | WarCosts',
  description: 'Pre-designed stat cards about US war spending, veteran suicide, Pentagon waste, and military costs. Screenshot and share on social media to spread awareness about the true cost of war.',
  alternates: { canonical: 'https://www.warcosts.org/share' },
  keywords: ['war stats share', 'military spending infographic', 'war cost social media', 'shareable war data', 'veteran suicide stats'],
  openGraph: {
    title: 'Share the Truth — War Cost Stats for Social Media',
    description: 'Pre-designed stat cards with sourced data on US war spending, casualties, and Pentagon waste. Screenshot and share.',
    url: 'https://www.warcosts.org/share',
    type: 'website',
  },
}

const stats = [
  {
    headline: '$8.1 Trillion',
    subtext: 'spent on war since 9/11',
    detail: 'That\'s $24,000 per American — for wars most Americans opposed.',
    source: 'Brown University Costs of War Project, 2024',
    color: 'from-red-900 to-red-700',
  },
  {
    headline: '22 Veterans',
    subtext: 'die by suicide every day',
    detail: 'More veterans have died by suicide since 9/11 than in all post-9/11 combat combined.',
    source: 'VA National Suicide Data Report, 2023',
    color: 'from-stone-900 to-stone-700',
  },
  {
    headline: '$1.7 Trillion',
    subtext: 'F-35 program lifetime cost',
    detail: 'More than Australia\'s entire GDP. For one fighter jet program that still can\'t fly in the rain.',
    source: 'GAO Selected Acquisition Report, 2024',
    color: 'from-red-800 to-orange-700',
  },
  {
    headline: '750+ Bases',
    subtext: 'in 80 countries worldwide',
    detail: 'The US has more foreign military bases than all other nations combined.',
    source: 'David Vine, "Base Nation" / DoD Base Structure Report',
    color: 'from-stone-800 to-stone-600',
  },
  {
    headline: '0 Audits Passed',
    subtext: 'by the Pentagon — ever',
    detail: 'The Department of Defense has failed every audit since they began in 2018. $3.8 trillion in assets unaccounted for.',
    source: 'DoD Office of Inspector General, 2024',
    color: 'from-red-900 to-stone-800',
  },
  {
    headline: '929,000 Dead',
    subtext: 'in post-9/11 war zones',
    detail: 'Including 387,000+ civilians. In wars launched to "protect" civilians.',
    source: 'Brown University Costs of War Project, 2024',
    color: 'from-stone-900 to-red-900',
  },
  {
    headline: '$886 Billion',
    subtext: 'annual military budget',
    detail: 'More than the next 10 countries combined. More than all federal spending on education, housing, and transportation.',
    source: 'Department of Defense FY2025 Budget',
    color: 'from-red-700 to-red-500',
  },
  {
    headline: '229 of 249 Years',
    subtext: 'at war since 1776',
    detail: 'The United States has been at peace for only ~20 years of its entire existence. War is the default state.',
    source: 'Congressional Research Service, Military Operations Database',
    color: 'from-stone-800 to-stone-900',
  },
  {
    headline: '$28,095',
    subtext: 'spent per second on military',
    detail: 'That\'s $1.7 million per minute. $101 million per hour. $2.4 billion every single day — war or peace.',
    source: 'OMB / DoD Budget Authority FY2025',
    color: 'from-red-800 to-red-600',
  },
  {
    headline: '469 Interventions',
    subtext: 'since 1798',
    detail: 'Only 11 had formal declarations of war. Congress has been bypassed for 98% of US military operations.',
    source: 'Congressional Research Service R42738',
    color: 'from-stone-900 to-stone-700',
  },
  {
    headline: '3.8 Million',
    subtext: 'indirect deaths from post-9/11 wars',
    detail: 'Disease, displacement, starvation, and infrastructure destruction. The uncounted cost of war.',
    source: 'Brown University Costs of War, 2023',
    color: 'from-red-900 to-stone-900',
  },
  {
    headline: '$2.1 Billion',
    subtext: 'cost of a single B-2 bomber',
    detail: 'That\'s more than the entire Revolutionary War cost in inflation-adjusted dollars. For one airplane.',
    source: 'USAF / GAO Acquisition Reports',
    color: 'from-stone-700 to-stone-900',
  },
]

const tipsForSharing = [
  { platform: 'Twitter/X', tip: 'Screenshot the card, crop it tight, and add a one-line comment. Tag #WarCosts for visibility.' },
  { platform: 'Instagram', tip: 'The 4:3 aspect ratio works perfectly in-feed. Add to Stories with a "swipe up" or link sticker to warcosts.org.' },
  { platform: 'Facebook', tip: 'Share the image with a question: "Did you know?" gets more engagement than statements.' },
  { platform: 'Reddit', tip: 'Post to r/dataisbeautiful, r/politics, or r/economics with the source cited in comments.' },
  { platform: 'TikTok', tip: 'Screenshot multiple cards and create a slideshow. The "scroll reveal" format works well for shocking stats.' },
  { platform: 'Email/Text', tip: 'Right-click → Save Image As, then attach. Sometimes the most powerful share is a personal one.' },
]

export default function SharePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <FaqJsonLd faqs={[
        { q: 'Can I use these war cost stats on social media?', a: 'Yes! All stat cards on this page are designed to be screenshotted and shared freely. No permission needed. We encourage sharing — the more people see the data, the better.' },
        { q: 'Are the statistics on these cards sourced?', a: 'Every stat card includes its source — Brown University Costs of War Project, Congressional Research Service, Department of Defense, GAO, and other official sources. All figures are verifiable.' },
        { q: 'How much does the US spend on military per second?', a: 'The US spends approximately $28,095 per second on its military — that\'s $1.7 million per minute, $101 million per hour, and $2.4 billion per day based on the $886 billion annual defense budget.' },
        { q: 'How many US veterans die by suicide each day?', a: 'According to the VA National Suicide Data Report, approximately 17-22 veterans die by suicide every day — more than all post-9/11 combat deaths combined each year.' },
        { q: 'Has the Pentagon ever passed a financial audit?', a: 'No. The Department of Defense has failed every comprehensive audit since mandatory audits began in 2018. It is the only federal agency that has never passed an audit, with $3.8 trillion in assets unaccounted for.' },
      ]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-stone-900 mb-3">
        Share the Truth
      </h1>
      <p className="text-stone-500 text-lg mb-2 max-w-2xl">
        Screenshot any card below and share it. No permission needed. The more people know, the harder it is to ignore.
        Every stat is sourced from official government reports and peer-reviewed research.
      </p>
      <p className="text-stone-400 text-sm mb-10">
        Right-click → Save image, or just screenshot. All stats are sourced and verifiable.
        Designed for Instagram, Twitter/X, Facebook, and anywhere else the truth needs to be heard.
      </p>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${stat.color} text-white rounded-2xl p-8 md:p-10 shadow-xl aspect-[4/3] flex flex-col justify-between`}
          >
            <div>
              <p className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {stat.headline}
              </p>
              <p className="text-xl md:text-2xl font-medium mt-1 text-white/80">
                {stat.subtext}
              </p>
              <p className="text-base mt-4 text-white/70 leading-relaxed max-w-md">
                {stat.detail}
              </p>
            </div>
            <div className="flex justify-between items-end mt-6">
              <p className="text-xs text-white/40 max-w-[60%]">
                Source: {stat.source}
              </p>
              <p className="text-sm font-bold text-white/50 tracking-wider">
                WARCOSTS.ORG
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* How to Share */}
      <section className="mt-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-stone-900 mb-6">
          How to Share Effectively
        </h2>
        <p className="text-stone-500 mb-6 max-w-2xl">
          Data changes minds — but only if people see it. Here are platform-specific tips for maximum impact:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tipsForSharing.map((tip, i) => (
            <div key={i} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
              <h3 className="font-bold text-stone-900 mb-2">{tip.platform}</h3>
              <p className="text-stone-600 text-sm">{tip.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Share Section */}
      <section className="mt-16 bg-stone-900 text-white rounded-2xl p-8 md:p-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Why Sharing Matters</h2>
        <div className="space-y-4 text-stone-300 text-lg max-w-3xl">
          <p>
            Most Americans don&apos;t know the true cost of war. They don&apos;t know that the Pentagon has never passed an audit.
            They don&apos;t know that 22 veterans die by suicide every day. They don&apos;t know that the US has been at war
            for 229 of its 249 years.
          </p>
          <p>
            The defense industry spends <strong className="text-white">$130 million per year</strong> on lobbying
            to keep these numbers hidden behind complex budget documents and patriotic rhetoric. They have lobbyists.
            The public has data.
          </p>
          <p>
            Every time you share one of these cards, you&apos;re doing what the defense industry fears most:
            putting the numbers where ordinary people can see them.
          </p>
        </div>
      </section>

      {/* Embed Options */}
      <section className="mt-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-stone-900 mb-6">
          Embed on Your Website
        </h2>
        <p className="text-stone-500 mb-4 max-w-2xl">
          Running a blog, news site, or educational resource? You can embed our live war clock or spending counter
          directly on your page. No API key required.
        </p>
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-6">
          <h3 className="font-bold text-stone-900 mb-2">War Clock Embed</h3>
          <code className="block bg-stone-100 p-4 rounded-lg text-sm text-stone-700 overflow-x-auto">
            {`<iframe src="https://warcosts.org/embed/war-clock" width="400" height="200" frameborder="0"></iframe>`}
          </code>
          <p className="text-stone-500 text-sm mt-2">Embeds a live-updating counter showing US military spending per second.</p>
        </div>
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 mt-4">
          <h3 className="font-bold text-stone-900 mb-2">Iran War Cost Embed</h3>
          <code className="block bg-stone-100 p-4 rounded-lg text-sm text-stone-700 overflow-x-auto">
            {`<iframe src="https://warcosts.org/embed/iran-counter" width="400" height="200" frameborder="0"></iframe>`}
          </code>
          <p className="text-stone-500 text-sm mt-2">Embeds a live counter of Iran War 2026 spending.</p>
        </div>
      </section>

      {/* Additional Resources for Educators */}
      <section className="mt-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-stone-900 mb-6">
          For Educators & Journalists
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-stone-200 rounded-xl p-6">
            <h3 className="font-bold text-stone-900 text-lg mb-3">📚 For Classrooms</h3>
            <p className="text-stone-600 text-sm mb-3">
              These stat cards are designed for classroom discussions about government spending, civic responsibility,
              and the cost of military policy. All data is sourced from official government and academic reports.
            </p>
            <ul className="text-stone-500 text-sm space-y-1">
              <li>• Pair with our <Link href="/tools/budget-simulator" className="text-red-700 hover:underline">Budget Simulator</Link> for interactive learning</li>
              <li>• Use the <Link href="/tools/tax-receipt" className="text-red-700 hover:underline">Tax Receipt Calculator</Link> for personal context</li>
              <li>• Download raw data from our <Link href="/downloads" className="text-red-700 hover:underline">Downloads</Link> page</li>
            </ul>
          </div>
          <div className="bg-white border border-stone-200 rounded-xl p-6">
            <h3 className="font-bold text-stone-900 text-lg mb-3">📰 For Journalists</h3>
            <p className="text-stone-600 text-sm mb-3">
              All figures are sourced and freely usable with attribution (&ldquo;Source: WarCosts.org&rdquo;). We provide
              high-resolution data, API access, and downloadable datasets for investigative reporting.
            </p>
            <ul className="text-stone-500 text-sm space-y-1">
              <li>• Raw data: <Link href="/downloads" className="text-red-700 hover:underline">Downloads page</Link></li>
              <li>• Methodology: <Link href="/methodology" className="text-red-700 hover:underline">How we calculate</Link></li>
              <li>• Sources: <Link href="/sources" className="text-red-700 hover:underline">Complete bibliography</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Create Your Own */}
      <section className="mt-16 bg-red-50 border border-red-200 rounded-xl p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-900 mb-4">
          Create Your Own Stat Cards
        </h2>
        <p className="text-stone-700 mb-4">
          Want to create custom stat cards for your state, your city, or a specific war? Our interactive tools
          generate shareable data:
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/tools/state-impact" className="px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-semibold hover:bg-red-800 transition">
            Your State&apos;s War Cost
          </Link>
          <Link href="/tools/tax-receipt" className="px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-semibold hover:bg-red-800 transition">
            Your Personal Tax Receipt
          </Link>
          <Link href="/tools/casualty-calculator" className="px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-semibold hover:bg-red-800 transition">
            Casualty Calculator
          </Link>
          <Link href="/tools/compare-wars" className="px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-semibold hover:bg-red-800 transition">
            Compare Wars
          </Link>
        </div>
      </section>

      {/* Bottom CTAs */}
      <div className="mt-12 text-center">
        <p className="text-stone-500 mb-4">Want to explore more or help spread awareness?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="text-red-600 font-semibold hover:underline">← Back to Home</Link>
          <Link href="/analysis" className="text-red-600 font-semibold hover:underline">Read Analysis →</Link>
          <Link href="/war-clock" className="text-red-600 font-semibold hover:underline">War Clock →</Link>
          <Link href="/iran-war-2026" className="text-red-600 font-semibold hover:underline">Iran War 2026 →</Link>
          <Link href="/tools" className="text-red-600 font-semibold hover:underline">Interactive Tools →</Link>
          <Link href="/downloads" className="text-red-600 font-semibold hover:underline">Download Data →</Link>
        </div>
      </div>
    </main>
  )
}
