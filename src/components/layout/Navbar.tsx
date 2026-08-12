"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { href: "/about",    label: "About"    },
  { href: "/work",     label: "Work"     },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/contact",  label: "Contact"  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll detection
  if (typeof window !== "undefined") {
    // handled via useEffect below
  }

  const isActive = (href: string) =>
    pathname === href || (pathname.startsWith(href + "/") && href !== "/");

  // The "active" pill source: hover wins, else current route
  const pillSource = hoveredHref ?? NAV_LINKS.find((l) => isActive(l.href))?.href ?? null;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0.75rem 0",
          background: "rgba(248,247,243,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(221,219,211,0.6)",
        }}
      >
        <div
          className="wrap"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "var(--text)",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            Kritik Jain
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            style={{ display: "flex", alignItems: "center", gap: "0.1rem" }}
            className="nav-desktop"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              const showPill = pillSource === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredHref(link.href)}
                  style={{
                    position: "relative",
                    padding: "0.4rem 0.85rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    fontWeight: active && !hoveredHref ? 600 : 500,
                    color: showPill ? "var(--text)" : "var(--text-2)",
                    textDecoration: "none",
                    borderRadius: "var(--r-md)",
                    transition: "color 0.15s",
                    display: "inline-block",
                  }}
                >
                  {/* The sliding pill — ONE element across all links via layoutId */}
                  {showPill && (
                    <motion.span
                      layoutId="nav-pill"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "var(--surface)",
                        borderRadius: "var(--r-md)",
                        zIndex: -1,
                        border: "1px solid var(--border)",
                      }}
                      transition={{ type: "spring", bounce: 0.12, duration: 0.42 }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 1 }}>{link.label}</span>
                </Link>
              );
            })}

            <div
              style={{ width: 1, height: 18, background: "var(--border)", margin: "0 0.5rem" }}
              aria-hidden
            />

            <a
              href="https://github.com/kritik8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.42rem 1rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--bg)",
                background: "var(--text)",
                borderRadius: "var(--r-md)",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.82")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
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
              padding: "0.4rem 0.6rem",
              cursor: "pointer",
              color: "var(--text)",
              fontSize: "1.1rem",
              lineHeight: 1,
            }}
          >
            {mobileOpen ? "✕" : "≡"}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, scale: 0.97, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            aria-label="Mobile navigation"
            style={{
              position: "fixed",
              top: "3.8rem",
              left: "1rem",
              right: "1rem",
              zIndex: 999,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-xl)",
              padding: "0.75rem",
              boxShadow: "var(--sh-lg)",
            }}
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.8rem 1rem",
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
            <div style={{ height: 1, background: "var(--border)", margin: "0.5rem 0" }} />
            <a
              href="https://github.com/kritik8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "0.8rem 1rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--bg)",
                background: "var(--text)",
                borderRadius: "var(--r-md)",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              GitHub ↗
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop  { display: flex; }
        .nav-mobile-btn { display: none; }
        @media (max-width: 768px) {
          .nav-desktop    { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
