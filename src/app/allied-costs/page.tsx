import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { AlliedSpendingChart } from './AlliedCostsCharts'

export const metadata: Metadata = {
  title: 'The Bill for America\'s Allies — Allied War Costs — WarCosts.org',
  description: 'What did allied nations spend and sacrifice in US-led wars? From the UK\'s $30B+ to Canada\'s 158 dead in Afghanistan — the cost of following America to war.',
  keywords: ['allied war costs', 'NATO war spending', 'UK Iraq war', 'coalition casualties', 'allied deaths Afghanistan', 'Canada Afghanistan', 'Australia Iraq war', 'coalition of the willing'],
  alternates: { canonical: 'https://www.warcosts.org/allied-costs' },
  openGraph: {
    title: 'The Bill for America\'s Allies — Allied War Costs',
    description: 'What did allied nations spend and sacrifice following America to war?',
    url: 'https://warcosts.org/allied-costs',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Bill for America\'s Allies',
    description: '$1T+ in allied spending. 1,400+ allied troops killed. Was it worth it?',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Bill for America\'s Allies — Allied War Costs',
  description: 'What did allied nations spend and sacrifice in US-led wars since 2001?',
  url: 'https://www.warcosts.org/allied-costs',
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
}

interface AllyProfile {
  country: string
  flag: string
  afghanistanSpend: string
  iraqSpend: string
  otherSpend: string
  totalSpend: string
  afghanistanDeaths: number
  iraqDeaths: number
  otherDeaths: number
  totalDeaths: number
  keyFacts: string[]
  assessment: string
  benefit: 'minimal' | 'mixed' | 'negative'
}

const allies: AllyProfile[] = [
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    afghanistanSpend: '$30B+',
    iraqSpend: '$15B+',
    otherSpend: '$2B (Libya)',
    totalSpend: '$47B+',
    afghanistanDeaths: 457,
    iraqDeaths: 179,
    otherDeaths: 0,
    totalDeaths: 636,
    keyFacts: [
      'Tony Blair committed British forces based on WMD intelligence later proven false',
      'The 2016 Chilcot Inquiry concluded the UK joined Iraq "before peaceful options were exhausted"',
      'British forces in Basra faced a deteriorating situation with inadequate equipment — soldiers\' families had to buy body armor privately',
      'UK veterans face similar PTSD and suicide crises to US counterparts',
      'Cost estimate excludes long-term veteran care, estimated at $10B+ additional',
    ],
    assessment: 'Britain\'s "special relationship" with the US meant it joined every major US-led operation since 2001. The Chilcot Inquiry — the UK\'s equivalent of the 9/11 Commission but far more critical — found the decision to join Iraq was based on flawed intelligence and political pressure. British combat effectiveness was high but resources were spread thin across two simultaneous wars.',
    benefit: 'negative',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    afghanistanSpend: '$7.2B',
    iraqSpend: '$3.5B',
    otherSpend: '$200M (other)',
    totalSpend: '$10.9B+',
    afghanistanDeaths: 41,
    iraqDeaths: 2,
    otherDeaths: 0,
    totalDeaths: 43,
    keyFacts: [
      'The Brereton Report (2020) found credible evidence that Australian special forces unlawfully killed 39 Afghan prisoners and civilians',
      'ANZUS alliance obligations were the primary driver of participation',
      'War crimes investigations are ongoing — 4 soldiers charged as of 2024',
      'Australia deployed special forces disproportionate to overall force size',
      'Cost does not include the $5B+ AUKUS submarine program driven partly by post-war strategic shifts',
    ],
    assessment: 'Australia joined US-led wars primarily due to ANZUS alliance obligations and desire to maintain the US security guarantee in the Pacific. The Brereton war crimes revelations shocked the nation and raised fundamental questions about the culture of special forces operations. Strategically, Australia\'s main security challenges (China, Pacific stability) were arguably neglected while forces were committed to the Middle East.',
    benefit: 'negative',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    afghanistanSpend: '$18B+',
    iraqSpend: '$0 (declined)',
    otherSpend: '$400M (Libya)',
    totalSpend: '$18.4B+',
    afghanistanDeaths: 158,
    iraqDeaths: 0,
    otherDeaths: 0,
    totalDeaths: 158,
    keyFacts: [
      'Canada notably refused to join Iraq in 2003 — one of the few close US allies to say no',
      'In Afghanistan, Canadian forces were assigned Kandahar — one of the most dangerous provinces',
      '158 dead represents Canada\'s heaviest combat losses since the Korean War',
      'Per capita, Canada suffered higher casualty rates than many larger NATO allies',
      'PM Jean Chrétien\'s refusal on Iraq is now seen as vindicated by history',
    ],
    assessment: 'Canada\'s experience is instructive: it said no to Iraq (correctly, as WMD claims proved false) but committed heavily to Afghanistan out of genuine NATO solidarity after 9/11. Canada was assigned Kandahar province, one of the most violent areas, and suffered disproportionate casualties. The Afghan mission consumed Canada\'s defense budget and military capacity for a decade. The country received little strategic benefit.',
    benefit: 'minimal',
  },
  {
    country: 'France',
    flag: '🇫🇷',
    afghanistanSpend: '$4B+',
    iraqSpend: '$0 (refused)',
    otherSpend: '$3.5B (Libya) + $8B+ (Mali/Sahel)',
    totalSpend: '$15.5B+',
    afghanistanDeaths: 90,
    iraqDeaths: 0,
    otherDeaths: 58,
    totalDeaths: 148,
    keyFacts: [
      'Jacques Chirac famously refused to join Iraq — France was vilified in the US ("freedom fries")',
      'France led the Libya intervention that created a failed state and migrant crisis on Europe\'s doorstep',
      'Post-Libya chaos spilled into the Sahel, requiring France\'s $8B+ Operation Barkhane',
      'France withdrew from Mali in 2022 after anti-French sentiment grew — partly blowback from Libya',
      'French intelligence warned the US about Iraq WMD claims being unreliable — they were ignored',
    ],
    assessment: 'France correctly refused Iraq but led the Libya intervention, which may have been its biggest post-Cold War strategic error. Libya\'s collapse destabilized the entire Sahel, sent waves of migrants toward Europe, and drew France into a decade-long counterterrorism campaign in Mali, Niger, and Burkina Faso. The Law of Unintended Consequences played out perfectly: France created its own blowback.',
    benefit: 'negative',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    afghanistanSpend: '$20B+',
    iraqSpend: '$500M (support only)',
    otherSpend: '$300M (other)',
    totalSpend: '$20.8B+',
    afghanistanDeaths: 59,
    iraqDeaths: 0,
    otherDeaths: 0,
    totalDeaths: 59,
    keyFacts: [
      'Germany\'s deployment to Afghanistan was its largest military operation since WWII',
      'The Kunduz airstrike (2009), ordered by a German colonel, killed up to 142 people including civilians — Germany\'s worst single incident',
      'Germany refused Iraq and kept its Afghan operations officially "stabilization," not combat — despite extensive combat',
      'Deployment required a historic shift in German defense policy and public attitudes toward military force',
      'Cost estimate includes €12.5B in direct military costs and €8B in development/reconstruction aid',
    ],
    assessment: 'For a country that had defined its post-WWII identity around pacifism, Afghanistan was transformative. Germany committed significantly to NATO\'s mission but maintained the fiction that it was a stabilization mission, not a war, leading to political contortions that undermined operational effectiveness. The 2009 Kunduz airstrike was a national trauma. Germany got nothing strategically from Afghanistan.',
    benefit: 'minimal',
  },
  {
    country: 'Italy',
    flag: '🇮🇹',
    afghanistanSpend: '$8B+',
    iraqSpend: '$3B+',
    otherSpend: '$1.5B (Libya)',
    totalSpend: '$12.5B+',
    afghanistanDeaths: 53,
    iraqDeaths: 33,
    otherDeaths: 0,
    totalDeaths: 86,
    keyFacts: [
      'The Nasiriyah bombing (2003) killed 19 Italian soldiers and 9 Iraqis — Italy\'s worst military loss since WWII',
      'Italy was a key partner in both Iraq and Afghanistan despite significant public opposition',
      'Italian intelligence officer Nicola Calipari was killed by US fire at a checkpoint in Baghdad (2005) while rescuing a kidnapped journalist',
      'Italy\'s proximity to Libya meant it bore the brunt of the post-intervention migrant crisis',
      'Libya was Italy\'s largest oil supplier before the 2011 intervention',
    ],
    assessment: 'Italy paid a particularly cruel price for the Libya intervention: its former colony\'s collapse created a massive migration route across the Mediterranean that continues to destabilize Italian and European politics. Italy also lost its primary North African oil supplier. The Nasiriyah bombing and Calipari incident created lasting public skepticism about US-led operations.',
    benefit: 'negative',
  },
]

const coalitionDeaths = [
  { country: 'United Kingdom', afghanistan: 457, iraq: 179, total: 636 },
  { country: 'Canada', afghanistan: 158, iraq: 0, total: 158 },
  { country: 'France', afghanistan: 90, iraq: 0, total: 90 },
  { country: 'Italy', afghanistan: 53, iraq: 33, total: 86 },
  { country: 'Germany', afghanistan: 59, iraq: 0, total: 59 },
  { country: 'Poland', afghanistan: 44, iraq: 23, total: 67 },
  { country: 'Denmark', afghanistan: 43, iraq: 8, total: 51 },
  { country: 'Australia', afghanistan: 41, iraq: 2, total: 43 },
  { country: 'Spain', afghanistan: 35, iraq: 11, total: 46 },
  { country: 'Georgia', afghanistan: 32, iraq: 5, total: 37 },
  { country: 'Romania', afghanistan: 27, iraq: 3, total: 30 },
  { country: 'Netherlands', afghanistan: 25, iraq: 2, total: 27 },
  { country: 'Turkey', afghanistan: 15, iraq: 0, total: 15 },
  { country: 'Czech Republic', afghanistan: 14, iraq: 1, total: 15 },
  { country: 'New Zealand', afghanistan: 10, iraq: 1, total: 11 },
  { country: 'Other coalition', afghanistan: 145, iraq: 69, total: 214 },
]

const totalCoalitionDeaths = coalitionDeaths.reduce((sum, c) => sum + c.total, 0)

export default function AlliedCostsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Allied Costs' }]} dark />
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The Bill for America&apos;s Allies
          </h1>
          <p className="text-2xl md:text-3xl text-stone-300 font-[family-name:var(--font-playfair)] italic mb-6">
            $1 Trillion+. 1,500+ Killed. Was It Worth It?
          </p>
          <p className="text-lg text-stone-400 max-w-3xl leading-relaxed">
            When America goes to war, it doesn&apos;t go alone. Alliance obligations, political pressure,
            and the desire to maintain the US security umbrella have pulled dozens of nations into conflicts
            that were not their own — at staggering cost in blood and treasure.
          </p>
          <ShareButtons title="The Bill for America's Allies — Allied War Costs" />
        </div>
      </section>

      <section className="bg-stone-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Summary stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Allied nations in Afghanistan', value: '40+' },
              { label: 'Coalition military deaths', value: `${totalCoalitionDeaths.toLocaleString()}+` },
              { label: 'Combined allied spending', value: '$1T+' },
              { label: 'Countries that benefited', value: 'Debatable' },
            ].map((s, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-stone-200 text-center">
                <p className="text-2xl md:text-3xl font-bold text-red-700">{s.value}</p>
                <p className="text-sm text-stone-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="mb-12">
            <AlliedSpendingChart />
          </div>

          {/* Coalition deaths table */}
          <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-12">
            <div className="p-6 border-b border-stone-200">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900">
                Coalition Military Deaths by Country
              </h2>
              <p className="text-sm text-stone-500 mt-1">
                Non-US coalition fatalities in Afghanistan and Iraq
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-stone-700">Country</th>
                    <th className="text-right px-4 py-3 font-semibold text-stone-700">Afghanistan</th>
                    <th className="text-right px-4 py-3 font-semibold text-stone-700">Iraq</th>
                    <th className="text-right px-4 py-3 font-semibold text-red-700">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {coalitionDeaths.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                      <td className="px-4 py-3 font-medium text-stone-900">{row.country}</td>
                      <td className="px-4 py-3 text-right text-stone-600">{row.afghanistan}</td>
                      <td className="px-4 py-3 text-right text-stone-600">{row.iraq}</td>
                      <td className="px-4 py-3 text-right font-bold text-red-700">{row.total}</td>
                    </tr>
                  ))}
                  <tr className="bg-stone-900 text-white font-bold">
                    <td className="px-4 py-3">Total Non-US Coalition</td>
                    <td className="px-4 py-3 text-right">{coalitionDeaths.reduce((s, c) => s + c.afghanistan, 0).toLocaleString()}</td>
                    <td className="px-4 py-3 text-right">{coalitionDeaths.reduce((s, c) => s + c.iraq, 0).toLocaleString()}</td>
                    <td className="px-4 py-3 text-right text-red-400">{totalCoalitionDeaths.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Country profiles */}
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900 mb-8">
            Country Profiles
          </h2>

          {allies.map((ally, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 md:p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{ally.flag}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900">
                    {ally.country}
                  </h3>
                  <p className="text-sm text-stone-500">
                    Total: {ally.totalSpend} spent · {ally.totalDeaths} killed
                  </p>
                </div>
                <span className={`ml-auto px-3 py-1 rounded-full text-xs font-semibold ${
                  ally.benefit === 'negative' ? 'bg-red-100 text-red-700' :
                  ally.benefit === 'minimal' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {ally.benefit === 'negative' ? 'Net Negative' : ally.benefit === 'minimal' ? 'Minimal Benefit' : 'Mixed'}
                </span>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div className="bg-stone-50 p-3 rounded-lg">
                  <p className="text-xs text-stone-500">Afghanistan</p>
                  <p className="font-bold text-stone-900">{ally.afghanistanSpend}</p>
                  <p className="text-xs text-red-600">{ally.afghanistanDeaths} killed</p>
                </div>
                <div className="bg-stone-50 p-3 rounded-lg">
                  <p className="text-xs text-stone-500">Iraq</p>
                  <p className="font-bold text-stone-900">{ally.iraqSpend}</p>
                  <p className="text-xs text-red-600">{ally.iraqDeaths} killed</p>
                </div>
                <div className="bg-stone-50 p-3 rounded-lg">
                  <p className="text-xs text-stone-500">Other Operations</p>
                  <p className="font-bold text-stone-900">{ally.otherSpend}</p>
                  <p className="text-xs text-red-600">{ally.otherDeaths} killed</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                  <p className="text-xs text-red-600">Total</p>
                  <p className="font-bold text-red-700">{ally.totalSpend}</p>
                  <p className="text-xs text-red-600 font-semibold">{ally.totalDeaths} killed</p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {ally.keyFacts.map((fact, j) => (
                  <li key={j} className="flex gap-2 text-sm text-stone-700">
                    <span className="text-red-600 mt-1 shrink-0">▸</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-stone-50 p-4 rounded-lg">
                <h4 className="font-semibold text-stone-800 text-sm mb-1">Strategic Assessment</h4>
                <p className="text-sm text-stone-700 leading-relaxed">{ally.assessment}</p>
              </div>
            </div>
          ))}

          {/* Following America to War analysis */}
          <section className="bg-stone-900 text-white p-8 md:p-12 rounded-xl mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6">
              Following America to War
            </h2>
            <div className="space-y-4 text-stone-300 leading-relaxed">
              <p>
                Why do allied nations follow the United States into wars that often have little to do with
                their own national security? The answer is a combination of <strong className="text-white">alliance obligations</strong>,
                <strong className="text-white"> political pressure</strong>, and <strong className="text-white">security dependence</strong>.
              </p>
              <p>
                <strong className="text-white">NATO&apos;s Article 5</strong> was invoked for the first time after 9/11 — an attack
                on one is an attack on all. This made Afghanistan a treaty obligation. But Iraq had no such
                justification. The US pressured allies through bilateral channels, and those who refused (France,
                Germany, Canada for Iraq) faced political retaliation, including the infamous &ldquo;freedom fries&rdquo;
                rebranding and being called &ldquo;Old Europe&rdquo; by Defense Secretary Rumsfeld.
              </p>
              <p>
                For many allies, the calculus was simple: <em>we need America&apos;s security guarantee more than
                America needs our troops</em>. Australia fears abandonment in the Pacific. Eastern European nations
                fear Russian aggression. The UK defines its global relevance through the &ldquo;special relationship.&rdquo;
                Each had reasons beyond the merits of any individual war.
              </p>
              <p>
                The result is a system where the United States makes decisions about war, and allies bear costs
                that are disproportionate to their influence on those decisions. They provide political legitimacy
                and some military capability, but rarely shape strategy. As one British general reportedly said
                about Basra: <em>&ldquo;We had responsibility without authority.&rdquo;</em>
              </p>
              <p className="text-white font-semibold">
                NATO spent over $1 trillion on US-led operations since 2001. The alliance that was built to
                defend Europe was redirected to fight wars in Central Asia and the Middle East — wars that
                made Europe less safe, not more.
              </p>
            </div>
          </section>

          {/* Did allies benefit? */}
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900 mb-6">
              Did Allies Benefit? A Scorecard
            </h2>
            <div className="space-y-4">
              {[
                { question: 'Is any ally more secure today than in 2001?', answer: 'No. Europe faces greater terrorism risk, a migration crisis partly caused by Libya and Syria, and a resurgent Russia that benefited from Western distraction.' },
                { question: 'Did alliance participation strengthen ties with the US?', answer: 'Briefly. The UK and Australia received intelligence-sharing benefits but were also dragged into operations they couldn\'t influence. Countries that refused (France, Canada on Iraq) suffered no long-term consequences.' },
                { question: 'Were military capabilities improved?', answer: 'Partially. NATO forces gained combat experience but at the cost of equipment degradation, PTSD among veterans, and reduced readiness for conventional defense — which became critical when Russia invaded Ukraine in 2022.' },
                { question: 'Was the mission accomplished?', answer: 'No. The Taliban retook Afghanistan in August 2021. Iraq remains unstable. Libya is a failed state. The money and lives spent achieved no lasting strategic objective.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-stone-200">
                  <h3 className="font-semibold text-stone-900 mb-2">{item.question}</h3>
                  <p className="text-stone-700 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sources */}
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900 mb-4">
              Sources
            </h2>
            <ul className="space-y-2 text-sm text-stone-600">
              <li>· iCasualties.org — Coalition casualty database</li>
              <li>· Brown University Costs of War Project — allied spending estimates</li>
              <li>· UK Chilcot Inquiry (2016) — Iraq War investigation</li>
              <li>· Australian Brereton Report (2020) — war crimes investigation</li>
              <li>· NATO official statistics on ISAF/Resolute Support contributions</li>
              <li>· National defense ministry reports (UK MOD, Australian DOD, Canadian DND, German BMVg)</li>
              <li>· Congressional Research Service reports on coalition contributions</li>
            </ul>
          </section>

          {/* Related */}
          <section className="bg-stone-100 p-8 rounded-xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900 mb-4">
              Related Pages
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/the-other-side" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-700">The Other Side</h3>
                <p className="text-sm text-stone-600 mt-1">Voices from the countries we bombed</p>
              </Link>
              <Link href="/private-war" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-700">The Contractors&apos; War</h3>
                <p className="text-sm text-stone-600 mt-1">When profit meets combat</p>
              </Link>
              <Link href="/contractors" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-700">Defense Contractors</h3>
                <p className="text-sm text-stone-600 mt-1">Who profits from war</p>
              </Link>
            </div>
          </section>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
