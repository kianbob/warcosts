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
  { year: '1950–53', war: 'Korean War', president: 'Truman', authorization: 'UN Security Council resolution. Truman called it a "police action." 36,574 Americans died in a "police action."', cost: '$389B (adjusted)', deaths: '36,574 US / ~3M total', constitutional: 'Truman never asked Congress. Set the precedent that presidents could wage major wars without a declaration.' },
  { year: '1955–75', war: 'Vietnam War', president: 'Kennedy/Johnson/Nixon', authorization: 'Gulf of Tonkin Resolution (1964). Based on an incident that didn\'t happen as described — the second "attack" likely never occurred. NSA documents declassified in 2005 confirmed intelligence was manipulated.', cost: '$1T+ (adjusted)', deaths: '58,220 US / ~3.4M total', constitutional: 'Congress repealed Tonkin Resolution in 1971. Nixon kept fighting anyway. Congress finally cut funding in 1975.' },
  { year: '1983', war: 'Grenada Invasion', president: 'Reagan', authorization: 'None. Reagan invaded 2 days after the Beirut barracks bombing, widely seen as a distraction. "Operation Urgent Fury" lasted 4 days.', cost: '$135M', deaths: '19 US / 45 Grenadian civilians', constitutional: 'Congress not consulted. War Powers clock started retroactively. Operation ended before 60-day limit.' },
  { year: '1989', war: 'Panama Invasion', president: 'Bush Sr.', authorization: 'None. Justified as protecting American lives and combating drug trafficking. Real target: Manuel Noriega, a former CIA asset who had outlived his usefulness.', cost: '$163M', deaths: '23 US / 500-4,000 Panamanian civilians', constitutional: 'Noriega had been on the CIA payroll. The US invaded to arrest a man it had previously employed.' },
  { year: '1991', war: 'Gulf War (Iraq)', president: 'Bush Sr.', authorization: 'Congressional authorization (not a declaration). Vote: House 250-183, Senate 52-47 — passed by just 5 votes in the Senate.', cost: '$102B', deaths: '383 US / 25,000-50,000 Iraqi', constitutional: 'Congress authorized but did not declare. The distinction matters — authorizations can be narrower and time-limited.' },
  { year: '1992–94', war: 'Somalia', president: 'Bush Sr./Clinton', authorization: 'UN Security Council resolution. Started as humanitarian mission, became combat after "Black Hawk Down" (Oct 1993). 18 Americans killed, 1,000+ Somalis killed in single battle.', cost: '$2.2B', deaths: '43 US / thousands Somali', constitutional: 'Mission creep without congressional authorization. Set the template for future interventions.' },
  { year: '1995/1999', war: 'Bosnia & Kosovo', president: 'Clinton', authorization: 'NATO authorization. Clinton explicitly stated he did not need congressional approval. House voted 213-213 (tie) on Kosovo — didn\'t even pass a resolution of support — and Clinton bombed anyway.', cost: '$30B+', deaths: '0 US combat deaths (air campaign only)', constitutional: 'A president waged a 78-day bombing campaign after Congress tied on whether to authorize it.' },
  { year: '2001–21', war: 'Afghanistan', president: 'Bush/Obama/Trump/Biden', authorization: '2001 AUMF (60 words). Never updated, never repealed, never re-debated. Used for 20 years across 4 presidents.', cost: '$2.3T', deaths: '2,461 US / 176,000+ total', constitutional: 'The AUMF was a blank check. Congress voted once in 2001 and never revisited the authorization for 20 years.' },
  { year: '2003–11', war: 'Iraq War', president: 'Bush/Obama', authorization: '2002 Iraq AUMF. Based on false claims about WMDs and Saddam-al Qaeda links. Both were known to be false or exaggerated by intelligence agencies before the vote.', cost: '$2.4T', deaths: '4,431 US / 300,000+ Iraqi', constitutional: 'Congress authorized based on intelligence it didn\'t verify. The Senate Intelligence Committee later found the case was built on lies.' },
  { year: '2011', war: 'Libya', president: 'Obama', authorization: 'UN Security Council resolution. Obama called it a "kinetic military action" — not a war — to avoid War Powers requirements. 7-month bombing campaign.', cost: '$1.1B', deaths: '0 US / 1,100+ Libyan civilians', constitutional: 'Obama\'s own Office of Legal Counsel said it violated the War Powers Resolution. Obama overruled his own lawyers.' },
  { year: '2014–present', war: 'ISIS/Syria/Iraq', president: 'Obama/Trump/Biden', authorization: 'Obama cited the 2001 AUMF — written for 9/11 — to justify bombing ISIS, which didn\'t exist in 2001. Legal scholars called this "the most implausible interpretation of the AUMF imaginable."', cost: '$100B+', deaths: 'Unknown US / 13,000+ civilians (Airwars estimate)', constitutional: 'A law written to target 9/11 perpetrators used against a group that was at war WITH al-Qaeda.' },
  { year: '2015–present', war: 'Yemen (US-backed Saudi campaign)', president: 'Obama/Trump/Biden', authorization: 'No authorization. US provided intelligence, targeting data, mid-air refueling, and weapons. When Congress passed a War Powers resolution to end involvement, Trump vetoed it.', cost: 'Billions in weapons sales', deaths: '150,000+ Yemeni (UN estimate) / 85,000 children starved', constitutional: 'Congress voted to stop the war. The President vetoed peace. The war continued.' },
  { year: '2025–26', war: 'Iran (Operation Epic Fury)', president: 'Trump', authorization: 'None. No congressional vote before strikes. Senate killed War Powers resolution 53-47 after the bombing began. Cited "imminent threat" and "self-defense."', cost: 'TBD (billions already)', deaths: 'TBD / 1,000+ Iranian civilians in first 48 hours', constitutional: 'Major combat operations launched against a sovereign nation without congressional approval. Again.' },
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
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
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
                <div className="bg-stone-800/50 rounded p-2">
                  <p className="text-xs text-stone-500">Cost</p>
                  <p className="text-sm text-red-400 font-semibold">{w.cost}</p>
                </div>
                <div className="bg-stone-800/50 rounded p-2">
                  <p className="text-xs text-stone-500">Deaths</p>
                  <p className="text-sm text-red-400 font-semibold">{w.deaths}</p>
                </div>
              </div>
              <div className="bg-red-950/30 border border-red-900/30 rounded p-2">
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

      {/* Barbara Lee */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The One &ldquo;No&rdquo; Vote</h2>
        <p className="text-stone-300 mb-4">
          On September 14, 2001, Representative Barbara Lee cast the only vote against the AUMF.
          The final tally: 420-1 in the House, 98-0 in the Senate.
        </p>
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
          She received death threats. She needed 24-hour Capitol Police protection. She was called
          a traitor, a coward, and worse. Conservative media demanded she resign. Her own party
          distanced itself from her.
        </p>
        <p className="text-stone-300">
          Twenty-five years later: the AUMF she warned about has been used to justify military
          operations in 22 countries. The &ldquo;spiral out of control&rdquo; she predicted happened
          exactly as she described. The only person in Congress who was right about the most
          consequential vote of the 21st century was the only person who voted no.
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

      {/* Related */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { href: '/analysis/911-to-forever-war', label: 'From 9/11 to Forever War' },
            { href: '/analysis/congressional-authority', label: 'Congressional War Authority' },
            { href: '/analysis/presidents-at-war', label: 'Presidents at War' },
            { href: '/analysis/the-469', label: '469 Military Interventions Since 1798' },
            { href: '/analysis/iran-2026', label: 'The Iran Conflict Nobody Asked For' },
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
