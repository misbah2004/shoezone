# Linen Store Design Style Guide

## Design Philosophy

### Visual Language
**Natural Elegance**: The design embodies the inherent beauty of linen - organic, breathable, and timeless. Every element should feel as natural and authentic as the fabric itself, avoiding artificial or overly polished aesthetics.

**Quiet Luxury**: Premium quality communicated through restraint rather than excess. Clean lines, thoughtful spacing, and carefully curated content create an atmosphere of understated sophistication.

**Sustainable Mindset**: Visual choices reflect environmental consciousness - earth tones, natural textures, and imagery that connects users to the organic origins of linen.

### Color Palette
**Primary Colors**:
- Natural Linen: #F5F1E8 (main background)
- Flax Bloom: #E8DCC0 (section backgrounds)
- Stone Gray: #8B8680 (primary text)
- Sage Green: #9CAF88 (accent color)

**Secondary Colors**:
- Warm White: #FEFCF7 (cards and overlays)
- Charcoal: #4A453E (headings and emphasis)
- Soft Terracotta: #D4A574 (call-to-action elements)
- Mist Blue: #B8C5D1 (secondary accents)

**Color Usage**:
- Background maintains consistent natural linen tone throughout
- Text colors ensure 4.5:1 contrast ratio for accessibility
- Accent colors used sparingly for maximum impact
- No pure black or saturated colors

### Typography
**Primary Font**: "Crimson Text" (serif) - for headings and brand elements
- Elegant, readable serif that evokes traditional craftsmanship
- Used for H1-H4 headings, logo, and featured text
- Weights: Regular (400), Semibold (600)

**Secondary Font**: "Inter" (sans-serif) - for body text and UI elements
- Clean, modern sans-serif for optimal readability
- Used for body text, navigation, buttons, and forms
- Weights: Regular (400), Medium (500), Semibold (600)

**Typography Scale**:
- H1: 3.5rem (56px) - Hero headings
- H2: 2.5rem (40px) - Section headings
- H3: 1.875rem (30px) - Subsection headings
- H4: 1.5rem (24px) - Card titles
- Body: 1rem (16px) - Standard text
- Small: 0.875rem (14px) - Captions and metadata

## Visual Effects & Styling

### Used Libraries & Effects
**Core Animation**: Anime.js for smooth, organic motion
- Gentle fade-ins and slide-ups for content reveals
- Subtle hover animations with natural easing
- Shopping cart slide-out with elastic easing

**Background Effects**: Shader-park for ambient visuals
- Subtle linen texture overlay using displacement shaders
- Gentle particle system suggesting flax fibers
- Soft, organic movement without distraction

**Image Carousels**: Splide.js for product galleries
- Smooth transitions with custom easing curves
- Touch-friendly navigation for mobile
- Lazy loading for performance optimization

**Visual FX**: p5.js for creative elements
- Organic shape generation for decorative elements
- Interactive hover effects on product cards
- Subtle background animations

### Header & Navigation Effects
**Navigation Bar**:
- Translucent background with backdrop blur
- Gentle shadow on scroll
- Smooth color transitions on hover
- Sticky positioning with subtle shrink animation

**Logo Animation**:
- Subtle scale and opacity changes on hover
- Custom letter-spacing animation for brand name
- No aggressive effects - maintains premium feel

### Interactive Elements
**Buttons**:
- Soft shadow with gentle lift on hover
- Color transitions using natural timing
- Text color shifts for optimal contrast
- Rounded corners with organic feel

**Product Cards**:
- Subtle scale increase on hover (1.02x)
- Soft shadow expansion
- Image zoom with overlay fade-in
- Quick action buttons slide up from bottom

**Form Elements**:
- Soft focus states with color transitions
- Gentle validation feedback
- Organic border radius
- Natural placeholder text styling

### Scroll Motion Effects
**Reveal Animations**:
- Elements fade in as they enter viewport
- Subtle upward movement (16px) during reveal
- Staggered timing for grouped elements
- Organic easing curves (cubic-bezier)

**Parallax Elements**:
- Minimal background movement (±4%)
- Applied only to decorative elements
- Maintains readability and accessibility

### Background & Layout
**Consistent Background**:
- Single natural linen color throughout all pages
- No section-specific background colors
- Visual separation through content blocks and shadows
- Subtle texture overlay for depth

**Grid System**:
- CSS Grid for main layout structure
- Flexible columns that adapt to content
- Generous whitespace for breathing room
- Organic asymmetry where appropriate

**Content Sections**:
- Soft drop shadows for elevation
- Rounded corners (8px) for organic feel
- Internal padding for comfortable reading
- Subtle borders in low-contrast colors

### Mobile Considerations
**Responsive Typography**:
- Fluid scaling based on viewport
- Maintains readability across devices
- Touch-friendly minimum sizes (16px+)

**Touch Interactions**:
- Larger touch targets (44px minimum)
- Swipe gestures for carousels
- Collapsible navigation for space efficiency
- Optimized form inputs for mobile keyboards

### Accessibility Features
**High Contrast Support**:
- Alternative color scheme available
- Maintains brand identity while improving readability
- User-toggleable preference

**Motion Preferences**:
- Respects prefers-reduced-motion settings
- Fallback to simple fade transitions
- No essential content hidden behind animations

**Focus Management**:
- Clear focus indicators for keyboard navigation
- Logical tab order throughout interface
- Skip links for screen readers