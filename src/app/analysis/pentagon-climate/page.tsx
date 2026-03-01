import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The Pentagon\'s Carbon Bootprint — 55th Largest Emitter | WarCosts',
  description: 'If the US military were a country, it would be the 55th largest carbon emitter on Earth. War\'s hidden environmental cost.',
}

export default function PentagonClimatePage() {
  const stats = loadData('stats.json')
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Pentagon & Climate' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">The Pentagon&apos;s Carbon Bootprint</h1>
      <p className="text-stone-500 mb-2">If the US military were a country, it would be the world&apos;s 55th largest carbon emitter.</p>
      <ShareButtons title="The Pentagon's Carbon Bootprint" />

      <div className="prose text-stone-600 mt-8">
        <div className="not-prose bg-red-50 rounded-xl p-6 border border-red-200 text-center my-8">
          <p className="text-5xl font-bold text-red-800 font-[family-name:var(--font-heading)]">#{stats.pentagonCO2Rank}</p>
          <p className="text-stone-600">If the Pentagon were a country, it would be the {stats.pentagonCO2Rank}th largest CO₂ emitter</p>
          <p className="text-stone-400 text-sm">Larger than Portugal, Sweden, or Denmark</p>
        </div>

        <p className="text-lg">
          The US Department of Defense is the world&apos;s <strong>single largest institutional consumer
          of fossil fuels</strong> — and has been exempted from climate agreements since Kyoto in 1997.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Numbers</h2>
        <ul>
          <li><strong>56 million metric tons</strong> of CO₂ equivalent per year</li>
          <li><strong>4.6 billion gallons</strong> of fuel consumed annually</li>
          <li>A single B-52 bomber burns <strong>3,334 gallons per hour</strong></li>
          <li>An aircraft carrier group burns <strong>5,600 gallons per hour</strong></li>
          <li>The F-35 burns <strong>1,340 gallons per hour</strong></li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">War Is Environmental Destruction</h2>
        <p>
          Beyond fuel consumption, war directly destroys ecosystems. Agent Orange defoliated 5 million
          acres of Vietnam. Oil well fires in Kuwait burned for 10 months. Depleted uranium munitions
          contaminate soil for billions of years. Military burn pits poisoned the air over Iraq and Afghanistan.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Climate Exemption</h2>
        <p>
          At US insistence, military emissions were exempted from the Kyoto Protocol (1997). While the
          Paris Agreement (2015) technically includes military emissions, reporting is voluntary —
          and the Pentagon significantly underreports.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Irony</h2>
        <p>
          The Pentagon itself identifies climate change as a <strong>&ldquo;threat multiplier&rdquo;</strong> that
          will increase instability and conflict. Yet it remains one of the largest contributors
          to the problem. We are burning the planet to fuel the wars caused by a burning planet.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;You cannot simultaneously prevent and prepare for war.&rdquo;
          <br />— Albert Einstein
        </blockquote>
      </div>

      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related</h3>
        <ul className="space-y-2">
          <li><Link href="/defense-budget" className="text-red-800 hover:underline">→ The Defense Budget</Link></li>
          <li><Link href="/analysis/empire-of-bases" className="text-red-800 hover:underline">→ Empire of Bases — 750 bases in 80 countries</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
