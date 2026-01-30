/**
 * Asterisk Cleanup Script
 *
 * Removes all asterisk-based formatting (bold, italic) from blog post content.
 * Preserves headings (#), converts asterisk list items (* → -), and leaves frontmatter intact.
 *
 * Usage:
 *   node scripts/cleanup-asterisks.js --dry-run    Preview changes
 *   node scripts/cleanup-asterisks.js              Execute cleanup
 *   node scripts/cleanup-asterisks.js --verbose    Show all changed files with diffs
 */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const BLOG_DIR = path.join(__dirname, '..', 'content', 'blog')
const args = process.argv.slice(2)
const isDryRun = args.includes('--dry-run')
const isVerbose = args.includes('--verbose') || isDryRun

function cleanAsterisks(content) {
  const lines = content.split('\n')
  const cleaned = lines.map(line => {
    // Convert asterisk list items to dash: "* item" → "- item"
    // Must happen BEFORE we strip asterisks
    if (/^\s*\*\s/.test(line)) {
      line = line.replace(/^(\s*)\*(\s)/, '$1-$2')
    }

    // Now strip all bold/italic asterisk formatting
    return cleanLine(line)
  })

  return cleaned.join('\n')
}

function cleanLine(line) {
  // Step 1: Remove *** (bold+italic markers)
  // Replace *** with nothing, preserving content between paired markers
  line = line.replace(/\*{3}/g, '')

  // Step 2: Remove ** (bold markers)
  // Simply strip all double-asterisks — this handles:
  //   **text** → text
  //   **text ** → text  (space preserved, cleaned up later)
  //   ** ** → (empty, cleaned up later)
  //   ****text** → text
  line = line.replace(/\*{2}/g, '')

  // Step 3: Remove single * used for italic formatting
  // Match *text* where text doesn't start or end with space (standard markdown italic)
  line = line.replace(/\*([^\s*](?:[^*]*[^\s*])?)\*/g, '$1')

  // Step 4: Remove ALL remaining asterisks
  // At this point, triple and double markers are gone, matched italic pairs are gone.
  // Any remaining * is a stray: mid-word, unpaired, or adjacent to links/punctuation.
  line = line.replace(/\*/g, '')

  // Step 5: Clean up artifacts
  // Multiple consecutive spaces → single space
  line = line.replace(/ {2,}/g, ' ')
  // Trailing whitespace
  line = line.replace(/\s+$/, '')

  return line
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

  let totalChanged = 0
  let totalUnchanged = 0
  let totalErrors = 0
  let totalLinesChanged = 0

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file)
    try {
      const raw = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(raw)

      const cleanedContent = cleanAsterisks(content)

      if (content !== cleanedContent) {
        totalChanged++

        const origLines = content.split('\n')
        const cleanLines = cleanedContent.split('\n')
        let lineChanges = 0
        const maxLen = Math.max(origLines.length, cleanLines.length)
        for (let i = 0; i < maxLen; i++) {
          if (origLines[i] !== cleanLines[i]) lineChanges++
        }
        totalLinesChanged += lineChanges

        if (isVerbose) {
          console.log(`[CHANGE] ${file} (${lineChanges} lines)`)
          let shown = 0
          for (let i = 0; i < maxLen && shown < 3; i++) {
            if (origLines[i] !== cleanLines[i]) {
              const orig = (origLines[i] || '').substring(0, 140)
              const clean = (cleanLines[i] || '').substring(0, 140)
              console.log(`  L${i + 1} OLD: ${orig}`)
              console.log(`  L${i + 1} NEW: ${clean}`)
              shown++
            }
          }
          if (lineChanges > 3) console.log(`  ... and ${lineChanges - 3} more changes`)
          console.log('')
        }

        if (!isDryRun) {
          const newRaw = matter.stringify(cleanedContent, data)
          fs.writeFileSync(filePath, newRaw, 'utf8')
        }
      } else {
        totalUnchanged++
      }
    } catch (err) {
      totalErrors++
      console.error(`[ERROR] ${file}: ${err.message}`)
    }
  }

  console.log('=== SUMMARY ===')
  console.log(`Total posts:      ${files.length}`)
  console.log(`Changed:          ${totalChanged}`)
  console.log(`Unchanged:        ${totalUnchanged}`)
  console.log(`Lines modified:   ${totalLinesChanged}`)
  console.log(`Errors:           ${totalErrors}`)

  if (isDryRun) {
    console.log('\nDry run complete. Run without --dry-run to apply changes.')
  } else {
    console.log('\nCleanup complete. All files updated.')
  }
}

run()
