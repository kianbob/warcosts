import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { AidRecipientsChart, CumulativeAidChart } from '@/components/charts/MilitaryAidCharts'

export const metadata: Metadata = {
  title: 'US Military Aid Worldwide — $68B/Year in Foreign Military Financing | WarCosts',
  description: 'The US spends $68 billion per year in foreign aid, with Israel ($3.8B), Egypt ($1.3B), and Ukraine leading recipients. Military aid, arms deals, human rights waivers, and who really benefits.',
  openGraph: {
    title: 'US Military Aid Worldwide — Who Gets American Weapons?',
    description: '$68B/year. Israel, Egypt, Ukraine top the list. Arms deals, conditions, and human rights waivers.',
    url: 'https://warcosts.org/military-aid',
    type: 'article',
  },
}

const topRecipients = [
  { country: 'Israel', annual: 3800000000, total: 158000000000, type: 'Military (FMF)', note: 'Guaranteed $3.8B/yr through 2028 MOU. Only country allowed to spend 26.3% of FMF on domestic defense industry. No conditions on human rights.' },
  { country: 'Ukraine', annual: 8000000000, total: 113000000000, type: 'Military + Economic', note: 'Surged from ~$500M/yr to $24B+ after 2022. Largest single aid package since the Marshall Plan.' },
  { country: 'Egypt', annual: 1300000000, total: 43000000000, type: 'Military (FMF)', note: '$1.3B/yr since 1979 Camp David Accords. Conditions waived annually despite coups, mass killings, political prisoners.' },
  { country: 'Jordan', annual: 1650000000, total: 22000000000, type: 'Military + Economic', note: 'Key ally bordering Iraq, Syria, Israel. $1.65B/yr. Hosts US troops and bases.' },
  { country: 'Afghanistan', annual: 300000000, total: 136000000000, type: 'Military + Reconstruction', note: '$136B total — built an army that collapsed in 11 days. Current aid is humanitarian only.' },
  { country: 'Iraq', annual: 1500000000, total: 82000000000, type: 'Military + Reconstruction', note: '$82B rebuilding a country the US destroyed. Counter-ISIS support ongoing.' },
  { country: 'Pakistan', annual: 500000000, total: 33000000000, type: 'Military + Coalition Support', note: 'Paid $33B for "coalition support" while harboring Osama bin Laden.' },
  { country: 'Colombia', annual: 800000000, total: 15000000000, type: 'Military + Counter-narcotics', note: 'Plan Colombia. $15B for drug war that didn\'t reduce drug production.' },
  { country: 'Taiwan', annual: 2000000000, total: 12000000000, type: 'Arms Sales', note: 'Arms sales increasing amid China tensions. $2B/yr in recent packages.' },
  { country: 'Saudi Arabia', annual: 0, total: 110000000000, type: 'Arms Sales (purchased)', note: 'Not "aid" — Saudi buys US weapons. $110B deal signed 2017. Used in Yemen war.' },
  { country: 'Japan', annual: 0, total: 0, type: 'Host nation support', note: 'Japan pays $2B/yr to host 54,000 US troops. Net recipient of security, not aid.' },
  { country: 'South Korea', annual: 0, total: 0, type: 'Host nation support', note: 'Pays ~$1B/yr to host 28,500 US troops. Ongoing since 1953 armistice.' },
  { country: 'Philippines', annual: 200000000, total: 3000000000, type: 'Military', note: 'Increasing aid tied to China sea disputes and expanded base access.' },
  { country: 'Somalia', annual: 250000000, total: 4000000000, type: 'Military + Counter-terror', note: 'AFRICOM operations. Training Somali forces. Drone strikes ongoing.' },
  { country: 'Niger', annual: 100000000, total: 1000000000, type: 'Military', note: '$100M air base built. US expelled after 2023 coup.' },
  { country: 'Tunisia', annual: 200000000, total: 2000000000, type: 'Military + Economic', note: 'Post-Arab Spring support. Democracy backsliding under Saied.' },
  { country: 'Lebanon', annual: 250000000, total: 3500000000, type: 'Military', note: 'Support for Lebanese Armed Forces as counterweight to Hezbollah.' },
  { country: 'Kenya', annual: 150000000, total: 1500000000, type: 'Military + Counter-terror', note: 'East Africa counter-terrorism partner. Al-Shabaab operations.' },
  { country: 'Ethiopia', annual: 100000000, total: 5000000000, type: 'Military + Economic', note: 'Aid suspended/restored cyclically. Tigray war complicated relationship.' },
  { country: 'Poland', annual: 500000000, total: 3000000000, type: 'Military (FMF + sales)', note: 'NATO frontline state. Billions in arms purchases. Hosts US rotational forces.' },
  { country: 'Greece', annual: 200000000, total: 2000000000, type: 'Military (FMF)', note: 'Base access agreements. F-35 deal pending.' },
  { country: 'Morocco', annual: 100000000, total: 1500000000, type: 'Military', note: 'Western Sahara recognition traded for normalization with Israel.' },
  { country: 'Vietnam', annual: 50000000, total: 500000000, type: 'Military + Maritime', note: 'Former enemy now strategic partner against China. Coast guard support.' },
  { country: 'Indonesia', annual: 100000000, total: 1500000000, type: 'Military', note: 'Largest Muslim-majority nation. F-15 sales. Indo-Pacific strategy.' },
  { country: 'Georgia', annual: 100000000, total: 2000000000, type: 'Military + Economic', note: 'NATO aspirant. Aid complicated by 2024 democracy backsliding.' },
]

const humanRightsWaivers = [
  { country: 'Egypt', year: '2013–present', details: 'Sisi regime killed 1,000+ protesters in Rabaa massacre. US waived Leahy Law conditions every year to continue $1.3B in aid.' },
  { country: 'Saudi Arabia', year: '2015–2022', details: 'US-made bombs used on school buses, weddings, funerals in Yemen. Arms sales continued. Biden promised to end support — didn\'t fully follow through.' },
  { country: 'Israel', year: '2023–present', details: 'Despite Leahy Law prohibiting aid to units committing gross human rights violations, no unit has ever been sanctioned. $3.8B continues unconditionally.' },
  { country: 'Colombia', year: '2000s', details: '"False positives" scandal: Colombian military killed 6,000+ civilians, dressed them as guerrillas for body count bonuses — while receiving US military aid.' },
  { country: 'Philippines', year: '2016–2022', details: 'Duterte\'s drug war killed 12,000-30,000. US military aid continued, including counterterrorism support.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'US Military Aid Worldwide — $68B/Year',
  description: 'Where US military aid goes, who benefits, and what conditions are waived.',
  author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  datePublished: '2026-03-01',
  mainEntityOfPage: 'https://warcosts.org/military-aid',
}

export default function MilitaryAidPage() {
  const aidData = topRecipients.filter(r => r.annual > 0).sort((a, b) => b.annual - a.annual).slice(0, 15)
  const cumulativeData = topRecipients.filter(r => r.total > 0).sort((a, b) => b.total - a.total).slice(0, 15)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Military Aid' }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Follow the Money</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          US Military Aid Worldwide
        </h1>
        <p className="text-stone-400 text-lg">
          The United States spends $68 billion per year in foreign assistance — much of it military.
          Israel gets $3.8 billion guaranteed. Egypt gets $1.3 billion to not attack Israel.
          Human rights conditions exist on paper. In practice, they are waived.
        </p>
      </div>

      <ShareButtons title="US Military Aid Worldwide — Who Gets American Weapons?" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$68B</p>
          <p className="text-sm text-stone-500">Annual Foreign Aid</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$3.8B</p>
          <p className="text-sm text-stone-500">Israel (Annual)</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$850B</p>
          <p className="text-sm text-stone-500">Total Since 2001</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">75+</p>
          <p className="text-sm text-stone-500">Recipient Countries</p>
        </div>
      </div>

      {/* Annual Aid Chart */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Top Recipients — Annual Military Aid</h2>
        <AidRecipientsChart data={aidData.map(r => ({ country: r.country, annual: r.annual }))} />
      </section>

      {/* Cumulative Aid Chart */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Cumulative Aid Since 2001</h2>
        <CumulativeAidChart data={cumulativeData.map(r => ({ country: r.country, total: r.total }))} />
      </section>

      {/* Country Details */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Country-by-Country Breakdown</h2>
        <div className="space-y-4">
          {topRecipients.slice(0, 15).map(r => (
            <div key={r.country} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-lg font-bold text-stone-800">{r.country}</h3>
                <span className="text-xs px-2 py-1 rounded bg-stone-200 text-stone-600">{r.type}</span>
                {r.annual > 0 && <span className="ml-auto text-red-700 font-bold">{fmtMoney(r.annual)}/yr</span>}
              </div>
              <p className="text-sm text-stone-600">{r.note}</p>
              {r.total > 0 && <p className="text-xs text-stone-400 mt-1">Cumulative since 2001: {fmtMoney(r.total)}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Human Rights Waivers */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Human Rights Waivers — When Conditions Don&apos;t Matter</h2>
        <p className="text-stone-600 mb-6">
          US law (the Leahy Law) prohibits military aid to foreign security forces that commit &ldquo;gross violations of human rights.&rdquo;
          In practice, the State Department waives these conditions routinely for strategic allies.
        </p>
        <div className="space-y-4">
          {humanRightsWaivers.map(w => (
            <div key={w.country} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-bold text-amber-800">{w.country}</h3>
                <span className="text-xs text-amber-600">{w.year}</span>
              </div>
              <p className="text-sm text-stone-700">{w.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Aid vs Arms Sales */}
      <section className="my-12 bg-stone-900 text-white rounded-xl p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Aid vs. Arms Sales: The Distinction That Doesn&apos;t Matter</h2>
        <div className="space-y-4 text-stone-300 text-sm">
          <p><strong className="text-white">Foreign Military Financing (FMF):</strong> Grants to buy US weapons. The money goes to the Pentagon and defense contractors, not the recipient country. Israel, Egypt, and Jordan are the largest FMF recipients.</p>
          <p><strong className="text-white">Foreign Military Sales (FMS):</strong> Government-to-government arms deals. Saudi Arabia&apos;s $110B deal, UAE&apos;s F-35 agreement. The buyer pays, but the US government brokers and approves.</p>
          <p><strong className="text-white">Direct Commercial Sales:</strong> US defense companies sell directly to foreign governments with State Department approval. Less oversight than FMS.</p>
          <p><strong className="text-white">The bottom line:</strong> Whether it&apos;s &ldquo;aid&rdquo; or &ldquo;sales,&rdquo; US weapons end up in the same hands, in the same conflicts, killing the same civilians. The distinction is accounting, not moral.</p>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/foreign-aid" className="text-red-700 hover:underline">→ Foreign Aid Data</Link>
        <Link href="/arms-sales" className="text-red-700 hover:underline">→ Arms Sales</Link>
        <Link href="/analysis/israel-lobby" className="text-red-700 hover:underline">→ Israel Lobby Analysis</Link>
      </div>

      <BackToTop />
    </div>
  )
}
