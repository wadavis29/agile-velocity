'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { outcomes } from '@/data/outcomes'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState(null)
  const pathname = usePathname()

  const isOutcomesActive = pathname.startsWith('/outcomes')
  const isProblemsActive = pathname.startsWith('/whats-in-your-way')

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen)
    if (mobileOpen) setExpandedSection(null)
  }
  const closeMobile = () => {
    setMobileOpen(false)
    setExpandedSection(null)
  }
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="logo">
            <Image
              src="/images/agile-velocity-logo-white.svg"
              alt="Agile Velocity"
              width={180}
              height={40}
              priority
              unoptimized
            />
          </Link>
          <div className="nav-links">
            <div className="nav-dropdown has-mega">
              <Link href="/outcomes" className={isOutcomesActive ? 'active' : ''}>
                Outcomes <i className="fas fa-chevron-down"></i>
              </Link>
              <div className="mega-menu">
                <div className="mega-menu-inner">
                  <div className="mega-col">
                    <h4>Business Outcomes</h4>
                    {outcomes.slice(0, 5).map(outcome => (
                      <Link key={outcome.id} href={`/outcomes/${outcome.slug}`} className="mega-outcome-link">
                        <span className="mega-outcome-p2a">{outcome.p2aOutcome}</span>
                        <span className="mega-outcome-title">{outcome.title}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mega-col">
                    <h4>&nbsp;</h4>
                    {outcomes.slice(5).map(outcome => (
                      <Link key={outcome.id} href={`/outcomes/${outcome.slug}`} className="mega-outcome-link">
                        <span className="mega-outcome-p2a">{outcome.p2aOutcome}</span>
                        <span className="mega-outcome-title">{outcome.title}</span>
                      </Link>
                    ))}
                    <Link href="/outcomes" className="mega-view-all">
                      View All Outcomes <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-dropdown has-mega">
              <Link href="/whats-in-your-way" className={isProblemsActive ? 'active' : ''}>
                What&apos;s In Your Way? <i className="fas fa-chevron-down"></i>
              </Link>
              <div className="mega-menu">
                <div className="mega-menu-inner">
                  <div className="mega-col">
                    <h4>Common Challenges</h4>
                    <Link href="/whats-in-your-way/stalled-or-superficial-transformation">Stalled Transformation</Link>
                    <Link href="/whats-in-your-way/portfolio-and-prioritization-chaos">Prioritization Chaos</Link>
                    <Link href="/whats-in-your-way/messy-scaling-and-dependency-hell">Scaling & Dependencies</Link>
                    <Link href="/whats-in-your-way/leadership-misalignment-and-governance-drag">Leadership Misalignment</Link>
                  </div>
                  <div className="mega-col">
                    <h4>&nbsp;</h4>
                    <Link href="/whats-in-your-way/silos-handoffs-and-support-work-derailment">Silos & Handoffs</Link>
                    <Link href="/whats-in-your-way/no-real-visibility-and-vanity-metrics">Vanity Metrics</Link>
                    <Link href="/whats-in-your-way/burnout-low-trust-and-change-fatigue">Burnout & Change Fatigue</Link>
                    <Link href="/whats-in-your-way/ai-and-modernization-without-a-strategy" className="mega-hot">
                      <i className="fas fa-fire"></i> AI Without Strategy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-dropdown has-mega">
              <Link href="/path-to-agility">Framework <i className="fas fa-chevron-down"></i></Link>
              <div className="mega-menu mega-menu-sm">
                <div className="mega-menu-inner">
                  <div className="mega-col">
                    <h4>Path to Agility®</h4>
                    <Link href="/path-to-agility">About the Framework</Link>
                    <Link href="/path-to-agility/navigator">Navigator Software</Link>
                    <Link href="/path-to-agility/partner">Become a Partner</Link>
                    <Link href="/request-a-trial" className="mega-cta">
                      Request a Trial <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-dropdown has-mega">
              <Link href="/training">Training <i className="fas fa-chevron-down"></i></Link>
              <div className="mega-menu mega-menu-sm">
                <div className="mega-menu-inner">
                  <div className="mega-col">
                    <h4>Agile Training</h4>
                    <Link href="/training/courses">Browse All Courses</Link>
                    <Link href="/training/public-workshops">Upcoming Public Workshops</Link>
                    <Link href="/training/for-organizations">Private Training for Teams</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/contact" className="nav-cta">Book a Call <i className="fas fa-arrow-right"></i></Link>
          <button className="mobile-toggle" aria-label="Menu" onClick={toggleMobile}>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMobile} aria-label="Close menu">
          <i className="fas fa-times"></i>
        </button>
        <div className="mobile-menu-inner">
          {/* Outcomes Section */}
          <div className={`mobile-accordion ${expandedSection === 'outcomes' ? 'expanded' : ''}`}>
            <button className="mobile-accordion-header" onClick={() => toggleSection('outcomes')}>
              Outcomes <i className={`fas fa-chevron-${expandedSection === 'outcomes' ? 'up' : 'down'}`}></i>
            </button>
            <div className="mobile-accordion-content">
              <Link href="/outcomes" onClick={closeMobile} className="mobile-view-all">
                All Outcomes <i className="fas fa-arrow-right"></i>
              </Link>
              {outcomes.map(outcome => (
                <Link key={outcome.id} href={`/outcomes/${outcome.slug}`} onClick={closeMobile} className="mobile-sub-link">
                  {outcome.title}
                </Link>
              ))}
            </div>
          </div>

          {/* What's In Your Way Section */}
          <div className={`mobile-accordion ${expandedSection === 'problems' ? 'expanded' : ''}`}>
            <button className="mobile-accordion-header" onClick={() => toggleSection('problems')}>
              What&apos;s In Your Way? <i className={`fas fa-chevron-${expandedSection === 'problems' ? 'up' : 'down'}`}></i>
            </button>
            <div className="mobile-accordion-content">
              <Link href="/whats-in-your-way" onClick={closeMobile} className="mobile-view-all">
                All Challenges <i className="fas fa-arrow-right"></i>
              </Link>
              <Link href="/whats-in-your-way/stalled-or-superficial-transformation" onClick={closeMobile} className="mobile-sub-link">Stalled Transformation</Link>
              <Link href="/whats-in-your-way/portfolio-and-prioritization-chaos" onClick={closeMobile} className="mobile-sub-link">Prioritization Chaos</Link>
              <Link href="/whats-in-your-way/messy-scaling-and-dependency-hell" onClick={closeMobile} className="mobile-sub-link">Scaling & Dependencies</Link>
              <Link href="/whats-in-your-way/leadership-misalignment-and-governance-drag" onClick={closeMobile} className="mobile-sub-link">Leadership Misalignment</Link>
              <Link href="/whats-in-your-way/silos-handoffs-and-support-work-derailment" onClick={closeMobile} className="mobile-sub-link">Silos & Handoffs</Link>
              <Link href="/whats-in-your-way/no-real-visibility-and-vanity-metrics" onClick={closeMobile} className="mobile-sub-link">Vanity Metrics</Link>
              <Link href="/whats-in-your-way/burnout-low-trust-and-change-fatigue" onClick={closeMobile} className="mobile-sub-link">Burnout & Change Fatigue</Link>
              <Link href="/whats-in-your-way/ai-and-modernization-without-a-strategy" onClick={closeMobile} className="mobile-sub-link mobile-hot">
                <i className="fas fa-fire"></i> AI Without Strategy
              </Link>
            </div>
          </div>

          {/* Framework Section */}
          <div className={`mobile-accordion ${expandedSection === 'framework' ? 'expanded' : ''}`}>
            <button className="mobile-accordion-header" onClick={() => toggleSection('framework')}>
              Framework <i className={`fas fa-chevron-${expandedSection === 'framework' ? 'up' : 'down'}`}></i>
            </button>
            <div className="mobile-accordion-content">
              <Link href="/path-to-agility" onClick={closeMobile} className="mobile-sub-link">About Path to Agility®</Link>
              <Link href="/path-to-agility/navigator" onClick={closeMobile} className="mobile-sub-link">Navigator Software</Link>
              <Link href="/path-to-agility/partner" onClick={closeMobile} className="mobile-sub-link">Become a Partner</Link>
            </div>
          </div>

          {/* Training Section */}
          <div className={`mobile-accordion ${expandedSection === 'training' ? 'expanded' : ''}`}>
            <button className="mobile-accordion-header" onClick={() => toggleSection('training')}>
              Training <i className={`fas fa-chevron-${expandedSection === 'training' ? 'up' : 'down'}`}></i>
            </button>
            <div className="mobile-accordion-content">
              <Link href="/training" onClick={closeMobile} className="mobile-view-all">Training Overview <i className="fas fa-arrow-right"></i></Link>
              <Link href="/training/courses" onClick={closeMobile} className="mobile-sub-link">Browse All Courses</Link>
              <Link href="/training/public-workshops" onClick={closeMobile} className="mobile-sub-link">Public Workshops</Link>
              <Link href="/training/for-organizations" onClick={closeMobile} className="mobile-sub-link">Private Training</Link>
            </div>
          </div>

          {/* Simple Links */}
          <Link href="/about" onClick={closeMobile} className="mobile-simple-link">About</Link>

          {/* CTAs */}
          <div className="mobile-cta-group">
            <Link href="/contact" className="mobile-cta" onClick={closeMobile}>Book a Call</Link>
            <a href="https://p2anav.com" className="mobile-login" target="_blank" rel="noopener noreferrer">
              Navigator Login <i className="fas fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
