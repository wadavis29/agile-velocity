export const metadata = {
  title: 'See Navigator in Action',
  description: 'Stop managing transformation in spreadsheets. See how Navigator gives you real-time visibility into every team\'s progress, tied directly to business outcomes.',
  openGraph: {
    title: 'See Navigator in Action | Path to Agility',
    description: 'Get a 30-minute personalized walkthrough. See assessments, heatmaps, and action tracking in your context.',
    images: [
      {
        url: 'https://www.agilevelocity.com/images/og/navigator-demo-og.png',
        width: 1200,
        height: 630,
        alt: 'Path to Agility Navigator Demo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'See Navigator in Action | Path to Agility',
    description: 'Get a 30-minute personalized walkthrough of Navigator.',
    images: ['https://www.agilevelocity.com/images/og/navigator-demo-og.png'],
  },
}

export default function TrialLayout({ children }) {
  return children
}
