import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Blowback — How US Interventions Create Future Enemies | WarCosts',
  description: 'The CIA coined the term "blowback" for unintended consequences of covert operations. Iran, Afghanistan, Iraq, Syria — the pattern repeats.',
}

const cases = [
  { title: 'Iran: 1953 → 1979 → Today', conflict: 'iran-1953', action: 'CIA overthrows democratically elected PM Mossadegh, installs Shah.', consequence: '26 years of dictatorship → 1979 Islamic Revolution → hostage crisis → 45+ years of hostility → nuclear standoff → potential 2026 war. The 1953 coup is a direct cause of every US-Iran crisis since.' },
  { title: 'Afghanistan: 1980s → 2001 → 2021', conflict: 'afghanistan', action: 'CIA funds $3B+ to arm mujahideen including foreign fighters like Osama bin Laden.', consequence: 'Mujahideen → Taliban → Al-Qaeda → 9/11 → 20-year war costing $2.3T → chaotic withdrawal → Taliban retakes power. The US armed and trained the people who would attack it 20 years later.' },
  { title: 'Iraq: 2003 → ISIS → Regional Chaos', conflict: 'iraq-war', action: 'US invades on false WMD claims, disbands Iraqi military (400K armed men), creates power vacuum.', consequence: '300,000+ civilians dead. Disbanded soldiers join insurgency → ISIS rises with captured US weapons → controls territory across Iraq and Syria → requires another war to defeat → Iran fills the power vacuum. Every predicted consequence materialized.' },
  { title: 'Libya: 2011 → Failed State', conflict: 'libya', action: 'NATO bombs Libya, removes Gaddafi with zero post-war plan.', consequence: 'State collapse. Open-air slave markets. Weapons flow to extremists across North Africa (including to groups that attacked the Benghazi consulate). Migration crisis destabilizes Europe. Libya remains a failed state 14 years later.' },
  { title: 'Syria: 2011 → Ongoing Catastrophe', conflict: 'syria', action: 'CIA arms "moderate rebels" (Operation Timber Sycamore, $1B+). Weapons end up in jihadist hands. US also arms Kurds, angering NATO ally Turkey.', consequence: '500,000+ dead. 13 million displaced. Chemical weapons use. Russia and Iran expand influence. Turkey invades US-allied Kurdish areas. ISIS emerges in the chaos. America simultaneously armed multiple opposing factions.' },
  { title: 'Guatemala: 1954 → Civil War → Migration', conflict: 'guatemala-1954', action: 'CIA overthrows democratically elected Árbenz to protect United Fruit Company profits.', consequence: '36-year civil war, 200,000 dead (mostly indigenous Maya), UN-documented genocide, ongoing instability driving migration to US border. Americans who complain about Central American migration are living with the consequences of the 1954 coup.' },
  { title: 'Chile: 1973 → Pinochet', conflict: 'chile-1973', action: 'CIA supports military coup against elected President Allende.', consequence: '17-year dictatorship under Pinochet. 3,200 murdered, 40,000 tortured, 200,000 exiled. Declassified documents show Kissinger personally approved destabilization operations.' },
]

export default function BlowbackPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Blowback' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Blowback</h1>
      <p className="text-muted mb-6">&ldquo;Blowback&rdquo; — the CIA&apos;s own term for the unintended consequences of covert operations. The pattern is devastatingly consistent: intervene today, fight the consequences for decades.</p>
      <ShareButtons title="Blowback: How US Interventions Create Future Enemies" />

      <div className="prose prose-stone max-w-none my-8">
        <p>The term &ldquo;blowback&rdquo; was first used internally by the CIA in a classified post-action report on the 1953 Iranian coup. The concept is simple: covert actions have unintended consequences that &ldquo;blow back&rdquo; on the country that initiated them. It has since become the defining pattern of American foreign policy.</p>
        <p>Political scientist <strong>Chalmers Johnson</strong> popularized the concept in his 2000 book <em>Blowback: The Costs and Consequences of American Empire</em>, published one year before 9/11 proved his thesis in the most devastating way possible. Johnson warned that America&apos;s global military presence and covert interventions were creating enemies faster than they could be killed.</p>
        <p>Congressman <strong>Ron Paul</strong> brought the concept into mainstream political debate during the 2008 and 2012 presidential campaigns, arguing that &ldquo;they don&apos;t come here to attack us because we&apos;re rich and free; they come here to attack us because we&apos;re over there.&rdquo; He was booed at the time. The data supports his argument.</p>
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;A nation that sows the wind cannot expect to harvest calm.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Chalmers Johnson, <em>Blowback</em>, 2000</p>
      </div>

      {/* Cases */}
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

      {/* The Pattern */}
      <div className="bg-amber-50 rounded-xl p-8 mt-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">The Pattern</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <ol>
            <li><strong>Intervene</strong> — overthrow a government, arm a faction, bomb a country</li>
            <li><strong>Declare victory</strong> — announce mission accomplished, move on to next crisis</li>
            <li><strong>Destabilize</strong> — power vacuum creates chaos, extremists fill the void</li>
            <li><strong>Blowback arrives</strong> — terrorism, migration, failed states, new enemies</li>
            <li><strong>Intervene again</strong> — use the blowback as justification for new intervention</li>
            <li><strong>Repeat</strong></li>
          </ol>
          <p>This cycle has been running since 1953. It has never produced lasting stability. It has produced: ISIS, Al-Qaeda, the Taliban, the Iranian Revolution, Central American migration crises, and the permanent &ldquo;War on Terror.&rdquo;</p>
        </div>
      </div>

      {/* Ron Paul quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mt-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;They don&apos;t come here to attack us because we&apos;re rich and free. They come and attack us because we&apos;re over there.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Ron Paul, 2007 Republican Presidential Debate</p>
        <p className="text-stone-500 text-sm mt-2">He was booed by the audience. 9/11 Commission co-chair Lee Hamilton later confirmed: &ldquo;That&apos;s exactly right.&rdquo;</p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• Osama bin Laden cited <strong>three specific grievances</strong> for 9/11: US troops in Saudi Arabia, US support for Israel, and US sanctions killing Iraqi children. All were US foreign policy choices.</li>
          <li>• The CIA armed the same Afghan fighters in the 1980s who later became the <strong>Taliban and Al-Qaeda</strong>.</li>
          <li>• ISIS fighters in 2014 were driving <strong>American Humvees and firing American weapons</strong> captured from the Iraqi army the US had built.</li>
          <li>• The weapons the CIA sent to &ldquo;moderate rebels&rdquo; in Syria ended up with <strong>Al-Qaeda affiliates</strong> — documented by journalists and the Pentagon&apos;s own inspector general.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/covert" className="text-red-800 hover:underline">→ Covert Operations — the full list</Link></li>
          <li><Link href="/analysis/forever-wars" className="text-red-800 hover:underline">→ Forever Wars — why they never end</Link></li>
          <li><Link href="/analysis/war-on-terror" className="text-red-800 hover:underline">→ The War on Terror — 20+ years and counting</Link></li>
        </ul>
      </div>
    </div>
  )
}
