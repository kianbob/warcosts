import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Iran War Casualties: A Complete Tracker — WarCosts.org',
  description: 'Complete casualty tracker for Operation Epic Fury. 3,300+ killed in Iran, 1,110+ in Lebanon, 15 US dead, 303 US wounded. Updated daily with sourced numbers from HRANA, Pentagon, and health ministries.',
  keywords: ['iran war casualties', 'iran war death toll', 'operation epic fury casualties', 'iran civilian deaths', 'iran war killed'],
  openGraph: {
    title: 'Iran War Casualties: A Complete Tracker',
    description: '3,300+ killed in Iran. 1,492 civilians. 210+ children. 3.2M displaced. 168 children at Minab school. Every number sourced.',
    url: 'https://www.warcosts.org/analysis/iran-war-casualties',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iran War Casualties Tracker',
    description: '3,300+ killed. 24,800+ injured. 3.2M displaced. 168 children killed at one school. Every number cited.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/iran-war-casualties',
  },
}

export default function IranWarCasualtiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Iran War Casualties: A Complete Tracker',
            description: 'A comprehensive, sourced tracker of all casualties in Operation Epic Fury across all countries.',
            datePublished: '2026-03-05T00:00:00Z',
            dateModified: '2026-03-27T22:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/iran-war-casualties' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Iran War Casualties' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Casualty Tracker — Updated March 27, 2026 (Day 28)</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Iran War Casualties
        </h1>
        <p className="text-xl text-stone-300 mb-4">A Complete Tracker — Every Number Sourced</p>
        <p className="text-stone-400 text-lg">
          This page tracks every confirmed death, injury, and displacement across all countries involved
          in Operation Epic Fury. Numbers are sourced from HRANA (Human Rights Activists News Agency),
          the Pentagon, national health ministries, UNHCR, and verified media reports. When numbers conflict,
          we cite the range.
        </p>
      </div>

      <ShareButtons title="Iran War Casualties: A Complete Tracker" />

      {/* Total Summary */}
      <div className="bg-stone-900 border border-red-900/60 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3 mb-5">
          <span className="text-2xl">📊</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">Combined Totals — Day 28</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">4,494+</div>
            <div className="text-stone-400 text-sm">Total Killed (All Countries)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">33,451+</div>
            <div className="text-stone-400 text-sm">Total Wounded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">4.2M+</div>
            <div className="text-stone-400 text-sm">Total Displaced</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">331+</div>
            <div className="text-stone-400 text-sm">Children Killed</div>
          </div>
        </div>
        <p className="text-stone-500 text-xs mt-4">Sources: HRANA, Pentagon, Lebanese Health Ministry, Israeli MOH, UNHCR, Gulf state health ministries</p>
      </div>

      {/* Iran */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          🇮🇷 Iran
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border-2 border-red-200 rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-red-600">3,300+</div>
            <div className="text-stone-600 text-sm">Killed (HRANA)</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-stone-900">24,800+</div>
            <div className="text-stone-600 text-sm">Injured</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-stone-900">3.2M</div>
            <div className="text-stone-600 text-sm">Displaced</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-3">Civilian Toll</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-red-600">1,492+</div>
                <div className="text-stone-500 text-sm">Civilians Killed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">210+</div>
                <div className="text-stone-500 text-sm">Children Killed</div>
              </div>
            </div>
            <p className="text-stone-600 mt-4 text-sm">
              HRANA has documented 1,492 civilian deaths with names and locations. The actual number is
              likely significantly higher — communications infrastructure across western Iran has been
              destroyed, making documentation difficult. Iranian state media claims over 5,000 civilian deaths,
              but this figure cannot be independently verified.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: HRANA (Human Rights Activists News Agency) daily casualty reports</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-3">Infrastructure Destroyed</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-xl font-bold text-stone-900">70,000</div>
                <div className="text-stone-500 text-sm">Homes Damaged</div>
              </div>
              <div>
                <div className="text-xl font-bold text-stone-900">300</div>
                <div className="text-stone-500 text-sm">Health Facilities</div>
              </div>
              <div>
                <div className="text-xl font-bold text-stone-900">600</div>
                <div className="text-stone-500 text-sm">Schools</div>
              </div>
              <div>
                <div className="text-xl font-bold text-stone-900">120</div>
                <div className="text-stone-500 text-sm">Cultural Sites</div>
              </div>
            </div>
            <p className="text-stone-600 mt-4 text-sm">
              The destruction of 300 health facilities has crippled Iran&apos;s ability to treat the wounded.
              WHO has warned that hospitals in Isfahan, Shiraz, and Bandar Abbas are overwhelmed. The
              destruction of 600 schools — most empty at time of strikes, but not all — has displaced
              the education of an estimated 2 million children.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: WHO situation reports; UNESCO preliminary damage assessment; HRANA infrastructure tracker</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-3">Displacement</h3>
            <p className="text-stone-600 text-sm">
              <strong>3.2 million Iranians have been displaced</strong> in 28 days — primarily from Tehran,
              Isfahan, Bandar Abbas, and coastal cities near military targets. Most have fled to rural areas
              or eastern provinces far from strike zones. Iran&apos;s neighbors Turkey and Iraq have received
              ~200,000 refugees. UNHCR is establishing camps but warns of inadequate international funding.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: UNHCR; Iranian Red Crescent; OCHA situation reports</p>
          </div>
        </div>
      </section>

      {/* Minab School */}
      <section className="my-12">
        <div className="bg-red-950 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
            The Minab School Massacre — Day 20 (March 19)
          </h2>
          <p className="text-stone-300 mb-4">
            On the morning of March 19, a US airstrike hit the Shahid Rajaei Elementary School in Minab,
            Hormozgan Province. The Pentagon stated the building had been identified as an IRGC command post.
            <strong className="text-red-400"> 168 children were killed</strong>, ages 7 to 12.
          </p>
          <p className="text-stone-300 mb-4">
            Satellite imagery later confirmed the building was an active school with a playground, library,
            and no military equipment visible. The Pentagon initially disputed the civilian toll, then
            acknowledged &quot;the possibility of civilian presence&quot; and announced an investigation.
          </p>
          <ul className="space-y-2 text-stone-300">
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span><strong>168 children killed</strong> (ages 7-12)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span><strong>14 teachers and staff killed</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span><strong>85+ children wounded</strong>, many critically</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>UN Secretary-General called it &quot;unconscionable&quot;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>ICC prosecutor announced a preliminary investigation</span>
            </li>
          </ul>
          <p className="text-stone-300 mt-4">
            For comparison: the Amiriyah shelter bombing in the 1991 Gulf War killed 408 civilians and
            became one of the defining atrocities of that conflict. The Minab school massacre has become
            the defining image of Operation Epic Fury worldwide.
          </p>
          <p className="text-stone-500 text-xs mt-3">Source: HRANA; UNICEF; Pentagon press briefing (Mar 20); Planet Labs satellite imagery analysis</p>
        </div>
      </section>

      {/* Lebanon */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          🇱🇧 Lebanon
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border-2 border-red-200 rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-red-600">1,110+</div>
            <div className="text-stone-600 text-sm">Killed</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-stone-900">3,119</div>
            <div className="text-stone-600 text-sm">Wounded</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-stone-900">1M+</div>
            <div className="text-stone-600 text-sm">Displaced</div>
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-lg p-5">
          <p className="text-stone-600 text-sm mb-3">
            Israel launched its own campaign against Hezbollah in southern Lebanon simultaneous with
            US strikes on Iran, framing it as part of the broader conflict. Lebanese Health Ministry
            data shows:
          </p>
          <ul className="space-y-2 text-stone-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-600">▸</span>
              <span><strong>1,110+ killed</strong> — including 121 children</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">▸</span>
              <span><strong>3,119 wounded</strong> — hospitals in Beirut, Sidon, and Tyre at capacity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">▸</span>
              <span><strong>1 million+ displaced</strong> — primarily from southern Lebanon and Bekaa Valley</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">▸</span>
              <span>Beirut&apos;s Dahiyeh district struck repeatedly — the same area devastated in 2006</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">▸</span>
              <span>Lebanon was already in economic collapse before the war — GDP had contracted 60% since 2019</span>
            </li>
          </ul>
          <p className="text-stone-500 text-xs mt-3">Source: Lebanese Ministry of Public Health; UNHCR Lebanon; OCHA</p>
        </div>
      </section>

      {/* Israel */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          🇮🇱 Israel
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border-2 border-red-200 rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-red-600">19</div>
            <div className="text-stone-600 text-sm">Killed</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-stone-900">5,229</div>
            <div className="text-stone-600 text-sm">Wounded</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-stone-900">4,292</div>
            <div className="text-stone-600 text-sm">Wounded (incl. Dimona)</div>
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-lg p-5">
          <p className="text-stone-600 text-sm mb-3">
            Iran&apos;s retaliatory ballistic missile strikes on Day 2 targeted Israeli military bases and
            the Dimona nuclear facility. Israel&apos;s multi-layered missile defense (Arrow, David&apos;s Sling,
            Iron Dome) intercepted most incoming missiles, but several got through:
          </p>
          <ul className="space-y-2 text-stone-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-600">▸</span>
              <span><strong>19 killed</strong> — including 7 at Nevatim Air Base and 4 civilians near Dimona</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">▸</span>
              <span><strong>5,229 total wounded</strong> — including blast injuries, shrapnel, and falling debris from intercepts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">▸</span>
              <span><strong>Dimona facility damage</strong> — missile impact near (not on) the reactor; 4,292 wounded in
              surrounding area from blast effects and debris. Full damage assessment classified.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">▸</span>
              <span>Hezbollah rocket attacks from Lebanon added ~200 casualties in northern Israel</span>
            </li>
          </ul>
          <p className="text-stone-500 text-xs mt-3">Source: Israeli Ministry of Health; IDF spokesperson; Magen David Adom emergency service data</p>
        </div>
      </section>

      {/* United States */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          🇺🇸 United States
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border-2 border-red-200 rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-red-600">15</div>
            <div className="text-stone-600 text-sm">Dead (13 KIA + 2 Non-Combat)</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-stone-900">303</div>
            <div className="text-stone-600 text-sm">Wounded</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-stone-900">0</div>
            <div className="text-stone-600 text-sm">Ground Troops Deployed</div>
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-lg p-5">
          <h3 className="font-bold text-stone-900 mb-3">US Casualties by Incident</h3>
          <div className="space-y-3">
            <div className="border-b border-stone-100 pb-3">
              <div className="flex justify-between">
                <span className="font-medium text-stone-900 text-sm">Day 2 — Iranian missile strike on Al Udeid AB, Qatar</span>
                <span className="text-red-600 text-sm font-bold">3 KIA, 28 wounded</span>
              </div>
            </div>
            <div className="border-b border-stone-100 pb-3">
              <div className="flex justify-between">
                <span className="font-medium text-stone-900 text-sm">Day 3 — Friendly fire incident (F/A-18 misidentification)</span>
                <span className="text-red-600 text-sm font-bold">3 KIA, 6 wounded</span>
              </div>
            </div>
            <div className="border-b border-stone-100 pb-3">
              <div className="flex justify-between">
                <span className="font-medium text-stone-900 text-sm">Day 5 — Houthi anti-ship missile strike on USS Gravely</span>
                <span className="text-red-600 text-sm font-bold">4 KIA, 18 wounded</span>
              </div>
            </div>
            <div className="border-b border-stone-100 pb-3">
              <div className="flex justify-between">
                <span className="font-medium text-stone-900 text-sm">Day 7 — IRGC fast boat swarm attack, Persian Gulf</span>
                <span className="text-red-600 text-sm font-bold">3 KIA, 12 wounded</span>
              </div>
            </div>
            <div className="border-b border-stone-100 pb-3">
              <div className="flex justify-between">
                <span className="font-medium text-stone-900 text-sm">Day 13 — KC-135 tanker crash in Iraq (non-combat)</span>
                <span className="text-red-600 text-sm font-bold">2 dead, 4 injured</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="font-medium text-stone-900 text-sm">Days 14-28 — Various incidents (classified)</span>
                <span className="text-red-600 text-sm font-bold">0 KIA, 235 wounded</span>
              </div>
              <p className="text-stone-500 text-xs mt-1">Pentagon has not provided detailed breakdowns for Days 14-28. 235 wounded includes personnel at Gulf bases hit by Iranian missile and drone attacks.</p>
            </div>
          </div>
          <p className="text-stone-500 text-xs mt-4">Source: Pentagon casualty reports; CENTCOM press briefings; DOD press releases</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
          <p className="text-amber-800 text-sm">
            <strong>Context:</strong> 15 US dead in 28 days compares to 65 US KIA in the first month of Iraq
            (March 2003) and 12 US KIA in the first month of Afghanistan (October 2001). The lower number reflects
            the air-only nature of the campaign — but the 303 wounded figure includes traumatic brain injuries
            from blast effects that may not be fully documented for months.
          </p>
        </div>
      </section>

      {/* Gulf States */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          🌍 Gulf States
        </h2>

        <div className="bg-white border border-stone-200 rounded-lg p-5">
          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-red-600">50+</div>
            <div className="text-stone-600 text-sm">Killed Across UAE, Bahrain, Kuwait, Saudi Arabia, Qatar</div>
          </div>

          <div className="space-y-3">
            <div className="border-b border-stone-100 pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-medium text-stone-900">🇧🇭 Bahrain</span>
                  <p className="text-stone-500 text-xs">Home to US 5th Fleet — direct Iranian missile strikes on Isa AB</p>
                </div>
                <span className="text-red-600 text-sm font-bold">18 killed</span>
              </div>
            </div>
            <div className="border-b border-stone-100 pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-medium text-stone-900">🇦🇪 UAE</span>
                  <p className="text-stone-500 text-xs">Iranian missiles targeted Al Dhafra AB; port facilities in Fujairah hit</p>
                </div>
                <span className="text-red-600 text-sm font-bold">14 killed</span>
              </div>
            </div>
            <div className="border-b border-stone-100 pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-medium text-stone-900">🇸🇦 Saudi Arabia</span>
                  <p className="text-stone-500 text-xs">Houthi attacks on eastern oil facilities; Embassy Riyadh rocket attack</p>
                </div>
                <span className="text-red-600 text-sm font-bold">10 killed</span>
              </div>
            </div>
            <div className="border-b border-stone-100 pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-medium text-stone-900">🇶🇦 Qatar</span>
                  <p className="text-stone-500 text-xs">Al Udeid AB missile strikes; Qatar joined strikes on Iran Day 4</p>
                </div>
                <span className="text-red-600 text-sm font-bold">5 killed</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-medium text-stone-900">🇰🇼 Kuwait</span>
                  <p className="text-stone-500 text-xs">Ali Al Salem AB targeted; militia rocket attacks from Iraq</p>
                </div>
                <span className="text-red-600 text-sm font-bold">3 killed</span>
              </div>
            </div>
          </div>
          <p className="text-stone-500 text-xs mt-4">Source: National health ministries; Gulf state defense ministry statements; Al Jazeera, Reuters reporting</p>
        </div>
      </section>

      {/* Historical Comparison */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          First-Month Casualties: War-by-War Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-stone-200 rounded-lg overflow-hidden text-sm">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="text-left p-3">War</th>
                <th className="text-left p-3">US Dead</th>
                <th className="text-left p-3">Enemy Dead</th>
                <th className="text-left p-3">Civilian Dead</th>
                <th className="text-left p-3">Displaced</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="p-3 font-medium text-red-600">Iran (2026) — 28 days</td>
                <td className="p-3 text-red-600 font-bold">15</td>
                <td className="p-3 text-red-600 font-bold">~1,800</td>
                <td className="p-3 text-red-600 font-bold">1,492+</td>
                <td className="p-3 text-red-600 font-bold">3.2M</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Iraq (2003) — 30 days</td>
                <td className="p-3 text-stone-600">65</td>
                <td className="p-3 text-stone-600">~9,200</td>
                <td className="p-3 text-stone-600">~7,186</td>
                <td className="p-3 text-stone-600">~1M</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-900">Afghanistan (2001) — 30 days</td>
                <td className="p-3 text-stone-600">12</td>
                <td className="p-3 text-stone-600">~1,500</td>
                <td className="p-3 text-stone-600">~1,000</td>
                <td className="p-3 text-stone-600">~500K</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">Gulf War (1991) — 43 days total</td>
                <td className="p-3 text-stone-600">148</td>
                <td className="p-3 text-stone-600">~25,000</td>
                <td className="p-3 text-stone-600">~3,664</td>
                <td className="p-3 text-stone-600">~1.8M</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-stone-500 text-xs mt-3">
          Sources: CBO; Iraq Body Count; Brown University Costs of War; DOD casualty reports; UNHCR displacement data.
          Iran civilian figures from HRANA; enemy combatant estimate based on CENTCOM strike data and IISS force structure analysis.
        </p>
      </section>

      {/* The Numbers We Don't Have */}
      <section className="my-12">
        <div className="bg-stone-100 border-l-4 border-red-600 rounded-r-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">
            The Numbers We Don&apos;t Have
          </h2>
          <p className="text-stone-700 mb-4">
            Every casualty figure on this page is an undercount. Here&apos;s why:
          </p>
          <ul className="space-y-2 text-stone-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">1.</span>
              <span><strong>Iran&apos;s communications are degraded.</strong> US strikes have destroyed cell towers,
              internet infrastructure, and power grids across western Iran. Many deaths are unrecorded.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">2.</span>
              <span><strong>The Pentagon classifies many incidents.</strong> The 235 US wounded from Days 14-28
              come with no detailed breakdown. Traumatic brain injuries are systematically undercounted.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">3.</span>
              <span><strong>Indirect deaths aren&apos;t counted.</strong> Hospitals destroyed. Medicine unavailable.
              Chronic patients without treatment. These deaths — likely in the thousands — appear nowhere.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">4.</span>
              <span><strong>Gulf state casualties are opaque.</strong> Bahrain, UAE, and others have not provided
              detailed civilian casualty breakdowns. The &quot;50+ killed&quot; figure is conservative.</span>
            </li>
          </ul>
          <p className="text-stone-700 mt-4">
            The Iraq War&apos;s true death toll wasn&apos;t understood for years. A 2006 Lancet study estimated
            655,000 excess deaths — 10x the official count at the time. The Iran War&apos;s true toll will take
            years to document. What we know now is a floor, not a ceiling.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/iran-day-by-day" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran 2026: Day by Day →</div>
            <div className="text-stone-500 text-sm">Complete timeline with daily casualty updates</div>
          </Link>
          <Link href="/analysis/iran-civilian-cost" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">The Civilian Cost →</div>
            <div className="text-stone-500 text-sm">Deep dive into civilian impact in Iran</div>
          </Link>
          <Link href="/analysis/iran-vs-iraq-war" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran War vs Iraq War →</div>
            <div className="text-stone-500 text-sm">Side-by-side comparison including casualties</div>
          </Link>
          <Link href="/analysis/iran-war-cost-breakdown" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran War Cost Breakdown →</div>
            <div className="text-stone-500 text-sm">The financial cost — $51.2B and counting</div>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
