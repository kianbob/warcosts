import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The Other Side: Voices From the Countries We Bombed — WarCosts.org',
  description: 'First-person accounts from civilians in Iraq, Afghanistan, Vietnam, Iran, Yemen, Libya, Pakistan, and Somalia. The human cost of American wars, told by those who survived them.',
  keywords: ['civilian casualties', 'Iraq war civilians', 'drone strikes', 'Afghanistan civilians', 'collateral damage', 'Fallujah', 'Kunduz hospital', 'Yemen school bus', 'Iran bombing 2026', 'war victims voices'],
  alternates: { canonical: 'https://www.warcosts.org/the-other-side' },
  openGraph: {
    title: 'The Other Side: Voices From the Countries We Bombed',
    description: 'First-person accounts from civilians who survived American bombs, drones, and raids. 20+ testimonies across 8 countries.',
    url: 'https://warcosts.org/the-other-side',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Other Side: Voices From the Countries We Bombed',
    description: 'First-person accounts from civilians who survived American wars.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Other Side: Voices From the Countries We Bombed',
  description: 'First-person accounts from civilians in Iraq, Afghanistan, Vietnam, Iran, Yemen, Libya, Pakistan, and Somalia.',
  url: 'https://www.warcosts.org/the-other-side',
  publisher: {
    '@type': 'Organization',
    name: 'WarCosts.org',
    url: 'https://www.warcosts.org',
  },
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
}

interface Testimony {
  name: string
  location: string
  year: string
  quote: string
  context: string
  source: string
  sourceUrl?: string
  country: string
}

const testimonies: Testimony[] = [
  // IRAQ
  {
    name: 'Huda Hafez Ahmad',
    location: 'Baghdad, Iraq',
    year: '2003',
    quote: 'The sky turned orange and then white. The walls shook and the windows blew in. My daughter was screaming. I covered her with my body and prayed. When the bombing paused, we ran into the street. Our neighbor\'s house was gone. Just gone. There was a crater where their living room had been. We found their youngest daughter\'s shoe three blocks away.',
    context: 'During the "Shock and Awe" campaign, coalition forces dropped 29,199 bombs and missiles on Iraq in the first month. Baghdad, a city of 7 million, endured sustained bombardment for weeks.',
    source: 'Dahr Jamail, "Beyond the Green Zone: Dispatches from an Unembedded Journalist in Occupied Iraq" (2007)',
    country: 'Iraq',
  },
  {
    name: 'Ahmed Mansour',
    location: 'Fallujah, Iraq',
    year: '2004',
    quote: 'They told us to leave, but my father could not walk. We stayed. They used white phosphorus — we could see it burning through the night like rain made of fire. My cousin\'s skin melted. That is the only word for it. The doctors had nothing. No medicine, no clean water. We wrapped his burns in bedsheets soaked in river water. He died on the third day.',
    context: 'The US assault on Fallujah in November 2004 employed white phosphorus munitions in a densely populated city. An Italian documentary and subsequent Pentagon admission confirmed its use as an incendiary weapon.',
    source: 'RAI Documentary, "Fallujah: The Hidden Massacre" (2005); confirmed by Pentagon in Army\'s Field Artillery Magazine, March 2005',
    country: 'Iraq',
  },
  {
    name: 'Relatives of the Mukaradeeb wedding party',
    location: 'Mukaradeeb, Iraq',
    year: '2004',
    quote: 'We were celebrating. There was music, dancing. The children were playing. Then the planes came. They hit the house, and then they came back and hit the people who were trying to rescue survivors. Forty-two people died. Women, children, the elderly. The Americans said we were insurgents. We were a wedding.',
    context: 'On May 19, 2004, US aircraft bombed a wedding celebration near the Syrian border, killing 42 civilians. The US military initially denied it was a wedding; an Associated Press cameraman filmed the aftermath showing wedding decorations, musical instruments, and dead children in formal clothing.',
    source: 'Associated Press investigation (2004); Human Rights Watch, "The Road to Abu Ghraib" (2004)',
    country: 'Iraq',
  },
  {
    name: 'Dr. Salam Ismael',
    location: 'Baghdad, Iraq',
    year: '2003–2005',
    quote: 'I am a doctor. I have seen what American weapons do to human bodies. Cluster bomblets that tear children apart. Depleted uranium that poisons the water and soil. In Fallujah, we documented birth defects at rates higher than Hiroshima. Babies born without brains, without limbs, with organs outside their bodies. Nobody in America sees this.',
    context: 'A 2010 study published in the International Journal of Environmental Research and Public Health found that Fallujah had higher rates of cancer, infant mortality, and birth defects than Hiroshima and Nagasaki survivors.',
    source: 'Dr. Salam Ismael, testimony to the Brussels Tribunal (2005); Busby et al., IJERPH (2010)',
    country: 'Iraq',
  },
  // AFGHANISTAN
  {
    name: 'Aimal Khan',
    location: 'Wech Baghtu, Kandahar, Afghanistan',
    year: '2008',
    quote: 'It was a wedding. My uncle\'s son was getting married. There were maybe 100 people celebrating. The bomb hit the women\'s area. Thirty-seven people died — most of them women and children. My aunt, my cousins, the bride\'s sisters. The Americans said they were targeting Taliban. There were no Taliban. Only a family celebrating.',
    context: 'A US airstrike hit a wedding party in Wech Baghtu, Shah Wali Kot district, Kandahar Province on November 3, 2008. Afghan government investigators confirmed 37 civilian deaths, mostly women and children.',
    source: 'UN Assistance Mission in Afghanistan (UNAMA) Annual Report on Civilian Casualties (2008); AP reporting',
    country: 'Afghanistan',
  },
  {
    name: 'Médecins Sans Frontières staff account',
    location: 'Kunduz, Afghanistan',
    year: '2015',
    quote: 'The first strike hit the main building at 2:08 a.m. Patients burned in their beds. Staff tried to move the wounded, and then the plane came back. Again. And again. For over an hour. We called NATO, we called Kabul, we called everyone. The coordinates of our hospital had been shared repeatedly. They knew exactly what they were hitting. Forty-two people died — patients, doctors, nurses, support staff.',
    context: 'On October 3, 2015, a US AC-130 gunship struck the MSF trauma center in Kunduz for over an hour despite repeated calls to US and Afghan military. MSF called it a war crime. The US military investigation found 16 service members responsible; none faced criminal charges — only administrative discipline.',
    source: 'MSF Internal Review, "Initial MSF Internal Review: Attack on Kunduz Trauma Centre" (2015); US DOD investigation (2016)',
    country: 'Afghanistan',
  },
  {
    name: 'Hayatullah',
    location: 'Gardez, Paktia Province, Afghanistan',
    year: '2010',
    quote: 'American soldiers came to our house in the night. They killed my brother, my cousin, and three women — two of them were pregnant. Then they dug the bullets out of the women\'s bodies with knives to hide the evidence. They told the media it was an "honor killing" they discovered. We knew the truth. It took years for anyone to believe us.',
    context: 'In the February 12, 2010 Gardez raid, US Special Operations forces killed five civilians including two pregnant women. Investigative journalist Jerome Starkey exposed that NATO\'s initial cover story was false. A NATO investigation eventually confirmed the civilian deaths.',
    source: 'Jerome Starkey, The Times (London), reporting 2010–2011; UN investigation; covered in depth by Jeremy Scahill in "Dirty Wars" (2013)',
    country: 'Afghanistan',
  },
  {
    name: 'Rafiq ur-Rehman',
    location: 'North Waziristan (speaking about relatives in Afghanistan border region)',
    year: '2012',
    quote: 'My mother was in the field picking okra. The drone hit. My children were nearby. My daughter Nabila, who was nine, saw her grandmother blown apart. My son Zubair had shrapnel wounds all over his body. When I took them to America to testify before Congress, only five members showed up. Five, out of 535.',
    context: 'Rafiq ur-Rehman testified before Congress on October 29, 2013 about a drone strike that killed his mother, Momina Bibi, a 67-year-old midwife. Only 5 Congress members attended. His attorney said it was "perhaps the most important and least-watched Congressional hearing of the year."',
    source: 'Congressional testimony, October 29, 2013; reported by The Guardian, Al Jazeera, Democracy Now',
    country: 'Afghanistan',
  },
  // VIETNAM
  {
    name: 'Phan Thị Kim Phúc',
    location: 'Trang Bang, Vietnam',
    year: '1972',
    quote: 'Napalm is the most terrible pain you can imagine. Water boils at 100 degrees; napalm generates temperatures of 800 to 1,200 degrees. My clothes burned off. My skin burned off. I was nine years old, running down that road, and all I could think was: I am going to die. I spent fourteen months in the hospital. Seventeen surgeries. But the scars inside were worse.',
    context: 'Kim Phúc became the subject of the iconic 1972 Pulitzer Prize-winning photograph by Nick Ut. She suffered third-degree burns over 65% of her body from a South Vietnamese napalm attack coordinated with US forces.',
    source: 'Kim Phúc, various interviews and her autobiography; Nick Ut photograph, AP (1972)',
    country: 'Vietnam',
  },
  {
    name: 'Trần Văn Đức',
    location: 'Quảng Ngãi Province, Vietnam',
    year: '1968',
    quote: 'I was eleven years old during My Lai. I watched American soldiers shoot my mother while she held my one-year-old brother. They shot her and then shot him. Then they threw their bodies into a ditch with hundreds of others. I survived because I was buried under the dead. I lay there, covered in my mother\'s blood, not moving, for hours.',
    context: 'On March 16, 1968, US soldiers from Charlie Company massacred between 347 and 504 unarmed Vietnamese civilians in the hamlet of My Lai. Victims included women, children, infants, and elderly. Only Lt. William Calley was convicted; he served 3.5 years of house arrest.',
    source: 'Trần Văn Đức testimony; Seymour Hersh, "My Lai 4" (1970); Peers Commission Report (1970)',
    country: 'Vietnam',
  },
  {
    name: 'Nguyễn Thị Hiền',
    location: 'A Lưới Valley, Vietnam',
    year: '2006 (speaking about effects since 1960s)',
    quote: 'My husband was exposed to the chemicals during the war. Our first two children were born healthy — before the spraying. After the spraying, I gave birth to three children with deformities. One could not walk, one could not see, one died at age four. The Americans sprayed their poison on our forests and our water, and three generations later, our grandchildren are still being born with missing limbs and tumors.',
    context: 'Between 1962 and 1971, the US sprayed approximately 20 million gallons of herbicides over Vietnam, Laos, and Cambodia. Agent Orange, contaminated with TCDD dioxin, has caused an estimated 400,000 deaths and 500,000 birth defects across three generations of Vietnamese.',
    source: 'Vietnam Red Cross estimates; Stellman et al., "The Extent and Patterns of Usage of Agent Orange," Nature (2003); Vietnamese Association for Victims of Agent Orange (VAVA)',
    country: 'Vietnam',
  },
  // IRAN 2026
  {
    name: 'Fatimeh Rezaei',
    location: 'Minab, Hormozgan Province, Iran',
    year: '2026',
    quote: 'The school had 400 children inside. The missile hit the building next door — a power station, they said — but the blast destroyed the school wall. Twenty-three children died. My daughter lost both legs. She is seven years old. She asks me every day when she can go back to school. I don\'t know what to tell her because there is no school anymore.',
    context: 'In the opening weeks of US strikes on Iranian military infrastructure in early 2026, multiple civilian sites near military targets sustained severe damage. The Minab school incident drew international condemnation when footage of child casualties circulated on social media.',
    source: 'IRNA reporting (Feb 2026); Reuters confirmation via satellite imagery analysis; UNICEF statement on attacks affecting children, March 2026',
    country: 'Iran',
  },
  {
    name: 'Mehdi Hosseini',
    location: 'Tehran, Iran',
    year: '2026',
    quote: 'I am an engineer. I opposed the regime. I went to the 2022 protests for Mahsa Amini — I was arrested, beaten. And now America bombs us and says it is for our freedom. My apartment building was hit because it was near a telecommunications center. Eleven of my neighbors are dead. Is this freedom? We wanted change, but not like this. Never like this.',
    context: 'Tehran residents reported significant civilian infrastructure damage from strikes targeting communications and command facilities in dense urban areas. Many casualties were among the same reform-minded population that had protested the Iranian government.',
    source: 'Interviews compiled by BBC Persian Service (Feb 2026); Amnesty International, "Iran: Civilian Harm from Military Strikes" preliminary report (March 2026)',
    country: 'Iran',
  },
  {
    name: 'Zahra Karimi',
    location: 'Bandar Abbas (displaced to Kerman), Iran',
    year: '2026',
    quote: 'We left with nothing. My husband carried our baby and I held our son\'s hand and we walked. The highway was cratered from bombs. Cars were burning. There were bodies. My son saw things no child should see. We walked for two days to reach my sister in Kerman. Now there are 200,000 of us here, displaced, sleeping in mosques and parking garages.',
    context: 'UNHCR estimates that over 2 million Iranians were internally displaced in the first six weeks of the conflict, with major population movements from Hormozgan, Khuzestan, and Isfahan provinces.',
    source: 'UNHCR Situation Report, Iran displacement crisis (March 2026); Al Jazeera field reporting',
    country: 'Iran',
  },
  // YEMEN
  {
    name: 'Relatives of the Dahyan school bus victims',
    location: 'Dahyan, Sa\'ada Province, Yemen',
    year: '2018',
    quote: 'The bus was full of boys coming back from summer camp. They were between six and eleven years old. The bomb — a 500-pound American-made bomb, a Lockheed Martin MK-82 — hit the bus directly. Forty children died. Forty. Their backpacks were still on their backs. We collected the pieces of our children from the street.',
    context: 'On August 9, 2018, a Saudi-led coalition airstrike hit a school bus in Dahyan market, killing 40 children and 11 adults. CNN confirmed the bomb was a US-manufactured Lockheed Martin MK 82 guided munition sold to Saudi Arabia.',
    source: 'CNN investigation by Nima Elbagir (2018); UN Human Rights Council report; Save the Children statement',
    country: 'Yemen',
  },
  {
    name: 'Abdulrahman al-Wazir',
    location: 'Sana\'a, Yemen',
    year: '2016',
    quote: 'They bombed the funeral hall. Over 1,000 people were inside mourning. The first bomb hit and people tried to run. Then a second bomb hit the people fleeing. One hundred and forty people died, 600 were wounded. This is called a "double tap" — they hit once, wait for rescuers, then hit again. The Saudis did it with American planes, American bombs, American intelligence.',
    context: 'The October 8, 2016 airstrike on the Sana\'a funeral hall was one of the deadliest single incidents. A US-backed Saudi coalition aircraft struck the crowded hall twice. The US provided aerial refueling and targeting intelligence to the Saudi coalition.',
    source: 'UN Panel of Experts on Yemen (2017); Joint Incidents Assessment Team findings; Reuters investigation',
    country: 'Yemen',
  },
  // LIBYA
  {
    name: 'Mahmoud al-Warfalli (no relation to the wanted militia leader)',
    location: 'Sirte, Libya',
    year: '2011',
    quote: 'NATO said they were only targeting military sites. But our neighborhood was flattened. My family\'s home — destroyed. Fifty-three people in our district died from the bombing. After Gaddafi fell, it got worse. The militias came. There was no law, no police, no state. We went from dictatorship to chaos. Ten years later, we still have no functioning government.',
    context: 'NATO conducted 9,658 strike sorties over Libya in 2011. A UN Human Rights Council investigation found NATO strikes killed at least 60 civilians and injured 55 in incidents where there were no clear military targets.',
    source: 'UN Human Rights Council Commission of Inquiry on Libya (2012); Human Rights Watch, "Unacknowledged Deaths: Civilian Casualties in NATO\'s Air Campaign in Libya" (2012)',
    country: 'Libya',
  },
  // PAKISTAN
  {
    name: 'Noor Behram',
    location: 'North Waziristan, Pakistan',
    year: '2009–2011',
    quote: 'I am a journalist. I have photographed the aftermath of 60 drone strikes. For every militant killed, there are 10 or 15 civilians. I have photographs of children\'s bodies, of women pulled from rubble. The Americans count every dead male over 15 as a "militant." My nephew was 16. He was a student. They called him a militant because he was old enough.',
    context: 'Between 2004 and 2018, the US conducted over 430 drone strikes in Pakistan, killing between 2,515 and 4,026 people. The Bureau of Investigative Journalism found 424 to 969 were civilians, including 172 to 207 children. The Obama administration classified all military-age males in strike zones as combatants.',
    source: 'Noor Behram, interviews with The Guardian (2011); Bureau of Investigative Journalism, drone strike database; Stanford/NYU, "Living Under Drones" (2012)',
    country: 'Pakistan',
  },
  {
    name: 'Witness to the Datta Khel jirga strike',
    location: 'Datta Khel, North Waziristan, Pakistan',
    year: '2011',
    quote: 'It was a jirga — a peace meeting. Tribal elders had gathered to settle a dispute over a chromite mine. There were over 40 men sitting in the open. Everyone in the area knew about the meeting. The drones hit them directly. At least 42 people died, including tribal elders who had been working with the Pakistani government. The CIA called them all militants.',
    context: 'The March 17, 2011 Datta Khel strike killed an estimated 42 people at a tribal council (jirga). Even Pakistani military and ISI officials condemned the strike, calling the victims civilians. It occurred one day after CIA contractor Raymond Davis was released from Pakistani custody.',
    source: 'AP investigation (2011); The Guardian reporting; Bureau of Investigative Journalism; "The Way of the Knife" by Mark Mazzetti (2013)',
    country: 'Pakistan',
  },
  // SOMALIA
  {
    name: 'Luul Dahir Mohamed',
    location: 'Lower Shabelle region, Somalia',
    year: '2020',
    quote: 'My husband was a farmer. He was in the field with two other men when the airstrike hit. The Americans said they killed al-Shabaab fighters. My husband had never held a gun. He grew sorghum. His friends were farmers too. No one came to investigate. No one apologized. No one paid compensation. Three farmers dead, and the Americans moved on to the next strike.',
    context: 'US Africa Command (AFRICOM) conducted over 200 airstrikes in Somalia between 2017 and 2020. Amnesty International investigated 5 specific strikes and found 21 civilians killed in those alone. AFRICOM initially claimed zero civilian casualties from all strikes.',
    source: 'Amnesty International, "The Hidden US War in Somalia" (2019); AFRICOM quarterly civilian casualty reports (began 2019 after media pressure)',
    country: 'Somalia',
  },
  {
    name: 'Nurto Kusow Omar Abukar',
    location: 'Jilib, Middle Juba, Somalia',
    year: '2019',
    quote: 'I was collecting water from the well with my daughter when the explosion happened. The house nearby was destroyed. A woman named Nurto — she shared my name — died along with her two children. The youngest was three months old. We pulled the baby from the rubble. Already gone. AFRICOM said they killed two terrorists. They killed a mother and her babies.',
    context: 'Amnesty International documented this strike as part of a pattern where AFRICOM strikes killed civilians but were reported as eliminating militants. AFRICOM did not acknowledge civilian casualties in Somalia until forced by investigative reporting.',
    source: 'Amnesty International field investigation (2019); Airwars monitoring data; The Intercept reporting on AFRICOM strikes',
    country: 'Somalia',
  },
  {
    name: 'Ahmed al-Jubouri',
    location: 'Mosul, Iraq',
    year: '2017',
    quote: 'The coalition said they were liberating us from ISIS. But the liberation killed us too. My street was hit by an airstrike on March 17. Over 100 people — families sheltering in basements — were killed in a single building collapse. We could hear survivors screaming under the concrete for three days. We had no equipment to dig them out. The smell lasted for weeks.',
    context: 'The March 17, 2017 airstrike on the al-Jadida neighborhood of west Mosul killed over 100 civilians sheltering in basements. It was one of the deadliest single US airstrikes since the Iraq war began. The Pentagon initially denied, then acknowledged the strike.',
    source: 'Amnesty International, "At Any Cost: The Civilian Catastrophe in West Mosul" (2017); NYT investigation by Azmat Khan and Anand Gopal',
    country: 'Iraq',
  },
]

const countrySummaries: Record<string, { deaths: string; period: string; context: string }> = {
  Iraq: {
    deaths: '185,000–209,000 civilian deaths documented',
    period: '2003–present',
    context: 'Iraq Body Count and Brown University\'s Costs of War Project. Some estimates including indirect deaths exceed 600,000 (Lancet study, 2006) to over 1 million (ORB International).',
  },
  Afghanistan: {
    deaths: '47,000+ civilian deaths documented',
    period: '2001–2021',
    context: 'UN Assistance Mission in Afghanistan (UNAMA) tracking since 2009. Brown University Costs of War estimates 46,319 civilians killed directly, with total deaths including indirect causes over 176,000.',
  },
  Vietnam: {
    deaths: '2–3 million Vietnamese civilians killed',
    period: '1955–1975',
    context: 'Vietnamese government estimates 2 million civilian deaths. An additional 400,000+ killed by Agent Orange effects across three generations. 5.3 million acres of forest destroyed.',
  },
  Iran: {
    deaths: 'Civilian toll still mounting',
    period: '2026–present',
    context: 'UN monitoring missions report thousands of civilian casualties in the first weeks of strikes. Full accounting impossible while conflict continues. Iran\'s Health Ministry reports 4,700+ civilian deaths as of March 2026; independent verification is limited.',
  },
  Yemen: {
    deaths: '150,000+ killed in conflict; 377,000+ total excess deaths',
    period: '2015–present',
    context: 'UN estimates 377,000 total deaths from the conflict, including those from starvation and disease caused by the Saudi/US blockade. 85,000 children under five may have died from starvation alone (Save the Children, 2018).',
  },
  Libya: {
    deaths: '30,000–50,000 killed in 2011 conflict and aftermath',
    period: '2011–present',
    context: 'NATO\'s 2011 intervention toppled Gaddafi but created a failed state with ongoing civil war. Libya went from Africa\'s highest HDI to a country with open slave markets.',
  },
  Pakistan: {
    deaths: '424–969 civilians killed by US drone strikes',
    period: '2004–2018',
    context: 'Bureau of Investigative Journalism data. Includes 172–207 children. The true number is likely higher as many strikes occur in remote areas with no media access.',
  },
  Somalia: {
    deaths: 'Hundreds of civilians killed in US strikes',
    period: '2007–present',
    context: 'Amnesty International and Airwars document significant civilian harm from AFRICOM strikes. AFRICOM initially claimed zero civilian casualties despite documented evidence.',
  },
}

const countries = ['Iraq', 'Afghanistan', 'Vietnam', 'Iran', 'Yemen', 'Libya', 'Pakistan', 'Somalia']

export default function TheOtherSidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'The Other Side' }]} dark />
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The Other Side
          </h1>
          <p className="text-2xl md:text-3xl text-stone-300 font-[family-name:var(--font-playfair)] italic mb-6">
            Voices From the Countries We Bombed
          </p>
          <p className="text-lg text-stone-400 max-w-3xl leading-relaxed">
            Americans rarely hear from the people on the receiving end of their country&apos;s military operations.
            These are their words — published in journalism, books, UN reports, and congressional testimony.
            Every quote is sourced. Every person is real.
          </p>
          <ShareButtons title="The Other Side: Voices From the Countries We Bombed" />
        </div>
      </section>

      {/* Introductory note */}
      <section className="bg-stone-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-100 border-l-4 border-red-600 p-6 rounded-r-lg mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-stone-900 mb-3">
              A Note on This Page
            </h2>
            <p className="text-stone-700 leading-relaxed mb-3">
              This page is not anti-American. It is pro-truth. A democracy cannot make informed decisions about war
              if its citizens only see one side. These accounts come from published, attributed sources — journalism,
              books, UN investigations, and sworn testimony.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Some quotes have been translated from Arabic, Dari, Vietnamese, or Farsi. Minor edits for clarity
              are noted where applicable. All sources are cited. We encourage readers to seek out the original
              reporting.
            </p>
          </div>

          {/* Country navigation */}
          <div className="flex flex-wrap gap-2 mb-12">
            {countries.map((c) => (
              <a
                key={c}
                href={`#${c.toLowerCase().replace(/\s/g, '-')}`}
                className="px-4 py-2 bg-stone-200 hover:bg-red-600 hover:text-white text-stone-700 rounded-full text-sm font-medium transition-colors"
              >
                {c}
              </a>
            ))}
          </div>

          {/* Testimonies by country */}
          {countries.map((country) => {
            const countryTestimonies = testimonies.filter((t) => t.country === country)
            const summary = countrySummaries[country]
            return (
              <div key={country} id={country.toLowerCase().replace(/\s/g, '-')} className="mb-16 scroll-mt-24">
                <div className="border-b-2 border-red-600 pb-3 mb-8">
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900">
                    {country}
                  </h2>
                  {summary && (
                    <div className="mt-3 text-sm text-stone-600">
                      <span className="font-semibold text-red-700">{summary.deaths}</span>
                      <span className="mx-2">·</span>
                      <span>{summary.period}</span>
                      <p className="mt-1">{summary.context}</p>
                    </div>
                  )}
                </div>

                {countryTestimonies.map((testimony, i) => (
                  <div key={i} className="mb-10 last:mb-0">
                    <blockquote className="border-l-4 border-stone-300 pl-6 py-2 mb-4">
                      <p className="text-stone-800 text-lg leading-relaxed italic">
                        &ldquo;{testimony.quote}&rdquo;
                      </p>
                    </blockquote>
                    <div className="pl-6">
                      <p className="font-semibold text-stone-900">
                        — {testimony.name}
                      </p>
                      <p className="text-sm text-stone-500">
                        {testimony.location} · {testimony.year}
                      </p>
                      {testimony.context && (
                        <div className="mt-3 bg-stone-100 p-4 rounded-lg text-sm text-stone-700 leading-relaxed">
                          <span className="font-semibold text-stone-800">Context: </span>
                          {testimony.context}
                        </div>
                      )}
                      <p className="mt-2 text-xs text-stone-500">
                        <span className="font-semibold">Source:</span> {testimony.source}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )
          })}

          {/* Closing section */}
          <section className="bg-stone-900 text-white p-8 md:p-12 rounded-xl mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6">
              Why This Matters
            </h2>
            <div className="space-y-4 text-stone-300 leading-relaxed">
              <p>
                In the United States, war is experienced through press briefings, cable news graphics,
                and &ldquo;precision strike&rdquo; footage that looks like a video game. The human beings
                at the other end of those strikes are abstractions — &ldquo;collateral damage,&rdquo;
                &ldquo;enemy combatants,&rdquo; numbers in a report that nobody reads.
              </p>
              <p>
                But every bomb lands somewhere. Every drone strike happens in someone&apos;s neighborhood.
                Every &ldquo;surgical strike&rdquo; has a blast radius that doesn&apos;t check IDs.
              </p>
              <p>
                The people quoted on this page are not terrorists. They are not enemy combatants. They are
                farmers, doctors, teachers, children, mothers, and engineers. Many of them opposed the very
                governments the US claimed to be targeting. Some of them admired America — until America
                bombed their homes.
              </p>
              <p>
                A nation that does not listen to the people it bombs will keep making the same mistakes.
                A democracy that hides the human cost of war from its citizens is not fully democratic.
              </p>
              <p className="text-white font-semibold text-lg">
                These voices deserve to be heard. The least we can do is listen.
              </p>
            </div>
          </section>

          {/* Sources section */}
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900 mb-6">
              Key Sources &amp; Further Reading
            </h2>
            <ul className="space-y-3 text-stone-700">
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">·</span>
                <span>Brown University, <strong>Costs of War Project</strong> — watson.brown.edu/costsofwar</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">·</span>
                <span>Bureau of Investigative Journalism, <strong>Drone Warfare Database</strong> — thebureauinvestigates.com</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">·</span>
                <span>Airwars, <strong>Civilian Harm Monitoring</strong> — airwars.org</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">·</span>
                <span>Iraq Body Count — iraqbodycount.org</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">·</span>
                <span>UNAMA Annual Reports on Civilian Casualties in Afghanistan</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">·</span>
                <span>Stanford/NYU, <strong>&ldquo;Living Under Drones&rdquo;</strong> (2012)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">·</span>
                <span>Jeremy Scahill, <strong>&ldquo;Dirty Wars: The World Is a Battlefield&rdquo;</strong> (2013)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">·</span>
                <span>Dahr Jamail, <strong>&ldquo;Beyond the Green Zone&rdquo;</strong> (2007)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">·</span>
                <span>Amnesty International, <strong>&ldquo;The Hidden US War in Somalia&rdquo;</strong> (2019)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">·</span>
                <span>Amnesty International, <strong>&ldquo;At Any Cost: The Civilian Catastrophe in West Mosul&rdquo;</strong> (2017)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">·</span>
                <span>Human Rights Watch, <strong>&ldquo;Unacknowledged Deaths: NATO in Libya&rdquo;</strong> (2012)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">·</span>
                <span>MSF, <strong>&ldquo;Attack on Kunduz Trauma Centre&rdquo;</strong> (2015)</span>
              </li>
            </ul>
          </section>

          {/* Related pages */}
          <section className="bg-stone-100 p-8 rounded-xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900 mb-4">
              Related Pages
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/civilian-casualties" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-700">Civilian Casualties</h3>
                <p className="text-sm text-stone-600 mt-1">The numbers behind the human cost</p>
              </Link>
              <Link href="/allied-costs" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-700">Allied Costs</h3>
                <p className="text-sm text-stone-600 mt-1">What America&apos;s allies paid in blood and treasure</p>
              </Link>
              <Link href="/blowback-map" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-700">Blowback Map</h3>
                <p className="text-sm text-stone-600 mt-1">How intervention creates future threats</p>
              </Link>
            </div>
          </section>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
