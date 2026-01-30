const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../content/blog');
const OUTPUT_DIR = path.join(__dirname, '../public/images/blog');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Extract all image references from blog posts
function extractImageFilenames() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));
  const images = new Set();

  for (const file of files) {
    const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
    // Match /images/blog/filename patterns
    const matches = content.matchAll(/\/images\/blog\/([a-zA-Z0-9_\.\-]+\.(jpg|jpeg|png|gif|webp|svg))/gi);
    for (const match of matches) {
      images.add(match[1]);
    }
  }

  return Array.from(images);
}

// Generate year/month combinations - most recent first
const yearMonths = [];
for (let year = 2025; year >= 2015; year--) {
  for (let month = 12; month >= 1; month--) {
    yearMonths.push(`${year}/${String(month).padStart(2, '0')}`);
  }
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const request = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      },
      timeout: 10000
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
      file.on('error', (err) => {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        reject(err);
      });
    });

    request.on('error', reject);
    request.on('timeout', () => {
      request.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function tryDownloadImage(filename) {
  const destPath = path.join(OUTPUT_DIR, filename);

  // Skip if already exists
  if (fs.existsSync(destPath)) {
    return { status: 'exists', filename };
  }

  // Try each year/month combination (most recent first)
  for (const ym of yearMonths) {
    const url = `https://agilevelocity.com/wp-content/uploads/${ym}/${filename}`;
    try {
      await downloadFile(url, destPath);
      return { status: 'downloaded', filename, url };
    } catch (err) {
      // Try next year/month
    }
  }

  return { status: 'failed', filename };
}

// Process images in parallel batches
async function processBatch(images, batchSize = 5) {
  const results = { downloaded: 0, exists: 0, failed: 0, failedImages: [] };

  for (let i = 0; i < images.length; i += batchSize) {
    const batch = images.slice(i, i + batchSize);
    const promises = batch.map(async (filename, idx) => {
      const globalIdx = i + idx + 1;
      const result = await tryDownloadImage(filename);

      if (result.status === 'downloaded') {
        console.log(`[${globalIdx}/${images.length}] ${filename} ✅`);
        results.downloaded++;
      } else if (result.status === 'exists') {
        console.log(`[${globalIdx}/${images.length}] ${filename} ⏭️`);
        results.exists++;
      } else {
        console.log(`[${globalIdx}/${images.length}] ${filename} ❌`);
        results.failed++;
        results.failedImages.push(filename);
      }

      return result;
    });

    await Promise.all(promises);
  }

  return results;
}

async function main() {
  console.log('🔍 Extracting image filenames from blog posts...\n');
  const images = extractImageFilenames();
  console.log(`Found ${images.length} unique images to download.\n`);
  console.log('Downloading in parallel batches of 5...\n');

  const results = await processBatch(images, 5);

  console.log('\n📊 Summary:');
  console.log(`   Downloaded: ${results.downloaded}`);
  console.log(`   Already existed: ${results.exists}`);
  console.log(`   Failed: ${results.failed}`);

  if (results.failedImages.length > 0) {
    console.log('\n❌ Failed images:');
    results.failedImages.forEach(img => console.log(`   ${img}`));

    // Save failed images to file
    fs.writeFileSync(
      path.join(__dirname, 'failed-images.txt'),
      results.failedImages.join('\n'),
      'utf8'
    );
    console.log('\n   (Saved to scripts/failed-images.txt)');
  }
}

main().catch(console.error);
