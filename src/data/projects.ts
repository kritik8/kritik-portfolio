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
    id: "backend-ai",
    name: "Backend & AI Systems",
    sublabel: "LLM orchestration, inference pipelines, and production-grade Go/Python backends",
  },
  {
    id: "computer-vision",
    name: "Computer Vision & Applied AI",
    sublabel: "Edge inference, multi-task vision, and geospatial intelligence",
  },
  {
    id: "rag-retrieval",
    name: "RAG & Intelligent Retrieval",
    sublabel: "Semantic search, region-grounded multimodal retrieval, and legal Q&A",
  },
  {
    id: "experiments",
    name: "Smaller Experiments",
    sublabel: "Foundational deep learning and NLP explorations",
  },
];

export const projects: Project[] = [
  {
    id: "ai-audit-engine",
    number: "01",
    group: "backend-ai",
    title: "AI Audit Engine — IndiaMART",
    subtitle: "LLM-as-a-Judge · Production AI Pipeline",
    hook: "Evaluating PNS call summaries with structured LLM reasoning and Langfuse-managed prompt orchestration.",
    description:
      "A Go-based AI auditing pipeline for evaluating call summaries using structured LLM-as-a-Judge paradigms — pushing quality accuracy from 89% to 98.5%. Includes intent-based suggestive reply generation and an embedding-clustering model for actionable call categories. Deployed with GPU-backed FastAPI/Uvicorn workers, OpenTelemetry + Kibana observability, and BigQuery analytics across 5,000+ production-like cases.",
    tags: ["Go", "FastAPI", "LLM-as-a-Judge", "Langfuse", "OpenTelemetry", "BigQuery", "GPU Deployment"],
    accent: "#D95F2A",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kritik8/ai-audit-engine-ascend",
        type: "github",
      },
    ],
    highlights: [
      "Structured LLM-as-a-Judge evaluation framework",
      "Langfuse-managed prompt registry integration",
      "Intent-based suggestive reply generation via FastAPI",
      "OpenTelemetry tracing and BigQuery analytics",
    ],
  },
  {
    id: "retina-retail",
    number: "02",
    group: "computer-vision",
    title: "RetinaRetail",
    subtitle: "Edge AI · Retail Intelligence Platform",
    hook: "Multi-task computer vision at the edge — tracking shoppers, monitoring inventory, and managing queues in real time.",
    description:
      "An edge AI platform for retail intelligence that runs multi-task computer vision entirely on-device. Uses ByteTrack for real-time person tracking to derive shopper analytics (dwell time, zone engagement, traffic flow), inventory monitoring (shelf occupancy, stockout detection), and queue intelligence (wait time estimation, staffing signals). The inference stack targets Snapdragon hardware via SNPE/QNN quantisation, paired with a React frontend for live store dashboards.",
    tags: ["ByteTrack", "Computer Vision", "Edge AI", "SNPE/QNN", "Shopper Analytics", "Inventory Intelligence", "React"],
    accent: "#4DA6E8",
    links: [
      {
        label: "Live Demo",
        href: "https://retina-retail.pages.dev/dashboard/overview",
        type: "live",
      },
      {
        label: "GitHub",
        href: "https://github.com/kritik8/retina-retail",
        type: "github",
      },
    ],
    highlights: [
      "ByteTrack multi-object tracking for real-time shopper analytics",
      "Queue intelligence — wait time estimation and staffing signals",
      "Shelf occupancy and stockout detection via vision",
      "SNPE/QNN quantisation for on-device edge inference",
    ],
  },
  {
    id: "parksense",
    number: "03",
    group: "computer-vision",
    title: "ParkSense AI",
    subtitle: "Applied GIS · Traffic Intelligence",
    hook: "Surfacing parking enforcement and congestion insights via spatial indexing and road network analysis.",
    description:
      "An applied GIS traffic command centre analysing city road networks. Leverages H3 spatial index mapping, DBSCAN cluster aggregation, NetworkX road graphs (betweenness centrality), and LightGBM to predict traffic congestion and recommend enforcement strategies.",
    tags: ["GIS", "H3 Spatial Index", "NetworkX", "DBSCAN", "LightGBM", "OpenStreetMap"],
    accent: "#1A8C6F",
    links: [
      {
        label: "GitHub",
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
      "H3 spatial indexing for grid-based density analysis",
      "NetworkX graph analytics for bottleneck identification",
      "Congestion and violation prediction via LightGBM",
      "OpenStreetMap interactive GIS analytics dashboard",
    ],
  },
  {
    id: "bluechain",
    number: "04",
    group: "computer-vision",
    title: "BlueChain",
    subtitle: "Geospatial AI · Carbon MRV Platform",
    hook: "Verifiable satellite biomass estimation and lifecycle dashboards for carbon credit monitoring.",
    description:
      "A carbon credit Monitoring, Reporting, and Verification (MRV) platform. Integrates a Python geospatial engine for satellite vegetation segmentation, NDVI index calculation, and forest growth modelling with a Next.js dashboard tracking carbon sequestration workflows.",
    tags: ["Geospatial", "Satellite Imagery", "NDVI", "FastAPI", "Next.js", "Carbon Credits"],
    accent: "#2E74C0",
    links: [
      {
        label: "ML Engine",
        href: "https://github.com/kritik8/Model_BlueChain",
        type: "github",
      },
      {
        label: "Application",
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
      "NDVI biomass estimation and forest growth projection",
      "Carbon lifecycle reporting dashboard",
      "Multi-repository engine and application architecture",
    ],
  },
  {
    id: "fashion-context-retrieval",
    number: "05",
    group: "rag-retrieval",
    title: "Fashion Context Retrieval",
    subtitle: "Multimodal Search · Region-Grounded CLIP",
    hook: "Resolving CLIP's compositional binding problem by grounding query attributes to detected image regions.",
    description:
      "A region-grounded multimodal search system that addresses CLIP's compositionality shortcomings — correctly distinguishing \"red shirt, blue pants\" from \"blue shirt, red pants\". Combines Grounding DINO Tiny with FashionCLIP regional garment embeddings, ChromaDB vector storage, and K-Means colour grouping.",
    tags: ["Grounding DINO", "FashionCLIP", "ChromaDB", "Vector Search", "Query Parsing"],
    accent: "#8B6FD4",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kritik8/fashion-context-retrieval",
        type: "github",
      },
    ],
    highlights: [
      "CLIP compositionality binding issue addressed via regional grounding",
      "Grounding DINO Tiny object localisation pipelines",
      "ChromaDB local vector space ingestion",
      "Compositional parser separating colour and attribute context",
    ],
  },
  {
    id: "nyayasetu",
    number: "06",
    group: "rag-retrieval",
    title: "NyayaSetu",
    subtitle: "Legal RAG · Knowledge Retrieval",
    hook: "Grounded context vectors powering semantic search for precise legal Q&A.",
    description:
      "A local RAG pipeline designed for context-grounded legal Q&A. Uses vector store similarity search to retrieve precise evidence, mitigating hallucinations by anchoring context inside local structured prompting strategies.",
    tags: ["JavaScript", "RAG", "Vector Search", "Semantic Search", "Prompt Engineering"],
    accent: "#C9882A",
    links: [
      {
        label: "GitHub",
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
  {
    id: "fashion-mnist-cnn",
    number: "07",
    group: "experiments",
    title: "Fashion-MNIST CNN",
    subtitle: "Deep Learning · Benchmark Study",
    hook: "Benchmarking convolutional architectures on fashion item classification.",
    description:
      "A deep learning exploration project evaluating convolutional neural networks (CNNs) for category classification on the Fashion-MNIST dataset. Compares kernel dimensions, pooling strategies, and optimisers.",
    tags: ["PyTorch", "CNNs", "Fashion-MNIST", "Deep Learning"],
    accent: "#E8A83A",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kritik8/fashion-mnist-cnn-project",
        type: "github",
      },
    ],
    highlights: [
      "CNN layer tuning for classification accuracy",
      "Feature map extraction and model analysis",
      "Loss function and optimiser benchmark comparisons",
    ],
  },
];
