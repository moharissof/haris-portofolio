export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  client: string;
  year: string;
  role: string;
  description: string;
  overview: string;
  challenge: string;
  outcome: string;
  tags: string[];
  capabilities: string[];
};

export const projects: Project[] = [
  {
    slug: "real-time-work-platform",
    number: "01",
    title: "Real-time work platform",
    shortTitle: "Work platform",
    client: "Jupitr Agency",
    year: "2025",
    role: "Software Engineer",
    description: "A production project management platform with tasks, chat, notifications, roles, priorities, deadlines, and synchronized team activity.",
    overview: "A collaborative product inspired by modern work-management tools, designed to keep projects, people, and time-sensitive activity in one synchronized workspace.",
    challenge: "The platform needed many connected workflows to feel immediate and consistent: task changes, messages, notifications, permissions, deadlines, and status updates all had to work together.",
    outcome: "Delivered and deployed a production platform with real-time collaboration at its core, then continued supporting testing, architecture, database design, and maintenance.",
    tags: ["Real-time", "System architecture", "Production"],
    capabilities: ["Real-time synchronization", "Task and project tracking", "Chat and notifications", "Roles and permissions", "Production deployment", "Database design"],
  },
  {
    slug: "academic-digital-systems",
    number: "02",
    title: "Academic digital systems",
    shortTitle: "Academic systems",
    client: "STIKOM PGRI Banyuwangi",
    year: "2025",
    role: "Software Engineer",
    description: "Contributed to E-Kinerja, EduMonitor, SIAKAD, and a public-facing company profile for STIKOM PGRI Banyuwangi.",
    overview: "A collection of digital products supporting institutional visibility, employee performance, student monitoring, and academic administration.",
    challenge: "Each system served a different operational audience while still requiring dependable data handling, understandable workflows, and long-term maintainability.",
    outcome: "Contributed engineering work across four institutional products and brought practical database and software knowledge back into classroom sessions as an assistant lecturer.",
    tags: ["Full-stack", "Databases", "Education"],
    capabilities: ["Full-stack development", "Academic workflows", "Performance monitoring", "Student information", "Relational databases", "Product maintenance"],
  },
  {
    slug: "tax-collection-integration",
    number: "03",
    title: "Tax collection integration",
    shortTitle: "Tax integration",
    client: "CV. Blambangan Dev",
    year: "2024 — 2025",
    role: "System Implementor",
    description: "Implemented Sijaka Wangi integrations with hotel, restaurant, and cafe point-of-sale systems, including testing and user support.",
    overview: "A field implementation connecting a regional tax collection application to point-of-sale systems used across hospitality and food-service businesses.",
    challenge: "Transaction information had to move accurately between different operational environments, with installation and configuration that remained reliable for everyday users.",
    outcome: "Implemented, configured, and tested integrations while providing troubleshooting and user support to keep transaction transmission accurate.",
    tags: ["Integration", "Data accuracy", "Support"],
    capabilities: ["POS integration", "System configuration", "Transaction validation", "On-site testing", "Troubleshooting", "User support"],
  },
  {
    slug: "machine-learning-solutions",
    number: "04",
    title: "Machine-learning solutions",
    shortTitle: "ML solutions",
    client: "PawangTech · Haris Dev",
    year: "2022 — 2025",
    role: "Data & Software Engineer",
    description: "Prepared and validated datasets, trained and fine-tuned models, evaluated performance, and integrated models into selected applications.",
    overview: "End-to-end machine-learning delivery spanning raw data preparation, model development, evaluation, software integration, and production maintenance.",
    challenge: "Useful model behavior depends on clean, traceable data and careful integration into a product—not training in isolation.",
    outcome: "Built documented data workflows, evaluated model performance, and connected selected machine-learning capabilities to full-stack applications.",
    tags: ["Data engineering", "ML", "Deployment"],
    capabilities: ["Data cleaning and validation", "Data preprocessing", "Model training", "Fine-tuning", "Performance evaluation", "Application integration"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
