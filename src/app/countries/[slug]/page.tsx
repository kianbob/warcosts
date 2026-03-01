import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { CountryTimelineChart } from '@/components/charts/CountryTimelineChart'

const countryNarratives: Record<string, string> = {
  'Iraq': 'The United States has intervened in Iraq three times in three decades — and each intervention created the conditions for the next. The 1991 Gulf War expelled Iraq from Kuwait but left Saddam in power. The 2003 invasion toppled Saddam but created a failed state, a sectarian civil war, and ultimately ISIS. The war against ISIS (2014-present) was fought to destroy the group that U.S. policy created. Total cost: over $2 trillion, 4,600+ American lives, and 300,000+ Iraqi civilians dead. Iraq today remains unstable, with U.S. troops still present and Iranian influence dominant.',
  'Afghanistan': 'America\'s longest war — 20 years, $2.3 trillion, 2,461 American deaths — ended exactly where it began: with the Taliban in power. The U.S. invaded in 2001 to destroy al-Qaeda and punish the Taliban for harboring bin Laden. Mission creep transformed counterterrorism into nation-building. The Afghan government the U.S. spent $83 billion constructing collapsed in 11 days. The August 2021 withdrawal was chaotic but correct — staying longer would have changed nothing except the final bill.',
  'Iran': 'The U.S.-Iran relationship is a masterclass in blowback. The CIA overthrew Iran\'s democratic government in 1953 to protect oil profits. The Shah\'s 26-year dictatorship (backed by the U.S.) produced the 1979 Islamic Revolution. The hostage crisis, support for Saddam in the Iran-Iraq War, sanctions, the nuclear deal and its collapse, and the 2026 strikes are all consequences of that 1953 decision. Every dollar spent confronting Iran is a cost of the original covert operation.',
  'Vietnam': 'The Vietnam War killed 58,220 Americans and an estimated 2 million Vietnamese civilians over two decades of escalating involvement. The U.S. went from advisors (1955) to half a million troops (1968) to humiliating withdrawal (1975). The war was based on lies (Gulf of Tonkin), sustained by lies (Pentagon Papers), and produced the largest anti-war movement in American history. Vietnam proved that military superiority cannot defeat a determined population fighting on its own soil.',
  'Syria': 'U.S. involvement in Syria is a case study in incoherent policy. The CIA armed rebels who fought alongside al-Qaeda affiliates. The military fought ISIS while those same rebels fought Assad. Obama drew a "red line" on chemical weapons, then didn\'t enforce it. Trump bombed Assad, armed the Kurds, then abandoned them to Turkey. Approximately 900 U.S. troops remain in Syria without authorization, controlling a third of the country and its oil fields.',
  'Cuba': 'From the Spanish-American War (1898) through the Bay of Pigs (1961) to the present embargo, the U.S. has treated Cuba as its Caribbean property. The Platt Amendment made Cuba a de facto protectorate. The CIA\'s failed invasion cemented Castro\'s power for 50 years. The trade embargo — the longest in modern history — has impoverished ordinary Cubans without achieving regime change. The lesson: confrontation strengthens the regimes it aims to weaken.',
  'Somalia': 'The U.S. has been involved in Somalia for over 30 years with nothing to show for it. The 1992 humanitarian intervention devolved into the Battle of Mogadishu (1993), producing the "Mogadishu effect" that contributed to inaction during the Rwandan genocide. U.S. forces returned in the 2000s for drone strikes and special operations against al-Shabaab — which didn\'t exist when the original intervention began. Somalia remains a failed state despite three decades of American military involvement.',
  'Libya': 'The 2011 NATO intervention in Libya destroyed a government without building a replacement. Libya went from having Africa\'s highest Human Development Index to being a failed state with open-air slave markets within five years. Obama called it his "worst mistake." Weapons from Libyan arsenals fueled conflicts across North Africa and the Sahel. The intervention\'s "success" convinced Russia and China to veto similar resolutions for Syria — contributing to hundreds of thousands more deaths.',
  'Yemen': 'The U.S. has been involved in Yemen through drone strikes (since 2002), support for the Saudi-led bombing campaign (since 2015), and naval operations against Houthis (since 2023). American-made bombs have hit hospitals, schools, and a school bus full of children. The UN calls Yemen the world\'s worst humanitarian disaster — with 150,000 dead and the largest cholera outbreak in history. U.S. support for the Saudi campaign makes Americans complicit in one of the 21st century\'s worst atrocities.',
  'South Korea': 'The Korean War (1950-53) killed 36,574 Americans and an estimated 2 million Korean civilians. The armistice created a frozen conflict — technically, the war never ended. Seventy years later, 28,500 American troops remain stationed in South Korea at an annual cost of billions. South Korea has become one of the world\'s wealthiest nations and could defend itself, but the U.S. military presence persists — a permanent subsidy of South Korean defense that American taxpayers fund.',
  'Germany': 'The U.S. has maintained military bases in Germany since 1945 — nearly 80 years after the end of WWII. Approximately 35,000 American troops remain stationed there, at a cost exceeding $7 billion annually. Germany, with the world\'s fourth-largest economy, is perfectly capable of defending itself. The continued American presence subsidizes European defense and represents one of the clearest examples of Cold War-era commitments long outliving their strategic rationale.',
  'Japan': 'Like Germany, Japan hosts a substantial American military presence 80 years after WWII. Approximately 54,000 troops are stationed at bases across the country, particularly Okinawa, where the U.S. military presence has generated significant local opposition. The security alliance was designed for the Cold War, but it persists — at enormous cost to American taxpayers — while Japan maintains one of the world\'s largest defense budgets of its own.',
  'Chile': 'The CIA-backed 1973 coup against democratically elected President Salvador Allende installed the Pinochet dictatorship — 17 years of murder, torture, and political repression. The U.S. spent $8 million destabilizing Chile\'s democracy because Allende nationalized copper mines. Pinochet\'s regime killed 3,200 people, tortured 29,000, and drove 200,000 into exile. Chile eventually restored democracy on its own — proving that foreign intervention wasn\'t the answer.',
  'Guatemala': 'The 1954 CIA coup against Guatemala\'s democratic government — launched to protect United Fruit Company profits — triggered a 42-year civil war that killed 200,000 people, including acts of genocide against the Mayan population. The Dulles brothers\' conflict of interest (both had ties to United Fruit) represents one of the most flagrant cases of corporate interests driving U.S. foreign policy.',
  'Philippines': 'The Philippine-American War (1899-1913) was America\'s first colonial counterinsurgency — and a preview of every failed nation-building project from Vietnam to Afghanistan. American forces killed an estimated 200,000-1,000,000 Filipino civilians. The U.S. maintained colonial control until 1946 and military bases until 1991. Today, the U.S. is expanding its military presence in the Philippines as part of the pivot to Asia — returning to bases it left 30 years ago.',
  'Panama': 'The 1989 invasion of Panama to arrest Manuel Noriega — a CIA asset the U.S. had paid, armed, and protected for decades — is the perfect encapsulation of American interventionism. The U.S. created Noriega, empowered him, tolerated his drug trafficking, then invaded a sovereign nation and killed hundreds of civilians to arrest him. The pattern — create, empower, destroy — has been repeated with Saddam Hussein and countless others.',
}

const countryLibertarian: Record<string, string> = {
  'Iraq': 'Iraq is the ultimate case study in interventionist failure. Three wars in 30 years, $2+ trillion spent, thousands of American and hundreds of thousands of Iraqi lives lost — and the country is less stable than when the U.S. first intervened. Every intervention created the conditions for the next.',
  'Afghanistan': '$2.3 trillion and 20 years to achieve the exact same outcome — Taliban in power — that existed before the invasion. No amount of money or military force can build a nation that doesn\'t want to be built by foreigners.',
  'Iran': 'The entire 70-year U.S.-Iran confrontation traces back to a single covert operation that cost $1 million. The blowback from that $1 million investment has cost hundreds of billions. This is what happens when governments play God in other countries.',
  'Vietnam': 'Two million civilians killed, 58,000 Americans dead, $1 trillion spent, and the country Vietnam became is exactly the same as if the U.S. had never intervened — except for the millions of dead.',
}

function getAllCountries() {
  const conflicts = loadData('conflicts.json')
  const aid = loadData('foreign-aid.json')
  const arms = loadData('arms-sales.json')
  const presence = loadData('overseas-presence.json')
  const countries = new Set<string>()
  conflicts.forEach((c: any) => c.countries?.forEach((co: string) => countries.add(co)))
  aid.topRecipients?.forEach((r: any) => countries.add(r.country))
  arms.topBuyers?.forEach((b: any) => countries.add(b.country))
  presence.topDeployments?.forEach((d: any) => countries.add(d.country))
  return [...countries].sort()
}

export async function generateStaticParams() {
  return getAllCountries().map(c => ({ slug: slugify(c) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const country = getAllCountries().find(c => slugify(c) === slug)
  if (!country) return { title: 'Country Not Found' }
  return {
    title: `${country} — US Military Involvement, Aid & Arms`,
    description: `Complete history of US military involvement with ${country}: wars, foreign aid, arms sales, and troop deployments.`,
  }
}

export default async function CountryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const allCountries = getAllCountries()
  const country = allCountries.find(c => slugify(c) === slug)
  if (!country) notFound()

  const conflicts = loadData('conflicts.json')
  const aid = loadData('foreign-aid.json')
  const arms = loadData('arms-sales.json')
  const presence = loadData('overseas-presence.json')

  const countryConflicts = conflicts.filter((c: any) => c.countries?.includes(country))
  const aidData = aid.topRecipients?.find((r: any) => r.country === country)
  const armsData = arms.topBuyers?.find((b: any) => b.country === country)
  const presenceData = presence.topDeployments?.find((d: any) => d.country === country)

  const totalWarCost = countryConflicts.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const totalUSDeaths = countryConflicts.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)
  const totalCivDeaths = countryConflicts.reduce((s: number, c: any) => s + (c.civilianDeaths || 0), 0)
  const totalAid = aidData?.totalSince2001 || 0
  const totalArms = armsData?.total || 0
  const totalSpending = totalWarCost + totalAid + totalArms

  const narrative = countryNarratives[country] || ''
  const libertarianNote = countryLibertarian[country] || ''

  // Timeline of involvement
  const yearRange = countryConflicts.length > 0
    ? `${Math.min(...countryConflicts.map((c: any) => c.startYear))}–${Math.max(...countryConflicts.map((c: any) => c.endYear || 2026))}`
    : ''

  // Authorized vs unauthorized
  const authorizedCount = countryConflicts.filter((c: any) => c.congressionalAuth).length
  const unauthorizedCount = countryConflicts.filter((c: any) => !c.congressionalAuth).length

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Countries', href: '/countries' }, { label: country }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">{country}</h1>
        <p className="text-stone-400 mt-2">
          {countryConflicts.length > 0 && `${countryConflicts.length} conflicts`}
          {yearRange && ` · ${yearRange}`}
          {aidData && ` · ${fmtMoney(totalAid)} in aid`}
          {armsData && ` · ${fmtMoney(totalArms)} in arms`}
          {presenceData && ` · ${fmt(presenceData.troops)} troops stationed`}
        </p>
      </div>

      <ShareButtons title={`${country} — US Military Involvement`} />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{totalSpending > 0 ? fmtMoney(totalSpending) : '—'}</p>
          <p className="text-xs text-muted">Total US Spending</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{countryConflicts.length}</p>
          <p className="text-xs text-muted">Conflicts</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{totalUSDeaths > 0 ? fmt(totalUSDeaths) : '—'}</p>
          <p className="text-xs text-muted">US Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{presenceData ? fmt(presenceData.troops) : '—'}</p>
          <p className="text-xs text-muted">Troops Stationed</p>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {totalCivDeaths > 0 && (
          <div className="bg-red-50 rounded-lg p-3 border border-red-200 text-center">
            <p className="text-lg font-bold text-red-700">{fmt(totalCivDeaths)}</p>
            <p className="text-xs text-red-600">Civilian Deaths</p>
          </div>
        )}
        {presenceData && (
          <div className="bg-white rounded-lg p-3 border text-center">
            <p className="text-lg font-bold text-primary">{presenceData.bases}</p>
            <p className="text-xs text-muted">Military Bases</p>
          </div>
        )}
        <div className="bg-green-50 rounded-lg p-3 border border-green-200 text-center">
          <p className="text-lg font-bold text-green-700">{authorizedCount}</p>
          <p className="text-xs text-green-600">Authorized</p>
        </div>
        <div className="bg-red-50 rounded-lg p-3 border border-red-200 text-center">
          <p className="text-lg font-bold text-red-700">{unauthorizedCount}</p>
          <p className="text-xs text-red-600">Unauthorized</p>
        </div>
      </div>

      {/* Country Narrative */}
      {narrative && (
        <div className="bg-white rounded-lg p-6 mb-8 border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">📖 History of US Involvement in {country}</h2>
          <p className="text-stone-700 leading-relaxed">{narrative}</p>
        </div>
      )}

      {/* Conflicts Timeline */}
      {countryConflicts.length > 0 && (
        <>
          <CountryTimelineChart conflicts={countryConflicts} />
          <div className="mt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">⚔️ Conflicts</h2>
            <div className="space-y-3">
              {countryConflicts.map((c: any) => (
                <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-lg border p-4 hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{c.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      c.congressionalAuth ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>{c.congressionalAuth ? '✅' : '❌'}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      c.outcome?.includes('Victory') ? 'bg-green-100 text-green-700' :
                      c.outcome?.includes('Defeat') ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>{c.outcome}</span>
                  </div>
                  <p className="text-sm text-muted">{c.startYear}–{c.endYear || 'Present'} · {fmtMoney(c.costInflationAdjusted)} · {c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) + ' US deaths' : 'Covert'}</p>
                  {c.civilianDeaths > 0 && <p className="text-sm text-red-600">{fmt(c.civilianDeaths)} civilian deaths</p>}
                  <p className="text-xs text-muted mt-1 line-clamp-2">{c.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Key Quotes from this country's conflicts */}
      {countryConflicts.some((c: any) => c.keyQuote) && (
        <div className="mt-8 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">🗣️ What They Said</h2>
          <div className="space-y-4">
            {countryConflicts.filter((c: any) => c.keyQuote).map((c: any) => (
              <div key={c.id} className="bg-stone-900 rounded-lg p-5">
                <blockquote className="border-l-4 border-red-700 pl-4">
                  <p className="text-white italic leading-relaxed">&ldquo;{(c.keyQuote as any).text.substring(0, 200)}{(c.keyQuote as any).text.length > 200 ? '...' : ''}&rdquo;</p>
                  <footer className="text-stone-400 mt-2 text-sm">— {(c.keyQuote as any).attribution} <span className="text-stone-500">({c.shortName || c.name})</span></footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Foreign Aid */}
      {aidData && (
        <div className="mt-8 bg-white rounded-lg border p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">💰 Foreign Aid</h2>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div><p className="text-xl font-bold text-primary">{fmtMoney(aidData.totalSince2001)}</p><p className="text-xs text-muted">Total Since 2001</p></div>
            <div><p className="text-xl font-bold text-primary">{fmtMoney(aidData.annual2023)}</p><p className="text-xs text-muted">Annual (2023)</p></div>
          </div>
          <p className="text-sm text-muted">{aidData.type} — {aidData.note}</p>
          <Link href="/foreign-aid" className="text-sm text-primary hover:underline mt-2 inline-block">→ Full Foreign Aid Data</Link>
        </div>
      )}

      {/* Arms Sales */}
      {armsData && (
        <div className="mt-8 bg-white rounded-lg border p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">🔫 Arms Sales</h2>
          <p className="text-xl font-bold text-primary mb-2">{fmtMoney(armsData.total)}</p>
          <p className="text-sm text-muted">Since {armsData.since} — {armsData.note}</p>
          <Link href="/arms-sales" className="text-sm text-primary hover:underline mt-2 inline-block">→ Full Arms Sales Data</Link>
        </div>
      )}

      {/* Military Presence */}
      {presenceData && (
        <div className="mt-8 bg-white rounded-lg border p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">🏗️ US Military Presence</h2>
          <div className="grid grid-cols-3 gap-4 mb-3">
            <div><p className="text-xl font-bold text-primary">{fmt(presenceData.troops)}</p><p className="text-xs text-muted">Troops</p></div>
            <div><p className="text-xl font-bold text-primary">{presenceData.bases}</p><p className="text-xs text-muted">Bases</p></div>
            <div><p className="text-xl font-bold text-primary">{fmtMoney(presenceData.annualCost)}</p><p className="text-xs text-muted">Annual Cost</p></div>
          </div>
          <p className="text-sm text-muted">US presence since {presenceData.since} — {presenceData.note}</p>
          <Link href="/bases" className="text-sm text-primary hover:underline mt-2 inline-block">→ Full Overseas Bases Data</Link>
        </div>
      )}

      {/* Libertarian Analysis */}
      {libertarianNote && (
        <div className="bg-stone-900 text-white rounded-lg p-6 mt-8 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">🗽 The Libertarian Case</h2>
          <p className="text-stone-300 italic leading-relaxed">{libertarianNote}</p>
        </div>
      )}

      <BackToTop />
    </div>
  )
}
