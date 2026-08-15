"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { experiences, locationMeta } from "@/data/experience";
import IndiaMap from "@/components/ui/IndiaMap";

type LocationKey = "delhi" | "kerala" | "bhopal" | "chennai";

const YEAR_GROUPS = [
  {
    year: "2026",
    ids: ["indiamart"],
  },
  {
    year: "2025",
    ids: ["amazon-ml", "qriocity"],
  },
  {
    year: "2024",
    ids: ["ieee", "ta", "gamerstag"],
  },
];

export default function WorkTimeline() {
  const [activeId, setActiveId] = useState<string>("indiamart");
  const activeExp = experiences.find((e) => e.id === activeId)!;
  const activeLocKey = activeExp.locationKey as LocationKey | null;
  const locMeta = activeLocKey ? locationMeta[activeLocKey] : null;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="timeline-grid">
      {/* ── Left: Year-grouped Timeline ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {YEAR_GROUPS.map((group) => {
          const groupExps = group.ids.map((id) => experiences.find((e) => e.id === id)!);
          return (
            <div key={group.year}>
              {/* Year marker */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    color: "var(--text-3)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {group.year}
                </span>
                <div style={{ flex: 1, height: 1, background: "var(--border-subtle)" }} />
              </div>

              {/* Experience cards in this year */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingLeft: "1rem" }}>
                {groupExps.map((exp) => {
                  const isActive = activeId === exp.id;
                  const expLocKey = exp.locationKey as LocationKey | null;
                  const accentColor = exp.isAward
                    ? "var(--amber)"
                    : expLocKey
                    ? locationMeta[expLocKey].color
                    : "var(--text-2)";

                  return (
                    <motion.div
                      key={exp.id}
                      onClick={() => setActiveId(exp.id)}
                      whileHover={{ x: 3 }}
                      style={{
                        position: "relative",
                        paddingLeft: "1.25rem",
                        paddingBlock: "0.8rem",
                        paddingRight: "0.85rem",
                        borderRadius: "var(--r-md)",
                        border: "1px solid",
                        borderColor: isActive ? accentColor + "44" : "transparent",
                        background: isActive ? accentColor + "08" : "transparent",
                        cursor: "pointer",
                        transition: "border-color 0.25s, background 0.25s",
                      }}
                    >
                      {/* Left accent stripe */}
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "12%",
                          bottom: "12%",
                          width: 3,
                          borderRadius: "0 2px 2px 0",
                          background: accentColor,
                          opacity: isActive ? 1 : 0.25,
                          transition: "opacity 0.25s",
                        }}
                      />

                      {/* Timeline dot connector */}
                      {!exp.isAward && (
                        <div
                          style={{
                            position: "absolute",
                            left: "-1.35rem",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: isActive ? accentColor : "var(--border)",
                            border: "2px solid var(--bg)",
                            transition: "background 0.25s",
                          }}
                        />
                      )}

                      {/* Award star indicator */}
                      {exp.isAward && (
                        <div
                          style={{
                            position: "absolute",
                            left: "-1.6rem",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            background: isActive ? "var(--amber)" : "var(--surface-2)",
                            border: "2px solid var(--bg)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.5rem",
                            transition: "background 0.25s",
                          }}
                        >
                          ★
                        </div>
                      )}

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h3
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.9rem",
                              fontWeight: 600,
                              color: "var(--text)",
                              lineHeight: 1.3,
                              marginBottom: "0.15rem",
                            }}
                          >
                            {exp.role}
                          </h3>
                          <p
                            style={{
                              fontFamily: "var(--font-serif)",
                              fontStyle: "italic",
                              fontSize: "0.84rem",
                              color: isActive ? accentColor : "var(--text-2)",
                              transition: "color 0.25s",
                            }}
                          >
                            {exp.org}
                          </p>
                        </div>
                        <div style={{ textAlign: "right", flexShrink: 0, paddingLeft: "0.6rem" }}>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.56rem",
                              color: "var(--text-3)",
                              display: "block",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {exp.duration}
                          </span>
                          {exp.location && !exp.isAward && (
                            <span
                              style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.52rem",
                                color: accentColor,
                                display: "block",
                                marginTop: "0.12rem",
                                letterSpacing: "0.04em",
                              }}
                            >
                              📍 {exp.location}
                            </span>
                          )}
                          {exp.isAward && (
                            <span
                              style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.52rem",
                                color: "var(--amber)",
                                display: "block",
                                marginTop: "0.12rem",
                                letterSpacing: "0.04em",
                              }}
                            >
                              ✦ Achievement
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Short desc */}
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.78rem",
                          color: "var(--text-2)",
                          lineHeight: 1.55,
                          marginTop: "0.45rem",
                        }}
                      >
                        {exp.shortDesc}
                      </p>

                      {/* Tags (only when active) */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ overflow: "hidden" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "0.3rem",
                                marginTop: "0.65rem",
                              }}
                            >
                              {exp.tags.map((t) => (
                                <span
                                  key={t}
                                  className="pill"
                                  style={{ fontSize: "0.58rem", borderColor: accentColor + "33" }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Right: Sticky Map + Context card ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          position: "sticky",
          top: "5.5rem",
          height: "fit-content",
          alignSelf: "flex-start",
        }}
      >
        {/* Map only when a geographic location is active */}
        {activeLocKey ? (
          <IndiaMap
            activeLocation={activeLocKey}
            onCityClick={(loc) => {
              const firstMatch = experiences.find((e) => e.locationKey === loc);
              if (firstMatch) setActiveId(firstMatch.id);
            }}
          />
        ) : (
          /* Award / remote placeholder */
          <div
            style={{
              width: "100%",
              aspectRatio: "290 / 200",
              borderRadius: "var(--r-lg)",
              border: "1px solid var(--amber)33",
              background: "rgba(232,168,58,0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "2rem" }}>★</span>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                color: "var(--amber)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Achievement
            </p>
          </div>
        )}

        {/* Dynamic context card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            style={{
              padding: "1.25rem",
              borderRadius: "var(--r-lg)",
              border: "1px solid",
              borderColor: activeExp.isAward
                ? "var(--amber)33"
                : locMeta
                ? locMeta.color + "33"
                : "var(--border)",
              background: "var(--bg-card)",
              boxShadow: "var(--sh-sm)",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--r-md)",
                  background: "var(--logo-box-bg)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px",
                  flexShrink: 0,
                  overflow: "hidden",
                  transition: "background var(--t-base), border-color var(--t-base)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeExp.logo}
                  alt={activeExp.logoAlt}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  className={activeExp.logoBg === "dark" ? "logo-mono-dark-bg" : "logo-mono-light-bg"}
                />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  {activeExp.org}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    color: activeExp.isAward
                      ? "var(--amber)"
                      : locMeta
                      ? locMeta.color
                      : "var(--text-3)",
                    letterSpacing: "0.06em",
                    marginTop: "0.08rem",
                  }}
                >
                  {activeExp.isAward ? "✦ Achievement" : activeExp.location || "Remote"}
                </p>
              </div>
            </div>

            {/* Accent bar */}
            {(locMeta || activeExp.isAward) && (
              <div
                style={{
                  height: 3,
                  borderRadius: 2,
                  background: activeExp.isAward
                    ? `linear-gradient(90deg, var(--amber), transparent)`
                    : `linear-gradient(90deg, ${locMeta!.color}, transparent)`,
                  marginBottom: "0.9rem",
                }}
              />
            )}

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                color: "var(--text-2)",
                lineHeight: 1.6,
              }}
            >
              {activeExp.fullDesc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .timeline-grid > div:last-child {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
