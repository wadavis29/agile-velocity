import { Link } from 'react-router-dom';
import { getLeadership, getConsultants, getOperations } from '../../data/team';

export default function Team() {
  const leadership = getLeadership();
  const consultants = getConsultants();
  const operations = getOperations();

  return (
    <>
      {/* Hero Section */}
      <section className="team-hero">
        <div className="team-hero-inner">
          <span className="section-tag">Our Team</span>
          <h1 className="team-hero-title">
            Meet the <span className="highlight">Team</span>
          </h1>
          <p className="team-hero-sub">
            Experienced practitioners who've built products, led transformations, and helped
            organizations achieve breakthrough results. We bring real-world experience to every engagement.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="team-section">
        <div className="team-section-inner">
          <div className="team-section-header">
            <h2>Leadership</h2>
            <p>The partners guiding Agile Velocity's strategy and client success</p>
          </div>
          <div className="team-grid team-grid-leadership">
            {leadership.map((member) => (
              <Link key={member.id} to={`/about/team/${member.id}`} className="team-card team-card-featured">
                <div className="team-card-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <span className="team-card-title">{member.title}</span>
                  <p className="team-card-bio">{member.shortBio}</p>
                  <div className="team-card-expertise">
                    {member.expertise.slice(0, 2).map((exp, idx) => (
                      <span key={idx} className="team-expertise-tag">{exp}</span>
                    ))}
                  </div>
                  <span className="team-card-link">
                    View Profile <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Consultants Section */}
      <section className="team-section team-section-alt">
        <div className="team-section-inner">
          <div className="team-section-header">
            <h2>Business Agility Consultants</h2>
            <p>Certified coaches and trainers delivering transformation expertise to our clients</p>
          </div>
          <div className="team-grid">
            {consultants.map((member) => (
              <Link key={member.id} to={`/about/team/${member.id}`} className="team-card">
                <div className="team-card-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <span className="team-card-title">{member.title}</span>
                  <p className="team-card-bio">{member.shortBio}</p>
                  <div className="team-card-certs">
                    {member.certifications.slice(0, 2).map((cert, idx) => (
                      <span key={idx} className="team-cert-badge">
                        <i className="fas fa-certificate"></i>
                        {cert.split(' - ')[0].split('®')[0].split('(')[0].trim()}
                      </span>
                    ))}
                  </div>
                  <span className="team-card-link">
                    View Profile <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="team-section">
        <div className="team-section-inner">
          <div className="team-section-header">
            <h2>Client Success</h2>
            <p>Ensuring every engagement delivers measurable value</p>
          </div>
          <div className="team-grid team-grid-single">
            {operations.map((member) => (
              <Link key={member.id} to={`/about/team/${member.id}`} className="team-card team-card-horizontal">
                <div className="team-card-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <span className="team-card-title">{member.title}</span>
                  <p className="team-card-bio">{member.shortBio}</p>
                  <span className="team-card-link">
                    View Profile <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="team-join">
        <div className="team-join-inner">
          <div className="team-join-content">
            <h2>Join Our Team</h2>
            <p>
              We're always looking for experienced practitioners who share our passion for
              helping organizations achieve real business outcomes.
            </p>
          </div>
          <a href="mailto:careers@agilevelocity.com" className="btn-primary">
            View Open Positions <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="team-cta">
        <div className="team-cta-inner">
          <h2>Ready to Work Together?</h2>
          <p>Our team brings decades of combined experience to every engagement. Let's discuss how we can help your organization.</p>
          <div className="team-cta-actions">
            <Link to="/contact" className="btn-primary btn-lg">
              Start a Conversation <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/about" className="btn-ghost btn-lg">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
