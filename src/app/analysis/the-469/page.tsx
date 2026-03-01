import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '469 Military Interventions Since 1798 | WarCosts',
  description: 'The Congressional Research Service documents 469 instances of US armed forces deployed abroad since 1798. 251 since 1991 alone. The acceleration of American interventionism.',
}

export default function The469Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The 469' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">The 469</h1>
      <p className="text-stone-500 mb-2">469 military interventions since 1798. 251 since 1991 alone.</p>
      <ShareButtons title="469 Military Interventions Since 1798" />

      <div className="prose text-stone-600 mt-8">
        <div className="not-prose grid grid-cols-2 gap-4 my-8">
          <div className="bg-red-50 rounded-xl p-6 border border-red-200 text-center">
            <p className="text-5xl font-bold text-red-800 font-[family-name:var(--font-heading)]">469</p>
            <p className="text-stone-600">Total interventions</p>
            <p className="text-stone-400 text-sm">Since 1798</p>
          </div>
          <div className="bg-red-50 rounded-xl p-6 border border-red-200 text-center">
            <p className="text-5xl font-bold text-red-800 font-[family-name:var(--font-heading)]">251</p>
            <p className="text-stone-600">Since 1991</p>
            <p className="text-stone-400 text-sm">53% of all interventions in 14% of the time</p>
          </div>
        </div>

        <p className="text-lg">
          The Congressional Research Service — Congress&apos;s own nonpartisan research arm — maintains
          a document titled <em>&ldquo;Instances of Use of United States Armed Forces Abroad.&rdquo;</em>
          It lists every known deployment of US military forces since the founding of the Navy in 1798.
          The count: <strong>469</strong>.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Acceleration</h2>
        <p>
          The pace of intervention has accelerated dramatically:
        </p>
        <ul>
          <li><strong>1798–1900:</strong> ~100 interventions in 102 years (~1 per year)</li>
          <li><strong>1901–1990:</strong> ~118 interventions in 90 years (~1.3 per year)</li>
          <li><strong>1991–present:</strong> ~251 interventions in 34 years (~7.4 per year)</li>
        </ul>
        <p>
          Since the Cold War ended, the rate of American military intervention has increased
          <strong> nearly 6×</strong>. The &ldquo;peace dividend&rdquo; never materialized.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What Counts as an &ldquo;Intervention&rdquo;?</h2>
        <p>
          The CRS list includes everything from full-scale wars to &ldquo;show of force&rdquo; operations,
          embassy evacuations, naval escorts, and drone strikes. Many lasted days or hours. Others lasted decades.
          The list almost certainly undercounts covert operations.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Constitutional Crisis</h2>
        <p>
          Of these 469 interventions, only <strong>5</strong> received a formal declaration of war
          from Congress. The rest relied on authorizations for use of military force, UN resolutions,
          treaty obligations, presidential authority, or nothing at all.
        </p>
        <p>
          The Founders were explicit: the power to declare war belongs to Congress, not the President.
          They had seen what happened when monarchs could wage war unilaterally. Two centuries later,
          we have returned to that model in practice if not in name.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;Allow the President to invade a neighboring nation whenever he shall deem it necessary...
          and you allow him to make war at pleasure.&rdquo;
          <br />— Abraham Lincoln, 1848
        </blockquote>

        <p><Link href="/us-wars-list">→ See the complete list of US wars</Link></p>
      </div>

      <BackToTop />
    </div>
  )
}
