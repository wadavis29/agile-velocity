import Link from 'next/link'

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <Link href="/recognition"><i className="fas fa-trophy"></i> Longhorn 100 #17</Link>
          <Link href="/recognition"><i className="fas fa-award"></i> Inc. 5000 Honoree</Link>
        </div>
        <div className="top-bar-right">
          <div className="top-bar-dropdown">
            <button className="top-bar-dropdown-trigger">
              Insights <i className="fas fa-chevron-down"></i>
            </button>
            <div className="top-bar-dropdown-menu">
              <Link href="/insights/case-studies">Case Studies</Link>
              <Link href="/insights/white-papers">White Papers</Link>
              <Link href="/insights/webinars">Webinars</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
          <Link href="/about">About</Link>
          <a href="https://navigator.pathtoagility.com/" target="_blank" rel="noopener noreferrer">
            Navigator Login <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
