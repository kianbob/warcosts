export default function ArticleJsonLd({ title, description, slug }: { title: string; description: string; slug: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `https://www.warcosts.org/analysis/${slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'WarCosts',
      url: 'https://www.warcosts.org',
    },
    mainEntityOfPage: `https://www.warcosts.org/analysis/${slug}`,
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
