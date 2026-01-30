import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getTeamMemberBySlug, getAllTeamMembers } from '@/data/team'

export async function generateStaticParams() {
  const members = getAllTeamMembers()
  return members.map((member) => ({
    slug: member.id,
  }))
}

export async function generateMetadata({ params }) {
  const member = getTeamMemberBySlug(params.slug)
  if (!member) return { title: 'Team Member Not Found' }

  return {
    title: `${member.name} - ${member.title} | Agile Velocity`,
    description: member.shortBio,
  }
}

export default function TeamMember({ params }) {
  const member = getTeamMemberBySlug(params.slug)
  const allMembers = getAllTeamMembers()

  if (!member) {
    notFound()
  }

  // Get other team members for "Meet More" section
  const otherMembers = allMembers
    .filter(m => m.id !== member.id)
    .slice(0, 3)

  return (
    <>
      {/* Back Link */}
      <section className="member-back">
        <div className="member-back-inner">
          <Link href="/about/team" className="member-back-link">
            <i className="fas fa-arrow-left"></i>
            Back to Team
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="member-hero">
        <div className="member-hero-inner">
          <div className="member-hero-image">
            <Image src={member.image} alt={member.name} width={400} height={400} priority />
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
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="member-others">
        <div className="member-others-inner">
          <h2>Meet More of the Team</h2>
          <div className="member-others-grid">
            {otherMembers.map((other) => (
              <Link key={other.id} href={`/about/team/${other.id}`} className="member-other-card">
                <div className="member-other-image">
                  <Image src={other.image} alt={other.name} width={200} height={200} loading="lazy" />
                </div>
                <div className="member-other-info">
                  <h3>{other.name}</h3>
                  <span>{other.title}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="member-others-cta">
            <Link href="/about/team" className="btn-ghost">
              View Full Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
