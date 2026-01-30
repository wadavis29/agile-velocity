#!/usr/bin/env node
/**
 * Automatic Image Optimization Script
 *
 * Runs automatically before dev/build to ensure all images are optimized.
 * Can also watch for new images during development.
 *
 * Usage:
 *   node scripts/optimize-images.js           # Optimize all images in public/images
 *   node scripts/optimize-images.js --watch   # Watch mode for development
 *   node scripts/optimize-images.js file.png  # Optimize specific file(s)
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Default configuration
const CONFIG = {
  // Directory to scan for images (relative to project root)
  IMAGE_DIR: 'public/images',

  // Maximum width for images (height scales proportionally)
  MAX_WIDTH: 1920,

  // Maximum height for images
  MAX_HEIGHT: null,

  // JPEG quality (1-100, higher = better quality, larger file)
  JPEG_QUALITY: 85,

  // PNG compression level (0-9, higher = more compression)
  PNG_COMPRESSION: 9,

  // WebP quality
  WEBP_QUALITY: 85,

  // Minimum file size reduction to keep optimized version (bytes)
  MIN_SAVINGS: 1024, // 1KB

  // File to track optimized images (avoid re-processing)
  CACHE_FILE: 'node_modules/.cache/optimized-images.json',
};

// Directory-specific overrides for different image types
const DIR_OVERRIDES = {
  // Blog images - displayed as cards/thumbnails, aggressive optimization
  'blog': {
    MAX_WIDTH: 1200,
    MAX_HEIGHT: 800,
    JPEG_QUALITY: 80,
    WEBP_QUALITY: 80,
  },
  // Webinar thumbnails - similar to blog, card-based display
  'webinars': {
    MAX_WIDTH: 800,
    MAX_HEIGHT: 600,
    JPEG_QUALITY: 80,
    WEBP_QUALITY: 80,
  },
  // White paper covers - need to look crisp
  'white-papers': {
    MAX_WIDTH: 800,
    MAX_HEIGHT: 1000,
    JPEG_QUALITY: 82,
    WEBP_QUALITY: 82,
  },
  // Team photos - smaller headshots, quality matters
  'team': {
    MAX_WIDTH: 400,
    MAX_HEIGHT: 400,
    JPEG_QUALITY: 85,
    WEBP_QUALITY: 85,
  },
  // Logos - keep crisp, usually small anyway
  'logos': {
    MAX_WIDTH: 400,
    MAX_HEIGHT: 200,
    PNG_COMPRESSION: 9,
  },
  // Navigator screenshots - need detail visible
  'navigator': {
    MAX_WIDTH: 1200,
    MAX_HEIGHT: 900,
    JPEG_QUALITY: 85,
    WEBP_QUALITY: 85,
    PNG_COMPRESSION: 9,
  },
};

// Get config for a specific image path
function getConfigForPath(imagePath) {
  const relativePath = path.relative(path.resolve(process.cwd(), CONFIG.IMAGE_DIR), imagePath);
  const dir = relativePath.split(path.sep)[0];

  if (DIR_OVERRIDES[dir]) {
    return { ...CONFIG, ...DIR_OVERRIDES[dir] };
  }
  return CONFIG;
}

// Supported image extensions
const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];

// Track optimization results
let stats = { optimized: 0, skipped: 0, errors: 0, savedBytes: 0 };

// Load/save optimization cache
function loadCache() {
  try {
    const cacheDir = path.dirname(CONFIG.CACHE_FILE);
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }
    if (fs.existsSync(CONFIG.CACHE_FILE)) {
      return JSON.parse(fs.readFileSync(CONFIG.CACHE_FILE, 'utf8'));
    }
  } catch (e) {}
  return {};
}

function saveCache(cache) {
  try {
    const cacheDir = path.dirname(CONFIG.CACHE_FILE);
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }
    fs.writeFileSync(CONFIG.CACHE_FILE, JSON.stringify(cache, null, 2));
  } catch (e) {}
}

function getFileHash(filePath) {
  const stat = fs.statSync(filePath);
  return `${stat.size}-${stat.mtimeMs}`;
}

async function optimizeImage(imagePath, cache = {}, force = false) {
  const ext = path.extname(imagePath).toLowerCase();

  if (!SUPPORTED_EXTENSIONS.includes(ext)) {
    return false;
  }

  if (!fs.existsSync(imagePath)) {
    return false;
  }

  // Check cache to avoid re-processing
  const fileHash = getFileHash(imagePath);
  if (!force && cache[imagePath] === fileHash) {
    return false; // Already optimized
  }

  // Get directory-specific config
  const config = getConfigForPath(imagePath);

  const originalSize = fs.statSync(imagePath).size;
  const originalSizeKB = (originalSize / 1024).toFixed(1);

  try {
    let image = sharp(imagePath);
    const metadata = await image.metadata();

    // Resize if too large (check both width and height)
    let resized = false;
    let targetWidth = metadata.width;
    let targetHeight = metadata.height;

    if (targetWidth && targetWidth > config.MAX_WIDTH) {
      targetHeight = Math.round(targetHeight * (config.MAX_WIDTH / targetWidth));
      targetWidth = config.MAX_WIDTH;
      resized = true;
    }

    if (config.MAX_HEIGHT && targetHeight && targetHeight > config.MAX_HEIGHT) {
      targetWidth = Math.round(targetWidth * (config.MAX_HEIGHT / targetHeight));
      targetHeight = config.MAX_HEIGHT;
      resized = true;
    }

    if (resized) {
      image = image.resize(targetWidth, targetHeight, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }

    // Apply format-specific optimizations
    let outputBuffer;

    if (ext === '.png') {
      outputBuffer = await image
        .png({
          compressionLevel: config.PNG_COMPRESSION,
          adaptiveFiltering: true,
          palette: true,
        })
        .toBuffer();
    } else if (ext === '.jpg' || ext === '.jpeg') {
      outputBuffer = await image
        .jpeg({
          quality: config.JPEG_QUALITY,
          mozjpeg: true,
        })
        .toBuffer();
    } else if (ext === '.webp') {
      outputBuffer = await image
        .webp({
          quality: config.WEBP_QUALITY,
          effort: 6,
        })
        .toBuffer();
    }

    const newSize = outputBuffer.length;
    const newSizeKB = (newSize / 1024).toFixed(1);
    const savings = originalSize - newSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

    const relativePath = path.relative(process.cwd(), imagePath);

    // Only write if we saved enough space
    if (savings >= config.MIN_SAVINGS || resized) {
      fs.writeFileSync(imagePath, outputBuffer);
      // Update cache with NEW hash after optimization
      cache[imagePath] = getFileHash(imagePath);

      if (resized) {
        console.log(`  📐 ${relativePath}: resized + compressed (${originalSizeKB}KB → ${newSizeKB}KB, -${savingsPercent}%)`);
      } else {
        console.log(`  ✅ ${relativePath}: ${originalSizeKB}KB → ${newSizeKB}KB (-${savingsPercent}%)`);
      }
      stats.optimized++;
      stats.savedBytes += savings;
      return true;
    } else {
      // Mark as processed even if no changes needed
      cache[imagePath] = fileHash;
      stats.skipped++;
      return false;
    }

  } catch (error) {
    console.error(`  ❌ ${path.relative(process.cwd(), imagePath)}: ${error.message}`);
    stats.errors++;
    return false;
  }
}

function findImages(dir, images = []) {
  if (!fs.existsSync(dir)) {
    return images;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip node_modules and hidden directories
      if (!entry.name.startsWith('.') && entry.name !== 'node_modules') {
        findImages(fullPath, images);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (SUPPORTED_EXTENSIONS.includes(ext)) {
        images.push(fullPath);
      }
    }
  }

  return images;
}

async function optimizeAll(force = false) {
  const imageDir = path.resolve(process.cwd(), CONFIG.IMAGE_DIR);

  console.log(`\n🖼️  Optimizing images in ${CONFIG.IMAGE_DIR}/\n`);

  const images = findImages(imageDir);

  if (images.length === 0) {
    console.log('  No images found.\n');
    return;
  }

  const cache = force ? {} : loadCache();

  for (const imagePath of images) {
    await optimizeImage(imagePath, cache, force);
  }

  saveCache(cache);

  // Print summary
  console.log('');
  if (stats.optimized > 0) {
    const savedKB = (stats.savedBytes / 1024).toFixed(1);
    const savedMB = (stats.savedBytes / 1024 / 1024).toFixed(2);
    console.log(`  ✨ Optimized ${stats.optimized} image${stats.optimized !== 1 ? 's' : ''}, saved ${savedKB > 1024 ? savedMB + 'MB' : savedKB + 'KB'}`);
  }
  if (stats.skipped > 0) {
    console.log(`  ⏭️  ${stats.skipped} image${stats.skipped !== 1 ? 's' : ''} already optimized`);
  }
  if (stats.errors > 0) {
    console.log(`  ⚠️  ${stats.errors} error${stats.errors !== 1 ? 's' : ''}`);
  }
  console.log('');
}

async function watchMode() {
  console.log(`\n👀 Watching ${CONFIG.IMAGE_DIR}/ for new images...\n`);
  console.log('  (Press Ctrl+C to stop)\n');

  const imageDir = path.resolve(process.cwd(), CONFIG.IMAGE_DIR);
  const cache = loadCache();

  // Initial optimization
  const images = findImages(imageDir);
  for (const imagePath of images) {
    await optimizeImage(imagePath, cache);
  }
  saveCache(cache);

  if (stats.optimized > 0) {
    console.log(`\n  ✨ Initial scan: optimized ${stats.optimized} images\n`);
  } else {
    console.log('  ✅ All images already optimized\n');
  }

  // Watch for changes
  fs.watch(imageDir, { recursive: true }, async (eventType, filename) => {
    if (!filename) return;

    const ext = path.extname(filename).toLowerCase();
    if (!SUPPORTED_EXTENSIONS.includes(ext)) return;

    const fullPath = path.join(imageDir, filename);

    // Small delay to ensure file is fully written
    setTimeout(async () => {
      if (fs.existsSync(fullPath)) {
        const result = await optimizeImage(fullPath, cache, true);
        if (result) {
          saveCache(cache);
        }
      }
    }, 100);
  });

  // Keep process running
  process.stdin.resume();
}

async function main() {
  const args = process.argv.slice(2);

  // Watch mode
  if (args.includes('--watch') || args.includes('-w')) {
    await watchMode();
    return;
  }

  // Force mode (re-optimize everything)
  const force = args.includes('--force') || args.includes('-f');
  const filteredArgs = args.filter(a => !a.startsWith('-'));

  // Specific files provided
  if (filteredArgs.length > 0) {
    console.log('\n🖼️  Optimizing specified images\n');
    const cache = loadCache();

    for (const imagePath of filteredArgs) {
      const fullPath = path.resolve(process.cwd(), imagePath);
      await optimizeImage(fullPath, cache, force);
    }

    saveCache(cache);
    console.log('');
    return;
  }

  // Default: optimize all images in public/images
  await optimizeAll(force);
}

main().catch(console.error);
