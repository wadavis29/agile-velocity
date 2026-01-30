'use client'

import { useEffect, useState } from 'react'

function scrollToHeading(id, setActiveId) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
    setActiveId(id)
  }
}

export default function BlogTableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0
      }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (!headings || headings.length < 2) return null

  const h2Headings = headings.filter(h => h.level === 2)

  return (
    <nav className="blog-toc" aria-label="Table of contents">
      <div className="blog-toc-header">In This Article</div>
      <ul className="blog-toc-list">
        {h2Headings.map(({ id, text }) => (
          <li key={id} className="blog-toc-item">
            <a
              href={`#${id}`}
              className={`blog-toc-link ${activeId === id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToHeading(id, setActiveId)
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function BlogTableOfContentsMobile({ headings }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!headings || headings.length < 2) return null

  const h2Headings = headings.filter(h => h.level === 2)

  return (
    <nav className="blog-toc-mobile" aria-label="Table of contents">
      <button
        className="blog-toc-mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="blog-toc-mobile-toggle-label">
          <i className="fa-solid fa-list"></i>
          In This Article
        </span>
        <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'} blog-toc-mobile-chevron`}></i>
      </button>
      {isOpen && (
        <ul className="blog-toc-mobile-list">
          {h2Headings.map(({ id, text }) => (
            <li key={id} className="blog-toc-mobile-item">
              <a
                href={`#${id}`}
                className="blog-toc-mobile-link"
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  setTimeout(() => {
                    const el = document.getElementById(id)
                    if (el) {
                      const top = el.getBoundingClientRect().top + window.scrollY - 100
                      window.scrollTo({ top, behavior: 'smooth' })
                    }
                  }, 100)
                }}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
