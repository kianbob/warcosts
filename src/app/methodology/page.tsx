import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Methodology — Data Sources, Methods & Limitations | WarCosts',
  description: 'How WarCosts compiles its data: sources include Brown University Costs of War, CRS, SIPRI, DMDC, USAID, and DoD reports.',
}

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Methodology' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-6">Methodology</h1>
      <p className="text-muted mb-8">Transparency about how we calculate these numbers is as important as the numbers themselves. Here&apos;s exactly how we compile, adjust, and present our data.</p>

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;Facts are stubborn things; and whatever may be our wishes, our inclinations, or the dictates of our passions, they cannot alter the state of facts and evidence.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— John Adams, 1770</p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Cost Estimates</h2>
        <p>All costs are adjusted to <strong>2023 US dollars</strong> using the Bureau of Labor Statistics CPI-U inflation calculator. Original-year (nominal) costs are also provided where available.</p>
        <p>Cost estimates for recent conflicts draw primarily from the <strong>Brown University Costs of War Project</strong>, which provides the most comprehensive accounting of War on Terror expenditures. Their methodology includes:</p>
        <ul>
          <li>Direct war appropriations (Overseas Contingency Operations funding)</li>
          <li>Department of Defense base budget increases attributable to the wars</li>
          <li>State Department and USAID war-related spending</li>
          <li>Veterans Affairs medical and disability costs</li>
          <li>Homeland Security spending attributable to 9/11</li>
          <li>Interest on war-related borrowing</li>
        </ul>
        <p>For historical conflicts (pre-2001), we use Congressional Research Service (CRS) reports, specifically RL33110 (&ldquo;Costs of Major U.S. Wars&rdquo;), supplemented with academic research and OMB historical tables.</p>

        <h3 className="font-[family-name:var(--font-heading)]">How Inflation Adjustment Works</h3>
        <p>We use the <strong>CPI-U (Consumer Price Index for All Urban Consumers)</strong> published by the Bureau of Labor Statistics. For each conflict, we take the midpoint year of the war (or the year of peak spending) and adjust all costs to 2023 dollars using the CPI-U ratio. For example:</p>
        <ul>
          <li>$1 in 1945 ≈ $17.30 in 2023</li>
          <li>$1 in 1970 ≈ $8.00 in 2023</li>
          <li>$1 in 2001 ≈ $1.75 in 2023</li>
        </ul>
        <p>This allows meaningful comparison of the Revolutionary War ($2.4B in 2023 dollars) to the War on Terror ($8T).</p>

        <h2 className="font-[family-name:var(--font-heading)]">Casualty Data</h2>
        <p>US military casualty figures use official <strong>Department of Defense</strong> records via the Defense Manpower Data Center (DMDC) and Congressional Research Service (CRS) reports. For earlier conflicts, we use CRS publication RL32492 (&ldquo;American War and Military Operations Casualties&rdquo;).</p>

        <h3 className="font-[family-name:var(--font-heading)]">Casualty Counting Methodology</h3>
        <p>We distinguish between several categories:</p>
        <ul>
          <li><strong>Battle deaths:</strong> Killed in direct combat. Most precisely documented.</li>
          <li><strong>Total US military deaths:</strong> Includes battle deaths, disease, accidents, and other causes during the conflict period. For many historical wars, disease killed more soldiers than combat.</li>
          <li><strong>Wounded:</strong> Official DoD figures where available. Significant undercounting is likely for TBI and PTSD.</li>
          <li><strong>Civilian deaths (direct):</strong> Killed by violence — bombing, gunfire, crossfire. Sources vary by conflict.</li>
          <li><strong>Civilian deaths (indirect):</strong> Died from war-related disease, displacement, infrastructure destruction. These are estimated and inherently uncertain but typically dwarf direct deaths.</li>
        </ul>
        <p>Civilian casualty estimates are inherently uncertain and typically represent <strong>conservative ranges</strong>. Sources include the Brown Costs of War Project, Iraq Body Count, UN reports, and Airwars. When ranges are provided, we use the midpoint or conservative estimate.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Military Spending</h2>
        <p>Annual military spending data comes from <strong>SIPRI</strong> (Stockholm International Peace Research Institute) Military Expenditure Database, which tracks defense budgets globally since 1949. Budget figures are supplemented with OMB historical tables for earlier years and DoD budget justification documents for recent years.</p>
        <p>Note: &ldquo;military spending&rdquo; can be measured different ways. The DoD &ldquo;base budget&rdquo; ($886B for FY2024) doesn&apos;t include nuclear weapons (Department of Energy), veterans&apos; care (VA), homeland security, or interest on war debt. The true &ldquo;national security&rdquo; budget exceeds $1.4 trillion.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Foreign Aid</h2>
        <p>Foreign aid data is drawn from the <strong>USAID Foreign Aid Explorer</strong> and Congressional Research Service reports. Totals include both military and economic assistance. We distinguish between military aid (Foreign Military Financing, weapons transfers) and economic/humanitarian aid where data permits.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Overseas Presence</h2>
        <p>Military base counts and troop deployment figures come from the <strong>Department of Defense Base Structure Report</strong> and DMDC deployment data. David Vine&apos;s research (American University, author of <em>Base Nation</em>) provides additional context on overseas basing. Exact counts vary by how &ldquo;base&rdquo; is defined — we use the broad definition including installations, sites, and facilities.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Source Hierarchy</h2>
        <p>When sources conflict, we prioritize in this order:</p>
        <ol>
          <li><strong>Official government records</strong> (DoD, CRS, OMB) — most authoritative for US military data</li>
          <li><strong>Peer-reviewed academic research</strong> (Brown Costs of War, SIPRI) — most comprehensive analysis</li>
          <li><strong>Established investigative organizations</strong> (Iraq Body Count, Airwars, Bureau of Investigative Journalism)</li>
          <li><strong>Investigative journalism</strong> (major outlets with documented sourcing)</li>
        </ol>

        <h2 className="font-[family-name:var(--font-heading)]">Limitations & Caveats</h2>
        <ul>
          <li><strong>Covert operation costs</strong> are often classified and may be significantly understated. The CIA&apos;s budget is not publicly disclosed.</li>
          <li><strong>Civilian casualty counts</strong> are conservative estimates — true numbers are likely higher. Many deaths go unrecorded, especially in remote areas.</li>
          <li><strong>Long-term costs</strong> (veteran care over decades, interest on war debt, environmental remediation) are not fully captured and may add trillions to final tallies.</li>
          <li><strong>Historical cost conversions</strong> involve significant uncertainty, especially for conflicts before reliable economic data existed.</li>
          <li><strong>Congressional authorization classifications</strong> may be debated by constitutional scholars. We classify based on whether a formal declaration of war or authorization for use of military force was passed.</li>
          <li><strong>&ldquo;Indirect&rdquo; deaths</strong> from war-related causes (disease, displacement, starvation) are estimates with wide uncertainty ranges.</li>
          <li><strong>Ongoing conflicts</strong> have incomplete cost and casualty data that will change as they continue.</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">A Note on Bias</h2>
        <p>All data collection involves choices — what to include, what to exclude, how to categorize. We strive for accuracy and transparency about our methods. If you believe any figure is incorrect, we welcome corrections with sourcing. See our <Link href="/about" className="text-primary hover:underline">About page</Link> for contact information.</p>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/downloads" className="text-red-800 hover:underline">→ Downloads — raw data files</Link></li>
          <li><Link href="/about" className="text-red-800 hover:underline">→ About WarCosts</Link></li>
          <li><Link href="/faq" className="text-red-800 hover:underline">→ FAQ</Link></li>
        </ul>
      </div>
    </div>
  )
}
