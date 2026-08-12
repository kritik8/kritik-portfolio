"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { skillCategories } from "@/data/skills";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section" style={{ background: "var(--bg-subtle)" }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3rem" }}
        >
          <p className="label-editorial" style={{ marginBottom: "0.75rem" }}>05 &nbsp;/&nbsp; Toolbox</p>
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
            What I work with
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            background: "var(--bg-card)",
          }}
          className="skills-grid"
        >
          {skillCategories.map((category, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const hasRightBorder = col < 2;
            const hasBottomBorder = row < Math.floor((skillCategories.length - 1) / 3);

            return (
              <motion.div
                key={category.label}
                initial={reduceMotion ? {} : { opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.08 + 0.3, duration: 0.5 }}
                style={{
                  padding: "1.75rem",
                  borderRight: hasRightBorder ? "1px solid var(--border)" : "none",
                  borderBottom: hasBottomBorder ? "1px solid var(--border)" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  {category.label}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={reduceMotion ? {} : { opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.05 + j * 0.04 + 0.4 }}
                      whileHover={reduceMotion ? {} : { scale: 1.05 }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "0.2rem 0.65rem",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "100px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        color: "var(--text-secondary)",
                        cursor: "default",
                        transition: "background 0.2s ease, border-color 0.2s ease",
                        letterSpacing: "0.02em",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget).style.background = "var(--text)";
                        (e.currentTarget).style.color = "var(--bg)";
                        (e.currentTarget).style.borderColor = "var(--text)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget).style.background = "var(--surface)";
                        (e.currentTarget).style.color = "var(--text-secondary)";
                        (e.currentTarget).style.borderColor = "var(--border)";
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-grid { grid-template-columns: repeat(3, 1fr) !important; }
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 430px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
