"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;

    let rx = 0, ry = 0;
    let dx = 0, dy = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      rx = lerp(rx, dx, 0.14);
      ry = lerp(ry, dy, 0.14);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "var(--cursor-bg, var(--text))",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "var(--cursor-blend, multiply)" as any,
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1px solid var(--cursor-ring, rgba(17,17,16,0.25))",
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform",
          transition: "border-color 0.3s ease",
        }}
      />
    </>
  );
}
