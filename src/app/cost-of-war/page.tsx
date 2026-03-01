import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cost of War — $8 Trillion Since 9/11, $11.3T Since 1776',
  description: 'The total cost of US wars: $8 trillion since 9/11, $11.3 trillion since 1776. $70,000 per taxpayer. $100,000 per household. Per-conflict breakdowns, hidden costs, interest, and generational cost transfers.',
  keywords: ['cost of war', 'how much do wars cost', 'us war spending', 'war costs', 'cost of iraq war', 'cost of afghanistan war', 'war on terror cost'],
  openGraph: {
    title: 'The Cost of War — $11.3 Trillion and Counting',
    description: '$70,000 per taxpayer since 9/11 alone. Every conflict, every dollar, every life.',
    url: 'https://warcosts.org/cost-of-war',
    type: 'article',
  },
}

const warCosts = [
  { name: 'Revolutionary War', years: '1775–1783', cost: 2.4e9, deaths: 25000, note: '2024 dollars', costPerDeath: '$96K' },
  { name: 'War of 1812', years: '1812–1815', cost: 1.8e9, deaths: 20000, note: '2024 dollars', costPerDeath: '$90K' },
  { name: 'Mexican-American War', years: '1846–1848', cost: 3.1e9, deaths: 13283, note: '2024 dollars', costPerDeath: '$233K' },
  { name: 'Civil War (Union + Confederate)', years: '1861–1865', cost: 80e9, deaths: 750000, note: 'Both sides; 2024 dollars', costPerDeath: '$107K' },
  { name: 'Spanish-American War', years: '1898', cost: 9.6e9, deaths: 2446, note: '2024 dollars', costPerDeath: '$3.9M' },
  { name: 'World War I', years: '1917–1918', cost: 334e9, deaths: 116516, note: '2024 dollars', costPerDeath: '$2.9M' },
  { name: 'World War II', years: '1941–1945', cost: 4.7e12, deaths: 405399, note: '2024 dollars', costPerDeath: '$11.6M' },
  { name: 'Korean War', years: '1950–1953', cost: 341e9, deaths: 36574, note: '2024 dollars', costPerDeath: '$9.3M' },
  { name: 'Vietnam War', years: '1955–1975', cost: 843e9, deaths: 58220, note: '2024 dollars', costPerDeath: '$14.5M' },
  { name: 'Gulf War', years: '1990–1991', cost: 116e9, deaths: 383, note: '2024 dollars', costPerDeath: '$303M' },
  { name: 'Afghanistan War', years: '2001–2021', cost: 2.3e12, deaths: 2461, note: 'Including long-term costs', costPerDeath: '$935M' },
  { name: 'Iraq War', years: '2003–2011', cost: 2.4e12, deaths: 4599, note: 'Including long-term costs', costPerDeath: '$522M' },
  { name: 'War on Terror (total)', years: '2001–present', cost: 8e12, deaths: 7074, note: 'All post-9/11 operations', costPerDeath: '$1.1B' },
]

const hiddenCosts = [
  { category: 'Veteran Care (through 2050)', amount: '$2.2–2.5 trillion', desc: 'Healthcare, disability, rehabilitation for millions of veterans. Peak costs won\'t hit until 2040s.' },
  { category: 'Interest on War Debt', amount: '$1.1+ trillion (to date)', desc: 'Wars were financed by borrowing; interest payments compound indefinitely. Could reach $3T+ by 2050.' },
  { category: 'Homeland Security (since 2001)', amount: '$1.2+ trillion', desc: 'TSA, CBP expansion, surveillance infrastructure created as a direct result of 9/11.' },
  { category: 'DOD Base Budget Increases', amount: '$1+ trillion', desc: 'Permanent baseline increases justified by the War on Terror that will never be reversed.' },
  { category: 'State Department War-Related', amount: '$200+ billion', desc: 'Diplomatic, reconstruction, and stabilization costs in Iraq, Afghanistan, and partner nations.' },
  { category: 'Intelligence Community Expansion', amount: '$500+ billion', desc: 'Post-9/11 intelligence spending doubled and never returned to pre-2001 levels.' },
  { category: 'Social Costs', amount: 'Incalculable', desc: 'Veteran suicide (130,000+ since 2001), homelessness, family disruption, lost productivity, opioid crisis.' },
  { category: 'Environmental Remediation', amount: '$100+ billion (estimated)', desc: 'Depleted uranium, burn pits, PFAS contamination at military bases. Most cleanup hasn\'t started.' },
]

const opportunityCostPerHousehold = [
  { item: 'War on Terror cost per household', amount: '$61,000', note: '$8T ÷ 131M households' },
  { item: 'Including projected veteran care', amount: '$100,000+', note: 'Through 2050' },
  { item: 'Including interest on war debt', amount: '$130,000+', note: 'Through 2050 at current rates' },
  { item: 'Annual military spending per household', amount: '$6,750', note: '$886B ÷ 131M households' },
  { item: 'True national security per household', amount: '$11,500', note: '$1.5T ÷ 131M households' },
]

const warDebtInterest = [
  { period: '2001–2010', interest: '$260 billion', note: 'Early years — relatively low rates' },
  { period: '2011–2020', interest: '$440 billion', note: 'Compounding accelerates despite low rates' },
  { period: '2021–2023', interest: '$400+ billion', note: 'Rate increases dramatically increase cost' },
  { period: '2024–2030 (projected)', interest: '$500+ billion', note: 'Rising rates compound decades of borrowing' },
  { period: '2031–2050 (projected)', interest: '$1.5+ trillion', note: 'Cumulative interest could exceed $3T total' },
]

const generationalTransfer = [
  { generation: 'Baby Boomers (born 1946–1964)', burden: 'Voted for the wars, paid some taxes, will collect benefits', note: 'Peak earning years coincided with War on Terror. Tax cuts reduced their contribution.' },
  { generation: 'Gen X (born 1965–1980)', burden: 'Fought the wars, bearing health costs, inheriting the debt', note: 'First generation of the all-volunteer force to fight multi-decade wars.' },
  { generation: 'Millennials (born 1981–1996)', burden: 'Grew up during the wars, will pay the debt, never voted on it', note: 'Were children when AUMF passed. Will be paying interest into their 60s.' },
  { generation: 'Gen Z (born 1997–2012)', burden: 'Born after 9/11, inherit full debt burden, never had a say', note: 'The AUMF is older than they are. They will pay for wars that started before they were born.' },
  { generation: 'Gen Alpha (born 2013+)', burden: 'Will still be paying interest on War on Terror debt in 2060+', note: 'The ultimate taxation without representation — across time.' },
]

export default function CostOfWarPage() {
  const stats = loadData('stats.json')
  const conflicts = loadData('conflicts.json')

  const featured = conflicts
    .filter((c: any) => c.costInflationAdjusted > 100000000000)
    .sort((a: any, b: any) => b.costInflationAdjusted - a.costInflationAdjusted)
    .slice(0, 8)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Cost of War — $11.3 Trillion Since 1776',
    description: 'Every dollar spent on every US war, from the Revolution to today. Per-conflict breakdowns, hidden costs, and generational cost transfers.',
    url: 'https://warcosts.org/cost-of-war',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-01-01',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Cost of War' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">The Cost of War</h1>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        Since 1776, the United States has spent <strong className="text-stone-800">{fmtMoney(stats.totalCostInflationAdjusted)}</strong> on
        war. Since 9/11 alone: <strong className="text-stone-800">$8+ trillion</strong>. That&apos;s
        <strong className="text-stone-800"> $70,000 per taxpayer</strong> and
        <strong className="text-stone-800"> $100,000+ per household</strong> — borrowed money that will cost
        even more in interest over the coming decades. The true cost, including future veteran care and
        interest, may exceed <strong className="text-stone-800">$14 trillion</strong>.
      </p>
      <ShareButtons title="The Cost of War — $11.3 Trillion and Counting" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8">
        {[
          { label: 'Total War Cost (since 1776)', value: fmtMoney(stats.totalCostInflationAdjusted) },
          { label: 'Post-9/11 Cost', value: '$8T+' },
          { label: 'Per Taxpayer (since 9/11)', value: '$70,000+' },
          { label: 'Per Household', value: '$100,000+' },
          { label: 'US Military Deaths', value: fmt(stats.totalUSDeaths) },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl md:text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Additional stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Civilian Deaths (all wars)', value: `${(stats.totalCivilianDeaths / 1e6).toFixed(1)}M+` },
          { label: 'Future Veteran Care Cost', value: fmtMoney(stats.veteranCareFutureCost) },
          { label: 'War Debt Interest (to date)', value: '$1.1T+' },
          { label: 'People Displaced (WoT)', value: '38M' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 border border-red-200 text-center">
            <p className="text-xl md:text-2xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <p className="text-lg">
          War is the most expensive activity a nation can undertake. It consumes wealth, destroys infrastructure,
          kills the young, and burdens the future with debt and trauma. The United States has been at war for
          roughly <strong>229 of its 249 years of existence</strong> — and the costs, both financial and human,
          are staggering beyond comprehension.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The $8 Trillion War on Terror</h2>
        <p>
          According to the <strong>Brown University Costs of War Project</strong> — the most comprehensive
          accounting of post-9/11 war spending — the total cost of the War on Terror through 2023 exceeds
          <strong> $8 trillion</strong>. This figure includes:
        </p>
        <ul>
          <li>Direct war-fighting costs in Iraq, Afghanistan, Syria, and elsewhere: <strong>$2.9 trillion</strong></li>
          <li>DOD base budget increases attributable to the wars: <strong>$1.1 trillion</strong></li>
          <li>Veterans&apos; medical and disability costs: <strong>$580+ billion to date</strong> (projected $2.2T+ through 2050)</li>
          <li>Interest on war borrowing: <strong>$1.1+ trillion</strong></li>
          <li>Homeland Security: <strong>$1.2+ trillion since 2001</strong></li>
          <li>State Department war-related costs: <strong>$200+ billion</strong></li>
        </ul>
        <p>
          These numbers are updated regularly by the Costs of War Project and continue to grow. The $8 trillion
          figure does not include the <strong>$2.5 trillion in projected future veteran care costs</strong> that
          will accrue through 2050 and beyond. When these are included, the total cost of the War on Terror
          will likely exceed <strong>$10 trillion</strong>.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The $8 trillion cost of the War on Terror is <strong>more than the entire GDP of Japan</strong> ($4.2T)
            and Germany ($4.1T) combined. If you stacked $8 trillion in $100 bills, the pile would reach
            <strong> 5,400 miles high</strong> — more than 20 times the altitude of the International Space Station.
            At the current rate of ${fmt(stats.costPerSecond)} per second, the military spends $8 trillion in approximately 9 years.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The Brown University Methodology</h2>
        <p>
          The Costs of War Project at Brown University&apos;s Watson Institute is the gold standard for war cost
          accounting. Unlike Pentagon estimates (which exclude most long-term costs), the Brown methodology captures:
        </p>
        <ul>
          <li><strong>Direct budgetary costs:</strong> Appropriations for war operations (OCO funding, supplementals)</li>
          <li><strong>Future obligations:</strong> Veteran care costs that will accrue for decades (peak costs projected in 2040s)</li>
          <li><strong>Interest costs:</strong> Because wars are financed through borrowing, not taxation, interest compounds</li>
          <li><strong>Base budget increases:</strong> Permanent DOD spending growth justified by the wars that never reverses</li>
          <li><strong>Related spending:</strong> Homeland Security, State Department programs created or expanded by 9/11</li>
          <li><strong>Opportunity costs:</strong> Economic activity forgone because resources went to war instead</li>
        </ul>
        <p>
          The Costs of War methodology reveals that <strong>the direct fighting costs are only about 36%</strong> of
          total war costs. The rest — veteran care, interest, homeland security, base budget growth — represent
          the hidden iceberg beneath the surface that politicians rarely discuss. This is why Pentagon cost
          estimates are systematically misleading: they show only the tip of the iceberg.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Cost Per Taxpayer, Per Household</h2>
        <p>
          There are approximately 113 million US taxpayers and 131 million households. Here&apos;s what the wars
          cost each family:
        </p>
      </div>

      <div className="max-w-3xl mx-auto my-8 space-y-3">
        {opportunityCostPerHousehold.map(o => (
          <div key={o.item} className="bg-white rounded-lg border p-4 flex justify-between items-center">
            <div>
              <span className="font-medium text-sm">{o.item}</span>
              <p className="text-stone-500 text-xs">{o.note}</p>
            </div>
            <span className="text-red-800 font-bold font-[family-name:var(--font-heading)] text-xl">{o.amount}</span>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <p>
          These wars were not funded by taxes — they were funded by debt. The 2001 and 2003 tax cuts actually
          <em> reduced</em> federal revenue during wartime, a historically unprecedented decision. During World
          War II, the top marginal tax rate was 94%. During Korea, 92%. During Vietnam, 70%. During the War on
          Terror: <strong>35%</strong> (and falling). The result: every dollar spent on the War on Terror was
          borrowed, and American taxpayers will be paying interest on that borrowing for generations.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The United States has fought its post-9/11 wars almost entirely on borrowed money, with the
          costs shifted to future generations. This is the first time in American history that taxes were
          cut during wartime.&rdquo;
          <br />— Neta Crawford, Costs of War Project, Brown University
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">War Costs Across American History</h2>
        <p>
          All figures are inflation-adjusted to 2024 dollars for comparison. Note the dramatic trend: modern
          wars cost exponentially more in dollars but kill fewer Americans — because the killing is increasingly
          done to others. The cost per American death has risen from $96,000 in the Revolutionary War to over
          <strong> $1 billion</strong> in the War on Terror.
        </p>
      </div>

      {/* Historical war costs table */}
      <div className="overflow-x-auto my-8 max-w-3xl mx-auto">
        <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
          <thead className="bg-stone-100">
            <tr>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Conflict</th>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Years</th>
              <th className="text-right p-3 font-[family-name:var(--font-heading)]">Cost (2024$)</th>
              <th className="text-right p-3 font-[family-name:var(--font-heading)]">US Deaths</th>
              <th className="text-right p-3 font-[family-name:var(--font-heading)]">Cost/Death</th>
            </tr>
          </thead>
          <tbody>
            {warCosts.map(w => (
              <tr key={w.name} className="border-t border-stone-200">
                <td className="p-3 font-medium">{w.name}</td>
                <td className="p-3 text-stone-500">{w.years}</td>
                <td className="p-3 text-red-800 font-semibold text-right">{fmtMoney(w.cost)}</td>
                <td className="p-3 text-stone-600 text-right">{fmt(w.deaths)}</td>
                <td className="p-3 text-stone-500 text-right text-xs">{w.costPerDeath}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-stone-500 text-xs mt-2">Sources: CRS RL33110, Brown University Costs of War Project, OMB Historical Tables</p>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <p>
          The trend is unmistakable: wars are becoming more expensive in absolute terms while killing fewer
          Americans — because the killing is increasingly done to others. The Iraq War cost <strong>$2.4
          trillion</strong> and killed 4,599 American soldiers. It also killed an estimated
          <strong> 200,000–300,000 Iraqi civilians</strong>. The cost per American soldier killed:
          approximately $522 million. The cost per Iraqi civilian killed: roughly $10,000. The disparity
          reveals who bears the true burden of American wars.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Hidden Costs</h2>
        <p>
          The costs listed in the table above are the <em>direct</em> costs of each war. The true costs
          extend far beyond what any budget line item captures:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 my-8 max-w-3xl mx-auto">
        {hiddenCosts.map(h => (
          <div key={h.category} className="bg-stone-50 rounded-lg p-5 border">
            <p className="font-bold text-red-800 font-[family-name:var(--font-heading)] text-lg">{h.amount}</p>
            <p className="font-medium text-stone-800 text-sm">{h.category}</p>
            <p className="text-stone-500 text-xs mt-1">{h.desc}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Compounding Effect of War Debt</h2>
        <p>
          Because the War on Terror was financed entirely through borrowing, the interest costs compound
          over time. This is perhaps the most insidious hidden cost of all — it grows automatically, requires
          no new legislation, and will burden taxpayers for generations:
        </p>
      </div>

      <div className="max-w-3xl mx-auto my-8 space-y-3">
        {warDebtInterest.map(w => (
          <div key={w.period} className="bg-white rounded-lg border p-4 flex flex-wrap justify-between items-center gap-2">
            <div>
              <span className="font-medium text-sm">{w.period}</span>
              <p className="text-stone-500 text-xs">{w.note}</p>
            </div>
            <span className="text-red-800 font-bold font-[family-name:var(--font-heading)]">{w.interest}</span>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <p>
          To understand the compounding effect: for every $1 spent on the war itself, American taxpayers
          will eventually pay approximately <strong>$1.40–1.60</strong> once interest is included. By 2050,
          cumulative interest on War on Terror borrowing alone could exceed <strong>$3 trillion</strong>.
          The wars are still being fought — on the balance sheet — long after the troops come home.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            During World War II, the US raised taxes dramatically and sold war bonds to fund the conflict. The
            top marginal tax rate reached <strong>94%</strong>. During the War on Terror, taxes were <em>cut</em>.
            The Bush-era tax cuts (2001, 2003) reduced federal revenue by an estimated <strong>$8 trillion</strong> over
            20 years — almost exactly the cost of the wars. Americans fought the most expensive wars in modern
            history while paying the lowest tax rates since the 1920s.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Generational Cost Transfer: Who Pays?</h2>
        <p>
          The decision to finance wars through debt rather than taxes creates a profound intergenerational
          injustice. The people who decided to wage these wars and the people who will pay for them are
          increasingly different groups:
        </p>
      </div>

      <div className="max-w-3xl mx-auto my-8 space-y-3">
        {generationalTransfer.map(g => (
          <div key={g.generation} className="bg-white rounded-lg border p-5">
            <h3 className="font-[family-name:var(--font-heading)] font-bold">{g.generation}</h3>
            <p className="text-red-800 text-sm font-semibold">{g.burden}</p>
            <p className="text-stone-500 text-xs mt-1">{g.note}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <p>
          This is the libertarian nightmare scenario: a government waging wars that the population didn&apos;t
          vote for, funded by debt that future citizens didn&apos;t consent to, creating obligations that will
          persist for decades. The 2001 AUMF was passed when Gen Z was in diapers. They will be paying for it
          into retirement. This is <strong>taxation without representation across time</strong>.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Per-Conflict Cost Breakdown</h2>

        <h3 className="font-[family-name:var(--font-heading)]">Afghanistan: $2.3 Trillion for Nothing</h3>
        <p>
          The Afghanistan War (2001–2021) cost approximately <strong>$2.3 trillion</strong> — or about
          <strong> $300 million per day</strong> for 20 years. This includes:
        </p>
        <ul>
          <li>Direct DOD war-fighting costs: $933 billion</li>
          <li>State Department/USAID reconstruction: $145 billion</li>
          <li>Interest on borrowing: $530 billion</li>
          <li>Veteran care (to date): $296 billion (projected $1T+ through 2050)</li>
          <li>DOD base budget increases: $443 billion</li>
        </ul>
        <p>
          After spending $2.3 trillion, losing 2,461 American lives, and 20 years of occupation, the Taliban
          — the same group the US went to war to remove — controls Afghanistan again. The Afghan government
          the US spent hundreds of billions building collapsed in 11 days. The reconstruction funds were
          largely wasted: the Special Inspector General for Afghanistan Reconstruction (SIGAR) documented
          billions in fraud, waste, and abuse, including a $43 million gas station, a $28 million
          &ldquo;forest&rdquo; in a desert, and military uniforms in the wrong camouflage pattern that cost
          $28 million.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">Iraq: $2.4 Trillion and Counting</h3>
        <p>
          The Iraq War (2003–2011, with ongoing costs) has cost approximately <strong>$2.4 trillion</strong>,
          making it the second most expensive war in US history after World War II. Before the invasion, the
          Bush administration estimated the war would cost <strong>$50–60 billion</strong>. Economic advisor
          Lawrence Lindsey was fired for suggesting it might cost $100–200 billion. The actual cost was
          <strong> 40 times the original estimate</strong>.
        </p>
        <ul>
          <li>Direct war-fighting: $839 billion</li>
          <li>Veteran care (to date): $344 billion</li>
          <li>Interest on borrowing: $615 billion</li>
          <li>State Department/reconstruction: $76 billion</li>
          <li>DOD base budget increases: $533 billion</li>
        </ul>
        <p>
          The Iraq War was fought based on intelligence that Iraq possessed weapons of mass destruction. No
          WMDs were found. An estimated <strong>200,000–300,000 Iraqi civilians</strong> were killed. The
          invasion destabilized the entire Middle East, created the conditions for ISIS, triggered a refugee
          crisis that destabilized Europe, and empowered Iran as a regional power. It is widely regarded as
          the worst foreign policy blunder in modern American history.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">Vietnam: The Original Forever War</h3>
        <p>
          The Vietnam War cost <strong>$843 billion</strong> in 2024 dollars over 20 years (1955–1975).
          58,220 Americans were killed and an estimated <strong>2 million Vietnamese civilians</strong> died.
          The US dropped more bombs on Vietnam, Laos, and Cambodia than all sides in World War II combined.
          Laos remains the most heavily bombed country per capita in history — unexploded ordnance still
          kills 50+ people per year.
        </p>
        <p>
          The parallels to the War on Terror are striking: gradual escalation, presidential deception (Pentagon
          Papers, Gulf of Tonkin), unfulfillable promises of progress, and an ignominious exit after decades
          of bloodshed and treasure spent. The lesson of Vietnam — that military force cannot impose political
          outcomes on unwilling populations — was apparently not learned.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The True Cost Goes Beyond Dollars</h2>
        <p>
          War costs don&apos;t end when the fighting stops. The US will spend an estimated
          <strong> {fmtMoney(stats.veteranCareFutureCost)}</strong> on veteran care through 2050.
          {stats.veteranSuicidePerDay} veterans take their own lives every day — over 6,000 per year,
          more than 130,000 since 2001. 38 million people have been displaced by the War on Terror alone.
          Entire nations have been destabilized. Generations of children have grown up in war zones.
        </p>
        <p>
          The environmental costs are similarly staggering. The Pentagon is the single largest institutional
          consumer of fossil fuels in the world. Its carbon footprint exceeds that of <strong>{stats.pentagonCO2Rank}
          countries</strong>. Military bases across the US are contaminated with PFAS &ldquo;forever chemicals&rdquo;
          that have entered groundwater supplies. Depleted uranium from munitions has contaminated soil in Iraq
          and the Balkans. Burn pits in Afghanistan and Iraq exposed hundreds of thousands of troops to toxic
          fumes, leading to the PACT Act and billions in new healthcare costs.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Opportunity Cost: What Else $8 Trillion Could Have Done</h2>
        <p>
          Every dollar spent on war is a dollar not spent on something else. The $8 trillion War on Terror
          could have:
        </p>
        <ul>
          <li>Made all public universities free for <strong>100 years</strong> ($79B/year)</li>
          <li>Funded universal healthcare for <strong>26 years</strong> ($300B/year net new cost)</li>
          <li>Ended homelessness <strong>400 times over</strong> ($20B one-time)</li>
          <li>Provided every American household with <strong>$61,000</strong></li>
          <li>Rebuilt every bridge, road, water system, and school in America</li>
          <li>Funded a <strong>$1 trillion</strong> sovereign wealth fund that would generate $50B+ annually forever</li>
        </ul>
        <p>
          Instead, the US spent it on wars that destabilized the Middle East, created ISIS, killed hundreds
          of thousands of civilians, displaced 38 million people, and left the Taliban in charge of
          Afghanistan. The opportunity cost of empire is measured not just in what was lost, but in what was
          never built.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;War is the health of the State.&rdquo;
          <br />— Randolph Bourne, 1918
        </blockquote>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;It is well that war is so terrible, otherwise we should grow too fond of it.&rdquo;
          <br />— Robert E. Lee, 1862
        </blockquote>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;I spent 33 years in the Marines. Most of my time being a high-class muscle man for Big
          Business, for Wall Street and for the bankers. In short, I was a racketeer for capitalism.&rdquo;
          <br />— Major General Smedley Butler, USMC, 1935
        </blockquote>
      </div>

      {/* Most expensive conflicts from data */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-6 max-w-3xl mx-auto">Most Expensive Conflicts (from data)</h2>
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {featured.map((c: any) => (
          <Link key={c.id} href={`/conflicts/${c.id}`}
            className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">{c.name}</h3>
            <p className="text-red-800 font-bold text-xl">{fmtMoney(c.costInflationAdjusted)}</p>
            <p className="text-stone-500 text-sm">{fmt(c.usCasualties?.deaths)} US deaths · {c.startYear}–{c.endYear || 'Present'}</p>
          </Link>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Explore More</h2>
        <ul>
          <li><Link href="/war-clock">War Clock</Link> — Watch spending tick in real time</li>
          <li><Link href="/analysis/war-on-terror">The War on Terror</Link> — The $8 trillion war with no exit strategy</li>
          <li><Link href="/analysis/cost-per-life">Cost Per Life</Link> — How much each death costs</li>
          <li><Link href="/tools/tax-receipt">Tax Receipt</Link> — Your personal military tax bill</li>
          <li><Link href="/tools/cost-calculator">Cost Calculator</Link> — Your lifetime war cost</li>
          <li><Link href="/conflicts">All Conflicts</Link> — Browse all 36 major wars</li>
          <li><Link href="/opportunity-cost">Opportunity Cost</Link> — What war money could buy instead</li>
          <li><Link href="/veteran-suicide">Veteran Suicide</Link> — The human cost that never ends</li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
