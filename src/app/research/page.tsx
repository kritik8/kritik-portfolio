"use client";

import { FadeUp } from "@/components/motion/FadeUp";
import { convgruPaper, surveyPaper, surveyMeta } from "@/data/research";

// Survey paper is intentionally listed first
const PAPERS = [
  {
    type: "Review Paper",
    title: surveyPaper.title,
    status: surveyPaper.status,
    description:
      "A 26-page review synthesising 50+ research papers on vehicular intrusion detection systems, covering CAN-bus security weaknesses, anomaly detection algorithms, federated learning for privacy-preserving distributed IDS, scalability challenges, and real-time edge AI deployment.",
    contribution: surveyMeta.contribution,
    topics: surveyPaper.topics,
    link: null as string | null,
    accentVar: "var(--violet)",
    accentBgVar: "var(--violet-bg)",
  },
  {
    type: "Implementation Paper",
    title: convgruPaper.title,
    status: convgruPaper.status,
    description:
      "A lightweight hybrid deep learning model combining Conv1D local pattern extraction with GRU temporal sequence modelling for real-time CAN bus attack detection — achieving 99.95% accuracy on a balanced 500,000-sample dataset.",
    contribution:
      "Co-authored and implemented the hybrid neural network architecture. Responsible for dataset preprocessing, model evaluation, and baseline comparisons against Logistic Regression, Random Forest, and simple CNN baselines.",
    topics: convgruPaper.topics,
    link: "https://github.com/kritik8",
    accentVar: "var(--text-2)",
    accentBgVar: "var(--surface)",
  },
];

export default function ResearchPage() {
  return (
    <main className="wrap page-pad">
      {/* Header */}
      <FadeUp>
        <p className="label" style={{ marginBottom: "0.65rem" }}>Research</p>
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
          Research in Intelligent Systems
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
          Vehicular CAN bus security — from systematic literature review to lightweight deep learning implementation.
        </p>
      </FadeUp>

      {/* Research List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
              {/* Type Badge + Status */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    color: paper.accentVar === "var(--violet)" ? "var(--violet)" : "var(--text-2)",
                    background: paper.accentBgVar,
                    border: "1px solid",
                    borderColor: paper.accentVar === "var(--violet)" ? "rgba(98,70,200,0.2)" : "var(--border)",
                    padding: "0.22rem 0.75rem",
                    borderRadius: "100px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {paper.type}
                </span>
                {paper.status && (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.58rem",
                      fontWeight: 500,
                      color: "var(--text-3)",
                      letterSpacing: "0.04em",
                      alignSelf: "center",
                    }}
                  >
                    {paper.status}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  fontWeight: 500,
                  color: "var(--text)",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.35,
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
                  lineHeight: 1.65,
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
                  Contribution
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.84rem",
                    color: "var(--text-2)",
                    lineHeight: 1.55,
                    fontStyle: "italic",
                  }}
                >
                  {paper.contribution}
                </p>
              </div>

              {/* Topic tags + optional link */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "0.75rem" }}>
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
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}
                  >
                    View on GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </main>
  );
}
