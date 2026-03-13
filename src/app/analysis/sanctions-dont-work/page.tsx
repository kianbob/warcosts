import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Do Sanctions Work? A Data-Driven Answer — WarCosts',
  description: 'Sanctions achieve their stated goals only 34% of the time. Cuba (63 years), North Korea (built nukes anyway), Iran (regime survived), Iraq (500K children died). Economic warfare is still warfare.',
  openGraph: {
    title: 'Do Sanctions Work? A Data-Driven Answer',
    description: 'Peterson Institute: 34% success rate. Civilians always pay. Leadership never does.',
    url: 'https://warcosts.org/analysis/sanctions-dont-work',
    type: 'article',
  },
}

const caseStudies = [
  {
    country: 'Cuba',
    years: '1962–present (63 years)',
    goal: 'Regime change — remove Castro / communist government',
    result: 'Castro died in power at 90. His brother ruled until 2018. Communist government still in power. Cuba has universal healthcare and literacy rates above the US.',
    civilianCost: 'GDP per capita collapsed. Medicine shortages kill thousands annually. Average monthly wage: $25. Cubans flee on rafts — not from communism, but from poverty caused by the embargo.',
    gdpImpact: '-$130B+ estimated cumulative cost to Cuban economy',
    leadershipImpact: 'Zero. The Castros ruled for 59 years under sanctions.',
    success: false,
  },
  {
    country: 'North Korea',
    years: '1950–present (75 years)',
    goal: 'Denuclearization, regime behavior change',
    result: 'North Korea built nuclear weapons anyway. Has 40-60 warheads. Tested ICBMs capable of reaching the US mainland. The Kim dynasty is now in its third generation of power.',
    civilianCost: 'Recurring famines killed an estimated 600,000–2.5 million people in the 1990s. Chronic malnutrition affects 42% of the population. Average North Korean is 3-6 inches shorter than South Korean counterpart due to generational malnutrition.',
    gdpImpact: 'GDP per capita: ~$1,800 (vs. South Korea: ~$35,000)',
    leadershipImpact: 'Zero. Kim Jong Un lives in luxury with imported goods. Sanctions strengthened regime control over scarce resources.',
    success: false,
  },
  {
    country: 'Iran',
    years: '1979–present (46 years)',
    goal: 'Nuclear program rollback, regime behavior change, (implicitly) regime change',
    result: 'Iran expanded nuclear enrichment to 60% (weapons-grade is 90%). Regional influence grew — Hezbollah, Hamas, Houthis, Iraqi militias. JCPOA briefly worked (2015-2018), then Trump withdrew and Iran resumed enrichment faster than before.',
    civilianCost: 'Rial lost 80% of value. Medicine shortages — cancer patients can\'t get chemotherapy drugs. Inflation above 40%. Youth unemployment over 25%. Brain drain: 150,000+ educated Iranians leave annually.',
    gdpImpact: '-$150B+ in lost oil revenue (2018-2025)',
    leadershipImpact: 'Minimal. IRGC controls sanctions evasion networks. Supreme Leader\'s office controls $200B+ in assets. Sanctions gave hardliners ammunition: "See? America wants to starve you."',
    success: false,
  },
  {
    country: 'Iraq',
    years: '1990–2003 (13 years)',
    goal: 'Force Saddam to comply with UN resolutions, disarm WMDs',
    result: 'Saddam stayed in power for 13 years. Iraq had no WMDs (confirmed after 2003 invasion). The sanctions killed far more people than Saddam\'s regime ever did.',
    civilianCost: 'UNICEF estimated 500,000 children under 5 died from sanctions-related causes. Iraq\'s healthcare system — once the best in the Middle East — collapsed. Clean water infrastructure destroyed. Malnutrition rates tripled.',
    gdpImpact: 'GDP fell from $66B (1989) to $10B (1996) — an 85% collapse',
    leadershipImpact: 'Saddam built new palaces during sanctions. His sons drove luxury cars. The Oil-for-Food program was corrupted. Only civilians suffered.',
    success: false,
    albright: true,
  },
  {
    country: 'Russia',
    years: '2014–present (11 years)',
    goal: 'End invasion of Ukraine, regime behavior change',
    result: 'Russia adapted. Redirected energy exports to China and India. Ruble recovered after initial crash. War in Ukraine continues into its fourth year. Russia controls ~20% of Ukrainian territory.',
    civilianCost: 'Real wages fell 10-15%. Consumer goods prices spiked 30-50%. Western brands left — replaced by Chinese alternatives. Middle class hollowed out. But Putin\'s approval rating: 80%+.',
    gdpImpact: 'IMF projects Russian GDP grew 3.6% in 2023 despite sanctions — outperforming Germany and the UK',
    leadershipImpact: 'Putin consolidated power. Oligarchs who lost Western assets became more dependent on the Kremlin, not less. Sanctions made the regime stronger.',
    success: false,
  },
  {
    country: 'Venezuela',
    years: '2017–present (8 years)',
    goal: 'Force Maduro from power, restore democracy',
    result: 'Maduro remained in power until 2026. Recognized opposition leader Guaidó had no real power and eventually fled. Economic collapse was primarily caused by Maduro\'s policies but sanctions accelerated it catastrophically.',
    civilianCost: '7.7 million Venezuelans fled the country — the largest displacement crisis in the Western Hemisphere. GDP fell 80%. Hospitals ran out of medicine. Child malnutrition surged.',
    gdpImpact: 'GDP collapsed from $482B (2014) to ~$100B (2023)',
    leadershipImpact: 'Maduro controlled food distribution through CLAP boxes — making civilians dependent on the regime. Sanctions strengthened his grip.',
    success: false,
  },
]

const sanctionsPrograms = [
  { type: 'Comprehensive country sanctions', count: 7, examples: 'Cuba, Iran, North Korea, Syria, Russia, Venezuela, Myanmar' },
  { type: 'Targeted/sectoral sanctions', count: 30, examples: 'Belarus, China (Xinjiang), Ethiopia, Mali, Nicaragua, etc.' },
  { type: 'Individuals/entities on SDN list', count: '12,000+', examples: 'OFAC Specially Designated Nationals list — the blacklist' },
  { type: 'Secondary sanctions (threatening allies)', count: 'Expanding', examples: 'Any company worldwide that trades with sanctioned countries risks US penalties' },
]

export default function SanctionsDontWorkPage() {
  const stats = loadData('stats.json')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Do Sanctions Work?' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Do Sanctions Work?
        </h1>
        <p className="text-xl text-stone-300 mb-4">A Data-Driven Answer</p>
        <p className="text-stone-400 text-lg">
          The United States currently maintains sanctions against more than 30 countries and 12,000+
          individuals and entities. Sanctions are presented as the &ldquo;humane&rdquo; alternative to
          military force — a way to pressure governments without dropping bombs. The data tells a
          different story. The Peterson Institute for International Economics — the definitive study —
          found sanctions achieve their stated goals only <strong className="text-red-400">34% of the time</strong>.
          And in that 66% failure rate, it&apos;s always the same people who pay: civilians, children,
          the elderly, the sick. Never the leadership. Never the generals. Never the people making
          the decisions that sanctions are supposed to change.
        </p>
      </div>

      <ShareButtons title="Do Sanctions Work? A Data-Driven Answer" />

      {/* AI Overview */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">🤖 AI Overview</h2>
        <p className="text-stone-300 mb-3">
          Economic sanctions are the most widely used foreign policy tool in the American arsenal —
          and one of the least effective. This analysis examines every major US sanctions program of
          the modern era, their stated objectives, and their actual outcomes.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">34%</p>
            <p className="text-xs text-stone-400">Success rate</p>
          </div>
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">500K+</p>
            <p className="text-xs text-stone-400">Iraqi children killed</p>
          </div>
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">63 yrs</p>
            <p className="text-xs text-stone-400">Cuba embargo</p>
          </div>
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">0</p>
            <p className="text-xs text-stone-400">Regimes toppled</p>
          </div>
        </div>
      </div>

      {/* The Peterson Institute Study */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Numbers Don&apos;t Lie</h2>
        <p className="text-stone-300 mb-4">
          The most comprehensive study of sanctions effectiveness was conducted by Gary Hufbauer and
          colleagues at the Peterson Institute for International Economics. They analyzed <strong>204
          sanctions episodes from 1914 to 2000</strong>. Their findings:
        </p>
        <div className="space-y-3 mb-4">
          {[
            { stat: '34%', desc: 'of sanctions episodes achieved any policy change at all' },
            { stat: '13%', desc: 'achieved significant policy change (the stated goal)' },
            { stat: '5%', desc: 'achieved regime change (when that was the goal)' },
            { stat: '66%', desc: 'failed entirely — target country didn\'t change behavior' },
          ].map(s => (
            <div key={s.stat} className="flex items-center gap-4 border-b border-stone-700 pb-2">
              <span className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)] w-20 shrink-0 text-right">{s.stat}</span>
              <p className="text-stone-300">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm">
          And even that 34% number is inflated. Subsequent scholars (Robert Pape, 1997; Drezner, 1999)
          found the Peterson Institute overcounted successes by attributing policy changes to sanctions
          when other factors (military threats, economic shifts) were the real cause. Pape&apos;s
          re-analysis found a success rate of just <strong className="text-red-400">5%</strong>.
        </p>
      </div>

      {/* Case Studies */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-6">The Case Studies</h2>
      <div className="space-y-6 mb-8">
        {caseStudies.map(c => (
          <div key={c.country} className="bg-stone-900 rounded-xl border border-stone-800 p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">{c.country}</h3>
              <span className="text-xs bg-red-900/50 text-red-400 px-2 py-1 rounded">{c.years}</span>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-stone-500 uppercase mb-1">Stated Goal</p>
                <p className="text-sm text-stone-300">{c.goal}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-red-400 uppercase mb-1">Actual Result</p>
                <p className="text-sm text-stone-300">{c.result}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-xs font-semibold text-stone-500 uppercase mb-1">Civilian Cost</p>
                  <p className="text-sm text-stone-300">{c.civilianCost}</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-xs font-semibold text-stone-500 uppercase mb-1">GDP Impact</p>
                  <p className="text-sm text-stone-300">{c.gdpImpact}</p>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded p-3">
                <p className="text-xs font-semibold text-red-400 uppercase mb-1">Impact on Leadership</p>
                <p className="text-sm text-stone-300">{c.leadershipImpact}</p>
              </div>
            </div>
            {c.albright && (
              <div className="mt-4 border-t border-stone-700 pt-4">
                <blockquote className="text-stone-400 italic text-sm">
                  <strong>Lesley Stahl (60 Minutes, 1996):</strong> &ldquo;We have heard that half a million children
                  have died. I mean, that&apos;s more children than died in Hiroshima. And, you know, is the
                  price worth it?&rdquo;
                </blockquote>
                <blockquote className="text-red-400 italic text-sm mt-2">
                  <strong>Secretary of State Madeleine Albright:</strong> &ldquo;I think this is a very hard choice,
                  but the price — we think the price is worth it.&rdquo;
                </blockquote>
                <p className="text-stone-500 text-xs mt-2">
                  Bin Laden later cited this exchange as evidence of American disregard for Muslim lives.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* The Scope */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Scope of US Sanctions</h2>
        <p className="text-stone-300 mb-4">
          The US sanctions apparatus has grown into a sprawling bureaucratic empire:
        </p>
        <div className="space-y-3">
          {sanctionsPrograms.map(s => (
            <div key={s.type} className="flex items-center gap-4 border-b border-stone-700 pb-2">
              <span className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)] w-20 shrink-0 text-right">{s.count}</span>
              <div>
                <p className="text-white font-semibold text-sm">{s.type}</p>
                <p className="text-stone-400 text-xs">{s.examples}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4">
          The Office of Foreign Assets Control (OFAC) — a branch of the US Treasury — maintains these lists.
          The compliance cost for American businesses alone exceeds $50 billion annually. Banks hire thousands
          of compliance officers whose sole job is ensuring they don&apos;t accidentally process a transaction
          involving anyone on the SDN list.
        </p>
      </div>

      {/* Who Pays */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Who Actually Pays?</h2>
        <p className="text-stone-300 mb-4">
          The pattern is universal: sanctions punish civilians while leadership is insulated.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-red-400 font-semibold mb-2">Civilians Pay</h3>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>• Medicine shortages — cancer patients die without chemotherapy</li>
              <li>• Food prices spike — families can&apos;t afford basic nutrition</li>
              <li>• Currency collapse — life savings evaporate overnight</li>
              <li>• Brain drain — educated professionals flee</li>
              <li>• Infrastructure decay — water treatment, electricity fail</li>
              <li>• Children suffer most — stunted growth, education disrupted</li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <h3 className="text-stone-300 font-semibold mb-2">Leadership Doesn&apos;t</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>• Saddam built palaces during Iraq sanctions</li>
              <li>• Kim Jong Un imports luxury goods via China</li>
              <li>• Putin&apos;s inner circle uses shell companies</li>
              <li>• IRGC controls Iran&apos;s sanctions evasion networks</li>
              <li>• Maduro controlled food distribution, gaining leverage</li>
              <li>• Sanctioned elites use crypto, gold, and front companies</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Libertarian Argument */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Economic Warfare Is Still Warfare</h2>

        <div className="prose max-w-none">
          <blockquote className="border-l-4 border-red-600 pl-4 text-stone-300 italic my-4">
            &ldquo;Sanctions are not diplomacy. They are a weapon of war. When you prevent a country from
            importing medicine and food, you are conducting warfare against civilians. The fact that bombs
            aren&apos;t falling doesn&apos;t make the dead children any less dead.&rdquo;
            <span className="block text-sm text-stone-500 mt-1 not-italic">— Ron Paul</span>
          </blockquote>
        </div>

        <p className="text-stone-300 mb-4">
          The libertarian critique of sanctions is devastatingly simple: if it&apos;s wrong to bomb
          a hospital, it&apos;s wrong to prevent a hospital from getting medicine. If it&apos;s wrong
          to starve civilians in a siege, it&apos;s wrong to starve them with banking restrictions.
          The mechanism differs; the result is identical. Children die.
        </p>
        <p className="text-stone-300 mb-4">
          Sanctions also violate the most basic principles of free trade and individual liberty.
          They prevent American businesses from engaging in voluntary commerce. They criminalize
          peaceful exchange between consenting parties. They empower government bureaucrats to
          decide who can buy what from whom. And they impose collective punishment on entire
          populations for the actions of their governments — the same governments those populations
          have no power to change.
        </p>
        <p className="text-stone-300">
          When 500,000 Iraqi children die and the Secretary of State says &ldquo;the price is
          worth it,&rdquo; that isn&apos;t diplomacy. That&apos;s a war crime with better PR.
        </p>
      </div>

      {/* The Sanctions Machinery */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Sanctions Machine: How OFAC Controls the Global Economy</h2>
        <p className="text-stone-300 mb-4">
          The Office of Foreign Assets Control (OFAC) — a 200-person agency tucked inside the Treasury Department — 
          wields more power over the global economy than any other organization on Earth. With a few keystrokes, 
          OFAC can freeze billions in assets, destroy entire industries, and cut countries off from the international 
          financial system. And it operates with virtually no oversight.
        </p>
        
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mb-4">
          <h3 className="text-red-400 font-semibold mb-2">OFAC by the Numbers</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-stone-300">
            <div>
              <ul className="space-y-1">
                <li>• <strong>$42 billion</strong> in assets frozen globally</li>
                <li>• <strong>12,000+</strong> individuals/entities on SDN list</li>
                <li>• <strong>40+</strong> active sanctions programs</li>
                <li>• <strong>$3.7 billion</strong> in fines collected (2023)</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li>• <strong>200</strong> OFAC staff members</li>
                <li>• <strong>50,000+</strong> banks worldwide must comply</li>
                <li>• <strong>$50+ billion</strong> annual compliance costs</li>
                <li>• <strong>Zero</strong> congressional oversight of day-to-day operations</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-stone-300 mb-4">
          OFAC&apos;s power derives from the dollar&apos;s dominance in global finance. Because most international 
          transactions flow through US banks or use US dollars, American sanctions have global reach. A Chinese 
          company buying Iranian oil with euros through a European bank can still be sanctioned by OFAC — because 
          the transaction might touch a US correspondent bank somewhere in the chain.
        </p>
        
        <div className="bg-slate-800 rounded p-4">
          <h3 className="text-white font-semibold mb-2">The Compliance Industry</h3>
          <p className="text-stone-300 text-sm mb-2">
            US sanctions created an entire industry: sanctions compliance. Major banks employ thousands of compliance 
            officers whose sole job is ensuring they don&apos;t accidentally process sanctioned transactions.
          </p>
          <div className="grid md:grid-cols-2 gap-3 text-stone-300 text-sm">
            <div>
              <p><strong>JPMorgan Chase:</strong> 4,000+ compliance staff</p>
              <p><strong>Bank of America:</strong> 3,500+ compliance staff</p>
              <p><strong>Wells Fargo:</strong> 3,000+ compliance staff</p>
            </div>
            <div>
              <p><strong>Annual cost:</strong> $50+ billion globally</p>
              <p><strong>Software vendors:</strong> $2+ billion market</p>
              <p><strong>Consultants:</strong> Big 4 firms all have sanctions practices</p>
            </div>
          </div>
          <p className="text-stone-400 text-xs mt-2">
            These compliance costs are passed on to consumers through higher banking fees. Everyone pays for America&apos;s sanctions.
          </p>
        </div>
      </div>

      {/* More Case Studies */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">More Case Studies: The Pattern Never Changes</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="text-white font-semibold text-lg">Myanmar (2021-present)</h3>
            <p className="text-stone-300 text-sm mb-2">
              <strong>Goal:</strong> Restore democracy after military coup<br/>
              <strong>Result:</strong> Military junta consolidated power, crackdown intensified<br/>
              <strong>Civilian cost:</strong> Economy collapsed 20%, 2.6 million internally displaced, 
              civil war ongoing. Healthcare system destroyed — tuberculosis and HIV treatment stopped. 
              Banking system paralyzed — people can&apos;t access their own savings.
            </p>
            <p className="text-stone-400 text-sm">
              <strong>Leadership impact:</strong> Military generals control jade mines, timber exports, and smuggling networks. 
              Their wealth is untouchable. Sanctions gave them an excuse to crush dissent &ldquo;to defend against foreign interference.&rdquo;
            </p>
          </div>

          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="text-white font-semibold text-lg">Syria (2011-present)</h3>
            <p className="text-stone-300 text-sm mb-2">
              <strong>Goal:</strong> Force Assad from power, end civil war<br/>
              <strong>Result:</strong> Assad won the civil war, remains in power, now seeking normalization<br/>
              <strong>Civilian cost:</strong> 350,000+ dead, 6.8 million refugees, 6.7 million internally displaced. 
              Economy shrank 85%. Reconstruction impossible due to sanctions — Syrians live in ruins.
            </p>
            <p className="text-stone-400 text-sm">
              <strong>Leadership impact:</strong> Assad and his family live in palaces. Business elite profited from war economy. 
              Iran and Russia provided alternative financial systems. The war devastated Syria; sanctions prevented recovery.
            </p>
          </div>

          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="text-white font-semibold text-lg">Belarus (2020-present)</h3>
            <p className="text-stone-300 text-sm mb-2">
              <strong>Goal:</strong> Force democratic elections after disputed 2020 election<br/>
              <strong>Result:</strong> Lukashenko crushed protests, opposition fled to exile, closer ties with Russia<br/>
              <strong>Civilian cost:</strong> Unemployment spiked 40%. IT sector — Belarus&apos;s Silicon Valley — devastated 
              as companies relocated. Young professionals emigrated en masse.
            </p>
            <p className="text-stone-400 text-sm">
              <strong>Leadership impact:</strong> Lukashenko turned to Putin for economic support. Russian subsidies replaced Western trade. 
              The sanctions drove Belarus deeper into Russia&apos;s orbit — the opposite of the intended effect.
            </p>
          </div>

          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="text-white font-semibold text-lg">Afghanistan (2021-present)</h3>
            <p className="text-stone-300 text-sm mb-2">
              <strong>Goal:</strong> Pressure Taliban on women&apos;s rights, counterterrorism cooperation<br/>
              <strong>Result:</strong> Taliban banned women from work, education. Al-Qaeda returned. ISIS-K active.<br/>
              <strong>Civilian cost:</strong> 28 million people need humanitarian assistance. 1.1 million children 
              acutely malnourished. Healthcare system collapsed — maternal mortality spiked 25%.
            </p>
            <p className="text-stone-400 text-sm">
              <strong>Leadership impact:</strong> Taliban leadership lives comfortably while enforcing increasingly harsh restrictions. 
              External pressure gave hardliners ammunition to justify oppressing women &ldquo;to resist foreign interference.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Secondary Sanctions */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Secondary Sanctions: When America Sanctions Its Own Allies</h2>
        <p className="text-stone-300 mb-4">
          Primary sanctions target the &ldquo;bad guys.&rdquo; Secondary sanctions target anyone who does business with the bad guys — 
          including US allies. This extraterritorial overreach has created massive friction with friendly countries and businesses.
        </p>

        <div className="space-y-4">
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-1">European Companies Punished</h3>
            <p className="text-sm text-stone-300 mb-2">
              <strong>BNP Paribas (France):</strong> Fined $8.9 billion for processing Iranian transactions that were legal under EU law<br/>
              <strong>Deutsche Bank (Germany):</strong> Fined $7.2 billion for correspondent banking with sanctioned entities<br/>
              <strong>ING (Netherlands):</strong> Fined $619 million for Iranian/Cuban transactions legal in Europe<br/>
              <strong>Standard Chartered (UK):</strong> Fined $1.1 billion for Iran sanctions violations
            </p>
            <p className="text-stone-400 text-xs">
              These banks followed their own countries&apos; laws but violated US laws. America fined them anyway, 
              asserting global jurisdiction over any transaction that touched US financial system.
            </p>
          </div>

          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-1">Energy Sector Chaos</h3>
            <p className="text-sm text-stone-300 mb-2">
              <strong>Nord Stream 2:</strong> US sanctioned German companies building pipeline on German territory with Russian gas. 
              Germany called it a violation of sovereignty.<br/>
              <strong>TurkStream:</strong> US threatened sanctions on Turkish companies for pipeline project that Turkey considers vital to energy security.<br/>
              <strong>South Pars:</strong> Total (France), Shell (Netherlands), and Eni (Italy) all abandoned Iranian gas projects due to US threats.
            </p>
            <p className="text-stone-400 text-xs">
              US sanctions forced allies to abandon energy projects worth hundreds of billions. European energy security was subordinated to US foreign policy.
            </p>
          </div>

          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-1">The INSTEX Rebellion</h3>
            <p className="text-sm text-stone-300 mb-2">
              In 2019, Germany, France, and Britain created INSTEX — a payment mechanism to trade with Iran while avoiding US sanctions. 
              It was supposed to preserve the Iran nuclear deal after Trump&apos;s withdrawal. 
              <strong>Result:</strong> INSTEX processed exactly zero significant transactions. US secondary sanctions made it unusable.
            </p>
            <p className="text-stone-400 text-xs">
              Even America&apos;s closest allies couldn&apos;t escape US financial dominance. European sovereignty was meaningless.
            </p>
          </div>
        </div>
      </div>

      {/* Sanctions Evasion Networks */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The $2 Trillion Shadow Economy</h2>
        <p className="text-stone-300 mb-4">
          Sanctions don&apos;t eliminate trade — they drive it underground. The result is a massive global shadow economy 
          where sanctioned countries trade through shell companies, cryptocurrency, gold, and barter systems. This shadow economy 
          is estimated at over $2 trillion annually and growing.
        </p>

        <div className="space-y-4">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-red-400 font-semibold mb-2">Iran&apos;s Sanctions Evasion Playbook</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-stone-300">
              <div>
                <p><strong>Oil exports:</strong> Ship-to-ship transfers in international waters, fake documents, front companies</p>
                <p><strong>Banking:</strong> Cryptocurrency, hawala networks, gold trading, barter arrangements</p>
                <p><strong>Technology:</strong> Import through Dubai, Turkey, Malaysia using shell companies</p>
              </div>
              <div>
                <p><strong>Revenue:</strong> $50+ billion annually despite &ldquo;maximum pressure&rdquo;</p>
                <p><strong>Partners:</strong> China (largest customer), Russia, Venezuela, North Korea</p>
                <p><strong>Methods:</strong> Ghost tankers, digital currencies, precious metals</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-2">The Cryptocurrency Revolution</h3>
            <p className="text-stone-300 text-sm mb-2">
              Sanctioned countries are among the world&apos;s largest cryptocurrency adopters. Why? Crypto transactions 
              are borderless, pseudonymous, and don&apos;t require traditional banking. North Korea has stolen $3+ billion 
              in cryptocurrency. Iran mines Bitcoin to sell on global markets. Russia is building state-sponsored crypto systems.
            </p>
            <p className="text-stone-400 text-xs">
              The US Treasury is now trying to sanction cryptocurrency addresses — a technologically impossible task that shows how little policymakers understand the systems they&apos;re trying to control.
            </p>
          </div>

          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-2">China: The Sanctions Superstore</h3>
            <p className="text-stone-300 text-sm mb-2">
              China has become the world&apos;s largest sanctions-evading hub. Chinese companies import sanctioned oil, 
              export banned technology, and provide financial services to sanctioned entities. China&apos;s position is simple: 
              we don&apos;t recognize unilateral US sanctions. Only UN Security Council sanctions are legitimate.
            </p>
            <p className="text-stone-400 text-xs">
              As the world&apos;s second-largest economy, China provides sanctioned countries with everything they need. US sanctions become unilateral trade restrictions rather than multilateral pressure.
            </p>
          </div>
        </div>
      </div>

      {/* Historical Evolution */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">From Trading with the Enemy to Financial Warfare</h2>
        <p className="text-stone-300 mb-4">
          US sanctions began during World War I as &ldquo;Trading with the Enemy Act&rdquo; — a wartime emergency measure. 
          Over a century, they evolved into the primary tool of American foreign policy. The transformation shows how 
          emergency powers become permanent, and how narrow wartime authorities expand into peacetime control.
        </p>

        <div className="space-y-3">
          <div className="border-l-4 border-stone-600 pl-4">
            <h4 className="text-white font-semibold">1917: Trading with the Enemy Act</h4>
            <p className="text-stone-300 text-sm">Emergency wartime legislation to prevent trade with Germany and Austria-Hungary. 
            Limited to actual wartime with actual enemies.</p>
          </div>

          <div className="border-l-4 border-stone-600 pl-4">
            <h4 className="text-white font-semibold">1950: Korea and the Cold War</h4>
            <p className="text-stone-300 text-sm">Truman used emergency powers to freeze Chinese assets during Korean War. 
            First use of sanctions against communist countries. Set precedent for ideological sanctions.</p>
          </div>

          <div className="border-l-4 border-stone-600 pl-4">
            <h4 className="text-white font-semibold">1977: International Emergency Economic Powers Act (IEEPA)</h4>
            <p className="text-stone-300 text-sm">Created legal framework for presidential sanctions powers. Presidents can 
            declare &ldquo;national emergencies&rdquo; and impose sanctions with minimal oversight. 
            <strong>Every sanctions program since 1977 uses IEEPA.</strong></p>
          </div>

          <div className="border-l-4 border-stone-600 pl-4">
            <h4 className="text-white font-semibold">2001: USA PATRIOT Act</h4>
            <p className="text-stone-300 text-sm">Post-9/11 legislation gave Treasury unprecedented powers to freeze assets, 
            force banks to close accounts, and investigate transactions. Section 311 allows Treasury to designate foreign 
            banks as &ldquo;money laundering concerns&rdquo; — a death sentence for international banks.</p>
          </div>

          <div className="border-l-4 border-stone-600 pl-4">
            <h4 className="text-white font-semibold">2010s: Secondary Sanctions Revolution</h4>
            <p className="text-stone-300 text-sm">US began sanctioning foreign companies for trading with sanctioned countries. 
            Turned American banks into global enforcement agents. Any transaction touching US financial system became subject to US law.</p>
          </div>

          <div className="border-l-4 border-red-600 pl-4">
            <h4 className="text-red-400 font-semibold">2020s: Weaponized Finance</h4>
            <p className="text-stone-300 text-sm">Russia sanctions froze $300+ billion in foreign reserves — showing that 
            even central bank assets aren&apos;t safe. Sanctions now target entire financial systems, not just individuals or companies.</p>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-4">
          <p className="text-stone-300 text-sm">
            <strong>The pattern:</strong> Each crisis expands sanctions powers. Each expansion becomes permanent. 
            What began as wartime trade restrictions became a global financial surveillance and control system operated 
            by the US Treasury with minimal oversight.
          </p>
        </div>
      </div>

      {/* Unintended Consequences */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Unintended Consequences</h2>
        <div className="space-y-4">
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-1">De-dollarization</h3>
            <p className="text-sm text-stone-300">
              Every time the US weaponizes the dollar, more countries seek alternatives. BRICS nations
              are actively building parallel financial systems. China&apos;s yuan settlement is growing.
              Russia and China now conduct 90%+ of bilateral trade in non-dollar currencies. The dollar&apos;s
              share of global reserves has fallen from 71% (2000) to 58% (2024). Sanctions are destroying
              the very tool that makes sanctions possible.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-1">Driving Enemies Together</h3>
            <p className="text-sm text-stone-300">
              US sanctions pushed Russia and China into a strategic partnership. Iran, North Korea, and
              Russia now share military technology. Venezuela turned to China for economic lifelines.
              Sanctions created the very axis of resistance they were supposed to prevent.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-1">Strengthening Authoritarian Regimes</h3>
            <p className="text-sm text-stone-300">
              External pressure rallies populations around their leaders. Putin&apos;s approval rating rose
              after 2022 sanctions. Iranian hardliners use sanctions as proof that America is the enemy.
              Cuban government has blamed the embargo for every failure for 63 years — and it&apos;s often right.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-1">Humanitarian Exceptions Don&apos;t Work</h3>
            <p className="text-sm text-stone-300">
              Every sanctions regime includes &ldquo;humanitarian exemptions&rdquo; for medicine and food.
              In practice, banks refuse to process any transactions with sanctioned countries for fear of
              penalties. This &ldquo;over-compliance&rdquo; means humanitarian goods never arrive. The
              exemptions exist on paper; they don&apos;t exist in reality.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-1">Creating Black Markets</h3>
            <p className="text-sm text-stone-300">
              Sanctions don&apos;t eliminate demand — they criminalize supply. This creates massive black market 
              premiums and enriches smugglers, money launderers, and organized crime networks. Iran&apos;s oil 
              trades at $10-20 below market price, but sanctions evaders capture the margin. Crime pays, literally.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-1">Innovation in Authoritarian Finance</h3>
            <p className="text-sm text-stone-300">
              Sanctions force target countries to innovate around the US financial system. Russia developed 
              alternative payment systems (SPFS, Mir cards). China built CIPS for yuan transactions. Iran uses 
              crypto mining to generate hard currency. These innovations reduce global dependence on US systems.
            </p>
          </div>
        </div>
      </div>

      {/* Historical Data */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">By the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { val: '12,000+', label: 'Entities on US sanctions lists' },
            { val: '~30', label: 'Countries under some form of US sanctions' },
            { val: '500,000+', label: 'Iraqi children killed by sanctions' },
            { val: '600K–2.5M', label: 'North Korean famine deaths' },
            { val: '7.7M', label: 'Venezuelans displaced' },
            { val: '$300B', label: 'Russian assets frozen' },
            { val: '34%', label: 'Peterson Institute success rate' },
            { val: '5%', label: 'Pape re-analysis success rate' },
            { val: '63 years', label: 'Longest active sanctions (Cuba)' },
          ].map(s => (
            <div key={s.label} className="bg-slate-800 rounded p-3 text-center">
              <p className="text-lg font-bold text-red-400 font-[family-name:var(--font-heading)]">{s.val}</p>
              <p className="text-xs text-stone-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Alternatives */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">What Actually Works</h2>
        <p className="text-stone-300 mb-4">
          If sanctions don&apos;t work, what does? The evidence points to engagement, not isolation:
        </p>
        <div className="space-y-3">
          {[
            { approach: 'Trade and engagement', example: 'US-China normalization (1972) changed Chinese behavior more than any sanctions regime. Vietnam is now a US trading partner and strategic ally. Economic integration creates mutual interests in stability.' },
            { approach: 'Targeted prosecution', example: 'Going after individual leaders through international courts, asset seizures of personal (not national) wealth, and travel bans. Target the decision-makers, not the population.' },
            { approach: 'Diplomacy', example: 'The JCPOA (Iran nuclear deal) achieved more in 2 years of negotiations than 40 years of sanctions. Iran reduced centrifuges by 2/3, shipped out 98% of enriched uranium, and allowed inspections. Then the US withdrew.' },
            { approach: 'Non-intervention', example: 'The most radical idea of all: stop trying to control other countries\' internal affairs. Trade with them. Talk to them. Let their own people determine their governance. It worked for the US for its first 150 years.' },
          ].map(a => (
            <div key={a.approach} className="border-l-4 border-red-600 pl-4">
              <p className="text-white font-semibold text-sm">{a.approach}</p>
              <p className="text-stone-400 text-sm">{a.example}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { href: '/analysis/economic-warfare', label: 'Economic Warfare — Sanctions, SWIFT & the Weaponized Dollar' },
            { href: '/analysis/blowback', label: 'Blowback — The Concept That Explains Everything' },
            { href: '/analysis/iran-2026', label: 'The Iran Conflict Nobody Asked For' },
            { href: '/analysis/human-cost', label: 'The Human Cost of War' },
            { href: '/analysis/sanctions-warfare', label: 'Sanctions Warfare — Deep Dive' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-red-400 hover:text-red-800 text-sm hover:underline">
              → {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <p className="text-stone-300 text-lg mb-4">
          Sanctions don&apos;t topple regimes. They don&apos;t change behavior. They don&apos;t prevent wars.
          What they do — reliably, consistently, across every case study in modern history — is kill
          civilians. They starve children. They deny medicine to the sick. They destroy middle classes.
          They drive brain drains. They strengthen the very regimes they&apos;re supposed to weaken.
        </p>
        <p className="text-stone-300 text-lg mb-4">
          Economic warfare is still warfare. The weapon is different — bank ledgers instead of bombs —
          but the victims are the same: ordinary people who had no say in the policies that provoked
          the sanctions, and no power to change those policies once the sanctions arrived.
        </p>
        <blockquote className="border-l-4 border-red-500 pl-4 text-stone-400 italic">
          &ldquo;Free trade is the greatest force for peace and prosperity ever discovered.
          When goods cross borders, armies don&apos;t. When you sanction a country, you guarantee
          that armies eventually will.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Adapted from Frédéric Bastiat</span>
        </blockquote>
      </div>

      <BackToTop />
    </div>
  )
}
