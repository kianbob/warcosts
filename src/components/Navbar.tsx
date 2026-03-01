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
      { label: 'Contractor Directory', href: '/contractors/directory' },
      { label: 'Weapons Systems', href: '/weapons' },
      { label: 'What Else Could This Buy?', href: '/opportunity-cost' },
      { label: '── Data Deep Dives ──', href: '/spending#data' },
      { label: 'Year-by-Year Spending', href: '/spending/2024' },
      { label: 'Global Comparison', href: '/global-spending' },
      { label: 'Arms Sales by Country', href: '/arms-sales/countries' },
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
      { label: 'Base Directory (1,500+)', href: '/bases/directory' },
      { label: 'Bases by Country', href: '/bases/countries' },
      { label: 'Bases by State', href: '/bases/states' },
      { label: 'Troop Deployments', href: '/deployments' },
      { label: 'Regime Changes', href: '/regime-changes' },
      { label: 'Intelligence Agencies', href: '/intelligence' },
      { label: 'Nuclear Weapons', href: '/nuclear' },
      { label: 'Modern Warfare', href: '/modern-tactics' },
      { label: 'Veterans Crisis', href: '/veterans' },
      { label: '── War & Peace ──', href: '/drone-strikes#section' },
      { label: 'Drone Strikes', href: '/drone-strikes' },
      { label: 'Congressional War Votes', href: '/war-votes' },
      { label: 'Veterans by War', href: '/veterans/world-war-ii' },
    ],
  },
  {
    label: 'Analysis',
    items: [
      { label: 'All Analysis →', href: '/analysis' },
      { label: '── Recent Conflicts ──', href: '/analysis#recent' },
      { label: 'Iran 2026: Undeclared War?', href: '/analysis/iran-2026' },
      { label: 'Israel Lobby & US Foreign Policy', href: '/analysis/israel-lobby' },
      { label: 'War on Terror: $8T Later', href: '/analysis/war-on-terror' },
      { label: 'Ukraine: $66.9B Proxy War', href: '/analysis/ukraine-proxy' },
      { label: 'The Forever Wars (AUMF)', href: '/analysis/forever-wars' },
      { label: '── Modern Warfare ──', href: '/analysis#modern' },
      { label: 'Cyber Warfare', href: '/analysis/cyber-warfare' },
      { label: 'Sanctions Warfare', href: '/analysis/sanctions-warfare' },
      { label: 'AI Weapons', href: '/analysis/ai-weapons' },
      { label: 'Shadow Wars (JSOC)', href: '/analysis/shadow-wars' },
      { label: 'Surveillance State', href: '/analysis/surveillance-state' },
      { label: 'Information Warfare', href: '/analysis/information-warfare' },
      { label: 'Space Warfare', href: '/analysis/space-warfare' },
      { label: 'Private Armies', href: '/analysis/private-armies' },
      { label: 'Hybrid Warfare', href: '/analysis/hybrid-warfare' },
      { label: 'Economic Warfare', href: '/analysis/economic-warfare' },
      { label: '── Deep Analysis ──', href: '/analysis#deep' },
      { label: 'Military-Industrial Complex', href: '/analysis/military-industrial-complex' },
      { label: 'Congressional Authority', href: '/analysis/congressional-authority' },
      { label: 'Blowback', href: '/analysis/blowback' },
      { label: 'The Human Cost', href: '/analysis/human-cost' },
      { label: 'Drone Wars', href: '/analysis/drone-wars' },
      { label: 'Empire of Bases', href: '/analysis/empire-of-bases' },
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
                      sub.label.startsWith('──') ? (
                        <div key={sub.label} className="px-4 py-1.5 text-xs text-stone-500 font-semibold uppercase tracking-wider border-t border-stone-700 mt-1 pt-2">
                          {sub.label.replace(/──/g, '').trim()}
                        </div>
                      ) : (
                        <Link key={sub.href} href={sub.href} className="block px-4 py-2 text-sm text-stone-300 hover:bg-stone-700 hover:text-white">
                          {sub.label}
                        </Link>
                      )
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
