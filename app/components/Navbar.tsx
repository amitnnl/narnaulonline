"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/", icon: "🏠" },
  { label: "Organization", href: "/about", icon: "🏢" },
  { label: "Solutions", href: "/#services", icon: "⚡" },
  { label: "Architecture", href: "/#stacks", icon: "🏗️" },
  { label: "Scope Configurator", href: "/#estimator", icon: "🎛️", badge: "Live" },
  { label: "Portfolio", href: "/portfolio", icon: "💼" },
  { label: "Contact", href: "/contact", icon: "📞" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/about" && pathname === "/about") return true;
    if (href === "/portfolio" && pathname === "/portfolio") return true;
    if (href === "/contact" && pathname === "/contact") return true;
    return false;
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      {/* Sleek Unified Glassmorphic Navbar */}
      <div className="container nav-wrap">
        {/* Brand Logo & Live Operational Status */}
        <div className="nav-brand-group">
          <Link href="/" className="brand" aria-label="NarnaulOnline • Full-Stage Software Development Organization">
            <Image
              src="/logo.png"
              alt="NarnaulOnline • Full-Stage Software Development Organization"
              width={210}
              height={48}
              className="brand-logo"
              priority
            />
          </Link>

          <div className="nav-status-pill" title="System Operational • Direct Architecture with Amit Jangid">
            <span className="live-dot-pulse"></span>
            <span className="nav-status-text">Live Desk</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="main-nav desktop-nav" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link-item ${isActive(link.href) ? "active" : ""}`}
            >
              <span>{link.label}</span>
              {link.badge && <span className="nav-item-badge">{link.badge}</span>}
            </Link>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="nav-actions">
          <a
            href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20saw%20your%20software%20organization%20website%20and%20want%20to%20discuss%20a%20development%20project."
            className="nav-whatsapp-btn"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat directly on WhatsApp with Principal Architect Amit Jangid"
          >
            <span className="whatsapp-live-dot"></span>
            <span>💬 Desk</span>
          </a>

          <Link href="/#estimator" className="btn btn-primary nav-cta-btn">
            SCOPE CONFIGURATOR →
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="mobile-drawer" onClick={() => setMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="mobile-drawer-brand">
                <Image
                  src="/logo.png"
                  alt="NarnaulOnline Logo"
                  width={170}
                  height={42}
                  className="mobile-brand-logo"
                />
              </div>
              <button
                className="mobile-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Mobile Operational Status Card */}
            <div className="mobile-status-card">
              <div className="mobile-status-header">
                <span className="live-dot-pulse"></span>
                <strong>Live Engineering Desk</strong>
              </div>
              <p className="mobile-status-text">
                Direct Architecture with <strong>Amit Jangid</strong>. In-Person Narnaul/Delhi NCR & Global Remote.
              </p>
            </div>

            {/* Mobile Nav Links */}
            <div className="mobile-nav-group-label">SYSTEM NAVIGATION</div>
            <nav className="mobile-nav-list">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`mobile-nav-link ${isActive(link.href) ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="mobile-nav-label-wrap">
                    <span className="mobile-link-icon">{link.icon}</span>
                    <span className="mobile-link-text">{link.label}</span>
                    {link.badge && <span className="nav-item-badge">{link.badge}</span>}
                  </span>
                  <span className="mobile-arrow">→</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Contact Quick Cards */}
            <div className="mobile-drawer-contact-cards">
              <a href="tel:+919416341097" className="mobile-contact-pill">
                <span>📞 Call Amit Jangid: +91 9416341097</span>
              </a>
              <a href="mailto:onlinenarnaul@gmail.com" className="mobile-contact-pill">
                <span>✉️ onlinenarnaul@gmail.com</span>
              </a>
            </div>

            {/* Mobile Drawer Actions */}
            <div className="mobile-drawer-actions">
              <Link
                href="/#estimator"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "14px" }}
                onClick={() => setMenuOpen(false)}
              >
                ⚡ SCOPE CONFIGURATOR
              </Link>

              <a
                href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20saw%20your%20software%20organization%20website%20and%20want%20to%20discuss%20a%20development%20project."
                className="btn btn-whatsapp"
                style={{ width: "100%", justifyContent: "center", padding: "14px" }}
                target="_blank"
                rel="noreferrer"
              >
                💬 Chat on WhatsApp (+91 9416341097)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
