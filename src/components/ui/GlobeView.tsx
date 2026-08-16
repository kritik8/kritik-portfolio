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

// Dynamically converts the earth map into a custom monochrome color scheme matching the active theme
const processMonochromeTexture = (src: string, isDark: boolean): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(src);
        return;
      }
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        // Standard luminosity formula for grayscale
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;

        if (!isDark) {
          // Light Mode: Oceans (originally dark) -> Off-White (#FAF9F5, RGB: 250, 249, 245)
          // Landmasses (originally bright) -> Dark Muted Grey (#75746C, RGB: 117, 116, 108)
          const ratio = gray / 255;
          data[i] = 250 - ratio * (250 - 117);     // R
          data[i + 1] = 249 - ratio * (249 - 116); // G
          data[i + 2] = 245 - ratio * (245 - 108); // B
        } else {
          // Dark Mode: Oceans (originally dark) -> Deep Charcoal (#121211, RGB: 18, 18, 17)
          // Landmasses (originally bright) -> Medium Grey (#3E3D39, RGB: 62, 61, 57)
          const ratio = gray / 255;
          data[i] = 18 + ratio * (62 - 18);     // R
          data[i + 1] = 18 + ratio * (61 - 18); // G
          data[i + 2] = 17 + ratio * (57 - 17); // B
        }
      }
      ctx.putImageData(imgData, 0, 0);
      resolve(canvas.toDataURL());
    };
    img.onerror = () => {
      resolve(src);
    };
    img.src = src;
  });
};

export default function GlobeView({ activeId, setActiveId }: GlobeViewProps) {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isDark = theme === "dark";
  const [isGlobeReady, setIsGlobeReady] = useState(false);
  const [processedTexture, setProcessedTexture] = useState<string>("");

  // Dynamically generate monochrome texture matching active theme
  useEffect(() => {
    processMonochromeTexture("/earth-dark.jpg", isDark).then((url) => {
      setProcessedTexture(url);
    });
  }, [isDark]);

  // Track size/resize
  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize dimensions on mount to prevent rendering with 0 width
    const rect = containerRef.current.getBoundingClientRect();
    setDimensions({
      width: rect.width || 340,
      height: rect.height || rect.width || 340,
    });

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0) {
          setDimensions({ width, height: height || width });
        }
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
    if (typeof globeRef.current.pointOfView === "function") {
      globeRef.current.pointOfView({ lat: 21, lng: 78, altitude: 1.35 }, 0);
    }

    if (typeof globeRef.current.controls === "function") {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.35;
        controls.enableZoom = true;
        controls.enablePan = false;
        controls.minDistance = 200;
        controls.maxDistance = 500;
      }
    }

    // Handle prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (globeRef.current && typeof globeRef.current.controls === "function") {
        const c = globeRef.current.controls();
        if (c) c.autoRotate = !e.matches;
      }
    };
    handleMotionChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, [isGlobeReady]);

  // Hovering timeline item flies to marker on globe
  useEffect(() => {
    if (!isGlobeReady || !globeRef.current) return;
    const activeExp = experiences.find((e) => e.id === activeId);
    if (!activeExp || !activeExp.locationKey) return;

    const marker = MARKERS.find((m) => m.key === activeExp.locationKey);
    if (marker && typeof globeRef.current.pointOfView === "function") {
      globeRef.current.pointOfView(
        { lat: marker.lat, lng: marker.lng, altitude: 1.2 },
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
          globeImageUrl={processedTexture || "/earth-dark.jpg"}
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
