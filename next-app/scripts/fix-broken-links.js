const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../content/blog');

// Patterns to fix - order matters (more specific first)
const linkFixes = [
  // ============================================
  // EXTERNAL LINKS -> INTERNAL WHITE PAPERS
  // ============================================

  // 8 Common Pitfalls white paper
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/8-common-agile-transformation-pitfalls-white-paper\)/g, replacement: '](/insights/white-papers/8-common-pitfalls-agile-transformation)' },
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/8-common-agile-transformation-pitfalls\)/g, replacement: '](/insights/white-papers/8-common-pitfalls-agile-transformation)' },

  // Are You Ready / Transformation Readiness white paper
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/agile-transformation-readiness-white-paper\)/g, replacement: '](/insights/white-papers/are-you-ready-for-agile-transformation)' },
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/agile-transformation-readiness\)/g, replacement: '](/insights/white-papers/are-you-ready-for-agile-transformation)' },

  // Build High Performing Teams white paper
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/build-strong-teams-through-trust-and-alignment[^)]*\)/g, replacement: '](/insights/white-papers/build-high-performing-teams-trust-alignment)' },

  // Agile for Executives white paper
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/agile-for-executives-white-paper\)/g, replacement: '](/insights/white-papers/agile-for-executives)' },
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/agile-for-executives\)/g, replacement: '](/insights/white-papers/agile-for-executives)' },

  // SAFe Implementation Guide / Beginner's Guide to SAFe white paper
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/safe-implementation-guide-white-paper\)/g, replacement: '](/insights/white-papers/beginners-guide-understanding-safe)' },
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/safe-implementation-guide\)/g, replacement: '](/insights/white-papers/beginners-guide-understanding-safe)' },

  // How to Get Leadership On Board white paper
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/download-get-leader-on-board-with-agile-transformation\)/g, replacement: '](/insights/white-papers/how-to-get-leadership-on-board)' },
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/get-leader-on-board[^)]*\)/g, replacement: '](/insights/white-papers/how-to-get-leadership-on-board)' },

  // Agile Implementation Options infographic/white paper
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/agile-implementation-rollout-options\/?[^)]*\)/g, replacement: '](/insights/white-papers/agile-implementation-options)' },

  // ============================================
  // EXTERNAL LINKS -> INTERNAL WEBINARS
  // ============================================

  // Flow Metrics webinar
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/flow-metrics-for-scrum-teams-webinar\)/g, replacement: '](/insights/webinars)' },

  // Hybrid Team Performance webinar
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/hybrid-team-performance-webinar-recording\)/g, replacement: '](/insights/webinars)' },

  // Agile Trends 2019 webinar (old, redirect to webinars list)
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/agile-trends-2019-webinar-recording\)/g, replacement: '](/insights/webinars)' },

  // ============================================
  // EXTERNAL LINKS -> CASE STUDIES / CONTACT
  // ============================================

  // Southwest Airlines case study -> webinar or contact (handle both http and https)
  { pattern: /\]\(https?:\/\/info\.agilevelocity\.com\/download-southwest-transformation-story-agile-velocity[^)]*\)/g, replacement: '](/insights/webinars/southwest-airlines-transformation)' },
  { pattern: /\]\(https?:\/\/info\.agilevelocity\.com\/southwest-airlines-agile-marketing-case-study-agile-velocity[^)]*\)/g, replacement: '](/insights/webinars/southwest-airlines-transformation)' },

  // Texas Mutual case study -> contact (no dedicated page)
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/download-agile-case-study-texas-mutual-insurance-agile-velocity\)/g, replacement: '](/contact)' },

  // Agile ROI -> contact
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/agile-roi\)/g, replacement: '](/insights/webinars/gain-maximum-roi-agile)' },

  // Path to Agility worksheet -> Navigator page
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/path-to-agility-worksheet\)/g, replacement: '](/path-to-agility/navigator)' },

  // Technical Debt Game -> contact (resource download)
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/the-technical-debt-game[^)]*\)/g, replacement: '](/contact)' },

  // Providing Feedback resource -> contact
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/providing-feedback\)/g, replacement: '](/contact)' },

  // HubSpot CTA redirects -> remove or convert (http and https)
  { pattern: /\]\(https?:\/\/cta-redirect\.hubspot\.com\/[^)]+\)/g, replacement: '](/contact)' },

  // HubSpot hosted files -> contact or remove
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/hubfs\/[^)]+\)/g, replacement: '](/contact)' },

  // Catch-all for remaining info.agilevelocity.com links -> contact
  { pattern: /\]\(https:\/\/info\.agilevelocity\.com\/[^)]+\)/g, replacement: '](/contact)' },

  // ============================================
  // OLD WORDPRESS SITE LINKS (www.agilevelocity.com)
  // ============================================

  // Contact page
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/contact\/?[^)]*\)/g, replacement: '](/contact)' },

  // Training/Events -> /training/courses
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/event\/[^)]+\)/g, replacement: '](/training/courses)' },
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/training[^)]*\)/g, replacement: '](/training)' },

  // Specific blog posts -> /blog/slug
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/blog\/([^)\/]+)\/?[^)]*\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/blog-series-([^)\/]+)\/?[^)]*\)/g, replacement: '](/blog/$1)' },

  // Old category URLs -> blog posts
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/agile\/([^)\/]+)\/?[^)]*\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/scrum\/([^)\/]+)\/?[^)]*\)/g, replacement: '](/blog/$1)' },

  // Specific slug-only posts (no /blog/ prefix on old site)
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/(using-agile-deliver-double-value-half-time-series)\/?[^)]*\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/(potentially-shippable-product-increment-pspi-rosetta-stone-software-development)\/?[^)]*\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/(prioritize)\/?[^)]*\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/(daily-scrums-awesome)\/?[^)]*\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/(driving-agile-transformations)\/?[^)]*\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/(providing-slack-agile-transformations)\/?[^)]*\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/(in-an-agile-transformation-transparency-is-to-empower-not-to-micromanage)\/?[^)]*\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/(behavior-driven-development-steps-implement-part)\/?[^)]*\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/(product-owners-guide-keys-product-planning)\/?[^)]*\)/g, replacement: '](/blog/$1)' },

  // Homepage link -> /
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/?(?:\))/g, replacement: '](/)' },

  // Google redirect URLs containing agilevelocity.com -> extract destination or use contact
  { pattern: /\]\(https?:\/\/www\.google\.com\/url\?[^)]*agilevelocity\.com[^)]*\)/g, replacement: '](/contact)' },

  // YouTube redirect URLs containing agilevelocity.com -> remove or simplify
  { pattern: /\]\(https?:\/\/www\.youtube\.com\/redirect\?[^)]*agilevelocity\.com[^)]*\)/g, replacement: '](/blog)' },

  // Catch-all for remaining www.agilevelocity.com links -> contact
  { pattern: /\]\(https?:\/\/www\.agilevelocity\.com\/[^)]+\)/g, replacement: '](/contact)' },

  // ============================================
  // PATH TO AGILITY NAVIGATOR LINKS
  // ============================================

  // Path to Agility Navigator links should go to /path-to-agility/navigator, not /path-to-agility
  { pattern: /\[Path to Agility Navigator\]\(\/path-to-agility\)/g, replacement: '[Path to Agility Navigator](/path-to-agility/navigator)' },
  { pattern: /\[Path to Agility® Navigator\]\(\/path-to-agility\)/g, replacement: '[Path to Agility® Navigator](/path-to-agility/navigator)' },
  { pattern: /\[Path to Agility® Navigator,\]\(\/path-to-agility\)/g, replacement: '[Path to Agility® Navigator](/path-to-agility/navigator)' },
  { pattern: /\[Path to Agility® Navigator\.\]\(\/path-to-agility\)/g, replacement: '[Path to Agility® Navigator](/path-to-agility/navigator).' },
  { pattern: /\[Path to Agility® Navigator software\]\(\/path-to-agility\)/g, replacement: '[Path to Agility® Navigator](/path-to-agility/navigator)' },
  { pattern: /\[Path to Agility Navigator software\]\(\/path-to-agility\)/g, replacement: '[Path to Agility Navigator](/path-to-agility/navigator)' },
  { pattern: /\[The Path to Agility® Navigator\]\(\/path-to-agility\)/g, replacement: '[Path to Agility® Navigator](/path-to-agility/navigator)' },
  { pattern: /\[The Path to Agility Navigator\]\(\/path-to-agility\)/g, replacement: '[Path to Agility Navigator](/path-to-agility/navigator)' },

  // /services/* pages don't exist on new site - redirect to /contact
  { pattern: /\]\(\/services\/[^)]+\)/g, replacement: '](/contact)' },

  // Missing slash between path segments - path-to-agilityblog -> /blog
  { pattern: /\]\(\/path-to-agilityblog\/([^)]+)\)/g, replacement: '](/blog/$1)' },

  // path-to-agilityrequest-a-demo -> /contact
  { pattern: /\]\(\/path-to-agilityrequest-a-demo\/?\)/g, replacement: '](/contact)' },

  // path-to-agilitylearn-about-path-to-agility -> /path-to-agility
  { pattern: /\]\(\/path-to-agilitylearn-about-path-to-agility\/?\)/g, replacement: '](/path-to-agility)' },

  // path-to-agilitysolutions/* -> /contact or appropriate page
  { pattern: /\]\(\/path-to-agilitysolutions\/agile-transformation-management\/?\)/g, replacement: '](/contact)' },
  { pattern: /\]\(\/path-to-agilitysolutions\/evaluate-safe-implementation\/?\)/g, replacement: '](/contact)' },
  { pattern: /\]\(\/path-to-agilitysolutions\/improve-organizational-agility\/?\)/g, replacement: '](/contact)' },
  { pattern: /\]\(\/path-to-agilitysolutions\/team-improvement\/?\)/g, replacement: '](/contact)' },
  { pattern: /\]\(\/path-to-agilitysolutions\/?\)/g, replacement: '](/contact)' },

  // path-to-agilityfeatures/* -> /path-to-agility/navigator
  { pattern: /\]\(\/path-to-agilityfeatures\/[^)]*\)/g, replacement: '](/path-to-agility/navigator)' },

  // path-to-agilitycontact -> /contact
  { pattern: /\]\(\/path-to-agilitycontact\/?\)/g, replacement: '](/contact)' },

  // path-to-agilityabout -> /about
  { pattern: /\]\(\/path-to-agilityabout\/?\)/g, replacement: '](/about)' },

  // path-to-agilitypartner-agile-coaches -> /contact
  { pattern: /\]\(\/path-to-agilitypartner-agile-coaches\/?\)/g, replacement: '](/contact)' },

  // path-to-agilitycertification-workshop -> /training/courses
  { pattern: /\]\(\/path-to-agilitycertification-workshop\/?\)/g, replacement: '](/training/courses)' },

  // path-to-agilityresources -> /blog
  { pattern: /\]\(\/path-to-agilityresources\/?\)/g, replacement: '](/blog)' },

  // path-to-agilitywp-content/uploads/* -> /images/blog/filename
  { pattern: /\]\(\/path-to-agilitywp-content\/uploads\/\d{4}\/\d{2}\/([^)]+)\)/g, replacement: '](/images/blog/$1)' },

  // Other path-to-agility* patterns -> /path-to-agility
  { pattern: /\]\(\/path-to-agility(?:an-outcomes-driven|yo-yo-transformations|unlocking-innovation)[^)]*\)/g, replacement: '](/path-to-agility)' },
  { pattern: /\]\(\/path-to-agilitypath-agility[^)]*\)/g, replacement: '](/path-to-agility)' },

  // trainingcorporate-agile-training -> /training/for-organizations
  { pattern: /\]\(\/trainingcorporate-agile-training\/?\)/g, replacement: '](/training/for-organizations)' },

  // trainingprivate-training/* -> /training/courses or /training/for-organizations
  { pattern: /\]\(\/trainingprivate-training\/certified-scrum-product-owner\/?\)/g, replacement: '](/training/courses)' },
  { pattern: /\]\(\/trainingprivate-training\/certified-scrummaster\/?\)/g, replacement: '](/training/courses)' },
  { pattern: /\]\(\/trainingprivate-training\/kanban-training\/?\)/g, replacement: '](/training/courses)' },
  { pattern: /\]\(\/trainingprivate-training\/safe-release-train-engineer\/?\)/g, replacement: '](/training/courses)' },
  { pattern: /\]\(\/trainingprivate-training\/lean-portfolio-management\/?\)/g, replacement: '](/training/courses)' },
  { pattern: /\]\(\/trainingprivate-training\/certified-agile-leader[^)]*\)/g, replacement: '](/training/courses)' },
  { pattern: /\]\(\/trainingprivate-training\/agile-and-scrum-for-teams\/?\)/g, replacement: '](/training/courses)' },
  { pattern: /\]\(\/trainingprivate-training\/advanced-cert[^)]*\)/g, replacement: '](/training/courses)' },
  { pattern: /\]\(\/trainingprivate-training\/safe-for-lean[^)]*\)/g, replacement: '](/training/courses)' },
  { pattern: /\]\(\/trainingprivate-training\/path-to-agil[^)]*\)/g, replacement: '](/training/courses)' },
  { pattern: /\]\(\/trainingprivate-training\/leading-safe[^)]*\)/g, replacement: '](/training/courses)' },
  { pattern: /\]\(\/trainingprivate-training\/executive[^)]*\)/g, replacement: '](/training/courses)' },
  { pattern: /\]\(\/trainingprivate-training\/?\)/g, replacement: '](/training/for-organizations)' },

  // /training without trailing content -> /training (keep as is, just ensure it's valid)
  // Actually these are fine, /training exists

  // Old WordPress category URLs
  { pattern: /\]\(\/scrum-assessment-series\/?\)/g, replacement: '](/blog)' },
  { pattern: /\]\(\/scrum\/([^)]+)\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(\/agile\/([^)]+)\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(\/agile-transformation\/([^)]+)\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(\/agile-technical-practices\/([^)]+)\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(\/agile-coaching\/([^)]+)\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(\/technical-practices\/([^)]+)\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(\/leadership\/([^)]+)\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(\/uncategorized\/([^)]+)\)/g, replacement: '](/blog/$1)' },

  // /blog/* that didn't get converted -> /blog/*
  { pattern: /\]\(\/blog\/([^)]+)\)/g, replacement: '](/blog/$1)' },
  { pattern: /\]\(\/blog-series-([^)]+)\)/g, replacement: '](/blog/$1)' },

  // Standalone slugs that look like blog posts
  { pattern: /\]\(\/its-not-just-about-process-2\/?\)/g, replacement: '](/blog/its-not-just-about-process-2)' },
  { pattern: /\]\(\/great-video-to-explain-agile-to-biz-folks\/?\)/g, replacement: '](/blog/great-video-to-explain-agile-to-biz-folks)' },
  { pattern: /\]\(\/driving-agile-transformations\/?\)/g, replacement: '](/blog/driving-agile-transformations)' },
  { pattern: /\]\(\/5-reasons-why-estimating-in-story-points[^)]*\)/g, replacement: '](/blog/5-reasons-why-estimating-in-story-points-is-a-superior-method)' },
  { pattern: /\]\(\/agile-kanban-scrum-excel-reporting-templates\/?\)/g, replacement: '](/blog/agile-kanban-scrum-excel-reporting-templates)' },
  { pattern: /\]\(\/team-good-improvement\/?\)/g, replacement: '](/blog/team-good-improvement)' },

  // /careers -> /about (or /contact)
  { pattern: /\]\(\/careers\/?\)/g, replacement: '](/about)' },

  // /insights without /blog -> /blog
  { pattern: /\]\(\/insights\)/g, replacement: '](/blog)' },

  // path-to-agility-navigator -> /path-to-agility/navigator
  { pattern: /\]\(\/path-to-agility-navigator\/?\)/g, replacement: '](/path-to-agility/navigator)' },
  { pattern: /\]\(\/path-to-agility-features\/?\)/g, replacement: '](/path-to-agility/navigator)' },

  // Fix double slashes in slideshare links (these are external, convert to https)
  { pattern: /\]\(\/\/www\.slideshare\.net/g, replacement: '](https://www.slideshare.net' },

  // Fix agilevelocity.com links that slipped through
  { pattern: /\]\(\/\/agilevelocity\.com\/([^)]+)\)/g, replacement: '](/blog/$1)' },

  // Clean up trailing slashes for consistency
  { pattern: /\]\(\/([^)]+)\/\)/g, replacement: ']($1)' },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  const fileName = path.basename(filePath);

  let totalFixes = 0;

  for (const { pattern, replacement } of linkFixes) {
    const matches = content.match(pattern);
    if (matches) {
      totalFixes += matches.length;
    }
    content = content.replace(pattern, replacement);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${fileName}: Fixed ${totalFixes} broken links`);
    return true;
  }

  return false;
}

function main() {
  console.log('🔗 Scanning blog posts for broken links...\n');

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));
  let modifiedCount = 0;
  let totalFixes = 0;

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    if (processFile(filePath)) {
      modifiedCount++;
    }
  }

  console.log(`\n✨ Done! Modified ${modifiedCount} files.`);
}

main();
