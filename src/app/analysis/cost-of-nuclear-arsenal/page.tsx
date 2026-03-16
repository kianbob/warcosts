import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'The Cost of America\'s Nuclear Arsenal: $12 Trillion Spent, $1.7 Trillion More Planned',
  description: 'The US has spent $12+ trillion on nuclear weapons since 1945 and plans to spend $1.7 trillion more modernizing the arsenal. 5,500 warheads. Multiple close calls. The most expensive weapons never used.',
  openGraph: {
    title: 'The Nuclear Arsenal: $12 Trillion on Weapons We Can Never Use',
    description: '$12T spent. $1.7T modernization planned. 5,500 warheads. Multiple near-launches. The most expensive insurance policy in human history — or the most dangerous.',
    url: 'https://www.warcosts.org/analysis/cost-of-nuclear-arsenal',
    type: 'article',
  },
}

const keyStats = [
  { stat: '$12.3T', label: 'Total US nuclear weapons spending since 1945 (2024 dollars)', source: 'Brookings Institution, Atomic Audit' },
  { stat: '$1.7T', label: 'Planned modernization cost over next 30 years (2023-2053)', source: 'CBO, 2023 Report' },
  { stat: '5,500', label: 'Nuclear warheads in the current US stockpile', source: 'Federation of American Scientists' },
  { stat: '70,300', label: 'Peak US stockpile (1967) — enough to destroy civilization many times over', source: 'DoE/NNSA' },
  { stat: '1,150+', label: 'US nuclear tests conducted (1945-1992)', source: 'CTBTO' },
  { stat: '22+', label: 'Known nuclear close calls where accidental launch was narrowly avoided', source: 'Union of Concerned Scientists' },
]

const historicalSpending = [
  { era: 'Manhattan Project (1942-46)', amount: '$30B', weapons: '3', notes: 'Two bombs used. One tested. The beginning of everything.' },
  { era: 'Early Cold War (1946-55)', amount: '$280B', weapons: '~2,400', notes: 'Hydrogen bomb development. Castle Bravo (15 MT). Arms race begins.' },
  { era: 'Massive Retaliation (1955-65)', amount: '$1.4T', weapons: '~31,000', notes: 'Eisenhower\'s "more bang for the buck." ICBMs, SLBMs, B-52s. Peak production.' },
  { era: 'MAD Era (1965-80)', amount: '$2.8T', weapons: '~70,000 peak', notes: 'Mutual Assured Destruction. MIRV warheads. Trident submarines. Minuteman III.' },
  { era: 'Reagan Buildup (1980-90)', amount: '$2.1T', weapons: '~60,000', notes: 'Star Wars (SDI), MX Peacekeeper, B-1B, stealth bomber development.' },
  { era: 'Post-Cold War (1990-2010)', amount: '$2.2T', weapons: '~10,000→5,000', notes: 'Stockpile reduction. But infrastructure maintenance costs stayed high.' },
  { era: 'Modernization Era (2010-24)', amount: '$1.1T', weapons: '~5,500', notes: 'New ICBM (Sentinel), new sub (Columbia), new bomber (B-21), new warheads.' },
  { era: 'Planned (2024-53)', amount: '$1.7T', weapons: '~3,700 (projected)', notes: 'Full triad replacement. Every major system replaced simultaneously.' },
]

const modernizationPrograms = [
  { program: 'Sentinel ICBM (GBSD)', cost: '$141B', replaces: 'Minuteman III (deployed 1970)', timeline: '2029-2075', status: 'Over budget (85% cost overrun). Nunn-McCurdy breach in 2024. Continuing anyway.' },
  { program: 'Columbia-Class Submarine', cost: '$132B (12 subs)', replaces: 'Ohio-class (deployed 1981)', timeline: '2031-2042', status: 'First boat delayed 1-2 years. Each sub carries 16 Trident II D5 missiles (192 warheads per sub).' },
  { program: 'B-21 Raider Bomber', cost: '$203B (100 aircraft + operations)', replaces: 'B-2 Spirit (deployed 1997)', timeline: '2026-2060+', status: 'First flight December 2023. Unit cost: $753M each (before overruns).' },
  { program: 'W93 Warhead', cost: '$14.8B', replaces: 'W76/W88 submarine warheads', timeline: '2034-2040', status: 'New warhead design — the first new nuclear warhead in 35+ years.' },
  { program: 'W87-1 Warhead (for Sentinel)', cost: '$12.1B', replaces: 'W78/W87-0 ICBM warheads', timeline: '2030-2036', status: 'New pit production required. LANL/Savannah River capacity inadequate.' },
  { program: 'Long-Range Standoff Weapon (LRSO)', cost: '$16B', replaces: 'AGM-86B Air-Launched Cruise Missile', timeline: '2030+', status: 'Nuclear-armed cruise missile. Launched from B-21 or B-52.' },
  { program: 'NC3 (Nuclear Command & Control)', cost: '$58B', replaces: 'Cold War-era communications', timeline: '2024-2035', status: 'Currently relies on 1960s-era technology. Floppy disks used until 2019.' },
]

const nuclearCloseCalls = [
  { date: 'Nov 1961', event: 'BMEWS False Alarm', detail: 'NORAD lost contact with all three BMEWS radar stations simultaneously. SAC went to highest alert. Cause: relay station failure in Colorado.' },
  { date: 'Oct 1962', event: 'Cuban Missile Crisis — Vasili Arkhipov', detail: 'Soviet submarine B-59, depth-charged by US Navy. Two of three officers voted to launch a nuclear torpedo. Vasili Arkhipov was the lone dissent. One man saved civilization.' },
  { date: 'Nov 1979', event: 'NORAD Training Tape', detail: 'Someone loaded a training tape showing a Soviet first strike into the live NORAD system. Zbigniew Brzezinski was moments from waking Carter to authorize retaliation.' },
  { date: 'Sep 1983', event: 'Stanislav Petrov', detail: 'Soviet early warning system showed 5 US ICBM launches. Petrov\'s job was to confirm and trigger retaliation. He decided it was a false alarm. It was. Sunlight reflecting off clouds.' },
  { date: 'Nov 1983', event: 'Able Archer 83', detail: 'NATO exercise simulated nuclear release procedures so realistically that the Soviets believed it was a real first strike. They put nuclear forces on alert. The world was minutes away.' },
  { date: 'Jan 1995', event: 'Norwegian Rocket Incident', detail: 'Russia detected a Norwegian research rocket and believed it was a US submarine-launched missile. Yeltsin activated the nuclear briefcase. The first time a Russian president opened the "football."' },
]

const opportunityCost = [
  { item: 'End world hunger for 30 years', cost: '$340B', nuclearEquivalent: 'Less than 3 years of nuclear spending' },
  { item: 'Universal healthcare for all Americans', cost: '$1.5T/year', nuclearEquivalent: 'The 30-year modernization plan could fund it for 1+ year' },
  { item: 'Clean energy transition (entire US grid)', cost: '$1.2T', nuclearEquivalent: 'Less than the modernization plan' },
  { item: 'Cure for cancer (estimated R&D)', cost: '$150B', nuclearEquivalent: 'One submarine program' },
  { item: 'Free college for every American for 40 years', cost: '$1.6T', nuclearEquivalent: 'Roughly equal to the modernization plan' },
  { item: 'Rebuild all US infrastructure (ASCE estimate)', cost: '$2.6T', nuclearEquivalent: '1.5x the modernization plan' },
]

const arsenalComparison = [
  { country: 'Russia', warheads: '6,257', deployed: '1,674', budget: '$8.6B (est)', trend: 'Modernizing. New Sarmat ICBM, Poseidon torpedo, Burevestnik cruise missile.' },
  { country: 'United States', warheads: '5,500', deployed: '1,770', budget: '$51.5B', trend: 'Full triad replacement. $1.7T over 30 years.' },
  { country: 'China', warheads: '500', deployed: '~350', budget: '$14B (est)', trend: 'Expanding rapidly. May reach 1,000+ by 2030. New silos in Xinjiang.' },
  { country: 'France', warheads: '290', deployed: '~280', budget: '$5.6B', trend: 'Maintaining. New M51 SLBMs. Air-launched cruise missiles.' },
  { country: 'United Kingdom', warheads: '225', deployed: '~120', budget: '$3.0B', trend: 'Increasing cap from 180 to 260. New Dreadnought-class subs.' },
  { country: 'Pakistan', warheads: '170', deployed: 'N/A', budget: '$1.2B (est)', trend: 'Expanding. Tactical nuclear weapons. Nasr short-range missile.' },
  { country: 'India', warheads: '172', deployed: 'N/A', budget: '$2.3B (est)', trend: 'Expanding. Agni-V ICBM. Nuclear triad nearly complete.' },
  { country: 'Israel', warheads: '90 (est)', deployed: 'N/A', budget: 'Classified', trend: 'Neither confirms nor denies. Dimona reactor. Jericho III missiles.' },
  { country: 'North Korea', warheads: '40-60', deployed: 'N/A', budget: '$500M (est)', trend: 'Testing. Hwasong-18 ICBM. Submarine capability under development.' },
]

const environmentalCost = [
  { site: 'Nevada Test Site', issue: '928 nuclear tests. Fallout across the western US. Downwinders developed cancer at 2-3x normal rates. $2.3B in compensation paid.', cleanup: '$1.2B spent, cleanup "indefinite"' },
  { site: 'Hanford, Washington', issue: 'Produced plutonium for 60,000+ warheads. 56 million gallons of radioactive waste in underground tanks. Largest environmental cleanup in history.', cleanup: '$68B spent since 1989. Estimated $300-600B more needed.' },
  { site: 'Rocky Flats, Colorado', issue: 'Plutonium trigger manufacturing plant 16 miles from Denver. Contaminated soil and groundwater. Fires in 1957 and 1969 released plutonium into the air.', cleanup: '$7B. Now a "wildlife refuge" where the DOE says it\'s safe. Locals disagree.' },
  { site: 'Marshall Islands', issue: 'US tested 67 nuclear weapons (1946-58) including Castle Bravo (15 MT). Bikini Atoll still uninhabitable. Rongelap islanders exposed to lethal fallout.', cleanup: '$759M compensation. Estimated $2.3B needed. Bikini Atoll still has 6x safe cesium levels.' },
  { site: 'Savannah River Site, SC', issue: 'Produced tritium and plutonium. 35 million gallons of radioactive waste. Groundwater contamination extending offsite.', cleanup: '$10B+ spent. Estimated $100B more over next 50 years.' },
]

export default function CostOfNuclearArsenalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The Cost of America\'s Nuclear Arsenal: $12 Trillion Spent, $1.7 Trillion More Planned',
        description: 'The US has spent $12+ trillion on nuclear weapons since 1945 and plans to spend $1.7 trillion more.',
        url: 'https://www.warcosts.org/analysis/cost-of-nuclear-arsenal',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-15',
        dateModified: '2026-03-15'
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Cost of the Nuclear Arsenal' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          $12 Trillion on Weapons We Can Never Use
        </h1>
        <p className="text-xl text-stone-300 mb-4">The Most Expensive Insurance Policy in Human History — Or the Most Dangerous Bet.</p>
        <p className="text-stone-400 text-lg">
          Since 1945, the United States has spent over $12 trillion (in 2024 dollars) on nuclear weapons — 
          designing them, building them, testing them, maintaining them, and planning to use them. It currently 
          possesses 5,500 warheads, enough to destroy every major city on Earth several times over. It has 
          never used one in combat since Nagasaki. And now it plans to spend $1.7 trillion more replacing the 
          entire arsenal with new weapons. The logic of nuclear deterrence is simple: we must spend trillions 
          on weapons we can never use, because if we ever do use them, civilization ends. The question nobody 
          in Washington asks: is there a cheaper way to not end civilization?
        </p>
      </div>

      <ShareButtons title="The Nuclear Arsenal: $12 Trillion on Weapons We Can Never Use" />

      {/* Key Numbers */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">By the Numbers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {keyStats.map((item) => (
            <div key={item.label} className="flex gap-3">
              <span className="text-2xl font-bold text-white whitespace-nowrap">{item.stat}</span>
              <div>
                <p className="text-stone-300 text-sm">{item.label}</p>
                <p className="text-stone-500 text-xs">{item.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Historical Spending */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          $12 Trillion Over 80 Years: A History of Nuclear Spending
        </h2>
        <div className="space-y-3">
          {historicalSpending.map((item) => (
            <div key={item.era} className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-bold text-stone-900">{item.era}</h3>
                <div className="flex gap-4 text-sm">
                  <span className="text-red-600 font-bold">{item.amount}</span>
                  <span className="text-stone-500">Stockpile: {item.weapons}</span>
                </div>
              </div>
              <p className="text-stone-600 text-sm">{item.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modernization */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The $1.7 Trillion Modernization: Replacing Everything, All at Once
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The United States is replacing every major component of its nuclear arsenal simultaneously — new 
          ICBMs, new submarines, new bombers, new warheads, new command and control. This is the most 
          expensive military procurement program in history, and it&apos;s already over budget before most 
          programs have entered production.
        </p>

        <div className="space-y-4">
          {modernizationPrograms.map((item) => (
            <div key={item.program} className="bg-stone-50 border border-stone-200 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-bold text-stone-900">{item.program}</h3>
                <span className="text-red-600 font-bold">{item.cost}</span>
              </div>
              <p className="text-stone-600 text-sm mb-1">Replaces: {item.replaces}</p>
              <p className="text-stone-600 text-sm mb-1">Timeline: {item.timeline}</p>
              <p className="text-stone-500 text-xs">{item.status}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Close Calls */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          22 Times We Almost Ended the World
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          Nuclear deterrence works — until it doesn&apos;t. At least 22 times since 1945, technical 
          failures, miscommunication, or human error brought the world to the brink of nuclear war. We 
          survived not because the system worked, but because individual humans — often low-ranking 
          officers — chose not to follow protocol.
        </p>

        <div className="space-y-4">
          {nuclearCloseCalls.map((item) => (
            <div key={item.date} className="bg-red-50 border-l-4 border-red-600 p-5">
              <div className="flex gap-3 mb-2">
                <span className="text-red-600 font-bold text-sm whitespace-nowrap">{item.date}</span>
                <h3 className="font-bold text-stone-900">{item.event}</h3>
              </div>
              <p className="text-stone-700 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Arsenals */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Global Nuclear Club: 12,500 Warheads, 9 Countries
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">Country</th>
                <th className="text-right py-3 font-semibold text-stone-900">Total</th>
                <th className="text-right py-3 font-semibold text-stone-900">Deployed</th>
                <th className="text-right py-3 font-semibold text-stone-900">Annual Budget</th>
                <th className="text-left py-3 font-semibold text-stone-900 pl-4">Trend</th>
              </tr>
            </thead>
            <tbody>
              {arsenalComparison.map((row) => (
                <tr key={row.country} className={`border-b border-stone-100 ${row.country === 'United States' ? 'bg-red-50' : ''}`}>
                  <td className="py-3 font-medium text-stone-900">{row.country}</td>
                  <td className="text-right py-3 font-bold">{row.warheads}</td>
                  <td className="text-right py-3">{row.deployed}</td>
                  <td className="text-right py-3 text-red-600">{row.budget}</td>
                  <td className="py-3 text-stone-600 text-xs pl-4">{row.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Environmental Cost */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Poisoned Land: Environmental Cost of Nuclear Weapons
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          Nuclear weapons production contaminated vast swaths of the United States. The cleanup — which 
          will take centuries and cost hundreds of billions — is the largest environmental remediation 
          effort in human history. Some sites will never be fully clean.
        </p>

        <div className="space-y-4">
          {environmentalCost.map((site) => (
            <div key={site.site} className="bg-stone-50 border border-stone-200 rounded-lg p-5">
              <h3 className="font-bold text-stone-900 mb-2">{site.site}</h3>
              <p className="text-stone-700 text-sm mb-2">{site.issue}</p>
              <p className="text-stone-500 text-xs"><strong>Cleanup:</strong> {site.cleanup}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunity Cost */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          What $1.7 Trillion Could Build Instead
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {opportunityCost.map((item) => (
            <div key={item.item} className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <p className="text-stone-900 font-medium text-sm">{item.item}</p>
              <p className="text-red-600 font-bold">{item.cost}</p>
              <p className="text-stone-500 text-xs">{item.nuclearEquivalent}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Question */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">
            The Question Nobody Asks
          </h2>
          <p className="text-stone-300 mb-4">
            Deterrence requires enough nuclear weapons to guarantee retaliation. The question is: how many 
            is enough? The US currently has 5,500 warheads. Experts estimate that 100-300 would be sufficient 
            to deter any rational adversary. The difference between 300 and 5,500 is not security — it&apos;s 
            bureaucracy, contractor profit, and Cold War inertia.
          </p>
          <p className="text-stone-300 mb-4">
            The $1.7 trillion modernization plan replaces every component of a triad designed to fight the 
            Soviet Union. The Soviet Union no longer exists. China, the rising competitor, has 500 warheads. 
            The US is spending $1.7 trillion to maintain a 10:1 advantage over an adversary with 500 weapons. 
            Deterrence could be maintained for a fraction of the cost.
          </p>
          <p className="text-stone-300">
            But nobody in Congress will say so, because voting against nuclear modernization is political 
            suicide — even when the alternative is spending $1.7 trillion on weapons designed to end the world.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>Brookings Institution, <em>Atomic Audit: The Costs and Consequences of U.S. Nuclear Weapons Since 1940</em></li>
          <li>Congressional Budget Office, &ldquo;Projected Costs of U.S. Nuclear Forces, 2023 to 2032&rdquo;</li>
          <li>Federation of American Scientists, Nuclear Weapons Stockpile Data</li>
          <li>Union of Concerned Scientists, &ldquo;Close Calls with Nuclear Weapons&rdquo;</li>
          <li>SIPRI Yearbook 2024, World Nuclear Forces</li>
          <li>GAO, Sentinel ICBM Nunn-McCurdy Breach Report (2024)</li>
          <li>DoE/NNSA, Stockpile Stewardship and Management Plan</li>
          <li>Eric Schlosser, <em>Command and Control</em> (Penguin, 2013)</li>
          <li>Annie Jacobsen, <em>Nuclear War: A Scenario</em> (Dutton, 2024)</li>
          <li>Daniel Ellsberg, <em>The Doomsday Machine</em> (Bloomsbury, 2017)</li>
        </ul>
      </section>

      <RelatedArticles articles={[
        { slug: 'nuclear-close-calls', title: 'Minutes from Midnight', desc: 'At least 22 times the world came within minutes of nuclear war.' },
        { slug: 'what-could-we-buy', title: 'What $11.6 Trillion Could Have Bought', desc: 'Universal healthcare, free college, clean water — all cheaper than war.' },
        { slug: 'cost-of-secrecy', title: 'The Black Budget', desc: '$90B+ black budget includes nuclear weapons programs.' },
        { slug: 'ww2-by-the-numbers', title: 'WWII By the Numbers', desc: 'The atomic bomb cost $28B and changed everything.' },
      ]} />

      <BackToTop />
    </div>
  )
}
