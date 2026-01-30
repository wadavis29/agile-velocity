import { Link, useLocation } from 'react-router-dom';

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname
    .split('/')
    .filter(Boolean)
    .map(s => s.replace(/-/g, ' '))
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' / ');

  return (
    <>
      <header className="page-hero">
        <div className="page-hero-bg" aria-hidden="true">COMING SOON</div>
        <div className="page-hero-content">
          <span className="page-tag">Under Construction</span>
          <h1 className="page-title">{pageName || 'Page'}</h1>
          <p className="page-intro">This page is coming soon. Check back later for updates.</p>
          <div className="hero-actions" style={{ marginTop: '2rem' }}>
            <Link to="/" className="btn-primary btn-large">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
