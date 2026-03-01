import { ArmsSalesChart } from '@/components/charts/SpendingCharts'
import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'


export const metadata: Metadata = {
  title: 'US Arms Sales — $238B/Year, World\'s Largest Weapons Dealer | WarCosts',
  description: '$238 billion per year in arms sales. The US is the world\'s largest weapons dealer. See who buys, where weapons end up, and who profits.',
}

const buyerProfiles: Record<string, { flag: string, details: string }> = {
  'Saudi Arabia': { flag: '🇸🇦', details: 'Largest single buyer of US weapons. Saudi forces have used American-made bombs, jets, and missiles in the Yemen war, creating the world\'s worst humanitarian crisis. A Raytheon MK-82 bomb killed 40 children on a school bus in 2018. Despite this, arms sales continued under every administration.' },
  'Japan': { flag: '🇯🇵', details: 'Purchasing F-35s and advanced missile defense as China tensions escalate. Japan is rearming at the fastest rate since WWII, with US encouragement and weapons.' },
  'Australia': { flag: '🇦🇺', details: 'The AUKUS deal includes nuclear-powered submarines worth $368B over 30 years — the largest defense procurement in Australian history, and a massive windfall for US contractors.' },
  'UAE': { flag: '🇦🇪', details: 'Used US weapons in Yemen and Libya. The UAE has built a regional military empire using American hardware, including deploying F-16s and Apache helicopters in conflicts across the Middle East and Africa.' },
  'Israel': { flag: '🇮🇱', details: 'Receives $3.8B/yr in free US military aid on top of arms purchases. American weapons are used in operations in Gaza and the West Bank. Israel is also a major re-exporter of modified US military technology.' },
  'South Korea': { flag: '🇰🇷', details: 'Major buyer of missile defense systems and fighter jets. South Korea hosts 28,500 US troops and serves as a key market for THAAD and F-35 aircraft.' },
  'Taiwan': { flag: '🇹🇼', details: 'Arms sales rapidly increasing amid China tensions. Every sale triggers diplomatic protests from Beijing. Taiwan is stockpiling Javelin missiles and F-16V fighters.' },
  'Poland': { flag: '🇵🇱', details: 'Spending surged after Russia\'s 2022 invasion of Ukraine. Poland is now buying Abrams tanks, HIMARS, Apache helicopters, and F-35s in the largest European arms buildup since the Cold War.' },
  'Qatar': { flag: '🇶🇦', details: 'Bought $12B in F-15 fighter jets and Apache helicopters. Qatar hosts Al Udeid Air Base, the largest US military facility in the Middle East.' },
  'UK': { flag: '🇬🇧', details: 'Longstanding "special relationship" includes deep weapons integration. The UK is a partner on the F-35 program and buys extensively from US defense firms.' },
}

const topManufacturers = [
  { name: 'Lockheed Martin', revenue: '$65.4B', products: 'F-35, F-22, THAAD, Javelin, Sikorsky, satellites', exportPct: '~25%', note: 'World\'s largest defense firm. F-35 sold to 18+ countries. Employs 122,000.' },
  { name: 'RTX (Raytheon)', revenue: '$68.9B', products: 'Patriot missiles, Tomahawk, Stinger, engines', exportPct: '~30%', note: 'Patriot deployed in 18 countries. Stinger missiles went from Afghan mujahideen to Ukrainian soldiers.' },
  { name: 'Boeing', revenue: '$66.5B', products: 'F-15EX, F/A-18, Apache, P-8, KC-46, bombs', exportPct: '~20%', note: 'Also sells commercial jets that keep losing doors. F-15 sold to Saudi Arabia, Qatar, South Korea, Israel.' },
  { name: 'Northrop Grumman', revenue: '$39.3B', products: 'B-21, Global Hawk, cyber systems, missiles', exportPct: '~15%', note: '83% of revenue from government. Global Hawk drones operated worldwide.' },
  { name: 'General Dynamics', revenue: '$42.3B', products: 'Abrams tanks, Stryker, submarines, munitions', exportPct: '~18%', note: 'Abrams tanks sold to Saudi Arabia, Iraq, Egypt, Australia, Poland.' },
  { name: 'L3Harris', revenue: '$18.4B', products: 'Communications, ISR, electronic warfare', exportPct: '~25%', note: 'Supplies surveillance and communications tech to 100+ countries.' },
  { name: 'BAE Systems (US)', revenue: '$26.4B', products: 'Bradley vehicles, electronic warfare, munitions', exportPct: '~30%', note: 'British-owned but major US defense contractor. Sells to 40+ countries.' },
]

const armsByDecade = [
  { decade: '1950s', totalBn: '$35B', context: 'Cold War begins. NATO allies rearming. Military Assistance Program sends weapons to 60+ countries.' },
  { decade: '1960s', totalBn: '$50B', context: 'Vietnam era. Massive arms to South Vietnam, Taiwan, South Korea. Alliance-building through weapons.' },
  { decade: '1970s', totalBn: '$85B', context: 'Nixon Doctrine — arm allies instead of deploying troops. Iran under the Shah becomes huge buyer. Saudi sales begin.' },
  { decade: '1980s', totalBn: '$120B', context: 'Reagan era. Arms to Mujahideen ($3B+). Iran-Contra scandal. Massive sales to Saudi Arabia, Israel, Egypt.' },
  { decade: '1990s', totalBn: '$150B', context: 'Post-Cold War "fire sale." Former Soviet client states switch to US equipment. Gulf War showcases American weapons.' },
  { decade: '2000s', totalBn: '$200B', context: 'War on Terror drives sales. Iraq and Afghanistan create new markets. "Coalition" allies receive equipment.' },
  { decade: '2010s', totalBn: '$350B', context: 'Obama-era record sales. $110B Saudi deal (2010). Asia pivot drives sales to Japan, Australia, South Korea.' },
  { decade: '2020s (est)', totalBn: '$400B+', context: 'Ukraine war, AUKUS, China tensions. Record peacetime sales. $80.9B approved in 2023 alone.' },
]

const weaponsToEnemies = [
  { case: 'Afghanistan → Taliban', details: 'The US spent $83B equipping Afghan security forces. When the Taliban took over in August 2021, they captured $7.1B in US military equipment including 75,000+ vehicles, 600,000+ weapons, and 200+ aircraft. The Taliban now has more Black Hawk helicopters than most US allies.' },
  { case: 'Iraq → ISIS', details: 'When ISIS swept through northern Iraq in 2014, they captured vast quantities of US-supplied weapons from the fleeing Iraqi army, including Humvees, M1 Abrams tanks, artillery, and small arms. American soldiers later faced their own weapons in combat against ISIS.' },
  { case: 'Iran-Contra', details: 'The Reagan administration secretly sold 2,000+ missiles to Iran (then under an arms embargo) and used the profits to fund Nicaraguan Contra rebels. Both transactions were illegal. Oliver North shredded documents. Reagan claimed he couldn\'t remember.' },
  { case: 'Libya → Everywhere', details: 'After the 2011 NATO intervention toppled Gaddafi, his massive weapons stockpiles were looted and spread across Africa. US-origin weapons ended up in Mali, Niger, Syria, and with various militant groups. The Libya intervention armed half of Africa.' },
  { case: 'Syria → Jihadists', details: 'The CIA\'s $1B/yr Timber Sycamore program armed Syrian rebels. Many weapons ended up with al-Nusra Front (al-Qaeda\'s affiliate) and other jihadist groups. In one case, a Pentagon-backed group and a CIA-backed group fought each other with US weapons.' },
  { case: 'Saudi Arabia → Yemen → Al-Qaeda', details: 'US weapons sold to Saudi Arabia for use in Yemen have been diverted to al-Qaeda in the Arabian Peninsula (AQAP) and allied militias. A CNN investigation found US-made armored vehicles, weapons, and equipment in the hands of groups the US designated as terrorists.' },
  { case: 'Mujahideen → Al-Qaeda → 9/11', details: 'The CIA armed Afghan mujahideen with $3B+ in weapons (including Stinger missiles) to fight the Soviets in the 1980s. Those weapons, training, and fighters became the foundation of the Taliban and al-Qaeda. Osama bin Laden was among those who benefited from US support.' },
]

const congressionalLoopholes = [
  { loophole: 'Direct Commercial Sales (DCS)', details: 'Companies can sell directly to foreign governments with State Department approval, bypassing the more rigorous Foreign Military Sales process. DCS accounted for $153B in sales in 2023 — nearly double the government-to-government channel.' },
  { loophole: 'Emergency Declarations', details: 'The president can bypass congressional review by declaring an "emergency." Trump used this to push through $8.1B in Saudi sales in 2019 after Congress tried to block them over Yemen. Biden used it for tank rounds to Israel in 2024.' },
  { loophole: 'Excess Defense Articles', details: 'The US gives away "excess" military equipment to allies for free or at deep discounts. This program has transferred billions in equipment to countries that might not pass human rights reviews if they had to purchase it normally.' },
  { loophole: '$100M Notification Threshold', details: 'Arms sales under $100M to NATO allies don\'t require congressional notification. Companies structure deals to stay just under the threshold, selling in tranches to avoid oversight.' },
  { loophole: 'End-Use Monitoring Failures', details: 'The US is supposed to track where weapons end up after sale. In practice, monitoring is woefully inadequate. A 2023 GAO report found the Pentagon couldn\'t account for the location of tens of thousands of exported weapons.' },
  { loophole: 'Leahy Law Waivers', details: 'The Leahy Law prohibits arms sales to foreign military units that commit human rights abuses. In practice, the State Department routinely grants waivers or defines "units" narrowly to avoid triggering the law.' },
]

export default function ArmsSalesPage() {
  const arms = loadData('arms-sales.json')
  const stats = loadData('stats.json')
  const chartData = arms.topBuyers.map((b: any) => ({ country: b.country, amount: b.total / 1e9 }))
  const totalTopBuyers = arms.topBuyers.reduce((s: number, b: any) => s + b.total, 0)

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Arms Sales' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Arms Sales</h1>
      <p className="text-muted mb-6 max-w-3xl">The United States is the world&apos;s largest arms dealer, selling {fmtMoney(arms.totalAnnual)} per year in weapons to foreign governments. American bombs, missiles, jets, and tanks are used in conflicts across the globe — many of them against civilians. The arms industry spends $130M/yr lobbying Congress to ensure the sales never stop.</p>
      <ShareButtons title="US Arms Sales — Who Buys American Weapons" />

      {/* AI Overview */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-blue-900 mb-3">🧠 Key Insights</h3>
        <ul className="space-y-2 text-sm text-blue-900">
          <li>• <strong>The US controls 40% of the global arms market</strong> — more than Russia, China, France, and Germany combined. State Department approved $80.9B in sales in 2023 alone, a 56% increase.</li>
          <li>• <strong>American weapons have been found on both sides of multiple conflicts</strong> — in Libya, Syria, and Yemen. The Taliban captured $7.1B in US equipment when Afghanistan fell, including Black Hawk helicopters.</li>
          <li>• <strong>A Raytheon MK-82 bomb killed 40 children on a school bus in Yemen (2018)</strong> — arms sales to Saudi Arabia continued. The US sells weapons to human rights abusers with minimal consequences.</li>
          <li>• <strong>The AUKUS submarine deal is worth $368 billion</strong> — the largest arms deal in history. Every regional arms race enriches American defense contractors while destabilizing the regions involved.</li>
          <li>• <strong>The US has not ratified the Arms Trade Treaty</strong> — joining Russia and China in refusing to be bound by rules governing weapons exports. The world&apos;s largest arms dealer refuses oversight.</li>
        </ul>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmtMoney(arms.totalAnnual) + '/yr', label: 'Annual Arms Sales' },
          { val: '40%', label: 'Global Market Share' },
          { val: String(arms.topBuyers.length) + '+', label: 'Buyer Countries' },
          { val: fmtMoney(totalTopBuyers), label: 'Top 10 Buyer Total' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;We sell weapons to both sides in a conflict, then send our troops to clean up the mess. That&apos;s not foreign policy — it&apos;s a business model.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Andrew Bacevich, retired US Army Colonel and historian</p>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Top Buyers</h2>
        <ArmsSalesChart data={chartData} />
      </div>

      {/* Arms Sales by Decade */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Arms Sales by Decade</h2>
        <div className="space-y-3">
          {armsByDecade.map(d => (
            <div key={d.decade} className="bg-white rounded-lg p-4 border flex items-start gap-4">
              <div className="min-w-[60px]">
                <p className="font-mono font-bold text-primary">{d.decade}</p>
                <p className="text-xs text-muted">{d.totalBn}</p>
              </div>
              <p className="text-sm text-stone-600">{d.context}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Manufacturers */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Top Arms Manufacturers</h2>
        <div className="space-y-3">
          {topManufacturers.map(m => (
            <div key={m.name} className="bg-white rounded-lg p-4 border">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">{m.name}</h3>
                <span className="text-primary font-bold">{m.revenue}</span>
              </div>
              <p className="text-xs text-muted mb-1"><strong>Products:</strong> {m.products}</p>
              <p className="text-xs text-muted"><strong>Export share:</strong> {m.exportPct} — {m.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rich Buyer Profiles */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Buyer Profiles</h2>
      <div className="space-y-4 mb-8">
        {arms.topBuyers.map((b: any) => {
          const profile = buyerProfiles[b.country]
          return (
            <div key={b.country} className="bg-white rounded-lg border p-6 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{profile?.flag || '🌍'}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">{b.country}</h3>
                    <p className="text-sm text-muted">Since {b.since}</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(b.total)}</p>
              </div>
              <p className="text-sm text-muted mb-2">{b.note}</p>
              {profile && <p className="text-sm text-stone-600">{profile.details}</p>}
            </div>
          )
        })}
      </div>

      {/* Weapons Ending Up With Enemies */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">🔄 When American Weapons End Up With the Enemy</h2>
        <p className="text-sm text-stone-600 mb-4">One of the most predictable patterns in US arms sales: weapons sold or supplied to allies regularly end up in the hands of enemies. The US then spends trillions fighting adversaries armed with its own weapons.</p>
        <div className="space-y-4">
          {weaponsToEnemies.map(w => (
            <div key={w.case} className="bg-white rounded-lg p-4 border">
              <h4 className="font-bold text-red-700 mb-1">{w.case}</h4>
              <p className="text-sm text-stone-600">{w.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Congressional Approval Loopholes */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">🕳️ Congressional Oversight Loopholes</h2>
        <p className="text-sm text-stone-600 mb-4">Arms sales are supposed to be reviewed by Congress. In practice, multiple loopholes ensure that sales proceed with minimal oversight, even to countries with horrific human rights records.</p>
        <div className="space-y-3">
          {congressionalLoopholes.map(l => (
            <div key={l.loophole} className="bg-white rounded-lg p-4 border">
              <h4 className="font-bold text-amber-800">{l.loophole}</h4>
              <p className="text-sm text-stone-600">{l.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How Arms Sales Perpetuate Conflict */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">How Arms Sales Perpetuate Conflict</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>The arms trade creates a self-reinforcing cycle. The US sells weapons to Country A. Country A&apos;s neighbors feel threatened and buy weapons too. Regional arms races escalate tensions. Conflicts erupt. The US sells more weapons — and sometimes intervenes militarily, using the very instability it helped create as justification.</p>
          <p><strong>The Yemen case study:</strong> The US sold Saudi Arabia $110B in weapons. Saudi Arabia used those weapons to bomb Yemen, creating the world&apos;s worst humanitarian crisis — 377,000+ dead, 23 million people in need of aid. The US then provided humanitarian aid to Yemen. American taxpayers funded both the bombs and the bandages.</p>
          <p><strong>The revolving door:</strong> The same defense contractors who lobby for arms sales also employ former Pentagon officials who approved those sales. Lloyd Austin went from Raytheon&apos;s board to Secretary of Defense. The line between government policy and corporate profit is invisible.</p>
        </div>
      </div>

      {/* Arms Trade Treaty */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🌐 International Arms Trade Treaty</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>The Arms Trade Treaty (ATT), adopted by the UN General Assembly in 2013, regulates the international trade in conventional arms. It requires signatories to assess whether weapons sales might be used to commit human rights abuses, terrorism, or violations of international humanitarian law.</p>
          <p>The United States <strong>signed but never ratified</strong> the treaty. In 2019, the Trump administration &ldquo;unsigned&rdquo; it entirely. The world&apos;s largest arms dealer refuses to be bound by rules governing the arms trade.</p>
          <p>Countries that have ratified: 113 (including the UK, France, Germany, Japan, and Australia). Countries that refuse: <strong>the US, Russia, and China</strong> — the world&apos;s top three arms exporters.</p>
        </div>
      </div>

      {/* Weapons Types */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What America Sells</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            { type: 'Fighter Jets', examples: 'F-35 ($80M each), F-16, F/A-18, F-15EX', note: 'Deployed in conflicts across the Middle East' },
            { type: 'Missiles & Bombs', examples: 'Javelin ($178K), Patriot ($4M each), JDAM, Hellfire', note: 'Raytheon & Lockheed\'s bread and butter' },
            { type: 'Attack Helicopters', examples: 'Apache ($35M), Black Hawk ($22M)', note: 'Used in Yemen, Syria, Iraq, Libya' },
            { type: 'Tanks & Vehicles', examples: 'Abrams ($10M), Stryker ($5M), MRAP', note: 'Many end up abandoned or captured' },
            { type: 'Naval Vessels', examples: 'Littoral combat ships, frigates, submarines', note: 'AUKUS submarine deal: $368B' },
            { type: 'Air Defense', examples: 'THAAD, Patriot batteries, Iron Dome components', note: 'Driving a global air defense arms race' },
          ].map(w => (
            <div key={w.type} className="bg-white rounded-lg p-4 border">
              <h4 className="font-bold">{w.type}</h4>
              <p className="text-muted">{w.examples}</p>
              <p className="text-xs text-stone-500 mt-1">{w.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The US controls <strong>40% of the global arms market</strong> — more than Russia, China, France, and Germany combined.</li>
          <li>• American weapons have been found on <strong>both sides</strong> of multiple conflicts, including Libya and Syria.</li>
          <li>• The State Department approved <strong>$80.9B</strong> in arms sales in 2023 alone — a 56% increase from the prior year.</li>
          <li>• US-made weapons have been documented in <strong>at least 12 countries</strong> experiencing active conflict or humanitarian crisis.</li>
          <li>• The Taliban captured <strong>$7.1 billion</strong> in US military equipment when Afghanistan fell, including Black Hawk helicopters.</li>
          <li>• A <strong>Raytheon MK-82 bomb killed 40 children</strong> on a school bus in Yemen in 2018. Arms sales to Saudi Arabia continued.</li>
          <li>• The AUKUS submarine deal is worth <strong>$368 billion</strong> — the largest arms deal in history.</li>
          <li>• The US has <strong>not ratified</strong> the Arms Trade Treaty. Neither have Russia and China.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/military-industrial-complex" className="text-red-800 hover:underline">→ The Military-Industrial Complex</Link></li>
          <li><Link href="/contractors" className="text-red-800 hover:underline">→ Top Defense Contractors — who profits</Link></li>
          <li><Link href="/foreign-aid" className="text-red-800 hover:underline">→ Foreign Aid — the other side of the coin</Link></li>
          <li><Link href="/analysis/blowback" className="text-red-800 hover:underline">→ Blowback — how arming allies creates enemies</Link></li>
        </ul>
      </div>
    </div>
  )
}
