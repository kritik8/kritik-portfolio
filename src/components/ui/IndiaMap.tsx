"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { locationMeta } from "@/data/experience";

type LocationKey = "delhi" | "kerala" | "bhopal" | "chennai";

interface IndiaMapProps {
  activeLocation: LocationKey | null;
  onCityClick?: (loc: LocationKey) => void;
  height?: number;
}

const CITIES: Record<LocationKey, { x: number; y: number; label: string }> = {
  delhi:   { x: 92,  y: 111, label: "New Delhi"          },
  bhopal:  { x: 94,  y: 182, label: "Bhopal, M.P."       },
  kerala:  { x: 74,  y: 362, label: "Kochi, Kerala"      },
  chennai: { x: 108, y: 315, label: "Chennai, Tamil Nadu" },
};

/* ─── Geographic atmosphere overlays ─────────────────────── */
function DelhiAtmosphere() {
  return (
    <g opacity="0.18">
      {/* India Gate silhouette: arch + pillars */}
      <rect x="76" y="126" width="32" height="2" rx="1" fill="var(--delhi)" />
      <rect x="84" y="108" width="5"  height="18" rx="1" fill="var(--delhi)" />
      <rect x="99" y="108" width="5"  height="18" rx="1" fill="var(--delhi)" />
      <path d="M84,108 Q92,100 104,108" fill="none" stroke="var(--delhi)" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="80" y="124" width="28" height="4" rx="1" fill="var(--delhi)" />
    </g>
  );
}

function BhopalAtmosphere() {
  return (
    <g opacity="0.2">
      {/* Lake waves */}
      <path d="M 78,200 Q 86,196 94,200 Q 102,204 110,200" fill="none" stroke="var(--bhopal)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 80,206 Q 88,202 96,206 Q 104,210 112,206" fill="none" stroke="var(--bhopal)" strokeWidth="1"   strokeLinecap="round" opacity="0.7" />
      <path d="M 82,212 Q 90,208 98,212 Q 106,216 114,212" fill="none" stroke="var(--bhopal)" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    </g>
  );
}

function KeralaAtmosphere() {
  return (
    <g opacity="0.18">
      {/* Coconut palm silhouettes (2) */}
      <line x1="62" y1="378" x2="64" y2="350" stroke="var(--kerala)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 64,350 Q 60,344 54,346" fill="none" stroke="var(--kerala)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 64,350 Q 68,343 74,347" fill="none" stroke="var(--kerala)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 64,350 Q 62,342 58,341" fill="none" stroke="var(--kerala)" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <line x1="72" y1="380" x2="70" y2="355" stroke="var(--kerala)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M 70,355 Q 66,348 60,351" fill="none" stroke="var(--kerala)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M 70,355 Q 74,348 80,352" fill="none" stroke="var(--kerala)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      {/* Backwater curve */}
      <path d="M 58,370 Q 66,366 74,372 Q 82,378 90,374" fill="none" stroke="var(--kerala)" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
    </g>
  );
}

function ChennaiAtmosphere() {
  return (
    <g opacity="0.2">
      {/* Marina Beach waves */}
      <path d="M 96,330 Q 104,326 112,330 Q 120,334 128,330" fill="none" stroke="var(--chennai)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 98,337 Q 106,333 114,337 Q 122,341 130,337" fill="none" stroke="var(--chennai)" strokeWidth="1"   strokeLinecap="round" opacity="0.7" />
      <path d="M 100,344 Q 108,340 116,344 Q 124,348 132,344" fill="none" stroke="var(--chennai)" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      {/* Tiny boat */}
      <path d="M 118,324 Q 122,321 126,324 L 124,327 L 120,327 Z" fill="var(--chennai)" opacity="0.3" />
      <line x1="122" y1="321" x2="122" y2="316" stroke="var(--chennai)" strokeWidth="0.8" opacity="0.3" />
    </g>
  );
}

export default function IndiaMap({ activeLocation, onCityClick }: IndiaMapProps) {
  const loc = activeLocation ? locationMeta[activeLocation] : null;

  // Spring zoom: center = (145, 192.5) for 290x385 viewBox
  const zoom = loc
    ? { scale: loc.viewScale, x: loc.viewX, y: loc.viewY }
    : { scale: 1, x: 0, y: 0 };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "290 / 385",
        overflow: "hidden",
        borderRadius: "var(--r-lg)",
        border: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      {/* Atmospheric background colour */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: activeLocation === "delhi"
            ? "radial-gradient(ellipse at 42% 32%, rgba(217,95,42,0.14) 0%, transparent 65%)"
            : activeLocation === "bhopal"
            ? "radial-gradient(ellipse at 42% 52%, rgba(46,116,192,0.14) 0%, transparent 65%)"
            : activeLocation === "kerala"
            ? "radial-gradient(ellipse at 36% 88%, rgba(26,140,111,0.14) 0%, transparent 65%)"
            : activeLocation === "chennai"
            ? "radial-gradient(ellipse at 48% 78%, rgba(224,90,43,0.14) 0%, transparent 65%)"
            : "transparent",
          transition: "background 0.8s ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Zooming SVG container */}
      <motion.div
        animate={{ scale: zoom.scale, x: zoom.x, y: zoom.y }}
        transition={{ type: "spring", stiffness: 72, damping: 22 }}
        style={{ position: "absolute", inset: 0 }}
      >
        <svg
          viewBox="0 0 290 385"
          width="100%"
          height="100%"
          aria-label="Map of India"
          role="img"
          style={{ display: "block", overflow: "visible" }}
        >
          {/* ─── Main India outline ─── */}
          <path
            d="
              M 88,22
              C 80,34 70,50 60,65
              C 52,80 34,100 20,118
              C 12,136 10,155 16,172
              C 22,182 28,188 30,196
              C 32,205 36,214 34,224
              C 32,232 30,240 34,248
              C 38,255 44,260 48,268
              C 52,278 56,290 60,302
              C 64,314 68,328 72,342
              C 76,354 80,364 82,372
              C 84,378 88,384 92,386
              C 96,382 102,374 110,362
              C 118,348 122,332 124,314
              C 126,296 128,278 128,260
              C 132,242 138,226 146,212
              C 156,198 172,188 190,182
              C 198,178 206,172 214,164
              C 224,154 236,144 248,136
              C 258,128 268,122 276,118
              C 282,116 286,118 282,128
              C 278,136 268,140 254,144
              C 238,146 220,140 202,134
              C 182,128 158,118 136,110
              C 118,104 102,96 90,82
              C 86,68 82,52 84,38
              C 85,30 86,24 88,22 Z
            "
            fill="rgba(17,17,16,0.055)"
            stroke="rgba(17,17,16,0.22)"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* ─── Gujarat peninsula ─── */}
          <path
            d="M 16,172 C 8,168 0,170 0,180 C 0,190 6,200 14,204 C 24,208 32,204 34,196 C 36,188 26,176 16,172 Z"
            fill="rgba(17,17,16,0.055)"
            stroke="rgba(17,17,16,0.22)"
            strokeWidth="1.2"
          />

          {/* ─── State internal lines (very subtle) ─── */}
          <line x1="92" y1="45"  x2="88" y2="82"  stroke="rgba(17,17,16,0.06)" strokeWidth="0.8" />
          <line x1="94" y1="110" x2="94" y2="185" stroke="rgba(17,17,16,0.06)" strokeWidth="0.8" />
          <line x1="94" y1="185" x2="88" y2="240" stroke="rgba(17,17,16,0.06)" strokeWidth="0.8" />
          <line x1="94" y1="185" x2="148" y2="213" stroke="rgba(17,17,16,0.06)" strokeWidth="0.8" />

          {/* ─── Atmospheric motifs (per location) ─── */}
          <AnimatePresence>
            {activeLocation === "delhi" && (
              <motion.g key="delhi-atm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <DelhiAtmosphere />
              </motion.g>
            )}
            {activeLocation === "bhopal" && (
              <motion.g key="bhopal-atm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <BhopalAtmosphere />
              </motion.g>
            )}
            {activeLocation === "kerala" && (
              <motion.g key="kerala-atm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <KeralaAtmosphere />
              </motion.g>
            )}
            {activeLocation === "chennai" && (
              <motion.g key="chennai-atm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ChennaiAtmosphere />
              </motion.g>
            )}
          </AnimatePresence>

          {/* ─── Connection path between cities ─── */}
          <AnimatePresence>
            {activeLocation && (
              <motion.path
                key={activeLocation + "-route"}
                d="M 92,111 L 94,182 L 74,362 M 94,182 L 108,315"
                fill="none"
                stroke="rgba(17,17,16,0.12)"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>

          {/* ─── City markers ─── */}
          {(Object.entries(CITIES) as [LocationKey, { x: number; y: number; label: string }][]).map(
            ([key, city]) => {
              const isActive = activeLocation === key;
              const color = locationMeta[key].color;

              return (
                <g
                  key={key}
                  onClick={() => onCityClick?.(key)}
                  style={{ cursor: "pointer" }}
                  role="button"
                  aria-label={`Select ${city.label}`}
                >
                  {/* Pulsing ring */}
                  {isActive && (
                    <motion.circle
                      cx={city.x}
                      cy={city.y}
                      r={14}
                      fill={color}
                      initial={{ opacity: 0.15, scale: 0.5 }}
                      animate={{ opacity: [0.15, 0.04, 0.15], scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      style={{ transformOrigin: `${city.x}px ${city.y}px` }}
                    />
                  )}
                  {/* Halo */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={isActive ? 8 : 5}
                    fill={color}
                    opacity={isActive ? 0.12 : 0.06}
                    style={{ transition: "r 0.3s, opacity 0.3s" }}
                  />
                  {/* Core dot */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={isActive ? 4.5 : 3}
                    fill={isActive ? color : "rgba(17,17,16,0.45)"}
                    style={{ transition: "r 0.3s, fill 0.3s" }}
                  />
                  {/* Crosshair */}
                  {isActive && (
                    <>
                      <line x1={city.x - 9} y1={city.y} x2={city.x + 9} y2={city.y} stroke={color} strokeWidth="0.7" opacity="0.4" />
                      <line x1={city.x} y1={city.y - 9} x2={city.x} y2={city.y + 9} stroke={color} strokeWidth="0.7" opacity="0.4" />
                    </>
                  )}
                </g>
              );
            }
          )}
        </svg>
      </motion.div>

      {/* Location label chip */}
      <AnimatePresence mode="wait">
        {activeLocation && loc && (
          <motion.div
            key={activeLocation}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              bottom: "0.75rem",
              left: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.3rem 0.7rem",
              background: "rgba(252,251,248,0.95)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${loc.color}33`,
              borderRadius: "100px",
              zIndex: 10,
            }}
          >
            <span
              style={{ width: 6, height: 6, borderRadius: "50%", background: loc.color, flexShrink: 0 }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                fontWeight: 600,
                color: loc.color,
                letterSpacing: "0.08em",
              }}
            >
              {loc.label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* "INDIA" watermark when no location is selected */}
      {!activeLocation && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "0.75rem",
            left: "0.75rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            fontWeight: 500,
            color: "var(--text-3)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          India
        </div>
      )}
    </div>
  );
}
