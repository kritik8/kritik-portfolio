"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "1rem 0",
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
          background: scrolled ? "rgba(250,250,250,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo / Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "var(--text)",
              letterSpacing: "-0.01em",
              background: "none",
              border: "none",
              cursor: "none",
              padding: 0,
            }}
          >
            Kritik Jain
          </button>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" style={{ display: "flex", gap: "0.25rem" }} className="hidden-mobile">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "0.4rem 0.75rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  cursor: "none",
                  borderRadius: "var(--radius-md)",
                  transition: "color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--text)";
                  (e.target as HTMLElement).style.background = "var(--surface)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--text-secondary)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/kritik8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.4rem 0.9rem",
                background: "var(--text)",
                color: "var(--bg)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                fontWeight: 500,
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                marginLeft: "0.5rem",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.8"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; }}
            >
              GitHub ↗
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            style={{
              background: "none",
              border: "1px solid var(--border)",
              padding: "0.4rem 0.6rem",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              fontSize: "1.1rem",
              color: "var(--text)",
            }}
          >
            {mobileOpen ? "✕" : "≡"}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "4rem",
              left: "1rem",
              right: "1rem",
              zIndex: 999,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "0.75rem",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: "0.7rem 0.9rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  cursor: "pointer",
                  borderRadius: "var(--radius-md)",
                  transition: "background 0.15s ease",
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "var(--surface)"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/kritik8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                marginTop: "0.5rem",
                padding: "0.7rem 0.9rem",
                background: "var(--text)",
                color: "var(--bg)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 500,
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              GitHub ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
