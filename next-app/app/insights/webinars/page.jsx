'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { webinars, getCategories, getFeaturedWebinars } from '@/data/webinars'
import './webinars.css'

export default function WebinarsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = useMemo(() => ['All', ...getCategories()], [])
  const featuredWebinars = useMemo(() => getFeaturedWebinars(), [])

  const filteredWebinars = useMemo(() => {
    let filtered = webinars

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(w => w.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(w =>
        w.title.toLowerCase().includes(query) ||
        w.description.toLowerCase().includes(query) ||
        w.topics.some(t => t.toLowerCase().includes(query)) ||
        w.presenters.some(p => p.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [activeCategory, searchQuery])

  return (
    <main className="webinars-page">
      {/* Hero Section */}
      <section className="webinars-hero">
        <div className="webinars-hero-content">
          <span className="webinars-tag">On-Demand Learning</span>
          <h1 className="webinars-title">
            Webinar <span className="highlight">Library</span>
          </h1>
          <p className="webinars-subtitle">
            Expert-led sessions on enterprise transformation, leadership, and organizational agility.
            Watch anytime and accelerate your journey to better business outcomes.
          </p>
          <div className="webinars-stats">
            <div className="stat">
              <span className="stat-number">{webinars.length}</span>
              <span className="stat-label">Webinars</span>
            </div>
            <div className="stat">
              <span className="stat-number">{categories.length - 1}</span>
              <span className="stat-label">Topics</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Hours of Content</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Webinars */}
      <section className="featured-section">
        <div className="featured-header">
          <h2 className="section-heading">Featured <span className="highlight">Webinars</span></h2>
          <p className="section-description">Our most popular and impactful sessions</p>
        </div>
        <div className="featured-grid">
          {featuredWebinars.slice(0, 3).map((webinar) => (
            <Link
              href={`/insights/webinars/${webinar.slug}`}
              key={webinar.id}
              className="featured-card"
            >
              <div className="featured-card-image">
                <Image
                  src={webinar.thumbnail}
                  alt={webinar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                {webinar.youtubeId && (
                  <div className="play-indicator">
                    <i className="fas fa-play"></i>
                  </div>
                )}
                <span className="featured-badge">Featured</span>
              </div>
              <div className="featured-card-content">
                <span className="webinar-category">{webinar.category}</span>
                <h3 className="webinar-title">{webinar.title}</h3>
                <p className="webinar-description">{webinar.description}</p>
                <div className="webinar-meta">
                  <span className="presenter">
                    <i className="fas fa-user"></i>
                    {webinar.presenters.slice(0, 2).join(', ')}
                    {webinar.presenters.length > 2 && ` +${webinar.presenters.length - 2}`}
                  </span>
                  <span className="duration">
                    <i className="fas fa-clock"></i>
                    {webinar.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Webinars */}
      <section className="all-webinars-section">
        <div className="section-controls">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search webinars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="clear-search"
                onClick={() => setSearchQuery('')}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="webinars-count">
          Showing <strong>{filteredWebinars.length}</strong> of {webinars.length} webinars
          {activeCategory !== 'All' && <span className="active-filter"> in {activeCategory}</span>}
        </div>

        <div className="webinars-grid">
          {filteredWebinars.map((webinar) => (
            <Link
              href={`/insights/webinars/${webinar.slug}`}
              key={webinar.id}
              className="webinar-card"
            >
              <div className="webinar-card-image">
                <Image
                  src={webinar.thumbnail}
                  alt={webinar.title}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
                {webinar.youtubeId && (
                  <div className="play-indicator small">
                    <i className="fas fa-play"></i>
                  </div>
                )}
              </div>
              <div className="webinar-card-content">
                <span className="webinar-category">{webinar.category}</span>
                <h3 className="webinar-title">{webinar.title}</h3>
                <div className="webinar-meta">
                  <span className="presenter">
                    <i className="fas fa-user"></i>
                    {webinar.presenters[0]}
                    {webinar.presenters.length > 1 && ` +${webinar.presenters.length - 1}`}
                  </span>
                  <span className="duration">
                    <i className="fas fa-clock"></i>
                    {webinar.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredWebinars.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No webinars found</h3>
            <p>Try adjusting your search or filters</p>
            <button
              className="reset-btn"
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('All')
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="webinar-cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Organization?</h2>
          <p>
            Our webinars are just the beginning. Work with our experienced coaches
            to create lasting change and achieve measurable business outcomes.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/path-to-agility" className="btn-secondary">
              Explore Path to Agility
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
