"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/data/projects";
import { FadeUp } from "@/components/motion/FadeUp";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section">
      <div className="container">
        <FadeUp>
          <p className="label-editorial" style={{ marginBottom: "0.75rem" }}>02 &nbsp;/&nbsp; Selected Work</p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              lineHeight: 1.2,
              marginBottom: "3rem",
            }}
          >
            Things I&apos;ve built
          </h2>
        </FadeUp>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {projects.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.1}>
              <div
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: "relative",
                  padding: "2.5rem 0",
                  borderBottom: i < projects.length - 1 ? "1px solid var(--border)" : "none",
                  cursor: "default",
                  overflow: "hidden",
                }}
              >
                {/* Hover background */}
                <motion.div
                  animate={
                    reduceMotion
                      ? {}
                      : { opacity: hoveredId === project.id ? 1 : 0 }
                  }
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--bg-subtle)",
                    borderRadius: "var(--radius-md)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "grid",
                    gridTemplateColumns: "120px 1fr auto",
                    gap: "2rem",
                    alignItems: "start",
                  }}
                  className="project-row"
                >
                  {/* Number */}
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        fontWeight: 400,
                        color: "var(--border)",
                        lineHeight: 1,
                        letterSpacing: "-0.04em",
                        transition: "color 0.3s ease",
                        ...(hoveredId === project.id ? { color: "var(--text-muted)" } : {}),
                      }}
                    >
                      {project.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                        fontWeight: 600,
                        color: "var(--text)",
                        letterSpacing: "-0.02em",
                        marginBottom: "0.35rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: "var(--text-muted)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {project.subtitle}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1rem",
                        fontStyle: "italic",
                        color: "var(--text-secondary)",
                        marginBottom: "1rem",
                        lineHeight: 1.5,
                        maxWidth: "520px",
                      }}
                    >
                      {project.hook}
                    </p>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>

                    {/* Expand button */}
                    <button
                      onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "var(--text)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        transition: "gap 0.2s ease",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget).style.gap = "0.6rem"; }}
                      onMouseLeave={(e) => { (e.currentTarget).style.gap = "0.35rem"; }}
                    >
                      {expandedId === project.id ? "Close ↑" : "Explore →"}
                    </button>

                    {/* Expanded details */}
                    <AnimatePresence>
                      {expandedId === project.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                          style={{ overflow: "hidden" }}
                        >
                          <div
                            style={{
                              paddingTop: "1.25rem",
                              borderTop: "1px solid var(--border)",
                              marginTop: "1.25rem",
                            }}
                          >
                            <p
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.9rem",
                                lineHeight: 1.75,
                                color: "var(--text-secondary)",
                                marginBottom: "1rem",
                                maxWidth: "560px",
                              }}
                            >
                              {project.description}
                            </p>
                            <ul
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.4rem",
                                paddingLeft: "1.1rem",
                              }}
                            >
                              {project.highlights.map((h) => (
                                <li
                                  key={h}
                                  style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.85rem",
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.6,
                                  }}
                                >
                                  {h}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Index */}
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.08em",
                      paddingTop: "0.5rem",
                    }}
                    className="project-index"
                  >
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <style>{`
        .project-row { grid-template-columns: 80px 1fr auto !important; }
        .project-index { display: block; }
        @media (max-width: 768px) {
          .project-row {
            grid-template-columns: 56px 1fr !important;
            gap: 1rem !important;
          }
          .project-index { display: none; }
        }
        @media (max-width: 430px) {
          .project-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
