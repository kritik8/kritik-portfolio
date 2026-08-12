"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { FadeUp } from "@/components/motion/FadeUp";

export default function ProjectsPage() {
  return (
    <main className="wrap page-pad" style={{ marginTop: "4rem" }}>
      <FadeUp>
        <p className="label" style={{ marginBottom: "0.5rem" }}>Projects</p>
        <h1
          className="serif"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            lineHeight: 1.15,
            marginBottom: "3rem",
          }}
        >
          Selected Works & Systems
        </h1>
      </FadeUp>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {projects.map((project, i) => (
          <FadeUp key={project.id} delay={i * 0.1}>
            <Link
              href={`/projects/${project.id}`}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r-xl)",
                  background: "var(--bg-card)",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "var(--sh-sm)",
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                  display: "grid",
                  gridTemplateColumns: "100px 1fr",
                  gap: "2.5rem",
                  padding: "2.5rem",
                }}
                className="project-card-grid"
                onMouseEnter={(e) => {
                  (e.currentTarget).style.boxShadow = "var(--sh-lg)";
                  (e.currentTarget).style.borderColor = project.accent;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget).style.boxShadow = "var(--sh-sm)";
                  (e.currentTarget).style.borderColor = "var(--border)";
                }}
              >
                {/* Accent number block */}
                <div
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "var(--r-lg)",
                    background: `linear-gradient(135deg, ${project.accent}22, ${project.accent}05)`,
                    border: `1px solid ${project.accent}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="project-number-box"
                >
                  <span
                    className="serif"
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 600,
                      color: project.accent,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {project.number}
                  </span>
                </div>

                {/* Info */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p
                    className="label"
                    style={{
                      color: project.accent,
                      letterSpacing: "0.1em",
                      fontSize: "0.62rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.subtitle}
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
                      fontWeight: 700,
                      color: "var(--text)",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.75rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1rem",
                      fontStyle: "italic",
                      color: "var(--text-2)",
                      marginBottom: "1.25rem",
                      maxWidth: "600px",
                    }}
                  >
                    {project.hook}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.25rem" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill" style={{ borderColor: `${project.accent}33` }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: project.accent,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    Read case study &rarr;
                  </span>
                </div>
              </motion.div>
            </Link>
          </FadeUp>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-card-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 1.5rem !important;
          }
          .project-number-box {
            width: 60px !important;
            height: 60px !important;
          }
          .project-number-box span {
            fontSize: 1.8rem !important;
          }
        }
      `}</style>
    </main>
  );
}
