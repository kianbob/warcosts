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
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
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
                <div className="bg-stone-800/50 rounded p-3">
                  <p className="text-xs font-semibold text-stone-500 uppercase mb-1">Civilian Cost</p>
                  <p className="text-sm text-stone-300">{c.civilianCost}</p>
                </div>
                <div className="bg-stone-800/50 rounded p-3">
                  <p className="text-xs font-semibold text-stone-500 uppercase mb-1">GDP Impact</p>
                  <p className="text-sm text-stone-300">{c.gdpImpact}</p>
                </div>
              </div>
              <div className="bg-red-950/30 border border-red-900/30 rounded p-3">
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
          <div className="bg-red-950/30 border border-red-900/30 rounded-lg p-4">
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
          <div className="bg-stone-800/50 rounded-lg p-4">
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

      {/* Unintended Consequences */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Unintended Consequences</h2>
        <div className="space-y-4">
          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-white font-semibold mb-1">De-dollarization</h3>
            <p className="text-sm text-stone-300">
              Every time the US weaponizes the dollar, more countries seek alternatives. BRICS nations
              are actively building parallel financial systems. China&apos;s yuan settlement is growing.
              Russia and China now conduct 90%+ of bilateral trade in non-dollar currencies. The dollar&apos;s
              share of global reserves has fallen from 71% (2000) to 58% (2024). Sanctions are destroying
              the very tool that makes sanctions possible.
            </p>
          </div>
          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-white font-semibold mb-1">Driving Enemies Together</h3>
            <p className="text-sm text-stone-300">
              US sanctions pushed Russia and China into a strategic partnership. Iran, North Korea, and
              Russia now share military technology. Venezuela turned to China for economic lifelines.
              Sanctions created the very axis of resistance they were supposed to prevent.
            </p>
          </div>
          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-white font-semibold mb-1">Strengthening Authoritarian Regimes</h3>
            <p className="text-sm text-stone-300">
              External pressure rallies populations around their leaders. Putin&apos;s approval rating rose
              after 2022 sanctions. Iranian hardliners use sanctions as proof that America is the enemy.
              Cuban government has blamed the embargo for every failure for 63 years — and it&apos;s often right.
            </p>
          </div>
          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-white font-semibold mb-1">Humanitarian Exceptions Don&apos;t Work</h3>
            <p className="text-sm text-stone-300">
              Every sanctions regime includes &ldquo;humanitarian exemptions&rdquo; for medicine and food.
              In practice, banks refuse to process any transactions with sanctioned countries for fear of
              penalties. This &ldquo;over-compliance&rdquo; means humanitarian goods never arrive. The
              exemptions exist on paper; they don&apos;t exist in reality.
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
            <div key={s.label} className="bg-stone-800/50 rounded p-3 text-center">
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
            <Link key={l.href} href={l.href} className="text-red-400 hover:text-red-300 text-sm hover:underline">
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
