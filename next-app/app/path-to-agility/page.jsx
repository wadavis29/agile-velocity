import Link from 'next/link'
import { outcomes } from '@/data/outcomes'

export const metadata = {
  title: 'Path to Agility Framework',
  description: 'A proven continuous improvement framework that connects practices to outcomes. 9 Business Outcomes, 26 Improvement Outcomes, 100 Capabilities, 400+ Practices.',
  openGraph: {
    title: 'Path to Agility Framework | Agile Velocity',
    description: 'Outcome-driven improvement framework. Start with business results, work backward to practices.',
  },
}

const stages = [
  {
    name: 'Align',
    icon: 'fa-layer-group',
    description: 'Align your improvement initiative with measurable business outcomes and define a clear transformation roadmap.'
  },
  {
    name: 'Learn',
    icon: 'fa-lightbulb',
    description: 'Establish foundational practices and a culture of learning by empowering teams to take ownership of their work and process.'
  },
  {
    name: 'Predict',
    icon: 'fa-chess',
    description: 'Maintain a predictable cadence of delivery, enabling organizations to make informed business decisions.'
  },
  {
    name: 'Accelerate',
    icon: 'fa-rocket',
    description: 'Optimize the value delivery system and shorten time-to-market.'
  },
  {
    name: 'Adapt',
    icon: 'fa-globe',
    description: 'Embrace organization-wide adaptability in order to quickly respond to market demands.'
  }
]

const challenges = [
  {
    icon: 'fa-list-check',
    title: 'Practices Over Outcomes',
    description: 'Focusing on implementing ceremonies instead of achieving business results.'
  },
  {
    icon: 'fa-users',
    title: 'Team-Level Only',
    description: 'Limiting improvement to individual teams without system or organizational change.'
  },
  {
    icon: 'fa-chalkboard-user',
    title: 'Training Without Coaching',
    description: 'Teaching concepts without hands-on guidance to apply them.'
  },
  {
    icon: 'fa-handshake-slash',
    title: 'No Business Engagement',
    description: 'Transformation happening in IT without business stakeholder involvement.'
  },
  {
    icon: 'fa-diagram-project',
    title: 'Ignoring the Value Stream',
    description: 'Failing to optimize flow across the entire delivery pipeline.'
  }
]

const levels = [
  {
    icon: 'fa-building',
    name: 'Organization',
    description: 'Leadership develops a modern mindset, increases visibility throughout the organization, and creates alignment around vision, goals, and measurements of success for the organizational change.'
  },
  {
    icon: 'fa-diagram-project',
    name: 'System',
    description: 'Collections of teams are coordinating and collaborating to achieve optimal flow in value delivery.'
  },
  {
    icon: 'fa-users',
    name: 'Team',
    description: 'Teams successfully take on new roles, establish effective team practices, increase employee engagement, and achieve a sustainable, predictable cadence of delivering value.'
  }
]

export default function PathToAgility() {
  return (
    <>
      {/* Page Hero */}
      <header className="p2a-hero-kinetic">
        <div className="p2a-hero-bg" aria-hidden="true">OUTCOMES</div>

        {/* Floating Shapes */}
        <div className="p2a-hero-shapes">
          <div className="p2a-shape p2a-shape-1"></div>
          <div className="p2a-shape p2a-shape-2"></div>
          <div className="p2a-shape p2a-shape-3"></div>
        </div>

        <div className="p2a-hero-content">
          <div className="p2a-overline">
            <span className="overline-bar"></span>
            <span className="overline-text">The Proven Framework</span>
          </div>

          <h1 className="p2a-hero-title">
            <span className="title-line">
              <span className="word">Path to</span>
            </span>
            <span className="title-line">
              <span className="word accent">Agility</span>
              <span className="reg">®</span>
            </span>
          </h1>

          <p className="p2a-hero-tagline">Outcomes Over Practices</p>

          <p className="p2a-hero-sub">
            70% of transformations fail because they focus on implementing practices instead of achieving results. We start with the business outcomes you need and work backward to only the practices that will move those outcomes.
          </p>

          <div className="p2a-hero-actions">
            <Link href="/contact" className="btn-kinetic-primary">
              <span className="btn-text">Get Unstuck</span>
              <span className="btn-bg"></span>
            </Link>
            <Link href="/outcomes" className="btn-kinetic-ghost">
              See the 9 Business Outcomes
              <span className="ghost-arrow"><i className="fas fa-bullseye"></i></span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-kinetic">
          <div className="scroll-line-animated"></div>
          <span>Scroll to explore</span>
        </div>
      </header>

      {/* Why Transformations Fail */}
      <section className="p2a-challenges">
        <div className="section-header">
          <span className="section-tag">The Problem</span>
          <h2 className="section-title">Why Transformations <span className="highlight">Fail</span></h2>
          <p className="section-subtitle">Organizations pursuing improvement often get stuck. Teams adopt ceremonies but nothing changes, or progress exists in pockets while the rest of the org stays the same.</p>
        </div>
        <div className="challenges-grid">
          {challenges.map((challenge, index) => (
            <div key={index} className="challenge-card">
              <div className="challenge-icon"><i className={`fas ${challenge.icon}`}></i></div>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works - The Cascade */}
      <section className="p2a-cascade">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">Outcome-Driven <span className="highlight">Transformation</span></h2>
        </div>
        <div className="cascade-visual">
          <div className="cascade-flow">
            <div className="cascade-item cascade-start">
              <div className="cascade-num">9</div>
              <div className="cascade-label">Business Outcomes</div>
              <div className="cascade-desc">Speed, Quality, Predictability, etc.</div>
            </div>
            <div className="cascade-connector">
              <div className="connector-row">
                <span className="connector-text-top">&ldquo;Why&rdquo; Dictates Priorities</span>
                <i className="fas fa-arrow-right"></i>
              </div>
              <div className="connector-row">
                <i className="fas fa-arrow-left"></i>
                <span className="connector-text-bottom">Accomplish</span>
              </div>
            </div>
            <div className="cascade-item">
              <div className="cascade-num">26</div>
              <div className="cascade-label">Improvement Outcomes</div>
              <div className="cascade-desc">Predictable Delivery, Shortened Feedback Loops, etc.</div>
            </div>
            <div className="cascade-connector">
              <div className="connector-row">
                <span className="connector-text-top">Achieved Through</span>
                <i className="fas fa-arrow-right"></i>
              </div>
              <div className="connector-row">
                <i className="fas fa-arrow-left"></i>
                <span className="connector-text-bottom">Drive</span>
              </div>
            </div>
            <div className="cascade-item">
              <div className="cascade-num">100</div>
              <div className="cascade-label">Capabilities</div>
              <div className="cascade-desc">Cross-Functional Teams, Continuous Integration, etc.</div>
            </div>
            <div className="cascade-connector">
              <div className="connector-row">
                <span className="connector-text-top">By Implementing</span>
                <i className="fas fa-arrow-right"></i>
              </div>
              <div className="connector-row">
                <i className="fas fa-arrow-left"></i>
                <span className="connector-text-bottom">Enable</span>
              </div>
            </div>
            <div className="cascade-item">
              <div className="cascade-num">400+</div>
              <div className="cascade-label">Practices</div>
              <div className="cascade-desc">Daily Standups, Sprint Reviews, Retrospectives, etc.</div>
            </div>
          </div>

          <p className="cascade-note">Start with the business outcomes you need. Work backward to select only the practices that will get you there.</p>
        </div>
      </section>

      {/* The Journey - 5 Stages with Satir Curve */}
      <section className="p2a-journey">
        <div className="section-header">
          <span className="section-tag">The Journey</span>
          <h2 className="section-title">Five Stages to <span className="highlight">Continuous Improvement</span></h2>
          <p className="section-subtitle">Every transformation follows the Satir Change Model. Performance dips before it improves. The curve below shows this journey: you&apos;ll push through resistance before reaching a higher level of performance.</p>
        </div>

        {/* J-Curve above boxes */}
        <div className="jcurve-wrapper">
          <svg className="jcurve-svg" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-gold)" />
                <stop offset="100%" stopColor="var(--color-orange)" />
              </linearGradient>
            </defs>

            {/* J-Curve from brand - user provided path */}
            <path
              d="M 0,140
                 C 80,145 150,160 200,220
                 C 250,280 270,340 300,360
                 C 330,380 360,375 400,340
                 C 450,295 500,200 550,130
                 C 600,70 700,50 800,45
                 C 880,42 950,40 1000,38"
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="curve-path"
            />
          </svg>

          {/* Labels positioned around the curve */}
          <span className="jcurve-label jcurve-label-1">Status Quo</span>
          <span className="jcurve-label jcurve-label-2">Chaos & Resistance</span>
          <span className="jcurve-label jcurve-label-3">Integration & Practice</span>
          <span className="jcurve-label jcurve-label-4">New Status Quo</span>
        </div>

        {/* Stage boxes */}
        <div className="stages-grid">
          {stages.map((stage, index) => (
            <div key={index} className={`stage-box stage-box-${index + 1}`}>
              <div className="stage-icon-wrapper">
                <i className={`fas ${stage.icon}`}></i>
              </div>
              <h3>{stage.name}</h3>
              <p>{stage.description}</p>
            </div>
          ))}
        </div>

        {/* Levels */}
        <div className="journey-levels">
          <span className="levels-label">Applied at every level:</span>
          <div className="level-pill"><i className="fas fa-building"></i> Organization</div>
          <div className="level-pill"><i className="fas fa-diagram-project"></i> System</div>
          <div className="level-pill"><i className="fas fa-users"></i> Team</div>
        </div>
      </section>

      {/* Three Levels Detail */}
      <section className="p2a-levels-section">
        <div className="section-header">
          <span className="section-tag">Three Levels</span>
          <h2 className="section-title">Transformation at<br /><span className="highlight">Every Level</span></h2>
          <p className="section-subtitle">True transformation requires change across the entire organization, not just teams.</p>
        </div>
        <div className="levels-grid">
          {levels.map((level, index) => (
            <div key={index} className="level-card">
              <div className="level-icon"><i className={`fas ${level.icon}`}></i></div>
              <h3>{level.name}</h3>
              <p>{level.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 Business Outcomes */}
      <section className="outcomes" id="outcomes">
        <div className="section-header">
          <h2 className="section-title">The 9 Business Outcomes<br /><span className="highlight">We Measure Against</span></h2>
          <p className="section-subtitle">Everything we do is measured against these business results.</p>
        </div>
        <div className="outcomes-grid">
          {outcomes.map(outcome => (
            <Link key={outcome.id} href={`/outcomes/${outcome.slug}`} className="outcome-card">
              <span className="outcome-card-p2a">{outcome.p2aOutcome}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.description.substring(0, 80)}...</p>
              <span className="card-arrow"><i className="fas fa-arrow-right"></i></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="problems-stats">
        <div className="problems-stats-inner">
          <div className="problems-stats-content">
            <span className="section-tag">The Reality</span>
            <h2>Why Outcomes<br /><span className="highlight">Over Practices?</span></h2>
            <p>Because adopting practices isn&apos;t the same as achieving outcomes. Transformation success isn&apos;t about ceremonies. It&apos;s about results.</p>
          </div>
          <div className="problems-stats-grid">
            <div className="problems-stat">
              <span className="problems-stat-num">70<span className="unit">%</span></span>
              <span className="problems-stat-label">of enterprise transformations fail to deliver expected results</span>
            </div>
            <div className="problems-stat">
              <span className="problems-stat-num">15<span className="unit">+</span></span>
              <span className="problems-stat-label">years developing Path to Agility</span>
            </div>
            <div className="problems-stat">
              <span className="problems-stat-num">100<span className="unit">+</span></span>
              <span className="problems-stat-label">enterprise transformations completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonials">
        <div className="testimonials-header">
          <span className="section-tag">Proof</span>
          <h2 className="section-title">Don&apos;t Take<br /><span className="highlight">Our Word</span> For It</h2>
        </div>
        <div className="testimonials-slider">
          <div className="testimonial active">
            <div className="testimonial-quote">
              <span className="quote-mark open">&ldquo;</span>
              <blockquote>The Path to Agility was crucial to our journey because it focused on outcomes, strengthened our capabilities, and became an integral part of our improvement mindset.</blockquote>
              <span className="quote-mark close">&rdquo;</span>
            </div>
            <div className="testimonial-author">
              <strong>Jeanette Ward</strong>
              <span>President & CEO</span>
              <span className="company">Texas Mutual Insurance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigator Aside - Supporting Tool */}
      <aside className="navigator-aside" id="navigator">
        <div className="navigator-aside-inner">
          <div className="navigator-aside-icon">
            <i className="fas fa-compass"></i>
          </div>
          <div className="navigator-aside-content">
            <p className="navigator-aside-intro">Put the framework into action:</p>
            <h3>Path to Agility<sup>®</sup> Navigator</h3>
            <p>Our SaaS platform brings this framework to life. Assess your teams, visualize progress with heatmaps, and get prioritized action items, all tied to the business outcomes above.</p>
          </div>
          <div className="navigator-aside-actions">
            <Link href="/path-to-agility/navigator" className="btn-navigator">
              See How It Works
            </Link>
            <Link href="/request-a-trial" className="btn-navigator-ghost">
              Free Trial
            </Link>
          </div>
        </div>
      </aside>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-bg-text" aria-hidden="true">LET&apos;S GO</div>
        <div className="cta-content">
          <h2>Ready to<br /><span className="highlight">Transform?</span></h2>
          <p>30 minutes. No pitch. Just tell us where you&apos;re stuck.</p>
          <Link href="/contact" className="btn-primary btn-large">Book a Call</Link>
        </div>
      </section>
    </>
  )
}
