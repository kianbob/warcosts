'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface WarEvent {
  title: string
  date: string
  conflictId: string
  conflictName: string
  year: number
}

export default function ThisDayInWarHistory() {
  const [events, setEvents] = useState<WarEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTodayEvents() {
      try {
        const response = await fetch('/data/conflicts.json')
        const conflicts = await response.json()
        
        const today = new Date()
        const todayMonth = today.getMonth() + 1 // 0-indexed to 1-indexed
        const todayDay = today.getDate()
        
        const todayEvents: WarEvent[] = []
        
        conflicts.forEach((conflict: any) => {
          if (conflict.keyEvents) {
            conflict.keyEvents.forEach((event: string) => {
              // Try to extract dates from event strings
              const dateMatch = event.match(/\(([^)]+)\)/)
              if (dateMatch) {
                const dateStr = dateMatch[1]
                
                // Parse various date formats
                let eventDate: Date | null = null
                
                // Handle formats like "April 19, 1775", "December 25, 1776", "September-October 1777"
                if (dateStr.includes('-')) {
                  // Range dates like "September-October 1777" - take first month
                  const parts = dateStr.split('-')
                  const firstPart = parts[0].trim()
                  eventDate = parseEventDate(firstPart)
                } else {
                  eventDate = parseEventDate(dateStr)
                }
                
                if (eventDate) {
                  const eventMonth = eventDate.getMonth() + 1
                  const eventDay = eventDate.getDate()
                  
                  // Check if within 3 days of today (to handle leap years and month boundaries)
                  const dayDiff = Math.abs(
                    (todayMonth === eventMonth ? 0 : 30 * (todayMonth - eventMonth)) + 
                    (todayDay - eventDay)
                  )
                  
                  if (dayDiff <= 3 || 
                      (todayMonth === eventMonth && Math.abs(todayDay - eventDay) <= 3) ||
                      (todayMonth === eventMonth && todayDay === eventDay)) {
                    
                    const title = event.split(' - ')[0].replace(/\s*\([^)]*\)\s*/, '').trim()
                    
                    todayEvents.push({
                      title,
                      date: dateStr,
                      conflictId: conflict.id,
                      conflictName: conflict.shortName || conflict.name,
                      year: eventDate.getFullYear()
                    })
                  }
                }
              }
            })
          }
        })
        
        // Sort by year and take top 3
        todayEvents.sort((a, b) => b.year - a.year)
        setEvents(todayEvents.slice(0, 3))
        setLoading(false)
      } catch (error) {
        console.error('Error loading war history events:', error)
        setLoading(false)
      }
    }
    
    loadTodayEvents()
  }, [])
  
  if (loading || events.length === 0) {
    return null
  }

  return (
    <div className="bg-stone-100 rounded-lg border p-4 mb-8">
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 flex items-center gap-2">
        📅 This Day in War History
      </h3>
      <div className="space-y-3">
        {events.map((event, i) => (
          <div key={i} className="border-l-2 border-red-500 pl-3">
            <div className="text-xs text-stone-500 font-semibold">{event.date}</div>
            <div className="font-semibold text-sm">{event.title}</div>
            <div className="text-xs text-stone-600">
              <Link 
                href={`/conflicts/${event.conflictId}`}
                className="text-primary hover:underline"
              >
                {event.conflictName}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function parseEventDate(dateStr: string): Date | null {
  try {
    // Handle formats like "April 19, 1775", "July 4, 1776"
    const fullDateMatch = dateStr.match(/(\w+)\s+(\d{1,2}),?\s+(\d{4})/)
    if (fullDateMatch) {
      const [_, monthName, day, year] = fullDateMatch
      const month = getMonthNumber(monthName)
      if (month !== -1) {
        return new Date(parseInt(year), month - 1, parseInt(day))
      }
    }
    
    // Handle formats like "September 1777" (just month and year)
    const monthYearMatch = dateStr.match(/(\w+)\s+(\d{4})/)
    if (monthYearMatch) {
      const [_, monthName, year] = monthYearMatch
      const month = getMonthNumber(monthName)
      if (month !== -1) {
        return new Date(parseInt(year), month - 1, 1)
      }
    }
    
    return null
  } catch {
    return null
  }
}

function getMonthNumber(monthName: string): number {
  const months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ]
  return months.indexOf(monthName.toLowerCase()) + 1
}