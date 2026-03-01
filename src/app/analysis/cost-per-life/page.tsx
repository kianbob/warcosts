import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Price of a Life — Why Modern Wars Cost 100× More Per Death | WarCosts',
  description: 'The cost per American death has skyrocketed from $96,000 in the Revolutionary War to $935 million in Afghanistan. A deep analysis of what this means.',
}

export default function AnalysisCostPerLifePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Price of a Life' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">The Price of a Life</h1>
      <p className="text-stone-500 mb-2">Why modern wars cost 100× more per death than WWII — and what it means.</p>
      <ShareButtons title="The Price of a Life — Analysis" />

      <div className="prose text-stone-600 mt-8">
        <p className="text-lg">
          In the Revolutionary War, each American death cost the equivalent of <strong>$96,000</strong> in
          today&apos;s dollars. In Afghanistan, that figure was <strong>$935 million</strong>. A nearly
          10,000-fold increase.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Escalation</h2>
        <table>
          <thead><tr><th>Conflict</th><th>Cost Per US Death</th></tr></thead>
          <tbody>
            <tr><td>Revolutionary War</td><td>$96,000</td></tr>
            <tr><td>Civil War</td><td>$219,000</td></tr>
            <tr><td>World War I</td><td>$3.3M</td></tr>
            <tr><td>World War II</td><td>$11.8M</td></tr>
            <tr><td>Vietnam</td><td>$17.2M</td></tr>
            <tr><td>Gulf War</td><td>$355M</td></tr>
            <tr><td>Iraq War</td><td>$435M</td></tr>
            <tr><td>Afghanistan</td><td>$935M</td></tr>
          </tbody>
        </table>

        <h2 className="font-[family-name:var(--font-heading)]">Why So Expensive?</h2>
        <p>
          Three factors drive the escalation:
        </p>
        <ol>
          <li><strong>Technology:</strong> Modern weapons systems cost exponentially more. A single F-35 costs $80M.
          A Tomahawk cruise missile costs $1.87M. The technology of war has become staggeringly expensive.</li>
          <li><strong>Force protection:</strong> Modern militaries spend enormous sums keeping soldiers alive —
          body armor, MRAPs, medevac helicopters, field hospitals. Fewer deaths, but far higher cost per deployment.</li>
          <li><strong>Long-tail costs:</strong> Veterans require decades of care. The Afghanistan generation will
          need $2.5 trillion in lifetime care.</li>
        </ol>

        <h2 className="font-[family-name:var(--font-heading)]">The Paradox</h2>
        <p>
          Here&apos;s the uncomfortable truth: as war becomes more &ldquo;humane&rdquo; for American soldiers —
          fewer deaths, better medical care — it becomes <em>more affordable politically</em>. Low American
          casualties make it easier to sustain wars indefinitely. Afghanistan lasted 20 years partly because
          the cost in American lives was low enough to tolerate.
        </p>
        <p>
          The cost in <em>money</em> was astronomical. The cost in <em>foreign civilian lives</em> was
          catastrophic. But those costs are invisible to most Americans.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What Does a Life Cost?</h2>
        <p>
          The question itself is grotesque. But governments make this calculation constantly. The Department
          of Defense values a &ldquo;statistical life&rdquo; at roughly $7.5 million for policy purposes.
          By that metric, the Afghanistan war spent <strong>125× more per death</strong> than the official
          value of a life.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;I spent 33 years in the Marines. During that period I spent most of my time being a
          high-class muscle man for Big Business, for Wall Street and the bankers.&rdquo;
          <br />— Major General Smedley Butler
        </blockquote>

        <p>
          <Link href="/cost-per-life">→ See the full cost-per-life data</Link>
        </p>
      </div>

      <BackToTop />
    </div>
  )
}
