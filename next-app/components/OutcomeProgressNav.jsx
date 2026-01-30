'use client'

import { useState, useEffect } from 'react'

const sections = [
  { id: 'hero', label: 'Overview', icon: 'fa-home' },
  { id: 'problem-section', label: 'The Problem', icon: 'fa-exclamation-circle' },
  { id: 'signs-section', label: 'Warning Signs', icon: 'fa-bell' },
  { id: 'how-we-fix-it', label: 'Our Approach', icon: 'fa-tools' },
  { id: 'outcomes-section', label: 'Results', icon: 'fa-chart-line' },
  { id: 'case-studies-section', label: 'Case Studies', icon: 'fa-briefcase' },
  { id: 'cta-section', label: 'Get Started', icon: 'fa-arrow-right' },
]

export default function OutcomeProgressNav() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)
  const [availableSections, setAvailableSections] = useState([])

  useEffect(() => {
    // Check which sections actually exist on the page
    const existing = sections.filter(section => {
      return document.getElementById(section.id)
    })
    setAvailableSections(existing)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Show/hide based on scroll position
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Determine active section
      for (let i = existing.length - 1; i >= 0; i--) {
        const section = existing[i]
        const element = document.getElementById(section.id)

        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY

          if (scrollPosition >= elementTop) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)

    if (element) {
      const offset = 80 // Account for any fixed headers
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  // Calculate progress percentage
  const activeIndex = availableSections.findIndex(s => s.id === activeSection)
  const progressPercent = availableSections.length > 1
    ? (activeIndex / (availableSections.length - 1)) * 100
    : 0

  if (availableSections.length === 0) return null

  return (
    <nav className={`outcome-progress-nav ${isVisible ? 'visible' : ''}`} aria-label="Page sections">
      {/* Progress line */}
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ height: `${progressPercent}%` }}
        />
      </div>

      {/* Section dots */}
      <div className="progress-dots">
        {availableSections.map((section, index) => (
          <button
            key={section.id}
            className={`progress-dot ${activeSection === section.id ? 'active' : ''} ${index <= activeIndex ? 'completed' : ''}`}
            onClick={() => scrollToSection(section.id)}
            aria-label={`Go to ${section.label}`}
            aria-current={activeSection === section.id ? 'true' : undefined}
          >
            <span className="dot-indicator">
              <i className={`fas ${section.icon}`}></i>
            </span>
            <span className="dot-label">{section.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
