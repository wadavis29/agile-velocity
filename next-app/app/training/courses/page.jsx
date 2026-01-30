'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { courses, courseCategories } from '@/data/courses'

function CourseCatalogContent() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setActiveCategory(categoryParam)
    }
  }, [searchParams])

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    // Update URL without navigation
    const url = new URL(window.location)
    if (category === 'all') {
      url.searchParams.delete('category')
    } else {
      url.searchParams.set('category', category)
    }
    window.history.pushState({}, '', url)
  }

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory
    const matchesSearch = searchTerm === '' ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.overview.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryLabel = (categoryId) => {
    return courseCategories.find(c => c.id === categoryId)?.label || categoryId
  }

  return (
    <>
      {/* Hero Section */}
      <section className="catalog-hero">
        <div className="catalog-hero-inner">
          <span className="section-tag">Course Catalog</span>
          <h1 className="catalog-hero-title">
            Find Your<br /><span className="highlight">Perfect Course</span>
          </h1>
          <p className="catalog-hero-sub">
            30+ hands-on workshops across Scrum, SAFe®, Leadership, Kanban, and more.
            Interactive sessions where you practice and leave ready to apply what you learn.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="catalog-filters">
        <div className="catalog-filters-inner">
          <div className="catalog-search">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="catalog-search-clear" onClick={() => setSearchTerm('')}>
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
          <div className="catalog-category-filters">
            <button
              className={`catalog-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              All Courses
            </button>
            {courseCategories.map(cat => (
              <button
                key={cat.id}
                className={`catalog-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <i className={cat.icon}></i>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="catalog-courses">
        <div className="catalog-courses-inner">
          <div className="catalog-results-header">
            <span className="catalog-results-count">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
              {activeCategory !== 'all' && ` in ${getCategoryLabel(activeCategory)}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </span>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="catalog-grid">
              {filteredCourses.map(course => (
                <Link key={course.id} href={`/training/courses/${course.slug}`} className="catalog-course-card">
                  {course.popular && <span className="catalog-badge popular">Popular</span>}
                  {course.featured && !course.popular && <span className="catalog-badge featured">Featured</span>}
                  <div className="catalog-course-category">
                    {getCategoryLabel(course.category)}
                  </div>
                  <h3>{course.title}</h3>
                  <p>{course.overview.substring(0, 100)}...</p>
                  <div className="catalog-course-meta">
                    <span>
                      <i className="fas fa-clock"></i>
                      {course.duration}
                    </span>
                    {course.certification?.provider && (
                      <span>
                        <i className="fas fa-certificate"></i>
                        {course.certification.provider}
                      </span>
                    )}
                  </div>
                  <div className="catalog-course-formats">
                    {course.format.map(f => (
                      <span key={f} className="format-tag">
                        {f === 'in-person' && <i className="fas fa-building"></i>}
                        {f === 'virtual' && <i className="fas fa-video"></i>}
                        {f === 'hybrid' && <i className="fas fa-random"></i>}
                        {f}
                      </span>
                    ))}
                  </div>
                  <span className="catalog-course-link">
                    View Details <i className="fas fa-arrow-right"></i>
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="catalog-empty">
              <i className="fas fa-search"></i>
              <h3>No Courses Found</h3>
              <p>Try adjusting your search or filters.</p>
              <button className="btn-ghost" onClick={() => { setSearchTerm(''); handleCategoryChange('all'); }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="catalog-cta">
        <div className="catalog-cta-inner">
          <h2>Not Sure Which Course?</h2>
          <p>Let us recommend the right training based on your team&apos;s goals and experience level.</p>
          <div className="catalog-cta-actions">
            <Link href="/contact" className="btn-primary">
              Get a Recommendation
            </Link>
            <Link href="/training/for-organizations" className="btn-ghost">
              Private Training Options
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default function CourseCatalog() {
  return (
    <Suspense fallback={<div className="loading-placeholder">Loading courses...</div>}>
      <CourseCatalogContent />
    </Suspense>
  )
}
