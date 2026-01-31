'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Contact() {
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
        window.hbspt.forms.create({
          portalId: '481123',
          formId: '8f4eed57-1e22-4805-80ed-697cdf5fe9ff',
          region: 'na2',
          target: '#hubspot-contact-form',
          onFormReady: function($form) {
            const urlParams = new URLSearchParams(window.location.search)

            const populateIframeFields = () => {
              const iframe = document.querySelector('#hubspot-contact-form iframe')
              if (!iframe || !iframe.contentDocument) return false

              const iframeDoc = iframe.contentDocument

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
            if (typeof gtag !== 'undefined') {
              gtag('event', 'gt_form', {
                'event_category': 'conversion',
                'event_label': 'Contact Form',
                'form_type': 'contact'
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
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg" aria-hidden="true">TALK</div>

        <div className="contact-hero-inner">
          {/* Left: Value Prop */}
          <div className="contact-hero-content">
            <span className="section-tag">Contact Us</span>
            <h1 className="contact-headline">
              Let&apos;s <span className="highlight">Talk</span>
            </h1>
            <p className="contact-subhead">
              30 minutes. No pitch. Just tell us what&apos;s not working and we&apos;ll
              help you diagnose the real issue.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-method-info">
                  <h3>Call Us</h3>
                  <a href="tel:512-298-2835">512-298-2835</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-method-info">
                  <h3>Headquarters</h3>
                  <p>Austin, Texas</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <span className="contact-social-label">Connect With Us</span>
              <div className="contact-social-links">
                <a href="https://linkedin.com/company/agilevelocity" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/agilevelocity" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/@AgileVelocity" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-card" ref={formRef}>
            <div className="contact-form-header">
              <h2>Send Us a Message</h2>
              <p>We&apos;ll get back to you within 1 business day.</p>
            </div>

            <div id="hubspot-contact-form" className="contact-form">
              <div className="contact-form-loading">
                <i className="fas fa-circle-notch fa-spin"></i>
                <span>Loading form...</span>
              </div>
            </div>

            <div className="contact-form-alt">
              <span>Prefer to schedule directly?</span>
              <a
                href="https://info.agilevelocity.com/meetings/agilevelocity/agile-velocity-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-calendar-link"
              >
                <i className="fas fa-calendar-check"></i> Book a time on our calendar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="contact-expect">
        <div className="contact-expect-inner">
          <h3>What Happens Next</h3>
          <div className="contact-expect-steps">
            <div className="contact-expect-step">
              <div className="contact-expect-num">1</div>
              <div className="contact-expect-text">
                <strong>We&apos;ll respond within 1 business day</strong>
                <p>A real person will read your message and reply</p>
              </div>
            </div>
            <div className="contact-expect-connector"><i className="fas fa-chevron-right"></i></div>
            <div className="contact-expect-step">
              <div className="contact-expect-num">2</div>
              <div className="contact-expect-text">
                <strong>30-minute diagnostic call</strong>
                <p>Tell us what&apos;s not working. We&apos;ll help identify the root cause.</p>
              </div>
            </div>
            <div className="contact-expect-connector"><i className="fas fa-chevron-right"></i></div>
            <div className="contact-expect-step">
              <div className="contact-expect-num">3</div>
              <div className="contact-expect-text">
                <strong>Get clarity on next steps</strong>
                <p>Whether you work with us or not, you&apos;ll leave with actionable insight.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Reach Out */}
      <section className="contact-reasons">
        <div className="contact-reasons-inner">
          <div className="section-header">
            <span className="section-tag">How We Can Help</span>
            <h2 className="section-title">Reach Out <span className="highlight">When</span></h2>
          </div>
          <div className="contact-reasons-grid">
            <div className="contact-reason-card">
              <div className="contact-reason-icon">
                <i className="fas fa-route"></i>
              </div>
              <h4>Your transformation has stalled</h4>
              <p>Started agile but lost momentum? We&apos;ve helped 100+ organizations break through plateaus.</p>
            </div>
            <div className="contact-reason-card">
              <div className="contact-reason-icon">
                <i className="fas fa-compass"></i>
              </div>
              <h4>You need a roadmap</h4>
              <p>Not sure where to start? We&apos;ll assess your current state and build a path forward.</p>
            </div>
            <div className="contact-reason-card">
              <div className="contact-reason-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4>You want measurable outcomes</h4>
              <p>Tired of activity metrics? Path to Agility® connects practices to business results.</p>
            </div>
            <div className="contact-reason-card">
              <div className="contact-reason-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>You need to train your teams</h4>
              <p>SAFe, Scrum, Kanban certifications. Private or public workshops available.</p>
            </div>
            <div className="contact-reason-card">
              <div className="contact-reason-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h4>You want transformation visibility</h4>
              <p>Navigator software tracks 100 capabilities across every team in real-time.</p>
            </div>
            <div className="contact-reason-card">
              <div className="contact-reason-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>You want a partner, not a vendor</h4>
              <p>We build your internal capability so you don&apos;t need us forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="contact-links">
        <div className="contact-links-inner">
          <h3>Looking for Something Specific?</h3>
          <div className="contact-links-grid">
            <Link href="/training/public-workshops" className="contact-quick-link">
              <i className="fas fa-calendar-alt"></i>
              <span>View Public Workshop Schedule</span>
            </Link>
            <Link href="/training/for-organizations" className="contact-quick-link">
              <i className="fas fa-building"></i>
              <span>Request Private Training</span>
            </Link>
            <Link href="/request-a-trial" className="contact-quick-link">
              <i className="fas fa-compass"></i>
              <span>Request Navigator Demo</span>
            </Link>
            <Link href="/path-to-agility/partner" className="contact-quick-link">
              <i className="fas fa-handshake"></i>
              <span>Become a Partner</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-cta">
        <div className="contact-cta-inner">
          <h2>Not Sure Where to Start?</h2>
          <p>Tell us about your challenges. We&apos;ve seen it all, and fixed most of it.</p>
          <a
            href="#hubspot-contact-form"
            className="btn-primary btn-large"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('.contact-form-card').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </>
  )
}
