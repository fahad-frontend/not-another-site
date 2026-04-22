"use server";

import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(_prev, formData) {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const project = String(formData.get("project") || "").trim();
  const budget = String(formData.get("budget") || "").trim();

  if (!name || name.length < 2) {
    return { ok: false, error: "Please add your name." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "That email doesn't look right." };
  }
  if (!project || project.length < 10) {
    return { ok: false, error: "Tell us a bit more about your project." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    console.warn(
      "[contact] RESEND_API_KEY or CONTACT_TO_EMAIL missing. Logging submission instead.",
      { name, email, project, budget }
    );
    return { ok: true };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `notanother.site <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New project inquiry from ${name}${budget ? ` (${budget})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Budget: ${budget || "n/a"}`,
        "",
        "Project:",
        project,
      ].join("\n"),
    });
    return { ok: true };
  } catch (err) {
    console.error("[contact] resend failed", err);
    return { ok: false, error: "Something broke on our end. Try email instead." };
  }
}
