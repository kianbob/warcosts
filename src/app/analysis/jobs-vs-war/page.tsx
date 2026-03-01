import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jobs vs War — Military Spending Creates the Fewest Jobs | WarCosts',
  description: 'Military spending creates 5 jobs per $1 million — fewer than education (13), healthcare (9), or clean energy (8). Analysis with data.',
}

export default function JobsVsWarPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Jobs vs War' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Jobs vs. War</h1>
      <p className="text-stone-500 mb-2">Military spending creates fewer jobs than any other major sector of the economy.</p>
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
          in education creates <strong>13 jobs</strong>. That&apos;s a 160% difference.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Opportunity Cost</h2>
        <p>
          Moving just $100 billion from military to education would:
        </p>
        <ul>
          <li>Lose 500,000 military-related jobs</li>
          <li>Create 1,300,000 education jobs</li>
          <li>Net gain: <strong>800,000 jobs</strong></li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Why Military Spending Creates Fewer Jobs</h2>
        <p>
          Military spending is capital-intensive, not labor-intensive. Building a $80M fighter jet employs
          far fewer people than $80M in schools, hospitals, or renewable energy infrastructure.
          Much of the money goes to a handful of massive defense contractors — Lockheed Martin, Raytheon,
          Boeing, General Dynamics, Northrop Grumman — where profit margins, not employment, are the priority.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Political Economy</h2>
        <p>
          Defense contractors strategically spread subcontracts across as many congressional districts
          as possible. The F-35 program alone has suppliers in <strong>45 states</strong>. This makes
          cutting military spending politically impossible — every member of Congress has constituents
          who depend on defense dollars.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;War is a racket. It always has been. A few profit — and the many pay.&rdquo;
          <br />— Major General Smedley Butler
        </blockquote>

        <p><Link href="/tools/jobs-calculator">→ Try the Jobs Calculator</Link></p>
      </div>

      <BackToTop />
    </div>
  )
}
