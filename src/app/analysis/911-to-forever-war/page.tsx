import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleSchema from '@/components/ArticleSchema'

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
      <ArticleSchema title="From 9/11 to Forever War — How 19 Hijackers Changed America" description="2,977 deaths on 9/11 → $8 trillion spent, 900,000+ killed, 38 million displaced, civil liberties gutted. The 60-word AUMF authorized wars in 22 countries for 25" url="/analysis/911-to-forever-war" />
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
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
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

        {/* The Legal Interpretation Expansion */}
        <div className="bg-slate-800 rounded-lg p-4 mb-4">
          <h4 className="text-white font-semibold mb-2">How 60 Words Became Infinite War</h4>
          <p className="text-stone-300 text-sm mb-3">
            The AUMF's language is deliberately vague. Key phrases like "associated forces" and "appropriate force" 
            have been stretched far beyond their original meaning:
          </p>
          <div className="space-y-2 text-sm">
            <div className="border-b border-stone-600 pb-2">
              <span className="text-red-400 font-semibold">"Those nations, organizations, or persons"</span>
              <p className="text-stone-300">Originally: Al-Qaeda and Taliban. Expanded to: ISIS, Al-Shabaab, Boko Haram, 
              any group claiming affiliation, "associated forces," and entire nation-states accused of harboring any of the above.</p>
            </div>
            <div className="border-b border-stone-600 pb-2">
              <span className="text-red-400 font-semibold">"All necessary and appropriate force"</span>
              <p className="text-stone-300">Originally: Military action against 9/11 perpetrators. Expanded to: Drone assassinations, 
              regime change, torture, indefinite detention, mass surveillance of US citizens.</p>
            </div>
            <div>
              <span className="text-red-400 font-semibold">"To prevent any future acts"</span>
              <p className="text-stone-300">Originally: Defensive measure. Expanded to: Preemptive war doctrine, attacking 
              countries that "might" harbor terrorists, permanent military presence worldwide.</p>
            </div>
          </div>
        </div>

        <h3 className="text-white font-semibold mt-6 mb-3">The 22 Countries: Detailed Operations</h3>
        <p className="text-stone-400 text-sm mb-3">
          The 2001 AUMF — written to target the perpetrators of 9/11 — has been used to justify
          military operations in all of these countries. Here's what happened in each:
        </p>

        <div className="grid md:grid-cols-1 gap-3 mb-4">
          {/* Major Operations */}
          <div className="space-y-3">
            <h4 className="text-yellow-400 font-semibold text-sm">MAJOR WARS & INVASIONS</h4>
            <div className="bg-red-900/30 border border-red-800 rounded p-3">
              <div className="font-semibold text-red-300">🇦🇫 Afghanistan (2001-2021)</div>
              <div className="text-xs text-stone-300 mt-1">170,000+ killed • $2.3T spent • 20-year occupation • Taliban back in power</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded p-3">
              <div className="font-semibold text-red-300">🇮🇶 Iraq (2003-2011, 2014-present)</div>
              <div className="text-xs text-stone-300 mt-1">280,000+ killed • $1.9T spent • Country destabilized • ISIS emerged from chaos</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded p-3">
              <div className="font-semibold text-red-300">🇸🇾 Syria (2014-present)</div>
              <div className="text-xs text-stone-300 mt-1">350,000+ killed • $50B+ spent • Proxy war with Russia • Country partitioned</div>
            </div>

            <h4 className="text-yellow-400 font-semibold text-sm mt-4">DRONE WARS & STRIKES</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="bg-orange-900/30 border border-orange-800 rounded p-2">
                <div className="font-semibold text-orange-300 text-sm">🇵🇰 Pakistan</div>
                <div className="text-xs text-stone-300">430+ drone strikes • 4,000+ killed • No declaration of war</div>
              </div>
              <div className="bg-orange-900/30 border border-orange-800 rounded p-2">
                <div className="font-semibold text-orange-300 text-sm">🇾🇪 Yemen</div>
                <div className="text-xs text-stone-300">200+ drone strikes • Saudi proxy war • Humanitarian crisis</div>
              </div>
              <div className="bg-orange-900/30 border border-orange-800 rounded p-2">
                <div className="font-semibold text-orange-300 text-sm">🇸🇴 Somalia</div>
                <div className="text-xs text-stone-300">260+ airstrikes • Al-Shabaab targeted • Ongoing operations</div>
              </div>
              <div className="bg-orange-900/30 border border-orange-800 rounded p-2">
                <div className="font-semibold text-orange-300 text-sm">🇱🇾 Libya</div>
                <div className="text-xs text-stone-300">NATO bombing campaign • Gaddafi overthrown • Failed state</div>
              </div>
            </div>

            <h4 className="text-yellow-400 font-semibold text-sm mt-4">SPECIAL OPERATIONS & "TRAINING"</h4>
            <div className="grid md:grid-cols-3 gap-2">
              {['Niger', 'Mali', 'Chad', 'Cameroon', 'Uganda', 'Kenya', 'Tunisia', 'Mauritania', 'Burkina Faso', 'Eritrea', 'Philippines', 'Georgia', 'Jordan', 'Lebanon', 'Turkey'].map(country => (
                <div key={country} className="bg-stone-700/50 border border-stone-600 rounded p-2">
                  <div className="font-semibold text-stone-300 text-sm">{country}</div>
                  <div className="text-xs text-stone-400">Special ops • Training missions • Drone bases</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
          <p className="text-amber-900 text-sm font-semibold mb-2">The Connection Problem</p>
          <p className="text-amber-800 text-sm">
            Of these 22 countries, only 2 (Afghanistan and Pakistan) had any meaningful connection to the 9/11 attacks. 
            Iraq had no Al-Qaeda presence until after the US invasion. Most African operations target groups that didn't 
            exist on 9/11. The AUMF has become a general authorization for global military action.
          </p>
        </div>
      </div>

      {/* The Timeline of Escalation */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Timeline: How America Changed</h2>
        <p className="text-stone-300 mb-4">
          The transformation didn't happen overnight. Here's how 9/11 reshaped America year by year:
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-red-600 pl-4">
            <div className="font-semibold text-white">2001: The Foundation</div>
            <ul className="text-stone-300 text-sm space-y-1 mt-1">
              <li>• Sept 14: AUMF passed (420-1 in House, 98-0 in Senate)</li>
              <li>• Oct 7: Afghanistan invasion begins</li>
              <li>• Oct 26: USA PATRIOT Act signed (never read by most members)</li>
              <li>• Nov 19: TSA created (airport security nationalized)</li>
              <li>• Dec 22: "Shoe bomber" → everyone removes shoes forever</li>
            </ul>
          </div>
          <div className="border-l-4 border-orange-600 pl-4">
            <div className="font-semibold text-white">2002-2003: The Expansion</div>
            <ul className="text-stone-300 text-sm space-y-1 mt-1">
              <li>• Jan 2002: Guantanamo Bay opens • "Enemy combatants" doctrine</li>
              <li>• Nov 2002: Department of Homeland Security created (240,000 employees)</li>
              <li>• Jan 2003: "Axis of Evil" doctrine • Iraq has "WMDs"</li>
              <li>• Mar 2003: Iraq invasion • No connection to 9/11 established</li>
              <li>• Dec 2003: Libya gives up nuclear program (fear of US invasion)</li>
            </ul>
          </div>
          <div className="border-l-4 border-yellow-600 pl-4">
            <div className="font-semibold text-white">2004-2008: The Normalization</div>
            <ul className="text-stone-300 text-sm space-y-1 mt-1">
              <li>• 2004: Abu Ghraib torture photos revealed • No senior officials prosecuted</li>
              <li>• 2005: PATRIOT Act renewed • Expanded surveillance powers</li>
              <li>• 2006: Iraq civil war peaks • 3,000+ US casualties in single year</li>
              <li>• 2008: Obama elected promising to end wars • Expands drone program instead</li>
            </ul>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <div className="font-semibold text-white">2009-2016: The Institutionalization</div>
            <ul className="text-stone-300 text-sm space-y-1 mt-1">
              <li>• 2011: Bin Laden killed • Wars continue ("associated forces")</li>
              <li>• 2011: Libya bombing • No congressional approval</li>
              <li>• 2013: Snowden reveals NSA mass surveillance • No major reforms</li>
              <li>• 2014: ISIS emergence • New justification for endless war</li>
              <li>• 2016: Obama admits he's a "war president" • 26,000+ bombs dropped in final year</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <div className="font-semibold text-white">2017-2021: The Permanence</div>
            <ul className="text-stone-300 text-sm space-y-1 mt-1">
              <li>• 2017: Trump expands drone program • Removes transparency requirements</li>
              <li>• 2019: 18th anniversary of AUMF • Still no expiration date</li>
              <li>• 2020: Soleimani assassination • Nearly triggers war with Iran</li>
              <li>• 2021: Afghanistan withdrawal • Taliban retakes country in weeks</li>
            </ul>
          </div>
          <div className="border-l-4 border-purple-600 pl-4">
            <div className="font-semibold text-white">2022-2026: The New Forever Wars</div>
            <ul className="text-stone-300 text-sm space-y-1 mt-1">
              <li>• 2022: Ukraine proxy war begins • AUMF cited for "global terrorism" threat</li>
              <li>• 2024: Middle East tensions escalate • Iran nuclear program advances</li>
              <li>• 2026: Iran war begins • Same patterns, different country</li>
              <li>• Present: AUMF still active • 25 years and counting</li>
            </ul>
          </div>
        </div>
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
          that has never been dismantled — and was never intended to be temporary. Every "emergency" power 
          became permanent:
        </p>
        <div className="space-y-4">
          {securityState.map(s => (
            <div key={s.name} className="bg-slate-800 rounded-lg p-4">
              <h3 className="text-red-400 font-semibold text-sm mb-1">{s.name}</h3>
              <p className="text-sm text-stone-300">{s.detail}</p>
            </div>
          ))}
        </div>

        {/* Intelligence Community Expansion */}
        <div className="mt-6">
          <h3 className="text-white font-semibold mb-3">The Intelligence Industrial Complex</h3>
          <p className="text-stone-300 text-sm mb-4">
            Pre-9/11, the US had 3 main intelligence agencies (CIA, NSA, DIA) with a combined budget of ~$30 billion. 
            Post-9/11, there are now 18 agencies in the "Intelligence Community" spending over $90 billion annually:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-stone-700/50 rounded p-3">
              <h4 className="text-yellow-400 font-semibold text-sm mb-2">Pre-9/11 Structure (2001)</h4>
              <ul className="text-stone-300 text-xs space-y-1">
                <li>• CIA: Human intelligence, analysis</li>
                <li>• NSA: Signals intelligence, cryptography</li>
                <li>• DIA: Military intelligence</li>
                <li>• FBI: Domestic counterintelligence (limited)</li>
                <li>• <strong>Total budget: ~$30B</strong></li>
                <li>• <strong>Total personnel: ~40,000</strong></li>
              </ul>
            </div>
            <div className="bg-red-900/30 rounded p-3 border border-red-800">
              <h4 className="text-red-300 font-semibold text-sm mb-2">Post-9/11 Complex (2026)</h4>
              <ul className="text-stone-300 text-xs space-y-1">
                <li>• All previous agencies vastly expanded</li>
                <li>• DNI: Director of National Intelligence (new)</li>
                <li>• NCTC: National Counterterrorism Center</li>
                <li>• DHS I&A: Homeland Security Intelligence</li>
                <li>• 14 additional IC agencies</li>
                <li>• <strong>Total budget: $90B+</strong></li>
                <li>• <strong>Total personnel: 200,000+</strong></li>
                <li>• <strong>Contractors: 500,000+</strong></li>
              </ul>
            </div>
          </div>
          <p className="text-stone-400 text-sm mt-3">
            Result: The intelligence budget tripled, personnel increased 5x, and contractor involvement exploded. 
            Yet major threats like 9/11, Boston bombing, January 6th, and Russian interference were still not prevented. 
            More surveillance ≠ more security.
          </p>
        </div>
      </div>

      {/* The Human Cost: Beyond Statistics */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Human Cost: Beyond Statistics</h2>
        <p className="text-stone-300 mb-4">
          Behind the numbers are families destroyed, communities shattered, and lives forever changed. 
          The human cost of the post-9/11 wars extends far beyond battlefield casualties:
        </p>

        {/* US Military Impact */}
        <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-4">
          <h3 className="text-red-400 font-semibold mb-3">US Military Personnel</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">7,057</div>
              <div className="text-stone-300 text-sm">US service members killed</div>
              <div className="text-stone-500 text-xs">Iraq: 4,431 • Afghanistan: 2,448 • Other: 178</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">53,760</div>
              <div className="text-stone-300 text-sm">US service members wounded</div>
              <div className="text-stone-500 text-xs">Physical injuries requiring medical evacuation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">300,000+</div>
              <div className="text-stone-300 text-sm">Suffer from PTSD/TBI</div>
              <div className="text-stone-500 text-xs">Traumatic brain injury, depression, anxiety</div>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="border-b border-slate-700 pb-2">
              <span className="text-red-300 font-semibold">Veteran suicides: </span>
              <span className="text-stone-300">~22 per day (2005-2020 average) • More than combat deaths</span>
            </div>
            <div className="border-b border-slate-700 pb-2">
              <span className="text-red-300 font-semibold">Veteran homelessness: </span>
              <span className="text-stone-300">37,000 veterans homeless on any given night</span>
            </div>
            <div>
              <span className="text-red-300 font-semibold">Military families: </span>
              <span className="text-stone-300">2.7M children had parent deployed • 44,000 military divorces during peak war years</span>
            </div>
          </div>
        </div>

        {/* Civilian Impact */}
        <div className="bg-slate-800 rounded-lg p-4 mb-4">
          <h3 className="text-white font-semibold mb-3">Civilian Casualties (Conservative Estimates)</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-stone-600 pb-2">
              <span className="text-stone-300 text-sm">Iraq (2003-2019)</span>
              <span className="font-bold text-stone-200">185,000-208,000</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-600 pb-2">
              <span className="text-stone-300 text-sm">Afghanistan (2001-2021)</span>
              <span className="font-bold text-stone-200">176,000+</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-600 pb-2">
              <span className="text-stone-300 text-sm">Pakistan (drone war)</span>
              <span className="font-bold text-stone-200">8,000-17,000</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-600 pb-2">
              <span className="text-stone-300 text-sm">Syria (US operations)</span>
              <span className="font-bold text-stone-200">23,000+</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-600 pb-2">
              <span className="text-stone-300 text-sm">Yemen (US-backed Saudi war)</span>
              <span className="font-bold text-stone-200">230,000+</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-600 pb-2">
              <span className="text-stone-300 text-sm">Libya, Somalia, other</span>
              <span className="font-bold text-stone-200">15,000+</span>
            </div>
            <div className="flex justify-between items-center font-bold border-t border-stone-500 pt-2">
              <span className="text-white">Total documented deaths</span>
              <span className="text-red-400">937,000+</span>
            </div>
          </div>
          <p className="text-stone-400 text-xs mt-3">
            <strong>Note:</strong> These are documented deaths with conservative methodology. Actual death tolls are likely 
            significantly higher when including indirect deaths from destroyed infrastructure, healthcare systems, and economic collapse.
          </p>
        </div>

        {/* Displacement Crisis */}
        <div className="bg-amber-900/20 border border-amber-600 rounded-lg p-4">
          <h3 className="text-amber-400 font-semibold mb-3">The Displacement Crisis</h3>
          <p className="text-stone-300 text-sm mb-3">
            38 million people have been displaced by post-9/11 wars — the largest refugee crisis since World War II:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <h4 className="text-amber-300 font-semibold text-sm mb-2">Internal Displacement</h4>
              <ul className="text-stone-300 text-xs space-y-1">
                <li>• Afghanistan: 3.5M internally displaced</li>
                <li>• Iraq: 6.2M at peak (2014)</li>
                <li>• Syria: 6.7M internally displaced</li>
                <li>• Yemen: 4.3M displaced by Saudi war</li>
                <li>• Somalia: 2.6M displaced</li>
              </ul>
            </div>
            <div>
              <h4 className="text-amber-300 font-semibold text-sm mb-2">Refugees (Cross-Border)</h4>
              <ul className="text-stone-300 text-xs space-y-1">
                <li>• Syrian refugees: 6.8M (Turkey, Jordan, Lebanon)</li>
                <li>• Afghan refugees: 2.6M (Pakistan, Iran)</li>
                <li>• Iraqi refugees: 1.4M (regional)</li>
                <li>• Somali refugees: 890,000 (Kenya, Ethiopia)</li>
                <li>• European migrant crisis (2015): largely driven by US wars</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-400 text-xs mt-3">
            Impact: Refugee crises destabilize neighboring countries, fuel political extremism globally, and create 
            generational trauma. The 2016 Brexit vote and rise of European far-right parties directly linked to 
            refugee flows from US-destabilized countries.
          </p>
        </div>
      </div>

      {/* The Contractor Gold Rush */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Contractor Gold Rush: Who Got Rich</h2>
        <p className="text-stone-300 mb-4">
          The post-9/11 wars created the largest transfer of wealth from taxpayers to private contractors in American history. 
          War became a business model:
        </p>

        {/* Top War Contractors */}
        <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 mb-4">
          <h3 className="text-green-400 font-semibold mb-3">Top Post-9/11 War Contractors (2001-2026)</h3>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2 items-center border-b border-green-800/50 pb-2">
              <span className="font-bold text-green-300">Lockheed Martin</span>
              <span className="text-stone-300 text-sm">Defense systems, F-35, missiles</span>
              <span className="font-bold text-green-400">$580B+</span>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center border-b border-green-800/50 pb-2">
              <span className="font-bold text-green-300">Boeing</span>
              <span className="text-stone-300 text-sm">Aircraft, helicopters, bombs</span>
              <span className="font-bold text-green-400">$420B+</span>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center border-b border-green-800/50 pb-2">
              <span className="font-bold text-green-300">Raytheon</span>
              <span className="text-stone-300 text-sm">Missiles, defense systems</span>
              <span className="font-bold text-green-400">$380B+</span>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center border-b border-green-800/50 pb-2">
              <span className="font-bold text-green-300">General Dynamics</span>
              <span className="text-stone-300 text-sm">Vehicles, shipbuilding, IT</span>
              <span className="font-bold text-green-400">$290B+</span>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center border-b border-green-800/50 pb-2">
              <span className="font-bold text-green-300">Northrop Grumman</span>
              <span className="text-stone-300 text-sm">Drones, satellites, cyber</span>
              <span className="font-bold text-green-400">$250B+</span>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center border-b border-green-800/50 pb-2">
              <span className="font-bold text-green-300">Halliburton/KBR</span>
              <span className="text-stone-300 text-sm">Logistics, construction, fuel</span>
              <span className="font-bold text-green-400">$180B+</span>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center border-b border-green-800/50 pb-2">
              <span className="font-bold text-green-300">Blackwater/Xe/Academi</span>
              <span className="text-stone-300 text-sm">Private military services</span>
              <span className="font-bold text-green-400">$12B+</span>
            </div>
          </div>
          <p className="text-stone-400 text-sm mt-3">
            These seven companies alone received over $2.1 trillion in post-9/11 contracts — more than the GDP of most countries.
          </p>
        </div>

        {/* The Revolving Door */}
        <div className="bg-slate-800 rounded-lg p-4 mb-4">
          <h3 className="text-white font-semibold mb-3">The Revolving Door: Government Officials → Defense Contractors</h3>
          <p className="text-stone-300 text-sm mb-3">
            Senior officials who promoted the wars later joined the companies that profited from them:
          </p>
          <div className="space-y-2 text-sm">
            <div className="border-b border-stone-600 pb-2">
              <span className="text-yellow-400 font-semibold">Dick Cheney: </span>
              <span className="text-stone-300">VP (2001-09) → Previously CEO of Halliburton → Company received $40B+ in no-bid contracts</span>
            </div>
            <div className="border-b border-stone-600 pb-2">
              <span className="text-yellow-400 font-semibold">James Mattis: </span>
              <span className="text-stone-300">Defense Secretary → Raytheon board member → General Dynamics board</span>
            </div>
            <div className="border-b border-stone-600 pb-2">
              <span className="text-yellow-400 font-semibold">Mike Pompeo: </span>
              <span className="text-stone-300">CIA Director/Secretary of State → Defense contractor consulting</span>
            </div>
            <div className="border-b border-stone-600 pb-2">
              <span className="text-yellow-400 font-semibold">Lloyd Austin: </span>
              <span className="text-stone-300">Current Defense Secretary → Previously Raytheon board member ($7M stock)</span>
            </div>
            <div>
              <span className="text-yellow-400 font-semibold">Hundreds of others: </span>
              <span className="text-stone-300">Pentagon → K Street → Defense industry → Back to government</span>
            </div>
          </div>
        </div>

        {/* Stock Performance */}
        <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
          <h3 className="text-green-400 font-semibold mb-3">Defense Stock Performance vs. S&P 500 (2001-2026)</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-stone-300 text-sm">Lockheed Martin</span>
              <span className="text-green-400 font-bold">+2,850%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-300 text-sm">Raytheon</span>
              <span className="text-green-400 font-bold">+2,200%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-300 text-sm">General Dynamics</span>
              <span className="text-green-400 font-bold">+1,950%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-300 text-sm">Northrop Grumman</span>
              <span className="text-green-400 font-bold">+1,800%</span>
            </div>
            <div className="flex justify-between items-center border-t border-green-800 pt-2">
              <span className="text-white text-sm font-semibold">S&P 500 (for comparison)</span>
              <span className="text-stone-300 font-bold">+450%</span>
            </div>
          </div>
          <p className="text-stone-400 text-sm mt-3">
            Defense stocks outperformed the broader market by 4-6x during the War on Terror. War was extremely profitable — for shareholders.
          </p>
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
          <div className="bg-slate-800 rounded p-4">
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
          <div className="bg-slate-800 border border-slate-700 rounded p-4">
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

      {/* International Law Violations */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">International Law: What America Abandoned</h2>
        <p className="text-stone-300 mb-4">
          The post-9/11 response didn't just violate the Constitution — it systematically abandoned international laws 
          and treaties that America had helped create:
        </p>

        <div className="space-y-4">
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
            <h3 className="text-red-400 font-semibold mb-2">Geneva Conventions Violations</h3>
            <div className="space-y-2 text-sm text-stone-300">
              <div>• <strong>Torture:</strong> CIA black sites, enhanced interrogation, waterboarding (violation of Common Article 3)</div>
              <div>• <strong>Indefinite detention:</strong> Guantanamo Bay, no charges, no trials (violation of Article 3)</div>
              <div>• <strong>Medical experiments:</strong> Forced medication, psychological testing on detainees</div>
              <div>• <strong>Denial of legal counsel:</strong> "Enemy combatants" denied basic legal rights</div>
            </div>
          </div>

          <div className="bg-orange-900/20 border border-orange-800 rounded-lg p-4">
            <h3 className="text-orange-400 font-semibold mb-2">UN Charter Violations</h3>
            <div className="space-y-2 text-sm text-stone-300">
              <div>• <strong>Iraq invasion (2003):</strong> No UN authorization, no imminent threat, preemptive war</div>
              <div>• <strong>Libya bombing (2011):</strong> Exceeded UN mandate, regime change beyond authorized no-fly zone</div>
              <div>• <strong>Syria bombing (2014-present):</strong> No Syrian government consent, no UN authorization</div>
              <div>• <strong>Drone warfare:</strong> Extrajudicial killings in sovereign countries without their consent</div>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
            <h3 className="text-blue-400 font-semibold mb-2">Treaties Abandoned or Violated</h3>
            <div className="space-y-2 text-sm text-stone-300">
              <div>• <strong>Rome Statute (ICC):</strong> US withdrew cooperation, sanctions on ICC prosecutors</div>
              <div>• <strong>Convention Against Torture:</strong> Systematic torture program 2002-2009+</div>
              <div>• <strong>Vienna Convention:</strong> Diplomatic immunity violations, embassy surveillance</div>
              <div>• <strong>Nuclear Non-Proliferation Treaty:</strong> Nuclear threats, weapons modernization</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-slate-800 rounded-lg p-4">
          <h4 className="text-white font-semibold mb-2">The "American Exception" Doctrine</h4>
          <p className="text-stone-300 text-sm">
            Post-9/11, America adopted the position that international law doesn't apply to the US when fighting terrorism. 
            This "American exceptionalism" in legal matters undermined the entire international legal order that America had 
            spent 60 years building after WWII. The result: other countries now cite US precedent to justify their own violations.
          </p>
        </div>
      </div>

      {/* The Generational Impact */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Generational Impact: How 9/11 Changed America's DNA</h2>
        <p className="text-stone-300 mb-4">
          25 years later, an entire generation has grown up knowing nothing but the post-9/11 security state. 
          For Americans under 30, mass surveillance, endless wars, and airport security theater are not aberrations — they're normal:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-800 rounded-lg p-4">
            <h3 className="text-yellow-400 font-semibold mb-3">Generation 9/11 (Born 1996-2010)</h3>
            <div className="space-y-2 text-sm text-stone-300">
              <div>• Never experienced pre-9/11 civil liberties</div>
              <div>• Airport security theater is "normal"</div>
              <div>• Mass surveillance accepted as necessary</div>
              <div>• America has "always" been at war somewhere</div>
              <div>• Government secrecy and classification routine</div>
              <div>• Police militarization seen as standard</div>
              <div>• Privacy seen as suspicious behavior</div>
            </div>
          </div>
          <div className="bg-stone-700/50 rounded-lg p-4">
            <h3 className="text-blue-400 font-semibold mb-3">Generation Z (Born 2011-2025)</h3>
            <div className="space-y-2 text-sm text-stone-300">
              <div>• Born into the surveillance economy</div>
              <div>• Digital privacy never existed for them</div>
              <div>• School shooter drills since kindergarten</div>
              <div>• Terrorism fears shape daily life</div>
              <div>• Military recruitment in schools normalized</div>
              <div>• Government "classified" = legitimate</div>
              <div>• Constitutional rights seen as optional</div>
            </div>
          </div>
        </div>

        <div className="bg-amber-900/20 border border-amber-600 rounded-lg p-4 mb-4">
          <h3 className="text-amber-400 font-semibold mb-3">Institutional Memory Loss</h3>
          <p className="text-stone-300 text-sm mb-3">
            America has lost the institutional knowledge of what normal civil liberties looked like:
          </p>
          <div className="space-y-2 text-sm">
            <div className="border-b border-amber-600/30 pb-1">
              <span className="text-amber-300 font-semibold">Pre-9/11: </span>
              <span className="text-stone-300">Flying without ID was possible • NSA couldn't spy on Americans • 
              Warrants required for searches • Police looked like police, not soldiers</span>
            </div>
            <div className="border-b border-amber-600/30 pb-1">
              <span className="text-amber-300 font-semibold">Post-9/11: </span>
              <span className="text-stone-300">Papers required for domestic travel • Mass data collection normalized • 
              "National security" overrides warrant requirements • Military equipment for small-town police</span>
            </div>
            <div>
              <span className="text-amber-300 font-semibold">Impact: </span>
              <span className="text-stone-300">Younger Americans don't know what freedoms were lost because 
              they never experienced them. The baseline shifted permanently.</span>
            </div>
          </div>
        </div>

        <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
          <h3 className="text-red-400 font-semibold mb-3">Political Socialization Effects</h3>
          <p className="text-stone-300 text-sm mb-3">
            How different generations view government power:
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            <div>
              <h4 className="text-stone-200 font-semibold text-sm">Pre-9/11 Generation</h4>
              <div className="text-xs text-stone-300 space-y-1">
                <div>• Skeptical of government surveillance</div>
                <div>• Remember pre-surveillance normalcy</div>
                <div>• Value privacy rights</div>
                <div>• Question permanent wars</div>
              </div>
            </div>
            <div>
              <h4 className="text-stone-200 font-semibold text-sm">9/11 Generation</h4>
              <div className="text-xs text-stone-300 space-y-1">
                <div>• Accept surveillance as trade-off</div>
                <div>• "Nothing to hide" mentality</div>
                <div>• Security prioritized over liberty</div>
                <div>• Wars seen as inevitable</div>
              </div>
            </div>
            <div>
              <h4 className="text-stone-200 font-semibold text-sm">Gen Z</h4>
              <div className="text-xs text-stone-300 space-y-1">
                <div>• Surveillance is life baseline</div>
                <div>• Privacy is antiquated concept</div>
                <div>• Government power assumed</div>
                <div>• Military action normalized</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Impact: How America's Response Affected the World */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Global Consequences: How America's Wars Changed the World</h2>
        <p className="text-stone-300 mb-4">
          The post-9/11 response didn't just transform America — it reshaped global politics, economics, and security:
        </p>

        <div className="space-y-4">
          <div className="bg-slate-800 rounded-lg p-4">
            <h3 className="text-red-400 font-semibold mb-3">Regional Destabilization</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-stone-200 font-semibold text-sm mb-2">Middle East</h4>
                <ul className="text-stone-300 text-xs space-y-1">
                  <li>• Iraq: Sunni-Shia civil war, ISIS emergence</li>
                  <li>• Syria: Proxy war, 500K+ dead</li>
                  <li>• Libya: Failed state, slave markets</li>
                  <li>• Yemen: World's worst humanitarian crisis</li>
                  <li>• Iran: Nuclear program acceleration</li>
                  <li>• Israel/Palestine: Harder line positions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-stone-200 font-semibold text-sm mb-2">Africa & South Asia</h4>
                <ul className="text-stone-300 text-xs space-y-1">
                  <li>• Afghanistan: Taliban returned to power</li>
                  <li>• Pakistan: Internal Taliban/extremist growth</li>
                  <li>• Somalia: Al-Shabaab expansion</li>
                  <li>• Mali: Multiple coups, instability</li>
                  <li>• Nigeria: Boko Haram emergence</li>
                  <li>• Philippines: Southern insurgency escalation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <h3 className="text-orange-400 font-semibold mb-3">Rise of Authoritarian Competitors</h3>
            <p className="text-stone-300 text-sm mb-3">
              America's post-9/11 overreach created space for authoritarian powers to challenge US hegemony:
            </p>
            <div className="space-y-2 text-sm">
              <div className="border-b border-stone-600 pb-1">
                <span className="text-orange-300 font-semibold">China: </span>
                <span className="text-stone-300">Used US distraction in Middle East to build Belt & Road, militarize South China Sea, 
                expand influence while US fought desert wars</span>
              </div>
              <div className="border-b border-stone-600 pb-1">
                <span className="text-orange-300 font-semibold">Russia: </span>
                <span className="text-stone-300">Rebuilt military, annexed Crimea, interfered in elections, launched Ukraine invasion 
                while US was overextended globally</span>
              </div>
              <div className="border-b border-stone-600 pb-1">
                <span className="text-orange-300 font-semibold">Iran: </span>
                <span className="text-stone-300">Expanded regional influence through Iraq, Syria, Lebanon, Yemen — benefited from 
                US removal of Saddam (Iran's main regional rival)</span>
              </div>
              <div>
                <span className="text-orange-300 font-semibold">Others: </span>
                <span className="text-stone-300">Turkey, Saudi Arabia, UAE became more assertive, knowing US was distracted 
                and overcommitted elsewhere</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <h3 className="text-blue-400 font-semibold mb-3">Alliance Erosion</h3>
            <p className="text-stone-300 text-sm mb-3">
              25 years of unilateral action and "with us or against us" diplomacy damaged America's alliance system:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-blue-300 font-semibold text-sm mb-2">European Allies</h4>
                <ul className="text-stone-300 text-xs space-y-1">
                  <li>• Germany: Refused Iraq war participation</li>
                  <li>• France: "Old Europe" tensions, independent path</li>
                  <li>• Turkey: Erdogan pivot toward Russia/China</li>
                  <li>• NATO: Burden-sharing disputes, cohesion problems</li>
                  <li>• EU: Strategic autonomy, less US dependence</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-300 font-semibold text-sm mb-2">Regional Partners</h4>
                <ul className="text-stone-300 text-xs space-y-1">
                  <li>• Philippines: Duterte pivot to China</li>
                  <li>• Saudi Arabia: MBS hedging with Russia/China</li>
                  <li>• Pakistan: Playing all sides, unreliable partner</li>
                  <li>• Iraq: Parliament voted to expel US forces</li>
                  <li>• Afghanistan: Allies abandoned in withdrawal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-amber-900/20 border border-amber-600 rounded-lg p-4">
          <h4 className="text-amber-400 font-semibold mb-2">The Credibility Cost</h4>
          <p className="text-stone-300 text-sm">
            America's post-9/11 record — WMD lies, torture, civilian casualties, chaotic withdrawals — damaged 
            US credibility globally. When America claims to defend democracy and human rights, other countries 
            point to Abu Ghraib, Guantanamo, and the million Iraqi deaths. This credibility deficit limits 
            US ability to lead international coalitions and enforce international law.
          </p>
        </div>
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

        <p className="text-stone-300 mb-4">
          Madison could not have described the post-9/11 era more precisely if he had been writing
          in 2026. Armies. Debts. Taxes. The domination of the few. The $8 trillion flowed to defense
          contractors, intelligence agencies, and private military companies — not to the American people.
        </p>

        {/* Executive Power Expansion */}
        <div className="bg-slate-800 rounded-lg p-4 mb-4">
          <h3 className="text-red-400 font-semibold mb-3">The Imperial Presidency</h3>
          <p className="text-stone-300 text-sm mb-3">
            Post-9/11 presidents have claimed powers that would make King George III jealous:
          </p>
          <div className="space-y-2 text-sm">
            <div className="border-b border-stone-600 pb-1">
              <span className="text-red-300 font-semibold">Assassination: </span>
              <span className="text-stone-300">President can order killing of anyone, anywhere, including US citizens, 
              based on secret evidence reviewed by secret courts</span>
            </div>
            <div className="border-b border-stone-600 pb-1">
              <span className="text-red-300 font-semibold">Indefinite detention: </span>
              <span className="text-stone-300">Military can hold anyone forever without trial if labeled "enemy combatant" 
              — a status determined solely by executive branch</span>
            </div>
            <div className="border-b border-stone-600 pb-1">
              <span className="text-red-300 font-semibold">Warrantless surveillance: </span>
              <span className="text-stone-300">NSA can collect all communications of all Americans and search them 
              without warrants using "national security" justification</span>
            </div>
            <div className="border-b border-stone-600 pb-1">
              <span className="text-red-300 font-semibold">Secret law: </span>
              <span className="text-stone-300">FISA court creates secret interpretations of public laws that citizens 
              cannot read — laws they're bound by but not allowed to know</span>
            </div>
            <div>
              <span className="text-red-300 font-semibold">War without Congress: </span>
              <span className="text-stone-300">President can bomb any country by claiming connection to 9/11 attackers, 
              no matter how tenuous or fabricated</span>
            </div>
          </div>
        </div>

        <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
          <h4 className="text-red-400 font-semibold mb-2">The Bipartisan Consensus</h4>
          <p className="text-stone-300 text-sm">
            These powers have been claimed by presidents of both parties and challenged by neither party when out of power. 
            Obama expanded the drone program. Trump expanded surveillance authorities. Biden continued all of the above. 
            The imperial presidency is now institutional, regardless of party. The Constitution's separation of powers 
            exists only on paper.
          </p>
        </div>
      </div>

      {/* The Libertarian Analysis */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Libertarian Lesson: Why Big Government Always Fails</h2>
        <p className="text-stone-300 mb-4">
          9/11 and its aftermath represent the ultimate case study in government failure. The state failed to prevent 
          the attack despite spending hundreds of billions on intelligence. Then it responded with the largest expansion 
          of government power in American history — and failed to achieve any of its stated objectives.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
            <h3 className="text-red-400 font-semibold mb-3">Government Failures</h3>
            <ul className="text-stone-300 text-sm space-y-1">
              <li>• Failed to prevent 9/11 despite advance warnings</li>
              <li>• Failed to capture bin Laden for 10 years</li>
              <li>• Failed to stabilize Afghanistan or Iraq</li>
              <li>• Failed to eliminate terrorism (it increased)</li>
              <li>• Failed to protect civil liberties</li>
              <li>• Failed to control costs ($8 trillion)</li>
              <li>• Failed to win any of the wars it started</li>
              <li>• Failed to make America safer or more secure</li>
            </ul>
          </div>
          <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
            <h3 className="text-green-400 font-semibold mb-3">Market Solutions That Worked</h3>
            <ul className="text-stone-300 text-sm space-y-1">
              <li>• Private security firms more effective than TSA</li>
              <li>• Airline industry self-improved security post-9/11</li>
              <li>• Private intelligence contractors outperformed CIA</li>
              <li>• Market-driven energy independence reduced ME dependence</li>
              <li>• Communication technology improvements aided tracking</li>
              <li>• Private military contractors more cost-effective</li>
              <li>• Voluntary cooperation prevented more attacks than force</li>
              <li>• Economic growth would have prevented more suffering</li>
            </ul>
          </div>
        </div>

        <h3 className="text-white font-semibold mb-3">The Incentive Problem</h3>
        <p className="text-stone-300 text-sm mb-4">
          Government officials have no incentive to end wars or reduce surveillance. Every "crisis" justifies more funding, 
          more power, more personnel. The War on Terror created a permanent constituency with a financial interest in permanent war:
        </p>
        
        <div className="bg-slate-800 rounded-lg p-4 mb-4">
          <h4 className="text-yellow-400 font-semibold mb-2">The Iron Triangle</h4>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-sm font-semibold text-stone-200">Pentagon</div>
              <div className="text-xs text-stone-300">Wants bigger budgets, more missions, expanded authority</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-stone-200">Defense Contractors</div>
              <div className="text-xs text-stone-300">Want more contracts, longer wars, higher spending</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-stone-200">Congress</div>
              <div className="text-xs text-stone-300">Want defense jobs in districts, campaign contributions</div>
            </div>
          </div>
          <p className="text-stone-400 text-xs mt-3 text-center">
            All three benefit from permanent war. None benefits from peace. The incentive structure guarantees endless conflict.
          </p>
        </div>

        <h3 className="text-white font-semibold mb-3">What Non-Intervention Would Have Looked Like</h3>
        <p className="text-stone-300 text-sm mb-3">
          A libertarian response to 9/11 would have looked radically different:
        </p>
        <div className="space-y-2 text-sm">
          <div className="border-b border-stone-600 pb-1">
            <span className="text-green-300 font-semibold">Target the actual perpetrators: </span>
            <span className="text-stone-300">Hunt down the 19 hijackers' network specifically, not launch global wars</span>
          </div>
          <div className="border-b border-stone-600 pb-1">
            <span className="text-green-300 font-semibold">Sunset clauses: </span>
            <span className="text-stone-300">Any emergency powers expire automatically after 2 years unless renewed</span>
          </div>
          <div className="border-b border-stone-600 pb-1">
            <span className="text-green-300 font-semibold">Market solutions: </span>
            <span className="text-stone-300">Let airlines improve security voluntarily, consumers choose safety levels</span>
          </div>
          <div className="border-b border-stone-600 pb-1">
            <span className="text-green-300 font-semibold">Constitutional limits: </span>
            <span className="text-stone-300">Respect warrant requirements, due process, habeas corpus — no exceptions</span>
          </div>
          <div className="border-b border-stone-600 pb-1">
            <span className="text-green-300 font-semibold">Defensive focus: </span>
            <span className="text-stone-300">Protect American territory and citizens, not remake the world</span>
          </div>
          <div>
            <span className="text-green-300 font-semibold">End foreign interventions: </span>
            <span className="text-stone-300">Stop the policies that created anti-American sentiment in the first place</span>
          </div>
        </div>

        <blockquote className="border-l-4 border-yellow-600 pl-4 text-stone-300 italic mt-4">
          &ldquo;A government big enough to give you everything you want is a government big enough 
          to take away everything that you have.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Gerald Ford</span>
        </blockquote>
      </div>

      {/* Related */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/war-on-terror" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">The War on Terror: Full Accounting →</h3>
            <p className="text-stone-500 text-sm">Complete costs, casualties, and consequences</p>
          </Link>
          <Link href="/analysis/blowback" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">Blowback: How Interventions Create Enemies →</h3>
            <p className="text-stone-500 text-sm">The cycle of violence and retaliation</p>
          </Link>
          <Link href="/analysis/undeclared-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">America's Undeclared Wars →</h3>
            <p className="text-stone-500 text-sm">22 countries, no congressional approval</p>
          </Link>
          <Link href="/analysis/surveillance-state" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">The Surveillance State →</h3>
            <p className="text-stone-500 text-sm">NSA, FISA courts, and mass data collection</p>
          </Link>
          <Link href="/analysis/what-could-we-buy" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">What $8 Trillion Could Have Bought →</h3>
            <p className="text-stone-500 text-sm">Opportunity costs of the War on Terror</p>
          </Link>
          <Link href="/analysis/cost-of-secrecy" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">The Cost of Secrecy →</h3>
            <p className="text-stone-500 text-sm">Classification and hidden government</p>
          </Link>
          <Link href="/analysis/lies-that-started-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">Lies That Started Wars →</h3>
            <p className="text-stone-500 text-sm">WMDs, Gulf of Tonkin, and war propaganda</p>
          </Link>
          <Link href="/analysis/military-families" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">Military Families: The Hidden Cost →</h3>
            <p className="text-stone-500 text-sm">Deployment, divorce, and children</p>
          </Link>
          <Link href="/conflicts/afghanistan" className="bg-stone-50 rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">Afghanistan War: Complete Data →</h3>
            <p className="text-stone-500 text-sm">20 years, $2.3 trillion, Taliban victory</p>
          </Link>
          <Link href="/conflicts/iraq" className="bg-stone-50 rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">Iraq War: Complete Data →</h3>
            <p className="text-stone-500 text-sm">WMD lies, sectarian civil war, ISIS emergence</p>
          </Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line: America Defeated Itself</h2>
        <p className="text-stone-300 text-lg mb-4">
          Nineteen men with box cutters didn&apos;t destroy America. America&apos;s response did.
          The hijackers killed 2,977 people. The response killed 937,000+. The hijackers caused
          billions in property damage. The response cost $8+ trillion. The hijackers wanted America
          to abandon its principles, bankrupt itself through overreaction, and wage war across the
          Muslim world. America did all three — voluntarily, enthusiastically, and for 25 years.
        </p>
        <p className="text-stone-300 text-lg mb-4">
          Bin Laden's strategy was to provoke American overreaction that would exhaust the US economically 
          and morally. He succeeded beyond his wildest dreams. America spent itself into debt, abandoned 
          its founding principles, alienated its allies, created new enemies, and built a surveillance 
          state that monitors its own citizens. The terrorists won not through strength, but through America's weakness.
        </p>
        <p className="text-stone-300 text-lg mb-6">
          The lesson is clear: government's response to crisis is always more dangerous than the crisis itself. 
          9/11 killed 3,000 Americans. The government's response to 9/11 killed 900,000 people, displaced 38 million, 
          cost $8 trillion, and destroyed the Constitution. Next time there's a crisis, remember: the cure is worse than the disease.
        </p>
        <blockquote className="border-l-4 border-red-500 pl-4 text-stone-400 italic">
          &ldquo;They that can give up essential liberty to obtain a little temporary safety
          deserve neither liberty nor safety.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Benjamin Franklin</span>
        </blockquote>
        <p className="text-stone-500 text-sm mt-4">
          Franklin was wrong about one thing: the safety was temporary. The loss of liberty is permanent.
        </p>
      </div>

      <BackToTop />
    </div>
  )
}
