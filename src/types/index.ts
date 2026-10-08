export type Theme = 'dark' | 'light';

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  username?: string;
  badge?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  coursework: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status?: string;
  responsibilities: string[];
  technologies: string[];
  metrics?: string[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  description: string;
  tech: string;
}

export interface ArchitectureFlow {
  from: string;
  to: string;
  label: string;
}

export interface ArchitectureDiagram {
  title: string;
  description: string;
  nodes: ArchitectureNode[];
  flows: ArchitectureFlow[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Full Stack' | 'Frontend' | 'AI / Cloud' | 'Productivity' | 'FinTech' | 'Developer Tools';
  tags: string[];
  technologies: string[];
  keyMetric: {
    label: string;
    value: string;
  };
  secondaryMetrics?: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  architecture?: ArchitectureDiagram;
  caseStudy: {
    problem: string;
    solution: string;
    architectureOverview: string;
    keyFeatures: string[];
    engineeringDecisions: string[];
    performanceImprovements: string[];
    whatILearned: string;
  };
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  icon: string;
  category: 'Cloud' | 'AI' | 'Programming';
  skillsValidated: string[];
}

export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: SkillItem[];
}

export interface DsaTopic {
  id: string;
  name: string;
  description: string;
  keyPatterns: string[];
  difficultyDistribution?: {
    easy: string;
    medium: string;
    hard: string;
  };
}

export interface TerminalCommand {
  command: string;
  description: string;
}
