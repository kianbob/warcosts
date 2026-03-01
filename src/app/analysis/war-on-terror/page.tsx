import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'The War on Terror: $8 Trillion Later',
  description: 'Analysis of the War on Terror: $8 trillion spent, 929,000 dead, four countries destabilized, and the threat is still here.',
}

export default function WarOnTerrorPage() {
  const stats = loadData('stats.json')
  const conflicts = loadData('conflicts.json')
  const wotConflicts = conflicts.filter((c: any) => c.era === 'War on Terror')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'War on Terror' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">The War on Terror: {fmtMoney(stats.warOnTerrorCost)} Later</h1>
      <p className="text-muted mb-6">Two decades. {fmt(stats.warOnTerrorDeaths)} dead. Four countries. Was any of it worth it?</p>
      <ShareButtons title="The War on Terror: $8 Trillion Later" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(stats.warOnTerrorCost)}</p>
          <p className="text-xs text-muted">Total Cost</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(stats.warOnTerrorDeaths)}</p>
          <p className="text-xs text-muted">People Killed</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">37M</p>
          <p className="text-xs text-muted">Displaced</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">0</p>
          <p className="text-xs text-muted">Objectives Fully Met</p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Costs</h2>
        <p>On September 11, 2001, 2,977 Americans died in the worst terrorist attack on US soil. In response, the United States launched a global war that would cost {fmtMoney(stats.warOnTerrorCost)}, kill an estimated {fmt(stats.warOnTerrorDeaths)} people, displace 37 million more, and destabilize at least four countries.</p>
        <p>The War on Terror — spanning Afghanistan, Iraq, Syria, Yemen, Libya, and the global drone campaign — represents the most expensive series of military operations in American history after World War II.</p>

        <h2 className="font-[family-name:var(--font-heading)]">The Conflicts</h2>
      </div>

      <div className="space-y-4 my-6">
        {wotConflicts.map((c: any) => (
          <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-lg border p-4 hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-muted text-sm">{c.startYear}–{c.endYear}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">{fmtMoney(c.costInflationAdjusted)}</p>
                <p className="text-sm text-muted">{c.outcome}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Outcomes</h2>
        <p><strong>Afghanistan:</strong> After 20 years and $2.3 trillion, the Taliban — the same group the US invaded to remove — returned to power in August 2021. The Afghan military the US spent $83 billion building collapsed in 11 days.</p>
        <p><strong>Iraq:</strong> No weapons of mass destruction were found. The power vacuum created by the invasion led to the rise of ISIS, empowered Iran in the region, and killed an estimated 300,000 civilians.</p>
        <p><strong>Libya:</strong> After US-led NATO bombing removed Gaddafi, the country collapsed into a failed state with open-air slave markets and became a stronghold for extremist groups.</p>
        <p><strong>Yemen:</strong> US support for Saudi Arabia&apos;s bombing campaign created what the UN called &ldquo;the world&apos;s worst humanitarian crisis&rdquo; — 150,000+ dead and millions facing famine.</p>

        <h2 className="font-[family-name:var(--font-heading)]">The Question</h2>
        <p>Did the War on Terror make America safer? The number of terrorist organizations worldwide has <em>increased</em> since 2001. The number of countries experiencing significant terrorism has increased. And the US is now $8 trillion poorer, with thousands of American families grieving sons and daughters who won&apos;t come home.</p>
      </div>

      <div className="bg-stone-900 text-white rounded-xl p-8 mt-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;They that can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Benjamin Franklin</p>
      </div>
    </div>
  )
}
