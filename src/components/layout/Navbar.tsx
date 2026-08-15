"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  User,
  Briefcase,
  FolderOpen,
  FlaskConical,
  Mail,
  Sun,
  Moon,
} from "lucide-react";
import { socialLinks } from "@/data/socials";

const NAV_ITEMS = [
  { href: "/about",    label: "About",    Icon: User         },
  { href: "/work",     label: "Work",     Icon: Briefcase    },
  { href: "/projects", label: "Projects", Icon: FolderOpen   },
  { href: "/research", label: "Research", Icon: FlaskConical },
  { href: "/contact",  label: "Contact",  Icon: Mail         },
];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const Separator = () => (
  <span
    aria-hidden
    style={{
      width: 1,
      height: 18,
      background: "var(--border)",
      flexShrink: 0,
      marginInline: "6px",
    }}
  />
);

export default function BottomNav() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav
      className="bottom-nav"
      aria-label="Primary navigation"
      onMouseLeave={() => setHovered(null)}
    >
      {/* ── 1. Page Navigation ── */}
      {NAV_ITEMS.map(({ href, label, Icon }) => {
        const active = isActive(href);
        const showTip = hovered === href;

        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            aria-current={active ? "page" : undefined}
            onMouseEnter={() => setHovered(href)}
            onFocus={() => setHovered(href)}
            onBlur={() => setHovered(null)}
            style={{ textDecoration: "none", position: "relative", display: "block" }}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {showTip && (
                <motion.span
                  key="tip"
                  initial={{ opacity: 0, y: 4, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.9 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    bottom: "calc(100% + 8px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--r-sm)",
                    padding: "0.25rem 0.6rem",
                    boxShadow: "var(--sh-sm)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Icon button */}
            <motion.span
              animate={{
                scale: active ? 1.1 : showTip ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`nav-icon-btn${active ? " active" : ""}`}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {/* Sliding active pill */}
              {active && (
                <motion.span
                  layoutId="bottom-pill"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--surface-2)",
                    borderRadius: "100px",
                    zIndex: 0,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 26 }}
                />
              )}
              <span style={{ position: "relative", zIndex: 1, display: "flex" }}>
                <Icon size={17} strokeWidth={active ? 2.2 : 1.8} />
              </span>
            </motion.span>
          </Link>
        );
      })}

      <Separator />

      {/* ── 2. Brand Profiles ── */}
      {/* LinkedIn Link */}
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        onMouseEnter={() => setHovered("linkedin")}
        onMouseLeave={() => setHovered(null)}
        style={{ textDecoration: "none", position: "relative", display: "block" }}
      >
        <AnimatePresence>
          {hovered === "linkedin" && (
            <motion.span
              key="tip-li"
              initial={{ opacity: 0, y: 4, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.9 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{
                position: "absolute",
                bottom: "calc(100% + 8px)",
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--text)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-sm)",
                padding: "0.25rem 0.6rem",
                boxShadow: "var(--sh-sm)",
                pointerEvents: "none",
                zIndex: 10,
              }}
            >
              LinkedIn ↗
            </motion.span>
          )}
        </AnimatePresence>
        <motion.span
          animate={{ scale: hovered === "linkedin" ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="nav-icon-btn"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <LinkedInIcon />
        </motion.span>
      </a>

      {/* GitHub Link */}
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        onMouseEnter={() => setHovered("github")}
        onMouseLeave={() => setHovered(null)}
        style={{ textDecoration: "none", position: "relative", display: "block" }}
      >
        <AnimatePresence>
          {hovered === "github" && (
            <motion.span
              key="tip-gh"
              initial={{ opacity: 0, y: 4, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.9 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{
                position: "absolute",
                bottom: "calc(100% + 8px)",
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--text)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-sm)",
                padding: "0.25rem 0.6rem",
                boxShadow: "var(--sh-sm)",
                pointerEvents: "none",
                zIndex: 10,
              }}
            >
              GitHub ↗
            </motion.span>
          )}
        </AnimatePresence>
        <motion.span
          animate={{ scale: hovered === "github" ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="nav-icon-btn"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <GitHubIcon />
        </motion.span>
      </a>

      <Separator />

      {/* ── 3. Theme Toggle Utility ── */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        onMouseEnter={() => setHovered("theme")}
        onMouseLeave={() => setHovered(null)}
        style={{ textDecoration: "none", position: "relative", display: "block" }}
        className="nav-icon-btn"
      >
        <AnimatePresence>
          {hovered === "theme" && (
            <motion.span
              key="tip-th"
              initial={{ opacity: 0, y: 4, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.9 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{
                position: "absolute",
                bottom: "calc(100% + 8px)",
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--text)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-sm)",
                padding: "0.25rem 0.6rem",
                boxShadow: "var(--sh-sm)",
                pointerEvents: "none",
                zIndex: 10,
              }}
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </motion.span>
          )}
        </AnimatePresence>
        <motion.span
          animate={{ scale: hovered === "theme" ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {mounted ? (
            theme === "light" ? (
              <Moon size={17} strokeWidth={1.8} />
            ) : (
              <Sun size={17} strokeWidth={1.8} />
            )
          ) : (
            /* Hydration fallback placeholder */
            <span style={{ width: 17, height: 17 }} />
          )}
        </motion.span>
      </button>
    </nav>
  );
}
