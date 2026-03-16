'use client'

import { useState } from 'react'

export default function NewsletterSignup({ variant = 'default' }: { variant?: 'default' | 'dark' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const isDark = variant === 'dark'

  if (status === 'success') {
    return (
      <div className={`rounded-lg p-6 text-center ${isDark ? 'bg-white/10 border border-white/20' : 'bg-green-50 border border-green-200'}`}>
        <p className={`text-lg font-bold ${isDark ? 'text-green-400' : 'text-green-700'}`}>
          You&apos;re in! ✓
        </p>
        <p className={`text-sm mt-1 ${isDark ? 'text-stone-400' : 'text-green-600'}`}>
          We&apos;ll send updates on US war spending. No spam, ever.
        </p>
      </div>
    )
  }

  return (
    <div className={`rounded-lg p-6 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-red-50 border border-red-200'}`}>
      <h3 className={`font-[family-name:var(--font-heading)] text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-stone-900'}`}>
        Stay Informed
      </h3>
      <p className={`text-sm mb-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
        Get updates on US war spending, new analysis, and data releases. No spam.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className={`flex-1 px-4 py-2 rounded-lg text-sm border ${
            isDark
              ? 'bg-white/10 border-white/20 text-white placeholder-stone-500'
              : 'bg-white border-stone-300 text-stone-900 placeholder-stone-400'
          } focus:outline-none focus:ring-2 focus:ring-red-500`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition disabled:opacity-50"
        >
          {status === 'loading' ? '...' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-500 text-xs mt-2">Something went wrong. Please try again.</p>
      )}
    </div>
  )
}
