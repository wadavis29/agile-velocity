'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function NavigatorDemoForm() {
  const formRef = useRef(null)
  const formLoadedRef = useRef(false)

  useEffect(() => {
    if (formLoadedRef.current) return

    const script = document.createElement('script')
    script.src = '//js-na2.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.async = true
    script.onload = () => {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          portalId: '481123',
          formId: '35d6fc96-496d-47d9-b6b5-58a6a6c51fe7',
          region: 'na2',
          target: '#navigator-hubspot-form',
          onFormReady: function() {
            const urlParams = new URLSearchParams(window.location.search)

            const populateIframeFields = () => {
              const iframe = document.querySelector('#navigator-hubspot-form iframe')
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
              gtag('event', 'demo_request', {
                'event_category': 'conversion',
                'event_label': 'Navigator Page Form',
                'source': 'navigator_page',
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
    <section className="navigator-demo-section" id="get-demo">
      <div className="navigator-demo-inner">
        <div className="navigator-demo-content">
          <span className="section-tag">Get Started</span>
          <h2>See Navigator<br /><span className="highlight">In Action</span></h2>
          <p>
            Get a 30-minute personalized walkthrough. See how Navigator handles
            assessments, heatmaps, and action tracking in your context.
          </p>

          <ul className="navigator-demo-benefits">
            <li><i className="fas fa-check"></i> No sales pitch, just a product demo</li>
            <li><i className="fas fa-check"></i> See real assessments and heatmaps</li>
            <li><i className="fas fa-check"></i> Get your questions answered</li>
            <li><i className="fas fa-check"></i> 30-day free trial included</li>
          </ul>

          <div className="navigator-demo-coach-note">
            <i className="fas fa-users"></i>
            <span>Want to get your team started right away? Ask about our <strong>free 90-minute coach-led assessment session</strong> during your demo.</span>
          </div>

          <div className="navigator-demo-alt">
            <span>Prefer to pick a time yourself?</span>
            <a
              href="https://info.agilevelocity.com/meetings/agilevelocity/agile-velocity-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="navigator-calendar-link"
            >
              <i className="fas fa-calendar-check"></i> Book directly on our calendar
            </a>
          </div>

          <div className="navigator-demo-plans-link">
            <Link href="/path-to-agility/navigator/plans">
              <i className="fas fa-tags"></i> View Plans & Features
            </Link>
          </div>
        </div>

        <div className="navigator-demo-form-card" ref={formRef}>
          <div className="navigator-demo-form-header">
            <h3>Request Your Demo</h3>
            <p>We&apos;ll reach out within 1 business day</p>
          </div>

          <div id="navigator-hubspot-form" className="navigator-demo-form">
            <div className="navigator-demo-form-loading">
              <i className="fas fa-circle-notch fa-spin"></i>
              <span>Loading form...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
