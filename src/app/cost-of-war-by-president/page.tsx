import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cost of War by President — Who Spent the Most? | WarCosts',
  description: 'Which US presidents spent the most on war? From Washington to Trump, ranked by total war spending in inflation-adjusted dollars. Bush Jr. leads at $4.3 trillion.',
  keywords: ['cost of war by president', 'president war spending', 'which president spent most on war', 'presidential military spending', 'war costs ranked by president'],
  openGraph: {
    title: 'Cost of War by President — Who Spent the Most?',
    description: 'Which US presidents spent the most on war? Ranked by total war spending.',
    url: 'https://www.warcosts.org/cost-of-war-by-president',
    type: 'article',
  },
}

const faqs = [
  { q: 'Which president spent the most on war?', a: 'George W. Bush spent the most on war at approximately $4.3 trillion (inflation-adjusted), driven by the Iraq War ($2 trillion) and Afghanistan War ($2.3 trillion). Harry Truman is second at $2.8 trillion (WW2 completion + Korean War), and FDR third at $2.4 trillion (WW2).' },
  { q: 'How much did the War on Terror cost across all presidents?', a: 'The War on Terror cost approximately $8 trillion across four presidents: Bush Jr. ($4.3T), Obama ($77B), Trump ($111B), and Biden ($114B). Bush initiated and bore the bulk of costs for both Iraq and Afghanistan.' },
  { q: 'Did any president not fight a war?', a: 'Very few presidents avoided military conflict entirely. The presidents who came closest to peace include John Adams (only the minor Quasi-War), and Jimmy Carter (no major military operations, though he authorized the failed Iran hostage rescue). Most presidents have engaged in at least one military operation.' },
  { q: 'How much do current US wars cost per president?', a: 'Modern presidents inherit wars from predecessors. Obama spent approximately $77B on inherited operations. Trump spent ~$111B, and Biden ~$114B, both continuing the War on Terror and adding new operations.' },
]

function formatCost(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(1)}T`
  if (n >= 1e9) return `$${(n / 1e9).toFixed(0)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`
  return `$${n.toLocaleString()}`
}

export default function CostByPresidentPage() {
  const presidents = loadData('presidents.json') as Array<{
    name: string
    conflicts: string[]
    totalCost: number
    totalUSDeaths: number
  }>

  const sorted = [...presidents].sort((a, b) => b.totalCost - a.totalCost)
  const maxCost = sorted[0]?.totalCost || 1

  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Cost of War by President' }]} />
        <ShareButtons title="Cost of War by President — Who Spent the Most?" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            Cost of War by President
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">Bush Jr. — $4.3 Trillion</div>
            <div className="text-lg opacity-90">Most expensive wartime president in US history</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Every dollar spent on war was authorized by a president. Some inherited conflicts; others started them.
            This page ranks every wartime president by <strong className="text-[#dc2626]">total war spending in inflation-adjusted dollars</strong>.
            The results reveal which commanders-in-chief chose war — and which had it thrust upon them.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Ranked by War Spending</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="space-y-4">
              {sorted.map((p, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-semibold">
                      <span className="text-gray-500 mr-2">#{i + 1}</span>
                      {p.name}
                    </span>
                    <span className="text-[#dc2626] font-mono font-bold">{formatCost(p.totalCost)}</span>
                  </div>
                  <div className="bg-stone-700 rounded-full h-3 mb-1">
                    <div className="bg-[#dc2626] h-3 rounded-full" style={{ width: `${Math.max((p.totalCost / maxCost) * 100, 1)}%` }} />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{p.conflicts.join(', ')}</span>
                    <span className="text-gray-500">{p.totalUSDeaths.toLocaleString()} deaths</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Full Data Table</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stone-700">
                  <th className="text-left py-3 text-white">#</th>
                  <th className="text-left py-3 text-white">President</th>
                  <th className="text-left py-3 text-white">Conflicts</th>
                  <th className="text-right py-3 text-white">Cost (adj.)</th>
                  <th className="text-right py-3 text-white">US Deaths</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((p, i) => (
                  <tr key={i} className={`border-b border-stone-700 ${i === 0 ? 'bg-stone-700' : ''}`}>
                    <td className="py-2 text-gray-500 text-sm">{i + 1}</td>
                    <td className={`py-2 text-sm font-semibold ${i === 0 ? 'text-[#dc2626]' : 'text-white'}`}>{p.name}</td>
                    <td className="py-2 text-gray-400 text-xs">{p.conflicts.join(', ')}</td>
                    <td className={`py-2 text-right font-mono text-sm ${i === 0 ? 'text-[#dc2626]' : 'text-white'}`}>{formatCost(p.totalCost)}</td>
                    <td className="py-2 text-right font-mono text-gray-400 text-sm">{p.totalUSDeaths.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Takeaway</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The data shows two distinct eras of American warfare. Before 1945, presidents fought massive but 
              time-limited wars with clear endpoints. After 1945, the pattern shifted to 
              <strong className="text-white"> permanent, low-intensity conflicts</strong> that span multiple administrations 
              and never truly end.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bush Jr.&apos;s $4.3 trillion represents the catastrophic cost of <em>choosing</em> war. Iraq was not thrust upon 
              America — it was a <Link href="/analysis/lies-that-started-wars" className="text-[#dc2626] hover:underline">war of choice based on false premises</Link>. 
              Truman&apos;s $2.8 trillion included finishing a war he didn&apos;t start (WW2) and responding to outright 
              invasion (Korea) — a fundamentally different calculus.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The modern pattern is most troubling: Obama, Trump, and Biden each inherited ongoing wars and added 
              new ones, while none ended any. The <Link href="/analysis/forever-wars" className="text-[#dc2626] hover:underline">forever wars</Link> persist 
              because no president pays a political price for continuing them — only for losing them.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-stone-800 rounded-lg p-6 border border-stone-700">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <FaqJsonLd faqs={faqs} />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: '/presidents', label: 'Presidents at War' },
              { href: '/compare/all-wars-cost', label: 'All Wars Ranked by Cost' },
              { href: '/us-military-deaths-by-war', label: 'US Deaths by War' },
              { href: '/us-military-budget-2026', label: '2026 Military Budget' },
              { href: '/how-much-did-ww2-cost', label: 'How Much Did WW2 Cost?' },
              { href: '/analysis/presidents-at-war', label: 'Presidents at War Analysis' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-stone-800 hover:bg-stone-700 rounded-lg p-4 border border-stone-700 hover:border-[#dc2626] text-gray-300 hover:text-red-500 transition-colors">
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Related Analysis</h2>
          <div className="flex flex-col gap-3 bg-stone-800 rounded-lg p-6 border border-stone-700">
            <Link href="/analysis/presidents-at-war" className="text-[#dc2626] hover:underline">→ Presidents at War</Link>
            <Link href="/analysis/congressional-authority" className="text-[#dc2626] hover:underline">→ 19 Wars Without Congress</Link>
            <Link href="/analysis/cost-of-empire" className="text-[#dc2626] hover:underline">→ The Cost of Empire</Link>
            <Link href="/analysis/forever-wars" className="text-[#dc2626] hover:underline">→ The Forever Wars</Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Sources</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <ul className="text-gray-300 space-y-2">
              <li>• Congressional Research Service — &ldquo;Costs of Major U.S. Wars&rdquo;</li>
              <li>• Brown University Costs of War Project</li>
              <li>• Office of Management and Budget — Historical Tables</li>
              <li>• Defense Casualty Analysis System (DCAS)</li>
              <li>• Stiglitz &amp; Bilmes — war cost analyses</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Cost of War by President — Who Spent the Most?',
              description: 'Which US presidents spent the most on war? Ranked by total war spending.',
              url: 'https://www.warcosts.org/cost-of-war-by-president',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
