"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { FadeUp } from "@/components/motion/FadeUp";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="wrap page-pad" style={{ marginTop: "4rem" }}>
      <FadeUp>
        <Link
          href="/projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            textDecoration: "none",
            fontFamily: "var(--font-sans)",
            fontSize: "0.85rem",
            fontWeight: 500,
            color: "var(--text-2)",
            marginBottom: "2rem",
          }}
        >
          &larr; Back to projects
        </Link>
      </FadeUp>

      <FadeUp>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.5rem" }}>
          <span className="serif" style={{ fontSize: "2rem", color: project.accent, fontWeight: 600 }}>
            {project.number}
          </span>
          <p className="label" style={{ color: project.accent }}>
            {project.subtitle}
          </p>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          {project.title}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.2rem",
            fontStyle: "italic",
            color: "var(--text-2)",
            lineHeight: 1.6,
            marginBottom: "2.5rem",
            maxWidth: "720px",
          }}
        >
          {project.hook}
        </p>
      </FadeUp>

      <div
        className="detail-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "3rem",
          borderTop: "1px solid var(--border)",
          paddingTop: "2.5rem",
        }}
      >
        {/* Main story */}
        <FadeUp delay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: "0.75rem",
                }}
              >
                Overview
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  color: "var(--text-2)",
                }}
              >
                {project.description}
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: "0.75rem",
                }}
              >
                Key Highlights & Capabilities
              </h2>
              <ul
                style={{
                  paddingLeft: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {project.highlights.map((h, index) => (
                  <li
                    key={index}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      color: "var(--text-2)",
                      lineHeight: 1.6,
                    }}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>

        {/* Sidebar details */}
        <FadeUp delay={0.2}>
          <div
            style={{
              padding: "1.5rem",
              borderRadius: "var(--r-lg)",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div>
              <p className="label" style={{ marginBottom: "0.5rem" }}>
                Tech Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="pill" style={{ borderColor: `${project.accent}33` }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="divider" />

            <div>
              <p className="label" style={{ marginBottom: "0.4rem" }}>
                Role / Type
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--text)",
                }}
              >
                Lead Creator & System Architect
              </p>
            </div>

            <div>
              <p className="label" style={{ marginBottom: "0.4rem" }}>
                Timeline
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                }}
              >
                Completed & Verified
              </p>
            </div>

            <div className="divider" style={{ height: 1, background: "var(--border-subtle)", marginBlock: "0.25rem" }} />

            <div>
              <p className="label" style={{ marginBottom: "0.5rem" }}>
                Project Links
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      color: link.type === "live" ? "var(--kerala)" : "var(--text)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    {link.type === "github" ? "📦" : "⚡"} {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .detail-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </main>
  );
}
