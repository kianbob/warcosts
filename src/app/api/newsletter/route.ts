import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const filePath = path.join(process.cwd(), 'data', 'newsletter-subscribers.json')
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

    let subscribers: { email: string; date: string }[] = []
    if (fs.existsSync(filePath)) {
      subscribers = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    }

    if (subscribers.some(s => s.email === email)) {
      return NextResponse.json({ message: 'Already subscribed' })
    }

    subscribers.push({ email, date: new Date().toISOString() })
    fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2))

    console.log(`[Newsletter] New subscriber: ${email}`)
    return NextResponse.json({ message: 'Subscribed' })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
