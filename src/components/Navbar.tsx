'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { PRODUCT } from '@/data/product';

/**
 * Navbar — Glassmorphism header with scroll-reactive backdrop.
 * Bug 1 fix: buttons have generous padding.
 * Bug 6 fix: price reads €5.
 * Accessibility: proper nav landmark, aria-label, focus-visible ring on links & button.
 */
export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.nav
      aria-label="Main navigation"
      className="fixed top-2 md:top-6 left-2 right-2 md:left-10 md:right-10 z-50 mix-blend-difference px-6 py-6 md:px-10 md:py-8 flex items-center justify-between pointer-events-auto rounded-none md:rounded-2xl"
      style={{ opacity: 1 }}
    >
      {/* Glass background */}
      <motion.div
        className="absolute inset-0 glass"
        style={{ opacity: bgOpacity }}
      />

      {/* Logo */}
      <a
        href="#"
        className="relative z-10 flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crema-gold rounded-lg"
        aria-label="Perspresso — Back to top"
      >
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-crema-gold to-amber-700 flex items-center justify-center shadow-lg">
          <span className="text-matte-black font-black text-sm" aria-hidden="true">P</span>
        </div>
        <span className="text-lg font-bold tracking-[0.15em] uppercase text-warm-white">
          {PRODUCT.name}
        </span>
      </a>

      {/* Nav links + CTA */}
      <div className="relative z-10 flex items-center gap-4 sm:gap-8">
        <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-[0.15em] uppercase text-warm-white/70">
          <a
            href="#roast-origin"
            className="hover:text-crema-gold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crema-gold rounded py-1 px-2"
          >
            Origin
          </a>
          <a
            href="#executive-tested"
            className="hover:text-crema-gold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crema-gold rounded py-1 px-2"
          >
            Performance
          </a>
        </div>
        <button
          id="buy-now-nav"
          className="gold-button px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm tracking-[0.12em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-white ml-2 sm:ml-4"
          aria-label={`Buy Perspresso for ${PRODUCT.buyPrice}`}
        >
          {PRODUCT.buyPrice} — BUY NOW
        </button>
      </div>
    </motion.nav>
  );
}
