import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    skills: [
      { name: 'JavaScript ES6+' },
      { name: 'Python' },
      { name: 'C++' },
      { name: 'C' },
      { name: 'SQL' }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      { name: 'React.js' },
      { name: 'HTML5' },
      { name: 'CSS' },
      { name: 'Tailwind CSS' },
      { name: 'Material UI' },
      { name: 'Recharts' },
      { name: 'Responsive Design' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Cloud',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs' },
      { name: 'WebRTC' },
      { name: 'WebAssembly' },
      { name: 'AWS Cloud' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases',
    skills: [
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'DynamoDB' },
      { name: 'Firebase' }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Ecosystem',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' },
      { name: 'Supabase' },
      { name: 'AI Tools' }
    ]
  }
];

export const allSkillsList: string[] = skillCategories.flatMap(c => c.skills.map(s => s.name));
