import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import JobsCalcClient from './JobsCalcClient'

export const metadata: Metadata = {
  title: 'Jobs Calculator — Military vs Education & Healthcare Spending',
  description: 'Military spending creates the fewest jobs per dollar of any major sector. Move money from military to education, healthcare, or clean energy and see the net job gain. Based on UMass PERI research.',
  keywords: ['military spending jobs', 'defense spending jobs', 'military vs education spending', 'jobs per billion military', 'defense spending economic impact'],
}

const jobsPerBillion = [
  { sector: 'Education', jobs: 13000, color: '#22c55e', note: 'Teachers, administrators, support staff. Local spending stays in communities.' },
  { sector: 'Healthcare', jobs: 9000, color: '#3b82f6', note: 'Doctors, nurses, technicians, home health aides. Growing demand.' },
  { sector: 'Clean Energy', jobs: 8000, color: '#eab308', note: 'Solar installers, wind technicians, grid workers. Fastest-growing sector.' },
  { sector: 'Infrastructure', jobs: 7000, color: '#f97316', note: 'Construction workers, engineers, maintenance. Builds lasting assets.' },
  { sector: 'Military', jobs: 5000, color: '#991b1b', note: 'Capital-intensive weapons manufacturing. Money goes to equipment, not people.' },
]

export default function JobsCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }, { label: 'Jobs Calculator' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Jobs Calculator</h1>
      <p className="text-stone-500 mb-2 max-w-2xl text-lg">
        Military spending creates the <strong>fewest jobs per dollar</strong> of any major sector of government
        spending. Use the slider below to see what happens when you redirect military dollars to education,
        healthcare, clean energy, or infrastructure.
      </p>
      <ShareButtons title="Jobs Calculator — Military vs Education Spending" />

      <JobsCalcClient />

      {/* Research basis */}
      <div className="mt-12 prose max-w-2xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Research: UMass PERI Study</h2>
        <p>
          This calculator is based on research by the <strong>Political Economy Research Institute (PERI)</strong> at
          the University of Massachusetts Amherst, which has published multiple studies on the employment effects
          of military vs. civilian government spending. Their methodology:
        </p>
        <ul>
          <li>Uses Bureau of Labor Statistics input-output models to calculate direct, indirect, and induced employment effects</li>
          <li>Measures jobs created per $1 billion in spending across sectors</li>
          <li>Accounts for supply chain effects (indirect jobs) and consumer spending effects (induced jobs)</li>
          <li>Has been peer-reviewed and cited by CBO, GAO, and congressional testimony</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Why Military Spending Creates Fewer Jobs</h2>
        <p>
          Military spending is <strong>capital-intensive</strong>, not labor-intensive. Most military dollars go to
          expensive equipment — fighter jets, missiles, ships, satellites — that require relatively few workers
          to produce compared to their cost. A single F-35 costs $80 million. A single aircraft carrier costs
          $13 billion. The money goes to machines, not people.
        </p>
        <p>
          By contrast, education spending is almost entirely labor-intensive: teachers, counselors, administrators.
          Healthcare spending employs nurses, doctors, aides. Infrastructure spending employs construction workers.
          These sectors put more people to work per dollar because they are <strong>people-powered</strong>, not
          machine-powered.
        </p>
        <p>
          The difference is stark: redirecting just <strong>$100 billion</strong> from military to education would
          create a net gain of approximately <strong>800,000 jobs</strong>. That&apos;s 800,000 more Americans
          employed — teachers, nurses, engineers — instead of more missiles sitting in warehouses.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Jobs Per $1 Billion by Sector</h2>
      </div>

      <div className="space-y-4 my-8 max-w-2xl">
        {jobsPerBillion.map(j => (
          <div key={j.sector}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">{j.sector}</span>
              <span className="font-bold" style={{ color: j.color }}>{j.jobs.toLocaleString()} jobs / $1B</span>
            </div>
            <div className="h-4 bg-stone-200 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${(j.jobs / 13000) * 100}%`, backgroundColor: j.color }} />
            </div>
            <p className="text-stone-500 text-xs mt-1">{j.note}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-2xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Political Economy of Defense Jobs</h2>
        <p>
          Defense contractors deliberately distribute work across as many congressional districts as possible.
          The F-35 provides jobs in <strong>45 states</strong>. This makes the program politically untouchable —
          even though it has 800+ known deficiencies and costs $36,000/hour to fly. The jobs argument is the
          defense industry&apos;s most powerful weapon — not against foreign enemies, but against budget cuts.
        </p>
        <p>
          But the jobs argument is misleading. Those same dollars, spent on education or infrastructure, would
          create <strong>60–160% more jobs</strong>. The question isn&apos;t whether military spending creates
          jobs — it does. The question is whether those dollars could create <em>more</em> jobs elsewhere. The
          answer, per PERI research, is unambiguously yes.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What the Numbers Mean</h2>
        <p>
          Consider: the entire annual defense budget of $886 billion creates approximately <strong>4.4 million
          jobs</strong> in the defense sector. If that same $886 billion were spent on education, it would
          create approximately <strong>11.5 million jobs</strong> — a net gain of <strong>7.1 million
          jobs</strong>. Of course, no one is proposing eliminating the entire defense budget. But even modest
          reallocation — say, $50 billion (5.6% of the DOD budget) — would create 400,000+ net new jobs.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The cost of a single F-35 fighter jet ($80M) could fund <strong>1,600 teacher salaries</strong> for a year.
            The F-35 program&apos;s total lifetime cost ($1.7 trillion) could fund every public school teacher
            in America for <strong>over 20 years</strong>.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-stone-50 rounded-lg p-6 border max-w-2xl">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related</h3>
        <ul className="space-y-2">
          <li><Link href="/tools/tax-receipt" className="text-red-800 hover:underline">→ Your Military Tax Receipt</Link></li>
          <li><Link href="/tools/cost-calculator" className="text-red-800 hover:underline">→ Your Personal War Cost</Link></li>
          <li><Link href="/us-military-spending" className="text-red-800 hover:underline">→ US Military Spending — $886 Billion</Link></li>
          <li><Link href="/opportunity-cost" className="text-red-800 hover:underline">→ Opportunity Cost — What war money could buy</Link></li>
          <li><Link href="/analysis/jobs-vs-war" className="text-red-800 hover:underline">→ Analysis: Jobs vs War Spending</Link></li>
        </ul>
      </div>

      <blockquote className="border-l-4 border-red-800 pl-4 italic text-stone-400 mt-12 max-w-2xl">
        &ldquo;War is a racket. It always has been. It is possibly the oldest, easily the most profitable,
        surely the most vicious.&rdquo;
        <br /><span className="not-italic text-stone-500">— Major General Smedley Butler, USMC, 1935</span>
      </blockquote>
      <BackToTop />
    </div>
  )
}
