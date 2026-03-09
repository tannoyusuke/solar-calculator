import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const alt = 'Tryfunds Group'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    // Read the logo from the public directory
    const logoPath = join(process.cwd(), 'public', 'tryfunds-logo.png')
    const logoData = readFileSync(logoPath)

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#111624', // Tryfunds primary dark background
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src={`data:image/png;base64,${logoData.toString('base64')}`}
                    alt="Tryfunds Logo"
                    width="400"
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
