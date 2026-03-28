import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Operation Epic Fury: The Full Story'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0c0f1a 0%, #1a1e2e 100%)',
          padding: '60px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 24, color: '#9ca3af', marginBottom: 20, letterSpacing: 3, textTransform: 'uppercase' as const }}>
          Iran War 2026 — Deep Analysis
        </div>
        <div style={{ display: 'flex', fontSize: 68, fontWeight: 800, color: '#ffffff', marginBottom: 20, textAlign: 'center' as const }}>
          Operation Epic Fury
        </div>
        <div style={{ display: 'flex', fontSize: 42, color: '#dc2626', fontWeight: 700, marginBottom: 40 }}>
          The Full Story
        </div>
        <div style={{ display: 'flex', gap: 60 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 48, fontWeight: 700, color: '#dc2626' }}>Day 28</div>
            <div style={{ fontSize: 20, color: '#9ca3af' }}>And Counting</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 48, fontWeight: 700, color: '#dc2626' }}>$50B+</div>
            <div style={{ fontSize: 20, color: '#9ca3af' }}>Estimated Cost</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 48, fontWeight: 700, color: '#dc2626' }}>12</div>
            <div style={{ fontSize: 20, color: '#9ca3af' }}>Countries Involved</div>
          </div>
        </div>
        <div style={{ display: 'flex', position: 'absolute', bottom: 40, fontSize: 24, color: '#6b7280' }}>
          warcosts.org
        </div>
      </div>
    ),
    { ...size }
  )
}
