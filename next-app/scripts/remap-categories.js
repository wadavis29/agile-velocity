/**
 * Category Remapping Script
 *
 * Consolidates 47 blog categories into 10 clean, reader-focused categories.
 * Reads all MDX blog posts, remaps their categories, and rewrites frontmatter in place.
 *
 * Usage:
 *   node scripts/remap-categories.js --dry-run    Preview changes without writing
 *   node scripts/remap-categories.js              Execute the remapping
 *   node scripts/remap-categories.js --verbose    Execute with detailed per-file output
 */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const BLOG_DIR = path.join(__dirname, '..', 'content', 'blog')

// Parse CLI args
const args = process.argv.slice(2)
const isDryRun = args.includes('--dry-run')
const isVerbose = args.includes('--verbose') || isDryRun

// ============================================================
// META CATEGORIES (to be stripped - these are content types, not topics)
// ============================================================
const META_CATEGORIES = new Set([
  'Article',
  'Blog',
  'Video',
  'Slides',
  'eGuide',
  'Webinar',
  'News',
  'Uncategorized',
  'Release Notes',
])

// ============================================================
// DETERMINISTIC CATEGORY MAPPING (old → new)
// ============================================================
const CATEGORY_MAP = {
  // Agile Transformation
  'Agile Transformation': 'Agile Transformation',
  'Business Transformation': 'Agile Transformation',
  'Agile Coaching': 'Agile Transformation',
  'Agile Assessment': 'Agile Transformation',

  // Frameworks & Methodologies
  'Scrum': 'Frameworks & Methodologies',
  'Kanban': 'Frameworks & Methodologies',
  'SAFe': 'Frameworks & Methodologies',
  'Lean': 'Frameworks & Methodologies',
  'Agile Frameworks': 'Frameworks & Methodologies',
  'Scaling Agile': 'Frameworks & Methodologies',
  'Agile Methodology': 'Frameworks & Methodologies',

  // Leadership & Organizational Culture
  'Leadership': 'Leadership & Organizational Culture',
  'Organizational Agility': 'Leadership & Organizational Culture',
  'Business Agility': 'Leadership & Organizational Culture',
  'Agile HR': 'Leadership & Organizational Culture',

  // Team Performance & Practices
  'Team': 'Team Performance & Practices',
  'ScrumMaster': 'Team Performance & Practices',
  'Product Owner': 'Team Performance & Practices',
  'Agile Team Performance': 'Team Performance & Practices',

  // Technical Excellence & Engineering
  'Agile Technical Practices': 'Technical Excellence & Engineering',
  'Technical Practices': 'Technical Excellence & Engineering',

  // Product Development & Strategy
  'Agile Product Delivery': 'Product Development & Strategy',
  'Agile Project': 'Product Development & Strategy',

  // Business Outcomes & Metrics
  'Agile Metrics': 'Business Outcomes & Metrics',
  'Business Outcomes': 'Business Outcomes & Metrics',
  'Continuous Improvement': 'Business Outcomes & Metrics',
  'Business Operations Consulting': 'Business Outcomes & Metrics',
  'Flow Metrics': 'Business Outcomes & Metrics',
  'Lean Portfolio Management': 'Business Outcomes & Metrics',

  // Enterprise & Scaled Agility
  // (Most enterprise posts come via keyword fallback since no direct old categories map cleanly)

  // Industry-Specific Applications
  'Agile Marketing': 'Industry-Specific Applications',
  'Agile Staffing': 'Industry-Specific Applications',
  'AI': 'Industry-Specific Applications',

  // Tools & Implementation Resources
  'Agile Tools': 'Tools & Implementation Resources',
  'Path to Agility Approach': 'Tools & Implementation Resources',
  'Path to Agility Navigator Software': 'Tools & Implementation Resources',
  'Agile Training': 'Tools & Implementation Resources',
  'Process': 'Tools & Implementation Resources',
}

// The generic "Agile" category (91 posts) — handle via keyword fallback
// when it's the only non-meta category

// ============================================================
// KEYWORD-BASED FALLBACK RULES
// Checked in priority order against title + excerpt (lowercase)
// ============================================================
const KEYWORD_RULES = [
  {
    category: 'Frameworks & Methodologies',
    keywords: ['scrum', 'kanban', 'safe ', 'safe(', 'scaled agile framework', 'lean', 'sprint', 'backlog', 'retrospective', 'standup', 'stand-up', 'ceremony', 'framework', 'iteration', 'waterfall', 'xp ', 'extreme programming'],
  },
  {
    category: 'Technical Excellence & Engineering',
    keywords: ['technical', 'engineering', 'devops', 'ci/cd', 'continuous integration', 'continuous delivery', 'testing', 'tdd', 'bdd', 'code review', 'architecture', 'refactor', 'automation', 'automated test', 'deploy', 'infrastructure'],
  },
  {
    category: 'Leadership & Organizational Culture',
    keywords: ['leader', 'culture', 'servant', 'management', 'executive', 'ceo', 'cto', 'manager', 'trust', 'psychological safety', 'engagement', 'motivation', 'coach', 'mentor', 'organizational'],
  },
  {
    category: 'Team Performance & Practices',
    keywords: ['scrum master', 'scrummaster', 'product owner', 'estimation', 'story point', 'velocity', 'capacity', 'team performance', 'team building', 'daily standup', 'sprint planning', 'sprint review', 'demo', 'retrospective'],
  },
  {
    category: 'Product Development & Strategy',
    keywords: ['product', 'roadmap', 'mvp', 'user story', 'feature', 'requirement', 'stakeholder', 'prioritiz', 'product backlog', 'customer', 'design thinking'],
  },
  {
    category: 'Business Outcomes & Metrics',
    keywords: ['metric', 'outcome', 'kpi', 'okr', 'measure', 'roi', 'value stream', 'predictab', 'quality', 'throughput', 'cycle time', 'lead time', 'flow', 'data-driven', 'performance metric'],
  },
  {
    category: 'Enterprise & Scaled Agility',
    keywords: ['enterprise', 'scale', 'portfolio', 'program increment', 'large org', 'organization-wide', 'multi-team', 'cross-team', 'train ', 'art ', 'agile release train', 'value stream'],
  },
  {
    category: 'Industry-Specific Applications',
    keywords: ['healthcare', 'financial', 'marketing', 'government', 'regulated', 'compliance', 'audit', 'pharma', 'insurance', 'banking', 'education', 'non-profit', 'hardware'],
  },
  {
    category: 'Tools & Implementation Resources',
    keywords: ['tool', 'navigator', 'path to agility', 'template', 'checklist', 'guide', 'resource', 'download', 'infographic', 'software platform', 'jira', 'azure devops', 'rally'],
  },
  {
    category: 'Agile Transformation',
    keywords: ['transform', 'journey', 'change', 'adopt', 'implement', 'transition', 'initiative', 'agile at scale', 'getting started', 'beginning agile', 'why agile', 'starting agile', 'agile mindset'],
  },
]

// ============================================================
// MAIN LOGIC
// ============================================================

function classifyPost(data) {
  const oldCategories = data.categories || []

  // Step 1: Strip meta categories
  const nonMetaCats = oldCategories.filter(c => !META_CATEGORIES.has(c))

  // Step 2: Map non-meta categories via deterministic lookup
  const mapped = new Set()
  for (const cat of nonMetaCats) {
    if (cat === 'Agile') continue // Handle generic "Agile" via keyword fallback
    if (CATEGORY_MAP[cat]) {
      mapped.add(CATEGORY_MAP[cat])
    }
  }

  // Step 3: If we got mappings, return the first one (primary category)
  if (mapped.size > 0) {
    // Return as single-element array with just the primary category
    return [Array.from(mapped)[0]]
  }

  // Step 4: Keyword-based fallback for posts with no deterministic mapping
  // This covers posts tagged only with meta categories, generic "Agile", or nothing useful
  const searchText = [
    (data.title || '').toLowerCase(),
    (data.excerpt || '').toLowerCase(),
  ].join(' ')

  for (const rule of KEYWORD_RULES) {
    for (const keyword of rule.keywords) {
      if (searchText.includes(keyword)) {
        return [rule.category]
      }
    }
  }

  // Step 5: Ultimate fallback — if nothing matched, classify as Agile Transformation
  // (the broadest category that fits general agile content)
  return ['Agile Transformation']
}

function run() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.error('Blog directory not found:', BLOG_DIR)
    process.exit(1)
  }

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'))
  console.log(`Found ${files.length} blog posts\n`)

  if (isDryRun) {
    console.log('=== DRY RUN — No files will be modified ===\n')
  }

  const stats = {
    total: files.length,
    changed: 0,
    unchanged: 0,
    errors: 0,
    newCategoryCounts: {},
  }

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file)
    try {
      const raw = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(raw)

      const oldCategories = data.categories || []
      const newCategories = classifyPost(data)

      // Track new category distribution
      for (const cat of newCategories) {
        stats.newCategoryCounts[cat] = (stats.newCategoryCounts[cat] || 0) + 1
      }

      const changed = JSON.stringify(oldCategories) !== JSON.stringify(newCategories)
      if (changed) {
        stats.changed++
        if (isVerbose) {
          console.log(`[CHANGE] ${file}`)
          console.log(`  Old: ${JSON.stringify(oldCategories)}`)
          console.log(`  New: ${JSON.stringify(newCategories)}`)
          console.log('')
        }

        if (!isDryRun) {
          data.categories = newCategories
          const newRaw = matter.stringify(content, data)
          fs.writeFileSync(filePath, newRaw, 'utf8')
        }
      } else {
        stats.unchanged++
        if (isVerbose) {
          console.log(`[SAME]   ${file} → ${JSON.stringify(newCategories)}`)
        }
      }
    } catch (err) {
      stats.errors++
      console.error(`[ERROR]  ${file}: ${err.message}`)
    }
  }

  // Summary
  console.log('\n=== SUMMARY ===')
  console.log(`Total posts:    ${stats.total}`)
  console.log(`Changed:        ${stats.changed}`)
  console.log(`Unchanged:      ${stats.unchanged}`)
  console.log(`Errors:         ${stats.errors}`)
  console.log('')
  console.log('=== NEW CATEGORY DISTRIBUTION ===')
  const sorted = Object.entries(stats.newCategoryCounts).sort((a, b) => b[1] - a[1])
  for (const [cat, count] of sorted) {
    console.log(`  ${count.toString().padStart(4)}  ${cat}`)
  }
  console.log('')

  if (isDryRun) {
    console.log('Dry run complete. Run without --dry-run to apply changes.')
  } else {
    console.log('Remapping complete. All files updated.')
  }
}

run()
