import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cold War Cost — $15-20 Trillion, 44 Years of Nuclear Terror, CIA Coups & Proxy Wars | WarCosts',
  description: 'The Cold War (1947-1991) cost an estimated $15-20 trillion in military spending, nuclear weapons, proxy wars, intelligence operations, and the space race. The most expensive conflict in human history.',
  keywords: ['Cold War cost', 'Cold War spending', 'nuclear arms race', 'CIA covert operations', 'proxy wars', 'Cold War casualties', 'military industrial complex', 'space race cost'],
  openGraph: {
    title: 'The Cold War — $15-20 Trillion, 44 Years, And We Almost Ended Everything',
    description: 'Nuclear terror, proxy wars, CIA coups, the space race, and $15-20 trillion in spending that built the military-industrial complex.',
    url: 'https://warcosts.org/cold-war',
    type: 'article',
  },
}

const keyStats = [
  { label: 'Total Cost (2024$)', value: '$15-20 Trillion' },
  { label: 'Duration', value: '44 Years' },
  { label: 'Nuclear Weapons Built (US)', value: '70,000+' },
  { label: 'CIA Covert Operations', value: '80+' },
  { label: 'Proxy War Deaths', value: '10-15 Million' },
  { label: 'Peak Nuclear Warheads', value: '70,300 (1986)' },
]

const costBreakdown = [
  { category: 'Nuclear Weapons Program', amount: '$10-12T', desc: 'Design, production, testing, maintenance of 70,000+ warheads' },
  { category: 'Conventional Military Buildup', amount: '$3-4T', desc: 'NATO forces, forward-deployed troops, bases in Europe and Asia' },
  { category: 'Proxy Wars (Korea + Vietnam)', amount: '$2T+', desc: 'Korea ($390B), Vietnam ($1T+), plus dozens of smaller conflicts' },
  { category: 'Intelligence & Covert Ops', amount: '$500B-1T', desc: 'CIA, NSA, coups, propaganda, covert wars' },
  { category: 'Space Race', amount: '$300B+', desc: 'NASA/military space programs driven by Cold War competition' },
  { category: 'Civil Defense', amount: '$200B+', desc: 'Fallout shelters, continuity of government, emergency broadcasting' },
]

const proxyWars = [
  { name: 'Korean War (1950-53)', dead: '~3 million', desc: '36,574 US dead. Korea divided to this day.' },
  { name: 'Vietnam War (1955-75)', dead: '2-3 million', desc: '58,220 US dead. Complete US defeat.' },
  { name: 'Soviet-Afghan War (1979-89)', dead: '1-2 million', desc: 'CIA armed mujahideen ($3B+). Created Taliban and al-Qaeda.' },
  { name: 'Angolan Civil War (1975-2002)', dead: '~500,000', desc: 'CIA and South Africa vs. Cuba and Soviets.' },
  { name: 'Central American Wars (1979-92)', dead: '~300,000', desc: 'US-backed death squads. Iran-Contra scandal.' },
  { name: 'Indonesian Massacre (1965-66)', dead: '500K-1M', desc: 'CIA-assisted purge of communists.' },
  { name: 'Mozambican Civil War (1977-92)', dead: '~1 million', desc: 'US/South Africa vs. Soviet-backed government.' },
]

const ciaOps = [
  { year: '1953', op: 'Iran (TPAJAX)', desc: 'Overthrew PM Mossadegh. Installed the Shah. Created conditions for 1979 revolution and 45+ years of hostility.' },
  { year: '1954', op: 'Guatemala (PBSUCCESS)', desc: 'Overthrew President Árbenz. Triggered 36 years of civil war, 200,000 dead.' },
  { year: '1961', op: 'Cuba (Bay of Pigs)', desc: 'Failed invasion. Led directly to Cuban Missile Crisis.' },
  { year: '1964-73', op: 'Laos (Secret War)', desc: 'Largest CIA paramilitary op. 580,000 bombing missions. Laos still most-bombed country per capita.' },
  { year: '1970-73', op: 'Chile', desc: 'Backed Pinochet coup. 3,000+ killed, 30,000+ tortured.' },
  { year: '1979-89', op: 'Afghanistan (Cyclone)', desc: '$3B to arm mujahideen. Created Taliban, al-Qaeda.' },
  { year: '1980s', op: 'Nicaragua (Iran-Contra)', desc: 'Illegally funded Contras via Iran arms sales. 30,000+ Nicaraguans killed.' },
]

const nuclearCloseCalls = [
  { year: '1962', event: 'Cuban Missile Crisis', desc: 'Vasili Arkhipov refused nuclear torpedo authorization. One man may have prevented nuclear war.' },
  { year: '1983', event: 'Able Archer 83', desc: 'NATO exercise mistaken by Soviets as real first strike preparation.' },
  { year: '1983', event: 'Petrov Incident', desc: 'Stanislav Petrov correctly ID\'d false alarm showing US launches. Protocol demanded retaliation.' },
  { year: '1979', event: 'NORAD False Alarm', desc: 'Training tape loaded into computers showed full Soviet attack. Bombers scrambled.' },
  { year: '1961', event: 'Goldsboro B-52 Crash', desc: 'H-bomb arming completed 5 of 6 steps. One switch prevented NC detonation.' },
]

const timeline = [
  { year: '1947', title: 'Truman Doctrine & Marshall Plan', desc: 'Truman declares the US will support "free peoples" against communism. Marshall Plan pours $170B (2024$) into Western Europe. The Cold War framework: containment, alliances, economic competition.' },
  { year: '1949', title: 'NATO, Soviet Bomb, China Falls', desc: 'NATO founded. Soviets detonate first nuke. Mao wins China. In one year, the Cold War escalates from competition to existential threat.' },
  { year: '1950-53', title: 'Korean War', desc: 'Cold War goes hot. 36,574 US dead. MacArthur wants to nuke China; Truman fires him. Korea remains divided 70+ years later.' },
  { year: '1953-54', title: 'CIA Coups Begin', desc: 'Iran (1953) and Guatemala (1954) overthrown. Both "successful" short-term, catastrophic long-term.' },
  { year: '1957', title: 'Sputnik & Space Race', desc: 'Soviets launch Sputnik. NASA created. Space race driven not by curiosity but by ICBM technology competition.' },
  { year: '1961-62', title: 'Berlin Wall & Cuban Missile Crisis', desc: 'Berlin Wall up (1961). Bay of Pigs fails. Cuban Missile Crisis (Oct 1962) brings world closest to nuclear annihilation.' },
  { year: '1964-75', title: 'Vietnam War', desc: '58,220 dead. $1 trillion. Complete defeat. Shatters public trust in government — temporarily.' },
  { year: '1970s', title: 'Détente', desc: 'Nixon opens China. SALT treaties. Tensions ease until Soviet invasion of Afghanistan (1979).' },
  { year: '1979-89', title: 'Second Cold War', desc: 'Reagan military buildup. Star Wars SDI. CIA arms mujahideen. Central American death squads. Iran-Contra. 70,300 warheads peak (1986).' },
  { year: '1989', title: 'Berlin Wall Falls', desc: 'November 9, 1989. Eastern bloc collapses. Not with a bang but with sledgehammers and celebration.' },
  { year: '1991', title: 'Soviet Union Dissolves', desc: 'December 26, 1991. Cold War over. US declares victory. "Peace dividend" is short-lived — the military-industrial complex finds new enemies immediately.' },
]

const faqs = [
  {
    q: 'How much did the Cold War cost?',
    a: 'The Cold War cost an estimated $15-20 trillion in 2024 dollars over 44 years (1947-1991). The nuclear weapons program alone cost $10-12 trillion. Conventional military buildup added $3-4 trillion, proxy wars $2+ trillion, intelligence operations $500B-$1T, and the space race $300B+.',
  },
  {
    q: 'How many people died in the Cold War?',
    a: 'While there was no direct US-Soviet combat, Cold War proxy wars killed an estimated 10-15 million people. Korea (~3M), Vietnam (2-3M), Soviet-Afghan War (1-2M), Indonesia (500K-1M), Angola (500K), Central America (300K), Mozambique (1M), and many more.',
  },
  {
    q: 'How close did we come to nuclear war?',
    a: 'Terrifyingly close, multiple times. The Cuban Missile Crisis (1962) is best known, but the Able Archer incident (1983), the Petrov false alarm (1983), and the NORAD training tape incident (1979) each could have triggered nuclear war. In 1961, a hydrogen bomb nearly detonated over North Carolina when 5 of 6 arming switches activated. Human civilization survived the Cold War largely through luck.',
  },
  {
    q: 'What was the military-industrial complex?',
    a: 'President Eisenhower coined the term in his 1961 farewell address, warning that the permanent arms industry and military establishment could acquire "unwarranted influence" over American democracy. He was right. By the Cold War\'s end, defense spending had created a self-perpetuating ecosystem of contractors, lobbyists, think tanks, and congressional districts dependent on military budgets. This complex survived the Cold War and expanded after 9/11.',
  },
  {
    q: 'Did the US "win" the Cold War?',
    a: 'The Soviet Union collapsed, so in that narrow sense, yes. But the costs of "winning" include: $15-20 trillion spent, 10-15 million dead in proxy wars, dozens of democracies overthrown, the military-industrial complex permanently embedded in American politics, a planet still bristling with nuclear weapons, and the blowback from CIA operations (especially Afghanistan) that produced the next generation of enemies. Victory has never been more expensive or more ambiguous.',
  },
]

export default function ColdWarPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cold War' }]} />
        <ShareButtons title="The Cold War — $15-20 Trillion, 44 Years, CIA Coups & Nuclear Terror" />

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Cold War
          </h1>
          <p className="text-lg text-stone-500 mb-2">1947–1991 · 44 Years of Nuclear Terror</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            The most expensive conflict in human history — <strong className="text-[#991b1b]">$15-20 trillion</strong> —
            fought without a single direct battle between the superpowers. Instead:{' '}
            <strong className="text-[#991b1b]">70,000+ nuclear weapons</strong> built,{' '}
            <strong className="text-[#991b1b]">10-15 million</strong> killed in proxy wars,{' '}
            <strong className="text-[#991b1b]">80+ CIA covert operations</strong> that overthrew democracies,
            armed extremists, and created blowback that haunts us still. Eisenhower warned us about the
            military-industrial complex. We didn&apos;t listen.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {keyStats.map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl md:text-2xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Cost: $15-20 Trillion for the Most Expensive War Never Fought
          </h2>
          <p className="text-stone-700 mb-6">
            The Cold War&apos;s costs are staggering and almost incomprehensible. The nuclear weapons program
            alone — from the Manhattan Project through dismantlement — consumed $10-12 trillion. The US built
            over 70,000 nuclear warheads, enough to destroy civilization many times over.
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

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline: 44 Years on the Brink
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

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Proxy Wars: Other People&apos;s Blood
          </h2>
          <p className="text-stone-700 mb-6">
            The Cold War&apos;s defining cynicism: the superpowers avoided direct conflict by fighting through
            other nations. An estimated 10-15 million people died in proxy wars — wars the US and Soviet Union
            fueled, armed, and prolonged for strategic advantage.
          </p>
          <div className="space-y-3">
            {proxyWars.map((w) => (
              <div key={w.name} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-stone-800">{w.name}</span>
                  <span className="text-sm font-mono text-[#991b1b]">{w.dead} dead</span>
                </div>
                <p className="text-sm text-stone-600 mt-1">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            CIA Covert Operations: Overthrowing Democracies for Freedom
          </h2>
          <p className="text-stone-700 mb-6">
            The CIA&apos;s Cold War record is a catalog of destroyed democracies, empowered dictators, and
            blowback that created the next generation of enemies. The irony: in fighting to &ldquo;defend
            freedom,&rdquo; the US repeatedly destroyed it.
          </p>
          <div className="space-y-4">
            {ciaOps.map((o) => (
              <div key={o.op} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm font-mono text-[#991b1b]">{o.year}</span>
                  <span className="font-semibold text-stone-800">{o.op}</span>
                </div>
                <p className="text-sm text-stone-600">{o.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Nuclear Close Calls: How We Almost Ended Everything
          </h2>
          <p className="text-stone-700 mb-6">
            Human civilization survived the Cold War largely through luck. Multiple incidents nearly triggered
            nuclear war — prevented not by systems or strategy, but by individual humans who chose to question
            rather than obey.
          </p>
          <div className="space-y-3">
            {nuclearCloseCalls.map((c) => (
              <div key={c.event} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm font-mono text-[#991b1b]">{c.year}</span>
                  <span className="font-semibold text-stone-800">{c.event}</span>
                </div>
                <p className="text-sm text-stone-600">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mt-4">
            <p className="text-stone-700 text-sm">
              At the peak of the arms race in 1986, there were 70,300 nuclear warheads globally — enough to
              destroy every major city on Earth many times over. Today there are still approximately 12,500.
              The weapons that nearly ended civilization during the Cold War are still here, still armed,
              still on hair-trigger alert.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy: The Machine That Outlived Its Enemy
          </h2>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-1">
              &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence,
              whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise
              of misplaced power exists and will persist.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— President Dwight D. Eisenhower, Farewell Address (1961)</p>
          </div>
          <p className="text-stone-700 mb-4">
            The Cold War&apos;s most enduring legacy is not the fall of the Berlin Wall or the Soviet collapse —
            it&apos;s the permanent warfare state it created. The military-industrial complex Eisenhower warned
            about didn&apos;t disband when the Cold War ended. It found new enemies: terrorism, rogue states,
            now &ldquo;great power competition&rdquo; with China. The machine needs threats to justify its existence,
            and it always finds them.
          </p>
          <p className="text-stone-700 mb-4">
            The &ldquo;peace dividend&rdquo; of the 1990s lasted less than a decade before 9/11 provided the next
            justification for permanent war spending. Today, the US military budget exceeds Cold War averages in
            real terms — despite the absence of any adversary remotely comparable to the Soviet Union.
          </p>
          <p className="text-stone-700 mb-4">
            The CIA operations of the Cold War created the specific enemies of the post-Cold War era. The
            mujahideen the CIA armed in Afghanistan became al-Qaeda and the Taliban. The authoritarian regimes
            the CIA installed (Iran, Iraq, Central America) created the refugee crises, terrorism, and regional
            instability that dominate foreign policy today. Every blowback was predictable; none was prevented.
          </p>
          <p className="text-stone-700">
            The Cold War proved that a nation can win an ideological struggle and still lose its soul. The
            United States emerged as the sole superpower — and immediately began the War on Terror, which
            cost another $8+ trillion and killed another million people. The permanent war machine doesn&apos;t
            stop because it won. It never stops.
          </p>
        </section>

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

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/vietnam-war', label: 'Vietnam War — The Cold War\'s Bloodiest Proxy' },
              { href: '/nuclear', label: 'Nuclear Weapons — Arsenal & Costs' },
              { href: '/intelligence', label: 'Intelligence Community — The Shadow State' },
              { href: '/analysis/nuclear-close-calls', label: 'Nuclear Close Calls' },
              { href: '/analysis/military-industrial-complex', label: 'The Military-Industrial Complex' },
              { href: '/analysis/blowback', label: 'Blowback — Consequences of CIA Operations' },
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

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Sources</h2>
          <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
            <li>Atomic Audit: The Costs and Consequences of US Nuclear Weapons — Stephen Schwartz (Brookings)</li>
            <li>Legacy of Ashes: The History of the CIA — Tim Weiner</li>
            <li>The Dead Hand: The Untold Story of the Cold War Arms Race — David Hoffman</li>
            <li>Killing Hope: US Military and CIA Interventions Since WWII — William Blum</li>
            <li>National Security Archive — George Washington University</li>
            <li>Congressional Research Service — Defense Spending Historical Data</li>
            <li>Bulletin of the Atomic Scientists — Nuclear Notebook</li>
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
            headline: 'The Cold War: $15-20 Trillion, 44 Years of Nuclear Terror and Proxy Wars',
            description: 'Comprehensive analysis of the Cold War (1947-1991) — costs, proxy wars, CIA operations, nuclear close calls, and the legacy of permanent war.',
            url: 'https://warcosts.org/cold-war',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-15',
            dateModified: '2025-03-15',
          }),
        }}
      />
    </main>
  )
}
