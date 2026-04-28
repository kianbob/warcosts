import { MetadataRoute } from 'next'
import { loadData } from '@/lib/server-utils'
import { slugify } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.warcosts.org'
  const conflicts = loadData('conflicts.json')
  const presidents = loadData('presidents.json')
  const aid = loadData('foreign-aid.json')
  const arms = loadData('arms-sales.json')
  const presence = loadData('overseas-presence.json')

  const staticRoutes = [
    '', '/timeline', '/conflicts', '/eras', '/covert', '/casualties',
    '/spending', '/foreign-aid', '/arms-sales', '/contractors',
    '/opportunity-cost', '/bases', '/deployments', '/regime-changes',
    '/dashboard', '/search', '/downloads', '/glossary',
    '/pentagon-audit', '/revolving-door', '/cost-overruns', '/war-roi',
    '/who-fights', '/blowback-map', '/war-map',
    '/analysis', '/analysis/war-on-terror', '/analysis/congressional-authority',
    '/analysis/blowback', '/analysis/military-industrial-complex',
    '/analysis/human-cost', '/analysis/empire-of-bases',
    '/analysis/cost-per-life', '/analysis/presidents-at-war',
    '/analysis/the-aftermath', '/analysis/pentagon-climate',
    '/analysis/jobs-vs-war', '/analysis/the-469',
    '/analysis/drone-wars', '/analysis/silicon-valley-pentagon',
    '/modern-wars', '/tools/cost-calculator',
    '/analysis/forever-wars', '/analysis/ukraine-proxy', '/analysis/iran-2026',
    '/analysis/israel-lobby',
    '/analysis/cyber-warfare', '/analysis/sanctions-warfare',
    '/analysis/shadow-wars', '/analysis/ai-weapons', '/analysis/surveillance-state',
    '/analysis/information-warfare', '/analysis/space-warfare',
    '/analysis/private-armies', '/analysis/hybrid-warfare',
    '/analysis/economic-warfare',
    '/analysis/drones-kill-list', '/analysis/base-nation',
    '/analysis/sanctions-dont-work', '/analysis/undeclared-wars',
    '/analysis/911-to-forever-war', '/analysis/military-families',
    '/analysis/china-pivot', '/analysis/cost-of-iran',
    '/analysis/hormuz-crisis', '/analysis/aipac-war-machine',
    '/analysis/war-profiteering', '/analysis/what-could-we-buy',
    '/analysis/war-economy', '/analysis/media-and-war',
    '/analysis/refugee-crisis', '/analysis/nuclear-close-calls',
    '/analysis/cost-of-secrecy',
    '/analysis/womens-war', '/analysis/childrens-war',
    '/analysis/environmental-cost', '/analysis/veterans-betrayed',
    '/analysis/pentagon-waste',
    '/analysis/allies-and-enemies', '/analysis/war-and-civil-liberties',
    '/analysis/forgotten-wars', '/analysis/draft-and-inequality',
    '/analysis/cost-of-empire',
    '/analysis/torture-program', '/analysis/oil-and-war',
    '/analysis/private-military', '/analysis/lies-that-started-wars',
    '/analysis/what-victory-looks-like',
    '/analysis/iran-day-by-day', '/analysis/lebanon-burns',
    '/analysis/iran-civilian-cost', '/analysis/iran-cost-per-second',
    '/analysis/iran-regional-war', '/analysis/iran-russia-shadow-war',
    '/analysis/americas-wars-by-the-numbers',
    '/analysis/cost-of-doing-nothing',
    '/analysis/price-of-liberty',
    '/analysis/founding-fathers-at-war',
    '/analysis/cost-of-korean-war',
    '/analysis/ww2-by-the-numbers',
    '/analysis/cost-of-gulf-war',
    '/analysis/black-budget',
    '/analysis/military-suicide-epidemic',
    '/analysis/cost-of-nuclear-arsenal',
    '/analysis/mercenaries-of-america',
    '/analysis/war-and-debt',
    '/analysis/forgotten-casualties',
    '/analysis/the-draft-debate',
    '/analysis/presidents-war-record',
    '/analysis/americas-forgotten-wars',
    '/analysis/timeline-of-american-empire',
    '/analysis/iran-vs-iraq-war',
    '/analysis/iran-war-cost-breakdown',
    '/quasi-war',
    '/barbary-wars',
    '/indian-wars',
    '/banana-wars',
    '/boxer-rebellion',
    '/russian-civil-war',
    '/american-revolutionary-war',
    '/american-revolutionary-war/battles',
    '/american-revolutionary-war/founding-fathers',
    '/american-revolutionary-war/declaration-of-independence',
    '/american-revolutionary-war/costs',
    '/about', '/methodology', '/faq', '/sources', '/contact', '/privacy',
    '/war-clock', '/tools/tax-receipt', '/tools/jobs-calculator',
    '/cost-per-life', '/presidents', '/countries', '/decades',
    '/us-military-spending', '/cost-of-war', '/us-wars-list',
    '/veteran-suicide', '/defense-budget',
    '/nuclear', '/veterans', '/intelligence', '/modern-tactics',
    '/bases/directory', '/bases/countries', '/bases/states',
    '/weapons', '/contractors/directory',
    '/tools/war-quiz', '/tools/casualty-calculator', '/tools/compare-wars',
    '/military-families', '/nuclear-arsenal',
    '/war-powers', '/military-aid', '/civilian-casualties',
    '/war-propaganda', '/defense-budget-explained',
    '/us-military-budget', '/iraq-war', '/afghanistan-war', '/vietnam-war',
    '/mexican-american-war', '/spanish-american-war', '/philippine-american-war',
    '/cold-war', '/war-of-1812', '/civil-war', '/libya-intervention', '/syria-intervention',
    '/korean-war', '/gulf-war', '/world-war-1', '/world-war-2', '/war-on-terror',
    '/military-spending-by-country',
    '/tools', '/tools/budget-simulator', '/tools/compare-countries',
    '/tools/aid-calculator', '/tools/timeline-explorer',
    '/foreign-aid/countries', '/operations', '/sanctions', '/states',
    '/how-much-does-us-spend-on-military', '/iran-war-2026',
    '/largest-defense-contractors', '/us-foreign-aid-by-country',
    '/us-military-bases-around-the-world',
    '/drone-strikes', '/war-votes', '/global-spending',
    '/arms-sales/countries',
    '/veterans/va-spending', '/veterans/disability-claims',
    '/cost-of-f35',
    '/share',
    '/how-much-did-ww2-cost',
    '/how-many-us-soldiers-died-in-korea',
    '/us-military-budget-2026',
    '/how-much-does-the-us-spend-on-nuclear-weapons',
    '/how-many-wars-is-the-us-in-right-now',
    '/us-military-deaths-by-war',
    '/cost-of-war-by-president',
    '/compare/us-vs-china-military-spending',
    '/compare/iraq-vs-afghanistan-cost',
    '/compare/us-vs-russia-military',
    '/compare/all-wars-cost',
    '/how-much-did-the-iraq-war-cost',
    '/how-much-did-the-afghanistan-war-cost',
    '/how-many-died-in-the-vietnam-war',
    '/how-many-wars-has-the-us-been-in',
    '/how-many-us-military-bases-overseas',
    '/how-much-does-the-us-spend-on-military',
    '/cost-of-war-on-terror',
    '/pentagon-budget-breakdown',
    '/us-military-spending-vs-other-countries',
    '/defense-budget-explained',
    '/tools/hormuz-calculator',
    '/tools/iran-vs-iraq',
    '/tools/draft-simulator',
    '/tools/inflation-calculator',
    '/tools/war-quiz-hard',
    '/tools/state-impact',
    // Missing conflict pages
    '/grenada', '/panama', '/kosovo', '/libya-2011',
    // Iran war pages
    '/iran-destruction', '/iran-war-day-by-day', '/iran-war-vs-spending',
    '/analysis/iran-war-casualties', '/analysis/iran-war-no-authorization',
    '/analysis/iran-war-world-impact', '/analysis/lebanon-war-2026',
    '/analysis/oil-price-shock-2026', '/analysis/civilian-toll-iran-2026',
    // Perspective pages
    '/veterans-voices', '/the-other-side', '/global-reactions', '/media-coverage',
    // Money/explore pages
    '/congress-and-war', '/war-profiteers', '/weapons-exposed', '/the-receipt',
    '/war-calendar', '/cost-per-kill', '/private-war', '/allied-costs',
    // Additional analysis pages
    '/analysis/defense-contractors-exposed', '/analysis/hormuz-economic-impact',
    '/analysis/how-many-us-soldiers-died', '/analysis/if-we-stopped-today',
    '/analysis/military-spending-vs-education', '/analysis/nuclear-weapons-cost',
    '/analysis/true-cost-of-war-on-terror', '/analysis/us-military-bases-worldwide',
    '/analysis/us-military-budget-explained', '/analysis/veteran-suicide-crisis',
    // SEO landing pages
    '/how-much-does-a-fighter-jet-cost', '/how-much-does-a-tank-cost',
    '/how-much-does-an-aircraft-carrier-cost', '/how-much-does-a-bomber-cost',
    '/how-much-does-a-drone-cost', '/how-much-does-a-missile-cost',
    '/how-much-does-a-nuke-cost', '/how-much-does-a-submarine-cost',
    // Misc missing pages
    '/military-families-impact', '/explorer', '/embeds',
    '/embed/civilian-toll', '/embed/deaths-by-war', '/embed/iran-casualties',
    '/embed/iran-cost-ticker', '/embed/spending-timeline',
    '/embed/war-cost-ticker', '/embed/war-costs',
    // President sub-pages
    '/presidents/biden-wars', '/presidents/bush-wars', '/presidents/fdr-wars',
    '/presidents/lbj-wars', '/presidents/nixon-wars', '/presidents/obama-wars',
    '/presidents/reagan-wars', '/presidents/trump-wars',
  ]

  const iranRoutes = ['/iran-war-2026', '/analysis/iran-2026', '/analysis/iran-cost-per-second', '/analysis/iran-civilian-cost', '/analysis/iran-day-by-day', '/analysis/iran-regional-war', '/analysis/iran-russia-shadow-war', '/analysis/iran-vs-iraq-war', '/analysis/iran-war-cost-breakdown', '/analysis/hormuz-crisis', '/analysis/lebanon-burns', '/analysis/cost-of-iran']

  const entries: MetadataRoute.Sitemap = staticRoutes.map(route => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/iran-war-2026' || iranRoutes.includes(route) ? 'daily' : route === '' ? 'weekly' : route.startsWith('/analysis') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/iran-war-2026' ? 0.9 : route.startsWith('/analysis') ? 0.8 : route.startsWith('/tools') ? 0.7 : 0.6,
  }))

  // Conflict pages
  conflicts.forEach((c: any) => {
    entries.push({ url: `${base}/conflicts/${c.id}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 })
  })

  // Era pages
  const eras = [...new Set(conflicts.map((c: any) => c.era))] as string[]
  eras.forEach(era => {
    entries.push({ url: `${base}/eras/${slugify(era)}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
  })

  // President pages
  presidents.forEach((p: any) => {
    entries.push({ url: `${base}/presidents/${slugify(p.name)}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
  })

  // Country pages — generated from country-profiles-index.json below (lines ~300+)
  // Removed: dynamic country set from conflicts/aid/arms/presence that included
  // non-state actors (Taliban, Confederate States, etc.) without profile pages

  // Region pages
  const regions = ['middle-east', 'europe', 'east-asia', 'africa', 'central-america', 'caribbean', 'south-america', 'southeast-asia', 'central-asia', 'pacific']
  regions.forEach(r => {
    entries.push({ url: `${base}/regions/${r}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 })
  })

  // Decade pages
  const decades = ['1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s']
  decades.forEach(d => {
    entries.push({ url: `${base}/decades/${d}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 })
  })

  // Yearly spending pages (1949-2024)
  const yearlySpending = loadData('yearly-spending.json')
  yearlySpending.forEach((y: any) => {
    entries.push({ url: `${base}/spending/${y.year}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 })
  })

  // New listing pages
  const newListingPages = ['/drone-strikes', '/war-votes', '/global-spending', '/arms-sales/countries']
  newListingPages.forEach(route => {
    entries.push({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
  })

  // Drone strike country pages
  try {
    const droneData = loadData('drone-strikes.json')
    droneData.countries.forEach((c: any) => {
      entries.push({ url: `${base}/drone-strikes/${c.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
    })
  } catch {}

  // Arms sales country pages
  try {
    const armsCountries = loadData('arms-sales-countries.json')
    armsCountries.forEach((c: any) => {
      entries.push({ url: `${base}/arms-sales/${c.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 })
    })
  } catch {}

  // War vote pages
  try {
    const warVotes = loadData('war-votes.json')
    warVotes.forEach((v: any) => {
      entries.push({ url: `${base}/war-votes/${v.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
    })
  } catch {}

  // Veterans by war pages
  try {
    const veterans = loadData('veterans-by-war.json')
    veterans.forEach((v: any) => {
      entries.push({ url: `${base}/veterans/${v.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
    })
  } catch {}

  // State military footprint pages
  try {
    const stateIndex = loadData('state-military-index.json')
    entries.push({ url: `${base}/states`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
    stateIndex.forEach((s: any) => {
      entries.push({ url: `${base}/states/${s.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 })
    })
  } catch {}

  // Base detail pages
  try {
    const baseIndex = loadData('base-index.json')
    baseIndex.forEach((b: any) => {
      entries.push({ url: `${base}/bases/${b.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 })
    })
  } catch {}

  // Aid country pages
  try {
    const aidCountries = loadData('aid-countries-index.json')
    entries.push({ url: `${base}/foreign-aid/countries`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
    aidCountries.forEach((c: any) => {
      entries.push({ url: `${base}/foreign-aid/${c.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
    })
  } catch {}

  // New tool pages
  const toolPages = ['/tools/compare-countries', '/tools/aid-calculator', '/tools/timeline-explorer', '/tools/budget-simulator']
  toolPages.forEach(route => {
    entries.push({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
  })

  // Country profile pages
  try {
    const countryProfiles = loadData('country-profiles-index.json')
    countryProfiles.forEach((c: any) => {
      entries.push({ url: `${base}/countries/${c.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
    })
  } catch {}

  // Operations pages
  try {
    const operations = loadData('operations.json')
    entries.push({ url: `${base}/operations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
    operations.forEach((o: any) => {
      entries.push({ url: `${base}/operations/${o.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
    })
  } catch {}

  // Sanctions pages
  try {
    const sanctions = loadData('sanctions.json')
    entries.push({ url: `${base}/sanctions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
    sanctions.forEach((s: any) => {
      entries.push({ url: `${base}/sanctions/${s.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
    })
  } catch {}

  // Weapon detail pages
  try {
    const weapons = loadData('weapons.json')
    weapons.forEach((w: any) => {
      entries.push({ url: `${base}/weapons/${w.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 })
    })
  } catch {}

  return entries
}
