'use client'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'Modern Wars', href: '/modern-wars' },
  { label: 'War Clock', href: '/war-clock' },
  { label: 'Timeline', href: '/timeline' },
  {
    label: 'Explore',
    items: [
      { label: 'All Conflicts', href: '/conflicts' },
      { label: 'By Era', href: '/eras' },
      { label: 'Covert Operations', href: '/covert' },
      { label: 'Casualty Data', href: '/casualties' },
      { label: 'Cost Per Life', href: '/cost-per-life' },
      { label: 'Presidents at War', href: '/presidents' },
      { label: 'Countries', href: '/countries' },
      { label: 'Decades', href: '/decades' },
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
    label: 'Tools',
    items: [
      { label: 'Tax Receipt', href: '/tools/tax-receipt' },
      { label: 'Jobs Calculator', href: '/tools/jobs-calculator' },
      { label: 'Cost Calculator', href: '/tools/cost-calculator' },
    ],
  },
  {
    label: 'Empire',
    items: [
      { label: 'Overseas Bases', href: '/bases' },
      { label: 'Troop Deployments', href: '/deployments' },
      { label: 'Regime Changes', href: '/regime-changes' },
      { label: 'Intelligence Agencies', href: '/intelligence' },
      { label: 'Nuclear Weapons', href: '/nuclear' },
      { label: 'Modern Warfare', href: '/modern-tactics' },
      { label: 'Veterans Crisis', href: '/veterans' },
    ],
  },
  {
    label: 'Analysis',
    items: [
      { label: 'All Analysis', href: '/analysis' },
      { label: 'Iran 2026: Undeclared War?', href: '/analysis/iran-2026' },
      { label: 'The Forever Wars (AUMF)', href: '/analysis/forever-wars' },
      { label: 'Ukraine: $66.9B Proxy War', href: '/analysis/ukraine-proxy' },
      { label: 'War on Terror', href: '/analysis/war-on-terror' },
      { label: 'Congressional Authority', href: '/analysis/congressional-authority' },
      { label: 'Blowback', href: '/analysis/blowback' },
      { label: 'The Military-Industrial Complex', href: '/analysis/military-industrial-complex' },
      { label: 'The Human Cost', href: '/analysis/human-cost' },
      { label: 'Empire of Bases', href: '/analysis/empire-of-bases' },
      { label: 'The Price of a Life', href: '/analysis/cost-per-life' },
      { label: 'Presidents at War', href: '/analysis/presidents-at-war' },
      { label: 'The Aftermath', href: '/analysis/the-aftermath' },
      { label: 'Pentagon & Climate', href: '/analysis/pentagon-climate' },
      { label: 'Jobs vs War', href: '/analysis/jobs-vs-war' },
      { label: 'The 469 Interventions', href: '/analysis/the-469' },
      { label: 'Drone Wars', href: '/analysis/drone-wars' },
      { label: 'Silicon Valley & Pentagon', href: '/analysis/silicon-valley-pentagon' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'About WarCosts', href: '/about' },
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Methodology', href: '/methodology' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Sources', href: '/sources' },
      { label: 'Downloads', href: '/downloads' },
      { label: 'Search', href: '/search' },
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
          WarCosts
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
