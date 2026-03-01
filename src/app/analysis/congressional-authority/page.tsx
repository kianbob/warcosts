import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: '19 Wars Without Congress — The Death of the War Power | WarCosts',
  description: 'The Constitution gives Congress alone the power to declare war. Yet 19 of 28 US conflicts were fought without congressional authorization.',
}

export default function CongressionalAuthorityPage() {
  const conflicts = loadData('conflicts.json')
  const unauthorized = conflicts.filter((c: any) => !c.congressionalAuth)
  const authorized = conflicts.filter((c: any) => c.congressionalAuth)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Congressional Authority' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">19 Wars Without Congress</h1>
      <p className="text-muted mb-6">The Founders gave Congress — and Congress alone — the power to take the nation to war. Over 248 years, that power has been systematically stolen by the executive branch.</p>
      <ShareButtons title="19 Wars Without Congress — The Death of the War Power" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-red-50 rounded-lg p-6 border border-red-200 text-center">
          <p className="text-5xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{unauthorized.length}</p>
          <p className="text-muted font-semibold">Without Authorization</p>
        </div>
        <div className="bg-green-50 rounded-lg p-6 border border-green-200 text-center">
          <p className="text-5xl font-bold text-green-700 font-[family-name:var(--font-heading)]">{authorized.length}</p>
          <p className="text-muted font-semibold">With Authorization</p>
        </div>
      </div>

      {/* The Constitutional Text */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-amber-800">📜 Article I, Section 8 of the US Constitution</h2>
        <blockquote className="font-serif text-lg italic text-stone-700 leading-relaxed">
          &ldquo;The Congress shall have Power... To declare War, grant Letters of Marque and Reprisal, and make Rules concerning Captures on Land and Water; To raise and support Armies... To provide and maintain a Navy... To make Rules for the Government and Regulation of the land and naval Forces.&rdquo;
        </blockquote>
        <p className="text-sm text-muted mt-4">The Founders were explicit: Congress controls the military. The President commands troops in the field, but only Congress can authorize their use. This wasn&apos;t ambiguous — it was deliberate.</p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">Why the Founders Did This</h2>
        <p>The Founders had lived under a king who could drag his subjects into war on a whim. They were determined to prevent any American executive from doing the same. James Madison&apos;s argument was clear:</p>
      </div>

      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;The constitution supposes, what the History of all Governments demonstrates, that the Executive is the branch of power most interested in war, and most prone to it. It has accordingly with studied care vested the question of war to the Legislature.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— James Madison, letter to Thomas Jefferson, 1798</p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <p>Alexander Hamilton, despite being the strongest advocate for executive power among the Founders, agreed that the President&apos;s role as Commander-in-Chief was limited to &ldquo;the direction of war when authorized or begun.&rdquo; The authorization had to come from Congress.</p>

        <h2 className="font-[family-name:var(--font-heading)]">The Erosion: Step by Step</h2>

        <h3 className="font-[family-name:var(--font-heading)]">1950: Korea — The Precedent</h3>
        <p>President Truman sent 300,000 troops to Korea without asking Congress, calling it a &ldquo;police action&rdquo; under UN authority. Congress never voted. 36,574 Americans died. This set the precedent that presidents could wage major wars without congressional authorization — as long as they called them something other than &ldquo;war.&rdquo;</p>

        <h3 className="font-[family-name:var(--font-heading)]">1964: Gulf of Tonkin — The Blank Check</h3>
        <p>After a likely fabricated naval incident, Congress passed the Gulf of Tonkin Resolution giving President Johnson authority to use &ldquo;all necessary measures&rdquo; in Southeast Asia. It passed 88-2 in the Senate. It was used to justify a decade-long war that killed 58,000 Americans and 2 million Vietnamese civilians. The &ldquo;incident&rdquo; that triggered it almost certainly didn&apos;t happen as described.</p>

        <h3 className="font-[family-name:var(--font-heading)]">1973: War Powers Resolution — The Failed Fix</h3>
        <p>After Vietnam, Congress tried to reassert its war power by passing the War Powers Resolution over Nixon&apos;s veto. It requires the president to:</p>
        <ul>
          <li>Notify Congress within 48 hours of committing forces</li>
          <li>Withdraw forces within 60 days unless Congress authorizes continued action</li>
          <li>Remove forces if Congress passes a concurrent resolution</li>
        </ul>
        <p>In theory, this should work. In practice, <strong>every president since 1973 has claimed the Resolution is unconstitutional</strong> — while simultaneously violating it. No president has ever been held accountable for violating the War Powers Resolution. Not once.</p>

        <h3 className="font-[family-name:var(--font-heading)]">2001: The AUMF — 60 Words, 22 Countries</h3>
        <p>Three days after 9/11, in a moment of national trauma, Congress passed the Authorization for Use of Military Force (AUMF). The operative clause is just 60 words:</p>
      </div>

      <div className="bg-red-50 rounded-xl p-6 my-6 border border-red-200">
        <blockquote className="text-sm italic text-stone-700">
          &ldquo;That the President is authorized to use all necessary and appropriate force against those nations, organizations, or persons he determines planned, authorized, committed, or aided the terrorist attacks that occurred on September 11, 2001, or harbored such organizations or persons, in order to prevent any future acts of international terrorism against the United States by such nations, organizations or persons.&rdquo;
        </blockquote>
        <p className="text-xs text-muted mt-3">Passed September 14, 2001. Vote: 98-0 Senate, 420-1 House. The lone dissenter was Rep. Barbara Lee (D-CA), who warned it was a &ldquo;blank check.&rdquo; She was right.</p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <p>These 60 words have been used to justify military operations in at least <strong>22 countries</strong>: Afghanistan, Iraq, Syria, Yemen, Somalia, Libya, Niger, Pakistan, Philippines, Georgia, Djibouti, Kenya, Ethiopia, Eritrea, and more. The AUMF has no geographic limitation, no expiration date, and has been stretched far beyond any connection to 9/11. It has never been repealed.</p>

        <h3 className="font-[family-name:var(--font-heading)]">Today: The President Wages War at Will</h3>
        <p>The current state of affairs would horrify the Founders. The President can order drone strikes that kill people in countries most Americans can&apos;t find on a map — without any congressional vote, any public debate, or any legal consequence. Special forces operate in dozens of countries under classified authorities. Cyber operations can cripple foreign infrastructure with no oversight.</p>
        <p>Congress has effectively abdicated its most solemn responsibility. Most members prefer it this way — voting for war is politically risky. It&apos;s easier to let the President act and then criticize the results.</p>
      </div>

      {/* Lists */}
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

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• Congress has formally <strong>declared war only 5 times</strong> in American history: 1812, Mexican-American War, Spanish-American War, WWI, WWII.</li>
          <li>• The 2001 AUMF has been used in <strong>22+ countries</strong> — including against groups that didn&apos;t exist on 9/11.</li>
          <li>• Rep. <strong>Barbara Lee</strong> cast the only vote against the 2001 AUMF. She received death threats and needed a bodyguard for months.</li>
          <li>• President Obama bombed <strong>7 countries</strong> (Afghanistan, Iraq, Syria, Libya, Yemen, Somalia, Pakistan) without a single new congressional authorization.</li>
          <li>• The Founders debated changing &ldquo;declare war&rdquo; to &ldquo;make war&rdquo; — and rejected it, because they wanted to limit the President to repelling sudden attacks, not initiating conflict.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/timeline" className="text-red-800 hover:underline">→ Timeline — all wars chronologically</Link></li>
          <li><Link href="/covert" className="text-red-800 hover:underline">→ Covert Operations — secret wars with no authorization</Link></li>
          <li><Link href="/analysis/forever-wars" className="text-red-800 hover:underline">→ Forever Wars — why they never end</Link></li>
        </ul>
      </div>
    </div>
  )
}
