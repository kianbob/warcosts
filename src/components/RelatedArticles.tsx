import Link from 'next/link'

type Article = { slug: string; title: string; desc: string }

export default function RelatedArticles({ articles }: { articles: Article[] }) {
  if (!articles.length) return null
  return (
    <div className="mt-12 pt-8 border-t border-stone-200">
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Articles</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {articles.map(a => (
          <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-stone-50 rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-[family-name:var(--font-heading)] font-bold mb-1">{a.title}</h3>
            <p className="text-sm text-stone-500">{a.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
