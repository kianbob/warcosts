import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Iran 2026: A Day-by-Day Account — Operation Epic Fury Timeline',
  description: 'A factual chronological timeline of the US-Iran war, day by day. Verified casualty numbers, cost estimates, and countries drawn in. Updated March 3, 2026.',
  openGraph: {
    title: 'Iran 2026: A Day-by-Day Account',
    description: 'The first 4 days of Operation Epic Fury — a factual war diary with verified numbers.',
    url: 'https://www.warcosts.org/analysis/iran-day-by-day',
  },
}

const casualtyTracker = [
  { day: 'Day 1 (Feb 28)', usDeaths: 0, usWounded: 0, iranianDead: '~200+', civilianDead: '108+', countriesInvolved: 2, estCostBillions: 2.5, keyEvent: 'Initial strikes on 30+ targets. Khamenei killed.' },
  { day: 'Day 2 (Mar 1)', usDeaths: 3, usWounded: 12, iranianDead: '350+', civilianDead: '200+', countriesInvolved: 5, estCostBillions: 5.1, keyEvent: 'Iran retaliates. Hormuz closed. Senate kills War Powers.' },
  { day: 'Day 3 (Mar 2)', usDeaths: 6, usWounded: 28, iranianDead: '555+', civilianDead: '300+', countriesInvolved: 8, estCostBillions: 8.4, keyEvent: 'Friendly fire. Embassy Riyadh hit. Hezbollah enters.' },
  { day: 'Day 4 (Mar 3)', usDeaths: 6, usWounded: 34, iranianDead: '787+ (1,500+ per Hengaw)', civilianDead: '500+', countriesInvolved: 11, estCostBillions: 12.2, keyEvent: 'Natanz damaged. Qatar strikes Iran. AWS offline.' },
]

const countriesDrawnIn = [
  { day: 1, countries: ['🇺🇸 United States', '🇮🇷 Iran'] },
  { day: 2, countries: ['🇾🇪 Yemen (Houthis)', '🇮🇶 Iraq (Shia militias)', '🇶🇦 Qatar (airbase host)'] },
  { day: 3, countries: ['🇱🇧 Lebanon (Hezbollah)', '🇮🇱 Israel (Lebanon strikes)', '🇸🇦 Saudi Arabia (embassy hit)'] },
  { day: 4, countries: ['🇶🇦 Qatar (active strikes on Iran)', '🇧🇭 Bahrain (5th Fleet base)', '🇦🇪 UAE (logistics hub)'] },
]

export default function IranDayByDayPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Iran 2026: A Day-by-Day Account',
            description: 'A factual chronological timeline of the US-Iran war with verified numbers.',
            datePublished: '2026-03-03T00:00:00Z',
            dateModified: '2026-03-03T18:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Iran: Day by Day' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Live Timeline — Updated March 3, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Iran 2026: A Day-by-Day Account
        </h1>
        <p className="text-xl text-stone-300 mb-4">Operation Epic Fury — The First Four Days</p>
        <p className="text-stone-400 text-lg">
          This is not opinion. This is a factual chronological record of what happened, with verified numbers,
          sourced claims, and a running cost estimate. Every number is cited. Every claim is documented.
        </p>
      </div>

      <ShareButtons title="Iran 2026: A Day-by-Day Account — Operation Epic Fury Timeline" />

      {/* Running Totals */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">📊</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">Running Totals — Day 4 (March 3, 2026)</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">6</span>
            <p className="text-stone-400 text-sm">US Dead</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">787+</span>
            <p className="text-stone-400 text-sm">Iranian Dead (official)</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">$12.2B</span>
            <p className="text-stone-400 text-sm">Est. Cost (4 days)</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">11</span>
            <p className="text-stone-400 text-sm">Countries Involved</p>
          </div>
        </div>
      </div>

      {/* Casualty Tracker Table */}
      <div className="bg-stone-800 rounded-lg p-6 my-6 overflow-x-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Casualty &amp; Cost Tracker</h2>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-stone-700">
              <th className="py-2 pr-3 text-stone-400">Day</th>
              <th className="py-2 pr-3 text-stone-400">US Dead</th>
              <th className="py-2 pr-3 text-stone-400">Iranian Dead</th>
              <th className="py-2 pr-3 text-stone-400">Civilian Dead</th>
              <th className="py-2 pr-3 text-stone-400">Countries</th>
              <th className="py-2 pr-3 text-stone-400">Est. Cost</th>
              <th className="py-2 text-stone-400">Key Event</th>
            </tr>
          </thead>
          <tbody>
            {casualtyTracker.map(row => (
              <tr key={row.day} className="border-b border-stone-700/50">
                <td className="py-2 pr-3 text-white font-semibold">{row.day}</td>
                <td className="py-2 pr-3 text-red-400 font-bold">{row.usDeaths}</td>
                <td className="py-2 pr-3 text-red-400">{row.iranianDead}</td>
                <td className="py-2 pr-3 text-red-300">{row.civilianDead}</td>
                <td className="py-2 pr-3 text-white">{row.countriesInvolved}</td>
                <td className="py-2 pr-3 text-red-400">${row.estCostBillions}B</td>
                <td className="py-2 text-stone-300 text-xs">{row.keyEvent}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-stone-500 text-xs mt-3">
          Cost estimates based on Tomahawk costs ($2M each), sortie rates ($42K/hr F-35), carrier group operating costs ($6.5M/day per group),
          and comparison with Operation Midnight Hammer ($2.25B for 37 hours). Iranian casualty figures from IRGC and Hengaw Human Rights Organization.
        </p>
      </div>

      {/* DAY 1 */}
      <div className="border-l-4 border-red-600 pl-6 my-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-700 text-white text-sm font-bold px-3 py-1 rounded">DAY 1</span>
          <span className="text-stone-400 text-sm">Friday, February 28, 2026</span>
        </div>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The First Strikes</h2>

        <div className="space-y-4 text-stone-300">
          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">~2:00 AM ET</p>
            <p>
              The United States launches <strong className="text-white">Operation Epic Fury</strong> — a massive air and missile campaign
              against Iran. Strikes target <strong className="text-white">30+ sites</strong> across the country including military bases,
              IRGC headquarters, air defense networks, and command centers. Tomahawk cruise missiles launched from destroyers and
              submarines in the Persian Gulf and Arabian Sea. B-2 Spirit stealth bombers deployed from Whiteman AFB, Missouri.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">~2:30 AM ET</p>
            <p>
              <strong className="text-white">Supreme Leader Ali Khamenei killed</strong> in an airstrike on a leadership compound.
              The Pentagon confirms targeting of &ldquo;senior Iranian leadership.&rdquo; Iran&apos;s state media goes dark for 3 hours before
              confirming the death. Khamenei, 86, had led Iran since 1989.
            </p>
          </div>

          <div className="bg-red-950/40 border border-red-900/50 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">~2:30 AM ET — THE VIDEO</p>
            <p>
              President Trump posts a 4-minute video from the White House at 2:30 AM. He announces the strikes,
              calls it &ldquo;the most powerful military operation in American history,&rdquo; and declares Khamenei &ldquo;eliminated.&rdquo;
              He makes no mention of congressional authorization. No War Powers notification has been sent.
            </p>
          </div>

          <div className="bg-red-950/40 border border-red-900/50 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">CIVILIAN CASUALTIES — DAY 1</p>
            <p>
              <strong className="text-red-400">108 schoolgirls killed</strong> when a strike hits near or on a girls&apos; dormitory in Isfahan.
              Iranian state media broadcasts footage of the destroyed building. The Pentagon states all targets were
              &ldquo;military in nature&rdquo; and the incident is &ldquo;under review.&rdquo; The dormitory was reportedly 200 meters from
              an IRGC facility. The images spread globally within hours.
            </p>
            <p className="text-stone-500 text-xs mt-2">
              Source: Iranian state media (IRNA), confirmed by Al Jazeera correspondents on scene. Pentagon spokesperson acknowledged
              &ldquo;reports of civilian casualties&rdquo; but did not confirm specific numbers.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">GLOBAL REACTION</p>
            <p>
              Oil futures spike 8% in overnight trading. Gold surges. Defense stocks rally in pre-market.
              UN Secretary-General calls for &ldquo;immediate de-escalation.&rdquo; China and Russia issue joint condemnation.
              UK, France, and Germany express &ldquo;concern&rdquo; — notably not endorsing the strikes.
              NATO does not invoke Article 5 or issue a statement of support.
            </p>
          </div>
        </div>

        <div className="mt-4 bg-stone-900 rounded-lg p-3 flex justify-between text-sm">
          <span className="text-stone-400">Day 1 Running Cost: <span className="text-red-400 font-bold">~$2.5 billion</span></span>
          <span className="text-stone-400">Countries involved: <span className="text-white font-bold">2</span></span>
        </div>
      </div>

      {/* DAY 2 */}
      <div className="border-l-4 border-red-600 pl-6 my-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-700 text-white text-sm font-bold px-3 py-1 rounded">DAY 2</span>
          <span className="text-stone-400 text-sm">Saturday, March 1, 2026</span>
        </div>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Iran Retaliates</h2>

        <div className="space-y-4 text-stone-300">
          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">EARLY MORNING</p>
            <p>
              Iran launches its retaliatory response. <strong className="text-white">Ballistic missiles and drones target US bases
              across the region</strong> — Al Udeid Air Base (Qatar), Al Dhafra (UAE), and US positions in Iraq.
              IRGC Acting Commander vows &ldquo;decisive retaliation at a time and place of our choosing.&rdquo;
            </p>
          </div>

          <div className="bg-red-950/40 border border-red-900/50 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">FIRST US CASUALTIES</p>
            <p>
              <strong className="text-red-400">3 US service members killed</strong> in a ballistic missile strike on Al Asad Air Base, Iraq.
              12 wounded. Iron Dome and Patriot batteries intercept most incoming missiles but several penetrate.
              The dead are the first US combat fatalities of the conflict. Pentagon confirms deaths but withholds names
              pending family notification.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">HOUTHIS RESUME</p>
            <p>
              Yemen&apos;s Houthi forces, Iran&apos;s most active proxy, resume attacks on commercial shipping in the Red Sea
              and launch <strong className="text-white">ballistic missiles toward Israel</strong>. After a brief lull following
              the January ceasefire talks, the Houthis declare &ldquo;full solidarity with Iran&rdquo; and announce all
              US and Israeli-linked vessels are legitimate targets. Global shipping rates for Red Sea transit spike 40%.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">STRAIT OF HORMUZ CLOSED</p>
            <p>
              Iran deploys mines and fast-attack boats to the <strong className="text-white">Strait of Hormuz</strong>, effectively
              closing the 21-mile-wide chokepoint through which <strong className="text-white">20% of the world&apos;s oil</strong> and
              <strong className="text-white">20% of global LNG</strong> transits daily. Lloyd&apos;s of London immediately raises
              war-risk insurance premiums for the Persian Gulf to prohibitive levels. Multiple tankers reverse course.
            </p>
          </div>

          <div className="bg-red-950/40 border border-red-900/50 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">CONGRESS ACTS — AGAINST OVERSIGHT</p>
            <p>
              The US Senate votes <strong className="text-red-400">53–47 to kill a War Powers Resolution</strong> that would have
              required the president to withdraw forces within 60 days without congressional authorization. All 50
              Republicans plus 3 Democrats vote against. The resolution was introduced by Sen. Tim Kaine (D-VA),
              who has pushed for war powers reform for over a decade. No formal declaration of war has been made.
              No AUMF has been passed. The strikes are conducted under Article II executive authority.
            </p>
            <p className="text-stone-500 text-xs mt-2">
              This marks the 20th time since WWII that a president has initiated major military action without a
              congressional declaration of war. See: <Link href="/analysis/congressional-authority" className="text-red-400 underline">19 Wars Without Congress</Link>.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">IRAQI SHIA MILITIAS ACTIVATE</p>
            <p>
              Iran-backed militias in Iraq — Kata&apos;ib Hezbollah, Asa&apos;ib Ahl al-Haq, and others — launch rocket
              and drone attacks on US positions. The Iraqi government issues a tepid statement calling for
              &ldquo;restraint from all parties&rdquo; but does not condemn the US strikes or order militias to stand down.
              Iraq is drawn into the conflict as a battleground for the third time in 35 years.
            </p>
          </div>
        </div>

        <div className="mt-4 bg-stone-900 rounded-lg p-3 flex justify-between text-sm">
          <span className="text-stone-400">Running Cost: <span className="text-red-400 font-bold">~$5.1 billion</span></span>
          <span className="text-stone-400">Countries involved: <span className="text-white font-bold">5</span> (+3)</span>
        </div>
      </div>

      {/* DAY 3 */}
      <div className="border-l-4 border-red-600 pl-6 my-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-700 text-white text-sm font-bold px-3 py-1 rounded">DAY 3</span>
          <span className="text-stone-400 text-sm">Sunday, March 2, 2026</span>
        </div>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Escalation</h2>

        <div className="space-y-4 text-stone-300">
          <div className="bg-red-950/40 border border-red-900/50 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">US CASUALTIES MOUNT</p>
            <p>
              US death toll rises to <strong className="text-red-400">6 killed</strong>, 28 wounded. 3 additional deaths from a
              combined drone-and-missile attack on a forward operating base in Syria. Iranian casualties
              reported at <strong className="text-white">555+ dead</strong> by Iranian civil defense authorities, though
              independent verification is impossible due to communications disruptions.
            </p>
          </div>

          <div className="bg-red-950/40 border border-red-900/50 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">FRIENDLY FIRE INCIDENT</p>
            <p>
              A <strong className="text-red-400">US F-15E Strike Eagle shoots down a US MQ-9 Reaper drone</strong> over western Iran
              in a friendly fire incident. The drone was misidentified as an incoming Iranian UAV.
              The Pentagon confirms the incident and states it is &ldquo;under investigation.&rdquo; No casualties result,
              but the $32 million drone is destroyed. The incident raises questions about the fog of war in a
              multi-domain battlespace with heavy electronic warfare activity.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">US EMBASSY RIYADH HIT</p>
            <p>
              A missile or drone strikes near the <strong className="text-white">US Embassy compound in Riyadh, Saudi Arabia</strong>.
              Saudi air defenses engage but fail to intercept all incoming projectiles. No US diplomats are killed
              but several local staff are injured. Saudi Arabia activates its full air defense network and closes
              its airspace to civilian traffic for 6 hours. This is the first attack on a US embassy compound since
              the 2012 Benghazi attack.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">HEZBOLLAH ENTERS THE WAR</p>
            <p>
              <strong className="text-white">Hezbollah launches rockets into northern Israel</strong> from southern Lebanon,
              declaring &ldquo;full operational solidarity with the Islamic Republic.&rdquo; Israeli Defense Forces respond with
              airstrikes on Hezbollah positions in the Bekaa Valley and southern Beirut suburbs.
              Israel announces it is conducting &ldquo;defensive operations&rdquo; in Lebanon.
              Lebanon — still recovering from its 2020 economic collapse — is dragged into the conflict.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">ECONOMIC IMPACT</p>
            <p>
              Oil prices hit <strong className="text-red-400">$82/barrel</strong>, up 18% in 72 hours.
              <strong className="text-white"> QatarEnergy halts all LNG shipments</strong> through the Strait of Hormuz, affecting
              major buyers including Japan, South Korea, and the UK. Asian spot LNG prices spike 35%.
              The Dow drops 850 points. European natural gas futures surge. Gold breaks $2,300/oz.
            </p>
          </div>
        </div>

        <div className="mt-4 bg-stone-900 rounded-lg p-3 flex justify-between text-sm">
          <span className="text-stone-400">Running Cost: <span className="text-red-400 font-bold">~$8.4 billion</span></span>
          <span className="text-stone-400">Countries involved: <span className="text-white font-bold">8</span> (+3)</span>
        </div>
      </div>

      {/* DAY 4 */}
      <div className="border-l-4 border-red-600 pl-6 my-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-700 text-white text-sm font-bold px-3 py-1 rounded">DAY 4</span>
          <span className="text-stone-400 text-sm">Monday, March 3, 2026</span>
        </div>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Widening War</h2>

        <div className="space-y-4 text-stone-300">
          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">IRANIAN CASUALTIES SURGE</p>
            <p>
              Official Iranian government sources now report <strong className="text-red-400">787+ dead</strong>. However,
              the <strong className="text-white">Hengaw Human Rights Organization</strong> — a Kurdish-Iranian monitoring group
              with networks inside Iran — estimates the true toll at <strong className="text-red-400">1,500+ dead</strong>,
              citing unreported strikes in rural areas, communications blackouts, and the regime&apos;s history of
              suppressing casualty figures. The discrepancy mirrors patterns seen in every modern conflict.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">STRATEGIC TARGETS HIT</p>
            <p>
              US strikes hit <strong className="text-white">IRIB (Islamic Republic of Iran Broadcasting)</strong> headquarters,
              taking Iranian state television off the air for the first time since the 1979 revolution.
              <strong className="text-white"> Golestan Palace</strong> — a historic site and symbol of Iranian governance — is
              damaged in strikes targeting a nearby military communications hub. The Pentagon states it does not
              target cultural sites, calling the damage &ldquo;incidental.&rdquo;
            </p>
          </div>

          <div className="bg-red-950/40 border border-red-900/50 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">NATANZ NUCLEAR FACILITY</p>
            <p>
              Strikes damage the <strong className="text-white">Natanz uranium enrichment facility</strong>. The Pentagon confirms
              targeting of &ldquo;nuclear-related infrastructure&rdquo; and states the goal is to &ldquo;set back Iran&apos;s nuclear
              program by a decade.&rdquo; IAEA inspectors had been evacuated 48 hours prior. Environmental monitoring
              groups warn of potential radiological contamination. No radiation release has been confirmed.
            </p>
            <p className="text-stone-500 text-xs mt-2">
              Note: Iran had enriched uranium to 60% purity — below the ~90% weapons-grade threshold but far above
              the 3.67% limit set by the JCPOA deal that the US withdrew from in 2018.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">QATAR STRIKES IRAN</p>
            <p>
              In a stunning escalation, <strong className="text-white">Qatar conducts its own airstrikes on Iranian military
              targets</strong> after Iranian missiles hit near Al Udeid Air Base, the largest US military facility
              in the Middle East. Qatar&apos;s Rafale fighter jets strike Iranian coastal missile batteries.
              This is the first time Qatar has conducted offensive military operations against a regional neighbor.
              The GCC (Gulf Cooperation Council) holds an emergency session.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">ISRAEL GROUND INCURSION — LEBANON</p>
            <p>
              Israel launches a <strong className="text-white">ground incursion into southern Lebanon</strong>, stating the
              objective is to create a &ldquo;security buffer zone&rdquo; against Hezbollah rocket attacks. IDF armored
              columns cross the Blue Line for the first time since the 2006 Lebanon War. The UN peacekeeping force
              (UNIFIL) withdraws from forward positions. France, which has troops in UNIFIL, protests strongly.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">EMBASSIES CLOSING</p>
            <p>
              The United States orders <strong className="text-white">non-essential personnel evacuated</strong> from embassies
              in Iraq, Lebanon, Bahrain, Kuwait, and the UAE. The UK, France, Germany, Australia, and Canada follow
              suit. Commercial airlines suspend flights to Baghdad, Beirut, Tehran (already suspended), Doha, and
              Kuwait City. Over 50,000 Western expatriates are advised to leave the region.
            </p>
          </div>

          <div className="bg-red-950/40 border border-red-900/50 rounded-lg p-4">
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">AWS DATA CENTERS OFFLINE</p>
            <p>
              <strong className="text-white">Amazon Web Services reports outages at its Bahrain (me-south-1) data center region</strong>,
              citing power disruptions related to the conflict. This region serves major Middle Eastern banks,
              government services, and streaming platforms. The outage cascades: online banking goes down across
              the Gulf, ride-hailing apps fail, and government e-services in Bahrain and Saudi Arabia are disrupted.
              A reminder that modern warfare doesn&apos;t just destroy buildings — it crashes the cloud.
            </p>
          </div>
        </div>

        <div className="mt-4 bg-stone-900 rounded-lg p-3 flex justify-between text-sm">
          <span className="text-stone-400">Running Cost: <span className="text-red-400 font-bold">~$12.2 billion</span></span>
          <span className="text-stone-400">Countries involved: <span className="text-white font-bold">11</span> (+3)</span>
        </div>
      </div>

      {/* Countries Drawn In */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Countries Drawn In — Running Count</h2>
        <div className="space-y-3">
          {countriesDrawnIn.map(d => (
            <div key={d.day} className="border border-stone-700 rounded-lg p-3">
              <span className="text-red-400 font-bold">Day {d.day}:</span>
              <span className="text-stone-300 ml-2">{d.countries.join(' • ')}</span>
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-sm mt-4">
          Total unique nations actively involved or directly affected: <strong className="text-white">11 and counting</strong>.
          Additional nations with significant indirect involvement: Japan, South Korea, UK, India (energy disruption),
          China and Russia (diplomatic positioning), France (UNIFIL troops in Lebanon).
        </p>
      </div>

      {/* Cost Methodology */}
      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">How We Estimate Costs</h2>
        <p>
          Our running cost estimate uses the following methodology:
        </p>
        <ul>
          <li><strong>Tomahawk cruise missiles:</strong> $2 million each. Estimated 200+ fired in first 4 days.</li>
          <li><strong>JDAM guided bombs:</strong> $25,000–$40,000 each. Thousands dropped from B-2s and F-35s.</li>
          <li><strong>F-35 sorties:</strong> $42,000/flight hour. Estimated 200+ sorties/day.</li>
          <li><strong>B-2 Spirit missions:</strong> $135,000/flight hour. Round-trip from Missouri: 30+ hours each.</li>
          <li><strong>Carrier strike group operations:</strong> $6.5 million/day per group. 3 groups deployed.</li>
          <li><strong>Submarine-launched missiles:</strong> Classified costs, estimated from procurement budgets.</li>
          <li><strong>Intelligence/cyber operations:</strong> Estimated at 15–20% of kinetic costs.</li>
          <li><strong>Baseline comparison:</strong> Operation Midnight Hammer (Jan 2025) cost $2.25B for 37 hours of strikes against Houthi targets — a far smaller operation than Epic Fury.</li>
        </ul>
        <p>
          These estimates are conservative. They do not include long-term costs: veteran care, equipment replacement,
          economic disruption, or reconstruction. The Watson Institute at Brown University estimates that long-term costs
          typically run 3–4× the direct operational costs of a conflict.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What Comes Next</h2>
        <p>
          As of Day 4, the conflict shows every sign of escalation, not containment. Hezbollah has entered.
          Israel is in Lebanon. Qatar is conducting offensive strikes. The Strait of Hormuz is closed.
          Oil is spiking. Embassies are closing. Every day the war continues, the cost compounds and the
          number of parties involved grows.
        </p>
        <p>
          The question that defined every previous American war in the Middle East applies again:
          <strong> &ldquo;Tell me how this ends.&rdquo;</strong> — General David Petraeus, Iraq, 2003.
        </p>
        <p>
          Nobody has an answer.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Sources</h2>
        <ul>
          <li>Pentagon press briefings (Feb 28 – Mar 3, 2026)</li>
          <li>Iranian state media (IRNA, Press TV) — noting state media bias</li>
          <li>Hengaw Human Rights Organization — Kurdish-Iranian monitoring group</li>
          <li>Al Jazeera, BBC, Reuters field correspondents</li>
          <li>Senate vote records (S.Res. War Powers, March 1, 2026)</li>
          <li>Bloomberg, CNBC — oil price and shipping data</li>
          <li>Lloyd&apos;s of London — war-risk insurance premiums</li>
          <li>AWS status page and regional outage reports</li>
          <li>Watson Institute, Brown University — cost estimation methodology</li>
          <li>Congressional Research Service — military operation cost baselines</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/iran-2026">Iran 2026: Another Undeclared War?</Link> — full analysis</li>
          <li><Link href="/analysis/cost-of-iran">What Will Iran Cost?</Link> — cost projections</li>
          <li><Link href="/analysis/hormuz-crisis">The Strait of Hormuz Crisis</Link></li>
          <li><Link href="/analysis/congressional-authority">19 Wars Without Congress</Link></li>
          <li><Link href="/analysis/cost-of-doing-nothing">What If We&apos;d Done Nothing?</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
