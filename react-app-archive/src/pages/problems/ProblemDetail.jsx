import { useParams, Link, Navigate } from 'react-router-dom';
import { problems, getProblemBySlug, getRelatedProblems } from '../../data/problems';

export default function ProblemDetail() {
  const { slug } = useParams();
  const problem = getProblemBySlug(slug);

  if (!problem) {
    return <Navigate to="/whats-in-your-way" replace />;
  }

  const relatedProblems = getRelatedProblems(problem.related);
  const problemIndex = problems.findIndex(p => p.id === problem.id) + 1;
  const problemNumber = String(problemIndex).padStart(2, '0');

  return (
    <>
      {/* Problem Hero - Pain First */}
      <header className="problem-hero problem-hero-pain">
        {/* Background Number */}
        <div className="problem-hero-bg-number" aria-hidden="true">
          {problemNumber}
        </div>

        {/* Hot Badge if applicable */}
        {problem.hot && (
          <div className="problem-hero-hot-badge">
            <i className="fas fa-fire"></i>
            <span>Hot Topic</span>
          </div>
        )}

        {/* Main Content */}
        <div className="problem-hero-layout">
          {/* Left: Content */}
          <div className="problem-hero-content">
            {/* Problem Number + Title */}
            <div className="problem-hero-meta">
              <span className="problem-number">{problemNumber}</span>
              <span className="problem-divider">/</span>
              <span className="problem-total">08</span>
              <span className="problem-type">Common Blocker</span>
            </div>

            {/* Main Title */}
            <h1 className="problem-hero-title">
              {problem.title}
            </h1>
            <p className="problem-hero-tagline">{problem.tagline}</p>

            {/* Problem Headline - Lead with the PAIN */}
            <div className="problem-hero-pain-content">
              <h2 className="pain-headline">{problem.problem.headline}</h2>
              <p className="pain-description">{problem.problem.description}</p>
            </div>

            {/* Actions */}
            <div className="problem-hero-actions">
              <a href="#the-solution" className="btn-kinetic-primary">
                <span className="btn-text">Show Me the Fix</span>
                <span className="btn-icon"><i className="fas fa-arrow-down"></i></span>
                <span className="btn-bg"></span>
              </a>
              <a href="#symptoms" className="btn-kinetic-ghost">
                Sound Familiar?
                <span className="ghost-arrow"><i className="fas fa-chevron-down"></i></span>
              </a>
            </div>
          </div>

          {/* Right: Symptoms Preview */}
          <div className="problem-hero-visual">
            <div className="symptoms-preview-card">
              <span className="symptoms-preview-label">Does This Sound Like You?</span>
              <ul className="symptoms-preview-list">
                {problem.problem.symptoms.slice(0, 4).map((symptom, index) => (
                  <li key={index}>
                    <i className={`fas ${symptom.icon}`}></i>
                    <span>{symptom.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="problem-hero-scroll">
          <span>Keep reading</span>
          <div className="scroll-arrow-bounce">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </header>

      {/* Full Symptoms Section */}
      <section className="problem-section pain-section" id="symptoms">
        <div className="problem-section-inner">
          <span className="section-tag">The Symptoms</span>
          <h2 className="section-title-large">You're Not Imagining It</h2>
          <p className="section-lead">If any of these sound familiar, you've found the right place.</p>

          {/* Symptoms Grid */}
          <div className="symptoms-grid">
            {problem.problem.symptoms.map((symptom, index) => (
              <div key={index} className="symptom-card">
                <div className="symptom-icon">
                  <i className={`fas ${symptom.icon}`}></i>
                </div>
                <p>{symptom.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Happens */}
      <section className="problem-section root-cause-section">
        <div className="problem-section-inner">
          <span className="section-tag">Root Cause</span>
          <h2>{problem.rootCause.headline}</h2>
          <div className="root-cause-content">
            {problem.rootCause.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="problem-section stats-section">
        <div className="problem-section-inner">
          <span className="section-tag">The Data</span>
          <h2>This Is <span className="highlight">Common</span></h2>
          <div className="problem-stats-grid">
            {problem.stats.map((stat, index) => (
              <div key={index} className="problem-stat-card">
                <div className="stat-number">
                  <span className="stat-num">{stat.num}</span>
                  <span className="stat-unit">{stat.unit}</span>
                </div>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-source">Source: {stat.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution - What They Get */}
      <section className="problem-section solution-section" id="the-solution">
        <div className="problem-section-inner">
          <span className="section-tag">The Solution</span>
          <h2>{problem.benefit.headline}</h2>
          <p className="section-intro">{problem.benefit.subhead}</p>

          <div className="solution-benefits-grid">
            {problem.benefit.points.map((point, index) => (
              <div key={index} className="solution-benefit-card">
                <div className="solution-benefit-icon">
                  <i className="fas fa-check"></i>
                </div>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Fix It */}
      <section className="problem-section approach-section" id="how-we-fix-it">
        <div className="problem-section-inner">
          <span className="section-tag">Our Approach</span>
          <h2>{problem.approach.headline}</h2>
          <p className="section-intro">{problem.approach.intro}</p>

          <div className="approach-steps-vertical">
            {problem.approach.steps.map((step, index) => (
              <div key={index} className="approach-step-vertical">
                <div className="approach-step-number">
                  <span>{step.num}</span>
                </div>
                <div className="approach-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="approach-step-outcome">
                    <i className="fas fa-arrow-right"></i>
                    <span><strong>Result:</strong> {step.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="problem-section results-section">
        <div className="problem-section-inner">
          <span className="section-tag">Results</span>
          <h2>{problem.results.headline}</h2>

          <div className="results-grid">
            {problem.results.items.map((item, index) => (
              <div key={index} className="result-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.quote && (
                  <blockquote className="result-quote">
                    <i className="fas fa-quote-left"></i>
                    {item.quote}
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-bg-text" aria-hidden="true">FIX IT</div>
        <div className="cta-content">
          <h2>{problem.cta.headline}</h2>
          <p>{problem.cta.text}</p>
          <Link to="/contact" className="btn-primary btn-large">
            {problem.cta.buttonText} <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Related Problems */}
      <section className="related-problems">
        <div className="related-problems-inner">
          <span className="section-tag">Related</span>
          <h2>Other Problems <span className="highlight">We Solve</span></h2>
          <div className="related-grid">
            {relatedProblems.map(related => (
              <Link key={related.id} to={`/whats-in-your-way/${related.slug}`} className="problem-card-related">
                <div className="problem-card-icon">
                  <i className={`fas ${related.icon}`}></i>
                </div>
                <h3>{related.title}</h3>
                <p>{related.shortDesc}</p>
                <span className="card-arrow"><i className="fas fa-arrow-right"></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
