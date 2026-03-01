import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Jobs vs War — Military Spending Creates the Fewest Jobs | WarCosts',
  description: 'Military spending creates 5 jobs per $1 million — fewer than education (13), healthcare (9), or clean energy (8). The UMass Amherst study and analysis.',
}

export default function JobsVsWarPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Jobs vs War' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Jobs vs. War</h1>
      <p className="text-stone-500 mb-2">Military spending creates fewer jobs per dollar than any other major sector of the economy. This isn&apos;t opinion — it&apos;s economics.</p>
      <ShareButtons title="Jobs vs War — Military Spending Creates the Fewest Jobs" />

      <div className="prose text-stone-600 mt-8">
        <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          {[
            { sector: 'Education', jobs: 13, color: 'bg-green-100 text-green-800' },
            { sector: 'Healthcare', jobs: 9, color: 'bg-blue-100 text-blue-800' },
            { sector: 'Clean Energy', jobs: 8, color: 'bg-yellow-100 text-yellow-800' },
            { sector: 'Military', jobs: 5, color: 'bg-red-100 text-red-800' },
          ].map(s => (
            <div key={s.sector} className={`rounded-xl p-5 text-center ${s.color}`}>
              <p className="text-3xl font-bold font-[family-name:var(--font-heading)]">{s.jobs}</p>
              <p className="text-sm">jobs per $1M</p>
              <p className="font-medium mt-1">{s.sector}</p>
            </div>
          ))}
        </div>

        <p className="text-lg">
          For every $1 million spent on the military, <strong>5 jobs</strong> are created. The same $1 million
          in education creates <strong>13 jobs</strong>. That&apos;s a 160% difference. This data comes from
          peer-reviewed research at the University of Massachusetts Amherst.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The UMass Amherst Study</h2>
        <p>
          The foundational research comes from economists at the <strong>Political Economy Research Institute (PERI)</strong> at UMass Amherst, led by Robert Pollin and Heidi Garrett-Peltier. Their methodology is rigorous:
        </p>
        <ul>
          <li>They use Bureau of Economic Analysis input-output models to calculate direct, indirect, and induced employment effects</li>
          <li><strong>Direct jobs:</strong> People employed directly by the spending (soldiers, teachers, nurses)</li>
          <li><strong>Indirect jobs:</strong> Supply chain employment (parts manufacturers, food suppliers)</li>
          <li><strong>Induced jobs:</strong> Jobs created by workers spending their wages in the local economy</li>
        </ul>
        <p>The finding is consistent across multiple studies: military spending is the <strong>least efficient job creator</strong> of any major government spending category. The reason is structural — it&apos;s not about waste or fraud, it&apos;s about the nature of the spending.</p>

        <h2 className="font-[family-name:var(--font-heading)]">The Opportunity Cost</h2>
        <p>Moving just $100 billion from military to education would:</p>
        <ul>
          <li>Lose 500,000 military-related jobs</li>
          <li>Create 1,300,000 education jobs</li>
          <li>Net gain: <strong>800,000 jobs</strong></li>
        </ul>

        <div className="not-prose bg-stone-50 rounded-xl p-6 my-6 border">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">What Could $100B Buy?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {[
              { label: 'Shift to Education', result: '1.3M teachers hired, class sizes halved in most states' },
              { label: 'Shift to Healthcare', result: '900K healthcare workers, expanding rural access nationwide' },
              { label: 'Shift to Clean Energy', result: '800K clean energy jobs, accelerating grid transition' },
              { label: 'Shift to Infrastructure', result: '700K construction jobs, repairing bridges and roads' },
            ].map(e => (
              <div key={e.label} className="bg-white rounded-lg p-4 border">
                <p className="font-bold text-stone-800">{e.label}</p>
                <p className="text-muted text-xs mt-1">{e.result}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Why Military Spending Creates Fewer Jobs</h2>
        <p>
          Military spending is <strong>capital-intensive, not labor-intensive</strong>. Building an $80M fighter jet employs
          far fewer people than $80M in schools, hospitals, or renewable energy infrastructure.
          Much of the money goes to a handful of massive defense contractors — Lockheed Martin, Raytheon,
          Boeing, General Dynamics, Northrop Grumman — where profit margins, executive compensation, and R&amp;D spending
          absorb dollars that would otherwise employ workers.
        </p>
        <p>
          A single F-35 costs $80 million. That same money could pay the salaries of <strong>1,270 public school teachers for a year</strong>.
          An aircraft carrier costs $13 billion — enough to employ <strong>206,000 teachers</strong>.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Historical Precedent: Post-WWII Conversion</h2>
        <p>
          The concern that cutting military spending causes economic devastation is contradicted by history.
          After World War II, the US military shrank from <strong>12 million to 1.5 million</strong> in two years.
          Military spending dropped from 41.9% of GDP to under 5%. The economy boomed.
        </p>
        <p>
          How? The GI Bill sent 8 million veterans to college. The government invested in housing, infrastructure,
          and education. Factories that built tanks started building cars, refrigerators, and televisions.
          The result was the greatest period of broad-based prosperity in American history.
        </p>
        <p>
          Conversion works. It&apos;s been done before. The barrier isn&apos;t economic — it&apos;s political. Defense contractors
          have structured their operations to make cuts politically impossible.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Political Economy</h2>
        <p>
          Defense contractors strategically spread subcontracts across as many congressional districts
          as possible. The F-35 program alone has suppliers in <strong>45 states and 375 congressional districts</strong>.
          This makes cutting military spending politically impossible — every member of Congress has constituents
          who depend on defense dollars.
        </p>
        <p>
          This is by design. Lockheed Martin doesn&apos;t put all its factories in one state — it spreads them across the country
          so that every senator and representative has a reason to vote for more F-35 funding. It&apos;s not a conspiracy;
          it&apos;s a business strategy. And it works perfectly.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;War is a racket. It always has been. A few profit — and the many pay.&rdquo;
          <br />— Major General Smedley Butler, two-time Medal of Honor recipient
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Transition Plan</h2>
        <p>Economic conversion from military to civilian spending requires:</p>
        <ul>
          <li><strong>Worker transition programs:</strong> Retraining for defense industry workers, similar to what the GI Bill did after WWII</li>
          <li><strong>Community investment:</strong> Economic development funds for defense-dependent communities</li>
          <li><strong>Gradual phase-down:</strong> Shift spending over 5-10 years, not overnight</li>
          <li><strong>Targeted reinvestment:</strong> Direct savings into education, healthcare, infrastructure, and clean energy in the same regions</li>
        </ul>
        <p>The net economic effect is positive. More Americans employed, in more productive work, creating more broadly shared prosperity. The only losers are defense contractor shareholders and executives.</p>

        <p><Link href="/tools/jobs-calculator">→ Try the Jobs Calculator</Link></p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The Pentagon is the world&apos;s <strong>largest employer</strong> with 3.2 million employees — but it creates fewer jobs per dollar than almost any alternative.</li>
          <li>• Defense contractor CEO compensation averages <strong>$20-25M/yr</strong> — roughly 300× what a deployed soldier earns.</li>
          <li>• After WWII, military employment dropped by <strong>88%</strong> and the economy boomed for 25 years.</li>
          <li>• The F-35 program spreads suppliers across <strong>375 of 435 congressional districts</strong> — making it politically impossible to cut.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/tools/jobs-calculator" className="text-red-800 hover:underline">→ Jobs Calculator — model the shift yourself</Link></li>
          <li><Link href="/opportunity-cost" className="text-red-800 hover:underline">→ What else could $8 trillion buy?</Link></li>
          <li><Link href="/contractors" className="text-red-800 hover:underline">→ Defense Contractors — who profits</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
