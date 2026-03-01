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
    '/dashboard', '/search', '/downloads',
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
    '/about', '/methodology', '/faq', '/sources',
    '/war-clock', '/tools/tax-receipt', '/tools/jobs-calculator',
    '/cost-per-life', '/presidents', '/countries', '/decades',
    '/us-military-spending', '/cost-of-war', '/us-wars-list',
    '/veteran-suicide', '/defense-budget',
    '/nuclear', '/veterans', '/intelligence', '/modern-tactics',
    '/bases/directory', '/bases/countries', '/bases/states',
    '/weapons', '/contractors/directory',
  ]

  const entries: MetadataRoute.Sitemap = staticRoutes.map(route => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/analysis') ? 0.8 : 0.7,
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

  // Country pages
  const countries = new Set<string>()
  conflicts.forEach((c: any) => c.countries?.forEach((co: string) => countries.add(co)))
  aid.topRecipients?.forEach((r: any) => countries.add(r.country))
  arms.topBuyers?.forEach((b: any) => countries.add(b.country))
  presence.topDeployments?.forEach((d: any) => countries.add(d.country))
  countries.forEach(country => {
    entries.push({ url: `${base}/countries/${slugify(country)}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 })
  })

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

  // Base detail pages
  try {
    const baseIndex = loadData('base-index.json')
    baseIndex.forEach((b: any) => {
      entries.push({ url: `${base}/bases/${b.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 })
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
