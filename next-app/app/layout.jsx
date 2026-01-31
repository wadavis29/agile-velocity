import { Inter, Bebas_Neue } from 'next/font/google'
import TopBar from '@/components/layout/TopBar'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { OrganizationSchema, WebSiteSchema } from '@/components/seo/JsonLd'
import './globals.css'

// Optimized font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
  weight: '400',
})

export const metadata = {
  metadataBase: new URL('https://agilevelocity.com'),
  title: {
    default: 'Agile Velocity | We Restart Stalled Transformations',
    template: '%s | Agile Velocity',
  },
  description: 'Path to Agility framework guides your transformation from chaos to predictable delivery. 15+ years helping Fortune 500 companies achieve speed, quality, and predictability.',
  keywords: ['enterprise transformation', 'agile transformation', 'Path to Agility', 'business transformation', 'enterprise agility', 'agile coaching'],
  authors: [{ name: 'Agile Velocity' }],
  creator: 'Agile Velocity',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agilevelocity.com',
    siteName: 'Agile Velocity',
    title: 'Agile Velocity | We Restart Stalled Transformations',
    description: 'Path to Agility framework guides your transformation from chaos to predictable delivery.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agile Velocity | We Restart Stalled Transformations',
    description: 'Path to Agility framework guides your transformation from chaos to predictable delivery.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <script src="https://kit.fontawesome.com/0c6553beb3.js" crossOrigin="anonymous" async />
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className={inter.className}>
        <TopBar />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
