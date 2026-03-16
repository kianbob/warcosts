import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Military Deaths by War — All Conflicts Ranked | WarCosts',
  description: 'Complete ranking of US military deaths in every war from the Revolution to 2026. Over 1.1 million Americans killed in combat. Data, charts, and analysis.',
  keywords: ['US military deaths by war', 'American war deaths', 'US combat deaths all wars', 'soldiers killed by conflict', 'war casualties ranked'],
  openGraph: {
    title: 'US Military Deaths by War — All Conflicts Ranked',
    description: 'Over 1.1 million Americans killed in war. Complete ranking from the Revolution to 2026.',
    url: 'https://www.warcosts.org/us-military-deaths-by-war',
    type: 'article',
  },
}

const faqs = [
  { q: 'How many US soldiers have died in all wars?', a: 'Approximately 1.1 million American service members have been killed in wars from the Revolutionary War through 2026. The Civil War was the deadliest (364,511 Union deaths), followed by World War II (405,399), World War I (116,516), Vietnam (58,220), and Korea (36,574).' },
  { q: 'Which war killed the most Americans?', a: 'World War II killed the most Americans in absolute terms with 405,399 deaths. However, the Civil War (364,511 Union deaths, plus an estimated 258,000 Confederate) killed more Americans total and had a far higher death rate relative to population — about 2% of the entire US population died.' },
  { q: 'How many Americans died in the War on Terror?', a: 'The War on Terror (2001-present) has killed approximately 7,074 US military personnel: 2,461 in Afghanistan, 4,599 in Iraq, and the rest in various global operations. An additional 30,000+ veterans have died by suicide since 2001.' },
  { q: 'What is the deadliest war per year of fighting?', a: 'World War II was the deadliest per year at roughly 101,000 US deaths per year (1941-1945). The Civil War was close behind at ~91,000 per year. World War I killed 58,000 per year of US involvement. By contrast, the 20-year Afghanistan War averaged 123 deaths per year.' },
]

const allWars = [
  { name: 'World War II', years: '1941-1945', deaths: 405399, wounded: 670846 },
  { name: 'Civil War (Union)', years: '1861-1865', deaths: 364511, wounded: 281881 },
  { name: 'World War I', years: '1917-1918', deaths: 116516, wounded: 204002 },
  { name: 'Vietnam War', years: '1955-1975', deaths: 58220, wounded: 153303 },
  { name: 'Korean War', years: '1950-1953', deaths: 36574, wounded: 103284 },
  { name: 'Revolutionary War', years: '1775-1783', deaths: 25000, wounded: 25000 },
  { name: 'War of 1812', years: '1812-1815', deaths: 15000, wounded: 4505 },
  { name: 'Mexican-American War', years: '1846-1848', deaths: 13283, wounded: 4152 },
  { name: 'Iraq War', years: '2003-2011', deaths: 4599, wounded: 32226 },
  { name: 'Philippine-American War', years: '1899-1902', deaths: 4196, wounded: 2930 },
  { name: 'Afghanistan War', years: '2001-2021', deaths: 2461, wounded: 20752 },
  { name: 'Spanish-American War', years: '1898', deaths: 2446, wounded: 1662 },
  { name: 'Quasi-War', years: '1798-1800', deaths: 514, wounded: 0 },
  { name: 'Gulf War', years: '1990-1991', deaths: 383, wounded: 467 },
  { name: 'Anti-ISIS', years: '2014-present', deaths: 93, wounded: 200 },
  { name: 'War on Terror (other)', years: '2001-present', deaths: 50, wounded: 100 },
  { name: 'Dominican Republic', years: '1965-1966', deaths: 44, wounded: 283 },
  { name: 'Somalia', years: '1992-1994', deaths: 43, wounded: 153 },
  { name: 'Barbary Wars', years: '1801-1805', deaths: 35, wounded: 64 },
  { name: 'Panama', years: '1989-1990', deaths: 23, wounded: 325 },
  { name: 'Grenada', years: '1983', deaths: 19, wounded: 116 },
  { name: 'Iran 2026', years: '2026-present', deaths: 13, wounded: 45 },
  { name: 'Bosnia', years: '1995-2004', deaths: 12, wounded: 0 },
  { name: 'Somalia (AFRICOM)', years: '2007-present', deaths: 8, wounded: 20 },
  { name: 'Bay of Pigs', years: '1961', deaths: 4, wounded: 0 },
  { name: 'Niger/Sahel', years: '2013-2024', deaths: 4, wounded: 2 },
  { name: 'Kosovo', years: '1998-1999', deaths: 2, wounded: 0 },
  { name: 'Yemen', years: '2015-2025', deaths: 2, wounded: 5 },
]

export default function MilitaryDeathsByWarPage() {
  const maxDeaths = allWars[0].deaths
  const totalDeaths = allWars.reduce((sum, w) => sum + w.deaths, 0)

  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'US Military Deaths by War' }]} />
        <ShareButtons title="US Military Deaths by War — All Conflicts Ranked" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            US Military Deaths by War
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">{totalDeaths.toLocaleString()}</div>
            <div className="text-lg opacity-90">Total American service members killed in all wars</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            More than <strong className="text-[#dc2626]">1.1 million Americans</strong> have died in wars spanning 
            250 years — from Lexington and Concord to the streets of Tehran. Each number represents a person who 
            never came home. This page ranks every US conflict by American lives lost.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">All Wars Ranked by US Deaths</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="space-y-3">
              {allWars.map((war, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-semibold text-sm">{war.name} <span className="text-gray-500 font-normal">({war.years})</span></span>
                    <span className="text-[#dc2626] font-mono font-bold text-sm">{war.deaths.toLocaleString()}</span>
                  </div>
                  <div className="bg-stone-700 rounded-full h-2">
                    <div className="bg-[#dc2626] h-2 rounded-full" style={{ width: `${Math.max((war.deaths / maxDeaths) * 100, 0.5)}%` }} />
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
                  <th className="text-left py-3 text-white">Conflict</th>
                  <th className="text-left py-3 text-white">Years</th>
                  <th className="text-right py-3 text-white">Deaths</th>
                  <th className="text-right py-3 text-white">Wounded</th>
                </tr>
              </thead>
              <tbody>
                {allWars.map((war, i) => (
                  <tr key={i} className="border-b border-stone-700">
                    <td className="py-2 text-gray-500 text-sm">{i + 1}</td>
                    <td className="py-2 text-white text-sm">{war.name}</td>
                    <td className="py-2 text-gray-400 text-sm">{war.years}</td>
                    <td className="py-2 text-right font-mono text-[#dc2626] text-sm">{war.deaths.toLocaleString()}</td>
                    <td className="py-2 text-right font-mono text-gray-400 text-sm">{war.wounded.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-[#dc2626]">
                  <td className="py-3" colSpan={3}><span className="text-white font-bold">Total</span></td>
                  <td className="py-3 text-right font-mono text-[#dc2626] font-bold">{totalDeaths.toLocaleString()}</td>
                  <td className="py-3 text-right font-mono text-gray-400">{allWars.reduce((s, w) => s + w.wounded, 0).toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Pattern</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The data reveals a striking pattern: <strong className="text-white">the wars Americans remember and debate — 
              Iraq, Afghanistan, Vietnam — are not the deadliest.</strong> The Civil War and World Wars dwarfed everything 
              else in human cost. But there&apos;s a deeper lesson.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Since the end of the draft in 1973, war deaths have plummeted — not because wars stopped, but because 
              the <Link href="/who-fights" className="text-[#dc2626] hover:underline">burden shifted to a tiny fraction of Americans</Link>. 
              The all-volunteer force means 99% of Americans experience war as an abstraction. When war costs nothing 
              personally, there&apos;s no political pressure to stop it.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This is why the <Link href="/analysis/forever-wars" className="text-[#dc2626] hover:underline">forever wars</Link> are 
              possible. If every American family had skin in the game, the 20-year Afghanistan War — and the current 
              Iran conflict — would be politically unsustainable.
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
              { href: '/casualties', label: 'All Casualty Data' },
              { href: '/how-many-us-soldiers-died-in-korea', label: 'Korean War Deaths' },
              { href: '/how-many-died-in-the-vietnam-war', label: 'Vietnam War Deaths' },
              { href: '/compare/all-wars-cost', label: 'All Wars Ranked by Cost' },
              { href: '/veteran-suicide', label: 'Veteran Suicide Crisis' },
              { href: '/cost-of-war-by-president', label: 'Cost of War by President' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-stone-800 hover:bg-stone-700 rounded-lg p-4 border border-stone-700 hover:border-[#dc2626] text-gray-300 hover:text-red-500 transition-colors">
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Sources</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <ul className="text-gray-300 space-y-2">
              <li>• Department of Defense — Defense Casualty Analysis System (DCAS)</li>
              <li>• Congressional Research Service — &ldquo;American War and Military Operations Casualties&rdquo;</li>
              <li>• National Archives — Military Records</li>
              <li>• Brown University Costs of War Project</li>
              <li>• VA National Center for Veterans Analysis and Statistics</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'US Military Deaths by War — All Conflicts Ranked',
              description: 'Over 1.1 million Americans killed in war. Complete ranking from the Revolution to 2026.',
              url: 'https://www.warcosts.org/us-military-deaths-by-war',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
