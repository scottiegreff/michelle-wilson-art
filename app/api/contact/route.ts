import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const INQUIRY_LABELS: Record<string, string> = {
  "original-artwork": "Original artwork",
  commission: "Commission",
  "art-rental-staging": "Art rental or staging",
  "studio-visit": "Studio visit",
  "gallery-press-curatorial": "Gallery, press or curatorial inquiry",
  collaboration: "Collaboration",
  other: "Other",
};

function escapeHtml(value: unknown) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const { name, email, type, message } = await req.json();

  if (!name || !email || !type || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const label = escapeHtml(INQUIRY_LABELS[type] ?? type);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  const { error } = await resend.emails.send({
    from: "Michelle R. Wilson Studio <studio@michellewilson.art>",
    to: "studio@michellewilson.art",
    replyTo: email,
    subject: `New inquiry: ${INQUIRY_LABELS[type] ?? String(type)} — ${String(name)}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; color: #1a1a1a;">
        <h2 style="font-weight: 400; font-size: 24px; margin-bottom: 4px;">${label}</h2>
        <p style="color: #4a5568; font-size: 13px; margin-top: 0;">via michellewilson.art</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Type:</strong> ${label}</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="white-space: pre-wrap;">${safeMessage}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
