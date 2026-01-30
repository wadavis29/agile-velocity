import Link from 'next/link'

export const metadata = {
  title: 'Recognition & Awards',
  description: 'Agile Velocity ranked #17 on the Longhorn 100 and 5x Inc. 5000 honoree. Built in Austin, proven worldwide.',
  openGraph: {
    title: 'Recognition & Awards | Agile Velocity',
    description: 'Longhorn 100 #17, Inc. 5000 5x Honoree. 15+ years delivering enterprise transformations for Fortune 500 companies.',
  },
}

export default function Recognition() {
  return (
    <>
      {/* Hero Section */}
      <header className="recognition-hero">
        <div className="recognition-hero-bg-text" aria-hidden="true">#17</div>

        <div className="recognition-hero-badges">
          <div className="recognition-badge longhorn">
            <span className="longhorn-text">Longhorn 100</span>
          </div>
          <div className="recognition-badge inc">
            <span className="inc-text">Inc. 5000</span>
          </div>
        </div>

        <div className="recognition-hero-content">
          <div className="recognition-overline">
            <span className="overline-bar"></span>
            <span>Recognition</span>
          </div>

          <h1 className="recognition-hero-title">
            <span className="title-line">Built in Austin.</span>
            <span className="title-line">Proven <span className="highlight">Worldwide.</span></span>
          </h1>

          <p className="recognition-hero-lead">
            From a single consultant with a vision to one of the fastest-growing Longhorn-led companies in the world. This is our story.
          </p>
        </div>

        <div className="recognition-hero-stats">
          <div className="recognition-stat">
            <span className="stat-number">#17</span>
            <span className="stat-label">Longhorn 100</span>
            <span className="stat-year">2024</span>
          </div>
          <div className="recognition-stat">
            <span className="stat-number">5x</span>
            <span className="stat-label">Inc. 5000 Honoree</span>
            <span className="stat-year">Consecutive Years</span>
          </div>
          <div className="recognition-stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years Transforming</span>
            <span className="stat-year">Since 2009</span>
          </div>
        </div>
      </header>

      {/* Origin Story */}
      <section className="recognition-story">
        <div className="story-content">
          <span className="section-tag">The Beginning</span>
          <h2>It Started With a <span className="highlight">Broken Promise</span></h2>

          <div className="story-text">
            <p className="story-lead">
              In 2009, David Hawks watched another enterprise transformation fail. Not because the ideas were wrong, but because the consultants left before anything stuck.
            </p>
            <p>
              He&apos;d seen it a dozen times. Big consulting firms would roll in with frameworks and certifications, run a few training sessions, declare victory, and disappear. Six months later, organizations were back to old habits, leaders were disillusioned, and millions of dollars had evaporated.
            </p>
            <p>
              David knew there had to be a better way. What if consultants actually stayed until the transformation worked? What if success was measured in business outcomes, not workshops delivered? What if the goal was to build internal capability so clients didn&apos;t need consultants forever?
            </p>
            <p>
              He founded Agile Velocity on a radical premise: <strong>work yourself out of a job</strong>. Help organizations build the internal muscles to improve themselves. Don&apos;t rent them a solution. Teach them to own it.
            </p>
            <p>
              Today, David serves as an advisor, while the leadership team he built continues to carry that mission forward, proving every day that transformation done right creates lasting change.
            </p>
          </div>
        </div>

        <div className="story-image">
          <div className="story-image-frame">
            <div className="frame-accent"></div>
            <div className="story-quote-card">
              <blockquote>
                &ldquo;Most consultants optimize for billable hours. We optimize for the day our clients don&apos;t need us anymore. That&apos;s how you know the transformation actually worked.&rdquo;
              </blockquote>
              <cite>
                <strong>David Hawks</strong>
                <span>Founder</span>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Longhorn 100 Section */}
      <section className="recognition-award longhorn-section">
        <div className="award-content">
          <div className="award-badge-large">
            <span className="badge-number">#17</span>
            <span className="badge-label">Longhorn 100</span>
          </div>

          <div className="award-details">
            <span className="section-tag">2024 Recognition</span>
            <h2>Fastest-Growing <span className="highlight">Longhorn-Led</span> Business</h2>

            <p className="award-description">
              The Longhorn 100 celebrates the 100 fastest-growing businesses in the world led by University of Texas alumni. In 2024, Agile Velocity ranked <strong>#17</strong>, recognition that our approach to transformation actually works.
            </p>

            <div className="award-quote">
              <blockquote>
                &ldquo;This recognition isn&apos;t about any single person. It&apos;s validation that organizations are hungry for transformation that actually sticks. They&apos;re tired of theater. They want results. And that&apos;s exactly what we deliver.&rdquo;
              </blockquote>
              <cite>
                <strong>James Hawks</strong>
                <span>Partner & Chief Revenue Officer</span>
              </cite>
            </div>

            <div className="award-context">
              <h4>What This Means</h4>
              <p>
                The Longhorn 100 doesn&apos;t measure revenue or headcount. It measures <strong>growth rate</strong>. To rank #17 means Agile Velocity is scaling faster than thousands of other Longhorn-led companies worldwide. That growth comes from one place: clients who see real results and tell others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inc 5000 Section */}
      <section className="recognition-award inc-section">
        <div className="award-content reverse">
          <div className="award-details">
            <span className="section-tag">Sustained Excellence</span>
            <h2>Inc. 5000: <span className="highlight">Year After Year</span></h2>

            <p className="award-description">
              The Inc. 5000 is the most prestigious ranking of America&apos;s fastest-growing private companies. Making the list once is an achievement. Making it <strong>five consecutive years</strong> proves sustained excellence.
            </p>

            <div className="inc-timeline">
              <div className="timeline-item">
                <span className="timeline-year">2019</span>
                <span className="timeline-rank">#2,981</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2018</span>
                <span className="timeline-rank">#3,078</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2017</span>
                <span className="timeline-rank">Honoree</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2016</span>
                <span className="timeline-rank">Honoree</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2015</span>
                <span className="timeline-rank">Honoree</span>
              </div>
            </div>

            <div className="award-quote">
              <blockquote>
                &ldquo;There&apos;s a silver lining in all situations. Stay positive and seek it out. That&apos;s how we approach every client engagement, and apparently it works. They keep coming back and bringing their peers.&rdquo;
              </blockquote>
              <cite>
                <strong>Mike Lepine</strong>
                <span>Partner & Chief Operating Officer</span>
              </cite>
            </div>
          </div>

          <div className="award-badge-large inc-badge">
            <span className="badge-label">Inc.</span>
            <span className="badge-number">5000</span>
            <span className="badge-sub">5x Honoree</span>
          </div>
        </div>
      </section>

      {/* The Team Behind It */}
      <section className="recognition-team">
        <div className="team-header">
          <span className="section-tag">Leadership</span>
          <h2>The People Behind <span className="highlight">The Growth</span></h2>
          <p>Three partners. One mission. Transformation that actually works.</p>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-card-header">
              <div className="team-avatar">
                <span>JH</span>
              </div>
              <div className="team-info">
                <h3>James Hawks</h3>
                <span className="team-role">Partner & Chief Revenue Officer</span>
              </div>
            </div>
            <p className="team-bio">
              30+ years leading sales, operations, and client relations across mid-sized to large organizations. University of Miami BBA in Computer Information Systems. M&A expertise with an obsessive focus on the client experience, because every engagement is a relationship, not a transaction.
            </p>
            <div className="team-credentials">
              <span>Certified Scrum Master</span>
            </div>
            <blockquote className="team-philosophy">
              &ldquo;Invest your time in those that deserve it.&rdquo;
            </blockquote>
          </div>

          <div className="team-card">
            <div className="team-card-header">
              <div className="team-avatar">
                <span>ML</span>
              </div>
              <div className="team-info">
                <h3>Mike Lepine</h3>
                <span className="team-role">Partner & Chief Operating Officer</span>
              </div>
            </div>
            <p className="team-bio">
              Operationally-focused leader with deep software development and engineering expertise. Brings stability, focus, and results while championing an environment that balances productivity with work-life wellness. Always questioning efficiency and identifying improvement opportunities.
            </p>
            <div className="team-credentials">
              <span>CAL I</span>
              <span>CSD</span>
              <span>CSM</span>
            </div>
            <blockquote className="team-philosophy">
              &ldquo;There&apos;s a silver lining in all situations. Stay positive and seek it out.&rdquo;
            </blockquote>
          </div>

          <div className="team-card">
            <div className="team-card-header">
              <div className="team-avatar">
                <span>EC</span>
              </div>
              <div className="team-info">
                <h3>Eric Cussen</h3>
                <span className="team-role">Partner & Chief Transformation Officer</span>
              </div>
            </div>
            <p className="team-bio">
              20+ years in product development and enterprise transformation. CEO and co-founder of multiple startups. Led large-scale transformations across financial services, aviation, healthcare, and insurance. Designed a financial product featured in the Wall Street Journal. Pragmatic, honest, and willing to roll up his sleeves.
            </p>
            <div className="team-credentials">
              <span>SAFe SPC 6.0</span>
              <span>P2A Certified</span>
              <span>CSM</span>
              <span>CSPO</span>
              <span>KMP</span>
            </div>
            <blockquote className="team-philosophy">
              &ldquo;You&apos;re on mute.&rdquo;
            </blockquote>
          </div>
        </div>

        <div className="team-founder">
          <div className="founder-content">
            <div className="founder-avatar">
              <span>DH</span>
            </div>
            <div className="founder-info">
              <h4>David Hawks <span className="founder-tag">Founder</span></h4>
              <p>
                Certified Enterprise Coach and UT Austin McCombs graduate (&apos;95). David founded Agile Velocity in 2009 and built the foundation that continues to drive the company today. Now serving as an advisor, he remains passionate about helping organizations achieve lasting transformation that delivers measurable business outcomes. Known for his 18-hour Longhorn tailgate experiences: arriving first, leaving last.
              </p>
              <span className="founder-philosophy">&ldquo;Stop Starting, Start Finishing.&rdquo;</span>
            </div>
          </div>
        </div>
      </section>

      {/* What It Means For Clients */}
      <section className="recognition-impact">
        <div className="impact-content">
          <span className="section-tag">What This Means For You</span>
          <h2>Awards Don&apos;t <span className="highlight">Transform Companies</span></h2>

          <p className="impact-lead">
            We don&apos;t hang these plaques on the wall to impress visitors. We share them because they answer a question every prospect asks: &ldquo;Why should I trust your team?&rdquo;
          </p>

          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon"><i className="fas fa-chart-line"></i></div>
              <h3>Proof of Results</h3>
              <p>
                You don&apos;t grow this fast without delivering results. Our growth comes from clients who see transformation stick and tell their peers.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-icon"><i className="fas fa-handshake"></i></div>
              <h3>Stability You Can Trust</h3>
              <p>
                We&apos;ll be here next year and the year after. Sustained growth means sustained partnership, not consultants who disappear mid-engagement.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-icon"><i className="fas fa-users"></i></div>
              <h3>Attracting Top Talent</h3>
              <p>
                Fast-growing companies attract the best coaches and consultants. The people who work with you are the best in the industry.
              </p>
            </div>
          </div>

          <div className="impact-cta">
            <blockquote>
              &ldquo;Every client we work with is betting their career on the outcome. They&apos;re not looking for a vendor. They&apos;re looking for a partner who&apos;s done this before and has the track record to prove it. That&apos;s what these recognitions represent.&rdquo;
            </blockquote>
            <cite>
              <strong>James Hawks</strong>
              <span>Partner & Chief Revenue Officer</span>
            </cite>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-bg-text" aria-hidden="true">JOIN US</div>
        <div className="cta-content">
          <h2>Ready to Work With<br /><span className="highlight">The Best?</span></h2>
          <p>Join Southwest Airlines, Dell, Honeywell, and hundreds of others who chose proven results over empty promises.</p>
          <Link href="/contact" className="btn-primary btn-large">
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
