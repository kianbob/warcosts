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

      {/* The Lies That Started It — WMDs */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Lies That Launched the Iraq War</h2>
        <p className="text-stone-700 mb-4">
          The most consequential lies of the 21st century were told to justify invading Iraq:
        </p>
        <div className="space-y-4 mb-4">
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">&ldquo;We know where they are&rdquo;</p>
            <p className="text-sm text-stone-700">
              Secretary of Defense Donald Rumsfeld, March 30, 2003: <em>&ldquo;We know where [the WMDs] are.
              They&apos;re in the area around Tikrit and Baghdad and east, west, south, and north somewhat.&rdquo;</em>
              There were no WMDs anywhere.
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">The Aluminum Tubes</p>
            <p className="text-sm text-stone-700">
              The Bush administration claimed Iraq was purchasing aluminum tubes for uranium enrichment centrifuges.
              The Department of Energy&apos;s nuclear weapons experts — the people who actually build centrifuges —
              said the tubes were the wrong specifications and were almost certainly for conventional rockets.
              Their assessment was overruled. The tubes turned out to be for rockets, exactly as the experts said.
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">Curveball</p>
            <p className="text-sm text-stone-700">
              The primary source for claims about Iraq&apos;s mobile biological weapons labs was an Iraqi defector
              codenamed &ldquo;Curveball&rdquo; — who German intelligence warned was a fabricator and alcoholic.
              His claims were never independently verified. Colin Powell presented them to the UN as fact.
              Curveball later admitted he lied.
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">The Yellowcake Uranium</p>
            <p className="text-sm text-stone-700">
              Bush&apos;s 2003 State of the Union: &ldquo;The British government has learned that Saddam Hussein
              recently sought significant quantities of uranium from Africa.&rdquo; The claim was based on
              forged documents. Ambassador Joseph Wilson was sent to investigate and reported the claim was
              false. The administration retaliated by leaking the identity of his wife, CIA officer Valerie
              Plame — a federal crime. Scooter Libby was convicted; Bush commuted his sentence.
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">Powell at the UN</p>
            <p className="text-sm text-stone-700">
              On February 5, 2003, Secretary of State Colin Powell presented intelligence to the UN Security
              Council. He held up a vial of white powder. He showed satellite photos. He played intercepted
              audio. Every claim was wrong. Powell later called it a &ldquo;blot&rdquo; on his record and said
              he felt &ldquo;terrible&rdquo; about it. 300,000+ Iraqi civilians died as a result.
            </p>
          </div>
        </div>
        <blockquote className="border-l-4 border-red-700 pl-4 text-stone-600 italic">
          &ldquo;We were all wrong. And that is most disturbing.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— David Kay, head of Iraq Survey Group, after finding no WMDs, 2004</span>
        </blockquote>
      </div>

      {/* The Disbanding of the Iraqi Army */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Decision That Created ISIS</h2>
        <p className="text-stone-700 mb-4">
          On May 23, 2003, L. Paul Bremer — the head of the Coalition Provisional Authority — signed
          <strong>CPA Order Number 2</strong>, dissolving the entire Iraqi military, intelligence services,
          and Ministry of Defense. In a single stroke, <strong>400,000 armed, trained men</strong> were sent
          home with no pay, no pension, and no future.
        </p>
        <p className="text-stone-700 mb-4">
          The decision was made against the advice of the CIA, the State Department, and multiple military
          commanders. General Jay Garner, Bremer&apos;s predecessor, had planned to recall the Iraqi army
          and use it for reconstruction. Bremer overruled him.
        </p>
        <p className="text-stone-700 mb-4">
          The consequences were catastrophic and immediate: 400,000 humiliated men with weapons training,
          weapons access, and nothing to lose formed the backbone of the insurgency. Many joined Al-Qaeda
          in Iraq (AQI), which later became ISIS. When ISIS swept across Iraq in 2014, its military
          leadership included <strong>dozens of former Iraqi army and intelligence officers</strong> —
          the same men Bremer had fired 11 years earlier. They drove captured American Humvees and fired
          captured American weapons.
        </p>
        <p className="text-stone-700">
          The disbandment of the Iraqi army is widely considered the single most consequential decision
          of the Iraq War — and one of the worst strategic decisions in American military history.
          Every predicted consequence materialized. The people who predicted them were ignored.
        </p>
      </div>

      {/* De-Baathification */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">De-Baathification: Dismantling a Country</h2>
        <p className="text-stone-700 mb-4">
          Alongside the military disbandment, Bremer&apos;s <strong>CPA Order Number 1</strong> banned
          all senior members of Saddam&apos;s Ba&apos;ath Party from government employment. The Ba&apos;ath
          Party had 2 million members — many of whom joined not out of ideology but because party membership
          was required for any government job: teachers, doctors, engineers, civil servants.
        </p>
        <p className="text-stone-700 mb-4">
          De-Baathification gutted Iraq&apos;s governing capacity overnight. Schools lost teachers. Hospitals
          lost doctors. Ministries lost administrators. The electrical grid lost engineers. The people who
          knew how to run the country were banned from doing so. Iraq went from a functioning (if authoritarian)
          state to institutional chaos.
        </p>
        <p className="text-stone-700">
          The policy was explicitly modeled on de-Nazification in post-WWII Germany — but implemented with
          none of the nuance. In Germany, rank-and-file party members were eventually reintegrated. In Iraq,
          the purge was sweeping and permanent, creating a massive class of educated, angry, unemployed people
          with every reason to resist the occupation.
        </p>
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

      {/* Torture and Black Sites */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Torture Program</h2>
        <p className="text-stone-300 mb-4">
          In the aftermath of 9/11, the CIA operated a global network of secret prisons — &ldquo;black sites&rdquo; —
          in at least <strong>7 countries</strong> (Afghanistan, Poland, Romania, Lithuania, Thailand, Morocco, and
          Diego Garcia). In these facilities, detainees were subjected to what the Bush administration called
          &ldquo;enhanced interrogation techniques&rdquo; — a euphemism for torture.
        </p>
        <div className="space-y-4 mb-4">
          <div className="border-l-4 border-red-500 pl-4">
            <p className="font-semibold text-white">Waterboarding</p>
            <p className="text-stone-400 text-sm">
              Simulated drowning. The subject is strapped to a board, face covered with cloth, while water
              is poured over their face. Khalid Sheikh Mohammed was waterboarded <strong>183 times</strong>. Abu Zubaydah was
              waterboarded <strong>83 times</strong>. After WWII, the US prosecuted Japanese soldiers as war criminals for
              waterboarding American POWs. The technique hadn&apos;t changed — only the perpetrators.
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="font-semibold text-white">Sleep Deprivation</p>
            <p className="text-stone-400 text-sm">
              Detainees were kept awake for up to <strong>180 hours</strong> (7.5 days) continuously — shackled in
              stress positions, forced to stand, subjected to extreme cold and loud music. The medical consensus is
              that prolonged sleep deprivation constitutes torture and can cause permanent psychological damage.
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="font-semibold text-white">Rectal Feeding / &ldquo;Rectal Rehydration&rdquo;</p>
            <p className="text-stone-400 text-sm">
              The Senate Torture Report documented that detainees were subjected to &ldquo;rectal rehydration&rdquo; and
              &ldquo;rectal feeding&rdquo; — forced insertion of pureed food and fluids rectally. CIA medical officers
              acknowledged this had no medical purpose. It was punishment — sexual assault dressed up as a procedure.
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="font-semibold text-white">&ldquo;Walling,&rdquo; Confinement Boxes, Ice Baths</p>
            <p className="text-stone-400 text-sm">
              Detainees were slammed against walls. Confined in coffin-sized boxes for hours. Stripped naked and
              doused with cold water while chained to the ceiling. One detainee, Gul Rahman, died of hypothermia
              at a CIA black site in Afghanistan in November 2002 — chained to a concrete floor, half-naked, in
              near-freezing temperatures. No one was charged with his death.
            </p>
          </div>
        </div>
        <p className="text-stone-300 mb-4">
          The 2014 Senate Intelligence Committee report — over <strong>6,700 pages</strong>, of which only a 525-page
          executive summary was declassified — found that the CIA&apos;s &ldquo;enhanced interrogation techniques&rdquo;
          were <strong>far more brutal</strong> than the agency had disclosed to Congress, produced <strong>no
          actionable intelligence</strong> that couldn&apos;t have been obtained through conventional interrogation,
          and that the CIA had systematically lied to Congress and the public about the program&apos;s effectiveness.
        </p>
        <p className="text-stone-300 mb-4">
          Of the <strong>119 known CIA detainees</strong>, at least 26 were later determined to have been
          <strong>wrongfully held</strong>. They were innocent — tortured for months or years for nothing.
          Not a single CIA officer has been prosecuted. The only person imprisoned in connection with the
          torture program was <strong>John Kiriakou</strong> — the CIA officer who blew the whistle on it.
        </p>
        <blockquote className="border-l-4 border-red-500 pl-4 mt-4 text-stone-300 italic">
          &ldquo;We tortured some folks.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— President Barack Obama, August 1, 2014</span>
        </blockquote>
      </div>

      {/* Abu Ghraib */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">Abu Ghraib: The Photos That Shocked the World</h2>
        <p className="text-stone-700 mb-4">
          In April 2004, CBS News and <em>The New Yorker</em> published photographs from Abu Ghraib prison
          in Iraq that showed US military personnel torturing and humiliating Iraqi detainees. The images —
          naked prisoners stacked in human pyramids, hooded men standing on boxes with electrical wires
          attached to their bodies, soldiers giving thumbs-up next to corpses, a female soldier holding a
          naked prisoner on a leash — became the defining images of the Iraq War.
        </p>
        <p className="text-stone-700 mb-4">
          Eleven soldiers were convicted of crimes related to Abu Ghraib. The highest-ranking was a
          <strong>staff sergeant</strong>. No officer above the rank of colonel was held accountable.
          Secretary of Defense Donald Rumsfeld, who had authorized &ldquo;enhanced interrogation techniques&rdquo;
          for use at Guantánamo and whose policies migrated to Iraq, kept his job until 2006. General
          Ricardo Sanchez, who commanded all forces in Iraq, was never charged. The message was clear:
          the enlisted suffer consequences; the powerful do not.
        </p>
        <p className="text-stone-700">
          Major General Antonio Taguba, who investigated Abu Ghraib, later said: <em>&ldquo;There is no
          longer any doubt as to whether the current administration has committed war crimes. The only
          question that remains to be answered is whether those who ordered the use of torture will be
          held to account.&rdquo;</em> They were not.
        </p>
      </div>

      {/* Extraordinary Rendition */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Extraordinary Rendition: Outsourcing Torture</h2>
        <p className="text-stone-700 mb-4">
          When the CIA didn&apos;t want to torture people directly, it sent them to countries that would.
          &ldquo;Extraordinary rendition&rdquo; was the program of kidnapping suspected terrorists and
          flying them to countries like <strong>Egypt, Syria, Morocco, Jordan, and Uzbekistan</strong> —
          nations known for brutal interrogation practices — where they were tortured by foreign intelligence
          services on the CIA&apos;s behalf.
        </p>
        <p className="text-stone-700 mb-4">
          <strong>Maher Arar</strong>, a Canadian citizen born in Syria, was detained by US authorities
          during a layover at JFK Airport in 2002. He was rendered to Syria, where he was imprisoned
          for nearly a year and tortured — beaten with electrical cables, confined in a coffin-sized cell.
          A Canadian inquiry found he had <strong>no connection to terrorism</strong> whatsoever. The Canadian
          government apologized and paid him $10.5 million in compensation. The US government has never
          acknowledged wrongdoing and successfully blocked his lawsuit on &ldquo;state secrets&rdquo; grounds.
        </p>
        <p className="text-stone-700 mb-4">
          <strong>Khaled El-Masri</strong>, a German citizen, was kidnapped by the CIA in Macedonia in 2003,
          flown to Afghanistan, and tortured for five months. The CIA eventually realized they had the
          <strong>wrong person</strong>. He was dumped on a roadside in Albania. The European Court of Human
          Rights ruled that his treatment constituted torture. The US Supreme Court refused to hear his case.
        </p>
        <p className="text-stone-700">
          The Open Society Justice Initiative documented at least <strong>136 individuals</strong> who were
          rendered by the CIA, with the complicity of <strong>54 countries</strong>. The full scope of the
          program remains classified.
        </p>
      </div>

      {/* Mission Creep Timeline */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Mission Creep: How the War Changed Its Own Goals</h2>
        <p className="text-stone-500 text-sm mb-4">The stated objectives shifted constantly — always expanding, never achieved.</p>
        <div className="space-y-3">
          {[
            { year: '2001', mission: 'Destroy al-Qaeda. Capture or kill bin Laden.', reality: 'Bin Laden escaped Tora Bora in December. War shifted to Taliban.' },
            { year: '2002', mission: 'Defeat the Taliban. Establish a new Afghan government.', reality: 'Nation-building begins. Mission expands from counterterrorism to state-building.' },
            { year: '2003', mission: 'Disarm Iraq. Remove Saddam. Eliminate WMD threat.', reality: 'No WMDs found. 400,000 Iraqi soldiers disbanded. Insurgency begins.' },
            { year: '2004-06', mission: 'Stabilize Iraq. Counter the insurgency. Build democratic institutions.', reality: 'Civil war erupts. Sectarian violence peaks at 3,000 deaths/month. Abu Ghraib scandal.' },
            { year: '2007-08', mission: 'The "surge" — pacify Baghdad. Buy time for political reconciliation.', reality: 'Violence temporarily decreases. Political reconciliation never happens. Peak spending: $186B/year.' },
            { year: '2009-10', mission: 'Afghan surge — 100,000 troops. Reverse Taliban gains. Train Afghan forces.', reality: 'Temporary gains. Corruption undermines Afghan government. Drone wars expand to Yemen, Somalia.' },
            { year: '2011', mission: 'Kill bin Laden. Withdraw from Iraq. Protect Libyan civilians.', reality: 'Bin Laden killed (after 10 years). Libya bombed into a failed state. Iraq withdrawal creates vacuum.' },
            { year: '2014-15', mission: 'Defeat ISIS. Re-enter Iraq. Arm Syrian rebels.', reality: 'ISIS created by Iraq War. CIA-backed rebels fight Pentagon-backed rebels in Syria.' },
            { year: '2016-20', mission: 'Global counterterrorism. Maintain presence in 80+ countries.', reality: 'War becomes invisible. Special ops in 149 countries. Drone strikes accelerate. No exit strategy.' },
            { year: '2021', mission: 'Withdraw from Afghanistan. End the "forever war."', reality: 'Taliban takes over in 11 days. Chaotic evacuation. 13 Americans killed at Abbey Gate. $83B in equipment abandoned.' },
            { year: '2022-25', mission: 'Over-the-horizon counterterrorism. Global CT operations continue.', reality: 'Special operations in 80+ countries. CT budget exceeds $50B/yr. War on Terror never actually ended.' },
          ].map(m => (
            <div key={m.year} className="flex gap-4 border-b border-stone-100 pb-3">
              <span className="w-20 text-sm font-mono text-red-600 shrink-0">{m.year}</span>
              <div>
                <p className="text-sm font-semibold text-stone-700">{m.mission}</p>
                <p className="text-xs text-stone-500">{m.reality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The $83 Billion Abandonment */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The $83 Billion Abandonment</h2>
        <p className="text-stone-700 mb-4">
          When the US withdrew from Afghanistan in August 2021, it left behind an estimated <strong>$83 billion
          worth of military equipment</strong> that the US had provided to the Afghan National Defense and Security
          Forces — which collapsed without firing a meaningful shot:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {[
            { val: '75,000', label: 'Vehicles', note: 'Humvees, MRAPs, trucks' },
            { val: '600,000+', label: 'Small arms & light weapons', note: 'M16s, M4s, machine guns, sniper rifles' },
            { val: '208', label: 'Aircraft', note: 'Black Hawks, A-29s, C-130s, MD-530s' },
            { val: '162,000', label: 'Pieces of communication equipment', note: 'Radios, satellite phones' },
            { val: '16,000+', label: 'Night vision devices', note: 'The Taliban now has night vision' },
            { val: '$900M', label: 'Ammunition', note: 'Millions of rounds' },
          ].map(s => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-3 text-center border">
              <p className="text-lg font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
              <p className="text-xs text-muted">{s.label}</p>
              <p className="text-[10px] text-stone-400">{s.note}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700">
          The Taliban — a movement that began with pickup trucks and Kalashnikovs — now possesses one of the
          best-equipped military forces in the region, courtesy of the American taxpayer. The Afghan air force
          that the US built is now the Taliban&apos;s air force. The weapons that were supposed to fight the
          Taliban are now wielded by the Taliban. This was arguably the most expensive equipment abandonment
          in military history.
        </p>
      </div>

      {/* Reconstruction failures */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Reconstruction: Billions Wasted, Nothing Built</h2>
        <p className="text-stone-700 mb-4">
          The Special Inspector General for Afghanistan Reconstruction (SIGAR) — created specifically to track
          waste, fraud, and abuse in Afghanistan spending — documented <strong>decades of catastrophic waste</strong>:
        </p>
        <div className="space-y-3 mb-4">
          {[
            { item: '$43 million gas station', detail: 'DOD spent $43M on a single compressed natural gas filling station in Afghanistan — a station that should have cost $500K. The Pentagon couldn\'t explain the cost.' },
            { item: '$36 million military headquarters — never used', detail: 'A 64,000 sq ft facility at Camp Leatherneck, built against the objections of military commanders who said it wasn\'t needed. Completed. Never occupied.' },
            { item: '$486 million aircraft — sold for scrap', detail: 'G222 cargo planes purchased from Italy for the Afghan Air Force. They were unusable and were scrapped for 6 cents per pound — netting $32,000 from a $486 million investment.' },
            { item: '$7.8 billion counter-narcotics program', detail: 'After $7.8B spent fighting opium, Afghanistan\'s opium production reached record levels. The country produced 80% of the world\'s heroin.' },
            { item: '$4.7 billion crop substitution program', detail: 'Designed to get farmers to grow legal crops instead of opium. Afghan farmers took the money, planted the alternative crops, then planted poppies in adjacent fields.' },
            { item: '"Ghost soldiers" — $300M+/year', detail: 'Afghan commanders collected salaries for soldiers who didn\'t exist. At one point, up to 50% of security force personnel may have been "ghosts."' },
          ].map(w => (
            <div key={w.item} className="border-l-4 border-red-200 pl-4">
              <p className="font-semibold text-red-700 text-sm">{w.item}</p>
              <p className="text-sm text-stone-600">{w.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700">
          SIGAR&apos;s final report, <em>&ldquo;What We Need to Learn&rdquo;</em> (2021), concluded that the
          US government <strong>&ldquo;consistently struggled to develop and implement effective reconstruction
          strategies&rdquo;</strong> and that the failure was systemic: rotating personnel every 6-12 months
          ensured no institutional knowledge, metrics were designed to show progress rather than measure reality,
          and the incentive structure rewarded spending money rather than achieving outcomes.
        </p>
      </div>

      {/* Terrorism increase */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">More Terrorism Than When We Started</h2>
        <p className="text-stone-700 mb-4">
          The stated goal of the War on Terror was to eliminate terrorism. By every measurable metric, it has
          done the opposite:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {[
            { stat: '4× more', label: 'Active terrorist groups in 2024 vs 2001', source: 'RAND Corporation' },
            { stat: '33 → 67', label: 'Countries experiencing significant terrorism', source: 'Global Terrorism Index' },
            { stat: '~400 → 20,000+', label: 'Salafi-jihadist fighters (2001 vs 2024)', source: 'CSIS Transnational Threats Project' },
            { stat: '1 → 22+', label: 'Countries with active US CT operations', source: 'Costs of War Project' },
          ].map(s => (
            <div key={s.label} className="bg-red-50 rounded-lg p-4 border border-red-200">
              <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.stat}</p>
              <p className="text-sm font-medium">{s.label}</p>
              <p className="text-[10px] text-stone-400">{s.source}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700 mb-4">
          A RAND Corporation study found that <strong>military force is the least effective method</strong> of
          defeating terrorist organizations. Of 268 terrorist groups studied between 1968 and 2006, only 7%
          were defeated by military force. The most successful approaches were political accommodation (43%)
          and policing/intelligence (40%). The US chose the approach with the worst track record — and spent
          {fmtMoney(stats.warOnTerrorCost)} doing so.
        </p>
        <blockquote className="border-l-4 border-red-700 pl-4 text-stone-600 italic">
          &ldquo;You can&apos;t kill your way to victory in a war like this. For every terrorist you kill, you
          create ten new enemies.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— General Stanley McChrystal, former commander of US forces in Afghanistan</span>
        </blockquote>
      </div>

      {/* The Lies */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">The Afghanistan Papers: They Knew It Was Failing</h2>
        <p className="text-stone-700 mb-4">
          In December 2019, the <em>Washington Post</em> published the &ldquo;Afghanistan Papers&rdquo; — a trove
          of internal government documents and interviews with 400+ officials, obtained through FOIA litigation,
          revealing that <strong>US officials systematically lied to the public about the war in Afghanistan
          for nearly two decades</strong>.
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-white rounded-lg p-4">
            <blockquote className="text-sm text-stone-700 italic">
              &ldquo;We were devoid of a fundamental understanding of Afghanistan — we didn&apos;t know what we
              were doing.&rdquo;
            </blockquote>
            <p className="text-xs text-stone-500 mt-1">— Douglas Lute, Three-Star Army General, White House war czar under Bush and Obama</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <blockquote className="text-sm text-stone-700 italic">
              &ldquo;If the American people knew the magnitude of this dysfunction... 2,400 lives lost. Who will
              say this was in vain?&rdquo;
            </blockquote>
            <p className="text-xs text-stone-500 mt-1">— Douglas Lute</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <blockquote className="text-sm text-stone-700 italic">
              &ldquo;Every data point was altered to present the best picture possible.&rdquo;
            </blockquote>
            <p className="text-xs text-stone-500 mt-1">— Bob Crowley, Army Colonel, counterinsurgency adviser</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <blockquote className="text-sm text-stone-700 italic">
              &ldquo;The [US] strategy became self-licking ice cream cone.&rdquo;
            </blockquote>
            <p className="text-xs text-stone-500 mt-1">— Unnamed senior NSC official</p>
          </div>
        </div>
        <p className="text-stone-700">
          Three presidents — Bush, Obama, and Trump — told the American public that progress was being made.
          Internally, their own officials knew the war was failing. The parallels to the Pentagon Papers — the
          Vietnam-era documents showing similar systematic deception — were impossible to miss. The lesson of
          Vietnam wasn&apos;t learned. It was repeated, at even greater cost.
        </p>
      </div>

      {/* Cost comparison with other wars */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">In Historical Context</h2>
        <p className="text-stone-500 text-sm mb-4">All costs in 2025 inflation-adjusted dollars.</p>
        <div className="space-y-2">
          {[
            { war: 'War on Terror (2001–present)', cost: '$8.0T', bar: 100 },
            { war: 'World War II (1941–1945)', cost: '$4.7T', bar: 59 },
            { war: 'Vietnam War (1955–1975)', cost: '$1.0T', bar: 13 },
            { war: 'Korean War (1950–1953)', cost: '$430B', bar: 5 },
            { war: 'World War I (1917–1918)', cost: '$380B', bar: 5 },
            { war: 'Gulf War (1990–1991)', cost: '$116B', bar: 1 },
          ].map(w => (
            <div key={w.war} className="flex items-center gap-3">
              <span className="w-52 text-sm text-right shrink-0">{w.war}</span>
              <div className="flex-1 bg-stone-100 rounded-full h-5 overflow-hidden">
                <div className="h-full rounded-full bg-red-600" style={{ width: `${w.bar}%` }} />
              </div>
              <span className="w-16 text-sm font-semibold text-right">{w.cost}</span>
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-sm mt-4">
          The War on Terror has cost more than every other American war since 1776 except World War II —
          and it&apos;s still going. Unlike WWII, which lasted 4 years and resulted in the defeat of fascism
          and the transformation of Europe and Asia, the War on Terror has lasted 25 years, produced no
          comparable strategic achievement, and arguably left America less safe.
        </p>
      </div>

      {/* What the troops say */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What the Troops Say</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-stone-300 italic">
              &ldquo;We were told we were bringing democracy to Afghanistan. Twenty years later, the Taliban
              is back and girls can&apos;t go to school. My friends died for nothing. I don&apos;t know how
              to process that.&rdquo;
            </p>
            <p className="text-stone-500 text-sm mt-1">— Army veteran, 3 tours Afghanistan, NPR interview 2021</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-stone-300 italic">
              &ldquo;The war was a lie. Not just Iraq — all of it. We weren&apos;t defending America.
              We were defending contractor profits and politicians&apos; careers.&rdquo;
            </p>
            <p className="text-stone-500 text-sm mt-1">— Marine veteran, 2 tours Iraq, Costs of War Project interview</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-stone-300 italic">
              &ldquo;The hardest part isn&apos;t the memories of combat. It&apos;s watching the same people who
              sent us to war get rich off it while my buddy kills himself in a VA parking lot.&rdquo;
            </p>
            <p className="text-stone-500 text-sm mt-1">— Army medic veteran, Iraq, Reddit AMA 2023</p>
          </div>
        </div>
        <p className="text-stone-300 mt-4">
          A 2023 Pew survey found that <strong>73% of veterans</strong> said the Iraq War was &ldquo;not worth
          fighting.&rdquo; 62% said the same about Afghanistan. The people who actually fought these wars
          overwhelmingly believe they were a mistake.
        </p>
      </div>

      {/* The Libertarian Case */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-amber-800">The Libertarian Case Against the War on Terror</h2>
        <p className="text-stone-700 mb-4">
          From a liberty perspective, the War on Terror represents the most catastrophic expansion of government
          power in American history. It has eroded virtually every protection the Constitution was designed to provide:
        </p>
        <div className="space-y-3 mb-4">
          {[
            { right: 'Due Process (5th Amendment)', violation: 'American citizens killed by drone strikes without trial. Indefinite detention without charges at Guantánamo.' },
            { right: 'Protection from Unreasonable Search (4th Amendment)', violation: 'NSA mass surveillance of every American\'s phone records, emails, and internet activity — without warrants.' },
            { right: 'Congressional War Power (Article I)', violation: '60 words used to authorize military operations in 22+ countries over 25 years without a new vote.' },
            { right: 'Protection from Cruel & Unusual Punishment (8th Amendment)', violation: 'Waterboarding, sleep deprivation, rectal feeding — torture, euphemized as "enhanced interrogation."' },
            { right: 'Freedom from Warrantless Surveillance (4th Amendment)', violation: 'PATRIOT Act Section 215, FISA Court rubber-stamps, National Security Letters without judicial review.' },
            { right: 'Right to Trial (6th Amendment)', violation: 'Military commissions at Guantánamo bypass civilian courts. Secret evidence. Classified proceedings.' },
          ].map(v => (
            <div key={v.right} className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold text-amber-800">{v.right}</p>
              <p className="text-sm text-stone-600">{v.violation}</p>
            </div>
          ))}
        </div>
        <blockquote className="border-l-4 border-amber-700 pl-4 text-stone-600 italic mb-4">
          &ldquo;The Patriot Act was written many, many years before 9/11. The attacks of 9/11 provided
          the opportunity for it to be passed. Crises always serve as the catalyst for growing government power.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Ron Paul</span>
        </blockquote>
        <blockquote className="border-l-4 border-amber-700 pl-4 text-stone-600 italic mb-4">
          &ldquo;We should not be in the business of nation-building. It doesn&apos;t work. It never has worked.
          It&apos;s not constitutional. And it costs the American taxpayer trillions.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Senator Rand Paul</span>
        </blockquote>
        <p className="text-stone-700">
          James Madison warned in 1795 that &ldquo;war is the parent of armies; from these proceed debts and
          taxes; and armies, and debts, and taxes are the known instruments for bringing the many under the
          domination of the few.&rdquo; The War on Terror has confirmed every word: {fmtMoney(stats.warOnTerrorCost)}
          in debt, a permanent military establishment, a surveillance state, and the concentration of war-making
          power in a single individual unchecked by Congress or the courts. The Founders&apos; worst fears,
          realized in their entirety.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources &amp; Further Reading</h2>
        <div className="space-y-2 text-sm text-stone-600">
          <p>• <strong>Costs of War Project</strong>, Watson Institute, Brown University — Primary source for cost and casualty data. <Link href="https://watson.brown.edu/costsofwar/" className="text-red-800 hover:underline">watson.brown.edu/costsofwar</Link></p>
          <p>• <strong>Senate Intelligence Committee Study of the CIA&apos;s Detention and Interrogation Program</strong> (2014) — The &ldquo;Torture Report.&rdquo; 525-page declassified executive summary.</p>
          <p>• <strong>The Afghanistan Papers</strong>, Washington Post (2019) — Thousands of pages of internal documents showing systematic deception about the war.</p>
          <p>• <strong>SIGAR Reports</strong> — Special Inspector General for Afghanistan Reconstruction. Quarterly reports documenting waste, fraud, and failure.</p>
          <p>• <strong>Iraq Body Count</strong> — Database of documented civilian deaths from violence in Iraq. <Link href="https://www.iraqbodycount.org" className="text-red-800 hover:underline">iraqbodycount.org</Link></p>
          <p>• <strong>Bureau of Investigative Journalism</strong> — Drone strike data: Pakistan, Yemen, Somalia, Afghanistan. <Link href="https://www.thebureauinvestigates.com/projects/drone-war" className="text-red-800 hover:underline">thebureauinvestigates.com</Link></p>
          <p>• <strong>Congressional Research Service</strong> — &ldquo;Costs of Major U.S. Wars&rdquo; reports and annual defense budget analyses.</p>
          <p>• <strong>RAND Corporation</strong> — &ldquo;How Terrorist Groups End&rdquo; (2008). Study of 268 terrorist organizations.</p>
          <p>• Ron Paul, <em>Swords into Plowshares</em> (2015) — Libertarian case against interventionism.</p>
          <p>• Chalmers Johnson, <em>Blowback</em> trilogy (2000-2006) — Definitive analysis of imperial consequences.</p>
          <p>• Smedley Butler, <em>War Is a Racket</em> (1935) — The original insider critique of war profiteering.</p>
        </div>
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
