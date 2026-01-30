'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { outcomes } from '@/data/outcomes'
import { CaseStudyProofSection } from '@/components/CaseStudyCallout'

const clientLogos = [
  { src: '/images/logos/dell-technologies.webp', alt: 'Dell Technologies' },
  { src: '/images/logos/Southwest_Airlines_logo_2014.svg.png', alt: 'Southwest Airlines' },
  { src: '/images/logos/whole-foods.webp', alt: 'Whole Foods' },
  { src: '/images/logos/Honeywell_logo.svg.png', alt: 'Honeywell' },
  { src: '/images/logos/livestrong.svg', srcHover: '/images/logos/livestrong-color.svg', alt: 'Livestrong Foundation' },
  { src: '/images/logos/Lennar_Logo.svg.png', alt: 'Lennar' },
  { src: '/images/logos/dover.webp', alt: 'Dover' },
  { src: '/images/logos/TexasMutual.png', alt: 'Texas Mutual' }
]

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
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

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
              <span className="overline-text">Enterprise Transformation Experts</span>
            </div>

            <h1 className="hero-kinetic-title">
              <span className="title-line title-line-1">
                <span className="word">Let&apos;s</span>{' '}
                <span className="word accent">Fix</span>{' '}
                <span className="word">What&apos;s</span>
              </span>
              <span className="title-line title-line-2">
                <span className="word">Not</span>{' '}
                <span className="word stroke">Working.</span>
              </span>
            </h1>

            <p className="hero-kinetic-sub">
              Agile &amp; business transformation consulting for enterprise product and technology organizations. Diagnose bottlenecks, align leadership, and improve speed, predictability, and team health. All measured in outcomes.
            </p>

            <div className="hero-kinetic-actions">
              <Link href="/whats-in-your-way" className="hero-problem-link">
                <span className="problem-link-text">What&apos;s in your way?</span>
                <span className="problem-link-arrow"><i className="fas fa-arrow-right"></i></span>
              </Link>
              <Link href="/contact" className="btn-kinetic-primary">
                <span className="btn-text">Book a 30-Minute Diagnostic Call</span>
                <span className="btn-bg"></span>
              </Link>
            </div>
          </div>

          {/* Right: Featured Stat with Contrast */}
          <div className="hero-featured-stat">
            <div className="featured-stat-number">
              <span className="featured-stat-giant">70</span>
              <span className="featured-stat-unit">%</span>
            </div>
            <p className="featured-stat-label">of transformations fail</p>
            <p className="featured-stat-source">*Industry average</p>

            <div className="featured-stat-divider"></div>

            <p className="featured-stat-tagline">We fix what others break.</p>

            <div className="featured-stat-proof">
              <div className="proof-item">
                <span className="proof-number">100+</span>
                <span className="proof-label">transformations</span>
              </div>
              <span className="proof-divider">·</span>
              <Link href="/recognition" className="proof-item proof-link">
                <span className="proof-number">#17</span>
                <span className="proof-label">Fastest-Growing (Longhorn 100)</span>
              </Link>
            </div>
          </div>
        </div>

      </header>

      {/* Logos Strip */}
      <section className="logos">
        <div className="logos-inner">
          <span className="logos-label">Trusted by industry leaders</span>
          <div className="logos-track">
            {clientLogos.map((logo, index) => (
              logo.srcHover ? (
                <span key={index} className="logo-swap-wrapper">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={50}
                    loading="lazy"
                    className="logo-default"
                  />
                  <Image
                    src={logo.srcHover}
                    alt={logo.alt}
                    width={120}
                    height={50}
                    loading="lazy"
                    className="logo-hover"
                  />
                </span>
              ) : (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={50}
                  loading="lazy"
                />
              )
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
              <p>CEOs, CPOs, CTOs, VPs of Engineering, Product Leaders, Transformation Leads</p>
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
          <span className="section-tag">What&apos;s Broken</span>
          <h2 className="section-title">We&apos;ve Seen It All.<br /><span className="highlight">We&apos;ve Fixed It All.</span></h2>
        </div>
        <div className="problems-grid">
          <Link href="/whats-in-your-way/stalled-or-superficial-transformation" className="problem-card">
            <div className="problem-icon"><i className="fas fa-pause"></i></div>
            <h3>Stalled Transformation</h3>
            <p>Started strong, lost momentum</p>
          </Link>
          <Link href="/whats-in-your-way/portfolio-and-prioritization-chaos" className="problem-card">
            <div className="problem-icon"><i className="fas fa-shuffle"></i></div>
            <h3>Prioritization Chaos</h3>
            <p>Too much WIP, nothing ships</p>
          </Link>
          <Link href="/whats-in-your-way/messy-scaling-and-dependency-hell" className="problem-card">
            <div className="problem-icon"><i className="fas fa-diagram-project"></i></div>
            <h3>Scaling & Dependencies</h3>
            <p>Teams blocked everywhere</p>
          </Link>
          <Link href="/whats-in-your-way/leadership-misalignment-and-governance-drag" className="problem-card">
            <div className="problem-icon"><i className="fas fa-gavel"></i></div>
            <h3>Leadership Misalignment</h3>
            <p>Slow decisions, misaligned leaders</p>
          </Link>
          <Link href="/whats-in-your-way/silos-handoffs-and-support-work-derailment" className="problem-card">
            <div className="problem-icon"><i className="fas fa-cubes"></i></div>
            <h3>Silos & Handoffs</h3>
            <p>Endless handoffs, no ownership</p>
          </Link>
          <Link href="/whats-in-your-way/no-real-visibility-and-vanity-metrics" className="problem-card">
            <div className="problem-icon"><i className="fas fa-chart-pie"></i></div>
            <h3>Vanity Metrics</h3>
            <p>No real visibility</p>
          </Link>
          <Link href="/whats-in-your-way/burnout-low-trust-and-change-fatigue" className="problem-card">
            <div className="problem-icon"><i className="fas fa-battery-quarter"></i></div>
            <h3>Burnout & Change Fatigue</h3>
            <p>Exhausted, resistant teams</p>
          </Link>
          <Link href="/whats-in-your-way/ai-and-modernization-without-a-strategy" className="problem-card hot">
            <span className="hot-badge"><i className="fas fa-fire"></i> Hot Topic</span>
            <div className="problem-icon"><i className="fas fa-microchip"></i></div>
            <h3>AI Without Strategy</h3>
            <p>Tools without a plan</p>
          </Link>
        </div>
        {/* Mid-page CTA */}
        <div className="mid-page-cta">
          <p>Sound familiar? Let&apos;s diagnose the real issue.</p>
          <Link href="/contact" className="btn-primary">
            Book a 30-Minute Diagnostic Call
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
            <p className="framework-desc">A proven methodology that connects what you <em>do</em> to what you <em>achieve</em>, from team behaviors all the way to business results.</p>
            <div className="framework-actions">
              <Link href="/path-to-agility" className="btn-primary">Explore the Framework</Link>
              <Link href="/path-to-agility/navigator" className="btn-ghost">Navigator Software</Link>
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
          </div>
        </div>
        {/* Mid-page CTA */}
        <div className="mid-page-cta mid-page-cta-alt">
          <p>See how Path to Agility® connects practices to business results.</p>
          <Link href="/path-to-agility" className="btn-ghost">
            Explore the Full Framework
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
            <Link key={outcome.id} href={`/outcomes/${outcome.slug}`} className="outcome-card">
              <span className="outcome-card-p2a">{outcome.p2aOutcome}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.description.substring(0, 80)}...</p>
              <span className="card-arrow"><i className="fas fa-arrow-right"></i></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Case Study Proof Section */}
      <CaseStudyProofSection />

      {/* Testimonials */}
      <section className="testimonials">
        <div className="testimonials-header">
          <span className="section-tag">Proof</span>
          <h2 className="section-title">Don&apos;t Take<br /><span className="highlight">Our Word</span> For It</h2>
        </div>
        <div className="testimonials-container">
          <button
            className="testimonial-arrow testimonial-arrow-prev"
            onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial ${index === activeTestimonial ? 'active' : ''}`}>
                <div className="testimonial-quote">
                  <span className="quote-mark open">&ldquo;</span>
                  <blockquote>{testimonial.quote}</blockquote>
                  <span className="quote-mark close">&rdquo;</span>
                </div>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.title}</span>
                  <span className="company">{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            className="testimonial-arrow testimonial-arrow-next"
            onClick={() => setActiveTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="testimonial-nav">
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
        </div>
        <Link href="/insights/case-studies" className="testimonials-link">View Case Studies <i className="fas fa-arrow-right"></i></Link>
      </section>

      {/* Training Section */}
      <section className="training" id="training">
        <div className="training-header">
          <span className="section-tag">Training</span>
          <h2 className="section-title">Level Up Your<br /><span className="highlight">Entire Organization</span></h2>
          <p>Hands-on workshops in SAFe, Scrum, and Kanban. Practice, collaborate, and leave ready to apply.</p>
        </div>
        <div className="training-grid">
          <Link href="/training/for-organizations" className="training-card">
            <div className="training-icon"><i className="fas fa-building"></i></div>
            <h3>Private Training</h3>
            <p>More than a course. Work on real projects and leave with solutions.</p>
            <span className="training-link">Get a Quote <i className="fas fa-arrow-right"></i></span>
          </Link>
          <Link href="/training/public-workshops" className="training-card featured">
            <span className="popular-badge">Popular</span>
            <div className="training-icon"><i className="fas fa-users"></i></div>
            <h3>Public Workshops</h3>
            <p>Interactive sessions, not lectures. Practice what you learn and leave certified.</p>
            <span className="training-link">View Schedule <i className="fas fa-arrow-right"></i></span>
          </Link>
          <Link href="/training/courses" className="training-card">
            <div className="training-icon"><i className="fas fa-book"></i></div>
            <h3>Course Catalog</h3>
            <p>30+ courses. Every framework, every level. Find your workshop.</p>
            <span className="training-link">Browse Courses <i className="fas fa-arrow-right"></i></span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-bg-text" aria-hidden="true">LET&apos;S GO</div>
        <div className="cta-content">
          <h2>Ready to<br /><span className="highlight">Fix It?</span></h2>
          <p>30 minutes. No pitch. Just diagnose the bottleneck and map next steps.</p>
          <Link href="/contact" className="btn-primary btn-large">
            Book a 30-Minute Diagnostic Call
          </Link>
        </div>
      </section>
    </>
  )
}
