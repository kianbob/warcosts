import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Wars List — Every American War Since 1776 | WarCosts',
  description: 'Complete list of all 28 major US wars and military conflicts since 1776, plus 469 total military interventions. How many wars has the US been in?',
  keywords: ['us wars list', 'how many wars has the us been in', 'american wars', 'list of us wars'],
}

export default function USWarsListPage() {
  const conflicts = loadData('conflicts.json')
  const stats = loadData('stats.json')

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'US Wars List' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">Every US War Since 1776</h1>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        The United States has fought <strong className="text-stone-800">{stats.totalConflicts} major wars</strong> and
        conducted <strong className="text-stone-800">{stats.totalInterventions} total military interventions</strong> since
        its founding. Only {stats.totalConflicts - stats.undeclaredWars} were formally declared by Congress.
      </p>
      <ShareButtons title="US Wars List — Every American War Since 1776" />

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{stats.totalConflicts}</p>
          <p className="text-stone-500 text-sm">Major Wars</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{stats.totalInterventions}</p>
          <p className="text-stone-500 text-sm">Total Interventions</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{stats.undeclaredWars}</p>
          <p className="text-stone-500 text-sm">Undeclared Wars</p>
        </div>
      </div>

      <div className="space-y-3 my-8">
        {conflicts.map((c: any, i: number) => (
          <Link key={c.id} href={`/conflicts/${c.id}`}
            className="flex items-center justify-between bg-white rounded-lg border p-4 hover:shadow-md transition">
            <div>
              <span className="text-stone-400 text-sm mr-3">{i + 1}.</span>
              <span className="font-medium">{c.name}</span>
              <span className="text-stone-400 ml-2 text-sm">{c.years}</span>
            </div>
            <div className="text-right">
              <span className="text-red-800 font-bold">{fmtMoney(c.costInflationAdjusted)}</span>
              <span className="text-stone-400 text-sm ml-3">{fmt(c.usCasualties?.deaths)} deaths</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">469 Military Interventions</h2>
        <p>
          Beyond the 28 major conflicts, the Congressional Research Service documents 469 instances
          of the use of US armed forces abroad since 1798. 251 of those have occurred since 1991 alone —
          an acceleration of interventionism unprecedented in American history.
        </p>
        <p>
          The Constitution grants Congress the sole power to declare war. Yet only 5 wars in American
          history received a formal declaration. The rest were authorized through resolutions,
          executive orders, or no authorization at all.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;Of all the enemies to public liberty, war is, perhaps, the most to be dreaded.&rdquo;
          <br />— James Madison
        </blockquote>
      </div>

      <BackToTop />
    </div>
  )
}
