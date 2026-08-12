"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";
import { convgruPaper, convgruMetrics, surveyPaper, surveyMeta } from "@/data/research";

const PIPELINE_STAGES = [
  { id: "input",    icon: "⤵",  label: "CAN Frame Input",      desc: "Raw Controller Area Network traffic at 500kbps" },
  { id: "conv1",    icon: "▦",  label: "Conv1D Layer",          desc: "Local temporal feature extraction via 1D convolutions" },
  { id: "bn",       icon: "⊟",  label: "Batch Normalization",   desc: "Stabilizes activations, accelerates convergence" },
  { id: "pool",     icon: "⤓",  label: "Max Pooling",           desc: "Dimensionality reduction, dominant feature selection" },
  { id: "conv2",    icon: "▦",  label: "Conv1D Layer II",        desc: "Second pass feature refinement at higher abstraction" },
  { id: "gru",      icon: "↻",  label: "GRU Layer",             desc: "Temporal sequence modeling — detects attack signatures across time" },
  { id: "dense",    icon: "◉",  label: "Dense → Sigmoid",       desc: "Binary classification: normal vs. attack probability" },
];

export default function ResearchPage() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <main className="wrap page-pad">
      {/* Header */}
      <FadeUp>
        <p className="label" style={{ marginBottom: "0.65rem" }}>Research Archive</p>
        <h1
          className="serif"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.035em",
            color: "var(--text)",
            lineHeight: 1.12,
            marginBottom: "1rem",
          }}
        >
          Two works. One domain.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            color: "var(--text-2)",
            lineHeight: 1.65,
            maxWidth: "540px",
            marginBottom: "3.5rem",
          }}
        >
          Vehicular CAN Bus security — from systematic literature review to implemented neural architecture.
        </p>
      </FadeUp>

      {/* ── Research 01: ConvGRU-IDS ── */}
      <FadeUp delay={0.08}>
        <div style={{ marginBottom: "4rem" }}>
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                fontWeight: 700,
                color: "#fff",
                background: "var(--violet)",
                padding: "0.2rem 0.65rem",
                borderRadius: "100px",
                letterSpacing: "0.08em",
              }}
            >
              01 / Implemented Paper
            </span>
            <span className="label">{convgruPaper.institution}</span>
          </div>

          <h2
            className="serif"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
              fontWeight: 500,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
              marginBottom: "0.75rem",
              maxWidth: "800px",
            }}
          >
            {convgruPaper.title}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              color: "var(--text-2)",
              lineHeight: 1.65,
              marginBottom: "2rem",
              maxWidth: "680px",
            }}
          >
            {convgruPaper.abstract}
          </p>

          {/* Interactive pipeline */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.15fr",
              gap: "1.5rem",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-xl)",
              background: "var(--bg-card)",
              padding: "2rem",
              overflow: "hidden",
            }}
            className="pipeline-grid"
          >
            {/* Pipeline steps */}
            <div>
              <p className="label" style={{ marginBottom: "1rem" }}>Model Architecture</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                {PIPELINE_STAGES.map((stage, i) => {
                  const isActive = activeStage === i;
                  return (
                    <motion.div
                      key={stage.id}
                      onHoverStart={() => setActiveStage(i)}
                      onClick={() => setActiveStage(i)}
                      whileHover={{ x: 4 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.85rem",
                        padding: "0.65rem 0.9rem",
                        borderRadius: "var(--r-md)",
                        border: "1px solid",
                        borderColor: isActive ? "var(--violet)55" : "transparent",
                        background: isActive ? "var(--violet-bg)" : "transparent",
                        cursor: "pointer",
                        transition: "border-color 0.2s, background 0.2s",
                        position: "relative",
                      }}
                    >
                      {/* Connecting vertical line for non-last items */}
                      {i < PIPELINE_STAGES.length - 1 && (
                        <div
                          style={{
                            position: "absolute",
                            left: "calc(0.9rem + 0.6rem)",
                            top: "100%",
                            width: 1,
                            height: "0.35rem",
                            background: "var(--border)",
                          }}
                        />
                      )}
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.95rem",
                          color: isActive ? "var(--violet)" : "var(--text-3)",
                          width: "1.2rem",
                          textAlign: "center",
                          transition: "color 0.2s",
                        }}
                      >
                        {stage.icon}
                      </span>
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.82rem",
                            fontWeight: isActive ? 600 : 500,
                            color: isActive ? "var(--text)" : "var(--text-2)",
                            transition: "color 0.2s, font-weight 0.2s",
                          }}
                        >
                          {stage.label}
                        </p>
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId="pipeline-indicator"
                          style={{
                            width: 3,
                            height: "100%",
                            background: "var(--violet)",
                            borderRadius: 2,
                            position: "absolute",
                            left: 0,
                            top: 0,
                            bottom: 0,
                          }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Stage detail + metrics */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    padding: "1.25rem",
                    borderRadius: "var(--r-md)",
                    background: "var(--surface)",
                    border: "1px solid var(--border-subtle)",
                    flex: 1,
                  }}
                >
                  <p className="label" style={{ color: "var(--violet)", marginBottom: "0.5rem" }}>
                    {PIPELINE_STAGES[activeStage].label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.88rem",
                      color: "var(--text-2)",
                      lineHeight: 1.6,
                    }}
                  >
                    {PIPELINE_STAGES[activeStage].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Metrics */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "0.5rem",
                }}
              >
                {[
                  { k: "Accuracy",  v: "99.95%" },
                  { k: "Precision", v: "99.976%" },
                  { k: "Recall",    v: "99.924%" },
                  { k: "F1 Score",  v: "99.95%" },
                  { k: "ROC-AUC",   v: "1.0000" },
                ].map((m) => (
                  <div
                    key={m.k}
                    style={{
                      padding: "0.7rem",
                      borderRadius: "var(--r-sm)",
                      background: "var(--surface)",
                      border: "1px solid var(--border-subtle)",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: "var(--violet)",
                        lineHeight: 1.1,
                      }}
                    >
                      {m.v}
                    </p>
                    <p className="label" style={{ fontSize: "0.5rem", marginTop: "0.2rem" }}>
                      {m.k}
                    </p>
                  </div>
                ))}
              </div>

              {/* Baseline comparison */}
              <div
                style={{
                  padding: "1rem",
                  borderRadius: "var(--r-md)",
                  background: "var(--surface)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <p className="label" style={{ marginBottom: "0.65rem", fontSize: "0.56rem" }}>
                  Baseline Comparison
                </p>
                {convgruMetrics.baselines.map((b) => (
                  <div
                    key={b.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      color: b.highlight ? "var(--violet)" : "var(--text-2)",
                      fontWeight: b.highlight ? 700 : 400,
                      paddingBlock: "0.2rem",
                    }}
                  >
                    <span>{b.name}</span>
                    <span>{b.accuracy}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <div style={{ height: 1, background: "var(--border-subtle)", marginBottom: "3.5rem" }} />

      {/* ── Research 02: Survey ── */}
      <FadeUp delay={0.1}>
        <div>
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                fontWeight: 700,
                color: "var(--text-2)",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "0.2rem 0.65rem",
                borderRadius: "100px",
                letterSpacing: "0.08em",
              }}
            >
              02 / Literature Survey
            </span>
            <span className="label">
              {surveyMeta.pages} pages · {surveyMeta.papersReviewed}+ sources
            </span>
          </div>

          <h2
            className="serif"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
              fontWeight: 500,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
              marginBottom: "0.75rem",
              maxWidth: "800px",
            }}
          >
            {surveyPaper.title}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              color: "var(--text-2)",
              lineHeight: 1.65,
              maxWidth: "680px",
              marginBottom: "2rem",
            }}
          >
            {surveyPaper.abstract}
          </p>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}
            className="survey-cards"
          >
            {[
              { title: "CAN Bus Security",  desc: "Signal vulnerabilities, replay attacks, injection vectors in controller area networks." },
              { title: "Federated & Privacy-aware IDS", desc: "Distributed model training for privacy-preserving intrusion detection in vehicular fleets." },
              { title: "Edge Deployment Constraints", desc: "Real-time latency, compute limits, and quantization for on-vehicle inference." },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  padding: "1.25rem",
                  borderRadius: "var(--r-lg)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    color: "var(--text-2)",
                    lineHeight: 1.5,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      <style>{`
        @media (max-width: 900px) {
          .pipeline-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .survey-cards  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
