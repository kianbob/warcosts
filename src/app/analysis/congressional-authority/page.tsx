import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: '19 Wars Without Congress — The Death of the War Power | WarCosts',
  description: 'The Constitution gives Congress alone the power to declare war. Yet 19 of 28 US conflicts were fought without congressional authorization. How the most solemn power in democracy was stolen.',
  openGraph: {
    title: '19 Wars Without Congress — The Death of the War Power',
    description: 'The Constitution gives Congress alone the power to declare war. Yet 19 of 28 US conflicts were fought without congressional authorization.',
    url: 'https://warcosts.org/analysis/congressional-authority',
    type: 'article',
  },
}

export default function CongressionalAuthorityPage() {
  const conflicts = loadData('conflicts.json')
  const unauthorized = conflicts.filter((c: any) => !c.congressionalAuth)
  const authorized = conflicts.filter((c: any) => c.congressionalAuth)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '19 Wars Without Congress — The Death of the War Power',
    description: 'How the most important power in democracy — the power to declare war — was systematically stolen by the executive branch over 248 years.',
    author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-03-01',
    dateModified: '2026-03-01',
    mainEntityOfPage: 'https://warcosts.org/analysis/congressional-authority',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Congressional Authority' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          19 Wars Without Congress
        </h1>
        <p className="text-stone-400 text-lg">
          The Founders gave Congress — and Congress alone — the power to take the nation to war.
          Over 248 years, that power has been systematically stolen by the executive branch.
          This is the story of democracy&apos;s most important failure.
        </p>
      </div>

      <ShareButtons title="19 Wars Without Congress — The Death of the War Power" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-4xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{unauthorized.length}</p>
          <p className="text-muted text-sm">Without Authorization</p>
        </div>
        <div className="bg-green-50 rounded-lg p-5 border border-green-200 text-center">
          <p className="text-4xl font-bold text-green-700 font-[family-name:var(--font-heading)]">{authorized.length}</p>
          <p className="text-muted text-sm">With Authorization</p>
        </div>
        <div className="bg-amber-50 rounded-lg p-5 border border-amber-200 text-center">
          <p className="text-4xl font-bold text-amber-700 font-[family-name:var(--font-heading)]">5</p>
          <p className="text-muted text-sm">Declared Wars (Total)</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-5 border border-blue-200 text-center">
          <p className="text-4xl font-bold text-blue-700 font-[family-name:var(--font-heading)]">22+</p>
          <p className="text-muted text-sm">Countries Under 2001 AUMF</p>
        </div>
      </div>

      {/* The Constitutional Text — Full */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-amber-800">📜 Article I, Section 8, Clause 11 — The War Powers Clause</h2>
        <blockquote className="font-serif text-lg italic text-stone-700 leading-relaxed">
          &ldquo;The Congress shall have Power... To declare War, grant Letters of Marque and Reprisal,
          and make Rules concerning Captures on Land and Water; To raise and support Armies, but no
          Appropriation of Money to that Use shall be for a longer Term than two Years; To provide and
          maintain a Navy; To make Rules for the Government and Regulation of the land and naval Forces;
          To provide for calling forth the Militia to execute the Laws of the Union, suppress Insurrections
          and repel Invasions.&rdquo;
        </blockquote>
        <p className="text-sm text-muted mt-4">
          Read that carefully. Congress controls <em>everything</em>: declaring war, raising armies,
          funding them (with a two-year limit!), maintaining the navy, writing the rules for the military,
          and calling up the militia. The President&apos;s only military role, defined in Article II, is
          &ldquo;Commander in Chief of the Army and Navy&rdquo; — meaning he directs troops <em>after</em> Congress
          authorizes their use. The Founders were explicit. This wasn&apos;t ambiguous. It was deliberate.
        </p>
      </div>

      {/* Founders' Intent */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">What the Founders Intended — And Why</h2>
        <p>
          The men who wrote the Constitution had lived under a king who could drag his subjects into war
          on a whim. They had watched George III bleed the empire dry with foreign adventures. They were
          determined — <em>obsessively</em> determined — to prevent any American executive from wielding
          the same power. This wasn&apos;t a minor concern for them. It was the central question of
          executive authority.
        </p>
        <p>
          The Constitutional Convention debated this at length. The original draft gave Congress the power
          to &ldquo;make war.&rdquo; Madison and Elbridge Gerry moved to change it to &ldquo;declare war,&rdquo;
          specifically to allow the President to repel sudden attacks without waiting for Congress — but
          <em>nothing more</em>. The change was narrow and intentional. The President could defend against
          an invasion. He could not launch one.
        </p>
      </div>

      {/* Madison quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;The constitution supposes, what the History of all Governments demonstrates, that the
          Executive is the branch of power most interested in war, and most prone to it. It has accordingly
          with studied care vested the question of war to the Legislature.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— James Madison, letter to Thomas Jefferson, April 2, 1798</p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <p>
          Madison&apos;s reasoning was simple and devastating: executives <em>like</em> war. War expands
          their power, their prestige, their legacy. Kings started wars for glory. Parliaments resisted
          because they bore the costs. The same logic applied to presidents and Congress. Give the war
          power to the branch that pays the price, not the branch that reaps the glory.
        </p>
      </div>

      {/* Hamilton quote */}
      <div className="bg-stone-100 rounded-xl p-8 my-8 border border-stone-200">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700">
          &ldquo;The President is to be commander-in-chief of the army and navy of the United States. In this
          respect his authority would be nominally the same with that of the king of Great Britain, but in
          substance much inferior to it. It would amount to nothing more than the supreme command and
          direction of the military and naval forces... while that of the British king extends to the declaring
          of war and to the raising and regulating of fleets and armies — all which, by the Constitution
          under consideration, would appertain to the legislature.&rdquo;
        </blockquote>
        <p className="text-muted mt-3">— Alexander Hamilton, Federalist No. 69, 1788</p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <p>
          This is Hamilton — the <em>strongest</em> advocate for executive power among the Founders.
          Even he was clear: the President commands troops in the field, but Congress alone authorizes
          their use. The President&apos;s role as Commander-in-Chief was, in Hamilton&apos;s words,
          &ldquo;much inferior&rdquo; to a king&apos;s military authority. He directs war once begun.
          He does not begin it.
        </p>
        <p>
          George Mason put it most bluntly at the Convention: he was &ldquo;against giving the power of war
          to the Executive, because not safely to be trusted with it.&rdquo; Mason wanted it kept in the
          legislature because &ldquo;he was for clogging rather than facilitating war.&rdquo;
        </p>
      </div>

      {/* Lincoln quote */}
      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <blockquote className="text-stone-700 italic text-lg">
          &ldquo;Allow the President to invade a neighboring nation, whenever he shall deem it necessary
          to repel an invasion... and you allow him to make war at pleasure. Study to see if you can fix
          any limit to his power in this respect... Kings had always been involving and impoverishing
          their people in wars, pretending generally, if not always, that the good of the people was
          the object. This our Convention understood to be the most oppressive of all kingly oppressions;
          and they resolved to so frame the Constitution that no one man should hold the power of
          bringing this oppression upon us.&rdquo;
        </blockquote>
        <p className="text-muted text-sm mt-3">— Abraham Lincoln, letter to William Herndon, February 15, 1848</p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <p>
          Lincoln wrote this about President Polk&apos;s Mexican-American War — before Lincoln himself
          would stretch presidential war power during the Civil War. But his logic was sound: once you
          let the President decide when war is &ldquo;necessary,&rdquo; there is no limit. Every war
          becomes necessary. Every president finds a reason.
        </p>
      </div>

      {/* The Erosion Timeline */}
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6 mt-12">The Erosion: Step by Step</h2>
      <p className="text-muted mb-8">How 248 years of presidential overreach destroyed the Founders&apos; vision.</p>

      {/* 1950 Korea */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">1950: Korea — The Precedent That Changed Everything</h3>
        <p className="text-muted text-sm mb-3">President: Harry Truman (D)</p>
        <div className="prose prose-stone max-w-none">
          <p>
            When North Korea invaded South Korea on June 25, 1950, President Truman deployed 300,000
            American troops without asking Congress for authorization. His excuse? It wasn&apos;t a
            &ldquo;war&rdquo; — it was a &ldquo;police action&rdquo; authorized by the United Nations.
          </p>
          <p>
            This was constitutionally absurd. The UN Charter cannot override the US Constitution. The
            Founders didn&apos;t say &ldquo;Congress shall have the power to declare war unless the
            United Nations says otherwise.&rdquo; But Congress let it stand. Senator Robert Taft was
            nearly alone in protesting:
          </p>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 my-4 border">
          <blockquote className="italic text-stone-600">
            &ldquo;The President is usurping his powers as Commander in Chief. There is no authority to
            use armed forces in support of the United Nations in the absence of some previous action
            by Congress dealing with the subject.&rdquo;
          </blockquote>
          <p className="text-muted text-xs mt-2">— Senator Robert Taft (R-OH), 1950</p>
        </div>
        <div className="prose prose-stone max-w-none">
          <p>
            The result: <strong>36,574 Americans dead</strong>. A three-year war with no congressional
            vote. And a precedent: if you call it something other than &ldquo;war,&rdquo; you don&apos;t
            need Congress. Every president since has exploited this loophole.
          </p>
        </div>
      </div>

      {/* 1964 Tonkin */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">1964: Gulf of Tonkin — The Blank Check Built on Lies</h3>
        <p className="text-muted text-sm mb-3">President: Lyndon Johnson (D)</p>
        <div className="prose prose-stone max-w-none">
          <p>
            On August 2, 1964, the USS Maddox was allegedly attacked by North Vietnamese torpedo boats
            in the Gulf of Tonkin. Two days later, a second attack was reported. President Johnson asked
            Congress for authorization to respond.
          </p>
          <p>
            The Gulf of Tonkin Resolution passed 88-2 in the Senate and 416-0 in the House. It authorized
            the President to take &ldquo;all necessary measures to repel any armed attack against the forces
            of the United States and to prevent further aggression.&rdquo; Johnson used it to escalate
            from 23,000 advisors to 536,000 combat troops.
          </p>
          <p>
            The problem? The second attack — the one that triggered the vote — <strong>almost certainly
            never happened</strong>. Declassified NSA documents revealed in 2005 that intelligence was
            deliberately manipulated. Secretary of Defense Robert McNamara later admitted doubt about
            the second incident. The entire Vietnam War — 58,220 Americans dead, 2 million Vietnamese
            civilians killed — was authorized based on fabricated evidence.
          </p>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 my-4 border">
          <blockquote className="italic text-stone-600">
            &ldquo;For all I know, our Navy was shooting at whales out there.&rdquo;
          </blockquote>
          <p className="text-muted text-xs mt-2">— President Lyndon Johnson, privately, 1965</p>
        </div>
        <div className="prose prose-stone max-w-none">
          <p>
            Only two senators voted no: Wayne Morse of Oregon and Ernest Gruening of Alaska. Morse
            prophetically warned: &ldquo;I believe that history will record that we have made a great
            mistake in subverting and circumventing the Constitution.&rdquo; He was defeated in the
            next election. He was also right.
          </p>
        </div>
      </div>

      {/* 1973 War Powers */}
      <div className="border-l-4 border-amber-600 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">1973: War Powers Resolution — The Failed Fix</h3>
        <p className="text-muted text-sm mb-3">Passed over President Nixon&apos;s veto</p>
        <div className="prose prose-stone max-w-none">
          <p>
            After the Vietnam disaster, Congress tried to reclaim its war power. The War Powers Resolution
            of 1973, passed over Nixon&apos;s veto, requires the President to:
          </p>
          <ul>
            <li>Consult with Congress before introducing forces into hostilities</li>
            <li>Notify Congress within 48 hours of committing armed forces</li>
            <li>Withdraw forces within 60 days (with a 30-day extension) unless Congress authorizes continued action</li>
            <li>Remove forces at any time if Congress passes a concurrent resolution</li>
          </ul>
          <p>
            In theory, this should have worked. In practice, it has been a dead letter from day one.
            Nixon called it &ldquo;both unconstitutional and dangerous.&rdquo; Every subsequent president
            has agreed — while simultaneously violating it. The scorecard:
          </p>
          <ul>
            <li><strong>Ford:</strong> Evacuated Saigon, Mayaguez incident — no congressional authorization</li>
            <li><strong>Carter:</strong> Iran hostage rescue — no notification until after the fact</li>
            <li><strong>Reagan:</strong> Lebanon, Grenada, Libya, Iran-Contra — all bypassed Congress</li>
            <li><strong>Bush Sr.:</strong> Did seek authorization for Gulf War (barely passed 52-47)</li>
            <li><strong>Clinton:</strong> Bosnia, Kosovo, Haiti — all without authorization. Kosovo bombing lasted 78 days, well past the 60-day limit</li>
            <li><strong>Bush Jr.:</strong> Got AUMFs for Afghanistan and Iraq but stretched them far beyond their intent</li>
            <li><strong>Obama:</strong> Libya bombing campaign — didn&apos;t even claim AUMF authority, said it wasn&apos;t &ldquo;hostilities&rdquo;</li>
            <li><strong>Trump:</strong> Assassinated Iranian General Soleimani — notified Congress after the fact with a classified memo</li>
            <li><strong>Biden:</strong> Airstrikes in Syria — notified Congress after they happened</li>
          </ul>
          <p>
            No president has <em>ever</em> been held accountable for violating the War Powers Resolution.
            Not once in 53 years. Congress has never enforced its own law. The resolution is a
            constitutional corpse — passed with good intentions, dead on arrival.
          </p>
        </div>
      </div>

      {/* 2001 AUMF */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">2001: The AUMF — 60 Words That Authorized Endless War</h3>
        <p className="text-muted text-sm mb-3">President: George W. Bush (R)</p>

        <div className="bg-red-50 rounded-xl p-6 my-6 border border-red-200">
          <p className="text-sm font-semibold text-red-800 mb-3">The Authorization for Use of Military Force — S.J.Res.23</p>
          <blockquote className="text-stone-700 italic leading-relaxed">
            &ldquo;That the President is authorized to use all necessary and appropriate force against those
            nations, organizations, or persons he determines planned, authorized, committed, or aided the
            terrorist attacks that occurred on September 11, 2001, or harbored such organizations or persons,
            in order to prevent any future acts of international terrorism against the United States by such
            nations, organizations or persons.&rdquo;
          </blockquote>
          <p className="text-stone-500 text-sm mt-3">
            60 words. No geographic limitation. No expiration date. No requirement to return to Congress.
            Passed September 14, 2001 — three days after 9/11. Vote: 98-0 Senate, 420-1 House.
          </p>
        </div>

        <div className="prose prose-stone max-w-none">
          <p>
            Congress was in shock. The towers had fallen three days before. Anthrax letters were arriving
            at congressional offices. Members were afraid — and under immense political pressure. Voting
            &ldquo;no&rdquo; on anything that looked like fighting terrorism was career suicide.
          </p>
          <p>
            Only one person saw clearly through the fog of grief and fear.
          </p>
        </div>
      </div>

      {/* Barbara Lee */}
      <div className="bg-white rounded-xl border-2 border-stone-300 p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Lone &ldquo;No&rdquo; Vote: Barbara Lee</h2>
        <blockquote className="border-l-4 border-red-700 pl-4 italic text-stone-600 mb-4 text-lg leading-relaxed">
          &ldquo;However difficult this vote may be, some of us must urge the use of restraint. Our country
          is in a state of mourning. Some of us must say, let&apos;s step back for a moment. Let&apos;s just
          pause for a minute and think through the implications of our actions today so that this does not
          spiral out of control... As we act, let us not become the evil that we deplore.&rdquo;
        </blockquote>
        <p className="text-muted text-sm mb-4">— Rep. Barbara Lee (D-CA), September 14, 2001</p>
        <div className="prose prose-stone max-w-none">
          <p>
            For her vote, Lee received death threats. She required a bodyguard for months. Talk radio
            called her a traitor. The <em>Wall Street Journal</em> editorial board called her vote
            &ldquo;the most irresponsible act in Congress since the last congressman voted against World War II.&rdquo;
          </p>
          <p>
            She was quoting a clergy member who had spoken at a memorial service that morning: &ldquo;As we act,
            let us not become the evil that we deplore.&rdquo; She warned that the AUMF was a blank check.
            She predicted it would be used to justify wars far beyond its original intent.
          </p>
          <p>
            <strong>Twenty-five years later, she has been proven right on every count.</strong> The AUMF
            has been used to justify military operations in at least 22 countries, against groups that
            didn&apos;t exist on 9/11, in places that had no connection to the attacks. It is the
            most consequential single vote in modern American history.
          </p>
        </div>
      </div>

      {/* 22 countries */}
      <div className="bg-stone-900 text-white rounded-xl p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
          22+ Countries Under the 2001 AUMF
        </h2>
        <p className="text-stone-400 text-sm mb-4">
          The AUMF authorized force against those who &ldquo;planned, authorized, committed, or aided&rdquo;
          the 9/11 attacks. Here are some of the countries where it&apos;s been invoked:
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {['Afghanistan', 'Iraq', 'Syria', 'Yemen', 'Somalia', 'Libya', 'Pakistan', 'Niger',
            'Cameroon', 'Chad', 'Mali', 'Tunisia', 'Kenya', 'Djibouti', 'Jordan', 'Philippines',
            'Georgia', 'Uzbekistan', 'Kyrgyzstan', 'Tajikistan', 'Ethiopia', 'Eritrea'].map(c => (
            <span key={c} className="bg-red-900/50 border border-red-800 text-red-300 text-sm px-3 py-1 rounded-full">{c}</span>
          ))}
        </div>
        <p className="text-stone-400 text-sm">
          Most of these countries had no connection to 9/11. Many of the groups targeted — ISIS, al-Shabaab,
          Boko Haram, Houthi rebels — didn&apos;t exist in 2001. The AUMF has been used against
          enemies of al-Qaeda, affiliates of affiliates, and organizations that are explicitly <em>at war
          with</em> al-Qaeda. The legal fiction is staggering.
        </p>
      </div>

      {/* 2002 Iraq AUMF */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">2002: Iraq AUMF — The Second Blank Check, Built on WMD Lies</h3>
        <p className="text-muted text-sm mb-3">President: George W. Bush (R)</p>
        <div className="prose prose-stone max-w-none">
          <p>
            Not satisfied with the 2001 AUMF alone, the Bush administration sought a separate authorization
            for Iraq. Secretary of State Colin Powell presented &ldquo;evidence&rdquo; of Iraqi weapons of
            mass destruction to the UN Security Council on February 5, 2003 — satellite photos, intercepted
            communications, drawings of mobile biological weapons labs.
          </p>
          <p>
            <strong>None of it was true.</strong> The WMDs didn&apos;t exist. The aluminum tubes weren&apos;t
            for centrifuges. The mobile labs weren&apos;t weapons labs. The intelligence was cherry-picked,
            manipulated, and in some cases fabricated. The primary source — codenamed &ldquo;Curveball&rdquo; —
            was later revealed to be a fabricator whom German intelligence had warned was unreliable.
          </p>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 my-4 border">
          <blockquote className="italic text-stone-600">
            &ldquo;It was all wrong. The intelligence community was dead wrong.&rdquo;
          </blockquote>
          <p className="text-muted text-xs mt-2">— The Robb-Silberman Commission on WMD Intelligence, 2005</p>
        </div>
        <div className="prose prose-stone max-w-none">
          <p>
            Congress voted 77-23 in the Senate and 296-133 in the House to authorize the Iraq War.
            Among those voting yes: Hillary Clinton, Joe Biden, John Kerry, and Chuck Schumer.
            The result: 4,599 Americans dead. Over 300,000 Iraqi civilians killed. Cost: $2 trillion
            and counting. All based on lies.
          </p>
        </div>
      </div>

      {/* Obama Libya */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">2011: Libya — Not Even an AUMF</h3>
        <p className="text-muted text-sm mb-3">President: Barack Obama (D)</p>
        <div className="prose prose-stone max-w-none">
          <p>
            In March 2011, Obama ordered US military forces to participate in NATO bombing of Libya
            without seeking any congressional authorization at all. When the bombing exceeded the War
            Powers Resolution&apos;s 60-day limit, the administration argued — with a straight face —
            that dropping bombs from aircraft didn&apos;t constitute &ldquo;hostilities.&rdquo;
          </p>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 my-4 border">
          <blockquote className="italic text-stone-600">
            &ldquo;US operations do not involve sustained fighting or active exchanges of fire with hostile
            forces, nor do they involve US ground troops.&rdquo;
          </blockquote>
          <p className="text-muted text-xs mt-2">— Obama administration legal rationale for Libya, 2011</p>
        </div>
        <div className="prose prose-stone max-w-none">
          <p>
            By this logic, the President could bomb any country indefinitely without congressional
            authorization — as long as he used aircraft instead of ground troops. Obama&apos;s own Office
            of Legal Counsel disagreed with this interpretation. He overruled them. Libya descended
            into a failed state that remains unstable today.
          </p>
        </div>
      </div>

      {/* Trump Soleimani */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">2020: Soleimani — Assassination Without Authorization</h3>
        <p className="text-muted text-sm mb-3">President: Donald Trump (R)</p>
        <div className="prose prose-stone max-w-none">
          <p>
            On January 3, 2020, a US drone strike killed Iranian Major General Qasem Soleimani at Baghdad
            International Airport. This was the assassination of a senior government official of a sovereign
            nation — an act of war by any historical definition. Congress was not consulted beforehand.
          </p>
          <p>
            Trump notified Congress after the strike with a classified memo. The administration initially
            cited the 2002 Iraq AUMF as justification — an authorization passed to address Saddam Hussein&apos;s
            alleged WMDs, now used to justify killing an Iranian general 18 years later. Later they shifted
            to claiming inherent Article II self-defense authority.
          </p>
          <p>
            The strike brought the US to the brink of war with Iran. Iran retaliated by firing ballistic
            missiles at US bases in Iraq, causing traumatic brain injuries in over 100 US service members —
            injuries Trump initially dismissed as &ldquo;headaches.&rdquo;
          </p>
        </div>
      </div>

      {/* Iran 2026 */}
      <div className="border-l-4 border-red-700 pl-6 mb-10">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">2026: Iran — The Pattern Continues</h3>
        <p className="text-muted text-sm mb-3">President: Donald Trump (R)</p>
        <div className="prose prose-stone max-w-none">
          <p>
            As of early 2026, the United States is engaged in escalating military operations against Iran
            without any new congressional authorization. The administration has cited the 2001 AUMF, the
            2002 Iraq AUMF, and Article II self-defense authority — the same legal justifications used for
            every unauthorized military action since 2001.
          </p>
          <p>
            The Founders&apos; nightmare has been fully realized. The President of the United States
            can wage war against any country, at any time, for any reason, without a congressional vote.
            The constitutional requirement that Congress authorize military force has been reduced to a
            polite fiction that everyone acknowledges and no one enforces.
          </p>
        </div>
      </div>

      {/* The Imperial Presidency */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Imperial Presidency</h2>
        <div className="space-y-4 text-stone-300">
          <p>
            Historian Arthur Schlesinger Jr. coined the term &ldquo;the imperial presidency&rdquo; in 1973
            to describe the accumulation of war powers by the executive branch. He argued that presidents
            had gradually transformed themselves from constitutional officers into elected monarchs —
            particularly in the realm of foreign policy and war.
          </p>
          <p>
            Every president&apos;s excuse follows the same pattern: the situation is urgent, the threat
            is imminent, there&apos;s no time for debate, the President must act. But the Founders
            anticipated this argument. They knew that every executive would claim urgency. That&apos;s
            precisely why they gave the war power to a large, deliberative body that <em>couldn&apos;t</em>
            act quickly. The friction was the point. The delay was the safeguard.
          </p>
          <p>
            The result of destroying that safeguard? Korea. Vietnam. Iraq. Afghanistan. Libya. Syria.
            Yemen. Somalia. And now Iran. Trillions of dollars. Millions of lives. Zero declarations
            of war.
          </p>
        </div>
      </div>

      {/* What the Founders Would Say */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">What the Founders Would Say</h2>
        <p>
          If James Madison could see the current state of presidential war powers, he would recognize
          exactly what he warned against. The executive branch has claimed — and Congress has surrendered —
          the very power the Constitution was designed to prevent any single person from holding.
        </p>
        <p>
          The Founders didn&apos;t give Congress the war power because they thought Congress was wise.
          They gave it to Congress because they knew the President was dangerous. Not any particular
          president — <em>every</em> president. The office itself, with its concentration of power
          and its incentive for glory, was inherently prone to war. Only the friction of democratic
          deliberation could check it.
        </p>
        <p>
          That check no longer exists. Congress has voluntarily abdicated its most solemn
          responsibility — the power to decide whether American soldiers live or die, whether
          American treasure is spent on war or on its citizens. Most members prefer it this way.
          Voting for war is politically risky. It&apos;s easier to let the President act and then
          criticize the results.
        </p>
        <p>
          The Founders would not merely be disappointed. They would recognize that the republic
          they built has failed in the very way they most feared.
        </p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• Congress has formally <strong>declared war only 5 times</strong> in 248 years: War of 1812, Mexican-American War, Spanish-American War, WWI, and WWII.</li>
          <li>• The 2001 AUMF has been used in <strong>22+ countries</strong> — including against groups that didn&apos;t exist on 9/11 and are actually <em>enemies</em> of al-Qaeda.</li>
          <li>• Rep. <strong>Barbara Lee</strong> cast the only vote against the 2001 AUMF. She received death threats and needed a bodyguard for months. Twenty-five years later, she has been vindicated on every point.</li>
          <li>• President Obama bombed <strong>7 countries</strong> (Afghanistan, Iraq, Syria, Libya, Yemen, Somalia, Pakistan) without a single new congressional authorization.</li>
          <li>• The Constitutional Convention specifically debated and rejected giving the President the power to &ldquo;make war&rdquo; — they changed it to &ldquo;declare war&rdquo; to limit the President to repelling sudden attacks only.</li>
          <li>• The War Powers Resolution has been violated by <strong>every president since 1973</strong> — and has never once been enforced.</li>
          <li>• The 2002 Iraq AUMF — passed to deal with Saddam Hussein&apos;s WMDs — was cited as justification for assassinating an Iranian general in 2020, <strong>18 years</strong> after it was passed.</li>
          <li>• Alexander Hamilton, the strongest advocate for executive power among the Founders, explicitly said the President&apos;s military authority was &ldquo;much inferior&rdquo; to a king&apos;s.</li>
        </ul>
      </div>

      {/* Conflict Lists */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-700">❌ Without Congressional Authorization ({unauthorized.length})</h2>
      <div className="space-y-3 mb-8">
        {unauthorized.map((c: any) => (
          <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-red-50 rounded-lg border border-red-200 p-4 hover:shadow-md transition">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">{c.shortName || c.name}</h3>
                <p className="text-xs text-muted">{c.startYear}–{c.endYear}</p>
              </div>
              <p className="text-xs text-muted max-w-xs text-right">{c.authDetail}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-green-700">✅ With Congressional Authorization ({authorized.length})</h2>
      <div className="space-y-3 mb-8">
        {authorized.map((c: any) => (
          <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-green-50 rounded-lg border border-green-200 p-4 hover:shadow-md transition">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">{c.shortName || c.name}</h3>
                <p className="text-xs text-muted">{c.startYear}–{c.endYear}</p>
              </div>
              <p className="text-xs text-muted max-w-xs text-right">{c.authDetail}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <Link href="/analysis/iran-2026" className="text-red-800 hover:underline block">→ Iran 2026 — the latest war without authorization</Link>
          <Link href="/analysis/forever-wars" className="text-red-800 hover:underline block">→ The Forever Wars — why they never end</Link>
          <Link href="/analysis/war-on-terror" className="text-red-800 hover:underline block">→ The War on Terror — $8 trillion later</Link>
          <Link href="/analysis/the-469" className="text-red-800 hover:underline block">→ 469 Military Interventions since 1798</Link>
          <Link href="/timeline" className="text-red-800 hover:underline block">→ Timeline — all wars chronologically</Link>
          <Link href="/covert" className="text-red-800 hover:underline block">→ Covert Operations — secret wars with no authorization</Link>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
