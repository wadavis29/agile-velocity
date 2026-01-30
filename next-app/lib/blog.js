import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

// In-memory cache to avoid re-reading 477 files on every API request
let _postsCache = null
let _postsCacheTime = 0
const CACHE_TTL = 60 * 1000 // 1 minute

function getCachedPosts() {
  const now = Date.now()
  if (_postsCache && (now - _postsCacheTime < CACHE_TTL)) {
    return _postsCache
  }
  _postsCache = _loadAllPosts()
  _postsCacheTime = now
  return _postsCache
}

function _loadAllPosts() {
  const slugs = getAllPostSlugs()
  return slugs
    .map(slug => {
      const post = getPostBySlug(slug)
      if (!post) return null
      const { content, ...metadata } = post
      return metadata
    })
    .filter(post => post !== null)
    .sort((a, b) => {
      const dateA = new Date(a.date || 0)
      const dateB = new Date(b.date || 0)
      return dateB - dateA
    })
}

/**
 * Get all blog post slugs
 */
export function getAllPostSlugs() {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR)
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''))
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    slug,
    content,
    readingTime: stats.text,
    ...data,
  }
}

/**
 * Get all posts with metadata (for listing pages)
 */
export function getAllPosts() {
  return getCachedPosts()
}

/**
 * Get posts with pagination
 */
export function getPaginatedPosts(page = 1, perPage = 12) {
  const allPosts = getAllPosts()
  const totalPosts = allPosts.length
  const totalPages = Math.ceil(totalPosts / perPage)

  const start = (page - 1) * perPage
  const end = start + perPage
  const posts = allPosts.slice(start, end)

  return {
    posts,
    pagination: {
      currentPage: page,
      totalPages,
      totalPosts,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    }
  }
}

/**
 * Get all unique categories
 */
export function getAllCategories() {
  const posts = getAllPosts()
  const categories = new Set()

  posts.forEach(post => {
    if (post.categories && Array.isArray(post.categories)) {
      post.categories.forEach(cat => categories.add(cat))
    }
  })

  return Array.from(categories).sort()
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category, page = 1, perPage = 12) {
  const allPosts = getAllPosts().filter(post =>
    post.categories && post.categories.includes(category)
  )

  const totalPosts = allPosts.length
  const totalPages = Math.ceil(totalPosts / perPage)

  const start = (page - 1) * perPage
  const end = start + perPage
  const posts = allPosts.slice(start, end)

  return {
    posts,
    pagination: {
      currentPage: page,
      totalPages,
      totalPosts,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    }
  }
}

/**
 * Get related posts based on shared categories
 */
export function getRelatedPosts(currentSlug, limit = 3) {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost || !currentPost.categories) {
    return []
  }

  const allPosts = getAllPosts().filter(post => post.slug !== currentSlug)

  // Score posts by number of shared categories
  const scoredPosts = allPosts.map(post => {
    const sharedCategories = post.categories?.filter(cat =>
      currentPost.categories.includes(cat)
    ) || []
    return { ...post, score: sharedCategories.length }
  })

  return scoredPosts
    .filter(post => post.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

/**
 * Extract headings (h2, h3) from MDX content for table of contents
 */
export function extractHeadings(content) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2]
      .replace(/\*\*/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .trim()
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')

    headings.push({ level, text, id })
  }

  return headings
}

/**
 * Fuzzy search scoring for a post against query tokens.
 * Returns a relevance score (0 = no match).
 *   - Title word starts-with: 10 points per token
 *   - Title substring: 5 points per token
 *   - Category match: 4 points per token
 *   - Excerpt word starts-with: 3 points per token
 *   - Excerpt substring: 1 point per token
 */
function fuzzyScore(post, tokens) {
  if (!tokens.length) return 0

  const title = post.title?.toLowerCase() || ''
  const titleWords = title.split(/\s+/)
  const excerpt = post.excerpt?.toLowerCase() || ''
  const excerptWords = excerpt.split(/\s+/)
  const categories = (post.categories || []).map(c => c.toLowerCase())

  let score = 0
  let matchedTokens = 0

  for (const token of tokens) {
    let tokenMatched = false

    // Title word starts-with (strongest signal)
    if (titleWords.some(w => w.startsWith(token))) {
      score += 10
      tokenMatched = true
    } else if (title.includes(token)) {
      // Title substring match
      score += 5
      tokenMatched = true
    }

    // Category match
    if (categories.some(c => c.includes(token))) {
      score += 4
      tokenMatched = true
    }

    // Excerpt word starts-with
    if (excerptWords.some(w => w.startsWith(token))) {
      score += 3
      tokenMatched = true
    } else if (excerpt.includes(token)) {
      // Excerpt substring
      score += 1
      tokenMatched = true
    }

    if (tokenMatched) matchedTokens++
  }

  // Require all tokens to match at least somewhere
  if (matchedTokens < tokens.length) return 0

  // Bonus for matching all tokens
  score += matchedTokens * 2

  return score
}

/**
 * Search posts with fuzzy word-based matching.
 * Tokenizes query, matches each word independently, scores by relevance.
 */
export function searchPosts(query) {
  if (!query || query.trim() === '') {
    return []
  }

  const tokens = query.toLowerCase().split(/\s+/).filter(t => t.length > 0)
  const allPosts = getAllPosts()

  return allPosts
    .map(post => ({ ...post, _score: fuzzyScore(post, tokens) }))
    .filter(post => post._score > 0)
    .sort((a, b) => b._score - a._score)
}

/**
 * Get filtered, searched, and paginated posts (for API route).
 * Uses fuzzy search when a search query is provided.
 */
export function getFilteredPaginatedPosts({ page = 1, limit = 12, search = '', category = '' } = {}) {
  let posts = getAllPosts()

  if (category) {
    posts = posts.filter(post =>
      post.categories && post.categories.includes(category)
    )
  }

  if (search.trim()) {
    const tokens = search.toLowerCase().split(/\s+/).filter(t => t.length > 0)
    posts = posts
      .map(post => ({ ...post, _score: fuzzyScore(post, tokens) }))
      .filter(post => post._score > 0)
      .sort((a, b) => b._score - a._score)
  }

  const total = posts.length
  const totalPages = Math.ceil(total / limit)
  const start = (page - 1) * limit
  const paginatedPosts = posts.slice(start, start + limit)

  return {
    posts: paginatedPosts,
    total,
    hasMore: page < totalPages,
    page,
  }
}

/**
 * Get featured posts (most recent 3) for the blog landing page
 */
export function getFeaturedPosts(count = 3) {
  return getAllPosts().slice(0, count)
}

/**
 * Get the 9 canonical categories with their post counts
 */
export function getCategoriesWithCounts() {
  const CATEGORIES = [
    'Agile Transformation',
    'Frameworks & Methodologies',
    'Leadership & Organizational Culture',
    'Team Performance & Practices',
    'Technical Excellence & Engineering',
    'Product Development & Strategy',
    'Business Outcomes & Metrics',
    'Tools & Implementation Resources',
    'Industry-Specific Applications',
  ]

  const posts = getAllPosts()
  return CATEGORIES
    .map(name => ({
      name,
      count: posts.filter(p => p.categories && p.categories.includes(name)).length,
    }))
    .filter(c => c.count > 0)
}
