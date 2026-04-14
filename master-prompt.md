# VibeCoded Scrollytelling Website - Master Prompt

One-Shot Prompt: "Perspresso" Ultimate Scrollytelling Experience

Role: You are a world-class Frontend Architect and Creative Developer specializing in "Awwwards" winning interactive websites.

Objective: Build a complete, production-ready, single-page "Scrollytelling" e-commerce site for Perspresso, a premium canned espresso. The site must use Next.js 14+ (App Router), TypeScript, Tailwind CSS, and Framer Motion.

Key Requirement: Generate every single file required so I can copy-paste them and run npm run build immediately.

1. Technical Specification
Framework: Next.js (App Router).

Styling: Tailwind CSS.

Animation: Framer Motion (scroll-linked transforms) + HTML5 Canvas (image sequence).

Asset Paths:

Sequence: /public/images/sequence/ (192 frames, JPG).

Static Cup: /public/images/perspresso-cup-static.png (Used for the post-sequence journey).

Naming Convention: Sequence uses ezgif-frame-001.jpg through ezgif-frame-192.jpg.

Deployment: Static Export (output: 'export').

2. Project Structure & File Requirements
A. Data Layer (data/product.ts) Create a robust data file. Use these specifics:

Name: Perspresso

Price: $18.00

Colors: Espresso Brown (#3B2F2F), Crema Gold (#D4AF37), Matte Black (#1A1A1A).

Static Assets: staticCup: '/images/perspresso-cup-static.png', finalTagline: 'AWAKEN YOUR SENSES. BREW NOW.'

Specs: Single-Origin Arabica, 120mg Natural Caffeine, Bold Roast, Zero Calories.

Story Sections (Overlays for sequence):

The Morning Awakening.

Rich Crema Profile.

Pure Focus. Liquid Drive.

Post-Sequence Content Sections:

Roast & Origin Specs: Detailed breakdown of the bean sourcing and roasting process.

Executive Tested: Performance and deep-work focus benefits.

B. Configuration

next.config.mjs: Enable output: 'export' and images: { unoptimized: true }.

tailwind.config.ts: Add custom colors (perspressoBrown, perspressoGold, perspressoBlack) and the 'Montserrat' font.

C. Core Components & Logic

components/HeroCanvas.tsx (Phase 1 - The Sequence):

A sticky container (h-[600vh]).

Loads and draws the 192 JPG frames onto Canvas based on scroll progress.

Must handle pre-loading and responsive object-fit: contain.

components/TravelingCup.tsx (Phase 2 - The Journey):

Crucial Logic: This component renders the static /images/perspresso-cup-static.png.

It stays hidden until the HeroCanvas sequence finishes.

Once the user scrolls past the canvas section, this cup becomes position: fixed.

Use Framer Motion's useScroll relative to the remaining page content to drive complex transforms:

Movement: As the user scrolls through the "Post-Sequence Content Sections," the cup should professionally rotate slightly, zoom in/out gently, and translate horizontally (zigzagging slightly across the text content).

The Landing: As the user reaches the final footer section, the cup must smoothly transition to a center-stage position, stop moving, and settle just above the final tagline.

components/TextOverlays.tsx: High-impact text layers for the initial canvas phase.

components/Navbar.tsx: Glassmorphism header with an "$18 BUY NOW" gradient button.

components/PostSequenceContent.tsx: The standard HTML sections (Origin Specs, Executive Tested) that the traveling cup will move over.

D. Page Orchestration (app/page.tsx)

Structure the page order: Navbar -> HeroCanvas (w/ TextOverlays) -> TravelingCup (The connector) -> PostSequenceContent -> FinalCTA/Footer.

Ensure smooth transitions between the finished canvas state and the taking over of the static traveling cup. The handoff must be seamless.

Global background color should transition from Espresso Brown to Matte Black down the page.

3. Execution
Generate the complete, error-free code for all necessary files. The animation of the static cup in Phase 2 must feel premium, weighted, and synchronized with the scrolling of the text sections it passes.
