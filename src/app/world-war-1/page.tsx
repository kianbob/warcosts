import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'
import { CasualtiesByNation, USMonthlyCasualties } from './charts'

export const metadata: Metadata = {
  title: 'World War 1 US Cost — $334 Billion, 116,516 Dead, The War to End All Wars | WarCosts',
  description: 'US involvement in World War I (1917-1918) cost $334 billion adjusted, killed 116,516 Americans in just 19 months. Wilson\'s intervention transformed America from a republic into a global empire. Full costs, casualties, and consequences.',
  keywords: ['World War 1 cost', 'WW1 US casualties', 'World War 1 US involvement', 'Treaty of Versailles', 'Woodrow Wilson war', 'AEF', 'doughboys', 'WW1 deaths'],
  openGraph: {
    title: 'World War I — $334 Billion, 116,516 US Dead, The War That Created the American Empire',
    description: 'Wilson promised to make the world safe for democracy. Instead, he made it safe for empires, dictators, and a second world war.',
    url: 'https://warcosts.org/world-war-1',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'US Involvement', value: '19 Months' },
  { label: 'Total US Cost (2023 $)', value: '$334 Billion' },
  { label: 'US Military Deaths', value: '116,516' },
  { label: 'US Wounded', value: '204,002' },
  { label: 'Total War Dead (All Nations)', value: '~20 Million' },
  { label: 'Outcome', value: 'Treaty of Versailles' },
]

const costBreakdown = [
  { category: 'US Direct Military Expenditure', amount: 257, desc: 'Mobilization, training, transport, combat operations for 4.7 million troops' },
  { category: 'Allied Loans (never repaid)', amount: 48, desc: 'Loans to Britain, France, Italy, and others — most were never fully repaid' },
  { category: 'War Risk Insurance / Veterans', amount: 20, desc: 'Veterans benefits, disability, and insurance payouts' },
  { category: 'Shipping & War Production', amount: 9, desc: 'Emergency Fleet Corporation, war industries mobilization' },
]

const casualtiesByNation = [
  { nation: 'Russia', military: 1800, civilian: 1500 },
  { nation: 'Germany', military: 2037, civilian: 426 },
  { nation: 'France', military: 1368, civilian: 300 },
  { nation: 'Austria-H.', military: 1100, civilian: 467 },
  { nation: 'Britain', military: 886, civilian: 109 },
  { nation: 'Ottoman', military: 772, civilian: 2150 },
  { nation: 'Italy', military: 651, civilian: 589 },
  { nation: 'USA', military: 117, civilian: 1 },
]

const usMonthlyCasualties = [
  { month: 'Jun 1917', casualties: 35 },
  { month: 'Oct 1917', casualties: 110 },
  { month: 'Mar 1918', casualties: 420 },
  { month: 'Jun 1918', casualties: 3900 },
  { month: 'Jul 1918', casualties: 5800 },
  { month: 'Aug 1918', casualties: 8200 },
  { month: 'Sep 1918', casualties: 21000 },
  { month: 'Oct 1918', casualties: 28000 },
  { month: 'Nov 1918', casualties: 6500 },
]

const timeline = [
  { year: 'Aug 1914', title: 'War Erupts in Europe', desc: 'A Serbian nationalist assassinates Archduke Franz Ferdinand. The alliance system drags Europe into war within weeks. Wilson declares American neutrality. Most Americans want no part of Europe\'s ancient quarrels. The Founders\' warning against "entangling alliances" still resonates.' },
  { year: '1914–16', title: 'American Neutrality (Sort Of)', desc: 'Wilson runs for re-election on "He Kept Us Out of War." But the US is not truly neutral — American banks lend $2.3 billion to the Allies (vs. $27 million to Germany). American industry supplies Britain and France with munitions and materiel. The US economy becomes deeply intertwined with an Allied victory.' },
  { year: 'May 1915', title: 'Lusitania Sinking', desc: 'A German U-boat sinks the British liner Lusitania, killing 1,198 — including 128 Americans. Outrage sweeps the country. But the ship was carrying munitions (as Germany warned). Americans were traveling on a belligerent nation\'s ship through a declared war zone. The propaganda value was enormous.' },
  { year: 'Jan 1917', title: 'Unrestricted Submarine Warfare', desc: 'Germany resumes unrestricted submarine warfare, gambling it can starve Britain before America can mobilize. The Zimmermann Telegram — Germany\'s proposal that Mexico attack the US — is intercepted and published, inflaming American opinion.' },
  { year: 'Apr 6, 1917', title: 'US Declares War', desc: 'Wilson asks Congress for a declaration of war, promising to "make the world safe for democracy." The vote: 82-6 in the Senate, 373-50 in the House. Senator George Norris warns: "We are going to war upon the command of gold." He is largely right — the financial interests of American banks and industries in an Allied victory are enormous.' },
  { year: '1917', title: 'Mobilization and Repression', desc: 'The US raises a 4.7 million-man army, mostly through conscription. The Espionage Act (1917) and Sedition Act (1918) criminalize dissent. Socialist Eugene Debs is imprisoned for an anti-war speech. Thousands are arrested for opposing the war. German-Americans face persecution. Sauerkraut is renamed "liberty cabbage." The first American surveillance state is born.' },
  { year: 'Spring 1918', title: 'German Spring Offensive', desc: 'Germany launches massive offensives on the Western Front, hoping to win before American troops arrive in force. The attacks gain more ground than any since 1914 but fail to achieve a breakthrough. The German army is exhausting itself.' },
  { year: 'Jun 1918', title: 'Belleau Wood', desc: 'US Marines fight their first major engagement at Belleau Wood, suffering 9,777 casualties in three weeks — a 55% casualty rate. The battle establishes the Marine Corps\' fierce reputation but the cost is horrific. American tactics are crude — frontal assaults against machine guns, just like the Europeans have been doing for four years.' },
  { year: 'Sep–Nov 1918', title: 'Meuse-Argonne Offensive', desc: 'The largest American military operation in history: 1.2 million US troops attack along the Meuse River and through the Argonne Forest. It lasts 47 days. 26,277 Americans die — the deadliest battle in US history. The offensive helps break the German line and end the war.' },
  { year: 'Nov 11, 1918', title: 'Armistice', desc: 'The armistice takes effect at 11:00 AM on November 11. But commanders know the ceasefire is coming for hours — and some order attacks anyway. An estimated 2,738 men die on the final day. The last American killed, Private Henry Gunther, dies at 10:59 AM — one minute before the war ends.' },
  { year: 'Jun 1919', title: 'Treaty of Versailles', desc: 'Wilson\'s idealistic Fourteen Points are gutted by Britain and France, who want revenge and reparations. Germany is humiliated — war guilt clause, massive reparations, territorial losses. Wilson gets his League of Nations but the Senate refuses to ratify. The treaty satisfies no one and creates the conditions for World War II.' },
  { year: '1919–20', title: 'The Aftermath', desc: 'The Spanish Flu pandemic, worsened by wartime conditions, kills 675,000 Americans. Race riots sweep US cities as Black soldiers return expecting equality. The Red Scare and Palmer Raids target radicals, immigrants, and labor organizers. Wilson suffers a debilitating stroke. America retreats into isolationism — temporarily.' },
]

const keyFigures = [
  { name: 'Woodrow Wilson', role: 'US President', desc: 'Won re-election promising neutrality, then led the country into war. His idealistic Fourteen Points were rejected by European allies. The League of Nations — his signature achievement — was rejected by his own Senate. His wartime repression of dissent set dangerous precedents.' },
  { name: 'John J. Pershing', role: 'Commander, AEF', desc: 'Insisted on keeping American forces as an independent army rather than feeding them piecemeal into Allied units. Built the AEF from 14,000 regulars to a 2 million-man force. His tactical approach — emphasizing "open warfare" over trench tactics — led to unnecessarily high casualties.' },
  { name: 'Eugene Debs', role: 'Anti-War Socialist', desc: 'Imprisoned for speaking against the war and the draft. Ran for president from prison in 1920, receiving nearly 1 million votes. His imprisonment exemplified the Wilson administration\'s authoritarian wartime repression of civil liberties.' },
  { name: 'J.P. Morgan', role: 'Banker', desc: 'Morgan bank was the primary financial agent for Britain and France, arranging $2.3 billion in loans. Had an enormous financial stake in Allied victory. Senator Norris was not wrong: banking interests were a major driver of American intervention.' },
  { name: 'George Creel', role: 'Committee on Public Information', desc: 'Ran the government\'s propaganda machine. The CPI used posters, films, speakers (the "Four Minute Men"), and press manipulation to build war fervor and demonize Germans. Created the template for modern American war propaganda.' },
]

const faqs = [
  {
    q: 'How much did World War 1 cost the United States?',
    a: 'The US spent approximately $334 billion in inflation-adjusted 2023 dollars on World War I, including $257 billion in direct military costs and $48 billion in loans to allies (most never repaid). The war also created long-term obligations for veterans\' care. The national debt rose from $1.2 billion in 1916 to $25.5 billion by 1919.',
  },
  {
    q: 'How many Americans died in World War 1?',
    a: '116,516 American military personnel died during WWI — 53,402 in combat and 63,114 from disease (primarily the Spanish Flu). An additional 204,002 were wounded. American forces were only in heavy combat for about 6 months (June–November 1918), making the daily death rate extraordinarily high.',
  },
  {
    q: 'Why did the US enter World War 1?',
    a: 'The official reasons were Germany\'s unrestricted submarine warfare and the Zimmermann Telegram. But deeper factors drove intervention: American banks had lent $2.3 billion to the Allies and stood to lose everything if Germany won. American industry was profiting enormously from Allied war orders. Wilson\'s own ideological commitment to "making the world safe for democracy" also played a role. Critics like Senator Norris argued — with considerable justification — that the US went to war to protect financial interests.',
  },
  {
    q: 'Did World War 1 lead to World War 2?',
    a: 'Yes, directly. The Treaty of Versailles humiliated Germany with war guilt, massive reparations, and territorial losses. The resulting economic devastation and national resentment created the conditions for Hitler\'s rise. Wilson\'s intervention prolonged the war and ensured a punitive peace. Had the US stayed neutral, the war might have ended in a negotiated peace without the conditions that produced Nazism.',
  },
  {
    q: 'Was US involvement in WW1 necessary?',
    a: 'This is one of the great counterfactual debates. Germany posed no direct threat to the United States. The US could have remained neutral, as it had for three years. Without American intervention, the war likely would have ended in a negotiated peace or stalemate — without the punitive Treaty of Versailles that created the conditions for World War II. American intervention transformed a European war into a world war and set the precedent for global military interventionism that continues today.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function WorldWar1Page() {
  const totalCost = costBreakdown.reduce((s, r) => s + r.amount, 0)

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'World War I' }]} />
        <ShareButtons title="World War I — $334B, 116,516 US Dead" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            World War I
          </h1>
          <p className="text-lg text-stone-500 mb-2">US involvement: April 1917 – November 1918</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            The <strong className="text-[#991b1b]">&ldquo;War to End All Wars&rdquo;</strong> cost the US{' '}
            <strong className="text-[#991b1b]">$334 billion</strong> and{' '}
            <strong className="text-[#991b1b]">116,516 lives</strong>. Wilson promised to make the world
            safe for democracy. Instead, he helped create the conditions for fascism, Nazism,
            and an even deadlier sequel <strong className="text-[#991b1b]">20 years later</strong>.
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

        {/* Why */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Why Did America Fight?
          </h2>
          <p className="text-stone-700 mb-4">
            World War I was Europe&apos;s war — born from imperial rivalries, entangling alliances, and the
            assassination of an Austrian archduke in a Balkan city most Americans had never heard of.
            Germany posed no direct threat to the United States. No German army was going to cross the Atlantic.
          </p>
          <p className="text-stone-700 mb-4">
            So why did 116,516 Americans die in the trenches of France? The official answer — unrestricted
            submarine warfare and the Zimmermann Telegram — tells only part of the story. By 1917, American
            banks had lent $2.3 billion to the Allies. American industry was making enormous profits from
            Allied war orders. A German victory would mean financial catastrophe for Wall Street.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-2">
              &ldquo;We are going into war upon the command of gold... I feel that we are about to put the dollar
              sign upon the American flag.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— Senator George Norris, April 4, 1917</p>
          </div>
          <p className="text-stone-700">
            Wilson wrapped the intervention in idealistic language — &ldquo;making the world safe for democracy&rdquo; —
            but the practical effect was to transform the United States from a continental republic into a
            global military power. The American tradition of non-intervention, maintained since Washington&apos;s
            Farewell Address, died in the trenches of the Western Front. It has never recovered.
          </p>
        </section>

        {/* Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Cost
          </h2>
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
                  <td className="py-2 text-stone-900">Total</td>
                  <td className="py-2 text-right font-mono text-[#991b1b]">${totalCost}B</td>
                  <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">2023 inflation-adjusted dollars</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-600 text-sm">
            The national debt exploded from $1.2 billion in 1916 to $25.5 billion by 1919 — a 20x increase.
            To finance the war, the government sold Liberty Bonds, raised income taxes to 77% on top earners,
            and created the modern federal tax apparatus. The wartime expansion of government power never fully reversed.
          </p>
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
                <li><strong className="text-[#991b1b]">116,516</strong> US military deaths</li>
                <li><strong className="text-[#991b1b]">53,402</strong> killed in combat</li>
                <li><strong className="text-[#991b1b]">63,114</strong> died of disease (mostly flu)</li>
                <li><strong className="text-[#991b1b]">204,002</strong> wounded</li>
                <li><strong className="text-[#991b1b]">4,526</strong> prisoners of war</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">Global Losses</h3>
              <ul className="text-sm text-stone-600 space-y-2">
                <li><strong className="text-[#991b1b]">~10 million</strong> military dead (all nations)</li>
                <li><strong className="text-[#991b1b]">~10 million</strong> civilian dead</li>
                <li><strong className="text-[#991b1b]">~21 million</strong> military wounded</li>
                <li><strong className="text-[#991b1b]">~50 million</strong> Spanish Flu deaths (1918-19)</li>
                <li><strong className="text-[#991b1b]">4 empires</strong> destroyed</li>
              </ul>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-stone-800 mb-3">Military Deaths by Major Nation</h3>
          <CasualtiesByNation data={casualtiesByNation} />
          <h3 className="text-lg font-semibold text-stone-800 mb-3 mt-8">US Monthly Casualties</h3>
          <USMonthlyCasualties data={usMonthlyCasualties} />
          <p className="text-sm text-stone-500 mt-3">
            Note the sharp spike: most US casualties occurred in the final 5 months of the war.
            26,277 Americans died in the Meuse-Argonne offensive alone — in 47 days.
          </p>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline
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

        {/* Wartime Repression */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The War on Dissent
          </h2>
          <p className="text-stone-700 mb-4">
            Wilson&apos;s wartime government conducted the most severe crackdown on civil liberties in American history
            since the Alien and Sedition Acts of 1798. The Espionage Act of 1917 and Sedition Act of 1918
            made it a crime to criticize the government, the military, or the war.
          </p>
          <p className="text-stone-700 mb-4">
            Over 2,000 people were prosecuted. Eugene Debs, the Socialist Party presidential candidate, was
            sentenced to 10 years in prison for an anti-war speech. The Postmaster General revoked mailing
            privileges for publications opposing the war. German-language newspapers were shut down.
            German-Americans faced widespread persecution — some were tarred and feathered.
          </p>
          <p className="text-stone-700">
            The surveillance apparatus built during WWI — the precursor to the FBI, the precedent of
            government monitoring of political dissent — never fully disappeared. Each subsequent war
            would expand it further.
          </p>
        </section>

        {/* Key Figures */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Key Figures</h2>
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

        {/* Legacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy: The War That Made the 20th Century
          </h2>
          <div className="space-y-4">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The Treaty of Versailles → World War II</h3>
              <p className="text-sm text-stone-600">
                The punitive peace imposed on Germany — massive reparations, war guilt, territorial losses —
                created the economic devastation and national humiliation that fueled Hitler&apos;s rise.
                American intervention ensured Allied victory and a punitive peace. Without US involvement,
                the war likely ends in a negotiated settlement without the conditions for Nazism.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The End of Non-Interventionism</h3>
              <p className="text-sm text-stone-600">
                For 140 years, the United States followed Washington&apos;s advice to avoid entangling alliances
                and foreign wars. WWI ended that tradition. Despite a brief return to &ldquo;isolationism&rdquo; in the 1920s-30s,
                the precedent was set: America would be a global military power, intervening in conflicts worldwide.
                Every war since has followed from this fundamental shift.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The Birth of the Warfare State</h3>
              <p className="text-sm text-stone-600">
                WWI created the modern American state: federal income tax expanded dramatically, government
                debt exploded, conscription became normalized, the intelligence/surveillance apparatus was born,
                and dissent was criminalized during wartime. The government grew by 300% and never fully shrank back.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The Middle East Time Bomb</h3>
              <p className="text-sm text-stone-600">
                The collapse of the Ottoman Empire led Britain and France to carve up the Middle East
                (Sykes-Picot Agreement), drawing arbitrary borders that ignored ethnic and religious realities.
                These borders — and the resentments they created — are the root cause of conflicts from Iraq
                to Syria to Palestine that continue a century later. American intervention enabled this carve-up.
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
              { href: '/world-war-2', label: 'World War II — The Sequel' },
              { href: '/how-much-did-ww2-cost', label: 'How Much Did WWII Cost?' },
              { href: '/cost-of-war', label: 'Total Cost of All US Wars' },
              { href: '/analysis/lies-that-started-wars', label: 'Lies That Started Wars' },
              { href: '/analysis/war-and-civil-liberties', label: 'War and Civil Liberties' },
              { href: '/us-wars-list', label: 'Complete List of US Wars' },
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
            <li>Department of Defense — World War I Casualty Statistics</li>
            <li>National Archives — Records of the American Expeditionary Forces</li>
            <li>Adam Tooze — <em>The Deluge: The Great War, America and the Remaking of the Global Order</em></li>
            <li>Howard Zinn — <em>A People&apos;s History of the United States</em>, Chapter 14</li>
            <li>U.S. Treasury Department — Historical Debt Outstanding</li>
          </ul>
        </section>

        <BackToTop />
      </div>
    </main>
  )
}
