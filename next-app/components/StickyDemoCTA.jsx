'use client'

import { useState, useEffect } from 'react'

export default function StickyDemoCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 600px (roughly past the hero)
      const shouldShow = window.scrollY > 600
      setIsVisible(shouldShow)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = (e) => {
    e.preventDefault()
    const formSection = document.getElementById('get-demo')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`sticky-demo-cta ${isVisible ? 'visible' : ''}`}>
      <div className="sticky-demo-cta-inner">
        <div className="sticky-demo-cta-text">
          <strong>Ready to see Navigator?</strong>
          <span>Get a free 30-minute demo</span>
        </div>
        <button onClick={scrollToForm} className="sticky-demo-cta-btn">
          Get Your Demo
        </button>
      </div>
    </div>
  )
}
