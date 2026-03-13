import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The $21,800-Per-Second War: What Iran Is Costing America | WarCosts',
  description: 'Pentagon told Congress: $11.3 BILLION in the first 6 days. That\'s $1.88 billion per day. $78.3 million per hour. $1.3 million per minute. $21,800 per second. Every Tomahawk, every B-2 sortie, every interceptor — priced, sourced, and compared to what that money could buy at home.',
  openGraph: {
    title: 'The $21,800-Per-Second War: What Iran Is Costing America',
    description: 'Pentagon confirmed: $11.3B in 6 days. $1.88 billion per day. $78.3 million per hour. $21,800 per second. Updated March 12, 2026.',
    url: 'https://www.warcosts.org/analysis/iran-cost-per-second',
  },
}

/* ── Munition cost table ── */
const munitions = [
  { name: 'Tomahawk Block V (TLAM)', unit: '$2.5M', qty: '400+', total: '$1.0B+', note: 'FY2026 unit cost. Range: $1.75M–$4.1M depending on variant. Lockheed Martin / RTX.' },
  { name: 'JASSM-ER (AGM-158B)', unit: '$1.36M', qty: '200+', total: '$272M+', note: 'Stealthy cruise missile, 575+ mile range. Lockheed Martin. Used by B-2s and F-15Es.' },
  { name: 'GBU-57 MOP (Massive Ordnance Penetrator)', unit: '$3.5M', qty: '20+', total: '$70M+', note: '30,000-lb bunker buster. Only deliverable by B-2. Used against Fordow and buried sites.' },
  { name: 'JDAM (GBU-31/32/38)', unit: '$25K–$40K', qty: '3,000+', total: '$75M–$120M', note: 'GPS-guided kit on Mk 82/83/84 bombs. Boeing. Workhorse of the campaign.' },
  { name: 'SDB II (GBU-53/B StormBreaker)', unit: '$40K', qty: '500+', total: '$20M+', note: 'Small Diameter Bomb with tri-mode seeker. RTX. Used by F-35s.' },
  { name: 'SM-6 (Standard Missile 6)', unit: '$4.3M', qty: '100+', total: '$430M+', note: 'Ship-launched anti-air/anti-missile. RTX. Defending carrier groups from Iranian ballistic missiles.' },
  { name: 'SM-3 Block IIA', unit: '$36M', qty: '20+', total: '$720M+', note: 'Ballistic missile interceptor. RTX/Mitsubishi. Each intercept costs more than most Iranian missiles.' },
  { name: 'Patriot PAC-3 MSE', unit: '$4M', qty: '150+', total: '$600M+', note: 'Lockheed Martin. Defending bases across 7+ countries from Iranian missile/drone salvos.' },
  { name: 'AIM-120D AMRAAM', unit: '$1.1M', qty: '50+', total: '$55M+', note: 'Air-to-air missile. RTX. Used by F-22s and F-35s against Iranian drones.' },
]

/* ── Platform operating costs ── */
const platforms = [
  { platform: 'Carrier Strike Group (Ford)', daily: '$7M', weekCost: '$49M', note: 'USS Gerald R. Ford CSG: carrier, air wing, 5 surface combatants, 1 submarine, 6,700+ crew. Forbes/Naval Post estimate $6.5–$8M/day.' },
  { platform: 'Carrier Strike Group (Lincoln)', daily: '$6.5M', weekCost: '$45.5M', note: 'USS Abraham Lincoln CSG. Nimitz-class, slightly lower daily cost.' },
  { platform: 'B-2 Spirit sorties', daily: '$4.5M', weekCost: '$31.5M', note: '3+ B-2s flying 30-40hr round trips from Whiteman AFB, Missouri. $150K/hr flight cost × ~30hrs = $4.5M per sortie. DoD/Economy Insights.' },
  { platform: 'B-52H Stratofortress', daily: '$1.2M', weekCost: '$8.4M', note: '$70K/hr × ~17hrs per sortie from Diego Garcia. Multiple sorties per day during surge operations.' },
  { platform: 'F-35A/C operations', daily: '$8.4M', weekCost: '$58.8M', note: '~200 F-35 sorties/day at $42K/hr (CBO) × ~1hr average = $8.4M daily. Includes sorties from carriers and Gulf bases.' },
  { platform: 'F/A-18E/F Super Hornet', daily: '$3.6M', weekCost: '$25.2M', note: '~150 sorties/day at $24K/hr from both carriers.' },
  { platform: 'F-15E Strike Eagle', daily: '$2.5M', weekCost: '$17.5M', note: 'Operating from Al Dhafra (UAE) and Al Udeid (Qatar). $29K/hr, ~12hrs/day total flying.' },
  { platform: 'Ohio-class SSGN submarines', daily: '$1.5M', weekCost: '$10.5M', note: '2+ SSGNs launching Tomahawks. Each carries 154 TLAMs.' },
  { platform: 'Arleigh Burke destroyers (8+)', daily: '$2M', weekCost: '$14M', note: '8+ DDGs launching Tomahawks and providing Aegis missile defense. ~$250K/day each.' },
  { platform: 'Aerial refueling (KC-135/KC-46)', daily: '$2.8M', weekCost: '$19.6M', note: '40+ tanker sorties/day to support B-2, F-35, F-15E operations. $35K/hr per tanker.' },
  { platform: 'ISR (RC-135, RQ-4, MQ-9)', daily: '$3M', weekCost: '$21M', note: 'Signals intelligence, surveillance drones flying 24/7 orbits over Iran.' },
  { platform: 'Cyber operations (US Cyber Command)', daily: '$2M', weekCost: '$14M', note: 'Offensive cyber against Iranian air defense, communications, power grid. Estimated.' },
  { platform: 'Logistics and sealift', daily: '$5M', weekCost: '$35M', note: 'Ammunition ships, fleet oilers, C-17/C-5 airlift. Surge resupply from CONUS depots.' },
]

/* ── Opportunity costs ── */
const opportunities = [
  { cost: '$2.5M', warItem: '1 Tomahawk missile', civilianItem: 'Full 4-year college tuition for 62 students (at $40K/yr avg)' },
  { cost: '$4.3M', warItem: '1 SM-6 interceptor', civilianItem: '143 elementary school teachers\' annual salary ($30K)' },
  { cost: '$36M', warItem: '1 SM-3 Block IIA interceptor', civilianItem: '1 community hospital with 50 beds (construction cost)' },
  { cost: '$4.5M', warItem: '1 B-2 round-trip sortie', civilianItem: '90 homes for Habitat for Humanity ($50K each)' },
  { cost: '$1.88B', warItem: '1 day of Operation Epic Fury (Pentagon figure)', civilianItem: 'Clean water systems for 18.8 million people in developing nations' },
  { cost: '$11.3B', warItem: 'First 6 days (Pentagon confirmed)', civilianItem: 'Entire annual budget of the National Cancer Institute ($7.3B) + the CDC ($8.5B) combined' },
  { cost: '$24.5B', warItem: 'First 13 days (estimated through March 12)', civilianItem: 'More than the entire annual budget of NASA ($25.4B in FY2025)' },
  { cost: '$50–100B', warItem: 'Full campaign (if 2-3 months)', civilianItem: 'Universal pre-K for every American child for 5 years' },
]

export default function IranCostPerSecondPage() {
  const crumbs = [
    { label: 'Analysis', href: '/analysis' },
    { label: 'Iran: Cost Per Second', href: '/analysis/iran-cost-per-second' },
  ]

  const dailyCostEstimate = 1_883_000_000
  const perHour = Math.round(dailyCostEstimate / 24)
  const perMinute = Math.round(perHour / 60)
  const perSecond = Math.round(perMinute / 60)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={crumbs} />

      <div className="mb-6 flex items-center gap-3">
        <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● LIVE CONFLICT</span>
        <span className="text-sm text-stone-500">Updated March 12, 2026</span>
      </div>

      <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
        The $21,800-Per-Second War
      </h1>
      <p className="text-xl text-stone-600 mb-2">What Operation Epic Fury Is Costing America</p>
      <p className="text-stone-500 mb-8">The Pentagon told Congress: <strong>$11.3 billion in the first 6 days</strong>. That&apos;s $1.88 billion per day — 5.5x our original estimate. Every Tomahawk, every B-2 sortie, every interceptor — priced, sourced, and compared to what that money could buy at home.</p>

      <ShareButtons title="The $21,800-Per-Second War: What Iran Is Costing America" />

      {/* The Clock */}
      <section className="bg-stone-900 text-white rounded-xl p-8 my-8 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">The War Clock</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-red-500">${(dailyCostEstimate / 1_000_000).toFixed(0)}M</div>
            <div className="text-stone-400 text-sm">per day</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-red-500">${(perHour / 1_000_000).toFixed(1)}M</div>
            <div className="text-stone-400 text-sm">per hour</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-red-500">${(perMinute).toLocaleString()}</div>
            <div className="text-stone-400 text-sm">per minute</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-red-500">${(perSecond).toLocaleString()}</div>
            <div className="text-stone-400 text-sm">per second</div>
          </div>
        </div>
        <p className="text-stone-500 text-sm mt-4">Based on Pentagon&apos;s confirmed $11.3 billion for the first 6 days (reported to Congress on March 11, 2026). Our original estimate of $342M/day was 5.5x too low — proving once again that war always costs more than projected.</p>
      </section>

      {/* Methodology */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Methodology: How We Calculated This</h2>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-red-900">
          <strong>🚨 March 11 UPDATE — Pentagon confirmed costs:</strong> On March 11, the Pentagon told Congress that the first 6 days of Operation Epic Fury cost <strong>$11.3 billion</strong>. That&apos;s $1.88 billion per day — <strong>5.5 times higher</strong> than our original bottom-up estimate of $342 million/day. Our original estimate was based on publicly known unit costs and reported sortie rates. The discrepancy suggests either: (1) far more munitions were expended than CENTCOM publicly reported, (2) classified programs (cyber, special operations, intelligence) are enormously expensive, (3) logistics and deployment costs are far higher than peacetime estimates, or (4) all of the above. We have updated all figures on this page to reflect the Pentagon&apos;s confirmed numbers. The tables below still show the bottom-up methodology for transparency — but the headline numbers now use the Pentagon&apos;s own figure.
        </p>
      </div>

      <p className="mb-4">
        The first week of Operation Epic Fury — February 28 to March 6, 2026 — was the most intensive opening air campaign since
        Operation Iraqi Freedom in 2003. CENTCOM reported 2,500+ targets struck, with both US and Israeli forces conducting round-the-clock operations.
        The scale was staggering: 400+ Tomahawk cruise missiles launched, multiple B-2 Spirit sorties from Whiteman AFB (30+ hour round trips),
        hundreds of F-35 and F/A-18 sorties daily from two carrier strike groups, and a massive missile defense effort intercepting Iranian
        retaliatory salvos across seven countries.
      </p>

      {/* Munitions Table */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Munitions Expended: The $3.2 Billion Shopping List</h2>
      <p className="mb-4">
        Every bomb, missile, and interceptor has a price tag. In the first week alone, the US and coalition forces expended an estimated
        $3.2 billion in precision munitions. To put this in context: the entire US annual foreign aid budget to Africa is $8.5 billion.
        We spent a third of that in seven days of bombs.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left p-3 border-b font-semibold">Munition</th>
              <th className="text-right p-3 border-b font-semibold">Unit Cost</th>
              <th className="text-right p-3 border-b font-semibold">Est. Qty (Week 1)</th>
              <th className="text-right p-3 border-b font-semibold">Est. Total</th>
            </tr>
          </thead>
          <tbody>
            {munitions.map((m, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                <td className="p-3 border-b">
                  <div className="font-medium">{m.name}</div>
                  <div className="text-xs text-stone-500 mt-1">{m.note}</div>
                </td>
                <td className="p-3 border-b text-right font-mono">{m.unit}</td>
                <td className="p-3 border-b text-right font-mono">{m.qty}</td>
                <td className="p-3 border-b text-right font-mono font-semibold">{m.total}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-red-50">
              <td colSpan={3} className="p-3 border-t-2 border-red-200 font-bold">Estimated Munitions Total (Week 1)</td>
              <td className="p-3 border-t-2 border-red-200 text-right font-mono font-bold text-red-700">$3.24B+</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="bg-stone-100 rounded-lg p-4 mb-8">
        <h3 className="font-bold mb-2">The Interceptor Problem</h3>
        <p className="text-sm text-stone-700">
          The most financially devastating aspect of this war is missile defense. Each SM-3 Block IIA interceptor costs <strong>$36 million</strong>.
          Each Iranian Shahab-3 or Emad ballistic missile costs an estimated <strong>$500,000–$2 million</strong>. Iran is spending $2M to force
          the US to spend $36M. That&apos;s an 18:1 cost exchange ratio — in Iran&apos;s favor. At 20+ intercepts in the first week alone, that&apos;s
          <strong>$720 million</strong> just in SM-3s. The Patriot PAC-3 situation is only slightly better: $4M per interceptor against $50K–$200K
          Iranian drones and cruise missiles. Iran doesn&apos;t need to overwhelm US defenses — it just needs to bankrupt them.
        </p>
      </div>

      {/* Platform Operating Costs */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Platform Operating Costs: $50M+ Per Day Just to Show Up</h2>
      <p className="mb-4">
        Before a single bomb drops, it costs tens of millions of dollars per day simply to operate the platforms involved. These figures
        represent the incremental cost of wartime operations — fuel, maintenance, crew, and logistics above peacetime baseline rates.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left p-3 border-b font-semibold">Platform</th>
              <th className="text-right p-3 border-b font-semibold">Daily Cost</th>
              <th className="text-right p-3 border-b font-semibold">Week 1 Cost</th>
              <th className="text-left p-3 border-b font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {platforms.map((p, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                <td className="p-3 border-b font-medium">{p.platform}</td>
                <td className="p-3 border-b text-right font-mono">{p.daily}</td>
                <td className="p-3 border-b text-right font-mono">{p.weekCost}</td>
                <td className="p-3 border-b text-xs text-stone-500">{p.note}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-red-50">
              <td className="p-3 border-t-2 border-red-200 font-bold">Total Platform Costs</td>
              <td className="p-3 border-t-2 border-red-200 text-right font-mono font-bold text-red-700">~$50M</td>
              <td className="p-3 border-t-2 border-red-200 text-right font-mono font-bold text-red-700">~$350M</td>
              <td className="p-3 border-t-2 border-red-200"></td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Total Cost Estimate */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Total Cost: Pentagon Confirmed</h2>
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-sm text-stone-400 mb-1">First 6 Days (Pentagon to Congress)</div>
            <div className="text-2xl font-bold text-red-500">$11.3B</div>
          </div>
          <div>
            <div className="text-sm text-stone-400 mb-1">Our Bottom-Up Estimate (Week 1)</div>
            <div className="text-2xl font-bold text-yellow-500 line-through">~$3.6B</div>
          </div>
          <div>
            <div className="text-sm text-stone-400 mb-1">Est. Through Day 13 (Mar 12)</div>
            <div className="text-2xl font-bold text-red-500">~$24.5B</div>
          </div>
        </div>
        <p className="text-stone-400 text-sm mt-6 text-center">
          The Pentagon&apos;s $11.3B figure for 6 days is <strong className="text-red-400">3.1x higher</strong> than our bottom-up estimate of $3.6B. The gap likely reflects classified operations, logistics surge costs, and munitions expenditures far exceeding public reports. This is direct military cost only — it does not include economic damage from Hormuz disruption (~$15M bbl/day stranded, oil above $100/barrel), increased fuel costs for DoD worldwide, or long-term veterans&apos; care.
        </p>
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Scaling Forward: What Does a Full Campaign Cost?</h2>
      <p className="mb-4">
        Trump told CNBC operations would take &quot;four weeks or less.&quot; History suggests otherwise — the air campaign over Libya (2011) lasted
        7 months, the ISIS campaign took 5+ years, and Operation Midnight Hammer against Iran in June 2025 cost $2.25 billion for just 37 hours.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left p-3 border-b font-semibold">Scenario</th>
              <th className="text-right p-3 border-b font-semibold">Duration</th>
              <th className="text-right p-3 border-b font-semibold">Est. Direct Cost</th>
              <th className="text-left p-3 border-b font-semibold">Comparison</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Quick Win (Trump&apos;s promise)</td>
              <td className="p-3 border-b text-right">4 weeks</td>
              <td className="p-3 border-b text-right font-mono">$50–55B</td>
              <td className="p-3 border-b text-xs text-stone-500">At $1.88B/day. Already double the entire annual EPA budget ($10.1B)</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Extended air campaign</td>
              <td className="p-3 border-b text-right">3 months</td>
              <td className="p-3 border-b text-right font-mono">$120–170B</td>
              <td className="p-3 border-b text-xs text-stone-500">Even at reduced tempo. More than the annual cost of US food assistance (SNAP)</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Protracted conflict</td>
              <td className="p-3 border-b text-right">6-12 months</td>
              <td className="p-3 border-b text-right font-mono">$80–200B</td>
              <td className="p-3 border-b text-xs text-stone-500">Approaching the cost of Afghanistan&apos;s peak years ($100B/yr)</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Ground invasion + occupation</td>
              <td className="p-3 border-b text-right">Years</td>
              <td className="p-3 border-b text-right font-mono">$1–3T+</td>
              <td className="p-3 border-b text-xs text-stone-500">Iran is 4x the size of Iraq with 2.5x the population</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Opportunity Costs */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">What That Money Could Buy Instead</h2>
      <p className="mb-4">
        Every dollar spent on war is a dollar not spent on something else. This isn&apos;t a political statement — it&apos;s arithmetic.
        The opportunity cost of military spending is one of the most underreported aspects of any conflict.
      </p>

      <div className="space-y-3 mb-8">
        {opportunities.map((o, i) => (
          <div key={i} className="bg-white rounded-lg border p-4 flex flex-col md:flex-row md:items-center gap-3">
            <div className="text-red-600 font-bold font-mono min-w-[100px]">{o.cost}</div>
            <div className="flex-1">
              <div className="text-sm text-stone-500">War: {o.warItem}</div>
              <div className="text-sm font-medium">Or: {o.civilianItem}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <h3 className="font-bold text-red-900 mb-2">The Real Per-Taxpayer Cost</h3>
        <p className="text-sm text-red-800 mb-2">
          The US has approximately 150 million individual tax filers. At the Pentagon&apos;s confirmed rate of $1.88 billion per day:
        </p>
        <ul className="text-sm text-red-800 list-disc list-inside space-y-1">
          <li><strong>$75 per taxpayer</strong> for the first 6 days ($11.3B confirmed)</li>
          <li><strong>$163 per taxpayer</strong> through Day 13 (~$24.5B estimated)</li>
          <li><strong>$350 per taxpayer</strong> for Trump&apos;s promised 4-week campaign (~$52B)</li>
          <li><strong>$6,667–$20,000 per taxpayer</strong> if this becomes another Iraq (which cost $3 trillion total)</li>
        </ul>
        <p className="text-sm text-red-800 mt-2">
          This doesn&apos;t include the indirect costs: higher gas prices from the Hormuz closure, inflation from supply chain disruption,
          or the long-term cost of veterans&apos; care (which for Iraq/Afghanistan reached $300 billion and counting).
        </p>
      </div>

      {/* Who profits */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Who Profits?</h2>
      <p className="mb-4">
        Every munition expended must be replaced. Every interceptor fired is a new contract. The defense industry&apos;s stock prices tell
        the story the government won&apos;t:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left p-3 border-b font-semibold">Company</th>
              <th className="text-left p-3 border-b font-semibold">Key Products Used</th>
              <th className="text-left p-3 border-b font-semibold">Est. Revenue from Week 1</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Lockheed Martin</td>
              <td className="p-3 border-b text-sm text-stone-600">JASSM-ER, PAC-3, F-35, F-16V</td>
              <td className="p-3 border-b font-mono">$900M+</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">RTX (Raytheon)</td>
              <td className="p-3 border-b text-sm text-stone-600">Tomahawk, SM-6, SM-3, StormBreaker, Patriot</td>
              <td className="p-3 border-b font-mono">$1.8B+</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Northrop Grumman</td>
              <td className="p-3 border-b text-sm text-stone-600">B-2 Spirit, B-21 Raider (support), RQ-4 Global Hawk</td>
              <td className="p-3 border-b font-mono">$200M+</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Boeing</td>
              <td className="p-3 border-b text-sm text-stone-600">JDAM, F/A-18, KC-46, GBU-57 MOP</td>
              <td className="p-3 border-b font-mono">$250M+</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">General Dynamics</td>
              <td className="p-3 border-b text-sm text-stone-600">Arleigh Burke destroyers, Virginia-class submarines, munitions</td>
              <td className="p-3 border-b font-mono">$100M+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-8 text-stone-600">
        Between 2021 and 2025, AIPAC spent $221 million on US political campaigns. The defense industry spent $247 million lobbying Congress
        in 2024 alone. The first week of this war generated an estimated $3.2 billion in replacement orders for the top five defense contractors.
        That&apos;s a return of more than <strong>680%</strong> on lobbying investment. In one week.
      </p>

      {/* Historical Comparison */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Historical Comparison: First-Week Costs</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left p-3 border-b font-semibold">Conflict</th>
              <th className="text-right p-3 border-b font-semibold">Year</th>
              <th className="text-right p-3 border-b font-semibold">First-Week Cost (2026$)</th>
              <th className="text-left p-3 border-b font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Gulf War (Desert Storm)</td>
              <td className="p-3 border-b text-right">1991</td>
              <td className="p-3 border-b text-right font-mono">~$3B</td>
              <td className="p-3 border-b text-xs text-stone-500">38-day air campaign. Heavy use of Tomahawks (first combat use).</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Iraq War (OIF)</td>
              <td className="p-3 border-b text-right">2003</td>
              <td className="p-3 border-b text-right font-mono">~$4B</td>
              <td className="p-3 border-b text-xs text-stone-500">&quot;Shock and Awe&quot; — 1,700+ air sorties on day one.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Libya (Odyssey Dawn)</td>
              <td className="p-3 border-b text-right">2011</td>
              <td className="p-3 border-b text-right font-mono">~$700M</td>
              <td className="p-3 border-b text-xs text-stone-500">Smaller scale. 124 Tomahawks on day one.</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Syria strikes</td>
              <td className="p-3 border-b text-right">2018</td>
              <td className="p-3 border-b text-right font-mono">~$250M</td>
              <td className="p-3 border-b text-xs text-stone-500">One night. 105 missiles. Limited strike.</td>
            </tr>
            <tr className="bg-red-50">
              <td className="p-3 border-b font-bold">Iran (Epic Fury)</td>
              <td className="p-3 border-b text-right font-bold">2026</td>
              <td className="p-3 border-b text-right font-mono font-bold text-red-700">$11.3B (6 days)</td>
              <td className="p-3 border-b text-xs text-red-700">Pentagon confirmed to Congress. 5,000+ targets. $1.88B/day. Most expensive opening campaign in history.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Operation Epic Fury&apos;s first week cost <strong>nearly 3x the opening of Iraq in 2003</strong> — and the Pentagon&apos;s confirmed $11.3B for 6 days makes it the most expensive opening campaign in American military history. The precision-guided revolution means each bomb costs more, and the missile defense burden (something that barely existed in 2003)
        is enormous. Iran&apos;s retaliatory missile and drone salvos have forced the US to expend hundreds of interceptors that cost
        10–70x what the incoming weapons cost. This is a war of economic attrition, and on the interceptor ledger, Iran is winning.
      </p>

      {/* The Hidden Costs */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">The Hidden Costs Nobody Is Counting</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">Hormuz Economic Damage: $5–10 Billion Per Day (Global)</h3>
          <p className="text-sm text-stone-600">
            The closure of the Strait of Hormuz has removed 21 million barrels/day from global oil markets. At $130+/barrel,
            that&apos;s $2.7 billion/day in lost oil trade alone, plus cascading effects on LNG, shipping, insurance, and commodity prices.
            Goldman Sachs estimates the total global economic impact at $5–10 billion per day.
            See: <Link href="/analysis/hormuz-crisis" className="text-red-600 hover:underline">Hormuz: The $80 Billion Chokepoint →</Link>
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">Veterans&apos; Care: The 40-Year Bill</h3>
          <p className="text-sm text-stone-600">
            Every wounded service member generates decades of medical costs. The VA estimates lifetime care for a seriously wounded veteran
            at $2–4 million. With 18+ wounded in Week 1 and the number climbing, the long-term care bill could reach hundreds of millions.
            For Iraq and Afghanistan, veterans&apos; care has already cost $300+ billion — and the wars ended years ago.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">Munitions Stockpile Depletion</h3>
          <p className="text-sm text-stone-600">
            The US has a finite stockpile of precision munitions. 400+ Tomahawks in one week is a significant percentage of the Navy&apos;s
            total inventory (~4,000 as of 2024). SM-3 Block IIA production is only ~36 per year. At the Week 1 expenditure rate,
            the US will exhaust certain interceptor stockpiles within weeks. Replacing them takes years. This is the cost nobody talks about:
            we are spending munitions faster than we can build them.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">Fuel Costs for the Military Itself</h3>
          <p className="text-sm text-stone-600">
            The DoD is the world&apos;s single largest institutional consumer of fuel — about 100 million barrels per year.
            The Hormuz closure has spiked fuel prices for the military&apos;s own operations worldwide. Every $10 increase in oil prices
            costs the DoD an additional $1.3 billion per year. Oil at $130+ (up from ~$70 pre-war) adds $7.8 billion in annual fuel
            costs for the Pentagon alone. The war is making itself more expensive.
          </p>
        </div>
      </div>

      {/* Sources */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mt-12 mb-4">Sources & Methodology</h2>
      <div className="bg-stone-50 rounded-lg p-4 mb-8 text-sm text-stone-600">
        <ul className="space-y-1 list-disc list-inside">
          <li>Tomahawk Block V unit cost: FY2026 DoD Selected Acquisition Report; GovFacts analysis ($2.5M avg, range $1.75M–$4.1M)</li>
          <li>JASSM-ER unit cost: DoD FY2025 budget justification ($1.36M)</li>
          <li>GBU-57 MOP: GAO cost assessment ($3.5M per unit)</li>
          <li>SM-6 unit cost: Congressional Research Service, Navy Aegis Ballistic Missile Defense ($4.3M)</li>
          <li>SM-3 Block IIA: CRS/MDA reports ($36M per unit)</li>
          <li>Patriot PAC-3 MSE: Lockheed Martin FY2025 contract data ($4M per round)</li>
          <li>B-2 operating cost: DoD CAPE, Economy Insights ($150K/hr); SimpleFlying ($130K–$150K/hr)</li>
          <li>F-35 cost per flight hour: CBO June 2024 report ($42K/hr for F-35A)</li>
          <li>Carrier Strike Group daily cost: Forbes/CNA analysis ($6.5M/day); DefenseFeeds ($6–8M/day)</li>
          <li>Sortie rates: CENTCOM press briefings, ISW daily reports (Feb 28–Mar 6)</li>
          <li>Munitions stockpile estimates: CRS &quot;Precision-Guided Munitions: Background and Issues&quot; (2024)</li>
          <li>DoD fuel consumption: Defense Logistics Agency Energy annual report (2024)</li>
          <li>Oil price impact methodology: EIA Short-Term Energy Outlook + Bloomberg terminal data</li>
        </ul>
      </div>

      {/* Cross-links */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/analysis/iran-2026" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 2026: The Full Story →</h3>
          <p className="text-stone-500 text-sm">Day-by-day account of Operation Epic Fury</p>
        </Link>
        <Link href="/analysis/hormuz-crisis" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Hormuz: The $80 Billion Chokepoint →</h3>
          <p className="text-stone-500 text-sm">What the strait closure means for the global economy</p>
        </Link>
        <Link href="/analysis/iran-civilian-cost" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Civilian Cost →</h3>
          <p className="text-stone-500 text-sm">Schools, hospitals, and the Grand Bazaar</p>
        </Link>
        <Link href="/analysis/iran-regional-war" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">11 Countries, 7 Days →</h3>
          <p className="text-stone-500 text-sm">How a two-country war became a regional catastrophe</p>
        </Link>
        <Link href="/conflicts/iran-2026" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 2026 — Conflict Data →</h3>
          <p className="text-stone-500 text-sm">Raw numbers: costs, casualties, key events</p>
        </Link>
        <Link href="/analysis/war-profiteering" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">War Profiteering →</h3>
          <p className="text-stone-500 text-sm">Who gets rich from American wars</p>
        </Link>
      </div>

      <BackToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The $21,800-Per-Second War: What Iran Is Costing America',
            description: 'Pentagon confirmed: $11.3 billion in 6 days. $1.88 billion per day. $21,800 per second. Updated through Day 13.',
            datePublished: '2026-03-06',
            dateModified: '2026-03-12',
            publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            mainEntityOfPage: 'https://www.warcosts.org/analysis/iran-cost-per-second',
          }),
        }}
      />
    </div>
  )
}
