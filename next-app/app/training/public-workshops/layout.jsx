export const metadata = {
  title: 'Public Workshops',
  description: 'Register for upcoming Agile certification workshops. Live, instructor-led sessions for Scrum, SAFe, and Leadership certifications. Virtual and in-person.',
  openGraph: {
    title: 'Public Agile Workshops | Agile Velocity',
    description: 'Register for upcoming certification workshops. Live, instructor-led Scrum, SAFe, and Leadership training.',
    images: [
      {
        url: 'https://www.agilevelocity.com/images/og/workshops-og.png',
        width: 1200,
        height: 630,
        alt: 'Public Agile Workshops',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Public Agile Workshops | Agile Velocity',
    description: 'Register for upcoming certification workshops. Live, instructor-led training.',
    images: ['https://www.agilevelocity.com/images/og/workshops-og.png'],
  },
}

export default function PublicWorkshopsLayout({ children }) {
  return children
}
