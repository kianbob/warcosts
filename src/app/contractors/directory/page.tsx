import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import contractorsData from '../../../../public/data/contractors.json'

export const metadata: Metadata = {
  title: 'Top Defense Contractors — $287 Billion in Pentagon Contracts (FY2024) | WarCosts',
  description: 'The top defense contractors receiving hundreds of billions in taxpayer-funded Pentagon contracts. Lockheed Martin, Boeing, RTX, General Dynamics, and more.',
  alternates: { canonical: 'https://www.warcosts.org/contractors/directory' },
}

function fmtMoney(m: number) {
  if (m >= 1e9) return `$${(m / 1e9).toFixed(1)}B`
  if (m >= 1e6) return `$${(m / 1e6).toFixed(0)}M`
  return `$${(m / 1e3).toFixed(0)}K`
}

export default function ContractorsDirectoryPage() {
  const contractors = contractorsData as any[]
  const total = contractors.reduce((s, c) => s + c.amount, 0)

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Contractors', href: '/contractors' }, { label: 'Directory' }]} />
      <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] text-red-800 mb-4">
        Top Defense Contractors
      </h1>
      <p className="text-lg text-stone-600 mb-8 max-w-3xl">
        In FY2024, the Department of Defense awarded <strong>{fmtMoney(total)}</strong> in contracts to
        these {contractors.length} companies. The top 5 alone received over {fmtMoney(contractors.slice(0, 5).reduce((s, c) => s + c.amount, 0))}.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-800">{fmtMoney(total)}</div>
          <div className="text-sm text-stone-500">Total FY2024 Contracts</div>
        </div>
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-800">{contractors.length}</div>
          <div className="text-sm text-stone-500">Companies Tracked</div>
        </div>
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-800">{fmtMoney(contractors[0]?.amount || 0)}</div>
          <div className="text-sm text-stone-500">#1: {contractors[0]?.name}</div>
        </div>
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-800">$456B</div>
          <div className="text-sm text-stone-500">Total DoD Contract Awards</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-stone-300 text-left">
              <th className="py-2 pr-4 font-semibold w-12">Rank</th>
              <th className="py-2 pr-4 font-semibold">Company</th>
              <th className="py-2 pr-4 font-semibold text-right">FY2024 Contracts</th>
              <th className="py-2 font-semibold text-right hidden md:table-cell">% of Total</th>
            </tr>
          </thead>
          <tbody>
            {contractors.slice(0, 50).map((c, i) => (
              <tr key={c.slug} className="border-b border-stone-100 hover:bg-stone-50">
                <td className="py-2 pr-4 text-stone-400 font-mono">{i + 1}</td>
                <td className="py-2 pr-4">
                  <span className="font-medium text-stone-800">{c.name}</span>
                  {c.subsidiaries?.length > 1 && (
                    <span className="text-xs text-stone-400 ml-2">({c.subsidiaries.length} subsidiaries)</span>
                  )}
                </td>
                <td className="py-2 pr-4 text-right font-semibold text-red-800">{fmtMoney(c.amount)}</td>
                <td className="py-2 text-right text-stone-600 hidden md:table-cell">
                  {((c.amount / total) * 100).toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2>The Military-Industrial Complex</h2>
        <p>
          In 1961, President Eisenhower warned of the &ldquo;unwarranted influence&rdquo; of the military-industrial
          complex. Six decades later, the defense industry has only grown more concentrated and powerful. The top
          5 contractors receive more in Pentagon contracts than the combined GDP of many nations.
        </p>
        <p>
          The revolving door between the Pentagon and defense industry remains wide open. Former generals and
          admirals routinely join contractor boards, while industry executives cycle into senior Pentagon positions.
          This creates a system where the people buying weapons and the people selling them are often the same
          people at different points in their careers.
        </p>
        <h3>Related Pages</h3>
        <ul>
          <li><Link href="/weapons">Weapons Systems</Link></li>
          <li><Link href="/spending">Military Spending</Link></li>
          <li><Link href="/analysis/military-industrial-complex">Analysis: The Military-Industrial Complex</Link></li>
          <li><Link href="/contractors">Contractors Overview</Link></li>
        </ul>
      </div>

      <ShareButtons title="Top Defense Contractors" />
      <BackToTop />
    </main>
  )
}
