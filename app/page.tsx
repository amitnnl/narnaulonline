"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AjaxContactForm from "./components/AjaxContactForm";

interface FeaturedProject {
  id: string;
  category: "AI & Automation" | "Fintech & ERP" | "E-Commerce & Wholesale" | "Community";
  status: string;
  statusClass: "live" | "planning" | "dev";
  title: string;
  url: string;
  overview: string;
  problem: string;
  solution: string;
  capabilities: string[];
  techStack: string[];
  role: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "01",
    category: "AI & Automation",
    status: "Architecture & Planning",
    statusClass: "planning",
    title: "AI Newsroom OS",
    url: "https://narnaulonline.com/apps/newsroom-os",
    overview:
      "A next-generation publishing platform coordinating multi-source research, bilingual content synthesis, human editorial verification gates, and multi-channel distribution.",
    problem:
      "Digital media rooms struggle with manual topic research, fact-checking delays, SEO preparation bottlenecks, and inconsistent multi-channel publishing across Hindi and English.",
    solution:
      "Engineered an autonomous multi-agent pipeline with mandatory human editorial review gates before any automated webhook dispatches to WhatsApp, Meta, and Web CMS.",
    capabilities: [
      "AI-assisted news ingestion and bilingual drafting (Hindi & English)",
      "Strict human editorial approval gates with tamper-proof audit trails",
      "Automated SEO metadata, multimedia scripts, and social hooks",
      "Direct multi-channel dispatch to WhatsApp Business API and Web CMS",
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Node.js", "OpenAI API", "Job Queues"],
    role: "System Architecture, AI Agent Orchestration & API Contracts",
  },
  {
    id: "02",
    category: "Fintech & ERP",
    status: "Production Development",
    statusClass: "dev",
    title: "Microfinance & Loan Management ERP",
    url: "https://narnaulonline.com/apps/loan-erp",
    overview:
      "Enterprise microfinance and lending platform designed for Indian NBFCs, rural banks, and credit societies requiring deterministic accounting ledgers and borrower KYC.",
    problem:
      "Lending operations suffer from manual EMI calculations, fragmented borrower files, delayed field collection tracking, and floating-point math rounding drift.",
    solution:
      "Built a zero-drift deterministic financial math engine with role-based access control (RBAC), automated amortization tables, and double-entry receipting.",
    capabilities: [
      "Comprehensive KYC borrower registration and document verification",
      "Multi-loan support: personal loans, group lending, and asset-backed credit",
      "Deterministic EMI schedule calculations with zero rounding drift",
      "Field agent collection logging with instant automated digital receipts",
      "Strict 4-tier Role-Based Access Control (RBAC) and activity audit logs",
    ],
    techStack: ["React 19", "Node.js", "PHP 8.x PDO", "MySQL InnoDB", "Financial Math Engine"],
    role: "Database Architecture, Deterministic Math & RBAC Security",
  },
  {
    id: "03",
    category: "E-Commerce & Wholesale",
    status: "Workflow Architecture Ready",
    statusClass: "planning",
    title: "Torvo Multibrand Power Tools B2B",
    url: "https://narnaulonline.com/apps/torvo-b2b",
    overview:
      "Specialized B2B commerce platform for industrial tool distributors, featuring dealer verification gates, real-time stock allocation, and GST billing.",
    problem:
      "Industrial tool distribution requires custom dealer credit approvals, real-time stock checks before order locking, and complex CGST/SGST multi-state tax invoicing.",
    solution:
      "Created a dual-portal architecture separating seller inventory controls from verified buyer order builders with dynamic volume tier pricing.",
    capabilities: [
      "Controlled buyer onboarding with mandatory seller approval gate",
      "Order revision and stock confirmation before final invoice generation",
      "Multibrand catalog across power tools, accessories, and replacement parts",
      "Automated GST-compliant billing with printable tax invoices",
      "Instant WhatsApp order alert dispatch for field sales managers",
    ],
    techStack: ["Next.js", "TypeScript", "REST APIs", "MySQL", "GST Invoicing Engine"],
    role: "B2B Workflow Architecture, Data Modeling & API Integration",
  },
  {
    id: "04",
    category: "E-Commerce & Wholesale",
    status: "Architecture Specified",
    statusClass: "planning",
    title: "Pragati Kurtis Fashion Commerce",
    url: "https://narnaulonline.com/apps/pragati-fashion",
    overview:
      "Hybrid B2B & B2C e-commerce platform designed for apparel manufacturers catering simultaneously to retail shoppers and bulk wholesale dealer networks.",
    problem:
      "Retail customers require frictionless instant checkout, while bulk wholesale buyers require minimum order quantities (MOQ), volume tier discounts, and RFQ quotes.",
    solution:
      "Designed a unified high-performance catalog with role-adaptive views that dynamically display retail prices or wholesale RFQ forms based on user tier.",
    capabilities: [
      "Multi-role user authentication: Retail Shopper, Approved Dealer, Administrator",
      "Wholesale volume pricing tiers, bulk bundle configuration, and RFQ forms",
      "Automated inventory management with size, color, and fabric attributes",
      "Sub-second catalog browsing optimized with edge caching",
    ],
    techStack: ["React 19", "Vite", "Tailwind CSS", "PHP REST APIs", "Framer Motion"],
    role: "Full-Stack Architecture, Catalog Schemas & UI/UX Design",
  },
  {
    id: "05",
    category: "Fintech & ERP",
    status: "Model Design",
    statusClass: "dev",
    title: "Power Tools Spare Parts Matrix",
    url: "https://narnaulonline.com/apps/spare-parts-matrix",
    overview:
      "Specialized inventory classification system solving the complex many-to-many compatibility mapping between replacement components and machine models.",
    problem:
      "Spare parts inventory becomes chaotic because a single armature, gear, or carbon brush may be compatible with 15 different tool models across multiple brands.",
    solution:
      "Engineered a normalized relational compatibility matrix with fuzzy search algorithms, allowing technicians to find correct replacement parts in seconds.",
    capabilities: [
      "Relational mapping linking single spare parts to dozens of tool models",
      "Multi-tier classification: Brand → Machine Model → Component Sub-Assembly",
      "Stock level thresholds with automated low-stock reorder indicators",
      "High-speed fuzzy search for part numbers, OEM codes, and specifications",
    ],
    techStack: ["MySQL Relational Design", "Node.js", "TypeScript", "Search Index"],
    role: "Relational Schema Design, Compatibility Matrix & Search Engine",
  },
  {
    id: "06",
    category: "Community",
    status: "Live Concept",
    statusClass: "live",
    title: "Rao Net Ram Education Society",
    url: "https://narnaulonline.com/apps/raonetram-edu",
    overview:
      "Central institutional web platform designed for Rao Net Ram Education Society, championing educational initiatives and community empowerment across Haryana.",
    problem:
      "Community educational societies often lack a credible, central portal to publish announcements, administrative records, leadership addresses, and student initiatives.",
    solution:
      "Engineered an ultra-fast, accessible institutional portal featuring structured archives, photo galleries, and direct community communication channels.",
    capabilities: [
      "Institutional governance showcase with leadership addresses",
      "Educational initiative archives, community photo galleries, and news",
      "Public notice board with mobile-friendly announcements",
      "Zero-database hosting architecture with instant edge loading",
    ],
    techStack: ["HTML5", "CSS3 Design Tokens", "JavaScript ES6+", "Edge CDN"],
    role: "Website Planning, Digital Strategy & Content Architecture",
  },
];

interface ProjectPackage {
  id: string;
  title: string;
  badge: string;
  timelineDays: number;
  tagline: string;
  deliverables: string[];
}

const projectPackages: ProjectPackage[] = [
  {
    id: "starter",
    title: "Starter Web Presence",
    badge: "Fast Launch",
    timelineDays: 5,
    tagline: "High-performance responsive business website",
    deliverables: [
      "Custom responsive design (Stripe & Apple inspired)",
      "Next.js App Router with sub-second page loads",
      "Lead capture inquiry form with email & WhatsApp routing",
      "Full SEO Schema markup & OpenGraph social cards",
      "Zero-Database deployment setup (Vercel / Hostinger)",
    ],
  },
  {
    id: "webapp",
    title: "Full-Stack Web App (SPA/SSR)",
    badge: "Most Popular",
    timelineDays: 14,
    tagline: "Dynamic, reactive web application with edge APIs",
    deliverables: [
      "Next.js 16 + React 19 App Router architecture",
      "Type-safe API routes with strict schema validation",
      "Interactive client state & fluid micro-animations",
      "Custom UI component library with design tokens",
      "Edge CDN caching with sub-100ms global response",
    ],
  },
  {
    id: "dashboard",
    title: "Custom Admin ERP & Portal",
    badge: "Operations",
    timelineDays: 20,
    tagline: "Role-based administrative control center",
    deliverables: [
      "Multi-tier Role-Based Access Control (Super Admin, Manager, Agent)",
      "Searchable, filterable & sortable data grids",
      "Secure token session & authentication logic",
      "Activity audit trails and PDF/Excel exportable reports",
      "Zero database hosting overhead architecture",
    ],
  },
  {
    id: "ecommerce",
    title: "B2B Wholesale & Commerce",
    badge: "Commercial",
    timelineDays: 25,
    tagline: "Tiered pricing, RFQ quotes & order pipeline",
    deliverables: [
      "Multi-tier dealer & retail volume pricing logic",
      "Product compatibility filters & spare parts schema",
      "Wholesale cart with instant RFQ quote generator",
      "Direct WhatsApp & email order dispatch pipelines",
      "Automated GST billing calculations (CGST/SGST)",
    ],
  },
];

interface OptionalAddon {
  id: string;
  label: string;
  daysAdded: number;
  category: string;
}

const optionalAddons: OptionalAddon[] = [
  { id: "rbac", label: "Advanced Multi-Tier RBAC (4+ Roles)", daysAdded: 3, category: "Security" },
  { id: "invoicing", label: "Dynamic Invoicing & GST Math Engine", daysAdded: 4, category: "Finance" },
  { id: "whatsapp", label: "WhatsApp Business API & Webhooks", daysAdded: 2, category: "Messaging" },
  { id: "cdn", label: "Custom Domain, SSL & Edge CDN Setup", daysAdded: 1, category: "DevOps" },
  { id: "pwa", label: "Progressive Web App (PWA) Offline Support", daysAdded: 4, category: "Mobile" },
];

export default function HomePage() {
  // Workbench tab state
  const [activeTab, setActiveTab] = useState<"next" | "api" | "math" | "schema">("next");

  // Interactive Live EMI Calculator state inside workbench
  const [loanAmount, setLoanAmount] = useState<number>(300000);
  const [loanTenure, setLoanTenure] = useState<number>(12);
  const [interestRate, setInterestRate] = useState<number>(14);

  // Calculate deterministic EMI
  const monthlyRate = interestRate / 12 / 100;
  const calculatedEmi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
      (Math.pow(1 + monthlyRate, loanTenure) - 1)
  );
  const totalRepayment = calculatedEmi * loanTenure;

  // Architecture section switcher
  const [activeArch, setActiveArch] = useState<"web" | "erp" | "ai">("web");

  // Case studies filter
  const [projectFilter, setProjectFilter] = useState<string>("All");

  // Estimator state
  const [selectedPackageId, setSelectedPackageId] = useState<string>("webapp");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["invoicing", "whatsapp"]);
  const [timelineMode, setTimelineMode] = useState<"standard" | "express" | "flexible">("standard");

  // Terminal active command state
  const [activeCliCommand, setActiveCliCommand] = useState<"create" | "status" | "build">("create");

  const currentPackage =
    projectPackages.find((p) => p.id === selectedPackageId) || projectPackages[1];

  const totalDays = Math.max(
    3,
    currentPackage.timelineDays +
      selectedAddons.reduce((sum, id) => {
        const addon = optionalAddons.find((a) => a.id === id);
        return sum + (addon ? addon.daysAdded : 0);
      }, 0) +
      (timelineMode === "express" ? -3 : timelineMode === "flexible" ? 5 : 0)
  );

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredProjects =
    projectFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === projectFilter);

  return (
    <>
      <Navbar />

      <main id="top">
        {/* =================================================================
            1. HERO SECTION WITH DEVELOPER WORKBENCH
            ================================================================= */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="agency-status-pill">
                <span className="pre-live-dot"></span>
                <span>DIGITAL SOFTWARE ENGINEERING AGENCY</span>
                <span style={{ color: "var(--accent-blue)", fontFamily: "var(--font-mono)", fontSize: "0.72rem" }}>
                  v2.4 READY
                </span>
              </div>

              <h1>
                Engineering High-Performance Web Applications &amp; Enterprise ERPs.
              </h1>

              <p>
                <strong>NarnaulOnline Studio</strong> is a modern web development &amp; digital engineering agency founded by <strong>Amit Jangid</strong>. We architect reactive Next.js 16 frontends, deterministic business logic engines, and scalable cloud systems — delivering production software with zero database maintenance overhead.
              </p>

              <div className="hero-actions">
                <a href="#estimator" className="btn btn-primary btn-lg">
                  ⚡ Configure Project Scope
                </a>
                <a href="#portfolio" className="btn btn-secondary btn-lg">
                  Explore Case Studies →
                </a>
                <a
                  href="https://wa.me/919416341097?text=Hello%20NarnaulOnline%20Team%2C%20I%20would%20like%20to%20discuss%20a%20software%20development%20project."
                  className="btn btn-whatsapp btn-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 WhatsApp Desk
                </a>
              </div>

              <div className="hero-stats-row">
                <div className="hero-stat-item">
                  <strong>&lt; 80ms</strong>
                  <span>Global Edge TTFB</span>
                </div>
                <div className="hero-stat-item">
                  <strong>100%</strong>
                  <span>Strict TypeScript</span>
                </div>
                <div className="hero-stat-item">
                  <strong>₹0 / $0</strong>
                  <span>DB Server Overhead</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Developer Workbench */}
            <div className="code-workbench" aria-label="Interactive Developer Code Workbench">
              <div className="workbench-chrome">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>

                <div className="workbench-tabs">
                  <button
                    type="button"
                    className={`wb-tab ${activeTab === "next" ? "active" : ""}`}
                    onClick={() => setActiveTab("next")}
                  >
                    Next16App.tsx
                  </button>
                  <button
                    type="button"
                    className={`wb-tab ${activeTab === "api" ? "active" : ""}`}
                    onClick={() => setActiveTab("api")}
                  >
                    api/route.ts
                  </button>
                  <button
                    type="button"
                    className={`wb-tab ${activeTab === "math" ? "active" : ""}`}
                    onClick={() => setActiveTab("math")}
                  >
                    LoanEngine.ts
                  </button>
                  <button
                    type="button"
                    className={`wb-tab ${activeTab === "schema" ? "active" : ""}`}
                    onClick={() => setActiveTab("schema")}
                  >
                    Schema.json
                  </button>
                </div>

                <span className="wb-badge-live">Live Sandbox</span>
              </div>

              {/* Code Display Area */}
              <div className="workbench-code-body">
                {activeTab === "next" && (
                  <>
                    <div className="code-line">
                      <span className="line-num">1</span>
                      <code><span className="token-kw">import</span> &#123; useState, useTransition &#125; <span className="token-kw">from</span> <span className="token-str">&quot;react&quot;</span>;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">2</span>
                      <code><span className="token-kw">import</span> &#123; createClient &#125; <span className="token-kw">from</span> <span className="token-str">&quot;@narnaulonline/edge-sdk&quot;</span>;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">3</span>
                      <code></code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">4</span>
                      <code><span className="token-cmt">// Production Next.js 16 Edge-Rendered Component</span></code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">5</span>
                      <code><span className="token-kw">export default function</span> <span className="token-fn">EnterprisePortal</span>() &#123;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">6</span>
                      <code>&nbsp;&nbsp;<span className="token-kw">const</span> [status, setStatus] = <span className="token-fn">useState</span>&lt;<span className="token-type">&apos;ready&apos; | &apos;live&apos;</span>&gt;(<span className="token-str">&apos;live&apos;</span>);</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">7</span>
                      <code>&nbsp;&nbsp;<span className="token-kw">const</span> client = <span className="token-fn">createClient</span>(&#123; edgeRegion: <span className="token-str">&quot;bom1&quot;</span>, cache: <span className="token-str">&quot;sub-second&quot;</span> &#125;);</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">8</span>
                      <code></code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">9</span>
                      <code>&nbsp;&nbsp;<span className="token-kw">return</span> (</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">10</span>
                      <code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="token-fn">div</span> <span className="token-prop">className</span>=<span className="token-str">&quot;p-6 rounded-2xl border border-slate-200&quot;</span>&gt;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">11</span>
                      <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="token-fn">h3</span>&gt;Production Edge App &bull; Zero DB Overhead&lt;/<span className="token-fn">h3</span>&gt;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">12</span>
                      <code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="token-fn">div</span>&gt;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">13</span>
                      <code>&nbsp;&nbsp;);</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">14</span>
                      <code>&#125;</code>
                    </div>
                  </>
                )}

                {activeTab === "api" && (
                  <>
                    <div className="code-line">
                      <span className="line-num">1</span>
                      <code><span className="token-kw">import</span> &#123; NextRequest, NextResponse &#125; <span className="token-kw">from</span> <span className="token-str">&quot;next/server&quot;</span>;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">2</span>
                      <code><span className="token-kw">import</span> &#123; z &#125; <span className="token-kw">from</span> <span className="token-str">&quot;zod&quot;</span>;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">3</span>
                      <code></code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">4</span>
                      <code><span className="token-kw">const</span> OrderSchema = z.object(&#123;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">5</span>
                      <code>&nbsp;&nbsp;dealerId: z.string(),</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">6</span>
                      <code>&nbsp;&nbsp;tier: z.enum([<span className="token-str">&quot;retail&quot;</span>, <span className="token-str">&quot;wholesale_tier1&quot;</span>, <span className="token-str">&quot;master_distributor&quot;</span>]),</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">7</span>
                      <code>&nbsp;&nbsp;items: z.array(z.object(&#123; sku: z.string(), qty: z.number().min(1) &#125;)),</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">8</span>
                      <code>&#125;);</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">9</span>
                      <code></code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">10</span>
                      <code><span className="token-kw">export async function</span> <span className="token-fn">POST</span>(req: NextRequest) &#123;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">11</span>
                      <code>&nbsp;&nbsp;<span className="token-kw">const</span> body = <span className="token-kw">await</span> req.json();</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">12</span>
                      <code>&nbsp;&nbsp;<span className="token-kw">const</span> validated = OrderSchema.parse(body);</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">13</span>
                      <code>&nbsp;&nbsp;<span className="token-kw">return</span> NextResponse.json(&#123; success: <span className="token-type">true</span>, latency: <span className="token-str">&quot;42ms&quot;</span> &#125;);</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">14</span>
                      <code>&#125;</code>
                    </div>
                  </>
                )}

                {activeTab === "math" && (
                  <>
                    <div className="code-line">
                      <span className="line-num">1</span>
                      <code><span className="token-cmt">// Deterministic Financial Math Engine (Zero Rounding Drift)</span></code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">2</span>
                      <code><span className="token-kw">export function</span> <span className="token-fn">calculateAmortization</span>(principal: <span className="token-type">number</span>, annualRate: <span className="token-type">number</span>, tenureMonths: <span className="token-type">number</span>) &#123;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">3</span>
                      <code>&nbsp;&nbsp;<span className="token-kw">const</span> r = annualRate / 12 / 100;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">4</span>
                      <code>&nbsp;&nbsp;<span className="token-kw">const</span> factor = Math.pow(1 + r, tenureMonths);</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">5</span>
                      <code>&nbsp;&nbsp;<span className="token-kw">const</span> emi = Math.round((principal * r * factor) / (factor - 1));</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">6</span>
                      <code>&nbsp;&nbsp;<span className="token-kw">const</span> totalRepayment = emi * tenureMonths;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">7</span>
                      <code>&nbsp;&nbsp;<span className="token-kw">return</span> &#123; emi, totalRepayment, interestPaid: totalRepayment - principal &#125;;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">8</span>
                      <code>&#125;</code>
                    </div>
                  </>
                )}

                {activeTab === "schema" && (
                  <>
                    <div className="code-line">
                      <span className="line-num">1</span>
                      <code>&#123;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">2</span>
                      <code>&nbsp;&nbsp;<span className="token-prop">&quot;$schema&quot;</span>: <span className="token-str">&quot;https://narnaulonline.com/schemas/zero-db-v2.json&quot;</span>,</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">3</span>
                      <code>&nbsp;&nbsp;<span className="token-prop">&quot;architecture&quot;</span>: &#123;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">4</span>
                      <code>&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-prop">&quot;pattern&quot;</span>: <span className="token-str">&quot;Decoupled JSON Schemas + Serverless Edge APIs&quot;</span>,</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">5</span>
                      <code>&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-prop">&quot;monthlyDatabaseHostingFees&quot;</span>: 0,</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">6</span>
                      <code>&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-prop">&quot;coldStartTimeMs&quot;</span>: 0,</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">7</span>
                      <code>&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-prop">&quot;globalEdgeSync&quot;</span>: <span className="token-type">true</span></code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">8</span>
                      <code>&nbsp;&nbsp;&#125;</code>
                    </div>
                    <div className="code-line">
                      <span className="line-num">9</span>
                      <code>&#125;</code>
                    </div>
                  </>
                )}
              </div>

              {/* Interactive Live Output Sandbox Bar */}
              <div className="workbench-preview-bar">
                <div className="preview-pill-header">
                  <span>LIVE DETERMINISTIC MATH DEMO</span>
                  <span>Interactive Engine Sandbox</span>
                </div>

                <div className="preview-card-interactive">
                  <div style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap" }}>
                    <div>
                      <span style={{ fontSize: "0.72rem", color: "#94A3B8", display: "block" }}>PRINCIPAL</span>
                      <select
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        style={{
                          background: "#1E293B",
                          color: "#F8FAFC",
                          border: "1px solid #334155",
                          borderRadius: "4px",
                          padding: "2px 8px",
                          fontSize: "0.8rem",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        <option value={100000}>₹1,00,000</option>
                        <option value={300000}>₹3,00,000</option>
                        <option value={500000}>₹5,00,000</option>
                        <option value={1000000}>₹10,00,000</option>
                      </select>
                    </div>

                    <div>
                      <span style={{ fontSize: "0.72rem", color: "#94A3B8", display: "block" }}>TENURE</span>
                      <select
                        value={loanTenure}
                        onChange={(e) => setLoanTenure(Number(e.target.value))}
                        style={{
                          background: "#1E293B",
                          color: "#F8FAFC",
                          border: "1px solid #334155",
                          borderRadius: "4px",
                          padding: "2px 8px",
                          fontSize: "0.8rem",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        <option value={6}>6 Months</option>
                        <option value={12}>12 Months</option>
                        <option value={24}>24 Months</option>
                        <option value={36}>36 Months</option>
                      </select>
                    </div>
                  </div>

                  <div className="preview-calc-result">
                    <span>EMI: <strong>₹{calculatedEmi.toLocaleString("en-IN")}/mo</strong></span>
                    <span style={{ marginLeft: "12px", color: "#94A3B8", fontSize: "0.75rem" }}>
                      Total: ₹{totalRepayment.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. KEY AGENCY METRICS STRIP (APPLE / STRIPE STYLE)
            ================================================================= */}
        <section className="metrics-strip">
          <div className="container">
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-value">&lt; 80ms</div>
                <div className="metric-label">Global Edge Response</div>
                <div className="metric-sub">Static prerendering &amp; edge CDN distribution</div>
              </div>

              <div className="metric-card">
                <div className="metric-value">100%</div>
                <div className="metric-label">Strict Type Safety</div>
                <div className="metric-sub">TypeScript schemas, automated validation &amp; zero bugs</div>
              </div>

              <div className="metric-card">
                <div className="metric-value">15+</div>
                <div className="metric-label">Production Deliveries</div>
                <div className="metric-sub">Web apps, ERPs, wholesale catalogs &amp; AI engines</div>
              </div>

              <div className="metric-card">
                <div className="metric-value">₹0 / $0</div>
                <div className="metric-label">Monthly DB Overhead</div>
                <div className="metric-sub">Zero-database decoupled serverless architecture</div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. TECH STACK PILLS
            ================================================================= */}
        <section className="tech-pills-section">
          <div className="container">
            <div className="tech-pills-label">Core Production Stacks &amp; Technologies</div>
            <div className="tech-pills-row">
              <span className="tech-pill">Next.js 16 (Turbopack)</span>
              <span className="tech-pill">React 19</span>
              <span className="tech-pill">TypeScript 5</span>
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">Tailwind CSS</span>
              <span className="tech-pill">PHP 8.x PDO</span>
              <span className="tech-pill">MySQL InnoDB</span>
              <span className="tech-pill">PostgreSQL</span>
              <span className="tech-pill">Cloudflare Edge</span>
              <span className="tech-pill">OpenAI / DeepSeek APIs</span>
              <span className="tech-pill">WhatsApp Business API</span>
            </div>
          </div>
        </section>

        {/* =================================================================
            4. ENGINEERING DISCIPLINES & SERVICES (BENTO GRID)
            ================================================================= */}
        <section id="services" className="services" style={{ padding: "88px 0" }}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow eyebrow-primary">AGENCY DISCIPLINES</span>
              <h2>Comprehensive Digital Software Engineering Services.</h2>
              <p>
                From interactive customer-facing web applications to high-security operational ERPs and deterministic financial math engines — engineered with precision and speed.
              </p>
            </div>

            <div className="bento-grid">
              {/* Bento Card 1 */}
              <div className="bento-card">
                <div className="bento-top">
                  <div className="bento-icon-box">💻</div>
                  <span className="bento-num">01</span>
                </div>
                <h3>Full-Stack Web Applications</h3>
                <p>
                  High-performance web apps built on Next.js 16 and React 19. Sub-second initial page loads, fluid responsive UI, and stateful client dashboards.
                </p>
                <ul className="bento-features">
                  <li>Next.js App Router with Server &amp; Client components</li>
                  <li>Type-safe edge APIs and client state synchronization</li>
                  <li>Responsive design system with fluid typography tokens</li>
                </ul>
                <div className="bento-stack-tags">
                  <span className="bento-tag">Next.js 16</span>
                  <span className="bento-tag">React 19</span>
                  <span className="bento-tag">TypeScript</span>
                </div>
              </div>

              {/* Bento Card 2 */}
              <div className="bento-card">
                <div className="bento-top">
                  <div className="bento-icon-box">💼</div>
                  <span className="bento-num">02</span>
                </div>
                <h3>Custom Enterprise ERPs &amp; Portals</h3>
                <p>
                  Bespoke administrative command centers with multi-tier Role-Based Access Control (RBAC), live searchable tables, and automated receipt generation.
                </p>
                <ul className="bento-features">
                  <li>4-tier role permissions (Super Admin, Manager, Agent, Auditor)</li>
                  <li>Real-time search, multi-column filters, and data exports</li>
                  <li>Immutable activity logs for regulatory compliance</li>
                </ul>
                <div className="bento-stack-tags">
                  <span className="bento-tag">RBAC Security</span>
                  <span className="bento-tag">PHP / Node.js</span>
                  <span className="bento-tag">Data Grids</span>
                </div>
              </div>

              {/* Bento Card 3 */}
              <div className="bento-card">
                <div className="bento-top">
                  <div className="bento-icon-box">⚙️</div>
                  <span className="bento-num">03</span>
                </div>
                <h3>Deterministic Financial Math Engines</h3>
                <p>
                  Zero-drift math engines for loan amortization, EMI schedules, interest accrual, and GST billing. Eliminates floating-point rounding errors.
                </p>
                <ul className="bento-features">
                  <li>Amortization tables with daily &amp; monthly interest accrual</li>
                  <li>Multi-state GST tax splits (CGST, SGST, IGST)</li>
                  <li>Audit-ready double-entry ledger verification</li>
                </ul>
                <div className="bento-stack-tags">
                  <span className="bento-tag">Precision Math</span>
                  <span className="bento-tag">Loan Amortization</span>
                  <span className="bento-tag">GST Engine</span>
                </div>
              </div>

              {/* Bento Card 4 */}
              <div className="bento-card">
                <div className="bento-top">
                  <div className="bento-icon-box">🛒</div>
                  <span className="bento-num">04</span>
                </div>
                <h3>B2B Wholesale &amp; Commerce Catalogs</h3>
                <p>
                  High-speed e-commerce systems engineered for distributors, featuring dealer approval gates, tiered volume pricing, and instant RFQ quotes.
                </p>
                <ul className="bento-features">
                  <li>Multi-tier dealer pricing with wholesale MOQ rules</li>
                  <li>Spare parts compatibility matrix and fuzzy lookup</li>
                  <li>Direct WhatsApp and email quote dispatch pipeline</li>
                </ul>
                <div className="bento-stack-tags">
                  <span className="bento-tag">B2B Commerce</span>
                  <span className="bento-tag">Tiered Pricing</span>
                  <span className="bento-tag">RFQ Workflow</span>
                </div>
              </div>

              {/* Bento Card 5 */}
              <div className="bento-card">
                <div className="bento-top">
                  <div className="bento-icon-box">🌐</div>
                  <span className="bento-num">05</span>
                </div>
                <h3>Zero-Database Edge Cloud Hosting</h3>
                <p>
                  Deploy high-performance websites and client portals without paying monthly database hosting fees. Ultra-fast global CDN with zero connection limits.
                </p>
                <ul className="bento-features">
                  <li>Decoupled JSON schemas &amp; serverless edge API endpoints</li>
                  <li>Zero monthly database server costs and maintenance</li>
                  <li>Automated HTTPS/SSL certificates and custom domain binding</li>
                </ul>
                <div className="bento-stack-tags">
                  <span className="bento-tag">Zero-DB</span>
                  <span className="bento-tag">Vercel / Cloudflare</span>
                  <span className="bento-tag">Edge CDN</span>
                </div>
              </div>

              {/* Bento Card 6 */}
              <div className="bento-card">
                <div className="bento-top">
                  <div className="bento-icon-box">🤖</div>
                  <span className="bento-num">06</span>
                </div>
                <h3>AI Agent Pipelines &amp; Workflows</h3>
                <p>
                  Custom AI automation pipelines with mandatory human editorial review gates, bilingual content preparation, and multi-channel webhook dispatch.
                </p>
                <ul className="bento-features">
                  <li>Automated newsroom research, drafting &amp; SEO tagging</li>
                  <li>Mandatory human verification gates before publishing</li>
                  <li>Instant webhook alerts to WhatsApp Business API</li>
                </ul>
                <div className="bento-stack-tags">
                  <span className="bento-tag">AI Workflows</span>
                  <span className="bento-tag">Human-in-the-Loop</span>
                  <span className="bento-tag">Webhooks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            5. INTERACTIVE ARCHITECTURE STACKS ("HOW WE ARCHITECT")
            ================================================================= */}
        <section id="architectures" className="architecture-section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">SYSTEM ARCHITECTURES</span>
              <h2>Proven Production Architecture Stacks.</h2>
              <p>
                We build on battle-tested architectural flows designed for sub-second latency, deterministic data integrity, and operational simplicity.
              </p>
            </div>

            <div className="arch-switcher">
              <button
                type="button"
                className={`arch-btn ${activeArch === "web" ? "active" : ""}`}
                onClick={() => setActiveArch("web")}
              >
                Stack 01: Modern Web Apps
              </button>
              <button
                type="button"
                className={`arch-btn ${activeArch === "erp" ? "active" : ""}`}
                onClick={() => setActiveArch("erp")}
              >
                Stack 02: Fintech &amp; ERP
              </button>
              <button
                type="button"
                className={`arch-btn ${activeArch === "ai" ? "active" : ""}`}
                onClick={() => setActiveArch("ai")}
              >
                Stack 03: AI Automation OS
              </button>
            </div>

            <div className="arch-canvas">
              {activeArch === "web" && (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span className="eyebrow eyebrow-primary">STACK 01 FLOW</span>
                      <h3 style={{ fontSize: "1.45rem", fontWeight: 800 }}>Next.js 16 Edge &bull; Zero-DB Web Platform</h3>
                    </div>
                    <span className="status-badge live">Production Ready</span>
                  </div>

                  <div className="arch-flow-grid">
                    <div className="arch-node">
                      <div className="arch-node-tag">LAYER 01 &bull; CLIENT</div>
                      <strong>Next.js 16 App Router</strong>
                      <small>React 19 Server/Client components with static edge prerendering</small>
                    </div>
                    <div className="arch-node">
                      <div className="arch-node-tag">LAYER 02 &bull; API</div>
                      <strong>TypeScript Edge Routes</strong>
                      <small>Sub-20ms route handlers with strict Zod schema validation</small>
                    </div>
                    <div className="arch-node">
                      <div className="arch-node-tag">LAYER 03 &bull; STORAGE</div>
                      <strong>Decoupled JSON Schemas</strong>
                      <small>Structured schemas eliminating recurring database server overhead</small>
                    </div>
                    <div className="arch-node">
                      <div className="arch-node-tag">LAYER 04 &bull; INFRA</div>
                      <strong>Global Edge CDN</strong>
                      <small>Instant worldwide distribution with SSL &amp; automated CI/CD</small>
                    </div>
                  </div>

                  <div className="arch-guarantees-bar">
                    <span className="arch-guarantee-pill">✓ Sub-80ms Global Response</span>
                    <span className="arch-guarantee-pill">✓ ₹0 Monthly Database Maintenance</span>
                    <span className="arch-guarantee-pill">✓ 100% Mobile Responsive</span>
                    <span className="arch-guarantee-pill">✓ Full Schema.org SEO Markup</span>
                  </div>
                </>
              )}

              {activeArch === "erp" && (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span className="eyebrow eyebrow-primary">STACK 02 FLOW</span>
                      <h3 style={{ fontSize: "1.45rem", fontWeight: 800 }}>Fintech &amp; Microfinance Loan ERP</h3>
                    </div>
                    <span className="status-badge dev">In Development</span>
                  </div>

                  <div className="arch-flow-grid">
                    <div className="arch-node">
                      <div className="arch-node-tag">LAYER 01 &bull; PORTAL</div>
                      <strong>React Admin Dashboard</strong>
                      <small>Data grids, borrower KYC upload forms &amp; live transaction tables</small>
                    </div>
                    <div className="arch-node">
                      <div className="arch-node-tag">LAYER 02 &bull; ENGINE</div>
                      <strong>Deterministic Math Engine</strong>
                      <small>Zero-drift EMI, interest accrual, and dynamic penalty calculation</small>
                    </div>
                    <div className="arch-node">
                      <div className="arch-node-tag">LAYER 03 &bull; SECURITY</div>
                      <strong>Fine-Grained RBAC</strong>
                      <small>4-tier role separation with immutable activity audit logs</small>
                    </div>
                    <div className="arch-node">
                      <div className="arch-node-tag">LAYER 04 &bull; LEDGER</div>
                      <strong>MySQL InnoDB Ledgers</strong>
                      <small>Strict foreign keys &amp; double-entry accounting integrity</small>
                    </div>
                  </div>

                  <div className="arch-guarantees-bar">
                    <span className="arch-guarantee-pill">✓ Zero Rounding Drift Accuracy</span>
                    <span className="arch-guarantee-pill">✓ Tamper-Evident Audit Trails</span>
                    <span className="arch-guarantee-pill">✓ Instant Digital Receipting</span>
                    <span className="arch-guarantee-pill">✓ Role-Based Data Isolation</span>
                  </div>
                </>
              )}

              {activeArch === "ai" && (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span className="eyebrow eyebrow-primary">STACK 03 FLOW</span>
                      <h3 style={{ fontSize: "1.45rem", fontWeight: 800 }}>AI Newsroom OS &amp; Multi-Channel Publishing</h3>
                    </div>
                    <span className="status-badge planning">Architecture Ready</span>
                  </div>

                  <div className="arch-flow-grid">
                    <div className="arch-node">
                      <div className="arch-node-tag">LAYER 01 &bull; INGEST</div>
                      <strong>Topic &amp; Wire Ingestion</strong>
                      <small>Real-time news monitoring across RSS feeds, press releases &amp; AP feeds</small>
                    </div>
                    <div className="arch-node">
                      <div className="arch-node-tag">LAYER 02 &bull; SYNTHESIS</div>
                      <strong>LLM Agent Pipeline</strong>
                      <small>Multi-agent research and bilingual drafting (Hindi &amp; English)</small>
                    </div>
                    <div className="arch-node">
                      <div className="arch-node-tag">LAYER 03 &bull; GATE</div>
                      <strong>Human Review Gate</strong>
                      <small>Mandatory editorial verification checkpoint ensuring zero hallucinations</small>
                    </div>
                    <div className="arch-node">
                      <div className="arch-node-tag">LAYER 04 &bull; DISPATCH</div>
                      <strong>Multi-Channel Webhooks</strong>
                      <small>Automated distribution to WhatsApp Business, Meta &amp; Web CMS</small>
                    </div>
                  </div>

                  <div className="arch-guarantees-bar">
                    <span className="arch-guarantee-pill">✓ Zero Hallucination Editorial Gate</span>
                    <span className="arch-guarantee-pill">✓ Bilingual Hindi &amp; English Support</span>
                    <span className="arch-guarantee-pill">✓ Instant WhatsApp Broadcast</span>
                    <span className="arch-guarantee-pill">✓ Automated SEO &amp; Media Scripts</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* =================================================================
            6. PRODUCTION CASE STUDIES & FEATURED WORK (BROWSER FRAMES)
            ================================================================= */}
        <section id="portfolio" className="case-studies-section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow eyebrow-primary">PRODUCTION PORTFOLIO</span>
              <h2>Featured Production Systems &amp; Case Studies.</h2>
              <p>
                Explore real enterprise software systems, administrative portals, and web applications engineered by NarnaulOnline Studio.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="filter-bar">
              {["All", "AI & Automation", "Fintech & ERP", "E-Commerce & Wholesale", "Community"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-btn ${projectFilter === cat ? "active" : ""}`}
                  onClick={() => setProjectFilter(cat)}
                >
                  {cat === "All" ? "All Works (6)" : cat}
                </button>
              ))}
            </div>

            {/* Browser Mockup Cards Grid */}
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div key={project.id} className="browser-frame">
                  {/* Browser Window Header Bar */}
                  <div className="browser-top-bar">
                    <div className="browser-dots">
                      <span className="b-dot"></span>
                      <span className="b-dot"></span>
                      <span className="b-dot"></span>
                    </div>
                    <div className="browser-url-pill">
                      🔒 {project.url}
                    </div>
                    <span className={`status-badge ${project.statusClass}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Browser Body */}
                  <div className="browser-body">
                    <div className="project-category">{project.category}</div>
                    <h3>{project.title}</h3>
                    <p>{project.overview}</p>

                    <div className="problem-solution-box">
                      <strong>Engineered Solution</strong>
                      {project.solution}
                    </div>

                    <ul className="project-caps">
                      {project.capabilities.slice(0, 3).map((cap, idx) => (
                        <li key={idx}>{cap}</li>
                      ))}
                    </ul>

                    <div className="browser-footer">
                      <div className="project-stack-tags">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="p-stack-tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link href="/portfolio" className="btn btn-secondary btn-sm">
                        View Specs →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "44px" }}>
              <Link href="/portfolio" className="btn btn-primary btn-lg">
                Explore All 12+ Portfolio Systems &amp; Technical Roadmaps →
              </Link>
            </div>
          </div>
        </section>

        {/* =================================================================
            7. 4-STAGE ENGINEERING LIFECYCLE ("HOW WE BUILD")
            ================================================================= */}
        <section className="lifecycle-section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">DEVELOPMENT LIFECYCLE</span>
              <h2>How We Engineer &amp; Deliver Software.</h2>
              <p>
                Our 4-stage delivery framework guarantees complete architectural transparency, milestone progress, and seamless code handover.
              </p>
            </div>

            <div className="lifecycle-grid">
              <div className="lifecycle-card">
                <div className="lc-num">01</div>
                <h3>Architecture Blueprint</h3>
                <p>
                  We map out database schemas, API contracts, RBAC security roles, and user journeys into clear specifications before writing code.
                </p>
              </div>

              <div className="lifecycle-card">
                <div className="lc-num">02</div>
                <h3>Design &amp; Prototyping</h3>
                <p>
                  We implement design tokens, fluid typography, and interactive component states following Stripe and Apple design principles.
                </p>
              </div>

              <div className="lifecycle-card">
                <div className="lc-num">03</div>
                <h3>Full-Stack Engineering</h3>
                <p>
                  We write clean, strictly-typed Next.js and React code backed by robust APIs, deterministic math engines, and automated validation.
                </p>
              </div>

              <div className="lifecycle-card">
                <div className="lc-num">04</div>
                <h3>Edge Launch &amp; Support</h3>
                <p>
                  We deploy to global edge CDN, bind custom domains with SSL security, and provide complete documentation and ongoing code support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            8. INTERACTIVE SCOPE & TIMELINE ESTIMATOR (STRIPE STYLE)
            ================================================================= */}
        <section id="estimator" className="estimator-section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow eyebrow-primary">INTERACTIVE ESTIMATOR</span>
              <h2>Configure Your Project Scope &amp; Timeline.</h2>
              <p>
                Select your software tier, toggle optional enterprise add-ons, and calculate estimated delivery timeframes instantly.
              </p>
            </div>

            <div className="estimator-grid">
              {/* Left: Package Selector and Addons */}
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "14px" }}>
                  Step 1: Select Software Package
                </h3>

                <div className="package-cards-grid">
                  {projectPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`package-selectable-card ${selectedPackageId === pkg.id ? "selected" : ""}`}
                      onClick={() => setSelectedPackageId(pkg.id)}
                    >
                      <div className="package-card-badge">{pkg.badge}</div>
                      <h4>{pkg.title}</h4>
                      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", margin: "4px 0 8px" }}>
                        {pkg.tagline}
                      </p>
                      <span className="package-timeline-tag">
                        ⏱ ~{pkg.timelineDays} Days Delivery
                      </span>
                    </div>
                  ))}
                </div>

                <div className="addons-header">Step 2: Optional Enterprise Modules</div>

                <div className="addons-list">
                  {optionalAddons.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        className={`addon-row ${isChecked ? "active" : ""}`}
                        onClick={() => toggleAddon(addon.id)}
                      >
                        <div className="addon-info">
                          <div className="addon-custom-check">
                            {isChecked ? "✓" : ""}
                          </div>
                          <span className="addon-label-text">{addon.label}</span>
                        </div>
                        <span className="addon-days-chip">+{addon.daysAdded} Days</span>
                      </div>
                    );
                  })}
                </div>

                <div style={{ marginTop: "24px" }}>
                  <div className="addons-header">Step 3: Delivery Sprint Speed</div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {[
                      { id: "standard", label: "Standard Agile Sprint" },
                      { id: "express", label: "⚡ Express Fast-Track (-3d)" },
                      { id: "flexible", label: "Flexible Milestone (+5d)" },
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setTimelineMode(mode.id as any)}
                        style={{
                          padding: "8px 14px",
                          borderRadius: "var(--radius-sm)",
                          border: `1.5px solid ${timelineMode === mode.id ? "var(--accent-blue)" : "var(--border-hairline)"}`,
                          background: timelineMode === mode.id ? "var(--accent-blue-subtle)" : "#FFFFFF",
                          color: timelineMode === mode.id ? "var(--accent-blue)" : "var(--text-secondary)",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Sticky Summary Card */}
              <div className="estimator-summary-card">
                <div className="est-head">
                  <span>ESTIMATED DELIVERY TIMELINE</span>
                  <h3>{currentPackage.title}</h3>
                </div>

                <div className="est-metric-display">
                  <span className="est-days-large">~{totalDays} Days</span>
                  <small>Estimated completion based on selected scope</small>
                </div>

                <div className="est-deliverables-title">Included Architectural Deliverables:</div>
                <ul className="est-deliverables-list">
                  {currentPackage.deliverables.map((del, idx) => (
                    <li key={idx}>{del}</li>
                  ))}
                  {selectedAddons.map((addonId) => {
                    const addon = optionalAddons.find((a) => a.id === addonId);
                    return addon ? <li key={addonId}>{addon.label}</li> : null;
                  })}
                </ul>

                <div className="est-actions">
                  <a
                    href={`https://wa.me/919416341097?text=Hello%20NarnaulOnline%20Team%2C%20I%20configured%20a%20project%20scope%20on%20your%20website%3A%0A-%20Package%3A%20${encodeURIComponent(currentPackage.title)}%0A-%20Estimated%20Days%3A%20${totalDays}%0A-%20Addons%3A%20${encodeURIComponent(selectedAddons.join(", "))}%0AI%20would%20like%20to%20discuss%20initiating%20this%20build.`}
                    className="btn btn-whatsapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    💬 Lock in Scope via WhatsApp
                  </a>
                  <a href="#contact" className="btn btn-secondary">
                    ✉ Request Formal Written Proposal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            9. INTERACTIVE DEVELOPER TERMINAL / CLI WIDGET
            ================================================================= */}
        <section className="terminal-section">
          <div className="container">
            <div className="terminal-window">
              <div className="term-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="term-title">narnaulonline-studio &bull; zsh &bull; 80&times;24</div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    type="button"
                    onClick={() => setActiveCliCommand("create")}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: activeCliCommand === "create" ? "#38BDF8" : "#1E293B",
                      color: activeCliCommand === "create" ? "#0F172A" : "#94A3B8",
                      fontWeight: 700,
                    }}
                  >
                    $ npx create
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCliCommand("status")}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: activeCliCommand === "status" ? "#38BDF8" : "#1E293B",
                      color: activeCliCommand === "status" ? "#0F172A" : "#94A3B8",
                      fontWeight: 700,
                    }}
                  >
                    $ git status
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCliCommand("build")}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: activeCliCommand === "build" ? "#38BDF8" : "#1E293B",
                      color: activeCliCommand === "build" ? "#0F172A" : "#94A3B8",
                      fontWeight: 700,
                    }}
                  >
                    $ npm build
                  </button>
                </div>
              </div>

              <div className="term-body">
                {activeCliCommand === "create" && (
                  <>
                    <div className="term-line">
                      <span className="term-prompt">user@dev-machine:~$</span> <span className="term-cmd">npx @narnaulonline/create-app my-enterprise-portal</span>
                    </div>
                    <div className="term-line term-success">
                      ✓ Scaffolding Next.js 16 + React 19 + TypeScript (Turbopack)
                    </div>
                    <div className="term-line term-success">
                      ✓ Injected Stripe &amp; Apple inspired Crisp Light design tokens
                    </div>
                    <div className="term-line term-success">
                      ✓ Connected deterministic business math engines &amp; RBAC rules
                    </div>
                    <div className="term-line term-success">
                      ✓ Zero-DB serverless edge API routes initialized (0 cold starts)
                    </div>
                    <div className="term-line term-muted">
                      Ready to launch: cd my-enterprise-portal &amp;&amp; npm run dev
                    </div>
                  </>
                )}

                {activeCliCommand === "status" && (
                  <>
                    <div className="term-line">
                      <span className="term-prompt">user@dev-machine:~$</span> <span className="term-cmd">git status -s</span>
                    </div>
                    <div className="term-line term-success">
                      M app/page.tsx (Converted to high-end Web Developer Agency)
                    </div>
                    <div className="term-line term-success">
                      M app/globals.css (Applied Crisp Modern Light design system)
                    </div>
                    <div className="term-line term-success">
                      M app/layout.tsx (Configured Inter &amp; JetBrains Mono)
                    </div>
                    <div className="term-line term-muted">
                      Branch &apos;main&apos; up to date with origin. 0 lint errors found.
                    </div>
                  </>
                )}

                {activeCliCommand === "build" && (
                  <>
                    <div className="term-line">
                      <span className="term-prompt">user@dev-machine:~$</span> <span className="term-cmd">npm run build</span>
                    </div>
                    <div className="term-line term-success">
                      ▲ Next.js 16.4.3 (Turbopack)
                    </div>
                    <div className="term-line term-success">
                      ✓ Compiled in 1.4s &bull; 0 TypeScript errors
                    </div>
                    <div className="term-line term-success">
                      ✓ Edge distribution: 14 edge lambdas deployed to Global CDN
                    </div>
                    <div className="term-line term-muted">
                      Build size: 78.4 kB gzip &bull; 100/100 Lighthouse Performance
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            10. DIRECT CONSULTATION & CONTACT DOCK
            ================================================================= */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-layout">
              {/* Left: Contact Details */}
              <div className="contact-copy">
                <span className="eyebrow eyebrow-primary">LET&apos;S CONNECT</span>
                <h2>Start Your Digital Engineering Consultation.</h2>
                <p>
                  Have a web application, administrative ERP, or wholesale e-commerce platform to build? Reach out directly to our engineering desk for an architectural blueprint and scope breakdown.
                </p>

                <div className="direct-channels-list">
                  <a
                    href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20reviewed%20your%20software%20agency%20website%20and%20want%20to%20discuss%20a%20project."
                    className="channel-card"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="channel-icon" style={{ color: "#10B981" }}>💬</div>
                    <div className="channel-details">
                      <strong>WhatsApp Engineering Desk</strong>
                      <span>+91 9416341097 &bull; Instant chat &amp; voice consult</span>
                    </div>
                  </a>

                  <a href="tel:+919416341097" className="channel-card">
                    <div className="channel-icon" style={{ color: "#2563EB" }}>📞</div>
                    <div className="channel-details">
                      <strong>Direct Phone Consultation</strong>
                      <span>+91 9416341097 &bull; Lead Architect Amit Jangid</span>
                    </div>
                  </a>

                  <a href="mailto:hello@narnaulonline.com" className="channel-card">
                    <div className="channel-icon" style={{ color: "#E66A1B" }}>✉</div>
                    <div className="channel-details">
                      <strong>Email Inquiries</strong>
                      <span>hello@narnaulonline.com &bull; Written proposals &amp; RFP</span>
                    </div>
                  </a>

                  <div className="channel-card">
                    <div className="channel-icon" style={{ color: "#64748B" }}>📍</div>
                    <div className="channel-details">
                      <strong>Studio Location</strong>
                      <span>Station Road, Narnaul, Haryana (123001) &bull; Global Remote</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="contact-form-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="pre-live-dot" title="Active Intake Desk"></span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-blue)", letterSpacing: "0.06em" }}>
                      ENGINEERING INTAKE DESK
                    </span>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#059669", background: "#ECFDF5", padding: "2px 8px", borderRadius: "9999px", fontWeight: 600 }}>
                    ⚡ SLA: &lt; 2h Response
                  </span>
                </div>

                <h3 style={{ fontSize: "1.65rem", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text-primary)", marginBottom: "6px" }}>
                  Send Project Inquiry
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: "1.5", marginBottom: "26px" }}>
                  Configure your specifications below to receive a custom architectural blueprint, milestone plan, and estimate from Lead Architect <strong>Amit Jangid</strong>.
                </p>

                <AjaxContactForm
                  defaultService={currentPackage.title}
                  scopeSummary={`${currentPackage.title} (~${totalDays} days delivery)`}
                  sourceContext="Homepage Web Developer Agency"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}