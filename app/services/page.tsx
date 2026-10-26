import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Services & Capabilities | NarnaulOnline • Digital Software Development Organization",
  description:
    "Explore full-stage digital software services by NarnaulOnline: Zero-Database web applications, custom administrative ERPs, B2B wholesale commerce, and AI agent automations.",
};

interface ServiceOffering {
  num: string;
  title: string;
  badge: string;
  desc: string;
  capabilities: string[];
  stack: string[];
}

const serviceOfferings: ServiceOffering[] = [
  {
    num: "01",
    title: "AI & Autonomous Workflow Automation",
    badge: "Intelligent Systems",
    desc: "Custom AI-driven pipelines, automated multi-channel publishing, newsroom operating systems, and intelligent agents designed around specific business workflows.",
    capabilities: [
      "AI-assisted research, content drafting, and multi-channel publishing",
      "Mandatory human editorial review gates and fact verification pipelines",
      "Automated SEO optimization, scripts, and media preparation",
      "Bilingual support (Hindi & English) with comprehensive audit logs",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "AI Model APIs", "Job Queues"],
  },
  {
    num: "02",
    title: "Enterprise Web Applications",
    badge: "Core Engineering",
    desc: "Responsive web products and administrative platforms engineered with modern decoupled architectures for sub-second page loads, conversion, and zero server maintenance.",
    capabilities: [
      "Sub-second page rendering using Next.js 15 and React 19 App Router",
      "DESIGN.md token-enforced responsive layouts across mobile, tablet, and desktop",
      "Stateless decoupled client state with zero database connection bottlenecks",
      "Production-ready deployment on Vercel, Cloudflare, or client infrastructure",
    ],
    stack: ["React 19", "Next.js 15", "TypeScript", "Pure CSS Tokens", "Edge Runtimes"],
  },
  {
    num: "03",
    title: "Custom Administrative ERPs & Portals",
    badge: "Business Systems",
    desc: "Specialized operational software tailored to business logic, including microfinance loan management, deterministic EMI calculation, and field collection tracking.",
    capabilities: [
      "Customer registration, KYC document verification, and borrower records",
      "Multi-loan types: personal loans, group lending, and asset-backed financing",
      "Deterministic EMI schedule calculations with zero floating-point rounding drift",
      "Strict role-based access control (RBAC) and tamper-evident audit trails",
    ],
    stack: ["Node.js", "REST APIs", "TypeScript", "Deterministic Math", "RBAC Security"],
  },
  {
    num: "04",
    title: "B2B Wholesale & Commerce Systems",
    badge: "E-Commerce",
    desc: "High-volume wholesale ordering platforms, dealer approval workflows, tier-based pricing structures, and integrated GST tax invoicing systems.",
    capabilities: [
      "B2B dealer registration, approval workflows, and wholesale credit terms",
      "Multi-tier quantity-based pricing matrices and RFQ dispatch pipelines",
      "Automated GST billing, order dispatch tracking, and invoice generation",
      "Relational compatibility engines for spare parts and machine models",
    ],
    stack: ["Next.js", "REST APIs", "GST Tax Engine", "Catalog Matrices", "Cloudflare"],
  },
  {
    num: "05",
    title: "Zero-Database Architecture Engineering",
    badge: "Cost Elimination",
    desc: "Architectural blueprinting that eliminates ongoing monthly database hosting bills by leveraging stateless edge compute, client ledgers, and deterministic JSON schemas.",
    capabilities: [
      "100% elimination of monthly database hosting fees (₹0 / $0 DB bills)",
      "Infinite horizontal concurrency without database connection pool exhaustion",
      "Immunity to SQL injection vulnerabilities through decoupled stateless schemas",
      "Zero server maintenance, automated edge caching, and permanent uptime",
    ],
    stack: ["Decoupled Schemas", "Edge Compute", "Static Handover", "Deterministic State"],
  },
  {
    num: "06",
    title: "Business Intelligence & Dashboard Systems",
    badge: "Data & Ops",
    desc: "High-clarity executive dashboards, operational analytics, real-time KPI monitors, and reporting tools that transform complex business data into strategic decisions.",
    capabilities: [
      "Real-time operational metrics, conversion analytics, and audit logging",
      "Interactive data filtering, multi-format export (PDF, CSV, Excel), and visualizations",
      "Executive summaries tailored for leadership reviews and operational planning",
      "Direct integration with WhatsApp Business and email alerting webhooks",
    ],
    stack: ["React Charts", "TypeScript", "Export Pipelines", "Webhook Alerts"],
  },
];

const deliveryProcess = [
  {
    step: "01",
    phase: "Specification & Blueprint",
    desc: "We analyze your operational requirements and draft a structured technical specification, decoupled schema, and milestone schedule.",
  },
  {
    step: "02",
    phase: "Sprint Implementation",
    desc: "Iterative milestone sprints with weekly functional demo commits and clear progress reports directly from Principal Architect Amit Jangid.",
  },
  {
    step: "03",
    phase: "Zero-DB Edge Deployment",
    desc: "Rigorous testing, SEO preparation, performance optimization, and global deployment to edge servers with zero ongoing DB maintenance fees.",
  },
  {
    step: "04",
    phase: "Handover & Support",
    desc: "Complete production source code handover with repository ownership, documentation, and ongoing engineering SLAs.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Hero */}
        <section className="hero page-hero">
          <div className="container">
            <div className="org-hero-badge" style={{ marginBottom: "14px" }}>
              <span className="dot" />
              <span>Full-Stage Software Development Organization • Services & Architecture</span>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "var(--radius-pill)",
                background: "var(--surface-container-high)",
                border: "1px solid var(--line)",
                marginBottom: "14px",
                fontSize: "0.88rem",
                fontWeight: "600",
                color: "var(--primary)",
              }}
            >
              <span>⚡</span>
              <span>Zero Database Server Hosting Fees • High-Performance Edge Delivery</span>
            </div>

            <h1>Production Software Services Engineered for Reliability.</h1>
            <p style={{ maxWidth: "820px", color: "var(--muted)", margin: "16px 0 0", fontSize: "1.12rem", lineHeight: "1.65" }}>
              <strong>NarnaulOnline</strong> provides end-to-end software development services from system architecture blueprinting to production deployment. Led by <strong>Amit Jangid</strong>, we build custom business applications, deterministic administrative ERPs, wholesale commerce portals, and AI agent systems with transparent milestone execution.
            </p>

            <div className="hero-actions" style={{ marginTop: "24px" }}>
              <Link href="/contact" className="btn btn-primary">
                Discuss Your Project →
              </Link>
              <Link href="/portfolio" className="btn btn-secondary">
                View 12+ Case Studies
              </Link>
              <a
                href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20am%20reviewing%20your%20services%20and%20would%20like%20to%20discuss%20a%20project."
                className="btn btn-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                💬 WhatsApp (+91 9416341097)
              </a>
            </div>
          </div>
        </section>

        {/* 6 Core Service Offerings Grid */}
        <section className="services" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">PRACTICAL ENGINEERING DISCIPLINES</span>
              <h2>Comprehensive Software Development Capabilities</h2>
              <p style={{ maxWidth: "780px", color: "var(--muted)", margin: "14px auto 0" }}>
                Each service practice is backed by verified production implementations, structured schemas, and complete code ownership.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px" }}>
              {serviceOfferings.map((svc) => (
                <article
                  key={svc.num}
                  className="reveal"
                  style={{
                    background: "var(--panel)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-lg)",
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "1.1rem",
                          fontWeight: "800",
                          color: "var(--primary)",
                        }}
                      >
                        {svc.num}
                      </span>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: "700",
                          padding: "3px 10px",
                          borderRadius: "999px",
                          background: "var(--surface-container-high)",
                          color: "var(--secondary)",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {svc.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.45rem", color: "var(--secondary)", margin: "0 0 12px 0", lineHeight: "1.3" }}>
                      {svc.title}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.96rem", lineHeight: "1.6", marginBottom: "20px" }}>
                      {svc.desc}
                    </p>

                    <strong style={{ display: "block", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.6px", color: "var(--primary)", marginBottom: "10px" }}>
                      Included Deliverables:
                    </strong>
                    <ul className="capabilities-list" style={{ marginBottom: "24px" }}>
                      {svc.capabilities.map((cap) => (
                        <li key={cap} style={{ fontSize: "0.9rem", color: "var(--text)" }}>
                          <span className="capability-check-icon">✓</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ paddingTop: "16px", borderTop: "1px solid var(--line)" }}>
                    <div className="skills-cloud" style={{ margin: 0 }}>
                      {svc.stack.map((tech) => (
                        <span key={tech} className="skill-tag" style={{ fontSize: "0.78rem", padding: "4px 10px" }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Process Milestones */}
        <section className="process" style={{ background: "var(--surface-container-low)", borderTop: "1px solid var(--line)" }}>
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">TRANSPARENT SPRINT MODEL</span>
              <h2>How We Engineer and Deliver Software</h2>
              <p style={{ maxWidth: "760px", color: "var(--muted)", margin: "14px auto 0" }}>
                Predictable milestones, direct architect communication, and weekly demo updates from concept to handover.
              </p>
            </div>

            <div className="process-grid">
              {deliveryProcess.map((step) => (
                <div key={step.step} className="process-step reveal">
                  <span className="step-num">{step.step}</span>
                  <h4>{step.phase}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct Contact CTA Section */}
        <section className="cta" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)" }}>
          <div className="container">
            <div className="cta-wrap reveal" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              <span className="eyebrow">READY TO BUILD?</span>
              <h2>Let’s Architect Your Next Production System.</h2>
              <p style={{ color: "var(--muted)", fontSize: "1.05rem", margin: "16px auto 28px", lineHeight: "1.6" }}>
                Whether you need a Zero-Database administrative portal, high-speed web application, or custom AI agent workflow, discuss your requirements directly with Principal Architect <strong>Amit Jangid</strong>.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary" style={{ padding: "14px 28px" }}>
                  Get in Touch →
                </Link>
                <a
                  href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20would%20like%20to%20discuss%20a%20development%20project."
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noreferrer"
                  style={{ padding: "14px 24px" }}
                >
                  💬 Chat on WhatsApp (+91 9416341097)
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
