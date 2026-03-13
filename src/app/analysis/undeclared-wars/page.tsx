import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: "America's Undeclared Wars — How Presidents Bypassed Congress",
  description: 'Last declared war: 1942. Since then: Korea, Vietnam, Gulf War, Afghanistan, Iraq, Libya, Syria, Yemen, Iran — all without declarations. The War Powers Resolution is ignored by every president.',
  openGraph: {
    title: "America's Undeclared Wars: How Presidents Bypassed Congress",
    description: 'Congress has not declared war since 1942. Presidents have launched wars in 22+ countries anyway.',
    url: 'https://warcosts.org/analysis/undeclared-wars',
    type: 'article',
  },
}

const declaredWars = [
  { year: '1812', war: 'War of 1812', against: 'Great Britain', vote: 'House 79-49, Senate 19-13' },
  { year: '1846', war: 'Mexican-American War', against: 'Mexico', vote: 'House 174-14, Senate 40-2' },
  { year: '1898', war: 'Spanish-American War', against: 'Spain', vote: 'Unanimous in both chambers' },
  { year: '1917', war: 'World War I', against: 'Germany & Austria-Hungary', vote: 'House 373-50, Senate 82-6' },
  { year: '1941–42', war: 'World War II', against: 'Japan, Germany, Italy, Bulgaria, Hungary, Romania', vote: 'Near-unanimous (Jeannette Rankin sole dissent on Japan)' },
]

const undeclaredWars = [
  { year: '1950–53', war: 'Korean War', president: 'Truman', authorization: 'UN Security Council resolution. Truman called it a "police action." 36,574 Americans died in a "police action." Truman claimed UN authorization superseded constitutional requirements — a legal theory rejected by constitutional scholars but accepted by Congress\'s silence.', cost: '$389B (adjusted)', deaths: '36,574 US / ~3M total', constitutional: 'Truman never asked Congress. Set the precedent that presidents could wage major wars without a declaration. When Rep. Frederic Coudert introduced a resolution requiring Truman to ask Congress, it was defeated 263-138 in the House.' },
  { year: '1955–75', war: 'Vietnam War', president: 'Kennedy/Johnson/Nixon', authorization: 'Gulf of Tonkin Resolution (1964). Based on an incident that didn\'t happen as described — the second "attack" likely never occurred. NSA documents declassified in 2005 confirmed intelligence was manipulated. The vote: House 416-0, Senate 88-2 (Gruening & Morse dissenting).', cost: '$1T+ (adjusted)', deaths: '58,220 US / ~3.4M total', constitutional: 'Congress repealed Tonkin Resolution in 1971. Nixon kept fighting anyway. Congress finally cut funding in 1975. Defense Secretary McNamara later admitted: "It was wrong, terribly wrong."' },
  { year: '1983', war: 'Grenada Invasion', president: 'Reagan', authorization: 'None. Reagan invaded 2 days after the Beirut barracks bombing, widely seen as a distraction. "Operation Urgent Fury" lasted 4 days. Reagan claimed authority to protect American medical students — though the students were never in danger and opposed the invasion.', cost: '$135M', deaths: '19 US / 45 Grenadian civilians', constitutional: 'Congress not consulted. War Powers clock started retroactively. Operation ended before 60-day limit. House passed resolution condemning the invasion as a violation of international law.' },
  { year: '1989', war: 'Panama Invasion', president: 'Bush Sr.', authorization: 'None. Justified as protecting American lives and combating drug trafficking. Real target: Manuel Noriega, a former CIA asset who had outlived his usefulness. Noriega had been on the CIA payroll since the 1960s, paid $200,000/year as recently as 1986.', cost: '$163M', deaths: '23 US / 500-4,000 Panamanian civilians', constitutional: 'Noriega had been on the CIA payroll. The US invaded to arrest a man it had previously employed. The OAS condemned the invasion 20-1, with the US casting the sole opposing vote.' },
  { year: '1991', war: 'Gulf War (Iraq)', president: 'Bush Sr.', authorization: 'Congressional authorization (not a declaration). Vote: House 250-183, Senate 52-47 — passed by just 5 votes in the Senate. Bush Sr. claimed he didn\'t need congressional approval but sought it for political cover.', cost: '$102B ($61B from allies)', deaths: '383 US / 25,000-50,000 Iraqi', constitutional: 'Congress authorized but did not declare. The distinction matters — authorizations can be narrower and time-limited. Bush Sr. said he would have invaded even if Congress had voted no.' },
  { year: '1992–94', war: 'Somalia', president: 'Bush Sr./Clinton', authorization: 'UN Security Council resolution. Started as humanitarian mission, became combat after "Black Hawk Down" (Oct 1993). 18 Americans killed, 1,000+ Somalis killed in single battle. Mission changed from feeding starving people to hunting Mohamed Aidid.', cost: '$2.2B', deaths: '43 US / thousands Somali', constitutional: 'Mission creep without congressional authorization. Set the template for future interventions. Clinton withdrew after domestic pressure, not congressional action.' },
  { year: '1995/1999', war: 'Bosnia & Kosovo', president: 'Clinton', authorization: 'NATO authorization. Clinton explicitly stated he did not need congressional approval. House voted 213-213 (tie) on Kosovo — didn\'t even pass a resolution of support — and Clinton bombed anyway. 78 days of bombing, 38,000 sorties.', cost: '$30B+', deaths: '0 US combat deaths (air campaign only)', constitutional: 'A president waged a 78-day bombing campaign after Congress tied on whether to authorize it. First time NATO launched offensive operations without UN approval.' },
  { year: '2001–21', war: 'Afghanistan', president: 'Bush/Obama/Trump/Biden', authorization: '2001 AUMF (60 words). Never updated, never repealed, never re-debated. Used for 20 years across 4 presidents. Authored by Rep. Barbara Lee (D-CA) — who voted against it and was the only member of Congress to oppose the war.', cost: '$2.3T', deaths: '2,461 US / 176,000+ total', constitutional: 'The AUMF was a blank check. Congress voted once in 2001 and never revisited the authorization for 20 years. Used to justify operations in 80+ countries.' },
  { year: '2003–11', war: 'Iraq War', president: 'Bush/Obama', authorization: '2002 Iraq AUMF. Based on false claims about WMDs and Saddam-al Qaeda links. Both were known to be false or exaggerated by intelligence agencies before the vote. Senate vote: 77-23. House: 296-133.', cost: '$2.4T', deaths: '4,431 US / 300,000+ Iraqi', constitutional: 'Congress authorized based on intelligence it didn\'t verify. The Senate Intelligence Committee later found the case was built on lies. No WMDs found. No Saddam-Qaeda connection confirmed.' },
  { year: '2011', war: 'Libya', president: 'Obama', authorization: 'UN Security Council resolution. Obama called it a "kinetic military action" — not a war — to avoid War Powers requirements. 7-month bombing campaign, 26,500+ sorties. No post-conflict plan. Country remains in chaos.', cost: '$1.1B', deaths: '0 US / 1,100+ Libyan civilians', constitutional: 'Obama\'s own Office of Legal Counsel said it violated the War Powers Resolution. Obama overruled his own lawyers. Gaddafi killed Oct 2011 — no stable government since.' },
  { year: '2014–present', war: 'ISIS/Syria/Iraq', president: 'Obama/Trump/Biden', authorization: 'Obama cited the 2001 AUMF — written for 9/11 — to justify bombing ISIS, which didn\'t exist in 2001 and was at war WITH al-Qaeda. Legal scholars called this "the most implausible interpretation of the AUMF imaginable."', cost: '$100B+', deaths: 'Unknown US / 13,000+ civilians (Airwars estimate)', constitutional: 'A law written to target 9/11 perpetrators used against a group that was at war WITH al-Qaeda. Congress never debated or voted on ISIS operations.' },
  { year: '2015–present', war: 'Yemen (US-backed Saudi campaign)', president: 'Obama/Trump/Biden', authorization: 'No authorization. US provided intelligence, targeting data, mid-air refueling, and weapons. Saudi Arabia dropped US-made bombs on school buses, weddings, hospitals. When Congress passed a War Powers resolution to end involvement (2019), Trump vetoed it.', cost: '$10.7B in weapons sales', deaths: '377,000+ Yemeni (UN estimate) / 85,000 children starved', constitutional: 'Congress voted to stop the war. The President vetoed peace. The war continued. First successful use of War Powers Resolution — and it was ignored.' },
  { year: '2020', war: 'Iran (Soleimani Assassination)', president: 'Trump', authorization: 'None. Trump ordered the assassination of Qasem Soleimani, Iran\'s top general, on Iraqi soil without congressional approval. Claimed "imminent attack" but provided no evidence. Iraq condemned the operation as a violation of sovereignty.', cost: '$200M+ (logistics)', deaths: '10 (drone strike) / 176 (plane shot down in retaliation)', constitutional: 'Assassination of a foreign government official is an act of war. Congress wasn\'t consulted. Iran retaliated by striking US bases. Trump said he didn\'t need permission.' },
  { year: '2025–26', war: 'Iran (Operation Epic Fury)', president: 'Trump', authorization: 'None. No congressional vote before strikes began Feb 12, 2025. Senate killed War Powers resolution 53-47 after the bombing started. Cited "imminent threat" and "self-defense" after February Gulf of Hormuz incident.', cost: '$18.7B (first month)', deaths: '47 US / 8,400+ Iranian civilians', constitutional: 'Major combat operations launched against a sovereign nation without congressional approval. Iran struck back at US positions in Iraq, Syria. War continues as of publication.' },
]

export default function UndeclaredWarsPage() {
  const stats = loadData('stats.json')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Undeclared Wars' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          America&apos;s Undeclared Wars
        </h1>
        <p className="text-xl text-stone-300 mb-4">How Presidents Bypassed Congress</p>
        <p className="text-stone-400 text-lg">
          Article I, Section 8 of the Constitution is unambiguous: <em>&ldquo;The Congress shall have
          Power...To declare War.&rdquo;</em> Not the President. Not the Pentagon. Not the CIA. Congress.
          The Founders debated this explicitly and chose the legislature over the executive. The last
          time Congress formally declared war was <strong>1942</strong>. Since then, American presidents
          have launched wars in Korea, Vietnam, Iraq, Afghanistan, Libya, Syria, Yemen, Iran, and
          dozens of other countries — all without a declaration of war. Congress didn&apos;t just
          fail to check presidential war power. It voluntarily surrendered it.
        </p>
      </div>

      <ShareButtons title="America's Undeclared Wars: How Presidents Bypassed Congress" />

      {/* AI Overview */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">🤖 AI Overview</h2>
        <p className="text-stone-300 mb-3">
          The Constitution grants war power exclusively to Congress. Since WWII, every major US
          military action has been conducted without a formal declaration. This analysis traces the
          erosion of congressional war authority from Truman to Trump.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">1942</p>
            <p className="text-xs text-stone-400">Last declared war</p>
          </div>
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">5</p>
            <p className="text-xs text-stone-400">Total declared wars (ever)</p>
          </div>
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{stats.totalInterventions}</p>
            <p className="text-xs text-stone-400">Total military interventions</p>
          </div>
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">83 yrs</p>
            <p className="text-xs text-stone-400">Since last declaration</p>
          </div>
        </div>
      </div>

      {/* The Constitutional Design */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">What the Founders Intended</h2>
        <p className="text-stone-300 mb-4">
          The Founders were explicit. They had lived under a king who could declare war unilaterally,
          and they designed a system to prevent any American executive from having that power:
        </p>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-red-600 pl-4 text-stone-300 italic">
            &ldquo;The constitution supposes, what the History of all Governments demonstrates, that the
            Executive is the branch of power most interested in war, and most prone to it. It has
            accordingly with studied care vested the question of war in the Legislature.&rdquo;
            <span className="block text-sm text-stone-500 mt-1 not-italic">— James Madison, letter to Thomas Jefferson, 1798</span>
          </blockquote>
          <blockquote className="border-l-4 border-red-600 pl-4 text-stone-300 italic">
            &ldquo;The President is to be commander-in-chief of the army and navy of the United States.
            In this respect his authority would be nominally the same with that of the king of Great
            Britain, but in substance much inferior to it. It would amount to nothing more than the
            supreme command and direction of the military and naval forces...while that of the British
            king extends to the declaring of war and to the raising and regulating of fleets and armies —
            all which, by the Constitution under consideration, would appertain to the legislature.&rdquo;
            <span className="block text-sm text-stone-500 mt-1 not-italic">— Alexander Hamilton, Federalist No. 69</span>
          </blockquote>
          <blockquote className="border-l-4 border-red-600 pl-4 text-stone-300 italic">
            &ldquo;In no part of the constitution is more wisdom to be found, than in the clause which
            confides the question of war or peace to the legislature, and not to the executive department.&rdquo;
            <span className="block text-sm text-stone-500 mt-1 not-italic">— James Madison, Helvidius No. 1, 1793</span>
          </blockquote>
        </div>
        <p className="text-stone-300 mt-4">
          The design was intentional: the branch closest to the people — the one that faces elections
          every two years — must authorize sending citizens to die. If the war isn&apos;t popular enough
          for Congress to vote for it, it shouldn&apos;t happen.
        </p>
      </div>

      {/* The 5 Declared Wars */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Five Declared Wars</h2>
        <p className="text-stone-300 mb-4">
          In 248 years, Congress has formally declared war exactly five times:
        </p>
        <div className="space-y-2">
          {declaredWars.map(w => (
            <div key={w.year} className="flex items-center gap-4 border-b border-stone-700 pb-2">
              <span className="text-sm font-mono text-red-400 w-14 shrink-0">{w.year}</span>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">{w.war}</p>
                <p className="text-stone-400 text-xs">vs. {w.against} — {w.vote}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4">
          Everything since 1942 — Korea, Vietnam, Grenada, Panama, Gulf War, Somalia, Bosnia, Kosovo,
          Afghanistan, Iraq, Libya, Syria, Yemen, Iran — was fought without a declaration. The most
          important congressional power has been unused for 83 years.
        </p>
      </div>

      {/* The Undeclared Wars */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-6">The Undeclared Wars</h2>
      <div className="space-y-4 mb-8">
        {undeclaredWars.map(w => (
          <div key={w.year} className="bg-stone-900 rounded-xl border border-stone-800 p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{w.war}</h3>
              <span className="text-xs bg-red-900/50 text-red-400 px-2 py-1 rounded">{w.year}</span>
            </div>
            <p className="text-xs text-stone-500 mb-2">President: {w.president}</p>
            <div className="space-y-2">
              <div>
                <p className="text-xs font-semibold text-stone-500 uppercase mb-1">Authorization</p>
                <p className="text-sm text-stone-300">{w.authorization}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-2">
                <div className="bg-slate-800 rounded p-2">
                  <p className="text-xs text-stone-500">Cost</p>
                  <p className="text-sm text-red-400 font-semibold">{w.cost}</p>
                </div>
                <div className="bg-slate-800 rounded p-2">
                  <p className="text-xs text-stone-500">Deaths</p>
                  <p className="text-sm text-red-400 font-semibold">{w.deaths}</p>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded p-2">
                <p className="text-xs font-semibold text-red-400 uppercase mb-1">Constitutional Issue</p>
                <p className="text-sm text-stone-300">{w.constitutional}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* War Powers Resolution */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The War Powers Resolution (1973): Dead Letter</h2>
        <p className="text-stone-300 mb-4">
          After Vietnam, Congress tried to reassert its war power. The War Powers Resolution requires:
        </p>
        <div className="space-y-2 mb-4">
          {[
            'President must notify Congress within 48 hours of deploying forces',
            'Forces must withdraw within 60 days (90 with extension) without congressional authorization',
            'Congress can force withdrawal at any time by concurrent resolution',
          ].map((r, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-red-400 mt-0.5">•</span>
              <p className="text-stone-300 text-sm">{r}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-300 mb-4">
          In practice, <strong>every president since Nixon has considered it unconstitutional</strong>,
          and none has complied fully:
        </p>
        <div className="space-y-2">
          {[
            { president: 'Nixon', action: 'Vetoed it (overridden by Congress)' },
            { president: 'Reagan', action: 'Invaded Grenada without consulting Congress' },
            { president: 'Bush Sr.', action: 'Invaded Panama without authorization' },
            { president: 'Clinton', action: 'Bombed Kosovo for 78 days after Congress tied on authorization' },
            { president: 'Obama', action: 'Bombed Libya for 7 months, calling it a "kinetic military action"' },
            { president: 'Trump', action: 'Assassinated Soleimani without notification, attacked Iran without authorization' },
          ].map(p => (
            <div key={p.president} className="flex items-center gap-3 border-b border-stone-700 pb-2">
              <span className="text-white font-semibold text-sm w-20 shrink-0">{p.president}</span>
              <p className="text-stone-300 text-sm">{p.action}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4">
          The War Powers Resolution was supposed to prevent another Vietnam. Instead, it created a
          loophole: presidents now claim any 60-day military operation is automatically legal. The
          &ldquo;constraint&rdquo; became a permission slip.
        </p>
      </div>

      {/* The Financial Cost */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The $8 Trillion Price Tag of Undeclared Wars</h2>
        <p className="text-stone-300 mb-4">
          Since Korea, America's undeclared wars have cost taxpayers more than $8 trillion in 2023 dollars.
          That's larger than the annual GDP of every country except the United States and China.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-2">Top 5 Most Expensive Undeclared Wars</h3>
            <div className="space-y-2">
              {[
                { war: 'Afghanistan (2001-2021)', cost: '$2.3T' },
                { war: 'Iraq (2003-2011)', cost: '$2.4T' },
                { war: 'Vietnam (1955-1975)', cost: '$1.0T+' },
                { war: 'Korean War (1950-1953)', cost: '$389B' },
                { war: 'ISIS Campaign (2014-present)', cost: '$100B+' },
              ].map(w => (
                <div key={w.war} className="flex justify-between items-center border-b border-stone-600 pb-1">
                  <span className="text-stone-300 text-sm">{w.war}</span>
                  <span className="text-red-400 font-bold text-sm">{w.cost}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-2">What $8 Trillion Could Have Bought</h3>
            <div className="space-y-2">
              {[
                { item: 'Free college tuition for every American', cost: '40 years' },
                { item: 'Universal healthcare for 10 years', cost: '$8T' },
                { item: 'Rebuild every bridge, road, airport', cost: '4x over' },
                { item: 'End homelessness permanently', cost: '400x over' },
                { item: 'NASA budget for 400 years', cost: '$8T' },
              ].map(item => (
                <div key={item.item} className="flex justify-between items-center border-b border-stone-600 pb-1">
                  <span className="text-stone-300 text-sm">{item.item}</span>
                  <span className="text-green-400 font-bold text-sm">{item.cost}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-stone-400 text-sm">
          Cost data: Brown University Costs of War Project, Congressional Budget Office, National Priorities Project.
          Figures adjusted for inflation to 2023 dollars.
        </p>
      </div>

      {/* The Legal Loopholes */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">How Presidents Justify Undeclared War: The Legal Loopholes</h2>
        <p className="text-stone-300 mb-4">
          Every president since Truman has used the same constitutional dodges to bypass Congress.
          Here are the most common excuses — and why they don't hold up:
        </p>
        <div className="space-y-4">
          {[
            {
              excuse: 'Commander-in-Chief Powers',
              used: 'Every president since Truman',
              argument: 'Article II makes the president commander-in-chief, so he can deploy troops anywhere.',
              reality: 'The Founders explicitly distinguished between commanding existing forces and creating wars. Hamilton wrote: the president "would amount to nothing more than the supreme command and direction of the military and naval forces...while [declaring war] would appertain to the legislature."'
            },
            {
              excuse: 'UN Security Council Authorization',
              used: 'Korea, Libya, Somalia, Bosnia',
              argument: 'UN Charter supersedes Constitution. If the UN approves, congressional approval isn\'t needed.',
              reality: 'The UN Participation Act (1945) requires "special congressional approval" for UN military operations. This has been ignored in every case. International law cannot override the Constitution.'
            },
            {
              excuse: 'NATO Treaty Obligations',
              used: 'Bosnia, Kosovo, Libya',
              argument: 'NATO Article 5 creates automatic military obligations that bypass congressional approval.',
              reality: 'Article 5 requires each nation to respond "as it deems necessary." It doesn\'t mandate military action or override constitutional requirements. The Senate ratified NATO knowing Congress retained war power.'
            },
            {
              excuse: 'Authorization for Use of Military Force (AUMF)',
              used: '2001 AUMF for 22+ countries',
              argument: 'Congress gave blanket approval in 2001 for any anti-terrorism operations anywhere.',
              reality: 'The 2001 AUMF was written for 9/11 perpetrators, not ISIS (which didn\'t exist) or operations in Somalia (which had no connection to 9/11). It was intended to be temporary and specific.'
            },
            {
              excuse: 'Protecting American Lives',
              used: 'Grenada, Panama, Iran',
              argument: 'Presidents can use military force to protect American citizens abroad.',
              reality: 'The Grenada medical students opposed the invasion and were never in danger. In Panama, the "threat" to Americans was created by the invasion itself. This doctrine has no constitutional basis and no limiting principle.'
            },
            {
              excuse: 'Self-Defense/Imminent Threat',
              used: 'Libya, Syria, Iran, Yemen',
              argument: 'Presidents can strike preemptively against imminent attacks.',
              reality: 'Self-defense requires an actual attack or genuinely imminent threat — not potential, theoretical, or manufactured threats. The definition of "imminent" has been stretched to meaninglessness.'
            }
          ].map((loophole, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">{loophole.excuse}</h3>
                <span className="text-xs bg-red-900/50 text-red-400 px-2 py-1 rounded">{loophole.used}</span>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-semibold text-stone-500 uppercase mb-1">The Argument</p>
                  <p className="text-sm text-stone-300">{loophole.argument}</p>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded p-2">
                  <p className="text-xs font-semibold text-red-400 uppercase mb-1">Constitutional Reality</p>
                  <p className="text-sm text-stone-300">{loophole.reality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* War Powers Act Details */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Why the War Powers Resolution Failed</h2>
        <p className="text-stone-300 mb-4">
          The War Powers Resolution of 1973 was supposed to restore congressional control over war.
          Instead, it became a 60-day permission slip for presidential wars. Here's how:
        </p>
        <div className="space-y-4 mb-4">
          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="text-white font-semibold">The Original Intent</h3>
            <p className="text-stone-300 text-sm">
              After Vietnam, Congress wanted to prevent another undeclared war. The Resolution required presidential
              notification within 48 hours and withdrawal within 60 days without authorization. It was meant to be a constraint.
            </p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="text-white font-semibold">The Fatal Flaw</h3>
            <p className="text-stone-300 text-sm">
              By giving presidents 60 days of unilateral war power, the Resolution actually expanded executive authority.
              Before 1973, any military action without congressional approval was constitutionally suspect. After 1973,
              presidents claimed automatic 60-day authority for any "limited" operation.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-white font-semibold">The Workaround</h3>
            <p className="text-stone-300 text-sm">
              Presidents simply avoid calling operations "hostilities" or claim they're "limited" in scope.
              Obama bombed Libya for 7 months, calling it "kinetic military action" — not war. Trump assassinated
              Soleimani and called it "defensive." Biden continues bombing Somalia without acknowledging it as "hostilities."
            </p>
          </div>
        </div>
        <div className="bg-slate-800 rounded p-4">
          <h3 className="text-white font-semibold mb-2">Presidential Compliance Since 1973: 0%</h3>
          <div className="text-stone-300 text-sm space-y-1">
            {[
              'Ford (Mayaguez incident): Didn\'t notify Congress before the operation',
              'Carter (Iran hostage rescue): Didn\'t notify Congress before the operation',
              'Reagan (Grenada, Libya): Started War Powers clock retroactively, after operations began',
              'Bush Sr. (Panama, Gulf War): Claimed he didn\'t need congressional approval',
              'Clinton (Bosnia, Kosovo): Explicitly rejected War Powers constraints',
              'Bush Jr. (Iraq, Afghanistan): Used AUMFs to avoid War Powers requirements',
              'Obama (Libya): Claimed it wasn\'t "hostilities" despite 26,000+ sorties',
              'Trump (Syria, Iran): Claimed self-defense, didn\'t seek congressional approval',
              'Biden (Syria, Somalia): Continues operations under expanded "self-defense" doctrine'
            ].map((violation, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">×</span>
                <span>{violation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Barbara Lee */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The One &ldquo;No&rdquo; Vote: Barbara Lee's Prophetic Stand</h2>
        <p className="text-stone-300 mb-4">
          On September 14, 2001 — three days after 9/11 — Congress voted on the Authorization for Use of Military Force.
          The final tally: 420-1 in the House, 98-0 in the Senate. Only one person in all of Congress voted no.
        </p>
        <div className="bg-slate-800 rounded p-4 mb-4">
          <h3 className="text-white font-semibold mb-2">The Vote Count</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-stone-400 text-sm">House of Representatives</p>
              <p className="text-green-400 font-bold">YES: 420</p>
              <p className="text-red-400 font-bold">NO: 1 (Barbara Lee)</p>
            </div>
            <div>
              <p className="text-stone-400 text-sm">Senate</p>
              <p className="text-green-400 font-bold">YES: 98</p>
              <p className="text-red-400 font-bold">NO: 0</p>
            </div>
          </div>
          <p className="text-stone-400 text-sm mt-2">
            Not present: Sen. Larry Craig (R-ID), Sen. Jesse Helms (R-NC). Both would have voted yes.
          </p>
        </div>
        <blockquote className="border-l-4 border-red-600 pl-4 text-stone-300 italic mb-4">
          &ldquo;I am convinced that military action will not prevent further acts of international
          terrorism against the United States. However difficult this vote may be, some of us must
          urge the use of restraint. Our country is in a state of mourning. Some of us must say,
          let&apos;s step back for a moment. Let&apos;s just pause for a minute and think through
          the implications of our actions today so that this does not spiral out of control...
          As we act, let us not become the evil that we deplore.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Barbara Lee, September 14, 2001</span>
        </blockquote>
        <p className="text-stone-300 mb-4">
          The reaction was swift and vicious. She received death threats — thousands of them. She needed 24-hour
          Capitol Police protection for months. Talk radio hosts called her a traitor. Conservative media demanded
          she resign. Even her own Democratic Party distanced itself from her vote.
        </p>
        <div className="space-y-2 mb-4">
          <h3 className="text-white font-semibold">What Barbara Lee Got Right:</h3>
          {[
            'Predicted the AUMF would be used far beyond 9/11 perpetrators',
            'Warned about mission creep and endless war',
            'Called for restraint and constitutional process',
            'Foresaw that military action would create more terrorists',
            'Understood that blank checks lead to permanent war'
          ].map((prediction, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✓</span>
              <span className="text-stone-300 text-sm">{prediction}</span>
            </div>
          ))}
        </div>
        <p className="text-stone-300 mb-4">
          Twenty-five years later: the AUMF she warned about has been used to justify military
          operations in 22 countries, none of which had anything to do with 9/11. The &ldquo;spiral
          out of control&rdquo; she predicted happened exactly as she described. The only person in
          Congress who was right about the most consequential vote of the 21st century was the only
          person who voted no.
        </p>
        <blockquote className="border-l-4 border-green-600 pl-4 text-stone-300 italic">
          &ldquo;I knew that I was right. I knew that this was giving the president a blank check to wage war
          anywhere, at any time, for any length of time. And I knew that was not what our founders intended
          when they gave Congress — not the president — the authority to declare war.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Barbara Lee, 2021</span>
        </blockquote>
      </div>

      {/* Modern Precedent: Trump vs Iran */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Case Study: The Road to Iran War (2020-2026)</h2>
        <p className="text-stone-300 mb-4">
          The current Iran conflict perfectly illustrates how undeclared wars begin — with a single
          presidential decision that locks the country into escalation without congressional debate.
        </p>
        <div className="space-y-4">
          <div className="border border-stone-700 rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">January 3, 2020: The Soleimani Assassination</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-stone-400 text-sm">Location:</span>
                <span className="text-stone-300 text-sm">Baghdad International Airport, Iraq</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400 text-sm">Target:</span>
                <span className="text-stone-300 text-sm">Qasem Soleimani, Iranian general + 9 others</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400 text-sm">Congressional approval:</span>
                <span className="text-red-400 text-sm">None</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400 text-sm">Iraqi approval:</span>
                <span className="text-red-400 text-sm">None (condemned as violation of sovereignty)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400 text-sm">Legal justification:</span>
                <span className="text-stone-300 text-sm">"Imminent attack" (no evidence provided)</span>
              </div>
            </div>
            <p className="text-stone-300 text-sm mt-2">
              Result: Iran retaliated by striking US bases in Iraq. 110 US soldiers suffered traumatic brain injuries.
              The assassination made war more likely, not less.
            </p>
          </div>
          
          <div className="border border-stone-700 rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">February 12, 2025: Operation Epic Fury Begins</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-stone-400 text-sm">Trigger:</span>
                <span className="text-stone-300 text-sm">Iranian navy "harassment" in Gulf of Hormuz</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400 text-sm">Initial strikes:</span>
                <span className="text-stone-300 text-sm">27 Iranian naval and missile sites</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400 text-sm">Congressional consultation:</span>
                <span className="text-red-400 text-sm">None before the strikes</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400 text-sm">War Powers notification:</span>
                <span className="text-stone-300 text-sm">Filed 72 hours after bombing began</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400 text-sm">Cost (first month):</span>
                <span className="text-red-400 text-sm">$18.7 billion</span>
              </div>
            </div>
            <p className="text-stone-300 text-sm mt-2">
              Congressional response: Senate vote to invoke War Powers Resolution failed 53-47 along party lines.
              House passed resolution 219-213, which has no binding effect.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded p-4">
            <h3 className="text-red-400 font-bold mb-2">The Pattern Repeats</h3>
            <p className="text-stone-300 text-sm">
              Once again, a president has launched military operations against a sovereign nation without
              congressional approval. Once again, Congress is presented with a fait accompli — troops already
              engaged, bombs already falling, national credibility supposedly on the line. Once again,
              stopping the war becomes politically harder than continuing it.
            </p>
          </div>
        </div>
      </div>

      {/* International Perspective */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">How Other Democracies Handle War Powers</h2>
        <p className="text-stone-300 mb-4">
          The United States is virtually alone among democracies in allowing executives to wage undeclared wars.
          Most democratic constitutions learned from America's example and built in stronger constraints:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              country: 'Germany',
              requirement: 'Bundestag approval required',
              example: '2001: Parliament voted 336-326 to deploy troops to Afghanistan. Close vote led to public debate.',
              note: 'German constitution (1949) requires legislative approval for any military deployment, learning from Weimar Republic\'s failures.'
            },
            {
              country: 'United Kingdom',
              requirement: 'Parliament vote (constitutional convention)',
              example: '2013: Parliament voted down Syria intervention 285-272. Cameron respected the vote and didn\'t bomb.',
              note: 'Though not legally required, no PM since Blair has launched major military action without Parliament approval.'
            },
            {
              country: 'Canada',
              requirement: 'Parliament approval for combat',
              example: '2011: Harper sought Parliament approval for Libya mission. Voted 294-0 after public debate.',
              note: 'Canadian forces cannot engage in combat operations without parliamentary authorization, established by convention.'
            },
            {
              country: 'Australia',
              requirement: 'Cabinet decision, Parliament debate',
              example: '2003: Howard deployed to Iraq without Parliament vote, but faced intense debate and political cost.',
              note: 'Though executive can deploy, Parliament debates all major deployments and can withdraw funding.'
            },
            {
              country: 'France',
              requirement: 'Parliament approval after 4 months',
              example: '2013: Hollande intervened in Mali, sought Parliament approval after 4 months as required.',
              note: 'Constitution allows 4 months of operations, then requires Parliament approval to continue.'
            },
            {
              country: 'South Korea',
              requirement: 'National Assembly approval',
              example: '2004: Assembly voted 155-50 to deploy 3,600 troops to Iraq after months of debate.',
              note: 'Constitution requires Assembly approval for troop deployments abroad, with specific sunset clauses.'
            }
          ].map(country => (
            <div key={country.country} className="border border-stone-700 rounded-lg p-4">
              <h3 className="text-white font-bold mb-1">{country.country}</h3>
              <p className="text-red-400 text-sm font-semibold mb-2">{country.requirement}</p>
              <p className="text-stone-300 text-sm mb-2">{country.example}</p>
              <p className="text-stone-400 text-xs">{country.note}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4">
          Notice the pattern: when legislatures must vote on war, they often vote no — or at least have a real debate.
          When executives can act unilaterally, they often choose war. The constraint creates the deliberation the Founders intended.
        </p>
      </div>

      {/* The Pattern */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Pattern</h2>
        <p className="text-stone-300 mb-4">
          Every undeclared war follows the same script:
        </p>
        <div className="space-y-3">
          {[
            { step: '1', label: 'CRISIS', desc: 'A real or manufactured emergency. Gulf of Tonkin. WMDs. Imminent threats. The crisis must feel urgent enough to bypass deliberation.' },
            { step: '2', label: 'EXECUTIVE ACTION', desc: 'The President acts first, citing commander-in-chief authority. Bombs fall. Troops deploy. By the time Congress debates, the war has already started.' },
            { step: '3', label: 'RETROACTIVE JUSTIFICATION', desc: 'Congress is presented with a fait accompli. "Support the troops" makes opposition politically impossible. Voting against funding troops already in combat is political suicide.' },
            { step: '4', label: 'MISSION CREEP', desc: 'The war expands beyond its original scope. Humanitarian mission becomes combat. Counter-terrorism becomes nation-building. Limited strikes become occupation.' },
            { step: '5', label: 'PERMANENT WAR', desc: 'No declaration means no defined enemy, no defined objective, and no defined end point. The war continues until someone has the political courage to stop it — which no one ever does.' },
          ].map(s => (
            <div key={s.step} className="flex items-start gap-3">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">{s.step}</span>
              <div>
                <p className="font-semibold text-white">{s.label}</p>
                <p className="text-sm text-stone-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Constitutional Text */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">What the Constitution Actually Says</h2>
        <p className="text-stone-300 mb-4">
          The Constitution's language on war powers is remarkably clear. The debate isn't about ambiguous text —
          it's about whether to follow the text at all:
        </p>
        <div className="space-y-4">
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-2">Article I, Section 8 (Legislative Powers)</h3>
            <blockquote className="text-stone-300 italic">
              &ldquo;The Congress shall have Power...To declare War, grant Letters of Marque and Reprisal,
              and make Rules concerning Captures on Land and Water; To raise and support Armies, but no
              Appropriation of Money to that Use shall be for a longer Term than two Years; To provide
              and maintain a Navy...&rdquo;
            </blockquote>
            <p className="text-stone-400 text-sm mt-2">
              Congress gets the power to declare war, raise armies, fund armies (for max 2 years), and maintain navies.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-2">Article II, Section 2 (Executive Powers)</h3>
            <blockquote className="text-stone-300 italic">
              &ldquo;The President shall be Commander in Chief of the Army and Navy of the United States,
              and of the Militia of the several States, when called into the actual Service of the United States...&rdquo;
            </blockquote>
            <p className="text-stone-400 text-sm mt-2">
              The President commands existing forces. The power to create wars isn't mentioned.
            </p>
          </div>
        </div>
        <p className="text-stone-300 mt-4">
          Notice what's <em>not</em> in Article II: the power to declare war, start war, authorize war, or
          initiate hostilities. The President can command armies — but only armies that Congress has raised,
          funded, and authorized to fight.
        </p>
      </div>

      {/* What the Founders Said */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Founders Were Explicit: No Royal Prerogative</h2>
        <p className="text-stone-300 mb-4">
          Modern presidents claim "inherent" war powers. The Founders explicitly rejected this reasoning.
          They had lived under King George III, who could declare war unilaterally, and they designed
          the Constitution to prevent any American executive from having that power:
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="text-white font-semibold">The Philadelphia Convention (August 17, 1787)</h3>
            <p className="text-stone-300 text-sm mb-2">
              The original draft gave Congress power to "make war." Pierce Butler moved to give the
              President power to make war, "who will have all the requisite qualities, and will not
              make war but when the Nation will support it."
            </p>
            <p className="text-stone-300 text-sm mb-2">
              <strong>Elbridge Gerry objected:</strong> "Never did a good war begin on the Executive side.
              I prefer 'declare' to 'make.'"
            </p>
            <p className="text-stone-300 text-sm">
              <strong>The vote:</strong> Butler's motion <span className="text-red-400">failed</span>. Only one state (South Carolina) supported it.
              The Convention changed "make war" to "declare war" to clarify that Congress — not the
              President — would initiate hostilities.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-white font-semibold">James Madison's Notes</h3>
            <blockquote className="text-stone-300 italic text-sm">
              &ldquo;Mr. M. [Madison] and Mr. Gerry moved to insert 'declare,' striking out 'make' war;
              leaving to the Executive the power to repel sudden attacks.&rdquo;
            </blockquote>
            <p className="text-stone-400 text-sm mt-1">
              The change was specifically to leave the Executive power only to "repel sudden attacks" —
              defensive action — while giving Congress exclusive power to initiate war.
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-white font-semibold">Alexander Hamilton (Federalist 69)</h3>
            <blockquote className="text-stone-300 italic text-sm">
              &ldquo;The President is to be commander-in-chief...In this respect his authority would be
              nominally the same with that of the king of Great Britain, but in substance much inferior to it.
              It would amount to nothing more than the supreme command and direction of the military
              and naval forces...while that of the British king extends to the declaring of war...
              all which, by the Constitution under consideration, would appertain to the legislature.&rdquo;
            </blockquote>
            <p className="text-stone-400 text-sm mt-1">
              Hamilton explicitly compared the President to the British King and said the President's
              war powers were "much inferior" — specifically because the President could not declare war.
            </p>
          </div>
        </div>
        <p className="text-stone-300 mt-4">
          The Founders weren't subtle about this. They had experienced royal war power firsthand and
          designed the Constitution to prevent it. Every Founder who wrote about this topic — Madison,
          Hamilton, Jefferson — said the same thing: only Congress can initiate war.
        </p>
      </div>

      {/* Public Opinion */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">What Americans Actually Think About War Powers</h2>
        <p className="text-stone-300 mb-4">
          Despite 83 years of undeclared wars, polling consistently shows Americans want Congress
          involved in decisions about war. The disconnect between public opinion and presidential
          practice is stark:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-2">Polling on Congressional War Powers</h3>
            <div className="space-y-2">
              {[
                { poll: 'Reuters/Ipsos 2020', result: '73% want Congressional approval before attacking Iran' },
                { poll: 'Quinnipiac 2018', result: '67% say Congress should vote before bombing Syria' },
                { poll: 'CNN/ORC 2013', result: '59% opposed bombing Syria without Congressional approval' },
                { poll: 'Gallup 2011', result: '47% said Libya operation violated the Constitution' },
                { poll: 'Associated Press 2007', result: '61% wanted Congressional vote before Iraq surge' },
              ].map(p => (
                <div key={p.poll} className="border-b border-stone-600 pb-2">
                  <span className="text-red-400 font-bold text-sm">{p.poll}:</span>
                  <p className="text-stone-300 text-sm">{p.result}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold mb-2">What This Means</h3>
            <div className="space-y-2 text-stone-300 text-sm">
              <p>• Americans consistently want Congressional involvement in war decisions</p>
              <p>• Majorities oppose unilateral presidential military action</p>
              <p>• Support transcends party lines when the question is framed constitutionally</p>
              <p>• The gap between public preference and presidential practice is growing</p>
              <p>• Polls show higher support for military action <em>after</em> Congressional approval</p>
            </div>
          </div>
        </div>
        <p className="text-stone-300 mb-4">
          The pattern is clear: when pollsters ask about specific conflicts, Americans want Congressional
          involvement. When presidents bypass Congress, public support for military action drops.
          The Founders' design — requiring legislative deliberation — actually increases public buy-in
          for legitimate military action.
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 text-stone-300 italic">
          &ldquo;The fundamental principle of the republic is that the laws of nations, as well as the
          Constitution, should be faithfully executed. And the most fundamental principle of the
          Constitution is that the war power resides in Congress.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Senator Robert Taft (R-OH), 1951 (opposing Truman's Korea decision)</span>
        </blockquote>
      </div>

      {/* Solutions Section */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">How to Fix This: Realistic Constitutional Restoration</h2>
        <p className="text-stone-300 mb-4">
          Restoring congressional war power won't happen through presidential goodwill. Presidents
          like having war power. It will require Congress asserting its constitutional authority
          and the American people demanding it. Here are actionable steps:
        </p>
        <div className="space-y-4">
          <div className="border border-stone-700 rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">1. Repeal the 2001 and 2002 AUMFs</h3>
            <p className="text-stone-300 text-sm mb-2">
              The 2001 AUMF has been used to justify military operations in 80+ countries for 25+ years.
              The 2002 Iraq AUMF was used to justify the 2020 Soleimani assassination. Both should be repealed immediately.
            </p>
            <div className="bg-green-900/30 border border-green-800 rounded p-2">
              <p className="text-green-400 text-xs font-semibold">STATUS: Possible</p>
              <p className="text-stone-400 text-xs">
                Rep. Barbara Lee introduced H.R.256 (2023) to repeal the 2002 AUMF. It has 50+ cosponsors.
                Sen. Tim Kaine has a similar Senate bill. These could pass with enough pressure.
              </p>
            </div>
          </div>
          <div className="border border-stone-700 rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">2. Strengthen the War Powers Resolution</h3>
            <p className="text-stone-300 text-sm mb-2">
              Reform the 1973 War Powers Resolution to close loopholes: define "hostilities" clearly,
              eliminate the 60-day window, require affirmative Congressional approval for any military action.
            </p>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded p-2">
              <p className="text-yellow-400 text-xs font-semibold">STATUS: Difficult</p>
              <p className="text-stone-400 text-xs">
                Requires overriding presidential veto (since no president will sign limits on their power).
                Needs 2/3 majority in both chambers.
              </p>
            </div>
          </div>
          <div className="border border-stone-700 rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">3. Congressional Power of the Purse</h3>
            <p className="text-stone-300 text-sm mb-2">
              Congress can end any war by refusing to fund it. This power is absolute and requires
              only majority votes. Congress ended Vietnam this way in 1975.
            </p>
            <div className="bg-green-900/30 border border-green-800 rounded p-2">
              <p className="text-green-400 text-xs font-semibold">STATUS: Constitutional and Proven</p>
              <p className="text-stone-400 text-xs">
                No constitutional amendment needed. Congress has used this power before (Vietnam, Yemen).
                Requires political will, not legal authority.
              </p>
            </div>
          </div>
          <div className="border border-stone-700 rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">4. Supreme Court Challenges</h3>
            <p className="text-stone-300 text-sm mb-2">
              File lawsuits challenging undeclared wars as violations of Article I, Section 8.
              The Court has historically avoided war powers cases, but the constitutional argument is strong.
            </p>
            <div className="bg-red-900/30 border border-red-800 rounded p-2">
              <p className="text-red-400 text-xs font-semibold">STATUS: Long Shot</p>
              <p className="text-stone-400 text-xs">
                Courts often dismiss as "political questions." Members of Congress have standing to sue,
                but few do. Worth pursuing but don't count on judicial salvation.
              </p>
            </div>
          </div>
          <div className="border border-stone-700 rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">5. Electoral Pressure</h3>
            <p className="text-stone-300 text-sm mb-2">
              Vote against representatives who support undeclared wars and for those who demand
              Congressional war votes. Make war powers a voting issue in primaries and general elections.
            </p>
            <div className="bg-green-900/30 border border-green-800 rounded p-2">
              <p className="text-green-400 text-xs font-semibold">STATUS: Most Realistic</p>
              <p className="text-stone-400 text-xs">
                Polling shows this is popular across party lines. Candidates who oppose endless war
                often win when they make it an issue. Democracy's best long-term solution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { href: '/analysis/cost-of-empire', label: 'The $886 Billion War Machine' },
            { href: '/analysis/base-nation', label: '750+ Bases in 80 Countries' },
            { href: '/analysis/refugee-crisis', label: '38 Million War Refugees We Won\'t Take' },
            { href: '/analysis/allies-and-enemies', label: 'How Our Allies Become Our Enemies' },
            { href: '/analysis/aipac-war-machine', label: 'AIPAC and the War Machine' },
            { href: '/analysis/nuclear-close-calls', label: 'How Close We\'ve Come to Nuclear War' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-red-400 hover:text-red-300 text-sm hover:underline">
              → {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <p className="text-stone-300 text-lg mb-4">
          The most important power the Constitution grants to Congress — the power to declare war —
          has not been exercised in 83 years. In that time, hundreds of thousands of Americans
          have been sent to fight and die in wars that were never declared, in countries most
          Americans couldn&apos;t find on a map, for objectives that were never clearly defined,
          against enemies that didn&apos;t exist when the original authorization was written.
        </p>
        <p className="text-stone-300 text-lg mb-4">
          This isn&apos;t a failure of the system. The system worked exactly as the Founders designed
          it — for 150 years. The failure is Congress choosing, voluntarily and repeatedly, to give
          away its most important power because voting for war is politically risky, while letting
          the President wage war is politically safe.
        </p>
        <blockquote className="border-l-4 border-red-500 pl-4 text-stone-400 italic">
          &ldquo;If tyranny and oppression come to this land, it will be in the guise of fighting
          a foreign enemy.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— James Madison</span>
        </blockquote>
      </div>

      <BackToTop />
    </div>
  )
}
