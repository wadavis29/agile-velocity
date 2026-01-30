import Link from 'next/link'
import Image from 'next/image'
import { getLeadership } from '@/data/team'

export const metadata = {
  title: 'Our Team | Agile Velocity',
  description: 'Senior practitioners who deliver your transformation. The partners who design your engagement are the ones who lead it.',
}

// Expertise areas - defensible: shows capabilities, not headcount
// These represent the combined expertise of the consulting team
const expertiseAreas = [
  {
    id: 'enterprise-transformation',
    title: 'Enterprise Transformation',
    description: 'Large-scale organizational change across Fortune 500 companies, federal agencies, and complex enterprises.',
    certifications: ['Certified Enterprise Coach (CEC)', 'SAFe SPC 6.0'],
    industries: ['Financial Services', 'Healthcare', 'Government', 'Aviation'],
    icon: 'fa-building'
  },
  {
    id: 'leadership-coaching',
    title: 'Leadership & Executive Coaching',
    description: 'Guiding executive teams on transformation strategy and helping leaders align organizations to optimize value delivery.',
    certifications: ['Certified Agile Leadership (CAL)', 'ICAgile Expert'],
    industries: ['Technology', 'Insurance', 'Manufacturing'],
    icon: 'fa-users-cog'
  },
  {
    id: 'scaled-agile',
    title: 'SAFe & Scaled Agile',
    description: 'Implementing and optimizing Scaled Agile Framework across portfolios, programs, and teams.',
    certifications: ['SAFe Program Consultant (SPC)', 'SAFe for Hardware'],
    industries: ['Technology', 'Telecommunications', 'Defense'],
    icon: 'fa-layer-group'
  },
  {
    id: 'portfolio-management',
    title: 'Portfolio & Value Streams',
    description: 'Aligning portfolios around value streams and amplifying returns on technology investments.',
    certifications: ['Lean Portfolio Management', 'Kanban Management Professional'],
    industries: ['Finance', 'Retail', 'Energy'],
    icon: 'fa-chart-line'
  },
  {
    id: 'training-enablement',
    title: 'Training & Enablement',
    description: 'Building internal capability through certified training programs and hands-on coaching.',
    certifications: ['Certified Scrum Trainer (CST)', 'Path to Agility Certified'],
    industries: ['All Industries'],
    icon: 'fa-graduation-cap'
  }
]

export default function Team() {
  const leadership = getLeadership()

  return (
    <>
      {/* Hero Section - Defensible: Positions senior expertise as the value prop */}
      <section className="team-hero">
        <div className="team-hero-inner">
          <span className="section-tag">Our Team</span>
          <h1 className="team-hero-title">
            Senior-Led. <span className="highlight">Partner-Delivered.</span>
          </h1>
          <p className="team-hero-sub">
            The practitioners who design your transformation are the ones who deliver it.
            No handoffs to junior consultants. No bait-and-switch.
          </p>
        </div>
      </section>

      {/* Why Our Model Section - Defensible: Addresses Big 4 comparison head-on */}
      <section className="team-model">
        <div className="team-model-inner">
          <div className="team-model-content">
            <h2>Why Our <span className="highlight">Model</span> Works</h2>
            <p className="team-model-lead">
              Large consultancies sell with their best people, then staff with whoever&apos;s available.
              We take a different approach.
            </p>
            <p>
              Every Agile Velocity engagement is led by senior practitioners averaging 20+ years
              of enterprise transformation experience. The partners who scope your initiative
              are the ones who guide it through completion.
            </p>
          </div>
          <div className="team-model-stats">
            <div className="team-model-stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Years Combined Experience</span>
            </div>
            <div className="team-model-stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Enterprise Transformations</span>
            </div>
            <div className="team-model-stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Industry Certifications</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Defensible: Enterprise clients expect to see who runs the company */}
      <section className="team-section">
        <div className="team-section-inner">
          <div className="team-section-header">
            <h2>Leadership</h2>
            <p>The partners guiding strategy, client success, and every transformation engagement</p>
          </div>
          <div className="team-grid team-grid-leadership">
            {leadership.map((member) => (
              <Link key={member.id} href={`/about/team/${member.id}`} className="team-card team-card-featured">
                <div className="team-card-image">
                  <Image src={member.image} alt={member.name} width={300} height={300} loading="lazy" />
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

      {/* Expertise Section - Defensible: Shows capability breadth without counting heads */}
      <section className="team-section team-section-alt">
        <div className="team-section-inner">
          <div className="team-section-header">
            <h2>Our Expertise</h2>
            <p>Deep specialization across every dimension of enterprise transformation</p>
          </div>
          <div className="expertise-grid">
            {expertiseAreas.map((area) => (
              <div key={area.id} className="expertise-card">
                <div className="expertise-icon">
                  <i className={`fas ${area.icon}`}></i>
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="expertise-certs">
                  {area.certifications.map((cert, idx) => (
                    <span key={idx} className="expertise-cert">{cert}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Section - Defensible: Addresses scale concerns without inflating FTE count */}
      <section className="team-network">
        <div className="team-network-inner">
          <div className="team-network-content">
            <span className="section-tag">Scalable Capacity</span>
            <h2>Our Partner <span className="highlight">Network</span></h2>
            <p>
              When your transformation needs additional capacity, we don&apos;t scramble to hire.
              We tap our global network of certified practitioners—each vetted against our
              quality standards and trained in Path to Agility®.
            </p>
            <p>
              Enterprise-scale capability without enterprise-scale cost or the quality
              dilution that comes with rapid staffing.
            </p>
          </div>
          <div className="team-network-stats">
            <div className="network-stat">
              <span className="network-number">100+</span>
              <span className="network-label">Active Partners Worldwide</span>
            </div>
            <div className="network-stat">
              <span className="network-number">2+</span>
              <span className="network-label">Years Experience Required</span>
            </div>
            <div className="network-stat">
              <span className="network-number">100%</span>
              <span className="network-label">Path to Agility Certified</span>
            </div>
          </div>
          <Link href="/partners" className="btn-secondary">
            Learn About Our Partner Program <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Join Network CTA - Defensible: Reframes hiring as network growth */}
      <section className="team-join">
        <div className="team-join-inner">
          <div className="team-join-content">
            <h2>Join Our Network</h2>
            <p>
              Are you a senior agile practitioner with enterprise transformation experience?
              We connect with professionals who share our commitment to outcomes-driven transformation.
            </p>
          </div>
          <Link href="/partners" className="btn-primary">
            Explore Partnership
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="team-cta">
        <div className="team-cta-inner">
          <h2>Ready to Work Together?</h2>
          <p>Senior practitioners. Proven framework. Enterprise results. Let&apos;s discuss your transformation.</p>
          <div className="team-cta-actions">
            <Link href="/contact" className="btn-primary btn-lg">
              Start a Conversation
            </Link>
            <Link href="/about" className="btn-ghost btn-lg">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
