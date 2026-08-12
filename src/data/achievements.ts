export interface Achievement {
  id: string;
  title: string;
  event: string;
  category: string;
  rank: "gold" | "silver" | "bronze" | "special";
  year?: string;
  detail?: string;
}

export const achievements: Achievement[] = [
  {
    id: "hackxios-eth",
    title: "1st Place",
    event: "Hackxios 2025",
    category: "ETHIndia Track",
    rank: "gold",
    year: "2025",
    detail: "Winner of the ETHIndia track at Hackxios 2025.",
  },
  {
    id: "hackxios-innovation",
    title: "3rd Place",
    event: "Hackxios 2025",
    category: "Innovation Track",
    rank: "bronze",
    year: "2025",
    detail: "Podium finish in the Innovation track at Hackxios 2025.",
  },
  {
    id: "synaphack",
    title: "1st Place",
    event: "SynapHack",
    category: "Among 600+ Teams",
    rank: "gold",
    detail: "Won SynapHack, competing against 600+ teams nationwide.",
  },
  {
    id: "codechef",
    title: "4-Star Rated",
    event: "CodeChef",
    category: "Competitive Programming",
    rank: "special",
    detail: "Max rating 1810 on CodeChef.",
  },
  {
    id: "dsa",
    title: "900+ Problems",
    event: "DSA",
    category: "Competitive Programming",
    rank: "special",
    detail: "Solved 900+ data structures and algorithms problems across platforms.",
  },
  {
    id: "icpc",
    title: "2nd Place",
    event: "College ICPC 2025",
    category: "Competitive Programming",
    rank: "silver",
    year: "2025",
    detail: "2nd place in the college-level ICPC 2025 contest.",
  },
  {
    id: "amazon-ml-25",
    title: "Selected",
    event: "Amazon ML Summer School 2025",
    category: "ML Program",
    rank: "special",
    year: "2025",
    detail: "Selected for Amazon ML Summer School 2025.",
  },
  {
    id: "amazon-ml-26",
    title: "Selected",
    event: "Amazon ML Summer School 2026",
    category: "ML Program",
    rank: "special",
    year: "2026",
    detail: "Selected for Amazon ML Summer School 2026 — two consecutive years.",
  },
];

export const stats = [
  { label: "CGPA", value: "9.64", sublabel: "out of 10" },
  { label: "DSA Problems", value: "900+", sublabel: "solved" },
  { label: "CodeChef Rating", value: "1810", sublabel: "4-star" },
  { label: "Hackathons Won", value: "2", sublabel: "1st place" },
];
