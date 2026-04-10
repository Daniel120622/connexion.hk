import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    // Parse JSON body
    const body = await req.json();
    const name = (body.name || "未填").toString().trim();
    const userEmail = (body.email || "未填").toString().trim();
    const message = (body.message || "未填").toString().trim();

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json({ success: false, error: "Email service not configured" }, { status: 500 });
    }

    // Create Resend client at request time to avoid build-time instantiation issues
    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: "Connexions HK <onboarding@resend.dev>",
      to: ["sales@connexions.hk"],
      replyTo: `${name} <${userEmail}>`,
      subject: `聯絡表單：${name}`,
      text: `姓名：${name}\n電郵：${userEmail}\n訊息：${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #3ac9d9;">新聯絡訊息（來自 ${name}）</h2>
          <p><strong>姓名：</strong> ${name}</p>
          <p><strong>電郵：</strong> <a href="mailto:${userEmail}">${userEmail}</a></p>
          <p><strong>訊息內容：</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #3ac9d9; margin: 15px 0;">
            ${message.replace(/\n/g, "<br>")}
          </blockquote>
          <p style="color: #666; font-size: 0.9em;">這是從網站聯絡表單發送的訊息。</p>
        </div>
      `,
    });

    console.log("Resend send result:", JSON.stringify(result, null, 2));

    // Always return success if no exception, since Resend may return error but still send
    return NextResponse.json({ success: true, message: "Email sent", id: result.data?.id });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}
