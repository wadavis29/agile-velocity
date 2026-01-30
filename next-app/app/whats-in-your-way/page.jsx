import Link from 'next/link'
import { problems } from '@/data/problems'

export const metadata = {
  title: "What's In Your Way",
  description: 'The 8 problems that kill enterprise transformations: stalled transformation, prioritization chaos, scaling issues, leadership misalignment, and more. We solve them all.',
  openGraph: {
    title: "What's In Your Way | Agile Velocity",
    description: "We've seen it all. We've fixed it all. These are the 8 problems that kill enterprise transformations.",
  },
}

export default function WhatsInYourWayIndex() {
  return (
    <>
      {/* Page Hero */}
      <header className="page-hero problems-hero">
        <div className="page-hero-bg" aria-hidden="true">BLOCKED</div>
        <div className="page-hero-content">
          <span className="page-overline">We&apos;ve seen it all. We&apos;ve fixed it all.</span>
          <h1 className="page-title">What&apos;s In <span className="highlight">Your Way?</span></h1>
          <p className="page-intro">These are the 8 problems that kill enterprise transformations. We&apos;ve solved each one dozens of times.</p>
        </div>
      </header>

      {/* Problems Grid */}
      <section className="problems-main">
        <div className="problems-grid-full">
          {problems.map(problem => (
            <Link key={problem.id} href={`/whats-in-your-way/${problem.slug}`} className={`problem-card-large ${problem.hot ? 'hot' : ''}`}>
              {problem.hot && <span className="hot-badge"><i className="fas fa-fire"></i> Hot Topic</span>}
              <div className="problem-card-header">
                <div className="problem-icon-large"><i className={`fas ${problem.icon}`}></i></div>
                <div className="problem-meta">
                  <h2>{problem.title}</h2>
                  <span className="problem-tagline">{problem.tagline}</span>
                </div>
              </div>
              <p className="problem-pain-preview">{problem.problem.description.split('.').slice(0, 2).join('.') + '.'}</p>
              <ul className="problem-symptoms-list">
                {problem.problem.symptoms.slice(0, 2).map((symptom, index) => (
                  <li key={index}><i className={`fas ${symptom.icon}`}></i> {symptom.text}</li>
                ))}
              </ul>
              <span className="card-link">Sound Familiar? <i className="fas fa-arrow-right"></i></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="problems-stats">
        <div className="problems-stats-inner">
          <div className="problems-stats-content">
            <span className="section-tag">The Reality</span>
            <h2>These Problems Are <span className="highlight">Everywhere</span></h2>
            <p>You&apos;re not alone. Most organizations struggle with the same issues. The difference is whether you fix them.</p>
          </div>
          <div className="problems-stats-grid">
            <div className="problems-stat">
              <span className="problems-stat-num">70<span className="unit">%</span></span>
              <span className="problems-stat-label">of enterprise transformations fail</span>
            </div>
            <div className="problems-stat">
              <span className="problems-stat-num">80<span className="unit">%</span></span>
              <span className="problems-stat-label">of features built are rarely used</span>
            </div>
            <div className="problems-stat">
              <span className="problems-stat-num">76<span className="unit">%</span></span>
              <span className="problems-stat-label">of employees experience burnout</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-bg-text" aria-hidden="true">FIX IT</div>
        <div className="cta-content">
          <h2>Ready to Get <span className="highlight">Unstuck?</span></h2>
          <p>Tell us what&apos;s blocking you. We&apos;ll tell you how we&apos;d fix it. 30 minutes, no pitch.</p>
          <Link href="/contact" className="btn-primary btn-large">
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  )
}
