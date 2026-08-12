"use client";

import { useEffect, useRef } from "react";

export function useLenis() {
  const lenisRef = useRef<InstanceType<typeof import("lenis").default> | null>(null);

  useEffect(() => {
    let lenis: InstanceType<typeof import("lenis").default>;

    const init = async () => {
      const { default: Lenis } = await import("lenis");
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    };

    // Only init if user doesn't prefer reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      init();
    }

    return () => {
      lenis?.destroy();
    };
  }, []);

  return lenisRef;
}
