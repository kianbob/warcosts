import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'US-Backed Regime Changes — Coups and Their Consequences',
  description: 'From Iran 1953 to Libya 2011, the US has overthrown governments worldwide. See the full list and the blowback that followed.',
}

const regimeChanges = [
  { id: 'iran-1953', country: 'Iran', year: 1953, method: 'CIA coup (Operation Ajax)', leader: 'PM Mossadegh → Shah Pahlavi', blowback: '1979 Islamic Revolution. 44 years of hostility. Nuclear crisis.' },
  { id: 'guatemala-1954', country: 'Guatemala', year: 1954, method: 'CIA coup (Operation PBSUCCESS)', leader: 'President Árbenz → Military junta', blowback: '36-year civil war. 200,000+ dead. Ongoing instability driving migration.' },
  { id: 'chile-1973', country: 'Chile', year: 1973, method: 'CIA-supported military coup', leader: 'President Allende → General Pinochet', blowback: '17-year dictatorship. 3,200+ killed. 40,000 tortured.' },
  { id: 'bay-of-pigs', country: 'Cuba', year: 1961, method: 'Failed CIA invasion', leader: 'Target: Castro', blowback: 'Pushed Cuba toward USSR. Cuban Missile Crisis. 60+ years of failed embargo.' },
  { id: 'dominican-republic-1965', country: 'Dominican Republic', year: 1965, method: 'Military intervention', leader: 'Elected leader → US-backed regime', blowback: 'Decades of authoritarian rule.' },
  { id: 'libya', country: 'Libya', year: 2011, method: 'NATO bombing campaign', leader: 'Gaddafi → State collapse', blowback: 'Failed state. Open-air slave markets. ISIS stronghold. Migration crisis.' },
  { id: 'iraq-war', country: 'Iraq', year: 2003, method: 'Full-scale invasion', leader: 'Saddam Hussein → Sectarian chaos', blowback: 'ISIS. 300,000+ civilian deaths. Iran empowered. $2 trillion spent.' },
  { id: 'afghanistan', country: 'Afghanistan', year: 2001, method: 'Full-scale invasion + 20-year occupation', leader: 'Taliban → Taliban (again)', blowback: '$2.3 trillion. 176,000 dead. Taliban returned to power in 2021.' },
]

export default function RegimeChangesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Regime Changes' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US-Backed Regime Changes</h1>
      <p className="text-muted mb-6">When the US overthrows governments, the consequences last decades.</p>
      <ShareButtons title="US-Backed Regime Changes" />

      <div className="space-y-6 mt-8">
        {regimeChanges.map(r => (
          <Link key={r.id} href={`/conflicts/${r.id}`} className="block bg-white rounded-lg border p-6 hover:shadow-md transition">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">{r.country}</h2>
              <span className="text-muted">{r.year}</span>
            </div>
            <p className="text-sm mb-2"><strong>Method:</strong> {r.method}</p>
            <p className="text-sm mb-2"><strong>Leadership:</strong> {r.leader}</p>
            <p className="text-sm text-red-700"><strong>Blowback:</strong> {r.blowback}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
