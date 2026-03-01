import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Conflicts</h3>
          <ul className="space-y-2">
            <li><Link href="/timeline" className="hover:text-white">Timeline</Link></li>
            <li><Link href="/conflicts" className="hover:text-white">All Conflicts</Link></li>
            <li><Link href="/eras" className="hover:text-white">By Era</Link></li>
            <li><Link href="/covert" className="hover:text-white">Covert Operations</Link></li>
            <li><Link href="/casualties" className="hover:text-white">Casualty Data</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Money & Power</h3>
          <ul className="space-y-2">
            <li><Link href="/spending" className="hover:text-white">Military Spending</Link></li>
            <li><Link href="/foreign-aid" className="hover:text-white">Foreign Aid</Link></li>
            <li><Link href="/arms-sales" className="hover:text-white">Arms Sales</Link></li>
            <li><Link href="/contractors" className="hover:text-white">Defense Contractors</Link></li>
            <li><Link href="/opportunity-cost" className="hover:text-white">What Else Could This Buy?</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Empire</h3>
          <ul className="space-y-2">
            <li><Link href="/bases" className="hover:text-white">Overseas Bases</Link></li>
            <li><Link href="/deployments" className="hover:text-white">Troop Deployments</Link></li>
            <li><Link href="/regime-changes" className="hover:text-white">Regime Changes</Link></li>
            <li><Link href="/analysis" className="hover:text-white">Analysis</Link></li>
            <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
            <li><Link href="/search" className="hover:text-white">Search</Link></li>
            <li><Link href="/downloads" className="hover:text-white">Downloads</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Sister Sites</h3>
          <ul className="space-y-2">
            <li><a href="https://www.openmedicaid.org" className="hover:text-white">OpenMedicaid</a></li>
            <li><a href="https://www.openmedicare.us" className="hover:text-white">OpenMedicare</a></li>
            <li><a href="https://www.openspending.us" className="hover:text-white">OpenSpending</a></li>
            <li><a href="https://www.vaccinewatch.org" className="hover:text-white">VaccineWatch</a></li>
            <li><a href="https://www.opensubsidies.org" className="hover:text-white">OpenSubsidies</a></li>
            <li><a href="https://www.openimmigration.us" className="hover:text-white">OpenImmigration</a></li>
            <li><a href="https://www.openlobby.us" className="hover:text-white">OpenLobby</a></li>
            <li><a href="https://www.openfeds.org" className="hover:text-white">OpenFeds</a></li>
            <li><a href="https://thedataproject.ai" className="hover:text-white">TheDataProject.ai</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-800 py-6 text-center text-xs text-stone-500">
        <p>&ldquo;Of all the enemies to public liberty, war is perhaps the most to be dreaded.&rdquo; — James Madison</p>
        <p className="mt-1">A <a href="https://thedataproject.ai" className="text-red-500 hover:underline">TheDataProject.ai</a> platform · © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
