import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Iran War Casualties: The Human Cost Nobody Talks About',
  description: '8,080+ killed. 49,241+ injured. 4.2M displaced. Detailed casualty breakdown by country — Iran, Lebanon, Israel, US, Iraq, Gulf states, and UNIFIL.',
  keywords: ['iran war casualties', 'iran war deaths', 'iran war civilian casualties', 'lebanon casualties', 'operation epic fury casualties', 'iran war human cost'],
  openGraph: {
    title: 'Iran War Casualties: The Human Cost Nobody Talks About',
    description: '8,080+ killed. 49,241+ injured. 4.2M+ displaced. Every number is a person.',
    url: 'https://www.warcosts.org/analysis/iran-war-human-cost',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Human Cost of the Iran War',
    description: '8,080+ killed across all sides in 148 days. The numbers behind the headlines.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/iran-war-human-cost',
  },
}

const casualtiesByCountry = [
  { country: 'Iran', killed: '3,636+', wounded: '15,000-27,000', displaced: '3.2M', source: 'HRANA / US-Israel estimate: 6,000+', notes: '1,701 civilians, 1,221 military, 714 IRGC/militia (HRANA breakdown)' },
  { country: 'Lebanon', killed: '4,324+', wounded: '12,221+', displaced: '1M+', source: 'Lebanese Health Ministry', notes: 'Includes Hezbollah fighters and civilians' },
  { country: 'Israel', killed: '72', wounded: '7,834+', displaced: '—', source: 'Israeli MOD', notes: 'Majority from ballistic missile and rocket attacks' },
  { country: 'United States', killed: '20+', wounded: '553+', displaced: '—', source: 'Pentagon / The Intercept', notes: 'Pentagon removed 4 from official KIA count' },
  { country: 'Iraq', killed: '128', wounded: '387', displaced: '—', source: 'Iraqi Health Ministry', notes: 'Militia bases and collateral damage' },
  { country: 'UAE', killed: '15', wounded: '—', displaced: '—', source: 'UAE MOD', notes: 'Port and base attacks' },
  { country: 'Qatar', killed: '14', wounded: '—', displaced: '—', source: 'Qatari government', notes: 'Al Udeid base area' },
  { country: 'Kuwait', killed: '11', wounded: '—', displaced: '—', source: 'Kuwaiti government', notes: 'Base vicinity casualties' },
  { country: 'Oman', killed: '14', wounded: '—', displaced: '—', source: 'Omani government', notes: 'Strait-adjacent incidents' },
  { country: 'Saudi Arabia', killed: '3', wounded: '—', displaced: '—', source: 'Saudi MOD', notes: 'Houthi-related strikes' },
  { country: 'Bahrain', killed: '2', wounded: '—', displaced: '—', source: 'Bahraini government', notes: 'Naval facility incident' },
  { country: 'UNIFIL', killed: '7', wounded: '—', displaced: '—', source: 'United Nations', notes: 'Peacekeepers in southern Lebanon' },
]

export default function IranWarHumanCostPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Iran War Casualties: The Human Cost Nobody Talks About',
            description: 'A detailed breakdown of casualties across all sides of the Iran war — 8,080+ killed, 49,241+ injured, 4.2M+ displaced in 148 days.',
            datePublished: '2026-07-25T00:00:00Z',
            dateModified: '2026-07-25T00:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/iran-war-human-cost' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Human Cost' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Casualty Analysis — July 25, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Human Cost Nobody Talks About
        </h1>
        <p className="text-xl text-stone-300 mb-4">8,080+ Killed. 49,241+ Injured. 4.2 Million Displaced.</p>
        <p className="text-stone-400 text-lg">
          Behind the cost figures and strategic analyses, the Iran war has killed more than 8,000 people and
          injured nearly 50,000 across at least 12 countries in 148 days. Over 4 million people have been
          displaced from their homes. These are the numbers that don&apos;t make the headlines — and the ones
          that matter most.
        </p>
      </div>

      <ShareButtons title="Iran War Casualties: The Human Cost Nobody Talks About" />

      {/* Key Numbers */}
      <div className="bg-stone-900 border border-red-900/60 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3 mb-5">
          <span className="text-2xl">🕊️</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">148 Days — All Sides</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">8,080+</div>
            <div className="text-stone-400 text-sm">Killed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">49,241+</div>
            <div className="text-stone-400 text-sm">Injured</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">4.2M+</div>
            <div className="text-stone-400 text-sm">Displaced</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">12+</div>
            <div className="text-stone-400 text-sm">Countries Affected</div>
          </div>
        </div>
        <p className="text-stone-500 text-xs mt-4">Sources: HRANA, Lebanese Health Ministry, Israeli MOD, Pentagon, The Intercept, Iraqi Health Ministry, UNHCR</p>
      </div>

      {/* Full Table */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Casualties by Country
        </h2>
        <p className="text-stone-600 mb-6">
          Casualty figures in active conflicts are always contested. Different sources use different methodologies,
          and governments on all sides have incentives to minimize or maximize reported numbers. We present
          the most widely cited figures from credible sources, noting discrepancies where they exist.
        </p>

        <div className="bg-white border border-stone-200 rounded-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-stone-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-stone-700">Country</th>
                  <th className="text-right p-4 font-semibold text-stone-700">Killed</th>
                  <th className="text-right p-4 font-semibold text-stone-700">Wounded</th>
                  <th className="text-right p-4 font-semibold text-stone-700">Displaced</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {casualtiesByCountry.map((item, i) => (
                  <tr key={i} className={i < 4 ? 'bg-red-50/30' : ''}>
                    <td className="p-4 text-stone-700 font-medium">{item.country}</td>
                    <td className="p-4 text-right text-red-600 font-bold">{item.killed}</td>
                    <td className="p-4 text-right text-stone-700">{item.wounded}</td>
                    <td className="p-4 text-right text-stone-700">{item.displaced}</td>
                  </tr>
                ))}
                <tr className="bg-stone-100 font-bold">
                  <td className="p-4 text-stone-900">Total (All Sides)</td>
                  <td className="p-4 text-right text-red-600">8,080+</td>
                  <td className="p-4 text-right text-red-600">49,241+</td>
                  <td className="p-4 text-right text-red-600">4.2M+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Iran */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Iran: Two Counts, One Tragedy
        </h2>
        <p className="text-stone-600 mb-4">
          Iran&apos;s casualty count is the most contested of the war. Two primary estimates exist:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">HRANA Count: 3,636+</h3>
            <p className="text-stone-600 text-sm mb-2">
              The Human Rights Activists News Agency (HRANA), an Iranian diaspora monitoring group, maintains a
              name-by-name verified list. Their breakdown:
            </p>
            <ul className="text-stone-600 text-sm space-y-1">
              <li>• <strong>1,701 civilians</strong> (including 168 children at Minab)</li>
              <li>• <strong>1,221 military</strong> (regular armed forces)</li>
              <li>• <strong>714 IRGC and militia</strong> members</li>
            </ul>
            <p className="text-stone-500 text-xs mt-3">Source: HRANA verified casualty database</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">US/Israel Estimate: 6,000+</h3>
            <p className="text-stone-600 text-sm mb-2">
              US and Israeli intelligence estimate Iranian deaths at over 6,000, based on satellite imagery of
              burial sites, intercepted communications, and battle damage assessments. The higher figure may include:
            </p>
            <ul className="text-stone-600 text-sm space-y-1">
              <li>• Deaths not yet verified by HRANA</li>
              <li>• IRGC personnel listed under cover identities</li>
              <li>• Deaths in areas without independent monitoring</li>
            </ul>
            <p className="text-stone-500 text-xs mt-3">Source: US/Israeli intelligence assessment</p>
          </div>
        </div>
        <p className="text-stone-600 mb-4">
          Iranian wounded estimates range even more widely — from 15,000 to 27,000 — reflecting the difficulty
          of monitoring a healthcare system under wartime stress and sanctions. Many injuries go unreported when
          hospitals are overwhelmed or inaccessible.
        </p>
        <p className="text-stone-600 mb-6">
          An estimated 3.2 million Iranians have been internally displaced, primarily from border regions,
          cities near military installations, and areas affected by strikes on energy infrastructure.
        </p>
      </section>

      {/* Minab */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Minab: 168 Schoolgirls
          </h2>
          <p className="text-stone-300 mb-4">
            On March 19, 2026 — Day 20 of the war — a US airstrike hit what the Pentagon identified as an
            IRGC command facility in Minab, a city in Iran&apos;s Hormozgan Province. The building was actually
            a girls&apos; school. 168 schoolgirls were killed in the deadliest single attack on children in any
            conflict since the Beslan school siege in 2004.
          </p>
          <p className="text-stone-300 mb-4">
            The Pentagon initially denied the strike, then acknowledged it as a &quot;tragic intelligence
            failure.&quot; An internal investigation found that the targeting data had confused the school&apos;s
            coordinates with a nearby IRGC facility. The investigating officer&apos;s report has not been made public.
          </p>
          <p className="text-stone-300">
            Minab became a defining moment of the war internationally, galvanizing the UN General Assembly to pass
            a non-binding resolution calling for an immediate ceasefire. It remains the single deadliest incident
            for civilians in the entire conflict. For more on civilian casualties, see our{' '}
            <Link href="/analysis/iran-civilian-cost" className="text-red-400 hover:text-red-300 underline">civilian cost analysis</Link>.
          </p>
        </div>
      </section>

      {/* Lebanon */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Lebanon: The Forgotten Front
        </h2>
        <p className="text-stone-600 mb-4">
          Lebanon has suffered more casualties than any other country in the conflict — 4,324 killed and
          12,221 wounded — yet receives a fraction of the media coverage devoted to the US-Iran axis of the war.
        </p>
        <p className="text-stone-600 mb-4">
          The fighting in Lebanon involves Israeli operations against Hezbollah, which has fired thousands of
          rockets into northern Israel while simultaneously engaging Israeli ground forces near the border. The
          Lebanese Health Ministry&apos;s casualty count includes both Hezbollah fighters and civilians, without
          distinguishing between them — a methodology that has been both criticized and defended.
        </p>
        <p className="text-stone-600 mb-4">
          Over one million Lebanese have been displaced, primarily from the south of the country and the Bekaa
          Valley. Beirut&apos;s southern suburbs — the Dahieh — have been repeatedly struck, displacing tens of
          thousands from the capital itself.
        </p>
        <p className="text-stone-600 mb-6">
          The{' '}
          <Link href="/analysis/ceasefire-collapse" className="text-red-600 hover:text-red-800 underline">ceasefire collapse</Link>{' '}
          briefly offered hope for Lebanon, but Israeli strikes continued even during the MOU period — one of
          the key factors that ultimately doomed the deal.
        </p>
      </section>

      {/* Israel */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Israel: The Other Side of the Rockets
        </h2>
        <p className="text-stone-600 mb-4">
          Israel&apos;s 72 killed and 7,834+ wounded reflect the unprecedented scale of missile and rocket
          attacks the country has faced from Iran, Hezbollah, and Iraqi militias simultaneously. The Iron Dome,
          Arrow, and David&apos;s Sling systems have intercepted thousands of projectiles, but the sheer volume
          has overwhelmed defenses in several instances.
        </p>
        <p className="text-stone-600 mb-4">
          The wounded figure — over 7,800 — is striking relative to the death count. This ratio reflects the
          effectiveness of Israel&apos;s civil defense infrastructure (shelters, alert systems) in reducing
          fatalities, even as the volume of incoming fire causes widespread injuries from shrapnel, blast effects,
          and secondary impacts.
        </p>
        <p className="text-stone-600 mb-6">
          For more on Israel&apos;s role in the conflict, see the{' '}
          <Link href="/iran-war-2026" className="text-red-600 hover:text-red-800 underline">Iran War 2026 overview</Link>.
        </p>
      </section>

      {/* United States */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          United States: The Numbers the Pentagon Won&apos;t Give You
        </h2>
        <p className="text-stone-600 mb-4">
          The Pentagon&apos;s official count lists 20+ US service members killed in action. But that number
          comes with an asterisk: the Pentagon removed 4 names from the official KIA count under circumstances
          that have not been publicly explained. The families of those 4 service members have disputed the
          reclassification.
        </p>
        <p className="text-stone-600 mb-4">
          The wounded count is even more contested. The Pentagon acknowledges 553+ wounded, but The Intercept
          reported that the actual number is &quot;far more&quot; than the official figure, citing sources within
          military medical channels. The discrepancy may reflect different definitions of &quot;wounded in
          action&quot; — the Pentagon historically excludes certain categories of injuries, including those
          classified as &quot;disease and non-battle injury&quot; even when they occur in combat zones.
        </p>
        <p className="text-stone-600 mb-6">
          The pattern of casualty underreporting is not new. During the Iraq and Afghanistan wars, the true
          scope of traumatic brain injuries wasn&apos;t acknowledged for years. The Iran war&apos;s reliance on
          standoff weapons reduces ground combat casualties but doesn&apos;t eliminate them — base attacks,
          missile strikes on forward positions, and naval engagements all produce casualties.
        </p>
      </section>

      {/* Gulf States and Others */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Gulf States, Iraq, and UNIFIL
        </h2>
        <p className="text-stone-600 mb-4">
          The war&apos;s toll extends well beyond the primary belligerents. Iraq has suffered 128 killed and
          387 wounded, primarily from strikes on Iran-aligned militia bases and associated collateral damage.
          Iraqi civilians living near these facilities have borne a disproportionate burden.
        </p>
        <p className="text-stone-600 mb-4">
          Gulf states hosting US military bases have also taken casualties — a combined 59 killed across the UAE
          (15), Qatar (14), Oman (14), Kuwait (11), Saudi Arabia (3), and Bahrain (2). These deaths, mostly from
          Iranian ballistic missile attacks on or near US installations, have strained the political relationship
          between the US and its Gulf partners.
        </p>
        <p className="text-stone-600 mb-6">
          Seven UNIFIL peacekeepers have been killed in southern Lebanon, caught between Israeli operations and
          Hezbollah positions. The UN has repeatedly called for the safety of its personnel to be respected by
          all parties.
        </p>
      </section>

      {/* Displacement */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Displacement Crisis
        </h2>
        <p className="text-stone-600 mb-4">
          Beyond the killed and wounded, over 4.2 million people have been displaced by the Iran war:
        </p>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center bg-white border border-stone-200 rounded-lg p-4">
            <span className="text-stone-700 font-medium">Iran — internally displaced</span>
            <span className="text-red-600 font-bold">3.2M</span>
          </div>
          <div className="flex justify-between items-center bg-white border border-stone-200 rounded-lg p-4">
            <span className="text-stone-700 font-medium">Lebanon — internally displaced</span>
            <span className="text-red-600 font-bold">1M+</span>
          </div>
        </div>
        <p className="text-stone-600 mb-4">
          Iran&apos;s 3.2 million displaced represent the largest internal displacement crisis in the Middle
          East since the Iraq war. The UNHCR has struggled to provide assistance due to sanctions restrictions
          and access limitations. Many displaced Iranians are sheltering with relatives or in improvised camps
          near provincial capitals, with limited access to healthcare, clean water, and food.
        </p>
        <p className="text-stone-600 mb-6">
          Lebanon&apos;s displacement crisis compounds an already dire humanitarian situation. The country was
          already hosting 1.5 million Syrian refugees when the war began. Adding another million internally
          displaced Lebanese has overwhelmed social services, housing, and humanitarian infrastructure.
        </p>
      </section>

      {/* Context: Other Conflicts */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Context: The World&apos;s Other Wars
        </h2>
        <p className="text-stone-600 mb-4">
          The Iran war is devastating — but it&apos;s not happening in isolation. As of July 2026, other
          active conflicts continue to extract a staggering human toll:
        </p>
        <div className="space-y-4 mb-8">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Ukraine-Russia War</h3>
            <p className="text-stone-600 text-sm">
              Over 2 million military casualties on both sides, with CSIS estimating 400,000-450,000 Russian
              soldiers killed. The OHCHR has documented 65,044 civilian casualties. Peace talks remain stalled.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Gaza</h3>
            <p className="text-stone-600 text-sm">
              Over 73,000 Palestinians killed since October 2023, with 1,127+ killed since the ceasefire
              was declared. The conflict continues to generate casualties despite nominal cessation of
              major operations.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Sudan</h3>
            <p className="text-stone-600 text-sm">
              The world&apos;s largest displacement crisis, with 14 million people displaced. Over 1,000
              civilians have been killed by drone strikes alone between January and May 2026.
            </p>
          </div>
        </div>
      </section>

      {/* The Counting Problem */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Counting Problem
        </h2>
        <p className="text-stone-600 mb-4">
          Every number on this page should be read with a caveat: casualty counts in active conflicts are
          inherently incomplete and politically charged. Governments undercount for different reasons —
          the US to maintain public support, Iran to project resilience, Israel to emphasize threat level.
        </p>
        <p className="text-stone-600 mb-4">
          Independent monitors like HRANA do essential work, but they can only count what they can verify.
          In areas without internet, without journalists, without functioning hospitals — people die uncounted.
          The true toll of the Iran war is almost certainly higher than any figure on this page.
        </p>
        <p className="text-stone-600 mb-6">
          What we can say with confidence: over 8,000 people are dead who were alive 148 days ago. Nearly
          50,000 are wounded. Over 4 million are displaced. Those are the minimum numbers. The real ones
          are worse.
        </p>
      </section>

      {/* Bottom Line */}
      <section className="my-12">
        <div className="bg-red-950 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-stone-300 mb-4">
            Wars are measured in dollars and strategic outcomes. They should be measured in people.
            The Iran war has killed more than 8,000 people in 148 days — a rate of 54 deaths per day,
            every day, since February 28.
          </p>
          <p className="text-stone-300 mb-4">
            The 168 schoolgirls at Minab. The 7,834 wounded Israelis. The 20+ American service members
            whose families received folded flags. The 4,324 Lebanese caught between armies. Every number
            on this page is a person who had a name, a family, and a life that was cut short or shattered.
          </p>
          <p className="text-stone-300">
            For the full cost analysis, see{' '}
            <Link href="/analysis/113-billion-war" className="text-red-400 hover:text-red-300 underline">The $113 Billion War</Link>.
            For casualty tracking, see our{' '}
            <Link href="/casualties" className="text-red-400 hover:text-red-300 underline">casualties dashboard</Link>{' '}
            and{' '}
            <Link href="/civilian-casualties" className="text-red-400 hover:text-red-300 underline">civilian casualties tracker</Link>.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">Sources</h2>
        <ul className="text-stone-500 text-sm space-y-2">
          <li>Human Rights Activists News Agency (HRANA), verified casualty database, accessed July 25, 2026</li>
          <li>Lebanese Health Ministry, casualty reports, ongoing</li>
          <li>Israeli Ministry of Defense, casualty figures, July 2026</li>
          <li>US Department of Defense, casualty reports (with noted discrepancies)</li>
          <li>The Intercept, &quot;Pentagon Wounded Count Far Below Actual Figure,&quot; June 2026</li>
          <li>Iraqi Health Ministry, casualty reports, ongoing</li>
          <li>Gulf state government casualty disclosures (UAE, Qatar, Kuwait, Oman, Saudi Arabia, Bahrain)</li>
          <li>United Nations, UNIFIL casualty report, July 2026</li>
          <li>UNHCR, displacement estimates for Iran and Lebanon, July 2026</li>
          <li>CSIS, Ukraine casualty estimates, July 2026</li>
          <li>OHCHR, Ukraine civilian casualty data, ongoing</li>
          <li>Gaza Health Ministry, casualty figures, ongoing</li>
        </ul>
      </section>

      <RelatedArticles
        articles={[
          { href: '/casualties', title: 'Casualties Dashboard', description: 'Real-time casualty tracking across all conflicts' },
          { href: '/civilian-casualties', title: 'Civilian Casualties', description: 'Civilian toll across all wars' },
          { href: '/analysis/iran-civilian-cost', title: 'Iran Civilian Cost', description: 'Detailed civilian impact analysis' },
          { href: '/analysis/113-billion-war', title: 'The $113 Billion War', description: 'The financial cost of the conflict' },
          { href: '/iran-war-2026', title: 'Iran War 2026', description: 'Complete conflict overview' },
        ]}
      />

      <BackToTop />
    </div>
  )
}