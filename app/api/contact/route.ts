import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, scopeSummary } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
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
        { success: false, error: "Project requirements/message cannot be empty." },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    const cleanName = sanitize(name).slice(0, 100);
    const cleanEmail = sanitize(email).slice(0, 150);
    const cleanPhone = sanitize(phone || "Not provided").slice(0, 40);
    const cleanService = sanitize(service || "General Inquiry").slice(0, 150);
    const cleanMessage = sanitize(message).slice(0, 3000);
    const cleanScope = scopeSummary ? sanitize(scopeSummary).slice(0, 2000) : null;

    // Asynchronously dispatch via FormSubmit AJAX endpoint
    const formSubmitPayload: Record<string, string> = {
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      service: cleanService,
      message: cleanMessage,
      _subject: `New AJAX Inquiry: ${cleanService} - ${cleanName}`,
      _captcha: "false",
      _template: "table",
    };

    if (cleanScope) {
      formSubmitPayload["scopeBlueprint"] = cleanScope;
    }

    // Send AJAX POST to FormSubmit in background without redirecting the user
    try {
      const response = await fetch("https://formsubmit.co/ajax/onlinenarnaul@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formSubmitPayload),
      });

      if (!response.ok) {
        console.warn("FormSubmit AJAX returned status:", response.status);
      }
    } catch (relayError) {
      // Log relay error but do not break client response
      console.error("AJAX relay error:", relayError);
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received. Principal Architect Amit Jangid will respond within 2 hours.",
      timestamp: new Date().toISOString(),
      inquiryId: `NNL-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    });
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry. Please try again or contact via WhatsApp." },
      { status: 500 }
    );
  }
}
