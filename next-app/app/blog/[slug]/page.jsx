import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPostSlugs, getRelatedPosts, extractHeadings } from '@/lib/blog'
import BlogTableOfContents, { BlogTableOfContentsMobile } from '@/components/BlogTableOfContents'
import { ArticleSchema } from '@/components/seo/JsonLd'

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map(slug => ({ slug }))
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on the Agile Velocity blog.`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Agile Velocity'],
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  }
}

function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Helper to generate heading ID from text content
function generateId(children) {
  const text = typeof children === 'string'
    ? children
    : Array.isArray(children)
      ? children.map(c => (typeof c === 'string' ? c : c?.props?.children || '')).join('')
      : children?.props?.children || ''
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

// Custom MDX components for styling
const mdxComponents = {
  h1: (props) => <h1 className="blog-content-h1" {...props} />,
  h2: (props) => {
    const id = generateId(props.children)
    return <h2 id={id} className="blog-content-h2" {...props} />
  },
  h3: (props) => {
    const id = generateId(props.children)
    return <h3 id={id} className="blog-content-h3" {...props} />
  },
  h4: (props) => <h4 className="blog-content-h4" {...props} />,
  h5: (props) => <h5 className="blog-content-h5" {...props} />,
  // Custom paragraph that handles images properly
  p: (props) => {
    // Check if children contains an img element
    const hasImage = props.children?.type === 'img' ||
      (Array.isArray(props.children) && props.children.some(child => child?.type === 'img'))

    // If paragraph only contains an image, render as div to avoid nesting issues
    if (hasImage) {
      return <div className="blog-content-p blog-content-media" {...props} />
    }
    return <p className="blog-content-p" {...props} />
  },
  ul: (props) => <ul className="blog-content-ul" {...props} />,
  ol: (props) => <ol className="blog-content-ol" {...props} />,
  li: (props) => <li className="blog-content-li" {...props} />,
  blockquote: (props) => <blockquote className="blog-content-blockquote" {...props} />,
  a: (props) => <a className="blog-content-link" target="_blank" rel="noopener noreferrer" {...props} />,
  img: (props) => (
    <span className="blog-content-figure">
      <img className="blog-content-img" {...props} alt={props.alt || ''} />
    </span>
  ),
  pre: (props) => <pre className="blog-content-pre" {...props} />,
  code: (props) => <code className="blog-content-code" {...props} />,
  table: (props) => (
    <div className="blog-content-table-wrapper">
      <table className="blog-content-table" {...props} />
    </div>
  ),
  th: (props) => <th className="blog-content-th" {...props} />,
  td: (props) => <td className="blog-content-td" {...props} />,
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug, 3)
  const headings = extractHeadings(post.content)

  return (
    <>
      {/* Article Schema for SEO */}
      <ArticleSchema
        title={post.title}
        description={post.excerpt || `Read ${post.title} on the Agile Velocity blog.`}
        image={post.featuredImage || 'https://www.agilevelocity.com/images/og/blog-og.png'}
        datePublished={post.date}
        dateModified={post.modifiedDate || post.date}
        author={post.author || 'Agile Velocity'}
        url={`https://www.agilevelocity.com/blog/${params.slug}`}
      />

      {/* Article Header */}
      <article className="blog-post">
        <header className="blog-post-header">
          <div className="blog-post-header-content">
            <Link href="/blog" className="blog-post-back">
              <i className="fa-solid fa-arrow-left"></i>
              Back to Blog
            </Link>

            {post.categories && post.categories.length > 0 && (
              <div className="blog-post-categories">
                {post.categories.map(cat => (
                  <span key={cat} className="blog-post-category">{cat}</span>
                ))}
              </div>
            )}

            <h1 className="blog-post-title">{post.title}</h1>

            <div className="blog-post-meta">
              {post.date && (
                <span className="blog-post-date">
                  <i className="fa-solid fa-calendar"></i>
                  {formatDate(post.date)}
                </span>
              )}
              {post.readingTime && (
                <span className="blog-post-reading-time">
                  <i className="fa-solid fa-clock"></i>
                  {post.readingTime}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="blog-post-featured-image">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}

        {/* Article Content with TOC sidebar */}
        <div className="blog-post-content-wrapper">
          <div className="blog-post-content-layout">
            <div className="blog-post-content">
              {headings.length >= 2 && (
                <BlogTableOfContentsMobile headings={headings} />
              )}
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>
            {headings.length >= 2 && (
              <aside className="blog-post-sidebar">
                <BlogTableOfContents headings={headings} />
              </aside>
            )}
          </div>
        </div>

        {/* Author Bio / CTA */}
        <div className="blog-post-footer">
          <div className="blog-post-cta">
            <h3>Ready to Transform Your Organization?</h3>
            <p>
              The Path to Agility framework has helped hundreds of organizations achieve
              speed, quality, and predictability. Let's discuss how we can help you.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="blog-related">
          <div className="blog-related-container">
            <h2 className="blog-related-title">Related Articles</h2>
            <div className="blog-related-grid">
              {relatedPosts.map(related => (
                <article key={related.slug} className="blog-card">
                  <Link href={`/blog/${related.slug}`} className="blog-card-link">
                    {related.featuredImage && (
                      <div className="blog-card-image">
                        <Image
                          src={related.featuredImage}
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <div className="blog-card-content">
                      {related.categories && related.categories.length > 0 && (
                        <div className="blog-card-categories">
                          {related.categories.slice(0, 2).map(cat => (
                            <span key={cat} className="blog-card-category">{cat}</span>
                          ))}
                        </div>
                      )}
                      <h3 className="blog-card-title">{related.title}</h3>
                      {related.excerpt && (
                        <p className="blog-card-excerpt">{related.excerpt}</p>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
