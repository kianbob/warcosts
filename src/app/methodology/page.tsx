import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Methodology — Data Sources & Methods',
  description: 'How WarCosts compiles its data: sources include Brown University Costs of War, CRS, SIPRI, DMDC, USAID, and DoD reports.',
}

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Methodology' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-6">Methodology</h1>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Cost Estimates</h2>
        <p>All costs are adjusted to 2023 dollars using the Bureau of Labor Statistics CPI inflation calculator. Original-year costs are also provided where available. Cost estimates for recent conflicts draw primarily from the Brown University Costs of War Project, which provides the most comprehensive accounting of War on Terror expenditures.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Casualty Data</h2>
        <p>US military casualty figures use official Department of Defense records via the Defense Manpower Data Center (DMDC) and Congressional Research Service (CRS) reports. For earlier conflicts, we use CRS publication RL32492 (&ldquo;American War and Military Operations Casualties&rdquo;).</p>
        <p>Civilian casualty estimates are inherently uncertain and typically represent conservative ranges. Sources include the Brown Costs of War Project, Iraq Body Count, UN reports, and Airwars.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Military Spending</h2>
        <p>Annual military spending data comes from SIPRI (Stockholm International Peace Research Institute) Military Expenditure Database, which tracks defense budgets globally since 1949. Budget figures are supplemented with OMB historical tables.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Foreign Aid</h2>
        <p>Foreign aid data is drawn from the USAID Foreign Aid Explorer and Congressional Research Service reports. Totals include both military and economic assistance.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Overseas Presence</h2>
        <p>Military base counts and troop deployment figures come from the Department of Defense Base Structure Report and DMDC deployment data. David Vine&apos;s research (American University) provides additional context on overseas basing.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Limitations</h2>
        <ul>
          <li>Covert operation costs are often classified and may be significantly understated</li>
          <li>Civilian casualty counts are conservative estimates — true numbers are likely higher</li>
          <li>Long-term costs (veteran care, interest on war debt) are not fully captured</li>
          <li>Some historical cost conversions involve significant uncertainty</li>
          <li>Congressional authorization classifications may be debated by constitutional scholars</li>
        </ul>
      </div>
    </div>
  )
}
