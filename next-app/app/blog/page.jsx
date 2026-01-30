import { getFilteredPaginatedPosts, getCategoriesWithCounts, getFeaturedPosts } from '@/lib/blog'
import BlogList from '@/components/BlogList'

export const metadata = {
  title: 'Blog',
  description: 'Insights, strategies, and expertise on enterprise transformation, SAFe implementation, and organizational change from the Agile Velocity team.',
}

export default function BlogPage({ searchParams }) {
  const initialCategory = searchParams?.category || ''
  const initialSearch = searchParams?.search || ''

  const featuredPosts = getFeaturedPosts(3)

  const initialData = getFilteredPaginatedPosts({
    page: 1,
    limit: 12,
    search: initialSearch,
    category: initialCategory,
  })

  const categories = getCategoriesWithCounts()

  return (
    <>
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <span className="section-tag">Insights</span>
          <h1 className="blog-hero-title">
            THE <span className="highlight">BLOG</span>
          </h1>
          <p className="blog-hero-subtitle">
            Expert perspectives on enterprise transformation, organizational change, and the Path to Agility framework.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-section">
        <div className="blog-container">
          <BlogList
            initialPosts={initialData.posts}
            initialHasMore={initialData.hasMore}
            initialTotal={initialData.total}
            categories={categories}
            featuredPosts={featuredPosts}
            initialCategory={initialCategory}
            initialSearch={initialSearch}
          />
        </div>
      </section>
    </>
  )
}
