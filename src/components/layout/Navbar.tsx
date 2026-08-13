"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  FlaskConical,
  Mail,
  GitBranch,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/",         label: "Home",     Icon: Home         },
  { href: "/about",    label: "About",    Icon: User         },
  { href: "/work",     label: "Work",     Icon: Briefcase    },
  { href: "/projects", label: "Projects", Icon: FolderOpen   },
  { href: "/research", label: "Research", Icon: FlaskConical },
  { href: "/contact",  label: "Contact",  Icon: Mail         },
];

const GITHUB = { href: "https://github.com/kritik8", label: "GitHub", Icon: GitBranch };

export default function BottomNav() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <nav
      className="bottom-nav"
      aria-label="Primary navigation"
      onMouseLeave={() => setHovered(null)}
    >
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
                    background: "rgba(252,251,248,0.96)",
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

      {/* Divider */}
      <span
        aria-hidden
        style={{
          width: 1,
          height: 20,
          background: "var(--border)",
          flexShrink: 0,
          marginInline: "2px",
        }}
      />

      {/* GitHub external link */}
      <a
        href={GITHUB.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={GITHUB.label}
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
                background: "rgba(252,251,248,0.96)",
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
          <GitBranch size={17} strokeWidth={1.8} />
        </motion.span>
      </a>
    </nav>
  );
}
