"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { experiences } from "@/data/experience";
import CareerMap from "@/components/ui/CareerMap";
import { FadeUp } from "@/components/motion/FadeUp";

export default function WorkTimeline() {
  const [activeId, setActiveId] = useState<string>(experiences[0].id);
  const [hoveredLoc, setHoveredLoc] = useState<"delhi" | "kerala" | "bhopal" | null>(null);

  const activeExp = experiences.find((e) => e.id === activeId) || experiences[0];

  // Derive active location key
  const activeLocationKey = hoveredLoc || activeExp.locationKey;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "2.5rem" }} className="work-grid">
      {/* Left: Interactive Timeline Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {experiences.map((exp) => {
          const isSelected = activeId === exp.id;
          const accentColor =
            exp.locationKey === "delhi"
              ? "var(--delhi)"
              : exp.locationKey === "kerala"
              ? "var(--kerala)"
              : exp.locationKey === "bhopal"
              ? "var(--bhopal)"
              : "var(--text)";

          return (
            <motion.div
              key={exp.id}
              onClick={() => setActiveId(exp.id)}
              style={{
                padding: "1.25rem 1.5rem",
                borderRadius: "var(--r-lg)",
                border: "1px solid",
                borderColor: isSelected ? accentColor : "var(--border)",
                background: "var(--bg-card)",
                cursor: "pointer",
                position: "relative",
                transition: "border-color 0.25s, box-shadow 0.25s",
                boxShadow: isSelected ? "var(--sh-md)" : "none",
              }}
              whileHover={{ y: -2 }}
            >
              {/* Active accent vertical line */}
              {isSelected && (
                <motion.div
                  layoutId="activeIndicator"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "15%",
                    bottom: "15%",
                    width: 3,
                    borderRadius: "0 2px 2px 0",
                    background: accentColor,
                  }}
                />
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.5rem" }}>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "var(--text)",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.95rem",
                      color: isSelected ? accentColor : "var(--text-2)",
                      transition: "color 0.25s",
                    }}
                  >
                    {exp.org}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-3)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.duration}
                </span>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  color: "var(--text-2)",
                  lineHeight: 1.5,
                }}
              >
                {exp.shortDesc}
              </p>

              {/* Collapsed/Expanded detail */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.88rem",
                          color: "var(--text-2)",
                          lineHeight: 1.6,
                          marginBottom: "1rem",
                        }}
                      >
                        {exp.fullDesc}
                      </p>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                        {exp.tags.map((t) => (
                          <span key={t} className="pill" style={{ fontSize: "0.62rem" }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Right: Map & Story context */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "sticky", top: "6rem", height: "fit-content" }}>
        <CareerMap activeLocation={activeLocationKey} onHoverLocation={setHoveredLoc} />

        {/* Dynamic Context Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              padding: "1.5rem",
              borderRadius: "var(--r-lg)",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              boxShadow: "var(--sh-sm)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--r-md)",
                  border: "1px solid var(--border)",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  overflow: "hidden",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeExp.logo}
                  alt={activeExp.logoAlt}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  className="logo-mono"
                />
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 600 }}>
                  {activeExp.org}
                </h4>
                <p className="label" style={{ fontSize: "0.58rem" }}>
                  {activeExp.location || "Remote / No Location"}
                </p>
              </div>
            </div>

            {/* Custom Atmospheric Visual Anchor */}
            {activeExp.locationKey && (
              <div
                style={{
                  height: "6px",
                  width: "100%",
                  borderRadius: "3px",
                  marginBottom: "1rem",
                  background:
                    activeExp.locationKey === "delhi"
                      ? "linear-gradient(90deg, var(--delhi), transparent)"
                      : activeExp.locationKey === "kerala"
                      ? "linear-gradient(90deg, var(--kerala), transparent)"
                      : "linear-gradient(90deg, var(--bhopal), transparent)",
                }}
              />
            )}

            {/* Micro Context Elements */}
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.5 }}>
              {activeExp.locationKey === "delhi" && (
                <span>📍 Focussed on the Delhi NCR tech corridor. Deployed scalable AI microservices.</span>
              )}
              {activeExp.locationKey === "kerala" && (
                <span>🌴 Built design systems from the coastal tech hub in Kochi, Kerala.</span>
              )}
              {activeExp.locationKey === "bhopal" && (
                <span>🎓 Academic leadership & teaching at Indian Institute of Information Technology, Bhopal.</span>
              )}
              {!activeExp.locationKey && (
                <span>💻 Remote contribution to automated engineering workflows & data validation.</span>
              )}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .work-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .work-grid > div:last-child {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
