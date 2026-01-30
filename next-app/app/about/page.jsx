import Link from 'next/link'
import Image from 'next/image'
import { getLeadership } from '@/data/team'

export const metadata = {
  title: 'About Us | Agile Velocity',
  description: 'Learn about Agile Velocity, the team, and our mission to deliver transformation that actually works.',
}

export default function About() {
  const leadership = getLeadership()

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="section-tag">About Us</span>
          <h1 className="about-hero-title">
            Transforming Organizations<br />
            <span className="highlight">Since 2010</span>
          </h1>
          <p className="about-hero-sub">
            We&apos;re not just consultants. We&apos;re practitioners who&apos;ve built products, led teams,
            and navigated the chaos of transformation ourselves. That experience shapes everything we do.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-mission-inner">
          <div className="about-mission-content">
            <span className="section-tag">Our Mission</span>
            <h2>Help Organizations Achieve<br /><span className="highlight">Real Business Outcomes</span></h2>
            <p>
              Too many enterprise transformations fail because they focus on practices instead of results.
              We take a different approach: start with the business outcomes you need, then work backward
              to identify only the changes that will actually move those outcomes.
            </p>
            <p>
              Our Path to Agility® framework has guided hundreds of organizations past the chaos of change
              and onto accelerated, sustainable results.
            </p>
          </div>
          <div className="about-mission-stats">
            <div className="about-stat">
              <span className="about-stat-num">2010</span>
              <span className="about-stat-label">Founded in Austin, TX</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-num">100+</span>
              <span className="about-stat-label">Enterprise Transformations</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-num">1000s</span>
              <span className="about-stat-label">Professionals Trained</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-image">
            <div className="about-story-badge">
              <span>Founded</span>
              <strong>2010</strong>
            </div>
          </div>
          <div className="about-story-content">
            <span className="section-tag">Our Story</span>
            <h2>Born From <span className="highlight">Real Experience</span></h2>
            <p>
              Agile Velocity was founded in Austin, Texas by David Hawks, a Certified Enterprise Coach
              who saw a gap in how organizations approached transformation. Too many companies were
              implementing practices without connecting them to business outcomes, then wondering
              why they weren&apos;t seeing results.
            </p>
            <p>
              David&apos;s vision was to create a company that would help organizations achieve genuine
              business agility, not just adopt practices, but fundamentally transform how they deliver value.
              This vision led to the development of the Path to Agility® framework, a structured approach
              that connects every practice to measurable business outcomes.
            </p>
            <p>
              Today, Agile Velocity has grown into a team of experienced practitioners who&apos;ve led
              transformations across financial services, healthcare, aviation, insurance, government,
              and technology. We&apos;ve helped Fortune 500 companies nationwide compete on a global scale
              through iteration, collaboration, and a shared understanding of both vision and execution.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-values-inner">
          <div className="section-header">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What <span className="highlight">Drives Us</span></h2>
            <p className="section-subtitle">These aren&apos;t just words on a wall. They guide every decision, every engagement, every interaction.</p>
          </div>
          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="about-value-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Openness & Transparency</h3>
              <p>We tell you what you need to hear, not what you want to hear. Honest communication builds trust and drives real change.</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Collaboration</h3>
              <p>We work alongside your teams, not above them. Real transformation happens when we solve problems together.</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Ownership</h3>
              <p>We measure our success by your outcomes. If you don&apos;t see results, neither do we. That accountability drives everything we do.</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Continuous Improvement</h3>
              <p>We practice what we preach. Our team is constantly learning, experimenting, and evolving our approach.</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">
                <i className="fas fa-smile"></i>
              </div>
              <h3>Fun</h3>
              <p>Transformation is hard work, but it doesn&apos;t have to be miserable. We bring energy and genuine enjoyment to every engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="about-different">
        <div className="about-different-inner">
          <div className="section-header">
            <span className="section-tag">Why We&apos;re Different</span>
            <h2 className="section-title">Not Your Typical <span className="highlight">Consultants</span></h2>
          </div>
          <div className="about-different-grid">
            <div className="about-different-item">
              <div className="about-different-num">01</div>
              <h3>Practitioners, Not Theorists</h3>
              <p>Our team has built products, led engineering teams, and managed transformations from the inside. We don&apos;t just teach frameworks. We&apos;ve lived them.</p>
            </div>
            <div className="about-different-item">
              <div className="about-different-num">02</div>
              <h3>Outcomes Over Practices</h3>
              <p>We start with the business results you need and work backward. You won&apos;t implement a single practice that doesn&apos;t connect to a measurable outcome.</p>
            </div>
            <div className="about-different-item">
              <div className="about-different-num">03</div>
              <h3>Our Own Framework</h3>
              <p>Path to Agility® isn&apos;t borrowed or licensed. We built it from hundreds of real-world transformations, refining it with every engagement since 2010.</p>
            </div>
            <div className="about-different-item">
              <div className="about-different-num">04</div>
              <h3>Long-Term Partnership</h3>
              <p>We&apos;re not here to rack up billable hours. Our goal is to build your internal capability so you don&apos;t need us forever, though many clients keep coming back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="about-leadership">
        <div className="about-leadership-inner">
          <div className="section-header">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">Meet the <span className="highlight">Partners</span></h2>
            <p className="section-subtitle">The experienced leaders guiding Agile Velocity and our client transformations</p>
          </div>
          <div className="about-leadership-grid">
            {leadership.map((member) => (
              <Link key={member.id} href={`/about/team/${member.id}`} className="about-leader-card">
                <div className="about-leader-image">
                  <Image src={member.image} alt={member.name} width={300} height={300} loading="lazy" />
                </div>
                <div className="about-leader-info">
                  <h3>{member.name}</h3>
                  <span className="about-leader-title">{member.title}</span>
                  <p>{member.shortBio}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="about-leadership-cta">
            <Link href="/about/team" className="btn-primary">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="about-recognition">
        <div className="about-recognition-inner">
          <h3>Trusted & Recognized</h3>
          <div className="about-recognition-items">
            <div className="about-recognition-item">
              <i className="fas fa-trophy"></i>
              <span>Longhorn 100</span>
              <p>#17 Fastest Growing</p>
            </div>
            <div className="about-recognition-item">
              <i className="fas fa-award"></i>
              <span>Scrum Alliance</span>
              <p>Certified Trainers & Coaches</p>
            </div>
            <div className="about-recognition-item">
              <i className="fas fa-handshake"></i>
              <span>Miro Partner</span>
              <p>Collaboration Tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <h2>Ready to Transform?</h2>
          <p>Let&apos;s talk about your organization&apos;s challenges and how we can help you achieve real business outcomes.</p>
          <div className="about-cta-actions">
            <Link href="/contact" className="btn-primary btn-lg">
              Start a Conversation
            </Link>
            <Link href="/path-to-agility" className="btn-ghost btn-lg">
              Explore Path to Agility
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
