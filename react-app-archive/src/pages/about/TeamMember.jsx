import { useParams, Link, Navigate } from 'react-router-dom';
import { getTeamMemberBySlug, getAllTeamMembers } from '../../data/team';

export default function TeamMember() {
  const { slug } = useParams();
  const member = getTeamMemberBySlug(slug);
  const allMembers = getAllTeamMembers();

  if (!member) {
    return <Navigate to="/about/team" replace />;
  }

  // Get other team members for "Meet More" section
  const otherMembers = allMembers
    .filter(m => m.id !== member.id)
    .slice(0, 3);

  return (
    <>
      {/* Back Link */}
      <section className="member-back">
        <div className="member-back-inner">
          <Link to="/about/team" className="member-back-link">
            <i className="fas fa-arrow-left"></i>
            Back to Team
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="member-hero">
        <div className="member-hero-inner">
          <div className="member-hero-image">
            <img src={member.image} alt={member.name} />
          </div>
          <div className="member-hero-content">
            <h1 className="member-hero-name">{member.name}</h1>
            <span className="member-hero-title">{member.title}</span>
            <p className="member-hero-bio">{member.shortBio}</p>
            <div className="member-hero-links">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-social-link">
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`} className="member-social-link">
                  <i className="fas fa-envelope"></i>
                  Email
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="member-about">
        <div className="member-about-inner">
          <div className="member-about-main">
            <h2>About {member.name.split(' ')[0]}</h2>
            <div className="member-about-text">
              {member.fullBio.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {member.philosophy && (
              <div className="member-philosophy">
                <i className="fas fa-quote-left"></i>
                <blockquote>{member.philosophy}</blockquote>
              </div>
            )}
          </div>

          <div className="member-about-sidebar">
            {/* Expertise */}
            <div className="member-sidebar-section">
              <h3>Areas of Expertise</h3>
              <ul className="member-expertise-list">
                {member.expertise.map((exp, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i>
                    {exp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="member-sidebar-section">
              <h3>Certifications</h3>
              <ul className="member-cert-list">
                {member.certifications.map((cert, idx) => (
                  <li key={idx}>
                    <i className="fas fa-certificate"></i>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="member-contact">
        <div className="member-contact-inner">
          <h2>Work with {member.name.split(' ')[0]}</h2>
          <p>Interested in learning how {member.name.split(' ')[0]} can help your organization?</p>
          <div className="member-contact-actions">
            <Link to="/contact" className="btn-primary">
              Get in Touch <i className="fas fa-arrow-right"></i>
            </Link>
            {member.email && (
              <a href={`mailto:${member.email}`} className="btn-ghost">
                Email Directly <i className="fas fa-envelope"></i>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="member-others">
        <div className="member-others-inner">
          <h2>Meet More of the Team</h2>
          <div className="member-others-grid">
            {otherMembers.map((other) => (
              <Link key={other.id} to={`/about/team/${other.id}`} className="member-other-card">
                <div className="member-other-image">
                  <img src={other.image} alt={other.name} />
                </div>
                <div className="member-other-info">
                  <h3>{other.name}</h3>
                  <span>{other.title}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="member-others-cta">
            <Link to="/about/team" className="btn-ghost">
              View Full Team <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
