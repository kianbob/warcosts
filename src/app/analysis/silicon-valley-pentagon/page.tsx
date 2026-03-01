import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Silicon Valley & the Pentagon — Big Tech\'s Military Contracts | WarCosts',
  description: 'How Big Tech is transforming the military-industrial complex. AI weapons, surveillance tech, and the growing entanglement of Silicon Valley and the Pentagon.',
}

export default function SiliconValleyPentagonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Silicon Valley & Pentagon' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Silicon Valley &amp; the Pentagon</h1>
      <p className="text-stone-500 mb-2">How Big Tech is becoming the new military-industrial complex.</p>
      <ShareButtons title="Silicon Valley & the Pentagon" />

      <div className="prose text-stone-600 mt-8">
        <p className="text-lg">
          Eisenhower warned about the military-industrial complex in 1961. Sixty years later, it has
          evolved. The new power players aren&apos;t just Lockheed Martin and Raytheon — they&apos;re
          Amazon, Google, Microsoft, Palantir, and Anduril.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Numbers</h2>
        <ul>
          <li>Pentagon contracts to tech companies: growing <strong>~25% per year</strong></li>
          <li>Microsoft&apos;s JEDI/JWCC cloud contract: <strong>$9 billion</strong></li>
          <li>Amazon Web Services: hosts classified CIA/DOD infrastructure</li>
          <li>Palantir: $2.8B in federal contracts, core intelligence tool</li>
          <li>Anduril: AI-powered autonomous weapons, valued at $14B</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Project Maven and the AI Arms Race</h2>
        <p>
          In 2017, the Pentagon launched Project Maven — using machine learning to analyze drone
          surveillance footage. Google won the initial contract, but employee protests forced them
          to withdraw. The contract moved elsewhere. The program continued.
        </p>
        <p>
          The incident revealed a fundamental tension: tech workers who joined companies to
          &ldquo;organize the world&apos;s information&rdquo; discovered they were building tools
          for targeted killing. Most companies resolved the tension by firing the dissenters.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Autonomous Weapons</h2>
        <p>
          The next frontier: weapons that select and engage targets without human intervention.
          The DOD is investing heavily in autonomous drones, AI-guided missiles, and robotic combat
          vehicles. Companies like Anduril and Shield AI are building them.
        </p>
        <p>
          The ethical implications are staggering. Who is responsible when an algorithm decides to kill?
          The programmer? The commander? The CEO? No international law addresses this question.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Revolving Door</h2>
        <p>
          Over <strong>500 former senior DOD officials</strong> now work for defense contractors.
          Former Google CEO Eric Schmidt chaired the Defense Innovation Board. Former Secretary of
          Defense Ash Carter joined Apple&apos;s board. The line between Silicon Valley and the
          Pentagon has effectively dissolved.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Surveillance Infrastructure</h2>
        <p>
          The same technologies that power social media — facial recognition, location tracking,
          behavioral prediction — are being weaponized. Clearview AI scrapes billions of social
          media photos for military and law enforcement. Palantir builds predictive policing and
          intelligence systems used by ICE, CIA, and allied militaries.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The real danger is not that computers will begin to think like men,
          but that men will begin to think like computers.&rdquo;
          <br />— Sydney J. Harris
        </blockquote>
      </div>

      <BackToTop />
    </div>
  )
}
