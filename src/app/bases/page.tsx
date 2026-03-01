import { BasesChart, TroopsChart } from '@/components/charts/SpendingCharts'
import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'


export const metadata: Metadata = {
  title: 'US Overseas Military Bases — 750 Bases in 80 Countries | WarCosts',
  description: 'The US maintains 750 military bases in 80 countries with 173,000 troops deployed overseas. Annual cost: $55 billion. More than any empire in history.',
}

const regionMap: Record<string, string> = {
  'Japan': 'East Asia & Pacific', 'South Korea': 'East Asia & Pacific', 'Australia': 'East Asia & Pacific', 'Diego Garcia': 'East Asia & Pacific',
  'Germany': 'Europe', 'Italy': 'Europe', 'United Kingdom': 'Europe', 'Spain': 'Europe', 'Turkey': 'Europe', 'Poland': 'Europe',
  'Bahrain': 'Middle East', 'Kuwait': 'Middle East', 'Qatar': 'Middle East',
  'Djibouti': 'Africa',
}

export default function BasesPage() {
  const presence = loadData('overseas-presence.json')
  const basesData = presence.topDeployments.map((d: any) => ({ country: d.country, bases: d.bases }))
  const troopsData = presence.topDeployments.map((d: any) => ({ country: d.country, troops: d.troops }))

  // Group by region
  const regions: Record<string, any[]> = {}
  presence.topDeployments.forEach((d: any) => {
    const region = regionMap[d.country] || 'Other'
    if (!regions[region]) regions[region] = []
    regions[region].push(d)
  })

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Overseas Bases' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Overseas Military Bases</h1>
      <p className="text-muted mb-6 max-w-3xl">The United States maintains {fmt(presence.totalBases)} military bases in {presence.totalCountries} countries — more than any empire in history. Annual cost: {fmtMoney(presence.annualBaseCost)}. Many of these bases were established during wars that ended decades ago. The troops stayed.</p>
      <ShareButtons title="US Overseas Military Bases — 750 in 80 Countries" />

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmt(presence.totalBases), label: 'Overseas Bases' },
          { val: String(presence.totalCountries), label: 'Countries' },
          { val: fmt(presence.totalOverseasTroops), label: 'Troops Deployed' },
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
          &ldquo;Unlike any other nation in history, the United States stations its legions not to defend its own borders, but to project power — and the costs are borne by people who have no say in the matter.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— David Vine, <em>Base Nation</em>, 2015</p>
      </div>

      {/* Comparison */}
      <div className="bg-amber-50 rounded-xl p-6 my-8 border border-amber-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-amber-800">🌍 No Other Country Comes Close</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm">
          {[
            { country: 'United States', bases: '~750', color: 'text-red-700 font-bold text-xl' },
            { country: 'United Kingdom', bases: '~16', color: 'text-stone-700' },
            { country: 'Russia', bases: '~15', color: 'text-stone-700' },
            { country: 'France', bases: '~10', color: 'text-stone-700' },
            { country: 'China', bases: '1', color: 'text-stone-700' },
          ].map(c => (
            <div key={c.country}>
              <p className={`font-[family-name:var(--font-heading)] ${c.color}`}>{c.bases}</p>
              <p className="text-muted">{c.country}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Bases by Country</h2>
          <BasesChart data={basesData} />
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Troops by Country</h2>
          <TroopsChart data={troopsData} />
        </div>
      </div>

      {/* Grouped by Region */}
      {Object.entries(regions).map(([region, deployments]) => (
        <div key={region} className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">{region}</h2>
          <div className="space-y-4">
            {deployments.map((d: any) => {
              const yearsPresent = 2025 - d.since
              return (
                <div key={d.country} className="bg-white rounded-lg border p-5">
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
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {/* Local Opposition */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">✊ Local Opposition</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>US military bases are frequently unwelcome in their host communities. Some of the longest-running protests include:</p>
          <ul>
            <li><strong>Okinawa, Japan:</strong> 70% of US bases in Japan are crammed onto this one island. A 2019 referendum showed 72% of Okinawans opposed new base construction. Both governments ignored the result. Environmental contamination from PFAS chemicals has polluted local water supplies.</li>
            <li><strong>Vicenza, Italy:</strong> Massive protests against the expansion of Camp Ederle. Residents organized under the slogan &ldquo;No Dal Molin&rdquo; — the base was built anyway.</li>
            <li><strong>Ramstein, Germany:</strong> Annual protests against the base&apos;s role as a relay station for US drone strikes in the Middle East and Africa. German courts have ruled the government must ensure US operations from German soil comply with international law.</li>
            <li><strong>Jeju Island, South Korea:</strong> Villagers protested for years against construction of a naval base. The base was built over community opposition, destroying centuries-old volcanic rock formations.</li>
          </ul>
          <p>Environmental contamination is a persistent issue. US bases have been linked to PFAS contamination, fuel spills, and unexploded ordnance in communities from Japan to Germany to the Philippines.</p>
        </div>
      </div>

      {/* Cost Context */}
      <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• {fmtMoney(presence.annualBaseCost)}/yr on overseas bases is <strong>more than the entire budget of the Department of Education</strong> ($79B).</li>
          <li>• It costs roughly <strong>$50,000-$150,000 per troop per year</strong> to maintain overseas deployments — including housing, food, transport, and facilities.</li>
          <li>• Many bases were built to counter the Soviet Union. The Soviet Union dissolved <strong>34 years ago</strong>.</li>
          <li>• The US military&apos;s overseas base network produces more <strong>CO₂ than 140 countries</strong>.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/empire-of-bases" className="text-red-800 hover:underline">→ Empire of Bases — analysis of America&apos;s global military footprint</Link></li>
          <li><Link href="/deployments" className="text-red-800 hover:underline">→ Troop Deployments — where US troops are stationed</Link></li>
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Military Spending — $886B/yr and counting</Link></li>
        </ul>
      </div>
    </div>
  )
}
