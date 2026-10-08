import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'worklife-plus',
    title: 'WorkLife Plus',
    subtitle: 'Productivity Management Web App',
    description: 'A full-stack task and productivity management platform featuring JWT authentication, role-based access control, real-time activity tracking, and an interactive analytics dashboard.',
    category: 'Full Stack',
    tags: ['Full Stack', 'Productivity', 'React.js', 'Node.js', 'MongoDB'],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Recharts', 'REST APIs'],
    keyMetric: {
      label: 'Query Performance',
      value: '+40% Faster'
    },
    secondaryMetrics: [
      { label: 'API Endpoints', value: '15+ Endpoints' },
      { label: 'Analytics Modules', value: 'Recharts Visuals' }
    ],
    githubUrl: 'https://github.com/adarsh232805/worklife-balance-app_final',
    liveUrl: 'https://worklife-balance-app-final-rspd.vercel.app/',
    featured: true,
    architecture: {
      title: 'WorkLife Plus Scalable Tier Architecture',
      description: 'End-to-end client-server architecture with aggregation pipelines and token-based state authorization.',
      nodes: [
        {
          id: 'client',
          label: 'React Frontend',
          role: 'Client Layer',
          description: 'Single-page React interface with dynamic state management, interactive Recharts dashboard, and JWT interceptors.',
          tech: 'React.js / Recharts'
        },
        {
          id: 'auth',
          label: 'JWT & RBAC Middleware',
          role: 'Security Boundary',
          description: 'Validates bearer tokens and enforces role-based access control across routes before processing requests.',
          tech: 'JSON Web Tokens'
        },
        {
          id: 'server',
          label: 'Express REST API',
          role: 'Application Layer',
          description: '15+ modular RESTful endpoints handling task lifecycles, user activity streams, and productivity telemetry.',
          tech: 'Node.js / Express.js'
        },
        {
          id: 'db',
          label: 'MongoDB with Indexing',
          role: 'Persistence Layer',
          description: 'Document database with multi-field compound indexes and aggregation pipelines for analytics queries.',
          tech: 'MongoDB'
        }
      ],
      flows: [
        { from: 'client', to: 'auth', label: 'HTTP / Bearer Token' },
        { from: 'auth', to: 'server', label: 'Authorized Request' },
        { from: 'server', to: 'db', label: 'Aggregation Pipelines' },
        { from: 'db', to: 'client', label: 'Optimized Analytics Payload' }
      ]
    },
    caseStudy: {
      problem: 'Individual professionals and remote teams frequently juggle tasks across fragmented tools without unified real-time visibility into productivity trends, deadline adherence, or workload distribution.',
      solution: 'Engineered an end-to-end productivity web application uniting task management, role-based access control, live concurrent activity feeds, and a data-driven analytics suite in a unified interface.',
      architectureOverview: 'Client-driven React frontend communicating via 15+ secure RESTful API endpoints to an Express/Node.js backend, persisting state in MongoDB with compound indexing and aggregation pipelines.',
      keyFeatures: [
        'Full-stack task lifecycle management with priority states and deadline tracking.',
        'JWT authentication paired with role-based access control (RBAC).',
        'Real-time activity tracking designed for multiple concurrent users.',
        '15+ modular RESTful API endpoints following REST best practices.',
        'Interactive analytics dashboard built with Recharts displaying productivity trends, completion velocities, and deadline adherence.'
      ],
      engineeringDecisions: [
        'Selected MongoDB aggregation pipelines over repeated client-side calculations to compute analytics on the database layer.',
        'Implemented centralized JWT token refresh and HTTP interceptors to ensure seamless session continuity.',
        'Designed decoupled service controllers in Express to facilitate testability and maintainable endpoint expansions.'
      ],
      performanceImprovements: [
        'Improved backend query performance by 40% through targeted compound indexing and schema restructuring on high-traffic task collections.',
        'Minimized payload size by projecting only necessary fields during analytics aggregations.'
      ],
      whatILearned: 'Deepened practical knowledge in designing high-performance NoSQL aggregation pipelines, handling concurrent user data flows, and architecting robust role-based authentication flows in production.'
    }
  },
  {
    id: 'ipo-insight',
    title: 'IPO Insight',
    subtitle: 'IPO Analysis Web Application',
    description: 'A dynamic finance data platform tracking IPO price bands, Grey Market Premiums (GMP), subscription status, allotment details, and listing performance with server-side caching.',
    category: 'FinTech',
    tags: ['Full Stack', 'FinTech', 'React.js', 'Node.js', 'MongoDB', 'REST APIs'],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'Server Caching'],
    keyMetric: {
      label: 'API Response Time',
      value: '-35% Latency'
    },
    secondaryMetrics: [
      { label: 'Market Metrics', value: 'GMP & Subscriptions' },
      { label: 'Data Features', value: 'Compare & Filter' }
    ],
    githubUrl: 'https://github.com/adarsh232805/ipo-fullstack-app',
    liveUrl: 'https://ipo-fullstack-app.vercel.app/',
    featured: true,
    architecture: {
      title: 'IPO Insight Real-Time Caching Architecture',
      description: 'High-throughput finance data aggregation with server-side caching to eliminate redundant external API calls.',
      nodes: [
        {
          id: 'client',
          label: 'React Finance UI',
          role: 'Presentation Layer',
          description: 'Real-time IPO explorer with search, multi-parameter sorting, price band comparisons, and allotment checkers.',
          tech: 'React.js'
        },
        {
          id: 'server',
          label: 'Node / Express Controller',
          role: 'API Gateway',
          description: 'Orchestrates search queries, filters, and comparisons while checking server-side cache layers.',
          tech: 'Node.js / Express'
        },
        {
          id: 'cache',
          label: 'Server-Side Caching Layer',
          role: 'In-Memory Cache',
          description: 'Caches frequently requested market data, GMP feeds, and subscription rates to prevent rate-limiting.',
          tech: 'In-Memory / TTL Cache'
        },
        {
          id: 'external',
          label: 'Financial Market APIs',
          role: 'External Data Providers',
          description: 'Third-party market providers supplying real-time IPO pricing, GMP, and institutional subscription status.',
          tech: 'Upstream Market Feeds'
        },
        {
          id: 'db',
          label: 'MongoDB Store',
          role: 'Historic Archive',
          description: 'Stores historical IPO outcomes, company fundamentals, issue sizes, and allotment records.',
          tech: 'MongoDB'
        }
      ],
      flows: [
        { from: 'client', to: 'server', label: 'Query / Compare Request' },
        { from: 'server', to: 'cache', label: 'Check Cached Market Feeds' },
        { from: 'cache', to: 'external', label: 'Cache Miss: Fetch Upstream' },
        { from: 'server', to: 'db', label: 'Persist Historical Records' },
        { from: 'server', to: 'client', label: 'Instant Structured Response' }
      ]
    },
    caseStudy: {
      problem: 'Retail investors face fragmented, delayed IPO information scattered across outdated websites, making it difficult to evaluate price bands, Grey Market Premium (GMP), and subscription trends in time.',
      solution: 'Built an all-in-one dynamic IPO intelligence web app that aggregates live IPO metrics, price bands, GMP, allotment tracking, and side-by-side comparison interfaces with fast response times.',
      architectureOverview: 'React frontend interfacing with Node/Express APIs backed by server-side caching and MongoDB for historical performance archiving.',
      keyFeatures: [
        'Comprehensive live IPO data tracking: Price band, GMP, subscription status, allotment dates, and listing day performance.',
        'Integration with third-party market data feeds.',
        'Server-side caching architecture protecting upstream API quotas.',
        'Multi-parameter filtering by issue size, subscription status, and listing dates.',
        'Side-by-side IPO comparison tool for evaluating relative valuation and investor sentiment.'
      ],
      engineeringDecisions: [
        'Implemented a Time-To-Live (TTL) server-side caching mechanism for volatile metrics like GMP while persisting stable company financials in MongoDB.',
        'Engineered non-blocking upstream API fetchers so transient external API slowdowns never stall the user interface.',
        'Structured the UI with responsive data tables and quick-action cards for frictionless mobile and desktop navigation.'
      ],
      performanceImprovements: [
        'Reduced average API response time by 35% through smart server-side caching and response payload pruning.',
        'Eliminated duplicate external API requests during peak trading hours.'
      ],
      whatILearned: 'Gained practical expertise in designing resilient caching strategies for external third-party API dependencies and handling financial data precision.'
    }
  },
  {
    id: 'compressit',
    title: 'CompressIt',
    subtitle: 'Enterprise-Grade File Optimization Platform',
    description: 'A privacy-first SaaS platform utilizing WebAssembly and Web Workers for local browser file optimization and conversions, with Supabase authentication and cloud storage.',
    category: 'Developer Tools',
    tags: ['Developer Tools', 'AI / Cloud', 'React.js', 'Node.js', 'WebAssembly', 'Tailwind CSS'],
    technologies: ['React.js', 'Node.js', 'Express.js', 'WebAssembly', 'Tailwind CSS', 'Supabase'],
    keyMetric: {
      label: 'Max Compression Ratio',
      value: 'Up to 90%'
    },
    secondaryMetrics: [
      { label: 'Privacy Protocol', value: 'Local-First' },
      { label: 'Worker Architecture', value: 'Multi-Threaded' }
    ],
    githubUrl: 'https://github.com/Ujjawal2040/Compressed-It',
    liveUrl: 'https://compressed-it.vercel.app/',
    featured: true,
    architecture: {
      title: 'CompressIt Local-First Privacy Architecture',
      description: 'Client-side processing pipeline leveraging WebAssembly and Web Workers to process files locally without exposing sensitive user documents.',
      nodes: [
        {
          id: 'ui',
          label: 'Tailwind / React UI',
          role: 'Client Interface',
          description: 'Drag-and-drop file ingestion, compression ratio tuning, format selection, and live visual preview.',
          tech: 'React.js / Tailwind CSS'
        },
        {
          id: 'workers',
          label: 'Web Worker Dispatcher',
          role: 'Parallel Processing',
          description: 'Spawns dedicated Web Workers off the main UI thread to prevent UI freezing during heavy file crunching.',
          tech: 'Browser Web Workers'
        },
        {
          id: 'wasm',
          label: 'WebAssembly (WASM) Engine',
          role: 'High-Performance Engine',
          description: 'Executes native-speed compression algorithms and image/document quantization directly inside the browser.',
          tech: 'WebAssembly'
        },
        {
          id: 'supabase',
          label: 'Supabase Cloud (Optional)',
          role: 'Auth & Persistent Storage',
          description: 'Provides secure user authentication and cloud backup storage for authenticated users opting to store optimized files.',
          tech: 'Supabase Auth & Storage'
        }
      ],
      flows: [
        { from: 'ui', to: 'workers', label: 'File Stream Dispatch' },
        { from: 'workers', to: 'wasm', label: 'Zero-Copy ArrayBuffer' },
        { from: 'wasm', to: 'ui', label: 'Optimized Blob / Instant Download' },
        { from: 'ui', to: 'supabase', label: 'Optional Cloud Sync (Auth Users)' }
      ]
    },
    caseStudy: {
      problem: 'Traditional online compression tools require users to upload sensitive personal or enterprise PDFs and photos to third-party remote servers, risking data leakage, bandwidth limits, and slow processing.',
      solution: 'Engineered a local-first SaaS platform leveraging WebAssembly (WASM) and Web Workers to compress PDFs and images up to 90% in-browser while preserving visual clarity and user privacy.',
      architectureOverview: 'Client-centric WebAssembly pipeline executing in isolated Web Workers, paired with Supabase for authentication and optional cloud storage.',
      keyFeatures: [
        'PDF and Image compression yielding up to 90% reduction while retaining high visual fidelity.',
        'Local-first browser processing ensuring documents never leave the user machine unless saved.',
        'Web Workers handling concurrent bulk processing without blocking the UI rendering loop.',
        'Automatic cross-format conversion across WebP, JPG, and PNG.',
        'Integrated Supabase authentication and encrypted cloud storage for registered users.',
        'Clean, accessible interface designed with Tailwind CSS.'
      ],
      engineeringDecisions: [
        'Adopted a local-first architecture to drastically cut backend compute costs while upholding strict data privacy standards.',
        'Offloaded binary compression calculations to Web Workers to ensure seamless 60fps UI responsiveness during bulk processing.',
        'Integrated Supabase for auth and storage to provide seamless opt-in cloud history for recurring users.'
      ],
      performanceImprovements: [
        'Achieved up to 90% file size reduction across high-resolution image and document benchmarks.',
        'Zero network roundtrip latency for local browser compressions.'
      ],
      whatILearned: 'Mastered browser WebAssembly integrations, Web Worker inter-thread communication, array buffer memory handling, and local-first software architecture.'
    }
  }
];
