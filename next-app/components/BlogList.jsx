'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogList({
  initialPosts,
  initialHasMore,
  initialTotal,
  categories,
  featuredPosts,
  initialCategory,
  initialSearch,
}) {
  const [posts, setPosts] = useState(initialPosts)
  const [hasMore, setHasMore] = useState(initialHasMore)
  const [total, setTotal] = useState(initialTotal)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)
  const [activeCategory, setActiveCategory] = useState(initialCategory || '')
  const [searchInput, setSearchInput] = useState(initialSearch || '')
  const [searchQuery, setSearchQuery] = useState(initialSearch || '')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const sentinelRef = useRef(null)
  const debounceTimer = useRef(null)
  const dropdownRef = useRef(null)
  const router = useRouter()
  const isFirstRender = useRef(true)

  // Featured post slugs to exclude from main grid
  const featuredSlugs = new Set((featuredPosts || []).map(p => p.slug))

  // Debounced search
  const handleSearchInput = useCallback((value) => {
    setSearchInput(value)
    if (debounceTimer.current) clearTimeout(debounceTimer.current)
    debounceTimer.current = setTimeout(() => {
      setSearchQuery(value)
    }, 300)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Fetch posts from API
  const fetchPosts = useCallback(async (pageNum, category, search, append = false) => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      params.set('page', pageNum.toString())
      params.set('limit', '12')
      if (category) params.set('category', category)
      if (search) params.set('search', search)

      const res = await fetch(`/api/blog/posts?${params}`)
      const data = await res.json()

      if (append) {
        setPosts(prev => [...prev, ...data.posts])
      } else {
        setPosts(data.posts)
      }
      setHasMore(data.hasMore)
      setTotal(data.total)
      setPage(pageNum)
    } catch (err) {
      console.error('Failed to fetch posts:', err)
    }
    setLoading(false)
  }, [])

  // Handle filter/search changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    setInitialLoad(false)
    fetchPosts(1, activeCategory, searchQuery, false)

    // Update URL
    const urlParams = new URLSearchParams()
    if (activeCategory) urlParams.set('category', activeCategory)
    if (searchQuery) urlParams.set('search', searchQuery)
    const query = urlParams.toString()
    router.push(`/blog${query ? '?' + query : ''}`, { scroll: false })
  }, [activeCategory, searchQuery, fetchPosts, router])

  // Load more (infinite scroll)
  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return
    await fetchPosts(page + 1, activeCategory, searchQuery, true)
  }, [loading, hasMore, page, activeCategory, searchQuery, fetchPosts])

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [hasMore, loading, loadMore])

  // Handle category select
  const handleCategorySelect = (categoryName) => {
    setActiveCategory(categoryName)
    setDropdownOpen(false)
  }

  // Reset all filters
  const resetFilters = () => {
    setSearchInput('')
    setSearchQuery('')
    setActiveCategory('')
  }

  const isFiltered = activeCategory || searchQuery
  const showFeatured = !isFiltered && initialLoad && featuredPosts && featuredPosts.length > 0

  // Filter featured posts out of main grid when showing featured section
  const gridPosts = showFeatured
    ? posts.filter(p => !featuredSlugs.has(p.slug))
    : posts

  return (
    <>
      {/* Featured Articles */}
      {showFeatured && (
        <div className="blog-featured-section">
          <h2 className="blog-featured-heading">Latest Articles</h2>
          <div className="blog-featured-grid">
            {/* Primary featured post */}
            <article className="blog-featured-primary">
              <Link href={`/blog/${featuredPosts[0].slug}`} className="blog-featured-primary-link">
                {featuredPosts[0].featuredImage && (
                  <div className="blog-featured-primary-image">
                    <Image
                      src={featuredPosts[0].featuredImage}
                      alt={featuredPosts[0].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      style={{ objectFit: 'cover' }}
                      priority
                      quality={80}
                    />
                  </div>
                )}
                <div className="blog-featured-primary-content">
                  {featuredPosts[0].categories && featuredPosts[0].categories.length > 0 && (
                    <span className="blog-featured-tag">{featuredPosts[0].categories[0]}</span>
                  )}
                  <h3 className="blog-featured-primary-title">{featuredPosts[0].title}</h3>
                  {featuredPosts[0].excerpt && (
                    <p className="blog-featured-primary-excerpt">{featuredPosts[0].excerpt}</p>
                  )}
                  <div className="blog-card-meta">
                    {featuredPosts[0].date && (
                      <span className="blog-card-date">{formatDate(featuredPosts[0].date)}</span>
                    )}
                    {featuredPosts[0].readingTime && (
                      <span className="blog-card-reading-time">{featuredPosts[0].readingTime}</span>
                    )}
                  </div>
                </div>
              </Link>
            </article>

            {/* Secondary featured posts */}
            <div className="blog-featured-secondary">
              {featuredPosts.slice(1, 3).map(post => (
                <article key={post.slug} className="blog-featured-secondary-card">
                  <Link href={`/blog/${post.slug}`} className="blog-featured-secondary-link">
                    {post.featuredImage && (
                      <div className="blog-featured-secondary-image">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          style={{ objectFit: 'cover' }}
                          loading="eager"
                          quality={75}
                        />
                      </div>
                    )}
                    <div className="blog-featured-secondary-content">
                      {post.categories && post.categories.length > 0 && (
                        <span className="blog-featured-tag">{post.categories[0]}</span>
                      )}
                      <h3 className="blog-featured-secondary-title">{post.title}</h3>
                      <div className="blog-card-meta">
                        {post.date && (
                          <span className="blog-card-date">{formatDate(post.date)}</span>
                        )}
                        {post.readingTime && (
                          <span className="blog-card-reading-time">{post.readingTime}</span>
                        )}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Divider between featured and browse */}
      {showFeatured && (
        <div className="blog-browse-divider">
          <h2 className="blog-browse-heading">Browse All Articles</h2>
        </div>
      )}

      {/* Controls Bar: Search + Category Dropdown */}
      <div className="blog-controls">
        <div className="blog-search-bar">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchInput}
            onChange={(e) => handleSearchInput(e.target.value)}
          />
          {searchInput && (
            <button
              className="blog-search-clear"
              onClick={() => { setSearchInput(''); setSearchQuery('') }}
              aria-label="Clear search"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>

        <div className="blog-category-dropdown" ref={dropdownRef}>
          <button
            className={`blog-dropdown-trigger ${activeCategory ? 'has-value' : ''}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
          >
            <span>{activeCategory || 'All Topics'}</span>
            <i className={`fas fa-chevron-down blog-dropdown-chevron ${dropdownOpen ? 'open' : ''}`}></i>
          </button>
          {dropdownOpen && (
            <div className="blog-dropdown-menu">
              <button
                className={`blog-dropdown-item ${!activeCategory ? 'active' : ''}`}
                onClick={() => handleCategorySelect('')}
              >
                All Topics
                <span className="blog-dropdown-count">{initialTotal}</span>
              </button>
              {categories.map(({ name, count }) => (
                <button
                  key={name}
                  className={`blog-dropdown-item ${activeCategory === name ? 'active' : ''}`}
                  onClick={() => handleCategorySelect(name)}
                >
                  {name}
                  <span className="blog-dropdown-count">{count}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {isFiltered && (
          <button className="blog-clear-filters" onClick={resetFilters}>
            <i className="fas fa-times"></i> Clear filters
          </button>
        )}
      </div>

      {/* Results Count */}
      <div className="blog-results-count">
        Showing <strong>{posts.length}</strong> of {total} articles
        {activeCategory && <span className="blog-active-filter"> in {activeCategory}</span>}
        {searchQuery && <span className="blog-active-filter"> matching &ldquo;{searchQuery}&rdquo;</span>}
      </div>

      {/* Post Grid */}
      {posts.length === 0 && !loading ? (
        <div className="blog-empty-state">
          <i className="fas fa-search"></i>
          <h3>No articles found</h3>
          <p>Try adjusting your search or category filter</p>
          <button className="blog-reset-btn" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="blog-grid">
          {gridPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link href={`/blog/${post.slug}`} className="blog-card-link">
                {post.featuredImage && (
                  <div className="blog-card-image">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      loading="eager"
                      quality={75}
                    />
                  </div>
                )}
                <div className="blog-card-content">
                  {post.categories && post.categories.length > 0 && (
                    <div className="blog-card-categories">
                      {post.categories.slice(0, 2).map(cat => (
                        <span key={cat} className="blog-card-category">{cat}</span>
                      ))}
                    </div>
                  )}
                  <h2 className="blog-card-title">{post.title}</h2>
                  {post.excerpt && (
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                  )}
                  <div className="blog-card-meta">
                    {post.date && (
                      <span className="blog-card-date">{formatDate(post.date)}</span>
                    )}
                    {post.readingTime && (
                      <span className="blog-card-reading-time">{post.readingTime}</span>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}

      {/* Loading Skeleton */}
      {loading && (
        <div className="blog-loading-grid">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="blog-skeleton-card">
              <div className="blog-skeleton-image" />
              <div className="blog-skeleton-content">
                <div className="blog-skeleton-category" />
                <div className="blog-skeleton-title" />
                <div className="blog-skeleton-excerpt" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Infinite Scroll Sentinel */}
      {hasMore && !loading && (
        <div ref={sentinelRef} className="blog-scroll-sentinel" aria-hidden="true" />
      )}

      {/* End of Results */}
      {!hasMore && posts.length > 0 && !loading && (
        <div className="blog-end-of-results">
          <p>You&apos;ve reached the end &mdash; {total} articles loaded.</p>
        </div>
      )}
    </>
  )
}
