import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cost of War — $8 Trillion Since 9/11, $11.3T Since 1776 | WarCosts',
  description: 'The total cost of US wars: $8 trillion since 9/11, $11.3 trillion since 1776. $70,000 per taxpayer. $100,000 per household. Every conflict, every dollar, every life.',
  keywords: ['cost of war', 'how much do wars cost', 'us war spending', 'war costs', 'cost of iraq war', 'cost of afghanistan war'],
  openGraph: {
    title: 'The Cost of War — $11.3 Trillion and Counting',
    description: '$70,000 per taxpayer since 9/11 alone.',
    url: 'https://warcosts.org/cost-of-war',
    type: 'article',
  },
}

const warCosts = [
  { name: 'Revolutionary War', years: '1775–1783', cost: 2.4e9, deaths: 25000, note: '2024 dollars' },
  { name: 'War of 1812', years: '1812–1815', cost: 1.8e9, deaths: 20000, note: '2024 dollars' },
  { name: 'Mexican-American War', years: '1846–1848', cost: 3.1e9, deaths: 13283, note: '2024 dollars' },
  { name: 'Civil War', years: '1861–1865', cost: 80e9, deaths: 750000, note: 'Both sides; 2024 dollars' },
  { name: 'World War I', years: '1917–1918', cost: 334e9, deaths: 116516, note: '2024 dollars' },
  { name: 'World War II', years: '1941–1945', cost: 4.7e12, deaths: 405399, note: '2024 dollars' },
  { name: 'Korean War', years: '1950–1953', cost: 341e9, deaths: 36574, note: '2024 dollars' },
  { name: 'Vietnam War', years: '1955–1975', cost: 843e9, deaths: 58220, note: '2024 dollars' },
  { name: 'Gulf War', years: '1990–1991', cost: 116e9, deaths: 383, note: '2024 dollars' },
  { name: 'Iraq War', years: '2003–2011', cost: 2.4e12, deaths: 4599, note: 'Including long-term costs' },
  { name: 'Afghanistan War', years: '2001–2021', cost: 2.3e12, deaths: 2461, note: 'Including long-term costs' },
  { name: 'War on Terror (total)', years: '2001–present', cost: 8e12, deaths: 7074, note: 'All post-9/11 operations' },
]

const hiddenCosts = [
  { category: 'Veteran Care (through 2050)', amount: '$2.2–2.5 trillion', desc: 'Healthcare, disability, rehabilitation for millions of veterans' },
  { category: 'Interest on War Debt', amount: '$1.1+ trillion', desc: 'Wars were financed by borrowing; interest payments compound indefinitely' },
  { category: 'Homeland Security (since 2001)', amount: '$1.2+ trillion', desc: 'Created as a direct result of 9/11 and the War on Terror' },
  { category: 'DOD Base Budget Increases', amount: '$1+ trillion', desc: 'Permanent baseline increases justified by the War on Terror' },
  { category: 'State Department War-Related', amount: '$200+ billion', desc: 'Diplomatic, reconstruction, and stabilization costs' },
  { category: 'Social Costs', amount: 'Incalculable', desc: 'Veteran suicide, homelessness, family disruption, lost productivity' },
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
    description: 'Every dollar spent on every US war, from the Revolution to today.',
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
        even more in interest over the coming decades.
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

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The $8 trillion cost of the War on Terror is <strong>more than the entire GDP of Japan</strong> ($4.2T)
            and Germany ($4.1T) combined. If you stacked $8 trillion in $100 bills, the pile would reach
            <strong> 5,400 miles high</strong> — more than 20 times the altitude of the International Space Station.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The Brown University Methodology</h2>
        <p>
          The Costs of War Project at Brown University&apos;s Watson Institute is the gold standard for war cost
          accounting. Unlike Pentagon estimates (which exclude most long-term costs), the Brown methodology captures:
        </p>
        <ul>
          <li><strong>Direct budgetary costs:</strong> Appropriations for war operations</li>
          <li><strong>Future obligations:</strong> Veteran care costs that will accrue for decades</li>
          <li><strong>Interest costs:</strong> Because wars are financed through borrowing, not taxation</li>
          <li><strong>Base budget increases:</strong> Permanent DOD spending growth justified by the wars</li>
          <li><strong>Related spending:</strong> Homeland Security, State Department programs created by 9/11</li>
        </ul>
        <p>
          The Costs of War methodology reveals that <strong>the direct fighting costs are only about 36%</strong> of
          total war costs. The rest — veteran care, interest, homeland security, base budget growth — represent
          the hidden iceberg beneath the surface that politicians rarely discuss.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Cost Per Taxpayer, Per Household</h2>
        <p>
          There are approximately 113 million US taxpayers and 131 million households. The $8 trillion post-9/11
          war cost translates to:
        </p>
        <ul>
          <li><strong>$70,796 per taxpayer</strong> — money borrowed in your name, with interest accruing</li>
          <li><strong>$61,068 per household</strong> — and rising as interest compounds</li>
          <li>Including projected future veteran care costs: <strong>$100,000+ per household</strong></li>
        </ul>
        <p>
          These wars were not funded by taxes — they were funded by debt. The 2001 and 2003 tax cuts actually
          <em>reduced</em> federal revenue during wartime, a historically unprecedented decision. The result:
          every dollar spent on the War on Terror was borrowed, and American taxpayers will be paying interest
          on that borrowing for generations.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The United States has fought its post-9/11 wars almost entirely on borrowed money, with the
          costs shifted to future generations. This is the first time in American history that taxes were
          cut during wartime.&rdquo;
          <br />— Neta Crawford, Costs of War Project, Brown University
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">War Costs Across American History</h2>
        <p>
          All figures are inflation-adjusted to 2024 dollars for comparison:
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
            </tr>
          </thead>
          <tbody>
            {warCosts.map(w => (
              <tr key={w.name} className="border-t border-stone-200">
                <td className="p-3 font-medium">{w.name}</td>
                <td className="p-3 text-stone-500">{w.years}</td>
                <td className="p-3 text-red-800 font-semibold text-right">{fmtMoney(w.cost)}</td>
                <td className="p-3 text-stone-600 text-right">{fmt(w.deaths)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <p>
          The trend is unmistakable: wars are becoming more expensive in absolute terms while killing fewer
          Americans — because the killing is increasingly done to others. The Iraq War cost <strong>$2.4
          trillion</strong> and killed 4,599 American soldiers. It also killed an estimated
          <strong> 200,000–300,000 Iraqi civilians</strong>. The cost per American soldier killed:
          approximately $522 million. The cost per Iraqi civilian killed: roughly $10,000.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Hidden Costs</h2>
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
          over time. The Costs of War Project estimates that interest payments on war debt will total
          <strong> $1.1 trillion through 2023</strong> — and will continue growing for decades. By 2050,
          cumulative interest could exceed <strong>$3 trillion</strong>.
        </p>
        <p>
          To understand the compounding effect: for every $1 spent on the war itself, American taxpayers
          will eventually pay approximately $1.40 once interest is included. The wars are still being
          fought — on the balance sheet — long after the troops come home.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            During World War II, the US raised taxes dramatically and sold war bonds to fund the conflict. The
            top marginal tax rate reached <strong>94%</strong>. During the War on Terror, taxes were <em>cut</em>.
            The Bush-era tax cuts (2001, 2003) reduced federal revenue by an estimated <strong>$8 trillion</strong> over
            20 years — almost exactly the cost of the wars they were supposed to fund.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The True Cost Goes Beyond Dollars</h2>
        <p>
          War costs don&apos;t end when the fighting stops. The US will spend an estimated
          <strong> {fmtMoney(stats.veteranCareFutureCost)}</strong> on veteran care through 2050.
          {stats.veteranSuicidePerDay} veterans take their own lives every day — over 6,000 per year.
          38 million people have been displaced by the War on Terror alone. Entire nations have been
          destabilized. Generations of children have grown up in war zones. And the ripple effects —
          refugee crises, political radicalization, destroyed infrastructure — will persist for decades.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;War is the health of the State.&rdquo;
          <br />— Randolph Bourne, 1918
        </blockquote>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;It is well that war is so terrible, otherwise we should grow too fond of it.&rdquo;
          <br />— Robert E. Lee, 1862
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
            <p className="text-stone-500 text-sm">{fmt(c.usCasualties?.deaths)} US deaths · {c.years}</p>
          </Link>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Explore More</h2>
        <ul>
          <li><Link href="/war-clock">War Clock</Link> — Watch spending tick in real time</li>
          <li><Link href="/analysis/war-on-terror">The War on Terror</Link> — The $8 trillion war with no exit strategy</li>
          <li><Link href="/cost-per-life">Cost Per Life</Link> — How much each death costs</li>
          <li><Link href="/tools/tax-receipt">Tax Receipt</Link> — Your personal military tax bill</li>
          <li><Link href="/conflicts">All Conflicts</Link> — Browse all 36 major wars</li>
          <li><Link href="/opportunity-cost">Opportunity Cost</Link> — What war money could buy instead</li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
