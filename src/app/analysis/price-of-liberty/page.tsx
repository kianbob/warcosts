import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'

export const metadata: Metadata = {
  title: 'The Price of Liberty: What Independence Cost',
  description: 'What the American Revolution cost in lives, treasure, and suffering — and why every price paid was worth it. A celebration of freedom.',
  keywords: ['price of liberty', 'cost of independence', 'American Revolution worth it', 'Revolutionary War casualties', 'freedom isn\'t free'],
  openGraph: {
    title: 'The Price of Liberty — Was the American Revolution Worth It?',
    description: 'Every life lost, every dollar spent, every sacrifice made — and the free nation it purchased. A celebration of American independence.',
    url: 'https://warcosts.org/analysis/price-of-liberty',
  },
}

const humanCost = [
  { category: 'Killed in Battle', count: '~6,800', detail: 'From Lexington to Yorktown, Americans fell on fields that became hallowed ground.' },
  { category: 'Died of Disease', count: '~10,000', detail: 'Smallpox, typhus, dysentery, and camp fever killed more than British bullets.' },
  { category: 'Died in Prison Ships', count: '~8,500', detail: 'More Americans died on British prison ships in New York Harbor than in all the war\'s battles combined. The Jersey alone held 11,000 prisoners; most never returned.' },
  { category: 'Wounded', count: '~25,000', detail: 'In an era without antibiotics or anesthesia, even minor wounds could prove fatal.' },
  { category: 'Total American Dead', count: '~25,000', detail: 'Roughly 1% of the entire colonial population — equivalent to 3.3 million Americans today.' },
  { category: 'Civilian Losses', count: 'Thousands', detail: 'Homes burned, farms destroyed, families displaced. The Southern Campaign was particularly brutal.' },
]

export default function PriceOfLibertyPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Price of Liberty' }]} dark />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold mt-6 mb-4">
            The Price of Liberty
          </h1>
          <p className="text-xl md:text-2xl text-stone-300">
            What independence cost — in blood, in treasure, in suffering — and why every price paid was worth it.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* The Human Cost */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Human Cost</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {humanCost.map((h, i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="text-sm text-stone-400 uppercase tracking-wide">{h.category}</div>
                <div className="text-2xl font-bold text-red-700 mt-1">{h.count}</div>
                <p className="text-sm text-stone-600 mt-2">{h.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Financial Cost */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Financial Cost</h2>
          <div className="bg-white border border-stone-200 rounded-xl p-8 space-y-4 text-stone-700">
            <p>The war cost approximately <strong>$2.4 billion in 2026 dollars</strong> — a staggering sum for 13 colonies with a combined economy smaller than that of a modern mid-sized American city.</p>
            <p>The Continental dollar collapsed to 1¢ on the dollar. Soldiers went years without pay. Veterans returned home to find their farms seized for debts they couldn&apos;t pay with the worthless currency they&apos;d been given. The new nation was born $43 million in debt — with no treasury, no taxing power, and creditors from Paris to Amsterdam demanding payment.</p>
            <p>The war impoverished many of its most devoted supporters. Robert Morris, who personally financed the Yorktown campaign, died bankrupt. Nathanael Greene, Washington&apos;s best general, died insolvent at 43. Thousands of common soldiers lived out their days in poverty, their promised pensions paid in depreciated scrip — if paid at all.</p>
          </div>
        </section>

        {/* The Personal Cost */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Personal Cost to the Founders</h2>
          <div className="bg-white border border-stone-200 rounded-xl p-8 space-y-4 text-stone-700">
            <p>The 56 signers of the Declaration pledged &ldquo;our Lives, our Fortunes, and our sacred Honor.&rdquo; The pledge was not rhetorical:</p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Five</strong> were captured by the British and tortured before dying</li>
              <li>• <strong>Twelve</strong> had their homes ransacked and burned</li>
              <li>• <strong>Two</strong> lost sons serving in the Revolutionary Army</li>
              <li>• <strong>Nine</strong> fought and died from wounds or hardships of the war</li>
              <li>• <strong>Carter Braxton</strong> of Virginia, a wealthy planter, saw his ships swept from the seas. He sold his home to pay his debts and died in rags.</li>
              <li>• <strong>Thomas Nelson Jr.</strong> directed cannon fire at his own home during Yorktown — because Cornwallis had made it his headquarters. He died bankrupt.</li>
            </ul>
            <p className="font-bold">They knew what they were risking. They signed anyway. That is what courage looks like.</p>
          </div>
        </section>

        {/* What Was Gained */}
        <section className="bg-stone-900 text-white rounded-2xl p-8 md:p-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-6">What Was Gained</h2>
          <div className="space-y-4 text-stone-300 text-lg">
            <p>Every war has a cost. What makes the American Revolution unique is what was purchased with that cost.</p>
            <p>Not territory — though the new nation stretched from the Atlantic to the Mississippi. Not wealth — though America would become the richest nation in history. Not power — though American power would reshape the world.</p>
            <p>What was purchased was an <em>idea</em>.</p>
            <p>The idea that human beings possess rights that no government can take away. The idea that political authority derives from the consent of the governed, not the accident of birth. The idea that people can govern themselves — that they don&apos;t need kings, lords, or masters to tell them how to live.</p>
            <p>Before 1776, this idea existed only in philosophy books. After 1776, it existed as a nation.</p>
            <p>The American Revolution didn&apos;t just free 13 colonies from British rule. It planted the seed of self-governance that would grow into the French Revolution, the Latin American independence movements, the abolition of slavery, women&apos;s suffrage, the civil rights movement, and the fall of empires across the globe.</p>

            <div className="border-t border-stone-700 pt-6 mt-6">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">By the Numbers: What Liberty Produced</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { stat: '248 years', desc: 'of continuous self-governance — the longest-running constitutional republic in history' },
                  { stat: '27 amendments', desc: 'expanding rights and liberties beyond what even the founders imagined' },
                  { stat: '50 states', desc: 'from 13 colonies to the world\'s third-largest nation by area' },
                  { stat: '$28 trillion', desc: 'GDP — the largest economy in human history, built on the foundation the founders laid' },
                  { stat: '330+ million', desc: 'free citizens in the nation that 25,000 gave their lives to create' },
                  { stat: 'Countless', desc: 'nations and movements inspired by the Declaration\'s promise of liberty and equality' },
                ].map((s, i) => (
                  <div key={i} className="bg-stone-800 rounded-lg p-4">
                    <div className="text-xl font-bold text-red-400">{s.stat}</div>
                    <div className="text-sm text-stone-400">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Cost Compared */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Cost Compared to Modern Wars</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-red-800">
                  <th className="py-3 pr-4 font-[family-name:var(--font-heading)]">War</th>
                  <th className="py-3 pr-4 text-stone-500 text-sm">Cost (2026$)</th>
                  <th className="py-3 pr-4 text-stone-500 text-sm">Duration</th>
                  <th className="py-3 text-stone-500 text-sm">What Was Gained</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { war: 'Revolutionary War', cost: '$2.4B', duration: '8 years', gained: 'Independence, Constitution, democracy' },
                  { war: 'Vietnam War', cost: '$5.2T', duration: '20 years', gained: 'Nothing. Vietnam unified under communism.' },
                  { war: 'Iraq War', cost: '$1.9T', duration: '8 years', gained: 'Destabilized region, created ISIS' },
                  { war: 'Afghanistan', cost: '$2.3T', duration: '20 years', gained: 'Taliban returned to power in 11 days' },
                  { war: 'War on Terror (total)', cost: '$8T+', duration: '25 years', gained: 'More enemies than when it started' },
                ].map((w, i) => (
                  <tr key={i} className={`border-b ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
                    <td className="py-3 pr-4 font-semibold">{w.war}</td>
                    <td className="py-3 pr-4 text-red-700 font-bold">{w.cost}</td>
                    <td className="py-3 pr-4 text-stone-600">{w.duration}</td>
                    <td className="py-3 text-stone-600 text-sm">{w.gained}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-sm mt-4">
            The Revolution cost 0.03% of what the War on Terror has cost. It achieved infinitely more.
          </p>
        </section>

        {/* Was It Worth It? */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4 text-red-900">Was It Worth It?</h2>
          <div className="space-y-4 text-stone-800 text-lg">
            <p>WarCosts.org exists to question the cost of America&apos;s wars — to ask whether the trillions spent and millions of lives lost were justified by what was achieved.</p>
            <p>For the War on Terror, the answer is deeply troubling. For Vietnam, the question haunts us still. For Iraq, the evidence is damning.</p>
            <p>But for the American Revolution?</p>
            <p className="font-bold text-red-800 text-xl">The American Revolution is the war against which all others are measured — and against which all others fall short. It is the one war where the cost, however terrible, was justified by something greater: the birth of liberty itself.</p>
            <p>Twenty-five thousand died so that 330 million could live free. $2.4 billion was spent so that a $28 trillion economy could flourish. Fifty-six men risked everything so that every American who came after them could enjoy rights their ancestors had only dreamed of.</p>
            <p className="font-bold">The price of liberty is never cheap. But it is always worth paying.</p>
          </div>
        </section>

        {/* The World They Made Possible */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The World They Made Possible</h2>
          <div className="bg-white border border-stone-200 rounded-xl p-8 space-y-4 text-stone-700">
            <p>The American Revolution didn&apos;t just create a country. It created a <em>possibility</em> — the possibility that ordinary people could govern themselves without kings, priests, or hereditary aristocrats telling them how to live.</p>
            <p>Consider what followed directly from the American experiment:</p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>The French Revolution (1789)</strong> — Directly inspired by American independence. Lafayette sent Washington the key to the Bastille.</li>
              <li>• <strong>Latin American independence (1810s–1820s)</strong> — Bolívar and San Martín explicitly cited the American model.</li>
              <li>• <strong>The abolition of slavery</strong> — The Declaration&apos;s promise of equality, though unfulfilled at the founding, became the moral basis for abolition.</li>
              <li>• <strong>Women&apos;s suffrage</strong> — The Seneca Falls Declaration of 1848 deliberately echoed the Declaration of Independence.</li>
              <li>• <strong>The Civil Rights Movement</strong> — Dr. King called the Declaration a &ldquo;promissory note&rdquo; that America had yet to honor.</li>
              <li>• <strong>The fall of the Berlin Wall (1989)</strong> — Protesters carried American flags and quoted Jefferson.</li>
              <li>• <strong>Democratic movements worldwide</strong> — From Hong Kong to Ukraine, movements for self-governance trace their intellectual lineage to 1776.</li>
            </ul>
            <p className="font-bold">The 25,000 who died in the Revolution didn&apos;t just purchase American freedom. They purchased the idea that freedom was possible — and that idea has liberated billions.</p>
          </div>
        </section>

        {/* The Standard Against Which All Wars Are Measured */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Why WarCosts Celebrates This War</h2>
          <div className="bg-white border border-stone-200 rounded-xl p-8 space-y-4 text-stone-700">
            <p>
              WarCosts exists to question the cost of war — to ask hard questions about whether the price was worth what was gained.
              We ask this of Vietnam. We ask this of Iraq. We ask this of the War on Terror. We will ask it of Iran.
            </p>
            <p>
              But intellectual honesty requires acknowledging when the answer is clear. The American Revolution is the
              war that <em>justifies the framework</em> — because it shows that some things are worth fighting for.
              Liberty. Self-governance. The right to be free.
            </p>
            <p>
              The tragedy of American military history since 1776 is not that the country has fought wars. It&apos;s that
              so few of those wars have lived up to the standard set by the first one. The Revolution was fought for
              an idea. Most wars since have been fought for territory, resources, markets, prestige, or simply because
              the machinery of war, once built, demands to be used.
            </p>
            <p className="font-bold text-red-800">
              The price of liberty was worth paying. The question is whether we&apos;ve been paying for liberty ever since —
              or for something else entirely.
            </p>
          </div>
        </section>

        {/* Key Quotes */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">In Their Own Words</h2>
          <div className="space-y-4">
            {[
              { quote: 'The tree of liberty must be refreshed from time to time with the blood of patriots and tyrants.', author: 'Thomas Jefferson, 1787' },
              { quote: 'Those who would give up essential Liberty, to purchase a little temporary Safety, deserve neither Liberty nor Safety.', author: 'Benjamin Franklin, 1755' },
              { quote: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights.', author: 'Declaration of Independence, 1776' },
              { quote: 'I only regret that I have but one life to lose for my country.', author: 'Nathan Hale, 1776 (before execution by the British)' },
            ].map((q, i) => (
              <blockquote key={i} className="bg-stone-50 border-l-4 border-red-800 p-6 rounded-r-xl">
                <p className="text-stone-700 italic text-lg">&ldquo;{q.quote}&rdquo;</p>
                <p className="text-stone-500 text-sm mt-2">— {q.author}</p>
              </blockquote>
            ))}
          </div>
        </section>

        <div className="flex gap-4 flex-wrap">
          <Link href="/american-revolutionary-war" className="text-red-600 hover:underline">← Revolutionary War Overview</Link>
          <Link href="/american-revolutionary-war/costs" className="text-red-600 hover:underline">Financial Analysis →</Link>
          <Link href="/analysis/founding-fathers-at-war" className="text-red-600 hover:underline">Founding Fathers at War →</Link>
          <Link href="/us-wars-list" className="text-red-600 hover:underline">All US Wars →</Link>
          <Link href="/cost-of-war" className="text-red-600 hover:underline">Total Cost of War →</Link>
        </div>

        {/* Related Analysis */}
        <section className="bg-stone-50 border rounded-lg p-6 mt-8">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Continue Reading</h3>
          <ul className="space-y-2">
            <li><Link href="/american-revolutionary-war" className="text-red-800 hover:underline">→ Revolutionary War — Complete overview with data</Link></li>
            <li><Link href="/analysis/founding-fathers-at-war" className="text-red-800 hover:underline">→ Founding Fathers at War — Six men who won independence</Link></li>
            <li><Link href="/american-revolutionary-war/costs" className="text-red-800 hover:underline">→ Financial Analysis — How the war was funded</Link></li>
            <li><Link href="/war-calendar" className="text-red-800 hover:underline">→ War Calendar — 229 years at war since 1776</Link></li>
            <li><Link href="/cost-of-war" className="text-red-800 hover:underline">→ Cost of War — $11.3 trillion across all conflicts</Link></li>
            <li><Link href="/veterans-voices" className="text-red-800 hover:underline">→ Veterans&apos; Voices — Real stories from those who served</Link></li>
            <li><Link href="/decades" className="text-red-800 hover:underline">→ Spending by Decade — From 1940s to today</Link></li>
            <li><Link href="/tools/compare-wars" className="text-red-800 hover:underline">→ Compare Wars — Interactive comparison tool</Link></li>
            <li><Link href="/the-receipt" className="text-red-800 hover:underline">→ The $32 Trillion Receipt — Total military cost</Link></li>
          </ul>
        </section>

        {/* Sources Note */}
        <div className="border-t pt-6 mt-4">
          <p className="text-stone-400 text-xs">
            <strong>Sources:</strong> Casualty figures from Congressional Research Service (RL32492).
            Financial costs from CRS (RL33110) adjusted to 2026 dollars using BLS CPI-U.
            Signer biographies from National Archives and &ldquo;Signing Their Lives Away&rdquo; by Denise Kiernan.
            French contribution data from diplomatic records and Ron Chernow&apos;s &ldquo;Alexander Hamilton.&rdquo;
            Global impact analysis from academic literature on democratic diffusion and revolution contagion theory.
          </p>
        </div>

        {/* Final Thought */}
        <div className="bg-stone-900 text-white rounded-xl p-8 mt-8">
          <blockquote className="text-lg italic text-stone-300">
            &ldquo;Posterity! You will never know how much it cost the present generation
            to preserve your freedom! I hope you will make a good use of it. If you
            do not, I shall repent in Heaven that I ever took half the pains to
            preserve it.&rdquo;
          </blockquote>
          <p className="text-stone-500 text-sm mt-3">&mdash; John Adams, letter to Abigail Adams, April 26, 1777</p>
          <p className="text-stone-400 text-sm mt-6">
            Adams wrote these words at the darkest moment of the war, when the cause seemed hopeless.
            He could not know that the nation he was helping to create would become the most powerful
            in history. He could only hope. And he paid the price to make that hope possible.
          </p>
          <p className="text-stone-400 text-sm mt-3">
            Two hundred and fifty years later, the question remains: have we made good use of the
            freedom they purchased? Have we honored their sacrifice? Or have we squandered it on
            wars they would never have fought, spending they would never have approved, and powers
            they deliberately denied to the executive?
          </p>
          <p className="text-red-400 text-sm font-bold mt-3">
            The price of liberty was paid in full at Yorktown. The question is what we&apos;ve been
            paying for ever since.
          </p>
        </div>

        <FaqJsonLd faqs={[
          { q: 'How much did the American Revolution cost?', a: 'The American Revolution cost approximately $2.4 billion in 2026 inflation-adjusted dollars. The Continental Congress financed the war primarily through printed currency (Continental dollars), French and Dutch loans, state contributions, and domestic bonds.' },
          { q: 'How many people died in the American Revolution?', a: 'Approximately 25,000 Americans died in the Revolution: 6,800 killed in battle, 10,000 from disease, and 8,500 on British prison ships. Total wounded numbered about 25,000. This represented roughly 1% of the colonial population.' },
          { q: 'Was the American Revolution worth the cost?', a: 'By virtually any historical measure, yes. The Revolution created the world\'s longest-running constitutional republic, inspired democratic movements worldwide, and established the principle that government derives its authority from the consent of the governed.' },
          { q: 'What did the signers of the Declaration of Independence sacrifice?', a: 'The 56 signers risked everything: 5 were captured and tortured, 12 had homes burned, 2 lost sons in the war, 9 died from wounds or hardship, and many lost their fortunes. They pledged "our Lives, our Fortunes, and our sacred Honor" and many paid that price.' },
        ]} />

        <ShareButtons title="The Price of Liberty — What Independence Cost and Why It Was Worth It" />
      </main>
    </>
  )
}
