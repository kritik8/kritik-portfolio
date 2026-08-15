export interface Experience {
  id: string;
  org: string;
  role: string;
  duration: string;
  year: string;
  location: string;
  locationKey: "delhi" | "kerala" | "bhopal" | "chennai" | null;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  logo: string;
  logoAlt: string;
  logoBg?: "light" | "dark";
  isAward?: boolean;
  // Geographic position in the India SVG (viewBox 0 0 290 385)
  mapX?: number;
  mapY?: number;
}

export const experiences: Experience[] = [
  {
    id: "indiamart",
    org: "IndiaMART InterMESH",
    role: "Software Development Intern",
    duration: "June 2026 – July 2026",
    year: "2026",
    location: "Delhi",
    locationKey: "delhi",
    shortDesc: "Built AI-powered call quality systems pushing accuracy from 89% to 98.5%.",
    fullDesc:
      "Engineered a Go-based AI Auditor for PNS Call Summary quality — pushing accuracy from 89% to 98.5% using LLM-as-a-Judge with Langfuse-managed prompts. Built intent-based Suggestive Replies and an Actionable Suggestions embeddings/clustering model. Deployed GPU-backed FastAPI/Uvicorn workers with OpenTelemetry + Kibana observability, benchmarked on 5,000+ production-like cases using BigQuery.",
    tags: ["Go", "FastAPI", "LLM-as-a-Judge", "Langfuse", "OpenTelemetry", "BigQuery", "GPU Deployment"],
    logo: "/logos/indiamart-logo.png",
    logoAlt: "IndiaMART logo",
    logoBg: "light",
    mapX: 92,
    mapY: 111,
  },
  {
    id: "amazon-ml",
    org: "Amazon ML Summer School",
    role: "Selected Participant",
    duration: "June–July 2025 · June–July 2026",
    year: "2025",
    location: "Virtual",
    locationKey: null,
    shortDesc: "Selected for two consecutive annual cohorts of Amazon's intensive ML program.",
    fullDesc:
      "Selected participant in Amazon ML Summer School for two consecutive annual cohorts — June–July 2025 and June–July 2026. Intensive program covering advanced ML theory, deep learning architectures, large-scale systems, and applied research.",
    tags: ["Machine Learning", "Deep Learning", "Applied Research", "Amazon"],
    logo: "/logos/amazon-logo.png",
    logoAlt: "Amazon logo",
    logoBg: "light",
    isAward: true,
  },
  {
    id: "qriocity",
    org: "Qriocity",
    role: "Machine Learning Intern",
    duration: "November 2025 – January 2026",
    year: "2025",
    location: "Chennai",
    locationKey: "chennai",
    shortDesc: "Built ML pipelines that reduced analysis turnaround time by 30%.",
    fullDesc:
      "Developed end-to-end applied ML pipelines — data processing, model experimentation, evaluation, and deployment-ready outputs. Automated experimentation, validation, and reporting workflows, achieving a 30% reduction in analysis turnaround time, 20% reduction in repeated processing overhead, and a 40% increase in experimentation throughput.",
    tags: ["Python", "ML Pipelines", "Data Processing", "Model Evaluation", "Automation"],
    logo: "/logos/qriocity-logo.png",
    logoAlt: "Qriocity logo",
    logoBg: "light",
    mapX: 108,
    mapY: 315,
  },
  {
    id: "ieee",
    org: "IEEE IIIT Bhopal Student Branch",
    role: "Chairperson",
    duration: "October 2024 – October 2025",
    year: "2024",
    location: "Bhopal",
    locationKey: "bhopal",
    shortDesc: "Led the IEEE chapter — technical initiatives, workshops, community growth.",
    fullDesc:
      "Served as Chairperson of the IEEE IIIT Bhopal Student Branch. Led technical initiatives, organized workshops and events, drove member engagement and chapter activities. Focused on building a strong technical community.",
    tags: ["Leadership", "Technical Events", "Community", "IEEE"],
    logo: "/logos/ieee-logo.png",
    logoAlt: "IEEE logo",
    logoBg: "dark",
    mapX: 94,
    mapY: 182,
  },
  {
    id: "ta",
    org: "IIIT Bhopal",
    role: "Teaching Assistant",
    duration: "July 2024 – November 2024",
    year: "2024",
    location: "Bhopal",
    locationKey: "bhopal",
    shortDesc: "Mentored students in Fundamentals of Computer Programming.",
    fullDesc:
      "Served as Teaching Assistant for Fundamentals of Computer Programming at IIIT Bhopal. Helped students understand core programming concepts, conducted doubt sessions, and supported instructors in delivering a rigorous foundational curriculum.",
    tags: ["Teaching", "Programming", "Mentoring", "C++"],
    logo: "/logos/iiit-logo.png",
    logoAlt: "IIIT Bhopal logo",
    logoBg: "light",
    mapX: 94,
    mapY: 182,
  },
  {
    id: "gamerstag",
    org: "GamersTag",
    role: "UI/UX Designer",
    duration: "May 2024 – June 2024",
    year: "2024",
    location: "Kochi, Kerala",
    locationKey: "kerala",
    shortDesc: "Shaped the visual identity and UX for a gaming community platform.",
    fullDesc:
      "Contributed to the UI/UX design direction of GamersTag, a platform built around gaming identity. Responsible for crafting user-centred interface designs and visual experiences for the product.",
    tags: ["UI Design", "UX Research", "Figma", "Product Design"],
    logo: "/logos/gamerstag-logo.png",
    logoAlt: "GamersTag logo",
    logoBg: "dark",
    mapX: 74,
    mapY: 362,
  },
];

export const locationMeta = {
  delhi: {
    color:     "var(--delhi)",
    bgColor:   "var(--delhi-bg)",
    label:     "New Delhi",
    viewScale: 2.5,
    viewX:     133,
    viewY:     204,
  },
  bhopal: {
    color:     "var(--bhopal)",
    bgColor:   "var(--bhopal-bg)",
    label:     "Bhopal, M.P.",
    viewScale: 2.2,
    viewX:     112,
    viewY:     23,
  },
  kerala: {
    color:     "var(--kerala)",
    bgColor:   "var(--kerala-bg)",
    label:     "Kochi, Kerala",
    viewScale: 2.0,
    viewX:     142,
    viewY:     -339,
  },
  chennai: {
    color:     "var(--chennai)",
    bgColor:   "var(--chennai-bg)",
    label:     "Chennai, Tamil Nadu",
    viewScale: 2.2,
    viewX:     105,
    viewY:     -148,
  },
};
