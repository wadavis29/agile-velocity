# Session Notes - January 19, 2026

## Current State
- All 4 PDF case studies enriched with epic storytelling content
- Case study pages redesigned with dramatic new layout
- Dev server runs on port 3000 (or next available)

## To Resume

1. Start the dev server:
```bash
cd /Users/wesleydavis/Documents/Websites/Agile\ Velocity\ NEW/next-app
npm run dev
```

2. View case studies at: `http://localhost:3000/case-studies`

3. Quick context for Claude: "Continuing work on the Agile Velocity Next.js site"

## What's Complete

### Case Study Redesign
- Epic storytelling layout with sections for:
  - Human story
  - Context
  - DIY failure / previous attempts
  - Transformation
  - Cultural evolution
  - Path to Agility progress indicator
  - Testimonials
  - Results showcase

### Enriched Case Studies (from PDFs)
1. **Texas Mutual Insurance** - David Foster story, Guinea Pigs experiment, $5.7B insurtech context
2. **Southwest Tech Ops** - 300+ members, 55 apps, predictability 67.3% → 105%
3. **Southwest Operations** - 250 people/25 teams, $5M saved, J-Curve model
4. **Southwest Marketing** - Repurposed copy room, 61% test success rate, millions in revenue

## Key Files
- `/app/case-studies/page.jsx` - Case studies index
- `/app/case-studies/[slug]/page.jsx` - Case study detail page
- `/data/case-studies.js` - All case study data with rich content
- `/app/globals.css` - Styling (case studies section ~line 4000+)

## Potential Next Steps
- Review enriched case studies in browser and tweak styling
- Add case study hero images
- Work on other site sections
- Test responsive design at all breakpoints
