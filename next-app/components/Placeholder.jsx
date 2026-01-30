import Link from 'next/link'

export default function Placeholder({ title, description }) {
  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <span className="placeholder-badge">Coming Soon</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="placeholder-actions">
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
          <Link href="/" className="btn-ghost">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
