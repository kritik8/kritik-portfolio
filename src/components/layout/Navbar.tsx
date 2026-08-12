"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0.9rem 0",
          background: scrolled ? "rgba(248,247,244,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(227,226,219,0.7)" : "1px solid transparent",
          transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
        }}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.05rem",
              fontWeight: 500,
              color: "var(--text)",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Kritik Jain
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            style={{ display: "flex", alignItems: "center", gap: "0.15rem" }}
            className="nav-desktop"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "0.4rem 0.8rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.84rem",
                    fontWeight: active ? 600 : 500,
                    color: active ? "var(--text)" : "var(--text-2)",
                    textDecoration: "none",
                    borderRadius: "var(--r-md)",
                    background: active ? "var(--surface)" : "transparent",
                    transition: "background 0.18s, color 0.18s",
                    position: "relative",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div
              style={{ width: 1, height: 18, background: "var(--border)", margin: "0 0.4rem" }}
              aria-hidden="true"
            />
            <a
              href="https://github.com/kritik8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.4rem 0.9rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.84rem",
                fontWeight: 500,
                color: "var(--bg)",
                background: "var(--text)",
                borderRadius: "var(--r-md)",
                textDecoration: "none",
                transition: "opacity 0.18s",
              }}
            >
              GitHub ↗
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-md)",
              padding: "0.38rem 0.55rem",
              cursor: "pointer",
              color: "var(--text)",
              fontSize: "1rem",
              lineHeight: 1,
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
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "fixed",
              top: "4rem",
              left: "1rem",
              right: "1rem",
              zIndex: 999,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-lg)",
              padding: "0.6rem",
              boxShadow: "var(--sh-lg)",
            }}
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "0.75rem 0.9rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.95rem",
                    fontWeight: active ? 600 : 500,
                    color: active ? "var(--text)" : "var(--text-2)",
                    textDecoration: "none",
                    borderRadius: "var(--r-md)",
                    background: active ? "var(--surface)" : "transparent",
                    transition: "background 0.15s",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div style={{ margin: "0.4rem 0", height: 1, background: "var(--border)" }} />
            <a
              href="https://github.com/kritik8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "0.75rem 0.9rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 500,
                color: "var(--bg)",
                background: "var(--text)",
                borderRadius: "var(--r-md)",
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
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
