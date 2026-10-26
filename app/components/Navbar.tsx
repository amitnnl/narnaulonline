"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
  icon: string;
  badge?: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/", icon: "🏠" },
  { label: "About", href: "/about", icon: "🏢" },
  { label: "Services", href: "/services", icon: "⚡" },
  { label: "Portfolio", href: "/portfolio", icon: "💼", badge: "12+" },
  { label: "Contact", href: "/contact", icon: "📍" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  // Close mobile drawer when pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname === href) return true;
    return false;
  };

  return (
    <header className={`site-header-wrapper ${scrolled ? "scrolled" : ""}`}>
      {/* Executive Pre-Header Utility Bar */}
      <div className="site-pre-header" aria-label="Executive Organization Quick Bar">
        <div className="pre-header-container">
          {/* Left: Physical Headquarters & Leadership */}
          <div className="pre-header-left">
            <span className="pre-header-item">
              <span className="pre-icon">📍</span>
              <span className="pre-hq-text">Station Road, Narnaul, Haryana (123001)</span>
            </span>
            <span className="pre-header-sep">•</span>
            <span className="pre-header-item pre-desk-item">
              <span className="pre-live-dot" title="Engineering Desk Active"></span>
              <span>Desk: <strong>Amit Jangid</strong></span>
            </span>
          </div>

          {/* Center: Zero-DB Architecture Focus */}
          <div className="pre-header-center">
            <span className="pre-pill-badge">
              ⚡ Zero-DB Architecture • ₹0 Monthly Server Overhead
            </span>
          </div>

          {/* Right: Quick Direct Contact Desk & SLA */}
          <div className="pre-header-right">
            <a href="tel:+919416341097" className="pre-header-link" title="Direct Phone Consultation">
              <span>📞 +91 9416341097</span>
            </a>
            <span className="pre-header-sep">•</span>
            <a
              href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20reviewed%20your%20software%20organization%20website%20and%20want%20to%20discuss%20a%20development%20project."
              className="pre-header-link pre-whatsapp"
              target="_blank"
              rel="noreferrer"
              title="Instant WhatsApp Consultation"
            >
              <span>💬 WhatsApp Desk</span>
            </a>
            <span className="pre-header-sep">•</span>
            <span className="pre-header-item pre-sla">
              <span>⚡ SLA: &lt; 2h</span>
            </span>
          </div>
        </div>
      </div>

      <div className="site-header-island">
        {/* Brand Group */}
        <div className="nav-brand-group">
          <Link
            href="/"
            className="brand-link"
            aria-label="NarnaulOnline • Full-Stage Digital Software Development Organization"
          >
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

        {/* Desktop Navigation Links — Direct & Consistent Functioning Across All Links */}
        <nav className="main-nav desktop-nav" aria-label="Primary Navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-item ${active ? "active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                <span>{link.label}</span>
                {link.badge && <span className="nav-count-pill">{link.badge}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Cluster */}
        <div className="nav-action-cluster">
          <a
            href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20reviewed%20your%20software%20organization%20website%20and%20want%20to%20discuss%20a%20development%20project."
            className="nav-whatsapp-btn"
            target="_blank"
            rel="noreferrer"
            aria-label="Direct WhatsApp Desk with Principal Architect Amit Jangid"
          >
            <span className="whatsapp-live-dot"></span>
            <span>💬 Desk</span>
          </a>

          <Link href="/contact" className="btn btn-primary nav-primary-cta">
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

      {/* Mobile Drawer Menu */}
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

            {/* Principal Architect Direct Contact Card */}
            <div className="mobile-architect-card">
              <div className="architect-head">
                <div className="architect-badge">
                  <span className="pulse-green-dot"></span>
                  <strong>Live Engineering Desk</strong>
                </div>
                <span className="architect-leader">Amit Jangid</span>
              </div>
              <p className="architect-sub">
                Principal Software Architect. In-Person Narnaul/Delhi NCR & Global Delivery.
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

            {/* Mobile Nav Links — Direct and matching */}
            <div className="mobile-nav-scroll-area">
              <div className="mobile-group-title">NAVIGATION</div>
              <div className="mobile-links-stack">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`mobile-item-link ${active ? "active" : ""}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="item-icon">{link.icon}</span>
                      <div className="item-text">
                        <strong>{link.label}</strong>
                      </div>
                      {link.badge && <span className="nav-count-pill">{link.badge}</span>}
                      <span className="item-arrow">→</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="mobile-drawer-bottom">
              <Link
                href="/contact"
                className="btn btn-primary mobile-cta-btn"
                onClick={() => setMenuOpen(false)}
              >
                <span>⚡ START PROJECT / GET IN TOUCH</span>
                <span>→</span>
              </Link>
              <div className="mobile-drawer-office-tag">
                Station Road, Narnaul, Haryana 123001 • Global Remote
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
