'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { whitePapers, getCategories, getFeaturedWhitePapers } from '@/data/white-papers'
import './white-papers.css'

export default function WhitePapersPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = useMemo(() => ['All', ...getCategories()], [])
  const featuredWhitePapers = useMemo(() => getFeaturedWhitePapers(), [])

  const filteredWhitePapers = useMemo(() => {
    let filtered = whitePapers

    if (activeCategory !== 'All') {
      filtered = filtered.filter(wp => wp.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(wp =>
        wp.title.toLowerCase().includes(query) ||
        wp.description.toLowerCase().includes(query) ||
        wp.topics.some(t => t.toLowerCase().includes(query)) ||
        wp.category.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [activeCategory, searchQuery])

  return (
    <main className="white-papers-page">
      {/* Hero Section */}
      <section className="wp-hero">
        <div className="wp-hero-content">
          <span className="wp-tag">Free Resources</span>
          <h1 className="wp-title">
            White Paper <span className="highlight">Library</span>
          </h1>
          <p className="wp-subtitle">
            In-depth guides on enterprise transformation, leadership, and building
            high-performing teams. Download instantly, no form required.
          </p>
          <div className="wp-stats">
            <div className="stat">
              <span className="stat-number">{whitePapers.length}</span>
              <span className="stat-label">White Papers</span>
            </div>
            <div className="stat">
              <span className="stat-number">{categories.length - 1}</span>
              <span className="stat-label">Topics</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="wp-featured-section">
        <div className="wp-featured-header">
          <h2 className="wp-section-heading">Featured <span className="highlight">White Papers</span></h2>
          <p className="wp-section-description">Our most downloaded and impactful guides</p>
        </div>
        <div className="wp-featured-grid">
          {featuredWhitePapers.slice(0, 3).map((wp) => (
            <Link
              href={`/insights/white-papers/${wp.slug}`}
              key={wp.id}
              className="wp-featured-card"
            >
              <div className="wp-featured-card-image">
                <Image
                  src={wp.thumbnail}
                  alt={wp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="wp-download-indicator">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <span className="wp-featured-badge">Featured</span>
              </div>
              <div className="wp-featured-card-content">
                <span className="wp-category">{wp.category}</span>
                <h3 className="wp-card-title">{wp.title}</h3>
                <p className="wp-card-description">{wp.description}</p>
                <div className="wp-card-meta">
                  <span>
                    <i className="fas fa-user"></i>
                    {wp.author}
                  </span>
                  <span>
                    <i className="fas fa-clock"></i>
                    {wp.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All White Papers */}
      <section className="wp-all-section">
        <div className="wp-section-controls">
          <div className="wp-search-bar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search white papers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="wp-clear-search"
                onClick={() => setSearchQuery('')}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
          <div className="wp-category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`wp-category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="wp-count">
          Showing <strong>{filteredWhitePapers.length}</strong> of {whitePapers.length} white papers
          {activeCategory !== 'All' && <span className="wp-active-filter"> in {activeCategory}</span>}
        </div>

        <div className="wp-grid">
          {filteredWhitePapers.map((wp) => (
            <Link
              href={`/insights/white-papers/${wp.slug}`}
              key={wp.id}
              className="wp-card"
            >
              <div className="wp-card-image">
                <Image
                  src={wp.thumbnail}
                  alt={wp.title}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="wp-download-indicator small">
                  <i className="fas fa-file-pdf"></i>
                </div>
              </div>
              <div className="wp-card-content">
                <span className="wp-category">{wp.category}</span>
                <h3 className="wp-card-title">{wp.title}</h3>
                <div className="wp-card-meta">
                  <span>
                    <i className="fas fa-user"></i>
                    {wp.author}
                  </span>
                  <span>
                    <i className="fas fa-clock"></i>
                    {wp.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredWhitePapers.length === 0 && (
          <div className="wp-no-results">
            <i className="fas fa-search"></i>
            <h3>No white papers found</h3>
            <p>Try adjusting your search or filters</p>
            <button
              className="wp-reset-btn"
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
      <section className="wp-cta-section">
        <div className="wp-cta-content">
          <h2>Ready to Transform Your Organization?</h2>
          <p>
            Our white papers cover the theory. Our coaches help you put it into
            practice with measurable business outcomes.
          </p>
          <div className="wp-cta-buttons">
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
