'use client';

import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroCanvas from '@/components/HeroCanvas';
import TextOverlays from '@/components/TextOverlays';
import PostSequenceContent from '@/components/PostSequenceContent';
import FinalCTA from '@/components/FinalCTA';
import TravelingCup from '@/components/TravelingCup';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);

  return (
    <main id="main-content" className="relative bg-matte-black min-h-screen">
      {/* ── Background gradient overlay ── */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: `linear-gradient(
            to bottom,
            #1A1212 0%,
            #0D0D0D 80%,
            #000000 100%
          )`,
        }}
      />

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Phase 1: Hero AutoPlay + Intro ── */}
      <div ref={heroRef} className="relative z-10 w-full h-[300vh] bg-matte-black">
        <HeroCanvas />
        <TextOverlays />
      </div>

      {/* ── Phase 2: Post-Sequence Journey ── */}
      <div ref={journeyRef} className="relative z-20 bg-matte-black">
        <PostSequenceContent />
        <FinalCTA />
      </div>

      {/* ── Traveling Cup (fixed, tracks journeyRef, opacity mapped to scroll) ── */}
      <TravelingCup visible={true} containerRef={journeyRef} />
    </main>
  );
}
