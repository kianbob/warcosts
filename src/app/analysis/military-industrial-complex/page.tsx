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

      <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(stats.defenseContractorSpending)}</p>
          <p className="text-xs text-muted">Contractor spending (2020–2024)</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{stats.revolvingDoorOfficials}+</p>
          <p className="text-xs text-muted">Officials through revolving door</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(stats.defenseLobbying2023)}</p>
          <p className="text-xs text-muted">Defense lobbying (2023)</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(stats.campaignContributions)}</p>
          <p className="text-xs text-muted">Campaign contributions</p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Numbers</h2>
        <p>The US military budget for 2024 is {fmtMoney(stats.currentAnnualBudget)} — more than the next 10 countries combined. Defense contractors received {fmtMoney(stats.defenseContractorSpending)} from 2020–2024. The Pentagon has never passed an independent audit.</p>

        <h2 className="font-[family-name:var(--font-heading)]">The Revolving Door</h2>
        <p>Over <strong>{stats.revolvingDoorOfficials} senior officials</strong> have moved between the Pentagon and defense contractors. Between 2004 and 2008, 80% of retiring three- and four-star generals went to work for defense contractors or consulting firms. Pentagon officials who approve weapons programs later join the companies that build them.</p>
        <p>This isn&apos;t conspiracy theory — it&apos;s documented fact. The Government Accountability Office has flagged this revolving door repeatedly.</p>

        <h2 className="font-[family-name:var(--font-heading)]">The Incentive Structure</h2>
        <p>Defense contractors have a simple business model: their revenue depends on military spending. Military spending depends on threats. Therefore, it is in their financial interest to ensure America always perceives threats that require expensive weapons systems.</p>
        <p>The F-35 program has a lifetime cost of $1.7 trillion. It is the most expensive weapons system in human history. Parts are manufactured in 45 states — ensuring that almost every member of Congress has a financial incentive to keep the program funded.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Campaign Contributions</h2>
        <p>Defense industry PACs and employees have contributed <strong>{fmtMoney(stats.campaignContributions)}</strong> to political campaigns. In 2023 alone, the industry spent <strong>{fmtMoney(stats.defenseLobbying2023)}</strong> on lobbying. Members of the Armed Services and Appropriations committees — who decide how much the Pentagon gets — are among the largest recipients.</p>

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

      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related</h3>
        <ul className="space-y-2">
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Military Spending Data</Link></li>
          <li><Link href="/defense-budget" className="text-red-800 hover:underline">→ The Defense Budget</Link></li>
          <li><Link href="/analysis/congressional-authority" className="text-red-800 hover:underline">→ 19 Wars Without Congress</Link></li>
        </ul>
      </div>
    </div>
  )
}
