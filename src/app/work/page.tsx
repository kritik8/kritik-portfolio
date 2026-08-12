"use client";

import { FadeUp } from "@/components/motion/FadeUp";
import WorkTimeline from "@/components/sections/WorkTimeline";

export default function WorkPage() {
  return (
    <main className="wrap page-pad" style={{ marginTop: "4rem" }}>
      <FadeUp>
        <p className="label" style={{ marginBottom: "0.5rem" }}>
          Timeline
        </p>
        <h1
          className="serif"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            lineHeight: 1.15,
            marginBottom: "3rem",
          }}
        >
          Professional Footprint
        </h1>
      </FadeUp>

      <FadeUp delay={0.1}>
        <WorkTimeline />
      </FadeUp>
    </main>
  );
}
