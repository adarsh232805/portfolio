# Adarsh Shekhar Singh — Full Stack Developer Portfolio

> A distinctive, production-ready developer portfolio web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed with the clean, high-performance aesthetics of **Vercel**, **Linear**, and **Apple**.

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646cff.svg)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8.svg)](https://tailwindcss.com/)
[![AWS Certified](https://img.shields.io/badge/AWS%20Certified-3%C3%97-ff9900.svg)](https://aws.amazon.com/)
[![LeetCode](https://img.shields.io/badge/DSA-500%2B%20Solved-ffa116.svg)](https://leetcode.com/u/ADARSH2328/)

---

## ⚡ Core Philosophy & Positioning

The portfolio showcases an engineer who:
- **Builds real full-stack products** with scalable architectures, query optimizations, and token-based authentication.
- **Understands computer science fundamentals**, operating systems, databases, and computer networks.
- **Demonstrates algorithmic rigor** with **500+ DSA problems solved** on LeetCode and GeeksforGeeks.
- **Holds 3× AWS Certifications**: Cloud Practitioner, Solutions Architect Associate, and Cloud Generative AI.

---

## 🚀 Key Interactive Features

1. **Immersive Hero & Canonical Profile Presentation**
   - High-fidelity presentation of Adarsh's authentic professional photograph.
   - 3D parallax hover effect with floating developer system badge nodes (*Frontend, Backend, Database, Cloud, AI, DSA*).
   - Dynamic status pill with pulsing availability beacon.

2. **Interactive System Architecture Visualizer**
   - End-to-end interactive component pipelines for major full-stack projects:
     - **WorkLife Plus**: React UI ➔ JWT Middleware ➔ Express API ➔ MongoDB Aggregations.
     - **IPO Insight**: React UI ➔ Express Controller ➔ In-Memory Caching ➔ Upstream Market APIs ➔ MongoDB.
   - Interactive node inspection with hover tooltips and dynamic data flow indicators.

3. **Simulated File Optimization Engine (CompressIt)**
   - Interactive local-first workflow: `Upload` ➔ `Process` ➔ `Optimize` ➔ `Download`.
   - Real in-browser client processing with genuine compressed blob generation.

4. **Dynamic Technology Cross-Filtering**
   - Clicking a skill in the technology ecosystem highlights all projects powered by that technology.
   - Data-driven architecture connecting `skills.ts` and `projects.ts`.

5. **Engineering Mindset & DSA Deep-Dive**
   - Matrix of 11 algorithmic patterns (*Two Pointers, Monotonic Stacks, Sliding Window, Graph Traversals, DP*).
   - Direct verified profile links to LeetCode, GeeksforGeeks, and GitHub without fabricated metrics.

6. **"Ask About Adarsh" AI Portfolio Assistant**
   - Ground-truth AI conversational assistant answering recruiter questions.
   - High-performance deterministic knowledge engine with semantic search matching.
   - Seamless extensibility via `VITE_AI_CHAT_ENDPOINT`.

7. **Recruiter Command Palette (`Ctrl + K` / `Cmd + K`)**
   - Spotlight-style search to jump between sections, download the resume, open external profiles, or toggle themes.

8. **Developer Terminal Easter Egg (Press `` ` `` or terminal button)**
   - Terminal shell supporting `help`, `about`, `skills`, `projects`, `experience`, `certifications`, `dsa`, `contact`, `github`, and `leetcode`.

9. **Resume Viewer & Direct Download**
   - Integrated PDF modal viewer for `Adarsh_Shekhar_Singh_Resume.pdf` with confetti download action.

10. **Theme Switcher**
    - High-contrast Dark mode (`#070707`) and crisp Light mode with localStorage persistence.

---

## 🛠️ Project Architecture

```
myweb/
├── public/
│   ├── adarsh-profile.png           # Canonical professional portrait
│   ├── Adarsh_Shekhar_Singh_Resume.pdf # Real resume PDF
│   └── favicon.svg
├── src/
│   ├── assets/                      # Static branding assets
│   ├── components/                  # Reusable UI modules
│   │   ├── Navbar.tsx               # Sticky navigation with progress bar
│   │   ├── Footer.tsx               # Verified links & dynamic copyright
│   │   ├── SocialIcons.tsx          # Pixel-perfect SVG brand vectors
│   │   ├── CommandPalette.tsx       # Ctrl+K modal palette
│   │   ├── TerminalEasterEgg.tsx    # Interactive CLI terminal
│   │   ├── AiAssistantModal.tsx     # "Ask About Adarsh" AI chat panel
│   │   ├── ResumeViewerModal.tsx    # PDF preview & download dialog
│   │   ├── ProjectCaseStudyModal.tsx# Expandable case study drawer
│   │   ├── InteractiveArchitecture.tsx # System node flow visualizer
│   │   └── SimulatedFileCompressor.tsx # WASM compression demo
│   ├── sections/                    # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── EngineeringDsaSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── GithubSection.tsx
│   │   └── ContactSection.tsx
│   ├── data/                        # Centralized source of truth
│   │   ├── portfolioData.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── certifications.ts
│   │   ├── socialLinks.ts
│   │   ├── dsaTopics.ts
│   │   └── faqs.ts
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useScrollProgress.ts
│   ├── utils/
│   │   └── githubApi.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🏃 Local Setup & Development

### 1. Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### 2. Installation
```bash
git clone https://github.com/adarsh232805/portfolio.git
cd portfolio
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete production portfolio"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. (Optional) Add environment variables from `.env.example`:
   - `VITE_CONTACT_ENDPOINT`
   - `VITE_AI_CHAT_ENDPOINT`
7. Click **Deploy**.

### Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com/) and click **"Add new site"** ➔ **"Import an existing project"**.
2. Connect your GitHub repository.
3. Configure build settings:
   - **Base directory**: Leave blank
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.

---

## 🔒 Environment Variables

| Variable | Type | Description | Default Fallback |
| :--- | :--- | :--- | :--- |
| `VITE_CONTACT_ENDPOINT` | Optional | Backend URL for contact messages | Graceful pre-filled `mailto` integration |
| `VITE_AI_CHAT_ENDPOINT` | Optional | Custom LLM backend endpoint for AI assistant | 100% deterministic local FAQ knowledge base |

---

## 📄 License & Credits

Built with React, TypeScript, Tailwind CSS, and curiosity by **Adarsh Shekhar Singh** (2026).
