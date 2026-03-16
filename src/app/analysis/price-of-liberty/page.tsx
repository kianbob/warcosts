import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'The Price of Liberty — What Independence Cost and Why It Was Worth It | WarCosts',
  description: 'What the American Revolution cost in lives, treasure, and suffering — and why every price paid was worth it. A celebration of the war that created a free nation.',
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Analysis', href: '/analysis' }, { label: 'The Price of Liberty' }]} dark />
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

        <div className="flex gap-4 flex-wrap">
          <Link href="/american-revolutionary-war" className="text-red-600 hover:underline">← Revolutionary War Overview</Link>
          <Link href="/american-revolutionary-war/costs" className="text-red-600 hover:underline">Financial Analysis →</Link>
          <Link href="/analysis/founding-fathers-at-war" className="text-red-600 hover:underline">Founding Fathers at War →</Link>
        </div>

        <ShareButtons title="The Price of Liberty — What Independence Cost and Why It Was Worth It" />
      </main>
    </>
  )
}
