export interface FaqItem {
  id: string;
  category: 'About' | 'Projects' | 'Skills' | 'DSA' | 'Experience' | 'Certifications' | 'Contact';
  question: string;
  keywords: string[];
  answer: string;
}

export const portfolioFaqs: FaqItem[] = [
  {
    id: 'who-is-adarsh',
    category: 'About',
    question: 'Who is Adarsh Shekhar Singh?',
    keywords: ['who', 'about', 'adarsh', 'intro', 'background', 'profile', 'summary'],
    answer: 'Adarsh Shekhar Singh is a Full Stack Developer, 3× AWS Certified engineer, and active problem solver with 500+ DSA problems solved across LeetCode, GeeksforGeeks, and CodeChef. He is pursuing his B.Tech in Computer Science & Engineering at ABES Engineering College (expected July 2027) and has hands-on internship experience developing responsive web applications using React.js, Node.js, Express.js, MongoDB, and SQL.'
  },
  {
    id: 'primary-skills',
    category: 'Skills',
    question: 'What are Adarsh’s core technical skills?',
    keywords: ['skills', 'tech stack', 'languages', 'frontend', 'backend', 'technologies', 'tools', 'database'],
    answer: 'Adarsh’s technical toolkit spans:\n• Languages: JavaScript (ES6+), Python, C++, C, SQL\n• Frontend: React.js, HTML5, CSS3, Tailwind CSS, Material UI, Recharts, Responsive Design\n• Backend: Node.js, Express.js, RESTful APIs, WebRTC, WebAssembly\n• Databases: MongoDB, PostgreSQL, MySQL, DynamoDB, Firebase\n• Tools & Cloud: AWS (Cloud Practitioner, Solutions Architect, Gen AI), Supabase, Git, GitHub, Postman, AI Tools.'
  },
  {
    id: 'featured-projects',
    category: 'Projects',
    question: 'What major projects has Adarsh built?',
    keywords: ['projects', 'worklife', 'ipo', 'compressit', 'portfolio', 'built', 'showcase'],
    answer: 'Adarsh has built three major production-caliber projects:\n1. WorkLife Plus: Full-stack productivity platform with JWT authentication, RBAC, 15+ REST endpoints, and a Recharts analytics dashboard (+40% query speedup).\n2. IPO Insight: Real-time IPO tracking web application with live GMP, subscription rates, allotment tracking, and server-side caching (-35% latency).\n3. CompressIt: Enterprise file optimization platform using WebAssembly and Web Workers for up to 90% client-side compression with Supabase integration.'
  },
  {
    id: 'worklife-plus',
    category: 'Projects',
    question: 'Tell me more about WorkLife Plus.',
    keywords: ['worklife', 'productivity', 'task', 'aggregation', 'mongodb'],
    answer: 'WorkLife Plus is a full-stack task management platform built with React, Node.js, Express, and MongoDB. It features role-based access control, JWT auth, real-time activity tracking, 15+ RESTful endpoints, and an interactive analytics dashboard. Adarsh improved backend query performance by 40% through indexing and schema restructuring.'
  },
  {
    id: 'ipo-insight',
    category: 'Projects',
    question: 'What is IPO Insight?',
    keywords: ['ipo', 'insight', 'finance', 'fintech', 'caching', 'gmp'],
    answer: 'IPO Insight is an IPO analysis web application built with React, Node.js, Express, and MongoDB. It tracks price bands, Grey Market Premium (GMP), subscription metrics, and allotment results. By architecting a server-side caching layer around third-party market APIs, Adarsh cut average response times by 35%.'
  },
  {
    id: 'compressit',
    category: 'Projects',
    question: 'What makes CompressIt unique?',
    keywords: ['compressit', 'wasm', 'webassembly', 'workers', 'file', 'compression'],
    answer: 'CompressIt is an enterprise-grade file optimization platform utilizing client-side WebAssembly (WASM) and Web Workers. It reduces PDF and image sizes by up to 90% in-browser without sending files to third-party servers, guaranteeing privacy. It also integrates Supabase for user auth and cloud backups.'
  },
  {
    id: 'certifications',
    category: 'Certifications',
    question: 'What certifications does Adarsh hold?',
    keywords: ['certifications', 'aws', 'cisco', 'amazon', 'cloud', 'certified'],
    answer: 'Adarsh is 3× AWS Certified and holds:\n1. AWS Certified Cloud Practitioner (Amazon Web Services)\n2. AWS Certified Solutions Architect – Associate (Amazon Web Services)\n3. AWS Cloud Generative AI Certification (Amazon Web Services)\n4. Cisco Python Essentials – Basic & Advanced (Cisco Networking Academy).'
  },
  {
    id: 'dsa-profile',
    category: 'DSA',
    question: 'How strong is Adarsh’s DSA and problem solving?',
    keywords: ['dsa', 'leetcode', 'gfg', 'geeksforgeeks', 'codechef', 'problem solving', 'algorithms'],
    answer: 'Adarsh has solved 500+ Data Structures & Algorithms problems across LeetCode, GeeksforGeeks, and CodeChef. His focus is on algorithmic patterns such as Two Pointers, Monotonic Stacks, Sliding Window, Graph Traversals (BFS/DFS, Dijkstra), and Dynamic Programming state optimizations.'
  },
  {
    id: 'experience-internship',
    category: 'Experience',
    question: 'What professional internship experience does Adarsh have?',
    keywords: ['experience', 'internship', 'intern', 'know your college', 'work', 'job'],
    answer: 'Adarsh served as a Frontend Intern at Know Your College (Remote) from December 2024 to March 2025. He designed and built key student discovery and college listing interfaces in React.js, collaborated closely with the founding team, ensured smooth responsive UX, and maintained clean Git commit and feature branching practices.'
  },
  {
    id: 'education-college',
    category: 'About',
    question: 'Where is Adarsh studying?',
    keywords: ['education', 'college', 'degree', 'btech', 'abes', 'graduation', 'university'],
    answer: 'Adarsh is pursuing his B.Tech in Computer Science & Engineering at ABES Engineering College, Ghaziabad, Uttar Pradesh (expected graduation: July 2027). Relevant coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, OOPs, and Software Engineering.'
  },
  {
    id: 'contact-recruiter',
    category: 'Contact',
    question: 'How can I contact or hire Adarsh?',
    keywords: ['contact', 'hire', 'email', 'phone', 'reach', 'linkedin', 'location'],
    answer: 'You can contact Adarsh directly via:\n• Email: adarshsingh097singh@gmail.com\n• Phone: +91-9336019980\n• LinkedIn: linkedin.com/in/adarsh-shekhar-singh/\n• GitHub: github.com/adarsh232805\n• Location: Ghaziabad, Uttar Pradesh, India.\nHe is actively open to Software Engineering and Full Stack Developer roles!'
  }
];

export const suggestedQuestions = [
  'What are Adarsh’s top projects?',
  'What AWS certifications does he hold?',
  'Tell me about his internship experience',
  'How strong are his DSA skills?',
  'What is his full tech stack?',
  'How can I contact him?'
];
