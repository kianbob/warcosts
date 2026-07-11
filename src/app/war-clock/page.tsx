// @ts-nocheck
'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'

const COST_PER_SECOND = 28095
const COST_PER_MINUTE = 1685693
const COST_PER_HOUR = 101141553
const COST_PER_DAY = 2427397260

export default function WarClockPage() {
  const [elapsed, setElapsed] = useState(0)
  const start = useRef(Date.now())

  useEffect(() => {
    document.title = 'War Clock — Real-Time US Military Spending'
    if (!document.querySelector('meta[name="description"]')) { const m = document.createElement('meta'); m.name = 'description'; m.content = 'Watch US military spending tick up in real-time. $28,095 per second. $1.7M per minute. $101M per hour. $2.4B per day.'; document.head.appendChild(m); }
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Watch US military spending tick up in real time. $28,095 every second. $101 million every hour. $2.4 billion every day.')
    const id = setInterval(() => {
      setElapsed((Date.now() - start.current) / 1000)
    }, 50)
    return () => clearInterval(id)
  }, [])

  const spent = elapsed * COST_PER_SECOND
  const formatted = spent.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })

  return (
    <>
      <div className="min-h-screen bg-stone-950 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <p className="text-stone-500 text-sm uppercase tracking-widest mb-4">US Military Spending — Right Now</p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-bold text-red-600 mb-2">
            War Clock
          </h1>
          <ShareButtons title="War Clock — Real-Time US Military Spending" />

          <div className="my-16">
            <p className="text-stone-400 text-lg mb-4">Since you opened this page:</p>
            <p className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl lg:text-9xl font-bold text-red-500 tabular-nums tracking-normal">
              {formatted}
            </p>
            <p className="text-stone-500 mt-4 text-sm">{elapsed.toFixed(1)} seconds</p>
            <button
              onClick={() => {
                const text = `The US military has spent ${formatted} in just ${elapsed.toFixed(0)} seconds. That's $28,095 every second. See the War Clock: https://www.warcosts.org/war-clock`
                navigator.clipboard.writeText(text).then(() => {
                  const btn = document.getElementById('share-btn')
                  if (btn) { btn.textContent = '✓ Copied!'; setTimeout(() => { btn.textContent = '📋 Share This Stat' }, 2000) }
                })
              }}
              id="share-btn"
              className="mt-4 px-6 py-2 bg-red-700 hover:bg-red-800 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              📋 Share This Stat
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16">
            {[
              { label: 'Per Second', value: `$${(COST_PER_SECOND).toLocaleString()}` },
              { label: 'Per Minute', value: `$${(COST_PER_MINUTE).toLocaleString()}` },
              { label: 'Per Hour', value: `$${(COST_PER_HOUR).toLocaleString()}` },
              { label: 'Per Day', value: `$${(COST_PER_DAY).toLocaleString()}` },
            ].map(s => (
              <div key={s.label} className="bg-stone-900 border border-stone-800 rounded-xl p-6">
                <p className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-red-500">{s.value}</p>
                <p className="text-stone-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-left space-y-6 text-stone-300 leading-relaxed">
            <p>
              The United States spends <strong className="text-white">$886 billion per year</strong> on its military —
              more than the next 10 countries combined. That&apos;s <strong className="text-white">$2.4 billion every single day</strong>,
              whether we&apos;re at war or not.
            </p>
            <p>
              Since you started reading this paragraph, roughly <strong className="text-red-400">$140,000</strong> has been spent.
              In the time it takes to brew a cup of coffee, another <strong className="text-red-400">$8.4 million</strong> is gone.
            </p>

            <blockquote className="border-l-4 border-red-800 pl-4 italic text-stone-400">
              &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense,
              a theft from those who hunger and are not fed, those who are cold and are not clothed.&rdquo;
              <br /><span className="not-italic text-stone-500">— Dwight D. Eisenhower, 1953</span>
            </blockquote>

            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white pt-4">What Else Could This Buy?</h2>
            <ul className="space-y-2">
              <li>💊 <strong>$28,095</strong> (1 second) = One year of health insurance for a family</li>
              <li>🎓 <strong>$1.7M</strong> (1 minute) = 42 full college scholarships</li>
              <li>🏥 <strong>$101M</strong> (1 hour) = A new hospital</li>
              <li>🏘️ <strong>$2.4B</strong> (1 day) = 9,600 affordable homes</li>
            </ul>

            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white pt-4">The Numbers Don&apos;t Lie</h2>
            <p>
              The total cost of all US wars since 1776: <strong className="text-red-400">$11.3 trillion</strong> (inflation-adjusted).
              Over 1 million American service members killed. Over 5 million civilian casualties.
              And 469 military interventions — most of them undeclared by Congress.
            </p>
            <p className="text-stone-500 text-sm">
              Source: Congressional Research Service, Watson Institute at Brown University, Department of Defense.
            </p>

            <div className="mt-8 p-6 bg-stone-900 border border-stone-800 rounded-xl text-center">
              <p className="text-stone-300 mb-3">Want to explore what this money could buy instead?</p>
              <a href="/opportunity-cost" className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                What Else Could This Buy? →
              </a>
            </div>

            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white pt-8">Your Personal War Cost</h2>
            <p>
              If you&apos;re a median-income American earning $59,000 per year, approximately
              <strong className="text-red-400"> $3,700</strong> of your federal taxes go directly to the military.
              Over your working lifetime, that&apos;s roughly <strong className="text-red-400">$148,000</strong> in
              military taxes — enough for a down payment on a house.
            </p>
            <p>
              But that only counts the DoD budget. Include VA, intelligence, nuclear weapons, and war debt interest,
              and your true military tax burden is closer to <strong className="text-red-400">$6,200 per year</strong> —
              or <strong className="text-red-400">$248,000</strong> over a career.
            </p>
            <p className="text-stone-500 text-sm">
              Want to see your exact number? Try our <a href="/tools/tax-receipt" className="text-red-400 hover:underline">Tax Receipt Calculator</a>.
            </p>

            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white pt-8">Where Does $886 Billion Go?</h2>
            <p>
              The military budget breaks down into several major categories. <strong className="text-white">Operations & Maintenance</strong> takes
              the largest share (~$290B), followed by <strong className="text-white">Military Personnel</strong> (~$175B),
              <strong className="text-white"> Procurement</strong> (~$170B) for weapons and equipment,
              and <strong className="text-white">Research & Development</strong> (~$145B).
            </p>
            <p>
              But the official DoD budget only tells part of the story. Add in <strong className="text-red-400">Veterans Affairs ($325B)</strong>,
              <strong className="text-red-400"> intelligence agencies ($90B+)</strong>,
              <strong className="text-red-400"> Department of Energy nuclear weapons ($50B)</strong>,
              <strong className="text-red-400"> Homeland Security ($62B)</strong>,
              and <strong className="text-red-400"> interest on war debt ($100B+)</strong>,
              and the true cost of national security exceeds <strong className="text-white">$1.4 trillion per year</strong>.
            </p>

            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white pt-8">How We Compare</h2>
            <div className="space-y-3">
              {[
                { country: 'United States', amount: '$886B', pct: 100 },
                { country: 'China', amount: '$292B', pct: 33 },
                { country: 'Russia', amount: '$86B', pct: 10 },
                { country: 'India', amount: '$83B', pct: 9 },
                { country: 'Saudi Arabia', amount: '$76B', pct: 9 },
                { country: 'UK', amount: '$75B', pct: 8 },
                { country: 'Germany', amount: '$68B', pct: 8 },
                { country: 'France', amount: '$61B', pct: 7 },
              ].map(c => (
                <div key={c.country}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-stone-300">{c.country}</span>
                    <span className="text-stone-400">{c.amount}</span>
                  </div>
                  <div className="w-full bg-stone-800 rounded-full h-2">
                    <div className={`h-2 rounded-full ${c.country === 'United States' ? 'bg-red-600' : 'bg-stone-600'}`} style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
              ))}
              <p className="text-stone-500 text-xs mt-2">Source: SIPRI Military Expenditure Database, 2024</p>
            </div>

            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white pt-8">Historical Context</h2>
            <p>
              US military spending has never returned to pre-WWII levels. Each major conflict ratchets spending up,
              and the &ldquo;peace dividend&rdquo; never fully materializes. The Cold War set a new baseline.
              The War on Terror raised it again. Now, &ldquo;great power competition&rdquo; with China ensures
              budgets continue climbing past <strong className="text-red-400">$900 billion</strong>.
            </p>
            <p>
              In 1940, the US spent roughly $20 billion (inflation-adjusted) on defense. Today it spends 44x more —
              and has been at war for <strong className="text-white">229 of its 249 years</strong>.
              The question isn&apos;t whether the country can afford this spending. It&apos;s whether it can
              afford not to ask what it&apos;s buying.
            </p>

            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white pt-8">What the Clock Doesn&apos;t Show</h2>
            <p>
              This clock only counts the official Department of Defense budget. The true cost of national security
              is much higher. Here&apos;s what&apos;s <em>not</em> in this clock:
            </p>
            <ul className="space-y-2">
              <li>🏥 <strong>$325 billion</strong> — Veterans Affairs (caring for those war created)</li>
              <li>🕵️ <strong>$90 billion+</strong> — Intelligence agencies (CIA, NSA, NRO, etc.)</li>
              <li>☢️ <strong>$50 billion</strong> — Nuclear weapons (DoE weapons programs)</li>
              <li>🏠 <strong>$62 billion</strong> — Homeland Security (a post-9/11 creation)</li>
              <li>💳 <strong>$100 billion+</strong> — Interest on war debt</li>
            </ul>
            <p>
              Add these in and the true rate is closer to <strong className="text-red-400">$44,000 per second</strong> —
              or <strong className="text-red-400">$3.8 billion per day</strong>.
            </p>

            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white pt-8">The Human Cost Behind the Dollars</h2>
            <p>
              Every second that ticks by represents more than money. It represents the ongoing cost of
              maintaining 750+ overseas bases, deploying forces in 80+ countries, and fighting active conflicts.
              It represents the <strong className="text-red-400">17 veterans</strong> who die by suicide every day,
              the <strong className="text-red-400">18 million veterans</strong> who need VA care, and the
              families who bear the invisible wounds of service.
            </p>
            <p>
              The war clock doesn&apos;t stop at midnight. It doesn&apos;t stop on holidays. It doesn&apos;t stop
              during government shutdowns. The spending is automatic, bipartisan, and rarely questioned.
              That&apos;s exactly why we built this page — to make the invisible visible.
            </p>

            <blockquote className="border-l-4 border-red-800 pl-4 italic text-stone-400">
              &ldquo;The problem in defense is how far you can go without destroying from within
              what you are trying to defend from without.&rdquo;
              <br /><span className="not-italic text-stone-500">— Dwight D. Eisenhower, 1953</span>
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/us-military-spending" className="text-red-400 hover:underline">→ Full spending breakdown</Link>
              <Link href="/opportunity-cost" className="text-red-400 hover:underline">→ What else could this buy?</Link>
              <Link href="/tools/tax-receipt" className="text-red-400 hover:underline">→ Your personal tax receipt</Link>
              <Link href="/iran-war-2026" className="text-red-400 hover:underline">→ Iran War 2026 costs</Link>
              <Link href="/decades" className="text-red-400 hover:underline">→ Spending by decade</Link>
              <Link href="/analysis/if-we-stopped-today" className="text-red-400 hover:underline">→ What if we stopped today?</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom section - dark background context */}
      <div className="bg-stone-900 px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-stone-800 border border-stone-700 rounded-xl p-6">
              <p className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">$886B</p>
              <p className="text-stone-400 text-sm mt-2">Annual DoD Budget</p>
              <p className="text-stone-500 text-xs mt-1">Official Pentagon base budget for FY2025</p>
            </div>
            <div className="bg-stone-800 border border-stone-700 rounded-xl p-6">
              <p className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">$1.4T+</p>
              <p className="text-stone-400 text-sm mt-2">True National Security Cost</p>
              <p className="text-stone-500 text-xs mt-1">Including VA, intel, nukes, DHS, war debt interest</p>
            </div>
            <div className="bg-stone-800 border border-stone-700 rounded-xl p-6">
              <p className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">39%</p>
              <p className="text-stone-400 text-sm mt-2">Share of Global Military Spending</p>
              <p className="text-stone-500 text-xs mt-1">More than the next 10 nations combined</p>
            </div>
          </div>
          <p className="text-stone-500 text-sm text-center mt-6">
            Sources: Department of Defense FY2025 Budget, SIPRI Military Expenditure Database 2024,
            National Priorities Project, Office of Management and Budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a href="/us-military-spending" className="text-red-400 hover:underline text-sm">→ Full Spending Breakdown</a>
            <a href="/tools/tax-receipt" className="text-red-400 hover:underline text-sm">→ Your Tax Receipt</a>
            <a href="/opportunity-cost" className="text-red-400 hover:underline text-sm">→ What Could This Buy?</a>
            <a href="/decades" className="text-red-400 hover:underline text-sm">→ Spending by Decade</a>
            <a href="/share" className="text-red-400 hover:underline text-sm">→ Share These Stats</a>
            <a href="/cost-per-kill" className="text-red-400 hover:underline text-sm">→ Cost Per Kill</a>
            <a href="/iran-war-2026" className="text-red-400 hover:underline text-sm">→ Iran War 2026</a>
            <a href="/war-calendar" className="text-red-400 hover:underline text-sm">→ 229 Years at War</a>
            <a href="/analysis/if-we-stopped-today" className="text-red-400 hover:underline text-sm">→ If We Stopped Today</a>
          </div>
        </div>
      </div>
      <FaqJsonLd faqs={[
        { q: 'How much does the US military spend per second?', a: 'The US military spends approximately $28,095 per second, based on the $886 billion annual defense budget. That works out to $1.7 million per minute, $101 million per hour, and $2.4 billion per day.' },
        { q: 'How much does the US spend on military compared to other countries?', a: 'The US spends more on its military than the next 10 countries combined. The $886 billion budget is roughly 3x China ($292B), 10x Russia ($86B), and accounts for about 39% of all global military spending.' },
        { q: 'What is the true cost of US national security?', a: 'The official DoD budget of $886 billion is only part of the picture. Adding VA ($325B), intelligence ($90B+), nuclear weapons ($50B), Homeland Security ($62B), and interest on war debt ($100B+), the true national security budget exceeds $1.4 trillion per year.' },
        { q: 'Has US military spending ever decreased?', a: 'Military spending briefly dipped after major conflicts (post-WWII, post-Vietnam, post-Cold War) but never returned to pre-war levels. Each conflict permanently ratchets spending upward. Current spending exceeds Cold War peaks in inflation-adjusted terms.' },
        { q: 'What does the War Clock count?', a: 'The War Clock counts the official Department of Defense base budget ($886 billion/year divided by seconds in a year = $28,095/second). It does not include Veterans Affairs, intelligence agencies, nuclear weapons, Homeland Security, or interest on war debt, which would push the rate to approximately $44,000/second.' },
      ]} />
      {/* Methodology Note */}
      <div className="bg-stone-950 px-4 py-8">
        <div className="max-w-2xl mx-auto text-center text-stone-500 text-xs">
          <p>
            <strong>Methodology:</strong> The War Clock divides the FY2025 Department of Defense base budget
            authority ($886,000,000,000) by 31,536,000 seconds per year = $28,095.24 per second. This is a
            simplified representation — actual spending varies by day and is concentrated during business hours.
            The per-second rate is constant for illustrative purposes. Source: Department of Defense FY2025
            Budget Request, Office of Management and Budget.
          </p>
          <p className="mt-2">
            The &ldquo;true national security cost&rdquo; figure includes: DoD ($886B) + VA ($325B) + Intelligence ($90B) +
            DOE Nuclear ($50B) + DHS ($62B) + Interest on war debt ($100B+) + State Dept military programs ($18B) = ~$1.4T+.
            Source: National Priorities Project, War Resisters League, OMB Historical Tables.
          </p>
        </div>
      </div>
    </>
  )
}
