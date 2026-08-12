"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

const ROLES = ["Software Engineer", "AI / LLM Systems", "Backend Engineering", "Applied Research"];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  }, []);

  return (
    <main>
      {/* ── 1. HERO ──────────────────────────────────────── */}
      <section
        ref={heroRef}
        onMouseMove={onMouseMove}
        className="hero-section wrap"
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
          "--mx": "50%",
          "--my": "40%",
        } as React.CSSProperties}
      >
        {/* Cursor-reactive dot grid */}
        <div
          aria-hidden
          className="dot-grid"
          style={{
            position: "absolute",
            inset: "-20px",
            zIndex: 0,
            maskImage: "radial-gradient(ellipse 60% 55% at var(--mx) var(--my), black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 55% at var(--mx) var(--my), black 0%, transparent 100%)",
            transition: "mask-image 0.05s, -webkit-mask-image 0.05s",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <FadeUp>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--text)",
                }}
              />
              <span className="label" style={{ color: "var(--text-2)" }}>
                Open to opportunities · Final year B.Tech IT
              </span>
            </div>
          </FadeUp>

          {/* Large name */}
          <div style={{ marginBottom: "2rem" }}>
            <FadeUp delay={0.04}>
              <h1
                className="serif"
                style={{
                  fontSize: "clamp(4.5rem, 12vw, 10rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.045em",
                  lineHeight: 0.95,
                  color: "var(--text)",
                  display: "block",
                }}
              >
                KRITIK
              </h1>
            </FadeUp>
            <FadeUp delay={0.09}>
              <span
                className="serif"
                style={{
                  fontSize: "clamp(4.5rem, 12vw, 10rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.045em",
                  lineHeight: 0.95,
                  color: "var(--text)",
                  display: "block",
                  paddingLeft: "clamp(2rem, 6vw, 7rem)",
                }}
              >
                JAIN
              </span>
            </FadeUp>
          </div>

          {/* Role tags */}
          <FadeUp delay={0.18}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "2.5rem",
              }}
            >
              {ROLES.map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.45 }}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    color: "var(--text-2)",
                    padding: "0.3rem 0.9rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "100px",
                  }}
                >
                  {role}
                </motion.span>
              ))}
            </div>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={0.26}>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link
                href="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.7rem 1.4rem",
                  background: "var(--text)",
                  color: "var(--bg)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "var(--r-md)",
                  transition: "opacity 0.18s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Read biography →
              </Link>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.7rem 1.4rem",
                  background: "transparent",
                  color: "var(--text)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "var(--r-md)",
                  border: "1px solid var(--border)",
                  transition: "background 0.18s, border-color 0.18s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                Get in touch
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 2. PERSONAL INDEX ─────────────────────────────── */}
      <section className="wrap" style={{ paddingBottom: "5rem" }}>
        <div
          style={{ borderTop: "1px solid var(--border)", paddingTop: "3.5rem" }}
          className="index-grid"
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}
            className="index-inner"
          >
            {/* Career snapshot */}
            <FadeUp>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}
                >
                  <span className="label">Career</span>
                  <Link
                    href="/work"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.78rem",
                      color: "var(--text-3)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}
                  >
                    Full journey →
                  </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {experiences.slice(0, 3).map((exp) => (
                    <Link
                      key={exp.id}
                      href="/work"
                      style={{
                        display: "block",
                        padding: "0.75rem",
                        borderRadius: "var(--r-md)",
                        border: "1px solid var(--border-subtle)",
                        background: "var(--bg-card)",
                        textDecoration: "none",
                        color: "inherit",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "var(--sh-sm)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "var(--text)",
                        }}
                      >
                        {exp.org}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.78rem",
                          color: "var(--text-2)",
                          marginTop: "0.1rem",
                        }}
                      >
                        {exp.role} · {exp.year}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Projects snapshot */}
            <FadeUp delay={0.08}>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}
                >
                  <span className="label">Projects</span>
                  <Link
                    href="/projects"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.78rem",
                      color: "var(--text-3)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}
                  >
                    All works →
                  </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {projects.map((proj) => (
                    <Link
                      key={proj.id}
                      href={`/projects/${proj.id}`}
                      style={{
                        display: "block",
                        padding: "0.75rem",
                        borderRadius: "var(--r-md)",
                        border: "1px solid var(--border-subtle)",
                        background: "var(--bg-card)",
                        textDecoration: "none",
                        color: "inherit",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = proj.accent + "55";
                        (e.currentTarget as HTMLElement).style.boxShadow = "var(--sh-sm)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.6rem",
                            color: proj.accent,
                            fontWeight: 700,
                          }}
                        >
                          {proj.number}
                        </span>
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "var(--text)",
                          }}
                        >
                          {proj.title}
                        </p>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.78rem",
                          color: "var(--text-2)",
                          marginTop: "0.15rem",
                          fontStyle: "italic",
                        }}
                      >
                        {proj.hook}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Research + Bio */}
            <FadeUp delay={0.16}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}
                  >
                    <span className="label">Research</span>
                    <Link
                      href="/research"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.78rem",
                        color: "var(--text-3)",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}
                    >
                      Explore →
                    </Link>
                  </div>
                  <Link
                    href="/research"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      style={{
                        padding: "1rem",
                        borderRadius: "var(--r-md)",
                        border: "1px solid var(--border-subtle)",
                        background: "var(--bg-card)",
                        transition: "border-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--violet)33";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.55rem",
                          color: "var(--violet)",
                          border: "1px solid var(--violet)55",
                          padding: "0.15rem 0.45rem",
                          borderRadius: "100px",
                          textTransform: "uppercase",
                          marginBottom: "0.6rem",
                        }}
                      >
                        Implemented
                      </span>
                      <p
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          color: "var(--text)",
                          lineHeight: 1.35,
                          marginBottom: "0.35rem",
                        }}
                      >
                        ConvGRU-IDS
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.62rem",
                          color: "var(--violet)",
                          fontWeight: 600,
                        }}
                      >
                        99.95% Accuracy
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Quick bio */}
                <div
                  style={{
                    padding: "1rem",
                    borderRadius: "var(--r-md)",
                    border: "1px solid var(--border-subtle)",
                    background: "var(--surface)",
                  }}
                >
                  <p className="label" style={{ marginBottom: "0.5rem" }}>
                    At a glance
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.82rem",
                      color: "var(--text-2)",
                      lineHeight: 1.55,
                    }}
                  >
                    IIIT Bhopal · 9.64 CGPA · Backend + AI systems · 900+ DSA problems · CodeChef 1810
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}
