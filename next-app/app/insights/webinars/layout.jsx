export const metadata = {
  title: 'Webinars',
  description: 'On-demand webinars on enterprise Agile transformation, leadership, and organizational agility. Expert-led sessions you can watch anytime.',
  openGraph: {
    title: 'Webinar Library | Agile Velocity',
    description: 'Expert-led sessions on enterprise transformation, leadership, and organizational agility. Watch anytime.',
    images: [
      {
        url: 'https://www.agilevelocity.com/images/og/webinars-og.png',
        width: 1200,
        height: 630,
        alt: 'Webinar Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webinar Library | Agile Velocity',
    description: 'Expert-led sessions on enterprise transformation and leadership.',
    images: ['https://www.agilevelocity.com/images/og/webinars-og.png'],
  },
}

export default function WebinarsLayout({ children }) {
  return children
}
