import Link from 'next/link'
import { outcomes } from '@/data/outcomes'

export const metadata = {
  title: 'Business Outcomes',
  description: 'The 9 business outcomes every enterprise transformation should produce: Speed, Quality, Predictability, Employee Engagement, Customer Satisfaction, and more.',
  openGraph: {
    title: 'Business Outcomes | Agile Velocity',
    description: 'We don\'t sell processes. We deliver results. These are the 9 business outcomes every transformation should produce.',
    images: [
      {
        url: 'https://www.agilevelocity.com/images/og/outcomes-og.png',
        width: 1200,
        height: 630,
        alt: '9 Business Outcomes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Outcomes | Agile Velocity',
    description: 'The 9 business outcomes every transformation should produce.',
    images: ['https://www.agilevelocity.com/images/og/outcomes-og.png'],
  },
}

export default function OutcomesIndex() {
  return (
    <>
      {/* Page Hero */}
      <header className="page-hero">
        <div className="page-hero-bg" aria-hidden="true">OUTCOMES</div>
        <div className="page-hero-content">
          <h1 className="page-title">The Outcomes That <span className="highlight">Matter</span></h1>
          <p className="page-intro">We don&apos;t sell processes. We deliver results. These are the 9 business outcomes every transformation should produce.</p>
        </div>
      </header>

      {/* Outcomes Grid */}
      <section className="outcomes-main">
        <div className="outcomes-grid-full">
          {outcomes.map(outcome => (
            <Link key={outcome.id} href={`/outcomes/${outcome.slug}`} className="outcome-card-large">
              <div className="outcome-icon">
                <img src={outcome.iconPath} alt={`${outcome.title} icon`} className="outcome-svg-img" />
              </div>
              <div className="outcome-content">
                <span className="outcome-name">{outcome.p2aOutcome}</span>
                <h2>{outcome.title}</h2>
                <p>{outcome.description}</p>
                <ul className="outcome-bullets">
                  {outcome.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <span className="card-link">Learn More <i className="fas fa-arrow-right"></i></span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta">
        <div className="page-cta-content">
          <h2>Which Outcome Do You Need Most?</h2>
          <p>Let&apos;s talk about where you are and where you want to be. 30 minutes. No pitch.</p>
          <Link href="/contact" className="btn-primary btn-large">
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
