"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { achievements, stats } from "@/data/achievements";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const rankSymbol: Record<string, string> = {
  gold: "✦",
  silver: "◆",
  bronze: "●",
  special: "◈",
};

const rankColor: Record<string, string> = {
  gold: "#8B7355",
  silver: "#7A7A7A",
  bronze: "#8B6355",
  special: "#5A6A7A",
};

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="achievements" className="section">
      <div className="container" ref={ref}>
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3rem" }}
        >
          <p className="label-editorial" style={{ marginBottom: "0.75rem" }}>04 &nbsp;/&nbsp; Achievements</p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              lineHeight: 1.2,
            }}
          >
            A few records I&apos;m proud of
          </h2>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            background: "var(--bg-card)",
            marginBottom: "2.5rem",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: "1.5rem",
                borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 500,
                  color: "var(--text)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "0.35rem",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  marginBottom: "0.15rem",
                }}
              >
                {stat.label}
              </p>
              <p className="label-editorial" style={{ fontSize: "0.58rem" }}>{stat.sublabel}</p>
            </div>
          ))}
        </motion.div>

        {/* Bento achievement grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.75rem",
          }}
          className="achievements-grid"
        >
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={reduceMotion ? {} : { opacity: 0, y: 20, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.07 + 0.3, duration: 0.5 }}
              style={{
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.25rem",
                background: "var(--bg-card)",
                position: "relative",
                transition: "box-shadow 0.2s ease, border-color 0.2s ease",
              }}
              whileHover={reduceMotion ? {} : { y: -3 }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.boxShadow = "var(--shadow-md)";
                (e.currentTarget).style.borderColor = "rgba(15,15,14,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.boxShadow = "none";
                (e.currentTarget).style.borderColor = "var(--border)";
              }}
            >
              {/* Rank symbol */}
              <span
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  fontSize: "1rem",
                  color: rankColor[ach.rank],
                }}
                aria-label={ach.rank}
              >
                {rankSymbol[ach.rank]}
              </span>

              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  marginBottom: "0.35rem",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                  paddingRight: "1.5rem",
                }}
              >
                {ach.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  marginBottom: "0.25rem",
                  lineHeight: 1.3,
                }}
              >
                {ach.event}
              </p>
              <p className="label-editorial" style={{ fontSize: "0.6rem" }}>{ach.category}</p>
              {ach.year && (
                <p
                  className="label-editorial"
                  style={{ fontSize: "0.6rem", marginTop: "0.25rem", color: "var(--text-muted)" }}
                >
                  {ach.year}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        .achievements-grid { grid-template-columns: repeat(3, 1fr) !important; }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .achievements-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 430px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .achievements-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
