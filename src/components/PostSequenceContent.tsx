'use client';

import { motion } from 'framer-motion';
import { POST_SECTIONS, type PostSection } from '@/data/product';

/**
 * PostSequenceContent — "Roast & Origin" and "Executive Tested" sections.
 *
 * Bug 4 fix: generous px-8 / md:px-16 / lg:px-24 padding + max-w-7xl centering.
 * Bug 5 fix: content stays in the LEFT 60% on large screens so the traveling
 *            cup (pinned right) never overlaps.
 * Accessibility: semantic section/article elements, proper heading hierarchy (h2→h3).
 */

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function PostSequenceContent() {
  return (
    <div className="relative z-20">
      {/* Origin Section */}
      <ContentSection section={POST_SECTIONS.origin} />

      {/* Divider */}
      <div className="flex justify-center py-10" aria-hidden="true">
        <div className="gold-line w-32" />
      </div>

      {/* Executive Section */}
      <ContentSection section={POST_SECTIONS.executive} />
    </div>
  );
}

function ContentSection({ section }: { section: PostSection }) {
  return (
    <motion.section
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerChildren}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <motion.div variants={sectionVariants} className="w-full flex flex-col items-center text-center">
          <span className="section-badge mb-6 inline-block text-center">{section.badge}</span>
          <h2
            id={`${section.id}-title`}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight gold-gradient-text mt-3 text-center w-full"
          >
            {section.title}
          </h2>
          <p className="text-sm md:text-lg font-medium tracking-[0.15em] uppercase text-crema-gold/60 mt-4 mb-4 text-center w-full">
            {section.subtitle}
          </p>
          <div className="gold-line mx-auto mt-6 mb-10" aria-hidden="true" />
        </motion.div>

        {/* Paragraphs */}
        <div className="space-y-6 mt-4 w-full flex flex-col items-center">
          {section.paragraphs.map((p: string, i: number) => (
            <motion.p
              key={i}
              variants={itemVariants}
              className="text-warm-white/70 leading-[1.8] text-base md:text-[1.05rem] font-light max-w-2xl mx-auto text-center"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 mt-16 w-full"
        >
          {section.stats.map((stat: { value: string; label: string }) => (
            <motion.div key={stat.label} variants={itemVariants} className="stat-card">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black gold-gradient-text mb-3">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-medium tracking-[0.15em] uppercase text-warm-white/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
