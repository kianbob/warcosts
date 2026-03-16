import Link from 'next/link'

type Item = { label: string; href?: string }

export default function Breadcrumbs({ items, dark }: { items: Item[]; dark?: boolean }) {
  return (
    <nav className={`text-sm mb-4 flex items-center gap-2 flex-wrap ${dark ? 'text-stone-400' : 'text-stone-600'}`}>
      <Link href="/" className={dark ? 'hover:text-white' : 'hover:text-red-700'}>Home</Link>
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
