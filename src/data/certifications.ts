import { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: 'Cloud',
    category: 'Cloud',
    skillsValidated: ['Cloud Architecture', 'AWS Core Services', 'Security & Compliance', 'Cloud Economics', 'Billing & Pricing']
  },
  {
    id: 'aws-solutions-architect',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    icon: 'Layers',
    category: 'Cloud',
    skillsValidated: ['Resilient Architectures', 'High-Performing Compute & Storage', 'VPC & Networking', 'Cost Optimization', 'IAM & Security']
  },
  {
    id: 'aws-cloud-gen-ai',
    name: 'AWS Cloud Generative AI Certification',
    issuer: 'Amazon Web Services',
    icon: 'Sparkles',
    category: 'AI',
    skillsValidated: ['Generative AI Foundations', 'Amazon Bedrock & Foundation Models', 'Prompt Engineering', 'Responsible AI', 'Cloud AI Workflows']
  },
  {
    id: 'cisco-python-essentials',
    name: 'Cisco Python Essentials – Basic & Advanced',
    issuer: 'Cisco Networking Academy',
    icon: 'Terminal',
    category: 'Programming',
    skillsValidated: ['Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'Modules & Packages', 'File I/O & Exception Handling', 'Functional Paradigms']
  }
];
