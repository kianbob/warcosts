'use client'

const embeds = [
  {
    title: 'Military Spending Over Time',
    description: 'Interactive area chart of US military spending from 1949–2024, inflation-adjusted.',
    path: '/embed/spending-timeline',
    width: 800,
    height: 500,
  },
  {
    title: 'War Cost Comparison',
    description: 'Horizontal bar chart of the top 10 costliest US wars.',
    path: '/embed/war-costs',
    width: 800,
    height: 500,
  },
  {
    title: 'US Deaths by War',
    description: 'Horizontal bar chart of US military deaths across major conflicts.',
    path: '/embed/deaths-by-war',
    width: 800,
    height: 500,
  },
  {
    title: 'Iran War Cost Ticker',
    description: 'Live ticking counter showing the estimated cost of the 2026 Iran war in real time.',
    path: '/embed/iran-cost-ticker',
    width: 600,
    height: 400,
  },
  {
    title: 'Defense Budget Breakdown',
    description: 'Pie chart of how the US defense budget is allocated across branches and programs.',
    path: '/embed/spending-timeline',
    width: 800,
    height: 500,
  },
  {
    title: 'US Military Bases by Country',
    description: 'Bar chart showing countries hosting the most US military bases worldwide.',
    path: '/embed/war-costs',
    width: 800,
    height: 500,
  },
]

export default function EmbedsClient() {
  return (
    <div className="space-y-12">
      {embeds.map((embed, idx) => {
        const iframeCode = `<iframe src="https://www.warcosts.org${embed.path}" width="${embed.width}" height="${embed.height}" frameborder="0" style="border:none;max-width:100%;" loading="lazy" title="${embed.title}"></iframe>`
        return (
          <div key={idx} className="bg-stone-800/60 rounded-xl border border-stone-700 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-stone-100 font-[family-name:var(--font-heading)] mb-1">{embed.title}</h2>
              <p className="text-stone-400 text-sm mb-4">{embed.description}</p>
              <div className="rounded-lg overflow-hidden border border-stone-600 bg-white">
                <iframe
                  src={embed.path}
                  width="100%"
                  height={embed.height}
                  style={{ border: 'none' }}
                  loading="lazy"
                  title={embed.title}
                />
              </div>
            </div>
            <div className="bg-stone-900/50 px-6 py-4 border-t border-stone-700">
              <p className="text-xs text-stone-500 mb-2">Embed code:</p>
              <textarea
                readOnly
                value={iframeCode}
                rows={3}
                className="w-full bg-stone-950 text-stone-300 text-xs font-mono p-3 rounded border border-stone-700 resize-none focus:outline-none focus:border-red-500"
                onClick={(e) => (e.target as HTMLTextAreaElement).select()}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
