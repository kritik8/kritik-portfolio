"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const roles = [
  "Software Engineer",
  "Backend Engineer",
  "AI Systems Builder",
  "ML Researcher",
  "Technical Leader",
];

const ROLE_DURATION = 2200;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, ROLE_DURATION);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      {/* Grid texture background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Pre-header label */}
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: "2rem" }}
        >
          <span className="label-editorial">
            ✦ &nbsp; Final-year B.Tech · IIIT Bhopal · 2027
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={reduceMotion ? {} : { opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 500,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: "1rem",
          }}
        >
          Kritik Jain
        </motion.h1>

        {/* Role morphing */}
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            height: "clamp(2.5rem, 5vw, 3.5rem)",
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem",
            overflow: "hidden",
          }}
        >
          {mounted && (
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={reduceMotion ? {} : { y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reduceMotion ? {} : { y: -24, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
                  fontWeight: 300,
                  color: "var(--text-secondary)",
                  letterSpacing: "-0.01em",
                  display: "block",
                }}
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          )}
        </motion.div>

        {/* Descriptor */}
        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
            fontWeight: 400,
            color: "var(--text-secondary)",
            maxWidth: "520px",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
          }}
        >
          I build software systems, AI pipelines, and research-driven products.
          At the intersection of engineering rigour and applied intelligence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "0.75rem 1.5rem",
              background: "var(--text)",
              color: "var(--bg)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              fontWeight: 500,
              border: "none",
              borderRadius: "var(--radius-md)",
              cursor: "none",
              transition: "opacity 0.2s ease, transform 0.2s ease",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.opacity = "0.85";
              (e.currentTarget).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.opacity = "1";
              (e.currentTarget).style.transform = "translateY(0)";
            }}
          >
            See my work ↓
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "0.75rem 1.5rem",
              background: "transparent",
              color: "var(--text)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              fontWeight: 500,
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              cursor: "none",
              transition: "border-color 0.2s ease, transform 0.2s ease",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.borderColor = "rgba(15,15,14,0.4)";
              (e.currentTarget).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.borderColor = "var(--border)";
              (e.currentTarget).style.transform = "translateY(0)";
            }}
          >
            Get in touch
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            position: "absolute",
            bottom: "-2rem",
            left: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
          className="scroll-indicator"
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 1,
              height: 40,
              background: "linear-gradient(to bottom, transparent, var(--text-muted))",
            }}
          />
          <span className="label-editorial" style={{ fontSize: "0.6rem" }}>Scroll</span>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to bottom, transparent, var(--bg))",
          pointerEvents: "none",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .scroll-indicator { display: none; }
        }
      `}</style>
    </section>
  );
}
