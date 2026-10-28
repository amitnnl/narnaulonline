"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Architectures", href: "/#architectures" },
  { label: "Case Studies", href: "/portfolio", badge: "12+" },
  { label: "Scope Estimator", href: "/#estimator" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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

  // Close mobile drawer when route changes
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
      {/* Top Pre-Header Utility Bar */}
      <div className="site-pre-header" aria-label="Studio Quick Status">
        <div className="pre-header-container">
          <div className="pre-header-left">
            <span className="pre-live-dot" title="Engineering Desk Active"></span>
            <span><strong>NarnaulOnline Studio</strong> • Digital Software Engineering Agency</span>
          </div>

          <div className="pre-header-center">
            <span className="pre-pill-badge">
              ⚡ Next.js 16 • React 19 • TypeScript • Edge Deployment
            </span>
          </div>

          <div className="pre-header-right">
            <a href="mailto:hello@narnaulonline.com" className="pre-header-link" title="Direct Email">
              <span>✉ hello@narnaulonline.com</span>
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a
              href="https://wa.me/919416341097?text=Hello%20NarnaulOnline%20Team%2C%20I%20am%20interested%20in%20building%20a%20web%20application."
              className="pre-header-link pre-whatsapp"
              target="_blank"
              rel="noreferrer"
              title="Instant WhatsApp Desk"
            >
              <span>💬 WhatsApp (+91 9416341097)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Island */}
      <div className="site-header-island">
        {/* Brand */}
        <div className="nav-brand-group">
          <Link href="/" className="brand-link" aria-label="NarnaulOnline Studio Homepage">
            <Image
              src="/logo.png"
              alt="NarnaulOnline Studio"
              width={150}
              height={36}
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>
          <span className="brand-meta-badge">STUDIO</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
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

        {/* Desktop Action CTAs */}
        <div className="nav-action-cluster">
          <a
            href="https://wa.me/919416341097?text=Hello%20NarnaulOnline%20Team%2C%20I%20would%20like%20to%20consult%20with%20your%20engineering%20desk."
            className="nav-whatsapp-btn"
            target="_blank"
            rel="noreferrer"
          >
            <span className="whatsapp-live-dot"></span>
            <span>WhatsApp Desk</span>
          </a>

          <Link href="/contact" className="btn btn-primary btn-sm">
            <span>Start a Project</span>
            <span>→</span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
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
            <div className="mobile-drawer-top">
              <Image
                src="/logo.png"
                alt="NarnaulOnline Studio"
                width={140}
                height={34}
                style={{ objectFit: "contain" }}
              />
              <button
                type="button"
                className="mobile-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mobile-links-stack">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`mobile-item-link ${active ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    {link.badge ? (
                      <span className="nav-count-pill">{link.badge}</span>
                    ) : (
                      <span>→</span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link
                href="/contact"
                className="btn btn-primary"
                onClick={() => setMenuOpen(false)}
              >
                Start a Project →
              </Link>
              <a
                href="https://wa.me/919416341097?text=Hello%20NarnaulOnline%20Team%2C%20I%20want%20to%20discuss%20a%20project."
                className="btn btn-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
