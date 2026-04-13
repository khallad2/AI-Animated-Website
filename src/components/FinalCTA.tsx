'use client';

import { motion } from 'framer-motion';
import { PRODUCT, SPECS } from '@/data/product';

/**
 * FinalCTA — Footer with specs, tagline, and order button.
 * Bug 1 fix: CTA button has generous padding.
 * Bug 6 fix: price is €5.
 * Accessibility: semantic footer, aria-labels on buttons, proper focus styles.
 */
export default function FinalCTA() {
  return (
    <footer className="final-cta-section py-32 px-8 md:px-16" role="contentinfo">
      {/* Specs strip */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 md:gap-10 mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      >
        {SPECS.map((spec) => (
          <div key={spec.label} className="text-center px-3">
            <div className="text-[0.65rem] md:text-xs font-medium tracking-[0.2em] uppercase text-warm-white/30 mb-1.5">
              {spec.label}
            </div>
            <div className="text-sm md:text-base font-semibold text-crema-gold/80">
              {spec.value}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] gold-gradient-text max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
      >
        {PRODUCT.finalTagline}
      </motion.h2>

      {/* Price + CTA */}
      <motion.div
        className="flex flex-col items-center gap-10 mt-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="text-3xl md:text-4xl font-bold text-warm-white/80">
          {PRODUCT.price}
          <span className="text-base md:text-lg font-normal text-warm-white/40 ml-3">per can</span>
        </div>
        <button
          id="buy-now-footer"
          className="gold-button px-12 py-5 sm:px-16 sm:py-6 rounded-full text-sm sm:text-lg font-black tracking-[0.18em] animate-pulse-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-white mb-6"
          aria-label={`Order Perspresso for ${PRODUCT.price} per can`}
        >
          ORDER NOW
        </button>
      </motion.div>

      {/* Footer bottom */}
      <motion.div
        className="mt-28 pt-8 border-t border-warm-white/5 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-xs text-warm-white/25 tracking-[0.1em]">
          &copy; {new Date().getFullYear()} Perspresso. Crafted with precision. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
