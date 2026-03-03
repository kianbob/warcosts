type Item = { label: string; href?: string }

export default function BreadcrumbSchema({ items }: { items: Item[] }) {
  const listItems = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.warcosts.org' },
    ...items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: item.label,
      ...(item.href ? { item: `https://www.warcosts.org${item.href}` } : {}),
    })),
  ]
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: listItems,
        }),
      }}
    />
  )
}
