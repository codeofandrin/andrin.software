import { NextResponse, NextRequest } from "next/server"
import { checkRateLimit } from "@vercel/firewall"
import { Resend } from "resend"

import { EMail } from "@/lib/constants"
import ContactNotificationEmail from "@/emails/ContactNotificationEmail"
import ContactConfirmationEmail from "@/emails/ContactConfirmationEmail"
import { contactSchema } from "@/lib/validations/contact"
import { APIResponse } from "@/lib/types/api"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest): Promise<NextResponse<APIResponse>> {
  try {
    const { rateLimited } = await checkRateLimit("api-contact", { request })
    if (rateLimited) {
      return NextResponse.json({ success: false, error: "Rate limit exceeded" }, { status: 429 })
    }

    const parsed = contactSchema.safeParse(await request.json().catch(() => null))
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: "Invalid request data" }, { status: 400 })
    }

    const { name, email, message, company } = parsed.data
    // company as honeypot
    if (company) {
      return NextResponse.json({ success: false, error: "Invalid request data" }, { status: 400 })
    }

    const notification = await sendNotificationEmail(name, email, message)
    if (!notification.success) {
      return NextResponse.json(
        { success: false, error: "Failed to send notification email" },
        { status: 500 }
      )
    }

    // skip errors
    await sendConfirmationEmail(name, email, message)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Unhandled error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

async function sendNotificationEmail(name: string, email: string, message: string) {
  const { data, error } = await resend.emails.send({
    from: `andrin.software <${EMail.general}>`,
    replyTo: email,
    to: [EMail.general],
    subject: `andrin.software - Neue Kontaktanfrage von ${name}`,
    react: ContactNotificationEmail({ name, email, message })
  })

  if (error) {
    console.error("Notification email error: ", error)
    return { success: false, error }
  }
  return { success: true, data }
}

async function sendConfirmationEmail(name: string, email: string, message: string) {
  const { data, error } = await resend.emails.send({
    from: `andrin.software <${EMail.general}>`,
    replyTo: EMail.general,
    to: [email],
    subject: `Danke für Ihre Kontaktanfrage`,
    react: ContactConfirmationEmail({ name, email, message })
  })

  if (error) {
    console.error("Confirmation email error: ", error)
    return { success: false, error }
  }
  return { success: true, data }
}
