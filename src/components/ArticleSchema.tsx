type Props = {
  title: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
}

export default function ArticleSchema({ title, description, url, datePublished = '2026-01-01', dateModified = '2026-03-06' }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `https://www.warcosts.org${url}`,
    datePublished,
    dateModified,
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
    isPartOf: { '@type': 'WebSite', name: 'WarCosts', url: 'https://www.warcosts.org' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
