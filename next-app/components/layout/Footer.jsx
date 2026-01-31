import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Image
            src="/images/agile-velocity-logo.svg"
            alt="Agile Velocity"
            className="footer-logo"
            width={200}
            height={45}
            unoptimized
          />
          <p>We fix what&apos;s broken in how teams work. 15 years of experience. Fortune 500 trust.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/about/team">Our Team</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <Link href="/outcomes">Outcomes</Link>
            <Link href="/whats-in-your-way">What&apos;s In Your Way?</Link>
            <Link href="/path-to-agility">Path to Agility</Link>
            <Link href="/path-to-agility/navigator">Navigator</Link>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <Link href="/blog">Blog</Link>
            <Link href="/insights/case-studies">Case Studies</Link>
            <Link href="/insights/webinars">Webinars</Link>
            <Link href="/insights/white-papers">White Papers</Link>
          </div>
          <div className="footer-col">
            <h4>Training</h4>
            <Link href="/training/for-organizations">Corporate Training</Link>
            <Link href="/training/public-workshops">Public Workshops</Link>
            <Link href="/training/courses">Course Catalog</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Agile Velocity. All rights reserved.</p>
        <div className="footer-legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
