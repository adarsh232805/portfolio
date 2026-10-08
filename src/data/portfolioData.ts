import { experiences } from './experience';
import { projects } from './projects';
import { skillCategories, allSkillsList } from './skills';
import { certifications } from './certifications';
import { socialLinks } from './socialLinks';
import { dsaTopics } from './dsaTopics';
import { Education } from '../types';

export const personalInfo = {
  name: 'Adarsh Shekhar Singh',
  firstName: 'Adarsh',
  title: 'Full Stack Developer',
  positioning: 'AWS Certified (3×) • 500+ DSA Problems Solved • Full Stack & AI Enthusiast',
  statusPill: 'OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES',
  heroHeading: 'Building products. Solving problems. Learning relentlessly.',
  heroSubheading: "I'm Adarsh Shekhar Singh, a Full Stack Developer focused on building scalable web applications, cloud-powered systems and intelligent products.",
  professionalSummary: 'Motivated Full Stack Developer with hands-on internship experience in designing and developing scalable web applications using React.js, Node.js, Express.js, MongoDB, and SQL. Strong understanding of REST APIs, JWT Authentication, Responsive Web Design, CRUD Operations, API Integration, Git/GitHub, and Agile development practices. AWS Certified (3×) with experience building AI-powered applications and solving 500+ Data Structures & Algorithms problems on LeetCode and GeeksforGeeks. Passionate about writing clean, maintainable code and eager to contribute to high-impact software engineering teams as a Full Stack Developer or Software Development Engineer.',
  email: 'adarshsingh097singh@gmail.com',
  phone: '+91-9336019980',
  location: 'Ghaziabad, Uttar Pradesh, India',
  profilePhoto: '/adarsh-profile.png',
  resumeUrl: '/Adarsh_Shekhar_Singh_Resume.pdf'
};

export const education: Education = {
  degree: 'B.Tech – Computer Science & Engineering',
  institution: 'ABES Engineering College',
  location: 'Ghaziabad, Uttar Pradesh',
  graduationDate: 'July 2027',
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'DBMS',
    'Computer Networks',
    'OOPs',
    'Software Engineering'
  ]
};

export const engineeringStats = [
  {
    id: 'dsa',
    value: '500+',
    label: 'DSA Problems Solved',
    subtext: 'LeetCode, GFG & CodeChef',
    accent: 'from-amber-500/20 to-orange-500/10 border-amber-500/30'
  },
  {
    id: 'aws',
    value: '3×',
    label: 'AWS Certified',
    subtext: 'Practitioner, SAA, Gen AI',
    accent: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30'
  },
  {
    id: 'projects',
    value: '3',
    label: 'Major Featured Projects',
    subtext: 'Full Stack & WebAssembly',
    accent: 'from-purple-500/20 to-violet-500/10 border-purple-500/30'
  },
  {
    id: 'internship',
    value: '1',
    label: 'Internship Experience',
    subtext: 'Frontend Intern @ KYC',
    accent: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30'
  }
];

export const developerPhilosophy = [
  {
    title: 'Clean Code',
    description: 'Writing readable, self-documenting, and modular code with clear boundaries and separation of concerns.'
  },
  {
    title: 'Performance',
    description: 'Benchmarking critical paths, cutting payload sizes, indexing database queries, and reducing response latencies.'
  },
  {
    title: 'Scalability',
    description: 'Architecting systems for graceful growth through caching, asynchronous worker dispatch, and decoupled services.'
  },
  {
    title: 'User Experience',
    description: 'Crafting responsive, accessible, and intuitive interfaces with intentional motion and zero friction.'
  },
  {
    title: 'Continuous Learning',
    description: 'Relentlessly exploring cloud architectures, AI primitives, and core computer science fundamentals.'
  }
];

export const terminalCommandsHelp = [
  { command: 'help', description: 'List all available terminal commands' },
  { command: 'about', description: 'Display professional summary and background' },
  { command: 'skills', description: 'List core technical competencies by category' },
  { command: 'projects', description: 'Show featured projects with metrics & links' },
  { command: 'experience', description: 'Display professional internship details' },
  { command: 'education', description: 'Show degree and relevant coursework' },
  { command: 'certifications', description: 'Display AWS & Cisco certifications' },
  { command: 'dsa', description: 'Show problem-solving stats and platforms' },
  { command: 'contact', description: 'Display contact details (Email, Phone, Location)' },
  { command: 'github', description: 'Open GitHub profile in a new tab' },
  { command: 'leetcode', description: 'Open LeetCode profile in a new tab' },
  { command: 'resume', description: 'Download Adarsh’s resume PDF' },
  { command: 'clear', description: 'Clear terminal screen' }
];

export {
  experiences,
  projects,
  skillCategories,
  allSkillsList,
  certifications,
  socialLinks,
  dsaTopics
};
