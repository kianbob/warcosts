import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Top 10 Defense Contractors: Who Profits From War',
  description: 'Lockheed Martin: $65B. RTX: $40B. Northrop Grumman: $39B. The corporations that profit from war — revenue, lobbying, and CEO pay.',
  openGraph: {
    title: 'The Top 10 Defense Contractors: Who Profits From War',
    description: '$400B+ in annual revenue. $120M in lobbying. 700+ lobbyists. The military-industrial complex Eisenhower warned us about.',
    url: 'https://www.warcosts.org/analysis/defense-contractors-exposed',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/defense-contractors-exposed',
  },
}

const topContractors = [
  {
    rank: 1, name: 'Lockheed Martin', revenue: 65.4, dodContracts: 46.0, profitMargin: 11.2, ceoComp: 25.2,
    lobbySpend: 12.8, employees: 122000, products: 'F-35, F-22, C-130, THAAD, Javelin missiles, Aegis Combat System',
    note: 'Largest defense contractor on Earth. F-35 program alone is $1.7 trillion — the most expensive weapons system in history.',
  },
  {
    rank: 2, name: 'RTX (Raytheon Technologies)', revenue: 69.0, dodContracts: 40.0, profitMargin: 8.5, ceoComp: 22.0,
    lobbySpend: 10.5, employees: 185000, products: 'Patriot missiles, Tomahawk missiles, Stinger, Pratt & Whitney engines',
    note: 'Merger of Raytheon and United Technologies in 2020. Tomahawk missiles: $2M each, used extensively in every war since 1991.',
  },
  {
    rank: 3, name: 'Northrop Grumman', revenue: 39.3, dodContracts: 28.0, profitMargin: 12.1, ceoComp: 23.6,
    lobbySpend: 13.0, employees: 95000, products: 'B-21 Raider, B-2 Spirit, Global Hawk, James Webb Space Telescope',
    note: 'Building the B-21 bomber ($700M each). Also major cyber warfare and space contractor.',
  },
  {
    rank: 4, name: 'Boeing Defense', revenue: 29.0, dodContracts: 24.0, profitMargin: -2.5, ceoComp: 33.0,
    lobbySpend: 11.2, employees: 171000, products: 'F/A-18, Apache, Chinook, KC-46 tanker, P-8 Poseidon',
    note: 'Struggling with quality issues (KC-46, 737 MAX) yet continues to receive massive contracts.',
  },
  {
    rank: 5, name: 'General Dynamics', revenue: 42.3, dodContracts: 28.0, profitMargin: 10.8, ceoComp: 22.5,
    lobbySpend: 8.9, employees: 110000, products: 'Virginia-class submarines, Abrams tanks, Gulfstream jets, IT systems',
    note: 'Builds nuclear submarines ($3.4B each) and the M1 Abrams tank. Also major IT contractor.',
  },
  {
    rank: 6, name: 'BAE Systems', revenue: 27.6, dodContracts: 15.0, profitMargin: 9.2, ceoComp: 6.8,
    lobbySpend: 5.1, employees: 93500, products: 'Bradley fighting vehicle, electronic warfare, naval guns, munitions',
    note: 'UK-based but major US defense player through BAE Systems Inc. subsidiary.',
  },
  {
    rank: 7, name: 'L3Harris Technologies', revenue: 21.1, dodContracts: 12.0, profitMargin: 10.5, ceoComp: 20.3,
    lobbySpend: 6.2, employees: 50000, products: 'Communication systems, night vision, ISR, electronic warfare',
    note: 'Formed from 2019 merger. Dominates military communications and surveillance equipment.',
  },
  {
    rank: 8, name: 'Huntington Ingalls', revenue: 11.5, dodContracts: 9.8, profitMargin: 7.3, ceoComp: 16.8,
    lobbySpend: 3.2, employees: 44000, products: 'Aircraft carriers, destroyers, submarines, nuclear refueling',
    note: 'Only company that builds aircraft carriers ($13B each). Sole builder of Ford-class carriers.',
  },
  {
    rank: 9, name: 'Leidos', revenue: 15.4, dodContracts: 10.0, profitMargin: 7.8, ceoComp: 17.5,
    lobbySpend: 4.8, employees: 47000, products: 'IT systems, cybersecurity, intelligence analysis, health IT',
    note: 'Major IT and intelligence contractor; spun off from SAIC. Manages many classified programs.',
  },
  {
    rank: 10, name: 'SAIC', revenue: 7.4, dodContracts: 5.5, profitMargin: 6.9, ceoComp: 14.2,
    lobbySpend: 2.8, employees: 26000, products: 'IT modernization, space systems, training simulators',
    note: 'Engineering and integration services. Less flashy than weapons makers but deeply embedded in military IT.',
  },
]

const revolvingDoorExamples = [
  { name: 'Lloyd Austin', from: 'Secretary of Defense', to: 'Board of Raytheon (pre-SecDef)', note: 'Earned $1.4M from Raytheon board seat, then became Defense Secretary overseeing Raytheon contracts' },
  { name: 'Mark Esper', from: 'Secretary of Defense', to: 'Raytheon VP (pre-SecDef)', note: 'Former Raytheon lobbyist who became Army Secretary, then SecDef' },
  { name: 'James Mattis', from: 'Secretary of Defense', to: 'General Dynamics Board (post-SecDef)', note: 'CENTCOM commander → SecDef → defense contractor board member' },
  { name: 'Patrick Shanahan', from: 'Acting Secretary of Defense', to: 'Boeing executive (pre-SecDef)', note: 'Spent 30 years at Boeing before overseeing defense procurement' },
  { name: 'Mark Welsh', from: 'Air Force Chief of Staff', to: 'Northrop Grumman Board', note: 'Oversaw bomber procurement, then joined the company that won the contract' },
]

const stockPerformance = [
  { event: '9/11 Attacks (2001)', companies: 'All defense', gain: '+30-40% in 12 months', note: 'War on Terror began; defense budgets doubled over next 7 years' },
  { event: 'Iraq Invasion (2003)', companies: 'Halliburton, Lockheed', gain: 'Halliburton +300% by 2006', note: 'KBR (Halliburton) received $45B in Iraq contracts' },
  { event: 'ISIS Rise (2014)', companies: 'Raytheon, Lockheed', gain: '+20-30%', note: 'New air campaign meant more missiles and bombs' },
  { event: 'Ukraine Invasion (2022)', companies: 'All defense', gain: '+25-40%', note: 'Lockheed stock hit all-time high; arms shipments to Ukraine boosted orders' },
  { event: 'Iran War (2026)', companies: 'All defense', gain: '+15-30% (ongoing)', note: 'Missile demand, naval operations, and procurement urgency' },
]

export default function DefenseContractorsExposedPage() {
  const totalRevenue = topContractors.reduce((sum, c) => sum + c.revenue, 0)
  const totalLobby = topContractors.reduce((sum, c) => sum + c.lobbySpend, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The Top 10 Defense Contractors: Who Profits From War',
        description: 'Meet the corporations that profit from war — their revenue, lobbying spend, CEO pay, and the revolving door between the Pentagon and the boardroom.',
        url: 'https://www.warcosts.org/analysis/defense-contractors-exposed',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-28',
        dateModified: '2026-03-28',
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Defense Contractors Exposed' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Follow the Money</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          The Top 10 Defense Contractors: Who Profits From War
        </h1>
        <p className="text-xl text-stone-300 mb-4">
          ${totalRevenue.toFixed(0)}B+ in combined annual revenue. ${totalLobby.toFixed(0)}M in lobbying. 700+ lobbyists. The military-industrial complex is real.
        </p>
        <p className="text-stone-400 text-lg">
          In 1961, President Eisenhower warned America about the &ldquo;military-industrial complex&rdquo; — an
          alliance between defense corporations and the government that would drive perpetual military spending.
          Sixty-five years later, the top 10 defense contractors earn over ${totalRevenue.toFixed(0)} billion
          per year, spend ${totalLobby.toFixed(0)} million on lobbying, employ more lobbyists than Congress has
          members, and their executives rotate seamlessly between corporate boardrooms and the Pentagon.
          Eisenhower was right. Here are the numbers.
        </p>
      </div>

      <ShareButtons title="The Top 10 Defense Contractors: Who Profits From War" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: `$${totalRevenue.toFixed(0)}B+`, label: 'Combined Revenue', sub: 'Top 10 defense contractors' },
          { val: `$${totalLobby.toFixed(0)}M`, label: 'Lobbying Spend', sub: 'Annual lobbying expenditure' },
          { val: '700+', label: 'Lobbyists', sub: 'More than 1 per member of Congress' },
          { val: '10-15%', label: 'Profit Margins', sub: 'On government contracts' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Top 10 detailed */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Top 10: By the Numbers</h2>
        <div className="space-y-4">
          {topContractors.map(c => (
            <div key={c.name} className="bg-white border rounded-lg p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-stone-400 text-sm font-mono">#{c.rank}</span>
                  <h3 className="font-bold text-lg text-stone-900">{c.name}</h3>
                </div>
                <span className="text-red-700 font-bold text-xl">${c.revenue}B</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                <div className="bg-stone-50 rounded p-2 text-center">
                  <p className="text-sm font-bold text-stone-700">${c.dodContracts}B</p>
                  <p className="text-[10px] text-stone-400">DoD Contracts</p>
                </div>
                <div className="bg-stone-50 rounded p-2 text-center">
                  <p className="text-sm font-bold text-stone-700">{c.profitMargin}%</p>
                  <p className="text-[10px] text-stone-400">Profit Margin</p>
                </div>
                <div className="bg-stone-50 rounded p-2 text-center">
                  <p className="text-sm font-bold text-stone-700">${c.ceoComp}M</p>
                  <p className="text-[10px] text-stone-400">CEO Compensation</p>
                </div>
                <div className="bg-stone-50 rounded p-2 text-center">
                  <p className="text-sm font-bold text-stone-700">${c.lobbySpend}M</p>
                  <p className="text-[10px] text-stone-400">Lobbying/Year</p>
                </div>
              </div>
              <p className="text-xs text-stone-500 mb-1"><strong>Key products:</strong> {c.products}</p>
              <p className="text-sm text-stone-600">{c.note}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3">Sources: Annual SEC filings; OpenSecrets.org lobbying database; DoD contract announcements; proxy statements for CEO compensation</p>
      </section>

      {/* CEO vs enlisted */}
      <section className="mb-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">CEO Pay vs. The Troops They Equip</h2>
          <p className="text-stone-300 mb-6">
            Defense contractor CEOs earn their pay from government contracts funded by taxpayers. Here&apos;s how
            their compensation compares to the troops who use their products:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { role: 'Lockheed Martin CEO', pay: '$25.2M/year', ratio: '530x' },
              { role: 'Boeing CEO', pay: '$33.0M/year', ratio: '694x' },
              { role: 'Average of Top 10 CEOs', pay: '$21.3M/year', ratio: '448x' },
              { role: 'E-1 Private (entry level)', pay: '$24,480/year', ratio: '1x' },
              { role: 'E-5 Sergeant (5 years)', pay: '$47,520/year', ratio: '2x' },
              { role: 'O-3 Captain (4 years)', pay: '$71,520/year', ratio: '3x' },
            ].map(item => (
              <div key={item.role} className={`rounded-lg p-3 ${item.ratio.includes('x') && parseInt(item.ratio) > 100 ? 'bg-red-900/30' : 'bg-white/10'}`}>
                <div className="flex justify-between items-start">
                  <span className="text-white text-sm">{item.role}</span>
                  <span className="text-red-400 font-bold">{item.pay}</span>
                </div>
                <p className="text-stone-500 text-xs mt-1">Ratio to E-1: {item.ratio}</p>
              </div>
            ))}
          </div>
          <p className="text-stone-400 text-sm mt-4">
            The average defense contractor CEO earns in one day what an enlisted soldier earns in a year.
          </p>
        </div>
      </section>

      {/* Revolving door */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Revolving Door</h2>
        <p className="text-stone-700 mb-4">
          Pentagon officials approve contracts worth billions, then retire and take jobs with the same companies.
          Since 2001, over 80% of retiring 4-star generals and admirals have taken positions in the defense
          industry. Here are some examples:
        </p>
        <div className="space-y-3">
          {revolvingDoorExamples.map(ex => (
            <div key={ex.name} className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-stone-900">{ex.name}</h3>
              <p className="text-sm text-stone-600 mt-1">{ex.note}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3">Sources: Project on Government Oversight (POGO); OpenSecrets.org; Senate Armed Services Committee disclosure filings</p>
      </section>

      {/* Stocks during wars */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">War Is Good for Business</h2>
        <p className="text-stone-700 mb-4">
          Defense contractor stocks consistently surge when wars begin or escalate. The pattern is unmistakable:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 font-semibold">Event</th>
                <th className="text-left p-3 font-semibold">Key Companies</th>
                <th className="text-right p-3 font-semibold">Stock Gain</th>
                <th className="text-left p-3 font-semibold">Why</th>
              </tr>
            </thead>
            <tbody>
              {stockPerformance.map(s => (
                <tr key={s.event} className="border-t">
                  <td className="p-3 font-semibold">{s.event}</td>
                  <td className="p-3 text-stone-600">{s.companies}</td>
                  <td className="p-3 text-right text-green-700 font-bold">{s.gain}</td>
                  <td className="p-3 text-stone-500 text-xs">{s.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-stone-700 mt-4 text-sm">
          If you had invested $10,000 in Lockheed Martin stock on September 10, 2001, it would be worth
          approximately $120,000 today — a 1,100% return, outperforming the S&P 500 by 4x. War is the
          most reliable growth industry in America.
        </p>
      </section>

      {/* Lobbying detail */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">$120 Million in Lobbying: What It Buys</h2>
        <div className="bg-white border rounded-xl p-6">
          <p className="text-stone-700 mb-4">
            The top 10 defense contractors spend approximately $120 million per year on lobbying — employing
            over 700 registered lobbyists. That&apos;s more than one lobbyist per member of Congress. Their
            PACs contribute millions more directly to campaigns, with donations strategically concentrated on
            members of the Armed Services and Appropriations committees.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-stone-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-red-700">${totalLobby.toFixed(0)}M</p>
              <p className="text-xs text-stone-500">Annual lobbying (top 10)</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-red-700">700+</p>
              <p className="text-xs text-stone-500">Registered lobbyists</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-red-700">$35M+</p>
              <p className="text-xs text-stone-500">PAC donations (2022 cycle)</p>
            </div>
          </div>
          <p className="text-stone-700 mt-4 text-sm">
            For every dollar spent on lobbying, defense contractors receive approximately $1,900 in government
            contracts. It is the highest-ROI investment in American business.
          </p>
        </div>
      </section>

      {/* Eisenhower quote */}
      <section className="mb-12">
        <blockquote className="bg-stone-50 border-l-4 border-red-700 pl-4 py-3 my-4 text-stone-800 italic">
          &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence,
          whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise
          of misplaced power exists and will persist.&rdquo;
          <span className="block text-sm text-stone-500 mt-2 not-italic">— President Dwight D. Eisenhower, Farewell Address, January 17, 1961</span>
        </blockquote>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <div className="bg-stone-100 border rounded-xl p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">The System Works — For Them</h2>
          <p className="text-stone-700 mb-3">
            The military-industrial complex is not a conspiracy theory. It&apos;s a business model. Defense
            contractors spend millions on lobbying, hire former Pentagon officials, spread production across
            every congressional district, and donate to the politicians who approve their contracts. In return,
            they receive hundreds of billions in taxpayer-funded contracts, regardless of whether the weapons
            they build are needed, work properly, or are ever used.
          </p>
          <p className="text-stone-700">
            War is not a market failure for these companies. It is the market working exactly as designed.
            Every missile fired is a reorder. Every war is a revenue opportunity. And the system that produces
            these outcomes is legal, bipartisan, and self-perpetuating.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources & Citations</h2>
        <ul className="text-sm text-stone-600 space-y-1 list-disc pl-5">
          <li>SEC annual filings (10-K) for Lockheed Martin, RTX, Northrop Grumman, Boeing, General Dynamics, BAE Systems, L3Harris, HII, Leidos, SAIC</li>
          <li>OpenSecrets.org, <em>Defense Lobbying Profile</em> and <em>Defense Sector PAC Contributions</em></li>
          <li>Project on Government Oversight (POGO), <em>Brass Parachutes: The Problem of the Pentagon Revolving Door</em></li>
          <li>Congressional Research Service, &ldquo;Defense Acquisitions: How DOD Acquires Weapon Systems,&rdquo; updated 2024</li>
          <li>Government Accountability Office, <em>Defense Contracting: Cost and Schedule Overruns</em></li>
          <li>William Hartung, <em>Prophets of War: Lockheed Martin and the Making of the Military-Industrial Complex</em></li>
          <li>DoD Proxy Statements for executive compensation data</li>
          <li>Defense Manpower Data Center, <em>Military Compensation tables</em></li>
        </ul>
      </section>

      <div className="text-center text-sm text-stone-500 mb-8">
        <p>Last updated: March 2026</p>
        <Link href="/analysis" className="text-red-700 hover:underline">← Back to All Analysis</Link>
      </div>

      
      <RelatedArticles articles={[{"slug":"private-armies","title":"Private Armies","desc":"The outsourcing of war."},{"slug":"private-military","title":"Private Military Contractors","desc":"The privatization of war."},{"slug":"mercenaries-of-america","title":"Mercenaries of America","desc":"$160B to contractors."},{"slug":"war-profiteering","title":"War Profiteering","desc":"Who gets rich from war."}]} />
      <BackToTop />
    </div>
  )
}
