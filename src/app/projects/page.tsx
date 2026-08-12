"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="wrap page-pad">
      <FadeUp>
        <p className="label" style={{ marginBottom: "0.65rem" }}>Selected Works</p>
        <h1
          className="serif"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.035em",
            color: "var(--text)",
            lineHeight: 1.12,
            marginBottom: "3.5rem",
          }}
        >
          Things I&apos;ve built.
        </h1>
      </FadeUp>

      {/* Projects in editorial stack */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((project, i) => (
          <FadeUp key={project.id} delay={i * 0.08}>
            <Link
              href={`/projects/${project.id}`}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <motion.div
                whileHover="hovered"
                initial="rest"
                style={{
                  display: "grid",
                  gridTemplateColumns: "5rem 1fr auto",
                  gap: "2rem",
                  alignItems: "start",
                  padding: "2.5rem 0",
                  borderBottom: "1px solid var(--border-subtle)",
                  cursor: "pointer",
                  position: "relative",
                }}
                className="project-row"
              >
                {/* Number */}
                <motion.div
                  variants={{
                    rest: { color: "var(--text-3)" },
                    hovered: { color: project.accent },
                  }}
                  transition={{ duration: 0.2 }}
                  className="serif"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    fontFamily: "var(--font-serif)",
                    paddingTop: "0.2rem",
                    transition: "color 0.2s",
                  }}
                >
                  {project.number}
                </motion.div>

                {/* Content */}
                <div>
                  <motion.div
                    variants={{
                      rest: { x: 0 },
                      hovered: { x: 6 },
                    }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        color: project.accent,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {project.subtitle}
                    </p>
                    <h2
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "clamp(1.4rem, 3vw, 2rem)",
                        fontWeight: 800,
                        color: "var(--text)",
                        letterSpacing: "-0.025em",
                        lineHeight: 1.15,
                        marginBottom: "0.6rem",
                      }}
                    >
                      {project.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        fontStyle: "italic",
                        color: "var(--text-2)",
                        marginBottom: "1rem",
                        maxWidth: "580px",
                      }}
                    >
                      {project.hook}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="pill"
                          style={{ fontSize: "0.6rem", borderColor: `${project.accent}33` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Arrow */}
                <motion.div
                  variants={{
                    rest: { opacity: 0, x: -8 },
                    hovered: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: "1.5rem",
                    color: project.accent,
                    paddingTop: "0.5rem",
                    flexShrink: 0,
                  }}
                >
                  ↗
                </motion.div>

                {/* Hover accent bar (left edge) */}
                <motion.div
                  variants={{
                    rest: { scaleY: 0 },
                    hovered: { scaleY: 1 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    left: "-1.5rem",
                    top: 0,
                    bottom: 0,
                    width: 3,
                    borderRadius: "2px",
                    background: project.accent,
                    transformOrigin: "top",
                  }}
                />
              </motion.div>
            </Link>
          </FadeUp>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .project-row {
            grid-template-columns: 3.5rem 1fr !important;
            gap: 1rem !important;
            padding: 2rem 0 !important;
          }
          .project-row > div:last-child { display: none !important; }
        }
      `}</style>
    </main>
  );
}
