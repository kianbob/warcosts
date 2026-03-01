import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt, fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'Empire of Bases — 750 Military Installations in 80 Countries | WarCosts',
  description: 'The US maintains 750 overseas military bases in 80 countries — more than any empire in history. Okinawa. Diego Garcia. Ramstein. $55B/year. Environmental contamination. Local opposition. The base nation.',
  openGraph: {
    title: 'Empire of Bases — 750 Bases in 80 Countries',
    description: 'More than the Roman, British, and Soviet empires combined. $55B/year. No other country comes close.',
    url: 'https://www.warcosts.org/analysis/empire-of-bases',
  },
}

const empireComparison = [
  { name: 'United States (2025)', bases: 750, countries: 80, note: 'Active military installations across every inhabited continent' },
  { name: 'Roman Empire (peak, ~117 AD)', bases: 40, countries: 40, note: '~40 provinces with permanent legions. Lasted 500 years.' },
  { name: 'British Empire (peak, ~1920)', bases: 36, countries: 36, note: 'Largest empire in history — 25% of Earth\'s land surface' },
  { name: 'Soviet Union (peak, ~1980)', bases: 20, countries: 20, note: 'Primarily Warsaw Pact nations and allied states' },
  { name: 'France (2025)', bases: 10, countries: 10, note: 'Mostly former colonies in Africa and overseas territories' },
  { name: 'United Kingdom (2025)', bases: 7, countries: 7, note: 'Remnants of empire — Cyprus, Gibraltar, Diego Garcia, Falklands' },
  { name: 'China (2025)', bases: 3, countries: 3, note: 'Djibouti (2017), Cambodia (suspected), and Tajikistan (suspected)' },
  { name: 'Russia (2025)', bases: 9, countries: 9, note: 'Syria, Armenia, Belarus, Kyrgyzstan, Tajikistan, and a few others' },
]

const basesByRegion = [
  { region: 'Europe', bases: '~300', troops: '~80,000', key: 'Germany (119 bases, 34,000 troops), Italy (44 bases), UK (25 bases), Spain, Turkey, Greece, Belgium, Netherlands, Poland, Romania', note: 'WWII and Cold War legacy — 80 years after the wars that put them there.' },
  { region: 'East Asia & Pacific', bases: '~250', troops: '~80,000', key: 'Japan (120 bases, 54,000 troops — 70% on Okinawa), South Korea (73 bases, 28,500 troops), Guam, Australia, Philippines, Singapore, Diego Garcia', note: 'WWII and Korean War legacy. China containment strategy.' },
  { region: 'Middle East & Central Asia', bases: '~60', troops: '~35,000', key: 'Bahrain (US 5th Fleet HQ), Kuwait, Qatar (Al Udeid — CENTCOM forward HQ), UAE, Saudi Arabia, Iraq, Jordan, Oman, Turkey (Incirlik — 50 nuclear weapons)', note: 'War on Terror expansion. Oil. Iran containment.' },
  { region: 'Africa', bases: '~30', troops: '~7,000', key: 'Djibouti (Camp Lemonnier — 4,000+ personnel), Niger, Kenya, Somalia, Cameroon, Chad, Burkina Faso', note: 'Post-9/11 expansion. AFRICOM. Special operations. Drone strikes.' },
  { region: 'Latin America & Caribbean', bases: '~20', troops: '~5,000', key: 'Guantánamo Bay (Cuba), Honduras (Soto Cano), Colombia, Curaçao, Aruba', note: 'Drug war. Regional influence. SOUTHCOM.' },
]

export default function EmpireOfBasesPage() {
  const presence = loadData('overseas-presence.json')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd title="Empire of Bases — 750 Military Installations in 80 Countries" description="More overseas military bases than any empire in history. Okinawa, Diego Garcia, Ramstein. The base network that sustains permanent war." slug="empire-of-bases" />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Empire of Bases' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          Empire of Bases
        </h1>
        <p className="text-xl text-stone-300 mb-4">{fmt(presence.totalBases)} Bases. {presence.totalCountries} Countries. No Empire in History Compares.</p>
        <p className="text-stone-400 text-lg">
          The United States maintains approximately {fmt(presence.totalBases)} military bases and installations
          in {presence.totalCountries} countries, with {fmt(presence.totalOverseasTroops)} troops permanently stationed
          overseas. It is the largest global military footprint in human history — more than twice the combined
          reach of the Roman Empire, the British Empire, and the Soviet Union at their respective peaks. The
          annual cost exceeds {fmtMoney(presence.annualBaseCost)} — more than the entire budget of the Department
          of Education. And no one voted for it.
        </p>
      </div>

      <ShareButtons title="Empire of Bases — 750 Bases in 80 Countries" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmt(presence.totalBases), label: 'Overseas Bases', sub: 'Across every inhabited continent' },
          { val: `${presence.totalCountries}`, label: 'Countries', sub: '~40% of all nations on Earth' },
          { val: fmt(presence.totalOverseasTroops), label: 'Troops Overseas', sub: 'Permanently stationed abroad' },
          { val: fmtMoney(presence.annualBaseCost), label: 'Annual Cost', sub: 'More than Dept. of Education' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Empire comparison */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-6 text-center">Foreign Military Presence: Empires Compared</h2>
        <div className="space-y-3 mb-4">
          {empireComparison.map(e => {
            const pct = (e.bases / 750) * 100
            return (
              <div key={e.name}>
                <div className="flex items-center gap-3">
                  <span className="w-52 text-sm font-medium text-right shrink-0">{e.name}</span>
                  <div className="flex-1 bg-stone-200 rounded-full h-6 overflow-hidden">
                    <div className="h-full rounded-full bg-red-600" style={{ width: `${Math.max(pct, 1)}%` }} />
                  </div>
                  <span className="w-20 text-sm font-semibold">{e.bases} bases</span>
                </div>
                <p className="text-[10px] text-stone-400 ml-52 pl-3 mt-0.5">{e.note}</p>
              </div>
            )
          })}
        </div>
        <p className="text-center text-sm text-stone-600 mt-4 font-semibold">
          The US has more overseas military bases than the rest of the world combined — by a factor of 10.
        </p>
      </div>

      {/* Bases by region */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Base Network by Region</h2>
        <div className="space-y-4">
          {basesByRegion.map(r => (
            <div key={r.region} className="border rounded-lg p-4">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-bold text-lg">{r.region}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">{r.bases} bases</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">{r.troops} troops</span>
              </div>
              <p className="text-sm text-stone-700 mb-1"><strong>Key installations:</strong> {r.key}</p>
              <p className="text-xs text-stone-500">{r.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Okinawa deep dive */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">Okinawa: 80 Years of Occupation</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">70%</p>
            <p className="text-xs text-muted">Of Japan&apos;s US bases on one island</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">31</p>
            <p className="text-xs text-muted">US military facilities</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">72%</p>
            <p className="text-xs text-muted">Of Okinawans oppose new base construction (2019 referendum)</p>
          </div>
        </div>
        <p className="text-stone-700 mb-4">
          Okinawa is the most extreme example of what the US base network does to a community. The island — just
          0.6% of Japan&apos;s total land area — hosts <strong>70% of all US military facilities in Japan</strong>.
          Roughly <strong>18% of the island&apos;s land</strong> is occupied by the US military. The bases have been
          there since 1945 — 80 years after World War II ended.
        </p>
        <p className="text-stone-700 mb-4">
          The human toll on Okinawans has been enormous:
        </p>
        <ul className="space-y-2 text-sm text-stone-700 mb-4">
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">•</span> <strong>Sexual assaults:</strong> Hundreds of documented cases of sexual assault by US military personnel against Okinawans, including the horrific 1995 kidnapping and rape of a 12-year-old girl by three US service members — which triggered the largest anti-base protests in Okinawa&apos;s history (85,000 people).</li>
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">•</span> <strong>Aircraft crashes:</strong> A 2004 Marine helicopter crashed into Okinawa International University. A 2016 Osprey crashed off the coast. Dozens of other incidents. Okinawans live under the constant threat of military aircraft falling from the sky.</li>
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">•</span> <strong>Noise pollution:</strong> Fighter jets taking off at all hours. Artillery exercises. Helicopter training. Schools near bases must pause classes when aircraft pass overhead. The noise has been documented to cause hearing damage, sleep disruption, and cardiovascular stress.</li>
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">•</span> <strong>Environmental contamination:</strong> PFAS (&ldquo;forever chemicals&rdquo;) from firefighting foam detected in rivers and drinking water near bases. Fuel spills. Chemical dumping. Okinawans are drinking contaminated water because of bases they never asked for.</li>
          <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">•</span> <strong>Land seizure:</strong> Much of the base land was seized from Okinawan farmers during and after WWII. Families lost ancestral land that had been farmed for generations. They&apos;ve been fighting to get it back for 80 years.</li>
        </ul>
        <p className="text-stone-700">
          In a <strong>2019 referendum</strong>, 72% of Okinawans voted against new US base construction at Henoko.
          Both the Japanese and US governments proceeded anyway. The will of the Okinawan people is irrelevant
          to the base-building machine. As one Okinawan protester told the BBC: <em>&ldquo;We are not a colony.
          We are human beings. But they treat us like the land beneath their bases — something to be used.&rdquo;</em>
        </p>
      </div>

      {/* Diego Garcia */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Diego Garcia: Expelling an Entire Population to Build a Base</h2>
        <p className="text-stone-700 mb-4">
          In the late 1960s and early 1970s, the United Kingdom and the United States conspired to forcibly
          remove the <strong>entire indigenous population of the Chagos Archipelago</strong> — approximately
          2,000 Chagossians who had lived on the islands for generations — to make way for a US military base
          on Diego Garcia.
        </p>
        <p className="text-stone-700 mb-4">
          The Chagossians were loaded onto cargo ships. Their pet dogs were rounded up and gassed with exhaust
          fumes in front of their owners — a deliberate act of cruelty meant to show there was no going back.
          The people were dumped in Mauritius and the Seychelles, where they lived in poverty. Many died of
          what they called &ldquo;sagren&rdquo; — sadness, homesickness, a broken heart.
        </p>
        <p className="text-stone-700 mb-4">
          The base on Diego Garcia became one of the most strategically important US installations in the world:
          a staging ground for operations in the Middle East, East Africa, and South Asia. B-52 and B-2 bombers
          launched strikes on Iraq and Afghanistan from Diego Garcia. It may have been used as a CIA &ldquo;black
          site&rdquo; for extraordinary rendition — the euphemism for kidnapping suspects and transporting them
          to countries where they could be tortured.
        </p>
        <p className="text-stone-700 mb-4">
          The Chagossians have been fighting for the right to return for over 50 years. In 2019, the International
          Court of Justice ruled that the UK&apos;s separation of the Chagos Archipelago from Mauritius was illegal.
          In 2024, the UK agreed in principle to transfer sovereignty to Mauritius — but the US base will remain,
          and the Chagossians&apos; right to return to Diego Garcia specifically remains uncertain.
        </p>
        <blockquote className="border-l-4 border-red-700 pl-4 text-stone-600 italic">
          &ldquo;They forced us out of our home, killed our dogs, and put us on a ship like cargo. We had nothing.
          We lost everything. And for what? So they could build a runway.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Liseby Elysé, Chagossian exile</span>
        </blockquote>
      </div>

      {/* Ramstein */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Ramstein: The Drone Relay Station</h2>
        <p className="text-stone-700 mb-4">
          Ramstein Air Base in Germany — the largest US military community outside the United States — plays a
          critical role that few Germans or Americans understand: it is the <strong>relay station for US drone
          strikes across the Middle East and Africa</strong>.
        </p>
        <p className="text-stone-700 mb-4">
          Because the signal from drone operators in Nevada cannot reach drones in Yemen or Somalia directly
          (the curvature of the Earth and satellite limitations), the signal is bounced through a relay station
          at Ramstein. Without Ramstein, the US drone program in Africa and the Middle East could not function
          as it currently operates.
        </p>
        <p className="text-stone-700 mb-4">
          This means that <strong>Germany — which has not authorized any of these drone strikes and which
          officially opposes targeted killings — is an essential node</strong> in the US assassination program.
          German courts have been asked to rule on whether Germany&apos;s participation (through hosting the relay
          infrastructure) violates German and international law. Annual protests at Ramstein draw thousands.
        </p>
        <p className="text-stone-700">
          Ramstein is also home to Burger King, Taco Bell, Popeyes, a movie theater, a bowling alley, and an
          American-style shopping mall. It is a complete American city transplanted 5,000 miles from home — from
          which missiles are launched that kill people on another continent. The cognitive dissonance is the
          architecture of empire.
        </p>
      </div>

      {/* Environmental contamination */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Environmental Contamination: Poisoning the Land</h2>
        <p className="text-stone-700 mb-4">
          US military bases are among the most polluted sites in the world. The contamination spans decades
          and continents:
        </p>
        <div className="space-y-4 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">PFAS (&ldquo;Forever Chemicals&rdquo;)</h3>
            <p className="text-sm text-stone-700">
              Firefighting foam (AFFF) used on military bases for decades contains PFAS — per- and polyfluoroalkyl
              substances that never break down in the environment. PFAS contamination has been detected in groundwater
              near bases in Japan, Germany, South Korea, Australia, Belgium, and the US itself. These chemicals
              are linked to cancer, thyroid disease, immune disorders, and reproductive problems. At hundreds of
              bases worldwide, the water is contaminated — and the people living nearby are drinking it.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Red Hill, Hawaii: 93,000 People Poisoned</h3>
            <p className="text-sm text-stone-700">
              The Red Hill Bulk Fuel Storage Facility in Hawaii — underground tanks built during WWII holding
              180 million gallons of jet fuel — leaked into the drinking water supply serving <strong>93,000
              people</strong>, mostly military families. Residents reported fuel-smelling water coming from their
              taps. Children fell ill. The Navy initially denied the contamination, then admitted it, then
              dragged its feet on cleanup. The facility was finally ordered shut down in 2022, but full
              remediation will take decades. The people affected are still dealing with health consequences.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Vieques, Puerto Rico: 60 Years as a Bombing Range</h3>
            <p className="text-sm text-stone-700">
              The US Navy used the island of Vieques as a live-fire bombing range for <strong>60 years</strong>
              (1941–2003). Residents lived between two bombing zones. Cancer rates on Vieques are <strong>27%
              higher</strong> than the Puerto Rican mainland. Rates of heart disease, diabetes, and respiratory
              illness are dramatically elevated. The Navy used depleted uranium, napalm, Agent Orange, and
              other toxic munitions. Cleanup has been glacial. The people of Vieques are still dying from
              contamination that ended two decades ago.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Carbon Footprint</h3>
            <p className="text-sm text-stone-700">
              The Pentagon&apos;s overseas base network produces more CO₂ emissions than <strong>140 individual
              countries</strong>. If the US military were a country, it would be the 47th largest emitter of
              greenhouse gases in the world. The DOD is the single largest institutional consumer of fossil
              fuels on Earth.
            </p>
          </div>
        </div>
      </div>

      {/* Cost question */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Cost: {fmtMoney(presence.annualBaseCost)}/Year (At Least)</h2>
        <p className="text-stone-700 mb-4">
          The official cost of maintaining overseas bases is approximately {fmtMoney(presence.annualBaseCost)}
          per year. But this is almost certainly a dramatic undercount. David Vine, author of <em>Base Nation</em>,
          estimates the true cost — including personnel, construction, maintenance, equipment, and support services —
          could be <strong>$100-150 billion per year</strong>.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">What {fmtMoney(presence.annualBaseCost)}/yr Could Fund Instead</p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• <strong>Free public college</strong> for every American ($80B/yr)</li>
              <li>• <strong>End veteran homelessness</strong> ($20B/yr)</li>
              <li>• <strong>Double the EPA budget</strong> ($12B → $24B)</li>
              <li>• <strong>Triple NASA&apos;s budget</strong> ($25B → $75B)</li>
              <li>• <strong>Fund the National Science Foundation</strong> for 5+ years</li>
            </ul>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">Why Bases Never Close</p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• Local economies in host countries depend on base spending</li>
              <li>• US contractors profit from construction and services</li>
              <li>• Congress members protect bases in allied countries for diplomatic leverage</li>
              <li>• Military brass wants forward deployment for career advancement</li>
              <li>• The &ldquo;threat&rdquo; that justified the base is always replaced by a new one</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700">
          As Vine writes: <em>&ldquo;Once a base is built, it develops its own political constituency — both in
          the host country and in Congress. The base creates jobs, contracts, and economic activity. Closing it
          means eliminating all of that. So bases almost never close, regardless of whether the threat that
          justified them still exists.&rdquo;</em>
        </p>
      </div>

      {/* How bases create permanent war */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How Bases Create Permanent War</h2>
        <p className="text-stone-700 mb-4">
          The base network isn&apos;t just a consequence of American military policy — it&apos;s a <em>cause</em>.
          Bases don&apos;t just project power; they generate demand for their own existence:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">1. Bases Generate Resentment → New Threats</h3>
            <p className="text-sm text-stone-700">
              Foreign military bases on your soil breed resentment. Osama bin Laden cited US bases in Saudi Arabia
              as his primary grievance. The presence of American troops — with their cultural differences, their
              accidents, their occasional crimes — creates friction that local politicians and extremists exploit.
              The bases that are supposed to contain threats actually generate them.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">2. New Threats → More Bases</h3>
            <p className="text-sm text-stone-700">
              When new threats emerge (often from blowback), the response is more bases, more deployments, more
              infrastructure. The War on Terror expanded the base network from ~700 to 750+ installations. Each
              new base creates new frictions, new resentments, new threats — justifying yet more bases.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">3. Bases Create Political Constituencies → Permanent Funding</h3>
            <p className="text-sm text-stone-700">
              Every base has contractors, suppliers, workers, and economic dependencies — both in the host country
              and in the US. Defense contractors build the bases, supply the equipment, run the dining facilities,
              and maintain the infrastructure. Closing a base means eliminating all of that economic activity.
              The result: bases almost never close.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">4. The Cycle Is Self-Sustaining</h3>
            <p className="text-sm text-stone-700">
              Bases generate resentment → resentment creates threats → threats justify more bases → more bases
              generate more resentment. The cycle has been running since 1945. It has never been broken because
              too many people — contractors, military brass, politicians, local economies — profit from its continuation.
            </p>
          </div>
        </div>
      </div>

      {/* Local opposition */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Local Opposition: The People Who Live Under the Bases</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-red-200 pl-4">
            <p className="font-semibold">Okinawa, Japan</p>
            <p className="text-sm text-stone-600">72% voted against new base construction (2019). Decades of protests. Largest demonstrations in Okinawa&apos;s history. Both governments proceeded anyway.</p>
          </div>
          <div className="border-l-4 border-red-200 pl-4">
            <p className="font-semibold">Jeju Island, South Korea</p>
            <p className="text-sm text-stone-600">Villagers fought for years against a naval base that destroyed centuries-old volcanic rock formations and UNESCO-quality coastline. They were arrested. The base was built.</p>
          </div>
          <div className="border-l-4 border-red-200 pl-4">
            <p className="font-semibold">Vicenza, Italy</p>
            <p className="text-sm text-stone-600">Tens of thousands marched against the expansion of the US Army&apos;s base (Camp Ederle/Del Din). 90,000 residents signed a petition. The expansion proceeded.</p>
          </div>
          <div className="border-l-4 border-red-200 pl-4">
            <p className="font-semibold">Ramstein, Germany</p>
            <p className="text-sm text-stone-600">Annual protests target the base&apos;s role as a relay station for US drone strikes in Africa and the Middle East. German peace organizations call it complicity in extrajudicial killing.</p>
          </div>
          <div className="border-l-4 border-red-200 pl-4">
            <p className="font-semibold">Ecuador</p>
            <p className="text-sm text-stone-600">President Rafael Correa refused to renew the US base lease at Manta in 2009, saying: <em>&ldquo;We&apos;ll renew your base when you let us put an Ecuadorian base in Miami.&rdquo;</em> The base closed.</p>
          </div>
          <div className="border-l-4 border-red-200 pl-4">
            <p className="font-semibold">Philippines</p>
            <p className="text-sm text-stone-600">Closed US bases at Clark and Subic Bay in 1992 after massive protests and a Philippine Senate vote. The US later negotiated re-access through the Enhanced Defense Cooperation Agreement.</p>
          </div>
        </div>
      </div>

      {/* Guantanamo Bay */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Guantánamo Bay: The Base That Won&apos;t Close</h2>
        <p className="text-stone-700 mb-4">
          The US naval base at Guantánamo Bay, Cuba is the oldest overseas US military base — and one of the
          most controversial. The US has occupied it since <strong>1903</strong>, under a lease imposed on Cuba
          after the Spanish-American War. The lease can only be terminated by mutual agreement — and the US
          has never agreed. Cuba considers the occupation illegal. The rent checks — <strong>$4,085 per year</strong>,
          unchanged since 1903 — have gone uncashed by Cuba since the revolution.
        </p>
        <p className="text-stone-700 mb-4">
          After 9/11, Guantánamo became notorious as the site of the US detention facility for &ldquo;enemy
          combatants.&rdquo; The Bush administration chose Guantánamo specifically because its legal status
          was ambiguous — prisoners were technically not on US soil, allowing the government to argue they
          had no constitutional rights.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {[
            { stat: '780', label: 'Total detainees held since 2002' },
            { stat: '731', label: 'Transferred or released — most never charged' },
            { stat: '15', label: 'Remain as of 2025' },
          ].map(s => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border">
              <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.stat}</p>
              <p className="text-xs text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700 mb-4">
          Of the 780 men detained at Guantánamo, the vast majority were held for years without charges.
          Many were tortured. The facility has cost over <strong>$13 million per detainee per year</strong> —
          making it the most expensive prison on Earth. A single maximum-security federal prisoner costs
          approximately $40,000 per year. Guantánamo costs 325× more.
        </p>
        <p className="text-stone-700">
          Obama, Trump, and Biden all promised or discussed closing Guantánamo. None did. The base persists
          because it serves a political function: it allows the government to detain people indefinitely
          outside the reach of US courts, in a legal black hole that the Constitution was supposed to prevent.
        </p>
      </div>

      {/* Status of Forces Agreements */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Status of Forces Agreements: Above the Law</h2>
        <p className="text-stone-700 mb-4">
          When US troops commit crimes overseas, they are typically shielded by <strong>Status of Forces
          Agreements (SOFAs)</strong> — bilateral treaties that often give the US primary jurisdiction over
          crimes committed by its personnel. This means that when a US service member commits a crime in a
          host country — including assault, rape, or murder — they are often tried by US military courts
          rather than local courts, if tried at all.
        </p>
        <div className="space-y-3 mb-4">
          <div className="border-l-4 border-red-200 pl-4">
            <p className="font-semibold">Japan SOFA</p>
            <p className="text-sm text-stone-600">
              Under the US-Japan SOFA, the US has primary jurisdiction over crimes committed by service members
              while on duty. Even off-duty crimes are often handled through negotiation rather than prosecution.
              In Okinawa alone, US military personnel have been involved in hundreds of documented crimes —
              including the 1995 kidnapping and gang rape of a 12-year-old girl. The light sentences imposed
              by US military courts have been a source of enormous resentment.
            </p>
          </div>
          <div className="border-l-4 border-red-200 pl-4">
            <p className="font-semibold">South Korea SOFA</p>
            <p className="text-sm text-stone-600">
              Between 1967 and 2018, US troops in South Korea were involved in over 100,000 reported
              criminal incidents. Only a fraction resulted in prosecution. The SOFA was revised in 2001
              to give Korea greater jurisdiction, but controversies continue — particularly involving
              drunk driving, assault, and sexual offenses.
            </p>
          </div>
          <div className="border-l-4 border-red-200 pl-4">
            <p className="font-semibold">Italy — The Cavalese Cable Car Disaster</p>
            <p className="text-sm text-stone-600">
              On February 3, 1998, a US Marine EA-6B Prowler flying illegally low severed a cable car line
              in Cavalese, Italy, killing <strong>20 people</strong>. The pilot, Captain Richard Ashby,
              was tried by US military court (per SOFA) and <strong>acquitted</strong> of all charges related
              to the deaths. He was later convicted only of obstruction for destroying the cockpit video.
              The acquittal caused outrage in Italy and across Europe.
            </p>
          </div>
        </div>
        <p className="text-stone-700">
          SOFAs effectively create a two-tier legal system: local citizens are subject to local laws, while
          American military personnel operate under a different — and often more lenient — legal framework.
          As political scientist Alexander Cooley writes: <em>&ldquo;The fundamental issue is sovereignty.
          When another country&apos;s military operates on your soil under its own legal system, you are
          not fully sovereign.&rdquo;</em>
        </p>
      </div>

      {/* The Roman Parallel */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Roman Parallel: From Republic to Empire</h2>
        <p className="text-stone-300 mb-4">
          The parallels between the American base network and the Roman Empire&apos;s frontier system are
          striking — and ominous:
        </p>
        <div className="space-y-3 mb-4">
          {[
            { roman: 'Permanent legions on the frontier', american: 'Permanent bases in 80 countries' },
            { roman: 'Frontier garrisons justified by "barbarian" threats', american: 'Bases justified by "terrorist" or "adversary" threats' },
            { roman: 'Military spending consumed the treasury', american: 'Military spending consumes >50% of discretionary budget' },
            { roman: 'Generals became political power brokers', american: 'Retired generals sit on defense contractor boards' },
            { roman: 'Provinces exploited to fund the military', american: 'Taxpayers fund bases in countries richer than most US states' },
            { roman: 'Military expansion created new enemies at the frontier', american: 'Bases create resentment that generates new "threats"' },
            { roman: 'Republic collapsed into empire as military power grew', american: 'Constitutional war powers transferred from Congress to President' },
          ].map((p, i) => (
            <div key={i} className="grid grid-cols-2 gap-4">
              <div className="text-stone-400 text-sm"><span className="text-stone-500 font-semibold">Rome:</span> {p.roman}</div>
              <div className="text-stone-300 text-sm"><span className="text-red-400 font-semibold">US:</span> {p.american}</div>
            </div>
          ))}
        </div>
        <blockquote className="border-l-4 border-red-500 pl-4 text-stone-300 italic mt-4">
          &ldquo;A republic cannot be an empire. If we maintain this worldwide military footprint, we will
          eventually lose the republic. That is the lesson of Rome, and we are repeating it.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Chalmers Johnson, <em>Nemesis</em>, 2006</span>
        </blockquote>
      </div>

      {/* The Libertarian Case */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-amber-800">The Libertarian Case: Bring Them Home</h2>
        <p className="text-stone-700 mb-4">
          The global base network is the physical infrastructure of empire — and from a liberty perspective,
          empire is incompatible with republican self-government.
        </p>
        <blockquote className="border-l-4 border-amber-700 pl-4 text-stone-600 italic mb-4">
          &ldquo;We should have the strongest national defense in the world. But national defense means
          defending this nation — not running an empire of 900 bases in 130 countries.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Ron Paul</span>
        </blockquote>
        <blockquote className="border-l-4 border-amber-700 pl-4 text-stone-600 italic mb-4">
          &ldquo;The Constitution says provide for the common defense — not provide for the defense of
          Japan, Germany, South Korea, and 77 other countries.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Senator Rand Paul</span>
        </blockquote>
        <p className="text-stone-700 mb-4">
          Key libertarian arguments against the base network:
        </p>
        <div className="space-y-2 mb-4">
          {[
            'Bases cost $55-150B/year that could be returned to taxpayers or used for domestic priorities',
            'They subsidize the defense of wealthy allies (Japan, Germany, South Korea) who can afford their own militaries',
            'They create "moral hazard" — allies spend less on defense because the US covers them',
            'They generate blowback — foreign bases breed the resentment that creates new enemies',
            'They concentrate war-making power in the executive branch, undermining constitutional checks',
            'They create permanent constituencies (contractors, local economies) that make reform impossible',
            'They violate the Founders\' vision of a defensive republic, not an offensive empire',
          ].map((point, i) => (
            <p key={i} className="text-sm text-stone-600 flex items-start gap-2">
              <span className="text-amber-700 shrink-0">•</span> {point}
            </p>
          ))}
        </div>
        <p className="text-stone-700">
          Thomas Jefferson warned against &ldquo;entangling alliances.&rdquo; George Washington warned against
          &ldquo;permanent alliances.&rdquo; The base network is the most entangling, most permanent alliance
          structure in human history. The Founders would not recognize it as the foreign policy of a republic.
          Because it isn&apos;t.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources &amp; Further Reading</h2>
        <div className="space-y-2 text-sm text-stone-600">
          <p>• Vine, David — <em>Base Nation: How U.S. Military Bases Abroad Harm America and the World</em> (2015). The definitive book on US overseas bases.</p>
          <p>• Vine, David — <em>The United States of War</em> (2020). History of US military expansion.</p>
          <p>• Johnson, Chalmers — <em>The Sorrows of Empire</em> (2004). Analysis of the base network as imperial infrastructure.</p>
          <p>• Cooley, Alexander — <em>Base Politics: Democratic Change and the U.S. Military Overseas</em> (2008).</p>
          <p>• <strong>DOD Base Structure Report</strong> — Annual Pentagon report on worldwide military installations.</p>
          <p>• <strong>Overseas Basing Commission Report</strong> (2005) — Congressional commission on base restructuring.</p>
          <p>• Lutz, Catherine — <em>The Bases of Empire</em> (2009). Critical perspectives on US military bases.</p>
          <p>• Vine, David — <em>Island of Shame: The Secret History of the U.S. Military Base on Diego Garcia</em> (2009).</p>
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The US has more overseas military bases than <strong>embassies and consulates combined</strong>.</li>
          <li>• <strong>Incirlik Air Base, Turkey</strong> stores approximately 50 US nuclear weapons — in a NATO ally whose president has threatened to &ldquo;go it alone&rdquo; and has purchased Russian air defense systems.</li>
          <li>• The Pentagon&apos;s overseas base network produces more CO₂ than <strong>140 individual countries</strong>.</li>
          <li>• <strong>Diego Garcia</strong> was created by forcibly removing the entire indigenous population. They&apos;ve never been allowed to return.</li>
          <li>• Ramstein Air Base in Germany has its own <strong>Burger King, Taco Bell, and Popeyes</strong> — and is the relay station for drone assassinations.</li>
          <li>• Japan hosts <strong>120 US military facilities</strong> — 80 years after World War II ended. Germany hosts 119.</li>
          <li>• The cost of overseas bases ({fmtMoney(presence.annualBaseCost)}/yr) is more than the <strong>combined budgets of the EPA, NASA, and the National Science Foundation</strong>.</li>
          <li>• If the US military were a country, it would be the <strong>47th largest carbon emitter</strong> in the world.</li>
        </ul>
      </div>

      {/* Quotes */}
      <div className="space-y-6 mb-8">
        <div className="bg-stone-900 text-white rounded-xl p-6">
          <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
            &ldquo;We&apos;ll renew your military base on our soil when you let us put an Ecuadorian military base in Miami.&rdquo;
          </blockquote>
          <p className="text-stone-400 mt-3">— Rafael Correa, President of Ecuador, 2008 (Manta base closed 2009)</p>
        </div>
        <div className="bg-stone-100 rounded-xl p-6 border">
          <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700">
            &ldquo;Americans might consider how they would react if China, Russia, or another country established
            even a single military base on American soil. A single base. Let alone 750.&rdquo;
          </blockquote>
          <p className="text-muted mt-3">— David Vine, <em>Base Nation: How U.S. Military Bases Abroad Harm America and the World</em></p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <p className="text-stone-300 mb-4">
          The United States maintains the most extensive military base network in human history — 750 installations
          in 80 countries, more than every other country on Earth combined. Many of these bases exist not because
          of current threats but because of wars that ended decades ago. They persist because they create their own
          political constituencies, their own economic dependencies, and their own self-justifying cycles of threat
          and response.
        </p>
        <p className="text-stone-300 mb-4">
          The people who live near these bases — in Okinawa, Diego Garcia, Vieques, Ramstein, and dozens of other
          communities — have paid the price in contaminated water, noise pollution, sexual assaults, land seizures,
          and the daily reality of living under a foreign military occupation that their governments accepted but
          they never chose.
        </p>
        <p className="text-white font-semibold text-lg">
          The question isn&apos;t whether America needs a strong military. The question is whether it needs military
          bases in 80 countries, 80 years after the wars that put them there ended — and whether the people who
          live under those bases have any say in the matter. So far, the answer has been no.
        </p>
      </div>

      {/* Related */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/bases" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Overseas Bases Data →</h3>
          <p className="text-stone-500 text-sm">Full data by country and region</p>
        </Link>
        <Link href="/deployments" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Troop Deployments →</h3>
          <p className="text-stone-500 text-sm">{fmt(presence.totalOverseasTroops)} troops abroad</p>
        </Link>
        <Link href="/analysis/military-industrial-complex" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Military-Industrial Complex →</h3>
          <p className="text-stone-500 text-sm">Who profits from the base network</p>
        </Link>
        <Link href="/spending" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Military Spending →</h3>
          <p className="text-stone-500 text-sm">$886B/year and climbing</p>
        </Link>
        <Link href="/analysis/blowback" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Blowback →</h3>
          <p className="text-stone-500 text-sm">How bases generate the resentment that justifies more bases</p>
        </Link>
        <Link href="/analysis/war-on-terror" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The War on Terror →</h3>
          <p className="text-stone-500 text-sm">The war that expanded the base network to 80 countries</p>
        </Link>
      </div>

      <BackToTop />
    </div>
  )
}
