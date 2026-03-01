import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About WarCosts',
  description: 'WarCosts is a free, data-driven platform documenting every US war, military intervention, and covert operation. A TheDataProject.ai platform.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'About' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-6">About WarCosts</h1>

      <div className="prose prose-stone max-w-none">
        <p className="text-lg">WarCosts is a free, open, data-driven platform documenting every American war, military intervention, and covert operation — the cost in dollars, lives, and liberty.</p>

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
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">No Paywall, No Ads, No Agenda</h2>
        <p>WarCosts is completely free. No login required. No ads. No paywall. We have no defense industry sponsors, no political party affiliation, and no agenda beyond transparency.</p>

        <h2 className="font-[family-name:var(--font-heading)]">A TheDataProject.ai Platform</h2>
        <p>WarCosts is part of <a href="https://thedataproject.ai" className="text-primary hover:underline">TheDataProject.ai</a>, a portfolio of data-driven transparency platforms covering healthcare, government spending, immigration, agriculture subsidies, and more.</p>
      </div>
    </div>
  )
}
