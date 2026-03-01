import { MetadataRoute } from 'next'
import { loadData } from '@/lib/server-utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.warcosts.org'
  const conflicts = loadData('conflicts.json')

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
    '/about', '/methodology', '/faq', '/sources',
    '/war-clock', '/tools/tax-receipt', '/tools/jobs-calculator',
    '/cost-per-life', '/presidents',
    '/us-military-spending', '/cost-of-war', '/us-wars-list',
    '/veteran-suicide', '/defense-budget',
  ]

  const entries: MetadataRoute.Sitemap = staticRoutes.map(route => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/analysis') ? 0.8 : 0.7,
  }))

  conflicts.forEach((c: any) => {
    entries.push({
      url: `${base}/conflicts/${c.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  return entries
}
