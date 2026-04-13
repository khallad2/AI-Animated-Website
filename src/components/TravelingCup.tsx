'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { PRODUCT } from '@/data/product';

interface TravelingCupProps {
  visible: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * TravelingCup — Fixed-position can image that drifts alongside content.
 *
 * Bug 5 fix: the cup is now pushed to the RIGHT side of the viewport
 * (right: 4vw) so it never overlaps the left-aligned text content.
 * Its horizontal movement stays in the right 30% of the screen.
 */
export default function TravelingCup({ visible, containerRef }: TravelingCupProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  /* ── Horizontal: travel smoothly from right to left ── */
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', '-75vw']
  );

  /* ── Vertical drift ── */
  const y = useTransform(
    scrollYProgress,
    [0,     0.25,   0.50,   0.75,   0.92,  1],
    ['8vh', '-4vh', '6vh', '-6vh', '3vh', '0vh']
  );

  /* ── Subtle rotation ── */
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [-8, 6, -6, 5, -3, 0]
  );

  /* ── Gentle scale ── */
  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.4, 0.6, 0.85, 1],
    [0.65, 0.8, 0.72, 0.85, 0.78, 1.0]
  );

  /* ── Opacity ── */
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.88, 1],
    [0, 0.85, 0.85, 1]
  );

  if (!visible) return null;

  return (
    <motion.div
      className="traveling-cup"
      aria-hidden="true"
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
        /* Safely pinned to the right edge, well clear of centralized content */
        top: '50%',
        right: '4vw',
        zIndex: 40,
        translateY: '-50%'
      }}
    >
      <img
        src={PRODUCT.staticCup}
        alt=""
        className="w-[140px] md:w-[220px] lg:w-[280px] h-auto select-none"
        draggable={false}
      />
    </motion.div>
  );
}
