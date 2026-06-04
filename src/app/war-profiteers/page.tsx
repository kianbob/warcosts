import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProfiteersClient from './ProfiteersClient'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import FaqJsonLd from '@/components/FaqJsonLd'
import data from '../../../public/data/war-profiteers.json'

export const metadata: Metadata = {
  title: 'War Profiteers Stock Tracker — Who\'s Getting Rich from the Iran War | WarCosts',
  description: `Defense stocks surged ${data.summary.defenseIndexChange}% while the S&P 500 dropped ${Math.abs(data.summary.sp500Change)}% since the Iran War began. $${Math.round(data.summary.totalMarketCapGain / 1e9)}B+ in market cap gained. Track who profits from war.`,
  alternates: { canonical: 'https://www.warcosts.org/war-profiteers' },
  openGraph: {
    title: 'War Is Good Business — Defense Stocks Up 30% Since Iran War',
    description: `$258B+ in market cap gained. 15 defense contractors tracked. CEO compensation exposed. The military-industrial complex is having a great war.`,
    url: 'https://www.warcosts.org/war-profiteers',
    type: 'article',
    siteName: 'WarCosts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'War Profiteers: Defense Stocks +30%, S&P 500 -8%',
    description: '$258B in market cap gained in 30 days of war. Track which companies profit from the Iran conflict.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'War Profiteers Stock Tracker — Who\'s Getting Rich from the Iran War',
  description: metadata.description,
  url: 'https://www.warcosts.org/war-profiteers',
  datePublished: '2026-03-29',
  dateModified: data.meta.lastUpdated,
  author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.warcosts.org' },
    { '@type': 'ListItem', position: 2, name: 'War Profiteers', item: 'https://www.warcosts.org/war-profiteers' },
  ],
}

export default function WarProfiteersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <section className="bg-stone-950 border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
          <Breadcrumbs items={[{ label: 'War Profiteers' }]} dark />
          <p className="text-green-400 font-mono text-sm tracking-widest uppercase mb-4">
            Defense Sector +{data.summary.defenseIndexChange}% &nbsp;|&nbsp; S&P 500 {data.summary.sp500Change}%
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            War Is Good <span className="text-green-400">Business</span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Since the Iran War began on February 28, 2026, defense contractor stocks have surged
            an average of <span className="text-green-400 font-bold">+{data.summary.defenseIndexChange}%</span> while
            the S&P 500 has fallen <span className="text-red-400 font-bold">{data.summary.sp500Change}%</span>.
            Over <span className="text-green-400 font-bold">${Math.round(data.summary.totalMarketCapGain / 1e9)}B</span> in
            shareholder value created. In {data.summary.daysOfWar} days.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-stone-900 border border-stone-700 rounded-lg p-4">
              <div className="text-green-400 text-2xl md:text-3xl font-black">${Math.round(data.summary.totalMarketCapGain / 1e9)}B+</div>
              <div className="text-stone-500 text-xs mt-1">Market Cap Gained</div>
            </div>
            <div className="bg-stone-900 border border-stone-700 rounded-lg p-4">
              <div className="text-green-400 text-2xl md:text-3xl font-black">+{data.summary.defenseIndexChange}%</div>
              <div className="text-stone-500 text-xs mt-1">Defense Index</div>
            </div>
            <div className="bg-stone-900 border border-stone-700 rounded-lg p-4">
              <div className="text-red-400 text-2xl md:text-3xl font-black">{data.summary.sp500Change}%</div>
              <div className="text-stone-500 text-xs mt-1">S&P 500</div>
            </div>
            <div className="bg-stone-900 border border-stone-700 rounded-lg p-4">
              <div className="text-red-400 text-2xl md:text-3xl font-black">{data.summary.congressMembersWithHoldings}</div>
              <div className="text-stone-500 text-xs mt-1">Congress Members w/ Holdings</div>
            </div>
          </div>
          <div className="mt-8">
            <ShareButtons title="War Profiteers Stock Tracker" />
          </div>
        </div>
      </section>

      <ProfiteersClient data={data} />

      {/* Historical War Profiteering */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-6">📜 Historical War Profiteering</h2>
        <p className="text-stone-500 mb-6">War profiteering is as old as war itself. Every major US conflict has enriched a connected few at taxpayer expense.</p>
        <div className="space-y-4">
          {[
            { era: 'Civil War (1861–1865)', detail: 'Contractors sold the Union Army cardboard-soled boots, "shoddy" wool uniforms that dissolved in rain, and tainted meat. J.P. Morgan financed the sale of defective rifles to the Army at a 500% markup. Congress investigated but did nothing.', profiteers: 'J.P. Morgan, arms dealers, textile mills' },
            { era: 'World War I (1914–1918)', detail: 'Du Pont\'s profits rose 1,000% making gunpowder. Bethlehem Steel CEO Charles Schwab became one of the richest Americans. The "Merchants of Death" Senate hearings (1934–1936) exposed how arms makers lobbied for war.', profiteers: 'Du Pont, Bethlehem Steel, US Steel' },
            { era: 'World War II (1941–1945)', detail: 'Senator Harry Truman\'s committee found $15 billion in waste and fraud (2024: ~$300B). Standard Oil sold fuel additives to Nazi Germany through intermediaries. IBM\'s German subsidiary provided census technology used to identify Jewish populations.', profiteers: 'Standard Oil, IBM, GM, Ford, ITT' },
            { era: 'Vietnam War (1965–1975)', detail: 'Brown & Root (later KBR/Halliburton) built military bases across Vietnam. Agent Orange manufacturer Dow Chemical earned hundreds of millions. Military spending drove the "guns and butter" inflation crisis.', profiteers: 'Brown & Root, Dow Chemical, Bell Helicopter' },
            { era: 'Iraq War (2003–2011)', detail: 'Halliburton/KBR received $39.5B in Iraq contracts, many no-bid. Blackwater (now Academi) billed $1,222/day per contractor vs. $190/day per soldier. An estimated $60 billion was lost to fraud and waste.', profiteers: 'Halliburton/KBR, Blackwater, CACI, L3 Technologies' },
          ].map(h => (
            <div key={h.era} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
              <h3 className="font-bold text-stone-800 mb-1">{h.era}</h3>
              <p className="text-sm text-stone-700 mb-2">{h.detail}</p>
              <p className="text-xs text-stone-400">Key profiteers: {h.profiteers}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Revolving Door */}
      <section className="max-w-6xl mx-auto px-4 py-12 bg-stone-50">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-6">🚪 The Revolving Door</h2>
        <p className="text-stone-500 mb-6">Pentagon officials leave government to work for the contractors they once oversaw — and vice versa.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-3 pr-4">Name</th>
                <th className="py-3 pr-4">Government Role</th>
                <th className="py-3 pr-4">Industry Role</th>
                <th className="py-3 text-right">Notable</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Lloyd Austin', gov: 'Secretary of Defense (2021–2025)', corp: 'Raytheon Board of Directors', note: 'Oversaw $2B+ in Raytheon contracts' },
                { name: 'Mark Esper', gov: 'Secretary of Defense (2019–2020)', corp: 'Raytheon VP of Gov Relations', note: 'Raytheon lobbyist → ran Pentagon' },
                { name: 'James Mattis', gov: 'Secretary of Defense (2017–2019)', corp: 'General Dynamics Board', note: 'Returned to defense boards after' },
                { name: 'Dick Cheney', gov: 'Secretary of Defense / VP', corp: 'Halliburton CEO (1995–2000)', note: '$39.5B in no-bid Iraq contracts' },
                { name: 'Ash Carter', gov: 'Secretary of Defense (2015–2017)', corp: 'Multiple defense advisory roles', note: 'Created Pentagon’s Silicon Valley outreach' },
              ].map(r => (
                <tr key={r.name} className="border-b border-stone-200 hover:bg-white">
                  <td className="py-3 pr-4 font-medium">{r.name}</td>
                  <td className="py-3 pr-4 text-stone-600">{r.gov}</td>
                  <td className="py-3 pr-4 text-stone-600">{r.corp}</td>
                  <td className="py-3 text-right text-xs text-stone-500">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-mono">645</p>
            <p className="text-xs text-stone-500">Pentagon officials who became defense lobbyists (2019–2023)</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-mono">80%</p>
            <p className="text-xs text-stone-500">of 4-star generals who retire to defense industry jobs</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-mono">1 year</p>
            <p className="text-xs text-stone-500">"cooling off" period before lobbying (often circumvented)</p>
          </div>
        </div>
      </section>

      {/* Lobbying */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-6">💵 Defense Lobbying Spending</h2>
        <p className="text-stone-500 mb-6">The defense industry spends more on lobbying than almost any other sector, ensuring contracts keep flowing.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-3 pr-4">Company</th>
                <th className="py-3 pr-4 text-right">Annual Lobbying</th>
                <th className="py-3 pr-4 text-right">Campaign Contributions (2024)</th>
                <th className="py-3 text-right">DoD Contract Revenue</th>
              </tr>
            </thead>
            <tbody>
              {[
                { co: 'Lockheed Martin', lobby: '$12.5M', contrib: '$8.2M', contracts: '$75.0B' },
                { co: 'RTX (Raytheon)', lobby: '$10.8M', contrib: '$6.4M', contracts: '$27.4B' },
                { co: 'Boeing', lobby: '$12.3M', contrib: '$5.9M', contracts: '$24.8B' },
                { co: 'Northrop Grumman', lobby: '$11.2M', contrib: '$5.1M', contracts: '$20.2B' },
                { co: 'General Dynamics', lobby: '$9.7M', contrib: '$4.8M', contracts: '$18.6B' },
              ].map(r => (
                <tr key={r.co} className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="py-3 pr-4 font-medium">{r.co}</td>
                  <td className="py-3 pr-4 text-right font-mono text-green-700">{r.lobby}</td>
                  <td className="py-3 pr-4 text-right font-mono text-green-700">{r.contrib}</td>
                  <td className="py-3 text-right font-mono font-bold">{r.contracts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400 mt-2">Sources: OpenSecrets, BGOV, DoD FPDS. ROI on lobbying estimated at 100:1 or higher.</p>
      </section>

      {/* Stock Performance */}
      <section className="max-w-6xl mx-auto px-4 py-12 bg-stone-50">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-6">📈 Defense Stocks During Past Wars</h2>
        <p className="text-stone-500 mb-6">Defense contractors outperform the market during every major conflict. War is the ultimate bull catalyst.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { war: 'Gulf War (1990–1991)', stock: 'General Dynamics +35%', market: 'S&P 500 +7%', note: 'Patriot missile success drove Raytheon orders' },
            { war: 'Afghanistan/Iraq (2001–2011)', stock: 'Lockheed Martin +410%', market: 'S&P 500 +14%', note: 'Decade-long war spending boom' },
            { war: 'ISIS Campaign (2014–2019)', stock: 'Northrop Grumman +180%', market: 'S&P 500 +52%', note: 'Drone and surveillance spending surged' },
            { war: 'Ukraine War (2022–2025)', stock: 'Rheinmetall +650%', market: 'S&P 500 +24%', note: 'European rearmament frenzy' },
          ].map(w => (
            <div key={w.war} className="bg-white border border-stone-200 rounded-xl p-5">
              <h3 className="font-bold text-stone-800 mb-1">{w.war}</h3>
              <p className="text-green-600 font-mono font-bold">{w.stock}</p>
              <p className="text-stone-500 font-mono text-sm">{w.market}</p>
              <p className="text-xs text-stone-400 mt-1">{w.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Congressional Holdings */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-6">🏦 Congress Members Trading Defense Stocks</h2>
        <p className="text-stone-500 mb-4">Members of Congress who sit on Armed Services and Appropriations committees — and vote on defense budgets — simultaneously hold and trade defense stocks.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-mono">{data.summary.congressMembersWithHoldings}</p>
            <p className="text-xs text-stone-500">Members with defense holdings</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-600 font-mono">$45M+</p>
            <p className="text-xs text-stone-500">Estimated holdings value</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-mono">67%</p>
            <p className="text-xs text-stone-500">Armed Services members with holdings</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-mono">$0</p>
            <p className="text-xs text-stone-500">STOCK Act enforcement fines collected</p>
          </div>
        </div>
        <p className="text-xs text-stone-400">The STOCK Act (2012) requires disclosure of trades but has resulted in zero meaningful enforcement. Members routinely file late or not at all.</p>
      </section>

      <FaqJsonLd faqs={[
        { q: 'Which companies profit most from war?', a: 'The top 5 US defense contractors — Lockheed Martin, RTX (Raytheon), Boeing, Northrop Grumman, and General Dynamics — receive over $165 billion annually in DoD contracts.' },
        { q: 'Do defense stocks go up during wars?', a: 'Yes. Defense stocks consistently outperform the broader market during wartime. Lockheed Martin rose 410% during the Afghanistan/Iraq wars while the S&P 500 gained just 14%.' },
        { q: 'What is the revolving door between the Pentagon and defense industry?', a: 'Over 80% of retiring 4-star generals take jobs in the defense industry. 645 Pentagon officials became defense lobbyists between 2019 and 2023. Former defense secretaries regularly serve on contractor boards.' },
        { q: 'How much do defense companies spend on lobbying?', a: 'The top 5 defense contractors spend over $56 million annually on lobbying and $30+ million on campaign contributions, ensuring continued government contracts worth hundreds of billions.' },
      ]} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <BackToTop />
      </div>
    </>
  )
}
