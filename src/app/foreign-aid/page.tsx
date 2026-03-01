import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import dynamic from 'next/dynamic'

const ForeignAidChart = dynamic(
  () => import('@/components/charts/SpendingCharts').then(mod => mod.ForeignAidChart),
  { ssr: false, loading: () => <div style={{ height: 400 }} /> }
)

export const metadata: Metadata = {
  title: 'US Foreign Aid — $68B/Year, Where Your Tax Dollars Go | WarCosts',
  description: '$68 billion per year in foreign aid. $850 billion since 2001. Israel gets $3.8B/yr guaranteed. See where US foreign aid really goes.',
}

const recipientFlags: Record<string, string> = {
  'Israel': '🇮🇱', 'Ukraine': '🇺🇦', 'Afghanistan': '🇦🇫', 'Iraq': '🇮🇶', 'Egypt': '🇪🇬',
  'Jordan': '🇯🇴', 'Pakistan': '🇵🇰', 'Ethiopia': '🇪🇹', 'South Sudan': '🇸🇸', 'Colombia': '🇨🇴', 'Nigeria': '🇳🇬',
}

const recipientDetails: Record<string, string> = {
  'Israel': 'The largest cumulative recipient of US foreign aid in history. The 10-year $38B Memorandum of Understanding (2016-2028) guarantees $3.8B/yr — the most ever given to any country. Unlike most aid recipients, Israel is a wealthy developed nation with a GDP per capita of $55K. The aid is almost entirely military, used to purchase American weapons systems. Israel also receives additional emergency supplements — $14.3B was approved in 2024 alone.',
  'Ukraine': 'Aid exploded from near-zero to $24.4B/yr after Russia\'s 2022 invasion. The $113B total includes military equipment (HIMARS, Patriot missiles, tanks), economic support, and humanitarian aid. Critics note this exceeds the annual budgets of most federal agencies. Supporters argue it\'s cheaper than direct US military involvement.',
  'Afghanistan': '$136B over 20 years — roughly $6.8B/yr during the war. After the Taliban takeover in August 2021, aid dropped to minimal humanitarian assistance. A 2021 SIGAR report found that much of the aid was wasted on "ghost soldiers," corrupt officials, and projects that collapsed immediately after US withdrawal.',
  'Iraq': '$82B in reconstruction and military aid — much of it lost to corruption. The Special Inspector General for Iraq Reconstruction documented billions in waste, including a $40M prison that was never completed and $9B in unaccounted funds.',
  'Egypt': '$1.5B/yr since the 1978 Camp David Accords — essentially a bribe to maintain peace with Israel. The aid funds Egypt\'s military dictatorship. When Egypt\'s military overthrew its elected government in 2013, aid briefly paused, then resumed.',
  'Jordan': 'Key staging area for US military operations in the Middle East. Aid supports regime stability and refugee management (Jordan hosts 700K+ Syrian refugees).',
  'Pakistan': 'Ostensible ally in the War on Terror that harbored Osama bin Laden in Abbottabad for years. $25B in aid despite documented support for Taliban factions by Pakistan\'s ISI intelligence service.',
  'Ethiopia': 'Largest recipient in sub-Saharan Africa. Most aid is humanitarian — PEPFAR HIV/AIDS funding and food assistance. The 2020-2022 Tigray War complicated aid delivery, with both sides accused of using starvation as a weapon.',
  'Colombia': 'Plan Colombia and counter-narcotics funding. $15B over 20+ years, primarily military aid to fight drug cartels and FARC rebels. The drug war continues, cocaine production is at record highs, and Colombia remains one of the most dangerous countries for activists.',
}

export default function ForeignAidPage() {
  const aid = loadData('foreign-aid.json')
  const chartData = aid.topRecipients.map((r: any) => ({
    country: r.country,
    amount: r.totalSince2001 / 1e9,
  }))
  const militaryRecipients = aid.topRecipients.filter((r: any) => r.type.includes('Military'))
  const totalMilitary = militaryRecipients.reduce((s: number, r: any) => s + r.totalSince2001, 0)

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Foreign Aid' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Foreign Aid</h1>
      <p className="text-muted mb-6 max-w-3xl">
        The United States sends {fmtMoney(aid.totalAnnual)} per year in foreign aid — {fmtMoney(aid.totalSince2001)} since 2001. But &ldquo;aid&rdquo; is misleading. Much of it is military hardware, regime support, and strategic bribes that serve American geopolitical interests more than the people it claims to help.
      </p>
      <ShareButtons title="US Foreign Aid — Where Your Tax Dollars Go" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmtMoney(aid.totalAnnual) + '/yr', label: 'Annual Foreign Aid' },
          { val: fmtMoney(aid.totalSince2001), label: 'Total Since 2001' },
          { val: fmtMoney(totalMilitary), label: 'Military Aid (Since 2001)' },
          { val: '$3.8B/yr', label: 'Israel (Guaranteed)' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;Foreign aid is taking money from poor people in rich countries and giving it to rich people in poor countries.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Attributed to various economists; captures the core critique</p>
      </div>

      {/* Military vs Economic */}
      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-red-800">Military vs. Economic Aid</h2>
        <p className="text-sm text-stone-600 mb-4">A significant portion of &ldquo;foreign aid&rdquo; is actually military aid — weapons, training, and equipment. Of the top recipients, most receive primarily military assistance. The money flows from US taxpayers → to the Pentagon → to defense contractors → back to Congress as campaign contributions. The foreign country is just the middleman.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(totalMilitary)}</p>
            <p className="text-muted text-sm">Military Aid (since 2001)</p>
          </div>
          <div className="bg-white rounded-lg p-4 border text-center">
            <p className="text-2xl font-bold text-green-700 font-[family-name:var(--font-heading)]">{fmtMoney(aid.totalSince2001 - totalMilitary)}</p>
            <p className="text-muted text-sm">Economic / Humanitarian (since 2001)</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Top Recipients (Since 2001)</h2>
        <ForeignAidChart data={chartData} />
      </div>

      {/* Rich Profiles */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Recipient Profiles</h2>
      <div className="space-y-4 mb-8">
        {aid.topRecipients.map((r: any) => (
          <div key={r.country} className="bg-white rounded-lg border p-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{recipientFlags[r.country] || '🌍'}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">{r.country}</h3>
                  <p className="text-sm text-muted">{r.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(r.totalSince2001)}</p>
                <p className="text-sm text-muted">{fmtMoney(r.annual2023)}/yr (2023)</p>
              </div>
            </div>
            <p className="text-sm text-muted mb-2">{r.note}</p>
            {recipientDetails[r.country] && (
              <p className="text-sm text-stone-600">{recipientDetails[r.country]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• Israel has received more cumulative US aid than any country in history: <strong>$158B+</strong>, despite being a wealthy developed nation.</li>
          <li>• Much &ldquo;foreign aid&rdquo; must be spent on American products — it&apos;s essentially a <strong>subsidy for US corporations</strong>.</li>
          <li>• Foreign aid is about <strong>1% of the federal budget</strong> — yet polls show Americans think it&apos;s 25%.</li>
          <li>• The US provides less foreign aid as a % of GDP than most other developed nations.</li>
          <li>• Pakistan received $25B in aid while harboring Osama bin Laden.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/ukraine-proxy" className="text-red-800 hover:underline">→ Ukraine — proxy war analysis</Link></li>
          <li><Link href="/arms-sales" className="text-red-800 hover:underline">→ Arms Sales — $238B/yr in American weapons</Link></li>
          <li><Link href="/opportunity-cost" className="text-red-800 hover:underline">→ What else could this money buy?</Link></li>
        </ul>
      </div>
    </div>
  )
}
