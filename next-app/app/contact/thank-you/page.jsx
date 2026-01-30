import Link from 'next/link'

export const metadata = {
  title: 'Message Received | Agile Velocity',
  description: 'Thanks for reaching out. We typically respond within a few hours during business days.',
  robots: 'noindex, nofollow',
}

const nextSteps = [
  {
    num: '1',
    title: 'We Got It',
    description: 'Your message is already in front of our team, not sitting in a queue.',
    icon: 'fa-inbox'
  },
  {
    num: '2',
    title: 'Quick Response',
    description: 'We typically reply within a few hours during business days. Most people hear back the same day.',
    icon: 'fa-bolt'
  },
  {
    num: '3',
    title: 'Real Conversation',
    description: 'No sales scripts. We\'ll respond to what you actually asked and go from there.',
    icon: 'fa-comments'
  }
]

const resources = [
  {
    title: 'Path to Agility Framework',
    description: 'See how we connect practices to business outcomes',
    href: '/path-to-agility',
    icon: 'fa-route'
  },
  {
    title: 'The 9 Business Outcomes',
    description: 'What successful transformations actually deliver',
    href: '/outcomes',
    icon: 'fa-bullseye'
  },
  {
    title: 'Training & Workshops',
    description: 'SAFe, Scrum, and Kanban certifications',
    href: '/training',
    icon: 'fa-graduation-cap'
  }
]

export default function ContactThankYou() {
  return (
    <>
      {/* Hero */}
      <header className="thank-you-hero">
        <div className="thank-you-hero-icon">
          <i className="fas fa-paper-plane"></i>
        </div>

        <h1 className="thank-you-title">
          Message Sent
        </h1>

        <p className="thank-you-subtitle">
          We&apos;ve received your message and will get back to you shortly, usually within a few hours.
        </p>
      </header>

      {/* What Happens Next */}
      <section className="thank-you-next-steps">
        <div className="thank-you-section-inner">
          <h2>What Happens Next</h2>

          <div className="thank-you-steps">
            {nextSteps.map((step, index) => (
              <div key={index} className="thank-you-step">
                <div className="thank-you-step-icon">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <div className="thank-you-step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < nextSteps.length - 1 && (
                  <div className="thank-you-step-connector">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't Wait? Book Now */}
      <section className="thank-you-book-now">
        <div className="thank-you-book-now-inner">
          <div className="thank-you-book-now-content">
            <i className="fas fa-calendar-check"></i>
            <div>
              <h3>Need to Talk Sooner?</h3>
              <p>Skip the back-and-forth and book a time directly on our calendar.</p>
            </div>
          </div>
          <a
            href="https://info.agilevelocity.com/meetings/agilevelocity/agile-velocity-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Call <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </section>

      {/* Resources */}
      <section className="thank-you-resources">
        <div className="thank-you-section-inner">
          <h2>While You Wait</h2>
          <p className="thank-you-resources-intro">
            Learn more about how we help organizations achieve real business outcomes:
          </p>

          <div className="thank-you-resources-grid">
            {resources.map((resource, index) => (
              <Link key={index} href={resource.href} className="thank-you-resource-card">
                <div className="thank-you-resource-icon">
                  <i className={`fas ${resource.icon}`}></i>
                </div>
                <div className="thank-you-resource-content">
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                </div>
                <i className="fas fa-arrow-right thank-you-resource-arrow"></i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="thank-you-nav">
        <Link href="/" className="btn-ghost">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
        <Link href="/insights" className="btn-ghost">
          Read Our Latest Insights <i className="fas fa-arrow-right"></i>
        </Link>
      </section>
    </>
  )
}
