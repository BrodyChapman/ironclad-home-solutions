import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)
const LEAD_EMAIL = process.env.LEAD_EMAIL ?? "matthew_zacarias@yahoo.com"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { fullName, email, phone, address } = body

  if (!fullName || !email || !phone || !address) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  try {
    await resend.emails.send({
      // NOTE: Replace 'onboarding@resend.dev' with your verified sending domain
      // e.g. 'leads@ironcladhomesolutions.com' once your domain is verified in Resend
      from: "Ironclad Home Solutions <onboarding@resend.dev>",
      to: LEAD_EMAIL,
      subject: `New Cash Offer Request — ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #e5a200; padding-bottom: 8px;">
            New Lead: Cash Offer Request
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 140px;">Name</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Property Address</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${address}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #666; font-size: 13px;">
            Submitted via Ironclad Home Solutions website
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
