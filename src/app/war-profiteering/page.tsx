import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import LastUpdated from '@/components/LastUpdated'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'War Profiteering — Who Gets Rich from American Wars',
  description: 'From Civil War shoddy uniforms to $8 trillion in post-9/11 contracts. The history of war profiteering, defense contractor profits, the revolving door between the Pentagon and industry, and who benefits when America goes to war.',
  keywords: ['war profiteering', 'defense contractor profits', 'military industrial complex', 'pentagon revolving door', 'who profits from war', 'war profiteers', 'defense industry lobbying'],
  openGraph: {
    title: 'War Profiteering — Who Gets Rich from American Wars',
    description: 'Defense contractor stock prices, the revolving door, $8T in post-9/11 contracts, and the business model of permanent war.',
    url: 'https://warcosts.org/war-profiteering',
    type: 'article',
  },
}

const historicalProfiteers = [
  { era: 'Civil War (1861–1865)', example: 'J.P. Morgan & "Shoddy" Contractors', detail: 'Morgan bought defective rifles from the Army for $3.50 each, then sold them back to the Army for $22 each. Contractors sold "shoddy" uniforms that fell apart in rain, shoes with cardboard soles, and rotten food. Congress investigated but rarely prosecuted.' },
  { era: 'World War I (1917–1918)', example: 'The "Merchants of Death"', detail: 'DuPont\'s profits increased 950% during WWI. Bethlehem Steel profits rose from $6M to $49M. The Nye Committee (1934) documented how arms manufacturers lobbied for US entry into the war. Public outrage led to the Neutrality Acts.' },
  { era: 'World War II (1941–1945)', example: 'Cost-Plus Contracts', detail: 'The "cost-plus" contracting system guaranteed profits regardless of efficiency. Senator Harry Truman\'s committee found $15 billion in waste and fraud (roughly $250B today). Some companies were caught selling defective equipment they knew would kill American soldiers.' },
  { era: 'Vietnam War (1965–1975)', example: 'Agent Orange & Bell Helicopter', detail: 'Dow Chemical and Monsanto produced Agent Orange knowing its health effects. Bell Helicopter\'s stock rose 500% during the war. Defense contractors funded pro-war lobbying while soldiers returned to inadequate VA care.' },
  { era: 'Gulf War (1990–1991)', example: 'The Birth of Outsourcing', detail: 'Halliburton (under CEO Dick Cheney) won the first major logistics outsourcing contract — LOGCAP. This contract would later become the foundation for massive Iraq War profiteering under the same company, with the same man as Vice President.' },
  { era: 'War on Terror (2001–present)', example: 'The $8 Trillion Bonanza', detail: 'The five largest defense contractors — Lockheed Martin, Boeing, Raytheon, General Dynamics, and Northrop Grumman — received over $2.1 trillion in DOD contracts between 2001 and 2023. Their combined stock prices increased by over 1,000%.' },
]

const contractorStockGains = [
  { company: 'Lockheed Martin', stockSep2001: '$38', stockNow: '$475+', gainPct: '1,150%+', ceoComp2023: '$28.6M', note: 'World\'s largest defense contractor. F-35 program alone: $1.7 trillion lifetime cost.' },
  { company: 'Raytheon (RTX)', stockSep2001: '$25', stockNow: '$120+', gainPct: '380%+', ceoComp2023: '$22.8M', note: 'Missiles, missile defense. Every Tomahawk cruise missile costs $1.9 million.' },
  { company: 'General Dynamics', stockSep2001: '$33', stockNow: '$290+', gainPct: '780%+', ceoComp2023: '$23.5M', note: 'Submarines, tanks, IT services. Operates through 10+ subsidiaries.' },
  { company: 'Northrop Grumman', stockSep2001: '$45', stockNow: '$460+', gainPct: '920%+', ceoComp2023: '$23.7M', note: 'B-21 Raider bomber program: $203 billion estimated total cost.' },
  { company: 'Boeing (Defense)', stockSep2001: '$30', stockNow: '$185+', gainPct: '517%+', ceoComp2023: '$33.4M', note: 'Largest DOD contractor by revenue some years. Also commercial aircraft.' },
  { company: 'L3Harris Technologies', stockSep2001: '$28', stockNow: '$240+', gainPct: '757%+', ceoComp2023: '$21.3M', note: 'Electronic warfare, communications, ISR. Formed through mergers.' },
]

const revolvingDoor = [
  { name: 'Dick Cheney', from: 'Secretary of Defense (1989–1993)', to: 'CEO of Halliburton (1995–2000)', then: 'Vice President (2001–2009)', impact: 'Halliburton received $39.5 billion in Iraq War contracts while Cheney held deferred compensation and stock options. Cheney\'s office directed no-bid contracts to Halliburton subsidiary KBR.' },
  { name: 'Lloyd Austin', from: 'CENTCOM Commander (retired 2016)', to: 'Board member, Raytheon ($1.4M/year)', then: 'Secretary of Defense (2021–2025)', impact: 'Went from commanding wars to profiting from them to overseeing the companies that profit from them. Raytheon received $27B in DOD contracts in 2022.' },
  { name: 'Mark Esper', from: 'VP of Government Relations, Raytheon', to: 'Secretary of the Army, then Secretary of Defense (2017–2020)', then: 'Board seats, consulting', impact: 'Directly went from lobbying for Raytheon to running the department that buys from Raytheon.' },
  { name: 'James Mattis', from: 'CENTCOM Commander (retired 2013)', to: 'Board member, General Dynamics ($600K+/year)', then: 'Secretary of Defense (2017–2019)', impact: 'Received an ethics waiver to serve as SecDef despite his recent industry ties. General Dynamics continued receiving major contracts.' },
  { name: 'Patrick Shanahan', from: 'VP, Boeing (31 years)', to: 'Deputy Secretary of Defense, then Acting Secretary of Defense (2017–2019)', then: 'Resigned amid ethics probe', impact: 'An inspector general found he repeatedly promoted Boeing programs while serving in the Pentagon. He resigned before confirmation hearings.' },
]

const lobbying = [
  { year: '2023', totalLobbying: '$127 million', topSpender: 'Lockheed Martin ($13.2M)', note: 'Defense sector employs 700+ registered lobbyists — more than one per member of Congress' },
  { year: '2022', totalLobbying: '$118 million', topSpender: 'Northrop Grumman ($14.5M)', note: 'Spending surged amid Ukraine war and calls for increased defense budgets' },
  { year: '2021', totalLobbying: '$110 million', topSpender: 'Boeing ($12.8M)', note: 'Post-Afghanistan drawdown led to increased lobbying for new programs' },
  { year: '2020', totalLobbying: '$108 million', topSpender: 'Lockheed Martin ($12.4M)', note: 'Pandemic didn\'t slow defense lobbying — contractors sought COVID relief too' },
]

const campaignContributions = [
  { cycle: '2024 Cycle', total: '$36.8 million', topRecipients: 'Armed Services Committee members (both parties)', note: 'Defense PACs and employees donate to whoever controls military spending, regardless of party' },
  { cycle: '2022 Cycle', total: '$32.1 million', topRecipients: 'Appropriations and Armed Services members', note: 'Contributions spike around NDAA debates and major procurement decisions' },
  { cycle: '2020 Cycle', total: '$30.4 million', topRecipients: 'Senate Armed Services, House Appropriations', note: 'Bipartisan giving ensures every committee chair is an ally' },
]

const wasteAndFraud = [
  { incident: 'KBR/Halliburton Overcharges (Iraq)', amount: '$1.4+ billion', detail: 'Billed for meals never served, fuel at inflated prices, empty trucks driven across Iraq to bill for mileage. Multiple criminal convictions for fraud and bribery.' },
  { incident: 'F-35 Joint Strike Fighter', amount: '$1.7 trillion (lifetime)', detail: 'Originally estimated at $233B. Now the most expensive weapons program in history. Still has 871 unresolved deficiencies as of 2024. Maintenance costs: $38,000 per flight hour.' },
  { incident: 'Littoral Combat Ship', amount: '$30+ billion', detail: 'Navy built 35 ships that can\'t survive combat, broke down constantly, and are now being decommissioned after less than 10 years of service. Some served less than 5 years.' },
  { incident: 'Afghanistan Reconstruction', amount: '$145 billion', detail: 'SIGAR (Special Inspector General) documented billions wasted on buildings that melted, schools with no students, and a $43 million gas station. Taliban now controls all of it.' },
  { incident: 'DOD Failed Audits', amount: '$3.8 trillion unaccounted', detail: 'The Pentagon has failed every audit since its first attempt in 2018. Cannot account for trillions in assets. No consequences, no budget reductions.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'War Profiteering — Who Gets Rich from American Wars',
  description: 'The history of war profiteering from the Civil War to the War on Terror. Defense contractor profits, the revolving door, and the business model of permanent war.',
  url: 'https://warcosts.org/war-profiteering',
  publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  datePublished: '2025-07-27',
  dateModified: '2025-07-27',
}

export default function WarProfiteeringPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FaqJsonLd faqs={[
        { q: 'What is war profiteering?', a: 'War profiteering is the practice of making excessive profits from warfare or military spending. It ranges from outright fraud (charging the government for services never delivered) to legal but ethically questionable practices like the revolving door between the Pentagon and defense contractors, lobbying for unnecessary weapons programs, and structuring contracts to maximize profits at taxpayer expense.' },
        { q: 'Which companies profit most from war?', a: 'The five largest US defense contractors — Lockheed Martin, Boeing, Raytheon (RTX), General Dynamics, and Northrop Grumman — received over $2.1 trillion in DOD contracts between 2001 and 2023. Their stock prices increased by 400-1,150% since September 11, 2001, dramatically outperforming the broader market.' },
        { q: 'What is the revolving door between the Pentagon and defense industry?', a: 'The "revolving door" refers to the pattern where senior military officers and Pentagon officials leave government service to take high-paying positions at defense contractors, then sometimes return to government. This creates conflicts of interest — officials make procurement decisions knowing they may later work for the companies they\'re awarding contracts to.' },
        { q: 'How much do defense contractors spend on lobbying?', a: 'The defense industry spends approximately $120-130 million per year on lobbying, employing over 700 registered lobbyists — more than one per member of Congress. They also contribute $30-37 million per election cycle to political campaigns, strategically targeting members of armed services and appropriations committees in both parties.' },
        { q: 'Has anyone been prosecuted for war profiteering?', a: 'Some lower-level fraud has been prosecuted — KBR employees convicted of bribery, contractors caught billing for phantom services. But systemic profiteering through legal channels (revolving door, lobbying, cost overruns, no-bid contracts) is rarely punished. The Truman Committee investigated WWII profiteering extensively, but modern oversight has been far weaker.' },
      ]} />
      <Breadcrumbs items={[{ label: 'War Profiteering' }]} />
      <LastUpdated />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">War Profiteering</h1>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        War is hell — but it&apos;s also a <strong className="text-stone-800">$886 billion per year industry</strong>.
        Since 9/11, defense contractor stocks have gained <strong className="text-stone-800">over 1,000%</strong>,
        executives earn <strong className="text-stone-800">$20–30 million per year</strong>, and the revolving door
        between the Pentagon and industry spins faster than ever. <em>Cui bono?</em> Follow the money.
      </p>
      <ShareButtons title="War Profiteering — Who Gets Rich from American Wars" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { label: 'Top 5 Contractor Revenue (since 9/11)', value: '$2.1T+' },
          { label: 'Defense Lobbying (annual)', value: '$127M' },
          { label: 'Lobbyists in Washington', value: '700+' },
          { label: 'Avg Top CEO Comp', value: '$25M+' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl md:text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <p className="text-lg">
          War profiteering is as old as war itself. What&apos;s changed is the scale, the sophistication, and
          the permanence. Today&apos;s defense industry doesn&apos;t just profit from wars — it has built a
          self-sustaining system that <strong>generates demand for its own products</strong> through lobbying,
          campaign contributions, the revolving door, and threat inflation. The result is a business model
          that requires permanent conflict, or at least the permanent <em>threat</em> of conflict, to survive.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">A Brief History of War Profiteering</h2>
        <p>
          Every American war has produced profiteers. What varies is how much the public notices, how much
          Congress cares, and whether anyone faces consequences.
        </p>
      </div>

      {/* Historical profiteering */}
      <div className="max-w-3xl mx-auto my-8 space-y-4">
        {historicalProfiteers.map(h => (
          <div key={h.era} className="bg-white rounded-lg border p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg">{h.era}</h3>
            </div>
            <p className="text-red-800 font-medium text-sm mb-2">{h.example}</p>
            <p className="text-stone-500 text-sm">{h.detail}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The 9/11 Jackpot: Defense Contractor Stock Performance</h2>
        <p>
          If you had invested $10,000 in the top defense contractors on September 10, 2001, your investment
          would be worth <strong>$100,000 to $125,000 today</strong>. The War on Terror has been the greatest
          wealth-creation event in the history of the defense industry.
        </p>
        <p>
          The S&P 500 gained approximately 350% over the same period. Defense stocks outperformed by 3 to 4 times.
          War, it turns out, is an excellent investment — if you&apos;re a shareholder rather than a soldier.
        </p>
      </div>

      {/* Stock gains table */}
      <div className="max-w-4xl mx-auto my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Defense Contractor Stock Performance Since 9/11</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-stone-300">
                <th className="text-left py-3 px-2 font-[family-name:var(--font-heading)]">Company</th>
                <th className="text-right py-3 px-2 font-[family-name:var(--font-heading)]">Sept 2001</th>
                <th className="text-right py-3 px-2 font-[family-name:var(--font-heading)]">Current</th>
                <th className="text-right py-3 px-2 font-[family-name:var(--font-heading)]">Gain</th>
                <th className="text-right py-3 px-2 font-[family-name:var(--font-heading)]">CEO Comp (2023)</th>
              </tr>
            </thead>
            <tbody>
              {contractorStockGains.map((row, i) => (
                <tr key={row.company} className={`border-b border-stone-200 ${i % 2 === 0 ? 'bg-stone-50' : ''}`}>
                  <td className="py-3 px-2">
                    <span className="font-medium">{row.company}</span>
                    <p className="text-stone-400 text-xs">{row.note}</p>
                  </td>
                  <td className="py-3 px-2 text-right text-stone-500">{row.stockSep2001}</td>
                  <td className="py-3 px-2 text-right font-bold text-green-700">{row.stockNow}</td>
                  <td className="py-3 px-2 text-right font-bold text-green-700">{row.gainPct}</td>
                  <td className="py-3 px-2 text-right text-red-800 font-bold">{row.ceoComp2023}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 The Investment Test</p>
          <p className="text-amber-800">
            $10,000 invested in Lockheed Martin stock on September 10, 2001 would be worth approximately
            <strong> $125,000 today</strong> (including dividends). The same $10,000 invested in the S&P 500
            would be worth about $45,000. The soldiers who fought the wars that produced these profits received
            a base salary of $1,543/month in 2001 ($23,000/year). Lockheed Martin&apos;s CEO makes that in
            about 7 hours.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The Revolving Door</h2>
        <p>
          The &ldquo;revolving door&rdquo; between the Pentagon and the defense industry is the mechanism that
          keeps the money flowing. Senior military officers retire, join defense company boards at $500K–$1.5M
          per year, then sometimes return to government to oversee the same companies. This isn&apos;t corruption
          in the legal sense — it&apos;s corruption by design.
        </p>
        <p>
          A 2021 study by the Government Accountability Office found that <strong>1,718 senior DOD officials
          and military officers</strong> went to work for defense contractors between 2014 and 2019 — an
          average of nearly one per day.
        </p>
      </div>

      {/* Revolving door examples */}
      <div className="max-w-3xl mx-auto my-8 space-y-4">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Notable Revolving Door Cases</h2>
        {revolvingDoor.map(rd => (
          <div key={rd.name} className="bg-white rounded-lg border p-5">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg mb-2">{rd.name}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded">{rd.from}</span>
              <span className="text-stone-400">→</span>
              <span className="bg-green-50 text-green-800 text-xs px-2 py-1 rounded">{rd.to}</span>
              <span className="text-stone-400">→</span>
              <span className="bg-red-50 text-red-800 text-xs px-2 py-1 rounded">{rd.then}</span>
            </div>
            <p className="text-stone-500 text-sm">{rd.impact}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Lobbying Machine</h2>
        <p>
          The defense industry spends over <strong>$120 million per year</strong> on lobbying and employs
          more than <strong>700 registered lobbyists</strong> in Washington — more than one for every member
          of Congress. These lobbyists don&apos;t just advocate for existing programs; they actively create
          demand for new weapons systems by manufacturing threats, funding think tanks, and placing favorable
          stories in media.
        </p>
      </div>

      {/* Lobbying data */}
      <div className="max-w-3xl mx-auto my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Defense Industry Lobbying</h2>
        <div className="space-y-3">
          {lobbying.map(l => (
            <div key={l.year} className="bg-white rounded-lg border p-4 flex justify-between items-center">
              <div>
                <span className="font-medium font-[family-name:var(--font-heading)]">{l.year}</span>
                <p className="text-stone-500 text-xs">Top: {l.topSpender}</p>
                <p className="text-stone-400 text-xs">{l.note}</p>
              </div>
              <span className="text-red-800 font-bold font-[family-name:var(--font-heading)] text-xl">{l.totalLobbying}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Campaign contributions */}
      <div className="max-w-3xl mx-auto my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Campaign Contributions</h2>
        <div className="space-y-3">
          {campaignContributions.map(c => (
            <div key={c.cycle} className="bg-white rounded-lg border p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium font-[family-name:var(--font-heading)]">{c.cycle}</span>
                <span className="text-red-800 font-bold font-[family-name:var(--font-heading)] text-xl">{c.total}</span>
              </div>
              <p className="text-stone-500 text-xs">Top recipients: {c.topRecipients}</p>
              <p className="text-stone-400 text-xs">{c.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Waste, Fraud, and Cost Overruns</h2>
        <p>
          War profiteering isn&apos;t just about the revolving door and lobbying. It&apos;s also about a
          contracting system designed to reward failure. Cost-plus contracts guarantee profit margins regardless
          of efficiency. &ldquo;No-bid&rdquo; contracts eliminate competition. And the Pentagon&apos;s chronic
          inability to pass an audit means billions can disappear without consequence.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence,
          whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise
          of misplaced power exists and will persist.&rdquo;
          <br />— President Dwight D. Eisenhower, Farewell Address, January 17, 1961
        </blockquote>
      </div>

      {/* Waste and fraud */}
      <div className="max-w-3xl mx-auto my-8 space-y-4">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Notable Waste & Fraud</h2>
        {wasteAndFraud.map(w => (
          <div key={w.incident} className="bg-white rounded-lg border p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-[family-name:var(--font-heading)] font-bold">{w.incident}</h3>
              <span className="text-red-800 font-bold font-[family-name:var(--font-heading)] text-lg whitespace-nowrap ml-4">{w.amount}</span>
            </div>
            <p className="text-stone-500 text-sm">{w.detail}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Business Model of Permanent War</h2>
        <p>
          The defense industry has solved the fundamental problem of any business dependent on war:
          wars end. Their solution is a self-reinforcing cycle:
        </p>
        <ol>
          <li><strong>Fund think tanks</strong> that identify threats and recommend military solutions</li>
          <li><strong>Lobby Congress</strong> for weapons programs to counter those threats</li>
          <li><strong>Hire former generals</strong> to provide &ldquo;expert&rdquo; commentary supporting military action</li>
          <li><strong>Donate to campaigns</strong> of members who sit on defense committees</li>
          <li><strong>Distribute contracts</strong> across as many congressional districts as possible (the F-35 has suppliers in 45 states)</li>
          <li><strong>Hire retiring Pentagon officials</strong> who will advocate for your programs when they return to government</li>
          <li><strong>Repeat</strong></li>
        </ol>
        <p>
          This cycle doesn&apos;t require conspiracy — it requires only that each participant act in their
          own rational self-interest. The general wants a high-paying post-retirement job. The congressman
          wants campaign donations and jobs in their district. The contractor wants revenue. The think tank
          wants funding. Each link in the chain has incentives that point in the same direction: more spending,
          more weapons, more threat.
        </p>
        <p>
          The result is a system that President Eisenhower warned about in 1961, that has only grown more
          powerful in the 60+ years since, and that now consumes <strong>$1.4 trillion per year</strong> of
          American wealth — roughly <strong>$11,500 per household</strong> — regardless of whether the
          country is at war.
        </p>
      </div>

      {/* Related pages */}
      <div className="max-w-3xl mx-auto my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/military-budget-history', label: 'Military Budget History', desc: 'Defense spending from WWII to $886 billion' },
            { href: '/cost-of-war', label: 'Cost of War', desc: '$11.3 trillion spent on war since 1776' },
            { href: '/defense-contractors', label: 'Defense Contractors', desc: 'The companies that build the weapons' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="bg-white rounded-lg border p-4 hover:border-red-300 hover:shadow-sm transition-all no-underline">
              <p className="font-medium text-red-800 font-[family-name:var(--font-heading)]">{link.label}</p>
              <p className="text-stone-500 text-xs">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
