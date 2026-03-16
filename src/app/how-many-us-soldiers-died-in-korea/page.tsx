import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Many US Soldiers Died in Korea? 36,574 Deaths | WarCosts',
  description: 'The Korean War killed 36,574 American service members from 1950-1953. Timeline of casualties, major battles, and how the "Forgotten War" compares to other US conflicts.',
  keywords: ['Korean War deaths', 'how many died in Korean War', 'US soldiers killed Korea', 'Korean War casualties', 'Forgotten War deaths'],
  openGraph: {
    title: 'How Many US Soldiers Died in Korea? 36,574 Deaths',
    description: 'The Korean War killed 36,574 American service members from 1950-1953.',
    url: 'https://www.warcosts.org/how-many-us-soldiers-died-in-korea',
    type: 'article',
  },
}

const faqs = [
  { q: 'How many US soldiers died in the Korean War?', a: '36,574 American service members died in the Korean War (1950-1953). Of these, 33,686 were killed in action or died of wounds, and 2,888 died from other causes including disease, accidents, and illness. An additional 103,284 were wounded in action.' },
  { q: 'Why is Korea called the "Forgotten War"?', a: 'The Korean War is called the "Forgotten War" because it was overshadowed by World War II before it and Vietnam after it. There was no ticker-tape parade, no cultural reckoning. The conflict ended in an armistice — not a victory or clear defeat — making it politically awkward to memorialize.' },
  { q: 'How many total people died in the Korean War?', a: 'Total Korean War deaths are estimated at 2.5-3 million, including approximately 1.5 million North Korean and Chinese military, 137,000 South Korean military, and 1-2 million Korean civilians on both sides. The US lost 36,574.' },
  { q: 'What was the deadliest battle for US troops in Korea?', a: 'The Battle of Chosin Reservoir (Nov-Dec 1950) was among the deadliest, with over 1,000 US Marines killed and 4,500 wounded out of 30,000 engaged, while fighting 120,000 Chinese troops in -35°F conditions.' },
  { q: 'How does the Korean War death toll compare to Vietnam?', a: 'The Korean War killed 36,574 Americans in just 3 years, while Vietnam killed 58,220 over roughly 11 years of major involvement. On a per-year basis, Korea was significantly deadlier — about 12,200 deaths per year vs. Vietnam\'s 5,300 per year.' },
]

const timeline = [
  { period: 'Jun-Dec 1950', deaths: 8612, events: 'North Korean invasion, Pusan Perimeter, Inchon landing, Chinese entry' },
  { period: 'Jan-Jun 1951', deaths: 9429, events: 'Chinese offensives, Battle of Chipyong-ni, recapture of Seoul' },
  { period: 'Jul-Dec 1951', deaths: 6234, events: 'Bloody Ridge, Heartbreak Ridge, armistice talks begin' },
  { period: 'Jan-Jun 1952', deaths: 3891, events: 'Static warfare, outpost battles, trench fighting' },
  { period: 'Jul-Dec 1952', deaths: 3456, events: 'Battle of Old Baldy, Operation Showdown' },
  { period: 'Jan-Jul 1953', deaths: 4952, events: 'Pork Chop Hill, final Chinese offensives, armistice signed July 27' },
]

const casualtyBreakdown = [
  { category: 'Killed in action', count: 23615 },
  { category: 'Died of wounds', count: 10058 },
  { category: 'Disease & other causes', count: 2888 },
  { category: 'Missing/declared dead', count: 13 },
  { category: 'Wounded in action', count: 103284 },
  { category: 'Prisoners of war', count: 7140 },
]

export default function KoreaDeathsPage() {
  const maxDeaths = Math.max(...timeline.map(t => t.deaths))

  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Korean War Deaths' }]} />
        <ShareButtons title="How Many US Soldiers Died in Korea? 36,574 Deaths" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Many US Soldiers Died in Korea?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">36,574</div>
            <div className="text-lg opacity-90">American service members killed (1950-1953)</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The Korean War — often called the <strong className="text-[#dc2626]">&ldquo;Forgotten War&rdquo;</strong> — killed 
            36,574 Americans in just three years, making it one of the deadliest conflicts per year in US history.
            Another <strong className="text-[#dc2626]">103,284 were wounded</strong>. The war ended not with victory 
            but with an armistice that technically still holds today — the two Koreas remain at war 70+ years later.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Key Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { value: '36,574', label: 'Total US deaths', detail: 'Including KIA, wounds, disease' },
              { value: '103,284', label: 'Wounded in action', detail: 'Many with permanent disabilities' },
              { value: '7,140', label: 'Prisoners of war', detail: '2,701 died in captivity' },
              { value: '12,191', label: 'Deaths per year', detail: 'Higher annual rate than Vietnam' },
            ].map((stat, i) => (
              <div key={i} className="bg-stone-800 rounded-lg p-6 border border-stone-700">
                <div className="text-2xl font-bold text-[#dc2626] mb-2">{stat.value}</div>
                <div className="text-white text-lg mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Casualty Breakdown</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="space-y-3">
              {casualtyBreakdown.map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-stone-700 pb-3 last:border-b-0">
                  <span className="text-gray-300">{item.category}</span>
                  <span className="text-white font-mono font-bold">{item.count.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Casualty Timeline</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-6">
              The deadliest period was the first year, when fluid mobile warfare gave way to China&apos;s massive 
              intervention. Casualties dropped after mid-1951 as the conflict settled into static trench warfare 
              reminiscent of World War I.
            </p>
            <div className="space-y-4">
              {timeline.map((t, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-semibold">{t.period}</span>
                    <span className="text-[#dc2626] font-mono font-bold">{t.deaths.toLocaleString()}</span>
                  </div>
                  <div className="bg-stone-700 rounded-full h-3 mb-1">
                    <div className="bg-[#dc2626] h-3 rounded-full" style={{ width: `${(t.deaths / maxDeaths) * 100}%` }} />
                  </div>
                  <p className="text-gray-400 text-sm">{t.events}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Compared to Other Wars</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Conflict</th>
                    <th className="text-right py-3 text-white">US Deaths</th>
                    <th className="text-right py-3 text-white">Years</th>
                    <th className="text-right py-3 text-white">Deaths/Year</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'World War II', deaths: 405399, years: 4, highlight: false },
                    { name: 'Civil War (Union)', deaths: 364511, years: 4, highlight: false },
                    { name: 'World War I', deaths: 116516, years: 2, highlight: false },
                    { name: 'Vietnam War', deaths: 58220, years: 11, highlight: false },
                    { name: 'Korean War', deaths: 36574, years: 3, highlight: true },
                    { name: 'Iraq War', deaths: 4599, years: 8, highlight: false },
                    { name: 'Afghanistan', deaths: 2461, years: 20, highlight: false },
                  ].map((war, i) => (
                    <tr key={i} className={`border-b border-stone-700 ${war.highlight ? 'bg-stone-700' : ''}`}>
                      <td className={`py-3 font-semibold ${war.highlight ? 'text-[#dc2626]' : 'text-white'}`}>{war.name}</td>
                      <td className="py-3 text-right font-mono text-white">{war.deaths.toLocaleString()}</td>
                      <td className="py-3 text-right text-gray-300">{war.years}</td>
                      <td className={`py-3 text-right font-mono ${war.highlight ? 'text-[#dc2626]' : 'text-gray-300'}`}>{Math.round(war.deaths / war.years).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Why It Matters</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The Korean War set the template for every American military intervention that followed. It was the first 
              war fought under the new &ldquo;containment&rdquo; doctrine, the first waged without a Congressional declaration 
              of war (Truman called it a &ldquo;police action&rdquo;), and the first to end in an ambiguous stalemate rather than 
              clear victory.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The <Link href="/cost-of-war" className="text-[#dc2626] hover:underline">$389 billion cost</Link> was enormous, 
              but the real legacy was institutional: the Korean War convinced Washington that the US needed permanent 
              military readiness, massive standing armies, and global force projection. Before Korea, the US demobilized after 
              each war. After Korea, it never did again.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The 36,574 Americans who died in Korea died in a conflict most of their countrymen would barely remember. 
              Their sacrifice deserves better than the &ldquo;Forgotten War&rdquo; label — and so does an honest reckoning 
              with what Korea started.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-stone-800 rounded-lg p-6 border border-stone-700">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <FaqJsonLd faqs={faqs} />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: '/us-military-deaths-by-war', label: 'US Military Deaths by War' },
              { href: '/how-many-died-in-the-vietnam-war', label: 'Vietnam War Deaths' },
              { href: '/how-much-did-ww2-cost', label: 'How Much Did WW2 Cost?' },
              { href: '/compare/all-wars-cost', label: 'All Wars Ranked by Cost' },
              { href: '/casualties', label: 'All Casualty Data' },
              { href: '/cost-of-war-by-president', label: 'Cost of War by President' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-stone-800 hover:bg-stone-700 rounded-lg p-4 border border-stone-700 hover:border-[#dc2626] text-gray-300 hover:text-red-500 transition-colors">
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Sources</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <ul className="text-gray-300 space-y-2">
              <li>• Department of Defense — Defense Casualty Analysis System (DCAS)</li>
              <li>• Congressional Research Service — &ldquo;American War and Military Operations Casualties&rdquo;</li>
              <li>• Korean War Veterans Memorial Foundation</li>
              <li>• National Archives — Korean War Records</li>
              <li>• Brown University Costs of War Project</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How Many US Soldiers Died in Korea? 36,574 Deaths',
              description: 'The Korean War killed 36,574 American service members from 1950-1953.',
              url: 'https://www.warcosts.org/how-many-us-soldiers-died-in-korea',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
