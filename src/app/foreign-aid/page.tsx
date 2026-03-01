import { ForeignAidChart } from '@/components/charts/SpendingCharts'
import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'


export const metadata: Metadata = {
  title: 'US Foreign Aid — $68B/Year, Where Your Tax Dollars Go',
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

const aidEffectivenessDebate = [
  { position: 'Aid as Empire Maintenance', argument: 'Foreign aid is not charity — it\'s the maintenance cost of the American empire. Aid buys military base access, UN votes, market access, and political loyalty. When a country\'s government stops cooperating, aid is cut. When it complies, aid flows. It\'s a transactional system dressed up as generosity.' },
  { position: 'The Conditionality Trap', argument: 'Most US aid comes with strings attached: recipients must buy American products ("Buy America" provisions), implement US-approved economic policies, support US positions in international forums, and open their markets to American companies. The aid enriches American corporations while creating dependency in recipient countries.' },
  { position: 'Aid Creates Corruption', argument: 'Large aid flows to countries with weak institutions often fuel corruption rather than development. Afghanistan is the prime example: $136B in aid, much of it stolen by warlords and officials. SIGAR documented billions wasted on phantom soldiers, empty schools, and projects that collapsed instantly.' },
  { position: 'The Military Aid Problem', argument: 'Military aid — the largest category — doesn\'t feed people or build schools. It provides weapons, training, and equipment to security forces that often oppress their own populations. Egypt uses US-funded tanks to crush domestic dissent. Saudi Arabia uses US bombs on Yemeni civilians.' },
  { position: 'What Works', argument: 'Not all aid fails. PEPFAR (HIV/AIDS) has saved an estimated 25 million lives since 2003. Smallpox eradication succeeded. Some targeted development programs show measurable results. But these successes represent a small fraction of total aid, and they work precisely because they\'re focused on health outcomes rather than geopolitical goals.' },
]

const perCapitaAid = [
  { country: '🇮🇱 Israel', aidPerCapita: '$410/person', gdpPerCapita: '$55,000', note: 'A wealthy developed nation receiving more per-capita aid than any country on earth.' },
  { country: '🇯🇴 Jordan', aidPerCapita: '$160/person', gdpPerCapita: '$4,400', note: 'Strategic buffer state. Hosts 700K+ Syrian refugees.' },
  { country: '🇺🇦 Ukraine (2023)', aidPerCapita: '$560/person', gdpPerCapita: '$4,500', note: 'Wartime surge. Largest per-capita aid outside Israel.' },
  { country: '🇦🇫 Afghanistan (peak)', aidPerCapita: '$170/person', gdpPerCapita: '$500', note: 'One of the poorest countries on earth. Much aid was stolen or wasted.' },
  { country: '🇪🇬 Egypt', aidPerCapita: '$14/person', gdpPerCapita: '$3,700', note: 'Mostly military. Funds the army that rules the country.' },
  { country: '🇪🇹 Ethiopia', aidPerCapita: '$8/person', gdpPerCapita: '$1,100', note: 'Mostly humanitarian (PEPFAR, food aid).' },
  { country: '🇮🇳 India', aidPerCapita: '$0.20/person', gdpPerCapita: '$2,400', note: 'Massive country, minimal per-capita aid despite enormous poverty.' },
]

const marshallPlanComparison = [
  { item: 'Marshall Plan (1948-1952)', cost: '$13.3B ($165B in 2023$)', pctGdp: '~2% of US GDP', result: 'Rebuilt Western Europe. Created prosperous, democratic allies. Widely considered the most successful foreign aid program in history.' },
  { item: 'Afghanistan Reconstruction (2001-2021)', cost: '$136B', pctGdp: '<1% of GDP', result: 'Taliban returned to power. Most projects collapsed. SIGAR documented billions in waste. 20 years, nothing to show for it.' },
  { item: 'Iraq Reconstruction (2003-2011)', cost: '$82B', pctGdp: '<1% of GDP', result: 'Infrastructure remains in ruins. Corruption consumed much of the spending. ISIS seized cities the US had "rebuilt."' },
]

const globalComparison = [
  { country: '🇳🇴 Norway', aidPctGni: '1.09%', note: 'Exceeds 0.7% UN target' },
  { country: '🇱🇺 Luxembourg', aidPctGni: '1.00%', note: 'Exceeds 0.7% UN target' },
  { country: '🇸🇪 Sweden', aidPctGni: '0.91%', note: 'Exceeds 0.7% UN target' },
  { country: '🇩🇰 Denmark', aidPctGni: '0.74%', note: 'Exceeds 0.7% UN target' },
  { country: '🇩🇪 Germany', aidPctGni: '0.79%', note: 'Exceeds 0.7% UN target' },
  { country: '🇬🇧 UK', aidPctGni: '0.51%', note: 'Cut from 0.7% in 2021' },
  { country: '🇫🇷 France', aidPctGni: '0.56%', note: 'Below 0.7% target' },
  { country: '🇯🇵 Japan', aidPctGni: '0.39%', note: 'Below 0.7% target' },
  { country: '🇺🇸 United States', aidPctGni: '0.24%', note: 'Dead last among major donors. Fails UN target by 66%.' },
]

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

      {/* AI Overview */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-blue-900 mb-3">🧠 Key Insights</h3>
        <ul className="space-y-2 text-sm text-blue-900">
          <li>• <strong>Israel — a wealthy nation with $55K GDP per capita — is the largest cumulative recipient of US aid in history ($158B+)</strong>, receiving $3.8B/yr guaranteed, plus $14.3B in emergency aid in 2024 alone.</li>
          <li>• <strong>Much &ldquo;foreign aid&rdquo; is actually military hardware</strong> — the money flows from US taxpayers → Pentagon → defense contractors → back to Congress as campaign contributions. The foreign country is just the middleman.</li>
          <li>• <strong>The US gives just 0.24% of GNI in aid — dead last among major developed nations</strong> — failing the UN 0.7% target by 66%, while Americans mistakenly believe aid is ~25% of the federal budget (it&apos;s ~1%).</li>
          <li>• <strong>The Marshall Plan ($165B in today&apos;s dollars) rebuilt all of Western Europe</strong> — Afghanistan reconstruction cost $136B and rebuilt nothing lasting. The Taliban returned to power after 20 years.</li>
          <li>• <strong>Pakistan received $25B in aid while harboring Osama bin Laden</strong> — and Egypt has received $1.5B/yr for 47 years to fund a military dictatorship, essentially a bribe to maintain peace with Israel.</li>
        </ul>
      </div>

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

      {/* Per Capita Comparison */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Aid Per Capita: Who Gets the Most?</h2>
        <div className="space-y-3">
          {perCapitaAid.map(p => (
            <div key={p.country} className="bg-white rounded-lg p-4 border flex items-start justify-between">
              <div>
                <h4 className="font-bold">{p.country}</h4>
                <p className="text-xs text-muted">{p.note}</p>
              </div>
              <div className="text-right">
                <p className="text-primary font-bold">{p.aidPerCapita}</p>
                <p className="text-xs text-muted">GDP/cap: {p.gdpPerCapita}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* USAID as Foreign Policy Tool */}
      <div className="prose prose-stone max-w-none my-8">
        <h2 className="font-[family-name:var(--font-heading)]">USAID: Development Agency or Foreign Policy Tool?</h2>
        <p>The US Agency for International Development (USAID) was created in 1961, ostensibly to promote international development independent of Cold War politics. In practice, USAID has always been a tool of US foreign policy.</p>
        <ul>
          <li><strong>During the Cold War:</strong> Aid went disproportionately to anti-communist allies, regardless of their governance or human rights records. Mobutu&apos;s kleptocratic Zaire received billions; democratic socialist countries received nothing.</li>
          <li><strong>During the War on Terror:</strong> USAID programs in Afghanistan and Iraq were explicitly tied to counter-insurgency objectives. &ldquo;Development&rdquo; became &ldquo;winning hearts and minds&rdquo; — and USAID workers operated alongside military units, blurring the line between aid worker and combatant.</li>
          <li><strong>The &ldquo;Buy America&rdquo; requirement:</strong> Much US food aid must be purchased from American farmers and shipped on American vessels — even when it would be cheaper and faster to buy locally. This policy primarily benefits American agribusiness, not hungry people.</li>
          <li><strong>2025 gutting:</strong> The Trump administration effectively dismantled USAID in early 2025, firing thousands of employees and slashing programs. Whether one supports aid or not, the manner of the cuts — eliminating HIV/AIDS programs that save millions of lives — revealed that the administration saw aid purely as a political football.</li>
        </ul>
      </div>

      {/* Marshall Plan Comparison */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">📊 Marshall Plan vs. Recent Reconstruction</h2>
        <p className="text-sm text-stone-600 mb-4">The Marshall Plan is the gold standard of foreign aid. How do recent reconstruction efforts compare?</p>
        <div className="space-y-4">
          {marshallPlanComparison.map(m => (
            <div key={m.item} className="bg-white rounded-lg p-4 border">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold">{m.item}</h4>
                <span className="text-primary font-bold whitespace-nowrap ml-4">{m.cost}</span>
              </div>
              <p className="text-xs text-muted mb-1">{m.pctGdp} of US GDP</p>
              <p className="text-sm text-stone-600"><strong>Result:</strong> {m.result}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-4">Why did the Marshall Plan succeed where Afghanistan/Iraq failed? The Marshall Plan rebuilt countries with existing institutions, educated populations, and industrial capacity. It also required recipient countries to cooperate with each other. Afghanistan and Iraq had none of these preconditions — and the US was simultaneously fighting wars in both countries while trying to rebuild them.</p>
      </div>

      {/* Effectiveness Debate */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Aid Effectiveness Debate</h2>
        <div className="space-y-4">
          {aidEffectivenessDebate.map(d => (
            <div key={d.position} className="bg-white rounded-lg p-4 border">
              <h4 className="font-bold text-stone-800 mb-1">{d.position}</h4>
              <p className="text-sm text-stone-600">{d.argument}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Comparison */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Global Comparison: Aid as % of Gross National Income</h2>
        <p className="text-sm text-muted mb-4">The UN target is 0.7% of GNI. The US gives 0.24% — dead last among major donors despite being the world&apos;s wealthiest country.</p>
        <div className="space-y-2">
          {globalComparison.map(c => (
            <div key={c.country} className={`flex items-center gap-3 rounded-lg p-2 border text-sm ${c.country.includes('United States') ? 'bg-red-50 border-red-200' : 'bg-white'}`}>
              <span className="w-36 font-medium">{c.country}</span>
              <div className="flex-1 bg-stone-100 rounded-full h-4 overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: `${(parseFloat(c.aidPctGni) / 1.1) * 100}%` }} />
              </div>
              <span className={`w-16 text-right font-bold ${c.country.includes('United States') ? 'text-red-700' : 'text-green-700'}`}>{c.aidPctGni}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-4 text-center">Americans believe foreign aid is ~25% of the federal budget. It&apos;s actually ~1%. And most of that 1% is military aid that benefits American defense contractors.</p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• Israel has received more cumulative US aid than any country in history: <strong>$158B+</strong>, despite being a wealthy developed nation.</li>
          <li>• Much &ldquo;foreign aid&rdquo; must be spent on American products — it&apos;s essentially a <strong>subsidy for US corporations</strong>.</li>
          <li>• Foreign aid is about <strong>1% of the federal budget</strong> — yet polls show Americans think it&apos;s 25%.</li>
          <li>• The US provides less foreign aid as a % of GDP than <strong>every other major developed nation</strong>.</li>
          <li>• Pakistan received $25B in aid while harboring Osama bin Laden.</li>
          <li>• PEPFAR (HIV/AIDS program) has saved an estimated <strong>25 million lives</strong> — the most successful US aid program since the Marshall Plan.</li>
          <li>• The Marshall Plan cost <strong>$165B</strong> in today&apos;s dollars and rebuilt all of Western Europe. Afghanistan reconstruction cost <strong>$136B</strong> and rebuilt nothing lasting.</li>
          <li>• Egypt has received <strong>$1.5B/yr since 1978</strong> — 47 years of funding a military dictatorship to maintain peace with Israel.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/ukraine-proxy" className="text-red-800 hover:underline">→ Ukraine — proxy war analysis</Link></li>
          <li><Link href="/arms-sales" className="text-red-800 hover:underline">→ Arms Sales — $238B/yr in American weapons</Link></li>
          <li><Link href="/opportunity-cost" className="text-red-800 hover:underline">→ What else could this money buy?</Link></li>
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Military Spending — the full picture</Link></li>
        </ul>
      </div>
    </div>
  )
}
