import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Contact NarnaulOnline | Full-Stage Software Development Organization",
  description:
    "Get in touch with NarnaulOnline, a full-stage software development organization headquartered in Narnaul, Haryana, India. Zero-database architectures, web applications, B2B portals, and financial software.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Hero with Organization Headquarters */}
        <section className="hero page-hero">
          <div className="container">
            <div className="org-hero-badge" style={{ marginBottom: "14px" }}>
              <span className="dot" />
              <span>Full-Stage Software Development Organization • Global Intake</span>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "var(--radius-pill)",
                background: "var(--surface-container-high)",
                border: "1px solid var(--line)",
                marginBottom: "14px",
                fontSize: "0.88rem",
                fontWeight: "600",
                color: "var(--primary)",
              }}
            >
              <span>📍</span>
              <span>Headquarters: Narnaul, Haryana, India (PIN: 123001)</span>
            </div>

            <h1>Engineering Resilient Digital Systems for Your Business.</h1>
            <p style={{ maxWidth: "780px", color: "var(--muted)", margin: "16px 0 0", fontSize: "1.1rem", lineHeight: "1.65" }}>
              Headquartered in <strong>Narnaul, Haryana, India</strong>. Let’s discuss your system architecture, zero-database serverless requirements, or commercial workflow challenges.
              All inquiries submitted through this portal are processed and delivered directly to our engineering team at{" "}
              <strong style={{ color: "var(--primary)" }}>onlinenarnaul@gmail.com</strong>.
            </p>
          </div>
        </section>

        {/* 4 Contact Channels including Location */}
        <section className="services" style={{ paddingBottom: "24px" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "22px" }}>
              <article className="service-card reveal">
                <div className="icon">📍</div>
                <h3>Headquarters Location</h3>
                <p style={{ color: "var(--muted)", marginBottom: "8px" }}>
                  Operating from southern Haryana.
                </p>
                <strong style={{ color: "var(--secondary)", fontSize: "1.05rem", display: "block" }}>
                  Narnaul, Haryana, India
                </strong>
                <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>PIN: 123001 • In-Person & Global Remote</span>
              </article>

              <article className="service-card reveal">
                <div className="icon">✉️</div>
                <h3>Organization Email</h3>
                <p style={{ color: "var(--muted)", marginBottom: "8px" }}>
                  Direct inbox delivery to principal engineering.
                </p>
                <a
                  href="mailto:onlinenarnaul@gmail.com"
                  style={{ color: "var(--primary)", fontWeight: "700", fontSize: "1.05rem", wordBreak: "break-all" }}
                >
                  onlinenarnaul@gmail.com
                </a>
              </article>

              <article className="service-card reveal">
                <div className="icon">💬</div>
                <h3>WhatsApp Business Desk</h3>
                <p style={{ color: "var(--muted)", marginBottom: "8px" }}>
                  Instant messaging, estimate sharing & scope discussion.
                </p>
                <a
                  href="https://wa.me/919416341097?text=Hello%20NarnaulOnline%20Team%2C%20I%20would%20like%20to%20discuss%20a%20development%20project."
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-flex", padding: "8px 18px", fontSize: "0.88rem" }}
                >
                  +91 9416341097 →
                </a>
              </article>

              <article className="service-card reveal">
                <div className="icon">📞</div>
                <h3>Direct Consultation Call</h3>
                <p style={{ color: "var(--muted)", marginBottom: "8px" }}>
                  Speak directly with Principal Architect Amit Jangid.
                </p>
                <a
                  href="tel:+919416341097"
                  style={{ color: "var(--primary)", fontWeight: "700", fontSize: "1.05rem" }}
                >
                  +91 9416341097
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Quick Estimator Callout */}
        <section style={{ padding: "10px 0 24px" }}>
          <div className="container">
            <div
              className="reveal"
              style={{
                background: "linear-gradient(135deg, rgba(240, 77, 12, 0.08), rgba(240, 77, 12, 0.02))",
                border: "1px solid rgba(240, 77, 12, 0.25)",
                borderRadius: "var(--radius-lg)",
                padding: "28px 36px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <div>
                <span className="eyebrow">Instant Self-Service Calculation</span>
                <h3 style={{ fontSize: "1.45rem", color: "var(--secondary)", margin: "4px 0 6px" }}>
                  Want an upfront scope & budget estimate?
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.98rem", margin: 0, maxWidth: "600px" }}>
                  Use our interactive Zero-DB Project Cost Estimator to select application specifications, calculate timeline, and generate an upfront quote starting at ₹2,999 / $49.
                </p>
              </div>
              <Link href="/#estimator" className="btn btn-primary" style={{ padding: "12px 24px" }}>
                LAUNCH ESTIMATOR →
              </Link>
            </div>
          </div>
        </section>

        {/* Location Map & Details Module */}
        <section style={{ padding: "10px 0 40px" }}>
          <div className="container">
            <div
              className="reveal"
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-lg)",
                padding: "36px",
                boxShadow: "var(--shadow)",
                display: "grid",
                gridTemplateColumns: "1.1fr 0.9fr",
                gap: "32px",
                alignItems: "center",
              }}
            >
              <div>
                <span className="eyebrow">Location Overview</span>
                <h3 style={{ fontSize: "1.7rem", margin: "8px 0 12px", color: "var(--secondary)" }}>
                  Operating from Narnaul, Haryana
                </h3>
                <p style={{ color: "var(--text)", lineHeight: "1.7", fontSize: "1rem" }}>
                  <strong>NarnaulOnline</strong> is based in <strong>Narnaul</strong>, District Mahendragarh, Haryana, India.
                  Available for in-person consultations across Delhi NCR & Haryana, and engineering zero-database digital applications for clients worldwide.
                </p>
                <div style={{ display: "grid", gap: "12px", marginTop: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                    <span style={{ color: "var(--primary)", fontWeight: 700 }}>Headquarters:</span>
                    <span>Narnaul, District Mahendragarh, Haryana</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                    <span style={{ color: "var(--primary)", fontWeight: 700 }}>Postal Code:</span>
                    <span>123001, India</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                    <span style={{ color: "var(--primary)", fontWeight: 700 }}>Timezone:</span>
                    <span>Indian Standard Time (IST, UTC+5:30)</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                    <span style={{ color: "var(--primary)", fontWeight: 700 }}>Primary Email:</span>
                    <a href="mailto:onlinenarnaul@gmail.com" style={{ color: "var(--primary)", fontWeight: 600 }}>onlinenarnaul@gmail.com</a>
                  </div>
                </div>
              </div>

              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid var(--line)",
                  height: "280px",
                  position: "relative",
                  background: "var(--surface-container)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                <iframe
                  title="Narnaul, Haryana, India Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?q=Narnaul,+Haryana,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Project Inquiry Form Section */}
        <section id="contact-form" style={{ padding: "10px 0 80px" }}>
          <div className="container">
            <div className="section-heading" style={{ marginBottom: "32px" }}>
              <span className="eyebrow">Organization Project Intake</span>
              <h2>Ready to build something smarter with NarnaulOnline?</h2>
              <p style={{ maxWidth: "680px", margin: "10px auto 0", color: "var(--text-muted)", fontSize: "1.02rem" }}>
                Tell our engineering team about your business requirements, timeline, or operational challenge.
                Submissions are sent directly to <strong>onlinenarnaul@gmail.com</strong>.
              </p>
            </div>

            <div className="form-shell" style={{ maxWidth: "800px", margin: "0 auto", display: "block" }}>
              <form
                action="https://formsubmit.co/onlinenarnaul@gmail.com"
                method="POST"
                className="contact-form"
              >
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Your Name / Organization</label>
                    <input type="text" id="name" name="name" required placeholder="e.g. Rahul Sharma (Sharma Trading Co.)" />
                  </div>

                  <div className="field">
                    <label htmlFor="email">Your Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="name@company.com" />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone / WhatsApp Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 94163 41097" />
                </div>

                <div className="field">
                  <label htmlFor="service">Project Category / Topic</label>
                  <input
                    type="text"
                    id="service"
                    name="service"
                    placeholder="e.g. Zero-DB Web App, Microfinance Loan ERP, Wholesale E-Commerce, Admin Portal"
                  />
                </div>

                <div className="field">
                  <label htmlFor="message">Project Requirements / Scope Overview</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Describe your system requirements, estimated timeline, key features, and any preferred architectural preferences..."
                  />
                </div>

                <input type="hidden" name="_subject" value="New Organization Project Intake - NarnaulOnline" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "14px", fontSize: "1rem" }}>
                  GET A QUOTE • SUBMIT PROJECT INTAKE TO ONLINENARNAUL@GMAIL.COM
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

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
