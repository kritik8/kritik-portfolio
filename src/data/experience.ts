export interface Experience {
  id: string;
  org: string;
  role: string;
  duration: string;
  location: string | null;
  locationKey: "delhi" | "kerala" | "bhopal" | null;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  logo: string;
  logoAlt: string;
  type: "internship" | "leadership" | "teaching" | "design";
  // Map coordinates in the SVG viewBox (0 0 280 360)
  mapX?: number;
  mapY?: number;
}

export const experiences: Experience[] = [
  {
    id: "indiamart",
    org: "IndiaMART InterMESH",
    role: "Software Development Intern",
    duration: "June 2026 – July 2026",
    location: "Delhi",
    locationKey: "delhi",
    shortDesc: "Built AI-powered call quality systems serving 5,000+ production cases.",
    fullDesc:
      "Engineered a Go-based AI Auditor for PNS Call Summary quality — pushing accuracy from 89% to 98.5% using LLM-as-a-Judge with Langfuse-managed prompts. Built intent-based Suggestive Replies and an Actionable Suggestions embeddings/clustering model. Deployed GPU-backed FastAPI/Uvicorn workers with OpenTelemetry + Kibana observability, benchmarked on 5,000+ production-like cases using BigQuery.",
    tags: ["Go", "FastAPI", "LLM-as-a-Judge", "Langfuse", "OpenTelemetry", "BigQuery", "GPU Deployment", "Kibana"],
    logo: "/logos/indiamart-logo.png",
    logoAlt: "IndiaMART logo",
    type: "internship",
    mapX: 130,
    mapY: 95,
  },
  {
    id: "qriocity",
    org: "Qriocity",
    role: "Machine Learning Intern",
    duration: "November 2025 – January 2026",
    location: null,
    locationKey: null,
    shortDesc: "Built ML pipelines that reduced analysis turnaround by 30%.",
    fullDesc:
      "Developed end-to-end applied ML pipelines in Python — data processing, model experimentation, evaluation, and deployment-ready outputs. Automated experimentation, validation, and reporting workflows, achieving a 30% reduction in analysis turnaround time, 20% reduction in repeated processing overhead, and a 40% increase in experimentation throughput.",
    tags: ["Python", "ML Pipelines", "Data Processing", "Model Evaluation", "Automation"],
    logo: "/logos/qriocity-logo.png",
    logoAlt: "Qriocity logo",
    type: "internship",
    mapX: undefined,
    mapY: undefined,
  },
  {
    id: "ieee",
    org: "IEEE IIIT Bhopal Student Branch",
    role: "Chairperson",
    duration: "October 2024 – October 2025",
    location: "Bhopal",
    locationKey: "bhopal",
    shortDesc: "Led the IEEE student chapter — technical events, workshops, community growth.",
    fullDesc:
      "Served as Chairperson of the IEEE IIIT Bhopal Student Branch. Led technical initiatives, organized workshops and events, drove member engagement and chapter activities. Focused on building a strong technical community and representing the branch in IEEE activities.",
    tags: ["Leadership", "Technical Events", "Community", "IEEE"],
    logo: "/logos/ieee-logo.png",
    logoAlt: "IEEE logo",
    type: "leadership",
    mapX: 138,
    mapY: 183,
  },
  {
    id: "ta",
    org: "IIIT Bhopal",
    role: "Teaching Assistant",
    duration: "July 2024 – November 2024",
    location: "Bhopal",
    locationKey: "bhopal",
    shortDesc: "Mentored students in Fundamentals of Computer Programming.",
    fullDesc:
      "Served as Teaching Assistant for Fundamentals of Computer Programming at IIIT Bhopal. Helped students understand core programming concepts, conducted doubt sessions, and supported instructors in delivering a rigorous foundational curriculum.",
    tags: ["Teaching", "Programming", "Mentoring", "C++"],
    logo: "/logos/iiitbhopal-logo.png",
    logoAlt: "IIIT Bhopal logo",
    type: "teaching",
    mapX: 138,
    mapY: 183,
  },
  {
    id: "gamerstag",
    org: "GamersTag",
    role: "UI/UX Designer",
    duration: "May 2024 – June 2024",
    location: "Kochi, Kerala",
    locationKey: "kerala",
    shortDesc: "Shaped the visual experience for a gaming identity platform.",
    fullDesc:
      "Contributed to the UI/UX design direction of GamersTag, a platform built around gaming identity. Responsible for crafting user-centered interface designs and visual experiences for the product.",
    tags: ["UI Design", "UX Research", "Figma", "Product Design"],
    logo: "/logos/gamerstag-logo.png",
    logoAlt: "GamersTag logo",
    type: "design",
    mapX: 104,
    mapY: 318,
  },
];

export const locationMeta = {
  delhi: {
    color: "#D9623A",
    label: "New Delhi",
    atmosphere: "warm",
    viewBox: "80 55 130 110",
  },
  kerala: {
    color: "#1D8A65",
    label: "Kochi, Kerala",
    atmosphere: "coastal",
    viewBox: "55 270 120 110",
  },
  bhopal: {
    color: "#2F6FBD",
    label: "Bhopal, M.P.",
    atmosphere: "lake",
    viewBox: "70 130 150 130",
  },
};
