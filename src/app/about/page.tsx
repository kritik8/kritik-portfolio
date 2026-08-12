"use client";

import { motion } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";
import { achievements, stats } from "@/data/achievements";
import { skillCategories } from "@/data/skills";

const CODING_PROFILES = [
  {
    platform: "CodeChef",
    rating: "1810",
    badge: "★★★★",
    badgeLabel: "4 Star",
    url: "https://www.codechef.com/users/kritikjain",
  },
  {
    platform: "Codeforces",
    rating: "1270",
    badge: "PUPIL",
    badgeLabel: "Pupil",
    url: "https://codeforces.com/profile/kritikjain",
  },
  {
    platform: "LeetCode",
    rating: "1580",
    badge: null,
    badgeLabel: null,
    url: "https://leetcode.com/kritikjain",
  },
];

const RANK_SYMBOL: Record<string, string> = {
  gold: "🥇",
  silver: "🥈",
  bronze: "🥉",
  special: "✦",
};

export default function AboutPage() {
  return (
    <main className="wrap page-pad">
      {/* ── Header: large identity ── */}
      <section style={{ marginBottom: "4rem" }}>
        <FadeUp>
          <p className="label" style={{ marginBottom: "1rem" }}>Biography</p>
          <h1
            className="serif"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.045em",
              lineHeight: 1.0,
              color: "var(--text)",
              marginBottom: "2rem",
            }}
          >
            Kritik Jain
          </h1>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "3rem", alignItems: "start" }}
            className="bio-grid"
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--text-2)",
                maxWidth: "520px",
              }}
            >
              Final-year B.Tech Information Technology student at IIIT Bhopal. I work at the intersection of backend engineering, AI/LLM systems, applied machine learning, and research.
            </p>

            {/* Quick facts */}
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "var(--r-lg)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {[
                { label: "Institution", value: "IIIT Bhopal" },
                { label: "Degree", value: "B.Tech Information Technology" },
                { label: "CGPA", value: "9.64 / 10" },
                { label: "Focus", value: "Backend · AI/LLM · Applied ML" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="label" style={{ fontSize: "0.56rem", marginBottom: "0.15rem" }}>
                    {item.label}
                  </p>
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
        </FadeUp>
      </section>

      <div
        style={{ height: 1, background: "var(--border-subtle)", marginBottom: "3.5rem" }}
      />

      {/* ── Coding Profiles ── */}
      <section style={{ marginBottom: "3.5rem" }}>
        <FadeUp>
          <p className="label" style={{ marginBottom: "1.25rem" }}>Competitive Programming</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {CODING_PROFILES.map((cp) => (
              <a
                key={cp.platform}
                href={cp.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem 1.5rem",
                    borderRadius: "var(--r-md)",
                    border: "1px solid var(--border-subtle)",
                    background: "var(--bg-card)",
                    gap: "1.5rem",
                    cursor: "pointer",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                  }}
                >
                  {/* Platform name */}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--text-3)",
                      letterSpacing: "0.14em",
                      width: "130px",
                      flexShrink: 0,
                    }}
                  >
                    {cp.platform.toUpperCase()}
                  </span>

                  {/* Rating */}
                  <span
                    className="serif"
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      flex: 1,
                    }}
                  >
                    {cp.rating}
                  </span>

                  {/* Badge */}
                  {cp.badge && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        letterSpacing: "0.08em",
                        background: "var(--surface)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "var(--r-sm)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {cp.badge}
                    </span>
                  )}

                  {/* Arrow */}
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      color: "var(--text-3)",
                      transition: "color 0.15s, transform 0.15s",
                    }}
                  >
                    View ↗
                  </span>
                </motion.div>
              </a>
            ))}
          </div>
        </FadeUp>
      </section>

      <div style={{ height: 1, background: "var(--border-subtle)", marginBottom: "3.5rem" }} />

      {/* ── Amazon ML Summer School ── */}
      <section style={{ marginBottom: "3.5rem" }}>
        <FadeUp>
          <p className="label" style={{ marginBottom: "1.25rem" }}>Featured Credential</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "1.5rem",
              alignItems: "center",
              padding: "1.5rem",
              borderRadius: "var(--r-lg)",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              boxShadow: "var(--sh-sm)",
            }}
            className="amazon-grid"
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "var(--r-md)",
                background: "#fff",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                flexShrink: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/amazon-logo.png"
                alt="Amazon logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                className="logo-mono"
              />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "0.3rem",
                }}
              >
                Amazon ML Summer School
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.88rem",
                  color: "var(--text-2)",
                  lineHeight: 1.55,
                }}
              >
                Selected for two consecutive annual cohorts —{" "}
                <strong>June–July 2025</strong> and <strong>June–July 2026</strong>.
                Intensive program covering advanced ML theory, deep learning, and scalable systems.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      <div style={{ height: 1, background: "var(--border-subtle)", marginBottom: "3.5rem" }} />

      {/* ── Achievements ── */}
      <section style={{ marginBottom: "3.5rem" }}>
        <FadeUp>
          <p className="label" style={{ marginBottom: "1.5rem" }}>Achievements</p>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-lg)",
              overflow: "hidden",
              marginBottom: "1.5rem",
            }}
            className="stats-row"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "1.25rem",
                  textAlign: "center",
                  borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <p
                  className="serif"
                  style={{ fontSize: "1.7rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.1 }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    color: "var(--text-2)",
                    fontWeight: 500,
                    marginTop: "0.2rem",
                  }}
                >
                  {s.label}
                </p>
                <p className="label" style={{ fontSize: "0.52rem", marginTop: "0.1rem" }}>
                  {s.sublabel}
                </p>
              </div>
            ))}
          </div>

          {/* Achievement list */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}
            className="ach-grid"
          >
            {achievements.map((ach) => (
              <div
                key={ach.id}
                style={{
                  padding: "1rem 1.2rem",
                  borderRadius: "var(--r-md)",
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-card)",
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "0.95rem", marginTop: "0.05rem", flexShrink: 0 }}>
                  {RANK_SYMBOL[ach.rank]}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      lineHeight: 1.3,
                    }}
                  >
                    {ach.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      color: "var(--text-2)",
                      marginTop: "0.1rem",
                    }}
                  >
                    {ach.event}
                  </p>
                  <p className="label" style={{ fontSize: "0.54rem", marginTop: "0.2rem" }}>
                    {ach.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      <div style={{ height: 1, background: "var(--border-subtle)", marginBottom: "3.5rem" }} />

      {/* ── Technical Toolbox ── */}
      <section>
        <FadeUp>
          <p className="label" style={{ marginBottom: "1.25rem" }}>Technical Toolbox</p>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}
            className="skills-grid"
          >
            {skillCategories.map((cat) => (
              <div
                key={cat.label}
                style={{
                  padding: "1.25rem",
                  borderRadius: "var(--r-md)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <p className="label" style={{ marginBottom: "0.85rem", color: "var(--text-2)" }}>
                  {cat.label}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                  {cat.skills.map((s) => (
                    <span key={s} className="pill" style={{ fontSize: "0.6rem" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .bio-grid      { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .skills-grid   { grid-template-columns: 1fr 1fr !important; }
          .stats-row     { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .skills-grid   { grid-template-columns: 1fr !important; }
          .stats-row     { grid-template-columns: 1fr 1fr !important; }
          .ach-grid      { grid-template-columns: 1fr !important; }
          .amazon-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
