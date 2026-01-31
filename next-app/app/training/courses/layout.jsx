export const metadata = {
  title: 'Course Catalog',
  description: '30+ hands-on Agile training courses across Scrum, SAFe, Leadership, and Kanban. Browse certifications and find the perfect course for your team.',
  openGraph: {
    title: 'Agile Training Course Catalog | Agile Velocity',
    description: '30+ hands-on workshops across Scrum, SAFe, Leadership, and Kanban. Interactive sessions led by practitioners.',
    images: [
      {
        url: 'https://www.agilevelocity.com/images/og/training-og.png',
        width: 1200,
        height: 630,
        alt: 'Agile Training Course Catalog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agile Training Course Catalog | Agile Velocity',
    description: '30+ hands-on workshops across Scrum, SAFe, Leadership, and Kanban.',
    images: ['https://www.agilevelocity.com/images/og/training-og.png'],
  },
}

export default function CoursesLayout({ children }) {
  return children
}
