import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Methodology — Data Sources, Methods & Limitations',
  description: 'How WarCosts compiles its data: cost estimates, casualty counting, inflation adjustment, spending data, and acknowledged limitations. Sources include Brown University, CRS, SIPRI, DMDC, USAID, DoD reports.',
  alternates: { canonical: 'https://www.warcosts.org/methodology' },
  keywords: ['warcosts methodology', 'military spending data methodology', 'war cost calculation', 'defense spending data sources'],
}

const inflationExamples = [
  { year: 1783, factor: '$1 → ~$35 in 2024', note: 'Revolutionary War era' },
  { year: 1865, factor: '$1 → ~$19 in 2024', note: 'Civil War era' },
  { year: 1918, factor: '$1 → ~$21 in 2024', note: 'World War I era' },
  { year: 1945, factor: '$1 → ~$17.30 in 2024', note: 'World War II era' },
  { year: 1953, factor: '$1 → ~$11.50 in 2024', note: 'Korean War era' },
  { year: 1970, factor: '$1 → ~$8.00 in 2024', note: 'Vietnam War era' },
  { year: 1991, factor: '$1 → ~$2.25 in 2024', note: 'Gulf War era' },
  { year: 2001, factor: '$1 → ~$1.75 in 2024', note: 'War on Terror era' },
  { year: 2010, factor: '$1 → ~$1.40 in 2024', note: 'Iraq surge era' },
]

const computedFields = [
  { field: 'costPerDay', formula: 'costInflationAdjusted ÷ durationDays', note: 'Daily burn rate in 2024 dollars' },
  { field: 'costPerUSdeath', formula: 'costInflationAdjusted ÷ usCasualties.deaths', note: 'Cost per American military death' },
  { field: 'costPerCivilianDeath', formula: 'costInflationAdjusted ÷ civilianDeaths', note: 'Cost per civilian death (where data exists)' },
  { field: 'civilianToMilitaryRatio', formula: 'civilianDeaths ÷ usCasualties.deaths', note: 'How many civilians die per US soldier' },
  { field: 'deathsPerYear', formula: 'usCasualties.deaths ÷ durationYears', note: 'Annual US death rate' },
  { field: 'durationYears', formula: 'endYear - startYear', note: 'Length of conflict in years' },
]

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Methodology' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-6">Methodology</h1>
      <p className="text-muted mb-8 max-w-3xl">Transparency about how we calculate these numbers is as important as the numbers themselves. Here&apos;s exactly how we compile, adjust, and present our data — including our limitations and where uncertainty exists.</p>

      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 mb-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;Facts are stubborn things; and whatever may be our wishes, our inclinations, or the dictates of our passions, they cannot alter the state of facts and evidence.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— John Adams, 1770</p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Cost Estimates</h2>
        <p>All costs are adjusted to <strong>2024 US dollars</strong> using the Bureau of Labor Statistics CPI-U inflation calculator. Original-year (nominal) costs are also provided where available.</p>

        <h3 className="font-[family-name:var(--font-heading)]">Post-9/11 Conflicts (Brown University Methodology)</h3>
        <p>Cost estimates for post-9/11 conflicts draw primarily from the <strong>Brown University Costs of War Project</strong>, which provides the most comprehensive accounting of War on Terror expenditures. Their methodology captures costs that Pentagon figures miss:</p>
        <ul>
          <li><strong>Direct war appropriations:</strong> OCO funding, supplemental appropriations, and war-specific budget lines</li>
          <li><strong>DOD base budget increases:</strong> Permanent spending growth justified by but not limited to the wars</li>
          <li><strong>State Department and USAID:</strong> Diplomatic, reconstruction, and stabilization costs</li>
          <li><strong>Veterans Affairs:</strong> Current medical and disability costs, plus projected costs through 2050</li>
          <li><strong>Homeland Security:</strong> DHS spending attributable to 9/11 and the War on Terror</li>
          <li><strong>Interest on war borrowing:</strong> Because wars were debt-financed, interest compounds over decades</li>
        </ul>
        <p>
          This methodology reveals that <strong>direct fighting costs are only ~36%</strong> of total war costs.
          The rest — veteran care, interest, DHS, base budget growth — represents the hidden iceberg. This is
          why the Brown figure ($8T+) for the War on Terror is much higher than Pentagon estimates (~$2T).
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">Historical Conflicts (Pre-2001)</h3>
        <p>For historical conflicts, we use Congressional Research Service reports, specifically:</p>
        <ul>
          <li><strong>RL33110:</strong> &ldquo;Costs of Major U.S. Wars&rdquo; — CRS inflation-adjusted cost estimates</li>
          <li><strong>OMB Historical Tables:</strong> Defense spending by year back to 1940</li>
          <li><strong>Academic sources:</strong> For pre-1940 conflicts, we use peer-reviewed historical research</li>
        </ul>
        <p>
          Historical cost estimates involve greater uncertainty, especially for conflicts before reliable
          economic data existed (pre-1860). We note this uncertainty in our data and use ranges where appropriate.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">How Inflation Adjustment Works</h3>
        <p>We use the <strong>CPI-U (Consumer Price Index for All Urban Consumers)</strong> published by the Bureau of Labor Statistics. For each conflict:</p>
        <ol>
          <li>Identify the year(s) of spending (or use midpoint year for multi-year conflicts)</li>
          <li>Apply the CPI-U ratio to convert to 2024 dollars</li>
          <li>For long conflicts spanning multiple years, we adjust each year&apos;s spending separately where data permits</li>
        </ol>
      </div>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
          <thead className="bg-stone-100">
            <tr>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Year</th>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Conversion Factor</th>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Context</th>
            </tr>
          </thead>
          <tbody>
            {inflationExamples.map(e => (
              <tr key={e.year} className="border-t border-stone-200">
                <td className="p-3 font-medium">{e.year}</td>
                <td className="p-3 text-red-800 font-semibold">{e.factor}</td>
                <td className="p-3 text-stone-500">{e.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Casualty Data</h2>
        <p>US military casualty figures use official <strong>Department of Defense</strong> records via the Defense Manpower Data Center (DMDC) and Congressional Research Service reports (RL32492).</p>

        <h3 className="font-[family-name:var(--font-heading)]">Casualty Categories</h3>
        <ul>
          <li><strong>Battle deaths:</strong> Killed in direct combat. Most precisely documented. Source: DMDC.</li>
          <li><strong>Total US military deaths:</strong> Includes battle deaths, disease, accidents, and other causes during the conflict period. For many historical wars, disease killed more soldiers than combat (e.g., Civil War: ~2/3 of deaths were from disease).</li>
          <li><strong>Wounded:</strong> Official DoD figures where available. Significant undercounting is likely for TBI (only diagnosed since ~2000) and PTSD (which was not recognized until 1980).</li>
          <li><strong>Civilian deaths (direct):</strong> Killed by violence — bombing, gunfire, crossfire. Sources vary by conflict: Iraq Body Count, Airwars, UN reports, Brown Costs of War.</li>
          <li><strong>Civilian deaths (indirect):</strong> Died from war-related disease, displacement, infrastructure destruction, loss of healthcare access. These typically dwarf direct deaths but are estimated with wide uncertainty ranges.</li>
          <li><strong>Enemy combatant deaths:</strong> Rarely well-documented. Military &ldquo;body counts&rdquo; are notoriously unreliable (Vietnam taught this lesson). We include where credible estimates exist.</li>
        </ul>

        <h3 className="font-[family-name:var(--font-heading)]">Civilian Casualty Methodology</h3>
        <p>
          Civilian casualty estimates are inherently uncertain and typically represent <strong>conservative
          lower bounds</strong>. We use the following source hierarchy for civilian deaths:
        </p>
        <ol>
          <li><strong>Brown University Costs of War Project</strong> — Most comprehensive for post-9/11 conflicts</li>
          <li><strong>Iraq Body Count</strong> — Gold standard for documented civilian deaths in Iraq</li>
          <li><strong>Airwars</strong> — Best source for civilian harm from airstrikes globally</li>
          <li><strong>UN reports</strong> — For specific conflicts where UN monitors are present</li>
          <li><strong>Bureau of Investigative Journalism</strong> — For drone strike casualties specifically</li>
        </ol>
        <p>
          When sources provide ranges, we generally use the <strong>midpoint or conservative estimate</strong>.
          We explicitly note when figures are estimates vs. documented counts.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Military Spending Data</h2>
        <p>Annual military spending data comes from multiple sources:</p>
        <ul>
          <li><strong>SIPRI Military Expenditure Database:</strong> Global spending data since 1949, using constant-dollar methodology</li>
          <li><strong>OMB Historical Tables:</strong> US federal defense spending back to 1940</li>
          <li><strong>DoD Budget Justification Documents:</strong> Detailed annual budget requests and final appropriations</li>
          <li><strong>CRS Reports:</strong> Analysis of specific spending categories and trends</li>
        </ul>
        <p>
          Note: &ldquo;Military spending&rdquo; can be measured different ways. The DoD &ldquo;base budget&rdquo;
          ($886B for FY2024) doesn&apos;t include nuclear weapons (DOE), veterans&apos; care (VA), homeland
          security, intelligence community, or interest on war debt. We distinguish between the DOD budget and
          the &ldquo;true national security budget&rdquo; ($1.4T+) throughout the site.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Overseas Presence Data</h2>
        <p>Military base counts and troop deployment figures come from:</p>
        <ul>
          <li><strong>DoD Base Structure Report:</strong> Official annual inventory of installations</li>
          <li><strong>DMDC Deployment Data:</strong> Troop numbers by country</li>
          <li><strong>David Vine&apos;s research:</strong> (American University, author of <em>Base Nation</em>) — broader definition including &ldquo;lily pad&rdquo; bases</li>
        </ul>
        <p>
          Exact base counts vary significantly by definition. The Pentagon&apos;s official count (~500) uses a narrow
          definition. Vine&apos;s count (~750-800) includes smaller installations, cooperative security locations,
          and forward operating sites. We use the broader count with explanation.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Foreign Aid Data</h2>
        <p>Foreign aid data from <strong>USAID Foreign Aid Explorer</strong> and CRS reports. We distinguish between military aid (Foreign Military Financing, weapons transfers, IMET) and economic/humanitarian aid.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Computed Fields</h2>
        <p>For each conflict, we calculate derived metrics to enable comparison:</p>
      </div>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
          <thead className="bg-stone-100">
            <tr>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Field</th>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Formula</th>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Note</th>
            </tr>
          </thead>
          <tbody>
            {computedFields.map(f => (
              <tr key={f.field} className="border-t border-stone-200">
                <td className="p-3 font-mono text-sm">{f.field}</td>
                <td className="p-3 text-stone-600 text-sm">{f.formula}</td>
                <td className="p-3 text-stone-500 text-xs">{f.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Source Hierarchy</h2>
        <p>When sources conflict, we prioritize in this order:</p>
        <ol>
          <li><strong>Official government records</strong> (DoD, CRS, OMB) — Most authoritative for US military data</li>
          <li><strong>Peer-reviewed academic research</strong> (Brown Costs of War, SIPRI) — Most comprehensive analysis</li>
          <li><strong>Established investigative organizations</strong> (Iraq Body Count, Airwars, TBIJ) — Best for civilian harm data</li>
          <li><strong>Investigative journalism</strong> (major outlets with documented sourcing) — Supplementary only</li>
        </ol>

        <h2 className="font-[family-name:var(--font-heading)]">Limitations & Caveats</h2>
        <p>We acknowledge significant limitations in our data:</p>
        <ul>
          <li><strong>Covert operation costs</strong> are often classified and may be significantly understated. The CIA&apos;s budget is not publicly disclosed. Covert wars (e.g., CIA operations in Laos, Syria, Libya) are difficult to cost.</li>
          <li><strong>Civilian casualty counts</strong> are conservative estimates — true numbers are likely higher. Many deaths go unrecorded, especially in remote areas, conflict zones where journalists cannot operate, and in the aftermath of displacement.</li>
          <li><strong>Long-term costs</strong> (veteran care over decades, interest on war debt, environmental remediation) are not fully captured and may add trillions to final tallies. These costs are inherently projections.</li>
          <li><strong>Historical cost conversions</strong> involve significant uncertainty, especially for conflicts before reliable economic data existed (pre-1860). CPI-U is imperfect for very long time horizons.</li>
          <li><strong>Congressional authorization classifications</strong> may be debated. We classify based on whether a formal declaration or explicit AUMF was passed, but reasonable people may disagree on what constitutes &ldquo;authorization.&rdquo;</li>
          <li><strong>&ldquo;Indirect&rdquo; deaths</strong> from war-related causes (disease, displacement, starvation) have wide uncertainty ranges. The Brown estimate of 3.8M indirect deaths from the War on Terror is a methodological estimate, not a count.</li>
          <li><strong>Ongoing conflicts</strong> have incomplete cost and casualty data that will change as they continue.</li>
          <li><strong>Opportunity cost calculations</strong> assume fungibility of spending that may not hold in practice. Money saved from defense would not automatically flow to alternatives.</li>
          <li><strong>China&apos;s military spending</strong> is likely 1.5–2× the officially reported figure. Our global comparison tables use SIPRI estimates, which attempt to capture actual spending.</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">A Note on Bias</h2>
        <p>
          All data collection involves choices — what to include, what to exclude, how to categorize. We
          approach this work from a perspective that values transparency, constitutional governance, and
          honest accounting of the costs of war. We strive to use conservative estimates and acknowledge
          uncertainty.
        </p>
        <p>
          We are not neutral on whether citizens should have access to this data — we believe they should.
          We are not neutral on whether the Pentagon should pass an audit — we believe it should. But we
          are committed to accuracy in the data itself.
        </p>
        <p>
          If you believe any figure is incorrect, we welcome corrections with sourcing. Accuracy matters
          more than narrative.
        </p>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/sources" className="text-red-800 hover:underline">→ Sources — Complete list of data sources</Link></li>
          <li><Link href="/downloads" className="text-red-800 hover:underline">→ Downloads — Raw data files</Link></li>
          <li><Link href="/about" className="text-red-800 hover:underline">→ About WarCosts — Mission and perspective</Link></li>
          <li><Link href="/faq" className="text-red-800 hover:underline">→ FAQ — Frequently asked questions</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
