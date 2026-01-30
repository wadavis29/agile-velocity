import { Link } from 'react-router-dom';
import { outcomes } from '../../data/outcomes';

export default function OutcomesIndex() {
  return (
    <>
      {/* Page Hero */}
      <header className="page-hero">
        <div className="page-hero-bg" aria-hidden="true">OUTCOMES</div>
        <div className="page-hero-content">
          <h1 className="page-title">The Outcomes That <span className="highlight">Matter</span></h1>
          <p className="page-intro">We don't sell processes—we deliver results. These are the 9 business outcomes every transformation should produce.</p>
        </div>
      </header>

      {/* Outcomes Grid */}
      <section className="outcomes-main">
        <div className="outcomes-grid-full">
          {outcomes.map(outcome => (
            <Link key={outcome.id} to={`/outcomes/${outcome.slug}`} className="outcome-card-large">
              <div className="outcome-icon"><i className={`fas ${outcome.icon}`}></i></div>
              <div className="outcome-content">
                <span className="outcome-name">{outcome.p2aOutcome}</span>
                <h2>{outcome.title}</h2>
                <p>{outcome.description}</p>
                <ul className="outcome-bullets">
                  {outcome.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <span className="card-link">Learn More <i className="fas fa-arrow-right"></i></span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta">
        <div className="page-cta-content">
          <h2>Which Outcome Do You Need Most?</h2>
          <p>Let's talk about where you are and where you want to be. 30 minutes. No pitch.</p>
          <Link to="/contact" className="btn-primary btn-large">
            Start the Conversation <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
