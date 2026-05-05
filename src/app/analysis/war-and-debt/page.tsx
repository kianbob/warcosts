import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'War and Debt: $8 Trillion Borrowed Since 9/11',
  description: '$8T added to national debt since 9/11. Interest on war debt exceeds the education budget. Every war paid with borrowed money.',
  openGraph: {
    title: 'War and Debt: $8 Trillion Borrowed Since 9/11',
    description: 'Every major American war was financed by borrowing. The interest alone now exceeds the education budget.',
    url: 'https://www.warcosts.org/analysis/war-and-debt',
    type: 'article',
  },
}

const keyStats = [
  { stat: '$8T+', label: 'Estimated cost of post-9/11 wars including future obligations and interest', source: 'Brown University Costs of War Project' },
  { stat: '$1.1T', label: 'Interest already paid on post-9/11 war borrowing through 2023', source: 'Costs of War Project' },
  { stat: '$6.5T', label: 'Projected additional interest costs on war debt through 2050', source: 'CBO + Costs of War estimates' },
  { stat: '0', label: 'Post-9/11 wars financed by tax increases — all borrowed', source: 'Congressional Research Service' },
  { stat: '$925B', label: 'Annual federal interest payments (FY2024) — now larger than defense spending', source: 'US Treasury' },
  { stat: '3.3%', label: 'Share of GDP spent on net interest (FY2024) — highest since 1992', source: 'CBO' },
]

const warFinancing = [
  { war: 'Revolutionary War (1775–1783)', cost: '$101M ($2.4B adjusted)', method: 'Continental currency, French/Dutch loans, domestic bonds', debtAfter: '$75M', notes: 'Continental dollar inflated 99%. "Not worth a Continental" became an idiom. Congress had no taxing power.' },
  { war: 'War of 1812 (1812–1815)', cost: '$105M ($1.8B adjusted)', method: 'Treasury bonds, some tax revenue', debtAfter: '$127M', notes: 'National debt doubled. Government nearly defaulted. Led to creation of Second Bank of the United States.' },
  { war: 'Mexican-American War (1846–1848)', cost: '$71M ($2.4B adjusted)', method: 'Treasury bonds, tariff revenue', debtAfter: '$63M', notes: 'Financed partly by existing revenue. One of the few wars that didn\'t cause a debt crisis.' },
  { war: 'Civil War (1861–1865)', cost: '$5.2B ($80B adjusted) — Union only', method: 'Greenbacks (paper money), war bonds, income tax (first ever), tariffs', debtAfter: '$2.68B', notes: 'National debt increased 4,200%. First income tax in US history. Confederacy financed by printing money — hyperinflation destroyed their economy.' },
  { war: 'Spanish-American War (1898)', cost: '$283M ($9.6B adjusted)', method: 'War bonds, excise taxes', debtAfter: '$1.4B', notes: 'Short war, moderate cost. But ongoing Philippines occupation cost more than the war itself.' },
  { war: 'World War I (1917–1918)', cost: '$32B ($610B adjusted)', method: 'Liberty Bonds ($21.5B), income tax increases, War Revenue Act', debtAfter: '$25.5B', notes: 'Top income tax rate raised to 77%. Liberty Bond campaigns made buying government debt a patriotic duty.' },
  { war: 'World War II (1941–1945)', cost: '$296B ($4.1T adjusted)', method: 'War Bonds ($185B), massive income tax expansion, Victory Tax', debtAfter: '$269B (120% of GDP)', notes: 'Top income tax rate: 94%. Number of taxpayers expanded from 4M to 43M. Debt-to-GDP peaked at 120% — a record not approached until 2020.' },
  { war: 'Korean War (1950–1953)', cost: '$30B ($341B adjusted)', method: 'Income tax increases (Revenue Act of 1950), some borrowing', debtAfter: '$266B', notes: 'One of the few wars partially financed by taxes. Truman raised taxes over Republican objections. Debt-to-GDP actually fell.' },
  { war: 'Vietnam War (1965–1975)', cost: '$111B ($950B adjusted)', method: 'Income tax surcharge (1968), deficit spending, inflation', debtAfter: '$533B', notes: 'LBJ tried to fund both the war and Great Society without raising taxes until 1968. Result: inflation that lasted a decade.' },
  { war: 'Gulf War (1990–1991)', cost: '$61B ($116B adjusted)', method: 'Allied contributions ($53B), some US borrowing', debtAfter: '$4.0T', notes: 'The "paid-for" war. Saudi Arabia, Kuwait, Japan, and Germany covered 88% of costs. The last time allies actually paid up.' },
  { war: 'War on Terror (2001–present)', cost: '$8T+ (including future obligations)', method: '100% deficit financing — no tax increases, multiple tax cuts during wartime', debtAfter: '$34T+ (2024)', notes: 'First time in US history that taxes were CUT during wartime. Bush passed $1.35T in tax cuts in June 2001, then $350B more in 2003 during the Iraq invasion.' },
]

const interestProjections = [
  { year: 2001, warDebt: '$0', interestPaid: '$0', cumulative: '$0' },
  { year: 2005, warDebt: '$700B', interestPaid: '$50B', cumulative: '$50B' },
  { year: 2010, warDebt: '$1.6T', interestPaid: '$185B', cumulative: '$235B' },
  { year: 2015, warDebt: '$2.1T', interestPaid: '$260B', cumulative: '$495B' },
  { year: 2020, warDebt: '$2.7T', interestPaid: '$340B', cumulative: '$835B' },
  { year: 2023, warDebt: '$3.0T', interestPaid: '$275B', cumulative: '$1.1T' },
  { year: 2030, warDebt: '$3.2T (est)', interestPaid: '$400B/yr (est)', cumulative: '$3.9T' },
  { year: 2040, warDebt: '$3.2T (est)', interestPaid: '$500B/yr (est)', cumulative: '$8.5T' },
  { year: 2050, warDebt: '$3.2T (est)', interestPaid: '$550B/yr (est)', cumulative: '$14T' },
]

const interestVsSpending = [
  { category: 'Net Interest on Federal Debt', amount: '$925B', share: '14.3%', notes: 'Now the single largest "program" in the federal budget' },
  { category: 'Department of Defense', amount: '$886B', share: '13.6%', notes: 'Interest payments now exceed the Pentagon budget' },
  { category: 'Department of Education', amount: '$79B', share: '1.2%', notes: 'War interest payments are 14x the entire education budget' },
  { category: 'Department of Veterans Affairs', amount: '$301B', share: '4.6%', notes: 'Cost of caring for veterans of the wars we borrowed to fight' },
  { category: 'Department of Transportation', amount: '$105B', share: '1.6%', notes: 'Every bridge, highway, and airport combined' },
  { category: 'EPA', amount: '$12B', share: '0.2%', notes: 'Interest on war debt could fund the EPA 77 times over' },
  { category: 'NASA', amount: '$25B', share: '0.4%', notes: 'Interest on war debt could fund 37 NASAs' },
  { category: 'NIH (National Institutes of Health)', amount: '$47B', share: '0.7%', notes: 'All medical research combined is 5% of annual interest payments' },
]

const taxCutsDuringWar = [
  { year: 2001, act: 'Economic Growth and Tax Relief Reconciliation Act', cost: '$1.35T (10-year)', detail: 'Signed June 7, 2001 — three months before 9/11. Reduced top income tax rate from 39.6% to 35%. When war came, taxes stayed cut.' },
  { year: 2002, act: 'Job Creation and Worker Assistance Act', cost: '$42B', detail: 'Extended business depreciation benefits while troops were fighting in Afghanistan.' },
  { year: 2003, act: 'Jobs and Growth Tax Relief Reconciliation Act', cost: '$350B (10-year)', detail: 'Signed May 28, 2003 — two months after the Iraq invasion. Cut capital gains and dividend taxes while borrowing for a second simultaneous war.' },
  { year: 2004, act: 'Working Families Tax Relief Act', cost: '$146B', detail: 'Extended earlier cuts. At this point US had 160,000 troops in Iraq. All financed by debt.' },
  { year: 2006, act: 'Tax Increase Prevention and Reconciliation Act', cost: '$70B', detail: 'Extended capital gains cuts. Iraq was in full civil war. Debt climbed past $8.5 trillion.' },
  { year: 2010, act: 'Tax Relief, Unemployment Insurance Reauthorization Act', cost: '$858B (2-year)', detail: 'Obama extended Bush tax cuts for all income levels. Afghan surge ongoing with 100,000 troops deployed.' },
  { year: 2017, act: 'Tax Cuts and Jobs Act', cost: '$1.9T (10-year)', detail: 'Trump\'s tax overhaul. Reduced corporate rate from 35% to 21%. US still at war in Iraq, Afghanistan, Syria, Yemen, Somalia, Libya.' },
]

const historicalComparison = [
  { war: 'World War II', topTaxRate: '94%', warBonds: 'Yes — $185B sold', draftForSacrifice: 'Yes — shared sacrifice across all classes', rationing: 'Yes — food, gas, rubber, metal', result: 'Debt high but economy boomed. Paid off in 20 years.' },
  { war: 'Korean War', topTaxRate: '92%', warBonds: 'Some', draftForSacrifice: 'Yes — universal draft', rationing: 'Limited', result: 'Debt-to-GDP actually fell during the war.' },
  { war: 'Vietnam War', topTaxRate: '77% → 70%', warBonds: 'No', draftForSacrifice: 'Draft — but deferments for wealthy', rationing: 'No', result: 'Inflation crisis. Decade of economic pain.' },
  { war: 'War on Terror', topTaxRate: '39.6% → 35% (cut)', warBonds: 'No', draftForSacrifice: 'No draft, no sacrifice asked', rationing: 'No — told to go shopping', result: '$8T+ in debt. Interest exceeds education budget. Still paying.' },
]

const generationalDebt = [
  { generation: 'Baby Boomers (born 1946–1964)', warDebtShare: 'Started the wars. Received tax cuts. Will not live to pay the interest.', perCapita: '$26,000 per person' },
  { generation: 'Gen X (born 1965–1980)', warDebtShare: 'Fought the wars. Bore the initial costs. Watched their tax dollars go to interest.', perCapita: '$24,000 per person' },
  { generation: 'Millennials (born 1981–1996)', warDebtShare: 'Grew up during the wars. Will pay the majority of interest costs. Got student debt instead of war bonds.', perCapita: '$24,000 per person' },
  { generation: 'Gen Z (born 1997–2012)', warDebtShare: 'Born after 9/11. Had no say in these wars. Will pay interest on them until 2050 and beyond.', perCapita: '$24,000 per person' },
  { generation: 'Gen Alpha (born 2013+)', warDebtShare: 'Not yet born when these wars started. Will inherit trillions in war debt they had no voice in creating.', perCapita: 'TBD — growing' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'War and Debt: How Every American War Was Financed by Borrowing',
  description: 'From the Revolutionary War to the War on Terror, America has borrowed to fight every major conflict. The post-9/11 wars added $8 trillion in debt — and the interest alone now exceeds the education budget.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2025-03-15',
  url: 'https://www.warcosts.org/analysis/war-and-debt',
}

export default function WarAndDebt() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumbs items={[
        
        { label: 'Analysis', href: '/analysis' },
        { label: 'War and Debt' },
      ]} />

      {/* Dark Hero Section */}
      <section className="bg-stone-900 text-white rounded-lg p-8 mb-8 -mx-4 md:mx-0">
        <div className="max-w-3xl">
          <span className="text-red-400 text-sm font-bold uppercase tracking-wider">Analysis</span>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-2 mb-4">
            War and Debt
          </h1>
          <p className="text-stone-300 text-xl mb-6">
            Every major American war has been financed primarily by borrowing. The post-9/11 wars are unique 
            in one respect: for the first time in history, the United States cut taxes during wartime. The 
            result is $8 trillion in war-related debt, with interest payments that now exceed the entire 
            federal education budget — and the bill is still growing.
          </p>
          <p className="text-stone-400 text-base">
            The wars in Iraq and Afghanistan were put on a credit card. The generation that started them will 
            not live to pay for them. Your grandchildren will.
          </p>
        </div>
      </section>

      <ShareButtons title="War and Debt: $8 Trillion Borrowed Since 9/11" />

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

      {/* How Every War Was Financed */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          How America Paid for Every War
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          From the Continental Congress printing worthless paper currency to George W. Bush putting two wars 
          on a credit card while cutting taxes, every generation of American leaders has found a way to defer 
          the cost of war onto someone else — usually future taxpayers who had no say in the matter.
        </p>

        <div className="space-y-4">
          {warFinancing.map((w) => (
            <div key={w.war} className="bg-white border border-stone-200 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-bold text-stone-900">{w.war}</h3>
                <span className="text-red-600 font-bold">{w.cost}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-2">
                <div><span className="text-stone-500">How financed:</span> <span className="text-stone-700">{w.method}</span></div>
                <div><span className="text-stone-500">Debt after:</span> <span className="text-stone-700">{w.debtAfter}</span></div>
              </div>
              <p className="text-stone-600 text-sm">{w.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Interest Bomb */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Interest Bomb: War Debt That Keeps Growing
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The wars themselves may be winding down, but the interest on war debt is accelerating. By 2050, 
          the total interest paid on post-9/11 war borrowing is projected to exceed $6.5 trillion — more 
          than double the direct cost of the wars themselves. This is the true cost of fighting on credit: 
          the interest compounds long after the last shot is fired.
        </p>

        <div className="space-y-2">
          {interestProjections.map((row) => (
            <div key={row.year} className="flex items-center gap-4 bg-white border border-stone-200 rounded-lg p-3 text-sm">
              <span className="font-bold text-stone-900 w-12">{row.year}</span>
              <div className="flex-1 grid grid-cols-3 gap-2">
                <div><span className="text-stone-500">War debt:</span> <span className="text-stone-700">{row.warDebt}</span></div>
                <div><span className="text-stone-500">Interest:</span> <span className="text-red-600 font-bold">{row.interestPaid}</span></div>
                <div><span className="text-stone-500">Cumulative:</span> <span className="text-stone-900 font-bold">{row.cumulative}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interest vs. Government Spending */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          What We Pay in Interest vs. What We Invest
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          In fiscal year 2024, net interest on the federal debt — $925 billion — surpassed the entire 
          Department of Defense budget for the first time. A significant portion of that interest is 
          attributable to war borrowing. Here&apos;s how interest compares to everything else the 
          government does:
        </p>

        <div className="space-y-3">
          {interestVsSpending.map((item) => (
            <div key={item.category} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-semibold text-stone-900">{item.category}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-red-600 font-bold">{item.amount}</span>
                  <span className="text-stone-400 text-sm">({item.share} of budget)</span>
                </div>
              </div>
              <p className="text-stone-500 text-sm">{item.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tax Cuts During Wartime */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Cutting Taxes While Fighting Wars: A Historic First
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          In every previous American war, the government either raised taxes or asked citizens to buy war 
          bonds — or both. The post-9/11 era broke this pattern completely. George W. Bush cut taxes three 
          months before 9/11, then cut them again during the Iraq invasion. The message was unprecedented: 
          fight two wars, sacrifice nothing, charge it to your grandchildren.
        </p>

        <div className="space-y-3">
          {taxCutsDuringWar.map((item) => (
            <div key={item.act} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-semibold text-stone-900 text-sm">{item.act}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-stone-500 text-sm">{item.year}</span>
                  <span className="text-red-600 font-bold">{item.cost}</span>
                </div>
              </div>
              <p className="text-stone-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Historical Comparison */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Sacrifice Then vs. Now
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          During World War II, the top income tax rate was 94%. Americans bought war bonds, rationed food, 
          and collected scrap metal. During the War on Terror, the top tax rate was cut, no bonds were sold, 
          and President Bush told Americans to &ldquo;go shopping.&rdquo; The contrast defines two entirely 
          different conceptions of what it means to be at war.
        </p>

        <div className="space-y-4">
          {historicalComparison.map((item) => (
            <div key={item.war} className="bg-white border border-stone-200 rounded-lg p-5">
              <h3 className="font-bold text-stone-900 mb-3">{item.war}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div><span className="text-stone-500 block">Top Tax Rate</span><span className="text-stone-900 font-bold">{item.topTaxRate}</span></div>
                <div><span className="text-stone-500 block">War Bonds</span><span className="text-stone-900">{item.warBonds}</span></div>
                <div><span className="text-stone-500 block">Shared Sacrifice</span><span className="text-stone-900">{item.draftForSacrifice}</span></div>
                <div><span className="text-stone-500 block">Rationing</span><span className="text-stone-900">{item.rationing}</span></div>
              </div>
              <p className="text-stone-600 text-sm mt-2"><span className="font-semibold">Result:</span> {item.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Generational Impact */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Generational Burden: Who Pays for Wars They Didn&apos;t Choose
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          War debt is a form of intergenerational wealth transfer — from the young to the old, from the 
          future to the present, from those who had no voice to those who chose not to listen. The post-9/11 
          wars were started by Baby Boomers, fought by Millennials, and will be paid for by Gen Z and Gen Alpha.
        </p>

        <div className="space-y-3">
          {generationalDebt.map((gen) => (
            <div key={gen.generation} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-bold text-stone-900">{gen.generation}</h3>
                <span className="text-red-600 font-bold text-sm">{gen.perCapita}</span>
              </div>
              <p className="text-stone-600 text-sm">{gen.warDebtShare}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What $8 Trillion Could Have Bought */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          What $8 Trillion Could Have Bought Instead
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The opportunity cost of war debt is staggering. Here is what the United States could have done 
          with $8 trillion if it had not borrowed it to fight wars in the Middle East:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-red-600 mb-1">100 years</div>
            <p className="text-stone-700 text-sm">of fully funded public education at current levels</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-red-600 mb-1">$24,000</div>
            <p className="text-stone-700 text-sm">for every man, woman, and child in the United States</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-red-600 mb-1">320 NASAs</div>
            <p className="text-stone-700 text-sm">320 years of NASA funding at current budget</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-red-600 mb-1">$1.9T</div>
            <p className="text-stone-700 text-sm">enough to eliminate all student loan debt — four times over</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-red-600 mb-1">667 years</div>
            <p className="text-stone-700 text-sm">of EPA funding at current levels</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-red-600 mb-1">170 years</div>
            <p className="text-stone-700 text-sm">of NIH medical research funding</p>
          </div>
        </div>
      </section>

      {/* The Bush Doctrine of Deferred Pain */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          &ldquo;Go Shopping&rdquo;: The Bush Doctrine of Deferred Pain
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          On September 20, 2001, President Bush addressed the nation and told Americans that the best way to 
          fight terrorism was to &ldquo;go out and shop.&rdquo; He later told reporters that Americans should 
          &ldquo;enjoy life, the way we want it to be enjoyed.&rdquo; There would be no rationing. No war bonds. 
          No draft. No tax increases. The wars would be invisible — fought by volunteers, financed by borrowing, 
          and felt by no one except the families who sent their children to fight.
        </p>
        <p className="text-stone-700 text-lg mb-6">
          This was a deliberate political choice. The Bush administration understood that asking for sacrifice 
          would erode public support for the wars. By making the wars painless for 99% of Americans, they 
          ensured that the wars could continue indefinitely without significant opposition. The cost was simply 
          deferred — charged to a credit card that future generations would have to pay off.
        </p>
        <p className="text-stone-700 text-lg mb-6">
          The strategy worked exactly as designed. The wars lasted twenty years. Trillions were spent. And 
          most Americans couldn&apos;t tell you what we were fighting for, because they were never asked to 
          sacrifice anything for it. A war that costs nothing feels like nothing — and a war that feels like 
          nothing can last forever.
        </p>
      </section>

      {/* The Libertarian Case */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">
            The Case Against War on Credit
          </h2>
          <p className="text-stone-300 mb-4">
            Thomas Jefferson wrote: &ldquo;The principle of spending money to be paid by posterity, under the 
            name of funding, is but swindling futurity on a large scale.&rdquo; James Madison warned that 
            &ldquo;war is the parent of armies; from these proceed debts and taxes; and armies, and debts, 
            and taxes are the known instruments for bringing the many under the domination of the few.&rdquo;
          </p>
          <p className="text-stone-300 mb-4">
            The Founders understood something that modern politicians have forgotten: if wars must be paid for 
            in real time — through taxes, bonds, and sacrifice — then the people will demand that wars be short, 
            necessary, and winnable. If wars can be financed by borrowing, then there is no political cost to 
            starting them, no pressure to end them, and no accountability for the consequences.
          </p>
          <p className="text-stone-300 mb-4">
            Deficit-financed warfare is the greatest threat to fiscal conservatism in American history. The 
            post-9/11 wars alone added more to the national debt than the entire New Deal, Great Society, 
            and Affordable Care Act combined. Every dollar spent on interest payments for war debt is a dollar 
            that cannot be spent on infrastructure, education, or tax reduction.
          </p>
          <p className="text-stone-300">
            The solution is simple and radical: require that any war be paid for in real time, through taxes 
            or bonds, from the moment the first bomb falls. If the American people are not willing to pay for 
            a war while it is being fought, then the war is not worth fighting. This single reform would do 
            more to prevent unnecessary wars than any arms control treaty or UN resolution ever written.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>Brown University, Watson Institute — Costs of War Project, &ldquo;U.S. Budgetary Costs and Obligations of Post-9/11 Wars&rdquo; (2023)</li>
          <li>Congressional Budget Office, &ldquo;The Budget and Economic Outlook&rdquo; (FY2024)</li>
          <li>Congressional Research Service, &ldquo;Costs of Major U.S. Wars&rdquo; (RS22926)</li>
          <li>US Treasury Department, Monthly Treasury Statement and Debt to the Penny</li>
          <li>Office of Management and Budget, Historical Tables</li>
          <li>Tax Foundation, &ldquo;Federal Tax Revenue by Source, 1934-2024&rdquo;</li>
          <li>Robert Hormats, <em>The Price of Liberty: Paying for America&apos;s Wars</em> (Times Books, 2007)</li>
          <li>Joseph Stiglitz &amp; Linda Bilmes, <em>The Three Trillion Dollar War</em> (W.W. Norton, 2008)</li>
          <li>National Priorities Project, Federal Budget Analysis</li>
          <li>Government Accountability Office, Financial Audit Reports</li>
        </ul>
      </section>

      <RelatedArticles articles={[
        { slug: 'what-could-we-buy', title: 'What Could We Buy Instead?', desc: 'The opportunity cost of $8 trillion in war spending.' },
        { slug: 'pentagon-waste', title: 'Pentagon Waste', desc: '6 failed audits. $1.7T F-35. $43M gas station.' },
        { slug: 'cost-of-empire', title: 'The Cost of Empire', desc: '750+ bases in 80 countries. $150B/year to maintain.' },
        { slug: 'war-economy', title: 'The War Economy', desc: 'Does military spending actually create jobs?' },
      ]} />

      <BackToTop />
    </div>
  )
}
