import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "About NarnaulOnline | Full-Stage Software Development Organization",
  description:
    "Discover NarnaulOnline, a full-stage software development organization founded by Amit Jangid. Specializing in Zero-Database architectures, serverless web apps, B2B wholesale systems, and deterministic financial engines.",
};

const organizationPillars = [
  {
    title: "100% Zero-Database Architecture",
    desc: "We engineer systems that store and process state with decoupled schemas, client ledgers, and serverless compute—slashing database server hosting bills to ₹0.",
    badge: "Architecture",
  },
  {
    title: "Deterministic Business & Math Engines",
    desc: "Rigorous algorithms for microfinance loan amortization, EMI interest schedules, GST billing, and wholesale price calculations with zero rounding drift.",
    badge: "Fintech & Logic",
  },
  {
    title: "Full-Lifecycle Engineering Execution",
    desc: "From initial specification and schema design to responsive UI construction, edge deployment on Vercel/Hostinger, and post-launch maintenance.",
    badge: "Delivery",
  },
  {
    title: "Sub-Second Global Edge Performance",
    desc: "Leveraging Next.js App Router, React 19, and optimized asset pipelines for near-instant rendering across mobile and desktop devices.",
    badge: "Performance",
  },
];

const industries = [
  { name: "Fintech & Microfinance", desc: "Multi-loan processing, deterministic EMI schedules, KYC verification, and transaction ledgers." },
  { name: "Wholesale & Industrial Commerce", desc: "B2B power tools distribution, dealer tier pricing, RFQ order dispatch, and GST invoicing." },
  { name: "Apparel & Retail E-Commerce", desc: "B2B dealer approval portals, bulk pricing tiers, wholesale carts, and consumer catalogs." },
  { name: "Digital Media & Publishing", desc: "Decoupled newsroom research, multi-author editorial approvals, and fast static delivery." },
  { name: "Inventory & Spare Parts", desc: "Relational compatibility matrices between replacement spare parts and machine models." },
  { name: "Education & Non-Profit Trusts", desc: "Community trust platforms, activity archives, leadership messages, and announcements." },
  { name: "Tourism & Hospitality", desc: "Tour package booking systems, room reservations, and integrated restaurant billing." },
  { name: "Regional Enterprise Portals", desc: "Regional business digitization, facility management, and member business directories." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Hero */}
        <section className="hero page-hero">
          <div className="container">
            <div className="org-hero-badge" style={{ marginBottom: "14px" }}>
              <span className="dot" />
              <span>Full-Stage Software Development Organization • Founded in Haryana, India</span>
            </div>
            <h1>Building Scalable, Zero-Database Digital Systems for Modern Businesses.</h1>
            <p style={{ maxWidth: "820px", color: "var(--muted)", margin: "16px 0 0", fontSize: "1.12rem", lineHeight: "1.65" }}>
              <strong>NarnaulOnline</strong> is a digital software engineering organization founded and led by <strong>Amit Jangid</strong>. 
              We deconstruct complex business operations and translate them into ultra-reliable, zero-database, serverless applications 
              with transparent entry pricing from <strong>₹2,999 ($49)</strong>.
            </p>
          </div>
        </section>

        {/* Narrative & Philosophy */}
        <section className="solutions" style={{ paddingBottom: "60px" }}>
          <div className="container">
            <div style={{ display: "grid", gap: "32px" }}>
              {/* Organization Overview Card */}
              <div
                style={{
                  background: "var(--panel)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-lg)",
                  padding: "40px",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "8px" }}>
                  <span className="eyebrow">Organization Overview</span>
                  <span className="zero-db-tag">Zero Database Setup Needed</span>
                </div>
                <h2 style={{ fontSize: "1.85rem", margin: "8px 0 16px", color: "var(--secondary)" }}>
                  Engineering Practical Software Without Costly Database Overheads
                </h2>
                <p style={{ color: "var(--text)", lineHeight: "1.75", fontSize: "1.04rem" }}>
                  Traditional development agencies often burden clients with complex, expensive database server instances 
                  that require constant maintenance, database connection pool tuning, and monthly server hosting bills. 
                  At <strong>NarnaulOnline</strong>, we challenge this convention by championing <strong>Zero-Database Architectures</strong> 
                  and modern serverless engineering.
                </p>
                <p style={{ color: "var(--text-muted)", lineHeight: "1.75", fontSize: "1.02rem", marginTop: "14px" }}>
                  By decoupling data into immutable JSON schemas, client-side transactional ledgers, and edge-routed 
                  serverless endpoints, we deliver systems that run at lightning speed, never suffer from cold-start database socket 
                  leaks, and cost virtually nothing to maintain.
                </p>
              </div>

              {/* Leadership Spotlight: Amit Jangid */}
              <div
                style={{
                  background: "var(--surface-container-low)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-lg)",
                  padding: "36px",
                }}
              >
                <span className="eyebrow">Leadership & Architectural Vision</span>
                <h3 style={{ fontSize: "1.6rem", margin: "8px 0 16px", color: "var(--secondary)" }}>
                  Amit Jangid — Founder & Principal Solutions Architect
                </h3>
                <p style={{ color: "var(--text)", lineHeight: "1.75", fontSize: "1.02rem" }}>
                  As Founder & Principal Solutions Architect, Amit leads engineering strategy, system architecture, and 
                  code execution at NarnaulOnline. With extensive experience spanning full-stack web applications, financial calculation 
                  engines, e-commerce portals, and enterprise administrative dashboards, Amit ensures that every project conforms to 
                  the highest engineering benchmarks:
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginTop: "20px" }}>
                  {organizationPillars.map((pillar) => (
                    <div key={pillar.title} style={{ background: "#FFFFFF", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid var(--line)" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        {pillar.badge}
                      </span>
                      <strong style={{ color: "var(--secondary)", display: "block", margin: "4px 0 6px", fontSize: "1.02rem" }}>
                        {pillar.title}
                      </strong>
                      <span style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.5", display: "block" }}>
                        {pillar.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission & Vision Grid */}
              <div className="solution-grid">
                <div className="solution-box">
                  <span className="eyebrow">Organizational Mission</span>
                  <h3 style={{ fontSize: "1.4rem", margin: "8px 0 12px" }}>Democratizing High-Grade Software</h3>
                  <p style={{ fontSize: "1.02rem", lineHeight: "1.7", color: "var(--text)" }}>
                    To engineer high-performance, robust, and zero-maintenance digital systems that empower small businesses, 
                    enterprises, and organizations to digitize operations without prohibitive upfront infrastructure or database costs.
                  </p>
                </div>

                <div className="solution-box">
                  <span className="eyebrow">Strategic Horizon</span>
                  <h3 style={{ fontSize: "1.4rem", margin: "8px 0 12px" }}>Next-Gen Software Ecosystems</h3>
                  <p style={{ fontSize: "1.02rem", lineHeight: "1.7", color: "var(--text)" }}>
                    To establish NarnaulOnline as India&apos;s foremost authority in zero-database enterprise engineering, 
                    delivering resilient applications that achieve 99.99% uptime with zero ongoing database maintenance overhead.
                  </p>
                </div>
              </div>

              {/* Industry & Domain Adaptability */}
              <div
                style={{
                  background: "var(--panel)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-lg)",
                  padding: "40px",
                  boxShadow: "var(--shadow)",
                }}
              >
                <span className="eyebrow">Industry Experience</span>
                <h3 style={{ fontSize: "1.6rem", margin: "8px 0 16px", color: "var(--secondary)" }}>
                  Domains Engineered & Delivered
                </h3>
                <p style={{ color: "var(--text-muted)", marginBottom: "22px" }}>
                  Proven software architecture and system deployment across diverse commercial domains:
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                  {industries.map((ind) => (
                    <div
                      key={ind.name}
                      style={{
                        padding: "18px",
                        background: "var(--surface-container-low)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--line)",
                      }}
                    >
                      <strong style={{ color: "var(--secondary)", display: "block", fontSize: "0.98rem", marginBottom: "6px" }}>
                        {ind.name}
                      </strong>
                      <span style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.5", display: "block" }}>
                        {ind.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Connect */}
              <div
                style={{
                  padding: "48px 36px",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--line)",
                  background: "var(--surface-container)",
                  textAlign: "center",
                }}
              >
                <span className="eyebrow">Organization Engagement</span>
                <h2 style={{ fontSize: "2rem", color: "var(--secondary)", margin: "10px 0" }}>
                  Ready to collaborate with NarnaulOnline?
                </h2>
                <p style={{ color: "var(--muted)", maxWidth: "620px", margin: "0 auto 24px", fontSize: "1.04rem" }}>
                  Transparent entry pricing from <strong>₹2,999 / $49</strong>. Explore our interactive project cost estimator 
                  or speak directly with Founder & Principal Solutions Architect Amit Jangid.
                </p>
                <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                  <Link href="/#estimator" className="btn btn-primary" style={{ padding: "12px 28px" }}>
                    CALCULATE PROJECT COST
                  </Link>
                  <Link href="/contact" className="btn btn-outline" style={{ padding: "12px 28px" }}>
                    GET A FORMAL PROPOSAL
                  </Link>
                  <a
                    href="https://wa.me/919416341097?text=Hello%20NarnaulOnline%20Team%2C%20I%20reviewed%20your%20organization%20profile%20and%20would%20like%20to%20collaborate."
                    className="btn btn-whatsapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    💬 WhatsApp (+91 9416341097)
                  </a>
                </div>
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
