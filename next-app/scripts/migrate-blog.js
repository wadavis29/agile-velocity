/**
 * Blog Migration Script (WordPress REST API)
 *
 * Fetches blog posts from agilevelocity.com using the WordPress REST API
 * and converts them to MDX files.
 *
 * Usage: node scripts/migrate-blog.js
 *
 * Options:
 *   --dry-run    Preview what would be migrated without writing files
 *   --limit=N    Only migrate N posts (for testing)
 *   --skip=N     Skip the first N posts (for resuming)
 */

const fs = require('fs')
const path = require('path')
const https = require('https')

// Configuration
const API_BASE = 'https://agilevelocity.com/wp-json/wp/v2'
const OUTPUT_DIR = path.join(process.cwd(), 'content/blog')
const IMAGES_DIR = path.join(process.cwd(), 'public/images/blog')
const POSTS_PER_PAGE = 100

// Parse command line arguments
const args = process.argv.slice(2)
const isDryRun = args.includes('--dry-run')
const limitArg = args.find(a => a.startsWith('--limit='))
const skipArg = args.find(a => a.startsWith('--skip='))
const limit = limitArg ? parseInt(limitArg.split('=')[1]) : null
const skip = skipArg ? parseInt(skipArg.split('=')[1]) : 0

// Cache for categories and media
const categoryCache = new Map()
const mediaCache = new Map()
const authorCache = new Map()

// Utility: Fetch JSON from URL
function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; BlogMigrator/1.0)',
        'Accept': 'application/json'
      }
    }, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode} for ${url}`))
        return
      }

      let data = ''
      response.on('data', chunk => data += chunk)
      response.on('end', () => {
        try {
          resolve(JSON.parse(data))
        } catch (e) {
          reject(new Error(`Invalid JSON from ${url}`))
        }
      })
    })

    request.on('error', reject)
    request.setTimeout(30000, () => {
      request.destroy()
      reject(new Error(`Timeout fetching ${url}`))
    })
  })
}

// Fetch all categories and cache them
async function fetchCategories() {
  console.log('   Fetching categories...')
  try {
    const categories = await fetchJson(`${API_BASE}/categories?per_page=100`)
    for (const cat of categories) {
      categoryCache.set(cat.id, cat.name)
    }
    console.log(`   Cached ${categoryCache.size} categories`)
  } catch (error) {
    console.log('   Warning: Could not fetch categories:', error.message)
  }
}

// Fetch media URL by ID
async function fetchMediaUrl(mediaId) {
  if (!mediaId) return null
  if (mediaCache.has(mediaId)) return mediaCache.get(mediaId)

  try {
    const media = await fetchJson(`${API_BASE}/media/${mediaId}`)
    const url = media.source_url || null
    mediaCache.set(mediaId, url)
    return url
  } catch (error) {
    mediaCache.set(mediaId, null)
    return null
  }
}

// Fetch author name by ID
async function fetchAuthorName(authorId) {
  if (!authorId) return 'Agile Velocity'
  if (authorCache.has(authorId)) return authorCache.get(authorId)

  try {
    const author = await fetchJson(`${API_BASE}/users/${authorId}`)
    const name = author.name || 'Agile Velocity'
    authorCache.set(authorId, name)
    return name
  } catch (error) {
    authorCache.set(authorId, 'Agile Velocity')
    return 'Agile Velocity'
  }
}

// Fetch all posts with pagination
async function fetchAllPosts() {
  const allPosts = []
  let page = 1
  let hasMore = true

  console.log('   Fetching posts from API...')

  while (hasMore) {
    const url = `${API_BASE}/posts?per_page=${POSTS_PER_PAGE}&page=${page}&_embed`
    try {
      const posts = await fetchJson(url)
      if (posts.length === 0) {
        hasMore = false
      } else {
        allPosts.push(...posts)
        console.log(`   Fetched page ${page} (${posts.length} posts, total: ${allPosts.length})`)
        page++
      }
    } catch (error) {
      if (error.message.includes('400')) {
        // No more pages
        hasMore = false
      } else {
        throw error
      }
    }
  }

  return allPosts
}

// Convert HTML to Markdown
function htmlToMarkdown(html) {
  if (!html) return ''
  let md = html

  // Remove scripts and styles
  md = md.replace(/<script[\s\S]*?<\/script>/gi, '')
  md = md.replace(/<style[\s\S]*?<\/style>/gi, '')
  md = md.replace(/<!--[\s\S]*?-->/g, '')

  // Convert headers
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n')
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n')
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n')
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n')
  md = md.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '\n##### $1\n')
  md = md.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '\n###### $1\n')

  // Convert paragraphs
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n')

  // Convert line breaks
  md = md.replace(/<br\s*\/?>/gi, '\n')

  // Convert bold
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**')
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**')

  // Convert italic
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*')
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*')

  // Convert links - be careful not to break markdown image syntax
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')

  // Convert images - handle various attribute orders
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)')
  md = md.replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/gi, '![$1]($2)')
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, '![]($1)')

  // Convert figure/figcaption
  md = md.replace(/<figure[^>]*>([\s\S]*?)<\/figure>/gi, '\n$1\n')
  md = md.replace(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/gi, '*$1*')

  // Convert lists
  md = md.replace(/<ul[^>]*>/gi, '\n')
  md = md.replace(/<\/ul>/gi, '\n')
  md = md.replace(/<ol[^>]*>/gi, '\n')
  md = md.replace(/<\/ol>/gi, '\n')
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n')

  // Convert blockquotes
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (match, content) => {
    const lines = content.trim().split('\n')
    return '\n' + lines.map(line => '> ' + line.trim()).join('\n') + '\n'
  })

  // Convert code blocks
  md = md.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '\n```\n$1\n```\n')
  md = md.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, '\n```\n$1\n```\n')
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`')

  // Convert horizontal rules
  md = md.replace(/<hr[^>]*\/?>/gi, '\n---\n')

  // Remove divs and spans (keep content)
  md = md.replace(/<div[^>]*>/gi, '\n')
  md = md.replace(/<\/div>/gi, '\n')
  md = md.replace(/<span[^>]*>/gi, '')
  md = md.replace(/<\/span>/gi, '')

  // Remove remaining HTML tags
  md = md.replace(/<[^>]+>/g, '')

  // Decode HTML entities
  md = decodeHtmlEntities(md)

  // Clean up whitespace
  md = md.replace(/\n{3,}/g, '\n\n')
  md = md.replace(/^\s+|\s+$/g, '')

  // Clean up list formatting
  md = md.replace(/\n-\s*\n/g, '\n')

  return md
}

// Decode HTML entities
function decodeHtmlEntities(text) {
  const entities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&nbsp;': ' ',
    '&ndash;': '\u2013',
    '&mdash;': '\u2014',
    '&lsquo;': '\u2018',
    '&rsquo;': '\u2019',
    '&ldquo;': '\u201C',
    '&rdquo;': '\u201D',
    '&hellip;': '\u2026',
    '&copy;': '\u00A9',
    '&reg;': '\u00AE',
    '&trade;': '\u2122',
  }

  let decoded = text
  for (const [entity, char] of Object.entries(entities)) {
    decoded = decoded.split(entity).join(char)
  }

  // Handle numeric entities
  decoded = decoded.replace(/&#(\d+);/g, (match, num) => String.fromCharCode(parseInt(num)))
  decoded = decoded.replace(/&#x([a-fA-F0-9]+);/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)))

  return decoded
}

// Clean and extract text from rendered content
function cleanRenderedContent(rendered) {
  if (!rendered || !rendered.rendered) return ''
  return rendered.rendered
}

// Generate MDX file content
function generateMdx(post) {
  // Escape quotes in frontmatter values
  const escapeQuotes = (str) => (str || '').replace(/"/g, '\\"').replace(/\n/g, ' ')

  const frontmatter = [
    '---',
    `title: "${escapeQuotes(post.title)}"`,
    `slug: "${post.slug}"`,
    `date: "${post.date}"`,
    `author: "${escapeQuotes(post.author)}"`,
    `excerpt: "${escapeQuotes(post.excerpt)}"`,
    `categories: ${JSON.stringify(post.categories)}`,
    post.featuredImage ? `featuredImage: "${post.featuredImage}"` : null,
    '---',
  ].filter(Boolean).join('\n')

  return `${frontmatter}\n\n${post.content}`
}

// Sleep utility
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Main migration function
async function migrate() {
  console.log('\n\u{1F680} Starting blog migration (WordPress REST API)...\n')

  if (isDryRun) {
    console.log('\u{1F4CB} DRY RUN - No files will be written\n')
  }

  // Ensure directories exist
  if (!isDryRun) {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true })
      console.log(`\u{1F4C1} Created directory: ${OUTPUT_DIR}`)
    }
    if (!fs.existsSync(IMAGES_DIR)) {
      fs.mkdirSync(IMAGES_DIR, { recursive: true })
      console.log(`\u{1F4C1} Created directory: ${IMAGES_DIR}`)
    }
  }

  // Fetch categories first
  await fetchCategories()

  // Fetch all posts
  let posts
  try {
    posts = await fetchAllPosts()
  } catch (error) {
    console.error('\u{274C} Failed to fetch posts:', error.message)
    process.exit(1)
  }

  console.log(`\n\u{1F4DD} Found ${posts.length} blog posts\n`)

  // Apply skip and limit
  if (skip > 0) {
    posts = posts.slice(skip)
    console.log(`\u{23ED}\u{FE0F} Skipping first ${skip} posts`)
  }
  if (limit) {
    posts = posts.slice(0, limit)
    console.log(`\u{1F522} Limiting to ${limit} posts`)
  }

  console.log(`\n\u{1F4CA} Will process ${posts.length} posts\n`)

  // Process each post
  const results = {
    success: 0,
    failed: 0,
    skipped: 0
  }

  for (let i = 0; i < posts.length; i++) {
    const apiPost = posts[i]
    const slug = apiPost.slug
    const progress = `[${i + 1}/${posts.length}]`

    // Check if already exists
    const outputPath = path.join(OUTPUT_DIR, `${slug}.mdx`)
    if (!isDryRun && fs.existsSync(outputPath)) {
      console.log(`${progress} \u{23ED}\u{FE0F} Skipping (exists): ${slug}`)
      results.skipped++
      continue
    }

    console.log(`${progress} \u{1F4C4} Processing: ${slug}`)

    try {
      // Extract post data
      const title = apiPost.title?.rendered ? decodeHtmlEntities(apiPost.title.rendered.replace(/<[^>]+>/g, '')) : ''
      const date = apiPost.date ? apiPost.date.split('T')[0] : ''
      const excerptHtml = apiPost.excerpt?.rendered || ''
      const excerpt = decodeHtmlEntities(excerptHtml.replace(/<[^>]+>/g, '').trim())
      const contentHtml = apiPost.content?.rendered || ''
      const content = htmlToMarkdown(contentHtml)

      // Get category names
      const categoryIds = apiPost.categories || []
      const categories = categoryIds
        .map(id => categoryCache.get(id))
        .filter(Boolean)

      // Get featured image URL
      let featuredImage = null
      if (apiPost.featured_media) {
        featuredImage = await fetchMediaUrl(apiPost.featured_media)
      }

      // Get author name
      const author = await fetchAuthorName(apiPost.author)

      const post = {
        slug,
        title,
        date,
        author,
        excerpt: excerpt.slice(0, 300), // Limit excerpt length
        categories,
        featuredImage,
        content
      }

      if (!post.title || !post.content) {
        console.log(`${progress} \u{26A0}\u{FE0F} Missing title or content: ${slug}`)
        results.failed++
        continue
      }

      // Generate MDX
      const mdx = generateMdx(post)

      if (isDryRun) {
        console.log(`${progress} \u{2705} Would create: ${slug}.mdx`)
        console.log(`   Title: ${post.title}`)
        console.log(`   Date: ${post.date}`)
        console.log(`   Categories: ${post.categories.join(', ') || 'None'}`)
        console.log(`   Content length: ${post.content.length} chars`)
      } else {
        // Write MDX file
        fs.writeFileSync(outputPath, mdx, 'utf8')
        console.log(`${progress} \u{2705} Created: ${slug}.mdx (${post.content.length} chars)`)
      }

      results.success++

      // Small delay to be nice to the API
      await sleep(100)

    } catch (error) {
      console.log(`${progress} \u{274C} Failed: ${slug} - ${error.message}`)
      results.failed++
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50))
  console.log('\u{1F4CA} Migration Summary')
  console.log('='.repeat(50))
  console.log(`\u{2705} Successful: ${results.success}`)
  console.log(`\u{23ED}\u{FE0F} Skipped: ${results.skipped}`)
  console.log(`\u{274C} Failed: ${results.failed}`)
  console.log(`\u{1F4DD} Total processed: ${posts.length}`)

  if (isDryRun) {
    console.log('\n\u{1F4CB} This was a dry run. Run without --dry-run to actually migrate.')
  }
}

// Run migration
migrate().catch(error => {
  console.error('Fatal error:', error)
  process.exit(1)
})
