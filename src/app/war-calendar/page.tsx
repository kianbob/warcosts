// @ts-nocheck
import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import FaqJsonLd from '@/components/FaqJsonLd'
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

          {/* Key Observations */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-amber-900 mb-3">Key Observations</h2>
            <ul className="space-y-2 text-sm text-amber-800">
              <li>🟥 <strong>No decade without war:</strong> Every decade since the 1940s has seen active US military operations. Most decades had multiple simultaneous conflicts.</li>
              <li>⚔️ <strong>Undeclared wars dominate:</strong> Of 469+ military operations since 1798, only 11 had formal congressional declarations of war. The vast majority were unilateral executive actions.</li>
              <li>🌍 <strong>Global reach accelerated:</strong> Before 1898, US wars were mostly on the North American continent. After becoming a world power, military operations spread to every continent.</li>
              <li>📈 <strong>Frequency is increasing:</strong> The US conducted more military operations in the post-Cold War era (1992–2025) than in any comparable 33-year period in history.</li>
              <li>⏰ <strong>Duration is increasing:</strong> Early wars lasted 2–4 years. The War on Terror has lasted 25 years. Afghanistan alone lasted 20 years — the longest war in American history.</li>
            </ul>
          </div>

          {/* Era Breakdown */}
          <div className="mt-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">War by Era</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { era: 'Founding Era (1776–1815)', wars: 'Revolutionary War, Quasi-War, Barbary Wars, War of 1812', years: '~25 of 39 years at war' },
                { era: 'Expansion (1816–1898)', wars: 'Indian Wars, Mexican-American War, Civil War, Spanish-American War', years: '~50 of 82 years at war' },
                { era: 'World Power (1899–1945)', wars: 'Philippine War, WWI, WWII, plus interventions in Latin America', years: '~30 of 46 years at war' },
                { era: 'Cold War (1946–1991)', wars: 'Korea, Vietnam, Grenada, Panama, plus dozens of covert operations', years: '~45 of 45 years at war' },
                { era: 'Sole Superpower (1992–2025)', wars: 'Gulf War, Bosnia, Kosovo, Afghanistan, Iraq, Libya, Syria, Iran', years: '~33 of 33 years at war' },
              ].map((e, i) => (
                <div key={i} className="bg-white rounded-lg border p-5">
                  <h3 className="font-bold text-stone-900 mb-1">{e.era}</h3>
                  <p className="text-stone-600 text-sm mb-1">{e.wars}</p>
                  <p className="text-red-700 text-sm font-semibold">{e.years}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Peace Years Analysis */}
          <div className="mt-12 bg-stone-900 text-white rounded-xl p-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Rarity of Peace</h2>
            <div className="space-y-3 text-stone-300">
              <p>
                The {peaceYears.length} years of peace are not evenly distributed. Most fell in the early republic,
                when the nation was too weak to project power abroad. Since the Spanish-American War of 1898 —
                when the US became a global military power — years of peace have been virtually nonexistent.
              </p>
              <p>
                Since World War II, the United States has not experienced a single calendar year without active
                military operations. The Cold War provided the justification. The War on Terror extended it.
                Great power competition with China and Russia promises to continue it indefinitely.
              </p>
              <p>
                This is not normal. No other democracy in history has maintained such a continuous state of
                military engagement. Britain, at the height of its empire, had more years of peace than the
                United States has managed in its entire existence.
              </p>
            </div>
          </div>

          {/* What the Founders Said */}
          <div className="mt-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">What the Founders Warned</h2>
            <div className="space-y-4">
              {[
                { quote: 'Of all the enemies to public liberty, war is, perhaps, the most to be dreaded, because it comprises and develops the germ of every other.', author: 'James Madison, 1795' },
                { quote: 'If Tyranny and Oppression come to this land, it will be in the guise of fighting a foreign enemy.', author: 'James Madison' },
                { quote: 'Great armies and great navies are not maintained for the purposes of peace, they are forever producing occasions of war.', author: 'Thomas Jefferson' },
              ].map((q, i) => (
                <blockquote key={i} className="bg-stone-50 border-l-4 border-red-800 p-4 rounded-r-lg">
                  <p className="text-stone-700 italic">&ldquo;{q.quote}&rdquo;</p>
                  <p className="text-stone-500 text-sm mt-1">— {q.author}</p>
                </blockquote>
              ))}
            </div>
          </div>

          {/* Related */}
          <div className="mt-12 bg-white rounded-lg p-6 border">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related</h3>
            <ul className="space-y-2">
              <li><Link href="/us-wars-list" className="text-red-800 hover:underline">→ US Wars List — Every conflict detailed</Link></li>
              <li><Link href="/cost-per-kill" className="text-red-800 hover:underline">→ Cost Per Kill — The price of a life</Link></li>
              <li><Link href="/the-receipt" className="text-red-800 hover:underline">→ The $32 Trillion Receipt</Link></li>
              <li><Link href="/timeline" className="text-red-800 hover:underline">→ Timeline — Interactive chronological view</Link></li>
              <li><Link href="/decades" className="text-red-800 hover:underline">→ Spending by Decade — 1940s to 2020s</Link></li>
              <li><Link href="/analysis/if-we-stopped-today" className="text-red-800 hover:underline">→ If We Stopped Today — What we&apos;d still owe</Link></li>
            </ul>
          </div>
        </div>
      </section>

          {/* The Constitutional Question */}
          <div className="mt-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">The Constitutional Question</h2>
            <div className="bg-white rounded-lg border p-6 space-y-3 text-stone-600 text-sm">
              <p>
                Article I, Section 8 of the Constitution grants Congress — not the President — the power to
                declare war. The founders, having just fought a revolution against an executive who used military
                force without legislative consent, deliberately gave this power to the people&apos;s representatives.
              </p>
              <p>
                Yet of the 469+ military operations documented in the calendar above, only <strong>11</strong> had
                formal declarations of war from Congress. The remaining 458+ were conducted under executive authority,
                treaty obligations, or broad authorizations like the 2001 AUMF.
              </p>
              <p>
                The 2001 AUMF — 60 words passed three days after September 11 — has been used to justify military
                operations in 22+ countries against groups (like ISIS) that didn&apos;t exist when it was written.
                It has been active for 25 years with no sunset clause. James Madison would weep.
              </p>
              <p className="font-bold text-red-800">
                The war calendar is not just a record of conflict. It&apos;s a record of constitutional failure —
                the slow erosion of the people&apos;s control over the most consequential power any government possesses.
              </p>
            </div>
          </div>

          {/* Methodology Note */}
          <div className="mt-8 text-stone-500 text-xs border-t pt-4">
            <p>
              <strong>Methodology:</strong> A year is counted as &ldquo;at war&rdquo; if the US had active military
              operations (declared or undeclared) during any part of that calendar year. Sources include
              Congressional Research Service reports (R42738, RL32492), Department of Defense historical records,
              and academic conflict databases. Minor border skirmishes and routine training exercises are excluded.
              Covert operations are included where documented by congressional investigations or declassified records.
            </p>
          </div>

          {/* Compare Globally */}
          <div className="mt-8 bg-stone-50 border rounded-lg p-6">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">🌍 How Does This Compare?</h2>
            <div className="space-y-2 text-stone-600 text-sm">
              <p><strong>United Kingdom:</strong> At the height of the British Empire (1700–1950), Britain was at war for roughly 55% of the time. The US exceeds this at 92%.</p>
              <p><strong>France:</strong> Often cited as historically warlike, France was at war for approximately 49% of the years between 1700–1945.</p>
              <p><strong>Switzerland:</strong> Neutral since 1815, Switzerland has had 0 years of external war in over 200 years.</p>
              <p><strong>Costa Rica:</strong> Abolished its military in 1948. Has had 0 wars since.</p>
              <p className="font-bold text-stone-800">No major democracy in modern history has maintained as continuous a state of military engagement as the United States.</p>
            </div>
          </div>

      <FaqJsonLd faqs={[
        { q: 'How many years has the US been at war?', a: `The United States has been at war for ${warCount} of its ${years.length} years of existence since 1776. Only ${peaceYears.length} years have been spent at peace, making war the default state of American existence.` },
        { q: 'What was the longest period of peace in US history?', a: `The longest period of peace in American history was ${bestStreak} years, from ${bestStart} to ${bestStart + bestStreak - 1}. Since World War II, the US has not experienced a single calendar year without active military operations.` },
        { q: 'How many simultaneous conflicts has the US fought at once?', a: `The most simultaneous active conflicts in a single year was ${maxConflicts}, occurring in ${maxYear?.year}. The post-9/11 era saw the US conducting military operations in dozens of countries simultaneously.` },
        { q: 'Has the US ever had a decade of peace?', a: 'No. The United States has never experienced a full decade without active military operations. The longest periods of relative peace occurred before the US became a global military power in the late 1800s.' },
      ]} />

          {/* What You Can Do */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-red-900 mb-3">What This Calendar Demands</h3>
            <p className="text-stone-700 text-sm mb-3">
              229 years at war is not inevitable. It is a choice — made by elected officials, sustained by
              public apathy, and fueled by an industry that profits from conflict. The calendar can change,
              but only if citizens demand it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/tools/budget-simulator" className="px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-semibold hover:bg-red-800 transition">
                Redesign the Budget →
              </Link>
              <Link href="/share" className="px-4 py-2 bg-stone-700 text-white rounded-lg text-sm font-semibold hover:bg-stone-800 transition">
                Share This Data →
              </Link>
            </div>
          </div>

          {/* Data & Sources */}
          <div className="mt-8 border-t pt-4 text-stone-500 text-xs">
            <p>
              <strong>Sources:</strong> Congressional Research Service (R42738), Department of Defense historical
              records, academic conflict databases. A year is counted as &ldquo;at war&rdquo; if the US had active
              military operations during any part of that calendar year. Minor border skirmishes excluded.
              Covert operations included where documented. Data covers 1776&ndash;2026.
            </p>
          </div>

      <BackToTop />
    </div>
  )
}
