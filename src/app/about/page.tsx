"use client";

import { motion } from "motion/react";
import { achievements, stats } from "@/data/achievements";
import { skillCategories } from "@/data/skills";
import { FadeUp } from "@/components/motion/FadeUp";

export default function AboutPage() {
  return (
    <main className="wrap page-pad" style={{ marginTop: "4rem" }}>
      {/* Editorial layout: story left, stats right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "3rem",
          alignItems: "start",
          marginBottom: "4rem",
        }}
        className="about-hero"
      >
        <FadeUp>
          <p className="label" style={{ marginBottom: "0.5rem" }}>
            Biography
          </p>
          <h1
            className="serif"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            I turn ideas into <br />
            <em style={{ fontStyle: "italic", color: "var(--text-2)" }}>working systems.</em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "var(--text-2)",
              marginBottom: "1.25rem",
            }}
          >
            Final-year B.Tech Information Technology student at Indian Institute of Information Technology, Bhopal. I
            work at the intersection of backend engineering, AI pipelines, and systems research.
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              lineHeight: 1.65,
              color: "var(--text-2)",
            }}
          >
            I believe software should be built with absolute structural rigor. From optimizing semantic query latencies
            in retrieval networks to implementing CAN bus anomaly filters, my goal is to design performance-driven
            architectures that ship.
          </p>
        </FadeUp>

        {/* Quick info panel */}
        <FadeUp delay={0.15}>
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-xl)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              boxShadow: "var(--sh-sm)",
            }}
          >
            {[
              { label: "Institution", val: "IIIT Bhopal" },
              { label: "Degree", val: "B.Tech Information Technology" },
              { label: "Academic CGPA", val: "9.64 / 10" },
              { label: "Focus areas", val: "Distributed Backend · LLM Systems · Applied ML" },
            ].map((s) => (
              <div key={s.label}>
                <p className="label" style={{ fontSize: "0.58rem", marginBottom: "0.15rem" }}>
                  {s.label}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", fontWeight: 600, color: "var(--text)" }}>
                  {s.val}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      <div className="divider" style={{ marginBottom: "3.5rem" }} />

      {/* Canonical Location: Amazon ML Summer School */}
      <FadeUp>
        <div style={{ marginBottom: "4rem" }}>
          <p className="label" style={{ marginBottom: "1rem" }}>
            Featured Learning Credential
          </p>
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-xl)",
              padding: "2rem",
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "2rem",
              alignItems: "center",
              boxShadow: "var(--sh-sm)",
            }}
            className="amazon-credential"
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "var(--r-md)",
                border: "1px solid var(--border)",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
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
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "0.35rem",
                }}
              >
                Amazon ML Summer School
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: "var(--text-2)",
                  lineHeight: 1.6,
                  maxWidth: "700px",
                }}
              >
                Selected for two consecutive annual cohorts (<strong>June – July 2025</strong> and{" "}
                <strong>June – July 2026</strong>). Gained deep validation in advanced machine learning concepts, supervised/unsupervised algorithms, deep networks, and scalable deployment engineering patterns.
              </p>
            </div>
          </div>
        </div>
      </FadeUp>

      <div className="divider" style={{ marginBottom: "3.5rem" }} />

      {/* Achievements Wall */}
      <FadeUp>
        <div style={{ marginBottom: "4rem" }}>
          <p className="label" style={{ marginBottom: "1rem" }}>
            Achievements
          </p>

          {/* Stats count */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-lg)",
              background: "var(--bg-card)",
              marginBottom: "2rem",
              overflow: "hidden",
            }}
            className="stats-wall"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "1.5rem",
                  textAlign: "center",
                  borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <p className="serif" style={{ fontSize: "1.8rem", fontWeight: 600, color: "var(--text)" }}>
                  {s.value}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--text-2)", fontWeight: 500 }}>
                  {s.label}
                </p>
                <p className="label" style={{ fontSize: "0.55rem" }}>
                  {s.sublabel}
                </p>
              </div>
            ))}
          </div>

          {/* List of achievements */}
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}
            className="achievements-list"
          >
            {achievements.map((ach) => (
              <div
                key={ach.id}
                style={{
                  padding: "1.25rem",
                  borderRadius: "var(--r-md)",
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-card)",
                }}
              >
                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 600 }}>
                  {ach.title}
                </h4>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--text-2)", marginBottom: "0.25rem" }}>
                  {ach.event}
                </p>
                <p className="label" style={{ fontSize: "0.58rem" }}>
                  {ach.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      <div className="divider" style={{ marginBottom: "3.5rem" }} />

      {/* Skills / Toolbox */}
      <FadeUp>
        <div style={{ marginBottom: "2rem" }}>
          <p className="label" style={{ marginBottom: "1rem" }}>
            Technical Toolbox
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
            className="skills-grid"
          >
            {skillCategories.map((cat) => (
              <div
                key={cat.label}
                style={{
                  padding: "1.5rem",
                  borderRadius: "var(--r-lg)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <h3 className="label" style={{ marginBottom: "1rem", color: "var(--text)" }}>
                  {cat.label}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {cat.skills.map((s) => (
                    <span key={s} className="pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      <style>{`
        @media (max-width: 900px) {
          .about-hero {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-wall {
            grid-template-columns: 1fr 1fr !important;
          }
          .achievements-list {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .amazon-credential {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            justify-items: start;
          }
          .stats-wall {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
