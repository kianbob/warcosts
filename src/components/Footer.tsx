import Link from 'next/link'

const sisterSites = [
  { name: 'WarCosts', url: 'https://www.warcosts.org' },
  { name: 'OpenLobby', url: 'https://www.openlobby.us' },
  { name: 'OpenImmigration', url: 'https://www.openimmigration.us' },
  { name: 'OpenMedicaid', url: 'https://www.openmedicaid.org' },
  { name: 'OpenMedicare', url: 'https://www.openmedicare.us' },
  { name: 'OpenSpending', url: 'https://www.openspending.us' },
  { name: 'OpenFeds', url: 'https://www.openfeds.org' },
  { name: 'VaccineWatch', url: 'https://www.vaccinewatch.org' },
  { name: 'OpenCrime', url: 'https://www.opencrime.us' },
  { name: 'OpenPrescriber', url: 'https://www.openprescriber.org' },
  { name: 'TheDataProject', url: 'https://thedataproject.ai' },
  { name: 'TariffTax', url: 'https://www.tarifftax.org' },
  { name: 'SPACGraveyard', url: 'https://www.spacgraveyard.com' },
  { name: 'AI Exposure', url: 'https://www.aiexposure.org' },
  { name: 'ShelterScope', url: 'https://www.shelterscope.com' },
  { name: 'GiveScope', url: 'https://www.givescope.com' },
]

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
        {/* Explore */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Explore</h3>
          <ul className="space-y-2">
            <li><Link href="/conflicts" className="hover:text-white">All Wars</Link></li>
            <li><Link href="/spending" className="hover:text-white">Military Spending</Link></li>
            <li><Link href="/bases" className="hover:text-white">Overseas Bases</Link></li>
            <li><Link href="/timeline" className="hover:text-white">Timeline</Link></li>
            <li><Link href="/casualties" className="hover:text-white">Casualty Data</Link></li>
            <li><Link href="/modern-wars" className="hover:text-white">Modern Wars</Link></li>
            <li><Link href="/war-clock" className="hover:text-white">War Clock</Link></li>
          </ul>
        </div>

        {/* Iran 2026 */}
        <div>
          <h3 className="text-red-500 font-semibold mb-3 text-sm uppercase tracking-wider">🔴 Iran 2026</h3>
          <ul className="space-y-2">
            <li><Link href="/iran-war-2026" className="hover:text-white">Live Tracker</Link></li>
            <li><Link href="/iran-war-2026/day-by-day" className="hover:text-white">Day-by-Day</Link></li>
            <li><Link href="/iran-war-2026/cost" className="hover:text-white">Cost Tracker</Link></li>
            <li><Link href="/iran-war-2026/casualties" className="hover:text-white">Casualties</Link></li>
            <li><Link href="/analysis/iran-2026" className="hover:text-white">Analysis</Link></li>
            <li><Link href="/analysis/iran-cost-per-second" className="hover:text-white">$28K/Second</Link></li>
          </ul>
        </div>

        {/* Analysis */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Analysis</h3>
          <ul className="space-y-2">
            <li><Link href="/analysis" className="hover:text-white">All Analysis</Link></li>
            <li><Link href="/analysis/war-on-terror" className="hover:text-white">War on Terror</Link></li>
            <li><Link href="/analysis/military-industrial-complex" className="hover:text-white">Military-Industrial Complex</Link></li>
            <li><Link href="/analysis/human-cost" className="hover:text-white">The Human Cost</Link></li>
            <li><Link href="/analysis/forever-wars" className="hover:text-white">Forever Wars</Link></li>
            <li><Link href="/analysis/blowback" className="hover:text-white">Blowback</Link></li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Tools</h3>
          <ul className="space-y-2">
            <li><Link href="/tools/tax-receipt" className="hover:text-white">Tax Receipt</Link></li>
            <li><Link href="/tools/jobs-calculator" className="hover:text-white">Jobs Calculator</Link></li>
            <li><Link href="/tools/cost-calculator" className="hover:text-white">Cost Calculator</Link></li>
            <li><Link href="/tools/compare-countries" className="hover:text-white">Compare Countries</Link></li>
            <li><Link href="/tools/aid-calculator" className="hover:text-white">Aid Calculator</Link></li>
            <li><Link href="/opportunity-cost" className="hover:text-white">Opportunity Cost</Link></li>
            <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
          </ul>
        </div>

        {/* Data */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Data</h3>
          <ul className="space-y-2">
            <li><Link href="/contractors" className="hover:text-white">Defense Contractors</Link></li>
            <li><Link href="/arms-sales" className="hover:text-white">Arms Sales</Link></li>
            <li><Link href="/foreign-aid" className="hover:text-white">Foreign Aid</Link></li>
            <li><Link href="/pentagon-audit" className="hover:text-white">Pentagon Audit</Link></li>
            <li><Link href="/deployments" className="hover:text-white">Troop Deployments</Link></li>
            <li><Link href="/downloads" className="hover:text-white">Downloads</Link></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">About</h3>
          <ul className="space-y-2">
            <li><Link href="/methodology" className="hover:text-white">Methodology</Link></li>
            <li><Link href="/sources" className="hover:text-white">Sources</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/glossary" className="hover:text-white">Glossary</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/search" className="hover:text-white">Search</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
          </ul>
        </div>
      </div>

      {/* Sister Sites */}
      <div className="border-t border-stone-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs text-stone-500 uppercase tracking-wider mb-3 text-center">A TheDataProject.ai Network</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs">
            {sisterSites.map(s => (
              <a key={s.url} href={s.url} className="text-stone-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800 py-6 text-center text-xs text-stone-500">
        <p className="mb-1">2,300+ pages of data · Last updated: March 2026</p>
        <p>&ldquo;Of all the enemies to public liberty, war is perhaps the most to be dreaded.&rdquo; — James Madison</p>
        <p className="mt-1">
          Contact: <a href="mailto:info@thedataproject.ai" className="text-red-500 hover:underline">info@thedataproject.ai</a>
          {' · '}A <a href="https://thedataproject.ai" className="text-red-500 hover:underline">TheDataProject.ai</a> platform · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
