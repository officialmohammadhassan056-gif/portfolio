import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useSmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Touch devices and reduced-motion users keep native scrolling.
    const nativeScroll = window.matchMedia('(pointer: coarse), (max-width: 1024px), (prefers-reduced-motion: reduce)');
    let animId = null;
    const stop = () => {
      if (animId !== null) cancelAnimationFrame(animId);
      animId = null;
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
    const start = () => {
      stop();
      if (nativeScroll.matches) return;
      const lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.05,
        touchMultiplier: 1.5,
        infinite: false,
      });

      lenisRef.current = lenis;

      function raf(time) {
        lenis.raf(time);
        animId = requestAnimationFrame(raf);
      }

      animId = requestAnimationFrame(raf);
    };
    start();
    nativeScroll.addEventListener('change', start);

    return () => {
      nativeScroll.removeEventListener('change', start);
      stop();
    };
  }, []);

  return lenisRef;
}
