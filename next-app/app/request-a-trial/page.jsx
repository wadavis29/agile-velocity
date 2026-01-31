'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const clientLogos = [
  { name: 'Southwest Airlines', src: '/images/logos/Southwest_Airlines_logo_2014.svg.png' },
  { name: 'Honeywell', src: '/images/logos/Honeywell_logo.svg.png' },
  { name: 'Texas Mutual', src: '/images/logos/TexasMutual.png' },
  { name: 'Q2', src: '/images/logos/QTWO.png' },
  { name: 'Baylor Scott & White', src: '/images/logos/baylor_scott_white.png' },
  { name: 'Lennar', src: '/images/logos/Lennar_Logo.svg.png' },
]

export default function RequestATrial() {
  const formRef = useRef(null)
  const formLoadedRef = useRef(false)

  useEffect(() => {
    // Load HubSpot script
    if (formLoadedRef.current) return

    const script = document.createElement('script')
    script.src = '//js-na2.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.async = true
    script.onload = () => {
      if (window.hbspt && formRef.current) {
        // Get plan param for GA4 tracking
        const urlParams = new URLSearchParams(window.location.search)
        const planParam = urlParams.get('plan')

        window.hbspt.forms.create({
          portalId: '481123',
          formId: '35d6fc96-496d-47d9-b6b5-58a6a6c51fe7',
          region: 'na2',
          target: '#hubspot-form',
          onFormReady: function($form) {
            const urlParams = new URLSearchParams(window.location.search)

            const populateIframeFields = () => {
              const iframe = document.querySelector('#hubspot-form iframe')
              if (!iframe || !iframe.contentDocument) return false

              const iframeDoc = iframe.contentDocument

              // Set plan_name (URL param is "plan")
              const plan = urlParams.get('plan')
              if (plan) {
                const planField = iframeDoc.querySelector('input[name="plan_name"]')
                if (planField) {
                  planField.value = plan
                  planField.setAttribute('value', plan)
                }
              }

              // Set UTM fields
              const utmFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
              utmFields.forEach(fieldName => {
                const value = urlParams.get(fieldName)
                if (value) {
                  const field = iframeDoc.querySelector(`input[name="${fieldName}"]`)
                  if (field) {
                    field.value = value
                    field.setAttribute('value', value)
                  }
                }
              })

              return true
            }

            // Poll until iframe is ready
            let attempts = 0
            const maxAttempts = 20
            const interval = setInterval(() => {
              attempts++
              if (populateIframeFields() || attempts >= maxAttempts) {
                clearInterval(interval)
              }
            }, 250)
          },
          onFormSubmit: function() {
            const urlParams = new URLSearchParams(window.location.search)
            const planParam = urlParams.get('plan')
            if (typeof gtag !== 'undefined') {
              gtag('event', 'gt_form', {
                'event_category': 'conversion',
                'event_label': 'Demo Request Form',
                'form_type': 'demo_request',
                'plan_interest': planParam || 'none'
              })
            }
          }
        })
        formLoadedRef.current = true
      }
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <>
      {/* Hero + Form - Above the Fold */}
      <section className="demo-hero">
        <div className="demo-hero-bg" aria-hidden="true">NAVIGATOR</div>

        <div className="demo-hero-inner">
          {/* Left: Value Prop */}
          <div className="demo-hero-content">
            <div className="demo-badge">
              <i className="fas fa-compass"></i>
              <span>Path to Agility Navigator</span>
            </div>

            <h1 className="demo-headline">
              Finally See If Your Transformation Is <span className="demo-highlight">Working</span>
            </h1>

            <p className="demo-subhead">
              Navigator gives you real-time visibility into every team&apos;s
              progress, tied directly to the business outcomes that matter.
            </p>

            <ul className="demo-benefits">
              <li><i className="fas fa-check"></i> Assess 100 capabilities across teams</li>
              <li><i className="fas fa-check"></i> Visualize gaps with interactive heatmaps</li>
              <li><i className="fas fa-check"></i> Get prioritized actions tied to outcomes</li>
            </ul>

            {/* Trust Logos */}
            <div className="demo-logos">
              <span className="demo-logos-label">Agile Velocity has guided transformation at</span>
              <div className="demo-logos-list">
                {clientLogos.map((logo, i) => (
                  <div key={i} className="demo-logo-wrapper">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="demo-logo-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="demo-form-card" ref={formRef}>
            <div className="demo-form-header">
              <h2>See Navigator in Action</h2>
              <p>30-minute personalized walkthrough. No sales pitch.</p>
            </div>

            <div id="hubspot-form" className="demo-form">
              <div className="demo-form-loading">
                <i className="fas fa-circle-notch fa-spin"></i>
                <span>Loading...</span>
              </div>
            </div>

            <div className="demo-form-alt">
              <span>Want to book a specific time?</span>
              <a
                href="https://info.agilevelocity.com/meetings/agilevelocity/agile-velocity-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="demo-calendar-link"
              >
                <i className="fas fa-calendar-check"></i> Schedule directly on our calendar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="demo-expect">
        <div className="demo-expect-inner">
          <h3>What Happens Next</h3>
          <div className="demo-expect-steps">
            <div className="demo-expect-step">
              <div className="demo-expect-num">1</div>
              <div className="demo-expect-text">
                <strong>We&apos;ll reach out within 1 business day</strong>
                <p>To schedule a time that works for you</p>
              </div>
            </div>
            <div className="demo-expect-connector"><i className="fas fa-chevron-right"></i></div>
            <div className="demo-expect-step">
              <div className="demo-expect-num">2</div>
              <div className="demo-expect-text">
                <strong>30-minute focused walkthrough</strong>
                <p>See assessments, heatmaps, and actions in your context</p>
              </div>
            </div>
            <div className="demo-expect-connector"><i className="fas fa-chevron-right"></i></div>
            <div className="demo-expect-step">
              <div className="demo-expect-num">3</div>
              <div className="demo-expect-text">
                <strong>Get your questions answered</strong>
                <p>Pricing, implementation, whatever you need</p>
              </div>
            </div>
          </div>

          <div className="demo-expect-note">
            <i className="fas fa-users"></i>
            <span>Want to get your team started right away? Ask about our <strong>free 90-minute coach-led assessment session</strong> during your demo.</span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="demo-proof">
        <div className="demo-proof-inner">
          <div className="demo-testimonial">
            <div className="demo-testimonial-quote">
              <i className="fas fa-quote-left"></i>
            </div>
            <blockquote>
              Path to Agility focused on outcomes has strengthened our capabilities
              and become integral to our improvement mindset. The Navigator platform
              gave us visibility we never had before.
            </blockquote>
            <div className="demo-testimonial-author">
              <div className="demo-testimonial-avatar">JW</div>
              <div>
                <strong>Jeanette Ward</strong>
                <span>Texas Mutual Insurance</span>
              </div>
            </div>
          </div>

          <div className="demo-stats">
            <div className="demo-stat">
              <span className="demo-stat-num">100<span className="demo-stat-plus">+</span></span>
              <span className="demo-stat-label">Enterprise transformations</span>
            </div>
            <div className="demo-stat">
              <span className="demo-stat-num">15<span className="demo-stat-plus">+</span></span>
              <span className="demo-stat-label">Years refining the methodology</span>
            </div>
            <div className="demo-stat">
              <span className="demo-stat-num">9</span>
              <span className="demo-stat-label">Business outcomes tracked</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="demo-features">
        <div className="demo-features-inner">
          <h3>What You&apos;ll See in the Demo</h3>
          <div className="demo-features-grid">
            <div className="demo-feature">
              <div className="demo-feature-icon"><i className="fas fa-clipboard-check"></i></div>
              <h4>Team Assessments</h4>
              <p>5-minute self-assessments against 100 capabilities</p>
            </div>
            <div className="demo-feature">
              <div className="demo-feature-icon"><i className="fas fa-map"></i></div>
              <h4>Capability Heatmaps</h4>
              <p>Instant visibility into strengths and gaps</p>
            </div>
            <div className="demo-feature">
              <div className="demo-feature-icon"><i className="fas fa-list-check"></i></div>
              <h4>Prioritized Actions</h4>
              <p>Know exactly what to improve next</p>
            </div>
            <div className="demo-feature">
              <div className="demo-feature-icon"><i className="fas fa-chart-line"></i></div>
              <h4>Progress Dashboards</h4>
              <p>Track transformation over time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="demo-final-cta">
        <div className="demo-final-cta-inner">
          <h3>Ready to see what Navigator can do for your transformation?</h3>
          <div className="demo-final-cta-buttons">
            <a
              href="#hubspot-form"
              className="btn-primary btn-large"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('.demo-form-card').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get Your Demo
            </a>
            <Link href="/path-to-agility/navigator" className="btn-ghost">
              Learn More About Navigator
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
