export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["Go", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "Goroutines", "gRPC", "REST APIs"],
  },
  {
    label: "AI / LLM",
    skills: ["LangChain", "LangGraph", "Hugging Face", "RAG", "ChromaDB", "Vector Search", "Prompt Engineering"],
  },
  {
    label: "Data & Distributed",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "BigQuery", "Kafka", "Vector DBs"],
  },
  {
    label: "Cloud / DevOps",
    skills: ["Docker", "Nginx", "GPU Deployment", "OpenTelemetry", "Langfuse", "Kibana"],
  },
  {
    label: "Core CS",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
];
