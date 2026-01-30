import { Link } from 'react-router-dom';

export default function CorporateTraining() {
  return (
    <>
      {/* Hero Section */}
      <section className="corporate-hero">
        <div className="corporate-hero-inner">
          <span className="section-tag">Private Training</span>
          <h1 className="corporate-hero-title">
            Training Built<br /><span className="highlight">For Your Team</span>
          </h1>
          <p className="corporate-hero-sub">
            We bring the training to you. Your team learns together, on your schedule,
            with content tailored to your real projects and challenges.
          </p>
          <div className="corporate-hero-stats">
            <div className="corporate-stat">
              <span className="corporate-stat-num">8-30</span>
              <span className="corporate-stat-label">Participants per session</span>
            </div>
            <div className="corporate-stat">
              <span className="corporate-stat-num">100+</span>
              <span className="corporate-stat-label">Corporate clients trained</span>
            </div>
            <div className="corporate-stat">
              <span className="corporate-stat-num">30+</span>
              <span className="corporate-stat-label">Courses available</span>
            </div>
          </div>
          <div className="corporate-hero-actions">
            <Link to="/contact" className="btn-primary">
              Get a Training Quote <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/training/courses" className="btn-ghost">
              Browse Course Catalog <i className="fas fa-book-open"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="corporate-process">
        <div className="corporate-process-inner">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Three Steps to<br /><span className="highlight">Launch Training</span></h2>
          </div>
          <div className="corporate-process-steps">
            <div className="corporate-step">
              <div className="corporate-step-num">1</div>
              <h3>Consult</h3>
              <p>We discuss your goals, team composition, and current challenges to recommend the right courses.</p>
            </div>
            <div className="corporate-step-connector"></div>
            <div className="corporate-step">
              <div className="corporate-step-num">2</div>
              <h3>Customize</h3>
              <p>We tailor content, examples, and exercises to your industry, tools, and real projects.</p>
            </div>
            <div className="corporate-step-connector"></div>
            <div className="corporate-step">
              <div className="corporate-step-num">3</div>
              <h3>Deliver</h3>
              <p>Your team learns together: in-person at your location, virtually, or hybrid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="corporate-benefits">
        <div className="corporate-benefits-inner">
          <div className="section-header">
            <span className="section-tag">Why Private Training</span>
            <h2 className="section-title">Benefits of<br /><span className="highlight">Training Together</span></h2>
          </div>
          <div className="corporate-benefits-grid">
            <div className="corporate-benefit">
              <i className="fas fa-users"></i>
              <h3>Shared Language</h3>
              <p>Your entire team builds the same understanding, vocabulary, and practices. No translation needed.</p>
            </div>
            <div className="corporate-benefit">
              <i className="fas fa-bullseye"></i>
              <h3>Customized Content</h3>
              <p>We use your real projects, tools, and challenges as examples and exercises.</p>
            </div>
            <div className="corporate-benefit">
              <i className="fas fa-calendar-alt"></i>
              <h3>Flexible Scheduling</h3>
              <p>Train on your timeline. Full days, half-days spread over weeks, whatever fits your sprint cycles.</p>
            </div>
            <div className="corporate-benefit">
              <i className="fas fa-lock"></i>
              <h3>Safe to Ask Questions</h3>
              <p>No strangers in the room. Your team can discuss real issues openly without competitive concerns.</p>
            </div>
            <div className="corporate-benefit">
              <i className="fas fa-dollar-sign"></i>
              <h3>Cost Effective</h3>
              <p>For 8+ participants, private training often costs less per person than public workshops.</p>
            </div>
            <div className="corporate-benefit">
              <i className="fas fa-rocket"></i>
              <h3>Immediate Application</h3>
              <p>Teams leave training aligned and ready to apply new practices in the next sprint.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="corporate-delivery">
        <div className="corporate-delivery-inner">
          <div className="section-header">
            <span className="section-tag">Delivery Options</span>
            <h2 className="section-title">Train Your Way</h2>
          </div>
          <div className="corporate-delivery-grid">
            <div className="corporate-delivery-card">
              <i className="fas fa-building"></i>
              <h3>On-Site</h3>
              <p>We travel to your office. Ideal for team building and immersive learning experiences.</p>
            </div>
            <div className="corporate-delivery-card">
              <i className="fas fa-video"></i>
              <h3>Virtual Live</h3>
              <p>Interactive sessions via Zoom or Teams. Same engagement, no travel required.</p>
            </div>
            <div className="corporate-delivery-card">
              <i className="fas fa-random"></i>
              <h3>Hybrid</h3>
              <p>Mix of in-person and remote participants. We make it work seamlessly.</p>
            </div>
            <div className="corporate-delivery-card">
              <i className="fas fa-calendar-week"></i>
              <h3>Split Sessions</h3>
              <p>Half-days spread across 1-2 weeks. Prevents meeting fatigue, allows practice between sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Teach - Links to Catalog */}
      <section className="corporate-what-we-teach">
        <div className="corporate-what-we-teach-inner">
          <div className="section-header">
            <span className="section-tag">30+ Courses</span>
            <h2 className="section-title">What We<br /><span className="highlight">Can Teach</span></h2>
            <p className="section-subtitle">All courses in our catalog are available for private delivery.</p>
          </div>
          <div className="corporate-course-categories">
            <Link to="/training/courses?category=scrum" className="corporate-category-link">
              <i className="fas fa-sync-alt"></i>
              <span>Scrum & Agile Fundamentals</span>
            </Link>
            <Link to="/training/courses?category=safe" className="corporate-category-link">
              <i className="fas fa-sitemap"></i>
              <span>SAFe (Scaled Agile)</span>
            </Link>
            <Link to="/training/courses?category=leadership" className="corporate-category-link">
              <i className="fas fa-chess-king"></i>
              <span>Leadership & Management</span>
            </Link>
            <Link to="/training/courses?category=kanban" className="corporate-category-link">
              <i className="fas fa-columns"></i>
              <span>Kanban & Flow</span>
            </Link>
            <Link to="/training/courses?category=specialized" className="corporate-category-link">
              <i className="fas fa-cogs"></i>
              <span>Specialized Programs</span>
            </Link>
          </div>
          <div className="corporate-browse-all">
            <Link to="/training/courses" className="btn-ghost">
              Browse Full Course Catalog <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form CTA */}
      <section className="corporate-cta">
        <div className="corporate-cta-inner">
          <div className="corporate-cta-content">
            <h2>Ready to Train Your Team?</h2>
            <p>Tell us about your team and goals. We'll recommend the right courses and provide a custom quote.</p>
            <ul className="corporate-cta-checklist">
              <li><i className="fas fa-check"></i> No obligation consultation</li>
              <li><i className="fas fa-check"></i> Custom quote within 48 hours</li>
              <li><i className="fas fa-check"></i> Flexible scheduling options</li>
            </ul>
          </div>
          <div className="corporate-cta-action">
            <Link to="/contact" className="btn-primary btn-large">
              Get a Training Quote <i className="fas fa-arrow-right"></i>
            </Link>
            <span className="corporate-cta-alt">
              or call <a href="tel:512-298-2835">512-298-2835</a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
