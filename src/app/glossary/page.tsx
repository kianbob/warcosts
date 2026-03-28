import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Military Glossary — 50+ War & Defense Terms Decoded | WarCosts',
  description: 'Military acronyms and defense terms decoded: AUMF, CENTCOM, IRGC, Tomahawk, B-2, JASSM, IEEPA, War Powers Resolution, NATO, COIN, ROE, PTSD, DARPA, and more.',
  openGraph: {
    title: 'Military Glossary — Decode the War Machine',
    description: '50+ essential military terms, weapons, laws, and acronyms explained in plain English.',
    url: 'https://www.warcosts.org/glossary',
    siteName: 'WarCosts',
    type: 'website',
  },
  alternates: { canonical: 'https://www.warcosts.org/glossary' },
  keywords: ['military glossary', 'defense acronyms', 'AUMF definition', 'military terms explained', 'war terminology'],
}

interface GlossaryTerm {
  term: string
  fullName: string
  definition: string
  category: string
}

const terms: GlossaryTerm[] = [
  // Legal & Policy
  { term: 'AUMF', fullName: 'Authorization for Use of Military Force', definition: 'Congressional resolution authorizing the President to use armed forces. The 2001 AUMF — just 60 words — has justified 25 years of war across 78+ countries against groups that didn\'t exist on 9/11.', category: 'Legal & Policy' },
  { term: 'War Powers Resolution', fullName: 'War Powers Resolution of 1973', definition: 'Federal law requiring the President to notify Congress within 48 hours of committing armed forces and withdraw within 60 days without congressional authorization. Routinely ignored by presidents of both parties.', category: 'Legal & Policy' },
  { term: 'IEEPA', fullName: 'International Emergency Economic Powers Act', definition: 'Law granting the President broad authority to regulate commerce during a national emergency. Used to impose sanctions, freeze assets, and restrict trade — often as an alternative to military action.', category: 'Legal & Policy' },
  { term: 'ROE', fullName: 'Rules of Engagement', definition: 'Military directives defining when, where, how, and against whom force may be used. Drone "signature strikes" eliminated many ROE protections, allowing strikes on unidentified targets based on behavioral patterns.', category: 'Legal & Policy' },
  { term: 'SOFA', fullName: 'Status of Forces Agreement', definition: 'Bilateral agreement defining the legal status of US military personnel stationed in a foreign country. Determines whether troops can be tried under local law.', category: 'Legal & Policy' },
  { term: 'Title 10 / Title 50', fullName: 'Title 10 & Title 50 of U.S. Code', definition: 'Title 10 governs military operations (DoD); Title 50 governs intelligence/covert operations (CIA). The blurred line between them allows shadow wars with minimal oversight.', category: 'Legal & Policy' },

  // Military Commands & Organizations
  { term: 'CENTCOM', fullName: 'United States Central Command', definition: 'Combatant command responsible for the Middle East, Central Asia, and parts of South Asia. Headquarters of America\'s forever wars — overseeing operations in Iraq, Afghanistan, Syria, and now Iran.', category: 'Commands & Organizations' },
  { term: 'NATO', fullName: 'North Atlantic Treaty Organization', definition: 'Military alliance of 32 countries (as of 2024). Article 5 collective defense means an attack on one is an attack on all. The US provides ~70% of NATO military spending.', category: 'Commands & Organizations' },
  { term: 'JSOC', fullName: 'Joint Special Operations Command', definition: 'Controls Tier 1 special operations forces (Delta Force, SEAL Team Six). Conducts kill/capture missions in 134+ countries. Often called the President\'s private army.', category: 'Commands & Organizations' },
  { term: 'SOCOM', fullName: 'United States Special Operations Command', definition: 'Unified combatant command overseeing all special operations forces. 70,000+ personnel operating in 134+ countries — America\'s shadow army.', category: 'Commands & Organizations' },
  { term: 'IRGC', fullName: 'Islamic Revolutionary Guard Corps', definition: 'Iran\'s elite military force, separate from the regular army. Controls Iran\'s missile program, proxy forces (Hezbollah, Houthis), and nuclear facilities. Primary US target in the 2026 Iran conflict.', category: 'Commands & Organizations' },
  { term: 'DoD', fullName: 'Department of Defense', definition: 'Federal department responsible for all military agencies. $886B annual budget (2024), largest government agency, headquartered at the Pentagon. Has failed every financial audit since 1991.', category: 'Commands & Organizations' },
  { term: 'VA', fullName: 'Department of Veterans Affairs', definition: 'Federal department providing healthcare, disability benefits, education (GI Bill), and other services to 18 million military veterans. $325B+ annual budget.', category: 'Commands & Organizations' },
  { term: 'DARPA', fullName: 'Defense Advanced Research Projects Agency', definition: 'DoD research agency developing emerging military technologies. Created the internet, GPS, and stealth technology. Now focused on AI weapons, hypersonics, and autonomous systems. $4B+ budget.', category: 'Commands & Organizations' },
  { term: 'CIA SAD/SAC', fullName: 'CIA Special Activities Center', definition: 'CIA\'s paramilitary arm conducting covert operations, regime change, and proxy wars abroad. The most secretive part of the US war machine.', category: 'Commands & Organizations' },
  { term: 'NSC', fullName: 'National Security Council', definition: 'Principal forum advising the President on national security and foreign policy. Coordinates between Defense, State, CIA, and other agencies. Where war decisions are really made.', category: 'Commands & Organizations' },

  // Weapons Systems
  { term: 'Tomahawk', fullName: 'Tomahawk Cruise Missile (BGM-109)', definition: 'Long-range, subsonic cruise missile launched from ships and submarines. ~$2 million per unit. Used extensively in Iraq, Libya, Syria, and the 2026 Iran strikes. Range: 1,000+ miles.', category: 'Weapons' },
  { term: 'B-2 Spirit', fullName: 'B-2 Spirit Stealth Bomber', definition: 'Flying-wing stealth strategic bomber. $2.1 billion per aircraft — the most expensive plane ever built. Only 20 exist. Used for first-strike missions against heavily defended targets including Iran.', category: 'Weapons' },
  { term: 'JASSM', fullName: 'Joint Air-to-Surface Standoff Missile', definition: 'Stealthy cruise missile launched from aircraft. JASSM-ER (Extended Range) variant reaches 575+ miles. ~$1.4M per unit. Key weapon in the 2026 Iran campaign, allowing strikes from outside air defense range.', category: 'Weapons' },
  { term: 'SM-3', fullName: 'Standard Missile 3', definition: 'Ship-launched ballistic missile interceptor. Designed to destroy incoming ballistic missiles in space. ~$12M per unit. Central to US Aegis missile defense against Iranian ballistic missiles.', category: 'Weapons' },
  { term: 'F-35', fullName: 'F-35 Lightning II Joint Strike Fighter', definition: 'Fifth-generation stealth multirole fighter. $1.7 trillion total program cost — the most expensive weapons program in history. Unit cost ~$80M. Plagued by 800+ design deficiencies.', category: 'Weapons' },
  { term: 'MQ-9 Reaper', fullName: 'MQ-9 Reaper (Predator B)', definition: 'Armed drone used for surveillance and targeted killing. $32M per unit. Has conducted thousands of strikes in Afghanistan, Pakistan, Yemen, Somalia, and Iraq. Operates up to 50,000 feet for 27 hours.', category: 'Weapons' },
  { term: 'MOAB', fullName: 'Massive Ordnance Air Blast (GBU-43/B)', definition: 'The "Mother of All Bombs" — largest non-nuclear bomb in the US arsenal. 21,600 lbs. Used once in combat (Afghanistan, 2017). $170,000 per unit.', category: 'Weapons' },
  { term: 'THAAD', fullName: 'Terminal High Altitude Area Defense', definition: 'Mobile anti-ballistic missile system designed to intercept short and medium-range missiles. $800M per battery. Deployed to protect allies and US forces in the Middle East.', category: 'Weapons' },

  // Strategy & Operations
  { term: 'COIN', fullName: 'Counterinsurgency', definition: 'Military strategy combining military force with civilian measures to defeat insurgencies. The "hearts and minds" approach failed spectacularly in Iraq and Afghanistan at a cost of trillions.', category: 'Strategy & Operations' },
  { term: 'FOB', fullName: 'Forward Operating Base', definition: 'Secured military position used to support tactical operations. The US built hundreds of FOBs in Iraq and Afghanistan, many costing $100M+ and later abandoned or handed over.', category: 'Strategy & Operations' },
  { term: 'GWOT', fullName: 'Global War on Terror', definition: 'US-led military campaign launched after 9/11. Has cost $8T+, killed 929,000+ people across 78+ countries, and displaced 38 million — with no clear end in sight.', category: 'Strategy & Operations' },
  { term: 'OCO', fullName: 'Overseas Contingency Operations', definition: 'Budget category for war spending created to fund Iraq/Afghanistan outside the regular defense budget. $2.3T total (2001-2021). A slush fund that avoided budget caps.', category: 'Strategy & Operations' },
  { term: 'Force Projection', fullName: 'Force Projection', definition: 'Ability to deploy and sustain military forces outside national territory. The US maintains 750+ bases in 80 countries for this purpose — costing $55B+ annually.', category: 'Strategy & Operations' },
  { term: 'Shock and Awe', fullName: 'Rapid Dominance / Shock and Awe', definition: 'Military doctrine using overwhelming force to paralyze the enemy. Famously used in the 2003 Iraq invasion. Criticized for massive civilian casualties and failing to prevent insurgency.', category: 'Strategy & Operations' },

  // Intelligence
  { term: 'SIGINT', fullName: 'Signals Intelligence', definition: 'Intelligence gathered through interception of communications and electronic signals. NSA collects SIGINT globally through phone taps, internet monitoring, and satellite interception.', category: 'Intelligence' },
  { term: 'HUMINT', fullName: 'Human Intelligence', definition: 'Intelligence gathered through human sources — spies, informants, interrogation. CIA specializes in HUMINT. Often unreliable — contributed to false Iraq WMD claims.', category: 'Intelligence' },
  { term: 'PDB', fullName: 'President\'s Daily Brief', definition: 'Top-secret document presented to the President each morning with critical intelligence. Shapes decisions on war and peace. Rarely declassified.', category: 'Intelligence' },

  // Medical & Veterans
  { term: 'PTSD', fullName: 'Post-Traumatic Stress Disorder', definition: 'Mental health condition from experiencing/witnessing traumatic events. 20% of Iraq/Afghanistan veterans have PTSD. Contributes to 17+ veteran suicides per day.', category: 'Veterans & Medical' },
  { term: 'TBI', fullName: 'Traumatic Brain Injury', definition: 'Brain injury from external trauma, common in IED blast exposure. 450,000+ veterans diagnosed since 2000. Often leads to PTSD, chronic pain, and lifelong disability.', category: 'Veterans & Medical' },
  { term: 'GI Bill', fullName: 'GI Bill (Post-9/11)', definition: 'Federal education benefit for veterans covering tuition, housing, and books. Originally created in 1944 to prevent a veteran unemployment crisis. The Post-9/11 GI Bill covers up to 36 months of education.', category: 'Veterans & Medical' },
  { term: 'IED', fullName: 'Improvised Explosive Device', definition: 'Homemade bomb — the #1 killer of US troops in Iraq and Afghanistan. Responsible for ~60% of US combat deaths in Iraq. Led to $45B+ in armored vehicle programs (MRAP).', category: 'Veterans & Medical' },

  // Defense Industry & Budget
  { term: 'MIC', fullName: 'Military-Industrial Complex', definition: 'Network of relationships between the military, defense contractors, and government officials. Eisenhower warned of its "unwarranted influence" in 1961. The revolving door between the Pentagon and contractors drives endless war.', category: 'Defense Industry' },
  { term: 'FMS', fullName: 'Foreign Military Sales', definition: 'US government program selling military equipment to foreign countries. $138B in deals (2022). Arms sales to dictatorships and human rights abusers are routine.', category: 'Defense Industry' },
  { term: 'QME', fullName: 'Qualitative Military Edge', definition: 'US commitment ensuring Israel maintains military superiority over any combination of regional forces. Justifies $3.8B annual military aid and restricts US arms sales to Arab countries.', category: 'Defense Industry' },
  { term: 'LOGCAP', fullName: 'Logistics Civil Augmentation Program', definition: 'Army program for commercial contract support to military operations. $150B+ went to KBR/Halliburton for Iraq/Afghanistan services. Major source of war profiteering and waste.', category: 'Defense Industry' },
  { term: 'Cost-Plus Contract', fullName: 'Cost-Plus Contract', definition: 'Contract where the government pays the contractor\'s costs plus a guaranteed profit margin. Incentivizes overspending — the more a contractor spends, the more they earn. Common in defense procurement.', category: 'Defense Industry' },

  // Sanctions & Diplomacy
  { term: 'Sanctions', fullName: 'Economic Sanctions', definition: 'Restrictions on trade, finance, or travel imposed on countries or individuals. The US maintains sanctions on 30+ countries. Often harm civilians more than regimes.', category: 'Sanctions & Diplomacy' },
  { term: 'SWIFT', fullName: 'Society for Worldwide Interbank Financial Telecommunication', definition: 'Global financial messaging network connecting 11,000+ banks. Being cut off from SWIFT (as happened to Russia in 2022) effectively isolates a country from the global financial system.', category: 'Sanctions & Diplomacy' },
]

// Sort alphabetically
const sortedTerms = [...terms].sort((a, b) => a.term.localeCompare(b.term))

// Get unique categories in display order
const categoryOrder = ['Legal & Policy', 'Commands & Organizations', 'Weapons', 'Strategy & Operations', 'Intelligence', 'Veterans & Medical', 'Defense Industry', 'Sanctions & Diplomacy']

// Alphabet quick-nav
const letters = [...new Set(sortedTerms.map(t => t.term[0].toUpperCase()))].sort()

export default function GlossaryPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Military and Defense Glossary',
    description: 'Comprehensive glossary of military acronyms, defense terms, weapons systems, and war-related terminology.',
    url: 'https://www.warcosts.org/glossary',
    hasDefinedTerm: sortedTerms.map(t => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      alternateName: t.fullName,
      inDefinedTermSet: 'https://www.warcosts.org/glossary',
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Glossary' }]} />
        <BreadcrumbSchema items={[{ label: 'Glossary' }]} />

        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Military Glossary</h1>
        <p className="text-stone-500 text-lg mb-8">
          {sortedTerms.length} essential military terms, weapons, laws, and acronyms — decoded in plain English.
        </p>

        {/* Alphabet Quick Nav */}
        <div className="bg-stone-50 rounded-lg border p-4 mb-4">
          <p className="font-bold text-sm mb-2">Jump to letter:</p>
          <div className="flex flex-wrap gap-1">
            {letters.map(letter => (
              <a key={letter} href={`#letter-${letter}`} className="w-8 h-8 flex items-center justify-center bg-white rounded border text-sm font-mono hover:bg-stone-100 transition">
                {letter}
              </a>
            ))}
          </div>
        </div>

        {/* Category Quick Nav */}
        <div className="bg-stone-50 rounded-lg border p-4 mb-8">
          <p className="font-bold text-sm mb-2">Browse by category:</p>
          <div className="flex flex-wrap gap-2">
            {categoryOrder.map(cat => (
              <a key={cat} href={`#cat-${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="bg-white px-3 py-1 rounded border text-sm hover:bg-stone-100 transition">
                {cat}
              </a>
            ))}
          </div>
        </div>

        {/* Alphabetical listing */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 border-b border-stone-200 pb-2">All Terms (A–Z)</h2>
          {letters.map(letter => (
            <div key={letter} id={`letter-${letter}`} className="mb-8">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary mb-3">{letter}</h3>
              <div className="grid gap-3">
                {sortedTerms.filter(t => t.term[0].toUpperCase() === letter).map(t => (
                  <div key={t.term} id={t.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="bg-white border rounded-lg p-5">
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-primary">{t.term}</h4>
                      <span className="text-stone-500 text-sm">— {t.fullName}</span>
                      <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded ml-auto">{t.category}</span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{t.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* By Category */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 border-b border-stone-200 pb-2">By Category</h2>
          {categoryOrder.map(cat => {
            const catTerms = sortedTerms.filter(t => t.category === cat)
            if (catTerms.length === 0) return null
            return (
              <div key={cat} id={`cat-${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="mb-8">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">{cat}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {catTerms.map(t => (
                    <a key={t.term} href={`#${t.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="bg-white border rounded-lg p-4 hover:shadow-md transition">
                      <span className="font-bold text-primary">{t.term}</span>
                      <span className="text-stone-500 text-sm ml-2">{t.fullName}</span>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </section>

        {/* Related */}
        <section className="bg-stone-50 rounded-lg p-6 border">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href="/faq" className="bg-white border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-1">FAQ</h3>
              <p className="text-stone-500 text-sm">Common questions about war costs and methodology</p>
            </Link>
            <Link href="/downloads" className="bg-white border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-1">Downloads</h3>
              <p className="text-stone-500 text-sm">Download raw data files</p>
            </Link>
            <Link href="/analysis/military-industrial-complex" className="bg-white border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-1">Military-Industrial Complex</h3>
              <p className="text-stone-500 text-sm">How the MIC drives endless war</p>
            </Link>
            <Link href="/sources" className="bg-white border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-1">Our Sources</h3>
              <p className="text-stone-500 text-sm">Where we get our data</p>
            </Link>
          </div>
        </section>

        <BackToTop />
      </div>
    </>
  )
}
