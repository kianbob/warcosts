import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

interface Subsidiary { name: string; amount: number }
interface Contractor {
  name: string; slug: string; amount: number; rank: number;
  subsidiaries: Subsidiary[]; yearly?: Record<string, number>;
}
interface Weapon { name: string; slug: string; contractor?: string; manufacturer?: string; costBillions: number | null; category: string; status: string }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const contractors = loadData('contractors.json') as Contractor[]
  const c = contractors.find(x => x.slug === slug)
  if (!c) return { title: 'Contractor Not Found — WarCosts' }
  return {
    title: `${c.name} — #${c.rank} Defense Contractor (${fmtMoney(c.amount)}) | WarCosts`,
    description: `${c.name} received ${fmtMoney(c.amount)} in DoD contracts in FY2024, ranking #${c.rank} among defense contractors. See subsidiaries, yearly trends, and weapons programs.`,
    alternates: { canonical: `https://www.warcosts.org/contractors/${slug}` },
  }
}

export function generateStaticParams() {
  const contractors = loadData('contractors.json') as Contractor[]
  return contractors.slice(0, 50).map(c => ({ slug: c.slug }))
}

export const dynamicParams = true

// Known company descriptions
const companyDescriptions: Record<string, string> = {
  'Lockheed Martin': 'The world\'s largest defense contractor. Maker of the F-35 ($1.7T lifetime cost), F-22, C-130, THAAD missile defense, and Trident submarine-launched ballistic missiles. Spends ~$13M annually on lobbying.',
  'Boeing': 'Second-largest defense contractor. Builds the F/A-18, KC-46 tanker, AH-64 Apache, P-8 Poseidon, and maintains the Minuteman III ICBM fleet. Also builds Air Force One and the SLS rocket.',
  'RTX Corporation': 'Formerly Raytheon Technologies (merged with United Technologies in 2020). Builds Patriot missile systems, Tomahawk cruise missiles, Stinger missiles, and Pratt & Whitney jet engines. Major beneficiary of every US war.',
  'General Dynamics': 'Builds Virginia and Columbia-class nuclear submarines (via Electric Boat), M1 Abrams tanks (via Land Systems), Gulfstream business jets, and IT systems. Fourth-largest defense contractor.',
  'Northrop Grumman': 'Builds the B-21 Raider stealth bomber, B-2 Spirit, Global Hawk drones, and the Sentinel ICBM (81% over budget). Major contractor for nuclear weapons programs.',
  'Huntington Ingalls Industries': 'America\'s largest military shipbuilder. Only company that builds nuclear aircraft carriers (Newport News) and one of two that builds nuclear submarines.',
  'L3Harris Technologies': 'Communications, electronic warfare, and intelligence systems. Key provider of radios, sensors, and space systems to all military branches.',
  'Humana': 'Manages TRICARE health insurance for military families. Not a traditional defense contractor — profits from the military healthcare system.',
  'AmerisourceBergen': 'Pharmaceutical distributor for military pharmacies and hospitals. Part of the military healthcare supply chain.',
  'Booz Allen Hamilton': 'Major intelligence and defense consulting firm. Edward Snowden was a Booz Allen contractor when he leaked NSA surveillance documents.',
  'Leidos': 'Defense IT, intelligence, and health services. Formerly the national security arm of SAIC (Science Applications International Corporation).',
  'SAIC': 'IT services, space, and national security. Spun off from old SAIC; Leidos got the defense portfolio.',
  'BAE Systems': 'British defense giant with major US operations. Builds Bradley Fighting Vehicles, naval guns, and electronic warfare systems.',
}

export default async function ContractorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const contractors = loadData('contractors.json') as Contractor[]
  const c = contractors.find(x => x.slug === slug)
  if (!c) notFound()

  const weapons = loadData('weapons.json') as Weapon[]
  const linkedWeapons = weapons.filter(w =>
    w.manufacturer?.toLowerCase().includes(c.name.toLowerCase()) ||
    w.contractor?.toLowerCase().includes(c.name.toLowerCase()) ||
    c.name.toLowerCase().includes((w.manufacturer || w.contractor || '').split('/')[0].toLowerCase())
  )

  const yearlyEntries = c.yearly ? Object.entries(c.yearly).sort((a, b) => a[0].localeCompare(b[0])) : []
  const desc = companyDescriptions[c.name]

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Contractors', href: '/contractors' }, { label: c.name }]} />

      <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-stone-900 mt-4 mb-2">
        {c.name}
      </h1>
      <p className="text-stone-500 text-lg mb-6">#{c.rank} Defense Contractor · FY2024</p>

      {desc && <p className="text-stone-600 leading-relaxed text-lg mb-6">{desc}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-stone-200 rounded-lg p-4">
          <div className="text-xs text-stone-500 uppercase tracking-wider">FY2024 Contracts</div>
          <div className="text-2xl font-bold text-red-700">{fmtMoney(c.amount)}</div>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg p-4">
          <div className="text-xs text-stone-500 uppercase tracking-wider">Rank</div>
          <div className="text-2xl font-bold text-stone-900">#{c.rank}</div>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg p-4">
          <div className="text-xs text-stone-500 uppercase tracking-wider">Subsidiaries</div>
          <div className="text-2xl font-bold text-stone-900">{c.subsidiaries.length}</div>
        </div>
      </div>

      {/* Yearly Trend */}
      {yearlyEntries.length > 1 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-stone-900 mb-3">5-Year Contract Trend</h2>
          <div className="space-y-2">
            {yearlyEntries.map(([fy, amount]) => {
              const max = Math.max(...yearlyEntries.map(e => e[1]))
              return (
                <div key={fy} className="flex items-center gap-3">
                  <span className="text-stone-500 text-sm font-mono w-16">{fy}</span>
                  <div className="flex-1 bg-white border border-stone-200 rounded-full h-5 overflow-hidden">
                    <div className="bg-red-600 h-full rounded-full" style={{ width: `${(amount / max) * 100}%` }} />
                  </div>
                  <span className="text-stone-900 text-sm font-mono w-20 text-right">{fmtMoney(amount)}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Subsidiaries */}
      {c.subsidiaries.length > 1 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-stone-900 mb-3">Subsidiaries & Divisions</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-stone-500 border-b border-stone-200"><th className="py-2">Entity</th><th className="py-2 text-right">FY2024 Awards</th></tr></thead>
              <tbody>
                {c.subsidiaries.sort((a, b) => b.amount - a.amount).map((s, i) => (
                  <tr key={i} className="border-b border-stone-200"><td className="py-2 text-stone-600">{s.name}</td><td className="py-2 text-right text-stone-900">{fmtMoney(s.amount)}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Linked Weapons */}
      {linkedWeapons.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-stone-900 mb-3">Weapons Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {linkedWeapons.map(w => (
              <Link key={w.slug} href={`/weapons/${w.slug}`} className="bg-white border border-stone-200 hover:border-red-300 hover:shadow-md border border-stone-200 rounded-lg p-3 transition-colors">
                <div className="text-stone-900 font-medium">{w.name}</div>
                <div className="text-stone-500 text-sm">{w.category} · {w.costBillions ? `$${w.costBillions}B` : '—'} · {w.status}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold text-red-700 mb-2">Follow the Money</h2>
        <p className="text-stone-600 leading-relaxed">
          {c.name} received {fmtMoney(c.amount)} from the Department of Defense in FY2024 alone.
          Defense contractors spend millions on lobbying and campaign contributions to ensure continued government spending.
          Every dollar in defense contracts is a dollar not spent on education, healthcare, or infrastructure.
        </p>
        <div className="flex gap-3 mt-3 flex-wrap">
          <Link href="/analysis/military-industrial-complex" className="text-red-700 hover:text-red-600 text-sm underline">Military-Industrial Complex →</Link>
          <Link href="/opportunity-cost" className="text-red-700 hover:text-red-600 text-sm underline">What Else Could This Buy? →</Link>
          <Link href="/spending" className="text-red-700 hover:text-red-600 text-sm underline">Military Spending →</Link>
        </div>
      </div>

      <ShareButtons title={`${c.name} — #${c.rank} Defense Contractor`} />
      <BackToTop />
    </main>
  )
}
