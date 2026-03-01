import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: '$175 Billion: America\'s Proxy War in Ukraine | WarCosts',
  description: 'The US has committed $175 billion to Ukraine since 2022 — the largest military aid package since WWII. Who profits, who pays, and what comes next.',
  keywords: ['ukraine proxy war', 'ukraine military aid', 'us ukraine spending', 'ukraine war cost'],
  openGraph: {
    title: '$175B: America\'s Proxy War in Ukraine',
    description: 'The largest military aid package since WWII Lend-Lease.',
    url: 'https://warcosts.org/analysis/ukraine-proxy',
    type: 'article',
  },
}

const totalAid = 175e9
const militaryAid = 66.9e9
const economicAid = 68e9
const humanitarianAid = 40.1e9

const aidPackages = [
  { date: 'Feb 2022', amount: 350e6, desc: 'Initial emergency drawdown — Javelins, Stingers' },
  { date: 'Mar 2022', amount: 13.6e9, desc: 'First supplemental appropriation' },
  { date: 'May 2022', amount: 40.1e9, desc: 'Ukraine Supplemental Appropriations Act' },
  { date: 'Dec 2022', amount: 45e9, desc: 'Consolidated Appropriations Act provisions' },
  { date: '2023', amount: 24.3e9, desc: 'Multiple drawdown and USAI packages' },
  { date: 'Apr 2024', amount: 60.8e9, desc: 'National Security Supplemental (after 6-month delay)' },
]

const weaponsSent = [
  { system: 'HIMARS', qty: '40+', unitCost: '$5.1M each', note: 'Changed the war; precision strikes on Russian logistics' },
  { system: 'Patriot Air Defense', qty: '2 batteries', unitCost: '$1B per battery', note: 'The crown jewel; each missile costs $4M' },
  { system: 'M1 Abrams Tanks', qty: '31', unitCost: '$10M each', note: 'Arrived a year late; vulnerable to drones' },
  { system: 'F-16 Fighting Falcons', qty: '~80 pledged', unitCost: '$64M each', note: 'From Denmark, Netherlands, Norway; US approved transfers' },
  { system: 'Bradley IFVs', qty: '300+', unitCost: '$3.5M each', note: 'The workhorse of the 2023 counteroffensive' },
  { system: 'M777 Howitzers', qty: '198', unitCost: '$700K each', note: 'Plus over 2 million 155mm shells' },
  { system: 'Javelin Anti-Tank', qty: '10,000+', unitCost: '$178K each', note: 'Symbol of early resistance; "Saint Javelin"' },
  { system: 'Stinger Anti-Air', qty: '2,000+', unitCost: '$120K each', note: 'Depleted US stockpiles; production restarted' },
]

const domesticAlternatives = [
  { item: 'Fully fund VA healthcare for 10 years', cost: 66.9e9 },
  { item: 'Provide clean water to every US city', cost: 55e9 },
  { item: 'Fund 1 million teachers for a year', cost: 65e9 },
  { item: 'End veteran homelessness', cost: 20e9 },
  { item: 'Rebuild every structurally deficient bridge', cost: 40e9 },
  { item: 'Free community college for every American for 5 years', cost: 60e9 },
]

const proxyWarComparisons = [
  { conflict: 'Korea (1950–53)', method: 'Direct combat + Chinese proxy', usCost: '$341B', result: 'Stalemate; 70 years later still divided' },
  { conflict: 'Vietnam (1955–75)', method: 'Direct combat, escalation', usCost: '$843B', result: 'Defeat after 20 years' },
  { conflict: 'Soviet-Afghan War (1979–89)', method: 'CIA armed mujahideen', usCost: '$3B', result: 'Soviet withdrawal; Taliban emerged' },
  { conflict: 'Nicaragua (1980s)', method: 'CIA-funded Contras', usCost: '$1B+', result: 'Scandal (Iran-Contra); no victory' },
  { conflict: 'Syria (2012–present)', method: 'Armed opposition; airstrikes', usCost: '$14B+', result: 'Assad survived; ISIS emerged' },
  { conflict: 'Ukraine (2022–present)', method: 'Arms, intel, economic aid', usCost: '$175B+', result: 'Ongoing — no endgame defined' },
]

export default function UkraineProxyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '$175 Billion: America\'s Proxy War in Ukraine',
    description: 'The largest military aid package since WWII.',
    url: 'https://warcosts.org/analysis/ukraine-proxy',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-01-10',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Ukraine Proxy War' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          {fmtMoney(totalAid)}: America&apos;s Proxy War in Ukraine
        </h1>
        <p className="text-stone-400 text-lg">
          The largest military aid package since World War II Lend-Lease.
          No American soldiers on the ground — but American taxpayers on the hook.
        </p>
      </div>

      <ShareButtons title="$175 Billion: America's Proxy War in Ukraine" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { value: fmtMoney(totalAid), label: 'Total US commitment' },
          { value: fmtMoney(militaryAid), label: 'Military aid' },
          { value: fmtMoney(economicAid), label: 'Economic support' },
          { value: fmtMoney(humanitarianAid), label: 'Humanitarian aid' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-600 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto text-stone-600">
        <p className="text-lg">
          Since Russia&apos;s full-scale invasion of Ukraine in February 2022, the United States has committed
          approximately <strong>$175 billion</strong> in total assistance — military, economic, and humanitarian.
          The military component alone, at <strong>$66.9 billion</strong>, exceeds a decade of US military aid
          to Israel. It is the most expensive foreign military assistance program since WWII Lend-Lease.
        </p>
        <p>
          Whether this constitutes a proxy war or a defense of the rules-based international order depends
          entirely on who you ask — and whether you believe the United States has a rules-based international
          order to defend.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Aid Breakdown</h2>
        <p>
          Not all of the $175 billion is weapons. The aid breaks down into three broad categories:
        </p>
        <ul>
          <li><strong>Military Aid (~$66.9B):</strong> Weapons, ammunition, training, intelligence sharing, and Pentagon drawdowns from US stockpiles</li>
          <li><strong>Economic Support (~$68B):</strong> Budget support to keep the Ukrainian government functioning — paying salaries, pensions, and maintaining basic services</li>
          <li><strong>Humanitarian Aid (~$40.1B):</strong> Refugee assistance, food, medical supplies, and reconstruction support</li>
        </ul>
        <p>
          But here&apos;s the accounting trick that rarely gets mentioned: much of the &ldquo;military aid&rdquo;
          doesn&apos;t actually go to Ukraine. It goes to <strong>American defense contractors</strong> to replace
          the weapons drawn from US stockpiles. When the Pentagon sends Ukraine Javelin missiles from existing
          inventory, Congress authorizes new production contracts with Lockheed Martin and Raytheon to rebuild
          those stockpiles — often with newer, more expensive versions. Ukraine gets the weapons. Contractors
          get the money. Taxpayers get the bill.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            US military aid to Ukraine in two years (<strong>$66.9B</strong>) exceeds the total US military aid
            to Israel over the <strong>entire previous decade</strong> ($38B over 10 years under the 2016 MOU).
            It also exceeds the annual GDP of over 100 countries.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Weapons Provided — And What They Cost</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 my-8 max-w-3xl mx-auto">
        {weaponsSent.map(w => (
          <div key={w.system} className="bg-white rounded-lg border p-4">
            <div className="flex justify-between items-start mb-1">
              <p className="font-bold text-stone-800 font-[family-name:var(--font-heading)]">{w.system}</p>
              <span className="text-red-800 font-semibold text-sm shrink-0 ml-2">{w.unitCost}</span>
            </div>
            <p className="text-stone-600 text-sm">Quantity: {w.qty}</p>
            <p className="text-stone-500 text-xs mt-1">{w.note}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Timeline of Aid Packages</h2>
      </div>

      <div className="bg-white rounded-xl border p-6 mb-8 max-w-3xl mx-auto">
        <div className="space-y-4">
          {aidPackages.map((p, i) => (
            <div key={i} className="flex items-start gap-4 border-l-2 border-red-200 pl-4">
              <span className="text-red-700 font-bold font-[family-name:var(--font-heading)] shrink-0 w-20">{p.date}</span>
              <div>
                <p className="font-semibold">{fmtMoney(p.amount)}</p>
                <p className="text-stone-500 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="prose max-w-3xl mx-auto text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Proxy War Debate</h2>
        <p>
          Is the United States fighting a proxy war in Ukraine? The term &ldquo;proxy war&rdquo; implies
          that one power is using another to fight its adversary indirectly. By any reasonable definition,
          the answer is yes.
        </p>
        <p>
          The United States is providing weapons, ammunition, intelligence (including real-time satellite
          targeting data), training, economic support, and strategic guidance to Ukraine in its war against
          Russia. US intelligence helped Ukraine sink the <em>Moskva</em>, Russia&apos;s Black Sea flagship.
          US-provided HIMARS systems have struck targets identified with US satellite imagery. American
          instructors train Ukrainian soldiers at bases in Germany and the UK.
        </p>
        <p>
          The US government rejects the &ldquo;proxy war&rdquo; label, insisting it is merely supporting
          Ukraine&apos;s sovereign right to self-defense. But the distinction is semantic. The US is engaged
          in a conflict with Russia using Ukrainian soldiers as the fighting force. This is the definition
          of a proxy war.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;We want to see Russia weakened to the degree that it can&apos;t do the kinds of things that
          it has done in invading Ukraine.&rdquo;
          <br />— Defense Secretary Lloyd Austin, April 2022
        </blockquote>

        <p>
          Austin&apos;s statement was remarkable for its candor — and revealing of the true strategic aim.
          This is not merely about defending Ukraine. It&apos;s about <strong>degrading Russia</strong> as a
          geopolitical rival. Ukraine is the instrument.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Who Profits</h2>
        <p>
          The Ukraine war has been a windfall for the defense industry. Stockpile replacements, new production
          orders, and European rearmament have driven record revenues:
        </p>
        <ul>
          <li><strong>Lockheed Martin:</strong> Record $67.6B revenue in 2023; Javelin and HIMARS production ramped up; backlog at $160B+</li>
          <li><strong>RTX (Raytheon):</strong> Stinger missile production restarted after years of dormancy; Patriot missiles in massive demand</li>
          <li><strong>Northrop Grumman:</strong> 155mm ammunition production tripled; new ammo plants opening across the US</li>
          <li><strong>General Dynamics:</strong> Abrams tank refurbishment; massive artillery shell contracts</li>
          <li><strong>BAE Systems:</strong> M777 howitzer and Bradley IFV replacement orders</li>
        </ul>
        <p>
          Defense industry stocks surged 25–40% in the first year of the war. The major contractors collectively
          spent over <strong>$100 million on lobbying</strong> in 2022–2023, ensuring continued congressional
          support for aid packages. The companies that profit from the war are spending millions to ensure the
          war continues to be funded.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The US has sent Ukraine over <strong>2 million 155mm artillery shells</strong> — and still can&apos;t
            keep up with Ukraine&apos;s consumption rate. At peak fighting, Ukraine was firing 6,000–8,000 shells
            per day. US annual production capacity was only 14,000 shells per month before the war. New production
            lines are being built, but the &ldquo;arsenal of democracy&rdquo; has struggled to match the
            demands of a single European land war.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Europe&apos;s Burden-Sharing Failure</h2>
        <p>
          European nations have provided significant aid to Ukraine — collectively matching or exceeding US
          contributions when measured as a percentage of GDP. But the uncomfortable truth is that European security
          has been subsidized by American taxpayers for 80 years. NATO&apos;s European members have a combined GDP
          of over <strong>$18 trillion</strong> and combined military budgets exceeding <strong>$300 billion</strong>.
          They are more than capable of defending their own continent.
        </p>
        <p>
          Yet decades of underinvestment left European militaries hollowed out. Germany&apos;s Bundeswehr had
          fewer operational tanks than the NYPD has patrol cars. France had ammunition stocks sufficient for
          a few days of intense combat. The UK&apos;s Army was at its smallest since the Napoleonic era.
          European governments built generous welfare states and world-class infrastructure while relying on
          American military protection. Ukraine exposed this arrangement for what it is: a subsidy.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Escalation Risks and the Nuclear Dimension</h2>
        <p>
          The Ukraine conflict carries risks that dwarf any proxy war since the Cuban Missile Crisis. Russia
          possesses approximately <strong>5,580 nuclear warheads</strong> — the world&apos;s largest nuclear
          arsenal. Vladimir Putin has repeatedly referenced Russia&apos;s nuclear capabilities, and Russian
          doctrine explicitly allows nuclear use when the existence of the state is threatened.
        </p>
        <p>
          Each escalation — HIMARS, then Patriot, then Abrams, then F-16s, then long-range ATACMS — tested
          a red line that Russia warned about but did not enforce. The implicit gamble: that Russia&apos;s red
          lines are bluffs. If they aren&apos;t, the consequences are civilizational.
        </p>
        <p>
          There is no off-ramp being discussed publicly. No diplomatic framework. No peace proposal that both
          sides would accept. The war has become a frozen escalation, consuming lives and treasure at a pace
          sustainable for the United States but devastating for Ukraine. The longer it continues, the more
          Ukrainian territory is destroyed, the more Ukrainians die, and the more American money flows to
          defense contractors.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;European security should be Europe&apos;s responsibility. The US has spent 80 years defending
          a continent with a larger GDP than our own while Americans can&apos;t afford healthcare.&rdquo;
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">Cold War Parallels</h2>
      </div>

      <div className="overflow-x-auto my-8 max-w-3xl mx-auto">
        <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
          <thead className="bg-stone-100">
            <tr>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Conflict</th>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Method</th>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">US Cost</th>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Result</th>
            </tr>
          </thead>
          <tbody>
            {proxyWarComparisons.map(p => (
              <tr key={p.conflict} className="border-t border-stone-200">
                <td className="p-3 font-medium">{p.conflict}</td>
                <td className="p-3 text-stone-600">{p.method}</td>
                <td className="p-3 text-red-800 font-semibold">{p.usCost}</td>
                <td className="p-3 text-stone-500">{p.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose max-w-3xl mx-auto text-stone-600">
        <p>
          The pattern is consistent: proxy wars rarely produce clean outcomes. They tend to escalate, drag on,
          produce unintended consequences, and end either in stalemate or the emergence of new threats. The
          Soviet-Afghan proxy war of the 1980s — America&apos;s greatest proxy war &ldquo;success&rdquo; —
          gave birth to both al-Qaeda and the Taliban. The weapons America sent to the mujahideen were later
          used against American soldiers in the same mountains.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What Happens When Aid Stops</h2>
        <p>
          The six-month congressional delay in 2024 — when House Republicans held up the supplemental — offered
          a preview. Ukraine&apos;s ammunition ran critically low. Russian forces advanced on multiple axes.
          Morale faltered. The message was clear: without American support, Ukraine cannot sustain its defense
          indefinitely against a larger adversary.
        </p>
        <p>
          This raises uncomfortable questions about long-term strategy. Is the United States committed to
          funding Ukraine&apos;s defense for 5 years? 10? 20? What is the endgame? Is there one? And if the
          aid stops — due to political change, fiscal pressure, or public fatigue — what was it all for?
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The care of human life and happiness, and not their destruction, is the first and only
          legitimate object of good government.&rdquo;
          <br />— Thomas Jefferson
        </blockquote>
      </div>

      {/* What it could buy */}
      <div className="bg-white rounded-xl border p-6 mb-8 max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">What {fmtMoney(militaryAid)} Could Buy at Home</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {domesticAlternatives.map((a, i) => (
            <div key={i} className="bg-stone-50 rounded-lg p-4">
              <p className="font-bold text-red-800 font-[family-name:var(--font-heading)]">{fmtMoney(a.cost)}</p>
              <p className="text-stone-500 text-sm">{a.item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cross-links */}
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        <Link href="/conflicts/ukraine-support" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Ukraine Support — Conflict Details →</h3>
          <p className="text-stone-500 text-sm">Full data on costs and casualties</p>
        </Link>
        <Link href="/foreign-aid" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">US Foreign Aid Data →</h3>
          <p className="text-stone-500 text-sm">Where US aid money goes</p>
        </Link>
        <Link href="/analysis/military-industrial-complex" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Military-Industrial Complex →</h3>
          <p className="text-stone-500 text-sm">Who profits from war</p>
        </Link>
        <Link href="/opportunity-cost" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Opportunity Cost →</h3>
          <p className="text-stone-500 text-sm">What war spending could buy instead</p>
        </Link>
        <Link href="/modern-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">All Modern Wars →</h3>
          <p className="text-stone-500 text-sm">Every post-1995 military operation</p>
        </Link>
        <Link href="/analysis/the-aftermath" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Aftermath →</h3>
          <p className="text-stone-500 text-sm">War doesn&apos;t end when the fighting stops</p>
        </Link>
      </div>

      <BackToTop />
    </div>
  )
}
