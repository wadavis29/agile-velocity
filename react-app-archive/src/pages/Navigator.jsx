import { Link } from 'react-router-dom';

const steps = [
  {
    num: '01',
    name: 'Assess',
    icon: 'fa-clipboard-check',
    description: 'Gauge your current agile capabilities with real-time assessments at every level—team, system, and organization.'
  },
  {
    num: '02',
    name: 'Analyze',
    icon: 'fa-chart-pie',
    description: 'Visualize assessment data through interactive heatmaps and capability maps to spot patterns and gaps.'
  },
  {
    num: '03',
    name: 'Prioritize',
    icon: 'fa-list-ol',
    description: 'Get customized, prioritized action items based on your data—focused on the business outcomes you care about.'
  },
  {
    num: '04',
    name: 'Plan',
    icon: 'fa-columns',
    description: 'Organize improvement activities on a built-in Kanban board. Assign owners, set dates, track status.'
  },
  {
    num: '05',
    name: 'Act',
    icon: 'fa-rocket',
    description: 'Execute improvements, then reassess to measure progress. Continuous improvement, continuously measured.'
  }
];

const features = [
  {
    icon: 'fa-gauge-high',
    title: 'Real-Time Assessments',
    description: 'Self-assessments for teams with instant results. No waiting for consultants to compile data.'
  },
  {
    icon: 'fa-map',
    title: 'Capability Heatmaps',
    description: 'See exactly where teams are strong and where they need support across all 100 capabilities.'
  },
  {
    icon: 'fa-route',
    title: 'Custom Roadmaps',
    description: 'Auto-generated improvement paths based on your specific assessment results and goals.'
  },
  {
    icon: 'fa-table-columns',
    title: 'Kanban Action Board',
    description: 'Built-in task management for improvement activities. No need for external tools.'
  },
  {
    icon: 'fa-chart-line',
    title: 'Progress Dashboards',
    description: 'Live dashboards showing transformation progress over time. Perfect for stakeholder updates.'
  },
  {
    icon: 'fa-puzzle-piece',
    title: 'Methodology Agnostic',
    description: 'Works with SAFe, Scrum, Kanban, Scrum@Scale, LeSS, or your own hybrid. Keep your methodology, add structure.'
  }
];

const benefits = [
  {
    stat: '100',
    unit: '',
    label: 'Capabilities Assessed',
    description: 'Every capability from the Path to Agility framework, organized by stage and level.'
  },
  {
    stat: '9',
    unit: '',
    label: 'Business Outcomes Tracked',
    description: 'Tie every improvement activity to measurable business results.'
  },
  {
    stat: '5',
    unit: 'min',
    label: 'Average Assessment Time',
    description: 'Quick team self-assessments that don\'t disrupt the workday.'
  }
];

const screenshots = [
  {
    id: 'heatmap',
    title: 'Capability Heatmaps',
    subtitle: 'See the Big Picture',
    description: 'Visualize capability maturity across your entire organization. Instantly spot patterns, identify gaps, and see exactly where teams need support—all in one view.',
    features: ['Organization-wide visibility', 'Color-coded maturity levels', 'Drill down by team or capability', 'Export for stakeholder reports'],
    image: '/images/navigator/CapabilityHeatmapsStacked-1024x633.png.webp'
  },
  {
    id: 'assessment',
    title: 'Team Assessments',
    subtitle: 'Quick & Actionable',
    description: 'Five-minute self-assessments that teams actually complete. No consultant required. Results flow instantly into your heatmaps and dashboards.',
    features: ['100 capabilities across 5 stages', 'Mobile-friendly interface', 'Instant results', 'Historical trend tracking'],
    image: '/images/navigator/Capability-Survey-Generate-Insights-1-1024x947.png.webp'
  },
  {
    id: 'outcomes',
    title: 'Business Outcomes Dashboard',
    subtitle: 'Outcomes Over Activities',
    description: 'Every capability ties back to one of 9 business outcomes. See exactly how your improvement activities connect to the results leadership cares about.',
    features: ['9 business outcomes tracked', 'Capability-to-outcome mapping', 'Progress over time', 'Executive-ready views'],
    image: '/images/navigator/BusinessOutcomePoll-1024x942-1.png.webp'
  },
  {
    id: 'kanban',
    title: 'Action Kanban Board',
    subtitle: 'From Insight to Action',
    description: 'Turn assessment insights into prioritized action items. Assign owners, set dates, track progress—all without leaving Navigator.',
    features: ['Drag-and-drop interface', 'Owner assignment', 'Due date tracking', 'Linked to capabilities'],
    image: '/images/navigator/Actions-Kanban-board-1-1024x690.png.webp'
  },
  {
    id: 'roadmap',
    title: 'Custom Roadmaps',
    subtitle: 'Your Path Forward',
    description: 'Auto-generated improvement recommendations based on your assessment data. Prioritized by impact on the business outcomes you care about most.',
    features: ['AI-prioritized recommendations', 'Customizable to your goals', 'Stage-by-stage guidance', 'Exportable plans'],
    image: '/images/navigator/Objectives-Alternate-2024-1024x629.png.webp'
  }
];

const problems = [
  {
    icon: 'fa-table-cells',
    title: 'Spreadsheet Chaos',
    description: 'Transformation data scattered across spreadsheets, slide decks, and email threads. No single source of truth.'
  },
  {
    icon: 'fa-eye-slash',
    title: 'No Visibility',
    description: 'Leadership can\'t see what\'s actually happening. Progress reports take days to compile—and they\'re already outdated.'
  },
  {
    icon: 'fa-shuffle',
    title: 'Inconsistent Approaches',
    description: 'Every team doing their own thing. No way to compare progress or share what\'s working across the organization.'
  },
  {
    icon: 'fa-bullseye',
    title: 'Actions Disconnected from Outcomes',
    description: 'Teams are busy improving, but nobody can tie activities back to actual business results.'
  }
];

const useCases = [
  {
    icon: 'fa-building',
    title: 'Run It Yourself',
    subtitle: 'Self-Service',
    description: 'Your organization, your transformation, your pace. Navigator gives you the structure and tools—you drive the change. No consultants required.',
    features: ['Self-service assessments', 'Built-in guidance', 'Knowledge base access', 'Starting at $79/month']
  },
  {
    icon: 'fa-users-gear',
    title: 'Build Internal Capability',
    subtitle: 'Train Your Team',
    description: 'Develop transformation expertise inside your organization. Reduce reliance on external coaches while building lasting internal capability.',
    features: ['Practitioner certification available', 'Train internal coaches', 'Scalable across teams', 'Long-term sustainability']
  },
  {
    icon: 'fa-handshake',
    title: 'Partner With Experts',
    subtitle: 'Consulting + Software',
    description: 'Combine Navigator\'s structure with hands-on guidance from Agile Velocity coaches. Best of both worlds.',
    features: ['Expert coaching', 'Accelerated results', 'Knowledge transfer', 'Custom engagements']
  }
];

const faqs = [
  {
    question: 'Do I need to hire Agile Velocity to use Navigator?',
    answer: 'No. Navigator is standalone SaaS software. You can sign up, run assessments, and manage your transformation entirely on your own. Many organizations use Navigator without any consulting engagement. That said, we\'re here if you want expert guidance.'
  },
  {
    question: 'What\'s the difference between Path to Agility and Navigator?',
    answer: 'Path to Agility is the methodology—the framework of 9 business outcomes, 100 capabilities, and 5 transformation stages. Navigator is the software that brings that methodology to life. Think of it like this: Path to Agility is the map, Navigator is the GPS.'
  },
  {
    question: 'Do I have to change my agile methodology to use Navigator?',
    answer: 'No. Navigator is methodology-agnostic. Whether you\'re using Scrum, SAFe, Kanban, Scrum@Scale, LeSS, or a custom hybrid—Navigator works with your approach. It measures capabilities and outcomes, not specific practices.'
  },
  {
    question: 'Can external consultants use Navigator with their clients?',
    answer: 'Yes. We have a Partner Program specifically for consultants and coaches who want to use Navigator in their client engagements. Five tiers based on your organization size. Reach out to learn more.'
  },
  {
    question: 'What size organizations use Navigator?',
    answer: 'Everything from small businesses to Fortune 500 enterprises. The pricing scales with your needs—start small with a single team and expand as you grow.'
  },
  {
    question: 'How is Navigator different from Jira, Monday, or other project tools?',
    answer: 'Those tools manage work. Navigator manages transformation. It\'s not about tracking user stories or sprints—it\'s about measuring organizational capability, identifying improvement priorities, and tying everything back to business outcomes.'
  }
];

export default function Navigator() {
  return (
    <>
      {/* Hero */}
      <header className="navigator-hero">
        <div className="navigator-hero-bg" aria-hidden="true">NAVIGATOR</div>

        <div className="navigator-hero-content">
          <div className="navigator-hero-badge">
            <i className="fas fa-compass"></i>
            <span>SaaS Platform</span>
          </div>

          <h1 className="navigator-hero-title">
            Path to Agility<sup>®</sup>
            <span className="navigator-hero-title-sub">Navigator</span>
          </h1>

          <p className="navigator-hero-tagline">
            The Path to Agility framework, in software.
          </p>

          <p className="navigator-hero-description">
            Assess your teams against 100 capabilities, visualize progress with heatmaps,
            and get prioritized action items—all tied to the 9 business outcomes that matter.
          </p>

          <div className="navigator-hero-actions">
            <Link to="/request-a-trial" className="btn-primary btn-large">
              Start Free Trial <i className="fas fa-arrow-right"></i>
            </Link>
            <a href="#how-it-works" className="btn-ghost">
              See How It Works <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </div>

        <div className="navigator-hero-visual">
          <div className="navigator-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/az0NpQXu6RE?si=zV3ik3-d0R_tBBY4"
              title="Path to Agility Navigator Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </header>

      {/* Framework Connection - Clear Positioning */}
      <section className="navigator-framework-note">
        <div className="navigator-framework-note-inner">
          <i className="fas fa-lightbulb"></i>
          <div className="navigator-framework-note-content">
            <strong>Navigator = Software. Path to Agility = Methodology.</strong>
            <p>
              Navigator is built on the Path to Agility® framework—but it's standalone software.
              You don't need consultants. You don't need training. Just sign up and start assessing.
              <Link to="/path-to-agility"> Learn about the methodology <i className="fas fa-arrow-right"></i></Link>
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="navigator-problems">
        <div className="section-header">
          <span className="section-tag">The Problem</span>
          <h2 className="section-title">Sound Familiar?</h2>
          <p className="section-subtitle">
            Most organizations struggle to manage transformation at scale.
            Good intentions get lost in chaos.
          </p>
        </div>
        <div className="navigator-problems-grid">
          {problems.map((problem, index) => (
            <div key={index} className="navigator-problem-card">
              <div className="navigator-problem-icon">
                <i className={`fas ${problem.icon}`}></i>
              </div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="navigator-how-it-works" id="how-it-works">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">Five Steps to<br /><span className="highlight">Continuous Improvement</span></h2>
          <p className="section-subtitle">
            Navigator guides you through a repeatable cycle. Assess where you are, figure out what to improve,
            do the work, then measure again.
          </p>
        </div>

        <div className="navigator-steps">
          {steps.map((step, index) => (
            <div key={index} className="navigator-step">
              <div className="navigator-step-num">{step.num}</div>
              <div className="navigator-step-icon">
                <i className={`fas ${step.icon}`}></i>
              </div>
              <h3>{step.name}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && (
                <div className="navigator-step-connector">
                  <i className="fas fa-chevron-right"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="navigator-features">
        <div className="section-header">
          <span className="section-tag">Features</span>
          <h2 className="section-title">Everything You Need to<br /><span className="highlight">Drive Transformation</span></h2>
        </div>

        <div className="navigator-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="navigator-feature-card">
              <div className="navigator-feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots / Feature Showcase */}
      <section className="navigator-showcase">
        <div className="section-header">
          <span className="section-tag">See It In Action</span>
          <h2 className="section-title">Powerful Tools for<br /><span className="highlight">Real Transformation</span></h2>
          <p className="section-subtitle">
            From assessments to action items, Navigator gives you everything you need to manage transformation at scale.
          </p>
        </div>

        <div className="navigator-showcase-items">
          {screenshots.map((item, index) => (
            <div key={item.id} className={`navigator-showcase-item ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="navigator-showcase-image">
                {item.image.includes('placeholder') ? (
                  <div className="navigator-showcase-placeholder">
                    <i className="fas fa-image"></i>
                    <span>Screenshot: {item.title}</span>
                  </div>
                ) : (
                  <img src={item.image} alt={item.title} />
                )}
              </div>
              <div className="navigator-showcase-content">
                <span className="navigator-showcase-subtitle">{item.subtitle}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="navigator-showcase-features">
                  {item.features.map((feature, i) => (
                    <li key={i}><i className="fas fa-check"></i> {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits / Stats */}
      <section className="navigator-benefits">
        <div className="navigator-benefits-inner">
          <div className="navigator-benefits-content">
            <span className="section-tag">Why Navigator</span>
            <h2>Built for<br /><span className="highlight">Real Results</span></h2>
            <p>
              Most transformation tools track activities. Navigator tracks outcomes.
              Every assessment, every action item, every dashboard ties back to the
              business results you're trying to achieve.
            </p>
            <Link to="/request-a-trial" className="btn-primary">
              Try It Free <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="navigator-benefits-stats">
            {benefits.map((benefit, index) => (
              <div key={index} className="navigator-benefit-stat">
                <div className="navigator-benefit-num">
                  {benefit.stat}<span className="unit">{benefit.unit}</span>
                </div>
                <div className="navigator-benefit-label">{benefit.label}</div>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Ways to Use It */}
      <section className="navigator-use-cases">
        <div className="section-header">
          <span className="section-tag">Flexible Options</span>
          <h2 className="section-title">Three Ways to<br /><span className="highlight">Use Navigator</span></h2>
          <p className="section-subtitle">
            Use it on your own, build internal expertise, or partner with our coaches.
            Your transformation, your choice.
          </p>
        </div>

        <div className="navigator-use-cases-grid">
          {useCases.map((useCase, index) => (
            <div key={index} className="navigator-use-case-card">
              <div className="navigator-use-case-icon">
                <i className={`fas ${useCase.icon}`}></i>
              </div>
              <span className="navigator-use-case-subtitle">{useCase.subtitle}</span>
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
              <ul className="navigator-use-case-features">
                {useCase.features.map((feature, i) => (
                  <li key={i}><i className="fas fa-check"></i> {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="navigator-audience">
        <div className="section-header">
          <span className="section-tag">Who Uses It</span>
          <h2 className="section-title">Built for Everyone<br /><span className="highlight">Driving Change</span></h2>
        </div>

        <div className="navigator-audience-grid">
          <div className="navigator-audience-card">
            <div className="navigator-audience-icon"><i className="fas fa-user-tie"></i></div>
            <h3>Transformation Leaders</h3>
            <p>Real-time visibility into progress across all teams. Generate stakeholder reports in seconds, not days. Finally answer "how's the transformation going?" with data.</p>
          </div>
          <div className="navigator-audience-card">
            <div className="navigator-audience-icon"><i className="fas fa-chalkboard-user"></i></div>
            <h3>Internal Coaches</h3>
            <p>See exactly where teams need support. Prioritize coaching activities based on data, not gut feel. Build your own transformation practice inside your organization.</p>
          </div>
          <div className="navigator-audience-card">
            <div className="navigator-audience-icon"><i className="fas fa-users"></i></div>
            <h3>Team Leads</h3>
            <p>Quick 5-minute self-assessments that surface improvement opportunities. Take ownership of your team's agile journey without waiting for external help.</p>
          </div>
          <div className="navigator-audience-card">
            <div className="navigator-audience-icon"><i className="fas fa-briefcase"></i></div>
            <h3>External Consultants</h3>
            <p>Use Navigator with your clients through our Partner Program. Bring structure to your engagements. Five partnership tiers available.</p>
          </div>
          <div className="navigator-audience-card">
            <div className="navigator-audience-icon"><i className="fas fa-building"></i></div>
            <h3>Enterprise Organizations</h3>
            <p>Scale assessments across hundreds of teams. Compare progress across business units. Fortune 500 tested.</p>
          </div>
          <div className="navigator-audience-card">
            <div className="navigator-audience-icon"><i className="fas fa-seedling"></i></div>
            <h3>Growing Companies</h3>
            <p>Start with a single team for $79/month. Add more as you grow. No enterprise contract required to get started.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="navigator-faq">
        <div className="section-header">
          <span className="section-tag">Common Questions</span>
          <h2 className="section-title">Frequently Asked<br /><span className="highlight">Questions</span></h2>
        </div>

        <div className="navigator-faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="navigator-faq-item">
              <h3><i className="fas fa-circle-question"></i> {faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="navigator-cta">
        <div className="navigator-cta-content">
          <h2>Ready to See<br /><span className="highlight">Navigator in Action?</span></h2>
          <p>Start a free trial or schedule a personalized demo with our team.</p>
          <div className="navigator-cta-actions">
            <Link to="/request-a-trial" className="btn-primary btn-large">
              Start Free Trial <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/contact" className="btn-ghost">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
