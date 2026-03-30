import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'
import { YearlySpending, CasualtiesByYear, TroopLevels } from './charts'

export const metadata: Metadata = {
  title: 'Korean War Cost — $389 Billion, 36,574 US Dead, The Forgotten War | WarCosts',
  description: 'The Korean War (1950-1953) cost $389 billion in today\'s dollars, killed 36,574 Americans and an estimated 2-3 million Korean civilians. Never officially ended. Complete timeline, costs, casualties, and legacy.',
  keywords: ['Korean war cost', 'Korean war casualties', 'forgotten war', 'Korean war timeline', 'Korean war deaths', '38th parallel', 'Inchon landing', 'Korean war armistice'],
  openGraph: {
    title: 'The Korean War — $389 Billion, 36,574 US Dead, Still Not Over',
    description: 'The "Forgotten War" killed millions and never officially ended. 70+ years later, 28,500 US troops remain in South Korea.',
    url: 'https://warcosts.org/korean-war',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Duration', value: '3 Years' },
  { label: 'Total Cost (2023 $)', value: '$389 Billion' },
  { label: 'US Military Deaths', value: '36,574' },
  { label: 'US Wounded', value: '103,284' },
  { label: 'Korean Civilian Dead', value: '2–3 Million' },
  { label: 'Status', value: 'Armistice Only' },
]

const costBreakdown = [
  { category: 'Direct Military Operations', amount: 341, desc: 'Mobilization, combat operations, logistics for 3-year campaign' },
  { category: 'Marshall Plan / Korea Aid', amount: 18, desc: 'Post-war reconstruction and economic assistance to South Korea' },
  { category: 'Veterans Benefits', amount: 20, desc: 'Disability, healthcare, GI Bill for Korean War veterans' },
  { category: 'Permanent Basing (1953–present)', amount: 10, desc: 'Initial establishment of permanent US military presence in Korea (annual cost now ~$4.5B/yr)' },
]

const yearlySpending = [
  { year: 1950, amount: 23 },
  { year: 1951, amount: 120 },
  { year: 1952, amount: 130 },
  { year: 1953, amount: 68 },
]

const casualties = [
  { year: 1950, us: 6015, korean: 500 },
  { year: 1951, us: 13488, korean: 800 },
  { year: 1952, us: 10953, korean: 600 },
  { year: 1953, us: 6118, korean: 400 },
]

const troopLevels = [
  { year: 1950, troops: 142000 },
  { year: 1951, troops: 253000 },
  { year: 1952, troops: 326000 },
  { year: 1953, troops: 302000 },
]

const timeline = [
  { year: 'Aug 1945', title: 'Korea Divided', desc: 'After Japan\'s surrender, the US and Soviet Union divide Korea at the 38th parallel — an arbitrary line drawn by two Army colonels in 30 minutes. The Koreans were never consulted. The Soviets install Kim Il-sung in the North; the US backs Syngman Rhee in the South — an authoritarian who massacres political opponents.' },
  { year: 'Jun 25, 1950', title: 'North Korea Invades', desc: '75,000 North Korean troops pour across the 38th parallel. The South Korean army collapses. Seoul falls within three days. Truman commits US forces without a declaration of war, calling it a "police action" under UN authority — setting a precedent for undeclared wars that persists to this day.' },
  { year: 'Jul–Aug 1950', title: 'Pusan Perimeter', desc: 'US and South Korean forces are pushed into a tiny perimeter around Pusan in the southeast corner of the peninsula. Task Force Smith, the first US unit to engage, is routed — undertrained, underequipped troops sent to fight a well-armed invasion. The defense holds but barely.' },
  { year: 'Sep 15, 1950', title: 'Inchon Landing', desc: 'MacArthur\'s bold amphibious landing at Inchon, deep behind enemy lines, is a stunning success. North Korean supply lines are cut. Seoul is recaptured September 28. The North Korean army disintegrates. The war could have ended here — at the 38th parallel, with the status quo restored.' },
  { year: 'Oct–Nov 1950', title: 'The March North', desc: 'Instead of stopping at the 38th parallel, Truman authorizes MacArthur to push into North Korea. The objective shifts from defense to reunification by force. US forces advance toward the Yalu River — the Chinese border. China warns repeatedly that it will intervene. MacArthur dismisses the warnings.' },
  { year: 'Nov 27, 1950', title: 'China Enters the War', desc: '300,000 Chinese "volunteer" troops attack UN forces near the Chosin Reservoir. It is one of the most devastating surprise attacks in American military history. Temperatures reach -35°F. The retreat from Chosin — 78 miles of fighting through Chinese ambushes — becomes legendary. 6,000 Americans die in weeks.' },
  { year: 'Jan 1951', title: 'Seoul Falls Again', desc: 'Chinese and North Korean forces retake Seoul on January 4, 1951. The longest retreat in US Army history — from the Yalu River to south of Seoul, roughly 275 miles. Half a million refugees flee south in the bitter cold. The war that was "almost won" becomes a catastrophe.' },
  { year: 'Mar 1951', title: 'Seoul Recaptured (Third Time)', desc: 'UN forces retake Seoul — now reduced to rubble. The front stabilizes roughly along the 38th parallel. The war becomes a bloody stalemate — grinding attrition warfare reminiscent of WWI trenches. Both sides dig in for what becomes two more years of fighting.' },
  { year: 'Apr 11, 1951', title: 'MacArthur Fired', desc: 'Truman fires MacArthur for publicly advocating nuclear strikes against China and expanding the war into Chinese territory. MacArthur wants total war; Truman fears World War III. The dismissal establishes the critical precedent of civilian control over the military — but MacArthur returns home to a hero\'s welcome.' },
  { year: '1951–53', title: 'The Stalemate', desc: 'Two years of brutal, grinding warfare for negligible territorial gains. Battles for hills with names like Pork Chop Hill, Heartbreak Ridge, Old Baldy. The front barely moves. Armistice negotiations drag on for two years, primarily over the issue of prisoner repatriation. Men keep dying while diplomats argue.' },
  { year: 'Jul 27, 1953', title: 'Armistice Signed', desc: 'An armistice is signed at Panmunjom, establishing the Korean Demilitarized Zone roughly along the 38th parallel — almost exactly where the war started. It is a ceasefire, not a peace treaty. The Korean War has technically never ended. 36,574 Americans are dead. An estimated 2-3 million Korean civilians are dead. Nothing has changed.' },
  { year: '1953–Present', title: 'The Permanent Garrison', desc: '28,500 US troops remain stationed in South Korea 70+ years after the armistice. Annual cost: approximately $4.5 billion. The US pays for a military presence defending one of the world\'s wealthiest nations — a country with a larger economy than Russia. The garrison has become self-perpetuating.' },
]

const keyFigures = [
  { name: 'Harry S. Truman', role: 'US President', desc: 'Committed US forces without congressional declaration of war, calling it a "police action." Set the precedent for executive war-making that would define the next 70 years of American foreign policy.' },
  { name: 'Douglas MacArthur', role: 'Supreme Commander, UN Forces', desc: 'Brilliant tactician whose Inchon landing turned the war, then whose hubris in pushing to the Chinese border triggered China\'s entry. Fired by Truman for insubordination after publicly advocating nuclear strikes on China.' },
  { name: 'Matthew Ridgway', role: 'Replaced MacArthur', desc: 'Stabilized the front and restored morale after the Chinese onslaught. Competent, professional, and — unlike MacArthur — respected civilian authority. The general who saved a losing war but couldn\'t win it.' },
  { name: 'Kim Il-sung', role: 'North Korean Leader', desc: 'Soviet-installed dictator who launched the invasion with Stalin\'s approval and Mao\'s promise of support. Founded the dynasty that still rules North Korea today.' },
  { name: 'Mao Zedong', role: 'Chinese Leader', desc: 'Sent 300,000+ troops into Korea, suffering an estimated 180,000–400,000 dead — including his own son. China\'s entry transformed a near-victory into a stalemate.' },
  { name: 'Syngman Rhee', role: 'South Korean President', desc: 'US-backed authoritarian who massacred suspected communists (Bodo League massacre: 100,000–200,000 killed), sabotaged armistice talks, and had to be restrained from attacking North Korea. Overthrown in 1960.' },
]

const faqs = [
  {
    q: 'How much did the Korean War cost?',
    a: 'The Korean War cost approximately $389 billion in inflation-adjusted 2023 dollars for direct military operations. The ongoing cost of maintaining 28,500 US troops in South Korea adds approximately $4.5 billion annually — over $300 billion in cumulative basing costs since 1953. Total lifetime cost including veterans benefits exceeds $700 billion.',
  },
  {
    q: 'How many US soldiers died in the Korean War?',
    a: '36,574 US military personnel died during the Korean War — 33,686 in combat and 2,888 from other causes. An additional 103,284 were wounded and 7,245 were taken prisoner. The war had a higher daily death rate than either Vietnam or the post-9/11 wars.',
  },
  {
    q: 'Why is it called the "Forgotten War"?',
    a: 'The Korean War is called the "Forgotten War" because it was sandwiched between the cultural dominance of World War II and the Vietnam War protest era. It ended in a stalemate with no clear victory narrative. No major memorials were built for decades. Veterans felt ignored. The Korean War Veterans Memorial in Washington wasn\'t dedicated until 1995 — 42 years after the armistice.',
  },
  {
    q: 'Did the Korean War ever officially end?',
    a: 'No. The Korean War ended with an armistice (ceasefire agreement) on July 27, 1953, not a peace treaty. Technically, North and South Korea — and the United States — remain in a state of war. This is why 28,500 US troops are still stationed in South Korea more than 70 years later.',
  },
  {
    q: 'How many Korean civilians died?',
    a: 'An estimated 2-3 million Korean civilians died during the Korean War — roughly 10% of the pre-war population. Both sides committed atrocities. The US conducted extensive aerial bombing of North Korea, destroying virtually every city and town. General Curtis LeMay estimated the bombing killed 20% of North Korea\'s population.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function KoreanWarPage() {
  const totalCost = costBreakdown.reduce((s, r) => s + r.amount, 0)

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Korean War' }]} />
        <ShareButtons title="Korean War — $389B, 36,574 US Dead, The Forgotten War" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Korean War
          </h1>
          <p className="text-lg text-stone-500 mb-2">1950–1953 (armistice only — technically ongoing)</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            The <strong className="text-[#991b1b]">&ldquo;Forgotten War&rdquo;</strong> killed{' '}
            <strong className="text-[#991b1b]">36,574 Americans</strong> and an estimated{' '}
            <strong className="text-[#991b1b]">2–3 million Korean civilians</strong>. It never officially ended.
            The border is right where it started. 70 years later,{' '}
            <strong className="text-[#991b1b]">28,500 US troops</strong> are still there.
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

        {/* Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The War Nobody Remembers
          </h2>
          <p className="text-stone-700 mb-4">
            The Korean War was the first major armed conflict of the Cold War — and it established nearly every
            dangerous pattern that would define American foreign policy for the next seven decades: undeclared wars
            waged under executive authority, permanent overseas military garrisons, open-ended commitments to
            defend other nations, and the casual acceptance of massive civilian casualties as the cost of
            &ldquo;containing communism.&rdquo;
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-2">
              &ldquo;We burned down just about every city in North Korea and South Korea both.
              We killed off over a million Korean civilians and drove several million more from their homes.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— General Curtis LeMay, US Air Force</p>
          </div>
          <p className="text-stone-700 mb-4">
            Truman never asked Congress for a declaration of war. He called it a &ldquo;police action&rdquo; under
            United Nations authority — a euphemism that allowed him to bypass the constitutional requirement for
            congressional approval. Every president since has followed his example.
          </p>
          <p className="text-stone-700">
            The war began with a partition imposed by foreign powers on a country that didn&apos;t ask to be divided.
            It ended with an armistice that restored that same partition. In between, 2-3 million people died.
            The US bombed North Korea so thoroughly that the Air Force ran out of targets — destroying dams,
            cities, and infrastructure until, as LeMay put it, there was &ldquo;nothing left to bomb.&rdquo;
          </p>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Cost: $389 Billion and Counting
          </h2>
          <p className="text-stone-700 mb-6">
            The direct military cost of the Korean War was approximately $389 billion in 2023 dollars.
            But the true cost includes 70+ years of permanently stationing troops in South Korea — a commitment
            that has cost hundreds of billions more and shows no sign of ending.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((r) => (
                  <tr key={r.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">${r.amount}B</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-stone-400 font-bold">
                  <td className="py-2 text-stone-900">Direct War Total</td>
                  <td className="py-2 text-right font-mono text-[#991b1b]">${totalCost}B</td>
                  <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">Excludes 70+ years of basing costs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <YearlySpending data={yearlySpending} />
        </section>

        {/* Casualties */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Human Cost
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">American Losses</h3>
              <ul className="text-sm text-stone-600 space-y-2">
                <li><strong className="text-[#991b1b]">36,574</strong> US military killed</li>
                <li><strong className="text-[#991b1b]">103,284</strong> US military wounded</li>
                <li><strong className="text-[#991b1b]">7,245</strong> taken prisoner</li>
                <li><strong className="text-[#991b1b]">2,847</strong> died as POWs</li>
                <li><strong className="text-[#991b1b]">8,176</strong> still listed as MIA</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">Korean & Chinese Losses</h3>
              <ul className="text-sm text-stone-600 space-y-2">
                <li><strong className="text-[#991b1b]">2–3 million</strong> Korean civilians killed</li>
                <li><strong className="text-[#991b1b]">~600,000</strong> North Korean military killed</li>
                <li><strong className="text-[#991b1b]">~138,000</strong> South Korean military killed</li>
                <li><strong className="text-[#991b1b]">180,000–400,000</strong> Chinese military killed</li>
                <li><strong className="text-[#991b1b]">10 million</strong> families separated</li>
              </ul>
            </div>
          </div>
          <CasualtiesByYear data={casualties} />
          <p className="text-sm text-stone-500 mt-3">
            Korean civilian chart shows estimated deaths in thousands. Total civilian deaths remain disputed,
            with estimates ranging from 2 to 4 million. The US bombing campaign destroyed 85% of all buildings in North Korea.
          </p>
        </section>

        {/* Troop Levels */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            US Troop Levels in Korea
          </h2>
          <TroopLevels data={troopLevels} />
          <p className="text-sm text-stone-500 mt-3">
            Peak deployment: 326,000 US troops in 1952. Today, 28,500 US troops remain permanently stationed in South Korea.
          </p>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline of the Korean War
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFigures.map((fig) => (
              <div key={fig.name} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <h3 className="font-semibold text-stone-800">{fig.name}</h3>
                <p className="text-xs text-[#991b1b] mb-2">{fig.role}</p>
                <p className="text-sm text-stone-600">{fig.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Bombing Campaign */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Bombing of North Korea
          </h2>
          <p className="text-stone-700 mb-4">
            The US dropped 635,000 tons of bombs on Korea — more than the entire Pacific theater in World War II —
            plus 32,557 tons of napalm. The Air Force destroyed virtually every city, town, and village in North Korea.
          </p>
          <p className="text-stone-700 mb-4">
            When conventional targets ran out, the Air Force bombed hydroelectric dams, flooding agricultural land
            and destroying the rice crop. Air Force General O&apos;Donnell testified to Congress: &ldquo;I would say that
            the entire, almost the entire Korean Peninsula is just a terrible mess. Everything is destroyed.
            There is nothing standing worthy of the name.&rdquo;
          </p>
          <p className="text-stone-700">
            This bombing campaign — largely forgotten in the US — remains seared into North Korean national memory.
            It is the foundation of North Korea&apos;s hostility toward the United States and its determination to
            acquire nuclear weapons as a deterrent against another American attack. When Americans wonder
            &ldquo;why does North Korea hate us?&rdquo; — this is why.
          </p>
        </section>

        {/* Legacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy and Consequences
          </h2>
          <div className="space-y-4">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The Precedent for Undeclared War</h3>
              <p className="text-sm text-stone-600">
                Truman&apos;s decision to wage war without congressional authorization established the template for every
                subsequent military adventure — from Vietnam to Libya to Syria. The Korean War proved that a president
                could send hundreds of thousands of troops into combat and Congress would go along.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The Permanent Military Footprint</h3>
              <p className="text-sm text-stone-600">
                Korea became the model for permanent overseas military garrisons. Before Korea, the US had no peacetime
                troops stationed in Asia. Today, 80,000+ US troops are permanently deployed across the Pacific.
                The Korean garrison alone costs ~$4.5 billion annually — to defend a country with a $1.7 trillion GDP.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The National Security State</h3>
              <p className="text-sm text-stone-600">
                The Korean War tripled the defense budget — from $13 billion in 1950 to $50 billion by 1953.
                It never came back down. NSC-68, the policy document justifying massive military buildup, became
                reality only because the Korean War provided the political cover. The permanent warfare state we
                live in today was born in Korea.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The North Korean Nuclear Crisis</h3>
              <p className="text-sm text-stone-600">
                North Korea&apos;s nuclear weapons program is a direct consequence of the Korean War. A country that
                was bombed into rubble — that lost 10-20% of its population to American bombs — concluded that only
                nuclear weapons could deter another attack. The crisis that dominates headlines today is a 70-year-old
                wound that never healed.
              </p>
            </div>
          </div>
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
              { href: '/vietnam-war', label: 'Vietnam War — Korea\'s Sequel' },
              { href: '/cost-of-war', label: 'Total Cost of US Wars' },
              { href: '/analysis/forgotten-wars', label: 'America\'s Forgotten Wars' },
              { href: '/how-many-us-soldiers-died-in-korea', label: 'Korean War Casualties Deep Dive' },
              { href: '/civilian-casualties', label: 'Civilian Casualties Across All Wars' },
              { href: '/presidents/harry-s-truman', label: 'Truman\'s War Record' },
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
            <li>Congressional Research Service — Costs of Major U.S. Wars</li>
            <li>Department of Defense — Korean War Casualty Statistics</li>
            <li>Bruce Cumings — <em>The Korean War: A History</em> (Modern Library, 2010)</li>
            <li>David Halberstam — <em>The Coldest Winter</em> (Hyperion, 2007)</li>
            <li>National Archives — Korean War Records</li>
            <li>Korean War Veterans Memorial Foundation</li>
            <li>RAND Corporation — The Korean War: An Assessment of Costs</li>
          </ul>
        </section>

        <BackToTop />
      </div>
    </main>
  )
}
