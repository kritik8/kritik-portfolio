"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { research } from "@/data/research";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Research() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const paper = research[0];

  return (
    <section id="research" className="section" style={{ background: "var(--bg-subtle)" }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3rem" }}
        >
          <p className="label-editorial" style={{ marginBottom: "0.75rem" }}>03 &nbsp;/&nbsp; Research</p>
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
            Published work
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
          {/* Paper header */}
          <div
            style={{
              padding: "2rem 2rem 1.5rem",
              borderBottom: "1px solid var(--border)",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "2rem",
              alignItems: "start",
            }}
            className="research-header"
          >
            <div>
              {/* Type badge */}
              <div style={{ marginBottom: "1rem" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.25rem 0.75rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "100px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {paper.type}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.35,
                  letterSpacing: "-0.01em",
                  maxWidth: "560px",
                }}
              >
                {paper.title}
              </h3>
            </div>

            {/* Metadata column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
                minWidth: 160,
              }}
              className="research-meta"
            >
              {[
                { label: "Pages", value: `${paper.pages}` },
                { label: "Papers Reviewed", value: `${paper.papersReviewed}+` },
                { label: "Status", value: paper.status },
              ].map((item) => (
                <div key={item.label}>
                  <p className="label-editorial" style={{ marginBottom: "0.15rem" }}>{item.label}</p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--text)",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract */}
          <div style={{ padding: "1.75rem 2rem" }}>
            <p className="label-editorial" style={{ marginBottom: "0.75rem" }}>Abstract</p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                maxWidth: "660px",
                marginBottom: "1.5rem",
              }}
            >
              {paper.abstract}
            </p>

            {/* Topics */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.5rem" }}>
              {paper.topics.map((topic) => (
                <span key={topic} className="tag-pill">{topic}</span>
              ))}
            </div>

            <div className="divider" style={{ marginBottom: "1.5rem" }} />

            {/* Contribution note */}
            <div
              style={{
                padding: "1rem 1.25rem",
                background: "var(--surface)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <p className="label-editorial" style={{ marginBottom: "0.5rem" }}>Author Contribution</p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {paper.contribution}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .research-header { grid-template-columns: 1fr auto; }
        .research-meta { display: flex; }
        @media (max-width: 768px) {
          .research-header { grid-template-columns: 1fr !important; }
          .research-meta { flex-direction: row !important; gap: 1.5rem !important; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
}
