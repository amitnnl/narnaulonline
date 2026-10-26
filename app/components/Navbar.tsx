"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SolutionItem {
  icon: string;
  title: string;
  desc: string;
  href: string;
}

interface ArchItem {
  icon: string;
  title: string;
  desc: string;
  href: string;
}

const solutionsList: SolutionItem[] = [
  {
    icon: "🌐",
    title: "Enterprise Web Applications",
    desc: "Next.js 15, React 19 & scalable business platforms engineered for high throughput.",
    href: "/#services",
  },
  {
    icon: "⚡",
    title: "Zero-Database Systems",
    desc: "Stateless, decoupled edge compute architectures with zero monthly DB overhead.",
    href: "/#stacks",
  },
  {
    icon: "🤖",
    title: "AI & Workflow Automation",
    desc: "Autonomous agent pipelines, LLM tool-calling, and custom newsroom/content OS.",
    href: "/#services",
  },
  {
    icon: "🏢",
    title: "Custom ERP & Operations Portals",
    desc: "High-security internal tools, financial loan ERPs, inventory & catalog engines.",
    href: "/#services",
  },
];

const archList: ArchItem[] = [
  {
    icon: "🏗️",
    title: "Battle-Tested Tech Stacks",
    desc: "Production-grade Next.js, Node.js, TypeScript, REST APIs & modern CSS tokens.",
    href: "/#stacks",
  },
  {
    icon: "🔒",
    title: "Zero-DB Edge Deployment",
    desc: "Deterministic JSON schema state, static hosting on Vercel/Cloudflare, zero fees.",
    href: "/#stacks",
  },
  {
    icon: "🎯",
    title: "Milestone-Based Engineering",
    desc: "Transparent sprint deliverables, weekly demo commits, and full code handover.",
    href: "/#stacks",
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<"solutions" | "architecture" | "desk" | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLElement | null>(null);

  // Track window scroll for subtle elevation adjustment
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route/pathname changes
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Click outside to close any open flyouts
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Hover handlers with debounce to prevent menu flickering
  const handleMouseEnter = (dropdown: "solutions" | "architecture" | "desk") => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleDropdown = (dropdown: "solutions" | "architecture" | "desk") => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const isCurrent = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/about" && pathname === "/about") return true;
    if (href === "/portfolio" && pathname === "/portfolio") return true;
    if (href === "/contact" && pathname === "/contact") return true;
    return false;
  };

  return (
    <header className="site-header-wrapper" ref={navContainerRef}>
      <div className={`site-header-island ${scrolled ? "scrolled" : ""}`}>
        {/* Brand Group */}
        <div className="nav-brand-group">
          <Link href="/" className="brand-link" aria-label="NarnaulOnline • Full-Stage Digital Software Development Organization">
            <Image
              src="/logo.png"
              alt="NarnaulOnline • Full-Stage Software Development Organization"
              width={145}
              height={34}
              className="brand-logo"
              priority
            />
          </Link>

          <div className="brand-meta-badge" title="Full-Stage Digital Development Organization">
            <span className="brand-org-text">ORG</span>
            <span className="brand-live-dot" title="Engineering Desk Active"></span>
          </div>
        </div>

        {/* Central Thoughtful Navigation */}
        <nav className="main-nav desktop-nav" aria-label="Primary Navigation">
          {/* Solutions Dropdown */}
          <div
            className="nav-dropdown-trigger-wrap"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`nav-link-btn ${activeDropdown === "solutions" ? "active" : ""}`}
              onClick={() => toggleDropdown("solutions")}
              aria-haspopup="true"
              aria-expanded={activeDropdown === "solutions"}
            >
              <span>Solutions</span>
              <svg
                className={`nav-chevron ${activeDropdown === "solutions" ? "open" : ""}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Solutions Flyout Card */}
            {activeDropdown === "solutions" && (
              <div className="nav-flyout-card solutions-flyout" role="menu">
                <div className="flyout-header">
                  <span className="flyout-kicker">ENGINEERING CAPABILITIES</span>
                  <span className="flyout-badge">Zero-DB Ready</span>
                </div>

                <div className="flyout-grid">
                  {solutionsList.map((sol) => (
                    <Link
                      key={sol.title}
                      href={sol.href}
                      className="flyout-item"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="flyout-icon-box">{sol.icon}</div>
                      <div className="flyout-text">
                        <strong className="flyout-item-title">{sol.title}</strong>
                        <p className="flyout-item-desc">{sol.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="flyout-footer">
                  <Link
                    href="/#services"
                    className="flyout-footer-link"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>Explore All 6 Production Capabilities</span>
                    <span className="footer-arrow">→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Architecture Dropdown */}
          <div
            className="nav-dropdown-trigger-wrap"
            onMouseEnter={() => handleMouseEnter("architecture")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`nav-link-btn ${activeDropdown === "architecture" ? "active" : ""}`}
              onClick={() => toggleDropdown("architecture")}
              aria-haspopup="true"
              aria-expanded={activeDropdown === "architecture"}
            >
              <span>Architecture</span>
              <svg
                className={`nav-chevron ${activeDropdown === "architecture" ? "open" : ""}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Architecture Flyout Card */}
            {activeDropdown === "architecture" && (
              <div className="nav-flyout-card arch-flyout" role="menu">
                <div className="flyout-header">
                  <span className="flyout-kicker">ENGINEERING PILLARS</span>
                  <span className="flyout-badge">Production Verified</span>
                </div>

                <div className="flyout-grid arch-grid">
                  {archList.map((arch) => (
                    <Link
                      key={arch.title}
                      href={arch.href}
                      className="flyout-item"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="flyout-icon-box">{arch.icon}</div>
                      <div className="flyout-text">
                        <strong className="flyout-item-title">{arch.title}</strong>
                        <p className="flyout-item-desc">{arch.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="flyout-footer">
                  <Link
                    href="/#stacks"
                    className="flyout-footer-link"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>View Stacks & Architectural Schemas</span>
                    <span className="footer-arrow">→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Portfolio Link with Delivered Count */}
          <Link
            href="/portfolio"
            className={`nav-link-item ${isCurrent("/portfolio") ? "active" : ""}`}
          >
            <span>Portfolio</span>
            <span className="nav-count-pill">12+</span>
          </Link>

          {/* About Link */}
          <Link
            href="/about"
            className={`nav-link-item ${isCurrent("/about") ? "active" : ""}`}
          >
            <span>About</span>
          </Link>

          {/* Scope Builder Anchor with Pulse Sparkle */}
          <Link
            href="/#estimator"
            className="nav-link-item nav-estimator-item"
          >
            <span className="estimator-sparkle">⚡</span>
            <span>Scope Builder</span>
          </Link>
        </nav>

        {/* Action Cluster (Executive Desk Flyout + Primary Action) */}
        <div className="nav-action-cluster">
          {/* Executive Direct Desk Popover Trigger */}
          <div
            className="nav-dropdown-trigger-wrap"
            onMouseEnter={() => handleMouseEnter("desk")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`nav-desk-pill-btn ${activeDropdown === "desk" ? "active" : ""}`}
              onClick={() => toggleDropdown("desk")}
              aria-label="Connect with Principal Architect Amit Jangid"
              aria-haspopup="true"
              aria-expanded={activeDropdown === "desk"}
            >
              <span className="desk-pulse-indicator"></span>
              <span className="desk-label">Live Desk</span>
              <svg
                className={`desk-chevron ${activeDropdown === "desk" ? "open" : ""}`}
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Executive Direct Connect Card */}
            {activeDropdown === "desk" && (
              <div className="nav-flyout-card desk-flyout-card" role="dialog" aria-label="Executive Engineering Desk">
                <div className="desk-card-head">
                  <div className="desk-avatar">AJ</div>
                  <div className="desk-profile">
                    <strong className="desk-name">Amit Jangid</strong>
                    <span className="desk-role">Principal Software Architect</span>
                  </div>
                  <span className="desk-status-chip">
                    <span className="chip-dot"></span> Online
                  </span>
                </div>

                <div className="desk-card-body">
                  <p className="desk-bio-line">
                    Direct architectural alignment for enterprise web apps, Zero-DB setups, and custom ERP systems.
                  </p>

                  <div className="desk-quick-links">
                    <a
                      href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20reviewed%20your%20software%20organization%20website%20and%20would%20like%20to%20discuss%20a%20development%20project."
                      className="desk-action-pill whatsapp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="action-icon">💬</span>
                      <div className="action-info">
                        <span className="action-title">WhatsApp Architect</span>
                        <span className="action-meta">+91 9416341097</span>
                      </div>
                    </a>

                    <a
                      href="tel:+919416341097"
                      className="desk-action-pill phone"
                    >
                      <span className="action-icon">📞</span>
                      <div className="action-info">
                        <span className="action-title">Direct Call Desk</span>
                        <span className="action-meta">+91 9416341097</span>
                      </div>
                    </a>

                    <a
                      href="mailto:onlinenarnaul@gmail.com"
                      className="desk-action-pill email"
                    >
                      <span className="action-icon">✉️</span>
                      <div className="action-info">
                        <span className="action-title">Official Engineering Email</span>
                        <span className="action-meta">onlinenarnaul@gmail.com</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="desk-card-foot">
                  <span>📍 Narnaul, HR & Delhi NCR • Global Delivery</span>
                </div>
              </div>
            )}
          </div>

          {/* Primary Call-to-Action */}
          <Link href="/#estimator" className="btn btn-primary nav-primary-cta">
            <span>Start Project</span>
            <span className="cta-arrow">→</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
      </div>

      {/* Thoughtful Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
            {/* Drawer Top Header */}
            <div className="mobile-drawer-top">
              <div className="mobile-brand-wrap">
                <Image
                  src="/logo.png"
                  alt="NarnaulOnline Logo"
                  width={140}
                  height={32}
                  className="mobile-brand-logo"
                />
              </div>

              <button
                type="button"
                className="mobile-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Principal Architect Contact Card */}
            <div className="mobile-architect-card">
              <div className="architect-head">
                <div className="architect-badge">
                  <span className="pulse-green-dot"></span>
                  <strong>Direct Engineering Desk</strong>
                </div>
                <span className="architect-leader">Amit Jangid</span>
              </div>
              <p className="architect-sub">
                Founder & Principal Architect. In-Person Narnaul/Delhi NCR & Global Remote.
              </p>
              <div className="architect-quick-buttons">
                <a
                  href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20am%20interested%20in%20discussing%20a%20development%20project."
                  className="btn btn-whatsapp architect-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 WhatsApp
                </a>
                <a href="tel:+919416341097" className="btn btn-secondary architect-btn">
                  📞 Call Desk
                </a>
              </div>
            </div>

            {/* Structured Navigation Groups */}
            <div className="mobile-nav-scroll-area">
              <div className="mobile-group">
                <div className="mobile-group-title">SOLUTIONS & SERVICES</div>
                <div className="mobile-links-stack">
                  <Link
                    href="/#services"
                    className="mobile-item-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="item-icon">🌐</span>
                    <div className="item-text">
                      <strong>Enterprise Web Applications</strong>
                      <small>Next.js 15, React 19 & High Performance</small>
                    </div>
                    <span className="item-arrow">→</span>
                  </Link>

                  <Link
                    href="/#stacks"
                    className="mobile-item-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="item-icon">⚡</span>
                    <div className="item-text">
                      <strong>Zero-Database Systems</strong>
                      <small>Stateless Edge Runtimes & Zero DB Fees</small>
                    </div>
                    <span className="item-arrow">→</span>
                  </Link>

                  <Link
                    href="/#services"
                    className="mobile-item-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="item-icon">🤖</span>
                    <div className="item-text">
                      <strong>AI & Workflow Automations</strong>
                      <small>Agentic pipelines & custom publishing OS</small>
                    </div>
                    <span className="item-arrow">→</span>
                  </Link>

                  <Link
                    href="/#services"
                    className="mobile-item-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="item-icon">🏢</span>
                    <div className="item-text">
                      <strong>Custom ERPs & Business Portals</strong>
                      <small>Financial, inventory & operational systems</small>
                    </div>
                    <span className="item-arrow">→</span>
                  </Link>
                </div>
              </div>

              <div className="mobile-group">
                <div className="mobile-group-title">ORGANIZATION & WORK</div>
                <div className="mobile-links-stack">
                  <Link
                    href="/portfolio"
                    className={`mobile-item-link ${isCurrent("/portfolio") ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="item-icon">💼</span>
                    <div className="item-text">
                      <strong>Portfolio & Systems</strong>
                      <small>12+ real-world verified projects</small>
                    </div>
                    <span className="item-arrow">→</span>
                  </Link>

                  <Link
                    href="/about"
                    className={`mobile-item-link ${isCurrent("/about") ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="item-icon">🏛️</span>
                    <div className="item-text">
                      <strong>About NarnaulOnline</strong>
                      <small>Organization ethos & engineering standards</small>
                    </div>
                    <span className="item-arrow">→</span>
                  </Link>

                  <Link
                    href="/contact"
                    className={`mobile-item-link ${isCurrent("/contact") ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="item-icon">📍</span>
                    <div className="item-text">
                      <strong>Direct Engineering Contact</strong>
                      <small>Narnaul office & official channels</small>
                    </div>
                    <span className="item-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="mobile-drawer-bottom">
              <Link
                href="/#estimator"
                className="btn btn-primary mobile-cta-btn"
                onClick={() => setMenuOpen(false)}
              >
                <span>⚡ SCOPE CONFIGURATOR</span>
                <span>→</span>
              </Link>
              <div className="mobile-drawer-office-tag">
                Station Road, Narnaul, Haryana 123001 • Global Delivery
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
