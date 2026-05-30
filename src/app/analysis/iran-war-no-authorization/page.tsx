import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Iran War: The War Congress Never Authorized',
  description: 'Announced on Truth Social at 2:30am. No congressional vote. Senate killed the War Powers Resolution 53-47. A $200B unauthorized war.',
  keywords: ['iran war congressional authorization', 'war powers iran', 'operation epic fury authorization', 'war powers resolution iran', 'congress iran war'],
  openGraph: {
    title: 'Operation Epic Fury: The War Congress Never Authorized',
    description: 'Announced on Truth Social at 2:30am. No congressional vote. Senate killed the War Powers Resolution 53-47. The constitutional crisis of a $200B unauthorized war.',
    url: 'https://www.warcosts.org/analysis/iran-war-no-authorization',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The War Congress Never Authorized',
    description: 'Truth Social at 2:30am. No vote. No debate. 53-47 against War Powers. $200B. A constitutional crisis.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/iran-war-no-authorization',
  },
}

export default function IranWarNoAuthorizationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Operation Epic Fury: The War Congress Never Authorized',
            description: 'A constitutional analysis of the unauthorized US war with Iran — no congressional vote, no War Powers compliance, no exit strategy.',
            datePublished: '2026-03-05T00:00:00Z',
            dateModified: '2026-03-27T22:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/iran-war-no-authorization' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The War Congress Never Authorized' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Constitutional Analysis — Updated March 27, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Operation Epic Fury
        </h1>
        <p className="text-xl text-stone-300 mb-4">The War Congress Never Authorized</p>
        <p className="text-stone-400 text-lg">
          At 2:30 AM on February 28, 2026, President Trump announced via a Truth Social video that the
          United States had begun military strikes against Iran. There was no congressional vote. No formal
          declaration of war. No War Powers notification to Congress. The largest US military operation since
          the 2003 invasion of Iraq was launched by a single person, announced on social media, while Congress slept.
        </p>
      </div>

      <ShareButtons title="Operation Epic Fury: The War Congress Never Authorized" />

      {/* Timeline of Non-Authorization */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          How It Happened: A Timeline
        </h2>

        <div className="space-y-4">
          <div className="bg-white border-l-4 border-red-600 rounded-r-lg p-5">
            <div className="text-red-600 font-bold text-sm mb-1">February 28, 2026 — 2:30 AM EST</div>
            <h3 className="font-bold text-stone-900 mb-2">War Announced on Truth Social</h3>
            <p className="text-stone-600 text-sm">
              President Trump posted a 4-minute video on Truth Social announcing that US forces had begun
              &quot;Operation Epic Fury&quot; against Iran. Strikes were already underway. No member of Congress
              had been formally notified. Senate Majority Leader and Minority Leader both confirmed they learned
              of the strikes from news reports, not official channels.
            </p>
          </div>

          <div className="bg-white border-l-4 border-stone-300 rounded-r-lg p-5">
            <div className="text-stone-500 font-bold text-sm mb-1">February 28 — 8:00 AM EST</div>
            <h3 className="font-bold text-stone-900 mb-2">Congressional Leaders Briefed (After the Fact)</h3>
            <p className="text-stone-600 text-sm">
              The Gang of Eight (top congressional intelligence leaders) received classified briefings
              5.5 hours after strikes began. Several members reportedly expressed fury at not being consulted.
              The briefing lasted 45 minutes and provided no legal justification beyond &quot;Article II
              self-defense authority.&quot;
            </p>
          </div>

          <div className="bg-white border-l-4 border-stone-300 rounded-r-lg p-5">
            <div className="text-stone-500 font-bold text-sm mb-1">March 1, 2026 — Day 2</div>
            <h3 className="font-bold text-stone-900 mb-2">Kaine-Paul War Powers Resolution Introduced</h3>
            <p className="text-stone-600 text-sm">
              Senators Tim Kaine (D-VA) and Rand Paul (R-KY) introduced S.J.Res. 12, invoking the War Powers
              Resolution of 1973 to require the president to withdraw forces from hostilities against Iran
              within 30 days unless Congress authorizes the use of force. The resolution was fast-tracked
              for a vote.
            </p>
          </div>

          <div className="bg-white border-l-4 border-red-600 rounded-r-lg p-5">
            <div className="text-red-600 font-bold text-sm mb-1">March 1, 2026 — Evening</div>
            <h3 className="font-bold text-stone-900 mb-2">Senate Votes 53-47 AGAINST War Powers Resolution</h3>
            <p className="text-stone-600 text-sm">
              The Senate voted along near-perfect party lines to defeat the Kaine-Paul resolution.
              <strong> Only one Republican — Rand Paul — crossed party lines to vote yes.</strong> Every
              other Republican voted to allow the unauthorized war to continue. Every Democrat voted for
              the resolution. The vote effectively endorsed presidential war-making without congressional
              authorization.
            </p>
          </div>

          <div className="bg-white border-l-4 border-stone-300 rounded-r-lg p-5">
            <div className="text-stone-500 font-bold text-sm mb-1">March 2-18 — Days 3-19</div>
            <h3 className="font-bold text-stone-900 mb-2">War Expands Without Authorization</h3>
            <p className="text-stone-600 text-sm">
              Over the next 17 days, the war expanded to include strikes on Lebanon (via Israel), Houthi
              targets in Yemen, Iraqi militia positions, and Iranian nuclear facilities. The Pentagon
              requested $200 billion in supplemental funding on Day 19. At no point was Congress asked
              to authorize any of it.
            </p>
          </div>

          <div className="bg-white border-l-4 border-stone-300 rounded-r-lg p-5">
            <div className="text-stone-500 font-bold text-sm mb-1">March 20 — Day 21</div>
            <h3 className="font-bold text-stone-900 mb-2">250+ Organizations Demand Congress Act</h3>
            <p className="text-stone-600 text-sm">
              A coalition of over 250 organizations — including the ACLU, Veterans for Peace, the Quincy
              Institute, Win Without War, and the National Council of Churches — sent an open letter to
              Congress demanding it &quot;exercise its constitutional authority to halt funding for this
              unauthorized war.&quot; Congress took no action.
            </p>
          </div>
        </div>
      </section>

      {/* The Constitution */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          What the Constitution Actually Says
        </h2>

        <div className="bg-stone-900 text-white rounded-xl p-8 mb-6">
          <h3 className="font-bold text-lg mb-4 text-red-400">Article I, Section 8</h3>
          <blockquote className="border-l-4 border-red-600 pl-4 text-stone-300 italic text-lg">
            &quot;The Congress shall have Power... To declare War, grant Letters of Marque and Reprisal, and make
            Rules concerning Captures on Land and Water; To raise and support Armies... To provide and maintain
            a Navy... To make Rules for the Government and Regulation of the land and naval Forces.&quot;
          </blockquote>
          <p className="text-stone-400 mt-4">
            The Founders were unambiguous: the power to take the nation to war belongs to Congress, not the
            President. James Madison wrote: &quot;The constitution supposes, what the History of all Governments
            demonstrates, that the Executive is the branch of power most interested in war, and most prone to it.
            It has accordingly with studied care vested the question of war in the Legislature.&quot;
          </p>
          <p className="text-stone-500 text-xs mt-2">Source: US Constitution; Madison, Letter to Jefferson (1798)</p>
        </div>

        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <h3 className="font-bold text-stone-900 text-lg mb-4">The War Powers Resolution of 1973</h3>
          <p className="text-stone-600 mb-4">
            After Vietnam, Congress passed the War Powers Resolution (50 U.S.C. §§ 1541–1548) to reassert
            its constitutional authority. The key provisions:
          </p>
          <ul className="space-y-3 text-stone-600">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">§1541:</span>
              <span>The President can only introduce armed forces into hostilities pursuant to (1) a declaration
              of war, (2) specific statutory authorization, or (3) a national emergency created by an attack
              on the US.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">§1542:</span>
              <span>The President must consult with Congress &quot;in every possible instance&quot; before
              introducing forces into hostilities.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">§1543:</span>
              <span>Within 48 hours, the President must submit a written report to Congress explaining the
              circumstances, constitutional authority, and estimated scope and duration.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">§1544:</span>
              <span>The <strong>60-day clock</strong>: forces must be withdrawn within 60 days unless Congress
              authorizes the use of force (with a 30-day extension for safe withdrawal).</span>
            </li>
          </ul>
          <p className="text-stone-500 text-xs mt-3">Source: War Powers Resolution, Pub. L. 93-148 (1973)</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
          <p className="text-amber-800 text-sm">
            <strong>The 60-Day Clock:</strong> If the War Powers Resolution is applied, the 60-day clock started
            on February 28, 2026. That means forces must be withdrawn by <strong>April 29, 2026</strong> unless
            Congress authorizes the war. The administration has not acknowledged the clock&apos;s applicability,
            claiming &quot;inherent Article II self-defense authority.&quot; Every president since Nixon has
            taken this position. No court has definitively resolved the question.
          </p>
        </div>
      </section>

      {/* The Administration's Legal Theory */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Administration&apos;s Legal Theory
        </h2>

        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <p className="text-stone-700 mb-4">
            The White House has offered three legal justifications for Operation Epic Fury. Constitutional
            scholars have challenged all three:
          </p>

          <div className="space-y-6">
            <div className="border-b border-stone-100 pb-6">
              <h3 className="font-bold text-stone-900 mb-2">1. &quot;Article II Self-Defense Authority&quot;</h3>
              <p className="text-stone-600 text-sm mb-2">
                <strong>The claim:</strong> Iran&apos;s nuclear program constituted an imminent threat to national
                security, justifying preemptive strikes under the President&apos;s Article II authority as Commander-in-Chief.
              </p>
              <p className="text-stone-600 text-sm">
                <strong>The problem:</strong> The &quot;imminent threat&quot; standard has been stretched beyond recognition.
                Iran had no nuclear weapon. The IAEA had inspectors in the country. &quot;Imminence&quot; in the legal sense
                means an attack is about to happen — not that a country might someday develop a capability that could
                theoretically threaten the US. Constitutional scholar Bruce Ackerman called this &quot;the most extreme
                claim of presidential war power in American history.&quot;
              </p>
            </div>

            <div className="border-b border-stone-100 pb-6">
              <h3 className="font-bold text-stone-900 mb-2">2. The 2001 AUMF (Authorization for Use of Military Force)</h3>
              <p className="text-stone-600 text-sm mb-2">
                <strong>The claim:</strong> The 2001 AUMF, passed after 9/11, authorizes force against those who
                &quot;planned, authorized, committed, or aided&quot; the September 11 attacks — and Iran has supported
                groups connected to terrorism.
              </p>
              <p className="text-stone-600 text-sm">
                <strong>The problem:</strong> Iran had nothing to do with 9/11. The 2001 AUMF was directed at
                al-Qaeda and the Taliban. Iran is a Shia state that actively fought against al-Qaeda. Stretching
                a 25-year-old authorization against a completely different country for a completely different
                purpose makes the AUMF a blank check for permanent war — which is exactly what critics have
                warned about since 2001.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-stone-900 mb-2">3. &quot;Protecting US Forces Already in the Region&quot;</h3>
              <p className="text-stone-600 text-sm mb-2">
                <strong>The claim:</strong> Iranian-backed militia attacks on US bases in Iraq and Syria justified
                escalatory strikes against Iran itself to protect US forces.
              </p>
              <p className="text-stone-600 text-sm">
                <strong>The problem:</strong> This is circular logic. The US has forces in the region because of
                previous unauthorized deployments. You cannot use the presence of troops — whose deployment was
                itself unauthorized — to justify a new war to protect those troops. As Senator Chris Murphy (D-CT)
                said: &quot;You don&apos;t get to start a fire, claim you need water to put it out, and then
                use that as justification to flood the neighborhood.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Comparison */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          How America Has Authorized (or Not) Its Wars
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-stone-200 rounded-lg overflow-hidden text-sm">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="text-left p-3">War</th>
                <th className="text-left p-3">Congressional Vote</th>
                <th className="text-left p-3">Legal Basis</th>
                <th className="text-left p-3">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="p-3 font-medium text-stone-900">World War II (1941)</td>
                <td className="p-3 text-green-600 font-bold">✅ Formal Declaration</td>
                <td className="p-3 text-stone-600">Declaration of War (388-1 House, 82-0 Senate)</td>
                <td className="p-3 text-stone-600">$4.1T (inflation-adjusted)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Korea (1950)</td>
                <td className="p-3 text-red-600 font-bold">❌ No Vote</td>
                <td className="p-3 text-stone-600">UN Security Council resolution; &quot;police action&quot;</td>
                <td className="p-3 text-stone-600">$389B (inflation-adjusted)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">Vietnam (1964)</td>
                <td className="p-3 text-amber-600 font-bold">⚠️ Gulf of Tonkin Resolution</td>
                <td className="p-3 text-stone-600">Based on disputed incident; later repealed</td>
                <td className="p-3 text-stone-600">$1T (inflation-adjusted)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Gulf War (1991)</td>
                <td className="p-3 text-green-600 font-bold">✅ Congressional Vote</td>
                <td className="p-3 text-stone-600">H.J.Res. 77 (250-183 House, 52-47 Senate)</td>
                <td className="p-3 text-stone-600">$102B (inflation-adjusted)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">Afghanistan (2001)</td>
                <td className="p-3 text-green-600 font-bold">✅ AUMF Vote</td>
                <td className="p-3 text-stone-600">2001 AUMF (420-1 House, 98-0 Senate)</td>
                <td className="p-3 text-stone-600">$2.3T</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Iraq (2003)</td>
                <td className="p-3 text-green-600 font-bold">✅ Congressional Vote</td>
                <td className="p-3 text-stone-600">Iraq AUMF (296-133 House, 77-23 Senate)</td>
                <td className="p-3 text-stone-600">$1.1T direct; $3T total</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">Libya (2011)</td>
                <td className="p-3 text-red-600 font-bold">❌ No Vote</td>
                <td className="p-3 text-stone-600">Obama claimed WPR didn&apos;t apply; UN resolution cited</td>
                <td className="p-3 text-stone-600">$1.1B</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-red-600 font-bold">Iran (2026)</td>
                <td className="p-3 text-red-600 font-bold">❌ No Vote</td>
                <td className="p-3 text-red-600 font-bold">Article II; 2001 AUMF (stretched)</td>
                <td className="p-3 text-red-600 font-bold">$51.2B+ (28 days)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-stone-500 text-xs mt-3">
          Sources: Congressional Record; CBO historical war cost data; Congressional Research Service,
          &quot;Instances of Use of United States Armed Forces Abroad&quot; (updated 2026)
        </p>
      </section>

      {/* The Senate Vote */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The 53-47 Vote: How Congress Abdicated
        </h2>

        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <p className="text-stone-700 mb-4">
            The Senate vote on the Kaine-Paul War Powers Resolution was the one moment Congress could have
            asserted its constitutional authority. It chose not to. The vote broke down:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-600 mb-2">Against Resolution (Pro-War): 53</h3>
              <p className="text-stone-600 text-sm">52 Republicans + 0 Democrats</p>
              <p className="text-stone-500 text-xs mt-2">
                Every Republican except Rand Paul voted to allow the unauthorized war to continue.
                Senate Minority Leader McConnell argued the President has &quot;inherent authority&quot;
                and that the resolution would &quot;embolden our enemies.&quot;
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-600 mb-2">For Resolution (Anti-War): 47</h3>
              <p className="text-stone-600 text-sm">46 Democrats + 1 Republican (Rand Paul)</p>
              <p className="text-stone-500 text-xs mt-2">
                Senator Paul, in a floor speech, said: &quot;I didn&apos;t leave my party. My party left
                the Constitution. If we cannot even debate whether to go to war, what is the Senate for?&quot;
              </p>
            </div>
          </div>

          <div className="bg-stone-100 rounded-lg p-4">
            <p className="text-stone-700 text-sm">
              <strong>The significance:</strong> The War Powers Resolution was designed as a check on
              presidential war-making. But it requires a majority vote to invoke — and with partisan
              discipline, the president&apos;s party can simply vote it down. The Founders designed a system
              where Congress had to <em>authorize</em> war. The modern system has inverted that: Congress
              now has to <em>stop</em> war, which is far harder politically. A senator voting to &quot;stop
              supporting the troops&quot; faces attack ads; a senator who never voted to send them in the
              first place faces no accountability at all.
            </p>
          </div>
        </div>
      </section>

      {/* Public Opinion */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          What the Public Thinks
        </h2>

        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-stone-700 font-medium">Believe Congress should have voted first</span>
                <span className="font-bold text-stone-900">67%</span>
              </div>
              <div className="w-full bg-stone-200 rounded-full h-3">
                <div className="bg-red-600 h-3 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-stone-700 font-medium">Consider this a &quot;war of choice&quot;</span>
                <span className="font-bold text-stone-900">58%</span>
              </div>
              <div className="w-full bg-stone-200 rounded-full h-3">
                <div className="bg-red-600 h-3 rounded-full" style={{ width: '58%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-stone-700 font-medium">Oppose sending ground troops</span>
                <span className="font-bold text-stone-900">72%</span>
              </div>
              <div className="w-full bg-stone-200 rounded-full h-3">
                <div className="bg-red-600 h-3 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-stone-700 font-medium">Support the air campaign</span>
                <span className="font-bold text-stone-900">42%</span>
              </div>
              <div className="w-full bg-stone-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
          </div>

          <p className="text-stone-500 text-xs mt-4">Source: CBS News/YouGov poll, March 20-22, 2026 (n=2,048 US adults, ±2.8%)</p>
        </div>

        <p className="text-stone-600 mt-6">
          A majority of Americans believe this war required congressional authorization, consider it a
          &quot;war of choice,&quot; and oppose escalation to ground troops. Yet the war continues without
          authorization, the $200B funding request is moving through appropriations committees, and no
          meaningful congressional opposition has materialized beyond the failed War Powers vote.
        </p>
      </section>

      {/* The 250+ Organizations */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          250+ Organizations Say: Stop This War
        </h2>

        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <p className="text-stone-700 mb-4">
            On March 20, a coalition of <strong>over 250 organizations</strong> sent an open letter to Congress
            demanding it &quot;exercise its constitutional authority to halt funding for unauthorized military
            operations against Iran.&quot; Signatories span the political spectrum:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">Civil Liberties</h3>
              <ul className="text-stone-600 text-xs space-y-1">
                <li>• ACLU</li>
                <li>• Brennan Center for Justice</li>
                <li>• Electronic Frontier Foundation</li>
                <li>• National Lawyers Guild</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">Anti-War / Foreign Policy</h3>
              <ul className="text-stone-600 text-xs space-y-1">
                <li>• Quincy Institute</li>
                <li>• Win Without War</li>
                <li>• Veterans for Peace</li>
                <li>• CODEPINK</li>
                <li>• Concerned Veterans for America</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">Religious / Labor</h3>
              <ul className="text-stone-600 text-xs space-y-1">
                <li>• National Council of Churches</li>
                <li>• Friends Committee on Nat&apos;l Legislation</li>
                <li>• AFL-CIO (statement of concern)</li>
                <li>• United Methodist Church</li>
              </ul>
            </div>
          </div>

          <p className="text-stone-600 mt-4 text-sm">
            The letter states: &quot;No president — of any party — has the constitutional authority to wage a
            war of this scale without the express authorization of Congress. The framers of the Constitution
            did not create an elected king. They created a republic with separated powers. Congress must act
            or accept responsibility for its abdication.&quot;
          </p>
          <p className="text-stone-500 text-xs mt-2">Source: Open letter to Congress, March 20, 2026 (published at multiple signatory websites)</p>
        </div>
      </section>

      {/* Constitutional Scholars */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          What Constitutional Scholars Say
        </h2>

        <div className="space-y-4">
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <blockquote className="text-stone-700 italic mb-2">
              &quot;This is not a gray area. The Constitution is unambiguous: Congress declares war. What we
              are witnessing is the final collapse of the congressional war power — not because the Constitution
              changed, but because Congress chose to let it die.&quot;
            </blockquote>
            <p className="text-stone-500 text-sm">— Bruce Ackerman, Sterling Professor of Law, Yale University</p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <blockquote className="text-stone-700 italic mb-2">
              &quot;The 2001 AUMF was written to authorize force against those responsible for 9/11. Iran had
              nothing to do with 9/11. Using it to justify a war with Iran is like using a fishing license
              to hunt elephants — the words don&apos;t mean what the administration claims they mean.&quot;
            </blockquote>
            <p className="text-stone-500 text-sm">— Harold Koh, Former Legal Adviser, US State Department; Professor, Yale Law School</p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <blockquote className="text-stone-700 italic mb-2">
              &quot;We have reached the point that the Founders feared most: a single individual can plunge the
              nation into a catastrophic war, and the legislature designed to prevent exactly this has become
              a spectator. The War Powers Resolution is a dead letter. Article I, Section 8 is a dead letter.
              We are governed by the will of one person in matters of war and peace.&quot;
            </blockquote>
            <p className="text-stone-500 text-sm">— Jack Goldsmith, Professor, Harvard Law School; Former Assistant Attorney General, OLC</p>
          </div>
        </div>
      </section>

      {/* The Precedent */}
      <section className="my-12">
        <div className="bg-red-950 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
            The Precedent This Sets
          </h2>
          <p className="text-stone-300 mb-4">
            If Operation Epic Fury is allowed to continue without authorization — and if the $200 billion
            supplemental is approved without a formal war authorization vote — the precedent is clear:
          </p>
          <ul className="space-y-3 text-stone-300">
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Any president can start a <strong>major war</strong> against a sovereign nation without
              consulting Congress</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>The 2001 AUMF can be used to justify force against <strong>any country</strong> with any
              connection to any group the US considers terrorist-affiliated</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>The War Powers Resolution is <strong>functionally dead</strong> — a party-line vote can
              always defeat it</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Congress can fund wars it never authorized, making the power of the purse a
              <strong> rubber stamp</strong> rather than a check</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>The Founders&apos; design — that the most consequential decision a nation can make should
              require the broadest possible democratic consent — is <strong>permanently broken</strong></span>
            </li>
          </ul>
          <p className="text-stone-400 mt-6">
            This is not a partisan observation. It was true when Obama bombed Libya without authorization.
            It was true when Bush stretched the Iraq AUMF. The difference is scale: Operation Epic Fury is a
            $200 billion war against a nation of 89 million people that has closed the world&apos;s most important
            energy chokepoint. The stakes of unauthorized war-making have never been higher.
          </p>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="my-12">
        <div className="bg-stone-100 border-l-4 border-red-600 rounded-r-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">The Bottom Line</h2>
          <p className="text-stone-700">
            The United States is spending $1.88 billion per day on a war that was never authorized by Congress,
            never debated by the public, and was announced on social media at 2:30 in the morning. The Senate
            had one chance to invoke its constitutional authority and failed by 6 votes. 250+ organizations have
            demanded action. 67% of Americans say Congress should have voted. And the bombs keep falling.
            The question is no longer whether this war is constitutional. It&apos;s whether the Constitution
            still matters.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/iran-war-cost-breakdown" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran War Cost Breakdown →</div>
            <div className="text-stone-500 text-sm">$51.2B in 28 days — the $200B request in context</div>
          </Link>
          <Link href="/analysis/congressional-authority" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Congressional War Authority →</div>
            <div className="text-stone-500 text-sm">The history of Congress and war powers</div>
          </Link>
          <Link href="/analysis/iran-day-by-day" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran 2026: Day by Day →</div>
            <div className="text-stone-500 text-sm">Complete timeline of Operation Epic Fury</div>
          </Link>
          <Link href="/analysis/iran-vs-iraq-war" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran War vs Iraq War →</div>
            <div className="text-stone-500 text-sm">Iraq had a congressional vote. Iran didn&apos;t.</div>
          </Link>
        </div>
      </section>

      
      <RelatedArticles articles={[{"slug":"49-days-in","title":"49 Days In: Iran War Costs","desc":"What the Iran war has cost after 49 days."},{"slug":"iran-2026","title":"Iran 2026","desc":"The war nobody asked for."},{"slug":"iran-civilian-cost","title":"Iran Civilian Cost","desc":"Schools, hospitals, bazaars destroyed."},{"slug":"iran-cost-per-second","title":"$21,800 Per Second","desc":"Iran war cost tracker."}]} />
      <BackToTop />
    </div>
  )
}
