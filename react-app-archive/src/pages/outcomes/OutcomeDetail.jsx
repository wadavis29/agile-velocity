import { useParams, Link, Navigate } from 'react-router-dom';
import { outcomes, getOutcomeBySlug, getRelatedOutcomes } from '../../data/outcomes';

export default function OutcomeDetail() {
  const { slug } = useParams();
  const outcome = getOutcomeBySlug(slug);

  if (!outcome) {
    return <Navigate to="/outcomes" replace />;
  }

  const relatedOutcomes = getRelatedOutcomes(outcome.related);

  // Get outcome index for giant number display
  const outcomeIndex = outcomes.findIndex(o => o.id === outcome.id) + 1;
  const outcomeNumber = String(outcomeIndex).padStart(2, '0');

  return (
    <>
      {/* Outcome Hero - Bold Asymmetric Design */}
      <header className="outcome-hero-bold">
        {/* Giant Background Number */}
        <div className="outcome-hero-bg-number" aria-hidden="true">
          {outcomeNumber}
        </div>

        {/* Diagonal Accent Bar */}
        <div className="outcome-hero-diagonal"></div>

        {/* Floating Framework Badge */}
        <div className="outcome-hero-badge-float">
          <div className="badge-glow"></div>
          <div className="badge-content">
            <i className="fas fa-compass"></i>
            <span>Path to Agility<span className="reg">®</span></span>
          </div>
        </div>

        {/* Main Content */}
        <div className="outcome-hero-bold-layout">
          {/* Left: Content */}
          <div className="outcome-hero-bold-content">
            {/* Outcome Number + P2A Name */}
            <div className="outcome-hero-meta">
              <span className="outcome-number">{outcomeNumber}</span>
              <span className="outcome-divider">/</span>
              <span className="outcome-total">09</span>
              <span className="outcome-p2a-name">{outcome.p2aOutcome}</span>
            </div>

            {/* Main Title with Kinetic Animation */}
            <h1 className="outcome-hero-title">
              {outcome.title.split(outcome.highlight).map((part, index, array) => (
                <span key={index}>
                  {part && <span className="title-normal">{part}</span>}
                  {index < array.length - 1 && (
                    <span className="title-highlight">
                      <span className="highlight-text">{outcome.highlight}</span>
                      <span className="highlight-underline"></span>
                    </span>
                  )}
                </span>
              ))}
            </h1>

            {/* Lead Text */}
            <p className="outcome-hero-lead">{outcome.lead}</p>

            {/* P2A Definition Card */}
            <div className="outcome-definition-card">
              <div className="definition-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <div className="definition-content">
                <span className="definition-label">Path to Agility® Definition</span>
                <p className="definition-text">{outcome.p2aDefinition}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="outcome-hero-actions">
              <Link to="/contact" className="btn-kinetic-primary">
                <span className="btn-text">Let's Talk</span>
                <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                <span className="btn-bg"></span>
              </Link>
              <a href="#how-we-fix-it" className="btn-kinetic-ghost">
                See Our Approach
                <span className="ghost-arrow"><i className="fas fa-chevron-down"></i></span>
              </a>
            </div>
          </div>

          {/* Right: Visual Stats Stack */}
          <div className="outcome-hero-bold-visual">
            <div className="outcome-visual-stack">
              {outcome.problemStats.slice(0, 2).map((stat, index) => (
                <div key={index} className={`outcome-visual-stat ${index === 0 ? 'featured' : ''}`}>
                  <div className="visual-stat-number">
                    <span className="vs-num">{stat.num}</span>
                    <span className="vs-unit">{stat.unit}</span>
                  </div>
                  <span className="visual-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="outcome-visual-accent">
              <div className="accent-line accent-line-1"></div>
              <div className="accent-line accent-line-2"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="outcome-hero-scroll">
          <span>Explore</span>
          <div className="scroll-arrow-bounce">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </header>

      {/* The Problem - With Industry Stats */}
      <section className="outcome-section problem-section">
        <div className="outcome-section-inner">
          <span className="section-tag">The Problem</span>
          <h2>Why This <span className="highlight">Matters</span></h2>

          {/* Industry Statistics with Context */}
          <div className="problem-stats-grid">
            {outcome.problemStats.map((stat, index) => (
              <div key={index} className="problem-stat-card">
                <div className="problem-stat-header">
                  <span className="problem-stat-num">
                    {stat.num}<span className="problem-stat-unit">{stat.unit}</span>
                  </span>
                  <span className="problem-stat-label">{stat.label}</span>
                </div>
                <p className="problem-stat-context">{stat.context}</p>
                <span className="problem-stat-source">Source: {stat.source}</span>
              </div>
            ))}
          </div>

          {/* Problem Description */}
          <div className="problem-text">
            {outcome.problem.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Have This Problem */}
      <section className="outcome-section signs-section">
        <div className="outcome-section-inner">
          <span className="section-tag">Warning Signs</span>
          <h2>Sound <span className="highlight">Familiar?</span></h2>
          <p className="section-intro">If you're experiencing these symptoms, you're not alone—and we can help.</p>
          <div className="signs-grid">
            {outcome.signs.map((sign, index) => (
              <div key={index} className="sign-card">
                <i className={`fas ${sign.icon}`}></i>
                <p>{sign.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Fix It */}
      <section className="outcome-section approach-section" id="how-we-fix-it">
        <div className="outcome-section-inner">
          <span className="section-tag">Our Approach</span>
          <h2>How We <span className="highlight">Fix It</span></h2>
          <p className="section-intro">{outcome.approach.intro}</p>

          <div className="approach-steps">
            {outcome.approach.steps.map((step, index) => (
              <div key={index} className="approach-step">
                <div className="approach-step-header">
                  <span className="approach-step-num">{step.num}</span>
                  <h3>{step.title}</h3>
                </div>
                <p className="approach-step-text">{step.text}</p>
                <div className="approach-step-deliverable">
                  <i className="fas fa-check-circle"></i>
                  <span><strong>You get:</strong> {step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Changes - Outcomes with Proof */}
      <section className="outcome-section outcomes-section">
        <div className="outcome-section-inner">
          <span className="section-tag">Results</span>
          <h2>What <span className="highlight">Changes</span></h2>
          <p className="section-intro">{outcome.outcomes.intro}</p>

          <div className="outcomes-grid">
            {outcome.outcomes.items.map((item, index) => (
              <div key={index} className="outcome-result-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.proof && (
                  <blockquote className="outcome-proof">
                    <i className="fas fa-quote-left"></i>
                    {item.proof}
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-bg-text" aria-hidden="true">LET'S TALK</div>
        <div className="cta-content">
          <h2>{outcome.cta.title}</h2>
          <p>{outcome.cta.text}</p>
          <Link to="/contact" className="btn-primary btn-large">
            Start the Conversation <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Related Outcomes */}
      <section className="related-outcomes">
        <div className="related-outcomes-inner">
          <span className="section-tag">Related</span>
          <h2>Other Outcomes <span className="highlight">We Deliver</span></h2>
          <div className="related-grid">
            {relatedOutcomes.map(related => (
              <Link key={related.id} to={`/outcomes/${related.slug}`} className="outcome-card">
                <div className="outcome-card-icon">
                  <i className={`fas ${related.icon}`}></i>
                </div>
                <h3>{related.title}</h3>
                <p>{related.description}</p>
                <span className="card-arrow"><i className="fas fa-arrow-right"></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
