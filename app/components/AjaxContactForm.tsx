"use client";

import { useState } from "react";

interface AjaxContactFormProps {
  defaultService?: string;
  scopeSummary?: string;
  sourceContext?: string;
}

const serviceOptions = [
  { id: "webapp", label: "Full-Stack Web App (Next.js/React)", icon: "💻" },
  { id: "erp", label: "Enterprise ERP & Admin Portal", icon: "💼" },
  { id: "ecommerce", label: "B2B Wholesale & Commerce", icon: "🛒" },
  { id: "math", label: "Deterministic Financial Math Engine", icon: "⚙️" },
  { id: "ai", label: "AI Workflows & Automation", icon: "🤖" },
  { id: "zerodb", label: "Zero-DB Edge Cloud Setup", icon: "🌐" },
  { id: "consult", label: "Architecture Consultation", icon: "💬" },
];

const budgetTiers = [
  { id: "tier1", label: "< ₹50,000" },
  { id: "tier2", label: "₹50,000 – ₹1,50,000" },
  { id: "tier3", label: "₹1,50,000 – ₹4,00,000" },
  { id: "tier4", label: "₹4,00,000+ / Custom" },
];

const timelineTiers = [
  { id: "asap", label: "⚡ ASAP (1–2 Weeks)" },
  { id: "1mo", label: "📅 1 Month" },
  { id: "3mo", label: "🚀 2–3 Months" },
  { id: "flex", label: "💡 Exploring Scope" },
];

export default function AjaxContactForm({
  defaultService = "Full-Stack Web App (Next.js/React)",
  scopeSummary = "",
  sourceContext = "Homepage Web Developer Agency",
}: AjaxContactFormProps) {
  const [selectedService, setSelectedService] = useState(defaultService || serviceOptions[0].label);
  const [selectedBudget, setSelectedBudget] = useState("₹50,000 – ₹1,50,000");
  const [selectedTimeline, setSelectedTimeline] = useState("📅 1 Month");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [inquiryId, setInquiryId] = useState("");
  const [needsActivation, setNeedsActivation] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [mailtoUrl, setMailtoUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Package comprehensive project specification
    const fullScopeDetails = [
      scopeSummary ? `Estimator Scope: ${scopeSummary}` : null,
      `Service: ${selectedService}`,
      `Budget Tier: ${selectedBudget}`,
      `Target Timeline: ${selectedTimeline}`,
      formData.company ? `Company / Organization: ${formData.company}` : null,
    ]
      .filter(Boolean)
      .join(" | ");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          service: selectedService,
          budget: selectedBudget,
          timeline: selectedTimeline,
          message: formData.message,
          scopeSummary: fullScopeDetails,
          sourceContext,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setInquiryId(data.inquiryId || `NNL-${Math.random().toString(36).substring(2, 7).toUpperCase()}`);
        if (data.needsActivation) {
          setNeedsActivation(true);
        }
        if (data.whatsappUrl) {
          setWhatsappUrl(data.whatsappUrl);
        }
        if (data.mailtoUrl) {
          setMailtoUrl(data.mailtoUrl);
        }
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit inquiry. Please try again or chat via WhatsApp.");
      }
    } catch (err) {
      console.error("AJAX form submission error:", err);
      // Fallback: Direct FormSubmit endpoint with browser headers
      try {
        const directRes = await fetch("https://formsubmit.co/ajax/onlinenarnaul@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Origin: typeof window !== "undefined" ? window.location.origin : "https://narnaulonline.com",
            Referer: typeof window !== "undefined" ? window.location.href : "https://narnaulonline.com/",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: selectedService,
            budget: selectedBudget,
            timeline: selectedTimeline,
            message: formData.message,
            scopeDetails: fullScopeDetails,
            _subject: `New Project Inquiry: ${selectedService} - ${formData.name}`,
            _captcha: "false",
            _template: "table",
          }),
        });

        if (directRes.ok) {
          const directData = await directRes.json().catch(() => ({}));
          setStatus("success");
          setInquiryId(`NNL-${Math.random().toString(36).substring(2, 7).toUpperCase()}`);
          if (directData?.message?.toLowerCase().includes("activation")) {
            setNeedsActivation(true);
          }
          return;
        }
      } catch (fallbackErr) {
        console.error("Direct fallback failed:", fallbackErr);
      }

      setStatus("error");
      setErrorMessage("Network connection error. Please connect directly via WhatsApp (+91 9416341097).");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
    setNeedsActivation(false);
  };

  const fallbackWhatsappText = encodeURIComponent(
    `Hello Amit, I submitted an inquiry on NarnaulOnline Studio:\n• Ref: ${inquiryId}\n• Name: ${formData.name}\n• Service: ${selectedService}\n• Budget: ${selectedBudget}\n• Timeline: ${selectedTimeline}\n• Message: ${formData.message.slice(0, 200)}`
  );

  return (
    <div className="inquiry-form-wrapper">
      {status === "success" ? (
        <div className="inquiry-success-view">
          <div className="success-icon-badge">
            <span className="success-check-mark">✓</span>
          </div>

          <span className="success-eyebrow">INQUIRY DISPATCHED &amp; REGISTERED</span>
          <h3 className="success-title">Project Specification Received!</h3>
          <p className="success-desc">
            Thank you, <strong>{formData.name}</strong>. Your project requirements have been registered under Reference ID <strong>{inquiryId}</strong> and delivered to Principal Software Architect <strong>Amit Jangid</strong> at <strong>onlinenarnaul@gmail.com</strong>.
          </p>

          {needsActivation && (
            <div style={{
              background: "#FFFBEB",
              border: "1px solid #FCD34D",
              color: "#92400E",
              padding: "14px 18px",
              borderRadius: "8px",
              fontSize: "0.85rem",
              margin: "18px 0",
              textAlign: "left",
              lineHeight: 1.5,
            }}>
              <strong>⚠️ Notice for Website Owner (FormSubmit 1-Time Activation):</strong>
              <div style={{ marginTop: "4px" }}>
                FormSubmit has sent a 1-time activation link to <strong>onlinenarnaul@gmail.com</strong>. Please check your inbox (or <em>Spam / Junk</em> folder) and click <strong>&quot;Activate Form&quot;</strong> to activate automatic email delivery.
              </div>
            </div>
          )}

          <div className="success-meta-card">
            <div className="meta-row">
              <span className="meta-label">Tracking ID</span>
              <span className="meta-code">{inquiryId}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Selected Discipline</span>
              <span className="meta-val">{selectedService}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Budget Tier</span>
              <span className="meta-val">{selectedBudget}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Target Timeline</span>
              <span className="meta-val">{selectedTimeline}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Guaranteed Response SLA</span>
              <span className="meta-sla">⚡ Under 2 Hours</span>
            </div>
          </div>

          <div className="success-actions" style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginTop: "24px" }}>
            <a
              href={whatsappUrl || `https://wa.me/919416341097?text=${fallbackWhatsappText}`}
              className="btn btn-whatsapp btn-lg"
              target="_blank"
              rel="noreferrer"
            >
              💬 Send Direct Copy to Amit&apos;s WhatsApp
            </a>
            {mailtoUrl && (
              <a
                href={mailtoUrl}
                className="btn btn-secondary btn-lg"
              >
                ✉️ Open in Email App
              </a>
            )}
            <button type="button" className="btn btn-secondary btn-sm" onClick={handleReset}>
              ↺ Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="inquiry-form-body">
          {/* Status Alert Banner */}
          {status === "error" && (
            <div className="inquiry-error-banner">
              <span className="error-icon">⚠️</span>
              <div>
                <strong>Submission Notice:</strong> {errorMessage}
              </div>
            </div>
          )}

          {/* Attached Blueprint if configured via Estimator */}
          {scopeSummary && (
            <div className="inquiry-scope-banner">
              <div className="scope-banner-head">
                <span className="scope-pill">ATTACHED ESTIMATOR SCOPE</span>
                <span className="scope-synced-pill">✓ Synced</span>
              </div>
              <p className="scope-banner-text">{scopeSummary}</p>
            </div>
          )}

          {/* STEP 1: Select Project Discipline */}
          <div className="inquiry-step-block">
            <div className="step-label-row">
              <span className="step-badge">STEP 01</span>
              <span className="step-title">What are you looking to build?</span>
            </div>

            <div className="pills-selector-grid">
              {serviceOptions.map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  className={`pill-option-btn ${selectedService === svc.label ? "active" : ""}`}
                  onClick={() => setSelectedService(svc.label)}
                >
                  <span className="pill-icon">{svc.icon}</span>
                  <span className="pill-text">{svc.label}</span>
                  {selectedService === svc.label && <span className="pill-check">✓</span>}
                </button>
              ))}
            </div>
          </div>

          {/* STEP 2: Budget & Timeline */}
          <div className="inquiry-step-block">
            <div className="step-label-row">
              <span className="step-badge">STEP 02</span>
              <span className="step-title">Estimated Budget &amp; Target Launch</span>
            </div>

            <div className="budget-timeline-row">
              <div className="sub-step-group">
                <label className="sub-step-label">Approximate Budget (INR)</label>
                <div className="mini-pills-row">
                  {budgetTiers.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      className={`mini-pill-btn ${selectedBudget === b.label ? "active" : ""}`}
                      onClick={() => setSelectedBudget(b.label)}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="sub-step-group">
                <label className="sub-step-label">Target Launch Date</label>
                <div className="mini-pills-row">
                  {timelineTiers.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      className={`mini-pill-btn ${selectedTimeline === t.label ? "active" : ""}`}
                      onClick={() => setSelectedTimeline(t.label)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3: Contact & Project Details */}
          <div className="inquiry-step-block">
            <div className="step-label-row">
              <span className="step-badge">STEP 03</span>
              <span className="step-title">Your Details &amp; Project Description</span>
            </div>

            <div className="form-fields-grid">
              <div className="input-field-wrap">
                <label htmlFor="inquiry-name" className="field-label">
                  Your Full Name <span className="req">*</span>
                </label>
                <div className="input-with-icon">
                  <span className="field-icon">👤</span>
                  <input
                    type="text"
                    id="inquiry-name"
                    name="name"
                    required
                    disabled={status === "submitting"}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="styled-input"
                  />
                </div>
              </div>

              <div className="input-field-wrap">
                <label htmlFor="inquiry-email" className="field-label">
                  Work Email <span className="req">*</span>
                </label>
                <div className="input-with-icon">
                  <span className="field-icon">✉</span>
                  <input
                    type="email"
                    id="inquiry-email"
                    name="email"
                    required
                    disabled={status === "submitting"}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="styled-input"
                  />
                </div>
              </div>

              <div className="input-field-wrap">
                <label htmlFor="inquiry-phone" className="field-label">
                  Phone / WhatsApp Number
                </label>
                <div className="input-with-icon">
                  <span className="field-icon">📱</span>
                  <input
                    type="tel"
                    id="inquiry-phone"
                    name="phone"
                    disabled={status === "submitting"}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 94163 41097"
                    className="styled-input"
                  />
                </div>
              </div>

              <div className="input-field-wrap">
                <label htmlFor="inquiry-company" className="field-label">
                  Company / Organization (Optional)
                </label>
                <div className="input-with-icon">
                  <span className="field-icon">🏢</span>
                  <input
                    type="text"
                    id="inquiry-company"
                    name="company"
                    disabled={status === "submitting"}
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company or Brand Name"
                    className="styled-input"
                  />
                </div>
              </div>
            </div>

            <div className="input-field-wrap" style={{ marginTop: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <label htmlFor="inquiry-message" className="field-label" style={{ margin: 0 }}>
                  Project Requirements &amp; Goals <span className="req">*</span>
                </label>
                <span style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>
                  Be as specific as you like
                </span>
              </div>
              <textarea
                id="inquiry-message"
                name="message"
                rows={4}
                required
                disabled={status === "submitting"}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your product workflows, key features required, user roles, integrations, or specific challenges you're looking to solve..."
                className="styled-textarea"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="inquiry-submit-row">
            <button
              type="submit"
              disabled={status === "submitting"}
              className={`btn btn-primary btn-lg inquiry-submit-btn ${status === "submitting" ? "loading" : ""}`}
            >
              {status === "submitting" ? (
                <>
                  <span className="spinner-circle"></span>
                  <span>Delivering Project Specification...</span>
                </>
              ) : (
                <>
                  <span>Send Project Inquiry to Engineering Desk</span>
                  <span className="submit-arrow">→</span>
                </>
              )}
            </button>

            <div className="inquiry-guarantee-note">
              <span>🔒 <strong>Direct Desk Review:</strong> Received directly by Principal Architect Amit Jangid &bull; SLA &lt; 2 Hours</span>
            </div>

            <div className="whatsapp-quick-alternative">
              <span>Prefer instant chat? </span>
              <a
                href="https://wa.me/919416341097?text=Hello%20Amit%2C%20I%20would%20like%20to%20consult%20with%20your%20engineering%20desk%20directly."
                target="_blank"
                rel="noreferrer"
                className="wa-link"
              >
                💬 Chat directly on WhatsApp (+91 9416341097) &rarr;
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
