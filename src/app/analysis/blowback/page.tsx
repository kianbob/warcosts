import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Blowback — How US Interventions Create Future Enemies',
  description: 'The CIA coined the term "blowback" for unintended consequences of covert operations. Iran, Afghanistan, Iraq — the pattern repeats.',
}

const cases = [
  { title: 'Iran: 1953 → 1979', conflict: 'iran-1953', action: 'CIA overthrows democratically elected PM Mossadegh, installs Shah.', consequence: '26 years of dictatorship → 1979 Islamic Revolution → 45+ years of hostility, hostage crisis, nuclear standoff.' },
  { title: 'Afghanistan: 1980s → 2001', conflict: 'afghanistan', action: 'CIA funds and arms mujahideen to fight Soviets, including foreign fighters like Osama bin Laden.', consequence: 'Mujahideen → Taliban → Al-Qaeda → 9/11 → 20-year war costing $2.3 trillion.' },
  { title: 'Iraq: 2003 → ISIS', conflict: 'iraq-war', action: 'US invades, disbands Iraqi military, creates power vacuum.', consequence: '300,000+ civilians dead. Disbanded soldiers join insurgency → ISIS rises → controls territory across Iraq and Syria.' },
  { title: 'Libya: 2011 → Failed State', conflict: 'libya', action: 'NATO bombs Libya, removes Gaddafi with no plan for what comes next.', consequence: 'State collapse. Open-air slave markets. Weapons flow to extremists across North Africa. Migration crisis.' },
  { title: 'Guatemala: 1954 → Civil War', conflict: 'guatemala-1954', action: 'CIA overthrows democratically elected Árbenz to protect United Fruit Company.', consequence: '36-year civil war, 200,000 dead (mostly indigenous Maya), ongoing instability driving migration to US border.' },
  { title: 'Chile: 1973 → Pinochet', conflict: 'chile-1973', action: 'CIA supports military coup against elected President Allende.', consequence: '17-year dictatorship under Pinochet. 3,200 murdered, 40,000 tortured, 200,000 exiled.' },
]

export default function BlowbackPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Blowback' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Blowback</h1>
      <p className="text-muted mb-6">&ldquo;Blowback&rdquo; — the CIA&apos;s own term for the unintended consequences of covert operations. The pattern is consistent: intervene today, fight the consequences for decades.</p>
      <ShareButtons title="Blowback: How US Interventions Create Enemies" />

      <div className="prose prose-stone max-w-none my-8">
        <p>The term &ldquo;blowback&rdquo; was first used internally by the CIA in a classified post-action report on the 1953 Iranian coup. It has since become the defining pattern of American foreign policy: short-term tactical gains that create long-term strategic disasters.</p>
      </div>

      <div className="space-y-8">
        {cases.map(c => (
          <div key={c.title} className="bg-white rounded-lg border p-6">
            <Link href={`/conflicts/${c.conflict}`}>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 hover:text-primary">{c.title}</h2>
            </Link>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-stone-50 rounded p-4">
                <p className="text-xs font-semibold text-muted uppercase mb-1">Action</p>
                <p className="text-sm">{c.action}</p>
              </div>
              <div className="bg-red-50 rounded p-4 border border-red-200">
                <p className="text-xs font-semibold text-red-600 uppercase mb-1">Blowback</p>
                <p className="text-sm">{c.consequence}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-stone-900 text-white rounded-xl p-8 mt-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;They will welcome us as liberators.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Vice President Dick Cheney on Iraq, March 2003</p>
        <p className="text-stone-500 text-sm mt-2">300,000+ civilian deaths later, the liberation is still ongoing.</p>
      </div>
    </div>
  )
}
