import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { whitePapers, getWhitePaperBySlug, getRelatedWhitePapers } from '@/data/white-papers'
import { getWebinarBySlug } from '@/data/webinars'
import './white-paper-detail.css'

export async function generateStaticParams() {
  return whitePapers.map((wp) => ({
    slug: wp.slug,
  }))
}

export async function generateMetadata({ params }) {
  const wp = getWhitePaperBySlug(params.slug)

  if (!wp) {
    return {
      title: 'White Paper Not Found',
    }
  }

  return {
    title: `${wp.title} | Agile Velocity White Papers`,
    description: wp.description,
    openGraph: {
      title: wp.title,
      description: wp.description,
      images: [wp.thumbnail],
    },
  }
}

export default function WhitePaperDetailPage({ params }) {
  const wp = getWhitePaperBySlug(params.slug)

  if (!wp) {
    notFound()
  }

  const relatedPapers = getRelatedWhitePapers(params.slug, 3)
  const relatedWebinar = wp.relatedWebinarSlug
    ? getWebinarBySlug(wp.relatedWebinarSlug)
    : null

  return (
    <main className="wp-detail-page">
      {/* Breadcrumb */}
      <nav className="wp-breadcrumb">
        <Link href="/">Home</Link>
        <span className="separator">/</span>
        <Link href="/insights">Insights</Link>
        <span className="separator">/</span>
        <Link href="/insights/white-papers">White Papers</Link>
        <span className="separator">/</span>
        <span className="current">{wp.title}</span>
      </nav>

      {/* Hero Section */}
      <section className="wp-detail-hero">
        <div className="wp-detail-hero-content">
          <span className="wp-category-badge">{wp.category}</span>
          <h1 className="wp-detail-title">{wp.title}</h1>
          <p className="wp-detail-description">{wp.description}</p>

          <div className="wp-detail-meta">
            <div className="wp-meta-item">
              <i className="fas fa-user"></i>
              <div className="wp-meta-content">
                <span className="wp-meta-label">Author</span>
                <span className="wp-meta-value">
                  {wp.author}
                  <span className="wp-meta-role">, {wp.authorRole}</span>
                </span>
              </div>
            </div>
            <div className="wp-meta-item">
              <i className="fas fa-clock"></i>
              <div className="wp-meta-content">
                <span className="wp-meta-label">Read Time</span>
                <span className="wp-meta-value">{wp.readTime}</span>
              </div>
            </div>
            <div className="wp-meta-item">
              <i className="fas fa-file-alt"></i>
              <div className="wp-meta-content">
                <span className="wp-meta-label">Pages</span>
                <span className="wp-meta-value">{wp.pageCount}</span>
              </div>
            </div>
            <div className="wp-meta-item">
              <i className="fas fa-calendar"></i>
              <div className="wp-meta-content">
                <span className="wp-meta-label">Published</span>
                <span className="wp-meta-value">
                  {new Date(wp.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="wp-topics">
            {wp.topics.map((topic) => (
              <span key={topic} className="wp-topic-tag">{topic}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="wp-download-section">
        <div className="wp-download-container">
          <div className="wp-download-preview">
            <Image
              src={wp.thumbnail}
              alt={wp.title}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="wp-download-overlay">
              <i className="fas fa-file-pdf"></i>
              <h3>Download This White Paper</h3>
              <p>No form required. Instant PDF access.</p>
              <a
                href={wp.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wp-download-btn"
              >
                <i className="fas fa-download"></i>
                Download PDF ({wp.pageCount} pages)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="wp-content-section">
        <div className="wp-content-grid">
          <div className="wp-main-content">
            <h2 className="wp-content-heading">Overview</h2>
            {wp.overview.split('\n\n').map((para, idx) => (
              <p key={idx} className="wp-content-text">{para}</p>
            ))}

            <h3 className="wp-subheading">Key Takeaways</h3>
            <ul className="wp-takeaways-list">
              {wp.keyTakeaways.map((takeaway, idx) => (
                <li key={idx}>
                  <i className="fas fa-check-circle"></i>
                  {takeaway}
                </li>
              ))}
            </ul>

            {wp.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="wp-subheading">{section.title}</h3>
                <div className="wp-section-body">
                  {section.content.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx} className="wp-content-text">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="wp-sidebar">
            {/* Download CTA */}
            <div className="wp-sidebar-card wp-sidebar-download">
              <div className="wp-sidebar-icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <h3>Get the Full White Paper</h3>
              <p>Download the complete {wp.pageCount}-page guide as a PDF.</p>
              <a
                href={wp.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wp-sidebar-cta"
              >
                <i className="fas fa-download"></i> Download PDF
              </a>
            </div>

            {/* Consultation CTA */}
            <div className="wp-sidebar-card">
              <h3>Ready to Transform?</h3>
              <p>{wp.ctaText}</p>
              <Link href="/contact" className="wp-sidebar-cta">
                Schedule a Consultation
              </Link>
            </div>

            {/* Related Webinar */}
            {relatedWebinar && (
              <div className="wp-sidebar-card">
                <h3>Related Webinar</h3>
                <Link
                  href={`/insights/webinars/${relatedWebinar.slug}`}
                  className="wp-related-webinar-link"
                >
                  <i className="fas fa-play-circle"></i>
                  <div>
                    <span className="wp-webinar-title">{relatedWebinar.title}</span>
                    <span className="wp-webinar-meta">{relatedWebinar.duration}</span>
                  </div>
                </Link>
              </div>
            )}

            {/* Related Resources */}
            <div className="wp-sidebar-card">
              <h3>Related Resources</h3>
              <ul className="wp-resource-links">
                <li>
                  <Link href="/path-to-agility">
                    <i className="fas fa-route"></i>
                    Path to Agility Framework
                  </Link>
                </li>
                <li>
                  <Link href="/training">
                    <i className="fas fa-graduation-cap"></i>
                    Training Courses
                  </Link>
                </li>
                <li>
                  <Link href="/insights/case-studies">
                    <i className="fas fa-briefcase"></i>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/insights/webinars">
                    <i className="fas fa-video"></i>
                    Webinar Library
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Related White Papers */}
      {relatedPapers.length > 0 && (
        <section className="wp-related-section">
          <h2 className="wp-related-heading">
            More <span className="highlight">{wp.category}</span> White Papers
          </h2>
          <div className="wp-related-grid">
            {relatedPapers.map((related) => (
              <Link
                href={`/insights/white-papers/${related.slug}`}
                key={related.id}
                className="wp-related-card"
              >
                <div className="wp-related-card-image">
                  <Image
                    src={related.thumbnail}
                    alt={related.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="wp-download-indicator">
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </div>
                <div className="wp-related-card-content">
                  <h3 className="wp-related-title">{related.title}</h3>
                  <div className="wp-related-meta">
                    <span>{related.author}</span>
                    <span>{related.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="wp-related-cta">
            <Link href="/insights/white-papers" className="wp-view-all-btn">
              View All White Papers
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="wp-detail-cta-section">
        <div className="wp-cta-inner">
          <h2>Put These Ideas Into Practice</h2>
          <p>
            Our coaches help you apply the strategies from this white paper
            to your specific organizational challenges, with measurable results.
          </p>
          <Link href="/contact" className="wp-cta-button">
            Start the Conversation
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
