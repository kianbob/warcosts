// @ts-nocheck
import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { CalendarClient } from './CalendarClient'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: "America's War Calendar — 229 Years at War Out of 249 | WarCosts",
  description: 'The United States has been at war for 229 of its 249 years of existence. Only ~20 years of peace. Visual heatmap of every year from 1776 to 2026.',
  keywords: ['us years at war', 'america war calendar', 'how many years has us been at war', 'american wars timeline', 'us peace years'],
  openGraph: {
    title: "America's War Calendar: 229 Years at War Out of 249",
    description: 'Only ~20 years of peace in 249 years. Every year color-coded by active conflicts.',
    url: 'https://warcosts.org/war-calendar',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '229 Years at War Out of 249',
    description: 'The US has been at peace for only ~20 years. See the full calendar.',
  },
}

export default function WarCalendarPage() {
  const raw = fs.readFileSync(path.join(process.cwd(), 'public/data/war-years.json'), 'utf-8')
  const warYears: Record<string, string[]> = JSON.parse(raw)

  // Compute stats
  const years = Object.entries(warYears).map(([y, conflicts]) => ({ year: Number(y), conflicts }))
  const peaceYears = years.filter(y => y.conflicts.length === 0)
  const warCount = years.filter(y => y.conflicts.length > 0).length
  const maxConflicts = Math.max(...years.map(y => y.conflicts.length))
  const maxYear = years.find(y => y.conflicts.length === maxConflicts)

  // Longest peace streak
  let bestStreak = 0, bestStart = 0, curStreak = 0, curStart = 0
  for (const y of years) {
    if (y.conflicts.length === 0) {
      if (curStreak === 0) curStart = y.year
      curStreak++
      if (curStreak > bestStreak) { bestStreak = curStreak; bestStart = curStart }
    } else { curStreak = 0 }
  }

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[{ label: 'War Calendar' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Article',
        headline: "America's War Calendar: 229 Years at War Out of 249",
        description: 'Visual heatmap of every year the US has been at war, 1776–2026.',
        url: 'https://www.warcosts.org/war-calendar',
        datePublished: '2026-03-30', dateModified: '2026-03-30',
        publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
      }) }} />

      {/* Hero */}
      <section className="bg-stone-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ label: 'War Calendar' }]} dark />
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
            America&apos;s War Calendar
          </h1>
          <p className="text-xl text-stone-300">
            <span className="text-red-500 font-bold">{warCount} years at war</span> out of {years.length}.
            Only {peaceYears.length} years of peace.
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <ShareButtons title="America's War Calendar — 229 Years at War" />

          {/* Stats cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            {[
              { value: `${warCount}`, label: 'Years at War', sub: `out of ${years.length}` },
              { value: `${peaceYears.length}`, label: 'Years of Peace', sub: 'Total since 1776' },
              { value: `${bestStreak} years`, label: 'Longest Peace', sub: `${bestStart}–${bestStart + bestStreak - 1}` },
              { value: `${maxConflicts}`, label: 'Most Simultaneous', sub: `in ${maxYear?.year}` },
            ].map(c => (
              <div key={c.label} className="bg-red-50 rounded-xl p-5 border border-red-200 text-center">
                <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{c.value}</p>
                <p className="text-stone-700 text-sm font-semibold mt-1">{c.label}</p>
                <p className="text-stone-400 text-xs mt-1">{c.sub}</p>
              </div>
            ))}
          </div>

          {/* Calendar Heatmap */}
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mt-8 mb-2">
            Every Year, 1776–2026
          </h2>
          <p className="text-stone-500 text-sm mb-4">Click any year to see active conflicts.</p>
          <CalendarClient data={warYears} />

          {/* Analysis */}
          <div className="prose max-w-none mt-12 text-stone-600">
            <h2 className="font-[family-name:var(--font-heading)] text-stone-900">The Pattern of Permanent War</h2>
            <p>
              The longest period of peace in American history was just <strong>{bestStreak} years</strong> — from
              {' '}{bestStart} to {bestStart + bestStreak - 1}. Before that, the previous longest stretch without
              armed conflict was barely a few years.
            </p>
            <p>
              Since World War II, the United States has not experienced a single calendar year without active
              military operations somewhere in the world. The Cold War provided the justification. The War on
              Terror extended it. Now, great power competition with China and Russia promises to continue it
              indefinitely.
            </p>
            <p>
              Peace is not the default state. War is. The calendar above makes this undeniable.
            </p>

            <blockquote className="border-l-4 border-red-800">
              &ldquo;We have guided missiles and misguided men.&rdquo;
              <br />— Martin Luther King Jr., 1967
            </blockquote>
          </div>

          {/* Related */}
          <div className="mt-12 bg-white rounded-lg p-6 border">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related</h3>
            <ul className="space-y-2">
              <li><a href="/us-wars-list" className="text-red-800 hover:underline">→ US Wars List — Every conflict detailed</a></li>
              <li><a href="/cost-per-kill" className="text-red-800 hover:underline">→ Cost Per Kill — The price of a life</a></li>
              <li><a href="/the-receipt" className="text-red-800 hover:underline">→ The $32 Trillion Receipt</a></li>
              <li><a href="/timeline" className="text-red-800 hover:underline">→ Timeline — Interactive chronological view</a></li>
            </ul>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
