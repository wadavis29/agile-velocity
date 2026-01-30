import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Navigator Plans & Pricing',
  description: 'Path to Agility Navigator pricing plans for businesses. From 10 teams to 600+. All plans include assessments, dashboards, and a 30-day free trial.',
  openGraph: {
    title: 'Navigator Plans & Pricing | Agile Velocity',
    description: 'Everything you need to manage your Agile transformation. Plans starting at 10 teams with a 30-day free trial.',
  },
}

const plans = [
  {
    name: 'Bronze',
    teams: '10',
    orgs: '1',
    certifications: '1',
    description: 'Perfect for small organizations or departments getting started with structured transformation.',
    features: ['Assessments', 'Team Dashboards', 'Capability Heatmaps', 'Action Tracking'],
    highlighted: false
  },
  {
    name: 'Silver',
    teams: '25',
    orgs: '2',
    certifications: '1',
    description: 'For growing organizations managing transformation across multiple teams.',
    features: ['Everything in Bronze', 'Manage Transformation Actions', 'Improvement Backlogs', 'Progress Tracking'],
    highlighted: false
  },
  {
    name: 'Gold',
    teams: '50',
    orgs: '4',
    certifications: '3',
    description: 'Full-featured plan for organizations serious about transformation at scale.',
    features: ['Everything in Silver', 'CSV Export', 'Live Polling', 'Miro & Mural Templates'],
    highlighted: true
  },
  {
    name: 'Enterprise',
    teams: '100-600',
    orgs: '8-25',
    certifications: '8',
    description: 'Custom solutions for large enterprises with advanced security and integration needs.',
    features: ['Everything in Gold', 'SSO Integration', 'Reporting API', 'Custom Branding'],
    highlighted: false
  }
]

const featureCategories = [
  {
    name: 'Organizational',
    features: [
      { name: 'Number of Teams', bronze: '10', silver: '25', gold: '50', enterprise: '100-600' },
      { name: 'Number of Organizations', bronze: '1', silver: '2', gold: '4', enterprise: '8-25' },
      { name: 'Number of Users', bronze: 'Unlimited', silver: 'Unlimited', gold: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Capture Objectives', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Business Outcome Polling', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Agile Outcome Polling', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Manage Organization Hierarchy', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Account Level Reporting', bronze: true, silver: true, gold: true, enterprise: true },
    ]
  },
  {
    name: 'Assess',
    features: [
      { name: 'All 100 Capabilities Assessable', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Assessment Stages', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Organization Capabilities', bronze: '40', silver: '40', gold: '40', enterprise: '40' },
      { name: 'System Capabilities', bronze: '26', silver: '26', gold: '26', enterprise: '26' },
      { name: 'Team Capabilities', bronze: '34', silver: '34', gold: '34', enterprise: '34' },
      { name: 'Unlimited Assessments', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Assessment History', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Offline Survey', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Live Polling', bronze: false, silver: false, gold: true, enterprise: true },
      { name: 'Miro & Mural Templates', bronze: false, silver: false, gold: true, enterprise: true },
    ]
  },
  {
    name: 'Generate Insights',
    features: [
      { name: 'Team Dashboards', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Prioritization', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Improvement Backlogs', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Capability Heatmap', bronze: true, silver: true, gold: true, enterprise: true },
    ]
  },
  {
    name: 'Track Action & Progress',
    features: [
      { name: 'Track Actions', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Note Tracking', bronze: true, silver: true, gold: true, enterprise: true },
      { name: 'Progress Tracking', bronze: true, silver: true, gold: true, enterprise: true },
    ]
  },
  {
    name: 'Integration & Customization',
    features: [
      { name: 'Export Assessment Data', bronze: false, silver: false, gold: true, enterprise: true },
      { name: 'CSV Export', bronze: false, silver: false, gold: true, enterprise: true },
      { name: 'Single Sign On (SSO)', bronze: false, silver: false, gold: false, enterprise: true },
      { name: 'Reporting API', bronze: false, silver: false, gold: false, enterprise: true },
      { name: 'Customize Capability Model', bronze: false, silver: false, gold: false, enterprise: true },
      { name: 'Company Branding', bronze: false, silver: false, gold: false, enterprise: true },
    ]
  },
  {
    name: 'Training & Support',
    features: [
      { name: 'Practitioner Certifications', bronze: '1', silver: '1', gold: '3', enterprise: '8' },
    ]
  }
]

const faqs = [
  {
    question: 'How does Navigator compare to other assessment tools?',
    answer: 'Path to Agility Navigator gives more than just a picture of where you are now. It shows you where to go next. Navigator provides a holistic view of your Agile transformation based on the business outcomes you want and guides you on specific areas to take action.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Path to Agility follows industry best practices starting with authorization and authentication all the way through data encryption to keep your data safe. We take security seriously at every level.'
  },
  {
    question: "What's the right plan for me?",
    answer: "Agile transformations vary between organizations. Start by counting your teams. That's the primary differentiator. If you want to talk to a representative to find the right option to suit your needs, please reach out to our sales team."
  },
  {
    question: 'How do I get started?',
    answer: 'Start with a 30-day free trial, no credit card required. After signup, you\'ll have a kickoff call with our team to set up your account, discuss your goals, and ensure you\'re ready to run your first assessments.'
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes. You can upgrade at any time as your transformation grows. Your data, assessments, and history all transfer seamlessly to the new plan.'
  },
  {
    question: 'What are Practitioner Certifications?',
    answer: 'Practitioner Certifications train your internal team members on the Path to Agility methodology so they can effectively run assessments and coach teams. Each plan includes a set number of certifications.'
  }
]

export default function NavigatorPlans() {
  return (
    <>
      {/* Hero */}
      <header className="plans-hero">
        <div className="plans-hero-bg" aria-hidden="true">PLANS</div>

        <div className="plans-hero-content">
          <div className="plans-hero-badge">
            <i className="fas fa-tags"></i>
            <span>Pricing</span>
          </div>

          <h1 className="plans-hero-title">
            Navigator Plans
            <span className="plans-hero-title-sub">for Businesses</span>
          </h1>

          <p className="plans-hero-tagline">
            Everything you need to manage your Agile transformation.
          </p>

          <p className="plans-hero-description">
            Choose the plan that fits your organization. All plans include full access to
            assessments, dashboards, and action tracking. Scale as you grow.
          </p>

          <div className="plans-hero-trial-badge">
            <i className="fas fa-gift"></i>
            <span>All plans start with a <strong>30-day FREE trial</strong></span>
          </div>
        </div>
      </header>

      {/* Pricing Cards */}
      <section className="plans-pricing">
        <div className="plans-pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plans-card ${plan.highlighted ? 'highlighted' : ''}`}>
              {plan.highlighted && <span className="plans-badge">Most Popular</span>}
              <div className="plans-card-header">
                <h3>{plan.name}</h3>
                <div className="plans-card-teams">
                  <span className="plans-card-teams-num">{plan.teams}</span>
                  <span className="plans-card-teams-label">teams</span>
                </div>
              </div>
              <p className="plans-card-description">{plan.description}</p>
              <ul className="plans-card-features">
                {plan.features.map((feature, i) => (
                  <li key={i}><i className="fas fa-check"></i> {feature}</li>
                ))}
              </ul>
              <div className="plans-card-meta">
                <div className="plans-card-meta-item">
                  <i className="fas fa-building"></i>
                  <span>{plan.orgs} org{plan.orgs !== '1' ? 's' : ''}</span>
                </div>
                <div className="plans-card-meta-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span>{plan.certifications} cert{plan.certifications !== '1' ? 's' : ''}</span>
                </div>
              </div>
              <Link href={`/request-a-trial?plan=${plan.name.toLowerCase()}`} className={`plans-card-cta ${plan.highlighted ? 'btn-primary' : 'btn-ghost'}`}>
                Get Your Demo
              </Link>
            </div>
          ))}
        </div>
        <p className="plans-pricing-note">
          <i className="fas fa-info-circle"></i>
          Need a custom solution? <Link href="/contact">Contact us</Link> for Enterprise pricing tailored to your organization.
        </p>
      </section>

      {/* Feature Comparison Table */}
      <section className="plans-comparison">
        <div className="section-header">
          <span className="section-tag">Compare Plans</span>
          <h2 className="section-title">Full Feature<br /><span className="highlight">Comparison</span></h2>
          <p className="section-subtitle">
            See exactly what&apos;s included in each plan.
          </p>
        </div>

        <div className="plans-table-wrapper">
          <table className="plans-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Bronze</th>
                <th>Silver</th>
                <th className="highlighted">Gold</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {featureCategories.map((category, catIndex) => (
                <React.Fragment key={`cat-${catIndex}`}>
                  <tr className="plans-table-category">
                    <td colSpan="5">{category.name}</td>
                  </tr>
                  {category.features.map((feature, featIndex) => (
                    <tr key={`feat-${catIndex}-${featIndex}`}>
                      <td>{feature.name}</td>
                      <td>{renderFeatureValue(feature.bronze)}</td>
                      <td>{renderFeatureValue(feature.silver)}</td>
                      <td className="highlighted">{renderFeatureValue(feature.gold)}</td>
                      <td>{renderFeatureValue(feature.enterprise)}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="plans-faq">
        <div className="section-header">
          <span className="section-tag">Questions</span>
          <h2 className="section-title">Frequently Asked<br /><span className="highlight">Questions</span></h2>
        </div>

        <div className="plans-faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="plans-faq-item">
              <h3><i className="fas fa-circle-question"></i> {faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="plans-cta">
        <div className="plans-cta-content">
          <h2>Ready to Get<br /><span className="highlight">Started?</span></h2>
          <p>Start your 30-day free trial today. No credit card required.</p>
          <div className="plans-cta-actions">
            <Link href="/request-a-trial" className="btn-primary btn-large">
              Start Free Trial
            </Link>
            <Link href="/contact" className="btn-ghost">
              Talk to Sales <i className="fas fa-comments"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function renderFeatureValue(value) {
  if (value === true) {
    return <i className="fas fa-check plans-check"></i>
  } else if (value === false) {
    return <i className="fas fa-minus plans-minus"></i>
  } else {
    return <span className="plans-value">{value}</span>
  }
}
