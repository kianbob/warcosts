'use client'
import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 bg-red-800 text-white rounded-full w-10 h-10 shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center"
      aria-label="Back to top"
    >↑</button>
  )
}
