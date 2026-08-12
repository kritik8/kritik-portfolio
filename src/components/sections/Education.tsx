"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="education" className="section">
      <div className="container" ref={ref}>
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3rem" }}
        >
          <p className="label-editorial" style={{ marginBottom: "0.75rem" }}>06 &nbsp;/&nbsp; Education</p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              lineHeight: 1.2,
            }}
          >
            Where I studied
          </h2>
        </motion.div>

        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            background: "var(--bg-card)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div
            style={{
              padding: "2rem",
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              gap: "2rem",
              alignItems: "center",
            }}
            className="edu-row"
          >
            {/* Logo */}
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--surface)",
                padding: "8px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/iiitbhopal-logo.png"
                alt="IIIT Bhopal"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                className="logo-mono"
              />
            </div>

            {/* Info */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: "0.25rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Indian Institute of Information Technology, Bhopal
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  marginBottom: "0.35rem",
                }}
              >
                Bachelor of Technology — Information Technology
              </p>
              <p className="label-editorial">September 2023 – Present</p>
            </div>

            {/* CGPA */}
            <div style={{ textAlign: "right" }}>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 500,
                  color: "var(--text)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "0.2rem",
                }}
              >
                9.64
              </p>
              <p className="label-editorial">CGPA</p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .edu-row { grid-template-columns: auto 1fr auto !important; }
        @media (max-width: 768px) {
          .edu-row {
            grid-template-columns: auto 1fr !important;
            gap: 1rem !important;
          }
          .edu-row > :last-child {
            grid-column: 1 / -1;
            text-align: left !important;
            display: flex;
            align-items: baseline;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
