import { PresidentSpendingChart } from '@/components/charts/PresidentSpendingChart'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

const slugAliases: Record<string, string> = {
  'george-w-bush': 'bush-jr',
  'george-hw-bush': 'bush-sr',
  'george-h-w-bush': 'bush-sr',
  'theodore-roosevelt': 'roosevelt',
  'lyndon-johnson': 'johnson',
  'lyndon-b-johnson': 'johnson',
  'john-f-kennedy': 'kennedy',
  'richard-nixon': 'nixon',
  'ronald-reagan': 'reagan',
  'abraham-lincoln': 'lincoln',
  'william-mckinley': 'mckinley',
  'james-madison': 'madison',
  'james-polk': 'polk',
  'george-washington': 'washington',
  'john-adams': 'adams',
  'thomas-jefferson': 'jefferson',
  'dwight-eisenhower': 'eisenhower',
  'dwight-d-eisenhower': 'eisenhower',
  'woodrow-wilson': 'wilson',
  'harry-truman': 'truman',
  'harry-s-truman': 'truman',
  'bill-clinton': 'clinton',
  'barack-obama': 'obama',
  'donald-trump': 'trump',
  'joe-biden': 'biden',
  'joseph-biden': 'biden',
}

function resolveSlug(slug: string): string {
  return slugAliases[slug] || slug
}

const partyMap: Record<string, string> = {
  'Washington': 'None', 'Adams': 'Federalist', 'Jefferson': 'Democratic-Republican',
  'Madison': 'Democratic-Republican', 'Polk': 'Democrat', 'Lincoln': 'Republican',
  'McKinley': 'Republican', 'Roosevelt': 'Republican', 'Wilson': 'Democrat',
  'Truman': 'Democrat', 'Eisenhower': 'Republican', 'Kennedy': 'Democrat',
  'Johnson': 'Democrat', 'Nixon': 'Republican', 'Reagan': 'Republican',
  'Bush Sr.': 'Republican', 'Clinton': 'Democrat', 'Bush Jr.': 'Republican',
  'Obama': 'Democrat', 'Trump': 'Republican', 'Biden': 'Democrat',
  'Continental Congress': 'N/A',
}

const presidentYears: Record<string, string> = {
  'Washington': '1789–1797', 'Adams': '1797–1801', 'Jefferson': '1801–1809',
  'Madison': '1809–1817', 'Polk': '1845–1849', 'Lincoln': '1861–1865',
  'McKinley': '1897–1901', 'Roosevelt': '1901–1909', 'Wilson': '1913–1921',
  'Truman': '1945–1953', 'Eisenhower': '1953–1961', 'Kennedy': '1961–1963',
  'Johnson': '1963–1969', 'Nixon': '1969–1974', 'Reagan': '1981–1989',
  'Bush Sr.': '1989–1993', 'Clinton': '1993–2001', 'Bush Jr.': '2001–2009',
  'Obama': '2009–2017', 'Trump': '2017–2021', 'Biden': '2021–2025',
  'Continental Congress': '1775–1789',
}

const presidentWarQuotes: Record<string, { text: string; attribution: string }[]> = {
  'Washington': [
    { text: 'My first wish is to see this plague of mankind, war, banished from the earth.', attribution: 'George Washington, letter to David Humphreys (1785)' },
    { text: 'The constitution vests the power of declaring war in Congress; therefore no offensive expedition of importance can be undertaken until after they shall have deliberated upon the subject.', attribution: 'George Washington (1793)' },
  ],
  'Jefferson': [
    { text: 'Peace, commerce, and honest friendship with all nations — entangling alliances with none.', attribution: 'Thomas Jefferson, First Inaugural Address (1801)' },
  ],
  'Madison': [
    { text: 'Of all the enemies to public liberty war is, perhaps, the most to be dreaded, because it comprises and develops the germ of every other.', attribution: 'James Madison, "Political Observations" (1795)' },
  ],
  'Lincoln': [
    { text: 'Allow the president to invade a neighboring nation, whenever he shall deem it necessary... and you allow him to make war at pleasure.', attribution: 'Abraham Lincoln (as congressman opposing the Mexican-American War, 1848)' },
  ],
  'Wilson': [
    { text: 'The world must be made safe for democracy.', attribution: 'Woodrow Wilson, War Message to Congress (April 2, 1917)' },
  ],
  'Eisenhower': [
    { text: 'In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex.', attribution: 'Dwight D. Eisenhower, Farewell Address (January 17, 1961)' },
    { text: 'Every gun that is made, every warship launched, every rocket fired signifies, in the final sense, a theft from those who hunger and are not fed.', attribution: 'Dwight D. Eisenhower, "Chance for Peace" speech (1953)' },
  ],
  'Kennedy': [
    { text: 'Mankind must put an end to war, or war will put an end to mankind.', attribution: 'John F. Kennedy, Address to the United Nations (1961)' },
  ],
  'Johnson': [
    { text: 'We are not about to send American boys 9 or 10 thousand miles away from home to do what Asian boys ought to be doing for themselves.', attribution: 'Lyndon B. Johnson (October 1964) — before sending 500,000 troops to Vietnam' },
  ],
  'Nixon': [
    { text: 'I\'m not going to be the first American president to lose a war.', attribution: 'Richard Nixon (attributed, on Vietnam)' },
  ],
  'Reagan': [
    { text: 'Our days of weakness are over. Our military forces are back on their feet and standing tall.', attribution: 'Ronald Reagan, after the Grenada invasion (1983)' },
  ],
  'Bush Sr.': [
    { text: 'This will not stand, this aggression against Kuwait.', attribution: 'George H.W. Bush (August 5, 1990)' },
  ],
  'Bush Jr.': [
    { text: 'Every nation, in every region, now has a decision to make. Either you are with us, or you are with the terrorists.', attribution: 'George W. Bush, Address to Congress (September 20, 2001)' },
  ],
  'Obama': [
    { text: 'I believe in American exceptionalism with every fiber of my being. But what makes us exceptional is not our ability to flout international norms and the rule of law.', attribution: 'Barack Obama, West Point Commencement (2014)' },
  ],
  'Trump': [
    { text: 'Great nations do not fight endless wars.', attribution: 'Donald Trump, State of the Union Address (2019)' },
  ],
  'Biden': [
    { text: 'We will support Ukraine for as long as it takes.', attribution: 'Joe Biden (repeated statement, 2022-2024)' },
  ],
}

const presidentNarratives: Record<string, string> = {
  'Washington': 'George Washington set the foundational precedent for American war-making. As commander of the Continental Army, he understood the costs of war firsthand. As president, he navigated the Quasi-War tensions with France, issued the Neutrality Proclamation, and in his Farewell Address warned against "entangling alliances" and permanent military establishments. Yet he also used military force against his own citizens in the Whiskey Rebellion (1794), demonstrating that even the most liberty-minded leader would reach for the sword when challenged.',
  'Adams': 'John Adams navigated the Quasi-War with France — America\'s first undeclared war — with remarkable restraint. Despite enormous pressure from Alexander Hamilton and the Federalist war hawks to escalate into full conflict, Adams chose diplomacy. It cost him reelection but prevented a disastrous war. His presidency also produced the Alien and Sedition Acts, showing how even limited military conflicts become pretexts for civil liberties abuses.',
  'Jefferson': 'Thomas Jefferson, the apostle of limited government, launched America\'s first overseas military expedition — the Barbary Wars — without congressional authorization. The irony is thick: the man who wrote "peace, commerce, and honest friendship with all nations" sent the Navy across an ocean to fight. Jefferson\'s presidency established that even presidents philosophically opposed to military power will use it when they judge it necessary.',
  'Madison': 'James Madison — the "Father of the Constitution" who gave Congress the war power — led the nation into the War of 1812, one of America\'s most unnecessary conflicts. The invasion of Canada failed spectacularly, the British burned Washington, and the peace treaty resolved none of the war\'s stated causes. Madison\'s war demonstrated that even the architects of constitutional restraint can succumb to war fever.',
  'Polk': 'James K. Polk manufactured the Mexican-American War through deliberate provocation — ordering troops into disputed territory, then lying to Congress about Mexico shedding "American blood upon American soil." His war of conquest seized half of Mexico\'s territory but planted the seeds of the Civil War. Polk is the archetypal example of a president using deception to start a war of choice.',
  'Lincoln': 'Abraham Lincoln preserved the Union and ended slavery — achievements that justify an enormous expenditure of blood and treasure. But his wartime record also includes suspending habeas corpus, imprisoning 13,000 political prisoners, shutting 300+ newspapers, and establishing military tribunals for civilians. The Civil War demonstrated that even the most just wars expand executive power and erode civil liberties.',
  'McKinley': 'William McKinley led America into the Spanish-American War on a wave of yellow journalism hysteria, then embraced imperial expansion — acquiring the Philippines because God told him to "Christianize" an already Christian nation. His presidency transformed the United States from a continental republic into a global empire, launching a century of overseas military intervention.',
  'Roosevelt': 'Theodore Roosevelt embodied the imperial presidency. He resigned from government to lead the Rough Riders in Cuba, then as president wielded military power with enthusiasm — the "Big Stick" policy. The Philippine-American War\'s brutal counterinsurgency continued under his watch, killing hundreds of thousands of Filipino civilians. Roosevelt believed American military power was a force for civilization; the evidence is more complicated.',
  'Wilson': 'Woodrow Wilson promised "he kept us out of war," then led America into World War I five months after reelection. His administration produced the Espionage and Sedition Acts — the most severe crackdown on civil liberties in American history. His idealistic "Fourteen Points" were betrayed at Versailles, and his League of Nations failed. Wilson proved that idealism and repression can coexist in the same president.',
  'Truman': 'Harry Truman made the most consequential military decisions of the 20th century: dropping atomic bombs on Japan, committing troops to Korea without congressional authorization, and establishing the national security state (CIA, NSC, Department of Defense). His "police action" in Korea — calling a war something other than a war to bypass Congress — became the template for every president who followed.',
  'Eisenhower': 'Dwight Eisenhower, the supreme Allied commander of WWII, became the most prescient critic of military power. His farewell address warning about the "military-industrial complex" is the most important presidential statement on war since Washington\'s Farewell Address. Yet his administration also launched the CIA coup in Iran (1953) and Guatemala (1954) — covert regime changes whose blowback continues to this day.',
  'Kennedy': 'John F. Kennedy\'s brief presidency was consumed by military crises: the Bay of Pigs disaster, the Cuban Missile Crisis, and the escalating commitment in Vietnam. The Bay of Pigs revealed CIA institutional arrogance; the Missile Crisis demonstrated both the terrifying dangers and the potential for restraint in the nuclear age. Kennedy began the Vietnam escalation that his successors would catastrophically expand.',
  'Johnson': 'Lyndon Johnson\'s escalation of the Vietnam War, based on the fabricated Gulf of Tonkin incident, cost 58,220 American lives and destroyed his presidency. Simultaneously, he intervened in the Dominican Republic with 22,000 troops. Johnson embodied the tragedy of a president whose domestic achievements (Civil Rights Act, Medicare) were destroyed by his foreign military adventures.',
  'Nixon': 'Richard Nixon promised to end the Vietnam War, then expanded it into Cambodia and Laos while conducting secret negotiations. The secret bombing of Cambodia, conducted without congressional knowledge, killed tens of thousands of civilians and destabilized the country — contributing to the Khmer Rouge genocide. Nixon\'s presidency demonstrated that the pursuit of "peace with honor" can produce more destruction than the war itself.',
  'Reagan': 'Ronald Reagan rebuilt American military power and wielded it aggressively: the Grenada invasion, support for the Contras in Nicaragua, the Lebanon deployment (241 Marines killed), and a massive defense buildup. His administration conducted covert operations across Central America and the Middle East, often in violation of congressional restrictions (Iran-Contra). Reagan proved that military adventurism crosses party lines.',
  'Bush Sr.': 'George H.W. Bush\'s Gulf War was the model of a "limited" military operation — clear objectives, overwhelming force, quick withdrawal. But his decision to leave Saddam in power while encouraging (then abandoning) Shia and Kurdish uprisings produced horrific consequences. The unfinished Gulf War haunted American policy until his son "finished" it — at a cost of $2 trillion and 4,599 American lives.',
  'Clinton': 'Bill Clinton\'s presidency saw military intervention become humanitarian: Bosnia, Kosovo, Somalia, cruise missile strikes on Sudan and Afghanistan. He waged war by executive authority, never seeking congressional authorization. The Kosovo war — 78 days of bombing without congressional approval — established that presidents could conduct sustained military campaigns purely through executive power.',
  'Bush Jr.': 'George W. Bush launched the two most expensive and consequential military operations since Vietnam: Afghanistan and Iraq. The Iraq War, based on false WMD claims, cost $2 trillion, killed 4,599 Americans, and destabilized the entire Middle East. His administration authorized torture, warrantless surveillance, and indefinite detention — the most dramatic expansion of executive military power since Lincoln.',
  'Obama': 'Barack Obama inherited two wars and expanded America\'s military footprint through drone strikes, conducting 10 times more strikes than Bush. He intervened in Libya without congressional authorization (calling it "kinetic military action," not war), and his administration\'s CIA program armed Syrian rebels who often fought alongside jihadists. Obama proved that even anti-war presidents become war presidents.',
  'Trump': 'Donald Trump promised to end "endless wars" but sent more troops to the Middle East, dramatically escalated drone strikes while reducing transparency, assassinated Iranian General Soleimani (risking full-scale war), and negotiated the Afghanistan withdrawal deal. His withdrawal from the Iran nuclear deal set the stage for the current confrontation. Trump\'s presidency showed that anti-interventionist rhetoric doesn\'t necessarily produce anti-interventionist policy.',
  'Biden': 'Joe Biden executed the Afghanistan withdrawal — the right decision, chaotically implemented — ending America\'s longest war. But he simultaneously launched the largest proxy war since the Cold War in Ukraine ($66.9 billion and counting), expanded operations against the Houthis, and continued the drone campaign. Biden\'s presidency demonstrates that ending one war while starting others is the American presidential pattern.',
}

export async function generateStaticParams() {
  const presidents = loadData('presidents.json')
  const params = presidents.map((p: any) => ({ slug: slugify(p.name) }))
  for (const alias of Object.keys(slugAliases)) {
    if (!params.some((p: any) => p.slug === alias)) {
      params.push({ slug: alias })
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const presidents = loadData('presidents.json')
  const resolved = resolveSlug(slug)
  const p = presidents.find((x: any) => slugify(x.name) === resolved)
  if (!p) return { title: 'President Not Found' }
  return {
    title: `${p.name} — War Record: ${fmtMoney(p.totalCost)} Spent, ${fmt(p.totalUSDeaths)} Deaths`,
    description: `${p.name}'s war record: ${p.conflicts.length} conflicts, ${fmtMoney(p.totalCost)} total cost, ${fmt(p.totalUSDeaths)} US military deaths.`,
  }
}

export default async function PresidentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const presidents = loadData('presidents.json')
  const spending = loadData('military-spending.json')
  const conflicts = loadData('conflicts.json')
  const resolved = resolveSlug(slug)
  const p = presidents.find((x: any) => slugify(x.name) === resolved)
  if (!p) notFound()

  const party = partyMap[p.name] || '—'
  const years = presidentYears[p.name] || '—'
  const spendingData = spending.filter((s: any) => s.president === p.name)
  const totalSpending = spendingData.reduce((s: number, r: any) => s + r.amount, 0)

  const presConflicts = conflicts.filter((c: any) =>
    p.conflicts.some((name: string) =>
      c.name.includes(name) || c.shortName?.includes(name) || name.includes(c.shortName || '')
    )
  )

  // Constitutional analysis
  const authorizedConflicts = presConflicts.filter((c: any) => c.congressionalAuth)
  const unauthorizedConflicts = presConflicts.filter((c: any) => !c.congressionalAuth)
  const totalCivDeaths = presConflicts.reduce((s: number, c: any) => s + (c.civilianDeaths || 0), 0)

  const quotes = presidentWarQuotes[p.name] || []
  const narrative = presidentNarratives[p.name] || ''

  // Find predecessor and successor
  const presIndex = presidents.findIndex((x: any) => x.name === p.name)
  const prevPres = presIndex > 0 ? presidents[presIndex - 1] : null
  const nextPres = presIndex < presidents.length - 1 ? presidents[presIndex + 1] : null

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Presidents at War', href: '/presidents' }, { label: p.name }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="text-stone-400 text-sm">{years}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            party === 'Republican' ? 'bg-red-600/20 text-red-400' :
            party === 'Democrat' ? 'bg-blue-600/20 text-blue-400' :
            'bg-stone-600/20 text-stone-400'
          }`}>{party}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">{p.name}</h1>
        <p className="text-stone-400 mt-2">{p.conflicts.length} conflicts · {fmtMoney(p.totalCost)} total war cost · {fmt(p.totalUSDeaths)} US deaths</p>
      </div>

      <ShareButtons title={`${p.name} — War Record`} />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(p.totalCost)}</p>
          <p className="text-xs text-muted">War Cost</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmt(p.totalUSDeaths)}</p>
          <p className="text-xs text-muted">US Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{p.conflicts.length}</p>
          <p className="text-xs text-muted">Conflicts</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{spendingData.length > 0 ? `$${totalSpending.toFixed(0)}B` : '—'}</p>
          <p className="text-xs text-muted">Military Budget (Total $B)</p>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-xl font-bold text-green-700">{authorizedConflicts.length}</p>
          <p className="text-xs text-muted">Authorized by Congress</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-xl font-bold text-red-700">{unauthorizedConflicts.length}</p>
          <p className="text-xs text-muted">No Authorization</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-xl font-bold text-red-700">{totalCivDeaths > 0 ? fmt(totalCivDeaths) : '—'}</p>
          <p className="text-xs text-muted">Civilian Deaths</p>
        </div>
      </div>

      {/* Presidential War Narrative */}
      {narrative && (
        <div className="bg-white rounded-lg p-6 mb-8 border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">📖 War Record Analysis</h2>
          <p className="text-stone-700 leading-relaxed">{narrative}</p>
        </div>
      )}

      {/* War Quotes */}
      {quotes.length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">🗣️ On War &amp; Military Power</h2>
          <div className="space-y-4">
            {quotes.map((q, i) => (
              <div key={i} className="bg-stone-900 rounded-lg p-5">
                <blockquote className="border-l-4 border-red-700 pl-4">
                  <p className="text-white italic leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                  <footer className="text-stone-400 mt-2 text-sm">— {q.attribution}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Spending Chart */}
      {spendingData.length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">📊 Military Spending During Presidency</h2>
          <PresidentSpendingChart data={spendingData} />
          <div className="mt-3 bg-stone-50 rounded-lg p-4 border">
            <p className="text-sm text-stone-600">
              Total military spending during {p.name}&apos;s tenure: <strong>${totalSpending.toFixed(0)}B</strong>.
              {spendingData.length > 1 && (
                <> Average: <strong>${(totalSpending / spendingData.length).toFixed(0)}B/year</strong>.
                {spendingData[spendingData.length - 1]?.amount > spendingData[0]?.amount
                  ? ' Spending increased over the course of the presidency.'
                  : ' Spending remained stable or decreased.'
                }</>
              )}
            </p>
          </div>
        </div>
      )}

      {/* Constitutional Analysis */}
      <div className={`rounded-lg p-6 mb-8 border ${unauthorizedConflicts.length === 0 ? 'bg-green-50 border-green-200' : unauthorizedConflicts.length > authorizedConflicts.length ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200'}`}>
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">⚖️ Constitutional Authority</h2>
        {unauthorizedConflicts.length === 0 ? (
          <p className="text-green-800">All {authorizedConflicts.length} conflicts under {p.name} had congressional authorization — a constitutional record few presidents can match.</p>
        ) : authorizedConflicts.length === 0 ? (
          <p className="text-red-800">{p.name} conducted {unauthorizedConflicts.length} military operation{unauthorizedConflicts.length > 1 ? 's' : ''} without congressional authorization — waging war through executive power alone.</p>
        ) : (
          <p className="text-yellow-800">{p.name} had authorization for {authorizedConflicts.length} conflict{authorizedConflicts.length > 1 ? 's' : ''} but conducted {unauthorizedConflicts.length} without it — a mixed constitutional record.</p>
        )}
        {unauthorizedConflicts.length > 0 && (
          <div className="mt-3 space-y-1">
            <p className="text-sm font-semibold">Unauthorized conflicts:</p>
            {unauthorizedConflicts.map((c: any) => (
              <p key={c.id} className="text-sm text-muted">• {c.name} — {c.authDetail}</p>
            ))}
          </div>
        )}
      </div>

      {/* Conflicts List */}
      <div className="mt-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">⚔️ Conflicts Under {p.name}</h2>
        <div className="space-y-3">
          {p.conflicts.map((name: string, i: number) => {
            const match = presConflicts.find((c: any) =>
              c.name.includes(name) || c.shortName?.includes(name) || name.includes(c.shortName || '')
            )
            return (
              <div key={i} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
                {match ? (
                  <Link href={`/conflicts/${match.id}`} className="block">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-primary">{match.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        match.congressionalAuth ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>{match.congressionalAuth ? '✅ Authorized' : '❌ Unauthorized'}</span>
                    </div>
                    <p className="text-sm text-muted">{match.startYear}–{match.endYear || 'Present'} · {fmtMoney(match.costInflationAdjusted)} · {match.usCasualties?.deaths ? fmt(match.usCasualties.deaths) + ' US deaths' : 'Covert'}</p>
                    <p className="text-sm text-muted mt-1">{match.outcome}</p>
                    {match.keyQuote && (
                      <p className="text-xs italic text-stone-500 mt-2 border-l-2 border-stone-300 pl-2">&ldquo;{(match.keyQuote as any).text.substring(0, 120)}...&rdquo;</p>
                    )}
                  </Link>
                ) : (
                  <h3 className="font-semibold">{name}</h3>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Legacy Assessment */}
      <div className="bg-stone-900 text-white rounded-lg p-6 mt-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">🗽 The Libertarian Assessment</h2>
        <p className="text-stone-300 leading-relaxed">
          {p.totalUSDeaths > 10000
            ? `${p.name}'s military record cost ${fmt(p.totalUSDeaths)} American lives and ${fmtMoney(p.totalCost)} in treasure. ${unauthorizedConflicts.length > 0 ? `Of ${p.conflicts.length} conflicts, ${unauthorizedConflicts.length} were waged without congressional authorization — a fundamental violation of the constitutional order.` : ''} Every dollar spent on war is a dollar not spent on reducing the tax burden, and every life lost is a permanent cost borne by American families.`
            : `${p.name} ${p.conflicts.length > 2 ? 'involved the nation in ' + p.conflicts.length + ' military conflicts' : 'used military force ' + p.conflicts.length + ' time' + (p.conflicts.length > 1 ? 's' : '')}, at a cost of ${fmtMoney(p.totalCost)}. ${unauthorizedConflicts.length > 0 ? `${unauthorizedConflicts.length} of these lacked congressional authorization.` : ''} The question libertarians must always ask: were these conflicts truly necessary for the defense of American liberty?`
          }
        </p>
      </div>

      {/* Navigation: Previous / Next President */}
      <div className="flex justify-between mt-8 mb-8">
        {prevPres ? (
          <Link href={`/presidents/${slugify(prevPres.name)}`} className="bg-white rounded-lg border px-4 py-3 hover:shadow-md transition">
            <p className="text-xs text-muted">← Previous</p>
            <p className="font-semibold">{prevPres.name}</p>
          </Link>
        ) : <div />}
        {nextPres ? (
          <Link href={`/presidents/${slugify(nextPres.name)}`} className="bg-white rounded-lg border px-4 py-3 hover:shadow-md transition text-right">
            <p className="text-xs text-muted">Next →</p>
            <p className="font-semibold">{nextPres.name}</p>
          </Link>
        ) : <div />}
      </div>

      <BackToTop />
    </div>
  )
}
