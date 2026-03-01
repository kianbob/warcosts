import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Iran 2026: Another Undeclared War?',
  description: 'The US has launched military operations against Iran in early 2026 with no congressional authorization. History is repeating itself.',
}

const timeline = [
  { date: 'Jan 2026', event: 'Escalating rhetoric over Iran nuclear program; US repositions carrier strike groups to Persian Gulf' },
  { date: 'Jan 2026', event: 'Airstrikes on Iranian proxy positions in Iraq and Syria intensify' },
  { date: 'Feb 2026', event: 'Direct strikes on Iranian military facilities; Iran retaliates against US bases in region' },
  { date: 'Feb 2026', event: 'Congress not consulted; War Powers Resolution notification filed after strikes begin' },
  { date: 'Feb 2026', event: 'Estimated initial costs: $2–5 billion in first month of operations' },
  { date: 'Mar 2026', event: 'Situation developing — no authorization vote scheduled in Congress' },
]

const iranHistory = [
  { year: '1953', event: 'CIA overthrows democratically elected PM Mossadegh', link: '/conflicts/iran-1953' },
  { year: '1979', event: 'Iranian Revolution — blowback from 1953 coup', link: '/analysis/blowback' },
  { year: '1980–88', event: 'US supports Iraq in Iran-Iraq War, provides intelligence to Saddam' },
  { year: '1988', event: 'USS Vincennes shoots down Iran Air 655, killing 290 civilians' },
  { year: '2002', event: 'Bush names Iran in "Axis of Evil"' },
  { year: '2015', event: 'JCPOA nuclear deal signed' },
  { year: '2018', event: 'Trump withdraws from nuclear deal, reimposing sanctions' },
  { year: '2020', event: 'US assassinates Gen. Soleimani — nearly triggers war' },
  { year: '2026', event: 'Military strikes begin without congressional authorization', link: '/conflicts/iran-2026' },
]

export default function Iran2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Iran 2026' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● DEVELOPING</span>
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Analysis</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Iran 2026: Another Undeclared War?
        </h1>
        <p className="text-stone-400 text-lg">
          The United States has launched military operations against Iran in early 2026.
          No vote in Congress. No declaration of war. No exit strategy.
          We&apos;ve seen this movie before.
        </p>
      </div>

      <ShareButtons title="Iran 2026: Another Undeclared War?" />

      {/* Cost comparison */}
      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
          <p className="text-sm text-muted mb-1">Iraq War cost</p>
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(2.4e12)}</p>
          <p className="text-xs text-muted">Over 8 years</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
          <p className="text-sm text-muted mb-1">Afghanistan cost</p>
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(2.3e12)}</p>
          <p className="text-xs text-muted">Over 20 years</p>
        </div>
        <div className="bg-red-50 border-red-200 rounded-lg p-6 border text-center">
          <p className="text-sm text-red-700 mb-1">Iran could cost</p>
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(3e12)}+</p>
          <p className="text-xs text-red-600">Military analysts&apos; estimate</p>
        </div>
      </div>

      {/* Escalation timeline */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">2026 Escalation Timeline</h2>
        <div className="space-y-4">
          {timeline.map((t, i) => (
            <div key={i} className="flex items-start gap-4 border-l-2 border-red-200 pl-4">
              <span className="text-red-700 font-bold font-[family-name:var(--font-heading)] shrink-0 w-20 text-sm">{t.date}</span>
              <p className="text-stone-700">{t.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Historical context */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">73 Years of US-Iran Conflict</h2>
        <p className="text-muted mb-6">
          The current conflict didn&apos;t begin in 2026. It began in 1953, when the CIA overthrew Iran&apos;s
          democratically elected government. Every escalation since is blowback from that original sin.
        </p>
        <div className="space-y-3">
          {iranHistory.map((h, i) => (
            <div key={i} className="flex items-start gap-4 border-l-2 border-stone-200 pl-4">
              <span className="text-stone-500 font-bold font-[family-name:var(--font-heading)] shrink-0 w-20 text-sm">{h.year}</span>
              <div>
                {h.link ? (
                  <Link href={h.link} className="text-primary hover:underline font-medium">{h.event}</Link>
                ) : (
                  <p className="text-stone-700">{h.event}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* No authorization */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-red-800">No Congressional Authorization</h2>
        <div className="space-y-3 text-stone-700">
          <p>
            As of March 2026, no vote has been held in Congress to authorize military action against Iran.
            The administration has cited the 2001 AUMF and Article II commander-in-chief powers —
            the same justifications used for every undeclared war since 9/11.
          </p>
          <p>
            Iran is a nation of 88 million people with a conventional military, ballistic missiles,
            and proxy forces across the Middle East. This is not a counterterrorism operation.
            This is a potential full-scale war launched without the consent of the American people&apos;s representatives.
          </p>
        </div>
      </div>

      {/* Perspective */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Perspective</h2>
        <p className="text-stone-300 italic">
          America created this enemy. The 1953 coup installed a dictator, which produced the 1979 revolution,
          which produced 45 years of hostility. Now, after spending {fmtMoney(8e12)} on the War on Terror
          with nothing to show for it, the US is stumbling into another Middle Eastern war — again without
          congressional authorization, again without an exit strategy, and again without learning anything
          from the disasters of Iraq and Afghanistan. The definition of insanity is doing the same thing
          over and over and expecting different results.
        </p>
      </div>

      {/* Cross-links */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/conflicts/iran-2026" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 2026 — Conflict Data →</h3>
          <p className="text-muted text-sm">Costs, casualties, and key events</p>
        </Link>
        <Link href="/conflicts/iran-1953" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 1953 — The Original Sin →</h3>
          <p className="text-muted text-sm">CIA overthrow of Mossadegh</p>
        </Link>
        <Link href="/analysis/blowback" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Blowback →</h3>
          <p className="text-muted text-sm">How interventions create enemies</p>
        </Link>
        <Link href="/analysis/forever-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Forever Wars →</h3>
          <p className="text-muted text-sm">How 60 words enabled 25 years of war</p>
        </Link>
      </div>
    </div>
  )
}
