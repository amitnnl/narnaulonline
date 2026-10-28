import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

// Simple sanitization helper to prevent script injection / XSS
function sanitize(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

// Basic email format validator
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Local inquiries ledger fallback helper
function saveInquiryToLedger(inquiry: Record<string, unknown>) {
  try {
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "inquiries.json");

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let records: Record<string, unknown>[] = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      if (fileData.trim()) {
        records = JSON.parse(fileData);
      }
    }

    records.unshift(inquiry);
    // Keep last 200 inquiries
    if (records.length > 200) {
      records = records.slice(0, 200);
    }

    fs.writeFileSync(filePath, JSON.stringify(records, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Failed to save inquiry to local ledger:", err);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, timeline, message, scopeSummary } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Client name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Project requirements or message cannot be empty." },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    const cleanName = sanitize(name).slice(0, 100);
    const cleanEmail = sanitize(email).slice(0, 150);
    const cleanPhone = sanitize(phone || "Not provided").slice(0, 40);
    const cleanService = sanitize(service || "General Software Inquiry").slice(0, 150);
    const cleanBudget = sanitize(budget || "Not specified").slice(0, 100);
    const cleanTimeline = sanitize(timeline || "Standard").slice(0, 100);
    const cleanMessage = sanitize(message).slice(0, 3000);
    const cleanScope = scopeSummary ? sanitize(scopeSummary).slice(0, 2000) : null;

    const inquiryId = `NNL-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "onlinenarnaul@gmail.com";

    // 1. Always save to local server ledger so NO inquiry is ever lost
    saveInquiryToLedger({
      inquiryId,
      timestamp,
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      service: cleanService,
      budget: cleanBudget,
      timeline: cleanTimeline,
      message: cleanMessage,
      scopeBlueprint: cleanScope,
    });

    let deliveryMethod = "none";
    let needsActivation = false;
    let deliveryMessage = "Your inquiry has been received.";

    // 2. PRIMARY: Try direct SMTP if configured via environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const isSecure = process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465";
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(process.env.SMTP_PORT) || 465,
          secure: isSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Project Inquiry - ${cleanService}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f8fafc; padding: 24px; color: #0f172a;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <div style="background: #0f172a; padding: 20px 24px; border-bottom: 3px solid #2563eb;">
      <h2 style="color: #ffffff; margin: 0; font-size: 1.25rem;">NarnaulOnline Studio • New Inquiry</h2>
      <p style="color: #94a3b8; margin: 4px 0 0; font-size: 0.85rem;">Inquiry Ref: <strong>${inquiryId}</strong></p>
    </div>
    
    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; font-weight: 600; color: #64748b; width: 140px;">Client Name:</td>
          <td style="padding: 10px 0; font-weight: 700; color: #0f172a;">${cleanName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Email Address:</td>
          <td style="padding: 10px 0;"><a href="mailto:${cleanEmail}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${cleanEmail}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Phone / WhatsApp:</td>
          <td style="padding: 10px 0; font-weight: 600; color: #0f172a;">
            ${cleanPhone} 
            ${cleanPhone !== "Not provided" ? `<a href="https://wa.me/${cleanPhone.replace(/[^0-9]/g, "")}" style="color: #059669; font-size: 0.85rem; margin-left: 8px;">(Open WhatsApp)</a>` : ""}
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Service Track:</td>
          <td style="padding: 10px 0; font-weight: 600; color: #2563eb;">${cleanService}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Budget Scope:</td>
          <td style="padding: 10px 0; color: #0f172a;">${cleanBudget}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Target Timeline:</td>
          <td style="padding: 10px 0; color: #0f172a;">${cleanTimeline}</td>
        </tr>
      </table>

      <h4 style="color: #0f172a; margin: 18px 0 8px; font-size: 0.95rem;">Client Requirements &amp; Message:</h4>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; font-size: 0.95rem; line-height: 1.6; white-space: pre-wrap;">
${cleanMessage}
      </div>

      ${cleanScope ? `
      <h4 style="color: #0f172a; margin: 20px 0 8px; font-size: 0.95rem;">Interactive Scope Blueprint:</h4>
      <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px 14px; font-size: 0.88rem; color: #1e3a8a; line-height: 1.5;">
${cleanScope}
      </div>
      ` : ""}

      <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid #e2e8f0; text-align: center;">
        <a href="mailto:${cleanEmail}?subject=Re: NarnaulOnline Studio Inquiry [${inquiryId}]" style="display: inline-block; background: #2563eb; color: #ffffff; padding: 10px 22px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.9rem;">
          Reply to ${cleanName} &rarr;
        </a>
      </div>
    </div>
  </div>
</body>
</html>
`;

        await transporter.sendMail({
          from: `"NarnaulOnline Studio" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: cleanEmail,
          subject: `[${inquiryId}] New Inquiry: ${cleanService} - ${cleanName}`,
          html: htmlEmail,
          text: `New Inquiry from ${cleanName} (${cleanEmail}, ${cleanPhone})\nService: ${cleanService}\nBudget: ${cleanBudget}\nTimeline: ${cleanTimeline}\n\nMessage:\n${cleanMessage}\n\nScope:\n${cleanScope || "N/A"}`,
        });

        deliveryMethod = "smtp";
        deliveryMessage = "Your inquiry has been successfully delivered to Principal Architect Amit Jangid.";
      } catch (smtpErr) {
        console.error("Direct SMTP delivery error, falling back to FormSubmit relay:", smtpErr);
      }
    }

    // 3. SECONDARY FALLBACK: FormSubmit AJAX with valid Origin & Referer headers
    if (deliveryMethod !== "smtp") {
      try {
        const formSubmitPayload: Record<string, string> = {
          name: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          service: cleanService,
          budget: cleanBudget,
          timeline: cleanTimeline,
          message: cleanMessage,
          inquiryId: inquiryId,
          _subject: `[${inquiryId}] Inquiry: ${cleanService} - ${cleanName}`,
          _captcha: "false",
          _template: "table",
        };

        if (cleanScope) {
          formSubmitPayload["scopeBlueprint"] = cleanScope;
        }

        const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Origin: "https://narnaulonline.com",
            Referer: "https://narnaulonline.com/",
          },
          body: JSON.stringify(formSubmitPayload),
        });

        if (formSubmitResponse.ok) {
          const formSubmitData = await formSubmitResponse.json().catch(() => ({}));
          deliveryMethod = "formsubmit";

          if (formSubmitData && typeof formSubmitData.message === "string") {
            if (formSubmitData.message.toLowerCase().includes("activation")) {
              needsActivation = true;
              console.warn(
                "[FormSubmit Notice]: FormSubmit requires 1-time activation. Check inbox at",
                recipientEmail,
                "and click 'Activate Form'."
              );
            }
          }
        } else {
          console.warn("FormSubmit HTTP error:", formSubmitResponse.status);
          deliveryMethod = "ledger";
        }
      } catch (relayError) {
        console.error("FormSubmit relay error:", relayError);
        deliveryMethod = "ledger";
      }
    }

    return NextResponse.json({
      success: true,
      inquiryId,
      deliveryMethod,
      needsActivation,
      message: deliveryMessage,
      timestamp,
      whatsappUrl: `https://wa.me/919416341097?text=${encodeURIComponent(
        `Hello Amit, I submitted an inquiry on NarnaulOnline Studio:\n• Ref: ${inquiryId}\n• Name: ${cleanName}\n• Service: ${cleanService}\n• Budget: ${cleanBudget}\n• Timeline: ${cleanTimeline}\n• Message: ${cleanMessage.slice(0, 300)}`
      )}`,
      mailtoUrl: `mailto:${recipientEmail}?subject=${encodeURIComponent(
        `[${inquiryId}] Project Inquiry: ${cleanService} - ${cleanName}`
      )}&body=${encodeURIComponent(
        `Ref ID: ${inquiryId}\nName: ${cleanName}\nEmail: ${cleanEmail}\nPhone: ${cleanPhone}\nService: ${cleanService}\nBudget: ${cleanBudget}\nTimeline: ${cleanTimeline}\n\nProject Requirements:\n${cleanMessage}`
      )}`,
    });
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry. Please connect directly via WhatsApp (+91 9416341097)." },
      { status: 500 }
    );
  }
}
