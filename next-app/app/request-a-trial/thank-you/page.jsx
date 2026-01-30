import Link from 'next/link'

export const metadata = {
  title: 'Thank You - Demo Request Received',
  description: 'Your Navigator demo request has been received. We\'ll be in touch within 1 business day.',
  robots: 'noindex, nofollow',
}

const nextSteps = [
  {
    num: '1',
    title: 'Check Your Inbox',
    description: 'You\'ll receive a confirmation email shortly with details about your demo request.',
    icon: 'fa-envelope'
  },
  {
    num: '2',
    title: 'We\'ll Reach Out',
    description: 'A member of our team will contact you within 1 business day to schedule your personalized walkthrough.',
    icon: 'fa-phone'
  },
  {
    num: '3',
    title: '30-Minute Demo',
    description: 'See Navigator in action with a walkthrough tailored to your organization\'s needs and goals.',
    icon: 'fa-desktop'
  }
]

const demoHighlights = [
  {
    icon: 'fa-clipboard-check',
    title: 'Team Assessments',
    description: '5-minute self-assessments against 100 capabilities'
  },
  {
    icon: 'fa-map',
    title: 'Capability Heatmaps',
    description: 'Visualize strengths and gaps across your organization'
  },
  {
    icon: 'fa-list-check',
    title: 'Prioritized Actions',
    description: 'See how Navigator recommends what to improve next'
  },
  {
    icon: 'fa-chart-line',
    title: 'Progress Dashboards',
    description: 'Track transformation progress tied to business outcomes'
  }
]

const resources = [
  {
    title: 'What is Path to Agility?',
    description: 'Learn about the methodology behind Navigator',
    href: '/path-to-agility',
    icon: 'fa-route'
  },
  {
    title: 'The 9 Business Outcomes',
    description: 'See what outcomes Navigator helps you achieve',
    href: '/outcomes',
    icon: 'fa-bullseye'
  },
  {
    title: 'Case Studies',
    description: 'See how other organizations transformed',
    href: '/insights/case-studies',
    icon: 'fa-building'
  }
]

export default function ThankYou() {
  return (
    <>
      {/* Hero */}
      <header className="thank-you-hero">
        <div className="thank-you-hero-icon">
          <i className="fas fa-check-circle"></i>
        </div>

        <h1 className="thank-you-title">
          You&apos;re All Set
        </h1>

        <p className="thank-you-subtitle">
          Your demo request has been received. We&apos;re excited to show you what Navigator can do.
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
              <h3>Want to Schedule Right Now?</h3>
              <p>Skip the wait and book a time directly on our calendar.</p>
            </div>
          </div>
          <a
            href="https://info.agilevelocity.com/meetings/agilevelocity/agile-velocity-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Time <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </section>

      {/* What You'll See */}
      <section className="thank-you-preview">
        <div className="thank-you-section-inner">
          <h2>What You&apos;ll See in Your Demo</h2>
          <p className="thank-you-preview-intro">
            Your 30-minute walkthrough will be tailored to your needs, but here&apos;s a preview of Navigator&apos;s key features:
          </p>

          <div className="thank-you-preview-grid">
            {demoHighlights.map((item, index) => (
              <div key={index} className="thank-you-preview-card">
                <div className="thank-you-preview-icon">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="thank-you-resources">
        <div className="thank-you-section-inner">
          <h2>While You Wait</h2>
          <p className="thank-you-resources-intro">
            Learn more about the Path to Agility methodology and how organizations use Navigator:
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

      {/* Questions */}
      <section className="thank-you-questions">
        <div className="thank-you-questions-inner">
          <h3>Have Questions Before Your Demo?</h3>
          <p>
            <Link href="/contact">Contact us</Link> and we&apos;ll get back to you quickly.
          </p>
        </div>
      </section>

      {/* Back to Home */}
      <section className="thank-you-nav">
        <Link href="/" className="btn-ghost">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
        <Link href="/path-to-agility/navigator" className="btn-ghost">
          Learn More About Navigator <i className="fas fa-arrow-right"></i>
        </Link>
      </section>
    </>
  )
}
