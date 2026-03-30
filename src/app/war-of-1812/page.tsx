import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'War of 1812 Cost — $1.6 Billion, 15,000 US Dead, The Second War of Independence | WarCosts',
  description: 'The War of 1812 (1812-1815) cost $1.6 billion in today\'s dollars, killed approximately 15,000 Americans, saw the burning of Washington D.C., and produced the Star-Spangled Banner. A pointless war that both sides claimed to win.',
  keywords: ['War of 1812 cost', 'War of 1812 casualties', 'burning of Washington', 'Battle of New Orleans', 'Star-Spangled Banner', 'impressment', 'Treaty of Ghent'],
  openGraph: {
    title: 'The War of 1812 — $1.6B, 15K Dead, Washington Burned, Nobody Won',
    description: 'America\'s most pointless war: invaded Canada, got repulsed, had the capital burned, then declared victory because of a battle fought after the peace treaty was signed.',
    url: 'https://warcosts.org/war-of-1812',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Total Cost (2024$)', value: '$1.6 Billion' },
  { label: 'US Military Deaths', value: '~15,000' },
  { label: 'US Combat Deaths', value: '~2,260' },
  { label: 'British/Canadian Dead', value: '~8,600' },
  { label: 'Native American Dead', value: 'Thousands' },
  { label: 'Outcome', value: 'Status Quo Ante' },
]

const costBreakdown = [
  { category: 'Army Operations', amount: '$720M', desc: 'Land campaigns in Canada, Chesapeake, Gulf Coast, and frontier' },
  { category: 'Navy Operations', amount: '$380M', desc: 'Naval warfare on the Great Lakes and Atlantic; frigate duels' },
  { category: 'Militia & Volunteer Forces', amount: '$280M', desc: 'State militias — often poorly trained and sometimes refusing to cross borders' },
  { category: 'Reconstruction & War Debt', amount: '$220M', desc: 'Rebuilding Washington D.C. and servicing war bonds' },
]

const timeline = [
  { year: '1803-1812', title: 'Impressment & Embargo', desc: 'Britain, fighting Napoleon, seizes American merchant ships and "impresses" (kidnaps) American sailors into the Royal Navy — an estimated 6,000-10,000 men. Jefferson responds with the disastrous Embargo Act (1807), which damages the American economy far more than Britain\'s. "War Hawks" in Congress demand action.' },
  { year: 'Jun 18, 1812', title: 'War Declared', desc: 'Congress declares war 79-49 in the House, 19-13 in the Senate — the closest war vote in American history. New England (which depends on trade with Britain) overwhelmingly opposes. The stated causes: impressment, trade restrictions, and British support for Native American resistance. The unstated cause: expansionists want Canada.' },
  { year: 'Jul-Dec 1812', title: 'Invasion of Canada: Total Failure', desc: 'Three separate American invasions of Canada fail spectacularly. General William Hull surrenders Detroit without a fight. The Battle of Queenston Heights is lost when New York militia refuses to cross into Canada. The northern army retreats from Montreal. The "easy conquest" Thomas Jefferson predicted proves anything but.' },
  { year: '1813', title: 'York & Lake Erie', desc: 'Americans burn York (modern Toronto), the capital of Upper Canada — setting a precedent the British will remember. Oliver Hazard Perry wins the Battle of Lake Erie ("We have met the enemy and they are ours"). Tecumseh, the great Shawnee leader allied with Britain, is killed at the Battle of the Thames.' },
  { year: 'Aug 24, 1814', title: 'Washington Burns', desc: 'British forces defeat the American militia at Bladensburg (the "Bladensburg Races" — because the militia ran). They march into Washington D.C. and burn the White House, Capitol, Treasury, and other government buildings. President Madison flees. First Lady Dolley Madison saves Gilbert Stuart\'s portrait of George Washington. It is the only time a foreign power has captured and burned the American capital.' },
  { year: 'Sep 13-14, 1814', title: 'Fort McHenry — Star-Spangled Banner', desc: 'British forces bombard Fort McHenry in Baltimore Harbor for 25 hours. The fort holds. Lawyer Francis Scott Key, watching from a British ship, writes "The Star-Spangled Banner" — which becomes the national anthem in 1931. Baltimore\'s defense prevents the British from taking the city.' },
  { year: 'Dec 24, 1814', title: 'Treaty of Ghent', desc: 'The peace treaty is signed in Ghent, Belgium. The terms: everything goes back to the way it was before the war (status quo ante bellum). None of America\'s stated war aims — ending impressment, resolving trade disputes — are addressed. Britain had already stopped impressing American sailors because Napoleon was defeated. The war achieved nothing the passage of time wouldn\'t have accomplished.' },
  { year: 'Jan 8, 1815', title: 'Battle of New Orleans', desc: 'Two weeks after the peace treaty is signed (but before news reaches America), Andrew Jackson wins a crushing victory at New Orleans — killing 2,000 British soldiers while suffering only 71 casualties. The battle is militarily irrelevant but politically transformative: it makes Jackson a national hero and future president, and lets Americans pretend they won the war.' },
  { year: '1815+', title: 'The Real Losers', desc: 'Native Americans are the war\'s biggest losers. British withdrawal means the loss of their most powerful ally against American expansion. Tecumseh is dead. The dream of a Native confederacy dies with him. The Treaty of Ghent technically restores Native lands, but the US ignores this provision entirely. The post-war period sees accelerated westward expansion and Indian removal.' },
]

const keyFigures = [
  { name: 'James Madison', role: 'President', desc: 'The "Father of the Constitution" led the nation into its most poorly prepared war. Fled Washington as it burned. Despite achieving none of his war aims, the post-war nationalist surge helped his legacy.' },
  { name: 'Andrew Jackson', role: 'General / Future President', desc: 'Won the Battle of New Orleans after the war was already over. Used his military fame to build a political career that led to the presidency and the Indian Removal Act — the war\'s most lasting domestic consequence.' },
  { name: 'Tecumseh', role: 'Shawnee Leader', desc: 'Built a confederacy of Native nations to resist American expansion. Allied with Britain as the only power capable of checking the US. Killed at the Battle of the Thames in 1813. His death ended the last realistic hope of Native resistance east of the Mississippi.' },
  { name: 'Dolley Madison', role: 'First Lady', desc: 'Saved Gilbert Stuart\'s portrait of George Washington from the burning White House — an act of cultural preservation during the capital\'s darkest hour.' },
  { name: 'Oliver Hazard Perry', role: 'Naval Commander', desc: 'Won the Battle of Lake Erie, securing American control of the Great Lakes. His message — "We have met the enemy and they are ours" — became one of the most famous dispatches in US naval history.' },
  { name: 'Francis Scott Key', role: 'Lawyer / Poet', desc: 'Wrote "The Star-Spangled Banner" while watching the bombardment of Fort McHenry. The song became the national anthem in 1931. Key was also a slaveholder who later opposed abolition — a detail often omitted from the patriotic narrative.' },
]

const faqs = [
  {
    q: 'How much did the War of 1812 cost?',
    a: 'The War of 1812 cost approximately $1.6 billion in 2024 dollars, including $720 million in Army operations, $380 million in Navy operations, $280 million for militia forces, and $220 million in reconstruction and war debt. The war also devastated American trade, which had been one of the stated reasons for fighting in the first place.',
  },
  {
    q: 'Who won the War of 1812?',
    a: 'Nobody — or everybody, depending on national mythology. The Treaty of Ghent restored the status quo ante bellum (everything goes back to how it was). None of America\'s stated war aims were achieved in the treaty. Britain stopped impressing sailors because Napoleon was defeated, not because of the war. Americans claim victory because of New Orleans. Canadians claim victory because they repelled the invasion. Native Americans are the only clear losers — they lost their British ally and their lands.',
  },
  {
    q: 'Why did the British burn Washington?',
    a: 'Partly retaliation for the American burning of York (Toronto) in 1813, partly to demoralize the American government. British forces defeated a poorly organized American militia at Bladensburg, Maryland, then marched into an evacuated Washington and burned the White House, Capitol, Treasury, and other public buildings. It remains the only time a foreign power has captured and burned the US capital.',
  },
  {
    q: 'How many people died in the War of 1812?',
    a: 'Approximately 15,000 Americans died — about 2,260 in combat and the rest from disease. British and Canadian deaths totaled approximately 8,600. Native American casualties are poorly documented but numbered in the thousands. Civilian deaths on all sides add to the toll. Like most pre-modern wars, disease was deadlier than combat.',
  },
  {
    q: 'Was the War of 1812 necessary?',
    a: 'No. The primary grievance — impressment of American sailors — ended when Napoleon was defeated in 1814, which would have happened regardless of the war. The trade restrictions that sparked the conflict were byproducts of the Napoleonic Wars. The "War Hawks" who pushed for war wanted Canadian territory and Native American lands — goals that were expansionist, not defensive. The war achieved nothing that patience wouldn\'t have accomplished, at the cost of 15,000 American lives.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function WarOf1812Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'War of 1812' }]} />
        <ShareButtons title="War of 1812 — $1.6B, 15K Dead, Washington Burned, Nobody Won" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The War of 1812
          </h1>
          <p className="text-lg text-stone-500 mb-2">1812–1815 · America&apos;s Most Pointless War</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            The US invaded Canada, got repulsed. Britain burned Washington D.C. Andrew Jackson won a battle
            two weeks after the peace treaty was signed. The treaty changed nothing. The war cost{' '}
            <strong className="text-[#991b1b]">$1.6 billion</strong> and{' '}
            <strong className="text-[#991b1b]">~15,000 American lives</strong>. The only lasting legacy:
            the national anthem and the destruction of Native American resistance.
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
            The Cost: $1.6 Billion for Nothing
          </h2>
          <p className="text-stone-700 mb-6">
            The War of 1812 cost $1.6 billion in today&apos;s dollars and achieved precisely zero of its stated
            objectives. The treaty that ended it — the Treaty of Ghent — simply restored the pre-war status quo.
            Every American who died, every dollar spent, every building burned: all for a return to the starting position.
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

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline: Hubris, Humiliation, and a Song
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

        {/* The Real Losers */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Real Losers: Native Americans
          </h2>
          <p className="text-stone-700 mb-4">
            While Americans and British argued over impressment and trade, Native Americans fought for survival.
            Tecumseh&apos;s confederacy represented the last realistic chance to establish a Native barrier state
            between American expansion and the Great Lakes/Mississippi Valley.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-700 text-sm">
              The Treaty of Ghent technically required the US to restore Native American lands to their pre-war
              boundaries (Article IX). The US ignored this provision entirely. With their British ally defeated and
              Tecumseh dead, Native nations had no power to enforce the treaty. The next three decades brought the
              Indian Removal Act (1830), the Trail of Tears, and the systematic dispossession of every Native nation
              east of the Mississippi.
            </p>
          </div>
          <p className="text-stone-700">
            This is the War of 1812&apos;s most consequential legacy — not the anthem, not the burned capital, but
            the destruction of the last organized resistance to American continental expansion. Everything that
            followed — Manifest Destiny, the Mexican-American War, the Indian Wars — became possible because
            Tecumseh&apos;s dream died at the Battle of the Thames.
          </p>
        </section>

        {/* Editorial */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy: Mythmaking Over Reality
          </h2>
          <p className="text-stone-700 mb-4">
            The War of 1812 is perhaps the best example of how American mythology overwrites American history.
            A war that achieved none of its objectives, nearly fractured the union (the Hartford Convention almost
            led to New England secession), and saw the national capital burned to the ground is remembered as
            a triumphant &ldquo;second war of independence.&rdquo;
          </p>
          <p className="text-stone-700 mb-4">
            The Battle of New Orleans — fought after the peace treaty was signed — becomes the defining moment.
            The Star-Spangled Banner — written during a British bombardment that nearly destroyed Baltimore —
            becomes a symbol of resilience rather than a reminder of how close to collapse the young republic came.
          </p>
          <p className="text-stone-700">
            The lesson: in American war history, narrative always defeats reality. The stories we tell about our
            wars matter more than what actually happened. It&apos;s a pattern that continues to this day — from
            &ldquo;Mission Accomplished&rdquo; in Iraq to the Afghan withdrawal narrative. We are, as a nation,
            constitutionally incapable of admitting a war was pointless.
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
              { href: '/mexican-american-war', label: 'Mexican-American War — The Next Expansion' },
              { href: '/civil-war', label: 'Civil War — The War That Actually Mattered' },
              { href: '/us-wars-list', label: 'Complete List of US Wars' },
              { href: '/analysis/forgotten-wars', label: 'America\'s Forgotten Wars' },
              { href: '/analysis/what-victory-looks-like', label: 'What Victory Looks Like' },
              { href: '/cost-of-war', label: 'Total Cost of US Wars' },
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
            <li>Congressional Research Service — Costs of Major US Wars</li>
            <li>National Archives — War of 1812 Records</li>
            <li>The Civil War of 1812 — Alan Taylor (2010)</li>
            <li>The Perilous Fight: America&apos;s Intrepid War with Britain — Stephen Budiansky</li>
            <li>Tecumseh and the Prophet — Peter Cozzens (2020)</li>
            <li>Smithsonian National Museum of American History — Star-Spangled Banner</li>
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
            headline: 'The War of 1812: $1.6 Billion, 15,000 Dead, Washington Burned, Nobody Won',
            description: 'Comprehensive analysis of the War of 1812 (1812-1815) — costs, casualties, timeline, and the war that achieved nothing except a national anthem.',
            url: 'https://warcosts.org/war-of-1812',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-15',
            dateModified: '2025-03-15',
          }),
        }}
      />
    </main>
  )
}
