import { TroopsChart } from '@/components/charts/SpendingCharts'
import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt, fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'


export const metadata: Metadata = {
  title: 'US Troop Deployments Worldwide — 173,000 Troops in 80 Countries',
  description: '173,000 US troops stationed in 80 countries across 750 bases. Where they are, how long they\'ve been there, and what it costs.',
}

const regionGroups: Record<string, string[]> = {
  'East Asia & Pacific': ['Japan', 'South Korea', 'Australia', 'Diego Garcia'],
  'Europe': ['Germany', 'Italy', 'United Kingdom', 'Spain', 'Turkey', 'Poland'],
  'Middle East': ['Bahrain', 'Kuwait', 'Qatar', 'Djibouti'],
}

const historicalPeaks = [
  { war: 'World War II', year: 1945, troops: 12209238, note: '12.2 million Americans in uniform. 16 million served total. Entire economy mobilized.' },
  { war: 'Korean War', year: 1953, troops: 3635912, note: '3.6 million active duty. 1.8 million deployed to Korea at peak.' },
  { war: 'Vietnam War', year: 1968, troops: 3547000, note: '3.5 million active duty. 549,500 deployed to Vietnam at peak (April 1969).' },
  { war: 'Cold War Peak', year: 1987, troops: 2174000, note: 'Reagan buildup. 350,000+ troops in Europe alone. 600-ship Navy.' },
  { war: 'Gulf War', year: 1991, troops: 2043705, note: '697,000 deployed to the Gulf. 100-hour ground war. Largest deployment since Vietnam.' },
  { war: 'Post-Cold War Low', year: 1999, troops: 1385703, note: 'The "peace dividend." Smallest military since before WWII. Base closures (BRAC).' },
  { war: 'Iraq Surge', year: 2007, troops: 1427000, note: '170,000 troops in Iraq + 26,000 in Afghanistan + global commitments.' },
  { war: 'Current (2024)', year: 2024, troops: 1328000, note: '1.33M active duty. 173,000 overseas. Plus 800,000 reserve/Guard. Plus 750,000+ contractors.' },
]

const specialOpsExpansion = [
  { region: 'Africa (AFRICOM)', countries: '33', operations: 'Counter-terrorism, training missions, drone strikes in Somalia, Libya, Niger, Chad, Mali, Cameroon', note: 'AFRICOM didn\'t exist before 2007. Now operates in 33 African countries. Most Americans have no idea US troops are fighting in Africa.' },
  { region: 'Middle East (CENTCOM)', countries: '20', operations: 'Iraq, Syria, Yemen, Somalia, plus advisory missions across the Gulf states', note: 'Permanent presence since 1991. Troops rotate through but never leave.' },
  { region: 'Asia-Pacific (INDOPACOM)', countries: '36', operations: 'Philippines counter-terrorism, South China Sea patrols, Australia rotational deployments', note: 'The "pivot to Asia." Largest geographic command by area.' },
  { region: 'Latin America (SOUTHCOM)', countries: '31', operations: 'Counter-narcotics, training missions, Guantánamo Bay, humanitarian missions as cover', note: 'Lowest profile but extensive: 12 military bases and cooperation agreements with nearly every country.' },
  { region: 'Europe (EUCOM)', countries: '51', operations: 'NATO deterrence, Ukraine support, Eastern European rotational deployments', note: 'Post-2022 surge: US troops in Europe increased from 64,000 to 100,000+ after Russia invaded Ukraine.' },
]

const noDeclarationWars = [
  { war: 'Korean War', years: '1950-53', troops: '1,800,000', deaths: '36,574', authorization: 'Truman called it a "police action." No congressional declaration.' },
  { war: 'Vietnam War', years: '1955-75', troops: '2,700,000', deaths: '58,220', authorization: 'Gulf of Tonkin Resolution (based on likely fabricated incident). Not a declaration of war.' },
  { war: 'Grenada', years: '1983', troops: '7,600', deaths: '19', authorization: 'Reagan ordered invasion unilaterally. Cited need to protect medical students.' },
  { war: 'Panama', years: '1989', troops: '27,684', deaths: '23', authorization: 'Bush ordered invasion to arrest Noriega. No congressional vote.' },
  { war: 'Gulf War', years: '1991', troops: '697,000', deaths: '383', authorization: 'Congressional authorization (not a declaration of war).' },
  { war: 'Somalia', years: '1992-94', troops: '25,000', deaths: '43', authorization: 'UN resolution. No specific congressional authorization for combat.' },
  { war: 'Bosnia/Kosovo', years: '1995-99', troops: '20,000', deaths: '0 (combat)', authorization: 'NATO action. Congress voted to support but never declared war.' },
  { war: 'Afghanistan', years: '2001-21', troops: '2,400,000+', deaths: '2,461', authorization: '2001 AUMF — 60 words, no expiration. Used for 20 years across 22 countries.' },
  { war: 'Iraq', years: '2003-11', troops: '1,500,000+', deaths: '4,599', authorization: '2002 AUMF. Based on false WMD intelligence. Finally repealed in 2023.' },
  { war: 'Libya', years: '2011', troops: 'Air/Naval', deaths: '0', authorization: 'Obama claimed UN authorization was sufficient. Violated War Powers Resolution.' },
  { war: 'Syria', years: '2014-present', troops: '~900', deaths: '~8', authorization: 'Claimed under 2001 AUMF (fighting ISIS). Congress never voted on Syria operations.' },
  { war: 'Yemen', years: '2015-present', troops: 'SOF/drones', deaths: 'Classified', authorization: 'No authorization. Support to Saudi coalition and direct strikes.' },
  { war: 'Somalia', years: '2007-present', troops: '~500', deaths: 'Classified', authorization: 'Claimed under 2001 AUMF. Troops deployed, withdrawn, re-deployed.' },
]

export default function DeploymentsPage() {
  const presence = loadData('overseas-presence.json')
  const stats = loadData('stats.json')
  const chartData = presence.topDeployments.map((d: any) => ({ country: d.country, troops: d.troops }))
  const totalCost = presence.topDeployments.reduce((s: number, d: any) => s + (d.annualCost || 0), 0)

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Troop Deployments' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Troop Deployments</h1>
      <p className="text-muted mb-6 max-w-3xl">The United States stations {fmt(presence.totalOverseasTroops)} service members across {presence.totalCountries} countries — a permanent global military presence with no parallel in human history. US Special Operations forces operated in <strong>134 countries</strong> in 2023. No other nation has troops in more than a handful of foreign countries. America has them in 80.</p>
      <ShareButtons title="US Troop Deployments Worldwide" />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmt(presence.totalOverseasTroops), label: 'Overseas Troops' },
          { val: fmt(presence.totalBases), label: 'Military Bases' },
          { val: '134', label: 'Countries (Spec Ops)' },
          { val: fmtMoney(presence.annualBaseCost) + '/yr', label: 'Annual Cost' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;Our military forces are committed around the world... in approximately 750 base sites in 80 foreign countries and colonies. We are the new Rome.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Chalmers Johnson, <em>The Sorrows of Empire</em>, 2004</p>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Troops by Country</h2>
        <TroopsChart data={chartData} />
      </div>

      {/* Historical Peak Deployments */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Historical Peak Troop Levels</h2>
        <div className="space-y-3">
          {historicalPeaks.map(p => (
            <div key={p.war} className="bg-white rounded-lg p-4 border flex items-start gap-4">
              <div className="text-right min-w-[60px]">
                <p className="font-mono text-sm text-muted">{p.year}</p>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold">{p.war}</h3>
                  <p className="text-primary font-bold font-[family-name:var(--font-heading)]">{fmt(p.troops)}</p>
                </div>
                <p className="text-muted text-xs mt-1">{p.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Operations Expansion */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">🎯 Special Operations: The Shadow War</h2>
        <p className="text-sm text-stone-600 mb-4">US Special Operations Command (SOCOM) has expanded from operations in 60 countries in 2001 to <strong>134 countries</strong> in 2023. This means US special forces — Green Berets, Navy SEALs, Delta Force, Rangers — are operating in roughly <strong>70% of the world&apos;s countries</strong>, mostly without public knowledge or congressional debate.</p>
        <div className="space-y-4">
          {specialOpsExpansion.map(s => (
            <div key={s.region} className="bg-white rounded-lg p-4 border">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">{s.region}</h3>
                <span className="text-red-700 font-bold">{s.countries} countries</span>
              </div>
              <p className="text-sm text-muted mb-1">{s.operations}</p>
              <p className="text-xs text-stone-500">{s.note}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-stone-600 mt-4">SOCOM&apos;s budget has grown from $3.1B in 2001 to over $14B today — a 350% increase. SOCOM now has 70,000 personnel, more than the entire militaries of most countries.</p>
      </div>

      {/* Wars Without Declaration */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">📜 Troops in Harm&apos;s Way Without a Declaration of War</h2>
        <p className="text-sm text-stone-600 mb-4">The Constitution gives Congress the sole power to declare war. Yet the last time Congress formally declared war was <strong>1942</strong>. Every conflict since has been fought under executive orders, vague authorizations, or in complete secrecy.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-amber-300 text-left">
                <th className="py-2 px-2">War</th>
                <th className="py-2 px-2">Years</th>
                <th className="py-2 px-2 text-right">Troops Deployed</th>
                <th className="py-2 px-2 text-right">US Deaths</th>
                <th className="py-2 px-2">Authorization</th>
              </tr>
            </thead>
            <tbody>
              {noDeclarationWars.map(w => (
                <tr key={w.war + w.years} className="border-b border-amber-200 hover:bg-amber-100">
                  <td className="py-2 px-2 font-semibold">{w.war}</td>
                  <td className="py-2 px-2 font-mono text-xs text-muted">{w.years}</td>
                  <td className="py-2 px-2 text-right">{w.troops}</td>
                  <td className="py-2 px-2 text-right text-red-600">{w.deaths}</td>
                  <td className="py-2 px-2 text-xs text-muted">{w.authorization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-4">Over 100,000 Americans have died in wars that Congress never declared. The War Powers Resolution of 1973 was supposed to reassert Congress&apos;s role — every president since has called it unconstitutional and ignored it.</p>
      </div>

      {/* AFRICOM Expansion */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">AFRICOM: The Quiet Expansion</h2>
        <p>The US Africa Command (AFRICOM) was established in 2007. Before that, Africa was divided among three other combatant commands. In less than 20 years, AFRICOM has expanded to operations in <strong>33 African countries</strong>, including:</p>
        <ul>
          <li><strong>Camp Lemonnier, Djibouti:</strong> The only &ldquo;permanent&rdquo; US base in Africa. 4,000+ personnel. Used as a launch pad for drone strikes in Somalia, Yemen, and across the Horn of Africa.</li>
          <li><strong>Niger:</strong> A $110M drone base was built near Agadez — one of the largest US military construction projects in history. After a 2023 coup, the new military government expelled US forces.</li>
          <li><strong>Somalia:</strong> US troops were withdrawn in 2020, then re-deployed in 2022. Air strikes have killed hundreds, with significant civilian casualties disputed.</li>
          <li><strong>Cameroon, Mali, Chad, Burkina Faso:</strong> Training and advisory missions that keep expanding. Several of these countries have experienced coups, with US-trained officers sometimes leading the overthrow of governments.</li>
        </ul>
        <p>The most revealing fact: at least <strong>7 of the 9 African coups between 2008 and 2023 were led by military officers trained by the United States</strong>. The US is training the very people who overthrow the governments the US supports.</p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• <strong>Japan hosts 120 US military bases</strong> — more than any other country. 70% are crammed onto the island of Okinawa, which is just 0.6% of Japan&apos;s land area. Okinawans have protested for decades.</li>
          <li>• <strong>Germany still hosts 119 US bases</strong> — 80 years after WWII ended. American troops have been in Germany longer than most Germans have been alive.</li>
          <li>• <strong>No other country on earth has military bases in 80 countries.</strong> Russia has ~15. China has 1. France has ~10. The UK has ~16.</li>
          <li>• The US spends <strong>{fmtMoney(presence.annualBaseCost)} per year</strong> just maintaining overseas bases — more than the entire budget of the EPA, NASA, and the Department of Education combined.</li>
          <li>• US troops have been in <strong>South Korea since 1953</strong> — the Korean War never officially ended.</li>
          <li>• US Special Operations forces operated in <strong>134 countries in 2023</strong> — 70% of the world&apos;s nations.</li>
          <li>• At least <strong>7 of 9 African coups since 2008</strong> were led by US-trained military officers.</li>
          <li>• The 2001 AUMF — <strong>60 words</strong> — has been used to justify military operations in at least <strong>22 countries</strong>.</li>
          <li>• There are more <strong>US military personnel overseas (173,000) than the entire militaries</strong> of most countries on earth.</li>
          <li>• The US military&apos;s global footprint produces more <strong>greenhouse gas emissions than 140 countries</strong>.</li>
        </ul>
      </div>

      {/* Deployment Cards */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Current Deployment Details</h2>
      <div className="space-y-4">
        {presence.topDeployments.map((d: any) => {
          const yearsPresent = 2025 - d.since
          return (
            <div key={d.country} className="bg-white rounded-lg border p-5 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">{d.country}</h3>
                  <p className="text-muted text-sm">Since {d.since} · <strong>{yearsPresent} years</strong> · {d.bases} base{d.bases > 1 ? 's' : ''}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{fmt(d.troops)} troops</p>
                  <p className="text-muted text-sm">{fmtMoney(d.annualCost)}/yr</p>
                </div>
              </div>
              <p className="text-muted text-sm mt-2">{d.note}</p>
              {yearsPresent > 50 && (
                <p className="text-xs text-red-600 mt-2 font-semibold">⚠️ US troops have been here for {yearsPresent} years. The original conflict ended long ago.</p>
              )}
            </div>
          )
        })}
      </div>

      {/* Comparison */}
      <div className="bg-stone-50 rounded-xl p-8 mt-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">No Empire Compares</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>At the height of the <strong>British Empire</strong> — the largest in history — Britain maintained military garrisons in about 36 countries. The <strong>Roman Empire</strong> at its peak had legions across roughly 25 regions. The <strong>Soviet Union</strong> at the height of the Cold War had bases in about 10 countries.</p>
          <p>The United States today has troops in <strong>80 countries</strong> and military installations in most of them. This is not a temporary wartime presence. It&apos;s a permanent infrastructure of global military dominance — maintained for decades after the conflicts that created it.</p>
          <p>The question is not whether America needs a strong defense. It&apos;s whether it needs soldiers stationed in countries where the original threat disappeared generations ago.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 text-center">
          {[
            { empire: 'United States (2024)', bases: '750+', countries: '80' },
            { empire: 'British Empire (peak)', bases: '~100', countries: '~36' },
            { empire: 'Roman Empire (peak)', bases: '~40 legionary camps', countries: '~25 regions' },
            { empire: 'Soviet Union (peak)', bases: '~30', countries: '~10' },
            { empire: 'China (2024)', bases: '1', countries: '1' },
          ].map(e => (
            <div key={e.empire} className="bg-white rounded-lg p-3 border">
              <p className="font-bold text-sm text-primary">{e.bases}</p>
              <p className="text-xs text-muted">{e.countries}</p>
              <p className="text-xs text-stone-500 mt-1">{e.empire}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Links */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/bases" className="text-red-800 hover:underline">→ Overseas Bases — 750 installations worldwide</Link></li>
          <li><Link href="/analysis/empire-of-bases" className="text-red-800 hover:underline">→ Empire of Bases — why does America need bases in 80 countries?</Link></li>
          <li><Link href="/analysis/congressional-authority" className="text-red-800 hover:underline">→ 19 Wars Without Congress — the constitutional crisis</Link></li>
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Military Spending — $886B/yr</Link></li>
          <li><Link href="/covert" className="text-red-800 hover:underline">→ Covert Operations — the wars you don&apos;t know about</Link></li>
        </ul>
      </div>
    </div>
  )
}
