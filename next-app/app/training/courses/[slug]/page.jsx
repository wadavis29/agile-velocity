import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCourseBySlug, getRelatedCourses, courseCategories, publicWorkshops, courses } from '@/data/courses'

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export async function generateMetadata({ params }) {
  const course = getCourseBySlug(params.slug)
  if (!course) return { title: 'Course Not Found' }

  return {
    title: `${course.title} | Agile Velocity Training`,
    description: course.overview,
  }
}

export default function CourseDetail({ params }) {
  const course = getCourseBySlug(params.slug)

  if (!course) {
    notFound()
  }

  const relatedCourses = getRelatedCourses(course.id)
  const categoryInfo = courseCategories.find(c => c.id === course.category)

  // Check for upcoming public workshops for this course
  const today = new Date().toISOString().split('T')[0]
  const workshopData = publicWorkshops.find(w => w.courseId === course.id)
  const upcomingDates = workshopData?.dates.filter(d => d.start >= today) || []

  return (
    <>
      {/* Hero Section */}
      <section className="course-detail-hero">
        <div className="course-detail-hero-inner">
          <div className="course-detail-breadcrumb">
            <Link href="/training">Training</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href="/training/courses">Courses</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href={`/training/courses?category=${course.category}`}>{categoryInfo?.label}</Link>
          </div>

          <div className="course-detail-hero-content">
            <div className="course-detail-hero-main">
              {course.popular && <span className="course-detail-badge">Popular Course</span>}
              <h1 className="course-detail-title">{course.title}</h1>
              <p className="course-detail-overview">{course.overview}</p>

              <div className="course-detail-meta">
                <div className="course-detail-meta-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <span className="meta-label">Duration</span>
                    <span className="meta-value">{course.duration}</span>
                  </div>
                </div>
                {course.certification?.provider && (
                  <div className="course-detail-meta-item">
                    <i className="fas fa-certificate"></i>
                    <div>
                      <span className="meta-label">Certification</span>
                      <span className="meta-value">{course.certification.provider}</span>
                    </div>
                  </div>
                )}
                <div className="course-detail-meta-item">
                  <i className="fas fa-laptop-house"></i>
                  <div>
                    <span className="meta-label">Format</span>
                    <span className="meta-value">{course.format.join(', ')}</span>
                  </div>
                </div>
              </div>

              <div className="course-detail-actions">
                <Link href="/contact" className="btn-primary btn-large">
                  Schedule Private Training
                </Link>
                {upcomingDates.length > 0 && (
                  <a href="#public-dates" className="btn-ghost">
                    View Public Dates <i className="fas fa-calendar"></i>
                  </a>
                )}
              </div>
            </div>

            {course.certification && (
              <div className="course-detail-hero-sidebar">
                <div className="course-detail-cert-card">
                  <h3>
                    <i className="fas fa-award"></i>
                    {course.certification.credential || 'Certification'}
                  </h3>
                  {course.certification.includes && (
                    <ul>
                      {course.certification.includes.map((item, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {course.certification.examDetails && (
                    <p className="cert-exam-info">
                      <i className="fas fa-file-alt"></i>
                      Exam: {course.certification.examDetails}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      {course.learningOutcomes?.length > 0 && (
        <section className="course-detail-outcomes">
          <div className="course-detail-outcomes-inner">
            <h2>
              <i className="fas fa-graduation-cap"></i>
              What You&apos;ll Learn
            </h2>
            <div className="course-detail-outcomes-grid">
              {course.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="course-outcome-item">
                  <span className="outcome-num">{idx + 1}</span>
                  <p>{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Target Audience */}
      {course.targetAudience?.length > 0 && (
        <section className="course-detail-audience">
          <div className="course-detail-audience-inner">
            <h2>
              <i className="fas fa-users"></i>
              Who Should Attend
            </h2>
            <div className="course-detail-audience-list">
              {course.targetAudience.map((audience, idx) => (
                <div key={idx} className="audience-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prerequisites */}
      {course.prerequisites?.length > 0 && (
        <section className="course-detail-prereqs">
          <div className="course-detail-prereqs-inner">
            <h2>
              <i className="fas fa-list-check"></i>
              Prerequisites
            </h2>
            <ul className="course-prereqs-list">
              {course.prerequisites.map((prereq, idx) => (
                <li key={idx}>
                  <i className="fas fa-arrow-right"></i>
                  {prereq}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Public Workshop Dates */}
      {upcomingDates.length > 0 && (
        <section className="course-detail-dates" id="public-dates">
          <div className="course-detail-dates-inner">
            <h2>
              <i className="fas fa-calendar-alt"></i>
              Upcoming Public Workshops
            </h2>
            <div className="course-dates-list">
              {upcomingDates.map((date, idx) => (
                <div key={idx} className="course-date-card">
                  <div className="course-date-info">
                    <div className="course-date-calendar">
                      <span className="date-month">
                        {new Date(date.start).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="date-day">
                        {new Date(date.start).getDate()}
                      </span>
                    </div>
                    <div className="course-date-details">
                      <span className="date-range">
                        {date.start === date.end
                          ? new Date(date.start).toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })
                          : `${new Date(date.start).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric'
                            })} - ${new Date(date.end).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}`
                        }
                      </span>
                      <span className="date-time">
                        <i className="fas fa-clock"></i> {date.time}
                      </span>
                      <span className="date-format">
                        <i className="fas fa-video"></i> {date.format === 'virtual' ? 'Virtual (Live)' : date.format}
                      </span>
                    </div>
                  </div>
                  <div className="course-date-action">
                    {workshopData.price && (
                      <span className="date-price">${workshopData.price.toLocaleString()}</span>
                    )}
                    <a
                      href={date.eventbriteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Register <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Private Training CTA */}
      <section className="course-detail-private">
        <div className="course-detail-private-inner">
          <div className="course-detail-private-content">
            <h2>Train Your Entire Team</h2>
            <p>
              Schedule private training for your organization. We&apos;ll customize the content
              to your specific challenges and deliver it on your schedule.
            </p>
            <ul>
              <li><i className="fas fa-check"></i> 8-30 participants per session</li>
              <li><i className="fas fa-check"></i> Customizable content and examples</li>
              <li><i className="fas fa-check"></i> In-person, virtual, or hybrid delivery</li>
              <li><i className="fas fa-check"></i> Often more cost-effective for teams</li>
            </ul>
          </div>
          <div className="course-detail-private-action">
            <Link href="/contact" className="btn-primary btn-large">
              Get a Private Training Quote
            </Link>
            <span className="private-phone">or call <a href="tel:512-298-2835">512-298-2835</a></span>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="course-detail-related">
          <div className="course-detail-related-inner">
            <h2>
              <i className="fas fa-layer-group"></i>
              Related Courses
            </h2>
            <div className="course-related-grid">
              {relatedCourses.map(related => (
                <Link key={related.id} href={`/training/courses/${related.slug}`} className="course-related-card">
                  <div className="related-category">{courseCategories.find(c => c.id === related.category)?.label}</div>
                  <h3>{related.title}</h3>
                  <div className="related-meta">
                    <span><i className="fas fa-clock"></i> {related.duration}</span>
                    {related.certification?.credential && (
                      <span><i className="fas fa-certificate"></i> {related.certification.credential}</span>
                    )}
                  </div>
                  <span className="related-link">
                    View Course <i className="fas fa-arrow-right"></i>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Catalog */}
      <section className="course-detail-back">
        <div className="course-detail-back-inner">
          <Link href="/training/courses" className="btn-ghost">
            <i className="fas fa-arrow-left"></i> Back to Course Catalog
          </Link>
        </div>
      </section>
    </>
  )
}
