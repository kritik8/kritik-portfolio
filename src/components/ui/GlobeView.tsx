"use client";

import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { experiences, locationMeta } from "@/data/experience";

interface GlobeViewProps {
  activeId: string;
  setActiveId: (id: string) => void;
}

const LOCATION_COLORS: Record<string, string> = {
  delhi: "#D95F2A",
  kerala: "#1A8C6F",
  bhopal: "#2E74C0",
  chennai: "#E05A2B",
};

const MARKERS = [
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

export default function GlobeView({ activeId, setActiveId }: GlobeViewProps) {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isDark = theme === "dark";
  const [isGlobeReady, setIsGlobeReady] = useState(false);

  // Track size/resize
  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height: height || width }); // Keep square or full height
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Track data-theme mutations on documentElement
  useEffect(() => {
    const getTheme = () => {
      return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    };
    setTheme(getTheme());

    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  // Setup globe controls & initial view once ready
  useEffect(() => {
    if (!isGlobeReady || !globeRef.current) return;

    // Center on India initial view
    globeRef.current.pointOfView({ lat: 21, lng: 78, altitude: 1.85 }, 0);

    const controls = globeRef.current.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.35;
      controls.enableZoom = true;
      controls.enablePan = false;
      controls.minDistance = 200;
      controls.maxDistance = 500;
    }

    // Handle prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (globeRef.current?.controls()) {
        globeRef.current.controls().autoRotate = !e.matches;
      }
    };
    handleMotionChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, [isGlobeReady]);

  // Dynamically set globe material color based on theme
  useEffect(() => {
    if (!isGlobeReady || !globeRef.current) return;
    const material = globeRef.current.globeMaterial();
    if (material) {
      material.color.set(isDark ? "#121211" : "#FAF9F5");
    }
  }, [isDark, isGlobeReady]);

  // Hovering timeline item flies to marker on globe
  useEffect(() => {
    if (!isGlobeReady) return;
    const activeExp = experiences.find((e) => e.id === activeId);
    if (!activeExp || !activeExp.locationKey) return;

    const marker = MARKERS.find((m) => m.key === activeExp.locationKey);
    if (marker && globeRef.current) {
      globeRef.current.pointOfView(
        { lat: marker.lat, lng: marker.lng, altitude: 1.6 },
        1000
      );
    }
  }, [activeId, isGlobeReady]);

  // Points mapping
  const pointsData = MARKERS.map((m) => {
    const orgs = m.experiences
      .map((id) => experiences.find((e) => e.id === id)?.org)
      .filter(Boolean);
    const color = LOCATION_COLORS[m.key] || "#4DA6E8";
    return {
      ...m,
      orgs,
      color,
    };
  });

  // Pulse rings mapping (only for currently active location marker)
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
        aspectRatio: "1/1",
        borderRadius: "var(--r-lg)",
        border: "1px solid var(--border-subtle)",
        background: isDark ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {dimensions.width > 0 && (
        <Globe
          ref={globeRef}
          onGlobeReady={() => setIsGlobeReady(true)}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-light.jpg"
          showAtmosphere={false}
          
          // Markers / Points configuration
          pointsData={isGlobeReady ? pointsData : []}
          pointLat="lat"
          pointLng="lng"
          pointColor="color"
          pointRadius={0.35}
          pointAltitude={0.01}
          pointLabel={(d: any) => `
            <div style="
              background: ${isDark ? "#191917" : "#FFFFFF"};
              border: 1px solid ${isDark ? "#2E2E2A" : "#DDDBD3"};
              padding: 0.5rem 0.75rem;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.08);
              font-family: var(--font-sans);
              color: ${isDark ? "#F7F6F0" : "#111110"};
              font-size: 0.75rem;
              pointer-events: none;
            ">
              <div style="font-weight: 700;">${d.orgs.join(" & ")}</div>
              <div style="font-family: var(--font-mono); font-size: 0.55rem; color: ${
                isDark ? "#75746C" : "#9A9890"
              }; text-transform: uppercase; margin-top: 2px;">${d.city}</div>
            </div>
          `}
          onPointClick={(point: any) => {
            if (point.experiences.length > 0) {
              // Activate the first experience under this location marker
              setActiveId(point.experiences[0]);
            }
          }}

          // Rings (Pulsing Active Point)
          ringsData={isGlobeReady ? ringsData : []}
          ringLat="lat"
          ringLng="lng"
          ringColor="color"
          ringMaxRadius={4.5}
          ringPropagationSpeed={2.2}
          ringRepeatPeriod={1100}
        />
      )}
    </div>
  );
}
