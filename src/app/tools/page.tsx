import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'
import FaqJsonLd from '@/components/FaqJsonLd'

export const metadata: Metadata = {
  title: 'Tools — Interactive War Cost Calculators',
  description: 'Interactive tools to explore military spending: live war clock, personal tax receipt calculator, jobs comparison, budget simulator, casualty calculator, and 14+ more free calculators. No login required.',
  alternates: { canonical: 'https://www.warcosts.org/tools' },
  keywords: ['war cost calculator', 'military spending tools', 'tax receipt calculator', 'war clock', 'budget simulator', 'compare wars'],
  openGraph: {
    title: '14+ Interactive War Cost Tools — Free Calculators | WarCosts',
    description: 'War Clock, Tax Receipt Calculator, Budget Simulator, Compare Wars, and more. See how military spending affects you personally.',
    url: 'https://www.warcosts.org/tools',
    type: 'website',
  },
}

const tools = [
  {
    title: 'War Clock',
    desc: 'Watch US military spending tick up in real time. $28,095 every second. $101 million every hour. $2.4 billion every day.',
    href: '/war-clock',
    icon: '⏱️',
    color: 'bg-red-50 border-red-200',
  },
  {
    title: 'Tax Receipt Calculator',
    desc: 'Enter your income and see exactly how much of your federal taxes go to the military, wars, and veteran care.',
    href: '/tools/tax-receipt',
    icon: '🧾',
    color: 'bg-amber-50 border-amber-200',
  },
  {
    title: 'Jobs Calculator',
    desc: 'Compare job creation: $1 million in military spending creates 5 jobs vs 13 in education, 9 in healthcare, 8 in clean energy.',
    href: '/tools/jobs-calculator',
    icon: '👷',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    title: 'Cost Calculator',
    desc: 'See your state\'s share of military spending, your lifetime war cost, and what that money could have bought instead.',
    href: '/tools/cost-calculator',
    icon: '🧮',
    color: 'bg-green-50 border-green-200',
  },
  {
    title: 'State Impact Calculator',
    desc: 'Enter your state and see your personal share of $8 trillion in war spending, military casualties, and what that money could\'ve funded locally.',
    href: '/tools/state-impact',
    icon: '📍',
    color: 'bg-purple-50 border-purple-200',
  },
  {
    title: 'Compare Countries',
    desc: 'Compare any two countries\' military spending side by side: budgets, % GDP, global rank, 10-year trends, and US bases.',
    href: '/tools/compare-countries',
    icon: '⚖️',
    color: 'bg-purple-50 border-purple-200',
  },
  {
    title: 'Aid Calculator',
    desc: 'Enter your income and see exactly how your tax dollars are split between the military, foreign aid, and which countries receive your money.',
    href: '/tools/aid-calculator',
    icon: '🌍',
    color: 'bg-teal-50 border-teal-200',
  },
  {
    title: 'Timeline Explorer',
    desc: '250 years of American military history on a single interactive timeline. Every war, operation, and congressional vote — visualized.',
    href: '/tools/timeline-explorer',
    icon: '📅',
    color: 'bg-rose-50 border-rose-200',
  },
  {
    title: 'Budget Simulator',
    desc: 'Redesign the $6.1 trillion federal budget. Move money from military to education, healthcare, or infrastructure and see the impact.',
    href: '/tools/budget-simulator',
    icon: '💰',
    color: 'bg-indigo-50 border-indigo-200',
  },
  {
    title: 'War Quiz',
    desc: 'How much do you know about America\'s wars? 20 questions with shocking answers drawn from real data. Track your score and share your result.',
    href: '/tools/war-quiz',
    icon: '❓',
    color: 'bg-orange-50 border-orange-200',
  },
  {
    title: 'Casualty Calculator',
    desc: 'What would war casualties look like in your city? Enter a population, select a conflict, and see what percentage would be gone.',
    href: '/tools/casualty-calculator',
    icon: '🏙️',
    color: 'bg-red-50 border-red-200',
  },
  {
    title: 'Hormuz Impact Calculator',
    desc: 'What happens if Iran closes the Strait of Hormuz? Slide to see projected oil prices, GDP losses, gas price spikes, and what that money could buy instead.',
    href: '/tools/hormuz-calculator',
    icon: '🚢',
    color: 'bg-red-50 border-red-200',
  },
  {
    title: 'Iran vs Iraq War',
    desc: 'Side-by-side comparison of the Iran and Iraq wars: costs, casualties, congressional votes, coalition sizes, oil prices, and public support.',
    href: '/tools/iran-vs-iraq',
    icon: '⚔️',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    title: 'Compare Wars',
    desc: 'Side-by-side comparison of 2–4 conflicts. Compare cost, duration, casualties, cost-per-day, and cost-per-life with interactive charts.',
    href: '/tools/compare-wars',
    icon: '📊',
    color: 'bg-cyan-50 border-cyan-200',
  },
]

export default function ToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Tools' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">Interactive Tools</h1>
      <p className="text-muted mb-8 max-w-3xl text-lg">
        Explore the cost of war through interactive calculators. See how military spending affects you personally.
      </p>

      {/* Featured Tools */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">⭐ Most Popular</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { title: 'War Clock', href: '/war-clock', icon: '⏱️' },
            { title: 'Tax Receipt', href: '/tools/tax-receipt', icon: '🧾' },
            { title: 'Budget Simulator', href: '/tools/budget-simulator', icon: '💰' },
            { title: 'Compare Wars', href: '/tools/compare-wars', icon: '📊' },
          ].map(t => (
            <Link key={t.href} href={t.href} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition">
              <span className="text-3xl block mb-2">{t.icon}</span>
              <span className="text-sm font-semibold text-stone-200">{t.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* All Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map(t => (
          <Link key={t.href} href={t.href}
            className={`${t.color} border rounded-xl p-8 hover:shadow-lg transition group block`}>
            <span className="text-5xl mb-4 block">{t.icon}</span>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2 group-hover:text-primary transition">{t.title}</h2>
            <p className="text-muted">{t.desc}</p>
            <span className="text-primary font-semibold mt-4 inline-block">Try it →</span>
          </Link>
        ))}
      </div>

      {/* How to Use These Tools */}
      <section className="mt-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">How to Use These Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-bold text-stone-900 text-lg mb-3">🏠 Personal Impact</h3>
            <p className="text-stone-600 text-sm mb-3">
              Want to know how war affects <em>you</em> personally? Start with the Tax Receipt Calculator to see
              your military tax burden, then use the State Impact Calculator to see your state&apos;s share.
            </p>
            <div className="space-y-1 text-sm">
              <Link href="/tools/tax-receipt" className="text-red-700 hover:underline block">→ Tax Receipt Calculator</Link>
              <Link href="/tools/state-impact" className="text-red-700 hover:underline block">→ State Impact Calculator</Link>
              <Link href="/tools/cost-calculator" className="text-red-700 hover:underline block">→ Lifetime War Cost</Link>
            </div>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-bold text-stone-900 text-lg mb-3">📚 Research & Education</h3>
            <p className="text-stone-600 text-sm mb-3">
              Writing a paper or teaching a class? Compare Wars lets you visualize conflicts side-by-side.
              The Timeline Explorer covers 250 years. The Budget Simulator makes fiscal tradeoffs tangible.
            </p>
            <div className="space-y-1 text-sm">
              <Link href="/tools/compare-wars" className="text-red-700 hover:underline block">→ Compare Wars</Link>
              <Link href="/tools/timeline-explorer" className="text-red-700 hover:underline block">→ Timeline Explorer</Link>
              <Link href="/tools/budget-simulator" className="text-red-700 hover:underline block">→ Budget Simulator</Link>
            </div>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-bold text-stone-900 text-lg mb-3">🌍 Current Events</h3>
            <p className="text-stone-600 text-sm mb-3">
              Following the Iran situation? Use the Iran vs Iraq comparison, the Hormuz Impact Calculator,
              and the Iran War cost counter for real-time context on the current conflict.
            </p>
            <div className="space-y-1 text-sm">
              <Link href="/tools/iran-vs-iraq" className="text-red-700 hover:underline block">→ Iran vs Iraq War</Link>
              <Link href="/tools/hormuz-calculator" className="text-red-700 hover:underline block">→ Hormuz Impact Calculator</Link>
              <Link href="/iran-war-vs-spending" className="text-red-700 hover:underline block">→ Iran War vs. Spending</Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Educators */}
      <section className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🎓 For Educators</h2>
        <p className="text-stone-700 mb-4">
          All tools are free, require no login, and work on any device. They’re designed for classroom use:
        </p>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li>• <strong>Civics classes:</strong> Use the Budget Simulator to teach fiscal tradeoffs and democratic decision-making</li>
          <li>• <strong>History classes:</strong> Use Compare Wars and Timeline Explorer for interactive conflict analysis</li>
          <li>• <strong>Economics classes:</strong> Use the Jobs Calculator to explore opportunity costs and the multiplier effect</li>
          <li>• <strong>Current events:</strong> Use the War Clock and Iran tools for real-time data on military spending</li>
        </ul>
        <p className="text-stone-500 text-sm mt-4">
          All data is sourced from official government reports and peer-reviewed research. See our <Link href="/sources" className="text-red-700 hover:underline">Sources page</Link> for complete citations.
        </p>
      </section>

      {/* Data Highlights */}
      <section className="mt-12 bg-stone-900 text-white rounded-xl p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Key Data Points Used by Our Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: '$886B', label: 'Annual DoD Budget' },
            { stat: '$8.1T', label: 'War on Terror Cost' },
            { stat: '$11.3T', label: 'All US Wars Since 1776' },
            { stat: '229/249', label: 'Years at War' },
            { stat: '$1.4T+', label: 'True National Security Cost' },
            { stat: '469+', label: 'Military Interventions' },
            { stat: '750+', label: 'Overseas Bases' },
            { stat: '17/day', label: 'Veteran Suicides' },
          ].map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{s.stat}</div>
              <div className="text-stone-400 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-xs mt-4">All figures sourced from DoD, SIPRI, Brown University Costs of War, CRS, and OMB. See our <Link href="/sources" className="text-red-400 hover:underline">Sources page</Link>.</p>
      </section>

      {/* Technical Details */}
      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Technical Details</h2>
        <div className="bg-stone-50 border rounded-lg p-6 text-stone-600 text-sm space-y-2">
          <p><strong>Data format:</strong> All tools use JSON data files available on our <Link href="/downloads" className="text-red-700 hover:underline">Downloads page</Link>.</p>
          <p><strong>Inflation adjustment:</strong> All historical dollar amounts are adjusted to 2024 dollars using BLS CPI-U.</p>
          <p><strong>Real-time counters:</strong> The War Clock and Iran War counter divide annual/total costs by elapsed seconds for the ticking display.</p>
          <p><strong>Accessibility:</strong> All tools are keyboard-navigable and screen-reader compatible.</p>
          <p><strong>Privacy:</strong> No data is collected. All calculations run client-side in your browser. No login, no cookies, no tracking.</p>
        </div>
      </section>

      {/* Related Pages */}
      <section className="mt-12 bg-stone-50 border rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/downloads" className="text-red-800 hover:underline">→ Downloads — Raw data files for your projects</Link></li>
          <li><Link href="/sources" className="text-red-800 hover:underline">→ Sources — Where our data comes from</Link></li>
          <li><Link href="/methodology" className="text-red-800 hover:underline">→ Methodology — How we calculate these numbers</Link></li>
          <li><Link href="/share" className="text-red-800 hover:underline">→ Share — Shareable stat cards for social media</Link></li>
          <li><Link href="/faq" className="text-red-800 hover:underline">→ FAQ — Common questions answered</Link></li>
        </ul>
      </section>

      {/* Coming Soon */}
      <section className="mt-12 bg-stone-50 border rounded-lg p-6">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">🚧 Coming Soon</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-1">📱 Mobile App</h3>
            <p className="text-stone-600 text-sm">All our tools optimized for mobile with push notifications for Iran War updates and spending milestones.</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-1">📊 API Access</h3>
            <p className="text-stone-600 text-sm">REST API for developers to build their own applications using our aggregated military spending and conflict data.</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-1">🌍 Global Military Map</h3>
            <p className="text-stone-600 text-sm">Interactive map showing every US military base, active operation, and arms sale worldwide.</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-1">🎬 War Documentary Library</h3>
            <p className="text-stone-600 text-sm">Curated collection of free documentaries about US wars, military spending, and the military-industrial complex.</p>
          </div>
        </div>
      </section>

      <FaqJsonLd faqs={[
        { q: 'What interactive tools does WarCosts offer?', a: 'WarCosts offers 14+ free interactive tools including: War Clock (real-time spending), Tax Receipt Calculator, Jobs Calculator, Budget Simulator, Compare Wars, State Impact Calculator, Casualty Calculator, Iran vs Iraq comparison, Hormuz Impact Calculator, War Quiz, and more. All tools are free with no login required.' },
        { q: 'How does the War Clock work?', a: 'The War Clock divides the $886 billion annual military budget by seconds in a year, showing $28,095 per second in real-time. It starts counting from when you open the page.' },
        { q: 'Can I use WarCosts tools in my classroom?', a: 'Yes! All tools are free, require no login, work on any device, and use sourced government data. The Budget Simulator, Compare Wars, and Timeline Explorer are especially popular for civics, history, and economics classes.' },
        { q: 'Does WarCosts collect any personal data from the tools?', a: 'No. All calculations run client-side in your browser. We don\'t collect any personal data, require no login, set no cookies, and do no tracking. Your privacy is absolute.' },
      ]} />

      <BackToTop />
    </div>
  )
}
