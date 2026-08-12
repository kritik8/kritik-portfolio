"use client";

import { FadeUp } from "@/components/motion/FadeUp";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: editorial text */}
          <FadeUp>
            <p className="label-editorial" style={{ marginBottom: "1.25rem" }}>
              00 &nbsp;/&nbsp; About
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                fontWeight: 500,
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                color: "var(--text)",
                marginBottom: "1.5rem",
              }}
            >
              I turn ideas into
              <br />
              <em style={{ fontStyle: "italic", color: "var(--text-secondary)" }}>working systems.</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                maxWidth: "440px",
              }}
            >
              Final-year B.Tech Information Technology student at IIIT Bhopal.
              I work at the intersection of software engineering, AI/LLMs, and applied research —
              building systems that are both rigorous and ship-ready.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                maxWidth: "440px",
                marginTop: "1rem",
              }}
            >
              Whether it&apos;s a Go-based AI auditor improving call quality in production,
              a RAG pipeline making legal knowledge accessible, or a carbon monitoring platform
              built on blockchain — I care about understanding the system end-to-end before
              writing the first line.
            </p>
          </FadeUp>

          {/* Right: stats / metadata */}
          <FadeUp delay={0.15}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                background: "var(--bg-card)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {[
                { label: "Institution", value: "IIIT Bhopal" },
                { label: "Degree", value: "B.Tech Information Technology" },
                { label: "CGPA", value: "9.64 / 10" },
                { label: "Graduating", value: "2027" },
                { label: "Focus", value: "Software · AI · Research" },
                { label: "DSA Problems", value: "900+" },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.9rem 1.25rem",
                    borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <span className="label-editorial">{item.label}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "var(--text)",
                      textAlign: "right",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Amazon ML School badge */}
            <div
              style={{
                marginTop: "1rem",
                padding: "0.9rem 1.25rem",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                background: "var(--bg-card)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/amazon-logo.png"
                alt="Amazon"
                style={{ width: 28, height: 28, objectFit: "contain" }}
                className="logo-mono"
              />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: "0.1rem",
                  }}
                >
                  Amazon ML Summer School
                </p>
                <p className="label-editorial" style={{ fontSize: "0.6rem" }}>
                  Selected · 2025 & 2026
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
