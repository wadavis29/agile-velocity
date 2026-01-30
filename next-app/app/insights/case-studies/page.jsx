import Link from 'next/link'
import { getAllCaseStudies, getFeaturedCaseStudies, getIndustries } from '@/data/case-studies'

export const metadata = {
  title: 'Case Studies | Agile Velocity',
  description: 'Explore how organizations across industries have achieved breakthrough results through enterprise transformation with Agile Velocity.',
}

// Get the most impactful metric for display
function getImpactMetric(study) {
  if (study.metrics.savings) return { value: study.metrics.savings, label: 'Saved' }
  if (study.metrics.deliveryCadence) return { value: study.metrics.deliveryCadence, label: 'Delivery' }
  if (study.metrics.predictability) return { value: study.metrics.predictability, label: 'Predictability' }
  if (study.metrics.releaseCycle) return { value: study.metrics.releaseCycle, label: 'Release Cycle' }
  if (study.metrics.successRate) return { value: study.metrics.successRate, label: 'Success Rate' }
  if (study.metrics.cycleTimeReduction) return { value: study.metrics.cycleTimeReduction, label: 'Cycle Time' }
  return null
}

export default function CaseStudies() {
  const allCaseStudies = getAllCaseStudies()
  const featuredCaseStudies = getFeaturedCaseStudies()
  const industries = getIndustries()

  return (
    <>
      {/* Hero Section */}
      <section className="case-studies-hero">
        <div className="case-studies-hero-inner">
          <span className="section-tag">Case Studies</span>
          <h1 className="case-studies-hero-title">
            Real Results from <span className="highlight">Real Transformations</span>
          </h1>
          <p className="case-studies-hero-sub">
            From $5M+ in savings to 18x faster delivery. These aren't just success stories. They're
            blueprints for what's possible when you commit to true transformation.
          </p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="case-studies-featured">
        <div className="case-studies-featured-inner">
          <div className="section-header">
            <span className="section-tag">Featured</span>
            <h2 className="section-title">Transformation <span className="highlight">Success Stories</span></h2>
          </div>
          <div className="case-studies-featured-grid">
            {featuredCaseStudies.map((study) => {
              const impact = getImpactMetric(study)
              return (
                <Link key={study.id} href={`/insights/case-studies/${study.id}`} className="case-study-featured-card">
                  <div className="case-study-featured-content">
                    <span className="case-study-industry">{study.industry}</span>
                    <h3>{study.shortTitle}</h3>
                    <p>{study.summary}</p>
                    <div className="case-study-metrics-preview">
                      {study.metrics.deliveryCadence && (
                        <div className="case-study-metric">
                          <span className="metric-label">Delivery</span>
                          <span className="metric-value">{study.metrics.deliveryCadence}</span>
                        </div>
                      )}
                      {study.metrics.predictability && (
                        <div className="case-study-metric">
                          <span className="metric-label">Predictability</span>
                          <span className="metric-value">{study.metrics.predictability}</span>
                        </div>
                      )}
                      {study.metrics.savings && (
                        <div className="case-study-metric">
                          <span className="metric-label">Savings</span>
                          <span className="metric-value">{study.metrics.savings}</span>
                        </div>
                      )}
                      {study.metrics.successRate && (
                        <div className="case-study-metric">
                          <span className="metric-label">Success Rate</span>
                          <span className="metric-value">{study.metrics.successRate}</span>
                        </div>
                      )}
                      {study.metrics.teamSize && (
                        <div className="case-study-metric">
                          <span className="metric-label">Scale</span>
                          <span className="metric-value">{study.metrics.teamSize}</span>
                        </div>
                      )}
                    </div>
                    <span className="case-study-link">
                      Read Full Case Study <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                  <div className="case-study-featured-tags">
                    {study.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="case-study-tag">{tag}</span>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="case-studies-all">
        <div className="case-studies-all-inner">
          <div className="section-header">
            <span className="section-tag">All Case Studies</span>
            <h2 className="section-title">Explore More <span className="highlight">Transformations</span></h2>
            <p className="section-subtitle">From insurance to aviation, healthcare to financial services. See how diverse organizations have achieved breakthrough results.</p>
          </div>
          <div className="case-studies-grid">
            {allCaseStudies.map((study) => (
              <Link key={study.id} href={`/insights/case-studies/${study.id}`} className="case-study-card">
                <div className="case-study-card-header">
                  <span className="case-study-industry">{study.industry}</span>
                  {study.pdfDownload && (
                    <span className="case-study-pdf-badge">
                      <i className="fas fa-file-pdf"></i>
                    </span>
                  )}
                </div>
                <h3>{study.shortTitle}</h3>
                <p>{study.summary}</p>
                <div className="case-study-card-results">
                  <span className="results-label">Key Results:</span>
                  <ul>
                    {study.results.slice(0, 2).map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>
                <div className="case-study-card-footer">
                  <span className="case-study-framework">{study.framework}</span>
                  <span className="case-study-link">
                    View Details <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="case-studies-industries">
        <div className="case-studies-industries-inner">
          <div className="section-header">
            <span className="section-tag">Industries</span>
            <h2 className="section-title">Transformation Across <span className="highlight">Every Sector</span></h2>
          </div>
          <div className="industries-grid">
            <div className="industry-item">
              <i className="fas fa-plane"></i>
              <span>Aviation</span>
            </div>
            <div className="industry-item">
              <i className="fas fa-shield-alt"></i>
              <span>Insurance</span>
            </div>
            <div className="industry-item">
              <i className="fas fa-heartbeat"></i>
              <span>Healthcare</span>
            </div>
            <div className="industry-item">
              <i className="fas fa-chart-line"></i>
              <span>Financial Services</span>
            </div>
            <div className="industry-item">
              <i className="fas fa-industry"></i>
              <span>Manufacturing</span>
            </div>
            <div className="industry-item">
              <i className="fas fa-shopping-cart"></i>
              <span>Retail Technology</span>
            </div>
            <div className="industry-item">
              <i className="fas fa-landmark"></i>
              <span>Government</span>
            </div>
            <div className="industry-item">
              <i className="fas fa-bullhorn"></i>
              <span>Marketing</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="case-studies-cta">
        <div className="case-studies-cta-inner">
          <h2>Ready to Write Your Success Story?</h2>
          <p>Join the organizations that have transformed their delivery, culture, and results with Agile Velocity. Every transformation starts with a conversation.</p>
          <div className="case-studies-cta-actions">
            <Link href="/contact" className="btn-primary btn-lg">
              Start Your Transformation
            </Link>
            <Link href="/path-to-agility" className="btn-ghost btn-lg">
              Explore Path to Agility
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
