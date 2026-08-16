"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";
import { projects, projectGroups } from "@/data/projects";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <main className="wrap page-pad">
      {/* Intro */}
      <FadeUp>
        <p className="label" style={{ marginBottom: "0.65rem" }}>
          Selected Works
        </p>
        <h1
          className="serif"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
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

      {/* Grouped Projects */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
        {projectGroups.map((group, groupIdx) => {
          const groupProjects = projects.filter((p) => p.group === group.id);
          if (groupProjects.length === 0) return null;

          return (
            <FadeUp key={group.id} delay={groupIdx * 0.1}>
              <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Group Header */}
                <div
                  style={{
                    borderBottom: "1px solid var(--border-subtle)",
                    paddingBottom: "0.75rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h2
                    className="label"
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--text)",
                      letterSpacing: "0.15em",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {group.name}
                  </h2>
                  {group.sublabel && (
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontStyle: "italic",
                        fontSize: "0.78rem",
                        color: "var(--text-3)",
                      }}
                    >
                      {group.sublabel}
                    </p>
                  )}
                </div>

                {/* Projects Stack */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {groupProjects.map((project) => {
                    return (
                      <motion.div
                        key={project.id}
                        onClick={(e) => {
                          // Prevent triggering if clicking an anchor link inside
                          const target = e.target as HTMLElement;
                          if (target.closest("a")) return;
                          router.push(`/projects/${project.id}`);
                        }}
                        whileHover={{ y: -2, borderColor: project.accent + "55" }}
                        transition={{ duration: 0.2 }}
                        style={{
                          padding: "1.75rem",
                          borderRadius: "var(--r-lg)",
                          border: "1px solid var(--border-subtle)",
                          background: "var(--bg-card)",
                          boxShadow: "var(--sh-sm)",
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          gap: "1.1rem",
                          position: "relative",
                        }}
                      >
                        {/* Title Block */}
                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "baseline",
                              gap: "1rem",
                              marginBottom: "0.25rem",
                            }}
                          >
                            <h3
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)",
                                fontWeight: 800,
                                color: "var(--text)",
                                letterSpacing: "-0.02em",
                              }}
                            >
                              {project.title}
                            </h3>
                            <span
                              className="serif"
                              style={{
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                color: project.accent,
                                opacity: 0.8,
                              }}
                            >
                              {project.number}
                            </span>
                          </div>
                          <p
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.6rem",
                              fontWeight: 600,
                              color: project.accent,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                            }}
                          >
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Description / Hook */}
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.86rem",
                            color: "var(--text-2)",
                            lineHeight: 1.55,
                          }}
                        >
                          {project.description}
                        </p>

                        {/* Tech stack tags */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="pill"
                              style={{
                                fontSize: "0.58rem",
                                borderColor: `${project.accent}25`,
                                padding: "0.15rem 0.5rem",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Divider */}
                        <div style={{ height: 1, background: "var(--border-subtle)", marginBlock: "0.2rem" }} />

                        {/* Project Actions / Links */}
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "1.25rem",
                            fontSize: "0.75rem",
                            fontFamily: "var(--font-mono)",
                            fontWeight: 600,
                          }}
                        >
                          {project.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()} // Stop routing click
                              style={{
                                color: link.type === "live" ? "var(--kerala)" : "var(--text)",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.25rem",
                                transition: "opacity 0.2s",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                              {link.type === "github" ? "📦" : "⚡"} {link.label} ↗
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            </FadeUp>
          );
        })}
      </div>
    </main>
  );
}
