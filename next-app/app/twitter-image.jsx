import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Agile Velocity - We Restart Stalled Transformations'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F1419',
          backgroundImage: 'linear-gradient(135deg, #0F1419 0%, #0A0D10 100%)',
        }}
      >
        {/* Gold accent line at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #FFBE62 0%, #FF8C42 100%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
          }}
        >
          {/* Company name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-2px',
              marginBottom: '24px',
            }}
          >
            AGILE VELOCITY
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              color: '#FFBE62',
              marginBottom: '40px',
              fontWeight: 500,
            }}
          >
            We Restart Stalled Transformations
          </div>

          {/* Divider */}
          <div
            style={{
              width: '120px',
              height: '3px',
              background: 'linear-gradient(90deg, #FFBE62 0%, #FF8C42 100%)',
              marginBottom: '40px',
            }}
          />

          {/* Framework name */}
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span>Powered by</span>
            <span style={{ color: '#FFBE62', fontWeight: 600 }}>Path to Agility®</span>
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: 20,
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          www.agilevelocity.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
