"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

interface FeaturedProject {
  id: string;
  tag: string;
  status: string;
  statusClass: string;
  title: string;
  overview: string;
  problem: string;
  capabilities: string[];
  techStack: string[];
  role: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "01",
    tag: "Artificial Intelligence & Media Automation",
    status: "Architecture & Planning",
    statusClass: "planning",
    title: "AI Newsroom OS",
    overview:
      "A proposed intelligent publishing platform designed to help digital news organizations coordinate research, content creation, editorial review, multimedia production, distribution, and analytics through a unified system.",
    problem:
      "Digital newsrooms face severe bottlenecks in news monitoring, research verification, multi-platform publishing, and multimedia script preparation across Hindi and English workflows.",
    capabilities: [
      "AI-assisted news research, writing, and editorial synthesis",
      "Fact-checking and mandatory human editorial review gates",
      "Automated SEO preparation, scripts, and thumbnail suggestions",
      "Multi-channel distribution: WhatsApp Business, Meta, YouTube, and Web",
      "Bilingual support (Hindi & English) with comprehensive audit logs",
    ],
    techStack: ["React", "Vite", "Node.js", "TypeScript", "MySQL / PostgreSQL", "AI Model APIs", "Job Queues"],
    role: "System Architecture, Workflow Design & AI Agent Orchestration",
  },
  {
    id: "02",
    tag: "Financial Technology & ERP",
    status: "In Development",
    statusClass: "development",
    title: "Microfinance & Loan Management ERP",
    overview:
      "A microfinance and multi-loan processing application designed around the operational requirements and regulatory nuances of Indian financial service businesses.",
    problem:
      "Lending operations suffer from manual EMI calculations, fragmented customer KYC files, delayed collection tracking, and lack of audit-proof accounting ledgers.",
    capabilities: [
      "Comprehensive KYC records and borrower verification",
      "Multi-loan types: Personal loans, group lending, and loans against assets",
      "Disbursement tracking, dynamic EMI schedules, and penalty management",
      "Field collection records, automated receipting, and transaction ledgers",
      "Role-based access control (RBAC), audit trails, and financial dashboards",
    ],
    techStack: ["PHP", "Node.js", "MySQL", "Relational Schemas", "Financial Math Engine", "RBAC"],
    role: "Database Architecture, Backend Logic & Loan Workflow Engineering",
  },
  {
    id: "03",
    tag: "B2B E-Commerce & Inventory",
    status: "Workflow Design & Requirements",
    statusClass: "workflow",
    title: "Torvo Multibrand Power Tools Platform",
    overview:
      "A specialized B2B commerce platform for a multibrand power tools and accessories distributor, designed around a controlled ordering and approval process between registered buyers and the seller.",
    problem:
      "Industrial tool distribution requires custom dealer approvals, real-time stock verification before order commitment, order adjustments, and GST-compliant invoicing (CGST/SGST).",
    capabilities: [
      "Controlled buyer registration with mandatory seller approval gate",
      "Order revision and stock check workflow before final invoice creation",
      "Multibrand catalog across power tools, hand tools, parts, and accessories",
      "GST-oriented billing and printable transaction invoices",
      "Dual interface: Dedicated Seller Admin Dashboard & Verified Buyer Portal",
    ],
    techStack: ["React", "REST APIs", "MySQL", "B2B Order Workflows", "GST Billing Engine"],
    role: "Product Requirements, B2B Process Flow & Data Modeling",
  },
  {
    id: "04",
    tag: "Fashion E-Commerce (B2B & B2C)",
    status: "Technical Architecture Specified",
    statusClass: "architecture",
    title: "Pragati Kurtis E-Commerce Platform",
    overview:
      "A full-stack e-commerce architecture engineered for an apparel business catering simultaneously to individual retail shoppers and wholesale dealer networks.",
    problem:
      "Retail customers need an instant checkout experience, while wholesale dealers require account verification, tiered discount pricing, and bulk RFQ (Request for Quotation) workflows.",
    capabilities: [
      "Multi-role user system: Retail Customer, Approved Dealer, and Administrator",
      "Wholesale dealer portal with tiered volume pricing and RFQ submissions",
      "Comprehensive category, size, fabric, and inventory management",
      "GST-compliant order processing and automated invoices",
      "High-performance responsive catalog with smooth animated transitions",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "PHP REST APIs", "MySQL PDO", "Framer Motion"],
    role: "Full-Stack Architecture, API Contracts & Multi-Role Design",
  },
  {
    id: "05",
    tag: "Inventory & Spare Parts Classification",
    status: "Prototype & Model Design",
    statusClass: "prototype",
    title: "Power Tools Spare Parts & Accessories Inventory",
    overview:
      "An inventory application concept specifically designed for power-tool spare parts and accessories, solving the complex compatibility mapping between replacement components and multiple machine models.",
    problem:
      "Spare parts inventory becomes chaotic because a single armature, gear, or carbon brush may be compatible with 15 different tool models across multiple tool brands.",
    capabilities: [
      "Relational model linking individual spare parts to multiple tool models",
      "Multi-tier hierarchical classification: Brand → Tool Model → Component",
      "Stock level alerts, bin location tracking, and reorder status",
      "High-speed fuzzy search for part numbers, specifications, and model numbers",
      "Administrative dashboard for bulk stock updates and catalog curation",
    ],
    techStack: ["MySQL Relational Design", "Classification Engine", "PHP / Node.js", "Dashboard UI"],
    role: "Data Schema Design, Compatibility Matrix & Prototype UX",
  },
  {
    id: "06",
    tag: "NGO & Community Education",
    status: "Web Structure & Public Concept",
    statusClass: "concept",
    title: "Rao Net Ram Education Society",
    overview:
      "A dedicated institutional web platform designed for Rao Net Ram Education Society, an organization championing education and community empowerment initiatives across Haryana.",
    problem:
      "Community organizations often struggle with fragmented outreach, lacking a credible, trusted central portal to publish announcements, activities, leadership messages, and society records.",
    capabilities: [
      "Institutional showcase with tagline: 'Empowering Education, Inspiring Change'",
      "Leadership messages from the President and Secretary",
      "Educational initiative archives, community photo galleries, and news",
      "Public announcement system and community contact channels",
      "Mobile-optimized, accessible, and high-performance design",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design System", "Content Architecture"],
    role: "Website Planning, Digital Strategy & Content Structure",
  },
];

const secondaryExperiments = [
  {
    title: "Aamya Holidays Travel Platform",
    category: "Travel Technology & Booking",
    status: "Concept & Workflow",
    desc: "Platform concept for travel packages, hotel booking workflows, wedding travel logistics, and customer inquiry management.",
  },
  {
    title: "NarnaulOnline Local Platform",
    category: "Digital Services & Local Ecosystem",
    status: "Regional Digital Platform",
    desc: "Exploration of local business digitization, web presence, online discovery, and technology services in Haryana.",
  },
  {
    title: "Radio Aravali FM 90.4 MHz",
    category: "Broadcasting & Media Streaming",
    status: "Station Roadmap",
    desc: "Application roadmap for community radio station: live audio streaming, program schedule, show archives, and presenter profiles.",
  },
  {
    title: "Yadav Dharamshala Web Application",
    category: "Community Facility Management",
    status: "Project Proposal",
    desc: "Digital platform initiative for facility room bookings, donor records, administrative accounting, and community services.",
  },
  {
    title: "Hotel Management & Billing System",
    category: "Hospitality Tech & Restaurant POS",
    status: "Multi-Workflow Concept",
    desc: "Integrated solution combining room reservations, guest check-ins, restaurant order billing, and daily revenue reporting.",
  },
  {
    title: "Genius Fingerprint Intelligence Test",
    category: "Biometric Data & DMIT Engine",
    status: "Algorithm & Report Prototype",
    desc: "Data-driven system processing fingerprint ridge counts (L1–L5, R1–R5), IQ/EQ/AQ/CQ calculations, and multi-format PDF/Excel reporting.",
  },
  {
    title: "AI Prompt-Writing Agent",
    category: "AI Agent Utilities",
    status: "Automation Experiment",
    desc: "Custom AI assistant engineered to generate structured software specifications, developer prompts, and system roadmaps.",
  },
  {
    title: "WhatsApp Content Distribution",
    category: "Messaging Automation",
    status: "Workflow Design",
    desc: "Automated messaging pipelines connecting business form submissions directly to WhatsApp notification channels.",
  },
  {
    title: "Vishwakarma / Jangid Portal",
    category: "Community Directory",
    status: "Concept Exploration",
    desc: "Community communication, business directory, and matrimonial networking platform concept for the Jangid community.",
  },
];

const professionalStrengths = [
  {
    num: "01",
    title: "Business-First Problem Solving",
    desc: "Translating real-world business requirements into structured application workflows rather than building around tech buzzwords.",
  },
  {
    num: "02",
    title: "End-to-End Product Thinking",
    desc: "Considering frontend interfaces, backend logic, database design, user roles, deployment, and administration together as one cohesive product.",
  },
  {
    num: "03",
    title: "Automation-Oriented Design",
    desc: "Identifying repetitive manual operational tasks that can be streamlined through integrations, AI agents, and scheduled background jobs.",
  },
  {
    num: "04",
    title: "Multi-Industry Adaptability",
    desc: "Demonstrated agility in architecting solutions across fintech, industrial commerce, digital publishing, education, and community portals.",
  },
  {
    num: "05",
    title: "Workflow & System Planning",
    desc: "Deconstructing complex enterprise processes into modular roles, data flows, validation gates, and phased implementation roadmaps.",
  },
  {
    num: "06",
    title: "Practical Implementation Focus",
    desc: "Relentless attention to real engineering realities: database integrity, foreign keys, build optimization, environment variables, and hosting reliability.",
  },
];

interface ImplementedTech {
  name: string;
  role: string;
}

interface EvaluatedTech {
  name: string;
  note: string;
}

interface TechnicalCompetency {
  id: string;
  categoryKey: "frontend" | "backend" | "database" | "ai" | "devops";
  domain: string;
  title: string;
  tagline: string;
  icon: string;
  badge: string;
  summary: string;
  implementedStack: ImplementedTech[];
  evaluatedStack: EvaluatedTech[];
  keyCapabilities: string[];
}

interface ArchitecturalStack {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  provenIn: string;
  status: string;
  layers: {
    label: string;
    tech: string;
    detail: string;
  }[];
  guarantees: string[];
}

const technicalCompetencies: TechnicalCompetency[] = [
  {
    id: "frontend",
    categoryKey: "frontend",
    domain: "Client Architecture & UI",
    title: "Frontend Engineering & Modern UI",
    tagline: "Component-driven, responsive user interfaces & high-performance web applications.",
    icon: "💻",
    badge: "Client Layer",
    summary:
      "Engineering responsive, accessible, and fast web frontends using modern React architectures, fluid typography tokens, and subtle interactive animations.",
    implementedStack: [
      { name: "React.js 19", role: "Core UI Library" },
      { name: "Next.js (Turbopack)", role: "App Router & SSR" },
      { name: "JavaScript (ES6+)", role: "Modern Syntax & Async" },
      { name: "Tailwind CSS", role: "Utility Styling" },
      { name: "HTML5 & CSS3", role: "Semantic Web Standards" },
      { name: "Vite", role: "Rapid Module Bundler" },
      { name: "Framer Motion", role: "Micro-Interactions" },
      { name: "Lucide React", role: "Vector Icon System" },
    ],
    evaluatedStack: [
      { name: "React Router v7", note: "Evaluated for standalone client-side SPA routing" },
      { name: "Zustand State Store", note: "Evaluated for lightweight cross-component state" },
    ],
    keyCapabilities: [
      "Responsive layouts engineered with CSS Grid and Flexbox adhering strictly to DESIGN.md design tokens.",
      "Interactive dashboards with accessible forms, real-time validation, and fluid micro-transitions.",
      "Fast First Contentful Paint (FCP) and optimized asset loading with Next.js Turbopack.",
    ],
  },
  {
    id: "backend",
    categoryKey: "backend",
    domain: "Server Systems & Business Logic",
    title: "Backend Engineering & Secure APIs",
    tagline: "Robust server logic, deterministic math engines, and role-based access control.",
    icon: "⚙️",
    badge: "Server & Logic",
    summary:
      "Architecting deterministic server-side engines, loan calculation algorithms, role-based authorization gates, and clean RESTful API contracts.",
    implementedStack: [
      { name: "PHP 8.x REST APIs", role: "Production Backend" },
      { name: "Node.js (LTS)", role: "Runtime & Async Services" },
      { name: "Express.js", role: "REST Microservices" },
      { name: "Role-Based Access Control", role: "RBAC Permissions" },
      { name: "RESTful JSON Contracts", role: "Client-Server Protocol" },
      { name: "Session & Token Security", role: "User Authentication" },
    ],
    evaluatedStack: [
      { name: "NestJS (TypeScript)", note: "Evaluated for enterprise dependency injection & modular microservices" },
      { name: "Laravel 11", note: "Evaluated for rapid MVC scaffolding, integrated queues & Eloquent ORM" },
    ],
    keyCapabilities: [
      "Multi-tier authorization models (Super Admin, Branch Manager, Loan Officer, Auditor) with permission boundaries.",
      "Deterministic financial algorithms for amortization, interest accrual, and zero-drift EMI calculations.",
      "Secure request sanitization, parameterized query execution, and structured HTTP error responses.",
    ],
  },
  {
    id: "database",
    categoryKey: "database",
    domain: "Persistence & Integrity",
    title: "Database Architecture & Schema Design",
    tagline: "Normalized schemas, strict foreign key constraints, and audit-proof business ledgers.",
    icon: "🗄️",
    badge: "Data Integrity",
    summary:
      "Structuring relational databases that safeguard business records, enforce referential integrity, eliminate data anomalies, and support operational analytics.",
    implementedStack: [
      { name: "MySQL (InnoDB)", role: "ACID Relational Store" },
      { name: "Foreign Key Constraints", role: "Referential Integrity" },
      { name: "Normalized Schema Design", role: "3NF Entity Relations" },
      { name: "Transaction Ledgers", role: "Double-Entry Record Keeping" },
      { name: "Composite Indexing", role: "Query Performance Tuning" },
      { name: "SQL Migrations & DDL", role: "Versioned Schema Evolution" },
    ],
    evaluatedStack: [
      { name: "PostgreSQL", note: "Evaluated for advanced JSONB indexing, window functions & vector search" },
      { name: "Redis Cache", note: "Evaluated for in-memory session tokens & API rate-limiting" },
    ],
    keyCapabilities: [
      "Relational modeling with foreign keys guaranteeing zero orphaned transactions or ledger gaps.",
      "Immutable audit log tables capturing all borrower adjustments, billing events, and credential updates.",
      "Reliable database backup routines, migration scripts, and import error troubleshooting.",
    ],
  },
  {
    id: "ai",
    categoryKey: "ai",
    domain: "Intelligent Workflows",
    title: "AI Agents & Workflow Automation",
    tagline: "Multi-agent orchestration, automated synthesis, and human-in-the-loop review.",
    icon: "🤖",
    badge: "Autonomous Workflows",
    summary:
      "Designing specialized multi-agent workflows that leverage state-of-the-art LLM provider APIs for research, bilingual drafting, and media syndication with strict human review.",
    implementedStack: [
      { name: "AI-Agent Team Architecture", role: "Specialized Role Agents" },
      { name: "LLM Provider APIs (OpenAI/DeepSeek)", role: "Model Synthesis" },
      { name: "Human-in-the-Loop Gating", role: "Editorial Verification Gate" },
      { name: "Bilingual Pipeline (Hindi/English)", role: "Cross-Lingual Processing" },
      { name: "Multi-Channel Distribution", role: "Web, Social & Messaging" },
      { name: "Scheduled Automation & Cron", role: "Background Job Queues" },
    ],
    evaluatedStack: [
      { name: "LangChain / CrewAI", note: "Evaluated for complex multi-agent state graph transitions" },
      { name: "Local LLM Inference (Ollama)", note: "Evaluated for offline privacy-first data summarization" },
    ],
    keyCapabilities: [
      "Modular editorial pipelines: Topic Monitoring ➔ Source Gathering ➔ Draft Generation ➔ Editorial Approval.",
      "Mandatory human sign-off gates ensuring zero unverified, unvetted, or hallucinated content goes live.",
      "Automated payload preparation and multi-channel syndication across WhatsApp Business, Meta, YouTube, and Web.",
    ],
  },
  {
    id: "devops",
    categoryKey: "devops",
    domain: "Infrastructure & Operations",
    title: "DevOps, Deployment & Cloud",
    tagline: "Optimized build pipelines, secrets security, and production host management.",
    icon: "🚀",
    badge: "Release & Hosting",
    summary:
      "Managing the lifecycle from source code to production deployment, isolating environment credentials, configuring database sockets, and ensuring high service availability.",
    implementedStack: [
      { name: "Git & GitHub Workflows", role: "Version Control & Branching" },
      { name: "Node.js Build Pipelines", role: "Bundle Optimization & Tree-Shaking" },
      { name: "Hostinger Cloud / VPS", role: "Production Web & API Hosting" },
      { name: "Environment Security (.env)", role: "Secrets & Credential Isolation" },
      { name: "Database Sockets & Connections", role: "Secure Host Connectivity" },
      { name: "Production Troubleshooting", role: "Build & Runtime Diagnostics" },
    ],
    evaluatedStack: [
      { name: "Docker Containerization", note: "Evaluated for reproducible isolated microservice containers" },
      { name: "Vercel Edge Functions", note: "Evaluated for serverless API routing with global low-latency CDN" },
    ],
    keyCapabilities: [
      "Zero-secret leakage through strict environment separation (.env vs production server vaults).",
      "Fast diagnostics for NPM dependency conflicts, Webpack/Turbopack compilation issues, and path errors.",
      "Domain routing, SSL certificate management, custom nameservers, and Apache/Nginx rewrite rules.",
    ],
  },
];

const architecturalStacks: ArchitecturalStack[] = [
  {
    id: "web-app",
    number: "STACK 01",
    category: "Enterprise Web Applications",
    title: "Next.js & React Full-Stack Web Engine",
    tagline: "Sub-second load times, SEO-optimized SSR, and reactive client dashboards.",
    provenIn: "Built For: NarnaulOnline Platform & Custom Client Web Portals",
    status: "In Production",
    layers: [
      { label: "Client & UI", tech: "Next.js 15 (Turbopack) + React 19", detail: "Component architecture with DESIGN.md tokens & Framer Motion" },
      { label: "API & Logic", tech: "Node.js REST Services + FormSubmit", detail: "Secure contact routing, serverless endpoints & payload validation" },
      { label: "Storage & Cache", tech: "MySQL / JSON Schemas", detail: "Structured data feeds, responsive image optimization & static caching" },
      { label: "Deployment", tech: "Hostinger Cloud / Edge CDN", detail: "Global SSL, custom DNS routing & automated build pipelines" },
    ],
    guarantees: [
      "Sub-second First Contentful Paint with hybrid SSR and static prerendering",
      "Strict compliance with DESIGN.md color, radius (35px), and typography tokens",
      "Fluid mobile-first responsive layout across all display sizes",
    ],
  },
  {
    id: "loan-erp",
    number: "STACK 02",
    category: "Fintech & Enterprise Systems",
    title: "Financial Ledger & Loan Processing Stack",
    tagline: "Deterministic amortization calculations, immutable audit trails, and strict RBAC.",
    provenIn: "Built For: Microfinance & Multi-Loan Management ERP",
    status: "Active ERP System",
    layers: [
      { label: "Client Portal", tech: "React Administrative SPA", detail: "Loan application forms, repayment tables & KYC verification views" },
      { label: "API & Auth", tech: "PHP 8.x REST API + RBAC Engine", detail: "Multi-tier permissions (Admin, Manager, Agent) & token validation" },
      { label: "Data Store", tech: "MySQL InnoDB (Foreign Keys)", detail: "Double-entry transaction ledgers, borrower records & repayment schedules" },
      { label: "Math Engine", tech: "Deterministic Financial Algorithms", detail: "Zero-drift EMI calculations, interest accrual & penalty logic" },
    ],
    guarantees: [
      "Strict ACID transactional consistency — zero lost repayments or balance drift",
      "Referential foreign keys preventing orphaned borrower or payment records",
      "Granular permission gates preventing unauthorized loan approvals or edits",
    ],
  },
  {
    id: "ai-newsroom",
    number: "STACK 03",
    category: "AI Automation & Digital Publishing",
    title: "AI-Agent Newsroom & Orchestration OS",
    tagline: "Autonomous multi-agent research & bilingual drafting with human approval gates.",
    provenIn: "Built For: AI Newsroom OS (Bilingual Publishing Engine)",
    status: "Architecture Validated",
    layers: [
      { label: "Discovery", tech: "News Ingestion & Trend Monitor", detail: "Continuous topic monitoring and source document aggregation" },
      { label: "AI Orchestration", tech: "LLM APIs (DeepSeek / OpenAI)", detail: "Specialized agents for research, bilingual drafting, and SEO metadata" },
      { label: "Editorial Gate", tech: "Human Review Dashboard", detail: "Mandatory human review gate with 1-click edit, approve, or reject" },
      { label: "Distribution", tech: "Multi-Channel API Dispatcher", detail: "Automated publishing to Web CMS, WhatsApp Business, Meta & YouTube" },
    ],
    guarantees: [
      "Zero unverified publishing: strict human approval gate before syndication",
      "Native bilingual content generation across Hindi and English workflows",
      "Simultaneous multi-platform publishing executed within seconds",
    ],
  },
];

const serviceOfferings = [
  {
    id: "01",
    title: "Business Websites & Web Applications",
    desc: "Custom-built, fast, and responsive web applications engineered with Next.js or React, tailored to your business model.",
  },
  {
    id: "02",
    title: "Custom Admin Dashboards & Portals",
    desc: "Intuitive administrative backends with role-based permissions, user controls, data tables, and operational overviews.",
  },
  {
    id: "03",
    title: "E-Commerce & Inventory Management",
    desc: "Multi-tier product catalogs, B2B wholesale order approval workflows, spare parts compatibility systems, and GST billing.",
  },
  {
    id: "04",
    title: "Business Workflow Automation & AI Agents",
    desc: "Streamlining repetitive manual tasks with custom AI workflows, WhatsApp notifications, scheduled jobs, and API integrations.",
  },
  {
    id: "05",
    title: "Database-Driven Systems & Financial Ledgers",
    desc: "Robust relational databases (MySQL/PostgreSQL), transaction histories, loan/EMI calculations, and exportable reports.",
  },
  {
    id: "06",
    title: "Website Maintenance & Deployment Support",
    desc: "Hands-on assistance with domain setup, Hostinger hosting, build fixes, database migrations, and performance optimization.",
  },
];

export default function HomePage() {
  const [activeDomain, setActiveDomain] = useState<string>("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main id="top">
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="profile-highlight">
                <span className="pulse-dot"></span>
                <span>Full-Stack Developer • AI Automation Builder • Haryana, India</span>
              </div>

              <span className="eyebrow">AMIT JANGID • PROFESSIONAL PROFILE</span>
              <h1>Building Digital Solutions for Real-World Businesses.</h1>
              <p>
                I&apos;m <strong>Amit Jangid</strong>, a developer and digital solutions builder focused on
                web applications, AI-powered automation, business systems, and scalable digital experiences.
                My mission is turning business ideas into practical, reliable software.
              </p>

              <div className="hero-actions">
                <a href="#featured-projects" className="btn btn-primary">
                  VIEW OUR PORTFOLIO
                </a>
                <a href="#contact" className="btn btn-secondary">
                  GET A QUOTE
                </a>
                <a
                  href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 WhatsApp Direct
                </a>
              </div>

              <ul className="hero-trust">
                <li>End-to-end full-stack architectures (React, Next.js, PHP, Node.js, MySQL)</li>
                <li>AI-agent orchestration, editorial publishing workflows & automation</li>
                <li>Complex business ERPs, B2B commerce, inventory & financial ledgers</li>
              </ul>
            </div>

            <div className="hero-visual reveal">
              <div className="focus-console">
                <div className="console-header">
                  <div className="console-header-info">
                    <span className="console-eyebrow">
                      PROFESSIONAL FOCUS & DISCIPLINES
                    </span>
                    <strong style={{ display: "block", fontSize: "1.25rem", color: "var(--secondary)" }}>
                      Amit Jangid
                    </strong>
                    <span style={{ fontSize: "0.86rem", color: "var(--text-muted)" }}>
                      Full-Stack Web Developer & AI Automation Builder
                    </span>
                  </div>
                  <span className="live-indicator">Active Systems</span>
                </div>

                <div className="focus-grid">
                  <div className="focus-item">
                    <span className="focus-item-icon">🌐</span>
                    <strong>Web Applications</strong>
                    <small>React, Next.js, PHP REST, Node.js</small>
                  </div>

                  <div className="focus-item">
                    <span className="focus-item-icon">🤖</span>
                    <strong>AI Agents & Automation</strong>
                    <small>Newsroom OS, agent workflows, bots</small>
                  </div>

                  <div className="focus-item">
                    <span className="focus-item-icon">💼</span>
                    <strong>Business & Loan ERPs</strong>
                    <small>Microfinance, EMI engines, ledgers</small>
                  </div>

                  <div className="focus-item">
                    <span className="focus-item-icon">🛒</span>
                    <strong>B2B / B2C E-Commerce</strong>
                    <small>Wholesale tiers, MOQ & GST billing</small>
                  </div>

                  <div className="focus-item">
                    <span className="focus-item-icon">⚙️</span>
                    <strong>Inventory Systems</strong>
                    <small>Parts compatibility & relational data</small>
                  </div>

                  <div className="focus-item">
                    <span className="focus-item-icon">📡</span>
                    <strong>Media & Platforms</strong>
                    <small>Radio Aravali, NGOs & regional web</small>
                  </div>
                </div>

                <div className="console-meta-bar">
                  <div>
                    <span style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--primary)", display: "block", fontWeight: 700 }}>
                      Initiative
                    </span>
                    <strong>NarnaulOnline</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--primary)", display: "block", fontWeight: 700 }}>
                      Location
                    </span>
                    <strong>Haryana, India</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--primary)", display: "block", fontWeight: 700 }}>
                      Data Standards
                    </span>
                    <strong>Relational MySQL</strong>
                  </div>
                </div>
              </div>

              <div className="hero-companion-chips">
                <div className="companion-chip">
                  <span>Core Working Approach</span>
                  <strong>Business-First Problem Solving</strong>
                  <small>Translating operational bottlenecks into software</small>
                </div>

                <div className="companion-chip">
                  <span>Specialized Systems</span>
                  <strong>Custom ERPs & AI Agents</strong>
                  <small>Automating repetitive tasks & data integrity</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Banner */}
        <section className="logos">
          <div className="container">
            <p>Practical Engineering Across Modern Stacks, Databases & Agent Architectures</p>
            <div className="logo-row">
              <span>Next.js & React</span>
              <span>PHP & REST APIs</span>
              <span>MySQL & Relational DB</span>
              <span>AI Agent Workflows</span>
              <span>B2B E-Commerce & ERP</span>
              <span>Tailwind & Framer</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="solutions">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Professional Introduction</span>
              <h2>Turning Business Ideas into Practical Digital Solutions.</h2>
              <p style={{ maxWidth: "780px", color: "var(--muted)", margin: "16px auto 0", fontSize: "1.05rem" }}>
                Amit Jangid is a technology-focused developer and digital solutions builder based in Haryana, India.
                His work spans full-stack web applications, AI-powered automation, e-commerce ecosystems, financial
                services software, inventory management, and digital media platforms.
              </p>
            </div>

            <div className="solution-grid">
              <div className="solution-box reveal">
                <h3>Our Mission</h3>
                <p>
                  To build useful, intelligent, and scalable digital solutions that help businesses,
                  organizations, and communities improve their operations, reach more people, and grow through technology.
                </p>
              </div>
              <div className="solution-box reveal">
                <h3>Our Vision</h3>
                <p>
                  To develop an ecosystem of modern digital products that combines web applications,
                  artificial intelligence, automation, and business intelligence to solve real-world problems.
                </p>
              </div>
              <div className="solution-box reveal">
                <h3>Engineering Approach</h3>
                <p>
                  Focuses on understanding real business requirements and translating them into functional digital solutions,
                  combining modern user interfaces, backend workflows, database architecture, and administrative control systems.
                </p>
              </div>
              <div className="solution-box reveal">
                <h3>AI & Future Horizons</h3>
                <p>
                  Particularly interested in the intersection of AI agents, web technologies, business process automation,
                  and entrepreneurship, building software that reduces repetitive manual work and creates better digital experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Professional Strengths (portfolio.md Section 8) */}
        <section id="strengths" className="services" style={{ background: "var(--surface-container-low)" }}>
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Professional Strengths</span>
              <h2>Demonstrated Approaches to Software Architecture.</h2>
              <p style={{ maxWidth: "720px", color: "var(--muted)", margin: "14px auto 0" }}>
                Built on real project explorations, addressing structural bottlenecks rather than superficial aesthetics.
              </p>
            </div>

            <div className="card-grid">
              {professionalStrengths.map((str) => (
                <div key={str.num} className="strength-card reveal">
                  <span className="strength-num">Strength {str.num}</span>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--secondary)", margin: "8px 0 10px" }}>
                    {str.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.96rem", lineHeight: "1.6" }}>
                    {str.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section (portfolio.md Section 6 & 10) */}
        <section id="featured-projects" className="showcase">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Featured Projects</span>
              <h2>Real-World Systems, Architectures & Implementations.</h2>
              <p style={{ maxWidth: "760px", color: "var(--muted)", margin: "14px auto 0" }}>
                Each project represents a distinct business problem solved through tailored workflows,
                relational data design, and modern technologies. Implementation statuses are clearly disclosed.
              </p>
            </div>

            <div style={{ display: "grid", gap: "32px" }}>
              {featuredProjects.map((project) => (
                <article
                  key={project.id}
                  className="reveal"
                  style={{
                    background: "var(--panel)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-lg)",
                    padding: "36px",
                    boxShadow: "var(--shadow)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: "0.82rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "var(--primary)",
                          fontWeight: "700",
                        }}
                      >
                        {project.tag}
                      </span>
                      <h3 style={{ fontSize: "1.75rem", margin: "6px 0 0", color: "var(--secondary)" }}>
                        {project.title}
                      </h3>
                    </div>

                    <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                      <span className={`badge-status ${project.statusClass}`}>
                        {project.status}
                      </span>
                      <span
                        style={{
                          padding: "5px 12px",
                          borderRadius: "999px",
                          background: "var(--surface-container)",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          color: "var(--muted)",
                        }}
                      >
                        Project #{project.id}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: "var(--text)", fontSize: "1.04rem", lineHeight: "1.65", margin: "12px 0" }}>
                    {project.overview}
                  </p>

                  <div
                    style={{
                      background: "var(--surface-container-low)",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--radius-md)",
                      padding: "16px 20px",
                      margin: "18px 0",
                    }}
                  >
                    <strong style={{ fontSize: "0.92rem", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Business Challenge Solved:
                    </strong>
                    <p style={{ margin: "4px 0 0", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                      {project.problem}
                    </p>
                  </div>

                  <strong style={{ fontSize: "0.92rem", color: "var(--secondary)" }}>
                    Planned & Key Capabilities:
                  </strong>
                  <ul className="feature-list" style={{ margin: "10px 0 20px" }}>
                    {project.capabilities.map((cap) => (
                      <li key={cap}>{cap}</li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px", paddingTop: "14px", borderTop: "1px solid var(--line)" }}>
                    <div className="skills-cloud" style={{ margin: 0 }}>
                      {project.techStack.map((tech) => (
                        <span key={tech} className="skill-tag" style={{ fontSize: "0.82rem", padding: "5px 12px" }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span style={{ fontSize: "0.85rem", color: "var(--muted)", fontStyle: "italic" }}>
                      Role: {project.role}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "42px" }}>
              <Link href="/portfolio" className="btn btn-secondary" style={{ padding: "12px 28px", fontSize: "0.98rem" }}>
                Check Our Portfolio (All 12+ Systems) →
              </Link>
            </div>
          </div>
        </section>

        {/* Experiments, Concepts & In-Progress Builds (portfolio.md Section 7) */}
        <section id="experiments" className="solutions" style={{ background: "var(--surface-container)" }}>
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Section 7 Exploration</span>
              <h2>Experiments, Concepts & In-Progress Builds.</h2>
              <p style={{ maxWidth: "760px", color: "var(--muted)", margin: "14px auto 0" }}>
                Active initiatives, digital service concepts, domain utilities, and community technology platforms.
              </p>
            </div>

            <div className="experiment-grid">
              {secondaryExperiments.map((exp) => (
                <div key={exp.title} className="experiment-card reveal">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "0.78rem", color: "var(--primary)", fontWeight: "700", textTransform: "uppercase" }}>
                      {exp.category}
                    </span>
                    <span className="badge-status concept" style={{ fontSize: "0.72rem", padding: "3px 10px" }}>
                      {exp.status}
                    </span>
                  </div>
                  <h4 style={{ fontSize: "1.12rem", color: "var(--secondary)", margin: "6px 0 8px" }}>
                    {exp.title}
                  </h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.55", margin: 0 }}>
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Competencies & Architectural Stacks (portfolio.md Section 5) */}
        <section id="skills" className="services competencies-section">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Technical Competencies</span>
              <h2>Skills, Technologies & Architectural Stacks.</h2>
              <p style={{ maxWidth: "760px", color: "var(--muted)", margin: "14px auto 0", lineHeight: "1.6" }}>
                Structured into functional engineering domains. Fully separating technologies used in verified production implementations from architectural options evaluated for scale.
              </p>
            </div>

            {/* Interactive Domain Filter Tabs */}
            <div className="domain-filter-bar reveal">
              <button
                type="button"
                className={`domain-tab-btn ${activeDomain === "all" ? "active" : ""}`}
                onClick={() => setActiveDomain("all")}
              >
                <span>🌐 All Disciplines</span>
                <span className="domain-tab-count">{technicalCompetencies.length}</span>
              </button>
              <button
                type="button"
                className={`domain-tab-btn ${activeDomain === "frontend" ? "active" : ""}`}
                onClick={() => setActiveDomain("frontend")}
              >
                <span>💻 Frontend</span>
                <span className="domain-tab-count">1</span>
              </button>
              <button
                type="button"
                className={`domain-tab-btn ${activeDomain === "backend" ? "active" : ""}`}
                onClick={() => setActiveDomain("backend")}
              >
                <span>⚙️ Backend & APIs</span>
                <span className="domain-tab-count">1</span>
              </button>
              <button
                type="button"
                className={`domain-tab-btn ${activeDomain === "database" ? "active" : ""}`}
                onClick={() => setActiveDomain("database")}
              >
                <span>🗄️ Databases</span>
                <span className="domain-tab-count">1</span>
              </button>
              <button
                type="button"
                className={`domain-tab-btn ${activeDomain === "ai" ? "active" : ""}`}
                onClick={() => setActiveDomain("ai")}
              >
                <span>🤖 AI & Automation</span>
                <span className="domain-tab-count">1</span>
              </button>
              <button
                type="button"
                className={`domain-tab-btn ${activeDomain === "devops" ? "active" : ""}`}
                onClick={() => setActiveDomain("devops")}
              >
                <span>🚀 DevOps & Cloud</span>
                <span className="domain-tab-count">1</span>
              </button>
            </div>

            {/* Competency Cards Grid */}
            <div className="competency-grid">
              {technicalCompetencies
                .filter((comp) => activeDomain === "all" || comp.categoryKey === activeDomain)
                .map((comp) => (
                  <article key={comp.id} className="competency-card reveal">
                    <div>
                      <div className="competency-card-header">
                        <div className="competency-icon-box">{comp.icon}</div>
                        <span className="competency-domain-tag">{comp.badge}</span>
                      </div>

                      <span style={{ fontSize: "0.78rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6px", color: "var(--primary)" }}>
                        {comp.domain}
                      </span>
                      <h3 className="competency-title">{comp.title}</h3>
                      <p className="competency-tagline">{comp.tagline}</p>
                      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.55", marginBottom: "16px" }}>
                        {comp.summary}
                      </p>

                      {/* Verified Production Stack */}
                      <div className="tech-group-heading">
                        <span className="dot-indicator"></span>
                        <span>Verified Production Stack</span>
                      </div>
                      <div className="implemented-stack-grid">
                        {comp.implementedStack.map((tech) => (
                          <div key={tech.name} className="tech-pill-implemented">
                            <span className="tech-pill-name">{tech.name}</span>
                            <span className="tech-pill-role">{tech.role}</span>
                          </div>
                        ))}
                      </div>

                      {/* Evaluated Architectural Choices */}
                      {comp.evaluatedStack.length > 0 && (
                        <>
                          <div className="tech-group-heading evaluated">
                            <span className="dot-indicator"></span>
                            <span>Architectural Options Evaluated</span>
                          </div>
                          <div className="evaluated-stack-list">
                            {comp.evaluatedStack.map((ev) => (
                              <div key={ev.name} className="evaluated-pill-item">
                                <span className="evaluated-tech-name">⚡ {ev.name}</span>
                                <span className="evaluated-tech-note">— {ev.note}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Key Engineering Deliverables */}
                    <div className="competency-capabilities-box">
                      <strong style={{ fontSize: "0.84rem", fontWeight: "700", color: "var(--secondary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        Key Engineering Deliverables:
                      </strong>
                      <ul className="capabilities-list">
                        {comp.keyCapabilities.map((cap) => (
                          <li key={cap}>
                            <span className="capability-check-icon">✓</span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
            </div>

            {/* Architectural Stacks in Production Showcase */}
            <div className="stacks-showcase-box reveal">
              <div className="stacks-showcase-header">
                <span className="eyebrow">BATTLE-TESTED ARCHITECTURES</span>
                <h2 style={{ fontSize: "2.1rem", margin: "8px 0 12px" }}>Architectural Stacks in Production.</h2>
                <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Demonstrating how frontend, backend, database, and automation layers synchronize into end-to-end, dependable business software.
                </p>
              </div>

              <div className="stacks-showcase-grid">
                {architecturalStacks.map((stack) => (
                  <div key={stack.id} className="stack-card">
                    <div>
                      <div className="stack-card-top">
                        <span className="stack-num-pill">{stack.number} • {stack.category}</span>
                        <span className="stack-status-badge">● {stack.status}</span>
                      </div>
                      <h4 className="stack-card-title">{stack.title}</h4>
                      <p className="stack-card-tagline">{stack.tagline}</p>

                      {/* Visual Flow Pipeline */}
                      <div className="stack-flow-pipeline">
                        {stack.layers.map((layer) => (
                          <div key={layer.label} className="stack-flow-step">
                            <span className="stack-step-label">{layer.label}</span>
                            <div className="stack-step-content">
                              <span className="stack-step-tech">{layer.tech}</span>
                              <span className="stack-step-detail">{layer.detail}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="stack-proven-tag">
                        <span>🛡️</span>
                        <span>{stack.provenIn}</span>
                      </div>
                    </div>

                    <div>
                      <ul className="stack-guarantees-list">
                        {stack.guarantees.map((guarantee) => (
                          <li key={guarantee}>{guarantee}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (portfolio.md Section 10) */}
        <section id="services" className="services" style={{ background: "var(--surface-container-low)" }}>
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">What I Can Build For You</span>
              <h2>Digital Solutions & Technical Consulting Capabilities.</h2>
              <p style={{ maxWidth: "700px", color: "var(--muted)", margin: "14px auto 0" }}>
                Focused services backed by practical development experience and clear deliverables.
              </p>
            </div>

            <div className="card-grid">
              {serviceOfferings.map((service) => (
                <article key={service.id} className="service-card reveal">
                  <div className="icon">{service.id}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="cta-band">
          <div className="container cta-wrap reveal">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "var(--radius-pill)", background: "var(--surface-container-high)", border: "1px solid var(--line)", marginBottom: "12px", fontSize: "0.85rem", fontWeight: "600", color: "var(--primary)" }}>
                <span>📍</span>
                <span>Current Location: Narnaul, Haryana, India</span>
              </div>
              <span className="eyebrow" style={{ display: "block" }}>Start a Conversation</span>
              <h2>Ready to build something smarter?</h2>
              <p style={{ color: "var(--muted)", marginTop: "8px", maxWidth: "620px", fontSize: "1.05rem", lineHeight: "1.6" }}>
                Based in <strong>Narnaul, Haryana, India</strong>. Have a project idea, business workflow bottleneck, or custom software requirement?
                Inquiries are routed directly to <strong>onlinenarnaul@gmail.com</strong>.
              </p>
            </div>

            <div className="cta-actions">
              <a href="mailto:onlinenarnaul@gmail.com" className="btn btn-primary">
                Email onlinenarnaul@gmail.com
              </a>
              <a
                href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20would%20like%20to%20discuss%20a%20digital%20project."
                className="btn btn-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                💬 Chat on WhatsApp (+91 9416341097)
              </a>
            </div>
          </div>

          {/* Quick Contact & Location Cards */}
          <div className="container" style={{ marginBottom: "32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
              <div className="service-card reveal" style={{ padding: "22px 24px" }}>
                <span style={{ fontSize: "1.4rem", display: "block", marginBottom: "6px" }}>📍</span>
                <strong style={{ display: "block", color: "var(--secondary)", fontSize: "1rem" }}>Current Location</strong>
                <span style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>Narnaul, Haryana, India (123001)</span>
              </div>
              <div className="service-card reveal" style={{ padding: "22px 24px" }}>
                <span style={{ fontSize: "1.4rem", display: "block", marginBottom: "6px" }}>✉️</span>
                <strong style={{ display: "block", color: "var(--secondary)", fontSize: "1rem" }}>Direct Email</strong>
                <a href="mailto:onlinenarnaul@gmail.com" style={{ fontSize: "0.92rem", color: "var(--primary)", fontWeight: "600" }}>onlinenarnaul@gmail.com</a>
              </div>
              <div className="service-card reveal" style={{ padding: "22px 24px" }}>
                <span style={{ fontSize: "1.4rem", display: "block", marginBottom: "6px" }}>💬</span>
                <strong style={{ display: "block", color: "var(--secondary)", fontSize: "1rem" }}>WhatsApp Quick Chat</strong>
                <a href="https://wa.me/919416341097" target="_blank" rel="noreferrer" style={{ fontSize: "0.92rem", color: "#128C7E", fontWeight: "600" }}>+91 9416341097</a>
              </div>
              <div className="service-card reveal" style={{ padding: "22px 24px" }}>
                <span style={{ fontSize: "1.4rem", display: "block", marginBottom: "6px" }}>⚡</span>
                <strong style={{ display: "block", color: "var(--secondary)", fontSize: "1rem" }}>Availability</strong>
                <span style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>Open for new projects & consulting</span>
              </div>
            </div>
          </div>

          <div className="container form-shell" style={{ display: "block" }}>
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <span className="eyebrow">Project Inquiry Form</span>
              <h3 style={{ fontSize: "1.75rem", color: "var(--secondary)", margin: "6px 0" }}>
                Ready to build something smarter?
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.98rem" }}>
                Tell me about your business requirements. Inquiries are delivered directly to <strong>onlinenarnaul@gmail.com</strong>.
              </p>
            </div>

            <form
              action="https://formsubmit.co/onlinenarnaul@gmail.com"
              method="POST"
              className="contact-form"
            >
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required placeholder="e.g. Ramesh Kumar" />
                </div>

                <div className="field">
                  <label htmlFor="email">Your Email Address</label>
                  <input type="email" id="email" name="email" required placeholder="name@company.com" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="phone">Phone / WhatsApp Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" />
              </div>

              <div className="field">
                <label htmlFor="service">Project Topic / Service Needed</label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  placeholder="e.g. AI Workflow, Loan ERP, B2B E-Commerce, Custom Dashboard"
                />
              </div>

              <div className="field">
                <label htmlFor="message">Project Requirements / Workflow Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Describe what you want to build, the key features needed, and your preferred timeline..."
                />
              </div>

              <input type="hidden" name="_subject" value="New Web Inquiry - NarnaulOnline" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <button type="submit" className="btn btn-primary" style={{ padding: "14px", fontSize: "1rem" }}>
                Send Message to onlinenarnaul@gmail.com
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-wrap">
          <div className="footer-brand">
            <Link href="#top" className="brand" aria-label="Amit Jangid • NarnaulOnline">
              <Image
                src="/logo.png"
                alt="Amit Jangid • NarnaulOnline"
                width={200}
                height={52}
                className="brand-logo"
              />
            </Link>
          </div>

          <nav className="footer-nav">
            <Link href="#about">About</Link>
            <Link href="#strengths">Strengths</Link>
            <Link href="#featured-projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <div className="footer-contact">
            <a href="tel:+919416341097">+91 9416341097</a>
            <a href="mailto:onlinenarnaul@gmail.com">onlinenarnaul@gmail.com</a>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>Haryana, India</span>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Amit Jangid • NarnaulOnline. Building Digital Solutions for Real-World Businesses.</p>
        </div>
      </footer>
    </>
  );
}