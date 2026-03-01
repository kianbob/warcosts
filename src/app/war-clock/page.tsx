// @ts-nocheck
'use client'
import { useState, useEffect, useRef } from 'react'
import Footer from '@/components/Footer'
import ShareButtons from '@/components/ShareButtons'

const COST_PER_SECOND = 28095
const COST_PER_MINUTE = 1685693
const COST_PER_HOUR = 101141553
const COST_PER_DAY = 2427397260

export default function WarClockPage() {
  const [elapsed, setElapsed] = useState(0)
  const start = useRef(Date.now())

  useEffect(() => {
    document.title = 'War Clock — Real-Time US Military Spending | WarCosts'
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
            <p className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl lg:text-9xl font-bold text-red-500 tabular-nums tracking-tight">
              {formatted}
            </p>
            <p className="text-stone-500 mt-4 text-sm">{elapsed.toFixed(1)} seconds</p>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
