'use client';

import { useEffect, useRef, useCallback } from 'react';
import { PRODUCT } from '@/data/product';

/**
 * HeroCanvas — Phase 1 scroll-linked image-sequence player.
 * Preloads frames [frameStart .. frameCount-1], maps scroll progress
 * to the visible frame index, and draws on a full-viewport Canvas.
 *
 * Bug 3 fix:  starts from ezgif-frame-053 (frameStart = 52, 0-indexed).
 * Accessibility: canvas has aria-hidden + a visually-hidden alt description.
 */
export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>(0);

  // The effective range of frames we actually display
  const visibleCount = PRODUCT.frameCount - PRODUCT.frameStart;

  /* ── Build a frame path (1-indexed filename) ── */
  const framePath = useCallback((absIndex: number) => {
    const num = String(absIndex + 1).padStart(3, '0');
    return `${PRODUCT.frameDir}/${PRODUCT.framePrefix}${num}${PRODUCT.frameExtension}`;
  }, []);

  /* ── Draw a frame directly positioned inside canvas ── */
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[frameIndex];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    
    const baseScale = Math.min(cw / iw, ch / ih);
    // Apple-style: large, dominant, and fully centered hero product.
    const sizeMultiplier = cw < 768 ? 1.0 : 1.25;
    const scale = baseScale * sizeMultiplier;

    const dw = iw * scale;
    const dh = ih * scale;

    // Perfectly centered in absolute middle
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  /* ── Preload all images ── */
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];

    for (let i = 0; i < PRODUCT.frameCount; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = () => {
        // Draw the starting frame once it's ready
        if (i === PRODUCT.frameStart && canvasRef.current) {
          const canvas = canvasRef.current;
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          drawFrame(PRODUCT.frameStart);
        }
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, [framePath, drawFrame]);

  /* ── Resize handler ── */
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameRef.current || PRODUCT.frameStart);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  /* ── Autoplay Animation Loop & Scroll Scrubbing (Optimized RAF) ── */
  useEffect(() => {
    let frame = PRODUCT.frameStart;
    let lastTime = 0;
    const fps = 24; // 24 FPS for cinematic smoothness
    const SCROLL_FRAMES_COUNT = 60; // Increased from 10 to 60 for liquid-smooth scrubbing

    // Draw initial frame if possible
    drawFrame(frame);

    const loop = (time: number) => {
      rafRef.current = requestAnimationFrame(loop);

      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      const progress = totalScroll > 0 ? Math.max(0, Math.min(1, -rect.top / totalScroll)) : 0;

      // ONLY auto-loop if we are NOT in the scrolling phase
      if (progress <= 0) {
        if (!lastTime) lastTime = time;
        const deltaTime = time - lastTime;

        if (deltaTime >= 1000 / fps) {
          lastTime = time;
          const maxAutoFrame = PRODUCT.frameCount - SCROLL_FRAMES_COUNT - 1;
          
          // Only increment and draw if we haven't reached the end of the intro sequence
          if (frame < maxAutoFrame) {
            frame++;
            if (frame !== currentFrameRef.current) {
              currentFrameRef.current = frame;
              drawFrame(frame);
            }
          }
        }
      } else {
        // We are scrolling. Scrub smoothly through the reserved final frames based on scroll depth.
        lastTime = 0; // reset autoplay timer
        
        const startFrame = PRODUCT.frameCount - SCROLL_FRAMES_COUNT;
        const mappedFrame = startFrame + Math.floor(progress * (SCROLL_FRAMES_COUNT - 1));
        const finalFrame = Math.min(mappedFrame, PRODUCT.frameCount - 1);

        if (finalFrame !== currentFrameRef.current) {
          currentFrameRef.current = finalFrame;
          drawFrame(finalFrame);
        }
      }
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full" role="img" aria-label="Perspresso coffee sequence">
      <div className="sticky top-0 w-full h-screen overflow-hidden pointer-events-none">
        <canvas ref={canvasRef} aria-hidden="true" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
