export function fmtMoney(n: number): string {
  if (n == null || isNaN(n)) return '$0'
  const clean = (v: number) => parseFloat(v.toFixed(1)).toString()
  if (n >= 1e12) return `$${clean(n / 1e12)}T`
  if (n >= 1e9) return `$${clean(n / 1e9)}B`
  if (n >= 1e6) return `$${clean(n / 1e6)}M`
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`
  return `$${n.toFixed(0)}`
}

export function fmt(n: number): string {
  return n.toLocaleString()
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export function fmtPct(n: number): string {
  return n.toFixed(1) + '%'
}
