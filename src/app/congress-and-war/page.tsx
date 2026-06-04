import { Metadata } from 'next'
import Link from 'next/link'
import FaqJsonLd from '@/components/FaqJsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { RepLookup, DefenseMoneyTable, AuthorizationTimeline } from './CongressClient'

export const metadata: Metadata = {
  title: 'Congress & War: Who Votes for War and Who Pays Them | WarCosts',
  description: 'Track how Congress votes on military authorizations and cross-reference with defense contractor PAC donations. The 2001 AUMF is still active. The 2026 Iran War has NO congressional authorization. Follow the money.',
  keywords: ['congressional war votes', 'AUMF', 'defense contractor donations', 'war authorization', 'defense PAC money', 'military industrial complex', 'war powers', 'Iran war authorization'],
  openGraph: {
    title: 'Congress & War: Who Votes for War, and Who Pays Them To?',
    description: 'Defense contractors gave $14.7M to senators in the current Congress. 73% of top recipients voted to support the Iran War. The 2001 AUMF — passed 420-1 — is still in effect 25 years later.',
    url: 'https://warcosts.org/congress-and-war',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Congress & War: Follow the Defense Money',
    description: 'Who votes for war? The same people defense contractors pay. $14.7M in PAC money → 73% pro-war votes.',
  },
  alternates: { canonical: 'https://warcosts.org/congress-and-war' },
}

export default function CongressAndWarPage() {
  return (
    <>
      <FaqJsonLd faqs={[
        { q: 'Has Congress declared war on Iran in 2026?', a: 'No. The 2026 Iran War has no formal congressional authorization. The administration has relied on executive authority rather than seeking a declaration of war or new AUMF.' },
        { q: 'What is the AUMF and is it still active?', a: 'The Authorization for Use of Military Force (AUMF) was passed on September 14, 2001, with a vote of 420-1 in the House and 98-0 in the Senate. It is still active over 25 years later and has been used to justify operations in dozens of countries.' },
        { q: 'How much do defense contractors donate to Congress?', a: 'Defense contractors gave $14.7 million to senators in the current Congress through PAC donations. 73% of top recipients voted to support the Iran War.' },
        { q: 'When was the last time Congress formally declared war?', a: 'The last formal declaration of war by Congress was in 1942 against Axis powers during World War II. Every conflict since — Korea, Vietnam, Iraq, Afghanistan, Iran — has been fought without a formal declaration.' },
        { q: 'What are the War Powers Act requirements?', a: 'The War Powers Resolution of 1973 requires the president to notify Congress within 48 hours of committing armed forces and limits deployment to 60 days without congressional authorization, plus a 30-day withdrawal period.' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Congress & War: Who Votes for War, and Who Pays Them To?',
        description: 'Tracking congressional war authorization votes and defense contractor PAC donations.',
        url: 'https://warcosts.org/congress-and-war',
        author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
        datePublished: '2026-03-29',
        dateModified: '2026-03-29',
        mainEntityOfPage: 'https://warcosts.org/congress-and-war',
        keywords: ['war authorization', 'AUMF', 'defense PAC', 'congressional votes', 'military industrial complex'],
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://warcosts.org' },
          { '@type': 'ListItem', position: 2, name: 'Congress & War', item: 'https://warcosts.org/congress-and-war' },
        ],
      }) }} />

      {/* Hero */}
      <section className="bg-stone-950 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Congress & War' }]} />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold mt-4">
            Congress & War
          </h1>
          <p className="text-xl md:text-2xl text-stone-400 mt-4 max-w-3xl">
            Who votes for war, and who pays them to? Track military authorizations, defense contractor PAC money, and the growing gap between constitutional power and executive action.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-stone-900 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">5</p>
              <p className="text-xs text-stone-500">Declared Wars</p>
            </div>
            <div className="bg-stone-900 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-yellow-500 font-[family-name:var(--font-heading)]">~12</p>
              <p className="text-xs text-stone-500">Authorized Actions</p>
            </div>
            <div className="bg-stone-900 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-red-600 font-[family-name:var(--font-heading)]">469+</p>
              <p className="text-xs text-stone-500">Military Interventions</p>
            </div>
            <div className="bg-stone-900 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">$14.7M</p>
              <p className="text-xs text-stone-500">Defense PAC $ (119th Congress)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        <ShareButtons title="Congress & War — Who Votes for War and Who Pays Them" />

        {/* ── Section 1: War Authorizations ── */}
        <section id="authorizations">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">War Authorizations</h2>
          <p className="text-stone-500 mb-6">Major military authorization votes — and the ones that never happened.</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-stone-300 text-left">
                  <th className="py-2 pr-4">Year</th>
                  <th className="py-2 pr-4">Authorization</th>
                  <th className="py-2 pr-4">House Vote</th>
                  <th className="py-2 pr-4">Senate Vote</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-3 pr-4 font-mono">2001</td>
                  <td className="py-3 pr-4 font-medium">
                    <Link href="/war-votes" className="text-red-700 hover:underline">AUMF — Authorization for Use of Military Force</Link>
                  </td>
                  <td className="py-3 pr-4 font-semibold">420-1</td>
                  <td className="py-3 pr-4 font-semibold">98-0</td>
                  <td className="py-3 pr-4">
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800 animate-pulse">⚠ STILL ACTIVE</span>
                  </td>
                  <td className="py-3 text-xs text-stone-500">Used 40+ times. Sole dissent: Rep. Barbara Lee (D-CA). Used to justify actions in 22 countries.</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="py-3 pr-4 font-mono">2002</td>
                  <td className="py-3 pr-4 font-medium">
                    <Link href="/iraq-war" className="text-red-700 hover:underline">Iraq AUMF</Link>
                  </td>
                  <td className="py-3 pr-4 font-semibold">296-133</td>
                  <td className="py-3 pr-4 font-semibold">77-23</td>
                  <td className="py-3 pr-4">
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-stone-200 text-stone-600">Repealed 2023</span>
                  </td>
                  <td className="py-3 text-xs text-stone-500">Based on WMD claims later proven false. Led to 4,431 US deaths, ~300,000 Iraqi deaths, $2.4T spent.</td>
                </tr>
                <tr className="bg-red-50 border-l-4 border-red-500">
                  <td className="py-3 pr-4 font-mono text-red-700">2011</td>
                  <td className="py-3 pr-4 font-medium text-red-700">Libya Intervention</td>
                  <td className="py-3 pr-4 text-red-700 font-semibold">NO VOTE</td>
                  <td className="py-3 pr-4 text-red-700 font-semibold">NO VOTE</td>
                  <td className="py-3 pr-4">
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-red-200 text-red-800">Unauthorized</span>
                  </td>
                  <td className="py-3 text-xs text-red-600">Obama used NATO authority. Admin claimed bombing "not hostilities" under War Powers Act.</td>
                </tr>
                <tr className="bg-red-50 border-l-4 border-red-500">
                  <td className="py-3 pr-4 font-mono text-red-700">2014</td>
                  <td className="py-3 pr-4 font-medium text-red-700">ISIS / Syria</td>
                  <td className="py-3 pr-4 text-red-700 font-semibold">NO VOTE</td>
                  <td className="py-3 pr-4 text-red-700 font-semibold">NO VOTE</td>
                  <td className="py-3 pr-4">
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-red-200 text-red-800">Unauthorized</span>
                  </td>
                  <td className="py-3 text-xs text-red-600">No formal AUMF. Obama stretched 2001 AUMF — passed for al-Qaeda — to cover ISIS, 13 years later.</td>
                </tr>
                <tr className="bg-red-100 border-l-4 border-red-700">
                  <td className="py-3 pr-4 font-mono text-red-900 font-bold">2026</td>
                  <td className="py-3 pr-4 font-bold text-red-900">
                    <Link href="/iran-war-2026" className="hover:underline">🔴 Iran War</Link>
                  </td>
                  <td className="py-3 pr-4 text-red-900 font-bold">NO VOTE</td>
                  <td className="py-3 pr-4 text-red-900 font-bold">NO VOTE</td>
                  <td className="py-3 pr-4">
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-red-700 text-white animate-pulse">⚠ ACTIVE — NO AUTH</span>
                  </td>
                  <td className="py-3 text-xs text-red-800 font-semibold">Full-scale war launched under disputed executive authority. No congressional authorization. Constitutional crisis.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 2: Defense Lobby Money ── */}
        <section id="defense-money">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">Defense Lobby Money</h2>
          <p className="text-stone-500 mb-6">
            Top recipients of defense contractor PAC money in the 119th Congress (2025-2026). Who gets paid, and how do they vote?
          </p>
          <DefenseMoneyTable />
        </section>

        {/* ── Section 3: The Authorization Gap ── */}
        <section id="authorization-gap">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">The Authorization Gap</h2>
          <p className="text-stone-500 mb-6">
            How presidents increasingly bypass Congress to wage war — and why the Constitution's war powers clause is becoming a dead letter.
          </p>

          {/* Constitutional quote */}
          <blockquote className="border-l-4 border-red-700 bg-stone-50 p-6 my-8 rounded-r-lg">
            <p className="text-lg italic text-stone-700">
              "The Congress shall have Power … To declare War, grant Letters of Marque and Reprisal, and make Rules concerning Captures on Land and Water."
            </p>
            <footer className="mt-2 text-sm text-stone-500">— U.S. Constitution, Article I, Section 8, Clause 11</footer>
          </blockquote>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Executive Overreach: A Pattern</h3>
            <div className="space-y-3 text-sm text-stone-700">
              <p>
                The last time Congress formally declared war was <strong>1942</strong>. Since then, every president has found ways to bypass the constitutional requirement — from Truman calling Korea a "police action" to Obama claiming bombing Libya wasn't "hostilities."
              </p>
              <p>
                The <strong>War Powers Act of 1973</strong> was supposed to fix this. It requires presidents to notify Congress within 48 hours of committing forces and withdraw within 60 days without authorization. It has been <strong>violated by every president since</strong>.
              </p>
              <p>
                The 2001 AUMF — a single page of text passed in the shock after 9/11 — has been used to justify military action in <strong>22 countries over 25 years</strong>. It was written for al-Qaeda in Afghanistan. It's been stretched to cover ISIS in Syria, al-Shabaab in Somalia, and dozens of other operations its authors never imagined.
              </p>
              <p className="text-red-700 font-semibold">
                The 2026 Iran War represents the most extreme case yet: a full-scale war against a nation-state with no congressional vote, no AUMF, and no declaration. The executive branch has effectively seized the war power entirely.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-amber-900">🏛 War Powers Act Violations</h3>
            <ul className="space-y-2 text-sm text-amber-800">
              <li><strong>1999 Kosovo:</strong> Congress voted DOWN authorization. Clinton continued bombing for 78 days.</li>
              <li><strong>2011 Libya:</strong> Obama exceeded 60-day limit. Claimed bombing "not hostilities."</li>
              <li><strong>2017 Syria:</strong> Trump launched 59 Tomahawk missiles without notifying congressional leadership.</li>
              <li><strong>2020 Iran (Soleimani):</strong> Assassination of foreign military leader with no advance notification.</li>
              <li><strong>2024 Yemen:</strong> Biden ordered strikes without authorization; claimed "defensive."</li>
              <li><strong className="text-red-800">2026 Iran: Full-scale war — 30 days and counting — with ZERO congressional authorization.</strong></li>
            </ul>
          </div>

          <AuthorizationTimeline />
        </section>

        {/* ── Section 4: How Did Your Rep Vote? ── */}
        <section id="your-rep">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">How Did Your Senator Vote?</h2>
          <p className="text-stone-500 mb-6">
            Select your state to see your senators' defense contractor PAC money and their positions on military authorization.
          </p>
          <RepLookup />
        </section>

        {/* Cross-links */}
        <section className="border-t border-stone-200 pt-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Pages</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: '/war-votes', title: 'All War Votes', desc: 'Complete history of congressional war votes since 1812' },
              { href: '/war-powers', title: 'War Powers', desc: 'Constitutional war powers and executive overreach' },
              { href: '/revolving-door', title: 'Revolving Door', desc: 'Pentagon-to-contractor pipeline' },
              { href: '/contractors', title: 'Defense Contractors', desc: 'Who profits from war' },
              { href: '/iran-war-2026', title: 'Iran War 2026', desc: 'Real-time cost and casualty tracking' },
              { href: '/largest-defense-contractors', title: 'Largest Contractors', desc: 'Top defense companies by revenue' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="block bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-lg p-4 transition-colors">
                <h4 className="font-semibold text-red-700">{link.title}</h4>
                <p className="text-xs text-stone-500 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <BackToTop />
      </div>
    </>
  )
}
