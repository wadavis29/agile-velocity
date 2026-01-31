export const metadata = {
  title: 'White Papers',
  description: 'Free white papers on enterprise Agile transformation, leadership, and building high-performing teams. In-depth guides you can download instantly.',
  openGraph: {
    title: 'White Paper Library | Agile Velocity',
    description: 'Free in-depth guides on enterprise transformation, leadership, and organizational agility. Download instantly.',
    images: [
      {
        url: 'https://www.agilevelocity.com/images/og/white-papers-og.png',
        width: 1200,
        height: 630,
        alt: 'White Paper Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White Paper Library | Agile Velocity',
    description: 'Free in-depth guides on enterprise transformation and leadership.',
    images: ['https://www.agilevelocity.com/images/og/white-papers-og.png'],
  },
}

export default function WhitePapersLayout({ children }) {
  return children
}
