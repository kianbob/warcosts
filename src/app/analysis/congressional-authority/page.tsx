import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: '19 Wars Without Congress — The Death of the War Power',
  description: 'The Constitution gives Congress alone the power to declare war. Yet 19 of 28 US conflicts were fought without congressional authorization.',
}

export default function CongressionalAuthorityPage() {
  const conflicts = loadData('conflicts.json')
  const unauthorized = conflicts.filter((c: any) => !c.congressionalAuth)
  const authorized = conflicts.filter((c: any) => c.congressionalAuth)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Congressional Authority' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">19 Wars Without Congress</h1>
      <p className="text-muted mb-6">Article I, Section 8 of the Constitution: &ldquo;Congress shall have Power...To declare War.&rdquo; Presidents have ignored this more often than not.</p>
      <ShareButtons title="19 Wars Without Congress" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-red-50 rounded-lg p-6 border border-red-200 text-center">
          <p className="text-5xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{unauthorized.length}</p>
          <p className="text-muted font-semibold">Without Authorization</p>
        </div>
        <div className="bg-green-50 rounded-lg p-6 border border-green-200 text-center">
          <p className="text-5xl font-bold text-green-700 font-[family-name:var(--font-heading)]">{authorized.length}</p>
          <p className="text-muted font-semibold">With Authorization</p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Constitutional Framework</h2>
        <p>The Founders were explicit: the power to wage war belongs to Congress, not the President. They had seen what happened when a single executive could drag a nation into war, and they wanted to prevent it.</p>
        <p>James Madison wrote: &ldquo;The constitution supposes, what the History of all Governments demonstrates, that the Executive is the branch of power most interested in war, and most prone to it. It has accordingly with studied care vested the question of war to the Legislature.&rdquo;</p>

        <h2 className="font-[family-name:var(--font-heading)]">What Went Wrong</h2>
        <p>The War Powers Resolution of 1973 was supposed to reassert congressional authority after Vietnam. Instead, every president since has treated it as unconstitutional while simultaneously ignoring it. The result: presidents now routinely bomb countries, deploy troops, and conduct covert operations without any congressional vote.</p>
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-700">❌ Without Congressional Authorization ({unauthorized.length})</h2>
      <div className="space-y-3 mb-8">
        {unauthorized.map((c: any) => (
          <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-red-50 rounded-lg border border-red-200 p-4 hover:shadow-md transition">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">{c.shortName || c.name}</h3>
                <p className="text-xs text-muted">{c.startYear}–{c.endYear}</p>
              </div>
              <p className="text-xs text-muted max-w-xs text-right">{c.authDetail}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-green-700">✅ With Congressional Authorization ({authorized.length})</h2>
      <div className="space-y-3">
        {authorized.map((c: any) => (
          <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-green-50 rounded-lg border border-green-200 p-4 hover:shadow-md transition">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">{c.shortName || c.name}</h3>
                <p className="text-xs text-muted">{c.startYear}–{c.endYear}</p>
              </div>
              <p className="text-xs text-muted max-w-xs text-right">{c.authDetail}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
