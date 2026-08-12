export interface Experience {
  id: string;
  organization: string;
  role: string;
  duration: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  logo: string;
  logoAlt: string;
  type: "internship" | "leadership" | "teaching" | "community";
}

export const experiences: Experience[] = [
  {
    id: "indiamart",
    organization: "IndiaMART InterMESH",
    role: "Software Development Intern",
    duration: "June 2026 – July 2026",
    shortDesc: "Built AI-powered quality systems for production call analytics.",
    fullDesc:
      "Engineered a Go-based AI Auditor for PNS Call Summary quality evaluation, pushing accuracy from 89% to 98.5%. Built intent-based Suggestive Replies and an Actionable Suggestions clustering model. Deployed GPU-backed FastAPI/Uvicorn production workers with OpenTelemetry observability and Kibana dashboards, stress-tested on 5,000+ production-like cases.",
    tags: ["Go", "FastAPI", "LLM-as-a-Judge", "Langfuse", "OpenTelemetry", "BigQuery", "Kibana", "GPU Deployment"],
    logo: "/logos/indiamart-logo.png",
    logoAlt: "IndiaMART logo",
    type: "internship",
  },
  {
    id: "qriocity",
    organization: "Qriocity",
    role: "Machine Learning Intern",
    duration: "November 2025 – January 2026",
    shortDesc: "Automated ML pipelines that cut analysis time by 30%.",
    fullDesc:
      "Built end-to-end applied ML pipelines in Python — data processing, model experimentation, evaluation, and deployment-ready outputs. Automated experimentation, validation, and reporting workflows, achieving a 30% reduction in analysis turnaround, 20% reduction in repeated processing, and a 40% increase in experimentation throughput.",
    tags: ["Python", "ML Pipelines", "Data Processing", "Model Evaluation", "Automation"],
    logo: "/logos/qriocity-logo.png",
    logoAlt: "Qriocity logo",
    type: "internship",
  },
  {
    id: "gamerstag",
    organization: "GamersTag",
    role: "UI/UX Designer",
    duration: "Summer 2024",
    shortDesc: "Shaped the visual experience for a gaming identity platform.",
    fullDesc:
      "Contributed to the UI/UX design direction of GamersTag, a platform built around gaming identity. Responsible for crafting user-centered interface designs and visual experiences.",
    tags: ["UI Design", "UX Research", "Figma", "Product Design"],
    logo: "/logos/gamerstag-logo.png",
    logoAlt: "GamersTag logo",
    type: "internship",
  },
  {
    id: "ieee",
    organization: "IEEE IIIT Bhopal Student Branch",
    role: "Chairperson",
    duration: "2024 – 2025",
    shortDesc: "Led the IEEE student chapter — technical events, workshops, and member growth.",
    fullDesc:
      "Served as Chairperson of the IEEE IIIT Bhopal Student Branch. Led technical initiatives, organized workshops and events, drove member engagement, and represented the chapter in IEEE activities. Focused on building a strong technical community at the institute.",
    tags: ["Leadership", "Technical Events", "Community Building", "IEEE"],
    logo: "/logos/ieee-logo.png",
    logoAlt: "IEEE logo",
    type: "community",
  },
  {
    id: "ta",
    organization: "IIIT Bhopal",
    role: "Teaching Assistant",
    duration: "2024",
    shortDesc: "Mentored students in Fundamentals of Computer Programming.",
    fullDesc:
      "Served as Teaching Assistant for Fundamentals of Computer Programming at IIIT Bhopal. Helped students understand core programming concepts, conducted doubt sessions, and supported instructors in delivering a rigorous foundational curriculum.",
    tags: ["Teaching", "Programming", "Mentoring", "C++"],
    logo: "/logos/iiitbhopal-logo.png",
    logoAlt: "IIIT Bhopal logo",
    type: "teaching",
  },
];
