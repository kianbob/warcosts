import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'The Military-Industrial Complex — Eisenhower\'s Warning',
  description: 'In 1961, Eisenhower warned of the military-industrial complex. Today, defense contractors receive $400B+ per year. We didn\'t listen.',
}

export default function MICPage() {
  const stats = loadData('stats.json')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Military-Industrial Complex' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">The Military-Industrial Complex</h1>
      <p className="text-muted mb-6">In his farewell address, President Eisenhower — a five-star general who led D-Day — warned America about the growing power of the defense industry. We ignored him.</p>
      <ShareButtons title="The Military-Industrial Complex" />

      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise of misplaced power exists and will persist. We must never let the weight of this combination endanger our liberties or democratic processes.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— President Dwight D. Eisenhower, January 17, 1961</p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Numbers</h2>
        <p>The US military budget for 2024 is {fmtMoney(stats.currentAnnualBudget)} — more than the next 10 countries combined. The top five defense contractors alone receive over $200 billion per year in government contracts.</p>
        <p>The Pentagon has never passed an independent audit. It is the only federal agency that cannot account for its own spending.</p>

        <h2 className="font-[family-name:var(--font-heading)]">The Revolving Door</h2>
        <p>Between 2004 and 2008, 80% of retiring three- and four-star generals went to work for defense contractors or consulting firms. Pentagon officials who approve weapons programs later join the companies that build them. Company executives take government positions overseeing their former employers.</p>
        <p>This isn&apos;t conspiracy theory — it&apos;s documented fact. The Government Accountability Office has flagged this revolving door repeatedly.</p>

        <h2 className="font-[family-name:var(--font-heading)]">The Incentive Structure</h2>
        <p>Defense contractors have a simple business model: their revenue depends on military spending. Military spending depends on threats. Therefore, it is in their financial interest to ensure America always perceives threats that require expensive weapons systems.</p>
        <p>The F-35 program has a lifetime cost of $1.7 trillion. It is the most expensive weapons system in human history. Parts are manufactured in 45 states — ensuring that almost every member of Congress has a financial incentive to keep the program funded.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Campaign Contributions</h2>
        <p>Defense industry PACs and employees contribute tens of millions to political campaigns every election cycle. Members of the Armed Services and Appropriations committees — who decide how much the Pentagon gets — are among the largest recipients.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Smedley Butler Knew</h2>
        <p>In 1935, Major General Smedley Butler — at the time the most decorated Marine in history — wrote:</p>
      </div>

      <div className="bg-stone-100 rounded-xl p-8 my-6 border">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700">
          &ldquo;War is a racket. It always has been. It is possibly the oldest, easily the most profitable, surely the most vicious. It is the only one in which the profits are reckoned in dollars and the losses in lives.&rdquo;
        </blockquote>
        <p className="text-muted mt-3">— Major General Smedley Butler, <em>War Is a Racket</em>, 1935</p>
      </div>

      <div className="text-center mt-8">
        <Link href="/contractors" className="text-primary font-semibold hover:underline">See the Top Defense Contractors →</Link>
      </div>
    </div>
  )
}
