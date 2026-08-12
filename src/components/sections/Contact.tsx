"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: in production, connect to email endpoint
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-md)",
    background: "var(--bg-card)",
    fontFamily: "var(--font-sans)",
    fontSize: "0.9rem",
    color: "var(--text)",
    outline: "none",
    transition: "border-color 0.2s ease",
    appearance: "none",
    WebkitAppearance: "none",
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--bg-subtle)" }}>
      <div className="container" ref={ref}>
        {/* Big headline */}
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <p className="label-editorial" style={{ marginBottom: "1rem" }}>07 &nbsp;/&nbsp; Contact</p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              color: "var(--text)",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
            }}
          >
            Let&apos;s build
            <br />
            <em style={{ fontStyle: "italic", color: "var(--text-secondary)" }}>something.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: "420px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Open to opportunities, collaborations, and interesting conversations
            about AI, systems, and anything at the frontier.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: form */}
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {sent ? (
              <div
                style={{
                  padding: "2rem",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--bg-card)",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "var(--text)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Message received ✦
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="label-editorial"
                      style={{ display: "block", marginBottom: "0.4rem" }}
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      required
                      style={inputStyle}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(15,15,14,0.4)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="label-editorial"
                      style={{ display: "block", marginBottom: "0.4rem" }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      style={inputStyle}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(15,15,14,0.4)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="label-editorial"
                      style={{ display: "block", marginBottom: "0.4rem" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder="Tell me what you're building..."
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: "vertical" }}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(15,15,14,0.4)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      padding: "0.85rem 1.5rem",
                      background: "var(--text)",
                      color: "var(--bg)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      border: "none",
                      borderRadius: "var(--radius-md)",
                      cursor: "pointer",
                      transition: "opacity 0.2s ease, transform 0.2s ease",
                      letterSpacing: "0.01em",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget).style.opacity = "0.85";
                      (e.currentTarget).style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget).style.opacity = "1";
                      (e.currentTarget).style.transform = "translateY(0)";
                    }}
                  >
                    Send message →
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right: links */}
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div>
              <p className="label-editorial" style={{ marginBottom: "1rem" }}>Find me</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { label: "GitHub", href: "https://github.com/kritik8", value: "github.com/kritik8" },
                  { label: "LinkedIn", href: "https://linkedin.com/in/kritikjain", value: "linkedin.com/in/kritikjain" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem 1.25rem",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      background: "var(--bg-card)",
                      textDecoration: "none",
                      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                      group: "true",
                    } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      (e.currentTarget).style.borderColor = "rgba(15,15,14,0.3)";
                      (e.currentTarget).style.boxShadow = "var(--shadow-sm)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget).style.borderColor = "var(--border)";
                      (e.currentTarget).style.boxShadow = "none";
                    }}
                  >
                    <div>
                      <p className="label-editorial" style={{ marginBottom: "0.2rem" }}>{link.label}</p>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {link.value}
                      </p>
                    </div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Amazon ML badge */}
            <div
              style={{
                padding: "1.25rem",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                background: "var(--bg-card)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/amazon-logo.png"
                alt="Amazon"
                style={{ width: 32, height: 32, objectFit: "contain" }}
                className="logo-mono"
              />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: "0.15rem",
                  }}
                >
                  Amazon ML Summer School
                </p>
                <p className="label-editorial" style={{ fontSize: "0.6rem" }}>
                  Selected Participant · 2025 & 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: "5rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="footer-row"
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--text)",
              letterSpacing: "-0.01em",
            }}
          >
            Kritik Jain
          </p>
          <p className="label-editorial">© 2026 · Built with Next.js</p>
        </motion.div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr 1fr !important; }
        .footer-row { flex-direction: row !important; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .footer-row { flex-direction: column !important; gap: 0.5rem; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
