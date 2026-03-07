import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleSchema from '@/components/ArticleSchema'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'The Kill List: How America Decides Who Dies by Drone',
  description: '14,000+ drone strikes across 7 countries. Signature strikes, double-tap bombings, Terror Tuesdays. 910-2,200 civilians killed. The data behind America\'s remote-control war.',
  openGraph: {
    title: 'The Kill List: How America Decides Who Dies by Drone',
    description: '14,000+ drone strikes. 910-2,200 civilians killed. The machinery of remote-control death.',
    url: 'https://www.warcosts.org/analysis/drones-kill-list',
  },
}

export function generateStaticParams() {
  return []
}

export default function DronesKillListPage() {
  const droneData = loadData('drone-strikes.json')
  const countries = droneData.countries || []

  const totalStrikes = countries.reduce((s: number, c: any) => s + (c.totalStrikes || 0), 0)
  const totalMinKilled = countries.reduce((s: number, c: any) => s + (c.minKilled || 0), 0)
  const totalMaxKilled = countries.reduce((s: number, c: any) => s + (c.maxKilled || 0), 0)
  const totalMinCivilians = countries.reduce((s: number, c: any) => s + (c.minCivilians || 0), 0)
  const totalMaxCivilians = countries.reduce((s: number, c: any) => s + (c.maxCivilians || 0), 0)
  const totalMinChildren = countries.reduce((s: number, c: any) => s + (c.minChildren || 0), 0)
  const totalMaxChildren = countries.reduce((s: number, c: any) => s + (c.maxChildren || 0), 0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Kill List' }]} />
      <ArticleSchema title="The Kill List: How America Decides Who Dies by Drone" description="14,000+ drone strikes across 7 countries. Signature strikes, double-tap bombings, Terror Tuesdays. 910-2,200 civilians killed. The data behind America\" url="/analysis/drones-kill-list" />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
        The Kill List: How America Decides Who Dies by <span className="text-red-400">Drone</span>
      </h1>

      <p className="text-stone-300 text-lg mb-8 max-w-3xl">
        Since 2001, the United States has conducted at least {fmt(totalStrikes)} drone strikes across seven countries,
        killing between {fmt(totalMinKilled)} and {fmt(totalMaxKilled)} people. Between {fmt(totalMinCivilians)} and{' '}
        {fmt(totalMaxCivilians)} were civilians. Between {fmt(totalMinChildren)} and {fmt(totalMaxChildren)} were children.
        No war was declared. No court issued a warrant.
      </p>

      <ShareButtons title="The Kill List: How America Decides Who Dies by Drone" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
        {[
          { label: 'Drone Strikes', value: `${fmt(totalStrikes)}+`, color: 'text-red-400' },
          { label: 'Countries Bombed', value: `${countries.length}`, color: 'text-red-400' },
          { label: 'Civilians Killed', value: `${fmt(totalMinCivilians)}–${fmt(totalMaxCivilians)}`, color: 'text-red-400' },
          { label: 'Children Killed', value: `${fmt(totalMinChildren)}–${fmt(totalMaxChildren)}`, color: 'text-red-400' },
        ].map(s => (
          <div key={s.label} className="bg-stone-800/50 border border-stone-700 rounded-xl p-4 text-center">
            <div className={`font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-stone-400 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* How the kill list works */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          How the Kill List <span className="text-red-400">Works</span>
        </h2>

        <p className="text-stone-300 mb-4">
          Every Tuesday during the Obama administration, senior officials gathered in the White House Situation Room
          for what became known as <strong className="text-white">&quot;Terror Tuesday&quot;</strong> meetings. The president
          personally reviewed a &quot;disposition matrix&quot; — a database of suspected terrorists — and decided who would
          live and who would die.
        </p>

        <p className="text-stone-300 mb-4">
          No judge. No jury. No trial. No evidence presented publicly. Just a PowerPoint presentation with a photo,
          a brief bio, and a recommendation: capture or kill. Almost always kill.
        </p>

        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
          <p className="text-red-300 text-lg italic">
            &quot;It turns out I&apos;m really good at killing people. Didn&apos;t know that was gonna be a strong suit of mine.&quot;
          </p>
          <p className="text-stone-400 text-sm mt-2">— President Obama, reportedly to aides (2011), as cited by Mark Halperin and John Heilemann</p>
        </div>

        <p className="text-stone-300 mb-4">
          The legal basis? A classified Office of Legal Counsel memo arguing that the president has the authority to
          order the killing of American citizens abroad without due process if they pose an &quot;imminent threat&quot; — with
          &quot;imminent&quot; redefined to not require any evidence of a specific, immediate attack.
        </p>
      </section>

      {/* Signature Strikes */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          Signature Strikes: Killing the <span className="text-red-400">Unknown</span>
        </h2>

        <p className="text-stone-300 mb-4">
          Not everyone on the receiving end of a Hellfire missile is on the kill list. The majority of drone strikes
          are <strong className="text-white">&quot;signature strikes&quot;</strong> — attacks targeting people whose identity
          is unknown but whose behavior patterns match what analysts believe constitutes terrorist activity.
        </p>

        <p className="text-stone-300 mb-4">
          What counts as a suspicious &quot;signature&quot;? Gathering in groups. Carrying weapons (common in tribal areas
          where every household has a rifle). Being a &quot;military-aged male&quot; in a strike zone. Loading a truck. Using
          a cell phone previously used by a suspect.
        </p>

        <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-white">The &quot;Military-Aged Male&quot; Problem</h3>
          <p className="text-stone-300 mb-3">
            The Obama administration adopted a policy of counting all military-aged males killed in a strike zone
            as &quot;combatants&quot; unless posthumous evidence proved them innocent. This had the convenient effect of
            keeping civilian casualty numbers artificially low.
          </p>
          <p className="text-stone-300">
            Under this definition, any man between 18 and 65 killed by a drone is assumed guilty until proven
            innocent — after they&apos;re already dead.
          </p>
        </div>

        <p className="text-stone-300 mb-4">
          A 2014 investigation by The Intercept, based on leaked classified documents from whistleblower Daniel Hale,
          revealed that during one five-month period of operations in Afghanistan, <strong className="text-white">nearly 90%
          of people killed in airstrikes were not the intended targets</strong>. The military labeled these unknown dead
          as &quot;enemies killed in action&quot; (EKIA).
        </p>
      </section>

      {/* Double Tap */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          &quot;Double Tap&quot; Strikes: <span className="text-red-400">Bombing the Rescuers</span>
        </h2>

        <p className="text-stone-300 mb-4">
          One of the most disturbing tactics is the &quot;double tap&quot; — striking a target, waiting for first responders
          and rescuers to arrive, then striking again. This tactic, when used by Hamas or other groups, is universally
          condemned as terrorism. When used by the CIA, it&apos;s called a &quot;follow-up strike.&quot;
        </p>

        <p className="text-stone-300 mb-4">
          The Bureau of Investigative Journalism documented at least <strong className="text-white">50 civilian rescuers
          </strong> killed by double-tap strikes in Pakistan alone. In one case, a 2006 strike on a madrassa in Bajaur
          killed 69 children.
        </p>

        <p className="text-stone-300 mb-4">
          The practice terrorized entire communities. In North Waziristan, people stopped helping the wounded after
          strikes, fearing a second missile. Funerals became targets. The social fabric of communities was shredded
          by the constant presence of drones overhead — what locals called <em>bangana</em> (the buzzing).
        </p>

        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
          <p className="text-red-300 text-lg italic">
            &quot;I no longer love blue skies. In fact, I now prefer grey skies. The drones do not fly when the skies are grey.&quot;
          </p>
          <p className="text-stone-400 text-sm mt-2">— Zubair Rehman, 13-year-old Pakistani boy, testifying before the US Congress after his grandmother was killed by a drone</p>
        </div>
      </section>

      {/* CIA vs JSOC */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          Two Kill Chains: <span className="text-red-400">CIA vs. JSOC</span>
        </h2>

        <p className="text-stone-300 mb-4">
          America&apos;s drone war is run by two separate organizations with different rules, different oversight, and
          different levels of accountability:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-6">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-white">🕵️ CIA</h3>
            <ul className="space-y-2 text-stone-300 text-sm">
              <li>• Operated under Title 50 (covert action)</li>
              <li>• Strikes are <strong className="text-white">classified</strong> — officially don&apos;t exist</li>
              <li>• Oversight limited to Gang of Eight in Congress</li>
              <li>• Ran the Pakistan drone campaign (2004-2018)</li>
              <li>• Used signature strikes extensively</li>
              <li>• No public accountability for civilian deaths</li>
              <li>• Civilian operators at Langley flying armed Predators</li>
            </ul>
          </div>

          <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-6">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-white">⚔️ JSOC</h3>
            <ul className="space-y-2 text-stone-300 text-sm">
              <li>• Operated under Title 10 (military operations)</li>
              <li>• Strikes technically <strong className="text-white">acknowledged</strong> but details classified</li>
              <li>• Broader congressional notification (Armed Services committees)</li>
              <li>• Ran the Yemen and Somalia campaigns</li>
              <li>• Nominally stricter targeting rules (not always followed)</li>
              <li>• Military operators at bases in Nevada, Missouri, etc.</li>
              <li>• Reports to Special Operations Command → SecDef</li>
            </ul>
          </div>
        </div>

        <p className="text-stone-300 mb-4">
          The dual structure created a perverse incentive: when the CIA wanted to strike a target in Yemen but faced
          restrictions, JSOC could do it instead (and vice versa). The boundaries between intelligence and military
          operations blurred to the point of meaninglessness.
        </p>
      </section>

      {/* Country-by-country breakdown */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          Country-by-Country <span className="text-red-400">Breakdown</span>
        </h2>

        <div className="space-y-4">
          {countries.map((c: any) => (
            <div key={c.slug} className="bg-stone-800/50 border border-stone-700 rounded-xl p-5">
              <div className="flex items-start justify-between">
                <div>
                  <Link href={`/drone-strikes/${c.slug}`} className="font-[family-name:var(--font-heading)] text-xl font-bold text-white hover:text-red-400 transition">
                    {c.country}
                  </Link>
                  <p className="text-stone-500 text-sm">{c.years}</p>
                </div>
                <span className="text-red-400 font-mono font-bold text-lg">{fmt(c.totalStrikes)} strikes</span>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                <div>
                  <span className="text-stone-500">Total killed</span>
                  <div className="text-white font-medium">{fmt(c.minKilled)}–{fmt(c.maxKilled)}</div>
                </div>
                <div>
                  <span className="text-stone-500">Civilians</span>
                  <div className="text-red-400 font-medium">{fmt(c.minCivilians)}–{fmt(c.maxCivilians)}</div>
                </div>
                <div>
                  <span className="text-stone-500">Children</span>
                  <div className="text-red-400 font-medium">{fmt(c.minChildren)}–{fmt(c.maxChildren)}</div>
                </div>
              </div>
              {c.byPresident && c.byPresident.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-3 text-xs">
                  {c.byPresident.map((p: any) => (
                    <span key={p.president} className="bg-stone-700/50 rounded px-2 py-1 text-stone-300">
                      {p.president}: {fmt(p.strikes)} strikes
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* The Operators */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          The Operators: PTSD at <span className="text-red-400">7,000 Miles</span>
        </h2>

        <p className="text-stone-300 mb-4">
          Drone operators sit in air-conditioned trailers at Creech Air Force Base in Nevada, flying armed Predators
          and Reapers over Pakistan, Yemen, and Somalia. They watch their targets for days or weeks via high-definition
          cameras — seeing them eat, play with their children, pray — before pressing the button.
        </p>

        <p className="text-stone-300 mb-4">
          Then they drive home and have dinner with their families. The psychological toll is staggering. Studies show
          drone operators experience PTSD at rates <strong className="text-white">comparable to combat pilots</strong>.
          Brandon Bryant, a former drone sensor operator, said he was credited with 1,626 kills during his career.
        </p>

        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
          <p className="text-red-300 text-lg italic">
            &quot;We always wonder if we killed the right people, if we destroyed an innocent&apos;s life all because of a bad
            piece of intelligence... We watch the targets go about their daily routines, and when we finally fire, we
            watch them die. Then we go home.&quot;
          </p>
          <p className="text-stone-400 text-sm mt-2">— Brandon Bryant, former USAF drone sensor operator (2011-2015)</p>
        </div>
      </section>

      {/* American Citizens */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          Killing <span className="text-red-400">American Citizens</span>
        </h2>

        <p className="text-stone-300 mb-4">
          On September 30, 2011, a CIA drone strike in Yemen killed <strong className="text-white">Anwar al-Awlaki</strong>,
          a US citizen born in New Mexico. No charges had been filed. No trial occurred. An American was executed by
          his own government based on a secret legal memo.
        </p>

        <p className="text-stone-300 mb-4">
          Two weeks later, another drone strike killed al-Awlaki&apos;s <strong className="text-white">16-year-old son,
          Abdulrahman</strong>, also a US citizen. The boy was eating dinner at an outdoor restaurant. The Obama
          administration never explained why he was targeted. When asked, former press secretary Robert Gibbs said
          the teenager &quot;should have had a more responsible father.&quot;
        </p>

        <p className="text-stone-300 mb-4">
          In January 2017, in one of the first military operations of the Trump administration, a Navy SEAL raid in
          Yemen killed al-Awlaki&apos;s <strong className="text-white">8-year-old daughter, Nawar</strong>. She was shot in
          the neck and bled to death over two hours. Three US citizens from the same family, killed by three different
          presidents.
        </p>
      </section>

      {/* The Numbers Game */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          The Numbers <span className="text-red-400">Game</span>
        </h2>

        <p className="text-stone-300 mb-4">
          The US government has consistently undercounted civilian casualties. The reasons are structural:
        </p>

        <ul className="space-y-3 text-stone-300 mb-6">
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">1.</span>
            <span><strong className="text-white">Military-aged males are presumed combatants</strong> — anyone killed who appears to be between 18-65 is counted as a militant unless proven otherwise (after death).</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">2.</span>
            <span><strong className="text-white">No independent investigation</strong> — the same organization that conducts the strike determines if civilians were killed. They almost always conclude they weren&apos;t.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">3.</span>
            <span><strong className="text-white">Classification</strong> — strike details are classified. Independent journalists can&apos;t access the full picture. Families seeking answers are stonewalled.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">4.</span>
            <span><strong className="text-white">Remote areas</strong> — many strikes occur in tribal regions where independent verification is nearly impossible.</span>
          </li>
        </ul>

        <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-white">Who Counts the Dead?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-stone-500">US Government claims</span>
              <div className="text-white font-bold text-lg">64-116 civilians</div>
              <span className="text-stone-500">(2009-2015, Obama-era DNI report)</span>
            </div>
            <div>
              <span className="text-stone-500">Bureau of Investigative Journalism</span>
              <div className="text-red-400 font-bold text-lg">{fmt(totalMinCivilians)}-{fmt(totalMaxCivilians)} civilians</div>
              <span className="text-stone-500">(all years, all countries)</span>
            </div>
            <div>
              <span className="text-stone-500">Airwars / other trackers</span>
              <div className="text-red-400 font-bold text-lg">1,500-4,000+ civilians</div>
              <span className="text-stone-500">(including Iraq/Syria airstrikes)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          The <span className="text-red-400">Legacy</span>
        </h2>

        <p className="text-stone-300 mb-4">
          America&apos;s drone war established precedents that will haunt the world for decades:
        </p>

        <ul className="space-y-2 text-stone-300 mb-6">
          <li>• <strong className="text-white">Any country</strong> can now claim the right to kill anyone, anywhere, with drones — using America&apos;s own legal framework</li>
          <li>• <strong className="text-white">China, Russia, Turkey, Iran, and 40+ other nations</strong> now have armed drones</li>
          <li>• <strong className="text-white">The &quot;War on Terror&quot; model</strong> — secret kill lists, no geographic boundaries, no temporal limits — has been normalized</li>
          <li>• <strong className="text-white">Autonomous weapons</strong> are the logical next step: remove even the human from the loop</li>
          <li>• <strong className="text-white">Blowback</strong>: every strike that kills civilians creates new enemies. Al-Qaeda in the Arabian Peninsula grew from 300 members in 2009 to over 4,000 by 2012 — during the peak of the drone campaign</li>
        </ul>

        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
          <p className="text-red-300 text-lg italic">
            &quot;In the United States, we have a saying: Where there&apos;s smoke, there&apos;s fire. In Pakistan and Yemen,
            the saying is becoming: Where there&apos;s a drone, there&apos;s a new recruit for al-Qaeda.&quot;
          </p>
          <p className="text-stone-400 text-sm mt-2">— Retired Gen. Stanley McChrystal, former JSOC commander</p>
        </div>
      </section>

      {/* Daniel Hale */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
          The Whistleblower: <span className="text-red-400">Daniel Hale</span>
        </h2>

        <p className="text-stone-300 mb-4">
          In 2015, a trove of classified documents about the drone program was leaked to The Intercept, forming the
          basis of &quot;The Drone Papers.&quot; The source was <strong className="text-white">Daniel Hale</strong>, a former
          Air Force intelligence analyst who had worked on drone operations in Afghanistan.
        </p>

        <p className="text-stone-300 mb-4">
          Hale revealed that during one five-month operation, 90% of people killed were not the intended targets. He
          exposed the &quot;baseball card&quot; system used to approve killings. He showed how the military gamed civilian
          casualty counts.
        </p>

        <p className="text-stone-300 mb-4">
          In 2021, Hale was sentenced to <strong className="text-white">45 months in federal prison</strong> under the
          Espionage Act. In his sentencing letter, he wrote:
        </p>

        <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-6 my-6">
          <p className="text-stone-300 italic">
            &quot;Not a day goes by that I don&apos;t question the justification for my actions... The government argues that
            I put troops at risk. But how can we protect them by creating more enemies? How many of the 1,626 people
            Brandon Bryant helped kill had families who now hate America?&quot;
          </p>
          <p className="text-stone-400 text-sm mt-2">— Daniel Hale, sentencing letter (2021)</p>
        </div>

        <p className="text-stone-300">
          The people who authorized the drone program — who designed the legal frameworks, who approved the kill lists,
          who ordered signature strikes on unknown people — faced no consequences. The man who told the public about
          it went to prison.
        </p>
      </section>

      {/* Related */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { href: '/analysis/drone-wars', title: 'Drone Wars: The Full Data', desc: 'Complete drone strike data by president, country, and year.' },
            { href: '/analysis/shadow-wars', title: 'Shadow Wars', desc: 'America\'s secret wars in 134+ countries.' },
            { href: '/analysis/undeclared-wars', title: 'Undeclared Wars', desc: 'How presidents wage war without congressional approval.' },
            { href: '/analysis/blowback', title: 'Blowback', desc: 'How interventions create the next generation of enemies.' },
          ].map(a => (
            <Link key={a.href} href={a.href} className="bg-stone-800/50 border border-stone-700 rounded-lg p-4 hover:bg-stone-800 transition">
              <h3 className="font-bold text-white">{a.title}</h3>
              <p className="text-stone-400 text-sm">{a.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
