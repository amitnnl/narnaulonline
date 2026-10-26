"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

const organizationPillars = [
  {
    num: "01",
    title: "Zero-Database Architecture",
    desc: "Engineered with decoupled JSON schemas, client-side state, and serverless APIs — eliminating recurring database hosting fees and infrastructure maintenance.",
  },
  {
    num: "02",
    title: "Enterprise Admin Portals",
    desc: "Intuitive administrative backends with Role-Based Access Control (RBAC), multi-tier user permissions, sortable data tables, and exportable reports.",
  },
  {
    num: "03",
    title: "Deterministic Business Math",
    desc: "Precision financial algorithms for loan amortization, EMI schedules, interest accrual, and GST billing with zero floating-point rounding drift.",
  },
  {
    num: "04",
    title: "Wholesale & E-Commerce Catalogs",
    desc: "High-speed product catalog systems with multi-tier dealer pricing, spare parts compatibility schemas, and direct WhatsApp RFQ ordering.",
  },
  {
    num: "05",
    title: "Full-Lifecycle Engineering",
    desc: "From architecture blueprinting and UI/UX design to production deployment, custom DNS configuration, SSL security, and ongoing code support.",
  },
  {
    num: "06",
    title: "Sub-Second Edge Performance",
    desc: "Built on Next.js 16 with Turbopack, static prerendering, and edge CDN distribution for instant page loads and 100% mobile responsiveness.",
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
  categoryKey: "frontend" | "zerodb" | "engines" | "ecommerce" | "devops";
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
    id: "zerodb",
    categoryKey: "zerodb",
    domain: "Serverless & Decoupled Architecture",
    title: "Zero-Database & Serverless Engineering",
    tagline: "Decoupled static data schemas, client-side persistence, and serverless API endpoints.",
    icon: "⚡",
    badge: "Zero-DB Core",
    summary:
      "Developing applications that run without active database servers — utilizing client-side state, decoupled JSON feeds, and serverless edge functions for 100% uptime and zero DB maintenance fees.",
    implementedStack: [
      { name: "Decoupled JSON Schemas", role: "Structured Content" },
      { name: "Client-Side Local Storage", role: "State Persistence" },
      { name: "FormSubmit Integration", role: "Secure Form Routing" },
      { name: "Serverless Edge Functions", role: "Stateless APIs" },
      { name: "Static Site Generation (SSG)", role: "Pre-Rendered HTML" },
      { name: "WhatsApp Direct Webhooks", role: "Instant Inquiries" },
    ],
    evaluatedStack: [
      { name: "SQLite / IndexedDB", note: "Evaluated for browser-native relational client storage" },
      { name: "Edge Middleware", note: "Evaluated for dynamic geo-routing without centralized servers" },
    ],
    keyCapabilities: [
      "Zero monthly database hosting bills: applications deploy on standard static/serverless hosts.",
      "Instant page response with zero cold-start database socket latencies or connection pool limits.",
      "Tamper-proof client state and secure external routing via isolated endpoint proxies.",
    ],
  },
  {
    id: "engines",
    categoryKey: "engines",
    domain: "Business Logic & Financial Precision",
    title: "Business Logic & Financial Math Engines",
    tagline: "Deterministic calculation algorithms, double-entry tracking, and role-based access.",
    icon: "⚙️",
    badge: "Business Engines",
    summary:
      "Architecting precision financial calculation routines, loan amortization schedules, role-based authorization gates, and clean operational contracts.",
    implementedStack: [
      { name: "Deterministic Math Engine", role: "Zero-Drift Calculations" },
      { name: "Role-Based Access Control", role: "RBAC Permission Gates" },
      { name: "Amortization Algorithms", role: "Loan & EMI Schedules" },
      { name: "GST & Tax Calculation Logic", role: "Commercial Invoicing" },
      { name: "Audit Trail Logging", role: "Immutable Event Logs" },
      { name: "Session & Token Security", role: "Access Verification" },
    ],
    evaluatedStack: [
      { name: "BigNumber.js", note: "Evaluated for arbitrary-precision decimal banking arithmetic" },
      { name: "Client-Side Cryptography", note: "Evaluated for browser-based sensitive field obfuscation" },
    ],
    keyCapabilities: [
      "Multi-tier authorization models (Super Admin, Branch Manager, Agent, Auditor) with permission boundaries.",
      "Deterministic financial algorithms for amortization, interest accrual, and zero-drift EMI calculations.",
      "Secure request sanitization, client-side input validation, and structured error boundaries.",
    ],
  },
  {
    id: "ecommerce",
    categoryKey: "ecommerce",
    domain: "Commercial Systems & Catalogs",
    title: "E-Commerce & Wholesale Product Systems",
    tagline: "Multi-tier pricing catalogs, B2B wholesale workflows, and compatibility matrices.",
    icon: "🛒",
    badge: "Commerce Layer",
    summary:
      "Structuring high-speed product catalogs with multi-tier dealer pricing, spare parts compatibility filters, and 1-click WhatsApp order generation without database bottlenecks.",
    implementedStack: [
      { name: "Multi-Tier Pricing Logic", role: "Dealer & Retail Rates" },
      { name: "Compatibility Matrices", role: "Spare Parts Matching" },
      { name: "Instant Filter Engines", role: "Multi-Attribute Search" },
      { name: "Wholesale RFQ Builder", role: "Bulk Order Generation" },
      { name: "Direct WhatsApp Checkout", role: "One-Click Orders" },
      { name: "Decoupled Product Schemas", role: "Zero-DB Catalogs" },
    ],
    evaluatedStack: [
      { name: "Static Search Indexing", note: "Evaluated for sub-5ms client search across 10,000+ SKU catalogs" },
      { name: "Shopify Buy SDK", note: "Evaluated for headless checkout integration" },
    ],
    keyCapabilities: [
      "Instant filtering across thousands of product SKUs without database latency or query limits.",
      "Dynamic B2B wholesale order calculation with volume tiers and minimum order quantities (MOQ).",
      "Seamless WhatsApp order generation formatting complete itemized lists for instant fulfillment.",
    ],
  },
  {
    id: "devops",
    categoryKey: "devops",
    domain: "Cloud & Release Operations",
    title: "Deployment, Cloud & Release Engineering",
    tagline: "Optimized build pipelines, zero-DB hosting configuration, and production uptime.",
    icon: "🚀",
    badge: "Cloud & Release",
    summary:
      "Managing the deployment lifecycle from Git to global CDN distribution, configuring custom domains, securing SSL certificates, and ensuring zero-maintenance hosting reliability.",
    implementedStack: [
      { name: "Git & GitHub Workflows", role: "Version Control & CI" },
      { name: "Next.js Build Pipelines", role: "Bundle Optimization" },
      { name: "Vercel & Edge Deployment", role: "Global CDN Edge" },
      { name: "Hostinger Cloud / VPS", role: "Web & API Hosting" },
      { name: "Custom Domain & SSL Setup", role: "HTTPS Security" },
      { name: "Zero-DB Hosting Config", role: "Cost-Free Maintenance" },
    ],
    evaluatedStack: [
      { name: "Cloudflare Pages", note: "Evaluated for global ultra-low-latency edge rendering" },
      { name: "GitHub Actions CI/CD", note: "Evaluated for automated testing and preview deploys" },
    ],
    keyCapabilities: [
      "Zero server maintenance: serverless and static hosting ensures 100% uptime without database crashed states.",
      "Fast diagnostics for build errors, dependency updates, and Next.js Turbopack optimization.",
      "Custom nameservers, DNS propagation, automatic SSL certificate provisioning, and HTTP hardening.",
    ],
  },
];

const architecturalStacks: ArchitecturalStack[] = [
  {
    id: "web-app",
    number: "STACK 01",
    category: "Zero-DB Web Applications",
    title: "Next.js Edge Web Platform (100% Zero-DB)",
    tagline: "Sub-second load times, SEO-optimized SSR, and serverless edge delivery.",
    provenIn: "Built For: NarnaulOnline Platform & Custom Client Web Portals",
    status: "Production Ready",
    layers: [
      { label: "Client & UI", tech: "Next.js 16 (Turbopack) + React 19", detail: "Component architecture with DESIGN.md tokens & Framer Motion" },
      { label: "API & Logic", tech: "Edge API Routes + FormSubmit", detail: "Secure contact routing, serverless endpoints & payload validation" },
      { label: "Content Data", tech: "Decoupled JSON Schemas", detail: "Structured data feeds, responsive image optimization & static caching" },
      { label: "Deployment", tech: "Vercel Edge / Hostinger Cloud", detail: "Global SSL, custom DNS routing & zero monthly DB fees" },
    ],
    guarantees: [
      "Zero database server maintenance or monthly database hosting bills",
      "Sub-second First Contentful Paint with hybrid SSR and static prerendering",
      "100% uptime with static edge fallback and responsive layout",
    ],
  },
  {
    id: "loan-erp",
    number: "STACK 02",
    category: "Enterprise Systems & ERP",
    title: "Enterprise Admin Portal & Financial Ledger",
    tagline: "Deterministic amortization calculations, immutable audit trails, and strict RBAC.",
    provenIn: "Built For: Microfinance & Multi-Loan Management ERP",
    status: "Active ERP Architecture",
    layers: [
      { label: "Client Portal", tech: "React Administrative SPA", detail: "Loan application forms, repayment tables & KYC verification views" },
      { label: "Auth & RBAC", tech: "Client-Side RBAC & Session State", detail: "Multi-tier permissions (Admin, Manager, Agent) & token validation" },
      { label: "Math Engine", tech: "Deterministic Financial Algorithms", detail: "Zero-drift EMI calculations, interest accrual & penalty logic" },
      { label: "Data Export", tech: "Secure Client Storage & PDF/Excel", detail: "Double-entry transaction ledgers, receipt generation & export" },
    ],
    guarantees: [
      "Strict financial arithmetic accuracy — zero lost repayments or floating-point drift",
      "Granular permission gates preventing unauthorized loan approvals or edits",
      "Independent operation without requiring heavy database server provisioning",
    ],
  },
  {
    id: "ecommerce-stack",
    number: "STACK 03",
    category: "Commercial Systems & Catalogs",
    title: "E-Commerce Wholesale & Product Catalog System",
    tagline: "High-speed product catalog with multi-tier dealer pricing and instant WhatsApp orders.",
    provenIn: "Built For: B2B Industrial Tools & Wholesale Commerce",
    status: "Production Ready",
    layers: [
      { label: "Catalog UI", tech: "Next.js Responsive Grid UI", detail: "Multi-attribute search, filter drawer & itemized product cards" },
      { label: "Data Store", tech: "Decoupled Structured JSON", detail: "Static catalog schema with spare parts compatibility matrices" },
      { label: "Pricing Logic", tech: "Dynamic Tiered Math Engine", detail: "Wholesale B2B volume discounts, retail rates & MOQ validation" },
      { label: "Checkout", tech: "Direct WhatsApp & Email Dispatch", detail: "One-click RFQ quote generation and WhatsApp order routing" },
    ],
    guarantees: [
      "Zero database bottlenecks during high-traffic product browsing campaigns",
      "Instant multi-tier pricing calculation across thousands of SKUs",
      "Direct WhatsApp dispatch formatting complete itemized orders for instant fulfillment",
    ],
  },
];

const serviceOfferings = [
  {
    id: "01",
    title: "Zero-Database Business Web Applications",
    desc: "Custom-built, lightning-fast web applications engineered with Next.js or React, tailored to your specifications with zero database server costs.",
  },
  {
    id: "02",
    title: "Custom Admin Dashboards & Portals",
    desc: "Intuitive administrative backends with role-based permissions, user controls, data tables, and operational business overviews.",
  },
  {
    id: "03",
    title: "E-Commerce & Wholesale Product Catalogs",
    desc: "Multi-tier dealer product catalogs, wholesale RFQ workflows, spare parts compatibility systems, and WhatsApp direct checkout.",
  },
  {
    id: "04",
    title: "Financial Calculation & Loan Math Engines",
    desc: "Deterministic financial math engines for loan amortization, EMI schedules, interest accrual, and GST billing with zero rounding drift.",
  },
  {
    id: "05",
    title: "Digital Business Transformation & Intake",
    desc: "Digitizing manual paper workflows into streamlined web forms, customer verification gates, and instant WhatsApp notifications.",
  },
  {
    id: "06",
    title: "Cloud Hosting, Domain & Ongoing Support",
    desc: "Complete setup on Vercel or Hostinger, custom domain binding, SSL security, performance optimization, and reliable ongoing support.",
  },
];

interface ProjectPackage {
  id: string;
  title: string;
  tagline: string;
  timelineDays: number;
  badge: string;
  description: string;
  includedDeliverables: string[];
}

interface OptionalFeature {
  id: string;
  label: string;
  daysAdded: number;
  badge: string;
}

const projectPackages: ProjectPackage[] = [
  {
    id: "starter",
    title: "Starter Business Website",
    tagline: "DESIGN.md compliant responsive business presence",
    timelineDays: 5,
    badge: "Essential Setup",
    description: "Fast, responsive business web presence with contact forms, SEO markup, and WhatsApp routing.",
    includedDeliverables: [
      "Custom responsive design (DESIGN.md compliant)",
      "Open Sans typography & fiery modern accents",
      "Lead capture inquiry form with email alerts",
      "WhatsApp direct messaging integration",
      "100% Zero-Database deployment (Vercel/Hostinger)",
    ],
  },
  {
    id: "webapp",
    title: "Full-Stack Web App (SPA / SSR)",
    tagline: "Dynamic, reactive single-page or hybrid application",
    timelineDays: 14,
    badge: "High Growth",
    description: "Component-driven web app with dynamic client state, interactive screens, and lightning-fast edge performance.",
    includedDeliverables: [
      "Next.js App Router & React 19 architecture",
      "Interactive client state & responsive views",
      "Sub-second load times via Turbopack optimization",
      "Custom UI components with micro-animations",
      "Zero-maintenance serverless hosting setup",
    ],
  },
  {
    id: "dashboard",
    title: "Custom Admin Dashboard & Portal",
    tagline: "Role-based administrative control & records",
    timelineDays: 20,
    badge: "Operations Ready",
    description: "Administrative command center with role-based permissions, data filtering, and exportable business reports.",
    includedDeliverables: [
      "Multi-tier Role-Based Access Control (RBAC)",
      "Interactive data tables with sort & search",
      "Secure session & token authentication logic",
      "Client-side transactional records & exports",
      "Zero database hosting overhead required",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Wholesale Catalog",
    tagline: "Multi-tier pricing, RFQ quotes & order flow",
    timelineDays: 25,
    badge: "Commercial Grade",
    description: "High-speed product catalog with wholesale B2B pricing tiers, RFQ order builder, and WhatsApp direct checkout.",
    includedDeliverables: [
      "Multi-tier dealer & retail pricing logic",
      "Product specification & compatibility filters",
      "Wholesale cart & instant RFQ generation",
      "Direct WhatsApp & email order dispatch",
      "Decoupled JSON product schema (Zero-DB)",
    ],
  },
  {
    id: "enterprise",
    title: "Financial Loan & Ledger ERP",
    tagline: "Deterministic amortization & double-entry tracking",
    timelineDays: 30,
    badge: "Enterprise Suite",
    description: "Complete financial operations platform with zero-drift loan EMI algorithms, borrower KYC, and transaction ledgers.",
    includedDeliverables: [
      "Deterministic loan amortization calculations",
      "Borrower KYC & repayment tracking ledgers",
      "Zero floating-point rounding drift engine",
      "Audit trail logs & PDF/Excel receipt export",
      "Fully decoupled architecture with high availability",
    ],
  },
];

const optionalAddons: OptionalFeature[] = [
  {
    id: "rbac",
    label: "Advanced Multi-Tier RBAC (4+ Roles)",
    daysAdded: 3,
    badge: "Security",
  },
  {
    id: "invoicing",
    label: "Dynamic Invoicing & GST Math Engine",
    daysAdded: 4,
    badge: "Accounting",
  },
  {
    id: "multichannel",
    label: "WhatsApp Business API & Webhook Dispatch",
    daysAdded: 2,
    badge: "Messaging",
  },
  {
    id: "customdomain",
    label: "Custom Domain, SSL & Edge CDN Setup",
    daysAdded: 1,
    badge: "DevOps",
  },
  {
    id: "pwa",
    label: "Progressive Web App (PWA) Offline Support",
    daysAdded: 4,
    badge: "Mobile Ready",
  },
];

export default function HomePage() {
  const [activeDomain, setActiveDomain] = useState<string>("all");
  const [selectedPackageId, setSelectedPackageId] = useState<string>("starter");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["customdomain"]);
  const [timelineMode, setTimelineMode] = useState<"standard" | "express" | "flexible">("standard");

  const currentPackage = projectPackages.find((p) => p.id === selectedPackageId) || projectPackages[0];
  const calculatedDays = Math.max(3, currentPackage.timelineDays + selectedAddons.reduce((sum, id) => sum + (optionalAddons.find((a) => a.id === id)?.daysAdded || 0), 0) + (timelineMode === "express" ? -3 : timelineMode === "flexible" ? 5 : 0));

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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
              <div className="org-hero-badge">
                <span className="org-dot"></span>
                <span>FULL-STAGE DIGITAL DEVELOPMENT ORGANIZATION</span>
                <span className="zero-db-tag">ZERO-DB DEPLOYMENT READY</span>
              </div>

              <span className="eyebrow">NARNAULONLINE • FOUNDED & DIRECTED BY AMIT JANGID</span>
              <h1>Building Production Software Without Database Maintenance Overhead.</h1>
              <p>
                <strong>NarnaulOnline</strong> is a full-stage digital software development organization delivering
                responsive web applications, custom administrative ERPs, wholesale e-commerce platforms, and high-performance
                business software. Engineered with modern decoupled, serverless architectures, tailored milestone scopes, and zero database server costs.
              </p>

              <div className="hero-actions">
                <a href="#estimator" className="btn btn-primary">
                  ⚡ CONFIGURE SYSTEM SCOPE
                </a>
                <a href="#stacks" className="btn btn-secondary">
                  VIEW ARCHITECTURAL STACKS
                </a>
                <a
                  href="https://wa.me/919416341097?text=Hello%20NarnaulOnline%20Team%2C%20I%20would%20like%20to%20discuss%20a%20software%20development%20project."
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 WhatsApp Direct (+91 9416341097)
                </a>
              </div>

              <ul className="hero-trust">
                <li>100% Zero-Database deployment options: 0 monthly database fees & zero connection limits</li>
                <li>Full-cycle delivery: architecture blueprinting, DESIGN.md tokens, and production code handover</li>
                <li>Complex business portals, financial loan ERPs, B2B wholesale commerce & catalog systems</li>
              </ul>
            </div>

            <div className="hero-visual reveal">
              <div className="focus-console">
                <div className="console-header">
                  <div className="console-header-info">
                    <span className="console-eyebrow">
                      ORGANIZATION CAPABILITIES & DISCIPLINES
                    </span>
                    <strong style={{ display: "block", fontSize: "1.25rem", color: "var(--secondary)" }}>
                      NarnaulOnline
                    </strong>
                    <span style={{ fontSize: "0.86rem", color: "var(--text-muted)" }}>
                      Full-Stage Digital Software Development Organization
                    </span>
                  </div>
                  <span className="live-indicator">Zero-DB Ready</span>
                </div>

                <div className="focus-grid">
                  <div className="focus-item">
                    <span className="focus-item-icon">🌐</span>
                    <strong>Zero-DB Web Apps</strong>
                    <small>Next.js 16, React 19, Serverless Edge</small>
                  </div>

                  <div className="focus-item">
                    <span className="focus-item-icon">💼</span>
                    <strong>Admin Portals & ERPs</strong>
                    <small>Role-based access & financial ledgers</small>
                  </div>

                  <div className="focus-item">
                    <span className="focus-item-icon">🛒</span>
                    <strong>B2B / B2C Catalogs</strong>
                    <small>Tiered pricing, compatibility & RFQs</small>
                  </div>

                  <div className="focus-item">
                    <span className="focus-item-icon">⚙️</span>
                    <strong>Deterministic Math</strong>
                    <small>Zero-drift EMI, amortization & billing</small>
                  </div>

                  <div className="focus-item">
                    <span className="focus-item-icon">🚀</span>
                    <strong>Rapid Sprints</strong>
                    <small>Milestone delivery & agile sprints</small>
                  </div>

                  <div className="focus-item">
                    <span className="focus-item-icon">🛡️</span>
                    <strong>100% Uptime Guarantee</strong>
                    <small>Global edge CDN & serverless fallback</small>
                  </div>
                </div>

                <div className="console-meta-bar">
                  <div>
                    <span style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--primary)", display: "block", fontWeight: 700 }}>
                      Organization
                    </span>
                    <strong>NarnaulOnline</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--primary)", display: "block", fontWeight: 700 }}>
                      Leadership
                    </span>
                    <strong>Amit Jangid</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--primary)", display: "block", fontWeight: 700 }}>
                      Engagement
                    </span>
                    <strong>Custom Scope</strong>
                  </div>
                </div>
              </div>

              <div className="hero-companion-chips">
                <div className="companion-chip">
                  <span>Zero-DB Architecture</span>
                  <strong>No Database Servers Needed</strong>
                  <small>Instant deployment on Vercel, Hostinger or Cloudflare</small>
                </div>

                <div className="companion-chip">
                  <span>Full-Stage Support</span>
                  <strong>From Prototype to Enterprise</strong>
                  <small>Agile sprints, code handover & SLA reliability</small>
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

        {/* Organizational Pillars & Disciplines */}
        <section id="strengths" className="services" style={{ background: "var(--surface-container-low)" }}>
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Organizational Engineering Pillars</span>
              <h2>Core Disciplines of Our Software Architecture.</h2>
              <p style={{ maxWidth: "720px", color: "var(--muted)", margin: "14px auto 0" }}>
                Built on production deployments, addressing operational bottlenecks with zero-database efficiency rather than superficial aesthetics.
              </p>
            </div>

            <div className="card-grid">
              {organizationPillars.map((pillar) => (
                <div key={pillar.num} className="strength-card reveal">
                  <span className="strength-num">Pillar {pillar.num}</span>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--secondary)", margin: "8px 0 10px" }}>
                    {pillar.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.96rem", lineHeight: "1.6" }}>
                    {pillar.desc}
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
        <div id="skills" style={{ scrollMarginTop: "80px" }} />
        <section id="stacks" className="services competencies-section" style={{ scrollMarginTop: "80px" }}>
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
                className={`domain-tab-btn ${activeDomain === "zerodb" ? "active" : ""}`}
                onClick={() => setActiveDomain("zerodb")}
              >
                <span>⚡ Zero-DB Systems</span>
                <span className="domain-tab-count">1</span>
              </button>
              <button
                type="button"
                className={`domain-tab-btn ${activeDomain === "engines" ? "active" : ""}`}
                onClick={() => setActiveDomain("engines")}
              >
                <span>⚙️ Business Engines</span>
                <span className="domain-tab-count">1</span>
              </button>
              <button
                type="button"
                className={`domain-tab-btn ${activeDomain === "ecommerce" ? "active" : ""}`}
                onClick={() => setActiveDomain("ecommerce")}
              >
                <span>🛒 E-Commerce</span>
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

        {/* Interactive System Scope & Delivery Configurator (Zero-DB Architecture) */}
        <section id="estimator" className="services" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Zero-Database Scope & Delivery Configurator</span>
              <h2>Configure Your System Specifications & Delivery Milestones</h2>
              <p>
                Select your core application architecture, functional modules, and delivery timeline preferences to generate a formal scope specification and receive a tailored proposal directly from our engineering team.
              </p>
            </div>

            <div className="estimator-container">
              <div className="estimator-layout">
                {/* Left Column: Scope & Feature Configurator */}
                <div>
                  {/* Step 1: Base System Package */}
                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary)" }}>
                        Step 1: Choose Core Application Architecture
                      </span>
                      <span className="zero-db-tag">Zero Database Server Needed</span>
                    </div>

                    <div style={{ display: "grid", gap: "10px" }}>
                      {projectPackages.map((pkg) => {
                        const isSelected = pkg.id === selectedPackageId;
                        return (
                          <div
                            key={pkg.id}
                            onClick={() => setSelectedPackageId(pkg.id)}
                            className={`estimator-option-btn ${isSelected ? "active" : ""}`}
                            style={{
                              padding: "14px 16px",
                              cursor: "pointer",
                              textAlign: "left",
                              transition: "all 0.25s ease",
                            }}
                          >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
                              <div>
                                <span style={{ fontSize: "0.78rem", fontWeight: "700", padding: "3px 8px", borderRadius: "12px", background: isSelected ? "var(--primary)" : "var(--line)", color: isSelected ? "#fff" : "var(--muted)", marginRight: "8px" }}>
                                  {pkg.badge}
                                </span>
                                <strong style={{ fontSize: "1.04rem", color: isSelected ? "var(--primary)" : "var(--secondary)" }}>
                                  {pkg.title}
                                </strong>
                              </div>
                              <div style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                                <div style={{ fontSize: "0.92rem", fontWeight: "700", color: "var(--primary)" }}>
                                  ~{pkg.timelineDays} Days Sprint
                                </div>
                                <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
                                  Custom Scope Quote
                                </div>
                              </div>
                            </div>
                            <p style={{ fontSize: "0.86rem", color: "var(--text-muted)", margin: "0 0 8px 0", lineHeight: "1.4" }}>
                              {pkg.description}
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                              {pkg.includedDeliverables.map((item, idx) => (
                                <span
                                  key={idx}
                                  style={{
                                    fontSize: "0.74rem",
                                    padding: "2px 8px",
                                    borderRadius: "10px",
                                    background: isSelected ? "rgba(240, 77, 12, 0.08)" : "var(--surface)",
                                    border: `1px solid ${isSelected ? "rgba(240, 77, 12, 0.2)" : "var(--line)"}`,
                                    color: "var(--text-muted)",
                                  }}
                                >
                                  ✓ {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Optional Architectural Add-ons */}
                  <div style={{ marginBottom: "16px" }}>
                    <span style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary)", marginBottom: "10px" }}>
                      Step 2: Add-on Capabilities & Functional Modules
                    </span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "8px" }}>
                      {optionalAddons.map((addon) => {
                        const isChecked = selectedAddons.includes(addon.id);
                        return (
                          <div
                            key={addon.id}
                            onClick={() => toggleAddon(addon.id)}
                            className={`estimator-feature-pill ${isChecked ? "active" : ""}`}
                            style={{
                              padding: "10px 12px",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "8px",
                              transition: "all 0.2s ease",
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                              <span style={{
                                width: "18px",
                                height: "18px",
                                borderRadius: "5px",
                                border: `2px solid ${isChecked ? "var(--primary)" : "var(--muted)"}`,
                                background: isChecked ? "var(--primary)" : "transparent",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                                fontSize: "0.72rem",
                                fontWeight: "bold"
                              }}>
                                {isChecked ? "✓" : ""}
                              </span>
                              <div>
                                <strong style={{ fontSize: "0.86rem", display: "block", color: isChecked ? "var(--primary)" : "var(--secondary)" }}>
                                  {addon.label}
                                </strong>
                                <span style={{ fontSize: "0.74rem", color: "var(--muted)" }}>
                                  +{addon.daysAdded} {addon.daysAdded === 1 ? "day" : "days"} sprint • {addon.badge}
                                </span>
                              </div>
                            </div>
                            <span style={{ fontSize: "0.76rem", fontWeight: "700", padding: "2px 8px", borderRadius: "10px", background: isChecked ? "rgba(240, 77, 12, 0.12)" : "var(--surface)", color: isChecked ? "var(--primary)" : "var(--muted)", whiteSpace: "nowrap" }}>
                              +{addon.daysAdded}d
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Timeline & Sprint Preference */}
                  <div>
                    <span style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary)", marginBottom: "10px" }}>
                      Step 3: Timeline & Delivery Speed
                    </span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "8px" }}>
                      <button
                        type="button"
                        onClick={() => setTimelineMode("standard")}
                        className={`estimator-option-btn ${timelineMode === "standard" ? "active" : ""}`}
                        style={{ padding: "12px", textAlign: "center", cursor: "pointer" }}
                      >
                        <strong style={{ display: "block", fontSize: "0.92rem" }}>Standard Sprint</strong>
                        <span style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}>Calculated agile pace</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setTimelineMode("express")}
                        className={`estimator-option-btn ${timelineMode === "express" ? "active" : ""}`}
                        style={{ padding: "12px", textAlign: "center", cursor: "pointer" }}
                      >
                        <strong style={{ display: "block", fontSize: "0.92rem", color: "var(--primary)" }}>⚡ Express Rush</strong>
                        <span style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}>3-4 days faster • Priority queue</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setTimelineMode("flexible")}
                        className={`estimator-option-btn ${timelineMode === "flexible" ? "active" : ""}`}
                        style={{ padding: "12px", textAlign: "center", cursor: "pointer" }}
                      >
                        <strong style={{ display: "block", fontSize: "0.92rem" }}>🌱 Flexible Window</strong>
                        <span style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}>Extended milestone buffer</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column: Sticky Summary & Instant Dispatch */}
                <div>
                  <div className="estimator-summary-panel">
                    <div style={{ display: "inline-block", padding: "3px 8px", borderRadius: "10px", background: "rgba(240, 77, 12, 0.12)", color: "var(--primary)", fontSize: "0.76rem", fontWeight: "700", marginBottom: "8px" }}>
                      SCOPE SPECIFICATION
                    </div>

                    <h3 style={{ fontSize: "1.2rem", color: "var(--secondary)", margin: "0 0 4px 0" }}>
                      {currentPackage.title}
                    </h3>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: "0 0 12px 0" }}>
                      {currentPackage.tagline}
                    </p>

                    <div style={{ padding: "12px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", marginBottom: "12px" }}>
                      <div style={{ fontSize: "1.35rem", fontWeight: "800", color: "var(--secondary)", letterSpacing: "-0.02em" }}>
                        Custom Scope Quote
                      </div>
                      <div style={{ fontSize: "0.86rem", color: "var(--text-muted)", fontWeight: "600", marginTop: "2px" }}>
                        Tailored to your organizational specifications
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "8px", fontSize: "0.85rem", color: "var(--primary)", fontWeight: "700" }}>
                        <span>⏱️ Estimated Delivery:</span>
                        <span>~{calculatedDays} Business Days</span>
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "14px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                        <span>Core Architecture:</span>
                        <strong style={{ color: "var(--secondary)" }}>{currentPackage.title}</strong>
                      </div>

                      {selectedAddons.length > 0 && (
                        <div style={{ marginBottom: "4px" }}>
                          <span style={{ display: "block", marginBottom: "2px", color: "var(--secondary)", fontWeight: "600" }}>Selected Add-ons ({selectedAddons.length}):</span>
                          {selectedAddons.map((id) => {
                            const addon = optionalAddons.find((a) => a.id === id);
                            if (!addon) return null;
                            return (
                              <div key={id} style={{ display: "flex", justifyContent: "space-between", paddingLeft: "8px", fontSize: "0.78rem", marginBottom: "2px" }}>
                                <span>• {addon.label}</span>
                                <span style={{ color: "var(--primary)", fontWeight: "600" }}>+{addon.daysAdded}d</span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {timelineMode !== "standard" && (
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                          <span>Timeline Mode:</span>
                          <strong style={{ color: timelineMode === "express" ? "var(--primary)" : "#10b981", textTransform: "capitalize" }}>
                            {timelineMode === "express" ? "Priority Sprint" : "Flexible Window"}
                          </strong>
                        </div>
                      )}

                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "10px", padding: "8px", borderRadius: "10px", background: "var(--surface)", border: "1px dashed var(--line)", fontSize: "0.76rem" }}>
                        <span>🛡️</span>
                        <span>
                          <strong>Zero-Database:</strong> Zero monthly database bills, zero socket leaks, 99.99% serverless uptime.
                        </span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "grid", gap: "8px" }}>
                      <a
                        href={`https://wa.me/919416341097?text=${encodeURIComponent(
                          `Hello NarnaulOnline Team,\n\nI configured a project scope on your website:\n• Core Architecture: ${currentPackage.title}\n• Modules: ${selectedAddons.map((id) => optionalAddons.find((a) => a.id === id)?.label).filter(Boolean).join(", ") || "Standard"}\n• Timeline Mode: ${timelineMode.toUpperCase()}\n• Estimated Sprint: ~${calculatedDays} Days\n\nI would like to request a custom proposal and quotation for this project!`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-whatsapp"
                        style={{ width: "100%", justifyContent: "center", padding: "10px 14px", fontSize: "0.85rem" }}
                      >
                        💬 Submit Scope on WhatsApp (+91 9416341097)
                      </a>

                      <a
                        href="#contact"
                        className="btn btn-outline"
                        style={{ width: "100%", justifyContent: "center", padding: "10px 14px", fontSize: "0.85rem" }}
                      >
                        📋 Request Formal Scope Proposal
                      </a>
                    </div>

                    <p style={{ fontSize: "0.72rem", color: "var(--muted)", textAlign: "center", margin: "10px 0 0 0" }}>
                      Direct communication with Principal Architect Amit Jangid • Narnaul, Haryana, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="cta-band">
          <div className="container cta-wrap reveal">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px", borderRadius: "var(--radius-pill)", background: "var(--surface-container-high)", border: "1px solid var(--line)", marginBottom: "8px", fontSize: "0.82rem", fontWeight: "600", color: "var(--primary)" }}>
                <span>📍</span>
                <span>Headquarters: Narnaul, Haryana, India (123001)</span>
              </div>
              <span className="eyebrow" style={{ display: "block" }}>Organization Project Intake</span>
              <h2>Ready to build something smarter with NarnaulOnline?</h2>
              <p style={{ color: "var(--muted)", marginTop: "6px", maxWidth: "620px", fontSize: "1rem", lineHeight: "1.5" }}>
                Based in <strong>Narnaul, Haryana, India</strong>. Have a project idea, business workflow bottleneck, or custom zero-database software requirement?
                Inquiries are routed directly to our engineering team at <strong>onlinenarnaul@gmail.com</strong>.
              </p>
            </div>

            <div className="cta-actions">
              <a href="mailto:onlinenarnaul@gmail.com" className="btn btn-primary" style={{ padding: "10px 22px" }}>
                Email onlinenarnaul@gmail.com
              </a>
              <a
                href="https://wa.me/919416341097?text=Hello%20NarnaulOnline%20Team%2C%20I%20would%20like%20to%20discuss%20a%20digital%20development%20project."
                className="btn btn-whatsapp"
                target="_blank"
                rel="noreferrer"
                style={{ padding: "10px 22px" }}
              >
                💬 Chat on WhatsApp (+91 9416341097)
              </a>
            </div>
          </div>

          {/* Quick Contact & Location Cards */}
          <div className="container" style={{ marginBottom: "18px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
              <div className="service-card reveal" style={{ padding: "16px 18px" }}>
                <span style={{ fontSize: "1.2rem", display: "block", marginBottom: "4px" }}>📍</span>
                <strong style={{ display: "block", color: "var(--secondary)", fontSize: "0.95rem" }}>Current Location</strong>
                <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>Narnaul, Haryana, India (123001)</span>
              </div>
              <div className="service-card reveal" style={{ padding: "16px 18px" }}>
                <span style={{ fontSize: "1.2rem", display: "block", marginBottom: "4px" }}>✉️</span>
                <strong style={{ display: "block", color: "var(--secondary)", fontSize: "0.95rem" }}>Organization Email</strong>
                <a href="mailto:onlinenarnaul@gmail.com" style={{ fontSize: "0.88rem", color: "var(--primary)", fontWeight: "600" }}>onlinenarnaul@gmail.com</a>
              </div>
              <div className="service-card reveal" style={{ padding: "16px 18px" }}>
                <span style={{ fontSize: "1.2rem", display: "block", marginBottom: "4px" }}>💬</span>
                <strong style={{ display: "block", color: "var(--secondary)", fontSize: "0.95rem" }}>WhatsApp Lead Desk</strong>
                <a href="https://wa.me/919416341097" target="_blank" rel="noreferrer" style={{ fontSize: "0.88rem", color: "#128C7E", fontWeight: "600" }}>+91 9416341097</a>
              </div>
              <div className="service-card reveal" style={{ padding: "16px 18px" }}>
                <span style={{ fontSize: "1.2rem", display: "block", marginBottom: "4px" }}>⚡</span>
                <strong style={{ display: "block", color: "var(--secondary)", fontSize: "0.95rem" }}>Engineering Availability</strong>
                <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>Open for new client projects & digital transformation</span>
              </div>
            </div>
          </div>

          <div className="container form-shell" style={{ display: "block" }}>
            <div style={{ textAlign: "center", marginBottom: "18px" }}>
              <span className="eyebrow">Project Intake Form</span>
              <h3 style={{ fontSize: "1.6rem", color: "var(--secondary)", margin: "4px 0" }}>
                Ready to build something smarter?
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                Tell our engineering team about your organization requirements. Inquiries are delivered directly to <strong>onlinenarnaul@gmail.com</strong>.
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

      {/* Enterprise Multi-Column Footer */}
      <Footer />
    </>
  );
}