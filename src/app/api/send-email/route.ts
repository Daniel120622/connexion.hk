import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Very small in-memory rate limiter: max REQUESTS per WINDOW per IP.
// Note: this resets on redeploy/cold start and isn't shared across
// serverless instances -- it's a first line of defense against casual
// abuse, not a substitute for a real limiter (e.g. Upstash) if this
// endpoint gets targeted seriously.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const recentHits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (recentHits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  recentHits.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot: a hidden field real visitors never see or fill in.
    // Bots that auto-fill every input on the form will trip it.
    if (typeof body.company === "string" && body.company.trim() !== "") {
      // Report success without actually sending, so the bot learns nothing.
      return NextResponse.json({ success: true, message: "Email sent" });
    }

    const name = (body.name || "").toString().trim().slice(0, 200);
    const userEmail = (body.email || "").toString().trim().slice(0, 200);
    const message = (body.message || "").toString().trim().slice(0, 5000);

    if (!name || !userEmail || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all fields." },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(userEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create the Resend client at request time to avoid build-time
    // instantiation issues.
    const resend = new Resend(process.env.RESEND_API_KEY);

    // CONTACT_FROM_EMAIL must be an address on a domain verified in the
    // Resend dashboard -- the default sandbox sender (onboarding@resend.dev)
    // cannot reliably deliver to a real inbox in production. See README.
    const fromAddress = process.env.CONTACT_FROM_EMAIL || "Connexions HK <onboarding@resend.dev>";
    const toAddress = process.env.CONTACT_TO_EMAIL || "sales@connexions.hk";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(userEmail);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const result = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: `${name} <${userEmail}>`,
      subject: `聯絡表單：${name}`,
      text: `姓名：${name}\n電郵：${userEmail}\n訊息：${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #3ac9d9;">新聯絡訊息（來自 ${safeName}）</h2>
          <p><strong>姓名：</strong> ${safeName}</p>
          <p><strong>電郵：</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>訊息內容：</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #3ac9d9; margin: 15px 0;">
            ${safeMessage}
          </blockquote>
          <p style="color: #666; font-size: 0.9em;">這是從網站聯絡表單發送的訊息。</p>
        </div>
      `,
    });

    // Report the real outcome -- a Resend error must not look like success
    // to the visitor, or a lead silently vanishes.
    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { success: false, error: "Failed to send your message. Please try again or email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent", id: result.data?.id });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}
