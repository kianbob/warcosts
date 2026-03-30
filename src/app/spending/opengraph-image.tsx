import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        width: '100%', height: '100%',
        background: 'linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)',
        fontFamily: 'serif', color: 'white', padding: 60,
      }}>
        <div style={{ fontSize: 28, color: '#dc2626', fontWeight: 700, marginBottom: 20 }}>warcosts.org</div>
        <div style={{ fontSize: 80, fontWeight: 700, color: '#dc2626', textAlign: 'center' }}>$886 Billion</div>
        <div style={{ fontSize: 36, fontWeight: 700, marginTop: 10 }}>Per Year</div>
        <div style={{ display: 'flex', gap: 30, marginTop: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>$2.4B</div>
            <div style={{ fontSize: 16, color: '#a8a29e' }}>Per Day</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>$100M</div>
            <div style={{ fontSize: 16, color: '#a8a29e' }}>Per Hour</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>$1.7M</div>
            <div style={{ fontSize: 16, color: '#a8a29e' }}>Per Minute</div>
          </div>
        </div>
        <div style={{ fontSize: 20, color: '#a8a29e', marginTop: 30 }}>Where your tax dollars go — U.S. military spending</div>
      </div>
    ),
    { ...size }
  )
}
