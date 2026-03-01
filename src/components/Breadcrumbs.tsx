import Link from 'next/link'

type Item = { label: string; href?: string }

export default function Breadcrumbs({ items }: { items: Item[] }) {
  return (
    <nav className="text-sm text-stone-500 mb-4 flex items-center gap-2 flex-wrap">
      <Link href="/" className="hover:text-red-700">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span>/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-red-700">{item.label}</Link>
          ) : (
            <span className="text-stone-700">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
