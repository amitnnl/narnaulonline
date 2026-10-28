"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo3D from "./Logo3D";

interface NavLink {
  label: string;
  href: string;
  badge?: string;
  hasDropdown?: boolean;
}

const serviceItems = [
  { title: "Full-Stack Web Apps", desc: "Next.js 16, React 19, Turbopack & Edge APIs", href: "/#services", icon: "💻" },
  { title: "Enterprise ERPs & Portals", desc: "4-tier RBAC, data tables & audit trails", href: "/#services", icon: "💼" },
  { title: "Deterministic Math Engines", desc: "Zero-drift loan EMI, amortization & GST", href: "/#services", icon: "⚙️" },
  { title: "B2B Wholesale & Commerce", desc: "Multi-tier pricing, compatibility & RFQ", href: "/#services", icon: "🛒" },
  { title: "Zero-DB Cloud Setup", desc: "Serverless edge CDN, ₹0/mo DB fees", href: "/#services", icon: "🌐" },
  { title: "AI Workflows & Agents", desc: "Human review gates & WhatsApp webhooks", href: "/#services", icon: "🤖" },
];

const commandPaletteItems = [
  { id: "hero", label: "Jump to Hero & Live Sandbox", shortcut: "H", href: "/#top", icon: "🚀", category: "Navigation" },
  { id: "services", label: "Explore Engineering Disciplines", shortcut: "S", href: "/#services", icon: "💻", category: "Navigation" },
  { id: "arch", label: "View Architecture Stacks (Web, ERP, AI)", shortcut: "A", href: "/#architectures", icon: "🏛️", category: "Architecture" },
  { id: "portfolio", label: "Browse Production Case Studies (12+)", shortcut: "P", href: "/portfolio", icon: "💼", category: "Case Studies" },
  { id: "estimator", label: "Open Interactive Scope Estimator", shortcut: "E", href: "/#estimator", icon: "⚡", category: "Tools" },
  { id: "contact", label: "Send Project Inquiry to Desk", shortcut: "C", href: "/#contact", icon: "✉", category: "Inquiries" },
  { id: "cli", label: "Copy CLI: npx @narnaulonline/create-app", shortcut: "X", action: "copy-cli", icon: "📋", category: "Developer" },
  { id: "github", label: "Open GitHub Repository (amitnnl/narnaulonline)", shortcut: "G", external: "https://github.com/amitnnl/narnaulonline", icon: "🐙", category: "Developer" },
  { id: "whatsapp", label: "WhatsApp Desk (+91 9416341097)", shortcut: "W", external: "https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20am%20exploring%20your%20developer%20agency%20website.", icon: "💬", category: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [cmdSearch, setCmdSearch] = useState("");
  const [copiedCli, setCopiedCli] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut listener for Command Palette (⌘K or Ctrl+K) & Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setCmdOpen(false);
        setMenuOpen(false);
        setServicesDropdown(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMenuOpen(false);
    setServicesDropdown(false);
    setCmdOpen(false);
  }, [pathname]);

  const handleCommandAction = (item: typeof commandPaletteItems[0]) => {
    if (item.action === "copy-cli") {
      navigator.clipboard.writeText("npx @narnaulonline/create-app");
      setCopiedCli(true);
      setTimeout(() => {
        setCopiedCli(false);
        setCmdOpen(false);
      }, 1200);
      return;
    }

    if (item.external) {
      window.open(item.external, "_blank");
      setCmdOpen(false);
      return;
    }

    if (item.href) {
      window.location.href = item.href;
      setCmdOpen(false);
    }
  };

  const filteredCommands = commandPaletteItems.filter((item) =>
    item.label.toLowerCase().includes(cmdSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(cmdSearch.toLowerCase())
  );

  return (
    <>
      <header className={`dev-header-wrapper ${scrolled ? "scrolled" : ""}`}>
        {/* Top Developer Announcement Banner */}
        <div className="dev-top-banner">
          <div className="container dev-banner-inner">
            <div className="dev-banner-left">
              <span className="dev-cli-chip">CLI v2.4</span>
              <span className="dev-banner-text">
                <code>npx @narnaulonline/create-app</code> &bull; Next.js 16 (Turbopack) &amp; React 19 Architecture Stacks
              </span>
              <a href="/#architectures" className="dev-banner-link">
                Explore Stacks &rarr;
              </a>
            </div>

            <div className="dev-banner-right">
              <span className="dev-status-pill">
                <span className="pre-live-dot"></span>
                <span>Active Engineering Desk</span>
              </span>
              <span className="dev-divider">|</span>
              <span className="dev-sla-text">SLA &lt; 2h</span>
            </div>
          </div>
        </div>

        {/* Floating Capsule Navbar */}
        <div className="dev-nav-island-container">
          <div className="dev-nav-island">
            {/* Brand Group */}
            <div className="dev-brand-area">
              <Link href="/" className="dev-brand-link" aria-label="NarnaulOnline Studio Home">
                <Logo3D width={142} height={34} />
              </Link>

              {/* Developer Git Branch & Version Badges */}
              <div className="dev-git-badges">
                <span className="git-branch-badge" title="Git Branch: main">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" />
                  </svg>
                  <span>main</span>
                </span>
                <span className="dev-version-chip">v2.4</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="dev-desktop-nav" aria-label="Main Navigation">
              {/* Services with Hover Flyout */}
              <div
                className="dev-nav-dropdown-wrap"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button
                  type="button"
                  className={`dev-nav-link ${servicesDropdown ? "active" : ""}`}
                  onClick={() => setServicesDropdown((prev) => !prev)}
                >
                  <span>Services</span>
                  <span className={`dropdown-chevron ${servicesDropdown ? "open" : ""}`}>▾</span>
                </button>

                {servicesDropdown && (
                  <div className="services-flyout-card">
                    <div className="flyout-header">
                      <span>ENGINEERING DISCIPLINES</span>
                      <small>Next.js 16 &bull; React 19 &bull; APIs</small>
                    </div>
                    <div className="flyout-grid">
                      {serviceItems.map((svc) => (
                        <Link
                          key={svc.title}
                          href={svc.href}
                          className="flyout-item"
                          onClick={() => setServicesDropdown(false)}
                        >
                          <span className="flyout-icon">{svc.icon}</span>
                          <div>
                            <strong>{svc.title}</strong>
                            <p>{svc.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/#architectures" className="dev-nav-link">
                <span>Architectures</span>
              </Link>

              <Link href="/portfolio" className="dev-nav-link">
                <span>Case Studies</span>
                <span className="dev-count-pill">12+</span>
              </Link>

              <Link href="/#estimator" className="dev-nav-link">
                <span>Estimator</span>
              </Link>

              <Link href="/about" className="dev-nav-link">
                <span>About</span>
              </Link>
            </nav>

            {/* Right Developer Action Cluster */}
            <div className="dev-right-cluster">
              {/* Quick Command Palette Trigger (⌘K) */}
              <button
                type="button"
                className="cmd-k-trigger"
                onClick={() => setCmdOpen(true)}
                title="Quick Search & Navigation (Press ⌘K or Ctrl+K)"
              >
                <span className="cmd-search-icon">🔍</span>
                <span className="cmd-label">Quick Jump</span>
                <kbd className="cmd-kbd">⌘K</kbd>
              </button>

              {/* GitHub Repo Link */}
              <a
                href="https://github.com/amitnnl/narnaulonline"
                target="_blank"
                rel="noreferrer"
                className="dev-github-link"
                title="View Source Repository on GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span className="github-star-count">★ Star</span>
              </a>

              {/* Start Project Primary CTA */}
              <Link href="/contact" className="btn btn-primary btn-sm dev-cta-btn">
                <span>Start Project</span>
                <span className="dev-arrow">&rarr;</span>
              </Link>

              {/* Mobile Menu Toggle */}
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
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {menuOpen && (
          <div className="mobile-drawer-overlay" onClick={() => setMenuOpen(false)}>
            <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-drawer-top">
                <Link href="/" onClick={() => setMenuOpen(false)} aria-label="NarnaulOnline Studio Home">
                  <Logo3D width={138} height={32} />
                </Link>
                <button
                  type="button"
                  className="mobile-close-btn"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Quick CLI Search for Mobile */}
              <button
                type="button"
                className="mobile-cmd-btn"
                onClick={() => {
                  setMenuOpen(false);
                  setCmdOpen(true);
                }}
              >
                <span>🔍 Quick Jump Palette</span>
                <kbd className="cmd-kbd">⌘K</kbd>
              </button>

              <div className="mobile-links-stack">
                <Link href="/" className="mobile-item-link" onClick={() => setMenuOpen(false)}>
                  <span>🏠 Home</span>
                  <span>&rarr;</span>
                </Link>
                <Link href="/#services" className="mobile-item-link" onClick={() => setMenuOpen(false)}>
                  <span>💻 Services</span>
                  <span>&rarr;</span>
                </Link>
                <Link href="/#architectures" className="mobile-item-link" onClick={() => setMenuOpen(false)}>
                  <span>🏛️ Architectures</span>
                  <span>&rarr;</span>
                </Link>
                <Link href="/portfolio" className="mobile-item-link" onClick={() => setMenuOpen(false)}>
                  <span>💼 Case Studies</span>
                  <span className="dev-count-pill">12+</span>
                </Link>
                <Link href="/#estimator" className="mobile-item-link" onClick={() => setMenuOpen(false)}>
                  <span>⚡ Scope Estimator</span>
                  <span>&rarr;</span>
                </Link>
                <Link href="/about" className="mobile-item-link" onClick={() => setMenuOpen(false)}>
                  <span>🏢 About Studio</span>
                  <span>&rarr;</span>
                </Link>
                <Link href="/contact" className="mobile-item-link" onClick={() => setMenuOpen(false)}>
                  <span>📍 Contact Desk</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  Start a Project &rarr;
                </Link>
                <a
                  href="https://wa.me/919416341097?text=Hello%20NarnaulOnline%20Team%2C%20I%20am%20interested%20in%20a%20project."
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

      {/* =================================================================
          DEVELOPER COMMAND PALETTE MODAL (⌘K SPOTLIGHT)
          ================================================================= */}
      {cmdOpen && (
        <div className="command-palette-backdrop" onClick={() => setCmdOpen(false)}>
          <div className="command-palette-modal" onClick={(e) => e.stopPropagation()}>
            {/* Search Input Bar */}
            <div className="cmd-search-bar">
              <span className="cmd-modal-icon">🔍</span>
              <input
                type="text"
                autoFocus
                placeholder="Type a command or jump to section..."
                value={cmdSearch}
                onChange={(e) => setCmdSearch(e.target.value)}
                className="cmd-modal-input"
              />
              <span className="cmd-esc-tag" onClick={() => setCmdOpen(false)}>
                ESC
              </span>
            </div>

            {/* Quick Actions List */}
            <div className="cmd-results-list">
              {copiedCli && (
                <div className="cmd-copied-notice">
                  ✓ Copied `npx @narnaulonline/create-app` to clipboard!
                </div>
              )}

              {filteredCommands.length > 0 ? (
                filteredCommands.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="cmd-item-row"
                    onClick={() => handleCommandAction(item)}
                  >
                    <div className="cmd-item-left">
                      <span className="cmd-item-icon">{item.icon}</span>
                      <div>
                        <strong className="cmd-item-title">{item.label}</strong>
                        <span className="cmd-item-cat">{item.category}</span>
                      </div>
                    </div>
                    <kbd className="cmd-shortcut-tag">{item.shortcut}</kbd>
                  </button>
                ))
              ) : (
                <div className="cmd-empty-state">
                  No matching commands found for &quot;{cmdSearch}&quot;.
                </div>
              )}
            </div>

            {/* Command Palette Footer */}
            <div className="cmd-footer-bar">
              <div>
                <span>Navigate: <strong>↑ ↓</strong></span>
                <span style={{ marginLeft: "12px" }}>Select: <strong>↵ Enter</strong></span>
                <span style={{ marginLeft: "12px" }}>Close: <strong>ESC</strong></span>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
                NarnaulOnline Studio CLI v2.4
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
