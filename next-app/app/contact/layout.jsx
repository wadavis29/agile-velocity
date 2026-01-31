export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Agile Velocity. Schedule a 30-minute diagnostic call to discuss your transformation challenges. Austin, TX headquarters.',
  openGraph: {
    title: 'Contact Us | Agile Velocity',
    description: 'Schedule a 30-minute diagnostic call. No pitch, just help diagnosing what\'s not working in your transformation.',
    images: [
      {
        url: 'https://www.agilevelocity.com/images/og/contact-og.png',
        width: 1200,
        height: 630,
        alt: 'Contact Agile Velocity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Agile Velocity',
    description: 'Schedule a 30-minute diagnostic call. No pitch, just help diagnosing what\'s not working.',
    images: ['https://www.agilevelocity.com/images/og/contact-og.png'],
  },
}

export default function ContactLayout({ children }) {
  return children
}
