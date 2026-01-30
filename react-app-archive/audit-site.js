import puppeteer from 'puppeteer';
import fs from 'fs';

const BASE_URL = 'http://localhost:5175';

const pages = [
  { name: 'home', path: '/' },
  { name: 'outcomes-index', path: '/outcomes' },
  { name: 'outcomes-detail', path: '/outcomes/employee-engagement' },
  { name: 'problems-index', path: '/whats-in-your-way' },
  { name: 'problems-detail', path: '/whats-in-your-way/stalled-or-superficial-transformation' },
  { name: 'path-to-agility', path: '/path-to-agility' },
  { name: 'navigator', path: '/path-to-agility/navigator' },
  { name: 'partner', path: '/path-to-agility/partner' },
  { name: 'training-index', path: '/training' },
  { name: 'training-corporate', path: '/training/corporate' },
  { name: 'training-public', path: '/training/public-workshops' },
  { name: 'training-courses', path: '/training/courses' },
  { name: 'course-detail', path: '/training/courses/certified-scrummaster' },
  { name: 'recognition', path: '/recognition' },
  { name: 'about', path: '/about' },
  { name: 'team', path: '/about/team' },
  { name: 'team-member', path: '/about/team/david-hawks' },
];

const breakpoints = [
  { name: '1200', width: 1200, height: 900 },
  { name: '1024', width: 1024, height: 768 },
  { name: '768', width: 768, height: 1024 },
  { name: '480', width: 480, height: 800 },
];

const issues = [];

async function checkPage(page, pageInfo, bp) {
  const url = `${BASE_URL}${pageInfo.path}`;

  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  } catch (e) {
    issues.push({
      page: pageInfo.name,
      breakpoint: bp.name,
      issue: `Failed to load: ${e.message}`
    });
    return;
  }

  await new Promise(r => setTimeout(r, 500));

  // Take full page screenshot
  await page.screenshot({
    path: `screenshots/${pageInfo.name}-${bp.name}.png`,
    fullPage: true
  });

  // Check for issues
  const pageIssues = await page.evaluate(() => {
    const problems = [];
    const vw = window.innerWidth;

    // Check horizontal overflow
    if (document.documentElement.scrollWidth > vw) {
      problems.push(`Horizontal overflow: ${document.documentElement.scrollWidth}px > ${vw}px`);
    }

    // Check for elements extending past viewport
    const allElements = document.querySelectorAll('*');
    const clippedElements = [];
    allElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.right > vw + 5) {
        const tag = el.tagName.toLowerCase();
        const cls = el.className ? `.${el.className.split(' ')[0]}` : '';
        const id = el.id ? `#${el.id}` : '';
        clippedElements.push(`${tag}${id}${cls}`);
      }
    });
    if (clippedElements.length > 0) {
      // Get unique elements
      const unique = [...new Set(clippedElements)].slice(0, 5);
      problems.push(`Clipped elements: ${unique.join(', ')}`);
    }

    // Check for text overflow
    const textElements = document.querySelectorAll('h1, h2, h3, h4, p, span, a, button');
    textElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.right > vw) {
        const text = el.textContent?.substring(0, 30);
        if (text && !problems.some(p => p.includes(text))) {
          problems.push(`Text overflow: "${text}..."`);
        }
      }
    });

    // Check images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.width > vw) {
        problems.push(`Image too wide: ${img.alt || img.src.split('/').pop()}`);
      }
    });

    // Check buttons are touchable (min 44px on mobile)
    if (vw <= 480) {
      const buttons = document.querySelectorAll('button, .btn, a.btn-kinetic-primary, a.btn-kinetic-ghost');
      buttons.forEach(btn => {
        const rect = btn.getBoundingClientRect();
        if (rect.height < 44 && rect.height > 0) {
          const text = btn.textContent?.substring(0, 20);
          problems.push(`Button too small for touch: "${text}" (${rect.height.toFixed(0)}px)`);
        }
      });
    }

    return problems;
  });

  if (pageIssues.length > 0) {
    pageIssues.forEach(issue => {
      issues.push({
        page: pageInfo.name,
        breakpoint: bp.name,
        issue
      });
    });
  }
}

async function runAudit() {
  console.log('🔍 Starting comprehensive site audit...\n');

  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  for (const bp of breakpoints) {
    console.log(`\n📐 Testing at ${bp.width}px...`);
    await page.setViewport({ width: bp.width, height: bp.height });

    for (const pageInfo of pages) {
      process.stdout.write(`  ${pageInfo.name}... `);
      await checkPage(page, pageInfo, bp);
      console.log('✓');
    }
  }

  await browser.close();

  // Report
  console.log('\n' + '='.repeat(60));
  console.log('AUDIT REPORT');
  console.log('='.repeat(60));

  if (issues.length === 0) {
    console.log('\n✅ No issues found!');
  } else {
    console.log(`\n❌ Found ${issues.length} issues:\n`);

    // Group by page
    const byPage = {};
    issues.forEach(i => {
      if (!byPage[i.page]) byPage[i.page] = [];
      byPage[i.page].push(i);
    });

    Object.keys(byPage).forEach(pageName => {
      console.log(`\n📄 ${pageName}:`);
      byPage[pageName].forEach(i => {
        console.log(`   [${i.breakpoint}px] ${i.issue}`);
      });
    });
  }

  console.log('\n📸 Screenshots saved to screenshots/ folder');

  // Save report to file
  fs.writeFileSync('audit-report.json', JSON.stringify(issues, null, 2));
  console.log('📋 Report saved to audit-report.json');
}

runAudit().catch(console.error);
