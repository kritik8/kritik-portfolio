export interface ResearchPaper {
  id: string;
  title: string;
  type: string;
  topics: string[];
  abstract: string;
  pages: number;
  papersReviewed: number;
  status: string;
  contribution: string;
}

export const research: ResearchPaper[] = [
  {
    id: "vehicular-ids",
    title: "Vehicular Intrusion Detection Systems: A Comprehensive Survey on ConvGRU, Federated Learning, and CAN Bus Security",
    type: "Survey Paper",
    topics: ["ConvGRU", "Federated Learning", "Vehicular IDS", "CAN Bus Security", "Deep Learning", "Edge AI"],
    abstract:
      "A 26-page peer-reviewed survey synthesizing 50+ papers on vehicular intrusion detection systems. Covers CAN Bus security, anomaly detection, privacy-preserving distributed learning, scalability challenges, and real-time edge AI deployment for automotive security.",
    pages: 26,
    papersReviewed: 50,
    status: "Co-authored Survey",
    contribution:
      "Co-authored the survey, responsible for synthesizing literature on federated learning approaches, privacy mechanisms, and real-time edge deployment constraints in vehicular IDS systems.",
  },
];
