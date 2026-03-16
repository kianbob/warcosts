import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quasi-War Cost — $200M+ Adjusted, America\'s First Undeclared War with France (1798-1800) | WarCosts',
  description: 'The Quasi-War (1798-1800) was America\'s first undeclared naval war — an undeclared conflict with France that cost ~$6M ($200M+ adjusted), deployed 54 warships, and established the US Navy as a fighting force. Adams chose peace over war hawks.',
  keywords: ['Quasi-War', 'Quasi-War cost', 'undeclared war France', 'US Navy history', 'John Adams', 'Convention of 1800', 'XYZ Affair', 'Alien and Sedition Acts'],
  openGraph: {
    title: 'The Quasi-War — $200M+, America\'s First Undeclared Naval War',
    description: 'The forgotten 1798-1800 naval conflict with France that birthed the US Navy, tested the Constitution, and proved presidents could wage war without declaring it.',
    url: 'https://warcosts.org/quasi-war',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Total Cost (2024$)', value: '$200M+' },
  { label: 'Original Cost', value: '~$6 Million' },
  { label: 'US Warships Deployed', value: '54' },
  { label: 'US Sailors Killed', value: '~82' },
  { label: 'French Vessels Captured', value: '85+' },
  { label: 'Duration', value: '2 Years' },
]

const costBreakdown = [
  { category: 'Naval Construction', amount: '$80M', desc: 'Building the first six frigates and additional warships — the birth of the US Navy' },
  { category: 'Naval Operations', amount: '$65M', desc: 'Patrols, convoy escorts, and engagements across the Caribbean and Atlantic' },
  { category: 'Marine Corps Establishment', amount: '$15M', desc: 'Re-establishment of the Marine Corps in 1798 specifically for this conflict' },
  { category: 'Revenue Cutters & Privateers', amount: '$20M', desc: 'Revenue Marine cutters pressed into naval service; letters of marque for privateers' },
  { category: 'Diplomatic & Administrative', amount: '$20M', desc: 'XYZ Affair fallout, diplomatic missions, new Department of the Navy' },
]

const timeline = [
  { year: '1778', title: 'Alliance with France', desc: 'During the Revolution, France signs a Treaty of Alliance with the US — providing crucial military support that helps win independence. The treaty includes mutual defense obligations. France expects gratitude; America promises it.' },
  { year: '1789-93', title: 'French Revolution & Neutrality', desc: 'France erupts in revolution and goes to war with Britain. France invokes the 1778 alliance, demanding American support. Washington declares neutrality in 1793 — enraging the French. From France\'s perspective, America is betraying the ally that made its independence possible. From America\'s perspective, getting dragged into European wars is exactly what the founders warned against.' },
  { year: '1793-97', title: 'Escalating Seizures', desc: 'France begins seizing American merchant ships trading with Britain. By 1797, France has captured over 300 American vessels. American sailors are imprisoned, cargoes confiscated. The Jay Treaty with Britain (1794) further infuriates France, which sees it as America siding with its enemy.' },
  { year: '1797', title: 'XYZ Affair', desc: 'President Adams sends diplomats to Paris to negotiate. French agents (referred to as X, Y, and Z) demand bribes of $250,000 and a $10 million loan before negotiations can begin. When the dispatches are published, Americans are outraged. The rallying cry: "Millions for defense, but not one cent for tribute!" (Actually said about the Barbary pirates, but Americans applied it here too.)' },
  { year: 'Apr 1798', title: 'Department of the Navy Created', desc: 'Congress creates the Department of the Navy — the US had disbanded its navy after the Revolution. The Naval Act authorizes completion of six frigates including USS Constitution ("Old Ironsides"), USS Constellation, and USS United States. Congress also re-establishes the Marine Corps on July 11, 1798.' },
  { year: 'Jul 1798', title: 'Alien & Sedition Acts', desc: 'Adams signs the Alien and Sedition Acts — ostensibly war measures but clearly aimed at domestic political opponents. The Sedition Act makes it a crime to criticize the government. Federalists use it to arrest Republican newspaper editors. It\'s the first major assault on the First Amendment, justified by a quasi-war that was never formally declared. The pattern of using wartime to suppress dissent begins here.' },
  { year: 'Jul 7, 1798', title: 'Congress Authorizes Force', desc: 'Congress rescinds all treaties with France and authorizes the Navy to seize armed French vessels. No formal declaration of war is made — establishing the precedent that the US can wage war without declaring it. This precedent will be invoked for the next 228 years.' },
  { year: 'Feb 9, 1799', title: 'USS Constellation vs L\'Insurgente', desc: 'Captain Thomas Truxtun\'s USS Constellation captures the French frigate L\'Insurgente in the Caribbean — the first significant victory for the new US Navy. The 36-gun Constellation defeats the 40-gun French frigate in just over an hour. Three Americans killed, proving the infant navy can fight.' },
  { year: 'Feb 1, 1800', title: 'USS Constellation vs La Vengeance', desc: 'Truxtun engages the 54-gun French frigate La Vengeance in a five-hour night battle. The Constellation batters the French ship severely but cannot capture her due to a fallen mainmast. Tactically indecisive, but the willingness of a 36-gun American frigate to engage a 54-gun opponent impresses European navies.' },
  { year: '1798-1800', title: 'Caribbean Operations', desc: 'The US Navy conducts convoy escorts and patrols throughout the Caribbean. American warships and privateers capture over 85 French vessels while losing only one warship (the schooner Retaliation). The Navy proves remarkably effective for a force that barely existed two years earlier. Toussaint Louverture\'s Haiti becomes a secret US ally against France.' },
  { year: 'Oct 1799', title: 'Adams Chooses Peace', desc: 'Against the wishes of his own Federalist Party — especially Alexander Hamilton, who wants a full-scale war and an army to lead — Adams sends a new peace delegation to France. Hamilton and the war hawks are furious. Adams later calls this the proudest act of his presidency. It probably costs him the 1800 election.' },
  { year: 'Sep 30, 1800', title: 'Convention of 1800 (Treaty of Mortefontaine)', desc: 'The US and France sign a peace treaty ending the Quasi-War. The 1778 alliance is formally terminated. France agrees to stop seizing American ships. The US agrees to drop $20 million in damage claims against France. Both sides declare peace. The undeclared war is over — without ever having been declared.' },
]

const keyFigures = [
  { name: 'John Adams', role: 'President', desc: 'Navigated between war hawks in his own party and anti-war Republicans. Chose peace with France when war would have been politically easier. The Quasi-War defined his presidency — both the principled peace and the shameful Alien and Sedition Acts. He later said sending the peace mission to France was "the most disinterested and meritorious actions of my life."' },
  { name: 'Alexander Hamilton', role: 'Inspector General', desc: 'Wanted full-scale war with France and raised a 10,000-man army with himself as de facto commander. Dreamed of conquering Louisiana and Florida. Adams suspected Hamilton of wanting to use the army for domestic political purposes — possibly even a military coup. The Quasi-War exposed Hamilton\'s authoritarian tendencies.' },
  { name: 'Thomas Truxtun', role: 'Captain, USS Constellation', desc: 'The first American naval hero since John Paul Jones. His victories over L\'Insurgente and engagement with La Vengeance proved the new navy could fight. Established tactical traditions and training standards that shaped the US Navy for generations.' },
  { name: 'Talleyrand', role: 'French Foreign Minister', desc: 'The mastermind behind the XYZ Affair\'s bribery demands. A survivor who served every French government from the ancien régime through Napoleon. Eventually realized that war with America served no French interest and facilitated the peace settlement.' },
  { name: 'Toussaint Louverture', role: 'Haitian Revolutionary Leader', desc: 'The unlikely American ally. Louverture\'s revolution in Haiti (Saint-Domingue) aligned Haitian interests with the US against France. American trade with Haiti — in defiance of French authority — was a key element of the Quasi-War. The US supplied Louverture while fighting France, then betrayed Haiti once it became independent.' },
  { name: 'Benjamin Stoddert', role: 'First Secretary of the Navy', desc: 'Organized the Navy from scratch. Built dockyards, procured ships, established supply chains, and directed naval strategy across the Caribbean. Created the institutional foundation for what would become the world\'s most powerful navy.' },
]

const navalForces = [
  { ship: 'USS Constitution', guns: 44, note: '"Old Ironsides" — would become the most famous warship in American history during the War of 1812' },
  { ship: 'USS Constellation', guns: 36, note: 'Won the first major victories of the Quasi-War under Captain Truxtun' },
  { ship: 'USS United States', guns: 44, note: 'One of the original six frigates authorized by Congress' },
  { ship: 'USS Congress', guns: 36, note: 'Active in Caribbean patrols throughout the conflict' },
  { ship: 'USS Chesapeake', guns: 36, note: 'Later infamous for the Chesapeake–Leopard affair (1807)' },
  { ship: 'USS President', guns: 44, note: 'The last of the original six frigates to be completed' },
]

const faqs = [
  {
    q: 'What was the Quasi-War?',
    a: 'The Quasi-War (1798-1800) was an undeclared naval conflict between the United States and France. After France began seizing American merchant ships and the XYZ Affair revealed French demands for bribes, Congress authorized the Navy to attack French vessels without formally declaring war. Over two years, the US Navy captured 85+ French ships while losing only one warship. The Convention of 1800 ended the conflict peacefully.',
  },
  {
    q: 'How much did the Quasi-War cost?',
    a: 'The Quasi-War cost approximately $6 million in contemporary dollars, or over $200 million adjusted for inflation. The bulk went to building the US Navy from scratch — constructing frigates, establishing the Department of the Navy, and re-establishing the Marine Corps. While expensive for the young republic, the investment created a permanent naval capability that proved its worth in the Barbary Wars and War of 1812.',
  },
  {
    q: 'Why is the Quasi-War important?',
    a: 'The Quasi-War established several critical precedents: (1) The US could wage war without a formal declaration — a precedent used ever since. (2) The US Navy was born as a permanent institution. (3) The Marine Corps was re-established. (4) The Alien and Sedition Acts showed how quickly wartime could be used to suppress civil liberties. (5) Adams\'s choice of peace over war established that presidents could resist war hawks — though it cost him re-election.',
  },
  {
    q: 'What was the XYZ Affair?',
    a: 'In 1797, President Adams sent diplomats to France to negotiate peace. French agents (designated X, Y, and Z in published dispatches) demanded $250,000 in bribes for French officials and a $10 million loan to France before negotiations could begin. When the dispatches were published, American outrage was massive. The affair pushed the US toward undeclared war and became a rallying point for the Federalist Party.',
  },
  {
    q: 'Did the US win the Quasi-War?',
    a: 'Militarily, yes. The US Navy captured over 85 French vessels while losing only one warship (the schooner Retaliation). The Convention of 1800 ended French seizures of American ships and dissolved the 1778 alliance. However, the US dropped $20 million in damage claims — meaning American merchants whose ships were seized never received compensation. The real winner was the principle of American neutrality and the US Navy itself.',
  },
  {
    q: 'What were the Alien and Sedition Acts?',
    a: 'Passed in 1798 during the Quasi-War, these four laws increased the residency requirement for citizenship, authorized deportation of "dangerous" aliens, and made it illegal to publish "false, scandalous, or malicious writing" against the government. The Sedition Act was used to prosecute Republican newspaper editors critical of Adams. The acts represent the first major wartime assault on civil liberties — a pattern repeated in every subsequent conflict.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function QuasiWarPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Quasi-War' }]} />
        <ShareButtons title="The Quasi-War — America's First Undeclared Naval War" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Quasi-War
          </h1>
          <p className="text-lg text-stone-500 mb-2">1798–1800 · America&apos;s First Undeclared War</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            An undeclared naval war with France that birthed the US Navy, tested the First Amendment,
            and established the precedent that presidents can wage war without Congress declaring it.
            Cost: <strong className="text-[#991b1b]">$200M+ adjusted</strong>.
            Ships deployed: <strong className="text-[#991b1b]">54</strong>.
            French vessels captured: <strong className="text-[#991b1b]">85+</strong>.
            Wars declared by Congress: <strong className="text-[#991b1b]">zero</strong>.
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
            The Cost: Building a Navy from Nothing
          </h2>
          <p className="text-stone-700 mb-6">
            The Quasi-War&apos;s greatest expense wasn&apos;t fighting France — it was creating a navy
            to fight with. After the Revolution, the US had disbanded its entire naval force. The Quasi-War
            forced the construction of a fleet from scratch, including six frigates that would become
            legendary in the War of 1812. The $200M+ price tag bought not just a war, but a permanent
            institution.
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
            Context: Why France Turned on Its Former Ally
          </h2>
          <p className="text-stone-700 mb-4">
            The Quasi-War&apos;s roots lie in the awkward aftermath of the American Revolution. France had
            bankrolled American independence — spending the equivalent of billions helping the colonists
            defeat Britain. The 1778 Treaty of Alliance promised mutual support. Then the French Revolution
            erupted, France went to war with Britain, and America suddenly wanted nothing to do with its
            former ally.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-700 text-sm">
              Washington&apos;s Neutrality Proclamation (1793) and the Jay Treaty with Britain (1794)
              enraged France. From the French perspective, America was betraying the alliance that made its
              existence possible. From the American perspective, getting dragged into European wars was
              exactly what the founders warned against. Both sides had a point — which is what made the
              Quasi-War inevitable.
            </p>
          </div>
          <p className="text-stone-700 mb-4">
            By 1797, France had seized over 300 American merchant ships. American sailors rotted in French
            prisons. Commerce was devastated. The young republic faced a choice: submit, negotiate, or fight.
            The XYZ Affair — France&apos;s demand for bribes before even beginning negotiations — made
            the choice for them.
          </p>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline: From Alliance to Undeclared War
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200" />
            <div className="space-y-6">
              {timeline.map((event) => (
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

        {/* Naval Forces */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Birth of the US Navy
          </h2>
          <p className="text-stone-700 mb-6">
            The Quasi-War created the US Navy as a permanent institution. The six original frigates,
            authorized under the Naval Act of 1794 but completed during the Quasi-War, became the
            backbone of American naval power for decades. These ships were designed by Joshua Humphreys
            to be faster than anything they couldn&apos;t outfight, and stronger than anything they
            couldn&apos;t outrun.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Ship</th>
                  <th className="text-center py-2 font-semibold text-stone-800">Guns</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800">Significance</th>
                </tr>
              </thead>
              <tbody>
                {navalForces.map((s) => (
                  <tr key={s.ship} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700 font-medium">{s.ship}</td>
                    <td className="py-2 text-center font-mono text-[#991b1b]">{s.guns}</td>
                    <td className="py-2 pl-4 text-stone-500 text-sm">{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

        {/* Alien and Sedition Acts */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Dark Side: Alien and Sedition Acts
          </h2>
          <p className="text-stone-700 mb-4">
            The Quasi-War&apos;s most troubling legacy isn&apos;t naval — it&apos;s constitutional. In
            July 1798, riding the wave of anti-French sentiment, Congress passed and Adams signed four laws
            collectively known as the Alien and Sedition Acts:
          </p>
          <div className="space-y-3 mb-4">
            {[
              { name: 'Naturalization Act', desc: 'Extended residency requirement for citizenship from 5 to 14 years — targeting French and Irish immigrants who tended to vote Republican.' },
              { name: 'Alien Friends Act', desc: 'Authorized the president to deport any non-citizen deemed "dangerous to the peace and safety" of the US — without trial or due process.' },
              { name: 'Alien Enemies Act', desc: 'Authorized detention/deportation of citizens from hostile nations during wartime. This act is still on the books today — it was used to intern Japanese Americans in WWII.' },
              { name: 'Sedition Act', desc: 'Made it a crime to publish "false, scandalous and malicious writing" against the government or its officials. Penalty: up to two years in prison and a $2,000 fine. Used to prosecute 25 people, convict 10 — all Republican newspaper editors.' },
            ].map((act) => (
              <div key={act.name} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="font-semibold text-stone-800 text-sm">{act.name}</div>
                <p className="text-sm text-stone-600 mt-1">{act.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
            <p className="text-stone-700 text-sm">
              The pattern established here — using wartime fears to suppress domestic dissent — would
              repeat throughout American history: the Espionage Act (WWI), Japanese internment (WWII),
              McCarthyism (Cold War), the PATRIOT Act (War on Terror). The Quasi-War proved that even
              an undeclared, limited naval conflict could be used to justify assaults on civil liberties.
              The precedent has never expired.
            </p>
          </div>
        </section>

        {/* Adams's Choice */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Adams&apos;s Finest Hour: Choosing Peace
          </h2>
          <p className="text-stone-700 mb-4">
            In late 1799, with the Quasi-War going well and his Federalist Party clamoring for a full
            declaration of war against France, John Adams made the most consequential decision of his
            presidency: he sent a new peace delegation to Paris.
          </p>
          <p className="text-stone-700 mb-4">
            Alexander Hamilton was apoplectic. Hamilton had raised a 10,000-man army and dreamed of
            leading it against France&apos;s possessions in Louisiana and Florida — and possibly against
            domestic political opponents. War with France would have made Hamilton the most powerful
            man in America. Adams saw this clearly and chose peace partly to prevent it.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-1">
              &ldquo;I desire no other inscription over my gravestone than: &lsquo;Here lies John Adams,
              who took upon himself the responsibility of the peace with France in the year 1800.&rsquo;&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— John Adams</p>
          </div>
          <p className="text-stone-700">
            The decision split the Federalist Party, contributed to Adams&apos;s defeat in the 1800
            election, and ended his political career. It also prevented a full-scale war, avoided the
            creation of a dangerous standing army under Hamilton&apos;s control, and preserved the young
            republic from the imperial temptations that would ultimately consume it a century later. It
            remains one of the most courageous acts of presidential restraint in American history.
          </p>
        </section>

        {/* Editorial */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy: The Template for Undeclared Wars
          </h2>
          <p className="text-stone-700 mb-4">
            The Quasi-War matters far more than its modest casualty count suggests. It established
            precedents that shaped two centuries of American warfare:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              'Presidents can wage war without a Congressional declaration — used in Korea, Vietnam, Iraq, Libya, Syria, and dozens of other conflicts.',
              'Wartime (even undeclared wartime) justifies restrictions on civil liberties — from the Sedition Act to the PATRIOT Act.',
              'The US Navy exists as a permanent institution — eventually becoming the most powerful naval force in history.',
              'Standing armies are politically dangerous — Hamilton\'s army-building proved the founders\' fears correct.',
              'Peace requires political courage — Adams sacrificed his career for it.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-stone-700">
                <span className="text-[#991b1b] font-bold mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-stone-700">
            The Quasi-War is America&apos;s most forgotten consequential conflict. The Navy, the Marine
            Corps, the precedent of undeclared war, the first assault on the Bill of Rights — all trace
            back to this two-year naval spat with France that most Americans have never heard of.
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
              { href: '/barbary-wars', label: 'Barbary Wars — The Navy\'s Next Test' },
              { href: '/revolutionary-war', label: 'Revolutionary War — Where It All Began' },
              { href: '/war-of-1812', label: 'War of 1812 — The Navy Proves Itself' },
              { href: '/analysis/undeclared-wars', label: 'America\'s Undeclared Wars' },
              { href: '/analysis/americas-forgotten-wars', label: 'America\'s Forgotten Wars' },
              { href: '/analysis/war-and-civil-liberties', label: 'War and Civil Liberties' },
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
            <li>Alexander DeConde — The Quasi-War: The Politics and Diplomacy of the Undeclared War with France (1966)</li>
            <li>Michael Palmer — Stoddert&apos;s War: Naval Operations During the Quasi-War with France (1987)</li>
            <li>Ian Toll — Six Frigates: The Epic History of the Founding of the US Navy (2006)</li>
            <li>David McCullough — John Adams (2001)</li>
            <li>Naval History and Heritage Command — Quasi-War Records</li>
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
            headline: 'The Quasi-War: America\'s First Undeclared Naval War (1798-1800)',
            description: 'Comprehensive analysis of the Quasi-War — costs, naval battles, XYZ Affair, Alien and Sedition Acts, and the birth of the US Navy.',
            url: 'https://warcosts.org/quasi-war',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-16',
            dateModified: '2025-03-16',
          }),
        }}
      />
    </main>
  )
}
