import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Sleek Pre-Footer Callout */}
      <div className="container">
        <div className="footer-pre-banner">
          <div className="footer-pre-copy">
            <span className="eyebrow">READY TO BUILD SOMETHING SMARTER?</span>
            <h3 className="footer-pre-title">
              Architect high-performance web applications with Zero-Database overhead.
            </h3>
            <p className="footer-pre-desc">
              Connect directly with Founder & Principal Solutions Architect Amit Jangid for your system blueprint, custom ERP, or wholesale commerce platform.
            </p>
          </div>
          <div className="footer-pre-actions">
            <Link href="/#estimator" className="btn btn-primary" style={{ padding: "10px 22px", fontSize: "13px" }}>
              ⚡ SCOPE CONFIGURATOR
            </Link>
            <a
              href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20reviewed%20your%20website%20and%20would%20like%20to%20discuss%20a%20development%20project."
              className="btn btn-whatsapp"
              target="_blank"
              rel="noreferrer"
              style={{ padding: "10px 22px", fontSize: "13px" }}
            >
              💬 CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Navigation Grid */}
      <div className="container footer-main-grid">
        {/* Column 1: Organization Identity & Headquarters */}
        <div className="footer-col footer-col-brand">
          <Link href="/" className="brand" aria-label="NarnaulOnline • Full-Stage Software Development Organization">
            <Image
              src="/logo.png"
              alt="NarnaulOnline Logo"
              width={210}
              height={50}
              className="brand-logo"
            />
          </Link>
          <p className="footer-brand-text">
            <strong>NarnaulOnline</strong> is a full-stage digital software engineering organization founded and led by <strong>Amit Jangid</strong>. We specialize in zero-database serverless architectures, custom business portals, wholesale catalogs, and deterministic financial calculation engines.
          </p>

          <div className="footer-status-badge">
            <span className="footer-status-dot"></span>
            <span>All Systems Operational • Zero-DB Architecture</span>
          </div>

          <div className="footer-location-chip">
            <span className="chip-icon">📍</span>
            <div>
              <strong>Headquarters:</strong> Narnaul, Haryana, India (123001)
              <span className="chip-sub">In-Person Delhi NCR & Global Remote Delivery</span>
            </div>
          </div>
        </div>

        {/* Column 2: Engineering & Solutions */}
        <div className="footer-col">
          <h4 className="footer-col-title">Engineering Solutions</h4>
          <ul className="footer-links-list">
            <li>
              <Link href="/#services">Zero-DB Web Applications</Link>
            </li>
            <li>
              <Link href="/#services">Microfinance & Loan ERPs</Link>
            </li>
            <li>
              <Link href="/#services">Wholesale B2B E-Commerce</Link>
            </li>
            <li>
              <Link href="/#services">Custom Admin Dashboards</Link>
            </li>
            <li>
              <Link href="/#services">Deterministic Billing Engines</Link>
            </li>
            <li>
              <Link href="/#services">Autonomous AI Multi-Agents</Link>
            </li>
            <li>
              <Link href="/#services">Vercel & Hostinger Cloud Edge</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Architecture & Organization */}
        <div className="footer-col">
          <h4 className="footer-col-title">Architecture & System</h4>
          <ul className="footer-links-list">
            <li>
              <Link href="/#stacks">Architectural Stacks in Production</Link>
            </li>
            <li>
              <Link href="/#estimator">Zero-DB Scope Configurator</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio & Client Deliverables</Link>
            </li>
            <li>
              <Link href="/about">Organization Overview & Vision</Link>
            </li>
            <li>
              <Link href="/about#leadership">Leadership: Amit Jangid</Link>
            </li>
            <li>
              <Link href="/contact#map">Physical Office & Regional Presence</Link>
            </li>
            <li>
              <Link href="/contact#contact-form">Project Intake & RFQ Form</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Direct Engineering Desk & Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Direct Engineering Desk</h4>
          <p className="footer-desk-desc">
            Direct access to Principal Architect Amit Jangid for project inquiries, technical blueprints, and execution timelines.
          </p>

          <div className="footer-contact-items">
            <a href="tel:+919416341097" className="footer-contact-link">
              <span className="contact-icon">📞</span>
              <div>
                <span className="contact-label">Direct Consultation</span>
                <strong className="contact-val">+91 9416341097</strong>
              </div>
            </a>

            <a href="mailto:onlinenarnaul@gmail.com" className="footer-contact-link">
              <span className="contact-icon">✉️</span>
              <div>
                <span className="contact-label">Engineering Inbox</span>
                <strong className="contact-val">onlinenarnaul@gmail.com</strong>
              </div>
            </a>

            <a
              href="https://wa.me/919416341097?text=Hello%20NarnaulOnline%20Engineering%20Desk%2C%20I%20have%20a%20project%20inquiry."
              className="footer-contact-link whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">💬</span>
              <div>
                <span className="contact-label">WhatsApp Lead Desk</span>
                <strong className="contact-val">+91 9416341097 (Instant)</strong>
              </div>
            </a>
          </div>

          <div className="footer-sla-badge">
            <span>⚡ Typical Response SLA: Under 2 Hours</span>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Technology Meta Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <div className="footer-copyright">
            <p>
              © {currentYear} <strong>NarnaulOnline</strong>. Full-Stage Software Development Organization. Founded & Directed by <strong>Amit Jangid</strong>.
            </p>
          </div>

          <div className="footer-tech-stack">
            <span>Next.js 16</span>
            <span className="tech-sep">•</span>
            <span>React 19</span>
            <span className="tech-sep">•</span>
            <span>Turbopack</span>
            <span className="tech-sep">•</span>
            <span>Zero-DB Architecture</span>
          </div>

          <div className="footer-bottom-links">
            <Link href="/about">Organization</Link>
            <Link href="/#stacks">Architecture</Link>
            <Link href="/#estimator">Scope</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Intake</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
