"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="wrap page-pad" style={{ marginTop: "4.5rem" }}>
      {/* 1. Concise Editorial Hero */}
      <section style={{ marginBottom: "5rem" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text)" }} />
            <span className="label" style={{ color: "var(--text)" }}>
              Kritik Jain · Software Engineer · AI Systems · Research
            </span>
          </div>

          <h1
            className="serif"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4.2rem)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              color: "var(--text)",
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}
          >
            I build software systems, <br />
            AI products, and <br />
            <em style={{ fontStyle: "italic", color: "var(--text-2)" }}>research-driven experiences.</em>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "var(--text-2)",
              maxWidth: "640px",
              marginBottom: "2.5rem",
            }}
          >
            Final-year B.Tech IT student at IIIT Bhopal. Dedicated to backend engineering, LLM systems, and applied machine learning models with performance verification.
          </p>

          <div style={{ display: "flex", gap: "1rem" }} className="hero-cta">
            <Link
              href="/about"
              style={{
                padding: "0.75rem 1.25rem",
                borderRadius: "var(--r-md)",
                background: "var(--text)",
                color: "var(--bg)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              Read Biography &rarr;
            </Link>
            <Link
              href="/contact"
              style={{
                padding: "0.75rem 1.25rem",
                borderRadius: "var(--r-md)",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                color: "var(--text)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              Get in touch
            </Link>
          </div>
        </FadeUp>
      </section>

      {/* 2. Structured Personal Index Info Density (satwik.in style) */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "5rem" }} className="index-grid">
        {/* Left Column: Work & Footprint */}
        <FadeUp delay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem" }}>
                <h2 className="label" style={{ color: "var(--text)" }}>01 / Career Timeline</h2>
                <Link href="/work" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--text-2)", textDecoration: "none" }}>
                  View career map &rarr;
                </Link>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {experiences.slice(0, 3).map((exp) => (
                  <div
                    key={exp.id}
                    style={{
                      padding: "1rem",
                      borderRadius: "var(--r-md)",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", fontWeight: 600 }}>{exp.role}</h4>
                      <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.85rem", color: "var(--text-2)" }}>{exp.org}</p>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-3)" }}>
                      {exp.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Research Index */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem" }}>
                <h2 className="label" style={{ color: "var(--text)" }}>02 / Selected Research</h2>
                <Link href="/research" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--text-2)", textDecoration: "none" }}>
                  Explore system &rarr;
                </Link>
              </div>

              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "var(--r-lg)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    color: "var(--research)",
                    border: "1px solid var(--research)",
                    padding: "0.15rem 0.45rem",
                    borderRadius: "100px",
                    textTransform: "uppercase",
                  }}
                >
                  Implemented Paper
                </span>
                <h3
                  className="serif"
                  style={{ fontSize: "1.05rem", fontWeight: 500, marginTop: "0.75rem", marginBottom: "0.5rem", lineHeight: 1.35 }}
                >
                  ConvGRU-IDS: A Lightweight Hybrid Deep Learning Framework for Vehicular CAN Security
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.4 }}>
                  Combining local Conv1D feature extraction with GRU temporal sequence detection for sub-millisecond edge decisions.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Right Column: Featured Projects */}
        <FadeUp delay={0.2}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem" }}>
              <h2 className="label" style={{ color: "var(--text)" }}>03 / Selected Works</h2>
              <Link href="/projects" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--text-2)", textDecoration: "none" }}>
                View all case studies &rarr;
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {projects.slice(0, 2).map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      padding: "1.25rem",
                      borderRadius: "var(--r-lg)",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      cursor: "pointer",
                      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget).style.borderColor = project.accent;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget).style.borderColor = "var(--border)";
                    }}
                  >
                    <p className="label" style={{ color: project.accent, fontSize: "0.58rem", marginBottom: "0.25rem" }}>
                      {project.subtitle}
                    </p>
                    <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                      {project.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.45 }}>
                      {project.hook}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Persistent Discovery Orbit/Footer links */}
      <section style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "2rem" }}>
        <FadeUp>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
            <span className="serif" style={{ fontWeight: 500, fontSize: "1.1rem" }}>
              Kritik Jain
            </span>
            <div style={{ display: "flex", gap: "1.5rem" }} className="discovery-links">
              {[
                { name: "About", href: "/about" },
                { name: "Work", href: "/work" },
                { name: "Projects", href: "/projects" },
                { name: "Research", href: "/research" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="label"
                  style={{ textDecoration: "none", color: "var(--text-2)", transition: "color 0.18s" }}
                  onMouseEnter={(e) => { (e.currentTarget).style.color = "var(--text)"; }}
                  onMouseLeave={(e) => { (e.currentTarget).style.color = "var(--text-2)"; }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .index-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .hero-cta {
            flex-direction: column;
            gap: 0.5rem;
          }
          .discovery-links {
            flex-wrap: wrap;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </main>
  );
}
