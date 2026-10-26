"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

interface PortfolioProject {
  id: string;
  title: string;
  category: "AI & Automation" | "Fintech & ERP" | "E-Commerce & Inventory" | "Media & Community" | "Data & Intelligence";
  status: string;
  statusClass: "planning" | "development" | "workflow" | "architecture" | "prototype" | "concept" | "active";
  tagline?: string;
  overview: string;
  problem: string;
  capabilities: string[];
  techStack: string[];
  role: string;
}

const allProjects: PortfolioProject[] = [
  {
    id: "01",
    title: "AI Newsroom OS",
    category: "AI & Automation",
    status: "Architecture & Planning",
    statusClass: "planning",
    overview:
      "A proposed intelligent publishing platform designed to help digital news organizations coordinate research, content creation, editorial review, multimedia production, distribution, and analytics through a unified system.",
    problem:
      "Digital news organizations face intense pressure to produce fast, accurate multi-channel news without sacrificing factual accuracy, SEO quality, or human editorial oversight.",
    capabilities: [
      "AI-assisted news research, writing, and editorial synthesis",
      "Fact-checking and mandatory human editorial review gates before publication",
      "SEO content preparation, multimedia scripts, and thumbnail recommendations",
      "Automated multi-channel distribution: WhatsApp Business, Meta, YouTube, and Web",
      "Bilingual support for Hindi and English editorial workflows with audit trails",
    ],
    techStack: ["React", "Vite", "Node.js", "TypeScript", "MySQL / PostgreSQL", "AI Model APIs", "Job Queues"],
    role: "System Architecture, AI Agent Team Design & Editorial Workflow Planning",
  },
  {
    id: "02",
    title: "Microfinance & Loan Management ERP",
    category: "Fintech & ERP",
    status: "In Development",
    statusClass: "development",
    overview:
      "A microfinance and multi-loan processing application designed around the operational requirements, KYC processes, and accounting workflows of Indian financial services businesses.",
    problem:
      "Managing multiple loan products (personal loans, group lending, collateral-backed) manually leads to bookkeeping discrepancies, missed EMI collections, and lack of audit-proof records.",
    capabilities: [
      "Customer registration, KYC verification, and borrower credit records",
      "Multi-loan types: Personal loans, group lending, and loans against assets",
      "Loan application processing, approval workflows, and disbursement tracking",
      "Dynamic EMI schedule calculation, payment tracking, and penalty handling",
      "Field collection management, double-entry accounting records, and financial dashboards",
      "Strict role-based access control (RBAC) and tamper-evident audit logs",
    ],
    techStack: ["PHP", "Node.js", "MySQL", "Relational Schemas", "Financial Math Engine", "RBAC"],
    role: "Database Architecture, Backend Loan Logic & Financial Ledger Design",
  },
  {
    id: "03",
    title: "Torvo Multibrand Power Tools Platform",
    category: "E-Commerce & Inventory",
    status: "Workflow Design & Requirements",
    statusClass: "workflow",
    overview:
      "A specialized B2B commerce platform for a multibrand power tools and accessories distributor, designed around a controlled ordering process between registered buyers and the seller.",
    problem:
      "Standard e-commerce checkouts fail in wholesale industrial distribution where dealer credit must be verified, stock availability checked before commitment, and invoices customized with GST (CGST/SGST).",
    capabilities: [
      "Controlled buyer account registration with mandatory seller approval gate",
      "7-stage ordering workflow: Buyer order → Stock check & revision → Confirmation → Invoicing → Dispatch",
      "Multibrand catalog across power tools, hand tools, accessories, and spare parts",
      "GST-oriented billing engine computing applicable CGST and SGST line items",
      "Dual interface: Dedicated Seller Admin Dashboard and Approved Buyer Portal",
    ],
    techStack: ["React", "REST APIs", "MySQL", "B2B Order Workflows", "GST Billing Engine"],
    role: "Product Requirements, B2B Process Flow & Data Architecture",
  },
  {
    id: "04",
    title: "Pragati Kurtis E-Commerce Platform",
    category: "E-Commerce & Inventory",
    status: "Technical Architecture Specified",
    statusClass: "architecture",
    overview:
      "A full-stack e-commerce project architecture designed for an apparel business catering simultaneously to individual retail shoppers and wholesale dealer networks.",
    problem:
      "Serving both retail consumers and wholesale distributors requires separate pricing tiers, minimum order quantities (MOQ), and bulk request-for-quotation (RFQ) pipelines in one unified platform.",
    capabilities: [
      "Multi-role user authentication: Retail Customer, Approved Wholesale Dealer, and Administrator",
      "Dealer onboarding workflow with tiered volume pricing and RFQ capabilities",
      "Comprehensive product catalog: Fabric, sizing, color variants, and stock management",
      "GST-oriented commerce workflows and automated downloadable invoices",
      "High-speed, animated shopping experience with responsive cart and checkout",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "PHP REST APIs", "MySQL PDO", "Framer Motion"],
    role: "Full-Stack System Architecture, API Contract Design & Multi-Role Logic",
  },
  {
    id: "05",
    title: "Power Tools Spare Parts & Accessories Inventory",
    category: "E-Commerce & Inventory",
    status: "Prototype & Model Design",
    statusClass: "prototype",
    overview:
      "An inventory application specifically engineered for power-tool spare parts and accessories, emphasizing compatibility mapping between replacement components and multiple machine models.",
    problem:
      "Spare parts inventory is notoriously difficult to manage because a single replacement carbon brush, armature, or switch may fit 12 different machines across 3 tool brands.",
    capabilities: [
      "Structured product information system linking spare parts to multiple compatible tool models",
      "Multi-tier hierarchical classification: Brand → Tool Model → Component Type",
      "Real-time stock quantity tracking, bin locations, and low-inventory reorder alerts",
      "High-speed keyword, brand, and part number search with compatibility verification",
      "Administrative dashboard for inventory synchronization and product master updates",
    ],
    techStack: ["MySQL Relational Design", "Classification Engine", "PHP / Node.js", "Dashboard UI"],
    role: "Relational Schema Design, Compatibility Matrix & Prototype UX",
  },
  {
    id: "06",
    title: "Rao Net Ram Education Society Website",
    category: "Media & Community",
    status: "Web Structure & Public Concept",
    statusClass: "concept",
    tagline: "Empowering Education, Inspiring Change",
    overview:
      "A dedicated institutional web platform designed for Rao Net Ram Education Society, an organization championing education and community empowerment in Haryana.",
    problem:
      "Community organizations lack an authoritative, modern digital portal to communicate their mission, publish verified announcements, and highlight educational initiatives.",
    capabilities: [
      "Mission-driven institutional identity with tagline: 'Empowering Education, Inspiring Change'",
      "Leadership messages from the President and Secretary highlighting vision and milestones",
      "Archives of educational, cultural, and social activities with high-resolution photo galleries",
      "Public notice board for institutional announcements and community updates",
      "Responsive, clean, and accessible public interface",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design System", "Content Architecture"],
    role: "Website Planning, Digital Strategy & Content Architecture",
  },
  {
    id: "07",
    title: "Aamya Holidays Travel Platform",
    category: "E-Commerce & Inventory",
    status: "Concept & Workflow",
    statusClass: "concept",
    overview:
      "A travel and tourism platform concept designed for showcasing tour packages, curated destinations, accommodation bookings, and specialized event/wedding travel logistics.",
    problem:
      "Travel service providers require a versatile digital showcase that handles both pre-packaged tours and customized inquiry/booking workflows for group and event travel.",
    capabilities: [
      "Curated tour package showcases with destination itineraries and pricing details",
      "Hotel and accommodation booking workflow integration",
      "Specialized wedding and event-related travel service listings",
      "Lead capture and booking request management dashboard",
      "Mobile-friendly public presentation with fast inquiry submission",
    ],
    techStack: ["Next.js / React", "REST APIs", "MySQL", "Booking Workflow Engine"],
    role: "Service Marketplace Planning & Customer Journey Design",
  },
  {
    id: "08",
    title: "NarnaulOnline / Local Digital Platform",
    category: "Media & Community",
    status: "Regional Digital Platform",
    statusClass: "active",
    overview:
      "A local digital platform and technology initiative associated with the Narnaul region, exploring local business digitization, online directory services, and web infrastructure.",
    problem:
      "Regional and Tier-2/3 businesses frequently lack modern web visibility, searchability, and automated digital communication tools.",
    capabilities: [
      "Local business directory and regional technology service delivery hub",
      "Inquiry routing and client communication automation via email and WhatsApp",
      "Showcase for regional digital modernization and web application adoption",
      "High-speed Next.js architecture with instant response times and SEO optimization",
    ],
    techStack: ["Next.js", "React", "Node.js", "WhatsApp Integration", "Form Routing"],
    role: "Founder, Lead Developer & Digital Architect",
  },
  {
    id: "09",
    title: "Radio Aravali FM 90.4 MHz Digital Platform",
    category: "Media & Community",
    status: "Station Roadmap",
    statusClass: "planning",
    overview:
      "A website and application planning roadmap for community radio station Radio Aravali FM 90.4 MHz, bridging traditional on-air broadcasting with modern digital streaming.",
    problem:
      "Community radio stations need a digital presence to reach audiences beyond broadcast transmitter radius, archive educational programs, and engage younger demographics online.",
    capabilities: [
      "Online audio streaming integration for live 24/7 radio broadcasting",
      "Station programming schedule, daily show timings, and presenter profiles",
      "Audio program archives, recorded podcasts, and community news feeds",
      "Listener interaction channel and community feedback system",
    ],
    techStack: ["Web Audio Streaming APIs", "React", "Content Management System", "Media Storage"],
    role: "Digital Platform Planning & Media Streaming Roadmap",
  },
  {
    id: "10",
    title: "Yadav Dharamshala Web Application",
    category: "Media & Community",
    status: "Project Proposal & Quotation",
    statusClass: "concept",
    overview:
      "A web application development initiative and detailed project quotation (₹25,000) prepared for a community facility / dharamshala.",
    problem:
      "Community facilities face challenges tracking room allocations, facility bookings, donor contributions, and maintenance logs across handwritten registers.",
    capabilities: [
      "Room booking and reservation tracking system",
      "Donor records and transparent receipt generation",
      "Administrative dashboard for management committee members",
      "Notice board for community events, ceremonies, and announcements",
    ],
    techStack: ["PHP", "MySQL", "Dashboard UI", "Document Generation"],
    role: "Requirements Gathering, System Scope & Commercial Proposal",
  },
  {
    id: "11",
    title: "Hotel Management & Billing System",
    category: "Fintech & ERP",
    status: "Multi-Workflow Concept",
    statusClass: "architecture",
    overview:
      "A hospitality management application concept combining room reservation management with restaurant point-of-sale (POS) billing and administrative financial reporting.",
    problem:
      "Small and mid-sized hotels struggle when front-desk room booking and dining restaurant billing operate on separate disconnected software tools.",
    capabilities: [
      "Room reservations, guest check-in/out records, and room status overview",
      "Restaurant order taking and table billing management",
      "Consolidated guest folio: Combining room charges, dining, and extra services into one bill",
      "Daily revenue reports, occupancy analytics, and administrative oversight",
    ],
    techStack: ["React", "PHP", "MySQL", "Billing & Receipt Generator"],
    role: "Operational Workflow Integration & System Architecture",
  },
  {
    id: "12",
    title: "Genius Fingerprint Intelligence Test",
    category: "Data & Intelligence",
    status: "Algorithm & Report Prototype",
    statusClass: "prototype",
    overview:
      "A specialized data processing software concept for organizing fingerprint-related biometric test data (DMIT) and generating comprehensive aptitude reports based on complex predefined formulas.",
    problem:
      "Compiling 10-finger biometric ridge data into intelligence quotient scores (IQ, EQ, AQ, CQ) and career aptitudes traditionally required hours of error-prone manual Excel calculation.",
    capabilities: [
      "Ridge-count data entry and validation for all 10 fingers (L1–L5 and R1–R5)",
      "Fingerprint pattern classification records (Whorl, Loop, Arch)",
      "Formula-driven calculation engine implementing multi-parameter intelligence algorithms",
      "Automated career aptitude ranking generation",
      "High-resolution PDF export and browser print-ready layouts",
      "Role-based access: Admin, Counselor, and Viewer permissions",
    ],
    techStack: ["PHP / Laravel", "MySQL", "Formula Calculation Engine", "PDF Export Engine"],
    role: "Algorithm Implementation, Data Modeling & Automated Reporting Architecture",
  },
];

const categories = [
  "All",
  "AI & Automation",
  "Fintech & ERP",
  "E-Commerce & Inventory",
  "Media & Community",
  "Data & Intelligence",
] as const;

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />

      <main>
        {/* Page Hero */}
        <section className="hero page-hero">
          <div className="container">
            <div className="org-hero-badge" style={{ marginBottom: "14px" }}>
              <span className="dot" />
              <span>Full-Stage Software Development Organization • System Deliverables</span>
            </div>
            <h1>Systems Engineered for Real Commercial Needs.</h1>
            <p style={{ maxWidth: "800px", color: "var(--muted)", margin: "16px 0 0", fontSize: "1.1rem", lineHeight: "1.65" }}>
              A comprehensive showcase of web applications, zero-database architectures, financial loan ERPs,
              and domain-specific platforms engineered and architected by <strong>NarnaulOnline</strong> (Led by Amit Jangid, Founder & Principal Solutions Architect).
              In accordance with our strict transparency standards, implementation statuses are explicitly stated.
            </p>

            {/* Filter Buttons */}
            <div className="filter-bar" style={{ marginTop: "36px" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Showcase Grid */}
        <section className="showcase" style={{ paddingBottom: "90px" }}>
          <div className="container">
            <div style={{ display: "grid", gap: "34px" }}>
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  style={{
                    background: "var(--panel)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-lg)",
                    padding: "36px",
                    boxShadow: "var(--shadow)",
                    transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
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
                        {project.category}
                      </span>
                      <h2 style={{ fontSize: "1.8rem", margin: "6px 0 2px", color: "var(--secondary)" }}>
                        {project.title}
                      </h2>
                      {project.tagline && (
                        <p style={{ color: "var(--primary)", fontStyle: "italic", fontSize: "0.95rem", margin: "2px 0 8px" }}>
                          “{project.tagline}”
                        </p>
                      )}
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

                  <p style={{ color: "var(--text)", fontSize: "1.02rem", lineHeight: "1.65", margin: "10px 0" }}>
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
                    <strong style={{ fontSize: "0.9rem", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Operational Challenge Addressed:
                    </strong>
                    <p style={{ margin: "4px 0 0", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                      {project.problem}
                    </p>
                  </div>

                  <strong style={{ fontSize: "0.92rem", color: "var(--secondary)" }}>
                    Key Planned or Implemented Capabilities:
                  </strong>
                  <ul className="feature-list" style={{ margin: "10px 0 20px" }}>
                    {project.capabilities.map((cap) => (
                      <li key={cap}>{cap}</li>
                    ))}
                  </ul>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "14px",
                      paddingTop: "16px",
                      borderTop: "1px solid var(--line)",
                    }}
                  >
                    <div className="skills-cloud" style={{ margin: 0 }}>
                      {project.techStack.map((tech) => (
                        <span key={tech} className="skill-tag" style={{ fontSize: "0.82rem", padding: "5px 12px" }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.86rem", color: "var(--muted)", fontStyle: "italic" }}>
                        Role: {project.role}
                      </span>
                      <a
                        href={`https://wa.me/919416341097?text=${encodeURIComponent(
                          `Hi Amit, I'm interested in discussing your project: ${project.title} (${project.status})`
                        )}`}
                        className="btn btn-secondary"
                        style={{ fontSize: "0.85rem", padding: "6px 16px" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Discuss on WhatsApp →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Inquiries CTA Banner */}
            <div
              style={{
                marginTop: "60px",
                padding: "48px 40px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--line)",
                background: "var(--surface-container)",
                textAlign: "center",
              }}
            >
              <span className="eyebrow">Organization Scope & Engineering</span>
              <h2 style={{ fontSize: "2rem", color: "var(--secondary)", margin: "10px 0" }}>
                Need a resilient, zero-database system built for your business?
              </h2>
              <p style={{ color: "var(--muted)", maxWidth: "620px", margin: "0 auto 24px", fontSize: "1.02rem" }}>
                Whether you need a full-stack web application, a loan ERP, or a wholesale e-commerce platform,
                leverage our zero-database architecture starting from <strong>₹2,999 ($49)</strong>.
              </p>
              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/#estimator" className="btn btn-primary" style={{ padding: "12px 28px" }}>
                  CALCULATE PROJECT COST
                </Link>
                <Link href="/contact" className="btn btn-outline" style={{ padding: "12px 28px" }}>
                  REQUEST FORMAL PROPOSAL
                </Link>
                <a
                  href="https://wa.me/919416341097?text=Hello%20NarnaulOnline%20Team%2C%20I%20reviewed%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-wrap">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="NarnaulOnline • Full-Stage Software Development Organization">
              <Image
                src="/logo.png"
                alt="NarnaulOnline Logo"
                width={200}
                height={52}
                className="brand-logo"
              />
            </Link>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px", maxWidth: "300px" }}>
              NarnaulOnline • Full-Stage Software Development Organization. Led by Amit Jangid, Founder & Principal Architect.
            </p>
          </div>

          <nav className="footer-nav">
            <Link href="/">Home</Link>
            <Link href="/about">Organization</Link>
            <Link href="/#estimator">Cost Estimator</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="footer-contact">
            <a href="tel:+919416341097">+91 9416341097</a>
            <a href="mailto:onlinenarnaul@gmail.com">onlinenarnaul@gmail.com</a>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>Headquarters: Narnaul, Haryana, India (123001)</span>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} NarnaulOnline. All rights reserved. Founded & Led by Amit Jangid.</p>
        </div>
      </footer>
    </>
  );
}