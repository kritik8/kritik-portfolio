"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { experiences } from "@/data/experience";

interface GlobeCanvasProps {
  activeId: string;
  setActiveId: (id: string) => void;
}

interface MarkerData {
  key: "delhi" | "bhopal" | "chennai" | "kerala";
  city: string;
  lat: number;
  lng: number;
  experiences: string[];
}

const LOCATION_COLORS: Record<string, string> = {
  delhi: "#D95F2A",
  kerala: "#1A8C6F",
  bhopal: "#2E74C0",
  chennai: "#E05A2B",
};

const MARKERS: MarkerData[] = [
  {
    key: "delhi",
    city: "New Delhi, India",
    lat: 28.6139,
    lng: 77.2090,
    experiences: ["indiamart"],
  },
  {
    key: "bhopal",
    city: "Bhopal, M.P.",
    lat: 23.2599,
    lng: 77.4126,
    experiences: ["ieee", "ta"],
  },
  {
    key: "chennai",
    city: "Chennai, Tamil Nadu",
    lat: 13.0827,
    lng: 80.2707,
    experiences: ["qriocity"],
  },
  {
    key: "kerala",
    city: "Kochi, Kerala",
    lat: 9.9312,
    lng: 76.2673,
    experiences: ["gamerstag"],
  },
];

// Center coordinates for India to keep it enlarged and front-and-center
const INDIA_CENTER = {
  lat: 21.0,
  lng: 78.5,
  altitude: 1.12, // Enlarged view (default altitude is usually 2.5)
};

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const observer = new MutationObserver(() => callback());
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getThemeSnapshot(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  return (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light";
}

function getServerThemeSnapshot(): "light" | "dark" {
  return "light";
}

export default function GlobeCanvas({ activeId, setActiveId }: GlobeCanvasProps) {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isGlobeReady, setIsGlobeReady] = useState(false);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  const isDark = theme === "dark";

  // Track container dimensions with ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width > 0) {
      setDimensions({
        width: rect.width,
        height: rect.height || 460,
      });
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0) {
          setDimensions({ width, height: height || 460 });
        }
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Configure camera & controls once the globe is ready
  useEffect(() => {
    if (!isGlobeReady || !globeRef.current) return;

    // Center on India immediately with an enlarged view
    globeRef.current.pointOfView(INDIA_CENTER, 0);

    const controls = globeRef.current.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.25;
      controls.enableZoom = true;
      controls.enablePan = false;
      controls.minDistance = 140; // Allow closer zoom into India
      controls.maxDistance = 420;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (globeRef.current) {
        const c = globeRef.current.controls();
        if (c) c.autoRotate = !e.matches;
      }
    };
    handleMotionChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, [isGlobeReady]);

  // When active experience changes, glide camera to the respective Indian hub
  useEffect(() => {
    if (!isGlobeReady || !globeRef.current) return;

    const activeExp = experiences.find((e) => e.id === activeId);
    if (!activeExp || !activeExp.locationKey) {
      // Return smoothly to India center for virtual/non-geographic items
      globeRef.current.pointOfView(INDIA_CENTER, 1000);
      return;
    }

    const marker = MARKERS.find((m) => m.key === activeExp.locationKey);
    if (marker) {
      // Zoomed-in fly-to view of the specific city in India
      globeRef.current.pointOfView(
        { lat: marker.lat, lng: marker.lng, altitude: 0.98 },
        1200
      );
    }
  }, [activeId, isGlobeReady]);

  // Markers mapped with organisation metadata
  const pointsData = MARKERS.map((m) => {
    const orgs = m.experiences
      .map((id) => experiences.find((e) => e.id === id)?.org)
      .filter(Boolean) as string[];
    const color = LOCATION_COLORS[m.key] || "#4DA6E8";
    return {
      ...m,
      orgs,
      color,
    };
  });

  // Active ring pulse on currently selected city
  const activeExp = experiences.find((e) => e.id === activeId);
  const activeLocKey = activeExp?.locationKey;
  const activeMarker = MARKERS.find((m) => m.key === activeLocKey);
  const ringsData = activeMarker
    ? [
        {
          lat: activeMarker.lat,
          lng: activeMarker.lng,
          color: LOCATION_COLORS[activeMarker.key] || "#4DA6E8",
        },
      ]
    : [];

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "460px",
        borderRadius: "var(--r-lg)",
        border: "1px solid var(--border)",
        background: "var(--bg-card)",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "var(--sh-sm)",
      }}
    >
      {/* Subtle Ambient Atmosphere Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? "radial-gradient(circle at 50% 50%, rgba(77, 166, 232, 0.08) 0%, transparent 70%)"
            : "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.02) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Top Header Badge */}
      <div
        style={{
          position: "absolute",
          top: "14px",
          left: "14px",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "4px 10px",
          borderRadius: "999px",
          background: isDark ? "rgba(18, 18, 17, 0.75)" : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(8px)",
          border: "1px solid var(--border-subtle)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          fontWeight: 600,
          color: "var(--text)",
          letterSpacing: "0.04em",
          pointerEvents: "none",
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--emerald)" }} />
        Interactive 3D Globe · India Hubs
      </div>

      {/* Quick City Jump Buttons */}
      <div
        style={{
          position: "absolute",
          top: "14px",
          right: "14px",
          zIndex: 10,
          display: "flex",
          gap: "6px",
          flexWrap: "wrap",
        }}
      >
        {MARKERS.map((m) => {
          const isSelected = activeLocKey === m.key;
          const color = LOCATION_COLORS[m.key];
          return (
            <button
              key={m.key}
              onClick={() => {
                if (m.experiences.length > 0) {
                  setActiveId(m.experiences[0]);
                }
              }}
              style={{
                background: isSelected
                  ? color + "22"
                  : isDark
                  ? "rgba(18, 18, 17, 0.75)"
                  : "rgba(255, 255, 255, 0.85)",
                color: isSelected ? color : "var(--text-2)",
                border: `1px solid ${isSelected ? color : "var(--border-subtle)"}`,
                borderRadius: "var(--r-sm)",
                padding: "3px 8px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                fontWeight: isSelected ? 700 : 500,
                cursor: "pointer",
                backdropFilter: "blur(6px)",
                transition: "all 0.2s ease",
              }}
            >
              {m.key.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Bottom Hint */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          right: "14px",
          zIndex: 10,
          fontFamily: "var(--font-mono)",
          fontSize: "0.58rem",
          color: "var(--text-3)",
          letterSpacing: "0.03em",
          pointerEvents: "none",
        }}
      >
        Drag to rotate · Scroll to zoom
      </div>

      {/* 3D Globe Canvas */}
      {dimensions.width > 0 && (
        <Globe
          ref={globeRef}
          onGlobeReady={() => setIsGlobeReady(true)}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl={isDark ? "/earth-dark.jpg" : "/earth-light.jpg"}
          showAtmosphere={isDark}
          atmosphereColor={isDark ? "#3A7BD5" : "rgba(0,0,0,0)"}
          atmosphereAltitude={0.14}
          
          // Points
          pointsData={isGlobeReady ? pointsData : []}
          pointLat="lat"
          pointLng="lng"
          pointColor="color"
          pointRadius={0.5}
          pointAltitude={0.02}
          pointLabel={(d: object) => {
            const pt = d as (typeof pointsData)[number];
            return `
              <div style="
                background: ${isDark ? "#191917" : "#FFFFFF"};
                border: 1px solid ${isDark ? "#2E2E2A" : "#DDDBD3"};
                padding: 0.5rem 0.75rem;
                border-radius: 8px;
                box-shadow: 0 6px 18px rgba(0,0,0,0.18);
                font-family: var(--font-sans);
                color: ${isDark ? "#F7F6F0" : "#111110"};
                font-size: 0.75rem;
                pointer-events: none;
              ">
                <div style="font-weight: 700; color: ${pt.color};">${pt.orgs.join(" & ")}</div>
                <div style="font-family: var(--font-mono); font-size: 0.58rem; color: ${
                  isDark ? "#9A9890" : "#75746C"
                }; text-transform: uppercase; margin-top: 3px;">
                  📍 ${pt.city}
                </div>
              </div>
            `;
          }}
          onPointClick={(point: object) => {
            const pt = point as MarkerData;
            if (pt.experiences && pt.experiences.length > 0) {
              setActiveId(pt.experiences[0]);
            }
          }}

          // Concentric Animated Rings
          ringsData={isGlobeReady ? ringsData : []}
          ringLat="lat"
          ringLng="lng"
          ringColor="color"
          ringMaxRadius={5.5}
          ringPropagationSpeed={2.5}
          ringRepeatPeriod={1000}
        />
      )}
    </div>
  );
}
