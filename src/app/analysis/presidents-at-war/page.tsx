import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'
import { PresidentCostChart } from '@/components/charts/PresidentCharts'

export const metadata: Metadata = {
  title: 'Presidents at War — Who Waged the Most Wars? | WarCosts',
  description: 'Which US presidents started the most wars and spent the most on conflict? Analysis of the expansion of war powers from Madison to Biden.',
}

export default function AnalysisPresidentsPage() {
  const presidents = loadData('presidents.json')

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Presidents at War' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Presidents at War</h1>
      <p className="text-stone-500 mb-2">The expansion of executive war powers — and the presidents who exploited them most.</p>
      <ShareButtons title="Presidents at War — Analysis" />

      <div className="prose text-stone-600 mt-8">
        <p className="text-lg">
          The Constitution gives Congress — not the President — the power to declare war. Yet of
          America&apos;s 36 major conflicts, only 5 received a formal declaration. The rest were
          presidential wars, authorized by creative legal interpretations or nothing at all.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Biggest Spenders</h2>
        <p>
          George W. Bush tops the list at <strong>{fmtMoney(presidents[0].totalCost)}</strong> across
          {' '}{presidents[0].conflicts.length} conflicts. His War on Terror fundamentally reshaped
          American foreign policy and created a template for permanent, undeclared warfare.
        </p>

        <div className="not-prose space-y-3 my-6">
          {presidents.slice(0, 6).map((p: any) => (
            <div key={p.name} className="flex items-center justify-between bg-stone-50 rounded-lg border p-4">
              <div>
                <span className="font-bold">{p.name}</span>
                <span className="text-stone-400 ml-2 text-sm">{p.conflicts.join(', ')}</span>
              </div>
              <span className="text-red-800 font-bold">{fmtMoney(p.totalCost)}</span>
            </div>
          ))}
        </div>

        <div className="not-prose my-8">
          <PresidentCostChart />
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The Erosion of Congressional Authority</h2>
        <p>
          The trend is clear: each generation of presidents claims more war-making power.
          The 2001 Authorization for Use of Military Force (AUMF) — a single page, passed three days
          after 9/11 — has been used to justify military operations in at least 22 countries.
          It has never been repealed.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The War Powers Act: Dead Letter</h2>
        <p>
          Passed in 1973 to reassert congressional authority after Vietnam, the War Powers Resolution
          requires the president to notify Congress within 48 hours of deploying troops and limits
          deployments to 60 days without authorization. In practice, every president since Nixon
          has either ignored it or claimed it doesn&apos;t apply.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Party Doesn&apos;t Matter</h2>
        <p>
          Both parties wage war with equal enthusiasm. Democrats: Vietnam, Libya, Syria, Yugoslavia.
          Republicans: Iraq, Afghanistan, Grenada, Panama. The military-industrial complex is
          bipartisan.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;No nation could preserve its freedom in the midst of continual warfare.&rdquo;
          <br />— James Madison
        </blockquote>

        <p><Link href="/presidents">→ See the full presidential war scorecard</Link></p>
      </div>

      <BackToTop />
    </div>
  )
}
