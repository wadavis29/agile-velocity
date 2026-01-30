import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h1>Page Not Found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="not-found-actions">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
