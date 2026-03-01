import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About WarCosts — Free, Open, Data-Driven Military Transparency',
  description: 'WarCosts is a free, data-driven platform documenting every US war, military intervention, and covert operation. A TheDataProject.ai platform.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'About' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-6">About WarCosts</h1>

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;The first casualty of war is truth.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Attributed to Hiram Johnson, US Senator, 1917</p>
      </div>

      <div className="prose prose-stone max-w-none">
        <p className="text-lg">WarCosts is a free, open, data-driven platform documenting every American war, military intervention, and covert operation — the cost in dollars, lives, and liberty. We believe the public deserves to see the full picture, not just the version that fits a political narrative.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Mission</h2>
        <p>We believe citizens have a right to know the full cost of their government&apos;s military actions. Not just the budget line items, but the human cost: the lives lost, the families destroyed, the countries destabilized, and the opportunities forgone.</p>
        <p>This is not a partisan project. It&apos;s a transparency project. The data speaks for itself.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Perspective</h2>
        <p>WarCosts approaches military policy from a perspective of constitutional governance and individual liberty. We believe:</p>
        <ul>
          <li>The power to wage war belongs to Congress, as the Constitution requires</li>
          <li>Citizens deserve full transparency about military spending and operations</li>
          <li>Every dollar spent on war is a dollar not spent on schools, infrastructure, or tax relief</li>
          <li>The human cost of war — on all sides — should be counted honestly</li>
          <li>The military-industrial complex is real and its influence should be documented</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">How to Use This Site</h2>
        <p>WarCosts is designed for researchers, journalists, students, educators, policymakers, and anyone who wants to understand the true cost of American military power. Here&apos;s how to navigate:</p>
        <ul>
          <li><strong><Link href="/dashboard" className="text-primary hover:underline">Dashboard</Link></strong> — Start here for a high-level overview of spending, casualties, and global presence</li>
          <li><strong><Link href="/conflicts" className="text-primary hover:underline">Conflicts</Link></strong> — Browse every war and intervention with full cost and casualty data</li>
          <li><strong><Link href="/timeline" className="text-primary hover:underline">Timeline</Link></strong> — See all conflicts chronologically, grouped by era</li>
          <li><strong><Link href="/analysis" className="text-primary hover:underline">Analysis</Link></strong> — Deep dives into the military-industrial complex, blowback, congressional authority, and more</li>
          <li><strong><Link href="/tools/tax-receipt" className="text-primary hover:underline">Tools</Link></strong> — Interactive calculators for your personal war tax receipt and more</li>
          <li><strong><Link href="/downloads" className="text-primary hover:underline">Downloads</Link></strong> — Raw data files for your own research</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">No Paywall, No Ads, No Agenda</h2>
        <p>WarCosts is completely free. No login required. No ads. No paywall. We have no defense industry sponsors, no political party affiliation, and no agenda beyond transparency.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Data Sources & Methodology</h2>
        <p>Our data comes from official government sources, peer-reviewed academic research, and established investigative organizations. Primary sources include:</p>
        <ul>
          <li>Brown University Costs of War Project</li>
          <li>Congressional Research Service (CRS)</li>
          <li>Stockholm International Peace Research Institute (SIPRI)</li>
          <li>Defense Manpower Data Center (DMDC)</li>
          <li>USAID Foreign Aid Explorer</li>
          <li>DoD Base Structure Reports</li>
        </ul>
        <p>For full details, see our <Link href="/methodology" className="text-primary hover:underline">Methodology page</Link>.</p>

        <h2 className="font-[family-name:var(--font-heading)]">A TheDataProject.ai Platform</h2>
        <p>WarCosts is part of <a href="https://thedataproject.ai" className="text-primary hover:underline">TheDataProject.ai</a>, a portfolio of data-driven transparency platforms. Sister sites include:</p>
        <ul>
          <li><a href="https://thedataproject.ai" className="text-primary hover:underline">TheDataProject.ai</a> — The parent platform</li>
          <li>Healthcare transparency (coming soon)</li>
          <li>Government spending (coming soon)</li>
          <li>Immigration data (coming soon)</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Contact & Contribute</h2>
        <p>Found an error? Have a data source we should include? Want to contribute analysis? We welcome corrections, suggestions, and contributions from researchers, veterans, journalists, and concerned citizens.</p>
        <p>All data is available for download on our <Link href="/downloads" className="text-primary hover:underline">Downloads page</Link>. We ask for attribution if used in published work.</p>
      </div>
    </div>
  )
}
