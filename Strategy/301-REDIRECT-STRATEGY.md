# 301 Redirect Strategy for Agile Velocity Website Migration

## Executive Summary

This document outlines the 301 redirect strategy for migrating from the WordPress site (agilevelocity.com) to the new Next.js site. The goal is to preserve SEO value, prevent broken links, and ensure a smooth user experience.

---

## Current Site Analysis

### Old Site (WordPress) URL Structure
- **Pages:** 48 pages
- **Blog Posts:** ~500+ posts across `/blog/` path
- **Case Studies:** 11 case studies under `/case-studies/` and `/resources/`
- **Training Pages:** 31 private training pages under `/agile-training/private-training/`
- **Other:** Events, webinars, white papers, team member pages

### New Site (Next.js) URL Structure
| New Path | Description |
|----------|-------------|
| `/` | Homepage |
| `/about` | About page |
| `/about/team` | Team listing |
| `/about/team/[slug]` | Individual team member |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post |
| `/contact` | Contact page |
| `/contact/thank-you` | Contact thank you |
| `/insights` | Insights hub |
| `/insights/case-studies` | Case studies |
| `/insights/webinars` | Webinars |
| `/insights/white-papers` | White papers |
| `/outcomes` | Business Outcomes |
| `/path-to-agility` | Path to Agility |
| `/training` | Training page |
| `/request-a-trial` | Request trial |
| `/whats-in-your-way` | Challenge assessment |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `/recognition` | Recognition/awards |

---

## Redirect Categories

### Category 1: Direct Page Mappings (KEEP)
These are 1:1 mappings from old URLs to new URLs.

| Old URL | New URL | Priority |
|---------|---------|----------|
| `/about/` | `/about` | High |
| `/about/meet-the-team/` | `/about/team` | High |
| `/about/meet-the-team/[name]/` | `/about/team/[name]` | Medium |
| `/contact/` | `/contact` | High |
| `/blog/` | `/blog` | High |
| `/blog/[slug]/` | `/blog/[slug]` | High |
| `/path-to-agility/` | `/path-to-agility` | High |
| `/insights/` | `/insights` | High |
| `/insights/case-studies/` | `/insights/case-studies` | High |
| `/insights/webinars/` | `/insights/webinars` | Medium |
| `/insights/white-pages/` | `/insights/white-papers` | Medium |
| `/request-a-trial/` | `/request-a-trial` | High |

### Category 2: Consolidated Redirects (Simplify Old Patterns)
The old site has many legacy URL patterns that all point to the same content.

**Service Pages → Homepage or Relevant New Page:**
| Old Patterns | New URL |
|--------------|---------|
| `/agile-transformation/` | `/` (homepage covers this) |
| `/agile-transformation-consulting-lp/` | `/` |
| `/agile-transformation-services-lp/` | `/` |
| `/safe-agile-transformation/` | `/` |
| `/safe-scaled-agile-transformation-consulting-lp/` | `/` |
| `/enterprise-agile-coach-lp/` | `/` |
| `/agile-implementation-partner-lp/` | `/` |
| `/service-offerings/` | `/` |
| `/team-agile-coaching/` | `/` |

**Training Pages:**
| Old Patterns | New URL |
|--------------|---------|
| `/agile-training/` | `/training` |
| `/agile-training/corporate-agile-training/` | `/training` |
| `/agile-training/public-workshops/` | `/training` |
| `/agile-training/safe-agile-training/` | `/training` |
| `/agile-training/private-training/` | `/training` |
| `/agile-training/private-training/*` | `/training` |
| `/agile-training-lp/` | `/training` |
| `/agile-training/training-faq/` | `/training` |
| `/agile-training/private-training-form/` | `/training` |

**Path to Agility:**
| Old Patterns | New URL |
|--------------|---------|
| `/path-to-agility/` | `/path-to-agility` |
| `/path-to-agility-features/` | `/path-to-agility` |
| `/path-to-agility-partner/` | `/path-to-agility` |
| `/learn-more-about-path-to-agility/` | `/path-to-agility` |
| `/coaching/path-to-agility/` | `/path-to-agility` |
| `/transformation/path-to-agility/` | `/path-to-agility` |

**AI/Business Operations:**
| Old Patterns | New URL |
|--------------|---------|
| `/ai-implementation/` | `/` |
| `/ai-solutions-lp/` | `/` |
| `/ai-strategy/` | `/` |
| `/business-operations-consulting/` | `/` |

**Other Landing Pages → Homepage:**
| Old Patterns | New URL |
|--------------|---------|
| `/lp-*` (all landing pages) | `/` |
| `/agile-staffing/` | `/` |
| `/lean-portfolio-management/` | `/` |
| `/leading-agile-change-management/` | `/` |

### Category 3: Content Redirects (Resources/Case Studies)
| Old URL | New URL |
|---------|---------|
| `/resources/*` (case studies) | `/insights/case-studies` |
| `/case-studies/*` | `/insights/case-studies` |
| `/insights/?post_types=case_study` | `/insights/case-studies` |
| `/insights/?_sft_category=webinar` | `/insights/webinars` |
| `/insights/?post_types=white_paper` | `/insights/white-papers` |
| `/library/` | `/insights` |
| `/library/agile-whitepapers/` | `/insights/white-papers` |

### Category 4: Legacy Blog Path Redirects (CRITICAL)
The old site has hundreds of blog posts. The existing CSV shows redirects from old URL patterns to `/blog/[slug]`.

**Keep these patterns active:**
- `[slug]` → `/blog/[slug]` (posts without /blog/ prefix)
- `[category]/[slug]/` → `/blog/[slug]` (posts with category prefix)
- `blog/[slug]/` → `/blog/[slug]` (already correct path)

### Category 5: Obsolete Redirects (CAN REMOVE)

These redirects in your CSV are no longer needed because they point to pages that no longer exist or are duplicates:

1. **Author pages** → Can redirect to homepage or remove:
   - `/author/*` → `/`

2. **Event pages** (if not maintaining events):
   - `/event/*` → `/`
   - `/events/` → `/`

3. **Category pages**:
   - `/category/*` → `/blog`

4. **Feed URLs**:
   - `*/feed/` → Remove or redirect to parent

5. **Duplicate/Broken redirects pointing to homepage:**
   - Many entries in CSV already redirect to `https://agilevelocity.com/` - keep only unique paths

6. **Removed team member pages:**
   - `/about/meet-the-team/[former-employee]/` → `/about/team`

7. **Old question/discussion pages:**
   - `/questions/*` → `/`

8. **PDF files** (if moved or removed):
   - `/media/*.pdf` → `/` or specific replacement
   - `/wp-content/uploads/*` → depends on if files still exist

---

## Implementation Plan

### Phase 1: Add Redirects to next.config.js

The redirects should be added to `next.config.js` using the `redirects()` function for best performance with Next.js.

### Phase 2: Keep vercel.json for Domain Redirect

Your current `vercel.json` handles the non-www to www redirect - keep this.

### Phase 3: Remove Obsolete Redirects

After migration, the WordPress Rank Math redirects will no longer be active. The new site needs to handle all redirects.

---

## Priority Ranking

### P0 - Critical (Do First)
1. Homepage and main navigation pages
2. High-traffic blog posts
3. Contact and conversion pages
4. Training pages

### P1 - High Priority
1. All blog post redirects (maintains SEO)
2. Case studies and resources
3. Team member pages

### P2 - Medium Priority
1. Landing page redirects
2. Old service pages
3. Webinars and white papers

### P3 - Low Priority
1. Author pages
2. Category pages
3. Old event pages
4. Misc legacy URLs

---

## SEO Considerations

1. **Use 301 (permanent) redirects** - signals to search engines the move is permanent
2. **Maintain redirect chains** - avoid redirect chains longer than 2 hops
3. **Update internal links** - update any hardcoded links in content
4. **Submit new sitemap** - update Google Search Console with new sitemap
5. **Monitor 404s** - watch for any missed redirects post-launch

---

## Testing Checklist

- [ ] Test all P0 redirects manually
- [ ] Run redirect checker tool on top 100 URLs
- [ ] Verify no redirect loops exist
- [ ] Check mobile redirects work correctly
- [ ] Verify HTTPS redirects properly
- [ ] Test trailing slash handling
- [ ] Monitor 404 errors in analytics post-launch

---

## Metrics to Track

1. **Organic traffic** - should remain stable or improve
2. **404 error rate** - should be minimal
3. **Bounce rate from redirects** - watch for user experience issues
4. **Crawl errors** - monitor in Google Search Console
5. **Indexed pages** - track indexing of new URLs

---

## Next Steps

1. Review and approve this strategy
2. Generate the redirect configuration file
3. Test redirects in staging
4. Deploy with redirects
5. Monitor and adjust as needed

