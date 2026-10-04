"use client";

import dynamic from "next/dynamic";

interface GlobeViewProps {
  activeId: string;
  setActiveId: (id: string) => void;
}

const GlobeCanvas = dynamic(() => import("./GlobeCanvas"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "460px",
        borderRadius: "var(--r-lg)",
        border: "1px solid var(--border)",
        background: "var(--bg-card)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        boxShadow: "var(--sh-sm)",
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "2px solid var(--border)",
          borderTopColor: "var(--amber)",
          animation: "spin 1s linear infinite",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--text-3)",
          letterSpacing: "0.05em",
        }}
      >
        Loading 3D Globe...
      </span>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  ),
});

export default function GlobeView({ activeId, setActiveId }: GlobeViewProps) {
  return <GlobeCanvas activeId={activeId} setActiveId={setActiveId} />;
}
