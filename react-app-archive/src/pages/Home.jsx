import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { outcomes } from '../data/outcomes';

const clientLogos = [
  { src: '/images/logos/Southwest_Airlines_logo_2014.svg.png', alt: 'Southwest Airlines' },
  { src: 'https://agilevelocity.com/wp-content/uploads/2024/02/dell-technologies-vertical_logo-300x172.png', alt: 'Dell Technologies' },
  { src: '/images/logos/Honeywell_logo.svg.png', alt: 'Honeywell' },
  { src: 'https://agilevelocity.com/wp-content/uploads/2023/12/whole-foods-300x205.png', alt: 'Whole Foods' },
  { src: '/images/logos/TexasMutual.png', alt: 'Texas Mutual' },
  { src: '/images/logos/QTWO.png', alt: 'Q2' },
  { src: '/images/logos/Lennar_Logo.svg.png', alt: 'Lennar' },
  { src: '/images/logos/baylor_scott_white.png', alt: 'Baylor Scott & White' }
];

const testimonials = [
  {
    quote: "I was impressed with Agile Velocity's ability to quickly come up to speed, gain trust from the Southwest Teams and begin to partner in driving our transformation.",
    name: "Katie Morris",
    title: "Director of IT Transformations",
    company: "Southwest Airlines"
  },
  {
    quote: "We accelerated through our transition with Agile Velocity's help. The Path to Agility was crucial to our journey because it focused on outcomes, strengthened our capabilities, and became an integral part of our improvement mindset.",
    name: "Jeanette Ward",
    title: "President & CEO",
    company: "Texas Mutual Insurance"
  },
  {
    quote: "Once we got out of the bottom of the change curve, the energy fundamentally changed. There's something about having things on the wall, having standups, and operating differently that they were able to take ownership in a way they never had the context to do well before.",
    name: "Nicole Tanzillo",
    title: "Co-founder & COO",
    company: "Ceresa"
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section - Kinetic Impact Design */}
      <header className={`hero-kinetic ${loaded ? 'loaded' : ''}`}>
        {/* Diagonal Split Background */}
        <div className="hero-diagonal-bg"></div>

        {/* Giant Rotated Side Text */}
        <div className="hero-side-text" aria-hidden="true">
          <span className="side-text-fix">FIX</span>
          <span className="side-text-it">IT</span>
        </div>

        {/* Floating Geometric Accents */}
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-ring"></div>
        </div>

        {/* Main Content Grid */}
        <div className="hero-kinetic-layout">
          {/* Left: Main Message */}
          <div className="hero-kinetic-content">
            <div className="hero-overline">
              <span className="overline-bar"></span>
              <span className="overline-text">Agile Transformation Experts</span>
            </div>

            <h1 className="hero-kinetic-title">
              <span className="title-line title-line-1">
                <span className="word">Let's</span>{' '}
                <span className="word accent">Fix</span>
              </span>
              <span className="title-line title-line-2">
                <span className="word">What's</span>
              </span>
              <span className="title-line title-line-3">
                <span className="word">Not</span>{' '}
                <span className="word stroke">Working.</span>
              </span>
            </h1>

            <p className="hero-kinetic-sub">
              Agile & business transformation consulting for enterprise product and technology organizations. Diagnose bottlenecks, align leadership, and improve speed, predictability, and team health. All measured in outcomes.
            </p>

            <div className="hero-kinetic-actions">
              <Link to="/contact" className="btn-kinetic-primary">
                <span className="btn-text">Book a 30-Minute Diagnostic Call</span>
                <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                <span className="btn-bg"></span>
              </Link>
              <Link to="/whats-in-your-way" className="btn-kinetic-ghost">
                What's Broken?
                <span className="ghost-arrow"><i className="fas fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="hero-kinetic-stats">
            <div className="stat-card stat-card-featured">
              <div className="stat-card-inner">
                <span className="stat-giant">70</span>
                <span className="stat-unit">%</span>
              </div>
              <div className="stat-card-content">
                <span className="stat-label">Of Transformations Fail</span>
                <span className="stat-context">Industry average. We fix what others break.</span>
              </div>
              <div className="stat-card-accent"></div>
            </div>

            <div className="stat-card">
              <div className="stat-card-inner">
                <span className="stat-giant">100</span>
                <span className="stat-unit">+</span>
              </div>
              <div className="stat-card-content">
                <span className="stat-label">Enterprise Transformations</span>
                <span className="stat-context">We've seen every failure mode.</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-inner">
                <span className="stat-text">F500</span>
              </div>
              <div className="stat-card-content">
                <span className="stat-label">Clients Served</span>
                <span className="stat-context">Southwest, Dell, Honeywell & more.</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-inner">
                <span className="stat-text">#17</span>
              </div>
              <div className="stat-card-content">
                <span className="stat-label">Longhorn 100</span>
                <span className="stat-context">Fastest-growing Longhorn-led businesses.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-kinetic">
          <div className="scroll-line-animated"></div>
          <span>Scroll to explore</span>
        </div>
      </header>

      {/* Logos Strip */}
      <section className="logos">
        <div className="logos-inner">
          <span className="logos-label">Trusted by Fortune 500 teams</span>
          <div className="logos-track">
            {clientLogos.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="who-we-help">
        <div className="who-we-help-inner">
          <div className="who-we-help-header">
            <span className="section-tag">Built For</span>
            <h2>Leaders Ready to <span className="highlight">Transform</span></h2>
          </div>
          <div className="who-we-help-cards">
            <div className="who-we-help-card">
              <div className="who-we-help-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Your Role</h3>
              <p>VPs of Engineering, Product Leaders, Transformation Leads, CTOs</p>
            </div>
            <div className="who-we-help-card">
              <div className="who-we-help-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Your Organization</h3>
              <p>Enterprise product & technology teams building at scale</p>
            </div>
            <div className="who-we-help-card">
              <div className="who-we-help-icon">
                <i className="fas fa-route"></i>
              </div>
              <h3>Your Stage</h3>
              <p>Mid-transformation, starting fresh, or recovering from failure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="problems" id="problems">
        <div className="problems-header">
          <span className="section-tag">What's Broken</span>
          <h2 className="section-title">We've Seen It All.<br /><span className="highlight">We've Fixed It All.</span></h2>
        </div>
        <div className="problems-grid">
          <Link to="/whats-in-your-way/stalled-or-superficial-transformation" className="problem-card">
            <div className="problem-icon"><i className="fas fa-pause"></i></div>
            <h3>Stalled Transformation</h3>
            <p>Started strong, lost momentum</p>
          </Link>
          <Link to="/whats-in-your-way/portfolio-and-prioritization-chaos" className="problem-card">
            <div className="problem-icon"><i className="fas fa-shuffle"></i></div>
            <h3>Prioritization Chaos</h3>
            <p>Too much WIP, nothing ships</p>
          </Link>
          <Link to="/whats-in-your-way/messy-scaling-and-dependency-hell" className="problem-card">
            <div className="problem-icon"><i className="fas fa-diagram-project"></i></div>
            <h3>Scaling & Dependencies</h3>
            <p>Teams blocked everywhere</p>
          </Link>
          <Link to="/whats-in-your-way/leadership-misalignment-and-governance-drag" className="problem-card">
            <div className="problem-icon"><i className="fas fa-gavel"></i></div>
            <h3>Leadership Misalignment</h3>
            <p>Slow decisions, misaligned leaders</p>
          </Link>
          <Link to="/whats-in-your-way/silos-handoffs-and-support-work-derailment" className="problem-card">
            <div className="problem-icon"><i className="fas fa-cubes"></i></div>
            <h3>Silos & Handoffs</h3>
            <p>Endless handoffs, no ownership</p>
          </Link>
          <Link to="/whats-in-your-way/no-real-visibility-and-vanity-metrics" className="problem-card">
            <div className="problem-icon"><i className="fas fa-chart-pie"></i></div>
            <h3>Vanity Metrics</h3>
            <p>No real visibility</p>
          </Link>
          <Link to="/whats-in-your-way/burnout-low-trust-and-change-fatigue" className="problem-card">
            <div className="problem-icon"><i className="fas fa-battery-quarter"></i></div>
            <h3>Burnout & Change Fatigue</h3>
            <p>Exhausted, resistant teams</p>
          </Link>
          <Link to="/whats-in-your-way/ai-and-modernization-without-a-strategy" className="problem-card hot">
            <span className="hot-badge"><i className="fas fa-fire"></i> Hot Topic</span>
            <div className="problem-icon"><i className="fas fa-microchip"></i></div>
            <h3>AI Without Strategy</h3>
            <p>Tools without a plan</p>
          </Link>
        </div>
        {/* Mid-page CTA */}
        <div className="mid-page-cta">
          <p>Sound familiar? Let's diagnose the real issue.</p>
          <Link to="/contact" className="btn-primary">
            Book a 30-Minute Diagnostic Call <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Framework Section */}
      <section className="framework" id="framework">
        <div className="framework-layout">
          <div className="framework-left">
            <span className="section-tag">The System</span>
            <h2 className="framework-title">Path to Agility<span className="reg">®</span></h2>
            <p className="framework-lead">Most transformations focus on practices.<br /><strong>Ours focuses on outcomes.</strong></p>
            <p className="framework-desc">A proven methodology that connects what you <em>do</em> to what you <em>achieve</em>—from team behaviors all the way to business results.</p>
            <div className="framework-actions">
              <Link to="/path-to-agility" className="btn-primary">Explore the Framework <i className="fas fa-arrow-right"></i></Link>
              <Link to="/path-to-agility/navigator" className="btn-ghost">Navigator Software <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
          <div className="framework-right">
            <div className="framework-pyramid">
              <div className="pyramid-row pyramid-top">
                <div className="pyramid-block">
                  <span className="pyramid-num">9</span>
                  <div className="pyramid-text">
                    <strong>Business Outcomes</strong>
                    <span>What you achieve</span>
                  </div>
                </div>
              </div>
              <div className="pyramid-row">
                <div className="pyramid-block">
                  <span className="pyramid-num">26</span>
                  <div className="pyramid-text">
                    <strong>Agile Outcomes</strong>
                    <span>Organizational capabilities</span>
                  </div>
                </div>
              </div>
              <div className="pyramid-row">
                <div className="pyramid-block">
                  <span className="pyramid-num">100</span>
                  <div className="pyramid-text">
                    <strong>Capabilities</strong>
                    <span>Measurable behaviors</span>
                  </div>
                </div>
              </div>
              <div className="pyramid-row pyramid-bottom">
                <div className="pyramid-block">
                  <span className="pyramid-num">400+</span>
                  <div className="pyramid-text">
                    <strong>Practices</strong>
                    <span>Scrum, Kanban, SAFe & more</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="framework-levels">
              <div className="level-pill"><i className="fas fa-building"></i> Organization</div>
              <div className="level-pill"><i className="fas fa-diagram-project"></i> System</div>
              <div className="level-pill"><i className="fas fa-users"></i> Team</div>
            </div>
          </div>
        </div>
        {/* Mid-page CTA */}
        <div className="mid-page-cta mid-page-cta-alt">
          <p>See how Path to Agility® connects practices to business results.</p>
          <Link to="/path-to-agility" className="btn-ghost">
            Explore the Full Framework <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="outcomes" id="outcomes">
        <div className="section-header">
          <span className="section-tag">Path to Agility<span className="reg">®</span> Business Outcomes</span>
          <h2 className="section-title">Business Results<br /><span className="highlight">You Can Measure</span></h2>
          <p className="section-subtitle">9 measurable outcomes backed by hundreds of enterprise transformations since 2010</p>
        </div>
        <div className="outcomes-grid">
          {outcomes.map(outcome => (
            <Link key={outcome.id} to={`/outcomes/${outcome.slug}`} className="outcome-card">
              <span className="outcome-card-p2a">{outcome.p2aOutcome}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.description.substring(0, 80)}...</p>
              <span className="card-arrow"><i className="fas fa-arrow-right"></i></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="testimonials-header">
          <span className="section-tag">Proof</span>
          <h2 className="section-title">Don't Take<br /><span className="highlight">Our Word</span> For It</h2>
        </div>
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial ${index === activeTestimonial ? 'active' : ''}`}>
              <div className="testimonial-quote">
                <span className="quote-mark open">"</span>
                <blockquote>{testimonial.quote}</blockquote>
                <span className="quote-mark close">"</span>
              </div>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.title}</span>
                <span className="company">{testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => setActiveTestimonial(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
        <Link to="/insights/case-studies" className="testimonials-link">View Case Studies <i className="fas fa-arrow-right"></i></Link>
      </section>

      {/* Training Section */}
      <section className="training" id="training">
        <div className="training-header">
          <span className="section-tag">Training</span>
          <h2 className="section-title">Level Up Your<br /><span className="highlight">Entire Organization</span></h2>
          <p>SAFe. Scrum. Kanban. Real skills that work in the real world.</p>
        </div>
        <div className="training-grid">
          <Link to="/training/for-organizations" className="training-card">
            <div className="training-icon"><i className="fas fa-building"></i></div>
            <h3>Private Training</h3>
            <p>We come to you. Your team, your schedule, your real projects.</p>
            <span className="training-link">Get a Quote <i className="fas fa-arrow-right"></i></span>
          </Link>
          <Link to="/training/public-workshops" className="training-card featured">
            <span className="popular-badge">Popular</span>
            <div className="training-icon"><i className="fas fa-users"></i></div>
            <h3>Public Workshops</h3>
            <p>Open enrollment. Show up, learn, leave certified.</p>
            <span className="training-link">View Schedule <i className="fas fa-arrow-right"></i></span>
          </Link>
          <Link to="/training/courses" className="training-card">
            <div className="training-icon"><i className="fas fa-book"></i></div>
            <h3>Course Catalog</h3>
            <p>Every framework, every level. Find your course.</p>
            <span className="training-link">Browse Courses <i className="fas fa-arrow-right"></i></span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-bg-text" aria-hidden="true">LET'S GO</div>
        <div className="cta-content">
          <h2>Ready to<br /><span className="highlight">Fix It?</span></h2>
          <p>30 minutes. No pitch. Just diagnose the bottleneck and map next steps.</p>
          <Link to="/contact" className="btn-primary btn-large">
            Book a 30-Minute Diagnostic Call
            <i className="fas fa-arrow-right"></i>
          </Link>
          <span className="cta-email">or email <a href="mailto:hello@agilevelocity.com">hello@agilevelocity.com</a></span>
        </div>
      </section>
    </>
  );
}
