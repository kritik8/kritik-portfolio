"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { experiences, type Experience } from "@/data/experience";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function ExperienceCard({ exp, onClose }: { exp: Experience; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "1.75rem",
        boxShadow: "var(--shadow-lg)",
        position: "relative",
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "50%",
          width: 28,
          height: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "0.75rem",
          color: "var(--text-secondary)",
          transition: "background 0.15s ease",
        }}
      >
        ✕
      </button>

      {/* Logo + org */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={exp.logo}
          alt={exp.logoAlt}
          style={{ width: 40, height: 40, objectFit: "contain", borderRadius: "var(--radius-sm)" }}
          className="logo-mono"
        />
        <div>
          <h3
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--text)",
              marginBottom: "0.1rem",
            }}
          >
            {exp.organization}
          </h3>
          <p className="label-editorial">{exp.role} · {exp.duration}</p>
        </div>
      </div>

      <div className="divider" style={{ marginBottom: "1.25rem" }} />

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
          marginBottom: "1.25rem",
        }}
      >
        {exp.fullDesc}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {exp.tags.map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

function ConstellationNode({
  exp,
  index,
  total,
  isActive,
  onClick,
  reduceMotion,
}: {
  exp: Experience;
  index: number;
  total: number;
  isActive: boolean;
  onClick: () => void;
  reduceMotion: boolean;
}) {
  // Position nodes in a flowing arc
  const angle = (index / (total - 1)) * 140 - 70; // -70 to +70 degrees
  const radius = 180;
  const rad = (angle * Math.PI) / 180;
  const x = 50 + (radius * Math.sin(rad)) / 5.5; // percentage
  const y = 50 - (radius * Math.cos(rad)) / 8;

  return (
    <motion.button
      onClick={onClick}
      className="exp-node"
      aria-label={`${exp.organization} — ${exp.role}`}
      initial={reduceMotion ? {} : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.12 + 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
      whileHover={reduceMotion ? {} : { scale: 1.12 }}
      whileTap={{ scale: 0.96 }}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        background: isActive ? "var(--text)" : "var(--bg-card)",
        border: `1.5px solid ${isActive ? "var(--text)" : "var(--border)"}`,
        borderRadius: "50%",
        width: 56,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        padding: 8,
        boxShadow: isActive ? "var(--shadow-md)" : "var(--shadow-sm)",
        transition: "background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        zIndex: 2,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={exp.logo}
        alt={exp.logoAlt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          filter: isActive ? "brightness(10)" : "grayscale(100%) brightness(0.2)",
          transition: "filter 0.25s ease",
        }}
      />

      {/* Label below */}
      <span
        style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.58rem",
          fontWeight: 500,
          color: isActive ? "var(--text)" : "var(--text-muted)",
          whiteSpace: "nowrap",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          transition: "color 0.2s ease",
        }}
      >
        {exp.organization.split(" ")[0]}
      </span>
    </motion.button>
  );
}

function DesktopConstellation({ activeId, setActiveId, reduceMotion }: {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  reduceMotion: boolean;
}) {
  const total = experiences.length;

  // SVG path connecting nodes
  const getNodeXY = (index: number) => {
    const angle = (index / (total - 1)) * 120 - 60; // -60 to +60 degrees (tighter arc)
    const radius = 160;
    const rad = (angle * Math.PI) / 180;
    // Map to SVG 800x280 with padding
    return {
      x: 400 + radius * Math.sin(rad) * 2.0,
      y: 160 - radius * Math.cos(rad) * 0.85,
    };
  };

  const pathD = experiences
    .map((_, i) => {
      const { x, y } = getNodeXY(i);
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 320,
        margin: "0 auto",
      }}
    >
      {/* SVG connecting path */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 300"
        style={{ position: "absolute", inset: 0 }}
        aria-hidden="true"
      >
        <motion.path
          d={pathD}
          fill="none"
          stroke="var(--border)"
          strokeWidth={1.5}
          strokeDasharray="6 4"
          initial={reduceMotion ? {} : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
        />
        {/* Dots at node positions */}
        {experiences.map((_, i) => {
          const { x, y } = getNodeXY(i);
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r={3}
              fill="var(--border)"
              initial={reduceMotion ? {} : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 + 0.8 }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {experiences.map((exp, i) => {
        const angle = (i / (total - 1)) * 140 - 70;
        const radius = 180;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + (radius * Math.sin(rad)) / 5.5;
        const y = 50 - (radius * Math.cos(rad)) / 8;

        return (
          <ConstellationNode
            key={exp.id}
            exp={exp}
            index={i}
            total={total}
            isActive={activeId === exp.id}
            onClick={() => setActiveId(activeId === exp.id ? null : exp.id)}
            reduceMotion={reduceMotion}
          />
        );
      })}
    </div>
  );
}

export default function Experience() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  const activeExp = experiences.find((e) => e.id === activeId);

  return (
    <section id="experience" className="section" style={{ background: "var(--bg-subtle)" }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "1rem" }}
        >
          <p className="label-editorial" style={{ marginBottom: "0.75rem" }}>01 &nbsp;/&nbsp; Experience</p>
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
            Incredible places I&apos;ve worked at
          </h2>
        </motion.div>

        <motion.p
          initial={reduceMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.9rem",
            color: "var(--text-muted)",
            marginBottom: "3rem",
          }}
        >
          Click on a node to explore the role.
        </motion.p>

        {/* Desktop: constellation */}
        <div className="desktop-constellation">
          <DesktopConstellation
            activeId={activeId}
            setActiveId={setActiveId}
            reduceMotion={reduceMotion}
          />

          {/* Active card */}
          <div style={{ marginTop: "2rem", minHeight: 200 }}>
            <AnimatePresence mode="wait">
              {activeExp && (
                <ExperienceCard
                  key={activeExp.id}
                  exp={activeExp}
                  onClose={() => setActiveId(null)}
                />
              )}
            </AnimatePresence>
            {!activeExp && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  textAlign: "center",
                  padding: "2rem",
                  border: "1px dashed var(--border)",
                  borderRadius: "var(--radius-lg)",
                  letterSpacing: "0.05em",
                }}
              >
                ← select a node to see the full story →
              </motion.p>
            )}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="mobile-experience-list">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={reduceMotion ? {} : { opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.3 }}
              style={{
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.25rem",
                background: "var(--bg-card)",
                cursor: "pointer",
              }}
              onClick={() => setActiveId(activeId === exp.id ? null : exp.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={exp.logo}
                  alt={exp.logoAlt}
                  style={{ width: 36, height: 36, objectFit: "contain" }}
                  className="logo-mono"
                />
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--text)",
                    }}
                  >
                    {exp.organization}
                  </p>
                  <p className="label-editorial">{exp.role} · {exp.duration}</p>
                </div>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", transition: "transform 0.2s", transform: activeId === exp.id ? "rotate(180deg)" : "none" }}>▾</span>
              </div>

              <AnimatePresence>
                {activeId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ paddingTop: "1rem" }}>
                      <div className="divider" style={{ marginBottom: "1rem" }} />
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.875rem",
                          lineHeight: 1.7,
                          color: "var(--text-secondary)",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {exp.fullDesc}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                        {exp.tags.map((tag) => (
                          <span key={tag} className="tag-pill">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .desktop-constellation { display: block; }
        .mobile-experience-list { display: none; flex-direction: column; gap: 0.75rem; }
        @media (max-width: 768px) {
          .desktop-constellation { display: none; }
          .mobile-experience-list { display: flex; }
        }
      `}</style>
    </section>
  );
}
