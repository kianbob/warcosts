import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'
import { CumulativeCost, CostByConflict, AnnualSpending } from './charts'

export const metadata: Metadata = {
  title: 'War on Terror Total Cost — $8+ Trillion, 900K+ Dead, 85+ Countries | WarCosts',
  description: 'The War on Terror (2001-present) has cost over $8 trillion, killed 900,000+, displaced 38 million, and expanded US military operations to 85+ countries. Complete overview of all post-9/11 conflicts, costs, and consequences.',
  keywords: ['war on terror cost', 'cost of war on terror', 'forever wars', 'post 9/11 wars', 'GWOT cost', 'war on terror deaths', 'war on terror countries'],
  alternates: {
    canonical: 'https://warcosts.org/war-on-terror',
  },
  openGraph: {
    title: 'The War on Terror — $8+ Trillion, 900K+ Dead, No End in Sight',
    description: 'The longest, most expensive, and most geographically dispersed military campaign in American history. Every dollar. Every death. Every country.',
    url: 'https://warcosts.org/war-on-terror',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Duration', value: '23+ Years' },
  { label: 'Total Cost', value: '$8+ Trillion' },
  { label: 'US Military Deaths', value: '7,074' },
  { label: 'US Contractor Deaths', value: '8,189' },
  { label: 'Total Deaths (All Parties)', value: '900,000+' },
  { label: 'Countries with US Operations', value: '85+' },
]

const costBreakdown = [
  { category: 'Afghanistan (direct)', amount: 2.3, unit: 'T', desc: 'Military operations, reconstruction, and related costs 2001-2021' },
  { category: 'Iraq (direct)', amount: 3.0, unit: 'T', desc: 'Military operations, reconstruction 2003-2011; anti-ISIS 2014-present' },
  { category: 'Syria / ISIS Campaign', amount: 0.2, unit: 'T', desc: 'Operation Inherent Resolve, support for Syrian opposition' },
  { category: 'Other GWOT Operations', amount: 0.4, unit: 'T', desc: 'Pakistan, Yemen, Somalia, Libya, Niger, Philippines, and dozens more' },
  { category: 'Homeland Security Increase', amount: 1.1, unit: 'T', desc: 'DHS creation, TSA, domestic surveillance expansion since 2001' },
  { category: 'Veterans Care (projected)', amount: 2.2, unit: 'T', desc: 'Healthcare, disability for 4+ million GWOT veterans through 2050+' },
  { category: 'Interest on War Debt', amount: 1.1, unit: 'T', desc: 'All post-9/11 wars were financed by borrowing — interest through 2050' },
]

const cumulativeCost = [
  { year: 2001, cumulative: 0.1 },
  { year: 2003, cumulative: 0.4 },
  { year: 2005, cumulative: 1.0 },
  { year: 2007, cumulative: 1.8 },
  { year: 2009, cumulative: 2.8 },
  { year: 2011, cumulative: 3.7 },
  { year: 2013, cumulative: 4.4 },
  { year: 2015, cumulative: 5.0 },
  { year: 2017, cumulative: 5.6 },
  { year: 2019, cumulative: 6.4 },
  { year: 2021, cumulative: 7.2 },
  { year: 2023, cumulative: 8.0 },
  { year: 2025, cumulative: 8.5 },
]

const costByConflict = [
  { conflict: 'Iraq', cost: 3.0 },
  { conflict: 'Afghanistan', cost: 2.3 },
  { conflict: 'Veterans Care', cost: 2.2 },
  { conflict: 'Interest', cost: 1.1 },
  { conflict: 'Homeland Security', cost: 1.1 },
  { conflict: 'Other Operations', cost: 0.6 },
]

const annualSpending = [
  { year: 2001, afghanistan: 20, iraq: 0, other: 5 },
  { year: 2003, afghanistan: 15, iraq: 53, other: 10 },
  { year: 2005, afghanistan: 20, iraq: 86, other: 12 },
  { year: 2007, afghanistan: 37, iraq: 133, other: 15 },
  { year: 2009, afghanistan: 59, iraq: 95, other: 18 },
  { year: 2011, afghanistan: 107, iraq: 47, other: 20 },
  { year: 2013, afghanistan: 81, iraq: 10, other: 22 },
  { year: 2015, afghanistan: 52, iraq: 15, other: 25 },
  { year: 2017, afghanistan: 45, iraq: 20, other: 28 },
  { year: 2019, afghanistan: 52, iraq: 15, other: 30 },
  { year: 2021, afghanistan: 24, iraq: 12, other: 32 },
  { year: 2023, afghanistan: 0, iraq: 8, other: 35 },
]

const conflicts = [
  { name: 'Afghanistan War', years: '2001–2021', cost: '$2.3T', deaths: '2,461 US / 176,000+ total', href: '/afghanistan-war', desc: 'The longest war in US history. 20 years, Taliban wins anyway.' },
  { name: 'Iraq War', years: '2003–2011', cost: '$3T+', deaths: '4,599 US / 200,000+ Iraqi civilians', href: '/iraq-war', desc: 'Built on WMD lies. Created ISIS. Destabilized the Middle East.' },
  { name: 'Pakistan Drone Campaign', years: '2004–present', cost: 'Classified', deaths: '3,000+ killed (incl. civilians)', href: '/drone-strikes/pakistan', desc: 'Undeclared air war in a sovereign allied nation.' },
  { name: 'Yemen Operations', years: '2002–present', cost: '$Billions', deaths: '377,000+ total (war + famine)', href: '/conflicts/yemen', desc: 'Drone strikes + Saudi war support = worst humanitarian crisis.' },
  { name: 'Somalia (AFRICOM)', years: '2007–present', cost: '$Billions', deaths: '1,000+ killed by US strikes', href: '/conflicts/somalia-ongoing', desc: 'Ongoing military operations with minimal oversight.' },
  { name: 'Libya Intervention', years: '2011', cost: '$1.1B+', deaths: '30,000+ in civil war', href: '/conflicts/libya', desc: 'NATO bombing turned a country into a failed state.' },
  { name: 'Syria / ISIS Campaign', years: '2014–present', cost: '$200B+', deaths: '13,000+ killed by coalition', href: '/conflicts/syria-isis', desc: 'War against the monster the Iraq War created.' },
  { name: 'Niger & Sahel', years: '2013–present', cost: '$Billions', deaths: 'Classified', href: '/conflicts/niger-sahel', desc: 'Shadow wars across West Africa most Americans don\'t know about.' },
  { name: 'Global Drone Campaign', years: '2001–present', cost: 'Classified', deaths: '10,000+ killed', href: '/conflicts/drone-wars', desc: 'Remote-control killing in 7+ countries without declarations of war.' },
  { name: 'Red Sea / Houthi Campaign', years: '2024–present', cost: '$Billions', deaths: 'Ongoing', href: '/conflicts/red-sea-houthis', desc: 'The newest front in the forever war.' },
]

const timeline = [
  { year: 'Sep 11, 2001', title: '9/11 Attacks', desc: 'Al-Qaeda attacks kill 2,977 Americans. The US declares a "Global War on Terror." Congress passes the Authorization for Use of Military Force (AUMF) — 60 words that will be used to justify military operations in 20+ countries for 20+ years.' },
  { year: 'Oct 2001', title: 'Afghanistan Invasion', desc: 'US invades Afghanistan to destroy al-Qaeda and remove the Taliban. Initial mission succeeds quickly. Bin Laden escapes at Tora Bora. Instead of leaving, the US stays for nation-building. The 20-year war begins.' },
  { year: 'Mar 2003', title: 'Iraq Invasion', desc: 'Based on fabricated WMD intelligence, the US invades Iraq. Quick military victory, catastrophic occupation. 200,000+ Iraqi civilians will die. The Iraq War becomes the most disastrous foreign policy decision since Vietnam — possibly ever.' },
  { year: '2004', title: 'Drone Wars Begin', desc: 'CIA begins systematic drone strikes in Pakistan\'s tribal areas. The program will expand to Yemen, Somalia, Libya, and beyond. No declarations of war, minimal oversight, unknown civilian casualties. The "disposition matrix" — the kill list — becomes a permanent feature.' },
  { year: '2006–08', title: 'Multiple Fronts', desc: 'Iraq descends into civil war. Afghanistan deteriorates. Secret operations expand across Africa and the Middle East. JSOC conducts raids in dozens of countries. The war on terror metastasizes from two countries to dozens.' },
  { year: '2011', title: 'Bin Laden Killed / Libya / Arab Spring', desc: 'Bin Laden found and killed in Pakistan — vindication of the intelligence approach, not the trillion-dollar wars. But instead of ending, the war expands: Libya intervention creates a failed state. Operations spread across North Africa.' },
  { year: '2014', title: 'ISIS Rises', desc: 'The Islamic State — a direct product of the Iraq War — conquers Mosul and declares a caliphate. The US returns to Iraq and begins bombing Syria. A new generation of "forever war" begins.' },
  { year: '2017–20', title: 'Expansion and Exhaustion', desc: 'US military operates in at least 85 countries. Special Operations forces deploy to 149 countries. Niger ambush kills 4 US soldiers — most Americans didn\'t know troops were there. Public learns the war on terror has spread far beyond Iraq and Afghanistan.' },
  { year: 'Aug 2021', title: 'Afghanistan Falls', desc: 'Taliban reconquers Afghanistan in 11 days. 20 years, $2.3 trillion, 2,461 US dead — right back where it started. The chaotic withdrawal symbolizes the failure of the entire enterprise.' },
  { year: '2024–25', title: 'Still Going', desc: 'US forces remain in Iraq, Syria, Somalia, and dozens of other countries. Red Sea operations against Houthis open yet another front. The 2001 AUMF remains in effect. The war on terror is approaching its 25th year with no end in sight.' },
]

const faqs = [
  {
    q: 'How much has the War on Terror cost?',
    a: 'The Costs of War Project at Brown University estimates the total cost at $8+ trillion through 2023, including $2.3T for Afghanistan, $3T+ for Iraq, $2.2T in projected veterans care, $1.1T in Homeland Security increases, and $1.1T+ in interest on war debt. All post-9/11 wars were financed entirely by borrowing.',
  },
  {
    q: 'How many people have died in the War on Terror?',
    a: 'At least 900,000 people have been killed directly by war violence, including 7,074 US military, 8,189 US contractors, and hundreds of thousands of civilians in Iraq, Afghanistan, Syria, Yemen, and other countries. When indirect deaths from war-caused displacement, disease, and famine are included, the total may exceed 4.5 million.',
  },
  {
    q: 'How many countries is the US fighting in?',
    a: 'US counterterrorism operations span at least 85 countries, according to the Costs of War Project. These range from full-scale wars (Iraq, Afghanistan) to drone strikes (Pakistan, Yemen, Somalia) to training missions, special operations raids, and intelligence operations across the Middle East, Africa, and Asia.',
  },
  {
    q: 'Has the War on Terror made America safer?',
    a: 'The evidence is mixed at best. While no 9/11-scale attack has occurred on US soil, the war on terror has: created ISIS, destabilized multiple countries, created millions of refugees, generated anti-American sentiment worldwide, cost $8+ trillion that could have been invested in actual security, and expanded government surveillance of US citizens. The number of terrorist groups has increased, not decreased, since 2001.',
  },
  {
    q: 'When will the War on Terror end?',
    a: 'There is no defined end point. The 2001 AUMF has no sunset clause, no geographic limitation, and no defined enemy beyond "associated forces" — a term the executive branch interprets broadly. Without congressional action to repeal the AUMF or presidents willing to end operations, the war on terror will continue indefinitely. It is, by design, a forever war.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function WarOnTerrorPage() {
  const totalCost = costBreakdown.reduce((s, r) => s + r.amount, 0)

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'War on Terror' }]} />
        <ShareButtons title="War on Terror — $8+ Trillion, 900K+ Dead, 85+ Countries" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The War on Terror
          </h1>
          <p className="text-lg text-stone-500 mb-2">September 2001 – Present (23+ years and counting)</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            <strong className="text-[#991b1b]">$8+ trillion</strong>.{' '}
            <strong className="text-[#991b1b]">900,000+ dead</strong>.{' '}
            <strong className="text-[#991b1b]">38 million displaced</strong>.{' '}
            <strong className="text-[#991b1b]">85+ countries</strong>.
            The longest, most expensive, and most geographically dispersed military campaign in American
            history — with no end in sight.
          </p>
        </header>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {keyStats.map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl md:text-2xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Forever War
          </h2>
          <p className="text-stone-700 mb-4">
            On September 14, 2001, Congress passed the Authorization for Use of Military Force — 60 words
            that have been used to justify military operations in more than 20 countries, against enemies that
            didn&apos;t exist on 9/11, in places most Americans can&apos;t find on a map. Only one member
            of Congress voted no: Representative Barbara Lee, who warned that the resolution was a
            &ldquo;blank check&rdquo; for endless war. She was exactly right.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-2">
              &ldquo;Let us not become the evil that we deplore.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— Rep. Barbara Lee, September 14, 2001 (sole vote against the AUMF)</p>
          </div>
          <p className="text-stone-700 mb-4">
            What began as a targeted response to the 9/11 attacks metastasized into a global military campaign
            spanning multiple continents, dozens of countries, and nearly a quarter-century. Along the way,
            it has cost $8+ trillion, killed hundreds of thousands of people, created the conditions for ISIS,
            destabilized multiple countries, eroded civil liberties at home, and failed to achieve any of its
            stated objectives.
          </p>
          <p className="text-stone-700">
            The War on Terror cannot be won because &ldquo;terror&rdquo; is not an enemy — it&apos;s a tactic.
            You cannot declare victory over a method of warfare. The war was designed, whether intentionally
            or not, to be permanent. And so it is.
          </p>
        </section>

        {/* Cumulative Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            $8+ Trillion and Counting
          </h2>
          <CumulativeCost data={cumulativeCost} />
          <p className="text-sm text-stone-500 mt-3">
            Cumulative cost includes direct spending, veterans care, interest, and Homeland Security increases.
            Source: Costs of War Project, Brown University.
          </p>
          <div className="overflow-x-auto mt-6 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((r) => (
                  <tr key={r.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">${r.amount}{r.unit}</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-stone-400 font-bold">
                  <td className="py-2 text-stone-900">Total</td>
                  <td className="py-2 text-right font-mono text-[#991b1b]">${totalCost.toFixed(1)}T+</td>
                  <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">And still growing every day</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cost by Conflict */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Cost by Conflict
          </h2>
          <CostByConflict data={costByConflict} />
        </section>

        {/* Annual Spending */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Annual War Spending by Theater
          </h2>
          <AnnualSpending data={annualSpending} />
          <p className="text-sm text-stone-500 mt-3">
            &ldquo;Other GWOT&rdquo; includes operations in Syria, Yemen, Somalia, Niger, Libya, Philippines,
            and dozens of other countries — many classified.
          </p>
        </section>

        {/* All Conflicts */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            All Post-9/11 Conflicts
          </h2>
          <div className="space-y-3">
            {conflicts.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="block bg-stone-50 hover:bg-stone-100 rounded-lg p-4 border border-stone-200 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="font-semibold text-stone-800 hover:text-[#991b1b]">{c.name}</h3>
                  <div className="flex gap-3 text-xs text-stone-500">
                    <span>{c.years}</span>
                    <span className="text-[#991b1b] font-semibold">{c.cost}</span>
                  </div>
                </div>
                <p className="text-sm text-stone-600">{c.desc}</p>
                <p className="text-xs text-stone-400 mt-1">{c.deaths}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200" />
            <div className="space-y-6">
              {timeline.map((event) => (
                <div key={event.year} className="relative pl-10">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#991b1b]" />
                  <div className="text-sm font-mono text-[#991b1b] mb-1">{event.year}</div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-1">{event.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The AUMF */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            60 Words That Enabled Endless War
          </h2>
          <div className="bg-stone-900 text-stone-100 rounded-lg p-6 mb-4 font-mono text-sm leading-relaxed">
            &ldquo;The President is authorized to use all necessary and appropriate force against those nations,
            organizations, or persons he determines planned, authorized, committed, or aided the terrorist attacks
            that occurred on September 11, 2001, or harbored such organizations or persons, in order to prevent
            any future acts of international terrorism against the United States by such nations, organizations
            or persons.&rdquo;
          </div>
          <p className="text-stone-700 mb-4">
            This single sentence — the 2001 Authorization for Use of Military Force — has been cited to justify
            military operations in Afghanistan, Iraq, Syria, Yemen, Somalia, Libya, Niger, the Philippines,
            and dozens of other countries against groups that didn&apos;t exist on 9/11. It has no sunset clause,
            no geographic limitation, and no defined endpoint.
          </p>
          <p className="text-stone-700">
            Congress has never voted to declare war on any of the post-9/11 conflicts. The AUMF allows the
            president to wage war anywhere, against anyone deemed an &ldquo;associated force&rdquo; of al-Qaeda —
            a term with no legal definition and no limit. It is the blank check Barbara Lee warned about.
          </p>
        </section>

        {/* Legacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            What the War on Terror Has Actually Achieved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-[#991b1b] mb-2">More Terrorism, Not Less</h3>
              <p className="text-sm text-stone-600">
                The number of terrorist groups has grown, not shrunk. The war created ISIS.
                Anti-American sentiment has increased worldwide. The conditions that breed terrorism — instability,
                civilian casualties, foreign occupation — have been amplified by the war meant to eliminate them.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-[#991b1b] mb-2">Eroded Civil Liberties</h3>
              <p className="text-sm text-stone-600">
                Mass surveillance (NSA), indefinite detention (Guantánamo), torture program (CIA black sites),
                the PATRIOT Act, militarized police, and the normalization of executive war-making without
                congressional authorization.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-[#991b1b] mb-2">Failed States</h3>
              <p className="text-sm text-stone-600">
                Afghanistan: back to Taliban. Iraq: dysfunctional, Iranian-influenced. Libya: failed state
                with open slave markets. Yemen: worst humanitarian crisis. Syria: destroyed.
                Every country the US intervened in is worse off.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-[#991b1b] mb-2">$8 Trillion Opportunity Cost</h3>
              <p className="text-sm text-stone-600">
                $8 trillion could have funded universal healthcare, eliminated student debt, rebuilt all US
                infrastructure, and funded a decade of climate transition. Instead, it bought 20 years of
                failed wars and a generation of traumatized veterans.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-stone-200 pb-4">
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }),
            }}
          />
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/afghanistan-war', label: 'Afghanistan War — 20 Years, Taliban Wins' },
              { href: '/iraq-war', label: 'Iraq War — $3T, Zero WMDs' },
              { href: '/drone-strikes', label: 'Drone Strikes — The Shadow War' },
              { href: '/analysis/forever-wars', label: 'The Forever Wars' },
              { href: '/analysis/911-to-forever-war', label: '9/11 to Forever War' },
              { href: '/cost-of-war-on-terror', label: 'Cost of War on Terror (Calculator)' },
              { href: '/civilian-casualties', label: 'Civilian Casualties' },
              { href: '/analysis/blowback', label: 'Blowback — How Wars Create Enemies' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-stone-50 hover:bg-stone-100 rounded-lg p-3 border border-stone-200 text-stone-700 hover:text-[#991b1b] transition-colors text-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Sources</h2>
          <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
            <li>Costs of War Project, Watson Institute, Brown University — <em>20 Years of War</em></li>
            <li>Congressional Research Service — Post-9/11 War Costs</li>
            <li>Department of Defense — Casualty Statistics for GWOT</li>
            <li>Bureau of Investigative Journalism — Drone Strike Database</li>
            <li>UNHCR — Displacement from Post-9/11 Wars</li>
            <li>Stephanie Savell — <em>The Costs of United States Post-9/11 Counterterrorism Wars</em></li>
            <li>Spencer Ackerman — <em>Reign of Terror</em> (Viking, 2021)</li>
          </ul>
        </section>

        <BackToTop />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'The War on Terror — $8+ Trillion, 900K+ Dead, 85+ Countries',
              description: 'The War on Terror (2001-present) has cost over $8 trillion, killed 900,000+, displaced 38 million, and expanded US military operations to 85+ countries.',
              author: { '@type': 'Organization', name: 'WarCosts' },
              publisher: { '@type': 'Organization', name: 'WarCosts' },
              url: 'https://warcosts.org/war-on-terror',
              datePublished: '2024-01-01',
              dateModified: '2026-03-28',
              keywords: 'war on terror cost, cost of war on terror, forever wars, post 9/11 wars, GWOT cost',
            }),
          }}
        />
      </div>
    </main>
  )
}
