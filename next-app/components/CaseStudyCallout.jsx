import Link from 'next/link'
import { getCaseStudyById, getFeaturedCaseStudies } from '@/data/case-studies'

// Mapping of outcomes to relevant case studies
const outcomeMapping = {
  'speed': ['southwest-operations', 'texas-mutual-insurance'],
  'predictability': ['southwest-tech-ops', 'qualitrol-transformation'],
  'quality': ['texas-mutual-insurance', 'southwest-marketing'],
  'innovation': ['southwest-marketing', 'texas-mutual-insurance'],
  'market-responsiveness': ['southwest-operations', 'southwest-marketing'],
  'productivity': ['southwest-tech-ops', 'chaos-to-acceleration'],
  'continuous-improvement': ['texas-mutual-insurance', 'southwest-tech-ops'],
  'employee-engagement': ['texas-mutual-insurance', 'southwest-operations'],
  'customer-satisfaction': ['texas-mutual-insurance', 'southwest-marketing']
}

// Mapping of problems to relevant case studies
const problemMapping = {
  'stalled-or-superficial-transformation': ['texas-mutual-insurance', 'southwest-operations'],
  'portfolio-and-prioritization-chaos': ['southwest-tech-ops', 'information-security'],
  'messy-scaling-and-dependency-hell': ['southwest-tech-ops', 'southwest-operations'],
  'leadership-misalignment-and-governance-drag': ['texas-mutual-insurance', 'qualitrol-transformation'],
  'silos-handoffs-and-support-work-derailment': ['texas-mutual-insurance', 'infrastructure-operations'],
  'no-real-visibility-and-vanity-metrics': ['southwest-tech-ops', 'information-security'],
  'burnout-low-trust-and-change-fatigue': ['texas-mutual-insurance', 'southwest-operations'],
  'ai-and-modernization-without-a-strategy': ['southwest-marketing', 'chaos-to-acceleration']
}

// Get case studies for an outcome
export function getCaseStudiesForOutcome(outcomeSlug) {
  const ids = outcomeMapping[outcomeSlug] || []
  return ids.map(id => getCaseStudyById(id)).filter(Boolean)
}

// Get case studies for a problem
export function getCaseStudiesForProblem(problemSlug) {
  const ids = problemMapping[problemSlug] || []
  return ids.map(id => getCaseStudyById(id)).filter(Boolean)
}

// Single featured case study callout
export function CaseStudyCallout({ study, variant = 'default', className = '' }) {
  if (!study) return null

  const getKeyMetric = () => {
    if (study.metrics.savings) return { value: study.metrics.savings, label: 'Saved' }
    if (study.metrics.deliveryCadence) return { value: study.metrics.deliveryCadence, label: 'Delivery improved' }
    if (study.metrics.predictability) return { value: study.metrics.predictability, label: 'Predictability' }
    if (study.metrics.successRate) return { value: study.metrics.successRate, label: 'Success rate' }
    if (study.metrics.cycleTimeReduction) return { value: study.metrics.cycleTimeReduction, label: 'Cycle time reduced' }
    return null
  }

  const metric = getKeyMetric()

  if (variant === 'compact') {
    return (
      <Link href={`/insights/case-studies/${study.id}`} className={`cs-callout-compact ${className}`}>
        <div className="cs-callout-compact-inner">
          <span className="cs-callout-label">See it in action</span>
          <span className="cs-callout-client">{study.client}</span>
          {metric && (
            <span className="cs-callout-metric">{metric.label}: <strong>{metric.value}</strong></span>
          )}
          <span className="cs-callout-link">Read Case Study <i className="fas fa-arrow-right"></i></span>
        </div>
      </Link>
    )
  }

  if (variant === 'inline') {
    return (
      <div className={`cs-callout-inline ${className}`}>
        <i className="fas fa-building"></i>
        <span>See how <strong>{study.shortTitle}</strong> achieved this.</span>
        <Link href={`/insights/case-studies/${study.id}`}>
          Read the case study <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    )
  }

  // Default: full card
  return (
    <Link href={`/insights/case-studies/${study.id}`} className={`cs-callout-card ${className}`}>
      <div className="cs-callout-card-badge">
        <i className="fas fa-trophy"></i>
        <span>Success Story</span>
      </div>
      <div className="cs-callout-card-content">
        <span className="cs-callout-industry">{study.industry}</span>
        <h3 className="cs-callout-title">{study.shortTitle}</h3>
        <p className="cs-callout-summary">{study.summary}</p>
        {metric && (
          <div className="cs-callout-highlight">
            <span className="cs-callout-highlight-value">{metric.value}</span>
            <span className="cs-callout-highlight-label">{metric.label}</span>
          </div>
        )}
        <span className="cs-callout-cta">
          Read Full Story <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </Link>
  )
}

// Featured proof section for homepage
export function CaseStudyProofSection() {
  const featured = getFeaturedCaseStudies().slice(0, 3)

  return (
    <section className="cs-proof-section">
      <div className="cs-proof-inner">
        <div className="cs-proof-header">
          <span className="section-tag">Proof</span>
          <h2 className="cs-proof-title">Real Results from <span className="highlight">Real Transformations</span></h2>
          <p className="cs-proof-subtitle">Don't just take our word for it. See the numbers.</p>
        </div>
        <div className="cs-proof-grid">
          {featured.map(study => {
            const metric = getKeyMetricForStudy(study)
            return (
              <Link key={study.id} href={`/insights/case-studies/${study.id}`} className="cs-proof-card">
                <div className="cs-proof-card-metric">
                  <span className="cs-proof-value">{metric?.value || '—'}</span>
                  <span className="cs-proof-label">{metric?.label || 'Transformed'}</span>
                </div>
                <div className="cs-proof-card-content">
                  <span className="cs-proof-client">{study.shortTitle}</span>
                  <span className="cs-proof-industry">{study.industry}</span>
                </div>
                <span className="cs-proof-arrow"><i className="fas fa-arrow-right"></i></span>
              </Link>
            )
          })}
        </div>
        <Link href="/insights/case-studies" className="cs-proof-view-all">
          View All Case Studies <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  )
}

function getKeyMetricForStudy(study) {
  if (study.metrics.savings) return { value: study.metrics.savings, label: 'Saved' }
  if (study.metrics.deliveryCadence) return { value: study.metrics.deliveryCadence, label: 'Delivery' }
  if (study.metrics.predictability) return { value: study.metrics.predictability, label: 'Predictability' }
  if (study.metrics.successRate) return { value: study.metrics.successRate, label: 'Success Rate' }
  if (study.metrics.cycleTimeReduction) return { value: study.metrics.cycleTimeReduction, label: 'Cycle Time Reduced' }
  return null
}

// Mini callout for CTA sections
export function CaseStudyMiniCallout({ study, prefix = "See how" }) {
  if (!study) return null

  return (
    <Link href={`/insights/case-studies/${study.id}`} className="cs-mini-callout">
      <i className="fas fa-file-alt"></i>
      <span>{prefix} <strong>{study.shortTitle}</strong> did it</span>
      <i className="fas fa-arrow-right"></i>
    </Link>
  )
}

export default CaseStudyCallout
