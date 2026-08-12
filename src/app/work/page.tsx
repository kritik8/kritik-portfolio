"use client";

import { FadeUp } from "@/components/motion/FadeUp";
import WorkTimeline from "@/components/sections/WorkTimeline";

export default function WorkPage() {
  return (
    <main className="wrap page-pad">
      <FadeUp>
        <p className="label" style={{ marginBottom: "0.65rem" }}>
          Timeline
        </p>
        <h1
          className="serif"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.035em",
            color: "var(--text)",
            lineHeight: 1.12,
            marginBottom: "3.5rem",
            maxWidth: "600px",
          }}
        >
          Incredible places<br />
          I&apos;ve worked at.
        </h1>
      </FadeUp>

      <FadeUp delay={0.1}>
        <WorkTimeline />
      </FadeUp>
    </main>
  );
}
