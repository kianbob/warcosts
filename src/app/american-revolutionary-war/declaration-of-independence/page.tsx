import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'The Declaration of Independence — Grievances, Meaning & Legacy | WarCosts',
  description: 'A complete analysis of the Declaration of Independence: every grievance against King George III, what each meant, and why these principles of liberty and self-governance matter today.',
  keywords: ['Declaration of Independence', 'grievances', 'King George III', 'Thomas Jefferson', 'self-governance', 'unalienable rights', 'liberty'],
  openGraph: {
    title: 'The Declaration of Independence — What It Said and Why It Still Matters',
    description: 'Every grievance, every principle, every reason 56 men risked their lives to sign the most consequential document in the history of liberty.',
    url: 'https://warcosts.org/american-revolutionary-war/declaration-of-independence',
  },
}

const grievances = [
  {
    text: 'He has refused his Assent to Laws, the most wholesome and necessary for the public good.',
    meaning: 'Colonial legislatures passed laws that the King vetoed — not because they were bad, but because they limited royal or Parliamentary power. Self-governance was denied at the most basic level.',
    modern: 'The principle that legitimate government requires the consent of the governed remains the foundation of democracy worldwide.',
  },
  {
    text: 'He has forbidden his Governors to pass Laws of immediate and pressing importance.',
    meaning: 'Even urgent colonial laws required royal approval — a process that could take months or years across the Atlantic. Colonies couldn\'t respond to their own crises.',
    modern: 'The argument for local governance and against distant, unresponsive centralized authority.',
  },
  {
    text: 'He has dissolved Representative Houses repeatedly, for opposing with manly firmness his invasions on the rights of the people.',
    meaning: 'When colonial legislatures resisted British policy, the King simply dissolved them. The Massachusetts legislature was shut down after protesting the Townshend Acts.',
    modern: 'The protection of legislative independence from executive overreach — embedded in our separation of powers.',
  },
  {
    text: 'He has kept among us, in times of peace, Standing Armies without the Consent of our Legislatures.',
    meaning: 'After the French and Indian War, Britain stationed 10,000 troops in the colonies — not to defend them, but to control them. Colonists were forced to house and feed soldiers (Quartering Acts).',
    modern: 'The Third Amendment and deep American skepticism of standing armies. The founders believed a free people should not live under military occupation by their own government.',
  },
  {
    text: 'He has affected to render the Military independent of and superior to the Civil power.',
    meaning: 'Military commanders in the colonies answered to the Crown, not colonial governments. Martial law could be imposed without civilian consent.',
    modern: 'The bedrock principle of civilian control of the military — the President is Commander-in-Chief, not a general.',
  },
  {
    text: 'For imposing Taxes on us without our Consent.',
    meaning: 'The Stamp Act (1765), Townshend Acts (1767), and Tea Act (1773) levied taxes on colonists who had no representation in Parliament. "No taxation without representation" was born here.',
    modern: 'The principle that taxation requires representation — the foundation of republican government and the reason Americans elect their own legislators.',
  },
  {
    text: 'For depriving us in many cases, of the benefits of Trial by Jury.',
    meaning: 'The Admiralty Courts tried colonists without juries for violations of trade laws. The accused had no peers judging them — only Crown-appointed judges.',
    modern: 'The Sixth and Seventh Amendments guarantee jury trials. The founders considered this right essential to liberty.',
  },
  {
    text: 'For transporting us beyond Seas to be tried for pretended offences.',
    meaning: 'Colonists could be shipped to England for trial — removed from their communities, their witnesses, and any hope of a fair hearing.',
    modern: 'The right to a speedy, local trial. The prohibition against extraordinary rendition has its roots here.',
  },
  {
    text: 'For cutting off our Trade with all parts of the world.',
    meaning: 'The Navigation Acts forced all colonial trade through Britain. Colonies couldn\'t freely trade with other nations — enriching British merchants at colonial expense.',
    modern: 'Economic freedom as a component of political freedom. Free trade and economic self-determination.',
  },
  {
    text: 'He has excited domestic insurrections amongst us.',
    meaning: 'Lord Dunmore\'s Proclamation (1775) offered freedom to enslaved people who fought for the British — a military strategy to destabilize the colonies from within.',
    modern: 'A complex grievance that reveals the contradictions of the Revolution. The founders who wrote "all men are created equal" were also slaveholders. The tension between the Declaration\'s ideals and the reality of slavery would take a Civil War to begin resolving.',
  },
]

const signers = [
  { fact: '56 men signed', detail: 'Each committed treason against the Crown — punishable by hanging, drawing, and quartering.' },
  { fact: '5 were captured', detail: 'Tortured and imprisoned by the British during the war.' },
  { fact: '12 had homes burned', detail: 'British forces deliberately targeted signers\' properties for destruction.' },
  { fact: '9 fought and died', detail: 'From wounds or hardships suffered during the Revolutionary War.' },
  { fact: '2 lost sons', detail: 'Who were killed or captured serving in the Continental Army.' },
  { fact: 'Average age: 44', detail: 'Jefferson was 33. Franklin was 70. Edward Rutledge was 26 — the youngest.' },
]

export default function DeclarationPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Breadcrumbs items={[{ label: 'Revolutionary War', href: '/american-revolutionary-war' }, { label: 'Declaration of Independence' }]} dark />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold mt-6 mb-4">
            The Declaration of Independence
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-2">July 4, 1776</p>
          <p className="text-lg text-stone-400 max-w-3xl mx-auto">
            The most consequential political document in the history of human liberty. 1,320 words that changed the world — and the grievances that justified a revolution.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* The Core Principles */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Revolutionary Idea</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
            <blockquote className="text-xl md:text-2xl italic text-stone-800 leading-relaxed font-[family-name:var(--font-heading)]">
              &ldquo;We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. — That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.&rdquo;
            </blockquote>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white border border-stone-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-red-700 mb-2">🔥 Natural Rights</h3>
              <p className="text-stone-600">Rights are not granted by governments — they are inherent to being human. No king, parliament, or legislature can legitimately take them away. This was revolutionary in a world of divine-right monarchies.</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-red-700 mb-2">🏛️ Consent of the Governed</h3>
              <p className="text-stone-600">Government derives its authority from the people — not from God, not from tradition, not from military power. If a government violates this social contract, the people have the right to change it.</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-red-700 mb-2">⚖️ Right of Revolution</h3>
              <p className="text-stone-600">When a government becomes destructive of liberty, the people have not merely the right but the duty to alter or abolish it. This was the philosophical justification for taking up arms.</p>
            </div>
          </div>
        </section>

        {/* The Grievances */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">The Grievances Against the King</h2>
          <p className="text-stone-500 mb-8">The Declaration listed 27 specific grievances against King George III. Here are the most significant — what they meant then, and why they matter now.</p>
          <div className="space-y-6">
            {grievances.map((g, i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
                <div className="bg-stone-50 border-b border-stone-200 p-5">
                  <p className="italic text-stone-700 font-medium">&ldquo;{g.text}&rdquo;</p>
                </div>
                <div className="p-5 grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide text-stone-400 mb-1">What It Meant in 1776</h4>
                    <p className="text-stone-700 text-sm">{g.meaning}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide text-red-600 mb-1">Why It Matters Today</h4>
                    <p className="text-stone-700 text-sm">{g.modern}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Signers */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">The Men Who Signed</h2>
          <p className="text-stone-500 mb-6">&ldquo;We mutually pledge to each other our Lives, our Fortunes and our sacred Honor.&rdquo; — These were not empty words.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {signers.map((s, i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="text-2xl font-bold text-red-700 mb-1">{s.fact}</div>
                <p className="text-stone-600 text-sm">{s.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Jefferson */}
        <section className="bg-white border border-stone-200 rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">Jefferson&apos;s Genius</h2>
          <div className="space-y-4 text-stone-700">
            <p>
              Thomas Jefferson was 33 years old when the Continental Congress tasked him with drafting the Declaration. He wrote it in roughly 17 days, working from a portable writing desk in a rented room in Philadelphia.
            </p>
            <p>
              Jefferson drew on John Locke&apos;s philosophy of natural rights, George Mason&apos;s Virginia Declaration of Rights, and his own deep reading of Enlightenment thinkers. But his genius lay not in originality — it lay in expression. He took complex philosophical ideas and rendered them in language so clear, so powerful, and so universal that they became self-evident.
            </p>
            <p>
              The Declaration was edited by Benjamin Franklin and John Adams, and then again by the full Congress — which cut roughly a quarter of Jefferson&apos;s draft, including a passionate denunciation of the slave trade. Jefferson was unhappy with the changes, but the result was tighter and more powerful.
            </p>
            <p className="font-bold text-red-700">
              The words Jefferson wrote have inspired every liberation movement since — from the French Revolution to the abolition of slavery, from women&apos;s suffrage to the civil rights movement. No 1,320 words in human history have done more to advance the cause of freedom.
            </p>
          </div>
        </section>

        {/* Legacy */}
        <section className="bg-stone-900 text-white rounded-2xl p-8 md:p-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-6">A Living Document</h2>
          <div className="space-y-4 text-stone-300 text-lg">
            <p>
              The Declaration of Independence is not a relic. It is a living argument — one that each generation must engage with, wrestle with, and extend.
            </p>
            <p>
              When Frederick Douglass asked in 1852, &ldquo;What to the Slave Is the Fourth of July?&rdquo; he was not rejecting the Declaration — he was demanding that America live up to it. When Elizabeth Cady Stanton wrote the Declaration of Sentiments at Seneca Falls in 1848, she modeled it directly on Jefferson&apos;s words. When Martin Luther King Jr. stood at the Lincoln Memorial in 1963, he called the Declaration &ldquo;a promissory note to which every American was to fall heir.&rdquo;
            </p>
            <p>
              The genius of the Declaration is that it set a standard no single generation could fully achieve — but every generation can move closer to. &ldquo;All men are created equal&rdquo; was aspirational in 1776. It remains aspirational today. And that is precisely the point.
            </p>
            <p className="text-red-400 font-bold text-xl">
              The Declaration did not just declare independence from Britain. It declared the independence of the individual from arbitrary power — forever.
            </p>
          </div>
        </section>

        <div className="flex gap-4 flex-wrap">
          <Link href="/american-revolutionary-war" className="text-red-600 hover:underline">← Back to Revolutionary War</Link>
          <Link href="/american-revolutionary-war/founding-fathers" className="text-red-600 hover:underline">The Founding Fathers →</Link>
        </div>

        <ShareButtons title="The Declaration of Independence — Grievances & Legacy" />
      </main>
    </>
  )
}
