export interface ProjectLink {
  label: string;
  href: string;
  type: "github" | "live";
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  hook: string;
  description: string;
  tags: string[];
  accent: string;
  links: ProjectLink[];
  highlights: string[];
  group: string;
}

export const projectGroups = [
  {
    id: "ai-systems",
    name: "AI & Intelligent Systems",
    sublabel: "LLM Orchestration, Prompt Engineering & Search Optimization",
  },
  {
    id: "spatial-vision",
    name: "Applied GIS & Computer Vision",
    sublabel: "Geospatial Analysis, Biomass Prediction & Traffic Intelligence",
  },
  {
    id: "foundations",
    name: "Deep Learning & NLP Foundations",
    sublabel: "Neural Networks, Information Retrieval & Classification",
  },
];

export const projects: Project[] = [
  {
    id: "ai-audit-engine",
    number: "01",
    group: "ai-systems",
    title: "AI Audit Engine Ascend",
    subtitle: "Enterprise LLM-as-a-Judge Pipeline",
    hook: "Evaluating PNS call summaries with structured LLM logic and Langfuse orchestration.",
    description:
      "A Go-based AI Auditor pipeline for evaluating call summaries using structured LLM-as-a-Judge paradigms. Supports intent-based suggestive replies and embeddings clustering for actionable call categories, evaluated against production logs using FastAPI, OpenTelemetry, and BigQuery analytics.",
    tags: ["Go", "FastAPI", "LLM-as-a-Judge", "Langfuse", "OpenTelemetry", "BigQuery"],
    accent: "#D95F2A",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/kritik8/ai-audit-engine-ascend",
        type: "github",
      },
    ],
    highlights: [
      "Structured LLM-as-a-Judge evaluation framework",
      "Langfuse-managed prompt registry integration",
      "Intent suggestive replies generation via FastAPI",
      "OpenTelemetry tracing & BigQuery analytics integration",
    ],
  },
  {
    id: "fashion-context-retrieval",
    number: "02",
    group: "ai-systems",
    title: "Fashion Context Retrieval",
    subtitle: "Region-Grounded Multimodal Search",
    hook: "Fixing CLIP's compositional binding problem by grounding query attributes to detected regions.",
    description:
      "A region-grounded multimodal search system that addresses CLIP's compositionality issues (e.g. distinguishing 'red shirt, blue pants' from 'blue shirt, red pants'). Combines Grounding DINO Tiny and FashionCLIP regional garment embeddings with ChromaDB vector storage, K-Means color grouping, and scene similarity matching.",
    tags: ["Grounding DINO", "FashionCLIP", "ChromaDB", "Garment Embeddings", "Query Parsing"],
    accent: "#8B6FD4",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/kritik8/fashion-context-retrieval",
        type: "github",
      },
    ],
    highlights: [
      "CLIP compositionality binding issue resolved",
      "Grounding DINO Tiny object localization pipelines",
      "ChromaDB local vector space ingestion",
      "Compositional parser separating color & attribute context",
    ],
  },
  {
    id: "parksense",
    number: "03",
    group: "spatial-vision",
    title: "ParkSense AI",
    subtitle: "Applied GIS Traffic Intelligence System",
    hook: "SURFACING PARKING ENFORCEMENT AND CONGESTION INSIGHTS VIA GIS AND ROAD NETWORK MAPS.",
    description:
      "An applied GIS traffic command center analyzing city road networks. Leverages H3 spatial index mapping, DBSCAN cluster aggregation, NetworkX road graphs (betweenness centrality), and LightGBM models to predict traffic congestion and recommend enforcement strategies.",
    tags: ["GIS", "H3 Spatial Index", "NetworkX", "DBSCAN", "LightGBM", "OpenStreetMap"],
    accent: "#1A8C6F",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/kritik8/parksense",
        type: "github",
      },
      {
        label: "Live Demo",
        href: "https://parksense-ten.vercel.app/",
        type: "live",
      },
    ],
    highlights: [
      "H3 spatial indexing for grid-based density",
      "NetworkX graph analytics for bottleneck identification",
      "Congestion violation prediction via LightGBM",
      "OpenStreetMap interactive GIS analytics dashboard",
    ],
  },
  {
    id: "bluechain",
    number: "04",
    group: "spatial-vision",
    title: "BlueChain Platform",
    subtitle: "AI Carbon MRV & Sequestration System",
    hook: "VERIFIABLE SATELLITE BIOMASS ESTIMATION AND WEB DASHBOARDS FOR CARBON CREDIT LIFE-CYCLE.",
    description:
      "A unified carbon credit Monitoring, Reporting, and Verification (MRV) platform. Integrates a Python geospatial engine for satellite vegetation segmentation, NDVI index calculation, and forest growth modeling with a Next.js application dashboard to track carbon sequestration workflows.",
    tags: ["Geospatial", "Satellite Imagery", "NDVI", "FastAPI", "Next.js", "Carbon Credits"],
    accent: "#2E74C0",
    links: [
      {
        label: "ML Engine Repo",
        href: "https://github.com/kritik8/Model_BlueChain",
        type: "github",
      },
      {
        label: "Application Repo",
        href: "https://github.com/kritik8/BlueChain_App",
        type: "github",
      },
      {
        label: "Live Demo",
        href: "https://blue-chain-app-9ct.vercel.app/",
        type: "live",
      },
    ],
    highlights: [
      "Satellite vegetation segmentation models",
      "NDVI biomass estimation & forest growth projection",
      "Dashboard workflows for carbon lifecycle reporting",
      "Multi-repository engine and application orchestration",
    ],
  },
  {
    id: "fashion-mnist-cnn",
    number: "05",
    group: "foundations",
    title: "Fashion-MNIST CNN",
    subtitle: "Foundational Neural Networks",
    hook: "Benchmarking convolutional architectures on fashion item classification.",
    description:
      "A deep learning experimentation project exploring convolutional neural networks (CNNs) for category identification on the Fashion-MNIST dataset. Evaluates kernel dimensions, pooling layers, and optimization paths.",
    tags: ["PyTorch", "CNNs", "Fashion-MNIST", "Model Training", "Deep Learning"],
    accent: "#E8A83A",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/kritik8/fashion-mnist-cnn-project",
        type: "github",
      },
    ],
    highlights: [
      "CNN layer tuning for categorization accuracy",
      "Feature map extraction and model auditing",
      "Loss function & optimizer benchmark studies",
    ],
  },
  {
    id: "nyayasetu",
    number: "06",
    group: "foundations",
    title: "NyayaSetu",
    subtitle: "Legal Knowledge Retrieval Engine",
    hook: "Grounded context vectors feeding semantic search for precise legal Q&A.",
    description:
      "A local RAG pipeline designed for context-grounded legal Q&A. Utilizes vector store similarity searches to retrieve precise evidence, mitigating hallucinations by binding context inside local structured prompting strategies.",
    tags: ["JavaScript", "RAG", "Vector Search", "Semantic Search", "Prompt Engineering"],
    accent: "#C9882A",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/kritik8/NyayaSetu",
        type: "github",
      },
    ],
    highlights: [
      "RAG pipelines for legal context grounding",
      "Sub-second vector query responses",
      "Hallucination mitigation via bounded prompts",
    ],
  },
];
