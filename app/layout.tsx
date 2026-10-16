import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Sweta Consultancy | Licensing & Compliance Support', template: '%s | Sweta Consultancy' },
  description: 'Independent licensing, registration and compliance consultancy serving Mumbai and surrounding regions.',
  generator: 'v0.app',
  openGraph: { title: 'Sweta Consultancy', description: 'Hassle-free licensing and compliance support for your business.', type: 'website' },
  icons: { icon: '/icon.svg' },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#0b2d4d', userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
