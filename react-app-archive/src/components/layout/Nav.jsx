import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { outcomes } from '../../data/outcomes';

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const location = useLocation();

  const isOutcomesActive = location.pathname.startsWith('/outcomes');
  const isProblemsActive = location.pathname.startsWith('/whats-in-your-way');

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => {
    setMobileOpen(false);
    setExpandedSection(null);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="logo">
            <img src="https://agilevelocity.com/wp-content/uploads/2025/12/sunrise-landscape-2023.svg" alt="Agile Velocity" />
          </Link>
          <div className="nav-links">
            <div className="nav-dropdown has-mega">
              <Link to="/outcomes" className={isOutcomesActive ? 'active' : ''}>
                Outcomes <i className="fas fa-chevron-down"></i>
              </Link>
              <div className="mega-menu">
                <div className="mega-menu-inner">
                  <div className="mega-col">
                    <h4>Business Outcomes</h4>
                    {outcomes.slice(0, 5).map(outcome => (
                      <Link key={outcome.id} to={`/outcomes/${outcome.slug}`} className="mega-outcome-link">
                        <span className="mega-outcome-p2a">{outcome.p2aOutcome}</span>
                        <span className="mega-outcome-title">{outcome.title}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mega-col">
                    <h4>&nbsp;</h4>
                    {outcomes.slice(5).map(outcome => (
                      <Link key={outcome.id} to={`/outcomes/${outcome.slug}`} className="mega-outcome-link">
                        <span className="mega-outcome-p2a">{outcome.p2aOutcome}</span>
                        <span className="mega-outcome-title">{outcome.title}</span>
                      </Link>
                    ))}
                    <Link to="/outcomes" className="mega-view-all">
                      View All Outcomes <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-dropdown has-mega">
              <Link to="/whats-in-your-way" className={isProblemsActive ? 'active' : ''}>
                What's In Your Way? <i className="fas fa-chevron-down"></i>
              </Link>
              <div className="mega-menu">
                <div className="mega-menu-inner">
                  <div className="mega-col">
                    <h4>Common Challenges</h4>
                    <Link to="/whats-in-your-way/stalled-or-superficial-transformation">Stalled Transformation</Link>
                    <Link to="/whats-in-your-way/portfolio-and-prioritization-chaos">Prioritization Chaos</Link>
                    <Link to="/whats-in-your-way/messy-scaling-and-dependency-hell">Scaling & Dependencies</Link>
                    <Link to="/whats-in-your-way/leadership-misalignment-and-governance-drag">Leadership Misalignment</Link>
                  </div>
                  <div className="mega-col">
                    <h4>&nbsp;</h4>
                    <Link to="/whats-in-your-way/silos-handoffs-and-support-work-derailment">Silos & Handoffs</Link>
                    <Link to="/whats-in-your-way/no-real-visibility-and-vanity-metrics">Vanity Metrics</Link>
                    <Link to="/whats-in-your-way/burnout-low-trust-and-change-fatigue">Burnout & Change Fatigue</Link>
                    <Link to="/whats-in-your-way/ai-and-modernization-without-a-strategy" className="mega-hot">
                      <i className="fas fa-fire"></i> AI Without Strategy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-dropdown has-mega">
              <Link to="/path-to-agility">Framework <i className="fas fa-chevron-down"></i></Link>
              <div className="mega-menu mega-menu-sm">
                <div className="mega-menu-inner">
                  <div className="mega-col">
                    <h4>Path to Agility®</h4>
                    <Link to="/path-to-agility">About the Framework</Link>
                    <Link to="/path-to-agility/navigator">Navigator Software</Link>
                    <Link to="/path-to-agility/partner-program">Become a Partner</Link>
                    <Link to="/request-a-trial" className="mega-cta">
                      Request a Trial <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-dropdown has-mega">
              <Link to="/training">Training <i className="fas fa-chevron-down"></i></Link>
              <div className="mega-menu mega-menu-sm">
                <div className="mega-menu-inner">
                  <div className="mega-col">
                    <h4>Agile Training</h4>
                    <Link to="/training/courses">Browse All Courses</Link>
                    <Link to="/training/public-workshops">Upcoming Public Workshops</Link>
                    <Link to="/training/for-organizations">Private Training for Teams</Link>
                  </div>
                </div>
              </div>
            </div>
                      </div>
          <Link to="/contact" className="nav-cta">Book a Call <i className="fas fa-arrow-right"></i></Link>
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
          <div className="mobile-nav-section">
            <button
              className={`mobile-nav-header ${expandedSection === 'outcomes' ? 'expanded' : ''}`}
              onClick={() => toggleSection('outcomes')}
            >
              <span>Outcomes</span>
              <i className={`fas fa-chevron-${expandedSection === 'outcomes' ? 'up' : 'down'}`}></i>
            </button>
            <div className={`mobile-nav-links ${expandedSection === 'outcomes' ? 'expanded' : ''}`}>
              <Link to="/outcomes" onClick={closeMobile}>View All Outcomes</Link>
              {outcomes.map(outcome => (
                <Link key={outcome.id} to={`/outcomes/${outcome.slug}`} onClick={closeMobile}>
                  {outcome.title}
                </Link>
              ))}
            </div>
          </div>

          {/* What's In Your Way Section */}
          <div className="mobile-nav-section">
            <button
              className={`mobile-nav-header ${expandedSection === 'problems' ? 'expanded' : ''}`}
              onClick={() => toggleSection('problems')}
            >
              <span>What's In Your Way?</span>
              <i className={`fas fa-chevron-${expandedSection === 'problems' ? 'up' : 'down'}`}></i>
            </button>
            <div className={`mobile-nav-links ${expandedSection === 'problems' ? 'expanded' : ''}`}>
              <Link to="/whats-in-your-way" onClick={closeMobile}>View All Challenges</Link>
              <Link to="/whats-in-your-way/stalled-or-superficial-transformation" onClick={closeMobile}>Stalled Transformation</Link>
              <Link to="/whats-in-your-way/portfolio-and-prioritization-chaos" onClick={closeMobile}>Prioritization Chaos</Link>
              <Link to="/whats-in-your-way/messy-scaling-and-dependency-hell" onClick={closeMobile}>Scaling & Dependencies</Link>
              <Link to="/whats-in-your-way/leadership-misalignment-and-governance-drag" onClick={closeMobile}>Leadership Misalignment</Link>
              <Link to="/whats-in-your-way/silos-handoffs-and-support-work-derailment" onClick={closeMobile}>Silos & Handoffs</Link>
              <Link to="/whats-in-your-way/no-real-visibility-and-vanity-metrics" onClick={closeMobile}>Vanity Metrics</Link>
              <Link to="/whats-in-your-way/burnout-low-trust-and-change-fatigue" onClick={closeMobile}>Burnout & Change Fatigue</Link>
              <Link to="/whats-in-your-way/ai-and-modernization-without-a-strategy" onClick={closeMobile}>AI Without Strategy</Link>
            </div>
          </div>

          {/* Framework Section */}
          <div className="mobile-nav-section">
            <button
              className={`mobile-nav-header ${expandedSection === 'framework' ? 'expanded' : ''}`}
              onClick={() => toggleSection('framework')}
            >
              <span>Path to Agility</span>
              <i className={`fas fa-chevron-${expandedSection === 'framework' ? 'up' : 'down'}`}></i>
            </button>
            <div className={`mobile-nav-links ${expandedSection === 'framework' ? 'expanded' : ''}`}>
              <Link to="/path-to-agility" onClick={closeMobile}>About the Framework</Link>
              <Link to="/path-to-agility/navigator" onClick={closeMobile}>Navigator Software</Link>
              <Link to="/path-to-agility/partner-program" onClick={closeMobile}>Become a Partner</Link>
              <Link to="/request-a-trial" onClick={closeMobile}>Request a Trial</Link>
            </div>
          </div>

          {/* Training Section */}
          <div className="mobile-nav-section">
            <button
              className={`mobile-nav-header ${expandedSection === 'training' ? 'expanded' : ''}`}
              onClick={() => toggleSection('training')}
            >
              <span>Training</span>
              <i className={`fas fa-chevron-${expandedSection === 'training' ? 'up' : 'down'}`}></i>
            </button>
            <div className={`mobile-nav-links ${expandedSection === 'training' ? 'expanded' : ''}`}>
              <Link to="/training" onClick={closeMobile}>Training Overview</Link>
              <Link to="/training/courses" onClick={closeMobile}>Browse All Courses</Link>
              <Link to="/training/public-workshops" onClick={closeMobile}>Public Workshops</Link>
              <Link to="/training/for-organizations" onClick={closeMobile}>Private Training</Link>
            </div>
          </div>

          {/* Simple Links */}
          <Link to="/insights" className="mobile-nav-simple" onClick={closeMobile}>Insights</Link>
          <Link to="/about" className="mobile-nav-simple" onClick={closeMobile}>About</Link>

          {/* CTAs */}
          <div className="mobile-nav-ctas">
            <Link to="/contact" className="mobile-cta" onClick={closeMobile}>
              Book a Call <i className="fas fa-arrow-right"></i>
            </Link>
            <a href="https://navigator.pathtoagility.com/" className="mobile-login" target="_blank" rel="noopener noreferrer">
              Navigator Login <i className="fas fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
