# Design Guidelines: De la Villarmois Landing Page

## Design Approach
**Reference-Based**: Drawing inspiration from professional service sites like Linear and Stripe, combined with the educational technology sector's emphasis on clarity and trust. The design balances corporate professionalism with modern, approachable aesthetics.

## Core Design Principles
1. **Trust through clarity**: Clean layouts with generous whitespace
2. **Data-driven credibility**: Prominent display of metrics and evidence
3. **Professional sophistication**: Modern without being trendy
4. **Accessibility-first**: High contrast, readable typography

## Color Palette

**Dark Mode (Primary)**
- Background: 15 13% 10% (deep navy, almost black)
- Surface: 220 40% 15% (dark blue-gray cards)
- Primary: 187 100% 40% (vibrant cyan #00C4CC)
- Secondary: 215 100% 13% (deep blue #001F3F)
- Accent: 187 80% 35% (muted cyan for hover states)
- Text Primary: 210 20% 98%
- Text Secondary: 215 15% 70%

**Light Mode (Secondary)**
- Background: 210 20% 98%
- Surface: 210 17% 95% (light gray #F5F7FA)
- Primary: 187 100% 40% (cyan)
- Secondary: 215 100% 13% (deep blue)
- Text Primary: 220 40% 10%
- Text Secondary: 220 20% 40%

## Typography

**Font Families**
- Headers: 'Montserrat', sans-serif (700, 800 weights)
- Body: 'Open Sans', sans-serif (400, 600 weights)
- Load via Google Fonts CDN

**Type Scale**
- Hero H1: text-5xl md:text-6xl font-bold (48px/60px desktop)
- Section H2: text-3xl md:text-4xl font-bold (36px/48px desktop)
- Subsection H3: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg (16px/18px)
- Small: text-sm (14px)

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6 md:p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl (for readable text)

**Grid Structure**
- KPI Cards: grid-cols-1 md:grid-cols-3 gap-6
- Portfolio: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Two-column sections: grid-cols-1 lg:grid-cols-2 gap-12

## Component Library

**Navigation**
- Fixed header with logo (left) and navigation links (right)
- Transparent overlay on hero, solid background on scroll
- Mobile: Hamburger menu with slide-in drawer

**Hero Section**
- Full viewport height (min-h-screen) with gradient overlay
- Logo: max-width 420px, positioned top-left or centered
- Headline + subheadline + primary CTA button
- Subtle animated gradient background (deep blue to cyan undertones)
- Optional: Abstract tech/education illustration or photo

**KPI Cards**
- Large numerical display (text-5xl font-extrabold) in cyan
- Supporting text below in lighter weight
- Rounded corners (rounded-xl), subtle background
- Light shadow on hover (hover:shadow-lg transition)

**Technology/Services Section**
- Two-column layout (image/icon left, content right alternating)
- Icon or illustration per service (use Heroicons)
- Bold service name, descriptive paragraph
- Background: alternating white/light gray sections

**Portfolio Grid**
- Card-based layout with project thumbnail/icon
- Project title (font-bold text-xl)
- Brief description (2-3 lines)
- Hover effect: subtle lift (hover:-translate-y-1) and shadow increase

**Contact Section**
- Centered layout with inspirational quote
- Email/form integration area
- Optional: Location map or contact details in sidebar
- Strong CTA button

**Footer**
- Dark background (matching secondary color)
- Copyright, links, optional newsletter signup
- Social media icons (if applicable)

## Images

**Hero Image**: Large, professional image showing technology in education context (classroom with tablets, collaborative workspace, or abstract tech visualization). Full-width, 60-70% viewport height, with dark overlay (opacity-50) for text readability.

**Section Images**: 
- Technology section: 3 supporting images showing AI tools, classroom tech, ethics discussions
- Portfolio: Thumbnail images for each project showcase
- All images should have rounded corners (rounded-lg) and subtle shadows

**Image Treatment**: 
- Maintain consistent aspect ratios (16:9 for hero, 4:3 for cards)
- Use subtle grayscale filter on non-hero images for visual cohesion
- Ensure high contrast against backgrounds

## Interactions

**Animations**: Minimal and purposeful
- Smooth scroll to sections (scroll-behavior: smooth)
- Fade-in on scroll for section content (use intersection observer)
- Button hover: subtle scale (hover:scale-105) with color shift
- Card hover: lift effect with shadow enhancement
- No loading spinners or distracting motion

**Transitions**: All transitions duration-300 ease-in-out

## Accessibility
- Maintain WCAG AA contrast ratios (4.5:1 minimum)
- Focus states: 2px cyan ring on interactive elements
- Skip navigation link for keyboard users
- All images have descriptive alt text
- Semantic HTML structure (header, main, section, footer)