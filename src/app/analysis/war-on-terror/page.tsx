import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'The War on Terror: $8 Trillion, 900,000 Dead, 37 Million Displaced | WarCosts',
  description: 'The most expensive military campaign in modern history. $8 trillion spent, 900,000+ killed, 37 million displaced, zero objectives fully met. A comprehensive accounting.',
  openGraph: {
    title: 'The War on Terror: $8 Trillion Later',
    description: '$8 trillion spent. 900,000+ dead. 37 million displaced. The most expensive failure in American history.',
    url: 'https://www.warcosts.org/analysis/war-on-terror',
  },
}

const yearByYearCosts = [
  { year: '2001', cost: 20e9, note: 'Afghanistan invasion begins October 7' },
  { year: '2002', cost: 37e9, note: 'Afghanistan operations expand; Iraq war planning begins' },
  { year: '2003', cost: 76e9, note: 'Iraq invasion — "Shock and Awe" begins March 20' },
  { year: '2004', cost: 94e9, note: 'Iraq insurgency explodes; Abu Ghraib scandal' },
  { year: '2005', cost: 105e9, note: 'Iraq civil war begins; Afghanistan deteriorating' },
  { year: '2006', cost: 120e9, note: 'Iraq at peak violence; Saddam executed' },
  { year: '2007', cost: 171e9, note: 'Iraq surge — 30,000 additional troops' },
  { year: '2008', cost: 186e9, note: 'Peak spending year; financial crisis begins' },
  { year: '2009', cost: 153e9, note: 'Obama Afghan surge begins; Iraq drawdown starts' },
  { year: '2010', cost: 171e9, note: '100,000 troops in Afghanistan; drone wars expand' },
  { year: '2011', cost: 159e9, note: 'Bin Laden killed; Iraq withdrawal; Libya intervention' },
  { year: '2012', cost: 115e9, note: 'Afghanistan drawdown begins; Syria civil war' },
  { year: '2013', cost: 95e9, note: 'Sequestration; Syria chemical weapons' },
  { year: '2014', cost: 85e9, note: 'ISIS captures Mosul; US re-enters Iraq' },
  { year: '2015', cost: 77e9, note: 'ISIS campaign intensifies; Saudi-Yemen war begins' },
  { year: '2016', cost: 73e9, note: 'Mosul offensive; drone strikes at record pace' },
  { year: '2017', cost: 76e9, note: 'Trump escalation; MOAB dropped in Afghanistan' },
  { year: '2018', cost: 69e9, note: 'Syria strikes; global CT operations in 80 countries' },
  { year: '2019', cost: 62e9, note: 'Afghanistan negotiations; Baghdadi killed' },
  { year: '2020', cost: 58e9, note: 'Soleimani assassination; COVID; Doha Agreement' },
  { year: '2021', cost: 50e9, note: 'Chaotic Afghanistan withdrawal; Kabul airport bombing' },
  { year: '2022–2025', cost: 120e9, note: 'Ongoing CT operations, veteran care, debt interest' },
]

const countryDeathTolls = [
  { country: 'Iraq', deaths: '275,000–306,000', civilians: '185,000–209,000', note: 'Direct deaths only; Lancet and ORB surveys estimate 500K–1M+' },
  { country: 'Afghanistan', deaths: '176,000+', civilians: '46,000+', note: 'Plus 70,000 Pakistani civilians from spillover' },
  { country: 'Pakistan', deaths: '90,000+', civilians: '24,000+', note: 'Drone strikes, military operations, militant violence' },
  { country: 'Yemen', deaths: '150,000+', civilians: '19,000+', note: 'US-backed Saudi coalition; "worst humanitarian crisis" per UN' },
  { country: 'Syria', deaths: '500,000+', civilians: '300,000+', note: 'US role: arming rebels, airstrikes, proxy war' },
  { country: 'Somalia', deaths: '20,000+', civilians: '4,000+', note: 'Drone strikes and special operations since 2007' },
  { country: 'Libya', deaths: '30,000+', civilians: '10,000+', note: '2011 NATO bombing; failed state ever since' },
]

const whatCouldHaveBeen = [
  { item: 'Free public college for every American', cost: 800e9, note: 'For 10 years (est. $80B/yr)' },
  { item: 'Universal pre-K for all children', cost: 200e9, note: 'For 10 years' },
  { item: 'Eliminate all student loan debt', cost: 1.75e12, note: 'Total outstanding as of 2024' },
  { item: 'Universal healthcare transition', cost: 2e12, note: 'Estimated transition costs' },
  { item: 'Rebuild every bridge in America', cost: 260e9, note: 'ASCE infrastructure estimate' },
  { item: 'End homelessness in the US', cost: 200e9, note: 'HUD estimates over 10 years' },
  { item: 'Clean water for every human on Earth', cost: 150e9, note: 'WHO/UNICEF estimate' },
  { item: 'Transition to 100% renewable energy', cost: 4.5e12, note: 'Over 20 years' },
]

const contractorProfits = [
  { name: 'Lockheed Martin', revenue: '$65B/yr', wotContracts: '$200B+', note: 'F-35, missiles, C-130s — largest defense contractor on Earth' },
  { name: 'RTX (Raytheon)', revenue: '$69B/yr', wotContracts: '$150B+', note: 'Tomahawk missiles ($2M each), Patriot systems, surveillance tech' },
  { name: 'Boeing', revenue: '$67B/yr', wotContracts: '$130B+', note: 'Apache helicopters, bombs, aerial refueling tankers' },
  { name: 'KBR (formerly Halliburton)', revenue: '$7B/yr', wotContracts: '$45B+', note: 'Logistics, base construction, troop support — no-bid contracts under Cheney' },
  { name: 'Blackwater/Academi', revenue: '$2B+ (peak)', wotContracts: '$2B+', note: 'Private military — Nisour Square massacre killed 17 Iraqi civilians. Pardoned by Trump.' },
  { name: 'General Dynamics', revenue: '$42B/yr', wotContracts: '$80B+', note: 'Abrams tanks, submarines, IT systems' },
  { name: 'Northrop Grumman', revenue: '$39B/yr', wotContracts: '$90B+', note: 'B-2 bombers, Global Hawk drones, cyber warfare' },
]

export default function WarOnTerrorPage() {
  const stats = loadData('stats.json')
  const conflicts = loadData('conflicts.json')
  const wotConflicts = conflicts.filter((c: any) => c.era === 'War on Terror')

  const totalYearlyCost = yearByYearCosts.reduce((sum, y) => sum + y.cost, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd title="The War on Terror: $8 Trillion, 900,000 Dead, 37 Million Displaced" description="The most expensive military campaign in modern history. A comprehensive accounting of what America spent, who died, and what it achieved." slug="war-on-terror" />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'War on Terror' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Flagship Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          The War on Terror: {fmtMoney(stats.warOnTerrorCost)} Later
        </h1>
        <p className="text-xl text-stone-300 mb-4">Two decades. {fmt(stats.warOnTerrorDeaths)} dead. 37 million displaced. 80+ countries. Zero objectives fully met.</p>
        <p className="text-stone-400 text-lg">
          On September 11, 2001, 2,977 Americans died in the worst terrorist attack on US soil. In response,
          the United States launched what would become the most expensive, most far-reaching, and most
          catastrophic military campaign in modern history — a &ldquo;war&rdquo; with no defined enemy, no
          geographic boundary, no exit criteria, and no end. Twenty-five years and {fmtMoney(stats.warOnTerrorCost)} later,
          there are <em>more</em> terrorist organizations in the world than when it started.
        </p>
      </div>

      <ShareButtons title="The War on Terror: $8 Trillion Later" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmtMoney(stats.warOnTerrorCost), label: 'Total Cost', sub: 'Brown University Costs of War Project' },
          { val: fmt(stats.warOnTerrorDeaths), label: 'People Killed', sub: 'Direct deaths — combat & violence' },
          { val: `${(stats.warOnTerrorDisplaced / 1e6).toFixed(0)}M`, label: 'People Displaced', sub: 'More than any conflict since WWII' },
          { val: '0', label: 'Objectives Fully Met', sub: 'Terrorism has increased globally' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {[
          { val: `${(stats.warOnTerrorIndirectDeaths / 1e6).toFixed(1)}M`, label: 'Indirect Deaths', sub: 'Disease, displacement, destroyed infrastructure' },
          { val: `${stats.counterterrorCountries}`, label: 'Countries with CT Operations', sub: 'From 1 country to 80+' },
          { val: `${(stats.warOnTerrorTotalDeaths / 1e6).toFixed(1)}M`, label: 'Total Deaths (Direct + Indirect)', sub: 'Watson Institute estimate' },
        ].map(s => (
          <div key={s.label} className="bg-stone-100 rounded-lg p-4 text-center border">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* The AUMF */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">60 Words That Enabled 25 Years of War</h2>
        <p className="text-stone-700 mb-4">
          On September 14, 2001 — just three days after the attacks — Congress passed the Authorization for Use of Military Force (AUMF).
          It was 60 words long. Only one member of Congress voted against it: Representative Barbara Lee of California, who warned
          it would be used as a &ldquo;blank check.&rdquo; She was right.
        </p>
        <blockquote className="bg-white border-l-4 border-red-700 pl-4 py-3 my-4 text-stone-800 italic">
          &ldquo;That the President is authorized to use all necessary and appropriate force against those nations, organizations,
          or persons he determines planned, authorized, committed, or aided the terrorist attacks that occurred on September 11, 2001,
          or harbored such organizations or persons, in order to prevent any future acts of international terrorism against the
          United States by such nations, organizations or persons.&rdquo;
          <span className="block text-sm text-stone-500 mt-2 not-italic">— Authorization for Use of Military Force, Public Law 107-40, September 18, 2001</span>
        </blockquote>
        <p className="text-stone-700 mb-3">
          This single sentence — drafted in 20 minutes, debated for 3 days, intended for Afghanistan — has been
          used to justify military operations in <strong>at least 22 countries</strong> across the Middle East, Africa, and Asia.
          It was used to justify drone strikes in Yemen, special operations in Somalia, air campaigns in Libya,
          surveillance of American citizens, indefinite detention at Guantánamo, and military operations in countries
          that didn&apos;t exist as conflict zones on 9/11. No subsequent president has asked Congress for new authorization.
          Every one has used this 60-word sentence instead.
        </p>
        <div className="bg-white rounded-lg p-4 mt-3">
          <p className="text-sm font-semibold text-red-800 mb-2">💡 Did You Know?</p>
          <p className="text-sm text-stone-700">
            Representative Barbara Lee&apos;s lone &ldquo;no&rdquo; vote made her the target of death threats. She received
            armed security. Years later, both Republican and Democratic lawmakers acknowledged she was right — but
            the AUMF has never been repealed. As of 2026, it remains the legal basis for US military operations
            in countries most Americans couldn&apos;t find on a map.
          </p>
        </div>
      </div>

      {/* How it spread */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">From 1 Country to 80+</h2>
        <p className="text-stone-700 mb-4">
          The War on Terror began as a response to 9/11, targeting Al-Qaeda in Afghanistan. It has since metastasized
          into a global military campaign spanning at least 80 countries — roughly 40% of all nations on Earth.
          The Costs of War Project at Brown University has documented US counterterrorism operations in:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">Major Combat Operations</p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• <strong>Afghanistan</strong> (2001–2021) — 20 years</li>
              <li>• <strong>Iraq</strong> (2003–2011, 2014–present)</li>
              <li>• <strong>Syria</strong> (2014–present)</li>
              <li>• <strong>Libya</strong> (2011, 2015–present)</li>
              <li>• <strong>Yemen</strong> (2002–present)</li>
              <li>• <strong>Somalia</strong> (2007–present)</li>
              <li>• <strong>Pakistan</strong> (2004–2018 drone campaign)</li>
            </ul>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">Special Operations &amp; CT Missions</p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• <strong>Niger, Mali, Cameroon, Chad</strong> — Sahel region</li>
              <li>• <strong>Philippines</strong> — Mindanao operations</li>
              <li>• <strong>Kenya, Uganda, Djibouti</strong> — East Africa</li>
              <li>• <strong>Jordan, Bahrain, Kuwait, UAE</strong> — Staging</li>
              <li>• <strong>70+ additional countries</strong> — Section 127e programs, training missions, intelligence operations</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700">
          As journalist Nick Turse documented, US special operations forces deployed to <strong>149 countries</strong>
          in a single year (2017) — 75% of the world&apos;s nations. Most of these deployments were never reported
          to the public or meaningfully debated in Congress. The &ldquo;war&rdquo; grew so large that most Americans
          have no idea where their military is fighting.
        </p>
      </div>

      {/* Year-by-year costs */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Year-by-Year Cost Breakdown</h2>
        <p className="text-stone-500 text-sm mb-4">War-related appropriations only. Does not include long-term veteran care ($2.2T+), interest on war debt ($1.1T+), or homeland security spending ($1T+). Source: Costs of War Project, CRS.</p>
        <div className="space-y-2">
          {yearByYearCosts.map(y => {
            const pct = (y.cost / 186e9) * 100
            return (
              <div key={y.year} className="flex items-center gap-3">
                <span className="w-24 text-sm font-mono text-stone-500">{y.year}</span>
                <div className="flex-1 bg-stone-100 rounded-full h-5 overflow-hidden">
                  <div className="h-full rounded-full bg-red-600" style={{ width: `${pct}%` }} />
                </div>
                <span className="w-16 text-sm font-semibold text-right">{fmtMoney(y.cost)}</span>
              </div>
            )
          })}
        </div>
        <p className="text-stone-500 text-sm mt-4">
          Direct war appropriations shown: {fmtMoney(totalYearlyCost)}. The remainder of the {fmtMoney(stats.warOnTerrorCost)} total includes veteran care,
          interest on war borrowing, DHS spending, and DOD base budget increases attributable to the war.
        </p>
      </div>

      {/* Country-by-country death tolls */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Country-by-Country Death Tolls</h2>
        <p className="text-stone-500 text-sm mb-4">Direct deaths from violence. Source: Brown University Costs of War Project, ACLED, Iraq Body Count, SNHR, OCHA.</p>
        <div className="space-y-4">
          {countryDeathTolls.map(c => (
            <div key={c.country} className="border-l-4 border-red-200 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-primary">{c.country}</span>
                <span className="text-sm text-red-700 font-semibold">{c.deaths} killed</span>
              </div>
              <p className="text-sm text-stone-500">Civilians: {c.civilians} • {c.note}</p>
            </div>
          ))}
        </div>
        <div className="bg-stone-100 rounded-lg p-4 mt-4">
          <p className="text-sm text-stone-700">
            <strong>Note on indirect deaths:</strong> For every person killed directly by violence, an estimated
            3–4 die from the indirect effects of war: destroyed hospitals, contaminated water, disrupted food
            supply, displacement. The Watson Institute estimates the total death toll — direct and indirect —
            at <strong>{(stats.warOnTerrorTotalDeaths / 1e6).toFixed(1)} million people</strong>.
          </p>
        </div>
      </div>

      {/* Cost per taxpayer */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">What the War on Terror Cost You</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$53,000</p>
            <p className="text-xs text-muted">Per taxpayer</p>
            <p className="text-[10px] text-stone-400">{fmtMoney(stats.warOnTerrorCost)} ÷ 150M taxpayers</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$24,000</p>
            <p className="text-xs text-muted">Per American</p>
            <p className="text-[10px] text-stone-400">{fmtMoney(stats.warOnTerrorCost)} ÷ 335M people</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$100,000</p>
            <p className="text-xs text-muted">Per family of four</p>
            <p className="text-[10px] text-stone-400">Including future interest on war debt</p>
          </div>
        </div>
        <p className="text-sm text-stone-700">
          Every family of four in America has paid roughly <strong>$100,000</strong> for the War on Terror —
          enough for a down payment on a house, four years of in-state college tuition, or a lifetime of
          healthcare premiums. Most of it was borrowed, meaning future generations will continue paying interest
          on wars their parents and grandparents fought. See <Link href="/tools/tax-receipt" className="text-red-800 underline">your personal tax receipt →</Link>
        </p>
      </div>

      {/* What $8T could have bought */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What {fmtMoney(stats.warOnTerrorCost)} Could Have Bought Instead</h2>
        <p className="text-stone-500 text-sm mb-4">The opportunity cost of 25 years of war.</p>
        <div className="space-y-3">
          {whatCouldHaveBeen.map(w => (
            <div key={w.item} className="flex items-center gap-4 border-b border-stone-100 pb-3">
              <span className="w-20 text-sm font-semibold text-red-700 text-right">{fmtMoney(w.cost)}</span>
              <div className="flex-1">
                <p className="font-medium text-sm">{w.item}</p>
                <p className="text-xs text-stone-400">{w.note}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-stone-100 rounded-lg p-4 mt-4">
          <p className="text-sm text-stone-700 font-semibold">
            With {fmtMoney(stats.warOnTerrorCost)}, America could have done <em>all of the above</em> and still had trillions left over.
            Instead, we got failed states, new enemies, and a national debt approaching $40 trillion.
          </p>
        </div>
      </div>

      {/* The conflicts */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Conflicts</h2>
        <div className="space-y-4">
          {wotConflicts.map((c: any) => (
            <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-stone-50 rounded-lg border p-4 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-muted text-sm">{c.startYear}–{c.endYear || 'present'}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{fmtMoney(c.costInflationAdjusted)}</p>
                  <p className="text-sm text-muted">{c.outcome}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* The Outcomes */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Outcomes</h2>
        <div className="space-y-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Afghanistan — 20 Years, $2.3 Trillion, Back to Square One</h3>
            <p className="text-sm text-stone-700">
              After 20 years and $2.3 trillion, the Taliban — the same group the US invaded to remove — returned to power
              in August 2021. The Afghan military the US spent $83 billion building collapsed in <strong>11 days</strong>.
              2,461 US troops died. 20,752 were wounded. At least 46,000 Afghan civilians were killed directly. Girls are
              again banned from school. The entire 20-year project evaporated in less than two weeks.
            </p>
            <p className="text-xs text-stone-500 mt-2"><Link href="/conflicts/afghanistan" className="text-red-800 hover:underline">→ Full Afghanistan conflict data</Link></p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Iraq — No WMDs, 300,000+ Dead, ISIS Created</h3>
            <p className="text-sm text-stone-700">
              No weapons of mass destruction were found. The power vacuum created by the invasion and the disastrous
              decision to disband the Iraqi military (400,000 armed men sent home with no pay and no future) led directly
              to the rise of ISIS. Iran — the regime the US was supposedly containing — became the dominant power in Iraq.
              An estimated 300,000+ civilians died. Cost: $2.4 trillion.
            </p>
            <p className="text-xs text-stone-500 mt-2"><Link href="/conflicts/iraq-war" className="text-red-800 hover:underline">→ Full Iraq War conflict data</Link></p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Libya — Open-Air Slave Markets</h3>
            <p className="text-sm text-stone-700">
              After US-led NATO bombing removed Gaddafi in 2011, the country collapsed into a failed state with
              open-air slave markets. Weapons flowed across the Sahel, fueling insurgencies in Mali, Niger, Burkina Faso,
              and Nigeria. Obama later called it the &ldquo;worst mistake&rdquo; of his presidency.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Yemen — &ldquo;World&apos;s Worst Humanitarian Crisis&rdquo;</h3>
            <p className="text-sm text-stone-700">
              US support for Saudi Arabia&apos;s bombing campaign created what the UN called &ldquo;the world&apos;s worst
              humanitarian crisis.&rdquo; 150,000+ dead, millions facing famine. American bombs — with American
              targeting intelligence — hit school buses, weddings, and hospitals. The bomb fragments said &ldquo;Made in USA.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* The Surveillance State */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Surveillance State</h2>
        <p className="text-stone-300 mb-4">
          The War on Terror didn&apos;t just reshape the Middle East — it reshaped America itself. In the name of
          &ldquo;national security,&rdquo; the US government built the largest surveillance apparatus in human history.
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4">
            <p className="font-semibold text-white">The USA PATRIOT Act (2001)</p>
            <p className="text-stone-400 text-sm">
              Passed 45 days after 9/11 with almost no debate. Expanded FBI authority to access financial records,
              medical records, phone records, and internet activity — without a warrant. Section 215 was later used
              to justify the NSA&apos;s bulk collection of every American&apos;s phone records.
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="font-semibold text-white">NSA Mass Surveillance (revealed 2013)</p>
            <p className="text-stone-400 text-sm">
              Edward Snowden revealed that the NSA was collecting metadata on every phone call made in America,
              reading emails, monitoring internet browsing, and tapping into the servers of Google, Apple, Facebook,
              and Microsoft through the PRISM program. Director of National Intelligence James Clapper lied to
              Congress about the program&apos;s existence — under oath.
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="font-semibold text-white">Guantánamo Bay (2002–present)</p>
            <p className="text-stone-400 text-sm">
              780 men have been detained at Guantánamo. Many were held for years without charges. 731 have been
              transferred or released — most without ever being charged with a crime. As of 2025, 15 remain.
              The facility has cost over $13 million per detainee per year — making it the most expensive prison
              on Earth.
            </p>
          </div>
        </div>
        <blockquote className="border-l-4 border-red-500 pl-4 mt-6 text-stone-300 italic">
          &ldquo;They who can give up essential liberty to obtain a little temporary safety, deserve neither liberty nor safety.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Benjamin Franklin</span>
        </blockquote>
      </div>

      {/* Veteran aftermath */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Veteran Aftermath</h2>
        <p className="text-stone-700 mb-4">
          The War on Terror sent 3 million Americans to war. What happened when they came home is a national disgrace.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { stat: '17/day', label: 'Veteran suicides', detail: '6,200+ per year — more than all combat deaths in Afghanistan' },
            { stat: '1.8M', label: 'Veterans with PTSD', detail: '11-29% of Iraq/Afghan vets depending on combat exposure' },
            { stat: '530K+', label: 'Traumatic brain injuries', detail: 'The "signature wound" of Iraq and Afghanistan' },
            { stat: '37,000', label: 'Homeless veterans', detail: 'On any given night. 1.4M at risk.' },
            { stat: '$300B+', label: 'VA healthcare costs', detail: 'And rising — peak costs decades away' },
            { stat: '30%', label: 'Unemployment rate (young vets)', detail: 'First year after discharge' },
          ].map(s => (
            <div key={s.label} className="bg-red-50 rounded-lg p-4 border border-red-200">
              <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.stat}</p>
              <p className="text-sm font-semibold">{s.label}</p>
              <p className="text-xs text-stone-500">{s.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700 mb-4">
          Since 2001, <strong>more veterans have died by suicide than in all post-9/11 combat operations combined</strong>.
          The youngest veterans — those aged 18-34 — die by suicide at 2.5× the rate of non-veterans. Many waited
          months for VA mental health appointments. The VA mental health budget is a fraction of what the Pentagon
          spends on a single aircraft carrier ($13 billion).
        </p>
        <p className="text-stone-700">
          The long-term cost of veteran healthcare will exceed <strong>$2.2 trillion</strong> according to
          the Costs of War Project — and the peak hasn&apos;t arrived yet. Vietnam-era VA costs peaked 40 years
          after that war ended. The true cost of Iraq and Afghanistan won&apos;t be known until the 2060s.
        </p>
        <p className="text-xs text-stone-500 mt-3"><Link href="/analysis/human-cost" className="text-red-800 hover:underline">→ The Human Cost — full analysis</Link></p>
      </div>

      {/* Contractor profits */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Who Profited: The Contractors</h2>
        <p className="text-stone-700 mb-4">
          While 7,057 US troops died and millions of civilians were killed, defense contractors posted
          record profits year after year. The War on Terror was the most profitable event in the history
          of the arms industry.
        </p>
        <div className="space-y-4">
          {contractorProfits.map(c => (
            <div key={c.name} className="border-l-4 border-red-200 pl-4">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-bold text-primary">{c.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">{c.revenue} revenue</span>
              </div>
              <p className="text-sm text-stone-500">War on Terror contracts: <strong>{c.wotContracts}</strong></p>
              <p className="text-sm text-stone-600">{c.note}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 rounded-lg p-4 mt-4 border border-blue-200">
          <p className="text-sm font-semibold text-blue-800 mb-1">💡 Did You Know?</p>
          <p className="text-sm text-stone-700">
            Vice President Dick Cheney was CEO of Halliburton before taking office. Halliburton&apos;s subsidiary KBR
            received <strong>$39.5 billion in no-bid contracts</strong> during the Iraq War. Cheney retained stock options
            worth millions. When asked about it, he said it was &ldquo;not relevant.&rdquo; The contracts were later
            found to have overcharged the government by hundreds of millions of dollars.
          </p>
        </div>
        <p className="text-xs text-stone-500 mt-3"><Link href="/analysis/military-industrial-complex" className="text-red-800 hover:underline">→ The Military-Industrial Complex — full analysis</Link></p>
      </div>

      {/* The drone wars within WoT */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Drone Wars</h2>
        <p className="text-stone-700 mb-4">
          The War on Terror pioneered a new form of warfare: death by remote control. From an air-conditioned
          trailer in Nevada, operators killed people in Pakistan, Yemen, Somalia, Libya, and Syria — without
          congressional debate, judicial review, or meaningful public accountability.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-stone-100 rounded-lg p-4 text-center">
            <p className="text-xl font-bold text-red-700">14,000+</p>
            <p className="text-xs text-muted">Total drone strikes</p>
          </div>
          <div className="bg-stone-100 rounded-lg p-4 text-center">
            <p className="text-xl font-bold text-red-700">8,858–16,901</p>
            <p className="text-xs text-muted">People killed</p>
          </div>
          <div className="bg-stone-100 rounded-lg p-4 text-center">
            <p className="text-xl font-bold text-red-700">769–1,725</p>
            <p className="text-xs text-muted">Confirmed civilians</p>
          </div>
        </div>
        <p className="text-stone-700">
          President Obama — awarded the Nobel Peace Prize in 2009 — authorized 10× more drone strikes than
          George W. Bush. He maintained a personal &ldquo;kill list&rdquo; reviewed every Tuesday, including
          the name of at least one American citizen (Anwar al-Awlaki, killed in Yemen in 2011 without trial).
          Trump then revoked Obama&apos;s executive order requiring public reporting of civilian casualties,
          making the program even less accountable.
        </p>
        <p className="text-xs text-stone-500 mt-3"><Link href="/analysis/drone-wars" className="text-red-800 hover:underline">→ Drone Wars — full analysis</Link></p>
      </div>

      {/* Quotes section */}
      <div className="space-y-6 mb-8">
        <div className="bg-stone-900 text-white rounded-xl p-6">
          <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
            &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence,
            whether sought or unsought, by the military-industrial complex.&rdquo;
          </blockquote>
          <p className="text-stone-400 mt-3">— President Dwight D. Eisenhower, Farewell Address, 1961</p>
        </div>

        <div className="bg-stone-100 rounded-xl p-6 border">
          <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700">
            &ldquo;War is a racket. It always has been. It is possibly the oldest, easily the most profitable,
            surely the most vicious. It is the only one in which the profits are reckoned in dollars and the
            losses in lives.&rdquo;
          </blockquote>
          <p className="text-muted mt-3">— Major General Smedley Butler, <em>War Is a Racket</em>, 1935</p>
        </div>

        <div className="bg-stone-900 text-white rounded-xl p-6">
          <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
            &ldquo;Of all the enemies to public liberty, war is, perhaps, the most to be dreaded, because it
            comprises and develops the germ of every other. War is the parent of armies; from these proceed
            debts and taxes; and armies, and debts, and taxes are the known instruments for bringing the many
            under the domination of the few.&rdquo;
          </blockquote>
          <p className="text-stone-400 mt-3">— James Madison, 1795</p>
        </div>
      </div>

      {/* The question */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Did It Make Us Safer?</h2>
        <p className="text-stone-700 mb-4">
          The number of terrorist organizations worldwide has <em>increased</em> since 2001. The number of countries
          experiencing significant terrorism has increased. Al-Qaeda, which the entire war was supposed to destroy,
          still exists — in more countries than in 2001. The Taliban, which we spent 20 years fighting, runs Afghanistan again.
          ISIS, which didn&apos;t exist before the Iraq War, rose from the chaos we created.
        </p>
        <p className="text-stone-700 mb-4">
          The State Department&apos;s own annual terrorism reports show a steady increase in terrorist attacks worldwide
          since 2001. A RAND Corporation study found that military force was the <em>least effective</em> method of
          defeating terrorist organizations — political accommodation and policing were far more successful.
        </p>
        <p className="text-stone-700 font-semibold">
          We spent {fmtMoney(stats.warOnTerrorCost)}. We killed {fmt(stats.warOnTerrorDeaths)} people. We displaced 37 million.
          We destabilized a region. We shredded civil liberties. We created new enemies. And the threat is still here —
          arguably worse than when we started.
        </p>
      </div>

      {/* Did You Know callout */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The <strong>War on Terror cost more</strong> (inflation-adjusted) than World War I, the Korean War, and the Vietnam War <em>combined</em>.</li>
          <li>• If you stacked {fmtMoney(stats.warOnTerrorCost)} in $100 bills, the pile would be <strong>5,400 miles tall</strong> — roughly the distance from New York to Tokyo.</li>
          <li>• The US has spent more on <strong>air conditioning for troops</strong> in Iraq and Afghanistan ($20B/yr) than NASA&apos;s entire annual budget.</li>
          <li>• More Americans have been killed by <strong>gun violence at home</strong> since 9/11 (~550,000) than in all post-9/11 wars (~7,000 combat deaths).</li>
          <li>• The 2001 AUMF has been cited to justify operations in <strong>22 countries</strong> — 19 of which had nothing to do with 9/11.</li>
          <li>• The Pentagon has <strong>never passed an audit</strong>. In its 7th consecutive failed audit (2024), auditors couldn&apos;t account for $3.8 trillion in transactions.</li>
        </ul>
      </div>

      {/* Bottom line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <blockquote className="border-l-4 border-red-500 pl-4 mb-4 text-stone-300 italic">
          &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense,
          a theft from those who hunger and are not fed, those who are cold and are not clothed.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— President Dwight D. Eisenhower, &ldquo;Chance for Peace&rdquo; speech, 1953</span>
        </blockquote>
        <p className="text-stone-300 mb-4">
          The War on Terror is the defining catastrophe of 21st-century America. It consumed {fmtMoney(stats.warOnTerrorCost)}
          that could have transformed American life — free college, universal healthcare, rebuilt infrastructure,
          clean energy. Instead, it killed {fmt(stats.warOnTerrorDeaths)} people, displaced 37 million, created new
          terrorist organizations, enabled mass surveillance of American citizens, enriched defense contractors,
          and left veterans to kill themselves at a rate of 17 per day.
        </p>
        <p className="text-stone-300 mb-4">
          The war was authorized by 60 words, written in 20 minutes, that have been stretched across 25 years,
          80+ countries, and 4 presidential administrations. It was launched to fight one terrorist organization
          in one country. It became a global, permanent, self-perpetuating war machine that creates the very
          enemies it claims to fight.
        </p>
        <p className="text-white font-semibold text-lg">
          It is the most expensive failure in American history. And it&apos;s still going.
        </p>
      </div>

      {/* Related */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/conflicts/afghanistan" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Afghanistan — 20 Years →</h3>
          <p className="text-stone-500 text-sm">$2.3T spent. Taliban back in power.</p>
        </Link>
        <Link href="/conflicts/iraq-war" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iraq War — The $2.4T Mistake →</h3>
          <p className="text-stone-500 text-sm">No WMDs. 300,000+ dead. ISIS created.</p>
        </Link>
        <Link href="/analysis/drone-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Drone Wars →</h3>
          <p className="text-stone-500 text-sm">Remote-control killing. 14,000+ strikes.</p>
        </Link>
        <Link href="/analysis/congressional-authority" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Who Decides? →</h3>
          <p className="text-stone-500 text-sm">The erosion of congressional war powers.</p>
        </Link>
        <Link href="/analysis/blowback" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Blowback →</h3>
          <p className="text-stone-500 text-sm">How the War on Terror created more enemies.</p>
        </Link>
        <Link href="/tools/tax-receipt" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Your Tax Receipt →</h3>
          <p className="text-stone-500 text-sm">See how much of your taxes funded the War on Terror.</p>
        </Link>
      </div>

      <BackToTop />
    </div>
  )
}
