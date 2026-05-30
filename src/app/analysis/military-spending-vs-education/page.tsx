import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Military Spending vs Education: Where Money Goes',
  description: '$886B on defense. $79B on education. An 11:1 ratio. One F-35 costs as much as 1,600 teacher salaries. America\'s priorities.',
  openGraph: {
    title: 'Military Spending vs Education: Where America Puts Its Money',
    description: '$886B on weapons. $79B on schools. One F-35 = 1,600 teachers. One aircraft carrier = 260,000 scholarships.',
    url: 'https://www.warcosts.org/analysis/military-spending-vs-education',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/military-spending-vs-education',
  },
}

const weaponVsEducation = [
  { weapon: 'One F-35 fighter jet', weaponCost: 80e6, education: 'teacher salaries ($50K)', educationUnits: 1600 },
  { weapon: 'One aircraft carrier (Ford-class)', weaponCost: 13e9, education: 'full college scholarships ($50K)', educationUnits: 260000 },
  { weapon: 'One B-21 Raider bomber', weaponCost: 700e6, education: 'school libraries ($500K each)', educationUnits: 1400 },
  { weapon: 'One Virginia-class submarine', weaponCost: 3.4e9, education: 'elementary schools ($12M each)', educationUnits: 283 },
  { weapon: 'One Tomahawk missile', weaponCost: 2e6, education: 'sets of school textbooks ($100 each)', educationUnits: 20000 },
  { weapon: 'One hour of B-2 bomber flight', weaponCost: 150000, education: 'school lunches ($3 each)', educationUnits: 50000 },
  { weapon: 'One day of Afghanistan war (avg)', weaponCost: 300e6, education: 'Pell Grant awards ($6,895)', educationUnits: 43509 },
]

const internationalComparison = [
  { country: '🇺🇸 United States', milPct: 3.4, eduPct: 3.6, ratio: '0.9:1', note: 'Only major country where military is close to education' },
  { country: '🇬🇧 United Kingdom', milPct: 2.3, eduPct: 4.2, ratio: '0.5:1', note: 'Spends nearly 2x more on education than defense' },
  { country: '🇩🇪 Germany', milPct: 1.6, eduPct: 4.7, ratio: '0.3:1', note: 'Free college tuition; education-first model' },
  { country: '🇫🇷 France', milPct: 2.1, eduPct: 5.2, ratio: '0.4:1', note: 'Strong public education investment' },
  { country: '🇯🇵 Japan', milPct: 1.2, eduPct: 3.4, ratio: '0.4:1', note: 'Constitutional limits on military spending' },
  { country: '🇫🇮 Finland', milPct: 2.4, eduPct: 5.9, ratio: '0.4:1', note: 'World\'s best education system; still outspends on schools' },
  { country: '🇰🇷 South Korea', milPct: 2.8, eduPct: 4.5, ratio: '0.6:1', note: 'Active military threat, still prioritizes education' },
]

const tenPercentRedirect = [
  { item: 'Double federal education spending', cost: '$79B', note: 'Currently $79B — an extra $88.6B would more than double it' },
  { item: 'Free community college for all', cost: '$9B/year', note: 'Biden\'s proposal was $9B/year — covered 10x over' },
  { item: 'Triple Head Start funding', cost: '$22B', note: 'Currently $11.5B; tripling would reach every eligible child' },
  { item: 'Repair every school building in America', cost: '$85B', note: 'GAO estimates $85B backlog in school infrastructure' },
  { item: 'Universal Pre-K nationwide', cost: '$20B/year', note: 'Four times over with 10% of military budget' },
  { item: 'Eliminate teacher shortage', cost: '$15B/year', note: 'Raise all teacher salaries to competitive levels' },
]

export default function MilitarySpendingVsEducationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Military Spending vs Education: Where America Puts Its Money',
        description: 'The US spends $886B on defense and $79B on education — an 11:1 ratio. A detailed comparison of national priorities.',
        url: 'https://www.warcosts.org/analysis/military-spending-vs-education',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-28',
        dateModified: '2026-03-28',
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Military Spending vs Education' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Priority Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          Military Spending vs Education: Where America Puts Its Money
        </h1>
        <p className="text-xl text-stone-300 mb-4">
          $886 billion on defense. $79 billion on education. An 11-to-1 ratio.
        </p>
        <p className="text-stone-400 text-lg">
          The United States spends eleven dollars on its military for every one dollar it spends on education.
          One F-35 fighter jet costs as much as 1,600 teacher salaries. One aircraft carrier could fund 260,000
          college scholarships. This isn&apos;t about whether we need defense — it&apos;s about what our
          spending says about what we value.
        </p>
      </div>

      <ShareButtons title="Military Spending vs Education: Where America Puts Its Money" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '$886B', label: 'Defense Budget', sub: 'Department of Defense FY2024' },
          { val: '$79B', label: 'Education Budget', sub: 'Department of Education FY2024' },
          { val: '11:1', label: 'Spending Ratio', sub: 'Military to education' },
          { val: '#1 vs #36', label: 'Global Rankings', sub: 'Military spending vs. education quality' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Side by side */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Numbers, Side by Side</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">🪖 Department of Defense</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li><strong>Budget:</strong> $886 billion</li>
              <li><strong>Employees:</strong> 3.4 million (military + civilian)</li>
              <li><strong>Facilities:</strong> 4,800+ properties worldwide</li>
              <li><strong>Aircraft:</strong> 13,000+</li>
              <li><strong>Ships:</strong> 290+</li>
              <li><strong>Annual growth:</strong> ~3-5% per year</li>
              <li><strong>Has passed audit:</strong> Never (failed every year since 2018)</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-lg text-blue-900 mb-3">📚 Department of Education</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li><strong>Budget:</strong> $79 billion</li>
              <li><strong>Employees:</strong> ~4,400</li>
              <li><strong>Schools served:</strong> 130,000+ K-12 schools</li>
              <li><strong>Students:</strong> 50 million K-12 + 20 million college</li>
              <li><strong>Pell Grants:</strong> 6.2 million students</li>
              <li><strong>Annual growth:</strong> ~1-2% (often flat or cut)</li>
              <li><strong>Under threat:</strong> Multiple proposals to eliminate entirely</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Weapons vs education */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">One Weapon = How Many Teachers?</h2>
        <p className="text-stone-700 mb-6">
          Military hardware costs are so astronomical that they become abstract. Here&apos;s what the same money
          could buy in education:
        </p>
        <div className="space-y-3">
          {weaponVsEducation.map(item => (
            <div key={item.weapon} className="bg-white border rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <span className="font-semibold text-red-800">{item.weapon}</span>
                  <span className="text-stone-400 text-sm ml-2">(${item.weaponCost >= 1e9 ? `${(item.weaponCost / 1e9).toFixed(1)}B` : item.weaponCost >= 1e6 ? `${(item.weaponCost / 1e6).toFixed(0)}M` : `${(item.weaponCost / 1e3).toFixed(0)}K`})</span>
                </div>
                <div className="text-right">
                  <span className="text-blue-700 font-bold">{item.educationUnits.toLocaleString()}</span>
                  <span className="text-stone-500 text-sm ml-1">{item.education}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3">Sources: DoD budget documents; Bureau of Labor Statistics teacher salary data; National Center for Education Statistics</p>
      </section>

      {/* International comparison */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How Other Countries Prioritize</h2>
        <p className="text-stone-700 mb-6">
          Most developed countries spend 2-3x more on education than defense as a percentage of GDP.
          The US is an outlier — the only major Western nation where military spending approaches education spending.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 font-semibold">Country</th>
                <th className="text-right p-3 font-semibold">Military (% GDP)</th>
                <th className="text-right p-3 font-semibold">Education (% GDP)</th>
                <th className="text-right p-3 font-semibold">Mil:Edu Ratio</th>
                <th className="text-left p-3 font-semibold">Note</th>
              </tr>
            </thead>
            <tbody>
              {internationalComparison.map((c, i) => (
                <tr key={c.country} className={i === 0 ? 'bg-red-50 font-semibold' : 'border-t'}>
                  <td className="p-3">{c.country}</td>
                  <td className="p-3 text-right">{c.milPct}%</td>
                  <td className="p-3 text-right">{c.eduPct}%</td>
                  <td className="p-3 text-right">{c.ratio}</td>
                  <td className="p-3 text-stone-500 text-xs">{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400 mt-3">Sources: SIPRI Military Expenditure Database; UNESCO Institute for Statistics; World Bank education spending data</p>
      </section>

      {/* 10% redirect */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What If We Redirected Just 10%?</h2>
        <p className="text-stone-700 mb-4">
          Redirecting 10% of the defense budget — $88.6 billion — to education would still leave the US with
          an $800 billion military budget (more than China and Russia <em>combined</em>). But it would
          transform American education overnight:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {tenPercentRedirect.map(item => (
            <div key={item.item} className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900">{item.item}</h3>
              <p className="text-green-700 font-bold">{item.cost}</p>
              <p className="text-xs text-stone-500 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mt-4">
          <p className="text-blue-900 font-semibold">
            10% of the Pentagon budget ($88.6B) is more than the entire Department of Education ($79B).
          </p>
          <p className="text-sm text-blue-800 mt-1">
            America would still have the world&apos;s largest military by a massive margin — and the
            best-funded public education system on Earth.
          </p>
        </div>
      </section>

      {/* The results */}
      <section className="mb-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What Do We Get for Our Money?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-red-400 font-semibold mb-3">$886B on Military</h3>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li>🏆 #1 in military spending (by 3x)</li>
                <li>🏆 #1 in weapons exports</li>
                <li>🏆 #1 in overseas military bases</li>
                <li>🏆 #1 in nuclear warheads (deployed)</li>
                <li>🏆 #1 in military aircraft</li>
                <li>Failed every financial audit since 2018</li>
              </ul>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-3">$79B on Education</h3>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li>📉 #36 in math (PISA international rankings)</li>
                <li>📉 #13 in reading</li>
                <li>📉 #18 in science</li>
                <li>💰 #1 in student debt ($1.75 trillion)</li>
                <li>📉 Chronic teacher shortages in 48 states</li>
                <li>📉 53% of adults read below 6th-grade level</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Historical context */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Eisenhower Warned Us</h2>
        <blockquote className="bg-stone-50 border-l-4 border-red-700 pl-4 py-3 my-4 text-stone-800 italic">
          &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense,
          a theft from those who hunger and are not fed, those who are cold and are not clothed. This world in
          arms is not spending money alone. It is spending the sweat of its laborers, the genius of its scientists,
          the hopes of its children.&rdquo;
          <span className="block text-sm text-stone-500 mt-2 not-italic">— President Dwight D. Eisenhower, &ldquo;Chance for Peace&rdquo; speech, April 16, 1953</span>
        </blockquote>
        <p className="text-stone-700">
          Eisenhower — a five-star general who commanded D-Day — understood that military spending comes at a cost
          to everything else. Seventy years later, his warning has been ignored completely. The military-industrial
          complex he warned about has grown larger than he could have imagined, while American schools crumble.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <div className="bg-stone-100 border rounded-xl p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">A Question of Values</h2>
          <p className="text-stone-700 mb-3">
            The 11-to-1 ratio of military-to-education spending is not an accident. It&apos;s a choice.
            It reflects what America&apos;s political system values — and what it doesn&apos;t. Defense contractors
            spend $120 million a year on lobbying. Teachers unions spend $30 million. The spending ratio follows
            the lobbying ratio.
          </p>
          <p className="text-stone-700">
            No country has ever bombed its way to greatness. Every country that has achieved lasting power
            has done so through education, innovation, and investment in its people. Rome didn&apos;t fall
            because it didn&apos;t have enough legions. It fell because it stopped investing in what made it great.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources & Citations</h2>
        <ul className="text-sm text-stone-600 space-y-1 list-disc pl-5">
          <li>Department of Defense FY2024 Budget Request, Office of the Under Secretary of Defense (Comptroller)</li>
          <li>Department of Education FY2024 Budget Summary, <em>U.S. Department of Education</em></li>
          <li>SIPRI Military Expenditure Database 2024, <em>Stockholm International Peace Research Institute</em></li>
          <li>UNESCO Institute for Statistics, <em>Government Expenditure on Education</em></li>
          <li>OECD PISA 2022 Results, <em>Programme for International Student Assessment</em></li>
          <li>Bureau of Labor Statistics, <em>Occupational Employment and Wage Statistics: Elementary and Secondary School Teachers</em></li>
          <li>Congressional Research Service, <em>Federal Student Loan Debt: Overview and Issues</em>, 2024</li>
          <li>National Center for Education Statistics, <em>Condition of Education</em>, 2024</li>
          <li>Government Accountability Office, <em>School Facilities: Condition of America&apos;s Schools</em></li>
        </ul>
      </section>

      <div className="text-center text-sm text-stone-500 mb-8">
        <p>Last updated: March 2026</p>
        <Link href="/analysis" className="text-red-700 hover:underline">← Back to All Analysis</Link>
      </div>

      
      <RelatedArticles articles={[{"slug":"us-military-budget-explained","title":"Military Budget Explained","desc":"Where $886B goes."},{"slug":"pentagon-waste","title":"Pentagon Waste","desc":"Failed audits and trillions lost."},{"slug":"what-could-we-buy","title":"What $11.6T Could Buy","desc":"What we could have had instead."},{"slug":"cost-of-empire","title":"Cost of Empire","desc":"$1.3 trillion per year."}]} />
      <BackToTop />
    </div>
  )
}
