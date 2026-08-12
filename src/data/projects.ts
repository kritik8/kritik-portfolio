export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  hook: string;
  description: string;
  tags: string[];
  accent: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "bluechain",
    number: "01",
    title: "BlueChain",
    subtitle: "Blockchain-based Carbon Monitoring Platform",
    hook: "Making carbon data verifiable and tamper-proof at the source.",
    description:
      "A modular FastAPI backend powering a full carbon lifecycle — from satellite imagery-driven vegetation segmentation and carbon estimation, through blockchain-anchored audit trails, to verifiable provenance reports. Built 5+ asynchronous REST APIs handling carbon-data ingestion, estimation, and reporting with ML workflows integrated end-to-end.",
    tags: ["FastAPI", "React", "Blockchain", "ML Workflows", "Geospatial Data", "Async REST APIs"],
    accent: "#2A65F5",
    highlights: [
      "Satellite imagery analysis for vegetation segmentation",
      "Blockchain audit trails for data provenance",
      "5+ async REST APIs for carbon lifecycle",
      "End-to-end ML estimation pipeline",
    ],
  },
  {
    id: "nyay-setu",
    number: "02",
    title: "Nyay-Setu",
    subtitle: "RAG-based Legal Assistance Chatbot",
    hook: "Legal knowledge, grounded in evidence — not hallucination.",
    description:
      "A JavaScript RAG pipeline purpose-built for legal Q&A. Embeddings feed semantic vector search for precise context retrieval, producing evidence-grounded answers with hallucination mitigation through grounded prompts. Evaluated against 50+ legal queries, achieving a 20% retrieval relevance improvement, sub-second search latency, and 30% lower prompt context footprint.",
    tags: ["JavaScript", "RAG", "Embeddings", "Vector Search", "Prompt Engineering"],
    accent: "#D9A23A",
    highlights: [
      "20% retrieval relevance improvement",
      "Sub-second semantic search",
      "50+ legal queries evaluated",
      "30% lower prompt context overhead",
    ],
  },
  {
    id: "parksense",
    number: "03",
    title: "ParkSense AI",
    subtitle: "AI-powered Traffic Command Center",
    hook: "Turning chaotic city traffic data into enforcement intelligence.",
    description:
      "An AI-powered traffic monitoring system combining GIS, graph analytics, and machine learning to detect illegal parking and traffic congestion. Hotspot detection, violation prediction, and enforcement recommendations are surfaced through heatmap and dashboard visualizations.",
    tags: ["Machine Learning", "GIS", "Graph Analytics", "Python", "Data Visualization"],
    accent: "#1BB37D",
    highlights: [
      "Hotspot detection via GIS & graph analytics",
      "ML-driven violation prediction",
      "Enforcement recommendations engine",
      "Real-time heatmap dashboards",
    ],
  },
];
