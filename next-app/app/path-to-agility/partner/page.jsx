import Link from 'next/link'

export const metadata = {
  title: 'Partner Program',
  description: 'Become a Path to Agility Partner. Get certified, access Navigator, and bring a proven transformation framework to your clients.',
  openGraph: {
    title: 'Partner Program | Agile Velocity',
    description: 'Grow your practice with Path to Agility. Get certified, access Navigator, and differentiate your transformation practice.',
  },
}

const partnerTiers = [
  {
    name: 'Coach',
    icon: 'fa-user',
    coaches: '1',
    description: 'Perfect for independent consultants getting started with Path to Agility.',
    features: ['Navigator access for clients', 'Partner listing on website', 'Practitioner certification', 'Marketing materials']
  },
  {
    name: 'Bronze',
    icon: 'fa-medal',
    coaches: '2-3',
    description: 'For small consulting teams building their transformation practice.',
    features: ['Everything in Coach', 'Multiple coach licenses', 'Co-marketing opportunities', 'Quarterly partner calls']
  },
  {
    name: 'Silver',
    icon: 'fa-award',
    coaches: '4-6',
    description: 'Growing firms with established transformation offerings.',
    features: ['Everything in Bronze', 'Facilitator certification option', 'Lead referrals', 'Partner showcase features'],
    highlighted: true
  },
  {
    name: 'Gold',
    icon: 'fa-trophy',
    coaches: '7-12',
    description: 'Larger consultancies scaling their agile practice.',
    features: ['Everything in Silver', 'Priority lead routing', 'Joint case studies', 'Annual strategy session']
  },
  {
    name: 'Platinum',
    icon: 'fa-gem',
    coaches: '13+',
    description: 'Enterprise consulting firms with dedicated transformation teams.',
    features: ['Everything in Gold', 'Custom integrations', 'Executive sponsor access', 'Strategic partnership']
  }
]

const benefits = [
  {
    icon: 'fa-compass',
    title: 'Navigator Platform Access',
    description: 'Use Navigator with your clients. Deliver assessments, generate heatmaps, and track transformation progress, all under your brand relationship.'
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Certification & Training',
    description: 'Get certified as a Path to Agility Practitioner. Learn the methodology inside and out, then teach it to others.'
  },
  {
    icon: 'fa-bullhorn',
    title: 'Marketing & Visibility',
    description: 'Listed on our partner directory. Access to co-branded marketing materials. Joint webinars and content opportunities.'
  },
  {
    icon: 'fa-handshake',
    title: 'Lead Sharing',
    description: 'Receive qualified leads from organizations looking for transformation help in your area or specialty.'
  },
  {
    icon: 'fa-users',
    title: 'Community Access',
    description: 'Join a network of transformation professionals. Share insights, learn from peers, and grow together.'
  },
  {
    icon: 'fa-chart-line',
    title: 'Revenue Opportunity',
    description: 'Resell Navigator subscriptions. Earn recurring revenue while delivering ongoing value to your clients.'
  }
]

const idealPartners = [
  {
    icon: 'fa-chalkboard-user',
    title: 'Agile Coaches & Consultants',
    description: 'Independent coaches looking for a proven framework and toolset to accelerate client transformations.'
  },
  {
    icon: 'fa-building',
    title: 'Consulting Firms',
    description: 'Organizations with transformation practices seeking differentiation and scalable delivery methods.'
  },
  {
    icon: 'fa-briefcase',
    title: 'Training Companies',
    description: 'Training providers wanting to add outcome-focused transformation services to their portfolio.'
  },
  {
    icon: 'fa-sitemap',
    title: 'System Integrators',
    description: 'Technology partners who see agile transformation as a complement to their implementation services.'
  }
]

const steps = [
  {
    num: '01',
    title: 'Apply',
    description: 'Fill out the partner application. Tell us about your practice, experience, and goals.'
  },
  {
    num: '02',
    title: 'Get Certified',
    description: 'Complete the Path to Agility Practitioner certification workshop. Learn the methodology.'
  },
  {
    num: '03',
    title: 'Onboard',
    description: 'Get set up with Navigator access, marketing materials, and partner resources.'
  },
  {
    num: '04',
    title: 'Launch',
    description: 'Start using Path to Agility with your clients. We\'re here to support you.'
  }
]

const faqs = [
  {
    question: 'What is the Path to Agility Practitioner certification?',
    answer: 'A workshop-based certification that teaches you the Path to Agility methodology: the 9 business outcomes, 100 capabilities, and how to use Navigator effectively with clients. Required for all partners.'
  },
  {
    question: 'How much does it cost to become a partner?',
    answer: 'Partnership pricing varies by tier and is based on the number of coaches in your organization. Contact us for specific pricing tailored to your situation.'
  },
  {
    question: 'Can I teach Path to Agility courses to my clients?',
    answer: 'Certified Practitioners can use the methodology with clients. To teach public courses, you\'ll need Facilitator certification, available to Silver tier and above.'
  },
  {
    question: 'Do I need to be an experienced agile coach?',
    answer: 'We recommend at least 2 years of agile coaching or consulting experience. The certification assumes foundational agile knowledge.'
  },
  {
    question: 'What support do partners receive?',
    answer: 'All partners get access to our knowledge base, partner Slack community, quarterly calls, and dedicated partner success support.'
  },
  {
    question: 'Can I use my own branding with clients?',
    answer: 'Yes. You maintain your client relationships. Path to Agility and Navigator are tools you bring to your engagements. Your brand stays front and center.'
  }
]

export default function Partner() {
  return (
    <>
      {/* Hero */}
      <header className="partner-hero">
        <div className="partner-hero-bg" aria-hidden="true">PARTNER</div>

        <div className="partner-hero-content">
          <div className="partner-hero-badge">
            <i className="fas fa-handshake"></i>
            <span>Partner Program</span>
          </div>

          <h1 className="partner-hero-title">
            Grow Your Practice with
            <span className="partner-hero-title-sub">Path to Agility</span>
          </h1>

          <p className="partner-hero-tagline">
            Bring a proven transformation framework to your clients.
          </p>

          <p className="partner-hero-description">
            Join a network of transformation professionals using Path to Agility
            and Navigator to deliver measurable results. Get certified, access
            powerful tools, and differentiate your practice.
          </p>

          <div className="partner-hero-actions">
            <Link href="/contact" className="btn-primary btn-large">
              Apply to Partner
            </Link>
            <a href="#tiers" className="btn-ghost">
              See Partner Tiers <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </div>

        <div className="partner-hero-visual">
          <div className="partner-hero-stats">
            <div className="partner-stat">
              <span className="partner-stat-num">5</span>
              <span className="partner-stat-label">Partner Tiers</span>
            </div>
            <div className="partner-stat">
              <span className="partner-stat-num">100+</span>
              <span className="partner-stat-label">Active Partners</span>
            </div>
            <div className="partner-stat">
              <span className="partner-stat-num">15+</span>
              <span className="partner-stat-label">Years Proven</span>
            </div>
          </div>
        </div>
      </header>

      {/* Why Partner */}
      <section className="partner-benefits">
        <div className="section-header">
          <span className="section-tag">Why Partner</span>
          <h2 className="section-title">Everything You Need to<br /><span className="highlight">Deliver Transformation</span></h2>
          <p className="section-subtitle">
            Stop reinventing the wheel. Get a proven methodology, powerful software,
            and a support network, so you can focus on your clients.
          </p>
        </div>

        <div className="partner-benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="partner-benefit-card">
              <div className="partner-benefit-icon">
                <i className={`fas ${benefit.icon}`}></i>
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Should Partner */}
      <section className="partner-ideal">
        <div className="section-header">
          <span className="section-tag">Who It&apos;s For</span>
          <h2 className="section-title">Ideal Partners</h2>
        </div>

        <div className="partner-ideal-grid">
          {idealPartners.map((partner, index) => (
            <div key={index} className="partner-ideal-card">
              <div className="partner-ideal-icon">
                <i className={`fas ${partner.icon}`}></i>
              </div>
              <h3>{partner.title}</h3>
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="partner-tiers" id="tiers">
        <div className="section-header">
          <span className="section-tag">Partnership Levels</span>
          <h2 className="section-title">Choose Your<br /><span className="highlight">Partner Tier</span></h2>
          <p className="section-subtitle">
            Five tiers based on the size of your coaching team.
            Start where you are and grow with us.
          </p>
        </div>

        <div className="partner-tiers-grid">
          {partnerTiers.map((tier, index) => (
            <div key={index} className={`partner-tier-card ${tier.highlighted ? 'highlighted' : ''}`}>
              {tier.highlighted && <span className="tier-badge">Most Popular</span>}
              <div className="partner-tier-icon">
                <i className={`fas ${tier.icon}`}></i>
              </div>
              <h3>{tier.name}</h3>
              <div className="partner-tier-coaches">{tier.coaches} Coach{tier.coaches !== '1' ? 'es' : ''}</div>
              <p>{tier.description}</p>
              <ul className="partner-tier-features">
                {tier.features.map((feature, i) => (
                  <li key={i}><i className="fas fa-check"></i> {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="partner-tiers-note">
          <i className="fas fa-info-circle"></i>
          All tiers require Path to Agility Practitioner certification.
          <Link href="/contact"> Contact us</Link> for detailed pricing.
        </p>
      </section>

      {/* How It Works */}
      <section className="partner-process">
        <div className="section-header">
          <span className="section-tag">Getting Started</span>
          <h2 className="section-title">How to Become<br /><span className="highlight">a Partner</span></h2>
        </div>

        <div className="partner-process-steps">
          {steps.map((step, index) => (
            <div key={index} className="partner-process-step">
              <div className="partner-step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && (
                <div className="partner-step-connector">
                  <i className="fas fa-chevron-right"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="partner-faq">
        <div className="section-header">
          <span className="section-tag">Questions</span>
          <h2 className="section-title">Partner<br /><span className="highlight">FAQ</span></h2>
        </div>

        <div className="partner-faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="partner-faq-item">
              <h3><i className="fas fa-circle-question"></i> {faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="partner-cta">
        <div className="partner-cta-content">
          <h2>Ready to<br /><span className="highlight">Partner With Us?</span></h2>
          <p>Apply today or schedule a call to learn more about the program.</p>
          <div className="partner-cta-actions">
            <Link href="/contact" className="btn-primary btn-large">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
