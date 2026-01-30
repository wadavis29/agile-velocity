import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllCaseStudies, getCaseStudyById } from '@/data/case-studies'

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies()
  return caseStudies.map((study) => ({
    slug: study.id,
  }))
}

export async function generateMetadata({ params }) {
  const study = getCaseStudyById(params.slug)
  if (!study) return { title: 'Case Study Not Found' }

  return {
    title: `${study.shortTitle} Case Study | Agile Velocity`,
    description: study.summary,
  }
}

// Helper to extract the "before" metric from various case studies
function getBeforeMetric(study) {
  if (study.metrics.deliveryCadence?.includes(' to ')) {
    const parts = study.metrics.deliveryCadence.split(' to ')
    return { label: 'Release Cycle', before: parts[0], after: parts[1] }
  }
  if (study.metrics.predictability?.includes(' to ')) {
    const parts = study.metrics.predictability.split(' to ')
    return { label: 'Predictability', before: parts[0], after: parts[1] }
  }
  if (study.metrics.releaseCycle?.includes(' to ')) {
    const parts = study.metrics.releaseCycle.split(' to ')
    return { label: 'Release Cycle', before: parts[0], after: parts[1] }
  }
  if (study.metrics.deploymentSpeed?.includes(' to ')) {
    const parts = study.metrics.deploymentSpeed.split(' to ')
    return { label: 'Deployment', before: parts[0], after: parts[1] }
  }
  return null
}

// Extract key impact number for hero
function getHeroImpact(study) {
  if (study.metrics.savings) return { value: study.metrics.savings.replace('$', '').replace(' in 2 months', ''), label: 'Saved', prefix: '$' }
  if (study.metrics.cycleTimeReduction) return { value: study.metrics.cycleTimeReduction, label: 'Cycle Time Reduction', prefix: '' }
  if (study.metrics.successRate) return { value: study.metrics.successRate, label: 'Success Rate', prefix: '' }
  if (study.metrics.deliveryCadence?.includes('2 weeks')) return { value: '18x', label: 'Faster Delivery', prefix: '' }
  if (study.metrics.predictability?.includes('105%')) return { value: '105%', label: 'Predictability Achieved', prefix: '' }
  return null
}

// Check if study has rich storytelling content
function hasRichContent(study) {
  return study.humanStory || study.context || study.diyFailure || study.transformation || study.culturalEvolution
}

export default function CaseStudyDetail({ params }) {
  const study = getCaseStudyById(params.slug)
  const allStudies = getAllCaseStudies()

  if (!study) {
    notFound()
  }

  const beforeAfter = getBeforeMetric(study)
  const heroImpact = getHeroImpact(study)
  const isRichContent = hasRichContent(study)

  // Get related case studies (same industry or shared tags)
  const relatedStudies = allStudies
    .filter(s => s.id !== study.id)
    .filter(s =>
      s.industry === study.industry ||
      s.tags.some(tag => study.tags.includes(tag))
    )
    .slice(0, 3)

  // Extract first paragraph for featured quote in human story
  const getFirstParagraph = (content) => {
    if (!content) return ''
    const paragraphs = content.split('\n\n')
    return paragraphs[0] || ''
  }

  const getRemainingParagraphs = (content) => {
    if (!content) return []
    const paragraphs = content.split('\n\n')
    return paragraphs.slice(1)
  }

  return (
    <>
      {/* Epic Hero Section */}
      <section className="cs-epic-hero">
        <div className="cs-epic-hero-bg">
          <div className="cs-hero-gradient"></div>
          <div className="cs-hero-grid-pattern"></div>
        </div>

        <div className="cs-epic-hero-content">
          <Link href="/insights/case-studies" className="cs-back-link">
            <i className="fas fa-arrow-left"></i>
            <span>All Case Studies</span>
          </Link>

          <div className="cs-hero-badges">
            <span className="cs-industry-badge">{study.industry}</span>
            <span className="cs-framework-badge">{study.framework}</span>
          </div>

          <h1 className="cs-epic-title">{study.title}</h1>

          <p className="cs-epic-summary">{study.summary}</p>

          <div className="cs-hero-meta">
            <div className="cs-meta-item">
              <i className="fas fa-building"></i>
              <span>{study.client}</span>
            </div>
            {study.location && (
              <div className="cs-meta-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{study.location}</span>
              </div>
            )}
          </div>

          {study.pdfDownload && (
            <a href={study.pdfDownload} target="_blank" rel="noopener noreferrer" className="cs-download-btn">
              <i className="fas fa-file-pdf"></i>
              Download Full Case Study
            </a>
          )}
        </div>

        {heroImpact && (
          <div className="cs-hero-impact">
            <div className="cs-impact-card">
              <span className="cs-impact-value">
                {heroImpact.prefix}<span className="cs-impact-number">{heroImpact.value}</span>
              </span>
              <span className="cs-impact-label">{heroImpact.label}</span>
            </div>
          </div>
        )}
      </section>

      {/* Transformation Journey - Before/After */}
      {beforeAfter && (
        <section className="cs-transformation">
          <div className="cs-transformation-inner">
            <div className="cs-transform-before">
              <span className="cs-transform-label">Before</span>
              <span className="cs-transform-value">{beforeAfter.before}</span>
              <span className="cs-transform-metric">{beforeAfter.label}</span>
            </div>
            <div className="cs-transform-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="cs-transform-after">
              <span className="cs-transform-label">After</span>
              <span className="cs-transform-value">{beforeAfter.after}</span>
              <span className="cs-transform-metric">{beforeAfter.label}</span>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 1: Human Story - Magazine Editorial Style */}
      {study.humanStory && (
        <section className="cs-story-editorial">
          <div className="cs-editorial-container">
            <div className="cs-editorial-sidebar">
              <div className="cs-editorial-accent"></div>
              <span className="cs-editorial-chapter">Chapter 01</span>
              <h2 className="cs-editorial-title">{study.humanStory.title}</h2>
              <div className="cs-editorial-icon">
                <i className="fas fa-heart"></i>
              </div>
            </div>
            <div className="cs-editorial-content">
              <p className="cs-editorial-lead">{getFirstParagraph(study.humanStory.content)}</p>
              <div className="cs-editorial-body">
                {getRemainingParagraphs(study.humanStory.content).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: Context - Stats Integrated Layout */}
      {study.context && (
        <section className="cs-context-landscape">
          <div className="cs-landscape-bg">
            <div className="cs-landscape-gradient"></div>
            <div className="cs-landscape-dots"></div>
          </div>
          <div className="cs-landscape-container">
            <div className="cs-landscape-header">
              <span className="cs-landscape-tag">The Landscape</span>
              <h2 className="cs-landscape-title">{study.context.title}</h2>
            </div>
            <div className="cs-landscape-grid">
              <div className="cs-landscape-text">
                {study.context.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              {Object.keys(study.metrics).length > 0 && (
                <div className="cs-landscape-stats">
                  <span className="cs-stats-label">Key Numbers</span>
                  {Object.entries(study.metrics).slice(0, 3).map(([key, value]) => {
                    const labels = {
                      deliveryCadence: 'Delivery',
                      predictability: 'Predictability',
                      marketCoverage: 'Market Share',
                      clientBase: 'Clients',
                      employeesCovered: 'Employees',
                      teamSize: 'Team Size',
                      applications: 'Applications'
                    }
                    return (
                      <div key={key} className="cs-stat-item">
                        <span className="cs-stat-value">{value}</span>
                        <span className="cs-stat-label">{labels[key] || key}</span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: DIY Failure - Warning/Alert Style */}
      {study.diyFailure && (
        <section className="cs-failure-alert">
          <div className="cs-alert-container">
            <div className="cs-alert-header">
              <div className="cs-alert-icon-wrap">
                <div className="cs-alert-icon-bg"></div>
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div className="cs-alert-meta">
                <span className="cs-alert-tag">The Warning Signs</span>
                <h2 className="cs-alert-title">{study.diyFailure.title}</h2>
              </div>
            </div>
            <div className="cs-alert-body">
              <div className="cs-alert-stripe"></div>
              <div className="cs-alert-content">
                {study.diyFailure.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: Transformation - Journey/Timeline Style with Key Moment */}
      {study.transformation && (
        <section className="cs-transformation-journey">
          <div className="cs-journey-container">
            <div className="cs-journey-header">
              <div className="cs-journey-badge">
                <i className="fas fa-rocket"></i>
              </div>
              <span className="cs-journey-tag">The Transformation</span>
              <h2 className="cs-journey-title">{study.transformation.title}</h2>
            </div>

            <div className="cs-journey-content">
              <div className="cs-journey-narrative">
                {study.transformation.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {study.transformation.keyMoment && (
                <div className="cs-journey-keymoment">
                  <div className="cs-keymoment-header">
                    <i className="fas fa-bolt"></i>
                    <span>The Breakthrough</span>
                  </div>
                  <blockquote className="cs-keymoment-quote">
                    {study.transformation.keyMoment}
                  </blockquote>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: Cultural Evolution - Before/After Split */}
      {study.culturalEvolution && (
        <section className="cs-culture-evolution">
          <div className="cs-evolution-container">
            <div className="cs-evolution-header">
              <span className="cs-evolution-tag">The Culture Shift</span>
              <h2 className="cs-evolution-title">{study.culturalEvolution.title}</h2>
            </div>
            <div className="cs-evolution-content">
              <div className="cs-evolution-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="cs-evolution-text">
                {study.culturalEvolution.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Basic Content: Challenge & Solution (for studies without rich content) */}
      {!isRichContent && (
        <>
          <section className="cs-challenge-solution">
            <div className="cs-cs-container">
              <div className="cs-cs-card cs-challenge-card">
                <div className="cs-cs-icon">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <span className="cs-cs-label">The Challenge</span>
                <h3 className="cs-cs-title">What They Were Facing</h3>
                <p className="cs-cs-text">{study.challenge}</p>
              </div>
              <div className="cs-cs-divider">
                <div className="cs-cs-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
              <div className="cs-cs-card cs-solution-card">
                <div className="cs-cs-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <span className="cs-cs-label">The Solution</span>
                <h3 className="cs-cs-title">How We Helped</h3>
                <p className="cs-cs-text">{study.solution}</p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Path to Agility Progress (if available) */}
      {study.pathToAgilityStage && (
        <section className="cs-p2a-progress">
          <div className="cs-p2a-inner">
            <div className="cs-p2a-header">
              <span className="section-tag">Path to Agility</span>
              <h2 className="cs-p2a-title">Transformation <span className="highlight">Progress</span></h2>
            </div>
            <div className="cs-p2a-stages">
              {['Align', 'Learn', 'Predict', 'Accelerate', 'Adapt'].map((stage, idx) => (
                <div
                  key={stage}
                  className={`cs-p2a-stage ${stage === study.pathToAgilityStage ? 'cs-p2a-current' : ''} ${idx < ['Align', 'Learn', 'Predict', 'Accelerate', 'Adapt'].indexOf(study.pathToAgilityStage) ? 'cs-p2a-complete' : ''}`}
                >
                  <span className="cs-p2a-stage-num">{idx + 1}</span>
                  <span className="cs-p2a-stage-name">{stage}</span>
                </div>
              ))}
            </div>
            {study.pathToAgilityProgress && (
              <p className="cs-p2a-description">{study.pathToAgilityProgress}</p>
            )}
          </div>
        </section>
      )}

      {/* Results - Compact Cards Grid */}
      <section className="cs-results-compact">
        <div className="cs-results-compact-inner">
          <div className="cs-results-compact-header">
            <span className="section-tag">Outcomes Achieved</span>
            <h2 className="cs-results-compact-title">The <span className="highlight">Results</span></h2>
          </div>
          <div className="cs-results-compact-grid">
            {study.results.map((result, idx) => (
              <div key={idx} className="cs-result-compact-card">
                <div className="cs-result-compact-check">
                  <i className="fas fa-check"></i>
                </div>
                <p className="cs-result-compact-text">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics - Visual Dashboard Style */}
      {Object.keys(study.metrics).length > 0 && (
        <section className="cs-metrics-dashboard">
          <div className="cs-dashboard-inner">
            <div className="cs-dashboard-header">
              <span className="section-tag">By The Numbers</span>
              <h2 className="cs-dashboard-title">Measurable <span className="highlight">Impact</span></h2>
            </div>
            <div className="cs-dashboard-grid">
              {Object.entries(study.metrics).map(([key, value], idx) => {
                const labels = {
                  deliveryCadence: 'Delivery Cadence',
                  predictability: 'Predictability',
                  savings: 'Cost Savings',
                  cycleTimeReduction: 'Cycle Time Reduction',
                  successRate: 'Success Rate',
                  teamSize: 'Team Size',
                  applications: 'Applications',
                  releaseCycle: 'Release Cycle',
                  deploymentSpeed: 'Deployment Speed',
                  investmentImprovement: 'Investment ROI',
                  testsLaunched: 'Tests Launched',
                  usabilityHours: 'Usability Testing',
                  annualVisitors: 'Annual Visitors',
                  marketCoverage: 'Market Coverage',
                  clientBase: 'Clients Served',
                  coachesDuration: 'Coaching Engagement',
                  employeesCovered: 'Employees Covered'
                }
                const icons = {
                  deliveryCadence: 'fa-rocket',
                  predictability: 'fa-chart-line',
                  savings: 'fa-dollar-sign',
                  cycleTimeReduction: 'fa-stopwatch',
                  successRate: 'fa-check-circle',
                  teamSize: 'fa-users',
                  applications: 'fa-cubes',
                  releaseCycle: 'fa-sync',
                  deploymentSpeed: 'fa-shipping-fast',
                  investmentImprovement: 'fa-chart-pie',
                  testsLaunched: 'fa-flask',
                  usabilityHours: 'fa-clock',
                  annualVisitors: 'fa-globe',
                  marketCoverage: 'fa-percentage',
                  clientBase: 'fa-building',
                  coachesDuration: 'fa-user-tie',
                  employeesCovered: 'fa-hard-hat'
                }
                const featured = idx === 0

                return (
                  <div key={key} className={`cs-dashboard-card ${featured ? 'cs-dashboard-featured' : ''}`}>
                    <div className="cs-dashboard-icon">
                      <i className={`fas ${icons[key] || 'fa-chart-bar'}`}></i>
                    </div>
                    <span className="cs-dashboard-value">{value}</span>
                    <span className="cs-dashboard-label">{labels[key] || key}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials - Featured Quote Style */}
      {study.testimonials && study.testimonials.length > 0 && (
        <section className="cs-testimonials-featured">
          <div className="cs-testimonials-featured-inner">
            {study.testimonials.slice(0, 1).map((testimonial, idx) => (
              <div key={idx} className="cs-featured-testimonial">
                <div className="cs-featured-quote-mark">
                  <i className="fas fa-quote-left"></i>
                </div>
                <blockquote className="cs-featured-quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="cs-featured-author">
                  <div className="cs-featured-avatar">
                    <span>{testimonial.author.charAt(0)}</span>
                  </div>
                  <div className="cs-featured-author-info">
                    <span className="cs-featured-author-name">{testimonial.author}</span>
                    {testimonial.title && (
                      <span className="cs-featured-author-title">{testimonial.title}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {study.testimonials.length > 1 && (
              <div className="cs-secondary-testimonials">
                {study.testimonials.slice(1, 3).map((testimonial, idx) => (
                  <div key={idx} className="cs-secondary-testimonial">
                    <blockquote className="cs-secondary-quote">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="cs-secondary-author">
                      <span className="cs-secondary-author-name">{testimonial.author}</span>
                      {testimonial.title && (
                        <span className="cs-secondary-author-title">{testimonial.title}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Tags - Minimal Style */}
      <section className="cs-tags-minimal">
        <div className="cs-tags-minimal-inner">
          <span className="cs-tags-minimal-label">Related Topics:</span>
          <div className="cs-tags-minimal-list">
            {study.tags.map((tag, idx) => (
              <span key={idx} className="cs-tag-minimal">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Epic CTA */}
      <section className="cs-epic-cta">
        <div className="cs-cta-bg">
          <div className="cs-cta-gradient"></div>
        </div>
        <div className="cs-cta-content">
          <h2 className="cs-cta-title">Ready to Write Your Own Success Story?</h2>
          <p className="cs-cta-text">
            Every transformation starts with a conversation. Let's discuss how we can help your organization
            achieve breakthrough results like {study.client}.
          </p>
          <div className="cs-cta-actions">
            <Link href="/contact" className="cs-cta-btn-primary">
              Start Your Transformation
            </Link>
            {study.pdfDownload && (
              <a href={study.pdfDownload} target="_blank" rel="noopener noreferrer" className="cs-cta-btn-secondary">
                <i className="fas fa-file-pdf"></i>
                Download Case Study
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="cs-related-section">
          <div className="cs-related-inner">
            <div className="cs-related-header">
              <span className="section-tag">Continue Reading</span>
              <h2 className="cs-related-title">More <span className="highlight">Success Stories</span></h2>
            </div>

            <div className="cs-related-grid">
              {relatedStudies.map((related) => (
                <Link key={related.id} href={`/insights/case-studies/${related.id}`} className="cs-related-card">
                  <div className="cs-related-card-header">
                    <span className="cs-related-industry">{related.industry}</span>
                    {related.pdfDownload && (
                      <span className="cs-related-pdf">
                        <i className="fas fa-file-pdf"></i>
                      </span>
                    )}
                  </div>
                  <h3 className="cs-related-card-title">{related.shortTitle}</h3>
                  <p className="cs-related-card-summary">{related.summary.substring(0, 120)}...</p>
                  <span className="cs-related-link">
                    Read Story <i className="fas fa-arrow-right"></i>
                  </span>
                </Link>
              ))}
            </div>

            <div className="cs-related-cta">
              <Link href="/insights/case-studies" className="cs-view-all-btn">
                View All Case Studies
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
