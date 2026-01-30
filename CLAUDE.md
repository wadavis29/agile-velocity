# Claude Development Guidelines for Agile Velocity Website

## Overview
This document defines expectations, standards, and guidelines for Claude when working on the Agile Velocity website. Read this at the start of every session. These are non-negotiable standards.

---

## 1. Responsive Design Requirements

### Breakpoints (Test ALL of these, EVERY time)
- **1200px** - Large desktop
- **1024px** - Small desktop / large tablet
- **768px** - Tablet
- **480px** - Mobile

### Responsive Principles
- **Mobile is not an afterthought.** Every component must work beautifully on mobile from the start.
- **Test each section at each breakpoint** before considering work complete.
- **Never let content overflow horizontally.** If text is too big, the container must handle it (overflow: hidden, text scaling, etc.)
- **Grids collapse intelligently:**
  - 5 columns → 3 → 2 → 1
  - 3 columns → 2 → 1
  - Always consider how the last item behaves (span full width if odd number)
- **Touch targets:** Buttons and interactive elements must be at least 44px on mobile.
- **Padding scales down:** Desktop padding (8rem 4rem) → Tablet (5rem 2rem) → Mobile (4rem 1rem)
- **Font sizes scale down but stay readable:** Never go below 0.75rem for body text.

### Typography Scaling
- Hero titles: Should be BOLD and DOMINANT at all sizes. Don't be timid.
- Section titles: Use clamp() for fluid scaling, but set aggressive minimums.
- Body text: 1rem minimum on desktop, 0.9rem minimum on mobile.

### Common Responsive Patterns
```css
/* Grid collapse pattern */
.grid {
    grid-template-columns: repeat(5, 1fr); /* Desktop */
}
@media (max-width: 1024px) {
    .grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 768px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
    .grid { grid-template-columns: 1fr; }
}

/* Horizontal to vertical pattern */
.flow {
    flex-direction: row; /* Desktop */
}
@media (max-width: 1024px) {
    .flow { flex-direction: column; }
}
```

---

## 2. Content Context & Section Types

### Understanding Content Context
Not all content is equal. Before making responsive decisions, UNDERSTAND what the content represents:

- **Is this a process/sequence?** → Order must be preserved
- **Is this a collection of equal items?** → Can reflow freely
- **Is this hierarchical?** → Visual hierarchy must be maintained
- **Is this comparative?** → Items should remain visually comparable

### Section Types & Their Responsive Behavior

#### PROCESS/SEQUENTIAL Sections
**Examples:** 5 Stages (Align → Learn → Predict → Accelerate → Adapt), Cascade Flow (9 → 26 → 100 → 400+)

**Rules:**
- NEVER break into multiple columns that disrupt reading order
- Go directly to single column on smaller screens
- Maintain visual connectors between steps
- Order is sacred - a user must be able to follow 1 → 2 → 3 → 4 → 5

```css
/* WRONG - breaks the sequence */
.process-grid {
    grid-template-columns: repeat(2, 1fr); /* User reads 1,2 then 3,4 - confusing */
}

/* RIGHT - preserves sequence */
.process-grid {
    grid-template-columns: 1fr; /* User reads 1,2,3,4,5 in order */
    max-width: 500px;
    margin: 0 auto;
}
```

#### COLLECTION Sections
**Examples:** 9 Business Outcomes, Challenge Cards, Testimonials

**Rules:**
- Can reflow into fewer columns
- Order is less critical (though consistency helps)
- Last item can span full width if odd number
- Standard grid collapse pattern applies

```css
/* Collection can collapse normally */
.collection-grid {
    grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 768px) {
    .collection-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
    .collection-grid { grid-template-columns: 1fr; }
}
```

#### COMPARISON Sections
**Examples:** Pricing tiers, Before/After, Level comparisons (Org/System/Team)

**Rules:**
- Items should remain side-by-side as long as possible
- When stacking, maintain clear visual separation
- Consider using tabs or accordion on mobile if comparison is critical

#### HIERARCHICAL Sections
**Examples:** Navigation, nested content, parent-child relationships

**Rules:**
- Primary items more prominent than secondary
- Indentation or visual nesting must be preserved
- Don't flatten hierarchy on mobile - adapt it

### Identifying Section Type
Before writing CSS, ask:
1. **What happens if a user reads items out of order?**
   - If confusing → PROCESS type
   - If fine → COLLECTION type

2. **Do items need to be compared side-by-side?**
   - If yes → COMPARISON type
   - If no → Can stack freely

3. **Is there a parent-child relationship?**
   - If yes → HIERARCHICAL type
   - If no → Flat structure

### Current Site Section Types

| Section | Type | Responsive Behavior |
|---------|------|---------------------|
| 5 Stages (Journey) | PROCESS | Single column on mobile, preserve 1→5 order |
| Cascade Flow | PROCESS | Vertical stack with connectors |
| Challenge Cards | COLLECTION | Can collapse 5→2→1 |
| 9 Business Outcomes | COLLECTION | Can collapse 3→2→1 |
| 3 Levels | COMPARISON | Stack but keep visually distinct |
| Stats Grid | COLLECTION | Can stack |
| Training Cards | COLLECTION | Can stack |

---

## 3. Design Philosophy

### Be Bold, Not Safe
- Headlines should command attention. When in doubt, go bigger.
- Don't water down visual impact for "safety."
- If the user says "make it bigger," make it SIGNIFICANTLY bigger. Don't inch up.
- This is a trademarked framework (Path to Agility®). It deserves to look important.

### Clear Over Clever
- No jargon without explanation.
- No vague phrases like "that matter," "what you need," "the right way."
- Every statement should answer: What specifically? For whom? Why?

### Concrete Over Vague
- Bad: "Outcomes that matter"
- Good: "Speed, Quality, Predictability"
- Bad: "We help you succeed"
- Good: "We start with the business outcomes you need and work backward to only the practices that will move those outcomes."

### Consistency Over Variety
- Use established patterns from existing components.
- Match spacing, colors, and typography to what's already built.
- Don't invent new patterns when existing ones work.

---

## 4. Content Guidelines

### Avoid Elusive Language
These phrases are BANNED:
- "that matter" (matter to whom? why?)
- "what you need" (be specific about what)
- "the right [anything]" (right according to what?)
- "best practices" (which ones specifically?)
- "solutions" (what solutions?)
- "leverage" (just say "use")
- "optimize" without saying what's being optimized
- "streamline" without specifics
- "empower" (overused, vague)

### Be Specific
- Instead of "improve outcomes" → "increase delivery speed by establishing predictable cadence"
- Instead of "better results" → "70% of transformations fail to deliver expected results"
- Instead of "we help" → "we assess your teams against 100 capabilities and identify specific gaps"

### Use Real Numbers
- "100+ enterprise transformations completed"
- "15+ years developing Path to Agility"
- "9 Business Outcomes, 26 Agile Outcomes, 100 Capabilities, 400+ Practices"

### Terminology Consistency
- "Business Outcomes" (not just "Outcomes" when referring to the 9)
- "Agile Outcomes" (the 26 measurable improvements)
- "Path to Agility®" (include trademark on first mention per page)
- "Navigator" (the software platform)

---

## 5. Quality Checks (Do These EVERY Time)

### Before Considering Any Work Complete:
1. **Responsive check:** Resize browser to 1024px, 768px, 480px. Does everything work?
2. **Overflow check:** Is anything causing horizontal scroll?
3. **Content check:** Is any text vague or elusive? Rewrite it.
4. **Consistency check:** Does this match the style of other sections?
5. **Mobile-first check:** Is this actually usable on a phone?

### Proactive Fixes
Don't wait to be told. If you see:
- Text overflowing → Fix it immediately
- Inconsistent spacing → Match it to other sections
- Vague content → Rewrite it to be specific
- Missing responsive styles → Add them
- Anything that looks broken at any viewport → Fix it

---

## 6. Proactive Behavior Expectations

### What "Proactive" Means
- **Anticipate problems.** If you're adding a 5-column grid, immediately add the responsive breakpoints.
- **Fix adjacent issues.** If you're editing a section and notice the next section has problems, fix those too.
- **Test thoroughly.** Don't submit work that only works at one viewport size.
- **Question vague content.** If something seems unclear, flag it or fix it.

### What NOT to Do
- Don't make minimal changes when asked for bold ones.
- Don't add responsive styles as an afterthought.
- Don't leave broken mobile layouts "for later."
- Don't use placeholder or vague content.
- Don't be timid with design decisions.

---

## 7. Technical Standards

### CSS Architecture
- Use CSS custom properties (variables) from styles.css
- Follow existing naming conventions (.section-name, .component-name)
- Put responsive styles in dedicated media query blocks at the end of component styles
- Use clamp() for fluid typography where appropriate

### Key CSS Variables (from styles.css)
```css
--color-gold: #FFBE62
--color-orange: #FF8C42
--bg-dark: #0F1419
--bg-darker: #0A0D10
--font-display: 'Space Grotesk', sans-serif
--font-body: 'Inter', sans-serif
```

### Component Structure
```jsx
<section className="section-name">
  <div className="section-header">
    <span className="section-tag">Tag</span>
    <h2 className="section-title">Title <span className="highlight">Highlight</span></h2>
    <p className="section-subtitle">Subtitle text</p>
  </div>
  <div className="section-content">
    {/* Content */}
  </div>
</section>
```

### File Organization
- Pages: `/next-app/app/` (Next.js App Router)
- Components: `/next-app/components/`
- Styles: `/next-app/app/globals.css`
- Data: `/next-app/data/`
- Images: `/next-app/public/images/` or `/images/`
- Strategy docs: `/Strategy/`
- Production URL: https://agilevelocity.vercel.app

---

## 8. Brand & Visual Guidelines

### Colors
- **Primary Gold:** #FFBE62 - Used for accents, highlights, CTAs
- **Secondary Orange:** #FF8C42 - Used for gradients, hover states
- **Background Dark:** #0F1419 - Primary background
- **Background Darker:** #0A0D10 - Section variation
- **Text:** White with varying opacity (1, 0.9, 0.7, 0.5)

### Typography
- **Headlines:** Space Grotesk, uppercase, tight letter-spacing
- **Body:** Inter, normal weight, generous line-height (1.6-1.7)
- **Accents:** Gold color for emphasized words

### Visual Effects
- Subtle gradients (not flat colors)
- Gold/orange gradient accents
- Backdrop blur for overlays
- Subtle animations (draw-in, fade-up)
- No harsh borders - use subtle rgba borders

### Spacing
- Sections: 8rem vertical padding on desktop
- Between elements: Use consistent scale (0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem)
- Max content width: 1200px-1400px typically

---

## 9. Path to Agility Framework Reference

### The Structure
- **9 Business Outcomes:** Employee Engagement, Customer Satisfaction, Quality, Speed, Predictability, Innovation, Market Responsiveness, Productivity, Continuous Improvement
- **26 Agile Outcomes:** Measurable improvements that drive business outcomes
- **100 Capabilities:** Skills and behaviors teams need
- **400+ Practices:** Specific actions that enable capabilities

### The 5 Stages
1. **Align** - Align the agile initiative with measurable business outcomes
2. **Learn** - Establish foundational agile practices and culture of learning
3. **Predict** - Maintain predictable cadence of delivery
4. **Accelerate** - Optimize value delivery system, shorten time-to-market
5. **Adapt** - Embrace organization-wide agility

### The 3 Levels
1. **Organization** - Leadership, vision, alignment
2. **System** - Collections of teams coordinating
3. **Team** - Individual team practices and roles

### The Satir Change Model (J-Curve)
- Status Quo → Chaos & Resistance → Integration & Practice → New Status Quo
- Performance dips before it improves
- Used to set expectations for transformation journey

---

## 10. Common Mistakes to Avoid

### Design Mistakes
- Making titles too small on mobile
- Not testing at all breakpoints
- Leaving horizontal overflow
- Inconsistent spacing between sections
- Timid color choices

### Content Mistakes
- Using "outcomes" when you mean "Business Outcomes"
- Vague CTAs ("Learn More" instead of "See the 9 Business Outcomes")
- Jargon without explanation
- Missing specific numbers/proof points

### Code Mistakes
- Hardcoded values instead of CSS variables
- Missing responsive styles
- Inconsistent class naming
- Not matching existing patterns

---

## 11. Session Checklist

At the START of each session:
- [ ] Read this document
- [ ] Understand what page/section we're working on
- [ ] Review existing patterns in that area

At the END of each task:
- [ ] Test at 1024px, 768px, 480px
- [ ] Check for horizontal overflow
- [ ] Verify content is specific, not vague
- [ ] Confirm visual consistency with rest of site
- [ ] Fix any adjacent issues noticed

---

## 12. When In Doubt

- **Go bolder** with design choices
- **Be more specific** with content
- **Add more breakpoints** for responsive
- **Fix more issues** proactively
- **Ask** if something is genuinely unclear

The goal is a website that looks premium, communicates clearly, and works flawlessly on every device. No compromises.
