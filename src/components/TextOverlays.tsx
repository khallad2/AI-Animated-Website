'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PRODUCT, STORY_OVERLAYS } from '@/data/product';

export default function TextOverlays() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track ONLY this Hero's 300vh container, not the entire page!
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Strictly 4-phase non-overlapping layout
  // 1) Title starts visible, fades/slides up at 20%
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.20, 1], [1, 1, 0, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15, 0.20, 1], [0, 0, -40, -40]);

  // 2) Story 1 appears 25% -> 40%
  const s1Opacity = useTransform(scrollYProgress, [0, 0.20, 0.25, 0.40, 0.45, 1], [0, 0, 1, 1, 0, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.20, 0.25, 0.40, 0.45, 1], [40, 40, 0, 0, -40, -40]);

  // 3) Story 2 appears 50% -> 65%
  const s2Opacity = useTransform(scrollYProgress, [0, 0.45, 0.50, 0.65, 0.70, 1], [0, 0, 1, 1, 0, 0]);
  const s2Y = useTransform(scrollYProgress, [0, 0.45, 0.50, 0.65, 0.70, 1], [40, 40, 0, 0, -40, -40]);

  // 4) Story 3 appears 75% -> 90%
  const s3Opacity = useTransform(scrollYProgress, [0, 0.70, 0.75, 0.90, 0.95, 1], [0, 0, 1, 1, 0, 0]);
  const s3Y = useTransform(scrollYProgress, [0, 0.70, 0.75, 0.90, 0.95, 1], [40, 40, 0, 0, -40, -40]);

  const opacities = [s1Opacity, s2Opacity, s3Opacity];
  const ys = [s1Y, s2Y, s3Y];

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-[300vh]">
      <div className="sticky top-0 z-10 w-full h-screen flex flex-col justify-center pointer-events-none">
        <div className="container mx-auto px-6 md:px-12 flex justify-center">
          <div className="w-full max-w-3xl text-center relative h-[500px]">
          
          {/* Main Hero Title */}
          <motion.div style={{ opacity: titleOpacity, y: titleY }} className="absolute inset-x-0 top-auto bottom-0 md:bottom-[-80px] lg:bottom-[-160px] flex flex-col items-center justify-center pointer-events-auto">
            <div className="bg-black/30 backdrop-blur-md px-12 py-10 rounded-3xl border border-white/5 drop-shadow-2xl">
              <div className="gold-line mb-6 mx-auto w-24" aria-hidden="true" />
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight leading-[1.0] mb-6 gold-gradient-text" aria-label="Perspresso">
                {PRODUCT.name}
              </h1>
              <p className="text-xl md:text-2xl font-medium tracking-[0.3em] uppercase text-crema-gold mb-8 drop-shadow-lg">
                {PRODUCT.tagline}
              </p>
              <p className="text-sm text-warm-white/60 font-light tracking-[0.2em] uppercase animate-pulse">
                Scroll to explore ↓
              </p>
            </div>
          </motion.div>

          {/* Dynamic Story Overlays */}
          {STORY_OVERLAYS.map((o, idx) => (
            <motion.div
              key={o.id}
              style={{ opacity: opacities[idx], y: ys[idx] }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
            >
              <div className="bg-black/40 backdrop-blur-lg px-8 py-10 md:px-16 md:py-12 rounded-3xl border border-white/10 drop-shadow-xl shadow-2xl">
                <div className="gold-line mb-6 mx-auto w-16" aria-hidden="true" />
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.1] mb-5 gold-gradient-text">
                  {o.title}
                </h2>
                <p className="text-sm md:text-lg font-bold tracking-[0.2em] uppercase text-crema-gold/90 mb-6 drop-shadow-md">
                  {o.subtitle}
                </p>
                <p className="text-base md:text-xl text-warm-white/90 font-light leading-relaxed max-w-xl mx-auto">
                  {o.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
    </div>
  );
}
