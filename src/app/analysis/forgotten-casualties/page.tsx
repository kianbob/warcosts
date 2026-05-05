import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Forgotten Casualties: America\'s Uncounted Dead',
  description: 'Contractors, allied forces, interpreters, civilians — the true death toll is far higher than official counts. Millions died in US wars.',
  openGraph: {
    title: 'Forgotten Casualties: The Uncounted Dead',
    description: 'The real death toll of US wars includes contractors, allies, interpreters, and millions of civilians. None of them appear on any memorial.',
    url: 'https://www.warcosts.org/analysis/forgotten-casualties',
    type: 'article',
  },
}

const keyStats = [
  { stat: '4.5M+', label: 'Total deaths in post-9/11 war zones (direct and indirect)', source: 'Brown University Costs of War Project (2023)' },
  { stat: '387,000+', label: 'Direct war deaths of civilians in post-9/11 conflicts', source: 'Costs of War Project' },
  { stat: '8,000+', label: 'US contractor deaths in Iraq and Afghanistan', source: 'Department of Labor OWCP' },
  { stat: '78,000+', label: 'Allied military and police deaths in post-9/11 wars', source: 'Costs of War Project' },
  { stat: '~300', label: 'Afghan/Iraqi interpreters murdered while waiting for promised US visas', source: 'No One Left Behind (nonprofit)' },
  { stat: '38M+', label: 'People displaced by post-9/11 US military operations', source: 'Costs of War Project' },
]

const officialVsReal = [
  { war: 'Revolutionary War (1775–1783)', officialUS: '6,800 combat', realTotal: '~70,000', whoIsUncounted: 'Disease deaths (est. 17,000), Loyalist casualties, Native American deaths, African Americans who died serving both sides, French allied deaths' },
  { war: 'Civil War (1861–1865)', officialUS: '365,000 Union combat', realTotal: '~750,000–1,000,000', whoIsUncounted: 'Confederate dead often undercounted, disease deaths (2/3 of total), 60,000+ enslaved people who died fleeing or serving, civilian deaths' },
  { war: 'World War I (1917–1918)', officialUS: '53,402 combat', realTotal: '~116,516 US + 20M globally', whoIsUncounted: 'Spanish Flu deaths among troops (>25,000), shell shock victims who died later, colonial troops from Africa and Asia' },
  { war: 'World War II (1941–1945)', officialUS: '291,557 combat', realTotal: '~405,399 US + 70–85M globally', whoIsUncounted: 'Merchant mariners (>9,500), civilians in bombing campaigns, Holocaust victims, Chinese civilian deaths (15–20M), Soviet civilian deaths (14M+)' },
  { war: 'Korean War (1950–1953)', officialUS: '33,686 combat', realTotal: '~36,574 US + 2.5–3M total', whoIsUncounted: 'South Korean military (217,000+), South Korean civilians (1M+), North Korean civilians (1.5M+), Chinese forces (180,000+), POW deaths' },
  { war: 'Vietnam War (1955–1975)', officialUS: '47,434 combat', realTotal: '~58,220 US + 3.4M total', whoIsUncounted: 'ARVN (South Vietnamese) military (254,000), Vietnamese civilians (2M+), Laotian civilians (200,000+), Cambodian civilians (500,000+), Agent Orange long-term deaths' },
  { war: 'Gulf War (1990–1991)', officialUS: '148 combat', realTotal: '~383 US + 20,000–35,000 Iraqi', whoIsUncounted: 'Gulf War Syndrome deaths (est. 6,400+ veterans died of related illness), Highway of Death casualties, Iraqi conscript deaths, Kurdish refugee deaths' },
  { war: 'Iraq War (2003–2011)', officialUS: '4,431 combat', realTotal: '~4,599 US + 185,000–209,000 Iraqi civilians', whoIsUncounted: 'Iraqi civilians (IBC count), contractors (3,793), allied forces (323), journalists (225+), aid workers (62+), interpreters (unknown hundreds)' },
  { war: 'Afghanistan (2001–2021)', officialUS: '2,461 combat', realTotal: '~2,461 US + 176,000+ total', whoIsUncounted: 'Afghan military/police (69,000+), contractors (4,000+), Afghan civilians (47,000+), Taliban/opposition (53,000+), allied forces (1,144), aid workers (444)' },
  { war: 'War on Terror (all theaters)', officialUS: '7,057', realTotal: '4,500,000+', whoIsUncounted: 'Pakistan (80,000+), Yemen (25,000+), Syria (500,000+), Somalia (unknown thousands), indirect deaths from displacement, destroyed infrastructure, disease' },
]

const contractorDeaths = [
  { category: 'US citizens', deaths: '1,800+', notes: 'Many were former military. Their families receive workers\' compensation, not military death benefits.' },
  { category: 'Third-country nationals', deaths: '4,500+', notes: 'From Uganda, Nepal, Philippines, India, and dozens of other countries. Often paid $300-500/month for dangerous work. Deaths rarely reported.' },
  { category: 'Local nationals (Iraqi/Afghan)', deaths: '1,700+', notes: 'The most undercounted group. Many worked as translators, drivers, and laborers. No systematic tracking.' },
  { category: 'Cause: Hostile action', deaths: '3,300+', notes: 'IEDs, mortar attacks, small arms fire — same threats as military personnel.' },
  { category: 'Cause: Accidents/illness', deaths: '4,700+', notes: 'Vehicle accidents, construction incidents, heart attacks, suicide. Working conditions were often unsafe.' },
  { category: 'Total contractor deaths', deaths: '8,000+', notes: 'Exceeds total US military deaths (7,057). Department of Labor tracking is incomplete — real number likely higher.' },
]

const interpreterBetrayal = [
  { phase: 'The Promise', detail: 'Beginning in 2003, the US military recruited thousands of Afghans and Iraqis as interpreters, cultural advisors, and intelligence sources. Many were promised Special Immigrant Visas (SIVs) to the United States in exchange for their service — service that put targets on their backs and their families\' backs.' },
  { phase: 'The Reality', detail: 'The SIV program was deliberately underfunded and overwhelmed with bureaucracy. Average processing time: 3–5 years. Many applicants were required to provide recommendation letters from US military officers who had rotated home, changed units, or been killed. The system was designed to fail.' },
  { phase: 'The Backlog', detail: 'By August 2021, approximately 18,000 Afghan SIV applicants were in the pipeline — plus their families (estimated 53,000 total people). Some had been waiting since 2014. Many had been threatened, shot at, or had family members killed while waiting for visas that never came.' },
  { phase: 'The Withdrawal', detail: 'When the US withdrew from Afghanistan in August 2021, the evacuation was chaotic. Thousands of SIV applicants could not reach Kabul airport. Many who did were turned away at checkpoints. The Taliban had seized employment records from abandoned US bases and began hunting interpreters.' },
  { phase: 'The Aftermath', detail: 'An estimated 78,000 Afghans who worked with US forces were left behind. No One Left Behind, a nonprofit founded by a former US military interpreter, estimates that hundreds of former interpreters have been murdered by the Taliban since August 2021. Their families face imprisonment, torture, and death.' },
  { phase: 'The Numbers', detail: 'Since the SIV program was created in 2009, approximately 20,000 principal applicants (plus ~74,000 family members) have been resettled in the US. But the backlog in 2024 remains at 10,000+ applications, and the program has been chronically underfunded every single year since its creation.' },
]

const civilianTollByConflict = [
  { conflict: 'Iraq War (2003–2021)', civilians: '185,000–209,000', method: 'Iraq Body Count (documented), Lancet studies suggest 400,000–600,000', notes: 'US forces directly responsible for est. 15,000 civilian deaths. Rest from sectarian violence, insurgent attacks, and infrastructure collapse caused by invasion.' },
  { conflict: 'Afghanistan (2001–2021)', civilians: '47,245+', method: 'UNAMA, Costs of War Project', notes: 'Includes 7,500+ killed by US/coalition airstrikes. Night raids killed hundreds of civilians. Drone strikes in rural areas rarely investigated.' },
  { conflict: 'Pakistan (2004–2021)', civilians: '24,000+', method: 'South Asia Terrorism Portal, BIJ', notes: 'US drone strikes killed est. 424–969 civilians. Rest from Pakistani military operations in tribal areas, triggered by US pressure.' },
  { conflict: 'Yemen (2015–present)', civilians: '21,000+', method: 'ACLED, Yemen Data Project', notes: 'Saudi-led coalition (armed and supported by US) responsible for majority of civilian airstrikes. US provided targeting intelligence, refueling, and weapons.' },
  { conflict: 'Syria (2014–present)', civilians: '12,000+', method: 'Airwars monitoring group', notes: 'US-led coalition airstrikes killed 8,000–13,000+ civilians in anti-ISIS campaign. Battle of Raqqa alone killed 1,600+ civilians.' },
  { conflict: 'Somalia (2007–present)', civilians: '500+', method: 'Airwars, Amnesty International', notes: 'US airstrikes and special operations raids. Trump-era loosening of ROE led to significant increase in civilian casualties.' },
  { conflict: 'Libya (2011)', civilians: '1,100+', method: 'HRC Commission of Inquiry', notes: 'NATO airstrikes killed civilians despite "zero civilian casualties" claims. Country collapsed into civil war that continues today.' },
]

const alliedForcesKilled = [
  { country: 'United Kingdom', deaths: 682, wars: 'Iraq, Afghanistan', notes: 'Largest US coalition partner. 457 killed in Afghanistan, 179 in Iraq.' },
  { country: 'Canada', deaths: 165, wars: 'Afghanistan', notes: 'Lost more troops per capita than most allies. Public opposition forced withdrawal.' },
  { country: 'France', deaths: 89, wars: 'Afghanistan', notes: 'Ambush at Uzbin (2008) killed 10 French soldiers — turned public opinion against war.' },
  { country: 'Germany', deaths: 62, wars: 'Afghanistan', notes: 'First German combat deaths since WWII caused political crisis.' },
  { country: 'Italy', deaths: 53, wars: 'Iraq, Afghanistan', notes: 'Nasiriyah bombing (2003) killed 19 Italians — largest military loss since WWII.' },
  { country: 'Poland', deaths: 44, wars: 'Iraq, Afghanistan', notes: 'Eager coalition partner. Received little in return for sacrifice.' },
  { country: 'Denmark', deaths: 43, wars: 'Iraq, Afghanistan', notes: 'Highest per-capita death rate of any coalition partner.' },
  { country: 'Australia', deaths: 41, wars: 'Iraq, Afghanistan', notes: 'War crimes investigation revealed unlawful killings by special forces.' },
  { country: 'Georgia', deaths: 32, wars: 'Iraq, Afghanistan', notes: 'Tiny country sent 2,000 troops — largest per-capita contribution after US, UK.' },
  { country: 'Romania', deaths: 27, wars: 'Iraq, Afghanistan', notes: 'Also hosted CIA black site. Denied it for years.' },
  { country: 'All coalition partners', deaths: 1500, wars: 'Iraq + Afghanistan', notes: 'Total allied military deaths. Many allies joined under political pressure from Washington.' },
]

const journalistsKilled = [
  { name: 'Daniel Pearl', outlet: 'Wall Street Journal', year: 2002, location: 'Pakistan', circumstance: 'Kidnapped and beheaded by al-Qaeda while investigating Richard Reid.' },
  { name: 'Tareq Ayyoub', outlet: 'Al Jazeera', year: 2003, location: 'Baghdad', circumstance: 'Killed when US forces bombed Al Jazeera\'s known Baghdad bureau — after receiving its coordinates.' },
  { name: 'José Couso', outlet: 'Telecinco (Spain)', year: 2003, location: 'Baghdad', circumstance: 'Killed when US tank fired on Palestine Hotel, known journalist headquarters. US claimed "self-defense."' },
  { name: 'Mazen Dana', outlet: 'Reuters', year: 2003, location: 'Baghdad', circumstance: 'Shot dead by US soldier while filming outside Abu Ghraib prison. Camera mistaken for RPG launcher.' },
  { name: 'Namir Noor-Eldeen & Saeed Chmagh', outlet: 'Reuters', year: 2007, location: 'Baghdad', circumstance: 'Killed in Apache helicopter strike. WikiLeaks video ("Collateral Murder") showed crew laughing during attack.' },
  { name: 'Total journalists killed (Iraq)', outlet: 'Various', year: 2003, location: 'Iraq (2003-2011)', circumstance: '225+ journalists and media workers killed. Iraq was the deadliest war for journalists in modern history.' },
]

const displacementData = [
  { region: 'Afghanistan', displaced: '5.9M', notes: '2.6M refugees (mostly in Pakistan/Iran) + 3.3M internally displaced. Many displaced multiple times.' },
  { region: 'Iraq', displaced: '9.2M', notes: '4.7M internally displaced at peak (2006-2008). 2.5M fled to Syria and Jordan. Many never returned.' },
  { region: 'Syria', displaced: '13.5M', notes: '6.8M refugees (Turkey, Lebanon, Jordan, Europe). 6.7M internally displaced. US intervention was one factor among many.' },
  { region: 'Pakistan', displaced: '3.7M', notes: 'Military operations in tribal areas (triggered by US pressure) displaced millions. Most in FATA/KP regions.' },
  { region: 'Yemen', displaced: '4.3M', notes: 'US-backed Saudi coalition bombing campaign. Worst humanitarian crisis in the world.' },
  { region: 'Somalia', displaced: '2.6M', notes: 'US airstrikes and support for Ethiopian intervention. Combined with famine and al-Shabaab violence.' },
  { region: 'Libya', displaced: '1.2M', notes: 'NATO intervention destroyed state. Country fragmented into warring factions. Became migrant trafficking hub.' },
  { region: 'Total', displaced: '38M+', notes: 'More people displaced than any conflict since WWII. Many are permanently stateless.' },
]

const indirectDeaths = [
  { cause: 'Destroyed health infrastructure', deaths: 'Hundreds of thousands', detail: 'Bombing of hospitals, clinics, and water treatment facilities. In Iraq, infant mortality doubled after the invasion. In Yemen, cholera outbreaks killed thousands.' },
  { cause: 'Malnutrition and famine', deaths: 'Hundreds of thousands', detail: 'War disrupts food production and distribution. Yemen faces the worst famine in a century. Afghan malnutrition rates among children exceed 50% in some provinces.' },
  { cause: 'Disease from destroyed infrastructure', deaths: 'Hundreds of thousands', detail: 'Contaminated water, lack of sanitation, no electricity for hospitals. Cholera, typhoid, and preventable diseases kill thousands each year in war zones.' },
  { cause: 'Economic collapse', deaths: 'Difficult to quantify', detail: 'War destroys economies. Iraqi GDP fell 77% in 2003. Afghan economy collapsed after US withdrawal. Economic devastation leads to poverty, malnutrition, and preventable death.' },
  { cause: 'Suicide and mental health', deaths: 'Tens of thousands', detail: 'PTSD, depression, and trauma in war zones. Iraqi suicide rates increased dramatically post-invasion. Afghan mental health crisis is largely untreated.' },
  { cause: 'Unexploded ordnance', deaths: 'Thousands ongoing', detail: 'Cluster bombs, landmines, and UXO continue to kill civilians years after fighting ends. Laos still kills/injures 50+ people per year from Vietnam-era bombs.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Forgotten Casualties: The Uncounted Dead of America\'s Wars',
  description: 'The official death toll of American wars captures only a fraction of the real cost. Contractors, allies, interpreters, journalists, and millions of civilians — the forgotten casualties that no memorial records.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2025-03-15',
  url: 'https://www.warcosts.org/analysis/forgotten-casualties',
}

export default function ForgottenCasualties() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumbs items={[
        
        { label: 'Analysis', href: '/analysis' },
        { label: 'Forgotten Casualties' },
      ]} />

      {/* Dark Hero Section */}
      <section className="bg-stone-900 text-white rounded-lg p-8 mb-8 -mx-4 md:mx-0">
        <div className="max-w-3xl">
          <span className="text-red-400 text-sm font-bold uppercase tracking-wider">Analysis</span>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-2 mb-4">
            Forgotten Casualties
          </h1>
          <p className="text-stone-300 text-xl mb-6">
            The official US death toll from the War on Terror is 7,057. The real number — including contractors, 
            allied forces, interpreters, journalists, aid workers, and civilians — is over 4.5 million. 
            The gap between the official count and reality is not an accident. It is a deliberate act of 
            erasure that makes war politically sustainable.
          </p>
          <p className="text-stone-400 text-base">
            This is an accounting of the people who don&apos;t appear on any memorial, whose names are not 
            read aloud on Veterans Day, whose deaths did not make the evening news — because counting them 
            would make the cost of war impossible to ignore.
          </p>
        </div>
      </section>

      <ShareButtons title="Forgotten Casualties: The Uncounted Dead of America's Wars" />

      {/* Key Statistics */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          By the Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {keyStats.map((item) => (
            <div key={item.label} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="text-3xl font-bold text-red-600 mb-1">{item.stat}</div>
              <p className="text-stone-700 text-sm mb-1">{item.label}</p>
              <p className="text-stone-400 text-xs">{item.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Official vs. Real */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Official Count vs. Reality: Every American War
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The &ldquo;official&rdquo; US death toll of any war counts only American military combat deaths — 
          and sometimes not even all of those. It excludes disease deaths, contractor deaths, allied deaths, 
          and the millions of civilian deaths that American wars cause. Here is what the real toll looks like:
        </p>

        <div className="space-y-4">
          {officialVsReal.map((w) => (
            <div key={w.war} className="bg-white border border-stone-200 rounded-lg p-5">
              <h3 className="font-bold text-stone-900 mb-2">{w.war}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-2">
                <div>
                  <span className="text-stone-500">Official US deaths:</span>{' '}
                  <span className="text-stone-700 font-bold">{w.officialUS}</span>
                </div>
                <div>
                  <span className="text-stone-500">Estimated total deaths:</span>{' '}
                  <span className="text-red-600 font-bold">{w.realTotal}</span>
                </div>
              </div>
              <p className="text-stone-600 text-sm"><span className="font-semibold">Who&apos;s uncounted:</span> {w.whoIsUncounted}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contractor Deaths */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Invisible Dead: 8,000+ Contractor Deaths
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          More private contractors have died in the post-9/11 wars than US military personnel. Yet their deaths 
          are not included in any official war casualty count. They receive no military honors. Their names 
          appear on no memorial. Many were not Americans — they were citizens of Uganda, Nepal, the Philippines, 
          and dozens of other countries, recruited to work in war zones for a fraction of what American 
          contractors were paid.
        </p>

        <div className="space-y-3">
          {contractorDeaths.map((item) => (
            <div key={item.category} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-semibold text-stone-900">{item.category}</h3>
                <span className="text-red-600 font-bold">{item.deaths}</span>
              </div>
              <p className="text-stone-500 text-sm">{item.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interpreters Betrayed */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Left Behind: The Betrayal of Afghan and Iraqi Interpreters
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          They were the most important people on every patrol — the interpreters who allowed American soldiers 
          to communicate, gather intelligence, and navigate a culture they didn&apos;t understand. They were 
          promised visas. They were promised safety. They were promised that America keeps its promises. 
          Then America left.
        </p>

        <div className="space-y-4">
          {interpreterBetrayal.map((item) => (
            <div key={item.phase} className="bg-white border border-stone-200 rounded-lg p-5">
              <h3 className="font-bold text-stone-900 text-lg mb-2">{item.phase}</h3>
              <p className="text-stone-700 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Civilian Toll */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Civilian Deaths by Conflict
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The US military does not systematically count civilian deaths. When pressed, officials cite 
          &ldquo;we don&apos;t do body counts&rdquo; — a policy established by General Tommy Franks in 2002. 
          The numbers below come from independent monitoring groups, investigative journalists, and 
          academic researchers who do the counting that the Pentagon refuses to do.
        </p>

        <div className="space-y-3">
          {civilianTollByConflict.map((item) => (
            <div key={item.conflict} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-bold text-stone-900">{item.conflict}</h3>
                <span className="text-red-600 font-bold">{item.civilians}</span>
              </div>
              <p className="text-stone-500 text-xs mb-1">Source: {item.method}</p>
              <p className="text-stone-600 text-sm">{item.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Allied Forces */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Allied Forces: The Coalition Dead
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The &ldquo;Coalition of the Willing&rdquo; was largely a coalition of the pressured. Many allies 
          joined Iraq and Afghanistan under intense diplomatic pressure from Washington, with promises of 
          aid, trade deals, and political support. Over 1,500 allied service members died in wars that 
          most of their citizens opposed.
        </p>

        <div className="space-y-2">
          {alliedForcesKilled.map((ally) => (
            <div key={ally.country} className="flex items-center gap-4 bg-white border border-stone-200 rounded-lg p-3 text-sm">
              <span className="font-bold text-stone-900 w-36">{ally.country}</span>
              <span className="text-red-600 font-bold w-12 text-right">{ally.deaths.toLocaleString()}</span>
              <span className="text-stone-500 w-32">{ally.wars}</span>
              <p className="text-stone-600 flex-1 hidden md:block">{ally.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journalists */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Killing the Messenger: 225+ Journalists Dead in Iraq Alone
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          Iraq became the deadliest conflict for journalists in modern history. Over 225 journalists and 
          media workers were killed between 2003 and 2011. Several were killed by US forces in incidents 
          that were initially covered up or blamed on &ldquo;fog of war.&rdquo;
        </p>

        <div className="space-y-3">
          {journalistsKilled.map((j) => (
            <div key={j.name} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-semibold text-stone-900">{j.name}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-stone-500">{j.outlet}</span>
                  <span className="text-stone-400">|</span>
                  <span className="text-stone-500">{j.year}</span>
                  <span className="text-stone-400">|</span>
                  <span className="text-stone-500">{j.location}</span>
                </div>
              </div>
              <p className="text-stone-600 text-sm">{j.circumstance}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Displacement */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          38 Million Displaced: The Largest Refugee Crisis Since WWII
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          US post-9/11 military operations have displaced at least 38 million people — more than any 
          conflict since World War II. Many are permanently stateless, living in camps or informal 
          settlements with no prospect of return. The displacement crisis has destabilized entire regions 
          and created the conditions for future conflicts.
        </p>

        <div className="space-y-3">
          {displacementData.map((item) => (
            <div key={item.region} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-bold text-stone-900">{item.region}</h3>
                <span className="text-red-600 font-bold">{item.displaced}</span>
              </div>
              <p className="text-stone-500 text-sm">{item.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Indirect Deaths */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Invisible Toll: Indirect Deaths from War
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          For every person killed by a bullet or bomb, several more die from the secondary effects of war: 
          destroyed hospitals, contaminated water, collapsed economies, and untreated disease. The Brown 
          University Costs of War Project estimates that indirect deaths in post-9/11 war zones total at 
          least 3.6–3.7 million — in addition to the 387,000+ direct war deaths.
        </p>

        <div className="space-y-4">
          {indirectDeaths.map((item) => (
            <div key={item.cause} className="bg-white border border-stone-200 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-bold text-stone-900">{item.cause}</h3>
                <span className="text-red-600 font-bold">{item.deaths}</span>
              </div>
              <p className="text-stone-700 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why We Don't Count */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Why America Doesn&apos;t Count the Dead
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The refusal to count civilian casualties is not an oversight — it is policy. General Tommy Franks 
          said it explicitly in 2002: &ldquo;We don&apos;t do body counts.&rdquo; This policy serves a clear 
          purpose: what you don&apos;t count, you don&apos;t have to explain. What you don&apos;t explain, 
          you don&apos;t have to justify. What you don&apos;t justify, you can continue doing.
        </p>
        <p className="text-stone-700 text-lg mb-6">
          The Pentagon does not track contractor deaths in any systematic way. It does not count civilian 
          casualties unless forced to by Congress or public pressure. It does not acknowledge indirect deaths 
          at all. The result is an official casualty count that captures perhaps 1% of the real toll — a 
          number so small that wars can continue for decades without triggering the kind of public outrage 
          that might end them.
        </p>
        <p className="text-stone-700 text-lg">
          This accounting failure is the foundation of forever war. If the American public knew that 4.5 
          million people had died in the post-9/11 wars — not 7,000 — the politics of war would be 
          fundamentally different. The gap between 7,000 and 4,500,000 is not a rounding error. It is 
          the distance between a war that continues and a war that stops.
        </p>
      </section>

      {/* The Libertarian Case */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">
            The Moral Obligation to Count
          </h2>
          <p className="text-stone-300 mb-4">
            A government that kills people in your name has an obligation to tell you how many people it 
            killed. This is the most basic form of accountability in a democracy: the right of the people 
            to know what their government does in their name, with their money, and with their moral authority.
          </p>
          <p className="text-stone-300 mb-4">
            The Declaration of Independence lists among the king&apos;s crimes that he &ldquo;has plundered 
            our seas, ravaged our coasts, burnt our towns, and destroyed the lives of our people.&rdquo; 
            The Founders understood that violence committed by the state must be visible to the people — 
            because invisible violence is unlimited violence.
          </p>
          <p className="text-stone-300 mb-4">
            Every contractor death is a person whose family grieves without recognition. Every interpreter 
            left behind is a broken promise that undermines every future alliance. Every uncounted civilian 
            is a human being whose death was treated as too inconvenient to acknowledge.
          </p>
          <p className="text-stone-300">
            The true cost of war is not $8 trillion. It is 4.5 million lives. Until Americans are forced 
            to confront that number — to see every death, not just the ones that fit on a bumper sticker — 
            the wars will continue. Counting the dead is not just an accounting exercise. It is a moral 
            imperative. And the refusal to count is not ignorance. It is complicity.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>Brown University, Watson Institute — Costs of War Project, &ldquo;Human Cost of Post-9/11 Wars&rdquo; (2023)</li>
          <li>Iraq Body Count (IBC), Documented Civilian Deaths from Violence</li>
          <li>United Nations Assistance Mission in Afghanistan (UNAMA), Annual Reports on Civilian Casualties</li>
          <li>Department of Labor, Office of Workers&apos; Compensation Programs — Defense Base Act Deaths and Injuries</li>
          <li>No One Left Behind (nonprofit), Afghan SIV Program Data</li>
          <li>Airwars, Civilian Casualty Monitoring in US-Led Coalition Operations</li>
          <li>Committee to Protect Journalists, Journalist Casualty Database</li>
          <li>UNHCR, Global Displacement Trends Reports</li>
          <li>Neta Crawford, Brown University — &ldquo;Blood and Treasure: Post-9/11 War Deaths and Displacement&rdquo;</li>
          <li>Congressional Research Service, &ldquo;American War and Military Operations Casualties: Lists and Statistics&rdquo;</li>
          <li>Lancet, &ldquo;Mortality Before and After the 2003 Invasion of Iraq&rdquo; (2006)</li>
          <li>Special Inspector General for Afghanistan Reconstruction (SIGAR), Reports on Afghan Casualties</li>
        </ul>
      </section>

      <RelatedArticles articles={[
        { slug: 'human-cost', title: 'The Human Cost of War', desc: '7,057 US dead. 53,000 wounded. 30,000 veteran suicides.' },
        { slug: 'drone-wars', title: 'Drone Wars', desc: '14,000+ drone strikes. Thousands of civilian deaths.' },
        { slug: 'military-suicide-epidemic', title: 'The Military Suicide Epidemic', desc: '30,000+ veteran suicides since 9/11.' },
        { slug: 'refugee-crisis', title: 'The Refugee Crisis', desc: '38 million displaced by post-9/11 wars.' },
      ]} />

      <BackToTop />
    </div>
  )
}
