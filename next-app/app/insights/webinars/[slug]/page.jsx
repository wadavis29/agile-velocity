import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { webinars, getWebinarBySlug, getRelatedWebinars } from '@/data/webinars'
import './webinar-detail.css'

// Generate static params for all webinars
export async function generateStaticParams() {
  return webinars.map((webinar) => ({
    slug: webinar.slug,
  }))
}

// Generate metadata for each webinar
export async function generateMetadata({ params }) {
  const webinar = getWebinarBySlug(params.slug)

  if (!webinar) {
    return {
      title: 'Webinar Not Found',
    }
  }

  return {
    title: `${webinar.title} | Agile Velocity Webinars`,
    description: webinar.description,
    openGraph: {
      title: webinar.title,
      description: webinar.description,
      images: [webinar.thumbnail],
    },
  }
}

export default function WebinarDetailPage({ params }) {
  const webinar = getWebinarBySlug(params.slug)

  if (!webinar) {
    notFound()
  }

  const relatedWebinars = getRelatedWebinars(params.slug, 3)

  return (
    <main className="webinar-detail-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="separator">/</span>
        <Link href="/insights">Insights</Link>
        <span className="separator">/</span>
        <Link href="/insights/webinars">Webinars</Link>
        <span className="separator">/</span>
        <span className="current">{webinar.title}</span>
      </nav>

      {/* Hero Section */}
      <section className="webinar-hero">
        <div className="webinar-hero-content">
          <div className="webinar-info">
            <span className="webinar-category-badge">{webinar.category}</span>
            <h1 className="webinar-detail-title">{webinar.title}</h1>
            <p className="webinar-detail-description">{webinar.description}</p>

            <div className="webinar-detail-meta">
              <div className="meta-item">
                <i className="fas fa-users"></i>
                <div className="meta-content">
                  <span className="meta-label">Presenters</span>
                  <span className="meta-value">
                    {webinar.presenters.map((presenter, index) => (
                      <span key={presenter}>
                        {presenter}
                        {webinar.presenterRoles[index] && (
                          <span className="presenter-role">, {webinar.presenterRoles[index]}</span>
                        )}
                        {index < webinar.presenters.length - 1 && ' • '}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
              <div className="meta-item">
                <i className="fas fa-clock"></i>
                <div className="meta-content">
                  <span className="meta-label">Duration</span>
                  <span className="meta-value">{webinar.duration}</span>
                </div>
              </div>
              <div className="meta-item">
                <i className="fas fa-calendar"></i>
                <div className="meta-content">
                  <span className="meta-label">Published</span>
                  <span className="meta-value">
                    {new Date(webinar.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </div>

            <div className="webinar-topics">
              {webinar.topics.map((topic) => (
                <span key={topic} className="topic-tag">{topic}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          {webinar.youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${webinar.youtubeId}`}
              title={webinar.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : webinar.videoUrl ? (
            <iframe
              src={webinar.videoUrl}
              title={webinar.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="video-placeholder">
              <div className="placeholder-content">
                <Image
                  src={webinar.thumbnail}
                  alt={webinar.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="placeholder-overlay">
                  <i className="fas fa-video"></i>
                  <h3>Video Available on Request</h3>
                  <p>Contact us to access this webinar recording</p>
                  <Link href="/contact" className="request-btn">
                    Request Access
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Key Takeaways / About Section */}
      <section className="content-section">
        <div className="content-grid">
          <div className="main-content">
            <h2 className="content-heading">About This Webinar</h2>
            <p className="content-text">{webinar.description}</p>

            <h3 className="subheading">Topics Covered</h3>
            <ul className="topics-list">
              {webinar.topics.map((topic) => (
                <li key={topic}>
                  <i className="fas fa-check-circle"></i>
                  {topic}
                </li>
              ))}
            </ul>

            {webinar.presenters.length > 0 && (
              <>
                <h3 className="subheading">Meet Your Presenters</h3>
                <div className="presenters-grid">
                  {webinar.presenters.map((presenter, index) => (
                    <div key={presenter} className="presenter-card">
                      <div className="presenter-avatar">
                        <i className="fas fa-user"></i>
                      </div>
                      <div className="presenter-info">
                        <h4 className="presenter-name">{presenter}</h4>
                        {webinar.presenterRoles[index] && (
                          <p className="presenter-title">{webinar.presenterRoles[index]}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="sidebar">
            <div className="sidebar-card">
              <h3>Ready to Transform?</h3>
              <p>
                This webinar is just the beginning. Work with our experienced coaches
                to apply these concepts to your organization.
              </p>
              <Link href="/contact" className="sidebar-cta">
                Schedule a Consultation
              </Link>
            </div>

            <div className="sidebar-card">
              <h3>Related Resources</h3>
              <ul className="resource-links">
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
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Webinars */}
      {relatedWebinars.length > 0 && (
        <section className="related-section">
          <h2 className="related-heading">
            More <span className="highlight">{webinar.category}</span> Webinars
          </h2>
          <div className="related-grid">
            {relatedWebinars.map((related) => (
              <Link
                href={`/insights/webinars/${related.slug}`}
                key={related.id}
                className="related-card"
              >
                <div className="related-card-image">
                  <Image
                    src={related.thumbnail}
                    alt={related.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  {related.youtubeId && (
                    <div className="play-indicator">
                      <i className="fas fa-play"></i>
                    </div>
                  )}
                </div>
                <div className="related-card-content">
                  <h3 className="related-title">{related.title}</h3>
                  <div className="related-meta">
                    <span>{related.presenters[0]}</span>
                    <span>{related.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="related-cta">
            <Link href="/insights/webinars" className="view-all-btn">
              View All Webinars
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="detail-cta-section">
        <div className="cta-inner">
          <h2>Get Personalized Guidance</h2>
          <p>
            Our coaches can help you apply the concepts from this webinar
            to your specific organizational challenges.
          </p>
          <Link href="/contact" className="cta-button">
            Start the Conversation
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
