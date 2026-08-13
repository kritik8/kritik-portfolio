"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

const ROLES = ["Software Engineer", "AI / LLM Systems", "Backend Engineering", "Applied Research"];

/* ─── Floating decorative ambient shapes ────────────────── */
function FloatingDecorative() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* Coral ring — top-right */}
      <span
        className="float-a"
        style={{
          position: "absolute",
          top: "8%",
          right: "-2%",
          width: 52,
          height: 52,
          borderRadius: "50%",
          border: "2.5px solid rgba(240,97,74,0.28)",
          animationDelay: "0s",
        }}
      />
      {/* Sky dot cluster — mid-right */}
      <span
        className="float-b"
        style={{
          position: "absolute",
          top: "42%",
          right: "4%",
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          width: 30,
          animationDelay: "1.2s",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "rgba(77,166,232,0.35)",
            }}
          />
        ))}
      </span>
      {/* Lavender wavy blob — bottom-left */}
      <svg
        className="float-c"
        viewBox="0 0 60 40"
        width={60}
        style={{
          position: "absolute",
          bottom: "18%",
          left: "-3%",
          opacity: 0.22,
          animationDelay: "0.8s",
        }}
      >
        <path
          d="M4,20 Q14,6 26,18 Q38,30 50,16 Q58,6 58,20"
          fill="none"
          stroke="#8B6FD4"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M4,28 Q14,14 26,26 Q38,38 50,24 Q58,14 58,28"
          fill="none"
          stroke="#8B6FD4"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      {/* Sage small arc — top-left */}
      <svg
        className="float-b"
        viewBox="0 0 40 24"
        width={40}
        style={{
          position: "absolute",
          top: "22%",
          left: "2%",
          opacity: 0.2,
          animationDelay: "2s",
        }}
      >
        <path
          d="M2,20 Q20,2 38,20"
          fill="none"
          stroke="#5BA87A"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {/* Amber tiny square — far right */}
      <span
        className="float-a"
        style={{
          position: "absolute",
          top: "68%",
          right: "1%",
          width: 10,
          height: 10,
          borderRadius: 2,
          background: "rgba(232,168,58,0.3)",
          transform: "rotate(20deg)",
          animationDelay: "3s",
        }}
      />
    </div>
  );
}

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
        className="wrap"
        style={{
          paddingTop: "5rem",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "visible",
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

        {/* Floating ambient decoratives */}
        <FloatingDecorative />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <FadeUp>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.75rem" }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#5BA87A",
                  flexShrink: 0,
                }}
              />
              <span className="label" style={{ color: "var(--text-2)" }}>
                Open to opportunities · Final year B.Tech IT
              </span>
            </div>
          </FadeUp>

          {/* Compact editorial name — NOT viewport-filling */}
          <FadeUp delay={0.04}>
            <h1
              className="serif"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: "var(--text)",
                marginBottom: "1.25rem",
              }}
            >
              Kritik Jain
            </h1>
          </FadeUp>

          {/* Role tags */}
          <FadeUp delay={0.1}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
                marginBottom: "2rem",
              }}
            >
              {ROLES.map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 + i * 0.06, duration: 0.4 }}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "var(--text-2)",
                    padding: "0.28rem 0.85rem",
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
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
              <Link
                href="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.65rem 1.3rem",
                  background: "var(--text)",
                  color: "var(--bg)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
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
                  padding: "0.65rem 1.3rem",
                  background: "transparent",
                  color: "var(--text)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
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
      <section className="wrap" style={{ paddingBottom: "4rem" }}>
        <div
          style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "3rem" }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
            className="index-grid"
          >
            {/* Career snapshot */}
            <FadeUp>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.85rem" }}
                >
                  <span className="label">Career</span>
                  <Link
                    href="/work"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
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
                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {experiences.filter(e => !e.isAward).slice(0, 3).map((exp) => (
                    <Link
                      key={exp.id}
                      href="/work"
                      style={{
                        display: "block",
                        padding: "0.7rem 0.85rem",
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
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          color: "var(--text)",
                        }}
                      >
                        {exp.org}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.75rem",
                          color: "var(--text-2)",
                          marginTop: "0.08rem",
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
            <FadeUp delay={0.06}>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.85rem" }}
                >
                  <span className="label">Projects</span>
                  <Link
                    href="/projects"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
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
                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {projects.map((proj) => (
                    <Link
                      key={proj.id}
                      href={`/projects/${proj.id}`}
                      style={{
                        display: "block",
                        padding: "0.7rem 0.85rem",
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
                      <div style={{ display: "flex", alignItems: "baseline", gap: "0.45rem" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.58rem",
                            color: proj.accent,
                            fontWeight: 700,
                          }}
                        >
                          {proj.number}
                        </span>
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.82rem",
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
                          fontSize: "0.75rem",
                          color: "var(--text-2)",
                          marginTop: "0.12rem",
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
          </div>

          {/* Research + Quick bio — full width below */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginTop: "1.5rem",
            }}
            className="index-grid"
          >
            <FadeUp delay={0.12}>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.85rem" }}
                >
                  <span className="label">Research</span>
                  <Link
                    href="/research"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
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
                <Link href="/research" style={{ textDecoration: "none", color: "inherit" }}>
                  <div
                    style={{
                      padding: "0.9rem 1rem",
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
                        fontSize: "0.52rem",
                        color: "var(--violet)",
                        border: "1px solid var(--violet)55",
                        padding: "0.12rem 0.4rem",
                        borderRadius: "100px",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Implemented
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        color: "var(--text)",
                        lineHeight: 1.35,
                        marginBottom: "0.3rem",
                      }}
                    >
                      ConvGRU-IDS
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        color: "var(--violet)",
                        fontWeight: 600,
                      }}
                    >
                      99.95% Accuracy
                    </p>
                  </div>
                </Link>
              </div>
            </FadeUp>

            {/* Quick bio */}
            <FadeUp delay={0.16}>
              <div
                style={{
                  padding: "1rem 1.1rem",
                  borderRadius: "var(--r-md)",
                  border: "1px solid var(--border-subtle)",
                  background: "var(--surface)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p className="label" style={{ marginBottom: "0.5rem" }}>
                  At a glance
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    color: "var(--text-2)",
                    lineHeight: 1.6,
                  }}
                >
                  IIIT Bhopal · 9.64 CGPA · Backend + AI systems · 900+ DSA problems · LeetCode 1580 · Codeforces 1270
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 580px) {
          .index-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
