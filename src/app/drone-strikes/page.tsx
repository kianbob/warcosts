import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import FaqJsonLd from '@/components/FaqJsonLd'

export const metadata: Metadata = {
  title: 'US Drone Strikes — 14,000+ Strikes, Thousands of Civilian Deaths',
  description: 'Complete data on US drone strikes across Pakistan, Yemen, Somalia, Afghanistan, and Libya. By country, by president, civilian casualties exposed.',
}

interface Country {
  country: string
  slug: string
  years: string
  totalStrikes: number
  minKilled: number | null
  maxKilled: number | null
  minCivilians: number | null
  maxCivilians: number | null
  minChildren: number
  maxChildren: number
  minInjured: number
  maxInjured: number
  byPresident: { president: string; strikes: number; minKilled: number | null; maxKilled: number | null }[]
  byYear: { year: number; strikes: number }[]
}

interface DroneData {
  countries: Country[]
  totals: {
    totalStrikes: number
    minKilled: number | null
    maxKilled: number | null
    minCivilians: number | null
    maxCivilians: number | null
    minChildren: number
    maxChildren: number
  }
}

export default function DroneStrikesPage() {
  const data: DroneData = loadData('drone-strikes.json')
  const { countries, totals } = data

  // Aggregate by president
  const byPres: Record<string, { strikes: number; minKilled: number; maxKilled: number }> = {}
  countries.forEach(c => {
    c.byPresident.forEach(p => {
      if (!byPres[p.president]) byPres[p.president] = { strikes: 0, minKilled: 0, maxKilled: 0 }
      const bp = byPres[p.president]
      if (bp) { bp.strikes += p.strikes; bp.minKilled += (p.minKilled || 0); bp.maxKilled += (p.maxKilled || 0) }
    })
  })
  const presOrder = ['Bush', 'Obama', 'Trump', 'Biden']
  const presList = presOrder.filter(p => byPres[p]).map(p => ({ president: p, ...byPres[p] }))

  return (
    <>
      <FaqJsonLd faqs={[
        { q: 'How many US drone strikes have there been?', a: 'The US has conducted over 14,000 drone strikes across Pakistan, Yemen, Somalia, Afghanistan, Iraq, and Syria.' },
        { q: 'How many civilians have been killed by US drones?', a: 'Independent monitors estimate thousands of civilians killed by US drone strikes. The Bureau of Investigative Journalism and Airwars have documented far higher civilian death tolls than the Pentagon acknowledges.' },
        { q: 'Which president ordered the most drone strikes?', a: 'Obama dramatically expanded the drone program, ordering 10x more strikes than Bush. Trump further expanded strikes and removed Obama-era reporting requirements.' },
        { q: 'What countries has the US conducted drone strikes in?', a: 'The US has conducted drone strikes in at least 7 countries: Afghanistan, Iraq, Syria, Pakistan, Yemen, Somalia, and Libya.' },
        { q: 'What are signature strikes?', a: 'Signature strikes target people based on behavior patterns rather than confirmed identity. The US targeted military-age males exhibiting suspicious behavior, meaning many victims were never identified before being killed.' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","name":"US Drone Strikes","description":"14,000+ strikes across 5 countries. Civilian casualties by country and president.","url":"https://www.warcosts.org/drone-strikes","publisher":{"@type":"Organization","name":"WarCosts","url":"https://www.warcosts.org"}}) }} />    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Drone Strikes' }]} />

      <div className="bg-stone-50 text-stone-900 rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold">
          US Drone Strikes
        </h1>
        <p className="text-stone-500 mt-2">
          {fmt(totals.totalStrikes)} confirmed strikes across 5 countries. {fmt(totals.minCivilians || 0)}–{fmt(totals.maxCivilians || 0)} civilians killed, including {fmt(totals.minChildren || 0)}–{fmt(totals.maxChildren || 0)} children.
        </p>
      </div>

      <ShareButtons title="US Drone Strikes — Complete Data" />

      {/* Totals */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(totals.totalStrikes)}</p>
          <p className="text-xs text-stone-500">Total Strikes</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(totals.minKilled || 0)}–{fmt(totals.maxKilled || 0)}</p>
          <p className="text-xs text-stone-500">Total Killed</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(totals.minCivilians || 0)}–{fmt(totals.maxCivilians || 0)}</p>
          <p className="text-xs text-stone-500">Civilians Killed</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(totals.minChildren || 0)}–{fmt(totals.maxChildren || 0)}</p>
          <p className="text-xs text-stone-500">Children Killed</p>
        </div>
      </div>

      {/* By Country */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">🌍 By Country</h2>
      <div className="space-y-4 mb-10">
        {countries.sort((a, b) => b.totalStrikes - a.totalStrikes).map(c => {
          const pct = ((c.totalStrikes / totals.totalStrikes) * 100).toFixed(1)
          return (
            <Link key={c.slug} href={`/drone-strikes/${c.slug}`} className="block bg-white border border-stone-200 rounded-lg p-5 hover:border-red-300 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-stone-900">{c.country}</h3>
                <span className="text-red-700 font-bold">{fmt(c.totalStrikes)} strikes</span>
              </div>
              <div className="w-full bg-stone-200 rounded-full h-2 mb-3">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: `${pct}%` }} />
              </div>
              <div className="flex gap-6 text-sm text-stone-500">
                <span>{c.years}</span>
                <span>{c.minKilled != null ? `${fmt(c.minKilled || 0)}–${fmt(c.maxKilled || 0)} killed` : 'Casualties unknown'}</span>
                <span>{c.minCivilians != null ? `${fmt(c.minCivilians || 0)}–${fmt(c.maxCivilians || 0)} civilians` : ''}</span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* By President */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">🏛️ By President</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {presList.map(p => (
          <div key={p.president} className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <p className="font-semibold text-stone-900 text-lg">{p.president}</p>
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(p.strikes)}</p>
            <p className="text-xs text-stone-500">strikes</p>
            <p className="text-sm text-stone-600 mt-1">{fmt(p.minKilled || 0)}–{fmt(p.maxKilled || 0)} killed</p>
          </div>
        ))}
      </div>

      {/* Context */}
      <div className="bg-white border border-stone-200 rounded-lg p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">📖 Context</h2>
        <p className="text-stone-600 leading-relaxed">
          The US drone program began under George W. Bush and expanded dramatically under Obama, who authorized 10x more strikes than his predecessor. Drone strikes are conducted under the 2001 AUMF and covert action authorities, often with no congressional oversight. Independent investigations have consistently found civilian casualty rates far higher than official Pentagon estimates. The program operates across multiple countries where the US has never declared war.
        </p>
      </div>

      {/* Cost Per Strike */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">💰 Cost Per Strike</h2>
      <div className="bg-white border border-stone-200 rounded-lg p-6 mb-10">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-3 pr-4">Component</th>
                <th className="py-3 pr-4 text-right">Drone Strike</th>
                <th className="py-3 text-right">Manned Mission</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: 'Aircraft Cost', drone: '$28M (MQ-9 Reaper)', manned: '$143M (F-35A)' },
                { component: 'Cost Per Flight Hour', drone: '$3,624', manned: '$36,000 (F-35)' },
                { component: 'Hellfire Missile', drone: '$117,000 each', manned: 'N/A' },
                { component: 'JDAM Bomb', drone: 'N/A', manned: '$25,000 each' },
                { component: 'Crew Risk', drone: 'Zero (remote pilot)', manned: 'Pilot at risk' },
                { component: 'Avg. Strike Cost (est.)', drone: '$50K–$150K', manned: '$500K–$2M' },
                { component: 'Surveillance (per target)', drone: '300+ hrs avg.', manned: '2–5 hrs' },
              ].map(r => (
                <tr key={r.component} className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="py-3 pr-4 font-medium">{r.component}</td>
                  <td className="py-3 pr-4 text-right font-mono text-sm">{r.drone}</td>
                  <td className="py-3 text-right font-mono text-sm">{r.manned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400 mt-3">Drones appear cheaper per strike, but the total program cost — including intelligence infrastructure, satellite bandwidth, pilot training, and base operations — is estimated at $5–10 billion per year.</p>
      </div>

      {/* Legal Framework */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">⚖️ Legal Framework</h2>
      <div className="space-y-4 mb-10">
        {[
          { law: '2001 AUMF (Authorization for Use of Military Force)', detail: 'Passed 3 days after 9/11 with one dissenting vote (Barbara Lee). Authorizes force against anyone connected to the 9/11 attacks. Has been stretched to justify strikes in 22+ countries against groups that didn\'t exist in 2001.', status: 'Still active' },
          { law: 'Title 50 Covert Action Authority', detail: 'CIA drone strikes in Pakistan, Yemen, and Somalia operate under covert action authority. No public acknowledgment required. Congressional intelligence committees are briefed but cannot veto operations.', status: 'Classified' },
          { law: 'Executive Order 12333', detail: 'Prohibits assassination — but the US reinterpreted this to allow "targeted killing" of enemy combatants, a distinction many legal scholars find dubious.', status: 'Reinterpreted' },
          { law: 'Presidential Policy Guidance (PPG)', detail: 'Obama\'s 2013 "playbook" required "near certainty" of no civilian casualties. Trump revoked it in 2017, replacing it with looser rules. Biden partially restored restrictions in 2022.', status: 'Varies by president' },
          { law: 'International Humanitarian Law', detail: 'Drone strikes in countries where the US is not at war (Pakistan, Yemen, Somalia) have no clear legal basis under international law. The UN Special Rapporteur has repeatedly called for accountability.', status: 'Largely ignored' },
        ].map(l => (
          <div key={l.law} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="font-bold text-stone-800">{l.law}</h3>
              <span className="text-xs bg-stone-200 text-stone-600 rounded-full px-2 py-0.5">{l.status}</span>
            </div>
            <p className="text-sm text-stone-700">{l.detail}</p>
          </div>
        ))}
      </div>

      {/* Civilian Casualty Estimates */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">🚨 Who\'s Counting the Dead?</h2>
      <div className="bg-white border border-stone-200 rounded-lg p-6 mb-10">
        <p className="text-stone-600 mb-4">The Pentagon and independent monitors give vastly different numbers:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-3 pr-4">Source</th>
                <th className="py-3 pr-4 text-right">Civilian Deaths Claimed</th>
                <th className="py-3 text-right">Methodology</th>
              </tr>
            </thead>
            <tbody>
              {[
                { source: 'Pentagon / CENTCOM', deaths: '1,417 (Syria/Iraq 2014–2021)', method: 'Self-investigation of own strikes' },
                { source: 'Airwars', deaths: '8,000–13,000+', method: 'Cross-referenced media, NGO, and local reports' },
                { source: 'Bureau of Investigative Journalism', deaths: '800–1,800 (Pakistan/Yemen/Somalia)', method: 'Local media, NGO field reports' },
                { source: 'Reprieve / Stanford-NYU', deaths: 'Unknown (28 targeted → 1,147 killed)', method: 'Case study of named targets vs. actual killed' },
                { source: 'NYT Investigation (Azmat Khan)', deaths: '10x Pentagon figures', method: 'On-the-ground investigation of strike sites' },
              ].map(r => (
                <tr key={r.source} className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="py-3 pr-4 font-medium">{r.source}</td>
                  <td className="py-3 pr-4 text-right font-mono text-red-700">{r.deaths}</td>
                  <td className="py-3 text-right text-xs text-stone-500">{r.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Timeline */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">📅 Key Moments in the Drone War</h2>
      <div className="space-y-3 mb-10">
        {[
          { year: '2001', event: 'First armed drone strike kills Mohammed Atef in Afghanistan' },
          { year: '2002', event: 'First CIA drone strike outside a war zone — Yemen, kills al-Harithi' },
          { year: '2004', event: 'CIA drone campaign begins in Pakistan\'s tribal areas' },
          { year: '2009', event: 'Obama escalates: 54 strikes in Pakistan in his first year (vs. 36 total under Bush)' },
          { year: '2011', event: 'Anwar al-Awlaki (US citizen) killed by drone in Yemen without trial' },
          { year: '2011', event: 'Al-Awlaki\'s 16-year-old son Abdulrahman killed in separate strike two weeks later' },
          { year: '2013', event: 'Obama\'s "playbook" requires near-certainty of no civilian casualties' },
          { year: '2015', event: 'Kunduz hospital strike kills 42 MSF staff and patients' },
          { year: '2017', event: 'Trump revokes Obama-era civilian casualty rules, expands strikes 432%' },
          { year: '2019', event: 'Baghuz strike kills 70+ women and children — covered up until 2021 NYT investigation' },
          { year: '2021', event: 'Last US drone strike in Afghanistan kills 10 civilians including 7 children (Zemari Ahmadi family)' },
        ].map(t => (
          <div key={t.year + t.event} className="flex gap-4 items-start">
            <span className="text-red-700 font-bold font-mono text-sm min-w-[3rem]">{t.year}</span>
            <div className="flex-1 bg-stone-50 border border-stone-200 rounded-lg p-3">
              <p className="text-sm text-stone-700">{t.event}</p>
            </div>
          </div>
        ))}
      </div>

      <BackToTop />
    </div>
    </>  )
}
