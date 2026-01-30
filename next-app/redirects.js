/**
 * 301 Redirect Configuration for Agile Velocity
 *
 * This file contains all redirects from the old WordPress site to the new Next.js site.
 * Redirects are organized by category and priority.
 *
 * Usage: Import this in next.config.js
 */

const redirects = [
  // ============================================
  // CATEGORY 1: MAIN PAGE MAPPINGS (P0 - Critical)
  // ============================================

  // About pages
  {
    source: '/about/meet-the-team',
    destination: '/about/team',
    permanent: true,
  },
  {
    source: '/about/meet-the-team/',
    destination: '/about/team',
    permanent: true,
  },
  {
    source: '/about/meet-the-team/:slug',
    destination: '/about/team/:slug',
    permanent: true,
  },
  {
    source: '/about/meet-the-team/:slug/',
    destination: '/about/team/:slug',
    permanent: true,
  },
  {
    source: '/about/our-team',
    destination: '/about/team',
    permanent: true,
  },
  {
    source: '/about/our-team/',
    destination: '/about/team',
    permanent: true,
  },

  // Contact
  {
    source: '/contact-us',
    destination: '/contact',
    permanent: true,
  },
  {
    source: '/contact-us/',
    destination: '/contact',
    permanent: true,
  },

  // Insights - White papers (note: old site used "white-pages")
  {
    source: '/insights/white-pages',
    destination: '/insights/white-papers',
    permanent: true,
  },
  {
    source: '/insights/white-pages/',
    destination: '/insights/white-papers',
    permanent: true,
  },

  // ============================================
  // CATEGORY 2: SERVICE PAGES → HOMEPAGE (P1)
  // ============================================

  // Agile Transformation services
  {
    source: '/agile-transformation',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-transformation/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-transformation-consulting-lp',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-transformation-consulting-lp/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-transformation-services-lp',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-transformation-services-lp/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/safe-agile-transformation',
    destination: '/',
    permanent: true,
  },
  {
    source: '/safe-agile-transformation/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/safe-scaled-agile-transformation-consulting-lp',
    destination: '/',
    permanent: true,
  },
  {
    source: '/safe-scaled-agile-transformation-consulting-lp/',
    destination: '/',
    permanent: true,
  },

  // Enterprise/Consulting services
  {
    source: '/enterprise-agile-coach-lp',
    destination: '/',
    permanent: true,
  },
  {
    source: '/enterprise-agile-coach-lp/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-implementation-partner-lp',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-implementation-partner-lp/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/service-offerings',
    destination: '/',
    permanent: true,
  },
  {
    source: '/service-offerings/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-services',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-services/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-services/:path*',
    destination: '/',
    permanent: true,
  },

  // Coaching
  {
    source: '/team-agile-coaching',
    destination: '/',
    permanent: true,
  },
  {
    source: '/team-agile-coaching/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-coaching',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-coaching/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/coaching/:path*',
    destination: '/',
    permanent: true,
  },

  // AI/Business services
  {
    source: '/ai-implementation',
    destination: '/',
    permanent: true,
  },
  {
    source: '/ai-implementation/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/ai-solutions-lp',
    destination: '/',
    permanent: true,
  },
  {
    source: '/ai-solutions-lp/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/ai-strategy',
    destination: '/',
    permanent: true,
  },
  {
    source: '/ai-strategy/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/business-operations-consulting',
    destination: '/',
    permanent: true,
  },
  {
    source: '/business-operations-consulting/',
    destination: '/',
    permanent: true,
  },

  // Other services
  {
    source: '/agile-staffing',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-staffing/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-roles-service',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-roles-service/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-roles-as-a-service-araas',
    destination: '/',
    permanent: true,
  },
  {
    source: '/lean-portfolio-management',
    destination: '/',
    permanent: true,
  },
  {
    source: '/lean-portfolio-management/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/leading-agile-change-management',
    destination: '/',
    permanent: true,
  },
  {
    source: '/leading-agile-change-management/',
    destination: '/',
    permanent: true,
  },

  // Landing pages (lp-*)
  {
    source: '/lp-continuous-improvement-platform',
    destination: '/',
    permanent: true,
  },
  {
    source: '/lp-safe-pi-planning',
    destination: '/',
    permanent: true,
  },
  {
    source: '/lp-all-in-one-enterprise-agile-platform',
    destination: '/',
    permanent: true,
  },
  {
    source: '/lp-agile-metrics-dashboards',
    destination: '/',
    permanent: true,
  },
  {
    source: '/lp-agile-assessment-maturity-software',
    destination: '/',
    permanent: true,
  },
  {
    source: '/lp-:slug*',
    destination: '/',
    permanent: true,
  },

  // ============================================
  // CATEGORY 3: TRAINING PAGES → /training (P1)
  // ============================================

  {
    source: '/agile-training',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/corporate-agile-training',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/corporate-agile-training/',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/public-workshops',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/public-workshops/',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/public-workshops/:slug*',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/safe-agile-training',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/safe-agile-training/',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/private-training',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/private-training/',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/private-training/:slug*',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/training-faq',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/training-faq/',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/private-training-form',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training/private-training-form/',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training-lp',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/agile-training-lp/',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/private-training',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/private-training/',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/private-training/:slug*',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/training/:slug*',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/scrum-training/:path*',
    destination: '/training',
    permanent: true,
  },

  // ============================================
  // CATEGORY 4: PATH TO AGILITY (P0)
  // ============================================

  {
    source: '/path-to-agility-features',
    destination: '/path-to-agility',
    permanent: true,
  },
  {
    source: '/path-to-agility-features/',
    destination: '/path-to-agility',
    permanent: true,
  },
  {
    source: '/path-to-agility-partner',
    destination: '/path-to-agility',
    permanent: true,
  },
  {
    source: '/path-to-agility-partner/',
    destination: '/path-to-agility',
    permanent: true,
  },
  {
    source: '/learn-more-about-path-to-agility',
    destination: '/path-to-agility',
    permanent: true,
  },
  {
    source: '/learn-more-about-path-to-agility/',
    destination: '/path-to-agility',
    permanent: true,
  },
  {
    source: '/coaching/path-to-agility',
    destination: '/path-to-agility',
    permanent: true,
  },
  {
    source: '/coaching/path-to-agility/',
    destination: '/path-to-agility',
    permanent: true,
  },
  {
    source: '/transformation/path-to-agility',
    destination: '/path-to-agility',
    permanent: true,
  },
  {
    source: '/transformation/path-to-agility/',
    destination: '/path-to-agility',
    permanent: true,
  },
  {
    source: '/maximize-your-investment-in-agile',
    destination: '/path-to-agility',
    permanent: true,
  },
  {
    source: '/path-to-agilitynew',
    destination: '/path-to-agility',
    permanent: true,
  },
  {
    source: '/path-to-agilitynew/',
    destination: '/path-to-agility',
    permanent: true,
  },

  // ============================================
  // CATEGORY 5: RESOURCES/CASE STUDIES → INSIGHTS (P1)
  // ============================================

  {
    source: '/resources',
    destination: '/insights',
    permanent: true,
  },
  {
    source: '/resources/',
    destination: '/insights',
    permanent: true,
  },
  {
    source: '/resources/:slug',
    destination: '/insights/case-studies',
    permanent: true,
  },
  {
    source: '/resources/:slug/',
    destination: '/insights/case-studies',
    permanent: true,
  },
  {
    source: '/case-studies',
    destination: '/insights/case-studies',
    permanent: true,
  },
  {
    source: '/case-studies/',
    destination: '/insights/case-studies',
    permanent: true,
  },
  {
    source: '/case-studies/:slug',
    destination: '/insights/case-studies',
    permanent: true,
  },
  {
    source: '/case-studies/:slug/',
    destination: '/insights/case-studies',
    permanent: true,
  },
  {
    source: '/library',
    destination: '/insights',
    permanent: true,
  },
  {
    source: '/library/',
    destination: '/insights',
    permanent: true,
  },
  {
    source: '/library/agile-whitepapers',
    destination: '/insights/white-papers',
    permanent: true,
  },
  {
    source: '/library/agile-whitepapers/',
    destination: '/insights/white-papers',
    permanent: true,
  },
  {
    source: '/library/:path*',
    destination: '/insights',
    permanent: true,
  },

  // ============================================
  // CATEGORY 6: LEGACY BLOG PATHS → /blog (P0 - CRITICAL)
  // ============================================

  // Old category-based blog URLs
  {
    source: '/agile/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/agile/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/scrum/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/scrum/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/leadership/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/leadership/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/lean/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/lean/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/team/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/team/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/article/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/article/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/video/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/video/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/webinar/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/webinar/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/scrummaster/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/scrummaster/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/product-owner/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/product-owner/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/agile-transformation/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/agile-transformation/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/agile-tools/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/agile-tools/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/technical-practices/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/technical-practices/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/agile-technical-practices/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/agile-technical-practices/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/agile-coaching/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/agile-coaching/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/agile-marketing/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/agile-marketing/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/uncategorized/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/uncategorized/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/featured/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/featured/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/kanban-lean/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/kanban-lean/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/case-study/:slug',
    destination: '/insights/case-studies',
    permanent: true,
  },
  {
    source: '/case-study/:slug/',
    destination: '/insights/case-studies',
    permanent: true,
  },
  {
    source: '/webinars/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/webinars/:slug/',
    destination: '/blog/:slug',
    permanent: true,
  },

  // Category listing pages → blog
  {
    source: '/category/:path*',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/agile',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/agile/',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/scrum',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/scrum/',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/lean',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/lean/',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/article',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/article/',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/video',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/video/',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/featured',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/featured/',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/uncategorized',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/uncategorized/',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/kanban-lean',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/kanban-lean/',
    destination: '/blog',
    permanent: true,
  },

  // ============================================
  // CATEGORY 7: EVENTS & MISC (P2)
  // ============================================

  {
    source: '/events',
    destination: '/',
    permanent: true,
  },
  {
    source: '/events/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/event/:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/return-to-office-events',
    destination: '/',
    permanent: true,
  },
  {
    source: '/return-to-office-events/',
    destination: '/',
    permanent: true,
  },

  // Requests page
  {
    source: '/requests',
    destination: '/contact',
    permanent: true,
  },
  {
    source: '/requests/',
    destination: '/contact',
    permanent: true,
  },

  // Pre-work pages
  {
    source: '/certified-scrum-product-owner-pre-work',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/certified-scrum-product-owner-pre-work/',
    destination: '/training',
    permanent: true,
  },
  {
    source: '/3cs-checklist-download',
    destination: '/',
    permanent: true,
  },
  {
    source: '/3cs-checklist-download/',
    destination: '/',
    permanent: true,
  },

  // ============================================
  // CATEGORY 8: AUTHOR & MISC PAGES → HOMEPAGE (P3)
  // ============================================

  {
    source: '/author/:slug',
    destination: '/',
    permanent: true,
  },
  {
    source: '/author/:slug/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/organizer/:slug',
    destination: '/about/team',
    permanent: true,
  },
  {
    source: '/organizer/:slug/',
    destination: '/about/team',
    permanent: true,
  },
  {
    source: '/questions/:path*',
    destination: '/',
    permanent: true,
  },

  // Transformation pages
  {
    source: '/transformation',
    destination: '/',
    permanent: true,
  },
  {
    source: '/transformation/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/explore-transformation/:path*',
    destination: '/',
    permanent: true,
  },

  // Careers (removed)
  {
    source: '/careers',
    destination: '/',
    permanent: true,
  },
  {
    source: '/careers/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/careers/:path*',
    destination: '/',
    permanent: true,
  },

  // Coffee date / misc landing pages
  {
    source: '/coffee-date',
    destination: '/',
    permanent: true,
  },
  {
    source: '/coffee-date/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-services-virtual',
    destination: '/',
    permanent: true,
  },
  {
    source: '/agile-services-virtual/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/path-to-agility-badges',
    destination: '/path-to-agility',
    permanent: true,
  },
  {
    source: '/path-to-agility-badges/',
    destination: '/path-to-agility',
    permanent: true,
  },

  // ============================================
  // CATEGORY 9: FEED URLs (Remove trailing /feed/)
  // ============================================

  {
    source: '/:path*/feed',
    destination: '/:path*',
    permanent: true,
  },
  {
    source: '/:path*/feed/',
    destination: '/:path*',
    permanent: true,
  },

  // ============================================
  // CATEGORY 10: PDF FILE REDIRECTS
  // Old WordPress PDF URLs → New PDF locations
  // ============================================

  // Known specific PDF redirects from CSV
  {
    source: '/wp-content/uploads/2024/11/2020-SWA-Marketing-Case-Study-.pdf',
    destination: '/pdfs/case-studies/southwest-marketing.pdf',
    permanent: true,
  },
  {
    source: '/wp-content/uploads/2026/01/SWA-Marketing-Case-Study.pdf',
    destination: '/pdfs/case-studies/southwest-marketing.pdf',
    permanent: true,
  },
  {
    source: '/media/RecoverFromFlatBacklogs.pdf',
    destination: '/insights',
    permanent: true,
  },

  // Catch-all for WordPress uploads → insights page (soft landing)
  {
    source: '/wp-content/uploads/:year/:month/:file.pdf',
    destination: '/insights',
    permanent: true,
  },
  {
    source: '/media/:file.pdf',
    destination: '/insights',
    permanent: true,
  },

  // ============================================
  // CATEGORY 11: SPECIAL QUERY STRING REDIRECTS
  // Note: Next.js doesn't support query params in source
  // These need to be handled differently or in middleware
  // ============================================

  // Handled via vercel.json or middleware:
  // /insights/?post_types=case_study → /insights/case-studies
  // /insights/?_sft_category=webinar → /insights/webinars
  // /insights/?post_types=white_paper → /insights/white-papers
];

module.exports = redirects;
