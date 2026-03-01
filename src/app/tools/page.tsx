import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Tools — Interactive War Cost Calculators | WarCosts',
  description: 'Interactive tools to explore military spending: live war clock, personal tax receipt calculator, jobs comparison, and state-by-state cost calculator.',
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
]

export default function ToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Tools' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">Interactive Tools</h1>
      <p className="text-muted mb-8 max-w-3xl text-lg">
        Explore the cost of war through interactive calculators. See how military spending affects you personally.
      </p>

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

      <BackToTop />
    </div>
  )
}
