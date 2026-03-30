import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Barbary Wars Cost — $3M+ Original, First Overseas US Military Action (1801-1815) | WarCosts',
  description: 'The Barbary Wars (First: 1801-1805, Second: 1815) were America\'s first overseas military actions. "Millions for defense, not one cent for tribute." The Marines\' "shores of Tripoli." Cost: ~$3M original. The US Navy\'s proving ground.',
  keywords: ['Barbary Wars', 'First Barbary War', 'Second Barbary War', 'shores of Tripoli', 'Barbary pirates', 'Tripoli', 'USS Philadelphia', 'Stephen Decatur', 'William Eaton'],
  openGraph: {
    title: 'The Barbary Wars — First Overseas US Military Action',
    description: '"Millions for defense, not one cent for tribute." How America\'s first foreign wars established the Marines and the Navy — and the template for overseas intervention.',
    url: 'https://warcosts.org/barbary-wars',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Total Cost (2024$)', value: '$100M+' },
  { label: 'Original Cost', value: '~$3 Million' },
  { label: 'US Military Deaths', value: '~35 (First War)' },
  { label: 'Americans Enslaved', value: '700+' },
  { label: 'Duration (Both Wars)', value: '1801-1815' },
  { label: 'Tribute Paid Before Wars', value: '$1.25M+' },
]

const costBreakdown = [
  { category: 'Naval Operations (First War)', amount: '$60M', desc: 'Mediterranean squadron patrols, blockades, and bombardments 1801-1805' },
  { category: 'Ransom for USS Philadelphia Crew', amount: '$12M', desc: '$60,000 paid for 307 enslaved American sailors — after insisting "not one cent for tribute"' },
  { category: 'Eaton\'s Overland Expedition', amount: '$5M', desc: 'William Eaton\'s march across the Libyan desert to capture Derna' },
  { category: 'Naval Operations (Second War)', amount: '$15M', desc: 'Decatur\'s 1815 squadron that ended Barbary tribute permanently' },
  { category: 'Pre-War Tribute Payments', amount: '$40M+', desc: 'Annual tribute paid to Barbary states before the US decided to fight (1785-1801)' },
]

const timelineFirst = [
  { year: '1785-1793', title: 'Tribute & Humiliation', desc: 'After independence, American merchant ships in the Mediterranean lose the protection of the Royal Navy. Barbary corsairs from Morocco, Algiers, Tunis, and Tripoli seize American ships and enslave their crews. The US, with no navy, pays tribute — $1 million to Algiers alone in 1795 (1/6 of the entire federal budget). Over 700 Americans are held as slaves in North Africa.' },
  { year: '1797-1800', title: 'Building a Navy', desc: 'The Quasi-War with France forces the US to build a navy. The same frigates built to fight France — Constitution, Constellation, Congress — become available for Mediterranean service. For the first time, the US has the military capability to challenge the Barbary states.' },
  { year: 'May 14, 1801', title: 'Tripoli Declares War', desc: 'Pasha Yusuf Karamanli of Tripoli, unsatisfied with the level of American tribute, declares war by cutting down the flagpole at the US consulate. President Jefferson, despite his small-government philosophy, sends a naval squadron to the Mediterranean — the first projection of American military power overseas.' },
  { year: '1801-1803', title: 'Inconclusive Blockade', desc: 'The US Navy blockades Tripoli but achieves little. The blockade is leaky, commanders are cautious, and Tripoli\'s harbor defenses are formidable. The war drags on without decisive action. Jefferson discovers that projecting power 5,000 miles from home is expensive and difficult — a lesson every subsequent president has also learned and ignored.' },
  { year: 'Oct 31, 1803', title: 'USS Philadelphia Captured', desc: 'The frigate USS Philadelphia runs aground in Tripoli harbor and is captured with its entire crew of 307. Captain William Bainbridge and his men become prisoners. The Philadelphia — one of America\'s most powerful warships — is now a prize of Tripoli, turned against the American blockade. It\'s the worst US naval disaster until Pearl Harbor.' },
  { year: 'Feb 16, 1804', title: 'Decatur Burns the Philadelphia', desc: 'Lieutenant Stephen Decatur leads 74 volunteers in a captured Tripolitan ketch (renamed Intrepid) into Tripoli harbor at night. They board the Philadelphia, overwhelm the guard, and set the ship ablaze — destroying it so it can\'t be used against the US. Horatio Nelson calls it "the most bold and daring act of the age." Decatur becomes a national hero at age 25.' },
  { year: 'Aug-Sep 1804', title: 'Bombardment of Tripoli', desc: 'Commodore Edward Preble launches five major bombardments of Tripoli. The attacks damage the city but don\'t break the Pasha\'s will. In September, the USS Intrepid — packed with explosives as a fireship — enters the harbor to destroy the Tripolitan fleet. It explodes prematurely, killing all 13 American volunteers aboard. The cause of the premature explosion remains a mystery.' },
  { year: 'Apr-May 1805', title: 'Eaton\'s March Across the Desert', desc: 'William Eaton, US consul to Tunis, leads one of the most audacious military operations in American history. With 8 Marines, a few hundred Arab and Greek mercenaries, and Hamet Karamanli (the Pasha\'s deposed brother), Eaton marches 500 miles across the Libyan desert from Alexandria, Egypt to capture the city of Derna. The Marines\' Hymn — "to the shores of Tripoli" — commemorates this action.' },
  { year: 'Apr 27, 1805', title: 'Battle of Derna', desc: 'Eaton\'s ragtag force, supported by naval gunfire, captures Derna — the first time the American flag is raised over a foreign fortification. It\'s a remarkable achievement: a handful of Marines and mercenaries seizing a city in a land war on another continent. The capture threatens the Pasha\'s rule and forces him to negotiate.' },
  { year: 'Jun 10, 1805', title: 'Treaty of Peace', desc: 'Pasha Yusuf agrees to peace. The US pays $60,000 ransom for the Philadelphia\'s crew (technically not "tribute" but practically identical). The treaty ends tribute payments to Tripoli. However, the US continues paying tribute to Algiers, Tunis, and Morocco. Eaton is furious — he believes another week would have toppled the Pasha entirely. Hamet Karamanli, the US-backed pretender, is abandoned.' },
]

const timelineSecond = [
  { year: '1807-1815', title: 'Barbary States Exploit US Weakness', desc: 'During the Embargo Act crisis and War of 1812, the US Navy is occupied elsewhere. Algiers takes advantage, seizing American ships and enslaving crews again. Dey Omar of Algiers declares war on the US in 1812, emboldened by British suggestions that the US is too weak to respond.' },
  { year: 'Mar 1815', title: 'Congress Authorizes Force', desc: 'With the War of 1812 over, Congress authorizes naval action against Algiers. Two squadrons are dispatched — one under Stephen Decatur (now a Commodore), the other under William Bainbridge (redeemed after the Philadelphia disaster).' },
  { year: 'Jun 17, 1815', title: 'Decatur Captures the Algerian Fleet', desc: 'Decatur\'s squadron intercepts the Algerian flagship Meshuda off Cape Gata, Spain, and captures it in a brief engagement. The Algerian admiral, Rais Hammida, is killed. Decatur then captures the brig Estedio. In less than a week, the Algerian navy is effectively destroyed.' },
  { year: 'Jun 28-Jul 1815', title: 'Dictating Terms', desc: 'Decatur sails into Algiers harbor and presents his terms: no more tribute, release of all American prisoners, compensation for seized property. The Dey, with his fleet destroyed, has no choice. Decatur delivers the same terms to Tunis and Tripoli. The era of Barbary tribute from the United States is over permanently.' },
]

const keyFigures = [
  { name: 'Thomas Jefferson', role: 'President (First War)', desc: 'The small-government philosopher who sent the Navy across the Atlantic. Jefferson had personally witnessed Barbary piracy\'s effects as ambassador to France. He believed fighting was cheaper than tribute — and he was right, eventually. The Barbary Wars are the first example of an American president using military force overseas without a formal war declaration.' },
  { name: 'Stephen Decatur', role: 'Naval Officer / Hero', desc: 'The dashing young officer who burned the Philadelphia and later forced Algiers to surrender. Famous for his toast: "Our country! In her intercourse with foreign nations, may she always be in the right; but our country, right or wrong." Killed in a duel in 1820 at age 41 — America\'s first military celebrity.' },
  { name: 'William Eaton', role: 'Consul / Military Adventurer', desc: 'Led the extraordinary overland march to Derna with 8 Marines and a motley force of mercenaries. Eaton was equal parts brilliant and unhinged — a combination that made him perfect for a mission no sane person would attempt. He died embittered in 1811, convinced the government had betrayed him and his allies.' },
  { name: 'Edward Preble', role: 'Commodore', desc: 'Commanded the Mediterranean squadron 1803-1804. Though he never achieved the decisive victory he sought, Preble trained an entire generation of naval officers — "Preble\'s Boys" — who would dominate the War of 1812. His aggressive tactics transformed the Navy\'s culture from cautious to combative.' },
  { name: 'Pasha Yusuf Karamanli', role: 'Ruler of Tripoli', desc: 'Seized power by murdering one brother and exiling another (Hamet). His demand for increased tribute triggered the First Barbary War. Held the Philadelphia\'s crew hostage for 19 months. Eventually made peace when Eaton\'s expedition threatened his throne.' },
]

const faqs = [
  {
    q: 'What were the Barbary Wars?',
    a: 'The Barbary Wars were two conflicts (First: 1801-1805, Second: 1815) between the United States and the Barbary States of North Africa (Morocco, Algiers, Tunis, and Tripoli). The wars were fought to end the practice of paying tribute to Barbary pirates in exchange for safe passage of American merchant ships in the Mediterranean. They were America\'s first overseas military actions and established the US Navy and Marines as expeditionary forces.',
  },
  {
    q: 'What does "shores of Tripoli" mean in the Marines\' Hymn?',
    a: 'The "shores of Tripoli" in the Marines\' Hymn refers to the Battle of Derna (April 27, 1805) during the First Barbary War. William Eaton led 8 US Marines and several hundred mercenaries on a 500-mile march across the Libyan desert to capture the city of Derna. It was the first time the American flag was raised over a foreign fortification, and it established the Marines\' reputation as an expeditionary force capable of operating far from home.',
  },
  {
    q: 'How much did the Barbary Wars cost?',
    a: 'The Barbary Wars cost approximately $3 million in contemporary dollars (over $100 million adjusted). However, the total cost of the Barbary crisis is much higher when including pre-war tribute payments — the US paid over $1.25 million in tribute to the Barbary States between 1785 and 1801, representing up to one-sixth of the federal budget. The wars ultimately proved cheaper than perpetual tribute.',
  },
  {
    q: 'What happened to the USS Philadelphia?',
    a: 'The frigate USS Philadelphia ran aground in Tripoli harbor on October 31, 1803, and was captured with its entire crew of 307. The crew was enslaved for 19 months. On February 16, 1804, Lieutenant Stephen Decatur led a raiding party that boarded and burned the Philadelphia in one of the most famous naval raids in history. The crew was eventually ransomed for $60,000 in the 1805 peace treaty.',
  },
  {
    q: 'Who said "millions for defense, not one cent for tribute"?',
    a: 'The phrase is attributed to Robert Goodloe Harper during the XYZ Affair (1797-1798), not the Barbary Wars specifically. However, the sentiment became closely associated with the Barbary conflict. Ironically, the US continued paying tribute to some Barbary states even during and after the First Barbary War, and paid $60,000 ransom for the Philadelphia\'s crew — making the rhetoric somewhat hollow until Decatur finally ended all tribute in 1815.',
  },
  {
    q: 'Why are the Barbary Wars important?',
    a: 'The Barbary Wars established the US as a power willing to project military force overseas. They proved the US Navy\'s capability in distant waters, created the Marine Corps\' expeditionary identity, and demonstrated that force was more cost-effective than tribute. They also set precedents for presidential war-making power, regime change operations (Eaton\'s attempt to install Hamet Karamanli), and the abandonment of local allies — patterns that would repeat for the next two centuries.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function BarbaryWarsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Barbary Wars' }]} />
        <ShareButtons title="The Barbary Wars — To the Shores of Tripoli" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Barbary Wars
          </h1>
          <p className="text-lg text-stone-500 mb-2">1801–1815 · &ldquo;To the Shores of Tripoli&rdquo;</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            America&apos;s first overseas military action. <strong className="text-[#991b1b]">700+ Americans</strong>{' '}
            enslaved by North African pirates. A navy sent 5,000 miles to fight. Eight Marines marched 500 miles
            across a desert. &ldquo;Millions for defense, not one cent for tribute&rdquo; — except for the
            tribute we kept paying until <strong className="text-[#991b1b]">1815</strong>.
          </p>
        </header>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {keyStats.map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl md:text-2xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Cost: Fighting Was Cheaper Than Paying
          </h2>
          <p className="text-stone-700 mb-6">
            The Barbary Wars present a rare case where military action was genuinely more cost-effective
            than the alternative. The US was paying up to one-sixth of its federal budget in tribute to
            the Barbary States. Two wars and $100M+ later (in today&apos;s dollars), the tribute stopped
            permanently. Sometimes the math actually works — though the human cost of 700+ enslaved
            Americans and dozens of combat deaths shouldn&apos;t be reduced to a ledger entry.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount (2024$)</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((r) => (
                  <tr key={r.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">{r.amount}</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Context: The Barbary System
          </h2>
          <p className="text-stone-700 mb-4">
            For centuries, the Barbary States of North Africa — Morocco, Algiers, Tunis, and Tripoli
            (modern Libya) — operated a system of state-sponsored piracy. Ships that didn&apos;t pay
            tribute were seized, their cargoes confiscated, and their crews enslaved. European powers
            paid annual tribute as a cost of doing business in the Mediterranean.
          </p>
          <p className="text-stone-700 mb-4">
            During the colonial era, American ships were protected by British tribute payments and the
            Royal Navy. After independence, that protection vanished. American merchants in the
            Mediterranean were on their own — and the Barbary corsairs immediately took advantage.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-700 text-sm">
              Between 1785 and 1793, Algiers alone captured 13 American ships and enslaved over 100
              American sailors. Some were held for over a decade. The ransoms demanded were staggering —
              the 1795 treaty with Algiers cost $1 million (approximately $25 million today), plus a
              36-gun frigate as a gift, plus annual tribute in naval stores. This single treaty consumed
              roughly one-sixth of the entire federal budget.
            </p>
          </div>
          <p className="text-stone-700">
            The question that divided the early republic: pay tribute indefinitely, or build a navy and
            fight? Jefferson argued for fighting as early as 1785. Adams preferred diplomacy and tribute
            as cheaper. When Jefferson became president, he got his war — and discovered it was neither
            quick nor cheap.
          </p>
        </section>

        {/* First Barbary War Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            First Barbary War (1801-1805)
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200" />
            <div className="space-y-6">
              {timelineFirst.map((event) => (
                <div key={event.year} className="relative pl-10">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#991b1b]" />
                  <div className="text-sm font-mono text-[#991b1b] mb-1">{event.year}</div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-1">{event.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Second Barbary War Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Second Barbary War (1815)
          </h2>
          <p className="text-stone-700 mb-6">
            The Second Barbary War was swift, decisive, and everything the First was not. With the War
            of 1812 over, America had a battle-hardened navy and a score to settle.
          </p>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200" />
            <div className="space-y-6">
              {timelineSecond.map((event) => (
                <div key={event.year} className="relative pl-10">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#991b1b]" />
                  <div className="text-sm font-mono text-[#991b1b] mb-1">{event.year}</div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-1">{event.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Figures */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Key Figures
          </h2>
          <div className="space-y-4">
            {keyFigures.map((f) => (
              <div key={f.name} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="font-semibold text-stone-800">{f.name} <span className="text-sm text-stone-500 font-normal">— {f.role}</span></div>
                <p className="text-sm text-stone-600 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Marines */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            &ldquo;From the Halls of Montezuma to the Shores of Tripoli&rdquo;
          </h2>
          <p className="text-stone-700 mb-4">
            The Barbary Wars gave the Marine Corps its identity. The Battle of Derna — where 8 Marines
            marched 500 miles across the Libyan desert and captured a fortified city — became the
            foundational myth of Marine expeditionary warfare. The Mameluke sword carried by Marine
            officers today commemorates this battle, presented (according to tradition) by Hamet
            Karamanli to Lieutenant Presley O&apos;Bannon after the victory.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-700 text-sm">
              The Marine Corps Hymn — the oldest official song in the US military — opens with
              &ldquo;From the Halls of Montezuma to the shores of Tripoli.&rdquo; The Tripoli reference
              comes from Derna. &ldquo;Halls of Montezuma&rdquo; references the Mexican-American War
              (1847). The Hymn literally defines the Marines by two wars of overseas intervention —
              establishing from the very beginning that the Corps exists to project American power abroad.
            </p>
          </div>
        </section>

        {/* First Regime Change */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            America&apos;s First Regime Change Operation
          </h2>
          <p className="text-stone-700 mb-4">
            William Eaton&apos;s expedition to install Hamet Karamanli as ruler of Tripoli was America&apos;s
            first attempted regime change — a covert operation to replace an unfriendly government with a
            compliant one. The playbook: find a disaffected exile, promise him power, use American military
            force to install him, then abandon him when politically convenient.
          </p>
          <p className="text-stone-700 mb-4">
            It worked militarily. Eaton captured Derna and threatened the Pasha&apos;s rule. But the
            Jefferson administration, preferring a quick peace to a prolonged campaign, negotiated directly
            with Pasha Yusuf — effectively betraying Hamet, who was abandoned at Derna.
          </p>
          <p className="text-stone-700">
            The pattern — use a local ally, achieve military success, then abandon the ally for diplomatic
            convenience — would repeat throughout American history: the Bay of Pigs, the Kurds (multiple
            times), the South Vietnamese, the Afghan allies left behind in 2021. The Barbary Wars
            established regime change as an American tool and allied abandonment as an American habit.
          </p>
        </section>

        {/* Editorial */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy: The Template for Forever
          </h2>
          <p className="text-stone-700 mb-4">
            The Barbary Wars are often presented as a simple story of American heroism against piracy.
            The reality is more nuanced and more consequential:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              'First overseas military intervention — establishing the precedent that the US would project force globally.',
              'First regime change attempt — and first abandonment of a local ally.',
              'Marines\' expeditionary identity — "every clime and place" begins at Derna.',
              'The Navy as permanent institution — Mediterranean deployments continue to this day.',
              'Presidential war power — Jefferson sent the Navy without a formal declaration of war.',
              'The gap between rhetoric and reality — "not one cent for tribute" while paying $60,000 ransom.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-stone-700">
                <span className="text-[#991b1b] font-bold mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-stone-700">
            The Barbary Wars were, in many ways, a preview of everything to come. Overseas intervention,
            regime change, allied betrayal, the gap between patriotic rhetoric and messy reality — it&apos;s
            all here, in 1801, at the very beginning. The shores of Tripoli were just the first shore.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-stone-200 pb-4">
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }),
            }}
          />
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/quasi-war', label: 'Quasi-War — The Navy\'s First Fight' },
              { href: '/war-of-1812', label: 'War of 1812 — The Navy\'s Next Test' },
              { href: '/analysis/americas-forgotten-wars', label: 'America\'s Forgotten Wars' },
              { href: '/analysis/undeclared-wars', label: 'Undeclared Wars' },
              { href: '/banana-wars', label: 'Banana Wars — Overseas Intervention Continues' },
              { href: '/us-wars-list', label: 'Complete List of US Wars' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-stone-50 hover:bg-stone-100 rounded-lg p-3 border border-stone-200 text-stone-700 hover:text-[#991b1b] transition-colors text-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Sources</h2>
          <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
            <li>Frank Lambert — The Barbary Wars: American Independence in the Atlantic World (2005)</li>
            <li>Joshua London — Victory in Tripoli: How America&apos;s War with the Barbary Pirates Established the US Navy (2005)</li>
            <li>Ian Toll — Six Frigates: The Epic History of the Founding of the US Navy (2006)</li>
            <li>Naval History and Heritage Command — Barbary Wars Records</li>
            <li>Marine Corps History Division — Battle of Derna</li>
            <li>Congressional Research Service — Instances of Use of US Armed Forces Abroad</li>
          </ul>
        </section>

        <BackToTop />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Barbary Wars: America\'s First Overseas Military Action (1801-1815)',
            description: 'Comprehensive analysis of the Barbary Wars — costs, naval battles, the Marines at Tripoli, and America\'s first overseas interventions.',
            url: 'https://warcosts.org/barbary-wars',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-16',
            dateModified: '2025-03-16',
          }),
        }}
      />
    </main>
  )
}
