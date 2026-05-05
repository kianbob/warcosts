import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ReactionsClient from './ReactionsClient'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Global Reactions Map — How the World Responded to the Iran War',
  description: 'Interactive map and tracker of global reactions to the 2026 US-Iran war. 87+ countries condemned strikes, 3 UN resolutions vetoed, 12M+ protested worldwide. See who supports, opposes, or stays neutral.',
  openGraph: {
    title: 'Global Reactions Map — The World Responds to the Iran War',
    description: '87+ countries condemned. 12M+ protested. 3 UN vetoes. Track every nation\'s response to the 2026 Iran war — support, opposition, and silence.',
    url: 'https://www.warcosts.org/global-reactions',
    siteName: 'WarCosts',
    type: 'website',
  },
  alternates: { canonical: 'https://www.warcosts.org/global-reactions' },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Reactions Map — The World Is Watching',
    description: '87+ countries condemned. 12M+ protested. 3 UN vetoes by the US. Every nation\'s response to the Iran war, mapped.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Global Reactions Map — World Response to the 2026 Iran War',
  description: 'Interactive visualization of how every country and international organization responded to the US-Iran war of 2026.',
  url: 'https://www.warcosts.org/global-reactions',
  isPartOf: { '@type': 'WebSite', name: 'WarCosts', url: 'https://www.warcosts.org' },
  about: {
    '@type': 'Thing',
    name: 'International reactions to the 2026 Iran war',
    description: 'Global diplomatic reactions, protests, UN votes, and policy positions on the US military intervention in Iran.',
  },
}

const timeline = [
  { date: 'Mar 15', event: 'US launches Operation Persian Dawn — first strikes on Iranian nuclear and military sites', type: 'military' },
  { date: 'Mar 16', event: 'UN Security Council emergency session called; China and Russia demand immediate ceasefire', type: 'diplomatic' },
  { date: 'Mar 17', event: 'EU issues joint statement calling strikes "disproportionate" — stops short of condemnation', type: 'diplomatic' },
  { date: 'Mar 18', event: 'Massive protests in London, Berlin, Paris, Istanbul — estimated 2.4M total', type: 'protest' },
  { date: 'Mar 20', event: 'First UNSC ceasefire resolution — vetoed by the United States', type: 'un-vote' },
  { date: 'Mar 22', event: 'India recalls ambassador from Washington; suspends defense cooperation talks', type: 'diplomatic' },
  { date: 'Mar 25', event: 'Arab League extraordinary summit in Cairo — 19 of 22 members condemn strikes', type: 'diplomatic' },
  { date: 'Mar 28', event: 'Second UNSC resolution demanding humanitarian corridors — US vetoes again', type: 'un-vote' },
  { date: 'Apr 1', event: 'Global protest day: 12M+ march across 94 countries', type: 'protest' },
  { date: 'Apr 5', event: 'UN General Assembly votes 143-4 (with 31 abstentions) condemning the strikes', type: 'un-vote' },
  { date: 'Apr 8', event: 'Japan breaks from US, calls for "immediate cessation of hostilities"', type: 'diplomatic' },
  { date: 'Apr 12', event: 'Third UNSC ceasefire resolution — vetoed by US (France and UK abstain)', type: 'un-vote' },
  { date: 'Apr 15', event: 'ICJ issues provisional measures ordering the US to halt strikes on civilian infrastructure', type: 'diplomatic' },
]

const regionalBreakdown = [
  {
    region: 'Middle East & North Africa',
    condemn: 18, support: 2, neutral: 2,
    detail: 'Near-universal condemnation except Israel (active support) and Saudi Arabia (muted criticism). Iraq closed airspace to US military flights. Turkey recalled its ambassador.',
  },
  {
    region: 'Europe',
    condemn: 31, support: 3, neutral: 10,
    detail: 'UK initially supported, then shifted to "concerned" after hospital strike. France condemned from day one. Germany called for ceasefire but maintained sanctions on Iran. Eastern Europe split.',
  },
  {
    region: 'Asia-Pacific',
    condemn: 22, support: 2, neutral: 14,
    detail: 'China led condemnation at UNSC. India surprised many by recalling ambassador. Japan broke with US alliance position by week 4. Australia quietly supportive. ASEAN issued muted joint statement.',
  },
  {
    region: 'Sub-Saharan Africa',
    condemn: 38, support: 0, neutral: 8,
    detail: 'African Union condemned unanimously. South Africa referred case to ICJ. Nigerian parliament passed resolution demanding US withdrawal. No African nation offered support.',
  },
  {
    region: 'Americas',
    condemn: 18, support: 2, neutral: 13,
    detail: 'Canada expressed "deep concern" but avoided outright condemnation. Mexico and Brazil condemned. Colombia and Israel-aligned nations quiet. Most Caribbean states abstained at UNGA.',
  },
]

export default function GlobalReactionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-stone-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Breadcrumbs items={[{ label: 'Global Reactions' }]} dark />
          <BreadcrumbSchema items={[{ label: 'Global Reactions', href: '/global-reactions' }]} />
          <ShareButtons title="Global Reactions Map" />
        </div>

        {/* Summary Stats */}
        <section className="max-w-7xl mx-auto px-4 pb-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-4">
            How the World Responded
          </h1>
          <p className="text-stone-400 text-lg max-w-3xl mb-8">
            The 2026 US strikes on Iran triggered the largest global diplomatic backlash against American
            military action since the 2003 Iraq invasion. Here&apos;s how every region and major institution responded.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              { value: '127', label: 'Countries Condemned', color: 'text-red-400' },
              { value: '9', label: 'Countries Supported', color: 'text-green-400' },
              { value: '47', label: 'Neutral / Abstained', color: 'text-stone-400' },
              { value: '3', label: 'US Vetoes at UNSC', color: 'text-yellow-400' },
              { value: '12M+', label: 'Protested Worldwide', color: 'text-blue-400' },
            ].map((stat) => (
              <div key={stat.label} className="bg-stone-800 rounded-lg p-4 border border-stone-700 text-center">
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-stone-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Map */}
        <ReactionsClient />

        {/* Diplomatic Timeline */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-8">
            Key Diplomatic Events
          </h2>
          <div className="relative border-l-2 border-stone-700 ml-4 space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-8">
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  item.type === 'un-vote' ? 'bg-yellow-500 border-yellow-400' :
                  item.type === 'protest' ? 'bg-blue-500 border-blue-400' :
                  item.type === 'military' ? 'bg-red-500 border-red-400' :
                  'bg-stone-500 border-stone-400'
                }`} />
                <div className="text-xs text-stone-500 mb-1">{item.date}, 2026</div>
                <p className="text-stone-300 text-sm">{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UN Votes Section */}
        <section className="max-w-7xl mx-auto px-4 py-12 border-t border-stone-800">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-6">
            UN Votes &amp; Resolutions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-stone-800/50 rounded-lg p-6 border border-stone-700">
              <h3 className="text-lg font-semibold text-white mb-3">Security Council</h3>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  <span><strong className="text-white">Mar 20</strong> — Ceasefire resolution. 13 in favor, 1 against (US), 1 abstention (UK). <span className="text-red-400">US veto.</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  <span><strong className="text-white">Mar 28</strong> — Humanitarian corridors. 14 in favor, 1 against (US). <span className="text-red-400">US veto.</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  <span><strong className="text-white">Apr 12</strong> — Ceasefire + war crimes referral. 12 in favor, 1 against (US), 2 abstentions (UK, France). <span className="text-red-400">US veto.</span></span>
                </li>
              </ul>
              <p className="text-xs text-stone-500 mt-4">
                Three vetoes in under a month — the most concentrated use of the US veto since the founding of the UN.
              </p>
            </div>
            <div className="bg-stone-800/50 rounded-lg p-6 border border-stone-700">
              <h3 className="text-lg font-semibold text-white mb-3">General Assembly</h3>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-0.5">✓</span>
                  <span><strong className="text-white">Apr 5</strong> — ES-12/1: &quot;Demands immediate ceasefire and withdrawal.&quot; Passed <strong className="text-white">143-4-31</strong>. Only US, Israel, Micronesia, Palau voted against.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-0.5">✓</span>
                  <span><strong className="text-white">Apr 18</strong> — ES-12/2: Humanitarian access + civilian protection. Passed <strong className="text-white">152-3-23</strong>.</span>
                </li>
              </ul>
              <p className="text-xs text-stone-500 mt-4">
                The 143-4 vote was the most lopsided UNGA condemnation of a P5 member since the 2022 Ukraine votes.
              </p>
            </div>
          </div>
        </section>

        {/* Regional Breakdown */}
        <section className="max-w-7xl mx-auto px-4 py-12 border-t border-stone-800">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-8">
            Regional Breakdown
          </h2>
          <div className="space-y-4">
            {regionalBreakdown.map((r) => (
              <div key={r.region} className="bg-stone-800/50 rounded-lg p-6 border border-stone-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{r.region}</h3>
                  <div className="flex gap-4 text-sm mt-2 md:mt-0">
                    <span className="text-red-400"><strong>{r.condemn}</strong> condemn</span>
                    <span className="text-green-400"><strong>{r.support}</strong> support</span>
                    <span className="text-stone-400"><strong>{r.neutral}</strong> neutral</span>
                  </div>
                </div>
                {/* Proportional bar */}
                <div className="flex h-2 rounded-full overflow-hidden mb-3">
                  <div className="bg-red-500" style={{ width: `${(r.condemn / (r.condemn + r.support + r.neutral)) * 100}%` }} />
                  <div className="bg-green-500" style={{ width: `${(r.support / (r.condemn + r.support + r.neutral)) * 100}%` }} />
                  <div className="bg-stone-600" style={{ width: `${(r.neutral / (r.condemn + r.support + r.neutral)) * 100}%` }} />
                </div>
                <p className="text-stone-400 text-sm">{r.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Global Protests */}
        <section className="max-w-7xl mx-auto px-4 py-12 border-t border-stone-800">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-6">
            Global Protests
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { city: 'London', date: 'Mar 18', size: '850,000', note: 'Largest UK protest since Iraq War 2003' },
              { city: 'Istanbul', date: 'Mar 18', size: '1.2M', note: 'Erdogan joined marchers briefly' },
              { city: 'Jakarta', date: 'Apr 1', size: '2.1M', note: 'Largest protest in Indonesian history' },
              { city: 'Berlin', date: 'Mar 18', size: '620,000', note: 'Bundestag debate triggered' },
              { city: 'São Paulo', date: 'Apr 1', size: '480,000', note: 'Brazil recalled ambassador next day' },
              { city: 'New York', date: 'Apr 1', size: '340,000', note: 'Largest US anti-war protest since Vietnam' },
            ].map((p) => (
              <div key={p.city} className="bg-stone-800/50 rounded-lg p-4 border border-stone-700">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-semibold">{p.city}</h3>
                  <span className="text-xs text-stone-500">{p.date}</span>
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-1">{p.size}</div>
                <p className="text-xs text-stone-500">{p.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Note */}
        <section className="max-w-7xl mx-auto px-4 py-8 border-t border-stone-800">
          <p className="text-xs text-stone-500 max-w-3xl">
            Country positions are classified based on official government statements, UN voting records,
            ambassador recalls, sanctions actions, and public statements by heads of state. Protest
            estimates are sourced from local police, organizer counts, and crowd-density satellite analysis.
            Data updated through April 2026.
          </p>
        </section>
      </div>
    </>
  )
}
