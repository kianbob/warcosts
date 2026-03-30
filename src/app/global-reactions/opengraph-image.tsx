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
        <div style={{ fontSize: 60, fontWeight: 700, textAlign: 'center', maxWidth: 900, lineHeight: 1.2 }}>The World Is Watching</div>
        <div style={{ display: 'flex', gap: 60, marginTop: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 44, fontWeight: 700, color: '#dc2626' }}>87+</div>
            <div style={{ fontSize: 20, color: '#a8a29e' }}>Countries Responding</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 44, fontWeight: 700, color: '#dc2626' }}>12M+</div>
            <div style={{ fontSize: 20, color: '#a8a29e' }}>Protesters</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 44, fontWeight: 700, color: '#dc2626' }}>3</div>
            <div style={{ fontSize: 20, color: '#a8a29e' }}>UN Resolutions</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
