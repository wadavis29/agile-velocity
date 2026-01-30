import { Link } from 'react-router-dom';
import { courseCategories, getFeaturedCourses, getUpcomingWorkshops } from '../../data/courses';

export default function TrainingIndex() {
  const featuredCourses = getFeaturedCourses();
  const upcomingWorkshops = getUpcomingWorkshops().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="training-hero">
        <div className="training-hero-inner">
          <span className="section-tag">Training & Certification</span>
          <h1 className="training-hero-title">
            Build Agile<br /><span className="highlight">Capabilities That Stick</span>
          </h1>
          <p className="training-hero-sub">
            30+ courses across Scrum, SAFe, Leadership, and Kanban. Hands-on training
            led by practitioners who've done it, not just taught it. Available as private
            training for your team or public workshops with open enrollment.
          </p>
          <div className="training-hero-actions">
            <Link to="/training/courses" className="btn-primary">
              Browse All Courses <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/training/for-organizations" className="btn-ghost">
              Private Training Info <i className="fas fa-building"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="training-categories">
        <div className="training-categories-inner">
          <div className="section-header">
            <span className="section-tag">What We Teach</span>
            <h2 className="section-title">Find Your<br /><span className="highlight">Course</span></h2>
          </div>
          <div className="training-categories-grid">
            {courseCategories.map(cat => (
              <Link key={cat.id} to={`/training/courses?category=${cat.id}`} className="training-category-card">
                <div className="training-category-icon">
                  <i className={cat.icon}></i>
                </div>
                <h3>{cat.label}</h3>
                <p>{cat.description}</p>
                <span className="training-category-link">
                  View Courses <i className="fas fa-arrow-right"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="training-featured">
        <div className="training-featured-inner">
          <div className="section-header">
            <span className="section-tag">Popular Choices</span>
            <h2 className="section-title">Most Requested<br /><span className="highlight">Courses</span></h2>
          </div>
          <div className="training-featured-grid">
            {featuredCourses.slice(0, 6).map(course => (
              <Link key={course.id} to={`/training/courses/${course.slug}`} className="training-course-card">
                {course.popular && <span className="course-badge">Popular</span>}
                <div className="course-category-tag">{course.category}</div>
                <h3>{course.title}</h3>
                <p>{course.overview.substring(0, 100)}...</p>
                <div className="course-meta">
                  <span><i className="fas fa-clock"></i> {course.duration}</span>
                  {course.certification?.provider && (
                    <span><i className="fas fa-certificate"></i> {course.certification.provider}</span>
                  )}
                </div>
                <span className="course-link">
                  View Details <i className="fas fa-arrow-right"></i>
                </span>
              </Link>
            ))}
          </div>
          <div className="training-featured-cta">
            <Link to="/training/courses" className="btn-ghost">
              View All 30+ Courses <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="training-why">
        <div className="training-why-inner">
          <div className="section-header">
            <span className="section-tag">Why Agile Velocity</span>
            <h2 className="section-title">Training That<br /><span className="highlight">Actually Works</span></h2>
          </div>
          <div className="training-why-grid">
            <div className="training-why-card">
              <div className="training-why-icon">
                <i className="fas fa-user-check"></i>
              </div>
              <h3>Practitioners, Not Just Trainers</h3>
              <p>Our instructors are active coaches and consultants. They bring real-world stories, not just slides.</p>
            </div>
            <div className="training-why-card">
              <div className="training-why-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Hands-On Learning</h3>
              <p>Simulation-based exercises, not death by PowerPoint. You'll practice what you learn before you leave.</p>
            </div>
            <div className="training-why-card">
              <div className="training-why-icon">
                <i className="fas fa-users-cog"></i>
              </div>
              <h3>Small Group Format</h3>
              <p>8-30 participants max. Everyone gets attention, everyone participates, everyone learns.</p>
            </div>
            <div className="training-why-card">
              <div className="training-why-icon">
                <i className="fas fa-laptop-house"></i>
              </div>
              <h3>Flexible Delivery</h3>
              <p>In-person, virtual, or hybrid. We work around your schedule and location needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Public Workshops - shows there ARE public options */}
      {upcomingWorkshops.length > 0 && (
        <section className="training-upcoming">
          <div className="training-upcoming-inner">
            <div className="training-upcoming-header">
              <div>
                <span className="section-tag">Open Enrollment</span>
                <h2 className="section-title">Upcoming<br /><span className="highlight">Public Workshops</span></h2>
                <p>Can't wait for private training? Register for an upcoming public session.</p>
              </div>
            </div>
            <div className="training-upcoming-grid">
              {upcomingWorkshops.map((workshop, idx) => (
                <Link key={idx} to={`/training/courses/${workshop.course?.slug}`} className="training-workshop-card">
                  <div className="workshop-date">
                    <span className="workshop-month">
                      {new Date(workshop.dates[0].start).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="workshop-day">
                      {new Date(workshop.dates[0].start).getDate()}
                    </span>
                  </div>
                  <div className="workshop-content">
                    <h3>{workshop.course?.title}</h3>
                    <p className="workshop-time">
                      <i className="fas fa-clock"></i> {workshop.dates[0].time}
                    </p>
                    <p className="workshop-format">
                      <i className="fas fa-video"></i> Virtual (Live)
                    </p>
                  </div>
                  <div className="workshop-action">
                    <span className="workshop-price">${workshop.price?.toLocaleString()}</span>
                    <span className="btn-ghost btn-sm">
                      View & Register <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Private Training Highlight */}
      <section className="training-private-highlight">
        <div className="training-private-highlight-inner">
          <div className="training-private-highlight-content">
            <h2>Training Multiple People?</h2>
            <p>
              Private training for teams of 8+ is often more cost-effective than individual registrations.
              Plus, you get customized content and your choice of dates and delivery format.
            </p>
            <ul>
              <li><i className="fas fa-check"></i> In-person, virtual, or hybrid delivery</li>
              <li><i className="fas fa-check"></i> Content customized to your projects</li>
              <li><i className="fas fa-check"></i> Same certifications as public workshops</li>
            </ul>
          </div>
          <div className="training-private-highlight-action">
            <Link to="/training/for-organizations" className="btn-primary">
              Learn About Private Training <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="training-cta">
        <div className="training-cta-inner">
          <h2>Not Sure Where to Start?</h2>
          <p>Let's talk about your team's goals and recommend the right training path.</p>
          <Link to="/contact" className="btn-primary btn-large">
            Book a Training Consultation <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
