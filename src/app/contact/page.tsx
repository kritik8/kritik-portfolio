"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    border: "1px solid var(--border)",
    borderRadius: "var(--r-md)",
    background: "var(--bg-card)",
    fontFamily: "var(--font-sans)",
    fontSize: "0.9rem",
    color: "var(--text)",
    outline: "none",
    transition: "border-color 0.2s ease",
    appearance: "none",
  };

  return (
    <main className="wrap page-pad" style={{ marginTop: "4rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="contact-layout"
      >
        {/* Left column */}
        <FadeUp>
          <p className="label" style={{ marginBottom: "0.5rem" }}>
            Reach Out
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
            Let&apos;s build <br />
            <em style={{ fontStyle: "italic", color: "var(--text-2)" }}>something.</em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: "var(--text-2)",
              marginBottom: "2rem",
              maxWidth: "480px",
            }}
          >
            Open to technical collaborations, performance research opportunities, and conversations at the frontier of systems engineering.
          </p>

          {sent ? (
            <div
              style={{
                padding: "2rem",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-lg)",
                background: "var(--bg-card)",
                textAlign: "center",
              }}
            >
              <h3 className="serif" style={{ fontSize: "1.25rem", color: "var(--text)", marginBottom: "0.5rem" }}>
                Message transmitted.
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--text-2)" }}>
                I will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label className="label" style={{ display: "block", marginBottom: "0.35rem", fontSize: "0.58rem" }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  style={inputStyle}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div>
                <label className="label" style={{ display: "block", marginBottom: "0.35rem", fontSize: "0.58rem" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div>
                <label className="label" style={{ display: "block", marginBottom: "0.35rem", fontSize: "0.58rem" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your project or proposal..."
                  style={{ ...inputStyle, resize: "vertical" }}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                style={{
                  padding: "0.85rem 1.5rem",
                  background: "var(--text)",
                  color: "var(--bg)",
                  border: "none",
                  borderRadius: "var(--r-md)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Send message &rarr;
              </motion.button>
            </form>
          )}
        </FadeUp>

        {/* Right column */}
        <FadeUp delay={0.15}>
          <div
            style={{
              padding: "2rem",
              borderRadius: "var(--r-xl)",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div>
              <p className="label" style={{ marginBottom: "0.75rem" }}>
                Direct channels
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { name: "GitHub", val: "github.com/kritik8", url: "https://github.com/kritik8" },
                  { name: "LinkedIn", val: "linkedin.com/in/kritikjain", url: "https://linkedin.com/in/kritikjain" },
                ].map((l) => (
                  <a
                    key={l.name}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      padding: "1rem",
                      borderRadius: "var(--r-md)",
                      border: "1px solid var(--border-subtle)",
                      background: "var(--bg)",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <p className="label" style={{ fontSize: "0.55rem", marginBottom: "0.15rem" }}>
                      {l.name}
                    </p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", fontWeight: 600 }}>
                      {l.val} &nbsp;↗
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="divider" />

            <div>
              <p className="label" style={{ marginBottom: "0.5rem" }}>
                Location Hub
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "var(--text-2)", lineHeight: 1.5 }}>
                Bhopal, Madhya Pradesh, India.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Dynamic footer */}
      <footer
        style={{
          marginTop: "6rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="serif" style={{ fontWeight: 500, fontSize: "0.95rem" }}>
          Kritik Jain
        </span>
        <span className="label" style={{ fontSize: "0.55rem" }}>
          © 2026 Kritik Jain · Next.js 16
        </span>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </main>
  );
}
