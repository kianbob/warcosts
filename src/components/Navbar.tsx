'use client'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'Timeline', href: '/timeline' },
  {
    label: 'Explore',
    items: [
      { label: 'All Conflicts', href: '/conflicts' },
      { label: 'By Era', href: '/eras' },
      { label: 'Covert Operations', href: '/covert' },
      { label: 'Casualty Data', href: '/casualties' },
    ],
  },
  {
    label: 'Money',
    items: [
      { label: 'Military Spending', href: '/spending' },
      { label: 'Foreign Aid', href: '/foreign-aid' },
      { label: 'Arms Sales', href: '/arms-sales' },
      { label: 'Defense Contractors', href: '/contractors' },
      { label: 'What Else Could This Buy?', href: '/opportunity-cost' },
    ],
  },
  {
    label: 'Empire',
    items: [
      { label: 'Overseas Bases', href: '/bases' },
      { label: 'Troop Deployments', href: '/deployments' },
      { label: 'Regime Changes', href: '/regime-changes' },
    ],
  },
  {
    label: 'Analysis',
    items: [
      { label: 'All Analysis', href: '/analysis' },
      { label: 'War on Terror', href: '/analysis/war-on-terror' },
      { label: 'Congressional Authority', href: '/analysis/congressional-authority' },
      { label: 'Blowback', href: '/analysis/blowback' },
      { label: 'The Military-Industrial Complex', href: '/analysis/military-industrial-complex' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'About OpenWar', href: '/about' },
      { label: 'Methodology', href: '/methodology' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Sources', href: '/sources' },
    ],
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  return (
    <nav className="bg-stone-900 text-white sticky top-0 z-50 border-b border-stone-700">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <Link href="/" className="text-xl font-bold font-[family-name:var(--font-heading)] text-red-500 hover:text-red-400 transition-colors">
          OpenWar
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            'items' in item && item.items ? (
              <div key={item.label} className="relative"
                onMouseEnter={() => setDropdown(item.label)}
                onMouseLeave={() => setDropdown(null)}>
                <button className="px-3 py-2 text-sm text-stone-300 hover:text-white rounded-lg hover:bg-stone-800 flex items-center gap-1">
                  {item.label} <span className="text-xs">▾</span>
                </button>
                {dropdown === item.label && (
                  <div className="absolute top-full left-0 bg-stone-800 shadow-lg rounded-lg border border-stone-700 py-1 min-w-[220px]">
                    {item.items!.map(sub => (
                      <Link key={sub.href} href={sub.href} className="block px-4 py-2 text-sm text-stone-300 hover:bg-stone-700 hover:text-white">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href!} className="px-3 py-2 text-sm text-stone-300 hover:text-white rounded-lg hover:bg-stone-800">
                {item.label}
              </Link>
            )
          ))}
        </div>

        <button className="lg:hidden p-2 text-stone-300" onClick={() => setOpen(!open)}>☰</button>
      </div>

      {open && (
        <div className="lg:hidden bg-stone-800 border-t border-stone-700 px-4 py-3 space-y-2">
          {navItems.map(item =>
            'items' in item && item.items ? item.items.map(sub => (
              <Link key={sub.href} href={sub.href} onClick={() => setOpen(false)} className="block py-1 text-sm text-stone-300">{sub.label}</Link>
            )) : (
              <Link key={item.href} href={item.href!} onClick={() => setOpen(false)} className="block py-1 text-sm text-stone-300">{item.label}</Link>
            )
          )}
        </div>
      )}
    </nav>
  )
}
