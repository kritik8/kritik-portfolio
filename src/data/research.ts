export interface ResearchWork {
  id: string;
  title: string;
  type: "implementation" | "survey";
  authors?: string[];
  institution?: string;
  topics: string[];
  abstract: string;
  status: string;
}

// Survey / Review Paper — appears FIRST on the research page
export const surveyPaper: ResearchWork = {
  id: "vehicular-survey",
  title: "Federated and Deep Learning Approaches for Intrusion Detection in Vehicular CAN Networks",
  type: "survey",
  topics: ["CAN Bus Security", "Federated Learning", "ConvGRU", "Anomaly Detection", "Privacy", "Scalability", "Edge AI", "Vehicular IDS"],
  abstract:
    "A 26-page review examining ConvGRU, Federated Learning, CAN-bus security, anomaly detection, privacy, scalability, and edge-AI deployment across 50+ research works.",
  status: "Journal of Transportation Security — Published; First Revision",
};

export const surveyMeta = {
  pages: 26,
  papersReviewed: 50,
  contribution:
    "Co-authored the survey. Responsible for synthesising literature on federated learning approaches, privacy mechanisms, and real-time edge deployment constraints in vehicular IDS systems.",
};

// Implementation / Architecture Paper — appears SECOND
export const convgruPaper: ResearchWork = {
  id: "convgru-ids",
  title: "ConvGRU-IDS: A Lightweight Hybrid Deep Learning Framework for Real-Time Intrusion Detection in Vehicular CAN Networks",
  type: "implementation",
  authors: ["Kritik Jain", "Durwesh Tirpude", "Rekha Kaushik"],
  institution: "Department of Information Technology, Indian Institute of Information Technology, Bhopal, India",
  topics: ["ConvGRU", "CAN Bus Security", "Intrusion Detection", "Deep Learning", "Vehicular Networks", "Edge AI"],
  abstract:
    "A lightweight hybrid deep learning framework combining Conv1D feature extraction with GRU temporal modelling for real-time intrusion detection in vehicular CAN bus networks. Evaluated on the Car-Hacking Dataset using a balanced 500,000-sample subset.",
  status: "Research Study",
};

export const convgruMetrics = {
  dataset: "Car-Hacking Dataset",
  totalSamples: 500000,
  normalSamples: 250000,
  attackSamples: 250000,
  trainSamples: 400000,
  testSamples: 100000,
  results: {
    accuracy: 99.95,
    precision: 99.976,
    recall: 99.924,
    f1: 99.95,
    rocAuc: 1.0,
    fpr: 0.024,
    fnr: 0.076,
  },
  baselines: [
    { name: "Logistic Regression", accuracy: 95.39, f1: 95.30 },
    { name: "Random Forest", accuracy: 94.45, f1: 94.20 },
    { name: "Simple CNN", accuracy: 75.01, f1: 79.76 },
    { name: "ConvGRU-IDS", accuracy: 99.95, f1: 99.95, highlight: true },
  ],
  pipeline: [
    { id: "input",     label: "CAN Traffic",        sublabel: "Raw CAN frames",                    icon: "⬡" },
    { id: "preprocess",label: "Preprocessing",       sublabel: "Feature extraction & normalisation", icon: "⟳" },
    { id: "conv1",     label: "Conv1D",              sublabel: "Local pattern detection",            icon: "▦" },
    { id: "bn",        label: "BatchNorm + MaxPool", sublabel: "Normalisation & downsampling",       icon: "⊞" },
    { id: "conv2",     label: "Conv1D",              sublabel: "Higher-level features",              icon: "▦" },
    { id: "gru",       label: "GRU",                 sublabel: "Temporal sequence modelling",        icon: "↺" },
    { id: "dense",     label: "Dense → Sigmoid",     sublabel: "Binary classification",             icon: "◉" },
    { id: "output",    label: "Decision",            sublabel: "Normal / Attack",                    icon: "⊛" },
  ],
};
