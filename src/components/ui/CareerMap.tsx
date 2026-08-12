"use client";

import { motion } from "motion/react";
import { locationMeta } from "@/data/experience";

interface CareerMapProps {
  activeLocation: "delhi" | "kerala" | "bhopal" | null;
  onHoverLocation: (loc: "delhi" | "kerala" | "bhopal" | null) => void;
}

export default function CareerMap({ activeLocation, onHoverLocation }: CareerMapProps) {
  // Simple stylized, clean outline representing geographical anchors in India
  // Bhopal is central, Delhi is north, Kerala is south-west.
  // We use an abstract SVG composition that represents a path connecting these hubs.
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "360px",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-lg)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Atmosphere Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: activeLocation ? 0.08 : 0.02,
          background:
            activeLocation === "delhi"
              ? "radial-gradient(circle, var(--delhi) 0%, transparent 70%)"
              : activeLocation === "kerala"
              ? "radial-gradient(circle, var(--kerala) 0%, transparent 70%)"
              : activeLocation === "bhopal"
              ? "radial-gradient(circle, var(--bhopal) 0%, transparent 70%)"
              : "radial-gradient(circle, var(--text) 0%, transparent 70%)",
          transition: "background 0.5s ease, opacity 0.5s ease",
          pointerEvents: "none",
        }}
      />

      {/* Stylized Illustrated India Grid/Map */}
      <svg
        viewBox="0 0 280 380"
        style={{
          width: "auto",
          height: "90%",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        {/* Subtle background grid pattern inside SVG */}
        <defs>
          <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--border-subtle)" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mapGrid)" opacity="0.5" />

        {/* Abstract Editorial coastline/outline representing India's shape */}
        <path
          d="M 120 40 
             L 145 60 
             L 150 90 
             L 170 120 
             L 180 150 
             L 195 190 
             L 180 230 
             L 165 270 
             L 145 320 
             L 125 365 
             L 115 365 
             L 100 320 
             L 92 280 
             L 98 230 
             L 90 190 
             L 80 150 
             L 70 115 
             L 90 85 
             L 105 55 
             Z"
          fill="none"
          stroke="var(--border)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Dynamic transition path linking nodes */}
        <path
          d="M 130 95 L 138 183 L 104 318"
          fill="none"
          stroke="var(--text-3)"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Delhi Node */}
        <g
          style={{ cursor: "pointer" }}
          onMouseEnter={() => onHoverLocation("delhi")}
          onMouseLeave={() => onHoverLocation(null)}
        >
          <circle
            cx="130"
            cy="95"
            r={activeLocation === "delhi" ? "12" : "6"}
            fill="var(--delhi)"
            opacity={activeLocation === "delhi" ? "0.2" : "0.1"}
            style={{ transition: "r 0.3s, opacity 0.3s" }}
          />
          <circle cx="130" cy="95" r="4" fill="var(--delhi)" />
          {activeLocation === "delhi" && (
            <text x="145" y="99" fontSize="9" fontFamily="var(--font-mono)" fill="var(--text)" fontWeight="bold">
              Delhi
            </text>
          )}
        </g>

        {/* Bhopal Node */}
        <g
          style={{ cursor: "pointer" }}
          onMouseEnter={() => onHoverLocation("bhopal")}
          onMouseLeave={() => onHoverLocation(null)}
        >
          <circle
            cx="138"
            cy="183"
            r={activeLocation === "bhopal" ? "12" : "6"}
            fill="var(--bhopal)"
            opacity={activeLocation === "bhopal" ? "0.2" : "0.1"}
            style={{ transition: "r 0.3s, opacity 0.3s" }}
          />
          <circle cx="138" cy="183" r="4" fill="var(--bhopal)" />
          {activeLocation === "bhopal" && (
            <text x="153" y="187" fontSize="9" fontFamily="var(--font-mono)" fill="var(--text)" fontWeight="bold">
              Bhopal
            </text>
          )}
        </g>

        {/* Kerala Node */}
        <g
          style={{ cursor: "pointer" }}
          onMouseEnter={() => onHoverLocation("kerala")}
          onMouseLeave={() => onHoverLocation(null)}
        >
          <circle
            cx="104"
            cy="318"
            r={activeLocation === "kerala" ? "12" : "6"}
            fill="var(--kerala)"
            opacity={activeLocation === "kerala" ? "0.2" : "0.1"}
            style={{ transition: "r 0.3s, opacity 0.3s" }}
          />
          <circle cx="104" cy="318" r="4" fill="var(--kerala)" />
          {activeLocation === "kerala" && (
            <text x="119" y="322" fontSize="9" fontFamily="var(--font-mono)" fill="var(--text)" fontWeight="bold">
              Kerala
            </text>
          )}
        </g>
      </svg>
    </div>
  );
}
