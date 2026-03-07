import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleSchema from '@/components/ArticleSchema'

export const metadata: Metadata = {
  title: 'War Is a Racket: Who Gets Rich When America Goes to War',
  description: 'Lockheed Martin stock up 1,236% since 9/11. General Dynamics up 1,450%. CEO pay: $30M. Enlisted soldier pay: $24K. 672 Pentagon officials became defense lobbyists. War is a racket.',
  openGraph: {
    title: 'War Is a Racket: Who Gets Rich When America Goes to War',
    description: 'Defense stocks up 1,000%+ since 9/11. CEO pay: $30M. Soldier pay: $24K. The racket exposed.',
    url: 'https://www.warcosts.org/analysis/war-profiteering',
  },
}

const defenseStocks = [
  { company: 'General Dynamics', ticker: 'GD', priceSep10_2001: '$21.10', price2026: '$327', change: '+1,450%', products: 'Abrams tanks, Gulfstream jets, nuclear submarines, IT systems' },
  { company: 'Lockheed Martin', ticker: 'LMT', priceSep10_2001: '$38.20', price2026: '$510', change: '+1,236%', products: 'F-35 ($1.7T program), F-22, Hellfire missiles, THAAD, Aegis' },
  { company: 'Northrop Grumman', ticker: 'NOC', priceSep10_2001: '$37.50', price2026: '$486', change: '+1,196%', products: 'B-21 Raider, B-2 Spirit, Global Hawk drones, cyber/space systems' },
  { company: 'Raytheon (RTX)', ticker: 'RTX', priceSep10_2001: '$12.80', price2026: '$118', change: '+823%', products: 'Tomahawk missiles ($2M each), Patriot systems, Stinger, Javelin' },
  { company: 'Boeing (Defense)', ticker: 'BA', priceSep10_2001: '$33.40', price2026: '$195', change: '+484%', products: 'Apache helicopters, F/A-18, KC-46, JDAM, Harpoon missiles' },
  { company: 'S&P 500 (benchmark)', ticker: 'SPX', priceSep10_2001: '1,093', price2026: '5,800', change: '+431%', products: 'For comparison — defense stocks massively outperformed the market' },
]

const ceoVsSoldier = [
  { role: 'Lockheed Martin CEO (Jim Taiclet)', compensation: '$30.2M (2024)', perDay: '$82,740', notes: 'Runs a company whose primary customer is the US taxpayer' },
  { role: 'Raytheon/RTX CEO (Chris Calio)', compensation: '$22.4M (2024)', perDay: '$61,370', notes: 'Makes missiles that cost $2M each — paid for by the public' },
  { role: 'Northrop Grumman CEO (Kathy Warden)', compensation: '$23.5M (2024)', perDay: '$64,384', notes: 'B-21 bomber program: $203B lifetime cost' },
  { role: 'General Dynamics CEO (Phebe Novakovic)', compensation: '$22.8M (2024)', perDay: '$62,466', notes: 'Earned more in one day than an E-1 earns in 2.5 years' },
  { role: 'E-1 Private (base pay)', compensation: '$24,072/year', perDay: '$65.94', notes: 'The person actually risking their life in Iran right now' },
  { role: 'E-5 Sergeant (base pay)', compensation: '$38,060/year', perDay: '$104.27', notes: 'Leading a squad in combat — earns less in a year than a CEO earns in a day' },
  { role: 'Veteran on disability (100%)', compensation: '$42,036/year', perDay: '$115.17', notes: 'Permanently disabled from war — earns 0.14% of a defense CEO salary' },
]

const revolvingDoor = [
  { name: 'Dick Cheney', govRole: 'Secretary of Defense (1989–1993) → VP (2001–2009)', privateRole: 'Halliburton CEO (1995–2000)', details: 'Halliburton received $39.5 billion in Iraq contracts. Cheney retained stock options and deferred compensation while VP. KBR (Halliburton subsidiary) provided troop support, logistics, and construction. Found to have overcharged the government by hundreds of millions.' },
  { name: 'Lloyd Austin', govRole: 'Secretary of Defense (2021–2025)', privateRole: 'Raytheon board member ($1.4M/year)', details: 'Sat on Raytheon\'s board before becoming SecDef. Raytheon makes Tomahawk missiles — the primary weapon used in Operation Epic Fury and Midnight Hammer. Recused from Raytheon-specific decisions but oversaw the broader defense strategy that enriched all contractors.' },
  { name: 'Mark Esper', govRole: 'Secretary of Defense (2019–2020)', privateRole: 'Raytheon VP for Government Relations', details: 'Raytheon\'s top lobbyist became the person deciding which weapons to buy. No conflict of interest review prevented this.' },
  { name: 'James Mattis', govRole: 'Secretary of Defense (2017–2019)', privateRole: 'General Dynamics board member', details: 'Sat on the board of General Dynamics — maker of the Abrams tank, nuclear submarines, and IT systems — before becoming SecDef.' },
  { name: 'Erik Prince', govRole: 'Navy SEAL → CIA contractor', privateRole: 'Founded Blackwater (now Academi)', details: 'Blackwater received $2B+ in contracts. Contractors involved in Nisour Square massacre (17 Iraqi civilians killed). Prince later proposed privatizing the entire Afghan war. Sister Betsy DeVos served as Trump\'s Education Secretary.' },
]

const costPlusExamples = [
  { program: 'F-35 Joint Strike Fighter', originalEstimate: '$233B', currentCost: '$1.7T (lifetime)', overrun: '+630%', contractor: 'Lockheed Martin', notes: 'Most expensive weapons program in human history. Still has 871 unresolved deficiencies.' },
  { program: 'Littoral Combat Ship', originalEstimate: '$220M per ship', currentCost: '$500M+ per ship', overrun: '+127%', contractor: 'Lockheed Martin / Austal', notes: 'Navy retiring ships early because they don\'t work as intended. Billions wasted.' },
  { program: 'Gerald R. Ford Aircraft Carrier', originalEstimate: '$10.5B', currentCost: '$13.3B', overrun: '+27%', contractor: 'Huntington Ingalls', notes: 'Most expensive warship ever built. Electromagnetic catapults still unreliable. Now deployed off Haifa for Iran strikes.' },
  { program: 'Zumwalt Destroyer', originalEstimate: '$1.3B per ship (32 planned)', currentCost: '$8.2B per ship (3 built)', overrun: '+531%', contractor: 'Bath Iron Works', notes: 'Guns cancelled because ammunition cost $800K per round. Program reduced from 32 ships to 3.' },
  { program: 'KC-46 Tanker', originalEstimate: '$4.9B (program)', currentCost: '$7.8B+', overrun: '+59%', contractor: 'Boeing', notes: 'Boeing absorbed $7B+ in losses but still operates. Too big to fail = too big to hold accountable.' },
]

const f35States = [
  'Alabama', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'Wisconsin',
]

export default function WarProfiteeringPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'War Profiteering' }]} />
      <ArticleSchema title="War Is a Racket: Who Gets Rich When America Goes to War" description="Lockheed Martin stock up 1,236% since 9/11. General Dynamics up 1,450%. CEO pay: $30M. Enlisted soldier pay: $24K. 672 Pentagon officials became defense lobbyis" url="/analysis/war-profiteering" />
      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Deep Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          War Is a Racket
        </h1>
        <p className="text-xl text-stone-300 mb-4">Who Gets Rich When America Goes to War</p>
        <p className="text-stone-400 text-lg">
          &ldquo;War is a racket. It always has been. It is possibly the oldest, easily the most profitable, surely the
          most vicious. It is the only one in which the profits are reckoned in dollars and the losses in lives.&rdquo;
          — Major General Smedley Butler, two-time Medal of Honor recipient, 1935. Ninety-one years later, nothing
          has changed except the scale. The profits are bigger. The wars are longer. The racket is more sophisticated.
        </p>
      </div>

      <ShareButtons title="War Is a Racket: Who Gets Rich" />

      {/* AI Overview */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">AI Overview — Key Data</h2>
        </div>
        <ul className="space-y-2 text-stone-300">
          <li>📊 Defense stocks since 9/11: Lockheed <strong className="text-white">+1,236%</strong>, General Dynamics <strong className="text-white">+1,450%</strong>, Northrop <strong className="text-white">+1,196%</strong> — vs S&amp;P 500 +431%</li>
          <li>📊 Defense CEO pay: <strong className="text-white">$22–30M/year</strong>. E-1 Private base pay: <strong className="text-white">$24,072/year</strong>. A CEO earns more in one day than a private earns in 2.5 years.</li>
          <li>📊 <strong className="text-white">672</strong> senior Pentagon officials became defense industry lobbyists or executives (POGO)</li>
          <li>📊 F-35 program has suppliers in <strong className="text-white">45 states</strong> and <strong className="text-white">375 congressional districts</strong> — by design, making it politically impossible to cancel</li>
          <li>📊 Post-9/11 contractor deaths: <strong className="text-white">8,000+</strong> in Iraq and Afghanistan — exceeding military deaths in many years</li>
        </ul>
      </div>

      {/* Defense Stocks */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Defense Stock Performance Since 9/11</h2>
        <p className="text-stone-400 text-sm mb-4">September 10, 2001 → March 2026. War is the best investment in America.</p>
        <div className="space-y-3">
          {defenseStocks.map(s => (
            <div key={s.ticker} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{s.company} <span className="text-stone-400 text-sm">({s.ticker})</span></h3>
                  <p className="text-stone-400 text-sm">{s.products}</p>
                </div>
                <span className={`font-bold text-xl ${s.ticker === 'SPX' ? 'text-stone-300' : 'text-red-400'}`}>{s.change}</span>
              </div>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="text-stone-400">Sep 10, 2001: <span className="text-white">${s.priceSep10_2001}</span></span>
                <span className="text-stone-400">Mar 2026: <span className="text-white">${s.price2026}</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Smedley Butler Was Right</h2>
        <p>
          In 1935, Major General Smedley Butler — then the most decorated Marine in US history — published
          <em> War Is a Racket</em>. Butler had fought in nearly every American conflict from the Banana Wars to World War I.
          He won the Medal of Honor twice. And he came home to tell the truth:
        </p>
        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;I spent 33 years and four months in active military service and during that period I spent most of
          my time as a high class muscle man for Big Business, for Wall Street and the bankers. In short, I was a
          racketeer, a gangster for capitalism. I helped make Mexico and especially Tampico safe for American oil
          interests in 1914. I helped make Haiti and Cuba a decent place for the National City Bank boys to collect
          revenues in. I helped in the raping of half a dozen Central American republics for the benefit of Wall
          Street. I helped purify Nicaragua for the International Banking House of Brown Brothers in 1902-1912.
          I brought light to the Dominican Republic for the American sugar interests in 1916. I helped make Honduras
          right for the American fruit companies in 1903.&rdquo;</p>
          <footer>— Major General Smedley Butler, USMC (Ret.), two-time Medal of Honor recipient</footer>
        </blockquote>
        <p>
          Ninety-one years later, the racket has only gotten bigger. Butler&apos;s &ldquo;Big Business&rdquo; has become a
          trillion-dollar defense industry. His &ldquo;gangsters for capitalism&rdquo; have become the most powerful lobbying
          force in Washington. And the muscle men — the soldiers, sailors, and Marines who do the fighting and dying —
          still earn less in a year than a defense CEO earns in a day.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">CEO Pay vs. the People Who Actually Fight</h2>
        <p>
          The disparity between those who profit from war and those who fight it is the most obscene feature of the
          military-industrial complex. Consider:
        </p>
      </div>

      {/* CEO vs Soldier */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Who Gets Paid What</h2>
        <div className="space-y-3">
          {ceoVsSoldier.map(r => (
            <div key={r.role} className="flex justify-between items-start border-b border-stone-700 pb-3">
              <div>
                <span className="text-white font-semibold">{r.role}</span>
                <p className="text-stone-400 text-sm">{r.notes}</p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <span className={`font-bold ${r.compensation.includes('M') ? 'text-red-400' : 'text-stone-300'}`}>{r.compensation}</span>
                <p className="text-stone-500 text-sm">{r.perDay}/day</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4">
          The Lockheed Martin CEO earns <strong className="text-red-400">1,254x</strong> what an E-1 Private earns.
          The Private is in Iran. The CEO is in Bethesda, Maryland.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Revolving Door: From Pentagon to Profit</h2>
        <p>
          According to the Project on Government Oversight (POGO), <strong>672 senior Pentagon officials</strong> left
          government service and became lobbyists, board members, executives, or consultants for defense contractors
          between 2008 and 2023. The revolving door between the Pentagon and the defense industry is not a metaphor —
          it is a career path.
        </p>
        <p>
          The pattern is consistent: serve in government, make decisions that benefit certain contractors, leave
          government, and join those contractors at compensation packages that dwarf government salaries. The
          implicit bargain is never spoken but always understood.
        </p>
      </div>

      {/* Revolving Door */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Revolving Door</h2>
        <div className="space-y-4">
          {revolvingDoor.map(r => (
            <div key={r.name} className="border border-stone-700 rounded-lg p-4">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{r.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                <div><span className="text-stone-400 text-sm">Government</span><br /><span className="text-white text-sm">{r.govRole}</span></div>
                <div><span className="text-stone-400 text-sm">Private Sector</span><br /><span className="text-red-400 text-sm">{r.privateRole}</span></div>
              </div>
              <p className="text-stone-400 text-sm mt-2">{r.details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Cost-Plus Contracts: Rewarding Failure</h2>
        <p>
          The defense industry operates on a business model that would be considered insane in any other sector:
          <strong> cost-plus contracts</strong>. Under this arrangement, the government pays the contractor their costs
          plus a guaranteed profit margin. The more the program costs, the more the contractor earns.
        </p>
        <p>
          This creates a perverse incentive: overruns are profitable. Delays are profitable. Complexity is profitable.
          The contractor has zero incentive to deliver on time or on budget — and they almost never do.
        </p>
      </div>

      {/* Cost-Plus Examples */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Cost-Plus Hall of Shame</h2>
        <div className="space-y-4">
          {costPlusExamples.map(p => (
            <div key={p.program} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{p.program}</h3>
                <span className="text-red-400 font-bold">{p.overrun}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                <div><span className="text-stone-400 text-sm">Original Estimate</span><br /><span className="text-stone-300">{p.originalEstimate}</span></div>
                <div><span className="text-stone-400 text-sm">Current Cost</span><br /><span className="text-red-400 font-semibold">{p.currentCost}</span></div>
                <div><span className="text-stone-400 text-sm">Contractor</span><br /><span className="text-white">{p.contractor}</span></div>
              </div>
              <p className="text-stone-400 text-sm mt-2">{p.notes}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The F-35 in 45 States: Political Engineering</h2>
        <p>
          The F-35 Joint Strike Fighter is not just a weapons program — it is a political masterpiece. Lockheed Martin
          has deliberately spread F-35 production across <strong>45 states</strong> and <strong>375 congressional
          districts</strong>. This is not efficient manufacturing. It is political engineering designed to make the
          program impossible to cancel.
        </p>
        <p>
          When a program has suppliers in 90% of states, nearly every senator has a financial interest in its
          continuation. When it touches 375 out of 435 House districts, 86% of representatives face job losses if
          the program is cut. The F-35 doesn&apos;t need to work well — it just needs to employ people in the right places.
        </p>
        <p className="text-sm text-stone-500">
          F-35 supplier states: {f35States.join(', ')}. That&apos;s 45 out of 50 states — 90 out of 100 senators with a
          political interest in the most expensive weapons program in history.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Contractor Body Count</h2>
        <p>
          One of the least-discussed aspects of America&apos;s post-9/11 wars is the role — and the deaths — of private
          military contractors. According to the Department of Labor and Brown University, <strong>more than 8,000
          contractors died</strong> in Iraq and Afghanistan between 2001 and 2021.
        </p>
        <p>
          In many years, contractor deaths exceeded military deaths. In 2009, more contractors were killed in Afghanistan
          than troops. In 2010, the ratio was similar. These deaths are not counted in official casualty figures. They
          don&apos;t get flags on coffins. Their families don&apos;t get the same benefits as military families. They are the
          invisible casualties of privatized war.
        </p>
        <p>
          At the peak of the Iraq War, there were more private contractors in Iraq than US troops. In 2008, the
          Department of Defense had approximately 160,000 contractors in Iraq compared to 150,000 troops. Many were
          performing functions previously done by soldiers — security, logistics, intelligence, even interrogation.
          The outsourcing of war to private companies reduced political accountability (no draft, fewer &ldquo;official&rdquo;
          casualties) while massively increasing costs.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Pentagon Has Never Passed an Audit</h2>
        <p>
          The Department of Defense is the only federal agency that has <strong>never passed a financial audit</strong>.
          In its most recent attempt (2023), the Pentagon failed for the sixth consecutive year. The department could
          not account for approximately $3.8 trillion in assets — roughly half of everything it owns.
        </p>
        <p>
          To put this in perspective: a small business that couldn&apos;t pass an IRS audit would be shut down. A publicly
          traded company that couldn&apos;t produce auditable financials would be delisted. The Pentagon — which receives
          $886 billion per year of taxpayer money — simply shrugs and asks for more.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;War is a racket. It always has been. It is possibly the oldest, easily the most profitable, surely
          the most vicious. It is the only one international in scope. It is the only one in which the profits are
          reckoned in dollars and the losses in lives.&rdquo;</p>
          <footer>— Major General Smedley Butler, <em>War Is a Racket</em> (1935)</footer>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Bottom Line</h2>
        <p>
          When Operation Epic Fury launched on February 28, defense stocks surged. Raytheon — maker of the Tomahawk
          missiles raining down on Tehran — jumped 8% in a single day. Lockheed Martin, Northrop Grumman, and General
          Dynamics all hit all-time highs. The executives who run these companies will earn tens of millions this year.
        </p>
        <p>
          The E-1 Private in the Persian Gulf earns $24,072. If they come home with PTSD — and 20% of combat veterans
          do — they&apos;ll spend years navigating a broken VA system. If they come home in a flag-draped coffin, their
          family gets a $100,000 death gratuity. The CEO of the company that made the missile that started the war
          earns that in less than two days.
        </p>
        <p>
          War is a racket. Smedley Butler knew it in 1935. We know it now. The only question is whether we&apos;ll ever
          do anything about it.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/military-industrial-complex">The Military-Industrial Complex</Link></li>
          <li><Link href="/analysis/cost-of-iran">What Will Iran Cost?</Link></li>
          <li><Link href="/analysis/what-could-we-buy">What $11.6 Trillion Could Have Bought Instead</Link></li>
          <li><Link href="/analysis/jobs-vs-war">Jobs vs. War</Link></li>
          <li><Link href="/analysis/private-armies">Private Armies</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
