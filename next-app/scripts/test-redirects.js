#!/usr/bin/env node

/**
 * Redirect Test Script for Agile Velocity
 *
 * Usage:
 *   node scripts/test-redirects.js                    # Test against localhost:3000
 *   node scripts/test-redirects.js https://example.com  # Test against custom URL
 *
 * Prerequisites:
 *   - Run `npm run build && npm run start` first for local testing
 */

const BASE_URL = process.argv[2] || 'http://localhost:3000';

// Priority redirects to test (old URL → expected new URL)
const REDIRECTS_TO_TEST = [
  // P0 - Critical: Main Pages
  { from: '/about/meet-the-team/', to: '/about/team', priority: 'P0' },
  { from: '/about/meet-the-team', to: '/about/team', priority: 'P0' },
  { from: '/contact-us/', to: '/contact', priority: 'P0' },
  { from: '/insights/white-pages/', to: '/insights/white-papers', priority: 'P0' },

  // P0 - Critical: Path to Agility
  { from: '/path-to-agility-features/', to: '/path-to-agility', priority: 'P0' },
  { from: '/path-to-agility-partner/', to: '/path-to-agility', priority: 'P0' },
  { from: '/learn-more-about-path-to-agility/', to: '/path-to-agility', priority: 'P0' },

  // P1 - Service Pages → Homepage
  { from: '/agile-transformation/', to: '/', priority: 'P1' },
  { from: '/agile-transformation', to: '/', priority: 'P1' },
  { from: '/safe-agile-transformation/', to: '/', priority: 'P1' },
  { from: '/team-agile-coaching/', to: '/', priority: 'P1' },
  { from: '/agile-coaching/', to: '/', priority: 'P1' },
  { from: '/ai-implementation/', to: '/', priority: 'P1' },
  { from: '/agile-staffing/', to: '/', priority: 'P1' },
  { from: '/lean-portfolio-management/', to: '/', priority: 'P1' },

  // P1 - Training Pages → /training
  { from: '/agile-training/', to: '/training', priority: 'P1' },
  { from: '/agile-training/corporate-agile-training/', to: '/training', priority: 'P1' },
  { from: '/agile-training/public-workshops/', to: '/training', priority: 'P1' },
  { from: '/agile-training/private-training/', to: '/training', priority: 'P1' },
  { from: '/agile-training/private-training/certified-scrummaster/', to: '/training', priority: 'P1' },
  { from: '/agile-training/safe-agile-training/', to: '/training', priority: 'P1' },

  // P1 - Resources/Insights
  { from: '/resources/', to: '/insights', priority: 'P1' },
  { from: '/resources/some-case-study/', to: '/insights/case-studies', priority: 'P1' },
  { from: '/case-studies/', to: '/insights/case-studies', priority: 'P1' },
  { from: '/library/', to: '/insights', priority: 'P1' },
  { from: '/library/agile-whitepapers/', to: '/insights/white-papers', priority: 'P1' },

  // P1 - Legacy Blog Paths (category/slug → /blog/slug)
  { from: '/agile/some-blog-post/', to: '/blog/some-blog-post', priority: 'P1' },
  { from: '/scrum/some-blog-post/', to: '/blog/some-blog-post', priority: 'P1' },
  { from: '/leadership/some-blog-post/', to: '/blog/some-blog-post', priority: 'P1' },
  { from: '/lean/some-blog-post/', to: '/blog/some-blog-post', priority: 'P1' },
  { from: '/article/some-blog-post/', to: '/blog/some-blog-post', priority: 'P1' },
  { from: '/scrummaster/some-blog-post/', to: '/blog/some-blog-post', priority: 'P1' },
  { from: '/product-owner/some-blog-post/', to: '/blog/some-blog-post', priority: 'P1' },
  { from: '/agile-transformation/some-blog-post/', to: '/blog/some-blog-post', priority: 'P1' },

  // P1 - Category pages → /blog
  { from: '/agile/', to: '/blog', priority: 'P1' },
  { from: '/scrum/', to: '/blog', priority: 'P1' },
  { from: '/lean/', to: '/blog', priority: 'P1' },
  { from: '/featured/', to: '/blog', priority: 'P1' },
  { from: '/article/', to: '/blog', priority: 'P1' },

  // P2 - Events & Misc
  { from: '/events/', to: '/', priority: 'P2' },
  { from: '/careers/', to: '/', priority: 'P2' },
  { from: '/transformation/', to: '/', priority: 'P2' },

  // P2 - Author pages
  { from: '/author/someone/', to: '/', priority: 'P2' },

  // P2 - Feed URLs
  { from: '/blog/some-post/feed/', to: '/blog/some-post', priority: 'P2' },

  // P2 - Team member pages
  { from: '/about/meet-the-team/john-doe/', to: '/about/team/john-doe', priority: 'P2' },

  // P3 - PDFs
  { from: '/wp-content/uploads/2024/11/2020-SWA-Marketing-Case-Study-.pdf', to: '/pdfs/case-studies/southwest-marketing.pdf', priority: 'P3' },
  { from: '/media/RecoverFromFlatBacklogs.pdf', to: '/insights', priority: 'P3' },
];

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
};

async function testRedirect(from, expectedTo, maxHops = 5) {
  let currentUrl = `${BASE_URL}${from}`;
  let hops = 0;
  let allHops = [];

  try {
    // Follow redirect chain until we reach a non-redirect or max hops
    while (hops < maxHops) {
      const response = await fetch(currentUrl, {
        redirect: 'manual',
      });

      const location = response.headers.get('location');
      const status = response.status;
      const isRedirect = status === 301 || status === 302 || status === 307 || status === 308;

      if (!isRedirect) {
        // Reached final destination (200, 404, etc.)
        break;
      }

      // Normalize location
      let nextUrl = location;
      if (location && !location.startsWith('http')) {
        nextUrl = `${BASE_URL}${location}`;
      }

      allHops.push({
        from: currentUrl.replace(BASE_URL, ''),
        to: nextUrl.replace(BASE_URL, ''),
        status,
      });

      currentUrl = nextUrl;
      hops++;
    }

    // Get final path
    const finalPath = currentUrl.replace(BASE_URL, '');

    // Check if final destination matches expected
    const isCorrect = finalPath === expectedTo;

    return {
      from,
      expectedTo,
      actualTo: finalPath,
      hops: allHops,
      hopCount: hops,
      isRedirect: hops > 0,
      isCorrect,
      error: null,
    };
  } catch (error) {
    return {
      from,
      expectedTo,
      actualTo: null,
      hops: [],
      hopCount: 0,
      isRedirect: false,
      isCorrect: false,
      error: error.message,
    };
  }
}

async function runTests() {
  console.log(`\n${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.cyan}  Redirect Test Script - Agile Velocity${colors.reset}`);
  console.log(`${colors.cyan}========================================${colors.reset}`);
  console.log(`\nTesting against: ${colors.yellow}${BASE_URL}${colors.reset}`);
  console.log(`Total redirects to test: ${REDIRECTS_TO_TEST.length}\n`);

  const results = {
    passed: [],
    failed: [],
    errors: [],
  };

  // Group by priority
  const byPriority = {};
  for (const redirect of REDIRECTS_TO_TEST) {
    if (!byPriority[redirect.priority]) {
      byPriority[redirect.priority] = [];
    }
    byPriority[redirect.priority].push(redirect);
  }

  // Test each priority group
  for (const priority of ['P0', 'P1', 'P2', 'P3']) {
    if (!byPriority[priority]) continue;

    console.log(`${colors.cyan}--- ${priority} Redirects ---${colors.reset}`);

    for (const redirect of byPriority[priority]) {
      const result = await testRedirect(redirect.from, redirect.to);

      if (result.error) {
        console.log(`${colors.red}ERROR${colors.reset} ${result.from}`);
        console.log(`       ${colors.dim}${result.error}${colors.reset}`);
        results.errors.push(result);
      } else if (result.isCorrect) {
        const hopInfo = result.hopCount > 1 ? ` (${result.hopCount} hops)` : '';
        console.log(`${colors.green}PASS${colors.reset}  ${result.from} → ${result.actualTo}${colors.dim}${hopInfo}${colors.reset}`);
        results.passed.push(result);
      } else if (result.isRedirect) {
        console.log(`${colors.yellow}WRONG${colors.reset} ${result.from}`);
        console.log(`       Expected: ${redirect.to}`);
        console.log(`       Actual:   ${result.actualTo}`);
        if (result.hopCount > 0) {
          console.log(`       ${colors.dim}Hops: ${result.hops.map(h => h.to).join(' → ')}${colors.reset}`);
        }
        results.failed.push(result);
      } else {
        console.log(`${colors.red}FAIL${colors.reset}  ${result.from} (no redirect, landed on ${result.actualTo})`);
        results.failed.push(result);
      }
    }
    console.log('');
  }

  // Summary
  console.log(`${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.cyan}  Summary${colors.reset}`);
  console.log(`${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.green}Passed:${colors.reset}  ${results.passed.length}`);
  console.log(`${colors.red}Failed:${colors.reset}  ${results.failed.length}`);
  console.log(`${colors.yellow}Errors:${colors.reset}  ${results.errors.length}`);
  console.log(`Total:   ${REDIRECTS_TO_TEST.length}`);

  if (results.failed.length > 0) {
    console.log(`\n${colors.red}Failed Redirects:${colors.reset}`);
    for (const fail of results.failed) {
      console.log(`  ${fail.from} → expected ${fail.expectedTo}, got ${fail.actualTo || `status ${fail.status}`}`);
    }
  }

  if (results.errors.length > 0) {
    console.log(`\n${colors.yellow}Connection Errors:${colors.reset}`);
    for (const err of results.errors) {
      console.log(`  ${err.from}: ${err.error}`);
    }
  }

  // Exit with error code if failures
  if (results.failed.length > 0 || results.errors.length > 0) {
    console.log(`\n${colors.red}Some tests failed!${colors.reset}`);
    process.exit(1);
  } else {
    console.log(`\n${colors.green}All tests passed!${colors.reset}`);
    process.exit(0);
  }
}

// Check if server is running before testing
async function checkServer() {
  try {
    await fetch(BASE_URL, { method: 'HEAD' });
    return true;
  } catch (error) {
    return false;
  }
}

async function main() {
  const serverRunning = await checkServer();

  if (!serverRunning) {
    console.log(`\n${colors.red}Error: Cannot connect to ${BASE_URL}${colors.reset}`);
    console.log(`\nMake sure the server is running:`);
    console.log(`  ${colors.cyan}cd next-app${colors.reset}`);
    console.log(`  ${colors.cyan}npm run build && npm run start${colors.reset}`);
    console.log(`\nOr test against a deployed URL:`);
    console.log(`  ${colors.cyan}node scripts/test-redirects.js https://your-site.vercel.app${colors.reset}`);
    process.exit(1);
  }

  await runTests();
}

main();
