import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt, fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Empire of Bases — 750 Military Installations in 80 Countries | WarCosts',
  description: 'The US maintains 750 overseas military bases in 80 countries — more than any empire in history. Cost: $55 billion per year.',
}

export default function EmpireOfBasesPage() {
  const presence = loadData('overseas-presence.json')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Empire of Bases' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Empire of Bases</h1>
      <p className="text-muted mb-6">{fmt(presence.totalBases)} military bases. {presence.totalCountries} countries. {fmt(presence.totalOverseasTroops)} troops. {fmtMoney(presence.annualBaseCost)} per year. No empire in history compares.</p>
      <ShareButtons title="Empire of Bases" />

      <div className="prose prose-stone max-w-none my-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Numbers</h2>
        <p>The United States maintains approximately {fmt(presence.totalBases)} military bases and installations in {presence.totalCountries} countries, with {fmt(presence.totalOverseasTroops)} troops permanently stationed overseas. The annual cost of maintaining this global military footprint is approximately {fmtMoney(presence.annualBaseCost)}.</p>
        <p>For comparison, the rest of the world&apos;s countries combined maintain roughly 30 overseas military bases. The US has 750.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Comparison to Other Empires</h2>
        <p>At the height of the <strong>Roman Empire</strong> — the most famous military empire in history — Rome had legions deployed across roughly 25 provinces, from Britain to Mesopotamia. The empire lasted centuries and is still considered the peak of ancient military power.</p>
        <p>The <strong>British Empire</strong>, the largest empire in human history covering 25% of the earth&apos;s land surface, maintained military garrisons in about 36 countries at its peak. The sun never set on the British Empire — but Britain never had bases in 80 countries.</p>
        <p>The <strong>Soviet Union</strong> at the height of the Cold War maintained bases in roughly 10 countries, primarily Warsaw Pact nations. Despite being portrayed as America&apos;s military equal, the USSR&apos;s global military footprint was a fraction of America&apos;s.</p>
        <p>The United States today has military installations in <strong>more than twice as many countries as the British Empire, the Roman Empire, and the Soviet Union combined</strong>.</p>
      </div>

      {/* Empire comparison visual */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-6 text-center">Foreign Military Presence: Empires Compared</h3>
        <div className="space-y-3">
          {[
            { name: 'United States (2025)', count: 750, countries: 80 },
            { name: 'British Empire (peak)', count: 36, countries: 36 },
            { name: 'Roman Empire (peak)', count: 25, countries: 25 },
            { name: 'Soviet Union (peak)', count: 10, countries: 10 },
            { name: 'China (2025)', count: 1, countries: 1 },
          ].map(e => {
            const pct = (e.count / 750) * 100
            return (
              <div key={e.name} className="flex items-center gap-3">
                <span className="w-44 text-sm font-medium text-right">{e.name}</span>
                <div className="flex-1 bg-stone-200 rounded-full h-6 overflow-hidden">
                  <div className="h-full rounded-full bg-red-600" style={{ width: `${Math.max(pct, 1)}%` }} />
                </div>
                <span className="w-24 text-sm font-semibold">{e.count} bases</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Legacy Bases</h2>
        <p>Many US bases are remnants of conflicts that ended decades ago:</p>
        <ul>
          <li><strong>Germany:</strong> {fmt(presence.topDeployments[1]?.troops || 34000)} troops and {presence.topDeployments[1]?.bases || 119} bases — 80 years after WWII ended.</li>
          <li><strong>Japan:</strong> {fmt(presence.topDeployments[0]?.troops || 53700)} troops and {presence.topDeployments[0]?.bases || 120} bases — also since 1945. 70% on Okinawa, where locals regularly protest.</li>
          <li><strong>South Korea:</strong> {fmt(presence.topDeployments[2]?.troops || 28500)} troops — 70+ years after the Korean War armistice.</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">The Base Network: Not Just Buildings</h2>
        <p>A US overseas military base is more than a few buildings. It&apos;s a complete American enclave on foreign soil: housing, schools, hospitals, shopping centers, fast food chains, movie theaters, and golf courses. Ramstein Air Base in Germany has its own Burger King, Taco Bell, and Popeyes. It&apos;s a small American city transplanted 5,000 miles from home.</p>
        <p>This base network serves as the infrastructure of global power projection. Any point on earth is within striking distance of a US military base. The network enables rapid deployment, intelligence gathering, and the constant threat of force that underpins American foreign policy.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Environmental Contamination</h2>
        <p>US military bases are among the most polluted sites in the world. Common contamination issues include:</p>
        <ul>
          <li><strong>PFAS (&ldquo;forever chemicals&rdquo;):</strong> Firefighting foam used on military bases has contaminated groundwater near bases in Japan, Germany, South Korea, and the US itself. These chemicals are linked to cancer, thyroid disease, and immune disorders.</li>
          <li><strong>Fuel spills:</strong> Underground fuel storage tanks have leaked millions of gallons of jet fuel and diesel at bases worldwide. The Red Hill facility in Hawaii contaminated the drinking water of 93,000 people.</li>
          <li><strong>Unexploded ordnance:</strong> Former bombing ranges contain unexploded munitions that continue to maim and kill civilians decades later. Vieques, Puerto Rico used as a bombing range for 60 years — cancer rates are 27% higher than the Puerto Rican mainland.</li>
          <li><strong>Depleted uranium:</strong> Used in ammunition in Iraq and the Balkans, contaminating soil and linked to birth defects and cancer clusters.</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Local Opposition Movements</h2>
        <p>In <strong>Okinawa, Japan</strong>, residents have protested US military bases for decades. A 2019 referendum showed 72% of Okinawans opposed new base construction. Both the Japanese and US governments proceeded anyway. Okinawans have endured decades of noise pollution, aircraft crashes, environmental contamination, and crimes by US service members — including a horrific 1995 assault that triggered massive protests.</p>
        <p>In <strong>Jeju Island, South Korea</strong>, villagers fought for years against construction of a naval base that destroyed centuries-old volcanic rock formations. The base was built over their objections.</p>
        <p>In <strong>Vicenza, Italy</strong>, tens of thousands marched against base expansion. In <strong>Ramstein, Germany</strong>, annual protests target the base&apos;s role as a relay station for US drone strikes. In <strong>Ecuador</strong>, the base at Manta was closed in 2009 after the new president refused to renew the lease, saying &ldquo;We&apos;ll renew the base if the US lets us put one in Miami.&rdquo;</p>

        <h2 className="font-[family-name:var(--font-heading)]">The Cost Question</h2>
        <p>{fmtMoney(presence.annualBaseCost)} per year on overseas bases. That&apos;s more than the entire budget of the Department of Education ($79B). It&apos;s enough to make public college free for every American student. It&apos;s more than the combined budgets of the EPA, NASA, and the National Science Foundation.</p>
        <p>The question isn&apos;t whether America needs a strong military. The question is whether it needs military bases in 80 countries, 80 years after the wars that put them there ended — and whether the people living near those bases have any say in the matter.</p>
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mt-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;We&apos;ll renew your military base on our soil when you let us put an Ecuadorian military base in Miami.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Rafael Correa, President of Ecuador, 2008 (Manta base closed 2009)</p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The US has more overseas military bases than <strong>embassies and consulates combined</strong>.</li>
          <li>• <strong>Incirlik Air Base, Turkey</strong> stores approximately 50 US nuclear weapons — in a NATO ally whose president has threatened to &ldquo;go it alone.&rdquo;</li>
          <li>• The Pentagon&apos;s overseas base network produces more CO₂ than <strong>140 individual countries</strong>.</li>
          <li>• <strong>Diego Garcia</strong> — a US base in the Indian Ocean — was created by forcibly removing the entire indigenous Chagossian population in the 1960s-70s. They&apos;ve never been allowed to return.</li>
        </ul>
      </div>

      <div className="text-center mt-8">
        <Link href="/bases" className="text-primary font-semibold hover:underline text-lg">See Full Overseas Bases Data →</Link>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/bases" className="text-red-800 hover:underline">→ Overseas Bases — full data by country</Link></li>
          <li><Link href="/deployments" className="text-red-800 hover:underline">→ Troop Deployments — 173K troops abroad</Link></li>
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Military Spending — $886B/yr</Link></li>
        </ul>
      </div>
    </div>
  )
}
