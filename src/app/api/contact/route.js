import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, message, captchaToken, honey } = data || {};

    // Honeypot
    if (honey) return NextResponse.json({ ok: true }, { status: 200 });

    if (!name || !email || !message || !captchaToken) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Verify hCaptcha
    const params = new URLSearchParams();
    params.set("secret", process.env.HCAPTCHA_SECRET || "");
    params.set("response", captchaToken);

    const verify = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    }).then((r) => r.json());

    if (!verify?.success) {
      return NextResponse.json({ ok: false, error: "Captcha failed" }, { status: 400 });
    }

    // Build email content
    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM || "no-reply@example.com";
    const subject = `New portfolio message from ${name}`;
    const text = `From: ${name} <${email}>\n\n${message}`;

    // --- Send email ---

    if (resend) {
      const result = await resend.emails.send({
        from,
        to,
        subject,
        text,
      });
      if (result.error) throw result.error;
    } else {
      // // Alternative: Nodemailer
      // await transporter.sendMail({ from, to, subject, text });
      throw new Error("Email provider not configured");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}