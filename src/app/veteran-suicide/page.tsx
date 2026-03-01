import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Veteran Suicide — 17 Per Day | WarCosts',
  description: 'An average of 17 veterans die by suicide every day in America. Suicide is the #2 cause of death for post-9/11 veterans. 4x more veterans die by suicide than in combat.',
  keywords: ['veteran suicide', 'veteran suicide rate', 'veteran suicide statistics', 'PTSD veterans'],
}

export default function VeteranSuicidePage() {
  const stats = loadData('stats.json')
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Veteran Suicide' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">Veteran Suicide</h1>
      <p className="text-red-800 font-bold text-xl mb-4">17 veterans die by suicide every day.</p>
      <ShareButtons title="Veteran Suicide — 17 Per Day" />

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">17</p>
          <p className="text-stone-600 text-sm">Veterans lost per day</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">4×</p>
          <p className="text-stone-600 text-sm">More die by suicide than combat</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">#2</p>
          <p className="text-stone-600 text-sm">Cause of death, post-9/11 vets</p>
        </div>
      </div>

      <div className="prose max-w-3xl text-stone-600 space-y-6">
        <h2 className="font-[family-name:var(--font-heading)]">The Silent Epidemic</h2>
        <p>
          More American veterans have died by suicide since 9/11 than were killed in the
          entire War on Terror. This is not a statistic — it is a national emergency.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">PTSD by War Era</h2>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-white rounded-lg border p-5">
            <p className="text-2xl font-bold text-red-800">{stats.veteranPTSDrateIraqAfghan}%</p>
            <p className="text-stone-600">Iraq/Afghanistan veterans with PTSD</p>
          </div>
          <div className="bg-white rounded-lg border p-5">
            <p className="text-2xl font-bold text-red-800">{stats.veteranPTSDrateVietnam}%</p>
            <p className="text-stone-600">Vietnam veterans with PTSD (lifetime)</p>
          </div>
        </div>

        <div className="not-prose bg-stone-100 rounded-xl p-5 border my-4">
          <p className="text-sm text-stone-500">The broader context</p>
          <p className="text-2xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{(stats.warOnTerrorTotalDeaths / 1e6).toFixed(1)}M</p>
          <p className="text-stone-600">total deaths from the War on Terror — the trauma that feeds this epidemic</p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The Numbers</h2>
        <ul>
          <li>Over <strong>6,200 veteran suicides per year</strong></li>
          <li>Veteran suicide rate is <strong>57% higher</strong> than non-veteran adults</li>
          <li>Female veteran suicide rate has <strong>increased 166%</strong> since 2001</li>
          <li>Veterans aged 18-34 have the <strong>highest rate</strong> of any age group</li>
          <li>Only <strong>50%</strong> of veterans needing mental health care seek treatment</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">The War Doesn&apos;t End</h2>
        <p>
          We send young people to war, expose them to unimaginable trauma, and then fail to care
          for them when they return. The VA is chronically underfunded, wait times stretch for months,
          and the bureaucracy can be its own kind of warfare.
        </p>
        <p>
          For every soldier killed in post-9/11 wars, roughly <strong>four veterans have taken their
          own lives</strong>. The true cost of war isn&apos;t measured only in dollars — it&apos;s measured
          in the lives destroyed long after the fighting stops.
        </p>

        <div className="not-prose bg-stone-100 rounded-xl p-6 border my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">If You or Someone You Know Needs Help</h3>
          <p className="text-stone-600 mb-4">
            The Veterans Crisis Line is available 24/7 for veterans, service members, and their families.
          </p>
          <div className="space-y-2">
            <p><strong>📞 Call:</strong> <a href="tel:988" className="text-red-800 font-bold">988</a> (then press 1)</p>
            <p><strong>💬 Text:</strong> <span className="font-bold">838255</span></p>
            <p><strong>🌐 Chat:</strong> <a href="https://www.veteranscrisisline.net/get-help-now/chat/" className="text-red-800 underline" target="_blank" rel="noopener noreferrer">VeteransCrisisLine.net</a></p>
          </div>
        </div>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The willingness with which our young people are likely to serve in any war, no matter how justified,
          shall be directly proportional to how they perceive veterans of earlier wars were treated and appreciated by our nation.&rdquo;
          <br />— George Washington
        </blockquote>
      </div>

      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/the-aftermath" className="text-red-800 hover:underline">→ The Aftermath — War doesn&apos;t end when troops come home</Link></li>
          <li><Link href="/analysis/human-cost" className="text-red-800 hover:underline">→ The Human Cost of War</Link></li>
          <li><Link href="/casualties" className="text-red-800 hover:underline">→ Casualty data by conflict</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
