import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-[family-name:var(--font-heading)] text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted mb-8">This page doesn&apos;t exist — unlike the $11.3 trillion we spent on wars.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition">Home</Link>
          <Link href="/conflicts" className="border border-stone-300 px-6 py-3 rounded-lg font-semibold hover:bg-stone-50 transition">All Conflicts</Link>
          <Link href="/search" className="border border-stone-300 px-6 py-3 rounded-lg font-semibold hover:bg-stone-50 transition">Search</Link>
        </div>
      </div>
    </div>
  )
}
