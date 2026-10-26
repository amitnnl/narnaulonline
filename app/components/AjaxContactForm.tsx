"use client";

import { useState } from "react";

interface AjaxContactFormProps {
  defaultService?: string;
  scopeSummary?: string;
  sourceContext?: string;
}

export default function AjaxContactForm({
  defaultService = "",
  scopeSummary = "",
  sourceContext = "Direct Contact Form",
}: AjaxContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [inquiryId, setInquiryId] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Dispatch asynchronous AJAX POST to our Next.js API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          scopeSummary: scopeSummary || undefined,
          sourceContext,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setInquiryId(data.inquiryId || "NNL-VERIFIED");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch (err) {
      console.error("AJAX form submission error:", err);
      // Fallback: Try FormSubmit AJAX endpoint directly
      try {
        const directRes = await fetch("https://formsubmit.co/ajax/onlinenarnaul@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New AJAX Inquiry: ${formData.service || "General"} - ${formData.name}`,
            _captcha: "false",
            _template: "table",
          }),
        });

        if (directRes.ok) {
          setStatus("success");
          setInquiryId("NNL-DIRECT");
          return;
        }
      } catch (fallbackErr) {
        console.error("Direct AJAX fallback failed:", fallbackErr);
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
      service: defaultService,
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  const whatsappText = encodeURIComponent(
    `Hello Amit, I just submitted an inquiry on NarnaulOnline.\n\nName: ${formData.name}\nService: ${formData.service}\nInquiry ID: ${inquiryId}`
  );

  return (
    <div className="ajax-form-container">
      {status === "success" ? (
        <div className="ajax-success-card animate-fade-in">
          <div className="ajax-success-icon">✓</div>
          <span className="ajax-success-tag">AJAX DISPATCH CONFIRMED</span>
          <h3 className="ajax-success-title">Inquiry Successfully Delivered!</h3>
          <p className="ajax-success-desc">
            Thank you, <strong>{formData.name}</strong>. Your project specification has been securely routed via AJAX to Founder & Principal Solutions Architect <strong>Amit Jangid</strong> at <strong>onlinenarnaul@gmail.com</strong>.
          </p>

          <div className="ajax-success-meta">
            <div>
              <span className="meta-label">Tracking ID</span>
              <span className="meta-val">{inquiryId}</span>
            </div>
            <div>
              <span className="meta-label">Guaranteed Response</span>
              <span className="meta-val">Under 2 Hours</span>
            </div>
            <div>
              <span className="meta-label">Direct Desk</span>
              <span className="meta-val">+91 9416341097</span>
            </div>
          </div>

          <div className="ajax-success-actions">
            <a
              href={`https://wa.me/919416341097?text=${whatsappText}`}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              💬 Instant WhatsApp Ping (+91 9416341097)
            </a>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              ↺ Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form ajax-form">
          {status === "error" && (
            <div className="ajax-error-alert animate-fade-in">
              <span className="alert-icon">⚠️</span>
              <div>
                <strong>Submission Notice:</strong> {errorMessage}
              </div>
            </div>
          )}

          <div className="form-row">
            <div className="field">
              <label htmlFor="ajax-name">Your Full Name *</label>
              <input
                type="text"
                id="ajax-name"
                name="name"
                required
                disabled={status === "submitting"}
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
              />
            </div>

            <div className="field">
              <label htmlFor="ajax-email">Your Work Email Address *</label>
              <input
                type="email"
                id="ajax-email"
                name="email"
                required
                disabled={status === "submitting"}
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="ajax-phone">Phone / WhatsApp Number</label>
              <input
                type="tel"
                id="ajax-phone"
                name="phone"
                disabled={status === "submitting"}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 94163 41097"
              />
            </div>

            <div className="field">
              <label htmlFor="ajax-service">Project Category / Topic</label>
              <input
                type="text"
                id="ajax-service"
                name="service"
                disabled={status === "submitting"}
                value={formData.service}
                onChange={handleChange}
                placeholder="e.g. Zero-DB Web App, Microfinance ERP, AI Multi-Agents"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="ajax-message">Project Requirements & Scope Details *</label>
            <textarea
              id="ajax-message"
              name="message"
              rows={4}
              required
              disabled={status === "submitting"}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your workflows, key features needed, users, or preferred milestones..."
            />
          </div>

          {scopeSummary && (
            <div className="ajax-scope-preview">
              <span className="scope-tag">ATTACHED SCOPE BLUEPRINT:</span>
              <p className="scope-text">{scopeSummary}</p>
            </div>
          )}

          <div className="ajax-form-submit-row">
            <button
              type="submit"
              disabled={status === "submitting"}
              className={`btn btn-primary ajax-submit-btn ${status === "submitting" ? "loading" : ""}`}
            >
              {status === "submitting" ? (
                <>
                  <span className="ajax-spinner"></span>
                  <span>DISPATCHING VIA AJAX...</span>
                </>
              ) : (
                <>
                  <span>⚡ SUBMIT INQUIRY (AJAX NO-RELOAD)</span>
                  <span className="submit-arrow">→</span>
                </>
              )}
            </button>

            <span className="ajax-sla-hint">
              🔒 100% Client-Side AJAX • Direct routing to onlinenarnaul@gmail.com
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
