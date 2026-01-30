import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img
            src="https://agilevelocity.com/wp-content/uploads/2025/12/sunrise-landscape-2023.svg"
            alt="Agile Velocity"
            className="footer-logo"
          />
          <p>Transforming how organizations deliver value since 2010. Trusted by Fortune 500 leaders nationwide.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/about/team">Our Team</Link>
            <Link to="/about/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <Link to="/outcomes">Outcomes</Link>
            <Link to="/whats-in-your-way">What's In Your Way?</Link>
            <Link to="/path-to-agility">Path to Agility</Link>
            <Link to="/path-to-agility/navigator">Navigator</Link>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <Link to="/insights/articles">Articles</Link>
            <Link to="/insights/case-studies">Case Studies</Link>
            <Link to="/insights/webinars">Webinars</Link>
            <Link to="/insights/guides">Guides</Link>
          </div>
          <div className="footer-col">
            <h4>Training</h4>
            <Link to="/training/for-organizations">Corporate Training</Link>
            <Link to="/training/public-workshops">Public Workshops</Link>
            <Link to="/training/courses">Course Catalog</Link>
            <Link to="/training/faq">FAQ</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Agile Velocity. All rights reserved.</p>
        <div className="footer-legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
