import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "About Amit Jangid | Full-Stack Developer & AI Automation Builder",
  description:
    "Discover the background, mission, vision, and engineering philosophy of Amit Jangid, developer and digital solutions builder behind NarnaulOnline.",
};

const industries = [
  { name: "Fintech & Microfinance", desc: "Multi-loan processing, EMI schedules, KYC, and transaction ledgers." },
  { name: "Wholesale & Industrial Commerce", desc: "B2B power tools distribution, dealer approval gates, and GST billing." },
  { name: "Apparel & Retail E-Commerce", desc: "B2B dealer pricing tiers, bulk RFQ workflows, and consumer shopping." },
  { name: "Digital Media & Publishing", desc: "AI-assisted newsroom research, editorial approvals, and multi-channel publishing." },
  { name: "Inventory & Spare Parts", desc: "Relational compatibility matrices between replacement parts and machine models." },
  { name: "Education & NGOs", desc: "Community trust platforms, activity archives, leadership messages, and announcements." },
  { name: "Tourism & Hospitality", desc: "Tour package booking systems, room reservations, and integrated restaurant billing." },
  { name: "Community & Local Platforms", desc: "Regional business digitization, facility management, and member directories." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Hero */}
        <section className="hero page-hero">
          <div className="container">
            <span className="eyebrow">ABOUT AMIT JANGID</span>
            <h1>Developer. AI Automation Builder. Problem Solver.</h1>
            <p style={{ maxWidth: "780px", color: "var(--muted)", margin: "16px 0 0", fontSize: "1.1rem" }}>
              Based in Haryana, India, Amit Jangid focuses on understanding real business requirements
              and translating them into structured, reliable digital systems.
            </p>
          </div>
        </section>

        {/* Narrative & Philosophy */}
        <section className="solutions" style={{ paddingBottom: "60px" }}>
          <div className="container">
            <div style={{ display: "grid", gap: "32px" }}>
              {/* Introduction Card */}
              <div
                style={{
                  background: "var(--panel)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-lg)",
                  padding: "40px",
                  boxShadow: "var(--shadow)",
                }}
              >
                <span className="eyebrow">Professional Introduction</span>
                <h2 style={{ fontSize: "1.85rem", margin: "8px 0 16px", color: "var(--secondary)" }}>
                  Connecting Real Business Needs with Practical Digital Products
                </h2>
                <p style={{ color: "var(--text)", lineHeight: "1.75", fontSize: "1.04rem" }}>
                  Amit Jangid is a technology-focused developer and digital solutions builder interested in creating
                  practical, scalable, and business-oriented digital products. His work spans full-stack web applications,
                  AI-powered automation, e-commerce ecosystems, financial services software, inventory management, and
                  digital media platforms.
                </p>
                <p style={{ color: "var(--text-muted)", lineHeight: "1.75", fontSize: "1.02rem", marginTop: "14px" }}>
                  Rather than viewing software merely as code syntax, Amit approaches every project by deconstructing the
                  underlying business operations: identifying who the users are, what manual friction they face, how data
                  must flow between entities, and how automation can save valuable hours. He has explored a diverse range
                  of architectures, from multi-loan microfinance platforms and B2B commerce workflows to AI newsroom systems
                  and community organization portals.
                </p>
              </div>

              {/* Mission & Vision Grid */}
              <div className="solution-grid">
                <div className="solution-box">
                  <span className="eyebrow">Guiding Mission</span>
                  <h3 style={{ fontSize: "1.4rem", margin: "8px 0 12px" }}>Professional Mission</h3>
                  <p style={{ fontSize: "1.02rem", lineHeight: "1.7", color: "var(--text)" }}>
                    To build useful, intelligent, and scalable digital solutions that help businesses,
                    organizations, and communities improve their operations, reach more people, and grow through technology.
                  </p>
                </div>

                <div className="solution-box">
                  <span className="eyebrow">Strategic Horizon</span>
                  <h3 style={{ fontSize: "1.4rem", margin: "8px 0 12px" }}>Long-Term Vision</h3>
                  <p style={{ fontSize: "1.02rem", lineHeight: "1.7", color: "var(--text)" }}>
                    To develop an ecosystem of modern digital products that combines web applications,
                    artificial intelligence, automation, and business intelligence to solve real-world problems.
                  </p>
                </div>
              </div>

              {/* Core Professional Identity Card */}
              <div
                style={{
                  background: "var(--surface-container-low)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-lg)",
                  padding: "36px",
                }}
              >
                <span className="eyebrow">Multidisciplinary Profile</span>
                <h3 style={{ fontSize: "1.6rem", margin: "8px 0 16px", color: "var(--secondary)" }}>
                  Core Professional Competencies
                </h3>
                <p style={{ color: "var(--text-muted)", marginBottom: "20px" }}>
                  Amit operates across all layers of digital product creation:
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                  <div style={{ background: "#FFFFFF", padding: "18px 20px", borderRadius: "var(--radius-md)", border: "1px solid var(--line)" }}>
                    <strong style={{ color: "var(--primary)", display: "block", marginBottom: "4px" }}>Full-Stack Web Engineering</strong>
                    <span style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>
                      Modern React, Next.js (Turbopack), PHP REST APIs, Node.js, and responsive UI design.
                    </span>
                  </div>

                  <div style={{ background: "#FFFFFF", padding: "18px 20px", borderRadius: "var(--radius-md)", border: "1px solid var(--line)" }}>
                    <strong style={{ color: "var(--primary)", display: "block", marginBottom: "4px" }}>AI Agents & Automation</strong>
                    <span style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>
                      AI-assisted research, multi-agent orchestration, editorial review workflows, and messaging bots.
                    </span>
                  </div>

                  <div style={{ background: "#FFFFFF", padding: "18px 20px", borderRadius: "var(--radius-md)", border: "1px solid var(--line)" }}>
                    <strong style={{ color: "var(--primary)", display: "block", marginBottom: "4px" }}>Fintech & ERP Software</strong>
                    <span style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>
                      Multi-loan microfinance ERP, EMI calculation logic, customer ledgers, and transaction management.
                    </span>
                  </div>

                  <div style={{ background: "#FFFFFF", padding: "18px 20px", borderRadius: "var(--radius-md)", border: "1px solid var(--line)" }}>
                    <strong style={{ color: "var(--primary)", display: "block", marginBottom: "4px" }}>B2B & B2C E-Commerce</strong>
                    <span style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>
                      Dealer approval portals, tiered wholesale pricing, RFQ pipelines, and GST-compliant invoicing.
                    </span>
                  </div>

                  <div style={{ background: "#FFFFFF", padding: "18px 20px", borderRadius: "var(--radius-md)", border: "1px solid var(--line)" }}>
                    <strong style={{ color: "var(--primary)", display: "block", marginBottom: "4px" }}>Relational Database Schemas</strong>
                    <span style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>
                      MySQL relational design, foreign key integrity, business record indexing, and data modeling.
                    </span>
                  </div>

                  <div style={{ background: "#FFFFFF", padding: "18px 20px", borderRadius: "var(--radius-md)", border: "1px solid var(--line)" }}>
                    <strong style={{ color: "var(--primary)", display: "block", marginBottom: "4px" }}>Hosting & Infrastructure</strong>
                    <span style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>
                      Git/GitHub version control, Hostinger deployment, environment config, and production optimization.
                    </span>
                  </div>
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
                  Business & Industry Domains Explored
                </h3>
                <p style={{ color: "var(--text-muted)", marginBottom: "22px" }}>
                  A broad but coherent interest in engineering software for real businesses across varied sectors:
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
                <span className="eyebrow">Open for Collaboration</span>
                <h2 style={{ fontSize: "2rem", color: "var(--secondary)", margin: "10px 0" }}>
                  Let&apos;s build practical digital solutions together.
                </h2>
                <p style={{ color: "var(--muted)", maxWidth: "600px", margin: "0 auto 24px", fontSize: "1.04rem" }}>
                  Whether you are planning a new software application, need advice on database architecture,
                  or want to automate operational workflows, let&apos;s connect.
                </p>
                <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-primary" style={{ padding: "12px 28px" }}>
                    GET A QUOTE
                  </Link>
                  <a
                    href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20read%20about%20your%20background%20and%20want%20to%20collaborate."
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
            <Link href="/" className="brand" aria-label="Amit Jangid • NarnaulOnline">
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
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="footer-contact">
            <a href="tel:+919416341097">+91 9416341097</a>
            <a href="mailto:onlinenarnaul@gmail.com">onlinenarnaul@gmail.com</a>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>Haryana, India</span>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Amit Jangid • NarnaulOnline. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
