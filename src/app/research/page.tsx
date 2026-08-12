"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { convgruPaper, convgruMetrics, surveyPaper, surveyMeta } from "@/data/research";
import { FadeUp } from "@/components/motion/FadeUp";

export default function ResearchPage() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const currentPipelineStage = convgruMetrics.pipeline[activeStage];

  return (
    <main className="wrap page-pad" style={{ marginTop: "4rem" }}>
      {/* Header */}
      <FadeUp>
        <p className="label" style={{ marginBottom: "0.5rem" }}>Research & Analysis</p>
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
          Research Archive
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.1rem",
            color: "var(--text-2)",
            maxWidth: "600px",
            lineHeight: 1.65,
            marginBottom: "3rem",
          }}
        >
          Vehicular networks require lightweight, real-time security. This archive houses system designs,
          empirical evaluations, and domain reviews in CAN Bus security.
        </p>
      </FadeUp>

      {/* Logical Methodology Narrative Flow */}
      <FadeUp delay={0.1}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            background: "var(--bg-card)",
            padding: "1.5rem",
            borderRadius: "var(--r-lg)",
            border: "1px solid var(--border)",
            marginBottom: "3.5rem",
            textAlign: "center",
          }}
          className="narrative-grid"
        >
          {[
            { label: "1. REVIEW FIELD", desc: "Co-authored vehicular IDS survey summarizing 50+ papers" },
            { label: "2. IDENTIFY DIRECTION", desc: "Pinpointed lightweight temporal edge models as the critical gap" },
            { label: "3. IMPLEMENT CONVGRU", desc: "Designed Conv1D-BatchNorm-MaxPool-GRU neural pipeline" },
            { label: "4. EVALUATE SYSTEM", desc: "Tested on Car-Hacking Dataset achieving 99.95% accuracy" },
          ].map((n, i) => (
            <div key={n.label} style={{ padding: "0.5rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  color: "var(--research)",
                  letterSpacing: "0.08em",
                  marginBottom: "0.25rem",
                }}
              >
                {n.label}
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--text-2)", lineHeight: 1.4 }}>
                {n.desc}
              </p>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* Research Work 01: ConvGRU-IDS Interactive Deep Dive */}
      <FadeUp delay={0.2}>
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                fontWeight: 600,
                color: "#fff",
                background: "var(--research)",
                padding: "0.2rem 0.6rem",
                borderRadius: "100px",
                textTransform: "uppercase",
              }}
            >
              Implemented Study
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-3)" }}>
              {convgruPaper.institution}
            </span>
          </div>

          <h2
            className="serif"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 500,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              maxWidth: "850px",
            }}
          >
            {convgruPaper.title}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              color: "var(--text-2)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "750px",
            }}
          >
            <strong>Abstract:</strong> {convgruPaper.abstract}
          </p>

          {/* Interactive Technical Pipeline Visualization */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: "2.5rem",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-xl)",
              background: "var(--bg-card)",
              padding: "2.5rem",
              overflow: "hidden",
            }}
            className="viz-grid"
          >
            {/* Left: Interactive pipeline tracker */}
            <div>
              <p className="label" style={{ marginBottom: "1.25rem" }}>
                Interactive Model Pipeline (Hover or Click)
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {convgruMetrics.pipeline.map((stage, i) => {
                  const isActive = activeStage === i;
                  return (
                    <div
                      key={stage.id}
                      onMouseEnter={() => setActiveStage(i)}
                      onClick={() => setActiveStage(i)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--r-md)",
                        border: "1px solid",
                        borderColor: isActive ? "var(--research)" : "transparent",
                        background: isActive ? "var(--bg)" : "transparent",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1.1rem",
                          color: isActive ? "var(--research)" : "var(--text-3)",
                        }}
                      >
                        {stage.icon}
                      </span>
                      <div>
                        <h4
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.85rem",
                            fontWeight: isActive ? 600 : 500,
                            color: isActive ? "var(--text)" : "var(--text-2)",
                          }}
                        >
                          {stage.label}
                        </h4>
                        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-3)" }}>
                          {stage.sublabel}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Technical view context & evaluation dashboard */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "2rem" }}>
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "var(--r-lg)",
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  minHeight: "130px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPipelineStage.id}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.18 }}
                  >
                    <p className="label" style={{ color: "var(--research)", marginBottom: "0.4rem" }}>
                      Pipeline Component
                    </p>
                    <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                      {currentPipelineStage.label}
                    </h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.5 }}>
                      Component runs lightweight inference processing for CAN frames. Part of the real-time classification layer.
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Evaluation statistics panel */}
              <div>
                <p className="label" style={{ marginBottom: "1rem" }}>
                  Empirical Evaluation Stage
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  {[
                    { label: "Accuracy", val: "99.95%" },
                    { label: "Precision", val: "99.976%" },
                    { label: "Recall", val: "99.924%" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{
                        padding: "0.85rem",
                        borderRadius: "var(--r-md)",
                        background: "var(--bg)",
                        border: "1px solid var(--border-subtle)",
                        textAlign: "center",
                      }}
                    >
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--text-3)", textTransform: "uppercase" }}>
                        {s.label}
                      </p>
                      <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 600, color: "var(--research)" }}>
                        {s.val}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Baselines comparison */}
                <div
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "var(--r-lg)",
                    padding: "1rem",
                    background: "var(--bg)",
                  }}
                >
                  <p className="label" style={{ fontSize: "0.58rem", marginBottom: "0.6rem" }}>
                    Baseline Comparison (Car-Hacking Dataset)
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {convgruMetrics.baselines.map((b) => (
                      <div
                        key={b.name}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "0.8rem",
                          fontFamily: "var(--font-sans)",
                          fontWeight: b.highlight ? 600 : 400,
                          color: b.highlight ? "var(--research)" : "var(--text-2)",
                        }}
                      >
                        <span>{b.name}</span>
                        <span>{b.accuracy}% Accuracy</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <div className="divider" style={{ marginBlock: "3.5rem" }} />

      {/* Research Work 02: Literature Review Index */}
      <FadeUp delay={0.3}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                fontWeight: 600,
                color: "var(--text-2)",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                padding: "0.2rem 0.6rem",
                borderRadius: "100px",
                textTransform: "uppercase",
              }}
            >
              Literature Survey
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-3)" }}>
              {surveyMeta.pages} pages · {surveyMeta.papersReviewed}+ papers reviewed
            </span>
          </div>

          <h2
            className="serif"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 500,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              maxWidth: "850px",
            }}
          >
            {surveyPaper.title}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              color: "var(--text-2)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "750px",
            }}
          >
            <strong>Abstract:</strong> {surveyPaper.abstract}
          </p>

          {/* Survey Network index / thematic panels */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
            className="survey-grid"
          >
            {[
              { title: "CAN Bus Security", desc: "Analyzed signal levels, data patterns, and vulnerabilities of controller area networks." },
              { title: "Federated Learning", desc: "Reviewed privacy-preserving distributed IDS models for decentralized vehicular fleets." },
              { title: "Real-time Edge AI", desc: "Evaluated latency, compute limits, and parameter sizing for vehicle deployment." },
            ].map((t) => (
              <div
                key={t.title}
                style={{
                  padding: "1.5rem",
                  borderRadius: "var(--r-lg)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--sh-sm)",
                }}
              >
                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                  {t.title}
                </h4>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.5 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      <style>{`
        @media (max-width: 900px) {
          .viz-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 1.5rem !important;
          }
          .survey-grid {
            grid-template-columns: 1fr !important;
          }
          .narrative-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
