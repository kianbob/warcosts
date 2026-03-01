import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt, fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Empire of Bases — 750 Military Installations in 80 Countries',
  description: 'The US maintains 750 overseas military bases in 80 countries — more than any empire in history. Cost: $55 billion per year.',
}

export default function EmpireOfBasesPage() {
  const presence = loadData('overseas-presence.json')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Empire of Bases' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Empire of Bases</h1>
      <p className="text-muted mb-6">{fmt(presence.totalBases)} military bases. {presence.totalCountries} countries. {fmt(presence.totalOverseasTroops)} troops. {fmtMoney(presence.annualBaseCost)} per year. Why?</p>
      <ShareButtons title="Empire of Bases" />

      <div className="prose prose-stone max-w-none my-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Numbers</h2>
        <p>The United States maintains approximately {fmt(presence.totalBases)} military bases and installations in {presence.totalCountries} countries, with {fmt(presence.totalOverseasTroops)} troops permanently stationed overseas. The annual cost of maintaining this global military footprint is approximately {fmtMoney(presence.annualBaseCost)}.</p>
        <p>For comparison, the rest of the world&apos;s countries combined maintain roughly 30 overseas military bases. The US has 750.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Historical Comparison</h2>
        <p>At the height of the British Empire — the largest empire in human history — Britain maintained military garrisons in about 36 countries. The Roman Empire, at its peak, had legions deployed across roughly 25 regions. The US today has troops in 80 countries and bases in most of them.</p>
        <p>No empire in history has maintained a military presence this vast.</p>

        <h2 className="font-[family-name:var(--font-heading)]">The Legacy Bases</h2>
        <p>Many US bases are remnants of conflicts that ended decades ago:</p>
        <ul>
          <li><strong>Germany:</strong> {fmt(presence.topDeployments[1]?.troops || 34000)} troops and {presence.topDeployments[1]?.bases || 119} bases — 80 years after WWII ended.</li>
          <li><strong>Japan:</strong> {fmt(presence.topDeployments[0]?.troops || 53700)} troops and {presence.topDeployments[0]?.bases || 120} bases — also since 1945. 70% on Okinawa, where locals regularly protest.</li>
          <li><strong>South Korea:</strong> {fmt(presence.topDeployments[2]?.troops || 28500)} troops — 70+ years after the Korean War armistice.</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Local Opposition</h2>
        <p>In Okinawa, Japan, residents have protested US military bases for decades. In 2019, a referendum showed 72% of Okinawans opposed new base construction. The Japanese and US governments proceeded anyway.</p>
        <p>Similar opposition exists near US bases in South Korea, Italy, Germany, and across the Middle East. Bases are frequently the target of local resentment — and sometimes recruitment propaganda for extremist groups.</p>

        <h2 className="font-[family-name:var(--font-heading)]">The Cost Question</h2>
        <p>{fmtMoney(presence.annualBaseCost)} per year on overseas bases. That&apos;s more than the entire budget of the Department of Education. It&apos;s enough to make public college free for every American student.</p>
        <p>The question isn&apos;t whether America needs a strong military. The question is whether it needs military bases in 80 countries, 80 years after the wars that put them there ended.</p>
      </div>

      <div className="text-center mt-8">
        <Link href="/bases" className="text-primary font-semibold hover:underline">See Full Overseas Bases Data →</Link>
      </div>
    </div>
  )
}
