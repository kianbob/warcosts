import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'WarCosts — The Price of American Empire'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: '#1c1917', color: 'white', padding: '60px' }}>
        <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20, display: 'flex' }}>
          <span>War</span><span style={{ color: '#dc2626' }}>Costs</span>
        </div>
        <div style={{ fontSize: 32, color: '#a8a29e', marginBottom: 40, textAlign: 'center', display: 'flex' }}>
          The Price of American Empire
        </div>
        <div style={{ display: 'flex', gap: 60 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 48, fontWeight: 'bold', color: '#dc2626' }}>$11.3T</span>
            <span style={{ fontSize: 18, color: '#a8a29e' }}>Total Cost</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 48, fontWeight: 'bold', color: '#dc2626' }}>1,049,306</span>
            <span style={{ fontSize: 18, color: '#a8a29e' }}>Americans Killed</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 48, fontWeight: 'bold', color: '#dc2626' }}>5.2M+</span>
            <span style={{ fontSize: 18, color: '#a8a29e' }}>Civilians Killed</span>
          </div>
        </div>
        <div style={{ fontSize: 16, color: '#78716c', marginTop: 40, display: 'flex' }}>
          warcosts.org · A TheDataProject.ai Platform
        </div>
      </div>
    ),
    { ...size }
  )
}
