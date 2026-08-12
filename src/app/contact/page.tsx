"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";

const LINKS = [
  { label: "GitHub",      href: "https://github.com/kritik8",              arrow: "↗" },
  { label: "LinkedIn",    href: "https://linkedin.com/in/kritikjain",      arrow: "↗" },
  { label: "CodeChef",    href: "https://www.codechef.com/users/kritikjain", arrow: "↗" },
  { label: "Codeforces",  href: "https://codeforces.com/profile/kritikjain", arrow: "↗" },
  { label: "LeetCode",    href: "https://leetcode.com/kritikjain",         arrow: "↗" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.8rem 1rem",
    border: "1px solid var(--border)",
    borderRadius: "var(--r-md)",
    background: "var(--bg-card)",
    fontFamily: "var(--font-sans)",
    fontSize: "0.9rem",
    color: "var(--text)",
    outline: "none",
    transition: "border-color 0.2s",
    appearance: "none",
  };

  return (
    <main className="wrap page-pad">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left: form */}
        <div>
          <FadeUp>
            <p className="label" style={{ marginBottom: "0.65rem" }}>Contact</p>
            <h1
              className="serif"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                color: "var(--text)",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
              }}
            >
              Let&apos;s build<br />
              <em style={{ color: "var(--text-2)" }}>something great.</em>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                color: "var(--text-2)",
                lineHeight: 1.65,
                marginBottom: "2.5rem",
                maxWidth: "420px",
              }}
            >
              Open to technical collaborations, research discussions, and engineering opportunities.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            {sent ? (
              <div
                style={{
                  padding: "2.5rem",
                  borderRadius: "var(--r-xl)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  textAlign: "center",
                }}
              >
                <p className="serif" style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                  Message sent. ✓
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.88rem",
                    color: "var(--text-2)",
                  }}
                >
                  I&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}
              >
                <div>
                  <label className="label" style={{ display: "block", marginBottom: "0.35rem", fontSize: "0.56rem" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    style={inputStyle}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--text)")}
                    onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--border)")}
                  />
                </div>
                <div>
                  <label className="label" style={{ display: "block", marginBottom: "0.35rem", fontSize: "0.56rem" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    style={inputStyle}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--text)")}
                    onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--border)")}
                  />
                </div>
                <div>
                  <label className="label" style={{ display: "block", marginBottom: "0.35rem", fontSize: "0.56rem" }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What are you working on?"
                    style={{ ...inputStyle, resize: "vertical" }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "var(--text)")}
                    onBlur={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "var(--border)")}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: "0.85rem 1.5rem",
                    background: "var(--text)",
                    color: "var(--bg)",
                    border: "none",
                    borderRadius: "var(--r-md)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Send message →
                </motion.button>
              </form>
            )}
          </FadeUp>
        </div>

        {/* Right: links + location */}
        <FadeUp delay={0.12}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <p className="label" style={{ marginBottom: "1rem" }}>Elsewhere</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <motion.div
                      whileHover={{ x: 6 }}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0.9rem 1rem",
                        borderRadius: "var(--r-md)",
                        border: "1px solid var(--border-subtle)",
                        background: "var(--bg-card)",
                        cursor: "pointer",
                        transition: "border-color 0.2s, background 0.2s",
                      }}
                      onHoverStart={(e) => {
                        const el = e.target as HTMLElement;
                        if (el.closest(".link-row")) {
                          (el.closest(".link-row") as HTMLElement).style.borderColor = "var(--border)";
                        }
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "var(--text)",
                        }}
                      >
                        {link.label}
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-3)" }}>{link.arrow}</span>
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>

            <div
              style={{
                padding: "1.5rem",
                borderRadius: "var(--r-lg)",
                background: "var(--surface)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <p className="label" style={{ marginBottom: "0.5rem" }}>Currently based in</p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "var(--text)",
                }}
              >
                Bhopal, Madhya Pradesh, India
              </p>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "6rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border-subtle)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span className="serif" style={{ fontWeight: 500 }}>Kritik Jain</span>
        <span className="label" style={{ fontSize: "0.52rem" }}>
          © 2026 Kritik Jain · IIIT Bhopal · Built with Next.js
        </span>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </main>
  );
}
