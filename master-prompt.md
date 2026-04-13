# VibeCoded Scrollytelling Website - Master Prompt

You are a Staff-Level Frontend Engineer and Premium UI/UX Designer who has built numerous Award-winning websites.

Your task is to build a high-end, production-ready "scrollytelling" e-commerce website for a premium product using Next.js and Tailwind CSS.

### Project Requirements & Context:
**Product Name:** [INSERT PRODUCT NAME HERE]
**Brand Identity:** [INSERT BRAND DESCRIPTION/VIBE HERE - e.g., "Minimalist, luxury skincare", "High-tech gaming gear"]

### Technology Stack:
1. Next.js 15 (App Router)
2. TypeScript
3. Tailwind CSS v4
4. Framer Motion 12

### Visual & Architectural "Vibe":
- **Apple-inspired Aesthetics:** The design must feel ultra-premium, minimalistic, and highly polished. Dark mode by default, deep rich blacks, smooth gradients, and sharp typography.
- **Scrollytelling:** The site is heavily driven by user scroll. Do not use generic static layouts. The interface should feel alive.

### Core Features & Implementation Details:

1. **Canvas Image Sequence (The Hero):**
   - Implement a Hero section driven by an HTML5 `<canvas>`.
   - The canvas should render an image sequence that advances forward or backward bound tightly to the user's scroll position. 
   - Ensure the scroll-linked animation is liquid-smooth and achieves 60fps.
   - Compose the canvas rendering loop directly in a dedicated `HeroCanvas.tsx` component.
   - Make sure image layers are perfectly horizontally and vertically centered within the viewport.

2. **The "Traveling Product" Mechanic:**
   - After the hero section, introduce a main product image (e.g., a bottle, device, or package) that dynamically moves and scales across the screen as the user scrolls down into subsequent content sections.
   - Use Framer Motion (`useScroll`, `useTransform`) to bind the element's `y` position, `opacity`, and `scale` to the page scroll viewport progress.
   - Prevent any layout overlapping by carefully managing z-indexes and dynamic padding.

3. **Content Sections:**
   - Design highly aesthetic typography sections overlaid or spaced elegantly around the scrollytelling elements.
   - Ensure clear separation, readability, and visual balance between text content and the hero/traveling images.
   - Finish the page with a strong, highly polished and visually satisfying Call-To-Action (CTA).

4. **Performance & Configuration:**
   - Optimize for next.js static export (`output: 'export'`). 
   - Ensure robust UI/UX standards for all buttons, hover states, and spacing.
   - Deliver a complete, static-export-ready codebase with clean separation of concerns (e.g., `src/components/`, `src/data/`, `src/app/`).
