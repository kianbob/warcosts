import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'
import { DroneStrikesChart } from '@/components/charts/DroneCharts'

export const metadata: Metadata = {
  title: 'Drone Wars — The Invisible War Nobody Voted For',
  description: '14,000+ strikes. 8,858-16,901 killed. 769-1,725 confirmed civilians. 253 children. Kill lists, signature strikes, and the constitutional crisis of remote-control killing.',
  openGraph: {
    title: 'Drone Wars — The Invisible War Nobody Voted For',
    description: 'How drones made war invisible, permanent, and unconstitutional.',
    url: 'https://www.warcosts.org/analysis/drone-wars',
  },
}

const strikesByCountry = [
  { country: 'Pakistan', strikes: '430+', killed: '2,515–4,026', civilians: '424–969', children: '172–207', period: '2004–2018', note: 'Most intense under Obama. CIA-run program. Many "signature strikes."' },
  { country: 'Yemen', strikes: '380+', killed: '1,020–1,389', civilians: '125–163', children: '27–37', period: '2002–present', note: 'First drone strike outside Afghanistan killed 6 people including a US citizen.' },
  { country: 'Somalia', strikes: '280+', killed: '1,210–1,756', civilians: '18–26', children: '1–2', period: '2007–present', note: 'Trump removed Obama-era civilian protection rules. Strikes tripled.' },
  { country: 'Afghanistan', strikes: '13,000+', killed: '4,000+', civilians: '300–909', children: '66–184', period: '2001–2021', note: 'Most strikes of any country. Last strike killed 10 civilians including 7 children (Kabul, Aug 2021).' },
  { country: 'Iraq', strikes: '1,600+', killed: '1,300+', civilians: '100+', children: 'Unknown', period: '2014–present', note: 'Anti-ISIS campaign. Mosul battle: hundreds of civilians per airstrike.' },
  { country: 'Syria', strikes: '1,200+', killed: '1,000+', civilians: '200+', children: 'Unknown', period: '2014–present', note: 'Anti-ISIS plus strikes against Syrian government forces.' },
  { country: 'Libya', strikes: '550+', killed: '500+', civilians: 'Unknown', children: 'Unknown', period: '2011–present', note: '2011 NATO campaign plus ongoing CT strikes.' },
]

const byPresident = [
  { president: 'George W. Bush', strikes: '57', policy: 'Started the drone program. Strikes limited to Pakistan and Afghanistan. Required positive identification of targets. Relatively restrained by later standards.', expansion: 'Established the legal framework under AUMF.' },
  { president: 'Barack Obama', strikes: '563', policy: 'Expanded strikes 10× to Pakistan, Yemen, Somalia, Libya, Syria. Introduced "signature strikes." Maintained a personal "kill list" reviewed every "Terror Tuesday." Ordered the killing of US citizen Anwar al-Awlaki without trial.', expansion: 'Required civilian casualty reporting (executive order). Established the "disposition matrix" — a database of kill/capture targets.' },
  { president: 'Donald Trump', strikes: '2,243 (first 2 years alone)', policy: 'Revoked Obama\'s civilian casualty reporting requirement. Loosened rules of engagement. Delegated strike authority to lower-level commanders. Strikes tripled in Somalia. Ordered Soleimani assassination.', expansion: 'Removed transparency. Expanded geographic scope. Reduced oversight.' },
  { president: 'Joe Biden', strikes: 'Reduced', policy: 'Implemented new civilian protection policies. Paused drone strikes outside active war zones. But: last Afghanistan strike killed 10 civilians including 7 children. No one held accountable.', expansion: 'Tightened rules after Kabul strike tragedy. Over-the-horizon strategy still relies on drones.' },
]

export default function DroneWarsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd title="Drone Wars — The Invisible War Nobody Voted For" description="14,000+ strikes, thousands of civilians killed. How drones made war invisible, permanent, and unconstitutional." slug="drone-wars" />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Drone Wars' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          Drone Wars
        </h1>
        <p className="text-xl text-stone-300 mb-4">The Invisible War Nobody Voted For</p>
        <p className="text-stone-400 text-lg">
          From an air-conditioned trailer in Creech Air Force Base, Nevada, a 22-year-old operator watches a grainy
          infrared feed of a house 7,000 miles away. He presses a button. Seconds later, the house — and everyone
          in it — is gone. He drives home for dinner. This is modern American warfare: death by remote control,
          with no congressional debate, no judicial review, no American casualties, and no political cost.
          That&apos;s exactly the problem.
        </p>
      </div>

      <ShareButtons title="Drone Wars — The Invisible War" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '14,000+', label: 'Total Drone Strikes', sub: 'Across 7+ countries' },
          { val: '8,858–16,901', label: 'People Killed', sub: 'Bureau of Investigative Journalism' },
          { val: '769–1,725', label: 'Confirmed Civilians', sub: 'True number likely far higher' },
          { val: '253+', label: 'Children Killed', sub: 'Confirmed — actual number unknown' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How Drone Warfare Works</h2>
        <p className="text-stone-700 mb-4">
          The US drone program operates primarily through two channels: the CIA (covert, deniable, no public
          accountability) and the military&apos;s Joint Special Operations Command (JSOC). The distinction matters:
          CIA strikes are classified and officially don&apos;t exist. When the US kills people with CIA drones, the
          government&apos;s official position is that the strike didn&apos;t happen.
        </p>
        <p className="text-stone-700 mb-4">
          The primary platforms are the <strong>MQ-9 Reaper</strong> ($32M each, manufactured by General Atomics) and
          the older <strong>MQ-1 Predator</strong>. Armed with Hellfire missiles ($150K each, made by Lockheed Martin),
          these drones can loiter over a target for 14+ hours, watching and waiting for the order to fire.
          Operators sit in ground control stations in Nevada, New Mexico, or at Ramstein Air Base in Germany
          (for Africa/Middle East operations), controlling aircraft thousands of miles away via satellite link.
        </p>
      </div>

      {/* Strikes by country */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Drone Strikes by Country</h2>
        <p className="text-stone-500 text-sm mb-4">Source: Bureau of Investigative Journalism, Airwaves, New America Foundation. Figures are minimum confirmed estimates.</p>
        <div className="space-y-4">
          {strikesByCountry.map(c => (
            <div key={c.country} className="border rounded-lg p-4">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-bold text-lg">{c.country}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">{c.strikes} strikes</span>
                <span className="text-xs text-stone-500">{c.period}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="text-center bg-stone-50 rounded p-2">
                  <p className="text-sm font-bold text-red-700">{c.killed}</p>
                  <p className="text-[10px] text-muted">Killed</p>
                </div>
                <div className="text-center bg-stone-50 rounded p-2">
                  <p className="text-sm font-bold text-red-700">{c.civilians}</p>
                  <p className="text-[10px] text-muted">Civilians</p>
                </div>
                <div className="text-center bg-stone-50 rounded p-2">
                  <p className="text-sm font-bold text-red-700">{c.children}</p>
                  <p className="text-[10px] text-muted">Children</p>
                </div>
              </div>
              <p className="text-sm text-stone-600">{c.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Signature strikes */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">&ldquo;Signature Strikes&rdquo; — Killing People You Can&apos;t Identify</h2>
        <p className="text-stone-700 mb-4">
          Perhaps the most disturbing innovation of the drone era: <strong>&ldquo;signature strikes&rdquo;</strong> target
          people based not on known identity but on <em>patterns of behavior</em>. The identity of the target is
          unknown at the time of the strike. Instead, analysts look for &ldquo;signatures&rdquo; of terrorist activity:
        </p>
        <ul className="space-y-2 text-sm text-stone-700 mb-4">
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">•</span> A group of military-age males gathering in a known militant area</li>
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">•</span> People doing exercises that resemble &ldquo;training&rdquo;</li>
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">•</span> Vehicles traveling in convoy in border regions</li>
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">•</span> People loading &ldquo;suspicious materials&rdquo; into trucks</li>
        </ul>
        <p className="text-stone-700 mb-4">
          The critical detail: <strong>any military-age male killed in a strike zone is classified as an &ldquo;enemy
          combatant&rdquo; unless posthumously proven otherwise</strong>. This means every man between roughly 15 and 65
          killed in a drone strike is automatically counted as a militant — even if no one knew who he was before
          the missile hit. This accounting trick dramatically understates civilian casualties.
        </p>
        <p className="text-stone-700">
          As an unnamed senior State Department official told the New York Times: <em>&ldquo;It in effect counts
          all military-age males in a strike zone as combatants... unless there is explicit intelligence
          posthumously proving them innocent.&rdquo;</em> The dead cannot prove their innocence.
        </p>
      </div>

      {/* Double-tap strikes */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">&ldquo;Double-Tap&rdquo; Strikes: Killing the Rescuers</h2>
        <p className="text-stone-700 mb-4">
          One of the most condemned practices: striking a target, waiting for rescuers and first responders to
          arrive, then striking again. This is called a &ldquo;double-tap&rdquo; — a tactic so reviled that
          when used by terrorist organizations, it&apos;s cited as evidence of their barbarity.
        </p>
        <p className="text-stone-700 mb-4">
          The Bureau of Investigative Journalism documented at least <strong>50 double-tap strikes in Pakistan
          alone</strong> between 2006 and 2013. These strikes killed rescuers, family members, and medical personnel
          who arrived to help the wounded. The practice terrorized communities into <em>not helping</em> after
          strikes, leaving the wounded to die.
        </p>
        <p className="text-stone-700">
          Under international humanitarian law, deliberately targeting rescuers is a war crime. The practice was
          widely reported by Stanford/NYU&apos;s <em>Living Under Drones</em> report, the Bureau of Investigative
          Journalism, and multiple human rights organizations. No US official has ever been held accountable.
        </p>
      </div>

      {/* The disposition matrix */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The &ldquo;Disposition Matrix&rdquo; — Obama&apos;s Kill List</h2>
        <p className="text-stone-300 mb-4">
          The Washington Post revealed in 2012 that the Obama administration maintained a <strong>&ldquo;disposition
          matrix&rdquo;</strong> — a database of suspected terrorists and the recommended method of dealing with
          each one: capture, rendition, or targeted killing. President Obama personally reviewed the list every
          Tuesday in meetings that officials nicknamed <strong>&ldquo;Terror Tuesday.&rdquo;</strong>
        </p>
        <p className="text-stone-300 mb-4">
          The matrix was designed to be <em>permanent</em> — a system that would outlast any single administration.
          As one official told the Post: <em>&ldquo;We had to get out of the business of going to the president
          to approve every single operation.&rdquo;</em> The goal was to make the kill list self-sustaining —
          a bureaucratic machine for targeted assassination that would run on autopilot.
        </p>
        <p className="text-stone-300">
          No court reviews the list. No jury weighs evidence. No defense attorney argues for the accused.
          The president — advised by intelligence officials whose assessments cannot be independently verified —
          decides who lives and who dies. The target is killed by a missile they never see coming, in a war
          that was never declared, authorized by a 60-word sentence written in 2001.
        </p>
      </div>

      {/* Anwar al-Awlaki */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">Anwar al-Awlaki: An American Citizen Killed Without Trial</h2>
        <p className="text-stone-700 mb-4">
          On September 30, 2011, a CIA drone strike in Yemen killed <strong>Anwar al-Awlaki</strong>, a US citizen
          born in New Mexico. Al-Awlaki was an Al-Qaeda propagandist and recruiter — but he was never charged with
          a crime, never indicted, never tried, and never convicted. The government placed an American citizen on
          a kill list and executed him without any form of due process.
        </p>
        <p className="text-stone-700 mb-4">
          Two weeks later, a second drone strike killed al-Awlaki&apos;s <strong>16-year-old son, Abdulrahman</strong> —
          also a US citizen, born in Denver — while he was eating dinner at an outdoor restaurant in Yemen. The
          government initially denied targeting the boy. When pressed, former White House press secretary Robert
          Gibbs said: <em>&ldquo;He should have had a more responsible father.&rdquo;</em>
        </p>
        <p className="text-stone-700 mb-4">
          In January 2017, a US special operations raid in Yemen killed al-Awlaki&apos;s <strong>8-year-old
          daughter, Nawar</strong> — again, a US citizen. Three members of one American family killed by their
          own government — a father, a son, and a daughter — across three separate operations, without a single
          criminal charge ever filed.
        </p>
        <blockquote className="border-l-4 border-red-700 pl-4 text-stone-600 italic">
          &ldquo;No person shall be deprived of life, liberty, or property, without due process of law.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Fifth Amendment to the United States Constitution</span>
        </blockquote>
      </div>

      {/* The cost of drone warfare */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Economics of Remote-Control Killing</h2>
        <p className="text-stone-700 mb-4">
          Drone warfare is often sold as cheaper than conventional military operations. The numbers tell
          a more complex story:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {[
            { item: 'MQ-9 Reaper drone', cost: '$32M each', note: 'General Atomics. 300+ in USAF fleet.' },
            { item: 'AGM-114 Hellfire missile', cost: '$150K each', note: 'Lockheed Martin. ~100,000 produced.' },
            { item: 'Flight hour cost (Reaper)', cost: '$4,762/hour', note: '14+ hour missions = $66K+ per sortie' },
            { item: 'Ground control station', cost: '$12M each', note: 'Plus satellite bandwidth: $500K+/yr per drone' },
            { item: 'Total drone program cost (est.)', cost: '$50B+ since 2001', note: 'Acquisition, operation, intelligence support' },
            { item: 'Cost per strike (estimated)', cost: '$3-4M', note: 'Including intelligence, planning, missile, flight time' },
          ].map(i => (
            <div key={i.item} className="bg-stone-50 rounded-lg p-3 border">
              <p className="text-sm font-semibold">{i.item}: <span className="text-red-700">{i.cost}</span></p>
              <p className="text-[10px] text-stone-400">{i.note}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700 mb-4">
          General Atomics — the sole manufacturer of the Predator and Reaper drones — has been one of the
          War on Terror&apos;s biggest beneficiaries. A privately held company (not publicly traded), it has
          earned billions from drone production. The Linden and Blue families, who own General Atomics, have
          contributed millions to political campaigns. The company has spent over <strong>$60 million on
          lobbying</strong> since 2001.
        </p>
        <p className="text-stone-700">
          The proliferation risk is also enormous. At least <strong>30 countries</strong> now operate armed
          drones — including China, Turkey, Iran, and the UAE. Turkey used drones to devastating effect in
          Libya, Syria, and the Armenia-Azerbaijan conflict. The US pioneered armed drone warfare; now every
          authoritarian regime on Earth wants the same capability. The precedents the US set — extrajudicial
          killing, signature strikes, civilian casualty tolerance — will be cited by every future drone user.
        </p>
      </div>

      {/* The transparency problem */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Transparency Black Hole</h2>
        <p className="text-stone-700 mb-4">
          The drone program has been characterized by systematic opacity — making accountability impossible:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">CIA Strikes: Officially They Don&apos;t Exist</h3>
            <p className="text-sm text-stone-700">
              CIA drone strikes are classified. The US government&apos;s official position is that they did not
              occur. When a CIA drone kills people in Pakistan, the US government cannot acknowledge it happened,
              cannot confirm or deny casualties, and cannot be held accountable for the results. The strikes
              exist in a legal and factual void — documented by journalists and NGOs, denied by the perpetrator.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Civilian Casualty Counting: Designed to Undercount</h3>
            <p className="text-sm text-stone-700">
              The government counts civilian casualties using a methodology designed to minimize the number:
              all military-age males in a strike zone are counted as combatants by default. Only individuals
              posthumously proven to be civilians are reclassified. The dead cannot prove their innocence.
              Independent organizations (Bureau of Investigative Journalism, Airwars) consistently document
              <strong>2-10× more civilian casualties</strong> than the government acknowledges.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Trump&apos;s Transparency Rollback</h3>
            <p className="text-sm text-stone-700">
              In 2019, Trump revoked Obama&apos;s executive order requiring the government to publish an annual
              report on drone strikes and civilian casualties outside active war zones. The executive order was
              itself inadequate — but Trump eliminated even that minimal transparency. Drone strikes became
              officially invisible: no acknowledgment, no casualty count, no accountability.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Congressional Oversight: Minimal to Nonexistent</h3>
            <p className="text-sm text-stone-700">
              The intelligence committees receive classified briefings on the drone program — but the information
              is often incomplete, and members are prohibited from discussing it publicly. When Senator Ron Wyden
              asked the administration to disclose the legal basis for killing American citizens with drones, it
              took <strong>years of demands</strong> before a heavily redacted memo was released.
            </p>
          </div>
        </div>
      </div>

      {/* International proliferation */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Global Proliferation: America&apos;s Precedent Goes Worldwide</h2>
        <p className="text-stone-700 mb-4">
          The US established the norms for armed drone use. Those norms are now being adopted by the world:
        </p>
        <div className="space-y-2 mb-4">
          {[
            { country: 'China', drones: 'CH-4, CH-5, Wing Loong II', note: 'Sold armed drones to Pakistan, UAE, Saudi Arabia, Nigeria, Egypt, Myanmar. Fewer restrictions than US arms sales.' },
            { country: 'Turkey', drones: 'Bayraktar TB2', note: 'Used devastatingly in Libya, Syria, Armenia-Azerbaijan war. Game-changer in modern warfare. Exported widely.' },
            { country: 'Iran', drones: 'Shahed-136, Mohajer-6', note: 'Supplied to Russia for use in Ukraine. Used by Houthi rebels in Yemen. Growing export market.' },
            { country: 'Israel', drones: 'Hermes 450/900, Heron', note: 'Extensive use in Gaza and Lebanon. Exported to India, Azerbaijan, and others.' },
            { country: 'Russia', drones: 'Orion, Orlan-10, Iranian Shahed', note: 'Extensive use in Ukraine. Initially behind but rapidly developing.' },
          ].map(c => (
            <div key={c.country} className="border-l-4 border-stone-200 pl-4">
              <p className="text-sm font-semibold">{c.country}: <span className="text-stone-500 font-normal">{c.drones}</span></p>
              <p className="text-xs text-stone-500">{c.note}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700">
          The precedent the US set — that a country can use armed drones to kill people in other countries
          without a declaration of war, without judicial process, and without accountability — has been
          enthusiastically adopted by authoritarian regimes worldwide. When China eventually uses armed
          drones to kill Uyghur dissidents abroad, or when Russia uses them to assassinate opposition
          figures, they will cite American precedent. The norms America established will be America&apos;s
          blowback.
        </p>
      </div>

      {/* By president */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Escalation: President by President</h2>
        <div className="space-y-4">
          {byPresident.map(p => (
            <div key={p.president} className="border-l-4 border-red-200 pl-4">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-bold text-primary">{p.president}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">{p.strikes} strikes</span>
              </div>
              <p className="text-sm text-stone-700 mb-1">{p.policy}</p>
              <p className="text-xs text-stone-500"><strong>Legacy:</strong> {p.expansion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Political cost of war */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How Drones Lowered the Political Cost of War</h2>
        <p className="text-stone-700 mb-4">
          This is the core insight that explains everything about the drone program: drones made war <em>politically
          free</em>. When war costs no American lives, requires no congressional vote, generates no media coverage,
          and produces no visible sacrifice, there is no democratic check on its expansion. War becomes a background
          process — always running, never debated, never questioned.
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">No American casualties → No political opposition</h3>
            <p className="text-sm text-stone-700">
              The Vietnam War ended largely because 58,000 Americans died and millions protested. The Iraq War became
              unpopular as casualties mounted. Drone wars produce zero American casualties — removing the most powerful
              check on endless war.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">No congressional vote → No accountability</h3>
            <p className="text-sm text-stone-700">
              Every drone strike is authorized under the 2001 AUMF — a 60-word sentence intended for Afghanistan.
              Congress has never voted to authorize drone strikes in Pakistan, Yemen, Somalia, or Libya. No member
              of Congress has to put their name on a vote for war.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">No media coverage → No public awareness</h3>
            <p className="text-sm text-stone-700">
              Drone strikes happen in remote areas of countries most Americans can&apos;t find on a map. There are
              no embedded journalists. No dramatic footage. No flag-draped coffins. The strikes are effectively
              invisible to the American public.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">No sacrifice → No debate</h3>
            <p className="text-sm text-stone-700">
              When war requires a draft, taxes, or rationing, citizens pay attention. Drone wars require nothing
              of the American people — no sacrifice, no awareness, no engagement. This is not an accidental feature.
              It is the <em>design</em>.
            </p>
          </div>
        </div>
        <blockquote className="border-l-4 border-red-700 pl-4 text-stone-600 italic">
          &ldquo;The danger of drones is that they make it too easy to go to war. When you can kill without risk,
          the threshold for killing drops.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— P.W. Singer, <em>Wired for War</em></span>
        </blockquote>
      </div>

      {/* Blowback */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Blowback: Creating More Enemies Than You Kill</h2>
        <p className="text-stone-700 mb-4">
          Multiple studies have demonstrated that drone strikes create more terrorists than they eliminate:
        </p>
        <ul className="space-y-3 text-stone-700 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0 font-bold">→</span>
            <span>A 2015 study by the Stimson Center found that drone strikes in Yemen correlated with a
              <strong> dramatic increase in AQAP recruitment</strong>. Before US drone strikes, AQAP had ~300 members.
              After years of strikes, membership grew to over 4,000.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0 font-bold">→</span>
            <span>Former CENTCOM commander General Stanley McChrystal warned that for every innocent person killed,
              you create <strong>&ldquo;10 new enemies.&rdquo;</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0 font-bold">→</span>
            <span>Michael Hayden, former CIA and NSA director, admitted: <em>&ldquo;Right now, there isn&apos;t a
              government on the planet that agrees with our legal rationale for these [drone] operations.&rdquo;</em></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0 font-bold">→</span>
            <span>Faisal Shahzad, who attempted to bomb Times Square in 2010, explicitly cited US drone strikes
              in Pakistan as his motivation. The underwear bomber cited Yemen drone strikes.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0 font-bold">→</span>
            <span>Stanford/NYU&apos;s <em>Living Under Drones</em> report documented how entire communities in Pakistan
              live in constant terror of strikes — children afraid to go to school, adults afraid to gather for
              funerals or weddings, a pervasive psychological trauma affecting millions.</span>
          </li>
        </ul>
        <p className="text-xs text-stone-500"><Link href="/analysis/blowback" className="text-red-800 hover:underline">→ Blowback — full analysis</Link></p>
      </div>

      {/* Drone operators */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Operators: PTSD from 7,000 Miles Away</h2>
        <p className="text-stone-300 mb-4">
          The military promised drone warfare would be clean and clinical. It isn&apos;t. Drone operators develop
          PTSD at rates comparable to combat troops — in some studies, <strong>higher</strong>. The reason is
          uniquely disturbing: they watch their targets for days or weeks before killing them. They see them
          play with their children. Walk to the market. Pray. Then they kill them — and watch the aftermath
          in high-definition infrared.
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-stone-300 italic">
              &ldquo;I watched them burn. I watched the bodies. I watched the funerals. I watched the families
              cry. And then I drove to Applebee&apos;s and had dinner with my kids.&rdquo;
            </p>
            <p className="text-stone-500 text-sm mt-1">— Former drone sensor operator, interviewed by GQ</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-stone-300 italic">
              &ldquo;We called it &lsquo;bug splat.&rsquo; That&apos;s what we called the people we killed — bug splat.
              Because on the screen, when the missile hits, it looks like a bug hitting a windshield.&rdquo;
            </p>
            <p className="text-stone-500 text-sm mt-1">— Former drone operator Brandon Bryant, who was credited with 1,626 kills before leaving the military with severe PTSD</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-stone-300 italic">
              &ldquo;I don&apos;t think what we did was right. I don&apos;t think what we did was wrong.
              I think what we did was a waste.&rdquo;
            </p>
            <p className="text-stone-500 text-sm mt-1">— Former drone pilot, speaking anonymously to the Intercept</p>
          </div>
        </div>
        <p className="text-stone-300 mt-4">
          A 2013 Pentagon study found that drone operators suffered from PTSD, depression, anxiety, and alcohol abuse
          at rates equal to or exceeding troops deployed to Iraq and Afghanistan. The VA initially refused to classify
          them as combat veterans, denying them combat-related benefits. Many who left the military report being unable
          to discuss their work due to classification — unable to get help for trauma they can&apos;t describe.
        </p>
      </div>

      {/* The Intercept Drone Papers */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Drone Papers: What the Government Doesn&apos;t Want You to Know</h2>
        <p className="text-stone-700 mb-4">
          In October 2015, <em>The Intercept</em> published &ldquo;The Drone Papers&rdquo; — a series based
          on classified documents leaked by a whistleblower inside the intelligence community. The documents
          revealed:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">90% of People Killed Were Not the Intended Target</h3>
            <p className="text-sm text-stone-700">
              During one five-month period of operations in northeastern Afghanistan (Operation Haymaker),
              <strong>nearly 90% of the people killed in airstrikes were not the intended targets</strong>.
              These unintended deaths were classified as &ldquo;enemies killed in action&rdquo; (EKIA) —
              enemy combatants — regardless of whether they actually were. The government&apos;s civilian
              casualty counts are, by design, massive undercounts.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">The &ldquo;Kill Chain&rdquo;</h3>
            <p className="text-sm text-stone-700">
              The documents described the bureaucratic process for approving targeted killings — a 60-day
              cycle from identification to authorization. During this period, the target is tracked, analyzed,
              and placed on a &ldquo;kill list&rdquo; that the President reviews. The process was designed to
              be efficient — to maximize throughput of killing decisions.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Signals Intelligence Over Human Intelligence</h3>
            <p className="text-sm text-stone-700">
              The documents showed heavy reliance on signals intelligence (phone metadata, email patterns)
              rather than human intelligence for targeting decisions. In practice, this means targets were
              often identified by their phone&apos;s location — and if someone else was carrying the phone
              (or the phone was in the wrong location), the wrong person died.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">The &ldquo;Baseball Card&rdquo;</h3>
            <p className="text-sm text-stone-700">
              Each approved target received a &ldquo;baseball card&rdquo; — a one-page profile with their
              photo, biographical information, and justification for killing. These cards were presented to
              the President during &ldquo;Terror Tuesday&rdquo; meetings. The President would review the card
              and approve or defer. The formality of the process — its bureaucratic neatness — belied the
              reality: a human being was being sentenced to death by executive fiat, without trial, based on
              intelligence that was often wrong.
            </p>
          </div>
        </div>
        <p className="text-stone-700">
          The whistleblower who leaked the documents said: <em>&ldquo;This outrageous explosion of watchlisting
          — of monitoring people and then potentially killing them — has been at the center of the government&apos;s
          anti-terrorism strategy. Anyone caught up in the dragnet of the watchlist can be forever affected.&rdquo;</em>
          Daniel Hale was later identified as the leaker. He was sentenced to <strong>45 months in federal prison</strong>
          in 2021 — while the officials who authorized the killing of thousands of people, including American
          citizens, faced no consequences.
        </p>
      </div>

      {/* Autonomous weapons */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Future: Autonomous Weapons and AI-Driven Killing</h2>
        <p className="text-stone-700 mb-4">
          The current drone program — with human operators making kill decisions — may represent the
          <em>most restrained</em> version of remote-control warfare we&apos;ll ever see. The military is
          actively developing autonomous weapons systems that can select and engage targets without human intervention:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Project Maven</h3>
            <p className="text-sm text-stone-700">
              The Pentagon&apos;s Project Maven uses AI to analyze drone footage and identify targets. Google
              employees protested their company&apos;s involvement, and Google withdrew. But the program continues
              with other contractors. The goal: machines that identify &ldquo;targets of interest&rdquo; faster
              than humans can.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Collaborative Combat Aircraft (CCA)</h3>
            <p className="text-sm text-stone-700">
              The Air Force is developing autonomous &ldquo;wingman&rdquo; drones that fly alongside manned
              fighters. These AI-piloted aircraft can make tactical decisions in real-time. The question of
              when — not whether — these systems will be authorized to fire without human approval is one of
              the most important ethical questions of the century.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Replicator Initiative</h3>
            <p className="text-sm text-stone-700">
              In 2023, the Pentagon launched the Replicator Initiative to field &ldquo;autonomous systems at
              scale of multiple thousands, in multiple domains, within 18 to 24 months.&rdquo; The initiative
              aims to counter China with masses of small, cheap, autonomous drones. The ethics of deploying
              thousands of AI-controlled killing machines have barely been discussed.
            </p>
          </div>
        </div>
        <blockquote className="border-l-4 border-red-700 pl-4 text-stone-600 italic">
          &ldquo;The question is not whether machines will be able to kill humans. They already can. The
          question is whether we will allow machines to decide which humans to kill — without a human in
          the loop. That line, once crossed, cannot be uncrossed.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— International Committee for Robot Arms Control</span>
        </blockquote>
      </div>

      {/* The chart */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Data</h2>
        <DroneStrikesChart />
      </div>

      {/* The Kabul strike */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">The Last Strike: 10 Civilians, 7 Children, Zero Accountability</h2>
        <p className="text-stone-700 mb-4">
          On August 29, 2021 — during the chaotic Afghanistan withdrawal — a US drone strike hit a white Toyota
          Corolla in a residential neighborhood of Kabul. The military claimed it was targeting an ISIS-K operative
          with a car full of explosives. In reality, it killed <strong>Zemari Ahmadi</strong>, a 43-year-old aid
          worker for a US-based NGO who was bringing water containers home to his family.
        </p>
        <p className="text-stone-700 mb-4">
          The strike killed <strong>10 members of his family, including 7 children</strong> — ages 2 to 12.
          The &ldquo;explosives&rdquo; were water bottles. The military initially claimed the strike was
          &ldquo;righteous&rdquo; and that &ldquo;significant secondary explosions&rdquo; confirmed explosives
          in the vehicle. Both claims were lies.
        </p>
        <p className="text-stone-700 mb-4">
          After the New York Times investigation proved the military&apos;s account was false, the Pentagon
          acknowledged the error and called it a &ldquo;tragic mistake.&rdquo; A subsequent investigation
          found <strong>no one at fault</strong>. No one was disciplined. No one was fired. No one was prosecuted.
          Ten dead civilians, seven dead children, zero consequences.
        </p>
        <p className="text-stone-700 font-semibold">
          This single strike encapsulates everything about the drone program: bad intelligence presented as
          certainty, civilian deaths covered up as military success, and zero accountability when the truth emerges.
        </p>
      </div>

      {/* Legal framework */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Legal Black Hole</h2>
        <p className="text-stone-700 mb-4">
          The drone program operates in a legal framework that wouldn&apos;t survive 30 seconds of scrutiny in any
          court — which is precisely why it has been kept away from courts:
        </p>
        <ul className="space-y-2 text-stone-700 mb-4">
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">✕</span> No declaration of war by Congress for any drone campaign</li>
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">✕</span> All authorized under the 2001 AUMF — 60 words intended for Afghanistan</li>
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">✕</span> No judicial review of targeting decisions</li>
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">✕</span> No independent verification of casualty claims</li>
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">✕</span> CIA strikes are classified — officially they don&apos;t exist</li>
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">✕</span> US citizens killed without due process</li>
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">✕</span> No country on Earth agrees with the US legal rationale (per former CIA/NSA director Hayden)</li>
        </ul>
        <blockquote className="border-l-4 border-red-700 pl-4 text-stone-600 italic">
          &ldquo;If you live in a tribal area of Pakistan, you have a 1 in 50 chance of being killed by a US drone.
          How would Americans feel if a foreign power killed their citizens at that rate?&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Stanford/NYU, <em>Living Under Drones</em>, 2012</span>
        </blockquote>
      </div>

      {/* The SKYNET Algorithm */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">SKYNET: When Algorithms Decide Who Dies</h2>
        <p className="text-stone-700 mb-4">
          Yes, the NSA literally named its terrorist-hunting algorithm <strong>SKYNET</strong> — after the
          AI that destroys humanity in the <em>Terminator</em> films. Revealed by Edward Snowden documents
          in 2015, SKYNET was a machine-learning program that analyzed metadata from Pakistani cellphone
          users — 55 million records — to identify &ldquo;likely terrorists&rdquo; based on behavioral patterns:
          who they called, where they traveled, when they turned their phone off.
        </p>
        <p className="text-stone-700 mb-4">
          Independent analysis of SKYNET&apos;s methodology by data scientists found that it had a
          <strong>false positive rate of up to 50%</strong>. This means that potentially half the people
          flagged as terrorists by the algorithm were innocent. When combined with the &ldquo;signature
          strike&rdquo; policy — killing people based on behavioral patterns rather than known identity —
          SKYNET may have contributed to the deaths of thousands of innocent people.
        </p>
        <p className="text-stone-700">
          Patrick Ball, a data scientist at the Human Rights Data Analysis Group, reviewed the SKYNET
          methodology and concluded: <em>&ldquo;The NSA&apos;s SKYNET program may be killing thousands of
          innocent people.&rdquo;</em> The program was fed into targeting decisions for drone strikes in
          Pakistan. The people killed by these decisions were never identified. Their names will never be known.
        </p>
      </div>

      {/* The Hellfire R9X */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Hellfire R9X: The &ldquo;Ninja Bomb&rdquo;</h2>
        <p className="text-stone-700 mb-4">
          In 2017, the US developed a classified variant of the Hellfire missile designated the <strong>AGM-114
          R9X</strong>, colloquially known as the &ldquo;ninja bomb&rdquo; or &ldquo;flying Ginsu.&rdquo; Instead
          of an explosive warhead, the R9X deploys <strong>six extendable blades</strong> moments before impact,
          essentially turning the missile into a 100-pound kinetic blade that slices through its target.
        </p>
        <p className="text-stone-700 mb-4">
          The weapon was developed to reduce &ldquo;collateral damage&rdquo; — killing the intended target
          without the blast radius that kills bystanders. It has been used in strikes in Syria, Yemen, Afghanistan,
          and reportedly in the 2022 killing of al-Qaeda leader Ayman al-Zawahiri in Kabul. The strike that
          killed Zawahiri reportedly left the building he was standing on largely intact, with his family
          inside unharmed.
        </p>
        <p className="text-stone-700">
          The R9X&apos;s existence raises a disturbing question: if a precision weapon that kills only the
          intended target was available, why were thousands of conventional Hellfires — with blast radii that
          kill everyone nearby — used in strikes that killed hundreds of civilians? The answer is that precision
          was always possible. It was simply not prioritized.
        </p>
      </div>

      {/* Countries bombed without declaration */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Countries Bombed by Drones Without a Declaration of War</h2>
        <p className="text-stone-700 mb-4">
          The US has conducted drone strikes in at least <strong>7 countries</strong> — none of which involved
          a congressional declaration of war, and most of which were conducted without specific congressional
          authorization:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {[
            { country: 'Pakistan', status: 'No declaration. No AUMF for Pakistan. CIA program — officially denied by the US government for years.' },
            { country: 'Yemen', status: 'No declaration. 2001 AUMF stretched to cover AQAP. First strike: 2002 (killed a US citizen).' },
            { country: 'Somalia', status: 'No declaration. AUMF stretched to cover al-Shabaab (didn\'t exist on 9/11).' },
            { country: 'Libya', status: 'No declaration. No AUMF. Obama called it "not hostilities." Bombed during 2011 NATO campaign and ongoing CT strikes.' },
            { country: 'Afghanistan', status: '2001 AUMF. The original and most active drone theater. Last strike killed 10 civilians (Aug 2021).' },
            { country: 'Iraq & Syria', status: '2001/2002 AUMFs. Anti-ISIS campaign. Hundreds of documented civilian casualties in Mosul and Raqqa.' },
          ].map(c => (
            <div key={c.country} className="bg-stone-50 rounded-lg p-4">
              <p className="font-semibold text-primary">{c.country}</p>
              <p className="text-sm text-stone-600">{c.status}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700">
          The Constitution gives Congress alone the power to declare war. The drone program has killed people
          in 7+ countries under legal authorities that range from stretched to nonexistent. No member of
          Congress ever voted to authorize drone strikes in Pakistan, Yemen, or Somalia. The American people
          were never asked. The people being bombed were never consulted. This is governance by assassination.
        </p>
      </div>

      {/* Living Under Drones */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Living Under Drones: The Psychological Toll</h2>
        <p className="text-stone-300 mb-4">
          In 2012, Stanford Law School and NYU School of Law published <em>Living Under Drones</em>, a
          groundbreaking report based on interviews with Pakistani civilians in Waziristan. Their findings
          painted a picture of communities living in perpetual terror:
        </p>
        <div className="space-y-4 mb-4">
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-stone-300 italic">
              &ldquo;God knows whether they&apos;ll strike us again or not. But they&apos;re always surveilling
              us, they&apos;re always over us, and you never know when they&apos;re going to strike.&rdquo;
            </p>
            <p className="text-stone-500 text-sm mt-1">— Pakistani civilian, Living Under Drones report</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-stone-300 italic">
              &ldquo;Everyone is scared all the time. When we&apos;re sitting together to have a meal, we
              think we might be struck. When you can hear the drone circling in the sky, you think it
              might strike you. We&apos;re always scared. We always have this fear.&rdquo;
            </p>
            <p className="text-stone-500 text-sm mt-1">— Anonymous interviewee, Waziristan</p>
          </div>
        </div>
        <p className="text-stone-300 mb-4">
          The report documented how the constant presence of drones had transformed daily life: children
          were afraid to go to school. Adults were afraid to gather for funerals, weddings, or communal
          meals — all of which had been targeted by strikes. People avoided gathering in groups larger
          than three. Psychological symptoms — PTSD, anxiety, depression, insomnia — were pervasive
          across entire communities.
        </p>
        <p className="text-stone-300">
          An estimated <strong>8-12 million people</strong> in Pakistan, Yemen, and Somalia have lived
          under the persistent presence of armed American drones. They are, effectively, living under
          a permanent state of siege by a country most of them will never visit, governed by people
          who have never heard their names.
        </p>
      </div>

      {/* The Libertarian Case */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-amber-800">The Libertarian Case Against Drone Warfare</h2>
        <p className="text-stone-700 mb-4">
          The drone program is a libertarian&apos;s nightmare: unchecked executive power, extrajudicial
          killing, no due process, no congressional authorization, no judicial review, and the creation
          of a permanent, invisible war that the public never voted for and can never end.
        </p>
        <blockquote className="border-l-4 border-amber-700 pl-4 text-stone-600 italic mb-4">
          &ldquo;If you allow the government to kill American citizens without due process overseas, eventually
          that power will be used at home. The Bill of Rights doesn&apos;t have a geographic limitation.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Senator Rand Paul, during his 13-hour filibuster against drone strikes, March 6, 2013</span>
        </blockquote>
        <p className="text-stone-700 mb-4">
          Rand Paul&apos;s 2013 filibuster — lasting <strong>12 hours and 52 minutes</strong> — was specifically
          about the drone program. He demanded that the Obama administration confirm it would not use drones to
          kill American citizens on American soil. The administration initially refused to answer. Paul&apos;s
          filibuster drew bipartisan support and briefly made drone policy a mainstream political issue.
        </p>
        <blockquote className="border-l-4 border-amber-700 pl-4 text-stone-600 italic mb-4">
          &ldquo;The power to kill a citizen without a trial is the most dangerous power a government can
          possess. Today it&apos;s used against people we&apos;re told are terrorists. Tomorrow it could
          be used against anyone the government designates as an enemy.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Ron Paul</span>
        </blockquote>
        <p className="text-stone-700">
          The Fifth Amendment states that no person shall &ldquo;be deprived of life, liberty, or property,
          without due process of law.&rdquo; The drone program has killed at least three American citizens
          without any form of due process. If the government can kill its own citizens without a trial based
          on secret evidence reviewed by no court, the Constitution has no meaning.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources &amp; Further Reading</h2>
        <div className="space-y-2 text-sm text-stone-600">
          <p>• <strong>Bureau of Investigative Journalism</strong> — Primary drone strike database: Pakistan, Yemen, Somalia, Afghanistan. <Link href="https://www.thebureauinvestigates.com/projects/drone-war" className="text-red-800 hover:underline">thebureauinvestigates.com</Link></p>
          <p>• <strong>New America Foundation</strong> — Drone strike data and analysis. <Link href="https://www.newamerica.org/international-security/reports/americas-counterterrorism-wars/" className="text-red-800 hover:underline">newamerica.org</Link></p>
          <p>• Stanford/NYU — <em>Living Under Drones</em> (2012). First comprehensive report on the human impact of drone strikes in Pakistan.</p>
          <p>• Scahill, Jeremy — <em>The Assassination Complex</em> (2016). Based on leaked documents about the drone program.</p>
          <p>• The Intercept — &ldquo;The Drone Papers&rdquo; (2015). Leaked documents on targeted killing operations.</p>
          <p>• Stimson Center — Task Force Report on US Drone Policy (2015).</p>
          <p>• Reprieve — Legal organization documenting drone strike casualties and representing drone strike victims.</p>
          <p>• Airwars — Monitoring and assessing civilian harm from international airstrikes. <Link href="https://airwars.org" className="text-red-800 hover:underline">airwars.org</Link></p>
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• Obama was awarded the <strong>Nobel Peace Prize</strong> in 2009. He authorized 563 drone strikes and maintained a personal kill list.</li>
          <li>• Trump revoked the requirement to report civilian casualties — making drone deaths <strong>officially invisible</strong>.</li>
          <li>• The term &ldquo;<strong>bug splat</strong>&rdquo; was used internally to refer to people killed by drone strikes — named after the splatter pattern on the infrared screen.</li>
          <li>• Drone strikes cost <strong>$3-4 million each</strong> (missile + flight time + intelligence). The US spent an estimated $50+ billion on drone operations since 2001.</li>
          <li>• The military classifies <strong>all military-age males</strong> killed in strikes as combatants by default — inflating &ldquo;militant&rdquo; counts and hiding civilian deaths.</li>
          <li>• <strong>Wedding parties</strong> have been hit by US drone strikes at least 8 documented times across Afghanistan, Yemen, and Pakistan.</li>
          <li>• Former drone operator Brandon Bryant was given a <strong>scorecard: 1,626 kills</strong>. He has severe PTSD and has become an outspoken critic of the program.</li>
        </ul>
      </div>

      {/* Bottom line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <blockquote className="border-l-4 border-red-500 pl-4 mb-4 text-stone-300 italic">
          &ldquo;We have to be careful that we don&apos;t end up creating more enemies than we take off the
          battlefield. That to me is the real danger.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— General Stanley McChrystal, former commander of US forces in Afghanistan</span>
        </blockquote>
        <p className="text-stone-300 mb-4">
          The drone program was sold as precision warfare — clean, surgical, minimal collateral damage.
          In reality, it has killed thousands of civilians, traumatized millions more, created new terrorist
          recruits faster than it eliminates existing ones, operated outside any meaningful legal framework,
          killed American citizens without trial, and given the president unchecked power to order assassinations
          anywhere on Earth.
        </p>
        <p className="text-stone-300 mb-4">
          Worst of all, by eliminating the political costs of war — no casualties, no draft, no debate — drones
          have made permanent, invisible war not just possible but inevitable. When killing is painless for the
          country doing the killing, there is nothing to stop it from going on forever.
        </p>
        <p className="text-white font-semibold text-lg">
          The drones are still flying. The kill list is still active. And nobody voted for any of it.
        </p>
      </div>

      {/* Related */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/analysis/blowback" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Blowback →</h3>
          <p className="text-stone-500 text-sm">How drone strikes create more enemies than they kill</p>
        </Link>
        <Link href="/analysis/war-on-terror" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The War on Terror →</h3>
          <p className="text-stone-500 text-sm">$8 trillion and the drone program that sustained it</p>
        </Link>
        <Link href="/analysis/congressional-authority" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Who Decides? →</h3>
          <p className="text-stone-500 text-sm">60 words that authorized 25 years of killing</p>
        </Link>
        <Link href="/analysis/human-cost" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Human Cost →</h3>
          <p className="text-stone-500 text-sm">Civilians, veterans, and the toll of invisible war</p>
        </Link>
        <Link href="/casualties" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Casualty Data →</h3>
          <p className="text-stone-500 text-sm">Deaths by conflict, country, and year</p>
        </Link>
        <Link href="/analysis/iran-2026" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 2026 →</h3>
          <p className="text-stone-500 text-sm">The latest escalation — drone warfare at industrial scale</p>
        </Link>
      </div>

      <BackToTop />
    </div>
  )
}
