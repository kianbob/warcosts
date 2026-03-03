export default function LastUpdated({ date }: { date?: string }) {
  return (
    <p className="text-xs text-stone-500 bg-stone-100 inline-block px-3 py-1 rounded-full mb-4">
      📅 Last updated: {date || 'March 3, 2026'}
    </p>
  )
}
