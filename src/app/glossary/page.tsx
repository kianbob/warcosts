import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Military Glossary — War & Defense Terms Decoded | WarCosts',
  description: 'Military acronyms and defense terms decoded: AUMF, CENTCOM, JSOC, MIC, SIGINT, and more. Your guide to understanding America\'s war machine.',
  openGraph: {
    title: 'Military Glossary — Decode the War Machine',
    description: 'AUMF, CENTCOM, JSOC, MIC, SIGINT — decode the acronyms and understand how America\'s war machine really works.',
    url: 'https://www.warcosts.org/glossary',
    siteName: 'WarCosts',
    type: 'website',
  },
  alternates: { canonical: 'https://www.warcosts.org/glossary' },
}

interface GlossaryTerm {
  acronym: string
  fullName: string
  definition: string
  context: string
  category: string
}

const glossaryTerms: GlossaryTerm[] = [
  {
    acronym: 'AUMF',
    fullName: 'Authorization for Use of Military Force',
    definition: 'Congressional resolution authorizing the President to use armed forces against those responsible for 9/11 and associated forces.',
    context: 'The 2001 AUMF — just 60 words — has been used to justify 25+ years of global warfare across 78+ countries. The legal foundation of the forever wars.',
    category: 'Legal/Policy'
  },
  {
    acronym: 'CENTCOM',
    fullName: 'United States Central Command',
    definition: 'One of eleven unified combatant commands, responsible for military operations in Central and Southwest Asia and most of the Middle East.',
    context: 'CENTCOM oversees operations in Afghanistan, Iraq, Syria, Iran, and 18 other countries. The headquarters of America\'s forever wars.',
    category: 'Military Commands'
  },
  {
    acronym: 'SOCOM',
    fullName: 'United States Special Operations Command',
    definition: 'Unified combatant command overseeing special operations forces from all service branches.',
    context: 'SOCOM operates in 134+ countries with 70,000+ personnel. America\'s shadow army conducting kill/capture missions worldwide.',
    category: 'Military Commands'
  },
  {
    acronym: 'JSOC',
    fullName: 'Joint Special Operations Command',
    definition: 'Sub-unified command that controls Tier 1 special operations forces like Delta Force and SEAL Team Six.',
    context: 'JSOC conducts the most sensitive kill/capture operations. Often called the President\'s private army. Highly classified budget.',
    category: 'Military Commands'
  },
  {
    acronym: 'CIA SAD',
    fullName: 'Central Intelligence Agency Special Activities Division',
    definition: 'CIA\'s paramilitary arm conducting covert operations abroad.',
    context: 'SAD conducts assassinations, coups, and proxy wars. Now called Special Activities Center. The most secretive part of the U.S. war machine.',
    category: 'Intelligence'
  },
  {
    acronym: 'NSC',
    fullName: 'National Security Council',
    definition: 'Principal forum for national security and foreign policy matters, advising the President.',
    context: 'The NSC coordinates between Defense, State, CIA, and other agencies. Where war decisions are really made.',
    category: 'Government'
  },
  {
    acronym: 'PDB',
    fullName: 'President\'s Daily Brief',
    definition: 'Top-secret document presented to the President each morning with the most critical intelligence.',
    context: 'The PDB shapes presidential decisions on war and peace. Often used to justify military action. Rarely declassified.',
    category: 'Intelligence'
  },
  {
    acronym: 'SIGINT',
    fullName: 'Signals Intelligence',
    definition: 'Intelligence gathering through interception of communications and electronic signals.',
    context: 'NSA collects SIGINT globally through phone taps, internet monitoring, and satellite interception. Mass surveillance program.',
    category: 'Intelligence'
  },
  {
    acronym: 'HUMINT',
    fullName: 'Human Intelligence',
    definition: 'Intelligence gathered through human sources, including spies, informants, and interrogations.',
    context: 'CIA specializes in HUMINT through case officers and assets worldwide. Often unreliable — led to Iraq WMD lies.',
    category: 'Intelligence'
  },
  {
    acronym: 'LOGCAP',
    fullName: 'Logistics Civil Augmentation Program',
    definition: 'Army program providing commercial contract logistics support to military operations.',
    context: 'LOGCAP contracts worth $150B+ went to KBR/Halliburton in Iraq/Afghanistan. Major source of war profiteering.',
    category: 'Contracting'
  },
  {
    acronym: 'QME',
    fullName: 'Qualitative Military Edge',
    definition: 'U.S. commitment to ensure Israel maintains military superiority over any combination of Arab forces.',
    context: 'QME justifies $3.8B annual military aid to Israel and restricts U.S. arms sales to Arab countries. Shapes Middle East policy.',
    category: 'Policy'
  },
  {
    acronym: 'GWOT',
    fullName: 'Global War on Terror',
    definition: 'U.S.-led military campaign launched after 9/11 against Al-Qaeda and affiliated terrorist organizations.',
    context: 'GWOT has cost $8T+ and killed 929,000+ people across 78+ countries. The forever war with no clear end.',
    category: 'Operations'
  },
  {
    acronym: 'OCO',
    fullName: 'Overseas Contingency Operations',
    definition: 'Budget category for war spending, created to fund Iraq and Afghanistan Wars outside regular defense budget.',
    context: 'OCO spending totaled $2.3T from 2001-2021. A slush fund that avoided budget caps and deficit controls.',
    category: 'Budget'
  },
  {
    acronym: 'COIN',
    fullName: 'Counterinsurgency',
    definition: 'Military strategy designed to defeat insurgent movements through a combination of military and civilian measures.',
    context: 'COIN doctrine failed spectacularly in Iraq and Afghanistan. Hearts and minds don\'t stop IEDs.',
    category: 'Strategy'
  },
  {
    acronym: 'ROE',
    fullName: 'Rules of Engagement',
    definition: 'Military directives that define when, where, how, and against whom force may be used.',
    context: 'ROE often ignored or revised to justify civilian casualties. Drone \"signature strikes\" eliminated many ROE protections.',
    category: 'Military Law'
  },
  {
    acronym: 'TBI',
    fullName: 'Traumatic Brain Injury',
    definition: 'Brain injury caused by external trauma, common in troops exposed to IED explosions.',
    context: '450,000+ veterans diagnosed with TBI since 2000. Often leads to PTSD, suicide, and lifelong disability.',
    category: 'Medical'
  },
  {
    acronym: 'PTSD',
    fullName: 'Post-Traumatic Stress Disorder',
    definition: 'Mental health condition triggered by experiencing or witnessing terrifying events.',
    context: '20% of Iraq/Afghanistan veterans have PTSD. Leads to 17+ veteran suicides per day. VA often denies benefits.',
    category: 'Medical'
  },
  {
    acronym: 'VA',
    fullName: 'Department of Veterans Affairs',
    definition: 'Federal department providing healthcare, disability benefits, and other services to military veterans.',
    context: 'VA budget is $270B+ but veterans face long wait times, benefit denials, and substandard care. Systemic failures.',
    category: 'Government'
  },
  {
    acronym: 'DoD',
    fullName: 'Department of Defense',
    definition: 'Federal executive department responsible for coordinating and supervising all military agencies.',
    context: '$886B annual budget (2024). Largest government agency. Failed every audit since 1991. The Pentagon.',
    category: 'Government'
  },
  {
    acronym: 'DARPA',
    fullName: 'Defense Advanced Research Projects Agency',
    definition: 'DoD research agency responsible for developing emerging technologies for military use.',
    context: 'DARPA created the internet, GPS, and now works on AI weapons. $4B+ budget. Where science becomes warfare.',
    category: 'Research'
  },
  {
    acronym: 'MIC',
    fullName: 'Military-Industrial Complex',
    definition: 'Network of relationships between military, defense contractors, and government officials.',
    context: 'Eisenhower\'s warning (1961) about unwarranted influence. Revolving door between Pentagon and contractors drives endless war.',
    category: 'System'
  },
  {
    acronym: 'FMS',
    fullName: 'Foreign Military Sales',
    definition: 'U.S. government program for selling military equipment and services to foreign countries.',
    context: '$138B in FMS deals (2022). Arms sales to dictatorships and human rights abusers. Diplomacy through weapons.',
    category: 'Arms Trade'
  },
  {
    acronym: 'DCS',
    fullName: 'Direct Commercial Sales',
    definition: 'Sales of defense articles and services directly between U.S. companies and foreign entities.',
    context: 'DCS allows private arms sales with government licensing. Less oversight than FMS. Major source of global arms proliferation.',
    category: 'Arms Trade'
  }
]

const categories = ['All', 'Military Commands', 'Intelligence', 'Legal/Policy', 'Operations', 'Budget', 'Government', 'Medical', 'System', 'Arms Trade', 'Research', 'Strategy', 'Military Law', 'Contracting']

export default function GlossaryPage() {
  // Group terms by category
  const termsByCategory = categories.slice(1).reduce((acc, category) => {
    acc[category] = glossaryTerms.filter(term => term.category === category)
    return acc
  }, {} as Record<string, GlossaryTerm[]>)

  // JSON-LD structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Military and Defense Glossary',
    description: 'Comprehensive glossary of military acronyms, defense terms, and war-related terminology',
    url: 'https://www.warcosts.org/glossary',
    hasDefinedTerm: glossaryTerms.map(term => ({
      '@type': 'DefinedTerm',
      name: term.acronym,
      description: term.definition,
      alternateName: term.fullName,
      inDefinedTermSet: 'https://www.warcosts.org/glossary'
    }))
  }

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />
      
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Glossary' }]} />
        <BreadcrumbSchema items={[{ label: 'Glossary' }]} />
        
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">
          Military Glossary
        </h1>
        <p className="text-stone-500 text-lg mb-8">
          Decode the acronyms and understand how America&apos;s war machine really works. 
          {glossaryTerms.length} essential terms explained.
        </p>

        {/* Quick Navigation */}
        <div className="bg-stone-100 rounded-lg p-4 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] font-bold mb-3">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2">
            {categories.slice(1).map(category => (
              <a 
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white px-3 py-1 rounded text-sm hover:bg-stone-200 transition"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Terms by Category */}
        {Object.entries(termsByCategory).map(([category, terms]) => (
          <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 border-b border-stone-200 pb-2">
              {category}
            </h2>
            <div className="grid gap-6">
              {terms.sort((a, b) => a.acronym.localeCompare(b.acronym)).map(term => (
                <div key={term.acronym} className="bg-white border rounded-lg p-6">
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary">
                      {term.acronym}
                    </h3>
                    <span className="text-stone-600 font-medium">{term.fullName}</span>
                  </div>
                  <p className="text-stone-700 mb-3">{term.definition}</p>
                  <div className="bg-stone-50 rounded-lg p-4">
                    <p className="text-stone-600 text-sm">
                      <strong>Why it matters:</strong> {term.context}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Additional Resources */}
        <section className="mt-16 pt-8 border-t border-stone-200">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/analysis/military-industrial-complex" className="bg-white border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-[family-name:var(--font-heading)] font-bold mb-2">Military-Industrial Complex</h3>
              <p className="text-stone-600 text-sm">How the MIC shapes American foreign policy and drives endless war</p>
            </Link>
            <Link href="/contractors" className="bg-white border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-[family-name:var(--font-heading)] font-bold mb-2">Defense Contractors</h3>
              <p className="text-stone-600 text-sm">The companies that profit from America&apos;s wars</p>
            </Link>
            <Link href="/analysis/shadow-wars" className="bg-white border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-[family-name:var(--font-heading)] font-bold mb-2">Shadow Wars</h3>
              <p className="text-stone-600 text-sm">JSOC and CIA operations in 134+ countries</p>
            </Link>
            <Link href="/sources" className="bg-white border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-[family-name:var(--font-heading)] font-bold mb-2">Our Sources</h3>
              <p className="text-stone-600 text-sm">Where we get our data and how we verify it</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}