'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { publicWorkshops, getCourseById } from '@/data/courses'

// Featured coaches for workshops
const featuredCoaches = [
  {
    name: 'Eric Cussen',
    title: 'Partner, Chief Transformation Officer',
    image: '/images/team/eric-cussen.png',
    bio: 'Enterprise transformation leader with 20+ years experience guiding Fortune 500 companies through Agile adoption.'
  },
  {
    name: 'David Pointer',
    title: 'Agile Transformation Coach',
    image: '/images/team/david-pointer.png',
    bio: 'Certified Scrum Trainer and SAFe Program Consultant with deep expertise in scaling Agile practices.'
  },
  {
    name: 'Bhavani Krishnan',
    title: 'Agile Transformation Coach',
    image: '/images/team/bhavani-krishnan.png',
    bio: 'Passionate about empowering teams to achieve sustainable agility through coaching and training.'
  }
]

// Testimonials
const testimonials = [
  {
    quote: "The hands-on exercises after each module really reinforce the materials learned. I left feeling confident to apply these practices immediately.",
    author: "Workshop Participant",
    company: "Enterprise Client"
  },
  {
    quote: "The lecture was done in an exceptionally informative and engaging way. The instructor's real-world experience made all the difference.",
    author: "CSM Graduate",
    company: "Technology Company"
  },
  {
    quote: "Bravo on addressing the core principles of Agile to an audience with different levels of experience. Everyone learned something valuable.",
    author: "Team Lead",
    company: "Financial Services"
  }
]

// Filter categories for workshops
const workshopFilters = [
  { id: 'all', label: 'All Workshops', icon: 'fas fa-th' },
  { id: 'scrum', label: 'Scrum', icon: 'fas fa-sync-alt' },
  { id: 'leadership', label: 'Leadership', icon: 'fas fa-user-tie' },
  { id: 'specialized', label: 'Path to Agility®', icon: 'fas fa-route' },
]

export default function PublicWorkshops() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Get all workshops with course data
  const workshopsWithCourses = publicWorkshops
    .map(workshop => ({
      ...workshop,
      course: getCourseById(workshop.courseId),
    }))
    .filter(w => w.dates.length > 0)

  // Flatten to individual date entries for display
  const allWorkshopDates = workshopsWithCourses
    .flatMap(workshop =>
      workshop.dates.map(date => ({
        ...workshop,
        date
      }))
    )

  // Filter workshops based on active filter
  const filteredWorkshops = activeFilter === 'all'
    ? allWorkshopDates
    : allWorkshopDates.filter(w => w.course?.category === activeFilter)

  // Group by month (using the month field directly)
  const workshopsByMonth = filteredWorkshops.reduce((acc, workshop) => {
    const monthKey = workshop.date.month + ' 2025'
    if (!acc[monthKey]) acc[monthKey] = []
    acc[monthKey].push(workshop)
    return acc
  }, {})

  // Get counts per filter
  const getFilterCount = (filterId) => {
    if (filterId === 'all') return allWorkshopDates.length
    return allWorkshopDates.filter(w => w.course?.category === filterId).length
  }

  return (
    <>
      {/* Hero Section */}
      <section className="workshops-hero">
        <div className="workshops-hero-inner">
          <span className="section-tag">Instructor-Led Certification</span>
          <h1 className="workshops-hero-title">
            Public <span className="highlight">Workshops</span>
          </h1>
          <p className="workshops-hero-sub">
            These aren&apos;t lectures. They&apos;re hands-on workshops where you practice, collaborate,
            and leave with skills you can apply immediately. Plus earn your certification.
          </p>
          <div className="workshops-hero-actions">
            <a href="#schedule" className="btn-primary">
              View Upcoming Workshops
            </a>
            <Link href="/training/for-organizations" className="btn-ghost">
              Need Private Training?
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Workshops */}
      <section className="workshops-features">
        <div className="workshops-features-inner">
          <div className="workshops-feature">
            <div className="workshops-feature-icon">
              <i className="fas fa-user-graduate"></i>
            </div>
            <h3>Role-Focused Curriculum</h3>
            <p>Workshops tailored for ScrumMasters, Product Owners, Leaders, and Practitioners with role-specific exercises and scenarios.</p>
          </div>
          <div className="workshops-feature">
            <div className="workshops-feature-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>Certified Expert Instructors</h3>
            <p>Learn from coaches accredited by Scrum Alliance, SAFe®, and Kanban University with real-world transformation experience.</p>
          </div>
          <div className="workshops-feature">
            <div className="workshops-feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Interactive Live Sessions</h3>
            <p>Hands-on exercises and small-group discussions in a virtual classroom setting, not pre-recorded videos.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="workshops-how">
        <div className="workshops-how-inner">
          <div className="workshops-how-steps">
            <div className="workshops-how-step">
              <div className="workshops-how-num">1</div>
              <h3>Select Your Workshop</h3>
              <p>Choose the certification that fits your goals</p>
            </div>
            <div className="workshops-how-connector"></div>
            <div className="workshops-how-step">
              <div className="workshops-how-num">2</div>
              <h3>Register Online</h3>
              <p>Secure your seat via Eventbrite</p>
            </div>
            <div className="workshops-how-connector"></div>
            <div className="workshops-how-step">
              <div className="workshops-how-num">3</div>
              <h3>Join &amp; Apply</h3>
              <p>Attend live and earn your credential</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Schedule */}
      <section id="schedule" className="workshops-schedule">
        <div className="workshops-schedule-inner">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">Upcoming <span className="highlight">Workshops</span></h2>
            <p className="section-subtitle">Register for an upcoming session to earn your certification</p>
          </div>

          {/* Filters */}
          <div className="workshops-filters">
            {workshopFilters.map(filter => (
              <button
                key={filter.id}
                className={`workshops-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <i className={filter.icon}></i>
                {filter.label}
                <span className="workshops-filter-count">{getFilterCount(filter.id)}</span>
              </button>
            ))}
          </div>

          {Object.keys(workshopsByMonth).length > 0 ? (
            <div className="workshops-calendar">
              {Object.entries(workshopsByMonth).map(([month, workshops]) => (
                <div key={month} className="workshops-month">
                  <h3 className="workshops-month-title">{month}</h3>
                  <div className="workshops-month-list">
                    {workshops.map((workshop, idx) => (
                      <div key={idx} className="workshop-item">
                        <div className="workshop-item-date">
                          <span className="workshop-item-day">
                            {workshop.date.day}
                          </span>
                          <span className="workshop-item-month">
                            {workshop.date.month}
                          </span>
                        </div>
                        <div className="workshop-item-content">
                          <h4>{workshop.course?.title}</h4>
                          <div className="workshop-item-meta">
                            <span className="workshop-item-dates">
                              <i className="fas fa-calendar"></i>
                              {workshop.date.dateRange}
                            </span>
                            <span className="workshop-item-time">
                              <i className="fas fa-clock"></i>
                              {workshop.date.time}
                            </span>
                            <span className="workshop-item-format">
                              <i className="fas fa-video"></i>
                              Virtual (Live)
                            </span>
                          </div>
                          {workshop.course?.certification?.credential && (
                            <p className="workshop-item-cert">
                              <i className="fas fa-certificate"></i>
                              {workshop.course.certification.credential} certification included
                            </p>
                          )}
                        </div>
                        <div className="workshop-item-action">
                          {workshop.price && (
                            <span className="workshop-item-price">
                              ${workshop.price.toLocaleString()}
                            </span>
                          )}
                          <a
                            href={workshop.date.eventbriteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary btn-sm"
                          >
                            Register <i className="fas fa-external-link-alt"></i>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="workshops-empty">
              <i className="fas fa-calendar-xmark"></i>
              <h3>No Workshops Currently Scheduled</h3>
              <p>Check back soon for upcoming workshop dates, or consider private training for your team.</p>
              <Link href="/training/for-organizations" className="btn-ghost">
                Explore Private Training
              </Link>
            </div>
          )}

          {/* SAFe Notice */}
          <div className="workshops-safe-notice">
            <div className="workshops-safe-notice-content">
              <i className="fas fa-info-circle"></i>
              <div>
                <h4>Looking for SAFe® Workshops?</h4>
                <p>There are currently no SAFe® workshops scheduled. Contact us for private SAFe® training options or to be notified when public sessions are available.</p>
              </div>
              <Link href="/contact" className="btn-ghost btn-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="workshops-included">
        <div className="workshops-included-inner">
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 className="section-title">What&apos;s <span className="highlight">Included</span></h2>
          </div>
          <div className="workshops-included-grid">
            <div className="workshops-included-item">
              <i className="fas fa-certificate"></i>
              <h3>Official Certification</h3>
              <p>Earn your credential from Scrum Alliance, SAFe®, or industry-recognized certifying bodies</p>
            </div>
            <div className="workshops-included-item">
              <i className="fas fa-book"></i>
              <h3>Course Materials</h3>
              <p>Digital workbook, templates, and reference guides you can use immediately</p>
            </div>
            <div className="workshops-included-item">
              <i className="fas fa-id-card"></i>
              <h3>Membership &amp; SEUs</h3>
              <p>Includes membership and Scrum Education Units (SEUs) or PDUs for continuing education</p>
            </div>
            <div className="workshops-included-item">
              <i className="fas fa-headset"></i>
              <h3>Post-Training Support</h3>
              <p>Access to follow-up Q&amp;A sessions and community resources after your workshop</p>
            </div>
            <div className="workshops-included-item">
              <i className="fas fa-percent"></i>
              <h3>Alumni Discount</h3>
              <p>10% discount on future Agile Velocity workshops and advanced certifications</p>
            </div>
            <div className="workshops-included-item">
              <i className="fas fa-laptop"></i>
              <h3>Virtual Classroom</h3>
              <p>Interactive online environment with breakout rooms, whiteboards, and collaboration tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coaches */}
      <section className="workshops-coaches">
        <div className="workshops-coaches-inner">
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="section-tag">Meet Your Instructors</span>
            <h2 className="section-title">Learn From <span className="highlight">The Best</span></h2>
            <p className="section-subtitle">Our coaches bring decades of real-world transformation experience to every session</p>
          </div>
          <div className="workshops-coaches-grid">
            {featuredCoaches.map((coach, idx) => (
              <div key={idx} className="workshops-coach-card">
                <div className="workshops-coach-image">
                  <Image src={coach.image} alt={coach.name} width={280} height={280} loading="lazy" />
                </div>
                <div className="workshops-coach-info">
                  <h3>{coach.name}</h3>
                  <span className="workshops-coach-title">{coach.title}</span>
                  <p>{coach.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="workshops-testimonials">
        <div className="workshops-testimonials-inner">
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 className="section-title">What Participants <span className="highlight">Say</span></h2>
          </div>
          <div className="workshops-testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="workshops-testimonial-card">
                <div className="workshops-testimonial-quote">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="workshops-testimonial-text">{testimonial.quote}</p>
                <div className="workshops-testimonial-author">
                  <span className="workshops-testimonial-name">{testimonial.author}</span>
                  <span className="workshops-testimonial-company">{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Training CTA */}
      <section className="workshops-private-cta">
        <div className="workshops-private-cta-inner">
          <div className="workshops-private-cta-content">
            <h2>Need a Different Date or Course?</h2>
            <p>
              Private training for your team can be scheduled on your timeline
              and includes any course from our catalog.
            </p>
          </div>
          <div className="workshops-private-cta-actions">
            <Link href="/training/courses" className="btn-ghost">
              Browse All Courses
            </Link>
            <Link href="/training/for-organizations" className="btn-primary">
              Get Private Training Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="workshops-cta">
        <div className="workshops-cta-inner">
          <h2>Ready to Get Certified?</h2>
          <p>Join thousands of professionals who have earned their Agile certifications with Agile Velocity.</p>
          <a href="#schedule" className="btn-primary btn-lg">
            View Workshop Schedule
          </a>
        </div>
      </section>
    </>
  )
}
