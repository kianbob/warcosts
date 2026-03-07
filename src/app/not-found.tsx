import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4 max-w-2xl">
        <h1 className="font-[family-name:var(--font-heading)] text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted mb-8">This page doesn&apos;t exist — unlike the $11.3 trillion we spent on wars.</p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link href="/" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition">Home</Link>
          <Link href="/conflicts" className="border border-stone-300 px-6 py-3 rounded-lg font-semibold hover:bg-stone-50 transition">All Conflicts</Link>
          <Link href="/search" className="border border-stone-300 px-6 py-3 rounded-lg font-semibold hover:bg-stone-50 transition">Search</Link>
        </div>

        <div className="text-left bg-stone-50 rounded-xl border p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Popular Pages</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <Link href="/iran-war-2026" className="text-red-700 hover:underline">🔴 Iran War 2026 — Live Tracker</Link>
            <Link href="/analysis/iran-2026" className="text-red-700 hover:underline">Iran War: Full Analysis</Link>
            <Link href="/analysis/war-on-terror" className="text-red-700 hover:underline">War on Terror: $8 Trillion</Link>
            <Link href="/spending" className="text-red-700 hover:underline">Military Spending Data</Link>
            <Link href="/casualties" className="text-red-700 hover:underline">Casualty Data</Link>
            <Link href="/analysis" className="text-red-700 hover:underline">All 67 Analysis Articles</Link>
            <Link href="/tools/tax-receipt" className="text-red-700 hover:underline">Your Tax Receipt</Link>
            <Link href="/dashboard" className="text-red-700 hover:underline">Dashboard</Link>
            <Link href="/timeline" className="text-red-700 hover:underline">Timeline</Link>
            <Link href="/bases" className="text-red-700 hover:underline">750+ Overseas Bases</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
