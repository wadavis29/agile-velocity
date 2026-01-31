# Obsolete Redirects from Rank Math CSV

The CSV file `agilevelocity_rank-math-redirections-2026-01-30_22-57-54.csv` contains 600+ redirects that were configured in WordPress. Now that you're migrating to Next.js, these WordPress-based redirects will no longer function.

**The new redirects in `next-app/redirects.js` replace all of these.**

## Categories of Redirects That Are Now Handled by Next.js

### 1. Blog Post URL Migrations (HANDLED)
The CSV contains hundreds of redirects like:
- `why-decomposition-matters` → `/blog/why-decomposition-matters`
- `agile-technical-practices/decomposing-attack-complexity/` → `/blog/decomposing-attack-complexity`

**Status:** Now handled by wildcard patterns in redirects.js:
- `/:category/:slug` → `/blog/:slug`

### 2. Team Member Page Redirects (HANDLED)
- `/about/meet-the-team/[name]` → `/about/team/[name]`

**Status:** Now handled by pattern redirect in redirects.js

### 3. Training Page Consolidation (HANDLED)
All 31+ training page URLs now redirect to `/training`

**Status:** Now handled by wildcard patterns in redirects.js

### 4. Service Page Consolidation (HANDLED)
All service/consulting landing pages now redirect to homepage

**Status:** Now handled in redirects.js

---

## Redirects You Can Safely Ignore (No Longer Needed)

### Former Employee Team Pages
These redirected to the team page - still handled by new pattern:
- `/about/meet-the-team/richard-dolman` → `/about/team`
- `/about/meet-the-team/carey-young` → `/about/team`
- `/about/meet-the-team/lance-dacy` → `/about/team`
- (etc.)

### Old WordPress Feed URLs
All `/*/feed/` URLs are now handled by a single wildcard rule.

### Duplicate/Redundant Redirects
The CSV had many duplicates with different IDs pointing to the same destination. These are now consolidated.

### Broken/Invalid URLs
Several redirects in the CSV pointed to URLs that no longer exist:
- `questions/10822/...` → homepage
- Various attachment URLs

---

## Redirects Pointing to External Sites (REVIEW NEEDED)

The following redirects in your CSV point to external domains. You may want to keep some of these if they're still valid:

1. **HubSpot/Info subdomain:**
   - `blog/agile-roi/` → `https://info.agilevelocity.com/agile-roi`
   - Some download links → `https://info.agilevelocity.com/...`

2. **If you still use info.agilevelocity.com:** Add these to vercel.json or redirects.js
3. **If you don't use it anymore:** Let these 404 or redirect to relevant new page

---

## PDF/Media File Redirects (REVIEW NEEDED)

Some redirects point to PDF files:
- `/wp-content/uploads/2024/11/2020-SWA-Marketing-Case-Study-.pdf` → new PDF location

**Action Required:**
1. Check if these PDFs exist in the new site
2. If moved, add specific redirects
3. If removed, redirect to relevant content page

---

## Query String Redirects (SPECIAL HANDLING)

These cannot be handled by Next.js redirects() and need middleware or vercel.json:

| Old URL | New URL |
|---------|---------|
| `/insights/?post_types=case_study` | `/insights/case-studies` |
| `/insights/?_sft_category=webinar` | `/insights/webinars` |
| `/insights/?post_types=white_paper` | `/insights/white-papers` |

**Add to vercel.json if needed.**

---

## Summary

| Category | Count | Status |
|----------|-------|--------|
| Blog post redirects | ~400 | ✅ Handled by wildcards |
| Team page redirects | ~30 | ✅ Handled by wildcards |
| Training page redirects | ~50 | ✅ Handled by wildcards |
| Service page redirects | ~50 | ✅ Handled by wildcards |
| Category/taxonomy redirects | ~30 | ✅ Handled by wildcards |
| External domain redirects | ~10 | ⚠️ Review needed |
| PDF/Media redirects | ~5 | ⚠️ Review needed |
| Query string redirects | ~5 | ⚠️ Needs middleware |

---

## Action Items

1. ✅ **No action needed** for most redirects - handled by new config
2. ⚠️ **Review** external domain redirects (info.agilevelocity.com)
3. ⚠️ **Review** PDF file locations
4. ⚠️ **Add middleware** for query string redirects if needed
5. 🗑️ **Can delete** the Rank Math CSV after migration is complete

---

## Post-Migration Monitoring

After deploying the new site:
1. Monitor 404 errors in Vercel Analytics
2. Check Google Search Console for crawl errors
3. Add any missing redirects as needed
4. The CSV can be used as a reference if specific URLs are reported broken

