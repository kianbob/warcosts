import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The China Trap: How the Middle East Keeps Derailing the Pivot to Asia | WarCosts',
  description: 'Every president since Obama tried to pivot to Asia. All failed. China built $1T in trade infrastructure while the US spent $8T bombing the Middle East.',
  alternates: { canonical: 'https://www.warcosts.org/analysis/china-pivot' },
}

const pivotAttempts = [
  { president: 'Obama', year: '2011-2016', promise: '"Pivot to Asia" — the centerpiece of Obama\'s foreign policy', derailed: 'Libya (2011), Syria civil war, ISIS caliphate (2014), Ukraine/Crimea (2014). Each crisis pulled attention and resources back to the Middle East and Europe.', result: 'Trans-Pacific Partnership negotiated but never ratified. China launched Belt and Road ($1T) and built 3,200 acres of artificial islands while Obama bombed Libya.', cost: '$1.1T', chinese_gains: 'Claimed South China Sea, launched AIIB with 57 founding members' },
  { president: 'Trump (1st term)', year: '2017-2021', promise: 'Trade war with China, "America First," withdrawal from Middle East', derailed: 'Assassinated Soleimani (Jan 2020), nearly started Iran war, maintained 70,000+ troops in Middle East. Trade war cost American consumers $80B in tariffs.', result: 'China trade deficit grew. China signed RCEP (world\'s largest trade deal) without the US. US withdrew from TPP — gift to China.', cost: '$2.3T', chinese_gains: 'RCEP signed, 15 Asia-Pacific nations, excluded US' },
  { president: 'Biden', year: '2021-2025', promise: '"Competition with China is the defining challenge of the 21st century"', derailed: 'Afghanistan withdrawal chaos, Ukraine ($175B), Israel-Gaza, Red Sea/Houthis. CENTCOM consumed attention while INDOPACOM needed resources.', result: 'AUKUS signed ($368B), Quad strengthened, but China expanded influence across Global South while US was distracted by Ukraine and Gaza.', cost: '$2.1T', chinese_gains: 'Mediated Saudi-Iran rapprochement, expanded BRICS membership' },
  { president: 'Trump (2nd term)', year: '2025-present', promise: '"Biggest deal-maker," end wars, focus on domestic agenda', derailed: 'Venezuela operation (Jan 2026), Operation Midnight Hammer (June 2025), Operation Epic Fury against Iran (Feb 2026). Now fighting another Middle East war.', result: 'Iran war is the ultimate distraction. China is watching and building while America burns through another trillion dollars in the Middle East.', cost: '$854B (projected)', chinese_gains: 'Strengthened ties with Russia, Iran; expanded naval presence' },
]

const chinaVsUs = [
  { category: 'Infrastructure investment abroad', us: '$8T on Middle East wars', china: '$1T Belt and Road (150+ countries)', winner: 'China', details: 'US: Forward operating bases, drone operations. China: Ports, railways, 5G networks' },
  { category: 'Trade agreements', us: 'Withdrew from TPP, no new deals', china: 'RCEP (world\'s largest), 30+ FTAs', winner: 'China', details: 'RCEP covers 30% of global GDP, 30% of global trade' },
  { category: 'Naval shipbuilding (2020-24)', us: '9 combatant ships/year', china: '23 combatant ships/year', winner: 'China', details: 'China: 2.5x US production rate, focused on Pacific' },
  { category: 'Diplomatic missions opened (decade)', us: 'Closed consulates, reduced staff', china: '30+ new embassies/missions', winner: 'China', details: 'US closed 25+ consulates 2017-2025, China opened 30+' },
  { category: 'Rare earth processing', us: '0% → 4% domestic capacity', china: '90% of global processing', winner: 'China', details: 'Critical for semiconductors, electric vehicles, defense' },
  { category: 'Global 5G infrastructure', us: 'Banned Huawei, no alternative offered', china: 'Huawei in 170+ countries', winner: 'China', details: 'US failed to provide alternative, Nokia/Ericsson market share fell' },
  { category: 'High-speed rail (km)', us: '0 km operational', china: '45,000 km (more than rest of world combined)', winner: 'China', details: 'US: California HSR $100B+ over budget, 0 miles complete' },
  { category: 'Manufacturing output', us: 'Declined from 28% to 16% of global', china: 'Rose from 6% to 31% of global', winner: 'China', details: 'China: Factory of the world. US: Financialized economy' },
  { category: 'Semiconductor manufacturing', us: '12% of global capacity (mostly legacy)', china: '15% and rising rapidly', winner: 'China', details: 'Taiwan: 63%. US onshoring efforts years behind schedule' },
  { category: 'Solar panel production', us: '2% of global capacity', china: '80% of global capacity', winner: 'China', details: 'Despite "energy independence" rhetoric, US imports Chinese solar' },
  { category: 'Electric vehicle market', us: 'Tesla dominates US (13% global)', china: 'BYD overtook Tesla globally', winner: 'China', details: 'China: 60% of global EV production, 50+ EV manufacturers' },
  { category: 'Port construction abroad', us: 'Military bases (cost ~$50B/year)', china: '100+ ports in 60+ countries', winner: 'China', details: 'China: Commercial ports that can handle naval vessels' },
]

const middleEastDiversions = [
  { year: '2011', event: 'Libya Intervention', cost: '$1.1B (direct), $100B+ (regional destabilization)', china_action: 'Launched 12th Five-Year Plan, began South China Sea island building', us_distraction: 'NATO bombing campaign, regime change, refugee crisis' },
  { year: '2014', event: 'ISIS Rise/Iraq Re-intervention', cost: '$8.5B/year (2014-2019)', china_action: 'AIIB announced, 57 founding members vs US opposition', us_distraction: '37,000 US personnel deployed, 18,000+ airstrikes' },
  { year: '2015', event: 'Syria Intervention', cost: '$15B+ (2015-2021)', china_action: 'Made in China 2025 strategy, targeted tech dominance', us_distraction: 'Proxy war with Russia, 900 troops still in Syria' },
  { year: '2020', event: 'Soleimani Assassination/Iran Crisis', cost: '$52B (2020 surge costs)', china_action: 'Signed Iran 25-year strategic partnership, $400B', us_distraction: 'Near-war with Iran, 20,000 troops surged to region' },
  { year: '2021', event: 'Afghanistan Withdrawal', cost: '$2.3T total war cost', china_action: 'Engaged Taliban immediately, secured mineral rights talks', us_distraction: 'Abbey Gate bombing, evacuation chaos, credibility damage' },
  { year: '2022', event: 'Ukraine Proxy War begins', cost: '$175B+ committed', china_action: 'Strengthened Russia partnership, alternative payment systems', us_distraction: 'Major weapons shipments, NATO expansion focus' },
  { year: '2023', event: 'Israel-Gaza War', cost: '$17.9B military aid surge', china_action: 'Mediated Saudi-Iran rapprochement, expanded BRICS', us_distraction: 'Unconditional support for Israel, regional escalation' },
  { year: '2024', event: 'Red Sea/Houthi Operations', cost: '$4.2B (Jan-Dec 2024)', china_action: 'Alternative shipping routes, Iran oil trade continued', us_distraction: 'Operation Prosperity Guardian, daily airstrikes' },
  { year: '2025', event: 'Operation Midnight Hammer', cost: '$89B (6 months)', china_action: 'Joint naval exercises with Russia, Iran', us_distraction: 'Major Middle East deployment, regional war planning' },
  { year: '2026', event: 'Operation Epic Fury (Iran)', cost: '$435B projected (first year)', china_action: 'Watching US tactics, weapons performance for Taiwan planning', us_distraction: 'Full-scale war, 2 carrier groups diverted from Pacific' },
]

const strategicFailures = [
  {
    category: 'Trans-Pacific Partnership (TPP)',
    year: '2015-2017',
    failure: 'Negotiated by Obama, killed by Trump',
    consequence: 'China filled vacuum with RCEP - world\'s largest trade deal',
    cost_to_us: '$2T+ in lost trade opportunities',
    benefit_to_china: 'Economic leadership in Asia-Pacific, 30% of global GDP',
    libertarian_angle: 'Both parties rejected free trade when it mattered most'
  },
  {
    category: 'South China Sea',
    year: '2012-2016',
    failure: 'Military posturing instead of economic competition',
    consequence: 'China built artificial islands, established facts on water',
    cost_to_us: '$50B/year in freedom of navigation operations',
    benefit_to_china: 'Control of $3.4T annual trade route',
    libertarian_angle: 'Military first approach ignored economic solutions'
  },
  {
    category: 'Belt and Road Response',
    year: '2013-2021',
    failure: 'No US alternative to Chinese infrastructure investment',
    consequence: 'China became the indispensable economic partner for 150+ countries',
    cost_to_us: 'Lost influence across Africa, Asia, Latin America',
    benefit_to_china: 'Economic hegemony outside US alliance system',
    libertarian_angle: 'US could have offered private investment, chose military bases'
  },
  {
    category: 'AIIB Opposition',
    year: '2014-2015',
    failure: 'Lobbied allies to boycott Chinese infrastructure bank',
    consequence: '57 countries joined anyway, including UK, Germany, France',
    cost_to_us: 'Diplomatic credibility, isolated from new financial institution',
    benefit_to_china: 'Alternative to World Bank/IMF, $100B+ capitalization',
    libertarian_angle: 'Opposition to competition reveals protectionist mindset'
  },
  {
    category: 'Technology Competition',
    year: '2018-2024',
    failure: 'Banned Chinese tech without providing alternatives',
    consequence: 'China accelerated domestic development, US lost market access',
    cost_to_us: '$150B+ in lost tech exports, supply chain disruption',
    benefit_to_china: 'Technological independence, domestic champions',
    libertarian_angle: 'Trade restrictions harmed US companies and consumers'
  },
  {
    category: 'Manufacturing Reshoring',
    year: '2016-2026',
    failure: 'Rhetoric about bringing jobs back, minimal actual reshoring',
    consequence: 'China maintained factory dominance, US manufacturing continued decline',
    cost_to_us: 'Industrial capacity gap, supply chain vulnerabilities',
    benefit_to_china: 'Retained "factory of the world" status',
    libertarian_angle: 'Government cannot command market forces'
  }
]

const chinaWins = [
  {
    victory: 'Saudi-Iran Rapprochement',
    year: '2023',
    details: 'Beijing mediated peace between regional rivals',
    us_failure: 'Decades of divide-and-conquer policy collapsed',
    strategic_impact: 'Oil market stability without US involvement',
    china_gain: 'Diplomatic leadership in Middle East'
  },
  {
    victory: 'BRICS Expansion',
    year: '2023-2024',
    details: 'Saudi Arabia, UAE, Egypt, Iran joined China-led bloc',
    us_failure: 'Lost economic influence over oil producers',
    strategic_impact: 'Alternative payment systems to US dollar',
    china_gain: 'Economic bloc representing 45% of global population'
  },
  {
    victory: 'African Infrastructure Dominance',
    year: '2013-2026',
    details: '$143B invested in African infrastructure projects',
    us_failure: 'AFRICOM focused on military, not development',
    strategic_impact: 'China is top trading partner for 28 African countries',
    china_gain: 'Access to rare earth minerals, growing markets'
  },
  {
    victory: 'Latin American Inroads',
    year: '2018-2026',
    details: '21 Latin American countries joined Belt and Road',
    us_failure: 'Monroe Doctrine rhetoric without economic alternatives',
    strategic_impact: 'Chinese investment in US backyard',
    china_gain: 'Commodity access, strategic ports (Peru, Ecuador)'
  },
  {
    victory: 'Arctic Cooperation with Russia',
    year: '2019-2026',
    details: 'Joint development of Northern Sea Route',
    us_failure: 'Russia sanctions pushed Moscow toward Beijing',
    strategic_impact: 'Alternative trade route bypassing US-controlled chokepoints',
    china_gain: 'Energy security, Arctic resources access'
  },
  {
    victory: 'Semiconductor Self-Sufficiency Progress',
    year: '2020-2026',
    details: '$143B invested in domestic chip production',
    us_failure: 'Export controls accelerated Chinese innovation',
    strategic_impact: 'Reduced dependence on Taiwan, US technology',
    china_gain: 'Strategic autonomy in critical technology'
  }
]

const opportunityCosts = [
  { category: 'High-Speed Rail Network', us_spending: 'Iraq War: $1.9T', alternative: 'US coast-to-coast HSR: $500B', difference: '$1.4T', impact: 'Reduced car dependency, climate benefits, economic growth' },
  { category: 'Renewable Energy Grid', us_spending: 'Afghanistan War: $2.3T', alternative: 'National renewable grid: $1.2T', difference: '$1.1T', impact: 'Energy independence, reduced emissions, jobs' },
  { category: 'Infrastructure Modernization', us_spending: 'Iran operations (2026): $435B', alternative: 'Bridge/road repair: $300B', difference: '$135B', impact: 'Reduced commute times, economic efficiency' },
  { category: 'Education Investment', us_spending: 'Libya intervention: $100B+', alternative: 'Community college free tuition: $80B/year', difference: '1.25 years free education', impact: 'Skilled workforce to compete with China' },
  { category: 'Broadband Infrastructure', us_spending: 'Syria operations: $15B', alternative: 'Rural broadband access: $12B', difference: '$3B', impact: 'Economic opportunity in underserved areas' },
  { category: 'Manufacturing Incentives', us_spending: 'Yemen support: $8B', alternative: 'Advanced manufacturing hubs: $20B', difference: 'Deficit of $12B', impact: 'Industrial capacity to compete with China' },
  { category: 'Research & Development', us_spending: 'Somalia operations: $2B/year', alternative: 'University research grants: $50B/year', difference: 'Under-invested by $48B/year', impact: 'Technological leadership vs China' },
  { category: 'Port Modernization', us_spending: 'Red Sea operations: $4.2B', alternative: 'US port infrastructure: $8B needed', difference: 'Half-funded', impact: 'Supply chain efficiency vs China' }
]

const realPolitic = [
  {
    reality: 'US cannot compete economically while bombing economically',
    evidence: 'China builds markets, US destroys them',
    example: 'Libya had $67B sovereign wealth fund, now failed state',
    consequence: 'Chinese companies avoid US-bombed regions but thrive elsewhere'
  },
  {
    reality: 'Military spending crowds out productive investment',
    evidence: 'Defense contractors lobby for conflict, not competitiveness',
    example: '$768B defense budget, $50B infrastructure bill',
    consequence: 'US bridges crumble while China builds world\'s infrastructure'
  },
  {
    reality: 'Wars create refugees who need Chinese manufacturing',
    evidence: 'Syrian refugees buy Chinese goods in Turkish camps',
    example: 'Afghan refugees wear Chinese clothing, use Chinese phones',
    consequence: 'US creates markets for Chinese products through warfare'
  },
  {
    reality: 'Energy disruption strengthens China\'s energy partnerships',
    evidence: 'Iran sells oil to China at discount during US sanctions',
    example: 'Russia-China energy deals after Ukraine war',
    consequence: 'US sanctions create exclusive China-Russia-Iran energy bloc'
  },
  {
    reality: 'Every US military base requires Chinese goods',
    evidence: '800+ US bases worldwide buy Chinese-manufactured supplies',
    example: 'Chinese contractors build US facilities in Iraq',
    consequence: 'US military spending enriches Chinese manufacturers'
  }
]

export default function ChinaPivotPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The China Trap' }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Strategic Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mt-3 mb-4">
          The China Trap
        </h1>
        <p className="text-xl text-stone-300 mb-4">How the Middle East Keeps Derailing the Pivot to Asia</p>
        <p className="text-stone-400 text-lg">
          Every president since Obama has declared that competition with China is America&apos;s defining challenge.
          Every one of them got sucked back into the Middle East. China built $1 trillion in global trade infrastructure
          while the US spent $8 trillion bombing countries that posed no existential threat. The Middle East is quicksand
          — and America keeps walking into it.
        </p>
      </div>

      <ShareButtons title="The China Trap: How the Middle East Keeps Derailing the Pivot to Asia" />

      <blockquote className="border-l-4 border-red-700 pl-6 my-8 text-xl text-stone-400 italic">
        &ldquo;Every recent US president has tried to redirect attention beyond the Middle East. To Asia. To the Western Hemisphere.
        None has succeeded.&rdquo;
        <span className="block text-sm text-stone-500 mt-2 not-italic">— Chatham House, February 2026</span>
      </blockquote>

      {/* Updated Score card with more details */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Scoreboard: US vs China (2001-2026)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-600">
                <th className="text-left py-2 text-stone-400">Category</th>
                <th className="text-left py-2 text-stone-400">United States</th>
                <th className="text-left py-2 text-stone-400">China</th>
                <th className="text-center py-2 text-stone-400">Winner</th>
                <th className="text-left py-2 text-stone-400">Details</th>
              </tr>
            </thead>
            <tbody>
              {chinaVsUs.map((row, i) => (
                <tr key={i} className="border-b border-stone-700">
                  <td className="py-3 text-stone-300 font-medium">{row.category}</td>
                  <td className="py-3 text-stone-400">{row.us}</td>
                  <td className="py-3 text-stone-400">{row.china}</td>
                  <td className="py-3 text-center">
                    <span className={`text-xs px-2 py-1 rounded-full ${row.winner === 'China' ? 'bg-red-900/50 text-red-400' : 'bg-green-900/50 text-green-400'}`}>
                      {row.winner === 'China' ? '🇨🇳 China' : '🇺🇸 US'}
                    </span>
                  </td>
                  <td className="py-3 text-stone-500 text-xs">{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-stone-500 text-sm mt-4"><strong>Final Score:</strong> China: 12. United States: 0. And we wonder why the &ldquo;pivot to Asia&rdquo; hasn&apos;t worked.</p>
      </div>

      {/* Enhanced Pivot attempts */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-12 mb-6">Four Presidents, Four Failures</h2>
      <div className="space-y-6">
        {pivotAttempts.map((p, i) => (
          <div key={i} className="bg-stone-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-red-400 font-bold text-lg">{p.president}</span>
              <span className="text-stone-500 text-sm">{p.year}</span>
              <span className="text-stone-500 text-sm">• Cost: {p.cost}</span>
            </div>
            <p className="text-stone-300 mb-2"><strong className="text-white">Promise:</strong> {p.promise}</p>
            <p className="text-stone-300 mb-2"><strong className="text-red-400">Derailed by:</strong> {p.derailed}</p>
            <p className="text-stone-300 mb-2"><strong className="text-stone-300">Result:</strong> {p.result}</p>
            <p className="text-stone-400"><strong className="text-green-400">Chinese Gains:</strong> {p.chinese_gains}</p>
          </div>
        ))}
      </div>

      {/* New section: Timeline of Distractions */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-12 mb-6">Timeline of Strategic Distractions</h2>
      <p className="text-stone-300 mb-6">Every Middle East crisis pulled American attention, resources, and credibility away from the China challenge. Meanwhile, Beijing capitalized on each American distraction.</p>
      
      <div className="space-y-4 mb-8">
        {middleEastDiversions.map((event, i) => (
          <div key={i} className="bg-stone-800 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <span className="text-red-400 font-bold">{event.year}</span>
              <span className="text-green-400 text-sm">China's Move</span>
            </div>
            <h4 className="text-white font-semibold mb-1">{event.event}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-stone-400 mb-1"><strong>US Distraction:</strong> {event.us_distraction}</p>
                <p className="text-red-400"><strong>Cost:</strong> {event.cost}</p>
              </div>
              <div>
                <p className="text-green-400"><strong>China's Action:</strong> {event.china_action}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="prose max-w-none mt-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">The Numbers Don&apos;t Lie</h2>

        <div className="grid md:grid-cols-4 gap-4 my-6 not-prose">
          <div className="bg-stone-800 rounded-lg p-5 text-center">
            <p className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">$8.4T+</p>
            <p className="text-stone-400 text-sm">US spent on Middle East wars since 2001</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-5 text-center">
            <p className="text-3xl font-bold text-green-400 font-[family-name:var(--font-heading)]">$1T</p>
            <p className="text-stone-400 text-sm">China invested in Belt and Road</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-5 text-center">
            <p className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">8:1</p>
            <p className="text-stone-400 text-sm">US war spending vs China trade investment</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-5 text-center">
            <p className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">150+</p>
            <p className="text-stone-400 text-sm">Countries in China's Belt and Road</p>
          </div>
        </div>

        <p className="text-stone-300">While the US was spending $8.4 trillion bombing countries with a combined GDP smaller than Florida&apos;s, China was building
        the largest infrastructure network in human history. Belt and Road now spans 150+ countries. China is the top trading
        partner of 120 countries. The US is the top trading partner of... fewer every year.</p>

        <p className="text-stone-300">China builds ports. America builds forward operating bases. China builds high-speed rail. America builds detention
        facilities. China signs trade deals. America signs arms deals. The contrast is not subtle.</p>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">The Naval Gap Is Real — And Growing</h2>

        <p className="text-stone-300">China now has the world&apos;s largest navy by number of ships (370+ vs America&apos;s 295). But the numbers tell a deeper story:</p>

        <div className="bg-stone-800 rounded-lg p-6 my-6 not-prose">
          <h3 className="text-white font-semibold mb-4">Naval Production Comparison (2020-2026)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-red-400 font-semibold mb-2">🇺🇸 United States</h4>
              <ul className="text-stone-300 text-sm space-y-1">
                <li>• 9 combatant ships per year</li>
                <li>• Fleet scattered across 7 seas</li>
                <li>• 40% of Pacific Fleet often deployed elsewhere</li>
                <li>• Virginia-class subs: 2 per year (planned)</li>
                <li>• Carrier availability: 50% (11 carriers, ~5-6 deployed)</li>
                <li>• Current Iran war: 2 carrier groups diverted</li>
              </ul>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold mb-2">🇨🇳 China</h4>
              <ul className="text-stone-300 text-sm space-y-1">
                <li>• 23 combatant ships per year</li>
                <li>• Entire fleet focused on Western Pacific</li>
                <li>• Home field advantage in Taiwan scenario</li>
                <li>• Nuclear subs: 6-8 per year production</li>
                <li>• Carrier force: 3 active, 2 under construction</li>
                <li>• Zero distractions from Middle East adventures</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-stone-300">But here&apos;s the kicker: while China focuses its entire navy on the Western Pacific, the US Navy is spread across
        every ocean. The Fifth Fleet is in Bahrain guarding oil. The Sixth Fleet is in the Mediterranean. Carrier strike groups
        rotate through the Middle East at $6.5 million per day. <strong>Every carrier in the Persian Gulf is a carrier NOT in the Pacific.</strong></p>

        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mt-6">The Opportunity Cost of Operation Epic Fury</h3>

        <p className="text-stone-300">Operation Epic Fury perfectly illustrates the strategic problem. Two carrier strike groups (USS Gerald R. Ford and USS Nimitz) 
        are currently fighting Iran instead of deterring China in the Pacific. The tactical costs are immediate and measurable:</p>

        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4 my-4 not-prose">
          <h4 className="text-white font-semibold mb-2">Operation Epic Fury Resource Diversion</h4>
          <ul className="text-stone-300 text-sm space-y-1">
            <li>• <strong>2 carrier strike groups:</strong> $13 million/day operational cost</li>
            <li>• <strong>85,000 personnel:</strong> diverted from Indo-Pacific Command</li>
            <li>• <strong>1,200+ Tomahawks fired:</strong> $2.1B in precision munitions</li>
            <li>• <strong>F-35 sortie hours:</strong> 15,000+ hours over Iran vs 0 over Taiwan Strait</li>
            <li>• <strong>Refueling operations:</strong> 40% of tanker capacity supporting Iran operations</li>
            <li>• <strong>Intelligence assets:</strong> Satellites, drones focused on Iran vs China</li>
          </ul>
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">China&apos;s Strategic Victories During US Distractions</h2>

        <div className="space-y-6 mb-8">
          {chinaWins.map((win, i) => (
            <div key={i} className="bg-stone-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-green-400 font-bold text-lg">{win.victory}</h4>
                <span className="text-stone-500 text-sm">{win.year}</span>
              </div>
              <p className="text-stone-300 mb-2"><strong>What happened:</strong> {win.details}</p>
              <p className="text-red-400 mb-2"><strong>US failure:</strong> {win.us_failure}</p>
              <p className="text-stone-400 mb-2"><strong>Strategic impact:</strong> {win.strategic_impact}</p>
              <p className="text-green-400"><strong>China gained:</strong> {win.china_gain}</p>
            </div>
          ))}
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">The Strategic Failures That Handed China Victory</h2>

        <p className="text-stone-300 mb-6">It wasn&apos;t just the Middle East wars. America made a series of strategic errors that played directly into China&apos;s hands:</p>

        <div className="space-y-6 mb-8">
          {strategicFailures.map((failure, i) => (
            <div key={i} className="bg-red-950/20 border border-red-900/30 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-white font-bold">{failure.category}</h4>
                <span className="text-stone-500 text-sm">{failure.year}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-red-400 mb-2"><strong>What went wrong:</strong> {failure.failure}</p>
                  <p className="text-stone-400 mb-2"><strong>Cost to US:</strong> {failure.cost_to_us}</p>
                </div>
                <div>
                  <p className="text-green-400 mb-2"><strong>China benefited:</strong> {failure.benefit_to_china}</p>
                  <p className="text-stone-400"><strong>Consequence:</strong> {failure.consequence}</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-stone-700">
                <p className="text-yellow-400 text-sm"><strong>Libertarian perspective:</strong> {failure.libertarian_angle}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">What We Could Have Built Instead</h2>

        <p className="text-stone-300 mb-6">Every dollar spent bombing the Middle East was a dollar not spent building America&apos;s competitive advantage against China. The opportunity costs are staggering:</p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-stone-800 rounded-lg overflow-hidden text-sm">
            <thead>
              <tr className="bg-stone-700">
                <th className="text-left p-4 text-stone-300">What We Spent Money On</th>
                <th className="text-left p-4 text-stone-300">Amount</th>
                <th className="text-left p-4 text-stone-300">What We Could Have Built</th>
                <th className="text-left p-4 text-stone-300">Economic Impact vs China</th>
              </tr>
            </thead>
            <tbody>
              {opportunityCosts.map((cost, i) => (
                <tr key={i} className="border-b border-stone-700">
                  <td className="p-4 text-red-400 font-medium">{cost.us_spending}</td>
                  <td className="p-4 text-stone-300">{cost.difference}</td>
                  <td className="p-4 text-green-400">{cost.alternative}</td>
                  <td className="p-4 text-stone-400">{cost.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">The Uncomfortable Realpolitik</h2>

        <p className="text-stone-300 mb-6">Here are the brutal truths about America&apos;s strategic position that both parties refuse to acknowledge:</p>

        <div className="space-y-4 mb-8">
          {realPolitic.map((reality, i) => (
            <div key={i} className="bg-yellow-950/20 border border-yellow-900/30 rounded-lg p-4">
              <h4 className="text-yellow-400 font-semibold mb-2">{reality.reality}</h4>
              <p className="text-stone-300 text-sm mb-1"><strong>Evidence:</strong> {reality.evidence}</p>
              <p className="text-stone-400 text-sm mb-1"><strong>Example:</strong> {reality.example}</p>
              <p className="text-stone-500 text-sm"><strong>Consequence:</strong> {reality.consequence}</p>
            </div>
          ))}
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">Iran: The Latest Distraction</h2>

        <p className="text-stone-300">Operation Epic Fury is the ultimate example of the China trap in action. Consider what&apos;s happening right now:</p>

        <ul className="list-disc list-inside text-stone-300 space-y-2 mb-6">
          <li><strong>Two carrier strike groups</strong> are fighting Iran instead of deterring China in the Taiwan Strait</li>
          <li><strong>The Strait of Hormuz is closed</strong> — the oil disruption will strengthen China (which gets Iranian oil at discounted prices anyway)</li>
          <li><strong>The US is burning through precision munitions</strong> that would be needed in a Taiwan scenario</li>
          <li><strong>China is watching all of this</strong>, taking notes on US tactics, weapons performance, and political willingness to sustain casualties</li>
          <li><strong>Every Tomahawk fired at Iran</strong> is a Tomahawk not available for Taiwan</li>
          <li><strong>Every F-35 sortie hour over Tehran</strong> is an hour not available over the Pacific</li>
          <li><strong>Iran and China signed a $400B strategic partnership</strong> — Iran war directly benefits China&apos;s energy security</li>
        </ul>

        <p className="text-stone-300">The opportunity cost is staggering — and China knows it. Beijing is probably hoping the Iran war drags on for years, bleeding American resources and attention while China consolidates its position in the Pacific.</p>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">Bin Laden&apos;s Final Victory</h2>

        <p className="text-stone-300">Osama bin Laden&apos;s stated strategy was to draw the US into endless Middle East conflicts that would bleed the treasury,
        exhaust the military, and distract from actual strategic threats. From his 2004 video:</p>

        <blockquote className="border-l-4 border-yellow-700 pl-6 my-6 text-lg text-stone-400 italic">
          &ldquo;We are continuing this policy in bleeding America to the point of bankruptcy... Every dollar of al-Qaeda defeated a million dollars by the attackers... America became embroiled in Iraq and Afghanistan, leaving it to face a new economic crisis.&rdquo;
        </blockquote>

        <p className="text-stone-300">Twenty-five years and $8.4 trillion later, with American bombs falling on yet another Middle Eastern country, it&apos;s hard to argue he didn&apos;t succeed. China is the ultimate beneficiary of bin Laden&apos;s strategy — not because they planned it, but because they stayed disciplined while America got distracted.</p>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">The Path Not Taken</h2>

        <p className="text-stone-300">What if America had taken a different path after 9/11? What if instead of $8.4 trillion in Middle East wars, the US had invested that money in economic competitiveness?</p>

        <ul className="list-disc list-inside text-stone-300 space-y-2 mb-6">
          <li><strong>$2T in infrastructure:</strong> High-speed rail, ports, broadband that would make American businesses more competitive</li>
          <li><strong>$1T in education:</strong> Free community college, technical training, advanced research to build human capital</li>
          <li><strong>$1T in manufacturing:</strong> Incentives to bring production back from China, build supply chain resilience</li>
          <li><strong>$500B in renewable energy:</strong> Energy independence, climate leadership, export opportunities</li>
          <li><strong>$3.9T left over:</strong> Debt reduction, tax cuts, or additional investment</li>
        </ul>

        <p className="text-stone-300">Instead, America chose bombs over broadband, forward operating bases over bullet trains, and intervention over investment. China chose the opposite. The results speak for themselves.</p>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">Breaking the Cycle</h2>

        <p className="text-stone-300">Can America break free from the Middle East trap? History suggests it will be extraordinarily difficult:</p>

        <ul className="list-disc list-inside text-stone-300 space-y-2 mb-6">
          <li><strong>Defense contractors</strong> have $400B+ in annual revenue dependent on conflict</li>
          <li><strong>Regional allies</strong> prefer American military presence to regional power balancing</li>
          <li><strong>Bureaucratic momentum</strong> favors continuing existing commitments</li>
          <li><strong>Media coverage</strong> focuses on daily crises, not strategic opportunity costs</li>
          <li><strong>Political incentives</strong> reward immediate action over long-term strategy</li>
        </ul>

        <p className="text-stone-300">Meanwhile, China faces none of these constraints. Their system allows for long-term planning, consistent strategy, and patient capital deployment. They can think in decades while America thinks in news cycles.</p>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">The Final Reckoning</h2>

        <p className="text-stone-300">The China challenge was always going to be difficult. China has 1.4 billion people, a growing economy, and a government focused on long-term competition. But America made it far harder than it needed to be.</p>

        <p className="text-stone-300">By spending $8.4 trillion destroying Middle Eastern countries instead of building American competitiveness, the US handed China a generational advantage. The pivot to Asia failed not because it was impossible, but because America couldn&apos;t resist the gravitational pull of Middle Eastern conflicts.</p>

        <p className="text-stone-300 font-semibold">China didn&apos;t beat America. America beat itself. The Middle East was just the method.</p>
      </div>

      {/* Enhanced AI Overview */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-3">💡 AI Overview: Key Insights</h3>
        <ul className="space-y-2 text-sm text-stone-300">
          <li>• <strong>$8.4T vs $1T</strong> — US spent 8.4x more on Middle East wars than China invested in global trade infrastructure</li>
          <li>• <strong>4 for 4 failure</strong> — Every president since 2011 promised to pivot to Asia, every one got dragged back to the Middle East</li>
          <li>• <strong>China builds 23 warships/year vs US 9</strong> — Naval gap widening while US carriers patrol the Persian Gulf</li>
          <li>• <strong>Operation Epic Fury diverts 2 carrier groups</strong> — Every carrier fighting Iran is a carrier not deterring China</li>
          <li>• <strong>China mediated Saudi-Iran peace (2023)</strong> — Diplomatic leadership while US focused on military solutions</li>
          <li>• <strong>BRICS expanded to 45% of global population</strong> — Alternative economic bloc outside US control</li>
          <li>• <strong>Belt and Road spans 150+ countries</strong> — China became indispensable economic partner while US bombed and sanctioned</li>
          <li>• <strong>Opportunity cost: $2T in infrastructure foregone</strong> — Could have built high-speed rail coast-to-coast</li>
          <li>• <strong>Bin Laden&apos;s strategy succeeded</strong> — Draw US into endless Middle East wars, bleed treasury, distract from real threats</li>
          <li>• <strong>China wins by doing nothing</strong> — Stayed disciplined while America got distracted</li>
        </ul>
      </div>

      {/* Enhanced Cross-links */}
      <div className="bg-stone-800 rounded-lg p-6 mt-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-3">Related Analysis</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="text-stone-300 font-semibold mb-2">Current Wars</h4>
            <ul className="space-y-1">
              <li><a href="/analysis/iran-2026" className="text-red-400 hover:text-red-300">→ Iran 2026: Whose War Is This?</a></li>
              <li><a href="/analysis/cost-of-iran" className="text-red-400 hover:text-red-300">→ What Will Iran Cost?</a></li>
              <li><a href="/analysis/iran-civilian-cost" className="text-red-400 hover:text-red-300">→ Iran: The Civilian Cost</a></li>
              <li><a href="/analysis/hormuz-crisis" className="text-red-400 hover:text-red-300">→ Hormuz Crisis: The Oil Chokepoint</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-300 font-semibold mb-2">Strategic Analysis</h4>
            <ul className="space-y-1">
              <li><a href="/analysis/what-could-we-buy" className="text-red-400 hover:text-red-300">→ What $8.4 Trillion Could Have Bought Instead</a></li>
              <li><a href="/analysis/cost-of-empire" className="text-red-400 hover:text-red-300">→ The True Cost of Empire</a></li>
              <li><a href="/analysis/base-nation" className="text-red-400 hover:text-red-300">→ Base Nation: 800 Bases, 80 Countries</a></li>
              <li><a href="/analysis/allies-and-enemies" className="text-red-400 hover:text-red-300">→ Allies and Enemies: The Revolving Door</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-stone-700">
          <h4 className="text-stone-300 font-semibold mb-2">Data & Comparisons</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/global-spending" className="text-red-400 hover:text-red-300">→ Global Military Spending Comparison</a></li>
            <li><a href="/countries/china" className="text-red-400 hover:text-red-300">→ China Military Spending Profile</a></li>
            <li><a href="/countries/usa" className="text-red-400 hover:text-red-300">→ US Military Spending Profile</a></li>
            <li><a href="/analysis/americas-wars-by-the-numbers" className="text-red-400 hover:text-red-300">→ America's Wars by the Numbers</a></li>
          </ul>
        </div>
      </div>

      <BackToTop />
    </main>
  )
}