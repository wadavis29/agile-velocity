const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../content/blog');

// URL mappings for internal pages - order matters (more specific patterns first)
const pageUrlMappings = [
  // Homepage with tracking params
  { pattern: /https?:\/\/agilevelocity\.com\/\?[^\s\)\"\]]+/g, replacement: '/' },

  // Homepage/root URL - should go to home or contact
  { pattern: /https?:\/\/agilevelocity\.com\/?(?=[\)\"\]])/g, replacement: '/' },

  // Resources (webinars, case studies)
  { pattern: /https?:\/\/agilevelocity\.com\/resources\/more-than-an-agile-assessment-webinar\/?/g, replacement: '/insights/webinars' },
  { pattern: /https?:\/\/agilevelocity\.com\/resources\/insurance-provider[^\s\)\"\]]*\/?/g, replacement: '/insights/case-studies' },
  { pattern: /https?:\/\/agilevelocity\.com\/resources\/how-to-get-leadership[^\s\)\"\]]*\/?/g, replacement: '/insights/webinars' },
  { pattern: /https?:\/\/agilevelocity\.com\/resources\/webinar[^\s\)\"\]]*\/?/g, replacement: '/insights/webinars' },
  { pattern: /https?:\/\/agilevelocity\.com\/case-study\/[^\s\)\"\]]+\/?/g, replacement: '/insights/case-studies' },

  // Insights with query params
  { pattern: /https?:\/\/agilevelocity\.com\/insights\/\?[^\s\)\"\]]+/g, replacement: '/insights' },

  // Scrum training courses
  { pattern: /https?:\/\/agilevelocity\.com\/scrum-training\/[^\s\)\"\]]+\/?/g, replacement: '/training/courses' },

  // Explore transformation section
  { pattern: /https?:\/\/agilevelocity\.com\/explore-transformation\/[^\s\)\"\]]+\/?/g, replacement: '/contact' },

  // URLs with tracking parameters (strip the params)
  { pattern: /https?:\/\/agilevelocity\.com\/([a-z0-9][-a-z0-9]*)\/?(?:\?[^\s\)\"\]]+)?/gi, replacement: '/blog/$1' },

  // Training - specific pages first
  { pattern: /https?:\/\/agilevelocity\.com\/training\/product-owner\/?/g, replacement: '/training/courses' },
  { pattern: /https?:\/\/agilevelocity\.com\/training\/certified-scrum-master\/?/g, replacement: '/training/courses' },
  { pattern: /https?:\/\/agilevelocity\.com\/agile-training\/public-workshops\/?/g, replacement: '/training/public-workshops' },
  { pattern: /https?:\/\/agilevelocity\.com\/agile-training\/?/g, replacement: '/training' },

  // Case studies / Resources
  { pattern: /https?:\/\/agilevelocity\.com\/insights\/case-studies\/?/g, replacement: '/insights/case-studies' },
  { pattern: /https?:\/\/agilevelocity\.com\/resources\/texas-mutual[^\s\)\"\]]*\/?/g, replacement: '/insights/case-studies' },
  { pattern: /https?:\/\/agilevelocity\.com\/resources\/agile-test-flight[^\s\)\"\]]*\/?/g, replacement: '/insights/case-studies' },
  { pattern: /https?:\/\/agilevelocity\.com\/resources\/benefits-of-ai[^\s\)\"\]]*\/?/g, replacement: '/insights/webinars' },
  { pattern: /https?:\/\/agilevelocity\.com\/resources\/an-outcomes-driven[^\s\)\"\]]*\/?/g, replacement: '/insights/webinars' },
  { pattern: /https?:\/\/agilevelocity\.com\/case-studies\/[^\s\)\"\]]+\/?/g, replacement: '/insights/case-studies' },

  // Webinars
  { pattern: /https?:\/\/agilevelocity\.com\/webinar-recording[^\s\)\"\]]*\/?/g, replacement: '/insights/webinars' },
  { pattern: /https?:\/\/agilevelocity\.com\/webinar[^\s\)\"\]]*\/?/g, replacement: '/insights/webinars' },

  // Services - more specific first
  { pattern: /https?:\/\/agilevelocity\.com\/agile-services\/agile-transformation\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/agile-services\/agile-assessment\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/agile-services\/safe\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/safe-agile-transformation\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/agile-transformation\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/team-agile-coaching\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/ai-implementation\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/ai-strategy\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/lean-portfolio-management\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/improve-agile-team-performance\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/agile-staffing\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/service-offerings\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/business-operations-consulting\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/buiness-operations-consulting\/?/g, replacement: '/contact' }, // typo in original
  { pattern: /https?:\/\/agilevelocity\.com\/leading-agile-change-management\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/value-stream-mapping\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/coaching\/organizational-agility-tuneup\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/coaching\/path-to-agility\/?/g, replacement: '/path-to-agility' },
  { pattern: /https?:\/\/agilevelocity\.com\/driving-agile-transformations\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/explore-transformation\/implementing-agile-rollout-options\/?/g, replacement: '/contact' },
  { pattern: /https?:\/\/agilevelocity\.com\/return-to-office-events\/?/g, replacement: '/contact' },

  // Path to Agility
  { pattern: /https?:\/\/agilevelocity\.com\/path-to-agility\/?/g, replacement: '/path-to-agility' },
  { pattern: /https?:\/\/pathtoagility\.com\/?/g, replacement: '/path-to-agility' },

  // Main sections
  { pattern: /https?:\/\/agilevelocity\.com\/about\/?/g, replacement: '/about' },
  { pattern: /https?:\/\/agilevelocity\.com\/contact\/?/g, replacement: '/contact' },

  // Blog posts - various URL patterns that should map to /blog/
  // Handle blog posts with category prefixes
  { pattern: /https?:\/\/agilevelocity\.com\/leadership\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/agile\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/team\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/coaching\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/scrummaster\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/product-owner\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/agile-tools\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/agile-marketing\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/video\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/article-([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },

  // Blog posts with /blog/ prefix
  { pattern: /https?:\/\/agilevelocity\.com\/blog\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },

  // Handle special blog-series and other patterns
  { pattern: /https?:\/\/agilevelocity\.com\/blog-series-([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },

  // More category-based blog URLs
  { pattern: /https?:\/\/agilevelocity\.com\/lean\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/scrum\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/transformation\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/uncategorized\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/article\/([^\/\s\)\"\]]+)\/?/g, replacement: '/blog/$1' },
  { pattern: /https?:\/\/agilevelocity\.com\/services\/([^\/\s\)\"\]]+)\/?/g, replacement: '/contact' },

  // Training page
  { pattern: /https?:\/\/agilevelocity\.com\/training\/?$/g, replacement: '/training' },

  // Case studies root
  { pattern: /https?:\/\/agilevelocity\.com\/case-studies\/?$/g, replacement: '/insights/case-studies' },

  // Path to Agility learn more
  { pattern: /https?:\/\/agilevelocity\.com\/learn-more-about-path-to-agility\/?/g, replacement: '/path-to-agility' },

  // Root-level blog posts (these are tricky - they're at agilevelocity.com/slug)
  // Common ones we found:
  { pattern: /https?:\/\/agilevelocity\.com\/agile-team-stability\/?/g, replacement: '/blog/agile-team-stability' },
  { pattern: /https?:\/\/agilevelocity\.com\/kanban-vs-scrum-how-to-choose\/?/g, replacement: '/blog/kanban-vs-scrum-how-to-choose' },
  { pattern: /https?:\/\/agilevelocity\.com\/kanban-best-practices-and-cheat-sheet\/?/g, replacement: '/blog/kanban-best-practices-and-cheat-sheet' },
  { pattern: /https?:\/\/agilevelocity\.com\/safe-pi-planning-series-pt1\/?/g, replacement: '/blog/safe-pi-planning-series-pt1' },
  { pattern: /https?:\/\/agilevelocity\.com\/safe-pi-planning-series-pt2-pi-planning-agenda\/?/g, replacement: '/blog/safe-pi-planning-series-pt2-pi-planning-agenda' },
  { pattern: /https?:\/\/agilevelocity\.com\/safe-pi-planning-series-pt3-remote-pi-planning\/?/g, replacement: '/blog/safe-pi-planning-series-pt3-remote-pi-planning' },
  { pattern: /https?:\/\/agilevelocity\.com\/what-is-agile-release-train\/?/g, replacement: '/blog/what-is-agile-release-train' },
  { pattern: /https?:\/\/agilevelocity\.com\/whose-agile-journey-is-it\/?/g, replacement: '/blog/whose-agile-journey-is-it' },
  { pattern: /https?:\/\/agilevelocity\.com\/6-signs-agile-teams-may-need-training\/?/g, replacement: '/blog/6-signs-agile-teams-may-need-training' },
  { pattern: /https?:\/\/agilevelocity\.com\/potentially-shippable-product-increment[^\s\)\"\]]*\/?/g, replacement: '/blog/potentially-shippable-product-increment' },
  { pattern: /https?:\/\/agilevelocity\.com\/the-importance-of-articulating-value-video\/?/g, replacement: '/blog/the-importance-of-articulating-value-video' },
  { pattern: /https?:\/\/agilevelocity\.com\/team-good-improvement\/?/g, replacement: '/blog/team-good-improvement' },
  { pattern: /https?:\/\/agilevelocity\.com\/video-conferencing-best-practices[^\s\)\"\]]*\/?/g, replacement: '/blog/video-conferencing-best-practices' },
  { pattern: /https?:\/\/agilevelocity\.com\/struggle-with-self-organizing-teams\/?/g, replacement: '/blog/struggle-with-self-organizing-teams' },
  { pattern: /https?:\/\/agilevelocity\.com\/blogget-started-story-points[^\s\)\"\]]*\/?/g, replacement: '/blog/get-started-story-points' },
  { pattern: /https?:\/\/agilevelocity\.com\/portfolio-and-budgeting-management-webinar\/?/g, replacement: '/insights/webinars' },
  { pattern: /https?:\/\/agilevelocity\.com\/lean-economics-101-the-power-of-wip-limits\/?/g, replacement: '/blog/lean-economics-101-the-power-of-wip-limits' },
  { pattern: /https?:\/\/agilevelocity\.com\/improve-cross-functional-collaboration\/?/g, replacement: '/blog/improve-cross-functional-collaboration' },
  { pattern: /https?:\/\/agilevelocity\.com\/dont-sprint-sprint-planning\/?/g, replacement: '/blog/dont-sprint-sprint-planning' },
  { pattern: /https?:\/\/agilevelocity\.com\/centralized-vs-decentralized-agile-transformations\/?/g, replacement: '/blog/centralized-vs-decentralized-agile-transformations' },
  { pattern: /https?:\/\/agilevelocity\.com\/c-suite-embracing-agile-forbes-response[^\s\)\"\]]*\/?/g, replacement: '/blog/c-suite-embracing-agile-forbes-response' },
  { pattern: /https?:\/\/agilevelocity\.com\/business-outcomes-part-ii[^\s\)\"\]]*\/?/g, replacement: '/blog/business-outcomes-part-ii' },
  { pattern: /https?:\/\/agilevelocity\.com\/backlog-refinement-first-class-citizen\/?/g, replacement: '/blog/backlog-refinement-first-class-citizen' },
  { pattern: /https?:\/\/agilevelocity\.com\/advanced-release-charting-template-part-1\/?/g, replacement: '/blog/advanced-release-charting-template-part-1' },
  { pattern: /https?:\/\/agilevelocity\.com\/3cs-checklist-download\/?/g, replacement: '/blog/3cs-checklist-download' },
  { pattern: /https?:\/\/agilevelocity\.com\/what-does-a-scrummaster-do-anyway\/?/g, replacement: '/blog/what-does-a-scrummaster-do-anyway' },
  { pattern: /https?:\/\/agilevelocity\.com\/the-need-for-speed-fast-product-delivery-business-agility\/?/g, replacement: '/blog/the-need-for-speed-fast-product-delivery-business-agility' },
  { pattern: /https?:\/\/agilevelocity\.com\/the-agile-c-suite-hbr-response\/?/g, replacement: '/blog/the-agile-c-suite-hbr-response' },
  { pattern: /https?:\/\/agilevelocity\.com\/the-3-principles-agile-leaders[^\s\)\"\]]*\/?/g, replacement: '/blog/the-3-principles-agile-leaders' },
  { pattern: /https?:\/\/agilevelocity\.com\/technical-skills-product-owner\/?/g, replacement: '/blog/technical-skills-product-owner' },
  { pattern: /https?:\/\/agilevelocity\.com\/story-mapping-101\/?/g, replacement: '/blog/story-mapping-101' },
  { pattern: /https?:\/\/agilevelocity\.com\/sprint-review\/?/g, replacement: '/blog/sprint-review' },
  { pattern: /https?:\/\/agilevelocity\.com\/sprint-review-is-more-than-a-demo[^\s\)\"\]]*\/?/g, replacement: '/blog/sprint-review-is-more-than-a-demo' },
  { pattern: /https?:\/\/agilevelocity\.com\/sprint-planning-cheat-sheet[^\s\)\"\]]*\/?/g, replacement: '/blog/sprint-planning-cheat-sheet' },

  // Catch-all for remaining root-level URLs that look like blog slugs
  // This should be last - matches any single-segment path that doesn't have special chars
  { pattern: /https?:\/\/agilevelocity\.com\/([a-z0-9][-a-z0-9]*[a-z0-9])\/?(?=[\s\)\"\]]|$)/gi, replacement: '/blog/$1' },
];

// For images, we'll just remove the domain and keep relative path
// Images from wp-content/uploads should become /images/blog/filename
const imageUrlPattern = /https?:\/\/agilevelocity\.com\/wp-content\/uploads\/\d{4}\/\d{2}\/([^\s\)\"\]]+)/g;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const fileName = path.basename(filePath);

  // Apply page URL mappings
  for (const mapping of pageUrlMappings) {
    if (mapping.pattern.test(content)) {
      content = content.replace(mapping.pattern, mapping.replacement);
      modified = true;
    }
    // Reset lastIndex for global patterns
    mapping.pattern.lastIndex = 0;
  }

  // Find remaining agilevelocity.com URLs that aren't images (for reporting)
  const remainingUrls = content.match(/https?:\/\/agilevelocity\.com\/[^\s\)\"\]]+/g);
  if (remainingUrls) {
    const nonImageUrls = remainingUrls.filter(url => !url.includes('wp-content/uploads'));
    if (nonImageUrls.length > 0) {
      console.log(`\n⚠️  ${fileName} has remaining URLs to review:`);
      nonImageUrls.forEach(url => console.log(`   ${url}`));
    }
  }

  // Handle image URLs
  const imageMatches = [...content.matchAll(imageUrlPattern)];
  if (imageMatches.length > 0) {
    imageMatches.forEach(match => {
      const fullUrl = match[0];
      const filename = match[1];
      content = content.replace(fullUrl, `/images/blog/${filename}`);
      modified = true;
    });
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${fileName}`);
  }

  return modified;
}

function main() {
  console.log('🔍 Scanning blog posts for agilevelocity.com URLs...\n');

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
