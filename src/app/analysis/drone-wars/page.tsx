import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Drone Wars — Remote-Control Killing | WarCosts',
  description: 'Obama authorized 563 drone strikes vs Bush\'s 57. Between 10,000 and 17,000 killed. Civilian casualties, signature strikes, and the constitutional crisis of remote warfare.',
}

export default function DroneWarsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Drone Wars' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Drone Wars</h1>
      <p className="text-stone-500 mb-2">Remote-control killing: how drones made war invisible and permanent.</p>
      <ShareButtons title="Drone Wars — Remote-Control Killing" />

      <div className="prose text-stone-600 mt-8">
        <div className="not-prose grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
          <div className="bg-stone-100 rounded-xl p-5 text-center border">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">57</p>
            <p className="text-stone-600 text-sm">Bush strikes</p>
          </div>
          <div className="bg-stone-100 rounded-xl p-5 text-center border">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">563</p>
            <p className="text-stone-600 text-sm">Obama strikes</p>
          </div>
          <div className="bg-stone-100 rounded-xl p-5 text-center border col-span-2 md:col-span-1">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">10,000–17,000</p>
            <p className="text-stone-600 text-sm">Estimated killed</p>
          </div>
        </div>

        <p className="text-lg">
          The drone program transformed American warfare. No boots on the ground. No American casualties.
          No congressional debate. No media coverage. Just death, delivered by remote control from
          an air-conditioned trailer in Nevada.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Escalation</h2>
        <p>
          George W. Bush authorized <strong>57 drone strikes</strong> during his presidency. Barack Obama
          authorized <strong>563</strong> — a 10× increase. Obama expanded the program from Pakistan to
          Yemen, Somalia, Libya, and Syria. Trump further escalated and revoked Obama&apos;s executive
          order requiring public reporting of civilian casualties.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">&ldquo;Signature Strikes&rdquo;</h2>
        <p>
          Perhaps the most disturbing development: &ldquo;signature strikes&rdquo; target people based
          not on known identity but on <em>patterns of behavior</em>. Military-age males in a strike
          zone? Kill them. Group of people doing jumping jacks? Possible training camp. The identity of
          the target is unknown at the time of the strike.
        </p>
        <p>
          Any military-age male killed in a strike zone is classified as an &ldquo;enemy combatant&rdquo;
          unless posthumously proven otherwise. This accounting trick dramatically understates civilian casualties.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Civilian Toll</h2>
        <p>
          Official US government figures claim roughly <strong>1,700 civilians</strong> killed by drone
          strikes. Independent organizations estimate the true figure at <strong>10,000 to 17,000</strong>.
          Entire wedding parties. Funerals. First responders arriving to help after an initial strike
          (&ldquo;double-tap&rdquo; strikes).
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Constitutional Crisis</h2>
        <p>
          The drone program operates with no congressional oversight, no judicial review, and minimal
          public accountability. The president maintains a &ldquo;kill list&rdquo; — including, in at
          least one case, an American citizen (Anwar al-Awlaki, killed in Yemen in 2011 without trial).
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Human Cost of &ldquo;Painless&rdquo; War</h2>
        <p>
          For Americans, drone warfare is painless — no casualties, no draft, no sacrifice. This is precisely
          the problem. When war costs nothing visible, there is no check on its expansion. Drone warfare
          has made perpetual, invisible war the new normal.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;If you live in a tribal area of Pakistan, you have a 1 in 50 chance of being killed
          by a US drone. How would Americans feel if a foreign power killed their citizens at that rate?&rdquo;
        </blockquote>
      </div>

      <BackToTop />
    </div>
  )
}
