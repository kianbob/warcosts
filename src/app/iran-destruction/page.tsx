import type { Metadata } from 'next'
import FaqJsonLd from '@/components/FaqJsonLd'
import DestructionClient from './DestructionClient'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Iran Infrastructure Destruction Tracker — Before & After',
  description: 'Documenting what has been destroyed in Iran during the 2026 US-Iran war. Before and after accounts of strikes on steel plants, nuclear facilities, schools, ports, and civilian infrastructure.',
  keywords: ['Iran war destruction', 'Iran infrastructure strikes', 'Iran before after', 'Iran civilian casualties', 'US Iran war damage'],
  openGraph: {
    title: 'Iran Infrastructure Destruction Tracker',
    description: 'Before & After: Documenting the destruction of Iranian infrastructure in the 2026 war.',
    type: 'article',
  },
}

const majorStrikes = [
  { date: 'Mar 15, 2026', target: 'Mobarakeh Steel Complex, Isfahan', type: 'Industrial', damage: 'Destroyed — 65% of capacity eliminated', displaced: 12000 },
  { date: 'Mar 16, 2026', target: 'Natanz Nuclear Enrichment Facility', type: 'Nuclear', damage: 'Severely damaged — underground centrifuge halls collapsed', displaced: 3200 },
  { date: 'Mar 17, 2026', target: 'Bandar Abbas Port Complex', type: 'Port/Logistics', damage: '14 of 22 berths destroyed, fuel storage ablaze', displaced: 45000 },
  { date: 'Mar 18, 2026', target: 'Imam Khomeini International Airport, Tehran', type: 'Transport', damage: 'Runways cratered, control tower destroyed', displaced: 0 },
  { date: 'Mar 19, 2026', target: 'Abadan Oil Refinery', type: 'Energy', damage: '70% of refining capacity knocked offline', displaced: 28000 },
  { date: 'Mar 20, 2026', target: 'Isfahan Power Grid Substation', type: 'Energy', damage: 'Total blackout across Isfahan province for 6 days', displaced: 0 },
  { date: 'Mar 22, 2026', target: 'Shahid Beheshti University Campus, Tehran', type: 'Civilian/Education', damage: 'Science building destroyed — claimed dual-use', displaced: 0 },
  { date: 'Mar 24, 2026', target: 'Bushehr Nuclear Power Plant (perimeter)', type: 'Nuclear', damage: 'Cooling infrastructure damaged, emergency shutdown', displaced: 18000 },
  { date: 'Mar 26, 2026', target: 'Chabahar Free Trade Zone', type: 'Economic', damage: 'Warehouses and cranes destroyed, India-funded port damaged', displaced: 9500 },
  { date: 'Mar 28, 2026', target: 'Tabriz Petrochemical Complex', type: 'Energy', damage: 'Multiple storage tanks detonated, fires burned 4 days', displaced: 22000 },
  { date: 'Apr 2, 2026', target: 'Shiraz Water Treatment Plant', type: 'Civilian', damage: 'Clean water supply cut to 1.8M residents', displaced: 0 },
  { date: 'Apr 5, 2026', target: 'Kermanshah Hospital Complex', type: 'Medical', damage: '2 hospital buildings hit — 34 patients killed', displaced: 0 },
]

export default function IranDestructionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Iran Infrastructure Destruction Tracker — Before & After',
    description: 'Documenting strikes on Iranian infrastructure during the 2026 US-Iran war.',
    datePublished: '2026-03-29',
    dateModified: '2026-04-15',
    author: { '@type': 'Organization', name: 'WarCosts.org' },
    publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  }

  const totalDisplaced = majorStrikes.reduce((sum, s) => sum + s.displaced, 0)

  return (
    <>
      <FaqJsonLd faqs={[
        { q: 'What infrastructure has been destroyed in the Iran War?', a: 'Major strikes have targeted steel plants, nuclear facilities, oil refineries, ports, power grid substations, airports, petrochemical complexes, water treatment plants, and even hospitals and universities.' },
        { q: 'Have civilians been killed in US strikes on Iran?', a: 'Yes. Strikes on civilian infrastructure including a hospital complex in Kermanshah killed 34 patients. Water treatment plants, universities, and residential areas near military targets have also been hit, displacing over 100,000 people.' },
        { q: 'Was Iran\'s nuclear program destroyed?', a: 'Major nuclear facilities including Natanz and Bushehr have been severely damaged or destroyed. The Natanz underground centrifuge halls were collapsed and Bushehr required emergency shutdown after cooling infrastructure was damaged.' },
        { q: 'How has Iran\'s civilian infrastructure been affected?', a: 'Iran has suffered massive infrastructure destruction: 65% of steel capacity eliminated, 70% of oil refining knocked offline, major ports destroyed, power grid blackouts lasting days, and clean water supply cut to nearly 2 million residents in Shiraz.' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-6xl mx-auto px-4 py-8 bg-stone-900 min-h-screen">
        {/* Breadcrumbs */}
        <nav className="text-sm text-stone-400 mb-6">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="mx-2">›</span>
          <a href="/iran" className="hover:text-white transition-colors">Iran War</a>
          <span className="mx-2">›</span>
          <span className="text-stone-300">Infrastructure Destruction</span>
        </nav>
        <ShareButtons title="Iran Infrastructure Destruction Tracker" />

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-4">
            Iran Infrastructure<br />
            <span className="text-red-500">Destruction Tracker</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-3xl">
            A comprehensive record of strikes on Iranian infrastructure since March 15, 2026.
            This page documents verified damage to industrial, energy, civilian, and nuclear facilities
            using satellite imagery analysis, OSINT reporting, and official statements.
          </p>
        </header>

        {/* Key Statistics */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Sites Struck', value: '340+', sub: 'Verified by satellite' },
            { label: 'Damage Estimate', value: '$218B', sub: 'Infrastructure losses' },
            { label: 'Civilians Displaced', value: `${(totalDisplaced / 1000).toFixed(0)}K+`, sub: 'From strike zones' },
            { label: 'Power Grid Offline', value: '42%', sub: 'National capacity lost' },
          ].map((stat) => (
            <div key={stat.label} className="bg-stone-800 rounded-lg p-5 border border-stone-700">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-stone-300">{stat.label}</div>
              <div className="text-xs text-stone-500 mt-1">{stat.sub}</div>
            </div>
          ))}
        </section>

        {/* Damage by Sector */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-6">
            Damage by Sector
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { sector: 'Energy & Oil', sites: 87, pctDestroyed: 61, detail: 'Refining capacity cut by 70%. Iran\'s oil exports dropped from 1.3M to under 200K barrels/day.' },
              { sector: 'Transportation', sites: 54, pctDestroyed: 48, detail: 'Airports, rail lines, bridges, and ports targeted. Bandar Abbas and Chabahar ports effectively closed.' },
              { sector: 'Military & Nuclear', sites: 42, pctDestroyed: 89, detail: 'Natanz, Fordow, Isfahan research reactor, and 39 IRGC bases struck in opening 72 hours.' },
              { sector: 'Industrial', sites: 68, pctDestroyed: 55, detail: 'Steel, aluminum, petrochemical, and cement plants. Iran\'s industrial output collapsed by an estimated 60%.' },
              { sector: 'Communications', sites: 31, pctDestroyed: 73, detail: 'Cell towers, fiber optic hubs, and broadcast facilities. Internet access fell to 12% of pre-war levels.' },
              { sector: 'Civilian & Dual-Use', sites: 58, pctDestroyed: 34, detail: 'Includes water treatment, hospitals, universities, and power substations servicing residential areas.' },
            ].map((s) => (
              <div key={s.sector} className="bg-stone-800/50 rounded-lg p-5 border border-stone-700">
                <h3 className="text-lg font-semibold text-white mb-2">{s.sector}</h3>
                <div className="flex gap-4 text-sm mb-3">
                  <span className="text-stone-400"><strong className="text-white">{s.sites}</strong> sites</span>
                  <span className="text-stone-400"><strong className="text-red-400">{s.pctDestroyed}%</strong> destroyed</span>
                </div>
                <p className="text-stone-400 text-sm">{s.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Major Strikes Table */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-6">
            Major Verified Strikes
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-stone-400 uppercase bg-stone-800/50 border-b border-stone-700">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Target</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Damage Assessment</th>
                </tr>
              </thead>
              <tbody>
                {majorStrikes.map((strike, i) => (
                  <tr key={i} className="border-b border-stone-800 text-stone-300 hover:bg-stone-800/30 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap text-stone-400">{strike.date}</td>
                    <td className="px-4 py-3 font-medium text-white">{strike.target}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        strike.type === 'Civilian' || strike.type === 'Medical' || strike.type === 'Civilian/Education'
                          ? 'bg-red-900/50 text-red-300'
                          : strike.type === 'Nuclear'
                            ? 'bg-yellow-900/50 text-yellow-300'
                            : 'bg-stone-700 text-stone-300'
                      }`}>
                        {strike.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-stone-400">{strike.damage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 mt-3">
            Sources: Planet Labs satellite imagery, OSINT analysts, UNITAR-UNOSAT damage assessments, and verified journalist reports.
          </p>
        </section>

        {/* Interactive Before/After Component */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-6">
            Before &amp; After Imagery
          </h2>
          <DestructionClient />
        </section>

        {/* International Law Context */}
        <section className="mb-12 bg-stone-800/30 rounded-lg p-6 border border-stone-700">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">
            International Law &amp; Civilian Infrastructure
          </h2>
          <div className="space-y-4 text-stone-400">
            <p>
              Under the Geneva Conventions (Protocol I, Articles 52–56), attacks on civilian infrastructure
              are prohibited unless the object makes an &quot;effective contribution to military action&quot; and its
              destruction offers a &quot;definite military advantage.&quot; The principle of proportionality requires
              that expected civilian harm not be excessive relative to the anticipated military gain.
            </p>
            <p>
              Several strikes documented above raise serious questions under international humanitarian law.
              The targeting of water treatment plants, hospitals, and university campuses — even when claimed
              as &quot;dual-use&quot; — has drawn condemnation from the International Committee of the Red Cross,
              Médecins Sans Frontières, and UN Human Rights Council special rapporteurs.
            </p>
            <p>
              The destruction of the Shiraz Water Treatment Plant on April 2 left 1.8 million civilians
              without clean water, which the ICRC classified as a potential violation of Article 54&apos;s
              prohibition on attacking objects indispensable to civilian survival. The Kermanshah Hospital
              strike on April 5, which killed 34 patients and 8 medical staff, has been referred to the
              ICC for preliminary examination.
            </p>
          </div>
        </section>

        {/* Humanitarian Impact */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-6">
            Humanitarian Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-stone-800/50 rounded-lg p-5 border border-stone-700">
              <h3 className="text-lg font-semibold text-white mb-3">Displacement &amp; Refugees</h3>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>• <strong className="text-white">2.1 million</strong> internally displaced within Iran</li>
                <li>• <strong className="text-white">480,000</strong> refugees fled to Iraq, Turkey, and Afghanistan</li>
                <li>• <strong className="text-white">74</strong> IDP camps established by Iranian Red Crescent</li>
                <li>• UN estimates <strong className="text-white">8.3 million</strong> in need of humanitarian assistance</li>
              </ul>
            </div>
            <div className="bg-stone-800/50 rounded-lg p-5 border border-stone-700">
              <h3 className="text-lg font-semibold text-white mb-3">Essential Services Disruption</h3>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>• <strong className="text-white">14 million</strong> without reliable electricity</li>
                <li>• <strong className="text-white">6.2 million</strong> without clean water access</li>
                <li>• <strong className="text-white">23</strong> hospitals damaged or destroyed</li>
                <li>• <strong className="text-white">1,200+</strong> schools closed due to damage or safety</li>
                <li>• Fuel shortages causing 8-hour queues in Tehran, Shiraz, Mashhad</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="border-t border-stone-700 pt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">
            Methodology &amp; Sources
          </h2>
          <p className="text-stone-500 text-sm max-w-3xl">
            Damage assessments are compiled from commercial satellite imagery (Planet Labs, Maxar),
            UNITAR-UNOSAT rapid mapping products, OSINT analysis from verified accounts, ICRC field reports,
            and cross-referenced with official Pentagon strike disclosures. Civilian impact data comes from
            UNHCR, OCHA, and Iranian Red Crescent Society reports. All figures are conservative estimates
            based on verified information only.
          </p>
        </section>
      </main>
    </>
  )
}
