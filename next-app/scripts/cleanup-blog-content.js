/**
 * Blog Content Cleanup Script
 *
 * Cleans up messy WordPress formatting in MDX files:
 * - Removes excessive whitespace
 * - Converts pull quotes to proper blockquote format
 * - Converts CTA boxes to proper component format
 * - Fixes broken markdown
 *
 * Usage: node scripts/cleanup-blog-content.js
 */

const fs = require('fs')
const path = require('path')

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

// Get all MDX files
function getMdxFiles() {
  return fs.readdirSync(BLOG_DIR)
    .filter(file => file.endsWith('.mdx'))
    .map(file => path.join(BLOG_DIR, file))
}

// Replace smart/curly quotes and invisible chars in body text
function fixSmartQuotes(text) {
  return text
    .replace(/\u2018/g, "'")   // left single
    .replace(/\u2019/g, "'")   // right single / apostrophe
    .replace(/\u201C/g, '"')   // left double
    .replace(/\u201D/g, '"')   // right double
    .replace(/\u2013/g, '-')   // en dash -> hyphen
    .replace(/\u2014/g, '--')  // em dash -> double hyphen
    .replace(/\u2026/g, '...') // ellipsis
    .replace(/\u00A0/g, ' ')   // non-breaking space -> regular space
    .replace(/\u200B/g, '')    // zero-width space
    .replace(/\uFEFF/g, '')    // byte order mark
    .replace(/\u200C/g, '')    // zero-width non-joiner
    .replace(/\u200D/g, '')    // zero-width joiner
}

// Fix smart quotes in YAML frontmatter without breaking quoted strings
function fixFrontmatterQuotes(frontmatter) {
  return frontmatter.split('\n').map(line => {
    // Match YAML key: "value" pattern
    const yamlMatch = line.match(/^(\w+):\s*"(.*)"$/)
    if (yamlMatch) {
      const key = yamlMatch[1]
      let value = yamlMatch[2]
      // Replace curly double quotes inside the value with single quotes
      value = value.replace(/\u201C/g, "'").replace(/\u201D/g, "'")
      // Also fix already-converted straight double quotes inside the value
      // (from a previous run that broke things)
      // We need to detect unescaped " inside the value
      // Replace inner " with ' to keep YAML valid
      value = value.replace(/(?<!\\)"/g, "'")
      // Replace curly single quotes and other chars
      value = value
        .replace(/\u2018/g, "'")
        .replace(/\u2019/g, "'")
        .replace(/\u2013/g, '-')
        .replace(/\u2014/g, '--')
        .replace(/\u2026/g, '...')
        .replace(/\u00A0/g, ' ')
        .replace(/[\u200B\uFEFF\u200C\u200D]/g, '')
      return `${key}: "${value}"`
    }
    // Match YAML key: ["item1","item2"] pattern (categories)
    const arrayMatch = line.match(/^(\w+):\s*\[(.+)\]$/)
    if (arrayMatch) {
      const key = arrayMatch[1]
      let items = arrayMatch[2]
      items = items
        .replace(/\u201C/g, "'").replace(/\u201D/g, "'")
        .replace(/\u2018/g, "'").replace(/\u2019/g, "'")
        .replace(/\u00A0/g, ' ')
        .replace(/[\u200B\uFEFF\u200C\u200D]/g, '')
      return `${key}: [${items}]`
    }
    // For non-quoted lines, do simple replacements
    return line
      .replace(/\u2018/g, "'").replace(/\u2019/g, "'")
      .replace(/\u201C/g, '"').replace(/\u201D/g, '"')
      .replace(/\u00A0/g, ' ')
      .replace(/[\u200B\uFEFF\u200C\u200D]/g, '')
  }).join('\n')
}

// Clean up content
function cleanContent(content) {
  let cleaned = content

  // Split frontmatter and content
  const frontmatterMatch = cleaned.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!frontmatterMatch) return content

  let frontmatter = frontmatterMatch[1]
  let body = frontmatterMatch[2]

  // 0a. Fix smart quotes in frontmatter (titles, excerpts) - YAML-safe
  frontmatter = fixFrontmatterQuotes(frontmatter)

  // 0b. Fix smart quotes in body
  body = fixSmartQuotes(body)

  // 0c. Replace tab characters with spaces in body
  body = body.replace(/\t/g, ' ')

  // 1. Remove excessive blank lines and whitespace-only lines
  body = body.replace(/\n[\t ]*\n[\t ]*\n/g, '\n\n')
  body = body.replace(/\n{3,}/g, '\n\n')

  // 2. Clean up pull quotes pattern:
  // Pattern: whitespace, quote text, whitespace, ##### – Author
  // Convert to: > quote text
  //             > — Author
  body = body.replace(
    /[\t ]*\n[\t ]*\n[\t ]*\n[\t ]*\n[\t ]*\n[\t ]*"([^"]+)"[\t ]*\n[\t ]*\n[\t ]*\n[\t ]*\n[\t ]*#####\s*–\s*([^\n]+)[\t ]*\n[\t ]*\n[\t ]*\n[\t ]*\n[\t ]*\n[\t ]*\n[\t ]*/g,
    '\n\n> "$1"\n> \n> — $2\n\n'
  )

  // 3. Another pattern for quotes (less whitespace)
  body = body.replace(
    /\n\s*\n\s*\n\s*"([^"]+)"\s*\n\s*\n\s*#####\s*–\s*([^\n]+)\s*\n\s*\n/g,
    '\n\n> "$1"\n> \n> — $2\n\n'
  )

  // 3b. Simple quote + attribution pattern (just single newlines)
  body = body.replace(
    /"([^"]+)"\n\n#####\s*[–—-]\s*([^\n]+)/g,
    '> "$1"\n> \n> — $2'
  )

  // 3c. Quote without quotes but with attribution
  body = body.replace(
    /\n([A-Z][^"\n]{20,}[.!?])\n\n#####\s*[–—-]\s*([^\n]+)/g,
    '\n\n> "$1"\n> \n> — $2'
  )

  // 4. Clean up standalone quotes in whitespace blocks
  body = body.replace(
    /\n[\t ]*\n[\t ]*\n[\t ]*\n[\t ]*"([^"]+)"[\t ]*\n[\t ]*\n[\t ]*\n[\t ]*\n/g,
    '\n\n> "$1"\n\n'
  )

  // 5. CTA Box pattern - convert to component syntax
  // Pattern: ## Title, description text, [Button Text](url)
  body = body.replace(
    /\n[\t ]*\n[\t ]*\n[\t ]*\n[\t ]*## \s*\n\s*([^\n]+)\s*\n[\t ]*\n[\t ]*\n[\t ]*\n[\t ]*([^[\n]+)\s*\n[\t ]*\n[\t ]*\n[\t ]*\[\s*\n?\s*([^\]]+)\s*\]\(([^)]+)\)[\s\t]*\n[\t ]*\n[\t ]*\n[\t ]*\n/g,
    '\n\n<div className="blog-cta-box">\n\n### $1\n\n$2\n\n[$3]($4)\n\n</div>\n\n'
  )

  // 6. Simpler CTA pattern
  body = body.replace(
    /\n\s*##\s*\n\s*([^\n]+)\s*\n\s*\n\s*([^[]+)\s*\n\s*\[\s*([^\]]+)\s*\]\(([^)]+)\)\s*\n/g,
    '\n\n<div className="blog-cta-box">\n\n### $1\n\n$2\n\n[$3]($4)\n\n</div>\n\n'
  )

  // 7. Clean up images wrapped in extra whitespace
  body = body.replace(
    /\n[\t ]*\n[\t ]*\n[\t ]*(\!\[[^\]]*\]\([^)]+\))[\t ]*\n[\t ]*\n[\t ]*\n/g,
    '\n\n$1\n\n'
  )

  // 8. Clean up duplicate images (same image appearing twice)
  const imagePattern = /(\!\[[^\]]*\]\([^)]+\))\s*\n\s*\n\s*\1/g
  body = body.replace(imagePattern, '$1')

  // 9. Remove lines that are just tabs/spaces
  body = body.replace(/\n[\t ]+\n/g, '\n\n')

  // 10. Clean excessive newlines again after all replacements
  body = body.replace(/\n{3,}/g, '\n\n')

  // 11. Trim trailing whitespace from lines
  body = body.split('\n').map(line => line.trimEnd()).join('\n')

  // 12. Clean up broken link formatting
  body = body.replace(/\[\s*\n\s*([^\]]+)\s*\n?\s*\]\(/g, '[$1](')

  // 13. Remove tab-indentation before images
  body = body.replace(/\n\t+(\!\[[^\]]*\]\([^)]+\))/g, '\n$1')

  // 14. Remove stray asterisks on their own lines
  body = body.replace(/\n\s*\*\s*\n/g, '\n\n')

  // 15. Remove isolated ##### lines (attribution without quote)
  body = body.replace(/\n#####\s*[–—-]\s*[^\n]+\s*\n/g, '\n')

  // 16. Clean up redundant bylines - author is already in post metadata
  // Pattern: Multi-line bylines starting with *By
  body = body.replace(/^\*By [^*]+\*\s*\n+/gm, '')
  // Pattern: Single-line *By Author (unclosed)
  body = body.replace(/^\*By [^\n]+\n+/gm, '')
  // Pattern: Leftover co-hosted/co-authored lines with closing asterisk
  body = body.replace(/^Co-hosted [^*]+\*\s*\n+/gmi, '')
  body = body.replace(/^Co-authored [^*]+\*\s*\n+/gmi, '')
  // Pattern: **Author:** Name or *Author:* Name
  body = body.replace(/^\*?\*?Author:\*?\*?\s*[^\n]+\n+/gm, '')

  // 18. Remove trailing stray asterisk at end of lines (WordPress artifact)
  // Match " *" at end of line but NOT "**" (bold) or "* " (list)
  body = body.replace(/ \*$/gm, '')

  // 19. Remove [*](url) links - empty WordPress image references
  body = body.replace(/\[\*\]\([^)]+\)\s*/g, '')

  // 20. Fix broken italic blocks: *text * -> *text*
  // Where there's a space before the closing asterisk
  body = body.replace(/\*([^*\n]+) \*/g, '*$1*')

  // 23. Remove standalone ** on their own lines (broken WordPress bold)
  body = body.replace(/\n\*\*\s*\n/g, '\n')

  // 24. Fix headings with unclosed ** like "### **Title Text"
  body = body.replace(/^(#{1,6})\s*\*\*(.+)$/gm, '$1 $2')

  // 25. Remove trailing ** from end of paragraphs (orphaned bold close)
  body = body.replace(/\*\*\s*$/gm, (match, offset, str) => {
    // Only remove if this looks like an orphaned closer, not a legit bold end
    // Check if there's an opening ** earlier on the same line
    const lineStart = str.lastIndexOf('\n', offset - 1) + 1
    const lineBeforeMatch = str.substring(lineStart, offset)
    const openCount = (lineBeforeMatch.match(/\*\*/g) || []).length
    // If there's an odd number of ** before this one, it's a legit closing
    if (openCount % 2 === 1) return match
    // Otherwise it's orphaned, remove it
    return ''
  })

  // 26. Fix "**text:" at start of line with no closing (broken bold label)
  body = body.replace(/^\*\*([^*\n]+):\s*$/gm, '**$1:**')

  // 27a. Collapse **** (double bold markers) into **
  // WordPress stacked bold tags create these
  body = body.replace(/\*{4,}/g, '**')

  // 27b. Fix bold closing ** with no space before next word
  // e.g. "**Bold Text:**Next" -> "**Bold Text:** Next"
  // Only match closing ** (preceded by non-whitespace, non-asterisk)
  body = body.replace(/([^\s*])\*\*([A-Za-z])/g, '$1** $2')

  // 27c. Fix bold opening ** with no space after previous word
  // e.g. "word**Bold" -> "word **Bold"
  // Only match opening ** (followed by non-whitespace, non-asterisk)
  body = body.replace(/([a-z])\*\*([A-Z])/g, '$1 **$2')

  // 27. Remove empty headings (## with nothing after)
  body = body.replace(/^#{1,6}\s*$/gm, '')

  // 28. Remove whitespace-only links [ ](url) or [   ](url)
  body = body.replace(/\[\s+\]\([^)]+\)/g, '')

  // 29. Convert ##### and ###### to ### (too-deep headings from WordPress)
  body = body.replace(/^######\s+/gm, '### ')
  body = body.replace(/^#####\s+/gm, '### ')

  // 30. Collapse multiple spaces into single space (from tab replacement)
  body = body.replace(/ {2,}/g, ' ')

  // 31. Clean up link text with excessive internal whitespace from tabs
  body = body.replace(/\[\s*([^\]\n]+?)\s*\]/g, '[$1]')

  // 17. Final cleanup of multiple newlines
  body = body.replace(/\n{3,}/g, '\n\n')

  // Trim leading/trailing whitespace from body
  body = '\n' + body.trim() + '\n'

  // Reconstruct the file
  return `---\n${frontmatter}\n---\n${body}`
}

// Process all files
function processFiles() {
  const files = getMdxFiles()
  console.log(`Found ${files.length} MDX files to process\n`)

  let updated = 0
  let unchanged = 0

  for (const file of files) {
    const filename = path.basename(file)
    const original = fs.readFileSync(file, 'utf8')
    const cleaned = cleanContent(original)

    if (cleaned !== original) {
      fs.writeFileSync(file, cleaned, 'utf8')
      console.log(`✓ Cleaned: ${filename}`)
      updated++
    } else {
      unchanged++
    }
  }

  console.log(`\n${'='.repeat(40)}`)
  console.log(`Updated: ${updated}`)
  console.log(`Unchanged: ${unchanged}`)
  console.log(`Total: ${files.length}`)
}

processFiles()
