import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { loadData } from '@/lib/server-utils'
import { fmt, fmtMoney } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Base Nation: Why Does America Have 750 Military Bases Overseas?',
  description: '750+ overseas bases in 80+ countries. $55B+/year. No other country has more than 30. The story of America\'s global military empire — from Okinawa to Diego Garcia.',
  openGraph: {
    title: 'Base Nation: Why Does America Have 750 Military Bases Overseas?',
    description: '750+ bases in 80+ countries. $55B/year. The largest military footprint in human history.',
    url: 'https://www.warcosts.org/analysis/base-nation',
  },
}

export function generateStaticParams() {
  return []
}

export default function BaseNationPage() {
  const baseStats = loadData('base-stats.json')
  const baseCountries = loadData('base-countries.json') as any[]

  const overseasCountries = baseCountries.filter((c: any) => c.country !== 'United States' && c.total > 0)
  const topCountries = overseasCountries.sort((a: any, b: any) => b.total - a.total).slice(0, 15)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Base Nation' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
        Base Nation: Why Does America Have 750 Military Bases <span className="text-red-400">Overseas?</span>
      </h1>

      <p className="text-stone-300 text-lg mb-8 max-w-3xl">
        The United States maintains at least {fmt(baseStats.overseasBases)} military bases and installations in {fmt(overseasCountries.length)}+ countries
        and territories — plus {fmt(baseStats.lilyPads)} &quot;lily pad&quot; sites and {fmt(baseStats.usFunded)} US-funded facilities. No other country has more
        than about 30 overseas bases. The entire history of the world has never seen anything like it.
      </p>

      <ShareButtons title="Base Nation: Why Does America Have 750 Military Bases Overseas?" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
        {[
          { label: 'Overseas Bases', value: fmt(baseStats.overseasBases), color: 'text-red-400' },
          { label: 'Countries/Territories', value: `${overseasCountries.length}+`, color: 'text-red-400' },
          { label: 'Annual Cost', value: '$55B+', color: 'text-red-400' },
          { label: 'Total Installations', value: fmt(baseStats.totalBases), color: 'text-red-400' },
        ].map(s => (
          <div key={s.label} className="bg-slate-800 border border-stone-700 rounded-xl p-4 text-center">
            <div className={`font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-stone-400 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Context */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          An Empire in All But <span className="text-red-400">Name</span>
        </h2>

        <p className="text-stone-300 mb-4">
          Americans don&apos;t think of their country as an empire. But if you define empire by the ability to project
          military force across the globe and maintain a permanent presence in sovereign nations, the United States
          is the most far-reaching empire in human history.
        </p>

        <div className="bg-slate-800 border border-stone-700 rounded-xl p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-white">For Comparison</h3>
          <div className="space-y-2 text-stone-300 text-sm">
            <div className="flex justify-between"><span>🇺🇸 United States</span><span className="text-red-400 font-bold">{fmt(baseStats.overseasBases)}+ overseas bases</span></div>
            <div className="flex justify-between"><span>🇬🇧 United Kingdom</span><span className="text-white font-bold">~16 overseas bases</span></div>
            <div className="flex justify-between"><span>🇷🇺 Russia</span><span className="text-white font-bold">~12 overseas bases</span></div>
            <div className="flex justify-between"><span>🇫🇷 France</span><span className="text-white font-bold">~11 overseas bases</span></div>
            <div className="flex justify-between"><span>🇨🇳 China</span><span className="text-white font-bold">~5 overseas bases</span></div>
            <div className="flex justify-between"><span>All other countries combined</span><span className="text-white font-bold">~70 overseas bases</span></div>
          </div>
        </div>

        <p className="text-stone-300 mb-4">
          David Vine, a professor of anthropology at American University and author of <em>Base Nation</em>, spent years
          documenting this network. His research reveals a system that few Americans know exists, fewer understand,
          and almost no one has voted for.
        </p>
      </section>

      {/* Top countries */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          Where the Bases <span className="text-red-400">Are</span>
        </h2>

        <div className="space-y-3">
          {topCountries.map((c: any) => {
            const maxBases = topCountries[0].total
            return (
              <div key={c.slug} className="bg-slate-800 border border-stone-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <Link href={`/bases/countries`} className="text-white font-medium hover:text-red-400 transition">
                    {c.country}
                  </Link>
                  <span className="text-red-400 font-mono font-bold">{c.total} installations</span>
                </div>
                <div className="h-2 bg-stone-700 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 rounded-full" style={{ width: `${(c.total / maxBases) * 100}%` }} />
                </div>
                <div className="flex gap-3 mt-1 text-xs text-stone-500">
                  {c.bases > 0 && <span>Bases: {c.bases}</span>}
                  {c.lilyPads > 0 && <span>Lily pads: {c.lilyPads}</span>}
                  {c.usFunded > 0 && <span>US-funded: {c.usFunded}</span>}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* The Cost */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          The <span className="text-red-400">$55 Billion</span> Question
        </h2>

        <p className="text-stone-300 mb-4">
          The Pentagon&apos;s own estimates put the annual cost of overseas bases at roughly $55 billion — though Vine&apos;s
          research suggests the true figure is significantly higher when accounting for construction, personnel,
          environmental remediation, and indirect costs. Some estimates range as high as $100-150 billion.
        </p>

        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-white">What $55 Billion Could Buy Instead</h3>
          <ul className="space-y-2 text-stone-300 text-sm">
            <li>• <strong className="text-white">Free college tuition</strong> for 7.3 million students per year</li>
            <li>• <strong className="text-white">770,000 new teachers</strong> hired annually</li>
            <li>• <strong className="text-white">2.75 million affordable housing units</strong> built every decade</li>
            <li>• <strong className="text-white">Clean drinking water</strong> for every American without it — 5 times over</li>
            <li>• <strong className="text-white">Universal pre-K</strong> for every 3- and 4-year-old — and still have $25B left</li>
          </ul>
        </div>
      </section>

      {/* Okinawa */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          Okinawa: <span className="text-red-400">75 Years</span> of Occupation
        </h2>

        <p className="text-stone-300 mb-4">
          Japan hosts more US military installations than any other country — {topCountries.find((c: any) => c.slug === 'japan')?.total || 87} in total.
          The vast majority are concentrated on Okinawa, a tiny island chain that represents just <strong className="text-white">0.6% of
          Japan&apos;s total land area</strong> but hosts approximately <strong className="text-white">75% of all US military
          facilities in Japan</strong>.
        </p>

        <p className="text-stone-300 mb-4">
          For Okinawans, the US military presence is not an abstraction. It means:
        </p>

        <ul className="space-y-2 text-stone-300 mb-6">
          <li>• <strong className="text-white">Aircraft noise</strong> from Futenma air station in the middle of Ginowan city (population 100,000)</li>
          <li>• <strong className="text-white">Environmental contamination</strong> — PFAS chemicals found in drinking water at 50× safe levels</li>
          <li>• <strong className="text-white">Sexual assault</strong> — the 1995 rape of a 12-year-old girl by three US servicemen sparked massive protests; incidents have continued</li>
          <li>• <strong className="text-white">Crashes and accidents</strong> — Osprey crashes, helicopter parts falling on schools</li>
          <li>• <strong className="text-white">Land confiscation</strong> — bases built on seized farmland after WWII, never returned</li>
        </ul>

        <p className="text-stone-300 mb-4">
          Despite consistent polling showing a majority of Okinawans want the bases reduced or removed — including a
          2019 referendum where <strong className="text-white">72% voted against</strong> new base construction — the US
          and Japanese governments have proceeded with building a new base at Henoko, destroying a pristine coral reef
          in the process.
        </p>
      </section>

      {/* Diego Garcia */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          Diego Garcia: <span className="text-red-400">Ethnic Cleansing</span> for a Military Base
        </h2>

        <p className="text-stone-300 mb-4">
          In the late 1960s and early 1970s, the United States and United Kingdom carried out one of the most cynical
          acts of the Cold War: the complete depopulation of the Chagos Archipelago in the Indian Ocean to make room
          for a military base.
        </p>

        <p className="text-stone-300 mb-4">
          The <strong className="text-white">Chagossians</strong> — roughly 2,000 people who had lived on the islands for
          generations — were forcibly removed. Their dogs were gassed. Their homes were demolished. They were dumped in
          Mauritius and the Seychelles, where many lived in poverty.
        </p>

        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
          <p className="text-red-300 text-lg italic">
            &quot;They put us on a boat and took us to Mauritius. We had nothing. No money, no house, no job. We were
            thrown away like animals. They wanted the island for their planes and ships, and we were in the way.&quot;
          </p>
          <p className="text-stone-400 text-sm mt-2">— Liseby Elyse, Chagossian exile</p>
        </div>

        <p className="text-stone-300 mb-4">
          Today, Diego Garcia hosts a massive US naval and air base used for bomber operations across the Middle East,
          CIA rendition flights, and surveillance. In 2019, the International Court of Justice ruled the UK&apos;s
          continued control of the Chagos Islands illegal. The UN General Assembly voted 116-6 demanding decolonization.
          The US and UK have ignored the ruling.
        </p>
      </section>

      {/* Environmental damage */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          Environmental <span className="text-red-400">Destruction</span>: The Pentagon as Global Polluter
        </h2>

        <p className="text-stone-300 mb-4">
          The Pentagon is the single largest institutional consumer of fossil fuels in the world, burning through
          approximately 350,000 barrels of oil per day — more than most countries. US military bases are among 
          the worst polluters on the planet, leaving behind contaminated soil, poisoned water, and toxic air 
          in communities around the world.
        </p>

        <p className="text-stone-300 mb-4">
          Under Status of Forces Agreements (SOFAs), the US typically avoids liability for environmental cleanup.
          When bases close, contaminated land is often returned to host nations without remediation — a form of
          environmental colonialism that dumps the long-term costs on the very communities harmed by US operations.
        </p>

        {/* Environmental Cases */}
        <div className="space-y-6 my-8">
          <div className="bg-slate-800 border border-stone-700 rounded-xl p-6">
            <h3 className="font-bold text-white mb-3 text-lg">🧪 PFAS Contamination: "Forever Chemicals" Worldwide</h3>
            <p className="text-stone-300 text-sm mb-3">
              Per- and polyfluoroalkyl substances (PFAS) from military firefighting foam have contaminated drinking 
              water at over 400 US military installations worldwide. These "forever chemicals" don't break down 
              naturally and are linked to cancer, thyroid disease, liver damage, and developmental problems.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Contaminated Locations</h4>
                <ul className="text-stone-400 text-xs space-y-1">
                  <li>• Kadena Air Base, Okinawa: PFAS levels 50× safe levels in local water</li>
                  <li>• Ramstein Air Base, Germany: 6,500 residents on bottled water since 2021</li>
                  <li>• Naval Air Station Fallon, Nevada: PFAS in breast milk of base families</li>
                  <li>• Yokota Air Base, Japan: Water wells closed after contamination discovered</li>
                  <li>• Andersen AFB, Guam: PFAS leaching into Guam's sole-source aquifer</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Health Impact</h4>
                <ul className="text-stone-400 text-xs space-y-1">
                  <li>• Kidney and testicular cancer rates elevated near bases</li>
                  <li>• Thyroid disease in military families 3× national average</li>
                  <li>• Pregnancy complications and low birth weights</li>
                  <li>• Liver damage and elevated cholesterol</li>
                  <li>• Compromised immune system response</li>
                </ul>
              </div>
            </div>
            <p className="text-red-400 text-xs mt-3">
              <strong>Pentagon Response:</strong> Spent $2B+ on studies, $200M+ on water filters, $0 on community healthcare for affected populations.
            </p>
          </div>

          <div className="bg-slate-800 border border-stone-700 rounded-xl p-6">
            <h3 className="font-bold text-white mb-3 text-lg">⛽ Red Hill: Poisoning Pearl Harbor</h3>
            <p className="text-stone-300 text-sm mb-3">
              The Red Hill Underground Fuel Storage Facility in Hawaii — built during WWII — stores 250 million
              gallons of jet fuel in 20 massive underground tanks just 100 feet above Oahu's main aquifer.
            </p>
            <div className="space-y-3">
              <div className="bg-slate-800 border border-slate-700 rounded p-3">
                <h4 className="text-red-400 font-semibold text-sm mb-1">November 2021 Crisis</h4>
                <p className="text-stone-300 text-xs">
                  Jet fuel leaked into Navy water system serving 93,000+ people. Families reported symptoms:
                  nausea, vomiting, diarrhea, skin rashes. Military families fled base housing. Navy initially 
                  denied the problem, then claimed water was "safe to drink."
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">By the Numbers</h4>
                  <ul className="text-stone-400 text-xs space-y-1">
                    <li>• 19,000 gallons of fuel leaked (confirmed)</li>
                    <li>• 93,000+ people affected</li>
                    <li>• 4,000 military families relocated</li>
                    <li>• $1.2B+ estimated cleanup cost</li>
                    <li>• 80+ years of operation with no leak monitoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Health Reports</h4>
                  <ul className="text-stone-400 text-xs space-y-1">
                    <li>• 6,000+ people sought medical care</li>
                    <li>• Miscarriages reported by military spouses</li>
                    <li>• Children hospitalized with respiratory issues</li>
                    <li>• Pets became sick, some died</li>
                    <li>• Long-term health impacts unknown</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-red-400 text-xs mt-3">
              <strong>Outcome:</strong> Hawaii forced Navy to close Red Hill in 2024. Defueling expected to take years, cleanup decades.
            </p>
          </div>

          <div className="bg-slate-800 border border-stone-700 rounded-xl p-6">
            <h3 className="font-bold text-white mb-3 text-lg">☢️ Vieques: 60 Years of Bombing Practice</h3>
            <p className="text-stone-300 text-sm mb-3">
              The US Navy used Vieques, Puerto Rico as a bombing range from 1941-2003, dropping an estimated
              22 million pounds of ordnance on the island. The environmental and health legacy persists today.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Environmental Damage</h4>
                <ul className="text-stone-400 text-xs space-y-1">
                  <li>• 900+ tons of unexploded ordnance still buried</li>
                  <li>• Heavy metals in soil exceed EPA limits by 10×</li>
                  <li>• Agent Orange and depleted uranium residue</li>
                  <li>• Coral reefs damaged by ship-to-shore bombardment</li>
                  <li>• 14,000 acres still off-limits due to contamination</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Health Impact</h4>
                <ul className="text-stone-400 text-xs space-y-1">
                  <li>• Cancer rate 27% higher than mainland Puerto Rico</li>
                  <li>• Respiratory diseases 300% above PR average</li>
                  <li>• Birth defects and developmental delays</li>
                  <li>• Fishermen report deformed catch</li>
                  <li>• $100M+ in health damages (Harvard study)</li>
                </ul>
              </div>
            </div>
            <p className="text-red-400 text-xs mt-3">
              <strong>Navy cleanup:</strong> $1.8B spent since 2003. EPA estimates cleanup will take 30+ more years at current pace.
            </p>
          </div>

          <div className="bg-slate-800 border border-stone-700 rounded-xl p-6">
            <h3 className="font-bold text-white mb-3 text-lg">🧪 Agent Orange: Chemical Weapons Storage</h3>
            <p className="text-stone-300 text-sm mb-3">
              Agent Orange and other herbicides weren't just used in Vietnam. They were stored, tested, and 
              leaked at US bases worldwide, creating health crises that persist 50+ years later.
            </p>
            <div className="space-y-3">
              <div className="grid md:grid-cols-3 gap-3">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Okinawa</h4>
                  <p className="text-stone-400 text-xs">
                    25,000+ barrels buried on Kadena AB. Dioxin levels 280× WHO safety limits. 
                    Birth defects 2.5× Japan average in affected areas.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Korea</h4>
                  <p className="text-stone-400 text-xs">
                    Camp Carroll: 250 barrels dumped in 1970s. Local farmers' cancer rates elevated.
                    Groundwater contamination spread to 3 villages.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Guam</h4>
                  <p className="text-stone-400 text-xs">
                    Andersen AFB herbicide storage. Soil contamination in surrounding villages.
                    Chamorro people: diabetes and cancer rates among world's highest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
          <h3 className="text-red-400 font-bold text-lg mb-3">The Pentagon's Environmental Get-Out-of-Jail-Free Card</h3>
          <p className="text-stone-300 text-sm mb-3">
            Status of Forces Agreements (SOFAs) typically include environmental liability waivers that protect 
            the US from cleanup costs. Even when contamination is proven, the Pentagon rarely pays:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Standard SOFA Language</h4>
              <ul className="text-stone-400 text-xs space-y-1">
                <li>• "US not liable for pre-existing contamination"</li>
                <li>• "Host nation assumes cleanup responsibility"</li>
                <li>• "Environmental standards: US military discretion"</li>
                <li>• "No third-party damage claims allowed"</li>
                <li>• "Classified activities exempt from oversight"</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Real-World Results</h4>
              <ul className="text-stone-400 text-xs space-y-1">
                <li>• Clark AB, Philippines: $2B contamination, $0 US payment</li>
                <li>• Subic Bay: Agent Orange, no US liability accepted</li>
                <li>• Germany: 2,000+ contaminated sites, minimal US contribution</li>
                <li>• South Korea: $9B+ in environmental damage claims pending</li>
                <li>• Okinawa: Cancer clusters, US denies connection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sexual Violence and Impunity */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          Sexual Violence and <span className="text-red-400">Legal Impunity</span>
        </h2>

        <p className="text-stone-300 mb-4">
          US military personnel accused of crimes abroad are often protected by SOFAs that grant the US 
          primary jurisdiction over its troops. The result: a two-tier justice system where American 
          servicemembers escape accountability for crimes against local populations.
        </p>

        <div className="space-y-6 my-8">
          <div className="bg-slate-800 border border-stone-700 rounded-xl p-6">
            <h3 className="font-bold text-white mb-3 text-lg">🔍 Okinawa: Decades of Violence, Minimal Justice</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="text-white font-bold mb-1">September 1995: The Rape That Changed Everything</h4>
                <p className="text-stone-300 text-sm mb-2">
                  Three US servicemen kidnapped and gang-raped a 12-year-old Okinawan girl. The crime sparked 
                  massive protests — 85,000 people demanded base closures. It was a turning point in 
                  Okinawan consciousness about the US presence.
                </p>
                <p className="text-stone-400 text-xs">
                  <strong>US Response:</strong> Initially refused to hand over suspects. Later agreed to 
                  limited transfers to Japanese custody. Sentences: 6.5-7 years (served 3-4 years each).
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Documented Cases (1995-2024)</h4>
                  <ul className="text-stone-400 text-xs space-y-1">
                    <li>• 2008: US marine raped 14-year-old girl</li>
                    <li>• 2012: Two marines gang-raped woman</li>
                    <li>• 2016: Civilian contractor murdered 20-year-old woman</li>
                    <li>• 2017: Marine arrested for rape and assault</li>
                    <li>• 2021: Sexual assault near Kadena Air Base</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Pattern of Impunity</h4>
                  <ul className="text-stone-400 text-xs space-y-1">
                    <li>• Most cases tried in US military courts</li>
                    <li>• Sentences typically lighter than Japanese law</li>
                    <li>• Many suspects transferred back to US before trial</li>
                    <li>• Victims often not consulted on jurisdiction</li>
                    <li>• No comprehensive database of incidents maintained</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-stone-700 rounded-xl p-6">
            <h3 className="font-bold text-white mb-3 text-lg">📊 Global Pattern: Crime Without Consequence</h3>
            <p className="text-stone-300 text-sm mb-3">
              Sexual violence by US military personnel is documented worldwide, but prosecutions are rare 
              and convictions rarer still. SOFAs typically grant the US primary jurisdiction, meaning 
              crimes are investigated by the military itself.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-white font-semibold text-sm mb-2">South Korea</h4>
                <ul className="text-stone-400 text-xs space-y-1">
                  <li>• 2002: GI murdered woman near Camp Casey</li>
                  <li>• 2011: Soldier stabbed Korean woman 7 times</li>
                  <li>• 2019: Sexual assault case at Osan AB</li>
                  <li>• Pattern: transferred to US before prosecution</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-2">Italy</h4>
                <ul className="text-stone-400 text-xs space-y-1">
                  <li>• 1998: EA-6B Prowler cut cable car line (20 dead)</li>
                  <li>• 2016: Sailor accused of rape in Naples</li>
                  <li>• Multiple incidents at Vicenza, Aviano</li>
                  <li>• Italian courts rarely get jurisdiction</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-2">Philippines</h4>
                <ul className="text-stone-400 text-xs space-y-1">
                  <li>• 2005: Four marines raped Filipino transgender woman</li>
                  <li>• 2014: USS Guardian destroyed protected coral reef</li>
                  <li>• VFA grants US custody over accused personnel</li>
                  <li>• Victims' families denied legal recourse</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why so many? */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          Why So Many <span className="text-red-400">Bases?</span>
        </h2>

        <p className="text-stone-300 mb-4">
          The standard justification is &quot;force projection&quot; — the ability to respond quickly to threats anywhere in the
          world. But Vine&apos;s research reveals more prosaic reasons:
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-slate-800 border border-stone-700 rounded-xl p-5">
            <h3 className="font-bold text-white mb-2">🏛️ Bureaucratic Inertia</h3>
            <p className="text-stone-300 text-sm">Once built, bases are nearly impossible to close. The BRAC (Base Realignment and Closure) process is so politically toxic that Congress hasn&apos;t authorized a new round since 2005. Every base has a congressional champion protecting local jobs.</p>
          </div>

          <div className="bg-slate-800 border border-stone-700 rounded-xl p-5">
            <h3 className="font-bold text-white mb-2">💰 Contractor Profits</h3>
            <p className="text-stone-300 text-sm">Base construction and maintenance generates billions for defense contractors. KBR (formerly Halliburton) made $39.5B from base support contracts in Iraq and Afghanistan alone.</p>
          </div>

          <div className="bg-slate-800 border border-stone-700 rounded-xl p-5">
            <h3 className="font-bold text-white mb-2">🌐 Geopolitical Leverage</h3>
            <p className="text-stone-300 text-sm">Bases serve as political tools — quid pro quos for foreign aid, trade agreements, and diplomatic support. Host nations that cooperate get rewarded; those that don&apos;t (like Ecuador, which closed the Manta base in 2009) face consequences.</p>
          </div>

          <div className="bg-slate-800 border border-stone-700 rounded-xl p-5">
            <h3 className="font-bold text-white mb-2">🔄 Self-Perpetuating Logic</h3>
            <p className="text-stone-300 text-sm">Bases create the threats that justify more bases. A US base in Saudi Arabia was Osama bin Laden&apos;s primary grievance. The War on Terror that followed led to dozens of new bases across the Middle East and Africa.</p>
          </div>
        </div>
      </section>

      {/* The Lily Pad Strategy */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          The &quot;Lily Pad&quot; <span className="text-red-400">Strategy</span>
        </h2>

        <p className="text-stone-300 mb-4">
          Since 2001, the Pentagon has shifted toward smaller, more secretive installations called &quot;lily pads&quot; —
          bare-bones facilities with minimal permanent personnel that can be quickly activated for operations.
          Currently there are at least {fmt(baseStats.lilyPads)} such sites worldwide.
        </p>

        <p className="text-stone-300 mb-4">
          The advantage for the Pentagon is clear: lily pads are cheaper, lower-profile, and attract less host-nation
          opposition. The disadvantage for democracy is equally clear: they&apos;re nearly invisible to public scrutiny
          and congressional oversight. Many aren&apos;t even reported in the Pentagon&apos;s official base structure report.
        </p>

        <p className="text-stone-300 mb-4">
          Africa is the frontier of this strategy. US Africa Command (AFRICOM), established in 2007, has quietly built
          a network of at least 29 known sites across the continent — used for drone operations, special forces raids,
          intelligence collection, and &quot;training missions&quot; that frequently cross into combat.
        </p>
      </section>

      {/* Do bases make us safer? */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          Do Bases Make Us <span className="text-red-400">Safer?</span>
        </h2>

        <p className="text-stone-300 mb-4">
          The evidence is mixed at best. Research by political scientist Alexander Cooley and others suggests that
          overseas bases often:
        </p>

        <ul className="space-y-2 text-stone-300 mb-6">
          <li>• <strong className="text-white">Generate anti-American sentiment</strong> that feeds recruitment for terrorist organizations</li>
          <li>• <strong className="text-white">Entangle the US</strong> in local conflicts and political disputes</li>
          <li>• <strong className="text-white">Prop up authoritarian regimes</strong> (Bahrain, Saudi Arabia, Djibouti) in exchange for basing rights</li>
          <li>• <strong className="text-white">Provoke adversaries</strong> — US bases near Russia and China are cited by both as justification for military buildups</li>
          <li>• <strong className="text-white">Create moral hazard</strong> — the ability to strike anywhere makes war too easy, removing the friction that might prevent unnecessary conflicts</li>
        </ul>

        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
          <p className="text-red-300 text-lg italic">
            &quot;Imagine if China had military bases in Mexico, Canada, and Cuba. How would Americans feel? That&apos;s how
            much of the world feels about US bases in their countries.&quot;
          </p>
          <p className="text-stone-400 text-sm mt-2">— David Vine, <em>Base Nation: How US Military Bases Abroad Harm America and the World</em></p>
        </div>
      </section>

      {/* Related */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { href: '/analysis/empire-of-bases', title: 'Empire of Bases: The Data', desc: '750+ bases in 80+ countries. The complete data picture.' },
            { href: '/analysis/pentagon-climate', title: 'The Pentagon\'s Carbon Bootprint', desc: 'Military bases are major polluters — and the Pentagon is exempt from climate agreements.' },
            { href: '/analysis/war-profiteering', title: 'War Is a Racket', desc: 'Who profits from maintaining 750 bases worldwide? Follow the money.' },
            { href: '/bases/directory', title: 'Base Directory', desc: 'Search and explore every US military installation worldwide.' },
          ].map(a => (
            <Link key={a.href} href={a.href} className="bg-slate-800 border border-stone-700 rounded-lg p-4 hover:bg-stone-800 transition">
              <h3 className="font-bold text-white">{a.title}</h3>
              <p className="text-stone-400 text-sm">{a.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
