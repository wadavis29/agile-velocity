const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../content/blog');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  const fileName = path.basename(filePath);

  // Fix missing space BEFORE links: word[link] -> word [link]
  // Match: letter followed by [ (but not already preceded by space)
  // Exclude cases where it's part of an image syntax ![
  content = content.replace(/([a-zA-Z])(\[(?!\!))/g, '$1 $2');

  // Fix missing space AFTER links: ](url)word -> ](url) word
  // Match: ) followed by letter (but not special markdown cases)
  content = content.replace(/(\]\([^\)]+\))([a-zA-Z])/g, '$1 $2');

  // Fix cases where there's a link followed immediately by punctuation then a letter
  // e.g., ](url),word -> ](url), word (less common but check)

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');

    // Count changes
    const beforeLinkFixes = (originalContent.match(/[a-zA-Z]\[(?!\!)/g) || []).length -
                            (content.match(/[a-zA-Z]\[(?!\!)/g) || []).length;
    const afterLinkFixes = (originalContent.match(/\]\([^\)]+\)[a-zA-Z]/g) || []).length -
                           (content.match(/\]\([^\)]+\)[a-zA-Z]/g) || []).length;

    console.log(`✅ ${fileName}: Fixed ${beforeLinkFixes} before-link + ${afterLinkFixes} after-link spacing issues`);
    return true;
  }

  return false;
}

function main() {
  console.log('🔍 Scanning blog posts for link spacing issues...\n');

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));
  let modifiedCount = 0;

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    if (processFile(filePath)) {
      modifiedCount++;
    }
  }

  console.log(`\n✨ Done! Modified ${modifiedCount} files.`);
}

main();
