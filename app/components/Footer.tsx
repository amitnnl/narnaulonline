import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Pre-Footer Callout Banner (Stripe / Apple Style) */}
        <div className="footer-pre-banner">
          <div className="footer-pre-copy">
            <span className="eyebrow eyebrow-primary">READY TO BUILD SOMETHING EXCEPTIONAL?</span>
            <h3>Engineering high-performance web applications & custom business platforms.</h3>
            <p>
              Partner with NarnaulOnline Studio to architect, develop, and deploy your custom web app, enterprise ERP, or wholesale commerce platform with zero database maintenance overhead.
            </p>
          </div>
          <div className="footer-pre-actions">
            <Link href="/#estimator" className="btn btn-accent">
              ⚡ Scope Estimator
            </Link>
            <a
              href="https://wa.me/919416341097?text=Hello%20NarnaulOnline%20Team%2C%20I%20would%20like%20to%20discuss%20a%20software%20project."
              className="btn btn-whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp Desk
            </a>
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="footer-main-grid">
          {/* Column 1: Brand & Status */}
          <div className="footer-col footer-col-brand">
            <Link href="/" className="brand-link" aria-label="NarnaulOnline Studio Homepage">
              <Image
                src="/logo.png"
                alt="NarnaulOnline Studio"
                width={170}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <p>
              <strong>NarnaulOnline Studio</strong> is a modern web development & digital engineering agency founded by <strong>Amit Jangid</strong>. We build reactive Next.js frontends, deterministic business logic ERPs, and resilient cloud architectures.
            </p>
            <div className="footer-status-pill">
              <span className="pre-live-dot"></span>
              <span>All Systems Operational • Edge CDN Live</span>
            </div>
          </div>

          {/* Column 2: Engineering Disciplines */}
          <div className="footer-col">
            <h4>Engineering</h4>
            <ul>
              <li><Link href="/#services">Next.js 16 Web Applications</Link></li>
              <li><Link href="/#services">Custom Administrative ERPs</Link></li>
              <li><Link href="/#services">Deterministic Financial Math</Link></li>
              <li><Link href="/#services">B2B Wholesale Commerce</Link></li>
              <li><Link href="/#services">Edge CDN & Cloud Setup</Link></li>
              <li><Link href="/#services">AI Workflow Automation</Link></li>
            </ul>
          </div>

          {/* Column 3: Featured Systems */}
          <div className="footer-col">
            <h4>Case Studies</h4>
            <ul>
              <li><Link href="/portfolio">AI Newsroom OS</Link></li>
              <li><Link href="/portfolio">Loan Management ERP</Link></li>
              <li><Link href="/portfolio">Torvo Power Tools B2B</Link></li>
              <li><Link href="/portfolio">Pragati Fashion Commerce</Link></li>
              <li><Link href="/portfolio">Spare Parts Inventory Matrix</Link></li>
              <li><Link href="/portfolio">Community Education Portal</Link></li>
            </ul>
          </div>

          {/* Column 4: Architecture Stacks */}
          <div className="footer-col">
            <h4>Architectures</h4>
            <ul>
              <li><Link href="/#architectures">Stack 01: Modern Web Apps</Link></li>
              <li><Link href="/#architectures">Stack 02: Fintech ERP Engines</Link></li>
              <li><Link href="/#architectures">Stack 03: AI Automation OS</Link></li>
              <li><Link href="/#estimator">Interactive Scope Estimator</Link></li>
              <li><Link href="/about">Engineering Philosophy</Link></li>
            </ul>
          </div>

          {/* Column 5: Studio Desk */}
          <div className="footer-col">
            <h4>Studio Desk</h4>
            <ul>
              <li><strong style={{ color: "var(--text-primary)" }}>Amit Jangid</strong></li>
              <li><span style={{ color: "var(--text-muted)", fontSize: "0.84rem" }}>Principal Software Architect</span></li>
              <li><a href="tel:+919416341097">📞 +91 9416341097</a></li>
              <li><a href="mailto:hello@narnaulonline.com">✉ hello@narnaulonline.com</a></li>
              <li><span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>Narnaul, Haryana (123001) & Global Remote</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {currentYear} NarnaulOnline Studio. All rights reserved. Directed by Amit Jangid.
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
            Next.js 16 (Turbopack) • React 19 • TypeScript • Sub-100ms Edge Latency
          </div>
        </div>
      </div>
    </footer>
  );
}
