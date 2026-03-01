import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'From 9/11 to Forever War — How 19 Hijackers Changed America',
  description: '2,977 deaths on 9/11 → $8 trillion spent, 900,000+ killed, 38 million displaced, civil liberties gutted. The 60-word AUMF authorized wars in 22 countries for 25 years.',
  openGraph: {
    title: 'From 9/11 to Forever War',
    description: '19 hijackers. $8 trillion. 900,000 dead. 38 million displaced. Bin Laden\'s strategy worked.',
    url: 'https://warcosts.org/analysis/911-to-forever-war',
    type: 'article',
  },
}

const aumfCountries = [
  'Afghanistan', 'Iraq', 'Syria', 'Yemen', 'Somalia', 'Libya', 'Pakistan',
  'Niger', 'Cameroon', 'Uganda', 'Mali', 'Kenya', 'Tunisia', 'Jordan',
  'Lebanon', 'Turkey', 'Chad', 'Burkina Faso', 'Mauritania', 'Eritrea',
  'Philippines', 'Georgia',
]

const securityState = [
  { name: 'USA PATRIOT Act (Oct 2001)', detail: 'Warrantless surveillance of Americans. National Security Letters. "Sneak and peek" searches. Library records access. Passed 357-66 in the House — most members admitted they hadn\'t read it. 342 pages, introduced and passed in 6 weeks.' },
  { name: 'Department of Homeland Security (2002)', detail: 'Created the largest government reorganization since 1947. Merged 22 agencies. 240,000 employees. Annual budget: $60B+. Created TSA, ICE, CBP. A permanent bureaucracy born from temporary fear.' },
  { name: 'TSA (Nov 2001)', detail: '60,000+ employees. $11B+ annual budget. Has never stopped a single terrorist attack (GAO found 95% failure rate in testing). But every American takes off their shoes, throws away water bottles, and submits to body scans — forever.' },
  { name: 'NSA Mass Surveillance (2001–present)', detail: 'PRISM: bulk collection of emails, chats, video calls from Google, Apple, Facebook, Microsoft. Section 215: metadata of every phone call made in America. Revealed by Snowden in 2013. Still largely operational.' },
  { name: 'FISA Court (expanded 2001)', detail: 'Secret court approving secret warrants based on secret evidence. Approved 99.97% of government requests from 1979-2019. Rubber stamp with the veneer of judicial review.' },
  { name: 'Guantanamo Bay (Jan 2002)', detail: '780 men detained. At peak: 684 held simultaneously. Many held for years without charges. Enhanced interrogation (torture). Military tribunals. Still open in 2026 with ~30 detainees — some held for 24 years without trial.' },
  { name: 'CIA Black Sites (2002–2009)', detail: 'Secret prisons in Poland, Romania, Thailand, Afghanistan, Lithuania. Waterboarding, sleep deprivation, rectal feeding, mock executions. Senate Torture Report (2014) found CIA misrepresented effectiveness. No CIA officer prosecuted.' },
  { name: 'No-Fly List', detail: 'Over 1 million names. No due process to get off the list. Children flagged. US citizens stranded abroad. Senator Ted Kennedy was on it. The list exemplifies the security state: vast, unaccountable, and ineffective.' },
]

const costBreakdown = [
  { category: 'Direct war spending', amount: 2300000000000, note: 'Afghanistan, Iraq, Syria/ISIS operations' },
  { category: 'Homeland Security spending (cumulative)', amount: 1400000000000, note: 'DHS, TSA, border security post-9/11' },
  { category: 'Veterans care (obligations to date)', amount: 2500000000000, note: 'Lifelong medical care, disability, PTSD treatment' },
  { category: 'Interest on war borrowing', amount: 1100000000000, note: 'Wars funded entirely by debt, not taxes' },
  { category: 'Pentagon base budget increases', amount: 800000000000, note: 'Above pre-9/11 baseline' },
  { category: 'Intelligence community expansion', amount: 900000000000, note: '18 agencies, $90B+/year (up from $30B pre-9/11)' },
]

export default function NineElevenForeverWarPage() {
  const stats = loadData('stats.json')

  const totalCost = costBreakdown.reduce((sum, c) => sum + c.amount, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: '9/11 to Forever War' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          From 9/11 to Forever
        </h1>
        <p className="text-xl text-stone-300 mb-4">How 19 Hijackers Changed America</p>
        <p className="text-stone-400 text-lg">
          On September 11, 2001, 19 men armed with box cutters killed 2,977 people. In response,
          the United States spent {fmtMoney(stats.warOnTerrorCost)} on wars across {stats.counterterrorCountries} countries,
          killed {(stats.warOnTerrorDeaths / 1000).toFixed(0)}K+ people, displaced {(stats.warOnTerrorDisplaced / 1000000).toFixed(0)} million,
          built a surveillance state that monitors every American, tortured prisoners in secret prisons,
          and shredded constitutional protections that had stood for 225 years. Twenty-five years later,
          the wars continue, the surveillance continues, and the 60-word authorization that started it all
          has never been repealed. Osama bin Laden is dead. His strategy worked.
        </p>
      </div>

      <ShareButtons title="From 9/11 to Forever War: How 19 Hijackers Changed America" />

      {/* AI Overview */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">🤖 AI Overview</h2>
        <p className="text-stone-300 mb-3">
          The US response to 9/11 exceeded the original attack in every measurable dimension by orders
          of magnitude. This analysis tracks the full cost — financial, human, constitutional, and strategic.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">2,977</p>
            <p className="text-xs text-stone-400">Killed on 9/11</p>
          </div>
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmtMoney(stats.warOnTerrorCost)}</p>
            <p className="text-xs text-stone-400">Spent in response</p>
          </div>
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">900K+</p>
            <p className="text-xs text-stone-400">Killed in response</p>
          </div>
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">38M</p>
            <p className="text-xs text-stone-400">Displaced</p>
          </div>
        </div>
      </div>

      {/* The Ratio */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Ratio</h2>
        <p className="text-stone-300 mb-6">
          The disproportion between the attack and the response is almost incomprehensible:
        </p>
        <div className="space-y-4">
          {[
            { label: 'Deaths on 9/11', val: '2,977', response: 'Deaths in response', rVal: '900,000+', ratio: '302:1' },
            { label: 'Cost of 9/11 attack', val: '~$500,000', response: 'Cost of response', rVal: '$8,000,000,000,000', ratio: '16,000,000:1' },
            { label: 'Hijackers', val: '19', response: 'Countries bombed/invaded', rVal: '22+', ratio: 'More countries than attackers' },
            { label: 'Duration of attack', val: '~2 hours', response: 'Duration of response', rVal: '25+ years (ongoing)', ratio: '109,500:1 (hours)' },
            { label: 'Displaced by 9/11', val: '~100,000 (Lower Manhattan)', response: 'Displaced by response', rVal: '38,000,000', ratio: '380:1' },
          ].map(r => (
            <div key={r.label} className="grid md:grid-cols-3 gap-3 border-b border-stone-700 pb-3">
              <div>
                <p className="text-xs text-stone-500 uppercase">{r.label}</p>
                <p className="text-lg font-bold text-stone-300">{r.val}</p>
              </div>
              <div>
                <p className="text-xs text-red-400 uppercase">{r.response}</p>
                <p className="text-lg font-bold text-red-400">{r.rVal}</p>
              </div>
              <div className="flex items-center">
                <span className="text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded">{r.ratio}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The 60 Words */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The 60 Words That Authorized Forever War</h2>
        <p className="text-stone-300 mb-4">
          On September 14, 2001 — three days after the attacks — Congress passed the Authorization for
          Use of Military Force (AUMF). It contains 60 words that have been used to justify military
          operations in at least 22 countries for 25 years:
        </p>
        <div className="bg-stone-800 rounded-lg p-6 mb-4 border border-stone-700">
          <p className="text-white italic font-serif text-lg leading-relaxed">
            &ldquo;That the President is authorized to use all necessary and appropriate force against
            those nations, organizations, or persons he determines planned, authorized, committed,
            or aided the terrorist attacks that occurred on September 11, 2001, or harbored such
            organizations or persons, in order to prevent any future acts of international terrorism
            against the United States by such nations, organizations or persons.&rdquo;
          </p>
          <p className="text-stone-500 text-sm mt-3">— Public Law 107-40, September 18, 2001</p>
        </div>
        <p className="text-stone-300 mb-4">
          The vote: <strong>Senate 98-0. House 420-1.</strong> The one dissent came from
          <strong> Representative Barbara Lee</strong> of California, who warned:
        </p>
        <blockquote className="border-l-4 border-red-600 pl-4 text-stone-300 italic mb-4">
          &ldquo;Let us not become the evil that we deplore. As we act, let us not become the evil
          that we deplore.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Barbara Lee, September 14, 2001</span>
        </blockquote>
        <p className="text-stone-300 mb-4">
          She received death threats. She needed bodyguards. She was called a traitor. Twenty-five
          years later, she has been proven right about everything.
        </p>

        <h3 className="text-white font-semibold mt-6 mb-3">The 22 Countries</h3>
        <p className="text-stone-400 text-sm mb-3">
          The 2001 AUMF — written to target the perpetrators of 9/11 — has been used to justify
          military operations in all of these countries:
        </p>
        <div className="flex flex-wrap gap-2">
          {aumfCountries.map(c => (
            <span key={c} className="text-xs bg-red-900/40 text-red-300 px-2 py-1 rounded">{c}</span>
          ))}
        </div>
        <p className="text-stone-500 text-sm mt-3">
          Most of these countries had nothing to do with 9/11. Al-Qaeda had no presence in Iraq, Niger,
          Cameroon, or the Philippines on September 11, 2001. The AUMF became a blank check.
        </p>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Where the $8 Trillion Went</h2>
        <p className="text-stone-300 mb-4">
          The Costs of War Project at Brown University has tracked every dollar:
        </p>
        <div className="space-y-3">
          {costBreakdown.map(c => (
            <div key={c.category} className="flex items-center gap-4 border-b border-stone-700 pb-2">
              <span className="text-lg font-bold text-red-400 font-[family-name:var(--font-heading)] w-24 shrink-0 text-right">
                {fmtMoney(c.amount)}
              </span>
              <div>
                <p className="text-white font-semibold text-sm">{c.category}</p>
                <p className="text-stone-400 text-xs">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-stone-700 flex items-center gap-4">
          <span className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)] w-24 shrink-0 text-right">
            {fmtMoney(totalCost)}
          </span>
          <p className="text-white font-bold">Total estimated cost of the post-9/11 response</p>
        </div>
        <p className="text-stone-400 text-sm mt-4">
          None of this was funded by taxes. It was all borrowed. American taxpayers will be paying
          interest on 9/11 response debt for decades — long after the last veteran has died.
        </p>
      </div>

      {/* The Security State */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Permanent Security State</h2>
        <p className="text-stone-300 mb-4">
          9/11 didn&apos;t just launch wars abroad. It built a surveillance and security apparatus at home
          that has never been dismantled — and was never intended to be:
        </p>
        <div className="space-y-4">
          {securityState.map(s => (
            <div key={s.name} className="bg-stone-800/50 rounded-lg p-4">
              <h3 className="text-red-400 font-semibold text-sm mb-1">{s.name}</h3>
              <p className="text-sm text-stone-300">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bin Laden's Strategy */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Bin Laden&apos;s Strategy: It Worked</h2>
        <p className="text-stone-300 mb-4">
          Osama bin Laden was explicit about his strategy. He didn&apos;t expect 19 men to defeat the
          United States military. He expected America to defeat itself through overreaction:
        </p>
        <blockquote className="border-l-4 border-red-600 pl-4 text-stone-300 italic mb-4">
          &ldquo;All that we have to do is to send two mujahidin to the furthest point east to raise
          a piece of cloth on which is written al-Qaeda, in order to make the generals race there to
          cause America to suffer human, economic, and political losses without their achieving for
          it anything of note...so we are continuing this policy in bleeding America to the point
          of bankruptcy.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Osama bin Laden, 2004 video message</span>
        </blockquote>
        <p className="text-stone-300 mb-4">
          His explicit model was the Soviet-Afghan War. The mujahideen bled the Soviet Union financially
          until it collapsed. Bin Laden believed the same strategy would work against America. The
          numbers suggest he was right:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-white font-semibold mb-2">What Bin Laden Wanted</h3>
            <ul className="space-y-1 text-sm text-stone-300">
              <li>✓ Provoke a massive military overreaction</li>
              <li>✓ Bleed America financially</li>
              <li>✓ Radicalize Muslims through civilian casualties</li>
              <li>✓ Force America to compromise its own values</li>
              <li>✓ Expand the conflict across the Muslim world</li>
              <li>✓ Create a permanent state of war</li>
            </ul>
          </div>
          <div className="bg-red-950/30 border border-red-900/30 rounded p-4">
            <h3 className="text-red-400 font-semibold mb-2">What America Delivered</h3>
            <ul className="space-y-1 text-sm text-stone-300">
              <li>✓ Invaded 2 countries, bombed 20 more</li>
              <li>✓ Spent $8 trillion (all borrowed)</li>
              <li>✓ Killed 900,000+ (mostly Muslim civilians)</li>
              <li>✓ Tortured prisoners, mass surveillance</li>
              <li>✓ Operations in 22 countries across 3 continents</li>
              <li>✓ 25 years and counting, no end in sight</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What Could We Have Bought */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">$8 Trillion Could Have Bought</h2>
        <p className="text-stone-300 mb-4">
          The opportunity cost of the War on Terror:
        </p>
        <div className="space-y-2">
          {[
            { item: 'Free public college for every American for 50 years', cost: '$3.5T' },
            { item: 'Universal healthcare transition', cost: '$3T' },
            { item: 'Eliminate all student loan debt (2x over)', cost: '$3.4T' },
            { item: 'Rebuild every bridge in America (10x over)', cost: '$2.5T' },
            { item: 'End homelessness permanently', cost: '$400B' },
            { item: 'Clean water for every human on Earth', cost: '$200B' },
            { item: 'Convert entire US power grid to renewables', cost: '$4.5T' },
          ].map(i => (
            <div key={i.item} className="flex items-center gap-4 border-b border-stone-700 pb-2">
              <span className="text-sm font-mono text-red-400 w-16 shrink-0 text-right">{i.cost}</span>
              <p className="text-stone-300 text-sm">{i.item}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4">
          Instead, the money went to bombs, bases, contractors, and interest payments. No infrastructure.
          No education. No healthcare. Just war.
        </p>
      </div>

      {/* The Constitutional Crisis */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Constitutional Crisis Nobody Talks About</h2>

        <div className="prose max-w-none">
          <p className="text-stone-300 mb-4">
            The Founders placed the war power with Congress for a reason. They had lived under a king
            who could send men to die on a whim. The Constitution&apos;s design was deliberate: the
            people who declare war (Congress) would be the people who face voters. After 9/11, Congress
            gave that power away — and has never taken it back.
          </p>
        </div>

        <blockquote className="border-l-4 border-red-600 pl-4 text-stone-300 italic mb-4">
          &ldquo;Of all the enemies to public liberty, war is, perhaps, the most to be dreaded,
          because it comprises and develops the germ of every other. War is the parent of armies;
          from these proceed debts and taxes; and armies, and debts, and taxes are the known
          instruments for bringing the many under the domination of the few.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— James Madison, 1795</span>
        </blockquote>

        <p className="text-stone-300">
          Madison could not have described the post-9/11 era more precisely if he had been writing
          in 2026. Armies. Debts. Taxes. The domination of the few. The $8 trillion flowed to defense
          contractors, intelligence agencies, and private military companies — not to the American people.
        </p>
      </div>

      {/* Related */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { href: '/analysis/war-on-terror', label: 'The War on Terror — Full Accounting' },
            { href: '/analysis/blowback', label: 'Blowback — How Interventions Create Enemies' },
            { href: '/analysis/undeclared-wars', label: 'America\'s Undeclared Wars' },
            { href: '/analysis/surveillance-state', label: 'The Surveillance State' },
            { href: '/analysis/what-could-we-buy', label: 'What Could We Buy Instead?' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-red-400 hover:text-red-300 text-sm hover:underline">
              → {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <p className="text-stone-300 text-lg mb-4">
          Nineteen men with box cutters didn&apos;t destroy America. America&apos;s response did.
          The hijackers killed 2,977 people. The response killed 900,000+. The hijackers caused
          billions in property damage. The response cost $8 trillion. The hijackers wanted America
          to abandon its principles, bankrupt itself through overreaction, and wage war across the
          Muslim world. America did all three — voluntarily, enthusiastically, and for 25 years.
        </p>
        <blockquote className="border-l-4 border-red-500 pl-4 text-stone-400 italic">
          &ldquo;They that can give up essential liberty to obtain a little temporary safety
          deserve neither liberty nor safety.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Benjamin Franklin</span>
        </blockquote>
      </div>

      <BackToTop />
    </div>
  )
}
