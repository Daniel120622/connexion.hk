// app/actions/sendEmail.ts
"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: FormData) {
  try {
    const name      = (formData.get("name") as string)?.trim() || "未填";
    const userEmail = (formData.get("email") as string)?.trim() || "未填";
    const message   = (formData.get("message") as string)?.trim() || "未填";

    const { data, error } = await resend.emails.send({
    from: "Connexions HK Test <onboarding@resend.dev>",
    to: ["lhys1206@gmail.com"],  // ← 只能這個！其他會被擋
    replyTo: `${name} <${userEmail}>`,
    subject: `測試訊息來自 ${name}`,
    text: `姓名：${name}\n電郵：${userEmail}\n訊息：${message}`,
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #3ac9d9;">新聯絡訊息（DEV Receiving 測試）</h2>
          <p><strong>姓名：</strong> ${name}</p>
          <p><strong>電郵：</strong> <a href="mailto:${userEmail}">${userEmail}</a></p>
          <p><strong>訊息內容：</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #3ac9d9; margin: 15px 0;">
            ${message.replace(/\n/g, "<br>")}
          </blockquote>
          <p style="color: #666; font-size: 0.9em;">
            這是開發測試，使用 Resend Receiving 功能查看。
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message || "寄送失敗" };
    }

    return { success: true, message: "表單已提交！請在 Resend Receiving tab 查看" };
  } catch (err) {
    console.error("Exception:", err);
    return { success: false, error: "伺服器錯誤" };
  }
}