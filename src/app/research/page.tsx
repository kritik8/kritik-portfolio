"use client";

import { motion } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";
import { convgruPaper, surveyPaper, surveyMeta } from "@/data/research";
import { socialLinks } from "@/data/socials";

const PAPERS = [
  {
    type: "Review / Survey Paper",
    title: surveyPaper.title,
    description: "A comprehensive 26-page survey synthesizing 50+ research papers on vehicular intrusion detection systems, covering security weaknesses, anomaly detection algorithms, and federated learning.",
    contribution: surveyMeta.contribution,
    topics: surveyPaper.topics,
    link: null,
  },
  {
    type: "Implementation Paper",
    title: convgruPaper.title,
    description: "A lightweight hybrid deep learning model combining Conv1D local pattern extraction with GRU temporal sequence learning to detect CAN Bus attacks in real-time, achieving 99.95% accuracy.",
    contribution: "Co-authored and implemented the hybrid neural network architecture. Handled dataset preprocessing, model evaluation, and baseline comparisons.",
    topics: convgruPaper.topics,
    link: socialLinks.github, // ConvGRU code/repo is on Kritik's GitHub
  },
];

export default function ResearchPage() {
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
            marginBottom: "0.75rem",
          }}
        >
          From ideas to evidence.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.95rem",
            color: "var(--text-2)",
            lineHeight: 1.65,
            maxWidth: "520px",
            marginBottom: "3.5rem",
          }}
        >
          Vehicular CAN Bus security — from systematic literature reviews to lightweight deep learning implementations.
        </p>
      </FadeUp>

      {/* Research List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {PAPERS.map((paper, index) => (
          <FadeUp key={paper.title} delay={0.08 * (index + 1)}>
            <div
              style={{
                padding: "2rem",
                borderRadius: "var(--r-lg)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--sh-sm)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                position: "relative",
              }}
            >
              {/* Type Badge */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    color: paper.type.includes("Survey") ? "var(--text-2)" : "var(--violet)",
                    background: paper.type.includes("Survey") ? "var(--surface)" : "var(--violet-bg)",
                    border: "1px solid",
                    borderColor: paper.type.includes("Survey") ? "var(--border)" : "var(--violet)22",
                    padding: "0.22rem 0.75rem",
                    borderRadius: "100px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {paper.type}
                </span>
                {paper.link && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "var(--text-3)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}
                  >
                    View Code ↗
                  </a>
                )}
              </div>

              {/* Title */}
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                  fontWeight: 500,
                  color: "var(--text)",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.3,
                  maxWidth: "92%",
                }}
              >
                {paper.title}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.88rem",
                  color: "var(--text-2)",
                  lineHeight: 1.6,
                }}
              >
                {paper.description}
              </p>

              {/* Contribution */}
              <div
                style={{
                  paddingLeft: "1rem",
                  borderLeft: "2px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.56rem",
                    color: "var(--text-3)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  My Contribution
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.84rem",
                    color: "var(--text-2)",
                    lineHeight: 1.5,
                    fontStyle: "italic",
                  }}
                >
                  {paper.contribution}
                </p>
              </div>

              {/* Topics tag list */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {paper.topics.map((t) => (
                  <span
                    key={t}
                    className="pill"
                    style={{
                      fontSize: "0.58rem",
                      background: "var(--surface)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </main>
  );
}
