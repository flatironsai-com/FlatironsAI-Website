import { ImageResponse } from 'next/og'

export const alt = 'Flatirons AI — Closed-loop AI, built with and trusted by banks'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          backgroundColor: '#070f1d',
          backgroundImage:
            'radial-gradient(800px 400px at 85% 0%, rgba(238,159,69,0.18), transparent 60%), radial-gradient(700px 400px at 10% 10%, rgba(61,107,244,0.25), transparent 55%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 32 32">
            <path d="M3 27 L10.5 5 L15 27 Z" fill="#EE9F45" />
            <path d="M11.5 27 L18 9.5 L22 27 Z" fill="#3D6BF4" />
            <path d="M19.5 27 L25.5 14 L29 27 Z" fill="#93B4FF" />
          </svg>
          <div style={{ display: 'flex', fontSize: 40, fontWeight: 700 }}>
            <span>Flatirons</span>
            <span style={{ color: '#F8BC6E', marginLeft: 12 }}>AI</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Closed-loop AI, built with and trusted by banks
          </div>
          <div style={{ fontSize: 30, color: '#9fb2cf', maxWidth: 900 }}>
            Institution in the Loop™ — answers in seconds, citations on everything, nothing
            leaves the loop.
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 24, color: '#6e87ae' }}>flatironsai.com</div>
      </div>
    ),
    { ...size },
  )
}
