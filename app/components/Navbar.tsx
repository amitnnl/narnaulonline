"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Organization", href: "/about" },
  { label: "Solutions", href: "/#services" },
  { label: "Architecture", href: "/#stacks" },
  { label: "Cost Estimator", href: "/#estimator" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
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
      <div className="container nav-wrap">
        {/* Brand Logo */}
        <Link href="/" className="brand" aria-label="NarnaulOnline • Full-Stage Software Development Organization">
          <Image
            src="/logo.png"
            alt="NarnaulOnline • Full-Stage Software Development Organization"
            width={230}
            height={56}
            className="brand-logo"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="main-nav desktop-nav" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={isActive(link.href) ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="nav-actions">
          <a
            href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
            className="nav-whatsapp-btn"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp with Amit Jangid"
          >
            <span>💬</span> WhatsApp
          </a>

          <Link href="/contact" className="btn btn-primary nav-cta-btn">
            GET A QUOTE
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
              <span className="mobile-drawer-eyebrow">NAVIGATION</span>
              <button
                className="mobile-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mobile-nav-list">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`mobile-nav-link ${isActive(link.href) ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="mobile-arrow">→</span>
                </Link>
              ))}
            </nav>

            <div className="mobile-drawer-actions">
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "12px" }}
                onClick={() => setMenuOpen(false)}
              >
                GET A QUOTE
              </Link>

              <a
                href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
                className="btn btn-whatsapp"
                style={{ width: "100%", justifyContent: "center", padding: "12px" }}
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
